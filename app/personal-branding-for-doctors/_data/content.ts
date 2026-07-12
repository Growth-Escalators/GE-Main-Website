/**
 * All copy and data for the /personal-branding-for-doctors landing page.
 *
 * National BOFU money page — personal-authority intent ("personal branding
 * for doctors", "linkedin for doctors", "how to become a KOL doctor"). The
 * buyer here is the individual physician or surgeon, not the clinic, which
 * is what makes this distinct from /doctors-marketing-agency-jaipur (clinic
 * owner, Jaipur-local) and /patient-acquisition-agency (clinic owner,
 * national funnel intent).
 *
 * PROOF RULE:
 * - Featured result: Dr. Mukesh Sharma — real, exact metrics from
 *   lib/constants.ts CASE_STUDIES id 3 (0 -> 8,200 LinkedIn followers,
 *   12 inbound consult requests/month, featured in 2 publications; also
 *   corroborated by WORK_ITEMS id 5). constants.ts does NOT contain a
 *   first-person quote for Dr. Mukesh Sharma, only case-study facts, so the
 *   resultHighlight.quote field below is deliberately written as a factual,
 *   third-person case-study line (not invented first-person testimony) —
 *   per the hard "never invent quotes" rule.
 * - Supporting proof: Dr. Sumit Doraya's REAL, VERBATIM quote and exact
 *   metric from lib/constants.ts (ALL_TESTIMONIALS id 4 / TESTIMONIALS id 4)
 *   is used, word-for-word, attributed to him by name, inside a whyUs card.
 * - "400% follower growth in 6 months / 5-10 inbound leads per week" is the
 *   Personal Branding service-line aggregate claim already published in
 *   lib/constants.ts (SERVICES_FULL #04, mirrored in the homepage SERVICES
 *   array #2) — reused here as a general service-level stat, not attributed
 *   to a specific named individual.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const PERSONAL_BRANDING_DOCTORS_CONTENT: LandingContent = {
  industryLabel: 'Doctor Personal Branding',

  hero: {
    badge: 'PERSONAL BRANDING FOR PHYSICIANS · 0 → 8,200 LINKEDIN FOLLOWERS',
    headlineLines: ['Personal Branding', 'for Doctors'],
    cyclingWords: [
      'Built for LinkedIn authority.',
      'Built for thought leadership.',
      'Built for inbound consults.',
      'Built for speaking invitations.',
    ],
    subhead:
      "Growth Escalators builds the personal brand behind the practice: LinkedIn presence, ghostwritten thought-leadership content, and media positioning that turn a physician into a recognised voice in their specialty. One doctor went from zero LinkedIn presence to 8,200 followers and 12 inbound consultation requests a month.",
    primaryCta: { label: 'Book a Free Personal-Brand Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '0→8,200', label: 'LinkedIn followers (real doctor)' },
      { emoji: '📩', value: '12/mo', label: 'Inbound consults generated' },
      { emoji: '🎤', value: 'Weekly', label: 'Speaking invites (real doctor)' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: "What's keeping your expertise invisible outside your clinic",
  painPoints: [
    { emoji: '🫥', title: 'Your expertise is invisible outside your clinic', body: "Years of training and real clinical experience, and almost none of it exists online. Patients and peers searching for a specialist like you can't find you as an authority, only as a name on a door." },
    { emoji: '⏱️', title: "No time to write, let alone post consistently", body: 'Between patients, procedures, and admin, content is the first thing that gets dropped. LinkedIn and Instagram sit dormant for months at a time.' },
    { emoji: '🔁', title: 'Referrals cap your reach', body: "Word-of-mouth and hospital referrals only reach the people already inside your network, not the much larger audience actively searching online for a specialist in your field." },
    { emoji: '🎤', title: "Nobody's building your speaking or media pipeline", body: "Conference invites, panel spots, and press mentions tend to go to the doctors with a visible platform, not necessarily the most skilled ones. Without a presence, that pipeline never opens." },
    { emoji: '✍️', title: 'Generic agencies write generic LinkedIn posts', body: "Most agencies either ghostwrite corporate-sounding fluff or strip out the clinical nuance entirely, so the content doesn't read like it came from a credible physician." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'AI that writes in your clinical voice, not a template',
    subhead:
      "Generic LinkedIn ghostwriting sounds like every other agency's content. Our AI is built to capture your actual clinical experience and voice, then keep it consistent every week.",
    cards: [
      { emoji: '🧠', title: 'AI-assisted ghostwriting, trained on your voice', body: 'Drafts are built from your real case experience and clinical perspective, not generic LinkedIn templates, so the final post still sounds like you, not an agency.' },
      { emoji: '🗓️', title: 'AI content-calendar engine', body: 'One patient story or clinical insight gets turned into a full week of content across formats, so consistency doesn\'t depend on you finding time to write.' },
      { emoji: '📰', title: 'AI-surfaced trending health conversations', body: 'The system flags relevant, live medical and health conversations so your commentary lands while the topic is still current, not weeks after everyone has moved on.' },
      { emoji: '🎯', title: 'AI engagement-based lead scoring', body: 'Comments and DMs on your content are scored for genuine inbound-consult intent versus noise, so you know exactly which conversations are worth a personal reply.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete authority-building system for physicians',
  servicesSubhead: 'Six services, one promise: a recognised voice in your specialty that converts into inbound consults.',
  services: [
    { title: 'LinkedIn Profile & Positioning Overhaul', body: 'Headline, banner, About section, and content pillars rebuilt around your specialty and the patients or peers you actually want to reach.' },
    { title: 'Ghostwritten Thought-Leadership Content', body: 'Weekly posts written in your voice, drawn from real clinical experience, case learnings, and specialty insight, reviewed and approved by you before anything goes live.' },
    { title: 'Personal Website & Credibility Hub', body: 'A professional site consolidating your credentials, media mentions, and a clear path for peers or patients to book a consultation.' },
    { title: 'Media & Speaking Pipeline', body: 'Positioning and outreach aimed at getting you featured in publications and invited to speak at conferences and panels in your specialty.' },
    { title: 'Inbound Consult Funnel', body: 'A booking path from your LinkedIn content directly into your calendar, so followers and engaged readers convert into actual consultations.' },
    { title: 'Cross-Platform Authority Extension', body: 'The same voice and content system extended to Instagram or YouTube where it fits your specialty, without diluting the LinkedIn-first strategy.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A physician we helped build a real digital reputation',
  resultHighlight: {
    label: 'FEATURED CASE STUDY · PERSONAL BRANDING',
    name: 'Dr. Mukesh Sharma',
    detail: 'Healthcare / Personal Brand · LinkedIn Authority System',
    quote:
      "Documented Growth Escalators case study: a LinkedIn personal-branding system and thought-leadership content strategy took Dr. Mukesh Sharma from zero digital presence to a recognised specialist voice, built on real clinical content and consistent publishing, not paid ads.",
    metrics: [
      { value: '0 → 8,200', label: 'LinkedIn followers' },
      { value: '12/month', label: 'Inbound consult requests' },
      { value: '2', label: 'Publications featured in' },
    ],
  },

  process: [
    { step: '01', title: 'Voice & Positioning Audit', body: 'A call to map your specialty, the reputation you want to build, and the patients or peers you want your content to reach.' },
    { step: '02', title: 'Content & Platform Plan', body: 'Within 7 days you get a written plan: content pillars, post cadence, the ghostwriting review workflow, and the publications or speaking circuits worth targeting.' },
    { step: '03', title: 'Build & Launch', body: 'Profile overhaul and your first two weeks of content go live within 14 days. Every post is reviewed and approved by you before it publishes.' },
    { step: '04', title: 'Compound Toward Authority', body: 'Monthly review of follower growth, inbound consult volume, and emerging media or speaking opportunities, doubling down on the content and topics that resonate.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'Built for physicians who don\'t have time to become content creators',
  whyUs: [
    { title: 'Real doctors, real inbound demand', body: "\"My personal brand grew beyond what I thought was possible. Growth Escalators built my LinkedIn from scratch to a point where I receive speaking invitations weekly and get 10+ inbound consultation requests per month.\" — Dr. Sumit Doraya, Orthopaedic Surgeon & Speaker" },
    { title: 'We ghostwrite in your voice, not ours', body: 'Every post is built from your real clinical experience and reviewed by you before it goes live, so what publishes still sounds like a credible physician wrote it.' },
    { title: 'A proven service line, not a side offering', body: 'Personal branding clients average 400% follower growth in 6 months and 5-10 inbound leads per week from content alone, across 100+ brands we\'ve built since 2021.' },
    { title: 'You own the audience', body: 'Your LinkedIn profile, content calendar, and following remain entirely yours. Leave any time and you keep everything that was built.' },
  ],

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Personal branding for doctors',
  faqs: [
    { q: 'Will the content actually sound like me, not a generic agency?', a: "That's the point of the ghostwriting process: drafts are built from your real clinical experience and case perspective, and you review and approve every post before it publishes. Nothing goes out that doesn't sound like you." },
    { q: 'How long before I see inbound consultation requests?', a: "Engagement typically builds over the first 4-8 weeks as your posting cadence and voice settle in. Inbound consult requests usually follow once you've built a consistent base of relevant content and followers, often within the first 2-3 months." },
    { q: 'Do you write the posts, or do I have to write them myself?', a: "We ghostwrite every post based on a short weekly conversation or voice notes from you, your real cases and clinical perspective, so you're not staring at a blank page. You review and approve before anything publishes." },
    { q: 'Can you help me get invited to speak or get featured in publications?', a: "Yes, media and speaking positioning is one of our six core services. Once your content and profile establish credibility, we actively pitch you for relevant publications and speaking opportunities in your specialty." },
    { q: 'Is this only for LinkedIn, or other platforms too?', a: "LinkedIn is the primary platform for physician authority-building because that's where peers, media, and high-intent patients actually look. We extend to Instagram or YouTube where it genuinely fits your specialty, not by default." },
    { q: "What if I don't have time to review posts every week?", a: "The review step is intentionally short, a quick approve-or-edit pass, because clinical accuracy matters. Most physicians spend under 15 minutes a week on this; the writing and scheduling is entirely on us." },
    { q: 'How is this different from a patient-acquisition or clinic marketing service?', a: "Patient-acquisition and clinic marketing (our /patient-acquisition-agency and /doctors-marketing-agency-jaipur services) are built around the practice's booking funnel and ad campaigns. Personal branding is built around you as an individual, your authority, reputation, and inbound demand, independent of any single clinic." },
  ],

  finalCta: {
    title: 'Ready to become the recognised name in your specialty?',
    subhead: "Book a free, no-obligation personal-brand audit. We'll review your current LinkedIn presence, your positioning, and your content gap, and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free Personal-Brand Audit',
  },

  videoTestimonialsTag: 'HEAR FROM DOCTORS WE\'VE BUILT',
  videoTestimonialsHeadline: 'Real physicians, real authority',
  videoTestimonials: [
    // Add YouTube Shorts URLs from doctor personal-branding clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for doctors and clinics',
    links: [
      { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Our national patient-acquisition service — booking funnels, treatment-level ads, no-show fixes for the practice.' },
      { label: 'Marketing Agency for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'Our Jaipur-local page — Google Maps SEO and compliant ads for the clinic itself.' },
      { label: 'Marketing for Doctors & Clinics', href: '/doctors', blurb: 'Our national doctors hub — the full picture of how we work with healthcare clients.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth, including Dr. Mukesh Sharma\'s full case study.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Personal Branding Lead',
    headline: 'Tell us about your specialty and goals',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
