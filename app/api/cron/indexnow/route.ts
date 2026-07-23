import { NextRequest, NextResponse } from 'next/server'
import { submitToIndexNow } from '@/lib/indexnow'
import sitemap from '@/app/sitemap'

/**
 * GET /api/cron/indexnow
 *
 * Triggered daily by the Vercel Cron job defined in vercel.json. Submits every
 * URL currently in app/sitemap.ts (the same source Next.js uses for
 * sitemap.xml) to IndexNow — so new blog posts / landing pages get picked up
 * automatically within a day of deploy, with no manual step.
 *
 * For an immediate ping right after publishing (don't want to wait for the
 * next cron run), use `npx tsx scripts/indexnow-ping.ts <url>` instead.
 *
 * Auth: Vercel signs cron requests with `Authorization: Bearer $CRON_SECRET`
 * (see https://vercel.com/docs/cron-jobs/manage-cron-jobs#securing-cron-jobs).
 * CRON_SECRET is REQUIRED — this route fails closed (401) if it isn't set,
 * since it makes a real outbound call to a third-party API on every accepted
 * hit and must never run for an unauthenticated caller. Set it in Vercel →
 * Project → Settings → Environment Variables before this route goes live.
 */

export const runtime = 'nodejs'
// This route makes a live outbound network call on every hit and must never be
// statically pre-rendered/cached — without this, Next.js can execute the handler
// once at build time (bypassing the auth check below, since CRON_SECRET may not
// be set in the build environment) and serve that cached response forever after.
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const urls = sitemap().map((entry) => entry.url)
  const result = await submitToIndexNow(urls)

  return NextResponse.json(
    {
      ok: result.ok,
      status: result.status,
      submittedCount: result.submitted.length,
      rejectedCount: result.rejected.length,
      rejected: result.rejected,
    },
    { status: result.ok ? 200 : 502 },
  )
}
