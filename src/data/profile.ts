export type SocialLink = {
  id: string
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github' | 'instagram'
}

export const profile = {
  name: 'Manuel',
  fullName: 'Manuel',
  tagline: 'Building ideas that create impact.',
  roles: ['Student', 'Founder', 'Builder'] as const,
  location: 'Nairobi, Kenya',
  school: 'Form 3',
  intro:
    "I'm a Form 3 student in Nairobi who can't stop building. Whether it's Bloomly, a debate round, or a photo on my Canon, I'm chasing ideas that actually help people — starting with Kenyan youth.",
  heroPhoto: {
    src: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1600&q=80',
    alt: 'Portrait of Manuel — placeholder photo, replace with your own',
  },
  resumeUrl: '/resume.pdf',
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
