import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'

const baseMetadata = getSeoClusterMetadata('shopifyAgency')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.shopifyAgency.title } }

export default function ShopifyDevelopmentAgencyPage() {
  return <SeoClusterLanding pageKey="shopifyAgency" />
}
