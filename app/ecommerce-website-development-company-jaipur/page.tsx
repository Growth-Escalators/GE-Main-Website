import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('ecommerceJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.ecommerceJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="ecommerceJaipur" /> }
