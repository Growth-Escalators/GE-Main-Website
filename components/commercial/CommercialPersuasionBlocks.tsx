import styles from './CommercialPersuasionBlocks.module.css'

type ProcessItem = { step: string; title: string; body: string }
type Profile = {
  fit: string[]
  notFit: string[]
  timelineLabels: string[]
  engagement: { title: string; body: string }[]
  next: { title: string; body: string }[]
}

function profileFor(label = ''): Profile {
  if (label === 'Website Development') return {
    fit: [
      'You need a site that has to generate leads or sales, not just look modern.',
      'You are redesigning an existing site and need SEO, analytics and important URLs preserved.',
      'You need ecommerce, CRM, forms or other integrations connected to the build.',
    ],
    notFit: [
      'You only need a template installed with no UX, SEO or conversion work.',
      'There is no decision-maker available to approve content, design and scope during the build.',
    ],
    timelineLabels: ['WEEK 1', 'WEEK 2', 'WEEKS 3–4', 'LAUNCH'],
    engagement: [
      { title: 'You see the work before launch', body: 'Preview links and milestone reviews keep the project inspectable instead of disappearing into a black box.' },
      { title: 'SEO migration is part of the build', body: 'URLs, metadata, redirects, schema, analytics and Search Console are treated as migration requirements.' },
      { title: 'You own the finished asset', body: 'Repository, hosting access and agreed handover materials stay with your business.' },
      { title: 'Scope is explicit', body: 'Included work, optional work and scope changes are documented before they become timeline surprises.' },
    ],
    next: [
      { title: 'Send the current site or brief', body: 'We review what exists, what is failing and the level of rebuild actually required.' },
      { title: 'Get the teardown on the call', body: 'We walk through UX, conversion, SEO and technical priorities in order of impact.' },
      { title: 'Leave with a scope path', body: 'If there is a fit, the next step is a written scope, timeline and engagement model.' },
    ],
  }

  if (label === 'Software Development') return {
    fit: [
      'You need a product, internal tool or automation that will be used in the real business.',
      'You want visible milestones, code ownership and a production path—not a throwaway prototype.',
      'You need product thinking, integrations or AI alongside engineering.',
    ],
    notFit: [
      'You need a speculative quote before users, workflows and integrations are defined.',
      'The only priority is the cheapest possible build regardless of QA, maintainability or ownership.',
    ],
    timelineLabels: ['SCOPE', 'ARCHITECTURE', 'BUILD SPRINTS', 'LAUNCH'],
    engagement: [
      { title: 'Working previews', body: 'Progress is shown through demos and usable previews, not only status messages.' },
      { title: 'Code and IP ownership are explicit', body: 'Repository access, environments, credentials and handover expectations are agreed in the engagement.' },
      { title: 'Scope changes become decisions', body: 'New requirements are assessed for cost and timeline impact before they quietly become technical debt.' },
      { title: 'QA happens throughout', body: 'Testing and review are part of delivery rather than a final-week rescue operation.' },
    ],
    next: [
      { title: 'Share the product or current system', body: 'We identify users, workflows, integrations and the part that actually creates business value.' },
      { title: 'Scope the architecture together', body: 'The call exposes product and engineering complexity before anyone promises a deadline.' },
      { title: 'Choose the right delivery model', body: 'If there is a fit, we recommend fixed scope, dedicated delivery or staff augmentation.' },
    ],
  }

  if (label === 'B2B Lead Generation') return {
    fit: [
      'You know the type of company and buyer you want more of.',
      'Your deal value can support a considered multi-touch acquisition process.',
      'Sales will share opportunity feedback so marketing can optimize beyond the form fill.',
    ],
    notFit: [
      'You only want a large volume of contacts with no agreed SQL definition.',
      'Your sales team cannot follow up consistently or report what becomes a real opportunity.',
    ],
    timelineLabels: ['DAYS 1–14', 'DAYS 15–30', 'DAYS 31–60', 'DAYS 61–90'],
    engagement: [
      { title: 'One SQL definition', body: 'Marketing and sales agree what qualified means before campaigns start.' },
      { title: 'Pipeline reviews, not lead reports', body: 'We look at SQLs, opportunities, deal value and velocity so both teams see the same commercial picture.' },
      { title: 'CRM context travels with the lead', body: 'Company, role, source and intent should reach the rep with the handoff.' },
      { title: 'You own the infrastructure', body: 'Accounts, landing pages, CRM data and demand-generation assets remain in your business.' },
    ],
    next: [
      { title: 'Share your ICP + sales numbers', body: 'We review who closes, average deal value, cycle length and where current pipeline stalls.' },
      { title: 'Get a pipeline diagnosis', body: 'We work backwards from revenue into the SQL and opportunity volume required.' },
      { title: 'Leave with the first demand plan', body: 'If the economics work, we define the first audience, offer, channel mix and handoff to test.' },
    ],
  }

  if (label.includes('Real Estate')) return {
    fit: [
      'You are marketing a project where buyer quality matters more than cheap lead volume.',
      'Your sales team can share site-visit and booking outcomes back into marketing.',
      'You need demand generation connected to CRM nurture across a long consideration cycle.',
    ],
    notFit: [
      'You only want the cheapest possible CPL without tracking visits or bookings.',
      'Project information, approvals or sales follow-up are not ready for a compliant direct-demand funnel.',
    ],
    timelineLabels: ['DAYS 1–14', 'DAYS 15–30', 'DAYS 31–60', 'DAYS 61–90'],
    engagement: [
      { title: 'Buyer quality is visible', body: 'Lead, site-visit and booking stages are separated so cheap volume cannot hide poor commercial quality.' },
      { title: 'Marketing + sales share the funnel', body: 'CRM handoff and sales feedback are part of the growth system because bookings happen after the lead form.' },
      { title: 'Compliance is reviewed before launch', body: 'Project disclosures, creative claims and landing-page information need to be correct before demand is scaled.' },
      { title: 'Project data stays with you', body: 'Ad accounts, CRM data, audience learnings and campaign assets remain owned by the developer.' },
    ],
    next: [
      { title: 'Share the project + current funnel', body: 'We review inventory, ticket size, target buyer, lead quality and the current sales-gallery conversion path.' },
      { title: 'Get the demand audit', body: 'We work backwards from booking targets into site visits, qualified leads and the biggest current funnel leak.' },
      { title: 'Leave with the first priority plan', body: 'If there is a fit, we define what changes first across demand, qualification, CRM nurture and sales feedback.' },
    ],
  }

  if (label === 'Doctor' || label.includes('Healthcare')) return {
    fit: [
      'You want more of the right patients, not simply a larger enquiry count.',
      'Your clinic can share booking and show-up outcomes back into marketing.',
      'You need paid demand, local search, website and WhatsApp/front-desk follow-up to work together.',
    ],
    notFit: [
      'The clinic cannot respond to new enquiries reliably or track appointment outcomes.',
      'You want claims or targeting that require ignoring platform or healthcare advertising restrictions.',
    ],
    timelineLabels: ['DAYS 1–14', 'DAYS 15–30', 'DAYS 31–60', 'DAYS 61–90'],
    engagement: [
      { title: 'The front desk is part of the funnel', body: 'Response time, booking friction and no-shows are reviewed because marketing cannot compensate for a broken handoff.' },
      { title: 'We measure further than CPL', body: 'Appointments, show-ups and patient value are more useful than a cheap enquiry count.' },
      { title: 'Healthcare rules shape creative', body: 'Campaign language and targeting are reviewed with healthcare-platform restrictions in mind.' },
      { title: 'Clinic systems stay connected', body: 'Website, WhatsApp, Google Business Profile and campaign data should reinforce one patient journey.' },
    ],
    next: [
      { title: 'Share the clinic + growth target', body: 'We review specialty, geography, current patient sources and where your calendar has capacity.' },
      { title: 'Get the patient journey audit', body: 'The call identifies the biggest leak between search, enquiry, booking and show-up.' },
      { title: 'Leave with the first three fixes', body: 'If there is a fit, we prioritize the demand, conversion and follow-up changes most likely to move booked patients.' },
    ],
  }

  if (label.includes('Ecommerce') || label === 'D2C Brand') return {
    fit: [
      'You already have real sales and enough data to diagnose what limits profitable growth.',
      'You can share AOV, margin, returns, discounts, shipping and repeat-purchase data.',
      'You need media, creative, CRO and retention decisions made against the same store economics.',
    ],
    notFit: [
      'The product is pre-launch or product-market fit is still the main unknown.',
      'There is no margin headroom, inventory visibility or operational capacity to support more demand.',
    ],
    timelineLabels: ['DAYS 1–14', 'DAYS 15–30', 'DAYS 31–60', 'DAYS 61–90'],
    engagement: [
      { title: 'Store economics sit beside ad metrics', body: 'AOV, margin, returns, discounts and repeat purchase matter because platform ROAS is not contribution.' },
      { title: 'Creative supply is planned', body: 'We define who provides product footage, UGC, statics and new concepts before fatigue appears.' },
      { title: 'One blended commercial view', body: 'Media, CRO and retention decisions reconcile to actual store revenue and contribution.' },
      { title: 'You own the growth infrastructure', body: 'Ad accounts, tracking, creative library and working ecommerce assets stay in your business.' },
    ],
    next: [
      { title: 'Share the store + current economics', body: 'We review spend, revenue, AOV, margin, returns, creative cadence and where scale currently breaks.' },
      { title: 'Get the constraint diagnosis', body: 'The call identifies whether the ceiling is acquisition, offer, creative, conversion, retention or operations.' },
      { title: 'Leave with the first test plan', body: 'If there is a fit, we define the first rebuild/tests and the numbers that must hold before scaling.' },
    ],
  }

  return {
    fit: [
      'You have a real offer and want acquisition judged against revenue or qualified pipeline.',
      'You can share spend, conversion and sales outcomes instead of optimizing only platform metrics.',
      'You want media, creative, funnel and tracking decisions connected.',
    ],
    notFit: [
      'You only want cheap clicks or leads with no downstream sales feedback.',
      'You are looking for guaranteed outcomes before the underlying economics have been diagnosed.',
    ],
    timelineLabels: ['DAYS 1–14', 'DAYS 15–30', 'DAYS 31–60', 'DAYS 61–90'],
    engagement: [
      { title: 'Commercial accountability', body: 'The account is evaluated against acquisition economics and business outcomes, not activity for activity’s sake.' },
      { title: 'Weekly visibility', body: 'Performance, tests, decisions and next actions should be understandable without waiting for a monthly presentation.' },
      { title: 'Tracking before scale', body: 'Conversion and revenue data should be trustworthy enough to support decisions before budget increases.' },
      { title: 'Accounts stay in your business', body: 'The working advertising and growth infrastructure should remain owned by you.' },
    ],
    next: [
      { title: 'Share the current numbers', body: 'We review spend, leads/sales, conversion and where you believe performance is breaking.' },
      { title: 'Get the diagnosis', body: 'On the call we identify the three biggest leaks and the order we would attack them.' },
      { title: 'Decide with a concrete plan', body: 'If there is a fit, the next step is a scoped growth plan with priorities—not pressure to sign on the call.' },
    ],
  }
}

