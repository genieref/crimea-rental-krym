'use client'

import { CalendarDays, MapPin, Search, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="/images/hero-crimea.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-28 pt-20 text-center md:pb-36 md:pt-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-current text-accent" />
          {t.hero.badge}
        </span>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold text-white md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
          {t.hero.subtitle}
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 w-full max-w-4xl rounded-2xl border border-white/40 bg-background/95 p-3 shadow-2xl backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
            <Field icon={<MapPin className="h-4 w-4" />} label={t.hero.location}>
              <input
                type="text"
                placeholder={t.hero.locationPlaceholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </Field>
            <Field icon={<CalendarDays className="h-4 w-4" />} label={t.hero.checkin}>
              <input
                type="date"
                className="w-full bg-transparent text-sm text-muted-foreground outline-none"
              />
            </Field>
            <Field icon={<CalendarDays className="h-4 w-4" />} label={t.hero.checkout}>
              <input
                type="date"
                className="w-full bg-transparent text-sm text-muted-foreground outline-none"
              />
            </Field>
            <Field icon={<Users className="h-4 w-4" />} label={t.hero.guests}>
              <span className="text-sm text-muted-foreground">{t.hero.guestsValue}</span>
            </Field>
            <Button type="submit" size="lg" className="h-full min-h-12 gap-2">
              <Search className="h-4 w-4" />
              <span className="md:sr-only lg:not-sr-only">{t.hero.search}</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1 rounded-xl px-3 py-2 text-left transition-colors hover:bg-secondary md:rounded-lg">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}
