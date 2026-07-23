/**
 * All copy and data for the /best-software-company-in-jaipur landing page.
 *
 * BOFU local money page targeting "best software company in jaipur" —
 * sibling to /software-company-in-jaipur and /software-development-company-
 * jaipur, differentiated on accountability post-launch rather than the
 * build itself. EDIT this file to change anything visible.
 *
 * PROOF DISCIPLINE: uniqueIntro, localProof, and faqs are sourced from
 * lib/money-pages.ts (slug: 'best-software-company-in-jaipur'). painPoints,
 * serviceBlocks, process, and whyUs are sourced from lib/local-services.ts
 * (slug: 'software-development'). The Exzept and Credo World proof points
 * are real, already-published GE client work — no invented clients or
 * metrics. Uses the in-page LeadForm (leads → /api/lead → CRM), not a
 * Cal.com link.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const BEST_SOFTWARE_COMPANY_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Best Software Company',

  hero: {
    variant: 'bold',
    badge: 'BEST SOFTWARE COMPANY IN JAIPUR · BUILT + ACCOUNTABLE AFTER LAUNCH',
    headlineLines: ['Best Software Company', 'in Jaipur'],
    cyclingWords: ['Judged on uptime, not just delivery.', 'Judged on revenue, not just design.', 'One team, before and after launch.'],
    subhead:
      'Most software shops in Jaipur hand you a project and disappear after launch. Growth Escalators keeps the same team — the one that also runs your marketing — accountable for uptime, performance, and iteration long after go-live, because a slow or broken site quietly kills the campaigns we’re running to it.',
    primaryCta: { label: 'Get a Free Scoping Call', href: '#lead-form' },
    secondaryCta: { label: 'See what we’ve built ↓', href: '#builds' },
    statPills: [
      { emoji: '⭐', value: '4.9★', label: '187+ reviews' },
      { emoji: '🔁', value: '97%', label: 'Client retention' },
      { emoji: '📍', value: 'Jaipur', label: 'Based in Sanganer' },
    ],
    image: {
      src: '/industries/softwaredev/hero.jpg',
      alt: 'Code displayed on a developer’s screen',
    },
  },

  showcase: {
    tag: 'JUDGED ON RESULTS',
    headline: 'Software judged on revenue, not just delivery',
    subhead: 'Our dev work sits next to our marketing work — so every build is measured by what it earns, not just whether it shipped.',
    images: [
      { src: '/industries/softwaredev/1.jpg', alt: 'Colourful code on a screen', caption: 'Landing pages built to convert, not just look finished' },
      { src: '/industries/softwaredev/3.jpg', alt: 'Developer working on a laptop', caption: 'The same team stays on after launch' },
      { src: '/industries/softwaredev/4.jpg', alt: 'Developers collaborating at a desk', caption: 'One Sanganer office — no vendor to chase' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'What separates the best from just another dev shop',
  painPoints: [
    { emoji: '🐌', title: 'A site that’s slow and hard to update', body: 'Every small content change means waiting on a developer who’s slow to respond — or has moved on entirely.' },
    { emoji: '👻', title: 'A vendor who vanishes after go-live', body: 'The invoice gets paid, the project is “done,” and the phone stops being picked up the moment something breaks.' },
    { emoji: '🗺️', title: 'No clear roadmap or scope', body: 'Projects that started with a vague brief keep growing in scope and cost, with no fixed price or timeline ever agreed.' },
    { emoji: '📉', title: 'Nobody judged on the outcome', body: 'A dev shop gets paid whether the site converts or not — there’s no reason for them to care once the invoice clears.' },
  ],

  servicesTag: 'WHAT WE BUILD',
  servicesHeadline: 'Full-stack software, held to a growth standard',
  servicesSubhead: 'The same build quality as any dev shop — plus a team that stays accountable for what it earns.',
  services: [
    { title: 'Custom Web App Development', body: 'React/Next.js-based web applications built for your actual workflow — booking systems, dashboards, portals — not a generic template.' },
    { title: 'E-commerce Development', body: 'Shopify and custom storefronts built for conversion, with the same CRO thinking that goes into our marketing landing pages.' },
    { title: 'API Integrations & Automation', body: 'CRM, payment gateway, and third-party API integrations that remove manual data entry and connect your tools properly.' },
    { title: 'Internal Tools & Dashboards', body: 'Purpose-built internal tools for reporting, operations, or lead tracking — replacing spreadsheets held together with formulas.' },
    { title: 'Hosting, QA & Maintenance', body: 'Mobile-first optimisation, cross-device QA, and ongoing hosting/maintenance so what we ship keeps working after launch.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Landing pages judged on revenue, not delivery',
    subhead: 'Two Jaipur-adjacent funnels where our dev work is the reason the numbers moved.',
    items: [
      {
        name: 'Exzept — conversion-optimised landing pages',
        what: 'Landing page rebuilds were part of the funnel overhaul that took this fashion eCommerce brand’s ROAS from 1.8x to 5.2x and added ₹8L in revenue in 90 days — proof our dev work is judged on revenue, not just delivery.',
        stack: 'Next.js · CRO · Funnel Engineering',
      },
      {
        name: 'Credo World — high-converting landing page',
        what: 'A custom landing page anchored the cold-lead funnel that took this B2B consulting firm from zero inbound leads to 15 qualified leads a month.',
        stack: 'Next.js · Landing Page · Lead Funnel',
      },
    ],
  },

  resultsTag: 'REAL BUILD, REAL RESULT',
  resultsHeadline: 'A landing page that moved the ROAS needle',
  resultHighlight: {
    label: 'SOFTWARE BUILD',
    name: 'Exzept',
    detail: 'Fashion eCommerce brand',
    quote:
      'Landing page rebuilds were part of the funnel overhaul that took ROAS from 1.8x to 5.2x, with cost per lead down 44% and revenue up ₹8L in 90 days — proof our dev work is judged on revenue, not just delivery.',
    metrics: [
      { value: '1.8x → 5.2x', label: 'ROAS after rebuild' },
      { value: '−44%', label: 'Cost per lead' },
      { value: '+₹8L', label: 'Revenue in 90 days' },
    ],
  },

  processTag: 'HOW WE WORK',
  processHeadline: 'Fixed scope up front, accountable after launch',
  process: [
    { step: '01', title: 'Discovery & Scoping', body: 'A working session to understand what you actually need — not a generic questionnaire. We leave with a written scope.' },
    { step: '02', title: 'Design & Architecture', body: 'Wireframes, technical architecture, and a sprint plan — signed off by you before a single line of code ships.' },
    { step: '03', title: 'Sprints & Weekly Demos', body: 'Development in 1-2 week sprints with a working demo every cycle, so you’re never waiting months for a reveal.' },
    { step: '04', title: 'QA, Launch & Ongoing Accountability', body: 'Cross-device testing, a staged rollout, documentation handed over, and a team that stays on to watch uptime and performance — not a vendor who disappears at go-live.' },
  ],

  whyUsTag: 'WHY WE’RE THE ONE TO CALL "BEST"',
  whyUsHeadline: 'Not the biggest claim — the most accountable one',
  whyUs: [
    { title: 'We don’t disappear after launch', body: 'The same team that built your site keeps it running — because a slow or broken site quietly kills the campaigns we’re also running to it.' },
    { title: 'Fixed-scope, written quotes', body: 'You get a defined scope and price before work starts — no open-ended hourly billing that creeps past budget.' },
    { title: 'In-house team, no offshore handoffs', body: 'Development happens in our Sanganer, Jaipur office by people you can actually talk to, not a rotating outsourced team.' },
    { title: '4.9★ from 187+ reviews, 97% retention', body: 'A track record you can check — not marketing copy. Clients stay because the software and the support both hold up.' },
    { title: 'We inherit existing codebases too', body: 'With a paid audit first, we regularly take over and stabilise projects handed off from other vendors — we won’t quote blind on someone else’s code.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many project enquiries can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the enquiries your marketing budget can realistically drive.',
    source: 'Calculator — Best Software Company Jaipur',
    unitPlural: 'project enquiries',
    budget: { label: 'Your monthly marketing budget', default: 80000 },
    value: { label: 'Average project value (₹)', default: 200000 },
    cplLow: 500,
    cplHigh: 2000,
    closeRate: 0.1,
    benchmark: 'Benchmark: qualified software-project enquiries in Jaipur typically cost ₹500–₹2,000 each, with roughly 1 in 10 converting into a signed project.',
    formHeadline: 'See your full pipeline breakdown',
    formSubhead: 'Get your numbers, the Jaipur benchmark, and a look at what we’ve shipped — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'What makes a software company "the best" in Jaipur',
  faqs: [
    { q: 'What makes you the "best" software company rather than just another dev shop?', a: 'We’re not purely a dev shop — every build ships with the marketing and conversion context most agencies lack, because we run both under one roof.' },
    { q: 'How do you handle project scoping and pricing?', a: 'Fixed-scope quote after a discovery call — no hourly billing surprises. Larger or evolving projects move to a sprint-based retainer once scope is clear.' },
    { q: 'Do you work with Jaipur startups or only established businesses?', a: 'Both — we’ve built for early-stage Jaipur startups and established multi-location businesses; project size scales, our process doesn’t change.' },
    { q: 'Can you take over an existing codebase from another vendor?', a: 'Yes, with a paid audit first — we won’t quote blind on someone else’s code, but we regularly inherit and stabilise projects handed off from other shops.' },
    { q: 'Is there a contract lock-in?', a: 'Standard retainers run month-to-month after an initial commitment long enough to see real data; project-based work is scoped and priced up front with no ongoing lock-in.' },
    { q: 'Do you offer post-launch support?', a: 'Yes — every build includes a maintenance window post-launch, and ongoing support/retainer options after that for bug fixes, feature additions, and hosting.' },
  ],

  finalCta: {
    title: 'Want a software partner that stays accountable?',
    subhead: 'Tell us what you need built and we’ll come back with a scope, a timeline, and a team that doesn’t disappear the day it ships.',
    ctaLabel: 'Get a Free Scoping Call',
  },

  videoTestimonialsTag: 'CLIENT VOICES',
  videoTestimonialsHeadline: 'Hear from the people we build for',
  videoTestimonials: [
    // Add approved YouTube Shorts URLs here when available.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Best Software Company Lead — Jaipur',
    headline: 'Tell us what you need built',
    subhead: 'Share the project and we’ll get back within 24 hours with next steps.',
    tag: 'LET’S BUILD',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Explore more',
    subhead: 'See the work, and the other things we build and grow.',
    links: [
      { label: 'Software Company in Jaipur', href: '/software-company-in-jaipur', blurb: 'Our in-house team and what we build day to day.' },
      { label: 'Software Development Company in Jaipur', href: '/software-development-company-jaipur', blurb: 'The sprint-by-sprint process behind every build.' },
    ],
  },
}
