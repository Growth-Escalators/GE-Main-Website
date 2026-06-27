'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowUpRight, Check, Play, Sparkles, Target,
} from 'lucide-react'

import TrustStrip from '@/components/sections/TrustStrip'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

const easeOut = [0.16, 1, 0.3, 1] as const

/* ───────────────────── Hero ───────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#fff,#fbfaf8)' }}>
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute',
          width: 560, height: 560, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 70%)',
          top: -180, right: -120,
          animation: 'orbS 22s ease-in-out infinite',
        }}
      />
      <div className="container-x" style={{ padding: 'clamp(48px, 8vw, 80px) clamp(20px, 4vw, 40px) clamp(56px, 9vw, 88px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center" style={{ gap: 'clamp(32px, 5vw, 56px)' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }}>
            <div
              className="inline-flex items-center"
              style={{
                gap: 9,
                border: '1px solid rgba(255,107,53,0.25)',
                background: 'rgba(255,107,53,0.06)',
                padding: '7px 16px', borderRadius: 999, marginBottom: 24,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)' }} />
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                Tech &amp; Marketing Talent
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(32px, 5.4vw, 54px)',
                fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
                margin: '0 0 20px', color: 'var(--text-primary)',
              }}
            >
              The <span style={{ color: 'var(--orange)' }}>tech &amp; marketing</span> talent you need — matched by AI.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: 490, margin: '0 0 32px' }}>
              We tap a deep pool of vetted developers, designers and marketers — full-time or contract,
              built for remote. The same calibre of people we use to build and grow our own clients&rsquo; projects.
            </p>
            <div className="flex flex-wrap items-center" style={{ gap: 20, marginBottom: 30 }}>
              <Link
                href="#book"
                className="btn-cta"
                style={{
                  background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                  color: '#fff', fontSize: 16, fontWeight: 800,
                  padding: '16px 34px', borderRadius: 12,
                  boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                  display: 'inline-block',
                }}
              >
                Get a Free Hiring Audit →
              </Link>
              <Link href="#how" className="inline-flex items-center" style={{ gap: 9, fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>
                <span
                  className="inline-flex items-center justify-center"
                  style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid rgba(17,18,26,0.18)' }}
                >
                  <Play size={14} fill="currentColor" />
                </span>
                How it works
              </Link>
            </div>
            <div className="flex flex-wrap" style={{ gap: 30, paddingTop: 24, borderTop: '1px solid var(--border-hair-2)' }}>
              <HeroStat label="Median time-to-shortlist">5–7 days</HeroStat>
              <HeroStat label="Two specialisms">Tech + Marketing</HeroStat>
              <HeroStat label="AI-screens per role">40+ candidates</HeroStat>
            </div>
          </motion.div>

          {/* Right: live pipeline card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          >
            <div
              style={{
                background: '#fff',
                border: '1px solid var(--border-hair-2)',
                borderRadius: 22,
                boxShadow: '0 30px 70px rgba(17,18,26,0.12)',
                padding: 'clamp(18px, 3vw, 24px)',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-primary)' }}>Example shortlist</div>
                <span
                  style={{
                    fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
                    background: 'rgba(17,18,26,0.05)', padding: '4px 10px', borderRadius: 999,
                  }}
                >
                  Anonymized
                </span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 14 }}>
                Anonymized · drawn from recent shortlists
              </div>
              <div className="flex flex-col" style={{ gap: 10 }}>
                <PipelineRow grad="linear-gradient(135deg,#6C63FF,#9c8fff)" initials="—" role="Full-Stack Developer"  note="Series-A SaaS · 14 days"     status="Hired"   tone="teal" />
                <PipelineRow grad="linear-gradient(135deg,#FF6B35,#ff8c5a)" initials="—" role="Performance Marketer"  note="D2C wellness · 9 days"        status="Hired"   tone="teal" />
                <PipelineRow grad="linear-gradient(135deg,#00D4AA,#00b894)" initials="—" role="UI/UX Designer"        note="Edtech · 17 days"             status="Stage 2" tone="violet" />
              </div>
              <div className="grid grid-cols-2" style={{ gap: 10, marginTop: 14 }}>
                <PipelineMini bg="rgba(255,107,53,0.06)" color="var(--orange)"     value="5–7d" label="Median time-to-shortlist" />
                <PipelineMini bg="rgba(0,212,170,0.06)"  color="var(--teal-dark)"  value="40+"  label="AI-screened per role" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.btn-cta:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
        @keyframes orbS { 0%,100% { transform: translate(0,0); } 50% { transform: translate(28px,-38px); } }
        @media (prefers-reduced-motion: reduce) { [style*="orbS"] { animation: none !important; } }
      `}</style>
    </section>
  )
}

function HeroStat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 19, fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.02em' }}>{children}</div>
      <div style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
    </div>
  )
}
function PipelineRow({
  grad, initials, role, note, status, tone,
}: { grad: string; initials: string; role: string; note: string; status: string; tone: 'teal' | 'violet' }) {
  return (
    <div className="flex items-center justify-between" style={{ background: 'var(--bg-warm)', borderRadius: 12, padding: '13px 15px' }}>
      <div className="flex items-center" style={{ gap: 11 }}>
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 34, height: 34, borderRadius: '50%',
            background: grad, color: '#fff', fontWeight: 800, fontSize: 13,
          }}
        >
          {initials}
        </span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{role}</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{note}</div>
        </div>
      </div>
      <span
        style={{
          fontSize: 11, fontWeight: 700,
          color: tone === 'teal' ? 'var(--teal-dark)' : 'var(--violet)',
          background: tone === 'teal' ? 'rgba(0,212,170,0.10)' : 'rgba(108,99,255,0.10)',
          padding: '4px 9px', borderRadius: 7,
        }}
      >
        {status}
      </span>
    </div>
  )
}
function PipelineMini({ bg, color, value, label }: { bg: string; color: string; value: string; label: string }) {
  return (
    <div style={{ background: bg, borderRadius: 12, padding: 13 }}>
      <div style={{ fontSize: 20, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
    </div>
  )
}

/* ───────────────────── The Problem ───────────────────── */

