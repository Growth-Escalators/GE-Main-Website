'use client'

import { motion } from 'framer-motion'
import { Check, ShieldCheck } from 'lucide-react'
import Footer from '@/components/sections/Footer'
import {
  Header, Hero, TrustStrip, PainCards, SkillsGrid, Process, ScreeningSection,
  EngagementModels, WorkingHoursAlignment, ComparisonTable, FaqAccordion, FaqPageJsonLd,
  LeadForm, DisclosureStrip, CtaButton,
} from '@/components/landing/international'
import { trackLandingEvent } from '@/lib/analytics'
import { US_CONTENT } from '@/lib/content/international-landing/us'

const easeOut = [0.16, 1, 0.3, 1] as const
const c = US_CONTENT

/* ═════════════════════════════════════════════════════════════════════════
   Page-local sections — not part of the shared international-landing
   component family. "Partner protection" has no shared-component equivalent
   anywhere in the family (US-only concept — the other three markets are
   direct-hiring offers with no end-client relationship to protect), so it is
   built here as plain Tailwind/inline-style JSX rather than added to
   components/landing/international/, keeping it isolated to this file only.
   "Sample profiles", "what you receive" and "clear terms" mirror the same
   page-local pattern already established by the UK page (see
   app/uk-offshore-tech-resources/page.tsx) — copied and re-bound to
   US_CONTENT, with the sample-profiles CTA swapped to fire this market's
   extra `test_requirement_click` event instead of `sample_profiles_click`
   (the hero secondary CTA already covers `sample_profiles_click` via the
   shared Hero component).
   ═════════════════════════════════════════════════════════════════════════ */

/**
 * "Your client relationship remains yours" — partner-account-protection
 * block. Positioned high on the page (directly after the pain section) per
 * the brief, since account protection is the first objection a staffing/MSP
 * buyer has before they'll even read about skills or screening. Every item
 * is phrased as agreed/documented/available-by-agreement, never as an
 * already-standard program — no non-circumvention or white-label claim is
 * made as a default inclusion, per the proof rules.
 */
function PartnerProtectionSection() {
  const items = [
    'Communication boundaries agreed upfront',
    'No direct end-client contact unless authorised',
    'Confidentiality expectations documented',
    'Candidate and submission ownership recorded',
    'Non-circumvention terms available where contractually agreed',
    'White-label processes discussed separately',
    'Transparent escalation contact',
  ]
  return (
    <section id="partner-protection" aria-label="Partner account protection" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', borderBottom: '1px solid var(--border-hair)' }}>
      <div className="container-x" style={{ padding: 'clamp(48px, 8vw, 76px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 36, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="inline-flex items-center" style={{ gap: 8 }}>
            <ShieldCheck size={16} color="var(--orange)" aria-hidden />
            <span className="section-tag">PARTNER PROTECTION</span>
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
            Your client relationship remains yours
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Growth Escalators works as an extension of your fulfilment operation, not in front of your account.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, maxWidth: 820, margin: '0 auto' }}>
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: easeOut }}
              className="flex items-start"
              style={{ gap: 11, background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 14, padding: '14px 16px' }}
            >
              <span
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,212,170,0.14)', color: 'var(--teal-dark)', marginTop: 1 }}
              >
                <Check size={13} strokeWidth={3} />
              </span>
              <span style={{ fontSize: 14, color: '#2a2a3a', lineHeight: 1.5 }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
          onClick={() => trackLandingEvent('us', 'test_requirement_click', { location: 'sample_profiles_section' })}
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
   US_CONTENT. Section order follows the universal shared list, with the
   market-specific shift the brief calls for: the page-local partner
   -protection block is inserted directly after Pain (before Skills), since
   account protection is this buyer's first objection.
   ═════════════════════════════════════════════════════════════════════════ */

export default function USTechStaffingFulfilmentPage() {
  return (
    <>
      <FaqPageJsonLd faqs={c.faqs.faqs} />
      <Header nav={c.nav} ctaLabel={c.headerCtaLabel} eventPrefix={c.eventPrefix} />
      <main>
        <Hero content={c.hero} eventPrefix={c.eventPrefix} />
        <TrustStrip content={c.trustStrip} />
        <PainCards content={c.pain} />
        <PartnerProtectionSection />
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
        <LeadForm content={c.leadForm} market={c.market} eventPrefix={c.eventPrefix} leadSourceLabel={c.leadSourceLabel} submitLabel="Review My Requirement" />
      </main>
      <DisclosureStrip content={c.disclosure} />
      <Footer />
    </>
  )
}
