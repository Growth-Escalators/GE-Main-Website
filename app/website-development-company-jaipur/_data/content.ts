/**
 * All copy and data for the /website-development-company-jaipur landing page.
 *
 * BOFU local money page for direct clients (Jaipur businesses that want a website
 * built). EDIT this file to change anything visible.
 *
 * PROOF DISCIPLINE: claims are grounded in real, already-published GE work — the
 * 67% page-speed / 40% time-on-site figures (see lib/constants.ts SERVICES_FULL
 * and app/services), the Kabir Malhotra testimonial, and real live builds
 * (drdubay.in, this site). No invented client names or metrics. Uses the in-page
 * LeadForm (leads → /api/lead → CRM), not a Cal.com link.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const WEBSITE_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Website Development',

  hero: {
    variant: 'bold',
    badge: 'WEBSITE DEVELOPMENT COMPANY IN JAIPUR · FAST · SEO-READY · BUILT TO CONVERT',
    headlineLines: ['Website Development', 'Company in Jaipur'],
    cyclingWords: ['Loads in under 2 seconds.', 'Built to rank on Google.', 'Designed to convert.', 'No templates.'],
    subhead:
      'Growth Escalators builds fast, conversion-optimised websites for Jaipur businesses — coded from scratch, SEO-ready from day one, and engineered to turn visitors into leads. Our clients see an average 67% faster load and 40% more time on site.',
    primaryCta: { label: 'Get a Free Website Audit', href: '#lead-form' },
    secondaryCta: { label: 'See our work ↓', href: '#builds' },
    statPills: [
      { emoji: '⚡', value: '<2s', label: 'Page load time' },
      { emoji: '📈', value: '67%', label: 'Faster load speed' },
      { emoji: '📍', value: 'Jaipur', label: 'Based in Sanganer' },
    ],
    image: {
      src: '/industries/webdev/hero.jpg',
      alt: 'Laptop screen showing a website design layout',
    },
  },

  showcase: {
    tag: 'THE CRAFT',
    headline: 'What a website built to convert looks like',
    subhead:
      'Fast, clean, and coded from scratch — the design and engineering that goes into every site we ship.',
    images: [
      { src: '/industries/webdev/1.jpg', alt: 'Website design layout on a screen', caption: 'Custom layouts, not recycled templates' },
      { src: '/industries/webdev/2.jpg', alt: 'UI design elements displayed on a monitor', caption: 'Every screen designed before a line is coded' },
      { src: '/industries/webdev/3.jpg', alt: 'A designer’s workspace with design tools and a laptop', caption: 'Built by a team that thinks like a marketer' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'Why most business websites quietly lose you money',
  painPoints: [
    { emoji: '🐌', title: 'Slow and clunky', body: 'A site that takes 5+ seconds to load bleeds visitors — and Google buries slow sites. Every extra second cuts conversions.' },
    { emoji: '📱', title: 'Broken on mobile', body: 'Most of your traffic is on a phone. A site that only looks right on desktop quietly loses the majority of your buyers.' },
    { emoji: '🔍', title: 'Invisible on Google', body: 'Pretty template sites with no technical SEO structure never rank — so nobody actually finds them.' },
    { emoji: '🧊', title: 'Looks nice, sells nothing', body: 'A brochure site with no clear offer, no funnel, and no lead capture is a business card — not a salesperson.' },
  ],

  aiAdvantage: {
    tag: 'BUILT TO BE FOUND',
    headline: 'Engineered for Google — and AI answer engines',
    subhead:
      'A site that doesn’t just look good, but gets discovered — by search engines and by ChatGPT / Perplexity.',
    cards: [
      { emoji: '⚡', title: 'Core Web Vitals', body: 'Sub-2s loads, optimised images, and clean code so Google rewards the site instead of burying it.' },
      { emoji: '🔍', title: 'Technical SEO from day one', body: 'Semantic HTML, schema markup, sitemaps, and metadata baked in — not bolted on months later.' },
      { emoji: '🤖', title: 'AI-crawler ready', body: 'Server-rendered content and JSON-LD so AI answer engines can actually read and cite your site.' },
      { emoji: '📊', title: 'Analytics wired in', body: 'GA4, conversion events, and Search Console set up from launch so you can see what’s working.' },
    ],
  },

  servicesTag: 'WHAT WE BUILD',
  servicesHeadline: 'Websites that work as hard as you do',
  servicesSubhead: 'From a fast business site to a full custom web app — coded for speed, search, and sales.',
  services: [
    { title: 'Business & corporate websites', body: 'Fast, credible, mobile-first sites that make the right first impression and capture leads.' },
    { title: 'Landing pages & funnels', body: 'Conversion-optimised BOFU pages built to turn ad and search traffic into enquiries — the same engine behind our own money pages.' },
    { title: 'E-commerce stores', body: 'Shopify or custom storefronts with live payment integrations (Cashfree, Razorpay) and post-purchase upsells.' },
    { title: 'Web apps & portals', body: 'Next.js / React web apps, dashboards, and customer portals — engineered to scale.' },
    { title: 'Redesigns & speed / CRO overhauls', body: 'Rebuild a slow, dated, or non-converting site into a fast, modern, lead-generating one.' },
    { title: 'Hosting, maintenance & support', body: 'Deployment, uptime, updates, and ongoing support so the site keeps performing after launch.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Real sites and products we’ve shipped',
    subhead: 'Live builds you can click through — the same engineering we’d put behind your website.',
    items: [
      {
        name: 'Dr Dubay — clinic website',
        what: 'A fast, SEO-first public website for a Jaipur surgeon — city + procedure pages, WhatsApp booking, and schema markup. Live and serving real search traffic today.',
        stack: 'Next.js · React · Prisma · MUI',
        href: 'https://drdubay.in',
      },
      {
        name: 'Growth Escalators — this site',
        what: 'Our own Next.js marketing site — statically rendered, sub-2s loads, a full JSON-LD entity graph, and BOFU landing pages engineered to rank and convert.',
        stack: 'Next.js 14 · React · TypeScript · Vercel',
        href: 'https://www.growthescalators.com',
      },
      {
        name: 'Dealos — real-estate SaaS UI',
        what: 'A production web-app front-end — lead kanban, dashboards, and document tooling — built for speed and clarity.',
        stack: 'Next.js · Supabase · shadcn/ui',
      },
      {
        name: 'E-commerce & checkout builds',
        what: 'Storefronts and checkout flows with live payment integrations and post-purchase upsells that lift average order value.',
        stack: 'Shopify · Custom · Cashfree · Razorpay',
      },
    ],
  },

  resultsTag: 'CLIENT RESULT',
  resultsHeadline: 'Faster site, better numbers',
  resultHighlight: {
    label: 'WEBSITE REBUILD',
    name: 'Kabir Malhotra',
    detail: 'EdTech Founder',
    quote:
      'Page speed improved 67%. Our bounce rate dropped in half overnight. The new site finally works as hard as the rest of our marketing.',
    metrics: [
      { value: '<2s', label: 'Page load time' },
      { value: '67%', label: 'Faster load speed' },
      { value: '40%', label: 'More time on site' },
    ],
  },

  processTag: 'HOW WE WORK',
  processHeadline: 'From brief to launched — no black box',
  process: [
    { step: '01', title: 'Discovery & wireframe', body: 'Goals, sitemap, user flows, and lo-fi wireframes locked in together — so we build the right thing.' },
    { step: '02', title: 'Design', body: 'A high-fidelity UI design system — desktop, tablet, and mobile — approved before a line of code is written.' },
    { step: '03', title: 'Build & test', body: 'Coded from scratch, performance-tested, and verified across browsers and devices. No templates, no shortcuts.' },
    { step: '04', title: 'Launch & support', body: 'Deployment, Google Search Console setup, analytics, and 30-day post-launch support.' },
  ],

  whyUsTag: 'WHY JAIPUR BUSINESSES CHOOSE US',
  whyUsHeadline: 'A website partner that thinks like a marketer',
  whyUs: [
    { title: 'Built by a performance-marketing team', body: 'We design for conversions and leads, not just looks — because we run the ads and funnels that send traffic to the sites we build.' },
    { title: 'Speed + SEO as standard', body: 'Sub-2s loads and technical SEO from day one — the foundation your site needs to actually get found and rank.' },
    { title: 'No templates, no lock-in', body: 'Custom code you fully own — the codebase, the repo, and the hosting access. No hostage situations.' },
    { title: 'Real integrations', body: 'WhatsApp, payments, CRM, and analytics wired in — so the site plugs straight into how you actually run the business.' },
    { title: 'One partner: site + ads + SEO', body: 'Your website plugs into your whole growth engine — one accountable team for the build and the traffic that fills it.' },
    { title: 'Local and accountable', body: 'Based in Sanganer, Jaipur — meet us in person and talk to the people actually building your site.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many project enquiries can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the enquiries your marketing budget can realistically drive.',
    source: 'Calculator — Website Dev Jaipur',
    unitPlural: 'project enquiries',
    budget: { label: 'Your monthly marketing budget', default: 50000 },
    value: { label: 'Average project value (₹)', default: 60000 },
    cplLow: 300,
    cplHigh: 1200,
    closeRate: 0.15,
    benchmark: 'Benchmark: qualified website-project enquiries in Jaipur typically cost ₹300–₹1,200 each, with roughly 15% converting into a signed project.',
    formHeadline: 'See your full pipeline breakdown',
    formSubhead: 'Get your numbers, the Jaipur benchmark, and a look at our recent builds — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Website development in Jaipur, answered',
  faqs: [
    { q: 'How much does a website cost?', a: 'It depends on scope — a fast business site is very different from a full custom web app or store. We scope and quote up front in writing, so there are no surprises.' },
    { q: 'How long does it take?', a: 'A well-scoped business website typically ships in a few weeks. You’ll get a firm timeline in the written scope before we start.' },
    { q: 'Will it rank on Google?', a: 'We build the technical SEO foundation in from day one — speed, schema, semantic HTML, sitemaps, and metadata. That’s what ranking needs; ongoing content SEO is a separate service we also offer.' },
    { q: 'Do I own the site and the code?', a: 'Yes, fully. You get the code, the repository, and the hosting access on handover. No lock-in.' },
    { q: 'Do you work with businesses outside Jaipur?', a: 'Yes — we build for clients across India and abroad. Local Jaipur clients can meet us in person; remote clients get the same process over calls.' },
    { q: 'Can you redesign my existing website?', a: 'Absolutely — redesigns and speed / CRO overhauls are a core service. We rebuild slow, dated, or non-converting sites into fast, modern, lead-generating ones.' },
  ],

  finalCta: {
    title: 'Ready for a website that actually brings leads?',
    subhead: 'Send us your current site (or your idea) and we’ll come back with a free audit, a scope, and a timeline.',
    ctaLabel: 'Get a Free Website Audit',
  },

  videoTestimonialsTag: 'CLIENT VOICES',
  videoTestimonialsHeadline: 'Hear from the people we build for',
  videoTestimonials: [
    // Add approved YouTube Shorts URLs here when available.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Website Dev Lead — Jaipur',
    headline: 'Get your free website audit',
    subhead: 'Share your current site or your idea and we’ll get back within 24 hours.',
    tag: 'LET’S BUILD',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Explore more',
    subhead: 'See the work, and the other things we build and grow.',
    links: [
      { label: 'Software Development in Jaipur', href: '/software-development-company-jaipur', blurb: 'Production SaaS, web & mobile apps, and AI automation.' },
      { label: 'Performance Marketing in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'The ads and funnels that fill your new site with traffic.' },
      { label: 'Our Portfolio', href: '/portfolio', blurb: 'Products, platforms, and brands we’ve built and scaled.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real projects with real outcomes across web and growth.' },
    ],
  },
}
