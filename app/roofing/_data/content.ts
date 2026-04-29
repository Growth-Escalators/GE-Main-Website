/**
 * All copy and data for the /roofing landing page (US-targeted).
 *
 * EDIT this file to change anything visible on the page.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const ROOFING_CONTENT: LandingContent = {
  industryLabel: 'Roofing',

  hero: {
    badge: 'TRUSTED BY US ROOFING CONTRACTORS',
    headlineLines: ['More Booked Jobs.', 'Lower Cost Per Lead.'],
    cyclingWords: [
      'Built for residential roofers.',
      'Built for storm restoration.',
      'Built for commercial roofing.',
      'Built for solar + roofing combos.',
    ],
    subhead:
      "We help US roofing contractors fill their schedule with high-ticket replacement and storm-restoration jobs through AI-powered Google, Meta, and LSA campaigns — not generic agency cookie-cutter funnels.",
    primaryCta: { label: 'Get My Free Lead Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🏠', value: '$8M+',  label: 'Roofing Revenue Driven' },
      { emoji: '⚡', value: '<5 min', label: 'Avg. Lead Response'    },
      { emoji: '📈', value: '6.1×',  label: 'Avg. ROAS'              },
    ],
  },

  painPointsTag: 'IF THIS SOUNDS LIKE YOU',
  painPointsHeadline: "Why most roofing companies are leaving money on the roof",
  painPoints: [
    { emoji: '⏱️', title: 'Slow lead response kills deals', body: 'Studies show roofers lose 78% of leads when reply takes over 5 minutes. Most contractors are still calling back the next day.' },
    { emoji: '🌪️', title: 'Storm chasers eat your territory', body: "Out-of-state crews swoop in after every weather event with bigger ad budgets and slicker funnels. Local contractors can't keep up." },
    { emoji: '⭐', title: 'One bad review tanks your ranking', body: 'Google Maps and LSA rankings are brutal. A single negative review can drop you below competitors who pay you no mind.' },
    { emoji: '📊', title: 'Feast-or-famine lead flow',         body: 'Some weeks the phone rings off the hook. Then nothing for 3 weeks. No predictability means you can\'t plan crews or growth.' },
  ],

  aiAdvantage: {
    tag: 'AI-FIRST ROOFING MARKETING',
    headline: "We're not catching up to AI. We built our agency on it.",
    subhead:
      "Other agencies are still running playbooks from 2019. Our AI infrastructure is what gets your phone ringing within 5 minutes of a homeowner clicking your ad.",
    cards: [
      { emoji: '⚡', title: '< 5-minute AI lead response',    body: 'Every form submission triggers an AI-powered text-back within 60 seconds. Our system pre-qualifies them while your sales rep is still finishing the previous appointment.' },
      { emoji: '🛰️', title: 'Storm-triggered ad automation',  body: 'Our AI watches NOAA hail and wind data for your territories and auto-launches dedicated storm-restoration campaigns the same day a storm hits — before competitors even hear about it.' },
      { emoji: '🎯', title: 'Predictive bid optimization',    body: "AI analyzes which zip codes, ad creatives, and times of day actually convert into signed contracts (not just leads), then concentrates spend there." },
      { emoji: '📞', title: 'AI call transcription + scoring', body: 'Every inbound call is transcribed, scored for buying intent, and tagged with reasons leads went cold — so we can fix the leak in your sales script, not just blame the leads.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete roofing growth engine',
  servicesSubhead: 'Six services, one promise: a calendar full of $15k+ replacement jobs, not $300 repair calls.',
  services: [
    { title: 'Google Local Service Ads (LSA)',  body: 'We optimize your LSA profile, manage bid strategy, dispute fake leads, and stack reviews so you stay in the top 3 — where 70% of clicks happen.' },
    { title: 'Meta + Google PPC',                body: 'Replacement-intent targeting, not impression hunting. Every dollar tracked from click → call → contract → revenue.' },
    { title: 'Roofing-Optimized Websites',       body: "Built for conversion, not pretty: instant quote calculators, financing widgets, before/afters, and trust badges. Page speed under 2 seconds." },
    { title: 'Storm Restoration Funnels',        body: "Hail-map landing pages, door-hanger QR codes, and urgent-restoration ad creatives that activate within hours of severe weather." },
    { title: 'Local SEO & Maps Domination',      body: 'Service-area pages for every city you cover. Citation building. Review generation. The slow-but-permanent lead flow that ad spend can\'t replicate.' },
    { title: 'Reputation & Review Engine',       body: 'Automated review requests after every job. AI-drafted responses to negative reviews. Brand monitoring across HomeAdvisor, Yelp, BBB, Angi.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'Real US roofers, real revenue',
  resultHighlight: {
    label: 'FEATURED CLIENT',
    name: 'Apex Roofing & Restoration',
    detail: 'Residential + Storm Restoration · Dallas–Fort Worth, TX',
    quote:
      "We were spending $14k/month with another agency for 25 leads. With Growth Escalators, we're spending $9k and getting 80+ qualified leads — half of which book the same week. Our crews are booked six weeks out for the first time in three years.",
    metrics: [
      { value: '+220%', label: 'Booked replacements (90 days)' },
      { value: '$67',   label: 'Cost per qualified lead'         },
      { value: '6.4×',  label: 'Return on ad spend'              },
    ],
  },

  process: [
    { step: '01', title: 'Free Lead Audit',     body: "A 30-minute call. We pull your Google Ads, LSA, and analytics, find exactly where leads are leaking, and tell you what we'd fix in week one." },
    { step: '02', title: 'Custom 90-Day Plan',  body: 'Within 5 business days you get a written plan: targeted zip codes, budget split, weekly KPIs, and the contract math we\'ll be accountable to.' },
    { step: '03', title: 'Launch in 14 Days',   body: 'Tracking, ad accounts, AI lead-response, and landing pages all live within two weeks. Most clients see their first booked appointment in week one.' },
    { step: '04', title: 'Scale Profitably',    body: 'Once cost-per-replacement is locked in, we expand to neighboring service areas, more creative angles, and storm-readiness — month after month.' },
  ],

  whyUs: [
    { title: 'Roofing-only on this team',        body: "We don't dilute attention with restaurants or chiropractors. Our roofing pod has run over $4M in roofing-only ad spend." },
    { title: 'You own everything',                body: "Every ad account, pixel, landing page, and tracking number is created in your name. Fire us and you walk away with all assets — most agencies hold them hostage." },
    { title: 'Live revenue dashboard',            body: "Real-time view of leads, set appointments, signed contracts, and revenue attributed to each campaign. No 30-page PDF reports — just the numbers that matter." },
    { title: 'Performance contracts available',   body: 'For qualified contractors doing $1M+ annually, we can structure pay-per-lead or pay-per-appointment deals. Skin in the game.' },
  ],

  faqs: [
    { q: 'How long before I see new booked jobs?',   a: 'Most US roofing clients see their first booked replacement within 14 days of launch. Predictable, scalable lead flow typically stabilizes by week 6 once we have enough conversion data to optimize.' },
    { q: "What's the typical investment?",            a: 'Most contractors invest $5k–$15k/month total (services + ad spend) for residential. Storm restoration and commercial roofing are quoted higher. We\'ll give you exact numbers on the audit call based on your market and revenue goals.' },
    { q: 'Do you work outside Texas / [my state]?',   a: 'Yes — we run roofing campaigns across all 50 states. We also factor in state-specific licensing requirements and seasonal patterns when we plan budget allocation.' },
    { q: 'Do you handle storm restoration too?',       a: 'Absolutely — it\'s one of our highest-performing verticals. We have NOAA-data-driven automation that activates storm campaigns within hours of hail or wind events.' },
    { q: 'Can I keep my current marketing person?',    a: 'Yes. We work alongside in-house marketing teams and other contractors all the time. We\'ll either own the channels we run or train your team to operate the system we build.' },
    { q: 'What happens if I want to leave?',           a: '30-day notice. You keep all your ad accounts, landing pages, tracking infrastructure, and CRM data. No lock-in, no claw-backs.' },
  ],

  finalCta: {
    title: 'Ready to keep your crews booked all year?',
    subhead: "Get a free, no-obligation lead audit. We'll tell you exactly what's working, what's leaking, and the three highest-ROI fixes — whether you hire us or not.",
    ctaLabel: 'Get My Free Lead Audit',
  },

  videoTestimonialsTag: 'HEAR FROM ROOFERS',
  videoTestimonialsHeadline: 'Real contractors, real revenue',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them scale.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from your roofing clients here.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Roofing Lead',
    headline: "Let's see what's possible for your roofing business",
    subhead: "Tell us a bit about your operation and we'll get back within 24 hours with your free lead audit.",
    tag: "BOOK YOUR FREE AUDIT",
  },
}
