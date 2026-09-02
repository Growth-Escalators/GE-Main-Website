'use client'

import { useEffect } from 'react'
import { captureLeadAttribution, markWhatsAppClick } from '@/lib/leadAttribution'
import { trackContactInteraction, trackFormInteraction } from '@/lib/analytics'

/**
 * Renderless site-wide measurement initializer.
 *
 * It captures first + last acquisition context, catches the three high-intent
 * contact link types we care about, and measures the minimal form funnel:
 * form seen -> form started -> successful lead OR form abandoned.
 * Successful submissions still use the existing `generate_lead` event in
 * LeadForm. No individual fields or field values are recorded.
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

    type FormState = {
      context: string
      started: boolean
      submitted: boolean
      abandoned: boolean
    }

    const formStates = new Map<HTMLFormElement, FormState>()
    const viewObservers = new Map<HTMLFormElement, IntersectionObserver>()

    const markAbandoned = (form: HTMLFormElement, state: FormState) => {
      if (!state.started || state.submitted || state.abandoned) return
      state.abandoned = true
      trackFormInteraction('form_abandon', { form_context: state.context })
      viewObservers.get(form)?.disconnect()
      viewObservers.delete(form)
      formStates.delete(form)
    }

    const watchForm = (form: HTMLFormElement) => {
      if (formStates.has(form)) return

      const state: FormState = {
        context: form.closest('section')?.id || form.id || 'lead-form',
        started: false,
        submitted: false,
        abandoned: false,
      }
      formStates.set(form, state)

      const markStarted = () => {
        if (state.started) return
        state.started = true
        trackFormInteraction('form_start', { form_context: state.context })
      }

      const markSubmitted = () => {
        state.submitted = true
      }

      form.addEventListener('focusin', markStarted, { once: true })
      form.addEventListener('input', markStarted, { once: true })
      form.addEventListener('change', markStarted, { once: true })
      // LeadForm emits this only after /api/lead accepted the lead. A native
      // submit attempt can still fail server-side, so it must not suppress a
      // later abandonment signal.
      form.addEventListener('ge:lead-form-success', markSubmitted, { once: true })

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.25)) return
          trackFormInteraction('form_view', { form_context: state.context })
          observer.disconnect()
          viewObservers.delete(form)
        }, { threshold: [0.25] })
        observer.observe(form)
        viewObservers.set(form, observer)
      } else {
        trackFormInteraction('form_view', { form_context: state.context })
      }
    }

    const sweepRemovedForms = () => {
      formStates.forEach((state, form) => {
        if (!form.isConnected) markAbandoned(form, state)
      })
    }

    const scanForms = () => {
      sweepRemovedForms()
      document.querySelectorAll<HTMLFormElement>('#lead-form form').forEach(watchForm)
    }

    const handlePageHide = () => {
      formStates.forEach((state, form) => markAbandoned(form, state))
    }

    scanForms()
    const mutationObserver = new MutationObserver(scanForms)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('click', handleClick, { capture: true })
    window.addEventListener('pagehide', handlePageHide)

    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
      window.removeEventListener('pagehide', handlePageHide)
      mutationObserver.disconnect()
      viewObservers.forEach((observer) => observer.disconnect())
      viewObservers.clear()
      // Do not emit abandonment merely because React tears down/restarts this
      // effect (e.g. Strict Mode). Real exits are handled by pagehide or by the
      // form being removed from the document during SPA navigation.
      formStates.clear()
    }
  }, [])

  return null
}
