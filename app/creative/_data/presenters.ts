export type Presenter = {
  slug: string
  kind: 'studio' | 'personal'
  name: string
  role: string
  established: string
  badge: string
  quote: string
  signoff: string
  contactEmail: string
  initials: string
  accent: string
}

export const STUDIO_PRESENTER: Presenter = {
  slug: 'studio',
  kind: 'studio',
  name: 'Growth Escalators',
  role: 'Creative + Performance Studio',
  established: 'Est. 2021 · Jaipur, India',
  badge: 'Studio Folio',
  quote: 'We don’t make work that wins awards. We make work that earns sales — then quietly wins awards too.',
  signoff: 'Like our work? Tell us what you need.',
  contactEmail: 'Info@growthescalators.com',
  initials: 'GE',
  accent: '#FF6B35',
}

export const PEOPLE: Presenter[] = [
  {
    slug: 'jatin',
    kind: 'personal',
    name: 'Jatin Agrawal',
    role: 'Founder · Growth Consultant',
    established: 'At Growth Escalators since 2021',
    badge: 'Personal Folio',
    quote: 'Every campaign we run, we run like it’s our own money. This is what that looks like as graphics.',
    signoff: 'Like my work? Reach out directly.',
    contactEmail: 'jatin@growthescalators.com',
    initials: 'JA',
    accent: '#FF6B35',
  },
  {
    slug: 'sakcham',
    kind: 'personal',
    name: 'Sakcham Raj',
    role: 'Growth Consultant',
    established: 'At Growth Escalators since 2022',
    badge: 'Personal Folio',
    quote: 'Growth isn’t a guessing game — it’s a science. Every design here was built to be measured.',
    signoff: 'Like my work? Let’s build yours.',
    contactEmail: 'sakcham@growthescalators.com',
    initials: 'SR',
    accent: '#a6ff00',
  },
  {
    slug: 'keshav',
    kind: 'personal',
    name: 'Keshav',
    role: 'Creative Director',
    established: 'At Growth Escalators since 2022',
    badge: 'Personal Folio',
    quote: 'A video has three seconds to stop a scroll. Every frame in this folio was built for second one.',
    signoff: 'Like my work? Bring me your next launch.',
    contactEmail: 'keshav@growthescalators.com',
    initials: 'KE',
    accent: '#ffd400',
  },
  {
    slug: 'nimisha',
    kind: 'personal',
    name: 'Nimisha',
    role: 'Graphic Tailor',
    established: 'At Growth Escalators since 2023',
    badge: 'Personal Folio',
    quote: 'Every pixel has a purpose. I stitch stories that make brands impossible to ignore.',
    signoff: 'Like my work? Hand me a brief.',
    contactEmail: 'nimisha@growthescalators.com',
    initials: 'NI',
    accent: '#7ad7ff',
  },
]

export const ALL_PRESENTERS: Presenter[] = [STUDIO_PRESENTER, ...PEOPLE]

export function getPresenter(slug?: string | null): Presenter {
  if (!slug || slug === 'studio') return STUDIO_PRESENTER
  return ALL_PRESENTERS.find((p) => p.slug === slug.toLowerCase()) ?? STUDIO_PRESENTER
}
