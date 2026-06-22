'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function IconClinic() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
function IconHouse() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}
function IconUserPlus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M17 8h5M19.5 5.5v5" />
    </svg>
  )
}

const INDUSTRIES = [
  {
    Icon: IconClinic,
    title: 'Doctors & Clinics',
    body: 'Patient-acquisition funnels & reputation building. Dr. Dubay: 35,000+ leads.',
    href: '/doctors',
  },
  {
    Icon: IconHouse,
    title: 'Real Estate',
    body: 'Qualified buyer/seller leads with automated nurture sequences that close faster.',
    href: '/real-estate',
  },
  {
    Icon: IconUserPlus,
    title: 'Staffing & Recruiting',
    body: 'Candidate & client pipelines that fill roles faster, at lower cost — our newest growth vertical.',
    href: '/staffing',
    highlight: true,
  },
]

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}
    >
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 440, height: 440, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(108,99,255,0.10), transparent 70%)',
          top: 80, left: -120,
          animation: 'orb-drift-3 30s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          bottom: -120, right: -80,
          animation: 'orb-drift-1 28s ease-in-out infinite',
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 92px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between flex-wrap"
          style={{ gap: 24, marginBottom: 44 }}
        >
          <div style={{ maxWidth: 560 }}>
            <span
              style={{
                fontSize: 12, fontWeight: 800, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'var(--orange)',
              }}
            >
              Built for your industry
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800,
                letterSpacing: '-0.025em', margin: '14px 0 10px',
                color: 'var(--text-primary)',
              }}
            >
              Playbooks tuned to how you actually win
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              We don&rsquo;t run generic campaigns. Each industry gets a dedicated funnel,
              creative angle, and offer that&rsquo;s proven to convert in that market.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 18 }}>
          {INDUSTRIES.map((ind, i) => {
            const { Icon } = ind
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={ind.href}
                  className={`svc-card flex items-start ${ind.highlight ? '' : 'glass'}`}
                  style={{
                    gap: 16,
                    ...(ind.highlight
                      ? {
                          background: 'linear-gradient(135deg, rgba(255,107,53,0.10), rgba(255,107,53,0.03))',
                          border: '1.5px solid rgba(255,107,53,0.35)',
                          boxShadow: '0 8px 28px rgba(255,107,53,0.10)',
                        }
                      : {}),
                    borderRadius: 18,
                    padding: 26,
                    height: '100%',
                    transition: 'transform .35s cubic-bezier(.25,.46,.45,.94), box-shadow .35s, border-color .35s',
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 46, height: 46, borderRadius: 12,
                      background: ind.highlight ? 'rgba(255,107,53,0.16)' : 'rgba(255,107,53,0.10)',
                    }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <div className="flex items-center" style={{ gap: 8, marginBottom: 5 }}>
                      <h3 style={{ fontSize: 17.5, fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                        {ind.title}
                      </h3>
                      {ind.highlight && (
                        <span
                          style={{
                            fontSize: 9, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                            background: 'var(--orange)', color: '#fff',
                            padding: '2px 7px', borderRadius: 5,
                          }}
                        >
                          New
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 10px' }}>
                      {ind.body}
                    </p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)' }}>View playbook →</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
          style={{ paddingTop: 32, fontSize: 15, color: 'var(--text-secondary)' }}
        >
          Don&rsquo;t see your industry?{' '}
          <Link href="/contact" style={{ color: 'var(--orange)', fontWeight: 700 }}>
            We&rsquo;ve scaled brands across 20+ verticals — talk to us →
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        :global(.svc-card:hover) {
          transform: translateY(-4px);
          border-color: rgba(255,107,53,0.35) !important;
          box-shadow: 0 16px 40px rgba(255,107,53,0.10) !important;
        }
      `}</style>
    </section>
  )
}
