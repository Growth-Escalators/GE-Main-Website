'use client'

import { motion } from 'framer-motion'

/* Monoline SVG icons — stroke=#FF6B35, width 2. Inlined per the design. */
function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}
function IconFunnel() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 4h18l-7 8v6l-4 2v-8z" />
    </svg>
  )
}
function IconMonitor() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l2.4 6.5L21 9l-5 4.2L17.5 21 12 17l-5.5 4L8 13.2 3 9l6.6-.5z" />
    </svg>
  )
}
function IconTrend() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 17l5-5 4 3 7-8" />
      <path d="M16 4h5v5" />
    </svg>
  )
}

const SERVICES = [
  { Icon: IconTarget,  title: 'Performance Marketing',   body: 'Meta, Google & YouTube ads engineered for ROAS. Every click tracked, every campaign tested.', stat: 'Avg. 120% ROAS lift' },
  { Icon: IconFunnel,  title: 'Funnels & Automation',    body: 'End-to-end lead funnels that turn cold traffic into paying customers — built and automated.', stat: '3× more qualified leads' },
  { Icon: IconMonitor, title: 'Web & Software',          body: 'Fast, conversion-built sites & custom software — Shopify, Next.js, full SaaS products.',     stat: '+40% conversion rate' },
  { Icon: IconPhone,   title: 'Social Media Marketing',  body: 'Content & community that builds brand equity and consistent, compounding engagement.',      stat: '2× engagement rate' },
  { Icon: IconStar,    title: 'Branding & Identity',     body: 'Logo, visual identity & brand systems that make you unmistakable and unforgettable.',       stat: 'Used by 100+ brands' },
  { Icon: IconTrend,   title: 'AI SEO & Growth',         body: 'AI-powered organic systems that compound — content, technical SEO, authority building.',   stat: 'First page in 90 days' },
]

export default function Services() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}
    >
      {/* Aurora orbs — portfolio-style ambient depth */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 460, height: 460, borderRadius: '50%',
          filter: 'blur(100px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          top: -120, left: -100,
          animation: 'orb-drift-1 26s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 420, height: 420, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(108,99,255,0.08), transparent 70%)',
          bottom: -160, right: -100,
          animation: 'orb-drift-2 32s ease-in-out infinite',
        }}
      />
      <div className="container-x relative" style={{ padding: 'clamp(56px, 9vw, 92px) clamp(20px, 4vw, 40px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
          style={{ marginBottom: 52 }}
        >
          <span
            style={{
              fontSize: 12, fontWeight: 800, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--orange)',
            }}
          >
            What we do
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.025em',
              margin: '14px 0 12px', color: 'var(--text-primary)',
            }}
          >
            One team for your entire growth engine
          </h2>
          <p
            style={{
              fontSize: 17, color: 'var(--text-secondary)',
              maxWidth: 560, margin: '0 auto', lineHeight: 1.6,
            }}
          >
            From the first click to the closed sale — strategy, ads, funnels, and the tech to run them, under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
          {SERVICES.map((svc, i) => {
            const { Icon } = svc
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="svc-card glass"
                style={{
                  padding: 30,
                  borderRadius: 18,
                  transition: 'transform .35s cubic-bezier(.25,.46,.45,.94), box-shadow .35s, border-color .35s',
                }}
              >
                <div
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(255,107,53,0.10)',
                    marginBottom: 18,
                  }}
                >
                  <Icon />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 800, margin: '0 0 9px', color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 14px' }}>
                  {svc.body}
                </p>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--orange)' }}>{svc.stat}</span>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        :global(.svc-card:hover) {
          transform: translateY(-4px);
          border-color: rgba(255,107,53,0.35) !important;
          box-shadow: 0 16px 40px rgba(255,107,53,0.10) !important;
        }
      `}</style>
    </section>
  )
}
