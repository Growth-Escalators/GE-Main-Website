/**
 * All copy and data for the Doctors landing page lives here.
 *
 * EDIT THIS FILE to:
 *   - tweak the hero headline / subhead
 *   - update services / pain points / FAQ
 *   - add real YouTube Shorts testimonial URLs
 *
 * The page reads from these constants, so changes show up on next reload.
 */

import type { VideoTestimonial } from '@/components/landing/VideoTestimonialsShorts'

// ── HERO ──────────────────────────────────────────────────────────────────────
export const HERO = {
  badge: 'TRUSTED BY 50+ DOCTORS ACROSS INDIA',
  headlineLines: ['More Patients.', 'Less Ad Spend.'],
  cyclingWords: ['Built for doctors.', 'Built for clinics.', 'Built for hospitals.', 'Built for surgeons.'],
  subhead:
    "We help doctors and clinics fill their calendars with high-intent patients through performance marketing, content, and conversion-focused websites — without the agency fluff.",
  primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
  secondaryCta: { label: 'See Real Results ↓', href: '#results' },
  statPills: [
    { emoji: '🩺', value: '50+',  label: 'Doctors Served'  },
    { emoji: '📅', value: '12k+', label: 'Appointments'    },
    { emoji: '📈', value: '4.2×', label: 'Avg. ROI'        },
  ],
}

// ── PAIN POINTS ───────────────────────────────────────────────────────────────
export const PAIN_POINTS = [
  {
    emoji: '😟',
    title: 'Empty appointment slots',
    body: "Patients are searching online — they're just not finding you. Word-of-mouth alone isn't enough anymore.",
  },
  {
    emoji: '💸',
    title: 'Burning money on bad ads',
    body: 'Generic agencies don\'t understand healthcare. They run ads that get clicks but no real patients.',
  },
  {
    emoji: '🌐',
    title: 'A website that doesn\'t convert',
    body: "Slow load times, no online booking, weak credibility cues. Visitors leave before reaching out.",
  },
  {
    emoji: '🤳',
    title: 'No time for content',
    body: "You're treating patients all day. Building a personal brand on Instagram and YouTube feels impossible.",
  },
]

// ── SERVICES (doctor-specific) ────────────────────────────────────────────────
export const SERVICES = [
  {
    title: 'Patient Acquisition Ads',
    body: 'High-intent Meta + Google campaigns engineered for clinics and hospitals. Targeting that respects medical advertising compliance.',
  },
  {
    title: 'Clinic Website Development',
    body: 'Conversion-optimized sites with online booking, multi-location support, and trust elements that actually convert visitors.',
  },
  {
    title: 'Personal Branding for Doctors',
    body: "Build authority on Instagram, YouTube Shorts, and LinkedIn. We handle the strategy, scripting, editing, and posting.",
  },
  {
    title: 'Local SEO & Google Maps',
    body: 'Rank for "<your specialty> near me" in your service areas. Reviews, citations, and Maps ranking — done right.',
  },
  {
    title: 'WhatsApp Lead Funnels',
    body: 'Automated patient-intake flows on WhatsApp. Pre-qualify enquiries before they hit your front desk.',
  },
  {
    title: 'Reputation Management',
    body: 'More 5-star Google reviews on autopilot. Negative-review response strategy. Brand monitoring across platforms.',
  },
]

// ── PROCESS ───────────────────────────────────────────────────────────────────
export const PROCESS = [
  {
    step: '01',
    title: 'Diagnostic Call',
    body: 'A free 30-minute call. We audit your current marketing, identify the biggest leaks, and tell you what we\'d fix first.',
  },
  {
    step: '02',
    title: 'Strategy Blueprint',
    body: 'Within 7 days you get a written plan — channels, budget split, expected timelines, KPIs we\'ll be accountable for.',
  },
  {
    step: '03',
    title: 'Launch & Optimize',
    body: 'Campaigns go live within 2 weeks. We test, iterate, and report transparently every week.',
  },
  {
    step: '04',
    title: 'Scale What Works',
    body: 'Once we hit consistent CAC targets, we double down on the channels and creatives that perform — month over month.',
  },
]

// ── WHY US ────────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    title: 'Healthcare-only focus',
    body: "We don't take e-com clients on this team. Doctors and clinics only. Compliance and patient psychology baked in.",
  },
  {
    title: 'Transparent reporting',
    body: 'Live dashboards. Weekly Loom updates. You always know exactly where your spend is going and what it\'s returning.',
  },
  {
    title: 'In-house creative team',
    body: "No outsourced freelancers. Scripts, edits, designs — done by people who report directly to your account manager.",
  },
  {
    title: 'Performance contracts',
    body: 'We can structure deals around CPL or CAC targets, not just retainers. Skin in the game.',
  },
]

// ── VIDEO TESTIMONIALS ────────────────────────────────────────────────────────
//
// Add real YouTube Shorts URLs here. Format accepts:
//   https://www.youtube.com/shorts/<id>
//   https://www.youtube.com/watch?v=<id>
//   https://youtu.be/<id>
//
// Empty array → component shows a friendly "coming soon" empty state.
// Invalid URLs are silently dropped.
//
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  // PLACEHOLDER — replace with real YouTube Shorts URLs from your clients.
  // Examples of the shape:
  // {
  //   url: 'https://www.youtube.com/shorts/AbCdEfGhIjK',
  //   name: 'Dr. Dheeraj Dubay',
  //   title: 'Orthodontist',
  //   org: 'Dubay Dental Clinic',
  //   location: 'Jaipur',
  // },
]

// ── RESULTS HIGHLIGHT (single featured doctor) ────────────────────────────────
export const RESULT_HIGHLIGHT = {
  doctor: 'Dr. Dheeraj Dubay',
  specialization: 'Orthodontics & Cosmetic Dentistry',
  location: 'Jaipur',
  metrics: [
    { value: '+312%', label: 'New patient bookings (90 days)' },
    { value: '₹187',  label: 'Cost per qualified lead'        },
    { value: '8.4×',  label: 'Return on ad spend'             },
  ],
  quote:
    "Growth Escalators didn't just bring me leads — they brought me the right patients. My calendar's been full for 4 months straight, and my ad cost is half of what I was paying before.",
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'How long before I start seeing results?',
    a: 'Most of our doctor clients see qualified enquiries within the first 2–3 weeks. Consistent month-over-month results typically stabilize by month 2–3 once we have enough data to optimize.',
  },
  {
    q: 'What\'s the typical investment?',
    a: 'Marketing budgets vary by specialization and city. Solo clinics typically start at ₹50k–₹1L/month total (services + ad spend). Multi-location practices and hospitals are quoted bespoke.',
  },
  {
    q: 'Do you sign exclusivity contracts?',
    a: 'Yes — we work with one practice per specialization in a given city. Once you\'re in, your competitors can\'t hire us in your geography.',
  },
  {
    q: 'Will my ads comply with medical advertising rules?',
    a: 'Always. We follow Indian Medical Council guidelines, Meta\'s healthcare ad policies, and Google\'s medical advertising rules. No misleading promises, no banned terminology.',
  },
  {
    q: 'Can you handle social media content for me?',
    a: 'Yes. We script, shoot (locally for Jaipur clients, remote for others), edit, post, and manage community for Instagram, YouTube Shorts, and LinkedIn.',
  },
  {
    q: 'What if I want to pause or stop?',
    a: '30-day notice on retainer contracts. Performance contracts are month-to-month with the targets agreed upfront. No long lock-ins.',
  },
]
