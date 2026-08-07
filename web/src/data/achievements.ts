export type Achievement = {
  id: string
  title: string
  date: string
  location: string
  photos: string[]
  description: string
  skills: string[]
  icon: 'trophy' | 'globe' | 'mic' | 'pen' | 'users' | 'sparkles'
}

export const achievements: Achievement[] = [
  {
    id: 'wsc-gold',
    title: 'World Scholars Cup — Gold Medal, Writing',
    date: '2024',
    location: 'Regional / Global',
    photos: [
      `${import.meta.env.BASE_URL}images/wsc/wsc-01.jpg`,
      `${import.meta.env.BASE_URL}images/wsc/wsc-02.jpg`,
      `${import.meta.env.BASE_URL}images/wsc/wsc-03.jpg`,
      `${import.meta.env.BASE_URL}images/wsc/wsc-04.jpg`,
    ],
    description:
      'Took home gold in Writing after months of research sprints and collaborative debate prep. Learned how clarity under pressure turns into persuasion.',
    skills: ['Writing', 'Research', 'Teamwork', 'Critical thinking'],
    icon: 'pen',
  },
  {
    id: 'fwwmun-abu-dhabi',
    title: 'FWWMUN — Abu Dhabi',
    date: '2025',
    location: 'Abu Dhabi, UAE',
    photos: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80',
    ],
    description:
      'Represented on an international MUN stage — navigating diplomacy, alliances, and late-night clause drafting with delegates from across the world.',
    skills: ['Diplomacy', 'Public speaking', 'Negotiation', 'Global awareness'],
    icon: 'globe',
  },
  {
    id: 'iflc',
    title: 'International Future Leaders Conference',
    date: '2024–2025',
    location: 'International',
    photos: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1000&q=80',
    ],
    description:
      'Immersed in leadership workshops and cross-cultural dialogue. Came home with sharper questions about how young people lead in their own communities.',
    skills: ['Leadership', 'Collaboration', 'Cross-cultural communication'],
    icon: 'users',
  },
  {
    id: 'debate',
    title: 'Competitive Debate Circuit',
    date: 'Ongoing',
    location: 'Nairobi & beyond',
    photos: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    ],
    description:
      'Rounds that taught me to think on my feet, respect the opposing case, and find the quiet argument that changes the room.',
    skills: ['Argumentation', 'Listening', 'Composure', 'Rhetoric'],
    icon: 'mic',
  },
  {
    id: 'bloomly-founding',
    title: 'Founded Bloomly',
    date: '2025–Present',
    location: 'Nairobi, Kenya',
    photos: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573497019940-1c910729fe2d?auto=format&fit=crop&w=1000&q=80',
    ],
    description:
      'Started a peer-support platform for Kenyan youth — turning empathy into product decisions, and conversations into something people can actually use.',
    skills: ['Product thinking', 'Community', 'Entrepreneurship', 'Empathy'],
    icon: 'sparkles',
  },
]
