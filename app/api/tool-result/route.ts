import { NextResponse } from 'next/server'
import { getGrowthTool, type GrowthToolId } from '@/lib/growthTools'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 40_000
const IP_WINDOW_MS = 60_000
const IP_LIMIT = 4
const EMAIL_WINDOW_MS = 10 * 60_000
const EMAIL_LIMIT = 3
const ipBuckets = new Map<string, number[]>()
const emailBuckets = new Map<string, number[]>()

type Metric = { label: string; value: string }
type Priority = 'P1' | 'P2'

type Qualification = {
  revenueLakh: number
  adSpendLakh: number
  targetRevenueLakh: number
  score: number
  stage: string
}

type Attribution = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  firstReferrerUrl: string
  firstLandingPage: string
  firstTouchAt: string
  lastLandingPage: string
  lastReferrerUrl: string
  lastUtmSource: string
  lastUtmMedium: string
  lastUtmCampaign: string
  lastUtmTerm: string
  lastUtmContent: string
  lastTouchAt: string
  referrerUrl: string
  landingPageRoute: string
  whatsappClicked: boolean
  whatsappClickSource: string
}

type ValidatedToolResult = {
  email: string
  phone: string
  toolId: GrowthToolId
  sourcePath: string
  sourceTitle: string
  postSlug: string
  postTitle: string
  intentCluster: string
  headline: string
  metrics: Metric[]
  recommendations: string[]
  summary: string
  monthlyRevenue: string
  qualification: Qualification
  attribution: Attribution
}

type DeliveryResult = { ok: boolean; reason?: string }

function clean(value: unknown, max = 500): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function bool(value: unknown): boolean {
  return value === true || value === 'true' || value === 1 || value === '1'
}

function safeNumber(value: unknown, min = 0, max = 1_000_000): number {
  const parsed = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(parsed)) return 0
  return Math.min(max, Math.max(min, parsed))
}

