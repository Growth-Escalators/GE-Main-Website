/**
 * All copy and data for the /doctors-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("marketing agency
 * for doctors in jaipur", "healthcare marketing agency jaipur", "clinic
 * marketing jaipur"). Deliberately distinct from the national
 * /patient-acquisition-agency (funnel/outcome intent) and
 * /personal-branding-for-doctors (individual physician authority intent)
 * pages: this one is about a Jaipur clinic owner hiring a local agency.
 *
 * PROOF RULE: the only client proof used is Rohit Sharma (Healthcare Clinic
 * Owner) — real, exact quote and metric from lib/constants.ts
 * (ALL_TESTIMONIALS id 8). Globally-true stats (₹10Cr+ ad spend, 4.9★/187
 * reviews, 97% retention, founded 2021, Jaipur HQ) are reused per the
 * approved list. Nothing else is invented.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const DOCTORS_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Healthcare',

  hero: {
    badge: 'JAIPUR-BASED · HEALTHCARE MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency', 'for Doctors in Jaipur'],
    cyclingWords: [
      'Built for multispecialty clinics.',
      'Built for dental practices.',
      'Built for dermatologists.',
      'Built for hospitals.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for doctors, clinics, and hospitals. We turn Google Maps searches, Google Ads, and WhatsApp follow-ups into booked appointments, not just website clicks. One Jaipur multispecialty clinic saw online appointment bookings jump 220% in 4 months after we rebuilt their Google Ads and local SEO.",
    primaryCta: { label: 'Book a Free Clinic Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '+220%', label: 'Bookings (real Jaipur clinic)' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
      { emoji: '⭐', value: '4.9★', label: '187 Google reviews' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most clinic marketing in Jaipur fails to fill the calendar',
  painPoints: [
    { emoji: '🗺️', title: 'Invisible on Google Maps', body: 'Patients searching "clinic near me" or "[specialty] in Jaipur" never see you because your Google Business Profile has weak categories, stale hours, no photos, and unanswered Q&A — so the local map pack shows your competitor instead.' },
    { emoji: '📵', title: 'No-shows quietly eating your schedule', body: "Without automated WhatsApp confirmations and reminders, a meaningful share of booked slots simply don't show up — and nobody's tracking the no-show rate, so it never gets fixed." },
    { emoji: '⚠️', title: 'Generic agencies that don\'t know healthcare ad rules', body: "Google and Meta both restrict health-related ad claims and targeting. Agencies unfamiliar with this get healthcare ad accounts flagged or creative rejected — and you find out only after your campaign stalls." },
    { emoji: '💸', title: 'Nobody tracks cost per new patient', body: "Most clinics know their monthly ad spend but not what a single booked, showed-up patient actually costs them — so budget decisions are guesses, not numbers." },
    { emoji: '🤝', title: "Referrals alone can't fill new capacity", body: "Jaipur's clinic clusters — Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar — are competitive. Word-of-mouth reaches your existing network, not the patients actively searching online right now." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Healthcare marketing needs healthcare-specific intelligence',
    subhead:
      'Generic ad platforms weren\'t built for healthcare\'s ad-policy restrictions or a clinic\'s appointment-driven economics. Our AI is built around both — and it shows up across the entire Jaipur patient journey.',
    cards: [
      { emoji: '🧠', title: 'AI patient-intent scoring', body: 'Every enquiry is scored against real booking-intent signals before your front desk calls back, so staff spend time on people actually looking to book — not casual browsers or insurance-shoppers.' },
      { emoji: '📍', title: 'AI-assisted Google Business Profile monitoring', body: 'Continuous checks on photos, review velocity, Q&A gaps, and category accuracy — the signals that decide whether you show up in the Jaipur local map pack for your specialty.' },
      { emoji: '💬', title: 'WhatsApp no-show prediction', body: 'AI flags appointments at higher risk of a no-show based on booking patterns and triggers an extra confirmation touch — recovering slots that would otherwise sit empty.' },
      { emoji: '✅', title: 'Compliant ad copy, built in', body: 'Creative and targeting generated against Google and Meta\'s healthcare ad policies from the start, so campaigns don\'t get disapproved or your ad account flagged mid-launch.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete patient-booking engine for Jaipur clinics',
  servicesSubhead: 'Six services, one promise: a calendar of booked patients who actually show up.',
  services: [
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation — categories, photos, Q&A, review velocity — plus on-page SEO to rank for "doctor near me," "[specialty] in Jaipur," and locality-specific searches across Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar, and Jagatpura.' },
    { title: 'Healthcare-Compliant Google & Meta Ads', body: 'Condition- and treatment-level campaigns built to survive health-ad policy review, geo-fenced to Jaipur and Rajasthan, so your budget reaches patients who can actually visit you.' },
    { title: 'WhatsApp Appointment & No-Show System', body: 'Automated booking confirmations, reminders, and reschedule flows via WhatsApp — built to recover the slots that would otherwise go empty.' },
    { title: 'Clinic Website & Booking Funnel', body: 'A mobile-first site with online booking built for how Jaipur patients actually search on their phones — fast load, clear credentials, one-tap appointment requests.' },
    { title: 'Reputation & Review Growth', body: 'A systemised post-visit review-request flow that builds the Google review base driving both local-pack ranking and patient trust before they even call.' },
    { title: 'Multi-Doctor & Multi-Location Campaigns', body: 'For hospitals or clinics with multiple Jaipur branches or specialists under one roof, we structure campaigns and tracking per doctor and per location — not one blended, unreadable account.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A Jaipur clinic we helped fill the calendar',
  resultHighlight: {
    label: 'FEATURED CLIENT · JAIPUR HEALTHCARE',
    name: 'Rohit Sharma',
    detail: 'Multispecialty Clinic Owner · Google Ads + Local SEO',
    quote:
      "Running a multispecialty clinic, I had no idea how to get patients digitally. Growth Escalators set up Google Ads and a local SEO strategy. Within 4 months, online appointment bookings were up 220%. The ROI is unlike anything I've seen.",
    metrics: [
      { value: '+220%', label: 'Online appointment bookings' },
      { value: '4 months', label: 'Time to results' },
    ],
  },

  process: [
    { step: '01', title: 'Clinic & GBP Audit', body: 'A 45-minute call (or an in-person visit to your Jaipur clinic). We review your Google Business Profile, current ads, booking flow, and no-show rate against the clinics competing in your locality.' },
    { step: '02', title: 'Compliance-First Campaign Plan', body: 'Within 7 days you get a written plan: which specialties or treatments to target, budget split across Google Ads, Meta, and local SEO, and the health-ad policy guardrails we\'ll build around from day one.' },
    { step: '03', title: 'Build & Launch', body: 'GBP fixes, tracking, WhatsApp automation, and your first campaigns go live within 14 days. Most clinics see their first new enquiry inside the first week.' },
    { step: '04', title: 'Optimise Toward Booked Patients, Not Clicks', body: 'We review cost-per-booked-patient and no-show rate weekly — not just cost-per-lead — and refresh creative and targeting as your capacity and specialties change.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur healthcare agency that reports booked patients, not clicks',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we know the clinic clusters across Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar, and Jagatpura, and we can sit in your clinic, not just send a report.' },
    { title: 'Healthcare ad-policy fluent', body: "We build inside Google and Meta's healthcare advertising restrictions from the start, so your account doesn't get flagged and your claims don't get rejected mid-campaign." },
    { title: 'Cost-per-booked-patient accountable', body: "We don't optimise for cheap leads or clicks; we optimise for patients who actually book and show up. That's the number we report every week." },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ rating across 187 Google reviews, and a 97% client retention rate — across 100+ brands, based in Jaipur since 2021.' },
  ],

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a marketing agency for doctors in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a marketing agency for a clinic in Jaipur?', a: "It depends on your specialty, current patient volume, and whether you need website/booking work alongside ads. We quote exactly after the free clinic audit — most Jaipur clinics start with a focused Google Ads + local SEO package before adding WhatsApp automation." },
    { q: 'Can you actually get us ranking on Google Maps for "doctor near me" in Jaipur?', a: "That's the core of local SEO for clinics — Google Business Profile optimisation (categories, photos, Q&A, review velocity) combined with locality-specific on-page SEO. It compounds over months rather than happening overnight, but it's the traffic source with the lowest long-run cost per patient." },
    { q: "Do you understand Google and Meta's healthcare advertising restrictions?", a: "Yes — this is where most generic agencies stumble. Health-related ad claims and targeting are restricted on both platforms, and campaigns built without accounting for that get disapproved or flag the whole ad account. We build compliant creative and targeting from the first campaign." },
    { q: 'Can you help reduce patient no-shows?', a: "Yes — automated WhatsApp confirmations and reminders, timed around your appointment scheduling, recover a meaningful share of the slots that would otherwise go empty. We track no-show rate as a core weekly metric, not an afterthought." },
    { q: 'Do you only work with multispecialty clinics, or individual specialists too?', a: "Both. We've worked with multispecialty clinics as well as individual specialists — dermatologists, dentists, orthopaedists — and the campaign structure differs: specialist marketing is built around specific procedures and conditions, not a generic 'book an appointment' message." },
    { q: 'How fast will we see new patient bookings?', a: "Google Ads enquiries typically start within the first 1-2 weeks. Local SEO and Google Maps ranking build over 8-12 weeks as your Google Business Profile signals strengthen. Most Jaipur clinics see meaningful booking volume from the combined approach by month 2-3." },
    { q: 'Do you handle clinics with multiple locations across Jaipur?', a: "Yes — for hospitals or clinic groups with multiple Jaipur branches, we structure separate tracking and campaigns per location and per doctor, so you can see exactly which branch and which specialist is converting, not one blended number." },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur clinic\'s calendar with real patients?',
    subhead: "Book a free, no-obligation clinic audit. We'll review your Google Business Profile, your current ads, and your no-show rate — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Clinic Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR DOCTORS',
  videoTestimonialsHeadline: 'Real clinics, real bookings',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur clinic clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for doctors and clinics',
    links: [
      { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Our national patient-acquisition service — booking funnels, treatment-level ads, no-show fixes.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Building the individual physician\'s authority and LinkedIn presence, not just the clinic.' },
      { label: 'Marketing for Doctors & Clinics', href: '/doctors', blurb: 'Our national doctors hub — the full picture of how we work with healthcare clients.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Jaipur Doctor Lead',
    headline: 'Tell us about your clinic',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE CLINIC AUDIT',
  },
}
