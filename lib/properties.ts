export type PropertyType = 'apartment' | 'villa' | 'house' | 'studio'

export type Property = {
  id: string
  image: string
  type: PropertyType
  price: number
  rating: number
  reviews: number
  guests: number
  beds: number
  baths: number
  title: { ru: string; en: string }
  location: { ru: string; en: string }
}

export const properties: Property[] = [
  {
    id: '1',
    image: '/images/prop-1.png',
    type: 'apartment',
    price: 4500,
    rating: 4.9,
    reviews: 128,
    guests: 4,
    beds: 2,
    baths: 1,
    title: {
      ru: 'Светлые апартаменты с видом на море',
      en: 'Bright apartment with sea view',
    },
    location: { ru: 'Ялта', en: 'Yalta' },
  },
  {
    id: '2',
    image: '/images/prop-2.png',
    type: 'villa',
    price: 12000,
    rating: 5.0,
    reviews: 64,
    guests: 8,
    beds: 4,
    baths: 3,
    title: {
      ru: 'Белая вилла с бассейном',
      en: 'White villa with pool',
    },
    location: { ru: 'Гурзуф', en: 'Gurzuf' },
  },
  {
    id: '3',
    image: '/images/prop-3.png',
    type: 'studio',
    price: 2800,
    rating: 4.8,
    reviews: 96,
    guests: 2,
    beds: 1,
    baths: 1,
    title: {
      ru: 'Уютная студия у марины',
      en: 'Cozy studio by the marina',
    },
    location: { ru: 'Балаклава', en: 'Balaklava' },
  },
  {
    id: '4',
    image: '/images/prop-4.png',
    type: 'house',
    price: 9500,
    rating: 4.9,
    reviews: 51,
    guests: 6,
    beds: 3,
    baths: 2,
    title: {
      ru: 'Дом с террасой и видом на закат',
      en: 'House with terrace and sunset view',
    },
    location: { ru: 'Судак', en: 'Sudak' },
  },
  {
    id: '5',
    image: '/images/prop-5.png',
    type: 'house',
    price: 5200,
    rating: 4.7,
    reviews: 73,
    guests: 5,
    beds: 3,
    baths: 1,
    title: {
      ru: 'Каменный коттедж среди виноградников',
      en: 'Stone cottage among the vineyards',
    },
    location: { ru: 'Бахчисарай', en: 'Bakhchisaray' },
  },
  {
    id: '6',
    image: '/images/prop-6.png',
    type: 'apartment',
    price: 8800,
    rating: 5.0,
    reviews: 42,
    guests: 4,
    beds: 2,
    baths: 2,
    title: {
      ru: 'Пентхаус с панорамными окнами',
      en: 'Penthouse with panoramic windows',
    },
    location: { ru: 'Севастополь', en: 'Sevastopol' },
  },
]

export const destinations = [
  {
    id: 'yalta',
    image: '/images/dest-yalta.png',
    count: 342,
    name: { ru: 'Ялта', en: 'Yalta' },
  },
  {
    id: 'sevastopol',
    image: '/images/dest-sevastopol.png',
    count: 287,
    name: { ru: 'Севастополь', en: 'Sevastopol' },
  },
  {
    id: 'feodosia',
    image: '/images/dest-feodosia.png',
    count: 196,
    name: { ru: 'Феодосия', en: 'Feodosia' },
  },
]
