'use client'

import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import type { FaqSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div style={{ border: '1px solid var(--border-hair-2)', borderRadius: 14, background: '#fff', overflow: 'hidden' }}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: '18px 20px', width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16, background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left', minHeight: 44,
        }}
      >
        <span style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-primary)' }}>{q}</span>
        <span
          aria-hidden
          style={{ fontSize: 18, color: 'var(--orange)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}
        >
          +
        </span>
      </button>
      {/* Always in the DOM (hidden attribute, not conditional mount) so crawlers read every answer. */}
      <div id={panelId} hidden={!open} style={{ padding: '0 20px 18px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {a}
      </div>
    </div>
  )
}

/**
 * FAQPage JSON-LD — exported separately so it can be rendered once near the
 * top of the page (as the UK page already does) independent of where
 * <FaqAccordion> itself renders in the layout.
 */
export function FaqPageJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (faqs.length === 0) return null
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export type FaqAccordionProps = {
  content: FaqSectionContent
  id?: string
  /** Index of the FAQ that renders expanded by default. Defaults to 0. */
  defaultOpenIndex?: number
}

export default function FaqAccordion({ content, id = 'faqs', defaultOpenIndex = 0 }: FaqAccordionProps) {
  const { tag, headline, faqs } = content
  return (
    <section id={id} aria-label="FAQ" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 80 }}>
      <div className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center" style={{ marginBottom: 36 }}
        >
          <span className="section-tag">{tag}</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 38px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '12px 0 0', color: 'var(--text-primary)' }}>
            {headline}
          </h2>
        </motion.div>

        <div className="flex flex-col" style={{ gap: 12, maxWidth: 780, margin: '0 auto' }}>
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === defaultOpenIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}
