/**
 * All copy and data for the /gym-fitness-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("gym marketing
 * agency jaipur", "fitness studio marketing", "yoga studio marketing jaipur").
 * Targets gyms, fitness studios, and yoga/CrossFit centres hiring a local
 * agency to drive membership sign-ups.
 *
 * PROOF RULE: named client proof is Ananya Reddy (Yoga Studio Owner) — real,
 * exact metric from lib/constants.ts ALL_TESTIMONIALS (40 memberships sold out
 * in 30 days). Aggregate stats (₹10Cr+ ad spend, 4.9★/187 reviews, 97%
 * retention, Jaipur HQ) are reused per the approved list. Nothing else is
 * invented. Calculator outputs are labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const GYM_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Fitness',

  hero: {
    badge: 'JAIPUR-BASED · GYM & FITNESS MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Gyms & Fitness Studios in Jaipur'],
    cyclingWords: [
      'Built for gyms.',
      'Built for yoga & pilates studios.',
      'Built for CrossFit & strength boxes.',
      'Built for personal-training brands.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for gyms, fitness studios, and yoga centres. We turn local ads, trial offers, and WhatsApp follow-up into paying members — and keep them longer. We helped one studio sell out 40 memberships in 30 days with a single launch funnel.",
    primaryCta: { label: 'Get a Free Membership Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🏋️', value: '40', label: 'Memberships in 30 days (real studio)' },
      { emoji: '🔁', value: 'Retention', label: 'We market for LTV, not just sign-ups' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/gym/hero.jpg',
      alt: 'People training in a modern Jaipur fitness studio',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full class schedule looks like',
    subhead:
      'Fitness is bought on impulse and kept on habit. The studio that captures the trial and nurtures the member wins both the sign-up and the renewal.',
    images: [
      { src: '/industries/gym/1.jpg', alt: 'Group fitness class in progress', caption: 'Trial offers that fill classes fast' },
      { src: '/industries/gym/2.jpg', alt: 'Trainer coaching a member on form', caption: 'Onboarding that turns trials into members' },
      { src: '/industries/gym/3.jpg', alt: 'Person doing yoga in a calm studio', caption: 'Retention marketing that protects LTV' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why gyms fill in January and empty by March',
  painPoints: [
    { emoji: '📉', title: 'Sign-up spikes, retention slumps', body: 'A New-Year or launch push brings a rush of members who quietly stop coming within weeks. Without an onboarding and retention system, you keep re-buying the same members instead of growing.' },
    { emoji: '💸', title: 'Discount-only marketing that trains bargain hunters', body: 'Endless "50% off" offers attract members who leave the moment the price rises. Without a value-led funnel, you compete on price and erode your own margins.' },
    { emoji: '⏱️', title: 'Trials that never convert', body: 'You give away free trials and day passes, but without instant follow-up and a structured conversion path, most trial-goers never sign up — and you never find out why.' },
    { emoji: '🗺️', title: 'Invisible to nearby members', body: 'People join the gym closest to home or work. If you’re not winning "gym near me" and local map searches with strong reviews, you lose members who literally walk past your door.' },
    { emoji: '📊', title: 'No idea what a member is worth', body: 'You track sign-ups but not member lifetime value or acquisition cost — so you can’t tell how much you can afford to spend to win one, and budgeting is guesswork.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Fitness marketing that thinks in lifetime value',
    subhead:
      "A member is worth far more than their first month. Our AI is built to win trials, convert them, and keep members long enough to actually pay off.",
    cards: [
      { emoji: '🧠', title: 'AI lead-intent scoring', body: 'Every enquiry is scored on real join-intent signals — goal, location, timeline — so your team follows up with the people genuinely ready to commit first.' },
      { emoji: '💬', title: 'Instant WhatsApp trial follow-up', body: 'Automated, personal follow-up the moment someone books a trial — the single biggest lever on trial-to-member conversion.' },
      { emoji: '🔁', title: 'Retention & win-back automation', body: 'AI flags members going quiet and triggers timely nudges and offers, protecting the lifetime value that decides whether your gym is actually profitable.' },
      { emoji: '🎯', title: 'Local demand targeting', body: 'Geo-fenced campaigns that reach people within a few kilometres of your studio, plus review growth to win the "gym near me" decision.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete membership engine for Jaipur gyms & studios',
  servicesSubhead: 'Six services, one promise: more members who join — and stay.',
  services: [
    { title: 'Trial & Membership Campaigns', body: 'Geo-fenced Meta and Google ads with value-led trial offers, targeted to people near your studio in Jaipur — built to fill trials at a cost you can convert profitably.' },
    { title: 'Trial-to-Member Conversion Funnel', body: 'Instant WhatsApp follow-up and a structured conversion path from trial to paid membership — so the trials you pay for actually turn into members.' },
    { title: 'Retention & Win-Back System', body: 'Automated onboarding, check-ins, and win-back offers that keep members active longer — because retention, not just sign-ups, is where fitness profit lives.' },
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation and review growth so you win "gym near me" and locality searches across your part of Jaipur — a compounding, low-cost member source.' },
    { title: 'Content & Community', body: 'A content system built around transformations, classes, and community that keeps your studio top-of-mind and turns members into referrers.' },
    { title: 'Analytics & LTV Tracking', body: 'Proper tracking of member acquisition cost and lifetime value so you know exactly how much you can spend to win a member — and where budget actually pays.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A studio we helped sell out',
  resultHighlight: {
    label: 'FEATURED CLIENT · FITNESS / WELLNESS',
    name: 'Ananya Reddy',
    detail: 'Yoga Studio Owner · Launch Funnel + Local Ads',
    quote:
      "I was nervous about filling my new studio. Growth Escalators built a launch funnel that sold out all 40 memberships in 30 days — I actually had a waitlist. It completely changed how I think about marketing.",
    metrics: [
      { value: '40', label: 'Memberships sold' },
      { value: '30 days', label: 'To sell out' },
    ],
  },

  process: [
    { step: '01', title: 'Membership Audit', body: 'A 45-minute call. We review your trial offers, follow-up, retention, and local presence against how membership demand actually flows for studios like yours.' },
    { step: '02', title: 'Launch & Funnel Plan', body: 'Within 7 days you get a written plan: your trial offer, the targeting and creative, and the trial-to-member conversion and retention systems we’ll build.' },
    { step: '03', title: 'Build & Launch', body: 'Landing pages, tracking, WhatsApp automation, and your first campaigns go live within 14 days — most studios see trial bookings in the first week.' },
    { step: '04', title: 'Optimise Toward Retained Members', body: 'We review cost-per-member and retention — not just sign-ups — and refine offers, follow-up, and win-back flows so each member pays off.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur fitness agency that reports members, not just sign-ups',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we run local, geo-fenced campaigns for the neighbourhoods your members actually live and work in.' },
    { title: 'We market for lifetime value', body: 'We optimise for members who join and stay, not just cheap sign-ups — because retention is where a gym’s profit is really made.' },
    { title: 'Proven with a real studio', body: 'We built the launch funnel that sold out 40 memberships in 30 days for a Jaipur-area yoga studio, with a waitlist to spare.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'membership-ltv',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What is a new member actually worth?',
    subhead: 'Set your membership fee, how long members typically stay, and your monthly goal — see the LTV, the CAC you can afford, and the recurring revenue you’d add.',
    source: 'Calculator — Gym Jaipur',
    fee: { label: 'Monthly membership fee (₹)', default: 2500 },
    retentionMonths: { label: 'Average membership length (months)', default: 8 },
    newMembersGoal: { label: 'New members you want / month', default: 40 },
    cplBenchmark: 150,
    benchmark: 'Benchmark: a healthy fitness business keeps acquisition cost at or below a third of member LTV. Retention is the lever — adding two months of average membership can matter more than cutting ad cost.',
    formHeadline: 'See your full membership breakdown',
    formSubhead: 'Get your LTV maths, the affordable-CAC benchmark, and the sold-out launch playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a gym & fitness marketing agency in Jaipur',
  faqs: [
    { q: 'How much does gym marketing cost with an agency in Jaipur?', a: "It depends on your membership price, capacity, and whether you need a launch push or steady growth. We quote exactly after the free membership audit — most studios start with a trial-campaign + conversion-funnel package before layering retention systems." },
    { q: 'Can you fill a new studio the way you did for the yoga studio?', a: "A launch funnel like the one that sold out 40 memberships in 30 days is exactly what we build for new or relaunching studios — a strong trial offer, tight local targeting, and instant follow-up. Your numbers depend on capacity and price, which the audit establishes." },
    { q: 'How do you improve retention, not just sign-ups?', a: "We build onboarding, check-in, and win-back automations that keep members active longer. Since a member’s value is mostly in the months after month one, retention is where we focus as much as acquisition." },
    { q: 'Will you help us stop competing on discounts?', a: "Yes — we build value-led funnels around your results, community, and trial experience so you attract members who join for the outcome and stay, rather than bargain hunters who leave when the price rises." },
    { q: 'Do you work with yoga, CrossFit, and PT studios, not just gyms?', a: "Yes — gyms, yoga and pilates studios, CrossFit boxes, and personal-training brands each need different offers and messaging, and we structure campaigns accordingly." },
    { q: 'How fast will we see members?', a: "Trial bookings typically start within the first 1-2 weeks once campaigns and follow-up are live. Trial-to-member conversion and retention then improve over the following weeks as we optimise the funnel." },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur studio with members who stay?',
    subhead: "Book a free, no-obligation membership audit. We'll review your trial offer, your follow-up, and your retention — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Membership Audit',
  },

  videoTestimonialsTag: 'HEAR FROM FITNESS CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from gym/studio clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we drive growth',
    links: [
      { label: 'Salon & Spa Marketing in Jaipur', href: '/salon-spa-marketing-agency-jaipur', blurb: 'For appointment-and-membership local businesses.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Ads engineered for ROAS — the core of every campaign.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast membership and booking sites that convert.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Gym/Fitness Lead — Jaipur',
    headline: 'Tell us about your gym or studio',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free membership audit.',
    tag: 'BOOK YOUR FREE MEMBERSHIP AUDIT',
  },
}
