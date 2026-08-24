import type { Metadata } from 'next'
import IndustryLandingPage, { type LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

type PageConfig = {
  path: string
  title: string
  description: string
  keywords: string[]
  serviceType: string
  areaServed: string | string[]
  content: LandingContent
}

type PriorityNationalKey = 'realEstateLaunch' | 'travelIndia'

export const PRIORITY_NATIONAL_PAGES: Record<PriorityNationalKey, PageConfig> = {
  realEstateLaunch: {
    path: '/real-estate/project-launch-marketing',
    title: 'Real Estate Project Launch Marketing Agency | Growth Escalators',
    description: 'Project launch marketing for real estate developers — pre-launch demand, Meta and Google Ads, project landing pages, lead qualification, CRM follow-up and site-visit measurement.',
    keywords: ['real estate project launch marketing agency', 'real estate launch marketing', 'property project launch marketing', 'real estate lead generation agency', 'developer project launch marketing'],
    serviceType: 'Real Estate Project Launch Marketing',
    areaServed: 'India',
    content: {
      industryLabel: 'Real Estate Project Launches',
      hero: {
        badge: 'PRE-LAUNCH → LAUNCH → SITE VISITS · META · GOOGLE · CRM · CREATIVE',
        headlineLines: ['Real Estate Project', 'Launch Marketing Agency'],
        cyclingWords: ['Build demand before launch day.', 'Qualify buyers before sales calls.', 'Turn campaigns into site visits.', 'Measure the whole launch funnel.'],
        subhead: 'Growth Escalators helps developers build the acquisition system around a new real estate project before media spend peaks. We connect positioning, pre-launch demand, paid media, project landing pages, lead qualification, WhatsApp/CRM follow-up and site-visit reporting so launch performance is judged on buyer progress — not just enquiry volume.',
        primaryCta: { label: 'Book a Free Launch Audit', href: '#lead-form' },
        secondaryCta: { label: 'See Real Estate Proof ↓', href: '#results' },
        statPills: [
          { emoji: '🏗️', value: 'Launch', label: 'Pre-launch to site visits' },
          { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed overall' },
          { emoji: '📊', value: 'Full Funnel', label: 'Lead quality + site visits' },
        ],
        image: { src: '/industries/realestate/1.jpg', alt: 'Premium real estate project prepared for a new project marketing launch' },
      },
      painPointsTag: 'WHY LAUNCHES WASTE THEIR BEST WINDOW',
      painPointsHeadline: 'The launch calendar moves faster than disconnected agencies and sales teams',
      painPoints: [
        { emoji: '⏱️', title: 'Demand generation starts after the project is already launched', body: 'If positioning, creatives, landing pages, tracking and remarketing are assembled after launch, the highest-attention window is spent fixing setup rather than learning from buyers.' },
        { emoji: '📋', title: 'The launch optimises to forms, not buyer progression', body: 'A lead number without qualification, contact rate and site-visit feedback encourages media teams to buy volume the sales team does not value.' },
        { emoji: '🏢', title: 'Project differentiation lives in a brochure, not the funnel', body: 'Location, configuration, amenity, developer trust and purchase logic need to be visible in ads and landing pages — not hidden in a PDF the buyer sees after the enquiry.' },
        { emoji: '🔁', title: 'Sales feedback never reaches media buying', body: 'When rejection reasons and site-visit outcomes are not fed back, campaigns cannot learn which audiences and messages are producing serious project fit.' },
      ],
      aiAdvantage: {
        tag: 'SEARCH + AI DISCOVERY BEFORE LAUNCH',
        headline: 'Own the project questions buyers research before they speak to sales',
        subhead: 'A launch should create useful digital assets that keep working after the first campaign burst: project information, location context, FAQs and comparison-ready answers.',
        cards: [
          { emoji: '🗺️', title: 'Micro-market search intent', body: 'Build project and location content around the way buyers research neighbourhoods, property types, configurations and price bands.' },
          { emoji: '🏠', title: 'Project entity clarity', body: 'Keep project name, developer, location, configurations, status and official contact information consistent across the website and relevant business profiles.' },
          { emoji: '❓', title: 'Buyer decision answers', body: 'Create concise, visible answers around location, amenities, project stage, visit process and who the project is best suited for.' },
          { emoji: '🔗', title: 'Launch assets that compound', body: 'Turn high-performing launch landing pages into durable search and retargeting assets instead of discarding them when the first campaign phase ends.' },
        ],
      },
      servicesTag: 'THE PROJECT LAUNCH STACK',
      servicesHeadline: 'Everything needed between the first teaser and the qualified site visit',
      services: [
        { title: 'Pre-Launch Demand & Teaser Campaigns', body: 'Audience discovery, waitlist/interest capture and creative testing before the highest-spend launch window begins.' },
        { title: 'Meta Ads for Project Demand', body: 'Creative and lead-generation systems designed around project fit, price band, location and buyer motivation rather than generic property audiences.' },
        { title: 'Google Search for High-Intent Buyers', body: 'Capture people already searching by project type, location, developer, configuration and other relevant purchase intent.' },
        { title: 'Project Landing Page & CRO', body: 'A mobile-first page that makes positioning, location, configuration, proof, FAQs and visit actions clear before the lead reaches sales.' },
        { title: 'CRM, WhatsApp & Lead Routing', body: 'Source capture, instant acknowledgement, qualification and sales ownership designed before launch volume arrives.' },
        { title: 'Lead Quality & Site-Visit Reporting', body: 'Create a feedback loop from sales outcomes back into media so campaign optimisation can move beyond raw CPL.' },
      ],
      resultsTag: 'VERIFIED REAL ESTATE PROOF',
      resultsHeadline: 'A project funnel result already in our evidence set',
      resultHighlight: {
        label: 'LUXURY RESIDENTIAL PROJECT · JAIPUR',
        name: 'Arjun Singhania',
        detail: 'Real Estate Developer',
        quote: 'We launched a luxury residential project and had no digital presence. Growth Escalators built our entire funnel — Meta ads, landing page, WhatsApp follow-up. Within 60 days we had 3x more qualified site visits than our previous project.',
        metrics: [
          { value: '3×', label: 'Qualified site visits vs previous project' },
          { value: '60 days', label: 'Reported period' },
        ],
      },
      processTag: 'PROJECT LAUNCH PHASES',
      processHeadline: 'Build the measurement system before the media spike',
      process: [
        { step: '01', title: 'Pre-Launch Diagnosis', body: 'Clarify buyer segments, positioning, search demand, inventory priorities, landing-page needs, CRM ownership and the metrics sales will actually accept.' },
        { step: '02', title: 'Build & Test', body: 'Prepare campaign structure, creative angles, project pages, tracking, lead fields, WhatsApp acknowledgement and early demand tests.' },
        { step: '03', title: 'Launch & Qualify', body: 'Scale the strongest demand sources while watching lead fit, contact rate, rejection reasons and visit progression rather than CPL alone.' },
        { step: '04', title: 'Optimise Inventory Demand', body: 'Shift messaging and spend based on inventory, buyer feedback and project-stage priorities as the launch moves from awareness to conversion.' },
      ],
      whyUsTag: 'WHY THIS IS A HIGH-VALUE PAGE',
      whyUsHeadline: 'We enter where the developer’s commercial risk is highest',
      whyUs: [
        { title: 'Launch problem, not generic real estate services', body: 'This page targets the moment a developer is preparing to allocate meaningful acquisition spend, which is a different buying intent from a generic agency search.' },
        { title: 'Paid media + landing page + tracking', body: 'The launch funnel can be built and optimised as one system rather than divided between creative, website and ad vendors.' },
        { title: 'Sales feedback is part of optimisation', body: 'We want lead rejection reasons and site-visit outcomes where available because cheap leads are not the commercial objective.' },
        { title: 'No NRI-specific positioning', body: 'The page is intentionally built around project launch demand in India rather than a separate NRI marketing proposition.' },
      ],
      faqsTag: 'PROJECT LAUNCH QUESTIONS',
      faqsHeadline: 'What developers should settle before the launch budget goes live',
      faqs: [
        { q: 'How early should digital marketing start before a real estate project launch?', a: 'The exact timing depends on approvals, inventory and launch strategy, but the funnel, tracking, landing page, creative system and sales-feedback process should be prepared before the largest media spend begins. Early demand tests can reduce launch-week guesswork.' },
        { q: 'Should project-launch marketing focus on Meta Ads or Google Ads?', a: 'They usually play different roles. Meta can create and retarget demand; Google captures active search intent. The mix should follow buyer search behaviour, location, project type, price band and budget.' },
        { q: 'What should a developer measure besides CPL?', a: 'Useful downstream signals include contact rate, qualification, rejection reasons, site-visit bookings, completed site visits and, where sales cycles permit, booking/source attribution.' },
        { q: 'Can you work with our existing CRM and sales agency?', a: 'Yes. We prefer to map ownership and feedback before launch so leads do not fall between systems and marketing receives usable outcome data.' },
        { q: 'Do you guarantee property bookings?', a: 'No. Bookings depend on product, price, location, financing, market demand and sales execution. We optimise the measurable demand, qualification and conversion journey.' },
      ],
      finalCta: { title: 'Build the launch funnel before the launch budget peaks', subhead: 'Share the project, location, price band, inventory stage and planned launch timing. We will identify the acquisition infrastructure that needs to be ready first.', ctaLabel: 'Book a Free Launch Audit' },
      videoTestimonials: [],
      relatedResources: {
        tag: 'REAL ESTATE CLUSTER',
        headline: 'Related developer growth pages',
        links: [
          { label: 'Real Estate Marketing in Jaipur', href: '/real-estate-marketing-agency-jaipur', blurb: 'Local agency-hire intent for Jaipur builders and developers.' },
          { label: 'Real Estate Marketing', href: '/real-estate', blurb: 'The broader national real estate pillar.' },
          { label: 'Performance Marketing Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Paid acquisition and campaign management.' },
          { label: 'Website Development Jaipur', href: '/website-development-company-jaipur', blurb: 'Developer and project website capability.' },
        ],
      },
      leadForm: { recipient: 'Info@growthescalators.com', subjectPrefix: 'New Real Estate Project Launch Lead', headline: 'Tell us about the project launch', subhead: 'Share location, project type, price band, launch stage and the lead or site-visit target you are working toward.', tag: 'FREE LAUNCH AUDIT' },
    },
  },

  travelIndia: {
    path: '/travel-marketing-agency',
    title: 'Travel Marketing Agency in India | Meta & Google Ads | Growth Escalators',
    description: 'Performance marketing for travel companies, tour operators and DMCs in India focused on direct enquiries through Meta Ads, Google Ads, landing pages and WhatsApp — not OTA optimisation.',
    keywords: ['travel marketing agency India', 'digital marketing agency for travel companies', 'Meta ads for travel agency', 'Google ads for tour operators', 'tour operator marketing agency India', 'travel lead generation agency'],
    serviceType: 'Performance Marketing for Travel Companies and Tour Operators',
    areaServed: 'India',
    content: {
      industryLabel: 'Travel Companies in India',
      hero: {
        badge: 'TRAVEL COMPANIES · TOUR OPERATORS · DMCS · META + GOOGLE · DIRECT ENQUIRIES',
        headlineLines: ['Performance Marketing for', 'Travel Companies in India'],
        cyclingWords: ['Generate direct holiday enquiries.', 'Capture destination search demand.', 'Qualify on WhatsApp.', 'Reduce dependence on third-party discovery.'],
        subhead: 'Growth Escalators helps tour operators, travel companies and DMCs generate direct enquiries through Meta Ads and Google Ads. We are best suited to businesses selling packages, custom itineraries, group departures, honeymoon travel, premium holidays or destination services — not companies looking mainly for TripAdvisor, MakeMyTrip, Goibibo or OTA optimisation.',
        primaryCta: { label: 'Book a Free Travel Growth Audit', href: '#lead-form' },
        secondaryCta: { label: 'See Travel Proof ↓', href: '#results' },
        statPills: [
          { emoji: '✈️', value: 'Direct', label: 'Enquiry acquisition focus' },
          { emoji: '🔎', value: 'Google', label: 'Capture destination intent' },
          { emoji: '📱', value: 'Meta', label: 'Create package demand' },
        ],
      },
      painPointsTag: 'WHY TRAVEL LEADS BREAK',
      painPointsHeadline: 'Travel demand is easy to generate; profitable booking intent is harder',
      painPoints: [
        { emoji: '🌍', title: 'One generic campaign tries to sell every destination', body: 'Dubai honeymoon demand, Europe group departures and customised luxury travel have different buyers, lead times, price sensitivity and creative needs.' },
        { emoji: '💸', title: 'Cheap leads bury the sales team in “just checking” enquiries', body: 'A low CPL means little when budget, dates, departure city and traveller count do not fit the package. Qualification should happen before a long sales conversation.' },
        { emoji: '📞', title: 'The enquiry goes cold before the agent replies', body: 'Travel buyers often enquire with several companies at once. Fast WhatsApp acknowledgement and useful qualification can matter as much as the ad itself.' },
        { emoji: '🧳', title: 'The website behaves like a brochure instead of a sales funnel', body: 'Destination pages need clear package context, proof, inclusions, enquiry actions and enough information for a traveller to decide whether the company is worth contacting.' },
      ],
      aiAdvantage: {
        tag: 'SEO + AI TRAVEL DISCOVERY',
        headline: 'Own destination and package questions outside paid media too',
        subhead: 'Travel research increasingly crosses Google, social and AI assistants. Useful destination and package pages can create an organic layer beneath the paid-acquisition engine.',
        cards: [
          { emoji: '🗺️', title: 'Destination intent pages', body: 'Create useful pages around real destinations, trip types and package intent instead of dozens of near-identical city-keyword pages.' },
          { emoji: '📅', title: 'Planning answers', body: 'Answer itinerary, season, duration, inclusions, traveller fit and booking-process questions clearly so searchers can qualify themselves.' },
          { emoji: '🏷️', title: 'Offer clarity', body: 'Keep starting price context, inclusions, exclusions and package conditions visible where they are accurate and maintainable.' },
          { emoji: '🔗', title: 'Paid + organic destination assets', body: 'Use strong destination pages for Google Ads, SEO, internal linking and WhatsApp follow-up instead of sending every campaign to the homepage.' },
        ],
      },
      servicesTag: 'DIRECT TRAVEL ACQUISITION',
      servicesHeadline: 'Meta + Google + landing pages + WhatsApp around direct enquiries',
      services: [
        { title: 'Meta Ads for Travel Companies', body: 'Destination, package, seasonal and creative-led campaigns that create demand and retarget travellers who have already shown interest.' },
        { title: 'Google Ads for Tour Operators', body: 'Capture active search demand around destinations, packages, group departures and relevant high-intent travel queries.' },
        { title: 'Destination Landing Pages', body: 'Fast, mobile-first pages with package context, itinerary highlights, proof, FAQs and direct enquiry actions.' },
        { title: 'WhatsApp Qualification', body: 'Capture destination, dates, travellers, departure city and budget context early so sales teams can prioritise stronger-fit enquiries.' },
        { title: 'Creative & Offer Testing', body: 'Test destinations, trip formats, hooks, itinerary value, proof and seasonal offers instead of relying on one generic “book now” campaign.' },
        { title: 'Lead Quality & Booking Feedback', body: 'Where sales data is available, connect source and campaign to qualified conversations and booking outcomes so optimisation moves beyond CPL.' },
      ],
      resultsTag: 'VERIFIED TRAVEL PROOF',
      resultsHeadline: 'A travel lead-generation result already in our evidence set',
      resultHighlight: {
        label: 'FLIGHT TICKET FARE · SEO + FUNNELS',
        name: 'Flight Ticket Fare',
        detail: 'Travel lead generation',
        quote: 'The useful lesson is not that every travel campaign will match the same result. It is that search demand, landing pages and lead economics can be improved together instead of treating traffic as the final outcome.',
        metrics: [
          { value: '₹380 → ₹94', label: 'Cost per lead' },
          { value: '500+', label: 'Leads per month' },
        ],
      },
      processTag: 'TRAVEL GROWTH LOOP',
      processHeadline: 'Start with the destination and sales economics, not the ad platform',
      process: [
        { step: '01', title: 'Choose Priority Offers', body: 'Identify the destinations, package types, margins, travel windows and traveller segments worth acquiring directly.' },
        { step: '02', title: 'Build Demand Paths', body: 'Match Meta discovery and Google search intent to dedicated destination pages and a clear WhatsApp/enquiry flow.' },
        { step: '03', title: 'Qualify & Learn', body: 'Capture basic trip fit, review sales feedback and identify which packages generate useful conversations rather than only cheap leads.' },
        { step: '04', title: 'Scale the Winning Routes', body: 'Increase media and destination coverage where conversion and sales economics support it, while refreshing creative around season and demand.' },
      ],
      whyUsTag: 'WHO THIS PAGE IS FOR',
      whyUsHeadline: 'Best suited to travel businesses that want to own the enquiry',
      whyUs: [
        { title: 'Direct acquisition, not OTA optimisation', body: 'The service is built around your Meta, Google, website and WhatsApp funnel rather than improving visibility on third-party booking platforms.' },
        { title: 'Strong fit for higher-value packages', body: 'Premium holidays, international packages, customised travel, honeymoon, group departures and DMC services give the sales team enough commercial value to justify proper qualification.' },
        { title: 'Marketing + landing pages + automation', body: 'Campaign, destination page and lead-flow changes can be delivered together when that is the real constraint.' },
        { title: 'Jaipur local page remains separate', body: 'The national page targets India-wide travel-company intent while /travel-agency-marketing-jaipur remains the local Jaipur page, allowing both to rank without forcing mixed geography into one H1.' },
      ],
      faqsTag: 'TRAVEL MARKETING QUESTIONS',
      faqsHeadline: 'What tour operators should clarify before scaling direct enquiries',
      faqs: [
        { q: 'Do you help travel companies rank on TripAdvisor, MakeMyTrip or Goibibo?', a: 'That is not the focus of this service. We are positioning Growth Escalators around direct demand generation through Meta Ads, Google Ads, landing pages, search visibility and WhatsApp/enquiry flows.' },
        { q: 'Can you target both Jaipur travel companies and travel companies across India?', a: 'Yes, through separate search-intent pages. The Jaipur page stays local and location-specific; this page targets national travel-company and tour-operator intent.' },
        { q: 'What kind of travel companies are the strongest fit?', a: 'Businesses with direct-selling packages or services — such as international holidays, honeymoon, premium customised travel, group departures, adventure travel and DMC services — are generally a stronger fit than pure low-margin ticketing.' },
        { q: 'Should a travel company use Meta Ads or Google Ads?', a: 'Meta is useful for creating destination demand and visual discovery; Google captures travellers already searching. Many operators benefit from both, but the mix should follow package economics and search demand.' },
        { q: 'Do you guarantee bookings from travel ads?', a: 'No. Bookings depend on price, availability, season, destination demand, sales response, trust and many variables. We improve the measurable acquisition and qualification system rather than guaranteeing a booking count.' },
      ],
      finalCta: { title: 'Own more of the travel enquiry before a third party does', subhead: 'Share your strongest destinations, package value, monthly ad spend and current enquiry process. We will identify where direct acquisition is leaking.', ctaLabel: 'Book a Free Travel Growth Audit' },
      videoTestimonials: [],
      relatedResources: {
        tag: 'TRAVEL GROWTH CLUSTER',
        headline: 'National and Jaipur travel acquisition pages',
        links: [
          { label: 'Travel Marketing Agency in Jaipur', href: '/travel-agency-marketing-jaipur', blurb: 'Local Jaipur travel-company intent and local-market credibility.' },
          { label: 'Performance Marketing Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Paid acquisition capability from our Jaipur team.' },
          { label: 'SEO & Lead Generation Jaipur', href: '/seo-lead-generation-agency-jaipur', blurb: 'Search-led lead generation and conversion systems.' },
          { label: 'Website Development Jaipur', href: '/website-development-company-jaipur', blurb: 'Landing-page and website development capability.' },
        ],
      },
      leadForm: { recipient: 'Info@growthescalators.com', subjectPrefix: 'New Travel Marketing Agency India Lead', headline: 'Tell us what your travel company sells directly', subhead: 'Share your priority destinations, average package value, monthly marketing spend and how enquiries currently reach your sales team.', tag: 'FREE TRAVEL GROWTH AUDIT' },
    },
  },
}

export function getPriorityNationalMetadata(key: PriorityNationalKey): Metadata {
  const page = PRIORITY_NATIONAL_PAGES[key]
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
    areaServed: Array.isArray(page.areaServed) ? page.areaServed : [page.areaServed],
    provider: { '@type': 'Organization', name: 'Growth Escalators', url: SITE, address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' } },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function PriorityNationalLanding({ pageKey }: { pageKey: PriorityNationalKey }) {
  const page = PRIORITY_NATIONAL_PAGES[pageKey]
  return (
    <>
      <ServiceJsonLd page={page} />
      <IndustryLandingPage content={page.content} />
    </>
  )
}
