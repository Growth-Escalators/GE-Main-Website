'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Check, X, Menu, FileText, ShieldCheck, UserCheck, Clock, Users,
  Upload, Loader2, AlertCircle, CheckCircle2, Linkedin,
} from 'lucide-react'
import Footer from '@/components/sections/Footer'
import { trackLead } from '@/lib/analytics'

const easeOut = [0.16, 1, 0.3, 1] as const

/* ─────────────────────────────────────────────────────────────────────────
   Analytics — this page's own named events, fired through the GA4 gtag.js
   tag already loaded site-wide (components/analytics/GoogleAnalytics.tsx).
   window.gtag / window.dataLayer types are declared globally by lib/analytics.ts.
   ───────────────────────────────────────────────────────────────────────── */
function track(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, { page_path: window.location?.pathname, ...params })
    return
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, page_path: window.location?.pathname, ...params })
  }
}

const CAL_LINK = 'https://cal.com/growth-escalators/discovery-call'

/* ═════════════════════════════════════════════════════════════════════════
   CONTENT — kept as clearly-named consts near the top of the file so a
   future country page (UAE/US/AU) can lift this shape into its own
   `_data/content.ts` without hunting through JSX. Not extracted into a
   generic content system yet — this is the first of its kind, and building
   an abstraction for a sample size of one would be premature.
   ═════════════════════════════════════════════════════════════════════════ */

