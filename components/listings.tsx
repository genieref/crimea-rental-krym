'use client'

import { useState } from 'react'
import { properties, type PropertyType } from '@/lib/properties'
import { PropertyCard } from '@/components/property-card'
import { useLanguage } from '@/components/language-provider'

type Filter = 'all' | PropertyType

const filterKeys: Filter[] = ['all', 'apartment', 'villa', 'house', 'studio']

export function Listings() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')

  const visible =
    filter === 'all'
      ? properties
      : properties.filter((p) => p.type === filter)

  return (
    <section id="stays" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            {t.listings.title}
          </h2>
          <p className="text-muted-foreground">{t.listings.subtitle}</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === key
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
