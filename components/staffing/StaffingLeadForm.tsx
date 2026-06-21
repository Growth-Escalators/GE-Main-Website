'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ROLE_OPTIONS = [
  'Software Development',
  'Design & Product',
  'Data/AI & Automation',
  'Performance Marketing',
  'Content & Social',
  'SEO & Growth',
  'Other',
];

const OPENING_OPTIONS = ['1–3', '4–10', '10+'];

const CHECKLIST = [
  'AI-matched tech & marketing talent',
  'Full-time or contract, remote-ready',
  'Vetted by a team that does the work too',
];

const RECIPIENT = 'Info@growthescalators.com';

export default function StaffingLeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '');

    const payload = {
      name: get('name'),
      email: get('email'),
      phone: get('phone'),
      source: 'Staffing – Hiring Audit',
      message: `Role to fill: ${get('role')}\nOpenings: ${get('openings')}`,
    };

    const minWait = new Promise((r) => setTimeout(r, 200));

    try {
      const [res] = await Promise.all([
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
        minWait,
      ]);
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || `Server returned ${res.status}`);
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg((err as Error).message || 'Something went wrong');
    }
  }

  function buildMailtoFallback(): string {
    const subject = 'Staffing – Hiring Audit (form fallback)';
    const body =
      "The hiring audit form on growthescalators.com had an error.\n\nPlease respond to this email and we'll follow up directly.";
    return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const submitting = status === 'submitting';

  return (
    <section
      id="book"
      className="bg-[#fbfaf8] border-t border-[rgba(17,18,26,.07)] py-[88px]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="block text-[12px] font-extrabold tracking-[.2em] uppercase text-[#FF6B35]">
              Start hiring
            </span>
            <h2 className="text-[40px] max-md:text-[26px] font-extrabold tracking-[-.03em] text-[#11121a] mt-3 leading-[1.1]">
              Tell us the role. We&apos;ll bring the people.
            </h2>
            <p className="text-[17px] text-[#4b4b6a] max-w-[440px] mt-4">
              Get a free hiring audit — we&apos;ll map your role, timeline, and the
              kind of candidates we can deliver. No commitment.
            </p>
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full text-[#00b894] text-[13px] font-bold shrink-0"
                    style={{ background: 'rgba(0,212,170,.14)' }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-[15px] text-[#2a2a3a]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              role="status"
              aria-live="polite"
              className="bg-white border border-[rgba(17,18,26,.09)] rounded-[22px] shadow-[0_24px_60px_rgba(17,18,26,.10)] p-8 max-md:p-6"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full text-[#00b894] text-[22px] font-bold"
                style={{ background: 'rgba(0,212,170,.14)' }}
                aria-hidden
              >
                ✓
              </div>
              <h3 className="text-[22px] font-extrabold text-[#11121a] mt-4">
                Thanks — we got it.
              </h3>
              <p className="text-[15px] text-[#4b4b6a] mt-2">
                We&apos;ll reply within 24 hours with a hiring plan. Reach us at{' '}
                <a className="text-[#FF6B35] font-semibold" href={`mailto:${RECIPIENT}`}>
                  {RECIPIENT}
                </a>{' '}
                or WhatsApp{' '}
                <a
                  className="text-[#FF6B35] font-semibold"
                  href="https://wa.me/917733888883"
                >
                  +91 77338 88883
                </a>
                .
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white border border-[rgba(17,18,26,.09)] rounded-[22px] shadow-[0_24px_60px_rgba(17,18,26,.10)] p-8 max-md:p-6"
            >
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                <label className="block">
                  <span className="block text-[12.5px] font-bold text-[#4b4b6a] mb-1.5">
                    Your name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full border border-[rgba(17,18,26,.14)] rounded-[11px] px-4 py-3 text-[15px] text-[#11121a]"
                  />
                </label>
                <label className="block">
                  <span className="block text-[12.5px] font-bold text-[#4b4b6a] mb-1.5">
                    WhatsApp / Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 …"
                    className="w-full border border-[rgba(17,18,26,.14)] rounded-[11px] px-4 py-3 text-[15px] text-[#11121a]"
                  />
                </label>
              </div>

              <label className="block mt-4">
                <span className="block text-[12.5px] font-bold text-[#4b4b6a] mb-1.5">
                  Work email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full border border-[rgba(17,18,26,.14)] rounded-[11px] px-4 py-3 text-[15px] text-[#11121a]"
                />
              </label>

              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-4">
                <label className="block">
                  <span className="block text-[12.5px] font-bold text-[#4b4b6a] mb-1.5">
                    Role to fill
                  </span>
                  <select
                    name="role"
                    defaultValue={ROLE_OPTIONS[0]}
                    className="w-full border border-[rgba(17,18,26,.14)] rounded-[11px] px-4 py-3 text-[15px] text-[#11121a] bg-white"
                  >
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-[12.5px] font-bold text-[#4b4b6a] mb-1.5">
                    # of openings
                  </span>
                  <select
                    name="openings"
                    defaultValue={OPENING_OPTIONS[0]}
                    className="w-full border border-[rgba(17,18,26,.14)] rounded-[11px] px-4 py-3 text-[15px] text-[#11121a] bg-white"
                  >
                    {OPENING_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full text-white text-[16px] font-extrabold py-4 rounded-[12px] mt-6 disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
              >
                {submitting ? 'Sending…' : 'Get My Free Hiring Audit →'}
              </button>

              {status === 'error' && (
                <p className="text-[13px] text-[#c0392b] mt-3" role="alert">
                  Couldn&apos;t send your request
                  {errorMsg ? ` (${errorMsg})` : ''}.{' '}
                  <a className="underline" href={buildMailtoFallback()}>
                    Email us directly instead
                  </a>{' '}
                  and we&apos;ll reply right away.
                </p>
              )}

              <p className="text-center text-[12.5px] text-[#9898b8] mt-3">
                ★★★★★ Rated 4.9/5 · We reply within 24 hours
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
