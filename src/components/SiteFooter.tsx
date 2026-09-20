import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import { SunMark } from './SunMark'

type SiteFooterProps = {
  commercial?: boolean
}

export function SiteFooter({ commercial = false }: SiteFooterProps) {
  return (
    <footer>
      <div className="footer-brand">
        <a className="brand inverse" href="/"><SunMark /><span className="brand-copy"><strong>Solara</strong><small>cleaning services</small></span></a>
        <p>{commercial ? 'Thoughtful residential and commercial cleaning for lighter spaces and brighter days.' : 'Thoughtful residential cleaning for lighter homes and brighter days.'}</p>
      </div>
      <div className="footer-links"><h3>Explore</h3><a href="/#services">Cleaning services</a><a href="/service-areas">Service areas</a><a href="/about">Our approach</a><a href="/faq">Cleaning FAQ</a></div>
      <div className="footer-links"><h3>Say hello</h3><a href="tel:+17275948636">(727) 594-8636</a><a href="mailto:hello@solaracleaningfl.com">hello@solaracleaningfl.com</a><span>Serving St. Petersburg, FL</span></div>
      <div className="cleaner-callout">
        <div><h3>Become a Cleaner</h3><p>Looking for flexible cleaning work? Partner with us to provide professional cleaning services across St. Pete.</p></div>
        <Link className="button cleaner-button" to="/apply">Apply Now <ArrowRight size={17} /></Link>
      </div>
      <div className="footer-bottom"><span>© 2026 Solara Cleaning Services</span><span>Insured · Detail obsessed · Locally loved</span></div>
    </footer>
  )
}
