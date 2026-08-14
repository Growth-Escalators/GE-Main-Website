/**
 * Barrel export for the international-landing-page shared component family.
 * Import from '@/components/landing/international' rather than deep-importing
 * individual files, so every market page uses one consistent import surface.
 *
 * The sitewide `<Footer />` is deliberately NOT re-exported here — keep
 * importing it directly from '@/components/sections/Footer' as every other
 * page on the site already does.
 */
export { default as Header } from './Header'
export type { HeaderProps } from './Header'

export { default as CtaButton } from './CtaButton'
export type { CtaButtonProps } from './CtaButton'

export { default as ScreeningPipeline } from './ScreeningPipeline'
export type { ScreeningPipelineProps } from './ScreeningPipeline'

export { default as Hero } from './Hero'
export type { HeroProps } from './Hero'

export { default as TrustStrip } from './TrustStrip'
export type { TrustStripProps } from './TrustStrip'

export { default as PainCards } from './PainCards'
export type { PainCardsProps } from './PainCards'

export { default as SkillsGrid } from './SkillsGrid'
export type { SkillsGridProps } from './SkillsGrid'

export { default as Process } from './Process'
export type { ProcessProps } from './Process'

export { default as ScreeningSection, ScreeningSummary } from './ScreeningSection'
export type { ScreeningSectionProps, ScreeningSummaryProps } from './ScreeningSection'

export { default as EngagementModels } from './EngagementModels'
export type { EngagementModelsProps } from './EngagementModels'

export { default as WorkingHoursAlignment } from './WorkingHoursAlignment'
export type { WorkingHoursAlignmentProps } from './WorkingHoursAlignment'

export { default as ComparisonTable } from './ComparisonTable'
export type { ComparisonTableProps } from './ComparisonTable'

export { default as FaqAccordion, FaqPageJsonLd } from './FaqAccordion'
export type { FaqAccordionProps } from './FaqAccordion'

export { default as LeadForm } from './LeadForm'
export type { LeadFormProps } from './LeadForm'

export { default as DisclosureStrip } from './DisclosureStrip'
export type { DisclosureStripProps } from './DisclosureStrip'
