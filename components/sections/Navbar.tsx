'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackLead } from '@/lib/analytics'

type MenuKey = 'services' | 'industries' | 'technology'
type MenuItem = { label: string; href: string; description: string }

const MENUS: Record<MenuKey, { label: string; items: MenuItem[] }> = {
  services: {
    label: 'Services',
    items: [
      { label: 'Performance Marketing', href: '/services', description: 'Paid media, funnels and conversion.' },
      { label: 'D2C Growth', href: '/d2c', description: 'Commerce acquisition and retention.' },
      { label: 'Creative & Social', href: '/services', description: 'Creative systems built for demand.' },
      { label: 'SEO & Organic', href: '/services', description: 'Search-led authority and discovery.' },
    ],
  },
  industries: {
    label: 'Industries',
    items: [
      { label: 'D2C & Ecommerce', href: '/d2c', description: 'Growth for product-led brands.' },
      { label: 'Healthcare', href: '/doctors-marketing-agency-jaipur', description: 'Patient acquisition and reputation.' },
      { label: 'B2B', href: '/b2b-lead-generation-agency', description: 'Pipeline creation for complex sales.' },
      { label: 'Explore Industries', href: '/#industries', description: 'See how capabilities connect by market.' },
    ],
  },
  technology: {
    label: 'Technology',
    items: [
      { label: 'Web & Commerce', href: '/portfolio', description: 'Shopify, Next.js and conversion UX.' },
      { label: 'AI & Automation', href: '/services', description: 'Practical automation tied to growth.' },
      { label: 'GrowthBot', href: '/#book', description: 'Intent, qualification and lead handoff.' },
      { label: 'Technology Staffing', href: '/staffing', description: 'India-based screened technology talent.' },
    ],
  },
}

