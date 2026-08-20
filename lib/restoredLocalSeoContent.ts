import type { LandingContent } from '@/components/landing/IndustryLandingPage'

/**
 * Restored Jaipur-local BOFU pages that previously earned search impressions.
 *
 * Proof rule: none of these pages claims a category-specific client result.
 * Cross-category proof is explicitly labelled as such. Aggregate GE proof is
 * reused only where it is already part of the approved site-wide proof set.
 */

export const RESTAURANT_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Restaurants',
  hero: {
    badge: 'JAIPUR-BASED · RESTAURANT & F&B GROWTH MARKETING',
    headlineLines: ['Restaurant Marketing Agency', 'in Jaipur'],
    cyclingWords: [
      'Win more “near me” searches.',
      'Turn Reels into table bookings.',
      'Reduce aggregator dependence.',
      'Track campaigns to real orders.',
    ],
    subhead:
      'Growth Escalators helps Jaipur restaurants, cafés, cloud kitchens and F&B brands turn Google Maps discovery, Instagram attention and paid media into measurable bookings and orders. The focus is not follower growth for its own sake — it is local visibility, stronger creative, repeat demand and cleaner attribution.',
    primaryCta: { label: 'Get a Free Restaurant Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the Growth System ↓', href: '#results' },
    statPills: [
      { emoji: '📍', value: 'Jaipur', label: 'Local growth team' },
      { emoji: '📣', value: '10,000+', label: 'Campaigns run across GE' },
      { emoji: '⭐', value: '4.9/5', label: 'Google rating across GE' },
    ],
    variant: 'bold',
  },
  painPointsTag: 'WHY GOOD RESTAURANTS STILL STAY HALF-FULL',
  painPointsHeadline: 'The problem is usually discovery, conversion or repeat demand',
  painPoints: [
    {
      emoji: '📍',
      title: 'You disappear when people search nearby',
      body: 'A strong kitchen can still lose to a weaker competitor that has a better Google Business Profile, more recent reviews, stronger photos and clearer category signals. Local intent is often won before a customer ever reaches Instagram.',
    },
    {
      emoji: '🍽️',
      title: 'Your content looks good but does not create intent',
      body: 'Pretty food photos are not automatically persuasive. The content has to communicate atmosphere, signature dishes, social proof, occasions, price expectations and a reason to visit now.',
    },
    {
      emoji: '🛵',
      title: 'Aggregators own the customer relationship',
      body: 'When every repeat order starts on a marketplace, margins and customer data stay outside your control. A healthier growth system creates direct discovery and a reason for customers to return through owned channels.',
    },
    {
      emoji: '📉',
      title: 'Boosted posts create activity, not attribution',
      body: 'Without UTMs, booking links, call tracking, campaign-specific offers and a simple reporting layer, it becomes impossible to know which campaign influenced a reservation, order or repeat visit.',
    },
    {
      emoji: '⭐',
      title: 'Reviews happen randomly',
      body: 'Review velocity is too important to leave to chance. A structured post-visit flow can make it easier for happy guests to share feedback while giving the team a way to recover poor experiences privately.',
    },
  ],
  aiAdvantage: {
    tag: 'AI + LOCAL INTENT',
    headline: 'A restaurant growth system that learns what actually fills seats',
    subhead:
      'We use automation and AI to speed up research, creative iteration and reporting — while keeping positioning, offers and campaign decisions human-reviewed.',
    cards: [
      {
        emoji: '🔎',
        title: 'Local demand and competitor monitoring',
        body: 'Track the searches, offers, review patterns and content angles competing restaurants are using across Google and social so the next campaign is based on local demand rather than guesswork.',
      },
      {
        emoji: '🎬',
        title: 'Faster creative testing',
        body: 'Turn one shoot into multiple hooks, edits and formats around dishes, ambience, chef stories, occasions and offers, then use performance data to decide what deserves more spend.',
      },
      {
        emoji: '💬',
        title: 'WhatsApp and CRM follow-up',
        body: 'Capture high-intent enquiries from parties, events, catering and reservations, then route them into a structured follow-up instead of leaving warm demand scattered across DMs and phone calls.',
      },
      {
        emoji: '📊',
        title: 'One reporting view',
        body: 'Bring paid media, local discovery and lead actions into one operating view so the team can optimise toward bookings, orders and repeat demand — not isolated platform metrics.',
      },
    ],
  },
  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'Restaurant marketing built around local demand and repeat customers',
  servicesSubhead: 'The right mix depends on whether you need more discovery, more bookings, more delivery orders or stronger repeat demand.',
  services: [
    {
      title: 'Google Maps & Local SEO',
      body: 'Google Business Profile optimisation, local landing-page support, category and photo hygiene, review workflows and local-search content designed to strengthen discovery for high-intent Jaipur searches.',
    },
    {
      title: 'Meta & Google Advertising',
      body: 'Campaigns for launches, weekday demand, seasonal menus, events, delivery, catering and table bookings — structured around measurable actions rather than generic reach.',
    },
    {
      title: 'Reels & Social Creative System',
      body: 'Content pillars and production briefs covering signature dishes, ambience, preparation, people, social proof and occasions, with multiple hooks tested from the same production day.',
    },
    {
      title: 'Booking & Order Conversion',
      body: 'Landing pages, click-to-call, WhatsApp, reservation links and offer flows designed to reduce friction between discovering the restaurant and taking the next action.',
    },
    {
      title: 'Review & Reputation Engine',
      body: 'A repeatable post-visit review process, response guidance and reputation monitoring so local trust grows alongside campaign spend.',
    },
    {
      title: 'Retention & Direct Customer Growth',
      body: 'Simple CRM and WhatsApp journeys for repeat visits, events, menu launches and owned customer communication so more revenue comes from customers you already earned.',
    },
  ],
  resultsTag: 'PROOF, LABELLED HONESTLY',
  resultsHeadline: 'The performance system already works across consumer brands',
  resultHighlight: {
    label: 'CROSS-CATEGORY PROOF · D2C FASHION, NOT A RESTAURANT CLIENT',
    name: 'Paraiso',
    detail: 'Fashion & Lifestyle · Creative + Performance',
    quote:
      'For Paraiso, Growth Escalators combined creative iteration, funnel work and performance media to move monthly sales from ₹33,000 to ₹3.4 lakh in 30 days, while ROAS improved from 1.9× to 3.2×. We do not present that as restaurant proof; it demonstrates the same discipline of creative testing, conversion work and measurement that we bring to F&B growth.',
    metrics: [
      { value: '10×', label: 'Monthly sales growth in 30 days' },
      { value: '1.9× → 3.2×', label: 'ROAS improvement' },
      { value: '5M', label: 'Views on one winning reel' },
    ],
  },
  processTag: 'HOW WE WORK',
  processHeadline: 'Start with the constraint, not a social-media package',
  process: [
    {
      step: '01',
      title: 'Local discovery audit',
      body: 'We review Google Maps, reviews, search visibility, social creative, offers, booking friction and the Jaipur competitors appearing beside you.',
    },
    {
      step: '02',
      title: 'Choose the growth objective',
      body: 'Table bookings, delivery, catering, event enquiries and repeat visits need different campaigns. We define the primary commercial outcome before selecting channels.',
    },
    {
      step: '03',
      title: 'Build the acquisition path',
      body: 'Fix the profile, landing page, tracking, booking or WhatsApp path and creative system before adding unnecessary media spend.',
    },
    {
      step: '04',
      title: 'Optimise from real actions',
      body: 'Review what produced calls, directions, bookings, enquiries and orders, then shift budget and creative toward the combinations that produce useful demand.',
    },
  ],
  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'Jaipur context with performance-marketing discipline',
  whyUs: [
    {
      title: 'Local enough to understand the market',
      body: 'We are based in Jaipur, which matters when your outcome depends on locality-level intent, nearby competition, seasonality and real customer behaviour rather than national averages.',
    },
    {
      title: 'Performance and creative sit together',
      body: 'The person analysing media does not work in isolation from the creative and conversion problem. That makes it faster to diagnose whether the bottleneck is the ad, offer, page or follow-up.',
    },
    {
      title: 'No invented F&B case study',
      body: 'We would rather show honestly labelled cross-category proof and build a restaurant-specific baseline from your actual numbers than manufacture a restaurant success story we did not earn.',
    },
    {
      title: 'A broader operating system when needed',
      body: 'Growth Escalators can connect performance marketing, web development, SEO, automation and creative instead of forcing a restaurant to coordinate five separate vendors.',
    },
  ],
  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Hiring a restaurant marketing agency in Jaipur',
  faqs: [
    {
      q: 'What does a restaurant marketing agency in Jaipur actually do?',
      a: 'For most restaurants it should cover the full local journey: Google Maps and local SEO, social creative, Meta or Google campaigns, reservation or order conversion, review generation, and measurement. The exact mix should depend on whether your priority is dine-in, delivery, events, catering or repeat visits.',
    },
    {
      q: 'Can you improve our Google Maps ranking?',
      a: 'We can improve the controllable inputs around your Google Business Profile and local-search presence: categories, information completeness, photos, review workflows, local relevance, landing-page support and ongoing monitoring. No legitimate agency can guarantee a specific Maps position.',
    },
    {
      q: 'Do you only handle social media for restaurants?',
      a: 'No. Social is one part of the system. We also work on paid acquisition, local SEO, conversion pages, WhatsApp or booking flows, tracking and retention so content has a commercial path after the view.',
    },
    {
      q: 'Can you reduce our dependence on Swiggy or Zomato?',
      a: 'The goal is not necessarily to remove aggregators; they are valuable discovery and fulfilment channels. We can build stronger owned discovery, direct reservation and repeat-customer systems so the aggregator is not your only customer relationship.',
    },
    {
      q: 'How do you track restaurant marketing ROI?',
      a: 'We use the cleanest signals available for your setup: tracked booking links, call and WhatsApp actions, UTMs, offer codes, landing-page conversions, CRM records and platform data. Offline attribution is never perfect, so reporting should clearly separate measured actions from estimates.',
    },
    {
      q: 'How quickly can a restaurant see results?',
      a: 'Paid campaigns can generate learnings quickly when the offer and conversion path are ready. Local SEO and review momentum take longer and compound over time. We set separate expectations for immediate demand and longer-term discovery rather than blending them into one promise.',
    },
    {
      q: 'Do you work with cafés, cloud kitchens and bars too?',
      a: 'Yes, if the commercial objective is clear. The strategy changes by model: a café may prioritise local discovery and repeat visits, a cloud kitchen may prioritise profitable order acquisition, and a venue-led business may focus on reservations and events.',
    },
    {
      q: 'How do we start?',
      a: 'Start with the free audit. Share your restaurant name, website or Google Business Profile, current marketing channels and the outcome you want more of. We will identify the highest-leverage gaps before recommending a package.',
    },
  ],
  finalCta: {
    title: 'Make the next Jaipur search end at your table.',
    subhead: 'Get a practical audit of local discovery, creative, paid media and booking friction before adding more spend.',
    ctaLabel: 'Get the Free Restaurant Audit',
  },
  videoTestimonials: [],
  leadForm: {
    subjectPrefix: 'Restaurant Marketing Jaipur Lead',
    tag: 'FREE RESTAURANT GROWTH AUDIT',
    headline: 'Tell us where restaurant growth is stuck',
    subhead: 'Share your restaurant, current channels and the outcome you want more of. We will review the acquisition path and come back with the highest-leverage gaps.',
  },
}

