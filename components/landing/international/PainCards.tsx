'use client'

import { motion } from 'framer-motion'
import type { PainSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/** "Sound familiar?" buyer-pain section — headline/subhead + a 4-up card grid. */
export type PainCardsProps = {
  content: PainSectionContent
  id?: string
}

export default function PainCards({ content, id }: PainCardsProps) {
  const { tag, headline, subhead, cards, footerNote } = content
  return (
    <section id={id} aria-label="The problem" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        style={{ maxWidth: 760, marginBottom: 44 }}
      >
        <span className="section-tag">{tag}</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 12px', lineHeight: 1.15, color: 'var(--text-primary)' }}>
          {headline}
        </h2>
        <p style={{ fontSize: 16.5, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
          {subhead}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
        {cards.map((p, i) => (
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

      {footerNote && (
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 760, marginTop: 32 }}>
          {footerNote}
        </p>
      )}
    </section>
  )
}
