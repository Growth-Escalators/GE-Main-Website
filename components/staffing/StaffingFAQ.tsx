'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ITEMS = [
  {
    q: 'How does your AI matching work?',
    a: 'We combine AI sourcing and screening with human review across our talent pool to surface people who genuinely fit the role — then shortlist the strongest for you.',
  },
  {
    q: 'Do you offer both full-time and contract talent?',
    a: 'Yes — we place people for full-time roles and for contract or project-based engagements, including remote-ready hires.',
  },
  {
    q: 'How does pricing work?',
    a: "It depends on the role and engagement type. We'll walk you through it on your free hiring audit — no commitment.",
  },
  {
    q: 'Do you staff remote & international roles?',
    a: 'Yes. Our talent pool is built for remote work, and we regularly source for distributed and international teams.',
  },
];

export default function StaffingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="block text-[12px] font-extrabold tracking-[.2em] uppercase text-[#FF6B35]">
            Questions
          </span>
          <h2 className="text-[40px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
            Hiring, answered
          </h2>
        </motion.div>

        <div className="max-w-[760px] mx-auto mt-10 space-y-3">
          {ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="border border-[rgba(17,18,26,.1)] rounded-[14px] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-[16px] font-bold text-[#11121a]">{item.q}</span>
                  <span
                    className="text-[#FF6B35] text-[22px] leading-none transition-transform duration-200"
                    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14.5px] text-[#4b4b6a] px-5 pb-5">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
