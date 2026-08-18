'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Phase2Motion() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-p2-hero]', { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .78, stagger: .09, ease: 'power3.out', delay: .08 })

      gsap.utils.toArray<HTMLElement>('[data-p2-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 44, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: .78, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      ScrollTrigger.batch('[data-p2-card]', {
        start: 'top 88%', once: true,
        onEnter: (batch) => gsap.fromTo(batch, { y: 48, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .75, stagger: .08, ease: 'power3.out' }),
      })

      gsap.utils.toArray<HTMLElement>('[data-p2-media]').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, {
          clipPath: 'inset(0 0 0% 0)', duration: 1.05, ease: 'power4.inOut',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [])
  return null
}
