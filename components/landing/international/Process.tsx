'use client'

import { motion } from 'framer-motion'
import type { ProcessSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/** "How it works" numbered-step section (4-up card grid). */
export type ProcessProps = {
  content: ProcessSectionContent
  id?: string
}

export default function Process({ content, id = 'how-it-works' }: ProcessProps) {
  const { tag, headline, steps } = content
  return (
    <section id={id} aria-label="How it works" className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', scrollMarginTop: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-center" style={{ marginBottom: 48 }}
      >
        <span className="section-tag">{tag}</span>
        <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
          {headline}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 18 }}>
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
            style={{ padding: 26, borderRadius: 18, background: 'var(--bg-secondary)', border: '1px solid var(--border-hair)' }}
          >
            <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--orange)', marginBottom: 12, lineHeight: 1 }}>{s.step}</div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px', color: 'var(--text-primary)' }}>{s.title}</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
