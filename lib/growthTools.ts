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

function explicitGrowthTool(post: Pick<PostMeta, 'leadMagnetId'>): GrowthToolDefinition | null | undefined {
  if (post.leadMagnetId === 'none') return null
  if (!post.leadMagnetId) return undefined
  return getGrowthTool(post.leadMagnetId)
}

/**
 * Mapping priority is deliberately conservative:
 * 1) explicit frontmatter mapping,
 * 2) strong query-intent inference,
 * 3) no tool.
 *
 * This means future title/tag changes cannot silently override an editorially
 * approved resource, while legacy posts still get sensible V1 behaviour.
 */
export function resolveGrowthTool(
  post: Pick<PostMeta, 'title' | 'slug' | 'tags' | 'primaryKeyword' | 'categoryLabel' | 'leadMagnetId' | 'intentCluster'>,
): GrowthToolDefinition | null {
  const explicit = explicitGrowthTool(post)
  if (explicit !== undefined) return explicit

  const haystack = [post.title, post.slug, post.primaryKeyword ?? '', post.intentCluster ?? '', post.categoryLabel, ...post.tags]
    .join(' ')
    .toLowerCase()

  const isD2cCommerce = /(d2c|dtc|ecommerce|e-commerce|fashion|apparel|skincare|beauty brand|jewellery brand|jewelry brand|online store)/.test(haystack)
  const isWhiteLabelOrDev = /(white[- ]label|outsourc|development partner|web development|software development|shopify development|staff augmentation)/.test(haystack)

  if (isD2cCommerce
      && /(top\s+\d+|best .*agenc|agencies|agency vs|choose .*agency|agency comparison|hire .*agency|select .*agency|vendor evaluation)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-agency-scorecard']
  }

  if (isD2cCommerce
      && /(how much.*(spend|budget)|ad spend|advertising budget|media budget|meta ads|google ads|roas|scale .*ads|scaling .*ads|paid-media-budgeting)/.test(haystack)) {
    return GROWTH_TOOLS['meta-budget-planner']
  }

  if (isD2cCommerce
      && /(cac|ltv|customer acquisition cost|lifetime value|profit|margin|unit economics|break[- ]even|contribution margin|payback|d2c-unit-economics)/.test(haystack)) {
    return GROWTH_TOOLS['d2c-profit-calculator']
  }

  if (!isWhiteLabelOrDev
      && isD2cCommerce
      && /(shopify.*(cro|conversion|store|product page|pdp)|conversion rate|conversion optimisation|conversion optimization|\bcro\b|product page|\bpdp\b|cart|checkout|store conversion|shopify-cro-diagnostic)/.test(haystack)) {
    return GROWTH_TOOLS['shopify-cro-scorecard']
  }

  return null
}
