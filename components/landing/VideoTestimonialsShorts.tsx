'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getYouTubeId, youTubeThumbnail, youTubeEmbedUrl } from '@/lib/youtube'
import styles from './VideoTestimonialsShorts.module.css'

export type VideoTestimonial = {
  /** Any YouTube URL — /shorts/<id>, /watch?v=<id>, or youtu.be/<id> */
  url: string
  /** Person who appears in the testimonial (e.g. "Dr. Dheeraj Dubay") */
  name: string
  /** Their title or specialization (e.g. "Orthodontist") */
  title?: string
  /** Their organization or clinic */
  org?: string
  /** City / location */
  location?: string
}

type Props = {
  /** Array of testimonial videos. Add by pasting YouTube URLs into your data file. */
  videos: VideoTestimonial[]
  /** Section tag pill text (e.g. "REAL DOCTORS, REAL RESULTS") */
  tag?: string
  /** Section headline */
  headline?: string
  /** Section subheadline (optional) */
  subhead?: string
}

export default function VideoTestimonialsShorts({
  videos,
  tag = 'REAL CLIENTS, REAL RESULTS',
  headline = 'Hear it from our clients',
  subhead,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Lock body scroll while modal open
  useEffect(() => {
    if (!activeId) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [activeId])

  // Close on Escape
  useEffect(() => {
    if (!activeId) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveId(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeId])

  // Pre-resolve IDs once so we don't re-parse on every render
  const items = videos
    .map((v) => ({ ...v, id: getYouTubeId(v.url) }))
    .filter((v): v is VideoTestimonial & { id: string } => v.id !== null)

  return (
    <section className={styles.section} aria-label="Video testimonials">
      <div className={styles.aurora} aria-hidden>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={`${styles.inner} container-x`}>
        <div className={styles.header}>
          <span className="section-tag">{tag}</span>
          <h2 className={styles.headline}>{headline}</h2>
          {subhead && <p className={styles.subhead}>{subhead}</p>}
        </div>

        {items.length === 0 ? (
          <p className={styles.emptyState}>
            Video testimonials coming soon — add YouTube Shorts URLs to your data file to populate this section.
          </p>
        ) : (
          <div className={styles.scroller} role="list">
            {items.map((v) => (
              <motion.button
                key={v.id}
                role="listitem"
                className={styles.card}
                onClick={() => setActiveId(v.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                aria-label={`Play testimonial from ${v.name}`}
              >
                <div className={styles.thumbWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={youTubeThumbnail(v.id, 'hq')}
                    alt=""
                    loading="lazy"
                    className={styles.thumb}
                    onError={(e) => {
                      // hqdefault always exists; if it fails, hide gracefully
                      e.currentTarget.style.opacity = '0.3'
                    }}
                  />
                  <span className={styles.playBadge} aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </span>
                </div>
                <div className={styles.meta}>
                  <p className={styles.name}>{v.name}</p>
                  {v.title && <p className={styles.title}>{v.title}</p>}
                  {(v.org || v.location) && (
                    <p className={styles.org}>
                      {v.org}{v.org && v.location ? ' · ' : ''}{v.location}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Modal — rendered into document.body via portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeId && (
            <motion.div
              className={styles.modalRoot}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveId(null)}
            >
              <motion.div
                className={styles.modalCard}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.modalClose}
                  onClick={() => setActiveId(null)}
                  aria-label="Close video"
                >
                  ×
                </button>
                <div className={styles.modalAspect}>
                  <iframe
                    src={youTubeEmbedUrl(activeId, { autoplay: true })}
                    title="Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.modalIframe}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}
