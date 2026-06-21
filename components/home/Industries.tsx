'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

function MedicalIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF6B35"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF6B35"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  );
}

function AddUserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF6B35"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3 20c0-3.3 2.7-6 6-6 1.4 0 2.7.5 3.7 1.2" />
      <path d="M18 14v6M15 17h6" />
    </svg>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="border-t border-[rgba(17,18,26,0.07)] bg-[#fbfaf8] py-[92px]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-[44px] max-w-[560px]"
        >
          <p className="text-[12px] font-extrabold uppercase tracking-[.22em] text-[#FF6B35]">
            Built for your industry
          </p>
          <h2 className="mt-3 text-[42px] font-extrabold tracking-[-.025em] text-[#11121a] max-md:text-[26px]">
            Playbooks tuned to how you actually win
          </h2>
          <p className="mt-4 text-[17px] text-[#4b4b6a]">
            We don&apos;t run generic campaigns. Each industry gets a dedicated funnel,
            creative angle, and offer that&apos;s proven to convert in that market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1"
        >
          <Link
            href="/doctors"
            className="flex gap-4 rounded-[18px] border border-[rgba(17,18,26,0.08)] bg-white p-[26px] transition hover:-translate-y-1"
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(255,107,53,0.1)]">
              <MedicalIcon />
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-[#11121a]">
                Doctors &amp; Clinics
              </h3>
              <p className="mt-1 text-[13.5px] text-[#4b4b6a]">
                Patient-acquisition funnels &amp; reputation building. Dr. Dubay: 35,000+
                leads.
              </p>
              <p className="mt-3 text-[13px] font-bold text-[#FF6B35]">View playbook →</p>
            </div>
          </Link>

          <Link
            href="/real-estate"
            className="flex gap-4 rounded-[18px] border border-[rgba(17,18,26,0.08)] bg-white p-[26px] transition hover:-translate-y-1"
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(255,107,53,0.1)]">
              <HouseIcon />
            </div>
            <div>
              <h3 className="text-[17px] font-extrabold text-[#11121a]">Real Estate</h3>
              <p className="mt-1 text-[13.5px] text-[#4b4b6a]">
                Qualified buyer/seller leads with automated nurture sequences that close
                faster.
              </p>
              <p className="mt-3 text-[13px] font-bold text-[#FF6B35]">View playbook →</p>
            </div>
          </Link>

          <Link
            href="/staffing"
            className="flex gap-4 rounded-[18px] border-[1.5px] border-[rgba(255,107,53,0.35)] bg-[linear-gradient(135deg,rgba(255,107,53,0.07),rgba(255,107,53,0.02))] p-[26px] transition hover:-translate-y-1"
          >
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(255,107,53,0.16)]">
              <AddUserIcon />
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[17px] font-extrabold text-[#11121a]">
                Staffing &amp; Recruiting
                <span className="rounded-[5px] bg-[#FF6B35] px-[7px] py-0.5 text-[9px] font-extrabold uppercase text-white">
                  New
                </span>
              </h3>
              <p className="mt-1 text-[13.5px] text-[#4b4b6a]">
                Candidate &amp; client pipelines that fill roles faster, at lower cost — our
                newest growth vertical.
              </p>
              <p className="mt-3 text-[13px] font-bold text-[#FF6B35]">View playbook →</p>
            </div>
          </Link>
        </motion.div>

        <p className="mt-7 text-center text-[15px] text-[#4b4b6a]">
          Don&apos;t see your industry?{' '}
          <a href="#book" className="font-bold text-[#FF6B35]">
            We&apos;ve scaled brands across 20+ verticals — talk to us →
          </a>
        </p>
      </div>
    </section>
  );
}
