'use client'

import { motion } from 'framer-motion'
import CountUp from '@/components/ui/CountUp'

/* Stats band — 4 equal cells with hairline dividers between (per design). */
const STATS = [
  { end: 10000, suffix: '+',   label: 'Campaigns Run' },
  { end: 187,   suffix: '+',   label: 'Brands Scaled' },
  { end: 97,    suffix: '%',   label: 'Client Retention' },
  { end: 4.9,   suffix: '★',   label: 'Google Rating', decimals: 1 },
]

export default function Results() {
  return (
    <section className="container-x" style={{ padding: 'clamp(48px, 7vw, 72px) clamp(20px, 4vw, 40px)' }}>
      <div className="results-grid grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center results-cell"
            data-index={i}
            style={{ padding: 'clamp(16px, 2.5vw, 12px) 8px' }}
          >
            <div
              className="tabular-nums"
              style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 800,
                color: 'var(--orange)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              <CountUp
                end={s.end}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
                duration={2.0}
              />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: 10,
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        /* Mobile (2-col): divider between the two cols, not on the first of each row.
           Desktop (4-col): divider between every cell except the first. */
        :global(.results-cell[data-index="1"]),
        :global(.results-cell[data-index="3"]) {
          border-left: 1px solid var(--border-hair-2);
        }
        @media (min-width: 1024px) {
          :global(.results-cell[data-index="1"]),
          :global(.results-cell[data-index="2"]),
          :global(.results-cell[data-index="3"]) {
            border-left: 1px solid var(--border-hair-2);
          }
        }
      `}</style>
    </section>
  )
}
