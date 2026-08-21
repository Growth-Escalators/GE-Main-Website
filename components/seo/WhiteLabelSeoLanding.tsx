import type { Metadata } from 'next'
import IndustryLandingPage, { type LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

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
  process: { step: string; title: string; body: string }[]
  whyUs: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  resultName: string
  resultDetail: string
  resultQuote: string
  related: { label: string; href: string; blurb: string }[]
  leadHeadline: string
  leadSubject: string
}

function buildContent(input: BuildInput): LandingContent {
  return {
    industryLabel: input.industryLabel,
    hero: {
      badge: input.badge,
      headlineLines: input.headline,
      cyclingWords: input.cycle,
      subhead: input.subhead,
      primaryCta: { label: 'Discuss a White-Label Partnership', href: '#lead-form' },
      secondaryCta: { label: 'See the Delivery Model ↓', href: '#results' },
      statPills: [
        { emoji: '🔒', value: 'NDA', label: 'Confidential delivery' },
        { emoji: '🏷️', value: 'Your Brand', label: 'White-labelled output' },
        { emoji: '🕒', value: 'Overlap', label: 'US-hours coordination' },
      ],
    },
    painPointsTag: 'WHY AGENCIES LOOK FOR A PARTNER',
    painPointsHeadline: input.painHeadline,
    painPoints: input.pains,
    aiAdvantage: {
      tag: 'INVISIBLE BY DESIGN',
      headline: 'Protect the client relationship first. Then scale delivery.',
      subhead: 'A white-label partner only works when the operating boundaries are clear before the first project starts.',
      cards: [
        {
          emoji: '🤝',
          title: 'Your client stays your client',
          body: 'We align on non-solicitation, communication boundaries and client visibility before delivery begins. Direct client contact happens only when you explicitly want it.',
        },
        {
          emoji: '🪪',
          title: 'Your brand stays in front',
          body: 'Reports, documentation, staging links, handoffs and project updates can be prepared for your agency to present under its own brand and process.',
        },
        {
          emoji: '🧭',
          title: 'One accountable delivery lane',
          body: 'Scope, ownership, deadlines, QA and escalation paths are defined up front so you are not translating between disconnected freelancers and your client.',
        },
        {
          emoji: '🌎',
          title: 'Built for US agency workflows',
          body: 'We work from India and can structure recurring overlap with US working hours, async updates and documented handoffs around the engagement.',
        },
      ],
    },
    servicesTag: 'WHAT YOU CAN RESELL',
    servicesHeadline: `White-label ${input.industryLabel.toLowerCase()} your agency can put its name on`,
    servicesSubhead: 'The work is delivered behind your agency, with scope and communication rules agreed before kickoff.',
    services: input.services,
    resultsTag: 'PARTNER OPERATING MODEL',
    resultsHeadline: 'A delivery model designed around agency trust',
    resultHighlight: {
      label: 'WHITE-LABEL DELIVERY',
      name: input.resultName,
      detail: input.resultDetail,
      quote: input.resultQuote,
      metrics: [
        { value: 'Private', label: 'NDA-ready engagement' },
        { value: 'Branded', label: 'Agency-facing deliverables' },
        { value: 'Flexible', label: 'Project or ongoing capacity' },
      ],
    },
    processTag: 'HOW THE PARTNERSHIP WORKS',
    processHeadline: 'From agency brief to invisible delivery',
    process: input.process,
    whyUsTag: 'WHY GROWTH ESCALATORS',
    whyUsHeadline: 'India delivery economics without treating quality as a commodity',
    whyUs: input.whyUs,
    faqsTag: 'AGENCY OWNER QUESTIONS',
    faqsHeadline: 'The questions to settle before you put your name on someone else’s work',
    faqs: input.faqs,
    finalCta: {
      title: 'Have a client requirement you need help delivering?',
      subhead: 'Send the brief, deadline and the level of visibility you want us to have. We can start with one project before discussing a larger partnership.',
      ctaLabel: 'Discuss a White-Label Partnership',
    },
    videoTestimonials: [],
    leadForm: {
      recipient: 'Info@growthescalators.com',
      subjectPrefix: input.leadSubject,
      headline: input.leadHeadline,
      subhead: 'Tell us what your agency sells, what you need fulfilled and whether there is an immediate client project. We’ll respond with the practical next step.',
      tag: 'FOR AGENCIES',
    },
    relatedResources: {
      tag: 'WHITE-LABEL CAPABILITIES',
      headline: 'Build the fulfilment stack your agency needs',
      subhead: 'Each page targets a different buyer intent so the cluster can grow without duplicating the same service page.',
      links: input.related,
    },
  }
}

