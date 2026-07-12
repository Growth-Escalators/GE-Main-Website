'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Mail, Phone, Clock, Check, MessageCircle, Calendar, Star, Sparkles,
} from 'lucide-react'

import TrustStrip from '@/components/sections/TrustStrip'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { trackLead, type LeadMethod } from '@/lib/analytics'

const easeOut = [0.16, 1, 0.3, 1] as const

const SERVICE_OPTIONS = [
  'Performance Ads',
  'Funnels & Automation',
  'Web & Software',
  'Social Media Marketing',
  'Branding & Identity',
  'SEO & AI Growth',
  'Staffing & Recruiting',
  'Not sure — help me pick',
]
const BUDGET_OPTIONS = [
  'Under ₹50K / $1k',
  '₹50K–2L / $1k–$5k',
  '₹2L–10L / $5k–$15k',
  '₹10L+ / $15k+',
]

const WA_LINK = 'https://wa.me/917733888883?text=Hi%20Growth%20Escalators%2C%20I%27d%20like%20to%20discuss%20a%20project.'
const TEL_LINK = 'tel:+917733888883'
const MAIL_LINK = 'mailto:Info@growthescalators.com'
const CAL_LINK = 'https://cal.com/growth-escalators/discovery-call'
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.83!3d26.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR3Jvd3RoIEVzY2FsYXRvcnM!5e0!3m2!1sen!2sin'

/* ───────── HERO ───────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, var(--bg-secondary) 100%)' }}>
      <div
        aria-hidden
        className="hidden md:block pointer-events-none"
        style={{
          position: 'absolute',
          width: 520, height: 520, borderRadius: '50%',
          filter: 'blur(110px)',
          background: 'radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%)',
          top: -160, right: -100,
        }}
      />
      <div className="container-x text-center" style={{ padding: 'clamp(56px, 9vw, 96px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 60px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div
            className="inline-flex items-center"
            style={{
              gap: 9,
              border: '1px solid rgba(255,107,53,0.25)',
              background: 'rgba(255,107,53,0.06)',
              padding: '7px 16px', borderRadius: 999, marginBottom: 22,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--orange)' }} />
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              We reply within 24 hours
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(34px, 5.4vw, 60px)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em',
              margin: '0 0 18px', color: 'var(--text-primary)',
            }}
          >
            Let&rsquo;s map your next <span style={{ color: 'var(--orange)' }}>growth move</span>.
          </h1>
          <p
            style={{
              fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.6,
              maxWidth: 620, margin: '0 auto',
            }}
          >
            Tell us what you need — performance marketing, a website, or talent for your team —
            and a real strategist (not a chatbot) replies within a business day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ───────── DIRECT CHANNELS ───────── */

function ChannelsSection() {
  const channels = [
    {
      Icon: MessageCircle, label: 'Chat on WhatsApp',
      sub: 'Fastest path · usually replies in minutes',
      href: WA_LINK, target: '_blank' as const, method: 'whatsapp' as LeadMethod,
      tone: { bg: 'rgba(37,211,102,0.10)', color: '#1f9d50', ring: 'rgba(37,211,102,0.28)' },
    },
    {
      Icon: Phone, label: '+91 77338 88883',
      sub: 'Mon–Sat · 10:00–19:00 IST',
      href: TEL_LINK, method: 'call' as LeadMethod,
      tone: { bg: 'rgba(255,107,53,0.10)', color: 'var(--orange)', ring: 'rgba(255,107,53,0.28)' },
    },
    {
      Icon: Mail, label: 'Info@growthescalators.com',
      sub: 'Reply within one business day',
      href: MAIL_LINK, method: 'email' as LeadMethod,
      tone: { bg: 'rgba(108,99,255,0.10)', color: 'var(--violet)', ring: 'rgba(108,99,255,0.28)' },
    },
  ]
  return (
    <section className="container-x" style={{ padding: 'clamp(8px, 1.5vw, 16px) clamp(20px, 4vw, 40px) clamp(40px, 6vw, 60px)' }}>
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 16 }}>
        {channels.map((c, i) => {
          const { Icon } = c
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.target}
              rel={c.target ? 'noopener noreferrer' : undefined}
              onClick={() => trackLead(c.method)}
              className="channel-card flex items-center"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
              style={{
                gap: 14, padding: 22,
                background: '#fff',
                border: '1px solid var(--border-hair-2)',
                borderRadius: 18,
                textDecoration: 'none', color: 'var(--text-primary)',
                transition: 'transform .25s, box-shadow .25s, border-color .25s',
              }}
            >
              <span
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: c.tone.bg, color: c.tone.color,
                  border: `1px solid ${c.tone.ring}`,
                }}
              >
                <Icon size={22} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)' }}>{c.label}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{c.sub}</div>
              </div>
            </motion.a>
          )
        })}
      </div>

      <style jsx>{`
        :global(.channel-card:hover) {
          transform: translateY(-3px);
          border-color: rgba(255,107,53,0.30) !important;
          box-shadow: 0 14px 36px rgba(17,18,26,0.08);
        }
      `}</style>
    </section>
  )
}

