/**
 * All copy and data for the /coaching-institute-marketing-agency-jaipur page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("coaching institute
 * marketing agency jaipur", "coaching classes marketing", "education marketing
 * jaipur"). Targets coaching institutes, test-prep centres, and EdTech founders
 * hiring a local agency to drive admissions/enrolments.
 *
 * PROOF RULE: named client proof is Kabir Malhotra (EdTech Founder) — real,
 * exact quote/metric from lib/constants.ts ALL_TESTIMONIALS (CPL ₹420 → ₹88 in
 * 6 weeks, 2 → 20 sales calls/day). Aggregate stats (₹10Cr+ ad spend,
 * 4.9★/187 reviews, 97% retention, Jaipur HQ) are reused per the approved list.
 * Nothing else is invented. Calculator outputs are labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const COACHING_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Coaching',

  hero: {
    badge: 'JAIPUR-BASED · EDUCATION & COACHING MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Coaching Institutes in Jaipur'],
    cyclingWords: [
      'Built for test-prep & competitive exams.',
      'Built for skill & upskilling academies.',
      'Built for EdTech founders.',
      'Built for tuition & K-12 centres.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for coaching institutes, test-prep centres, and EdTech brands. We turn ads, landing pages, and instant follow-up into filled batches and admissions — not just form fills. For one EdTech founder we cut cost-per-lead from ₹420 to ₹88 in 6 weeks and took daily sales calls from 2 to 20.",
    primaryCta: { label: 'Get a Free Admissions Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📉', value: '₹420 → ₹88', label: 'Cost per lead in 6 weeks' },
      { emoji: '📞', value: '2 → 20', label: 'Sales calls / day' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/coaching/hero.jpg',
      alt: 'Students studying together in a coaching classroom',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'Where admissions are really won',
    subhead:
      'Parents and students shortlist a coaching institute online — reviews, results, demo classes — long before they walk in. The institute that shows up and follows up wins the seat.',
    images: [
      { src: '/industries/coaching/1.jpg', alt: 'Teacher explaining a concept at a whiteboard', caption: 'Faculty & results content that builds trust' },
      { src: '/industries/coaching/2.jpg', alt: 'Student attending an online class on a laptop', caption: 'Demo funnels that convert curiosity to enrolment' },
      { src: '/industries/coaching/3.jpg', alt: 'Students celebrating exam results', caption: 'Results marketing that fills the next batch' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why coaching ad budgets fill forms but not batches',
  painPoints: [
    { emoji: '💸', title: 'Cheap leads, empty batches', body: 'Broad "join our coaching" ads generate form fills from students who never intended to enrol. Without intent targeting and qualification, cost-per-lead looks fine while cost-per-admission quietly balloons.' },
    { emoji: '⏱️', title: 'Slow follow-up loses the student', body: 'A parent who enquires and waits a day has already booked a demo elsewhere. Without instant WhatsApp and call follow-up, you pay for enquiries and then let them go cold.' },
    { emoji: '🗓️', title: 'Admission season panic', body: 'Everything rides on a few enrolment windows. Most institutes have no always-on demand engine, so they scramble for admissions each season instead of building a steady pipeline.' },
    { emoji: '⭐', title: 'Results you never showcase', body: 'Your toppers and outcomes are your strongest asset, but without a system to turn results into content and reviews, prospective students never see the proof that would make them choose you.' },
    { emoji: '📊', title: 'No idea what an admission costs', body: 'You know monthly ad spend but not cost-per-qualified-enquiry or cost-per-admission by course — so budget decisions across programs are guesses, not numbers.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Admissions marketing that qualifies before your counsellor calls',
    subhead:
      "Education runs on trust and timing. Our AI is built to surface serious students, respond instantly, and keep demand alive between admission windows.",
    cards: [
      { emoji: '🧠', title: 'AI lead-intent scoring', body: 'Every enquiry is scored on real enrolment-intent signals — course, class, timeline, budget — so counsellors call the students actually ready to join first.' },
      { emoji: '💬', title: 'Instant WhatsApp & call follow-up', body: 'Automated, personal follow-up the moment a lead comes in — booking demo classes while interest is hot, instead of hours later when it has cooled.' },
      { emoji: '🎯', title: 'Always-on demand engine', body: 'AI-managed campaigns and retargeting keep your programs in front of prospective students between seasons, so admission windows open with a full pipeline.' },
      { emoji: '🏆', title: 'Results-content at scale', body: 'AI-assisted creation turns your toppers, outcomes, and testimonials into a steady stream of proof content that pre-sells the next batch.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete admissions engine for Jaipur coaching institutes',
  servicesSubhead: 'Six services, one promise: filled batches, not just form fills.',
  services: [
    { title: 'Meta & Google Ads for Admissions', body: 'Course-level campaigns targeting the right students and parents in Jaipur and beyond — built to bring qualified enquiries at a cost-per-admission you can actually plan around.' },
    { title: 'Instant Lead-Response & WhatsApp Funnel', body: 'Automated follow-up and demo-class booking the moment a lead arrives — the biggest lever on admissions conversion — so serious enquiries never go cold.' },
    { title: 'Landing Pages & Demo Funnels', body: 'Fast, mobile-first course and demo-class pages built to convert ad clicks into booked demos and enrolments, with the faculty, results, and reviews students look for.' },
    { title: 'Results & Reputation Marketing', body: 'A system to turn your toppers and outcomes into content and Google reviews — the social proof that makes parents and students choose you over the institute next door.' },
    { title: 'Google Business Profile & Local SEO', body: 'Local SEO so students searching "coaching classes near me" or "[exam] coaching in Jaipur" find and trust you — a compounding, low-cost enquiry source.' },
    { title: 'Analytics & Cost-per-Admission Tracking', body: 'Tracking from enquiry to enrolment so you know cost-per-qualified-lead and cost-per-admission by course — and can put budget where it actually fills seats.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'An education brand we helped scale',
  resultHighlight: {
    label: 'FEATURED CLIENT · EDUCATION / EDTECH',
    name: 'Kabir Malhotra',
    detail: 'EdTech Founder · Performance Marketing + Funnel',
    quote:
      "The team completely changed how we acquire students. Cost-per-lead dropped from ₹420 to ₹88 in six weeks, and our sales team went from 2 calls a day to 20. It transformed our admissions.",
    metrics: [
      { value: '₹420 → ₹88', label: 'Cost per lead in 6 weeks' },
      { value: '2 → 20', label: 'Sales calls / day' },
    ],
  },

  process: [
    { step: '01', title: 'Admissions Audit', body: 'A 45-minute call. We review your current ads, cost-per-lead, follow-up speed, and enrolment rate against how admissions demand actually flows in your category.' },
    { step: '02', title: 'Demand & Funnel Plan', body: 'Within 7 days you get a written plan: which courses to lead with, targeting and creative, and the demo-booking and instant-response funnel we’ll build to lift conversion.' },
    { step: '03', title: 'Build & Launch', body: 'Landing pages, tracking, WhatsApp automation, and your first campaigns go live within 14 days — most institutes see qualified enquiries in the first week.' },
    { step: '04', title: 'Optimise Toward Admissions', body: 'We review cost-per-qualified-lead and cost-per-admission weekly — not just form fills — and shift budget across courses and seasons to protect your economics.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur education agency that reports admissions, not form fills',
  whyUs: [
    { title: 'Right here in Jaipur', body: 'Based in Pratap Nagar — Jaipur is one of India’s biggest coaching and test-prep hubs, and we market to those exact students and parents every day.' },
    { title: 'We optimise for enrolments', body: 'We report cost-per-admission, not cheap leads — because a full batch is the only metric that pays your faculty and your rent.' },
    { title: 'Proven in education', body: 'For an EdTech founder we cut cost-per-lead from ₹420 to ₹88 in six weeks and 10×’d daily sales calls.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many admissions can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the enrolments your ad spend can realistically drive.',
    source: 'Calculator — Coaching Jaipur',
    unitPlural: 'admissions',
    budget: { label: 'Your monthly ad budget', default: 50000 },
    value: { label: 'Average course fee per admission (₹)', default: 25000 },
    cplLow: 88,
    cplHigh: 420,
    closeRate: 0.15,
    benchmark: 'Benchmark: coaching enquiries typically cost ₹88–₹420 depending on course and competition, with roughly 1 in 7 qualified enquiries enrolling when follow-up is instant.',
    formHeadline: 'See your full admissions breakdown',
    formSubhead: 'Get your numbers, the education benchmark, and the admissions funnel behind the ₹420→₹88 result — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a coaching marketing agency in Jaipur',
  faqs: [
    { q: 'How much does coaching institute marketing cost in Jaipur?', a: "It depends on your courses, average fee, and how much of the funnel you need built. We quote exactly after the free admissions audit — most institutes start with a course-level ads + demo-funnel package before scaling budget across programs." },
    { q: 'Can you actually lower our cost-per-lead?', a: "That's exactly what we did for an EdTech founder — from ₹420 to ₹88 in six weeks — by fixing targeting, creative, and the follow-up funnel. Your result depends on your course and competition, which the free audit establishes." },
    { q: 'How do you improve enrolments, not just leads?', a: "Admissions are won on trust and timing. We install instant WhatsApp/call follow-up and demo-class booking, plus results and review content that pre-sells your institute — so more qualified enquiries actually enrol." },
    { q: 'Can you help outside admission season too?', a: "Yes — an always-on demand engine and retargeting keep prospective students warm between windows, so each admission season opens with a full pipeline instead of a scramble." },
    { q: 'Do you work with test-prep, skilling academies, and EdTech?', a: "Yes — test-prep, competitive-exam coaching, skill/upskilling academies, and EdTech each need different targeting and messaging, and we structure campaigns per program rather than one blended account." },
    { q: 'How fast will we see enquiries?', a: "Ad enquiries typically start within the first 1-2 weeks once campaigns and the demo funnel are live. Cost-per-lead and enrolment rate then improve over the following weeks as we optimise against real admissions data." },
  ],

  finalCta: {
    title: 'Ready to fill your next batch from the same ad budget?',
    subhead: "Book a free, no-obligation admissions audit. We'll review your ads, your follow-up speed, and your enrolment rate — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Admissions Audit',
  },

  videoTestimonialsTag: 'HEAR FROM EDUCATION CLIENTS',
  videoTestimonials: [
    // Add YouTube Shorts URLs from coaching/EdTech clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More ways we drive growth',
    links: [
      { label: 'SaaS Marketing Agency', href: '/saas-marketing-agency', blurb: 'For EdTech and software brands scaling on performance.' },
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'High-consideration lead engines built to convert.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Ads engineered for ROAS — the core of every campaign.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Coaching Lead — Jaipur',
    headline: 'Tell us about your institute',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free admissions audit.',
    tag: 'BOOK YOUR FREE ADMISSIONS AUDIT',
  },
}
