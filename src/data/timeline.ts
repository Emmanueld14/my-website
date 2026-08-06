export type TimelineEntry = {
  id: string
  year: string
  title: string
  summary: string
  photo: string
  photoAlt: string
}

export const timeline: TimelineEntry[] = [
  {
    id: 'start',
    year: 'Early years',
    title: 'Where it started',
    summary:
      'Grew up in Nairobi asking too many questions. Books, gadgets, and the quiet thrill of figuring things out set the tone for everything that followed.',
    photo:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Nairobi skyline at dusk — placeholder',
  },
  {
    id: 'leadership',
    year: 'Form 1–2',
    title: 'Leadership & competition',
    summary:
      'Debate stages, team huddles, and late-night prep sessions taught me how to listen hard, argue clear, and lead without needing the loudest voice in the room.',
    photo:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Students collaborating — placeholder',
  },
  {
    id: 'wsc',
    year: '2024',
    title: 'World Scholars Cup',
    summary:
      'Gold in Writing. A blur of research, teamwork, and rooms full of curious minds from everywhere — proof that ideas travel further when you write them well.',
    photo:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Writing and study desk — placeholder',
  },
  {
    id: 'iflc',
    year: '2024–2025',
    title: 'IFLC & debate circuits',
    summary:
      'International forums, sharper arguments, and friends across borders. Each round stretched how I think about leadership, culture, and what young people can push for.',
    photo:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Conference hall — placeholder',
  },
  {
    id: 'fwwmun',
    year: '2025',
    title: 'FWWMUN — Abu Dhabi',
    summary:
      'Walking into rooms in Abu Dhabi representing ideas bigger than myself. Diplomacy, pressure, and the reminder that Kenya’s youth voice belongs on global stages.',
    photo:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Abu Dhabi skyline — placeholder',
  },
  {
    id: 'bloomly',
    year: 'Now',
    title: 'Building Bloomly',
    summary:
      'Peer support for Kenyan youth — a platform I’m building because too many of us carry things alone. Still early. Still shipping. Still listening.',
    photo:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Young people connecting — placeholder',
  },
  {
    id: 'ahead',
    year: 'Next',
    title: 'Computer Science & beyond',
    summary:
      'KCSE on the horizon. Computer Science after that. Study abroad when the path opens. The through-line stays the same: build things that matter.',
    photo:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Laptop and code — placeholder',
  },
]
