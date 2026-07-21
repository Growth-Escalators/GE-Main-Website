/**
 * All copy and data for the /law-firm-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("law firm
 * marketing agency jaipur", "marketing for lawyers jaipur", "chartered
 * accountant marketing jaipur"). Targets advocates, law firms, and CA / finance
 * professionals hiring a local agency to build authority and win qualified,
 * high-value clients.
 *
 * TONE NOTE: legal and financial advertising in India sits inside Bar Council
 * of India / ICAI professional-conduct norms that restrict solicitation-style
 * advertising. Every claim on this page is deliberately conservative —
 * "qualified enquiries" and "authority," never "guaranteed cases" or "won
 * clients." The approach itself (content, LinkedIn, SEO) is built to work
 * within those norms, not around them.
 *
 * PROOF RULE: the only named client proof is Credo World (B2B Consulting Firm,
 * NOT a law/CA firm — labelled honestly wherever it appears) and Vikram
 * Choudhary (B2B Consulting, Delhi — also labelled honestly). Both are real GE
 * B2B results from lib/constants.ts, used here because professional/B2B lead
 * generation is the closest honest analogue to law-firm and CA client
 * acquisition. Globally-true aggregate stats (₹10Cr+ ad spend, 4.9★/187
 * reviews, 97% retention, Jaipur HQ) are reused per the approved list. Nothing
 * else is invented. The calculator outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const LAW_FIRM_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Legal & Finance',

  hero: {
    badge: 'JAIPUR-BASED · MARKETING FOR LAW FIRMS, ADVOCATES & CA FIRMS',
    headlineLines: ['Marketing Agency for', 'Law Firms & CA Firms in Jaipur'],
    cyclingWords: [
      'Build authority, not adverts.',
      'Win clients beyond your referral circle.',
      'Turn LinkedIn into a client pipeline.',
      'Get enquiries you can actually track.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for advocates, law firms, and chartered accountants who want to grow beyond referrals — without stepping outside Bar Council or ICAI advertising norms. We build content, LinkedIn presence, and local search authority that earns qualified enquiries. For a comparable B2B consulting firm, we took Credo World from 0 to 15 qualified leads a month with 400% LinkedIn growth in 4 months.",
    primaryCta: { label: 'Get a Free Authority Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '0 → 15', label: 'Qualified B2B leads/month (Credo World)' },
      { emoji: '💼', value: '400%', label: 'LinkedIn reach growth in 4 months' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/law-firm/hero.jpg',
      alt: 'Professional law office meeting room in Jaipur with advocates in discussion',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What earned authority looks like',
    subhead:
      'Jaipur has no shortage of capable advocates and CAs — the ones winning the best clients are the ones a prospect finds credible before the first meeting, not necessarily the ones with the deepest referral book.',
    images: [
      { src: '/industries/law-firm/1.jpg', alt: 'Advocate reviewing case documents at a law office desk', caption: 'Content that demonstrates expertise, not just claims it' },
      { src: '/industries/law-firm/2.jpg', alt: 'Chartered accountant presenting financial documents to a client', caption: 'Authority that earns a first meeting' },
      { src: '/industries/law-firm/3.jpg', alt: 'Professional consultation between advisor and client in a modern office', caption: 'Qualified enquiries you can actually track' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: "Why great practices still depend entirely on referrals",
  painPoints: [
    { emoji: '⚖️', title: 'Professional-conduct rules most agencies ignore', body: "Bar Council of India and ICAI norms restrict solicitation-style advertising — and most marketing agencies either don't know the lines or blunder straight through them. You end up avoiding marketing altogether rather than risk a conduct complaint." },
    { emoji: '🔁', title: 'Growth capped by your referral circle', body: "Referrals built your practice, but they also cap it — good months when a few contacts think of you, quiet months when they don't. There's no lever to pull when the referral pipeline runs dry." },
    { emoji: '🔍', title: 'No online authority when it matters most', body: "A prospective client googles your firm before the first call. If they find a thin website and no LinkedIn presence, a competitor with better online authority wins the meeting — regardless of who's actually more capable." },
    { emoji: '📥', title: 'Enquiries that go nowhere', body: "The odd enquiry that does come in through directories or classifieds is usually price-shopping or the wrong fit — and there's no system to filter for the engagements you actually want." },
    { emoji: '⏳', title: 'A long trust cycle with nothing to nurture it', body: "Legal and financial engagements are considered decisions — weeks or months of trust-building before someone signs. A one-off ad or a single LinkedIn post doesn't survive that cycle, and most firms have nothing in between first contact and the engagement letter." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Authority-building that respects professional-conduct norms',
    subhead:
      "Generic agencies push promotional ad copy that risks a conduct complaint. Our AI is built around what actually works for regulated professions — credibility, content, and qualified enquiries.",
    cards: [
      { emoji: '📝', title: 'Compliant authority content', body: "We use AI to research the questions your ideal clients are actually asking, then build articles, LinkedIn posts, and case-law commentary that demonstrate expertise — informational and educational, never solicitation-styled." },
      { emoji: '💼', title: 'LinkedIn thought-leadership engine', body: "A structured LinkedIn system that builds your personal and firm authority in front of the business owners, promoters, and HNIs who actually need legal or financial counsel — the channel B2B professional services convert best on." },
      { emoji: '🎯', title: 'Enquiry-quality filtering', body: "Landing pages and intake forms built to pre-qualify by engagement type and budget, so your team spends time on the enquiries worth a first meeting — not on tyre-kickers." },
      { emoji: '📊', title: 'Cost-per-client tracking', body: "A dashboard that shows exactly what each channel — LinkedIn, local SEO, referral, content — costs you per qualified enquiry, so you finally know where growth is actually coming from." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete authority engine for Jaipur legal & finance practices',
  servicesSubhead: 'Six services, one promise: qualified enquiries that respect the profession you practice.',
  services: [
    { title: 'Authority Website & Content', body: "A professional, conduct-compliant website that establishes expertise through practice-area content, case-law commentary, and clear credentials — built to inform, never to solicit." },
    { title: 'LinkedIn & Thought-Leadership System', body: "A monthly content system that builds your personal and firm authority on LinkedIn — the platform where the business owners and promoters who need legal or financial counsel actually spend time." },
    { title: 'Local SEO & Google Business Profile', body: "Full optimisation so your firm ranks when someone searches 'CA firm near me' or 'corporate lawyer Jaipur' across C-Scheme, Vaishali Nagar, and Malviya Nagar — without a single word of prohibited advertising." },
    { title: 'Enquiry Nurture Sequence', body: "Email and WhatsApp sequences that stay in front of a prospect through the weeks-long consideration cycle typical of legal and financial engagements — informational, never pushy." },
    { title: 'Enquiry Qualification & Intake', body: "Structured intake forms and a qualification framework so your team's time goes to enquiries that match your practice areas and engagement size, not price-shoppers." },
    { title: 'Cost-Per-Client Reporting', body: "Clear, regular reporting on what each channel costs you per qualified enquiry and per signed engagement — the tracking most firms have never had visibility into." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A B2B professional-services client we helped build authority',
  resultHighlight: {
    label: 'FEATURED CLIENT · B2B CONSULTING FIRM',
    name: 'Credo World',
    detail: 'B2B Consulting Firm · Lead Gen + LinkedIn',
    quote:
      "Our entire pipeline relied on referrals with zero digital lead generation. Growth Escalators built our LinkedIn authority, ran targeted Google Ads, and gave us a content system — we went from 0 inbound leads to 15 qualified ones a month, with deals averaging ₹2.5L.",
    metrics: [
      { value: '0 → 15', label: 'Qualified B2B leads/month' },
      { value: '₹2.5L', label: 'Average deal size' },
      { value: '400%', label: 'LinkedIn reach growth in 4 months' },
    ],
  },

  process: [
    { step: '01', title: 'Authority & Compliance Audit', body: "A 45-minute call reviewing your current online presence, referral dependence, and practice areas — mapped against Bar Council / ICAI advertising norms so every recommendation stays fully compliant." },
    { step: '02', title: 'Content & Channel Plan', body: "Within 7 days you get a written plan: your content pillars, LinkedIn cadence, and the local-SEO priorities that will build authority with the exact clients your practice wants." },
    { step: '03', title: 'Build & Launch', body: "Website updates, LinkedIn content system, local SEO, and your enquiry intake flow go live within 14 days — built for a slow, trust-based consideration cycle, not a quick-hit promotion." },
    { step: '04', title: 'Track Toward Qualified Enquiries', body: "We report on enquiry volume, quality, and cost-per-client — not vanity metrics — and refine content and targeting as your practice areas and growth priorities evolve." },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that understands regulated professions',
  whyUs: [
    { title: 'Compliance-aware by design', body: "Every recommendation is built to work within Bar Council of India and ICAI advertising norms — authority content and informational marketing, never solicitation-styled promotion." },
    { title: 'Proven with B2B professional services', body: "For Credo World, a B2B consulting firm, we went from 0 to 15 qualified leads a month, ₹2.5L average deal size, and 400% LinkedIn reach growth in 4 months — the same playbook of authority, LinkedIn, and content we bring to legal and finance practices." },
    { title: 'A second B2B result, same pattern', body: "For Vikram Choudhary's B2B consulting firm in Delhi, we went from 0 inbound leads to 18 qualified ones a month in under 5 months — built on LinkedIn authority, Google Ads, and a content machine, the exact model that translates to legal and financial practices." },
    { title: 'Real proof, not just promises', body: "₹10Cr+ in ad spend managed, 4.9★ across 187 Google reviews, and 97% client retention — across 187+ brands, based in Jaipur since 2021." },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'How many qualified clients can your budget bring in?',
    subhead: 'Move the sliders to your numbers and see the qualified-enquiry volume your budget can realistically drive.',
    source: 'Calculator — Law/CA Jaipur',
    unitPlural: 'new clients',
    budget: { label: 'Your monthly marketing budget', default: 60000 },
    value: { label: 'Average value of one client engagement (₹)', default: 30000 },
    cplLow: 300,
    cplHigh: 1200,
    closeRate: 0.2,
    benchmark: 'Benchmark: qualified B2B and professional-services leads typically cost ₹300–₹1,200 in a well-run campaign, with roughly 1 in 5 converting to a signed engagement — the long consideration cycle for legal and financial services means nurture matters as much as volume.',
    formHeadline: 'See your full client-acquisition breakdown',
    formSubhead: 'Get your numbers, the professional-services benchmark, and the Credo World playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a marketing agency for a law firm or CA firm in Jaipur',
  faqs: [
    { q: 'Are lawyers and CAs even allowed to advertise in India?', a: "Direct solicitation is restricted under Bar Council of India rules for advocates, and ICAI has its own advertising code for chartered accountants. What is allowed — and what we build — is informational content, a professional website stating facts and credentials, thought leadership, and local search presence. We stay well inside those norms." },
    { q: 'How much does it cost to hire a marketing agency for a law or CA firm in Jaipur?', a: "It depends on your practice areas, whether you need content, LinkedIn, local SEO, or all three, and firm size. We quote exactly after the free authority audit — most Jaipur practices start with a website + content + LinkedIn package and add local SEO once the authority base is built." },
    { q: 'Will this guarantee us more clients or won cases?', a: "No credible agency can promise that, and we won't. What we build is qualified enquiries and professional authority — a stronger pipeline of prospects who already trust your expertise before the first meeting. What you do with that meeting is yours." },
    { q: 'Do you work with CA and finance firms, or only lawyers?', a: "Both. The underlying challenge — referral dependence, low online authority, long consideration cycles — is nearly identical for advocates, law firms, and CA or finance professionals, so the same authority-building approach applies to each." },
    { q: 'How do you generate enquiries without violating professional-conduct rules?', a: "We lead with content — practice-area explainers, case-law commentary, thought leadership — that informs rather than solicits. Local SEO and a professional website do the rest. It's slower than a hard-sell ad campaign, but it's the only approach that's actually compliant and durable." },
    { q: 'How long before we see qualified enquiries?', a: "Local SEO and LinkedIn authority typically build over 8-12 weeks. Because legal and financial engagements involve a longer consideration cycle, most Jaipur practices see the first qualified enquiries within 6-10 weeks and a steadier flow by month 3-4." },
  ],

  finalCta: {
    title: 'Ready to grow your Jaipur practice beyond referrals?',
    subhead: "Book a free, no-obligation authority audit. We'll review your online presence, your referral dependence, and your enquiry tracking — and tell you the three highest-leverage, fully compliant fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Authority Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR PROFESSIONALS',
  videoTestimonialsHeadline: 'Real practices, real authority',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur legal/finance clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for B2B & professional-services brands',
    links: [
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'Our core B2B pipeline-building service — the model behind Credo World.' },
      { label: 'LinkedIn Marketing Agency', href: '/linkedin-marketing-agency', blurb: 'Thought leadership and authority content for professionals.' },
      { label: 'Website Development Company in Jaipur', href: '/website-development-company-jaipur', blurb: 'Professional, compliant sites that build credibility fast.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Law/CA Lead — Jaipur',
    headline: 'Tell us about your practice',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free authority audit.',
    tag: 'BOOK YOUR FREE AUTHORITY AUDIT',
  },
}
