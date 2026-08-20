import type { LandingContent } from '@/components/landing/IndustryLandingPage'

const proofPattern = /(?:₹|\$|\b\d+(?:\.\d+)?\s?(?:%|×|x|L|Cr|crore|lakh|k|K|days?|weeks?|months?|years?)\b)/i

function safeBody(body: string) {
  const kept = body
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !proofPattern.test(sentence))
    .join(' ')
    .trim()
  return kept || 'We scope this around your current situation, the commercial outcome, and the data required to measure whether it is working.'
}

function safeCycling(label = ''): string[] {
  if (label === 'Website Development') return ['Built for conversion.', 'Built for search.', 'Built for mobile.', 'Built to be owned.']
  if (label === 'Software Development') return ['Built for real users.', 'Built for integrations.', 'Built for production.', 'Built to be owned.']
  if (label === 'B2B Lead Generation') return ['Built around your ICP.', 'Built for long sales cycles.', 'Built for sales handoff.', 'Built for pipeline.']
  if (label.includes('Real Estate')) return ['Built for qualified buyers.', 'Built for site visits.', 'Built for long cycles.', 'Built for bookings.']
  if (label === 'Doctor' || label.includes('Healthcare')) return ['Built for patient intent.', 'Built for local search.', 'Built for booking.', 'Built for trust.']
  if (label === 'Ecommerce Brand (Meta Ads)') return ['Built for creative testing.', 'Built for offer iteration.', 'Built for Shopify.', 'Built for Meta.']
  if (label === 'Ecommerce Brand (Scaling)') return ['Built for the scaling ceiling.', 'Built for margin protection.', 'Built for creative supply.', 'Built for controlled scale.']
  if (label.includes('Ecommerce') || label === 'D2C Brand') return ['Built for store economics.', 'Built for paid acquisition.', 'Built for conversion.', 'Built for retention.']
  return ['Meta Ads that scale.', 'Google Ads that convert.', 'Funnels that compound.', 'Reporting you can trust.']
}

