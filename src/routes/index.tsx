import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Heart,
  SprayCan,
  Sparkles,
  Star,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import { FaqList } from '../components/FaqList'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SunMark } from '../components/SunMark'
import { faqQuestions } from '../data/faqs'
import { services } from '../data/services'

function ShieldHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z" />
      <path d="M12 15.5s-3-1.7-3-3.9c0-1.8 2.2-2.3 3-1 .8-1.3 3-0.8 3 1 0 2.2-3 3.9-3 3.9Z" fill="currentColor" fillOpacity=".16" />
    </svg>
  )
}

function TrustFeatures({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'trust-row mobile-trust-row' : 'trust-row desktop-trust-row'}>
      <article><ShieldHeartIcon /><strong>Insured &amp;<br />trusted</strong><p>Your home is in safe hands with our fully insured team.</p></article>
      <article><Heart aria-hidden="true" /><strong>Pet friendly</strong><p>We love pets and clean with them in mind.</p></article>
      <article><Sparkles aria-hidden="true" /><strong>Quality<br />you can see</strong><p>We don’t just clean homes—we care for them.</p></article>
      <article><SprayCan aria-hidden="true" /><strong>Supplies<br />included</strong><p>We bring everything needed for a thorough clean.</p></article>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})

const reviews = [
  {
    quote: 'Walking in after Solara has been here is the best feeling. They are warm, reliable, and somehow make every room feel brand new.',
    name: 'Marissa P.',
    detail: 'Recurring client',
  },
  {
    quote: 'The attention to detail is incredible. Even the little places I usually forget looked fresh, polished, and completely reset.',
    name: 'Lauren T.',
    detail: 'Deep clean client',
  },
  {
    quote: 'Our move felt so much easier knowing the final clean was handled. The house looked spotless and ready for the next family.',
    name: 'Daniel R.',
    detail: 'Move-out client',
  },
  {
    quote: 'The team communicates clearly, arrives when expected, and leaves our office feeling professional and welcoming every time.',
    name: 'Camila S.',
    detail: 'Office client',
  },
]

