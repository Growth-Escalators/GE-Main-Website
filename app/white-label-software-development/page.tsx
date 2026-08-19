import Link from 'next/link'
import Footer from '@/components/sections/Footer'
import WhiteLabelLeadForm from '@/components/white-label/WhiteLabelLeadForm'
import styles from './page.module.css'

const FIT = [
  {
    title: 'Agencies selling software without an engineering bench',
    copy: 'Keep the strategy and client relationship. Bring us in behind the scenes for product architecture, build, QA and handover.',
  },
  {
    title: 'Teams that need delivery capacity without permanent hiring',
    copy: 'Add engineering capacity for a defined build or delivery window without carrying a larger fixed team between projects.',
  },
  {
    title: 'Partners that need one accountable technical owner',
    copy: 'Use one delivery partner across web applications, internal tools, ecommerce, integrations and AI-enabled workflows.',
  },
]

const CAPABILITIES = [
  {
    title: 'SaaS & web applications',
    copy: 'Multi-user products, portals, dashboards, admin systems, authentication, permissions, subscriptions and application workflows.',
  },
  {
    title: 'Ecommerce & conversion builds',
    copy: 'Custom storefront experiences, checkout logic, integrations, post-purchase flows and the technical layer behind growth experiments.',
  },
  {
    title: 'AI automation & agents',
    copy: 'Useful AI inside real workflows: assisted research, content operations, internal copilots, routing, extraction and repeatable task automation.',
  },
  {
    title: 'Internal tools & CRM workflows',
    copy: 'Operational software for sales, delivery, staffing, reporting and business processes that no off-the-shelf tool fits cleanly.',
  },
  {
    title: 'Integrations & data flows',
    copy: 'Payments, messaging, CRM, commerce, authentication and third-party APIs connected with clear ownership and failure handling.',
  },
  {
    title: 'Dedicated engineering capacity',
    copy: 'A delivery pod that can work against your roadmap and operating rhythm when a single fixed-scope project is not the right model.',
  },
]

const PRINCIPLES = [
  {
    title: 'Your brand stays in front',
    copy: 'The end-client relationship remains with you. We can work as a silent delivery partner and keep communication inside the agreed operating model.',
  },
  {
    title: 'Scope before optimism',
    copy: 'We clarify product boundaries, integrations, assumptions and acceptance criteria before turning an idea into a delivery commitment.',
  },
  {
    title: 'Code and handover are part of delivery',
    copy: 'Repository access, documentation and ownership expectations are agreed up front rather than becoming a negotiation at the end.',
  },
  {
    title: 'No invented proof',
    copy: 'Confidential white-label work stays confidential. We use owned product examples and approved public work rather than manufacturing client logos or claims.',
  },
]

const WORK = [
  {
    label: 'Owned platform',
    title: 'Growth Escalators CRM',
    copy: 'A multi-user internal CRM and workflow platform used to support sales and operating processes inside the business.',
    stack: 'CRM · workflow automation · messaging · business operations',
  },
  {
    label: 'Owned product work',
    title: 'Dealos',
    copy: 'A real-estate sales operating system built around lead handling, documents, commissions and team workflows.',
    stack: 'SaaS · multi-user workflows · payments · operations',
  },
  {
    label: 'Public client platform',
    title: 'Dr Dubay',
    copy: 'A public healthcare website paired with operational tooling for enquiries, bookings and clinic workflows.',
    stack: 'Next.js · application workflows · healthcare operations',
  },
  {
    label: 'Product in development',
    title: 'Wizmatch',
    copy: 'A staffing workflow product focused on candidate review, sourcing signals and recruitment operations.',
    stack: 'Staffing operations · scoring workflows · internal tooling',
  },
]

const PROCESS = [
  {
    title: 'Clarify the commercial promise',
    copy: 'What has been sold, who the end user is, what absolutely has to work and what can wait.',
  },
  {
    title: 'Define architecture & scope',
    copy: 'Data model, integrations, delivery boundaries, milestones, acceptance criteria and ownership are written down before build.',
  },
  {
    title: 'Build with review points',
    copy: 'You get working increments and review points instead of disappearing into a long black-box development cycle.',
  },
  {
    title: 'Launch, hand over or continue',
    copy: 'Move into launch support, handover, or an ongoing delivery model depending on what your client or product needs next.',
  },
]

