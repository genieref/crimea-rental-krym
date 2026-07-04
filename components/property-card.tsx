'use client'

import { useState } from 'react'
import { Bath, BedDouble, Heart, MapPin, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Property } from '@/lib/properties'
import { useLanguage } from '@/components/language-provider'

export function PropertyCard({ property }: { property: Property }) {
  const { t, lang } = useLanguage()
  const [liked, setLiked] = useState(false)

  const price = new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US').format(
    property.price,
  )
  const currency = lang === 'ru' ? '₽' : '₽'

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={property.image || '/placeholder.svg'}
          alt={property.title[lang]}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Save"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <Heart
            className={`h-4 w-4 ${liked ? 'fill-accent text-accent' : ''}`}
          />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold capitalize backdrop-blur">
          {t.filters[property.type]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold leading-snug text-balance">
            {property.title[lang]}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
            <Star className="h-4 w-4 fill-accent text-accent" />
            {property.rating.toFixed(1)}
          </span>
        </div>

        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {property.location[lang]}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {property.guests}
          </span>
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {property.baths}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <p className="text-base">
            <span className="font-semibold">
              {price} {currency}
            </span>
            <span className="text-sm text-muted-foreground"> / {t.listings.night}</span>
          </p>
          <Button size="sm" variant="secondary">
            {t.listings.book}
          </Button>
        </div>
      </div>
    </article>
  )
}
