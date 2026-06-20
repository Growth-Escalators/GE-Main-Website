'use client'

import { motion } from 'framer-motion'
import type { Work } from '../_data/works'
import styles from './WorkCard.module.css'

type Props = {
  work: Work
  /** Determines grid spans via CSS data-attributes. */
  span?: { col?: number; row?: number }
  /** Index in list — used for stagger. */
  index?: number
}

export default function WorkCard({ work, span, index = 0 }: Props) {
  const { palette, variant } = work

  return (
    <motion.article
      className={styles.card}
      data-col={span?.col ?? 1}
      data-row={span?.row ?? 1}
      style={
        {
          '--w-bg': palette.bg,
          '--w-fg': palette.fg,
          '--w-accent': palette.accent,
        } as React.CSSProperties
      }
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.canvas}>
        {variant === 'initial' && <InitialComp work={work} />}
        {variant === 'mark' && <MarkComp work={work} />}
        {variant === 'field' && <FieldComp work={work} />}
        {variant === 'poster' && <PosterComp work={work} />}
        {variant === 'spec' && <SpecComp work={work} />}

        {/* Edge tick marks — registration marks like a print proof */}
        <span className={styles.tickTL} aria-hidden />
        <span className={styles.tickTR} aria-hidden />
        <span className={styles.tickBL} aria-hidden />
        <span className={styles.tickBR} aria-hidden />
      </div>

      <footer className={styles.meta}>
        <div className={styles.metaRow}>
          <span className={styles.metaTag}>{work.shortTag}</span>
          <span className={styles.metaYear}>{work.year}</span>
        </div>
        <h3 className={styles.metaTitle}>{work.title}</h3>
        <p className={styles.metaClient}>— {work.client}</p>
      </footer>
    </motion.article>
  )
}

/* ───────── variant: 'initial' — massive single letter ───────── */
function InitialComp({ work }: { work: Work }) {
  const letter = work.composition.initial ?? work.client[0]
  return (
    <div className={styles.initial}>
      <span className={styles.initialLetter} aria-hidden>{letter}</span>
      <span className={styles.initialFootnote}>{work.client.toUpperCase()} · {work.year}</span>
    </div>
  )
}

/* ───────── variant: 'mark' — abstract brand-mark in SVG ───────── */
function MarkComp({ work }: { work: Work }) {
  const shape = work.composition.mark ?? 'orbit'
  return (
    <div className={styles.markWrap}>
      <svg viewBox="0 0 200 200" className={styles.markSvg} aria-hidden>
        {shape === 'orbit' && (
          <>
            <circle cx="100" cy="100" r="60" fill="none" stroke="var(--w-fg)" strokeWidth="1.5" />
            <circle cx="100" cy="40" r="10" fill="var(--w-accent)" />
            <line x1="100" y1="100" x2="100" y2="40" stroke="var(--w-fg)" strokeWidth="1" />
          </>
        )}
        {shape === 'arch' && (
          <>
            <path d="M 40 150 Q 100 30 160 150" fill="none" stroke="var(--w-fg)" strokeWidth="3" />
            <line x1="40" y1="150" x2="160" y2="150" stroke="var(--w-accent)" strokeWidth="2" />
            <circle cx="100" cy="80" r="4" fill="var(--w-accent)" />
          </>
        )}
        {shape === 'split' && (
          <>
            <rect x="40" y="40" width="60" height="120" fill="var(--w-fg)" />
            <rect x="100" y="40" width="60" height="120" fill="var(--w-accent)" />
          </>
        )}
        {shape === 'rule' && (
          <>
            <line x1="30" y1="100" x2="170" y2="100" stroke="var(--w-fg)" strokeWidth="2" />
            <circle cx="100" cy="100" r="6" fill="var(--w-accent)" />
            <line x1="100" y1="40" x2="100" y2="160" stroke="var(--w-fg)" strokeWidth="1" strokeDasharray="3 4" />
          </>
        )}
        {shape === 'eclipse' && (
          <>
            <circle cx="90" cy="100" r="56" fill="var(--w-accent)" />
            <circle cx="115" cy="100" r="56" fill="var(--w-bg)" />
            <circle cx="115" cy="100" r="56" fill="none" stroke="var(--w-fg)" strokeWidth="1.5" />
          </>
        )}
      </svg>
      <div className={styles.markCaption}>
        <span className={styles.markRule} aria-hidden />
        <span className={styles.markClient}>{work.client}</span>
        <span className={styles.markCat}>{work.category}</span>
      </div>
    </div>
  )
}

/* ───────── variant: 'field' — color field + caption stack ───────── */
function FieldComp({ work }: { work: Work }) {
  const lines = work.composition.fieldLines ?? [work.client.toUpperCase()]
  return (
    <div className={styles.field}>
      <div className={styles.fieldLines}>
        {lines.map((l, i) => (
          <span key={i} className={styles.fieldLine} style={{ opacity: 1 - i * 0.12 }}>
            {l}
          </span>
        ))}
      </div>
      <div className={styles.fieldCorner}>
        <span>{work.shortTag}</span>
        <span>{work.year}</span>
      </div>
    </div>
  )
}

/* ───────── variant: 'poster' — vertical typographic stack ───────── */
function PosterComp({ work }: { work: Work }) {
  const stack = work.composition.posterStack ?? [work.client.toUpperCase()]
  return (
    <div className={styles.poster}>
      <div className={styles.posterStack}>
        {stack.map((word, i) => (
          <span
            key={i}
            className={styles.posterWord}
            style={{ fontSize: `${100 - (i * 8) % 50}%` }}
          >
            {word}
          </span>
        ))}
      </div>
      <span className={styles.posterFootnote}>{work.client} · {work.year}</span>
    </div>
  )
}

/* ───────── variant: 'spec' — project spec sheet rows ───────── */
function SpecComp({ work }: { work: Work }) {
  const rows = work.composition.specRows ?? []
  return (
    <div className={styles.spec}>
      <div className={styles.specHeader}>
        <span>SPEC SHEET</span>
        <span>№ {String(WORKS_INDEX[work.id] ?? '01').padStart(2, '0')}</span>
      </div>
      <ul className={styles.specRows}>
        {rows.map((r, i) => (
          <li key={i} className={styles.specRow}>
            <span className={styles.specKey}>{r.k}</span>
            <span className={styles.specDots} aria-hidden />
            <span className={styles.specVal}>{r.v}</span>
          </li>
        ))}
      </ul>
      <div className={styles.specFooter}>
        <span>{work.category}</span>
        <span>{work.year}</span>
      </div>
    </div>
  )
}

/* Lazy index — generated once for spec-sheet numbering. */
const WORKS_INDEX: Record<string, number> = {
  'yellow-diaries': 1,
  'exzept': 2,
  'credo-world': 3,
  'paraiso': 4,
  'elixzor': 5,
  'dr-mukesh': 6,
  'flight-ticket-fare': 7,
  'kabir-saas': 8,
  'ananya-studio': 9,
  'tanya-fmcg': 10,
  'arjun-real-estate': 11,
  'meera-derma': 12,
}
