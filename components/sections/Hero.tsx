'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, animate, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Play, Trophy } from 'lucide-react'
import MagneticLink from '@/components/ui/MagneticLink'

const easeOut = [0.16, 1, 0.3, 1] as const

// Word-by-word headline reveal — mask wrapper + slide-up inner.
const LINE_1 = ['We', 'don’t', 'just', 'market.']
const LINE_2 = ['We', 'escalate', 'brands.']

function WordReveal({
  words, baseDelay, accentIndex,
}: { words: string[]; baseDelay: number; accentIndex?: number }) {
  return (
    <>
      {words.map((w, i) => (
        <span
          key={`${baseDelay}-${i}`}
          className="word-mask"
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.06em' }}
        >
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: baseDelay + i * 0.06, duration: 0.7, ease: easeOut }}
            style={{
              display: 'inline-block',
              color: i === accentIndex ? 'var(--orange)' : 'inherit',
              willChange: 'transform',
            }}
          >
            {w}{i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </>
  )
}

// Animated +930% counter that ticks up when visible.
function HeroSalesCounter() {
  const v = useMotionValue(0)
  const [n, setN] = useState(0)
  const [shown, setShown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const obs = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !shown) {
        setShown(true)
        const ctl = animate(v, 930, {
          duration: 1.8, ease: easeOut as unknown as 'easeOut',
          onUpdate: (latest) => setN(Math.round(latest)),
        })
        return () => ctl.stop()
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [v, shown])

  return (
    <div ref={ref} style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
      +{n}%
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  // Scroll-linked orb parallax: orb drifts down as user scrolls.
  const orbY = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 120])
  const orbX = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : -40])

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, var(--bg-secondary) 100%)' }}>
      {/* Drifting orange orb (now scroll-linked) */}
      <motion.div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute',
          width: 560, height: 560, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.13), transparent 70%)',
          top: -180, right: -120,
          x: orbX,
          y: orbY,
          animation: 'orbA 22s ease-in-out infinite',
        }}
      />

      <div className="container-x relative">
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: '1fr',
            padding: 'clamp(40px, 7vw, 84px) clamp(20px, 4vw, 40px) clamp(56px, 8vw, 92px)',
            gap: 48,
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center"
            style={{ gap: 'clamp(32px, 5vw, 56px)' }}
          >
            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <div
                className="inline-flex items-center"
                style={{
                  gap: 9,
                  border: '1px solid rgba(255,107,53,0.25)',
                  background: 'rgba(255,107,53,0.06)',
                  padding: '7px 16px',
                  borderRadius: 999,
                  marginBottom: 26,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)' }} />
                <span
                  style={{
                    fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: 'var(--orange)',
                  }}
                >
                  AI-First Performance Marketing
                </span>
              </div>

              <h1
                aria-label="We don’t just market. We escalate brands."
                style={{
                  fontSize: 'clamp(34px, 6vw, 60px)',
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: '-0.035em',
                  margin: '0 0 22px',
                  color: 'var(--text-primary)',
                }}
              >
                <span style={{ display: 'block' }}>
                  <WordReveal words={LINE_1} baseDelay={0.15} />
                </span>
                <span style={{ display: 'block' }}>
                  <WordReveal words={LINE_2} baseDelay={0.45} accentIndex={1} />
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18, lineHeight: 1.65, color: 'var(--text-secondary)',
                  maxWidth: 480, margin: '0 0 34px',
                }}
              >
                10,000+ campaigns run. 187+ brands scaled. 97% of clients stay. We turn marketing
                budgets into measurable, predictable revenue.
              </p>

              <div className="flex flex-wrap items-center" style={{ gap: 20, marginBottom: 30 }}>
                <MagneticLink
                  href="/#book"
                  className="btn-cta"
                  strength={0.18}
                  style={{
                    background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                    color: '#fff',
                    fontSize: 16, fontWeight: 800,
                    padding: '16px 34px',
                    borderRadius: 12,
                    boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                    display: 'inline-block',
                  }}
                >
                  Get Your Free Audit →
                </MagneticLink>
                <Link
                  href="/work"
                  className="inline-flex items-center"
                  style={{ gap: 9, fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}
                >
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: '1.5px solid rgba(17,18,26,0.18)',
                    }}
                  >
                    <Play size={14} fill="currentColor" />
                  </span>
                  See client results
                </Link>
              </div>

              {/* Trust row */}
              <div
                className="flex items-center"
                style={{ gap: 14, paddingTop: 24, borderTop: '1px solid var(--border-hair-2)' }}
              >
                <div className="flex">
                  <Avatar gradient="linear-gradient(135deg,#FF6B35,#FF8C5A)">M</Avatar>
                  <Avatar gradient="linear-gradient(135deg,#6C63FF,#9c8fff)" pull>R</Avatar>
                  <Avatar gradient="linear-gradient(135deg,#00D4AA,#00b894)" pull>S</Avatar>
                  <Avatar gradient="#11121a" pull small>+184</Avatar>
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>187+ brands</strong>{' '}
                  trust us with their growth
                </div>
              </div>
            </motion.div>

            {/* ── Right column: results dashboard card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--border-hair-2)',
                  borderRadius: 22,
                  boxShadow: '0 30px 70px rgba(17,18,26,0.12)',
                  padding: 'clamp(18px, 3.5vw, 26px)',
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
                  <div className="flex items-center" style={{ gap: 9 }}>
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 30, height: 30, borderRadius: 8,
                        background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                        color: '#fff', fontWeight: 800, fontSize: 13,
                      }}
                    >
                      P
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>Paraiso Comfortwears</div>
                      <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Last 30 days</div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 11, fontWeight: 700, color: 'var(--teal-dark)',
                      background: 'rgba(0,212,170,0.1)', padding: '4px 10px', borderRadius: 999,
                    }}
                  >
                    ● Live
                  </span>
                </div>

                <div className="flex items-end justify-between" style={{ marginBottom: 6 }}>
                  <div>
                    <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 2 }}>
                      Sales Growth
                    </div>
                    <HeroSalesCounter />
                  </div>
                  <div
                    style={{
                      fontSize: 13, fontWeight: 800, color: 'var(--teal-dark)',
                      background: 'rgba(0,212,170,0.1)', padding: '5px 11px', borderRadius: 8,
                    }}
                  >
                    ↑ 10.3×
                  </div>
                </div>

                <svg viewBox="0 0 320 90" style={{ width: '100%', height: 78, margin: '8px 0 18px', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="hroFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="rgba(255,107,53,.22)" />
                      <stop offset="1" stopColor="rgba(255,107,53,0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,78 L40,72 L80,74 L120,60 L160,55 L200,38 L240,30 L280,16 L320,6 L320,90 L0,90 Z"
                    fill="url(#hroFill)"
                  />
                  <path
                    d="M0,78 L40,72 L80,74 L120,60 L160,55 L200,38 L240,30 L280,16 L320,6"
                    fill="none"
                    stroke="var(--orange)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="620"
                    strokeDashoffset="620"
                    style={{ animation: 'dashDraw 2s ease-out 0.3s forwards' }}
                  />
                </svg>

                <div className="grid grid-cols-3" style={{ gap: 10 }}>
                  <MiniStat color="var(--orange)" label="Reach">20M+</MiniStat>
                  <MiniStat color="var(--violet)" label="Top reel">5M</MiniStat>
                  <MiniStat color="var(--teal-dark)" label="ROAS">10×</MiniStat>
                </div>
              </div>

              {/* Floating Forbes proof chip — absolute on desktop, inline below card on mobile */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-chip"
                style={{
                  background: '#fff',
                  border: '1px solid var(--border-hair-2)',
                  borderRadius: 14,
                  boxShadow: '0 16px 40px rgba(17,18,26,0.14)',
                  padding: '12px 16px',
                  display: 'flex', alignItems: 'center', gap: 11,
                }}
              >
                <span
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,200,61,0.16)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)',
                  }}
                >
                  <Trophy size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>Forbes Record Holder</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Dr. Dubay · 35k+ leads</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.btn-cta:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
        @keyframes orbA { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-40px); } }
        @keyframes dashDraw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          [style*="orbA"] { animation: none !important; }
        }
        /* Forbes chip — desktop: floats over the card; mobile: stacks inline below. */
        :global(.hero-chip) {
          position: relative;
          margin-top: 14px;
          width: 100%;
        }
        @media (min-width: 640px) {
          :global(.hero-chip) {
            position: absolute;
            bottom: -22px;
            left: -26px;
            margin-top: 0;
            width: auto;
          }
        }
      `}</style>
    </section>
  )
}

function Avatar({ gradient, children, pull, small }: { gradient: string; children: React.ReactNode; pull?: boolean; small?: boolean }) {
  return (
    <span
      style={{
        width: 36, height: 36, borderRadius: '50%',
        background: gradient,
        border: '2px solid #fff',
        marginLeft: pull ? -10 : 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
        fontWeight: small ? 700 : 800,
        fontSize: small ? 11 : 13,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </span>
  )
}

function MiniStat({ color, label, children }: { color: string; label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-warm)', borderRadius: 12, padding: 13 }}>
      <div style={{ fontSize: 18, fontWeight: 800, color }}>{children}</div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
    </div>
  )
}
