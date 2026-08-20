'use client'

import Navbar from '@/components/sections/Navbar'
import { trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import ui from './InternationalPhase2.module.css'
import type { NavLink as NavLinkT } from '@/lib/content/international-landing/types'

export type HeaderProps = {
  nav: NavLinkT[]
  ctaLabel: string
  eventPrefix: string
  ctaHref?: string
  logoHref?: string
}

export default function Header({ nav, ctaLabel, eventPrefix, ctaHref = '#lead-form' }: HeaderProps) {
  return (
    <>
      <Navbar />
      <div className={ui.subnav} aria-label="Page sections">
        <div className={ui.subnavInner}>
          <nav className={ui.subnavLinks}>
            {nav.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <CtaButton
            href={ctaHref}
            label={ctaLabel}
            size="compact"
            className={ui.subnavCta}
            onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location: 'header' })}
          />
        </div>
      </div>
    </>
  )
}
