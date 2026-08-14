'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Upload, Loader2, AlertCircle, CheckCircle2,
} from 'lucide-react'
import { trackLead, trackLandingEvent } from '@/lib/analytics'
import CtaButton from './CtaButton'
import type { LandingMarket, LeadFormSectionContent } from '@/lib/content/international-landing/types'

const easeOut = [0.16, 1, 0.3, 1] as const

const MAX_FILE_BYTES = 4 * 1024 * 1024 // 4MB — sensible cap under typical serverless request-body limits
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

/** Client-side UTM + attribution capture — read once on mount, sent as hidden fields. */
function useAttribution() {
  const [attribution, setAttribution] = useState({
    utmSource: '', utmMedium: '', utmCampaign: '', utmTerm: '', utmContent: '',
    referrerUrl: '', landingPageRoute: '',
  })
  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    setAttribution({
      utmSource: p.get('utm_source') || '',
      utmMedium: p.get('utm_medium') || '',
      utmCampaign: p.get('utm_campaign') || '',
      utmTerm: p.get('utm_term') || '',
      utmContent: p.get('utm_content') || '',
      referrerUrl: document.referrer || '',
      landingPageRoute: window.location.pathname || '',
    })
  }, [])
  return attribution
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const comma = result.indexOf(',')
      resolve(comma >= 0 ? result.slice(comma + 1) : result)
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

function FormField({
  name, label, placeholder, type = 'text', required,
}: { name: string; label: string; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff' }}
      />
    </label>
  )
}

