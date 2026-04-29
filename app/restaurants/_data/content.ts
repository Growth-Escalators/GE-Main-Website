/**
 * All copy and data for the /restaurants landing page (cafés, restaurants, cloud kitchens).
 *
 * EDIT this file to change anything visible on the page.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const RESTAURANTS_CONTENT: LandingContent = {
  industryLabel: 'Restaurant',

  hero: {
    badge: 'TRUSTED BY 30+ CAFÉS, RESTAURANTS & CLOUD KITCHENS',
    headlineLines: ['Full Tables.', 'Higher Margins.'],
    cyclingWords: [
      'Built for cafés.',
      'Built for fine dining.',
      'Built for cloud kitchens.',
      'Built for QSR chains.',
      'Built for restaurant groups.',
    ],
    subhead:
      "We help cafés, restaurants, and cloud kitchens fill seats at peak hours, slash dependence on Swiggy/Zomato/UberEats, and turn first-time diners into regulars — using AI-powered marketing built specifically for hospitality.",
    primaryCta: { label: 'Book a Free Growth Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '🍽️', value: '30+',  label: 'Brands Served'        },
      { emoji: '🪑', value: '+38%', label: 'Avg. Cover Increase'  },
      { emoji: '💰', value: '−42%', label: 'Lower Delivery Fees'  },
    ],
  },

  painPointsTag: 'IF YOU NOD AT ANY OF THESE',
  painPointsHeadline: "What's slowly draining your restaurant's margins",
  painPoints: [
    { emoji: '🪑', title: 'Empty tables on weeknights',         body: "Your weekends are packed but Tuesday lunch is dead. You\'re losing money on staff and rent during the slow hours that should be your easiest profit." },
    { emoji: '📱', title: 'Swiggy & Zomato are eating your margin', body: '25–35% commissions, expensive ad placements, and customers who never come back to dine in. The aggregators own your customer — you don\'t.' },
    { emoji: '🤳', title: 'Inconsistent social presence',         body: "You know Instagram and Reels matter, but between running shifts and managing inventory there's no time to script, shoot, edit, and post 5 days a week." },
    { emoji: '👻', title: 'First-time diners never return',        body: "Most restaurants get 60% of revenue from repeat customers — but yours has no system to bring people back after their first visit. You're constantly buying new customers." },
  ],

  aiAdvantage: {
    tag: 'AI-FIRST RESTAURANT MARKETING',
    headline: 'Restaurants are AI\'s biggest opportunity. We saw it first.',
    subhead:
      "Hospitality is data-rich and time-poor — exactly the conditions where AI breaks the old playbook. We built our restaurant pod on it from day one.",
    cards: [
      { emoji: '⏰', title: 'AI demand-forecasting + dynamic ads', body: 'Our AI predicts which day-parts and weather patterns drive your slow seats, then auto-launches geo-fenced "hungry now" ad bursts targeting people within 2 km — only when you need them.' },
      { emoji: '📸', title: 'AI menu + dish content engine',       body: "Upload one photo of a dish — AI generates SEO-optimized descriptions, Reel scripts, ad creative variants, and TripAdvisor copy for every menu item. Five days of content in one afternoon." },
      { emoji: '💬', title: 'AI WhatsApp loyalty automation',      body: 'Every diner gets segmented by visit frequency and spend. AI sends them the right offer at the right time — birthday vouchers, weekday come-back nudges, group-booking incentives.' },
      { emoji: '⭐', title: 'AI review reply + sentiment alerts',  body: "Negative review at 11pm? AI drafts the right empathetic response and pings your manager. Aggregate sentiment trends emailed weekly so you spot kitchen issues before they hit Yelp." },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete growth engine for hospitality',
  servicesSubhead: 'Six services, one outcome: full tables at peak hours and customers who come back.',
  services: [
    { title: 'Geo-Fenced "Hungry Now" Ads',     body: 'Meta + Google ads triggered by location, time, and weather. Reach people 2km away during their actual hunger window — not before, not after.' },
    { title: 'Direct-Order Websites',            body: 'Beautiful, branded ordering experiences that bypass Swiggy/Zomato. Save 25–35% on every order. Own your customer data, not the aggregator.' },
    { title: 'Reel & UGC Content Engine',        body: '8–12 Reels per month, scripted by our AI and shot by our local team (or remote-coached for non-Indian markets). Trending sounds, on-brand, ready to post.' },
    { title: 'Reservation & Loyalty Funnels',    body: 'WhatsApp + email automation that turns first-timers into 6×/year regulars. Birthday flows, group-booking offers, lapsed-customer win-back sequences.' },
    { title: 'Local SEO & Maps',                 body: 'Rank for "best cafe near me", "rooftop dinner [city]", "[cuisine] near [landmark]". Reviews, Maps optimization, dish-level SEO content.' },
    { title: 'Influencer & UGC Campaigns',       body: 'Curated micro-influencer trips, dish-tasting events, and seeded UGC programs. We handle outreach, brief, content rights, and amplification.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'Restaurants we\'ve helped grow',
  resultHighlight: {
    label: 'FEATURED CLIENT',
    name: 'Cafe Lattéria',
    detail: 'Specialty Coffee + All-Day Dining · Jaipur',
    quote:
      "We were 100% reliant on Zomato for delivery and our weekday dine-in was dead. Within 90 days, our direct-order website handled 40% of online orders (saving us 30% on commissions), and we filled an extra 80–100 weeknight covers from a single Reels-led campaign.",
    metrics: [
      { value: '+38%', label: 'Weeknight covers (60 days)' },
      { value: '40%',  label: 'Orders moved off aggregators' },
      { value: '5.7×', label: 'Return on ad spend'           },
    ],
  },

  process: [
    { step: '01', title: 'Free Growth Audit',  body: "30-minute call. We look at your aggregator data, social presence, table-yield, and review velocity — and identify exactly where your hidden margin is." },
    { step: '02', title: '60-Day Roadmap',      body: "Within a week, you get a written plan: which day-parts to target, what content to launch, what loyalty flows to set up, and the unit-economics math." },
    { step: '03', title: 'Build & Launch',      body: 'Direct-order site, ad accounts, AI content engine, and WhatsApp loyalty go live within 21 days. Most clients see weeknight cover lift in week 3.' },
    { step: '04', title: 'Compound the Growth', body: "Once base retention and ad ROAS are proven, we layer in influencer programs, second-location playbooks, and group-event funnels." },
  ],

  whyUs: [
    { title: 'Hospitality-only on this team',     body: "We don't take roofing or insurance clients in this pod. Our team has run marketing for 30+ F&B brands across India, the UAE, and the US." },
    { title: 'Margin-first, not impression-first', body: 'We optimize for profit per cover, not vanity metrics. We\'ll happily turn off campaigns that don\'t pay back even if they look good in a report.' },
    { title: 'In-house Reels production',         body: "No outsourced freelancers. Our content team has shot 1,200+ Reels in restaurants and knows how to make a 60-second video sell a ₹450 burger." },
    { title: 'You own everything',                body: "Direct-order website, customer database, ad accounts, content library — all yours, even if we part ways. No agency hostage-taking." },
  ],

  faqs: [
    { q: 'Will this actually reduce my Swiggy/Zomato dependence?', a: "Yes — that's the whole point of the direct-order website + WhatsApp loyalty combo. Most clients move 30–50% of online orders off aggregators within 90 days. You keep the margin AND the customer data." },
    { q: "What's the typical investment?", a: "Most independent cafés and restaurants invest ₹40k–₹1.2L/month total (services + ad spend). Multi-location groups and cloud-kitchen brands are quoted bespoke. We share exact numbers on the audit call once we know your revenue and goals." },
    { q: 'Do you only work in India?', a: 'No — we run F&B campaigns in India, UAE, Singapore, and the US. Our AI content engine adapts to local cuisines, languages, and aggregator landscapes.' },
    { q: 'How do you film Reels for my restaurant?', a: 'For Indian clients in Tier-1/Tier-2 cities, our team comes to you for a half-day shoot every 6–8 weeks. For other markets, we remote-coach your in-house team via scripts, shot lists, and editing templates — most clients find this works just as well.' },
    { q: 'What if my food is great but my service is inconsistent?', a: "We'll tell you. Our AI sentiment monitoring will surface service issues from reviews within days, and we won't scale ad spend on top of broken operations — that just amplifies bad word-of-mouth." },
    { q: 'Can I cancel anytime?', a: '30-day notice. You keep your direct-order website, customer data, all ad accounts, and your content library. We\'re not in the business of trapping clients.' },
  ],

  finalCta: {
    title: 'Ready to fill those weeknight tables?',
    subhead: "Book a free growth audit. We'll review your operation, your aggregator data, and your ad accounts — and tell you the three highest-leverage fixes, no strings attached.",
    ctaLabel: 'Book a Free Growth Audit',
  },

  videoTestimonialsTag: 'HEAR FROM RESTAURANTEURS',
  videoTestimonialsHeadline: 'Real restaurant owners, real growth',
  videoTestimonialsSubhead: 'Tap any short to hear how we helped them scale.',
  videoTestimonials: [
    // Add YouTube Shorts URLs from your restaurant clients here.
  ],

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Restaurant Lead',
    headline: "Let's see what's possible for your restaurant",
    subhead: "Tell us a bit about your operation and we'll get back within 24 hours with your free growth audit.",
    tag: "BOOK YOUR FREE AUDIT",
  },
}