const ENGAGEMENTS = [
  {
    title: 'Fixed-scope build',
    copy: 'For a bounded product, feature set or migration with clear acceptance criteria and a defined delivery window.',
  },
  {
    title: 'Dedicated delivery pod',
    copy: 'For agencies or product teams that need continuing engineering capacity across an active roadmap.',
  },
  {
    title: 'Embedded capacity',
    copy: 'For teams that already own product direction and need engineers to work inside the existing process and priorities.',
  },
]

const FAQS = [
  {
    q: 'Can the work be completely white-label?',
    a: 'Yes. We can structure delivery so your agency remains the visible partner and the client relationship stays with you. Communication boundaries are agreed before work starts.',
  },
  {
    q: 'Who owns the code and intellectual property?',
    a: 'Ownership and repository access are documented in the engagement terms. For client-funded builds, the expected handover model is agreed before development begins so there is no ambiguity later.',
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes, where the engagement requires one. White-label delivery only works when confidentiality, access and communication rules are explicit.',
  },
  {
    q: 'What kinds of products can you build?',
    a: 'Typical work includes SaaS and web applications, ecommerce experiences, internal tools, CRM workflows, integrations, AI-enabled operations and dedicated engineering capacity.',
  },
  {
    q: 'How do you price white-label development?',
    a: 'The commercial model depends on how defined the work is. A bounded build can be scoped as a project; an evolving roadmap is usually better handled through dedicated or embedded capacity.',
  },
  {
    q: 'How quickly can a project start?',
    a: 'Start timing depends on scope clarity and current delivery capacity. We would rather give you a realistic start and milestone plan after reviewing the brief than advertise a generic turnaround promise.',
  },
]

