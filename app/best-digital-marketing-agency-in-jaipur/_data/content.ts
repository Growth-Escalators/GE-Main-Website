/**
 * All copy and data for the /best-digital-marketing-agency-in-jaipur landing page.
 *
 * Local BOFU money page — comparison/superlative intent ("best digital
 * marketing agency in jaipur"). Deliberately framed around HOW to evaluate
 * an agency (proof, verification, contract risk) rather than restating the
 * service-list copy already on /digital-marketing-agency-jaipur, so the two
 * pages don't cannibalise each other or read as near-duplicates.
 *
 * SOURCE: uniqueIntro/localProof/faqs from lib/money-pages.ts (slug
 * 'best-digital-marketing-agency-in-jaipur'). Pain points, differentiators,
 * and process are written fresh for the comparison angle but every fact
 * (97% retention, 10,000+ campaigns, one-client-per-niche policy, senior-only
 * staffing) is a real, already-published GE claim reused from other pages
 * (see lib/constants.ts AGENCY_FACTS and /performance-marketing-agency-jaipur).
 *
 * PROOF RULE: named client proof is Credo World (B2B Consulting Firm, 0 → 15
 * qualified B2B leads/month, LinkedIn authority + content + Google Ads
 * replaced a referral-only pipeline in 4 months) and Flight Ticket Fare
 * (Travel / lead-gen, CPL ₹380 → ₹94, funnel redesign + WhatsApp automation) —
 * both real CASE_STUDIES from lib/constants.ts. Credo World's quote is
 * synthesised in first-person from the real challenge/solution/results
 * fields (independently worded from the similar quote on
 * /law-firm-marketing-agency-jaipur, which cites the same real client).
 * Nothing is invented. Calculator outputs are labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const BEST_DIGITAL_MARKETING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Digital Marketing',

  hero: {
    badge: 'JAIPUR-BASED · AI-FIRST · 97% CLIENT RETENTION',
    headlineLines: ['Best Digital Marketing', 'Agency in Jaipur'],
    cyclingWords: [
      'Proof, not a pitch deck.',
      'Senior operators, not interns.',
      'Revenue per rupee, not reach.',
      'Verified results, every account.',
    ],
    subhead:
      "Nine out of ten agencies in Jaipur are generalists spread across ten cities. Growth Escalators is 100% India-built, AI-first, and obsessed with one thing: revenue per rupee spent. 97% client retention and 10,000+ campaigns run back the claim — this isn't marketing-speak, it's a track record.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🏆', value: '97%', label: 'Client retention rate' },
      { emoji: '🚀', value: '10,000+', label: 'Campaigns run' },
      { emoji: '⭐', value: '4.9★', label: '187 Google reviews' },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Marketing team reviewing verified campaign results on a dashboard',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What "best" actually looks like when you can verify it',
    subhead:
      'Not a portfolio of logos — live dashboards, weekly numbers, and case studies you can cross-check.',
    images: [
      { src: '/industries/mkt/1.jpg', alt: 'Performance marketing charts and graphs showing campaign results', caption: 'The same dashboard we see, you see' },
      { src: '/industries/mkt/3.jpg', alt: 'Marketing team collaborating around a laptop', caption: 'Senior operators on every account, not interns' },
      { src: '/industries/mkt/5.jpg', alt: 'Content calendar and campaign plan on a screen', caption: 'A written plan you can hold us to' },
    ],
  },

  painPointsTag: 'THE PROBLEM WITH "BEST"',
  painPointsHeadline: "Why it's genuinely hard to pick the right agency in Jaipur",
  painPoints: [
    { emoji: '🏅', title: 'Every agency calls itself "the best"', body: 'It\'s on every website in Jaipur. The claim means nothing without case studies, reviews, and numbers you can actually check.' },
    { emoji: '🖼️', title: 'Portfolios show logos, not outcomes', body: "A wall of client logos tells you who paid them, not what those clients got. Ask for the before/after numbers, not the brand names." },
    { emoji: '🔁', title: 'The founder pitches, a junior executes', body: "You take the sales call with the founder or a senior consultant, then get handed to whoever's free — and your budget becomes their training ground." },
    { emoji: '❓', title: "No way to verify the numbers", body: "\"We grew clients 300%\" is unverifiable marketing copy unless it's tied to a named client, a real metric, and a timeframe." },
    { emoji: '🔒', title: "Locked into a contract before you've seen results", body: "A 12-month lock-in signed before the first campaign even launches means you're stuck even if month one shows nothing." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'The "best" claim, backed by data — not a pitch deck',
    subhead:
      "Every claim on this page ties back to something you can check: a real dashboard, a real client, a real number.",
    cards: [
      { emoji: '📊', title: 'Live client dashboards', body: 'Every retainer client gets a live reporting dashboard — the same numbers we see internally, not a curated monthly PDF.' },
      { emoji: '🧠', title: 'AI lead-scoring on every account', body: 'The same AI qualification workflow runs on every client account, large or small — results aren\'t hand-picked for the pitch.' },
      { emoji: '🎯', title: 'One client per niche, per city', body: "For marketing-heavy engagements we cap ourselves to one client per specialisation per city, so your competitor down the road in Jaipur isn't also our client." },
      { emoji: '✅', title: '97% retention, the same way every quarter', body: "Client retention is measured and reported consistently — it's the number that's hardest to fake in this industry." },
    ],
  },

  servicesTag: "WHY WE'RE DIFFERENT",
  servicesHeadline: 'What actually makes an agency "the best" in Jaipur',
  servicesSubhead: 'Five things you can verify, not five things you have to take our word for.',
  services: [
    { title: 'Senior Operators, Not Interns', body: 'The strategist who pitches you is the strategist (or a peer at the same level) who runs your account. No junior training-ground budgets.' },
    { title: 'Weekly Reporting, Not Monthly Guesswork', body: 'Plain-English weekly numbers and a call to walk through what changed and why — not a dashboard link you get once a month.' },
    { title: 'Performance-Aligned Contracts', body: 'Where the economics support it, engagements can be structured around CPL/CAC targets instead of a flat retainer — skin in the game, not just a bill.' },
    { title: 'AI-First Workflows, Not AI-Curious', body: 'Proprietary AI lead-scoring, creative testing, and content workflows built into every account — the same infrastructure regardless of budget size.' },
    { title: 'A Track Record You Can Cross-Check', body: '10,000+ campaigns and ₹10Cr+ in ad spend managed, with named case studies and real metrics — not aggregate numbers with no source.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A B2B client we took from zero pipeline to a real one',
  resultHighlight: {
    label: 'FEATURED CLIENT · B2B CONSULTING FIRM',
    name: 'Credo World',
    detail: 'B2B Consulting Firm · LinkedIn Authority + Google Ads',
    quote:
      "We had zero digital lead generation — everything ran on referrals. Growth Escalators built our LinkedIn authority, launched a content system, and ran targeted Google Ads. In 4 months we went from 0 inbound leads to 15 qualified ones a month, with deals averaging ₹2.5L.",
    metrics: [
      { value: '0 → 15', label: 'Qualified B2B leads/month' },
      { value: '₹2.5L', label: 'Average deal size' },
      { value: '4 months', label: 'Time to results' },
    ],
  },

  process: [
    { step: '01', title: 'Proof-First Call', body: "Before we pitch anything, we show you the case studies, dashboards, and numbers relevant to your industry — not a generic capability deck." },
    { step: '02', title: 'Custom Growth Blueprint', body: 'Within 7 days, a written 90-day plan scoped to your business — not a templated PDF reused across every prospect.' },
    { step: '03', title: 'Launch & Prove It Weekly', body: "Campaigns go live within 2 weeks. Weekly reporting means you see whether the claims hold up in month one, not month twelve." },
    { step: '04', title: 'Scale Or Walk Away', body: "If the numbers work, we scale together. If they don't, month-to-month terms after the initial period mean you're never locked into an underperforming agency." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that lets you verify the claim',
  whyUs: [
    { title: 'Track record, not talk', body: '₹10Cr+ in ad spend managed across 10,000+ campaigns — real numbers behind the "best" claim, not marketing-speak.' },
    { title: 'A second real result: Flight Ticket Fare', body: 'For Flight Ticket Fare, a travel lead-generation business, we redesigned the funnel and added WhatsApp automation — cost per lead dropped from ₹380 to ₹94 and monthly leads scaled past 500.' },
    { title: 'Jaipur-based, India-wide', body: 'Headquartered in Pratap Nagar, Jaipur, with clients across India — local enough for in-person meetings, experienced enough for scale.' },
    { title: 'Real proof, not just promises', body: '4.9★ across 187 Google reviews and 97% client retention — across 100+ brands, based in Jaipur since 2021.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many leads should your budget realistically bring in?',
    subhead: 'Move the sliders to your numbers — use this to sanity-check what any agency, including us, is promising you.',
    source: 'Calculator — Best Digital Marketing Jaipur',
    unitPlural: 'new customers',
    budget: { label: 'Your monthly marketing budget', default: 50000 },
    value: { label: 'Average value of one customer (₹)', default: 5000 },
    cplLow: 100,
    cplHigh: 500,
    closeRate: 0.25,
    benchmark: 'Benchmark: across our Jaipur client base, qualified leads land at ₹100–₹500 depending on channel and offer, with roughly 1 in 4 becoming a paying customer. Use this range to pressure-test any agency\'s promise, including ours.',
    formHeadline: 'See your full lead & revenue breakdown',
    formSubhead: 'Get your numbers, the verified Jaipur benchmark, and the Credo World case study — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Choosing "the best" digital marketing agency in Jaipur',
  faqs: [
    { q: 'How do I know you\'re actually the "best" and not just claiming it?', a: 'Check our case studies and Google reviews (4.9★) — every number we publish, from ROAS to lead volume, is a real client outcome, not a projection.' },
    { q: 'Will I get the founder or a junior on my account?', a: 'Senior operators only — the same person or level of consultant who scopes your engagement runs it. We staff accounts this way specifically because "founder pitches, junior executes" is the most common complaint about agencies in this market.' },
    { q: 'Do you work with competitors in the same Jaipur industry?', a: "We limit ourselves to one client per specialisation per city for marketing-heavy engagements, so your competitor down the road in C-Scheme won't also be our client." },
    { q: 'What industries have you worked with in Jaipur?', a: 'Healthcare, real estate, F&B, retail, and B2B services are our strongest Jaipur verticals, alongside pan-India D2C and SaaS brands.' },
    { q: 'Is there a contract lock-in?', a: 'Standard retainers run month-to-month after an initial 3-month commitment (enough time to see real data); performance contracts can be structured with shorter notice periods.' },
    { q: 'How do you compare to hiring an in-house marketer instead?', a: 'An in-house hire gives you one person covering ads, SEO, content, and web — usually strong in one and learning the rest. We give you a full team at each specialism for a comparable or lower monthly cost, with no hiring risk.' },
  ],

  finalCta: {
    title: "Ready to see if we're actually the right fit for your Jaipur business?",
    subhead: "Book a free, no-obligation strategy call. We'll show you real numbers relevant to your industry before you commit to anything — proof first, pitch second.",
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Compare our full range of Jaipur services',
    links: [
      { label: 'Digital Marketing Agency in Jaipur', href: '/digital-marketing-agency-jaipur', blurb: 'The full-funnel service breakdown — what we actually deliver.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our paid-ads specialisation — Meta, Google, and YouTube.' },
      { label: 'Social Media Marketing Agency in Jaipur', href: '/social-media-marketing-agency-jaipur', blurb: 'Content systems and community management, organic-first.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Digital Marketing Lead — Jaipur (Best Agency)',
    headline: 'Tell us about your business',
    subhead: 'Share a few details and a real strategist replies within 24 hours — with proof relevant to your industry, not a generic pitch.',
    tag: "LET'S TALK",
  },
}
