/**
 * All copy and data for the /it-company-in-jaipur landing page.
 *
 * BOFU local money page targeting "it company in jaipur" — the managed-
 * infrastructure spoke alongside /software-company-in-jaipur and /best-
 * software-company-in-jaipur. EDIT this file to change anything visible.
 *
 * PROOF DISCIPLINE: uniqueIntro, localProof, and faqs are sourced from
 * lib/money-pages.ts (slug: 'it-company-in-jaipur'). painPoints,
 * serviceBlocks, process, and whyUs are sourced from lib/local-services.ts
 * (slug: 'it-services'). The Dr. Mukesh Sharma and Flight Ticket Fare proof
 * points are real, already-published GE client work — no invented clients
 * or metrics. No leadMagnet calculator: local-services.ts has no sourced
 * IT-services benchmark figures, so it's omitted rather than invented.
 * Uses the in-page LeadForm (leads → /api/lead → CRM), not a Cal.com link.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const IT_COMPANY_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'IT Company',

  hero: {
    variant: 'bold',
    badge: 'IT COMPANY IN JAIPUR · MANAGED HOSTING, UPTIME & SUPPORT',
    headlineLines: ['IT Company', 'in Jaipur'],
    cyclingWords: ['Hosting & uptime.', 'Security & backups.', 'Helpdesk support.', 'Monitored, not left to break.'],
    subhead:
      'Growth Escalators’ IT arm keeps the infrastructure behind your marketing and software running — hosting, security, backups, and helpdesk support — for Jaipur businesses that don’t want to hire a full-time in-house IT team. It’s the unglamorous work that keeps campaigns, sites, and systems from breaking at the worst moment.',
    primaryCta: { label: 'Get a Free Systems Audit', href: '#lead-form' },
    secondaryCta: { label: 'See what we manage ↓', href: '#builds' },
    statPills: [
      { emoji: '🛡️', value: 'Proactive', label: 'Uptime monitored continuously' },
      { emoji: '🧑‍💻', value: 'In-house', label: 'No offshore handoffs' },
      { emoji: '📍', value: 'Jaipur', label: 'Based in Sanganer' },
    ],
    image: {
      src: '/industries/softwaredev/hero.jpg',
      alt: 'Code and infrastructure dashboards displayed on a developer’s screen',
    },
  },

  showcase: {
    tag: 'THE UNGLAMOROUS WORK',
    headline: 'The infrastructure layer nobody notices — until it breaks',
    subhead: 'Hosting, uptime, and security handled by the same team that builds the software running on top of it.',
    images: [
      { src: '/industries/softwaredev/2.jpg', alt: 'Close-up of source code and server configuration on a monitor', caption: 'Systems monitored continuously, not checked when something breaks' },
      { src: '/industries/softwaredev/3.jpg', alt: 'Developer working on a laptop', caption: 'A defined helpdesk with response-time commitments' },
      { src: '/industries/softwaredev/4.jpg', alt: 'Developers collaborating at a desk', caption: 'One Sanganer office your team can actually reach' },
    ],
  },

  painPointsTag: 'SOUND FAMILIAR?',
  painPointsHeadline: 'Why IT problems in small businesses go unnoticed',
  painPoints: [
    { emoji: '🔌', title: 'Downtime nobody catches early', body: 'Hosting issues or expired certificates go unnoticed until a customer tells you the site is down.' },
    { emoji: '🧑‍💻', title: 'No dedicated IT person', body: 'IT problems get handled by whoever’s free that day, with no consistent ownership or process.' },
    { emoji: '🗄️', title: 'No real backup or recovery plan', body: 'Backups either don’t exist or have never been tested — meaning one bad update could mean starting from zero.' },
    { emoji: '🛡️', title: 'Unpatched, exposed systems', body: 'Outdated software and weak access controls leave the door open for security incidents that are entirely preventable.' },
  ],

  servicesTag: 'WHAT WE MANAGE',
  servicesHeadline: 'Infrastructure support, under one Jaipur roof',
  servicesSubhead: 'The layer around your marketing and web systems — monitored, patched, and backed up so it doesn’t break silently.',
  services: [
    { title: 'Managed IT Support', body: 'A defined helpdesk with response-time commitments, so IT issues have an owner instead of falling on whoever’s free.' },
    { title: 'Cloud Infrastructure Management', body: 'Hosting, uptime monitoring, and scaling handled for you, so your systems don’t go down during your busiest moment.' },
    { title: 'Network & Security Setup', body: 'Basic security hardening, access controls, and patch management to close the obvious gaps most small businesses leave open.' },
    { title: 'Data Backup & Disaster Recovery', body: 'Automated backups and a tested recovery plan, so one bad update or hardware failure doesn’t mean starting from zero.' },
    { title: 'Software & Systems Setup', body: 'Implementation and configuration support for the tools and platforms your team depends on day to day.' },
  ],

  builds: {
    tag: 'PROOF, NOT PROMISES',
    headline: 'Systems we already host and maintain',
    subhead: 'Real Jaipur engagements where our team owns the infrastructure, not just the initial build.',
    items: [
      {
        name: 'Dr. Mukesh Sharma — practice website hosting & security',
        what: 'Beyond the build, our team owns hosting and monitoring for the practice website as part of the ongoing engagement — uptime and security aren’t a one-time deliverable.',
        stack: 'Managed Hosting · Uptime Monitoring · Security',
      },
      {
        name: 'Flight Ticket Fare — CRM & WhatsApp infrastructure',
        what: 'The lead-routing and WhatsApp automation stack we built is monitored and maintained by our team, not left to break silently.',
        stack: 'CRM · WhatsApp Business API · Monitoring',
      },
    ],
  },

  resultsTag: 'REAL SYSTEM, REAL OWNERSHIP',
  resultsHeadline: 'Infrastructure owned, not just delivered',
  resultHighlight: {
    label: 'MANAGED IT',
    name: 'Dr. Mukesh Sharma',
    detail: 'Healthcare personal-brand engagement',
    quote:
      'Beyond the build, our team owns hosting and monitoring for the practice website as part of the ongoing engagement — uptime and security are a standing responsibility, not a one-time deliverable that ends at launch.',
    metrics: [
      { value: 'In-house', label: 'Hosting, uptime & security owned' },
      { value: 'Zero', label: 'Handoffs to outside vendors' },
      { value: 'Ongoing', label: 'Monitoring as part of the engagement' },
    ],
  },

  processTag: 'HOW WE WORK',
  processHeadline: 'Stabilise first, then keep it monitored',
  process: [
    { step: '01', title: 'Systems Audit', body: 'We map your current hosting, infrastructure, and support gaps — including what breaks quietly that nobody’s tracking.' },
    { step: '02', title: 'Stabilize', body: 'We fix the urgent issues first — backups, security patches, uptime monitoring — before touching anything else.' },
    { step: '03', title: 'Set Up Managed Support', body: 'A defined support plan with response-time commitments, so IT issues have an owner instead of falling on whoever’s free.' },
    { step: '04', title: 'Monitor & Maintain', body: 'Ongoing monitoring, patching, and monthly reporting, so problems get caught before they become downtime.' },
  ],

  whyUsTag: 'WHY JAIPUR BUSINESSES TRUST US WITH IT',
  whyUsHeadline: 'IT support without the full-time hire',
  whyUs: [
    { title: 'No full-time IT hire needed', body: 'Get managed hosting, monitoring, and support without carrying a full-time IT salary on your books.' },
    { title: 'Proactive, not just reactive', body: 'Uptime and security are monitored continuously, so issues get caught before they turn into downtime or data loss.' },
    { title: 'Works alongside your existing team', body: 'We plug into specific systems — hosting, backups, a particular platform — without needing to replace an in-house team that already exists.' },
    { title: 'Clear response-time commitments', body: 'You know exactly what to expect when something breaks, instead of hoping someone gets to it eventually.' },
  ],

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Managed IT services in Jaipur, answered',
  faqs: [
    { q: 'What IT services do you actually offer?', a: 'Managed hosting, uptime monitoring, backups, basic network/security setup, and helpdesk support — we’re focused on the infrastructure layer around marketing and web systems, not full enterprise IT.' },
    { q: 'Do you support businesses outside Jaipur?', a: 'We’re based in Jaipur and prioritise local response times, but remote IT support works for clients anywhere in India.' },
    { q: 'Can you manage IT alongside an in-house team?', a: 'Yes — we commonly work alongside a client’s existing IT staff, taking on specific systems (hosting, backups, a particular platform) rather than replacing the whole function.' },
    { q: 'What happens if something breaks after hours?', a: 'Critical hosting and uptime issues are monitored continuously; response times for non-critical support requests follow our standard business hours, Monday–Saturday, 10am–7pm.' },
    { q: 'Do you offer a one-time audit, or only ongoing retainers?', a: 'Both — we offer a one-time systems audit if you just want a health check, and ongoing managed support if you want it monitored continuously.' },
  ],

  finalCta: {
    title: 'Want IT that doesn’t break silently?',
    subhead: 'Tell us what you’re running today — hosting, backups, a specific platform — and we’ll come back with an audit and a plan to stabilise it.',
    ctaLabel: 'Get a Free Systems Audit',
  },

  videoTestimonialsTag: 'CLIENT VOICES',
  videoTestimonialsHeadline: 'Hear from the people we support',
  videoTestimonials: [
    // Add approved YouTube Shorts URLs here when available.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New IT Company Lead — Jaipur',
    headline: 'Tell us what you need managed',
    subhead: 'Share your current setup and we’ll get back within 24 hours with next steps.',
    tag: 'LET’S STABILISE IT',
  },

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'Explore more',
    subhead: 'See the work, and the other things we build and manage.',
    links: [
      { label: 'Software Company in Jaipur', href: '/software-company-in-jaipur', blurb: 'The in-house team that builds what we then host and maintain.' },
      { label: 'Software Development Company in Jaipur', href: '/software-development-company-jaipur', blurb: 'Our sprint-by-sprint development process.' },
    ],
  },
}
