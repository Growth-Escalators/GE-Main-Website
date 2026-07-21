/**
 * All copy and data for the /doctors landing page.
 *
 * EDIT this file to change anything visible on the page.
 * Page composition lives in app/doctors/page.tsx.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const DOCTORS_CONTENT: LandingContent = {
  industryLabel: 'Doctor',

  hero: {
    badge: 'TRUSTED BY 50+ DOCTORS ACROSS INDIA',
    headlineLines: ['More Patients.', 'Less Ad Spend.'],
    cyclingWords: ['Built for doctors.', 'Built for clinics.', 'Built for hospitals.', 'Built for surgeons.'],
    subhead:
      "We help doctors and clinics fill their calendars with high-intent patients through AI-powered performance marketing, content, and conversion-focused websites — without the agency fluff.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🩺', value: '50+',  label: 'Doctors Served'  },
      { emoji: '📅', value: '12k+', label: 'Appointments'    },
      { emoji: '📈', value: '4.2×', label: 'Avg. ROI'        },
    ],
    image: {
      src: '/industries/healthcare/hero.jpg',
      alt: 'Doctor consulting a patient in a clinic',
    },
  },

  painPointsHeadline: "What's really holding your practice back",
  painPoints: [
    { emoji: '😟', title: 'Empty appointment slots',    body: "Patients are searching online — they're just not finding you. Word-of-mouth alone isn't enough anymore." },
    { emoji: '💸', title: 'Burning money on bad ads',   body: "Generic agencies don't understand healthcare. They run ads that get clicks but no real patients." },
    { emoji: '🌐', title: "A website that doesn't convert", body: 'Slow load times, no online booking, weak credibility cues. Visitors leave before reaching out.' },
    { emoji: '🤳', title: 'No time for content',        body: "You're treating patients all day. Building a personal brand on Instagram and YouTube feels impossible." },
  ],

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full appointment calendar looks like',
    subhead:
      'Patients now search "doctor near me" before they ask a friend — the practices that show up first, with the clearest online presence, win the appointment.',
    images: [
      { src: '/industries/healthcare/1.jpg', alt: 'Doctor consulting with a patient', caption: 'Trust built before the patient ever walks in' },
      { src: '/industries/healthcare/2.jpg', alt: 'Physician reviewing patient records', caption: 'A calendar that fills itself, not one you chase' },
      { src: '/industries/healthcare/3.jpg', alt: 'Medical team collaborating in a clinic', caption: 'A practice built to scale beyond one doctor' },
    ],
  },

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'AI-first agency, not AI-curious',
    subhead:
      "While most agencies are still figuring out ChatGPT, we've built proprietary AI workflows into every campaign. The result: faster decisions, lower ad costs, more patients.",
    cards: [
      { emoji: '🧠', title: 'AI lead-scoring & qualification', body: 'Every enquiry is scored by intent and fit before it hits your front desk. You only spend time on patients ready to book.' },
      { emoji: '✍️',  title: 'AI-generated patient-search SEO', body: 'We rank you for hundreds of long-tail "<your specialty> near me" searches your competitors miss — content drafted by AI, edited by humans.' },
      { emoji: '🎯', title: 'Smart-bid creative testing',     body: 'Our AI rotates 30+ ad creatives in parallel and concentrates spend on the winners — within hours, not weeks.' },
      { emoji: '💬', title: 'AI WhatsApp pre-screening',       body: 'New leads get an instant AI-driven conversation that qualifies budget, urgency, and fit before booking a call.' },
    ],
  },

  servicesHeadline: 'Marketing engineered for healthcare',
  servicesSubhead: "Six services, one outcome: a calendar that's consistently full of the right patients.",
  services: [
    { title: 'Patient Acquisition Ads',     body: 'High-intent Meta + Google campaigns engineered for clinics and hospitals. Targeting that respects medical advertising compliance.' },
    { title: 'Clinic Website Development',  body: 'Conversion-optimized sites with online booking, multi-location support, and trust elements that actually convert visitors.' },
    { title: 'Personal Branding for Doctors', body: 'Build authority on Instagram, YouTube Shorts, and LinkedIn. We handle the strategy, scripting, editing, and posting.' },
    { title: 'Local SEO & Google Maps',     body: 'Rank for "<your specialty> near me" in your service areas. Reviews, citations, and Maps ranking — done right.' },
    { title: 'WhatsApp Lead Funnels',       body: 'Automated patient-intake flows on WhatsApp. Pre-qualify enquiries before they hit your front desk.' },
    { title: 'Reputation Management',       body: 'More 5-star Google reviews on autopilot. Negative-review response strategy. Brand monitoring across platforms.' },
  ],

  resultsHeadline: "Doctors we've helped grow",
  resultHighlight: {
    label: 'FEATURED CLIENT',
    name: 'Dr. Dheeraj Dubay',
    detail: 'Orthodontics & Cosmetic Dentistry · Jaipur',
    quote: "Growth Escalators didn't just bring me leads — they brought me the right patients. My calendar's been full for 4 months straight, and my ad cost is half of what I was paying before.",
    metrics: [
      { value: '+312%', label: 'New patient bookings (90 days)' },
      { value: '₹187',  label: 'Cost per qualified lead'        },
      { value: '8.4×',  label: 'Return on ad spend'             },
    ],
  },

  process: [
    { step: '01', title: 'Diagnostic Call',    body: "A free 30-minute call. We audit your current marketing, identify the biggest leaks, and tell you what we'd fix first." },
    { step: '02', title: 'Strategy Blueprint', body: "Within 7 days you get a written plan — channels, budget split, expected timelines, KPIs we'll be accountable for." },
    { step: '03', title: 'Launch & Optimize',  body: 'Campaigns go live within 2 weeks. We test, iterate, and report transparently every week.' },
    { step: '04', title: 'Scale What Works',   body: 'Once we hit consistent CAC targets, we double down on the channels and creatives that perform — month over month.' },
  ],

  whyUs: [
    { title: 'Healthcare-only focus',   body: "We don't take e-com clients on this team. Doctors and clinics only. Compliance and patient psychology baked in." },
    { title: 'Transparent reporting',   body: "Live dashboards. Weekly Loom updates. You always know exactly where your spend is going and what it's returning." },
    { title: 'In-house creative team',  body: 'No outsourced freelancers. Scripts, edits, designs — done by people who report directly to your account manager.' },
    { title: 'Performance contracts',   body: 'We can structure deals around CPL or CAC targets, not just retainers. Skin in the game.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new patients can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the patient volume your ad spend can realistically drive.',
    source: 'Calculator — Doctors',
    unitPlural: 'patients',
    budget: { label: 'Your monthly ad budget', default: 50000 },
    value: { label: 'Average value of one patient (₹)', default: 5000 },
    cplLow: 150,
    cplHigh: 600,
    closeRate: 0.35,
    benchmark: 'Benchmark: well-run healthcare campaigns bring qualified patient enquiries at roughly ₹150–₹600 each, with a little over a third converting to a booked visit.',
    formHeadline: 'See your full patient-volume breakdown',
    formSubhead: 'Get your numbers, the healthcare benchmark, and a real case study — free, straight to your inbox.',
  },

  faqs: [
    { q: 'How long before I start seeing results?', a: 'Most of our doctor clients see qualified enquiries within the first 2–3 weeks. Consistent month-over-month results typically stabilize by month 2–3 once we have enough data to optimize.' },
    { q: "What's the typical investment?",          a: 'Marketing budgets vary by specialization and city. Solo clinics typically start at ₹50k–₹1L/month total (services + ad spend). Multi-location practices and hospitals are quoted bespoke.' },
    { q: 'Do you sign exclusivity contracts?',      a: "Yes — we work with one practice per specialization in a given city. Once you're in, your competitors can't hire us in your geography." },
    { q: 'Will my ads comply with medical advertising rules?', a: "Always. We follow Indian Medical Council guidelines, Meta's healthcare ad policies, and Google's medical advertising rules. No misleading promises, no banned terminology." },
    { q: 'Can you handle social media content for me?', a: 'Yes. We script, shoot (locally for Jaipur clients, remote for others), edit, post, and manage community for Instagram, YouTube Shorts, and LinkedIn.' },
    { q: 'What if I want to pause or stop?',       a: '30-day notice on retainer contracts. Performance contracts are month-to-month with the targets agreed upfront. No long lock-ins.' },
  ],

  finalCta: {
    title: 'Ready to fill your calendar?',
    subhead: "Book a free strategy session. We'll review what you're doing today and tell you the three things we'd change first — no obligation.",
    ctaLabel: 'Book a Free Strategy Call',
  },

  videoTestimonialsTag: 'HEAR FROM OUR DOCTORS',
  videoTestimonialsHeadline: 'Real doctors, real outcomes',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them grow their practice.',
  videoTestimonials: [
    // Add YouTube Shorts URLs here. See lib/youtube.ts for accepted formats.
    // Until populated, the section renders a friendly empty-state message.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Doctor Lead',
    headline: 'Tell us about your practice',
    subhead: "Fill this in and we'll get back within 24 hours with a no-obligation strategy session.",
    tag: "LET'S TALK",
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Healthcare marketing, by intent',
    subhead: 'Whether you run a clinic, need more patients, or want to build your own authority.',
    links: [
      { label: 'Marketing Agency for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Local healthcare marketing for Jaipur clinics & hospitals — GBP, Maps & compliant ads.' },
      { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Fill your calendar — appointment-booking funnels and lower no-shows.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Build authority and inbound consults on LinkedIn, Instagram & YouTube.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },
}
