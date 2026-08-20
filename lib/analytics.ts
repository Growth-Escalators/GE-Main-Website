/**
 * Lightweight, SSR-safe GA4 lead-conversion tracking.
 *
 * GA4's tag (gtag.js) is loaded by `components/analytics/GoogleAnalytics.tsx`,
 * rendered site-wide from the root layout (app/layout.tsx) — so this helper
 * is deliberately defensive:
 * it prefers `window.gtag` (GA4) and falls back to a GTM-style `dataLayer`
 * push, and no-ops entirely on the server or when neither global exists.
 *
 * Every lead action on the site funnels through `trackLead(...)`, firing GA4's
 * recommended `generate_lead` event with a `method` param so leads become
 * measurable in GA4 (Reports → Engagement → Events, and as a Key event).
 */

import { getLeadAttribution, markWhatsAppClick } from '@/lib/leadAttribution'

export type LeadMethod = 'whatsapp' | 'call' | 'email' | 'booking' | 'form'

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

/**
 * Fire a GA4 `generate_lead` event for one of the site's five lead actions.
 *
 * Attribution is deliberately small: first landing page/referrer/UTMs plus the
 * page where the action happened. No name, email, phone or other PII is sent to
 * GA4. WhatsApp clicks are also remembered locally so a later form submission
 * can tell the CRM that WhatsApp assisted the journey.
 *
 * @param method  Which lead channel fired (whatsapp | call | email | booking | form).
 * @param extra   Optional extra params merged into the event (e.g. `{ source }`).
 */
export function trackLead(method: LeadMethod, extra?: Record<string, unknown>): void {
  // No-op during SSR / prerender.
  if (typeof window === 'undefined') return

  if (method === 'whatsapp') {
    const clickSource = typeof extra?.source === 'string'
      ? extra.source
      : typeof extra?.cta_location === 'string'
        ? extra.cta_location
        : ''
    markWhatsAppClick(clickSource)
  }

  const attribution = getLeadAttribution()
  const payload: Record<string, unknown> = {
    method,
    page_path: window.location?.pathname,
    first_landing_page: attribution.firstLandingPage,
    first_referrer: attribution.firstReferrerUrl,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_term: attribution.utmTerm,
    utm_content: attribution.utmContent,
    whatsapp_clicked: attribution.whatsappClicked,
    whatsapp_click_source: attribution.whatsappClickSource,
    ...extra,
  }

  // Prefer GA4 gtag.js.
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', payload)
    return
  }

  // Fall back to a GTM / dataLayer setup.
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'generate_lead', ...payload })
  }

  // If no analytics global is present, silently no-op.
}

/**
 * Fire a market-scoped landing-page event: `${prefix}_lp_${suffix}`.
 *
 * Backs the international-landing-page component family
 * (components/landing/international/*) shared across /uk-offshore-tech-resources
 * and its UAE/US/Australia siblings, plus any page-local sections on those
 * routes that fire an event a shared component doesn't own (e.g. a WhatsApp
 * click or a "test a requirement" CTA). Same defensive gtag → dataLayer → no-op
 * fallback chain as `trackLead`, kept separate because these events are named
 * per-market-prefix rather than funneling into one canonical `generate_lead`.
 *
 * @param prefix  Market event prefix, e.g. 'uk' | 'uae' | 'us' | 'australia'.
 * @param suffix  Event suffix, e.g. 'primary_cta_click' → fires 'uk_lp_primary_cta_click'.
 * @param params  Optional extra params merged into the event (e.g. `{ location: 'hero' }`).
 */
export function trackLandingEvent(prefix: string, suffix: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  const name = `${prefix}_lp_${suffix}`
  const payload: Record<string, unknown> = { page_path: window.location?.pathname, ...params }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload)
    return
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...payload })
  }
}
