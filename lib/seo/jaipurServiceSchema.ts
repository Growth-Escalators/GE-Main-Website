const SITE = 'https://www.growthescalators.com'

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '264/103-104, Sector 26, Sanganer, Pratap Nagar',
  addressLocality: 'Jaipur',
  addressRegion: 'Rajasthan',
  postalCode: '302033',
  addressCountry: 'IN',
}

const SAME_AS = [
  'https://www.facebook.com/growthescalators',
  'https://www.instagram.com/growthescalators',
  'https://www.linkedin.com/company/growth-escalators',
]

type JaipurServiceSchemaInput = {
  path: string
  name: string
  description: string
  breadcrumbName: string
  knowsAbout?: string[]
  serviceType?: string
  priceRange?: string
  area?: 'india' | 'rajasthan'
}

/**
 * Evidence-safe Jaipur ProfessionalService schema.
 *
 * Intentionally does NOT emit AggregateRating/reviewCount, approximate geo,
 * or unverified opening hours. Those values can be added only after a verified
 * source is recorded in the website preservation register.
 */
export function jaipurServiceSchema({
  path,
  name,
  description,
  breadcrumbName,
  knowsAbout,
  serviceType,
  priceRange = '₹₹',
  area = 'india',
}: JaipurServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}${path}#business`,
        name,
        url: `${SITE}${path}`,
        image: `${SITE}/opengraph-image`,
        description,
        telephone: '+91-7733888883',
        email: 'jatin@growthescalators.com',
        priceRange,
        address: ADDRESS,
        areaServed: area === 'rajasthan'
          ? [{ '@type': 'City', name: 'Jaipur' }, { '@type': 'State', name: 'Rajasthan' }]
          : [{ '@type': 'City', name: 'Jaipur' }, { '@type': 'Country', name: 'India' }],
        ...(serviceType ? { serviceType } : {}),
        ...(knowsAbout?.length ? { knowsAbout } : {}),
        parentOrganization: { '@id': `${SITE}/#organization` },
        sameAs: SAME_AS,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: breadcrumbName, item: `${SITE}${path}` },
        ],
      },
    ],
  }
}
