'use client'

import { useState } from 'react'
import { Menu, Waves, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function SiteHeader() {
  const { t, lang, toggle } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.nav.stays, href: '#stays' },
    { label: t.nav.destinations, href: '#destinations' },
    { label: t.nav.about, href: '#features' },
    { label: t.nav.contact, href: '#footer' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Waves className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            Krym<span className="text-primary">Rental</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="rounded-full border border-border px-3 py-1.5 text-sm font-semibold uppercase transition-colors hover:bg-secondary"
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
          <Button className="hidden md:inline-flex">{t.nav.listProperty}</Button>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full">{t.nav.listProperty}</Button>
          </div>
        </nav>
      )}
    </header>
  )
}
