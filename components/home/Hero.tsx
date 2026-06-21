'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#fff,#fbfaf8)' }}
    >
      {/* Decorative blurred orb */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute w-[560px] h-[560px] blur-[110px] top-[-180px] right-[-120px]"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,.13), transparent 70%)' }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-[1.05fr_.95fr] gap-14 items-center pt-[84px] pb-[92px] max-md:grid-cols-1 max-md:text-center max-md:py-12"
        >
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 border border-[rgba(255,107,53,.25)] bg-[rgba(255,107,53,.06)] px-4 py-[7px] rounded-full max-md:mx-auto">
              <span className="block w-[7px] h-[7px] rounded-full bg-[#FF6B35]" />
              <span className="text-[12px] font-extrabold tracking-[.16em] uppercase text-[#FF6B35]">
                AI-First Performance Marketing
              </span>
            </span>

            <h1 className="text-[60px] max-md:text-[34px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#11121a] mt-6">
              We don&apos;t just market.
              <br />
              We <span className="text-[#FF6B35]">escalate</span> brands.
            </h1>

            <p className="text-[18px] max-md:text-[15px] text-[#4b4b6a] max-w-[480px] max-md:mx-auto mt-5">
              10,000+ campaigns run. 187+ brands scaled. 97% of clients stay. We
              turn marketing budgets into measurable, predictable revenue.
            </p>

            <div className="mt-7 flex items-center gap-5 max-md:flex-col">
              <a
                href="#book"
                className="text-[16px] font-extrabold text-white px-[34px] py-4 rounded-[12px] shadow-[0_8px_26px_rgba(255,107,53,.34)] max-md:w-full text-center"
                style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
              >
                Get Your Free Audit →
              </a>
              <a href="#work" className="flex items-center gap-3">
                <span className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[rgba(17,18,26,.18)] grid place-items-center">
                  ▶
                </span>
                <span className="text-[15px] font-bold text-[#11121a]">
                  See client results
                </span>
              </a>
            </div>

            <div className="mt-7 pt-6 border-t border-[rgba(17,18,26,.08)] flex items-center gap-3 max-md:justify-center">
              <div className="flex items-center">
                <span
                  className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-white font-bold text-[13px]"
                  style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
                >
                  M
                </span>
                <span
                  className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-white font-bold text-[13px] -ml-2.5"
                  style={{ background: 'linear-gradient(135deg,#6C63FF,#9c8fff)' }}
                >
                  R
                </span>
                <span
                  className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-white font-bold text-[13px] -ml-2.5"
                  style={{ background: 'linear-gradient(135deg,#00D4AA,#00b894)' }}
                >
                  S
                </span>
                <span className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-white font-bold text-[13px] -ml-2.5 bg-[#11121a]">
                  +184
                </span>
              </div>
              <span className="text-[14px] text-[#4b4b6a]">
                <b className="text-[#11121a]">187+ brands</b> trust us with their growth
              </span>
            </div>
          </div>

          {/* RIGHT: dashboard card */}
          <div className="relative bg-white border border-[rgba(17,18,26,.08)] rounded-[22px] shadow-[0_30px_70px_rgba(17,18,26,.12)] p-[26px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-[30px] h-[30px] rounded-lg grid place-items-center text-white font-bold"
                  style={{ background: 'linear-gradient(135deg,#FF6B35,#ff8c5a)' }}
                >
                  P
                </span>
                <span className="block text-left">
                  <span className="block font-bold text-[14px]">Paraiso Comfortwears</span>
                  <span className="block text-[11.5px] text-[#9898b8]">Last 30 days</span>
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-full">
                ● Live
              </span>
            </div>

            {/* Metric block */}
            <div className="mt-5 flex items-end justify-between">
              <div className="text-left">
                <span className="block text-[11.5px] text-[#9898b8]">Sales Growth</span>
                <span className="block text-[30px] font-extrabold">+930%</span>
              </div>
              <span className="text-[13px] font-extrabold text-[#00b894] bg-[rgba(0,212,170,.1)] px-2 py-1 rounded-lg">
                ↑ 10.3×
              </span>
            </div>

            {/* Mini area chart */}
            <div className="mt-4">
              <style>{`
                @keyframes heroLineDraw {
                  to { stroke-dashoffset: 0; }
                }
                .hero-chart-line {
                  stroke-dasharray: 600;
                  stroke-dashoffset: 600;
                  animation: heroLineDraw 2s ease-out forwards;
                }
              `}</style>
              <svg viewBox="0 0 300 90" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FF6B35" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 78 L40 70 L80 72 L120 56 L160 50 L200 34 L240 24 L300 8 L300 90 L0 90 Z"
                  fill="url(#heroArea)"
                />
                <path
                  className="hero-chart-line"
                  d="M0 78 L40 70 L80 72 L120 56 L160 50 L200 34 L240 24 L300 8"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Stat tiles */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="bg-[#faf9f7] rounded-[12px] p-[13px] text-center">
                <span className="block font-extrabold text-[#FF6B35]">20M+</span>
                <span className="block text-[11px] text-[#9898b8]">Reach</span>
              </div>
              <div className="bg-[#faf9f7] rounded-[12px] p-[13px] text-center">
                <span className="block font-extrabold text-[#6C63FF]">5M</span>
                <span className="block text-[11px] text-[#9898b8]">Top reel</span>
              </div>
              <div className="bg-[#faf9f7] rounded-[12px] p-[13px] text-center">
                <span className="block font-extrabold text-[#00b894]">10×</span>
                <span className="block text-[11px] text-[#9898b8]">ROAS</span>
              </div>
            </div>

            {/* Floating proof chip */}
            <div className="absolute bottom-[-22px] left-[-26px] max-md:hidden bg-white shadow-[0_16px_40px_rgba(17,18,26,.14)] rounded-[14px] p-3 flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-[rgba(255,200,61,.15)]">
                🏆
              </span>
              <span className="block text-left">
                <span className="block text-[13px] font-extrabold">Forbes Record Holder</span>
                <span className="block text-[11.5px] text-[#9898b8]">Dr. Dubay · 35k+ leads</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