function JsonLd() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'White-Label Software Development',
    serviceType: 'White-label software and application development',
    provider: {
      '@type': 'Organization',
      name: 'Growth Escalators',
      url: 'https://www.growthescalators.com',
    },
    url: 'https://www.growthescalators.com/white-label-software-development',
    description:
      'White-label software delivery for agencies and product teams across SaaS, web applications, ecommerce, internal tools, integrations and AI-enabled workflows.',
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.growthescalators.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.growthescalators.com/services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'White-Label Software Development',
        item: 'https://www.growthescalators.com/white-label-software-development',
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function WhiteLabelSoftwareDevelopmentPage() {
  return (
    <main className={styles.page}>
      <JsonLd />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>White-label software development / agency delivery</p>
              <h1>Ship software.<br />Keep your brand<br />in front.</h1>
              <p className={styles.heroLead}>
                Growth Escalators works behind agencies and product teams as an India-based engineering partner for
                SaaS, web applications, ecommerce, internal tools, integrations and AI-enabled workflows. You own the
                relationship. We help carry the technical delivery.
              </p>
              <div className={styles.actions}>
                <a href="#project-brief" className={styles.primary}>Discuss a project ↗</a>
                <Link href="/work" className={styles.secondary}>See selected work</Link>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="White-label delivery model">
              <div className={styles.panelTop}>
                <span>Silent delivery partner</span>
                <span>India-based engineering</span>
              </div>
              <div className={styles.panelStatement}>
                Your client.<br />Your relationship.<br /><span>Shared delivery.</span>
              </div>
              <div className={styles.panelSteps}>
                {['Brief', 'Scope', 'Build', 'Handover'].map((item, index) => (
                  <div key={item}>
                    <small>0{index + 1}</small>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
              <div className={styles.panelBottom}>
                <span>NDA-ready</span>
                <span>Repository access agreed up front</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustRail} aria-label="Delivery principles">
        <div className={styles.shell}>
          <div className={styles.trustGrid}>
            <div><span>Agency-controlled client relationship</span></div>
            <div><span>Confidentiality built into the operating model</span></div>
            <div><span>Scope and acceptance criteria before build</span></div>
            <div><span>Handover expectations agreed before delivery</span></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cream}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Who this is for</p>
              <h2>Sell the capability without carrying all the headcount.</h2>
            </div>
            <p>
              White-label delivery is useful when the commercial opportunity is real but building a permanent team
              for every technical capability is not.
            </p>
          </div>
          <div className={styles.fitGrid}>
            {FIT.map((item, index) => (
              <article className={styles.fitCard} key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lavender}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Technical coverage</p>
              <h2>One delivery partner across the product layer.</h2>
            </div>
            <p>
              The goal is not to sell a longer technology list. It is to remove the coordination gap between product,
              engineering, integrations and launch.
            </p>
          </div>
          <div className={styles.capGrid}>
            {CAPABILITIES.map((item, index) => (
              <article className={styles.capCard} key={item.title}>
                <span>0{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.shell}>
          <div className={styles.principleGrid}>
            <div className={styles.principleCopy}>
              <p className={styles.eyebrow}>How white-label should actually work</p>
              <h2>Invisible does not mean unaccountable.</h2>
              <p>
                A silent partner still needs explicit ownership, clear scope, disciplined communication and a clean
                handover path. Those are operating requirements, not sales promises.
              </p>
            </div>
            <div className={styles.principles}>
              {PRINCIPLES.map((item, index) => (
                <article className={styles.principle} key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Product evidence</p>
              <h2>We can show the systems we actually work on.</h2>
            </div>
            <p>
              Confidential client work stays confidential. These examples are owned product work or public delivery
              that can be discussed without inventing logos, testimonials or private results.
            </p>
          </div>
          <div className={styles.workGrid}>
            {WORK.map((item) => (
              <article className={styles.workCard} key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <small>{item.stack}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cream}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Delivery process</p>
              <h2>Make the uncertainty visible before it becomes rework.</h2>
            </div>
            <p>
              The process is designed to make scope, assumptions and decisions inspectable from the beginning rather
              than discovering them after the deadline moves.
            </p>
          </div>
          <div className={styles.process}>
            {PROCESS.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Engagement models</p>
              <h2>Match the commercial model to the uncertainty.</h2>
            </div>
            <p>
              A fixed scope is useful when the work is bounded. An evolving roadmap needs a different operating model.
              We choose the structure after understanding the delivery problem.
            </p>
          </div>
          <div className={styles.engagementGrid}>
            {ENGAGEMENTS.map((item, index) => (
              <article className={styles.engagement} key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>Before you hand us a client</p>
              <h2>Questions worth resolving before the first sprint.</h2>
            </div>
            <p>
              The white-label relationship works when commercial expectations and delivery rules are explicit on both
              sides.
            </p>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="project-brief" className={styles.conversion}>
        <div className={styles.shell}>
          <div className={styles.conversionGrid}>
            <div className={styles.conversionCopy}>
              <p className={styles.eyebrow}>Start with the actual brief</p>
              <h2>Tell us what has to be delivered.</h2>
              <p>
                Share what you have already promised, what the end user needs and where the uncertainty is. We&apos;ll
                respond with the most useful next step rather than forcing every enquiry into the same package.
              </p>
              <div className={styles.conversionNotes}>
                <span>Your client relationship remains yours.</span>
                <span>NDA and communication rules can be agreed before project detail is shared.</span>
                <span>No generic timeline or price is promised before the scope is understood.</span>
              </div>
            </div>
            <WhiteLabelLeadForm />
          </div>
        </div>
      </section>

      <section className={styles.related}>
        <div className={styles.shell}>
          <div className={styles.relatedGrid}>
            <Link href="/software-development-company-jaipur"><small>Related capability</small><strong>Software development ↗</strong></Link>
            <Link href="/services"><small>Full capability map</small><strong>All services ↗</strong></Link>
            <Link href="/work"><small>Selected evidence</small><strong>Work & outcomes ↗</strong></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
