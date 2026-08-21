import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('redesignJaipur')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.redesignJaipur.title } }
export default function Page(){ return <SeoClusterLanding pageKey="redesignJaipur" /> }
