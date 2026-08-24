import type { Metadata } from 'next'
import IndustryLandingPage, { type LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

type WhiteLabelMoneyKey = 'digitalMarketing' | 'performanceMarketing' | 'shopifyDevelopment' | 'seo'

type PageConfig = {
  path: string
  title: string
  description: string
  keywords: string[]
  serviceType: string
  content: LandingContent
}

type BuildInput = {
  industryLabel: string
  badge: string
  headline: [string, string]
  cycle: string[]
  subhead: string
  painHeadline: string
  pains: { emoji: string; title: string; body: string }[]
  services: { title: string; body: string }[]
  proofLabel: string
  proofName: string
  proofDetail: string
  proofQuote: string
  proofMetrics: { value: string; label: string }[]
  faqs: { q: string; a: string }[]
  related: { label: string; href: string; blurb: string }[]
  leadSubject: string
}

function buildWhiteLabelContent(input: BuildInput): LandingContent {
  return {
    industryLabel: input.industryLabel,
    hero: {
      badge: input.badge,
      headlineLines: input.headline,
      cyclingWords: input.cycle,
      subhead: input.subhead,
      primaryCta: { label: 'Send One Client Requirement', href: '#lead-form' },
      secondaryCta: { label: 'See How Delivery Works ↓', href: '#results' },
      statPills: [
        { emoji: '🔒', value: 'NDA', label: 'Confidential delivery' },
        { emoji: '🏷️', value: 'Your Brand', label: 'Agency-facing output' },
        { emoji: '🌎', value: 'US Hours', label: 'Planned overlap available' },
      ],
    },
    painPointsTag: 'WHY AGENCIES USE WHITE-LABEL DELIVERY',
    painPointsHeadline: input.painHeadline,
    painPoints: input.pains,
    aiAdvantage: {
      tag: 'CLIENT PROTECTION FIRST',
      headline: 'White label is an operating model, not a hidden logo',
      subhead: 'The relationship only works when client ownership, communication, branding, access and escalation rules are agreed before the first task starts.',
      cards: [
        { emoji: '🤝', title: 'Your client stays your client', body: 'Direct client contact is not the default. We align on non-solicitation, visibility and communication boundaries before delivery starts.' },
        { emoji: '🪪', title: 'Your agency remains in front', body: 'Reports, documentation, staging links and handoffs can be prepared for your team to present under its own brand and process.' },
        { emoji: '🧭', title: 'One accountable delivery lane', body: 'Scope, dependencies, QA, ownership, deadlines and escalation routes are documented so your account team is not coordinating a loose collection of freelancers.' },
        { emoji: '🇮🇳', title: 'India delivery, stated honestly', body: 'Growth Escalators is based in Jaipur, India. We can structure async handoffs and recurring overlap for US agencies without pretending to have a US office.' },
      ],
    },
    servicesTag: 'HOW YOU CAN USE US',
    servicesHeadline: 'Choose the smallest engagement model that solves the delivery gap',
    servicesSubhead: 'Start with one contained client requirement. Expand only if the working relationship proves itself.',
    services: input.services,
    resultsTag: input.proofLabel,
    resultsHeadline: 'Proof is labelled by what it actually proves',
    resultHighlight: {
      label: input.proofLabel,
      name: input.proofName,
      detail: input.proofDetail,
      quote: input.proofQuote,
      metrics: input.proofMetrics,
    },
    processTag: 'WHITE-LABEL DELIVERY MODEL',
    processHeadline: 'From one client brief to repeatable fulfilment',
    process: [
      { step: '01', title: 'Fit, NDA & Boundaries', body: 'We align on client ownership, confidentiality, communication, access, branding, tools, scope and whether our team should ever appear client-facing.' },
      { step: '02', title: 'Scope One Client Requirement', body: 'Send the brief, deadline and context. We return the workstream, dependencies, ownership and practical delivery approach before execution starts.' },
      { step: '03', title: 'Execute Behind Your Agency', body: 'Delivery runs through the agreed workflow with documented updates, QA and agency-facing handoffs. Your team stays in control of the relationship.' },
      { step: '04', title: 'Expand Only After Proof of Fit', body: 'If the pilot works, move to overflow support or recurring capacity. There is no requirement to migrate your entire fulfilment stack to test us.' },
    ],
    whyUsTag: 'ENGAGEMENT OPTIONS',
    whyUsHeadline: 'Project, overflow or recurring capacity — without permanent payroll first',
    whyUs: [
      { title: 'One-off client project', body: 'Use Growth Escalators for one defined requirement when your current team lacks capacity or a specialist capability.' },
      { title: 'Overflow delivery partner', body: 'Keep your internal team as the core and route excess work through a repeatable external lane when demand spikes.' },
      { title: 'Recurring fulfilment capacity', body: 'For predictable volume, establish a recurring delivery rhythm, shared operating standards and documented handoffs.' },
      { title: 'Cross-functional escalation', body: 'Marketing, Shopify, web and software capability live in the same company, which helps when the apparent channel problem is actually a tracking, page or development issue.' },
    ],
    faqsTag: 'AGENCY OWNER QUESTIONS',
    faqsHeadline: 'The questions to settle before another company works under your name',
    faqs: input.faqs,
    finalCta: {
      title: 'Test the partnership with one client requirement',
      subhead: 'You do not need to replace your existing team or move every client. Send one scoped requirement and judge us on communication, quality, reliability and how easy we make your agency look good.',
      ctaLabel: 'Send One Client Requirement',
    },
    videoTestimonials: [],
    leadForm: {
      recipient: 'Info@growthescalators.com',
      subjectPrefix: input.leadSubject,
      headline: 'Send us one client requirement',
      subhead: 'Tell us what your agency sells, what needs to be fulfilled, whether the requirement is active and the level of client visibility you want us to have.',
      tag: 'FOR AGENCIES',
    },
    relatedResources: {
      tag: 'WHITE-LABEL CAPABILITIES',
      headline: 'Build the fulfilment stack your agency actually needs',
      subhead: 'Each page owns a different commercial intent so the cluster can grow without cloning the same landing page.',
      links: input.related,
    },
  }
}

const COMMON_FAQS = [
  { q: 'Will Growth Escalators contact our clients directly?', a: 'Not by default. We agree the communication model before delivery starts. Direct client contact happens only when your agency explicitly wants it and the scope defines that visibility.' },
  { q: 'Can you sign an NDA and client-protection terms?', a: 'We can work under mutually agreed confidentiality and client-protection terms. The exact NDA, non-solicitation and commercial language should be documented in the agreement or project SOW.' },
  { q: 'Are you based in the United States?', a: 'No. Growth Escalators is based in Jaipur, India. We target US agencies because we can structure documented async delivery and agreed working-hour overlap; we do not represent ourselves as having a US office.' },
  { q: 'Can deliverables carry our agency branding?', a: 'Yes, where the deliverable format supports it. Reporting, documentation and handoffs can be prepared without Growth Escalators branding so your agency remains the client-facing owner.' },
  { q: 'Do we have to commit to a monthly retainer?', a: 'No. A fixed-scope first project is a valid way to test the partnership. Recurring capacity makes sense only when the volume and working relationship justify it.' },
  { q: 'How is white-label pricing decided?', a: 'Pricing depends on service, scope, complexity, turnaround, access, client-facing expectations and recurring volume. We scope the requirement before quoting rather than publishing a price that hides important assumptions.' },
]

export const WHITE_LABEL_MONEY_PAGES: Record<WhiteLabelMoneyKey, PageConfig> = {
  digitalMarketing: {
    path: '/white-label-digital-marketing-agency',
    title: 'White Label Digital Marketing Agency for US Agencies | Growth Escalators',
    description: 'White label digital marketing fulfilment for US agencies across SEO, paid media, CRO and lead generation. NDA-ready, agency-branded India delivery. Start with one client requirement.',
    keywords: ['white label digital marketing agency', 'white label marketing agency', 'digital marketing fulfillment for agencies', 'outsourced digital marketing agency', 'white label agency partner USA'],
    serviceType: 'White Label Digital Marketing',
    content: buildWhiteLabelContent({
      industryLabel: 'Digital Marketing Fulfilment for Agencies',
      badge: 'FOR US AGENCIES · SEO · PAID MEDIA · CRO · DEVELOPMENT SUPPORT',
      headline: ['White Label Digital', 'Marketing Agency for US Agencies'],
      cycle: ['Your brand.', 'Your client.', 'Our fulfilment team.', 'Start with one project.'],
      subhead: 'Growth Escalators works behind digital, creative and web agencies that need additional execution without adding permanent headcount first. Your agency owns the client relationship; we provide agreed fulfilment across SEO, paid media, CRO and adjacent technical delivery from our team in Jaipur, India.',
      painHeadline: 'Your agency can sell more than the current delivery bench can safely fulfil',
      pains: [
        { emoji: '👥', title: 'Hiring arrives before recurring revenue does', body: 'A full-time specialist is difficult to justify when client demand is uneven. White-label fulfilment can convert part of that fixed-capacity risk into project or recurring delivery.' },
        { emoji: '🧩', title: 'Too many freelancers create coordination debt', body: 'SEO, paid media, development and reporting live in different workflows, leaving your account team to translate status and quality between vendors.' },
        { emoji: '📈', title: 'Expansion revenue is being declined', body: 'The client asks for an adjacent service, but your agency either says no or sells it without a delivery system you trust.' },
        { emoji: '🛡️', title: 'Every vendor mistake lands on your brand', body: 'The client hired your agency. Missed deadlines, weak QA and unclear communication damage your reputation regardless of who actually executed the work.' },
      ],
      services: [
        { title: 'White Label SEO', body: 'Technical, on-page, local, content and internal-link delivery prepared for your agency to own and present.' },
        { title: 'White Label Performance Marketing', body: 'Meta and Google account execution, testing, reporting and optimisation behind your account-management layer.' },
        { title: 'White Label CRO & Landing Pages', body: 'Conversion audits, campaign landing pages and ecommerce improvements when traffic quality is not the only constraint.' },
        { title: 'One-Off Client Project', body: 'A contained first requirement to test quality and communication before a larger partnership.' },
        { title: 'Overflow Delivery Partner', body: 'Flexible capacity when your in-house team is full or a client asks for a skill you do not want to hire permanently.' },
        { title: 'Recurring Fulfilment Capacity', body: 'A repeatable operating lane for agencies with predictable monthly volume and a clear service mix.' },
      ],
      proofLabel: 'DIRECT DELIVERY CAPABILITY — NOT PRESENTED AS WHITE-LABEL PROOF',
      proofName: 'Growth Escalators delivery track record',
      proofDetail: 'Aggregate execution capability across direct client work',
      proofQuote: 'Until we have a client-approved white-label case study, we would rather show the delivery capability we can verify than relabel direct work as white-label proof. The pilot project is how an agency should validate fit.',
      proofMetrics: [
        { value: '₹10Cr+', label: 'Ad spend managed overall' },
        { value: '10,000+', label: 'Campaigns delivered overall' },
      ],
      faqs: [
        ...COMMON_FAQS,
        { q: 'White-label partner or in-house hire — when does each make sense?', a: 'In-house hiring is usually stronger when demand is stable enough to keep a specialist productive and the capability is strategically core. White-label fulfilment is useful for variable demand, service expansion, overflow capacity or testing a capability before hiring.' },
        { q: 'Can one partner handle marketing and technical fixes?', a: 'Where the requirement fits our scope, yes. Growth Escalators also handles Shopify, websites and software, which is useful when a marketing issue depends on tracking, landing pages or implementation.' },
      ],
      related: [
        { label: 'White Label SEO Agency', href: '/white-label-seo-agency', blurb: 'Dedicated SEO fulfilment for agencies.' },
        { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Meta and Google fulfilment behind your agency.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify builds, CRO and technical delivery.' },
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Websites and landing pages behind your brand.' },
      ],
      leadSubject: 'New White Label Digital Marketing Agency Lead',
    }),
  },

  performanceMarketing: {
    path: '/white-label-performance-marketing-agency',
    title: 'White Label Performance Marketing Agency | Meta & Google Fulfilment | Growth Escalators',
    description: 'White label performance marketing for agencies needing Meta Ads, Google Ads, ecommerce and lead-generation fulfilment. Agency-branded reporting, NDA-ready India delivery and US-hours overlap.',
    keywords: ['white label performance marketing agency', 'white label PPC agency', 'white label Google Ads management', 'white label Meta Ads agency', 'PPC fulfillment for agencies'],
    serviceType: 'White Label Performance Marketing',
    content: buildWhiteLabelContent({
      industryLabel: 'Performance Marketing Fulfilment',
      badge: 'FOR AGENCIES · META ADS · GOOGLE ADS · ECOMMERCE · LEAD GEN',
      headline: ['White Label Performance', 'Marketing Agency'],
      cycle: ['You own the account relationship.', 'We handle agreed execution.', 'Agency-facing reporting.', 'Start with one client.'],
      subhead: 'Add Meta and Google fulfilment behind your agency without hiring every media-buyer role before the revenue is stable. Growth Escalators can handle scoped paid-media execution, campaign testing, reporting and landing-page coordination while your agency remains the client-facing owner.',
      painHeadline: 'Paid media becomes an agency risk when selling capacity outruns operating capacity',
      pains: [
        { emoji: '📊', title: 'Accounts are being sold faster than senior buyers can absorb them', body: 'Adding one more client to an overloaded media team can lower quality across the whole book, not just the new account.' },
        { emoji: '🎨', title: 'The media buyer has no path to fix creative or landing-page constraints', body: 'Performance stalls when execution is isolated from creative, CRO, tracking and implementation, leaving the agency to coordinate several specialists.' },
        { emoji: '🧾', title: 'Client reports consume more time than optimisation', body: 'Inconsistent data and narrative force account managers to rewrite vendor output before it is safe to put in front of the client.' },
        { emoji: '🔐', title: 'Platform access increases client-protection risk', body: 'Ad accounts contain sensitive commercial data. Access, naming, communication and visibility rules need to be established before fulfilment begins.' },
      ],
      services: [
        { title: 'White Label Meta Ads', body: 'Campaign structure, budget pacing, creative-test planning and optimisation behind your agency workflow.' },
        { title: 'White Label Google Ads', body: 'Search, Shopping/PMax and high-intent demand capture with agency-facing reporting and recommendations.' },
        { title: 'Ecommerce Performance', body: 'Paid acquisition connected to product, catalogue, CRO and contribution economics where those data are available.' },
        { title: 'Lead Generation Performance', body: 'Paid campaigns, landing pages and qualification feedback for B2B and service-business accounts where lead quality matters.' },
        { title: 'Overflow Media Buying', body: 'Temporary or recurring paid-media capacity when your current team is full.' },
        { title: 'Reporting & QA', body: 'Documented account checks and reporting prepared so your team can explain what changed, why it changed and what comes next.' },
      ],
      proofLabel: 'DIRECT PERFORMANCE PROOF — NOT PRESENTED AS WHITE-LABEL PROOF',
      proofName: 'Paraiso',
      proofDetail: 'Fashion & lifestyle D2C · direct Growth Escalators delivery',
      proofQuote: 'Paraiso is included to show verified paid-growth capability, not to imply the work was performed white-label. An agency should use a contained first client project to evaluate whether that execution quality translates into its own workflow.',
      proofMetrics: [
        { value: '1.9× → 3.2×', label: 'ROAS' },
        { value: '6×', label: 'Revenue growth in 60 days' },
      ],
      faqs: [
        ...COMMON_FAQS,
        { q: 'Can you manage both Meta Ads and Google Ads under our agency?', a: 'Yes, where the client requirement fits our scope. The account structure, access model, reporting cadence and who communicates changes to the client are agreed before work starts.' },
        { q: 'Will you join client calls?', a: 'Only if your agency wants that model. We can stay entirely behind the scenes or join selected calls with a clearly agreed identity and role.' },
        { q: 'Do you guarantee ROAS or CPL?', a: 'No. Performance depends on the offer, economics, creative, conversion, market and sales process. We use verified direct-client evidence as proof of capability, not a promise that a white-label client will reproduce the same numbers.' },
      ],
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader agency fulfilment hub.' },
        { label: 'White Label SEO Agency', href: '/white-label-seo-agency', blurb: 'Technical, content and local SEO fulfilment.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Technical ecommerce fulfilment for paid-growth clients.' },
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Landing pages and website delivery behind your brand.' },
      ],
      leadSubject: 'New White Label Performance Marketing Agency Lead',
    }),
  },

  shopifyDevelopment: {
    path: '/white-label-shopify-development-agency',
    title: 'White Label Shopify Development Agency for Agencies | Growth Escalators',
    description: 'White label Shopify development for agencies — themes, Shopify 2.0 sections, CRO, integrations and ongoing client work delivered behind your brand from an India-based team.',
    keywords: ['white label Shopify development agency', 'white label Shopify developers', 'Shopify fulfillment for agencies', 'outsourced Shopify development agency', 'white label ecommerce development'],
    serviceType: 'White Label Shopify Development',
    content: buildWhiteLabelContent({
      industryLabel: 'Shopify Development Fulfilment',
      badge: 'FOR AGENCIES · SHOPIFY THEMES · CRO · INTEGRATIONS · ONGOING SUPPORT',
      headline: ['White Label Shopify', 'Development Agency'],
      cycle: ['You sell the Shopify project.', 'We build behind your agency.', 'Clean staging and handoffs.', 'No surprise client contact.'],
      subhead: 'Add Shopify delivery behind your agency for new builds, redesigns, CRO implementation, theme sections, integrations and ongoing client requests. We work from a scoped brief, keep client ownership with your team and build for maintainability rather than piling fixes into a fragile theme.',
      painHeadline: 'Shopify projects expose weak fulfilment faster than brochure websites do',
      pains: [
        { emoji: '🛒', title: 'A client needs ecommerce expertise your general web bench lacks', body: 'Shopify work touches products, variants, collections, cart, apps, tracking and merchandising. Treating it like a brochure site creates expensive rework.' },
        { emoji: '🧱', title: 'Every freelancer leaves a different theme architecture', body: 'One-off fixes accumulate into technical debt your agency inherits when the client returns for the next campaign.' },
        { emoji: '📱', title: 'The build matches design but misses conversion', body: 'A visually accurate theme can still perform poorly if mobile purchase hierarchy, product proof, speed and merchandising are ignored.' },
        { emoji: '🔎', title: 'A redesign accidentally destroys search equity', body: 'URLs, metadata, structured data, content hierarchy and tracking need explicit preservation during a Shopify rebuild.' },
      ],
      services: [
        { title: 'White Label Shopify Builds', body: 'New stores and structured rebuilds delivered against your design, requirements and client-facing process.' },
        { title: 'Theme 2.0 Sections & Templates', body: 'Reusable sections, product templates, collection experiences and metafield-driven components your client can operate after handoff.' },
        { title: 'Shopify CRO Implementation', body: 'PDP, collection, cart and landing-page changes for agency clients that need conversion work, not only design changes.' },
        { title: 'Apps & Integrations', body: 'Reviews, subscriptions, loyalty, CRM, analytics and operational integrations scoped with a bias toward stability.' },
        { title: 'Overflow Shopify Capacity', body: 'A repeatable lane for agencies whose internal developers are full or do not specialise in Shopify.' },
        { title: 'Ongoing Client Support', body: 'Campaign sections, merchandising improvements, bugs and iterative development after the initial project ships.' },
      ],
      proofLabel: 'DIRECT DELIVERY CAPABILITY — NOT PRESENTED AS WHITE-LABEL PROOF',
      proofName: 'Shopify + D2C delivery capability',
      proofDetail: 'Growth Escalators direct ecommerce work',
      proofQuote: 'We do not claim an agency client’s confidential project as public proof without permission. The stronger test is a contained Shopify client requirement where you can inspect code quality, QA, communication and handoff under your own process.',
      proofMetrics: [
        { value: 'Shopify', label: 'Theme + CRO capability' },
        { value: 'D2C', label: 'Marketing context built in' },
      ],
      faqs: [
        ...COMMON_FAQS,
        { q: 'Who owns the Shopify theme code and deliverables?', a: 'Ownership should be defined in the SOW. For client work, the expected model is that agreed deliverables are handed to your agency/client according to the commercial agreement, with third-party licenses and app terms respected.' },
        { q: 'Can you work from our Figma designs?', a: 'Yes, where the design is implementation-ready. We also flag ecommerce, responsive or Shopify-editor issues before development rather than reproducing a design problem exactly.' },
        { q: 'Will you work directly inside our client’s Shopify admin?', a: 'We can, with the access method agreed by your agency. We prefer least-privilege access and clear ownership of production changes.' },
        { q: 'Can you take ongoing Shopify tickets after launch?', a: 'Yes. Ongoing support can be project-based or recurring depending on the volume and response expectations.' },
      ],
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader US-agency fulfilment hub.' },
        { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Paid media fulfilment for ecommerce clients.' },
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Broader website-delivery capacity.' },
        { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'Our direct Shopify service capability.' },
      ],
      leadSubject: 'New White Label Shopify Development Agency Lead',
    }),
  },

  seo: {
    path: '/white-label-seo-agency',
    title: 'White Label SEO Agency for US Agencies | Growth Escalators',
    description: 'White label SEO fulfilment for US agencies across technical SEO, on-page SEO, content, internal linking and local search. NDA-ready, agency-branded delivery from Jaipur, India.',
    keywords: ['white label SEO agency', 'white label SEO services', 'SEO outsourcing for agencies', 'outsourced SEO agency', 'white label local SEO', 'SEO fulfillment for agencies USA'],
    serviceType: 'White Label SEO',
    content: buildWhiteLabelContent({
      industryLabel: 'SEO Fulfilment for Agencies',
      badge: 'FOR US AGENCIES · TECHNICAL SEO · CONTENT · ON-PAGE · LOCAL SEARCH',
      headline: ['White Label SEO Agency', 'for US Agencies'],
      cycle: ['Your strategy or ours.', 'Agency-branded deliverables.', 'Technical + content delivery.', 'Start with one client.'],
      subhead: 'Growth Escalators provides white-label SEO fulfilment for agencies that need technical, on-page, content, internal-link and local-search execution without adding a full SEO department first. Your agency remains the client-facing owner; our team in Jaipur works behind the agreed workflow.',
      painHeadline: 'SEO is easy to sell badly and expensive to fulfil inconsistently',
      pains: [
        { emoji: '🧱', title: 'Audits identify issues nobody has capacity to implement', body: 'A strategy deck has little value when technical fixes, content briefs, internal links and page updates sit in separate queues with no accountable owner.' },
        { emoji: '📝', title: 'Content volume creates a quality-control burden', body: 'Scaling articles or landing pages without search intent, evidence, editing and internal architecture creates pages that look productive but add little authority.' },
        { emoji: '📍', title: 'Local SEO becomes a checklist instead of an entity system', body: 'GBP, NAP consistency, service/location pages, reviews and local relevance need to work together rather than being treated as unrelated monthly tasks.' },
        { emoji: '📊', title: 'Reporting describes rankings but not commercial progress', body: 'Agencies need a clear story connecting technical work, visibility, qualified traffic, leads and what should happen next — not a spreadsheet of keyword movement alone.' },
      ],
      services: [
        { title: 'Technical SEO Fulfilment', body: 'Crawl/indexation reviews, metadata, canonicals, redirects, schema, internal architecture and implementation recommendations with clear ownership.' },
        { title: 'On-Page & Landing-Page SEO', body: 'Search-intent mapping, page structure, copy recommendations, internal linking and conversion-aware commercial page improvements.' },
        { title: 'SEO Content Production', body: 'Briefs, drafts, editing and publishing support designed around topical clusters and useful answers rather than arbitrary word counts.' },
        { title: 'Local SEO Fulfilment', body: 'Google Business Profile, local landing pages, citation/NAP hygiene, review systems and location relevance for suitable client accounts.' },
        { title: 'SEO + AI Search Readiness', body: 'Entity clarity, answer-first content, structured data and source-worthy pages that improve the site’s usefulness for traditional search and AI-assisted discovery.' },
        { title: 'Overflow / Recurring SEO Capacity', body: 'Use one-off implementation support or build a recurring lane for multiple agency client accounts.' },
      ],
      proofLabel: 'SEO DELIVERY MODEL — NO FABRICATED WHITE-LABEL CASE STUDY',
      proofName: 'Technical + content + implementation in one lane',
      proofDetail: 'A delivery capability statement, not a ranking guarantee',
      proofQuote: 'SEO proof should be tied to a real client, baseline and time window. Until a white-label client approves a public case study, we would rather let an agency validate our process on one account than manufacture a generic ranking story.',
      proofMetrics: [
        { value: 'Technical', label: 'Crawl + implementation' },
        { value: 'Content', label: 'Intent + editing + internal links' },
      ],
      faqs: [
        ...COMMON_FAQS,
        { q: 'Can you follow our agency’s SEO strategy instead of replacing it?', a: 'Yes. We can operate as fulfilment against your strategy or help shape the plan when requested. The scope should clarify who owns strategy, approvals, implementation and reporting.' },
        { q: 'Do you use AI for SEO content?', a: 'AI can assist research, outlining and production, but client-facing SEO content should be reviewed for accuracy, usefulness, tone and evidence. We do not treat unedited bulk generation as an SEO strategy.' },
        { q: 'Do you guarantee first-page rankings?', a: 'No. Search rankings depend on competition, site history, authority, technical health, content, links and algorithm changes. We guarantee the agreed work and transparent reporting, not a position we do not control.' },
        { q: 'Can you handle local SEO for agency clients?', a: 'Yes, for suitable businesses. Local SEO usually includes Google Business Profile, location/service pages, business-data consistency, reviews and local relevance rather than only directory submissions.' },
        { q: 'How do you support AISEO?', a: 'We improve entity clarity, answer-first content, internal architecture, structured data and pages that contain original, useful information worth retrieving. AI visibility cannot be guaranteed, but the site can be made easier for answer systems to understand and cite.' },
      ],
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader agency fulfilment hub.' },
        { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Paid media fulfilment for agency client accounts.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify technical delivery behind your brand.' },
        { label: 'SEO & Lead Generation Jaipur', href: '/seo-lead-generation-agency-jaipur', blurb: 'Our direct local SEO and lead-generation capability.' },
      ],
      leadSubject: 'New White Label SEO Agency Lead',
    }),
  },
}

export function getWhiteLabelMoneyMetadata(key: WhiteLabelMoneyKey): Metadata {
  const page = WHITE_LABEL_MONEY_PAGES[key]
  const url = `${SITE}${page.path}`
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website', siteName: 'Growth Escalators' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  }
}

function ServiceJsonLd({ page }: { page: PageConfig }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceType,
    serviceType: page.serviceType,
    url: `${SITE}${page.path}`,
    areaServed: ['US'],
    provider: {
      '@type': 'Organization',
      name: 'Growth Escalators',
      url: SITE,
      address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function WhiteLabelMoneyLanding({ pageKey }: { pageKey: WhiteLabelMoneyKey }) {
  const page = WHITE_LABEL_MONEY_PAGES[pageKey]
  return (
    <>
      <ServiceJsonLd page={page} />
      <IndustryLandingPage content={page.content} />
    </>
  )
}
