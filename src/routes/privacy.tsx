import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Solara Cleaning Services' },
      { name: 'description', content: 'Learn how Solara Cleaning Services collects, uses, and protects personal information.' },
      { property: 'og:title', content: 'Privacy Policy | Solara Cleaning Services' },
      { property: 'og:description', content: 'Learn how Solara Cleaning Services collects, uses, and protects personal information.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/privacy' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/privacy' }],
  }),
})

function PrivacyPage() {
  return (
    <div className="site-shell privacy-page-shell" id="top">
      <SiteHeader />
      <main>
        <header className="privacy-hero" aria-labelledby="privacy-title">
          <div className="privacy-rays" aria-hidden="true" />
          <div className="privacy-hero-copy reveal reveal-one">
            <p className="eyebrow"><ShieldCheck size={17} /> Your information, handled with care</p>
            <h1 id="privacy-title">Privacy<br /><em>policy.</em></h1>
            <p>This policy explains what information Solara Cleaning Services collects, why we collect it, and the choices available to you.</p>
            <span>Effective September 25, 2026</span>
          </div>
        </header>

        <section className="privacy-content" aria-label="Privacy policy details">
          <aside className="privacy-summary">
            <p className="eyebrow">The short version</p>
            <h2>Care starts with trust.</h2>
            <p>We use your information to provide cleaning services, respond to requests, and run our business. We do not sell your personal information.</p>
          </aside>

          <article className="privacy-policy">
            <section>
              <h2>Information we collect</h2>
              <p>We may collect information you provide when you request a quote, book a service, contact us, or apply to work with us. This may include your name, email address, phone number, service address, cleaning preferences, details about your home or property, preferred dates, messages, and application information.</p>
              <p>When you use our website, our hosting and technology providers may automatically receive basic technical information such as your IP address, browser type, device information, referring page, and pages visited. We may also receive information from scheduling, communications, or payment providers you choose to use in connection with our services.</p>
            </section>

            <section>
              <h2>How we use information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>Respond to questions and provide quotes;</li>
                <li>Schedule, deliver, and support cleaning services;</li>
                <li>Send service-related confirmations, reminders, and updates;</li>
                <li>Process and evaluate cleaner applications;</li>
                <li>Maintain the safety, reliability, and security of our website and services;</li>
                <li>Comply with legal obligations and resolve disputes; and</li>
                <li>Improve our customer experience and business operations.</li>
              </ul>
            </section>

            <section>
              <h2>How we share information</h2>
              <p>We do not sell or rent your personal information. We may share information with trusted service providers that help us operate our website and business, such as website hosting, scheduling, communications, payment processing, and professional advisers. These providers receive information only as needed to perform services for us.</p>
              <p>We may also disclose information when required by law, to protect the rights or safety of Solara, our customers, or others, or in connection with a merger, sale, or transfer of all or part of our business.</p>
            </section>

            <section>
              <h2>Cookies and website technology</h2>
              <p>Our website and its service providers may use cookies or similar technologies that are necessary for site functionality, security, and understanding website performance. You can adjust cookie controls through your browser. Disabling certain technologies may affect how parts of the website work.</p>
            </section>

            <section>
              <h2>Data retention and security</h2>
              <p>We keep personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining business records, handling applications, and meeting legal or financial obligations.</p>
              <p>We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No website, transmission, or storage system can be guaranteed to be completely secure.</p>
            </section>

            <section>
              <h2>Your choices</h2>
              <p>You may ask us to access, correct, or delete personal information we hold about you, subject to applicable law and legitimate recordkeeping needs. You may also opt out of promotional communications at any time. Service-related messages may still be sent when needed to complete or support a booking.</p>
            </section>

            <section>
              <h2>Children’s privacy</h2>
              <p>Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.</p>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p>We may update this policy as our practices or legal obligations change. The effective date at the top of this page shows when the latest version took effect.</p>
            </section>

            <section className="privacy-contact">
              <h2>Contact us</h2>
              <p>For privacy questions or requests, contact Solara Cleaning Services at <a href="mailto:hello@solaracleaningfl.com">hello@solaracleaningfl.com</a> or <a href="tel:+17275948636">(727) 594-8636</a>.</p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
