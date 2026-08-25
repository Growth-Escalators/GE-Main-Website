'use client'

import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'

export default function DeferredGrowthBot() {
  const [Bot, setBot] = useState<ComponentType | null>(null)
  const [loading, setLoading] = useState(false)
  const [openWhenReady, setOpenWhenReady] = useState(false)

  async function activate() {
    if (Bot || loading) return
    setLoading(true)
    setOpenWhenReady(true)

    try {
      const mod = await import('./GrowthBot')
      setBot(() => mod.default)
    } catch {
      setLoading(false)
      setOpenWhenReady(false)
    }
  }

  useEffect(() => {
    if (!Bot || !openWhenReady) return

    let attempts = 0
    const timer = window.setInterval(() => {
      const trigger = document.querySelector<HTMLButtonElement>('.gb-trigger')
      attempts += 1

      if (trigger) {
        window.clearInterval(timer)
        setOpenWhenReady(false)
        setLoading(false)
        trigger.click()
      } else if (attempts >= 30) {
        window.clearInterval(timer)
        setOpenWhenReady(false)
        setLoading(false)
      }
    }, 40)

    return () => window.clearInterval(timer)
  }, [Bot, openWhenReady])

  if (Bot) return <Bot />

  return (
    <>
      <button
        type="button"
        onClick={activate}
        className="gb-deferred-trigger"
        title="Chat with Growth Bot"
        aria-label={loading ? 'Loading Growth Bot' : 'Chat with Growth Bot'}
        aria-busy={loading}
      >
        <span className="gb-deferred-halo" aria-hidden="true" />
        <span className="gb-deferred-icon" aria-hidden="true">
          {loading ? (
            <span className="gb-deferred-spinner" />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.8 4.7L5.5 9.5l4.7 1.8L12 16l1.8-4.7 4.7-1.8-4.7-1.8L12 3Z" />
              <path d="m19 15-.8 2.2L16 18l2.2.8L19 21l.8-2.2L22 18l-2.2-.8L19 15Z" />
            </svg>
          )}
        </span>
        {!loading && <span className="gb-deferred-online" aria-hidden="true" />}
      </button>

      <style>{`
        .gb-deferred-trigger {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 60px;
          height: 60px;
          z-index: 99999;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          background:
            radial-gradient(circle at 30% 28%, rgba(255,235,210,.55) 0%, rgba(255,154,90,0) 35%),
            linear-gradient(135deg, #FF8C5A 0%, #FF6B35 45%, #E55A2A 100%);
          box-shadow:
            0 14px 32px rgba(255,107,53,.45),
            0 4px 10px rgba(17,18,26,.30),
            inset 0 1px 0 rgba(255,255,255,.45),
            inset 0 -3px 8px rgba(180,60,0,.35);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .gb-deferred-trigger:hover { transform: translateY(-2px) scale(1.05); }
        .gb-deferred-trigger:focus-visible { outline: 3px solid rgba(255,107,53,.35); outline-offset: 4px; }
        .gb-deferred-icon { display: inline-flex; align-items: center; justify-content: center; filter: drop-shadow(0 1px 1px rgba(0,0,0,.25)); }
        .gb-deferred-halo {
          position: absolute;
          inset: -4px;
          border: 2px solid rgba(255,107,53,.45);
          border-radius: 50%;
          animation: gbDeferredHalo 2.2s ease-out infinite;
          pointer-events: none;
        }
        .gb-deferred-online {
          position: absolute;
          right: 3px;
          bottom: 3px;
          width: 14px;
          height: 14px;
          border: 2px solid #fff;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16,185,129,.35);
        }
        .gb-deferred-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,.42);
          border-top-color: #fff;
          border-radius: 50%;
          animation: gbDeferredSpin .7s linear infinite;
        }
        @keyframes gbDeferredHalo {
          0% { transform: scale(1); opacity: .7; }
          70%, 100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes gbDeferredSpin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .gb-deferred-trigger, .gb-deferred-trigger * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  )
}
