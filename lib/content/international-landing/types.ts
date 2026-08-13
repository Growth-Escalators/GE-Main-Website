import type { LucideIcon } from 'lucide-react'

/**
 * Content-config contract for the "international offshore tech resources"
 * landing-page family (UK live, UAE/US/Australia to follow — same shape,
 * same shared components, only this object + a page.tsx/layout.tsx differ).
 *
 * One market = one file exporting a single `InternationalLandingContent`
 * object from this directory (see `uk.ts` for the worked example, lifted
 * verbatim from the already-approved copy on /uk-offshore-tech-resources).
 * The corresponding page.tsx imports that object and passes each section's
 * slice straight into the matching shared component from
 * `components/landing/international/*` — no shared component should ever
 * need to change to support a new market; only this file's shape can.
 *
 * Every section content type here has a 1:1 name match with the component
 * that consumes it (e.g. `HeroContent` → `<Hero content={...} />`,
 * `ScreeningSectionContent` → `<ScreeningSection content={...} />`), so the
 * mapping from data to UI is always unambiguous.
 */

export type LandingMarket = 'UK' | 'UAE' | 'US' | 'Australia'

/** Sticky-header nav link that scrolls to an in-page section id. */
export interface NavLink {
  label: string
  href: string // e.g. '#skills' — must match the target section's rendered id
}

/** The five-step "Requirement received → Client interview" pipeline visual. */
export interface PipelineStep {
  icon: LucideIcon
  label: string
}

export interface HeroContent {
  /** Small pill above the H1, e.g. "Offshore technology capacity for UK delivery teams". */
  badge: string
  /**
   * The H1, split so the second clause can render in the accent colour —
   * matches the exact two-clause pattern already approved for UK ("Screened
   * India-Based Tech Specialists." + accent "Shortlisted Within 48 Hours.").
   * The Hero component inserts the separating space and renders `accent`
   * inside a `var(--orange)` span; markets are not required to use two full
   * sentences, just lead text + an accent-worthy clause.
   */
  heading: { lead: string; accent: string }
  subhead: string
  /** Short proof-point checklist rendered as a 2-col list under the subhead. */
  proofPoints: string[]
  primaryCta: { label: string }
  /** Omit to hide — not every market needs a secondary hero CTA. */
  secondaryCta?: { label: string }
  /** Small print under the CTAs, e.g. "Send the role or upload the JD…". */
  microcopy?: string
  pipeline: {
    /** Card header, e.g. "Requirement to shortlist". */
    cardTitle: string
    /** Small pill in the card header, e.g. "Process overview". */
    cardBadge: string
    steps: PipelineStep[]
  }
}

export interface TrustStripContent {
  points: { title: string; body: string }[]
}