function HomePage() {
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const reviewTimer = window.setInterval(() => {
      setActiveReview((currentReview) => (currentReview + 1) % reviews.length)
    }, 5000)

    return () => window.clearInterval(reviewTimer)
  }, [])

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <span>Now welcoming new recurring clients</span>
        <a href="/book-now">BOOK NOW <ArrowRight size={15} /></a>
      </div>

      <SiteHeader />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-one">
            <span className="mobile-home-rays" aria-hidden="true" />
            <p className="eyebrow"><Sparkles size={16} /> St. Pete&apos;s Go-To Cleaner</p>
            <h1 id="hero-title">A cleaner home.<br /><em>A brighter day.</em></h1>
            <p className="hero-intro">
              Soak up the sunshine. Leave the scrubbing to us. Our trusted cleaners keep your home fresh and welcoming, giving you more time to enjoy what matters.
            </p>
            <TrustFeatures />
          </div>

          <div className="hero-visual reveal reveal-two">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-quote-card">
              <div className="quote-card-brand"><SunMark /><strong>Solara</strong><small>Cleaning Services</small></div>
              <Sparkles className="quote-card-sparkles" size={32} aria-hidden="true" />
              <h2><span>Get an</span><em>Instant Quote</em></h2>
              <p>Tell us about your home and get a custom price in seconds.</p>
              <a className="button quote-card-button" href="/book-now">BOOK NOW <ArrowRight size={20} /></a>
              <small className="quote-card-note">Quick. Easy. No commitment.</small>
            </div>
            <div className="hero-note">
              <span className="script">hello, fresh start</span>
              <span className="note-line" />
            </div>
          </div>
          <TrustFeatures mobile />
        </section>

        <section className="promise-strip" aria-label="Our promise">
          <div className="promise-track">
            <div className="promise-set">
              <p>Come home to calm</p><SunMark /><p>Spend time where it matters</p><SunMark /><p>Leave the details to us</p><SunMark /><p>Satisfaction guaranteed</p><SunMark />
            </div>
            <div className="promise-set" aria-hidden="true">
              <p>Come home to calm</p><SunMark /><p>Spend time where it matters</p><SunMark /><p>Leave the details to us</p><SunMark /><p>Satisfaction guaranteed</p><SunMark />
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading services-heading">
            <div className="services-heading-title">
              <p className="eyebrow">Ways we can help</p>
              <h2>An experience,<br /><em>tailored to you</em></h2>
            </div>
            <div className="services-heading-note">
              <Sparkles size={24} aria-hidden="true" />
              <p>Choose the level of care your space needs. Every visit comes with our detailed checklist and happy-home guarantee.</p>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <a className="service-card" href={`/services/${service.slug}`} key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-card-arrow" aria-hidden="true"><ArrowRight /></span>
                </div>
                <div className="service-card-copy">
                  <p className="service-note"><span>{service.note}</span></p>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="process section">
          <div className="process-heading">
            <p className="eyebrow">Easy from the start</p>
            <h2>Three steps to<br /><em>more free time.</em></h2>
          </div>
          <div className="process-steps">
            <article><span>1</span><h3>Share Your Cleaning Needs</h3><p>Tell us a little about your home and the kind of clean you’re looking for.</p></article>
            <article><span>2</span><h3>Get an Instant Quote</h3><p>See your price instantly and book your cleaning with confidence.</p></article>
            <article><span>3</span><h3>You Relax, We Clean</h3><p>We take care of the details while you enjoy coming home to a space that feels fresh, clean, and cared for.</p></article>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="review-quote">
            <div className="big-quote">“</div>
            <div className="review-slide" key={activeReview}>
              <div className="stars coral" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}
              </div>
              <blockquote>“{reviews[activeReview].quote}”</blockquote>
              <p className="reviewer">— {reviews[activeReview].name} <span>{reviews[activeReview].detail}</span></p>
            </div>
            <div className="review-controls" aria-label="Choose a customer review">
              {reviews.map((review, index) => (
                <button
                  className={activeReview === index ? 'is-active' : ''}
                  type="button"
                  aria-label={`Show review from ${review.name}`}
                  aria-pressed={activeReview === index}
                  key={review.name}
                  onClick={() => setActiveReview(index)}
                />
              ))}
            </div>
            <span className="review-counter">{String(activeReview + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span>
          </div>
          <div className="review-side">
            <p className="eyebrow">Kind words</p>
            <h2>Loved by busy<br /><em>local households.</em></h2>
            <div className="review-stat"><strong>4.9</strong><span>average client rating</span></div>
            <div className="review-stat"><strong>100%</strong><span>Insured &amp; Vetted</span></div>
          </div>
        </section>

        <section className="quote-section section" id="quote">
          <div className="quote-intro">
            <p className="eyebrow light">Your fresh start</p>
            <h2>Tell us about<br /><em>your home.</em></h2>
            <p>Share a few details, then continue to our booking form with your selections already filled in.</p>
            <div className="quote-contact">
              <span>Prefer to chat?</span>
              <a href="tel:+17275948636">(727) 594-8636</a>
              <a href="mailto:hello@solaracleaningfl.com">hello@solaracleaningfl.com</a>
            </div>
          </div>

          <form className="quote-form" action="/book-now" method="GET">
            <div className="form-grid">
              <label>Cleaning service<select name="service_id" required defaultValue=""><option value="" disabled>Select a service</option><option value="6">Standard Cleaning</option><option value="2">Deep Cleaning</option><option value="3">Move In/Out Cleaning</option><option value="7">Airbnb Cleaning</option><option value="5">Post Construction Cleaning</option><option value="4">Office Cleaning</option></select></label>
              <label>Cleaning frequency<select name="frequency_id" required defaultValue=""><option value="" disabled>Select a frequency</option><option value="1">One-Time</option><option value="3">Weekly (15% Off)</option><option value="4">Bi-Weekly (10% Off)</option><option value="2">Monthly (5% Off)</option></select></label>
              <label>Number of bedrooms<select name="pricing_parameter[1]" required defaultValue=""><option value="" disabled>Select bedrooms</option><option value="32">0 / Studio</option><option value="3">1</option><option value="2">2</option><option value="5">3</option><option value="4">4</option><option value="6">5</option><option value="35">6</option></select></label>
              <label>Number of bathrooms<select name="pricing_parameter[2]" required defaultValue=""><option value="" disabled>Select bathrooms</option><option value="33">0</option><option value="34">1</option><option value="8">1.5</option><option value="9">2</option><option value="10">2.5</option><option value="11">3</option><option value="12">3.5</option><option value="13">4</option><option value="14">4.5</option><option value="15">5</option><option value="16">5.5</option><option value="17">6</option><option value="18">6.5</option><option value="19">7</option></select></label>
              <label className="full-field">ZIP code<input type="text" name="zipcode" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} required placeholder="33701" /></label>
            </div>
            <button className="button button-dark form-button" type="submit">
              REQUEST A QUOTE <ArrowRight size={18} />
            </button>
            <p className="form-helper">You’ll review pricing and availability before booking.</p>
          </form>
        </section>

        <section className="faq section" id="faq">
          <div className="faq-heading"><p className="eyebrow">Good to know</p><h2>A few common<br /><em>questions.</em></h2><a className="text-link" href="/faq">View all questions <ArrowRight size={17} /></a></div>
          <FaqList items={faqQuestions.slice(0, 4)} />
        </section>

        <section className="final-cta home-final-cta">
          <SunMark />
          <p>Life is too bright to spend it cleaning.</p>
          <h2>Take back your Saturday.</h2>
          <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
