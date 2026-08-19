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
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const reviewTimer = window.setInterval(() => {
      setActiveReview((currentReview) => (currentReview + 1) % reviews.length)
    }, 5000)

    return () => window.clearInterval(reviewTimer)
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('sending')
    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()
    formData.forEach((value, key) => body.append(key, String(value)))

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Unable to submit form')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <span>Now welcoming new recurring clients</span>
        <a href="#quote">BOOK NOW <ArrowRight size={15} /></a>
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
              <a className="button quote-card-button" href="#quote">BOOK NOW <ArrowRight size={20} /></a>
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
                <span className="service-number">{service.number}</span>
                <div>
                  <p className="service-note">{service.note}</p>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-card-arrow" aria-hidden="true"><ArrowRight /></span>
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
            <article><span>1</span><h3>Tell us about your home</h3><p>Send a few details and your ideal cleaning schedule.</p></article>
            <article><span>2</span><h3>Receive a clear quote</h3><p>We send straightforward pricing tailored to your space.</p></article>
            <article><span>3</span><h3>Come home happy</h3><p>We handle the checklist while you get on with your day.</p></article>
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
            <p>Share a few details and we’ll follow up with a personalized, no-pressure quote.</p>
            <div className="quote-contact">
              <span>Prefer to chat?</span>
              <a href="tel:+17274333048">(727) 433-3048</a>
              <a href="mailto:hello@solaracleaningservices.com">hello@solaracleaningservices.com</a>
            </div>
          </div>

          <form className="quote-form" name="cleaning-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="cleaning-quote" />
            <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
            <div className="form-grid">
              <label>First name<input type="text" name="first-name" autoComplete="given-name" required placeholder="Your first name" /></label>
              <label>Last name<input type="text" name="last-name" autoComplete="family-name" required placeholder="Your last name" /></label>
              <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>Phone<input type="tel" name="phone" autoComplete="tel" required placeholder="(555) 123-4567" /></label>
              <label>Service needed<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Recurring clean</option><option>Deep clean</option><option>Move in / out</option><option>Not sure yet</option></select></label>
              <label>Home size<select name="home-size" required defaultValue=""><option value="" disabled>Select home size</option><option>Studio / 1 bedroom</option><option>2 bedrooms</option><option>3 bedrooms</option><option>4+ bedrooms</option></select></label>
              <label className="full-field">Anything else we should know?<textarea name="message" rows={4} placeholder="Pets, timing, special requests..." /></label>
            </div>
            <button className="button button-dark form-button" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending your request...' : 'BOOK NOW'} <ArrowRight size={18} />
            </button>
            {formStatus === 'success' && <p className="form-message success">Thanks! Your request is in. We’ll be in touch soon.</p>}
            {formStatus === 'error' && <p className="form-message error">Something went wrong. Please call or email us instead.</p>}
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
          <a className="button button-dark" href="#quote">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
