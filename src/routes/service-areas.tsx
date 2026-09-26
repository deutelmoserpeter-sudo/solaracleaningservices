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
      { title: 'House Cleaning in St. Petersburg & Nearby Beaches | Solara' },
      { name: 'description', content: 'Solara provides house cleaning in St. Petersburg, Gulfport, St. Pete Beach, Treasure Island, Madeira Beach, Pinellas Park, Seminole, and Largo.' },
      { property: 'og:title', content: 'House Cleaning in St. Petersburg & Nearby Communities' },
      { property: 'og:description', content: 'Professional home cleaning from St. Petersburg and Gulfport to the beaches, Pinellas Park, Seminole, and Largo.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/service-areas' },
      { property: 'og:image', content: 'https://solaracleaningfl.com/images/hero-cleaning.jpg' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/service-areas' }],
  }),
})

const serviceAreas = ['St. Petersburg', 'Gulfport', 'St. Pete Beach', 'Treasure Island', 'Madeira Beach', 'Pinellas Park', 'Seminole', 'Largo']

function ServiceAreasPage() {
  const pageUrl = 'https://solaracleaningfl.com/service-areas'
  const schema = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'House Cleaning in St. Petersburg & Nearby Communities', url: pageUrl, description: 'Explore the St. Petersburg-area communities served by Solara Cleaning Services.' },
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
            <h1>House Cleaning in St. Petersburg &amp; Nearby Communities</h1>
            <p>Solara Cleaning Services provides professional residential cleaning across St. Petersburg, nearby beach communities, and select cities throughout southern Pinellas County. Enter your ZIP code when requesting a quote to confirm availability for your home.</p>
          </div>
        </section>

        <section className="service-area-content section">
          <div>
            <p className="eyebrow">Our service area</p>
            <h2>Local care,<br /><em>from city to shore.</em></h2>
            <p>From homes in St. Petersburg and Gulfport to beach communities along the Gulf, our team brings reliable, detail-minded cleaning to these local areas:</p>
          </div>
          <ul className="area-list">
            {serviceAreas.map((area) => <li key={area}><MapPin size={18} aria-hidden="true" /> {area}</li>)}
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
              return <a href={`/${service.slug}/`} key={service.slug}><Icon size={22} aria-hidden="true" /><span>{service.title}</span><ArrowRight size={19} /></a>
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
