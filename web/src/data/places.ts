export type Place = {
  id: string
  name: string
  country: string
  status: 'visited' | 'future'
  x: number // 0–100 map coordinate
  y: number
  memory?: string
  photo?: string
}

export const places: Place[] = [
  {
    id: 'nairobi',
    name: 'Nairobi',
    country: 'Kenya',
    status: 'visited',
    x: 58,
    y: 62,
    memory: 'Home base. Where every idea starts and most evenings end with a camera walk.',
    photo:
      'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'UAE',
    status: 'visited',
    x: 66,
    y: 48,
    memory: 'FWWMUN — late clauses, new friends, and a skyline that felt like a dare.',
    photo:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mombasa',
    name: 'Mombasa',
    country: 'Kenya',
    status: 'visited',
    x: 60,
    y: 66,
    memory: 'Salt air, old town alleys, and light that makes every frame feel warmer.',
    photo:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    status: 'future',
    x: 48,
    y: 32,
    memory: 'On the map for study abroad — CS, libraries, and grey-sky walks.',
  },
  {
    id: 'boston',
    name: 'Boston',
    country: 'USA',
    status: 'future',
    x: 28,
    y: 38,
    memory: 'A future pin for campus tours and cold mornings with big ideas.',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    status: 'future',
    x: 78,
    y: 58,
    memory: 'Curious about the density of builders and clean design everywhere.',
  },
]
