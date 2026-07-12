/**
 * All copy and data for the /ecommerce-scaling-agency landing page.
 *
 * NATIONAL outcome-intent BOFU page — buyer: a brand stuck at a ROAS/revenue
 * plateau searching "how to scale shopify ads", "scale ecommerce
 * profitably", "ecommerce scaling agency". Angle is scaling past plateaus
 * without breaking unit economics: margin-protected budget pacing, seasonal
 * peak-window playbooks, incrementality testing — deliberately OUTCOME-
 * scoped, not vertical-scoped, so it does not cannibalize /d2c or
 * /d2c/fashion (which own the "fashion vertical" angle). Sibling pages:
 * /ecommerce-advertising-agency (full-funnel Meta+Google intent) and
 * /meta-ads-agency-for-ecommerce (Meta-only channel intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts — Paraiso (CASE_STUDIES #7) is the featured client, Sable
 * (CASE_STUDIES #8) is supporting proof for the seasonal-peak angle. Note:
 * Paraiso is also the featured client on /d2c and /d2c/fashion (per brief —
 * it is genuinely the strongest "scaled profitably past a plateau" proof GE
 * has) — the resultHighlight quote here is deliberately reworded (not
 * copied) around the scaling-ceiling narrative specifically, to avoid
 * duplicate on-page content while keeping every number identical to the
 * source of truth. No invented clients, quotes, or metrics.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const ECOMMERCE_SCALING_AGENCY_CONTENT: LandingContent = {
  industryLabel: 'Ecommerce Brand (Scaling)',

  hero: {
    badge: 'FOR BRANDS ALREADY PROFITABLE · SCALING WITHOUT BREAKING ROAS',
    headlineLines: ['Ecommerce Scaling Agency', 'For Brands Past the Easy Growth'],
    cyclingWords: [
      'Built for brands stuck at a ceiling.',
      'Built for seasonal peak windows.',
      'Built for margin-protected scaling.',
      'Built for brands past ₹1Cr/month.',
    ],
    subhead:
      'Growth Escalators scales ecommerce brands that are already profitable but stuck — every time you push budget past a certain point, ROAS collapses and the growth stops paying for itself. We scale in controlled steps, protect margin the whole way, and build seasonal peak windows to convert instead of just surviving them. Paraiso grew revenue 6× in 60 days and kept scaling profitably; Sable hit 6.57× ROAS in its Valentine’s peak window against a ~2.5× category average.',
    primaryCta: { label: 'Book a Free Scaling Audit', href: '#lead-form' },
    secondaryCta: { label: 'See How Paraiso Scaled 6× ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '6×',     label: 'Revenue Growth in 60 Days (Paraiso)' },
      { emoji: '🎯', value: '6.57×',  label: 'Peak-Window ROAS (Sable)'            },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad Spend Managed'                    },
    ],
  },

  painPointsTag: 'THE SCALING CEILING',
  painPointsHeadline: 'Why pushing budget harder usually makes a plateau worse, not better',
  painPoints: [
    {
      emoji: '📉',
      title: 'Every budget jump resets the learning phase',
      body: 'Push Meta’s budget up too fast and the algorithm starts re-exploring instead of exploiting what’s already working — CPAs spike right when you needed them to hold, and most teams panic and pull back at exactly the wrong moment.',
    },
    {
      emoji: '🧱',
      title: 'Audience saturation past a certain spend ceiling',
      body: 'The same lookalike and interest stack that worked at ₹5L/month runs out of fresh demand at ₹20L/month. Scaling without expanding the audience architecture just means paying more for the same shrinking pool of buyers.',
    },
    {
      emoji: '🎢',
      title: 'Seasonal peaks either overspend or under-scale',
      body: 'Festive and gifting windows are won or lost in a two-to-three week margin. Most accounts either dump budget into cold traffic and tank ROAS, or scale too cautiously and leave inventory unsold when demand was actually there.',
    },
    {
      emoji: '⚠️',
      title: 'Nobody separates incremental growth from what would have happened anyway',
      body: 'More spend usually means more revenue — the question is whether it’s revenue you wouldn’t have gotten otherwise. Without incrementality testing, "scaling" can just mean paying more to acquire customers who’d have bought regardless.',
    },
  ],

  aiAdvantage: {
    tag: 'THE SCALING LAYER',
    headline: 'Automation will spend your next rupee. It won’t tell you if that rupee is still profitable.',
    subhead:
      'Advantage+ and PMax are built to spend budget efficiently at whatever level you set — they have no opinion on whether spend at that level is still margin-positive, or whether you’re about to hit the ceiling that broke your last scaling attempt.',
    cards: [
      {
        emoji: '📐',
        title: 'Margin-protected budget pacing',
        body: 'Budget moves up in controlled steps — not the 2x jump that resets the learning phase — with a floor on blended ROAS that pauses scaling automatically if margin starts slipping.',
      },
      {
        emoji: '🧭',
        title: 'Incrementality and holdout testing',
        body: 'Geo or audience holdouts that show what spend is actually generating versus what would have converted anyway — so scaling decisions are made on real incremental revenue, not gross platform-reported ROAS.',
      },
      {
        emoji: '🗓️',
        title: 'Seasonal peak-window architecture',
        body: 'Pre-built campaign structures for festive, gifting, and category-specific peaks — audience layering and creative mapped to purchase intent, with pacing that ramps ahead of the window instead of reacting to it.',
      },
      {
        emoji: '🌐',
        title: 'Audience expansion sequencing',
        body: 'A tested order for widening the pool — lookalike tiers, geographic expansion, broader interest layers — so you’re never scaling into an audience that hasn’t been validated yet.',
      },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'Everything a plateaued-but-profitable ecommerce account needs to scale further',
  servicesSubhead: 'Not a launch playbook — this is specifically for brands past the easy growth, looking for the next stage.',
  services: [
    {
      title: 'Margin-Protected Scaling Plans',
      body: 'Budget increase rules calibrated to your account’s actual learning-phase behaviour, with a blended-ROAS floor that automatically slows scaling before margin breaks.',
    },
    {
      title: 'Incrementality & Holdout Testing',
      body: 'Structured geo or audience holdouts that separate incremental revenue from spend that would have converted anyway — the test most "scale it up" advice skips entirely.',
    },
    {
      title: 'Seasonal & Peak-Window Campaigns',
      body: 'Festive, gifting, and category-peak architecture — built and pacing-tested ahead of the window, not improvised once it starts. This is exactly how Sable hit 6.57× ROAS through its Valentine’s peak.',
    },
    {
      title: 'Audience Expansion Sequencing',
      body: 'A tested sequence for widening your buyer pool — lookalike tiers, geo expansion, interest layering — so scale comes from validated new demand, not just more spend on a saturated audience.',
    },
    {
      title: 'Creative Supply for Scale',
      body: 'Scaling spend without scaling creative volume is how CPMs climb. We build the testing pipeline to match your new spend level before you hit it, not after CPAs already spiked.',
    },
    {
      title: 'Blended Attribution & Reporting',
      body: 'Weekly reporting reconciled against real order data, so every scaling decision is made on numbers that match your bank account — not a platform dashboard with an incentive to look good.',
    },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'Two brands, two kinds of ceiling, both broken through',
  resultHighlight: {
    label: 'FEATURED CLIENT · SCALED PROFITABLY',
    name: 'Paraiso',
    detail: 'Fashion D2C · Comfort Wear — Scaling Past a Broken Ceiling',
    quote:
      'Paraiso had already tried to push past its ROAS ceiling before — every time budget went up, ROAS collapsed back toward breakeven and revenue stayed flat. We didn’t scale first; we rebuilt the ICP, the creative testing system, and the pacing rules, then scaled in controlled steps. 60 days later: revenue up 6×, ROAS from 1.9× to 3.2×, and for the first time, scaling that kept working instead of breaking again. It’s still running today.',
    metrics: [
      { value: '6×',    label: 'Revenue growth in 60 days'                  },
      { value: '3.2×',  label: 'ROAS (from 1.9×)'                           },
      { value: 'Live',  label: 'Scaled profitably — still running today'    },
    ],
  },

  process: [
    {
      step: '01',
      title: 'Scaling Diagnostic',
      body: 'We map exactly where your last scaling attempt broke — the spend level ROAS started collapsing at, and whether it was audience saturation, creative fatigue, or a pacing problem.',
    },
    {
      step: '02',
      title: 'Rebuild the Ceiling-Breakers',
      body: 'ICP, audience expansion sequencing, and margin-protected pacing rules get fixed before a single extra rupee of scaling budget goes out.',
    },
    {
      step: '03',
      title: 'Scale in Controlled Steps',
      body: 'Budget increases follow a tested cadence with a blended-ROAS floor — so scaling grows revenue without breaking the unit economics that got you here.',
    },
    {
      step: '04',
      title: 'Build the Next Peak Window',
      body: 'Seasonal and category-peak campaigns get architected and pacing-tested ahead of time, so the next high-CPM window is a growth opportunity, not a gamble.',
    },
  ],

  whyUsHeadline: 'An ecommerce scaling agency built for the plateau, specifically',
  whyUs: [
    {
      title: 'We fix why scaling broke, before we scale again',
      body: 'Most agencies respond to a plateau by pushing the same playbook harder. We diagnose the specific ceiling — saturation, fatigue, or pacing — before a single extra rupee goes out.',
    },
    {
      title: 'Margin-protected, not just revenue-protected',
      body: 'Scaling decisions are bounded by a blended-ROAS floor, not just a revenue target — so growth doesn’t quietly become unprofitable growth.',
    },
    {
      title: 'Proof across two kinds of scaling problem',
      body: 'Paraiso: 6× revenue in 60 days scaling past a broken ceiling, still running profitably today. Sable: 6.57× ROAS in a single Valentine’s peak window against a ~2.5× category average — proof this works for sustained scaling and for winning a short seasonal window.',
    },
    {
      title: 'You own everything you scale',
      body: 'Ad accounts, creative library, audience architecture, and pacing playbooks — all built in your name. Leave any time and the entire scaling system goes with you.',
    },
  ],

  faqsHeadline: 'Hiring an ecommerce scaling agency',
  faqs: [
    {
      q: 'We’ve tried to scale before and it broke — why would this be different?',
      a: 'That’s the exact problem we specialise in. Most scaling attempts break because budget jumps reset Meta’s learning phase, or the audience was already saturated, or nobody was watching margin. We diagnose which of those broke your last attempt before we touch budget again — Paraiso had the same experience before we rebuilt the ICP and pacing rules and got to 6× revenue in 60 days, still scaling profitably today.',
    },
    {
      q: 'What does "margin-protected scaling" actually mean?',
      a: 'Budget increases follow a tested cadence with a blended-ROAS floor built in — if scaling starts eroding margin past that floor, the system slows down automatically instead of chasing revenue at any cost. Growth that breaks your unit economics isn’t growth we’ll recommend.',
    },
    {
      q: 'What is incrementality testing and do we actually need it?',
      a: 'It’s a holdout test (geo or audience) that shows how much of your ad-driven revenue is genuinely incremental versus customers who’d have bought anyway. For brands scaling spend significantly, skipping this means you can’t actually tell if the extra budget is working — we build it in before recommending a bigger scale-up.',
    },
    {
      q: 'Can you help us win a specific seasonal or peak window, not just scale year-round?',
      a: 'Yes — that’s exactly what we did for Sable heading into Valentine’s: a peak-specific architecture with audience layering, gifting-intent creative, and aggressive pacing through the window, which hit 6.57× ROAS against a ~2.5× category average and sold through the season’s inventory early. The same approach works for festive, wedding-season, or any category-specific peak.',
    },
    {
      q: 'At what revenue or spend level should we consider a scaling-focused agency instead of a general one?',
      a: 'If you’re already profitable, already have real spend and order data, and your last few attempts to increase budget hurt ROAS more than they grew revenue — that’s the specific situation this service is built for. If you’re pre-launch or just starting paid ads, our ecommerce advertising agency service is the better fit.',
    },
    {
      q: 'What’s the typical investment?',
      a: 'Depends on your current spend level and scaling goals — you’ll get a specific number after the free scaling diagnostic, not a generic range.',
    },
  ],

  finalCta: {
    title: 'Ready to scale past the ceiling that broke your last attempt?',
    subhead:
      'Book a free scaling diagnostic. We’ll show you exactly where your last scaling attempt broke and what we’d fix before touching budget again — no obligation.',
    ctaLabel: 'Book a Free Scaling Audit',
  },

  videoTestimonialsTag: 'HEAR FROM SCALED FOUNDERS',
  videoTestimonialsHeadline: 'Real ceilings, really broken through',
  videoTestimonialsSubhead: 'Tap any short to hear how we scaled their account.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from ecommerce scaling clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we help ecommerce brands grow',
    subhead: 'Channel-specific plays for brands not ready to scale yet, plus the broader D2C approach.',
    links: [
      {
        label: 'Ecommerce Advertising Agency',
        href: '/ecommerce-advertising-agency',
        blurb: 'Not scaling yet — still building the full-funnel foundation? Start here.',
      },
      {
        label: 'Meta Ads Agency for Ecommerce',
        href: '/meta-ads-agency-for-ecommerce',
        blurb: 'If your ceiling is actually a creative or offer problem, not a scaling problem, this is the fix.',
      },
      {
        label: 'Performance Marketing for D2C Brands',
        href: '/d2c',
        blurb: 'Our broader D2C performance-marketing approach.',
      },
      {
        label: 'Meta Ads for Fashion & Apparel D2C',
        href: '/d2c/fashion',
        blurb: 'Fashion-specific: return-adjusted ROAS, seasonal catalogs, and drop-cycle creative.',
      },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Ecommerce Scaling Lead',
    headline: 'Tell us where your scaling attempt broke',
    subhead: 'Fill this in and we’ll get back within 24 hours with a no-obligation scaling diagnostic.',
    tag: 'LET’S TALK',
  },
}
