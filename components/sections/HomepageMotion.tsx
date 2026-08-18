'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HomepageMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-line]',
        { yPercent: 115 },
        { yPercent: 0, duration: 0.9, stagger: 0.09, ease: 'power4.out', delay: 0.08 }
      )

      gsap.fromTo(
        '[data-hero-reveal]',
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.08, ease: 'power3.out', delay: 0.34 }
      )

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const type = element.dataset.reveal
        const isHeadline = type === 'headline'
        gsap.fromTo(
          element,
          isHeadline
            ? { autoAlpha: 0, y: 54, clipPath: 'inset(0 0 34% 0)' }
            : { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            duration: isHeadline ? 0.88 : 0.68,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              once: true,
            },
          }
        )
      })

      ScrollTrigger.batch('[data-card-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 42 },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09, ease: 'power3.out' }
          )
        },
      })

      gsap.utils.toArray<HTMLElement>('[data-media-reveal]').forEach((element) => {
        const image = element.querySelector('[data-media-inner]')
        gsap.fromTo(
          element,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.05,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: element, start: 'top 84%', once: true },
          }
        )
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.25,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 84%', once: true },
            }
          )
        }
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const amount = Number(element.dataset.parallax || 5)
        gsap.fromTo(
          element,
          { yPercent: amount },
          {
            yPercent: -amount,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
