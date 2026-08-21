import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('webAppJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.webAppJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="webAppJaipur" /> }
