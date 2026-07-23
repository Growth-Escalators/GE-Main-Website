/**
 * All copy and data for the /social-media-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("social media
 * marketing agency jaipur", "instagram marketing agency jaipur"). Organic
 * content + community-management specific, distinct from the paid-ads focus
 * of /performance-marketing-agency-jaipur and the broader multi-channel
 * /digital-marketing-agency-jaipur.
 *
 * SOURCE: uniqueIntro/localProof/faqs from lib/money-pages.ts (slug
 * 'social-media-marketing-agency-jaipur'); painPoints/services/process/whyUs
 * from lib/local-services.ts (slug 'social-media-marketing' — note this
 * service entry has no aiAdvantage block in the source, so this page
 * correctly omits that optional section rather than inventing one).
 *
 * PROOF RULE: featured client is Dr. Mukesh Sharma (Healthcare / Personal-
 * Brand engagement, 0 → 8,200 LinkedIn followers, 12 inbound consultation
 * requests/month, featured in 2 publications — real CASE_STUDIES #3 from
 * lib/constants.ts; quote synthesised in first person from the real
 * challenge/solution/results fields). Yellow Diaries (0 → 12,400 Instagram
 * followers in 5 months, 3x walk-ins) is used as supporting proof in whyUs —
 * deliberately NOT re-using the full quote block already featured on
 * /digital-marketing-agency-jaipur, so the two linked sibling pages don't
 * read as near-duplicates. Aggregate stats (4.9★/187 reviews, 97% retention,
 * Jaipur HQ) are reused per the approved list. Calculator outputs are
 * labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SOCIAL_MEDIA_MARKETING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Social Media',

  hero: {
    badge: 'JAIPUR-BASED · SOCIAL MEDIA & CONTENT SPECIALISTS',
    headlineLines: ['Social Media Marketing', 'Agency in Jaipur'],
    cyclingWords: [
      'Content that compounds.',
      'Community that converts.',
      'Reels that stop the scroll.',
      'Followers into customers.',
    ],
    subhead:
      "Posting three times a week isn't a social media strategy — it's a habit. Growth Escalators builds content systems: platform-specific creative, a real calendar, and community management that compounds followers into customers. Our Jaipur clients have gone from a blank Instagram grid to 10,000+ engaged followers within months.",
    primaryCta: { label: 'Book a Free Content Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📸', value: '0 → 12,400', label: 'Instagram followers in 5 months (Yellow Diaries)' },
      { emoji: '💼', value: '0 → 8,200', label: 'LinkedIn followers (Dr. Mukesh Sharma)' },
      { emoji: '⭐', value: '4.9★', label: '187 Google reviews' },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Content creator planning a social media calendar on a laptop',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a real content system looks like',
    subhead:
      'Not a random post here and there — a calendar, a production pipeline, and a community someone is actually managing.',
    images: [
      { src: '/industries/mkt/4.jpg', alt: 'Content team planning a social calendar around a table', caption: 'A monthly calendar built around real pillars' },
      { src: '/industries/mkt/1.jpg', alt: 'Growth charts trending upward on a screen', caption: 'Followers that compound, not spike and fade' },
      { src: '/industries/mkt/2.jpg', alt: 'Analytics dashboard showing content performance', caption: 'Tracked against enquiries, not just likes' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: "Why your social media isn't turning into customers",
  painPoints: [
    { emoji: '📱', title: 'Posting with no strategy', body: "Random posts a few times a month don't build an audience — they just fill a grid without any plan behind it." },
    { emoji: '📉', title: 'Flat or shrinking engagement', body: "Follower count is stuck and the algorithm seems to be showing your content to fewer people every month." },
    { emoji: '🎬', title: 'No time or skill to shoot content', body: "You know video is where the attention is, but nobody in-house can script, shoot, and edit consistently." },
    { emoji: '🤷', title: "No idea if it's actually working", body: "You post consistently but can't tell if any of it is driving enquiries, bookings, or sales." },
  ],

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete content engine for Jaipur brands',
  servicesSubhead: 'Five services, one promise: followers that compound into customers, not a bigger vanity number.',
  services: [
    { title: 'Content Strategy & Calendar', body: 'A monthly content plan built around 3-4 pillars specific to your brand and audience — never generic filler posts.' },
    { title: 'Graphic Design & Reels', body: "Scroll-stopping static creative and short-form video, produced in-house and optimized for each platform's format." },
    { title: 'Reel Scripting & Editing', body: "Hooks, pacing, and captions engineered for retention — the first 3 seconds get as much attention as the whole rest of the edit." },
    { title: 'Community Management', body: 'Comments and DMs handled promptly and on-brand, so engagement compounds instead of going ignored.' },
    { title: 'Analytics & Monthly Reporting', body: "Clear reporting on what grew, what converted, and what we're changing next month — not just a follower count screenshot." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A personal brand we built from zero followers',
  resultHighlight: {
    label: 'FEATURED CLIENT · HEALTHCARE PERSONAL BRAND',
    name: 'Dr. Mukesh Sharma',
    detail: 'Healthcare / Personal-Brand Engagement · LinkedIn Content System',
    quote:
      "I needed to build authority online and turn that into actual consultation requests — not just followers. Growth Escalators built my LinkedIn personal-brand system and a thought-leadership content strategy from scratch. I went from zero LinkedIn followers to 8,200, now get 12 inbound consultation requests a month, and picked up coverage in two publications along the way.",
    metrics: [
      { value: '0 → 8,200', label: 'LinkedIn followers' },
      { value: '12/month', label: 'Inbound consultation requests' },
      { value: '2', label: 'Publication features' },
    ],
  },

  process: [
    { step: '01', title: 'Content Audit & Positioning', body: "We review what's posted so far (if anything), your competitors, and where your audience actually spends time." },
    { step: '02', title: 'Content Calendar & Pillars', body: 'A monthly calendar built around 3-4 content pillars, so every post has a job to do, not just a slot to fill.' },
    { step: '03', title: 'Production', body: 'Scripting, shooting, editing, and design — done in-house, not outsourced to a rotating cast of freelancers.' },
    { step: '04', title: 'Community & Reporting', body: "We manage comments and DMs, then report monthly on what grew, what converted, and what we're changing next." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that builds a content system, not a posting habit',
  whyUs: [
    { title: 'Platform-specific strategy', body: "Instagram, LinkedIn, and YouTube Shorts each get their own content plan — we don't repost the same asset everywhere and call it a strategy." },
    { title: 'In-house production', body: 'Scripting, shooting, and editing handled by our own creative team, so quality and turnaround stay consistent.' },
    { title: 'A second real result: Yellow Diaries', body: 'For Yellow Diaries, a café brand with zero online presence, our content system — reels, carousels, and community management — took them to 12,400 Instagram followers in 5 months and tripled walk-in traffic.' },
    { title: 'Growth tied to business outcomes', body: 'Follower count is a vanity metric on its own — we track it alongside enquiries, bookings, and sales it actually drives.' },
    { title: 'Real proof, not just promises', body: '4.9★ across 187 Google reviews and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many enquiries can a content system realistically bring in?',
    subhead: 'Move the sliders to your numbers and see the enquiry volume a consistent content system can realistically drive.',
    source: 'Calculator — Social Media Marketing Jaipur',
    unitPlural: 'inbound enquiries',
    budget: { label: 'Your monthly content + boosting budget', default: 30000 },
    value: { label: 'Average value of one customer (₹)', default: 4000 },
    cplLow: 150,
    cplHigh: 700,
    closeRate: 0.2,
    benchmark: 'Benchmark: a well-run organic content system with modest boosting in Jaipur typically lands enquiries at ₹150–₹700 each, with about 1 in 5 converting — organic builds the trust that makes the conversion happen at all.',
    formHeadline: 'See your full content-to-customer breakdown',
    formSubhead: 'Get your numbers, the Jaipur benchmark, and the Yellow Diaries case study — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a social media marketing agency in Jaipur',
  faqs: [
    { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, and YouTube Shorts are our core platforms — we pick the mix based on where your audience actually spends time, not every platform by default.' },
    { q: 'Do you handle filming and editing, or just strategy?', a: 'Both — scripting, shooting (in-house for local clients), editing, and posting are all included, along with the strategy behind it.' },
    { q: 'Do you shoot content locally in Jaipur?', a: 'Yes — for Jaipur-based clients we shoot on location (stores, clinics, offices) rather than relying only on stock or remote UGC, which noticeably lifts engagement for local audiences.' },
    { q: 'How often will you post?', a: 'Cadence depends on the plan, typically 3–5 feed posts and 4–7 Reels/Shorts per week, backed by a monthly content calendar you approve in advance.' },
    { q: 'Can social media alone generate leads, or do I need ads too?', a: "Organic builds trust and brand recall; for predictable lead volume we usually pair it with a modest ad budget. We'll tell you honestly if organic alone is enough for your goals." },
    { q: 'How much does social media marketing cost in Jaipur?', a: "It depends on the number of platforms, posting cadence, and whether you need paid boosting alongside organic content. We quote exactly after a free content audit — most Jaipur clients start with a single-platform content system and scale from there." },
  ],

  finalCta: {
    title: 'Ready to turn your social presence into an actual content system?',
    subhead: "Book a free, no-obligation content audit. We'll review your current posts, competitors, and platform mix — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Content Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways to grow in Jaipur',
    links: [
      { label: 'Digital Marketing Agency in Jaipur', href: '/digital-marketing-agency-jaipur', blurb: 'The full-funnel service breakdown — ads, SEO, funnels, and web.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our paid-ads specialisation — Meta, Google, and YouTube.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Social Media Lead — Jaipur',
    headline: 'Tell us about your brand',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free content audit.',
    tag: 'BOOK YOUR FREE CONTENT AUDIT',
  },
}
