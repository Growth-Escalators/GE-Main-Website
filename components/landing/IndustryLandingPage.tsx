import type { VideoTestimonial } from '@/components/landing/VideoTestimonialsShorts'
import type { CalculatorConfig } from '@/components/landing/LeadMagnetCalculator'
import PersuasiveCommercialLandingPage from '@/components/commercial/PersuasiveCommercialLandingPage'
import { safeCommercialContent } from '@/components/commercial/safeCommercialContent'

/**
 * Shared content contract for all commercial and industry landing pages.
 *
 * Phase 4 intentionally keeps every existing route/data file intact while
 * routing the legacy long-tail pages through the same persuasion-safe system
 * used by the Phase 3 money pages. This preserves metadata, H1 intent and
 * topic-specific copy without maintaining two visual/conversion engines.
 */
export type LandingContent = {
  hero: {
    badge: string
    headlineLines: [string, string]
    cyclingWords: string[]
    subhead: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    statPills: { emoji: string; value: string; label: string }[]
    variant?: 'default' | 'bold'
    image?: { src: string; alt: string }
  }
  painPoints: { emoji: string; title: string; body: string }[]
  painPointsTag?: string
  painPointsHeadline?: string
  showcase?: {
    tag?: string
    headline?: string
    subhead?: string
    images: { src: string; alt: string; caption?: string }[]
  }
  aiAdvantage?: {
    tag: string
    headline: string
    subhead?: string
    cards: { emoji: string; title: string; body: string }[]
  }
  services: { title: string; body: string }[]
  servicesTag?: string
  servicesHeadline?: string
  servicesSubhead?: string
  builds?: {
    tag?: string
    headline?: string
    subhead?: string
    items: { name: string; what: string; stack: string; href?: string }[]
  }
  resultHighlight: {
    label?: string
    name: string
    detail: string
    quote: string
    metrics: { value: string; label: string }[]
  }
  resultsTag?: string
  resultsHeadline?: string
  process: { step: string; title: string; body: string }[]
  processTag?: string
  processHeadline?: string
  whyUs: { title: string; body: string }[]
  whyUsTag?: string
  whyUsHeadline?: string
  faqs: { q: string; a: string }[]
  faqsTag?: string
  faqsHeadline?: string
  finalCta: { title: string; subhead: string; ctaLabel: string }
  videoTestimonials: VideoTestimonial[]
  videoTestimonialsTag?: string
  videoTestimonialsHeadline?: string
  videoTestimonialsSubhead?: string
  leadForm: {
    recipient?: string
    subjectPrefix?: string
    headline?: string
    subhead?: string
    tag?: string
  }
  leadMagnet?: CalculatorConfig
  industryLabel?: string
  bookingUrl?: string
  relatedResources?: {
    tag?: string
    headline?: string
    subhead?: string
    links: { label: string; href: string; blurb?: string }[]
  }
}

export default function IndustryLandingPage({ content }: { content: LandingContent }) {
  return <PersuasiveCommercialLandingPage content={safeCommercialContent(content)} />
}
