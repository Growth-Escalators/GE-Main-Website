'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import ScreeningPipeline from './ScreeningPipeline'
import type { HeroContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * Hero section shared by every international-landing-page market: proof-point
 * checklist + primary/secondary CTA on the left, the ScreeningPipeline visual
 * card on the right. Not explicitly named in the Stage A component list, but
 * the brief's visual-system + pipeline-visual requirements apply to every
 * market identically, so it's built as one shared component rather than left
 * for each market to hand-roll — see the Stage A report for this call.
 *
 * Fires `{eventPrefix}_lp_primary_cta_click` (location: 'hero') and, when
 * `content.secondaryCta` is set, `{eventPrefix}_lp_sample_profiles_click`
 * (location: 'hero') — the secondary hero CTA is specifically the "sample
 * profiles" action per the required analytics contract, not a generic
 * second button.
 */
export type HeroProps = {
  content: HeroContent
  eventPrefix: string
  primaryCtaHref?: string
  secondaryCtaHref?: string
}

export default function Hero({
  content, eventPrefix, primaryCtaHref = '#lead-form', secondaryCtaHref = '#sample-profiles',
}: HeroProps) {
  const { badge, heading, subhead, proofPoints, primaryCta, secondaryCta, microcopy, pipeline } = content

  return (
    <section aria-label="Hero" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#fff,#fbfaf8)' }}>
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%',
          filter: 'blur(120px)', background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          top: -180, right: -140,
        }}
      />
      <div className="container-x" style={{ padding: 'clamp(40px, 7vw, 72px) clamp(20px, 4vw, 40px) clamp(56px, 9vw, 88px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center" style={{ gap: 'clamp(32px, 5vw, 56px)' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
            <span className="section-tag">{badge}</span>
            <h1
              style={{
                fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.03em', margin: '0 0 18px', color: 'var(--text-primary)',
              }}
            >
              {heading.lead}{' '}
              <span style={{ color: 'var(--orange)' }}>{heading.accent}</span>
            </h1>
            <p style={{ fontSize: 17.5, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 0 26px' }}>
              {subhead}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 10, listStyle: 'none', margin: '0 0 30px', padding: 0 }}>
              {proofPoints.map((p) => (
                <li key={p} className="flex items-start" style={{ gap: 9, fontSize: 14, color: '#2a2a3a' }}>
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,212,170,0.14)', color: 'var(--teal-dark)', marginTop: 1 }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center" style={{ gap: 16, marginBottom: 18 }}>
              <CtaButton
                href={primaryCtaHref}
                label={primaryCta.label}
                variant="primary"
                onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location: 'hero' })}
              />
              {secondaryCta && (
                <CtaButton
                  href={secondaryCtaHref}
                  label={secondaryCta.label}
                  variant="outline"
                  onClick={() => trackLandingEvent(eventPrefix, 'sample_profiles_click', { location: 'hero' })}
                />
              )}
            </div>
            {microcopy && (
              <p style={{ fontSize: 13, color: 'var(--text-muted)', maxWidth: 480, lineHeight: 1.55 }}>
                {microcopy}
              </p>
            )}
          </motion.div>

          {/* Right: screening pipeline visual — HTML/CSS, no stock imagery */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          >
            <ScreeningPipeline cardTitle={pipeline.cardTitle} cardBadge={pipeline.cardBadge} steps={pipeline.steps} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
