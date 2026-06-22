'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/* Floating "back to top" button. Appears after the user scrolls ~600px.
   Bottom-right, gradient orange circle, smooth scroll on click. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(17,18,26,0.5)' }}
          whileTap={{ scale: 0.92 }}
          style={{
            position: 'fixed',
            /* Bottom-LEFT so it doesn't collide with the GrowthBot FAB (bottom-right). */
            left: 'clamp(14px, 3vw, 24px)',
            bottom: 'calc(clamp(14px, 3vw, 24px) + env(safe-area-inset-bottom, 0px))',
            zIndex: 60,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(17,18,26,0.85)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.08)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 18px rgba(17,18,26,0.35)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
