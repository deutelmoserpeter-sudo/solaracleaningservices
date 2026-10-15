type Submission = {
  form_name?: string
  data?: Record<string, unknown>
}

// Netlify invokes this event function after accepting a form submission.
export default async function submissionCreated(request: Request) {
  let payload: Submission
  try {
    const body = await request.json() as { payload?: Submission }
    if (!body.payload) return new Response('Invalid submission event', { status: 400 })
    payload = body.payload
  } catch {
    return new Response('Invalid submission event', { status: 400 })
  }

  if (payload.form_name !== 'promo-claim') return new Response(null, { status: 204 })

  const data = payload.data ?? {}
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const phone = typeof data.phone === 'string' ? data.phone.trim() : ''
  if (!name || !email || !phone) return new Response('Missing contact details', { status: 400 })

  const environment = (globalThis as typeof globalThis & {
    Netlify?: { env?: { get(name: string): string | undefined } }
  }).Netlify?.env
  const apiKey = environment?.get('RESEND_API_KEY')
  const from = environment?.get('PROMO_EMAIL_FROM')
  if (!apiKey || !from) {
    console.error('Coupon notification email delivery is not configured')
    return new Response('Email delivery is not configured', { status: 503 })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: ['hello@solaracleaningfl.com'],
        subject: 'New $25 first-clean coupon claim',
        text: `Someone claimed the $25 off first-clean offer.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCoupon: WELCOME25\n\nTheir contact details are also saved in Netlify Forms. This is a coupon claim, not a confirmed booking or abandoned cart.`,
      }),
    })
    if (!response.ok) {
      console.error('Coupon notification email provider rejected the request', response.status)
      return new Response('Email delivery failed', { status: 502 })
    }
    return new Response(null, { status: 204 })
  } catch {
    console.error('Coupon notification email provider could not be reached')
    return new Response('Email delivery failed', { status: 502 })
  }
}
