'use client'

import { motion } from 'framer-motion'

const STEPS = [
  { n: '1',  text: 'Understands the visitor’s goal & industry' },
  { n: '2',  text: 'Recommends services & proves expertise with real results' },
  { n: '3',  text: 'Qualifies budget & timeline, then books the free audit' },
  { n: '✓',  text: 'Syncs the qualified lead to your CRM automatically', tone: 'teal' as const },
]

export default function AIConsultant() {
  return (
    <section className="container-x" style={{ padding: 'clamp(56px, 9vw, 92px) clamp(20px, 4vw, 40px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--bg-dark-elev), var(--bg-dark-elev2))',
          borderRadius: 28,
          padding: 'clamp(28px, 5vw, 56px) clamp(20px, 3.5vw, 32px)',
          color: '#fff',
        }}
      >
        {/* Soft orange orb */}
        <div
          aria-hidden
          className="pointer-events-none"
          style={{
            position: 'absolute',
            width: 420, height: 420, borderRadius: '50%',
            filter: 'blur(120px)',
            background: 'radial-gradient(circle, rgba(255,107,53,0.18), transparent 70%)',
            top: -160, left: -120,
          }}
        />

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center relative"
          style={{ gap: 48 }}
        >
          {/* Left: copy */}
          <div>
            <div
              className="inline-flex items-center"
              style={{
                gap: 8,
                background: 'rgba(255,107,53,0.14)',
                border: '1px solid rgba(255,107,53,0.30)',
                padding: '6px 14px', borderRadius: 999,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--teal)',
                  boxShadow: '0 0 0 3px rgba(0,212,170,0.2)',
                }}
              />
              <span
                style={{
                  fontSize: 11.5, fontWeight: 800, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--orange-mid)',
                }}
              >
                Always on · 24/7
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.8vw, 38px)',
                fontWeight: 800, letterSpacing: '-0.025em',
                lineHeight: 1.1, margin: '0 0 16px', color: '#fff',
              }}
            >
              Meet GrowthBot — your AI growth consultant.
            </h2>

            <p
              style={{
                fontSize: 16.5, color: 'var(--text-on-dark)',
                lineHeight: 1.7, margin: '0 0 26px', maxWidth: 440,
              }}
            >
              Every visitor gets an instant expert conversation. GrowthBot understands their goal,
              recommends the right service — from performance ads to our new Staffing &amp; Recruiting
              growth — qualifies budget &amp; timeline, books the audit, and drops a clean lead
              straight into your CRM.
            </p>

            <div className="flex flex-col" style={{ gap: 14 }}>
              {STEPS.map((s) => (
                <div key={s.n} className="flex items-center" style={{ gap: 13 }}>
                  <span
                    className="inline-flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 30, height: 30, borderRadius: 8,
                      background: s.tone === 'teal' ? 'rgba(0,212,170,0.16)' : 'rgba(255,107,53,0.14)',
                      color: s.tone === 'teal' ? 'var(--teal)' : 'var(--orange-mid)',
                      fontSize: 13, fontWeight: 800,
                    }}
                  >
                    {s.n}
                  </span>
                  <span style={{ fontSize: 15, color: '#e6e6f0' }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat preview card */}
          <div
            style={{
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 30px 70px rgba(0,0,0,0.4)',
              overflow: 'hidden',
            }}
          >
            <div
              className="flex items-center"
              style={{ gap: 11, padding: '15px 18px', background: 'linear-gradient(135deg, var(--orange), var(--orange-light))' }}
            >
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.22)',
                  color: '#fff', fontWeight: 800, fontSize: 13,
                }}
              >
                GB
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14.5, color: '#fff' }}>GrowthBot</div>
                <div className="flex items-center" style={{ gap: 5, fontSize: 11.5, color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bdf5c8' }} />
                  AI Growth Consultant · Online
                </div>
              </div>
            </div>

            <motion.div
              className="flex flex-col"
              style={{ gap: 12, padding: '20px 18px', background: 'var(--bg-warm)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
              }}
            >
              <ChatBubble side="bot">Hey 👋 I&rsquo;m GrowthBot. Tell me your goal and I&rsquo;ll map the fastest path. What are you looking to grow?</ChatBubble>
              <ChatBubble side="user">More leads for my clinic 🏥</ChatBubble>
              <ChatBubble side="bot">Perfect — healthcare is one of our strongest verticals. Dr. Dubay scaled to 35,000+ leads with us. Roughly what&rsquo;s your monthly ad budget?</ChatBubble>
              <motion.div
                className="flex flex-wrap"
                style={{ gap: 7, paddingTop: 2 }}
                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {['Under ₹50K', '₹50K–1L', '₹1L–3L'].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: 12, fontWeight: 600, color: 'var(--orange)',
                      border: '1px solid rgba(255,107,53,0.4)',
                      background: 'rgba(255,107,53,0.07)',
                      padding: '6px 12px', borderRadius: 999,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <div
              className="flex items-center justify-center"
              style={{ gap: 7, padding: '9px 14px', background: 'var(--bg-dark)' }}
            >
              <span style={{ fontSize: 11, color: 'var(--teal)' }}>●</span>
              <span style={{ fontSize: 11, color: 'var(--text-on-dark-mute)', fontWeight: 600 }}>
                Qualified lead syncing to CRM…
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ChatBubble({ side, children }: { side: 'bot' | 'user'; children: React.ReactNode }) {
  const variant = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  }
  if (side === 'bot') {
    return (
      <motion.div
        variants={variant}
        className="self-start"
        style={{
          maxWidth: '82%',
          background: '#fff',
          border: '1px solid var(--border-hair)',
          borderRadius: '14px 14px 14px 4px',
          padding: '11px 14px',
          fontSize: 13.5, lineHeight: 1.5,
          color: '#2a2a3a',
        }}
      >
        {children}
      </motion.div>
    )
  }
  return (
    <motion.div
      variants={variant}
      className="self-end"
      style={{
        maxWidth: '80%',
        background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
        color: '#fff',
        borderRadius: '14px 14px 4px 14px',
        padding: '11px 14px',
        fontSize: 13.5, lineHeight: 1.5,
      }}
    >
      {children}
    </motion.div>
  )
}
