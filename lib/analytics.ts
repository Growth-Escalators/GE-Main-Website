/** Lightweight, SSR-safe analytics helpers. */

import { getLeadAttribution, markWhatsAppClick } from '@/lib/leadAttribution'

export type LeadMethod = 'whatsapp' | 'call' | 'email' | 'booking' | 'form'
export type ContactInteraction = 'whatsapp_click' | 'phone_click' | 'booking_click'
export type FormInteraction = 'form_view' | 'form_start' | 'form_abandon'

type GtagFn = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: Record<string, unknown>[]
  }
}

function attributionParams(): Record<string, unknown> {
  const attribution = getLeadAttribution()
  return {
    page_path: window.location?.pathname,
    first_landing_page: attribution.firstLandingPage,
    first_referrer: attribution.firstReferrerUrl,
    first_touch_at: attribution.firstTouchAt,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_term: attribution.utmTerm,
    utm_content: attribution.utmContent,
    last_landing_page: attribution.lastLandingPage,
    last_referrer: attribution.lastReferrerUrl,
    last_touch_at: attribution.lastTouchAt,
    last_utm_source: attribution.lastUtmSource,
    last_utm_medium: attribution.lastUtmMedium,
    last_utm_campaign: attribution.lastUtmCampaign,
    last_utm_term: attribution.lastUtmTerm,
    last_utm_content: attribution.lastUtmContent,
    whatsapp_clicked: attribution.whatsappClicked,
    whatsapp_click_source: attribution.whatsappClickSource,
  }
}

function fireEvent(eventName: string, payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
    return
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...payload })
  }
}

/**
 * Existing site-wide lead event kept intact for analytics continuity. No PII is
 * included; only the small acquisition envelope is appended.
 */
export function trackLead(method: LeadMethod, extra?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  if (method === 'whatsapp') {
    const clickSource = typeof extra?.source === 'string'
      ? extra.source
      : typeof extra?.cta_location === 'string'
        ? extra.cta_location
        : ''
    markWhatsAppClick(clickSource)
  }

  fireEvent('generate_lead', {
    method,
    ...attributionParams(),
    ...extra,
  })
}

/**
 * Minimal form-funnel events only. We intentionally do not record individual
 * fields, field values, keystrokes or other noisy/PII-adjacent interactions.
 */
export function trackFormInteraction(
  eventName: FormInteraction,
  extra?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined') return
  fireEvent(eventName, {
    ...attributionParams(),
    ...extra,
  })
}

/**
 * Clean channel events used for reporting WhatsApp, phone and booking clicks.
 * These are intentionally the only globally captured contact interaction events.
 */
export function trackContactInteraction(
  eventName: ContactInteraction,
  extra?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined') return
  fireEvent(eventName, {
    ...attributionParams(),
    ...extra,
  })
}

/** Market-scoped landing-page event helper retained for international pages. */
export function trackLandingEvent(prefix: string, suffix: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  fireEvent(`${prefix}_lp_${suffix}`, { page_path: window.location?.pathname, ...params })
}
