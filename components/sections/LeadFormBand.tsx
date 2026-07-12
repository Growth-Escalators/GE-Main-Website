'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Check } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

const SERVICE_OPTIONS = [
  'Performance Ads',
  'Funnels & Automation',
  'Web & Software',
  'Social Media Marketing',
  'Branding & Identity',
  'SEO & AI Growth',
  'Staffing & Recruiting',
]
const BUDGET_OPTIONS = [
  'Under ₹50K / $1k',
  '₹50K–2L / $1k–$5k',
  '₹2L–10L / $5k–$15k',
  '₹10L+ / $15k+',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadFormBand() {
  const [status, setStatus] = useState<Status>('idle')
  const [err, setErr] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErr(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'Homepage Free Audit' }
    data.forEach((v, k) => { fields[k] = String(v) })

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
      trackLead('form', { source: 'Homepage Free Audit' })
      form.reset()
    } catch (error) {
      setStatus('error')
      setErr((error as Error).message || 'Something went wrong')
    }
  }

  return (
    <section
      id="book"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}
    >
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 70%)',
          top: -160, right: -120,
          animation: 'orb-drift-1 28s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(108,99,255,0.10), transparent 70%)',
          bottom: -120, left: -100,
          animation: 'orb-drift-3 30s ease-in-out infinite',
        }}
      />
      <div
        className="container-x grid grid-cols-1 lg:grid-cols-2 items-center relative"
        style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', gap: 'clamp(32px, 5vw, 56px)' }}
      >
        {/* Left intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Book your free audit
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.08, margin: '14px 0 16px',
              color: 'var(--text-primary)',
            }}
          >
            See exactly where you&rsquo;re leaking ad spend.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 460, margin: '0 0 28px', lineHeight: 1.6 }}>
            Tell us a little about your business and we&rsquo;ll send back a no-commitment audit
            of your funnel and ad accounts — the gaps, and the plan to fix them.
          </p>
          <ul className="flex flex-col" style={{ gap: 14, marginBottom: 30, listStyle: 'none', padding: 0 }}>
            {[
              'A real strategist reviews your accounts — not a template',
              'Clear next steps you can use with or without us',
              'We reply within 24 hours — no spam, ever',
            ].map((line) => (
              <li key={line} className="flex items-center" style={{ gap: 11, fontSize: 15, color: '#2a2a3a' }}>
                <span
                  className="inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: 'rgba(0,212,170,0.14)', color: 'var(--teal-dark)',
                  }}
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex items-center" style={{ gap: 14, paddingTop: 22, borderTop: '1px solid rgba(17,18,26,0.1)' }}>
            <span className="flex" style={{ color: 'var(--gold)', gap: 1 }}>
              {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={15} fill="currentColor" stroke="none" />)}
            </span>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600 }}>
              Rated 4.9/5 by 187+ brands across India &amp; abroad
            </span>
          </div>
        </motion.div>

        {/* Right form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative"
          style={{
            borderRadius: 22,
            padding: 'clamp(20px, 4vw, 32px)',
          }}
        >
          {status === 'success' ? (
            <div className="text-center" style={{ padding: '40px 0' }}>
              <div
                className="inline-flex items-center justify-center"
                style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(0,212,170,0.16)', color: 'var(--teal-dark)',
                  marginBottom: 16,
                }}
              >
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
                Got it — we&rsquo;re on it.
              </h3>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We&rsquo;ll review your details and reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 14 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <Field name="name"  label="Full name"          placeholder="Jane Doe"     required />
                <Field name="phone" label="WhatsApp / Phone"   placeholder="+1 / +91 …"   required type="tel" />
              </div>
              <Field name="email"   label="Work email"         placeholder="jane@company.com" required type="email" />
              <Field name="company" label="Business / website" placeholder="company.com" />
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <SelectField name="service" label="I need help with" options={SERVICE_OPTIONS} />
                <SelectField name="budget"  label="Monthly budget"    options={BUDGET_OPTIONS} />
              </div>
              <button
                type="submit"
                className="lf-submit"
                disabled={status === 'submitting'}
                style={{
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                  color: '#fff',
                  fontSize: 16, fontWeight: 800,
                  padding: 16, borderRadius: 12,
                  boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                  marginTop: 8,
                  transition: 'transform .25s, box-shadow .25s, opacity .25s',
                  opacity: status === 'submitting' ? 0.65 : 1,
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                }}
              >
                {status === 'submitting' ? 'Sending…' : 'Book My Free Call →'}
              </button>

              <div className="flex items-center" style={{ gap: 10, marginTop: 6 }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(17,18,26,0.1)' }} />
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>or</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(17,18,26,0.1)' }} />
              </div>

              <a
                href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20to%20discuss%20a%20free%20audit."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead('whatsapp')}
                className="text-center wa-btn"
                style={{
                  background: 'var(--green-wa)',
                  color: '#fff',
                  fontSize: 15, fontWeight: 800,
                  padding: 14, borderRadius: 12,
                  marginTop: 4,
                  display: 'block',
                  transition: 'transform .25s, opacity .25s',
                }}
              >
                Chat on WhatsApp
              </a>

              {status === 'error' && (
                <p role="alert" style={{ fontSize: 13, color: '#b91c1c', marginTop: 6 }}>
                  Couldn&rsquo;t send{err ? ` (${err})` : ''}.{' '}
                  <a href="mailto:Info@growthescalators.com" onClick={() => trackLead('email')} className="underline">
                    Email us directly →
                  </a>
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        :global(.lf-submit:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
        :global(.wa-btn:hover) { transform: translateY(-2px); opacity: 0.95; }
      `}</style>
    </section>
  )
}

function Field({
  name, label, placeholder, type = 'text', required,
}: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
        style={{
          width: '100%',
          padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)',
          borderRadius: 11,
          fontSize: 14,
          color: 'var(--text-primary)',
          boxSizing: 'border-box',
          background: '#fff',
        }}
      />
    </label>
  )
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        style={{
          width: '100%',
          padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)',
          borderRadius: 11,
          fontSize: 14,
          color: 'var(--text-primary)',
          boxSizing: 'border-box',
          background: '#fff',
          appearance: 'none',
        }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}
