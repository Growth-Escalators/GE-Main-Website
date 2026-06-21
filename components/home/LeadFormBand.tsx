'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * LeadFormBand — homepage "Book your free audit" band (id="book"). Left column
 * is copy + trust signals; right column is a REAL working form that POSTs to
 * /api/lead. Submission lifecycle mirrors components/landing/LeadForm.tsx.
 */

type Status = 'idle' | 'submitting' | 'success' | 'error'

const RECIPIENT = 'Info@growthescalators.com'

export default function LeadFormBand() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const email = String(data.get('email') || '')
    const business = String(data.get('business') || '')
    const service = String(data.get('service') || '')
    const budget = String(data.get('budget') || '')

    const fields = {
      name,
      email,
      phone,
      budget,
      source: 'Homepage – Free Audit',
      message: `Business/website: ${business}\nService needed: ${service}`,
    }

    // Minimum visible-loader time so fast networks don't flash the button.
    const minWait = new Promise((r) => setTimeout(r, 200))

    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        }),
        minWait,
      ])
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }

  function buildMailtoFallback(): string {
    const subject = 'Homepage – Free Audit (form fallback)'
    const body =
      "The free-audit form on growthescalators.com had an error.\n\nPlease respond to this email and we'll follow up directly."
    return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const submitting = status === 'submitting'

  const labelCls = 'text-[12.5px] font-bold'
  const inputCls =
    'w-full rounded-[11px] px-4 py-3 text-[14px] outline-none focus:border-[#FF6B35]'
  const inputStyle = { border: '1px solid rgba(17,18,26,.14)' }

  const checklist = [
    'A real strategist reviews your accounts — not a template',
    'Clear next steps you can use with or without us',
    'We reply within 24 hours — no spam, ever',
  ]

  return (
    <section
      id="book"
      className="py-[88px]"
      style={{ background: '#fbfaf8', borderTop: '1px solid rgba(17,18,26,.07)' }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="grid grid-cols-2 items-center gap-14 max-md:grid-cols-1">
          {/* LEFT */}
          <div>
            <span className="text-[14px] font-bold" style={{ color: '#FF6B35' }}>
              Book your free audit
            </span>
            <h2
              className="text-[42px] font-extrabold tracking-[-.03em] max-md:text-[26px]"
              style={{ color: '#11121a' }}
            >
              See exactly where you&apos;re leaking ad spend.
            </h2>
            <p className="mt-4 max-w-[460px] text-[17px]" style={{ color: '#4b4b6a' }}>
              Tell us a little about your business and we&apos;ll send back a no-commitment audit of your
              funnel and ad accounts — the gaps, and the plan to fix them.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[13px] font-bold"
                    style={{ background: 'rgba(0,212,170,.14)', color: '#00b894' }}
                  >
                    ✓
                  </span>
                  <span className="text-[15px]" style={{ color: '#2a2a3a' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 flex items-center gap-2 pt-5"
              style={{ borderTop: '1px solid rgba(17,18,26,.1)' }}
            >
              <span className="text-[15px]" style={{ color: '#FFC83D' }}>
                ★★★★★
              </span>
              <span className="text-[14px] font-semibold" style={{ color: '#4b4b6a' }}>
                Rated 4.9/5 by 187+ brands across India &amp; abroad
              </span>
            </div>
          </div>

          {/* RIGHT — form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[22px] bg-white p-8 max-md:p-6"
            style={{
              border: '1px solid rgba(17,18,26,.09)',
              boxShadow: '0 24px 60px rgba(17,18,26,.10)',
            }}
          >
            {status === 'success' ? (
              <div role="status" aria-live="polite">
                <div
                  className="grid h-12 w-12 place-items-center rounded-full text-[22px] font-bold"
                  style={{ background: 'rgba(0,212,170,.14)', color: '#00b894' }}
                >
                  ✓
                </div>
                <h3 className="mt-4 text-[20px] font-extrabold" style={{ color: '#11121a' }}>
                  Thanks — we got it.
                </h3>
                <p className="mt-2 text-[14px]" style={{ color: '#4b4b6a' }}>
                  We&apos;ll reply within 24 hours. Reach us at{' '}
                  <a className="underline" href={`mailto:${RECIPIENT}`}>
                    Info@growthescalators.com
                  </a>{' '}
                  or WhatsApp{' '}
                  <a className="underline" href="https://wa.me/917733888883">
                    +91 77338 88883
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  <label className="flex flex-col gap-1.5">
                    <span className={labelCls} style={{ color: '#4b4b6a' }}>
                      Full name
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className={labelCls} style={{ color: '#4b4b6a' }}>
                      WhatsApp / Phone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 …"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </label>
                </div>

                <label className="mt-4 flex flex-col gap-1.5">
                  <span className={labelCls} style={{ color: '#4b4b6a' }}>
                    Work email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={inputCls}
                    style={inputStyle}
                  />
                </label>

                <label className="mt-4 flex flex-col gap-1.5">
                  <span className={labelCls} style={{ color: '#4b4b6a' }}>
                    Business / website
                  </span>
                  <input
                    name="business"
                    type="text"
                    placeholder="company.com"
                    className={inputCls}
                    style={inputStyle}
                  />
                </label>

                <div className="mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  <label className="flex flex-col gap-1.5">
                    <span className={labelCls} style={{ color: '#4b4b6a' }}>
                      I need help with
                    </span>
                    <select name="service" defaultValue="Performance Ads" className={inputCls} style={inputStyle}>
                      <option>Performance Ads</option>
                      <option>Funnels &amp; Automation</option>
                      <option>Web &amp; Software</option>
                      <option>Social Media</option>
                      <option>Branding</option>
                      <option>AI SEO</option>
                      <option>Staffing &amp; Recruiting</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className={labelCls} style={{ color: '#4b4b6a' }}>
                      Monthly budget
                    </span>
                    <select name="budget" defaultValue="Under ₹50K" className={inputCls} style={inputStyle}>
                      <option>Under ₹50K</option>
                      <option>₹50K–₹1L</option>
                      <option>₹1L–₹3L</option>
                      <option>₹3L+</option>
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 w-full rounded-[12px] py-4 text-[16px] font-extrabold text-white disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
                >
                  {submitting ? 'Booking…' : 'Book My Free Call →'}
                </button>

                {status === 'error' && (
                  <p className="mt-3 text-[13px]" role="alert" style={{ color: '#4b4b6a' }}>
                    Couldn&apos;t send your request{errorMsg ? ` (${errorMsg})` : ''}.{' '}
                    <a className="underline" style={{ color: '#FF6B35' }} href={buildMailtoFallback()}>
                      Email us at Info@growthescalators.com
                    </a>{' '}
                    instead.
                  </p>
                )}

                {/* Divider with centered "or" */}
                <div className="my-4 flex items-center gap-3">
                  <span className="h-px flex-1" style={{ background: 'rgba(17,18,26,.1)' }} />
                  <span className="text-[12px]" style={{ color: '#9898b8' }}>
                    or
                  </span>
                  <span className="h-px flex-1" style={{ background: 'rgba(17,18,26,.1)' }} />
                </div>

                <a
                  href="https://wa.me/917733888883"
                  className="block w-full rounded-[12px] py-3.5 text-center text-[15px] font-extrabold text-white"
                  style={{ background: '#25D366' }}
                >
                  Chat on WhatsApp
                </a>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
