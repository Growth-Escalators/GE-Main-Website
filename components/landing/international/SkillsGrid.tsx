'use client'

import { motion } from 'framer-motion'
import type { SkillsSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

/**
 * Technology-category grid. Renders `content.categories` in array order, so
 * a market reorders or trims its 6 categories by editing that array —
 * nothing in this component is UK-specific or needs a priority/index field.
 */
export type SkillsGridProps = {
  content: SkillsSectionContent
  id?: string
}

export default function SkillsGrid({ content, id = 'skills' }: SkillsGridProps) {
  const { tag, headline, categories, footerNote } = content
  return (
    <section id={id} aria-label="Skills" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 44, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="section-tag">{tag}</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0 0 10px', color: 'var(--text-primary)' }}>
            {headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: easeOut }}
              style={{ background: '#fff', border: '1px solid var(--border-hair-2)', borderRadius: 16, padding: 22 }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 12px' }}>{cat.title}</h3>
              <div className="flex flex-wrap" style={{ gap: 7 }}>
                {cat.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)',
                      background: 'var(--bg-warm)', border: '1px solid var(--border-hair)',
                      borderRadius: 999, padding: '5px 11px',
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {footerNote && (
          <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 620, margin: '32px auto 0' }}>
            {footerNote}
          </p>
        )}
      </div>
    </section>
  )
}