export const WHITE_LABEL_PAGES = {
  digitalMarketing: {
    path: '/white-label-digital-marketing-agency',
    title: 'White Label Digital Marketing Agency for US Agencies | Growth Escalators',
    description: 'White label digital marketing for US agencies across SEO, paid media, lead generation, CRO and ecommerce. NDA-ready, agency-branded delivery from an India-based fulfilment team.',
    keywords: [
      'white label digital marketing agency',
      'white label marketing agency',
      'white label digital marketing services',
      'white label agency partner',
      'white label marketing for agencies',
      'digital marketing fulfillment for agencies',
      'white label marketing company USA',
    ],
    serviceType: 'White Label Digital Marketing',
    content: buildContent({
      industryLabel: 'Digital Marketing for Agencies',
      badge: 'FOR US AGENCIES · SEO · PAID MEDIA · CRO · NDA-READY',
      headline: ['White Label Marketing', 'Under Your Brand'],
      cycle: ['Keep the client.', 'Add services without hiring.', 'One fulfilment partner.', 'Agency-branded delivery.'],
      subhead: 'Growth Escalators works behind digital, creative and web agencies that need additional marketing fulfilment without adding permanent headcount. Your agency owns the client relationship; we handle agreed execution across paid media, SEO, lead generation, CRO and ecommerce growth.',
      painHeadline: 'Your agency is winning work faster than it can fulfil it',
      pains: [
        { emoji: '🧩', title: 'Too many specialist vendors', body: 'SEO is with one freelancer, paid media with another, development somewhere else and your account manager spends the week stitching their updates together.' },
        { emoji: '👥', title: 'Hiring before revenue is predictable', body: 'A full-time specialist is expensive when client demand is uneven. White-label fulfilment converts some of that fixed hiring risk into project or ongoing delivery capacity.' },
        { emoji: '📣', title: 'You are selling services you cannot confidently fulfil', body: 'Clients increasingly expect strategy and execution across channels. Saying no protects delivery quality but leaves expansion revenue on the table.' },
        { emoji: '🕳️', title: 'Vendor failures become your reputation problem', body: 'The client hired your agency, so missed deadlines, weak reporting and poor QA are ultimately attached to your name. The operating model has to protect that name.' },
      ],
      services: [
        { title: 'White Label SEO', body: 'Technical SEO, on-page work, content planning, internal linking and search-led landing-page recommendations prepared for your agency to present.' },
        { title: 'White Label Google Ads', body: 'Search, Shopping and demand-capture campaign management with reporting and recommendations routed through your agency.' },
        { title: 'White Label Meta Ads', body: 'Paid social account management, creative testing plans, campaign optimisation and ecommerce performance support.' },
        { title: 'Lead Generation', body: 'Landing pages, paid acquisition, search and funnel work for B2B or local-service client requirements where lead quality matters more than raw volume.' },
        { title: 'Ecommerce CRO', body: 'Conversion reviews and implementation support across PDPs, collections, landing pages, offers, analytics and checkout friction.' },
        { title: 'Agency Delivery Support', body: 'Reusable reporting, documented handoffs and recurring fulfilment capacity when your team needs a dependable behind-the-scenes execution lane.' },
      ],
      process: [
        { step: '01', title: 'Fit + NDA', body: 'We align on services, client ownership, communication rules, tools, visibility and confidentiality before touching a live account.' },
        { step: '02', title: 'Scope the Client Work', body: 'Your agency sends the requirement. We return scope, dependencies, delivery ownership and the information needed to start.' },
        { step: '03', title: 'Execute Behind Your Agency', body: 'Work runs through the agreed tools and update cadence. Your team stays in control of the client-facing relationship.' },
        { step: '04', title: 'Report, QA and Expand', body: 'We package progress and outcomes for your team, close delivery gaps and expand only when the first engagement proves the working relationship.' },
      ],
      whyUs: [
        { title: 'Marketing + development in one delivery company', body: 'When a paid-media problem is actually a landing-page, Shopify or tracking problem, you do not need to introduce another fulfilment vendor.' },
        { title: 'India-based, US-agency oriented', body: 'The delivery team is based in India. The engagement can include structured US-hours overlap and async handoffs without pretending we have a local US office.' },
        { title: 'Client ownership is a first-class requirement', body: 'White label is not just removing our logo. We align on solicitation, communication and visibility boundaries before project kickoff.' },
        { title: 'Start with one client', body: 'An agency should not have to move its entire fulfilment stack to test a partner. A contained first project creates a better proof of fit.' },
      ],
      faqs: [
        { q: 'Will Growth Escalators contact our clients directly?', a: 'Not unless your agency explicitly asks us to. The default white-label model keeps client communication routed through your team, with the boundaries documented at the start.' },
        { q: 'Can you sign an NDA and non-solicitation terms?', a: 'We can work under appropriate confidentiality and client-protection terms agreed between both companies. The final legal language should be documented in the partnership agreement or project SOW.' },
        { q: 'Are you based in the United States?', a: 'No. Growth Escalators is based in Jaipur, India. This page targets US agencies because the delivery model can support international clients with agreed time-zone overlap and documented handoffs; we do not represent ourselves as having a US office.' },
        { q: 'Can our agency put its brand on reports and deliverables?', a: 'Yes, where the deliverable format allows it. We can prepare agency-facing updates, documentation and reporting without Growth Escalators branding.' },
        { q: 'Do we need a monthly retainer?', a: 'Not necessarily. The right model depends on scope and volume. A fixed project or pilot can be used before moving to recurring capacity.' },
        { q: 'Which services can we white label?', a: 'The initial cluster covers digital marketing, performance marketing, web development, Shopify development and software development. Scope is confirmed per client requirement rather than assuming every project fits.' },
      ],
      resultName: 'Your agency remains the face of the work',
      resultDetail: 'Marketing fulfilment without adding another client-facing brand',
      resultQuote: 'The partnership is successful when your client experiences stronger delivery, your team spends less time coordinating vendors, and Growth Escalators remains exactly as visible as you want us to be.',
      related: [
        { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Paid media fulfilment across Meta, Google and performance reporting.' },
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Web build and ongoing development capacity behind your agency.' },
        { label: 'White Label Software Development', href: '/white-label-software-development', blurb: 'SaaS, apps, integrations and engineering under your brand.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify builds, CRO and theme work for agency client accounts.' },
      ],
      leadHeadline: 'Tell us what your agency needs fulfilled',
      leadSubject: 'New US White Label Marketing Partner Lead',
    }),
  },

  webDevelopment: {
    path: '/white-label-web-development-agency',
    title: 'White Label Web Development Agency for US Agencies | Growth Escalators',
    description: 'White label web development for US agencies. Deliver websites, landing pages, ecommerce and ongoing development under your brand with NDA-ready India-based execution.',
    keywords: [
      'white label web development agency',
      'white label web development',
      'white label website development',
      'web development partner for agencies',
      'white label web design and development',
      'outsourced web development for agencies',
      'white label developers for US agencies',
    ],
    serviceType: 'White Label Web Development',
    content: buildContent({
      industryLabel: 'Web Development for Agencies',
      badge: 'FOR US AGENCIES · WEBSITES · ECOMMERCE · LANDING PAGES',
      headline: ['White Label Web Dev', 'Your Clients Never See'],
      cycle: ['You sell the project.', 'We build behind you.', 'Clean handoffs.', 'No surprise client contact.'],
      subhead: 'Add website and ecommerce delivery to your agency without staffing a permanent development department. We work behind your process on scoped client builds, landing pages, Shopify work and ongoing technical improvements.',
      painHeadline: 'Web projects become painful when your delivery capacity is unpredictable',
      pains: [
        { emoji: '📆', title: 'A client deadline arrived before a developer did', body: 'Hiring takes too long for a project already sold. The alternative is usually a rushed freelancer search with no consistent QA process.' },
        { emoji: '🧱', title: 'Every project is built differently', body: 'Unstructured contractors create one-off stacks, inconsistent handoffs and technical debt your agency inherits after launch.' },
        { emoji: '📱', title: 'The design looks good but the site is hard to operate', body: 'Client teams need editable components, stable CMS or ecommerce controls and responsive QA — not a beautiful handoff they cannot safely change.' },
        { emoji: '🔎', title: 'A redesign accidentally destroys SEO value', body: 'URLs, metadata, content hierarchy, schema, redirects and analytics are easy to lose when development is isolated from search and marketing.' },
      ],
      services: [
        { title: 'Marketing & Lead-Gen Websites', body: 'Conversion-led service websites and landing-page systems built around the strategy and design your agency owns.' },
        { title: 'Ecommerce Development', body: 'Storefront, product, collection and conversion work for ecommerce clients, with Shopify handled through the dedicated white-label Shopify capability.' },
        { title: 'Landing Page Development', body: 'Fast campaign landing pages with forms, analytics, responsive QA and reusable sections for paid-media teams.' },
        { title: 'Frontend & Next.js Development', body: 'Modern component-based website delivery where a custom React/Next.js implementation is the right fit for the project.' },
        { title: 'Website Redesign Implementation', body: 'Design-to-development delivery with SEO preservation, reusable components and launch QA built into the scope.' },
        { title: 'Ongoing Development Capacity', body: 'A repeatable lane for client requests, new pages, experiments, bug fixes and maintenance after initial project delivery.' },
      ],
      process: [
        { step: '01', title: 'Review the Brief', body: 'You send design, sitemap, technical requirements, deadline and the level of client visibility you want us to have.' },
        { step: '02', title: 'Scope Components + Risk', body: 'We identify reusable components, integrations, CMS needs, SEO dependencies, unknowns and acceptance criteria.' },
        { step: '03', title: 'Build + QA', body: 'Development runs through staging and documented checks across responsive behaviour, forms, analytics and critical user flows.' },
        { step: '04', title: 'White-Label Handoff', body: 'Your agency receives launch notes, documentation and the agreed handoff materials to present to the client.' },
      ],
      whyUs: [
        { title: 'Marketing context is built into development', body: 'A website exists to support acquisition, search and conversion. Our marketing background helps us flag implementation decisions that undermine those outcomes.' },
        { title: 'Shopify and custom development can sit together', body: 'You do not need one partner for ecommerce storefronts and another for custom web applications when client scope crosses both.' },
        { title: 'SEO preservation is part of launch thinking', body: 'We treat existing URLs, metadata, redirects, internal links and tracking as assets to preserve rather than things to rediscover after launch.' },
        { title: 'The agency controls visibility', body: 'We can remain completely behind your team or support technical calls when you explicitly choose to introduce us in a white-labelled role.' },
      ],
      faqs: [
        { q: 'Can you work from our Figma designs?', a: 'Yes. We can scope design-to-development projects from your agency’s approved designs, provided responsive states, assets and functional requirements are sufficiently defined.' },
        { q: 'Can you stay completely invisible to our client?', a: 'Yes. The default white-label model routes communication and deliverables through your agency. If a technical client call would help, participation only happens with your approval.' },
        { q: 'Do you handle Shopify projects too?', a: 'Yes. Shopify has its own white-label service page because the ecommerce, theme, app and merchandising requirements are distinct from general web development.' },
        { q: 'How do you handle SEO during a website redesign?', a: 'We identify the current URL and content structure, preserve valuable pages where appropriate, plan redirects for real URL changes, and check metadata, schema, internal links and analytics during launch.' },
        { q: 'Can you work inside our project-management tools?', a: 'We can align around common collaborative workflows where access and permissions are available. The exact toolset and update cadence are agreed before kickoff.' },
      ],
      resultName: 'A development team behind your agency, not beside it',
      resultDetail: 'Structured website delivery with your agency owning the relationship',
      resultQuote: 'A good white-label build should be easy for your team to explain, easy for the client to operate and boring to hand over because the technical details were handled before launch.',
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader US-agency fulfilment hub.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify-specific agency fulfilment.' },
        { label: 'White Label Software Development', href: '/white-label-software-development', blurb: 'For SaaS, apps, APIs and custom product engineering.' },
        { label: 'Website Development Agency', href: '/website-development-company-jaipur', blurb: 'Our broader website development capability.' },
      ],
      leadHeadline: 'Share the web project your agency needs delivered',
      leadSubject: 'New US White Label Web Development Lead',
    }),
  },

  softwareDevelopment: {
    path: '/white-label-software-development',
    title: 'White Label Software Development Company for US Agencies | Growth Escalators',
    description: 'White label software development for US agencies: SaaS, web apps, APIs, integrations, mobile apps and AI automation delivered under your brand by an India-based engineering team.',
    keywords: [
      'white label software development',
      'white label software development company',
      'white label software development agency',
      'white label app development',
      'software development partner for agencies',
      'white label SaaS development',
      'white label AI development',
    ],
    serviceType: 'White Label Software Development',
    content: buildContent({
      industryLabel: 'Software Development for Agencies',
      badge: 'FOR US AGENCIES · SAAS · APPS · APIS · AI AUTOMATION',
      headline: ['White Label Software', 'Shipped Under Your Name'],
      cycle: ['You keep the client.', 'We build the product.', 'Your brand owns the handoff.', 'Engineering without the payroll.'],
      subhead: 'Add custom software, SaaS, web applications, integrations and AI-enabled workflows to your agency without building a permanent engineering department. Growth Escalators delivers behind your brand while your agency retains the client relationship.',
      painHeadline: 'Software opportunities are valuable — and expensive to staff before they are predictable',
      pains: [
        { emoji: '💼', title: 'A client asks for software outside your current service stack', body: 'Turning down the opportunity protects your reputation, but it also hands a valuable client relationship to another vendor that may eventually expand into your core services.' },
        { emoji: '🧑‍💻', title: 'One developer cannot cover the whole build', body: 'Real products often need architecture, frontend, backend, QA, DevOps and product judgment. A single freelancer becomes a delivery bottleneck fast.' },
        { emoji: '📐', title: 'Scope is vague until engineering starts', body: 'Software projects fail early when assumptions about integrations, roles, permissions, data, edge cases and acceptance criteria are never turned into an executable scope.' },
        { emoji: '🔁', title: 'The launch is treated as the finish line', body: 'Your agency needs a support and change model after release so production issues, feature requests and client feedback do not fall into a vendor gap.' },
      ],
      services: [
        { title: 'Custom SaaS Development', body: 'Multi-user products, dashboards, account systems, billing flows and product features scoped around the actual client requirement.' },
        { title: 'Web Application Development', body: 'Custom portals, operational systems, marketplaces, dashboards and workflow applications using modern web stacks.' },
        { title: 'API & Integration Development', body: 'CRM, payment, ecommerce, analytics and third-party integrations where the client needs systems to work as one.' },
        { title: 'AI Automation & Features', body: 'Practical AI-enabled workflows, assistants, document processing and model/API integrations where the use case supports it.' },
        { title: 'Mobile & Cross-Platform App Work', body: 'Mobile application scope can be supported when the project requirements, stack and ongoing ownership model are a fit.' },
        { title: 'Ongoing Engineering Support', body: 'Post-launch fixes, product iterations and recurring capacity for agencies with continuing client software work.' },
      ],
      process: [
        { step: '01', title: 'Agency Fit + NDA', body: 'We define client ownership, visibility, communication boundaries and confidentiality before technical discovery.' },
        { step: '02', title: 'Technical Scope', body: 'We turn the client brief into architecture, assumptions, dependencies, milestones, acceptance criteria and a delivery model your agency can sell responsibly.' },
        { step: '03', title: 'Build in Sprints', body: 'Development, QA, demos and documented updates run behind your agency with the agreed review cadence.' },
        { step: '04', title: 'Deploy + Handover', body: 'Code, deployment access, documentation and ongoing support responsibilities are handed over according to the project agreement.' },
      ],
      whyUs: [
        { title: 'One company can cover marketing, web and software', body: 'Agencies often discover that a “website” project becomes an integration or application project. The wider capability reduces vendor switching when scope grows.' },
        { title: 'We do not hide the delivery location', body: 'Growth Escalators is India-based. We compete on structured delivery, communication and economics rather than pretending to be a US-local engineering company.' },
        { title: 'Scope discipline before feature velocity', body: 'The fastest sprint is useless if the agency sold the wrong assumptions. We prioritise clarity around roles, data, integrations, edge cases and acceptance criteria.' },
        { title: 'Flexible visibility', body: 'We can remain invisible, prepare technical material for your team, or participate as a white-labelled technical resource when you specifically want that model.' },
      ],
      faqs: [
        { q: 'What is white label software development?', a: 'It is a delivery model where an external engineering team builds software that your agency can deliver under its own brand and client relationship, with confidentiality and visibility rules agreed between the companies.' },
        { q: 'Who owns the code and intellectual property?', a: 'Ownership, repository access and IP transfer should be stated in the commercial agreement or SOW. We structure white-label work so the agreed ownership and handoff are clear before development begins.' },
        { q: 'Will your developers talk directly to our client?', a: 'Only if your agency wants that. The default model keeps communication through your team; technical participation can be added when it improves delivery and you approve the visibility.' },
        { q: 'Can you build SaaS and AI products under our agency brand?', a: 'Yes, where the requirement fits our engineering capability. We scope SaaS, custom applications, integrations and practical AI-enabled workflows rather than selling AI as a generic add-on.' },
        { q: 'Can we start with a small pilot?', a: 'Yes. A contained first project or technical workstream is often the safest way for both teams to test communication, quality and delivery expectations.' },
        { q: 'Do you work with US agencies even though you are in India?', a: 'Yes. The service is intentionally structured for international agency partnerships with documented communication, async handoffs and agreed overlap with US working hours.' },
      ],
      resultName: 'Engineering capacity your agency can sell with confidence',
      resultDetail: 'SaaS, apps and integrations delivered behind the agency relationship',
      resultQuote: 'The goal is not to become visible to your client. It is to make your agency capable of saying yes to larger technical work without taking on permanent engineering overhead before the demand is proven.',
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader US-agency fulfilment hub.' },
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'For websites, landing pages and ecommerce delivery.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify-specific client delivery.' },
        { label: 'Software Development Agency', href: '/software-development-company-jaipur', blurb: 'Our broader software-development capability.' },
      ],
      leadHeadline: 'Share the software opportunity your agency needs scoped',
      leadSubject: 'New US White Label Software Development Lead',
    }),
  },

  shopifyDevelopment: {
    path: '/white-label-shopify-development-agency',
    title: 'White Label Shopify Development Agency for US Agencies | Growth Escalators',
    description: 'White label Shopify development for US agencies: themes, Shopify 2.0 sections, CRO, app integrations, migrations and ecommerce development delivered under your brand.',
    keywords: [
      'white label Shopify development',
      'white label Shopify development agency',
      'white label Shopify developers',
      'Shopify development partner for agencies',
      'outsourced Shopify development',
      'white label ecommerce development',
    ],
    serviceType: 'White Label Shopify Development',
    content: buildContent({
      industryLabel: 'Shopify Development for Agencies',
      badge: 'FOR US AGENCIES · SHOPIFY 2.0 · CRO · THEMES · INTEGRATIONS',
      headline: ['White Label Shopify', 'Built Behind Your Agency'],
      cycle: ['Your Figma. Our build.', 'Reusable Shopify sections.', 'CRO-aware development.', 'Agency-controlled handoff.'],
      subhead: 'Give your agency a dependable Shopify delivery lane for client builds, redesigns, theme work, integrations and CRO implementation. We stay behind your brand while your team owns strategy and the client relationship.',
      painHeadline: 'Shopify work looks simple until client requirements collide with the theme',
      pains: [
        { emoji: '🧩', title: 'Every “small change” creates another app', body: 'Stacking apps can add cost, scripts and conflicts. The build needs judgment about what belongs in the theme, an app or a custom integration.' },
        { emoji: '🛍️', title: 'A beautiful PDP still does not convert', body: 'Shopify development has to respect product information, merchandising, offers, trust, reviews, mobile hierarchy and purchase friction — not just match a mockup.' },
        { emoji: '🧱', title: 'The client cannot edit the site after handoff', body: 'Agency teams need reusable Online Store 2.0 sections, sensible metafields and editor controls so every campaign does not become another dev ticket.' },
        { emoji: '🚦', title: 'Migration risk is discovered at launch', body: 'Changing themes or platforms can damage URLs, metadata, schema, tracking and customer flows when SEO and analytics are treated as afterthoughts.' },
      ],
      services: [
        { title: 'Shopify Theme Development', body: 'Custom or deeply customised themes with reusable sections and editor controls your agency can hand over cleanly.' },
        { title: 'Design-to-Shopify Builds', body: 'Implementation from approved Figma or design systems with responsive QA and merchandising behaviour accounted for.' },
        { title: 'Shopify CRO Development', body: 'PDP, collection, cart, offer, trust and mobile-conversion improvements built from a commercial brief rather than generic “best practices.”' },
        { title: 'App & API Integrations', body: 'Reviews, loyalty, subscriptions, CRM, analytics, payments and operational integrations scoped for stability and performance.' },
        { title: 'Migrations & Theme Rebuilds', body: 'Store and theme changes with URL, metadata, tracking and search-equity preservation included in the launch plan.' },
        { title: 'Ongoing Shopify Capacity', body: 'A repeatable dev lane for campaign pages, new sections, experiments, bug fixes and client requests after launch.' },
      ],
      process: [
        { step: '01', title: 'Review Store + Brief', body: 'We inspect the current theme, apps, data model, designs, analytics needs and what the client actually expects to edit.' },
        { step: '02', title: 'Lock the Build Plan', body: 'Sections, templates, metafields, integrations, migration needs and acceptance criteria are documented before development.' },
        { step: '03', title: 'Develop + QA', body: 'We test editor behaviour, responsive layouts, product flows, integrations and critical analytics before handoff.' },
        { step: '04', title: 'Agency-Led Launch', body: 'Your team receives the staging, launch checklist and documentation needed to present and release the work under your agency.' },
      ],
      whyUs: [
        { title: 'Shopify development and D2C performance live together', body: 'Our D2C work keeps theme decisions grounded in how product pages, collections, ads and CRO actually interact.' },
        { title: 'Editor flexibility matters', body: 'White-label work should reduce future dependency on us, not create it. We prefer modular sections and clear content controls where they fit.' },
        { title: 'No fake Shopify complexity', body: 'If a requirement is better handled with a native feature or reliable app, we will not recommend custom development just to increase scope.' },
        { title: 'SEO-aware releases', body: 'Existing URL structure, metadata, redirects, schema and analytics are reviewed when the client is migrating or rebuilding.' },
      ],
      faqs: [
        { q: 'Can you build Shopify stores from our agency’s Figma designs?', a: 'Yes. We can implement approved designs into Shopify, with the scope clarifying responsive states, reusable sections, metafields, integrations and any functionality not obvious from static screens.' },
        { q: 'Can our agency present the work as its own?', a: 'Yes. The white-label model is designed for your agency to own the client relationship and presentation. Branding and communication boundaries are agreed before kickoff.' },
        { q: 'Do you support existing Shopify stores or only new builds?', a: 'Both. We can work on redesigns, specific templates, CRO implementation, app cleanup, performance work and ongoing development without forcing a complete rebuild.' },
        { q: 'Will you contact our Shopify client directly?', a: 'Not by default. Client communication remains with your agency unless you explicitly request technical participation.' },
        { q: 'Can you help with Shopify CRO after launch?', a: 'Yes. Growth Escalators also works on D2C performance marketing and ecommerce CRO, so ongoing conversion improvements can sit in the same delivery relationship.' },
      ],
      resultName: 'Shopify fulfilment your account team can confidently sell',
      resultDetail: 'Theme, CRO and ecommerce implementation behind your agency brand',
      resultQuote: 'The best white-label Shopify build gives your agency fewer technical surprises, your client more control in the editor and the storefront less friction at the point of purchase.',
      related: [
        { label: 'White Label Web Development', href: '/white-label-web-development-agency', blurb: 'Broader website and landing-page fulfilment.' },
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The US-agency fulfilment hub.' },
        { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'Our direct Shopify development capability.' },
        { label: 'White Label Performance Marketing', href: '/white-label-performance-marketing-agency', blurb: 'Add paid acquisition to the same agency fulfilment relationship.' },
      ],
      leadHeadline: 'Share the Shopify client project you need delivered',
      leadSubject: 'New US White Label Shopify Development Lead',
    }),
  },

  performanceMarketing: {
    path: '/white-label-performance-marketing-agency',
    title: 'White Label Performance Marketing Agency for US Agencies | Growth Escalators',
    description: 'White label performance marketing for US agencies across Meta Ads, Google Ads, ecommerce, lead generation, CRO and reporting — delivered behind your agency brand.',
    keywords: [
      'white label performance marketing agency',
      'white label PPC agency',
      'white label paid media agency',
      'white label Google Ads agency',
      'white label Facebook ads agency',
      'white label Meta ads',
      'PPC fulfillment for agencies',
    ],
    serviceType: 'White Label Performance Marketing',
    content: buildContent({
      industryLabel: 'Performance Marketing for Agencies',
      badge: 'FOR US AGENCIES · META ADS · GOOGLE ADS · CRO · REPORTING',
      headline: ['White Label Paid Media', 'Your Agency Owns'],
      cycle: ['Meta Ads fulfilment.', 'Google Ads fulfilment.', 'Ecommerce growth.', 'Lead-gen media buying.'],
      subhead: 'Add paid acquisition capacity without building a full media-buying department. Growth Escalators can manage agreed Meta, Google, ecommerce and lead-generation work behind your agency, with reporting prepared for your team to own client communication.',
      painHeadline: 'Paid media is unforgiving when fulfilment and client communication are split',
      pains: [
        { emoji: '📊', title: 'The buyer wants answers your freelancer cannot explain', body: 'A campaign update is not enough. Your account team needs a clear view of what moved, why it moved and what will be tested next.' },
        { emoji: '🎨', title: 'Creative and media buying live in separate worlds', body: 'Meta performance is increasingly shaped by creative quality and post-click experience. A media buyer cannot fix a weak input pipeline alone.' },
        { emoji: '🛒', title: 'ROAS looks good while the business economics do not', body: 'For ecommerce, returns, margin, AOV, inventory and conversion matter. For lead gen, lead quality and follow-up matter more than a cheap form fill.' },
        { emoji: '🧪', title: 'Every optimisation is a reaction', body: 'Without a testing backlog and decision rules, agencies end up reporting platform noise instead of running a deliberate performance programme.' },
      ],
      services: [
        { title: 'White Label Meta Ads', body: 'Campaign structure, optimisation, creative-testing direction, retargeting and ecommerce or lead-generation management routed through your agency.' },
        { title: 'White Label Google Ads', body: 'Search, Shopping and campaign management built around demand capture, query quality, conversion tracking and business economics.' },
        { title: 'Ecommerce Performance Marketing', body: 'Paid acquisition with attention to AOV, margin, product mix, landing experience, creative fatigue and post-purchase realities.' },
        { title: 'Lead Generation Campaigns', body: 'Paid demand generation where the reporting focuses on qualified enquiries and downstream quality, not only cost per form submission.' },
        { title: 'CRO Feedback Loop', body: 'Landing-page and Shopify recommendations when campaign performance is constrained by the post-click experience rather than media settings.' },
        { title: 'Agency-Ready Reporting', body: 'Clear performance narratives, testing priorities and next actions prepared so your account team can communicate confidently with the client.' },
      ],
      process: [
        { step: '01', title: 'Audit + Success Definition', body: 'We align on the client’s real commercial target, tracking, margins or lead-quality signals, account history and your agency’s reporting expectations.' },
        { step: '02', title: 'Build the Testing Plan', body: 'Campaign structure, audiences, queries, creative needs, landing-page gaps and measurement fixes are prioritised before random optimisation begins.' },
        { step: '03', title: 'Manage + Document', body: 'Campaigns are operated behind your agency with an agreed cadence for decisions, tests, spend changes and escalations.' },
        { step: '04', title: 'Package the Client Story', body: 'Your account team receives the performance context, what changed, what was learned and what happens next — not a screenshot dump.' },
      ],
      whyUs: [
        { title: 'Paid media connects to CRO and development', body: 'When performance is limited by a Shopify PDP, landing page, tracking implementation or website issue, the same delivery company can help close the gap.' },
        { title: 'We separate platform metrics from business outcomes', body: 'A cheap lead or high platform ROAS is not automatically success. We push reporting toward the signals the client actually cares about.' },
        { title: 'Agency-ready communication', body: 'The white-label relationship is designed so your account team has context to lead the client conversation instead of forwarding a media buyer’s raw notes.' },
        { title: 'Channel fit before channel expansion', body: 'We do not need every client on every platform. The scope should follow demand, economics, creative supply and the client’s ability to convert the traffic.' },
      ],
      faqs: [
        { q: 'Can you manage Meta Ads and Google Ads under our agency brand?', a: 'Yes, where account access and scope are agreed. The work can be managed behind your agency with client-facing communication routed through your team.' },
        { q: 'Do you provide white-labelled reporting?', a: 'We can prepare reporting and written performance updates without Growth Escalators branding so your agency can present the work within its own client process.' },
        { q: 'Will you join client calls?', a: 'Only when your agency wants technical or channel support on a call. The default relationship keeps your agency in front and us behind the delivery.' },
        { q: 'Do you only work with ecommerce accounts?', a: 'No. Ecommerce is a strong part of our performance-marketing work, but we can also support appropriate B2B and local lead-generation scopes.' },
        { q: 'Can you also fix landing pages or Shopify issues?', a: 'Yes. That is one of the reasons the broader Growth Escalators delivery model is useful: paid media, CRO, Shopify and development can be handled within the same partnership when the bottleneck crosses disciplines.' },
      ],
      resultName: 'Media buying your agency can explain, not just resell',
      resultDetail: 'Paid acquisition, CRO feedback and reporting behind your account team',
      resultQuote: 'Your client should experience one coherent agency. The white-label partner’s job is to make the execution more rigorous without creating another voice your account manager has to reconcile.',
      related: [
        { label: 'White Label Digital Marketing', href: '/white-label-digital-marketing-agency', blurb: 'The broader US-agency fulfilment hub.' },
        { label: 'White Label Shopify Development', href: '/white-label-shopify-development-agency', blurb: 'Shopify delivery when paid traffic exposes storefront problems.' },
        { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'Our direct ecommerce performance capability.' },
        { label: 'Meta Ads for Ecommerce', href: '/meta-ads-agency-for-ecommerce', blurb: 'Direct ecommerce Meta Ads capability.' },
      ],
      leadHeadline: 'Tell us which client accounts need paid-media fulfilment',
      leadSubject: 'New US White Label Performance Marketing Lead',
    }),
  },
} satisfies Record<string, PageConfig>

