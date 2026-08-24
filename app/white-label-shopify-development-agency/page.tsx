import WhiteLabelMoneyLanding, { getWhiteLabelMoneyMetadata } from '@/components/seo/WhiteLabelMoneyLanding'

const baseMetadata = getWhiteLabelMoneyMetadata('shopifyDevelopment')
export const metadata = { ...baseMetadata, title: { absolute: 'White Label Shopify Development Agency for Agencies | Growth Escalators' } }

export default function WhiteLabelShopifyDevelopmentAgencyPage() {
  return <WhiteLabelMoneyLanding pageKey="shopifyDevelopment" />
}
