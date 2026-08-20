'use client'

import { useEffect } from 'react'
import { captureLeadAttribution } from '@/lib/leadAttribution'

/**
 * Tiny, renderless initializer mounted once from the root layout. It captures
 * only the first landing page/referrer/UTMs needed for lead attribution.
 */
export default function LeadAttributionCapture() {
  useEffect(() => {
    captureLeadAttribution()
  }, [])

  return null
}
