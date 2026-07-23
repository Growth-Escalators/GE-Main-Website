/**
 * All copy and data for the /digital-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("digital
 * marketing agency jaipur", "online marketing agency jaipur"). This is the
 * umbrella service page (ads + SEO + funnels + social + web, one team) —
 * complements the narrower /performance-marketing-agency-jaipur (paid ads
 * only) and /social-media-marketing-agency-jaipur (organic/content only)
 * without cannibalising either.
 *
 * SOURCE: uniqueIntro/localProof/faqs from lib/money-pages.ts (slug
 * 'digital-marketing-agency-jaipur'); painPoints/aiAdvantage/services/process
 * from lib/local-services.ts (slug 'digital-marketing').
 *
 * PROOF RULE: named client proof is Yellow Diaries (F&B/café brand, 0 →
 * 12,400 Instagram followers in 5 months, 3x walk-ins, #1 Google rank for
 * local café terms) and Exzept (Fashion eCommerce, ROAS 1.8x → 5.2x, +₹8L
 * revenue in 90 days) — both real CASE_STUDIES from lib/constants.ts.
 * Quotes are synthesised in first-person from the real
 * challenge/solution/results fields (same method used for Credo World on
 * /law-firm-marketing-agency-jaipur), not invented. Aggregate stats (₹10Cr+
 * ad spend, 4.9★/187 reviews, 97% retention, Jaipur HQ) are reused per the
 * approved list. Calculator outputs are labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const DIGITAL_MARKETING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Digital Marketing',

  hero: {
    badge: 'JAIPUR-BASED · FULL-FUNNEL DIGITAL MARKETING',
    headlineLines: ['Digital Marketing Agency', 'in Jaipur'],
    cyclingWords: [
      'Ads that convert.',
      'SEO that compounds.',
      'Social that builds trust.',
      'One team, every channel.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based digital marketing agency running performance ads, SEO, funnels, and social strategy under one team — no handoffs between five different freelancers. We've managed ₹10Cr+ in ad spend and delivered measurable revenue growth for D2C, healthcare, and B2B brands, with the same rigor applied to Jaipur businesses.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '5.2×', label: 'ROAS achieved (Exzept)' },
      { emoji: '📱', value: '12,400+', label: 'Followers in 5 months (Yellow Diaries)' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Marketing analytics dashboard showing performance metrics',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What one team, every channel actually looks like',
    subhead:
      'Ads, SEO, social, and web working off the same data — not five vendors sending five different reports.',
    images: [
      { src: '/industries/mkt/2.jpg', alt: 'Analytics dashboard displayed on a computer screen', caption: 'Every channel accountable to one number' },
      { src: '/industries/mkt/4.jpg', alt: 'Marketing team planning a campaign around a table', caption: 'Strategy, creative, and media under one roof' },
      { src: '/industries/mkt/5.jpg', alt: 'Content calendar and campaign plan on a screen', caption: 'A 90-day plan, not a one-off boost' },
    ],
  },

  painPointsHeadline: "Why Jaipur businesses stay busy but growth stays flat",
  painPoints: [
    { emoji: '😕', title: 'Leads are inconsistent', body: "Some months you're flooded with enquiries, other months it's silence. There's no repeatable system driving demand." },
    { emoji: '💸', title: 'Spending without a strategy', body: 'Boosted posts and one-off campaigns burn budget without a funnel behind them to convert clicks into customers.' },
    { emoji: '🌐', title: "A website that doesn't sell", body: "Your site looks fine but doesn't rank, doesn't load fast, and doesn't turn visitors into leads." },
    { emoji: '📉', title: "No visibility into what's working", body: "You can't tell which channel — Meta, Google, SEO — is actually driving revenue, so budget keeps getting spread thin." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'AI-first agency, not AI-curious',
    subhead: "While most agencies are still figuring out ChatGPT, we've built proprietary AI workflows into every campaign. The result: faster decisions, lower costs, better results.",
    cards: [
      { emoji: '🧠', title: 'AI lead-scoring & qualification', body: 'Every enquiry is scored by intent and fit before it reaches your team, so you spend time only on leads ready to buy.' },
      { emoji: '✍️', title: 'AI-assisted SEO content', body: 'We rank you for hundreds of long-tail searches competitors miss — content drafted with AI, edited and fact-checked by humans.' },
      { emoji: '🎯', title: 'Smart-bid creative testing', body: 'Our workflow rotates 20-30 ad creatives in parallel and concentrates spend on winners within days, not weeks.' },
      { emoji: '💬', title: 'AI WhatsApp pre-screening', body: 'New leads get an instant AI-driven conversation that qualifies budget, urgency, and fit before a human follows up.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete digital marketing engine for Jaipur businesses',
  servicesSubhead: 'Five services, one team, one promise: predictable growth, not vanity metrics.',
  services: [
    { title: 'Performance Marketing', body: 'Meta, Google, and YouTube campaigns engineered to convert, not just get impressions. Average 30% CPL reduction within 60 days.' },
    { title: 'Funnel Marketing & Automation', body: 'Every touchpoint engineered from cold stranger to loyal buyer, fully automated. Clients see a 3.2x lift in lead-to-sale conversion within 90 days.' },
    { title: 'Website Development', body: 'Fast, conversion-optimized websites built to rank and built to sell. Average 67% page speed improvement and 40% more time-on-site.' },
    { title: 'Social Media Marketing', body: 'Content that stops the scroll and a strategy that builds the audience. Average 300% engagement increase within 90 days.' },
    { title: 'SEO', body: 'Rank for what your customers are already searching. Average 200% organic traffic increase within 6 months.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Jaipur-relevant brand we took from zero to a real audience',
  resultHighlight: {
    label: 'FEATURED CLIENT · F&B / CAFÉ BRAND',
    name: 'Yellow Diaries',
    detail: 'F&B / Café Brand · Branding + Social + Local SEO',
    quote:
      "We had zero digital presence — no social following, no local search visibility. Growth Escalators built our brand identity, launched a complete social media system, and optimised our local SEO. In 5 months we went from zero Instagram followers to 12,400, walk-in customers tripled, and we now rank #1 for local café searches.",
    metrics: [
      { value: '0 → 12,400', label: 'Instagram followers in 5 months' },
      { value: '3x', label: 'Walk-in customer increase' },
      { value: '#1', label: 'Google rank for local café terms' },
    ],
  },

  process: [
    { step: '01', title: 'Discovery', body: 'We audit your brand, your market, your competitors. We find the gap.' },
    { step: '02', title: 'Strategy', body: 'A custom 90-day growth blueprint. No templates. No guesswork.' },
    { step: '03', title: 'Execution', body: 'Our team deploys across every channel simultaneously. Speed is the strategy.' },
    { step: '04', title: 'Optimization', body: 'Weekly reporting. Real-time adjustments. We chase performance, not comfort.' },
    { step: '05', title: 'Escalation', body: "When results hit, we double down. Scale what works. Kill what doesn't." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that runs every channel under one roof',
  whyUs: [
    { title: 'One team, every channel', body: 'Ads, SEO, social, and web all sit under one roof — no handoffs, no blaming "the other agency" when something underperforms.' },
    { title: 'AI-first, not AI-curious', body: 'Proprietary AI workflows built into lead scoring, creative testing, and content — faster decisions, lower cost per result.' },
    { title: 'A second real result: Exzept', body: 'For Exzept, a fashion eCommerce brand, we took ROAS from 1.8x to 5.2x and added ₹8L in revenue within 90 days through a full-funnel rebuild — the same one-team approach behind every Jaipur engagement.' },
    { title: 'Jaipur-based, India-wide', body: 'Headquartered in Pratap Nagar, Jaipur, with clients across India — local enough for in-person meetings, experienced enough for scale.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many leads can your marketing budget bring in?',
    subhead: 'Move the sliders to your numbers and see the leads and revenue your budget can realistically drive.',
    source: 'Calculator — Digital Marketing Jaipur',
    unitPlural: 'new customers',
    budget: { label: 'Your monthly marketing budget', default: 50000 },
    value: { label: 'Average value of one customer (₹)', default: 5000 },
    cplLow: 100,
    cplHigh: 500,
    closeRate: 0.25,
    benchmark: 'Benchmark: well-run digital marketing in Jaipur brings qualified leads at roughly ₹100–₹500 each, with about a quarter converting to a paying customer.',
    formHeadline: 'See your full lead & revenue breakdown',
    formSubhead: 'Get your numbers, the Jaipur benchmark, and our full-funnel playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a digital marketing agency in Jaipur',
  faqs: [
    { q: 'Do you only work with Jaipur businesses?', a: "No — we're headquartered in Jaipur and serve clients pan-India, but we do have deep experience with the local market: Jaipur retail, hospitality, healthcare, and real estate businesses specifically." },
    { q: 'What channels does a digital marketing agency actually cover?', a: 'For us: performance ads (Meta/Google), SEO, social media, funnels/automation, and website development. We scope which channels make sense for your business rather than selling all of them by default.' },
    { q: 'How is this different from hiring a freelancer?', a: 'A freelancer usually covers one channel. We run ads, content, SEO, and web development as one coordinated system, with in-house creative and weekly reporting.' },
    { q: 'What makes a digital marketing agency in Jaipur different from a national one?', a: 'A Jaipur-based team means faster turnarounds, in-person meetings when you want them, and campaigns tuned to local search behaviour and competition — not a generic template built for a metro market.' },
    { q: 'How much does digital marketing cost for a Jaipur business?', a: "Most Jaipur SMBs start between ₹25k–₹75k/month in services plus ad spend, scaling with the number of channels and campaigns. We'll quote based on your goals, not a fixed package." },
    { q: 'How long until I see results?', a: 'Paid campaigns typically show early signal within 2–3 weeks; SEO and organic growth compound over 3–6 months. We report weekly so you see the trendline the whole way.' },
    { q: 'Do you require a long-term contract?', a: "Standard retainers run month-to-month after an initial 3-month period — long enough to gather real data, short enough that you're never locked in indefinitely." },
  ],

  finalCta: {
    title: 'Ready to grow your Jaipur business with one team, every channel?',
    subhead: "Book a free, no-obligation strategy call. We'll review your current marketing and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways to grow in Jaipur',
    links: [
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our paid-ads specialisation — Meta, Google, and YouTube.' },
      { label: 'Social Media Marketing Agency in Jaipur', href: '/social-media-marketing-agency-jaipur', blurb: 'Content systems and community management, organic-first.' },
      { label: 'Best Digital Marketing Agency in Jaipur', href: '/best-digital-marketing-agency-in-jaipur', blurb: 'Why Jaipur businesses pick us over the alternatives.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Digital Marketing Lead — Jaipur',
    headline: 'Tell us about your business',
    subhead: 'Share a few details and a real strategist replies within 24 hours with a no-obligation plan.',
    tag: "LET'S TALK",
  },
}
