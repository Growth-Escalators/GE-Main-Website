'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ALL_PRESENTERS, type Presenter } from '../_data/presenters'
import styles from './PresenterSwitch.module.css'

type Props = {
  active: Presenter
}

export default function PresenterSwitch({ active }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className={styles.wrap} ref={ref}>
      <span className={styles.label}>Presented by</span>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.avatar} style={{ background: active.accent }}>{active.initials}</span>
        <span className={styles.name}>{active.name}</span>
        <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .25s' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <li className={styles.section}>STUDIO</li>
            {ALL_PRESENTERS.filter((p) => p.kind === 'studio').map((p) => (
              <Item key={p.slug} p={p} active={p.slug === active.slug} onSelect={() => setOpen(false)} />
            ))}
            <li className={styles.section}>PEOPLE</li>
            {ALL_PRESENTERS.filter((p) => p.kind === 'personal').map((p) => (
              <Item key={p.slug} p={p} active={p.slug === active.slug} onSelect={() => setOpen(false)} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function Item({ p, active, onSelect }: { p: Presenter; active: boolean; onSelect: () => void }) {
  const href = p.slug === 'studio' ? '/creative' : `/creative?as=${p.slug}`
  return (
    <li role="option" aria-selected={active}>
      <Link href={href} className={`${styles.item} ${active ? styles.itemActive : ''}`} onClick={onSelect}>
        <span className={styles.itemAvatar} style={{ background: p.accent }}>{p.initials}</span>
        <span className={styles.itemBody}>
          <span className={styles.itemName}>{p.name}</span>
          <span className={styles.itemRole}>{p.role}</span>
        </span>
        {active && <span className={styles.dot} aria-hidden />}
      </Link>
    </li>
  )
}
