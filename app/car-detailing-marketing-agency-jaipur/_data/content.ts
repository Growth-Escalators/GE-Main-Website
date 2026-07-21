/**
 * All copy and data for the /car-detailing-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("car detailing
 * marketing agency jaipur", "ceramic coating marketing jaipur", "car spa
 * marketing jaipur"). Targets car detailing, ceramic coating, and car spa
 * studios hiring a local agency to fill weekday bays and grow high-ticket
 * coating/PPF jobs, not just low-ticket washes.
 *
 * PROOF RULE: there is no exact-match car-detailing client, so resultHighlight
 * is Growth Escalators' own aggregate track record (₹10Cr+ ad spend, 187+
 * brands, 97% retention) — never a fabricated niche client. whyUs cites only
 * GE's aggregate local-service lead-generation capability, with no fabricated
 * detailing-specific client or metric. Nothing is invented. The calculator
 * outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const CAR_DETAILING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Auto Care',

  hero: {
    badge: 'JAIPUR-BASED · CAR DETAILING & CERAMIC COATING MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Car Detailing Studios in Jaipur'],
    cyclingWords: [
      'Fill your weekday bays, not just weekends.',
      'Show up first for "car detailing near me".',
      'Sell more ceramic coating, not just washes.',
      'Turn one-time customers into repeat bookings.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for car detailing, ceramic coating, and car spa studios. We turn Google Maps searches, local ads, and WhatsApp follow-up into booked bays and higher-ticket jobs — not just page views. Across 187+ brands we've managed ₹10Cr+ in ad spend building the exact local-lead systems your studio needs to stay full.",
    primaryCta: { label: 'Get a Free Bay Audit', href: '#lead-form' },
    secondaryCta: { label: 'See How It Works ↓', href: '#results' },
    statPills: [
      { emoji: '🚗', value: '187+', label: 'Brands scaled by GE' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/car-detailing/hero.jpg',
      alt: 'Detailer polishing a car exterior inside a professional detailing studio in Jaipur',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a fully booked detailing bay actually looks like',
    subhead:
      "Jaipur's car ownership keeps growing — the studios winning the best jobs are the ones that show up first on Google Maps and WhatsApp, not necessarily the most skilled hands.",
    images: [
      { src: '/industries/car-detailing/1.jpg', alt: 'Freshly ceramic-coated car exterior with a deep glossy finish', caption: 'High-ticket work that sells itself once they see it' },
      { src: '/industries/car-detailing/2.jpg', alt: 'Detailing studio bay with a car mid-service and equipment set up', caption: 'Weekday bays booked, not just weekend rushes' },
      { src: '/industries/car-detailing/3.jpg', alt: 'Customer handed keys back after a car detailing service', caption: 'Repeat customers on a package, not one-off washes' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why great detailing work still means empty weekday bays',
  painPoints: [
    { emoji: '📅', title: 'Weekends packed, weekdays empty', body: "Saturday and Sunday fill themselves. Monday to Friday is where a detailing studio's profit is actually won or lost — and most studios have no system to drive weekday bookings." },
    { emoji: '🧴', title: 'Stuck on low-ticket washes, not high-ticket coatings', body: 'Basic washes keep the lights on but barely move the needle. Without marketing built to sell ceramic coating, PPF, and premium packages, your bay time goes to the lowest-margin jobs.' },
    { emoji: '📍', title: 'Invisible on Google Maps', body: "When someone searches 'car detailing near me' or 'ceramic coating Jaipur', a thin or poorly-optimised Google Business Profile means you lose the booking to a competitor two streets away with better reviews." },
    { emoji: '🔁', title: 'No repeat or subscription system', body: "A great one-time detail should turn into quarterly maintenance bookings, but most studios have no follow-up system — so customers who'd happily rebook simply never get asked." },
    { emoji: '📊', title: 'No idea what a booking actually costs', body: "Without tracking from ad or Maps click through to a completed job, you can't tell whether Google, Instagram, or walk-ins are actually filling your bay — so every rupee of marketing spend is a guess." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Car detailing marketing that thinks in bay time, not clicks',
    subhead:
      'Generic ad agencies chase impressions. Our AI is built around the number that actually fills a detailing studio — booked bay hours on the days that need it most.',
    cards: [
      { emoji: '📍', title: 'Google Maps rank monitoring', body: "Continuous checks on your Google Business Profile — photos, services, categories, review velocity — the exact signals that decide whether you win the local map pack for 'car detailing near me'." },
      { emoji: '🎯', title: 'High-ticket package targeting', body: 'Ad campaigns and landing pages built to sell ceramic coating and PPF packages specifically, not generic washes — so your bay time shifts toward the jobs that actually pay.' },
      { emoji: '📆', title: 'Weekday-fill offer campaigns', body: 'Geo-fenced local ads and WhatsApp offers timed to put weekday slots in front of nearby car owners — filling bays that would otherwise sit empty Monday to Friday.' },
      { emoji: '🔔', title: 'Automated repeat-booking reminders', body: 'A WhatsApp reminder system timed to your service intervals — bringing past customers back for maintenance coats and repeat details without you having to chase a single one.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete bay-fill engine for Jaipur detailing studios',
  servicesSubhead: 'Six services, one promise: more booked bay hours on the days — and the jobs — that actually pay.',
  services: [
    { title: 'Google Business Profile & Local SEO', body: "Full GBP optimisation — photos, services, categories, review velocity — so you rank in the local map pack for 'car detailing', 'ceramic coating', and 'car spa' searches across Jaipur." },
    { title: 'Weekday-Fill Ad Campaigns', body: 'Geo-fenced Meta and Google ads that put weekday offers in front of car owners within a few kilometres of your studio — measured in booked bays, not impressions.' },
    { title: 'High-Ticket Package Campaigns', body: 'Dedicated campaigns and landing pages for ceramic coating, PPF, and premium detailing packages — shifting your bay mix toward higher-margin jobs, not just washes.' },
    { title: 'WhatsApp Booking & Reminder Funnel', body: 'A booking and follow-up system on WhatsApp — instant response to enquiries plus automated service-interval reminders that turn one-time customers into repeat bookings.' },
    { title: 'Reputation & Review Growth', body: 'A systemised review-request flow that grows fresh 5-star Google reviews — the trust and ranking signal that quietly decides who gets the next nearby search.' },
    { title: 'Launch & Offer Campaigns', body: 'New studio, new package, or festive-season offer — full campaign build-outs that create a rush of bookings, not just another post nobody sees.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'What Growth Escalators has actually delivered',
  resultHighlight: {
    label: 'OUR TRACK RECORD',
    name: 'Growth Escalators',
    detail: "What we've delivered across 100+ brands",
    quote:
      "We don't have a single car-detailing client to name-drop yet — what we do have is a track record. ₹10Cr+ in ad spend managed, 187+ local and consumer brands scaled, and a 97% retention rate, because clients keep working with us when the bookings actually show up. That's the same local-lead system, applied to your bay.",
    metrics: [
      { value: '₹10Cr+', label: 'Ad spend managed' },
      { value: '187+', label: 'Brands scaled' },
      { value: '97%', label: 'Client retention' },
    ],
  },

  process: [
    { step: '01', title: 'Bay & Local-Presence Audit', body: 'A 45-minute call. We review your Google Business Profile, Instagram, current booking flow, and weekday utilisation against the detailing studios competing for the same Jaipur customers.' },
    { step: '02', title: 'Offer & Campaign Plan', body: 'Within 7 days you get a written plan: your Maps and local-SEO fixes, the weekday-fill offer calendar, and the ad split that will drive bookings you actually keep the margin on.' },
    { step: '03', title: 'Build & Launch', body: 'GBP fixes, WhatsApp booking automation, and your first weekday-fill and high-ticket campaigns go live within 14 days — designed to show early bookings inside the first couple of weeks.' },
    { step: '04', title: 'Optimise Toward Booked Bays', body: 'We track bookings and job mix, not just clicks — and refine offers, targeting, and reminders as your weekday demand and package mix improve.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that reports booked bays, not clicks',
  whyUs: [
    { title: 'Right here in Jaipur', body: "Based in Pratap Nagar — we know the city's traffic patterns, car ownership clusters, and the localities where your next regular customer actually lives." },
    { title: 'We think in bay hours and margin, not vanity metrics', body: 'We optimise for weekday utilisation and high-ticket package mix — the numbers that decide whether a detailing studio is profitable, not just busy on weekends.' },
    { title: 'Proven local-service lead generation', body: 'Local, map-driven, appointment-based lead generation is core to what we do across 187+ brands — the same Google Maps and WhatsApp-first playbook we’d bring to your studio.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many cars can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the bookings your local ad budget can realistically drive.',
    source: 'Calculator — Car Detailing Jaipur',
    unitPlural: 'cars booked',
    budget: { label: 'Your monthly marketing budget', default: 30000 },
    value: { label: 'Average value of one job (₹)', default: 2000 },
    cplLow: 40,
    cplHigh: 150,
    closeRate: 0.4,
    benchmark: 'Benchmark: local car-detailing leads in Jaipur typically cost ₹40–₹150 each, with roughly 2 in 5 converting to a booked job — high enough volume that even a modest budget fills real bay time.',
    formHeadline: 'See your full booking breakdown',
    formSubhead: 'Get your numbers, the Jaipur car-detailing benchmark, and our weekday-fill playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a car detailing marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a car detailing marketing agency in Jaipur?', a: "It depends on whether you need local SEO, Google Maps optimisation, ads, or all three, and how many bays you're trying to fill. We quote exactly after the free bay audit — most Jaipur studios start with a Google Business Profile + local-SEO foundation and add weekday-fill ad campaigns on top." },
    { q: 'Can you help us sell more ceramic coating instead of just washes?', a: 'Yes — that\'s one of the biggest levers. We build dedicated campaigns and landing pages for coating and PPF packages, so your ad spend and content actively shift customer demand toward higher-margin jobs.' },
    { q: 'Will you actually get us ranking on Google Maps?', a: "That's the heart of local SEO for a detailing studio — Google Business Profile optimisation combined with review velocity and locality-specific signals. It builds over weeks, but it's the lowest long-run cost-per-booking channel a local studio has." },
    { q: 'Can you help fill our weekday bays specifically?', a: 'Yes. We build geo-fenced weekday offers and WhatsApp campaigns timed to Monday-Friday demand, so slow days get direct promotion instead of competing for the same weekend rush everyone else chases.' },
    { q: 'Do you set up repeat bookings, or just bring first-time customers?', a: 'Both. We build a WhatsApp reminder system timed to your service intervals — ceramic coating maintenance, seasonal details — so past customers rebook automatically instead of you having to chase them.' },
    { q: 'How fast will we see more bookings?', a: 'Local ad and weekday-offer campaigns typically show movement within the first 1-2 weeks. Google Maps ranking and organic local SEO compound over 8-12 weeks. Most Jaipur studios feel the weekday difference by month 2.' },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur detailing bay on weekdays too?',
    subhead: "Book a free, no-obligation bay audit. We'll review your Google Business Profile, your booking flow, and your weekday utilisation — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Bay Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR DETAILING STUDIOS',
  videoTestimonialsHeadline: 'Real studios, real bays',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur car detailing / ceramic coating clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for local & consumer brands',
    links: [
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast booking-ready sites that convert local search traffic.' },
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'For studios selling into fleets, dealerships, and corporates.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Car Detailing Lead — Jaipur',
    headline: 'Tell us about your detailing studio',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free bay audit.',
    tag: 'BOOK YOUR FREE BAY AUDIT',
  },
}
