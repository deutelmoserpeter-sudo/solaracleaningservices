import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, MapPin } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SunMark } from '../components/SunMark'
import { services } from '../data/services'

export const Route = createFileRoute('/service-areas')({
  component: ServiceAreasPage,
  head: () => ({
    meta: [
      { title: 'House Cleaning St. Petersburg & Pinellas County | Solara' },
      { name: 'description', content: 'Explore Solara’s house cleaning service area in St. Petersburg and surrounding Pinellas County communities, then get an instant quote online.' },
      { property: 'og:title', content: 'House Cleaning Services in St. Petersburg & Pinellas County' },
      { property: 'og:description', content: 'Professional home cleaning across St. Petersburg and surrounding Pinellas County communities.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/service-areas' },
      { property: 'og:image', content: 'https://solaracleaningfl.com/images/hero-cleaning.jpg' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/service-areas' }],
  }),
})

const neighborhoods = ['Downtown St. Petersburg', 'Historic Old Northeast', 'Historic Kenwood', 'Crescent Lake', 'Shore Acres', 'Snell Isle', 'Disston Heights', 'Jungle Prada']

function ServiceAreasPage() {
  const pageUrl = 'https://solaracleaningfl.com/service-areas'
  const schema = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'House Cleaning Services in St. Petersburg & Pinellas County', url: pageUrl, description: 'Service area information for Solara Cleaning Services.' },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solaracleaningfl.com/' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: pageUrl },
    ] },
  ]

  return (
    <div className="site-shell faq-page-shell" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <SiteHeader />
      <main>
        <section className="faq-page-hero service-areas-hero">
          <div className="faq-page-rays" aria-hidden="true" />
          <div>
            <p className="eyebrow"><MapPin size={16} /> Local cleaning, close to home</p>
            <h1>House Cleaning Services in St. Petersburg &amp; Pinellas County</h1>
            <p>Solara Cleaning Services provides professional residential cleaning throughout St. Petersburg and serves surrounding areas in Pinellas County. Enter your ZIP code when requesting a quote to confirm availability for your home.</p>
          </div>
        </section>

        <section className="service-area-content section">
          <div>
            <p className="eyebrow">St. Petersburg coverage</p>
            <h2>Neighborhoods<br /><em>across the city.</em></h2>
            <p>From central St. Pete to waterfront and west-side neighborhoods, our service area includes homes across the city. Commonly recognized neighborhoods within our primary St. Petersburg market include:</p>
          </div>
          <ul className="area-list">
            {neighborhoods.map((area) => <li key={area}><MapPin size={18} aria-hidden="true" /> {area}</li>)}
          </ul>
        </section>

        <section className="other-services section">
          <div className="other-services-heading">
            <p className="eyebrow">Cleaning options</p>
            <h2>Care for homes,<br /><em>moves, and workplaces.</em></h2>
          </div>
          <div className="other-service-links">
            {services.map((service) => {
              const Icon = service.icon
              return <a href={`/services/${service.slug}`} key={service.slug}><Icon size={22} aria-hidden="true" /><span>{service.title}</span><ArrowRight size={19} /></a>
            })}
          </div>
        </section>

        <section className="final-cta">
          <SunMark />
          <p>Not sure whether your address is in range?</p>
          <h2>Check your ZIP code for availability.</h2>
          <a className="button button-dark" href="/book-now">GET AN INSTANT QUOTE <ArrowRight size={18} /></a>
        </section>
      </main>
      <SiteFooter commercial />
    </div>
  )
}
