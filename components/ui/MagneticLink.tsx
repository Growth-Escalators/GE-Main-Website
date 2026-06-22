'use client'

import Link from 'next/link'
import { useRef, useState, useCallback } from 'react'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  strength?: number
  target?: string
  rel?: string
  /** Disable on touch devices so the pull doesn't feel weird. */
}

/* Lightweight magnetic-link wrapper — pulls subtly toward the cursor on hover,
   snaps back on leave. No external dep, no global cursor state.
   Wraps a Next <Link>. Use sparingly on hero CTAs. */
export default function MagneticLink({
  href, children, className = '', style, strength = 0.25, target, rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [t, setT] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setT({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength })
  }, [strength])

  const onLeave = useCallback(() => setT({ x: 0, y: 0 }), [])

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        ...style,
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </Link>
  )
}
