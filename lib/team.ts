export type TeamMember = {
  name: string
  role: string
  index: string
  image?: string
  imagePosition?: string
}

export const GE_TEAM: TeamMember[] = [
  { name: 'Jatin', role: 'Founder & Performance Marketing Lead', index: '01' },
  { name: 'Sanskriti', role: 'Lead Graphic Designer', index: '02' },
  { name: 'Kanishk', role: 'Technology Lead & AI Architect', index: '03' },
  { name: 'Sakcham', role: 'CRO & Conversion Specialist', index: '04' },
  { name: 'Harsh', role: 'Creative Director', index: '05' },
  { name: 'Sagar', role: 'Creative Strategist', index: '06' },
  { name: 'Keshav', role: 'Senior Video Editor', index: '07' },
  { name: 'Mayank', role: 'Junior Video Editor', index: '08' },
  {
    name: 'Vishaka',
    role: 'Human Resource',
    index: '09',
    image: '/team/vishaka.webp',
    imagePosition: 'center 24%',
  },
]
