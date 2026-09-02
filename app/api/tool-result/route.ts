import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type Metric = { label: string; value: string }
type Priority = 'P1' | 'P2'

type ToolResultPayload = {
  email?: string
  toolId?: string
  toolName?: string
  sourcePath?: string
  sourceTitle?: string
  postSlug?: string
  postTitle?: string
  priority?: Priority
  headline?: string
  metrics?: Metric[]
  recommendations?: string[]
  summary?: string
}

type ValidatedToolResult = Required<Pick<
  ToolResultPayload,
  'email' | 'toolId' | 'toolName' | 'sourcePath' | 'sourceTitle' | 'postSlug' | 'postTitle' | 'priority' | 'headline' | 'metrics' | 'recommendations' | 'summary'
>>

function clean(value: unknown, max = 500): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
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

function validate(body: unknown): { ok: true; data: ValidatedToolResult } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request' }
  const raw = body as Record<string, unknown>
  const email = clean(raw.email, 200)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Valid email required' }

  const priority: Priority = raw.priority === 'P1' ? 'P1' : 'P2'
  const metrics: Metric[] = Array.isArray(raw.metrics)
    ? raw.metrics.slice(0, 8).map((item) => {
        const metric = item && typeof item === 'object' ? item as Record<string, unknown> : {}
        return { label: clean(metric.label, 120), value: clean(metric.value, 160) }
      }).filter((item) => item.label && item.value)
    : []
  const recommendations = Array.isArray(raw.recommendations)
    ? raw.recommendations.slice(0, 6).map((item) => clean(item, 500)).filter(Boolean)
    : []

  const postSlug = clean(raw.postSlug, 180)
  const postTitle = clean(raw.postTitle, 300)
  const requestedSourcePath = safeInternalPath(raw.sourcePath)
  const fallbackPath = postSlug ? `/blog/${postSlug.replace(/[^a-zA-Z0-9_-]/g, '')}` : ''
  const sourcePath = requestedSourcePath || fallbackPath || '/tools'
  const sourceTitle = clean(raw.sourceTitle, 300) || postTitle || clean(raw.toolName, 140)

  const data: ValidatedToolResult = {
    email,
    toolId: clean(raw.toolId, 100),
    toolName: clean(raw.toolName, 140),
    sourcePath,
    sourceTitle,
    postSlug,
    postTitle,
    priority,
    headline: clean(raw.headline, 500),
    metrics,
    recommendations,
    summary: clean(raw.summary, 2500),
  }

  if (!data.toolId || !data.toolName || !data.headline) return { ok: false, error: 'Tool result is incomplete' }
  return { ok: true, data }
}

async function sendPriorityAlert(data: ValidatedToolResult) {
  if (data.priority !== 'P1') return
  const url = process.env.PRIORITY_LEAD_WHATSAPP_WEBHOOK_URL
  if (!url) return

  const secret = process.env.PRIORITY_LEAD_WHATSAPP_WEBHOOK_SECRET
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
      },
      body: JSON.stringify({
        event: 'growth_tool_priority_lead',
        channel: 'whatsapp',
        recipient: '+917733888883',
        toolId: data.toolId,
        toolName: data.toolName,
        email: data.email,
        sourceTitle: data.sourceTitle,
        sourcePath: data.sourcePath,
        summary: data.summary,
      }),
    })
  } catch (error) {
    console.error('[tool-result] priority WhatsApp webhook failed', error)
  }
}

export async function POST(request: Request) {
  const parsed = validate(await request.json().catch(() => null))
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 })

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.TOOL_RESULT_FROM_EMAIL || process.env.LEAD_FROM_EMAIL
  if (!apiKey || !from) {
    console.error('[tool-result] RESEND_API_KEY or TOOL_RESULT_FROM_EMAIL/LEAD_FROM_EMAIL is not configured')
    await sendPriorityAlert(parsed.data)
    return NextResponse.json({ error: 'Email delivery is not configured' }, { status: 503 })
  }

  const data = parsed.data
  const sourceUrl = `https://www.growthescalators.com${data.sourcePath}`
  const subject = `Your ${data.toolName} result`

  const text = [
    'Hi,',
    '',
    `Here is the ${data.toolName} result you just requested on Growth Escalators.`,
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
    'If you want a second opinion, reply to this email with your store/account URL and I’ll tell you what I would investigate first.',
    '',
    'Jatin',
    'Growth Escalators',
  ].join('\n')

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:680px;margin:0 auto;color:#171512;line-height:1.55">
      <p>Hi,</p>
      <p>Here is the <strong>${escapeHtml(data.toolName)}</strong> result you just requested on Growth Escalators.</p>
      <h2 style="font-size:24px;line-height:1.2;margin:28px 0 18px">${escapeHtml(data.headline)}</h2>
      <div style="border-top:1px solid #e6e1d8;border-bottom:1px solid #e6e1d8;padding:12px 0">
        ${data.metrics.map((metric) => `<p style="margin:8px 0"><strong>${escapeHtml(metric.label)}:</strong> ${escapeHtml(metric.value)}</p>`).join('')}
      </div>
      <p style="margin-top:28px"><strong>What I would inspect next</strong></p>
      <ol>${data.recommendations.map((item) => `<li style="margin:8px 0">${escapeHtml(item)}</li>`).join('')}</ol>
      <p style="font-size:13px;color:#6a645b">This is a working diagnostic based on the inputs you provided, not a guarantee, financial forecast or service quote.</p>
      <p>For context, you ran this from <a href="${escapeHtml(sourceUrl)}" style="color:#171512">${escapeHtml(data.sourceTitle)}</a>.</p>
      <p>If you want a second opinion, reply to this email with your store/account URL and I’ll tell you what I would investigate first.</p>
      <p>Jatin<br/>Growth Escalators</p>
    </div>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: data.email,
        subject,
        text,
        html,
        reply_to: 'jatin@growthescalators.com',
      }),
    })

    const responseText = await response.text().catch(() => '')
    if (!response.ok) {
      console.error('[tool-result] Resend failed', response.status, responseText.slice(0, 500))
      await sendPriorityAlert(data)
      return NextResponse.json({ error: 'Could not deliver result email' }, { status: 502 })
    }

    await sendPriorityAlert(data)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[tool-result] email delivery failed', error)
    await sendPriorityAlert(data)
    return NextResponse.json({ error: 'Could not deliver result email' }, { status: 502 })
  }
}
