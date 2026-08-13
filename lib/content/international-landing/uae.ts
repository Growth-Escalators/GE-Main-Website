import {
  FileText, ShieldCheck, UserCheck, Clock, Users,
} from 'lucide-react'
import type { InternationalLandingContent } from './types'

/**
 * UAE market content for /uae-offshore-tech-resources. Follows the exact
 * shape established by ./uk.ts (see that file's doc comment / the Stage A
 * report for why this contract exists). UAE-specific judgment calls are
 * noted inline where a section required interpreting the brief rather than
 * copying it verbatim — see the build report for the full list.
 *
 * `workingHours` IS wired in for UAE (unlike UK) — the near-full-day
 * India↔UAE overlap (1h30m offset) is a genuine, market-differentiating
 * proof point worth a dedicated section, using the 'overlap-bar' visual
 * variant per the doc comment on WorkingHoursSectionContent in ./types.ts.
 */
export const UAE_CONTENT: InternationalLandingContent = {
  market: 'UAE',
  eventPrefix: 'uae',
  leadSourceLabel: 'UAE Offshore Tech Requirement',

  meta: {
    title: 'Offshore Tech Specialists for UAE Teams | Growth Escalators',
    description:
      'Access screened India-based SAP, Oracle, Microsoft, cloud, DevOps, data, cybersecurity and engineering specialists for UAE projects.',
    canonicalPath: '/uae-offshore-tech-resources',
  },

  nav: [
    { label: 'Skills', href: '#skills' },
    { label: 'Time Zones', href: '#working-hours' },
    { label: 'Screening', href: '#screening' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Engagement Models', href: '#engagement-models' },
    { label: 'FAQs', href: '#faqs' },
  ],
  headerCtaLabel: 'Share Your Requirement',

  hero: {
    badge: 'Offshore technology capacity for UAE delivery teams',
    heading: { lead: 'Scale Your UAE Technology Team', accent: 'with Screened Offshore Specialists.' },
    subhead:
      'Add experienced India-based technology professionals without waiting through lengthy local '
      + 'recruitment cycles. Access screened specialists across ERP, cloud, software engineering, '
      + 'data, cybersecurity, quality engineering and managed support.',
    proofPoints: [
      'UAE working-hour alignment confirmed before submission',
      'Technical and communication screening',
      'Individual specialists or coordinated technology pods',
      'Relevant profiles targeted within 48 hours',
    ],
    primaryCta: { label: 'Share Your Requirement' },
    secondaryCta: { label: 'Request Sample Profiles' },
    microcopy: 'Send the role or upload the JD. We will review the requirement and confirm feasibility before sharing profiles.',
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
      { title: 'UAE working-hour alignment confirmed', body: 'Checked with every candidate before submission.' },
      { title: 'Technical and communication screening', body: 'Every candidate, every requirement.' },
      { title: 'Dedicated recruitment contact', body: 'One point of contact for the engagement.' },
    ],
  },

  pain: {
    tag: 'SOUND FAMILIAR?',
    headline: 'Your project timeline should not depend on one difficult local hire.',
    subhead:
      'When a critical specialist role stays open, delivery slows down long before recruitment catches up. '
      + 'Internal teams absorb the extra workload, milestones move and project margins come under pressure.',
    cards: [
      { title: 'Long recruitment cycles', body: 'Specialist positions can remain open while client deadlines and implementation milestones continue moving.' },
      { title: 'Limited specialist availability', body: 'ERP, cloud, cybersecurity and data requirements often need experience that cannot be sourced through generic hiring.' },
      { title: 'Margin pressure', body: 'Urgent local contractors and prolonged vacancies can quickly reduce project profitability.' },
      { title: 'Irrelevant CV volume', body: 'Large numbers of loosely matched profiles create more work for delivery leaders instead of solving the requirement.' },
    ],
    footerNote:
      'Growth Escalators helps UAE technology and delivery teams add screened offshore specialist capacity '
      + 'from India while maintaining clear ownership, communication and delivery accountability.',
  },

  skills: {
    tag: 'WHAT WE COVER',
    headline: 'Specialist capacity across the technologies UAE delivery teams already run',
    // Order reflects the UAE priority brief (SAP/Oracle → Dynamics 365/Power
    // Platform → Salesforce/ServiceNow → Cloud/DevOps → Cybersecurity →
    // Data/Power BI → Managed support → Software engineering → QA), mapped
    // onto the same 6-category pool as every market by reordering categories
    // AND reordering items within Enterprise Applications, Cloud/DevOps
    // (Cybersecurity moved near the front) and Data and AI (Power BI first).
    categories: [
      {
        title: 'Enterprise Applications',
        items: ['SAP', 'Oracle', 'Microsoft Dynamics 365', 'Power Platform', 'Salesforce', 'ServiceNow', 'Zoho'],
      },
      {
        title: 'Cloud, DevOps and Infrastructure',
        items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cybersecurity', 'DevOps', 'SRE and platform engineering', 'Kubernetes', 'Terraform', 'Linux and cloud infrastructure'],
      },
      {
        title: 'Data and AI',
        items: ['Power BI', 'Data engineering', 'Database engineering', 'Data science', 'AI and GenAI', 'Machine learning'],
      },
      {
        title: 'Support and Managed Operations',
        items: ['Application support', 'Cloud support', 'Technical support', '24×5 and 24×7 teams', 'L1, L2 and L3 support', 'Support managers'],
      },
      {
        title: 'Software Engineering',
        items: ['Java and Spring Boot', '.NET', 'Python', 'React and Angular', 'Node.js', 'Mobile development', 'Full-stack engineering'],
      },
      {
        title: 'Quality Engineering',
        items: ['Manual and automation QA', 'Selenium', 'Tosca', 'API testing', 'Performance testing', 'Quality engineering leads'],
      },
    ],
    footerNote: "Don't see the exact skill you need? Share the JD. Our team also supports specialist and hard-to-fill requirements.",
  },

  process: {
    tag: 'HOW IT WORKS',
    headline: 'From requirement to relevant shortlist in four steps',
    steps: [
      { step: '01', title: 'Share the requirement', body: 'Send the JD or tell us the skills, experience, engagement duration, working hours and preferred start date.' },
      { step: '02', title: 'We validate and screen', body: 'We assess technical relevance, project experience, communication, availability and compensation expectations.' },
      { step: '03', title: 'You interview the shortlist', body: 'Meet only the candidates who match the agreed mandatory criteria.' },
      { step: '04', title: 'Confirm the engagement', body: 'Once selected, the engagement begins under mutually agreed commercial, working-hour, confidentiality and onboarding terms.' },
    ],
  },

  screening: {
    tag: 'SCREENING',
    headline: 'More than keyword-matched CVs',
    subhead: 'Every requirement is converted into a mandatory-skill scorecard before profiles are submitted.',
    // The shared 10-step screening foundation, used consistently (per the
    // build brief), with step 8 made UAE-specific.
    gates: [
      'Requirement converted into a mandatory-skill scorecard',
      'Resume and project validation',
      'Relevant years of experience by required skill',
      'Technical screening',
      'Communication assessment',
      'Availability and notice-period confirmation',
      'Identity and employment-document verification',
      'UAE working-hour confirmation',
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
      { label: 'UAE working-hour overlap', value: 'Confirmed before submission' },
      { label: 'Recruiter recommendation', value: 'Included' },
    ],
  },

  engagementModels: {
    tag: 'ENGAGEMENT MODELS',
    headline: 'Add exactly the capacity your delivery plan requires',
    ctaLabel: 'Discuss Your Requirement',
    models: [
      { title: 'Individual Offshore Specialist', body: 'For teams that need one or two experienced professionals for a defined technology or project requirement.' },
      { title: 'Dedicated Technology Pod', body: 'A coordinated team that can include ERP, cloud, data and technical leadership based on the delivery scope.' },
      { title: 'Partner Fulfilment', body: 'For UAE IT services companies, consultancies and implementation partners that need additional sourcing or offshore delivery capacity behind their client relationships.' },
    ],
  },

  // 'overlap-bar' variant per the brief ("near-full-day overlap" messaging)
  // and per WorkingHoursAlignment's own doc comment, which names UAE as the
  // canonical use case for this variant. overlapHoursLabel/overlapPercent
  // are a decorative approximation (not a contractual figure — the bar
  // component itself renders it as illustrative) derived from a standard
  // ~9-hour working day against the real 1h30m India-UAE offset (~7.5 of 9
  // hours ≈ 83%), matching the exact "~7.5 hrs of the working day" example
  // given in the WorkingHoursSectionContent doc comment for this market.
  workingHours: {
    tag: 'TIME ZONE ALIGNMENT',
    headline: 'Natural working-hour alignment between the UAE and India',
    subhead:
      'India is 1 hour 30 minutes ahead of the UAE, allowing substantial overlap across the standard '
      + 'working day. Exact hours and availability are confirmed with every candidate before submission.',
    visualVariant: 'overlap-bar',
    overlapBar: {
      marketLabel: 'India ↔ UAE',
      overlapHoursLabel: '~7.5 hrs of the working day',
      overlapPercent: 83,
      note: 'Exact hours and availability are confirmed with every candidate before submission.',
    },
  },

  sampleProfiles: {
    tag: 'SEE THE SCREENING QUALITY',
    headline: 'See the screening quality before discussing an engagement',
    subhead: 'Tell us the technology you need and we will share relevant anonymised sample profiles or screening formats where available.',
    categories: ['SAP', 'Oracle', 'Microsoft Dynamics 365', 'Cloud and DevOps', 'Cybersecurity', 'Data and Power BI'],
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
      'Confirmation that communication, availability and UAE working-hour overlap have already been checked',
      'A named recruitment contact for the engagement, not a shared inbox',
      'Documented terms — confidentiality, notice and applicable replacement terms — before onboarding starts',
    ],
  },

  risk: {
    tag: 'CLEAR TERMS',
    headline: 'Clear terms before the resource starts',
    subhead:
      'Availability, working hours, confidentiality, notice and applicable replacement terms are documented '
      + 'before onboarding. This offer is for offshore delivery from India — any local or on-site UAE '
      + 'requirement is discussed and confirmed separately.',
  },

  comparison: {
    tag: 'HOW WE COMPARE',
    headline: 'A more accountable alternative to unstructured freelance hiring',
    caption:
      'Comparison of individual freelancers, traditional recruitment, large outsourcing firms and Growth '
      + 'Escalators across mandatory-skill screening, technical assessment, communication assessment, '
      + 'availability confirmation, working-hour alignment, dedicated contact, individual-resource support, '
      + 'technology-pod capability and replacement terms',
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
      { criterion: 'Individual-resource support', values: { freelancer: 'Self-managed', recruitment: 'Varies by agency', outsourcing: 'Typically limited for single resources', ge: 'Available by agreement' } },
      { criterion: 'Technology-pod capability', values: { freelancer: 'Not available', recruitment: 'Typically individuals only', outsourcing: 'Pods, minimums often apply', ge: 'Either, matched to requirement' } },
      { criterion: 'Replacement terms', values: { freelancer: 'Not typically offered', recruitment: 'Varies by agency', outsourcing: 'Available by agreement', ge: 'Documented before onboarding' } },
    ],
  },

  faqs: {
    tag: 'QUESTIONS, ANSWERED',
    headline: 'Frequently asked',
    faqs: [
      { q: 'Where are the resources based?', a: 'Our offshore technology resources are primarily based in India and work remotely with a confirmed overlap against UAE working hours.' },
      { q: 'Can they work UAE business hours?', a: 'Working-hour expectations are confirmed with each candidate before submission. India is 1 hour 30 minutes ahead of the UAE, which typically allows substantial overlap across the standard working day — the exact hours depend on the role and engagement.' },
      { q: 'How quickly can profiles be shared?', a: 'We aim to share an initial relevant shortlist within 48 hours after the mandatory requirements are confirmed. Highly specialised requirements may require additional time, which we will communicate upfront.' },
      { q: 'How are candidates screened?', a: 'We review mandatory technical skills, project experience, relevant years of experience, communication, availability and working-hour alignment. Client-specific screening questions can also be included.' },
      { q: 'Can we begin with one resource?', a: 'Yes. Clients can begin with an individual specialist and expand the engagement as requirements grow.' },
      { q: 'Can you provide a complete technology pod?', a: 'Yes. A dedicated technology pod can be structured around your delivery scope, combining the relevant specialists into one coordinated team.' },
      { q: 'Do you provide on-site UAE resources?', a: 'This page concerns offshore delivery from India. Local or on-site UAE deployment must be discussed and confirmed separately.' },
      { q: 'Who employs and invoices for the resource?', a: 'The contractual structure is agreed before onboarding. Growth Escalators will confirm the applicable invoicing, notice, documentation and engagement terms for the selected resource.' },
      { q: 'How is confidential information protected?', a: 'Confidentiality, intellectual-property and access requirements are documented before onboarding. Additional client-specific security requirements can be incorporated into the engagement process.' },
      { q: 'What happens if the resource leaves?', a: 'Applicable replacement and transition terms are agreed in writing before the engagement begins.' },
    ],
  },

  leadForm: {
    tag: 'SHARE YOUR REQUIREMENT',
    headline: 'Tell us which skill your project needs',
    subhead: 'Share the role, timeline and working-hour requirements. We will review the requirement, confirm feasibility and begin preparing the relevant shortlist.',
    skillSuggestions: [
      'SAP', 'Oracle', 'Microsoft Dynamics 365', 'Power Platform', 'Salesforce', 'ServiceNow', 'AWS', 'Azure',
      'DevOps', 'Cybersecurity', 'Power BI', 'Data Engineering', 'Application Support', 'Java / Spring Boot',
      '.NET', 'QA Automation',
    ],
    resourceCountOptions: ['1', '2', '3–5', '6–10', '10+'],
    workingHoursFieldLabel: 'UAE working-hour expectations',
    workingHoursFieldPlaceholder: 'e.g. 7hr overlap, 9am–5pm UAE time',
    // Required per the API route (app/api/lead/route.ts): market === 'UAE' rejects
    // the submission unless `emirate` is present. Select, not free text — the UAE
    // has a fixed set of seven emirates.
    marketFields: [
      {
        name: 'emirate',
        label: 'UAE emirate',
        type: 'select',
        required: true,
        options: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
      },
    ],
    successHeadline: 'Requirement received.',
    successBody: 'Our team will review the role and contact you within one business day.',
    calLink: 'https://cal.com/growth-escalators/discovery-call',
  },

  disclosure: {
    text: 'This page concerns offshore technology resources delivered remotely from India for UAE technology and delivery teams. Local or on-site UAE deployment must be discussed and confirmed separately.',
    linkedinUrl: 'https://www.linkedin.com/company/growth-escalators',
  },
}
