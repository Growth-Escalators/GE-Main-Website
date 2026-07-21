/**
 * All copy and data for the /performance-marketing-agency-jaipur landing page.
 *
 * BOFU local money page targeting the exact queries GSC shows we already rank
 * pos 9–16 for (e.g. "performance marketing agency in jaipur", "best ppc agency
 * in jaipur"). EDIT this file to change anything visible on the page.
 *
 * PROOF RULE: every number below is a real, already-published GE claim (see
 * lib/constants.ts CASE_STUDIES/STATS and app/contact — 4.9★/187 reviews,
 * ₹10Cr+ ad spend, 10,000+ campaigns, Exzept 1.8x→5.2x). Do NOT invent metrics.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur',

  hero: {
    badge: 'BASED IN JAIPUR · RATED 4.9★ BY 187+ CLIENTS',
    headlineLines: ['Performance Marketing', 'Agency in Jaipur'],
    cyclingWords: ['Meta Ads that scale.', 'Google Ads that convert.', 'Funnels that compound.', 'ROAS you can bank.'],
    subhead:
      "Growth Escalators is a Jaipur-based, AI-first performance marketing agency. We've managed ₹10Cr+ in ad spend across 10,000+ campaigns for 100+ brands — turning wasted budget into predictable, profitable growth on Meta and Google.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '💰', value: '₹10Cr+',  label: 'Ad Spend Managed' },
      { emoji: '🚀', value: '10,000+', label: 'Campaigns Run'    },
      { emoji: '⭐', value: '4.9★',    label: '187+ Reviews'     },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Marketing analytics dashboard showing performance metrics',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What profitable ad spend actually looks like',
    subhead:
      'Every rupee tracked from click to conversion — the dashboards, the data, and the team behind the numbers.',
    images: [
      { src: '/industries/mkt/1.jpg', alt: 'Performance marketing charts and graphs showing campaign results', caption: 'ROAS and CAC tracked in real time' },
      { src: '/industries/mkt/2.jpg', alt: 'Analytics dashboard displayed on a computer screen', caption: 'Every channel accountable to one number' },
      { src: '/industries/mkt/3.jpg', alt: 'Marketing team collaborating around a laptop', caption: 'Senior operators, not interns, on your account' },
    ],
  },

  painPointsHeadline: "Why your ad budget isn't turning into profit",
  painPoints: [
    { emoji: '📉', title: "ROAS looks fine, profit doesn't", body: "Your dashboard shows a healthy ROAS, but the bank account disagrees. Most agencies optimise the vanity number, not your actual margin." },
    { emoji: '🎓', title: 'Juniors running your account',    body: "You signed with the founder and got handed a fresh intern. Your spend becomes their training budget. We staff senior operators only." },
    { emoji: '🧊', title: 'Clicks that never convert',       body: "Traffic is easy; qualified leads and sales are the job. Without a funnel and CRO, paid clicks just leak out the other end." },
    { emoji: '🌀', title: 'No clear reporting',              body: "You have no idea what's actually working — no weekly numbers, no clarity on CAC, no plan for next month. Just invoices." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'AI-first, not AI-curious',
    subhead:
      "While most Jaipur agencies are still testing ChatGPT, we've built AI into every campaign — faster creative testing, sharper targeting, and lower cost per acquisition.",
    cards: [
      { emoji: '🎯', title: 'AI creative testing at scale', body: 'We test 30+ ad angles in parallel and let the system concentrate spend on the winners within hours, not weeks.' },
      { emoji: '🧠', title: 'AI lead scoring',              body: 'Every enquiry is scored by intent and fit before it reaches your sales team, so they only chase buyers who are ready.' },
      { emoji: '✍️',  title: 'AI-assisted SEO & content',   body: 'We rank you for hundreds of buyer-intent searches — drafted by AI, edited by humans, built to convert.' },
      { emoji: '💬', title: 'WhatsApp automation',          body: 'New leads get an instant, AI-driven qualifying conversation on WhatsApp before a human ever picks up.' },
    ],
  },

  servicesTag: 'WHAT WE RUN',
  servicesHeadline: 'Full-funnel performance marketing, under one roof',
  servicesSubhead: 'Every rupee tracked, every channel accountable to the same number: profitable growth.',
  services: [
    { title: 'Meta Ads (Facebook & Instagram)', body: 'The core growth engine. Account structure, creative testing, and pacing built to scale ROAS — not just spend it. Average 30% CPL reduction in 60 days.' },
    { title: 'Google Ads & PPC',                body: 'Search, Performance Max, and YouTube. We capture high-intent demand in Jaipur and across India and turn it into qualified leads and sales.' },
    { title: 'Funnels & Landing Pages',         body: 'Cold click to loyal buyer, fully mapped. Conversion-optimised landing pages and nurture flows so paid traffic actually converts.' },
    { title: 'Creative & UGC',                  body: 'In-house scripting, shooting, and editing. Scroll-stopping creative built for the drop, the season, and the algorithm.' },
    { title: 'Retention — Email & WhatsApp',    body: 'The profit is in the second purchase. Automated email and WhatsApp flows that lift repeat rate and lifetime value.' },
    { title: 'Tracking & Reporting',            body: "Clean GA4 + server-side tracking and a live dashboard. You always know your CAC, ROAS, and what we're doing next." },
  ],

  resultsHeadline: 'Budgets we turned into profit',
  resultHighlight: {
    label: 'FEATURED RESULT',
    name: 'Exzept — Fashion eCommerce',
    detail: 'Meta + Google Ads · full-funnel rebuild',
    quote:
      'High CPMs and a leaking account structure were draining spend with no path to profit. We rebuilt the funnel around UGC creative, tightened targeting, and fixed the landing page — then scaled it profitably.',
    metrics: [
      { value: '1.8× → 5.2×', label: 'ROAS'               },
      { value: '−44%',        label: 'Cost per lead'       },
      { value: '+₹8L',        label: 'Revenue in 90 days'  },
    ],
  },

  process: [
    { step: '01', title: 'Free Diagnostic Call', body: "A 30-minute call. We audit your current ads and funnel, find the biggest leaks, and tell you what we'd fix first — no obligation." },
    { step: '02', title: 'Growth Blueprint',     body: "Within 7 days you get a written plan: channels, budget split, targets, and the KPIs we'll be accountable for." },
    { step: '03', title: 'Launch & Optimise',    body: 'Campaigns go live within 2 weeks. We test relentlessly and report transparently every week.' },
    { step: '04', title: 'Scale What Works',     body: 'Once CAC is stable and predictable, we double down on the winners — month over month.' },
  ],

  whyUsHeadline: 'The Jaipur agency that reports profit, not vanity',
  whyUs: [
    { title: 'Right here in Jaipur',            body: 'Based in Pratap Nagar, Jaipur — same time zone, real meetings, a local team that answers. Plus clients served across India.' },
    { title: '4.9★ from 187+ reviews',          body: 'A 97% client-retention rate and 187+ Google reviews at 4.9 stars. We keep clients because we keep delivering.' },
    { title: '₹10Cr+ managed, 10,000+ campaigns', body: 'Senior operators who have spent real money at scale — not interns learning on your budget.' },
    { title: 'Profit-first, skin in the game',  body: 'We optimise return-adjusted ROAS and will structure performance-based deals around your CAC targets, not just a retainer.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many leads can your ad budget bring in?',
    subhead: 'Move the sliders to your numbers and see the leads and revenue your budget can realistically drive.',
    source: 'Calculator — Performance Marketing Jaipur',
    unitPlural: 'leads',
    budget: { label: 'Your monthly ad budget', default: 60000 },
    value: { label: 'Average value of one customer (₹)', default: 5000 },
    cplLow: 100,
    cplHigh: 500,
    closeRate: 0.25,
    benchmark: 'Benchmark: well-run Meta and Google campaigns in Jaipur bring qualified leads at roughly ₹100–₹500 each, with about a quarter converting to a paying customer.',
    formHeadline: 'See your full lead & ROAS breakdown',
    formSubhead: 'Get your numbers, the Jaipur benchmark, and the Exzept case study — free, straight to your inbox.',
  },

  faqsHeadline: 'Hiring a performance marketing agency in Jaipur',
  faqs: [
    { q: 'How much does a performance marketing agency in Jaipur cost?', a: "It depends on scope and ad budget. Most Jaipur brands start around ₹40k–₹1L/month for management, on top of ad spend. We'll quote you exactly after the free diagnostic call — no long lock-ins, and performance-based structures are available." },
    { q: 'Do you only work with businesses in Jaipur?', a: "No. We're based in Jaipur and love working with local brands, but we run campaigns for 100+ clients across India and abroad. Everything can be done remotely with weekly calls and live reporting." },
    { q: 'Meta Ads or Google Ads — which is right for my business?', a: "Meta (Facebook/Instagram) is best for creating demand and for D2C/eCommerce; Google Ads captures people already searching. Most brands need both. On the diagnostic call we'll tell you where your first rupee should go." },
    { q: 'How soon will I see results?', a: 'Most clients see qualified leads or sales within the first 2–3 weeks. Meaningful, stable ROAS usually lands by month 2–3, once we have enough data to optimise.' },
    { q: 'Do you offer performance-based (PPC) contracts?', a: "Yes. Alongside standard retainers, we can structure deals around cost-per-lead or CAC targets so our incentives match yours. We only do this when the unit economics support it." },
    { q: 'What makes you different from other agencies in Jaipur?', a: 'Senior operators (no juniors on your account), an AI-first workflow that lowers your CAC, transparent weekly reporting, and a 4.9★ rating from 187+ clients. We report profit, not vanity metrics.' },
  ],

  finalCta: {
    title: 'Ready to make your ad spend profitable?',
    subhead: "Book a free 30-minute strategy call. We'll review your ads and funnel and tell you the three things we'd change first — no pressure, no obligation.",
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM OUR CLIENTS',
  videoTestimonialsHeadline: 'Real brands, real outcomes',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. Until populated, the section renders a friendly empty-state.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More on growth in Jaipur',
    links: [
      { label: 'Real Estate Marketing Agency in Jaipur', href: '/real-estate-marketing-agency-jaipur', blurb: 'Our Jaipur real-estate spoke — for builders & developers.' },
      { label: 'Marketing Agency for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Our Jaipur healthcare spoke — for clinics & practices.' },
      { label: 'Top 5 Performance Marketing Agencies in Jaipur (2026)', href: '/blog/top-5-performance-marketing-agencies-jaipur', blurb: 'How to choose the right agency — and how we stack up.' },
      { label: 'Our Services', href: '/services', blurb: 'The full stack: ads, funnels, web, SEO, and branding.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Jaipur Performance Marketing Lead',
    headline: 'Tell us about your business',
    subhead: 'Fill this in and a real strategist replies within 24 hours with a no-obligation plan.',
    tag: "LET'S TALK",
  },
}
