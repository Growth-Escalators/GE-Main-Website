'use client';

import { motion } from 'framer-motion';

const CARDS = [
  {
    title: 'AI does the heavy lifting',
    body: 'We use AI to source and screen across a deep talent pool — so the right people surface faster, without the resume avalanche.',
  },
  {
    title: 'A deep bench of talent',
    body: 'A standing pool of vetted developers, designers and marketers — full-time or contract, ready for remote roles.',
  },
  {
    title: "We've sat in the seat",
    body: 'Because we build and market for clients ourselves, we know what "good" looks like — and can tell who actually delivers.',
  },
  {
    title: 'Ownership, not hand-off',
    body: 'We stay accountable for fit and outcomes — your hire is our reputation, not a closed ticket.',
  },
];

export default function StaffingWhyUs() {
  return (
    <section className="bg-[#fbfaf8] border-t border-[rgba(17,18,26,.07)] py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="block text-[12px] font-extrabold tracking-[.2em] uppercase text-[#FF6B35]">
            Why us
          </span>
          <h2 className="text-[40px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
            We use the talent we provide
          </h2>
          <p className="text-[17px] text-[#4b4b6a] max-w-[600px] mx-auto mt-4">
            We run tech and marketing for our own clients and projects every day —
            so when we place people, we&apos;re matching the same standard we hold
            ourselves to.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[900px] mx-auto mt-12">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
              className="bg-white rounded-[18px] p-7 border border-[rgba(17,18,26,.07)]"
            >
              <h3 className="text-[18px] font-extrabold text-[#11121a]">{card.title}</h3>
              <p className="text-[14px] text-[#4b4b6a] mt-2">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
