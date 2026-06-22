'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    initial: 'M',
    name: 'Muaaz Shaikh',
    platform: 'Google Review',
    gradient: 'linear-gradient(135deg,#FF6B35,#FF8C5A)',
    body: 'Consistently strong results — noticeable improvements in traffic and conversions. Knowledgeable, responsive, and truly invested in their clients.',
  },
  {
    initial: 'R',
    name: 'Richa Jain',
    platform: 'Google Review',
    gradient: 'linear-gradient(135deg,#6C63FF,#9c8fff)',
    body: 'From the initial consultation to the final launch, the team was incredibly professional and attentive to every detail. Highly recommend!',
  },
  {
    initial: 'S',
    name: 'Dr. Sumit Doraya',
    platform: 'Google Review',
    gradient: 'linear-gradient(135deg,#00D4AA,#00b894)',
    body: 'Excellent, affordable service. The team delivered exactly what was promised — on time and within budget. Very impressed with the quality.',
  },
]

export default function Testimonials() {
  return (
    <section className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 92px) clamp(20px, 4vw, 40px)' }}>
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(0,212,170,0.07), transparent 70%)',
          top: 60, right: -100,
          animation: 'orb-drift-2 34s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
        style={{ marginBottom: 48 }}
      >
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
          In their words
        </span>
        <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.025em', margin: '14px 0 0', color: 'var(--text-primary)' }}>
          Loved by 187+ growing brands
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative"
            style={{
              borderRadius: 18,
              padding: 28,
            }}
          >
            <div className="flex" style={{ color: 'var(--gold)', marginBottom: 14, gap: 1 }} aria-label="5 stars">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} size={15} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: '#2a2a3a', margin: '0 0 22px' }}>
              &ldquo;{r.body}&rdquo;
            </p>
            <div className="flex items-center" style={{ gap: 11 }}>
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: r.gradient, color: '#fff', fontWeight: 800,
                }}
              >
                {r.initial}
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--text-primary)' }}>{r.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{r.platform}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
