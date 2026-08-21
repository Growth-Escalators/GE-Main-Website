import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('shopifyJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.shopifyJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="shopifyJaipur" /> }
