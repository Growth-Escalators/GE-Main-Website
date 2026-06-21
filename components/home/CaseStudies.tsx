'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type CaseStudy = {
  gradient: string;
  tag: string;
  stat: string;
  statClass: string;
  desc: string;
};

const CASES: CaseStudy[] = [
  {
    gradient: 'linear-gradient(150deg,#1a0a2e,#6d28d9 55%,#a855f7)',
    tag: 'Fashion · Social + Ads',
    stat: '10× Sales',
    statClass: 'text-[40px]',
    desc: 'Paraiso Comfortwears — 10× monthly sales in 30 days. One reel hit 5M views, 20M+ total reach.',
  },
  {
    gradient: 'linear-gradient(150deg,#1a0533,#3b0f72 55%,#6d28d9)',
    tag: 'YouTube · USA',
    stat: '10× ROAS',
    statClass: 'text-[34px]',
    desc: 'Elixzor Media — scaled a US YouTube-automation business with lead gen & full-funnel marketing.',
  },
  {
    gradient: 'linear-gradient(150deg,#0a2a6e,#1a4bb5 60%,#2563eb)',
    tag: 'Healthcare · Web',
    stat: '35,000+',
    statClass: 'text-[34px]',
    desc: 'Dr. Dheeraj Dubay — leads + PR for North India’s top joint-replacement surgeon. Forbes record holder.',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-white py-[92px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-between items-end mb-[44px] max-md:flex-col max-md:items-start max-md:gap-3"
        >
          <div>
            <div className="text-[12px] font-extrabold tracking-[.22em] uppercase text-[#FF6B35]">
              Proof, not promises
            </div>
            <h2 className="text-[42px] max-md:text-[26px] font-extrabold tracking-[-.025em] text-[#11121a] mt-3">
              Results that speak for themselves
            </h2>
          </div>
          <Link
            href="/work"
            className="text-[14.5px] font-bold text-[#4b4b6a] whitespace-nowrap"
          >
            View all case studies →
          </Link>
        </motion.div>

        <div className="grid grid-cols-[1.4fr_1fr_1fr] max-md:grid-cols-1 gap-5">
          {CASES.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            >
              <Link
                href="/work"
                style={{ backgroundImage: c.gradient }}
                className="relative flex flex-col justify-between min-h-[360px] rounded-[20px] overflow-hidden p-8 text-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,18,26,.16)]"
              >
                <span className="self-start bg-[rgba(255,255,255,.16)] uppercase text-[11px] font-bold px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <div>
                  <div className={`${c.statClass} font-extrabold`}>{c.stat}</div>
                  <p className="text-[14px] opacity-90 mt-2">{c.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
