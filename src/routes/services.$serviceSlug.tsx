import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'

import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SunMark } from '../components/SunMark'
import { getServiceBySlug, services } from '../data/services'

export const Route = createFileRoute('/services/$serviceSlug')({
  component: ServicePage,
})

function ServicePage() {
  const { serviceSlug } = Route.useParams()
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return (
      <div className="site-shell service-page-shell">
        <SiteHeader />
        <main className="service-not-found">
          <SunMark />
          <p className="eyebrow">Service guide</p>
          <h1>That service page isn’t here.</h1>
          <a className="button button-dark" href="/#services">View all services <ArrowRight size={18} /></a>
        </main>
      </div>
    )
  }

  const ServiceIcon = service.icon

  return (
    <div className="site-shell service-page-shell">
      <SiteHeader />
      <main>
        <section className={`service-detail-hero service-tone-${service.number}`}>
          <div className="service-detail-rays" aria-hidden="true" />
          <div className="service-detail-copy">
            <a className="service-back-link" href="/#services"><ArrowLeft size={17} /> All services</a>
            <p className="eyebrow"><Sparkles size={17} /> Solara service guide</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="/#quote">BOOK NOW <ArrowRight size={18} /></a>
              <a className="text-link" href="#details">See what’s included <span>↓</span></a>
            </div>
          </div>
          <div className="service-detail-visual">
            <div className="service-detail-photo">
              <img src={service.image} alt={`${service.title} by Solara Cleaning Services`} />
              {service.slug === 'office-cleaning' && (
                <small className="photo-credit">Photo: Ingridinsydney / CC BY-SA 4.0</small>
              )}
            </div>
            <div className="service-icon-stamp">
              <ServiceIcon size={34} aria-hidden="true" />
              <span>{service.number}</span>
            </div>
            <span className="service-detail-note">{service.note}</span>
          </div>
        </section>

        <section className={`service-detail-content section${service.quoteNotice ? ' service-quote-layout' : ''}${service.slug === 'office-cleaning' || service.slug === 'post-construction-cleaning' ? ' office-detail-content' : ''}`} id="details">
          <div className="service-story">
            <p className="eyebrow">Care shaped around your space</p>
            <h2>A detailed clean.<br /><em>A lighter day.</em></h2>
            <p className="service-description">{service.description}</p>
            <div className="service-fit-card">
              <span>Ideal for</span>
              <p>{service.idealFor}</p>
            </div>
            {service.quoteNotice && (
              <aside className="service-quote-notice">
                <strong>Contact us for an accurate quote</strong>
                <p>
                  {service.quoteNotice} Please contact us via <a href="tel:+17274333048">phone</a> or{' '}
                  <a href="mailto:hello@solaracleaningservices.com">email</a> for a quote!{' '}
                  <a href="tel:+17274333048">(727) 433-3048</a>
                </p>
              </aside>
            )}
          </div>
          <div className="service-includes-card">
            <p className="eyebrow">What’s included</p>
            <h2>The details<br /><em>we handle.</em></h2>
            <ul>
              {service.includes.map((item) => <li key={item}><Check size={19} /> {item}</li>)}
            </ul>
            <a className="button" href="/#quote">BOOK NOW <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="other-services section">
          <div className="other-services-heading">
            <p className="eyebrow">Explore more options</p>
            <h2>Find your right<br /><em>kind of clean.</em></h2>
          </div>
          <div className="other-service-links">
            {services.filter((item) => item.slug !== service.slug).map((item) => {
              const OtherIcon = item.icon
              return (
                <a href={`/services/${item.slug}`} key={item.slug}>
                  <OtherIcon size={22} aria-hidden="true" />
                  <span>{item.title}</span>
                  <ArrowRight size={19} />
                </a>
              )
            })}
          </div>
        </section>

        <section className="final-cta">
          <SunMark />
          <p>Life’s too bright to spend it cleaning.</p>
          <h2>Let’s make home feel lighter.</h2>
          <a className="button button-dark" href="/#quote">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>

      <SiteFooter commercial />
    </div>
  )
}
