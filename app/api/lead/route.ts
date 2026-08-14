import { NextResponse } from 'next/server'
import type { LandingMarket } from '@/lib/content/international-landing/types'

/**
 * POST /api/lead
 *
 * Receives form submissions from <LeadForm /> on every industry landing page,
 * from /contact, and from the international-landing-page family (UK live;
 * UAE/US/Australia share this same endpoint from day one — see the `market`
 * field below). Delivers the lead via up to two optional channels (email via
 * Resend, generic webhook) and falls back to a server log if neither is
 * configured.
 *
 * Env vars (all optional — see CLAUDE.md for full setup notes):
 *   RESEND_API_KEY         — if set, sends an email via Resend's REST API.
 *   LEAD_NOTIFY_EMAIL      — recipient address (default: Info@growthescalators.com).
 *   LEAD_FROM_EMAIL        — from address (default: onboarding@resend.dev).
 *   LEAD_WEBHOOK_URL       — if set, POSTs the lead body as JSON to this URL.
 *
 * Prospect auto-responder: when RESEND_API_KEY is set we also email the LEAD
 * (not just the team) a helpful breakdown + a real case study, keyed off
 * `market` (preferred, exact) with a `source` substring match retained as a
 * fallback for forms that don't send `market`. Reaching arbitrary inboxes
 * requires a VERIFIED sending domain in Resend (set LEAD_FROM_EMAIL) — with
 * the default onboarding@resend.dev Resend only delivers to the account
 * owner. Soft-fails, never blocks the submit.
 *
 * JD attachment (used by the international-landing-page family): the client
 * reads the uploaded file as base64 and sends it inline in the JSON body.
 * Validated server-side (PDF/DOC/DOCX, <=4MB decoded) before being attached
 * to the Resend email — never trust the client-side check alone.
 *
 * Rate limit: 5 requests per IP per minute (in-memory; resets on cold start).
 * Defensible against trivial form spam without adding a Redis dep.
 *
 * ── International-landing-page contract (UK/UAE/US/Australia) ──────────
 * These forms always send `market`, which gates a stricter validation layer
 * (see `validate()` below) WITHOUT touching the loose validation every other
 * form on the site (doctors/staffing/contact/calculator) already relies on —
 * none of those forms send `market`, so they are completely unaffected.
 *
 * Always required (any market):        name, email, company, role (skill/job
 *                                       title), seats (number of resources), market.
 * Market-specific REQUIRED additions:  UAE → emirate.
 *                                       US  → companyType (enum, see
 *                                       US_COMPANY_TYPES below), usTimeZone.
 *                                       Australia → auStateOrTimeZone.
 * Optional (any market):               startDate, engagementDuration,
 *                                       workingHoursNote, message, JD upload.
 *                                       US also: budgetRange.
 * Always captured (any market/form):   utmSource/Medium/Campaign/Term/Content,
 *                                       referrerUrl, landingPageRoute.
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
  clinic?: string         // doctors / healthcare
  specialization?: string
  city?: string
  budget?: string
  message?: string
  /** Set by the form so server-side knows which industry/offer the lead came from */
  source?: string
  // ── Staffing fields (also reused as the "always required" fields for the
  //    international-landing-page family — company/role/seats mean the same
  //    thing there: company name, skill/job title, number of resources). ──
  company?: string
  role?: string
  seats?: string
  engagement?: string     // Contract | Permanent | Either
  workMode?: string       // Remote | Hybrid | Onsite
  timeline?: string
  // ── International-landing-page fields (UK/UAE/US/Australia) ──
  /** Which market's page the lead came from. Gates the stricter validation below. */
  market?: LandingMarket
  startDate?: string
  engagementDuration?: string
  /** Free-text working-hour / overlap expectation — generic across all 4 markets. */
  workingHoursNote?: string
  /** UAE only, required when market === 'UAE'. */
  emirate?: string
  /** US only, required when market === 'US'. One of US_COMPANY_TYPES. */
  companyType?: string
  /** US only, required when market === 'US'. */
  usTimeZone?: string
  /** Australia only, required when market === 'Australia'. */
  auStateOrTimeZone?: string
  /** US only, optional. */
  budgetRange?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  /** Page the referring browser came from (document.referrer), captured client-side. */
  referrerUrl?: string
  /** Path of the landing page the lead was submitted from, e.g. '/uk-offshore-tech-resources'. */
  landingPageRoute?: string
  /** JD upload, sent inline as base64 — validated below (PDF/DOC/DOCX, <=4MB). */
  jdFileName?: string
  jdFileType?: string
  jdFileBase64?: string
}

