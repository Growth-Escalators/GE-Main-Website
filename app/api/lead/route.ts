import { NextResponse } from 'next/server'
import type { LandingMarket } from '@/lib/content/international-landing/types'

/**
 * POST /api/lead
 *
 * Shared lead endpoint for industry pages, /contact and international landing
 * pages. The website remains resilient: every accepted lead is logged, Resend
 * and generic webhooks are optional, and CRM delivery soft-fails rather than
 * breaking the visitor's submission.
 *
 * Optional env vars:
 *   RESEND_API_KEY
 *   LEAD_NOTIFY_EMAIL             — primary internal notification recipient.
 *   LEAD_NOTIFY_FALLBACK_EMAIL    — fallback internal recipient if primary delivery fails.
 *   LEAD_FROM_EMAIL
 *   LEAD_WEBHOOK_URL
 *   CRM_WEBSITE_LEAD_URL   — CRM POST /api/leads/website endpoint.
 *   LEAD_WEBHOOK_SECRET    — shared secret sent to CRM as x-ge-lead-secret.
 */

export const runtime = 'nodejs'

const INTERNATIONAL_MARKETS: LandingMarket[] = ['UK', 'UAE', 'US', 'Australia']
const US_COMPANY_TYPES = [
  'Staffing company', 'IT consultancy', 'MSP', 'Implementation partner', 'SaaS or product company', 'Other',
]

interface LeadPayload {
  name?: string
  email?: string
  phone?: string
  clinic?: string
  specialization?: string
  city?: string
  budget?: string
  message?: string
  source?: string

  // Generic / context-aware website fields.
  company?: string
  industry?: string
  website?: string
  service?: string
  monthlyRevenue?: string
  businessVertical?: string
  businessType?: string
  formType?: string

  // Staffing fields.
  role?: string
  seats?: string
  engagement?: string
  workMode?: string
  timeline?: string

  // International landing-page fields.
  market?: LandingMarket
  startDate?: string
  engagementDuration?: string
  workingHoursNote?: string
  emirate?: string
  companyType?: string
  usTimeZone?: string
  auStateOrTimeZone?: string
  budgetRange?: string

  // Acquisition context. UTMs are first-touch values captured client-side.
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  firstReferrerUrl?: string
  firstLandingPage?: string
  referrerUrl?: string
  /** Page where the lead actually converted/submitted. */
  landingPageRoute?: string
  /** Unchecked-by-default WhatsApp consent from the shared consent component. */
  whatsappConsent?: boolean
  whatsappConsentVersion?: string
  preferredCallTime?: string
  /** Server-derived; forwarded to the CRM for the consent audit trail. */
  clientIp?: string
  userAgent?: string
  whatsappClicked?: boolean
  whatsappClickSource?: string

  // Optional JD upload used by international staffing forms.
  jdFileName?: string
  jdFileType?: string
  jdFileBase64?: string
}

