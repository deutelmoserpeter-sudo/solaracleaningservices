import { createFileRoute } from '@tanstack/react-router'
import { CalendarCheck } from 'lucide-react'
import { useEffect } from 'react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export const Route = createFileRoute('/book-now')({
  validateSearch: (search) => ({
    service_id: getSearchValue(search.service_id),
    frequency_id: getSearchValue(search.frequency_id),
    zipcode: getSearchValue(search.zipcode),
    'pricing_parameter[1]': getSearchValue(search['pricing_parameter[1]']),
    'pricing_parameter[2]': getSearchValue(search['pricing_parameter[2]']),
  }),
  component: BookNowPage,
})

function getSearchValue(value: unknown) {
  return typeof value === 'string' || typeof value === 'number' ? String(value) : undefined
}

function BookNowPage() {
  const search = Route.useSearch()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://solaracleaningfl.bookingkoala.com/resources/embed.js'
    script.defer = true
    script.dataset.bookingKoalaEmbed = 'true'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  const bookingParams = new URLSearchParams({
    embed: 'true',
    industry_id: '1',
    form_id: '1',
    location: '1',
  })

  Object.entries(search).forEach(([key, value]) => {
    if (value) bookingParams.set(key, value)
  })

  const bookingUrl = `https://solaracleaningfl.bookingkoala.com/booknow?${bookingParams.toString()}`

  return (
    <div className="site-shell booking-page-shell" id="top">
      <SiteHeader />
      <main className="booking-page-main">
        <header className="booking-page-intro">
          <span className="booking-page-rays" aria-hidden="true" />
          <div className="booking-page-intro-copy">
            <p className="eyebrow">Online booking</p>
            <h1>Book a <em>cleaner home.</em></h1>
            <p>Choose your service, preferred date, and cleaning details below.</p>
          </div>
          <div className="booking-page-note">
            <CalendarCheck size={30} aria-hidden="true" />
            <div>
              <strong>Simple online scheduling</strong>
              <span>View pricing and availability as you book.</span>
            </div>
          </div>
        </header>
        <div className="booking-embed" aria-label="Solara Cleaning Services online booking form">
          <iframe
            src={bookingUrl}
            title="Book a cleaning with Solara Cleaning Services"
            width="100%"
            height="1000"
            scrolling="no"
          />
        </div>
      </main>
      <SiteFooter commercial />
    </div>
  )
}