const MAX_JD_BYTES = 4 * 1024 * 1024 // 4MB
const ALLOWED_JD_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

/* ── Hand-rolled validation. No Zod dep. ─────────────────────────────── */
function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Body must be a JSON object' }
  const b = body as Record<string, unknown>
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

  const name = str(b.name)
  const email = str(b.email)
  // Phone is required by most industry lead forms (client-side `required`) but
  // NOT collected by the international-landing-page family — kept optional
  // here so one shared endpoint serves both without a fake required field.
  const phone = str(b.phone)

  if (!name)  return { ok: false, error: 'Name is required' }
  if (!email) return { ok: false, error: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Email looks invalid' }
  if (name.length > 200 || email.length > 200 || phone.length > 50) {
    return { ok: false, error: 'Field too long' }
  }

  const company = str(b.company)
  const role = str(b.role)
  const seats = str(b.seats)

  // International-landing-page validation layer — ONLY runs when the payload
  // declares a `market`. Every other lead form on the site (doctors/staffing/
  // contact/calculator) never sends `market`, so this block is a no-op for
  // them and cannot regress their existing (looser) validation.
  const marketRaw = str(b.market)
  if (marketRaw) {
    if (!INTERNATIONAL_MARKETS.includes(marketRaw as LandingMarket)) {
      return { ok: false, error: 'Invalid market' }
    }
    if (!company) return { ok: false, error: 'Company is required' }
    if (!role)    return { ok: false, error: 'Skill or job title is required' }
    if (!seats)   return { ok: false, error: 'Number of resources is required' }

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

  // JD attachment: re-validate server-side, never trust the client check alone.
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
      name, email, phone,
      clinic:         str(b.clinic),
      specialization: str(b.specialization),
      city:           str(b.city),
      budget:         str(b.budget),
      message:        str(b.message).slice(0, 4000),
      source:         str(b.source) || 'unknown',
      company, role, seats,
      engagement:     str(b.engagement),
      workMode:       str(b.workMode),
      timeline:       str(b.timeline),
      market,
      startDate:           str(b.startDate),
      engagementDuration:  str(b.engagementDuration),
      workingHoursNote:    str(b.workingHoursNote),
      emirate:             str(b.emirate),
      companyType:         str(b.companyType),
      usTimeZone:          str(b.usTimeZone),
      auStateOrTimeZone:   str(b.auStateOrTimeZone),
      budgetRange:         str(b.budgetRange),
      referrerUrl:         str(b.referrerUrl).slice(0, 500),
      landingPageRoute:    str(b.landingPageRoute).slice(0, 200),
      utmSource:           str(b.utmSource),
      utmMedium:           str(b.utmMedium),
      utmCampaign:         str(b.utmCampaign),
      utmTerm:             str(b.utmTerm),
      utmContent:          str(b.utmContent),
      jdFileName:     jdFileBase64 ? jdFileName || 'jd-attachment' : '',
      jdFileType:     jdFileBase64 ? jdFileType : '',
      jdFileBase64,
    },
  }
}

/* ── Rate limit: 5 req/min/IP. In-memory; per-instance. ──────────────── */
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

/* ── Delivery channels ───────────────────────────────────────────────── */

