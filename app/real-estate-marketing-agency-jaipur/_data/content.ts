/**
 * All copy and data for the /real-estate-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — the #1 cluster target after the performance-marketing
 * pillar. Deliberately DISTINCT from the national /real-estate page: Jaipur
 * micromarkets, RERA Rajasthan, NRI-Rajasthani buyers, local HQ, and a real
 * Jaipur featured client (Aspire Developers).
 *
 * PROOF RULE: every number is a real, already-published GE claim (Aspire
 * Developers is a real Jaipur client — see lib/constants.ts / the national
 * /real-estate page; ₹500Cr+ inventory, 4.9★/187 reviews from app/contact).
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const JAIPUR_REAL_ESTATE_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Real Estate',

  hero: {
    badge: 'BASED IN JAIPUR · ₹500CR+ INVENTORY MARKETED',
    headlineLines: ['Real Estate Marketing', 'Agency in Jaipur'],
    cyclingWords: [
      'Built for Jaipur builders.',
      'Built for premium projects.',
      'Built for JDA townships.',
      'Built for luxury villas.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based real estate marketing agency for builders and developers. We fill your sales gallery with serious, capable buyers — not tire-kickers — using AI targeting matched to your project's price tier. We've marketed ₹500Cr+ of premium inventory, including projects here in Jaipur.",
    primaryCta: { label: 'Book a Free Project Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🏗️', value: '₹500Cr+', label: 'Inventory Marketed'          },
      { emoji: '📈', value: '+340%',   label: 'Bookings (Jaipur project)'    },
      { emoji: '🎯', value: '4.7×',    label: 'Buyer-Quality Score'          },
    ],
    image: {
      src: '/industries/realestate/4.jpg',
      alt: 'Modern apartment building in Jaipur against a clear sky',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a sold-out Jaipur project actually looks like',
    subhead:
      'Jaipur buyers compare dozens of projects online before ever booking a site visit — the ones that win look sold-out before they are.',
    images: [
      { src: '/industries/realestate/2.jpg', alt: 'Bright, styled home interior', caption: 'Interiors buyers can picture themselves living in' },
      { src: '/industries/realestate/3.jpg', alt: 'Property exterior with landscaped grounds', caption: 'Exteriors that signal a premium build' },
      { src: '/industries/realestate/1.jpg', alt: 'Modern home exterior with clean architectural lines', caption: 'Listing photography that stops the scroll' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most real estate marketing in Jaipur burns budget without filling site visits',
  painPoints: [
    { emoji: '🥱', title: 'Tire-kickers eating your sales team', body: "Most agencies optimise for cheap leads, not good ones. Your reps at the sales gallery spend 80% of their time qualifying out window-shoppers and rival brokers — and miss the real buyers in the noise." },
    { emoji: '⏳', title: 'A 6-month decision cycle nobody nurtures', body: 'Real estate isn’t e-com. Jaipur buyers research for 3–9 months before they sign. Most agencies run one Meta campaign, hand you the leads, and walk away — leaving your follow-up to chance and your CRM rotting.' },
    { emoji: '💎', title: 'Premium projects, generic audiences', body: 'Your ₹3 crore villa in Jagatpura is being shown to people earning ₹15 lakh a year. Interest-based targeting can’t tell an aspirational scroller from an actual UHNW buyer — and you pay for every wasted impression.' },
    { emoji: '🤝', title: 'Brokers eating your margin', body: 'When direct lead-gen fails, you fall back on brokers — paying 1.5–3% per booking and losing pricing control as they play projects against each other. Your direct funnel should be the cheaper one.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Premium projects need premium intelligence',
    subhead:
      "Generic targeting can’t separate a ₹2 crore-budget buyer from a window-shopping student. Our AI is trained on premium-property buyer behaviour — and it shows up in every part of the Jaipur funnel.",
    cards: [
      { emoji: '🧠', title: 'AI buyer-quality scoring', body: 'Every lead is scored on 30+ signals (income proxies, profession, search history, time-on-page, response speed) before it reaches your sales team. Reps only call leads scoring 70+. Useless leads are silently filtered.' },
      { emoji: '🎯', title: 'Look-alikes from real signed deals', body: 'Most agencies build look-alikes from "leads". We build them from your actual signed bookings (with consent) — so the audience matches people who wrote cheques, not people who clicked your ad.' },
      { emoji: '💬', title: 'AI-driven 6-month nurture', body: 'Personalised WhatsApp + email + retargeting that adapts to where each buyer is in their decision cycle. AI watches engagement and re-engages cold leads with the right message at the right week.' },
      { emoji: '📊', title: 'Demand-forecasting for pre-launches', body: 'Predict exactly when your campaign should peak — 6 weeks before launch, 2 weeks, launch week — using search volume, competitor absorption, and Jaipur seasonal patterns, so your launch budget hits when it matters.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete sales-gallery-filling engine for Jaipur developers',
  servicesSubhead: 'Six services, one promise: a calendar of qualified site visits with buyers who can actually afford your project.',
  services: [
    { title: 'Premium-Project Performance Marketing', body: 'Meta + Google + LinkedIn campaigns calibrated to your price tier, geo-fenced to Jaipur’s high-affluence pockets (Civil Lines, C-Scheme, Jagatpura, Mansarovar, Vaishali Nagar) with budget engineered around your absorption goals.' },
    { title: 'NRI & Rajasthani-Diaspora Targeting', body: 'Layered targeting for NRI and HNI audiences genuinely capable of premium purchases — including the large Marwari/Rajasthani diaspora in the UAE, US, UK, and Singapore, with currency- and tax-aware creative.' },
    { title: 'Virtual Tour & 3D Walk-Through Funnels', body: 'Drone footage, 360° tours, and 3D model integrations paired with conversion-optimised landing pages — turning the buyer who couldn’t visit in person into a booked site visit.' },
    { title: 'Builder & Developer Local SEO', body: 'Rank for "luxury apartments in Jaipur", "villas in Jagatpura", "flats on Ajmer Road", "commercial property Tonk Road". Compounding local traffic that’s 5–10× cheaper than Meta ads month over month.' },
    { title: 'WhatsApp + CRM Nurture for Long Cycles', body: 'Multi-month automated sequences keyed to each buyer’s stage — pricing-curiosity, configuration-comparison, financing-question, ready-to-book — built for the 6-month decision cycle real estate actually has.' },
    { title: 'Pre-Launch Hype + EOI Campaigns', body: 'Engineered campaigns for the 6–8 weeks before launch — expression-of-interest forms, exclusive pre-launch pricing, broker-bypass referral programs. Done right, projects sell 30–40% of inventory in pre-launch.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Jaipur developer we helped sell faster',
  resultHighlight: {
    label: 'FEATURED CLIENT · JAIPUR',
    name: 'Aspire Developers',
    detail: 'Premium Residential Highrise · 2 Towers · Jaipur',
    quote:
      "Our previous agency was getting us 400 leads a month at ₹350 per lead — our sales team was drowning in tire-kickers and we were closing 6 bookings. Growth Escalators got us 220 leads at ₹780, but 27 became signed bookings in the same period. Their AI scoring is the real difference.",
    metrics: [
      { value: '+340%', label: 'Booking conversion (90 days)' },
      { value: '₹780',  label: 'Cost per qualified lead'       },
      { value: '12.4×', label: 'Return on ad spend (project)'  },
    ],
  },

  process: [
    { step: '01', title: 'Project & Audience Audit', body: 'A 45-minute call (we can visit your Jaipur sales gallery in person). We review your project tier, target buyer, current spend, and lead-quality data — and tell you exactly which audiences your campaigns are missing.' },
    { step: '02', title: 'Custom Launch Plan', body: 'Within 7 days you get a written plan: campaign architecture, budget split by pre-launch / launch / sustain, expected absorption timeline, and the unit economics we’ll be accountable to.' },
    { step: '03', title: 'Build & Launch', body: 'Tracking, AI scoring, landing pages, CRM integrations, and the first campaigns go live within 14 days. Most projects see their first qualified site visit in week 1.' },
    { step: '04', title: 'Optimise Toward Bookings', body: 'We optimise for cost-per-booking, not cost-per-lead. Weekly creative refresh, audience expansion as inventory shifts, and broker-bypass programs to protect your margin as the project scales.' },
  ],

  whyUsHeadline: 'The Jaipur real estate agency that reports bookings, not leads',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we know the micromarkets (Jagatpura, Mansarovar, Ajmer Road, Tonk Road, JDA schemes), and we can sit in your sales gallery, not just send a report.' },
    { title: 'Real estate-only pod, ₹500Cr+ marketed', body: 'Our real estate team has marketed over ₹500 crore of premium inventory. Builders, developers, and project marketing teams only — no diluted attention.' },
    { title: 'Cost-per-booking accountable', body: 'We don’t optimise for cheap leads; we optimise for signed bookings. For qualified projects we can structure performance deals around CPL, cost-per-site-visit, or cost-per-booking.' },
    { title: 'You own everything', body: 'CRM data, ad accounts, landing pages, creative, audience seeds — all created in your name. Leave any time and you keep the entire infrastructure.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many site visits can your Jaipur ad budget bring in?',
    subhead: 'Move the sliders to your numbers and see the qualified site visits your ad spend can realistically drive.',
    source: 'Calculator — Real Estate Jaipur',
    unitPlural: 'site visits',
    budget: { label: 'Your monthly ad budget', default: 80000 },
    value: { label: 'Average commission per sale (₹)', default: 200000 },
    cplLow: 300,
    cplHigh: 1200,
    closeRate: 0.08,
    benchmark: 'Benchmark: well-targeted real estate campaigns in Jaipur bring qualified leads at roughly ₹300–₹1,200 each, with around 8% converting to a booked site visit for premium inventory.',
    formHeadline: 'See your full site-visit breakdown',
    formSubhead: 'Get your numbers, the Jaipur real estate benchmark, and the Aspire Developers playbook — free, straight to your inbox.',
  },

  faqsHeadline: 'Hiring a real estate marketing agency in Jaipur',
  faqs: [
    { q: 'How much does real estate marketing cost in Jaipur?', a: 'It depends on project tier and inventory. Most Jaipur developers run ₹1.5–5L/month in ad spend during launch, plus management. We quote exactly after the free project audit — and for qualified projects we can structure cost-per-booking deals, not just retainers.' },
    { q: 'Do you actually know Jaipur’s micromarkets?', a: 'Yes — we geo-target and price-tier campaigns by locality (Jagatpura, Mansarovar, Vaishali Nagar, Civil Lines/C-Scheme, Ajmer Road, Tonk Road, JDA townships). Buyer intent and ticket size differ sharply across these, and the targeting has to reflect that.' },
    { q: 'Do you handle RERA Rajasthan-compliant advertising?', a: 'Always. Every ad and landing page carries the RERA registration and follows Rajasthan RERA advertising rules — no misleading claims, correct disclosures, compliant creative.' },
    { q: 'Do you market to NRI and Rajasthani-diaspora buyers?', a: 'Yes — for premium Jaipur projects, NRI and Marwari-diaspora audiences are often 30–50% of bookings. We run established geo + behavioural playbooks for the UAE, Singapore, US, UK, and Australia, with currency- and tax-aware creative.' },
    { q: 'How long before we see real bookings?', a: 'Qualified site visits start in week 1–2. First bookings typically land in week 6–10, given real estate’s 30–60 day decision lag. Pre-launch projects often book faster because demand is concentrated.' },
    { q: 'What if we’re launching multiple projects?', a: 'For developer groups with several active or upcoming projects, we structure campaigns around shared audience pools and project-level budgets — far more efficient than a separate agency per project. Multi-project pricing on request.' },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur sales gallery with real buyers?',
    subhead: "Book a free, no-obligation project audit. We'll review your campaigns, your buyer-quality data, and your launch timeline — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Project Audit',
  },

  videoTestimonialsTag: 'HEAR FROM DEVELOPERS',
  videoTestimonialsHeadline: 'Real builders, real bookings',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur real estate clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for Jaipur developers',
    links: [
      { label: 'Why Real Estate Builders Waste Their Digital Marketing Budget', href: '/blog/why-real-estate-builders-waste-digital-marketing-budget', blurb: 'The four leaks that drain most builder ad budgets — and the fixes.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our Jaipur pillar — how we run paid acquisition across verticals.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Jaipur Real Estate Lead',
    headline: 'Tell us about your project',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
