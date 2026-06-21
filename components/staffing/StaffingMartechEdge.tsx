'use client';

import { motion } from 'framer-motion';

const CHECKS = [
  'AI sources, ranks and matches candidates across our talent pool in minutes',
  'We test for skill in the actual tools — because we use them every day',
  'Automated screening & scheduling cut the busywork traditional recruiters drown in',
];

export default function StaffingMartechEdge() {
  return (
    <section className="bg-[#fbfaf8] border-t border-[rgba(17,18,26,.07)] py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="grid grid-cols-[.9fr_1.1fr] gap-14 items-center max-md:grid-cols-1">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-[12px] font-extrabold tracking-[.14em] uppercase text-[#FF6B35]">
              Why we&apos;re faster
            </span>
            <h2 className="text-[38px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
              Recruiting, powered by MarTech &amp; AI.
            </h2>
            <p className="text-[16px] text-[#4b4b6a] mt-4">
              We&apos;re a MarTech and performance team first. We live in the same analytics, automation, ad and dev tools the roles we fill are built on — so we can judge real skill, not keywords. Then we let AI do the heavy lifting across the pipeline.
            </p>

            <div className="mt-6 space-y-3">
              {CHECKS.map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="w-[24px] h-[24px] shrink-0 rounded-full bg-[rgba(255,107,53,.12)] text-[#FF6B35] grid place-items-center text-[13px] font-bold">
                    ✓
                  </span>
                  <span className="text-[15px] text-[#2a2a3a]">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: AI-driven workflow card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-[22px] shadow-[0_16px_40px_rgba(17,18,26,.07)] p-7"
          >
            <div className="flex items-center gap-2">
              <span className="bg-[#FF6B35] text-white rounded-md px-2 py-1 text-[12px] font-extrabold">
                AI
              </span>
              <span className="font-extrabold">Our AI-driven workflow</span>
            </div>

            <div className="mt-4 space-y-2.5">
              {/* 01 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  <span className="font-extrabold text-[#FF6B35]">01</span>
                  <span className="block min-w-0">
                    <span className="block text-[14px] font-bold">AI sourcing</span>
                    <span className="block text-[12px] text-[#9898b8]">Scans our pool + networks for fits</span>
                  </span>
                </span>
                <span className="shrink-0 text-[11px] font-bold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-full">
                  ~ minutes
                </span>
              </div>

              {/* 02 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  <span className="font-extrabold text-[#FF6B35]">02</span>
                  <span className="block min-w-0">
                    <span className="block text-[14px] font-bold">AI screening</span>
                    <span className="block text-[12px] text-[#9898b8]">Ranks skills, then humans review</span>
                  </span>
                </span>
                <span className="shrink-0 text-[11px] font-bold text-[#9898b8] bg-[rgba(17,18,26,.05)] px-2 py-1 rounded-full">
                  automated
                </span>
              </div>

              {/* 03 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  <span className="font-extrabold text-[#FF6B35]">03</span>
                  <span className="block min-w-0">
                    <span className="block text-[14px] font-bold">Smart matching</span>
                    <span className="block text-[12px] text-[#9898b8]">Role, stack & culture aligned</span>
                  </span>
                </span>
                <span className="shrink-0 text-[11px] font-bold text-[#9898b8] bg-[rgba(17,18,26,.05)] px-2 py-1 rounded-full">
                  scored
                </span>
              </div>

              {/* 04 — highlighted */}
              <div className="bg-[rgba(255,107,53,.08)] border border-[rgba(255,107,53,.18)] rounded-[12px] p-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  <span className="font-extrabold text-[#FF6B35]">04</span>
                  <span className="block min-w-0">
                    <span className="block text-[14px] font-bold">You get a shortlist</span>
                    <span className="block text-[12px] text-[#9898b8]">Interview-ready, with our notes</span>
                  </span>
                </span>
                <span className="shrink-0 text-[16px]">🎯</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
