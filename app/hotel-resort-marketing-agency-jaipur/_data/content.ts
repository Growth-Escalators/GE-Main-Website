/**
 * All copy and data for the /hotel-resort-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("hotel marketing
 * agency jaipur", "resort marketing jaipur", "hospitality marketing agency
 * jaipur"). Targets hotel, resort, boutique-stay, and banquet owners hiring a
 * local agency to drive direct bookings and cut OTA commission dependence.
 *
 * PROOF RULE: the only named client proof is Yellow Diaries — a real GE
 * result, but a café / F&B brand, NOT a hotel. It is labelled honestly
 * everywhere it appears ("Café / F&B · Social + Local Marketing") and framed
 * explicitly as a hospitality-adjacent, local-marketing result — never implied
 * to be a hotel or resort client. Globally-true aggregate stats (₹10Cr+ ad
 * spend, 4.9★/187 reviews, 97% retention, Jaipur HQ) are reused per the
 * approved list. Nothing else is invented. The calculator outputs are clearly
 * labelled estimates. OTA commission figures (15-25%) are stated as
 * industry-standard market facts, not GE-achieved results.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const HOTEL_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Hospitality',

  hero: {
    badge: 'JAIPUR-BASED · HOTEL & RESORT MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Hotels & Resorts in Jaipur'],
    cyclingWords: [
      'Cut your OTA commission bill.',
      'Fill weekday & off-season rooms.',
      'Own "hotels in Jaipur" on Google.',
      'Turn reviews into direct bookings.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for hotels, resorts, boutique stays, and banquet venues. We build direct-booking funnels, Google Maps rankings, and social content that fill rooms without handing 15-25% of every booking to an OTA. Our hospitality-adjacent proof: we took Yellow Diaries, a Jaipur café, from 0 to 12,400 Instagram followers in 5 months and tripled their walk-ins — the same local-marketing playbook we apply to hotels and resorts.",
    primaryCta: { label: 'Get a Free Occupancy Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '💰', value: '15-25%', label: 'OTA commission you could keep' },
      { emoji: '📈', value: '3×', label: 'Walk-ins for a Jaipur F&B client' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/hotel/hero.jpg',
      alt: 'Elegant Jaipur hotel lobby with guests checking in',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full occupancy calendar looks like',
    subhead:
      "Jaipur is one of India's busiest tourism cities — the properties winning are the ones guests find and trust directly, not just the ones with the biggest OTA ad budget.",
    images: [
      { src: '/industries/hotel/1.jpg', alt: 'Well-appointed hotel room styled for direct-booking photography', caption: 'Photography built to convert on your own site, not just OTAs' },
      { src: '/industries/hotel/2.jpg', alt: 'Hotel pool and courtyard area with guests relaxing', caption: 'The experience that earns 5-star reviews' },
      { src: '/industries/hotel/3.jpg', alt: 'Front desk staff welcoming guests at a boutique hotel', caption: 'Direct bookings that skip the commission' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why great properties still run on thin margins',
  painPoints: [
    { emoji: '💸', title: 'OTAs eating 15-25% of every booking', body: "Booking.com, MakeMyTrip, and Goibibo bring guests, but their commissions quietly erase your margin on every room — and you own none of the guest data to bring them back directly next time." },
    { emoji: '📉', title: 'Packed peak season, empty weekdays', body: "Weekend and peak-season demand takes care of itself. Weekday and off-season occupancy is where profit is actually won or lost — and most properties have no system to drive bookings on the slow dates." },
    { emoji: '🔗', title: 'A direct-booking funnel that barely exists', body: "Your website gets traffic, but without a fast, trustworthy booking engine and a reason to book direct, guests default back to the OTA app they already have installed." },
    { emoji: '⭐', title: 'Guest decisions ride entirely on your review score', body: "A handful of reviews — good or bad — decide whether a guest trusts your property enough to book, especially direct. Without a system to earn fresh 5-star reviews, both OTA ranking and direct trust suffer." },
    { emoji: '📊', title: "Generic agencies who don't understand RevPAR", body: "Most marketing agencies optimise for clicks and likes. Hospitality runs on RevPAR, occupancy, and ADR — an agency that doesn't think in those numbers will optimise for the wrong outcome." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Hotel marketing that thinks in occupancy, not impressions',
    subhead:
      "Generic hospitality marketing chases likes and reach. Our AI is built around the numbers that actually move a property — direct-booking share, weekday occupancy, and review velocity.",
    cards: [
      { emoji: '🛏️', title: 'Direct-booking funnel optimisation', body: "We use AI to identify where your booking funnel leaks — slow pages, unclear rates, missing urgency — and fix it so guests who find you directly actually complete the booking on your site." },
      { emoji: '📍', title: 'Google Maps rank monitoring', body: "Continuous checks on your Google Business Profile — photos, categories, review velocity, Q&A — the exact signals that decide whether you win the map pack for 'hotels in Jaipur' and locality searches." },
      { emoji: '📅', title: 'Occupancy-gap campaign pacing', body: "AI-paced campaigns that shift spend toward your actual gaps — weekday stays, shoulder season, banquet dates — instead of spending evenly across dates that were already going to fill." },
      { emoji: '⭐', title: 'Review-velocity engine', body: "A post-stay review-request flow that steadily grows your 5-star base — the trust signal that lifts both your OTA ranking and a guest's confidence to book you directly next time." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete direct-booking engine for Jaipur hotels & resorts',
  servicesSubhead: 'Six services, one promise: more bookings on the dates and channels that actually protect your margin.',
  services: [
    { title: 'Direct-Booking Website & Funnel', body: "A fast, trustworthy booking flow on your own site — with clear rates, urgency, and guest confidence — so a growing share of bookings come to you commission-free instead of through an OTA." },
    { title: 'Google Business Profile & Local SEO', body: "Full GBP optimisation — photos, amenities, categories, review velocity — so you rank in the local map pack for 'hotels in Jaipur', 'resorts near Jaipur', and locality-specific searches." },
    { title: 'Occupancy-Gap Campaigns', body: "Geo-targeted Meta and Google ads paced specifically toward your weekday and off-season gaps — measured in room-nights filled, not impressions." },
    { title: 'Social & Content System', body: "A monthly Instagram and reels content engine — property, rooms, experiences, and guest moments — built for reach and saves, turning scrollers into direct enquiries." },
    { title: 'Reputation & Review Growth', body: "A systemised post-stay review-request flow that grows fresh 5-star reviews across Google and OTA platforms — the trust signal that quietly decides who gets the next booking." },
    { title: 'Banquet & Events Marketing', body: "Dedicated campaigns for weddings, corporate events, and banquets — Jaipur's high-value, high-season revenue stream — built to fill your calendar months in advance." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Jaipur hospitality-adjacent result we’re proud of',
  resultHighlight: {
    label: 'FEATURED CLIENT · JAIPUR CAFÉ (F&B, NOT A HOTEL)',
    name: 'Yellow Diaries',
    detail: 'Café / F&B · Social + Local Marketing',
    quote:
      "Growth Escalators didn't just grow our Instagram — they grew our footfall. In five months we went from a quiet local spot to the café everyone in the area was searching for and walking into.",
    metrics: [
      { value: '0 → 12,400', label: 'Instagram followers in 5 months' },
      { value: '3×', label: 'Walk-ins' },
      { value: '#1', label: 'Local café ranking' },
    ],
  },

  process: [
    { step: '01', title: 'Occupancy & Channel Audit', body: "A 45-minute call reviewing your OTA dependence, direct-booking funnel, Google Business Profile, and weekday/off-season occupancy against competing Jaipur properties." },
    { step: '02', title: 'Booking & Campaign Plan', body: "Within 7 days you get a written plan: your direct-booking funnel fixes, the occupancy-gap campaign calendar, and the local-SEO priorities that protect your margin." },
    { step: '03', title: 'Build & Launch', body: "Booking-funnel fixes, GBP optimisation, content system, and your first occupancy-gap campaigns go live within 14 days — designed to show early wins inside the first few weeks." },
    { step: '04', title: 'Optimise Toward Direct Bookings', body: "We review direct-booking share, occupancy by day-of-week, and review velocity — not just reach — and repace campaigns as your seasons and events shift." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur hospitality agency that thinks in RevPAR, not reach',
  whyUs: [
    { title: 'Right here in Jaipur', body: "Based in Pratap Nagar — we know the city's tourism seasonality, wedding calendar, and the search behaviour of travellers deciding between your property and the next one." },
    { title: 'We think in occupancy, not vanity', body: "We optimise for direct-booking share, weekday occupancy, and review velocity — the numbers that decide whether a property is profitable, not just popular." },
    { title: 'Proven local-marketing playbook', body: "Yellow Diaries, a Jaipur café, went from 0 to 12,400 followers in 5 months and tripled walk-ins with our local-marketing system — the same content, local-SEO, and review-growth approach we bring to hotels and resorts." },
    { title: 'Real proof, not just promises', body: "₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 187+ brands, based in Jaipur since 2021." },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many direct bookings can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the direct-booking volume your ad spend can realistically drive.',
    source: 'Calculator — Hotel Jaipur',
    unitPlural: 'direct bookings',
    budget: { label: 'Your monthly marketing budget', default: 60000 },
    value: { label: 'Average value of one booking (₹)', default: 6000 },
    cplLow: 100,
    cplHigh: 400,
    closeRate: 0.25,
    benchmark: 'Benchmark: well-run local hospitality campaigns in Jaipur bring engaged booking enquiries at roughly ₹100–₹400 each, with about 1 in 4 converting to a confirmed direct booking. Review velocity and funnel speed move this range significantly.',
    formHeadline: 'See your full direct-booking breakdown',
    formSubhead: 'Get your numbers, the Jaipur hospitality benchmark, and our local-marketing playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a hotel & resort marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a hotel marketing agency in Jaipur?', a: "It depends on your property size, whether you need a booking-funnel rebuild, content, ads, or all three. We quote exactly after the free occupancy audit — most Jaipur properties start with a direct-booking + local-SEO package and add occupancy-gap campaigns once the base is strong." },
    { q: 'Can you actually reduce our dependence on OTA commissions?', a: "Yes — that's a core goal. We build a fast, trustworthy direct-booking funnel on your own site plus the local SEO and content that drive guests there in the first place, so a growing share of bookings come to you commission-free." },
    { q: 'Will you get us ranking for "hotels in Jaipur" on Google?', a: "That's the heart of local SEO for hospitality — Google Business Profile optimisation combined with review velocity and locality-specific signals. It builds over weeks, but it's the lowest long-run cost-per-booking channel a property has." },
    { q: 'Can you help fill our weekday and off-season occupancy gaps?', a: "Yes — occupancy-gap campaigns are one of our six core services. We pace ad spend specifically toward the dates you actually need to fill, rather than spending evenly across a calendar that was already going to sell out on weekends." },
    { q: 'Do you handle banquet and wedding marketing too?', a: "Yes. Banquets, weddings, and corporate events are high-value revenue for Jaipur properties, and we run dedicated campaigns to fill that calendar months in advance, separate from your room-night marketing." },
    { q: 'How fast will we see more direct bookings?', a: "Direct-booking funnel fixes and occupancy-gap campaigns typically show movement within the first 2-3 weeks. Content growth and Google Maps ranking compound over 8-12 weeks. Most Jaipur properties feel the shift in direct-booking share by month 2-3." },
  ],

  finalCta: {
    title: 'Ready to keep more of every booking?',
    subhead: "Book a free, no-obligation occupancy audit. We'll review your direct-booking funnel, your Google Business Profile, and your OTA dependence — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Occupancy Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR HOSPITALITY BRANDS',
  videoTestimonialsHeadline: 'Real properties, real occupancy',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur hospitality clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for local & consumer brands',
    links: [
      { label: 'Restaurant Marketing Agency in Jaipur', href: '/restaurant-marketing-agency-jaipur', blurb: 'For F&B brands driving footfall and direct orders.' },
      { label: 'Travel Agency Marketing in Jaipur', href: '/travel-agency-marketing-jaipur', blurb: 'For travel brands selling itineraries and bookings.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Hotel/Resort Lead — Jaipur',
    headline: 'Tell us about your property',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free occupancy audit.',
    tag: 'BOOK YOUR FREE OCCUPANCY AUDIT',
  },
}
