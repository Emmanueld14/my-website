export type Project = {
  id: string
  name: string
  tagline: string
  problem: string
  built: string
  status: string
  next: string
  href?: string
  hrefLabel?: string
  featured?: boolean
  image: string
  imageAlt: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'bloomly',
    name: 'Bloomly',
    tagline: 'Peer support for Kenyan youth',
    problem:
      'Too many young people in Kenya carry stress, questions, and quiet struggles alone — with few spaces that feel safe, local, and built for them.',
    built:
      'A peer-support platform designed around real Kenyan youth needs: connection, guided conversations, and resources that don’t feel clinical or out of reach.',
    status: 'Live at bloomly.co.ke — early, shipping, and learning in public.',
    next: 'Deeper community features, better onboarding, and partnerships that help more students feel less alone.',
    href: 'https://bloomly.co.ke',
    hrefLabel: 'Visit bloomly.co.ke',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Young people connecting outdoors — Bloomly placeholder',
    tags: ['Product', 'Community', 'Youth mental wellness', 'Kenya'],
  },
]
