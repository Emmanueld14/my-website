export type SocialLink = {
  id: string
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github' | 'instagram'
}

export const profile = {
  name: 'Manuel',
  fullName: 'Manuel',
  tagline: 'Just living, one day at a time.',
  roles: ['Student', 'Explorer', 'Builder'] as const,
  location: 'Nairobi, Kenya',
  school: 'Form 3',
  intro:
    "I'm just a teenager in Nairobi trying to figure things out — some days that's Bloomly, some days it's a debate round, some days it's just my Canon and whatever catches my eye. No grand plan, just curiosity and taking it one day at a time 😊",
  heroPhoto: {
    src: `${import.meta.env.BASE_URL}images/manuel-hero.jpg`,
    alt: 'Manuel smiling outdoors in Nairobi',
  },
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  email: 'hello@manuel.ke',
  socials: [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:hello@manuel.ke',
      icon: 'mail',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/',
      icon: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/',
      icon: 'github',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/',
      icon: 'instagram',
    },
  ] satisfies SocialLink[],
  footerLine: 'Built with curiosity in Nairobi.',
  copyrightName: 'Manuel',
} as const
