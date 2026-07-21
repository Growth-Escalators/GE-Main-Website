/**
 * All copy and data for the /d2c/beauty vertical money page.
 *
 * A SUB-VERTICAL of the /d2c pillar, structurally mirroring /d2c/fashion —
 * same IndustryLandingPage scaffold, genuinely beauty/skincare-specific
 * substance (UGC ratio, influencer whitelisting, sampling/trial funnels,
 * before/after claims compliance, shade/SKU complexity). NOT a clone of
 * D2C_CONTENT or FASHION_CONTENT.
 *
 * BUYER INTENT: agency-hire — "beauty brand marketing agency india",
 * "skincare marketing agency", "cosmetics d2c agency". Distinct from the
 * companion /skincare-retention-marketing page, which targets an existing
 * brand's retention/LTV decision, not acquisition.
 *
 * PROOF RULE: every named-client number is real and sourced from
 * lib/constants.ts (ALL_TESTIMONIALS id 7, Neha Agarwal). Reusable global
 * stats (₹10Cr+ ad spend, 10,000+ campaigns, 4.9★/187 reviews, 100+ brands,
 * founded 2021, Jaipur HQ) are also from lib/constants.ts. No fabricated
 * clients, quotes, or metrics.
 *
 * EDIT this file to change anything visible on the page.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const BEAUTY_CONTENT: LandingContent = {
  industryLabel: 'Beauty & Skincare Brand',

  hero: {
    badge: '₹10CR+ AD SPEND MANAGED · BEAUTY & SKINCARE D2C',
    headlineLines: ['Beauty & Skincare', 'Marketing Agency'],
    cyclingWords: [
      'Built for skincare brands.',
      'Built for cosmetics & makeup.',
      'Built for personal care D2C.',
      'Built for Shopify beauty stores.',
    ],
    subhead:
      'Growth Escalators is a performance marketing agency for beauty, skincare, and cosmetics D2C brands. We build what generic media buyers can’t — UGC pipelines, influencer whitelisting, and sampling funnels — because beauty converts on trust, not just targeting. Real result: a skincare founder saw AOV up 118% and repeat purchases 4× in 90 days.',
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See a Real Beauty Result ↓', href: '#results' },
    statPills: [
      { emoji: '📊', value: '10,000+', label: 'Campaigns Run' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad Spend Managed' },
      { emoji: '✨', value: '+118%', label: 'AOV Lift (Skincare Client)' },
    ],
    image: {
      src: '/industries/beauty/hero.jpg',
      alt: 'Skincare products arranged for a beauty D2C brand shoot',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a trust-built beauty brand actually looks like',
    subhead:
      'Beauty buys on trust, not just targeting — the brands winning online are the ones whose content looks and feels like proof, not a product catalog.',
    images: [
      { src: '/industries/beauty/1.jpg', alt: 'Cosmetics and makeup products styled for a beauty campaign', caption: 'Catalog content built to earn trust, not just clicks' },
      { src: '/industries/beauty/2.jpg', alt: 'Beauty products displayed together for a D2C brand shoot', caption: 'Bundles and sets that lift AOV' },
      { src: '/industries/beauty/3.jpg', alt: 'Skincare products arranged in a flatlay composition', caption: 'The routine-and-ritual content skincare buyers actually save' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why beauty & skincare accounts struggle with generic agencies',
  painPoints: [
    {
      emoji: '🧴',
      title: 'Studio shots don’t sell skincare',
      body: 'Beauty buys on trust — real skin, real texture, real application — not the same 3 polished product-on-marble shots from launch day. Most agencies never build a real UGC and influencer-whitelisting pipeline, so creative fatigues fast and conversion stalls.',
    },
    {
      emoji: '⚠️',
      title: 'Before/after claims are a compliance minefield',
      body: 'Meta throttles or rejects ads implying "results" or making health claims — a genuine risk for skincare and cosmetics. Most agencies don’t know where the compliant line is, so they either play it too safe to convert or get the account flagged.',
    },
    {
      emoji: '🎨',
      title: 'Shade & SKU complexity breaks generic catalogs',
      body: 'A 12-shade foundation range or a 6-step serum ladder isn’t one product — it’s dozens of audiences and feed entries. Generic Advantage+ Shopping setups can’t tell your bestselling shade from dead stock.',
    },
    {
      emoji: '🔁',
      title: 'Optimised for the first sale, not the repeat one',
      body: 'Skincare and cosmetics are repeat-purchase, replenishment businesses — but most agencies stop at the first order. You get a one-time buyer, not the 90-day repeat customer that actually makes your LTV math work.',
    },
  ],

  aiAdvantage: {
    tag: 'WHY GENERIC MEDIA BUYING FAILS ON BEAUTY',
    headline: 'Advantage+ can sell your product. It can’t build a beauty brand.',
    subhead:
      'Meta’s AI happily buys clicks on whatever creative you feed it — it can’t build your UGC pipeline, navigate before/after compliance, or structure a 40-SKU shade range. That’s the layer we own.',
    cards: [
      {
        emoji: '🎥',
        title: 'UGC & influencer-whitelisting pipeline',
        body: 'A structured mix of UGC, influencer whitelisting (running creators’ organic content as paid ads under their handle), and studio shots — tested on a fixed cadence so trust-driven creative never runs dry.',
      },
      {
        emoji: '✅',
        title: 'Compliant before/after & claims creative',
        body: 'We build result-driven creative that stays inside Meta’s health/beauty ad policy — so you get the persuasive proof beauty buyers need without risking delivery throttling or account flags.',
      },
      {
        emoji: '🧪',
        title: 'Sampling & trial funnels',
        body: 'Low-risk trial-size and sample-led funnels engineered to convert skeptical first-time buyers cheaply, then upsell into full-size products and bundles once trust is earned.',
      },
      {
        emoji: '🎨',
        title: 'Shade & SKU-aware catalog structuring',
        body: 'Variant-aware product feeds built for shade ranges and step-based routines, so Advantage+ Shopping spend follows what’s actually in stock, in-shade, and converting.',
      },
    ],
  },

  servicesHeadline: 'What a beauty & skincare brand actually needs to scale',
  servicesSubhead: 'Not a generic service menu — the specific levers that move beauty and cosmetics D2C.',
  services: [
    {
      title: 'Meta & Google Ads for Beauty D2C',
      body: 'Full account build or rebuild — ICP, audience architecture, and campaign structure calibrated for beauty’s trust-first buying journey, not a generic e-commerce template.',
    },
    {
      title: 'UGC & Influencer Whitelisting',
      body: 'Sourcing, briefing, and whitelisting real creators so your ad account runs a constant stream of authentic, trust-building creative instead of the same studio shots.',
    },
    {
      title: 'Sampling & Trial Funnels',
      body: 'Trial-size and sample-led acquisition funnels that lower the barrier for skeptical first-time skincare buyers, then convert them into full-size, higher-AOV customers.',
    },
    {
      title: 'Shade & SKU Catalog Optimisation',
      body: 'Variant-aware feeds and catalog structuring for shade ranges, step-based routines, and bundles — so ad spend follows what’s actually converting, not your whole catalog blindly.',
    },
    {
      title: 'Compliant Claims & Before/After Creative',
      body: 'Result-driven ad creative built to stay inside Meta’s beauty and health ad policies — persuasive without risking rejection or delivery throttling.',
    },
    {
      title: 'Shopify CRO for Beauty',
      body: 'PDP and landing-page optimisation built around ingredient trust, routine education, and shade-matching — lifting AOV and conversion on traffic you’re already paying for.',
    },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A real skincare D2C result',
  resultHighlight: {
    label: 'FEATURED CLIENT · SKINCARE D2C',
    name: 'Neha Agarwal',
    detail: 'D2C Skincare Brand Founder',
    quote:
      "I was burning money on Meta ads with zero strategy. GE came in, restructured everything — creatives, audiences, landing pages. AOV went up 118% and repeat purchases increased 4x within 90 days. I only wish I'd found them sooner.",
    metrics: [
      { value: '+118%', label: 'Average Order Value' },
      { value: '4×', label: 'Repeat Purchases (90 Days)' },
      { value: '90 Days', label: 'Time to Results' },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Brand & Creative Audit',
      body: 'A free audit of your current ads, creative mix, and catalog — where trust is leaking, which SKUs/shades are underperforming, and what we’d rebuild first.',
    },
    {
      step: '02',
      title: 'Build the Creative Engine',
      body: 'UGC sourcing, influencer whitelisting, and a compliant claims framework get built before a single rupee of new scaling spend goes out.',
    },
    {
      step: '03',
      title: 'Launch Sampling & Full-Funnel Tests',
      body: 'Trial/sample funnels, shade-aware catalog structuring, and PDP CRO go live alongside systematic creative testing across cold, warm, and hot audiences.',
    },
    {
      step: '04',
      title: 'Scale AOV & Repeat Purchases',
      body: 'Disciplined scaling once first-purchase economics work — then a retention layer compounds AOV and repeat rate, the way it did for Neha’s brand.',
    },
  ],

  whyUsHeadline: 'The beauty & skincare agency that builds trust, not just traffic',
  whyUs: [
    {
      title: 'Beauty is a trust category — we build for that',
      body: 'Generic media buying can’t build the UGC, sampling, and claims-compliance systems beauty needs to convert skeptical buyers. We own that whole layer.',
    },
    {
      title: 'Real proof, not generic case studies',
      body: 'A real skincare founder, real numbers: AOV up 118%, repeat purchases 4× within 90 days. Ask us for the specifics.',
    },
    {
      title: 'Full-funnel, not just media spend',
      body: 'Catalog, creative pipeline, PDP conversion, and compliance — the parts of a beauty funnel that are actually defensible against automated media buying.',
    },
    {
      title: 'An AI-first agency, 100+ brands since 2021',
      body: 'Founded in 2021 and based in Jaipur — 10,000+ campaigns run, ₹10Cr+ in ad spend managed, 4.9★ from 187+ reviews. Beauty and skincare is one of the categories our AI-first system is built for.',
    },
  ],

  leadMagnet: {
    type: 'd2c-roas',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What ad budget do you need to hit your revenue goal?',
    subhead: 'Move the sliders to your numbers and see the monthly ad budget it takes to hit your beauty brand’s revenue goal.',
    source: 'Calculator — D2C Beauty',
    revenueGoal: { label: 'Monthly revenue goal', default: 800000 },
    aov: { label: 'Average order value (₹)', default: 1200 },
    targetRoas: { label: 'Target ROAS', default: 3 },
    benchmark: 'Benchmark: a well-run beauty D2C account typically settles into a 3×–4× ROAS once UGC, sampling funnels, and retargeting are dialled in. Expect the ratio to run lower for the first 60–90 days while the account learns.',
    formHeadline: 'See your full budget breakdown',
    formSubhead: 'Get your numbers, a beauty D2C ROAS benchmark, and the Neha Agarwal playbook — free, straight to your inbox.',
  },

  faqsHeadline: 'Hiring a beauty & skincare marketing agency',
  faqs: [
    {
      q: 'Do you only work with skincare brands, or also makeup and personal care?',
      a: 'All of beauty and personal care — skincare, makeup/cosmetics, haircare, and grooming. The method is the same across sub-categories: trust-driven creative, sampling funnels, and shade/SKU-aware catalogs — the specifics get tailored to your product.',
    },
    {
      q: 'How do you handle Meta’s ad policy for before/after and results claims?',
      a: 'We build result-driven creative that stays inside Meta’s health/beauty advertising policies — real testimonials and transformation content framed compliantly — so you get persuasive proof without risking ad rejection or account-wide delivery throttling.',
    },
    {
      q: 'We have a large shade range or SKU catalog — can you actually manage that?',
      a: 'Yes — variant-heavy catalogs are exactly the kind of complexity we build for. We structure feeds by shade and step so Advantage+ Shopping and PMax follow what’s actually in stock and converting, not your whole catalog blindly.',
    },
    {
      q: 'Do you run influencer and UGC creative, or just performance ads?',
      a: 'Both, and they’re connected. We source and whitelist UGC and influencer content specifically to feed the paid engine — a beauty ad account without a constant stream of authentic creative fatigues fast.',
    },
    {
      q: 'How is this different from a generic performance marketing agency?',
      a: 'Generic agencies treat beauty like any other e-commerce catalog. We build around what actually converts skincare and cosmetics buyers — sampling funnels, compliant claims creative, and shade-aware structuring — backed by a real result: AOV +118%, repeat purchases 4× in 90 days for a skincare client.',
    },
    {
      q: 'How soon will we see results?',
      a: 'Creative and funnel foundations typically go live within 2 weeks. Meaningful AOV and repeat-purchase movement — like Neha’s brand saw — usually shows in the 60–90 day window, once enough purchase cycles have run.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'It depends on ad spend scale and scope — you’ll get a specific number after the free strategy call, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to build a beauty brand that converts on trust?',
    subhead:
      'Book a free strategy call. We’ll review your creative mix, catalog, and funnel — and tell you the highest-leverage fix, whether you hire us or not.',
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM BEAUTY FOUNDERS',
  videoTestimonialsHeadline: 'Real brands, real numbers',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them grow.',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. See lib/youtube.ts for accepted formats.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Beauty D2C Lead',
    headline: 'Tell us about your beauty brand',
    subhead: 'Fill this in and we’ll get back within 24 hours with a no-obligation strategy call.',
    tag: "LET'S TALK",
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for beauty & skincare brands',
    subhead: 'Acquiring customers and keeping them are different disciplines — see both sides.',
    links: [
      {
        label: 'Grow Repeat Purchases & LTV for Skincare',
        href: '/skincare-retention-marketing',
        blurb: 'Already acquiring buyers? Here’s how we grow repeat rate and LTV — including an 18%→54% repeat-rate result.',
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
