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
      'Grew up in Kitengela asking too many questions — how does this work, why does this happen when that happens. Never really stopped; just turned it into a habit of exploring.',
    photo:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Nairobi skyline at dusk — placeholder',
  },
  {
    id: 'leadership',
    year: 'Form 1–2',
    title: 'Leadership & competition',
    summary:
      "Never thought debate was really 'my thing' until high school — that's where I found the version of my voice I didn't know I had.",
    photo:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Students collaborating — placeholder',
  },
  {
    id: 'wsc',
    year: '2024',
    title: 'World Scholars Cup',
    summary:
      'Mostly trial and error — writing drafts, losing debates, getting back up — until it all came together and my team walked out on top.',
    photo:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Writing and study desk — placeholder',
  },
  {
    id: 'iflc',
    year: '2024–2025',
    title: 'IFLC & debate circuits',
    summary:
      "Never thought I could dance — still can't, honestly — but it was worth the embarrassment. Made real friends and got to experience Chicago along the way.",
    photo:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    photoAlt: 'Conference hall — placeholder',
  },
  {
    id: 'fwwmun',
    year: '2025',
    title: 'FWWMUN — Abu Dhabi',
    summary:
      "Diplomacy was never really on my radar — but stepping into that world in Abu Dhabi is what got me caring about advocating for people, wherever they are.",
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
