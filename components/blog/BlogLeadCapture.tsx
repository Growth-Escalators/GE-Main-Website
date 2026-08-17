'use client'

/**
 * Low-friction, email-only lead capture for blog posts.
 *
 * Why this exists: the only CTA blog readers previously saw was a link to
 * /contact — a 6-field form (name, phone, work email, service, budget,
 * message). That's a big ask for someone who just finished an article and
 * hasn't decided they want a sales conversation yet. This block asks for
 * one field and reuses the SAME backend every other lead form on the site
 * already posts to (POST /api/lead — see app/api/lead/route.ts) so no new
 * infrastructure is introduced. `name` is required by that endpoint's
 * validation, so we send a placeholder ('Blog reader') behind the scenes —
 * the visitor only ever sees and fills in the email field.
 *
 * Rendered from the shared post template (app/blog/[slug]/page.tsx), so it
 * shows up on every post automatically.
 */

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { trackLead } from '@/lib/analytics'
import styles from './BlogLeadCapture.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function BlogLeadCapture({
  postSlug,
  postTitle,
  contactHref = '/contact',
}: {
  postSlug: string
  postTitle: string
  /** Where the secondary "book a call" link points — defaults to /contact, but a post can override via its `ctaHref` frontmatter. */
  contactHref?: string
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    const payload = {
      // The shared /api/lead endpoint requires `name` + `email`. The visitor
      // never sees or types a name field — this keeps the *visible* form to
      // one field while still satisfying the backend contract every other
      // lead form on the site relies on.
      name: 'Blog reader',
      email,
      source: 'Blog Inline Capture',
      message: `Requested a free growth audit from the blog post "${postTitle}" (/blog/${postSlug}).`,
    }

    const minWait = new Promise((r) => setTimeout(r, 220))
    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        minWait,
      ])
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Server returned ${res.status}`)
      }
      setStatus('success')
      trackLead('form', { source: 'Blog Inline Capture', slug: postSlug })
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }

  const submitting = status === 'submitting'

  return (
    <div className={styles.wrap}>
      {status === 'success' ? (
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <Check size={18} strokeWidth={3} />
          </span>
          <div>
            <p className={styles.successTitle}>Got it — check your inbox shortly.</p>
            <p className={styles.successSub}>
              We&rsquo;ll reply within 24 hours. Want to talk sooner?{' '}
              <Link href={contactHref} className={styles.successLink}>Book a free call →</Link>
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.copy}>
            <p className={styles.title}>Get a free growth audit</p>
            <p className={styles.sub}>Just drop your email — we&rsquo;ll do the rest. No forms, no phone call required.</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.inputLabel} htmlFor={`blog-lead-email-${postSlug}`}>
              Email address
            </label>
            <div className={styles.inputRow}>
              <input
                id={`blog-lead-email-${postSlug}`}
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <button type="submit" disabled={submitting} className={styles.submit}>
                {submitting ? 'Sending…' : (
                  <>
                    Get my audit <ArrowRight size={15} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </div>
            {status === 'error' && (
              <p role="alert" className={styles.error}>
                Couldn&rsquo;t send{errorMsg ? ` (${errorMsg})` : ''}.{' '}
                <a href="mailto:Info@growthescalators.com" className={styles.errorLink}>Email us directly →</a>
              </p>
            )}
            <p className={styles.fineprint}>
              No spam, no newsletters.{' '}
              <Link href={contactHref} className={styles.fineprintLink}>Prefer to talk first? Book a free call →</Link>
            </p>
          </form>
        </>
      )}
    </div>
  )
}
