import { ArrowRight, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const PROMO_DISMISSED_KEY = 'solara-first-clean-promo-dismissed'

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem(PROMO_DISMISSED_KEY)) return

    const timer = window.setTimeout(() => setIsVisible(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  function dismissPromo() {
    window.sessionStorage.setItem(PROMO_DISMISSED_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside className="promo-popup" aria-label="First cleaning offer" aria-live="polite">
      <button className="promo-close" type="button" aria-label="Dismiss offer" onClick={dismissPromo}>
        <X size={19} aria-hidden="true" />
      </button>
      <span className="promo-icon" aria-hidden="true"><Sparkles size={22} /></span>
      <div className="promo-copy">
        <p>New client special</p>
        <h2>Get <strong>$25 off</strong> your first clean</h2>
        <span>Let us make your first visit a little brighter.</span>
      </div>
      <a className="promo-link" href="/book-now" onClick={dismissPromo}>
        Claim offer <ArrowRight size={17} aria-hidden="true" />
      </a>
    </aside>
  )
}
