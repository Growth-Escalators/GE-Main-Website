'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

function FooterLogo() {
  return (
    <div className="flex items-center" style={{ gap: 11, marginBottom: 16 }}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="geFoot" x1="3" y1="29" x2="29" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" />
            <stop offset="1" stopColor="#FF9A5A" />
          </linearGradient>
        </defs>
        <rect x="3" y="19" width="6" height="10" rx="2" fill="url(#geFoot)" opacity="0.45" />
        <rect x="13" y="13" width="6" height="16" rx="2" fill="url(#geFoot)" opacity="0.75" />
        <rect x="23" y="6" width="6" height="23" rx="2" fill="url(#geFoot)" />
        <path d="M19.5 10.5 L27 4" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22.6 4 L27.2 4 L27.2 8.6" stroke="#FF6B35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ fontWeight: 800, fontSize: 19, color: '#fff' }}>Growth Escalators</span>
    </div>
  )
}

const COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Performance Marketing', href: '/services' },
      { label: 'Funnels & Automation',  href: '/services' },
      { label: 'Web & Software',        href: '/services' },
      { label: 'Branding',              href: '/services' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'D2C & eCommerce', href: '/d2c' },
      { label: 'Doctors',     href: '/doctors' },
      { label: 'Real Estate', href: '/real-estate' },
      { label: 'Staffing',    href: '/staffing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '/about' },
      { label: 'Work',    href: '/work' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog',    href: '/blog' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-x" style={{ padding: 'clamp(40px, 7vw, 60px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 30px)' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"
          style={{
            gap: 'clamp(28px, 4vw, 40px)',
            paddingBottom: 'clamp(28px, 4vw, 44px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Brand column */}
          <div>
            <FooterLogo />
            <p style={{ fontSize: 14, color: 'var(--text-on-dark-mute)', lineHeight: 1.6, maxWidth: 280, margin: '0 0 16px' }}>
              AI-first performance marketing agency. We escalate brands with measurable,
              predictable growth.
            </p>
            <div className="flex flex-col" style={{ gap: 8, fontSize: 13.5, color: 'var(--text-on-dark-mute)', lineHeight: 1.6 }}>
              <span className="flex items-start" style={{ gap: 8 }}>
                <MapPin size={14} style={{ marginTop: 3, flexShrink: 0, color: 'var(--orange)' }} />
                Sector 26, Pratap Nagar, Jaipur 302033
              </span>
              <a href="tel:+917733888883" className="flex items-center hover:text-white" style={{ gap: 8 }}>
                <Phone size={14} style={{ flexShrink: 0, color: 'var(--orange)' }} />
                +91 77338 88883
              </a>
              <a href="mailto:Info@growthescalators.com" className="flex items-center hover:text-white" style={{ gap: 8 }}>
                <Mail size={14} style={{ flexShrink: 0, color: 'var(--orange)' }} />
                Info@growthescalators.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: 12, fontWeight: 800, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 14,
                }}
              >
                {col.heading}
              </div>
              <div className="flex flex-col" style={{ gap: 10, fontSize: 14 }}>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="footer-link"
                    style={{ color: 'var(--text-on-dark)', transition: 'color .25s' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between flex-wrap"
          style={{ paddingTop: 24, fontSize: 13, color: '#6c6c85', gap: 12 }}
        >
          <span>© 2026 Growth Escalators. All rights reserved.</span>
          <div className="flex" style={{ gap: 20 }}>
            <Link href="/privacy-policy" className="footer-link" style={{ color: '#6c6c85' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="footer-link" style={{ color: '#6c6c85' }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover { color: var(--orange) !important; }
      `}</style>
    </footer>
  )
}
