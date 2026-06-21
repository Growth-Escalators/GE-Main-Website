'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// GrowthBot is a heavy (~1.2k-line) always-on client widget. Mounting it on
// first paint costs hydration time for something the visitor doesn't need
// immediately. This loader defers the dynamic import until the first real
// signal — any user interaction, or a browser idle window as a fallback — so
// the initial page render stays light while the chat FAB still shows up
// promptly on real sessions.
const GrowthBot = dynamic(() => import('./GrowthBot'), { ssr: false })

export default function GrowthBotLoader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) return

    let idleId: number | null = null
    const events: Array<keyof WindowEventMap> = [
      'scroll', 'pointerdown', 'keydown', 'mousemove', 'touchstart',
    ]

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, trigger))
      if (idleId !== null) {
        const cancelIdle = (window as unknown as {
          cancelIdleCallback?: (id: number) => void
        }).cancelIdleCallback
        if (cancelIdle) cancelIdle(idleId)
        else clearTimeout(idleId)
      }
    }

    const trigger = () => {
      cleanup()
      setShow(true)
    }

    events.forEach((e) =>
      window.addEventListener(e, trigger, { passive: true, once: true })
    )

    const requestIdle = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
    }).requestIdleCallback
    idleId = requestIdle
      ? requestIdle(trigger, { timeout: 3000 })
      : (setTimeout(trigger, 2500) as unknown as number)

    return cleanup
  }, [show])

  return show ? <GrowthBot /> : null
}
