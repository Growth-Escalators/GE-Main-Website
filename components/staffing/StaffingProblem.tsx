'use client';

import { motion } from 'framer-motion';

const CARDS = [
  {
    title: 'Slow hiring',
    body: 'Weeks of searching while the role sits empty and the work piles up.',
  },
  {
    title: 'Resume overload',
    body: 'Resume piles with no real screening — you do the recruiter’s job.',
  },
  {
    title: 'Wrong fits',
    body: 'Candidates who look right on paper but can’t do the actual work.',
  },
  {
    title: 'Ghosting',
    body: 'Candidates vanish mid-process with no follow-up system.',
  },
];

export default function StaffingProblem() {
  return (
    <section className="bg-[#fbfaf8] border-t border-[rgba(17,18,26,.07)] py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-[48px]"
        >
          <span className="text-[12px] font-extrabold tracking-[.14em] uppercase text-[#FF6B35]">
            The hiring problem
          </span>
          <h2 className="text-[40px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
            Every empty seat is costing you money
          </h2>
          <p className="text-[17px] text-[#4b4b6a] max-w-[580px] mx-auto mt-4">
            Slow hiring isn&apos;t just frustrating — it&apos;s lost revenue, burned-out teams, and bad hires you pay for twice.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-[18px] max-md:grid-cols-1">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white border border-[rgba(17,18,26,.08)] rounded-[18px] p-[26px]"
            >
              <h3 className="text-[22px] font-extrabold text-[#FF6B35]">{card.title}</h3>
              <p className="text-[14px] text-[#4b4b6a] mt-2">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
