from pathlib import Path
from textwrap import dedent

path = Path('app/api/lead/route.ts')
text = path.read_text()

text = text.replace(
    " *   LEAD_NOTIFY_EMAIL\n *   LEAD_FROM_EMAIL",
    " *   LEAD_NOTIFY_EMAIL             — primary internal notification recipient.\n *   LEAD_NOTIFY_FALLBACK_EMAIL    — fallback internal recipient if primary delivery fails.\n *   LEAD_FROM_EMAIL",
)

start = text.index("async function sendViaResend")
end = text.index("\nasync function sendViaWebhook", start)
replacement = dedent(r'''type LeadNotificationResult = {
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
''')
text = text[:start] + replacement + text[end:]

text = text.replace(
    "const replyTo = process.env.LEAD_NOTIFY_EMAIL || 'Info@growthescalators.com'",
    "const replyTo = process.env.LEAD_NOTIFY_EMAIL || 'jatin@growthescalators.com'",
)

path.write_text(text)
