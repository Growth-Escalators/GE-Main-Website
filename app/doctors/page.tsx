'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/sections/Footer'
import VideoTestimonialsShorts from '@/components/landing/VideoTestimonialsShorts'
import LeadForm from '@/components/landing/LeadForm'
import {
  HERO,
  PAIN_POINTS,
  SERVICES,
  PROCESS,
  WHY_US,
  VIDEO_TESTIMONIALS,
  RESULT_HIGHLIGHT,
  FAQS,
} from './_data/content'
import styles from './page.module.css'

/* Page-level metadata is set via export (Next.js App Router pattern). Because
   this page is a client component, metadata must live in a co-located
   layout.tsx instead — see app/doctors/layout.tsx. */

/* ── Cycling word for hero ── */
function useCyclingWord(words: string[], intervalMs = 2400) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), intervalMs)
    return () => clearInterval(t)
  }, [words, intervalMs])
  return words[idx]
}

/* ── FAQ accordion item ── */
function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button
        type="button"
        className={styles.faqHead}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{q}</span>
        <span className={styles.faqIcon} aria-hidden>+</span>
      </button>
      {open && <div className={styles.faqBody}>{a}</div>}
    </div>
  )
}

export default function DoctorsLandingPage() {
  const cycle = useCyclingWord(HERO.cyclingWords)

  return (
    <div className={styles.page}>
      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={`${styles.headerInner} container-x`}>
          <Link href="/" className={styles.logo} aria-label="Growth Escalators home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://growthescalators.com/wp-content/uploads/2023/10/growth-escalator-logo.png"
              alt="Growth Escalators"
              loading="eager"
            />
          </Link>
          <a href="#lead-form" className={`btn-primary ${styles.headerCta}`}>
            Book a Free Call
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroAurora} aria-hidden>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroOrb3} />
        </div>
        <div className={`${styles.heroInner} container-x`}>
          <motion.span
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {HERO.badge}
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            {HERO.headlineLines[0]}
            <br />
            {HERO.headlineLines[1]}
          </motion.h1>

          <motion.div
            className={styles.heroCycle}
            key={cycle}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {cycle}
          </motion.div>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {HERO.subhead}
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href={HERO.primaryCta.href} className="btn-primary">
              {HERO.primaryCta.label}
            </a>
            <a href={HERO.secondaryCta.href} className="btn-outline">
              {HERO.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            className={styles.heroPills}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {HERO.statPills.map((p) => (
              <span key={p.label} className={`glass-pill ${styles.heroPill}`}>
                <span className={styles.heroPillEmoji}>{p.emoji}</span>
                <span className={styles.heroPillValue}>{p.value}</span>
                <span>{p.label}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="What\'s holding you back">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">SOUND FAMILIAR?</span>
            <h2 className={styles.sectionHeadline}>What&apos;s really holding your practice back</h2>
          </div>
          <div className={styles.painGrid}>
            {PAIN_POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.painCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className={styles.painEmoji}>{p.emoji}</div>
                <h3 className={styles.painTitle}>{p.title}</h3>
                <p className={styles.painBody}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="What we do">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">WHAT WE DO</span>
            <h2 className={styles.sectionHeadline}>Marketing engineered for healthcare</h2>
            <p className={styles.sectionSub}>
              Six services, one outcome: a calendar that&apos;s consistently full of the right patients.
            </p>
          </div>
          <div className={styles.svcGrid}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                className={styles.svcCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              >
                <h3 className={styles.svcTitle}>{s.title}</h3>
                <p className={styles.svcBody}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULT HIGHLIGHT ───────────────────────────────────────────── */}
      <section className={styles.section} id="results" aria-label="Featured result">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">REAL RESULTS</span>
            <h2 className={styles.sectionHeadline}>Doctors we&apos;ve helped grow</h2>
          </div>
          <motion.div
            className={styles.resultBlock}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className={styles.resultMeta}>FEATURED CLIENT</p>
              <h3 className={styles.resultDoctor}>{RESULT_HIGHLIGHT.doctor}</h3>
              <p className={styles.resultSpec}>
                {RESULT_HIGHLIGHT.specialization} · {RESULT_HIGHLIGHT.location}
              </p>
              <blockquote className={styles.resultQuote}>{RESULT_HIGHLIGHT.quote}</blockquote>
            </div>
            <div className={styles.resultMetrics}>
              {RESULT_HIGHLIGHT.metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS (YouTube Shorts) ───────────────────────── */}
      <VideoTestimonialsShorts
        videos={VIDEO_TESTIMONIALS}
        tag="HEAR FROM OUR DOCTORS"
        headline="Real doctors, real outcomes"
        subhead="Tap any short to hear how we helped them grow their practice."
      />

      {/* ── PROCESS ────────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="How it works">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">HOW IT WORKS</span>
            <h2 className={styles.sectionHeadline}>Four steps, zero guesswork</h2>
          </div>
          <div className={styles.procGrid}>
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                className={styles.procCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.procStep}>{p.step}</div>
                <h3 className={styles.procTitle}>{p.title}</h3>
                <p className={styles.procBody}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="Why us">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">WHY GROWTH ESCALATORS</span>
            <h2 className={styles.sectionHeadline}>Not your average agency</h2>
          </div>
          <div className={styles.whyGrid}>
            {WHY_US.map((w, i) => (
              <motion.div
                key={w.title}
                className={styles.whyCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.07 }}
              >
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyBody}>{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ──────────────────────────────────────────────────── */}
      <LeadForm
        recipient="Info@growthescalators.com"
        subjectPrefix="New Doctor Lead"
        headline="Tell us about your practice"
        subhead="Fill this in and we'll get back within 24 hours with a no-obligation strategy session."
        tag="LET'S TALK"
      />

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="FAQ">
        <div className="container-x">
          <div className={styles.sectionHeader}>
            <span className="section-tag">QUESTIONS, ANSWERED</span>
            <h2 className={styles.sectionHeadline}>Frequently asked</h2>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaBanner} aria-label="Final call to action">
        <div className="container-x">
          <h2 className={styles.ctaTitle}>Ready to fill your calendar?</h2>
          <p className={styles.ctaSub}>
            Book a free strategy session. We&apos;ll review what you&apos;re doing today and tell you the
            three things we&apos;d change first — no obligation.
          </p>
          <a href="#lead-form" className="btn-primary">
            Book a Free Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
