'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import {
  Code2, Server, Smartphone, Cpu, Brain, Palette, Bug, Database,
  Clock, Globe2, ShieldCheck, Wallet, Users, Rocket,
  ChevronDown,
} from 'lucide-react'

/* ───────────────────── Content ───────────────────── */

const STATS = [
  { value: '50+',  label: 'Engineers placed' },
  { value: '14d',  label: 'Average time-to-first-shortlist' },
  { value: '92%',  label: 'Retention past 6 months' },
  { value: '24h',  label: 'Reply turnaround for new requirements' },
]

const ROLES = [
  { icon: Code2,      title: 'Frontend Engineers',   desc: 'React, Next.js, Vue, TypeScript. From design-system fluency to performance specialists.' },
  { icon: Server,     title: 'Backend Engineers',    desc: 'Node, Python, Go, Java. Strong on APIs, databases, distributed systems, and scale.' },
  { icon: Smartphone, title: 'Mobile Engineers',     desc: 'React Native, Flutter, native iOS / Android. Production-quality apps at startup speed.' },
  { icon: Cpu,        title: 'DevOps & SRE',         desc: 'AWS, GCP, Azure, Kubernetes, Terraform. Engineers who keep production boring.' },
  { icon: Brain,      title: 'AI / ML / LLM',        desc: 'LLM apps, RAG pipelines, fine-tuning, MLOps. AI engineers who ship, not just prototype.' },
  { icon: Palette,    title: 'UI / UX Designers',    desc: 'Product designers fluent in Figma, design systems, and shipping with engineering.' },
  { icon: Bug,        title: 'QA Engineers',         desc: 'Manual + automation (Playwright, Cypress, Selenium). Quality without slowing releases.' },
  { icon: Database,   title: 'Data Engineers',       desc: 'Pipelines, warehouses, analytics. Snowflake, dbt, Airflow, Spark.' },
]

const ENGAGEMENT = [
  {
    title: 'Contract',
    badge: 'Flexible',
    desc: 'Fixed-duration engagements with monthly billing. Ramp up for a sprint, a project, or a hiring crunch — scale down just as quickly.',
    bullets: ['Monthly billing, no long lock-ins', 'Start within 7–14 days', 'Replacement guarantee'],
  },
  {
    title: 'Permanent',
    badge: 'Direct hire',
    desc: 'We source, screen, and hand-off direct hires onto your payroll. You pay a one-time success fee — only when you say yes.',
    bullets: ['Pay only on successful hire', '90-day replacement window', 'Pre-vetted shortlist in 7–14 days'],
  },
  {
    title: 'Project / Pod',
    badge: 'Team as a service',
    desc: 'Need an end-to-end pod — say, 2 devs + 1 designer + QA — to ship a feature or product? We assemble, manage, and ship.',
    bullets: ['Cross-functional pods of 2–8', 'Managed delivery', 'Outcome-based scoping available'],
  },
]

const PROCESS = [
  { n: '01', title: 'Share the requirement', desc: 'Submit the form below or talk to us. Role, seniority, stack, engagement type, timeline — we capture it all in one call.' },
  { n: '02', title: 'Curated shortlist',     desc: 'Within 7–14 days you get 3–5 pre-vetted candidates with portfolios, prior work, expected rates, and notice periods.' },
  { n: '03', title: 'Interview & select',    desc: 'You run your usual interview loop. We coordinate scheduling, paid trial tasks, and reference checks.' },
  { n: '04', title: 'Onboard & manage',      desc: 'Contractors are managed by us — payroll, leave, replacements. Permanent hires onboard directly with you.' },
]

const WHY_US = [
  { icon: ShieldCheck, title: 'Pre-vetted, not just pre-screened', desc: 'Every candidate clears a technical screen, a portfolio review, and a soft-skill interview before we send them to you.' },
  { icon: Globe2,      title: 'Remote-first by default',           desc: 'Most of our talent works remote-first across India, with strong overlap for US, EU, and APAC working hours.' },
  { icon: Clock,       title: '7–14 day time-to-shortlist',         desc: 'We keep an active bench. You get a real shortlist in days, not weeks.' },
  { icon: Wallet,      title: 'Transparent pricing',                desc: 'Flat markup on contract roles. Fixed success fee on permanent. No hidden margins.' },
  { icon: Users,       title: 'Replacement guarantee',              desc: 'Free replacement within the guarantee window if a hire doesn\'t work out — for contract or permanent.' },
  { icon: Rocket,      title: 'Built by operators',                 desc: 'We\'ve hired, fired, and managed engineering teams ourselves. We screen the way you would.' },
]

