import { ArrowRight, Check, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const PROMO_DISMISSED_KEY = 'solara-first-clean-promo-dismissed-v2'

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [couponEmailed, setCouponEmailed] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem(PROMO_DISMISSED_KEY)) return

    const timer = window.setTimeout(() => setIsVisible(true), 6_000)
    return () => window.clearTimeout(timer)
  }, [])

  function dismissPromo() {
    window.sessionStorage.setItem(PROMO_DISMISSED_KEY, 'true')
    setIsVisible(false)
  }

  async function claimOffer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const formData = new FormData(form)
    const encodedBody = new URLSearchParams()
    formData.forEach((value, key) => encodedBody.append(key, String(value)))

    try {
      const formResponse = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedBody.toString(),
      })
      if (!formResponse.ok) throw new Error('Unable to save claim')

      const emailResponse = await fetch('/api/claim-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
        }),
      })
      if (!emailResponse.ok) throw new Error('Unable to send coupon')
      const emailResult = await emailResponse.json() as { sent?: boolean }

      form.reset()
      window.sessionStorage.setItem(PROMO_DISMISSED_KEY, 'true')
      setCouponEmailed(emailResult.sent === true)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!isVisible) return null

  return (
    <aside className="promo-popup" aria-label="First cleaning offer" aria-live="polite">
      <button className="promo-close" type="button" aria-label="Dismiss offer" onClick={dismissPromo}>
        <X size={19} aria-hidden="true" />
      </button>
      {status === 'success' ? (
        <div className="promo-success" role="status">
          <span className="promo-icon" aria-hidden="true"><Check size={22} /></span>
          <div className="promo-copy">
            <p>Offer claimed</p>
            <h2>{couponEmailed ? <>Check your <strong>inbox</strong></> : <>Your code is <strong>Welcome25</strong></>}</h2>
            <span>{couponEmailed ? 'Your coupon is on its way. We can’t wait to brighten your home.' : 'Use WELCOME25 when booking to save $25 on your first clean.'}</span>
          </div>
          <a className="promo-link" href="/book-now">Book your clean <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      ) : !isClaiming ? (
        <>
          <span className="promo-icon" aria-hidden="true"><Sparkles size={22} /></span>
          <div className="promo-copy">
            <p>New client special</p>
            <h2>Get <strong>$25 off</strong> your first clean</h2>
            <span>Let us make your first visit a little brighter.</span>
          </div>
          <button className="promo-link" type="button" onClick={() => setIsClaiming(true)}>
            Claim offer <ArrowRight size={17} aria-hidden="true" />
          </button>
        </>
      ) : (
        <form className="promo-form" name="promo-claim" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={claimOffer}>
          <input type="hidden" name="form-name" value="promo-claim" />
          <p className="form-honeypot"><label>Don’t fill this out: <input name="bot-field" /></label></p>
          <div className="promo-copy"><p>Claim your offer</p><h2>Where should we send it?</h2><span>Enter your details and we’ll email your Welcome25 coupon.</span></div>
          <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
          {status === 'error' && <p className="promo-error" role="alert">We couldn’t send your coupon just now. Please check your details and try again.</p>}
          <button className="promo-link" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Email my coupon'} <ArrowRight size={17} aria-hidden="true" />
          </button>
        </form>
      )}
    </aside>
  )
}
