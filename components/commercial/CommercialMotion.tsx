'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CommercialMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-cm-hero]', { yPercent: 42, autoAlpha: 0 }, {
        yPercent: 0,
        autoAlpha: 1,
        duration: .9,
        stagger: .08,
        ease: 'power4.out',
        delay: .06,
      })

      gsap.utils.toArray<HTMLElement>('[data-cm-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 46, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: .8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      ScrollTrigger.batch('[data-cm-card]', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => gsap.fromTo(batch, { y: 52, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: .78,
          stagger: .08,
          ease: 'power3.out',
        }),
      })

      gsap.utils.toArray<HTMLElement>('[data-cm-media]').forEach((el) => {
        const inner = el.querySelector('img')
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.05,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true },
        })
        if (inner) {
          gsap.fromTo(inner, { scale: 1.07 }, {
            scale: 1,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%', once: true },
          })
        }
      })

      gsap.utils.toArray<HTMLElement>('[data-cm-parallax]').forEach((el) => {
        gsap.fromTo(el, { yPercent: 4 }, {
          yPercent: -4,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: .8 },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
