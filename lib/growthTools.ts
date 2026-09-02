import type { PostMeta } from '@/lib/blog'

export type GrowthToolId =
  | 'd2c-profit-calculator'
  | 'meta-budget-planner'
  | 'd2c-agency-scorecard'
  | 'shopify-cro-scorecard'

export type GrowthToolDefinition = {
  id: GrowthToolId
  eyebrow: string
  title: string
  shortTitle: string
  description: string
  ctaLabel: string
  service: string
  businessVertical: string
  intentCluster: string
}

export const GROWTH_TOOLS: Record<GrowthToolId, GrowthToolDefinition> = {
  'd2c-profit-calculator': {
    id: 'd2c-profit-calculator',
    eyebrow: 'Free D2C tool',
    title: 'Check the economics behind your growth',
    shortTitle: 'D2C Profit Calculator',
    description: 'Use your own revenue, margin, AOV and ad-spend numbers to estimate break-even ROAS, allowable CAC and contribution after media.',
    ctaLabel: 'Run the profit check',
    service: 'Performance Marketing',
    businessVertical: 'D2C & Ecommerce',
    intentCluster: 'd2c-unit-economics',
  },
  'meta-budget-planner': {
    id: 'meta-budget-planner',
    eyebrow: 'Free planning tool',
    title: 'Model the ad spend your revenue target implies',
    shortTitle: 'Meta Ads Budget Planner',
    description: 'Build a simple scaling scenario from your current revenue, target revenue, AOV, margin and ROAS. No Growth Escalators fee is included.',
    ctaLabel: 'Model my budget',
    service: 'Performance Marketing',
    businessVertical: 'D2C & Ecommerce',
    intentCluster: 'paid-media-budgeting',
  },
  'd2c-agency-scorecard': {
    id: 'd2c-agency-scorecard',
    eyebrow: 'Agency comparison tool',
    title: 'Score the agency you are considering',
    shortTitle: 'D2C Agency Scorecard',
    description: 'Evaluate an agency on profitability, creative testing, media buying, CRO, attribution and operating discipline instead of relying on pitch-deck claims.',
    ctaLabel: 'Score an agency',
    service: 'Performance Marketing',
    businessVertical: 'D2C & Ecommerce',
    intentCluster: 'agency-evaluation',
  },
  'shopify-cro-scorecard': {
    id: 'shopify-cro-scorecard',
    eyebrow: 'Store diagnostic',
    title: 'Find the conversion areas worth checking first',
    shortTitle: 'Shopify CRO Scorecard',
    description: 'Run a practical store-health check across proposition, PDP, trust, mobile UX, cart, measurement and retention fundamentals.',
    ctaLabel: 'Score my store',
    service: 'Shopify / CRO',
    businessVertical: 'D2C & Ecommerce',
    intentCluster: 'shopify-cro-diagnostic',
  },
}

/**
 * V1 intentionally maps only the D2C / ecommerce intent clusters we can serve
 * with a genuinely relevant interactive tool. Other editorial categories stay
 * ungated until their own tool engine is ready.
 */
export function resolveGrowthTool(post: Pick<PostMeta, 'title' | 'slug' | 'tags' | 'primaryKeyword' | 'categoryLabel'>): GrowthToolDefinition | null {
  const haystack = [post.title, post.slug, post.primaryKeyword ?? '', post.categoryLabel, ...post.tags]
    .join(' ')
    .toLowerCase()

  if (/(top\s+\d+|best .*agenc|agencies|agency vs|choose .*agency|agency comparison)/.test(haystack)
      && /(d2c|dtc|ecommerce|performance|meta|fashion|marketing)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-agency-scorecard']
  }

  if (/(how much|ad spend|budget|meta ads|google ads|roas|scale .*ads|scaling .*ads)/.test(haystack)
      && /(d2c|dtc|ecommerce|fashion|meta|performance|ads)/.test(haystack)) {
    return GROWTH_TOOLS['meta-budget-planner']
  }

  if (/(shopify|conversion|cro|product page|pdp|creative testing|retention)/.test(haystack)
      && /(d2c|dtc|ecommerce|shopify|creative|cro|retention)/.test(haystack)) {
    return GROWTH_TOOLS['shopify-cro-scorecard']
  }

  if (/(d2c|dtc|ecommerce|cac|ltv|profit|margin|unit economics|scale)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-profit-calculator']
  }

  return null
}