async function sendViaResend(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, reason: 'no-key' }

  const to = process.env.LEAD_NOTIFY_EMAIL || 'Info@growthescalators.com'
  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'

  const subject = `New ${lead.source || 'website'} lead: ${lead.name}`
  const lines = [
    lead.market         && `Market: ${lead.market}`,
    `Name: ${lead.name}`,
    lead.phone          && `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    lead.company        && `Company: ${lead.company}`,
    lead.clinic         && `Practice / Business: ${lead.clinic}`,
    lead.specialization && `Specialization / Type: ${lead.specialization}`,
    lead.city           && `City: ${lead.city}`,
    lead.budget         && `Monthly marketing spend: ${lead.budget}`,
    lead.role           && `Role / skill needed: ${lead.role}`,
    lead.seats          && `Number of resources: ${lead.seats}`,
    lead.engagement     && `Engagement: ${lead.engagement}`,
    lead.workMode       && `Work mode: ${lead.workMode}`,
    lead.timeline       && `Timeline: ${lead.timeline}`,
    lead.startDate          && `Preferred start date: ${lead.startDate}`,
    lead.engagementDuration && `Engagement duration: ${lead.engagementDuration}`,
    lead.workingHoursNote   && `Working-hour expectations: ${lead.workingHoursNote}`,
    lead.emirate            && `Emirate: ${lead.emirate}`,
    lead.companyType        && `Company type: ${lead.companyType}`,
    lead.usTimeZone         && `US time zone: ${lead.usTimeZone}`,
    lead.auStateOrTimeZone  && `Australian state / time zone: ${lead.auStateOrTimeZone}`,
    lead.budgetRange        && `Budget / rate range: ${lead.budgetRange}`,
    lead.jdFileName         && `JD attached: ${lead.jdFileName}`,
    (lead.utmSource || lead.utmMedium || lead.utmCampaign || lead.utmTerm || lead.utmContent)
      && `UTM: source=${lead.utmSource || '-'} medium=${lead.utmMedium || '-'} campaign=${lead.utmCampaign || '-'} term=${lead.utmTerm || '-'} content=${lead.utmContent || '-'}`,
    lead.referrerUrl        && `Referring URL: ${lead.referrerUrl}`,
    lead.landingPageRoute   && `Landing page: ${lead.landingPageRoute}`,
    `Source: ${lead.source}`,
    '',
    'Message:',
    lead.message || '(blank)',
  ].filter(Boolean) as string[]

  const html = lines.map((l) => `<p>${l.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</p>`).join('')

  const attachments = lead.jdFileBase64 && lead.jdFileName
    ? [{ filename: lead.jdFileName, content: lead.jdFileBase64 }]
    : undefined

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from, to, subject,
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

/* ── Prospect auto-responder ──────────────────────────────────────────────── */

/**
 * Pick a REAL case study + resource line for the lead. Market-aware first:
 * every international-landing-page lead (UK/UAE/US/Australia — identified by
 * the exact `market` field, not string-sniffing) gets the same honest
 * process-proof branch below, since that copy was already written to be
 * market-generic (no "UK" claim baked into the text) and there's no real,
 * shipped result to differentiate by market yet — inventing one per market
 * would be exactly the fabrication this file's proof discipline forbids.
 * Falls back to substring-matching `source` for every other lead form on the
 * site (unchanged from before) and, as a safety net, for any international
 * lead that somehow arrives without `market` set.
 * Proof discipline: every snippet below is a real, shipped GE result.
 */
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
  // Legacy fallback for an offshore/staffing-shaped `source` with no `market` set
  // (shouldn't happen for the international-landing-page family post-refactor,
  // kept for safety) — same reasoning as the market-gated branch above: this is
  // a staffing requirement, not a marketing enquiry, so it gets process proof
  // instead of an ad-spend case study that would be irrelevant to a hiring buyer.
  if (has('offshore', 'uk offshore', 'tech requirement')) return offshoreStaffingProof
  return { caseStudy: 'Across 187+ brands we’ve managed ₹10Cr+ in ad spend at a 97% client-retention rate.', resourceLine: 'a plan tailored to your goals' }
}

async function sendAutoResponder(lead: LeadPayload): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, reason: 'no-key' }
  if (!lead.email) return { ok: false, reason: 'no-email' }

  const from = process.env.LEAD_FROM_EMAIL || 'Growth Escalators <onboarding@resend.dev>'
  const replyTo = process.env.LEAD_NOTIFY_EMAIL || 'Info@growthescalators.com'
  const firstName = (lead.name || 'there').split(' ')[0]
  const { caseStudy, resourceLine } = resourceFor(lead)

  // If the lead came from a calculator, echo their result back to them.
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

/* ── Handler ─────────────────────────────────────────────────────────── */

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

  const [resendResult, webhookResult, autoResponderResult] = await Promise.all([
    sendViaResend(v.data),
    sendViaWebhook(v.data),
    sendAutoResponder(v.data),
  ])

  // Always log the lead so it's recoverable from server logs even if all
  // delivery channels failed. Format kept stable on purpose so future log
  // grepping stays predictable. The (potentially large) base64 JD attachment
  // is redacted to a byte count so one upload doesn't flood the log line.
  const logSafeLead = {
    ...v.data,
    jdFileBase64: v.data.jdFileBase64
      ? `[redacted, ${Buffer.from(v.data.jdFileBase64, 'base64').length} bytes]`
      : undefined,
  }
  console.log(
    '[lead]',
    JSON.stringify({
      receivedAt: new Date().toISOString(),
      ip,
      lead: logSafeLead,
      resend: resendResult,
      webhook: webhookResult,
      autoResponder: autoResponderResult,
    }),
  )

  // Soft-success policy: as long as we received and logged the lead, return
  // 200 to the user. Email/webhook failures are operational issues, not user
  // failures — the lead isn't lost (we have the server log + the form
  // doesn't visibly break for the prospect).
  return NextResponse.json({ ok: true })
}
