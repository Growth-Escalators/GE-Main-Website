'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const REASONS = [
  { n: '01', title: 'Transparent reporting',  body: 'Live dashboards. You see every click and every result, anytime.' },
  { n: '02', title: 'Certified specialists',  body: 'Meta- & Google-certified strategists running on best-practice playbooks.' },
  { n: '03', title: 'Dedicated team',         body: 'A real strategist on WhatsApp — not a ticket queue or a chatbot.' },
  { n: '04', title: 'ROI-first, always',      body: 'We optimize for revenue and retention — not likes that don’t pay.' },
]

export default function WhyUs() {
  return (
    <section style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 90px) clamp(20px, 4vw, 40px)' }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-center"
          style={{ gap: 56 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              Why brands stay
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800, letterSpacing: '-0.025em',
                margin: '14px 0 18px', lineHeight: 1.1,
              }}
            >
              Reliable enough to bet your budget on.
            </h2>
            <p style={{ fontSize: 16.5, color: 'var(--text-on-dark)', lineHeight: 1.7, margin: '0 0 28px' }}>
              No vanity metrics, no disappearing account managers. Just transparent reporting and
              a team that treats your spend like our own — which is why 97% of clients renew.
            </p>
            <Link
              href="/#book"
              className="btn-cta inline-block"
              style={{
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                color: '#fff', fontSize: 15, fontWeight: 800,
                padding: '15px 30px', borderRadius: 12,
                boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                transition: 'transform .25s, box-shadow .25s',
              }}
            >
              Book a Free Strategy Call
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
            {REASONS.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-on-dark)',
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--orange)', marginBottom: 8 }}>
                  {r.n}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: '#fff' }}>
                  {r.title}
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--text-on-dark-mute)', lineHeight: 1.55, margin: 0 }}>
                  {r.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.btn-cta:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
      `}</style>
    </section>
  )
}
