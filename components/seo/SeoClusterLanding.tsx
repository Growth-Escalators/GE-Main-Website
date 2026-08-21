import type { Metadata } from 'next'
import IndustryLandingPage, { type LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

type PageConfig = {
  path: string
  title: string
  description: string
  keywords: string[]
  serviceType: string
  areaServed?: string | string[]
  content: LandingContent
}

function makeContent(input: {
  industryLabel: string
  badge: string
  headline: [string, string]
  cycle: string[]
  subhead: string
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
}): LandingContent {
  return {
    industryLabel: input.industryLabel,
    hero: {
      badge: input.badge,
      headlineLines: input.headline,
      cyclingWords: input.cycle,
      subhead: input.subhead,
      primaryCta: { label: 'Book a Free Strategy Call', href: '#lead-form' },
      secondaryCta: { label: 'See How We Work ↓', href: '#results' },
      statPills: [
        { emoji: '⚡', value: 'Fast', label: 'Execution' },
        { emoji: '🔎', value: 'SEO', label: 'Search-Ready' },
        { emoji: '📈', value: 'CRO', label: 'Conversion-Led' },
      ],
    },
    painPointsHeadline: 'Where projects usually lose momentum',
    painPoints: input.pains,
    servicesHeadline: `What our ${input.industryLabel.toLowerCase()} engagement covers`,
    servicesSubhead: 'A focused delivery scope built around the search intent of this page — not a duplicated service list.',
    services: input.services,
    resultHighlight: {
      label: 'DELIVERY MODEL',
      name: input.resultName,
      detail: input.resultDetail,
      quote: input.resultQuote,
      metrics: [
        { value: '1', label: 'Accountable delivery team' },
        { value: '100%', label: 'Scope visibility' },
        { value: 'End-to-end', label: 'Build + QA + launch support' },
      ],
    },
    process: input.process,
    whyUs: input.whyUs,
    faqs: input.faqs,
    finalCta: {
      title: `Need a stronger ${input.industryLabel.toLowerCase()} partner?`,
      subhead: 'Share your current site, brief, store or product roadmap. We’ll tell you what we would change first and what should stay untouched.',
      ctaLabel: 'Book a Free Strategy Call',
    },
    videoTestimonials: [],
    leadForm: {
      recipient: 'Info@growthescalators.com',
      subjectPrefix: input.leadSubject,
      headline: input.leadHeadline,
      subhead: 'Tell us what you are trying to build or improve. We’ll respond with the most practical next step.',
      tag: "LET'S TALK",
    },
    relatedResources: {
      tag: 'RELATED SERVICES',
      headline: 'Explore the closest service pages',
      links: input.related,
    },
  }
}

export const SEO_CLUSTER_PAGES = {
  shopifyAgency: {
    path: '/shopify-development-agency',
    title: 'Shopify Development Agency | Growth Escalators',
    description: 'Shopify development agency for D2C and ecommerce brands — custom themes, Shopify 2.0 sections, app integrations, CRO, migrations and performance optimisation.',
    keywords: ['Shopify development agency', 'Shopify development company', 'Shopify website development', 'Shopify ecommerce development', 'Shopify developers India'],
    serviceType: 'Shopify Development',
    areaServed: ['IN', 'US', 'GB', 'AE', 'AU'],
    content: makeContent({
      industryLabel: 'Shopify Development', badge: 'SHOPIFY · THEME DEVELOPMENT · CRO · INTEGRATIONS', headline: ['Shopify Development', 'Built to Convert'],
      cycle: ['Custom Shopify builds.', 'Theme 2.0 development.', 'CRO without theme bloat.', 'Reliable app integrations.'],
      subhead: 'We build and improve Shopify stores for ecommerce teams that need stronger conversion, cleaner merchandising and maintainable theme architecture — without stacking unnecessary apps on top of a slow storefront.',
      pains: [
        { emoji: '🐢', title: 'Theme changes keep making the store slower', body: 'We separate genuine performance work from cosmetic fixes, reduce avoidable script weight and keep new sections modular.' },
        { emoji: '🧩', title: 'Every campaign needs a developer', body: 'We build reusable Online Store 2.0 sections so your team can launch offers, proof blocks and collection stories without reopening the codebase.' },
        { emoji: '🛒', title: 'Traffic arrives but PDPs do not close the sale', body: 'Development is tied to conversion structure: product information, trust, offers, reviews, bundles, sticky actions and mobile hierarchy.' },
        { emoji: '🔌', title: 'Apps solve one problem and create three more', body: 'We assess whether a feature belongs in the theme, an app or a custom integration before adding recurring cost and front-end overhead.' },
      ],
      services: [
        { title: 'Custom Shopify Theme Development', body: 'Section-based themes and custom storefront components matched to your merchandising and brand system.' },
        { title: 'Shopify CRO Development', body: 'PDP, collection, cart and landing-page improvements designed around conversion rather than visual novelty.' },
        { title: 'App & API Integrations', body: 'Reviews, loyalty, subscriptions, CRM, analytics and operational integrations implemented with a bias toward stability.' },
        { title: 'Store Migrations', body: 'Migration planning from WooCommerce, custom stacks or older Shopify themes with URL, data and SEO preservation in scope.' },
        { title: 'Performance & Technical Cleanup', body: 'Theme audits, script reduction, rendering fixes and practical Core Web Vitals improvements.' },
        { title: 'Ongoing Shopify Development', body: 'A dependable development lane for campaigns, experiments, merchandising and iterative CRO.' },
      ],
      process: [
        { step: '01', title: 'Audit the Store', body: 'We map theme architecture, apps, tracking, conversion friction and the exact pages driving revenue.' },
        { step: '02', title: 'Lock Scope & Components', body: 'We define reusable sections, integrations, data needs and acceptance criteria before development starts.' },
        { step: '03', title: 'Build & QA', body: 'Responsive implementation, Shopify editor testing, analytics checks and browser/device QA.' },
        { step: '04', title: 'Launch Without SEO Surprises', body: 'We preserve critical URLs, metadata, analytics and storefront behaviour while releasing the new experience.' },
      ],
      whyUs: [
        { title: 'Development and performance marketing under one roof', body: 'We understand the landing pages, PDPs and merchandising changes that paid-media teams repeatedly need.' },
        { title: 'Modular instead of fragile', body: 'Editors should be able to change copy, imagery and blocks without breaking unrelated pages.' },
        { title: 'CRO is part of the build', body: 'We judge development choices by speed, clarity and buying friction — not only whether the design matches.' },
        { title: 'No unnecessary rebuild', body: 'If your current theme can be repaired, we will recommend improving it rather than replacing it for the sake of a larger project.' },
      ],
      faqs: [
        { q: 'Do you build custom Shopify themes or only customise existing themes?', a: 'Both. We choose the route based on the design system, merchandising requirements, budget and how much technical debt exists in the current theme.' },
        { q: 'Can you improve an existing Shopify store without redesigning everything?', a: 'Yes. Many stores need targeted PDP, collection, navigation, cart, speed or section improvements rather than a full redesign.' },
        { q: 'Do you work with Shopify Plus?', a: 'We can support Shopify Plus storefront and integration work where the requirement fits our delivery scope, including advanced theme, merchandising and ecosystem integrations.' },
        { q: 'Will a Shopify redesign hurt our SEO?', a: 'It can if URLs, metadata, internal links, structured data or content are removed carelessly. SEO preservation is part of our migration and launch checklist.' },
      ],
      resultName: 'A maintainable Shopify storefront', resultDetail: 'Theme, merchandising, CRO and integrations handled as one system', resultQuote: 'The goal is not to create the most complicated Shopify build. It is to create a faster store your marketing team can actually operate.',
      related: [
        { label: 'Website Development Agency in Jaipur', href: '/website-development-company-jaipur', blurb: 'The broader website-development pillar.' },
        { label: 'Ecommerce Website Development Jaipur', href: '/ecommerce-website-development-company-jaipur', blurb: 'For ecommerce builds beyond Shopify-specific intent.' },
        { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'Acquisition and conversion strategy for ecommerce brands.' },
      ], leadHeadline: 'Tell us what your Shopify store needs', leadSubject: 'New Shopify Development Lead',
    }),
  },

  shopifyJaipur: {
    path: '/shopify-development-company-jaipur', title: 'Shopify Development Company in Jaipur | Growth Escalators',
    description: 'Shopify development company in Jaipur for local and national ecommerce brands — theme development, redesigns, app integrations, CRO and store performance.',
    keywords: ['Shopify development company Jaipur', 'Shopify developers Jaipur', 'Shopify website development Jaipur', 'Shopify agency Jaipur'], serviceType: 'Shopify Development in Jaipur', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Shopify Development in Jaipur', badge: 'JAIPUR SHOPIFY TEAM · BUILD · CRO · SUPPORT', headline: ['Shopify Development', 'Company in Jaipur'],
      cycle: ['Local Shopify delivery.', 'In-person collaboration when useful.', 'Ecommerce-first development.', 'Launch and ongoing support.'],
      subhead: 'A Jaipur-based Shopify development team for brands that want local accountability without giving up ecommerce depth. We handle theme work, CRO, integrations and ongoing storefront improvements from one delivery team.',
      pains: [
        { emoji: '📍', title: 'The vendor is local but not ecommerce-specialised', body: 'A general website developer may know pages, but Shopify requires product, variant, collection, cart and app ecosystem thinking.' },
        { emoji: '🧱', title: 'Small changes keep breaking the theme', body: 'We organise storefront work into reusable sections and predictable data structures instead of one-off patches.' },
        { emoji: '📱', title: 'Desktop looks fine; mobile conversion suffers', body: 'Most ecommerce traffic is mobile. We prioritise tap targets, purchase hierarchy, sticky actions, content density and speed on smaller screens.' },
        { emoji: '🤝', title: 'There is no accountable person after launch', body: 'We scope ongoing development and support clearly so campaigns do not get blocked after the initial build goes live.' },
      ],
      services: [
        { title: 'Shopify Store Development', body: 'New Shopify stores and structured rebuilds for brands selling across India or internationally.' },
        { title: 'Shopify Theme Customisation', body: 'Custom sections, templates, metafields, filters and merchandising controls for existing themes.' },
        { title: 'Shopify CRO & Redesign', body: 'Mobile-first PDP, collection, cart and landing-page improvements tied to buying behaviour.' },
        { title: 'App Integrations', body: 'Reviews, WhatsApp, analytics, loyalty, payments, shipping and operational app integration.' },
        { title: 'Speed Improvements', body: 'Theme and script audits focused on practical performance gains without removing important selling functionality.' },
        { title: 'Jaipur-Based Support', body: 'Remote-first delivery with local meetings available when a workshop or handoff benefits from being in person.' },
      ],
      process: [
        { step: '01', title: 'Jaipur / Remote Discovery', body: 'We understand catalogue, operations, campaigns and the current theme before proposing development.' },
        { step: '02', title: 'Prioritise Revenue Pages', body: 'Homepage is not automatically first. We prioritise PDP, collections and landing pages based on commercial impact.' },
        { step: '03', title: 'Develop & Test', body: 'Theme editor controls, responsive behaviour and app interactions are tested before release.' },
        { step: '04', title: 'Launch & Iterate', body: 'We monitor the storefront and keep a development lane open for the next conversion and merchandising priorities.' },
      ],
      whyUs: [
        { title: 'Jaipur presence, ecommerce mindset', body: 'You get local accountability with a team that also works across paid media, CRO and D2C growth.' },
        { title: 'Built for marketers to operate', body: 'The Shopify editor should enable campaigns, not force a code deployment for every offer change.' },
        { title: 'We protect existing SEO value', body: 'A redesign is planned around current URLs, content and search equity rather than treating the site as a blank slate.' },
        { title: 'Clear scope before code', body: 'We define what is theme work, app work, integration work and optional enhancement before development starts.' },
      ],
      faqs: [
        { q: 'Where is your Shopify development team based?', a: 'Growth Escalators is based in Jaipur and can work remotely with brands across India and other markets.' },
        { q: 'Can we meet your team in Jaipur?', a: 'Yes, where useful for discovery or project workshops. Most delivery can still run remotely for speed and documentation.' },
        { q: 'Do you also handle Shopify marketing?', a: 'Yes. Growth Escalators also works on D2C performance marketing, CRO and ecommerce growth, which helps development decisions stay commercially grounded.' },
        { q: 'Can you take over an existing Shopify store?', a: 'Yes. We first audit theme structure, apps and current issues so takeover work does not accidentally introduce regressions.' },
      ],
      resultName: 'Local accountability, ecommerce delivery', resultDetail: 'Jaipur-based collaboration with national ecommerce capability', resultQuote: 'The advantage of a local Shopify partner should be faster decisions and better accountability — not a smaller technical ceiling.',
      related: [
        { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'National and international Shopify service intent.' },
        { label: 'Website Development Jaipur', href: '/website-development-company-jaipur', blurb: 'Broader Jaipur website-development services.' },
        { label: 'Performance Marketing Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Local acquisition and media buying.' },
      ], leadHeadline: 'Discuss your Shopify project in Jaipur', leadSubject: 'New Shopify Jaipur Lead',
    }),
  },

  ecommerceJaipur: {
    path: '/ecommerce-website-development-company-jaipur', title: 'Ecommerce Website Development Company in Jaipur | Growth Escalators',
    description: 'Ecommerce website development company in Jaipur building conversion-led online stores, product experiences, checkout flows and integrations for growing brands.',
    keywords: ['ecommerce website development company Jaipur', 'ecommerce development Jaipur', 'online store development Jaipur', 'ecommerce website design Jaipur'], serviceType: 'Ecommerce Website Development', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Ecommerce Website Development', badge: 'JAIPUR ECOMMERCE DEVELOPMENT · UX · CRO · INTEGRATIONS', headline: ['Ecommerce Website', 'Development in Jaipur'],
      cycle: ['Stores built around products.', 'Mobile-first buying journeys.', 'Platform choice before code.', 'SEO-safe migrations.'],
      subhead: 'We design and build ecommerce websites around catalogue structure, product discovery, trust and checkout — choosing Shopify or another stack based on what the business actually needs.',
      pains: [
        { emoji: '🧭', title: 'The platform was chosen before requirements were understood', body: 'Platform decisions should follow catalogue, integrations, checkout, content and operating needs — not whichever stack the developer prefers.' },
        { emoji: '📦', title: 'Product discovery is harder than it should be', body: 'Collections, filters, search, variants and merchandising determine whether users find the right product quickly.' },
        { emoji: '💳', title: 'Checkout and payment friction leaks demand', body: 'We consider payment options, shipping clarity, cart behaviour and trust as part of development, not post-launch fixes.' },
        { emoji: '🔁', title: 'Marketing cannot launch quickly', body: 'Reusable landing and offer sections reduce dependence on developers for every sale, campaign or collection launch.' },
      ],
      services: [
        { title: 'Ecommerce Architecture', body: 'Platform, catalogue, navigation, integrations and URL structure defined before visual build begins.' },
        { title: 'Shopify & Custom Ecommerce', body: 'Shopify-first where it fits, with custom web application capability for requirements beyond a standard commerce stack.' },
        { title: 'Product & Collection UX', body: 'PDPs, collection pages, filters, search and merchandising designed for real catalogue behaviour.' },
        { title: 'Checkout & Integration Work', body: 'Payments, shipping, CRM, analytics and operational systems connected with clear ownership boundaries.' },
        { title: 'Technical SEO', body: 'Indexation, redirects, metadata, internal linking and structured data preserved or improved during development.' },
        { title: 'CRO Iteration', body: 'Post-launch iteration on the pages and interactions that influence conversion and average order value.' },
      ],
      process: [
        { step: '01', title: 'Map the Commerce Model', body: 'Products, variants, fulfilment, payments, analytics, marketing and back-office needs are documented first.' },
        { step: '02', title: 'Choose the Right Stack', body: 'We recommend the simplest platform that can reliably support the requirement and growth path.' },
        { step: '03', title: 'Build the Buying Journey', body: 'Navigation, collection, PDP, cart and checkout-supporting content are developed and tested as one flow.' },
        { step: '04', title: 'Migrate & Launch', body: 'Data, redirects, tracking and operational handoff are checked before the site becomes the primary storefront.' },
      ],
      whyUs: [
        { title: 'We also run ecommerce acquisition', body: 'Development decisions benefit from understanding paid landing traffic, product economics and conversion bottlenecks.' },
        { title: 'Platform-neutral thinking', body: 'We do not force every business into a custom build when a mature ecommerce platform will do the job better.' },
        { title: 'SEO is included in migration thinking', body: 'Existing URLs and content are treated as assets that need deliberate preservation.' },
        { title: 'Local Jaipur team', body: 'You can combine remote execution with local workshops or collaboration when useful.' },
      ],
      faqs: [
        { q: 'Which ecommerce platform do you recommend?', a: 'For many D2C brands Shopify is the practical default, but the correct answer depends on catalogue, integrations, checkout, content, internationalisation and ownership requirements.' },
        { q: 'Can you migrate our existing ecommerce store?', a: 'Yes. Migration scope can include products, collections, customers where appropriate, content, redirects, tracking and theme rebuild.' },
        { q: 'Do you handle ecommerce SEO during development?', a: 'Yes. We plan canonical URLs, redirects, metadata, structured data and internal linking so development does not unnecessarily reset search equity.' },
        { q: 'Can you improve only our product pages?', a: 'Yes. A full rebuild is not required when the main commercial opportunity sits in PDP, collection, cart or landing-page experience.' },
      ],
      resultName: 'A storefront built around the buying journey', resultDetail: 'Catalogue, UX, technology and growth connected before launch', resultQuote: 'An ecommerce website is not a brochure with a checkout button. The catalogue and purchase journey are the product.',
      related: [
        { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'For Shopify-specific projects.' },
        { label: 'Website Development Jaipur', href: '/website-development-company-jaipur', blurb: 'The broader local web-development pillar.' },
        { label: 'Ecommerce Advertising Agency', href: '/ecommerce-advertising-agency', blurb: 'Paid acquisition once the storefront is ready.' },
      ], leadHeadline: 'Tell us about your ecommerce build', leadSubject: 'New Ecommerce Development Jaipur Lead',
    }),
  },

  redesignJaipur: {
    path: '/website-redesign-agency-jaipur', title: 'Website Redesign Agency in Jaipur | CRO & SEO | Growth Escalators',
    description: 'Website redesign agency in Jaipur focused on conversion, mobile UX, speed and SEO preservation. Improve the existing site without losing what already works.',
    keywords: ['website redesign agency Jaipur', 'website redesign company Jaipur', 'website revamp Jaipur', 'CRO website redesign Jaipur'], serviceType: 'Website Redesign and CRO', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Website Redesign & CRO', badge: 'JAIPUR WEBSITE REDESIGN · CRO · MOBILE UX · SEO', headline: ['Website Redesign', 'Without Starting Over'],
      cycle: ['Keep what already works.', 'Fix conversion friction.', 'Protect ranking equity.', 'Modernise the mobile journey.'],
      subhead: 'We redesign websites when the current site is holding back conversion, speed or positioning — while preserving useful content, URLs, analytics and search equity instead of rebuilding blindly.',
      pains: [
        { emoji: '🧨', title: 'A redesign is being treated like a clean slate', body: 'Existing high-performing pages, links and search signals should be inventoried before visual changes begin.' },
        { emoji: '📱', title: 'The mobile experience feels compressed', body: 'Responsive is not the same as mobile-first. We rethink hierarchy, navigation, forms and conversion actions for small screens.' },
        { emoji: '🎯', title: 'The site looks fine but does not convert', body: 'Aesthetics cannot compensate for weak offers, unclear next steps, missing proof or friction in the buying journey.' },
        { emoji: '📉', title: 'Previous redesigns caused traffic drops', body: 'URL changes, removed content and missed redirects can erase SEO value. We plan those risks before launch.' },
      ],
      services: [
        { title: 'Conversion Audit', body: 'Page hierarchy, CTAs, proof, forms, mobile friction and analytics reviewed before redesign scope is finalised.' },
        { title: 'UX & Visual Redesign', body: 'A cleaner design system built around clarity, trust and action rather than decorative complexity.' },
        { title: 'Mobile-First Rebuild', body: 'Navigation, sections, forms and interaction patterns tested for the devices generating most of your traffic.' },
        { title: 'SEO Preservation', body: 'Current URLs, rankings, metadata, content and redirects incorporated into the redesign plan.' },
        { title: 'Performance Cleanup', body: 'Front-end bloat, oversized media and avoidable scripts addressed as part of implementation.' },
        { title: 'Post-Launch CRO', body: 'We keep iterating after release based on behaviour and conversion data rather than calling launch the finish line.' },
      ],
      process: [
        { step: '01', title: 'Inventory What Works', body: 'We review traffic, rankings, top pages, conversion paths and the content that should not be casually removed.' },
        { step: '02', title: 'Redesign the Journey', body: 'Information architecture, proof, CTAs and mobile hierarchy are solved before polishing visuals.' },
        { step: '03', title: 'Build with Redirect & Tracking Plans', body: 'Development and SEO migration tasks are managed together rather than sequentially.' },
        { step: '04', title: 'Launch & Measure', body: 'Critical events, forms, analytics and priority landing pages are checked immediately after release.' },
      ],
      whyUs: [
        { title: 'CRO and SEO sit inside the redesign', body: 'We do not separate visual work from commercial and search consequences.' },
        { title: 'We can improve instead of replace', body: 'If parts of the current site are strong, the scope can be surgical rather than a full rebuild.' },
        { title: 'Jaipur-based collaboration', body: 'Local businesses can work with a nearby team while still using a documented remote delivery process.' },
        { title: 'Marketing-aware development', body: 'Landing pages, analytics and campaign needs are considered in the component system from day one.' },
      ],
      faqs: [
        { q: 'Can a website redesign reduce Google rankings?', a: 'Yes, especially when URLs change, content is removed or technical SEO is missed. A redesign should include an SEO migration plan before launch.' },
        { q: 'Do we need to rebuild the entire website?', a: 'Not necessarily. We can redesign priority templates and components while preserving strong pages and infrastructure where that is the safer option.' },
        { q: 'Can you redesign a Shopify website?', a: 'Yes. Shopify redesign work can focus on theme architecture, PDPs, collection pages, cart, navigation and conversion sections.' },
        { q: 'How do you measure whether the redesign worked?', a: 'We look at the metrics relevant to the site: conversion rate, qualified leads, engagement with key CTAs, page speed and organic visibility, not just subjective design preference.' },
      ],
      resultName: 'A redesign that preserves useful equity', resultDetail: 'UX, CRO, SEO and performance planned together', resultQuote: 'The best redesign keeps the assets already earning trust and removes the friction that is costing conversion.',
      related: [
        { label: 'Website Development Jaipur', href: '/website-development-company-jaipur', blurb: 'For broader new website builds.' },
        { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'For Shopify-specific redesigns and development.' },
        { label: 'SEO & Lead Generation Jaipur', href: '/seo-lead-generation-agency-jaipur', blurb: 'For organic growth and lead-system work.' },
      ], leadHeadline: 'Show us the website you want to improve', leadSubject: 'New Website Redesign Jaipur Lead',
    }),
  },

  customSoftwareJaipur: {
    path: '/custom-software-development-company-jaipur', title: 'Custom Software Development Company in Jaipur | Growth Escalators',
    description: 'Custom software development company in Jaipur building internal tools, portals, CRM workflows, dashboards, integrations and business applications around real operations.',
    keywords: ['custom software development company Jaipur', 'custom software developers Jaipur', 'business software development Jaipur', 'CRM development Jaipur'], serviceType: 'Custom Software Development', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Custom Software Development', badge: 'JAIPUR CUSTOM SOFTWARE · PORTALS · CRM · AUTOMATION', headline: ['Custom Software', 'Development in Jaipur'],
      cycle: ['Build around your workflow.', 'Replace spreadsheet bottlenecks.', 'Connect disconnected systems.', 'Own the product roadmap.'],
      subhead: 'We build custom business software when off-the-shelf tools create more work than they remove — from internal portals and CRM workflows to dashboards, integrations and operational applications.',
      pains: [
        { emoji: '📊', title: 'Critical operations live in spreadsheets', body: 'Manual handoffs and duplicate data become expensive once teams and transaction volumes grow.' },
        { emoji: '🔁', title: 'Teams re-enter the same data everywhere', body: 'We map system boundaries and automate the highest-friction transfers before building a large new platform.' },
        { emoji: '🧰', title: 'Off-the-shelf software forces the wrong workflow', body: 'Custom software is justified when the process itself is differentiated or the workaround cost is consistently high.' },
        { emoji: '🌫️', title: 'The project starts with features, not outcomes', body: 'We define users, workflows, permissions, data and success criteria before turning the wish list into development tickets.' },
      ],
      services: [
        { title: 'Internal Business Applications', body: 'Role-based portals, workflow tools and operational systems designed around how teams actually work.' },
        { title: 'Custom CRM & Sales Workflows', body: 'Lead, pipeline, task and communication workflows when standard CRM configuration is not enough.' },
        { title: 'Dashboards & Reporting', body: 'Operational and commercial dashboards connected to the sources teams already use.' },
        { title: 'System Integrations', body: 'APIs, webhooks and middleware that reduce manual data movement between tools.' },
        { title: 'Workflow Automation', body: 'Approvals, notifications, status movement and repetitive back-office work automated where rules are clear.' },
        { title: 'Modernisation & Rebuilds', body: 'Existing internal tools assessed for staged modernisation rather than risky big-bang replacement.' },
      ],
      process: [
        { step: '01', title: 'Map the Workflow', body: 'Users, roles, triggers, exceptions, source systems and pain points are documented before screens are designed.' },
        { step: '02', title: 'Define the Smallest Useful Product', body: 'We prioritise the workflow that creates measurable value instead of shipping every requested feature in version one.' },
        { step: '03', title: 'Build in Testable Increments', body: 'Features move through development, review and acceptance in visible milestones.' },
        { step: '04', title: 'Deploy, Train & Iterate', body: 'Handoff includes access, workflow documentation and a roadmap for the next operational bottlenecks.' },
      ],
      whyUs: [
        { title: 'Business-first scoping', body: 'We challenge features that do not improve workflow, control, visibility or customer experience.' },
        { title: 'Jaipur-based delivery team', body: 'Local collaboration is available without compromising a documented development workflow.' },
        { title: 'Integrations before reinvention', body: 'Sometimes the right solution is connecting the tools you already have rather than rebuilding them.' },
        { title: 'Built for change', body: 'We structure products around modules and roles so new workflows can be added without rewriting the entire system.' },
      ],
      faqs: [
        { q: 'When does custom software make sense?', a: 'When a repeated workflow is strategically important, difficult to support with standard tools, or expensive enough in manual work that ownership of the system creates clear value.' },
        { q: 'Can you integrate with our existing CRM or ERP?', a: 'Usually yes, depending on the APIs and permissions the existing platform exposes. We confirm integration feasibility during discovery.' },
        { q: 'Do you build mobile apps too?', a: 'Yes, where the product genuinely needs native or mobile-app behaviour. For many internal workflows, a responsive web application can be faster and easier to maintain.' },
        { q: 'Can you take over software built by another developer?', a: 'Yes, after a codebase, infrastructure and dependency review. We avoid promising timelines before understanding technical debt.' },
      ],
      resultName: 'Software shaped around operations', resultDetail: 'Workflow, data, roles and integrations before feature volume', resultQuote: 'Custom software earns its cost when it removes a recurring constraint the business can clearly feel.',
      related: [
        { label: 'Software Development Company Jaipur', href: '/software-development-company-jaipur', blurb: 'The broad software and app pillar.' },
        { label: 'Web App Development Jaipur', href: '/web-app-development-company-jaipur', blurb: 'For browser-based products and portals.' },
        { label: 'SaaS Development Jaipur', href: '/saas-development-company-jaipur', blurb: 'For software products sold to customers.' },
      ], leadHeadline: 'Describe the workflow you want to improve', leadSubject: 'New Custom Software Jaipur Lead',
    }),
  },

  webAppJaipur: {
    path: '/web-app-development-company-jaipur', title: 'Web App Development Company in Jaipur | Growth Escalators',
    description: 'Web app development company in Jaipur building SaaS interfaces, customer portals, dashboards, marketplaces and internal applications with modern web stacks.',
    keywords: ['web app development company Jaipur', 'web application development Jaipur', 'React development company Jaipur', 'Next.js development Jaipur'], serviceType: 'Web Application Development', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Web App Development', badge: 'JAIPUR WEB APPS · PORTALS · DASHBOARDS · PRODUCT UI', headline: ['Web App Development', 'Company in Jaipur'],
      cycle: ['Dashboards that stay usable.', 'Portals built around roles.', 'Product UI with real workflows.', 'Modern web architecture.'],
      subhead: 'We build browser-based applications for customers and internal teams — including dashboards, portals, marketplaces, workflow products and SaaS interfaces where a standard marketing website is not enough.',
      pains: [
        { emoji: '🗂️', title: 'The product has pages but no workflow model', body: 'Web applications need roles, states, permissions and data flows — not just a collection of screens.' },
        { emoji: '🐛', title: 'Frontend and backend teams keep blocking each other', body: 'We define API contracts and acceptance states early so the product can evolve without constant rework.' },
        { emoji: '🔐', title: 'Permissions were added too late', body: 'Role-based access and data ownership belong in the architecture, not as a final-layer patch.' },
        { emoji: '📱', title: 'The app works on desktop only', body: 'Responsive application design considers dense tables, navigation, forms and interaction patterns rather than shrinking desktop UI.' },
      ],
      services: [
        { title: 'Customer Portals', body: 'Authenticated account areas, requests, documents, status tracking and customer workflows.' },
        { title: 'Dashboards', body: 'Operational, analytics and management dashboards with permissions and actionable drill-downs.' },
        { title: 'SaaS Frontends', body: 'Product interfaces for subscription software with onboarding, account and feature workflows.' },
        { title: 'Marketplace Applications', body: 'Two-sided or multi-role flows with listings, matching, status and transaction-supporting journeys.' },
        { title: 'API-Driven Web Apps', body: 'Frontend applications connected to internal or third-party APIs with clear loading, error and permission states.' },
        { title: 'Existing App Modernisation', body: 'Incremental UX and architecture improvements where a full rewrite would introduce unnecessary risk.' },
      ],
      process: [
        { step: '01', title: 'Define Users & States', body: 'We map roles, permissions, main jobs-to-be-done and the states each workflow can enter.' },
        { step: '02', title: 'Design the Product Flow', body: 'Navigation, information hierarchy and key interactions are solved before detailed UI polish.' },
        { step: '03', title: 'Build Against Contracts', body: 'Frontend, APIs, validation and state handling move through testable increments.' },
        { step: '04', title: 'Release & Observe', body: 'We validate real usage, errors and friction before expanding into secondary product areas.' },
      ],
      whyUs: [
        { title: 'Product thinking before component volume', body: 'We focus on the workflows users return to repeatedly, not the number of screens delivered.' },
        { title: 'Modern web stack capability', body: 'We can work with React/Next.js-style architectures and integrate with appropriate backend services and APIs.' },
        { title: 'Jaipur-based collaboration', body: 'Product workshops and local collaboration are possible while maintaining remote-friendly documentation.' },
        { title: 'Growth awareness', body: 'For customer-facing apps, we also understand onboarding, conversion and lifecycle needs around the product.' },
      ],
      faqs: [
        { q: 'What is the difference between a website and a web application?', a: 'A website is primarily content and navigation; a web application usually includes authenticated users, changing data, permissions and workflows that users perform repeatedly.' },
        { q: 'Which technologies do you use for web apps?', a: 'The exact stack depends on requirements, but modern React/Next.js-style frontend architecture, APIs and managed cloud services are common choices.' },
        { q: 'Can you build an MVP first?', a: 'Yes. We usually prefer a small coherent product that validates the core workflow over a broad first release with many half-finished features.' },
        { q: 'Can you redesign an existing web application?', a: 'Yes. We can work incrementally on UX and frontend architecture if replacing the full application is not justified.' },
      ],
      resultName: 'A web app organised around user jobs', resultDetail: 'Roles, state, data and product flow before visual complexity', resultQuote: 'Good web-app development turns business rules into a product users can understand without training for every action.',
      related: [
        { label: 'Custom Software Development Jaipur', href: '/custom-software-development-company-jaipur', blurb: 'For broader internal and business software.' },
        { label: 'SaaS Development Jaipur', href: '/saas-development-company-jaipur', blurb: 'For subscription software products.' },
        { label: 'Software Development Jaipur', href: '/software-development-company-jaipur', blurb: 'The main software-development pillar.' },
      ], leadHeadline: 'Tell us what your web app needs to do', leadSubject: 'New Web App Jaipur Lead',
    }),
  },

  saasJaipur: {
    path: '/saas-development-company-jaipur', title: 'SaaS Development Company in Jaipur | Growth Escalators',
    description: 'SaaS development company in Jaipur for founders and businesses building subscription software, portals and multi-tenant web products from MVP to scale.',
    keywords: ['SaaS development company Jaipur', 'SaaS developers Jaipur', 'SaaS product development Jaipur', 'MVP development Jaipur'], serviceType: 'SaaS Product Development', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'SaaS Product Development', badge: 'JAIPUR SAAS DEVELOPMENT · MVP · MULTI-TENANT · PRODUCT', headline: ['SaaS Product', 'Development in Jaipur'],
      cycle: ['MVP before feature sprawl.', 'Multi-tenant product thinking.', 'Onboarding built into UX.', 'Roadmaps shaped by usage.'],
      subhead: 'We help founders and businesses turn a repeatable software idea into a usable SaaS product — from workflow definition and MVP scope to authenticated product experience, subscriptions and iterative development.',
      pains: [
        { emoji: '🧳', title: 'The MVP contains the entire five-year roadmap', body: 'A first release should validate a core paid workflow, not attempt to prove every future feature at once.' },
        { emoji: '👥', title: 'Multi-tenant logic is being improvised', body: 'Accounts, organisations, roles, billing and data boundaries need deliberate architecture before customer volume grows.' },
        { emoji: '🚪', title: 'Onboarding is treated as marketing copy', body: 'SaaS onboarding is a product workflow: setup, permissions, empty states, activation and first value need to be designed.' },
        { emoji: '💸', title: 'Every change becomes expensive', body: 'A modular product and clear API contracts reduce the cost of learning after launch.' },
      ],
      services: [
        { title: 'SaaS MVP Development', body: 'A coherent first product centred on the workflow customers should be willing to adopt or pay for.' },
        { title: 'Multi-Tenant Architecture', body: 'Organisation, user, role and data-boundary planning suited to subscription software.' },
        { title: 'Authentication & Onboarding', body: 'Signup, invitations, setup, permissions and activation journeys treated as core product work.' },
        { title: 'Subscription & Billing Integration', body: 'Billing flows connected where the selected payment platform and market requirements allow.' },
        { title: 'Admin & Customer Portals', body: 'Operational admin controls and customer-facing account experiences planned together.' },
        { title: 'Product Iteration', body: 'Ongoing development prioritised from usage, customer feedback and commercial roadmap rather than backlog age.' },
      ],
      process: [
        { step: '01', title: 'Validate the Core Workflow', body: 'We define the repeated problem, user, activation moment and smallest product that can solve it coherently.' },
        { step: '02', title: 'Design Accounts & Data', body: 'Tenant, user, permission and core data models are clarified before product screens multiply.' },
        { step: '03', title: 'Build the MVP', body: 'The main workflow, onboarding and administration are delivered in reviewable increments.' },
        { step: '04', title: 'Learn From Real Usage', body: 'Post-launch development follows activation friction, customer requests and roadmap evidence.' },
      ],
      whyUs: [
        { title: 'We will cut features when needed', body: 'A smaller strong MVP is more valuable than a broad release that is difficult to test, explain or maintain.' },
        { title: 'Product and growth context', body: 'We consider acquisition pages, onboarding and conversion alongside the authenticated product experience.' },
        { title: 'Jaipur-based development', body: 'Founders can work with a local team while keeping a structured product-development cadence.' },
        { title: 'Built to evolve', body: 'We favour architecture that can absorb learning without turning each product iteration into a rewrite.' },
      ],
      faqs: [
        { q: 'Can you build a SaaS MVP?', a: 'Yes. We first reduce the idea to the smallest coherent product that can validate the core customer workflow.' },
        { q: 'Do you help with product scoping before development?', a: 'Yes. User roles, workflow, activation, data and release priorities should be clear before engineering effort expands.' },
        { q: 'Can you add payments and subscriptions?', a: 'Yes where supported by the selected payment provider and market requirements. We confirm exact billing behaviour during technical discovery.' },
        { q: 'Can you continue after the MVP?', a: 'Yes. Ongoing development can cover product feedback, integrations, analytics, onboarding improvements and roadmap features.' },
      ],
      resultName: 'A SaaS MVP that tests the real product', resultDetail: 'Core workflow, onboarding and tenancy before roadmap sprawl', resultQuote: 'The first version should make one customer job meaningfully easier — and teach you what deserves to be built next.',
      related: [
        { label: 'Web App Development Jaipur', href: '/web-app-development-company-jaipur', blurb: 'For browser-based application development.' },
        { label: 'Custom Software Development Jaipur', href: '/custom-software-development-company-jaipur', blurb: 'For bespoke operational software.' },
        { label: 'Software Development Jaipur', href: '/software-development-company-jaipur', blurb: 'The parent software-development pillar.' },
      ], leadHeadline: 'Tell us about the SaaS product you want to build', leadSubject: 'New SaaS Development Jaipur Lead',
    }),
  },

  womensClothing: {
    path: '/d2c/fashion/womens-clothing', title: "Performance Marketing Agency for Women's Clothing Brands | Growth Escalators",
    description: "Performance marketing for women's clothing brands — Meta Ads, creative testing, Shopify CRO, catalogue strategy and return-aware scaling for fashion ecommerce.",
    keywords: ["performance marketing agency for women's clothing brands", "women's fashion marketing agency", 'clothing brand performance marketing', "Meta Ads for women's clothing brands"], serviceType: "Performance Marketing for Women's Clothing Brands", areaServed: ['IN', 'AE'],
    content: makeContent({
      industryLabel: "Women's Clothing Performance Marketing", badge: "WOMEN'S FASHION · META ADS · SHOPIFY CRO · CREATIVE", headline: ["Performance Marketing for", "Women's Clothing Brands"],
      cycle: ['Scale collections, not just ads.', 'Creative built for fashion speed.', 'Return-aware media decisions.', 'PDPs that increase fit confidence.'],
      subhead: "We help women's clothing brands connect paid media, catalogue strategy, creative testing and Shopify conversion — accounting for the realities generic ecommerce playbooks miss: fit, returns, collection churn, COD and seasonal demand.",
      pains: [
        { emoji: '👗', title: 'Creative fatigue arrives before the collection is over', body: 'Fashion requires a repeatable testing pipeline across styling, UGC, model, product, occasion and offer angles.' },
        { emoji: '↩️', title: 'Platform ROAS ignores what comes back', body: 'We look beyond attributed purchase value and factor return/RTO behaviour into scaling decisions where the data is available.' },
        { emoji: '📏', title: 'Customers hesitate on fit and sizing', body: 'PDP structure, size guidance, visual context and reviews should reduce uncertainty before the customer reaches checkout.' },
        { emoji: '🪔', title: 'Demand changes with seasons and occasions', body: 'Festive, wedding, office, casual and summer demand require merchandising and creative calendars, not one evergreen ad set.' },
      ],
      services: [
        { title: 'Meta Ads for Women’s Fashion', body: 'Campaign structure, creative testing and catalogue retargeting designed around collection velocity.' },
        { title: 'Creative Testing System', body: 'Model-led, UGC, flat-lay, styling, social proof, offer and occasion angles tested systematically.' },
        { title: 'Shopify CRO', body: 'PDP, collection and cart improvements focused on fit confidence, trust, offers, delivery and merchandising.' },
        { title: 'Catalogue & Feed Strategy', body: 'Product sets and feeds organised so ad delivery follows available, current and commercially relevant inventory.' },
        { title: 'Offer & AOV Strategy', body: 'Bundles, sets, thresholds and cross-sell ideas evaluated against margin and customer behaviour.' },
        { title: 'Return-Aware Reporting', body: 'We align media decisions with business outcomes rather than treating pre-return platform revenue as the final truth.' },
      ],
      process: [
        { step: '01', title: 'Map Collection Economics', body: 'AOV, margin, returns, COD, hero categories and seasonal demand are reviewed before scaling decisions.' },
        { step: '02', title: 'Build the Creative Matrix', body: 'We organise testing around product, audience, occasion, format, offer and proof rather than random creative variation.' },
        { step: '03', title: 'Fix the Storefront Friction', body: 'PDP and collection issues that paid traffic repeatedly hits are prioritised alongside media work.' },
        { step: '04', title: 'Scale What Survives Returns', body: 'Spend moves toward products, audiences and creative that hold up commercially after the full order cycle.' },
      ],
      whyUs: [
        { title: 'Fashion-specific rather than generic D2C', body: 'We account for collection churn, sizing confidence, returns and the creative pace clothing brands face.' },
        { title: 'Media + Shopify CRO together', body: 'We can change the product experience when the bottleneck sits after the click.' },
        { title: 'Creative systems over one-off ads', body: 'A repeatable testing model matters more than finding one winning creative and waiting for it to fatigue.' },
        { title: 'Business metrics matter', body: 'We want scaling decisions to reflect real revenue quality, not only platform-attributed sales.' },
      ],
      faqs: [
        { q: "What is different about performance marketing for women's clothing brands?", a: 'Fit, returns, collection velocity, seasonality and creative fatigue make fashion economics different from many other ecommerce categories.' },
        { q: 'Do you manage Meta Ads and Shopify CRO together?', a: 'Yes. That is often useful because the same traffic insights that reveal ad problems also reveal PDP and collection-page conversion friction.' },
        { q: 'Can you help with creative direction?', a: 'Yes. We can structure creative testing around formats and angles, then help the brand build a more reliable production cadence.' },
        { q: 'Do you only work with large fashion brands?', a: 'No. Fit depends more on product-market traction, data availability, unit economics and willingness to test than on company size alone.' },
      ],
      resultName: 'A fashion growth system, not an ad account', resultDetail: 'Creative, catalogue, CRO and return-aware scaling connected', resultQuote: 'For women’s fashion, the ad is only one part of the sale. Product confidence, merchandising and what happens after delivery all affect whether growth is real.',
      related: [
        { label: 'Fashion & Apparel Performance Marketing', href: '/d2c/fashion', blurb: 'The parent fashion marketing pillar.' },
        { label: 'Performance Marketing for Kurti Brands', href: '/d2c/fashion/kurti', blurb: 'Ethnic-wear and kurti-specific growth intent.' },
        { label: 'Meta Ads for Fashion Brands', href: '/d2c/fashion/meta-ads', blurb: 'Channel-specific fashion advertising.' },
      ], leadHeadline: "Tell us about your women's clothing brand", leadSubject: "New Women's Clothing Performance Lead",
    }),
  },

  kurti: {
    path: '/d2c/fashion/kurti', title: 'Performance Marketing Agency for Kurti Brands | Growth Escalators',
    description: 'Performance marketing for kurti and ethnic wear brands — Meta Ads, festive campaign planning, creative testing, Shopify CRO, COD/RTO and catalogue scaling.',
    keywords: ['performance marketing for kurti brand', 'marketing agency for kurti brands', 'Meta Ads for kurti brands', 'ethnic wear performance marketing agency', 'digital marketing for ethnic wear brands'], serviceType: 'Performance Marketing for Kurti and Ethnic Wear Brands', areaServed: 'IN',
    content: makeContent({
      industryLabel: 'Kurti Brand Performance Marketing', badge: 'KURTI · ETHNIC WEAR · META ADS · FESTIVE GROWTH', headline: ['Performance Marketing for', 'Kurti & Ethnic Wear Brands'],
      cycle: ['Festive demand needs a calendar.', 'Scale sets, not only single kurtis.', 'COD economics matter.', 'Creative by occasion and style.'],
      subhead: 'We help kurti and ethnic-wear brands scale paid acquisition around the realities of the category: festive peaks, COD/RTO, size confidence, catalogue depth, changing styles and the AOV difference between single pieces and coordinated sets.',
      pains: [
        { emoji: '🪔', title: 'Festive demand is treated like a normal month', body: 'Navratri, Diwali, wedding and gifting demand require earlier creative, merchandising and budget preparation.' },
        { emoji: '📦', title: 'COD growth creates hidden RTO cost', body: 'Media scaling should account for order quality and confirmation behaviour, not just purchases recorded at checkout.' },
        { emoji: '🧵', title: 'Hundreds of styles compete for the same budget', body: 'Catalogues need product grouping, hero-product logic and clear rules for what deserves paid distribution.' },
        { emoji: '🛍️', title: 'Single-kurti AOV limits scale', body: 'Sets, coordinated looks, thresholds and cross-sell can change acquisition economics when the product strategy supports them.' },
      ],
      services: [
        { title: 'Meta Ads for Kurti Brands', body: 'Campaign and creative structures designed for style velocity, festive demand and catalogue depth.' },
        { title: 'Festive Campaign Planning', body: 'Creative, merchandising and budget calendars prepared before high-demand windows rather than during them.' },
        { title: 'Catalogue Segmentation', body: 'Products grouped by style, price, occasion, inventory and performance so paid spend has useful merchandising context.' },
        { title: 'COD / RTO-Aware Reporting', body: 'Order quality and RTO patterns considered when judging what should scale.' },
        { title: 'Shopify CRO for Ethnic Wear', body: 'Size, fabric, fit, styling, delivery and trust information strengthened on PDPs and collections.' },
        { title: 'AOV & Offer Testing', body: 'Sets, combo structures, prepaid incentives and thresholds evaluated with margin rather than discount depth alone.' },
      ],
      process: [
        { step: '01', title: 'Map Products, Margin & RTO', body: 'We review catalogue depth, bestsellers, price bands, COD behaviour and seasonal demand.' },
        { step: '02', title: 'Plan the Occasion Calendar', body: 'Festive, wedding, workwear, casual and gifting opportunities are mapped to creative and merchandising.' },
        { step: '03', title: 'Test Creative & Catalogue', body: 'We test style, occasion, model, product and offer angles while controlling where product budget goes.' },
        { step: '04', title: 'Scale Net-Quality Orders', body: 'Media decisions increasingly account for delivery and return quality where the required data is available.' },
      ],
      whyUs: [
        { title: 'Built for the economics of Indian fashion ecommerce', body: 'COD, RTO, festive peaks and category-specific merchandising are part of the operating model.' },
        { title: 'Store and ads can be improved together', body: 'We do not keep spending against PDP friction that development can solve.' },
        { title: 'Creative by buying occasion', body: 'A kurti for office wear, gifting and festive dressing should not be marketed as the same generic product.' },
        { title: 'Catalogue-aware scaling', body: 'We care about what is in stock, what can support paid acquisition and what should remain organic or merchandising-led.' },
      ],
      faqs: [
        { q: 'How should a kurti brand plan Meta Ads for festive season?', a: 'Start earlier than the demand peak: prepare catalogue priorities, creative angles, inventory and landing experiences before increasing budgets.' },
        { q: 'Can you help reduce COD and RTO impact?', a: 'Marketing cannot eliminate RTO alone, but audience quality, prepaid incentives, confirmation flows and reporting can help the business make better scaling decisions.' },
        { q: 'Should we advertise individual kurtis or sets?', a: 'Both can work. The answer depends on margin, AOV, inventory and conversion behaviour. We test merchandising and offer structures rather than assuming one format is always better.' },
        { q: 'Do you also improve the Shopify store?', a: 'Yes. Product-page and collection-page friction is often part of fashion performance marketing, especially around size, fabric, delivery and trust.' },
      ],
      resultName: 'Ethnic-wear growth built around real order economics', resultDetail: 'Festive calendar, catalogue, COD/RTO, creative and CRO aligned', resultQuote: 'Kurti brands do not need generic ecommerce media buying. They need a growth calendar that understands occasion, catalogue and order quality.',
      related: [
        { label: "Women's Clothing Performance Marketing", href: '/d2c/fashion/womens-clothing', blurb: 'The broader women’s fashion sub-cluster.' },
        { label: 'Fashion & Apparel Performance Marketing', href: '/d2c/fashion', blurb: 'The parent fashion pillar.' },
        { label: 'Meta Ads for Fashion Brands', href: '/d2c/fashion/meta-ads', blurb: 'Fashion-specific Meta Ads intent.' },
      ], leadHeadline: 'Tell us about your kurti or ethnic-wear brand', leadSubject: 'New Kurti Performance Marketing Lead',
    }),
  },

  fashionMeta: {
    path: '/d2c/fashion/meta-ads', title: 'Meta Ads Agency for Fashion & Apparel Brands | Growth Escalators',
    description: 'Meta Ads agency for fashion and apparel brands — creative testing, catalogue campaigns, retargeting, collection launches and return-aware performance marketing.',
    keywords: ['Meta Ads agency for fashion brands', 'Facebook ads agency for clothing brands', 'Meta Ads for apparel brands', 'fashion Facebook ads agency'], serviceType: 'Meta Ads for Fashion and Apparel Brands', areaServed: ['IN', 'AE'],
    content: makeContent({
      industryLabel: 'Meta Ads for Fashion Brands', badge: 'META ADS · FASHION · APPAREL · CATALOGUE · CREATIVE', headline: ['Meta Ads for', 'Fashion & Apparel Brands'],
      cycle: ['Creative velocity over hacks.', 'Catalogue built for inventory.', 'Launch budgets with discipline.', 'Retargeting that matches intent.'],
      subhead: 'We run Meta Ads for fashion and apparel brands with a category-specific approach to creative fatigue, catalogue campaigns, product launches, seasonality and return-aware measurement.',
      pains: [
        { emoji: '🎨', title: 'The account has a media problem that is actually a creative problem', body: 'Fashion needs a steady flow of new angles and formats. Campaign restructuring cannot rescue exhausted inputs forever.' },
        { emoji: '🧾', title: 'Catalogue campaigns ignore merchandising context', body: 'Product feeds should reflect availability and useful groupings instead of treating every SKU as equally worthy of spend.' },
        { emoji: '🚀', title: 'Collection launches reset performance', body: 'Budget, creative and product sequencing need a launch playbook so every new drop does not behave like a brand-new account.' },
        { emoji: '↩️', title: 'Attribution stops at purchase', body: 'Fashion returns can materially change the value of a campaign. We aim to reconcile media reporting with downstream order quality where possible.' },
      ],
      services: [
        { title: 'Meta Account Architecture', body: 'Campaign structure simplified around what needs control, what can use automation and what should stay separate.' },
        { title: 'Fashion Creative Testing', body: 'Systematic testing across UGC, model, product, styling, social proof, occasion and offer concepts.' },
        { title: 'Catalogue & Dynamic Product Ads', body: 'Feeds and product sets organised around inventory, merchandising and retargeting needs.' },
        { title: 'Collection Launch Campaigns', body: 'Launch pacing, creative sequencing and retargeting designed for new drops and seasonal capsules.' },
        { title: 'Retargeting', body: 'Warm audiences and product viewers handled with messaging that reflects where the shopper is in the decision.' },
        { title: 'Return-Aware Scaling', body: 'Where post-purchase data is available, we use it to improve the quality of media scaling decisions.' },
      ],
      process: [
        { step: '01', title: 'Audit Media + Merchandising', body: 'We review account structure, creative, catalogue, inventory and the post-click storefront together.' },
        { step: '02', title: 'Create the Testing Matrix', body: 'Audiences, products, creative angles and formats are organised so learning accumulates instead of resetting randomly.' },
        { step: '03', title: 'Feed Winners Into Scale', body: 'Winning creative and product groups are moved into scalable structures without duplicating every campaign.' },
        { step: '04', title: 'Refresh Before Fatigue Wins', body: 'Creative replacement follows performance signals and collection calendars rather than waiting for a complete collapse.' },
      ],
      whyUs: [
        { title: 'Fashion is the context, not an afterthought', body: 'Creative fatigue, returns, styles and collection timing are part of the account model.' },
        { title: 'We can fix the landing experience too', body: 'When Meta is sending qualified traffic but the PDP is weak, our Shopify/CRO capability can address the actual bottleneck.' },
        { title: 'Catalogue and creative work together', body: 'Dynamic product ads are stronger when the feed and merchandising logic underneath them are intentional.' },
        { title: 'Less obsession with account hacks', body: 'Meta automation changes quickly; durable advantage comes from better inputs, economics and customer experience.' },
      ],
      faqs: [
        { q: 'Do Meta Ads still work for fashion brands?', a: 'Yes, but the advantage increasingly comes from creative, catalogue quality, product economics and conversion rather than complex audience hacks.' },
        { q: 'How often should fashion brands create new ads?', a: 'There is no universal number. The right cadence depends on spend, audience size, collection velocity and fatigue signals, but fashion typically needs a faster creative pipeline than many categories.' },
        { q: 'Do you run Advantage+ Shopping campaigns?', a: 'We use Meta campaign types based on account maturity and what needs control. Automation can be useful when the catalogue, creative and measurement inputs are strong.' },
        { q: 'Can you manage only Meta Ads while our team handles content?', a: 'Yes, provided responsibilities and the creative supply process are clear. We can supply the testing roadmap while your team or creators produce assets.' },
      ],
      resultName: 'A fashion Meta system built around better inputs', resultDetail: 'Creative, catalogue, launches and storefront feedback connected', resultQuote: 'When the platform automates more media buying, the quality of your creative, products and conversion experience matters even more.',
      related: [
        { label: 'Fashion & Apparel Performance Marketing', href: '/d2c/fashion', blurb: 'The broad fashion growth pillar.' },
        { label: "Women's Clothing Performance Marketing", href: '/d2c/fashion/womens-clothing', blurb: 'Women’s fashion-specific commercial intent.' },
        { label: 'Meta Ads Agency for Ecommerce', href: '/meta-ads-agency-for-ecommerce', blurb: 'The broader ecommerce Meta Ads pillar.' },
      ], leadHeadline: 'Tell us about your fashion Meta Ads account', leadSubject: 'New Fashion Meta Ads Lead',
    }),
  },
} satisfies Record<string, PageConfig>

export type SeoClusterPageKey = keyof typeof SEO_CLUSTER_PAGES

export function getSeoClusterMetadata(key: SeoClusterPageKey): Metadata {
  const page = SEO_CLUSTER_PAGES[key]
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
  }
}

function SeoSchema({ page }: { page: PageConfig }) {
  const area = Array.isArray(page.areaServed) ? page.areaServed : [page.areaServed ?? 'IN']
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
        areaServed: area.map((code) => ({ '@type': 'Country', identifier: code })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${page.path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: page.content.industryLabel ?? page.serviceType, item: `${SITE}${page.path}` },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function SeoClusterLanding({ pageKey }: { pageKey: SeoClusterPageKey }) {
  const page = SEO_CLUSTER_PAGES[pageKey]
  return (
    <>
      <SeoSchema page={page} />
      <IndustryLandingPage content={page.content} />
    </>
  )
}