const DIRECT = [
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobilePanel, setMobilePanel] = useState<MenuKey | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(null), 160)
  }

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
    setMobilePanel(null)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(null)
        setMobileOpen(false)
        setMobilePanel(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className={`ge-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
        <div className="ge-nav-inner">
          <Link href="/" className="ge-logo" aria-label="Growth Escalators home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="Growth Escalators" />
          </Link>

          <div className="ge-desktop-nav">
            {(Object.keys(MENUS) as MenuKey[]).map((key) => (
              <button
                key={key}
                type="button"
                className="ge-nav-trigger"
                aria-expanded={open === key}
                onMouseEnter={() => { cancelClose(); setOpen(key) }}
                onMouseLeave={scheduleClose}
                onFocus={() => { cancelClose(); setOpen(key) }}
                onClick={() => setOpen(open === key ? null : key)}
              >
                {MENUS[key].label} <span aria-hidden>⌄</span>
              </button>
            ))}
            {DIRECT.map((item) => (
              <Link key={item.href} href={item.href} className="ge-nav-direct">{item.label}</Link>
            ))}
          </div>

          <div className="ge-nav-actions">
            <a href="tel:+917733888883" className="ge-phone" onClick={() => trackLead('call')}>+91 77338 88883</a>
            <Link href="/#book" className="ge-audit">Get Free Audit</Link>
            <button
              type="button"
              className="ge-menu-button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => { setMobileOpen((value) => !value); setMobilePanel(null) }}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <>
          <div className="ge-mega" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <div className="ge-mega-inner">
              <div className="ge-mega-label">
                <span>Explore</span>
                <strong>{MENUS[open].label}</strong>
              </div>
              <div className="ge-mega-links">
                {MENUS[open].items.map((item) => (
                  <Link key={`${open}-${item.label}`} href={item.href} onClick={() => setOpen(null)}>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
              <Link href="/work" className="ge-mega-feature" onClick={() => setOpen(null)}>
                <span>Featured work</span>
                <strong>See how connected execution turns into measurable outcomes.</strong>
                <b>Explore case studies ↗</b>
              </Link>
            </div>
          </div>
          <button className="ge-backdrop" aria-label="Close navigation menu" onClick={() => setOpen(null)} />
        </>
      )}

      {mobileOpen && (
        <div className="ge-mobile-menu">
          <div className="ge-mobile-inner">
            {mobilePanel ? (
              <>
                <button className="ge-mobile-back" type="button" onClick={() => setMobilePanel(null)}>← Back</button>
                <p className="ge-mobile-title">{MENUS[mobilePanel].label}</p>
                {MENUS[mobilePanel].items.map((item) => (
                  <Link key={item.label} href={item.href} className="ge-mobile-link">
                    <strong>{item.label}</strong><span>{item.description}</span>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {(Object.keys(MENUS) as MenuKey[]).map((key) => (
                  <button key={key} type="button" className="ge-mobile-root" onClick={() => setMobilePanel(key)}>
                    {MENUS[key].label}<span>→</span>
                  </button>
                ))}
                {DIRECT.map((item) => <Link key={item.href} href={item.href} className="ge-mobile-root">{item.label}<span>↗</span></Link>)}
                <Link href="/contact" className="ge-mobile-root">Contact<span>↗</span></Link>
                <Link href="/#book" className="ge-mobile-audit">Get Free Audit ↗</Link>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.ge-nav) { position: sticky; top: 0; z-index: 70; height: 78px; background: #fff; border-bottom: 1px solid rgba(10,19,36,.1); transition: box-shadow .2s ease; }
        :global(.ge-nav.is-scrolled) { box-shadow: 0 10px 30px rgba(7,27,59,.08); }
        :global(.ge-nav-inner) { width: min(100%,1440px); height: 100%; margin: 0 auto; padding: 0 clamp(24px,5vw,76px); display: flex; align-items: center; justify-content: space-between; gap: 28px; }
        :global(.ge-logo img) { width: auto; height: 34px; display: block; }
        :global(.ge-desktop-nav) { display: flex; align-items: center; gap: clamp(18px,2vw,31px); margin-left: auto; }
        :global(.ge-nav-trigger), :global(.ge-nav-direct) { min-height: 44px; display: inline-flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 700; color: #0a1324; }
        :global(.ge-nav-trigger:hover), :global(.ge-nav-direct:hover) { color: #f36b36; }
        :global(.ge-nav-actions) { display: flex; align-items: center; gap: 15px; }
        :global(.ge-phone) { font-size: 12px; font-weight: 700; white-space: nowrap; }
        :global(.ge-audit), :global(.ge-mobile-audit) { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; background: #f36b36; color: white; padding: 0 18px; font-size: 13px; font-weight: 800; }
        :global(.ge-menu-button) { display: none; width: 44px; height: 44px; align-items: center; justify-content: center; flex-direction: column; gap: 7px; }
        :global(.ge-menu-button span) { display: block; width: 22px; height: 2px; background: #0a1324; }
        :global(.ge-mega) { position: fixed; z-index: 65; top: 78px; left: 0; width: 100%; background: #fff; border-bottom: 1px solid rgba(10,19,36,.12); }
        :global(.ge-mega-inner) { width: min(100%,1440px); margin: 0 auto; padding: 44px clamp(24px,5vw,76px) 48px; display: grid; grid-template-columns: .42fr 1.18fr .7fr; gap: 52px; }
        :global(.ge-mega-label span), :global(.ge-mega-feature > span) { display: block; font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #f36b36; }
        :global(.ge-mega-label strong) { display: block; margin-top: 10px; font-size: 29px; letter-spacing: -.03em; }
        :global(.ge-mega-links) { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 34px; }
        :global(.ge-mega-links a) { padding: 14px 0 18px; border-bottom: 1px solid rgba(10,19,36,.12); }
        :global(.ge-mega-links strong), :global(.ge-mega-links span) { display: block; }
        :global(.ge-mega-links strong) { font-size: 17px; }
        :global(.ge-mega-links span) { margin-top: 5px; font-size: 12px; line-height: 1.45; color: #647083; }
        :global(.ge-mega-feature) { background: #071b3b; color: #fff; padding: 26px; min-height: 176px; display: flex; flex-direction: column; }
        :global(.ge-mega-feature strong) { margin: 20px 0 auto; font-size: 18px; line-height: 1.3; }
        :global(.ge-mega-feature b) { margin-top: 20px; font-size: 12px; }
        :global(.ge-backdrop) { position: fixed; inset: 78px 0 0; z-index: 60; width: 100%; background: rgba(7,27,59,.22); cursor: default; }
        :global(.ge-mobile-menu) { display: none; position: fixed; z-index: 66; inset: 78px 0 0; background: #f8f5ed; overflow: auto; }
        :global(.ge-mobile-inner) { padding: 26px 20px 52px; }
        :global(.ge-mobile-root) { width: 100%; min-height: 60px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(10,19,36,.14); font-size: 22px; font-weight: 800; color: #0a1324; text-align: left; }
        :global(.ge-mobile-back) { min-height: 44px; font-size: 14px; font-weight: 800; color: #f36b36; }
        :global(.ge-mobile-title) { font-size: 34px; font-weight: 800; letter-spacing: -.04em; margin: 20px 0 12px; }
        :global(.ge-mobile-link) { display: block; min-height: 74px; padding: 15px 0; border-bottom: 1px solid rgba(10,19,36,.14); }
        :global(.ge-mobile-link strong), :global(.ge-mobile-link span) { display: block; }
        :global(.ge-mobile-link strong) { font-size: 18px; }
        :global(.ge-mobile-link span) { margin-top: 5px; color: #657083; font-size: 12px; }
        :global(.ge-mobile-audit) { margin-top: 28px; min-height: 52px; }
        @media (max-width: 1120px) { :global(.ge-phone) { display:none; } :global(.ge-desktop-nav) { gap: 16px; } }
        @media (max-width: 900px) { :global(.ge-desktop-nav), :global(.ge-audit) { display:none; } :global(.ge-menu-button), :global(.ge-mobile-menu) { display:flex; } :global(.ge-mobile-menu) { display:block; } }
        @media (prefers-reduced-motion: reduce) { :global(.ge-nav) { transition:none; } }
      `}</style>
    </>
  )
}
