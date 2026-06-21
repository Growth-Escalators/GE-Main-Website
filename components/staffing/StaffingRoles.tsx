'use client';

import { motion } from 'framer-motion';

type Category = 'Tech' | 'Marketing';

const CARDS: { category: Category; title: string; body: string }[] = [
  {
    category: 'Tech',
    title: 'Software Development',
    body: 'Full-stack, frontend, backend & mobile engineers.',
  },
  {
    category: 'Tech',
    title: 'Design & Product',
    body: 'UI/UX designers, product managers & QA.',
  },
  {
    category: 'Tech',
    title: 'Data, AI & Automation',
    body: 'Data engineers, ML & automation specialists.',
  },
  {
    category: 'Marketing',
    title: 'Performance Marketing',
    body: 'Meta & Google ad buyers, growth marketers.',
  },
  {
    category: 'Marketing',
    title: 'Content & Social',
    body: 'Creators, copywriters & social media managers.',
  },
  {
    category: 'Marketing',
    title: 'SEO & Growth',
    body: 'SEO specialists, analysts & growth strategists.',
  },
];

export default function StaffingRoles() {
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
            Who we staff for
          </span>
          <h2 className="text-[40px] max-md:text-[26px] font-extrabold text-[#11121a] mt-3">
            Tech &amp; marketing roles we fill
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 mt-12">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
              className="bg-[#fbfaf8] border border-[rgba(17,18,26,.07)] rounded-[16px] p-6"
            >
              <span
                className="block text-[11px] uppercase tracking-[.1em] font-extrabold"
                style={{ color: card.category === 'Tech' ? '#FF6B35' : '#6C63FF' }}
              >
                {card.category}
              </span>
              <h3 className="text-[16px] font-extrabold mt-2 text-[#11121a]">
                {card.title}
              </h3>
              <p className="text-[13.5px] text-[#4b4b6a] mt-1.5">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
