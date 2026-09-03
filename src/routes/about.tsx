import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Heart, ShieldCheck, Sparkles } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SunMark } from '../components/SunMark'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const values = [
  {
    icon: ShieldCheck,
    title: 'Carefully trusted',
    text: 'Our cleaners are vetted, insured, and trained to care for every home with consistency and respect.',
  },
  {
    icon: Heart,
    title: 'Genuinely human',
    text: 'Clear communication, familiar faces whenever possible, and thoughtful service guide every visit.',
  },
  {
    icon: Sparkles,
    title: 'Detail devoted',
    text: 'We notice the finishing touches that make a room feel lighter, calmer, and ready to enjoy.',
  },
]

function AboutPage() {
  return (
    <div className="site-shell about-page-shell" id="top">
      <SiteHeader />
      <main>
        <section className="about-page-hero" aria-labelledby="about-title">
          <div className="about-page-rays" aria-hidden="true" />
          <div className="about-page-heading reveal reveal-one">
            <p className="eyebrow"><Sparkles size={16} /> Care you can feel</p>
            <h1 id="about-title">Clean homes.<br /><em>Kind humans.</em></h1>
            <p>Solara brings reliable, detail-minded cleaning to Tampa Bay homes so your space feels cared for and your day feels a little lighter.</p>
            <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
          </div>

          <div className="about-page-images reveal reveal-two">
            <div className="about-main-image">
              <img src="/images/team-cleaning.jpg" alt="Friendly home cleaning professional at work" />
            </div>
            <div className="about-accent-image">
              <img src="/images/cleaning-sun.jpg" alt="Bright, freshly cleaned home in the sunshine" />
            </div>
            <span className="handwritten">the little things<br />matter here</span>
          </div>
        </section>

        <section className="about-page-story section">
          <div className="about-story-intro">
            <p className="eyebrow">Why Solara</p>
            <h2>More ease in<br /><em>every visit.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">Solara Cleaning was built around one simple belief: a clean home should make life easier, not add another thing to your to-do list.</p>
            <p>As a local, family-owned company serving St. Petersburg, we created Solara to bring a higher standard of residential cleaning—one built on reliability, attention to detail, and genuine care. Our team is carefully vetted, insured, and trained to our standards, treating every home with the same respect and care we’d want for our own.</p>
            <p>We bring the supplies, handle the details, and leave you with more time to enjoy the things that matter most.</p>
            <ul className="check-list">
              <li><Check size={17} /> The same familiar faces whenever possible</li>
              <li><Check size={17} /> Clear communication before and after each visit</li>
              <li><Check size={17} /> A 24-hour happiness guarantee</li>
            </ul>
          </div>
        </section>

        <section className="about-values section" aria-labelledby="values-title">
          <div className="about-values-heading">
            <p className="eyebrow">What guides us</p>
            <h2 id="values-title">Thoughtful care,<br /><em>made visible.</em></h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => {
              const ValueIcon = value.icon
              return (
                <article key={value.title}>
                  <ValueIcon aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="final-cta home-final-cta">
          <SunMark />
          <p>Your brighter home starts here.</p>
          <h2>Ready for a fresh start?</h2>
          <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