function whyUs(label = ''): { title: string; body: string }[] {
  if (label === 'Website Development') return [
    { title: 'A marketer’s view of the website', body: 'UX, copy, SEO, analytics and conversion are designed as one commercial system instead of separate deliverables.' },
    { title: 'Migration risk is handled deliberately', body: 'Existing URLs, metadata, redirects, schema and tracking are reviewed before a redesign replaces what already works.' },
    { title: 'Preview-first delivery', body: 'You review the work as it is built, so decisions happen before launch rather than after.' },
    { title: 'Ownership is clear', body: 'Repository, hosting access and agreed handover materials stay with your business.' },
  ]
  if (label === 'Software Development') return [
    { title: 'Production mindset', body: 'Users, data, integrations, QA and deployment are part of the product conversation from the start.' },
    { title: 'Visible delivery', body: 'Working previews and demos keep progress inspectable throughout the engagement.' },
    { title: 'Architecture before promises', body: 'We scope the product and its dependencies before treating a deadline or quote as credible.' },
    { title: 'Code ownership is explicit', body: 'Repository access, environments and handover expectations are agreed as part of the engagement.' },
  ]
  if (label === 'B2B Lead Generation') return [
    { title: 'Pipeline, not contact volume', body: 'The operating metric is qualified pipeline and sales progression, not the number of names in a spreadsheet.' },
    { title: 'Sales feedback changes marketing', body: 'Opportunity quality and rep feedback are used to improve targeting, messaging and handoff.' },
    { title: 'Long-cycle thinking', body: 'Content, paid demand, outbound and nurture are designed around how a considered B2B purchase actually happens.' },
    { title: 'Infrastructure stays with you', body: 'CRM data, accounts, landing pages and the working demand assets remain in your business.' },
  ]
  if (label.includes('Real Estate')) return [
    { title: 'Bookings sit above lead volume', body: 'Lead quality, site visits and bookings are separated so cheap CPL cannot hide poor commercial outcomes.' },
    { title: 'Marketing and sales share the journey', body: 'CRM nurture and sales feedback are treated as part of project demand because the booking happens after the lead.' },
    { title: 'Project claims are reviewed', body: 'Creative and landing-page information should be accurate and compliant before demand is scaled.' },
    { title: 'Project data stays with the developer', body: 'Accounts, CRM data, audience learnings and campaign assets remain owned by your business.' },
  ]
  if (label === 'Doctor' || label.includes('Healthcare')) return [
    { title: 'Patient journey over lead count', body: 'Enquiry, booking, show-up and patient value are more useful than a cheap form fill.' },
    { title: 'Front-desk leakage is visible', body: 'Response time, booking friction and no-shows are part of the growth diagnosis.' },
    { title: 'Healthcare constraints shape execution', body: 'Campaign language, targeting and patient-facing pages are built with healthcare advertising restrictions in mind.' },
    { title: 'Local search and paid demand connect', body: 'Google Business Profile, treatment pages, paid media and WhatsApp should reinforce one patient journey.' },
  ]
  if (label.includes('Ecommerce') || label === 'D2C Brand') return [
    { title: 'Contribution before vanity ROAS', body: 'Store margin, returns, discounts, shipping and repeat purchase sit beside platform metrics when we evaluate scale.' },
    { title: 'Creative is an operating system', body: 'Creative supply, offers and landing-page tests are planned as a repeatable cadence rather than emergency replacements.' },
    { title: 'One commercial view', body: 'Media, CRO and retention are evaluated against actual store economics instead of isolated channel dashboards.' },
    { title: 'The infrastructure is yours', body: 'Ad accounts, tracking, creative library and working ecommerce assets stay in your business.' },
  ]
  return [
    { title: 'Commercial accountability', body: 'Acquisition is judged against downstream conversion and business outcomes, not activity alone.' },
    { title: 'Tracking before scale', body: 'We want the data trustworthy enough to support budget decisions before increasing spend.' },
    { title: 'Visible testing', body: 'You should understand what is being tested, what won, what lost and what happens next.' },
    { title: 'Accounts stay in your business', body: 'The advertising and growth infrastructure should remain owned by you.' },
  ]
}