const FAQS = [
  {
    q: 'How fast can you send candidates?',
    a: 'For common stacks (React, Node, Python, mobile), expect a curated shortlist of 3–5 candidates within 7–14 days. For niche roles (LLM engineers, specific industry experience), 2–3 weeks is realistic.',
  },
  {
    q: 'Where are your engineers based?',
    a: 'Primarily India, remote-first. We have talent across most major Indian metros and tier-2 cities. Most engineers comfortably work IST-overlap shifts for US (EST/PST), EU (CET/GMT), and APAC clients.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Contract: flat monthly fee inclusive of payroll, taxes, and our markup — fully transparent. Permanent: one-time success fee, typically a percentage of the hire\'s first-year compensation, paid only after the candidate joins.',
  },
  {
    q: 'What if a hire doesn\'t work out?',
    a: 'Contract: free replacement within the first 30 days, fast-tracked thereafter. Permanent: free replacement search within the 90-day guarantee window if the candidate leaves or is let go.',
  },
  {
    q: 'Do you handle payroll and compliance for contractors?',
    a: 'Yes — contractors are on our payroll. You get one invoice per engineer per month. We handle TDS, PF/ESI where applicable, and statutory compliance. You focus on the work.',
  },
  {
    q: 'Can you build a full team or pod, not just individual hires?',
    a: 'Yes. Our project / pod engagement is built for that — 2–8 person cross-functional teams (devs, designers, QA, PM) assembled, managed, and shipped against your roadmap. Outcome-based scoping is available for well-defined deliverables.',
  },
]

/* ───────────────────── Form options ───────────────────── */

const SEAT_OPTIONS = ['1', '2–5', '6–10', '10+']
const ENGAGEMENT_OPTIONS = ['Contract', 'Permanent', 'Either / Not sure']
const WORK_MODE_OPTIONS = ['Remote', 'Hybrid', 'Onsite']
const TIMELINE_OPTIONS = ['Within 2 weeks', '2–4 weeks', '1–2 months', 'Flexible']

