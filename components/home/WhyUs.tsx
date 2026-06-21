'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const points = [
  {
    index: '01',
    title: 'Transparent reporting',
    body: 'Live dashboards. You see every click and every result, anytime.',
  },
  {
    index: '02',
    title: 'Certified specialists',
    body: 'Meta- & Google-certified strategists running on best-practice playbooks.',
  },
  {
    index: '03',
    title: 'Dedicated team',
    body: 'A real strategist on WhatsApp — not a ticket queue or a chatbot.',
  },
  {
    index: '04',
    title: 'ROI-first, always',
    body: "We optimize for revenue and retention — not likes that don't pay.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#11121a] py-[90px] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <div className="grid grid-cols-[.85fr_1.15fr] items-center gap-[60px] max-md:grid-cols-1 max-md:gap-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-[12px] font-extrabold uppercase tracking-[.22em] text-[#FF6B35]">
              Why brands stay
            </p>
            <h2 className="mt-4 text-[40px] font-extrabold leading-[1.1] max-md:text-[28px]">
              Reliable enough to bet your budget on.
            </h2>
            <p className="mt-5 text-[16.5px] text-[#a8a8c0]">
              No vanity metrics, no disappearing account managers. Just transparent
              reporting and a team that treats your spend like our own — which is why 97%
              of clients renew.
            </p>
            <a
              href="#book"
              className="mt-7 inline-block rounded-[12px] bg-[linear-gradient(135deg,#FF6B35,#ff8c5a)] px-[30px] py-[15px] text-[15px] font-extrabold text-white"
            >
              Book a Free Strategy Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="grid grid-cols-2 gap-4 max-md:grid-cols-1"
          >
            {points.map((p) => (
              <div
                key={p.index}
                className="rounded-[16px] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] p-6"
              >
                <p className="text-[13px] font-extrabold text-[#FF6B35]">{p.index}</p>
                <h3 className="mt-2 text-[16px] font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-[#9c9cb5]">{p.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