function safeInternalPath(value: unknown): string {
  const path = clean(value, 300)
  return /^\/[a-zA-Z0-9/_-]*$/.test(path) ? path : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

function hitBucket(
  buckets: Map<string, number[]>,
  key: string,
  windowMs: number,
  limit: number,
): boolean {
  const now = Date.now()
  const active = (buckets.get(key) ?? []).filter((time) => now - time < windowMs)
  if (active.length >= limit) {
    buckets.set(key, active)
    return true
  }
  active.push(now)
  buckets.set(key, active)

  // Serverless instances are short-lived, but keep accidental long-lived maps bounded.
  if (buckets.size > 5_000) {
    for (const [bucketKey, values] of buckets) {
      if (!values.some((time) => now - time < windowMs)) buckets.delete(bucketKey)
      if (buckets.size <= 4_000) break
    }
  }
  return false
}

function isSameOrigin(req: Request): boolean {
  const requestHost = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
  if (!requestHost) return false

  const origin = req.headers.get('origin')
  if (origin) {
    try {
      return new URL(origin).host === requestHost
    } catch {
      return false
    }
  }

  const referer = req.headers.get('referer')
  if (referer) {
    try {
      return new URL(referer).host === requestHost
    } catch {
      return false
    }
  }

  return false
}

function validate(body: unknown): { ok: true; data: ValidatedToolResult } | { ok: false; error: string; bot?: boolean } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request' }
  const raw = body as Record<string, unknown>

  // Hidden field: normal visitors never touch it. Silently accept bot traffic so
  // simple form-fill bots do not learn which field tripped the protection.
  if (clean(raw.companyWebsite, 200)) return { ok: false, error: 'ok', bot: true }

  const email = clean(raw.email, 200).toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Valid email required' }

  const requestedToolId = clean(raw.toolId, 100)
  const tool = getGrowthTool(requestedToolId)
  if (!tool) return { ok: false, error: 'Unknown growth tool' }

  const metrics: Metric[] = Array.isArray(raw.metrics)
    ? raw.metrics.slice(0, 8).map((item) => {
        const metric = item && typeof item === 'object' ? item as Record<string, unknown> : {}
        return { label: clean(metric.label, 120), value: clean(metric.value, 160) }
      }).filter((item) => item.label && item.value)
    : []

  const recommendations = Array.isArray(raw.recommendations)
    ? raw.recommendations.slice(0, 6).map((item) => clean(item, 500)).filter(Boolean)
    : []

  const postSlug = clean(raw.postSlug, 180).replace(/[^a-zA-Z0-9_-]/g, '')
  const postTitle = clean(raw.postTitle, 300)
  const requestedSourcePath = safeInternalPath(raw.sourcePath)
  const sourcePath = requestedSourcePath || (postSlug ? `/blog/${postSlug}` : `/tools/${tool.id}`)
  const sourceTitle = clean(raw.sourceTitle, 300) || postTitle || tool.shortTitle
  const headline = clean(raw.headline, 500)
  if (!headline || metrics.length === 0) return { ok: false, error: 'Tool result is incomplete' }

  const qRaw = raw.qualification && typeof raw.qualification === 'object'
    ? raw.qualification as Record<string, unknown>
    : {}
  const qualification: Qualification = {
    revenueLakh: safeNumber(qRaw.revenueLakh, 0, 100_000),
    adSpendLakh: safeNumber(qRaw.adSpendLakh, 0, 100_000),
    targetRevenueLakh: safeNumber(qRaw.targetRevenueLakh, 0, 100_000),
    score: safeNumber(qRaw.score, 0, 100),
    stage: clean(qRaw.stage, 80),
  }

  const aRaw = raw.attribution && typeof raw.attribution === 'object'
    ? raw.attribution as Record<string, unknown>
    : {}
  const attribution: Attribution = {
    utmSource: clean(aRaw.utmSource, 200),
    utmMedium: clean(aRaw.utmMedium, 200),
    utmCampaign: clean(aRaw.utmCampaign, 250),
    utmTerm: clean(aRaw.utmTerm, 250),
    utmContent: clean(aRaw.utmContent, 250),
    firstReferrerUrl: clean(aRaw.firstReferrerUrl, 700),
    firstLandingPage: clean(aRaw.firstLandingPage, 300),
    firstTouchAt: clean(aRaw.firstTouchAt, 100),
    lastLandingPage: clean(aRaw.lastLandingPage, 300),
    lastReferrerUrl: clean(aRaw.lastReferrerUrl, 700),
    lastUtmSource: clean(aRaw.lastUtmSource, 200),
    lastUtmMedium: clean(aRaw.lastUtmMedium, 200),
    lastUtmCampaign: clean(aRaw.lastUtmCampaign, 250),
    lastUtmTerm: clean(aRaw.lastUtmTerm, 250),
    lastUtmContent: clean(aRaw.lastUtmContent, 250),
    lastTouchAt: clean(aRaw.lastTouchAt, 100),
    referrerUrl: clean(aRaw.referrerUrl, 700),
    landingPageRoute: safeInternalPath(aRaw.landingPageRoute) || sourcePath,
    whatsappClicked: bool(aRaw.whatsappClicked),
    whatsappClickSource: clean(aRaw.whatsappClickSource, 200),
  }

  return {
    ok: true,
    data: {
      email,
      phone: clean(raw.phone, 50),
      toolId: tool.id,
      sourcePath,
      sourceTitle,
      postSlug,
      postTitle,
      intentCluster: clean(raw.intentCluster, 120) || tool.intentCluster,
      headline,
      metrics,
      recommendations,
      summary: clean(raw.summary, 2500),
      monthlyRevenue: clean(raw.monthlyRevenue, 120),
      qualification,
      attribution,
    },
  }
}

function calculatePriority(data: ValidatedToolResult): Priority {
  const q = data.qualification
  if (data.toolId === 'd2c-profit-calculator') {
    return q.revenueLakh >= 10 && q.adSpendLakh >= 1.5 ? 'P1' : 'P2'
  }
  if (data.toolId === 'meta-budget-planner') {
    return q.revenueLakh >= 10 && q.adSpendLakh >= 1.5 && q.targetRevenueLakh > q.revenueLakh ? 'P1' : 'P2'
  }
  if (data.toolId === 'd2c-agency-scorecard') {
    const buyingNow = q.stage === 'shortlisting' || q.stage === 'switching'
    return buyingNow && q.revenueLakh >= 10 && q.adSpendLakh >= 1.5 && q.score < 80 ? 'P1' : 'P2'
  }
  return q.revenueLakh >= 10 && q.score < 75 ? 'P1' : 'P2'
}

