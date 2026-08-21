import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('saasJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.saasJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="saasJaipur" /> }
