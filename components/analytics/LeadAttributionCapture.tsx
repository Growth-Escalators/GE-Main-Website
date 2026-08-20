'use client'

import { useEffect } from 'react'
import { captureLeadAttribution, markWhatsAppClick } from '@/lib/leadAttribution'
import { trackContactInteraction } from '@/lib/analytics'

/**
 * Renderless site-wide measurement initializer.
 *
 * It captures the first landing page/referrer/UTMs once and catches the three
 * high-intent link types we care about even when a new page does not use a
 * dedicated tracking component.
 */
export default function LeadAttributionCapture() {
  useEffect(() => {
    captureLeadAttribution()

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest<HTMLAnchorElement>('a[href]')
      if (!anchor) return

      const href = (anchor.getAttribute('href') || '').trim().toLowerCase()
      const source = anchor.dataset.trackSource || 'global_link'

      if (href.includes('wa.me/') || href.includes('api.whatsapp.com/') || href.startsWith('whatsapp:')) {
        markWhatsAppClick(source)
        trackContactInteraction('whatsapp_click', { cta_source: source })
        return
      }

      if (href.startsWith('tel:')) {
        trackContactInteraction('phone_click', { cta_source: source })
        return
      }

      if (href.includes('cal.com/') || href.includes('calendly.com/')) {
        trackContactInteraction('booking_click', { cta_source: source })
      }
    }

    document.addEventListener('click', handleClick, { capture: true })
    return () => document.removeEventListener('click', handleClick, { capture: true })
  }, [])

  return null
}
