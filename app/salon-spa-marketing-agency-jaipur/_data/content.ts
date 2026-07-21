/**
 * All copy and data for the /salon-spa-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("salon marketing
 * agency jaipur", "spa marketing agency jaipur", "salon social media
 * marketing jaipur"). Targets salon, spa, and beauty & wellness studio
 * owners hiring a local agency to fill appointment chairs and build
 * memberships, not just grow a follower count.
 *
 * PROOF RULE: there is no salon/spa-specific client result to cite, so this
 * page does NOT claim one. The only named client proof is Odra Organics — a
 * real GE organic-wellness social result (20M+ monthly reach, multiple
 * million-view reels) sourced from app/api/lead/route.ts and
 * components/sections/TrustBar.tsx — always labelled honestly as a wellness
 * brand, never implied to be a salon or spa. Neha Agarwal (D2C Skincare
 * Brand Founder — AOV +118%, repeat purchase 4× in 90 days, from
 * lib/constants.ts ALL_TESTIMONIALS) is referenced in whyUs the same way —
 * honestly labelled beauty/wellness proof, not a fabricated salon client.
 * Globally-true aggregate stats (₹10Cr+ ad spend, 10,000+ campaigns, 187+
 * brands scaled, 4.9★ across 187 reviews, 97% retention, Jaipur HQ since
 * 2021) are reused per the approved list. Nothing else is invented. The
 * calculator outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const SALON_SPA_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Salons & Spas',

  hero: {
    badge: 'JAIPUR-BASED · SALON & SPA MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Salons & Spas in Jaipur'],
    cyclingWords: [
      'Fill every weekday chair.',
      'Turn no-shows into loyal regulars.',
      'Rank #1 for "salon near me".',
      'Sell memberships, not just single visits.',
    ],
    subhead:
      'Growth Escalators is a Jaipur-based marketing agency for salons, spas, and beauty & wellness studios. We fill weekday appointment slots, cut no-shows, and build repeat memberships — backed by real results in the beauty and wellness space: 20M+ reach for organic wellness brand Odra Organics and a 118% AOV lift with 4× repeat purchases for a D2C skincare brand. We bring that same content-and-retention system to Jaipur salons and spas.',
    primaryCta: { label: 'Get a Free Booking Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '20M+', label: 'Monthly reach — Odra Organics (wellness)' },
      { emoji: '🔁', value: '4×', label: 'Repeat purchases in 90 days (D2C skincare)' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/salon-spa/hero.jpg',
      alt: 'Modern salon interior with styling chairs and soft ambient lighting',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a fully booked week actually looks like',
    subhead:
      "Jaipur's beauty and wellness demand keeps growing — the studios winning are the ones clients find first on Instagram and Google Maps, not necessarily the best hands in the city.",
    images: [
      { src: '/industries/salon-spa/1.jpg', alt: 'Hairstylist working on a client in a bright, modern salon', caption: 'Content that fills the chair, not just the feed' },
      { src: '/industries/salon-spa/2.jpg', alt: 'Spa treatment room set up for a relaxing session', caption: 'Weekday bookings, not just weekend rushes' },
      { src: '/industries/salon-spa/3.jpg', alt: 'Client checking in at a salon reception desk', caption: 'A booking system built for repeat visits' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why a great salon still has empty weekday chairs',
  painPoints: [
    { emoji: '🪑', title: 'Empty chairs Monday to Thursday', body: 'Weekends book out on their own, often weeks in advance. Monday to Thursday is where the real profit is won or lost — and most salons and spas have no deliberate system to actively fill those slots, so staff sit idle while rent and payroll keep running.' },
    { emoji: '📵', title: 'No-shows that cost you the whole slot', body: 'Clients book and simply don\'t show, and without a deposit, confirmation, or reminder system, that revenue — and the walk-in you turned away to hold the slot — is gone for good. Multiply that across a week and it adds up to real lost income.' },
    { emoji: '🏷️', title: 'Stuck running discounts just to get anyone in the door', body: 'Constant discounting eats your margin and mostly attracts price-shoppers who chase the next deal elsewhere, not the loyal, repeat clients who actually make a salon or spa profitable over the long run.' },
    { emoji: '📍', title: 'Invisible on Google Maps for "salon near me"', body: 'A thin Google Business Profile — weak photos, few categories, patchy reviews, no listed services — means new clients searching nearby find your competitor first, every single time, no matter how good your actual work is.' },
    { emoji: '🔁', title: 'Clients come once and never come back', body: 'No membership, package, or win-back system means every client is treated like a first-timer — so your best and cheapest acquisition channel, the client you already won once, keeps leaking straight back out to whoever remembers to follow up.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Salon & spa marketing that thinks in bookings, not likes',
    subhead:
      'Generic social agencies chase follower counts. Our AI is built around the numbers that actually move a salon or spa — weekday chair utilisation, no-show rate, and membership retention.',
    cards: [
      { emoji: '🎬', title: 'AI content that earns reach for beauty & wellness', body: 'We use AI to spot which transformation reels, behind-the-chair content, and hooks are earning reach in beauty and wellness right now — the same discipline behind Odra Organics\' 20M+ reach.' },
      { emoji: '📍', title: 'Google Maps rank monitoring', body: 'Continuous checks on your Google Business Profile — photos, categories, review velocity, Q&A — the exact signals that decide whether you win the local map pack for "salon near me" and "spa in Jaipur".' },
      { emoji: '💬', title: 'WhatsApp booking & win-back automation', body: 'Automated appointment reminders that cut no-shows, plus well-timed win-back offers to lapsed clients on slow weekdays — filling chairs that would otherwise sit empty.' },
      { emoji: '💳', title: 'Membership & package funnel', body: 'We build and market recurring membership and package plans that lift lifetime value instead of leaving you dependent on one-off visits — the same retention thinking that drove 4× repeat purchases for a D2C skincare brand.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete booking engine for Jaipur salons & spas',
  servicesSubhead: 'Six services, one promise: more bookings on the days that actually need them.',
  services: [
    { title: 'Instagram & Reels Content System', body: 'A monthly content engine built for reach and saves — transformation reels, behind-the-chair stories, before/after results, and staff spotlights — designed to turn scrollers into booked clients, not just followers.' },
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation — photos, services menu, categories, Q&A, review velocity — so you rank in the local map pack for "salon near me" and locality searches across C-Scheme, Vaishali Nagar, Malviya Nagar, and Mansarovar.' },
    { title: 'Booking & No-Show Reduction System', body: 'WhatsApp and SMS confirmation and reminder flows — with optional deposits for high-value services — built to protect your weekday revenue from last-minute cancellations and no-shows.' },
    { title: 'Weekday Fill & Offer Campaigns', body: 'Geo-fenced Meta and Google ads that put weekday offers in front of people within a few kilometres of your door — measured in bookings made, not impressions or reach.' },
    { title: 'Membership & Retention Marketing', body: 'Built and marketed membership and package plans plus automated win-back flows that move clients from one-time visitors to loyal regulars who rebook without being chased every time.' },
    { title: 'Reputation & Review Growth', body: 'A systemised review-request flow that grows fresh 5-star Google reviews after every visit — the trust and ranking signal that quietly decides who gets the next new client in your area.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A real beauty & wellness result',
  resultHighlight: {
    label: 'FEATURED CLIENT · ORGANIC WELLNESS BRAND',
    name: 'Odra Organics',
    detail: 'Organic Wellness Brand · Social + Content',
    quote:
      "We built a content system engineered for reach, not vanity numbers. For organic wellness brand Odra Organics, that meant 20M+ monthly reach with multiple reels crossing a million views each — the same content-and-growth system we bring to salons and spas ready to fill their chairs.",
    metrics: [
      { value: '20M+', label: 'Monthly reach (Odra Organics)' },
      { value: '1M+', label: 'Views per reel, multiple times' },
      { value: '97%', label: 'Client retention (agency-wide)' },
    ],
  },

  process: [
    { step: '01', title: 'Booking & Brand Audit', body: 'A 45-minute call (or an in-person visit to your Jaipur studio). We review your Instagram, Google Business Profile, booking flow, no-show rate, and membership offering against the salons and spas competing in your locality for the same clients.' },
    { step: '02', title: 'Content & Campaign Plan', body: 'Within 7 days you get a written plan: your content pillars, the weekday-fill offer calendar, and the ad + local-SEO split that will drive bookings you actually keep, not just visibility.' },
    { step: '03', title: 'Build & Launch', body: 'Content system, GBP fixes, WhatsApp booking and reminder automation, and your first weekday-fill campaigns go live within 14 days — designed to show early wins inside the first couple of weeks.' },
    { step: '04', title: 'Optimise Toward Bookings', body: 'We review weekday chair utilisation, no-show rate, and membership sign-ups — not just likes or impressions — and refresh content and offers as your slow days and seasons shift throughout the year.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur salon & spa agency that reports bookings, not likes',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we know the city\'s salon and spa clusters, seasonal demand, and the localities where your next 500 regulars actually live.' },
    { title: 'We think in bookings and retention, not vanity metrics', body: 'We optimise for weekday chair utilisation, no-show rate, and membership sign-ups — the numbers that decide whether a salon or spa is profitable, not just popular.' },
    { title: 'Real proof in beauty & wellness', body: 'Odra Organics crossed 20M+ reach, and a D2C skincare brand led by Neha Agarwal saw AOV up 118% with repeat purchases up 4× in 90 days — the same retention system we build for salons and spas.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 187+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new clients can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the bookings your marketing budget can realistically drive.',
    source: 'Calculator — Salon & Spa Jaipur',
    unitPlural: 'new clients',
    budget: { label: 'Your monthly marketing budget', default: 40000 },
    value: { label: 'Average value of one client (₹, incl. repeat visits)', default: 2000 },
    cplLow: 50,
    cplHigh: 150,
    closeRate: 0.5,
    benchmark: 'Benchmark: well-run local salon & spa campaigns in Jaipur bring engaged leads at roughly ₹50–₹150 each, with about half converting to a first booking. Memberships and repeat visits do the real work after that.',
    formHeadline: 'See your full booking breakdown',
    formSubhead: 'Get your numbers, the Jaipur salon & spa benchmark, and the beauty & wellness playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a salon & spa marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a salon or spa marketing agency in Jaipur?', a: "It depends on whether you need content, ads, local SEO, or a full booking-and-retention system, and how many branches you run. We quote exactly after the free booking audit — most Jaipur salons and spas start with a content + local-SEO package and add weekday-fill campaigns once the base is strong." },
    { q: 'Can you actually reduce our no-shows?', a: "Yes — that's a core part of the booking system we build. WhatsApp and SMS confirmations, reminders, and optional deposits significantly cut no-show rates, protecting the revenue you'd otherwise lose on empty slots." },
    { q: 'Will you actually get us ranking on Google Maps for "salon near me"?', a: "That's the heart of local SEO for salons and spas — Google Business Profile optimisation combined with review velocity and locality-specific signals. It builds over weeks, but it's the lowest long-run cost-per-client channel you have." },
    { q: 'Do you help us sell memberships or packages, not just single visits?', a: "Yes — membership and retention marketing is one of our core services. We help you design, price, and market membership or package plans, then automate the win-back flow that keeps lapsed clients coming back." },
    { q: 'We run multiple branches — can you handle that?', a: "Yes. We structure separate tracking, offers, and local SEO per branch so you can see which location and which campaign is actually driving bookings, rather than one blended, unreadable number." },
    { q: 'How fast will we see more bookings?', a: "Weekday-fill and offer campaigns typically show movement within the first 1-2 weeks. Content growth and Google Maps ranking compound over 8-12 weeks. Most Jaipur salons and spas feel the weekday difference by month 2." },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur salon or spa on the slow days too?',
    subhead: "Book a free, no-obligation booking audit. We'll review your Instagram, your Google Business Profile, and your no-show rate — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Booking Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR SALONS & SPAS',
  videoTestimonialsHeadline: 'Real studios, real bookings',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur salon/spa clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for local & consumer brands',
    links: [
      { label: 'Gym & Fitness Marketing Agency in Jaipur', href: '/gym-fitness-marketing-agency-jaipur', blurb: 'For fitness studios that live on membership sign-ups and retention.' },
      { label: 'D2C Beauty Marketing', href: '/d2c/beauty', blurb: 'Our beauty & wellness performance-marketing playbook for D2C brands.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Salon/Spa Lead — Jaipur',
    headline: 'Tell us about your salon or spa',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free booking audit.',
    tag: 'BOOK YOUR FREE BOOKING AUDIT',
  },
}
