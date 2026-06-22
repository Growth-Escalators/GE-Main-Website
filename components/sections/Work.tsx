'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CASES = [
  {
    id: 'paraiso',
    tag: 'Fashion · Social + Ads',
    metric: '10× Sales',
    metricSize: 40,
    caption: 'Paraiso Comfortwears — 10× monthly sales in 30 days. One reel hit 5M views, 20M+ total reach.',
    gradient: 'linear-gradient(150deg, #1a0a2e 0%, #6d28d9 55%, #a855f7 100%)',
    href: '/work',
  },
  {
    id: 'elixzor',
    tag: 'YouTube · USA',
    metric: '10× ROAS',
    metricSize: 34,
    caption: 'Elixzor Media — scaled a US YouTube-automation business with lead gen & full-funnel marketing.',
    gradient: 'linear-gradient(150deg, #1a0533 0%, #3b0f72 55%, #6d28d9 100%)',
    href: '/work',
  },
  {
    id: 'dubay',
    tag: 'Healthcare · Web',
    metric: '35,000+',
    metricSize: 34,
    caption: 'Dr. Dheeraj Dubay — leads + PR for North India’s top joint-replacement surgeon. Forbes record holder.',
    gradient: 'linear-gradient(150deg, #0a2a6e 0%, #1a4bb5 60%, #2563eb 100%)',
    href: '/work',
  },
]

export default function Work() {
  return (
    <section className="container-x" style={{ padding: 'clamp(56px, 9vw, 92px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between flex-wrap"
        style={{ marginBottom: 44, gap: 24 }}
      >
        <div>
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Proof, not promises
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '14px 0 0', color: 'var(--text-primary)' }}>
            Results that speak for themselves
          </h2>
        </div>
        <Link href="/work" style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-secondary)' }} className="hover:text-[var(--orange)]">
          View all case studies →
        </Link>
      </motion.div>

      <div className="work-grid" style={{ display: 'grid', gap: 20 }}>
        {CASES.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={c.href}
              aria-label={`${c.metric} case — ${c.caption}`}
              className="case-card block relative overflow-hidden"
              style={{
                minHeight: 360,
                borderRadius: 20,
                background: c.gradient,
                transition: 'transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s',
              }}
            >
              <div
                className="absolute inset-0 flex flex-col justify-between"
                style={{ padding: 32 }}
              >
                <span
                  className="self-start"
                  style={{
                    fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: '#fff',
                    background: 'rgba(255,255,255,0.16)',
                    padding: '6px 12px', borderRadius: 999,
                  }}
                >
                  {c.tag}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: c.metricSize,
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {c.metric}
                  </div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 8, lineHeight: 1.5 }}>
                    {c.caption}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .work-grid { grid-template-columns: 1fr; }
        @media (min-width: 900px) {
          .work-grid { grid-template-columns: 1.4fr 1fr 1fr; }
        }
        :global(.case-card:hover) {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(17,18,26,0.16);
        }
      `}</style>
    </section>
  )
}
