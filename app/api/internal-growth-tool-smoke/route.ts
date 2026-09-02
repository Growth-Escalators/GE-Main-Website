import { NextResponse } from 'next/server'
import { POST as submitGrowthTool } from '../tool-result/route'

export const runtime = 'nodejs'

const TEST_KEY = 'd-rSscwGKEyleLOSTv67J5MZEkWhzWHd'

export async function GET(request: Request) {
  if (process.env.VERCEL_ENV !== 'preview') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const url = new URL(request.url)
  if (url.searchParams.get('key') !== TEST_KEY) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const email = (url.searchParams.get('email') || '').trim()
  const phone = (url.searchParams.get('phone') || '').trim()
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

  const origin = url.origin
  const smokeRequest = new Request(`${origin}/api/tool-result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: origin,
      Referer: `${origin}/tools/d2c-profit-calculator`,
      'x-forwarded-host': url.host,
      'x-forwarded-for': '127.0.0.1',
      'user-agent': 'GE Growth Tool preview smoke test',
    },
    body: JSON.stringify({
      email,
      phone,
      toolId: 'd2c-profit-calculator',
      intentCluster: 'd2c-unit-economics',
      sourcePath: '/tools/d2c-profit-calculator',
      sourceTitle: 'D2C Profit Calculator — preview smoke test',
      postSlug: '',
      postTitle: '',
      headline: 'Preview smoke test: unit economics delivery pipeline',
      metrics: [
        { label: 'Simplified break-even ROAS', value: '1.67×' },
        { label: 'Gross-margin CAC ceiling', value: '₹1,080' },
      ],
      recommendations: [
        'This is an authorised preview smoke test for the Growth Tools delivery pipeline.',
        'No commercial pricing or customer WhatsApp automation is included.',
      ],
      summary: 'Authorised preview smoke test. Revenue ₹12L/month, ad spend ₹2.5L/month. This payload is intentionally marked as a test.',
      monthlyRevenue: '₹12L/month',
      qualification: {
        revenueLakh: 12,
        adSpendLakh: 2.5,
        targetRevenueLakh: 0,
        score: 0,
        stage: '',
      },
      attribution: {
        landingPageRoute: '/tools/d2c-profit-calculator',
      },
    }),
  })

  const response = await submitGrowthTool(smokeRequest)
  const body = await response.json().catch(() => ({ error: 'Non-JSON smoke response' }))
  return NextResponse.json({ status: response.status, body }, { status: response.ok ? 200 : 502 })
}
