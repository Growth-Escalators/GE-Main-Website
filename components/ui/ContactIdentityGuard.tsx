'use client'

import { useEffect } from 'react'

// Public Growth Escalators contact identity. This guard exists so legacy and
// dynamically mounted UI cannot surface a stale address while page families
// are migrated to the new design system.
const CANONICAL_EMAIL = 'jatin@growthescalators.com'
const CANONICAL_PHONE = '+91-7733888883'
const PHONE_HREF = 'tel:+917733888883'

const EMAIL_PATTERN = /info@growthescalators\.com/gi
const PHONE_PATTERN = /\+91[\s-]*77338[\s-]*88883/g

type ContactRoot = Node & ParentNode

function normalizeContactIdentity(root: ContactRoot) {
  root.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]').forEach((anchor) => {
    if (EMAIL_PATTERN.test(anchor.href) && anchor.getAttribute('href') !== `mailto:${CANONICAL_EMAIL}`) {
      anchor.setAttribute('href', `mailto:${CANONICAL_EMAIL}`)
    }
    EMAIL_PATTERN.lastIndex = 0
  })

  root.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]').forEach((anchor) => {
    if (
      anchor.href.replace(/\D/g, '').endsWith('917733888883') &&
      anchor.getAttribute('href') !== PHONE_HREF
    ) {
      anchor.setAttribute('href', PHONE_HREF)
    }
  })

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  let node = walker.nextNode()
  while (node) {
    nodes.push(node as Text)
    node = walker.nextNode()
  }

  nodes.forEach((textNode) => {
    const value = textNode.nodeValue
    if (!value) return
    const nextValue = value
      .replace(EMAIL_PATTERN, CANONICAL_EMAIL)
      .replace(PHONE_PATTERN, CANONICAL_PHONE)
    EMAIL_PATTERN.lastIndex = 0
    PHONE_PATTERN.lastIndex = 0
    if (nextValue !== value) textNode.nodeValue = nextValue
  })
}

export default function ContactIdentityGuard() {
  useEffect(() => {
    normalizeContactIdentity(document.body)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.nodeValue || ''
            const normalized = text
              .replace(EMAIL_PATTERN, CANONICAL_EMAIL)
              .replace(PHONE_PATTERN, CANONICAL_PHONE)
            EMAIL_PATTERN.lastIndex = 0
            PHONE_PATTERN.lastIndex = 0
            if (normalized !== text) node.nodeValue = normalized
            return
          }

          if (node instanceof HTMLElement) normalizeContactIdentity(node)
        })

        if (mutation.type === 'attributes' && mutation.target instanceof HTMLAnchorElement) {
          normalizeContactIdentity(mutation.target.parentElement || document.body)
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href'],
    })

    return () => observer.disconnect()
  }, [])

  return null
}
