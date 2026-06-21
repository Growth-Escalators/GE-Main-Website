# Self-hosted logos — TODO

The site currently hot-links logos from external hosts (the WordPress CDN for the
Growth Escalators wordmark; Google's favicon service for client logos in the
portfolio). The brand-foundation PR set up this folder and left `TODO(logo):`
markers at the reference sites so the swap is a drop-in once real assets exist.

**Do not invent a logo** — the mocks use a placeholder. Wait for the official files.

## Needed assets

### Growth Escalators (company)
- `growth-escalators.svg` — primary wordmark (transparent)
- `growth-escalators.png` — transparent PNG fallback (≥ 2× header height)
- `growth-escalators-og.png` — 1200×630 social/OpenGraph card

Replace the remote WordPress URL
(`https://growthescalators.com/wp-content/uploads/2023/10/growth-escalator-logo.png`)
at these reference sites:
- `app/layout.tsx` — OpenGraph image + JSON-LD `logo`
- `app/contact/layout.tsx` — OG image
- `components/sections/Footer.tsx` — footer wordmark
- `components/landing/IndustryLandingPage.tsx` — landing header wordmark
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — blog header + article OG

### Client logos (for the redesign's trust strip — built in step 2)
Self-host real logos (grayscale → color on hover) instead of Google favicons.
Suggested files under `public/logos/clients/`:
- `paraiso.svg`, `elixzor.svg`, `dr-dubay.svg`, `sn-herbals.svg`,
  `odra-organics.svg`, `cklakart.svg`, `credo-world.svg`

The portfolio components (`components/portfolio/ClientLogos.jsx`,
`components/portfolio/Hero.jsx`) still build favicon URLs via
`google.com/s2/favicons`; migrate those to these self-hosted files when available.
