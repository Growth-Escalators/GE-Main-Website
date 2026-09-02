'use client'

import { useEffect } from 'react'
import { captureLeadAttribution, markWhatsAppClick } from '@/lib/leadAttribution'
import { trackContactInteraction, trackFormInteraction } from '@/lib/analytics'

/**
 * Renderless site-wide measurement initializer.
 *
 * It captures first + last acquisition context, catches the three high-intent
 * contact link types we care about, and measures the minimal form funnel:
 * form seen -> form started -> generate_lead (the latter fires on success in
 * LeadForm). No individual fields or noisy clicks are recorded.
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

    const watchedForms = new WeakSet<HTMLFormElement>()
    const startedForms = new WeakSet<HTMLFormElement>()
    const viewObservers = new Map<HTMLFormElement, IntersectionObserver>()

    const watchForm = (form: HTMLFormElement) => {
      if (watchedForms.has(form)) return
      watchedForms.add(form)

      const formContext = form.closest('section')?.id || form.id || 'lead-form'

      const markStarted = () => {
        if (startedForms.has(form)) return
        startedForms.add(form)
        trackFormInteraction('form_start', { form_context: formContext })
      }

      form.addEventListener('focusin', markStarted, { once: true })
      form.addEventListener('input', markStarted, { once: true })
      form.addEventListener('change', markStarted, { once: true })

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.25)) return
          trackFormInteraction('form_view', { form_context: formContext })
          observer.disconnect()
          viewObservers.delete(form)
        }, { threshold: [0.25] })
        observer.observe(form)
        viewObservers.set(form, observer)
      } else {
        trackFormInteraction('form_view', { form_context: formContext })
      }
    }

    const scanForms = () => {
      document.querySelectorAll<HTMLFormElement>('#lead-form form').forEach(watchForm)
    }

    scanForms()
    const mutationObserver = new MutationObserver(scanForms)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('click', handleClick, { capture: true })
    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
      mutationObserver.disconnect()
      viewObservers.forEach((observer) => observer.disconnect())
      viewObservers.clear()
    }
  }, [])

  return null
}
