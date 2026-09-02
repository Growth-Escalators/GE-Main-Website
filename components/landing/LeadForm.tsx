'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LeadForm.module.css'
import { trackLead } from '@/lib/analytics'
import { getLeadAttribution } from '@/lib/leadAttribution'
import { WhatsAppConsentField } from '@/components/landing/WhatsAppConsent'

export type LeadFormVariant = 'generic' | 'd2c' | 'clinic' | 'agency'

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

const AGENCY_SERVICES = [
  'SEO & AI Search',
  'Performance Marketing',
  'Shopify Development',
  'Website Development',
  'Software / App Development',
  'Multiple Services',
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

const AGENCY_PROJECT_VOLUME = [
  '1 active client / project',
  '2–5 client projects / month',
  '6–10 client projects / month',
  '10+ client projects / month',
  'Exploring capacity before demand',
]

const AGENCY_REQUIREMENT_STATUS = [
  'Yes — active requirement now',
  'Likely within 30 days',
  'Building a recurring fulfilment partner',
  'Researching options for later',
]

const SALES_CALL_URL = 'https://cal.com/jatin-agrawal'
const SALES_WHATSAPP_URL = 'https://wa.me/917733888883'

function inferLeadFormVariant(subjectPrefix: string, headline: string): LeadFormVariant {
  const context = `${subjectPrefix} ${headline}`.toLowerCase()
  if (/(white[- ]?label|agency partner|agency fulfil|agency fulfill|outsourced? delivery|fulfilment partner|fulfillment partner)/.test(context)) return 'agency'
  if (/(d2c|e-?commerce|shopify|fashion|beauty|skincare|apparel)/.test(context)) return 'd2c'
  if (/(clinic|doctor|dental|dentist|healthcare|medical|patient|hospital|orthop|dermat|ivf|fertility)/.test(context)) return 'clinic'
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
  const isMainD2CAudit = variant === 'd2c' && subjectPrefix.trim().toLowerCase() === 'new d2c lead'
  const isAgency = variant === 'agency'

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
  const submitLabel = isMainD2CAudit
    ? 'Get My D2C Growth Audit →'
    : isAgency
      ? 'Send Client Requirement →'
      : 'Send my enquiry'

  const successCopy = isMainD2CAudit
    ? 'We’ll review your revenue, spend and growth constraint before the first conversation so the call starts with the highest-impact opportunity.'
    : isAgency
      ? 'We’ll review the client requirement and come back with the practical scope, dependencies and delivery approach. If the requirement is active, you can book the scoping call now.'
      : variant === 'clinic'
        ? 'We’ll review your practice, market and patient-growth requirement before we respond. You can book a growth review now if you want to move faster.'
        : variant === 'd2c'
          ? 'We’ll review your brand, current spend and growth requirement before we respond. You can book a focused growth review now if you want to move faster.'
          : 'We’ll review the enquiry before we respond so the first conversation is useful. You can book a strategy call now if you want to move faster.'

  const bookingLabel = isAgency
    ? 'Book a delivery scoping call →'
    : variant === 'clinic'
      ? 'Book a clinic growth review →'
      : variant === 'd2c'
        ? 'Book a D2C growth review →'
        : 'Book a strategy call →'

  const whatsappMessage = isAgency
    ? 'Hi Growth Escalators, I just submitted an agency/client requirement on the website and would like to fast-track it.'
    : `Hi Growth Escalators, I just submitted a ${variant === 'clinic' ? 'clinic growth' : variant === 'd2c' ? 'D2C growth' : 'website'} enquiry and would like to fast-track it.`
  const whatsappHref = `${SALES_WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`

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

            {isMainD2CAudit && (
              <div className={styles.proofPanel}>
                <span className={styles.proofKicker}>A RECENT D2C REBUILD</span>
                <strong>Paraiso</strong>
                <div className={styles.proofMetrics}>
                  <span><b>1.9× → 3.2×</b><small>ROAS</small></span>
                  <span><b>6×</b><small>Revenue growth</small></span>
                  <span><b>60 days</b><small>To the new run-rate</small></span>
                </div>
              </div>
            )}

            <ul className={styles.bullets}>
              {isMainD2CAudit ? (
                <>
                  <li>✓ We identify the highest-impact revenue constraint first</li>
                  <li>✓ You get a clear view of what we would fix before adding more spend</li>
                  <li>✓ A real strategist reviews the numbers — not a template</li>
                  <li>✓ No commitment required to use the recommendations</li>
                </>
              ) : isAgency ? (
                <>
                  <li>✓ Start with one client or one contained project</li>
                  <li>✓ NDA, client-protection and visibility rules agreed before kickoff</li>
                  <li>✓ We reply with scope, dependencies and the practical next step</li>
                </>
              ) : (
                <>
                  <li>✓ No commitment — the first strategy session is free</li>
                  <li>✓ Reply within 24 hours, weekdays</li>
                  <li>✓ Your enquiry is reviewed by a real person</li>
                </>
              )}
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
              <h3 className={styles.successTitle}>
                {isMainD2CAudit ? 'Your audit request is in.' : isAgency ? 'Your client requirement is in.' : 'Thanks — we got it.'}
              </h3>
              <p className={styles.successBody}>{successCopy}</p>
              <div className={styles.successActions}>
                <a
                  href={SALES_CALL_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-track-source={`${variant}_form_success_booking`}
                  className={styles.successPrimary}
                >
                  {bookingLabel}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-track-source={`${variant}_form_success_whatsapp`}
                  className={styles.successSecondary}
                >
                  Fast-track on WhatsApp
                </a>
              </div>
              <p className={styles.successFootnote}>
                Prefer email? <a href={`mailto:${recipient}`}>{recipient}</a>. Otherwise we&rsquo;ll reply within 24 hours on weekdays.
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

              {variant === 'd2c' && isMainD2CAudit && (
                <>
                  <TextField name="website" label="Brand / website" placeholder="yourbrand.com" />
                  <div className={styles.row}>
                    <SelectField name="monthlyRevenue" label="Monthly online revenue" options={D2C_REVENUE} />
                    <SelectField name="budget" label="Monthly ad / marketing spend" options={MARKETING_SPEND} />
                  </div>
                  <TextAreaField label="What feels stuck right now? (optional)" placeholder="ROAS plateau, low conversion rate, creative fatigue, weak repeat purchase, scaling issues…" />
                </>
              )}

              {variant === 'd2c' && !isMainD2CAudit && (
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

              {variant === 'agency' && (
                <>
                  <div className={styles.row}>
                    <TextField name="agency" label="Agency name" placeholder="Your agency" />
                    <TextField name="website" label="Agency website" type="url" placeholder="https://youragency.com" />
                  </div>
                  <div className={styles.row}>
                    {!service && <SelectField name="service" label="What do you need fulfilled?" options={AGENCY_SERVICES} />}
                    <SelectField name="requirementStatus" label="Do you have an active requirement?" options={AGENCY_REQUIREMENT_STATUS} />
                  </div>
                  <SelectField name="projectVolume" label="Typical client / project volume" options={AGENCY_PROJECT_VOLUME} />
                  <TextAreaField label="Client requirement / delivery need" placeholder="Share the service, scope, deadline, client visibility preference and anything we should know before scoping it." />
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

              <WhatsAppConsentField />

              <button type="submit" className={`btn-primary ${styles.submit}`} disabled={submitting}>
                {submitting ? 'Sending…' : submitLabel}
              </button>

              {isMainD2CAudit && <p className={styles.auditNote}>We use these numbers to make the first conversation useful. No generic sales deck.</p>}
              {isAgency && <p className={styles.auditNote}>A single client requirement is enough to test the partnership. No need to move your entire fulfilment stack.</p>}

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
