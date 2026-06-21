'use client'

import { motion } from 'framer-motion'

/**
 * AIConsultant — white-bg homepage section pitching "GrowthBot", the AI growth
 * consultant. Left column = copy + numbered steps; right column = a static
 * chat-preview card. Purely presentational (no client state beyond Framer's
 * entrance animation).
 */
export default function AIConsultant() {
  const steps = [
    { n: '1', text: "Understands the visitor's goal & industry" },
    { n: '2', text: 'Recommends services & proves expertise with real results' },
    { n: '3', text: 'Qualifies budget & timeline, then books the free audit' },
    { n: '✓', text: 'Syncs the qualified lead to your CRM automatically', teal: true },
  ]

  return (
    <section className="bg-white py-[92px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] p-[56px] max-md:p-7"
          style={{ background: 'linear-gradient(135deg,#13141d,#1c1d2b)' }}
        >
          {/* Blurred orange orb */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[160px] -left-[120px] h-[420px] w-[420px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(255,107,53,.18), transparent 70%)' }}
          />

          <div className="relative grid grid-cols-2 items-center gap-12 max-md:grid-cols-1">
            {/* LEFT */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(255,107,53,.14)', border: '1px solid rgba(255,107,53,.3)' }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: '#00D4AA', boxShadow: '0 0 8px rgba(0,212,170,.8)' }}
                />
                <span className="text-[11.5px] font-extrabold uppercase tracking-wide" style={{ color: '#FF9A5A' }}>
                  Always on · 24/7
                </span>
              </span>

              <h2 className="mt-5 text-[38px] font-extrabold leading-[1.1] text-white max-md:text-[26px]">
                Meet GrowthBot — your AI growth consultant.
              </h2>

              <p className="mt-4 max-w-[440px] text-[16.5px]" style={{ color: '#a8a8c0' }}>
                Every visitor gets an instant expert conversation. GrowthBot understands their goal,
                recommends the right service — from performance ads to our new Staffing &amp; Recruiting
                growth — qualifies budget &amp; timeline, books the audit, and drops a clean lead straight
                into your CRM.
              </p>

              <ul className="mt-7 flex flex-col gap-3.5">
                {steps.map((s) => (
                  <li key={s.n} className="flex items-center gap-3.5">
                    <span
                      className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full text-[14px] font-bold"
                      style={
                        s.teal
                          ? { background: 'rgba(0,212,170,.14)', color: '#00D4AA' }
                          : { background: 'rgba(255,107,53,.14)', color: '#FF9A5A' }
                      }
                    >
                      {s.n}
                    </span>
                    <span className="text-[15px]" style={{ color: '#e6e6f0' }}>
                      {s.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — chat preview card */}
            <div
              className="overflow-hidden rounded-[20px] bg-white"
              style={{ boxShadow: '0 30px 70px rgba(0,0,0,.4)' }}
            >
              {/* Header bar */}
              <div
                className="flex items-center gap-3 p-4"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
              >
                <span
                  className="grid h-[34px] w-[34px] place-items-center rounded-full text-[14px] font-bold text-white"
                  style={{ background: 'rgba(255,255,255,.25)' }}
                >
                  GB
                </span>
                <div>
                  <div className="text-[14.5px] font-extrabold text-white">GrowthBot</div>
                  <div className="flex items-center gap-1.5 text-[11.5px]" style={{ color: 'rgba(255,255,255,.8)' }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#bdf5c8' }} />
                    AI Growth Consultant · Online
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3 p-5" style={{ background: '#faf9f7' }}>
                <div
                  className="rounded-[14px_14px_14px_4px] bg-white p-3 text-[13.5px]"
                  style={{ border: '1px solid rgba(17,18,26,.08)', color: '#11121a' }}
                >
                  Hey 👋 I&apos;m GrowthBot. Tell me your goal and I&apos;ll map the fastest path. What are you
                  looking to grow?
                </div>

                <div
                  className="self-end rounded-[14px_14px_4px_14px] p-3 text-[13.5px] text-white"
                  style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
                >
                  More leads for my clinic 🏥
                </div>

                <div
                  className="rounded-[14px_14px_14px_4px] bg-white p-3 text-[13.5px]"
                  style={{ border: '1px solid rgba(17,18,26,.08)', color: '#11121a' }}
                >
                  Perfect — healthcare is one of our strongest verticals. Dr. Dubay scaled to 35,000+ leads
                  with us. Roughly what&apos;s your monthly ad budget?
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Under ₹50K', '₹50K–1L', '₹1L–3L'].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full px-3 py-1 text-[12px]"
                      style={{ border: '1px solid #FF6B35', color: '#FF6B35', background: 'rgba(255,107,53,.07)' }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer bar */}
              <div className="flex items-center gap-2 p-3" style={{ background: '#11121a' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: '#00D4AA' }} />
                <span className="text-[11px]" style={{ color: '#9c9cb5' }}>
                  Qualified lead syncing to CRM…
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
