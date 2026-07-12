/**
 * All copy and data for the /saas-marketing-agency landing page.
 *
 * NATIONAL BOFU money page — segment intent, a DIFFERENT motion from the
 * other two pages ("saas marketing agency india", "saas lead generation",
 * "saas performance marketing", "edtech marketing agency"). Angle:
 * product-led / trial-to-paid funnels, CAC:LTV economics, demo-booking
 * funnels, activation, retention/expansion. Deliberately distinct from
 * /b2b-lead-generation-agency (ABM/pipeline economics) and
 * /linkedin-marketing-agency (single-channel intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts. Featured: Priya Mehta (ALL_TESTIMONIALS #5 / TESTIMONIALS
 * #5 — SaaS Founder, CAC dropped 52%, LTV tripled, real verbatim quote used
 * below). Supporting: Kabir Malhotra (ALL_TESTIMONIALS #9 — EdTech Startup
 * Founder, CPL ₹420→₹88 in 6 weeks, sales team 2→20 calls/day, real verbatim
 * quote used below in a whyUs card). Also reuses the real, published
 * "avg 3.2x lead-to-sale conversion in 90 days" (Funnel Marketing &
 * Automation) and "97% retention rate" (STATS_EXTENDED) claims.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SAAS_MARKETING_CONTENT: LandingContent = {
  industryLabel: 'SaaS Marketing',

  hero: {
    badge: 'SAAS & EDTECH SPECIALISTS · 10,000+ CAMPAIGNS RUN',
    headlineLines: ['SaaS Marketing', 'Agency in India'],
    cyclingWords: [
      'Built for trial-to-paid.',
      'Built for PLG funnels.',
      'Built for CAC:LTV.',
      'Built for EdTech enrollment.',
    ],
    subhead:
      "Growth Escalators is a SaaS marketing agency for product-led and sales-assisted SaaS and EdTech companies. We build the funnel from first click to activated, paying customer — demo bookings, trial-to-paid conversion, CAC:LTV economics, and retention. Priya Mehta's SaaS company cut CAC 52% and tripled LTV; an EdTech founder dropped CPL from ₹420 to ₹88 in 6 weeks.",
    primaryCta: { label: 'Book a Free Funnel Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📉', value: '−52%',      label: 'CAC Reduction'          },
      { emoji: '📈', value: '3×',        label: 'LTV Growth'             },
      { emoji: '🎯', value: '₹420→₹88',  label: 'EdTech CPL in 6 Weeks'  },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most SaaS marketing produces signups, not customers',
  painPoints: [
    { emoji: '🪣', title: 'A free trial with no activation plan', body: "You're paying for signups, but most trial users never reach the moment that makes them convert. Acquisition without an activation funnel is just a leaky bucket." },
    { emoji: '💰', title: "CAC nobody's actually tracking against LTV", body: "You know your cost per signup. You don't know your cost per paying, retained customer — which means you can't tell if a channel is actually profitable until it's too late." },
    { emoji: '📅', title: 'Demo bookings that go nowhere', body: "Sales-assisted SaaS lives or dies on demo show-up and close rate, not just booked-call volume. A funnel that fills the calendar with the wrong prospects wastes your sales team's time." },
    { emoji: '🔁', title: 'All acquisition, no retention or expansion', body: 'Most agencies stop at the sale. For SaaS, the real economics are in renewal and expansion revenue — and that requires a completely different set of campaigns from day-one acquisition.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'SaaS growth is a numbers game — AI keeps score in real time',
    subhead:
      "The difference between a good SaaS funnel and a great one is usually invisible without the right tracking. Our AI layer watches product usage and funnel data so we can act on it, not just report it.",
    cards: [
      { emoji: '🧠', title: 'AI product-qualified-lead (PQL) scoring', body: 'We score trial and free users on real usage signals — feature adoption, session frequency, seat invites — so sales and lifecycle campaigns focus on users actually showing buying intent.' },
      { emoji: '📲', title: 'AI-triggered onboarding nudges', body: "Email and WhatsApp nudges triggered by what a user has (or hasn't) done in-product — not a generic day-1/day-3/day-7 drip that ignores actual behavior." },
      { emoji: '🎯', title: 'AI creative testing for demo and trial funnels', body: "Parallel testing across ad angles and landing page variants, with spend concentrated on what's driving activated users — not just cheap signups." },
      { emoji: '⚠️', title: 'AI churn-risk flagging', body: "Usage-drop patterns are flagged before renewal, so retention and expansion campaigns reach the right account while there's still time to save it." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete SaaS growth engine, signup to renewal',
  servicesSubhead: 'Six services, one promise: a funnel that produces activated, paying, retained customers — not just signups.',
  services: [
    { title: 'Demo-Booking & Free-Trial Funnel Build', body: 'Landing pages and funnels engineered for your specific motion — self-serve trial signup or sales-assisted demo booking — built to qualify, not just collect emails.' },
    { title: 'Performance Marketing for CAC:LTV Efficiency', body: 'Google, Meta, and LinkedIn campaigns tracked through to activation and payment, not just signup — so budget moves toward channels that produce real customers.' },
    { title: 'Product-Led SEO & Content', body: "Comparison pages, alternative-to pages, and use-case content that capture bottom-funnel search intent — compounding traffic that's far cheaper than paid over time." },
    { title: 'Onboarding & Activation Sequences', body: 'Email and WhatsApp sequences keyed to real product milestones, designed to move new users to their first meaningful "aha" moment faster.' },
    { title: 'Retention & Expansion Marketing', body: 'Lifecycle campaigns for upsell, cross-sell, and renewal — because for SaaS, the highest-margin revenue comes after the first sale, not during it.' },
    { title: 'EdTech Enrollment & Counselor-Call Funnels', body: 'For EdTech specifically: lead-to-counselor-call funnels built around admission cycles and seasonal intake, not a generic B2C ecommerce funnel.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: "SaaS and EdTech funnels we've rebuilt",
  resultHighlight: {
    label: 'FEATURED CLIENT · SAAS',
    name: 'Priya Mehta',
    detail: 'SaaS Founder · Conversion Funnel Rebuild',
    quote:
      "ROI-focused, data-driven, and creatively brilliant. They built us a conversion funnel that works while we sleep. Our CAC dropped 52% and LTV tripled. Best investment we've made in marketing by a long shot.",
    metrics: [
      { value: '−52%',       label: 'CAC (Priya Mehta, SaaS Founder)'                    },
      { value: '3×',         label: 'LTV growth (Priya Mehta, SaaS Founder)'             },
      { value: '₹420 → ₹88', label: 'CPL in 6 weeks (Kabir Malhotra, EdTech Founder)'    },
    ],
  },

  process: [
    { step: '01', title: 'Funnel & Activation Audit', body: 'A 45-minute call. We map your current signup-to-activation-to-paid funnel, pull your CAC and retention data, and find exactly where users are dropping off.' },
    { step: '02', title: 'Growth Plan', body: "Within 7 days you get a written plan: acquisition channel mix, activation milestones to design around, funnel changes, and the CAC:LTV targets we'll be accountable to." },
    { step: '03', title: 'Build & Launch', body: 'Landing pages, onboarding sequences, and tracking go live within 14 days — instrumented to follow users past signup, not just to it.' },
    { step: '04', title: 'Optimize Toward LTV', body: 'We optimize for activated, paying, retained users — not signups — with monthly reporting on CAC, activation rate, and expansion revenue.' },
  ],
  processHeadline: 'Four steps from signup to renewal',

  whyUsHeadline: 'The SaaS agency that reports CAC:LTV, not signups',
  whyUs: [
    { title: 'We speak CAC:LTV, not vanity signups', body: 'A free trial with no activation plan is just a leaky bucket. We build for the metric that actually matters — activated, paying, retained users.' },
    { title: 'SaaS and EdTech pod, not a generalist team', body: 'Product-led growth, demo-booking funnels, and enrollment cycles are different disciplines from D2C or local-service marketing. We build for how software — and courses — actually get bought.' },
    { title: 'Real SaaS and EdTech proof', body: "“Our cost per lead was killing us at ₹420. GE rebuilt our funnel from scratch — new landing page, new ad copy, new audience strategy. CPL dropped to ₹88 in 6 weeks. Our sales team went from 2 calls a day to 20. Incredible.” — Kabir Malhotra, EdTech Startup Founder" },
    { title: '97% client retention — we live the metric we sell you', body: "We keep 97% of our own clients. Retention economics aren't theoretical for us — they're how we run our own business." },
  ],

  faqsHeadline: 'Hiring a SaaS marketing agency',
  faqs: [
    { q: 'Do you work with product-led (self-serve) or sales-assisted SaaS?', a: 'Both. For self-serve/PLG products we focus on trial-to-paid conversion and in-product activation triggers. For sales-assisted SaaS, we build demo-booking funnels and route PQLs to your sales team. Many of our clients run a hybrid of both.' },
    { q: 'What\'s a "PQL" and do you actually track it?', a: 'A product-qualified lead — a free or trial user showing real usage-based buying intent (feature adoption, session frequency, seat invites), as opposed to just signing up. We build this scoring into your funnel so sales and lifecycle campaigns focus on the right users.' },
    { q: 'Can you help with demo-booking funnels specifically?', a: 'Yes — landing pages, ad campaigns, and follow-up sequences engineered around demo show-up and close rate, not just booked-call volume.' },
    { q: 'How do you actually think about CAC:LTV?', a: "We agree target CAC and expected LTV with you before launch, then track spend through to activation and payment — not just signup — so we can tell you honestly which channels are profitable and which aren't." },
    { q: 'Do you work with EdTech specifically, or just SaaS?', a: "Both — EdTech funnels (lead to counselor call to enrollment) share a lot of DNA with SaaS trial-to-paid funnels. Kabir Malhotra's EdTech startup dropped CPL from ₹420 to ₹88 in 6 weeks working with us, and his sales team went from 2 calls a day to 20." },
    { q: 'Can you help with retention and expansion, not just new signups?', a: 'Yes — lifecycle campaigns for onboarding, upsell, cross-sell, and renewal. For SaaS, the highest-margin revenue is usually in expansion and renewal, not the first sale, so we build for that from the start.' },
    { q: 'How soon will we see trial-to-paid conversion improve?', a: 'Funnel and tracking changes go live within 2 weeks. Because SaaS trial cycles vary (7–30+ days), meaningful conversion-rate movement is typically visible within one to two full trial cycles after launch.' },
  ],

  finalCta: {
    title: 'Ready to fix your trial-to-paid funnel?',
    subhead: "Book a free, no-obligation funnel audit. We'll review your acquisition, activation, and retention data — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Funnel Audit',
  },

  videoTestimonialsTag: 'HEAR FROM SAAS FOUNDERS',
  videoTestimonialsHeadline: 'Real SaaS and EdTech founders, real funnels',
  videoTestimonialsSubhead: 'Tap any short to hear how SaaS and EdTech founders talk about their funnel.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from SaaS / EdTech clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for SaaS and EdTech growth',
    links: [
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'For B2B SaaS specifically — ABM, ICP targeting, and pipeline value.' },
      { label: 'LinkedIn Marketing Agency', href: '/linkedin-marketing-agency', blurb: 'Founder-led LinkedIn growth — a common channel for SaaS demand gen.' },
      { label: 'Our Services', href: '/services', blurb: 'The full stack: ads, funnels, web, SEO, and branding.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New SaaS Marketing Lead',
    headline: 'Tell us about your funnel',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free funnel audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