function SelectField({
  name, label, options, required,
}: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
        {label}{required ? ' *' : ''}
      </span>
      <select
        name={name} required={required} defaultValue=""
        style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff', appearance: 'none' }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

export type LeadFormProps = {
  content: LeadFormSectionContent
  market: LandingMarket
  eventPrefix: string
  leadSourceLabel: string
  supportEmail?: string
  id?: string
  /** Submit-button label override. Defaults to "Request Relevant Profiles" (UK/UAE/Australia copy). */
  submitLabel?: string
}

/**
 * Shared lead-capture form for the international-landing-page family.
 * Always-present fields: full name, work email, company, skill/job title,
 * number of resources, message, JD upload, plus a hidden `market` field and
 * hidden UTM/referrer/route attribution. `content.marketFields` appends any
 * market-specific fields (UAE emirate, US company type + time zone, AU
 * state/time zone, etc.) — see lib/content/international-landing/types.ts.
 *
 * Fires (all via trackLandingEvent, prefix = `eventPrefix`): `form_start`
 * (first focus), `jd_upload` (on a valid file selection), `form_submit_success`
 * / `form_submit_error`, and `primary_cta_click` (location: 'post_submit_calendar')
 * from the success panel's "book a call" link.
 */
export default function LeadForm({ content, market, eventPrefix, leadSourceLabel, supportEmail = 'Info@growthescalators.com', id = 'lead-form', submitLabel = 'Request Relevant Profiles' }: LeadFormProps) {
  const {
    tag, headline, subhead, skillSuggestions, resourceCountOptions,
    showStartDate = true, showEngagementDuration = true,
    workingHoursFieldLabel, workingHoursFieldPlaceholder,
    marketFields, showBudgetRange, successHeadline, successBody, calLink,
  } = content

  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [emailTouched, setEmailTouched] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const startedRef = useRef(false)
  const attribution = useAttribution()
  const skillListId = useId()
  const emailErrorId = useId()
  const fileInputId = useId()

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
  const showEmailError = emailTouched && emailValue.length > 0 && !emailValid

  function handleFormStart() {
    if (startedRef.current) return
    startedRef.current = true
    trackLandingEvent(eventPrefix, 'form_start')
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    setFileError(null)
    if (!f) { setFile(null); return }
    if (!ALLOWED_FILE_TYPES.includes(f.type)) {
      setFileError('Please upload a PDF, DOC or DOCX file.')
      e.target.value = ''
      setFile(null)
      return
    }
    if (f.size > MAX_FILE_BYTES) {
      setFileError('File is too large — please keep it under 4MB.')
      e.target.value = ''
      setFile(null)
      return
    }
    setFile(f)
    trackLandingEvent(eventPrefix, 'jd_upload', { file_type: f.type })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorMsg(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: leadSourceLabel }
    data.forEach((v, k) => {
      if (typeof v === 'string') fields[k] = v
    })

    try {
      if (file) {
        fields.jdFileName = file.name
        fields.jdFileType = file.type
        fields.jdFileBase64 = await fileToBase64(file)
      }
    } catch {
      // If the file can't be read, submit without the attachment rather than blocking the lead.
    }

    const minWait = new Promise((r) => setTimeout(r, 250))
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
      trackLandingEvent(eventPrefix, 'form_submit_success', { has_jd: Boolean(file) })
      trackLead('form', { source: leadSourceLabel })
      form.reset()
      setEmailValue('')
    } catch (err) {
      setStatus('error')
      const msg = (err as Error).message || 'Something went wrong'
      setErrorMsg(msg)
      trackLandingEvent(eventPrefix, 'form_submit_error', { error: msg })
    }
  }

  const submitting = status === 'submitting'
  const mailtoHref = `mailto:${supportEmail}?subject=${encodeURIComponent(leadSourceLabel)}`

  return (
    <section id={id} aria-label="Share your requirement" style={{ background: '#fff', borderTop: '1px solid var(--border-hair)', scrollMarginTop: 60 }}>
      <div className="container-x grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', gap: 'clamp(32px, 5vw, 52px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <span className="section-tag">{tag}</span>
          <h2 style={{ fontSize: 'clamp(26px, 4.4vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '12px 0 16px', color: 'var(--text-primary)' }}>
            {headline}
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 440 }}>
            {subhead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-hair-2)', borderRadius: 20, boxShadow: '0 20px 50px rgba(17,18,26,0.06)', padding: 'clamp(20px, 4vw, 30px)' }}
        >
          {status === 'success' ? (
            <div className="text-center" style={{ padding: '32px 8px' }} role="status" aria-live="polite">
              <div
                className="inline-flex items-center justify-center"
                style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,212,170,0.16)', color: 'var(--teal-dark)', marginBottom: 16 }}
              >
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
                {successHeadline || 'Requirement received.'}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                {successBody || 'Our team will review the role and contact you within one business day.'}
              </p>
              {calLink && (
                <CtaButton
                  href={calLink}
                  label="Prefer to talk it through? Book a short call →"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13.5, padding: '11px 20px' }}
                  onClick={() => trackLandingEvent(eventPrefix, 'primary_cta_click', { location: 'post_submit_calendar' })}
                />
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleFormStart} className="flex flex-col" noValidate style={{ gap: 14 }}>
              <input type="hidden" name="market" value={market} readOnly />

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <FormField name="name" label="Full name" placeholder="Jane Doe" required />
                <div>
                  <label className="block">
                    <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                      Work email *
                    </span>
                    <input
                      type="email" name="email" required autoComplete="email" placeholder="jane@company.com"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      aria-invalid={showEmailError}
                      aria-describedby={showEmailError ? emailErrorId : undefined}
                      style={{
                        width: '100%', padding: '13px 15px', boxSizing: 'border-box',
                        border: `1px solid ${showEmailError ? '#b91c1c' : 'rgba(17,18,26,0.14)'}`,
                        borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff',
                      }}
                    />
                  </label>
                  {showEmailError && (
                    <p id={emailErrorId} role="alert" style={{ fontSize: 12, color: '#b91c1c', marginTop: 5 }}>
                      Please enter a valid work email address.
                    </p>
                  )}
                </div>
              </div>

              <FormField name="company" label="Company name" placeholder="Acme Technology Ltd" required />

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <label className="block">
                  <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                    Skill or job title *
                  </span>
                  <input
                    type="text" name="role" list={skillListId} required placeholder="e.g. Senior SAP ABAP Developer"
                    style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)', background: '#fff' }}
                  />
                  <datalist id={skillListId}>
                    {skillSuggestions.map((s) => <option key={s} value={s} />)}
                  </datalist>
                </label>
                <SelectField name="seats" label="Number of resources" options={resourceCountOptions} required />
              </div>

              {(showStartDate || showEngagementDuration) && (
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                  {showStartDate && <FormField name="startDate" label="Preferred start date" type="date" />}
                  {showEngagementDuration && <FormField name="engagementDuration" label="Engagement duration" placeholder="e.g. 3 months, 6 months, ongoing" />}
                </div>
              )}

              {workingHoursFieldLabel && (
                <FormField name="workingHoursNote" label={workingHoursFieldLabel} placeholder={workingHoursFieldPlaceholder} />
              )}

              {/* Market-specific fields — UAE emirate, US company type + time zone, AU state/time zone, etc. */}
              {marketFields?.map((f) => (
                f.type === 'select'
                  ? <SelectField key={f.name} name={f.name} label={f.label} options={f.options || []} required={f.required} />
                  : <FormField key={f.name} name={f.name} label={f.label} placeholder={f.placeholder} required={f.required} />
              ))}

              {showBudgetRange && (
                <FormField name="budgetRange" label="Budget / rate range" placeholder="e.g. $40–60/hr, or a monthly range" />
              )}

              <label className="block">
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Message
                </span>
                <textarea
                  name="message" rows={3} placeholder="Anything else about the requirement, stack or team structure."
                  style={{ width: '100%', padding: '13px 15px', boxSizing: 'border-box', border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11, fontSize: 14, color: 'var(--text-primary)' }}
                />
              </label>

              <div>
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Upload JD <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>(PDF, DOC or DOCX, up to 4MB)</span>
                </span>
                <label
                  htmlFor={fileInputId}
                  className="flex items-center"
                  style={{
                    gap: 10, border: '1px dashed rgba(17,18,26,0.22)', borderRadius: 11,
                    padding: '12px 15px', cursor: 'pointer', background: '#fff', minHeight: 44,
                  }}
                >
                  <Upload size={16} color="var(--orange)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: file ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {file ? file.name : 'Choose a file (optional)'}
                  </span>
                  <input
                    id={fileInputId} type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
                  />
                </label>
                {fileError && (
                  <p role="alert" className="flex items-center" style={{ gap: 6, fontSize: 12, color: '#b91c1c', marginTop: 6 }}>
                    <AlertCircle size={13} /> {fileError}
                  </p>
                )}
              </div>

              {/* Hidden attribution — populated client-side, never shown to the user */}
              <input type="hidden" name="utmSource" value={attribution.utmSource} readOnly />
              <input type="hidden" name="utmMedium" value={attribution.utmMedium} readOnly />
              <input type="hidden" name="utmCampaign" value={attribution.utmCampaign} readOnly />
              <input type="hidden" name="utmTerm" value={attribution.utmTerm} readOnly />
              <input type="hidden" name="utmContent" value={attribution.utmContent} readOnly />
              <input type="hidden" name="referrerUrl" value={attribution.referrerUrl} readOnly />
              <input type="hidden" name="landingPageRoute" value={attribution.landingPageRoute} readOnly />

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ marginTop: 6, opacity: submitting ? 0.7 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : submitLabel}
              </button>

              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                By submitting, you agree to be contacted about this requirement in line with our{' '}
                <Link href="/privacy-policy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Privacy Policy</Link>.
              </p>

              {status === 'error' && (
                <p role="alert" className="flex items-start" style={{ gap: 6, fontSize: 13, color: '#b91c1c' }}>
                  <AlertCircle size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                  Couldn&rsquo;t send{errorMsg ? ` (${errorMsg})` : ''}. Your details are still in the
                  form — please try again, or{' '}
                  <a href={mailtoHref} style={{ textDecoration: 'underline' }}>
                    email us directly
                  </a>.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
