/**
 * All copy and data for the /software-development-company-jaipur landing page.
 *
 * BOFU local money page for DIRECT clients (founders/businesses in Jaipur who
 * want software built) — distinct from /white-label-software-development, which
 * targets agencies reselling. EDIT this file to change anything visible.
 *
 * PROOF DISCIPLINE: every number/claim is grounded in real, shipped work — the
 * same four production builds published on the white-label page (237+ projects,
 * 50+ integrations, Dealos flagship w/ 134 tests). No invented client names or
 * metrics. Uses the in-page LeadForm (leads → /api/lead → CRM), not a Cal.com link.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SOFTWARE_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Software Development',

  hero: {
    variant: 'bold',
    badge: 'SOFTWARE DEVELOPMENT COMPANY IN JAIPUR · SAAS, WEB & MOBILE APPS',
    headlineLines: ['Software Development', 'Company in Jaipur'],
    cyclingWords: ['Custom SaaS platforms.', 'Web & mobile apps.', 'AI automation.', 'CRMs & internal tools.'],
    subhead:
      'Growth Escalators is a Jaipur-based software development company. We build production-grade SaaS, web & mobile apps, and AI automation — the same engineering that runs our own CRM, a live real-estate SaaS, and a clinic platform serving real traffic today. 237+ projects and 50+ integrations shipped.',
    primaryCta: { label: 'Get a Free Scoping Call', href: '#lead-form' },
    secondaryCta: { label: 'See what we’ve built ↓', href: '#builds' },
    statPills: [
      { emoji: '🚀', value: '237+', label: 'Projects delivered' },
      { emoji: '🔌', value: '50+', label: 'Integrations shipped' },
      { emoji: '📍', value: 'Jaipur', label: 'Based in Sanganer' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'Why software projects stall — and how we fix it',
  painPoints: [
    { emoji: '🧑‍💻', title: 'Freelancers who vanish', body: 'A cheap developer starts strong, then goes quiet mid-build. You’re left with half a product and no one accountable.' },
    { emoji: '🌍', title: 'Offshore quality roulette', body: 'Spaghetti code, missed deadlines, endless rework — the “savings” evaporate the moment you try to scale or hand it to a new team.' },
    { emoji: '🔌', title: 'Integration hell', body: 'Payments, WhatsApp, GST invoicing, CRMs, auth — every integration turns into a multi-week R&D project instead of reuse.' },
    { emoji: '🧾', title: 'Built, but not for India', body: 'GST, TDS, RERA, UPI / Cashfree / Razorpay — the details a team that’s never shipped for India quietly gets wrong.' },
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

  servicesTag: 'WHAT WE BUILD',
  servicesHeadline: 'Full-stack product engineering, under one roof',
  servicesSubhead: 'One Jaipur team for the whole build — from database schema to shipped product.',
  services: [
    { title: 'Custom SaaS & CRM platforms', body: 'Multi-tenant SaaS with auth, RBAC, billing, and dashboards — the same stack we run our own business on.' },
    { title: 'Web & mobile app development', body: 'Fast, modern Next.js / React web apps and responsive PWAs, engineered to convert and built to scale.' },
    { title: 'E-commerce & checkout', body: 'Storefronts, funnels, and checkout with live payment integrations (Cashfree, Razorpay) and post-purchase upsells.' },
    { title: 'AI automation & agents', body: 'GPT-4 / Claude features, workflow automation, and AI agents embedded in your product where they add real value.' },
    { title: 'Internal tools & dashboards', body: 'Admin panels, data-heavy dashboards, and internal tools that make your operations effortless.' },
    { title: 'Integrations & India compliance', body: 'WhatsApp, Meta, SMS, email, Shopify, GST / TDS / RERA — reuse from our library instead of months of R&D.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Real products we’ve shipped to production',
    subhead: 'These are our own live builds — the same engineering we’d put behind your product.',
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
    { step: '03', title: 'Build & ship', body: 'Production-grade code with live previews you can click through. Transparent weekly progress — no black box.' },
    { step: '04', title: 'Launch & scale', body: 'We hand off clean, documented code and repositories — or stay on as your dedicated team and scale with our in-house dev + staffing bench.' },
  ],

  whyUsTag: 'WHY JAIPUR BUSINESSES BUILD WITH US',
  whyUsHeadline: 'A software partner that actually ships',
  whyUs: [
    { title: 'Products in production, not slideware', body: 'We run our own multi-tenant CRM, a live real-estate SaaS, and a clinic platform serving real traffic. You can click the proof, not just read a pitch deck.' },
    { title: 'India-ready by default', body: 'GST (CGST/SGST/IGST), TDS thresholds, RERA documents, and UPI / Cashfree / Razorpay are already shipped in our products — compliance depth that’s hard to fake.' },
    { title: 'One partner: software + AI + growth', body: 'Design, build, integrations, AI, and even performance marketing under one roof — one accountable vendor instead of stitching freelancers together.' },
    { title: 'Reusable library = faster, cheaper', body: 'Payments, WhatsApp, Meta, Shopify, auth — our component + integration library turns months of R&D into reuse, so you get a shorter timeline and a tighter quote.' },
    { title: 'You own the code', body: 'Clean, documented handover of the full codebase and repositories. No lock-in, no hostage situations.' },
    { title: 'Local and accountable', body: 'Based in Sanganer, Jaipur — meet us in person, and talk to the people actually building your product.' },
  ],

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Software development in Jaipur, answered',
  faqs: [
    { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. We’re based in Sanganer, Jaipur, and build for clients across India and abroad (UK, US, Australia, Canada). Local clients can meet us in person; remote clients get the same process over calls.' },
    { q: 'Who owns the code and IP?', a: 'You do. On handover you receive the full, documented codebase and repositories. We can also stay on as your ongoing dedicated team if you prefer.' },
    { q: 'What do you build with?', a: 'Modern, production-proven stacks: Next.js / React, Node / Express, TypeScript, PostgreSQL (Drizzle / Supabase), plus real integrations — payments (Cashfree, Razorpay), WhatsApp, Meta, SMS, email — and AI (GPT-4, Claude).' },
    { q: 'How do engagements work?', a: 'Three models: fixed-scope projects, a dedicated team (monthly), or staff augmentation where our engineers slot into your team. We’ll recommend the right fit on the scoping call.' },
    { q: 'How fast can you ship?', a: 'We reuse proven components and an AI-assisted delivery system, so a well-scoped MVP typically moves in weeks, not quarters. You’ll get a realistic timeline in the written scope up front.' },
    { q: 'Can you build for the India market specifically?', a: 'Yes — GST (CGST/SGST/IGST), TDS thresholds, RERA-compliant documents, and India payment rails are already shipped in our products. That compliance depth is hard to fake and easy for us to reuse.' },
  ],

  finalCta: {
    title: 'Have a product to build? Let’s scope it.',
    subhead: 'Tell us what you need — a SaaS, an app, an internal tool, or an AI feature — and we’ll come back with a scope, a timeline, and a fixed way to work together.',
    ctaLabel: 'Get a Free Scoping Call',
  },

  videoTestimonialsTag: 'CLIENT VOICES',
  videoTestimonialsHeadline: 'Hear from the people we build for',
  videoTestimonials: [
    // Add approved YouTube Shorts URLs here when available.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Software Dev Lead — Jaipur',
    headline: 'Tell us what you need built',
    subhead: 'Share the project and we’ll get back within 24 hours with next steps.',
    tag: 'LET’S BUILD',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Explore more',
    subhead: 'See the work, and the other things we build and grow.',
    links: [
      { label: 'Website Development in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast, SEO-ready websites engineered to convert.' },
      { label: 'White-Label Software (for agencies)', href: '/white-label-software-development', blurb: 'The same engineering, shipped under your agency’s brand.' },
      { label: 'Our Portfolio', href: '/portfolio', blurb: 'Products, platforms, and brands we’ve built and scaled.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real projects with real outcomes across software and growth.' },
    ],
  },
}