function faqs(label = ''): { q: string; a: string }[] {
  if (label === 'Website Development') return [
    { q: 'How much will the website cost?', a: 'Cost depends on sitemap, design depth, ecommerce, content migration, integrations and custom functionality. We scope those items first and then give you a written commercial proposal rather than a generic package price.' },
    { q: 'How long will the build take?', a: 'Timeline depends on scope and approval speed. The proposal includes milestones for discovery, design, development, QA and launch so you know what must happen before a date is treated as real.' },
    { q: 'Will a redesign hurt our SEO?', a: 'It can if URLs, metadata, redirects, schema, internal links or analytics are changed carelessly. Our redesign process treats those as migration requirements and verifies them before launch.' },
    { q: 'Who owns the site and code?', a: 'The engagement should make repository, hosting, credentials and handover ownership explicit. Our goal is that the finished website remains an asset your business controls.' },
    { q: 'How do revisions and scope changes work?', a: 'We agree the sitemap, key screens, integrations and acceptance points first. Anything outside that scope is surfaced as a decision with its impact on timeline and cost rather than quietly added.' },
    { q: 'What happens after launch?', a: 'The launch scope defines analytics, Search Console, handover and any agreed support period. If ongoing CRO, SEO or development is useful, that is treated as a separate ongoing growth decision.' },
  ]
  if (label === 'Software Development') return [
    { q: 'Can you give us a price before the scoping call?', a: 'A credible software estimate requires users, workflows, integrations, environments and the must-have feature set. We can discuss a likely engagement model early, but the written estimate comes after enough scope exists to defend it.' },
    { q: 'How do you stop software projects from drifting?', a: 'Milestones, working previews and explicit scope decisions keep delivery inspectable. New requirements are evaluated for timeline and cost impact before they are absorbed into the build.' },
    { q: 'Who owns the code and IP?', a: 'Repository access, code ownership, environments and handover expectations are made explicit in the engagement so there is no ambiguity at the end.' },
    { q: 'How do you handle QA and production risk?', a: 'Testing, review, error handling and deployment readiness are built into the delivery plan. The exact QA depth depends on the product risk and the scope we agree.' },
    { q: 'Can you work with our existing team?', a: 'Yes. Depending on the product, the right model may be a fixed build, a dedicated delivery team or engineers working alongside your existing team.' },
    { q: 'What happens after launch?', a: 'We agree whether the project ends with handover or continues into maintenance and product development. The important part is deciding that ownership model before launch, not after something breaks.' },
  ]
  if (label === 'B2B Lead Generation') return [
    { q: 'What counts as a qualified B2B lead?', a: 'We define that with your sales team before launch—typically company fit, buyer role, geography and an intent threshold. Marketing and sales should use the same definition.' },
    { q: 'Do you handle outbound as well as paid demand?', a: 'The channel mix depends on your ICP and deal motion. Where outbound is part of the plan, the proposal makes sourcing, messaging, sending, reply handling and sales handoff responsibilities explicit.' },
    { q: 'How do leads get handed to sales?', a: 'Qualified leads should reach the CRM with useful context such as company, role, source and intent. We align routing and follow-up expectations with the sales team before campaigns scale.' },
    { q: 'What if our sales cycle is long?', a: 'That is normal for B2B. Content, paid demand, outbound and nurture are planned around the real consideration cycle rather than assuming every buyer books immediately.' },
    { q: 'How is pricing structured?', a: 'Pricing depends on channel scope, content/creative needs, outbound requirements and the amount of pipeline infrastructure required. We quote after the pipeline audit so the commercial model matches the work.' },
    { q: 'What do we own if we stop?', a: 'The working accounts, CRM data, landing pages and agreed campaign assets should remain with your business.' },
  ]
  if (label.includes('Real Estate')) return [
    { q: 'How do you improve lead quality instead of just increasing lead volume?', a: 'We work backwards from site visits and bookings, then use project fit, declared buyer information, first-party behaviour and sales feedback to improve qualification. The target is not the lowest possible CPL.' },
    { q: 'Where does your responsibility end and our sales team begin?', a: 'We define the handoff clearly. Marketing owns demand, qualification and the CRM journey we agree; the sales team owns the selling conversation. Booking and site-visit feedback must flow back into marketing.' },
    { q: 'How do you handle project advertising compliance?', a: 'Creative and landing-page claims should use the correct project information and required disclosures. We review the campaign material against the project inputs before launch.' },
    { q: 'What about buyers who take months to decide?', a: 'Real estate requires nurture. Retargeting, WhatsApp/email follow-up and CRM stages should reflect the long consideration cycle instead of treating every lead as ready to book immediately.' },
    { q: 'How is pricing structured?', a: 'It depends on project stage, inventory, creative requirements, landing pages, CRM/nurture scope and media budget. We scope those variables after the project demand audit.' },
    { q: 'Who owns the data and accounts?', a: 'Ad accounts, CRM data, campaign learnings and agreed assets should remain owned by the developer.' },
  ]
  if (label === 'Doctor' || label.includes('Healthcare')) return [
    { q: 'How do you make sure we get the right patients, not just more enquiries?', a: 'We measure beyond the form fill. Booking, show-up and treatment-fit feedback should flow back into campaign and landing-page decisions.' },
    { q: 'Can marketing fix our no-show problem?', a: 'Marketing alone cannot, but the patient journey can. Confirmation, reminders, response time and front-desk follow-up are part of the audit because they determine how many enquiries become showed-up appointments.' },
    { q: 'How do you handle healthcare advertising restrictions?', a: 'Creative, targeting and patient-facing claims are reviewed with platform and healthcare advertising constraints in mind. We do not recommend a strategy that depends on misleading claims or prohibited targeting.' },
    { q: 'How soon should we expect results?', a: 'Paid demand can start generating signals quickly, while local search and reputation work compound over time. We set expectations after seeing your specialty, geography, current visibility and booking capacity rather than promising a universal timeline.' },
    { q: 'How much should a clinic invest?', a: 'It depends on specialty economics, geography, current demand, website/booking needs and available appointment capacity. We recommend the starting scope after the patient journey audit.' },
    { q: 'What does the clinic need to do for this to work?', a: 'Fast enquiry response, accurate appointment feedback, patient-safe content approvals and enough operational capacity to handle new demand. We make those responsibilities explicit before launch.' },
  ]
  if (label.includes('Ecommerce') || label === 'D2C Brand') return [
    { q: 'How do you decide whether the problem is ads, creative, offer or the website?', a: 'We look at the whole store journey before prescribing a channel fix: acquisition economics, creative fatigue, offer response, product-page conversion, tracking and repeat-purchase behaviour.' },
    { q: 'Who is responsible for producing creative?', a: 'That is agreed before launch. Depending on the engagement, inputs can come from your product footage, your team, creators or our creative workflow. The key is defining a repeatable supply plan rather than waiting for ads to fatigue.' },
    { q: 'Do you report platform ROAS or actual store economics?', a: 'Platform metrics are useful signals, but scaling decisions should also reconcile to actual store revenue, margin, returns, discounts, shipping and repeat purchase.' },
    { q: 'How quickly can we scale?', a: 'Only as quickly as the economics, creative supply, inventory and fulfilment can support. The audit identifies the current ceiling before we recommend larger budget moves.' },
    { q: 'How is pricing structured?', a: 'It depends on paid-media scope, creative workload, CRO/tracking work and current spend level. We quote after the diagnostic so the commercial model matches the actual system required.' },
    { q: 'Who owns the ad accounts and tracking?', a: 'The working ad accounts, tracking setup and agreed growth assets should remain in your business.' },
  ]
  return [
    { q: 'How much does performance marketing cost?', a: 'Pricing depends on media scope, creative requirements, tracking/funnel work and current spend level. We quote after the diagnostic so the engagement matches the actual constraint.' },
    { q: 'Should we start with Meta Ads or Google Ads?', a: 'It depends on how your customers discover and buy. The diagnostic looks at demand capture, demand creation, conversion path and economics before recommending the first channel priority.' },
    { q: 'How fast should we expect results?', a: 'Early campaign signals can appear quickly, but stable acquisition economics require enough data and testing. We set a realistic expectation after seeing your current account and funnel rather than promising a universal timeline.' },
    { q: 'Who actually works on our account?', a: 'The proposal should make ownership, responsibilities and communication cadence explicit so you know who is accountable for media, creative, tracking and decisions.' },
    { q: 'How will we know what is working?', a: 'We want reporting to connect spend to the downstream metric that matters—sales, qualified pipeline or another agreed business outcome—and make tests and next actions visible.' },
    { q: 'Who owns the accounts and data?', a: 'The working advertising accounts, tracking and agreed campaign assets should remain in your business.' },
  ]
}

export function safeCommercialContent(content: LandingContent): LandingContent {
  const label = content.industryLabel ?? ''
  return {
    ...content,
    hero: { ...content.hero, cyclingWords: safeCycling(label) },
    painPoints: content.painPoints.map((item) => ({ ...item, body: safeBody(item.body) })),
    services: content.services.map((item) => ({ ...item, body: safeBody(item.body) })),
    process: content.process.map((item) => ({ ...item, body: safeBody(item.body) })),
    whyUs: whyUs(label),
    faqs: faqs(label),
    aiAdvantage: undefined,
    leadMagnet: undefined,
    leadForm: { ...content.leadForm, recipient: 'jatin@growthescalators.com' },
    builds: content.builds ? {
      ...content.builds,
      items: content.builds.items.map((item) => ({ ...item, what: safeBody(item.what) })),
    } : undefined,
  }
}
