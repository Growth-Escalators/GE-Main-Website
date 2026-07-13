'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/sections/Footer'
import { WHITE_LABEL_CONTENT as C } from './_data/content'

/* Bespoke, fully-scoped redesign (styles in ./white-label.css under .wl-root).
   Reuses the copy in _data/content.ts. Does NOT use the shared IndustryLandingPage engine. */

const BOOK = C.bookingUrl || 'https://cal.com/growth-escalators/30min'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const PROOF = [
  { n: '237+', l: 'Projects delivered' },
  { n: '₹70Cr+', l: 'Payments processed' },
  { n: '50+', l: 'Integrations shipped' },
  { n: '1,000+', l: 'Automated tests' },
]

const SERVICE_ICONS = ['💻', '📱', '🛒', '🤖', '🧩', '🔌']

/* [name, simple-icons slug]. slug '' → clean text-only pill (no logo available). */
const TECH: { label: string; items: [string, string][] }[] = [
  { label: 'Frontend', items: [['React', 'react'], ['Next.js', 'nextdotjs'], ['TypeScript', 'typescript'], ['Tailwind', 'tailwindcss'], ['Vite', 'vite'], ['Framer Motion', 'framer'], ['shadcn/ui', 'shadcnui'], ['TanStack Query', 'reactquery']] },
  { label: 'Backend & data', items: [['Node.js', 'nodedotjs'], ['Express', 'express'], ['PostgreSQL', 'postgresql'], ['Supabase', 'supabase'], ['Prisma', 'prisma'], ['Drizzle', ''], ['Redis', 'redis'], ['Socket.io', 'socketdotio'], ['Zod', '']] },
  { label: 'Payments & messaging', items: [['Razorpay', 'razorpay'], ['Cashfree', ''], ['Stripe', 'stripe'], ['WhatsApp', 'whatsapp'], ['Meta', 'meta'], ['MSG91', ''], ['Resend', 'resend']] },
  { label: 'AI', items: [['OpenAI (GPT-4)', 'openai'], ['Anthropic (Claude)', 'anthropic']] },
  { label: 'Cloud & infra', items: [['AWS', 'amazonwebservices'], ['Cloudflare', 'cloudflare'], ['Docker', 'docker'], ['GitHub Actions', 'githubactions'], ['Sentry', 'sentry'], ['Vercel', 'vercel'], ['Railway', 'railway']] },
]

const ENGAGEMENTS = [
  { ic: '📦', t: 'Fixed-scope project', d: 'A defined build with a written scope, timeline, and price — best for a clear, bounded product or feature.' },
  { ic: '👥', t: 'Dedicated team', d: 'A monthly retainer for an embedded engineering pod that ships continuously under your brand.' },
  { ic: '🧑‍💻', t: 'Staff augmentation', d: 'Our engineers slot into your existing team and process — scale capacity up or down per project.' },
]

const INDUSTRIES = [
  { ic: '🏠', t: 'Real estate' },
  { ic: '🏥', t: 'Healthcare' },
  { ic: '🛍️', t: 'D2C & e-commerce' },
  { ic: '🧑‍💼', t: 'Staffing / HR-tech' },
  { ic: '📈', t: 'Agencies & marketing' },
]

const COMPARE: [string, string, string, string][] = [
  ['Time to start', 'Weeks of hiring', 'Slow, timezone lag', 'Days — we start now'],
  ['Code quality', 'Depends on the hire', 'Hit or miss, rework', 'Production-grade, tested'],
  ['Integrations', 'Built from scratch', 'Built from scratch', 'Reused from our library'],
  ['India compliance', 'You figure it out', 'Usually missing', 'GST / TDS / RERA shipped'],
  ['Cost', 'Salary + overhead', 'Cheap but risky', 'Scoped & predictable'],
  ['Your brand', '—', 'Rarely', 'Fully white-label'],
]

const FOUNDER = {
  quote:
    'We built our own products — a multi-tenant CRM, a real-estate SaaS, a live clinic platform — before we ever offered to build yours. That’s the difference: you get a partner who has shipped and runs production software, not a shop learning on your client’s dime. Tell me what you need built, and I’ll tell you exactly how we’d do it.',
  name: 'Jatin Agrawal',
  role: 'Founder, Growth Escalators',
}

