/**
 * All copy and data for the /d2c/fashion vertical money page.
 *
 * This is a SUB-VERTICAL of the /d2c pillar — same IndustryLandingPage scaffold,
 * genuinely fashion-specific substance (returns, seasonality, catalog, drop-cycle
 * creative). NOT a clone of D2C_CONTENT: the pains, services, and FAQs are unique to
 * apparel so this ranks on its own merits rather than tripping duplicate/thin-content.
 *
 * EDIT this file to change anything visible on the page.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const FASHION_CONTENT: LandingContent = {
  industryLabel: 'Fashion & Apparel Brand',

  hero: {
    badge: '₹10CR+ AD SPEND MANAGED · FASHION & APPAREL D2C',
    headlineLines: ['Higher ROAS on', 'Fashion That Sticks.'],
    cyclingWords: [
      'Built for apparel brands.',
      'Built for footwear & accessories.',
      'Built for ethnic & occasion wear.',
      'Built for Shopify fashion stores.',
    ],
    subhead:
      'We scale fashion and apparel D2C brands whose Meta ROAS has plateaued — accounting for the things generic agencies ignore: returns, seasonality, and a catalog with hundreds of variants. We rebuild the account around net, in-stock, margin-positive ROAS — not the dashboard number.',
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See a Real Fashion Result ↓', href: '#results' },
    statPills: [
      { emoji: '📊', value: '10,000+', label: 'Campaigns Run' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad Spend Managed' },
      { emoji: '🤝', value: '97%', label: 'Client Retention' },
    ],
    image: {
      src: '/industries/fashion/hero.jpg',
      alt: 'Fashion and apparel product shoot for a D2C clothing brand',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a fashion brand built for return-adjusted ROAS looks like',
    subhead:
      'The fashion brands scaling profitably aren’t necessarily the best designers — they’re the ones whose catalog, creative, and returns math are all built for the same drop cycle.',
    images: [
      { src: '/industries/fashion/1.jpg', alt: 'Shopper browsing fashion products in an online store', caption: 'Catalog built for browsing, not just buying' },
      { src: '/industries/fashion/2.jpg', alt: 'Apparel modelled for a fashion D2C ad campaign', caption: 'On-model creative that keeps pace with drops' },
      { src: '/industries/fashion/3.jpg', alt: 'Clothing rack styled for a fashion brand photoshoot', caption: 'Seasonal collections mapped to real demand' },
    ],
  },

  painPointsHeadline: 'Why fashion accounts plateau differently',
  painPoints: [
    {
      emoji: '↩️',
      title: 'Returns quietly eat your real ROAS',
      body: 'Apparel returns run 20-30%+ — far above other categories, mostly size and fit. A "3× ROAS" dashboard can be a 2× business once returns clear. Most agencies never reconcile for it.',
    },
    {
      emoji: '🗓️',
      title: 'Seasonality & drops break the algorithm',
      body: 'New collections, festive peaks, and end-of-season sales spike and crater spend. Every big budget swing resets Meta’s learning phase — so launches and clearances cost more than they should.',
    },
    {
      emoji: '🎨',
      title: 'Creative fatigues at trend speed',
      body: 'Fashion moves faster than any other vertical. The same lookbook shots and 4-5 concepts decay in weeks, not months, and there’s never enough fresh creative in the pipeline.',
    },
    {
      emoji: '🧾',
      title: 'A big SKU catalog Advantage+ can’t read',
      body: 'Hundreds of size/colour variants, a messy feed, and out-of-stock bestsellers still burning spend. Catalog and Advantage+ Shopping only perform when the feed underneath them is clean.',
    },
  ],

  aiAdvantage: {
    tag: 'WHY GENERIC MEDIA BUYING FAILS ON FASHION',
    headline: 'Advantage+ optimizes to the sale — not to the sale that sticks.',
    subhead:
      'Meta’s AI happily buys you revenue that walks back in as a return, spend on out-of-stock SKUs, and clearance orders at zero margin. Fashion needs a layer that optimizes to net, in-stock, margin-positive revenue. That’s the layer we own.',
    cards: [
      {
        emoji: '↩️',
        title: 'Return-adjusted ROAS, not dashboard ROAS',
        body: 'We reconcile ad-platform revenue against post-return, post-exchange order data before any scaling call — so you scale what’s actually profitable, not what looks good pre-returns.',
      },
      {
        emoji: '🧵',
        title: 'Catalog & feed built for variants',
        body: 'Clean product feeds, variant-aware catalogs, and Advantage+ Shopping / PMax tuned so spend follows what’s in stock and converting — not last season’s hero product.',
      },
      {
        emoji: '⚡',
        title: 'Creative velocity for drop cycles',
        body: 'A structured pipeline of angles — UGC, on-model, flat-lay, styling, social proof — refreshed on a fixed cadence, so creative keeps pace with collections instead of fatiguing silently.',
      },
      {
        emoji: '📈',
        title: 'Peak & clearance without resets',
        body: 'Launch and end-of-season budgets ramped on a tested pacing plan that respects the learning phase — so festive and sale windows scale instead of spiking your CPAs.',
      },
    ],
  },

  servicesHeadline: 'What a plateaued fashion account actually needs',
  servicesSubhead: 'Not a service menu — the specific levers that move ROAS for apparel, footwear, and accessories.',
  services: [
    {
      title: 'Meta Ads Account Rebuilds',
      body: 'Full ICP, audience architecture, and campaign-structure rebuild for fashion accounts that have plateaued — sized for seasonality and drops, not a static evergreen catalog.',
    },
    {
      title: 'Return-Adjusted Attribution',
      body: 'Ad revenue reconciled against real post-return order data, so scaling decisions are made on the ROAS that survives contact with your returns rate.',
    },
    {
      title: 'Catalog & Feed Optimization',
      body: 'Variant-aware product feeds and Advantage+ Shopping / PMax setup so spend follows in-stock, in-season, converting SKUs — not dead inventory.',
    },
    {
      title: 'Creative Testing for Fashion',
      body: 'Structured angle/format rotation — UGC, on-model, flat-lay, styling, social proof — on a cadence built for trend and drop cycles.',
    },
    {
      title: 'Shopify CRO for Apparel',
      body: 'PDP and landing-page optimization built around the fashion buyer: size guidance, fit confidence, returns clarity, and outfit cross-sell to lift AOV.',
    },
    {
      title: 'Peak & Launch Playbooks',
      body: 'Festive, wedding-season, and end-of-season-sale ramp plans that scale spend through high-CPM windows without breaking the account.',
    },
  ],

  resultsHeadline: 'A real fashion D2C result',
  resultHighlight: {
    label: 'FEATURED CLIENT · FASHION D2C',
    name: 'Paraiso',
    detail: 'Fashion D2C · Comfort Wear',
    quote:
      'Stuck at a ~1.9× ROAS with revenue flat, creative fatigued, and every scaling attempt breaking the unit economics — rebuilt from the ground up, returns and seasonality included.',
    metrics: [
      { value: '3.2×', label: 'ROAS (up from 1.9×)' },
      { value: '6×', label: 'Revenue growth in 60 days' },
      { value: 'Live', label: 'Scaled profitably — still running today' },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Account & Returns Diagnostic',
      body: 'A free audit of your account and your real return-adjusted ROAS — where spend leaks, which SKUs actually pay, and what we’d rebuild first.',
    },
    {
      step: '02',
      title: 'Rebuild the Foundation',
      body: 'ICP, audience architecture, catalog/feed, and net-of-returns attribution get fixed before a single rupee of new scaling spend goes out.',
    },
    {
      step: '03',
      title: 'Systematic Creative Testing',
      body: 'Angle and format testing built for fashion — on-model, UGC, flat-lay, styling — across cold/warm/hot on a fixed cadence.',
    },
    {
      step: '04',
      title: 'Scale Through the Season',
      body: 'Disciplined, rules-based scaling tuned for drops, festive peaks, and end-of-season sales — growing net ROAS instead of breaking it.',
    },
  ],

  whyUs: [
    {
      title: 'We price returns in from day one',
      body: 'Fashion’s defining problem is returns. We build the whole account around net, post-return revenue — most agencies optimize to a dashboard number that apparel invalidates.',
    },
    {
      title: 'Full-funnel, not just media spend',
      body: 'We own catalog, attribution, and PDP conversion — the parts of a fashion funnel that are actually defensible against automated media buying.',
    },
    {
      title: 'Proof, not promises',
      body: 'Real before/after numbers from a real fashion account (Paraiso: 1.9×→3.2× ROAS) — not vague case-study language.',
    },
    {
      title: 'Built for the plateau, specifically',
      body: 'Most agencies launch accounts. We specialize in fashion accounts that already have spend, data, and a plateau — and know why apparel plateaus differently.',
    },
  ],

  leadMagnet: {
    type: 'd2c-roas',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What ad budget do you need to hit your revenue goal?',
    subhead: 'Move the sliders to your numbers and see the monthly ad budget it takes to hit your fashion brand’s revenue goal.',
    source: 'Calculator — D2C Fashion',
    revenueGoal: { label: 'Monthly revenue goal', default: 1000000 },
    aov: { label: 'Average order value (₹)', default: 2000 },
    targetRoas: { label: 'Target ROAS', default: 3 },
    benchmark: 'Benchmark: a well-run fashion D2C account typically settles into a 3×–4× ROAS once return-adjusted attribution, catalog, and creative are dialled in. Expect the ratio to run lower for the first 60–90 days while the account learns.',
    formHeadline: 'See your full budget breakdown',
    formSubhead: 'Get your numbers, a fashion D2C ROAS benchmark, and the Paraiso scaling playbook — free, straight to your inbox.',
  },

  faqs: [
    {
      q: 'How do you handle our return rate?',
      a: 'It’s the first thing we fix. We reconcile ad-platform revenue against your real post-return, post-exchange order data and manage the account to return-adjusted ROAS — so you scale what’s genuinely profitable, not revenue that walks back in three weeks later.',
    },
    {
      q: 'Can you manage a large seasonal catalog and frequent drops?',
      a: 'Yes — variant-heavy catalogs and drop cadences are exactly the fashion problem we build for. We keep the product feed clean, make Advantage+ Shopping/PMax follow in-stock and in-season SKUs, and run launch/clearance budgets on a pacing plan that doesn’t reset the learning phase.',
    },
    {
      q: 'Our creative fatigues really fast — can you keep up?',
      a: 'Fashion fatigues faster than any category, so we run a structured creative pipeline (UGC, on-model, flat-lay, styling, social proof) on a fixed testing cadence rather than making a new ad only when the old one dies. Fresh angles keep feeding the account through every collection.',
    },
    {
      q: 'Do you work with apparel, footwear, accessories, and ethnic/occasion wear?',
      a: 'Yes — the method is the same across fashion sub-categories: net-of-returns economics, a clean catalog, and creative built for the buying occasion. The specifics (fit confidence for apparel, styling for accessories, festive timing for ethnic wear) get tailored in the rebuild.',
    },
    {
      q: 'How do you keep discounting from destroying our margin?',
      a: 'We scale on contribution margin, not just ROAS. End-of-season and festive discounting have a place, but we make sure ad spend isn’t buying zero-margin clearance orders and calling it success — the pacing and reporting are built around what actually pays.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'It depends on ad spend scale and scope — you’ll get a specific number after the free diagnostic call, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to scale fashion profitably?',
    subhead:
      'Book a free account + returns diagnostic. We’ll show you your real return-adjusted ROAS and exactly what we’d rebuild first — no obligation.',
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM FASHION FOUNDERS',
  videoTestimonialsHeadline: 'Real brands, real numbers',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them scale.',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. See lib/youtube.ts for accepted formats.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Fashion D2C Lead',
    headline: 'Tell us about your fashion brand',
    subhead: "Fill this in and we'll get back within 24 hours with a no-obligation account + returns diagnostic.",
    tag: "LET'S TALK",
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'The playbooks behind the rebuild',
    subhead: 'The same thinking we apply to fashion accounts, in depth.',
    links: [
      {
        label: 'Performance marketing for D2C brands (overview)',
        href: '/d2c',
        blurb: 'Our full D2C performance-marketing approach — the pillar this fashion page sits under.',
      },
      {
        label: 'How to scale Meta ROAS past the plateau',
        href: '/blog/meta-ads-for-d2c-brands-scale-roas-past-plateau',
        blurb: 'The four-part account rebuild — the exact framework behind Paraiso’s 1.9×→3.2×.',
      },
      {
        label: 'The creative testing framework for D2C',
        href: '/blog/creative-testing-framework-d2c-performance-marketing',
        blurb: 'Angles, hooks, cadence, and kill criteria — built for fashion’s fast fatigue.',
      },
      {
        label: 'CAC vs LTV: the only ad-spend math that matters',
        href: '/blog/cac-vs-ltv-ecommerce-ad-spend-math',
        blurb: 'Why return-adjusted unit economics decide whether your spend is working.',
      },
    ],
  },
}
