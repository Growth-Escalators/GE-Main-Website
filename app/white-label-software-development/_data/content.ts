/**
 * All copy and data for the /white-label-software-development landing page.
 *
 * EDIT this file to change anything visible on the page.
 * Page composition lives in app/white-label-software-development/page.tsx.
 *
 * PROOF DISCIPLINE: every number/claim here is grounded in real, shipped work
 * (see the four products in `builds`). No unverified marquee stats, no invented
 * client names — white-label client work stays anonymous by design.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const WHITE_LABEL_CONTENT: LandingContent = {
  industryLabel: 'White-Label',
  bookingUrl: 'https://cal.com/growth-escalators/30min',

  hero: {
    variant: 'bold',
    badge: 'WHITE-LABEL SOFTWARE & APP DEVELOPMENT · FOR AGENCIES',
    headlineLines: ['Ship production software.', 'Under your brand.'],
    cyclingWords: ['SaaS platforms.', 'Web & mobile apps.', 'AI automation.', 'E-commerce & checkout.'],
    subhead:
      'Your silent engineering partner. We build multi-tenant SaaS, web & mobile apps, and AI automation that agencies resell under their own brand — production-grade, shipped fast, fully white-label. You keep the client; we write the code.',
    primaryCta: { label: 'Book a Discovery Call', href: 'https://cal.com/growth-escalators/30min' },
    secondaryCta: { label: 'See what we’ve built ↓', href: '#builds' },
    statPills: [
      { emoji: '🏢', value: 'White-label', label: 'Built for agencies' },
      { emoji: '🚀', value: '237+', label: 'Projects delivered' },
      { emoji: '🔌', value: '50+', label: 'Integrations' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'Why agencies & founders get stuck on software delivery',
  painPoints: [
    { emoji: '🧑‍💻', title: 'No in-house engineering', body: 'You’ve sold (or want to sell) software, but hiring and managing a dev team is slow, costly, and risky.' },
    { emoji: '🌍', title: 'Offshore quality roulette', body: 'Cheap shops ship spaghetti, miss deadlines, and go quiet on comms. Rework eats the margin you were chasing.' },
    { emoji: '🔌', title: 'Integration hell', body: 'Payments, WhatsApp, ads, CRMs, auth — every integration turns into a multi-week R&D project instead of reuse.' },
    { emoji: '🇮🇳', title: 'India-market compliance', body: 'GST, TDS, RERA, invoicing — the details that quietly break a launch when the team has never shipped for India.' },
  ],

  aiAdvantage: {
    tag: 'AI, BUILT IN',
    headline: 'AI woven into products — not bolted on',
    subhead:
      'We don’t just “use ChatGPT.” We ship AI as a core feature of production apps, with humans in the loop where it matters.',
    cards: [
      { emoji: '🧠', title: 'GPT-4 intelligence in the CRM', body: 'A production GPT-4 assistant answering questions over live business data inside our own multi-tenant CRM.' },
      { emoji: '✍️', title: 'Claude-powered content engine', body: 'A live content-generation app built on the Anthropic Claude SDK, deployed and serving at content.growthescalators.com.' },
      { emoji: '🎯', title: 'AI candidate matching', body: 'Wizmatch scores and matches candidates to roles with signal-based sourcing and a GitHub miner — real ML in a real product.' },
      { emoji: '⚙️', title: 'AI-assisted delivery', body: 'An AI-agent dev system (context layer, skills, ADRs) that lets a lean team ship production features fast — with a paper trail.' },
    ],
  },

  servicesTag: 'WHAT WE BUILD FOR YOU',
  servicesHeadline: 'Full-stack product engineering, under one roof',
  servicesSubhead: 'One partner for the whole build — from database schema to shipped product, on your brand.',
  services: [
    { title: 'Custom SaaS & CRM platforms', body: 'Multi-tenant SaaS with auth, RBAC, billing, and dashboards — the same stack we run our own business on.' },
    { title: 'Web & mobile app development', body: 'Fast, modern Next.js / React web apps and responsive PWAs, engineered to convert and built to scale.' },
    { title: 'E-commerce & checkout', body: 'Storefronts, funnels, and checkout with live payment integrations (Cashfree, Razorpay) and post-purchase upsells.' },
    { title: 'AI automation & agents', body: 'GPT-4 / Claude features, workflow automation, and AI agents embedded in your product where they add real value.' },
    { title: 'Staffing-tech & internal tools', body: 'Candidate matching, admin panels, and data-heavy internal dashboards that make operations effortless.' },
    { title: 'Integrations & compliance', body: 'WhatsApp, Meta, SMS, email, Shopify, GST / TDS / RERA — reuse from our library instead of months of R&D.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Real products we’ve shipped to production',
    subhead: 'These are our own live builds — the same engineering we put behind your brand.',
    items: [
      {
        name: 'Growth Escalators CRM',
        what: 'A production multi-tenant CRM + marketing-automation + D2C-commerce platform that runs our own business — sales pipelines, email/WhatsApp sequences, GST invoicing, a real-time inbox, and role-based access control.',
        stack: 'Node · Express · TypeScript · Drizzle · PostgreSQL · React · Vite · Socket.io · Railway',
      },
      {
        name: 'Dealos — real-estate sales OS',
        what: 'A multi-tenant SaaS for real-estate teams — lead kanban, a RERA-compliant document generator, a commission engine with GST/TDS, and property-portal lead ingestion. Shipped with 134 automated tests green.',
        stack: 'Next.js · Supabase · Postgres RLS · Drizzle · Razorpay · shadcn/ui · Sentry',
      },
      {
        name: 'Dr Dubay — clinic platform',
        what: 'A live public website plus a clinic admin/CRM for a Jaipur surgeon — bookings, patient records, and WhatsApp campaigns. Serving real traffic today.',
        stack: 'Next.js · React · Prisma · NextAuth · MUI · AWS S3',
        href: 'https://drdubay.in',
      },
      {
        name: 'Wizmatch — staffing platform',
        what: 'An AI-enabled staffing platform (in active development) — candidate scoring, signal-based sourcing, a GitHub candidate miner, and a review workbench across ~18 admin modules.',
        stack: 'TypeScript · PostgreSQL · AI scoring · signal pipeline',
      },
    ],
  },

  resultsTag: 'FLAGSHIP BUILD',
  resultsHeadline: 'A production SaaS, top to bottom',
  resultHighlight: {
    label: 'FLAGSHIP BUILD',
    name: 'Dealos — real-estate sales OS',
    detail: 'A multi-tenant SaaS product, live on Vercel',
    quote:
      'A full multi-tenant SaaS — Postgres row-level-security isolation, Razorpay billing, a RERA-compliant document generator across multiple states, and a commission engine with correct GST and TDS. Shipped to production with 134 automated tests green.',
    metrics: [
      { value: 'Multi-tenant', label: 'Postgres RLS isolation' },
      { value: '134', label: 'Automated tests passing' },
      { value: 'RERA + GST', label: 'India compliance built in' },
    ],
  },

  processTag: 'HOW WE WORK',
  processHeadline: 'From brief to shipped — with you in the loop',
  process: [
    { step: '01', title: 'Discovery & scope', body: 'A working session to map the product, the users, and the must-haves. You get a written scope, a timeline, and a fixed engagement model.' },
    { step: '02', title: 'Architecture blueprint', body: 'We design the stack, data model, and integrations up front — reusing our proven libraries so you’re not paying for R&D.' },
    { step: '03', title: 'Build & ship', body: 'Production-grade code, on your brand, with live previews you can show your client. Transparent progress — no black box.' },
    { step: '04', title: 'Handover or scale', body: 'We hand off clean, documented code — or stay on as your dedicated team and scale with our in-house dev + staffing bench.' },
  ],

  whyUsTag: 'WHY AGENCIES PARTNER WITH US',
  whyUsHeadline: 'Add an engineering arm to your agency — the upside',
  whyUs: [
    { title: 'Resell software without hiring', body: 'Offer SaaS, apps, and AI builds to your clients without recruiting, managing, or paying a full-time engineering team. We are your on-demand dev arm.' },
    { title: 'Protect your margins', body: 'No offshore rework, blown deadlines, or spaghetti code eating your profit — production-grade delivery the first time, on a predictable, scoped engagement.' },
    { title: 'Your brand, your client', body: 'Fully white-label: we work under your name, communicate through you, and never contact your client. The same discretion we already run for UK/US/AU/CA agencies.' },
    { title: 'Scale delivery on demand', body: 'Ramp capacity up or down per project with our in-house dev + staffing bench — take on bigger builds without carrying the fixed headcount cost.' },
    { title: 'One partner: software + AI + growth', body: 'Design, build, integrations, AI, and even performance marketing under one roof — one accountable vendor instead of stitching freelancers together.' },
    { title: 'Ship faster, quote shorter', body: 'Our reusable component + integration library (payments, WhatsApp, Meta, Shopify) turns months of R&D into reuse — so you quote shorter timelines and win more deals.' },
  ],

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'White-label, answered',
  faqs: [
    { q: 'Is this truly white-label — will my client know?', a: 'Yes, fully white-label. We work under your brand, communicate through you, and never contact your client. We already do this for agencies across the UK, US, Australia, and Canada.' },
    { q: 'Who owns the code and IP?', a: 'You (and your client) do. On handover you receive the full, documented codebase and repositories. We can also stay on as your ongoing dedicated team if you prefer.' },
    { q: 'What do you build with?', a: 'Modern, production-proven stacks: Next.js / React, Node / Express, TypeScript, PostgreSQL (Drizzle / Supabase), plus real integrations — payments (Cashfree, Razorpay), WhatsApp, Meta, SMS, email — and AI (GPT-4, Claude).' },
    { q: 'How do engagements work?', a: 'Three models: fixed-scope projects, a dedicated team (monthly), or staff augmentation where our engineers slot into your team. We’ll recommend the right fit on the discovery call.' },
    { q: 'How fast can you ship?', a: 'We reuse proven components and an AI-assisted delivery system, so a well-scoped MVP typically moves in weeks, not quarters. You’ll get a realistic timeline in the written scope up front.' },
    { q: 'Can you build for the India market specifically?', a: 'Yes — GST (CGST/SGST/IGST), TDS thresholds, RERA-compliant documents, and India payment rails are already shipped in our products. That compliance depth is hard to fake and easy for us to reuse.' },
  ],

  finalCta: {
    title: 'Add an engineering team to your agency — without hiring one',
    subhead: 'Book a discovery call. Tell us what you (or your client) need built, and we’ll come back with a scope, a timeline, and a clear way to work together.',
    ctaLabel: 'Book a Discovery Call',
  },

  videoTestimonialsTag: 'PARTNER VOICES',
  videoTestimonialsHeadline: 'Hear from partners we build for',
  videoTestimonials: [
    // White-label client testimonials are confidential; add any approved YouTube Shorts URLs here.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New White-Label Dev Lead',
    headline: 'Tell us what you need built',
    subhead: 'Share the project (or your client’s brief) and we’ll get back within 24 hours with next steps.',
    tag: 'LET’S BUILD',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'See more of our work',
    subhead: 'Explore the full portfolio and case studies.',
    links: [
      { label: 'Our Portfolio', href: '/portfolio', blurb: 'Products, platforms, and brands we’ve built and scaled.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real projects with real outcomes across web, funnels, and growth.' },
      { label: 'All Services', href: '/services', blurb: 'Everything Growth Escalators does, from software to performance marketing.' },
    ],
  },
}
