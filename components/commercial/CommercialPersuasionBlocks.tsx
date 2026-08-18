import styles from './CommercialPersuasionBlocks.module.css'

type Profile = {
  fit: string[]
  notFit: string[]
  timeline: { label: string; title: string; body: string }[]
  engagement: { title: string; body: string }[]
  next: { title: string; body: string }[]
}

function profileFor(label = ''): Profile {
  if (label === 'Website Development') {
    return {
      fit: ['You need a site that has to generate leads or sales, not just look modern.', 'You are redesigning an existing site and need SEO/analytics preserved.', 'You need integrations, ecommerce or conversion flows connected to the build.'],
      notFit: ['You only need a one-off template installed with no strategy or conversion work.', 'You are not ready to provide approvals, content inputs or a decision-maker during the build.'],
      timeline: [
        { label: 'WEEK 1', title: 'Discovery + sitemap', body: 'Business goals, users, SEO risks, content, integrations and conversion paths are locked before visual design starts.' },
        { label: 'WEEK 2', title: 'UX + visual system', body: 'Key desktop/mobile screens and the reusable design system are approved before development expands.' },
        { label: 'WEEKS 3–4', title: 'Build + integrations', body: 'Responsive development, forms, analytics, CMS/ecommerce and required integrations are implemented and reviewed.' },
        { label: 'LAUNCH', title: 'QA + migration', body: 'Device QA, redirects, metadata, analytics, Search Console and handover are verified before the new site replaces the old one.' },
      ],
      engagement: [
        { title: 'You see the work before launch', body: 'Preview links and milestone reviews keep the project visible instead of disappearing into a black box.' },
        { title: 'SEO migration is part of the build', body: 'Existing URLs, canonicals, metadata, redirects, schema and analytics are treated as migration requirements—not afterthoughts.' },
        { title: 'You own the finished asset', body: 'Repository, hosting access and the agreed handover materials stay with your business.' },
        { title: 'Scope is agreed before development expands', body: 'We document what is included, what is optional and what would count as a scope change before it becomes a surprise.' },
      ],
      next: [
        { title: 'Send the current site or brief', body: 'We review what exists, what is failing and the level of rebuild actually required.' },
        { title: 'Get the teardown on the call', body: 'We walk through UX, conversion, SEO and technical priorities in order of impact.' },
        { title: 'Leave with a scope path', body: 'If there is a fit, the next step is a written scope, timeline and engagement model—not another vague discovery call.' },
      ],
    }
  }
  if (label === 'Software Development') {
    return {
      fit: ['You need a product, internal tool or automation that will be used in the real business.', 'You want visible milestones, code ownership and a production path—not a prototype that cannot ship.', 'You need product thinking, integrations or AI alongside engineering.'],
      notFit: ['You need a speculative estimate without enough scope to define users, workflows or integrations.', 'You want the cheapest possible build regardless of maintainability, QA or ownership.'],
      timeline: [
        { label: '01', title: 'Scope the product', body: 'Users, workflows, constraints, integrations, success criteria and must-have versus later-stage features are documented.' },
        { label: '02', title: 'Architecture blueprint', body: 'Data model, auth, integrations, environments, observability and delivery milestones are agreed before the build compounds.' },
        { label: '03', title: 'Build in visible sprints', body: 'You get working previews, demos and priority decisions while the product is being built—not only at final handover.' },
        { label: '04', title: 'QA, launch + scale', body: 'Testing, monitoring, documentation, deployment and the post-launch ownership model are treated as part of shipping.' },
      ],
      engagement: [
        { title: 'Weekly visible progress', body: 'Working previews and demos make progress inspectable instead of relying on status messages.' },
        { title: 'Code and IP ownership are explicit', body: 'Repository access, environments, credentials and handover expectations are agreed in the engagement.' },
        { title: 'Scope changes become decisions', body: 'New requirements are evaluated for impact on timeline and cost before they quietly become technical debt.' },
        { title: 'QA is not the last week', body: 'Testing and review happen throughout delivery so production readiness is built in rather than bolted on.' },
      ],
      next: [
        { title: 'Share the product idea or current system', body: 'We identify users, workflows, integrations and the part that actually creates business value.' },
        { title: 'Scope the architecture together', body: 'The call turns the idea into a concrete system map and exposes complexity before anyone promises a date.' },
        { title: 'Choose the right delivery model', body: 'If there is a fit, we recommend fixed scope, dedicated delivery or staff augmentation based on how the product needs to evolve.' },
      ],
    }
  }
  if (label === 'B2B Lead Generation') {
    return {
      fit: ['You know the type of company and buyer you want more of.', 'Your deal value can support a considered multi-touch acquisition process.', 'Sales will share pipeline feedback so marketing can optimize past the form fill.'],
      notFit: ['You want a large volume of unqualified contacts with no agreed SQL definition.', 'Your sales team cannot follow up consistently or report what becomes an opportunity.'],
      timeline: [
        { label: 'DAYS 1–14', title: 'ICP + pipeline diagnostic', body: 'We align on target accounts, buyer roles, deal economics, current sources and the definition of a sales-qualified lead.' },
        { label: 'DAYS 15–30', title: 'Build demand + handoff', body: 'Messaging, landing pages, paid/outbound sequences, scoring and CRM routing go live around the same SQL definition.' },
        { label: 'DAYS 31–60', title: 'Tune for fit', body: 'We use sales feedback to remove noise, strengthen winning messages and improve SQL-to-opportunity conversion.' },
        { label: 'DAYS 61–90', title: 'Scale qualified pipeline', body: 'Budget and outreach volume increase only where opportunity quality and sales-cycle movement justify it.' },
      ],
      engagement: [
        { title: 'One SQL definition', body: 'Marketing and sales agree what qualified means before campaigns start.' },
        { title: 'Pipeline reviews, not lead reports', body: 'We look at SQLs, opportunities, deal value and velocity so both teams see the same commercial picture.' },
        { title: 'CRM context travels with the lead', body: 'Company, role, intent and source should reach the sales rep with the handoff.' },
        { title: 'You own the infrastructure', body: 'Accounts, landing pages, CRM data and the working demand-generation assets remain in your business.' },
      ],
      next: [
        { title: 'Share your ICP + sales numbers', body: 'We review who closes, average deal value, cycle length and where current pipeline actually stalls.' },
        { title: 'Get a pipeline diagnosis', body: 'On the call we work backwards from revenue into the SQL and opportunity volume required.' },
        { title: 'Leave with the first demand plan', body: 'If the economics work, we define the first audience, offer, channel mix and sales handoff to test.' },
      ],
    }
  }
  if (label.includes('Real Estate')) {
    return {
      fit: ['You are marketing a project where buyer quality matters more than cheap lead volume.', 'Your sales team can share site-visit and booking outcomes back into marketing.', 'You need demand generation connected to CRM nurture across a long consideration cycle.'],
      notFit: ['You only want the cheapest possible CPL without tracking visits or bookings.', 'Project claims, approvals or sales follow-up are not ready for a compliant direct-demand funnel.'],
      timeline: [
        { label: 'DAYS 1–14', title: 'Project + buyer audit', body: 'Inventory, price tier, micromarket, sales target, current lead quality and the CRM journey are mapped first.' },
        { label: 'DAYS 15–30', title: 'Demand system live', body: 'Campaigns, project pages, qualification and routing go live with the disclosures and information buyers need to act.' },
        { label: 'DAYS 31–60', title: 'Optimize to site visits', body: 'Marketing learns from call quality, scheduled visits, show-ups and the objections the sales team is hearing.' },
        { label: 'DAYS 61–90', title: 'Scale qualified demand', body: 'Budgets and audiences expand only where site-visit and booking progression supports the growth.' },
      ],
      engagement: [
        { title: 'Buyer quality is visible', body: 'Lead, site-visit and booking stages are separated so cheap volume cannot hide poor commercial quality.' },
        { title: 'Marketing + sales share the funnel', body: 'The CRM handoff and sales feedback loop are part of the growth system because bookings happen after the lead form.' },
        { title: 'Compliance is reviewed before launch', body: 'Project disclosures, creative claims and landing-page information need to be correct before demand is scaled.' },
        { title: 'Project data stays with you', body: 'Ad accounts, audience learnings, CRM data and campaign assets remain owned by the developer.' },
      ],
      next: [
        { title: 'Share the project + current funnel', body: 'We review inventory, ticket size, target buyer, lead quality and the current sales-gallery conversion path.' },
        { title: 'Get the demand audit', body: 'We work backwards from booking targets into site visits, qualified leads and the biggest current funnel leak.' },
        { title: 'Leave with the first priority plan', body: 'If there is a fit, we define what must change first across demand, qualification, CRM nurture and sales feedback.' },
      ],
    }
  }
  if (label === 'Doctor' || label.includes('Healthcare')) {
    return {
      fit: ['You want more of the right patients, not simply a larger enquiry count.', 'Your clinic can share booking, show-up and treatment outcomes back into marketing.', 'You need paid demand, local search, website and WhatsApp/front-desk follow-up to work together.'],
      notFit: ['The clinic cannot respond to new enquiries reliably or track appointment outcomes.', 'You want medical claims or targeting that would require ignoring platform or healthcare advertising rules.'],
      timeline: [
        { label: 'DAYS 1–14', title: 'Patient journey audit', body: 'We review demand sources, local search, treatment pages, enquiry handling, booking friction and no-show leakage.' },
        { label: 'DAYS 15–30', title: 'Build the booking engine', body: 'Campaigns, pages, tracking, WhatsApp follow-up and local-search priorities are connected around appointments.' },
        { label: 'DAYS 31–60', title: 'Optimize to showed patients', body: 'We use booking and show-up feedback to improve lead quality, front-desk handoff and patient intent.' },
        { label: 'DAYS 61–90', title: 'Scale what the clinic can absorb', body: 'Demand grows around treatments, doctors and locations where the economics and operational capacity hold.' },
      ],
      engagement: [
        { title: 'The front desk is part of the funnel', body: 'Response time, booking friction and no-shows are reviewed because marketing cannot compensate for a broken enquiry handoff.' },
        { title: 'We measure further than CPL', body: 'Appointments, show-ups and patient value are more useful than a cheap enquiry count.' },
        { title: 'Healthcare rules shape the creative', body: 'Campaign language and targeting are reviewed with healthcare-platform restrictions in mind before launch.' },
        { title: 'Clinic systems stay connected', body: 'Website, WhatsApp, Google Business Profile and campaign data should reinforce one patient journey instead of operating separately.' },
      ],
      next: [
        { title: 'Share the clinic + growth target', body: 'We review specialty, geography, current patient sources and where your calendar has capacity.' },
        { title: 'Get the patient journey audit', body: 'The call identifies the biggest leak between search, enquiry, booking and show-up.' },
        { title: 'Leave with the first three fixes', body: 'If there is a fit, we prioritize the demand, conversion and follow-up changes most likely to move booked patients.' },
      ],
    }
  }
  if (label.includes('Ecommerce') || label === 'D2C Brand') {
    return {
      fit: ['You already have real sales and enough data to diagnose what is limiting profitable growth.', 'You can share store economics—AOV, margin, returns, discounts, shipping and repeat purchase.', 'You need media, creative, CRO and retention decisions to be made against the same business numbers.'],
      notFit: ['The product is pre-launch or product-market fit is still the main unknown.', 'There is no margin headroom, inventory visibility or operational capacity to support additional demand.'],
      timeline: [
        { label: 'DAYS 1–14', title: 'Economics + account diagnostic', body: 'We reconcile store numbers, tracking, paid media, creative supply, product mix and the conversion journey before increasing spend.' },
        { label: 'DAYS 15–30', title: 'Fix the constraint', body: 'Tracking, account structure, offer, CRO or creative systems are rebuilt around the leak the data actually revealed.' },
        { label: 'DAYS 31–60', title: 'Structured testing', body: 'New creative, offers and landing-page hypotheses run on a fixed cadence while contribution economics are watched.' },
        { label: 'DAYS 61–90', title: 'Scale what holds', body: 'Budgets increase only where the store can maintain viable acquisition economics, inventory and fulfilment.' },
      ],
      engagement: [
        { title: 'Store economics sit beside ad metrics', body: 'AOV, margin, returns, discounts and repeat purchase matter because platform ROAS is not the same as contribution.' },
        { title: 'Creative supply is planned', body: 'We define who provides product footage, UGC, statics and new concepts so the account is not waiting for creative after fatigue appears.' },
        { title: 'One blended commercial view', body: 'Media, CRO and retention decisions should reconcile to actual store revenue and contribution—not isolated platform dashboards.' },
        { title: 'You own the growth infrastructure', body: 'Ad accounts, tracking, creative library and the working ecommerce assets stay in your business.' },
      ],
      next: [
        { title: 'Share the store + current economics', body: 'We review spend, revenue, AOV, margin, returns, creative cadence and where scale currently breaks.' },
        { title: 'Get the constraint diagnosis', body: 'The call identifies whether the ceiling is acquisition, offer, creative, conversion, retention or operations.' },
        { title: 'Leave with the first test plan', body: 'If there is a fit, we define the first rebuild/tests and the numbers that must hold before scaling.' },
      ],
    }
  }
  return {
    fit: ['You have a real offer and want acquisition judged against revenue or qualified pipeline.', 'You can share current spend, conversion and sales outcomes instead of optimizing only platform metrics.', 'You want media, creative, funnel and tracking decisions connected.'],
    notFit: ['You only want cheap clicks or leads with no downstream sales feedback.', 'You are looking for guaranteed outcomes before the underlying economics have been diagnosed.'],
    timeline: [
      { label: 'DAYS 1–14', title: 'Diagnostic', body: 'We map spend, conversion, tracking and the sales handoff to identify the highest-impact constraint.' },
      { label: 'DAYS 15–30', title: 'Foundation rebuild', body: 'Tracking, campaign structure, creative/funnel priorities and reporting are aligned before scale.' },
      { label: 'DAYS 31–60', title: 'Test deliberately', body: 'Campaign, creative and conversion hypotheses run with clear success and kill criteria.' },
      { label: 'DAYS 61–90', title: 'Scale the winners', body: 'Spend increases only where the acquisition economics and downstream conversion continue to hold.' },
    ],
    engagement: [
      { title: 'Senior commercial view', body: 'The account is evaluated against acquisition economics and business outcomes, not activity for activity’s sake.' },
      { title: 'Weekly visibility', body: 'Performance, tests, decisions and next actions should be understandable without waiting for a monthly presentation.' },
      { title: 'Tracking before scale', body: 'We want conversion and revenue data trustworthy enough to support decisions before budget increases.' },
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

export function CommercialTimeline({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.timeline}><div className={styles.blockHead}><span>WHAT HAPPENS NEXT</span><h2>Make the first 90 days visible before the first meeting.</h2><p>The exact dates depend on scope, but the operating sequence should never feel mysterious.</p></div><div className={styles.timelineGrid}>{profile.timeline.map((item) => <article key={item.label}><span>{item.label}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
}

export function CommercialEngagement({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.engagement}><div className={styles.blockHead}><span>WORKING WITH GE</span><h2>Remove the trust gap before the proposal.</h2><p>Buyers should know how visibility, ownership and accountability work before they give us their time.</p></div><div className={styles.engagementGrid}>{profile.engagement.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>
}

export function CommercialNextSteps({ industryLabel }: { industryLabel?: string }) {
  const profile = profileFor(industryLabel)
  return <section className={styles.next}><div className={styles.nextCopy}><span>NO-PRESSURE NEXT STEP</span><h2>Know exactly what happens after you enquire.</h2><p>The audit is useful even if the answer is that we are not the right partner yet.</p></div><div className={styles.nextGrid}>{profile.next.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>
}
