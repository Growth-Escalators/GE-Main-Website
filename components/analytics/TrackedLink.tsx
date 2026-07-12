'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { trackLead, type LeadMethod } from '@/lib/analytics'

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Which GA4 `generate_lead` method this link represents. */
  method: LeadMethod
}

/**
 * An `<a>` that fires a GA4 `generate_lead` event on click.
 *
 * Use this for outbound lead links (mailto: / tel: / wa.me / cal.com) that live
 * inside Server Components, where an inline `onClick` isn't available. Client
 * Components can just call `trackLead(...)` inline instead.
 */
export default function TrackedLink({ method, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        trackLead(method)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
