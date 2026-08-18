'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, X } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

type Topic = 'start' | 'services' | 'proof' | 'process' | 'contact'

const TOPICS: Record<Topic, { eyebrow: string; title: string; body: string; actions: { label: string; href?: string; next?: Topic }[] }> = {
  start: {
    eyebrow: 'GrowthBot',
    title: 'What are you trying to solve?',
    body: 'Choose the closest question. I’ll point you to the right proof, service or next step without making you dig through the site.',
    actions: [
      { label: 'Which service fits?', next: 'services' },
      { label: 'Show me proof', next: 'proof' },
      { label: 'How does GE work?', next: 'process' },
      { label: 'I want to talk', next: 'contact' },
    ],
  },
  services: {
    eyebrow: 'Choose by constraint',
    title: 'Start with what is stuck.',
    body: 'Acquisition or ROAS → Performance. Store economics → D2C/Ecommerce. Conversion experience → Web & Commerce. Custom workflows → Software & AI. Hiring capacity → Staffing.',
    actions: [
      { label: 'Performance marketing', href: '/performance-marketing-agency-jaipur' },
      { label: 'D2C & ecommerce', href: '/d2c' },
      { label: 'Web & software', href: '/website-development-company-jaipur' },
      { label: 'Technology staffing', href: '/staffing' },
      { label: 'Back', next: 'start' },
    ],
  },
  proof: {
    eyebrow: 'Verified proof',
    title: 'Proof before promises.',
    body: 'Paraiso: 1.9× → 3.2× ROAS and 6× revenue in 60 days. Elixzor: 10× ROAS and ₹3.2Cr+ revenue. Dr. Dheeraj Dubay: 35,000+ leads.',
    actions: [
      { label: 'See case studies', href: '/work' },
      { label: 'See portfolio', href: '/portfolio' },
      { label: 'Get my audit', href: '/#book' },
      { label: 'Back', next: 'start' },
    ],
  },
  process: {
    eyebrow: 'How GE works',
    title: 'Diagnose. Build. Test. Scale.',
    body: 'We first identify the commercial constraint, then build the missing acquisition, conversion or technology layer, test it against real data and scale only what earns the right to grow.',
    actions: [
      { label: 'Explore services', href: '/services' },
      { label: 'Read case studies', href: '/work' },
      { label: 'Get a free audit', href: '/#book' },
      { label: 'Back', next: 'start' },
    ],
  },
  contact: {
    eyebrow: 'Talk to Growth Escalators',
    title: 'Bring us the bottleneck.',
    body: 'Book a free audit, WhatsApp us, or email Jatin directly. We’ll review the context before recommending a next step.',
    actions: [
      { label: 'Get free audit', href: '/#book' },
      { label: 'WhatsApp', href: 'https://wa.me/917733888883' },
      { label: 'Email Jatin', href: 'mailto:jatin@growthescalators.com' },
      { label: 'Back', next: 'start' },
    ],
  },
}

