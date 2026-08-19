'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/analytics'
import styles from './CommercialLandingPage.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Props = {
  source: string
  headline?: string
  subhead?: string
  tag?: string
  industryLabel?: string
}

export default function CommercialLeadForm({
  source,
  headline = 'Tell us where growth is stuck.',
  subhead = 'Share the current situation. A real strategist will review it and reply with the highest-leverage next move.',
  tag = 'Free growth audit',
  industryLabel = 'Growth',
}: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError(null)

    const form = event.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source }
    data.forEach((value, key) => { fields[key] = String(value) })

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${response.status}`)
      }
      trackLead('form', { source })
      setStatus('success')
      form.reset()
    } catch (err) {
      setError((err as Error).message || 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <section id="lead-form" className={styles.leadChapter} aria-label="Free growth audit form">
      <div className={styles.shell}>
        <div className={styles.leadGrid}>
          <div className={styles.leadCopy} data-cm-reveal>
            <span className={styles.kicker}>{tag}</span>
            <h2>{headline}</h2>
            <p>{subhead}</p>
            <div className={styles.auditPath} aria-label="Audit areas">
              {['Acquisition', 'Conversion', 'Retention', 'Systems'].map((item, index) => (
                <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
              ))}
            </div>
            <div className={styles.directContact}>
              <span>Prefer direct?</span>
              <a href="mailto:jatin@growthescalators.com" onClick={() => trackLead('email')}>jatin@growthescalators.com ↗</a>
              <a href="tel:+917733888883" onClick={() => trackLead('call')}>+91-7733888883 ↗</a>
            </div>
          </div>

          <div className={styles.leadCard} data-cm-reveal>
            <div className={styles.formHead}><span>01</span><strong>{industryLabel} enquiry</strong></div>
            {status === 'success' ? (
              <div className={styles.successState} role="status" aria-live="polite">
                <span>✓</span>
                <h3>We got it.</h3>
                <p>We’ll review the details and reply within 24 hours on a working day.</p>
              </div>
            ) : (
              <form className={styles.commercialForm} onSubmit={handleSubmit}>
                <div className={styles.formTwo}>
                  <label><span>Name *</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
                  <label><span>Phone / WhatsApp *</span><input name="phone" type="tel" required autoComplete="tel" placeholder="+91 …" /></label>
                </div>
                <label><span>Work email *</span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
                <label><span>Business / website</span><input name="company" placeholder="company.com" /></label>
                <div className={styles.formTwo}>
                  <label><span>What needs to move?</span><select name="goal" defaultValue=""><option value="" disabled>Select</option><option>More qualified demand</option><option>Better conversion</option><option>Higher ROAS / lower CAC</option><option>Website / product build</option><option>Automation / systems</option><option>Not sure yet</option></select></label>
                  <label><span>Monthly budget</span><select name="budget" defaultValue=""><option value="" disabled>Select</option><option>Under ₹50K</option><option>₹50K–₹2L</option><option>₹2L–₹10L</option><option>₹10L+</option></select></label>
                </div>
                <label><span>Context</span><textarea name="message" rows={4} placeholder="What are you trying to improve, and what is currently getting in the way?" /></label>
                <button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Get my free audit ↗'}</button>
                {status === 'error' && <p className={styles.formError}>Couldn’t send{error ? ` (${error})` : ''}. <a href="mailto:jatin@growthescalators.com">Email Jatin directly →</a></p>}
                <small>We only use these details to respond to this enquiry.</small>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
