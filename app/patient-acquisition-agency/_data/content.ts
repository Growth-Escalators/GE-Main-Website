/**
 * All copy and data for the /patient-acquisition-agency landing page.
 *
 * National BOFU money page — outcome intent ("patient acquisition agency",
 * "how to get more patients", "medical appointment marketing"), for any
 * clinic or doctor in India, not just Jaipur. Deliberately distinct from the
 * local /doctors-marketing-agency-jaipur (Jaipur-hire intent) and
 * /personal-branding-for-doctors (individual physician authority intent)
 * pages: this one is about the booking funnel and patient-acquisition
 * mechanics — treatment-level ads, no-show reduction, reactivation.
 *
 * PROOF RULE: the only client proof used is Dr. Meera Nair (Dermatologist &
 * Clinic Owner) — real, exact quote and outcomes from lib/constants.ts
 * (ALL_TESTIMONIALS id 11). Globally-true stats (₹10Cr+ ad spend, 10,000+
 * campaigns, 4.9★/187 reviews, 97% retention) are reused per the approved
 * list. Nothing else is invented.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const PATIENT_ACQUISITION_CONTENT: LandingContent = {
  industryLabel: 'Patient Acquisition',

  hero: {
    badge: 'PATIENT ACQUISITION FOR CLINICS ACROSS INDIA',
    headlineLines: ['Patient Acquisition', 'Agency for Clinics'],
    cyclingWords: [
      'Built for appointment funnels.',
      'Built for treatment-level ads.',
      'Built for no-show recovery.',
      'Built for patient reactivation.',
    ],
    subhead:
      "Growth Escalators builds the booking funnel, treatment-level ad targeting, and follow-up system that turns searches into a full appointment calendar — not just ad clicks. One dermatologist client went from word-of-mouth-only to fully booked 3 weeks in advance, and hired a second doctor to keep up with demand.",
    primaryCta: { label: 'Book a Free Patient-Acquisition Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📅', value: '3 wks', label: 'Booked in advance (real clinic)' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
      { emoji: '⭐', value: '4.9★', label: '187 client reviews' },
    ],
    image: {
      src: '/industries/healthcare/5.jpg',
      alt: 'Clinic reception area set up for patient bookings',
    },
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most "lead generation" for clinics never fills the calendar',
  painPoints: [
    { emoji: '📭', title: 'Leads that never book', body: "Ad clicks and form-fills that don't convert into scheduled appointments, because there's no real funnel behind the ad — just a contact form and a hope someone calls back." },
    { emoji: '🕳️', title: 'No-shows silently killing capacity', body: "A booked slot isn't a patient. Without confirmation and reminder systems, a meaningful share of appointments simply don't show up, and nobody's measuring the no-show rate to fix it." },
    { emoji: '🔁', title: 'One-and-done patients', body: "No system to bring back patients due for a follow-up, checkup, or repeat treatment, so every new patient has to be acquired from scratch instead of retained." },
    { emoji: '🎯', title: "Treatment-level targeting nobody does", body: 'Generic "book an appointment" ads instead of campaigns built around the specific high-value treatments and procedures that actually drive your revenue.' },
    { emoji: '❓', title: "No idea what a new patient actually costs", body: "Ad spend divided by leads, not by patients who booked and showed up. Without real cost-per-patient tracking, budget decisions are guesses." },
  ],

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full appointment calendar looks like',
    subhead:
      'A booked slot only counts once the patient shows up — the clinics that win build the funnel and the follow-up, not just the ad.',
    images: [
      { src: '/industries/healthcare/hero.jpg', alt: 'Doctor consulting a patient about a booked appointment', caption: 'A funnel that turns searches into visits' },
      { src: '/industries/healthcare/3.jpg', alt: 'Medical team coordinating patient care', caption: 'Capacity built to handle real demand' },
      { src: '/industries/healthcare/4.jpg', alt: 'Physician preparing for a consultation', caption: 'Patients who show up, not just book' },
    ],
  },

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Patient acquisition is a funnel problem, not just an ads problem',
    subhead:
      "Most agencies stop at running ads. Our AI is built around the entire patient journey, from first click to booked, showed-up appointment to the next visit.",
    cards: [
      { emoji: '🧠', title: 'AI intent scoring on every enquiry', body: 'Every lead and form-fill is scored against real booking-intent signals before it reaches your front desk, so staff spend time on people ready to book, not casual researchers.' },
      { emoji: '🔀', title: 'AI-personalised funnel sequencing', body: 'Different automated follow-up paths for "ready to book now" versus "still comparing" leads, so the message matches where each patient actually is in their decision.' },
      { emoji: '📲', title: 'No-show prediction & reminder cadence', body: 'AI flags appointments at higher risk of a no-show based on booking patterns and timing, and triggers extra WhatsApp/SMS confirmation touches to recover the slot.' },
      { emoji: '♻️', title: 'Automated patient reactivation', body: 'AI flags patients due for a recall, follow-up, or repeat treatment based on typical timing windows, and triggers win-back sequences automatically, no manual list-building required.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete patient-acquisition system, not just ads',
  servicesSubhead: 'Six services, one promise: a full appointment calendar of booked, showed-up patients.',
  services: [
    { title: 'Treatment-Level Google & Meta Ads', body: 'Campaigns built around your specific high-value procedures and treatments, targeted to people actively searching for that exact treatment, not a generic "book now" message.' },
    { title: 'Appointment-Booking Funnel Design', body: 'Landing pages and booking flows engineered to convert clicks into scheduled, confirmed appointments, not just contact-form submissions that go nowhere.' },
    { title: 'No-Show Reduction System', body: 'Automated confirmation, reminder, and reschedule sequences via WhatsApp, SMS, and email, timed to recover the appointments that would otherwise go empty.' },
    { title: 'Patient Reactivation Campaigns', body: 'Win-back sequences for lapsed patients due for a follow-up, refill, or repeat treatment, so acquisition cost gets amortised across more than one visit.' },
    { title: 'Cost-Per-New-Patient Tracking', body: 'Real attribution from ad click through to booked, showed-up patient, not just cost-per-lead, so you know exactly what growth actually costs.' },
    { title: 'Healthcare-Compliant Ad Creative', body: "Copy and targeting built to survive Google and Meta's healthcare ad policy review from the first campaign, so launches don't stall on disapprovals." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A clinic we helped go from word-of-mouth to fully booked',
  resultHighlight: {
    label: 'FEATURED CLIENT · PATIENT ACQUISITION',
    name: 'Dr. Meera Nair',
    detail: 'Dermatologist & Clinic Owner',
    quote:
      "I was entirely dependent on word of mouth. GE built my Instagram presence, ran targeted local ads, and set up a booking funnel. I'm now fully booked 3 weeks in advance and had to hire a second doctor. The results speak for themselves.",
    metrics: [
      { value: '3 weeks', label: 'Fully booked in advance' },
      { value: '+1 doctor', label: 'Hired to meet new demand' },
    ],
  },

  process: [
    { step: '01', title: 'Patient-Funnel Audit', body: 'A 45-minute call reviewing your current ad accounts, booking flow, no-show rate, and lapsed-patient list, and telling you exactly where patients are falling out of the funnel.' },
    { step: '02', title: 'Funnel & Targeting Plan', body: "Within 7 days you get a written plan: treatment-level campaign structure, funnel fixes, and reactivation sequence design, with the unit economics we'll be accountable to." },
    { step: '03', title: 'Build & Launch', body: 'Booking funnel, tracking, and reminder and reactivation automations go live within 14 days. Most clinics see their first booked appointment inside the first two weeks.' },
    { step: '04', title: 'Optimise Toward Booked Patients', body: 'We track cost-per-booked-patient and show-up rate weekly, not just cost-per-lead, and expand what\'s converting while fixing what isn\'t.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The patient-acquisition agency that reports booked patients, not leads',
  whyUs: [
    { title: 'We optimise for booked, showed-up patients', body: "Not leads, not clicks, not form-fills. The number we report every week is patients who actually booked and showed up, because that's the number that grows your practice." },
    { title: 'Healthcare-compliant by default', body: "Every campaign is built inside Google and Meta's healthcare advertising restrictions from day one, so your ad account doesn't get flagged mid-launch." },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 10,000+ campaigns delivered, and a 97% client retention rate, across 100+ brands.' },
    { title: 'You own the funnel and the data', body: 'Ad accounts, landing pages, booking funnel, and patient data are all set up in your name. Leave any time and you keep the entire infrastructure.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new patients can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the patient volume your ad spend can realistically drive.',
    source: 'Calculator — Patient Acquisition',
    unitPlural: 'patients',
    budget: { label: 'Your monthly ad budget', default: 60000 },
    value: { label: 'Average value of one patient (₹)', default: 6000 },
    cplLow: 150,
    cplHigh: 600,
    closeRate: 0.35,
    benchmark: 'Benchmark: well-run patient-acquisition campaigns bring qualified enquiries at roughly ₹150–₹600 each, with a little over a third converting to a booked, showed-up patient.',
    formHeadline: 'See your full patient-acquisition breakdown',
    formSubhead: 'Get your numbers, the patient-acquisition benchmark, and the Dr. Meera Nair case study — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a patient-acquisition agency',
  faqs: [
    { q: "What's the difference between a patient-acquisition agency and a regular marketing agency?", a: "A regular marketing agency often stops at running ads and handing you leads. A patient-acquisition agency is accountable for the whole funnel, ad targeting, booking flow, no-show reduction, and reactivation, because a lead that never books or shows up isn't a result." },
    { q: 'How much does patient acquisition cost per month?', a: "It depends on your specialty, current patient volume, and city. Most clinics start with a focused treatment-level ad and funnel package before adding reactivation automation. We quote exactly after the free patient-acquisition audit." },
    { q: 'Can you reduce our no-show rate?', a: "Yes, that's a core part of the system. Automated WhatsApp, SMS, and email confirmation and reminder sequences, timed around your appointment scheduling, recover a meaningful share of the slots that would otherwise go empty." },
    { q: 'Do you work with specialists or only general clinics?', a: "Both. Specialist marketing is built around the specific procedures and conditions that specialty treats, general clinic marketing is built around broader appointment categories. The funnel mechanics are the same; the targeting differs." },
    { q: 'How do you target specific treatments instead of just "book an appointment"?', a: "We build separate campaigns and landing pages around your highest-value treatments and procedures, each speaking directly to that patient's specific concern, instead of one generic ad trying to speak to everyone." },
    { q: 'How fast will we see booked appointments, not just leads?', a: "Ad-driven enquiries typically start within 1-2 weeks. Booking-funnel and no-show fixes usually show a measurable lift in booked, showed-up patients within 4-6 weeks as we tune the follow-up cadence." },
    { q: "Do you help win back patients who haven't returned?", a: "Yes, reactivation campaigns are one of our six core services. We flag patients due for a follow-up, checkup, or repeat treatment based on typical recall windows and trigger automated win-back sequences." },
  ],

  finalCta: {
    title: 'Ready to turn searches into a full appointment calendar?',
    subhead: "Book a free, no-obligation patient-acquisition audit. We'll review your funnel, your no-show rate, and your reactivation gap, and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Patient-Acquisition Audit',
  },

  videoTestimonialsTag: 'HEAR FROM CLINICS WE\'VE HELPED',
  videoTestimonialsHeadline: 'Real clinics, real appointment calendars',
  videoTestimonials: [
    // Add YouTube Shorts URLs from patient-acquisition clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for doctors and clinics',
    links: [
      { label: 'Marketing Agency for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Our Jaipur-local page — Google Maps SEO, compliant ads, and WhatsApp automation for Jaipur clinics.' },
      { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Building the individual physician\'s authority and LinkedIn presence, not just the clinic\'s funnel.' },
      { label: 'Marketing for Doctors & Clinics', href: '/doctors', blurb: 'Our national doctors hub — the full picture of how we work with healthcare clients.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Patient Acquisition Lead',
    headline: 'Tell us about your practice',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