const PROBLEMS = [
  { title: 'Slow hiring',     body: 'Weeks of searching while the role sits empty and the work piles up.' },
  { title: 'Resume overload', body: 'Resume piles with no real screening — you do the recruiter’s job.' },
  { title: 'Wrong fits',      body: 'Candidates who look right on paper but can’t do the actual work.' },
  { title: 'Ghosting',        body: 'Candidates vanish mid-process with no follow-up system.' },
]

function ProblemSection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 48 }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            The hiring problem
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
            Every empty seat is costing you money
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 580, margin: '0 auto', lineHeight: 1.6 }}>
            Slow hiring isn&rsquo;t just frustrating — it&rsquo;s lost revenue, burned-out teams, and bad hires you pay for twice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 18 }}>
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: easeOut }}
              style={{
                background: '#fff', border: '1px solid var(--border-hair-2)',
                borderRadius: 18, padding: 26,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--orange)', marginBottom: 10 }}>
                {p.title}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{p.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── How it works ───────────────────── */

const STEPS = [
  { n: '01', title: 'Intake',   body: 'We map the role, must-haves, culture & comp — so we hunt for the right person, not just any person.' },
  { n: '02', title: 'Source',   body: 'AI-assisted outreach across our standing talent pool, networks & job boards to surface strong matches quickly.' },
  { n: '03', title: 'Screen',   body: 'AI screening plus human review of skills, portfolios & culture — so you only meet people who can do the work.' },
  { n: '04', title: 'Deliver',  body: 'An interview-ready shortlist with our notes. We coordinate, you decide — for full-time or contract roles.' },
]

function HowItWorksSection() {
  return (
    <section id="how" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 52 }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          How it works
        </span>
        <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
          A pipeline, not a pile of resumes
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          Four stages from &ldquo;we need someone&rdquo; to &ldquo;they start Monday.&rdquo;
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 18 }}>
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.07, ease: easeOut }}
            style={{
              padding: 28, borderRadius: 18,
              background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)',
            }}
          >
            <div
              style={{
                fontSize: 34, fontWeight: 800, lineHeight: 1, marginBottom: 14,
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light), var(--violet))',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent', color: 'transparent',
              }}
            >
              {s.n}
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 800, margin: '0 0 8px', color: 'var(--text-primary)' }}>{s.title}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────── MarTech + AI edge ───────────────────── */

const AI_BULLETS = [
  'AI sources, ranks and matches candidates across our talent pool in minutes',
  'We test for skill in the actual tools — because we use them every day',
  'Automated screening & scheduling cut the busywork traditional recruiters drown in',
]

const AI_FLOW = [
  { n: '01', title: 'AI sourcing',     body: 'Scans our pool + networks for fits',           tag: '~ minutes' },
  { n: '02', title: 'AI screening',    body: 'Ranks skills, then humans review',             tag: 'automated' },
  { n: '03', title: 'Smart matching',  body: 'Role, stack & culture aligned',                tag: 'scored' },
  { n: '04', title: 'You get a shortlist', body: 'Interview-ready, with our notes',          tag: '🎯', highlight: true },
]

