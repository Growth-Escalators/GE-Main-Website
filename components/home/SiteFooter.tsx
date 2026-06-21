'use client'

import Link from 'next/link'

/**
 * SiteFooter — dark homepage footer. Brand column + Services / Industries /
 * Company link columns, then a legal bottom bar. Year hardcoded to 2026 to
 * avoid static-prerender drift (see CLAUDE.md SSR notes).
 */

const services: { label: string; href: string }[] = [
  { label: 'Performance Marketing', href: '/services' },
  { label: 'Funnels & Automation', href: '/services' },
  { label: 'Web & Software', href: '/services' },
  { label: 'Branding', href: '/services' },
]

const industries: { label: string; href: string }[] = [
  { label: 'Doctors', href: '/doctors' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Staffing', href: '/staffing' },
]

const company: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

function LinkColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-[12px] font-extrabold uppercase" style={{ color: '#FF6B35' }}>
        {heading}
      </h3>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="mb-2.5 block text-[14px] hover:text-[#FF6B35]"
          style={{ color: '#a8a8c0' }}
        >
          {l.label}
        </Link>
      ))}
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="pb-[30px] pt-[60px] text-white" style={{ background: '#11121a' }}>
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        {/* Top grid */}
        <div
          className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-[44px] max-md:grid-cols-2"
          style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
                <defs>
                  <linearGradient id="ge-footer-logo" x1="0" y1="30" x2="30" y2="0">
                    <stop offset="0" stopColor="#FF6B35" />
                    <stop offset="1" stopColor="#ff8c5a" />
                  </linearGradient>
                </defs>
                <rect x="2" y="18" width="5" height="10" rx="1.5" fill="url(#ge-footer-logo)" />
                <rect x="9.5" y="12" width="5" height="16" rx="1.5" fill="url(#ge-footer-logo)" />
                <rect x="17" y="6" width="5" height="22" rx="1.5" fill="url(#ge-footer-logo)" />
                <path d="M21 9 L27 3 M27 3 L27 8 M27 3 L22 3" stroke="url(#ge-footer-logo)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[19px] font-extrabold">Growth Escalators</span>
            </div>

            <p className="mt-3 max-w-[280px] text-[14px]" style={{ color: '#9c9cb5' }}>
              AI-first performance marketing agency. We escalate brands with measurable, predictable
              growth.
            </p>

            <div className="mt-4 text-[13.5px]" style={{ color: '#9c9cb5' }}>
              <div>📍 Sector 26, Pratap Nagar, Jaipur 302033</div>
              <div className="mt-1">
                ✆{' '}
                <a href="tel:+917733888883" className="hover:text-[#FF6B35]">
                  +91 77338 88883
                </a>{' '}
                ·{' '}
                <a href="mailto:Info@growthescalators.com" className="hover:text-[#FF6B35]">
                  Info@growthescalators.com
                </a>
              </div>
            </div>
          </div>

          <LinkColumn heading="Services" links={services} />
          <LinkColumn heading="Industries" links={industries} />
          <LinkColumn heading="Company" links={company} />
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-6 text-[13px] max-md:flex-col max-md:gap-3"
          style={{ color: '#6c6c85' }}
        >
          <span>© 2026 Growth Escalators. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-[#FF6B35]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#FF6B35]">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
