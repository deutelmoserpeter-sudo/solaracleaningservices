import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Sparkles } from 'lucide-react'

import { FaqList } from '../components/FaqList'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SunMark } from '../components/SunMark'
import { faqQuestions } from '../data/faqs'

export const Route = createFileRoute('/faq')({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: 'House Cleaning FAQs | Solara Cleaning St. Petersburg' },
      { name: 'description', content: 'Find answers about Solara cleaning services, supplies, scheduling, preparation, pets, one-time cleans, recurring care, and getting a quote.' },
      { property: 'og:title', content: 'House Cleaning FAQs | Solara Cleaning St. Petersburg' },
      { property: 'og:description', content: 'Answers about Solara cleaning services, supplies, scheduling, preparation, recurring care, and quotes.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/faq' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/faq' }],
  }),
})

function FaqPage() {
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solaracleaningfl.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cleaning FAQs', item: 'https://solaracleaningfl.com/faq' },
    ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqQuestions.map((faq) => ({
      '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })) },
  ]

  return (
    <div className="site-shell faq-page-shell" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <SiteHeader />
      <main>
        <section className="faq-page-hero">
          <div className="faq-page-rays" aria-hidden="true" />
          <div>
            <p className="eyebrow"><Sparkles size={16} /> Helpful details, no guesswork</p>
            <h1>Questions,<br /><em>answered.</em></h1>
            <p>Everything you may want to know before we arrive, while we care for your space, and after the finishing touches.</p>
          </div>
        </section>

        <section className="faq-page-content section">
          <div className="faq-page-intro">
            <p className="eyebrow">The Solara guide</p>
            <h2>Good to know<br /><em>before we glow.</em></h2>
            <div className="services-heading-note faq-intro-note">
              <Sparkles size={24} aria-hidden="true" />
              <p>Our most common questions are gathered here. For anything specific to your space, send a note with your quote request.</p>
            </div>
            <div className="hero-quote-card faq-quote-card">
              <div className="quote-card-brand"><SunMark /><strong>Solara</strong><small>Cleaning Services</small></div>
              <Sparkles className="quote-card-sparkles" size={30} aria-hidden="true" />
              <h2><span>Get an</span><em>Instant Quote</em></h2>
              <p>Tell us about your home and get a custom price in seconds.</p>
              <a className="button quote-card-button" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
              <small className="quote-card-note">Quick. Easy. No commitment.</small>
            </div>
          </div>
          <FaqList items={faqQuestions} />
        </section>

        <section className="final-cta">
          <SunMark />
          <p>Ready when you are.</p>
          <h2>Let’s make your space feel lighter.</h2>
          <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>
      <SiteFooter commercial />
    </div>
  )
}
