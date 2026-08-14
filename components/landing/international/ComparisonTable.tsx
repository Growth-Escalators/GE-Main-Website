'use client'

import { motion } from 'framer-motion'
import type { ComparisonSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * Accessible comparison table ("How we compare"). Horizontally scrolls on
 * mobile via a wrapping `overflow-x: auto` div with a `min-width` table —
 * the page body itself never scrolls horizontally. Uses a proper `<caption>`
 * (visually hidden, not display:none, so it stays in the accessibility
 * tree), `scope="col"`/`scope="row"` on header cells, and a `role=` group
 * label via aria-label on the section — all native-HTML semantics, no ARIA
 * table-role reinvention.
 */
export type ComparisonTableProps = {
  content: ComparisonSectionContent
  id?: string
}

export default function ComparisonTable({ content, id }: ComparisonTableProps) {
  const { tag, headline, caption, columns, rows, highlightColumnKey } = content

  return (
    <section id={id} aria-label="Comparison" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 36 }}
      >
        <span className="section-tag">{tag}</span>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          {headline}
        </h2>
      </motion.div>

      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--border-hair-2)', borderRadius: 16 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760, fontSize: 13.5 }}>
          <caption className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
            {caption}
          </caption>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)' }}>
              <th scope="col" style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 800, color: 'var(--text-primary)' }}>Criterion</th>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  style={{
                    textAlign: 'left', padding: '14px 16px',
                    fontWeight: c.highlight ? 800 : 700,
                    color: c.highlight ? 'var(--orange)' : 'var(--text-secondary)',
                    background: c.highlight ? 'rgba(255,107,53,0.06)' : undefined,
                  }}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.criterion} style={{ borderTop: '1px solid var(--border-hair)', background: i % 2 === 1 ? 'rgba(15,15,26,0.015)' : 'transparent' }}>
                <th scope="row" style={{ textAlign: 'left', padding: '13px 16px', fontWeight: 700, color: 'var(--text-primary)' }}>{r.criterion}</th>
                {columns.map((c) => {
                  const isHighlight = c.key === highlightColumnKey
                  return (
                    <td
                      key={c.key}
                      style={{
                        padding: '13px 16px',
                        color: isHighlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: isHighlight ? 700 : 400,
                        background: isHighlight ? 'rgba(255,107,53,0.04)' : undefined,
                      }}
                    >
                      {r.values[c.key] ?? ''}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
