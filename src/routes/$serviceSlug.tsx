import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'

import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SunMark } from '../components/SunMark'
import { FaqList } from '../components/FaqList'
import { getServiceBySlug, services } from '../data/services'

export const Route = createFileRoute('/$serviceSlug')({
  component: ServicePage,
  head: ({ params }) => {
    const service = getServiceBySlug(params.serviceSlug)
    if (!service) return { meta: [{ title: 'Service Not Found | Solara Cleaning' }, { name: 'robots', content: 'noindex' }] }
    const url = `https://solaracleaningfl.com/${service.slug}/`
    return {
      meta: [
        { title: service.seoTitle },
        { name: 'description', content: service.metaDescription },
        { property: 'og:title', content: service.seoTitle },
        { property: 'og:description', content: service.metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `https://solaracleaningfl.com${service.image}` },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
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
  const GuideItemIcon = service.slug === 'recurring-cleaning' ? ArrowRight : Check
  const imageDimensions: Record<string, [number, number]> = {
    'standard-cleaning': [540, 360], 'deep-cleaning': [540, 360], 'recurring-cleaning': [540, 360],
    'move-in-out-cleaning': [540, 360], 'office-cleaning': [540, 360], 'post-construction-cleaning': [540, 360],
  }
  const [imageWidth, imageHeight] = imageDimensions[service.slug]
  const pageUrl = `https://solaracleaningfl.com/${service.slug}/`
  const guideCopy = ({
    'deep-cleaning': { title: 'A deeper reset.', subtitle: 'Room by room.', intro: 'We go beyond routine upkeep to address buildup, edges, fixtures, and overlooked spaces throughout the home.', note: ['More than maintenance', 'Deep Cleaning includes the routine Standard Cleaning scope plus added time for buildup, detailed surfaces, edges, fixtures, and frequently overlooked areas.'], fit: 'Best for a home that needs more than routine upkeep.' },
    'recurring-cleaning': { title: 'Consistent care.', subtitle: 'Built around you.', intro: 'Each visit follows a familiar scope while keeping your household’s priorities and preferred schedule at the center of the plan.', note: ['Care that stays consistent', 'Your room-by-room scope, preferred frequency, and household priorities create a reliable rhythm from one appointment to the next.'], fit: 'Best for a home that feels better with dependable, ongoing care.' },
    'move-in-out-cleaning': { title: 'A fresh handoff.', subtitle: 'A clean start.', intro: 'With the home empty or nearly empty, we can reach cabinets, closets, appliances, trim, glass, and floors that are harder to access around belongings.', note: ['Designed for empty spaces', 'This service includes inside empty storage and major appliances, along with detailed surfaces throughout the home, for a cleaner arrival or handoff.'], fit: 'Best for an empty home changing hands, occupants, or purpose.' },
    'office-cleaning': { title: 'A polished space.', subtitle: 'Ready for work.', intro: 'We focus on the shared surfaces, high-touch areas, breakrooms, restrooms, and client-facing spaces that shape how your workplace feels each day.', note: ['Flexible service', 'Available for one-time, weekly, biweekly, or customized recurring service based on your workplace, traffic, and priorities.'], fit: 'Best for professional spaces that need to feel tidy, welcoming, and ready.' },
    'post-construction-cleaning': { title: 'The final clean.', subtitle: 'Ready for the reveal.', intro: 'We remove fine construction dust and light residue from the finished surfaces and detail areas that ordinary cleaning can miss after a build or renovation.', note: ['Important scope note', 'Heavy construction debris, hazardous materials, and extensive paint, grout, or adhesive removal are not included.'], fit: 'Best for completed construction, renovation, and remodeling projects.' },
  } as Record<string, { title: string; subtitle: string; intro: string; note: string[]; fit: string }>)[service.slug] ?? { title: 'Everyday care.', subtitle: 'Room by room.', intro: 'We focus on the surfaces and spaces you use every day, following a consistent scope that leaves the whole home feeling refreshed.', note: ['Need a little more?', 'Inside appliances, interior windows, fan blades, blinds, dishes, laundry, and inside empty cabinets are available as optional add-ons when selected with your booking.'], fit: 'Best for a home that needs reliable upkeep—not a top-to-bottom reset.' }
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Service', name: service.h1, description: service.description, url: pageUrl, serviceType: service.title, provider: { '@type': 'LocalBusiness', '@id': 'https://solaracleaningfl.com/#business', name: 'Solara Cleaning Services', url: 'https://solaracleaningfl.com/', telephone: '+1-727-594-8636' }, areaServed: { '@type': 'AdministrativeArea', name: 'Pinellas County, Florida' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solaracleaningfl.com/' },
      { '@type': 'ListItem', position: 2, name: service.title, item: pageUrl },
    ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
  ]

  return (
    <div className="site-shell service-page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <SiteHeader />
      <main>
        <section className={`service-detail-hero service-tone-${service.number}`}>
          <div className="service-detail-rays" aria-hidden="true" />
          <div className="service-detail-copy">
            <a className="service-back-link" href="/#services"><ArrowLeft size={17} /> All services</a>
            <p className="eyebrow"><Sparkles size={17} /> Solara service guide</p>
            <h1>{service.h1}</h1>
            <p>{service.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
              <a className="text-link" href="#details">See what’s included <span>↓</span></a>
            </div>
          </div>
          <div className="service-detail-visual">
            <div className="service-detail-photo">
              <img src={service.image} alt={service.slug === 'post-construction-cleaning' ? 'Renovated interior ready for post-construction cleaning' : service.slug === 'office-cleaning' ? 'Bright office workspace prepared for cleaning' : 'Cleaning professional caring for a bright, tidy space'} width={imageWidth} height={imageHeight} loading="eager" fetchPriority="high" />
              {service.slug === 'office-cleaning' && (
                <small className="photo-credit">Photo: Ingridinsydney / CC BY-SA 4.0</small>
              )}
              {service.slug === 'post-construction-cleaning' && (
                <small className="photo-credit">Photo: Sergej Majboroda / Poly Haven / CC0</small>
              )}
            </div>
            <div className="service-icon-stamp">
              <ServiceIcon size={34} aria-hidden="true" />
              <span>{service.number}</span>
            </div>
            <span className="service-detail-note">{service.note}</span>
          </div>
        </section>

        <section className={`${service.includeGroups ? `standard-service-guide service-guide-${service.slug}` : 'service-detail-content'} section${!service.includeGroups && service.quoteNotice ? ' service-quote-layout' : ''}${!service.includeGroups && (service.slug === 'office-cleaning' || service.slug === 'post-construction-cleaning') ? ' office-detail-content' : ''}${!service.includeGroups && service.slug === 'post-construction-cleaning' ? ' post-construction-detail-content' : ''}`} id="details">
          {service.includeGroups ? (
            <>
              <header className="standard-guide-header">
                <div>
                  <p className="eyebrow">Your {service.shortTitle.toLowerCase()}, clearly defined</p>
                  <h2><span>{guideCopy.title}</span><br /><em>{guideCopy.subtitle}</em></h2>
                </div>
                <div className="standard-guide-intro">
                  <p>{service.description}</p>
                  <p>{guideCopy.intro}</p>
                </div>
              </header>

              <div className="standard-room-grid" aria-label={`${service.title} service details`}>
                {service.includeGroups.map((group, index) => (
                  <article key={group.title}>
                    <div className="standard-room-heading">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.items.map((item) => <li key={item}><GuideItemIcon size={17} /> <span>{item}</span></li>)}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="standard-addons-note">
                <Sparkles size={22} aria-hidden="true" />
                <strong>{guideCopy.note[0]}</strong>
                <p>{guideCopy.note[1]}</p>
              </div>

              <aside className="standard-fit-band">
                <div className="standard-fit-copy">
                  <p className="eyebrow">Is this the right service?</p>
                  <h3>{guideCopy.fit}</h3>
                </div>
                <ul>
                  {service.fitPoints?.map((item) => <li key={item}><Check size={18} /> <span>{item}</span></li>)}
                </ul>
                {service.quoteNotice ? (
                  <a className="button button-dark" href="tel:+17275948636">CONTACT FOR A QUOTE <ArrowRight size={18} /></a>
                ) : (
                  <a className="button button-dark" href="/book-now">GET AN INSTANT QUOTE <ArrowRight size={18} /></a>
                )}
              </aside>
            </>
          ) : (
          <>
          <div className="service-story">
            <p className="eyebrow">Care shaped around your space</p>
            <h2>A detailed clean.<br /><em>A lighter day.</em></h2>
            <p className="service-description">{service.description}</p>
            <p className="service-description">Serving homes and spaces in St. Petersburg and surrounding areas in Pinellas County, Solara tailors the visit to the selected service and the details shared with your quote.</p>
            <div className="service-fit-card">
              <h3>Who this service is best for</h3>
              <p>{service.idealFor} {service.bestForDetails}</p>
              {service.fitPoints && (
                <ul className="service-fit-list">
                  {service.fitPoints.map((item) => <li key={item}><Check size={17} /> <span>{item}</span></li>)}
                </ul>
              )}
            </div>
            {service.quoteNotice && (
              <aside className="service-quote-notice">
                <a href="tel:+17275948636"><strong>Contact us for an accurate quote</strong></a>
                <p>
                  {service.quoteNotice} Please <a href="tel:+17275948636">contact us by phone</a> or{' '}
                  <a href="mailto:hello@solaracleaningfl.com">email</a> for a quote!{' '}
                  <a href="tel:+17275948636">(727) 594-8636</a>
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
            <a className="button" href="/book-now">GET AN INSTANT QUOTE <ArrowRight size={18} /></a>
          </div>
          </>
          )}
        </section>

        <section className="service-faq section" aria-labelledby="service-faq-title">
          <div className="service-faq-heading">
            <p className="eyebrow">Helpful details</p>
            <h2 id="service-faq-title">Questions about<br /><em>{service.shortTitle.toLowerCase()}.</em></h2>
            <p>Still deciding? Compare this service with the related options below or <a href="/book-now">get an instant quote</a> for your space.</p>
          </div>
          <FaqList items={service.faqs.map((faq) => ({ ...faq, category: service.title }))} />
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
                <a href={`/${item.slug}/`} key={item.slug}>
                  <OtherIcon size={22} aria-hidden="true" />
                  <span>{item.title}</span>
                  <ArrowRight size={19} />
                </a>
              )
            })}
          </div>
          <a className="text-link service-area-link" href="/service-areas">See all areas served in St. Petersburg and Pinellas County <ArrowRight size={17} /></a>
        </section>

        <section className="final-cta">
          <SunMark />
          <p>Life’s too bright to spend it cleaning.</p>
          <h2>Let’s make home feel lighter.</h2>
          <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>

      <SiteFooter commercial />
    </div>
  )
}