function buildCrmPayload(data: ValidatedToolResult, priority: Priority, req: Request) {
  const tool = getGrowthTool(data.toolId)!
  const receivedAt = new Date().toISOString()
  return {
    name: 'Growth tool user',
    email: data.email,
    phone: data.phone,
    source: `Growth Tool: ${tool.shortTitle}`,
    service: tool.service,
    businessVertical: tool.businessVertical,
    formType: `growth-tool:${tool.id}`,
    monthlyRevenue: data.monthlyRevenue,
    message: [
      `Tool: ${tool.shortTitle}`,
      `Tool ID: ${tool.id}`,
      `Intent cluster: ${data.intentCluster}`,
      `Lead priority: ${priority}`,
      `Source: ${data.sourceTitle} (${data.sourcePath})`,
      '',
      data.summary,
    ].join('\n').slice(0, 4000),

    // Explicit Growth Tool attribution fields for the CRM / webhook layer.
    toolId: tool.id,
    intentCluster: data.intentCluster,
    sourceBlog: data.postSlug,
    sourceBlogTitle: data.postTitle,
    conversionPage: data.sourcePath,
    leadPriority: priority,
    toolHeadline: data.headline,
    toolMetrics: data.metrics,
    toolRecommendations: data.recommendations,
    qualification: data.qualification,

    ...data.attribution,
    clientIp: clientIp(req),
    userAgent: (req.headers.get('user-agent') ?? '').slice(0, 400),
    receivedAt,
  }
}

async function sendToCrm(payload: Record<string, unknown>): Promise<DeliveryResult> {
  const url = process.env.CRM_WEBSITE_LEAD_URL
  if (!url) return { ok: false, reason: 'no-crm-url' }
  const secret = process.env.LEAD_WEBHOOK_SECRET
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'x-ge-lead-secret': secret } : {}),
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      return { ok: false, reason: `crm-${response.status}: ${detail.slice(0, 160)}` }
    }
    return { ok: true }
  } catch (error) {
    return { ok: false, reason: `crm-throw: ${(error as Error).message}` }
  }
}

async function sendToGenericWebhook(payload: Record<string, unknown>): Promise<DeliveryResult> {
  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'no-webhook-url' }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return response.ok ? { ok: true } : { ok: false, reason: `webhook-${response.status}` }
  } catch (error) {
    return { ok: false, reason: `webhook-throw: ${(error as Error).message}` }
  }
}

async function sendResendMessage(payload: Record<string, unknown>): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: 'no-resend-key' }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      return { ok: false, reason: `resend-${response.status}: ${detail.slice(0, 180)}` }
    }
    return { ok: true }
  } catch (error) {
    return { ok: false, reason: `resend-throw: ${(error as Error).message}` }
  }
}

async function sendCustomerResult(data: ValidatedToolResult): Promise<DeliveryResult> {
  const tool = getGrowthTool(data.toolId)!
  const from = process.env.TOOL_RESULT_FROM_EMAIL || process.env.LEAD_FROM_EMAIL
  if (!from) return { ok: false, reason: 'no-from-email' }

  const sourceUrl = `https://www.growthescalators.com${data.sourcePath}`
  const subject = `Your ${tool.shortTitle} result`
  const text = [
    'Hi,',
    '',
    `Here is the ${tool.shortTitle} result you just requested on Growth Escalators.`,
    '',
    data.headline,
    '',
    ...data.metrics.map((metric) => `${metric.label}: ${metric.value}`),
    '',
    'What I would inspect next:',
    ...data.recommendations.map((item, index) => `${index + 1}. ${item}`),
    '',
    'This is a working diagnostic based on the inputs you provided, not a guarantee, financial forecast or service quote.',
    '',
    `You ran this from: ${data.sourceTitle}`,
    sourceUrl,
    '',
    'If you want a second opinion, reply with your store/account URL and I’ll tell you what I would investigate first.',
    '',
    'Jatin',
    'Growth Escalators',
  ].join('\n')

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:680px;margin:0 auto;color:#171512;line-height:1.55">
      <p>Hi,</p>
      <p>Here is the <strong>${escapeHtml(tool.shortTitle)}</strong> result you just requested on Growth Escalators.</p>
      <h2 style="font-size:24px;line-height:1.2;margin:28px 0 18px">${escapeHtml(data.headline)}</h2>
      <div style="border-top:1px solid #e6e1d8;border-bottom:1px solid #e6e1d8;padding:12px 0">
        ${data.metrics.map((metric) => `<p style="margin:8px 0"><strong>${escapeHtml(metric.label)}:</strong> ${escapeHtml(metric.value)}</p>`).join('')}
      </div>
      <p style="margin-top:28px"><strong>What I would inspect next</strong></p>
      <ol>${data.recommendations.map((item) => `<li style="margin:8px 0">${escapeHtml(item)}</li>`).join('')}</ol>
      <p style="font-size:13px;color:#6a645b">This is a working diagnostic based on the inputs you provided, not a guarantee, financial forecast or service quote.</p>
      <p>For context, you ran this from <a href="${escapeHtml(sourceUrl)}" style="color:#171512">${escapeHtml(data.sourceTitle)}</a>.</p>
      <p>If you want a second opinion, reply with your store/account URL and I’ll tell you what I would investigate first.</p>
      <p>Jatin<br/>Growth Escalators</p>
    </div>
  `

  return sendResendMessage({
    from,
    to: data.email,
    subject,
    text,
    html,
    reply_to: 'jatin@growthescalators.com',
  })
}

async function sendInternalNotification(
  data: ValidatedToolResult,
  priority: Priority,
): Promise<DeliveryResult> {
  const tool = getGrowthTool(data.toolId)!
  const from = process.env.LEAD_FROM_EMAIL || process.env.TOOL_RESULT_FROM_EMAIL
  if (!from) return { ok: false, reason: 'no-from-email' }
  const to = process.env.LEAD_NOTIFY_EMAIL || 'jatin@growthescalators.com'
  const subject = `${priority === 'P1' ? '[P1] ' : ''}Growth Tool lead — ${tool.shortTitle}`
  const text = [
    `Priority: ${priority}`,
    `Tool: ${tool.shortTitle}`,
    `Intent: ${data.intentCluster}`,
    `Source: ${data.sourceTitle} (${data.sourcePath})`,
    `Revenue: ${data.monthlyRevenue || 'not supplied'}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : '',
    '',
    data.summary,
  ].filter(Boolean).join('\n')

  return sendResendMessage({
    from,
    to,
    subject,
    text,
    reply_to: data.email,
  })
}

