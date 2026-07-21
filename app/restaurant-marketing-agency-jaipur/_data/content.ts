/**
 * All copy and data for the /restaurant-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("restaurant
 * marketing agency jaipur", "cafe marketing jaipur", "restaurant social media
 * agency jaipur"). Targets restaurant / café / cloud-kitchen owners hiring a
 * local agency to drive footfall and orders.
 *
 * PROOF RULE: the only named client proof is Yellow Diaries — a real GE F&B
 * result (0 → 12,400 Instagram followers in 5 months, 3× walk-ins, #1-ranked
 * local café), from lib/constants.ts CASE_STUDIES. Globally-true aggregate
 * stats (₹10Cr+ ad spend, 4.9★/187 reviews, 97% retention, Jaipur HQ) are
 * reused per the approved list. Nothing else is invented. The calculator
 * outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const RESTAURANT_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Restaurants',

  hero: {
    badge: 'JAIPUR-BASED · RESTAURANT & CAFÉ MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Restaurants & Cafés in Jaipur'],
    cyclingWords: [
      'Fill your tables on weeknights.',
      'Own your locality on Google.',
      'Turn reels into reservations.',
      'Cut your dependence on Zomato.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for restaurants, cafés, and cloud kitchens. We turn Instagram reels, Google Maps searches, and WhatsApp offers into walk-ins and direct orders — not just likes. We took Yellow Diaries from 0 to 12,400 Instagram followers in 5 months, tripled their weekend walk-ins, and made them the #1-ranked café in their area.",
    primaryCta: { label: 'Get a Free Footfall Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🚶', value: '3×', label: 'Weekend walk-ins (Yellow Diaries)' },
      { emoji: '📈', value: '12,400', label: 'Followers in 5 months' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/restaurant/hero.jpg',
      alt: 'Busy Jaipur café interior with diners at full tables',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full house actually looks like',
    subhead:
      'Jaipur eats out more than ever — the winners are the places people find first on Instagram and Google Maps, not necessarily the best kitchens.',
    images: [
      { src: '/industries/restaurant/1.jpg', alt: 'Plated restaurant dish styled for social media', caption: 'Craveable content that stops the scroll' },
      { src: '/industries/restaurant/2.jpg', alt: 'Friends dining together at a lively café table', caption: 'Weeknight covers, not just weekend rushes' },
      { src: '/industries/restaurant/3.jpg', alt: 'Barista handing over a coffee at the counter', caption: 'Direct orders that skip aggregator commissions' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why great food still ends up with empty weeknight tables',
  painPoints: [
    { emoji: '🍽️', title: 'Great food, invisible online', body: 'Your kitchen is excellent, but diners searching "café near me" or "best pasta in Jaipur" never find you because your Google Business Profile is thin and your Instagram looks like a menu, not a place to be.' },
    { emoji: '💸', title: 'Aggregators eating 25-30% of every order', body: 'Zomato and Swiggy bring orders, but their commissions quietly erase your margin — and you own none of the customer data to bring those diners back directly.' },
    { emoji: '📉', title: 'Packed weekends, dead weeknights', body: 'Friday and Saturday take care of themselves. Monday to Thursday is where profit is won or lost — and most restaurants have no system to drive footfall on the slow days.' },
    { emoji: '📸', title: 'Posting daily, growing nothing', body: 'You (or a cousin) post every day, but without a content system built around reach, saves, and shares, the account plateaus at a few hundred locals and never turns into bookings.' },
    { emoji: '⭐', title: 'Reviews you never ask for', body: 'A handful of Google reviews — some of them complaints — decide whether new diners trust you. Without a system to earn fresh 5-star reviews, the algorithm and the customer both pass you over.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Restaurant marketing that thinks in covers, not clicks',
    subhead:
      "Generic social agencies chase vanity metrics. Our AI is built around the numbers that actually move a restaurant — footfall on slow days, direct-order share, and review velocity.",
    cards: [
      { emoji: '🎬', title: 'AI content that earns reach', body: 'We use AI to spot which dishes, angles, and hooks are trending in Jaipur food content right now — so your reels are built to be saved and shared, not just posted.' },
      { emoji: '📍', title: 'Google Maps rank monitoring', body: 'Continuous checks on your Google Business Profile — photos, categories, review velocity, Q&A — the exact signals that decide whether you win the local map pack for "restaurants near me".' },
      { emoji: '💬', title: 'WhatsApp win-back offers', body: 'Automated, well-timed WhatsApp offers to past diners on slow weeknights — filling tables that would otherwise sit empty, with margin you actually keep.' },
      { emoji: '⭐', title: 'Review-velocity engine', body: 'A post-visit review-request flow that steadily grows your 5-star base — the trust signal that lifts both your map ranking and a new diner’s decision to walk in.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete footfall engine for Jaipur restaurants',
  servicesSubhead: 'Six services, one promise: more covers on the days that actually need them.',
  services: [
    { title: 'Instagram & Reels Content System', body: 'A monthly content engine built for reach and saves — craveable food reels, behind-the-counter stories, and offers — designed to turn scrollers into diners across Jaipur.' },
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation — photos, menu, categories, Q&A, review velocity — so you rank in the local map pack for "café near me" and locality searches across C-Scheme, Vaishali Nagar, Malviya Nagar, and Tonk Road.' },
    { title: 'Footfall & Offer Campaigns', body: 'Geo-fenced Meta and Google ads that put weeknight offers in front of people within a few kilometres of your door — measured in walk-ins and covers, not impressions.' },
    { title: 'Direct-Order & WhatsApp Funnel', body: 'Your own ordering and reservation flow plus WhatsApp broadcasts to past diners — so you build a customer list you own and cut dependence on aggregator commissions.' },
    { title: 'Reputation & Review Growth', body: 'A systemised review-request flow that grows fresh 5-star Google reviews — the trust and ranking signal that quietly decides who gets the next new customer.' },
    { title: 'Launch & Event Campaigns', body: 'New outlet, new menu, festival, or brunch — full campaign build-outs that create a moment and a queue, not just a post nobody sees.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Jaipur café we helped fill',
  resultHighlight: {
    label: 'FEATURED CLIENT · JAIPUR F&B',
    name: 'Yellow Diaries',
    detail: 'Café · Social Media + Local Marketing',
    quote:
      "Growth Escalators didn't just grow our Instagram — they grew our tables. In five months we went from a quiet local spot to the café everyone in the area was posting about, and our weekends started spilling into weeknights.",
    metrics: [
      { value: '0 → 12,400', label: 'Instagram followers in 5 months' },
      { value: '3×', label: 'Weekend walk-ins' },
      { value: '#1', label: 'Local café ranking' },
    ],
  },

  process: [
    { step: '01', title: 'Footfall & Brand Audit', body: 'A 45-minute call (or an in-person visit to your Jaipur outlet). We review your Instagram, Google Business Profile, aggregator dependence, and weeknight footfall against the places competing in your locality.' },
    { step: '02', title: 'Content & Campaign Plan', body: 'Within 7 days you get a written plan: your content pillars, the offer calendar for slow days, and the ad + local-SEO split that will drive covers you actually keep the margin on.' },
    { step: '03', title: 'Build & Launch', body: 'Content system, GBP fixes, WhatsApp automation, and your first footfall campaigns go live within 14 days — designed to show early wins inside the first few weekends.' },
    { step: '04', title: 'Optimise Toward Covers', body: 'We review walk-ins, direct-order share, and review velocity — not just likes — and refresh content and offers as your slow days and seasons shift.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur restaurant agency that reports covers, not likes',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we know the city’s dining clusters, festival calendar, and the localities where your next 500 regulars actually live.' },
    { title: 'We think in margin, not vanity', body: 'We optimise for weeknight footfall, direct orders, and reviews — the numbers that decide whether a restaurant is profitable, not just popular.' },
    { title: 'Proven with a real café', body: 'Yellow Diaries went from 0 to 12,400 followers in 5 months, tripled weekend walk-ins, and became the #1-ranked café in their area with our system.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new diners can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the footfall your ad spend can realistically drive.',
    source: 'Calculator — Restaurant Jaipur',
    unitPlural: 'new diners',
    budget: { label: 'Your monthly marketing budget', default: 40000 },
    value: { label: 'Average value of one customer (₹, incl. repeat visits)', default: 1500 },
    cplLow: 40,
    cplHigh: 110,
    closeRate: 0.5,
    benchmark: 'Benchmark: well-run local F&B campaigns in Jaipur bring engaged diners at roughly ₹40–₹110 each, with about half converting to a first visit. Repeat visits do the real work.',
    formHeadline: 'See your full footfall breakdown',
    formSubhead: 'Get your numbers, the Jaipur F&B benchmark, and the Yellow Diaries playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a restaurant marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a restaurant marketing agency in Jaipur?', a: "It depends on whether you need content, ads, local SEO, or all three, and how many outlets you run. We quote exactly after the free footfall audit — most Jaipur restaurants start with a content + local-SEO package and add footfall ad campaigns once the base is strong." },
    { q: 'Can you reduce our dependence on Zomato and Swiggy?', a: "Yes — that's a core goal. We build your own direct-order and WhatsApp funnel plus a customer list you own, so a growing share of orders come to you commission-free while aggregators become one channel, not your only one." },
    { q: 'Will you actually get us ranking on Google Maps?', a: "That's the heart of local SEO for restaurants — Google Business Profile optimisation combined with review velocity and locality-specific signals. It builds over weeks, but it's the lowest long-run cost-per-customer channel a restaurant has." },
    { q: 'Do you handle the content and reels yourselves?', a: "Yes — we run a monthly content system built for reach and saves. We can shoot on-site in Jaipur or direct your team on exactly what to capture, then edit and publish on a schedule designed around your slow days." },
    { q: 'We have multiple outlets — can you handle that?', a: "Yes. We structure separate tracking, offers, and local SEO per outlet so you can see which location and which campaign is actually driving covers, rather than one blended, unreadable number." },
    { q: 'How fast will we see more footfall?', a: "Offer and footfall ad campaigns typically show movement within the first 1-2 weekends. Content growth and Google Maps ranking compound over 8-12 weeks. Most Jaipur restaurants feel the weeknight difference by month 2." },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur restaurant on the slow days too?',
    subhead: "Book a free, no-obligation footfall audit. We'll review your Instagram, your Google Business Profile, and your aggregator dependence — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Footfall Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR RESTAURANTS',
  videoTestimonialsHeadline: 'Real kitchens, real queues',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur F&B clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for local & consumer brands',
    links: [
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Hotel & Resort Marketing in Jaipur', href: '/hotel-resort-marketing-agency-jaipur', blurb: 'For hospitality brands that live on direct bookings and reviews.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast ordering and reservation sites that convert.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Restaurant Lead — Jaipur',
    headline: 'Tell us about your restaurant',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free footfall audit.',
    tag: 'BOOK YOUR FREE FOOTFALL AUDIT',
  },
}
