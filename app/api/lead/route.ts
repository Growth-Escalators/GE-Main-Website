import { NextResponse } from 'next/server'
import type { LandingMarket } from '@/lib/content/international-landing/types'

export const runtime = 'nodejs'

const NOTIFY_EMAIL = 'jatin@growthescalators.com'
const INTERNATIONAL_MARKETS: LandingMarket[] = ['UK', 'UAE', 'US', 'Australia']
const US_COMPANY_TYPES = [
  'Staffing company',
  'IT consultancy',
  'MSP',
  'Implementation partner',
  'SaaS or product company',
  'Other',
]
const MAX_JD_BYTES = 4 * 1024 * 1024
const ALLOWED_JD_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

type LeadPayload = {
  name?: string
  email?: string
  phone?: string
  clinic?: string
  specialization?: string
  city?: string
  budget?: string
  message?: string
  source?: string
  company?: string
  role?: string
  seats?: string
  engagement?: string
  workMode?: string
  timeline?: string
  goal?: string
  market?: LandingMarket
  startDate?: string
  engagementDuration?: string
  workingHoursNote?: string
  emirate?: string
  companyType?: string
  usTimeZone?: string
  auStateOrTimeZone?: string
  budgetRange?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  referrerUrl?: string
  landingPageRoute?: string
  jdFileName?: string
  jdFileType?: string
  jdFileBase64?: string
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Body must be a JSON object' }
  const raw = body as Record<string, unknown>
  const name = clean(raw.name)
  const email = clean(raw.email)
  const phone = clean(raw.phone)

  if (!name) return { ok: false, error: 'Name is required' }
  if (!email) return { ok: false, error: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Email looks invalid' }
  if (name.length > 200 || email.length > 200 || phone.length > 50) return { ok: false, error: 'Field too long' }

  const marketRaw = clean(raw.market)
  const company = clean(raw.company)
  const role = clean(raw.role)
  const seats = clean(raw.seats)

  if (marketRaw) {
    if (!INTERNATIONAL_MARKETS.includes(marketRaw as LandingMarket)) return { ok: false, error: 'Invalid market' }
    if (!company) return { ok: false, error: 'Company is required' }
    if (!role) return { ok: false, error: 'Skill or job title is required' }
    if (!seats) return { ok: false, error: 'Number of resources is required' }
    if (marketRaw === 'UAE' && !clean(raw.emirate)) return { ok: false, error: 'Emirate is required' }
    if (marketRaw === 'US') {
      const companyType = clean(raw.companyType)
      if (!companyType || !US_COMPANY_TYPES.includes(companyType)) return { ok: false, error: 'Company type is required' }
      if (!clean(raw.usTimeZone)) return { ok: false, error: 'US time zone is required' }
    }
    if (marketRaw === 'Australia' && !clean(raw.auStateOrTimeZone)) return { ok: false, error: 'Australian state or time zone is required' }
  }

  const jdFileName = clean(raw.jdFileName)
  const jdFileType = clean(raw.jdFileType)
  const jdRaw = clean(raw.jdFileBase64)
  let jdFileBase64 = ''
  if (jdRaw) {
    if (!ALLOWED_JD_TYPES.includes(jdFileType)) return { ok: false, error: 'JD attachment must be a PDF, DOC or DOCX file' }
    if (Buffer.from(jdRaw, 'base64').length > MAX_JD_BYTES) return { ok: false, error: 'JD attachment is too large (4MB max)' }
    jdFileBase64 = jdRaw
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      clinic: clean(raw.clinic),
      specialization: clean(raw.specialization),
      city: clean(raw.city),
      budget: clean(raw.budget),
      message: clean(raw.message).slice(0, 4000),
      source: clean(raw.source) || 'unknown',
      company,
      role,
      seats,
      engagement: clean(raw.engagement),
      workMode: clean(raw.workMode),
      timeline: clean(raw.timeline),
      goal: clean(raw.goal),
      market: marketRaw ? (marketRaw as LandingMarket) : undefined,
      startDate: clean(raw.startDate),
      engagementDuration: clean(raw.engagementDuration),
      workingHoursNote: clean(raw.workingHoursNote),
      emirate: clean(raw.emirate),
      companyType: clean(raw.companyType),
      usTimeZone: clean(raw.usTimeZone),
      auStateOrTimeZone: clean(raw.auStateOrTimeZone),
      budgetRange: clean(raw.budgetRange),
      utmSource: clean(raw.utmSource),
      utmMedium: clean(raw.utmMedium),
      utmCampaign: clean(raw.utmCampaign),
      utmTerm: clean(raw.utmTerm),
      utmContent: clean(raw.utmContent),
      referrerUrl: clean(raw.referrerUrl).slice(0, 500),
      landingPageRoute: clean(raw.landingPageRoute).slice(0, 200),
      jdFileName: jdFileBase64 ? jdFileName || 'jd-attachment' : '',
      jdFileType: jdFileBase64 ? jdFileType : '',
      jdFileBase64,
    },
  }
}

