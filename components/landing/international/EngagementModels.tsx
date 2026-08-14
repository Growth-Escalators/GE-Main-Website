'use client'

import { motion } from 'framer-motion'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import type { EngagementModelsSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * Engagement-model cards (e.g. "Individual Offshore Specialist", "Dedicated
 * Technology Pod", "Partner Fulfilment"). Each card's CTA fires
 * `{eventPrefix}_lp_primary_cta_click` with `location: 'engagement_model_N'`
 * (1-indexed), matching the existing UK behavior.
 */
export type EngagementModelsProps = {
  content: EngagementModelsSectionContent
  eventPrefix: string
  ctaHref?: string
  id?: string
}

export default function EngagementModels({ content, eventPrefix, ctaHref = '#lead-form', id = 'engagement-models' }: EngagementModelsProps) {
  const { tag, headline, models, ctaLabel } = content
  return (
    <section id={id} aria-label="Engagement models" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', scrollMarginTop: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 44 }}
      >
        <span className="section-tag">{tag}</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          {headline}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 18, maxWidth: 1060, margin: '0 auto' }}>
        {models.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
            className="flex flex-col"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)', borderRadius: 18, padding: 26 }}
          >
            <h3 style={{ fontSize: 17.5, fontWeight: 800, margin: '0 0 10px', color: 'var(--text-primary)' }}>{m.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>{m.body}</p>
            <CtaButton
              href={ctaHref}
              label={m.ctaLabel || ctaLabel}
              variant="outline"
              style={{ fontSize: 14, padding: '11px 18px', alignSelf: 'flex-start' }}
              onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location: `engagement_model_${i + 1}` })}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
