/**
 * All copy and data for the /software-company-in-jaipur landing page.
 *
 * BOFU local money page targeting "software company in jaipur" — sibling to
 * /software-development-company-jaipur (which targets the longer "software
 * development company" phrase) and /best-software-company-in-jaipur /
 * /it-company-in-jaipur. EDIT this file to change anything visible.
 *
 * PROOF DISCIPLINE: uniqueIntro, localProof, and faqs are sourced from
 * lib/money-pages.ts (slug: 'software-company-in-jaipur'). painPoints,
 * serviceBlocks, process, and whyUs are sourced from lib/local-services.ts
 * (slug: 'software-development'). The Flight Ticket Fare and Dr. Mukesh
 * Sharma proof points are real, already-published GE client work — no
 * invented clients or metrics. Uses the in-page LeadForm (leads → /api/lead
 * → CRM), not a Cal.com link.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SOFTWARE_COMPANY_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Software Company',

  hero: {
    variant: 'bold',
    badge: 'SOFTWARE COMPANY IN JAIPUR · IN-HOUSE SANGANER DEV TEAM',
    headlineLines: ['Software Company', 'in Jaipur'],
    cyclingWords: ['Websites & web apps.', 'CRMs & dashboards.', 'WhatsApp automation.', 'AI-powered features.'],
    subhead:
      "Growth Escalators' development team builds the software our own marketing depends on — conversion-optimised websites, booking systems, WhatsApp automations, and internal dashboards. We take on standalone software projects for Jaipur businesses that want a technical partner who understands growth, not just code.",
    primaryCta: { label: 'Get a Free Scoping Call', href: '#lead-form' },
    secondaryCta: { label: 'See what we’ve built ↓', href: '#builds' },
    statPills: [
      { emoji: '🧑‍💻', value: 'In-house', label: 'No outsourced dev vendor' },
      { emoji: '🔌', value: '50+', label: 'Integrations shipped' },
      { emoji: '📍', value: 'Jaipur', label: 'Based in Sanganer' },
    ],
    image: {
      src: '/industries/softwaredev/hero.jpg',
      alt: 'Code displayed on a developer’s screen',
    },
  },

  showcase: {
    tag: 'HOW WE BUILD',
    headline: 'An in-house team, not a rotating cast of freelancers',
    subhead: 'The same developers who built our own CRM and marketing stack work on your project.',
    images: [
      { src: '/industries/softwaredev/1.jpg', alt: 'Colourful code on a screen', caption: 'Clean, documented code — you own the repo on handover' },
      { src: '/industries/softwaredev/2.jpg', alt: 'Close-up of source code on a monitor', caption: 'A library of reusable integrations, not months of R&D' },
      { src: '/industries/softwaredev/4.jpg', alt: 'Developers collaborating at a desk', caption: 'One Sanganer office — no offshore handoffs' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'Why software projects in Jaipur stall',
  painPoints: [
    { emoji: '🐌', title: 'A site that’s slow and hard to update', body: 'Every small content change means waiting on a developer who’s slow to respond — or has moved on entirely.' },
    { emoji: '👻', title: 'A dev team that went dark', body: 'Freelancers and offshore teams that disappear mid-project, leaving you with half-built software and no documentation.' },
    { emoji: '🗺️', title: 'No clear roadmap or scope', body: 'Projects that started with a vague brief keep growing in scope and cost, with no fixed price or timeline ever agreed.' },
    { emoji: '🔒', title: 'Security and performance blind spots', body: 'Nobody’s testing for load, security, or mobile performance until something breaks in front of a customer.' },
  ],

  aiAdvantage: {
    tag: 'AI, BUILT IN',
    headline: 'AI woven into products — not bolted on',
    subhead: 'We don’t just “use ChatGPT.” We ship AI as a core feature of production apps, with humans in the loop where it matters.',
    cards: [
      { emoji: '🧠', title: 'GPT-4 intelligence in the CRM', body: 'A production GPT-4 assistant answering questions over live business data inside our own multi-tenant CRM.' },
      { emoji: '✍️', title: 'Claude-powered content engine', body: 'A live content-generation app built on the Anthropic Claude SDK, deployed and serving at content.growthescalators.com.' },
      { emoji: '🎯', title: 'AI candidate matching', body: 'Wizmatch scores and matches candidates to roles with signal-based sourcing and a GitHub miner — real ML in a real product.' },
      { emoji: '⚙️', title: 'AI-assisted delivery', body: 'An AI-agent dev system (context layer, skills, ADRs) that lets a lean team ship production features fast — with a paper trail.' },
    ],
  },

  servicesTag: 'WHAT WE BUILD',
  servicesHeadline: 'Full-stack software, under one Jaipur roof',
  servicesSubhead: 'From a marketing website to a custom internal tool — scoped to what the business actually needs.',
  services: [
    { title: 'Custom Web App Development', body: 'React/Next.js-based web applications built for your actual workflow — booking systems, dashboards, portals — not a generic template.' },
    { title: 'E-commerce Development', body: 'Shopify and custom storefronts built for conversion, with the same CRO thinking that goes into our marketing landing pages.' },
    { title: 'API Integrations & Automation', body: 'CRM, payment gateway, and third-party API integrations that remove manual data entry and connect your tools properly.' },
    { title: 'Internal Tools & Dashboards', body: 'Purpose-built internal tools for reporting, operations, or lead tracking — replacing spreadsheets held together with formulas.' },
    { title: 'Hosting, QA & Maintenance', body: 'Mobile-first optimisation, cross-device QA, and ongoing hosting/maintenance so what we ship keeps working after launch.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Real Jaipur builds, from our own team',
    subhead: 'No outsourced vendor in the loop — projects our in-house developers scoped, built, and still support.',
    items: [
      {
        name: 'Flight Ticket Fare — WhatsApp automation & lead routing',
        what: 'We engineered the WhatsApp automation and lead-routing logic behind their funnel — real backend build work, not just ad management. Funnel conversion moved up 4x and cost per lead dropped from ₹380 to ₹94 as monthly leads scaled past 500.',
        stack: 'WhatsApp Business API · Automation · Lead Routing',
      },
      {
        name: 'Dr. Mukesh Sharma — practice website & LinkedIn platform',
        what: 'Our team designed and shipped the practice website alongside a personal-branding engagement — no outsourced dev vendor in the loop.',
        stack: 'Next.js · React · In-house design',
      },
      {
        name: 'Growth Escalators CRM',
        what: 'A production multi-tenant CRM + marketing-automation platform that runs our own business — sales pipelines, WhatsApp sequences, and a real-time inbox.',
        stack: 'Node · Express · TypeScript · PostgreSQL · React',
      },
    ],
  },

  resultsTag: 'REAL BUILD, REAL CLIENT',
  resultsHeadline: 'Backend engineering, not just a website',
  resultHighlight: {
    label: 'SOFTWARE BUILD',
    name: 'Flight Ticket Fare',
    detail: 'Travel / lead-generation business',
    quote:
      'We engineered the WhatsApp automation and lead-routing logic that took funnel conversion up 4x — real backend build work, not just ad management. The lead-routing and WhatsApp automation stack we built is still monitored and maintained by our team today.',
    metrics: [
      { value: '4x', label: 'Funnel conversion lift' },
      { value: '₹380 → ₹94', label: 'Cost per lead' },
      { value: '500+', label: 'Monthly leads scaled to' },
    ],
  },

  processTag: 'HOW WE WORK',
  processHeadline: 'From brief to shipped — with you in the loop',
  process: [
    { step: '01', title: 'Discovery & Scoping', body: 'A working session to understand what you actually need — not a generic questionnaire. We leave with a written scope.' },
    { step: '02', title: 'Design & Architecture', body: 'Wireframes, technical architecture, and a sprint plan — signed off by you before a single line of code ships.' },
    { step: '03', title: 'Sprints & Weekly Demos', body: 'Development in 1-2 week sprints with a working demo every cycle, so you’re never waiting months for a reveal.' },
    { step: '04', title: 'QA, Launch & Handover', body: 'Cross-device testing, a staged rollout, and documentation handed over — plus a defined post-launch support window.' },
  ],

  whyUsTag: 'WHY JAIPUR BUSINESSES BUILD WITH US',
  whyUsHeadline: 'A software company that actually ships',
  whyUs: [
    { title: 'Marketing-aware development', body: 'Our dev team works alongside our marketing team, so sites and apps are built to convert and track properly — not just to look good.' },
    { title: 'Fixed-scope, written quotes', body: 'You get a defined scope and price before work starts — no open-ended hourly billing that creeps past budget.' },
    { title: 'In-house team, no offshore handoffs', body: 'Development happens in our Sanganer, Jaipur office by people you can actually talk to, not a rotating outsourced team.' },
    { title: 'Support after launch', body: 'Every project ships with a defined post-launch support window, plus ongoing maintenance and retainer options after that.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many project enquiries can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the enquiries your marketing budget can realistically drive.',
    source: 'Calculator — Software Company Jaipur',
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
  faqsHeadline: 'Choosing a software company in Jaipur',
  faqs: [
    { q: 'Do you build custom software or just websites?', a: 'Both — from marketing websites to custom web apps, internal dashboards, and API integrations. We scope based on what the business actually needs, not a fixed package.' },
    { q: 'Is your development team based in Jaipur?', a: 'Yes, our in-house dev team works out of our Sanganer, Jaipur office — no outsourced or offshore handoffs.' },
    { q: 'What tech stack do you use?', a: 'Primarily React/Next.js on the frontend and Node.js on the backend, with the stack adapted to project requirements — we’re not locked into one framework for every client.' },
    { q: 'Do you offer post-launch support?', a: 'Yes — every build includes a maintenance window post-launch, and ongoing support/retainer options after that for bug fixes, feature additions, and hosting.' },
    { q: 'How is pricing structured?', a: 'A fixed-scope quote after a discovery call for defined projects; larger or evolving projects move to a sprint-based retainer once scope is clear.' },
    { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. We’re based in Sanganer, Jaipur, and build for clients across India and abroad. Local clients can meet us in person; remote clients get the same process over calls.' },
  ],

  finalCta: {
    title: 'Have a product to build? Let’s scope it.',
    subhead: 'Tell us what you need — a website, an app, an internal tool, or an automation — and we’ll come back with a scope, a timeline, and a fixed way to work together.',
    ctaLabel: 'Get a Free Scoping Call',
  },

  videoTestimonialsTag: 'CLIENT VOICES',
  videoTestimonialsHeadline: 'Hear from the people we build for',
  videoTestimonials: [
    // Add approved YouTube Shorts URLs here when available.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Software Company Lead — Jaipur',
    headline: 'Tell us what you need built',
    subhead: 'Share the project and we’ll get back within 24 hours with next steps.',
    tag: 'LET’S BUILD',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Explore more',
    subhead: 'See the work, and the other things we build and grow.',
    links: [
      { label: 'Software Development Company in Jaipur', href: '/software-development-company-jaipur', blurb: 'Our full software-development process, sprint by sprint.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast, SEO-ready websites engineered to convert.' },
      { label: 'IT Company in Jaipur', href: '/it-company-in-jaipur', blurb: 'Managed hosting, uptime, and infrastructure support.' },
      { label: 'Best Software Company in Jaipur', href: '/best-software-company-in-jaipur', blurb: 'Why Jaipur businesses pick us over another dev shop.' },
    ],
  },
}
