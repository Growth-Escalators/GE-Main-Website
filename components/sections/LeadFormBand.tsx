'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
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
type LeadFormBandProps = { submitLabel?: string }

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function LeadFormBand({ submitLabel = 'Book My Free Call →' }: LeadFormBandProps) {
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
    <section id="book" className="audit-chapter">
      <div className="audit-grid-bg" aria-hidden />
      <div className="audit-shell">
        <motion.div
          className="audit-copy"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="audit-eyebrow">Grow faster · waste less</span>
          <h2>GET YOUR<br />FREE GROWTH<br />AUDIT.</h2>
          <p>
            Find the constraint before you add more spend. A real strategist reviews the acquisition
            and conversion journey and sends back the gaps that matter most.
          </p>

          <div className="audit-points">
            {[
              'A real strategist reviews your accounts — not a template',
              'Clear next steps you can use with or without us',
              'We reply within 24 hours — no spam, ever',
            ].map((line) => (
              <div className="audit-point" key={line}>
                <span><Check size={13} strokeWidth={3} /></span>{line}
              </div>
            ))}
          </div>

          <div className="audit-proof">
            <span className="audit-stars">
              {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={15} fill="currentColor" stroke="none" />)}
            </span>
            <strong>4.9/5</strong>
            <small>187+ Google reviews</small>
          </div>
        </motion.div>

        <motion.div
          className="audit-form-card"
          initial={{ opacity: 0, y: 46, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.82, delay: 0.08, ease }}
        >
          <div className="form-kicker"><span>01</span><b>Tell us where growth is stuck.</b></div>

          {status === 'success' ? (
            <div className="success-state">
              <div className="success-icon"><Check size={30} strokeWidth={3} /></div>
              <h3>We&apos;re on it.</h3>
              <p>We&apos;ll review your details and reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="audit-form">
              <div className="field-grid">
                <Field name="name" label="Full name" placeholder="Jane Doe" required />
                <Field name="phone" label="WhatsApp / Phone" placeholder="+1 / +91 …" required type="tel" />
              </div>
              <Field name="email" label="Work email" placeholder="jane@company.com" required type="email" />
              <Field name="company" label="Business / website" placeholder="company.com" />
              <div className="field-grid">
                <SelectField name="service" label="I need help with" options={SERVICE_OPTIONS} />
                <SelectField name="budget" label="Monthly budget" options={BUDGET_OPTIONS} />
              </div>

              <button type="submit" className="audit-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : submitLabel}
              </button>

              <div className="form-or"><span />or<span /></div>

              <a
                href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20to%20discuss%20a%20free%20audit."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead('whatsapp')}
                className="audit-whatsapp"
              >
                Chat on WhatsApp ↗
              </a>

              {status === 'error' && (
                <p role="alert" className="form-error">
                  Couldn&apos;t send{err ? ` (${err})` : ''}.{' '}
                  <a href="mailto:Info@growthescalators.com" onClick={() => trackLead('email')}>Email us directly →</a>
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        :global(.audit-chapter) {
          --font-display: 'Arial Narrow';
          --audit-ink: #170653;
          position: relative;
          overflow: hidden;
          background: var(--audit-ink);
          color: #fff;
          min-height: 930px;
          padding: clamp(96px, 10vw, 150px) 0;
          isolation: isolate;
        }
        :global(.audit-grid-bg) {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .18;
          background-image:
            radial-gradient(circle at 11% 78%, rgba(101, 238, 197, .55), transparent 18%),
            radial-gradient(circle at 91% 12%, rgba(78, 65, 255, .72), transparent 24%),
            linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px);
          background-size: auto, auto, 48px 48px, 48px 48px;
          mask-image: linear-gradient(to bottom, #000, rgba(0,0,0,.46));
        }
        :global(.audit-shell) {
          width: min(100%, 1440px);
          margin: 0 auto;
          padding: 0 clamp(24px, 5vw, 76px);
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: clamp(54px, 7vw, 104px);
          align-items: center;
        }
        :global(.audit-eyebrow) {
          display: block;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #7bf0c4;
        }
        :global(.audit-copy h2) {
          margin: 22px 0 26px;
          font-family: var(--font-display), var(--font-jakarta), sans-serif;
          font-size: clamp(70px, 8.4vw, 124px);
          line-height: .78;
          letter-spacing: -.04em;
          text-transform: uppercase;
          color: #fff;
        }
        :global(.audit-copy > p) {
          max-width: 590px;
          margin: 0;
          font-size: 17px;
          line-height: 1.58;
          color: rgba(255,255,255,.72);
        }
        :global(.audit-points) { margin-top: 32px; border-top: 1px solid rgba(255,255,255,.2); }
        :global(.audit-point) { min-height: 53px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,.2); font-size: 12px; font-weight: 700; color: rgba(255,255,255,.84); }
        :global(.audit-point > span) { width: 23px; height: 23px; display: grid; place-items: center; border-radius: 50%; background: #72ebc0; color: var(--audit-ink); }
        :global(.audit-proof) { display: flex; align-items: center; gap: 10px; margin-top: 27px; }
        :global(.audit-stars) { display: flex; color: #ffbd3d; }
        :global(.audit-proof strong) { font-family: var(--font-display), sans-serif; font-size: 25px; }
        :global(.audit-proof small) { color: rgba(255,255,255,.57); font-size: 10px; font-weight: 700; }
        :global(.audit-form-card) { padding: clamp(28px, 4vw, 48px); border-radius: 32px; background: #fff; color: var(--audit-ink); box-shadow: 0 34px 78px rgba(0,0,0,.28); }
        :global(.form-kicker) { display: flex; align-items: center; gap: 13px; padding-bottom: 24px; border-bottom: 1px solid rgba(23,6,83,.14); }
        :global(.form-kicker span) { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: #eeeaff; color: #5c24f5; font-size: 10px; font-weight: 900; }
        :global(.form-kicker b) { font-family: var(--font-display), sans-serif; font-size: 25px; text-transform: uppercase; letter-spacing: -.01em; }
        :global(.audit-form) { display: flex; flex-direction: column; gap: 16px; padding-top: 27px; }
        :global(.field-grid) { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        :global(.audit-field) { display: block; }
        :global(.audit-field-label) { display: block; margin-bottom: 7px; font-size: 9px; font-weight: 900; letter-spacing: .095em; text-transform: uppercase; color: #5c5b70; }
        :global(.audit-control) { width: 100%; min-height: 52px; padding: 0 15px; border: 1px solid rgba(23,6,83,.18); border-radius: 13px; background: #f8f8fc; color: var(--audit-ink); font: inherit; font-size: 13px; outline: none; transition: border-color .2s ease, box-shadow .2s ease, background .2s ease; }
        :global(.audit-control:focus) { border-color: #5c24f5; box-shadow: 0 0 0 4px rgba(92,36,245,.1); background: #fff; }
        :global(.audit-submit), :global(.audit-whatsapp) { width: 100%; min-height: 55px; display: flex; align-items: center; justify-content: center; border-radius: 999px; font-size: 11px; font-weight: 900; letter-spacing: .05em; text-transform: uppercase; transition: transform .22s ease, box-shadow .22s ease, opacity .22s ease; }
        :global(.audit-submit) { margin-top: 7px; background: #5c24f5; color: #fff; box-shadow: 0 10px 26px rgba(92,36,245,.27); cursor: pointer; }
        :global(.audit-submit:hover) { transform: translateY(-3px); box-shadow: 0 15px 31px rgba(92,36,245,.34); }
        :global(.audit-submit:disabled) { cursor: wait; opacity: .62; transform: none; }
        :global(.audit-whatsapp) { color: var(--audit-ink); border: 1px solid rgba(23,6,83,.22); }
        :global(.audit-whatsapp:hover) { transform: translateY(-2px); }
        :global(.form-or) { display: grid; grid-template-columns: 1fr auto 1fr; gap: 10px; align-items: center; color: #9795a6; font-size: 10px; font-weight: 800; text-transform: uppercase; }
        :global(.form-or span) { height: 1px; background: rgba(23,6,83,.12); }
        :global(.form-error) { margin: 2px 0 0; font-size: 12px; color: #a31313; }.form-error a { text-decoration: underline; }
        :global(.success-state) { min-height: 440px; display: grid; place-items: center; align-content: center; text-align: center; }
        :global(.success-icon) { width: 60px; height: 60px; display: grid; place-items: center; border-radius: 50%; background: #dff9ef; color: #157954; }
        :global(.success-state h3) { margin: 18px 0 9px; font-family: var(--font-display), sans-serif; font-size: 50px; text-transform: uppercase; }
        :global(.success-state p) { margin: 0; color: #6d6b7c; }
        @media (max-width: 960px) {
          :global(.audit-chapter) { min-height: auto; }
          :global(.audit-shell) { grid-template-columns: 1fr; }
          :global(.audit-copy) { max-width: 740px; }
          :global(.audit-copy h2) { font-size: clamp(72px, 13vw, 108px); }
        }
        @media (max-width: 640px) {
          :global(.audit-chapter) { padding: 82px 0 92px; }
          :global(.audit-shell) { padding-inline: 20px; gap: 45px; }
          :global(.audit-copy h2) { font-size: clamp(61px, 18vw, 78px); }
          :global(.audit-copy > p) { font-size: 15px; }
          :global(.audit-form-card) { padding: 25px 19px; border-radius: 24px; }
          :global(.field-grid) { grid-template-columns: 1fr; }
          :global(.form-kicker b) { font-size: 21px; }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.audit-submit), :global(.audit-whatsapp), :global(.audit-control) { transition: none; }
        }
      `}</style>
    </section>
  )
}

function Field({ name, label, placeholder, type = 'text', required }: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="audit-field">
      <span className="audit-field-label">{label}{required ? ' *' : ''}</span>
      <input
        className="audit-control"
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
      />
    </label>
  )
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="audit-field">
      <span className="audit-field-label">{label}</span>
      <select className="audit-control" name={name} defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}
