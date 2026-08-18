'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackLead } from '@/lib/analytics'

type MenuKey = 'services' | 'industries' | 'technology'
type MenuItem = { label: string; href: string; description: string }
type MenuConfig = { label: string; kicker: string; hubHref: string; hubLabel: string; items: MenuItem[] }

const MENUS: Record<MenuKey, MenuConfig> = {
  services: {
    label: 'Services',
    kicker: 'Connected capabilities',
    hubHref: '/services',
    hubLabel: 'View all services',
    items: [
      { label: 'Performance Marketing', href: '/performance-marketing-agency-jaipur', description: 'Meta Ads, Google Ads, funnels and measurable acquisition.' },
      { label: 'D2C Growth', href: '/d2c', description: 'Commerce acquisition, creative testing, CRO and retention.' },
      { label: 'Creative & Social', href: '/services', description: 'Creative systems and social execution built for demand.' },
      { label: 'SEO & Organic', href: '/services', description: 'Search-led authority, content and organic discovery.' },
    ],
  },
  industries: {
    label: 'Industries',
    kicker: 'Built for buyer journeys',
    hubHref: '/#industries',
    hubLabel: 'Explore all industries',
    items: [
      { label: 'D2C & Ecommerce', href: '/d2c', description: 'Growth systems for product-led and ecommerce brands.' },
      { label: 'Healthcare', href: '/doctors', description: 'Patient acquisition, reputation and local discovery.' },
      { label: 'Real Estate', href: '/real-estate', description: 'Qualified demand, site visits and lead scoring.' },
      { label: 'B2B & SaaS', href: '/b2b-lead-generation-agency', description: 'Pipeline creation, authority and long-cycle nurture.' },
    ],
  },
  technology: {
    label: 'Technology',
    kicker: 'Build + automate + scale',
    hubHref: '/#growthbot',
    hubLabel: 'Explore technology',
    items: [
      { label: 'Web & Commerce', href: '/website-development-company-jaipur', description: 'Conversion-led websites, Shopify and Next.js experiences.' },
      { label: 'Software & AI', href: '/software-development-company-jaipur', description: 'Software development, integrations and AI automation.' },
      { label: 'White-Label Development', href: '/white-label-software-development', description: 'Production engineering capacity delivered under your brand.' },
      { label: 'Technology Staffing', href: '/staffing', description: 'Screened India-based technology specialists for delivery teams.' },
    ],
  },
}

