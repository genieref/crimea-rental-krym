'use client'

import { destinations } from '@/lib/properties'
import { useLanguage } from '@/components/language-provider'

export function Destinations() {
  const { t, lang } = useLanguage()

  return (
    <section id="destinations" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">
          {t.destinations.title}
        </h2>
        <p className="text-muted-foreground">{t.destinations.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {destinations.map((dest) => (
          <a
            key={dest.id}
            href="#stays"
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={dest.image || '/placeholder.svg'}
              alt={dest.name[lang]}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-primary-foreground">
              <h3 className="font-serif text-2xl font-semibold text-white">
                {dest.name[lang]}
              </h3>
              <p className="text-sm text-white/80">
                {dest.count} {t.destinations.properties}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
