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
        <a className="brand inverse" href="/#top"><SunMark /><span className="brand-copy"><strong>Solara</strong><small>cleaning services</small></span></a>
        <p>{commercial ? 'Thoughtful residential and commercial cleaning for lighter spaces and brighter days.' : 'Thoughtful residential cleaning for lighter homes and brighter days.'}</p>
      </div>
      <div className="footer-links"><h3>Explore</h3><a href="/#services">Services</a><a href="/about">Our approach</a><a href="/#reviews">Kind words</a><a href="/faq">FAQ</a></div>
      <div className="footer-links"><h3>Say hello</h3><a href="tel:+17274333048">(727) 433-3048</a><a href="mailto:hello@solaracleaningservices.com">Email the team</a><span>Serving St. Petersburg, FL</span></div>
      <div className="cleaner-callout">
        <div><h3>Become a Cleaner</h3><p>Looking for flexible cleaning work? Partner with us to provide professional cleaning services across St. Pete.</p></div>
        <Link className="button cleaner-button" to="/apply">Apply Now <ArrowRight size={17} /></Link>
      </div>
      <div className="footer-bottom"><span>© 2026 Solara Cleaning Services</span><span>Insured · Detail obsessed · Locally loved</span></div>
    </footer>
  )
}
