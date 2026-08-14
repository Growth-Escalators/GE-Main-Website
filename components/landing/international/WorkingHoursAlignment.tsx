'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Globe2 } from 'lucide-react'
import type { WorkingHoursSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * Working-hour / time-zone alignment section. One component, three visual
 * variants selected by `content.visualVariant` — deliberately NOT a single
 * "show one overlap number" widget, because two of the four markets this
 * was designed for explicitly must avoid implying a single fixed number:
 *
 * - 'overlap-bar'    — a simple filled/unfilled hour bar + one-line label.
 *                      Fits UAE: ~1h30m ahead, near-full-day overlap — a
 *                      real approximate figure worth visualizing.
 * - 'multi-zone-note' — a list of zone rows (each its own note) + a caveat
 *                      line. Fits US: overlap varies by ET/CT/MT/PT and is
 *                      confirmed per role, so no single bar would be honest.
 * - 'flexible-note'   — prose-only caution card + optional bullets, no
 *                      numeric visual at all. Fits UK (DST shifts the
 *                      overlap) and Australia (varies by state + DST) —
 *                      both need to actively avoid a hardcoded number.
 *
 * See the Stage A report for why this was NOT wired into the live UK page
 * in this refactor (UK's approved copy already carries overlap messaging
 * inline elsewhere; adding a new section would be a content change, not a
 * refactor).
 */
export type WorkingHoursAlignmentProps = {
  content: WorkingHoursSectionContent
  id?: string
}

export default function WorkingHoursAlignment({ content, id = 'working-hours' }: WorkingHoursAlignmentProps) {
  const { tag, headline, subhead, visualVariant, overlapBar, zones, zoneCaveat, cautionNote, bullets } = content

  return (
    <section id={id} aria-label="Working-hour alignment" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', scrollMarginTop: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 36, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}
      >
        <span className="section-tag">{tag}</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 10px', color: 'var(--text-primary)' }}>
          {headline}
        </h2>
        {subhead && <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{subhead}</p>}
      </motion.div>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {visualVariant === 'overlap-bar' && overlapBar && (
          <div style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 18, padding: 'clamp(20px, 3vw, 28px)' }}>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 14 }}>
              <Clock size={18} color="var(--orange)" />
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>{overlapBar.marketLabel}</span>
            </div>
            <div
              role="img"
              aria-label={`Approximate working-hour overlap: ${overlapBar.overlapHoursLabel}`}
              style={{ height: 12, borderRadius: 999, background: 'var(--bg-warm)', overflow: 'hidden', marginBottom: 10 }}
            >
              <div
                style={{
                  height: '100%', width: `${Math.max(0, Math.min(100, overlapBar.overlapPercent))}%`,
                  background: 'linear-gradient(90deg, var(--orange), var(--orange-light))', borderRadius: 999,
                }}
              />
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>{overlapBar.overlapHoursLabel}</p>
            {overlapBar.note && <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{overlapBar.note}</p>}
          </div>
        )}

        {visualVariant === 'multi-zone-note' && zones && (
          <div style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 18, padding: 'clamp(20px, 3vw, 28px)' }}>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 16 }}>
              <Globe2 size={18} color="var(--orange)" />
              <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>By time zone</span>
            </div>
            <ul className="flex flex-col" style={{ gap: 10, listStyle: 'none', margin: '0 0 14px', padding: 0 }}>
              {zones.map((z) => (
                <li key={z.zone} className="flex items-center justify-between" style={{ padding: '10px 0', borderTop: '1px solid var(--border-hair)' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)' }}>{z.zone}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', textAlign: 'right' }}>{z.note}</span>
                </li>
              ))}
            </ul>
            {zoneCaveat && (
              <p className="flex items-start" style={{ gap: 8, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                <AlertCircle size={14} style={{ flexShrink: 0, marginTop: 1 }} />
                {zoneCaveat}
              </p>
            )}
          </div>
        )}

        {visualVariant === 'flexible-note' && (
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)', borderRadius: 18, padding: 'clamp(20px, 3vw, 28px)' }}>
            {cautionNote && (
              <p className="flex items-start" style={{ gap: 10, fontSize: 14.5, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6, margin: bullets?.length ? '0 0 14px' : 0 }}>
                <AlertCircle size={17} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                {cautionNote}
              </p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="flex flex-col" style={{ gap: 8, listStyle: 'none', margin: 0, padding: 0, paddingLeft: 27 }}>
                {bullets.map((b) => (
                  <li key={b} style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, listStyle: 'disc' }}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
