'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/analytics'
import styles from './WhiteLabelLeadForm.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PROJECT_TYPES = [
  'SaaS / web application',
  'AI automation / agent',
  'Ecommerce / checkout',
  'Internal tool / CRM',
  'Dedicated engineering capacity',
  'Something else',
]

export default function WhiteLabelLeadForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload: Record<string, string> = {
      source: 'White Label Software Development',
      service: 'Web & Software',
    }

    formData.forEach((value, key) => {
      payload[key] = String(value)
    })

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || 'Unable to send your enquiry')
      }

      trackLead('form', { source: 'White Label Software Development' })
      form.reset()
      setStatus('success')
    } catch (err) {
      setError((err as Error).message || 'Unable to send your enquiry')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span>Enquiry received</span>
        <h3>We&apos;ll review the brief before we reply.</h3>
        <p>Expect a practical response about scope, delivery shape and the next useful conversation.</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@agency.com" />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span>Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" required placeholder="+91 / +44 / +1 …" />
        </label>
        <label>
          <span>Agency / company</span>
          <input name="company" autoComplete="organization" placeholder="Company name" />
        </label>
      </div>
      <label>
        <span>What do you need delivered?</span>
        <select name="projectType" defaultValue="">
          <option value="" disabled>Select project type</option>
          {PROJECT_TYPES.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      <label>
        <span>Brief / context</span>
        <textarea
          name="message"
          rows={5}
          placeholder="What has been sold, what needs to be built, expected timeline, integrations, or anything we should know before replying."
        />
      </label>
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Discuss the project ↗'}
      </button>
      <p className={styles.note}>Your client relationship stays yours. We use this information only to evaluate the enquiry.</p>
      {status === 'error' && (
        <p className={styles.error} role="alert">
          {error}. You can also email <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.
        </p>
      )}
    </form>
  )
}
