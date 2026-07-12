/**
 * All copy and data for the /linkedin-marketing-agency landing page.
 *
 * NATIONAL BOFU money page — channel-specific intent ("linkedin marketing
 * agency india", "linkedin lead generation agency", "linkedin ads agency").
 * Angle: LinkedIn organic authority + LinkedIn Ads + founder/personal brand +
 * social selling + content engine. Deliberately distinct from
 * /b2b-lead-generation-agency (pipeline/ABM economics, channel-agnostic) and
 * /saas-marketing-agency (PLG/trial-funnel intent).
 *
 * PROOF RULE: every number is a real, already-published GE claim from
 * lib/constants.ts. Featured: Vikram Choudhary (ALL_TESTIMONIALS #12 —
 * 0→18 qualified leads/mo in <5 months, Delhi B2B consulting firm, real
 * verbatim quote used below). Supporting: Credo World (CASE_STUDIES #6 —
 * LinkedIn +400% in 4 months) and Dr. Mukesh Sharma (CASE_STUDIES #3 —
 * LinkedIn 0→8,200 followers, 12 inbound consults/month). Neither Credo
 * World nor Dr. Mukesh has a published direct quote in constants.ts (only
 * challenge/solution/results), so their numbers are presented as factual
 * mentions/metrics — not invented quotes.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const LINKEDIN_MARKETING_CONTENT: LandingContent = {
  industryLabel: 'LinkedIn Marketing',

  hero: {
    badge: 'LINKEDIN GROWTH SPECIALISTS · 100+ BRANDS SERVED',
    headlineLines: ['LinkedIn Marketing', 'Agency in India'],
    cyclingWords: [
      'Built for founder brands.',
      'Built for LinkedIn Ads.',
      'Built for social selling.',
      'Built for thought leadership.',
    ],
    subhead:
      "Growth Escalators is a LinkedIn marketing agency for founders and executives who want LinkedIn to be a real growth channel — not a place they post occasionally. We combine organic authority content, LinkedIn Ads, and founder ghostwriting into one system. A Delhi B2B consulting firm went from 0 to 18 qualified leads a month; Credo World grew LinkedIn 400% in 4 months on the way to a predictable B2B pipeline.",
    primaryCta: { label: 'Book a Free LinkedIn Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '0→18/mo',  label: 'Qualified Leads (LinkedIn-Led)' },
      { emoji: '🔗', value: '+400%',    label: 'LinkedIn Growth in 4 Months'    },
      { emoji: '👥', value: '0→8,200',  label: 'LinkedIn Followers'             },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why most "LinkedIn marketing" is just posting into the void',
  painPoints: [
    { emoji: '📝', title: 'Generic posts nobody engages with', body: "You post a few times a month, get a handful of likes from your own team, and nothing turns into a conversation. LinkedIn rewards specific, opinionated content — not generic tips-and-tricks carousels." },
    { emoji: '👻', title: 'A founder too busy to post consistently', body: 'The person with the most credibility to post — the founder or a senior exec — is also the busiest person in the company. Without a system, LinkedIn becomes the first thing that gets skipped.' },
    { emoji: '💸', title: 'LinkedIn Ads running with no organic foundation', body: "Boosting a cold audience with no existing authority or engagement drives clicks, not trust. LinkedIn Ads work best when they amplify content that's already proven to convert." },
    { emoji: '📊', title: "No idea what's actually working", body: "Follower count goes up, but nobody can say whether it's translating into DMs, demo requests, or deals. Vanity metrics with no connection to pipeline." },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'LinkedIn rewards consistency — AI is how we sustain it',
    subhead:
      "A content engine that only works when someone remembers to post isn't a system. Our AI-assisted workflow keeps quality high and cadence consistent, without turning your voice into a template.",
    cards: [
      { emoji: '✍️', title: 'AI-assisted ghostwriting, human-edited', body: 'We draft from your real opinions, calls, and experience using AI as a first-pass tool — then a human editor sharpens every post so it still sounds like you, not a template.' },
      { emoji: '🎯', title: 'AI hook and format testing', body: 'We test multiple hooks and formats (text, carousel, video) for the same idea and double down on what your specific audience actually stops scrolling for.' },
      { emoji: '💬', title: 'AI-assisted engagement triage', body: 'When a post takes off, AI flags the highest-intent commenters and DMs first, so outreach happens while interest is warm — not three days later.' },
      { emoji: '📊', title: 'AI-optimized LinkedIn Ads', body: "Creative and audience testing across Sponsored Content and Lead Gen Forms, concentrating spend on what's actually driving qualified conversations, not just impressions." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete LinkedIn growth engine',
  servicesSubhead: 'Six services, one promise: LinkedIn that produces real conversations, not just follower growth.',
  services: [
    { title: 'LinkedIn Organic Authority & Ghostwriting', body: 'Founder and executive content built from your real expertise — posts, carousels, and video scripts written in your voice, on a consistent weekly cadence.' },
    { title: 'LinkedIn Ads (Sponsored Content & Lead Gen Forms)', body: 'Paid campaigns that amplify content already proven to convert, targeted to your real ICP by job title, company size, and industry.' },
    { title: 'Content Engine & Editorial Calendar', body: 'A repeatable system — content pillars, a posting calendar, and a review workflow — so LinkedIn keeps compounding even in your busiest weeks.' },
    { title: 'Outbound & Social Selling Sequencing', body: 'DM and connection-request sequences layered on top of content, so warm engagement gets followed up on systematically instead of left sitting in your inbox.' },
    { title: 'Company Page & Employee Advocacy', body: 'A company page that supports founder content instead of competing with it, plus simple advocacy systems that get your team amplifying key posts.' },
    { title: 'Analytics & Content Optimization', body: "Tracking engagement quality, profile views, and DM-to-conversation rate — not just follower count — so we know which content is actually driving pipeline." },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A LinkedIn engine we built from zero',
  resultHighlight: {
    label: 'FEATURED CLIENT · B2B / CONSULTING',
    name: 'Vikram Choudhary',
    detail: 'B2B Consulting Firm · Delhi',
    quote:
      "We were invisible digitally despite being one of the top consulting firms in our niche. GE built our LinkedIn authority, Google Ads, and content machine. We went from 0 inbound leads to 18 qualified ones per month in under 5 months.",
    metrics: [
      { value: '0 → 18/mo',  label: 'Qualified leads (Vikram Choudhary, Delhi)'      },
      { value: '+400%',      label: 'LinkedIn growth in 4 months (Credo World)'      },
      { value: '0 → 8,200',  label: 'LinkedIn followers (Dr. Mukesh Sharma)'         },
    ],
  },

  process: [
    { step: '01', title: 'LinkedIn & Brand Audit', body: "A 45-minute call. We review your current profile, content history, posting cadence, and engagement quality — and tell you exactly what's holding your LinkedIn back." },
    { step: '02', title: 'Content + Ads Plan', body: 'Within 7 days you get a written plan: content pillars, posting calendar, ghostwriting workflow, and — if relevant — an ads budget split.' },
    { step: '03', title: 'Build & Launch', body: 'Profile optimization, your first content batch, and LinkedIn Ads (if applicable) go live within 14 days. Most clients see engagement lift within the first two weeks.' },
    { step: '04', title: 'Optimize Toward Inbound', body: "We double down on the formats and hooks that drive DMs and demo requests — not just likes — with monthly reporting on what's actually converting." },
  ],
  processHeadline: 'Four steps from blank profile to inbound DMs',

  whyUsHeadline: 'The LinkedIn agency that reports conversations, not followers',
  whyUs: [
    { title: "We ghostwrite, we don't template", body: 'Generic "10 tips" carousels don\'t build authority. We write in your voice, from your real expertise, tested against what actually earns saves and DMs.' },
    { title: 'Organic and Ads run by the same team', body: "Most agencies split content and paid across two vendors who don't talk to each other. We run both together, so ad spend amplifies content that's already proven to convert." },
    { title: 'Real LinkedIn proof, not vague "engagement" promises', body: 'Credo World grew LinkedIn +400% in 4 months on the way to 15 qualified B2B leads a month. Dr. Mukesh Sharma went from 0 to 8,200 followers and now gets 12 inbound consultation requests a month.' },
    { title: 'Personal brand and company page, in sync', body: 'Founder content drives 5–10 inbound leads a week on its own for our Personal Branding clients — and we route that demand into your company page and pipeline, not just your personal follower count.' },
  ],

  faqsHeadline: 'Hiring a LinkedIn marketing agency',
  faqs: [
    { q: 'Do you write the posts, or do we?', a: 'We write them. You give us raw material — voice notes, a call, past talks, or drafts — and our writers turn that into posts in your voice. You approve everything before it goes live.' },
    { q: 'Should I run LinkedIn Ads, or focus on organic content first?', a: "Usually organic first, or at least in parallel. Ads amplify content that's already proven to get engagement — boosting an audience with zero existing trust just drives expensive clicks. We'll tell you honestly which your account needs first." },
    { q: 'Is this for my personal profile or my company page?', a: 'Both, in sync. Personal profiles — especially founder/exec — typically get far more organic reach than company pages on LinkedIn, so we usually lead with personal content and use the company page to reinforce it.' },
    { q: 'How often will you post?', a: 'Most clients run 3–5 posts a week from the personal profile, plus company page amplification. We agree the exact cadence in your content plan based on how much raw material we have to work with.' },
    { q: 'Do you handle LinkedIn outreach and DMs, or just content?', a: 'Both, if you want it. Content builds the audience; DM and connection-request sequencing turns warm engagement into booked calls. We can run either independently or together.' },
    { q: 'How long before LinkedIn starts generating real leads?', a: "Engagement typically lifts within 2–3 weeks. Inbound DMs and demo requests usually build over 2–4 months as your content history and authority compound — LinkedIn rewards consistency over time, not single viral posts." },
    { q: 'I\'m not comfortable being "the face" of the brand — can this still work?', a: 'Yes. We can lead with the company page and subject-matter-expert content from your team instead of a single founder profile, though personal profiles generally outperform company pages on reach.' },
  ],

  finalCta: {
    title: 'Ready to make LinkedIn a real growth channel?',
    subhead: "Book a free, no-obligation LinkedIn audit. We'll review your profile, your content history, and your engagement data — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Book a Free LinkedIn Audit',
  },

  videoTestimonialsTag: 'HEAR FROM FOUNDERS',
  videoTestimonialsHeadline: 'Real founders, real LinkedIn growth',
  videoTestimonialsSubhead: 'Tap any short to hear how founders talk about their LinkedIn growth.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from LinkedIn-focused clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for LinkedIn-led growth',
    links: [
      { label: 'B2B Lead Generation Agency', href: '/b2b-lead-generation-agency', blurb: 'How we turn LinkedIn authority into a full B2B pipeline.' },
      { label: 'SaaS Marketing Agency', href: '/saas-marketing-agency', blurb: 'For SaaS and EdTech founders building a growth engine beyond LinkedIn.' },
      { label: 'Our Services', href: '/services', blurb: 'The full stack: ads, funnels, web, SEO, and branding.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New LinkedIn Marketing Lead',
    headline: 'Tell us about your LinkedIn goals',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free audit.',
    tag: 'BOOK YOUR FREE AUDIT',
  },
}
