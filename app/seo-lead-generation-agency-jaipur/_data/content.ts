import type { LandingContent } from '@/components/landing/IndustryLandingPage'
import { JAIPUR_CONTENT } from '@/app/performance-marketing-agency-jaipur/_data/content'

/**
 * Local BOFU pillar for SEO + lead-generation intent in Jaipur.
 *
 * This page deliberately sits beside (not on top of) the existing Jaipur
 * performance-marketing page. /performance-marketing-agency-jaipur remains the
 * paid-media/PPC pillar; this route owns organic search + qualified lead-system
 * intent. Existing industry pages stay indexed and continue to target their own
 * long-tail searches.
 *
 * Proof is limited to results already published elsewhere on the site.
 */
export const SEO_LEAD_GEN_JAIPUR_CONTENT: LandingContent = {
  ...JAIPUR_CONTENT,
  industryLabel: 'SEO & Lead Generation',

  hero: {
    badge: 'JAIPUR SEO + LEAD GENERATION · SEARCH · CONTENT · CONVERSION',
    headlineLines: ['SEO & Lead Generation', 'Agency in Jaipur'],
    cyclingWords: [
      'Rank for buyer-intent searches.',
      'Turn traffic into qualified leads.',
      'Build compounding organic demand.',
      'Connect search to your CRM.',
    ],
    subhead:
      'Growth Escalators helps Jaipur businesses build a predictable lead engine across SEO, local search, content, landing pages and conversion tracking. We focus on qualified enquiries and pipeline — not rankings or traffic in isolation.',
    primaryCta: { label: 'Book a Free SEO & Lead Audit', href: '#lead-form' },
    secondaryCta: { label: 'See How We Build Pipeline ↓', href: '#results' },
    statPills: [
      { emoji: '🔎', value: 'SEO', label: 'Buyer-Intent Search' },
      { emoji: '🎯', value: 'Lead Gen', label: 'Qualified Enquiries' },
      { emoji: '📍', value: 'Jaipur', label: 'Local + National Reach' },
    ],
    image: {
      src: '/industries/mkt/hero.jpg',
      alt: 'Search and lead generation analytics dashboard',
    },
  },

  showcase: {
    tag: 'THE SYSTEM',
    headline: 'Search visibility is useful. Qualified demand is the goal.',
    subhead:
      'We connect technical SEO, local search, content, landing pages and conversion tracking so the traffic you earn has a clear path to becoming an enquiry.',
    images: [
      { src: '/industries/mkt/1.jpg', alt: 'Search performance dashboard with growth charts', caption: 'Search demand mapped to commercial intent' },
      { src: '/industries/mkt/2.jpg', alt: 'Analytics dashboard measuring website conversions', caption: 'Traffic and enquiries measured together' },
      { src: '/industries/mkt/3.jpg', alt: 'Growth team reviewing search and lead data', caption: 'SEO, content and conversion reviewed as one system' },
    ],
  },

  painPointsTag: 'WHERE SEO BREAKS',
  painPointsHeadline: 'Why rankings alone rarely create a reliable lead engine',
  painPoints: [
    { emoji: '📈', title: 'Traffic grows but enquiries do not', body: 'A page can rank and still fail commercially. We map keywords to buyer intent, then build the page and CTA around the action that matters.' },
    { emoji: '🧩', title: 'SEO and lead generation live in separate silos', body: 'Content, ads, landing pages and sales follow-up often run independently. We connect them so every channel feeds one measurable pipeline.' },
    { emoji: '📍', title: 'Local visibility is inconsistent', body: 'For Jaipur businesses, map visibility, service pages, reviews, local relevance and NAP consistency have to reinforce each other — not compete.' },
    { emoji: '🕳️', title: 'No clean attribution from search to lead', body: 'If you cannot see which page, query family or campaign creates enquiries, you cannot confidently decide what to scale. We build tracking around the conversion journey.' },
  ],

  aiAdvantage: {
    tag: 'AI-ASSISTED, HUMAN-LED',
    headline: 'Scale research and execution without publishing generic SEO content',
    subhead:
      'AI helps us process search patterns, content gaps and lead signals faster. Strategy, evidence, editing and commercial judgment stay with experienced operators.',
    cards: [
      { emoji: '🧠', title: 'Intent clustering', body: 'We group queries by buyer problem and stage so one strong page can satisfy a real search journey instead of creating dozens of thin pages.' },
      { emoji: '🔍', title: 'Search-gap analysis', body: 'We use data to identify the topics, local searches and comparison queries competitors are winning before prioritising the highest-commercial-value gaps.' },
      { emoji: '✍️', title: 'Human-edited content systems', body: 'AI can accelerate research and first drafts; every important page is structured, checked and edited for usefulness, originality and conversion intent.' },
      { emoji: '🎯', title: 'Lead-quality feedback loop', body: 'Search and campaign data is reviewed alongside lead quality so optimisation moves toward enquiries your team actually wants to close.' },
    ],
  },

  servicesTag: 'WHAT WE BUILD',
  servicesHeadline: 'SEO and lead generation connected from search to enquiry',
  servicesSubhead: 'A commercial search system designed to create visibility, trust and qualified demand — then measure what turns into pipeline.',
  services: [
    { title: 'SEO Strategy & Technical SEO', body: 'Crawlability, indexing, internal linking, page architecture, metadata, schema and Core Web Vitals aligned around the pages that matter commercially.' },
    { title: 'Local SEO for Jaipur', body: 'Local service pages, map relevance, NAP consistency, review signals and location-focused content for businesses competing in Jaipur.' },
    { title: 'Buyer-Intent Content', body: 'Service, comparison, problem and educational content built around what prospects search before contacting a provider.' },
    { title: 'Lead-Generation Landing Pages', body: 'Conversion-focused pages, offers and forms designed to turn organic and paid traffic into qualified enquiries rather than anonymous sessions.' },
    { title: 'Google Ads + Search Demand Capture', body: 'When paid search can accelerate the same commercial intent, we connect Google Ads with the SEO and landing-page system instead of running it separately.' },
    { title: 'Attribution, CRM & Lead Quality', body: 'Lean source tracking, landing-page attribution and CRM handoff so you can see which pages and channels produce the leads worth following up.' },
  ],

  resultsTag: 'PROOF, NOT TRAFFIC SCREENSHOTS',
  resultsHeadline: 'Lead generation measured by qualified pipeline',
  resultHighlight: {
    label: 'FEATURED CLIENT · B2B / CONSULTING',
    name: 'Credo World',
    detail: 'Authority content + Google Ads + conversion journey',
    quote:
      'Credo World relied on referrals and had no predictable digital pipeline. Growth Escalators built an authority-content system, targeted Google Ads and a conversion-focused landing page around their ICP. Within four months, the business moved from zero to a steady flow of qualified digital leads.',
    metrics: [
      { value: '0 → 15/mo', label: 'Qualified B2B leads' },
      { value: '₹2.5L', label: 'Average deal size' },
      { value: '+400%', label: 'LinkedIn growth in 4 months' },
    ],
  },

  processHeadline: 'Four steps from search demand to qualified enquiries',
  process: [
    { step: '01', title: 'Search + Lead Audit', body: 'We review rankings, crawl/indexation, local visibility, landing pages, lead quality and tracking to find the biggest commercial gaps first.' },
    { step: '02', title: 'Intent & Page Map', body: 'We map primary services, supporting clusters and Jaipur/local intent so each page has one clear role and avoids keyword cannibalisation.' },
    { step: '03', title: 'Build, Publish & Measure', body: 'Technical fixes, content, internal links, landing pages and tracking go live in priority order with every meaningful conversion source captured.' },
    { step: '04', title: 'Compound What Works', body: 'We expand winning clusters, improve pages that are close to page one, strengthen authority and use lead-quality feedback to decide where the next effort goes.' },
  ],

  whyUsHeadline: 'Why Growth Escalators for SEO and lead generation in Jaipur',
  whyUs: [
    { title: 'SEO is tied to revenue pages', body: 'We do not treat traffic as the finish line. The architecture, content and links are built around commercial pages and the enquiries they can realistically create.' },
    { title: 'One team across search, web and conversion', body: 'When a ranking page needs a better UX, form, tracking setup or development fix, it does not have to wait on a separate vendor.' },
    { title: 'Existing SEO equity is preserved', body: 'We strengthen important pillars without deleting useful long-tail pages or changing established URLs just to make the architecture look cleaner.' },
    { title: 'Jaipur context, wider execution', body: 'We are based in Jaipur and can build for local discovery while supporting national and broader India search demand where the service warrants it.' },
  ],

  leadMagnet: {
    type: 'local-booking',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What could a stronger lead engine do with your current budget?',
    subhead: 'Use the calculator as a directional starting point, then we will audit the actual search demand, conversion rate and lead quality behind your numbers.',
    source: 'Calculator — SEO & Lead Generation Jaipur',
    unitPlural: 'qualified leads',
    budget: { label: 'Your monthly growth budget', default: 60000 },
    value: { label: 'Average value of one customer (₹)', default: 10000 },
    cplLow: 100,
    cplHigh: 500,
    closeRate: 0.25,
    benchmark: 'This calculator is directional only. Your actual opportunity depends on search demand, competition, conversion rate, offer strength and lead qualification.',
    formHeadline: 'Get a search + lead opportunity review',
    formSubhead: 'Share your details and we will review the biggest SEO, local-search and conversion opportunities we can identify first.',
  },

  faqsHeadline: 'Hiring an SEO and lead generation agency in Jaipur',
  faqs: [
    { q: 'Do you handle both SEO and lead generation?', a: 'Yes. SEO covers organic search visibility and content; lead generation covers the landing pages, offers, tracking and demand-capture systems that turn visibility into enquiries. We connect the two instead of reporting them separately.' },
    { q: 'Do you offer local SEO for Jaipur businesses?', a: 'Yes. For businesses that serve Jaipur, we work on local service relevance, location pages, on-site signals, review strategy, NAP consistency and the content needed to support local discovery.' },
    { q: 'Will you delete our old service or industry pages?', a: 'Not by default. Existing pages are reviewed for rankings, traffic, backlinks and search intent first. Useful pages stay indexed and are organised beneath stronger service or industry pillars.' },
    { q: 'How long does SEO take?', a: 'Technical fixes and indexing changes can show movement quickly, while competitive rankings normally compound over months. We prioritise pages already close to meaningful positions alongside longer-term authority building.' },
    { q: 'Can you also improve our website conversion rate?', a: 'Yes. Growth Escalators also handles website development and CRO, so SEO pages can be improved for speed, clarity, forms and conversion without handing the work to another vendor.' },
    { q: 'How do you report success?', a: 'We look at rankings and organic traffic, but the commercial reporting focuses on qualified leads, source pages, conversion rate and the opportunities that are actually useful to your team.' },
  ],

  finalCta: {
    title: 'Ready to turn search visibility into qualified leads?',
    subhead: 'Book a free SEO and lead-generation audit. We will review your current search footprint, page architecture and conversion journey, then show you the highest-priority opportunities first.',
    ctaLabel: 'Book a Free SEO & Lead Audit',
  },

  videoTestimonialsTag: 'HEAR FROM OUR CLIENTS',
  videoTestimonialsHeadline: 'Real businesses, real growth systems',
  videoTestimonials: [],

  relatedResources: {
    tag: 'RELATED GROWTH PILLARS',
    headline: 'Build the rest of the growth system',
    links: [
      { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'Paid acquisition, creative testing and CRO for ecommerce brands.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'The Jaipur paid-media pillar for Meta Ads, Google Ads and full-funnel acquisition.' },
      { label: 'Website Development Agency in Jaipur', href: '/website-development-company-jaipur', blurb: 'Fast, SEO-ready websites and landing pages built to convert.' },
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'Pipeline creation for B2B services, consulting and longer sales cycles.' },
      { label: 'Case Studies', href: '/work', blurb: 'See measurable outcomes across Growth Escalators projects.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Jaipur SEO & Lead Generation Lead',
    headline: 'Tell us what you want to rank for and grow',
    subhead: 'Share your business details and a strategist will review the highest-priority search and lead-generation opportunities first.',
    tag: "LET'S TALK",
  },
}
