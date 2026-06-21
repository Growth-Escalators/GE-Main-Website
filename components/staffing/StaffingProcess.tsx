'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Intake',
    body: 'We map the role, must-haves, culture & comp — so we hunt for the right person, not just any person.',
  },
  {
    num: '02',
    title: 'Source',
    body: 'AI-assisted outreach across our standing talent pool, networks & job boards to surface strong matches quickly.',
  },
  {
    num: '03',
    title: 'Screen',
    body: 'AI screening plus human review of skills, portfolios & culture — so you only meet people who can do the work.',
  },
  {
    num: '04',
    title: 'Deliver',
    body: 'An interview-ready shortlist with our notes. We coordinate, you decide — for full-time or contract roles.',
  },
];

export default function StaffingProcess() {
  return (
    <section id="how" className="bg-white py-[88px]">
      <div className="mx-auto w-full max-w-[1180px] px-10 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="text-[12px] font-extrabold tracking-[.14em] uppercase text-[#FF6B35]">
            How it works
          </span>
          <h2 className="text-[40px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
            A pipeline, not a pile of resumes
          </h2>
          <p className="text-[17px] text-[#4b4b6a] max-w-[560px] mx-auto mt-4">
            Four stages from &quot;we need someone&quot; to &quot;they start Monday.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-[18px] mt-12 max-md:grid-cols-1">
          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[#fbfaf8] border border-[rgba(17,18,26,.07)] rounded-[18px] p-7"
            >
              <span className="block text-[34px] font-extrabold bg-clip-text text-transparent bg-[linear-gradient(135deg,#FF6B35,#ff8c5a,#6C63FF)]">
                {step.num}
              </span>
              <h3 className="text-[17px] font-extrabold mt-3">{step.title}</h3>
              <p className="text-[13.5px] text-[#4b4b6a] mt-2">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
