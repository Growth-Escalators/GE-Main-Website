'use client'

import { useState } from 'react'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/ui/BackToTop'
import Phase2Motion from '@/components/phase2/Phase2Motion'
import { trackLead } from '@/lib/analytics'
import { getLeadAttribution } from '@/lib/leadAttribution'
import styles from '@/components/phase2/Phase2Core.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type BusinessType = '' | 'd2c' | 'clinic' | 'staffing' | 'other'
type LeadFields = Record<string, string | boolean>

const BUSINESS_TYPES = [
  ['d2c', 'D2C / Ecommerce brand'],
  ['clinic', 'Clinic / Healthcare'],
  ['staffing', 'Hiring / Staffing'],
  ['other', 'Other business'],
] as const

const D2C_SERVICES = ['Meta Ads', 'Google Ads', 'Shopify CRO', 'Shopify / Website Development', 'SEO & AI Search', 'Full Growth Support']
const CLINIC_SERVICES = ['Patient Lead Generation', 'Google Ads', 'Meta Ads', 'Local SEO / Google Maps', 'Website / Conversion Improvement', 'Full Clinic Growth Support']
const GENERAL_SERVICES = ['Performance Ads', 'Funnels & Automation', 'Web & Software', 'Social Media Marketing', 'Branding & Identity', 'SEO & AI Growth']
const BUDGETS = ['Not spending yet', 'Under ₹50K / month', '₹50K–₹2L / month', '₹2L–₹5L / month', '₹5L–₹10L / month', '₹10L+ / month']
const REVENUE = ['Under ₹5L / month', '₹5L–₹25L / month', '₹25L–₹50L / month', '₹50L–₹1Cr / month', '₹1Cr+ / month']

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [businessType, setBusinessType] = useState<BusinessType>('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const fd = new FormData(form)
    const fields: LeadFields = {
      source: 'Contact Page',
      formType: `contact-${businessType || 'general'}`,
      businessVertical: businessType || 'general',
      ...getLeadAttribution(),
    }
    fd.forEach((v, k) => { fields[k] = String(v) })

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      trackLead('form', {
        source: 'Contact Page',
        form_type: `contact-${businessType || 'general'}`,
        business_vertical: businessType || 'general',
        service: String(fields.service || ''),
      })
      form.reset()
      setBusinessType('')
      setStatus('success')
    } catch (err) {
      setError((err as Error).message || 'Something went wrong')
      setStatus('error')
    }
  }

  return <>
    <Navbar />
    <main className={styles.page}>
      <Phase2Motion />
      <section className={`${styles.section} ${styles.cream}`}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div className={styles.contactCopy}>
            <p className={styles.eyebrow} data-p2-hero>Get in touch · Jaipur, India</p>
            <h1 data-p2-hero>Architect your<br />next growth move.</h1>
            <p data-p2-hero>Tell us what you are trying to grow, what is getting in the way, and where you need help. A real strategist reviews the brief and gets back to you.</p>
            <div className={styles.channels} data-p2-reveal>
              <a className={styles.channel} href="https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" onClick={() => trackLead('whatsapp', { source: 'contact_page_channel' })}><div>WhatsApp<small>Fastest route for a quick conversation</small></div><span>↗</span></a>
              <a className={styles.channel} href="tel:+917733888883" onClick={() => trackLead('call', { source: 'contact_page_channel' })}><div>+91-7733888883<small>Mon–Sat · Jaipur, India</small></div><span>↗</span></a>
              <a className={styles.channel} href="mailto:jatin@growthescalators.com" onClick={() => trackLead('email', { source: 'contact_page_channel' })}><div>jatin@growthescalators.com<small>Project briefs, partnerships and enquiries</small></div><span>↗</span></a>
              <a className={styles.channel} href="https://cal.com/growth-escalators/discovery-call" target="_blank" rel="noopener noreferrer" onClick={() => trackLead('booking', { source: 'contact_page_channel' })}><div>Book a discovery call<small>Choose a time that works for you</small></div><span>↗</span></a>
            </div>
            <div className={styles.office} data-p2-reveal><h3>Growth Escalators · Jaipur</h3><p>Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura, Jaipur, Rajasthan 302018, India</p><div className={styles.map}><iframe title="Growth Escalators office map" loading="lazy" src="https://www.google.com/maps?q=Office%20No%3A%20607-608%2C%206th%20Floor%2C%20Class%20of%20Pearl%2C%20Income%20Tax%20Colony%2C%20Durgapura%2C%20Jaipur%2C%20Rajasthan%20302018%2C%20India&output=embed" /></div></div>
          </div>

          <div className={styles.formCard} id="book" data-p2-card>
            <p className={styles.eyebrow}>Start with the constraint</p><h2>Tell us where growth is stuck.</h2>
            {status === 'success' ? <div><h2>We&apos;re on it.</h2><p>Thanks — we&apos;ll review the details and reply within one business day.</p></div> :
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.fieldGrid}><Field name="name" label="Full name" required /><Field name="phone" label="WhatsApp / Phone" required type="tel" /></div>
              <Field name="email" label="Work email" required type="email" />

              <label className={styles.field}>
                <span>What best describes you? *</span>
                <select className={styles.control} name="businessType" required value={businessType} onChange={(e) => setBusinessType(e.target.value as BusinessType)}>
                  <option value="" disabled>Select…</option>
                  {BUSINESS_TYPES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>

              {businessType === 'd2c' && <>
                <div className={styles.fieldGrid}><Field name="company" label="Brand name" /><Field name="website" label="Website / Shopify URL" type="url" /></div>
                <div className={styles.fieldGrid}><Select name="monthlyRevenue" label="Monthly online revenue" options={REVENUE} /><Select name="budget" label="Monthly ad / marketing spend" options={BUDGETS} /></div>
                <Select name="service" label="Where do you need help?" options={D2C_SERVICES} />
              </>}

              {businessType === 'clinic' && <>
                <div className={styles.fieldGrid}><Field name="clinic" label="Clinic / practice name" /><Field name="specialization" label="Speciality" /></div>
                <div className={styles.fieldGrid}><Field name="city" label="City / service area" /><Select name="budget" label="Monthly marketing spend" options={BUDGETS} /></div>
                <Select name="service" label="What do you need help with?" options={CLINIC_SERVICES} />
              </>}

              {businessType === 'staffing' && <>
                <div className={styles.fieldGrid}><Field name="company" label="Company" /><Field name="role" label="Role / skills needed" /></div>
                <div className={styles.fieldGrid}><Field name="seats" label="Number of hires" /><Select name="timeline" label="Hiring timeline" options={['Immediately', 'Within 30 days', '1–3 months', 'Exploring']} /></div>
              </>}

              {businessType === 'other' && <>
                <div className={styles.fieldGrid}><Field name="company" label="Business / website" /><Select name="service" label="I need help with" options={GENERAL_SERVICES} /></div>
                <Select name="budget" label="Monthly marketing budget" options={BUDGETS} />
              </>}

              <label className={styles.field}><span>What are you trying to solve?</span><textarea className={`${styles.control} ${styles.textarea}`} name="message" placeholder="A little context helps us make the first reply useful." /></label>
              <button className={styles.submit} disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send my brief →'}</button>
              {status === 'error' && <p role="alert">Couldn&apos;t send{error ? ` (${error})` : ''}. Email us at <a href="mailto:jatin@growthescalators.com">jatin@growthescalators.com</a>.</p>}
            </form>}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.white}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}><div><p className={styles.eyebrow} data-p2-reveal>What happens next</p><h2 data-p2-reveal>No pressure.<br />Clear next step.</h2></div><p data-p2-reveal>The first conversation is for fit and clarity. We review the brief, identify the likely constraint, and decide whether a deeper audit or specialist conversation is useful.</p></div>
          <div className={styles.process}>{[['01', 'You send the brief', 'Form, WhatsApp, email or call — use whichever is easiest.'], ['02', 'A strategist reviews it', 'Your context is read by a real person before the response.'], ['03', 'We map the next move', 'If there is a fit, we identify the most useful next step and the right owner.'], ['04', 'You decide', 'No forced package. You choose whether to continue.']].map(([n, t, d]) => <div className={styles.processStep} key={n} data-p2-card><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}</div>
        </div>
      </section>
    </main>
    <Footer /><BackToTop />
  </>
}

function Field({ name, label, type = 'text', required }: { name: string; label: string; type?: string; required?: boolean }) { return <label className={styles.field}><span>{label}{required ? ' *' : ''}</span><input className={styles.control} name={name} type={type} required={required} /></label> }
function Select({ name, label, options }: { name: string; label: string; options: string[] }) { return <label className={styles.field}><span>{label}</span><select className={styles.control} name={name} defaultValue=""><option value="" disabled>Select…</option>{options.map(o => <option key={o} value={o}>{o}</option>)}</select></label> }
