export type WorkVariant = 'initial' | 'mark' | 'field' | 'poster' | 'spec'

export type Work = {
  id: string
  client: string
  title: string
  category: string
  year: string
  variant: WorkVariant
  palette: {
    bg: string
    fg: string
    accent: string
  }
  /** Free-form text used inside the variant's composition. Interpretation depends on variant. */
  composition: {
    initial?: string                 // 'initial' variant: the single letter to render huge
    mark?: 'orbit' | 'arch' | 'split' | 'rule' | 'eclipse'  // 'mark' variant: which abstract logo geometry
    fieldLines?: string[]            // 'field' variant: 3-5 short lines stacked as art
    posterStack?: string[]           // 'poster' variant: vertical word stack
    specRows?: { k: string; v: string }[]  // 'spec' variant: spec sheet rows
  }
  /** Two-word category short-label (used in tags/marquees). */
  shortTag: string
  /** Span hints for the masonry grid (col, row). Used only for featured row of 4. */
  featured?: { col: number; row: number }
}

export const WORKS: Work[] = [
  {
    id: 'yellow-diaries',
    client: 'Yellow Diaries',
    title: 'A café brand built in 5 months',
    category: 'Brand Identity',
    shortTag: 'IDENTITY',
    year: '2024',
    variant: 'initial',
    palette: { bg: '#f7e35b', fg: '#0b0a08', accent: '#0b0a08' },
    composition: { initial: 'Y' },
    featured: { col: 2, row: 2 },
  },
  {
    id: 'exzept',
    client: 'Exzept',
    title: 'Fashion ROAS 1.8x → 5.2x',
    category: 'Creative Direction',
    shortTag: 'DIRECTION',
    year: '2024',
    variant: 'spec',
    palette: { bg: '#1a1a2e', fg: '#f5f1ea', accent: '#FF6B35' },
    composition: {
      specRows: [
        { k: 'CLIENT', v: 'EXZEPT' },
        { k: 'SECTOR', v: 'D2C FASHION' },
        { k: 'OUTPUT', v: '40+ UGC ASSETS' },
        { k: 'AOV', v: '+118%' },
        { k: 'ROAS', v: '1.8× → 5.2×' },
      ],
    },
    featured: { col: 1, row: 2 },
  },
  {
    id: 'credo-world',
    client: 'Credo World',
    title: 'A consulting mark with weight',
    category: 'Logo / Mark',
    shortTag: 'MARK',
    year: '2024',
    variant: 'mark',
    palette: { bg: '#2d1500', fg: '#f5f1ea', accent: '#ff9554' },
    composition: { mark: 'eclipse' },
    featured: { col: 1, row: 1 },
  },
  {
    id: 'paraiso',
    client: 'Paraiso',
    title: '₹33k → ₹3.4L in 30 days',
    category: 'Social Creative',
    shortTag: 'SOCIAL',
    year: '2025',
    variant: 'poster',
    palette: { bg: '#e8553a', fg: '#fff8e7', accent: '#fff8e7' },
    composition: {
      posterStack: ['DROP', '03', 'SUMMER', 'PARAISO', '· 25 ·'],
    },
    featured: { col: 1, row: 1 },
  },
  {
    id: 'elixzor',
    client: 'Elixzor',
    title: 'Retention loop that compounded',
    category: 'Brand System',
    shortTag: 'SYSTEM',
    year: '2024',
    variant: 'mark',
    palette: { bg: '#1f2400', fg: '#e8f0c8', accent: '#a6ff00' },
    composition: { mark: 'orbit' },
  },
  {
    id: 'dr-mukesh',
    client: 'Dr. Mukesh',
    title: 'A surgeon’s personal brand',
    category: 'Personal Branding',
    shortTag: 'PERSONAL',
    year: '2024',
    variant: 'field',
    palette: { bg: '#3a0f1a', fg: '#f9eadd', accent: '#ff8aa6' },
    composition: {
      fieldLines: ['CASE 04', 'PERSONAL BRAND', 'A SURGEON', 'BECOMES', 'A SPEAKER'],
    },
  },
  {
    id: 'flight-ticket-fare',
    client: 'Flight Ticket Fare',
    title: 'CPL ₹380 → ₹94',
    category: 'Web / UI Design',
    shortTag: 'WEB',
    year: '2024',
    variant: 'spec',
    palette: { bg: '#0d1330', fg: '#dde9ff', accent: '#7ad7ff' },
    composition: {
      specRows: [
        { k: 'CLIENT', v: 'FLIGHT TICKET FARE' },
        { k: 'SECTOR', v: 'TRAVEL / LEAD-GEN' },
        { k: 'OUTPUT', v: 'LANDING + FUNNEL' },
        { k: 'CPL', v: '₹380 → ₹94' },
        { k: 'LEADS/MO', v: '500+' },
      ],
    },
  },
  {
    id: 'kabir-saas',
    client: 'Acrux Labs',
    title: 'Identity for a SaaS launch',
    category: 'Brand Identity',
    shortTag: 'IDENTITY',
    year: '2025',
    variant: 'mark',
    palette: { bg: '#101412', fg: '#e8f5ee', accent: '#6cffba' },
    composition: { mark: 'arch' },
  },
  {
    id: 'ananya-studio',
    client: 'Lila Studio',
    title: 'A wellness studio sold out in 30 days',
    category: 'Social Creative',
    shortTag: 'SOCIAL',
    year: '2025',
    variant: 'field',
    palette: { bg: '#23150c', fg: '#f3dcc4', accent: '#ffb074' },
    composition: {
      fieldLines: ['CASE 11', 'LILA STUDIO', 'A NEW MAT', 'A NEW MEMBER', '× 40'],
    },
  },
  {
    id: 'tanya-fmcg',
    client: 'Sundrop Snacks',
    title: '0 → 15k in 4 months',
    category: 'Social Creative',
    shortTag: 'SOCIAL',
    year: '2025',
    variant: 'poster',
    palette: { bg: '#0b0a08', fg: '#a6ff00', accent: '#f5f1ea' },
    composition: {
      posterStack: ['SUNDROP', 'EATS', '/15K', 'IN 4', 'MOS.'],
    },
  },
  {
    id: 'arjun-real-estate',
    client: 'Arjun Group',
    title: '3× luxury site visits',
    category: 'Print / Print-style',
    shortTag: 'PRINT',
    year: '2024',
    variant: 'spec',
    palette: { bg: '#f3ecdc', fg: '#1a1308', accent: '#9d3416' },
    composition: {
      specRows: [
        { k: 'CLIENT', v: 'ARJUN GROUP' },
        { k: 'SECTOR', v: 'REAL ESTATE' },
        { k: 'OUTPUT', v: 'BROCHURE + LP' },
        { k: 'VISITS', v: '3×' },
        { k: 'TICKET', v: '₹2.4Cr' },
      ],
    },
  },
  {
    id: 'meera-derma',
    client: 'Dr. Meera Nair',
    title: 'Fully booked, 3 weeks ahead',
    category: 'Personal Branding',
    shortTag: 'PERSONAL',
    year: '2025',
    variant: 'initial',
    palette: { bg: '#0a1a14', fg: '#ffe7d6', accent: '#ff8a4c' },
    composition: { initial: 'M' },
  },
]

/** Distinct category tags for the marquee strip. */
export const CATEGORIES = [
  'BRAND IDENTITY',
  'SOCIAL CREATIVE',
  'POSTERS / PRINT',
  'WEB · UI',
  'BRAND SYSTEMS',
  'LOGO / MARK',
  'CREATIVE DIRECTION',
  'PERSONAL BRANDING',
]
