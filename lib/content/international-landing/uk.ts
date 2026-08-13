import {
  FileText, ShieldCheck, UserCheck, Clock, Users,
} from 'lucide-react'
import type { InternationalLandingContent } from './types'

/**
 * UK market content for /uk-offshore-tech-resources. Lifted verbatim from
 * the already-approved copy that shipped in commit 6c4dc60 — nothing here
 * is new copy, only reshaped into the shared content-config contract. This
 * is the worked example for UAE/US/Australia (`uae.ts` / `us.ts` /
 * `australia.ts` — not built in this Stage, but must follow this exact
 * shape).
 *
 * `workingHours` is intentionally omitted — see the doc comment on
 * `WorkingHoursSectionContent` in ./types.ts for why it isn't wired into
 * the live UK page in this refactor.
 */
export const UK_CONTENT: InternationalLandingContent = {
  market: 'UK',
  eventPrefix: 'uk',
  leadSourceLabel: 'UK Offshore Tech Requirement',

  meta: {
    title: 'Offshore Tech Specialists for UK Teams | Growth Escalators',
    description:
      'Receive screened India-based SAP, Salesforce, ServiceNow, DevOps, cloud, data and software engineering profiles within 48 hours.',
    canonicalPath: '/uk-offshore-tech-resources',
  },

  nav: [
    { label: 'Skills', href: '#skills' },
    { label: 'Screening', href: '#screening' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Engagement Models', href: '#engagement-models' },
    { label: 'FAQs', href: '#faqs' },
  ],
  headerCtaLabel: 'Share Your Requirement',

  hero: {
    badge: 'Offshore technology capacity for UK delivery teams',
    heading: { lead: 'Screened India-Based Tech Specialists.', accent: 'Shortlisted Within 48 Hours.' },
    subhead:
      'Add experienced engineers to your delivery team without waiting months to recruit. '
      + 'Growth Escalators provides screened professionals across enterprise applications, '
      + 'cloud, DevOps, software engineering, data, AI and quality engineering.',
    proofPoints: [
      'Skill-matched, not keyword-matched',
      'Technical and communication screening',
      'Confirmed availability and working-hour overlap',
      'Individual specialists or complete technology pods',
    ],
    primaryCta: { label: 'Share Your Requirement' },
    secondaryCta: { label: 'View Sample Profiles' },
    microcopy: 'Send the role or upload the JD. We will review the requirements and confirm feasibility before sharing profiles.',
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
      { title: 'Identity and employment verification', body: 'Checked before a profile is shared.' },
      { title: 'Dedicated recruitment contact', body: 'One point of contact for the engagement.' },
    ],
  },

  pain: {
    tag: 'SOUND FAMILIAR?',
    headline: 'One missing specialist should not hold up the entire project.',
    subhead:
      'When a critical role remains open, delivery slows down long before recruitment catches up. '
      + 'Internal teams absorb additional workload, milestones move and project margins begin to suffer.',
    cards: [
      { title: 'Long local hiring cycles', body: 'Specialist roles can remain open while delivery deadlines continue moving closer.' },
      { title: 'Too many irrelevant profiles', body: 'Keyword-matched CVs create more screening work instead of solving the requirement.' },
      { title: 'Expensive capacity gaps', body: 'Urgent local contractors can quickly put pressure on project margins.' },
      { title: 'Unreliable freelance delivery', body: 'A low rate means little when accountability, continuity and replacement support are missing.' },
    ],
    footerNote:
      'Growth Escalators helps UK technology teams add screened specialist capacity from India while '
      + 'maintaining clear ownership, communication and delivery accountability.',
  },

  skills: {
    tag: 'WHAT WE COVER',
    headline: 'Specialist capacity across the technologies your clients already use',
    categories: [
      {
        title: 'Enterprise Applications',
        items: ['SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Microsoft Dynamics 365', 'Zoho'],
      },
      {
        title: 'Cloud, DevOps and Infrastructure',
        items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DevOps', 'SRE and platform engineering', 'Linux and cloud infrastructure', 'Cybersecurity'],
      },
      {
        title: 'Software Engineering',
        items: ['Java and Spring Boot', '.NET', 'Python', 'React and Angular', 'Node.js', 'Mobile development', 'Full-stack engineering'],
      },
      {
        title: 'Data and AI',
        items: ['Data engineering', 'Data science', 'AI and GenAI', 'Machine learning', 'Power BI', 'Database engineering'],
      },
      {
        title: 'Quality Engineering',
        items: ['Manual and automation QA', 'Selenium', 'Tosca', 'API testing', 'Performance testing', 'Quality engineering leads'],
      },
      {
        title: 'Support and Managed Operations',
        items: ['Application support', 'Cloud support', 'Technical support', '24×5 and 24×7 teams', 'L1, L2 and L3 support', 'Support managers'],
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
    gates: [
      'Resume and project validation',
      'Mandatory-skill checklist',
      'Relevant years of experience by core skill',
      'Technical screening',
      'Communication assessment',
      'Availability and notice-period confirmation',
      'Identity and employment-document verification',
      'UK working-hour overlap confirmation',
      'Recruiter recommendation',
    ],
    summary: [
      { label: 'Core skill', value: 'Example only' },
      { label: 'Relevant experience', value: 'Example only' },
      { label: 'Recent project', value: 'Example only' },
      { label: 'Responsibilities', value: 'Example only' },
      { label: 'Communication', value: 'Assessed' },
      { label: 'Availability', value: 'Confirmed before submission' },
      { label: 'UK overlap', value: 'Confirmed before submission' },
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
      { title: 'Partner Fulfilment', body: 'For UK staffing firms, consultancies and implementation partners that need additional sourcing or offshore delivery capacity behind their client relationships.' },
    ],
  },

  sampleProfiles: {
    tag: 'SEE THE SCREENING QUALITY',
    headline: 'See the screening quality before discussing an engagement',
    subhead: 'Tell us the technology you need and we will share relevant anonymised sample profiles or screening formats where available.',
    categories: ['SAP', 'Salesforce and ServiceNow', 'Cloud and DevOps', 'Java and .NET', 'Data and AI', 'QA automation'],
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
      'Confirmation that communication, availability and UK working-hour overlap have already been checked',
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
      'Comparison of individual freelancers, traditional recruitment, large outsourcing firms and Growth '
      + 'Escalators across screening, communication, availability, working-hour alignment, dedicated contact, '
      + 'replacement terms and ability to add individuals or pods',
    columns: [
      { key: 'freelancer', label: 'Individual freelancers' },
      { key: 'recruitment', label: 'Traditional recruitment' },
      { key: 'outsourcing', label: 'Large outsourcing firms' },
      { key: 'ge', label: 'Growth Escalators', highlight: true },
    ],
    highlightColumnKey: 'ge',
    rows: [
      { criterion: 'Technical screening', values: { freelancer: 'Varies by individual', recruitment: 'Typically limited', outsourcing: 'Varies by provider', ge: 'Structured, for every requirement' } },
      { criterion: 'Communication assessment', values: { freelancer: 'Not typically assessed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Included in the agreed process' } },
      { criterion: 'Availability confirmation', values: { freelancer: 'Self-reported', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' } },
      { criterion: 'Working-hour alignment', values: { freelancer: 'Not typically confirmed', recruitment: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' } },
      { criterion: 'Dedicated contact', values: { freelancer: 'None', recruitment: 'Varies by agency', outsourcing: 'Often shared, account-level', ge: 'Dedicated recruitment contact' } },
      { criterion: 'Replacement terms', values: { freelancer: 'Not typically offered', recruitment: 'Varies by agency', outsourcing: 'Available by agreement', ge: 'Documented before onboarding' } },
      { criterion: 'Individuals or pods', values: { freelancer: 'Individuals only', recruitment: 'Typically individuals', outsourcing: 'Pods, minimums often apply', ge: 'Either, matched to requirement' } },
    ],
  },

  faqs: {
    tag: 'QUESTIONS, ANSWERED',
    headline: 'Frequently asked',
    faqs: [
      { q: 'Where are the resources based?', a: 'Our offshore technology resources are primarily based in India and work remotely with an agreed overlap with the client’s UK working hours.' },
      { q: 'How quickly can we receive profiles?', a: 'We aim to share an initial relevant shortlist within 48 hours after the mandatory requirements are confirmed. Highly specialised requirements may require additional time, which we will communicate upfront.' },
      { q: 'Can the resources work UK business hours?', a: 'Working-hour expectations are confirmed with each candidate before submission. The available overlap depends on the role and engagement requirements.' },
      { q: 'How are candidates screened?', a: 'We review mandatory technical skills, project experience, relevant years of experience, communication, availability and working-hour alignment. Client-specific screening questions can also be included.' },
      { q: 'Who employs and invoices for the resource?', a: 'The contractual structure is agreed before onboarding. Growth Escalators will confirm the applicable invoicing, notice, documentation and engagement terms for the selected resource.' },
      { q: 'How is confidential information protected?', a: 'Confidentiality, intellectual-property and access requirements are documented before onboarding. Additional client-specific security requirements can be incorporated into the engagement process.' },
      { q: 'What happens if a resource leaves or is not the right fit?', a: 'Applicable replacement and transition terms are agreed in writing before the engagement begins.' },
      { q: 'Can we start with one resource?', a: 'Yes. Clients can begin with an individual specialist and expand the engagement as requirements grow.' },
      { q: 'Do you provide on-site resources in the UK?', a: 'This landing-page offer is focused on offshore delivery from India. Any local or on-site requirement must be discussed and confirmed separately.' },
    ],
  },

  leadForm: {
    tag: 'SHARE YOUR REQUIREMENT',
    headline: 'Tell us which skill is holding up your project',
    subhead: 'Share the role, timeline and working-hour requirements. We will review the requirement, confirm feasibility and begin preparing the relevant shortlist.',
    skillSuggestions: [
      'SAP', 'Salesforce', 'ServiceNow', 'Oracle', 'Microsoft Dynamics 365', 'AWS', 'Azure', 'DevOps',
      'Java / Spring Boot', '.NET', 'Python', 'React', 'Node.js', 'Data Engineering', 'AI / GenAI',
      'QA Automation', 'Application Support',
    ],
    resourceCountOptions: ['1', '2', '3–5', '6–10', '10+'],
    workingHoursFieldLabel: 'UK working-hour expectations',
    workingHoursFieldPlaceholder: 'e.g. 4hr overlap, 9am–1pm UK time',
    successHeadline: 'Requirement received.',
    successBody: 'Our team will review the role and contact you within one business day.',
    calLink: 'https://cal.com/growth-escalators/discovery-call',
  },

  disclosure: {
    text: 'This page concerns offshore technology resources delivered remotely from India for UK delivery teams. It is not a UK on-site staffing offer.',
    linkedinUrl: 'https://www.linkedin.com/company/growth-escalators',
  },
}
