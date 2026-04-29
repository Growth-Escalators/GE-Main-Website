'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LeadForm.module.css'

type Props = {
  /** Email address that receives form submissions via mailto fallback. */
  recipient?: string
  /** Subject line prefix for the mailto draft. */
  subjectPrefix?: string
  /** Headline above the form. */
  headline?: string
  /** Subheadline below the headline. */
  subhead?: string
  /** Section tag pill text. */
  tag?: string
}

export default function LeadForm({
  recipient = 'Info@growthescalators.com',
  subjectPrefix = 'New Doctor Lead',
  headline = 'Tell us about your practice',
  subhead = "Fill this in and we'll get back within 24 hours with a no-obligation strategy session.",
  tag = "LET'S TALK",
}: Props) {
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    const fields: Record<string, string> = {}
    data.forEach((v, k) => { fields[k] = String(v) })

    const subject = `${subjectPrefix}: ${fields.name || 'Unknown'} (${fields.specialization || 'Doctor'})`
    const lines = [
      `Name: ${fields.name || ''}`,
      `Phone: ${fields.phone || ''}`,
      `Email: ${fields.email || ''}`,
      `Clinic / Practice: ${fields.clinic || ''}`,
      `Specialization: ${fields.specialization || ''}`,
      `City: ${fields.city || ''}`,
      `Current monthly marketing spend: ${fields.budget || ''}`,
      ``,
      `What they want help with:`,
      fields.message || '(blank)',
    ]
    const body = encodeURIComponent(lines.join('\n'))
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`

    // Open the user's mail client. Mailto is intentionally chosen as a
    // backend-free interim — replace with a real POST endpoint when CRM is wired.
    window.location.href = mailto

    // Reset submitting flag after a short beat so the button isn't permanently
    // locked if the user cancels their mail client.
    setTimeout(() => setSubmitting(false), 1500)
  }

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
              <li>✓ No commitment — strategy session is free</li>
              <li>✓ Reply within 24 hours, weekdays</li>
              <li>✓ One practice per specialization per city</li>
            </ul>
          </div>

          <motion.form
            className={`${styles.form} glass`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Your name</span>
                <input name="name" type="text" required autoComplete="name" placeholder="Dr. Priya Sharma" />
              </label>
              <label className={styles.field}>
                <span>Phone</span>
                <input name="phone" type="tel" required autoComplete="tel" placeholder="+91 98xxxxxxxx" />
              </label>
            </div>

            <label className={styles.field}>
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="you@clinic.com" />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Clinic / practice name</span>
                <input name="clinic" type="text" placeholder="Sharma Wellness Clinic" />
              </label>
              <label className={styles.field}>
                <span>Specialization</span>
                <input name="specialization" type="text" placeholder="Dermatology" />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>City</span>
                <input name="city" type="text" placeholder="Jaipur" />
              </label>
              <label className={styles.field}>
                <span>Current monthly marketing spend</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option value="None">None / just starting</option>
                  <option value="Under ₹25k">Under ₹25k</option>
                  <option value="₹25k–₹50k">₹25k–₹50k</option>
                  <option value="₹50k–₹1L">₹50k–₹1L</option>
                  <option value="₹1L–₹3L">₹1L–₹3L</option>
                  <option value="₹3L+">₹3L+</option>
                </select>
              </label>
            </div>

            <label className={styles.field}>
              <span>What do you want help with? (optional)</span>
              <textarea name="message" rows={3} placeholder="More patients for cosmetic dentistry, build personal brand on Instagram, etc." />
            </label>

            <button
              type="submit"
              className={`btn-primary ${styles.submit}`}
              disabled={submitting}
            >
              {submitting ? 'Opening your mail app…' : 'Send my enquiry'}
            </button>

            <p className={styles.footnote}>
              Your details go straight to our team via your email client. We&apos;ll never share them with third parties.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
