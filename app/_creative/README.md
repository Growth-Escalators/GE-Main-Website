# `_creative` — dormant route

This folder is intentionally prefixed with `_`. Next.js App Router skips any
folder whose name starts with an underscore, so **none of this code is
deployed** at `growthescalators.com/creative` or any other URL on the main
site.

## Why it's here

The creative portfolio (a.k.a. "Folio") is going to live on its **own
domain** — provisionally named *creative world* — independent of the main
Growth Escalators marketing site. The code is kept in this repo for shared
development, but the route is dormant until the new domain is wired up.

## Reactivating it on a separate domain

When the new domain (e.g. `creativeworld.com`) is purchased:

1. Add the domain to the Vercel project (Settings → Domains → Add) and point
   DNS at Vercel (A `76.76.21.21` or CNAME `cname.vercel-dns.com`).
2. Rename this folder back from `_creative` → `creative` to re-enable the
   route inside the project.
3. Add a `middleware.ts` at the repo root that inspects the incoming `host`
   header. Pseudocode:
   ```ts
   // middleware.ts
   import { NextResponse } from 'next/server'
   import type { NextRequest } from 'next/server'

   const CREATIVE_HOSTS = new Set(['creativeworld.com', 'www.creativeworld.com'])

   export function middleware(req: NextRequest) {
     const host = req.headers.get('host') ?? ''
     const url = req.nextUrl.clone()

     // On the new domain: rewrite the root to /creative, block everything else.
     if (CREATIVE_HOSTS.has(host)) {
       if (url.pathname === '/' ) {
         url.pathname = '/creative'
         return NextResponse.rewrite(url)
       }
       if (!url.pathname.startsWith('/creative') && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
         return new NextResponse(null, { status: 404 })
       }
       return NextResponse.next()
     }

     // On growthescalators.com: hide /creative entirely.
     if (url.pathname.startsWith('/creative')) {
       return new NextResponse(null, { status: 404 })
     }
     return NextResponse.next()
   }

   export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
   ```
4. Verify locally with `Host:` header overrides (`curl -H "Host: creativeworld.com" http://localhost:3000/`).

Until step 1 is done, leave the folder underscore-prefixed.
