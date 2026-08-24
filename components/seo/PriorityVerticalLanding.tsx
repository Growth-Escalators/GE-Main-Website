import type { Metadata } from 'next'
import IndustryLandingPage, { type LandingContent } from '@/components/landing/IndustryLandingPage'

const SITE = 'https://www.growthescalators.com'

type PageConfig = {
  path: string
  title: string
  description: string
  keywords: string[]
  serviceType: string
  areaServed: string | string[]
  content: LandingContent
}

type PriorityVerticalKey = 'ivfJaipur' | 'orthopedicJaipur' | 'womensClothing'

export const PRIORITY_VERTICAL_PAGES: Record<PriorityVerticalKey, PageConfig> = {
  ivfJaipur: {
    path: '/ivf-marketing-agency-jaipur',
    title: 'IVF Marketing Agency in Jaipur | Fertility Clinic Growth | Growth Escalators',
    description: 'IVF and fertility clinic marketing agency in Jaipur for Google Search, Maps, patient education, landing pages, reputation and measurable consultation acquisition.',
    keywords: ['IVF marketing agency Jaipur', 'fertility clinic marketing Jaipur', 'IVF digital marketing Jaipur', 'IVF lead generation Jaipur', 'fertility clinic SEO Jaipur'],
    serviceType: 'IVF and Fertility Clinic Marketing',
    areaServed: 'Jaipur, Rajasthan, India',
    content: {
      industryLabel: 'IVF & Fertility Clinics in Jaipur',
      hero: {
        badge: 'JAIPUR IVF + FERTILITY · SEARCH · MAPS · CONSULTATION FUNNELS',
        headlineLines: ['IVF Marketing Agency', 'in Jaipur'],
        cyclingWords: ['Win high-intent fertility searches.', 'Build trust before the first call.', 'Improve consultation enquiries.', 'Measure the full patient journey.'],
        subhead: 'Growth Escalators helps IVF centres and fertility clinics in Jaipur build ethical, measurable patient-acquisition systems. We focus on high-intent search, local discovery, doctor and clinic trust, educational landing pages and enquiry follow-up — without making treatment guarantees or using fear-based messaging.',
        primaryCta: { label: 'Book a Free IVF Growth Audit', href: '#lead-form' },
        secondaryCta: { label: 'See Healthcare Proof ↓', href: '#results' },
        statPills: [
          { emoji: '📍', value: 'Jaipur', label: 'Local market focus' },
          { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed overall' },
          { emoji: '🧭', value: 'Full Funnel', label: 'Search to consultation' },
        ],
        image: { src: '/industries/healthcare/1.jpg', alt: 'Doctor consultation representing a fertility clinic patient journey in Jaipur' },
      },
      painPointsTag: 'WHY IVF GROWTH IS DIFFERENT',
      painPointsHeadline: 'Fertility marketing is a trust decision before it is a lead-generation problem',
      painPoints: [
        { emoji: '🔎', title: 'The highest-intent searches go to better-structured competitors', body: 'Patients research clinic location, doctors, treatments, success information, reviews, costs and next steps before they enquire. A generic clinic page rarely answers enough of those questions.' },
        { emoji: '🤍', title: 'Aggressive marketing damages trust', body: 'Fertility is a sensitive health category. Overpromising outcomes, pushing urgency or using manipulative messaging can undermine credibility and create advertising-policy risk.' },
        { emoji: '📞', title: 'Enquiries are not the same as consultations', body: 'The commercial journey includes enquiry quality, response time, counselling, appointment booking and show-up. Optimising only to form fills hides where the real leak is.' },
        { emoji: '⭐', title: 'Reputation is fragmented across Maps, doctors and clinic pages', body: 'Patients often compare individual doctors and the clinic together. Credentials, profiles, reviews, treatment information and location signals need to reinforce one another.' },
      ],
      aiAdvantage: {
        tag: 'AISEO + PATIENT SEARCH READINESS',
        headline: 'Answer the fertility questions people ask before they choose a clinic',
        subhead: 'Search engines and AI answer systems reward clear, structured and trustworthy information. Fertility pages should be useful enough to stand on their own even before the patient calls.',
        cards: [
          { emoji: '📚', title: 'Treatment-level content', body: 'Create distinct, useful pages for relevant services such as IVF, IUI, fertility evaluation and preservation rather than routing every question to one generic service page.' },
          { emoji: '👩‍⚕️', title: 'Doctor + clinic entity clarity', body: 'Connect credentials, specialities, clinic details and location information consistently so search systems can understand who provides what and where.' },
          { emoji: '❓', title: 'Direct patient FAQs', body: 'Answer practical questions about consultation process, preparation, timelines, costs and what patients should ask their doctor, while avoiding medical guarantees.' },
          { emoji: '📍', title: 'Local discovery', body: 'Strengthen Jaipur and locality signals through Google Business Profile, clinic pages, reviews and consistent business information.' },
        ],
      },
      servicesTag: 'IVF PATIENT ACQUISITION SYSTEM',
      servicesHeadline: 'The channels that matter most before a fertility consultation',
      services: [
        { title: 'Google Search Ads for High-Intent Demand', body: 'Capture relevant searches around fertility clinics, specialists, consultations and treatments with conservative ad copy and tightly matched landing pages.' },
        { title: 'Google Maps & Local SEO', body: 'Improve clinic entity information, categories, reviews, photos and local pages so the centre is easier to discover for Jaipur fertility intent.' },
        { title: 'IVF & Fertility Landing Pages', body: 'Build treatment and consultation pages that explain the process, doctors, proof, FAQs and next step clearly on mobile.' },
        { title: 'Educational Content & AISEO', body: 'Create medically responsible content around common patient questions so the website becomes a useful source rather than a collection of promotional claims.' },
        { title: 'Enquiry & WhatsApp Follow-up', body: 'Structure fast acknowledgement, counselling handoff and appointment reminders without automating sensitive medical advice.' },
        { title: 'Consultation-Level Reporting', body: 'Where clinic operations permit, connect source and campaign data to booked consultations and lead-quality feedback rather than stopping at CPL.' },
      ],
      resultsTag: 'ADJACENT VERIFIED HEALTHCARE PROOF',
      resultsHeadline: 'Healthcare proof without pretending it is IVF-specific',
      resultHighlight: {
        label: 'MULTISPECIALTY CLINIC · GOOGLE ADS + LOCAL SEO',
        name: 'Rohit Sharma',
        detail: 'Healthcare Clinic Owner · adjacent healthcare proof',
        quote: 'Running a multispecialty clinic, I had no idea how to get patients digitally. Growth Escalators set up Google Ads and a local SEO strategy. Within 4 months, online appointment bookings were up 220%.',
        metrics: [
          { value: '+220%', label: 'Online appointment bookings' },
          { value: '4 months', label: 'Reported period' },
        ],
      },
      processTag: 'SIX-SIGMA-INSPIRED PATIENT GROWTH',
      processHeadline: 'Measure the consultation journey before scaling media',
      process: [
        { step: '01', title: 'Measure', body: 'Audit search demand, local visibility, treatment pages, campaign data, response time and consultation outcomes that the clinic can reliably capture.' },
        { step: '02', title: 'Diagnose', body: 'Find the highest-impact constraint: discovery, trust, enquiry quality, counselling handoff, booking or show-up.' },
        { step: '03', title: 'Improve', body: 'Fix that constraint with focused page, campaign, content or follow-up changes rather than changing everything at once.' },
        { step: '04', title: 'Scale', body: 'Expand budget and search coverage only when the clinic can see which demand is turning into useful consultations.' },
      ],
      whyUsTag: 'WHY GROWTH ESCALATORS',
      whyUsHeadline: 'Local execution with conservative healthcare marketing standards',
      whyUs: [
        { title: 'Jaipur-based team', body: 'Local coordination is available for clinic audits, content planning and front-desk workflow reviews when in-person context improves the work.' },
        { title: 'Search + ads + website together', body: 'The clinic does not need three vendors when the real issue crosses search visibility, paid demand and landing-page conversion.' },
        { title: 'Sensitive-category discipline', body: 'We avoid guaranteed medical outcomes, exploitative messaging and tactics that depend on sensitive-health profiling.' },
        { title: 'Outcome-aware reporting', body: 'We push measurement toward consultations and lead quality where the clinic can supply those outcomes, rather than celebrating raw form submissions.' },
      ],
      faqsTag: 'IVF MARKETING QUESTIONS',
      faqsHeadline: 'What fertility clinics should clarify before hiring an agency',
      faqs: [
        { q: 'Can IVF clinics advertise on Google and Meta?', a: 'Healthcare advertising is possible, but fertility is a sensitive health area and platform policies restrict certain targeting and claims. Campaign structure should be reviewed carefully and should not rely on personalised targeting based on sensitive health status.' },
        { q: 'What should an IVF clinic in Jaipur prioritise for SEO?', a: 'Start with accurate clinic and doctor entities, strong Google Business Profile signals, treatment-level pages, useful patient FAQs, reviews and local relevance. The exact priority depends on what currently ranks and converts.' },
        { q: 'Do you guarantee IVF leads, consultations or treatment outcomes?', a: 'No. We do not guarantee rankings, patient volume or medical outcomes. We improve the measurable marketing and conversion system while the clinic remains responsible for medical care and counselling.' },
        { q: 'Should every fertility treatment have a separate page?', a: 'Only when the treatment has distinct patient intent and enough substance to deserve a useful page. Thin pages created only to swap a keyword are more likely to create duplication than authority.' },
        { q: 'Can you work with our counsellors and front desk?', a: 'Yes. Marketing performance often depends on response time, qualification and appointment handling, so the operating handoff should be reviewed alongside campaigns.' },
      ],
      finalCta: { title: 'Build trust before asking for the consultation', subhead: 'Share your clinic, doctors, priority treatments and current acquisition channels. We will identify the highest-leverage improvement without overpromising what marketing can control.', ctaLabel: 'Book a Free IVF Growth Audit' },
      videoTestimonials: [],
      relatedResources: {
        tag: 'HEALTHCARE CLUSTER',
        headline: 'Related healthcare growth pages',
        links: [
          { label: 'Marketing for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'The Jaipur healthcare agency-hire hub.' },
          { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Patient-funnel and appointment acquisition systems.' },
          { label: 'Marketing for Doctors & Clinics', href: '/doctors', blurb: 'The national healthcare pillar.' },
          { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Authority building for physicians.' },
        ],
      },
      leadForm: { recipient: 'Info@growthescalators.com', subjectPrefix: 'New IVF Clinic Marketing Lead Jaipur', headline: 'Tell us about your fertility clinic', subhead: 'Share the Jaipur location, priority treatments and the part of the consultation journey you want to improve.', tag: 'FREE IVF GROWTH AUDIT' },
    },
  },

  orthopedicJaipur: {
    path: '/orthopedic-marketing-agency-jaipur',
    title: 'Orthopaedic Marketing Agency in Jaipur | Growth Escalators',
    description: 'Marketing for orthopaedic doctors and clinics in Jaipur across Google Search, Maps, patient education, doctor authority, landing pages and consultation acquisition.',
    keywords: ['orthopaedic marketing agency Jaipur', 'orthopedic marketing agency Jaipur', 'orthopedic doctor marketing Jaipur', 'joint replacement marketing Jaipur', 'orthopedic clinic SEO Jaipur'],
    serviceType: 'Orthopaedic Doctor and Clinic Marketing',
    areaServed: 'Jaipur, Rajasthan, India',
    content: {
      industryLabel: 'Orthopaedic Doctors in Jaipur',
      hero: {
        badge: 'JAIPUR ORTHOPAEDICS · JOINT REPLACEMENT · SPORTS INJURY · SEARCH + MAPS',
        headlineLines: ['Marketing for Orthopaedic', 'Doctors in Jaipur'],
        cyclingWords: ['Win joint-replacement searches.', 'Build surgeon authority.', 'Improve qualified consultations.', 'Own local orthopaedic discovery.'],
        subhead: 'Growth Escalators helps orthopaedic surgeons, joint-replacement practices and orthopaedic clinics in Jaipur become easier to find and easier to trust. We connect Google Search, Maps, doctor authority, treatment pages and consultation tracking around the procedures the practice actually wants to grow.',
        primaryCta: { label: 'Book a Free Orthopaedic Audit', href: '#lead-form' },
        secondaryCta: { label: 'See Orthopaedic Proof ↓', href: '#results' },
        statPills: [
          { emoji: '🦴', value: 'Speciality', label: 'Orthopaedic-specific intent' },
          { emoji: '📍', value: 'Jaipur', label: 'Local market focus' },
          { emoji: '📈', value: '10+', label: 'Inbound consults/mo in verified doctor proof' },
        ],
        image: { src: '/industries/healthcare/2.jpg', alt: 'Doctor reviewing patient information for an orthopaedic consultation' },
      },
      painPointsTag: 'WHY ORTHOPAEDIC MARKETING NEEDS DEPTH',
      painPointsHeadline: 'A surgeon is chosen on trust, treatment fit and local authority — not on ad frequency',
      painPoints: [
        { emoji: '🔎', title: 'High-value treatment searches land on generic pages', body: 'Knee replacement, hip replacement, arthroscopy, sports injuries and shoulder problems have different patient questions. A generic orthopaedics page wastes that intent.' },
        { emoji: '👨‍⚕️', title: 'The doctor’s authority is disconnected from clinic SEO', body: 'Patients search both the procedure and the surgeon. Doctor credentials, treatment expertise, reviews and clinic entity information need to reinforce the same decision.' },
        { emoji: '📞', title: 'Cheap leads do not equal surgical consultations', body: 'A form submission may be a second-opinion request, price enquiry, physiotherapy need or non-surgical case. Marketing should help the practice understand fit instead of optimising to volume alone.' },
        { emoji: '📍', title: 'Maps visibility is treated as an afterthought', body: 'For local and regional patients, Google Maps, reviews, directions and clinic information can decide whether the consultation ever happens.' },
      ],
      aiAdvantage: {
        tag: 'AISEO + DOCTOR AUTHORITY',
        headline: 'Build pages that answer the procedure questions patients actually research',
        subhead: 'Useful, structured orthopaedic content can support Google visibility, AI answers and patient confidence without turning the website into medical-advertising hype.',
        cards: [
          { emoji: '🦵', title: 'Procedure-level search pages', body: 'Create substantive pages around priority procedures and conditions where the surgeon has genuine expertise and patient intent is distinct.' },
          { emoji: '🎓', title: 'Surgeon credentials & expertise', body: 'Make qualifications, special interests, hospital/clinic information and consultation details easy for both people and search systems to understand.' },
          { emoji: '❓', title: 'Patient decision FAQs', body: 'Answer questions about consultation, evaluation, recovery conversations and what factors a patient should discuss with the surgeon — without promising an outcome.' },
          { emoji: '📍', title: 'Jaipur local authority', body: 'Strengthen Maps, local pages and consistent business information for patients who need a surgeon they can realistically visit.' },
        ],
      },
      servicesTag: 'ORTHOPAEDIC GROWTH STACK',
      servicesHeadline: 'Search visibility, surgeon authority and consultation conversion in one system',
      services: [
        { title: 'Orthopaedic SEO & Local Search', body: 'Treatment, surgeon and Jaipur-local pages built around genuine search intent, plus Google Business Profile and review support.' },
        { title: 'Google Ads for Priority Procedures', body: 'High-intent search campaigns for appropriate procedures and consultation needs, matched to relevant landing pages.' },
        { title: 'Doctor Personal Branding', body: 'Educational content, video and professional authority that help patients understand the surgeon’s expertise before a consultation.' },
        { title: 'Procedure Landing Pages', body: 'Mobile-first pages with credentials, treatment context, FAQs, location and clear consultation actions.' },
        { title: 'Reputation & Review Systems', body: 'Ethical post-visit review requests and profile hygiene that strengthen local trust without scripting or manufacturing patient sentiment.' },
        { title: 'Consultation Tracking', body: 'Where the practice can share outcomes, connect marketing source to qualified consultation status so campaigns are not judged only on CPL.' },
      ],
      resultsTag: 'VERIFIED ORTHOPAEDIC PROOF',
      resultsHeadline: 'A real orthopaedic doctor result — labelled by the work actually delivered',
      resultHighlight: {
        label: 'ORTHOPAEDIC SURGEON · PERSONAL BRANDING',
        name: 'Dr. Sumit Doraya',
        detail: 'Orthopaedic Surgeon & Speaker',
        quote: 'My personal brand grew beyond what I thought was possible. Growth Escalators built my LinkedIn from scratch to a point where I receive speaking invitations weekly and get 10+ inbound consultation requests per month.',
        metrics: [
          { value: '10+', label: 'Inbound consultation requests/month' },
          { value: 'Weekly', label: 'Speaking invitations reported' },
        ],
      },
      processTag: 'SIX-SIGMA-INSPIRED SPECIALITY GROWTH',
      processHeadline: 'Prioritise the procedure and patient journey with the greatest commercial impact',
      process: [
        { step: '01', title: 'Measure', body: 'Review procedure demand, rankings, Maps, doctor authority, ad data, page conversion and consultation feedback.' },
        { step: '02', title: 'Diagnose', body: 'Identify whether the biggest constraint is visibility, trust, patient fit, landing-page clarity or appointment handling.' },
        { step: '03', title: 'Improve', body: 'Build or repair the few search, page, creative or follow-up assets most likely to affect qualified consultations.' },
        { step: '04', title: 'Scale', body: 'Expand into more procedures, content and media only after the first priority journey is measurable.' },
      ],
      whyUsTag: 'WHY GROWTH ESCALATORS',
      whyUsHeadline: 'Healthcare growth plus doctor authority under one roof',
      whyUs: [
        { title: 'Existing orthopaedic experience', body: 'We already have verified personal-branding proof with an orthopaedic surgeon, so the page does not need to manufacture speciality credibility.' },
        { title: 'Jaipur presence', body: 'Local collaboration is available for doctor content, clinic workflow and search audits when face-to-face context helps.' },
        { title: 'Search + personal brand + website', body: 'Patients often evaluate the doctor and clinic together, so we can connect those assets instead of optimising them in isolation.' },
        { title: 'No medical outcome promises', body: 'Marketing should help the right patient find and evaluate the practice; treatment decisions and outcomes remain clinical matters.' },
      ],
      faqsTag: 'ORTHOPAEDIC MARKETING QUESTIONS',
      faqsHeadline: 'What orthopaedic surgeons should clarify before investing in growth',
      faqs: [
        { q: 'Which orthopaedic services are usually worth giving separate landing pages?', a: 'Only areas with distinct patient intent and enough substantive expertise to support a useful page — for example joint replacement, sports injuries or arthroscopy. The exact architecture should match the practice, not a generic keyword list.' },
        { q: 'Should an orthopaedic surgeon invest in personal branding as well as clinic SEO?', a: 'Often yes. Patients frequently search the surgeon by name after discovering a treatment or clinic. Strong professional authority can support trust, but it should complement rather than replace local and procedure search visibility.' },
        { q: 'Can you guarantee top rankings for “best orthopaedic doctor in Jaipur”?', a: 'No. We do not guarantee rankings, and “best” is inherently subjective. We work on the technical, content, local and reputation signals that can improve discoverability and trust.' },
        { q: 'Can marketing distinguish surgical from non-surgical enquiries?', a: 'It can improve qualification with the right page, campaign and form questions, but final suitability is a clinical decision. The goal is better-fit consultations, not automated medical screening.' },
        { q: 'Do you work with hospitals as well as individual surgeons?', a: 'Yes, where the engagement fits. Multi-doctor and hospital campaigns need clearer ownership by speciality, doctor and location so results are not blended into one number.' },
      ],
      finalCta: { title: 'Own the searches around the procedures you want to grow', subhead: 'Share your priority procedures, current clinic visibility and consultation flow. We will identify the highest-leverage search or conversion constraint first.', ctaLabel: 'Book a Free Orthopaedic Audit' },
      videoTestimonials: [],
      relatedResources: {
        tag: 'HEALTHCARE CLUSTER',
        headline: 'Related doctor and patient-acquisition pages',
        links: [
          { label: 'Marketing for Doctors in Jaipur', href: '/doctors-marketing-agency-jaipur', blurb: 'The Jaipur healthcare hub.' },
          { label: 'Personal Branding for Doctors', href: '/personal-branding-for-doctors', blurb: 'Build individual physician authority.' },
          { label: 'Patient Acquisition Agency', href: '/patient-acquisition-agency', blurb: 'Patient-funnel and appointment acquisition.' },
          { label: 'Marketing for Doctors & Clinics', href: '/doctors', blurb: 'The national healthcare pillar.' },
        ],
      },
      leadForm: { recipient: 'Info@growthescalators.com', subjectPrefix: 'New Orthopedic Doctor Marketing Lead Jaipur', headline: 'Tell us about your orthopaedic practice', subhead: 'Share the priority procedures, Jaipur location and the patient-acquisition constraint you want reviewed.', tag: 'FREE ORTHOPAEDIC AUDIT' },
    },
  },

  womensClothing: {
    path: '/d2c/fashion/womens-clothing',
    title: "Performance Marketing for Women's Clothing Brands | Growth Escalators",
    description: "Performance marketing for women's clothing and fashion D2C brands across Meta Ads, Google Shopping, creative, Shopify CRO, returns, catalogues and profitable scaling.",
    keywords: ["performance marketing for women's clothing brands", 'womens fashion marketing agency', 'Meta ads for clothing brands', 'fashion ecommerce marketing agency', 'womens clothing D2C marketing'],
    serviceType: "Women's Fashion Performance Marketing",
    areaServed: ['India', 'United States', 'United Kingdom', 'United Arab Emirates'],
    content: {
      industryLabel: "Women's Clothing D2C",
      hero: {
        badge: "WOMEN'S FASHION D2C · META · GOOGLE · SHOPIFY CRO · CREATIVE",
        headlineLines: ['Performance Marketing for', "Women's Clothing Brands"],
        cyclingWords: ['Scale beyond one winning reel.', 'Account for returns before scaling.', 'Launch collections with a system.', 'Turn paid traffic into repeat buyers.'],
        subhead: "Growth Escalators helps women's clothing brands grow beyond fragile Meta wins. We connect creative testing, catalogue structure, Google demand capture, Shopify conversion, return-adjusted economics and retention so scaling decisions are based on revenue that actually sticks.",
        primaryCta: { label: 'Get a Free Fashion Growth Audit', href: '#lead-form' },
        secondaryCta: { label: 'See D2C Proof ↓', href: '#results' },
        statPills: [
          { emoji: '💰', value: '₹10Cr+', label: 'Ad spend managed overall' },
          { emoji: '🚀', value: '10,000+', label: 'Campaigns delivered' },
          { emoji: '🛍️', value: 'D2C', label: 'Acquisition + CRO + retention' },
        ],
        image: { src: '/industries/fashion/hero.jpg', alt: "Women's clothing and apparel prepared for a D2C fashion campaign" },
      },
      painPointsTag: 'WHY WOMENSWEAR PLATEAUS',
      painPointsHeadline: 'Fashion brands usually hit a system constraint before they hit a media-buying constraint',
      painPoints: [
        { emoji: '↩️', title: 'Dashboard ROAS ignores returns and exchanges', body: 'A collection can look scalable before returns settle. Decisions should use net economics where the data is available, not only platform-attributed revenue.' },
        { emoji: '🎨', title: 'Creative fatigue arrives faster than the team can shoot', body: 'One model shoot cannot carry weeks of scaling. Brands need a repeatable pipeline across hooks, styling, UGC, product detail, proof and offer angles.' },
        { emoji: '📦', title: 'The catalogue and inventory fight the ad account', body: 'Best sellers go out of stock, size curves break and hundreds of variants create feed noise. Media needs merchandising context, not just a product catalogue sync.' },
        { emoji: '📱', title: 'Mobile PDPs make customers work too hard', body: 'Fit, fabric, size, delivery, returns, reviews, offers and the add-to-cart decision have to be easy to understand on the device where most fashion traffic lands.' },
      ],
      aiAdvantage: {
        tag: 'SEO + AI SHOPPING READINESS',
        headline: 'Build a catalogue that search engines and shoppers can understand',
        subhead: 'Category, product and editorial information should help discovery beyond paid media while answering the fit and product questions that block conversion.',
        cards: [
          { emoji: '👗', title: 'Collection intent architecture', body: 'Create useful category and occasion pages around genuine shopper intent instead of producing dozens of thin keyword pages.' },
          { emoji: '📐', title: 'Fit & product information', body: 'Structured size, fabric, care, styling, delivery and return information improves shopper confidence and machine-readable product context.' },
          { emoji: '🧾', title: 'Product + review schema hygiene', body: 'Keep product, offer, availability and review markup aligned with what the shopper can actually see on the page.' },
          { emoji: '🔗', title: 'Paid + organic landing-page reuse', body: 'High-performing collection and campaign pages can support ads, SEO and internal linking instead of living as disposable paid-media pages.' },
        ],
      },
      servicesTag: 'THE WOMENSWEAR GROWTH STACK',
      servicesHeadline: 'Acquisition, merchandising and conversion around the same collection calendar',
      services: [
        { title: 'Meta Ads & Creative Testing', body: 'Account structure, offer testing and a creative pipeline built around new arrivals, best sellers, styling, UGC and seasonal demand.' },
        { title: 'Google Shopping & Search', body: 'Product-feed quality, Shopping/PMax and high-intent search coverage where Google can profitably add incremental demand.' },
        { title: 'Shopify CRO for Fashion', body: 'PDP, collection, navigation, size/fit, sticky actions, reviews, offers and mobile hierarchy improvements tied to buying friction.' },
        { title: 'Catalogue & Merchandising Strategy', body: 'Connect campaign priorities to stock, variants, best sellers and collection performance so paid spend does not scale the wrong inventory.' },
        { title: 'Retention & Repeat Purchase', body: 'Email and WhatsApp flows around browse, cart, post-purchase, new drops and win-back so growth does not depend entirely on first-order acquisition.' },
        { title: 'SEO & AI Search', body: 'Build category authority, useful fashion content, structured product information and internal links that create an organic layer beneath paid acquisition.' },
      ],
      resultsTag: 'VERIFIED FASHION D2C PROOF',
      resultsHeadline: 'A fashion growth result already in our evidence set',
      resultHighlight: {
        label: 'PARAISO · FASHION & LIFESTYLE D2C',
        name: 'Paraiso',
        detail: 'Performance marketing + D2C growth',
        quote: 'The result matters here because the category economics are relevant: fashion creative, paid acquisition and conversion were improved together rather than treating the ad account as a standalone lever.',
        metrics: [
          { value: '1.9× → 3.2×', label: 'ROAS' },
          { value: '6×', label: 'Revenue growth in 60 days' },
        ],
      },
      processTag: 'SIX-SIGMA-INSPIRED D2C GROWTH',
      processHeadline: 'Fix the constraint that is stopping profitable scale',
      process: [
        { step: '01', title: 'Measure', body: 'Review channel economics, creative, conversion, merchandising, return data, repeat purchase and the collection calendar.' },
        { step: '02', title: 'Diagnose', body: 'Find the largest constraint: creative volume, traffic quality, product-page conversion, stock, returns or retention.' },
        { step: '03', title: 'Improve', body: 'Run focused tests against that constraint and measure the impact on the commercial metric that matters.' },
        { step: '04', title: 'Scale', body: 'Increase spend or expand channels once the collection, creative and conversion system can absorb more demand.' },
      ],
      whyUsTag: 'WHY GROWTH ESCALATORS',
      whyUsHeadline: 'Built for brands that need more than media buying',
      whyUs: [
        { title: 'D2C + Shopify + creative under one roof', body: 'If the constraint is the PDP, feed or creative pipeline, the growth team does not have to wait for another vendor.' },
        { title: 'Fashion-specific economics', body: 'Returns, variants, seasonality and collection launches are treated as growth inputs rather than operational details outside the ad account.' },
        { title: 'Existing fashion proof', body: 'The page uses verified fashion and lifestyle evidence rather than generic agency metrics presented as womenswear proof.' },
        { title: 'India-based with international delivery', body: 'Growth Escalators can work with D2C brands in India and suitable international markets without pretending to have local offices where we do not.' },
      ],
      faqsTag: 'WOMENSWEAR GROWTH QUESTIONS',
      faqsHeadline: "What women's clothing founders ask when growth starts to plateau",
      faqs: [
        { q: 'Should a women’s clothing brand prioritise Meta Ads or Google Ads?', a: 'Meta is often the stronger demand-creation channel for visual fashion, while Google can capture product and category intent. The right mix depends on search demand, margins, catalogue quality, creative strength and current channel efficiency.' },
        { q: 'How should returns affect ROAS decisions?', a: 'Where reliable order data is available, scaling decisions should consider post-return and post-exchange economics rather than relying only on platform-attributed revenue.' },
        { q: 'Do you work with ethnic wear and kurti brands?', a: 'Yes. The womenswear page is intentionally broad enough to cover women’s fashion, including ethnic and occasion-led brands. We already have a separate kurti page and should avoid multiplying thin subcategory pages unless Search Console shows distinct demand.' },
        { q: 'Can you improve our Shopify store as part of performance marketing?', a: 'Yes. We handle Shopify development and CRO, so a conversion problem does not have to remain outside the marketing scope.' },
        { q: 'Do you guarantee a specific ROAS?', a: 'No. ROAS depends on product, margin, pricing, creative, competition, conversion, repeat purchase and media conditions. We use verified case evidence as proof of capability, not as a promise of identical results.' },
      ],
      finalCta: { title: 'Find the constraint behind the ROAS plateau', subhead: 'Share your store, monthly revenue range, ad spend and what feels stuck. We will review the growth system before recommending more media.', ctaLabel: 'Get a Free Fashion Growth Audit' },
      videoTestimonials: [],
      relatedResources: {
        tag: 'FASHION D2C CLUSTER',
        headline: 'Related fashion and ecommerce growth pages',
        links: [
          { label: 'Fashion & Apparel D2C', href: '/d2c/fashion', blurb: 'The broader fashion vertical.' },
          { label: 'Kurti Brand Growth', href: '/d2c/fashion/kurti', blurb: 'Existing ethnic-wear/kurti search intent page.' },
          { label: 'Meta Ads for Fashion', href: '/d2c/fashion/meta-ads', blurb: 'Paid-social intent within the fashion cluster.' },
          { label: 'Shopify Development Agency', href: '/shopify-development-agency', blurb: 'Shopify builds, CRO and technical improvements.' },
        ],
      },
      leadForm: { recipient: 'Info@growthescalators.com', subjectPrefix: 'New Womens Clothing D2C Lead', headline: 'Tell us what is limiting the brand right now', subhead: 'Share your store, revenue range, ad spend and whether the biggest issue feels like creative, ROAS, conversion, returns or repeat purchase.', tag: 'FREE FASHION GROWTH AUDIT' },
    },
  },
}

export function getPriorityVerticalMetadata(key: PriorityVerticalKey): Metadata {
  const page = PRIORITY_VERTICAL_PAGES[key]
  const url = `${SITE}${page.path}`
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website', siteName: 'Growth Escalators' },
    twitter: { card: 'summary_large_image', title: page.title, description: page.description },
  }
}

function ServiceJsonLd({ page }: { page: PageConfig }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.serviceType,
    serviceType: page.serviceType,
    url: `${SITE}${page.path}`,
    areaServed: Array.isArray(page.areaServed) ? page.areaServed : [page.areaServed],
    provider: {
      '@type': 'Organization',
      name: 'Growth Escalators',
      url: SITE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function PriorityVerticalLanding({ pageKey }: { pageKey: PriorityVerticalKey }) {
  const page = PRIORITY_VERTICAL_PAGES[pageKey]
  return (
    <>
      <ServiceJsonLd page={page} />
      <IndustryLandingPage content={page.content} />
    </>
  )
}