/* ───────── FORM + WHAT HAPPENS ───────── */

type Status = 'idle' | 'submitting' | 'success' | 'error'

function FormSection() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const fields: Record<string, string> = { source: 'Contact Page' }
    data.forEach((v, k) => { fields[k] = String(v) })

    const minWait = new Promise((r) => setTimeout(r, 220))
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
      trackLead('form', { source: 'Contact Page' })
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg((err as Error).message || 'Something went wrong')
    }
  }
  const submitting = status === 'submitting'

  return (
    <section
      id="book"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-hair)' }}
    >
      <div
        className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-start"
        style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)', gap: 'clamp(32px, 5vw, 56px)' }}
      >
        {/* Left — what happens after you submit */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            What happens next
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em',
              lineHeight: 1.08, margin: '12px 0 18px', color: 'var(--text-primary)',
            }}
          >
            A simple, no-pressure path to a yes.
          </h2>

          <ol className="flex flex-col" style={{ gap: 18, listStyle: 'none', padding: 0, marginBottom: 30 }}>
            {[
              { n: '01', t: 'You send the brief',  d: 'Fill the form below or WhatsApp / call us. Takes under 2 minutes.' },
              { n: '02', t: 'A strategist replies', d: 'A real human (not a sales bot) reads it and writes back within a business day.' },
              { n: '03', t: 'Quick discovery call', d: '20–30 minutes. We listen, ask the right questions, and tell you honestly if we can help.' },
            ].map((s) => (
              <li key={s.n} className="flex" style={{ gap: 16 }}>
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center"
                  style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,107,53,0.04))',
                    color: 'var(--orange)', fontWeight: 800, fontSize: 14,
                    border: '1px solid rgba(255,107,53,0.20)',
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>{s.t}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Trust mini */}
          <div
            className="flex items-center"
            style={{ gap: 14, padding: '18px 20px', background: '#fff', borderRadius: 14, border: '1px solid var(--border-hair-2)' }}
          >
            <span className="flex" style={{ color: 'var(--gold)', gap: 1 }} aria-label="4.9 of 5 stars">
              {[0, 1, 2, 3, 4].map((s) => (<Star key={s} size={15} fill="currentColor" stroke="none" />))}
            </span>
            <div style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>4.9 / 5</strong> from 187+ Google reviews ·
              No spam · No commitment
            </div>
          </div>
        </motion.div>

        {/* Right — form card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          style={{
            background: '#fff',
            border: '1px solid var(--border-hair-2)',
            borderRadius: 22,
            boxShadow: '0 24px 60px rgba(17,18,26,0.10)',
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
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
                We&rsquo;ll reply within 24 hours (weekdays). If it&rsquo;s urgent, ping us on WhatsApp.
              </p>
              <a
                href={WA_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => trackLead('whatsapp')}
                style={{
                  display: 'inline-block', background: 'var(--green-wa)',
                  color: '#fff', fontSize: 14, fontWeight: 800,
                  padding: '12px 22px', borderRadius: 999,
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 14 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <Field name="name"  label="Your name"        placeholder="Jane Doe"      required />
                <Field name="phone" label="WhatsApp / Phone" placeholder="+1 / +91 …"    required type="tel" />
              </div>
              <Field name="email"   label="Work email"       placeholder="jane@company.com" required type="email" />
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 14 }}>
                <SelectField name="service" label="I need help with" options={SERVICE_OPTIONS} />
                <SelectField name="budget"  label="Monthly budget"    options={BUDGET_OPTIONS} />
              </div>
              <label className="block">
                <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Tell us a bit (optional)
                </span>
                <textarea
                  name="message" rows={3}
                  placeholder="What you're working on, what you've tried, what success looks like…"
                  style={{
                    width: '100%', padding: '13px 15px',
                    border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
                    fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box',
                  }}
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="lf-submit"
                style={{
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                  color: '#fff', fontSize: 16, fontWeight: 800,
                  padding: 16, borderRadius: 12,
                  boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
                  marginTop: 8, border: 'none',
                  transition: 'transform .25s, box-shadow .25s, opacity .25s',
                  opacity: submitting ? 0.65 : 1,
                  cursor: submitting ? 'wait' : 'pointer',
                }}
              >
                {submitting ? 'Sending…' : 'Send my brief →'}
              </button>

              <div className="flex items-center" style={{ gap: 10, marginTop: 6 }}>
                <div style={{ flex: 1, height: 1, background: 'rgba(17,18,26,0.1)' }} />
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>or</span>
                <div style={{ flex: 1, height: 1, background: 'rgba(17,18,26,0.1)' }} />
              </div>
              <a
                href={WA_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => trackLead('whatsapp')}
                className="text-center"
                style={{
                  background: 'var(--green-wa)', color: '#fff',
                  fontSize: 15, fontWeight: 800, padding: 14,
                  borderRadius: 12, marginTop: 2, display: 'block',
                  textDecoration: 'none',
                }}
              >
                Chat on WhatsApp
              </a>

              {status === 'error' && (
                <p role="alert" style={{ fontSize: 13, color: '#b91c1c', marginTop: 6 }}>
                  Couldn&rsquo;t send{errorMsg ? ` (${errorMsg})` : ''}.{' '}
                  <a href={MAIL_LINK} onClick={() => trackLead('email')} className="underline">Email us directly →</a>
                </p>
              )}
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                We&rsquo;ll only use these details to reply. No newsletters, no third-parties.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        :global(.lf-submit:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
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
        type={type} name={name} required={required} placeholder={placeholder}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
        style={{
          width: '100%', padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
          fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box', background: '#fff',
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
        name={name} defaultValue=""
        style={{
          width: '100%', padding: '13px 15px',
          border: '1px solid rgba(17,18,26,0.14)', borderRadius: 11,
          fontSize: 14, color: 'var(--text-primary)', boxSizing: 'border-box',
          background: '#fff', appearance: 'none',
        }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

/* ───────── OFFICE + MAP + HOURS ───────── */

function OfficeSection() {
  return (
    <section className="container-x" style={{ padding: 'clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]" style={{ gap: 'clamp(32px, 5vw, 56px)', alignItems: 'stretch' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: easeOut }}
        >
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--orange)' }}>
            Visit us
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.025em',
              lineHeight: 1.08, margin: '12px 0 18px', color: 'var(--text-primary)',
            }}
          >
            Jaipur HQ. Same time-zone as you, often.
          </h2>
          <ul className="flex flex-col" style={{ gap: 14, listStyle: 'none', padding: 0, marginBottom: 26 }}>
            <li className="flex items-start" style={{ gap: 12 }}>
              <span
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,107,53,0.10)', color: 'var(--orange)',
                  border: '1px solid rgba(255,107,53,0.20)',
                  marginTop: 2,
                }}
              >
                <MapPin size={17} />
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 2 }}>Address</div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  264/103-104, Sector 26, Sanganer, Pratap Nagar<br />
                  Jaipur, Rajasthan 302033
                </p>
              </div>
            </li>
            <li className="flex items-start" style={{ gap: 12 }}>
              <span
                className="inline-flex items-center justify-center flex-shrink-0"
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(108,99,255,0.10)', color: 'var(--violet)',
                  border: '1px solid rgba(108,99,255,0.20)',
                  marginTop: 2,
                }}
              >
                <Clock size={17} />
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 2 }}>Hours</div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Mon–Sat · 10:00–19:00 IST. WhatsApp goes 24/7.
                </p>
              </div>
            </li>
          </ul>

          <a
            href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            onClick={() => trackLead('booking')}
            className="inline-flex items-center btn-cta"
            style={{
              gap: 9,
              background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
              color: '#fff', fontSize: 15, fontWeight: 800,
              padding: '14px 26px', borderRadius: 12,
              boxShadow: '0 8px 26px rgba(255,107,53,0.34)',
              transition: 'transform .25s, box-shadow .25s',
            }}
          >
            <Calendar size={16} />
            Book a 30-min discovery call
          </a>
          <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--text-muted)' }}>
            Picks a slot that works for you · Zoom or WhatsApp call
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          style={{
            border: '1px solid var(--border-hair-2)', borderRadius: 22,
            overflow: 'hidden', minHeight: 320,
            boxShadow: '0 16px 40px rgba(17,18,26,0.07)',
          }}
        >
          <iframe
            title="Growth Escalators HQ — Jaipur"
            src={MAP_EMBED}
            width="100%" height="100%" style={{ minHeight: 320, border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>

      <style jsx>{`
        :global(.btn-cta:hover) { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,53,0.4); }
      `}</style>
    </section>
  )
}

