/**
 * All copy and data for the /travel-agency-marketing-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("travel agency
 * marketing jaipur", "tour operator marketing", "travel company lead
 * generation jaipur"). Targets travel agencies, tour operators, and DMCs
 * hiring a marketing agency to generate booking enquiries.
 *
 * PROOF RULE: the only named client proof is Flight Ticket Fare — a real GE
 * travel result (cost-per-lead ₹380 → ₹94, 4× funnel conversion, 500+ leads a
 * month), from lib/constants.ts CASE_STUDIES. Globally-true aggregate stats
 * (₹10Cr+ ad spend, 4.9★/187 reviews, 97% retention, Jaipur HQ) are reused per
 * the approved list. Nothing else is invented. Calculator outputs are labelled
 * estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const TRAVEL_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Travel',

  hero: {
    badge: 'JAIPUR-BASED · TRAVEL & TOURISM MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Travel Companies in Jaipur'],
    cyclingWords: [
      'Built for tour operators.',
      'Built for DMCs & inbound travel.',
      'Built for holiday packagers.',
      'Built for visa & ticketing agencies.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for travel companies, tour operators, and DMCs. We turn Google searches, Meta ads, and WhatsApp follow-ups into qualified booking enquiries — not just brochure downloads. For Flight Ticket Fare we cut cost-per-lead from ₹380 to ₹94, 4×’d funnel conversion, and drove 500+ qualified enquiries a month.",
    primaryCta: { label: 'Get a Free Lead-Flow Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📉', value: '₹380 → ₹94', label: 'Cost per lead (Flight Ticket Fare)' },
      { emoji: '📈', value: '4×', label: 'Funnel conversion' },
      { emoji: '📥', value: '500+', label: 'Qualified leads / month' },
    ],
    image: {
      src: '/industries/travel/hero.jpg',
      alt: 'Traveller at an airport window watching a plane, holiday travel',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'Where travel demand actually starts',
    subhead:
      'Every trip begins as a search or a scroll. The agency that shows up — and follows up fast — wins the booking, whatever the season.',
    images: [
      { src: '/industries/travel/1.jpg', alt: 'Scenic mountain destination viewpoint', caption: 'Destination creative that sparks the enquiry' },
      { src: '/industries/travel/2.jpg', alt: 'Person planning a trip on a laptop with a map', caption: 'Search & social funnels that capture intent' },
      { src: '/industries/travel/3.jpg', alt: 'Traveller with luggage arriving at a hotel', caption: 'Fast WhatsApp follow-up that closes the trip' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why travel ad budgets leak — and bookings stay flat',
  painPoints: [
    { emoji: '💸', title: 'Expensive, low-intent leads', body: 'Broad "holiday packages" ads pull in price-shoppers and window-browsers. Without intent-based targeting and qualification, your cost-per-lead climbs and your sales team burns hours on people who were never going to book.' },
    { emoji: '⏱️', title: 'Slow follow-up loses the trip', body: 'Travel is an impulse-and-urgency purchase. A lead that waits hours for a reply has already messaged three competitors. Without instant WhatsApp follow-up, you pay for enquiries you then let go cold.' },
    { emoji: '🗓️', title: 'Feast-or-famine seasonality', body: 'Peak season floods you; off-season goes silent. Most agencies have no always-on demand engine or retargeting system to smooth the calendar and keep enquiries flowing year-round.' },
    { emoji: '📊', title: 'No idea what a booking actually costs', body: 'You know monthly ad spend but not cost-per-qualified-enquiry or cost-per-booking. So budget decisions across destinations and packages are guesses, not numbers.' },
    { emoji: '🌐', title: 'Beaten by OTAs and aggregators', body: 'MakeMyTrip and the big OTAs dominate generic search. Without a sharp niche, strong creative, and a direct funnel, independent Jaipur agencies get squeezed out of their own market.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Travel marketing that qualifies before your team calls',
    subhead:
      "Travel runs on speed and intent. Our AI is built to surface high-intent travellers, respond in seconds, and keep demand alive between seasons.",
    cards: [
      { emoji: '🧠', title: 'AI lead-intent scoring', body: 'Every enquiry is scored on real booking-intent signals — destination, dates, budget, urgency — so your team calls the people actually ready to travel first.' },
      { emoji: '💬', title: 'Instant WhatsApp response', body: 'Automated, personal WhatsApp replies the moment a lead comes in — capturing the trip while intent is hot, instead of hours later when it has gone cold.' },
      { emoji: '🎯', title: 'Always-on retargeting', body: 'AI-managed retargeting keeps your destinations in front of past enquirers between seasons, so off-season stays warm and peak season starts from a full pipeline.' },
      { emoji: '🖼️', title: 'Destination creative at scale', body: 'AI-assisted creative testing across destinations and package types finds the hooks that convert for your niche — fast, without a huge production budget.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete booking-enquiry engine for travel companies',
  servicesSubhead: 'Six services, one promise: a steady flow of qualified enquiries that turn into trips.',
  services: [
    { title: 'Meta & Google Ads for Travel', body: 'Intent-based campaigns by destination, package, and season — geo- and interest-targeted, built to bring qualified enquiries at a cost-per-lead you can actually book against.' },
    { title: 'Instant Lead-Response & WhatsApp Funnel', body: 'Automated WhatsApp follow-up and qualification the moment a lead arrives — the single biggest lever on travel conversion — so hot enquiries never go cold.' },
    { title: 'Landing Pages & Enquiry Funnels', body: 'Fast, mobile-first destination and package pages built to convert ad clicks into qualified enquiries, with the trust signals travellers look for before they commit.' },
    { title: 'Retargeting & Off-Season Demand', body: 'Always-on retargeting and email/WhatsApp nurture that keep past enquirers warm between seasons and pull them back when they’re ready to book.' },
    { title: 'Google Business Profile & Reviews', body: 'Local SEO and review growth so travellers searching "travel agency in Jaipur" find and trust you — a low-cost, compounding enquiry source.' },
    { title: 'Analytics & Cost-per-Booking Tracking', body: 'Proper tracking from enquiry to booking so you know cost-per-qualified-lead and cost-per-booking by destination — and can put budget where it actually pays.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A travel client we helped scale enquiries',
  resultHighlight: {
    label: 'FEATURED CLIENT · TRAVEL',
    name: 'Flight Ticket Fare',
    detail: 'Travel & Ticketing · Lead Generation + Funnel',
    quote:
      "We were paying far too much for leads that rarely booked. Growth Escalators rebuilt our targeting and follow-up — our cost-per-lead dropped from ₹380 to ₹94, conversions jumped 4×, and we were suddenly handling 500+ qualified enquiries a month.",
    metrics: [
      { value: '₹380 → ₹94', label: 'Cost per lead' },
      { value: '4×', label: 'Funnel conversion' },
      { value: '500+', label: 'Qualified leads / month' },
    ],
  },

  process: [
    { step: '01', title: 'Lead-Flow Audit', body: 'A 45-minute call. We review your current ads, cost-per-lead, response time, and booking rate against how demand actually flows in your travel niche.' },
    { step: '02', title: 'Demand & Funnel Plan', body: 'Within 7 days you get a written plan: which destinations and packages to lead with, the targeting and creative approach, and the instant-response funnel we’ll build to lift conversion.' },
    { step: '03', title: 'Build & Launch', body: 'Landing pages, tracking, WhatsApp automation, and your first campaigns go live within 14 days — most travel clients see qualified enquiries in the first week.' },
    { step: '04', title: 'Optimise Toward Bookings', body: 'We review cost-per-qualified-lead and cost-per-booking weekly — not just clicks — and shift budget across destinations and seasons to protect your margin.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur travel agency that reports bookings, not brochure clicks',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — a stone’s throw from a tourism-first city. We understand inbound Rajasthan travel as well as outbound holiday demand.' },
    { title: 'Speed is our obsession', body: 'We build the instant-response systems that decide travel conversion — because a lead answered in seconds books, and one answered in hours doesn’t.' },
    { title: 'Proven in travel', body: 'For Flight Ticket Fare we cut cost-per-lead from ₹380 to ₹94, 4×’d conversion, and scaled to 500+ qualified enquiries a month.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many trips can your budget book?',
    subhead: 'Move the sliders to your numbers and see the qualified enquiries and bookings your ad spend can realistically drive.',
    source: 'Calculator — Travel Jaipur',
    unitPlural: 'trips booked',
    budget: { label: 'Your monthly ad budget', default: 60000 },
    value: { label: 'Average margin per trip booked (₹)', default: 6000 },
    cplLow: 94,
    cplHigh: 380,
    closeRate: 0.2,
    benchmark: 'Benchmark: Flight Ticket Fare moved from ₹380 to ₹94 per lead with our system. Roughly 1 in 5 qualified travel enquiries converts to a booking when follow-up is instant.',
    formHeadline: 'See your full booking breakdown',
    formSubhead: 'Get your numbers, the travel benchmark, and the Flight Ticket Fare lead-engine breakdown — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a travel marketing agency in Jaipur',
  faqs: [
    { q: 'How much does travel marketing cost with an agency in Jaipur?', a: "It depends on your destinations, average trip value, and how much of the funnel you need built. We quote exactly after the free lead-flow audit — most travel companies start with a focused ads + instant-response funnel before scaling budget across destinations." },
    { q: 'Can you really lower our cost-per-lead?', a: "That's exactly what we did for Flight Ticket Fare — from ₹380 to ₹94 — by fixing targeting, creative, and the follow-up funnel. Your result depends on your niche and margins, which is what the free audit establishes." },
    { q: 'How do you improve conversion, not just lead volume?', a: "Travel conversion is won on speed and qualification. We install instant WhatsApp follow-up and intent scoring so your team reaches hot leads in seconds and spends time on travellers who are actually ready to book." },
    { q: 'Can you help with off-season demand?', a: "Yes — always-on retargeting plus email/WhatsApp nurture keeps past enquirers warm between seasons, so off-season stays productive and peak season begins with a full pipeline." },
    { q: 'Do you work with inbound (Rajasthan tourism) and outbound travel?', a: "Both. Inbound Rajasthan/Jaipur travel and outbound holiday packages need different targeting and creative, and we structure campaigns accordingly rather than running one blended account." },
    { q: 'How fast will we see enquiries?', a: "Ad enquiries typically start within the first 1-2 weeks once campaigns and the response funnel are live. Cost-per-lead and conversion then improve over the following weeks as we optimise against booking data." },
  ],

  finalCta: {
    title: 'Ready to book more trips from the same ad budget?',
    subhead: "Book a free, no-obligation lead-flow audit. We'll review your ads, your response time, and your booking rate — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Lead-Flow Audit',
  },

  videoTestimonialsTag: 'HEAR FROM TRAVEL CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from travel clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we drive leads',
    links: [
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'Our dedicated lead-gen engine for high-consideration purchases.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Ads engineered for ROAS — the core of every campaign.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast landing pages and enquiry funnels that convert.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Travel Lead — Jaipur',
    headline: 'Tell us about your travel business',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free lead-flow audit.',
    tag: 'BOOK YOUR FREE LEAD-FLOW AUDIT',
  },
}
