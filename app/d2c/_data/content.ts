/**
 * All copy and data for the /d2c landing page.
 *
 * EDIT this file to change anything visible on the page.
 * Page composition lives in app/d2c/page.tsx.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const D2C_CONTENT: LandingContent = {
  industryLabel: 'D2C Brand',

  hero: {
    badge: '₹10CR+ AD SPEND MANAGED · 97% CLIENT RETENTION',
    headlineLines: ['Higher ROAS.', 'Scaled Profitably.'],
    cyclingWords: ['Built for D2C brands.', 'Built for Shopify stores.', 'Built for e-commerce.', 'Built for founders.'],
    subhead:
      "We help D2C brands that are stuck at a plateaued ROAS scale profitably again — by rebuilding the account, not running the same playbook harder.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📊', value: '10,000+', label: 'Campaigns Run'   },
      { emoji: '💰', value: '₹10Cr+',  label: 'Ad Spend Managed' },
      { emoji: '🤝', value: '97%',     label: 'Client Retention' },
    ],
  },

  painPointsHeadline: "What's really stalling your growth",
  painPoints: [
    { emoji: '📉', title: 'ROAS plateaued or declining', body: "You're already spending real money on ads — it's just not producing the returns it used to. Scaling further only makes it worse." },
    { emoji: '🎨', title: 'Creative fatigue',            body: 'The same 4-5 ad concepts have been running for months. CPMs are rising, CTR is decaying, and nothing new is in the testing pipeline.' },
    { emoji: '🕳️', title: 'Account structure leaking spend', body: "Dead audiences, unclear budget allocation between cold and retargeting, and no clean attribution — so you can't tell what's actually working." },
    { emoji: '⚠️', title: 'Scaling breaks the unit economics', body: 'Every time you push budget up, ROAS drops faster than revenue grows. The account wasn’t built to scale in the first place.' },
  ],

  aiAdvantage: {
    tag: 'WHY THIS ISN’T JUST MEDIA BUYING',
    headline: "Meta's own AI already runs your ads. That's the problem, not the solution.",
    subhead:
      "Advantage+ optimizes whatever you feed it — it doesn't fix fatigued creative, wrong ICP targeting, broken attribution, or a landing page that doesn't convert. That's exactly the layer we own.",
    cards: [
      { emoji: '🎯', title: 'Full-funnel ownership, not just media spend', body: "We rebuild the account from ICP up — targeting, creative testing systems, budget pacing, and landing-page CRO — the parts pure media buying and Advantage+ don't touch." },
      { emoji: '🔬', title: 'Systematic creative testing, not guesswork', body: 'Structured angle/hook testing across cold, warm, and hot audiences on a fixed cadence — so fresh creative keeps feeding the account instead of fatiguing silently.' },
      { emoji: '📐', title: 'Attribution you can actually trust',        body: "We reconcile ad-platform numbers against your real payment/order data before making a single scaling decision — not the other way around." },
      { emoji: '⚙️', title: 'Disciplined, rules-based scaling',          body: 'Budget increases follow a tested cadence (not impulsive jumps), so scaling spend doesn’t break the unit economics that got you here.' },
    ],
  },

  servicesHeadline: 'Everything a plateaued D2C account actually needs',
  servicesSubhead: 'Not a service supermarket — the specific things that move ROAS when it’s stuck.',
  services: [
    { title: 'Meta Ads Account Rebuilds',    body: 'Full ICP, audience architecture, and campaign-structure rebuild for accounts that have plateaued — not incremental tweaks to what’s already broken.' },
    { title: 'Creative Testing Systems',     body: 'Structured angle/hook/format rotation across cold, warm, and hot temperatures, so fresh creative keeps feeding the account instead of fatiguing silently.' },
    { title: 'Shopify CRO',                  body: 'Landing-page and PDP conversion optimization so more of the traffic you’re already paying for actually converts.' },
    { title: 'Attribution & Reconciliation', body: 'Ad-platform data checked against real payment/order data before any scaling decision — critical for stores using non-standard checkout flows.' },
    { title: 'Catalog & Inventory Alignment', body: 'Making sure ad spend follows what’s actually in stock and actually converting — not the reverse.' },
    { title: 'Google Ads (Shopping / PMax)',  body: 'Search and Shopping-led Performance Max, sequenced in once Meta is healthy and the product feed is clean.' },
  ],

  resultsHeadline: 'D2C brands we’ve helped scale',
  resultHighlight: {
    label: 'FEATURED CLIENT',
    name: 'Paraiso',
    detail: 'Fashion D2C · Comfort Wear',
    quote: 'Stuck at a ~1.9× ROAS with revenue flat, creative fatigued, and every scaling attempt breaking the unit economics — rebuilt from the ground up.',
    metrics: [
      { value: '3.2×',  label: 'ROAS (up from 1.9×)'     },
      { value: '6×',    label: 'Revenue growth in 60 days' },
      { value: 'Live',  label: 'Scaled profitably — still running today' },
    ],
  },

  process: [
    { step: '01', title: 'Account Diagnostic',   body: "A free audit of your current account — where spend is leaking, why ROAS plateaued, and what we'd rebuild first." },
    { step: '02', title: 'Rebuild the Foundation', body: 'ICP targeting, audience architecture, and attribution get fixed before a single rupee of new scaling spend goes out.' },
    { step: '03', title: 'Systematic Testing',    body: 'Structured creative and angle testing across cold/warm/hot, on a fixed cadence — not one-off campaigns.' },
    { step: '04', title: 'Scale What’s Proven', body: 'Disciplined, rules-based budget increases on the winners — so scaling grows ROAS instead of breaking it.' },
  ],

  whyUs: [
    { title: 'Single wedge, not a bundle',    body: "We don't sell a service supermarket. Performance marketing for D2C is the specific thing we do, backed by real, named results." },
    { title: 'Full-funnel ownership',         body: "We own attribution and landing-page conversion, not just ad spend — the parts of the funnel that are actually defensible against AI-automated media buying." },
    { title: 'Proof, not promises',           body: 'Real before/after numbers from real accounts — not vague case-study language.' },
    { title: 'Built for the plateau, specifically', body: "Most agencies are built to launch new accounts. We specialize in accounts that already have spend and data, and are stuck." },
  ],

  faqs: [
    { q: 'We’ve been burned by an agency before — why would this be different?', a: "Fair — that's the most common thing we hear. We don't ask you to take our word for it: real before/after numbers (like Paraiso's 1.9×→3.2× ROAS), a full-account-rebuild approach instead of just managing your existing ads, and a transparent reporting cadence so results are visible, not taken on faith." },
    { q: 'Your pricing seems high compared to other agencies.', a: "We're not pricing media buying — that's commoditizing fast under tools like Meta Advantage+. You're paying for the attribution layer and full-funnel ownership that produces the ROAS multiple, which is what most agencies don't actually do." },
    { q: 'What makes you different from every other performance marketing agency?', a: 'We rebuild the account — ICP, creative testing systems, budget pacing, and CRO — instead of running the same playbook harder on what’s already broken. Proof over adjectives: ask us for the numbers.' },
    { q: 'Why not just use Meta’s Advantage+ ourselves instead of paying an agency?', a: "Advantage+ optimizes whatever you feed it. It doesn't fix fatigued creative, wrong ICP, broken attribution, or a landing page that doesn't convert — the upstream work that actually moves ROAS." },
    { q: 'Will this work for my specific category, not just fashion?', a: "Our proof spans different situations, not one lucky niche — a fashion brand with a ROAS plateau, and a seasonal/gifting brand needing to win a single high-CPM peak window. The method is what's being proven, not a category." },
    { q: 'What’s the typical investment?', a: 'Depends on ad spend scale and scope — get in touch for a specific number after the diagnostic call, not a generic range.' },
  ],

  finalCta: {
    title: 'Ready to get off the plateau?',
    subhead: "Book a free account diagnostic. We'll tell you exactly what's leaking spend and what we'd rebuild first — no obligation.",
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM D2C FOUNDERS',
  videoTestimonialsHeadline: 'Real brands, real numbers',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them scale.',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. See lib/youtube.ts for accepted formats.
    // Until populated, the section renders a friendly empty-state message.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New D2C Lead',
    headline: 'Tell us about your brand',
    subhead: "Fill this in and we'll get back within 24 hours with a no-obligation account diagnostic.",
    tag: "LET'S TALK",
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'By category, and the playbooks behind the work',
    subhead: 'Specialized pages and the frameworks we apply to every D2C account.',
    links: [
      { label: 'Meta ads for fashion & apparel brands', href: '/d2c/fashion', blurb: 'Return-adjusted ROAS, seasonal catalogs, and drop-cycle creative — performance marketing built for fashion.' },
      { label: 'Scaling Meta ROAS past the plateau', href: '/blog/meta-ads-for-d2c-brands-scale-roas-past-plateau', blurb: 'The four-part account rebuild framework behind our results.' },
      { label: 'CAC vs LTV: the only ad-spend math that matters', href: '/blog/cac-vs-ltv-ecommerce-ad-spend-math', blurb: 'The unit-economics ratio that decides if your spend works.' },
      { label: 'The creative testing framework for D2C', href: '/blog/creative-testing-framework-d2c-performance-marketing', blurb: 'Angles, hooks, cadence, and kill criteria.' },
      { label: 'Google Ads vs Meta for ecommerce in 2026', href: '/blog/google-ads-vs-meta-ecommerce-2026', blurb: 'What each channel is actually good at, and the sequencing that works.' },
      { label: 'How much should a D2C brand spend on ads?', href: '/blog/how-much-should-d2c-brand-spend-on-ads-by-revenue-stage', blurb: 'Budget bands by revenue stage.' },
    ],
  },
}