export default function GrowthBot() {
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState<Topic>('start')
  const content = TOPICS[topic]

  function close() {
    setOpen(false)
    window.setTimeout(() => setTopic('start'), 180)
  }

  function handleHref(href: string) {
    if (href.includes('wa.me')) trackLead('whatsapp', { source: 'GrowthBot' })
    else if (href.startsWith('mailto:')) trackLead('email', { source: 'GrowthBot' })
    else if (href.includes('#book')) trackLead('form', { source: 'GrowthBot CTA' })
  }

  return (
    <div className="growthbot-root">
      {open && (
        <div className="growthbot-panel" role="dialog" aria-modal="false" aria-label="GrowthBot website guide">
          <div className="growthbot-head">
            <div>
              <span>{content.eyebrow}</span>
              <b>Online guide</b>
            </div>
            <button type="button" aria-label="Close GrowthBot" onClick={close}><X size={18} /></button>
          </div>

          <div className="growthbot-body">
            <p className="growthbot-kicker">{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p className="growthbot-copy">{content.body}</p>
            <div className="growthbot-actions">
              {content.actions.map((action) => {
                if (action.next) {
                  return <button type="button" key={action.label} onClick={() => setTopic(action.next!)}>{action.label}<span>→</span></button>
                }
                const href = action.href!
                if (href.startsWith('http') || href.startsWith('mailto:')) {
                  return <a key={action.label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} onClick={() => handleHref(href)}>{action.label}<span>↗</span></a>
                }
                return <Link key={action.label} href={href} onClick={() => handleHref(href)}>{action.label}<span>↗</span></Link>
              })}
            </div>
          </div>

          <div className="growthbot-foot">
            <span>jatin@growthescalators.com</span>
            <span>+91-7733888883</span>
          </div>
        </div>
      )}

      <button
        type="button"
        className="growthbot-launcher"
        aria-label={open ? 'Close GrowthBot' : 'Ask GrowthBot'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <MessageCircle size={21} />}
        <span>{open ? 'Close' : 'Ask GrowthBot'}</span>
      </button>

      <style jsx>{`
        :global(.growthbot-root) { position:fixed; right:22px; bottom:22px; z-index:90; font-family:var(--font-jakarta),sans-serif; }
        :global(.growthbot-launcher) { min-height:52px; display:inline-flex; align-items:center; justify-content:center; gap:9px; padding:0 18px; border:1px solid rgba(255,255,255,.2); border-radius:999px; background:#170653; color:#fff; box-shadow:0 16px 42px rgba(23,6,83,.28); font-size:11px; font-weight:900; letter-spacing:.045em; text-transform:uppercase; cursor:pointer; transition:transform .2s ease,background .2s ease; }
        :global(.growthbot-launcher:hover) { transform:translateY(-2px); background:#5c24f5; }
        :global(.growthbot-panel) { position:absolute; right:0; bottom:66px; width:min(390px,calc(100vw - 32px)); overflow:hidden; border:1px solid rgba(23,6,83,.12); border-radius:24px; background:#fff; color:#170653; box-shadow:0 28px 80px rgba(23,6,83,.24); animation:growthbot-in .24s cubic-bezier(.22,1,.36,1) both; }
        @keyframes growthbot-in { from{opacity:0;transform:translateY(10px) scale(.985)} to{opacity:1;transform:none} }
        :global(.growthbot-head) { min-height:62px; display:flex; align-items:center; justify-content:space-between; padding:0 18px; border-bottom:1px solid rgba(23,6,83,.1); background:#f7f5ff; }
        :global(.growthbot-head > div) { display:flex; flex-direction:column; gap:3px; }
        :global(.growthbot-head span) { font-size:9px; font-weight:900; letter-spacing:.13em; text-transform:uppercase; color:#5c24f5; }
        :global(.growthbot-head b) { font-size:12px; }
        :global(.growthbot-head button) { width:36px; height:36px; display:grid; place-items:center; border-radius:50%; color:#170653; }
        :global(.growthbot-body) { padding:24px 20px 21px; }
        :global(.growthbot-kicker) { margin:0 0 8px; font-size:9px; font-weight:900; letter-spacing:.13em; text-transform:uppercase; color:#5c24f5; }
        :global(.growthbot-body h2) { margin:0; font-family:'Arial Narrow',var(--font-jakarta),sans-serif; font-size:35px; line-height:.9; letter-spacing:-.025em; text-transform:uppercase; color:#170653; }
        :global(.growthbot-copy) { margin:15px 0 0; font-size:13px; line-height:1.55; color:#606075; }
        :global(.growthbot-actions) { display:flex; flex-direction:column; margin-top:20px; border-top:1px solid rgba(23,6,83,.1); }
        :global(.growthbot-actions a),:global(.growthbot-actions button) { width:100%; min-height:47px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid rgba(23,6,83,.1); color:#170653; font-size:12px; font-weight:800; text-align:left; transition:padding-left .18s ease,color .18s ease; }
        :global(.growthbot-actions a:hover),:global(.growthbot-actions button:hover) { padding-left:7px; color:#5c24f5; }
        :global(.growthbot-actions span) { color:#5c24f5; }
        :global(.growthbot-foot) { display:flex; flex-wrap:wrap; gap:5px 14px; padding:14px 20px 16px; background:#170653; color:rgba(255,255,255,.76); font-size:10px; }
        @media (max-width:640px) { :global(.growthbot-root){right:14px;bottom:14px} :global(.growthbot-launcher){width:52px;padding:0} :global(.growthbot-launcher > span){display:none} :global(.growthbot-panel){right:0;bottom:62px;width:calc(100vw - 28px);border-radius:20px} }
        @media (prefers-reduced-motion:reduce) { :global(.growthbot-panel){animation:none} :global(.growthbot-launcher),:global(.growthbot-actions a),:global(.growthbot-actions button){transition:none} }
      `}</style>
    </div>
  )
}
