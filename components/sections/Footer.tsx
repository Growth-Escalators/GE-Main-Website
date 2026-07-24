'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

function FooterLogo() {
  return (
    <div className="inline-flex items-center" style={{ marginBottom: 16, height: 52 }}>
      {/* Source has a white background — wrap in a white pill so the
          orange G + blue wordmark stay legible against the dark footer. */}
      <span
        className="inline-flex items-center justify-center"
        style={{
          background: '#fff',
          borderRadius: 10,
          padding: '8px 14px',
          height: '100%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.webp"
          alt="Growth Escalators"
          style={{ height: '100%', width: 'auto', display: 'block' }}
        />
      </span>
    </div>
  )
}

const COLS = [
  {
    heading: 'Services',
    links: [
      { label: 'Performance Marketing', href: '/performance-marketing-agency-jaipur' },
      { label: 'Website Development',    href: '/website-development-company-jaipur' },
      { label: 'Software Development',   href: '/software-development-company-jaipur' },
      { label: 'Lead Generation',        href: '/b2b-lead-generation-agency' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'D2C & eCommerce', href: '/d2c' },
      { label: 'Doctors', href: '/doctors-marketing-agency-jaipur' },
      { label: 'Dental Clinics', href: '/dental-clinic-marketing-agency-jaipur' },
      { label: 'Real Estate', href: '/real-estate-marketing-agency-jaipur' },
      { label: 'Restaurants & Cafés', href: '/restaurant-marketing-agency-jaipur' },
      { label: 'Hotels & Resorts', href: '/hotel-resort-marketing-agency-jaipur' },
    ],
  },
  {
    heading: 'Niches We Grow',
    links: [
      { label: 'Jewellery', href: '/jewellery-marketing-agency-jaipur' },
      { label: 'Salons & Spas', href: '/salon-spa-marketing-agency-jaipur' },
      { label: 'Gyms & Fitness', href: '/gym-fitness-marketing-agency-jaipur' },
      { label: 'Coaching Institutes', href: '/coaching-institute-marketing-agency-jaipur' },
      { label: 'Interior Designers', href: '/interior-designer-marketing-agency-jaipur' },
      { label: 'Travel Companies', href: '/travel-agency-marketing-jaipur' },
    ],
  },
  {
    heading: 'More Niches',
    links: [
      { label: 'Law & CA Firms', href: '/law-firm-marketing-agency-jaipur' },
      { label: 'Wedding & Events', href: '/wedding-event-marketing-agency-jaipur' },
      { label: 'Car Detailing', href: '/car-detailing-marketing-agency-jaipur' },
      { label: 'Staffing', href: '/staffing' },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1fr]"
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
              <a href="tel:+917733888883" onClick={() => trackLead('call')} className="flex items-center hover:text-white" style={{ gap: 8 }}>
                <Phone size={14} style={{ flexShrink: 0, color: 'var(--orange)' }} />
                +91 77338 88883
              </a>
              <a href="mailto:Info@growthescalators.com" onClick={() => trackLead('email')} className="flex items-center hover:text-white" style={{ gap: 8 }}>
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