const DIRECT = [
  { label: 'Work', href: '/work' },
  { label: 'Portfolio', href: '/portfolio' },
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
    closeTimer.current = setTimeout(() => setOpen(null), 150)
  }

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
    setMobilePanel(null)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
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
              <div
                className="ge-nav-menu"
                key={key}
                onMouseEnter={() => { cancelClose(); setOpen(key) }}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={MENUS[key].hubHref}
                  className={`ge-nav-trigger ${open === key ? 'is-active' : ''}`}
                  onFocus={() => { cancelClose(); setOpen(key) }}
                  onClick={() => setOpen(null)}
                >
                  {MENUS[key].label}
                </Link>
                <button
                  type="button"
                  className={`ge-nav-plus ${open === key ? 'is-active' : ''}`}
                  aria-label={`Open ${MENUS[key].label} menu`}
                  aria-expanded={open === key}
                  aria-haspopup="true"
                  onFocus={() => { cancelClose(); setOpen(key) }}
                  onClick={() => setOpen(open === key ? null : key)}
                >
                  <span aria-hidden>+</span>
                </button>
              </div>
            ))}
            {DIRECT.map((item) => (
              <Link key={item.href} href={item.href} className="ge-nav-direct">{item.label}</Link>
            ))}
          </div>

          <div className="ge-nav-actions">
            <a href="tel:+917733888883" className="ge-phone" onClick={() => trackLead('call')}>+91-7733888883</a>
            <Link href="/#book" className="ge-audit">Get Free Audit <span aria-hidden>↗</span></Link>
            <button
              type="button"
              className={`ge-menu-button ${mobileOpen ? 'is-open' : ''}`}
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
          <div className={`ge-mega ${scrolled ? 'is-scrolled' : ''}`} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <div className="ge-mega-inner">
              <div className="ge-mega-label">
                <span>{MENUS[open].kicker}</span>
                <strong>{MENUS[open].label}</strong>
                <p>Choose the page that most closely matches what you are trying to grow.</p>
                <Link href={MENUS[open].hubHref} className="ge-mega-hub" onClick={() => setOpen(null)}>
                  {MENUS[open].hubLabel} ↗
                </Link>
              </div>

              <div className="ge-mega-links">
                {MENUS[open].items.map((item, index) => (
                  <Link key={`${open}-${item.label}`} href={item.href} onClick={() => setOpen(null)} style={{ animationDelay: `${index * 45}ms` }}>
                    <span className="ge-mega-index">0{index + 1}</span>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                    <b aria-hidden>↗</b>
                  </Link>
                ))}
              </div>

              <Link href={MENUS[open].hubHref} className="ge-mega-feature" onClick={() => setOpen(null)}>
                <span>{open === 'technology' ? 'Built by GE' : open === 'industries' ? 'Explore the system' : 'Services overview'}</span>
                <strong>{open === 'technology' ? 'Meet GrowthBot.' : open === 'industries' ? 'Different growth physics.' : 'Every growth lever. One system.'}</strong>
                <p>{open === 'technology' ? 'See how AI qualification and automation connect into the growth system.' : open === 'industries' ? 'Explore the market-specific growth pathways built into the homepage.' : 'See the complete connected capability system and choose the right specialist path.'}</p>
                <b>{MENUS[open].hubLabel} ↗</b>
              </Link>
            </div>
          </div>
          <button className={`ge-backdrop ${scrolled ? 'is-scrolled' : ''}`} aria-label="Close navigation menu" onClick={() => setOpen(null)} />
        </>
      )}

      {mobileOpen && (
        <div className={`ge-mobile-menu ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="ge-mobile-inner">
            {mobilePanel ? (
              <div className="ge-mobile-panel">
                <button className="ge-mobile-back" type="button" onClick={() => setMobilePanel(null)}>← Back</button>
                <p className="ge-mobile-kicker">{MENUS[mobilePanel].kicker}</p>
                <p className="ge-mobile-title">{MENUS[mobilePanel].label}</p>
                <Link href={MENUS[mobilePanel].hubHref} className="ge-mobile-hub">
                  {MENUS[mobilePanel].hubLabel} ↗
                </Link>
                {MENUS[mobilePanel].items.map((item, index) => (
                  <Link key={item.label} href={item.href} className="ge-mobile-link">
                    <span>0{index + 1}</span><strong>{item.label}</strong><small>{item.description}</small><b aria-hidden>↗</b>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="ge-mobile-panel">
                {(Object.keys(MENUS) as MenuKey[]).map((key) => (
                  <button key={key} type="button" className="ge-mobile-root" onClick={() => setMobilePanel(key)}>
                    {MENUS[key].label}<span aria-hidden>→</span>
                  </button>
                ))}
                {DIRECT.map((item) => <Link key={item.href} href={item.href} className="ge-mobile-root">{item.label}<span aria-hidden>↗</span></Link>)}
                <Link href="/contact" className="ge-mobile-root">Contact<span aria-hidden>↗</span></Link>
                <Link href="/#book" className="ge-mobile-audit">Get Free Audit ↗</Link>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.ge-nav) { --font-display:'Arial Narrow'; --nav-h:94px; position:sticky; top:0; z-index:70; height:var(--nav-h); background:rgba(255,255,255,.96); border-bottom:1px solid rgba(23,6,83,.1); backdrop-filter:blur(18px); transition:height .34s cubic-bezier(.22,1,.36,1),box-shadow .25s ease,background .25s ease; }
        :global(.ge-nav.is-scrolled) { --nav-h:78px; background:rgba(255,255,255,.985); box-shadow:0 12px 36px rgba(7,27,59,.08); }
        :global(.ge-nav-inner) { width:min(100%,1440px); height:100%; margin:0 auto; padding:0 clamp(24px,5vw,76px); display:flex; align-items:center; justify-content:space-between; gap:30px; }
        :global(.ge-logo img) { width:auto; height:39px; display:block; transition:transform .3s ease; }
        :global(.ge-logo:hover img) { transform:translateY(-1px); }
        :global(.ge-desktop-nav) { display:flex; align-items:center; gap:clamp(17px,1.65vw,28px); margin-left:auto; }
        :global(.ge-nav-menu) { display:flex; align-items:center; gap:3px; min-height:48px; }
        :global(.ge-nav-trigger),:global(.ge-nav-direct) { position:relative; min-height:48px; display:inline-flex; align-items:center; font-size:13px; font-weight:800; color:#170653; white-space:nowrap; }
        :global(.ge-nav-trigger::after),:global(.ge-nav-direct::after) { content:''; position:absolute; left:0; right:100%; bottom:7px; height:2px; background:#5c24f5; transition:right .25s cubic-bezier(.22,1,.36,1); }
        :global(.ge-nav-trigger:hover::after),:global(.ge-nav-trigger.is-active::after),:global(.ge-nav-direct:hover::after) { right:0; }
        :global(.ge-nav-plus) { width:25px; height:36px; display:grid; place-items:center; color:#170653; }
        :global(.ge-nav-plus span) { font-size:17px; font-weight:500; transition:transform .25s ease; }
        :global(.ge-nav-plus.is-active span) { transform:rotate(45deg); }
        :global(.ge-nav-actions) { display:flex; align-items:center; gap:15px; }
        :global(.ge-phone) { font-size:12px; font-weight:800; white-space:nowrap; color:#170653; }
        :global(.ge-audit),:global(.ge-mobile-audit) { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:48px; border-radius:999px; background:#170653; color:#fff; padding:0 22px; font-size:11.5px; font-weight:900; text-transform:uppercase; letter-spacing:.05em; transition:transform .22s ease,background .22s ease; }
        :global(.ge-audit:hover) { transform:translateY(-2px); background:#5c24f5; }
        :global(.ge-menu-button) { display:none; width:48px; height:48px; align-items:center; justify-content:center; flex-direction:column; gap:7px; }
        :global(.ge-menu-button span) { width:22px; height:2px; background:#170653; transition:transform .28s ease; }
        :global(.ge-menu-button.is-open span:first-child) { transform:translateY(4.5px) rotate(45deg); }
        :global(.ge-menu-button.is-open span:last-child) { transform:translateY(-4.5px) rotate(-45deg); }
        :global(.ge-mega) { position:fixed; z-index:65; top:94px; left:0; width:100%; background:#fff; border-bottom:1px solid rgba(23,6,83,.12); animation:megaIn .38s cubic-bezier(.22,1,.36,1) both; transform-origin:top; }
        :global(.ge-mega.is-scrolled) { top:78px; }
        @keyframes megaIn { from{opacity:0;transform:translateY(-14px);clip-path:inset(0 0 100% 0)} to{opacity:1;transform:none;clip-path:inset(0)} }
        :global(.ge-mega-inner) { width:min(100%,1440px); margin:0 auto; padding:54px clamp(24px,5vw,76px) 60px; display:grid; grid-template-columns:.4fr 1.18fr .62fr; gap:54px; }
        :global(.ge-mega-label > span),:global(.ge-mega-feature > span),:global(.ge-mobile-kicker) { display:block; font-size:10px; font-weight:900; letter-spacing:.15em; text-transform:uppercase; color:#5c24f5; }
        :global(.ge-mega-label strong) { display:block; margin-top:12px; font-family:var(--font-display),var(--font-jakarta),sans-serif; font-size:54px; line-height:.86; letter-spacing:-.025em; text-transform:uppercase; color:#170653; }
        :global(.ge-mega-label p) { max-width:225px; margin:18px 0 0; font-size:12px; line-height:1.55; color:#727486; }
        :global(.ge-mega-hub) { display:inline-flex; margin-top:22px; min-height:34px; align-items:center; border-bottom:1px solid currentColor; color:#170653; font-size:10px; font-weight:900; letter-spacing:.07em; text-transform:uppercase; }
        :global(.ge-mega-links) { display:grid; grid-template-columns:repeat(2,1fr); gap:0 34px; }
        :global(.ge-mega-links a) { position:relative; display:grid; grid-template-columns:28px 1fr 28px; align-content:center; min-height:112px; padding:16px 0; border-bottom:1px solid rgba(23,6,83,.12); animation:megaLinkIn .42s ease both; }
        @keyframes megaLinkIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
        :global(.ge-mega-index) { grid-row:1 / span 2; font-size:10px; font-weight:900; color:#8d8aa0; padding-top:3px; }
        :global(.ge-mega-links strong) { font-family:var(--font-display),sans-serif; font-size:27px; line-height:.95; text-transform:uppercase; color:#170653; }
        :global(.ge-mega-links a > span:not(.ge-mega-index)) { margin-top:7px; font-size:11px; line-height:1.45; color:#76778a; }
        :global(.ge-mega-links a > b) { grid-column:3; grid-row:1 / span 2; align-self:center; width:29px; height:29px; display:grid; place-items:center; border:1px solid rgba(23,6,83,.18); border-radius:50%; font-size:12px; transition:background .2s ease,color .2s ease,transform .2s ease; }
        :global(.ge-mega-links a:hover > b) { background:#170653; color:#fff; transform:rotate(8deg); }
        :global(.ge-mega-feature) { position:relative; overflow:hidden; min-height:250px; display:flex; flex-direction:column; padding:30px; border-radius:25px; background:linear-gradient(145deg,#5c24f5,#25047f); color:#fff; }
        :global(.ge-mega-feature::after) { content:''; position:absolute; width:160px; height:160px; right:-35px; bottom:-45px; border:1px solid rgba(123,240,196,.8); border-radius:50%; box-shadow:0 0 0 28px rgba(123,240,194,.08),0 0 0 58px rgba(123,240,194,.05); }
        :global(.ge-mega-feature > span) { color:#7bf0c4; }
        :global(.ge-mega-feature strong) { margin:34px 0 0; font-family:var(--font-display),sans-serif; font-size:38px; line-height:.83; text-transform:uppercase; }
        :global(.ge-mega-feature p) { max-width:240px; margin:14px 0 auto; font-size:11px; line-height:1.5; color:rgba(255,255,255,.74); }
        :global(.ge-mega-feature b) { position:relative; z-index:2; margin-top:27px; font-size:11px; text-transform:uppercase; letter-spacing:.08em; }
        :global(.ge-backdrop) { position:fixed; inset:94px 0 0; z-index:60; width:100%; background:rgba(13,5,57,.34); cursor:default; animation:fadeBackdrop .25s ease both; backdrop-filter:blur(3px); }
        :global(.ge-backdrop.is-scrolled) { top:78px; }
        @keyframes fadeBackdrop { from{opacity:0} to{opacity:1} }
        :global(.ge-mobile-menu) { display:none; position:fixed; z-index:66; inset:76px 0 0; background:#f6f4ef; overflow:auto; animation:mobileIn .35s cubic-bezier(.22,1,.36,1) both; }
        :global(.ge-mobile-menu.is-scrolled) { top:70px; }
        @keyframes mobileIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }
        :global(.ge-mobile-inner) { padding:28px 20px 52px; }
        :global(.ge-mobile-panel) { animation:panelIn .3s cubic-bezier(.22,1,.36,1) both; }
        @keyframes panelIn { from{opacity:0;transform:translateX(18px)} to{opacity:1;transform:none} }
        :global(.ge-mobile-root) { width:100%; min-height:66px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(23,6,83,.14); font-family:var(--font-display),var(--font-jakarta),sans-serif; font-size:31px; line-height:.9; text-transform:uppercase; font-weight:800; color:#170653; text-align:left; }
        :global(.ge-mobile-back) { min-height:44px; font-size:11px; font-weight:900; text-transform:uppercase; color:#5c24f5; }
        :global(.ge-mobile-kicker) { margin-top:22px; }
        :global(.ge-mobile-title) { font-family:var(--font-display),sans-serif; font-size:56px; font-weight:800; line-height:.83; letter-spacing:-.03em; text-transform:uppercase; color:#170653; margin:10px 0 14px; }
        :global(.ge-mobile-hub) { display:inline-flex; min-height:42px; align-items:center; margin:0 0 10px; color:#5c24f5; font-size:10px; font-weight:900; letter-spacing:.08em; text-transform:uppercase; }
        :global(.ge-mobile-link) { position:relative; display:grid; grid-template-columns:30px 1fr 24px; min-height:86px; align-content:center; padding:14px 0; border-bottom:1px solid rgba(23,6,83,.14); color:#170653; }
        :global(.ge-mobile-link > span) { grid-row:1 / span 2; font-size:9px; font-weight:900; color:#9895a6; }
        :global(.ge-mobile-link > strong) { font-family:var(--font-display),sans-serif; font-size:26px; line-height:.9; text-transform:uppercase; }
        :global(.ge-mobile-link > small) { margin-top:6px; font-size:10px; color:#747485; }
        :global(.ge-mobile-link > b) { grid-column:3; grid-row:1 / span 2; align-self:center; font-size:13px; }
        :global(.ge-mobile-audit) { margin-top:30px; min-height:54px; }
        @media (max-width:1240px) { :global(.ge-phone){display:none} :global(.ge-desktop-nav){gap:14px} :global(.ge-nav-trigger),:global(.ge-nav-direct){font-size:12px} :global(.ge-mega-inner){grid-template-columns:.35fr 1.25fr .62fr;gap:36px} }
        @media (max-width:980px) { :global(.ge-nav){--nav-h:76px} :global(.ge-nav.is-scrolled){--nav-h:70px} :global(.ge-logo img){height:35px} :global(.ge-desktop-nav),:global(.ge-audit){display:none} :global(.ge-menu-button),:global(.ge-mobile-menu){display:flex} :global(.ge-mobile-menu){display:block;top:76px} :global(.ge-mobile-menu.is-scrolled){top:70px} }
        @media (prefers-reduced-motion:reduce) { :global(.ge-nav),:global(.ge-logo img),:global(.ge-nav-trigger::after),:global(.ge-nav-direct::after),:global(.ge-nav-plus span),:global(.ge-audit),:global(.ge-menu-button span),:global(.ge-mega-links a > b){transition:none} :global(.ge-mega),:global(.ge-mega-links a),:global(.ge-backdrop),:global(.ge-mobile-menu),:global(.ge-mobile-panel){animation:none} }
      `}</style>
    </>
  )
}
