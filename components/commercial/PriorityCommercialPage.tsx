import CommercialV2Landing, { type CommercialStrategy } from '@/components/commercial/CommercialV2Landing'
import { PRIORITY_LOCAL_PAGES } from '@/components/seo/PriorityLocalLanding'
import { PRIORITY_VERTICAL_PAGES } from '@/components/seo/PriorityVerticalLanding'
import { PRIORITY_NATIONAL_PAGES } from '@/components/seo/PriorityNationalLanding'
import { WHITE_LABEL_MONEY_PAGES } from '@/components/seo/WhiteLabelMoneyLanding'
import type { LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

type CommercialPageKey =
  | 'doctorsJaipur'
  | 'jewelleryJaipur'
  | 'realEstateJaipur'
  | 'ivfJaipur'
  | 'orthopedicJaipur'
  | 'womensClothing'
  | 'realEstateLaunch'
  | 'travelIndia'
  | 'whiteLabelDigital'
  | 'whiteLabelSeo'

type SchemaDescriptor = {
  path: string
  serviceType: string
  areaServed: string[]
}

const CONTENT: Record<CommercialPageKey, LandingContent> = {
  doctorsJaipur: PRIORITY_LOCAL_PAGES.doctorsJaipur,
  jewelleryJaipur: PRIORITY_LOCAL_PAGES.jewelleryJaipur,
  realEstateJaipur: PRIORITY_LOCAL_PAGES.realEstateJaipur,
  ivfJaipur: PRIORITY_VERTICAL_PAGES.ivfJaipur.content,
  orthopedicJaipur: PRIORITY_VERTICAL_PAGES.orthopedicJaipur.content,
  womensClothing: PRIORITY_VERTICAL_PAGES.womensClothing.content,
  realEstateLaunch: PRIORITY_NATIONAL_PAGES.realEstateLaunch.content,
  travelIndia: PRIORITY_NATIONAL_PAGES.travelIndia.content,
  whiteLabelDigital: WHITE_LABEL_MONEY_PAGES.digitalMarketing.content,
  whiteLabelSeo: WHITE_LABEL_MONEY_PAGES.seo.content,
}

const SCHEMA: Record<CommercialPageKey, SchemaDescriptor> = {
  doctorsJaipur: { path: '/doctors-marketing-agency-jaipur', serviceType: 'Healthcare Marketing for Doctors and Clinics', areaServed: ['Jaipur, Rajasthan, India'] },
  jewelleryJaipur: { path: '/jewellery-marketing-agency-jaipur', serviceType: 'Jewellery Marketing', areaServed: ['Jaipur, Rajasthan, India'] },
  realEstateJaipur: { path: '/real-estate-marketing-agency-jaipur', serviceType: 'Real Estate Marketing', areaServed: ['Jaipur, Rajasthan, India'] },
  ivfJaipur: { path: '/ivf-marketing-agency-jaipur', serviceType: 'IVF and Fertility Clinic Marketing', areaServed: ['Jaipur, Rajasthan, India'] },
  orthopedicJaipur: { path: '/orthopedic-marketing-agency-jaipur', serviceType: 'Orthopaedic Marketing', areaServed: ['Jaipur, Rajasthan, India'] },
  womensClothing: { path: '/d2c/fashion/womens-clothing', serviceType: "Performance Marketing for Women's Clothing Brands", areaServed: ['India'] },
  realEstateLaunch: { path: '/real-estate/project-launch-marketing', serviceType: 'Real Estate Project Launch Marketing', areaServed: ['India'] },
  travelIndia: { path: '/travel-marketing-agency', serviceType: 'Performance Marketing for Travel Companies and Tour Operators', areaServed: ['India'] },
  whiteLabelDigital: { path: '/white-label-digital-marketing-agency', serviceType: 'White Label Digital Marketing Fulfilment', areaServed: ['United States'] },
  whiteLabelSeo: { path: '/white-label-seo-agency', serviceType: 'White Label SEO Fulfilment', areaServed: ['United States'] },
}

const STRATEGY: Record<CommercialPageKey, CommercialStrategy> = {
  doctorsJaipur: {
    eyebrow: 'JAIPUR HEALTHCARE · PATIENT ACQUISITION',
    systemLabel: 'PATIENT ACQUISITION SYSTEM',
    systemTitle: 'Search visibility only matters when it turns into qualified appointments.',
    systemIntro: 'A clinic grows through a connected patient journey. We separate demand, trust, enquiry handling and appointment conversion so the real constraint is visible.',
    stages: [
      { label: '01', title: 'Get Found', detail: 'Win relevant treatment, doctor and local searches.', metric: 'Search · Maps' },
      { label: '02', title: 'Build Trust', detail: 'Give patients enough credentials, proof and useful information to keep considering the clinic.', metric: 'Reviews · Content' },
      { label: '03', title: 'Get Enquiries', detail: 'Turn qualified intent into calls, forms and WhatsApp conversations.', metric: 'CPL · Enquiry rate' },
      { label: '04', title: 'Get Qualified', detail: 'Respond quickly and capture enough context for the front desk to prioritise useful demand.', metric: 'Contact · Quality' },
      { label: '05', title: 'Get Appointments', detail: 'Measure booked appointments and no-shows so marketing can learn from real outcomes.', metric: 'Booked · Show rate' },
    ],
    decisions: [
      { if: 'Local visibility is weak', but: 'The clinic has strong reviews and treatment demand', then: 'Fix Google Maps and treatment-level SEO before buying more broad traffic.' },
      { if: 'Enquiry volume is adequate', but: 'Lead-to-appointment conversion is weak', then: 'Fix qualification, response time and follow-up before increasing media spend.' },
      { if: 'Paid search is producing appointments', but: 'One speciality is underrepresented', then: 'Build specialty-specific pages and campaigns rather than widening generic clinic ads.' },
    ],
    formVariant: 'clinic', businessVertical: 'healthcare', service: 'Patient Acquisition',
    sectionOrder: ['diagnosis', 'system', 'decisions', 'method', 'proof', 'capabilities', 'ai', 'form', 'faq', 'resources'],
  },
  ivfJaipur: {
    eyebrow: 'JAIPUR IVF · FERTILITY · ETHICAL ACQUISITION',
    systemLabel: 'FERTILITY PATIENT JOURNEY',
    systemTitle: 'High-intent fertility demand needs trust before conversion pressure.',
    systemIntro: 'IVF marketing is not a generic lead funnel. Search intent, clinical trust, education, consultation readiness and follow-up each affect whether an enquiry becomes a useful conversation.',
    stages: [
      { label: '01', title: 'Search', detail: 'Capture relevant fertility and IVF intent without sensational claims.', metric: 'Search · Maps' },
      { label: '02', title: 'Educate', detail: 'Answer treatment, process and clinic-selection questions clearly.', metric: 'Content · FAQs' },
      { label: '03', title: 'Build Trust', detail: 'Surface doctors, credentials, clinic context and reputation signals.', metric: 'Trust · Reviews' },
      { label: '04', title: 'Enquire', detail: 'Make consultation enquiry paths clear and low-friction.', metric: 'Enquiry rate' },
      { label: '05', title: 'Consult', detail: 'Track qualified consultation demand where the clinic can capture it.', metric: 'Booked consults' },
    ],
    decisions: [
      { if: 'Search demand is strong', but: 'The landing page is generic', then: 'Build treatment- and decision-specific information before expanding paid search.' },
      { if: 'Enquiries are coming in', but: 'Patients are hesitant to book', then: 'Strengthen education, doctor authority and consultation follow-up before chasing cheaper CPL.' },
      { if: 'One high-value treatment has distinct intent', but: 'All traffic lands on the clinic homepage', then: 'Create a dedicated, medically responsible intent page and measurement path.' },
    ],
    formVariant: 'clinic', businessVertical: 'ivf', service: 'IVF / Fertility Marketing',
    sectionOrder: ['diagnosis', 'system', 'proof', 'decisions', 'capabilities', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  orthopedicJaipur: {
    eyebrow: 'JAIPUR ORTHOPAEDICS · PROCEDURE DEMAND',
    systemLabel: 'ORTHOPAEDIC PATIENT JOURNEY',
    systemTitle: 'Procedure demand, surgeon trust and consultation conversion must work together.',
    systemIntro: 'Orthopaedic acquisition differs from general clinic marketing because patients often research a condition, treatment, surgeon and second opinion before they are ready to book.',
    stages: [
      { label: '01', title: 'Condition Intent', detail: 'Capture relevant symptom, condition and specialist searches responsibly.', metric: 'Search intent' },
      { label: '02', title: 'Procedure Intent', detail: 'Explain treatment pathways and when a consultation may be appropriate.', metric: 'Treatment pages' },
      { label: '03', title: 'Surgeon Trust', detail: 'Make credentials, experience and proof easy to evaluate.', metric: 'Authority' },
      { label: '04', title: 'Consultation', detail: 'Turn high-intent research into appointment conversations.', metric: 'Booked consults' },
      { label: '05', title: 'Feedback', detail: 'Use lead-quality and appointment outcomes to improve targeting.', metric: 'Quality · Show rate' },
    ],
    decisions: [
      { if: 'Generic doctor traffic is expensive', but: 'Procedure-specific demand exists', then: 'Shift landing pages and search campaigns toward qualified procedure intent.' },
      { if: 'Traffic quality is healthy', but: 'Consultation bookings are weak', then: 'Fix trust, page clarity and front-desk conversion before increasing spend.' },
      { if: 'One treatment drives stronger patients', but: 'Reporting combines every orthopaedic enquiry', then: 'Separate treatment-level source and appointment outcomes before scaling.' },
    ],
    formVariant: 'clinic', businessVertical: 'orthopaedics', service: 'Orthopaedic Marketing',
    sectionOrder: ['diagnosis', 'system', 'decisions', 'proof', 'capabilities', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  jewelleryJaipur: {
    eyebrow: 'JAIPUR JEWELLERY · SHOWROOM + D2C',
    systemLabel: 'JEWELLERY DEMAND SYSTEM',
    systemTitle: 'Discovery, trust and conversion change depending on whether the buyer visits or checks out online.',
    systemIntro: 'Showroom footfall and ecommerce sales are different commercial outcomes. The page keeps one jewellery authority hub while separating the two conversion paths inside the system.',
    stages: [
      { label: '01', title: 'Discover', detail: 'Create and capture demand through social, search and Maps.', metric: 'Reach · Intent' },
      { label: '02', title: 'Trust', detail: 'Answer authenticity, material, craftsmanship, policy and reputation questions.', metric: 'Proof · Reviews' },
      { label: '03', title: 'Choose Path', detail: 'Move local buyers toward showroom actions and ecommerce buyers toward collections/PDPs.', metric: 'Visit · PDP' },
      { label: '04', title: 'Convert', detail: 'Improve enquiry, appointment, showroom or checkout conversion.', metric: 'CVR · Footfall' },
      { label: '05', title: 'Learn', detail: 'Separate online revenue and local enquiry quality so each funnel can be improved.', metric: 'ROAS · Lead quality' },
    ],
    decisions: [
      { if: 'Instagram engagement is healthy', but: 'Showroom visits are weak', then: 'Strengthen local intent, Maps, event/occasion offers and measurable visit actions.' },
      { if: 'Paid traffic is qualified', but: 'PDP conversion is weak', then: 'Fix product proof, mobile hierarchy and buying confidence before increasing D2C spend.' },
      { if: 'Bridal demand is seasonal', but: 'Creative is generic year-round', then: 'Sequence occasion-led creative and landing experiences around the buying window.' },
    ],
    formVariant: 'generic', businessVertical: 'jewellery', service: 'Jewellery Growth',
    sectionOrder: ['diagnosis', 'system', 'proof', 'capabilities', 'decisions', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  realEstateJaipur: {
    eyebrow: 'JAIPUR REAL ESTATE · QUALIFIED SITE VISITS',
    systemLabel: 'PROJECT DEMAND SYSTEM',
    systemTitle: 'A cheap lead has no value if it never becomes a qualified site visit.',
    systemIntro: 'Real estate marketing needs to connect project economics, buyer fit, media, qualification, sales response and site-visit outcomes. NRI targeting is intentionally not part of this page or strategy.',
    stages: [
      { label: '01', title: 'Generate Demand', detail: 'Match project, inventory and buyer profile to the right channel mix.', metric: 'Meta · Google' },
      { label: '02', title: 'Qualify', detail: 'Capture location, budget, property type and buying context early.', metric: 'Lead fit' },
      { label: '03', title: 'Contact', detail: 'Improve response speed and sales-team acceptance of marketing leads.', metric: 'Contact rate' },
      { label: '04', title: 'Site Visit', detail: 'Measure the movement from qualified conversation to visit.', metric: 'Visit rate' },
      { label: '05', title: 'Booking Feedback', detail: 'Feed sales outcomes back into campaigns and landing pages.', metric: 'Pipeline · Bookings' },
    ],
    decisions: [
      { if: 'CPL is low', but: 'Sales rejects most enquiries', then: 'Tighten qualification and targeting instead of celebrating cheap lead volume.' },
      { if: 'Qualified calls are healthy', but: 'Site visits are weak', then: 'Fix sales handoff, project proof and visit conversion before increasing media.' },
      { if: 'One inventory segment is moving', but: 'Campaigns mix every unit type together', then: 'Separate buyer intent and project economics before scaling the winning segment.' },
    ],
    formVariant: 'generic', businessVertical: 'real-estate', service: 'Real Estate Marketing',
    sectionOrder: ['diagnosis', 'system', 'decisions', 'proof', 'capabilities', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  realEstateLaunch: {
    eyebrow: 'REAL ESTATE PROJECT LAUNCH · INDIA',
    systemLabel: 'LAUNCH ECONOMICS',
    systemTitle: 'Launch marketing starts before the first lead form goes live.',
    systemIntro: 'The commercial job is to sequence pre-launch demand, project proof, qualification, site visits and sales feedback around the inventory and launch window. This service does not target NRI property marketing.',
    stages: [
      { label: '01', title: 'Pre-Launch', detail: 'Clarify inventory, price band, buyer profile, creative and demand-building sequence.', metric: 'Readiness' },
      { label: '02', title: 'Launch Demand', detail: 'Use Meta and Google around distinct buyer intent rather than one broad campaign.', metric: 'Demand · Search' },
      { label: '03', title: 'Qualify', detail: 'Collect the context sales needs before spending time on the lead.', metric: 'Lead fit' },
      { label: '04', title: 'Drive Visits', detail: 'Optimize the transition from qualified conversation to project/site visit.', metric: 'Visit rate' },
      { label: '05', title: 'Scale Inventory', detail: 'Use outcome feedback to increase spend on the units and audiences that move.', metric: 'Pipeline · Velocity' },
    ],
    decisions: [
      { if: 'Launch awareness is high', but: 'Qualified enquiry rate is weak', then: 'Fix project positioning, landing-page clarity and qualification before adding reach.' },
      { if: 'Lead volume is strong', but: 'Site visits are weak', then: 'Diagnose sales handoff and buyer fit before increasing CPL targets.' },
      { if: 'One inventory type is converting', but: 'Budget is spread evenly', then: 'Reallocate around proven buyer-unit fit while protecting the rest of the launch plan.' },
    ],
    formVariant: 'generic', businessVertical: 'real-estate-launch', service: 'Project Launch Marketing',
    sectionOrder: ['system', 'diagnosis', 'decisions', 'proof', 'capabilities', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  womensClothing: {
    eyebrow: "WOMEN'S CLOTHING · D2C ECONOMICS",
    systemLabel: 'WOMENSWEAR REVENUE SYSTEM',
    systemTitle: 'The ad account is only one part of fashion profitability.',
    systemIntro: 'Creative, acquisition, conversion, AOV/margin, returns and repeat purchase interact. We diagnose the weakest commercial stage before pushing more spend.',
    stages: [
      { label: '01', title: 'Acquire', detail: 'Bring the right shopper into the store at sustainable acquisition cost.', metric: 'CAC · NC-CAC' },
      { label: '02', title: 'Convert', detail: 'Turn qualified traffic into orders through PDP, collection and checkout clarity.', metric: 'CVR · PDP CVR' },
      { label: '03', title: 'Monetize', detail: 'Improve the economics created by each order without hiding margin pressure.', metric: 'AOV · Margin' },
      { label: '04', title: 'Retain', detail: 'Create more repeat value from customers already acquired.', metric: 'Repeat · LTV' },
      { label: '05', title: 'Scale', detail: 'Increase volume only while post-return and contribution economics remain healthy.', metric: 'MER · Profit' },
    ],
    decisions: [
      { if: 'Traffic quality is healthy', but: 'Product-page conversion is weak', then: 'Fix PDP and collection CRO before increasing acquisition spend.' },
      { if: 'Platform ROAS looks healthy', but: 'Returns erase margin', then: 'Optimize merchandising, product expectation and post-return economics before scaling.' },
      { if: 'CAC is acceptable', but: 'Repeat purchase is weak', then: 'Strengthen retention and customer value before pushing harder on new-customer volume.' },
    ],
    formVariant: 'd2c', businessVertical: 'fashion', service: "Women's Clothing Growth",
    sectionOrder: ['diagnosis', 'system', 'method', 'decisions', 'proof', 'capabilities', 'ai', 'form', 'faq', 'resources'],
  },
  travelIndia: {
    eyebrow: 'TRAVEL COMPANIES · DIRECT ENQUIRIES · INDIA',
    systemLabel: 'DIRECT TRAVEL ACQUISITION',
    systemTitle: 'Own the enquiry from destination discovery to a qualified sales conversation.',
    systemIntro: 'This service is deliberately about direct Meta/Google acquisition, destination landing pages and WhatsApp qualification — not TripAdvisor, MakeMyTrip, Goibibo or OTA optimisation.',
    stages: [
      { label: '01', title: 'Create Demand', detail: 'Use visual package and destination creative to create intent.', metric: 'Meta' },
      { label: '02', title: 'Capture Search', detail: 'Meet travellers already searching for relevant destinations and package types.', metric: 'Google' },
      { label: '03', title: 'Enquire', detail: 'Move the visitor into a destination-specific landing or WhatsApp path.', metric: 'Enquiry rate' },
      { label: '04', title: 'Qualify', detail: 'Capture dates, travellers, departure city, budget and trip fit early.', metric: 'Lead quality' },
      { label: '05', title: 'Learn From Sales', detail: 'Use qualified conversation and booking feedback where available.', metric: 'Pipeline · Booking' },
    ],
    decisions: [
      { if: 'Destination ads create enquiries', but: 'Most leads are only price checking', then: 'Improve package context and qualification before chasing lower CPL.' },
      { if: 'Google search demand is healthy', but: 'Every destination lands on the homepage', then: 'Build useful destination/package landing pages before expanding keywords.' },
      { if: 'One package type closes better', but: 'Media treats all holidays equally', then: 'Shift creative, search coverage and sales feedback toward the proven commercial offer.' },
    ],
    formVariant: 'generic', businessVertical: 'travel', service: 'Travel Performance Marketing',
    sectionOrder: ['diagnosis', 'system', 'decisions', 'proof', 'capabilities', 'ai', 'method', 'form', 'faq', 'resources'],
  },
  whiteLabelDigital: {
    eyebrow: 'WHITE-LABEL FULFILMENT · US AGENCIES',
    systemLabel: 'AGENCY DELIVERY MODEL',
    systemTitle: 'Your brand stays in front. The fulfilment system stays accountable behind it.',
    systemIntro: 'White-label work succeeds when scope, client protection, communication boundaries, QA and handoff are explicit. The easiest way to validate the partnership is one contained client requirement.',
    stages: [
      { label: '01', title: 'Client Brief', detail: 'Your agency sends the requirement, desired visibility and delivery context.', metric: 'One requirement' },
      { label: '02', title: 'Scope', detail: 'We agree ownership, access, timeline, deliverables and communication boundaries.', metric: 'SOW · NDA' },
      { label: '03', title: 'Deliver', detail: 'The Jaipur team executes behind the agreed agency workflow.', metric: 'Async + overlap' },
      { label: '04', title: 'QA', detail: 'Work is reviewed against the brief before agency/client handoff.', metric: 'Quality gate' },
      { label: '05', title: 'Handoff', detail: 'Deliverables can be agency-branded and client contact remains controlled by the agreed model.', metric: 'Agency-owned' },
    ],
    decisions: [
      { if: 'Your agency can sell the work', but: 'Internal capacity is delaying delivery', then: 'Test overflow fulfilment on one client before hiring a full internal team.' },
      { if: 'Delivery quality is good', but: 'Client communication boundaries are unclear', then: 'Define visibility, NDA and handoff rules before expanding volume.' },
      { if: 'Recurring project volume is proven', but: 'Every engagement is scoped from zero', then: 'Move toward a repeatable delivery lane only after the working model is validated.' },
    ],
    formVariant: 'agency', businessVertical: 'white-label', service: 'White Label Digital Marketing',
    sectionOrder: ['diagnosis', 'system', 'proof', 'capabilities', 'decisions', 'method', 'ai', 'form', 'faq', 'resources'],
  },
  whiteLabelSeo: {
    eyebrow: 'WHITE-LABEL SEO · US AGENCIES',
    systemLabel: 'SEO FULFILMENT MODEL',
    systemTitle: 'SEO fulfilment has to connect diagnosis, implementation, content and reporting.',
    systemIntro: 'We support agency-owned accounts without fabricating ranking guarantees or public white-label case studies. Start with one account, validate the workflow, then decide whether recurring capacity makes sense.',
    stages: [
      { label: '01', title: 'Brief / Audit', detail: 'Work from your strategy or define the account priorities together.', metric: 'Intent · Baseline' },
      { label: '02', title: 'Prioritize', detail: 'Choose technical, on-page, content, local or internal-link work by likely impact.', metric: 'Opportunity' },
      { label: '03', title: 'Implement', detail: 'Move beyond audit decks into accountable execution where scope allows.', metric: 'Technical · Content' },
      { label: '04', title: 'QA', detail: 'Review accuracy, search intent, page quality and implementation before handoff.', metric: 'Quality gate' },
      { label: '05', title: 'Agency Report', detail: 'Explain what changed, why it mattered and what should happen next.', metric: 'Your branding' },
    ],
    decisions: [
      { if: 'The audit identifies technical issues', but: 'No team has implementation capacity', then: 'Prioritize accountable fixes before producing another strategy deck.' },
      { if: 'Content volume is high', but: 'Pages lack intent and internal architecture', then: 'Reduce output and improve topic structure, editing and linking first.' },
      { if: 'Rankings are moving', but: 'The agency cannot explain commercial progress', then: 'Connect visibility, qualified traffic/leads and next actions in the reporting model.' },
    ],
    formVariant: 'agency', businessVertical: 'white-label-seo', service: 'White Label SEO',
    sectionOrder: ['diagnosis', 'system', 'proof', 'capabilities', 'decisions', 'method', 'ai', 'form', 'faq', 'resources'],
  },
}

function ServiceJsonLd({ descriptor }: { descriptor: SchemaDescriptor }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: descriptor.serviceType,
    serviceType: descriptor.serviceType,
    url: `${SITE}${descriptor.path}`,
    areaServed: descriptor.areaServed,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Growth Escalators',
      url: SITE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office No: 607-608, 6th Floor, Class of Pearl, Income Tax Colony, Durgapura',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        postalCode: '302018',
        addressCountry: 'IN',
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function PriorityCommercialPage({ pageKey }: { pageKey: CommercialPageKey }) {
  return (
    <>
      <ServiceJsonLd descriptor={SCHEMA[pageKey]} />
      <CommercialV2Landing content={CONTENT[pageKey]} strategy={STRATEGY[pageKey]} />
    </>
  )
}
