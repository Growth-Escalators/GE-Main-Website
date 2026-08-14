'use client'

import { motion } from 'framer-motion'
import type { ScreeningSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * The labeled "Sample screening summary" card — exported standalone so it
 * can be reused outside ScreeningSection if a market ever wants it elsewhere
 * (e.g. repeated near a CTA). ScreeningSection below renders it as the right
 * -hand panel of the full methodology section.
 */
export type ScreeningSummaryProps = {
  rows: { label: string; value: string }[]
  label?: string
  disclaimer?: string
}

export function ScreeningSummary({
  rows, label = 'Sample screening summary', disclaimer = 'Illustrative format only — not a real candidate.',
}: ScreeningSummaryProps) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 20, boxShadow: '0 20px 50px rgba(17,18,26,0.08)', padding: 'clamp(20px, 3vw, 28px)' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          {label}
        </div>
      </div>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 18px' }}>{disclaimer}</p>
      <div className="flex flex-col" style={{ gap: 0 }}>
        {rows.map((row, i) => (
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
    </div>
  )
}

/** Two-column "screening methodology" section: numbered gate checklist + ScreeningSummary card. */
export type ScreeningSectionProps = {
  content: ScreeningSectionContent
  id?: string
}

export default function ScreeningSection({ content, id = 'screening' }: ScreeningSectionProps) {
  const { tag, headline, subhead, gates, summaryLabel, summaryDisclaimer, summary } = content
  return (
    <section id={id} aria-label="Screening methodology" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]" style={{ gap: 'clamp(32px, 5vw, 48px)', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="section-tag">{tag}</span>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 14px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
              {headline}
            </h2>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 22px' }}>
              {subhead}
            </p>
            <ol className="flex flex-col" style={{ gap: 11, margin: 0, padding: 0, listStyle: 'none' }}>
              {gates.map((g, i) => (
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
          >
            <ScreeningSummary rows={summary} label={summaryLabel} disclaimer={summaryDisclaimer} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
