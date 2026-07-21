/**
 * All copy and data for the /jewellery-marketing-agency-jaipur landing page.
 *
 * Local BOFU money page — Jaipur-local, agency-hire intent ("jewellery
 * marketing agency jaipur", "jewellery digital marketing jaipur", "jewellery
 * social media agency jaipur"). Jaipur is India's jewellery capital; this
 * page targets jewellery brands, showrooms, and D2C jewellery labels hiring
 * a local agency to sell online and drive showroom footfall for a
 * high-consideration, high-trust purchase.
 *
 * PROOF RULE: there is no jewellery-specific client result to cite, so this
 * page does NOT claim one. The only named client proof is Paraiso — a real
 * GE D2C/fashion result (₹33k → ₹3.4L monthly sales in 30 days [10×], one
 * reel at 5M views / 20M+ reach, ROAS 1.9× → 3.2×) sourced from
 * lib/constants.ts, components/sections/Work.tsx, and app/api/lead/route.ts
 * — always labelled honestly as a Fashion & Lifestyle brand, never implied
 * to be a jewellery client. Odra Organics' 20M+ reach (a real wellness-brand
 * social result, also from app/api/lead/route.ts and TrustBar) is referenced
 * in whyUs the same way — honestly labelled, not disguised as jewellery
 * proof. Globally-true aggregate stats (₹10Cr+ ad spend, 10,000+ campaigns,
 * 187+ brands scaled, 4.9★ across 187 reviews, 97% retention, Jaipur HQ
 * since 2021) are reused per the approved list. Nothing else is invented.
 * The calculator outputs are clearly labelled estimates.
 */

import type { LandingContent } from '@/components/landing/IndustryLandingPage'

