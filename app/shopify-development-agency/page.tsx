import SeoClusterLanding, { getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'

export const metadata = getSeoClusterMetadata('shopifyAgency')

export default function ShopifyDevelopmentAgencyPage() {
  return <SeoClusterLanding pageKey="shopifyAgency" />
}
