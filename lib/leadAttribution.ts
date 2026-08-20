export type LeadAttribution = {
  firstLandingPage: string
  firstReferrerUrl: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  landingPageRoute: string
  referrerUrl: string
  whatsappClicked: boolean
  whatsappClickSource: string
}

type StoredAttribution = Omit<LeadAttribution, 'landingPageRoute' | 'referrerUrl'> & {
  captured: boolean
}

const STORAGE_KEY = 'ge_lead_attribution_v1'

const EMPTY_STORED: StoredAttribution = {
  captured: false,
  firstLandingPage: '',
  firstReferrerUrl: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmTerm: '',
  utmContent: '',
  whatsappClicked: false,
  whatsappClickSource: '',
}

function readStored(): StoredAttribution {
  if (typeof window === 'undefined') return { ...EMPTY_STORED }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...EMPTY_STORED }
    const parsed = JSON.parse(raw) as Partial<StoredAttribution>
    return { ...EMPTY_STORED, ...parsed }
  } catch {
    return { ...EMPTY_STORED }
  }
}

function writeStored(value: StoredAttribution): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Storage can be unavailable in privacy-restricted browsers. Tracking must
    // never block a form or CTA, so we simply fall back to the current page.
  }
}

function currentUtm(name: string): string {
  if (typeof window === 'undefined') return ''
  try {
    return new URLSearchParams(window.location.search).get(name) ?? ''
  } catch {
    return ''
  }
}

/**
 * Capture acquisition context once, on the visitor's first page in this
 * browser. Blank UTM values are intentionally preserved as blank so a later
 * paid visit does not overwrite an earlier direct/organic first touch.
 */
export function captureLeadAttribution(): StoredAttribution {
  if (typeof window === 'undefined') return { ...EMPTY_STORED }

  const stored = readStored()
  if (stored.captured) return stored

  const next: StoredAttribution = {
    captured: true,
    firstLandingPage: window.location.pathname || '/',
    firstReferrerUrl: document.referrer || '',
    utmSource: currentUtm('utm_source'),
    utmMedium: currentUtm('utm_medium'),
    utmCampaign: currentUtm('utm_campaign'),
    utmTerm: currentUtm('utm_term'),
    utmContent: currentUtm('utm_content'),
    whatsappClicked: false,
    whatsappClickSource: '',
  }

  writeStored(next)
  return next
}

/** Return the small attribution envelope appended to every lead submission. */
export function getLeadAttribution(): LeadAttribution {
  if (typeof window === 'undefined') {
    return {
      ...EMPTY_STORED,
      landingPageRoute: '',
      referrerUrl: '',
    }
  }

  const stored = captureLeadAttribution()
  return {
    firstLandingPage: stored.firstLandingPage,
    firstReferrerUrl: stored.firstReferrerUrl,
    utmSource: stored.utmSource,
    utmMedium: stored.utmMedium,
    utmCampaign: stored.utmCampaign,
    utmTerm: stored.utmTerm,
    utmContent: stored.utmContent,
    landingPageRoute: window.location.pathname || '/',
    referrerUrl: document.referrer || '',
    whatsappClicked: stored.whatsappClicked,
    whatsappClickSource: stored.whatsappClickSource,
  }
}

/** Remember that this visitor used WhatsApp before a later form conversion. */
export function markWhatsAppClick(source = ''): void {
  if (typeof window === 'undefined') return
  const stored = captureLeadAttribution()
  writeStored({
    ...stored,
    whatsappClicked: true,
    whatsappClickSource: source || stored.whatsappClickSource,
  })
}
