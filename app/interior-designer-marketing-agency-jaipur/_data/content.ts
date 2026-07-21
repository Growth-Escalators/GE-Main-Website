/**
 * All copy and data for the /interior-designer-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("interior designer
 * marketing agency jaipur", "marketing for interior designers", "architect
 * marketing jaipur"). Targets interior designers, architects, and design
 * studios hiring a local agency to generate qualified, high-ticket project
 * enquiries.
 *
 * PROOF RULE: there is no exact-match interior-design client, so resultHighlight
 * is Growth Escalators' own aggregate track record (₹10Cr+ ad spend, 187+
 * brands, 97% retention) — never a fabricated niche client. The only named
 * client on this page is Atatica Studios (a real GE creative-studio client —
 * full portfolio website + SEO, from the trust lists in app/staffing/page.tsx
 * and components/sections/TrustBar.tsx), cited strictly as proof of
 * design-led web/SEO capability, not as an interior-design result. Nothing
 * else is invented. The calculator outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const INTERIOR_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Interiors',

  hero: {
    badge: 'JAIPUR-BASED · INTERIOR DESIGN & ARCHITECTURE MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Interior Designers in Jaipur'],
    cyclingWords: [
      'Fill your project pipeline, not just your inbox.',
      'Turn your portfolio into paying enquiries.',
      'Rank when Jaipur searches "interior designer near me".',
      'Stop chasing referrals for every new project.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for interior designers, architects, and design studios. We turn portfolio-led content, local search, and lead nurture into qualified, budget-matched project enquiries — not just profile views. Across 187+ brands we've managed ₹10Cr+ in ad spend, and built the full portfolio website and SEO engine that Atatica Studios still runs on today.",
    primaryCta: { label: 'Get a Free Pipeline Audit', href: '#lead-form' },
    secondaryCta: { label: 'See How It Works ↓', href: '#results' },
    statPills: [
      { emoji: '🏗️', value: '187+', label: 'Brands scaled by GE' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/interior/hero.jpg',
      alt: 'Elegantly designed modern living room by a Jaipur interior design studio',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full project pipeline actually looks like',
    subhead:
      'Jaipur is building and renovating faster than ever — the studios winning high-ticket projects are the ones homeowners find first on Google and Instagram, not necessarily the most talented.',
    images: [
      { src: '/industries/interior/1.jpg', alt: 'Before-and-after style interior design transformation of a living space', caption: 'Portfolio content that proves the transformation, not just the finish' },
      { src: '/industries/interior/2.jpg', alt: 'Interior designer reviewing a mood board and material samples with a client', caption: 'Consultations that start pre-sold, not price-shopped' },
      { src: '/industries/interior/3.jpg', alt: 'Architect and designer walking through a furnished show unit', caption: 'Enquiries that match your actual project size' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why great design work still means an unpredictable pipeline',
  painPoints: [
    { emoji: '🔁', title: 'Stuck on the referral ceiling', body: 'Referrals built your studio, but they cap it too — you only grow as fast as your last happy client talks about you, with no system to generate qualified enquiries on demand.' },
    { emoji: '🖼️', title: "A portfolio that doesn't do the selling", body: "Your finished projects are stunning, but if they're scattered across an old website and an under-posted Instagram, prospects can't experience the work the way they would in a real consultation." },
    { emoji: '🏷️', title: 'Enquiries that were never going to afford you', body: "Generic ads and social posts pull in browsers comparing you to a Pinterest budget, wasting your (or your team's) time on consultations that were never a real match." },
    { emoji: '⏳', title: 'Long decision cycles with no nurture', body: 'Interior projects take weeks or months to decide on, and most studios have no system to stay top-of-mind between the first enquiry and the signed contract — so warm leads go quiet and pick someone else.' },
    { emoji: '📊', title: 'No idea what a lead actually costs', body: "Without tracking from ad or post through to signed project, you can't tell whether Instagram, Google, or referrals are actually filling your pipeline — so every rupee of marketing spend is a guess." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Interior design marketing that thinks in projects, not likes',
    subhead:
      'Generic social agencies chase followers. Our AI is built around the number that actually moves a design studio — qualified, budget-matched project enquiries.',
    cards: [
      { emoji: '🏡', title: 'AI portfolio content that pre-sells the consult', body: 'We use AI to identify which rooms, styles, and before/after formats are earning saves and shares in Jaipur design content right now — so your portfolio does the convincing before the client ever calls.' },
      { emoji: '🔍', title: 'Local search & Maps rank monitoring', body: 'Continuous tracking of your Google Business Profile and website for the searches that matter — "interior designer near me", "3BHK interior Jaipur" — the moments prospects are ready to hire.' },
      { emoji: '🎯', title: 'Budget-matched lead qualification', body: 'Ad targeting and landing-page questions built to filter for project size and timeline upfront — so consultation slots go to prospects who can actually afford your studio.' },
      { emoji: '✉️', title: 'Automated nurture through the decision cycle', body: "A structured email/WhatsApp sequence that keeps your studio top-of-mind for the weeks a prospect is comparing options — so the deal doesn't go cold and go to someone else." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete pipeline engine for Jaipur design studios',
  servicesSubhead: "Six services, one promise: qualified project enquiries that match your studio's ticket size.",
  services: [
    { title: 'Portfolio Website & Case Study Pages', body: 'A fast, conversion-built website with dedicated, SEO-optimised case study pages for every project — so Google and every prospect can experience your best work in detail, not a scattered gallery.' },
    { title: 'Google Business Profile & Local SEO', body: "Full GBP optimisation plus on-page local SEO so you rank for 'interior designer in [locality]' searches across C-Scheme, Vaishali Nagar, Malviya Nagar, and Mansarovar." },
    { title: 'Instagram Portfolio Content System', body: 'A monthly content engine of before/afters, process reels, and material breakdowns designed for reach and saves — turning scrollers into consultation bookings.' },
    { title: 'Budget-Qualified Lead Generation', body: 'Meta and Google campaigns with built-in budget and timeline qualification, so consultation requests match the project sizes your studio actually wants.' },
    { title: 'Enquiry Nurture & CRM Setup', body: 'Email and WhatsApp nurture sequences plus a simple CRM so no enquiry goes cold during the weeks-long decision window — and you always know where every lead stands.' },
    { title: 'Launch & Show-Unit Campaigns', body: 'New studio, model apartment, or flagship project reveal — full campaign build-outs that create a moment worth talking about, not just another post.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'What Growth Escalators has actually delivered',
  resultHighlight: {
    label: 'OUR TRACK RECORD',
    name: 'Growth Escalators',
    detail: "What we've delivered across 100+ brands",
    quote:
      "We don't have a single interior-design client to name-drop yet — what we do have is a track record. ₹10Cr+ in ad spend managed, 187+ brands scaled, and a 97% retention rate, because clients keep working with us when the pipeline actually fills. That's the same system, applied to your studio.",
    metrics: [
      { value: '₹10Cr+', label: 'Ad spend managed' },
      { value: '187+', label: 'Brands scaled' },
      { value: '97%', label: 'Client retention' },
    ],
  },

  process: [
    { step: '01', title: 'Pipeline & Portfolio Audit', body: 'A 45-minute call. We review your website, Instagram, Google Business Profile, and current enquiry sources against the design studios competing for the same Jaipur clients.' },
    { step: '02', title: 'Positioning & Campaign Plan', body: 'Within 7 days you get a written plan: your case-study content calendar, the local-SEO and ad split, and the qualification questions that filter for your ideal project size.' },
    { step: '03', title: 'Build & Launch', body: 'Website case-study pages, GBP fixes, nurture sequences, and your first budget-qualified campaigns go live within 14 days — built to produce your first fresh enquiries fast.' },
    { step: '04', title: 'Optimise Toward Signed Projects', body: 'We track enquiries through to signed contracts, not just clicks — and refine targeting, content, and nurture as we learn which projects convert best.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that reports signed projects, not followers',
  whyUs: [
    { title: 'Right here in Jaipur', body: "Based in Pratap Nagar — we know the city's design clusters, the developments driving renovation demand, and the localities where your next high-ticket client lives." },
    { title: 'We think in project value, not vanity metrics', body: 'We optimise for budget-qualified enquiries and signed contracts — the numbers that decide whether a design studio grows profitably, not just its follower count.' },
    { title: 'Proven design-led web & SEO capability', body: 'We built and run the full portfolio website and SEO engine for Atatica Studios, a Jaipur creative studio — the same case-study-led, search-optimised approach we’d bring to your project pages.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 100+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many new projects can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the qualified project enquiries your marketing budget can realistically drive.',
    source: 'Calculator — Interior Jaipur',
    unitPlural: 'projects',
    budget: { label: 'Your monthly marketing budget', default: 60000 },
    value: { label: 'Average value of one project (₹)', default: 150000 },
    cplLow: 400,
    cplHigh: 1500,
    closeRate: 0.12,
    benchmark: 'Benchmark: high-ticket interior design leads in Jaipur typically cost ₹400–₹1,500 each, with roughly 1 in 8 qualified enquiries converting to a signed project — a single project easily covers months of marketing spend.',
    formHeadline: 'See your full pipeline breakdown',
    formSubhead: 'Get your numbers, the Jaipur interior-design benchmark, and our lead-qualification playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring an interior design marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a marketing agency for an interior design studio in Jaipur?', a: "It depends on whether you need a portfolio website, local SEO, paid ads, or all three, and how many project types you handle. We quote exactly after the free pipeline audit — most Jaipur studios start with a website + local-SEO foundation and add budget-qualified ad campaigns once it's live." },
    { q: 'Can you actually filter out low-budget enquiries?', a: "Yes — that's core to how we build these campaigns. Ad targeting, landing-page questions, and qualification steps are built around project size and timeline upfront, so consultation slots go to prospects who can genuinely afford your studio." },
    { q: 'Will you build us a new website, or just market the existing one?', a: "Either. If your current site doesn't showcase projects as detailed case studies, we'll rebuild it — that's exactly what we did for Atatica Studios. If it's solid, we optimise it and build local SEO and campaigns on top." },
    { q: 'How long until we see qualified enquiries?', a: 'Local SEO and case-study content compound over 8-12 weeks. Budget-qualified ad campaigns typically produce enquiries within the first 2-3 weeks, once targeting is dialled in. Most studios see their first strong project match within the first month.' },
    { q: "We're an architecture firm, not pure interior design — do you work with us?", a: 'Yes. The same portfolio-led, local-search, budget-qualified approach applies to architects and design-build firms — we adjust the content and targeting to match longer project cycles and larger ticket sizes.' },
    { q: 'Do you handle the nurture, or do we?', a: 'We set up and run the nurture sequence — email and WhatsApp — so every enquiry gets a structured follow-up through the weeks-long decision window. You focus on the consultations and closing, not chasing replies.' },
  ],

  finalCta: {
    title: 'Ready to stop relying on referrals for your next project?',
    subhead: "Book a free, no-obligation pipeline audit. We'll review your website, portfolio, and current enquiry sources — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Pipeline Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR DESIGN STUDIOS',
  videoTestimonialsHeadline: 'Real studios, real projects',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur interior design / architecture clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for design & property brands',
    links: [
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Portfolio websites and case-study pages that convert.' },
      { label: 'Real Estate Marketing Agency in Jaipur', href: '/real-estate-marketing-agency-jaipur', blurb: 'For developers and brokers selling the properties your clients furnish.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Interior Design Lead — Jaipur',
    headline: 'Tell us about your studio',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free pipeline audit.',
    tag: 'BOOK YOUR FREE PIPELINE AUDIT',
  },
}
