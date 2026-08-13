'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Footer from '@/components/sections/Footer'
import {
  Header, Hero, TrustStrip, PainCards, SkillsGrid, WorkingHoursAlignment, ScreeningSection,
  Process, EngagementModels, ComparisonTable, FaqAccordion, FaqPageJsonLd, LeadForm, DisclosureStrip,
  CtaButton,
} from '@/components/landing/international'
import { trackLandingEvent } from '@/lib/analytics'
import { AUSTRALIA_CONTENT } from '@/lib/content/international-landing/australia'

const easeOut = [0.16, 1, 0.3, 1] as const
const c = AUSTRALIA_CONTENT

/* ═════════════════════════════════════════════════════════════════════════
   Page-local sections — not part of the shared international-landing
   component family. Mirrors the pattern established on the UK page
   (app/uk-offshore-tech-resources/page.tsx): "sample profiles" lead magnet
   band, "what you receive" proof section, and the "clear terms" risk
   -reduction strip, all driven by AUSTRALIA_CONTENT the same way the shared
   sections are.
   ═════════════════════════════════════════════════════════════════════════ */

function SampleProfilesSection() {
  const { sampleProfiles } = c
  return (
    <section id="sample-profiles" aria-label="Sample profiles" style={{ background: 'var(--bg-dark)', color: '#fff', scrollMarginTop: 80 }}>
      <div className="container-x text-center" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange-mid)' }}>
            {sampleProfiles.tag}
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', color: '#fff' }}>
            {sampleProfiles.headline}
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-on-dark-mute)', lineHeight: 1.65, margin: '0 0 30px' }}>
            {sampleProfiles.subhead}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center" style={{ gap: 10, marginBottom: 34, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          {sampleProfiles.categories.map((cat) => (
            <span
              key={cat}
              style={{
                fontSize: 13, fontWeight: 700, color: '#fff',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999, padding: '9px 16px',
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <CtaButton
          href="#lead-form"
          label={sampleProfiles.ctaLabel}
          variant="primary"
          onClick={() => trackLandingEvent(c.eventPrefix, 'sample_profiles_click', { location: 'sample_profiles_section' })}
        />
      </div>
    </section>
  )
}

function ProofSection() {
  const { proof } = c
  return (
    <section aria-label="What you receive" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]" style={{ gap: 'clamp(28px, 4vw, 44px)', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="section-tag">{proof.tag}</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 12px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
            {proof.headline}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            {proof.subhead}
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="flex flex-col" style={{ gap: 12, listStyle: 'none', margin: 0, padding: 0 }}
        >
          {proof.items.map((w) => (
            <li key={w} className="flex items-start" style={{ gap: 11, background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)', borderRadius: 14, padding: '14px 16px' }}>
              <span
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,212,170,0.14)', color: 'var(--teal-dark)', marginTop: 1 }}
              >
                <Check size={13} strokeWidth={3} />
              </span>
              <span style={{ fontSize: 14, color: '#2a2a3a', lineHeight: 1.55 }}>{w}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function RiskSection() {
  const { risk } = c
  return (
    <section aria-label="Terms" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x text-center" style={{ padding: 'clamp(48px, 8vw, 72px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ maxWidth: 680, margin: '0 auto' }}
        >
          <span className="section-tag">{risk.tag}</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', color: 'var(--text-primary)' }}>
            {risk.headline}
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            {risk.subhead}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   PAGE — composes the shared international-landing component family with
   AUSTRALIA_CONTENT. Section order follows the universal brief order (Hero,
   Trust strip, Buyer pain, Skills, Time-zone/working-hour alignment,
   Screening methodology, How it works, Engagement models, Sample profiles,
   Proof, Risk reduction, Comparison, FAQs, Requirement form, Footer) —
   differs from the UK page, which doesn't wire in WorkingHoursAlignment and
   orders Process before ScreeningSection.
   ═════════════════════════════════════════════════════════════════════════ */

export default function AustraliaOffshoreTechResourcesPage() {
  return (
    <>
      <FaqPageJsonLd faqs={c.faqs.faqs} />
      <Header nav={c.nav} ctaLabel={c.headerCtaLabel} eventPrefix={c.eventPrefix} />
      <main>
        <Hero content={c.hero} eventPrefix={c.eventPrefix} />
        <TrustStrip content={c.trustStrip} />
        <PainCards content={c.pain} />
        <SkillsGrid content={c.skills} />
        {c.workingHours && <WorkingHoursAlignment content={c.workingHours} />}
        <ScreeningSection content={c.screening} />
        <Process content={c.process} />
        <EngagementModels content={c.engagementModels} eventPrefix={c.eventPrefix} />
        <SampleProfilesSection />
        <ProofSection />
        <RiskSection />
        <ComparisonTable content={c.comparison} />
        <FaqAccordion content={c.faqs} />
        <LeadForm content={c.leadForm} market={c.market} eventPrefix={c.eventPrefix} leadSourceLabel={c.leadSourceLabel} />
      </main>
      <DisclosureStrip content={c.disclosure} />
      <Footer />
    </>
  )
}