export type WhiteLabelPageKey = keyof typeof WHITE_LABEL_PAGES

export function getWhiteLabelMetadata(key: WhiteLabelPageKey): Metadata {
  const page = WHITE_LABEL_PAGES[key]
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.path },
    openGraph: {
      type: 'website',
      title: page.title,
      description: page.description,
      url: page.path,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  }
}

function WhiteLabelSchema({ page }: { page: PageConfig }) {
  const hubPath = '/white-label-digital-marketing-agency'
  const isHub = page.path === hubPath
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    ...(isHub
      ? []
      : [{ '@type': 'ListItem', position: 2, name: 'White Label Agency Partner', item: `${SITE}${hubPath}` }]),
    {
      '@type': 'ListItem',
      position: isHub ? 2 : 3,
      name: page.content.industryLabel ?? page.serviceType,
      item: `${SITE}${page.path}`,
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE}${page.path}#service`,
        name: page.title.replace(' | Growth Escalators', ''),
        serviceType: page.serviceType,
        url: `${SITE}${page.path}`,
        description: page.description,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Digital agencies, marketing agencies, web agencies and consultancies in the United States',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${page.path}#breadcrumb`,
        itemListElement,
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function WhiteLabelSeoLanding({ pageKey }: { pageKey: WhiteLabelPageKey }) {
  const page = WHITE_LABEL_PAGES[pageKey]
  return (
    <>
      <WhiteLabelSchema page={page} />
      <IndustryLandingPage content={page.content} />
    </>
  )
}
