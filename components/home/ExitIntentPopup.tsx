'use client'

import { useEffect, useState } from 'react'

/**
 * ExitIntentPopup — shows ONCE per browser session. Triggers when the cursor
 * leaves via the top of the viewport (exit intent) or after a 25s fallback,
 * whichever fires first. Posts to /api/lead (phone forced non-empty to satisfy
 * the route's validation). SSR-safe via a mounted guard.
 */
export default function ExitIntentPopup() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('ge_exit_shown')) return

    let timer: ReturnType<typeof setTimeout>

    const trigger = () => {
      sessionStorage.setItem('ge_exit_shown', '1')
      setOpen(true)
      cleanup()
    }

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }

    const cleanup = () => {
      document.removeEventListener('mouseout', onMouseOut)
      clearTimeout(timer)
    }

    document.addEventListener('mouseout', onMouseOut)
    timer = setTimeout(trigger, 25000)

    return cleanup
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '')
    const business = String(data.get('business') || '')

    const minWait = new Promise((r) => setTimeout(r, 200))

    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Exit-intent lead',
            email,
            phone: '—',
            source: 'Exit-intent popup',
            message: `Website/business: ${business}`,
          }),
        }),
        minWait,
      ])
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      setDone(true)
      setTimeout(() => setOpen(false), 2000)
    } catch {
      // Soft fail — close so the visitor is never blocked.
      setDone(true)
      setTimeout(() => setOpen(false), 2000)
    } finally {
      setSubmitting(false)
    }
  }

  if (!mounted || !open) return null

  const bullets = [
    "Where you're leaking ad spend",
    '3 quick wins you can use today',
    'No commitment, no spam',
  ]

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(17,18,26,.55)' }}
        onClick={() => setOpen(false)}
      />

      <div
        className="relative grid w-[92%] max-w-[560px] grid-cols-2 overflow-hidden rounded-[22px] bg-white max-md:grid-cols-1"
        style={{ boxShadow: '0 40px 100px rgba(0,0,0,.5)' }}
      >
        {/* LEFT visual col */}
        <div
          className="relative overflow-hidden p-[30px] text-white max-md:hidden"
          style={{ background: 'linear-gradient(150deg,#13141d,#2a1b3d)' }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[80px] -right-[60px] h-[260px] w-[260px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(255,107,53,.22), transparent 70%)' }}
          />
          <div className="relative">
            <span
              className="text-[10px] font-extrabold uppercase tracking-[.14em]"
              style={{ color: '#FF9A5A' }}
            >
              Free · 2 min
            </span>
            <h3 className="mt-4 text-[25px] font-extrabold leading-[1.12]">
              Wait — get your free growth audit before you go.
            </h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-[14px]" style={{ color: '#00D4AA' }}>
                    ✓
                  </span>
                  <span className="text-[12.5px]" style={{ color: '#cfcfe0' }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT form col */}
        <div className="relative bg-white p-[30px]">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-3.5 grid h-[30px] w-[30px] place-items-center rounded-[8px]"
            style={{ background: '#f1f1f4', color: '#9898b8' }}
          >
            ✕
          </button>

          {done ? (
            <div className="grid h-full place-items-center" role="status" aria-live="polite">
              <p className="text-[15px] font-bold" style={{ color: '#11121a' }}>
                Thanks — check your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-[17px] font-extrabold" style={{ color: '#11121a' }}>
                Send me my free audit
              </h3>
              <p className="mt-1 text-[13px]" style={{ color: '#9898b8' }}>
                Drop your email — we&apos;ll reply within 24 hours.
              </p>

              <div className="mt-4 flex flex-col gap-2.5">
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Work email"
                  className="w-full rounded-[11px] px-3.5 py-3 text-[14px] outline-none focus:border-[#FF6B35]"
                  style={{ border: '1px solid rgba(17,18,26,.14)' }}
                />
                <input
                  name="business"
                  type="text"
                  placeholder="Website / business (optional)"
                  className="w-full rounded-[11px] px-3.5 py-3 text-[14px] outline-none focus:border-[#FF6B35]"
                  style={{ border: '1px solid rgba(17,18,26,.14)' }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-3 w-full rounded-[12px] py-3.5 text-[15px] font-extrabold text-white disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
              >
                {submitting ? 'Sending…' : 'Get My Free Audit →'}
              </button>

              <p className="mt-3 text-center text-[12px]" style={{ color: '#b9b9c5' }}>
                ★★★★★&nbsp;&nbsp;Trusted by 187+ brands
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
