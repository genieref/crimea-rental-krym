import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Destinations } from '@/components/destinations'
import { Listings } from '@/components/listings'
import { Features } from '@/components/features'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Destinations />
      <Listings />
      <Features />
      <SiteFooter />
    </main>
  )
}
