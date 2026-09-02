export type LeadAttribution = {
  // First-touch acquisition. Existing field names stay unchanged for backwards
  // compatibility with GA4, the website lead API and the CRM.
  firstLandingPage: string
  firstReferrerUrl: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  firstTouchAt: string

  // Last-touch acquisition: refreshed once per browser session so a later
  // campaign/direct visit can be distinguished from the original acquisition.
  // lastUtmSource/Medium are normalized source/medium values: when no explicit
  // UTM exists they can be `direct / none`, `google / organic`, or a referral
  // host / `referral`. The legacy first-touch UTM fields remain untouched.
  lastLandingPage: string
  lastReferrerUrl: string
  lastUtmSource: string
  lastUtmMedium: string
  lastUtmCampaign: string
  lastUtmTerm: string
  lastUtmContent: string
  lastTouchAt: string

  // Conversion context at the moment an interaction/form is tracked.
  landingPageRoute: string
  referrerUrl: string
  whatsappClicked: boolean
  whatsappClickSource: string
}

type StoredAttribution = Omit<LeadAttribution, 'landingPageRoute' | 'referrerUrl'> & {
  captured: boolean
}

const STORAGE_KEY = 'ge_lead_attribution_v1'
const SESSION_CAPTURE_KEY = 'ge_lead_attribution_session_v1'
const ATTRIBUTION_WINDOW_MS = 90 * 24 * 60 * 60 * 1000

const EMPTY_STORED: StoredAttribution = {
  captured: false,
  firstLandingPage: '',
  firstReferrerUrl: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmTerm: '',
  utmContent: '',
  firstTouchAt: '',
  lastLandingPage: '',
  lastReferrerUrl: '',
  lastUtmSource: '',
  lastUtmMedium: '',
  lastUtmCampaign: '',
  lastUtmTerm: '',
  lastUtmContent: '',
  lastTouchAt: '',
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

function nowIso(): string {
  return new Date().toISOString()
}

function isExpired(stored: StoredAttribution): boolean {
  if (!stored.captured) return true
  if (!stored.firstTouchAt) return false // migrate legacy records without erasing them
  const capturedAt = Date.parse(stored.firstTouchAt)
  return Number.isFinite(capturedAt) && Date.now() - capturedAt > ATTRIBUTION_WINDOW_MS
}

function currentTouch(capturedAt = nowIso()) {
  return {
    landingPage: window.location.pathname || '/',
    referrerUrl: document.referrer || '',
    utmSource: currentUtm('utm_source'),
    utmMedium: currentUtm('utm_medium'),
    utmCampaign: currentUtm('utm_campaign'),
    utmTerm: currentUtm('utm_term'),
    utmContent: currentUtm('utm_content'),
    capturedAt,
  }
}

function normalizedSourceMedium(touch: ReturnType<typeof currentTouch>): { source: string; medium: string } {
  if (touch.utmSource) {
    return { source: touch.utmSource, medium: touch.utmMedium || 'campaign' }
  }

  if (!touch.referrerUrl) return { source: 'direct', medium: 'none' }

  try {
    const host = new URL(touch.referrerUrl).hostname.replace(/^www\./, '').toLowerCase()
    if (host === 'google.com' || host.endsWith('.google.com') || host.startsWith('google.')) {
      return { source: 'google', medium: 'organic' }
    }
    if (host === 'bing.com' || host.endsWith('.bing.com')) return { source: 'bing', medium: 'organic' }
    if (host === 'yahoo.com' || host.endsWith('.yahoo.com')) return { source: 'yahoo', medium: 'organic' }
    if (host === 'duckduckgo.com' || host.endsWith('.duckduckgo.com')) return { source: 'duckduckgo', medium: 'organic' }
    return { source: host || 'referral', medium: 'referral' }
  } catch {
    return { source: 'referral', medium: 'referral' }
  }
}

function sessionTouchAlreadyCaptured(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return window.sessionStorage.getItem(SESSION_CAPTURE_KEY) === '1'
  } catch {
    return false
  }
}

function markSessionTouchCaptured(): void {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(SESSION_CAPTURE_KEY, '1')
  } catch {
    // Best effort only. If sessionStorage is unavailable, repeat capture is
    // harmless because it only refreshes the last-touch envelope.
  }
}

function lastTouchFields(touch: ReturnType<typeof currentTouch>) {
  const sourceMedium = normalizedSourceMedium(touch)
  return {
    lastLandingPage: touch.landingPage,
    lastReferrerUrl: touch.referrerUrl,
    lastUtmSource: sourceMedium.source,
    lastUtmMedium: sourceMedium.medium,
    lastUtmCampaign: touch.utmCampaign,
    lastUtmTerm: touch.utmTerm,
    lastUtmContent: touch.utmContent,
    lastTouchAt: touch.capturedAt,
  }
}

/**
 * Capture the original acquisition for up to 90 days and refresh last-touch
 * once per browser session. Blank first-touch UTM values are deliberately
 * preserved so a later campaign never destroys the original acquisition.
 */
export function captureLeadAttribution(): StoredAttribution {
  if (typeof window === 'undefined') return { ...EMPTY_STORED }

  let stored = readStored()
  const touch = currentTouch()

  if (isExpired(stored)) {
    stored = {
      ...EMPTY_STORED,
      captured: true,
      firstLandingPage: touch.landingPage,
      firstReferrerUrl: touch.referrerUrl,
      utmSource: touch.utmSource,
      utmMedium: touch.utmMedium,
      utmCampaign: touch.utmCampaign,
      utmTerm: touch.utmTerm,
      utmContent: touch.utmContent,
      firstTouchAt: touch.capturedAt,
      ...lastTouchFields(touch),
    }
    writeStored(stored)
    markSessionTouchCaptured()
    return stored
  }

  // Legacy v1 records did not have timestamps/last-touch fields. Preserve the
  // historical first-touch and begin the 90-day clock from this migration.
  if (!stored.firstTouchAt) {
    stored = { ...stored, firstTouchAt: touch.capturedAt }
  }

  if (!sessionTouchAlreadyCaptured()) {
    stored = {
      ...stored,
      ...lastTouchFields(touch),
    }
    writeStored(stored)
    markSessionTouchCaptured()
  } else if (!stored.lastTouchAt) {
    // Same-session migration fallback for a legacy stored record. Use the
    // current session for normalized source/medium while preserving first touch.
    stored = {
      ...stored,
      ...lastTouchFields(touch),
    }
    writeStored(stored)
  }

  return stored
}

/** Return the attribution envelope appended to every lead submission/event. */
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
    firstTouchAt: stored.firstTouchAt,
    lastLandingPage: stored.lastLandingPage || stored.firstLandingPage,
    lastReferrerUrl: stored.lastReferrerUrl,
    lastUtmSource: stored.lastUtmSource,
    lastUtmMedium: stored.lastUtmMedium,
    lastUtmCampaign: stored.lastUtmCampaign,
    lastUtmTerm: stored.lastUtmTerm,
    lastUtmContent: stored.lastUtmContent,
    lastTouchAt: stored.lastTouchAt || stored.firstTouchAt,
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
