/**
 * Shared CTA anchor for the international-landing-page family. Wraps the
 * site's existing global `.btn-primary` / `.btn-outline` classes (defined in
 * app/globals.css — not redefined here) so every market's CTAs stay visually
 * identical without each page hand-rolling the same inline style object.
 *
 * Analytics is intentionally NOT baked in here — this is a presentation-only
 * component. Callers (Header, Hero, EngagementModels, LeadForm, page-local
 * sections) fire `trackLandingEvent(eventPrefix, suffix, params)` from
 * `lib/analytics.ts` in their own `onClick`, since the event name/suffix
 * needed differs by call site (e.g. hero primary CTA vs. an engagement-model
 * card CTA both fire `primary_cta_click` but with a different `location`).
 */
export type CtaButtonProps = {
  href: string
  label: string
  /** 'primary' = solid orange (.btn-primary). 'outline' = glass outline (.btn-outline). Defaults to 'primary'. */
  variant?: 'primary' | 'outline'
  /** 'compact' shrinks font-size/padding for tight contexts like the sticky header. Defaults to 'default'. */
  size?: 'default' | 'compact'
  onClick?: () => void
  target?: string
  rel?: string
  /** Extra inline-style overrides, merged after the size preset (e.g. one-off padding on a card CTA). */
  style?: React.CSSProperties
  className?: string
}

const COMPACT_STYLE: React.CSSProperties = { fontSize: 14.5, padding: '12px 22px', whiteSpace: 'nowrap' }

export default function CtaButton({
  href, label, variant = 'primary', size = 'default', onClick, target, rel, style, className,
}: CtaButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={[base, className].filter(Boolean).join(' ')}
      style={{ ...(size === 'compact' ? COMPACT_STYLE : {}), ...style }}
    >
      {label}
    </a>
  )
}