function MartechAISection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]" style={{ gap: 'clamp(32px, 5vw, 56px)', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, ease: easeOut }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              Why we&rsquo;re faster
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 16px', lineHeight: 1.1, color: 'var(--text-primary)' }}>
              Recruiting, powered by MarTech &amp; AI.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 22px' }}>
              We&rsquo;re a MarTech and performance team first. We live in the same analytics, automation,
              ad and dev tools the roles we fill are built on — so we can judge real skill, not keywords.
              Then we let AI do the heavy lifting across the pipeline.
            </p>
            <div className="flex flex-col" style={{ gap: 13 }}>
              {AI_BULLETS.map((b) => (
                <div key={b} className="flex items-start" style={{ gap: 11 }}>
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'rgba(255,107,53,0.12)', color: 'var(--orange)',
                      fontSize: 12, fontWeight: 800, marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 14.5, color: '#2a2a3a', lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, ease: easeOut, delay: 0.05 }}
            style={{
              background: '#fff', border: '1px solid var(--border-hair-2)',
              borderRadius: 22, boxShadow: '0 16px 40px rgba(17,18,26,0.07)',
              padding: 'clamp(20px, 3vw, 28px)',
            }}
          >
            <div className="flex items-center" style={{ gap: 9, marginBottom: 20 }}>
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                  color: '#fff', fontWeight: 800, fontSize: 14,
                }}
              >
                AI
              </span>
              <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-primary)' }}>Our AI-driven workflow</div>
            </div>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {AI_FLOW.map((s) => (
                <div
                  key={s.n}
                  className="flex items-center"
                  style={{
                    gap: 13, borderRadius: 12, padding: '14px 16px',
                    background: s.highlight
                      ? 'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,107,53,0.02))'
                      : 'var(--bg-warm)',
                    border: s.highlight ? '1px solid rgba(255,107,53,0.18)' : '1px solid transparent',
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--orange)', width: 18 }}>{s.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)' }}>{s.title}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{s.body}</div>
                  </div>
                  <span
                    style={{
                      fontSize: s.highlight ? 14 : 10.5, fontWeight: 700,
                      color: s.highlight ? undefined : 'var(--teal-dark)',
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── What you get (dark) ───────────────────── */

const WHATGET = [
  { title: 'Vetted candidate pipeline', body: 'A steady flow of pre-screened, interview-ready people.' },
  { title: 'AI-powered matching',       body: 'Technology that surfaces the right fit from a deep talent pool.' },
  { title: 'Employer branding',         body: 'Job ads & content that make top talent want you.' },
  { title: "We've done the job ourselves", body: 'We hire these exact roles for our own projects — so we know who delivers.' },
]

function WhatYouGetSection() {
  return (
    <section style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-center" style={{ gap: 'clamp(32px, 5vw, 56px)' }}>
          <motion.div
            initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, ease: easeOut }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange-mid)' }}>
              What you get
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 16px', lineHeight: 1.1, color: '#fff' }}>
              More than a recruiter — a hiring engine.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-on-dark)', lineHeight: 1.7, margin: '0 0 26px' }}>
              We don&rsquo;t just send resumes. We run the whole top of your hiring funnel and hand you
              decisions, not homework.
            </p>
            <Link
              href="#book"
              className="btn-cta inline-block"
              style={{
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                color: '#fff', fontSize: 15, fontWeight: 800,
                padding: '15px 30px', borderRadius: 12,
                boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
              }}
            >
              Start Hiring →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
            {WHATGET.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.07, ease: easeOut }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-on-dark)',
                  borderRadius: 16, padding: 22,
                }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 6, color: '#fff' }}>{w.title}</div>
                <p style={{ fontSize: 13, color: 'var(--text-on-dark-mute)', lineHeight: 1.55, margin: 0 }}>{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Roles we fill ───────────────────── */

const ROLES = [
  { kind: 'Tech',      color: 'var(--orange)', title: 'Software Development', body: 'Full-stack, frontend, backend & mobile engineers.' },
  { kind: 'Tech',      color: 'var(--orange)', title: 'Design & Product',     body: 'UI/UX designers, product managers & QA.' },
  { kind: 'Tech',      color: 'var(--orange)', title: 'Data, AI & Automation', body: 'Data engineers, ML & automation specialists.' },
  { kind: 'Marketing', color: 'var(--violet)', title: 'Performance Marketing', body: 'Meta & Google ad buyers, growth marketers.' },
  { kind: 'Marketing', color: 'var(--violet)', title: 'Content & Social',     body: 'Creators, copywriters & social media managers.' },
  { kind: 'Marketing', color: 'var(--violet)', title: 'SEO & Growth',         body: 'SEO specialists, analysts & growth strategists.' },
]

function RolesSection() {
  return (
    <section className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 44 }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          Who we staff for
        </span>
        <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          Tech &amp; marketing roles we fill
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
        {ROLES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: easeOut }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-hair)',
              borderRadius: 16, padding: 24,
            }}
          >
            <div
              style={{
                fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: r.color, marginBottom: 8,
              }}
            >
              {r.kind}
            </div>
            <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 6, color: 'var(--text-primary)' }}>{r.title}</div>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{r.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────── We use the talent we provide ───────────────────── */

const PROVIDE = [
  { title: 'AI does the heavy lifting', body: 'We use AI to source and screen across a deep talent pool — so the right people surface faster, without the resume avalanche.' },
  { title: 'A deep bench of talent',    body: 'A standing pool of vetted developers, designers and marketers — full-time or contract, ready for remote roles.' },
  { title: "We've sat in the seat",     body: 'Because we build and market for clients ourselves, we know what “good” looks like — and can tell who actually delivers.' },
  { title: 'Ownership, not hand-off',   body: 'We stay accountable for fit and outcomes — your hire is our reputation, not a closed ticket.' },
]

function ProvideSection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 40 }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Why us
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
            We use the talent we provide
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            We run tech and marketing for our own clients and projects every day — so when we place people,
            we&rsquo;re matching the same standard we hold ourselves to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {PROVIDE.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: i * 0.06, ease: easeOut }}
              style={{
                background: '#fff', border: '1px solid var(--border-hair-2)',
                borderRadius: 18, padding: 28,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, margin: '0 0 8px', color: 'var(--text-primary)' }}>{p.title}</div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Brand trust strip (real clients) ─────────────────────
   Anchors the staffing claim to actual operating brands. These are real
   Growth Escalators marketing clients — the same talent that runs their
   work is the talent we staff out to other teams. Wordmark marquee so we
   don't need image assets. */