export interface PainSectionContent {
  tag: string
  headline: string
  subhead: string
  cards: { title: string; body: string }[]
  /** Closing paragraph under the card grid. Omit to hide. */
  footerNote?: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface SkillsSectionContent {
  tag: string
  headline: string
  /**
   * Array order = display/priority order for this market — SkillsGrid
   * renders categories in the order given, so reordering or dropping a
   * category for a market is just editing this array. No index/priority
   * field needed.
   */
  categories: SkillCategory[]
  /** Closing paragraph under the grid (e.g. "Don't see the exact skill…"). Omit to hide. */
  footerNote?: string
}

export interface ProcessStepContent {
  step: string // e.g. '01'
  title: string
  body: string
}

export interface ProcessSectionContent {
  tag: string
  headline: string
  steps: ProcessStepContent[]
}

export interface ScreeningSectionContent {
  tag: string
  headline: string
  subhead: string
  /** Numbered checklist rendered on the left. */
  gates: string[]
  /** Label above the summary card. Defaults to "Sample screening summary". */
  summaryLabel?: string
  /** Small print under the label. Defaults to "Illustrative format only — not a real candidate." */
  summaryDisclaimer?: string
  /** Rows rendered in the "Sample screening summary" card on the right. */
  summary: { label: string; value: string }[]
}

export interface EngagementModel {
  title: string
  body: string
  /** Per-card CTA label override. Falls back to the section's `ctaLabel`. */
  ctaLabel?: string
}

export interface EngagementModelsSectionContent {
  tag: string
  headline: string
  models: EngagementModel[]
  /** Default CTA label used by any model that doesn't set its own `ctaLabel`. */
  ctaLabel: string
}

/**
 * Working-hour / time-zone alignment section. NOT wired into the live UK
 * page in this refactor (UK's approved copy handles overlap inline via the
 * hero proof point, a screening gate, a summary row, the risk-terms strip
 * and one FAQ — there was no separate section to preserve). Built and typed
 * now so UAE/US/Australia can use it from day one; UK can adopt it later as
 * a genuine content change, not a silent refactor-time addition. See the
 * Stage A report for the exact per-market `visualVariant` recommendation.
 */
export type WorkingHoursVisualVariant = 'overlap-bar' | 'multi-zone-note' | 'flexible-note'

export interface WorkingHoursSectionContent {
  tag: string
  headline: string
  subhead?: string
  visualVariant: WorkingHoursVisualVariant
  /** Required when visualVariant === 'overlap-bar' (e.g. UAE — near-full-day overlap). */
  overlapBar?: {
    marketLabel: string        // e.g. 'India ↔ UAE'
    overlapHoursLabel: string  // e.g. '~7.5 hrs of the working day'
    /** 0–100, decorative only — never implied as a precise/contractual figure. */
    overlapPercent: number
    note?: string
  }
  /** Required when visualVariant === 'multi-zone-note' (e.g. US — ET/CT/MT/PT). */
  zones?: { zone: string; note: string }[]
  zoneCaveat?: string
  /** Required when visualVariant === 'flexible-note' (e.g. UK/Australia — don't hardcode one number). */
  cautionNote?: string
  bullets?: string[]
}

export interface ComparisonColumn {
  key: string
  label: string
  /** True for the "Growth Escalators" column — gets the accent background/weight. */
  highlight?: boolean
}

export interface ComparisonRow {
  criterion: string
  /** Keyed by ComparisonColumn.key. */
  values: Record<string, string>
}

export interface ComparisonSectionContent {
  tag: string
  headline: string
  /** Screen-reader-only <caption> summarizing the full table for a11y. */
  caption: string
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  /** Must match one ComparisonColumn.key — that column renders as the "us" column. */
  highlightColumnKey: string
}

export interface FaqSectionContent {
  tag: string
  headline: string
  faqs: { q: string; a: string }[]
}

/** One market-specific required (or optional) field appended to the shared LeadForm. */
export interface LeadFormMarketField {
  /** Also the request-body field name posted to /api/lead — must match a key the API route accepts. */
  name: string
  label: string
  type: 'select' | 'text'
  /** Required when type === 'select'. */
  options?: string[]
  required?: boolean
  placeholder?: string
}

export interface LeadFormSectionContent {
  tag: string
  headline: string
  subhead: string
  skillSuggestions: string[]
  resourceCountOptions: string[]
  /** Defaults to "Preferred start date" / no placeholder if omitted. */
  showStartDate?: boolean
  /** Defaults to "Engagement duration" / "e.g. 3 months, 6 months, ongoing" if omitted. */
  showEngagementDuration?: boolean
  /** Label for the working-hours free-text field, e.g. "UK working-hour expectations". Omit to hide the field entirely. */
  workingHoursFieldLabel?: string
  workingHoursFieldPlaceholder?: string
  /** Market-specific REQUIRED (or optional) fields — UAE emirate, US company type + timezone, AU state/timezone. */
  marketFields?: LeadFormMarketField[]
  /** US-only optional budget/rate-range field. */
  showBudgetRange?: boolean
  successHeadline?: string
  successBody?: string
  /** Cal.com (or equivalent) booking link shown on the post-submit success panel. */
  calLink?: string
}

export interface DisclosureStripContent {
  text: string
  linkedinUrl?: string
}

export interface SampleProfilesSectionContent {
  tag: string
  headline: string
  subhead: string
  categories: string[]
  ctaLabel: string
}

export interface ProofSectionContent {
  tag: string
  headline: string
  subhead: string
  items: string[]
}

export interface RiskSectionContent {
  tag: string
  headline: string
  subhead: string
}

export interface MetaContent {
  title: string
  description: string
  /** Path only, e.g. '/uk-offshore-tech-resources' — combined with the site origin in layout.tsx. */
  canonicalPath: string
}

/**
 * The full per-market content object. `market` and `eventPrefix` are also
 * threaded into <LeadForm> (hidden field + analytics) and every shared
 * component that fires a `{prefix}_lp_*` event — see the Stage A report for
 * the full analytics contract.
 */
export interface InternationalLandingContent {
  market: LandingMarket
  /** Analytics event prefix, e.g. 'uk' | 'uae' | 'us' | 'australia'. Lowercase, no spaces. */
  eventPrefix: string
  /** Value sent as the lead's `source` field and used in the mailto-fallback subject. */
  leadSourceLabel: string
  meta: MetaContent
  nav: NavLink[]
  headerCtaLabel: string
  hero: HeroContent
  trustStrip: TrustStripContent
  pain: PainSectionContent
  skills: SkillsSectionContent
  process: ProcessSectionContent
  screening: ScreeningSectionContent
  engagementModels: EngagementModelsSectionContent
  sampleProfiles: SampleProfilesSectionContent
  proof: ProofSectionContent
  risk: RiskSectionContent
  /** Optional — see the WorkingHoursSectionContent doc comment above. */
  workingHours?: WorkingHoursSectionContent
  comparison: ComparisonSectionContent
  faqs: FaqSectionContent
  leadForm: LeadFormSectionContent
  disclosure: DisclosureStripContent
}
