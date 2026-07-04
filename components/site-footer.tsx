'use client'

import { Waves } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer id="footer" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Waves className="h-5 w-5" />
            </span>
            <span className="font-serif text-xl font-semibold">
              Krym<span className="text-primary">Rental</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">{t.footer.explore}</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><a href="#stays" className="hover:text-foreground">{t.nav.stays}</a></li>
            <li><a href="#destinations" className="hover:text-foreground">{t.nav.destinations}</a></li>
            <li><a href="#features" className="hover:text-foreground">{t.nav.about}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">{t.footer.support}</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">{t.footer.help}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.faq}</a></li>
            <li><a href="#footer" className="hover:text-foreground">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">{t.footer.privacy}</h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">{t.footer.terms}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.privacy}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KrymRental. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
