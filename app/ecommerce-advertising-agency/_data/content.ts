/**
 * All copy and data for the /ecommerce-advertising-agency landing page.
 *
 * NATIONAL agency-hire BOFU page — buyer intent: a D2C/ecommerce founder
 * searching "ecommerce advertising agency india", "ecommerce marketing
 * agency", "d2c performance marketing agency". Angle is full-funnel Meta +
 * Google advertising, blended (order-reconciled) ROAS vs platform-reported
 * ROAS, server-side/CAPI tracking, AOV/bundling, and new-vs-returning
 * revenue split — deliberately CHANNEL-scoped, not vertical-scoped, so it
 * does not cannibalize /d2c or /d2c/fashion (which own the "fashion vertical"
 * angle). Sibling pages: /meta-ads-agency-for-ecommerce (Meta-only channel
 * intent) and /ecommerce-scaling-agency (scaling/outcome intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts — Exzept (CASE_STUDIES #1) is the featured client;
 * Diwakar Kumar (ALL_TESTIMONIALS #3) is a supporting proof point. No
 * invented clients, quotes, or metrics.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const ECOMMERCE_ADVERTISING_AGENCY_CONTENT: LandingContent = {
  industryLabel: 'Ecommerce Brand',

  hero: {
    badge: '₹10CR+ AD SPEND MANAGED · META + GOOGLE, ONE FUNNEL',
    headlineLines: ['Ecommerce Advertising', 'Agency for Full-Funnel Growth'],
    cyclingWords: [
      'Built for Shopify brands.',
      'Built for D2C founders.',
      'Built for Meta + Google, together.',
      'Built for blended ROAS.',
    ],
    subhead:
      'Growth Escalators is a full-funnel ecommerce advertising agency — Meta and Google run as one system, not two disconnected budgets bidding against each other. We report blended ROAS reconciled against your actual order data, not the inflated number each platform shows you separately. For Exzept, that discipline took ROAS from 1.8× to 5.2×, cut CPL 44%, and added ₹8L in revenue in 90 days.',
    primaryCta: { label: 'Book a Free Ad Account Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the Exzept Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '5.2×',   label: 'ROAS (Exzept, from 1.8×)' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad Spend Managed'          },
      { emoji: '🤝', value: '97%',    label: 'Client Retention'          },
    ],
  },

  painPointsTag: 'THE ECOMMERCE ADVERTISING TRAP',
  painPointsHeadline: 'Why ecommerce ad spend can look fine on the platform and terrible in your bank account',
  painPoints: [
    {
      emoji: '🪞',
      title: 'Platform ROAS lies by omission',
      body: 'Meta reports ROAS on Meta’s attribution window. Google reports ROAS on Google’s. Add the two together and you’re often crediting the same sale twice — while your P&L tells a very different story than either dashboard.',
    },
    {
      emoji: '📉',
      title: 'iOS14.5+ broke your tracking, quietly',
      body: 'If you’re still running pixel-only tracking, you’re blind to a growing share of real conversions. Most ecommerce accounts we audit are under-reporting true performance by 15–30% — which means real winners get paused and real losers keep spending.',
    },
    {
      emoji: '🛒',
      title: 'One-and-done customers, one-and-done agency',
      body: 'Most agencies get paid to acquire, so that’s all they optimise for. Nobody’s watching AOV, bundling, or the split between new and returning revenue — the levers that decide whether growth is actually profitable.',
    },
    {
      emoji: '🎯',
      title: 'Meta and Google fighting each other for the same buyer',
      body: 'Two channels, two agencies (or two disconnected internal teams), no shared view of the funnel. You end up bidding against your own remarketing, wasting spend on customers you’d have converted anyway.',
    },
  ],

  aiAdvantage: {
    tag: 'THE FULL-FUNNEL LAYER',
    headline: 'Advantage+ and Performance Max both optimise blind to what happens after the click',
    subhead:
      'Meta’s algorithm only sees Meta. Google’s algorithm only sees Google. Nobody’s stitching the two together, checking the result against your actual order data, or deciding what to do next. That’s the layer we own.',
    cards: [
      {
        emoji: '🔗',
        title: 'Server-side tracking, both platforms',
        body: 'Meta Conversions API and Google Enhanced Conversions set up server-side, not just pixel — so post-iOS14.5 tracking gaps stop hiding your real winners and losers.',
      },
      {
        emoji: '⚖️',
        title: 'Blended ROAS, reconciled to orders',
        body: 'We pull Meta + Google spend against your actual Shopify/order data and report one blended number — the one that matches your bank account, not two platform dashboards arguing with each other.',
      },
      {
        emoji: '📦',
        title: 'AOV and bundling built into the media plan',
        body: 'Offer structure, bundling, and post-purchase upsells are part of the account build, not an afterthought — a 15% AOV lift is often cheaper to engineer than an equivalent CPA cut.',
      },
      {
        emoji: '🔁',
        title: 'New vs. returning, split and budgeted separately',
        body: 'Acquisition and retention get separate budgets, separate creative, and separate targets — so scaling top-of-funnel doesn’t quietly cannibalise the repeat revenue you already earned.',
      },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A full-funnel ecommerce advertising system, not a platform-by-platform patchwork',
  servicesSubhead: 'Six services that work as one account, whether you’re running Meta, Google, or both.',
  services: [
    {
      title: 'Meta + Google Full-Funnel Media Buying',
      body: 'One media plan across Meta and Google instead of two teams fighting for the same buyer — budget allocated by incremental contribution, not by which platform’s dashboard shouts loudest.',
    },
    {
      title: 'Server-Side Tracking & CAPI Setup',
      body: 'Meta Conversions API, Google Enhanced Conversions, and first-party data pipelines — built once, so your reporting survives the next platform tracking change instead of breaking again.',
    },
    {
      title: 'Blended ROAS Reporting',
      body: 'Weekly reporting reconciled against your actual order data — blended across channels, net of the double-counting platform dashboards create when you run Meta and Google side by side.',
    },
    {
      title: 'AOV & Bundling Strategy',
      body: 'Offer architecture, product bundling, and post-purchase upsell flows engineered alongside the media plan — because lifting AOV is often the cheapest lever in the account.',
    },
    {
      title: 'New vs. Returning Revenue Split',
      body: 'Separate budgets, creative, and KPIs for acquisition and retention — so we can tell you exactly how much of your growth is new customers versus your own base buying again.',
    },
    {
      title: 'Creative Testing & Landing Page CRO',
      body: 'Structured angle and hook testing across cold, warm, and hot audiences, paired with conversion-optimised landing pages — so the traffic you’re already paying for actually converts.',
    },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A full-funnel rebuild that moved the number that matters',
  resultHighlight: {
    label: 'FEATURED CLIENT · ECOMMERCE',
    name: 'Exzept',
    detail: 'Fashion eCommerce · Full-Funnel Meta + Google Rebuild',
    quote:
      'Platform ROAS said 1.8× and revenue had stalled. We rebuilt the account — audience segmentation, UGC creative testing, and conversion-optimised landing pages — and reconciled every result against real order data, not platform attribution. Blended ROAS reached 5.2×, CPL dropped 44%, and revenue grew ₹8L in 90 days.',
    metrics: [
      { value: '5.2×',  label: 'ROAS (from 1.8×)'      },
      { value: '−44%',  label: 'Cost per lead'          },
      { value: '+₹8L',  label: 'Revenue in 90 days'     },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Full-Funnel Ad Account Audit',
      body: 'We pull your Meta + Google accounts and your actual order data side by side. Most founders are surprised how far platform-reported ROAS drifts from what actually lands in the bank.',
    },
    {
      step: '02',
      title: 'Tracking & Attribution Fix',
      body: 'CAPI, Enhanced Conversions, and server-side tracking go in first — before we touch budget — so every decision after this point is made on real numbers.',
    },
    {
      step: '03',
      title: 'Rebuild & Launch',
      body: 'Audience architecture, creative testing pipeline, and blended reporting go live within 2 weeks. AOV and bundling changes ship alongside the media plan, not after it.',
    },
    {
      step: '04',
      title: 'Scale on Blended ROAS',
      body: 'Budget moves up only when blended, order-reconciled ROAS says it should — not because one platform’s dashboard looked good this week.',
    },
  ],

  whyUsHeadline: 'An ecommerce advertising agency that reports what actually happened, not what one dashboard says happened',
  whyUs: [
    {
      title: 'One team, both channels',
      body: 'Meta and Google run as a single strategy with one person accountable for the blended number — not two disconnected specialists optimising against each other.',
    },
    {
      title: 'Order data, not platform attribution',
      body: 'Every ROAS number we report is reconciled against your actual order data. If a platform says one thing and your revenue says another, we go with your revenue.',
    },
    {
      title: 'Real results, named clients',
      body: 'Exzept went from 1.8× to 5.2× ROAS with CPL down 44% and +₹8L revenue in 90 days. Ask us for the account walkthrough, not just the headline number.',
    },
    {
      title: 'You own the infrastructure',
      body: 'Ad accounts, tracking setup, creative library, and reporting dashboards — all built in your name. Leave any time and take the entire system with you.',
    },
  ],

  faqsHeadline: 'Hiring an ecommerce advertising agency',
  faqs: [
    {
      q: 'What makes you a "full-funnel" agency instead of just a Meta or Google agency?',
      a: 'Most agencies specialise in one platform and let the two compete for the same buyer. We run Meta and Google as one system — one media plan, one blended ROAS number reconciled against your real order data — so budget goes to whichever channel is actually driving incremental revenue, not whichever platform’s dashboard looks best this week.',
    },
    {
      q: 'What is "blended ROAS" and why does it matter more than platform ROAS?',
      a: 'Meta reports ROAS on its own attribution window; Google does the same on its. Run both and you’ll often see combined "reported" ROAS that’s mathematically impossible against your real revenue, because both platforms are claiming credit for some of the same sales. Blended ROAS reconciles ad spend against your actual order data — it’s the number that matches your bank account, not the number each platform wants you to see.',
    },
    {
      q: 'Do you handle server-side tracking and CAPI?',
      a: 'Yes — Meta Conversions API and Google Enhanced Conversions are part of the initial account build, not an add-on. Since iOS14.5+, pixel-only tracking under-reports a meaningful share of real conversions, which means real winners get paused for looking worse than they are.',
    },
    {
      q: 'Can you help with AOV and bundling, or just ad spend?',
      a: 'Both — and we treat them as the same problem. A 15% AOV lift from smarter bundling is often cheaper to engineer than the equivalent CPA cut, so offer and bundle strategy is part of the account build alongside the media plan.',
    },
    {
      q: 'How do you think about new customer acquisition versus retention?',
      a: 'We split budget, creative, and targets between new and returning customers so you can see exactly how much of your growth is genuinely new versus your own base buying again. Scaling acquisition without checking this split is the fastest way to quietly cannibalise revenue you already had.',
    },
    {
      q: 'Do you only work with fashion or apparel ecommerce brands?',
      a: 'No — Exzept (our featured result here) happens to be fashion eCommerce, but the full-funnel method isn’t vertical-specific. One of our published testimonials, Diwakar Kumar, is a general ecommerce entrepreneur whose revenue grew 140% in 3 months after we fixed bottlenecks across his whole funnel — not just his ad account.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'Depends on ad spend scale and scope — you’ll get a specific number after the free full-funnel audit, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to see your real, blended ROAS?',
    subhead:
      'Book a free full-funnel ad account audit. We’ll pull your Meta + Google accounts against your actual order data and show you exactly where spend is leaking — no obligation.',
    ctaLabel: 'Book a Free Ad Account Audit',
  },

  videoTestimonialsTag: 'HEAR FROM ECOMMERCE FOUNDERS',
  videoTestimonialsHeadline: 'Real brands, real full-funnel numbers',
  videoTestimonialsSubhead: 'Tap any short to hear how we rebuilt their ad accounts.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from ecommerce clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we help ecommerce brands grow',
    subhead: 'Channel-specific and outcome-specific plays, plus the broader D2C approach.',
    links: [
      {
        label: 'Meta Ads Agency for Ecommerce',
        href: '/meta-ads-agency-for-ecommerce',
        blurb: 'Already decided on Meta specifically? Our Meta-only playbook — UGC testing, offer structuring, CBO pacing.',
      },
      {
        label: 'Ecommerce Scaling Agency',
        href: '/ecommerce-scaling-agency',
        blurb: 'Already profitable and stuck at a ROAS ceiling? How we scale past it without breaking unit economics.',
      },
      {
        label: 'Performance Marketing for D2C Brands',
        href: '/d2c',
        blurb: 'Our broader D2C performance-marketing approach — account rebuilds, creative testing, attribution.',
      },
      {
        label: 'Meta Ads for Fashion & Apparel D2C',
        href: '/d2c/fashion',
        blurb: 'Return-adjusted ROAS, seasonal catalogs, and drop-cycle creative — built specifically for fashion.',
      },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Ecommerce Advertising Lead',
    headline: 'Tell us about your ecommerce brand',
    subhead: 'Fill this in and we’ll get back within 24 hours with a no-obligation full-funnel audit.',
    tag: 'LET’S TALK',
  },
}