async function sendPriorityAlert(data: ValidatedToolResult, priority: Priority): Promise<DeliveryResult> {
  if (priority !== 'P1') return { ok: false, reason: 'not-p1' }
  const url = process.env.PRIORITY_LEAD_WHATSAPP_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'no-whatsapp-webhook' }

  const tool = getGrowthTool(data.toolId)!
  const secret = process.env.PRIORITY_LEAD_WHATSAPP_WEBHOOK_SECRET
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
      },
      body: JSON.stringify({
        event: 'growth_tool_priority_lead',
        channel: 'whatsapp',
        recipient: '+917733888883',
        priority,
        toolId: tool.id,
        toolName: tool.shortTitle,
        email: data.email,
        phone: data.phone,
        monthlyRevenue: data.monthlyRevenue,
        sourceTitle: data.sourceTitle,
        sourcePath: data.sourcePath,
        summary: data.summary,
      }),
    })
    return response.ok ? { ok: true } : { ok: false, reason: `whatsapp-${response.status}` }
  } catch (error) {
    return { ok: false, reason: `whatsapp-throw: ${(error as Error).message}` }
  }
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 })
  }

  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 })
  }

  const ip = clientIp(request)
  if (hitBucket(ipBuckets, ip, IP_WINDOW_MS, IP_LIMIT)) {
    return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
  }

  const parsed = validate(await request.json().catch(() => null))
  if (!parsed.ok) {
    if (parsed.bot) return NextResponse.json({ ok: true })
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  if (hitBucket(emailBuckets, parsed.data.email, EMAIL_WINDOW_MS, EMAIL_LIMIT)) {
    return NextResponse.json({ error: 'Too many result requests for this email. Please try again later.' }, { status: 429 })
  }

  const data = parsed.data
  const priority = calculatePriority(data)
  const crmPayload = buildCrmPayload(data, priority, request)

  const [crm, webhook, customerEmail, internalEmail] = await Promise.all([
    sendToCrm(crmPayload),
    sendToGenericWebhook(crmPayload),
    sendCustomerResult(data),
    sendInternalNotification(data, priority),
  ])
  const whatsapp = await sendPriorityAlert(data, priority)

  console.log('[growth-tool-result]', JSON.stringify({
    receivedAt: new Date().toISOString(),
    toolId: data.toolId,
    intentCluster: data.intentCluster,
    sourcePath: data.sourcePath,
    priority,
    hasPhone: Boolean(data.phone),
    crm: crm.ok,
    webhook: webhook.ok,
    customerEmail: customerEmail.ok,
    internalEmail: internalEmail.ok,
    whatsapp: whatsapp.ok,
  }))

  const leadCaptured = crm.ok || internalEmail.ok || webhook.ok
  const ok = leadCaptured && customerEmail.ok
  return NextResponse.json({
    ok,
    leadCaptured,
    crmSaved: crm.ok,
    emailDelivered: customerEmail.ok,
    internalNotificationDelivered: internalEmail.ok,
    priority,
  }, { status: leadCaptured || customerEmail.ok ? 200 : 502 })
}
