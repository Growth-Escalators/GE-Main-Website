'use client';

import { motion } from 'framer-motion';

export default function StaffingHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#fff,#fbfaf8)' }}
    >
      {/* Decorative blurred orange orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute w-[560px] h-[560px] blur-[110px] top-[-200px] right-[-160px]"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,.12), transparent 70%)' }}
      />

      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-[1.05fr_.95fr] gap-14 items-center pt-[80px] pb-[88px] max-md:grid-cols-1 max-md:py-12 max-md:text-center"
        >
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 border border-[rgba(255,107,53,.25)] bg-[rgba(255,107,53,.06)] px-4 py-[7px] rounded-full max-md:mx-auto">
              <span className="block w-[7px] h-[7px] rounded-full bg-[#FF6B35]" />
              <span className="text-[12px] font-extrabold tracking-[.14em] uppercase text-[#FF6B35]">
                Tech &amp; Marketing Talent
              </span>
            </span>

            <h1 className="text-[54px] max-md:text-[32px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#11121a] mt-6">
              The <span className="text-[#FF6B35]">tech &amp; marketing</span> talent you need — matched by AI.
            </h1>

            <p className="text-[18px] max-md:text-[15px] text-[#4b4b6a] max-w-[490px] max-md:mx-auto mt-5">
              We tap a deep pool of vetted developers, designers and marketers — full-time or contract, built for remote. The same calibre of people we use to build and grow our own clients&apos; projects.
            </p>

            <div className="mt-7 flex gap-4 max-md:flex-col">
              <a
                href="#book"
                className="text-[16px] font-extrabold text-white px-[34px] py-4 rounded-[12px] shadow-[0_8px_26px_rgba(255,107,53,.34)] max-md:w-full text-center"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
              >
                Get a Free Hiring Audit →
              </a>
              <a href="#how" className="flex items-center gap-3 max-md:justify-center">
                <span className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[rgba(17,18,26,.18)] grid place-items-center">
                  ▶
                </span>
                <span className="text-[15px] font-bold text-[#11121a]">How it works</span>
              </a>
            </div>

            <div className="mt-7 pt-6 border-t border-[rgba(17,18,26,.08)] grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <div>
                <span className="block text-[21px] font-extrabold text-[#FF6B35]">AI-matched</span>
                <span className="block text-[12.5px] text-[#9898b8]">Sourcing &amp; screening</span>
              </div>
              <div>
                <span className="block text-[21px] font-extrabold text-[#FF6B35]">Tech + Marketing</span>
                <span className="block text-[12.5px] text-[#9898b8]">Our two specialisms</span>
              </div>
              <div>
                <span className="block text-[21px] font-extrabold text-[#FF6B35]">Full-time / Contract</span>
                <span className="block text-[12.5px] text-[#9898b8]">Remote-ready</span>
              </div>
            </div>
          </div>

          {/* RIGHT: live hiring pipeline card */}
          <div className="bg-white rounded-[22px] shadow-[0_30px_70px_rgba(17,18,26,.12)] p-6 text-left">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-[15px]">Live hiring pipeline</span>
              <span className="text-[11px] font-bold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-full">
                ● Active
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {/* Row 1 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center gap-3">
                <span
                  className="w-[38px] h-[38px] shrink-0 rounded-full grid place-items-center text-white font-bold text-[13px]"
                  style={{ background: 'linear-gradient(135deg,#6C63FF,#9c8fff)' }}
                >
                  SK
                </span>
                <span className="block flex-1 min-w-0">
                  <span className="block text-[14px] font-bold">Full-Stack Developer</span>
                  <span className="block text-[11.5px] text-[#9898b8]">AI-matched · Strong fit</span>
                </span>
                <span className="text-[11px] font-bold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-full">
                  Ready
                </span>
              </div>

              {/* Row 2 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center gap-3">
                <span
                  className="w-[38px] h-[38px] shrink-0 rounded-full grid place-items-center text-white font-bold text-[13px]"
                  style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
                >
                  AM
                </span>
                <span className="block flex-1 min-w-0">
                  <span className="block text-[14px] font-bold">Performance Marketer</span>
                  <span className="block text-[11.5px] text-[#9898b8]">AI-matched · Strong fit</span>
                </span>
                <span className="text-[11px] font-bold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-full">
                  Ready
                </span>
              </div>

              {/* Row 3 */}
              <div className="bg-[#faf9f7] rounded-[12px] p-3 flex items-center gap-3">
                <span
                  className="w-[38px] h-[38px] shrink-0 rounded-full grid place-items-center text-white font-bold text-[13px]"
                  style={{ background: 'linear-gradient(135deg,#00D4AA,#00b894)' }}
                >
                  Rp
                </span>
                <span className="block flex-1 min-w-0">
                  <span className="block text-[14px] font-bold">UI/UX Designer</span>
                  <span className="block text-[11.5px] text-[#9898b8]">Shortlisted</span>
                </span>
                <span className="text-[11px] font-bold text-[#6C63FF] bg-[rgba(108,99,255,.1)] px-2 py-1 rounded-full">
                  Stage 2
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="bg-[rgba(255,107,53,.06)] rounded-[12px] p-3">
                <span className="block text-[22px] font-extrabold text-[#FF6B35]">42</span>
                <span className="block text-[12px] text-[#9898b8]">Candidates sourced</span>
              </div>
              <div className="bg-[rgba(0,212,170,.06)] rounded-[12px] p-3">
                <span className="block text-[22px] font-extrabold text-[#00b894]">5</span>
                <span className="block text-[12px] text-[#9898b8]">Interview-ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
