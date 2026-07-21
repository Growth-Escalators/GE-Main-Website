/**
 * All copy and data for the /meta-ads-agency-for-ecommerce landing page.
 *
 * NATIONAL channel-specific BOFU page — buyer intent: a store owner who has
 * already decided they want Meta/Facebook/Instagram ads specifically —
 * "meta ads agency for ecommerce", "facebook ads agency for shopify",
 * "instagram ads for online store". Angle is Meta-only: UGC creative testing
 * at scale, offer structuring, "it's usually a creative/offer problem not an
 * audience problem", account structure, and CBO/budget pacing — deliberately
 * CHANNEL-scoped, not vertical-scoped, so it does not cannibalize /d2c or
 * /d2c/fashion (which own the "fashion vertical" angle). Sibling pages:
 * /ecommerce-advertising-agency (full-funnel Meta+Google intent) and
 * /ecommerce-scaling-agency (scaling/outcome intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts — Sneha Kapoor (ALL_TESTIMONIALS #10) is the featured
 * client; her quote is used verbatim, not paraphrased. No invented clients,
 * quotes, or metrics.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const META_ADS_ECOMMERCE_CONTENT: LandingContent = {
  industryLabel: 'Ecommerce Brand (Meta Ads)',

  hero: {
    badge: 'META-ONLY SPECIALISTS · 10,000+ CAMPAIGNS RUN',
    headlineLines: ['Meta Ads Agency', 'For Ecommerce That Scales'],
    cyclingWords: [
      'Built for Shopify stores.',
      'Built for Instagram-first brands.',
      'Built for UGC creative testing.',
      'Built for offer-led growth.',
    ],
    subhead:
      'Growth Escalators is a Meta ads agency built specifically for ecommerce — Facebook, Instagram, and Reels, run as one system. Most stalled Meta accounts don’t have an audience problem, they have a creative and offer problem. For Sneha Kapoor’s fashion store, fixing that took ROAS from 1.9× to 6.1× in 75 days.',
    primaryCta: { label: 'Book a Free Meta Ads Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the 6.1× Result ↓', href: '#results' },
    statPills: [
      { emoji: '🚀', value: '6.1×',  label: 'ROAS (Sneha Kapoor, from 1.9×)' },
      { emoji: '🎬', value: 'UGC',   label: 'Creative Tested at Scale'       },
      { emoji: '⭐', value: '4.9★', label: '187 Reviews'                    },
    ],
    image: {
      src: '/industries/d2c/2.jpg',
      alt: 'Branded product boxes for a Meta ads ecommerce brand',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a Meta account with the right creative and offer looks like',
    subhead:
      'Most stalled Meta accounts don’t need a new audience — they need creative and an offer worth stopping the scroll for.',
    images: [
      { src: '/industries/d2c/3.jpg', alt: 'A product styled for a Meta ads creative shoot', caption: 'UGC-ready product shots built for the feed' },
      { src: '/industries/d2c/4.jpg', alt: 'Ecommerce order packed after a Meta ads sale', caption: 'Orders that prove the creative-and-offer fix worked' },
      { src: '/industries/d2c/5.jpg', alt: 'Ecommerce fulfilment for a Meta ads-driven store', caption: 'Fulfilment keeping pace with a rebuilt ad account' },
    ],
  },

  painPointsTag: 'IT’S PROBABLY NOT YOUR AUDIENCE',
  painPointsHeadline: 'Why your Meta account stalled — and it’s usually not what your last agency told you',
  painPoints: [
    {
      emoji: '🎯',
      title: '"Broaden the audience" is the default excuse',
      body: 'When ROAS drops, most agencies reach for audience tweaks first because it’s the easiest lever to pull. But if your creative and offer aren’t converting, no amount of audience expansion fixes it — you’re just showing the same weak ad to more people.',
    },
    {
      emoji: '🖼️',
      title: 'Four ad concepts running since launch',
      body: 'Meta’s algorithm needs fresh creative to keep finding new pockets of demand. Most ecommerce accounts we audit are running the same 3–5 concepts for months — CPMs climb, CTR decays, and the account quietly stalls.',
    },
    {
      emoji: '💸',
      title: 'CBO budget dumped into yesterday’s winner',
      body: 'Campaign Budget Optimization without a pacing strategy just feeds whatever won last week — starving the new creative and audiences that would have found tomorrow’s winner.',
    },
    {
      emoji: '🏷️',
      title: 'The offer never gets touched',
      body: 'Discount codes and free shipping aren’t an offer strategy. Most stalled accounts have never tested a bundle, a threshold offer, or a value-stack — because the ad account and the offer are managed by different people, if anyone.',
    },
  ],

  aiAdvantage: {
    tag: 'THE META-SPECIFIC LAYER',
    headline: 'Advantage+ will happily spend more on a weak creative. It won’t tell you the creative is weak.',
    subhead:
      'Meta’s automation is genuinely good at finding an audience for whatever you feed it. It has no opinion on whether the ad or the offer underneath is any good — that diagnosis is the part we specialise in.',
    cards: [
      {
        emoji: '🎬',
        title: 'UGC creative testing at scale',
        body: 'A structured pipeline of UGC, on-model, and offer-led angles tested weekly — not one new ad when the old one finally dies. Fresh creative is what actually keeps CPMs down, not audience tricks.',
      },
      {
        emoji: '🩺',
        title: 'Creative-or-offer diagnosis, before we touch targeting',
        body: 'Before any audience change, we isolate whether the account’s problem is creative, offer, or landing page — using controlled tests, not guesswork. Most of the time, it’s not the audience.',
      },
      {
        emoji: '📊',
        title: 'Offer structuring, tested like creative',
        body: 'Bundles, thresholds, and value-stacks tested with the same rigor as ad angles — because the right offer can lift conversion rate more than any targeting change ever will.',
      },
      {
        emoji: '⚙️',
        title: 'CBO and account structure built for pacing',
        body: 'Campaign and budget structure designed so CBO funds tests fairly, not just yesterday’s winner — so new angles get a genuine shot at finding the next scale-up.',
      },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'Everything a stalled Meta ecommerce account needs — nothing it doesn’t',
  servicesSubhead: 'We don’t run Google, LinkedIn, or SEO from this page. This is the Meta-only playbook.',
  services: [
    {
      title: 'UGC & Creative Testing Systems',
      body: 'Structured angle, hook, and format testing — UGC, on-model, flat-lay, founder-led — refreshed on a fixed weekly cadence so the account never runs out of new creative to test.',
    },
    {
      title: 'Creative vs. Offer Diagnosis',
      body: 'Before we touch your audiences, we isolate whether the real problem is the ad, the offer, or the landing page — with controlled tests, not opinions.',
    },
    {
      title: 'Offer & Bundle Structuring',
      body: 'Threshold offers, bundles, and value-stacks designed and tested with the same discipline as ad creative — often the fastest lever available in a stalled account.',
    },
    {
      title: 'Account Structure & CBO Pacing',
      body: 'Campaign architecture and budget pacing rules built so Campaign Budget Optimization funds genuine tests, not just last week’s winner — and so scaling doesn’t reset the learning phase.',
    },
    {
      title: 'Instagram, Reels & Feed Placement Strategy',
      body: 'Placement-specific creative and bidding — a Reels-native cut is not a resized feed ad — so each placement gets creative built for how people actually watch it.',
    },
    {
      title: 'Shopify Landing Page CRO',
      body: 'Product and landing pages optimised for the traffic Meta is already sending — the last mile between a scroll-stopping ad and an actual purchase.',
    },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Meta-only fix that moved ROAS 3.2× in 75 days',
  resultHighlight: {
    label: 'FEATURED CLIENT · META ADS',
    name: 'Sneha Kapoor',
    detail: 'Fashion eCommerce Owner · Meta Ads Rebuild',
    quote:
      'My fashion store was getting traffic but no sales. GE identified it was a creative and offer problem, not an audience problem. New UGC creatives, new offer structure — ROAS went from 1.9x to 6.1x in 75 days. They genuinely care.',
    metrics: [
      { value: '6.1×',    label: 'ROAS (from 1.9×)'                },
      { value: '75 Days', label: 'Time to result'                  },
      { value: 'UGC',     label: 'The lever that actually moved it' },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Meta Account Audit',
      body: 'We pull your ad account and diagnose whether the real problem is creative, offer, audience, or landing page — with data, not a generic checklist.',
    },
    {
      step: '02',
      title: 'Offer & Creative Reset',
      body: 'Before any budget or targeting change, we fix what the audit found — new angles, a tested offer structure, or both. Most stalled accounts need this step, not a new audience.',
    },
    {
      step: '03',
      title: 'UGC Testing at Scale',
      body: 'A structured weekly pipeline of new creative goes live — enough volume that the account always has a next test queued, not just a replacement when the last ad dies.',
    },
    {
      step: '04',
      title: 'Scale on What’s Proven',
      body: 'CBO and budget pacing rules scale the angles and offers that actually win — in controlled steps that don’t reset Meta’s learning phase.',
    },
  ],

  whyUsHeadline: 'A Meta ads agency that diagnoses before it spends',
  whyUs: [
    {
      title: 'We check creative and offer before touching your audience',
      body: 'Most agencies’ first move is an audience tweak. Ours is a diagnosis — because for most stalled accounts we’ve audited, the audience was never the actual problem.',
    },
    {
      title: 'UGC testing built for volume, not vibes',
      body: 'A real weekly creative pipeline, not "we’ll make a new ad when this one dies." Volume is what keeps CPMs down and the algorithm finding fresh demand.',
    },
    {
      title: 'Proof from a real Meta-only rebuild',
      body: 'Sneha Kapoor’s fashion store went from 1.9× to 6.1× ROAS in 75 days — from a creative and offer fix, not a bigger budget or a new audience.',
    },
    {
      title: 'You keep the ad account and the creative library',
      body: 'Everything we build — creative library, offer tests, account structure — is yours. Leave any time and take it all with you.',
    },
  ],

  leadMagnet: {
    type: 'd2c-roas',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What ad budget do you need to hit your revenue goal?',
    subhead: 'Move the sliders to your numbers and see the monthly Meta ad budget it takes to hit your revenue goal.',
    source: 'Calculator — Meta Ads Ecommerce',
    revenueGoal: { label: 'Monthly revenue goal', default: 1500000 },
    aov: { label: 'Average order value (₹)', default: 1800 },
    targetRoas: { label: 'Target ROAS', default: 3 },
    benchmark: 'Benchmark: a well-run Meta-only ecommerce account typically settles into a 3×–6× ROAS once creative and offer are fixed — Sneha Kapoor reached 6.1×. Expect the ratio to run lower for the first 60–90 days while the account learns.',
    formHeadline: 'See your full budget breakdown',
    formSubhead: 'Get your numbers, a Meta ROAS benchmark, and the Sneha Kapoor 6.1× playbook — free, straight to your inbox.',
  },

  faqsHeadline: 'Hiring a Meta ads agency for ecommerce',
  faqs: [
    {
      q: 'Why do you say it’s "usually not an audience problem"?',
      a: 'Because in most stalled accounts we audit, the audience was never actually the bottleneck — the creative had fatigued, or the offer wasn’t compelling enough to convert the traffic Meta was already finding. Audience expansion just shows the same weak ad to more people. We test creative and offer first, before touching targeting.',
    },
    {
      q: 'What does "UGC creative testing at scale" actually mean?',
      a: 'A structured, weekly pipeline of new angles — UGC, on-model, founder-led, offer-led — tested against each other on a fixed cadence. Not "we’ll make something new when the current ad dies." Volume and cadence are what keep CPMs down and the algorithm finding fresh demand.',
    },
    {
      q: 'Do you only run Meta, or Google and other channels too?',
      a: 'This page is our Meta-only service — Facebook, Instagram, and Reels, run as one system. If you want Meta and Google run together as a single full-funnel strategy with blended ROAS reporting, that’s our ecommerce advertising agency service instead.',
    },
    {
      q: 'How fast will we see a result?',
      a: 'Sneha Kapoor’s account moved from 1.9× to 6.1× ROAS in 75 days after a creative and offer reset — that’s a realistic timeline for a genuine rebuild, not a guarantee, since every account’s starting point differs.',
    },
    {
      q: 'What is CBO and why does pacing matter?',
      a: 'Campaign Budget Optimization lets Meta allocate budget across ad sets automatically — which sounds efficient but, without pacing rules, just funds yesterday’s winner and starves new tests. We structure campaigns so new angles and offers get a genuine shot before CBO decides they’ve lost.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'Depends on your current ad spend and account complexity — you’ll get a specific number after the free Meta ads audit, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to find out if it’s really an audience problem?',
    subhead:
      'Book a free Meta ads audit. We’ll diagnose whether your account’s real issue is creative, offer, or targeting — and show you exactly what we’d fix first.',
    ctaLabel: 'Book a Free Meta Ads Audit',
  },

  videoTestimonialsTag: 'HEAR FROM ECOMMERCE FOUNDERS',
  videoTestimonialsHeadline: 'Real Meta rebuilds, real ROAS',
  videoTestimonialsSubhead: 'Tap any short to hear how we fixed their account.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Meta ads clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we help ecommerce brands grow',
    subhead: 'Full-funnel and outcome-specific plays, plus the broader D2C approach.',
    links: [
      {
        label: 'Ecommerce Advertising Agency',
        href: '/ecommerce-advertising-agency',
        blurb: 'Want Meta and Google run together as one full-funnel strategy? Our blended-ROAS playbook.',
      },
      {
        label: 'Ecommerce Scaling Agency',
        href: '/ecommerce-scaling-agency',
        blurb: 'Already past the creative/offer fix and stuck at a ROAS ceiling? How we scale past it.',
      },
      {
        label: 'Meta Ads for Fashion & Apparel D2C',
        href: '/d2c/fashion',
        blurb: 'Fashion-specific: return-adjusted ROAS, seasonal catalogs, and drop-cycle creative.',
      },
      {
        label: 'Performance Marketing for D2C Brands',
        href: '/d2c',
        blurb: 'Our broader D2C performance-marketing approach.',
      },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Meta Ads Lead',
    headline: 'Tell us about your Meta ad account',
    subhead: 'Fill this in and we’ll get back within 24 hours with a no-obligation Meta ads audit.',
    tag: 'LET’S TALK',
  },
}
