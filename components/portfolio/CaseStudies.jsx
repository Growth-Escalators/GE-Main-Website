'use client';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { clients } from '../data/clients';
import styles from './CaseStudies.module.css';

const FILTERS = [
  { label: 'All',                   value: 'all'         },
  { label: 'Social Media',          value: 'branding'    },
  { label: 'Performance Marketing', value: 'performance' },
  { label: 'Web Development',       value: 'web'         },
  { label: 'Growth / Consultancy',  value: 'growth'      },
];

const isTouch = typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

function ClientCard({ client, onClick }) {
  const cardRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const el   = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x    = e.clientX - rect.left;
    const y    = e.clientY - rect.top;
    const cx   = rect.width  / 2;
    const cy   = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) *  8;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.5s ease';
    el.style.transform  = '';
    setTimeout(() => { if (el) el.style.transition = ''; }, 500);
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${styles['card--' + client.size]}`}
      style={{ '--card-grad': client.gradient }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(client)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(client)}
      aria-label={`${client.name} case study — click to expand`}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <div className={`${styles.logoPill} ${client.logoStyle ? styles['logoPill--text'] : ''}`}>
            {client.logo && !imgError ? (
              <img src={client.logo} alt={client.logoAlt} loading="lazy" onError={() => setImgError(true)} />
            ) : (
              <span className={`${styles.logoFallback} ${client.logoStyle === 'gold-serif' ? styles.goldSerif : ''} ${client.logoStyle === 'italic' ? styles.italic : ''}`}>
                {client.logoFallback}
              </span>
            )}
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>{client.industry}</span>
            <span className={styles.tag}>{client.service}</span>
          </div>
        </div>

        <div className={styles.cardBody}>
          <h3 className={styles.clientName}>{client.name}</h3>
          <p className={styles.resultBig}>
            {client.result}<br />
            <span>{client.resultLabel}</span>
          </p>
          {client.description && (
            <p className={styles.clientDesc}>{client.description}</p>
          )}
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.expandHint}>Click to expand →</span>
        </div>
      </div>

      <div className={styles.hoverOverlay} aria-hidden="true">
        <span>View Project →</span>
      </div>
    </article>
  );
}

/* ── Modal — rendered via portal at body level ── */
function CaseModal({ client, onClose }) {
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted]   = useState(false);

  // Wait until after hydration so document.body is available
  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!client) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [client]);

  // Close on Escape
  useEffect(() => {
    if (!client) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [client, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {client && (
        <div className={styles.portalRoot}>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={`${client.name} case study`}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.92, y: 16  }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Gradient hero band */}
            <div className={styles.modalHero} style={{ background: client.gradient }}>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

              <div className={styles.modalHeroContent}>
                <div className={`${styles.logoPill} ${client.logoStyle ? styles['logoPill--text'] : ''}`}>
                  {client.logo && !imgError ? (
                    <img src={client.logo} alt={client.logoAlt} loading="lazy" onError={() => setImgError(true)} />
                  ) : (
                    <span className={`${styles.logoFallback} ${client.logoStyle === 'gold-serif' ? styles.goldSerif : ''} ${client.logoStyle === 'italic' ? styles.italic : ''}`}>
                      {client.logoFallback}
                    </span>
                  )}
                </div>
                <div>
                  <div className={styles.tags} style={{ justifyContent: 'flex-start', marginBottom: 10 }}>
                    <span className={styles.tag}>{client.industry}</span>
                    <span className={styles.tag}>{client.service}</span>
                  </div>
                  <h2 className={styles.modalTitle}>{client.name}</h2>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className={styles.modalBody}>
              <div className={styles.modalResult}>
                <span className={styles.modalResultNum}>{client.result}</span>
                <span className={styles.modalResultLabel}>{client.resultLabel}</span>
              </div>

              <p className={styles.modalDesc}>{client.description}</p>

              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.modalCta}`}
              >
                Visit Live Site ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

const PAGE_SIZE = 6;

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalClient, setModalClient]   = useState(null);
  const [showAll, setShowAll]           = useState(false);

  const filtered = clients.filter(c =>
    activeFilter === 'all' || c.category.split(' ').includes(activeFilter)
  );
  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = !showAll && filtered.length > PAGE_SIZE;

  return (
    <section id="work" className={`${styles.section} section-padding`} aria-labelledby="work-heading">
      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="section-tag">Our Work</div>
          <h2 id="work-heading" className="section-headline">Work that speaks for itself.</h2>
        </motion.div>

        <motion.div
          className={styles.filterTabs}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map(f => (
            <button
              key={f.label}
              className={`${styles.filterTab}${activeFilter === f.value ? ' ' + styles.filterTabActive : ''}`}
              onClick={() => { setActiveFilter(f.value); setShowAll(false); }}
              role="tab"
              aria-selected={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className={styles.masonry}>
          <AnimatePresence mode="popLayout">
            {visible.map((client, i) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0  }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`${styles.masonryItem} ${styles['masonryItem--' + client.size]}`}
              >
                <ClientCard client={client} onClick={setModalClient} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            className={styles.viewAllWrap}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button
              className={styles.viewAllBtn}
              onClick={() => setShowAll(true)}
            >
              View All Projects ↓
            </button>
          </motion.div>
        )}

      </div>

      <CaseModal client={modalClient} onClose={() => setModalClient(null)} />
    </section>
  );
}