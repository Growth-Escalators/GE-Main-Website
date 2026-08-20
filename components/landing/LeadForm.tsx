'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LeadForm.module.css'
import { trackLead } from '@/lib/analytics'
import { getLeadAttribution } from '@/lib/leadAttribution'

export type LeadFormVariant = 'generic' | 'd2c' | 'clinic'

type Props = {
  /** Email address used in the mailto fallback link if /api/lead errors. */
  recipient?: string
  /** Subject line prefix for the mailto fallback. Also used as the lead `source` label. */
  subjectPrefix?: string
  /** Headline above the form. */
  headline?: string
  /** Subheadline below the headline. */
  subhead?: string
  /** Section tag pill text. */
  tag?: string
  /** Controls which qualifying questions the visitor sees. */
  variant?: LeadFormVariant
  /** CRM/reporting classification, e.g. d2c or clinic. */
  businessVertical?: string
  /** Optional page-level service. If present, it is submitted without asking again. */
  service?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'
type LeadFields = Record<string, string | boolean>

const D2C_SERVICES = [
  'Meta Ads',
  'Google Ads',
  'Shopify CRO',
  'Shopify / Website Development',
  'SEO & AI Search',
  'Full Growth Support',
]

const CLINIC_SERVICES = [
  'Patient Lead Generation',
  'Google Ads',
  'Meta Ads',
  'Local SEO / Google Maps',
  'Website / Conversion Improvement',
  'Full Clinic Growth Support',
]

const D2C_REVENUE = [
  'Under ₹5L / month',
  '₹5L–₹25L / month',
  '₹25L–₹50L / month',
  '₹50L–₹1Cr / month',
  '₹1Cr+ / month',
]

const MARKETING_SPEND = [
  'Not spending yet',
  'Under ₹50K / month',
  '₹50K–₹2L / month',
  '₹2L–₹5L / month',
  '₹5L–₹10L / month',
  '₹10L+ / month',
]

function inferLeadFormVariant(subjectPrefix: string, headline: string): LeadFormVariant {
  const context = `${subjectPrefix} ${headline}`.toLowerCase()
  if (/(d2c|e-?commerce|shopify|fashion|beauty|skincare|apparel)/.test(context)) return 'd2c'
  if (/(clinic|doctor|dental|dentist|healthcare|medical|patient|hospital|orthop|dermat)/.test(context)) return 'clinic'
  return 'generic'
}

export default function LeadForm({
  recipient = 'Info@growthescalators.com',
  subjectPrefix = 'New Website Lead',
  headline = 'Tell us about your business',
  subhead = "Fill this in and we'll get back within 24 hours with a no-obligation strategy session.",
  tag = "LET'S TALK",
  variant: requestedVariant,
  businessVertical,
  service,
}: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const variant = requestedVariant ?? inferLeadFormVariant(subjectPrefix, headline)
  const vertical = businessVertical || (variant === 'generic' ? 'general' : variant)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const attribution = getLeadAttribution()
    const fields: LeadFields = {
      source: subjectPrefix,
      formType: variant,
      businessVertical: vertical,
      ...attribution,
    }
    if (service) fields.service = service
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
      trackLead('form', {
        source: subjectPrefix,
        form_type: variant,
        business_vertical: vertical,
        service: String(fields.service || ''),
      })
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }

  function buildMailtoFallback(): string {
    const subject = `${subjectPrefix} (form fallback)`
    const body = `The contact form on growthescalators.com had an error.\n\nPlease respond to this email and we'll follow up directly.`
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const submitting = status === 'submitting'

  return (
    <section id="lead-form" className={styles.section} aria-label="Lead form">
      <div className={styles.aurora} aria-hidden>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={`${styles.inner} container-x`}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className="section-tag">{tag}</span>
            <h2 className={styles.headline}>{headline}</h2>
            <p className={styles.subhead}>{subhead}</p>
            <ul className={styles.bullets}>
              <li>✓ No commitment — the first strategy session is free</li>
              <li>✓ Reply within 24 hours, weekdays</li>
              <li>✓ Your enquiry is reviewed by a real person</li>
            </ul>
          </div>

          {status === 'success' ? (
            <motion.div
              className={`${styles.form} ${styles.successPanel} glass`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              role="status"
              aria-live="polite"
            >
              <div className={styles.successCheck} aria-hidden>✓</div>
              <h3 className={styles.successTitle}>Thanks — we got it.</h3>
              <p className={styles.successBody}>
                We&rsquo;ll review your details and reply within 24 hours (weekdays). If you&rsquo;d like to fast-track, you can also reach us at{' '}
                <a href={`mailto:${recipient}`} onClick={() => trackLead('email')}>{recipient}</a> or on WhatsApp at +91 77338 88883.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className={`${styles.form} glass`}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className={styles.row}>
                <TextField name="name" label="Your name" required autoComplete="name" placeholder="Your name" />
                <TextField name="phone" label="Phone / WhatsApp" type="tel" required autoComplete="tel" placeholder="+91 98xxxxxxxx" />
              </div>

              <TextField name="email" label="Work email" type="email" required autoComplete="email" placeholder="you@company.com" />

              {variant === 'd2c' && (
                <>
                  <div className={styles.row}>
                    <TextField name="company" label="Brand name" placeholder="Your brand" />
                    <TextField name="website" label="Website / Shopify URL" type="url" placeholder="https://yourbrand.com" />
                  </div>
                  <div className={styles.row}>
                    <SelectField name="monthlyRevenue" label="Monthly online revenue" options={D2C_REVENUE} />
                    <SelectField name="budget" label="Monthly ad / marketing spend" options={MARKETING_SPEND} />
                  </div>
                  {!service && <SelectField name="service" label="Where do you need help?" options={D2C_SERVICES} />}
                  <TextAreaField label="What is the main growth constraint? (optional)" placeholder="ROAS plateau, low conversion rate, creative fatigue, scaling issues…" />
                </>
              )}

              {variant === 'clinic' && (
                <>
                  <div className={styles.row}>
                    <TextField name="clinic" label="Clinic / practice name" placeholder="Clinic name" />
                    <TextField name="specialization" label="Speciality" placeholder="Orthopaedics, dental, dermatology…" />
                  </div>
                  <div className={styles.row}>
                    <TextField name="city" label="City / service area" placeholder="Jaipur" />
                    <SelectField name="budget" label="Monthly marketing spend" options={MARKETING_SPEND} />
                  </div>
                  {!service && <SelectField name="service" label="What do you need help with?" options={CLINIC_SERVICES} />}
                  <TextAreaField label="What are you trying to improve? (optional)" placeholder="More appointments, better lead quality, Google visibility, website conversion…" />
                </>
              )}

              {variant === 'generic' && (
                <>
                  <div className={styles.row}>
                    <TextField name="company" label="Business / brand name" placeholder="Your business" />
                    <TextField name="industry" label="Industry / category" placeholder="Fashion, healthcare, SaaS…" />
                  </div>
                  <div className={styles.row}>
                    <TextField name="city" label="City / market" placeholder="Jaipur / India / Global" />
                    <SelectField name="budget" label="Current monthly marketing spend" options={MARKETING_SPEND} />
                  </div>
                  <TextAreaField label="What do you want help with? (optional)" placeholder="Tell us what you want to grow, improve or fix." />
                </>
              )}

              <button type="submit" className={`btn-primary ${styles.submit}`} disabled={submitting}>
                {submitting ? 'Sending…' : 'Send my enquiry'}
              </button>

              {status === 'error' && (
                <p className={styles.errorPanel} role="alert">
                  Couldn&rsquo;t send your enquiry{errorMsg ? ` (${errorMsg})` : ''}.{' '}
                  <a href={buildMailtoFallback()} onClick={() => trackLead('email')}>Email us directly instead</a> and we&rsquo;ll reply right away.
                </p>
              )}

              <p className={styles.footnote}>
                We&rsquo;ll only use your details to reply to this enquiry. We never share them with third parties.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

function TextField({
  name,
  label,
  type = 'text',
  required,
  autoComplete,
  placeholder,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <label className={styles.field}>
      <span>{label}{required ? ' *' : ''}</span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} />
    </label>
  )
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <select name={name} defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

function TextAreaField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <textarea name="message" rows={3} placeholder={placeholder} />
    </label>
  )
}
