'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import type { NavLink as NavLinkT } from '@/lib/content/international-landing/types'

/**
 * Compact sticky header shared by every international-landing-page market.
 * Logo + in-page nav (desktop) collapse into a full-screen mobile menu below
 * `lg`. The primary CTA renders exactly once per breakpoint via Tailwind's
 * `hidden`/`sm:block` pair — this is the fix for the CSS-specificity bug
 * that used to leak a duplicate desktop CTA (the earlier version relied on a
 * conditional class order more fragile than this hidden/sm:block pair
 * combined with the `!menuOpen` guard on the standalone mobile CTA bar
 * below). Verify after any change: only one CTA should ever be visible at
 * a given viewport width.
 */
export type HeaderProps = {
  nav: NavLinkT[]
  ctaLabel: string
  eventPrefix: string
  ctaHref?: string
  logoHref?: string
}

export default function Header({ nav, ctaLabel, eventPrefix, ctaHref = '#lead-form', logoHref = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [menuOpen])

  const cta = (location: string) => (
    <CtaButton
      href={ctaHref}
      label={ctaLabel}
      size="compact"
      onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location })}
    />
  )

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: '1px solid var(--border-hair)',
        }}
      >
        <div
          className="container-x flex items-center justify-between"
          style={{ padding: 'clamp(10px, 2vw, 14px) clamp(16px, 4vw, 40px)' }}
        >
          <Link href={logoHref} aria-label="Growth Escalators — Home" className="inline-flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Growth Escalators" style={{ height: 30, width: 'auto', display: 'block' }} loading="eager" />
          </Link>

          <nav aria-label="Page sections" className="hidden lg:flex items-center" style={{ gap: 26, fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)' }}>
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="il-nav-link" style={{ transition: 'color 0.2s' }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center" style={{ gap: 14 }}>
            <div className="hidden sm:block">{cta('header')}</div>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center"
              style={{ width: 40, height: 40 }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls={mobileMenuId}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id={mobileMenuId}
          className="lg:hidden fixed inset-0 z-40"
          style={{ background: 'var(--bg-primary)', paddingTop: 76 }}
        >
          <div className="container-x flex flex-col" style={{ gap: 4, padding: '16px 24px' }}>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between"
                style={{
                  padding: '16px 0', fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em',
                  color: 'var(--text-primary)', borderBottom: '1px solid var(--border-hair)',
                }}
              >
                {l.label}
                <span style={{ color: 'var(--text-muted)', fontSize: 16 }}>→</span>
              </a>
            ))}
            <div className="mt-6">{cta('mobile_menu')}</div>
          </div>
        </div>
      )}

      {!menuOpen && (
        <div className="sm:hidden" style={{ padding: '10px clamp(16px,4vw,40px)', borderBottom: '1px solid var(--border-hair)' }}>
          {cta('header_mobile')}
        </div>
      )}

      <style jsx>{`
        :global(.il-nav-link):hover { color: var(--orange) !important; }
      `}</style>
    </>
  )
}