export function CommercialFitGate({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.fit}><div className={styles.fitHead}><span>FIT CHECK</span><h2>We should know if this is the right problem before you hire us.</h2></div><div className={styles.fitGrid}><div><b>Strong fit if</b>{profile.fit.map((item) => <p key={item}>✓ {item}</p>)}</div><div><b>Probably not yet if</b>{profile.notFit.map((item) => <p key={item}>— {item}</p>)}</div></div></section>
}

export function CommercialTimeline({ industryLabel, process }: { industryLabel?: string; process?: ProcessItem[] }) {
  const profile = profileFor(industryLabel)
  const fallback: ProcessItem[] = [
    { step: '01', title: 'Diagnose', body: 'Identify the highest-impact constraint before adding more activity.' },
    { step: '02', title: 'Build the foundation', body: 'Fix the systems required for reliable testing and measurement.' },
    { step: '03', title: 'Test deliberately', body: 'Run clear hypotheses with success and kill criteria.' },
    { step: '04', title: 'Scale what holds', body: 'Increase activity only where the commercial economics remain viable.' },
  ]
  const items = (process?.length ? process : fallback).slice(0, 4)
  return <section className={styles.timeline}><div className={styles.blockHead}><span>WHAT HAPPENS NEXT</span><h2>Make the delivery journey visible before the first meeting.</h2><p>Exact timing changes with scope. The operating sequence should not feel mysterious.</p></div><div className={styles.timelineGrid}>{items.map((item, index) => <article key={`${item.step}-${item.title}`}><span>{profile.timelineLabels[index] ?? item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
}

export function CommercialEngagement({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.engagement}><div className={styles.blockHead}><span>WORKING WITH GE</span><h2>Remove the trust gap before the proposal.</h2><p>Know how visibility, ownership and accountability work before you give us your time.</p></div><div className={styles.engagementGrid}>{profile.engagement.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
}

export function CommercialNextSteps({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.next}><div className={styles.nextCopy}><span>NO-PRESSURE NEXT STEP</span><h2>Know exactly what happens after you enquire.</h2><p>The audit is useful even if the answer is that we are not the right partner yet.</p></div><div className={styles.nextGrid}>{profile.next.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>
}
