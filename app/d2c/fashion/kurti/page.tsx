import SeoClusterLanding, { SEO_CLUSTER_PAGES, getSeoClusterMetadata } from '@/components/seo/SeoClusterLanding'
const baseMetadata = getSeoClusterMetadata('kurti')
export const metadata = { ...baseMetadata, title: { absolute: SEO_CLUSTER_PAGES.kurti.title } }
export default function Page(){ return <SeoClusterLanding pageKey="kurti" /> }