const CODE = `<span class="c">// multi-tenant API — shipped under your brand</span>
<span class="k">export const</span> <span class="f">createTenant</span> = <span class="k">async</span> (input) =&gt; {
  <span class="k">const</span> tenant = <span class="k">await</span> db.<span class="f">insert</span>(tenants).values(input)
  <span class="k">await</span> <span class="f">provisionBilling</span>(tenant, <span class="s">'razorpay'</span>)
  <span class="k">await</span> <span class="f">connectWhatsApp</span>(tenant.id)
  <span class="k">return</span> { id: tenant.id, status: <span class="s">'live'</span> }
}`

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: C.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function WhiteLabelSoftwareDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── (header comes from the shared site <Navbar/> in layout.tsx) */}
      <section className="wl-hero wl-mesh">
        <div className="wl-container wl-hero-grid">
          <div>
            <span className="wl-pill"><span className="wl-dot" /> {C.hero.badge}</span>
            <h1>{C.hero.headlineLines[0]}<br /><span className="wl-grad">{C.hero.headlineLines[1]}</span></h1>
            <p className="wl-sub">{C.hero.subhead}</p>
            <div className="wl-hero-ctas">
              <a href={BOOK} {...ext} className="wl-btn">{C.hero.primaryCta.label} →</a>
              <a href="#builds" className="wl-btn-ghost">See what we&rsquo;ve built</a>
            </div>
            <div className="wl-stats">
              {C.hero.statPills.map((p) => (
                <div className="wl-stat" key={p.label}>
                  <div className="n wl-grad">{p.value}</div>
                  <div className="l">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div className="wl-mock" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="wl-window">
              <div className="wl-bar">
                <span className="wl-tl" style={{ background: '#ff5f57' }} />
                <span className="wl-tl" style={{ background: '#febc2e' }} />
                <span className="wl-tl" style={{ background: '#28c840' }} />
                <span className="wl-url">api / tenants.ts</span>
              </div>
              <pre className="wl-code" dangerouslySetInnerHTML={{ __html: CODE }} />
            </div>
            <div className="wl-toast wl-toast-1"><span className="tico wl-t2">✓</span> Deployed to prod</div>
            <div className="wl-toast wl-toast-2"><span className="tico wl-t1">🔌</span> WhatsApp connected</div>
          </motion.div>
        </div>
      </section>

      {/* ── PROOF STRIP ── */}
      <section className="wl-section" style={{ paddingTop: 0 }}>
        <div className="wl-container">
          <div className="wl-proof">
            {PROOF.map((s) => (
              <div key={s.l}><div className="n wl-grad">{s.n}</div><div className="l">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="wl-section">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">What we build for you</span>
            <h2 className="wl-h2">Full-stack product engineering, <span className="wl-grad">one roof</span></h2>
            <p className="wl-sub">From database schema to shipped product — on your brand.</p>
          </div>
          <div className="wl-grid wl-grid-3">
            {C.services.map((s, i) => (
              <motion.div key={s.title} className="wl-card wl-feature" initial={reveal.initial} whileInView={reveal.whileInView} viewport={reveal.viewport} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}>
                <div className={`wl-ico wl-t${i % 6}`}>{SERVICE_ICONS[i % SERVICE_ICONS.length]}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="wl-section wl-mesh">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Technologies we provide</span>
            <h2 className="wl-h2">A <span className="wl-grad">production-proven</span> stack</h2>
            <p className="wl-sub">The same tools we run our own products on — no experiments on your client&rsquo;s dime.</p>
          </div>
          {TECH.map((g) => (
            <div className="wl-tech-group" key={g.label}>
              <div className="wl-tech-label">{g.label}</div>
              <div className="wl-tech-row">
                {g.items.map(([name, slug]) => (
                  <span className="wl-tech" key={name}>
                    {slug && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/tech/${slug}.svg`} alt={name} loading="lazy" />
                      </>
                    )}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="wl-section">
        <div className="wl-container wl-center">
          <span className="wl-eyebrow">Industries we build for</span>
          <h2 className="wl-h2">Shipped across <span className="wl-grad">real verticals</span></h2>
          <div className="wl-ind-row">
            {INDUSTRIES.map((x) => (
              <div className="wl-ind" key={x.t}><span className="wl-ind-ic">{x.ic}</span>{x.t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDS ── */}
      <section className="wl-section" id="builds">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Proof, not promises</span>
            <h2 className="wl-h2">Real products <span className="wl-grad">we&rsquo;ve shipped</span></h2>
            <p className="wl-sub">Our own live builds — the same engineering we put behind your brand.</p>
          </div>
          <div className="wl-grid wl-grid-2">
            {(C.builds?.items ?? []).map((b, i) => (
              <motion.div key={b.name} className="wl-build" initial={reveal.initial} whileInView={reveal.whileInView} viewport={reveal.viewport} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}>
                <div className="wl-build-top">
                  <span className="wl-tl" style={{ background: '#ff5f57' }} />
                  <span className="wl-tl" style={{ background: '#febc2e' }} />
                  <span className="wl-tl" style={{ background: '#28c840' }} />
                </div>
                <div className="wl-build-body">
                  <h3>{b.name}</h3>
                  <p>{b.what}</p>
                  <div className="wl-stack">{b.stack}</div>
                  {b.href && <div style={{ marginTop: 12 }}><a href={b.href} {...ext}>Visit ↗</a></div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AGENCIES ── */}
      <section className="wl-section wl-mesh">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Why agencies partner with us</span>
            <h2 className="wl-h2">Add an <span className="wl-grad">engineering arm</span> to your agency</h2>
          </div>
          <div className="wl-grid wl-grid-3">
            {C.whyUs.map((w, i) => (
              <motion.div key={w.title} className="wl-card wl-feature" initial={reveal.initial} whileInView={reveal.whileInView} viewport={reveal.viewport} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="wl-section wl-mesh">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Why not the alternatives</span>
            <h2 className="wl-h2">In-house vs. offshore vs. <span className="wl-grad">Growth Escalators</span></h2>
          </div>
          <div className="wl-cmp">
            <div className="wl-cmp-row wl-cmp-h">
              <div></div><div>In-house hire</div><div>Offshore shop</div><div className="wl-cmp-us">Growth Escalators</div>
            </div>
            {COMPARE.map((r) => (
              <div className="wl-cmp-row" key={r[0]}>
                <div className="wl-cmp-k">{r[0]}</div>
                <div>{r[1]}</div>
                <div>{r[2]}</div>
                <div className="wl-cmp-us">{r[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wl-section">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">How we work</span>
            <h2 className="wl-h2">From brief to shipped — <span className="wl-grad">with you in the loop</span></h2>
          </div>
          <div className="wl-grid wl-grid-4">
            {C.process.map((p) => (
              <motion.div key={p.step} className="wl-step" initial={reveal.initial} whileInView={reveal.whileInView} viewport={reveal.viewport} transition={{ duration: 0.5 }}>
                <div className="num wl-grad">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS (dark) ── */}
      <section className="wl-section wl-dark">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Engagement models</span>
            <h2 className="wl-h2" style={{ color: '#fff' }}>Work with us the way <span className="wl-grad">that fits</span></h2>
          </div>
          <div className="wl-grid wl-grid-3">
            {ENGAGEMENTS.map((e, i) => (
              <motion.div key={e.t} className="wl-card wl-feature" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }} initial={reveal.initial} whileInView={reveal.whileInView} viewport={reveal.viewport} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <div className={`wl-ico wl-t${i}`}>{e.ic}</div>
                <h3 style={{ color: '#fff' }}>{e.t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.72)' }}>{e.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wl-section">
        <div className="wl-container">
          <div className="wl-head wl-center">
            <span className="wl-eyebrow">Questions, answered</span>
            <h2 className="wl-h2">White-label, <span className="wl-grad">answered</span></h2>
          </div>
          <div className="wl-faq">
            {C.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="wl-section">
        <div className="wl-container">
          <div className="wl-founder">
            <div className="wl-avatar">J</div>
            <div>
              <p className="wl-founder-q">{FOUNDER.quote}</p>
              <div className="wl-founder-n">{FOUNDER.name}</div>
              <div className="wl-founder-r">{FOUNDER.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (dark) ── */}
      <section className="wl-section wl-dark wl-cta">
        <div className="wl-container">
          <h2 style={{ color: '#fff' }}>{C.finalCta.title}</h2>
          <p className="wl-sub" style={{ marginBottom: 26 }}>{C.finalCta.subhead}</p>
          <a href={BOOK} {...ext} className="wl-btn">{C.finalCta.ctaLabel} →</a>
        </div>
      </section>

      <Footer />
    </>
  )
}
