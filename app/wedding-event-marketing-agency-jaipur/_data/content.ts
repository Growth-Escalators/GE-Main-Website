/**
 * All copy and data for the /wedding-event-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("wedding planner
 * marketing jaipur", "wedding marketing agency jaipur", "event management
 * marketing jaipur"). Targets wedding planners, venues, photographers, decor
 * studios, and event vendors hiring a local agency to win high-value bookings
 * in a heavily seasonal, Instagram-saturated destination-wedding market.
 *
 * PROOF RULE: there is no exact-match wedding/event client, so resultHighlight
 * is Growth Escalators' own aggregate track record (₹10Cr+ ad spend, 187+
 * brands, 97% retention) — never a fabricated niche client. The whyUs section
 * cites two real GE clients strictly as proof of viral-social capability, not
 * as wedding-industry results: Paraiso (Fashion & Lifestyle Brand — one reel
 * hit 5M views / 20M+ reach) and Odra Organics (Organic Wellness Brand —
 * 20M+ reach), both sourced from the approved auto-responder case-study
 * lines in app/api/lead/route.ts. Nothing else is invented. The calculator
 * outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const WEDDING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Weddings & Events',

  hero: {
    badge: 'JAIPUR-BASED · WEDDING & EVENT MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Wedding & Event Brands in Jaipur'],
    cyclingWords: [
      'Book out your peak season before it starts.',
      'Turn one viral reel into a season of enquiries.',
      'Win the couples searching right now, not just referrals.',
      'Stop losing high-value leads to slow follow-up.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for wedding planners, venues, photographers, decor studios, and event vendors. In India's top wedding-destination city, we turn viral-ready content, fast enquiry follow-up, and seasonality-proof campaigns into signed bookings — not just profile views. We've taken client content to 5M-view reels and 20M+ reach, and managed ₹10Cr+ in ad spend across 187+ brands.",
    primaryCta: { label: 'Get a Free Booking Audit', href: '#lead-form' },
    secondaryCta: { label: 'See How It Works ↓', href: '#results' },
    statPills: [
      { emoji: '🎥', value: '5M', label: 'Reel views for one GE client' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/wedding/hero.jpg',
      alt: 'Beautifully decorated Jaipur wedding venue set up for an evening ceremony',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a fully booked wedding season actually looks like',
    subhead:
      "Jaipur is one of India's busiest destination-wedding cities — the vendors winning the best dates are the ones couples find first on Instagram and Google, not necessarily the most experienced.",
    images: [
      { src: '/industries/wedding/1.jpg', alt: 'Elegant Jaipur wedding mandap decorated with flowers and lights', caption: 'Content that stops the scroll and starts the enquiry' },
      { src: '/industries/wedding/2.jpg', alt: 'Wedding planner coordinating with vendors at a Jaipur venue', caption: 'Bookings locked in months before the season peaks' },
      { src: '/industries/wedding/3.jpg', alt: 'Photographer capturing a candid moment at a Jaipur destination wedding', caption: 'Enquiries that match your actual budget tier' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why a great portfolio still means a feast-or-famine calendar',
  painPoints: [
    { emoji: '📅', title: 'Feast in season, famine off-season', body: 'Wedding season books out fast, but the months around it sit empty — most vendors have no system to generate off-season enquiries or fill last-minute date cancellations.' },
    { emoji: '📱', title: 'Instagram is saturated, not empty', body: 'Every wedding vendor in Jaipur is posting reels. Without a content system built around reach and shares, your account plateaus at a few hundred local followers and never turns into real enquiries.' },
    { emoji: '🐌', title: 'Slow follow-up loses the booking', body: 'High-value couples message multiple vendors at once and book whoever replies first with a clear next step. A few hours of delay on WhatsApp or Instagram DMs can hand a big booking to a competitor.' },
    { emoji: '🔁', title: 'Over-reliant on referrals and listing sites', body: "Listing platforms and referrals bring bookings, but they cap your growth and put your pricing and positioning at the mercy of a platform or a friend-of-a-friend network you don't control." },
    { emoji: '📊', title: 'No idea what a booking actually costs', body: "Without tracking from enquiry through to signed contract, you can't tell whether Instagram, Google, or listing sites are actually filling your calendar — so every rupee of marketing spend is a guess." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Wedding & event marketing that thinks in bookings, not likes',
    subhead:
      "Generic social agencies chase views. Our AI is built around the numbers that actually fill a wedding vendor's calendar — enquiry speed, seasonality, and booking value.",
    cards: [
      { emoji: '🎬', title: "AI content that's built to go viral", body: "We use AI to spot the hooks, formats, and moments earning reach in Jaipur wedding content right now — the same approach that took a GE client's reel to 5M views and 20M+ reach." },
      { emoji: '⚡', title: 'Rapid-response enquiry system', body: 'Automated first-response and lead-routing so every DM and form fill gets a fast, professional reply — because in weddings, the vendor who responds first often wins the booking.' },
      { emoji: '📆', title: 'Seasonality-aware campaign pacing', body: "Budget and content planned around Jaipur's wedding calendar — building enquiries ahead of peak season and running targeted off-season and destination-wedding campaigns to smooth out the quiet months." },
      { emoji: '💬', title: 'Booking-value qualification', body: 'Targeting and enquiry questions built to surface couples and event budgets that match your pricing tier — so your calendar fills with bookings worth taking, not endless quote requests.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete booking engine for Jaipur wedding & event brands',
  servicesSubhead: 'Six services, one promise: signed bookings across peak and off-season, not just followers.',
  services: [
    { title: 'Viral-Ready Reels & Content System', body: 'A monthly content engine built for reach and shares — real weddings, behind-the-scenes, and vendor-day content designed to turn scrollers into enquiries across Jaipur and beyond.' },
    { title: 'Google Business Profile & Local SEO', body: "Full GBP optimisation and on-page SEO so you rank for 'wedding planner in Jaipur', 'wedding photographer Jaipur', and locality searches when couples are ready to book." },
    { title: 'Rapid-Response Enquiry Funnel', body: "A structured DM, WhatsApp, and form-fill response system with fast first-touch replies — because in weddings, speed wins bookings that content alone can't close." },
    { title: 'Seasonality & Off-Season Campaigns', body: 'Ad and content calendars built around your peak wedding season, plus dedicated off-season and destination-wedding campaigns to keep your calendar full year-round.' },
    { title: 'Booking-Value Ad Campaigns', body: 'Meta and Google campaigns with built-in budget qualification, so enquiries match the wedding and event sizes your business actually wants to book.' },
    { title: 'Vendor & Venue Launch Campaigns', body: 'New venue, new package, or festive-season offer — full campaign build-outs that create urgency and a queue of enquiries, not just another post.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'What Growth Escalators has actually delivered',
  resultHighlight: {
    label: 'OUR TRACK RECORD',
    name: 'Growth Escalators',
    detail: "What we've delivered across 100+ brands",
    quote:
      "We don't have a single wedding or event client to name-drop yet — what we do have is a track record. We've taken client content to 5M-view reels and 20M+ reach, managed ₹10Cr+ in ad spend across 187+ brands, and kept a 97% retention rate because clients see their calendars actually fill. That's the same system, applied to your season.",
    metrics: [
      { value: '5M', label: 'Views on one client reel' },
      { value: '₹10Cr+', label: 'Ad spend managed' },
      { value: '97%', label: 'Client retention' },
    ],
  },

  process: [
    { step: '01', title: 'Booking & Content Audit', body: 'A 45-minute call. We review your Instagram, Google Business Profile, listing-site presence, and current enquiry response time against the vendors winning bookings in your category.' },
    { step: '02', title: 'Season & Campaign Plan', body: 'Within 7 days you get a written plan: your viral-content calendar, the peak vs off-season ad split, and the rapid-response system that stops enquiries going cold.' },
    { step: '03', title: 'Build & Launch', body: 'Content system, GBP fixes, enquiry-response automation, and your first booking-value campaigns go live within 14 days — timed to show early wins before your next peak window.' },
    { step: '04', title: 'Optimise Toward Signed Bookings', body: "We track enquiries through to signed contracts, not just DMs or likes — and refine content, targeting, and response speed as your season and category shift." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that reports bookings, not views',
  whyUs: [
    { title: 'Right here in Jaipur', body: "Based in Pratap Nagar — we know the city's wedding season, venue landscape, and the destination-wedding demand that brings couples in from across India." },
    { title: 'We think in booking value, not vanity metrics', body: 'We optimise for enquiry speed and booking value — the numbers that decide whether a wedding or event brand has a full calendar, not just a full comments section.' },
    { title: 'Proven viral-social capability', body: 'We took Paraiso, a fashion & lifestyle brand, to a single reel with 5M views and 20M+ reach, and grew Odra Organics, an organic wellness brand, to 20M+ reach — the same content system we’d bring to your season.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new bookings can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the bookings your marketing budget can realistically drive this season.',
    source: 'Calculator — Wedding Jaipur',
    unitPlural: 'bookings',
    budget: { label: 'Your monthly marketing budget', default: 60000 },
    value: { label: 'Average value of one booking (₹)', default: 200000 },
    cplLow: 500,
    cplHigh: 2000,
    closeRate: 0.1,
    benchmark: 'Benchmark: high-value wedding and event leads in Jaipur typically cost ₹500–₹2,000 each, with roughly 1 in 10 qualified enquiries converting to a signed booking — seasonality and speed of follow-up move this more than almost any other factor.',
    formHeadline: 'See your full booking breakdown',
    formSubhead: 'Get your numbers, the Jaipur wedding & event benchmark, and our rapid-response playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a wedding & event marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a wedding marketing agency in Jaipur?', a: 'It depends on whether you need content, ads, local SEO, or all three, and how seasonal your business is. We quote exactly after the free booking audit — most Jaipur wedding and event brands start with a content + rapid-response package and add booking-value ad campaigns ahead of peak season.' },
    { q: 'Can you help us book out the off-season too?', a: "Yes — that's a core part of the plan. We build destination-wedding and off-season event campaigns (corporate events, intimate ceremonies, pre-wedding shoots) so your calendar doesn't go quiet between peak seasons." },
    { q: 'Do you actually help with speed of response, or just content?', a: "Both. Content and ads bring the enquiries, but we also set up the rapid-response system — automated first replies and lead routing — because in weddings, the vendor who responds first often wins the booking, no matter how good the portfolio is." },
    { q: 'We rely mostly on listing sites and referrals — is that a problem?', a: "It caps your growth and puts your pricing at the mercy of a platform. We don't replace those channels, we build direct Instagram, Google, and website channels alongside them, so you control more of your own pipeline." },
    { q: "Can you make our content go viral like Paraiso's?", a: "We can't guarantee virality for any single reel, but we build the same system that got that reel to 5M views — consistent, hook-tested, reach-optimised content, month after month, so the odds of a breakout post go up significantly." },
    { q: 'How fast will we see more enquiries?', a: 'Rapid-response and ad campaigns typically show movement within 1-2 weeks. Content growth and organic reach compound over 8-12 weeks. Most Jaipur wedding and event brands feel the calendar difference by the next season.' },
  ],

  finalCta: {
    title: 'Ready to book out your next wedding season?',
    subhead: "Book a free, no-obligation booking audit. We'll review your Instagram, Google Business Profile, and enquiry response time — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Booking Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR WEDDING & EVENT BRANDS',
  videoTestimonialsHeadline: 'Real vendors, real seasons',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur wedding & event clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for hospitality & consumer brands',
    links: [
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Hotel & Resort Marketing in Jaipur', href: '/hotel-resort-marketing-agency-jaipur', blurb: 'For venues and hospitality brands that live on direct bookings.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast, portfolio-led sites that turn visitors into enquiries.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Wedding/Event Lead — Jaipur',
    headline: 'Tell us about your wedding or event business',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free booking audit.',
    tag: 'BOOK YOUR FREE BOOKING AUDIT',
  },
}
