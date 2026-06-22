'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

/* Per the design handoff: the homepage nav is Services / Staffing(new) /
   Industries / Work / Contact. Home is reached via the logo. */
type NavItem = { label: string; href: string; badge?: 'new' }
const NAV: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Staffing', href: '/staffing', badge: 'new' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Work', href: '/work' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

function Logo() {
  return (
    <Link href="/" aria-label="Growth Escalators — Home" className="inline-flex items-center gap-[11px]">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="geNav" x1="3" y1="29" x2="29" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" />
            <stop offset="1" stopColor="#FF9A5A" />
          </linearGradient>
        </defs>
        <rect x="3" y="19" width="6" height="10" rx="2" fill="url(#geNav)" opacity="0.45" />
        <rect x="13" y="13" width="6" height="16" rx="2" fill="url(#geNav)" opacity="0.75" />
        <rect x="23" y="6" width="6" height="23" rx="2" fill="url(#geNav)" />
        <path d="M19.5 10.5 L27 4" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22.6 4 L27.2 4 L27.2 8.6" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span
        className="brand-wordmark"
        style={{ fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}
      >
        Growth Escalators
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change.
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: '1px solid var(--border-hair)',
        }}
      >
        <div className="container-x flex items-center justify-between" style={{ padding: 'clamp(12px, 2vw, 16px) clamp(16px, 4vw, 40px)' }}>
          <Logo />

          {/* Center links — desktop */}
          <div className="hidden lg:flex items-center" style={{ gap: 30, fontSize: 14.5, fontWeight: 600, color: 'var(--text-secondary)' }}>
            {NAV.map((link) => {
              const isStaffing = link.badge === 'new'
              const isActive = pathname === link.href || (link.href === '/#industries' && pathname === '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link inline-flex items-center"
                  style={{
                    gap: 6,
                    color: isStaffing ? 'var(--orange)' : (isActive ? 'var(--orange)' : 'var(--text-secondary)'),
                    transition: 'color 0.25s',
                  }}
                >
                  {link.label}
                  {link.badge === 'new' && (
                    <span
                      style={{
                        fontSize: 9, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                        background: 'var(--orange)', color: '#fff',
                        padding: '2px 6px', borderRadius: 5,
                      }}
                    >
                      New
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center" style={{ gap: 16 }}>
            <a
              href="tel:+917733888883"
              className="hidden md:inline"
              style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}
            >
              +91 77338 88883
            </a>
            <Link
              href="/#book"
              className="hidden md:inline-flex items-center justify-center btn-audit"
              style={{
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                color: '#fff',
                fontSize: 14, fontWeight: 800,
                padding: '11px 22px',
                borderRadius: 10,
                boxShadow: '0 4px 16px rgba(255, 107, 53, 0.30)',
                transition: 'transform .25s, box-shadow .25s',
              }}
            >
              Get Free Audit
            </Link>

            <button
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-5 h-[2px] transition-all duration-300 rounded-full"
                  style={{
                    background: 'var(--text-primary)',
                    opacity: i === 1 && menuOpen ? 0 : 1,
                    transform:
                      i === 0 && menuOpen ? 'rotate(45deg) translateY(7px)'
                      : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'var(--bg-primary)', paddingTop: 80 }}
          >
            <div className="container-x flex flex-col" style={{ gap: 4, padding: '16px 24px' }}>
              {NAV.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4"
                    style={{
                      fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em',
                      color: link.badge === 'new' ? 'var(--orange)' : 'var(--text-primary)',
                      borderBottom: '1px solid var(--border-hair)',
                    }}
                  >
                    <span className="inline-flex items-center gap-2">
                      {link.label}
                      {link.badge === 'new' && (
                        <span
                          style={{
                            fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                            background: 'var(--orange)', color: '#fff',
                            padding: '2px 7px', borderRadius: 5,
                          }}
                        >
                          New
                        </span>
                      )}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 16 }}>→</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + NAV.length * 0.05, duration: 0.35 }}
                className="mt-6 flex flex-col gap-3"
              >
                <a href="tel:+917733888883" style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-secondary)' }}>
                  +91 77338 88883
                </a>
                <Link
                  href="/#book"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                    color: '#fff', fontSize: 16, fontWeight: 800,
                    padding: '14px 22px', borderRadius: 12,
                    boxShadow: '0 8px 26px rgba(255, 107, 53, 0.34)',
                  }}
                >
                  Get Free Audit →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        :global(.nav-link):hover { color: var(--orange) !important; }
        :global(.btn-audit):hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,.4); }
        :global(.brand-wordmark) { font-size: 17px; }
        @media (min-width: 480px) { :global(.brand-wordmark) { font-size: 19px; } }
        /* Hide the very small wordmark on extra-tight screens (<360px) so the
           logo + hamburger + button never collide. */
        @media (max-width: 359px) {
          :global(.brand-wordmark) { display: none; }
        }
      `}</style>
    </>
  )
}
