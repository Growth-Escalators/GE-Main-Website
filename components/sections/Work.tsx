'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { WORK_ITEMS } from '@/lib/constants'
import Link from 'next/link'

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
          invalidateOnRefresh: true,
        },
      })
      gsap.fromTo('.work-heading', { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      data-animate="work"
      className="py-24 md:py-36 px-6 md:px-12 lg:px-24"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="work-heading flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase block mb-4" style={{ color: 'var(--orange)' }}>
              Selected Projects
            </span>
            <h2 className="font-extrabold font-bold leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--text-primary)' }}>
              Work That Speaks
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm transition-colors duration-300 whitespace-nowrap hover:opacity-80"
            style={{ color: 'var(--text-muted)' }}
          >
            View All Case Studies →
          </Link>
        </div>

        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK_ITEMS.map((item) => (
            <Link
              href="/work"
              key={item.id}
              aria-label={`View ${item.name} case study`}
              className="work-card relative overflow-hidden group cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange)]"
              style={{ minHeight: 300, background: item.gradient }}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <span
                  className="inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 mb-4 w-fit"
                  style={{
                    color: 'var(--orange)',
                    background: 'rgba(255, 107, 53,0.1)',
                    border: '1px solid rgba(255, 107, 53,0.2)',
                  }}
                >
                  {item.category}
                </span>
                <h3 className="font-extrabold font-bold text-2xl mb-2" style={{ color: '#F0EDE8' }}>{item.name}</h3>
                <p className="text-sm" style={{ color: 'rgba(240,237,232,0.6)' }}>{item.result}</p>
                <span className="mt-4 text-xs tracking-widest uppercase md:hidden" style={{ color: 'var(--orange)' }}>
                  View Case Study →
                </span>
              </div>

              {/* Hover overlay — desktop only (touch devices show the CTA above instead) */}
              <div
                className="absolute inset-0 z-20 hidden md:flex items-center justify-center"
                style={{
                  background: 'var(--orange)',
                  clipPath: 'inset(100% 0 0 0)',
                  transition: 'clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.clipPath = 'inset(0 0 0 0)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.clipPath = 'inset(100% 0 0 0)' }}
              >
                <span className="font-extrabold font-bold text-[#06060A] text-lg">
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
