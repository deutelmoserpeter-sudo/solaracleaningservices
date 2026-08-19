import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Clock3, Heart, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export const Route = createFileRoute('/apply')({
  component: CleanerApplicationPage,
})

const roleHighlights = [
  { icon: Clock3, title: 'Flexible schedule', text: 'Share the days and hours that work best for you.' },
  { icon: Heart, title: 'Motivated team', text: 'Work with driven professionals who value clear communication and a positive experience for every client.' },
  { icon: ShieldCheck, title: 'Pride in your work', text: 'Bring dependable, detail-minded service to local homes.' },
]

function CleanerApplicationPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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

      if (!response.ok) throw new Error('Unable to submit application')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site-shell apply-page-shell" id="top">
      <SiteHeader />
      <main>
        <section className="apply-hero" aria-labelledby="apply-title">
          <div className="apply-hero-rays" aria-hidden="true" />
          <div className="apply-hero-copy reveal reveal-one">
            <p className="eyebrow"><Sparkles size={16} /> Join the Solara team</p>
            <h1 id="apply-title">Good work.<br /><em>Brighter days.</em></h1>
            <p>We’re looking for dependable, detail-minded cleaners who take pride in helping St. Pete homes feel their best.</p>
            <a className="button button-dark" href="#application">START YOUR APPLICATION <ArrowRight size={18} /></a>
          </div>
          <div className="apply-hero-visual reveal reveal-two">
            <img src="/images/cleaner-application.png" alt="Professional cleaner wiping a bathroom counter" />
            <div className="apply-note">
              <MapPin size={18} aria-hidden="true" />
              <span>Serving St. Petersburg<br />and nearby communities</span>
            </div>
          </div>
        </section>

        <section className="apply-intro section" aria-labelledby="role-title">
          <div className="apply-intro-heading">
            <p className="eyebrow">A thoughtful place to work</p>
            <h2 id="role-title">Bring your care.<br /><em>We’ll bring support.</em></h2>
            <div className="services-heading-note faq-intro-note apply-intro-note">
              <Sparkles size={24} aria-hidden="true" />
              <p>Professional cleaning experience is welcome, but reliability, a positive attitude, and genuine care for people’s homes matter most.</p>
            </div>
          </div>
          <div className="apply-highlights">
            {roleHighlights.map((highlight) => {
              const HighlightIcon = highlight.icon
              return (
                <article key={highlight.title}>
                  <HighlightIcon aria-hidden="true" />
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="application-section section" id="application" aria-labelledby="application-title">
          <div className="application-intro">
            <p className="eyebrow light">Tell us about you</p>
            <h2 id="application-title">Let’s see if<br /><em>we’re a fit.</em></h2>
            <p>Complete the short application and our team will review your information. If your availability matches our current needs, we’ll reach out to talk next steps.</p>
            <ul className="application-checklist">
              <li><Check size={18} /> Takes about five minutes</li>
              <li><Check size={18} /> No résumé required</li>
              <li><Check size={18} /> Your information stays private</li>
            </ul>
          </div>

          <form className="quote-form application-form" name="cleaner-application" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="cleaner-application" />
            <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
            <div className="form-grid">
              <label>First name<input type="text" name="first-name" autoComplete="given-name" required placeholder="Your first name" /></label>
              <label>Last name<input type="text" name="last-name" autoComplete="family-name" required placeholder="Your last name" /></label>
              <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>Phone<input type="tel" name="phone" autoComplete="tel" required placeholder="(555) 123-4567" /></label>
              <label>City<input type="text" name="city" autoComplete="address-level2" required placeholder="Where do you live?" /></label>
              <label>Cleaning experience<select name="experience" required defaultValue=""><option value="" disabled>Select experience</option><option>No professional experience yet</option><option>Less than 1 year</option><option>1–3 years</option><option>3+ years</option></select></label>
              <label>Weekly availability<select name="availability" required defaultValue=""><option value="" disabled>Select availability</option><option>Weekday mornings</option><option>Weekday afternoons</option><option>Weekdays, flexible hours</option><option>Weekends</option><option>Open availability</option></select></label>
              <label>Reliable transportation<select name="transportation" required defaultValue=""><option value="" disabled>Select an answer</option><option>Yes</option><option>No</option></select></label>
              <label className="full-field">What do you believe is most important when providing a high-quality cleaning service?<textarea name="service-quality" rows={5} required placeholder="Share what high-quality service means to you..." /></label>
              <label className="full-field consent-field"><input type="checkbox" name="work-authorization" value="Yes" required /><span>I confirm that I am authorized to work in the United States and that the information provided is accurate.</span></label>
              <label className="full-field consent-field"><input type="checkbox" name="background-check-consent" value="Yes" required /><span>I acknowledge and consent to a background check as part of the application process with Solara Cleaning Services.</span></label>
            </div>
            <button className="button button-dark form-button" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending your application...' : 'SUBMIT APPLICATION'} <ArrowRight size={18} />
            </button>
            {formStatus === 'success' && <p className="form-message success" role="status">Thanks for applying! We’ve received your application and will be in touch if there’s a match.</p>}
            {formStatus === 'error' && <p className="form-message error" role="alert">Something went wrong. Please try again or email our team directly.</p>}
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
