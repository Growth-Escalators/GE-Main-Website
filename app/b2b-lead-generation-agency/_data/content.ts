/**
 * All copy and data for the /b2b-lead-generation-agency landing page.
 *
 * NATIONAL BOFU money page — agency-hire intent ("b2b lead generation agency
 * india", "b2b demand generation agency"). Angle: B2B pipeline value,
 * cost-per-SQL, ABM/ICP targeting, sales-cycle nurture, marketing-to-sales
 * handoff. Deliberately distinct from /linkedin-marketing-agency (channel
 * intent) and /saas-marketing-agency (PLG/trial-funnel intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts. Featured: Credo World (CASE_STUDIES #6 — 0→15 qualified
 * B2B leads/mo, ₹2.5L avg deal size, LinkedIn +400% in 4 months). Supporting:
 * Vikram Choudhary (ALL_TESTIMONIALS #12 — 0→18 qualified leads/mo, Delhi
 * B2B consulting firm, real verbatim quote). Credo World has no published
 * direct quote in constants.ts (only challenge/solution/results), so the
 * resultHighlight.quote below is a factual narrative built from that real
 * case-study text — NOT an invented first-person client quote. This mirrors
 * the "no fabrication" rule after a prior page invented an unsourced client
 * quote ("Aspire Developers").
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const B2B_LEAD_GEN_CONTENT: LandingContent = {
  industryLabel: 'B2B Lead Generation',

  hero: {
    badge: 'B2B & CONSULTING SPECIALISTS · ₹10CR+ AD SPEND MANAGED',
    headlineLines: ['B2B Lead Generation', 'Agency in India'],
    cyclingWords: [
      'Built for B2B pipeline.',
      'Built for consulting firms.',
      'Built for ABM.',
      'Built for long sales cycles.',
    ],
    subhead:
      "Growth Escalators is a B2B lead generation agency for India's consulting firms, agencies, and B2B service businesses. We build ABM-targeted pipeline — not just leads — using LinkedIn authority, Google Ads, and content matched to your ICP and sales cycle. Credo World went from 0 to 15 qualified B2B leads a month at a ₹2.5L average deal size; a Delhi B2B consulting firm went from 0 to 18 a month in under 5 months.",
    primaryCta: { label: 'Book a Free Pipeline Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🎯', value: '0→15/mo', label: 'Qualified B2B Leads' },
      { emoji: '💰', value: '₹2.5L',   label: 'Avg Deal Size'      },
      { emoji: '🚀', value: '0→18/mo', label: 'Leads in <5 Months' },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Business analytics dashboard showing pipeline and growth metrics',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full B2B pipeline actually looks like',
    subhead:
      'Buying committees research for months before a call gets booked — the vendors who win are the ones showing up with authority and proof at every stage.',
    images: [
      { src: '/industries/mkt/3.jpg', alt: 'Team collaborating around a laptop', caption: 'Content built to earn trust with a buying committee' },
      { src: '/industries/mkt/4.jpg', alt: 'Business meeting in a modern office', caption: 'Sales conversations booked with the right ICP' },
      { src: '/industries/mkt/5.jpg', alt: 'Professionals meeting to review a growth plan', caption: 'A pipeline reviewed together with your sales team' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: "Why most “lead generation” agencies can't actually fill a B2B pipeline",
  painPoints: [
    { emoji: '📇', title: 'Leads that never should have been "leads"', body: "Most agencies optimize for form-fills, not fit. You end up with a CRM full of students, job-seekers, and curious scrollers — and a sales team that's stopped trusting marketing's numbers." },
    { emoji: '🐌', title: 'A 3–9 month sales cycle nobody nurtures', body: "B2B buying committees research for months before a call gets booked. Most agencies run one campaign, hand over a spreadsheet, and disappear — leaving everything between click and contract to chance." },
    { emoji: '🎯', title: 'Spray-and-pray targeting on a narrow ICP', body: "Your actual buyer is a specific company size, a specific job title, a specific problem. Broad interest-based targeting wastes most of its budget on people who were never going to buy from you." },
    { emoji: '🤝', title: 'Marketing and sales speaking different languages', body: "Marketing reports leads; sales reports revenue. Without a shared definition of a qualified lead and a real handoff process, both teams end up blaming each other instead of closing deals." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Pipeline needs precision, not more leads',
    subhead:
      "More leads without more fit just means more noise for your sales team. Our AI is built to find and nurture the accounts that actually match your ICP — from first touch to signed contract.",
    cards: [
      { emoji: '🧠', title: 'AI fit + intent scoring', body: 'Every lead is scored against your real ICP — company size, industry, job title, and buying signals — before it ever reaches your sales team. Reps only chase accounts worth chasing.' },
      { emoji: '🎯', title: 'Look-alikes from closed-won deals', body: 'We build audience look-alikes from your actual closed-won accounts (with consent) — not from anyone who filled a form. The targeting matches the companies that signed, not the ones that clicked.' },
      { emoji: '💬', title: 'AI-sequenced nurture for long cycles', body: 'LinkedIn, email, and retargeting sequences that adapt to where each account is in a 3–9 month buying journey — so nobody goes cold waiting for their next touch.' },
      { emoji: '📊', title: 'Pipeline-stage forecasting', body: 'We track leads through to SQL and opportunity stage, not just form-fills — so you can see, month over month, whether pipeline value is actually moving, not just lead volume.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete B2B pipeline-building engine',
  servicesSubhead: 'Six services, one promise: a calendar of sales calls with buyers who actually fit your ICP.',
  services: [
    { title: 'ABM & ICP-Targeted Campaigns', body: 'LinkedIn and Google campaigns built around a defined ideal customer profile and target account list — not broad B2B "interests" that waste budget on the wrong companies.' },
    { title: 'LinkedIn Authority & Thought-Leadership Content', body: 'Founder and company content that builds category authority with the people on your target account list, so outbound and paid campaigns land on a warmer audience.' },
    { title: 'High-Converting B2B Landing Pages & Lead Magnets', body: 'Pages and offers built for a considered buyer — case studies, ROI calculators, and gated content that qualify interest before a sales call ever gets booked.' },
    { title: 'Outbound-Assisted Demand Generation', body: "LinkedIn and email sequences layered on top of paid campaigns to reach target accounts directly — so you're not relying on inbound alone to fill pipeline." },
    { title: 'Marketing-to-Sales Handoff & Lead Scoring', body: 'A shared SQL definition, CRM integration, and lead routing built with your sales team — so every lead that reaches them has already been qualified against your ICP.' },
    { title: 'Long-Cycle Nurture (3–9 Months)', body: "Multi-touch email, LinkedIn, and retargeting sequences keyed to where each account is in its buying journey — built for B2B's real decision timeline, not a 7-day drip." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A B2B pipeline we built from zero',
  resultHighlight: {
    label: 'FEATURED CLIENT · B2B / CONSULTING',
    name: 'Credo World',
    detail: 'B2B / Consulting · LinkedIn Authority + Content + Google Ads',
    quote:
      "Credo World's entire B2B pipeline relied on referrals — zero digital lead generation, zero predictability. We built LinkedIn authority content, a long-form thought-leadership system, targeted Google Ads, and a high-converting landing page around their ICP. Within 4 months LinkedIn grew 400%, and the pipeline went from zero to a steady 15 qualified leads a month at a ₹2.5L average deal size.",
    metrics: [
      { value: '0 → 15/mo', label: 'Qualified B2B leads (Credo World)' },
      { value: '₹2.5L',     label: 'Avg deal size (Credo World)' },
      { value: '0 → 18/mo', label: 'Vikram Choudhary, Delhi B2B firm (<5 mo)' },
    ],
  },

  process: [
    { step: '01', title: 'Pipeline & ICP Audit', body: 'A 45-minute call. We review your current lead-gen, your real ICP, sales-cycle length, and where deals actually stall — and tell you exactly which accounts your campaigns are missing.' },
    { step: '02', title: 'ABM Launch Plan', body: 'Within 7 days you get a written plan: channel mix, target account list, budget split, and an SQL definition agreed with your sales team before a single campaign goes live.' },
    { step: '03', title: 'Build & Launch', body: 'Campaigns, landing pages, content calendar, and CRM lead-routing go live within 14 days. Most clients see their first qualified conversation in week 2–3.' },
    { step: '04', title: 'Optimize Toward Pipeline Value', body: "We optimize for SQLs and deal value, not raw lead count — with a monthly pipeline review alongside your sales team so both sides are looking at the same numbers." },
  ],
  processHeadline: 'Four steps from cold market to qualified pipeline',

  whyUsHeadline: 'The B2B agency that reports pipeline, not leads',
  whyUs: [
    { title: 'We report pipeline, not leads', body: 'Vanity lead counts are easy to inflate. We track SQLs, deal value, and sales-cycle velocity — the numbers your sales team actually cares about.' },
    { title: "B2B-only playbook, not a repurposed D2C funnel", body: "ABM, ICP targeting, and long-cycle nurture are different disciplines from ecommerce performance marketing. We build campaigns around how B2B actually buys." },
    { title: 'Real B2B proof', body: "“We were invisible digitally despite being one of the top consulting firms in our niche. GE built our LinkedIn authority, Google Ads, and content machine. We went from 0 inbound leads to 18 qualified ones per month in under 5 months.” — Vikram Choudhary, B2B Consulting Firm, Delhi" },
    { title: 'You own the pipeline infrastructure', body: 'CRM data, ad accounts, landing pages, content library, and audience seeds — all created in your name. Leave any time and the entire system stays with you.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many qualified leads can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the qualified B2B leads your marketing budget can realistically drive.',
    source: 'Calculator — B2B Lead Gen',
    unitPlural: 'qualified leads',
    budget: { label: 'Your monthly marketing budget', default: 80000 },
    value: { label: 'Average deal value (₹)', default: 250000 },
    cplLow: 500,
    cplHigh: 2000,
    closeRate: 0.15,
    benchmark: 'Benchmark: well-targeted B2B campaigns bring qualified leads at roughly ₹500–₹2,000 each, with about 15% converting to a sales-qualified opportunity.',
    formHeadline: 'See your full pipeline breakdown',
    formSubhead: 'Get your numbers, the B2B lead-quality benchmark, and the Credo World playbook — free, straight to your inbox.',
  },

  faqsHeadline: 'Hiring a B2B lead generation agency',
  faqs: [
    { q: 'How is a B2B lead generation agency different from a general performance marketing agency?', a: "General agencies optimize for cheap form-fills. A B2B lead-gen agency builds around your ICP, account-based targeting, and a multi-month nurture sequence — because a B2B buying committee doesn't decide in one session like a D2C shopper does." },
    { q: 'What actually counts as a "qualified" B2B lead?', a: 'We define this with you before launch — usually company size, industry, job title/seniority, and an intent signal (demo request, pricing page visit, content download). Only leads that clear this bar get scored as SQLs and routed to your sales team.' },
    { q: 'What sales-cycle lengths do you work with?', a: 'Most of our B2B clients have a 1–9 month cycle, from consulting firms closing in weeks to longer enterprise deals. We build the nurture sequence to match your actual cycle, not a generic 7-day drip.' },
    { q: 'Do you run account-based marketing (ABM)?', a: 'Yes — for clients with a defined target account list, we layer LinkedIn, Google, and content around those specific companies rather than broad B2B "interest" targeting.' },
    { q: 'What deal size or contract value do you work best with?', a: 'We work best with B2B services and consulting deals from roughly ₹50k up — our featured client Credo World averages a ₹2.5L deal size. Smaller ticket sizes work too, but the ROI math gets tighter below that.' },
    { q: 'How do you handle the marketing-to-sales handoff?', a: 'We agree an SQL definition with your sales team before launch, integrate with your CRM, and route leads with the context (company, role, intent signal) your reps need for a useful first call.' },
    { q: 'How soon will we see qualified leads?', a: "Most clients see their first qualified conversation in week 2–3. Given B2B's longer cycle, meaningful pipeline value typically builds over month 2–4 as nurture sequences mature." },
  ],

  finalCta: {
    title: 'Ready to build a real B2B pipeline?',
    subhead: "Book a free, no-obligation pipeline audit. We'll review your current lead-gen, your ICP, and your sales-cycle data — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Pipeline Audit',
  },

  videoTestimonialsTag: 'HEAR FROM B2B FOUNDERS',
  videoTestimonialsHeadline: 'Real B2B firms, real pipeline',
  videoTestimonialsSubhead: 'Tap any short to hear how B2B founders talk about their pipeline.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from B2B / consulting clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for B2B growth',
    links: [
      { label: 'LinkedIn Marketing Agency', href: '/linkedin-marketing-agency', blurb: 'The channel-specific playbook behind most of our B2B pipeline.' },
      { label: 'SaaS Marketing Agency', href: '/saas-marketing-agency', blurb: 'For B2B SaaS specifically — trial-to-paid and CAC:LTV funnels.' },
      { label: 'Our Services', href: '/services', blurb: 'The full stack: ads, funnels, web, SEO, and branding.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New B2B Lead Generation Lead',
    headline: 'Tell us about your pipeline',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free pipeline audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