const HEADER_NAV = [
  { label: 'Skills', href: '#skills' },
  { label: 'Screening', href: '#screening' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Engagement Models', href: '#engagement-models' },
  { label: 'FAQs', href: '#faqs' },
]

const HERO_PROOF_POINTS = [
  'Skill-matched, not keyword-matched',
  'Technical and communication screening',
  'Confirmed availability and working-hour overlap',
  'Individual specialists or complete technology pods',
]

const HERO_PIPELINE = [
  { icon: FileText, label: 'Requirement received' },
  { icon: ShieldCheck, label: 'Skills validated' },
  { icon: UserCheck, label: 'Candidate screened' },
  { icon: Clock, label: 'Relevant shortlist within 48 hours' },
  { icon: Users, label: 'Client interview' },
]

const TRUST_POINTS = [
  { title: 'Relevant profiles within 48 hours', body: 'From confirmed requirement to shortlist.' },
  { title: 'Technical and communication screening', body: 'Every candidate, every requirement.' },
  { title: 'Identity and employment verification', body: 'Checked before a profile is shared.' },
  { title: 'Dedicated recruitment contact', body: 'One point of contact for the engagement.' },
]

const PAIN_CARDS = [
  { title: 'Long local hiring cycles', body: 'Specialist roles can remain open while delivery deadlines continue moving closer.' },
  { title: 'Too many irrelevant profiles', body: 'Keyword-matched CVs create more screening work instead of solving the requirement.' },
  { title: 'Expensive capacity gaps', body: 'Urgent local contractors can quickly put pressure on project margins.' },
  { title: 'Unreliable freelance delivery', body: 'A low rate means little when accountability, continuity and replacement support are missing.' },
]

const SKILL_CATEGORIES: { title: string; items: string[] }[] = [
  {
    title: 'Enterprise Applications',
    items: ['SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Microsoft Dynamics 365', 'Zoho'],
  },
  {
    title: 'Cloud, DevOps and Infrastructure',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DevOps', 'SRE and platform engineering', 'Linux and cloud infrastructure', 'Cybersecurity'],
  },
  {
    title: 'Software Engineering',
    items: ['Java and Spring Boot', '.NET', 'Python', 'React and Angular', 'Node.js', 'Mobile development', 'Full-stack engineering'],
  },
  {
    title: 'Data and AI',
    items: ['Data engineering', 'Data science', 'AI and GenAI', 'Machine learning', 'Power BI', 'Database engineering'],
  },
  {
    title: 'Quality Engineering',
    items: ['Manual and automation QA', 'Selenium', 'Tosca', 'API testing', 'Performance testing', 'Quality engineering leads'],
  },
  {
    title: 'Support and Managed Operations',
    items: ['Application support', 'Cloud support', 'Technical support', '24×5 and 24×7 teams', 'L1, L2 and L3 support', 'Support managers'],
  },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Share the requirement', body: 'Send the JD or tell us the skills, experience, engagement duration, working hours and preferred start date.' },
  { step: '02', title: 'We validate and screen', body: 'We assess technical relevance, project experience, communication, availability and compensation expectations.' },
  { step: '03', title: 'You interview the shortlist', body: 'Meet only the candidates who match the agreed mandatory criteria.' },
  { step: '04', title: 'Confirm the engagement', body: 'Once selected, the engagement begins under mutually agreed commercial, working-hour, confidentiality and onboarding terms.' },
]

const SCREENING_GATES = [
  'Resume and project validation',
  'Mandatory-skill checklist',
  'Relevant years of experience by core skill',
  'Technical screening',
  'Communication assessment',
  'Availability and notice-period confirmation',
  'Identity and employment-document verification',
  'UK working-hour overlap confirmation',
  'Recruiter recommendation',
]

const SAMPLE_SUMMARY = [
  { label: 'Core skill', value: 'Example only' },
  { label: 'Relevant experience', value: 'Example only' },
  { label: 'Recent project', value: 'Example only' },
  { label: 'Responsibilities', value: 'Example only' },
  { label: 'Communication', value: 'Assessed' },
  { label: 'Availability', value: 'Confirmed before submission' },
  { label: 'UK overlap', value: 'Confirmed before submission' },
  { label: 'Recruiter recommendation', value: 'Included' },
]

const ENGAGEMENT_MODELS = [
  { title: 'Individual Offshore Specialist', body: 'For teams that need one or two experienced professionals for a defined technology or project requirement.' },
  { title: 'Dedicated Technology Pod', body: 'A coordinated team that can include backend, frontend, QA, DevOps and technical leadership based on the delivery scope.' },
  { title: 'Partner Fulfilment', body: 'For UK staffing firms, consultancies and implementation partners that need additional sourcing or offshore delivery capacity behind their client relationships.' },
]

const SAMPLE_PROFILE_CATEGORIES = [
  'SAP', 'Salesforce and ServiceNow', 'Cloud and DevOps', 'Java and .NET', 'Data and AI', 'QA automation',
]

const WHAT_YOU_RECEIVE = [
  'A short scorecard for every profile — mandatory skills, relevant experience and recent project context',
  'Confirmation that communication, availability and UK working-hour overlap have already been checked',
  'A named recruitment contact for the engagement, not a shared inbox',
  'Documented terms — confidentiality, notice and applicable replacement terms — before onboarding starts',
]

const COMPARISON_ROWS: { criterion: string; freelancer: string; recruitment: string; outsourcing: string; ge: string }[] = [
  { criterion: 'Technical screening', freelancer: 'Varies by individual', recruitment: 'Typically limited', outsourcing: 'Varies by provider', ge: 'Structured, for every requirement' },
  { criterion: 'Communication assessment', freelancer: 'Not typically assessed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Included in the agreed process' },
  { criterion: 'Availability confirmation', freelancer: 'Self-reported', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' },
  { criterion: 'Working-hour alignment', freelancer: 'Not typically confirmed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' },
  { criterion: 'Dedicated contact', freelancer: 'None', recruitment: 'Varies by agency', outsourcing: 'Often shared, account-level', ge: 'Dedicated recruitment contact' },
  { criterion: 'Replacement terms', freelancer: 'Not typically offered', recruitment: 'Varies by agency', outsourcing: 'Available by agreement', ge: 'Documented before onboarding' },
  { criterion: 'Individuals or pods', freelancer: 'Individuals only', recruitment: 'Typically individuals', outsourcing: 'Pods, minimums often apply', ge: 'Either, matched to requirement' },
]

const FAQS = [
  { q: 'Where are the resources based?', a: 'Our offshore technology resources are primarily based in India and work remotely with an agreed overlap with the client’s UK working hours.' },
  { q: 'How quickly can we receive profiles?', a: 'We aim to share an initial relevant shortlist within 48 hours after the mandatory requirements are confirmed. Highly specialised requirements may require additional time, which we will communicate upfront.' },
  { q: 'Can the resources work UK business hours?', a: 'Working-hour expectations are confirmed with each candidate before submission. The available overlap depends on the role and engagement requirements.' },
  { q: 'How are candidates screened?', a: 'We review mandatory technical skills, project experience, relevant years of experience, communication, availability and working-hour alignment. Client-specific screening questions can also be included.' },
  { q: 'Who employs and invoices for the resource?', a: 'The contractual structure is agreed before onboarding. Growth Escalators will confirm the applicable invoicing, notice, documentation and engagement terms for the selected resource.' },
  { q: 'How is confidential information protected?', a: 'Confidentiality, intellectual-property and access requirements are documented before onboarding. Additional client-specific security requirements can be incorporated into the engagement process.' },
  { q: 'What happens if a resource leaves or is not the right fit?', a: 'Applicable replacement and transition terms are agreed in writing before the engagement begins.' },
  { q: 'Can we start with one resource?', a: 'Yes. Clients can begin with an individual specialist and expand the engagement as requirements grow.' },
  { q: 'Do you provide on-site resources in the UK?', a: 'This landing-page offer is focused on offshore delivery from India. Any local or on-site requirement must be discussed and confirmed separately.' },
]

/* ═════════════════════════════════════════════════════════════════════════
   HEADER
   ═════════════════════════════════════════════════════════════════════════ */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [menuOpen])

  const cta = (location: string) => (
    <a
      href="#lead-form"
      onClick={() => track('uk_lp_primary_cta_click', { location })}
      className="btn-primary"
      style={{ fontSize: 14.5, padding: '12px 22px', whiteSpace: 'nowrap' }}
    >
      Share Your Requirement
    </a>
  )

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: '1px solid var(--border-hair)',
        }}
      >
        <div
          className="container-x flex items-center justify-between"
          style={{ padding: 'clamp(10px, 2vw, 14px) clamp(16px, 4vw, 40px)' }}
        >
          <Link href="/" aria-label="Growth Escalators — Home" className="inline-flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Growth Escalators" style={{ height: 30, width: 'auto', display: 'block' }} loading="eager" />
          </Link>

          <nav aria-label="Page sections" className="hidden lg:flex items-center" style={{ gap: 26, fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>
            {HEADER_NAV.map((l) => (
              <a key={l.href} href={l.href} className="uk-nav-link" style={{ transition: 'color 0.2s' }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center" style={{ gap: 14 }}>
            <div className="hidden sm:block">{cta('header')}</div>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center"
              style={{ width: 40, height: 40 }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="uk-mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="uk-mobile-menu"
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: 'var(--bg-primary)', paddingTop: 76 }}
        >
          <div className="container-x flex flex-col" style={{ gap: 4, padding: '16px 24px' }}>
            {HEADER_NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between"
                style={{
                  padding: '16px 0', fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em',
                  color: 'var(--text-primary)', borderBottom: '1px solid var(--border-hair)',
                }}
              >
                {l.label}
                <span style={{ color: 'var(--text-muted)', fontSize: 16 }}>→</span>
              </a>
            ))}
            <div className="mt-6">{cta('mobile_menu')}</div>
          </div>
        </div>
      )}

      {!menuOpen && (
        <div className="sm:hidden" style={{ padding: '10px clamp(16px,4vw,40px)', borderBottom: '1px solid var(--border-hair)' }}>
          {cta('header_mobile')}
        </div>
      )}

      <style jsx>{`
        :global(.uk-nav-link):hover { color: var(--orange) !important; }
      `}</style>
    </>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   HERO
   ═════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
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
            <span className="section-tag">Offshore technology capacity for UK delivery teams</span>
            <h1
              style={{
                fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.03em', margin: '0 0 18px', color: 'var(--text-primary)',
              }}
            >
              Screened India-Based Tech Specialists.{' '}
              <span style={{ color: 'var(--orange)' }}>Shortlisted Within 48 Hours.</span>
            </h1>
            <p style={{ fontSize: 17.5, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 540, margin: '0 0 26px' }}>
              Add experienced engineers to your delivery team without waiting months to recruit.
              Growth Escalators provides screened professionals across enterprise applications,
              cloud, DevOps, software engineering, data, AI and quality engineering.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 10, listStyle: 'none', margin: '0 0 30px', padding: 0 }}>
              {HERO_PROOF_POINTS.map((p) => (
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
              <a
                href="#lead-form"
                className="btn-primary"
                onClick={() => track('uk_lp_primary_cta_click', { location: 'hero' })}
              >
                Share Your Requirement
              </a>
              <a
                href="#sample-profiles"
                className="btn-outline"
                onClick={() => track('uk_lp_sample_profiles_click', { location: 'hero' })}
              >
                View Sample Profiles
              </a>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', maxWidth: 480, lineHeight: 1.55 }}>
              Send the role or upload the JD. We will review the requirements and confirm feasibility
              before sharing profiles.
            </p>
          </motion.div>

          {/* Right: screening pipeline visual — HTML/CSS, no stock imagery */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          >
            <div
              style={{
                background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 22,
                boxShadow: '0 30px 70px rgba(17,18,26,0.10)', padding: 'clamp(20px, 3vw, 26px)',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-primary)' }}>
                  Requirement to shortlist
                </div>
                <span
                  style={{
                    fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
                    background: 'rgba(17,18,26,0.05)', padding: '4px 10px', borderRadius: 999,
                  }}
                >
                  Process overview
                </span>
              </div>
              <div className="flex flex-col" style={{ gap: 0 }}>
                {HERO_PIPELINE.map((s, i) => {
                  const Icon = s.icon
                  const isLast = i === HERO_PIPELINE.length - 1
                  return (
                    <div key={s.label} className="flex items-start" style={{ gap: 14 }}>
                      <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                        <span
                          className="inline-flex items-center justify-center"
                          style={{
                            width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                            background: isLast ? 'linear-gradient(135deg, var(--orange), var(--orange-light))' : 'var(--bg-warm)',
                            color: isLast ? '#fff' : 'var(--orange)',
                          }}
                        >
                          <Icon size={18} />
                        </span>
                        {!isLast && <span style={{ width: 2, flex: 1, minHeight: 22, background: 'var(--border-hair-2)', margin: '4px 0' }} aria-hidden />}
                      </div>
                      <div style={{ paddingBottom: isLast ? 0 : 22, paddingTop: 7 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   TRUST STRIP
   ═════════════════════════════════════════════════════════════════════════ */

function TrustStripSection() {
  return (
    <section aria-label="Trust signals" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ padding: 'clamp(22px, 4vw, 30px) clamp(20px, 4vw, 40px)', gap: 18 }}>
        {TRUST_POINTS.map((t) => (
          <div key={t.title} className="flex items-start" style={{ gap: 10 }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,107,53,0.18)', color: 'var(--orange-mid)', marginTop: 1 }}
            >
              <Check size={13} strokeWidth={3} />
            </span>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: '#fff', lineHeight: 1.35 }}>{t.title}</div>
              <div style={{ fontSize: 12, color: 'var(--text-on-dark-mute)', marginTop: 2 }}>{t.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   BUYER PAIN
   ═════════════════════════════════════════════════════════════════════════ */

function PainSection() {
  return (
    <section aria-label="The problem" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        style={{ maxWidth: 760, marginBottom: 44 }}
      >
        <span className="section-tag">SOUND FAMILIAR?</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 12px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
          One missing specialist should not hold up the entire project.
        </h2>
        <p style={{ fontSize: 16.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
          When a critical role remains open, delivery slows down long before recruitment catches up.
          Internal teams absorb additional workload, milestones move and project margins begin to suffer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
        {PAIN_CARDS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: easeOut }}
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)', borderRadius: 16, padding: 22 }}
          >
            <div style={{ fontSize: 15.5, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.3 }}>{p.title}</div>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{p.body}</p>
          </motion.div>
        ))}
      </div>

      <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 760, marginTop: 32 }}>
        Growth Escalators helps UK technology teams add screened specialist capacity from India while
        maintaining clear ownership, communication and delivery accountability.
      </p>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   SKILLS
   ═════════════════════════════════════════════════════════════════════════ */

function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 44, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="section-tag">WHAT WE COVER</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 10px', color: 'var(--text-primary)' }}>
            Specialist capacity across the technologies your clients already use
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: easeOut }}
              style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 16, padding: 22 }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 12px' }}>{cat.title}</h3>
              <div className="flex flex-wrap" style={{ gap: 7 }}>
                {cat.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)',
                      background: 'var(--bg-warm)', border: '1px solid var(--border-hair)',
                      borderRadius: 999, padding: '5px 11px',
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 620, margin: '32px auto 0' }}>
          Don&rsquo;t see the exact skill you need? Share the JD. Our team also supports specialist and
          hard-to-fill requirements.
        </p>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   HOW IT WORKS
   ═════════════════════════════════════════════════════════════════════════ */

function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-label="How it works" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', scrollMarginTop: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 48 }}
      >
        <span className="section-tag">HOW IT WORKS</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          From requirement to relevant shortlist in four steps
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 18 }}>
        {PROCESS_STEPS.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
            style={{ padding: 26, borderRadius: 18, background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)' }}
          >
            <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--orange)', marginBottom: 12, lineHeight: 1 }}>{s.step}</div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px', color: 'var(--text-primary)' }}>{s.title}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   SCREENING METHODOLOGY
   ═════════════════════════════════════════════════════════════════════════ */

function ScreeningSection() {
  return (
    <section id="screening" aria-label="Screening methodology" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]" style={{ gap: 'clamp(32px, 5vw, 48px)', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="section-tag">SCREENING</span>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
              More than keyword-matched CVs
            </h2>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 22px' }}>
              Every requirement is converted into a mandatory-skill scorecard before profiles are submitted.
            </p>
            <ol className="flex flex-col" style={{ gap: 11, margin: 0, padding: 0, listStyle: 'none' }}>
              {SCREENING_GATES.map((g, i) => (
                <li key={g} className="flex items-start" style={{ gap: 11 }}>
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{ width: 24, height: 24, borderRadius: '50%', background: '#fff', border: '1px solid var(--border-hair-2)', color: 'var(--orange)', fontSize: 11.5, fontWeight: 800 }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 14, color: '#2a2a3a', paddingTop: 3 }}>{g}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 20, boxShadow: '0 20px 50px rgba(17,18,26,0.08)', padding: 'clamp(20px, 3vw, 28px)' }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                Sample screening summary
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 18px' }}>
              Illustrative format only — not a real candidate.
            </p>
            <div className="flex flex-col" style={{ gap: 0 }}>
              {SAMPLE_SUMMARY.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between"
                  style={{ padding: '11px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-hair)' }}
                >
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>{row.label}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   ENGAGEMENT MODELS
   ═════════════════════════════════════════════════════════════════════════ */

function EngagementModelsSection() {
  return (
    <section id="engagement-models" aria-label="Engagement models" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', scrollMarginTop: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 44 }}
      >
        <span className="section-tag">ENGAGEMENT MODELS</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          Add exactly the capacity your delivery plan requires
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 18, maxWidth: 1060, margin: '0 auto' }}>
        {ENGAGEMENT_MODELS.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
            className="flex flex-col"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)', borderRadius: 18, padding: 26 }}
          >
            <h3 style={{ fontSize: 17.5, fontWeight: 800, margin: '0 0 10px', color: 'var(--text-primary)' }}>{m.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 20px', flex: 1 }}>{m.body}</p>
            <a
              href="#lead-form"
              onClick={() => track('uk_lp_primary_cta_click', { location: `engagement_model_${i + 1}` })}
              className="btn-outline"
              style={{ fontSize: 14, padding: '11px 18px', alignSelf: 'flex-start' }}
            >
              Discuss Your Requirement
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   SAMPLE PROFILES (lead magnet)
   ═════════════════════════════════════════════════════════════════════════ */

function SampleProfilesSection() {
  return (
    <section id="sample-profiles" aria-label="Sample profiles" style={{ background: 'var(--bg-dark)', color: '#fff', scrollMarginTop: 80 }}>
      <div className="container-x text-center" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange-mid)' }}>
            SEE THE SCREENING QUALITY
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', color: '#fff' }}>
            See the screening quality before discussing an engagement
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-on-dark-mute)', lineHeight: 1.65, margin: '0 0 30px' }}>
            Tell us the technology you need and we will share relevant anonymised sample profiles or
            screening formats where available.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center" style={{ gap: 10, marginBottom: 34, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          {SAMPLE_PROFILE_CATEGORIES.map((c) => (
            <span
              key={c}
              style={{
                fontSize: 13, fontWeight: 700, color: '#fff',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999, padding: '9px 16px',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <a
          href="#lead-form"
          onClick={() => track('uk_lp_sample_profiles_click', { location: 'sample_profiles_section' })}
          className="btn-primary"
        >
          Request Sample Profiles
        </a>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   PROOF — honest process proof, no fabricated testimonials/logos/numbers
   ═════════════════════════════════════════════════════════════════════════ */

function ProofSection() {
  return (
    <section aria-label="What you receive" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]" style={{ gap: 'clamp(28px, 4vw, 44px)', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="section-tag">WHAT YOU RECEIVE</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 12px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
            Process proof, not promises
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            We&rsquo;re not going to show you a client logo wall or a made-up placement count on a new
            offer. Here&rsquo;s exactly what lands in your inbox when a shortlist is ready.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="flex flex-col" style={{ gap: 12, listStyle: 'none', margin: 0, padding: 0 }}
        >
          {WHAT_YOU_RECEIVE.map((w) => (
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

/* ═════════════════════════════════════════════════════════════════════════
   RISK REDUCTION
   ═════════════════════════════════════════════════════════════════════════ */

function RiskSection() {
  return (
    <section aria-label="Terms" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x text-center" style={{ padding: 'clamp(48px, 8vw, 72px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ maxWidth: 680, margin: '0 auto' }}
        >
          <span className="section-tag">CLEAR TERMS</span>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', color: 'var(--text-primary)' }}>
            Clear terms before the resource starts
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            Availability, working hours, confidentiality, notice and applicable replacement terms are
            documented before onboarding so both teams understand how the engagement will operate.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   COMPARISON
   ═════════════════════════════════════════════════════════════════════════ */

function ComparisonSection() {
  return (
    <section aria-label="Comparison" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 36 }}
      >
        <span className="section-tag">HOW WE COMPARE</span>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          A more accountable alternative to unstructured freelance hiring
        </h2>
      </motion.div>

      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--border-hair-2)', borderRadius: 16 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760, fontSize: 13.5 }}>
          <caption className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
            Comparison of individual freelancers, traditional recruitment, large outsourcing firms and Growth Escalators across screening, communication, availability, working-hour alignment, dedicated contact, replacement terms and ability to add individuals or pods
          </caption>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 800, color: 'var(--text-primary)' }}>Criterion</th>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--text-secondary)' }}>Individual freelancers</th>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--text-secondary)' }}>Traditional recruitment</th>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--text-secondary)' }}>Large outsourcing firms</th>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 800, color: 'var(--orange)', background: 'rgba(255,107,53,0.06)' }}>Growth Escalators</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((r, i) => (
              <tr key={r.criterion} style={{ borderTop: '1px solid var(--border-hair)', background: i % 2 === 1 ? 'rgba(15,15,26,0.015)' : 'transparent' }}>
                <th scope="row" style={{ textAlign: 'left', padding: '13px 16px', fontWeight: 700, color: 'var(--text-primary)' }}>{r.criterion}</th>
                <td style={{ padding: '13px 16px', color: 'var(--text-secondary)' }}>{r.freelancer}</td>
                <td style={{ padding: '13px 16px', color: 'var(--text-secondary)' }}>{r.recruitment}</td>
                <td style={{ padding: '13px 16px', color: 'var(--text-secondary)' }}>{r.outsourcing}</td>
                <td style={{ padding: '13px 16px', color: 'var(--text-primary)', fontWeight: 700, background: 'rgba(255,107,53,0.04)' }}>{r.ge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   FAQ — content always in the DOM (hidden attribute, not conditional mount)
   so crawlers read every answer, matching components/landing/IndustryLandingPage.tsx
   ═════════════════════════════════════════════════════════════════════════ */

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div style={{ border: '1px solid var(--border-hair-2)', borderRadius: 14, background: '#fff', overflow: 'hidden' }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: '18px 20px', width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16, background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left', minHeight: 44,
        }}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-primary)' }}>{q}</span>
        <span
          aria-hidden
          style={{ fontSize: 18, color: 'var(--orange)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}
        >
          +
        </span>
      </button>
      <div id={panelId} hidden={!open} style={{ padding: '0 20px 18px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {a}
      </div>
    </div>
  )
}

function FaqPageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function FaqSection() {
  return (
    <section id="faqs" aria-label="FAQ" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 36 }}
        >
          <span className="section-tag">QUESTIONS, ANSWERED</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
            Frequently asked
          </h2>
        </motion.div>

        <div className="flex flex-col" style={{ gap: 12, maxWidth: 780, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   FINAL CTA + FORM
   ═════════════════════════════════════════════════════════════════════════ */

const RESOURCE_COUNT_OPTIONS = ['1', '2', '3–5', '6–10', '10+']
const SKILL_SUGGESTIONS = [
  'SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Microsoft Dynamics 365', 'AWS', 'Azure', 'DevOps',
  'Java / Spring Boot', '.NET', 'Python', 'React', 'Node.js', 'Data Engineering', 'AI / GenAI',
  'QA Automation', 'Application Support',
]
const MAX_FILE_BYTES = 4 * 1024 * 1024 // 4MB — sensible cap under typical serverless request-body limits
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

function useUtmParams() {
  const [utm, setUtm] = useState({ source: '', medium: '', campaign: '', term: '', content: '' })
  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    setUtm({
      source: p.get('utm_source') || '',
      medium: p.get('utm_medium') || '',
      campaign: p.get('utm_campaign') || '',
      term: p.get('utm_term') || '',
      content: p.get('utm_content') || '',
    })
  }, [])
  return utm
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const comma = result.indexOf(',')
      resolve(comma >= 0 ? result.slice(comma + 1) : result)
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

function FinalFormSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [emailTouched, setEmailTouched] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const startedRef = useRef(false)
  const utm = useUtmParams()

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
  const showEmailError = emailTouched && emailValue.length > 0 && !emailValid

  function handleFormStart() {
    if (startedRef.current) return
    startedRef.current = true
    track('uk_lp_form_start')
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    setFileError(null)
    if (!f) { setFile(null); return }
    if (!ALLOWED_FILE_TYPES.includes(f.type)) {
      setFileError('Please upload a PDF, DOC or DOCX file.')
      e.target.value = ''
      setFile(null)
      return
    }
    if (f.size > MAX_FILE_BYTES) {
      setFileError('File is too large — please keep it under 4MB.')
      e.target.value = ''
      setFile(null)
      return
    }
    setFile(f)
    track('uk_lp_jd_upload', { file_type: f.type })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'UK Offshore Tech Requirement' }
    data.forEach((v, k) => {
      if (typeof v === 'string') fields[k] = v
    })

    try {
      if (file) {
        fields.jdFileName = file.name
        fields.jdFileType = file.type
        fields.jdFileBase64 = await fileToBase64(file)
      }
    } catch {
      // If the file can't be read, submit without the attachment rather than blocking the lead.
    }

    const minWait = new Promise((r) => setTimeout(r, 250))
    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        }),
        minWait,
      ])
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      setStatus('success')
      track('uk_lp_form_submit_success', { has_jd: Boolean(file) })
      trackLead('form', { source: 'UK Offshore Tech Requirement' })
      form.reset()
      setFile(null)
      setEmailValue('')
    } catch (err) {
      setStatus('error')
      const msg = (err as Error).message || 'Something went wrong'
      setErrorMsg(msg)
      track('uk_lp_form_submit_error', { error: msg })
    }
  }

  const submitting = status === 'submitting'

  return (
    <section id="lead-form" aria-label="Share your requirement" style={{ background: '#fff', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 60 }}>
      <div className="container-x grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', gap: 'clamp(32px, 5vw, 52px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="section-tag">SHARE YOUR REQUIREMENT</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.4vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '12px 0 16px', color: 'var(--text-primary)' }}>
            Tell us which skill is holding up your project
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 440 }}>
            Share the role, timeline and working-hour requirements. We will review the requirement,
            confirm feasibility and begin preparing the relevant shortlist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair-2)', borderRadius: 20, boxShadow: '0 20px 50px rgba(17,18,26,0.06)', padding: 'clamp(20px, 4vw, 30px)' }}
        >
          {status === 'success' ? (
            <div className="text-center" style={{ padding: '32px 8px' }} role="status" aria-live="polite">
              <div
                className="inline-flex items-center justify-center"
                style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,212,170,0.16)', color: 'var(--teal-dark)', marginBottom: 16 }}
              >
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
                Requirement received.
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                Our team will review the role and contact you within one business day.
              </p>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('uk_lp_primary_cta_click', { location: 'post_submit_calendar' })}
                className="btn-outline"
                style={{ fontSize: 13.5, padding: '11px 20px' }}
              >
                Prefer to talk it through? Book a short call →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleFormStart} className="flex flex-col" noValidate style={{ gap: 14 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <FormField name="name" label="Full name" placeholder="Jane Doe" required />
                <div>
                  <label className="block">
                    <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                      Work email *
                    </span>
                    <input
                      type="email" name="email" required autoComplete="email" placeholder="jane@company.co.uk"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      aria-invalid={showEmailError}
                      aria-describedby={showEmailError ? 'uk-email-error' : undefined}
                      style={{
                        width: '100%', padding: '13px 15px', boxSizing: 'border-box',
                        border: `1px solid ${showEmailError ? '#b91c1c' : 'rgba(17,18,26,0.14)'}`,
                        borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff',
                      }}
                    />
                  </label>
                  {showEmailError && (
                    <p id="uk-email-error" role="alert" style={{ fontSize: 12, color: '#b91c1c', marginTop: 5 }}>
                      Please enter a valid work email address.
                    </p>
                  )}
                </div>
              </div>

              <FormField name="company" label="Company name" placeholder="Acme Technology Ltd" required />

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <label className="block">
                  <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    Skill or job title *
                  </span>
                  <input
                    type="text" name="role" list="uk-skill-suggestions" required placeholder="e.g. Senior SAP ABAP Developer"
                    style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff' }}
                  />
                  <datalist id="uk-skill-suggestions">
                    {SKILL_SUGGESTIONS.map((s) => <option key={s} value={s} />)}
                  </datalist>
                </label>
                <SelectField name="seats" label="Number of resources" options={RESOURCE_COUNT_OPTIONS} required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <FormField name="startDate" label="Preferred start date" type="date" />
                <FormField name="engagementDuration" label="Engagement duration" placeholder="e.g. 3 months, 6 months, ongoing" />
              </div>

              <FormField name="ukOverlap" label="UK working-hour expectations" placeholder="e.g. 4hr overlap, 9am–1pm UK time" />

              <label className="block">
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Message
                </span>
                <textarea
                  name="message" rows={3} placeholder="Anything else about the requirement, stack or team structure."
                  style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)' }}
                />
              </label>

              <div>
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Upload JD <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>(PDF, DOC or DOCX, up to 4MB)</span>
                </span>
                <label
                  htmlFor="uk-jd-upload"
                  className="flex items-center"
                  style={{
                    gap: 10, border: '1px dashed rgba(17,18,26,0.22)', borderRadius: 11,
                    padding: '12px 15px', cursor: 'pointer', background: '#fff', minHeight: 44,
                  }}
                >
                  <Upload size={16} color="var(--orange)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: file ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {file ? file.name : 'Choose a file (optional)'}
                  </span>
                  <input
                    id="uk-jd-upload" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
                  />
                </label>
                {fileError && (
                  <p role="alert" className="flex items-center" style={{ gap: 6, fontSize: 12, color: '#b91c1c', marginTop: 6 }}>
                    <AlertCircle size={13} /> {fileError}
                  </p>
                )}
              </div>

              {/* Hidden UTM capture — populated client-side from the query string, when present */}
              <input type="hidden" name="utmSource" value={utm.source} readOnly />
              <input type="hidden" name="utmMedium" value={utm.medium} readOnly />
              <input type="hidden" name="utmCampaign" value={utm.campaign} readOnly />
              <input type="hidden" name="utmTerm" value={utm.term} readOnly />
              <input type="hidden" name="utmContent" value={utm.content} readOnly />

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ marginTop: 6, opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : 'Request Relevant Profiles'}
              </button>

              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                By submitting, you agree to be contacted about this requirement in line with our{' '}
                <Link href="/privacy-policy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>

              {status === 'error' && (
                <p role="alert" className="flex items-start" style={{ gap: 6, fontSize: 13, color: '#b91c1c' }}>
                  <AlertCircle size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                  Couldn&rsquo;t send{errorMsg ? ` (${errorMsg})` : ''}. Your details are still in the
                  form — please try again, or{' '}
                  <a href="mailto:Info@growthescalators.com?subject=UK%20Offshore%20Tech%20Requirement" style={{ textDecoration: 'underline' }}>
                    email us directly
                  </a>.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function FormField({
  name, label, placeholder, type = 'text', required,
}: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff' }}
      />
    </label>
  )
}

function SelectField({
  name, label, options, required,
}: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <select
        name={name} required={required} defaultValue=""
        style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff', appearance: 'none' }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   FOOTER DISCLOSURE STRIP — offer-specific statement + real LinkedIn link,
   sits above the universal sitewide Footer (which already carries the
   verified address / phone / email / legal links).
   ═════════════════════════════════════════════════════════════════════════ */

function DisclosureStrip() {
  return (
    <div style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark-mute)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-x flex flex-col sm:flex-row items-start sm:items-center justify-between" style={{ padding: '18px clamp(20px,4vw,40px)', gap: 12, fontSize: 12.5, lineHeight: 1.6 }}>
        <p style={{ margin: 0, maxWidth: 680 }}>
          This page concerns offshore technology resources delivered remotely from India for UK
          delivery teams. It is not a UK on-site staffing offer.
        </p>
        <a
          href="https://www.linkedin.com/company/growth-escalators"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center flex-shrink-0"
          style={{ gap: 7, color: 'var(--text-on-dark-mute)' }}
        >
          <Linkedin size={15} />
          Growth Escalators on LinkedIn
        </a>
      </div>
    </div>
  )
}

/* ═════════════════════════════════════════════════════════════════════════
   PAGE
   ═════════════════════════════════════════════════════════════════════════ */

export default function UKOffshoreTechResourcesPage() {
  return (
    <>
      <FaqPageJsonLd />
      <Header />
      <main>
        <HeroSection />
        <TrustStripSection />
        <PainSection />
        <SkillsSection />
        <HowItWorksSection />
        <ScreeningSection />
        <EngagementModelsSection />
        <SampleProfilesSection />
        <ProofSection />
        <RiskSection />
        <ComparisonSection />
        <FaqSection />
        <FinalFormSection />
      </main>
      <DisclosureStrip />
      <Footer />
    </>
  )
}