/* ───────── BOT HANDOFF ───────── */

function BotHandoffSection() {
  return (
    <section className="container-x" style={{ padding: 'clamp(40px, 7vw, 64px) clamp(20px, 4vw, 40px) clamp(56px, 9vw, 88px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, ease: easeOut }}
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--bg-dark-elev), var(--bg-dark-elev2))',
          borderRadius: 22, padding: 'clamp(24px, 4vw, 40px)',
          color: '#fff',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none"
          style={{
            position: 'absolute',
            width: 340, height: 340, borderRadius: '50%',
            filter: 'blur(110px)',
            background: 'radial-gradient(circle, rgba(255,107,53,0.18), transparent 70%)',
            top: -120, right: -80,
          }}
        />
        <div className="flex items-center flex-wrap relative" style={{ gap: 22, justifyContent: 'space-between' }}>
          <div className="flex items-center" style={{ gap: 16, flex: '1 1 320px', minWidth: 0 }}>
            <span
              className="inline-flex items-center justify-center flex-shrink-0"
              style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'linear-gradient(135deg, var(--orange), var(--orange-light))',
                color: '#fff',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 24px rgba(255,107,53,0.35)',
              }}
            >
              <Sparkles size={22} />
            </span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                Prefer to chat with GrowthBot first?
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--text-on-dark)', lineHeight: 1.5 }}>
                Our AI growth consultant qualifies your goal in 30 seconds and routes you to the right person.
              </div>
            </div>
          </div>
          <div className="flex items-center" style={{ gap: 10, flexWrap: 'wrap' }}>
            <span
              style={{
                background: '#fff',
                color: 'var(--bg-dark)',
                fontSize: 13, fontWeight: 800,
                padding: '10px 18px', borderRadius: 999,
                whiteSpace: 'nowrap',
              }}
            >
              Tap the chat in the corner ↘
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ───────── PAGE ───────── */

export default function ContactPage() {
  return (
    <>
      <TrustStrip />
      <Navbar />
      <main>
        <HeroSection />
        <ChannelsSection />
        <FormSection />
        <OfficeSection />
        <BotHandoffSection />
      </main>
      <Footer />
    </>
  )
}