const MAX_JD_BYTES = 4 * 1024 * 1024
const ALLOWED_JD_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Body must be a JSON object' }
  const b = body as Record<string, unknown>
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
  const bool = (v: unknown) =>
    v === true || v === 'true' || v === 1 || v === '1' || v === 'yes' || v === 'on'

  const name = str(b.name)
  const email = str(b.email)
  const phone = str(b.phone)

  if (!name) return { ok: false, error: 'Name is required' }
  if (!email) return { ok: false, error: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Email looks invalid' }
  if (name.length > 200 || email.length > 200 || phone.length > 50) {
    return { ok: false, error: 'Field too long' }
  }

  // `business` was used by an older shared form. Normalize it into company so
  // old pages and the new contextual forms end up in the same CRM field.
  const company = str(b.company) || str(b.business)
  const role = str(b.role)
  const seats = str(b.seats)

  // International validation is intentionally gated by market so existing
  // doctors/D2C/contact/calculator forms keep their looser contract.
  const marketRaw = str(b.market)
  if (marketRaw) {
    if (!INTERNATIONAL_MARKETS.includes(marketRaw as LandingMarket)) {
      return { ok: false, error: 'Invalid market' }
    }
    if (!company) return { ok: false, error: 'Company is required' }
    if (!role) return { ok: false, error: 'Skill or job title is required' }
    if (!seats) return { ok: false, error: 'Number of resources is required' }

    if (marketRaw === 'UAE' && !str(b.emirate)) {
      return { ok: false, error: 'Emirate is required' }
    }
    if (marketRaw === 'US') {
      const companyType = str(b.companyType)
      if (!companyType || !US_COMPANY_TYPES.includes(companyType)) {
        return { ok: false, error: 'Company type is required' }
      }
      if (!str(b.usTimeZone)) return { ok: false, error: 'US time zone is required' }
    }
    if (marketRaw === 'Australia' && !str(b.auStateOrTimeZone)) {
      return { ok: false, error: 'Australian state or time zone is required' }
    }
  }
  const market = marketRaw ? (marketRaw as LandingMarket) : undefined

  const jdFileName = str(b.jdFileName)
  const jdFileType = str(b.jdFileType)
  const jdFileBase64Raw = str(b.jdFileBase64)
  let jdFileBase64 = ''
  if (jdFileBase64Raw) {
    if (!ALLOWED_JD_TYPES.includes(jdFileType)) {
      return { ok: false, error: 'JD attachment must be a PDF, DOC or DOCX file' }
    }
    const decodedBytes = Buffer.from(jdFileBase64Raw, 'base64').length
    if (decodedBytes > MAX_JD_BYTES) {
      return { ok: false, error: 'JD attachment is too large (4MB max)' }
    }
    jdFileBase64 = jdFileBase64Raw
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      clinic: str(b.clinic),
      specialization: str(b.specialization),
      city: str(b.city),
      budget: str(b.budget),
      message: str(b.message).slice(0, 4000),
      source: str(b.source) || 'unknown',

      company,
      industry: str(b.industry),
      website: str(b.website).slice(0, 500),
      service: str(b.service),
      monthlyRevenue: str(b.monthlyRevenue),
      businessVertical: str(b.businessVertical),
      businessType: str(b.businessType),
      formType: str(b.formType),

      role,
      seats,
      engagement: str(b.engagement),
      workMode: str(b.workMode),
      timeline: str(b.timeline),

      market,
      startDate: str(b.startDate),
      engagementDuration: str(b.engagementDuration),
      workingHoursNote: str(b.workingHoursNote),
      emirate: str(b.emirate),
      companyType: str(b.companyType),
      usTimeZone: str(b.usTimeZone),
      auStateOrTimeZone: str(b.auStateOrTimeZone),
      budgetRange: str(b.budgetRange),

      firstReferrerUrl: str(b.firstReferrerUrl).slice(0, 700),
      firstLandingPage: str(b.firstLandingPage).slice(0, 300),
      referrerUrl: str(b.referrerUrl).slice(0, 700),
      landingPageRoute: str(b.landingPageRoute).slice(0, 300),
      utmSource: str(b.utmSource).slice(0, 200),
      utmMedium: str(b.utmMedium).slice(0, 200),
      utmCampaign: str(b.utmCampaign).slice(0, 250),
      utmTerm: str(b.utmTerm).slice(0, 250),
      utmContent: str(b.utmContent).slice(0, 250),
      whatsappConsent: bool(b.whatsappConsent),
      whatsappConsentVersion: str(b.whatsappConsentVersion).slice(0, 60),
      preferredCallTime: str(b.preferredCallTime).slice(0, 120),
      whatsappClicked: bool(b.whatsappClicked),
      whatsappClickSource: str(b.whatsappClickSource).slice(0, 200),

      jdFileName: jdFileBase64 ? jdFileName || 'jd-attachment' : '',
      jdFileType: jdFileBase64 ? jdFileType : '',
      jdFileBase64,
    },
  }
}

const RATE_WINDOW_MS = 60_000
const RATE_LIMIT = 5
const ipBuckets = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const arr = (ipBuckets.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_LIMIT) {
    ipBuckets.set(ip, arr)
    return true
  }
  arr.push(now)
  ipBuckets.set(ip, arr)
  return false
}

function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

type LeadNotificationResult = {
  ok: boolean
  reason?: string
  recipient?: string
  fallbackUsed?: boolean
  primaryFailure?: string
}

