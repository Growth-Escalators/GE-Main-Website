import {
  FileText, ShieldCheck, UserCheck, Clock, Users,
} from 'lucide-react'
import type { InternationalLandingContent } from './types'

/**
 * US market content for /us-tech-staffing-fulfilment. Unlike UK/UAE/Australia
 * (broad direct-hiring offers for in-house delivery teams), this page is a
 * partner-fulfilment offer for US IT staffing companies, MSPs and
 * consultancies that already own the client relationship but lack sourcing/
 * screening/offshore-delivery capacity. Positioning, section order and the
 * comparison framework all reflect that — see the page-local
 * "Your client relationship remains yours" block in page.tsx, which has no
 * shared-component equivalent and is intentionally NOT generalized into
 * components/landing/international/ (US-only content, kept isolated here).
 *
 * Proof discipline: no client logos, no placement/selection numbers, no
 * claim of W-2 employment, visa sponsorship, US payroll, or a pre-existing
 * standard non-circumvention/white-label program — those are consistently
 * phrased as "available by agreement" / "discussed separately", never as
 * already-standard, per the brief.
 */
export const US_CONTENT: InternationalLandingContent = {
  market: 'US',
  eventPrefix: 'us',
  leadSourceLabel: 'US Tech Staffing Fulfilment Requirement',

  meta: {
    title: 'US Tech Staffing Fulfilment Partner | Growth Escalators',
    description:
      'Expand your technology fulfilment capacity with screened India-based SAP, Salesforce, ServiceNow, cloud, DevOps, data and engineering specialists.',
    canonicalPath: '/us-tech-staffing-fulfilment',
  },

  nav: [
    { label: 'Skills', href: '#skills' },
    { label: 'Screening', href: '#screening' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Engagement Models', href: '#engagement-models' },
    { label: 'FAQs', href: '#faqs' },
  ],
  headerCtaLabel: 'Send a Requirement',

  hero: {
    badge: 'Offshore fulfilment for US staffing and IT services companies',
    heading: {
      lead: 'Expand Your Tech Fulfilment Capacity',
      accent: 'Without Expanding Your Internal Recruiting Team.',
    },
    subhead:
      'Growth Escalators helps US staffing firms, MSPs and IT consultancies source screened '
      + 'India-based specialists across enterprise applications, cloud, software engineering, '
      + 'data, AI and quality engineering.',
    proofPoints: [
      'Relevant profiles targeted within 48 hours',
      'Technical and communication screening',
      'Defined US time-zone overlap',
      'Partner-first confidentiality and account protection',
      'Individual specialists or delivery pods',
    ],
    primaryCta: { label: 'Send a Requirement' },
    secondaryCta: { label: 'Review Sample Profiles' },
    microcopy: 'Share the JD or mandatory skills. We will confirm feasibility before beginning the shortlist.',
    pipeline: {
      cardTitle: 'Requirement to shortlist',
      cardBadge: 'Process overview',
      steps: [
        { icon: FileText, label: 'Requirement received' },
        { icon: ShieldCheck, label: 'Skills validated' },
        { icon: UserCheck, label: 'Candidate screened' },
        { icon: Clock, label: 'Relevant shortlist targeted within 48 hours' },
        { icon: Users, label: 'Client interview' },
      ],
    },
  },

  trustStrip: {
    points: [
      { title: 'Relevant profiles within 48 hours', body: 'From confirmed requirement to shortlist.' },
      { title: 'Technical and communication screening', body: 'Every candidate, every requirement.' },
      { title: 'Defined US time-zone overlap', body: 'Confirmed per role before submission.' },
      { title: 'Partner account protection', body: 'Communication boundaries agreed upfront.' },
    ],
  },

  pain: {
    tag: 'SOUND FAMILIAR?',
    headline: 'Every unfilled requirement puts revenue and client trust at risk.',
    subhead:
      'When a specialist role stays open, delivery commitments slip before recruitment ever catches up. '
      + 'Delivery managers absorb the extra screening load and the margin on the win starts to erode.',
    cards: [
      { title: 'Internal recruiter capacity', body: 'Your team may have the client relationship but not enough sourcing capacity for every specialist requirement.' },
      { title: 'Unqualified submission volume', body: 'More CVs do not help when delivery managers still need to screen every profile from the beginning.' },
      { title: 'Margin pressure', body: 'Expensive emergency sourcing can make a won project commercially unattractive.' },
      { title: 'Account risk', body: 'A fulfilment partner is only useful when client ownership, confidentiality and communication boundaries are clear.' },
    ],
    footerNote:
      'Growth Escalators works as an extension of your fulfilment operation while respecting '
      + 'your end-client relationship — sourcing and screening capacity behind your account, not in front of it.',
  },

  skills: {
    tag: 'WHAT WE COVER',
    headline: 'Specialist capacity across the technologies your clients already run',
    categories: [
      {
        title: 'Salesforce and ServiceNow',
        items: ['Salesforce', 'ServiceNow', 'Platform administration', 'Solution architecture', 'Implementation and support'],
      },
      {
        title: 'SAP and Oracle',
        items: ['SAP', 'Oracle', 'Microsoft Dynamics 365', 'Power Platform', 'Zoho'],
      },
      {
        title: 'Cloud, DevOps and Cybersecurity',
        items: ['AWS', 'Azure', 'Google Cloud', 'DevOps', 'SRE and platform engineering', 'Kubernetes', 'Terraform', 'Linux and cloud infrastructure', 'Cybersecurity'],
      },
      {
        title: 'Java and .NET Modernization',
        items: ['Java / Spring Boot', '.NET', 'Python', 'React and Angular', 'Node.js', 'Mobile development', 'Full-stack engineering'],
      },
      {
        title: 'Data and AI',
        items: ['Data engineering', 'Data science', 'AI and GenAI', 'Machine learning', 'Power BI', 'Database engineering'],
      },
      {
        title: 'QA Automation',
        items: ['Manual and automation QA', 'Selenium', 'Tosca', 'API testing', 'Performance testing', 'Quality engineering leads'],
      },
      {
        title: 'Application and Cloud Support',
        items: ['Application support', 'Cloud support', 'Technical support', '24×5 and 24×7 teams', 'L1, L2 and L3 support', 'Support managers'],
      },
    ],
    footerNote: "Don't see the exact skill you need? Share the JD. Our team also supports specialist and hard-to-fill requirements.",
  },

  process: {
    tag: 'HOW IT WORKS',
    headline: 'From requirement to relevant shortlist in four steps',
    steps: [
      { step: '01', title: 'Share the requirement', body: 'Send the JD or tell us the mandatory skills, experience, engagement duration, time-zone overlap and target start date.' },
      { step: '02', title: 'We validate and screen', body: 'We assess technical relevance, project experience, communication, availability and notice period against the mandatory-skill scorecard.' },
      { step: '03', title: 'You interview the shortlist', body: 'Your delivery team meets only the candidates who match the agreed mandatory criteria.' },
      { step: '04', title: 'Confirm the engagement', body: 'Once selected, the engagement begins under mutually agreed commercial, communication, confidentiality and onboarding terms.' },
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
      'US time-zone overlap confirmation',
      'Recruiter remarks',
      'Recruiter recommendation',
    ],
    summary: [
      { label: 'Required skill', value: 'Example only' },
      { label: 'Relevant experience', value: 'Example only' },
      { label: 'Recent project', value: 'Example only' },
      { label: 'Communication', value: 'Assessed' },
      { label: 'Availability', value: 'Confirmed before submission' },
      { label: 'US time-zone overlap', value: 'Confirmed before submission' },
      { label: 'Recruiter remarks', value: 'Included' },
      { label: 'Recruiter recommendation', value: 'Included' },
    ],
  },

  engagementModels: {
    tag: 'ENGAGEMENT MODELS',
    headline: 'Add exactly the fulfilment capacity your delivery plan requires',
    ctaLabel: 'Discuss Your Requirement',
    models: [
      { title: 'Partner Fulfilment', body: 'Ongoing sourcing and screening capacity behind your staffing desk or delivery practice, with client ownership and communication boundaries agreed upfront.' },
      { title: 'Individual Offshore Specialist', body: 'For a single defined role that needs a screened India-based specialist submitted against a specific requirement.' },
      { title: 'Dedicated Delivery Pod', body: 'A coordinated group of specialists — for example backend, QA and support — sized to a larger engagement scope.' },
    ],
  },

  sampleProfiles: {
    tag: 'SEE THE SCREENING QUALITY',
    headline: 'Test the screening quality with an active requirement',
    subhead: 'Share one difficult role and review the relevance of the resulting shortlist before considering broader fulfilment support.',
    categories: ['Salesforce and ServiceNow', 'SAP and Oracle', 'Cloud and DevOps', 'Java and .NET', 'Data and AI', 'QA automation'],
    ctaLabel: 'Send a Test Requirement',
  },

  proof: {
    tag: 'WHAT YOU RECEIVE',
    headline: 'Process proof, not promises',
    subhead:
      "We're not going to show you a client logo wall or a made-up placement count on a new "
      + "offer. Here's exactly what lands in your inbox when a shortlist is ready.",
    items: [
      'A short scorecard for every profile — mandatory skills, relevant experience and recent project context',
      'Confirmation that communication, availability and US time-zone overlap have already been checked',
      'A named recruitment contact for the engagement, not a shared inbox',
      'Documented submission-ownership and confidentiality terms before onboarding starts',
    ],
  },

  risk: {
    tag: 'CLEAR TERMS',
    headline: 'Commercial boundaries agreed before sourcing begins',
    subhead:
      'Submission ownership, communication rules, confidentiality, payment expectations, working hours '
      + 'and applicable replacement terms are agreed before active fulfilment begins.',
  },

  workingHours: {
    tag: 'TIME-ZONE OVERLAP',
    headline: 'Overlap designed around the engagement',
    subhead:
      'India-based specialists can provide agreed overlap with Eastern, Central, Mountain or Pacific '
      + 'teams depending on the role and candidate availability. Exact hours are confirmed before submission.',
    visualVariant: 'multi-zone-note',
    zones: [
      { zone: 'Eastern (ET)', note: 'Overlap confirmed per role' },
      { zone: 'Central (CT)', note: 'Overlap confirmed per role' },
      { zone: 'Mountain (MT)', note: 'Overlap confirmed per role' },
      { zone: 'Pacific (PT)', note: 'Overlap confirmed per role' },
    ],
    zoneCaveat: 'Overlap varies by role and candidate availability — exact hours are confirmed before a profile is submitted, not guaranteed as a default.',
  },

  comparison: {
    tag: 'HOW WE COMPARE',
    headline: 'A more accountable alternative to unstructured sourcing',
    caption:
      'Comparison of resume database or vendor sourcing, independent recruiters, large outsourcing '
      + 'companies and Growth Escalators partner fulfilment across screening, communication, availability, '
      + 'time-zone alignment, dedicated contact, replacement terms and partner account protection',
    columns: [
      { key: 'database', label: 'Resume database / vendor' },
      { key: 'recruiter', label: 'Independent recruiter' },
      { key: 'outsourcing', label: 'Large outsourcing company' },
      { key: 'ge', label: 'Growth Escalators partner fulfilment', highlight: true },
    ],
    highlightColumnKey: 'ge',
    rows: [
      { criterion: 'Technical screening', values: { database: 'Not typically included', recruiter: 'Varies by individual', outsourcing: 'Varies by provider', ge: 'Structured, for every requirement' } },
      { criterion: 'Communication assessment', values: { database: 'Not included', recruiter: 'Varies', outsourcing: 'Varies by provider', ge: 'Included in the agreed process' } },
      { criterion: 'Availability confirmation', values: { database: 'Self-reported', recruiter: 'Self-reported', outsourcing: 'Varies by provider', ge: 'Confirmed before submission' } },
      { criterion: 'US time-zone alignment', values: { database: 'Not typically confirmed', recruiter: 'Varies', outsourcing: 'Varies by provider', ge: 'Confirmed before submission, per role' } },
      { criterion: 'Dedicated contact', values: { database: 'None', recruiter: 'Varies by individual', outsourcing: 'Often shared, account-level', ge: 'Dedicated recruitment contact' } },
      { criterion: 'Replacement terms', values: { database: 'Not offered', recruiter: 'Not typically offered', outsourcing: 'Available by agreement', ge: 'Documented before onboarding' } },
      { criterion: 'Partner account protection', values: { database: 'Not applicable', recruiter: 'Typically limited', outsourcing: 'Varies by provider', ge: 'Communication boundaries agreed upfront' } },
    ],
  },

  faqs: {
    tag: 'QUESTIONS, ANSWERED',
    headline: 'Frequently asked',
    faqs: [
      { q: 'Do you contact our end client?', a: 'No. We do not contact your end client directly unless you specifically authorize it in writing for a given engagement. Communication boundaries are agreed upfront.' },
      { q: 'Can you work under an NDA and non-circumvention agreement?', a: 'Yes, an NDA can be put in place before any requirement details are shared. Non-circumvention terms are available where contractually agreed — this is discussed and documented per engagement, not a pre-existing standard program.' },
      { q: 'Are the resources based in India?', a: 'Yes. This offer is India-based offshore delivery. We do not provide US-based, on-site, or local staffing under this offer.' },
      { q: 'Can resources provide US time-zone overlap?', a: 'Overlap with Eastern, Central, Mountain or Pacific teams is confirmed per role and candidate before a profile is submitted — we do not promise full US business-hour coverage by default.' },
      { q: 'How quickly can profiles be submitted?', a: 'We target a relevant initial shortlist within 48 hours after the mandatory requirement is confirmed. Highly specialized requirements may take longer, which we will communicate upfront.' },
      { q: 'How do you screen candidates?', a: 'Every requirement is converted into a mandatory-skill scorecard covering resume and project validation, relevant experience, technical screening, communication assessment, availability, identity and employment-document verification, and time-zone confirmation.' },
      { q: 'Can you support white-label fulfilment?', a: 'White-label processes can be discussed and set up separately for a given partner — they are not a default or already-standard part of this offer.' },
      { q: 'Who employs and invoices for the resource?', a: 'Growth Escalators engages and invoices for the India-based resource under terms agreed in writing before onboarding. This is an offshore delivery arrangement, not a US employment relationship.' },
      { q: 'Do you provide W-2, C2C or visa candidates in the US?', a: 'No. We do not provide W-2 employment, corp-to-corp US placements, US payroll, or visa-sponsored candidates. All delivery under this offer is India-based and remote.' },
      { q: 'Can we begin with one active requirement?', a: 'Yes. We recommend starting with a single active requirement so you can review shortlist quality before considering broader partner fulfilment support.' },
      { q: 'What happens if a resource leaves?', a: 'Applicable replacement and transition terms are agreed in writing before the engagement begins.' },
      { q: 'How is candidate ownership recorded?', a: 'Submission and candidate ownership are documented in writing before active sourcing begins, so both teams have a clear, agreed record of which candidates were submitted for which requirement.' },
    ],
  },

  leadForm: {
    tag: 'SEND A REQUIREMENT',
    headline: 'Send us one active technology requirement',
    subhead: 'Share the role, company type and time-zone expectations. We will confirm feasibility and begin preparing a relevant shortlist.',
    skillSuggestions: [
      'Salesforce', 'ServiceNow', 'SAP', 'Oracle', 'Microsoft Dynamics 365', 'AWS', 'Azure', 'DevOps',
      'Cybersecurity', 'Java / Spring Boot', '.NET', 'Python', 'React', 'Node.js', 'Data Engineering',
      'AI / GenAI', 'QA Automation', 'Application Support',
    ],
    resourceCountOptions: ['1', '2', '3–5', '6–10', '10+'],
    workingHoursFieldLabel: 'Required overlap',
    workingHoursFieldPlaceholder: 'e.g. 4hr overlap, 9am–1pm ET',
    marketFields: [
      {
        name: 'companyType',
        label: 'Company type',
        type: 'select',
        required: true,
        options: ['Staffing company', 'IT consultancy', 'MSP', 'Implementation partner', 'SaaS or product company', 'Other'],
      },
      {
        name: 'usTimeZone',
        label: 'US time zone',
        type: 'select',
        required: true,
        options: ['Eastern (ET)', 'Central (CT)', 'Mountain (MT)', 'Pacific (PT)'],
      },
    ],
    showBudgetRange: true,
    successHeadline: 'Requirement received.',
    successBody: 'Our team will review the role and confirm feasibility within one business day.',
    calLink: 'https://cal.com/growth-escalators/discovery-call',
  },

  disclosure: {
    text: 'This page concerns offshore technology fulfilment support delivered remotely from India for US staffing companies, MSPs and IT consultancies. It is not a US-based staffing, W-2 employment, or visa-sponsorship offer.',
    linkedinUrl: 'https://www.linkedin.com/company/growth-escalators',
  },
}
