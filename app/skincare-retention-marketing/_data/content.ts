/**
 * All copy and data for the /skincare-retention-marketing vertical money page.
 *
 * Companion to /d2c/beauty, but a genuinely DIFFERENT buyer decision: not
 * acquiring new beauty/skincare customers, but growing repeat purchase rate
 * and LTV from customers already acquired (subscription/replenishment,
 * lifecycle email + WhatsApp, cohort LTV, win-back). Same IndustryLandingPage
 * scaffold as every other industry page; unique painPoints/services/FAQs.
 *
 * BUYER INTENT: retention/outcome — "skincare subscription marketing",
 * "beauty brand retention", "increase repeat purchase skincare", "grow ltv d2c".
 *
 * PROOF RULE: the featured client is Elixzor (lib/constants.ts CASE_STUDIES
 * id 5 / WORK_ITEMS id 6) — real, published, labelled exactly as "Health &
 * Wellness D2C" (NOT relabelled as a skincare brand; the copy explains that
 * the replenishment/retention mechanics transfer directly to skincare &
 * beauty, without altering Elixzor's real industry or numbers). Elixzor has
 * no first-person testimonial quote in constants.ts (it's a case-study
 * record: challenge/solution/results) — resultHighlight.quote below is a
 * paraphrase of those exact real fields, the same treatment /d2c and
 * /d2c/fashion give Paraiso's case-study record. Reusable global stats
 * (₹10Cr+ ad spend, 10,000+ campaigns, 97% retention) are also from
 * lib/constants.ts. No fabricated clients, quotes, or metrics.
 *
 * EDIT this file to change anything visible on the page.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SKINCARE_RETENTION_CONTENT: LandingContent = {
  industryLabel: 'Skincare & Beauty Retention',

  hero: {
    badge: 'REAL RESULT: REPEAT RATE 18% → 54% · RETENTION MARKETING',
    headlineLines: ['Retention Marketing for', 'Skincare & Beauty Brands'],
    cyclingWords: [
      'Built for replenishment brands.',
      'Built for subscription skincare.',
      'Built for beauty & wellness D2C.',
      'Built for repeat-purchase growth.',
    ],
    subhead:
      'Growth Escalators grows repeat purchase rate and LTV for skincare, beauty, and wellness D2C brands — replenishment funnels, WhatsApp + email retention flows, and cohort LTV tracking. Real result: we took a D2C wellness brand’s repeat purchase rate from 18% to 54% and AOV up 130%.',
    primaryCta: { label: 'Book a Free Retention Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the Full Result ↓', href: '#results' },
    statPills: [
      { emoji: '🔁', value: '54%', label: 'Repeat Purchase Rate (from 18%)' },
      { emoji: '💰', value: '+130%', label: 'AOV Lift (Retention Client)' },
      { emoji: '📈', value: '6.8×', label: 'ROAS (from 2.1×)' },
    ],
    image: {
      src: '/industries/beauty/3.jpg',
      alt: 'Flat-lay of skincare products styled for social media',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a real replenishment engine looks like',
    subhead:
      'Skincare and beauty are consumable categories — the brands that win keep customers coming back long after the first order, not just the first sale.',
    images: [
      { src: '/industries/beauty/2.jpg', alt: 'Beauty products arranged on a vanity', caption: 'Products built for repeat, replenishment purchases' },
      { src: '/industries/beauty/1.jpg', alt: 'Cosmetics styled for a product shoot', caption: 'Catalog content that supports subscription upsells' },
      { src: '/industries/beauty/hero.jpg', alt: 'Skincare products displayed together', caption: 'A routine customers reorder, not a one-time purchase' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most D2C brands leak repeat customers',
  painPoints: [
    {
      emoji: '💸',
      title: 'All spend goes to acquisition, none to retention',
      body: 'Most agencies are paid to get you a first sale, so 100% of the budget and attention goes to cold traffic. Nobody owns what happens after checkout — so repeat purchase is left to chance, not built as a system.',
    },
    {
      emoji: '📭',
      title: 'One generic post-purchase email, then silence',
      body: 'A single "thanks for your order" email isn’t a retention system. Without a replenishment-timed sequence, customers forget to reorder right when their product runs out — and you lose them to whoever retargets them next.',
    },
    {
      emoji: '📉',
      title: 'You don’t actually know your repeat rate or LTV',
      body: 'Most dashboards show revenue, not cohort LTV or repeat-purchase rate by product. Without that number, you can’t tell if your retention spend is working — or justify spending on it at all.',
    },
    {
      emoji: '👋',
      title: 'Lapsed customers never get won back',
      body: 'Once a customer goes quiet, most brands do nothing. No win-back flow, no reason to return — a fully paid-for customer just evaporates instead of being reactivated at a fraction of new-customer CAC.',
    },
  ],

  aiAdvantage: {
    tag: 'WHY ACQUISITION-ONLY AGENCIES MISS THIS',
    headline: 'Getting the first sale and keeping the customer are different disciplines.',
    subhead:
      'Most performance marketing agencies stop at the first purchase — replenishment timing, lifecycle messaging, and cohort LTV are a different skill entirely. That’s the layer we own.',
    cards: [
      {
        emoji: '⏰',
        title: 'Replenishment-timed win-back flows',
        body: 'Sequences timed to when a customer’s product is actually about to run out — not a generic 30/60/90-day drip — so the reorder nudge lands exactly when it’s needed.',
      },
      {
        emoji: '💬',
        title: 'Email + WhatsApp retention, working together',
        body: 'Layered lifecycle messaging across email and WhatsApp, matched to purchase stage — first-reorder nudge, subscription upsell, lapsed win-back — instead of one channel doing all the work.',
      },
      {
        emoji: '📊',
        title: 'Cohort LTV tracking, not just revenue',
        body: 'We track repeat purchase rate and LTV by cohort and by product, so you can see exactly which acquisition channels and SKUs produce customers who come back — and double down there.',
      },
      {
        emoji: '🔄',
        title: 'Subscription & replenishment funnel design',
        body: 'Subscribe-and-save offers, reorder reminders, and bundle upsells engineered for consumables — the mechanics that turned Elixzor’s repeat rate from 18% to 54%.',
      },
    ],
  },

  servicesHeadline: 'What actually moves repeat purchase rate and LTV',
  servicesSubhead: 'Not generic email marketing — the specific retention systems that grow LTV for replenishment brands.',
  services: [
    {
      title: 'Replenishment & Subscription Funnels',
      body: 'Subscribe-and-save flows, reorder reminders timed to your product’s actual usage cycle, and bundle upsells built for consumables like skincare and wellness products.',
    },
    {
      title: 'Email + WhatsApp Retention Automation',
      body: 'Full lifecycle sequences — welcome, first-reorder nudge, subscription upsell, win-back — running across email and WhatsApp so no purchase stage is left to chance.',
    },
    {
      title: 'Cohort LTV & Repeat-Rate Analytics',
      body: 'Dashboards that show repeat purchase rate and LTV by cohort, channel, and SKU — so you know exactly where retention spend is working and where it isn’t.',
    },
    {
      title: 'Win-Back & Lapsed-Customer Campaigns',
      body: 'Targeted reactivation flows for customers who’ve gone quiet — recovering revenue at a fraction of new-customer acquisition cost.',
    },
    {
      title: 'Loyalty & Repeat-Purchase Incentives',
      body: 'Structured loyalty and referral mechanics that give customers a reason to reorder from you specifically, not just repurchase the category from whoever retargets them.',
    },
    {
      title: 'Retention-Ready Performance Marketing',
      body: 'Acquisition campaigns built to also feed retention — lookalikes sourced from actual repeat buyers, not just first-time purchasers, so the customers you acquire are more likely to stay.',
    },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'The retention system behind an 18% → 54% repeat-purchase jump',
  resultHighlight: {
    label: 'FEATURED CLIENT · HEALTH & WELLNESS D2C',
    name: 'Elixzor',
    detail: 'Health & Wellness D2C · Replenishment & Retention Overhaul',
    quote:
      'Poor ROAS on paid ads and no system to drive repeat purchases — revenue depended entirely on new customers, with nothing bringing anyone back. We ran a performance marketing overhaul alongside a full email and WhatsApp retention automation system: repeat purchase rate climbed from 18% to 54%, average order value was up 130%, and ROAS went from 2.1x to 6.8x.',
    metrics: [
      { value: '54%', label: 'Repeat Purchase Rate (from 18%)' },
      { value: '+130%', label: 'Average Order Value' },
      { value: '6.8×', label: 'ROAS (from 2.1×)' },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Retention & Cohort Audit',
      body: 'A free audit of your current repeat purchase rate, cohort LTV, and lifecycle flows (or lack of them) — where customers are leaking and what we’d fix first.',
    },
    {
      step: '02',
      title: 'Build the Replenishment Engine',
      body: 'Reorder-timed email + WhatsApp sequences, subscription/subscribe-and-save offers, and win-back flows get built around your product’s real usage cycle.',
    },
    {
      step: '03',
      title: 'Launch Lifecycle Campaigns',
      body: 'Welcome, first-reorder nudge, subscription upsell, and lapsed win-back flows go live — instrumented so every stage is measured, not assumed.',
    },
    {
      step: '04',
      title: 'Scale Repeat Rate & LTV',
      body: 'Weekly optimisation against repeat purchase rate and cohort LTV — not just revenue — compounding the way it did for Elixzor: 18% → 54%, AOV +130%.',
    },
  ],

  whyUsHeadline: 'The retention layer most D2C agencies never build',
  whyUs: [
    {
      title: 'We build retention as a system, not an afterthought',
      body: 'Most agencies stop at the first sale. We build the replenishment timing, lifecycle messaging, and win-back flows that turn one-time buyers into repeat customers.',
    },
    {
      title: 'Proven on a real replenishment business',
      body: 'Elixzor (Health & Wellness D2C): repeat purchase rate 18% → 54%, AOV +130%, ROAS 2.1× → 6.8×. The same reorder-cycle mechanics apply directly to skincare and beauty replenishment.',
    },
    {
      title: 'Email + WhatsApp, working as one system',
      body: 'Most brands run email and WhatsApp separately, if at all. We build them as one coordinated lifecycle system so no purchase stage — or customer — falls through the gap.',
    },
    {
      title: 'An AI-first performance marketing agency',
      body: '₹10Cr+ ad spend managed, 10,000+ campaigns run, and a 97% client retention rate — the same system, with retention as the compounding half of the equation.',
    },
  ],

  leadMagnet: {
    type: 'd2c-roas',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What ad budget do you need to hit your revenue goal?',
    subhead: 'Move the sliders to your numbers and see the monthly ad budget it takes to hit your skincare revenue goal.',
    source: 'Calculator — Skincare Retention',
    revenueGoal: { label: 'Monthly revenue goal', default: 1000000 },
    aov: { label: 'Average order value (₹)', default: 1500 },
    targetRoas: { label: 'Target ROAS', default: 4 },
    benchmark: 'Benchmark: skincare and beauty brands with a working replenishment and retention system typically sustain a 4×–7× blended ROAS once repeat customers are factored in — well above acquisition-only accounts.',
    formHeadline: 'See your full budget breakdown',
    formSubhead: 'Get your numbers, an honest skincare ROAS benchmark, and the Elixzor retention playbook — free, straight to your inbox.',
  },

  faqsHeadline: 'Growing repeat purchases & LTV for skincare and beauty',
  faqs: [
    {
      q: 'How is retention marketing different from what a performance marketing agency already does?',
      a: 'Performance marketing gets the first sale; retention marketing is what happens after checkout. We build replenishment-timed email + WhatsApp flows, subscription offers, and win-back campaigns — the system most acquisition-focused agencies never touch.',
    },
    {
      q: 'We already send post-purchase emails — isn’t that retention marketing?',
      a: 'A single thank-you email isn’t a system. Real retention marketing means sequences timed to when your product actually runs out, subscription and bundle upsells, and a win-back flow for anyone who goes quiet — instrumented and measured by cohort, not sent and forgotten.',
    },
    {
      q: 'Does this work for skincare and beauty specifically, or just wellness and supplements?',
      a: 'The mechanics transfer directly — skincare and beauty are consumable, replenishment-cycle businesses just like health & wellness. The reorder-timing, subscription, and win-back systems that took Elixzor’s repeat rate from 18% to 54% are exactly what we apply to skincare and beauty brands.',
    },
    {
      q: 'How do you measure LTV and repeat purchase rate?',
      a: 'We track cohort-based repeat purchase rate and LTV by acquisition channel and by SKU — not just blended revenue — so you can see precisely which channels and products produce customers who come back, and where retention spend is or isn’t working.',
    },
    {
      q: 'Do you need to run our acquisition marketing too, or can retention stand alone?',
      a: 'Retention can stand alone — we’ll work with your existing acquisition setup. That said, the biggest LTV gains come when acquisition and retention are built together, since we can build lookalikes from your actual repeat buyers, not just first-time purchasers.',
    },
    {
      q: 'What platforms do you use for email and WhatsApp automation?',
      a: 'We work within your existing stack where possible (Klaviyo, WhatsApp Business API, or similar) and recommend a switch only if your current tools genuinely can’t support replenishment-timed, cohort-segmented flows.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'It depends on your customer base size and scope — you’ll get a specific number after the free retention audit, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to turn one-time buyers into repeat customers?',
    subhead:
      'Book a free retention audit. We’ll review your repeat purchase rate, cohort LTV, and lifecycle flows — and tell you the highest-leverage fix, whether you hire us or not.',
    ctaLabel: 'Book a Free Retention Audit',
  },

  videoTestimonialsTag: 'HEAR FROM D2C FOUNDERS',
  videoTestimonialsHeadline: 'Real brands, real retention numbers',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them grow repeat purchases.',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. See lib/youtube.ts for accepted formats.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Skincare Retention Lead',
    headline: 'Tell us about your repeat-purchase goals',
    subhead: 'Fill this in and we’ll get back within 24 hours with a no-obligation retention audit.',
    tag: "LET'S TALK",
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for beauty & skincare brands',
    subhead: 'Growing repeat purchases and acquiring new customers are different disciplines — see both sides.',
    links: [
      {
        label: 'Beauty & Skincare Marketing Agency',
        href: '/d2c/beauty',
        blurb: 'Acquiring your first customers? Here’s our full beauty & skincare performance marketing approach.',
      },
      {
        label: 'Performance Marketing for D2C Brands',
        href: '/d2c',
        blurb: 'Our full D2C performance-marketing approach — the pillar this page sits under.',
      },
      {
        label: 'Meta Ads Agency for Fashion & Apparel Brands',
        href: '/d2c/fashion',
        blurb: 'How the same rebuild approach applies to fashion and apparel D2C.',
      },
      {
        label: 'Our Services',
        href: '/services',
        blurb: 'Everything Growth Escalators does, in one place.',
      },
      {
        label: 'Case Studies',
        href: '/work',
        blurb: 'Real brands, real numbers, real growth.',
      },
    ],
  },
}