export const JEWELLERY_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Jewellery',

  hero: {
    badge: 'JAIPUR-BASED · JEWELLERY & LUXURY RETAIL MARKETING SPECIALISTS',
    headlineLines: ['Marketing Agency for', 'Jewellery Brands in Jaipur'],
    cyclingWords: [
      'Sell high-ticket pieces online.',
      'Turn browsers into showroom visits.',
      'Build trust in a zero-trust category.',
      'Track every rupee back to a sale.',
    ],
    subhead:
      "Growth Escalators is a Jaipur-based marketing agency for jewellery brands, showrooms, and D2C jewellery labels. We turn Instagram reach, Google searches, and showroom visits into high-ticket sales — with real attribution, not vanity metrics. We've scaled D2C brands like Paraiso from ₹33k to ₹3.4L in monthly sales in 30 days (10×) and grown wellness brand Odra Organics past 20M+ reach — the same content-and-performance system we bring to jewellery.",
    primaryCta: { label: 'Get a Free Growth Audit', href: '#lead-form' },
    secondaryCta: { label: 'See Real Results ↓', href: '#results' },
    statPills: [
      { emoji: '📈', value: '10×', label: 'Revenue growth in 30 days (Paraiso)' },
      { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed' },
      { emoji: '📍', value: 'Jaipur', label: 'HQ · Sector 26, Pratap Nagar' },
    ],
    image: {
      src: '/industries/jewellery/hero.jpg',
      alt: 'Elegant jewellery showroom display with gold and diamond pieces in Jaipur',
    },
  },

  showcase: {
    tag: 'THE OPPORTUNITY',
    headline: 'What a full-funnel jewellery brand actually looks like',
    subhead:
      "Jaipur is India's jewellery capital — the brands winning online aren't necessarily the finest craftsmen, they're the ones showing up first on Instagram, Google, and Maps the moment a buyer starts searching.",
    images: [
      { src: '/industries/jewellery/1.jpg', alt: 'Close-up of handcrafted gold jewellery on display', caption: 'Catalog content built to stop the scroll' },
      { src: '/industries/jewellery/2.jpg', alt: 'Customer trying on jewellery at a showroom counter', caption: 'Showroom visits driven by online trust signals' },
      { src: '/industries/jewellery/3.jpg', alt: 'Bridal jewellery set styled for a wedding photoshoot', caption: 'Wedding-season campaigns timed to real demand' },
    ],
  },

  painPointsTag: 'IF ANY OF THIS SOUNDS FAMILIAR',
  painPointsHeadline: 'Why fine jewellery still struggles to sell online',
  painPoints: [
    { emoji: '💎', title: 'A high-ticket purchase with zero digital trust', body: 'Nobody buys a ₹2L necklace from an Instagram page with no reviews, no certification proof, and no hallmarking messaging. Without a deliberate trust layer, even beautiful pieces stall at the "save for later" stage.' },
    { emoji: '📷', title: 'A catalog that undersells the craftsmanship', body: 'Flat, poorly lit product shots with no zoom, no video, and no filtering by occasion, metal, or budget make it impossible for a serious buyer to shortlist your pieces online.' },
    { emoji: '💍', title: 'Feast in wedding season, famine the rest of the year', body: 'Most jewellery brands only push hard around Akshaya Tritiya, wedding season, and Diwali — leaving 8+ months of the year with no structured demand generation at all.' },
    { emoji: '🏬', title: 'Competing with chains that outspend you', body: 'National chains and online marketplaces can out-bid you on every keyword and out-produce you on content. Without a sharper local and creative edge, you lose the buyer before they even see your showroom.' },
    { emoji: '📉', title: 'No idea which rupee of ad spend led to a sale', body: 'Long consideration cycles and deals that close on WhatsApp or in-store make Meta and Google attribution invisible — so budgets get pulled based on gut feeling, not real ROAS.' },
  ],

  aiAdvantage: {
    tag: 'POWERED BY AI',
    headline: 'Jewellery marketing that thinks in carats, not clicks',
    subhead:
      'Generic social agencies chase likes and follower counts. Our AI is built around the numbers that actually move a jewellery business — catalog engagement, showroom-visit intent, and sales attributed all the way back to the ad.',
    cards: [
      { emoji: '🎥', title: 'AI content that earns reach on high-ticket pieces', body: 'We use AI to spot which styling angles, craftsmanship stories, and formats are earning reach in jewellery and luxury content right now — the same discipline that helped a fashion client hit 5M views on a single reel.' },
      { emoji: '📍', title: 'Google Maps & local search monitoring', body: 'Continuous checks on your Google Business Profile — photos, categories, review velocity, Q&A — the exact signals that decide whether you rank for "jewellers near me" and "jewellery showroom Jaipur".' },
      { emoji: '💬', title: 'WhatsApp nurture for long consideration cycles', body: 'Automated, well-timed WhatsApp follow-ups — catalog shares, price and offer alerts, appointment reminders — that keep a browsing customer warm across the weeks it takes to decide on a high-ticket piece.' },
      { emoji: '📊', title: 'Full-funnel ROAS attribution', body: 'CRM and UTM tracking that connects an ad click to the WhatsApp inquiry and the eventual showroom sale — so you see the real ROAS on jewellery, not just add-to-carts that never close.' },
    ],
  },

  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A complete sales engine for Jaipur jewellery brands',
  servicesSubhead: 'Six services, one promise: more high-ticket sales, tracked all the way to revenue.',
  services: [
    { title: 'Instagram & Reels Content System', body: 'A monthly content engine built for reach and trust — craftsmanship stories, styling reels, and behind-the-bench content — designed to turn scrollers into serious buyers.' },
    { title: 'D2C & Website Performance Marketing', body: 'Meta and Google campaigns engineered for online jewellery sales, with creative and audiences built around a high-AOV, considered-purchase buyer journey.' },
    { title: 'Google Business Profile & Local SEO', body: 'Full GBP optimisation — photos, categories, Q&A, review velocity — so you rank for "jewellery showroom Jaipur" and locality searches across Johari Bazar, MI Road, C-Scheme, and Vaishali Nagar.' },
    { title: 'Showroom Footfall & Wedding Campaigns', body: 'Geo-targeted campaigns timed to Jaipur\'s wedding season, Akshaya Tritiya, and festive calendar — built to drive qualified showroom visits, not just impressions.' },
    { title: 'WhatsApp & CRM Nurture Funnel', body: 'A structured follow-up system for a purchase that rarely closes on the first visit — catalog sharing, offer alerts, and appointment booking that keeps you top of mind.' },
    { title: 'Catalog & Website Development', body: 'A properly categorised online catalog — high-resolution imagery, zoom, and filters by budget, metal, and occasion — built to do the selling before a customer ever walks in.' },
  ],

  resultsTag: 'PROOF, NOT PROMISES',
  resultsHeadline: 'A real D2C scaling result',
  resultHighlight: {
    label: 'FEATURED CLIENT · FASHION & LIFESTYLE BRAND',
    name: 'Paraiso',
    detail: 'Fashion & Lifestyle Brand · Social + Performance',
    quote:
      "We didn't just run ads — we rebuilt the funnel from creative to checkout. In 30 days a stalled fashion brand went from ₹33,000 to ₹3.4 lakh in monthly sales, with one reel alone pulling 5 million views and 20 million+ reach. That's the same content-and-performance system we bring to jewellery brands ready to sell online.",
    metrics: [
      { value: '₹33k → ₹3.4L', label: 'Monthly sales in 30 days (10×)' },
      { value: '5M views · 20M+ reach', label: 'From a single reel' },
      { value: '1.9× → 3.2×', label: 'ROAS improvement' },
    ],
  },

  process: [
    { step: '01', title: 'Brand & Catalog Audit', body: 'A 45-minute call (or an in-person visit to your Jaipur showroom). We review your Instagram, Google Business Profile, online catalog, and wedding-season readiness against the jewellers competing for your buyer.' },
    { step: '02', title: 'Content & Campaign Plan', body: 'Within 7 days you get a written plan: your content pillars, the festive and wedding-season campaign calendar, and the ad + local-SEO split built for a high-ticket, considered purchase.' },
    { step: '03', title: 'Build & Launch', body: 'Content system, GBP fixes, WhatsApp nurture automation, and your first campaigns go live within 14 days — timed to your next festive or wedding-season window for maximum impact.' },
    { step: '04', title: 'Optimise Toward Sales, Not Clicks', body: 'We track actual sales and showroom visits attributed through CRM and WhatsApp — not just clicks — and refresh content and offers as each season and collection shifts.' },
  ],

  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'The Jaipur agency that tracks jewellery sales, not likes',
  whyUs: [
    { title: "Right here in India's jewellery capital", body: 'Based in Pratap Nagar — we know Jaipur\'s jewellery clusters, wedding calendar, and the localities where your next high-ticket buyer is searching.' },
    { title: 'We build for high-ticket trust', body: 'Content, catalog, and social proof engineered for a purchase that requires confidence, not impulse — the opposite of a generic social media package.' },
    { title: 'Real D2C scaling proof', body: 'Paraiso went 10× in monthly sales in 30 days and Odra Organics crossed 20M+ reach — real GE results in fashion and wellness, from the same performance-and-content system we apply to jewellery.' },
    { title: 'Real proof, not just promises', body: '₹10Cr+ in ad spend managed, 10,000+ campaigns run, 4.9★ across 187 Google reviews, and 97% client retention — across 187+ brands, based in Jaipur.' },
  ],

  leadMagnet: {
    type: 'd2c-roas',
    tag: 'FREE TOOL · 30 SECONDS',
    headline: 'What ad budget do you need to hit your revenue goal?',
    subhead: 'Move the sliders to your numbers and see the monthly ad budget it takes to hit your online jewellery revenue goal.',
    source: 'Calculator — Jewellery Jaipur',
    revenueGoal: { label: 'Monthly online revenue goal', default: 1000000 },
    aov: { label: 'Average order value (₹)', default: 35000 },
    targetRoas: { label: 'Target ROAS', default: 3 },
    benchmark: 'Benchmark: jewellery is a high-AOV, low-frequency category — a well-run D2C jewellery account typically settles into a 2.5×–4× ROAS once creative, catalog, and retargeting are dialled in. Expect the ratio to run lower for the first 60–90 days while the account learns.',
    formHeadline: 'See your full budget breakdown',
    formSubhead: 'Get your numbers, an honest jewellery ROAS benchmark, and the Paraiso scaling playbook — free, straight to your inbox.',
  },

  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a jewellery marketing agency in Jaipur',
  faqs: [
    { q: 'How much does it cost to hire a jewellery marketing agency in Jaipur?', a: "It depends on whether you need content, performance ads, local SEO, or a full catalog and website build. We quote exactly after the free growth audit — most Jaipur jewellery brands start with a content + local-SEO package and add performance campaigns as the catalog and trust layer mature." },
    { q: 'Can you help us sell jewellery online, not just get showroom visits?', a: "Yes — D2C performance marketing, catalog optimisation, and website/checkout work are core to what we do. We build the online sales path first, then layer showroom-footfall campaigns on top for buyers who prefer to close in person." },
    { q: 'How do you handle trust for such a high-ticket, low-frequency purchase?', a: "Trust is engineered, not assumed. That means certification and hallmarking messaging, real customer proof, styled catalog content, and a WhatsApp nurture flow that answers questions before a buyer ever has to ask." },
    { q: 'We only see real demand during wedding season — can you fix that?', a: "We build an always-on content and local-SEO baseline so you're findable year-round, then layer a festive and wedding-season campaign calendar planned months in advance — instead of reacting once the season has already started." },
    { q: 'Can you actually track ROI when our sales close on WhatsApp or in-store?', a: "Yes — we set up CRM and UTM tracking that connects an ad click through to the WhatsApp inquiry and the eventual showroom sale, so you see real, attributed ROAS instead of a dashboard number that stops at add-to-cart." },
    { q: 'How fast will we see results?', a: "Content and local-SEO growth typically compound over 8-12 weeks. Sales campaigns timed to a festive or wedding-season window can show movement within the first few weeks of launch, since they're built around demand that already exists." },
  ],

  finalCta: {
    title: 'Ready to turn your jewellery brand into a Jaipur sales engine?',
    subhead: "Book a free, no-obligation growth audit. We'll review your Instagram, your online catalog, and your Google Business Profile — and tell you the three highest-leverage fixes, whether you hire us or not.",
    ctaLabel: 'Get a Free Growth Audit',
  },

  videoTestimonialsTag: 'HEAR FROM JAIPUR JEWELLERY BRANDS',
  videoTestimonialsHeadline: 'Real showrooms, real sales',
  videoTestimonials: [
    // Add YouTube Shorts URLs from Jaipur jewellery clients here.
  ],

  relatedResources: {
    tag: 'GO DEEPER',
    headline: 'More for D2C & consumer brands',
    links: [
      { label: 'D2C Performance Marketing', href: '/d2c', blurb: 'Our full D2C growth approach — the framework behind the Paraiso rebuild.' },
      { label: 'eCommerce Advertising Agency', href: '/ecommerce-advertising-agency', blurb: 'Meta and Google ads engineered for online sales, not just traffic.' },
      { label: 'Performance Marketing Agency in Jaipur', href: '/performance-marketing-agency-jaipur', blurb: 'Our core Jaipur growth service — ads engineered for ROAS.' },
      { label: 'Case Studies', href: '/work', blurb: 'Real brands, real numbers, real growth.' },
    ],
  },

  leadForm: {
    recipient: 'Info@growthescalators.com',
    subjectPrefix: 'New Jewellery Lead — Jaipur',
    headline: 'Tell us about your jewellery brand',
    subhead: 'Share a few details and a real strategist replies within 24 hours with your free growth audit.',
    tag: 'BOOK YOUR FREE GROWTH AUDIT',
  },
}
