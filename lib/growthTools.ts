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

export const GROWTH_TOOL_IDS = Object.keys(GROWTH_TOOLS) as GrowthToolId[]

export function getGrowthTool(id: string): GrowthToolDefinition | null {
  return GROWTH_TOOLS[id as GrowthToolId] ?? null
}

/**
 * V1 intentionally maps only the D2C / ecommerce intent clusters we can serve
 * with a genuinely relevant interactive tool. Other editorial categories stay
 * ungated until their own tool engine is ready.
 *
 * Search intent outranks broad editorial category. This is deliberately
 * conservative: a mismatched tool is worse than no tool at all.
 */
export function resolveGrowthTool(post: Pick<PostMeta, 'title' | 'slug' | 'tags' | 'primaryKeyword' | 'categoryLabel'>): GrowthToolDefinition | null {
  const haystack = [post.title, post.slug, post.primaryKeyword ?? '', post.categoryLabel, ...post.tags]
    .join(' ')
    .toLowerCase()

  const isD2cCommerce = /(d2c|dtc|ecommerce|e-commerce|fashion|apparel|skincare|beauty brand|jewellery brand|jewelry brand|online store)/.test(haystack)
  const isWhiteLabelOrDev = /(white[- ]label|outsourc|development partner|web development|software development|shopify development|staff augmentation)/.test(haystack)

  if (isD2cCommerce
      && /(top\s+\d+|best .*agenc|agencies|agency vs|choose .*agency|agency comparison|hire .*agency|select .*agency)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-agency-scorecard']
  }

  if (isD2cCommerce
      && /(how much.*(spend|budget)|ad spend|advertising budget|media budget|meta ads|google ads|roas|scale .*ads|scaling .*ads)/.test(haystack)) {
    return GROWTH_TOOLS['meta-budget-planner']
  }

  if (isD2cCommerce
      && /(cac|ltv|customer acquisition cost|lifetime value|profit|margin|unit economics|break[- ]even|contribution margin|payback)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-profit-calculator']
  }

  if (!isWhiteLabelOrDev
      && isD2cCommerce
      && /(shopify.*(cro|conversion|store|product page|pdp)|conversion rate|conversion optimisation|conversion optimization|\bcro\b|product page|\bpdp\b|cart|checkout|store conversion)/.test(haystack)) {
    return GROWTH_TOOLS['shopify-cro-scorecard']
  }

  if (isD2cCommerce && !isWhiteLabelOrDev) {
    return GROWTH_TOOLS['d2c-profit-calculator']
  }

  return null
}
