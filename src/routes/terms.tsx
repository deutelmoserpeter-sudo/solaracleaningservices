import { createFileRoute } from '@tanstack/react-router'
import { ClipboardCheck } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: 'Terms of Service | Solara Cleaning Services' },
      { name: 'description', content: 'Review the terms that apply when using the Solara Cleaning Services website and booking cleaning services.' },
      { property: 'og:title', content: 'Terms of Service | Solara Cleaning Services' },
      { property: 'og:description', content: 'Review the terms for using the Solara website and booking cleaning services.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/terms' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/terms' }],
  }),
})

function TermsPage() {
  return (
    <div className="site-shell terms-page-shell" id="top">
      <SiteHeader />
      <main>
        <header className="privacy-hero terms-hero" aria-labelledby="terms-title">
          <div className="privacy-rays" aria-hidden="true" />
          <div className="privacy-hero-copy reveal reveal-one">
            <p className="eyebrow"><ClipboardCheck size={17} /> Clear expectations, brighter service</p>
            <h1 id="terms-title">Terms of<br /><em>service.</em></h1>
            <p>These terms explain the agreement between you and Solara Cleaning Services when you use our website or book our cleaning services.</p>
            <span>Effective September 25, 2026</span>
          </div>
        </header>

        <section className="privacy-content" aria-label="Terms of service details">
          <aside className="privacy-summary terms-summary">
            <p className="eyebrow">The short version</p>
            <h2>Good service starts with clarity.</h2>
            <p>By using our website or booking a service, you agree to these terms. We ask for accurate booking details, safe access to the property, and timely payment.</p>
          </aside>

          <article className="privacy-policy">
            <section>
              <h2>Agreement to these terms</h2>
              <p>These Terms of Service govern your use of the Solara Cleaning Services website and any quote, booking, or cleaning service provided by Solara Cleaning Services (“Solara,” “we,” “us,” or “our”). By using the website, requesting a quote, or scheduling a service, you agree to these terms and our <a href="/privacy">Privacy Policy</a>.</p>
              <p>If you do not agree with these terms, please do not use the website or book our services.</p>
            </section>

            <section>
              <h2>Quotes and bookings</h2>
              <p>Quotes are based on the information you provide about the property, its condition, and the requested work. A quote may be adjusted if the property size, condition, access requirements, or requested services differ materially from the information provided. We communicate significant changes before completing work whenever reasonably possible.</p>
              <p>A requested date or time is not confirmed until Solara provides a booking confirmation. Service availability may change, and we may decline or reschedule a request when necessary.</p>
            </section>

            <section>
              <h2>Customer responsibilities</h2>
              <p>You agree to provide complete and accurate booking information, clear service instructions, and safe, timely access to the property. Before service begins, please secure pets, valuables, sensitive documents, medications, weapons, and fragile or irreplaceable items. Please identify delicate surfaces, damaged fixtures, areas requiring special products, and any known hazards.</p>
              <p>You are responsible for ensuring that utilities needed for cleaning—including running water and electricity—are available and that the property is reasonably safe for our team. Solara may refuse or stop work when conditions are unsafe, unsanitary beyond the agreed scope, unlawful, or materially different from what was disclosed.</p>
            </section>

            <section>
              <h2>Service scope</h2>
              <p>Our work is limited to the services included in your confirmed booking. Unless expressly agreed in writing, services do not include hazardous-material removal, pest or biohazard remediation, exterior work, moving unusually heavy items, or work requiring specialized licensing or equipment.</p>
              <p>Cleaning results vary based on age, wear, staining, material condition, and prior maintenance. We cannot guarantee that every stain, discoloration, odor, or buildup can be fully removed without risking damage.</p>
            </section>

            <section>
              <h2>Pricing and payment</h2>
              <p>You agree to pay the price, taxes, fees, and approved additions associated with your booking. Payment is due according to the terms presented at booking or on your invoice. If payment is overdue, we may pause future service and use lawful methods to collect the outstanding balance.</p>
              <p>Promotions, discounts, and credits may be subject to additional conditions, expiration dates, and availability. Unless stated otherwise, they cannot be combined or exchanged for cash.</p>
            </section>

            <section>
              <h2>Cancellations and rescheduling</h2>
              <p>Please contact us as soon as possible if you need to cancel or reschedule. A cancellation or lockout fee may apply when notice is provided too close to the appointment or when our team cannot enter the property at the confirmed time. Any applicable fee is communicated through the booking process or service confirmation.</p>
              <p>We may reschedule due to illness, severe weather, unsafe conditions, staffing constraints, or events outside our reasonable control. When this happens, we make reasonable efforts to offer a new appointment.</p>
            </section>

            <section>
              <h2>Service concerns and damage</h2>
              <p>If you are dissatisfied with a cleaning, contact us within 24 hours of service and provide enough detail for us to review the concern. When appropriate, our happiness guarantee may include returning to address eligible areas. The guarantee does not provide a cash refund and does not cover conditions outside the confirmed scope or issues reported after the notice period.</p>
              <p>Please report suspected loss or damage promptly. Solara is not responsible for ordinary wear, pre-existing damage, undisclosed fragility, or damage caused by defective or improperly installed items. Do not arrange repairs or replacements before allowing us a reasonable opportunity to inspect and respond.</p>
            </section>

            <section>
              <h2>Website use</h2>
              <p>You may use this website only for lawful, personal, and legitimate business purposes. You may not interfere with the website, attempt unauthorized access, submit false or harmful information, introduce malicious code, scrape content through automated means, or use our content or branding without permission.</p>
              <p>Website content is provided for general information and may be updated without notice. Solara owns or licenses the website’s text, graphics, branding, photography, design, and other content, which is protected by applicable intellectual property laws.</p>
            </section>

            <section>
              <h2>Third-party services</h2>
              <p>Our website may use or link to third-party scheduling, payment, mapping, or communications services. Those services are governed by their own terms and privacy practices. Solara is not responsible for third-party websites, services, or content.</p>
            </section>

            <section>
              <h2>Disclaimer and limitation of liability</h2>
              <p>To the fullest extent permitted by law, the website is provided “as is” and “as available” without warranties of uninterrupted or error-free operation. Nothing in these terms excludes warranties or rights that cannot lawfully be excluded.</p>
              <p>To the fullest extent permitted by law, Solara is not liable for indirect, incidental, special, consequential, or punitive damages arising from the website or services. Solara’s total liability for a claim relating to a cleaning service is limited to the amount you paid for the service giving rise to the claim, except where a different limitation is required by law.</p>
            </section>

            <section>
              <h2>Governing law and disputes</h2>
              <p>These terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Before beginning formal proceedings, you agree to contact us and make a good-faith effort to resolve the concern directly. Any dispute that cannot be resolved informally must be brought in a court with appropriate jurisdiction in Pinellas County, Florida, unless applicable law requires otherwise.</p>
            </section>

            <section>
              <h2>Changes and general terms</h2>
              <p>We may update these terms from time to time. The effective date at the top of this page identifies the current version. Continued use of the website or services after an update means you accept the revised terms.</p>
              <p>If any part of these terms is found unenforceable, the remaining provisions remain in effect. Our failure to enforce a provision is not a waiver of that provision. These terms, the Privacy Policy, and your confirmed booking details form the agreement between you and Solara concerning the website and services.</p>
            </section>

            <section className="privacy-contact">
              <h2>Contact us</h2>
              <p>Questions about these terms can be sent to Solara Cleaning Services at <a href="mailto:hello@solaracleaningfl.com">hello@solaracleaningfl.com</a> or <a href="tel:+17275948636">(727) 594-8636</a>.</p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