export const LAW_FIRM_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Legal & Professional Services',
  hero: {
    badge: 'JAIPUR-BASED · COMPLIANCE-AWARE PROFESSIONAL SERVICES GROWTH',
    headlineLines: ['Law Firm Marketing Agency', 'in Jaipur'],
    cyclingWords: [
      'Build authority without hype.',
      'Win high-intent local discovery.',
      'Turn expertise into useful content.',
      'Measure enquiries, not vanity.',
    ],
    subhead:
      'Growth Escalators helps law firms and other professional-services teams improve discoverability, authority, website conversion and enquiry handling while keeping the marketing approach sensitive to applicable professional advertising and solicitation rules. The objective is credible visibility — not aggressive or misleading promotion.',
    primaryCta: { label: 'Get a Free Visibility Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the Approach ↓', href: '#results' },
    statPills: [
      { emoji: '📍', value: 'Jaipur', label: 'Local strategy team' },
      { emoji: '🧭', value: 'Intent', label: 'Search-led growth focus' },
      { emoji: '🔎', value: 'SEO + Web', label: 'Authority before promotion' },
    ],
    variant: 'bold',
  },
  painPointsTag: 'THE PROFESSIONAL-SERVICES GROWTH PROBLEM',
  painPointsHeadline: 'Expertise is valuable only when the right people can find and trust it',
  painPoints: [
    {
      emoji: '🔎',
      title: 'High-intent searches go to directory pages and larger firms',
      body: 'Potential clients often start with a specific problem or location query. If your site has weak service pages, thin local signals or unclear expertise, the search journey ends elsewhere.',
    },
    {
      emoji: '📄',
      title: 'The website reads like a brochure',
      body: 'A list of practice areas does not answer the questions a serious prospect has: what you handle, who you work with, what the process looks like and how to take the next step.',
    },
    {
      emoji: '🧠',
      title: 'Years of expertise never become searchable content',
      body: 'The knowledge already exists inside the firm, but it stays in calls, notes and case work instead of becoming useful, carefully reviewed explanations that build topical authority.',
    },
    {
      emoji: '⚖️',
      title: 'Generic marketers ignore professional restrictions',
      body: 'Professional services require more care than an ecommerce campaign. Claims, testimonials, outreach and promotional language need review against the rules that apply to the profession and the firm.',
    },
    {
      emoji: '📥',
      title: 'Enquiries arrive with no qualification path',
      body: 'A bare contact form creates back-and-forth. A better intake experience helps the team collect the type of matter, location, urgency and preferred contact route without asking for sensitive information unnecessarily.',
    },
  ],
  aiAdvantage: {
    tag: 'AI WITH HUMAN REVIEW',
    headline: 'Use AI to organise expertise — not fabricate authority',
    subhead:
      'For regulated or reputation-sensitive services, AI should accelerate research, structure and content operations while final claims, advice and publishing decisions remain human-reviewed.',
    cards: [
      {
        emoji: '🗂️',
        title: 'Topic and intent mapping',
        body: 'Cluster real search demand around practice areas, industries, locations and common questions so the site grows as an authority system rather than a collection of disconnected blog posts.',
      },
      {
        emoji: '✍️',
        title: 'Expert-led content workflow',
        body: 'Turn interviews, notes and approved source material into structured drafts faster, then route them through subject-matter review before publishing.',
      },
      {
        emoji: '🧭',
        title: 'Local visibility monitoring',
        body: 'Track how the firm appears across branded search, Google Business Profile surfaces and key local queries, then prioritise the pages and trust signals with the biggest gaps.',
      },
      {
        emoji: '📊',
        title: 'Enquiry-source reporting',
        body: 'Connect forms, calls and tracked contact actions back to the pages and searches that generated them so content decisions are based on useful enquiries rather than traffic alone.',
      },
    ],
  },
  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A credibility-first digital growth system for professional services',
  servicesSubhead: 'We prioritise findability, expertise, usability and enquiry quality before promotional volume.',
  services: [
    {
      title: 'Professional Website & Conversion UX',
      body: 'Clear service architecture, attorney or team profiles, industry pages, enquiry paths, trust signals and technical foundations built around how professional-services buyers evaluate risk.',
    },
    {
      title: 'SEO & Search-Intent Architecture',
      body: 'Service, locality and informational content mapped to distinct search intent, with internal linking and on-page structure that help search engines understand the firm’s areas of expertise.',
    },
    {
      title: 'Thought Leadership Content System',
      body: 'A repeatable process for turning practitioner knowledge into useful articles, explainers, FAQs and updates, with review checkpoints before anything goes live.',
    },
    {
      title: 'Google Business Profile & Local Discovery',
      body: 'Profile hygiene, location consistency, relevant business information and local landing-page support where appropriate for the firm and applicable rules.',
    },
    {
      title: 'LinkedIn & Authority Distribution',
      body: 'Professional, educational distribution of approved insights through company and expert profiles rather than aggressive direct-response tactics.',
    },
    {
      title: 'Analytics & Enquiry Quality Tracking',
      body: 'GA4, Search Console and conversion tracking configured to show which topics and pages create qualified contact actions, with reporting that separates traffic from actual business value.',
    },
  ],
  resultsTag: 'THE STANDARD WE APPLY',
  resultsHeadline: 'Measurement discipline without pretending consumer proof is legal proof',
  resultHighlight: {
    label: 'CROSS-CATEGORY PERFORMANCE PROOF · NOT A LAW-FIRM CASE STUDY',
    name: 'Growth Escalators operating proof',
    detail: 'Performance, web, SEO & conversion systems',
    quote:
      'Across the wider Growth Escalators business we have managed ₹10Cr+ in ad spend and run 10,000+ campaigns. We do not present consumer-brand results as evidence of law-firm outcomes. For professional services, the transferable value is the operating discipline: clear intent mapping, measurement, conversion UX, content systems and accountable execution.',
    metrics: [
      { value: '₹10Cr+', label: 'Ad spend managed across GE' },
      { value: '10,000+', label: 'Campaigns run across GE' },
      { value: '4.9/5', label: 'Google rating across GE' },
    ],
  },
  processTag: 'HOW WE WORK',
  processHeadline: 'Build authority in a way the firm can actually approve',
  process: [
    {
      step: '01',
      title: 'Search & website audit',
      body: 'We map current rankings, service architecture, local visibility, conversion friction and obvious content gaps before recommending new pages or campaigns.',
    },
    {
      step: '02',
      title: 'Compliance boundary',
      body: 'Your firm defines the professional and jurisdictional rules that apply. We design the marketing workflow around those boundaries and flag anything that needs internal or legal review.',
    },
    {
      step: '03',
      title: 'Authority build',
      body: 'Improve priority service pages, expert profiles, local signals and the content workflow so the site answers more of the questions that precede an enquiry.',
    },
    {
      step: '04',
      title: 'Measure enquiry quality',
      body: 'Track useful contact actions and search performance, then expand topics that generate the right type of demand instead of publishing content simply to increase page count.',
    },
  ],
  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'A growth team that is comfortable saying “this needs review”',
  whyUs: [
    {
      title: 'Credibility over exaggerated claims',
      body: 'Professional-services marketing should make expertise easier to discover and evaluate. We avoid fabricated outcomes, sensational claims and tactics that create more reputational risk than commercial value.',
    },
    {
      title: 'SEO, website and analytics in one system',
      body: 'The search strategy is connected to page architecture and conversion measurement, which prevents the common problem of generating traffic that has nowhere useful to go.',
    },
    {
      title: 'Human-reviewed AI workflow',
      body: 'AI can make content operations faster, but it should not invent legal positions, credentials or case outcomes. We use it as an accelerator inside a human review process.',
    },
    {
      title: 'Jaipur-based execution',
      body: 'For firms serving Jaipur and Rajasthan, local search behaviour, office location and regional relevance can be handled by a team operating in the same market.',
    },
  ],
  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Marketing a law firm or professional practice in Jaipur',
  faqs: [
    {
      q: 'Can law firms advertise in India?',
      a: 'Professional advertising and solicitation rules can restrict what advocates and firms may publish or promote. We do not give legal advice on those rules. Your firm should define the applicable compliance boundary, and we build the website, SEO, content and distribution workflow within the material you approve.',
    },
    {
      q: 'What can a law firm marketing agency help with safely?',
      a: 'Common areas include website usability, technical SEO, service-page structure, local business information, analytics, approved educational content, search-intent research and enquiry experience. Any promotional claim or distribution tactic that raises a professional-rule question should be reviewed by the firm before use.',
    },
    {
      q: 'Do you guarantee first-page rankings for lawyers in Jaipur?',
      a: 'No. Legitimate SEO cannot guarantee a specific ranking. We can improve the technical, content, local and authority signals under our control and report transparently on rankings, impressions, clicks and qualified enquiries over time.',
    },
    {
      q: 'Can you write legal content for us?',
      a: 'We can run the research, interviewing, structuring and drafting workflow, but substantive legal positions and professional claims should be reviewed and approved by the firm or a qualified subject-matter expert before publication.',
    },
    {
      q: 'Do you work with CAs and other professional-services firms?',
      a: 'Yes. The same credibility-first system can support accounting, tax, consulting and other professional practices, but the marketing approach must be adapted to the specific professional body and advertising rules that apply.',
    },
    {
      q: 'What should we measure besides website traffic?',
      a: 'Track branded and non-branded search visibility, priority-service rankings, contact actions, enquiry quality, source pages, local discovery and the conversion rate from relevant traffic to useful enquiries. Traffic alone is not a business outcome.',
    },
    {
      q: 'Can LinkedIn help a professional-services firm?',
      a: 'Yes, particularly for distributing approved educational insights and building visible expertise. The content should be useful, professional and consistent with the rules that apply to the practitioner or firm rather than designed as aggressive solicitation.',
    },
    {
      q: 'How do we start?',
      a: 'Share the firm website, priority services, locations and the professional compliance boundaries your team already follows. We will audit search visibility and conversion friction, then propose the highest-priority improvements.',
    },
  ],
  finalCta: {
    title: 'Make expertise easier to find — without turning it into hype.',
    subhead: 'Start with a visibility and website audit built around search intent, credibility and your firm’s review process.',
    ctaLabel: 'Get the Free Visibility Audit',
  },
  videoTestimonials: [],
  leadForm: {
    subjectPrefix: 'Law Firm Marketing Jaipur Lead',
    tag: 'FREE PROFESSIONAL VISIBILITY AUDIT',
    headline: 'Tell us which services you want to be found for',
    subhead: 'Share your website, priority services and locations. We will review search visibility, page structure and enquiry friction without assuming tactics your firm cannot approve.',
  },
}