/* ───────────────────── Page ───────────────────── */

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function StaffingPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'Staffing Enquiry' }
    data.forEach((v, k) => { fields[k] = String(v) })

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
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }

  const submitting = status === 'submitting'

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)' }}>

        {/* ─────────────── Hero ─────────────── */}
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 lg:px-24">
          {/* Aurora orbs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -top-32 -left-20 w-[440px] h-[440px] rounded-full opacity-40 blur-3xl"
                 style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.45) 0%, transparent 70%)', animation: 'orb-drift-1 16s ease-in-out infinite' }} />
            <div className="absolute top-10 right-0 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
                 style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.40) 0%, transparent 70%)', animation: 'orb-drift-2 20s ease-in-out infinite' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <span className="section-tag">Tech Staffing</span>
              <h1 className="font-syne font-extrabold leading-[1.05] mb-6 mt-4"
                  style={{ fontSize: 'clamp(36px, 6vw, 76px)', color: 'var(--text-primary)' }}>
                Top-tier tech talent. <span className="gradient-text">On your terms.</span>
              </h1>
              <p className="font-outfit text-lg md:text-xl mb-8 max-w-3xl"
                 style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Pre-vetted developers, designers, QA, and AI/DevOps engineers — remote-first, contract or
                permanent. You share the requirement. We send a curated shortlist within days.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#staffing-form" className="btn-primary">Share your requirement →</a>
                <a href="#how-it-works" className="btn-outline">How it works</a>
              </div>
            </motion.div>

            {/* Trust strip */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="min-w-0"
                >
                  <div className="font-syne font-extrabold leading-none mb-2 tabular-nums"
                       style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--orange)' }}>
                    {s.value}
                  </div>
                  <div className="font-outfit text-xs md:text-sm uppercase tracking-widest"
                       style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Roles we staff ─────────────── */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="section-tag">Roles we staff</span>
              <h2 className="font-syne font-bold leading-tight mt-4 mb-4"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'var(--text-primary)' }}>
                Engineering, design, and AI — every role you need to ship.
              </h2>
              <p className="font-outfit text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                Individual hires or full pods. Junior to staff-level. India-based, remote-first.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROLES.map((r, i) => {
                const Icon = r.icon
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                    className="glass p-6 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                         style={{ background: 'rgba(255,107,53,0.12)', color: 'var(--orange)' }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                      {r.title}
                    </h3>
                    <p className="font-outfit text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {r.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Engagement models ─────────────── */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="section-tag">Engagement models</span>
              <h2 className="font-syne font-bold leading-tight mt-4 mb-4"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'var(--text-primary)' }}>
                Three ways to hire. Pick what fits the work.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENGAGEMENT.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-7 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-syne font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                      {e.title}
                    </h3>
                    <span className="font-outfit text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,107,53,0.10)', color: 'var(--orange)', border: '1px solid rgba(255,107,53,0.20)' }}>
                      {e.badge}
                    </span>
                  </div>
                  <p className="font-outfit text-sm mb-5" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {e.desc}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="font-outfit text-sm flex items-start gap-2"
                          style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--orange)' }}>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── How it works ─────────────── */}
        <section id="how-it-works" className="py-20 md:py-28 px-6 md:px-12 lg:px-24"
                 style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="section-tag">How it works</span>
              <h2 className="font-syne font-bold leading-tight mt-4 mb-4"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'var(--text-primary)' }}>
                From requirement to onboarded — typically 2–3 weeks.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative glass p-6 h-full"
                >
                  <div className="font-syne font-extrabold text-5xl mb-3 leading-none"
                       style={{ color: 'rgba(255,107,53,0.20)' }}>
                    {p.n}
                  </div>
                  <h3 className="font-syne font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p className="font-outfit text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── Why us ─────────────── */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="section-tag">Why Growth Escalators</span>
              <h2 className="font-syne font-bold leading-tight mt-4 mb-4"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'var(--text-primary)' }}>
                Built like a hiring partner, not a CV factory.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_US.map((w, i) => {
                const Icon = w.icon
                return (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                    className="p-6 rounded-2xl"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                         style={{ background: 'rgba(255,107,53,0.12)', color: 'var(--orange)' }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                      {w.title}
                    </h3>
                    <p className="font-outfit text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      {w.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── FAQs ─────────────── */}
        <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-tag">FAQs</span>
              <h2 className="font-syne font-bold leading-tight mt-4 mb-4"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'var(--text-primary)' }}>
                Common questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((f, i) => {
                const open = openFaq === i
                return (
                  <div key={f.q} className="glass overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full text-left flex items-center justify-between gap-4 p-5 md:p-6"
                      aria-expanded={open}
                    >
                      <span className="font-syne font-bold text-base md:text-lg"
                            style={{ color: 'var(--text-primary)' }}>
                        {f.q}
                      </span>
                      <ChevronDown
                        size={20}
                        style={{
                          color: 'var(--orange)',
                          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {open && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                        <p className="font-outfit text-sm md:text-base"
                           style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                          {f.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────── Lead form ─────────────── */}
        <section id="staffing-form" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
                 style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.40) 0%, transparent 70%)' }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
              <div>
                <span className="section-tag">Share your requirement</span>
                <h2 className="font-syne font-extrabold leading-tight mt-4 mb-5"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text-primary)' }}>
                  Tell us what you need.<br/>We&rsquo;ll come back within 24 hours.
                </h2>
                <p className="font-outfit text-base md:text-lg mb-6"
                   style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  The more detail, the faster we can shortlist. If you&rsquo;d rather talk first,
                  email <a href="mailto:Info@growthescalators.com" style={{ color: 'var(--orange)' }} className="underline">Info@growthescalators.com</a> or
                  WhatsApp <span style={{ color: 'var(--text-primary)' }}>+91 77338 88883</span>.
                </p>
                <ul className="space-y-2 font-outfit text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex gap-2"><span style={{ color: 'var(--orange)' }}>✓</span> No commitment to share a requirement</li>
                  <li className="flex gap-2"><span style={{ color: 'var(--orange)' }}>✓</span> Curated shortlist in 7–14 days</li>
                  <li className="flex gap-2"><span style={{ color: 'var(--orange)' }}>✓</span> Replace within the guarantee window if a hire doesn&rsquo;t work out</li>
                </ul>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 md:p-10 flex flex-col items-start justify-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl font-bold"
                       style={{ background: 'rgba(255,107,53,0.15)', color: 'var(--orange)' }}>
                    ✓
                  </div>
                  <h3 className="font-syne font-extrabold text-2xl md:text-3xl mb-3"
                      style={{ color: 'var(--text-primary)' }}>
                    Got it — we&rsquo;re on it.
                  </h3>
                  <p className="font-outfit text-base"
                     style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    We&rsquo;ll review your requirement and reply within 24 hours (weekdays).
                    For anything urgent, reach us on WhatsApp at <strong>+91 77338 88883</strong>.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="glass p-6 md:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field name="name" label="Your name" required placeholder="Anita Verma" />
                    <Field name="company" label="Company" placeholder="Acme Inc." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field name="email" type="email" label="Work email" required placeholder="anita@acme.com" />
                    <Field name="phone" type="tel" label="Phone" required placeholder="+91 98xxxxxxxx" />
                  </div>

                  <Field name="role" label="Role(s) needed" required placeholder="e.g. Senior React Engineer, AI/LLM Engineer" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField name="seats" label="Number of hires" options={SEAT_OPTIONS} required />
                    <SelectField name="timeline" label="Need them by" options={TIMELINE_OPTIONS} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField name="engagement" label="Engagement" options={ENGAGEMENT_OPTIONS} required />
                    <SelectField name="workMode" label="Work mode" options={WORK_MODE_OPTIONS} required />
                  </div>

                  <label className="block">
                    <span className="font-outfit text-xs uppercase tracking-widest mb-2 block"
                          style={{ color: 'var(--text-muted)' }}>
                      Tell us more <span style={{ textTransform: 'none', letterSpacing: 'normal' }}>(stack, seniority, anything else)</span>
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="e.g. Need 2 senior React + TS engineers comfortable with Next.js App Router. 5+ years. Strong overlap with PST."
                      className="w-full px-4 py-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2"
                      style={{
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid var(--border-strong)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending…' : 'Send requirement →'}
                  </button>

                  {status === 'error' && (
                    <p className="font-outfit text-sm rounded-lg p-3"
                       role="alert"
                       style={{ background: 'rgba(239,68,68,0.08)', color: '#b91c1c', border: '1px solid rgba(239,68,68,0.25)' }}>
                      Couldn&rsquo;t submit{errorMsg ? ` (${errorMsg})` : ''}. Email us directly at{' '}
                      <a href="mailto:Info@growthescalators.com" className="underline">Info@growthescalators.com</a>.
                    </p>
                  )}

                  <p className="font-outfit text-xs" style={{ color: 'var(--text-muted)' }}>
                    We&rsquo;ll only use these details to reply. We don&rsquo;t share with third parties.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </section>

        {/* ─────────────── Final mini-CTA ─────────────── */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 text-center"
                 style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="font-outfit text-sm md:text-base mb-3 uppercase tracking-widest"
               style={{ color: 'var(--text-muted)' }}>
              Already running campaigns with us?
            </p>
            <h3 className="font-syne font-bold mb-5"
                style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', color: 'var(--text-primary)' }}>
              Existing clients get priority shortlists and bundled pricing.
            </h3>
            <Link href="/contact" className="btn-outline">
              Talk to your account team →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ───────────────────── Form field helpers ───────────────────── */

function Field({
  name, label, type = 'text', required = false, placeholder,
}: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-outfit text-xs uppercase tracking-widest mb-2 block"
            style={{ color: 'var(--text-muted)' }}>
        {label}{required ? ' *' : ''}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
        className="w-full px-4 py-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2"
        style={{
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid var(--border-strong)',
          color: 'var(--text-primary)',
        }}
      />
    </label>
  )
}

function SelectField({
  name, label, options, required = false,
}: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-outfit text-xs uppercase tracking-widest mb-2 block"
            style={{ color: 'var(--text-muted)' }}>
        {label}{required ? ' *' : ''}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full px-4 py-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2 appearance-none"
        style={{
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid var(--border-strong)',
          color: 'var(--text-primary)',
        }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}
