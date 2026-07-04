'use client'

import { BadgeCheck, HeadphonesIcon, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [BadgeCheck, ShieldCheck, HeadphonesIcon]

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="mb-10 text-center font-serif text-3xl font-semibold md:text-4xl">
        {t.features.title}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.features.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
        <h2 className="mx-auto max-w-xl text-balance font-serif text-3xl font-semibold md:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-primary-foreground/80">
          {t.cta.subtitle}
        </p>
      </div>
    </section>
  )
}