const TRUSTED_BRANDS = [
  'Paraiso Comfortwears', 'Dr. Dheeraj Dubay', 'Elixzor Media',
  'Odra Organics', 'SN Herbals', 'Gentle Panda',
  'Atatica Studios', 'Credo World', 'Yellow Diaries', 'Cklakart',
]

function TrustBrandsStrip() {
  const track = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS]
  return (
    <section style={{ background: '#fff', borderTop: '1px solid var(--border-hair)' }}>
      <div className="container-x" style={{ padding: 'clamp(36px, 5vw, 52px) clamp(20px, 4vw, 40px)' }}>
        <div className="flex flex-col items-center" style={{ gap: 22 }}>
          <span
            style={{
              fontSize: 12, fontWeight: 800, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            The same talent runs growth for these brands
          </span>
          <div className="staffing-marquee" style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
            <span aria-hidden className="staffing-fade-l" />
            <span aria-hidden className="staffing-fade-r" />
            <div className="staffing-track">
              {track.map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="staffing-brand"
                  style={{
                    fontWeight: 800, fontSize: 17, color: '#b9b9cb',
                    letterSpacing: '-0.01em',
                    transition: 'color .25s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .staffing-marquee:hover .staffing-track { animation-play-state: paused; }
        .staffing-track {
          display: inline-flex;
          gap: 56px;
          padding-right: 56px;
          animation: staffingScroll 32s linear infinite;
          will-change: transform;
        }
        :global(.staffing-brand:hover) { color: var(--text-primary) !important; }
        .staffing-fade-l, .staffing-fade-r {
          position: absolute; top: 0; bottom: 0;
          width: 60px; z-index: 2; pointer-events: none;
        }
        .staffing-fade-l { left: 0;  background: linear-gradient(90deg, #fff, transparent); }
        .staffing-fade-r { right: 0; background: linear-gradient(270deg, #fff, transparent); }
        @keyframes staffingScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .staffing-track { animation: none; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </section>
  )
}

/* ───────────────────── Sticky audit CTA bar ─────────────────────
   Appears once the user scrolls past the hero. Keeps the audit ask
   one tap away through the entire long page. Dismissable. */

function StickyAuditBar() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  useEffect(() => {
    if (dismissed) return
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])
  if (dismissed || !show) return null
  return (
    <div
      style={{
        position: 'fixed',
        left: 12, right: 12, bottom: 16,
        zIndex: 60,
        maxWidth: 720, margin: '0 auto',
        background: '#fff',
        border: '1px solid var(--border-hair-2)',
        borderRadius: 16,
        boxShadow: '0 24px 56px rgba(17,18,26,0.18), 0 4px 12px rgba(17,18,26,0.08)',
        padding: '12px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
        animation: 'stickyIn 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: 'rgba(255,107,53,0.10)',
          color: 'var(--orange)',
        }}
        aria-hidden
      >
        <Sparkles size={17} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
          Free hiring audit
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--text-muted)', lineHeight: 1.3 }}>
          Tell us the role &mdash; we&rsquo;ll send a shortlist plan.
        </div>
      </div>
      <Link
        href="#book"
        className="btn-cta"
        style={{
          background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
          color: '#fff', fontSize: 13, fontWeight: 800,
          padding: '10px 18px', borderRadius: 10,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Book
      </Link>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          background: 'transparent', border: 'none',
          color: 'var(--text-muted)', cursor: 'pointer',
          fontSize: 18, lineHeight: 1, padding: 4, flexShrink: 0,
        }}
      >
        ×
      </button>
      <style jsx>{`
        @keyframes stickyIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="stickyIn"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

/* ───────────────────── Markets & Industries ─────────────────────
   2 large market cards (US + India) + a domain pill grid. Sits between
   Roles (which lists role types) and Pricing (which lists models). */

const MARKETS = [
  {
    flag: 'US',
    title: 'United States',
    sub: 'Remote-ready talent built for US working hours',
    bullets: [
      'Strong overlap into US East &amp; West timezones',
      'Async-fluent, English-native communication',
      'Contract or full-time remote engagements',
    ],
    tint: 'rgba(108,99,255,0.10)',
    border: 'rgba(108,99,255,0.30)',
    accent: 'var(--violet)',
  },
  {
    flag: 'IN',
    title: 'India',
    sub: 'On-the-ground talent across every major hub',
    bullets: [
      'Sourcing across Jaipur, Bangalore, Delhi&#8209;NCR, Mumbai &amp; Hyderabad',
      'Both in-office &amp; remote roles supported',
      'Local payroll &amp; compliance handled end-to-end',
    ],
    tint: 'rgba(255,107,53,0.10)',
    border: 'rgba(255,107,53,0.30)',
    accent: 'var(--orange)',
  },
] as const

const INDUSTRIES = [
  'Healthcare',
  'BFSI',
  'IT &amp; SaaS',
  'E-Commerce / D2C',
  'EdTech',
  'Real Estate',
  'Travel &amp; Hospitality',
  'Manufacturing',
]

function MarketsSection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', position: 'relative', overflow: 'hidden' }}>
      {/* Two ambient orbs — one per market */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)',
          top: -160, left: -120,
          animation: 'orb-drift-1 28s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 420, height: 420, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 70%)',
          bottom: -160, right: -100,
          animation: 'orb-drift-2 32s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 44 }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Markets &amp; domains
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
            Two markets, a deep bench of domain expertise
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            We hire across India and into the United States &mdash; with talent vetted for the
            domains where context actually matters.
          </p>
        </motion.div>

        {/* Two large market cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 18, maxWidth: 960, margin: '0 auto 32px' }}>
          {MARKETS.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: easeOut }}
              className="tilt-hover shimmer-host"
              style={{
                background: '#fff',
                border: `1px solid ${m.border}`,
                borderRadius: 18, padding: 28,
                position: 'relative',
              }}
            >
              <div className="flex items-center" style={{ gap: 14, marginBottom: 14, position: 'relative', zIndex: 2 }}>
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: m.tint,
                    color: m.accent, fontWeight: 900, fontSize: 17,
                    letterSpacing: '0.04em',
                    border: `1px solid ${m.border}`,
                  }}
                >
                  {m.flag}
                </span>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.015em' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '2px 0 0' }}>
                    {m.sub}
                  </p>
                </div>
              </div>
              <ul className="flex flex-col" style={{ gap: 9, margin: 0, padding: 0, listStyle: 'none', position: 'relative', zIndex: 2 }}>
                {m.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start"
                    style={{ gap: 10, fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.55 }}
                    dangerouslySetInnerHTML={{ __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${m.accent === 'var(--violet)' ? '#6C63FF' : '#FF6B35'}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:3px"><polyline points="20 6 9 17 4 12"/></svg><span>${b}</span>` }}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Industry pill grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: easeOut }}
          className="text-center"
          style={{ maxWidth: 960, margin: '0 auto' }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Domains we hire into
          </span>
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: 10, marginTop: 18 }}
          >
            {INDUSTRIES.map((d, i) => (
              <motion.span
                key={d}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: 0.03 * i, ease: easeOut }}
                style={{
                  background: '#fff',
                  border: '1px solid var(--border-hair-2)',
                  borderRadius: 999,
                  padding: '10px 18px',
                  fontSize: 13.5, fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.005em',
                  transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
                  cursor: 'default',
                }}
                whileHover={{ y: -2 }}
                dangerouslySetInnerHTML={{ __html: `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--orange);margin-right:8px;vertical-align:middle"></span>${d}` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────── Recent Placements (trust proof) ─────────────────────
   Anonymized samples of roles we've shortlisted recently. Industry + role +
   time-to-shortlist + status. Frames clearly as examples (not specific case
   studies) to stay aligned with the no-placement-guarantee rule. */

const PLACEMENTS = [
  { role: 'Senior Performance Marketer', industry: 'Series-A SaaS',  time: '11 days', status: 'Still on team',    tone: 'teal' as const },
  { role: 'Lead Full-Stack Developer',   industry: 'D2C E-Commerce', time: '17 days', status: 'Still on team',    tone: 'teal' as const },
  { role: 'UI/UX Designer',              industry: 'Edtech',         time: '14 days', status: 'Contract ongoing', tone: 'violet' as const },
  { role: 'Performance Marketing Spec.', industry: 'Healthcare D2C', time: '9 days',  status: 'Still on team',    tone: 'teal' as const },
  { role: 'Senior Brand Designer',       industry: 'Wellness D2C',   time: '22 days', status: 'Still on team',    tone: 'teal' as const },
  { role: 'Marketing Ops Manager',       industry: 'B2B SaaS',       time: '19 days', status: 'Contract ongoing', tone: 'violet' as const },
]

function PlacementsSection() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid var(--border-hair)', position: 'relative', overflow: 'hidden' }}>
      {/* Floating ambient orb */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 70%)',
          top: -120, right: -80,
          animation: 'orb-drift-1 24s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 44 }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Recent placements
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
            What recent hiring has looked like
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Anonymized examples from recent quarters &mdash; role, industry, time from kick&#8209;off to shortlist, and current status.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {PLACEMENTS.map((p, i) => (
            <motion.div
              key={`${p.role}-${p.industry}`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOut }}
              className="tilt-hover shimmer-host"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-hair-2)',
                borderRadius: 16, padding: 22,
                position: 'relative',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: 12, position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {p.industry}
                </span>
                <span
                  style={{
                    fontSize: 10.5, fontWeight: 700,
                    color: p.tone === 'teal' ? 'var(--teal-dark)' : 'var(--violet)',
                    background: p.tone === 'teal' ? 'rgba(0,212,170,0.10)' : 'rgba(108,99,255,0.10)',
                    padding: '4px 9px', borderRadius: 7,
                  }}
                >
                  {p.status}
                </span>
              </div>
              <div style={{ fontSize: 16.5, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.015em', marginBottom: 14 }}>
                {p.role}
              </div>
              <div className="flex items-center" style={{ gap: 8, paddingTop: 12, borderTop: '1px solid var(--border-hair-2)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Time to shortlist
                </span>
                <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--orange)', marginLeft: 'auto' }}>
                  {p.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── How we charge (transparent pricing) ─────────────────────
   Promotes the pricing structure out of the FAQ into a visible block. No
   absolute numbers (we don't have a fixed rate-card) — but the structure is
   honest so buyers don't have to guess whether they can afford to ask. */

function PricingSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Two drifting orbs for ambient depth */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(108,99,255,0.10), transparent 70%)',
          top: -140, left: -120,
          animation: 'orb-drift-2 30s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          bottom: -160, right: -100,
          animation: 'orb-drift-3 26s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 44 }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          How we charge
        </span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
          Two simple models, no surprises
        </h2>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          Pick the engagement that fits the role. Pricing is shared upfront on the audit call &mdash; no hidden margins, no per-resume fees.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 18, maxWidth: 880, margin: '0 auto' }}>
        {/* Contract */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
          className="tilt-hover shimmer-host"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-hair-2)',
            borderRadius: 18, padding: 28,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--violet)' }}>
            Model 01
          </span>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '8px 0 10px', color: 'var(--text-primary)' }}>
            Contract hires
          </h3>
          <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 18px' }}>
            Monthly flat rate, inclusive of payroll and our margin. Best for
            project-based work, fractional roles, and trial periods before a permanent decision.
          </p>
          <ul className="flex flex-col" style={{ gap: 10, margin: 0, padding: 0, listStyle: 'none' }}>
            {['Monthly flat fee (incl. payroll + margin)', 'No per-resume or sourcing fees', 'Cancel or convert to permanent anytime'].map((b) => (
              <li key={b} className="flex items-start" style={{ gap: 10, fontSize: 13.5, color: 'var(--text-primary)' }}>
                <Check size={16} color="var(--orange)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Permanent */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
          className="tilt-hover shimmer-host"
          style={{
            background: 'linear-gradient(180deg, #fff7f1, #fff)',
            border: '1px solid rgba(255,107,53,0.30)',
            borderRadius: 18, padding: 28,
            position: 'relative',
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Model 02
          </span>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '8px 0 10px', color: 'var(--text-primary)' }}>
            Permanent placements
          </h3>
          <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 18px' }}>
            One-time success fee &mdash; paid only when the candidate joins. Best for
            full-time roles where you want to own the relationship long-term.
          </p>
          <ul className="flex flex-col" style={{ gap: 10, margin: 0, padding: 0, listStyle: 'none' }}>
            {['Success-fee only — you pay nothing until they start', 'AI-shortlist included, no extra sourcing charges', 'Pricing shared upfront on the audit call'].map((b) => (
              <li key={b} className="flex items-start" style={{ gap: 10, fontSize: 13.5, color: 'var(--text-primary)' }}>
                <Check size={16} color="var(--orange)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

/* ───────────────────── Meet the founder (restore the human) ─────────────────────
   Staffing is fundamentally a relationships business — putting a face on
   the page closes the trust gap that AI-heavy copy opens. */

function FounderSection() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', position: 'relative', overflow: 'hidden' }}>
      {/* Single warm aurora orb in the corner */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%',
          filter: 'blur(130px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          top: -160, right: -120,
          animation: 'orb-drift-1 28s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="tilt-hover shimmer-host"
          style={{
            maxWidth: 880, margin: '0 auto',
            background: '#fff',
            border: '1px solid var(--border-hair-2)',
            borderRadius: 22,
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow: '0 24px 56px rgba(17,18,26,0.07)',
            position: 'relative',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]" style={{ gap: 'clamp(20px, 3vw, 32px)', alignItems: 'center' }}>
            <span
              className="inline-flex items-center justify-center float-bob"
              style={{
                width: 96, height: 96, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                color: '#fff', fontWeight: 900, fontSize: 32, letterSpacing: '-0.02em',
                boxShadow: '0 12px 30px rgba(255,107,53,0.35)',
                flexShrink: 0,
              }}
            >
              JA
            </span>
            <div>
              <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
                Meet the founder
              </span>
              <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, letterSpacing: '-0.02em', margin: '8px 0 12px', color: 'var(--text-primary)' }}>
                Jatin Agrawal &middot; Founder, Growth Escalators
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
                We use AI to scale the busywork &mdash; sourcing, ranking, scheduling.
                But every shortlist still gets human review from someone who's hired into
                a real team. The people you&rsquo;d hire from us are the same calibre we
                use to run our own clients&rsquo; work.
              </p>
              <div className="flex flex-wrap" style={{ gap: 18, marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border-hair-2)' }}>
                <FounderStat label="Brands served">100+</FounderStat>
                <FounderStat label="Years operating">Since 2021</FounderStat>
                <FounderStat label="Based in">Jaipur, India</FounderStat>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FounderStat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.015em' }}>{children}</div>
      <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
    </div>
  )
}

/* ───────────────────── FAQ ───────────────────── */

const FAQS = [
  { q: 'How does your AI matching work?',
    a: 'We combine AI sourcing and screening with human review across our talent pool to surface people who genuinely fit the role — then shortlist the strongest for you.' },
  { q: 'Do you offer both full-time and contract talent?',
    a: 'Yes. Most placements are remote-ready, on either a permanent or fixed-term contract basis, depending on what works for the role and the team.' },
  { q: 'How does pricing work?',
    a: 'Contract hires are billed monthly at a flat rate inclusive of payroll and our margin. Permanent placements use a one-time success fee, paid after the candidate joins.' },
  { q: 'Do you staff remote & international roles?',
    a: 'Yes. Our talent is primarily India-based and built for remote work with strong overlap into US, EU, and APAC working hours.' },
]

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 40 }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          Questions
        </span>
        <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          Hiring, answered
        </h2>
      </motion.div>

      <div className="flex flex-col" style={{ gap: 12, maxWidth: 760, margin: '0 auto' }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              style={{
                border: '1px solid rgba(17,18,26,0.1)', borderRadius: 14,
                background: '#fff', overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  padding: '18px 22px', width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{f.q}</span>
                <span
                  style={{
                    fontSize: 18, color: 'var(--orange)', flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s',
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: '0 22px 18px', fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {f.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────── Final CTA + Form ───────────────────── */

const ROLE_OPTIONS = [
  'Full-Stack Developer',
  'Frontend / Backend Engineer',
  'UI/UX Designer',
  'Data / AI Engineer',
  'Performance Marketer',
  'Content / Social',
  'SEO / Growth',
  'Other tech / marketing role',
]
const SEAT_OPTIONS = ['1', '2–5', '6–10', '10+']

type Status = 'idle' | 'submitting' | 'success' | 'error'

function HiringFormSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

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
    <section id="book" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}>
      <div
        className="container-x grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', gap: 'clamp(32px, 5vw, 56px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Start hiring
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, margin: '12px 0 16px', color: 'var(--text-primary)' }}>
            Tell us the role. We&rsquo;ll bring the people.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 440, margin: '0 0 26px', lineHeight: 1.6 }}>
            Get a free hiring audit — we&rsquo;ll map your role, timeline, and the kind of candidates we can deliver.
            No commitment.
          </p>
          <ul className="flex flex-col" style={{ gap: 13, listStyle: 'none', padding: 0 }}>
            {[
              'AI-matched tech & marketing talent',
              'Full-time or contract, remote-ready',
              'Vetted by a team that does the work too',
            ].map((line) => (
              <li key={line} className="flex items-center" style={{ gap: 11, fontSize: 15, color: '#2a2a3a' }}>
                <span
                  className="inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: 'rgba(0,212,170,0.14)', color: 'var(--teal-dark)',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          style={{
            background: '#fff', border: '1px solid var(--border-hair-2)',
            borderRadius: 22, boxShadow: '0 24px 60px rgba(17,18,26,0.10)',
            padding: 'clamp(20px, 4vw, 32px)',
          }}
        >
          {status === 'success' ? (
            <div className="text-center" style={{ padding: '40px 0' }}>
              <div
                className="inline-flex items-center justify-center"
                style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(0,212,170,0.16)', color: 'var(--teal-dark)',
                  marginBottom: 16,
                }}
              >
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
                Got it — we&rsquo;re on it.
              </h3>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We&rsquo;ll review your requirement and reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 14 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <Field name="name"  label="Your name"        placeholder="Jane Doe"     required />
                <Field name="phone" label="WhatsApp / Phone" placeholder="+1 / +91 …"   required type="tel" />
              </div>
              <Field name="email"   label="Work email"       placeholder="jane@company.com" required type="email" />
              <Field name="company" label="Company"          placeholder="Acme Inc." />
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <SelectField name="role"  label="Role to fill"  options={ROLE_OPTIONS} required />
                <SelectField name="seats" label="# of openings" options={SEAT_OPTIONS} required />
              </div>
              <label className="block">
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Anything else (timeline, stack, must-haves)
                </span>
                <textarea
                  name="message" rows={3}
                  placeholder="e.g. 2 senior React + TS engineers, comfortable with Next.js, strong PST overlap."
                  style={{
                    width: '100%', padding: '13px 15px',
                    border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
                    fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box',
                  }}
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="lf-submit"
                style={{
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                  color: '#fff', fontSize: 16, fontWeight: 800,
                  padding: 16, borderRadius: 12,
                  boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                  marginTop: 8,
                  transition: 'transform .25s, box-shadow .25s, opacity .25s',
                  opacity: submitting ? 0.65 : 1,
                  cursor: submitting ? 'wait' : 'pointer',
                  border: 'none',
                }}
              >
                {submitting ? 'Sending…' : 'Get My Free Hiring Audit →'}
              </button>
              <div className="text-center" style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                ★★★★★ Rated 4.9/5 · We reply within 24 hours
              </div>
              {status === 'error' && (
                <p role="alert" style={{ fontSize: 13, color: '#b91c1c' }}>
                  Couldn&rsquo;t send{errorMsg ? ` (${errorMsg})` : ''}.{' '}
                  <a href="mailto:Info@growthescalators.com" className="underline">Email us directly →</a>
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        :global(.lf-submit:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
      `}</style>
    </section>
  )
}

function Field({
  name, label, placeholder, type = 'text', required,
}: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
        style={{
          width: '100%', padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
          fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box', background: '#fff',
        }}
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
        style={{
          width: '100%', padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
          fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box',
          background: '#fff', appearance: 'none',
        }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

/* ───────────────────── Page ───────────────────── */

export default function StaffingPage() {
  return (
    <>
      <TrustStrip />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBrandsStrip />
        <PlacementsSection />
        <ProblemSection />
        <HowItWorksSection />
        <MartechAISection />
        <WhatYouGetSection />
        <RolesSection />
        <MarketsSection />
        <PricingSection />
        <ProvideSection />
        <FounderSection />
        <FaqSection />
        <HiringFormSection />
      </main>
      <StickyAuditBar />
      <Footer />
    </>
  )
}