export const WEDDING_EVENT_JAIPUR_CONTENT: LandingContent = {
  industryLabel: 'Jaipur Weddings & Events',
  hero: {
    badge: 'JAIPUR-BASED · WEDDING & EVENT LEAD GENERATION',
    headlineLines: ['Wedding & Event Marketing', 'Agency in Jaipur'],
    cyclingWords: [
      'Turn inspiration into enquiries.',
      'Qualify destination-wedding leads.',
      'Make your portfolio sell the experience.',
      'Follow up before the lead goes cold.',
    ],
    subhead:
      'Growth Escalators helps Jaipur wedding planners, event companies, venues and celebration brands convert high-intent search and social discovery into qualified enquiries. We connect portfolio-led creative, Meta and Google acquisition, landing pages and WhatsApp follow-up around the moment a couple or family is choosing who to trust with a high-value event.',
    primaryCta: { label: 'Get a Free Lead-Gen Audit', href: '#lead-form' },
    secondaryCta: { label: 'See the Funnel ↓', href: '#results' },
    statPills: [
      { emoji: '💍', value: 'Jaipur', label: 'Destination-wedding market' },
      { emoji: '📣', value: '10,000+', label: 'Campaigns run across GE' },
      { emoji: '🧠', value: 'Full funnel', label: 'Creative to follow-up' },
    ],
    variant: 'bold',
  },
  painPointsTag: 'WHY WEDDING LEADS LEAK',
  painPointsHeadline: 'A beautiful portfolio is not the same thing as a reliable enquiry engine',
  painPoints: [
    {
      emoji: '📸',
      title: 'The portfolio gets attention but not enough context',
      body: 'Prospects need more than highlights. They want to understand style, scale, venues, services, process and whether you have handled celebrations similar to the one they are planning.',
    },
    {
      emoji: '📥',
      title: 'Every enquiry looks equally important',
      body: 'Without basic qualification around city, event type, date, guest count and scope, the team spends too much time chasing enquiries that were never a fit.',
    },
    {
      emoji: '⏱️',
      title: 'High-intent leads go cold in WhatsApp',
      body: 'Wedding buyers compare multiple vendors quickly. Slow replies, missing portfolios and inconsistent follow-up can lose the brief even when the lead came from a good campaign.',
    },
    {
      emoji: '🗓️',
      title: 'Campaigns start after the planning window',
      body: 'Destination weddings and large events are researched months in advance. Marketing built around the event date instead of the planning date arrives too late.',
    },
    {
      emoji: '📉',
      title: 'Cost per lead hides lead quality',
      body: 'A cheap enquiry from the wrong budget, city or service requirement can cost more operationally than a higher-cost lead that is ready to shortlist vendors. The reporting has to include quality, not only volume.',
    },
  ],
  aiAdvantage: {
    tag: 'AI + HUMAN CREATIVE',
    headline: 'Use every event to create more demand for the next one',
    subhead:
      'The strongest wedding marketing system learns from finished events, enquiry quality and winning creative so each season produces a better portfolio and a better acquisition engine.',
    cards: [
      {
        emoji: '🎬',
        title: 'Event-to-content repurposing',
        body: 'Turn one wedding or event into venue stories, design details, transformations, testimonials, planning insights and short-form hooks instead of posting a single recap reel and moving on.',
      },
      {
        emoji: '🎯',
        title: 'Lead-quality feedback loop',
        body: 'Feed back which enquiries matched your target city, budget, service and timing so campaign optimisation is guided by sales quality rather than platform lead count alone.',
      },
      {
        emoji: '💬',
        title: 'Faster WhatsApp response system',
        body: 'Structure the first-response sequence with the right portfolio, questions and booking step so serious leads receive a useful answer quickly while the team keeps the conversation personal.',
      },
      {
        emoji: '📊',
        title: 'Planning-window demand signals',
        body: 'Use search and campaign data to identify when couples and families begin researching Jaipur venues, planners and destination-wedding services, then shift content and media earlier in the cycle.',
      },
    ],
  },
  servicesTag: 'WHAT WE DO',
  servicesHeadline: 'A full enquiry system for wedding and event businesses',
  servicesSubhead: 'Creative gets the attention. The rest of the funnel determines whether that attention becomes a qualified conversation.',
  services: [
    {
      title: 'Meta & Instagram Lead Generation',
      body: 'Campaigns built around portfolio strength, destination intent, event type and creative hooks, with forms or landing pages designed to capture enough context to qualify the enquiry.',
    },
    {
      title: 'Google Search & High-Intent Demand',
      body: 'Capture people actively researching planners, venues and event services in Jaipur or Rajasthan, with landing pages matched to the exact service and search intent.',
    },
    {
      title: 'Portfolio Website & Landing Pages',
      body: 'Case-study style portfolio pages that show the brief, scale, style, venue and execution instead of making prospects infer capability from a gallery alone.',
    },
    {
      title: 'Reels & Creative Content System',
      body: 'A repeatable production and repurposing plan for transformations, décor details, venue moments, process content, expert guidance and social proof.',
    },
    {
      title: 'WhatsApp Lead Qualification',
      body: 'A structured first-response and follow-up path around event date, location, guest count, scope and next step, without making the conversation feel like an automated interrogation.',
    },
    {
      title: 'SEO for Destination Wedding Demand',
      body: 'Service, venue, destination and planning content designed around the questions and searches that happen months before a Jaipur or Rajasthan wedding.',
    },
  ],
  resultsTag: 'PROOF, WITHOUT CATEGORY PRETENDING',
  resultsHeadline: 'The transferable advantage is creative + conversion discipline',
  resultHighlight: {
    label: 'CROSS-CATEGORY PROOF · D2C FASHION, NOT A WEDDING CLIENT',
    name: 'Paraiso',
    detail: 'Fashion & Lifestyle · Creative + Performance',
    quote:
      'Paraiso grew from ₹33,000 to ₹3.4 lakh in monthly sales in 30 days while ROAS improved from 1.9× to 3.2×, with one reel reaching 5 million views. We do not claim those numbers as wedding-industry proof. What transfers is the operating model: find the creative that earns attention, connect it to a conversion path, and measure what actually creates business.',
    metrics: [
      { value: '5M', label: 'Views on one winning reel' },
      { value: '10×', label: 'Monthly sales growth in 30 days' },
      { value: '3.2×', label: 'ROAS after optimisation' },
    ],
  },
  processTag: 'HOW WE WORK',
  processHeadline: 'Build around the planning journey, not the posting calendar',
  process: [
    {
      step: '01',
      title: 'Portfolio & enquiry audit',
      body: 'We review your strongest work, target event types, current lead sources, website journey, response process and where good enquiries tend to fall out.',
    },
    {
      step: '02',
      title: 'Map the buyer journey',
      body: 'Define the search terms, content, trust signals and questions that appear from inspiration through shortlist and consultation, including how far ahead your best clients plan.',
    },
    {
      step: '03',
      title: 'Launch the lead engine',
      body: 'Build the required landing pages, tracking, campaign structure and first-response flow, then launch with enough creative variation to learn what attracts your ideal brief.',
    },
    {
      step: '04',
      title: 'Optimise for qualified conversations',
      body: 'Review lead quality with your team and move budget toward the locations, event types, creative and keywords that create serious consultations rather than the cheapest forms.',
    },
  ],
  whyUsTag: 'WHY GROWTH ESCALATORS',
  whyUsHeadline: 'Jaipur market context, performance thinking and conversion execution',
  whyUs: [
    {
      title: 'Based in the destination itself',
      body: 'Jaipur and Rajasthan have a distinct destination-wedding and celebration market. Local context helps when campaigns depend on venues, seasonality, travel intent and the way buyers compare providers.',
    },
    {
      title: 'Creative is tied to lead quality',
      body: 'We do not judge a reel only by reach. The creative system is reviewed against the kind of enquiries it creates so the portfolio attracts more of the briefs you actually want.',
    },
    {
      title: 'Web, media and automation work together',
      body: 'A high-value event enquiry often crosses Instagram, Google, the website and WhatsApp. We can connect those pieces instead of optimising each platform in isolation.',
    },
    {
      title: 'Honest proof standards',
      body: 'Until we have a publishable wedding-industry case study, we will not invent one. We use clearly labelled cross-category proof and measure the baseline from your own pipeline.',
    },
  ],
  faqsTag: 'QUESTIONS, ANSWERED',
  faqsHeadline: 'Wedding and event marketing in Jaipur',
  faqs: [
    {
      q: 'How do you generate wedding-planning leads in Jaipur?',
      a: 'Usually through a mix of Instagram and Meta discovery, Google Search for active intent, strong portfolio landing pages, destination-wedding SEO and a fast WhatsApp or consultation follow-up. The channel mix depends on your service, target city and average event value.',
    },
    {
      q: 'Can you target destination weddings outside Jaipur?',
      a: 'Yes. Campaigns can be built around couples and families researching Jaipur or Rajasthan from other Indian cities or international markets. The landing page and creative should answer destination-specific questions rather than simply reusing a local Jaipur campaign.',
    },
    {
      q: 'How do you improve lead quality?',
      a: 'Start by defining what a qualified enquiry means, then collect only the information needed to distinguish fit: event type, location, date or month, guest range, required services and an appropriate commercial qualifier. The sales team then feeds outcome quality back into campaign decisions.',
    },
    {
      q: 'Do you create wedding reels and content?',
      a: 'We can build the content system, creative strategy and production briefs, and coordinate editing and repurposing. The goal is to create multiple useful stories from each event rather than a feed made only of highlight montages.',
    },
    {
      q: 'Should a wedding planner invest in SEO or Instagram first?',
      a: 'They solve different stages of demand. Instagram is powerful for inspiration and proof; search captures people actively researching planners, venues and destinations. A strong business usually needs both, sequenced around budget and current demand.',
    },
    {
      q: 'Can you market wedding venues too?',
      a: 'Yes. Venue marketing usually puts more emphasis on local and destination search, visual proof, capacity and event-type pages, enquiry qualification and availability or consultation flows.',
    },
    {
      q: 'How should we measure campaign success?',
      a: 'Track qualified enquiries, consultations, proposal opportunities and booked business where the sales process allows it. Cost per lead is useful, but it should never be the only KPI for a high-value event service.',
    },
    {
      q: 'How do we start?',
      a: 'Share your website or Instagram, strongest portfolio work, target event types, typical geography and how leads are currently handled. We will audit the path from discovery to consultation and identify the largest leaks first.',
    },
  ],
  finalCta: {
    title: 'Turn the next mood-board session into a qualified enquiry.',
    subhead: 'Get a practical audit of your portfolio, acquisition channels, landing pages and follow-up before the next planning season peaks.',
    ctaLabel: 'Get the Free Lead-Gen Audit',
  },
  videoTestimonials: [],
  leadForm: {
    subjectPrefix: 'Wedding Event Marketing Jaipur Lead',
    tag: 'FREE WEDDING LEAD-GEN AUDIT',
    headline: 'Tell us what kind of events you want more of',
    subhead: 'Share your portfolio, target market and current lead sources. We will review where discovery, qualification or follow-up is limiting growth.',
  },
}
