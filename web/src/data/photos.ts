export type PhotoCategory = 'portraits' | 'street' | 'nature'

export type Photo = {
  id: string
  title: string
  location: string
  category: PhotoCategory
  camera: string
  lens: string
  src: string
  width: number
  height: number
}

export const photoCategories: { id: PhotoCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'street', label: 'Street' },
  { id: 'nature', label: 'Nature / Scenery' },
]

export const defaultCamera = 'Canon EOS Rebel T6'
export const defaultLens = 'EF-S 18-55mm'

export const photos: Photo[] = [
  {
    id: 'manuel-a54',
    title: 'Patio light',
    location: 'Nairobi, Kenya',
    category: 'portraits',
    camera: 'Samsung Galaxy A54 5G',
    lens: '50MP main',
    src: `${import.meta.env.BASE_URL}images/manuel-hero.jpg`,
    width: 2,
    height: 3,
  },
  {
    id: 'p1',
    title: 'Golden hour, Westlands',
    location: 'Nairobi, Kenya',
    category: 'portraits',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    width: 3,
    height: 4,
  },

  {
    id: 'gallery-church',
    title: 'Spire light',
    location: 'Lake View, Chicago',
    category: 'street',
    camera: 'Samsung Galaxy A54 5G',
    lens: '50MP main',
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-01.jpg`,
    width: 2,
    height: 3,
  },
  {
    id: 'gallery-mulberry',
    title: 'Mulberry season',
    location: 'Nairobi, Kenya',
    category: 'nature',
    camera: 'Samsung Galaxy A54 5G',
    lens: '50MP main',
    src: `${import.meta.env.BASE_URL}images/gallery/gallery-02.jpg`,
    width: 2,
    height: 3,
  },
  {
    id: 'p4',
    title: 'Quiet confidence',
    location: 'Nairobi',
    category: 'portraits',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1200&q=80',
    width: 2,
    height: 3,
  },
  {
    id: 'p5',
    title: 'Morning commute',
    location: 'Nairobi streets',
    category: 'street',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
    width: 3,
    height: 4,
  },
  {
    id: 'p6',
    title: 'Acacia line',
    location: 'Maasai Mara outskirts',
    category: 'nature',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    width: 4,
    height: 3,
  },
  {
    id: 'p7',
    title: 'Soft light study',
    location: 'Studio / Nairobi',
    category: 'portraits',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    width: 3,
    height: 4,
  },
  {
    id: 'p8',
    title: 'Market rhythm',
    location: 'City Market',
    category: 'street',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    width: 4,
    height: 5,
  },
  {
    id: 'p9',
    title: 'Sky after rain',
    location: 'Ngong Hills',
    category: 'nature',
    camera: defaultCamera,
    lens: defaultLens,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    width: 5,
    height: 3,
  },
]
