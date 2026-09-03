import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

import { services } from '../data/services'
import { SunMark } from './SunMark'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Solara Cleaning Services home" onClick={closeMenu}>
        <SunMark />
        <span className="brand-copy">
          <strong>Solara</strong>
          <small>cleaning services</small>
        </span>
      </a>

      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <a href="/#top" onClick={closeMenu}>Home</a>
        <div className={servicesOpen ? 'nav-services is-open' : 'nav-services'}>
          <button
            className="services-trigger"
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="services-menu"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <ChevronDown size={15} />
          </button>
          <div className="services-dropdown" id="services-menu">
            {services.map((service) => {
              const ServiceIcon = service.icon
              return (
                <a href={`/services/${service.slug}`} key={service.slug} onClick={closeMenu}>
                  <ServiceIcon size={18} aria-hidden="true" />
                  <span>{service.title}</span>
                </a>
              )
            })}
          </div>
        </div>
        <a href="/about" onClick={closeMenu}>About</a>
        <a href="/#reviews" onClick={closeMenu}>Reviews</a>
        <a href="/faq" onClick={closeMenu}>FAQ</a>
        <a href="/apply" onClick={closeMenu}>Join Our Team</a>
        <a className="mobile-quote" href="/book-now" onClick={closeMenu}>BOOK NOW <ArrowRight size={17} /></a>
        <a className="mobile-phone" href="tel:+17275948636" onClick={closeMenu}><Phone size={18} /> (727) 594-8636</a>
      </nav>

      <div className="header-actions">
        <a className="header-phone" href="tel:+17275948636"><Phone size={16} /> (727) 594-8636</a>
        <a className="button button-small header-quote" href="/book-now">BOOK NOW <ArrowRight size={17} /></a>
      </div>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