async function sendViaResend(lead: LeadPayload): Promise<LeadNotificationResult> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, reason: 'no-key' }

  const primaryTo = process.env.LEAD_NOTIFY_EMAIL || 'jatin@growthescalators.com'
  const fallbackTo = process.env.LEAD_NOTIFY_FALLBACK_EMAIL || 'info@growthescalators.com'
  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'

  const subject = `New ${lead.source || 'website'} lead: ${lead.name}`
  const lines = [
    lead.market && `Market: ${lead.market}`,
    `Name: ${lead.name}`,
    lead.phone && `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    lead.company && `Company / brand: ${lead.company}`,
    lead.website && `Website: ${lead.website}`,
    lead.industry && `Industry: ${lead.industry}`,
    lead.businessVertical && `Business vertical: ${lead.businessVertical}`,
    lead.formType && `Form type: ${lead.formType}`,
    lead.service && `Service interest: ${lead.service}`,
    lead.monthlyRevenue && `Monthly online revenue: ${lead.monthlyRevenue}`,
    lead.clinic && `Practice / Business: ${lead.clinic}`,
    lead.specialization && `Specialization / Type: ${lead.specialization}`,
    lead.city && `City: ${lead.city}`,
    lead.budget && `Monthly marketing spend: ${lead.budget}`,
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
    (lead.utmSource || lead.utmMedium || lead.utmCampaign || lead.utmTerm || lead.utmContent)
      && `UTM: source=${lead.utmSource || '-'} medium=${lead.utmMedium || '-'} campaign=${lead.utmCampaign || '-'} term=${lead.utmTerm || '-'} content=${lead.utmContent || '-'}`,
    lead.firstReferrerUrl && `First referrer: ${lead.firstReferrerUrl}`,
    lead.firstLandingPage && `First landing page: ${lead.firstLandingPage}`,
    lead.landingPageRoute && `Conversion page: ${lead.landingPageRoute}`,
    lead.whatsappClicked && `WhatsApp used before form: yes${lead.whatsappClickSource ? ` (${lead.whatsappClickSource})` : ''}`,
    `Source: ${lead.source}`,
    '',
    'Message:',
    lead.message || '(blank)',
  ].filter(Boolean) as string[]

  const html = lines.map((l) => `<p>${l.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</p>`).join('')
  const attachments = lead.jdFileBase64 && lead.jdFileName
    ? [{ filename: lead.jdFileName, content: lead.jdFileBase64 }]
    : undefined

  async function deliver(to: string): Promise<{ ok: boolean; reason?: string }> {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          subject,
          text: lines.join('\n'),
          html,
          reply_to: lead.email,
          ...(attachments ? { attachments } : {}),
        }),
      })
      if (!res.ok) {
        const detail = await res.text().catch(() => '')
        return { ok: false, reason: `resend-${res.status}: ${detail.slice(0, 200)}` }
      }
      return { ok: true }
    } catch (e) {
      return { ok: false, reason: `resend-throw: ${(e as Error).message}` }
    }
  }

  const primary = await deliver(primaryTo)
  if (primary.ok) return { ok: true, recipient: primaryTo, fallbackUsed: false }

  if (fallbackTo.toLowerCase() === primaryTo.toLowerCase()) {
    return { ok: false, reason: primary.reason, recipient: primaryTo, fallbackUsed: false }
  }

  const fallback = await deliver(fallbackTo)
  if (fallback.ok) {
    return { ok: true, recipient: fallbackTo, fallbackUsed: true, primaryFailure: primary.reason }
  }

  return {
    ok: false,
    reason: `primary=${primary.reason || 'unknown'}; fallback=${fallback.reason || 'unknown'}`,
    recipient: fallbackTo,
    fallbackUsed: true,
    primaryFailure: primary.reason,
  }
}

async function sendViaWebhook(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const url = process.env.LEAD_WEBHOOK_URL
  if (!url) return { ok: false, reason: 'no-url' }
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
    })
    if (!res.ok) return { ok: false, reason: `webhook-${res.status}` }
    return { ok: true }
  } catch (e) {
    return { ok: false, reason: `webhook-throw: ${(e as Error).message}` }
  }
}

async function sendViaCrm(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const url = process.env.CRM_WEBSITE_LEAD_URL
  if (!url) return { ok: false, reason: 'no-url' }
  const secret = process.env.LEAD_WEBHOOK_SECRET

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'x-ge-lead-secret': secret } : {}),
      },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      cache: 'no-store',
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return { ok: false, reason: `crm-${res.status}: ${detail.slice(0, 200)}` }
    }
    return { ok: true }
  } catch (e) {
    return { ok: false, reason: `crm-throw: ${(e as Error).message}` }
  }
}

function resourceFor(lead: Pick<LeadPayload, 'market' | 'source'>): { caseStudy: string; resourceLine: string } {
  const offshoreStaffingProof = {
    caseStudy: 'Every requirement we receive is converted into a mandatory-skill scorecard before any profile is shared, so what lands in your inbox is already screened for the skills, experience and availability you asked for.',
    resourceLine: 'a shortlist matched specifically to the requirement you shared',
  }
  if (lead.market && INTERNATIONAL_MARKETS.includes(lead.market)) return offshoreStaffingProof

  const s = (lead.source || '').toLowerCase()
  const has = (...k: string[]) => k.some((x) => s.includes(x))
  if (has('restaurant', 'cafe', 'café', 'f&b', 'diner', 'kitchen'))
    return { caseStudy: 'Yellow Diaries grew 0 → 12,400 Instagram followers in 5 months, tripled weekend walk-ins, and became the #1-ranked café in their area.', resourceLine: 'the local-marketing playbook we used to fill their tables' }
  if (has('travel', 'tour', 'trip', 'holiday'))
    return { caseStudy: 'Flight Ticket Fare cut cost-per-lead from ₹380 to ₹94 and 4×’d funnel conversion — 500+ qualified enquiries a month.', resourceLine: 'the lead-engine breakdown behind those numbers' }
  if (has('dental', 'dentist', 'doctor', 'clinic', 'patient', 'health', 'medical'))
    return { caseStudy: 'For Dr. Dheeraj Dubay we built the website + clinic platform now driving 35,000+ patient enquiries; another clinic lifted bookings 220% in 4 months.', resourceLine: 'the patient-acquisition system we install for clinics' }
  if (has('coaching', 'institute', 'education', 'edtech', 'academy', 'tuition', 'admission'))
    return { caseStudy: 'An EdTech founder went from ₹420 to ₹88 cost-per-lead in 6 weeks — and from 2 to 20 sales calls a day.', resourceLine: 'the admissions funnel that made it happen' }
  if (has('gym', 'fitness', 'yoga', 'studio', 'member'))
    return { caseStudy: 'A fitness studio sold out 40 memberships in 30 days with our launch funnel.', resourceLine: 'the membership-launch playbook' }
  if (has('jewellery', 'jewelry', 'fashion', 'd2c', 'ecommerce', 'e-commerce', 'beauty', 'skincare', 'apparel'))
    return { caseStudy: 'Paraiso scaled from ₹33k to ₹3.4L in monthly sales in 30 days (10×), with one reel hitting 5M views and 20M+ reach.', resourceLine: 'the D2C scaling framework we ran for them' }
  if (has('salon', 'spa', 'wellness', 'aesthetic'))
    return { caseStudy: 'We’ve taken wellness brands like Odra to 20M+ monthly reach and built repeat-purchase engines that lifted AOV 118%.', resourceLine: 'the local + retention playbook for beauty businesses' }
  if (has('law', 'legal', 'advocate', 'chartered', 'accountant', 'b2b', 'consult'))
    return { caseStudy: 'Credo World went from 0 → 15 qualified B2B leads a month at a ₹2.5L average deal size, with +400% LinkedIn reach in 4 months.', resourceLine: 'the B2B lead system behind it' }
  if (has('hotel', 'resort', 'hospitality', 'banquet'))
    return { caseStudy: 'Across hospitality & F&B brands we’ve driven millions of reach and 3× walk-ins with local-first campaigns.', resourceLine: 'the direct-booking playbook' }
  if (has('interior', 'architect', 'design'))
    return { caseStudy: 'We build conversion-first sites and lead engines for design-led brands — full portfolios live, ranking, and generating enquiries.', resourceLine: 'the enquiry-generation system for design studios' }
  if (has('wedding', 'event', 'photograph'))
    return { caseStudy: 'For premium creative brands we’ve built social engines with multiple million-view reels and steady inbound enquiries.', resourceLine: 'the booking-season campaign plan' }
  if (has('car', 'detailing', 'auto', 'garage'))
    return { caseStudy: 'For local service businesses we consistently push cost-per-lead below ₹100 with 4× funnel conversion.', resourceLine: 'the local-service lead playbook' }
  if (has('offshore', 'uk offshore', 'tech requirement')) return offshoreStaffingProof
  return { caseStudy: 'Across 187+ brands we’ve managed ₹10Cr+ in ad spend at a 97% client-retention rate.', resourceLine: 'a plan tailored to your goals' }
}

async function sendAutoResponder(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, reason: 'no-key' }
  if (!lead.email) return { ok: false, reason: 'no-email' }

  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'
  const replyTo = process.env.LEAD_NOTIFY_EMAIL || 'jatin@growthescalators.com'
  const firstName = (lead.name || 'there').split(' ')[0]
  const { caseStudy, resourceLine } = resourceFor(lead)

  const raw = lead.message || ''
  const calcMatch = /\]\s*(.+)$/.exec(raw)
  const calcSummary = raw.startsWith('[') && /calculator/i.test(raw) && calcMatch ? calcMatch[1] : ''

  const bookUrl = 'https://www.growthescalators.com/contact'
  const subject = 'Your Growth Escalators breakdown (+ a quick case study)'
  const textLines = [
    `Hi ${firstName},`,
    '',
    'Thanks for reaching out to Growth Escalators — here’s what you asked for.',
    calcSummary ? `\nYour estimate:\n${calcSummary}` : '',
    `\nA quick proof point: ${caseStudy}`,
    `\nIf you’d like, we’ll put together ${resourceLine} for your business — free, no obligation. Reply to this email or book a call: ${bookUrl}`,
    '',
    'Talk soon,',
    'Team Growth Escalators',
    'growthescalators.com · +91 77338 88883',
  ].filter((l) => l !== '')

  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0d0d0f;line-height:1.6">`
    + `<p>Hi ${esc(firstName)},</p>`
    + `<p>Thanks for reaching out to <strong>Growth Escalators</strong> — here's what you asked for.</p>`
    + (calcSummary ? `<div style="background:#fff4ee;border:1px solid #ffd9c7;border-radius:12px;padding:14px 16px;margin:16px 0"><strong>Your estimate</strong><br>${esc(calcSummary)}</div>` : '')
    + `<p style="background:#f6f6f8;border-left:3px solid #FF6B35;padding:12px 16px;border-radius:8px"><strong>A quick proof point:</strong> ${esc(caseStudy)}</p>`
    + `<p>If you'd like, we'll put together <strong>${esc(resourceLine)}</strong> for your business — free, no obligation.</p>`
    + `<p><a href="${bookUrl}" style="display:inline-block;background:#FF6B35;color:#fff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:10px">Book a free strategy call →</a></p>`
    + `<p style="margin-top:24px">Talk soon,<br><strong>Team Growth Escalators</strong><br><a href="https://www.growthescalators.com" style="color:#FF6B35">growthescalators.com</a> · +91 77338 88883</p>`
    + `</div>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: lead.email, subject, text: textLines.join('\n'), html, reply_to: replyTo }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return { ok: false, reason: `resend-${res.status}: ${detail.slice(0, 200)}` }
    }
    return { ok: true }
  } catch (e) {
    return { ok: false, reason: `autoresponder-throw: ${(e as Error).message}` }
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req)
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests, please try again shortly' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const v = validate(body)
  if (!v.ok) return NextResponse.json({ error: v.error }, { status: 400 })

  // Request context is derived server-side, never trusted from the client, and
  // forwarded only to the CRM — it is part of the consent audit trail.
  const lead: LeadPayload = {
    ...v.data,
    clientIp: ip,
    userAgent: (req.headers.get('user-agent') ?? '').slice(0, 400),
  }

  const [resendResult, webhookResult, crmResult, autoResponderResult] = await Promise.all([
    sendViaResend(lead),
    sendViaWebhook(lead),
    sendViaCrm(lead),
    sendAutoResponder(lead),
  ])

  // PII-safe logging. The previous version wrote the visitor's full name,
  // phone, email and message into stdout on every submission, where it landed
  // in Vercel log retention. Only non-identifying routing context is logged now;
  // the lead itself lives in the CRM, which is access-controlled.
  console.log(
    '[lead]',
    JSON.stringify({
      receivedAt: new Date().toISOString(),
      source: lead.source,
      formType: lead.formType,
      market: lead.market,
      service: lead.service,
      landingPageRoute: lead.landingPageRoute,
      utmSource: lead.utmSource,
      utmMedium: lead.utmMedium,
      utmCampaign: lead.utmCampaign,
      hasPhone: Boolean(lead.phone),
      hasJd: Boolean(lead.jdFileBase64),
      whatsappConsent: Boolean(lead.whatsappConsent),
      resend: resendResult,
      webhook: webhookResult,
      crm: crmResult,
      autoResponder: autoResponderResult,
    }),
  )

  return NextResponse.json({ ok: true })
}
