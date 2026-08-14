import {
  FileText, ShieldCheck, UserCheck, Clock, Users,
} from 'lucide-react'
import type { InternationalLandingContent } from './types'

/**
 * Australia market content for /australia-offshore-tech-resources. New copy
 * written directly against the Stage A brief (not lifted from an existing
 * approved page, unlike `uk.ts`) — positioned around specialist offshore
 * capacity + practical Australian working-hour overlap, NOT a market-wide
 * developer-shortage narrative. See the brief for the full proof-rule and
 * visual-system constraints this file was written under.
 *
 * `eventPrefix` is deliberately `'au'` (not `'australia'`) so the six
 * standard events fire as `au_lp_primary_cta_click`, `au_lp_form_start`,
 * etc. — the exact event names the brief specifies.
 *
 * `workingHours` IS wired in for Australia (unlike UK) — the brief requires
 * a dedicated section, using the `'multi-zone-note'` visual variant so the
 * page can name Australia's three practical time-zone bands (Eastern /
 * Central / Western) instead of implying one universal offset, which is
 * exactly what this component variant was built for (see the doc comment on
 * WorkingHoursAlignment.tsx — same reasoning as the US's ET/CT/MT/PT case).
 */
export const AUSTRALIA_CONTENT: InternationalLandingContent = {
  market: 'Australia',
  eventPrefix: 'au',
  leadSourceLabel: 'Australia Offshore Tech Requirement',

  meta: {
    title: 'Offshore Tech Specialists for Australian Teams | Growth Escalators',
    description:
      'Access screened India-based Azure, Microsoft, cloud, DevOps, cybersecurity, data and engineering specialists with Australian working-hour overlap.',
    canonicalPath: '/australia-offshore-tech-resources',
  },

  nav: [
    { label: 'Skills', href: '#skills' },
    { label: 'Working Hours', href: '#working-hours' },
    { label: 'Screening', href: '#screening' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Engagement Models', href: '#engagement-models' },
    { label: 'FAQs', href: '#faqs' },
  ],
  headerCtaLabel: 'Share Your Requirement',

  hero: {
    badge: 'Specialist offshore capacity for Australian technology teams',
    heading: { lead: 'Add Screened Tech Specialists', accent: 'Without Extending Your Local Hiring Cycle.' },
    subhead:
      'Growth Escalators helps Australian consultancies, MSPs and technology teams access experienced '
      + 'India-based specialists across cloud, Microsoft platforms, cybersecurity, data, engineering and '
      + 'quality assurance.',
    proofPoints: [
      'Relevant profiles targeted within 48 hours',
      'Technical and communication screening',
      'Australian working-hour overlap confirmed',
      'Individual specialists or dedicated technology pods',
    ],
    primaryCta: { label: 'Share Your Requirement' },
    secondaryCta: { label: 'Request Sample Profiles' },
    microcopy: 'Send the role or upload the JD. We will confirm feasibility and screening requirements before sharing profiles.',
    pipeline: {
      cardTitle: 'Requirement to shortlist',
      cardBadge: 'Process overview',
      steps: [
        { icon: FileText, label: 'Requirement received' },
        { icon: ShieldCheck, label: 'Skills validated' },
        { icon: UserCheck, label: 'Candidate screened' },
        { icon: Clock, label: 'Relevant shortlist within 48 hours' },
        { icon: Users, label: 'Client interview' },
      ],
    },
  },

  trustStrip: {
    points: [
      { title: 'Relevant profiles within 48 hours', body: 'From confirmed requirement to shortlist.' },
      { title: 'Technical and communication screening', body: 'Every candidate, every requirement.' },
      { title: 'Australian working-hour overlap confirmed', body: 'Checked before a profile is shared.' },
      { title: 'Dedicated recruitment contact', body: 'One point of contact for the engagement.' },
    ],
  },

  pain: {
    tag: 'SOUND FAMILIAR?',
    headline: 'Add specialist capacity without forcing every requirement through a long local hiring cycle.',
    subhead:
      'When a critical role sits open, project delivery slows down long before local recruitment can catch up. '
      + 'Delivery leads absorb the gap while project budgets and timelines come under pressure.',
    cards: [
      { title: 'High local hiring cost', body: 'Specialist and senior technical capability can put significant pressure on project budgets.' },
      { title: 'Delivery capacity gaps', body: 'Project demand can increase faster than permanent internal headcount.' },
      { title: 'Specialist requirements', body: 'Cloud, Microsoft, security, data and platform roles need more than generic software-development experience.' },
      { title: 'Screening workload', body: 'Loosely matched profiles consume time from engineering and delivery leaders.' },
    ],
    footerNote:
      'Growth Escalators helps Australian technology teams add screened specialist capacity from India while '
      + 'maintaining clear ownership, communication and delivery accountability.',
  },

  skills: {
    tag: 'WHAT WE COVER',
    headline: 'Specialist capacity across the technologies your clients already use',
    categories: [
      {
        title: 'Cloud, DevOps and Infrastructure',
        items: ['Microsoft Azure', 'AWS', 'DevOps and platform engineering', 'Cybersecurity', 'Google Cloud', 'SRE and platform engineering', 'Linux and cloud infrastructure'],
      },
      {
        title: 'Enterprise Applications',
        items: ['Microsoft Dynamics 365', 'Power Platform', 'SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Zoho'],
      },
      {
        title: 'Data and AI',
        items: ['Power BI', 'Data engineering', 'Data science', 'AI and GenAI', 'Machine learning', 'Database engineering'],
      },
      {
        title: 'Software Engineering',
        items: ['Java and Spring Boot', '.NET', 'Python', 'React and Angular', 'Node.js', 'Full-stack engineering'],
      },
      {
        title: 'Quality Engineering',
        items: ['Automation QA', 'Manual QA', 'Selenium', 'Tosca', 'API testing', 'Performance testing'],
      },
      {
        title: 'Support and Managed Operations',
        items: ['Managed cloud and application support', 'Application support', 'Cloud support', 'Technical support', '24×5 and 24×7 teams', 'L1, L2 and L3 support'],
      },
    ],
    footerNote: "Don't see the exact skill you need? Share the JD. Our team also supports specialist and hard-to-fill requirements.",
  },

  workingHours: {
    tag: 'TIME-ZONE ALIGNMENT',
    headline: 'Working-hour overlap that supports real collaboration',
    subhead:
      'India provides practical overlap with major Australian business centres. Exact working hours depend on '
      + 'the state, daylight-saving period, role and candidate availability, and are confirmed before submission.',
    visualVariant: 'multi-zone-note',
    zones: [
      {
        zone: 'Eastern Australia (NSW, VIC, QLD, TAS, ACT)',
        note: 'Practical overlap through the Australian morning into early afternoon; shifts by around an hour during daylight saving (most states, Oct–Apr).',
      },
      {
        zone: 'Central Australia (SA, NT)',
        note: 'Similar overlap window, adjusted by roughly half an hour against Eastern Australia; SA daylight saving shifts this further for part of the year.',
      },
      {
        zone: 'Western Australia (WA)',
        note: 'Overlap sits later in the Australian day; WA does not observe daylight saving, so this window stays consistent year-round.',
      },
    ],
    zoneCaveat:
      'Exact overlap depends on the state, time of year and the candidate’s schedule. It is confirmed with the '
      + 'candidate before a profile is submitted, not assumed in advance.',
  },

  process: {
    tag: 'HOW IT WORKS',
    headline: 'From requirement to relevant shortlist in four steps',
    steps: [
      { step: '01', title: 'Share the requirement', body: 'Send the JD or tell us the skills, experience, engagement duration, working hours and preferred start date.' },
      { step: '02', title: 'We validate and screen', body: 'We assess technical relevance, project experience, communication, availability and confirmed working-hour overlap.' },
      { step: '03', title: 'You interview the shortlist', body: 'Meet only the candidates who match the agreed mandatory criteria.' },
      { step: '04', title: 'Confirm the engagement', body: 'Once selected, the engagement begins under mutually agreed commercial, working-hour, confidentiality and onboarding terms.' },
    ],
  },

  screening: {
    tag: 'SCREENING',
    headline: 'More than keyword-matched CVs',
    subhead: 'Every requirement is converted into a mandatory-skill scorecard before profiles are submitted.',
    gates: [
      'Requirement converted into a mandatory-skill scorecard',
      'Resume and project validation',
      'Relevant years of experience by required skill',
      'Technical screening',
      'Communication assessment',
      'Availability and notice-period confirmation',
      'Identity and employment-document verification',
      'Australian working-hour confirmation',
      'Recruiter remarks',
      'Recruiter recommendation',
    ],
    summary: [
      { label: 'Core skill', value: 'Example only' },
      { label: 'Relevant experience', value: 'Example only' },
      { label: 'Recent project', value: 'Example only' },
      { label: 'Responsibilities', value: 'Example only' },
      { label: 'Communication', value: 'Assessed' },
      { label: 'Availability', value: 'Confirmed before submission' },
      { label: 'Australian working-hour overlap', value: 'Confirmed before submission' },
      { label: 'Recruiter recommendation', value: 'Included' },
    ],
  },

  engagementModels: {
    tag: 'ENGAGEMENT MODELS',
    headline: 'Add exactly the capacity your delivery plan requires',
    ctaLabel: 'Discuss Your Requirement',
    models: [
      { title: 'Individual Offshore Specialist', body: 'For teams that need one or two experienced professionals for a defined technology or project requirement.' },
      { title: 'Dedicated Technology Pod', body: 'A coordinated team that can include backend, frontend, QA, DevOps and technical leadership based on the delivery scope.' },
      { title: 'Partner Fulfilment', body: 'For Australian IT consultancies, MSPs and implementation partners that need additional sourcing or offshore delivery capacity behind their client relationships.' },
    ],
  },

  sampleProfiles: {
    tag: 'SEE THE SCREENING QUALITY',
    headline: 'See the screening quality before discussing an engagement',
    subhead: 'Tell us the technology you need and we will share relevant anonymised sample profiles or screening formats where available.',
    categories: ['Microsoft Azure', 'Dynamics 365 and Power Platform', 'AWS and DevOps', 'Cybersecurity', 'Data Engineering and Power BI', 'Java and .NET'],
    ctaLabel: 'Request Sample Profiles',
  },

  proof: {
    tag: 'WHAT YOU RECEIVE',
    headline: 'Process proof, not promises',
    subhead:
      "We're not going to show you a client logo wall or a made-up placement count on a new "
      + "offer. Here's exactly what lands in your inbox when a shortlist is ready.",
    items: [
      'A short scorecard for every profile — mandatory skills, relevant experience and recent project context',
      'Confirmation that communication, availability and Australian working-hour overlap have already been checked',
      'A named recruitment contact for the engagement, not a shared inbox',
      'Documented terms — confidentiality, notice and applicable replacement terms — before onboarding starts',
    ],
  },

  risk: {
    tag: 'CLEAR TERMS',
    headline: 'Clear terms before the resource starts',
    subhead:
      'Availability, working hours, confidentiality, notice and applicable replacement terms are '
      + 'documented before onboarding so both teams understand how the engagement will operate.',
  },

  comparison: {
    tag: 'HOW WE COMPARE',
    headline: 'A more accountable alternative to unstructured freelance hiring',
    caption:
      'Comparison of individual freelancers, traditional recruitment, large outsourcing companies and Growth '
      + 'Escalators across mandatory-skill screening, technical assessment, communication assessment, availability '
      + 'confirmation, working-hour alignment, dedicated contact, individual-resource support, technology-pod '
      + 'capability and replacement terms by agreement',
    columns: [
      { key: 'freelancer', label: 'Independent freelancer' },
      { key: 'recruitment', label: 'Traditional recruitment' },
      { key: 'outsourcing', label: 'Large outsourcing company' },
      { key: 'ge', label: 'Growth Escalators', highlight: true },
    ],
    highlightColumnKey: 'ge',
    rows: [
      { criterion: 'Mandatory-skill screening', values: { freelancer: 'Varies by individual', recruitment: 'Typically limited', outsourcing: 'Varies by provider', ge: 'Structured, for every requirement' } },
      { criterion: 'Technical assessment', values: { freelancer: 'Varies by individual', recruitment: 'Typically limited', outsourcing: 'Varies by provider', ge: 'Included in the agreed process' } },
      { criterion: 'Communication assessment', values: { freelancer: 'Not typically assessed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Included in the agreed process' } },
      { criterion: 'Availability confirmation', values: { freelancer: 'Self-reported', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' } },
      { criterion: 'Working-hour alignment', values: { freelancer: 'Not typically confirmed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' } },
      { criterion: 'Dedicated contact', values: { freelancer: 'None', recruitment: 'Varies by agency', outsourcing: 'Often shared, account-level', ge: 'Dedicated recruitment contact' } },
      { criterion: 'Individual-resource support', values: { freelancer: 'Individual only, limited backup', recruitment: 'Typically individuals', outsourcing: 'Available by agreement', ge: 'Individual specialists, matched to requirement' } },
      { criterion: 'Technology-pod capability', values: { freelancer: 'Not applicable', recruitment: 'Limited, ad hoc', outsourcing: 'Pods, minimums often apply', ge: 'Dedicated pods, matched to delivery scope' } },
      { criterion: 'Replacement terms by agreement', values: { freelancer: 'Not typically offered', recruitment: 'Varies by agency', outsourcing: 'Available by agreement', ge: 'Documented before onboarding' } },
    ],
  },

  faqs: {
    tag: 'QUESTIONS, ANSWERED',
    headline: 'Frequently asked',
    faqs: [
      { q: 'Where are the resources based?', a: 'Our offshore technology resources are based in India and work remotely, with an agreed overlap confirmed against Australian working hours before a profile is submitted.' },
      { q: 'Can they work Australian business hours?', a: 'Working-hour expectations are confirmed with each candidate before submission. The available overlap depends on the state, role and candidate availability.' },
      { q: 'How do daylight-saving changes affect overlap?', a: 'Daylight saving in most Australian states shifts the practical overlap by roughly an hour for part of the year. We reconfirm working-hour alignment whenever the relevant daylight-saving period changes.' },
      { q: 'How quickly can profiles be shared?', a: 'We aim to share a relevant initial shortlist within 48 hours after the mandatory requirements are confirmed. Highly specialised requirements may require additional time, which we will communicate upfront.' },
      { q: 'Which technologies do you specialise in?', a: 'Our current focus includes Microsoft Azure, Dynamics 365, Power Platform, Power BI, AWS, DevOps, cybersecurity, data engineering, Java, .NET, QA automation, and managed cloud and application support. Share your requirement if you don’t see the exact skill listed.' },
      { q: 'How are candidates screened?', a: 'We review mandatory technical skills, project experience, relevant years of experience, communication, availability and working-hour alignment. Client-specific screening questions can also be included.' },
      { q: 'Can we begin with one specialist?', a: 'Yes. Clients can begin with an individual specialist and expand the engagement as requirements grow.' },
      { q: 'Can you supply a complete technology pod?', a: 'Yes. A dedicated technology pod can be built to your delivery scope, combining the roles and seniority levels the project requires.' },
      { q: 'Who employs and invoices for the resource?', a: 'The contractual structure is agreed before onboarding. Growth Escalators will confirm the applicable invoicing, notice, documentation and engagement terms for the selected resource.' },
      { q: 'Do you provide on-site resources in Australia?', a: 'This landing-page offer is focused on offshore delivery from India. Any local or on-site requirement must be discussed and confirmed separately.' },
      { q: 'How is confidential information protected?', a: 'Confidentiality, intellectual-property and access requirements are documented before onboarding. Additional client-specific security requirements can be incorporated into the engagement process.' },
      { q: 'What happens if the resource leaves?', a: 'Applicable replacement and transition terms are agreed in writing before the engagement begins.' },
    ],
  },

  leadForm: {
    tag: 'SHARE YOUR REQUIREMENT',
    headline: 'Tell us which specialist capability your team needs',
    subhead: 'Share the role, timeline and working-hour requirements. We will review the requirement, confirm feasibility and begin preparing the relevant shortlist.',
    skillSuggestions: [
      'Microsoft Azure', 'Dynamics 365', 'Power Platform', 'Power BI', 'AWS', 'DevOps',
      'Cybersecurity', 'Data Engineering', 'Java / Spring Boot', '.NET', 'QA Automation', 'Application Support',
    ],
    resourceCountOptions: ['1', '2', '3–5', '6–10', '10+'],
    workingHoursFieldLabel: 'Australian working-hour expectations',
    workingHoursFieldPlaceholder: 'e.g. 4hr overlap, 9am–1pm AEST',
    marketFields: [
      {
        name: 'auStateOrTimeZone',
        label: 'Australian state or time zone',
        type: 'select',
        required: true,
        options: [
          'New South Wales (AEST/AEDT)',
          'Victoria (AEST/AEDT)',
          'Queensland (AEST)',
          'South Australia (ACST/ACDT)',
          'Western Australia (AWST)',
          'Tasmania (AEST/AEDT)',
          'Australian Capital Territory (AEST/AEDT)',
          'Northern Territory (ACST)',
        ],
      },
    ],
    successHeadline: 'Requirement received.',
    successBody: 'Our team will review the role and contact you within one business day.',
    calLink: 'https://cal.com/growth-escalators/discovery-call',
  },

  disclosure: {
    text: 'This page concerns offshore technology resources delivered remotely from India for Australian technology teams. It is not an Australian on-site staffing offer.',
    linkedinUrl: 'https://www.linkedin.com/company/growth-escalators',
  },
}