const RATE_WINDOW_MS = 60_000
const RATE_LIMIT = 5
const buckets = new Map<string, number[]>()

function clientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
}

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (buckets.get(ip) ?? []).filter((timestamp) => now - timestamp < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    buckets.set(ip, recent)
    return true
  }
  recent.push(now)
  buckets.set(ip, recent)
  return false
}

function textLines(lead: LeadPayload) {
  return [
    lead.market && `Market: ${lead.market}`,
    `Name: ${lead.name}`,
    lead.phone && `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    lead.company && `Company: ${lead.company}`,
    lead.clinic && `Practice / Business: ${lead.clinic}`,
    lead.specialization && `Specialization / Type: ${lead.specialization}`,
    lead.city && `City: ${lead.city}`,
    lead.budget && `Budget: ${lead.budget}`,
    lead.goal && `Goal: ${lead.goal}`,
    lead.role && `Role / skill needed: ${lead.role}`,
    lead.seats && `Number of resources: ${lead.seats}`,
    lead.engagement && `Engagement: ${lead.engagement}`,
    lead.workMode && `Work mode: ${lead.workMode}`,
    lead.timeline && `Timeline: ${lead.timeline}`,
    lead.startDate && `Preferred start date: ${lead.startDate}`,
    lead.engagementDuration && `Engagement duration: ${lead.engagementDuration}`,
    lead.workingHoursNote && `Working-hour expectations: ${lead.workingHoursNote}`,
    lead.emirate && `Emirate: ${lead.emirate}`,
    lead.companyType && `Company type: ${lead.companyType}`,
    lead.usTimeZone && `US time zone: ${lead.usTimeZone}`,
    lead.auStateOrTimeZone && `Australian state / time zone: ${lead.auStateOrTimeZone}`,
    lead.budgetRange && `Budget / rate range: ${lead.budgetRange}`,
    lead.jdFileName && `JD attached: ${lead.jdFileName}`,
    lead.landingPageRoute && `Landing page: ${lead.landingPageRoute}`,
    (lead.utmSource || lead.utmMedium || lead.utmCampaign) && `UTM: source=${lead.utmSource || '-'} medium=${lead.utmMedium || '-'} campaign=${lead.utmCampaign || '-'}`,
    lead.referrerUrl && `Referrer: ${lead.referrerUrl}`,
    `Source: ${lead.source}`,
    '',
    'Message:',
    lead.message || '(blank)',
  ].filter(Boolean) as string[]
}

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

async function sendViaResend(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, reason: 'no-key' }

  const to = process.env.LEAD_NOTIFY_EMAIL || NOTIFY_EMAIL
  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'
  const lines = textLines(lead)
  const attachments = lead.jdFileBase64 && lead.jdFileName ? [{ filename: lead.jdFileName, content: lead.jdFileBase64 }] : undefined

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        subject: `New ${lead.source || 'website'} lead: ${lead.name}`,
        text: lines.join('\n'),
        html: lines.map((line) => `<p>${escapeHtml(line)}</p>`).join(''),
        reply_to: lead.email,
        ...(attachments ? { attachments } : {}),
      }),
    })
    if (!response.ok) return { ok: false, reason: `resend-${response.status}: ${(await response.text().catch(() => '')).slice(0, 200)}` }
    return { ok: true }
  } catch (error) {
    return { ok: false, reason: `resend-throw: ${(error as Error).message}` }
  }
}

async function sendViaWebhook(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'no-url' }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
    })
    return response.ok ? { ok: true } : { ok: false, reason: `webhook-${response.status}` }
  } catch (error) {
    return { ok: false, reason: `webhook-throw: ${(error as Error).message}` }
  }
}

type Resource = { proof: string; resource: string }

function approvedResource(lead: LeadPayload): Resource {
  if (lead.market || /staffing|offshore|tech requirement|resource/i.test(lead.source || '')) {
    return {
      proof: 'Every staffing requirement is converted into a mandatory-skill scorecard before profiles are shared, with availability and working-hour expectations confirmed before submission.',
      resource: 'a shortlist process mapped to the requirement you shared',
    }
  }
  if (/doctor|clinic|patient|healthcare|dental/i.test(`${lead.source || ''} ${lead.specialization || ''}`)) {
    return {
      proof: 'For Dr. Dheeraj Dubay, Growth Escalators generated 35,000+ leads by connecting demand generation with a clearer website and enquiry journey.',
      resource: 'a patient-acquisition diagnosis for your clinic',
    }
  }
  if (/d2c|ecommerce|e-commerce|meta|fashion|beauty|skincare|jewellery|apparel/i.test(lead.source || '')) {
    return {
      proof: 'Paraiso moved from 1.9× to 3.2× ROAS while revenue grew 6× in 60 days after the growth system was rebuilt around stronger acquisition and conversion.',
      resource: 'a D2C growth-constraint diagnosis for your store',
    }
  }
  return {
    proof: 'Growth Escalators has worked across 187+ brands, managed ₹10Cr+ in ad spend and built a 97% client-retention record.',
    resource: 'a diagnosis of the highest-leverage constraint in your current growth system',
  }
}

async function sendAutoResponder(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key || !lead.email) return { ok: false, reason: !key ? 'no-key' : 'no-email' }

  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'
  const replyTo = process.env.LEAD_NOTIFY_EMAIL || NOTIFY_EMAIL
  const firstName = (lead.name || 'there').split(' ')[0]
  const { proof, resource } = approvedResource(lead)
  const bookUrl = 'https://www.growthescalators.com/contact'
  const subject = 'Your Growth Escalators next steps'
  const text = [
    `Hi ${firstName},`,
    '',
    'Thanks for reaching out to Growth Escalators. We received the details and will review the situation before recommending a next step.',
    '',
    `A relevant proof point: ${proof}`,
    '',
    `If useful, we can prepare ${resource}. Reply to this email or book a call: ${bookUrl}`,
    '',
    'Jatin Agrawal',
    'Growth Escalators',
    'jatin@growthescalators.com · +91-7733888883',
  ].join('\n')

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0d0d0f;line-height:1.6"><p>Hi ${escapeHtml(firstName)},</p><p>Thanks for reaching out to <strong>Growth Escalators</strong>. We received the details and will review the situation before recommending a next step.</p><p style="background:#f6f6f8;border-left:3px solid #5c24f5;padding:12px 16px;border-radius:8px"><strong>A relevant proof point:</strong> ${escapeHtml(proof)}</p><p>If useful, we can prepare <strong>${escapeHtml(resource)}</strong>.</p><p><a href="${bookUrl}" style="display:inline-block;background:#170653;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:999px">Book a free audit →</a></p><p style="margin-top:24px"><strong>Jatin Agrawal</strong><br>Growth Escalators<br><a href="mailto:${NOTIFY_EMAIL}">${NOTIFY_EMAIL}</a> · +91-7733888883</p></div>`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: lead.email, subject, text, html, reply_to: replyTo }),
    })
    if (!response.ok) return { ok: false, reason: `resend-${response.status}: ${(await response.text().catch(() => '')).slice(0, 200)}` }
    return { ok: true }
  } catch (error) {
    return { ok: false, reason: `autoresponder-throw: ${(error as Error).message}` }
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req)
  if (rateLimited(ip)) return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const validated = validate(body)
  if (!validated.ok) return NextResponse.json({ error: validated.error }, { status: 400 })

  const [resend, webhook, autoResponder] = await Promise.all([
    sendViaResend(validated.data),
    sendViaWebhook(validated.data),
    sendAutoResponder(validated.data),
  ])

  const logSafeLead = {
    ...validated.data,
    jdFileBase64: validated.data.jdFileBase64
      ? `[redacted, ${Buffer.from(validated.data.jdFileBase64, 'base64').length} bytes]`
      : undefined,
  }

  console.log('[lead]', JSON.stringify({
    receivedAt: new Date().toISOString(),
    ip,
    lead: logSafeLead,
    resend,
    webhook,
    autoResponder,
  }))

  return NextResponse.json({ ok: true })
}
