'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const WORK_SELECTOR = 'section[aria-labelledby="work-heading"]'
const PEOPLE_SELECTOR = 'section[aria-labelledby="people-heading"]'
const INSIGHTS_SELECTOR = 'section[aria-labelledby="insights-heading"]'

export default function HomepageMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>('section[aria-labelledby="home-hero-heading"]')
      const heroLines = gsap.utils.toArray<HTMLElement>('[data-hero-line]')
      const heroReveals = gsap.utils.toArray<HTMLElement>('[data-hero-reveal]')

      gsap.set(heroLines, { yPercent: 112 })
      gsap.set(heroReveals, { autoAlpha: 0, y: 26 })

      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      heroTl
        .to(heroLines, { yPercent: 0, duration: 0.95, stagger: 0.09 }, 0.05)
        .to(heroReveals.slice(0, 3), { autoAlpha: 1, y: 0, duration: 0.78, stagger: 0.09, ease: 'power3.out' }, 0.28)
        .to(heroReveals.slice(3), { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.055, ease: 'power3.out' }, 0.52)

      if (hero) {
        const heroStage = hero.children[1]?.children[1] as HTMLElement | undefined
        if (heroStage) {
          gsap.fromTo(
            heroStage,
            { scale: 0.965, rotate: 0.8 },
            { scale: 1, rotate: 0, duration: 1.15, ease: 'power4.out', delay: 0.22 }
          )
        }
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const isHeadline = element.dataset.reveal === 'headline'
        gsap.fromTo(
          element,
          isHeadline
            ? { autoAlpha: 0, y: 58, clipPath: 'inset(0 0 42% 0)' }
            : { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            duration: isHeadline ? 0.95 : 0.68,
            ease: isHeadline ? 'power4.out' : 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 87%',
              once: true,
            },
          }
        )
      })

      const serviceCards = gsap.utils.toArray<HTMLElement>('#services [data-card-reveal]')
      if (serviceCards.length) {
        gsap.set(serviceCards, { autoAlpha: 0, y: 64, scale: 0.985 })
        ScrollTrigger.batch(serviceCards, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.82,
              stagger: 0.095,
              ease: 'power3.out',
            })
          },
        })

        serviceCards.forEach((card) => {
          const artwork = card.lastElementChild as HTMLElement | null
          if (!artwork) return
          gsap.fromTo(
            artwork,
            { yPercent: 10, scale: 1.055 },
            {
              yPercent: 0,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 84%', once: true },
            }
          )
        })
      }

      const industryCards = gsap.utils.toArray<HTMLElement>('#industries [data-card-reveal]')
      industryCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, x: index % 2 === 0 ? -28 : 28, y: 14 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.72,
            delay: (index % 2) * 0.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%', once: true },
          }
        )
      })

      const workCards = gsap.utils.toArray<HTMLElement>(`${WORK_SELECTOR} [data-card-reveal]`)
      workCards.forEach((card) => {
        const media = card.querySelector<HTMLElement>('[data-media-reveal]')
        const mediaInner = media?.querySelector<HTMLElement>('[data-media-inner]')
        const body = card.children[1] as HTMLElement | undefined
        const bodyChildren = body ? Array.from(body.children) : []

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 88%', once: true },
        })

        tl.fromTo(
          card,
          { autoAlpha: 0, y: 88, scale: 0.982 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.92, ease: 'power4.out' }
        )

        if (media) {
          tl.fromTo(
            media,
            { clipPath: 'inset(0 0 100% 0 round 20px)' },
            { clipPath: 'inset(0 0 0% 0 round 20px)', duration: 0.95, ease: 'power4.inOut' },
            0.08
          )
        }

        if (mediaInner) {
          tl.fromTo(mediaInner, { scale: 1.085 }, { scale: 1, duration: 1.18, ease: 'power3.out' }, 0.12)
        }

        if (bodyChildren.length) {
          tl.fromTo(
            bodyChildren,
            { autoAlpha: 0, y: 25 },
            { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.065, ease: 'power3.out' },
            0.28
          )
        }
      })

      const generalMedia = gsap.utils
        .toArray<HTMLElement>('[data-media-reveal]')
        .filter((element) => !element.closest(WORK_SELECTOR))

      generalMedia.forEach((element) => {
        const inner = element.querySelector<HTMLElement>('[data-media-inner]')
        gsap.fromTo(
          element,
          { clipPath: 'inset(8% 5% 8% 5% round 30px)', autoAlpha: 0.72 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            autoAlpha: 1,
            duration: 1.05,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
          }
        )
        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.06, y: 16 },
            {
              scale: 1,
              y: 0,
              duration: 1.18,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 86%', once: true },
            }
          )
        }
      })

      const techBenefits = gsap.utils.toArray<HTMLElement>('#growthbot span')
        .filter((element) => element.parentElement && element.parentElement.childElementCount === 4)
      if (techBenefits.length) {
        gsap.fromTo(
          techBenefits,
          { autoAlpha: 0, x: 24 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: '#growthbot', start: 'top 62%', once: true },
          }
        )
      }

      const insightCards = gsap.utils.toArray<HTMLElement>(`${INSIGHTS_SELECTOR} [data-card-reveal]`)
      insightCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 42 + index * 3 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 91%', once: true },
          }
        )
      })

      mm.add('(min-width: 768px)', () => {
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
                scrub: 0.9,
              },
            }
          )
        })

        if (hero) {
          const heroStage = hero.children[1]?.children[1] as HTMLElement | undefined
          if (heroStage) {
            gsap.to(heroStage, {
              yPercent: 5,
              scale: 0.985,
              ease: 'none',
              scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
            })
          }
        }

        const peopleSection = document.querySelector<HTMLElement>(PEOPLE_SELECTOR)
        const peopleMedia = peopleSection?.querySelector<HTMLElement>('[data-media-reveal]')
        if (peopleMedia) {
          gsap.fromTo(
            peopleMedia,
            { y: 28 },
            {
              y: -18,
              ease: 'none',
              scrollTrigger: {
                trigger: peopleSection,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.1,
              },
            }
          )
        }
      })

      requestAnimationFrame(() => {
        requestAnimationFrame(() => ScrollTrigger.refresh())
      })
    })

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  return null
}
