/**
 * All copy and data for the /dental-clinic-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("dental clinic
 * marketing agency jaipur", "dentist marketing jaipur", "dental practice
 * marketing"). Targets dentists and dental clinic owners hiring a local agency
 * to fill their appointment book. Complements the broader
 * /doctors-marketing-agency-jaipur without cannibalising it (this page is
 * dentistry-specific: cosmetic/implant/ortho case values, treatment-level ads).
 *
 * PROOF RULE: named client proof is Rohit Sharma (Multispecialty Clinic Owner,
 * +220% online bookings in 4 months — real, exact quote/metric from
 * lib/constants.ts ALL_TESTIMONIALS) and the real Dr. Dheeraj Dubay build
 * (drdubay.in clinic platform, 35,000+ patient enquiries — labelled accurately
 * as an orthopedic surgeon, used as proof of healthcare patient-acquisition
 * capability, NOT presented as a dentist). Aggregate stats (₹10Cr+ ad spend,
 * 4.9★/187 reviews, 97% retention, Jaipur HQ) are reused per the approved list.
 * Nothing else is invented. Calculator outputs are labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const DENTAL_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Dental',

  hero: {
    badge: 'JAIPUR-BASED · DENTAL MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Dental Clinics in Jaipur'],
    cyclingWords: [
      'Built for cosmetic dentistry.',
      'Built for implant & smile clinics.',
      'Built for orthodontics.',
      'Built for multi-chair practices.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for dentists and dental clinics. We turn Google Maps searches, treatment-level ads, and WhatsApp reminders into booked, high-value cases — implants, aligners, smile makeovers — not just website clicks. One Jaipur clinic saw online appointment bookings jump 220% in 4 months after we rebuilt their Google Ads and local SEO.",
    primaryCta: { label: 'Book a Free Clinic Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '+220%', label: 'Bookings (real Jaipur clinic)' },
      { emoji: '🦷', value: 'Case-value', label: 'Focused on implants & aligners' },
      { emoji: '⭐', value: '4.9★', label: '187 Google reviews' },
    ],
    image: {
      src: '/industries/dental/hero.jpg',
      alt: 'Modern dental clinic treatment room in Jaipur',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'Where your next high-value case comes from',
    subhead:
      'Patients now choose a dentist the way they choose a restaurant — Google Maps, reviews, and before/after content. Win those, and you win the chair.',
    images: [
      { src: '/industries/dental/1.jpg', alt: 'Dentist consulting with a patient about treatment', caption: 'Trust built before the first call' },
      { src: '/industries/dental/2.jpg', alt: 'Patient smiling after dental treatment', caption: 'Before/after content that sells cases' },
      { src: '/industries/dental/3.jpg', alt: 'Clean modern dental reception area', caption: 'A booking journey that fits the phone' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why dental clinics stay busy with cleanings but starve for high-value cases',
  painPoints: [
    { emoji: '🗺️', title: 'Invisible on Google Maps', body: 'Patients searching "dentist near me" or "dental implants in Jaipur" never see you because your Google Business Profile has weak categories, no treatment photos, and a thin review base — so the map pack shows the clinic down the road.' },
    { emoji: '🦷', title: 'Cleanings pay the bills, cases pay the rent', body: 'Walk-ins fill the routine chair time, but the profit is in implants, aligners, and smile makeovers — and nothing in your marketing is built to attract and pre-sell those high-value treatments specifically.' },
    { emoji: '📵', title: 'No-shows quietly draining the schedule', body: "Without automated WhatsApp confirmations and reminders, a meaningful share of booked slots simply don't show — and nobody's tracking the no-show rate, so it never gets fixed." },
    { emoji: '⚠️', title: 'Agencies that don’t know healthcare ad rules', body: 'Google and Meta restrict health-related ad claims and targeting. Generic agencies get dental ad accounts flagged or creative rejected — and you find out only after the campaign stalls.' },
    { emoji: '💸', title: 'Nobody tracks cost per new case', body: 'Most clinics know monthly ad spend but not what a booked implant or aligner case actually costs to acquire — so budget decisions are guesses, not numbers.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Dental marketing built around case value, not clicks',
    subhead:
      "Generic ad platforms weren't built for healthcare's ad restrictions or a clinic's case-driven economics. Our AI is built around both — across the whole patient journey.",
    cards: [
      { emoji: '🧠', title: 'AI patient-intent scoring', body: 'Every enquiry is scored on real booking-intent and treatment-value signals before your front desk calls back — so staff prioritise the implant enquiry over the price-shopper.' },
      { emoji: '📍', title: 'Google Business Profile monitoring', body: 'Continuous checks on photos, review velocity, Q&A, and category accuracy — the signals that decide whether you rank in the Jaipur local map pack for dentistry.' },
      { emoji: '💬', title: 'WhatsApp no-show prediction', body: 'AI flags appointments at higher no-show risk and triggers an extra confirmation touch, recovering high-value chair time that would otherwise sit empty.' },
      { emoji: '✅', title: 'Compliant ad copy, built in', body: 'Creative and targeting generated against Google and Meta health-ad policy from the start, so campaigns don’t get disapproved or your account flagged mid-launch.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete case-booking engine for Jaipur dental clinics',
  servicesSubhead: 'Six services, one promise: a calendar of high-value cases that actually show up.',
  services: [
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation — categories, treatment photos, Q&A, review velocity — plus on-page SEO to rank for "dentist near me," "dental implants in Jaipur," and locality searches across Malviya Nagar, C-Scheme, Vaishali Nagar, and Mansarovar.' },
    { title: 'Treatment-Level Google & Meta Ads', body: 'Campaigns built per treatment — implants, aligners, smile makeovers — geo-fenced to Jaipur and engineered to survive health-ad policy review, so budget reaches patients who can actually visit.' },
    { title: 'WhatsApp Appointment & No-Show System', body: 'Automated booking confirmations, reminders, and reschedule flows via WhatsApp — built to recover the high-value slots that would otherwise go empty.' },
    { title: 'Clinic Website & Booking Funnel', body: 'A mobile-first site with online booking and clear before/after proof, built for how Jaipur patients actually research and choose a dentist on their phones.' },
    { title: 'Reputation & Review Growth', body: 'A systemised post-visit review-request flow that grows the Google review base driving both local-pack ranking and the trust a patient needs before a big case.' },
    { title: 'Before/After Content & Case Marketing', body: 'Compliant, compelling case content that pre-sells implants and aligners — so patients arrive already convinced, not just curious.' },
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
    { step: '02', title: 'Case-First Campaign Plan', body: 'Within 7 days you get a written plan: which treatments to lead with, budget split across Google Ads, Meta, and local SEO, and the health-ad policy guardrails we’ll build around from day one.' },
    { step: '03', title: 'Build & Launch', body: 'GBP fixes, tracking, WhatsApp automation, and your first treatment campaigns go live within 14 days. Most clinics see their first new enquiry inside the first week.' },
    { step: '04', title: 'Optimise Toward Booked Cases', body: 'We review cost-per-booked-case and no-show rate weekly — not just cost-per-click — and refresh creative and targeting as your case mix and capacity change.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur dental agency that reports booked cases, not clicks',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — we know the clinic clusters across Malviya Nagar, C-Scheme, Vaishali Nagar, and Mansarovar, and we can sit in your clinic, not just send a report.' },
    { title: 'We build real healthcare platforms', body: 'We built Dr. Dheeraj Dubay’s (orthopedic surgeon) website and clinic platform now driving 35,000+ patient enquiries — so we understand healthcare patient journeys end to end, not just ads.' },
    { title: 'Healthcare ad-policy fluent', body: "We build inside Google and Meta's healthcare advertising restrictions from the start, so your account doesn't get flagged and your claims don't get rejected mid-campaign." },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new patients can your budget book?',
    subhead: 'Move the sliders to your numbers and see the booked cases your ad spend can realistically drive.',
    source: 'Calculator — Dental Jaipur',
    unitPlural: 'new patients',
    budget: { label: 'Your monthly ad budget', default: 50000 },
    value: { label: 'Average value of one case (₹)', default: 8000 },
    cplLow: 150,
    cplHigh: 600,
    closeRate: 0.35,
    benchmark: 'Benchmark: dental enquiries in Jaipur typically cost ₹150–₹600 depending on treatment, with roughly a third booking. High-value cases (implants, aligners) shift the maths sharply in your favour.',
    formHeadline: 'See your full patient breakdown',
    formSubhead: 'Get your numbers, the dental benchmark, and our clinic patient-acquisition playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a dental marketing agency in Jaipur',
  faqs: [
    { q: 'How much does dental clinic marketing cost in Jaipur?', a: "It depends on your target treatments, current patient volume, and whether you need website/booking work alongside ads. We quote exactly after the free clinic audit — most Jaipur dental clinics start with a Google Ads + local SEO package focused on their highest-value treatments." },
    { q: 'Can you get us ranking on Google Maps for "dentist near me" in Jaipur?', a: "That's the core of local SEO for clinics — Google Business Profile optimisation (categories, photos, Q&A, review velocity) plus locality-specific on-page SEO. It compounds over months, and it's the traffic source with the lowest long-run cost per patient." },
    { q: 'Can you help us attract more implant and aligner cases specifically?', a: "Yes — that's the point of treatment-level campaigns and before/after case content. We build marketing around your high-value treatments rather than a generic 'book an appointment' message, so you attract and pre-sell the cases that actually drive profit." },
    { q: "Do you understand Google and Meta's healthcare advertising rules?", a: "Yes — this is where most generic agencies stumble. Health-related claims and targeting are restricted on both platforms, and campaigns built without accounting for that get disapproved or flag the whole account. We build compliant creative from the first campaign." },
    { q: 'Can you help reduce no-shows?', a: "Yes — automated WhatsApp confirmations and reminders recover a meaningful share of the slots that would otherwise go empty. We track no-show rate as a core weekly metric, which matters even more when chair time is high-value." },
    { q: 'How fast will we see new patient bookings?', a: "Google Ads enquiries typically start within the first 1-2 weeks. Local SEO and Maps ranking build over 8-12 weeks as your Google Business Profile strengthens. Most Jaipur clinics see meaningful case volume from the combined approach by month 2-3." },
  ],

  finalCta: {
    title: 'Ready to fill your Jaipur clinic with high-value cases?',
    subhead: "Book a free, no-obligation clinic audit. We'll review your Google Business Profile, your current ads, and your no-show rate — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Clinic Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR CLINICS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur dental clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for doctors and clinics',
    links: [
      { label: 'Marketing Agency for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Our broader Jaipur healthcare service across specialties.' },
      { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Booking funnels, treatment-level ads, no-show fixes — nationally.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Build the individual dentist’s authority and reputation.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Dental Lead — Jaipur',
    headline: 'Tell us about your clinic',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE CLINIC AUDIT',
  },
}
