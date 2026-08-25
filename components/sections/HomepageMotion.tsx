'use client'

import { useEffect } from 'react'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

function play(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  animations: Animation[],
) {
  const animation = element.animate(keyframes, { fill: 'both', ...options })
  animations.push(animation)
  animation.addEventListener('finish', () => animation.commitStyles?.(), { once: true })
}

export default function HomepageMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 768px)').matches
    if (reduceMotion || !desktop) return

    const animations: Animation[] = []

    const heroLines = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-line]'))
    const heroReveals = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-reveal]'))

    heroLines.forEach((element, index) => {
      play(
        element,
        [{ transform: 'translateY(104%)' }, { transform: 'translateY(0)' }],
        { duration: 760, delay: 35 + index * 70, easing: EASE },
        animations,
      )
    })

    heroReveals.forEach((element, index) => {
      play(
        element,
        [
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 620, delay: 180 + index * 55, easing: EASE },
        animations,
      )
    })

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-card-reveal], [data-media-reveal]'),
    ).filter((element) => !element.hasAttribute('data-hero-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          observer.unobserve(element)

          const isCard = element.hasAttribute('data-card-reveal')
          const isMedia = element.hasAttribute('data-media-reveal')
          const distance = isCard ? 30 : isMedia ? 20 : 22

          play(
            element,
            [
              { opacity: 0.01, transform: `translateY(${distance}px)` },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: isCard ? 620 : 540, easing: EASE },
            animations,
          )
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    )

    revealTargets.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
    }
  }, [])

  return null
}
