'use client'

import { motion } from 'framer-motion'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import ScreeningPipeline from './ScreeningPipeline'
import ui from './InternationalPhase2.module.css'
import type { HeroContent } from '@/lib/content/international-landing/types'

export type HeroProps = {
  content: HeroContent
  eventPrefix: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

export default function Hero({ content, eventPrefix, primaryCtaHref = '#lead-form', secondaryCtaHref = '#sample-profiles' }: HeroProps) {
  const { badge, heading, subhead, proofPoints, primaryCta, secondaryCta, microcopy, pipeline } = content
  return (
    <section aria-label="Hero" className={ui.hero}>
      <div className={ui.heroShell}>
        <div className={ui.heroGrid}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .62 }}>
            <p className={ui.eyebrow}>{badge}</p>
            <h1>{heading.lead}<br />{heading.accent}</h1>
          </motion.div>
          <motion.div className={ui.heroAside} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .62, delay: .1 }}>
            <p>{subhead}</p>
            <ul className={ui.proofList}>
              {proofPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className={ui.heroActions}>
              <CtaButton href={primaryCtaHref} label={primaryCta.label} onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location: 'hero' })} />
              {secondaryCta && <CtaButton href={secondaryCtaHref} label={secondaryCta.label} variant="outline" onClick={() => trackLandingEvent(eventPrefix, 'sample_profiles_click', { location: 'hero' })} />}
            </div>
            {microcopy && <p className={ui.micro}>{microcopy}</p>}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .66, delay: .2 }}>
          <ScreeningPipeline cardTitle={pipeline.cardTitle} cardBadge={pipeline.cardBadge} steps={pipeline.steps} />
        </motion.div>
      </div>
    </section>
  )
}
