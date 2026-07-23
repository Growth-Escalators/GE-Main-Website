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
 * @param method  Which lead channel fired (whatsapp | call | email | booking | form).
 * @param extra   Optional extra params merged into the event (e.g. `{ source }`).
 */
export function trackLead(method: LeadMethod, extra?: Record<string, unknown>): void {
  // No-op during SSR / prerender.
  if (typeof window === 'undefined') return

  const payload: Record<string, unknown> = {
    method,
    page_path: window.location?.pathname,
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
