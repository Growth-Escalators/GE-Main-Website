'use client'

import { useEffect, useMemo, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

import { WORKS, CATEGORIES } from '../_data/works'
import WorkCard from './WorkCard'
import styles from './CreativeClient.module.css'

export default function CreativeClient() {
  const prefersReduced = useReducedMotion()

  // Featured row = first 4 works with their span hints baked in.
  const featured = useMemo(() => WORKS.filter((w) => w.featured).slice(0, 4), [])
  const rest = useMemo(() => WORKS.filter((w) => !w.featured), [])
  const marquee = useMemo(() => [...CATEGORIES, ...CATEGORIES], [])

  // Hero: word-by-word mask reveal.
  const headlineWords = ['Sharp', 'work.', 'Real', 'graphics.', 'Indian', 'heat.']
  const headlineDelay = 0.08

  // Year range for the masthead column.
  const disciplineCount = new Set(WORKS.map((w) => w.category)).size

  // Mouse-following crosshair on the gallery area (desktop only).
  const crosshairRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (prefersReduced) return
    const el = crosshairRef.current
    if (!el) return
    let raf = 0
    let x = -100, y = -100
    let tx = -100, ty = -100
    const update = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`
      if (Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2) {
        raf = requestAnimationFrame(loop)
      } else { raf = 0 }
    }
    const enter = () => { el.style.opacity = '1' }
    const leave = () => { el.style.opacity = '0'; tx = -100; ty = -100 }
    const targets = document.querySelectorAll<HTMLElement>(`.${styles.galleryZone}`)
    targets.forEach((t) => {
      t.addEventListener('mousemove', update)
      t.addEventListener('mouseenter', enter)
      t.addEventListener('mouseleave', leave)
    })
    return () => {
      targets.forEach((t) => {
        t.removeEventListener('mousemove', update)
        t.removeEventListener('mouseenter', enter)
        t.removeEventListener('mouseleave', leave)
      })
      if (raf) cancelAnimationFrame(raf)
    }
  }, [prefersReduced])

  return (
    <div className={`creative-root ${styles.root}`}>
      <div className={styles.crosshair} ref={crosshairRef} aria-hidden />

      {/* ─────────────── Minimal utility bar (no parent-site link) ─────────────── */}
      <div className={styles.utilityBar}>
        <span className={styles.brandMark} aria-label="Folio">F.</span>
        <span className={styles.utilityRight}>Vol. 01 · 2026</span>
      </div>

      {/* ─────────────── Hero ─────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden />
              Folio · Selected Works
            </span>

            <h1 className={styles.headline} aria-label={headlineWords.join(' ')}>
              {headlineWords.map((w, i) => (
                <span key={i} className={styles.wordMask}>
                  <motion.span
                    className={styles.word}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.15 + i * headlineDelay,
                      duration: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {w}
                    {i < headlineWords.length - 1 && ' '}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className={styles.lede}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              A working folio of brand systems, social creative, posters,
              identity, and web design — shipped for clients across India and beyond.
            </motion.p>

            <motion.div
              className={styles.heroFoot}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a href="#work" className={styles.scrollCue}>
                <ArrowDown size={14} />
                <span>Scroll to the work</span>
              </a>
            </motion.div>
          </div>

          {/* Masthead-style data column — replaces the old presenter card. Neutral. */}
          <motion.aside
            className={styles.masthead}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.mastheadRule} aria-hidden />
            <dl className={styles.mastheadRows}>
              <div className={styles.mastheadRow}>
                <dt>Pieces</dt>
                <dd>{String(WORKS.length).padStart(2, '0')}</dd>
              </div>
              <div className={styles.mastheadRow}>
                <dt>Disciplines</dt>
                <dd>{String(disciplineCount).padStart(2, '0')}</dd>
              </div>
              <div className={styles.mastheadRow}>
                <dt>Range</dt>
                <dd>2021—{'26'}</dd>
              </div>
              <div className={styles.mastheadRow}>
                <dt>Made in</dt>
                <dd>India</dd>
              </div>
            </dl>
            <span className={styles.mastheadRule} aria-hidden />
            <p className={styles.mastheadList}>
              {CATEGORIES.join(' · ')}
            </p>
          </motion.aside>
        </div>
      </section>

      {/* ─────────────── Tag marquee strip ─────────────── */}
      <section className={styles.marqueeStrip} aria-hidden>
        <div className={styles.marqueeTrack}>
          {marquee.map((c, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeAst}>✷</span>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────── Featured (asymmetric 4) ─────────────── */}
      <section id="work" className={`${styles.section} ${styles.galleryZone}`}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionTag}>Featured · 01 / 03</span>
          <h2 className={styles.sectionTitle}>
            What’s been <em>shipping lately</em>
          </h2>
          <span className={styles.sectionRule} aria-hidden />
        </header>

        <div className={styles.featuredGrid}>
          {featured.map((w, i) => (
            <WorkCard key={w.id} work={w} span={w.featured} index={i} />
          ))}
        </div>
      </section>

      {/* ─────────────── Editorial pull-quote ─────────────── */}
      <section className={styles.pullSection}>
        <div className={styles.pullInner}>
          <span className={styles.pullKicker}>An aside</span>
          <motion.blockquote
            className={styles.pullQuote}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span aria-hidden className={styles.pullMark}>“</span>
            <span>
              The work <em>doesn’t</em> have to win awards. It has to earn sales —
              the awards arrive on their own, quietly.
            </span>
          </motion.blockquote>
        </div>
      </section>

      {/* ─────────────── Full work grid ─────────────── */}
      <section className={`${styles.section} ${styles.galleryZone}`}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionTag}>The catalogue · 02 / 03</span>
          <h2 className={styles.sectionTitle}>
            More from the <em>plate</em>
          </h2>
          <span className={styles.sectionRule} aria-hidden />
        </header>

        <div className={styles.catalogueGrid}>
          {rest.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} />
          ))}
        </div>
      </section>

      {/* ─────────────── Process / philosophy ─────────────── */}
      <section className={styles.process}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionTag}>Working method · 03 / 03</span>
          <h2 className={styles.sectionTitle}>
            How it’s <em>made</em>
          </h2>
          <span className={styles.sectionRule} aria-hidden />
        </header>
        <ol className={styles.processList}>
          {[
            { n: '①', t: 'Read the room', d: 'A brief is never just a brief. We translate the underlying ask — sales, perception, talent, traction — before a single pixel.' },
            { n: '②', t: 'Set the system', d: 'Identity, palette, voice — built once, deployed everywhere. No one-off campaigns that age in 30 days.' },
            { n: '③', t: 'Ship daily', d: 'Posters, reels, decks, landing pages — calendar-paced. The folio you’re scrolling was built in fragments, every weekday.' },
            { n: '④', t: 'Measure, then refine', d: 'Every asset has a metric attached. CTRs, CPLs, engagement, sales. Good ones get cloned. Bad ones get retired.' },
          ].map((p, i) => (
            <motion.li
              key={p.n}
              className={styles.processItem}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.processN}>{p.n}</span>
              <div>
                <h3 className={styles.processT}>{p.t}</h3>
                <p className={styles.processD}>{p.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ─────────────── Index (editorial back-matter) ─────────────── */}
      <section className={styles.indexSection}>
        <header className={styles.indexHead}>
          <span className={styles.sectionTag}>Index</span>
          <span className={styles.indexCount}>{WORKS.length} entries</span>
        </header>
        <ol className={styles.indexList}>
          {WORKS.map((w, i) => (
            <li key={w.id} className={styles.indexItem}>
              <span className={styles.indexN}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.indexClient}>{w.client}</span>
              <span className={styles.indexDots} aria-hidden />
              <span className={styles.indexCat}>{w.category}</span>
              <span className={styles.indexYear}>{w.year}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ─────────────── Mini contact CTA ─────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaPretitle}>End of folio</p>
          <h2 className={styles.ctaTitle}>
            Like the work? <em>Get in touch.</em>
          </h2>
          <div className={styles.ctaActions}>
            <a href="mailto:Info@growthescalators.com?subject=Creative%20brief" className={styles.ctaPrimary}>
              <span>Send a brief</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
          <p className={styles.colophon}>
            Folio set in <em>Fraunces</em> &amp; <em>Plus Jakarta Sans</em>.
            Handmade. Independent.
          </p>
        </div>
      </section>
    </div>
  )
}
