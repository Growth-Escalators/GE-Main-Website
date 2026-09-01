/**
 * Shared WhatsApp consent + preferred-call-time fields.
 *
 * One component rather than the same markup pasted into eight forms, so the
 * consent wording can only ever change in a single place. That matters more
 * than usual here: the CRM stores the version string alongside every consent
 * record, and an audit is only meaningful if the version reliably identifies
 * the exact text the visitor was shown.
 *
 * RULES (do not "improve" these without a legal read):
 *   - The checkbox MUST default to unchecked. No `defaultChecked`, no
 *     `checked`. An opt-in that ships pre-ticked is not consent.
 *   - Bump WA_CONSENT_TEXT_VERSION whenever WA_CONSENT_TEXT changes, and set
 *     the matching WA_CONSENT_TEXT_VERSION in the CRM environment.
 *   - Both fields are optional inputs. A visitor who declines still gets a
 *     lead, a CRM record and a team notification — they just get no WhatsApp.
 */

export const WA_CONSENT_TEXT =
  'I agree to receive WhatsApp communication from Growth Escalators regarding this enquiry. I can opt out anytime.'

export const WA_CONSENT_TEXT_VERSION = 'ge-wa-consent-v1'

export const PREFERRED_CALL_TIMES = [
  'Morning (9am – 12pm)',
  'Afternoon (12pm – 4pm)',
  'Evening (4pm – 8pm)',
  'Anytime',
] as const

type ConsentProps = {
  /** Class for the wrapping element, so each form can match its own layout. */
  className?: string
}

/**
 * Unchecked WhatsApp consent checkbox plus the hidden version marker.
 *
 * Rendered as a plain checkbox + hidden input so it works inside the FormData
 * collection every form on the site already uses — no per-form state wiring.
 * An unchecked box is simply absent from FormData, which the API reads as "no
 * consent"; that is the correct and safe default.
 */
export function WhatsAppConsentField({ className }: ConsentProps) {
  return (
    <label className={className} style={consentStyle}>
      <input
        type="checkbox"
        name="whatsappConsent"
        value="yes"
        style={checkboxStyle}
      />
      <span style={consentTextStyle}>{WA_CONSENT_TEXT}</span>
      <input type="hidden" name="whatsappConsentVersion" value={WA_CONSENT_TEXT_VERSION} />
    </label>
  )
}

/** Optional preferred-call-time select. */
export function PreferredCallTimeField({ className }: ConsentProps) {
  return (
    <label className={className}>
      <span>Preferred time for a call</span>
      <select name="preferredCallTime" defaultValue="">
        <option value="">No preference</option>
        {PREFERRED_CALL_TIMES.map((slot) => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>
    </label>
  )
}

// Inline styles keep this component drop-in for all three styling eras in the
// repo (CSS Modules, Tailwind utilities, and the legacy GSAP sections) without
// forcing a shared stylesheet on any of them.
const consentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  cursor: 'pointer',
  marginTop: '4px',
}

const checkboxStyle: React.CSSProperties = {
  width: '18px',
  height: '18px',
  marginTop: '2px',
  flexShrink: 0,
  accentColor: 'var(--orange, #F36B36)',
  cursor: 'pointer',
}

const consentTextStyle: React.CSSProperties = {
  fontSize: '13px',
  lineHeight: 1.5,
  opacity: 0.85,
}
