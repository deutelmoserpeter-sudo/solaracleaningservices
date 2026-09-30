type ClaimPayload = {
  name?: unknown
  email?: unknown
  phone?: unknown
}

declare const Netlify: {
  env: { get(name: string): string | undefined }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function claimOffer(request: Request) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  let payload: ClaimPayload
  try {
    payload = await request.json() as ClaimPayload
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : ''
  if (!name || !emailPattern.test(email) || !phone || name.length > 100 || email.length > 254 || phone.length > 30) {
    return Response.json({ error: 'Please provide valid contact details' }, { status: 400 })
  }

  const apiKey = Netlify.env.get('RESEND_API_KEY')
  const fromAddress = Netlify.env.get('PROMO_EMAIL_FROM')
  if (!apiKey || !fromAddress) {
    console.error('Coupon email delivery is not configured')
    return Response.json({ error: 'Email delivery is unavailable' }, { status: 503 })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: fromAddress,
      to: [email],
      subject: 'Your $25 Solara welcome offer',
      html: `<div style="background:#fffaf0;padding:32px;font-family:Arial,sans-serif;color:#20231f"><div style="max-width:560px;margin:auto;background:#fff;border:2px solid #20231f;padding:32px"><p style="font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#306c52">Solara Cleaning Services</p><h1 style="font-size:34px;line-height:1.1;margin:12px 0">A brighter home starts here.</h1><p>Hi ${escapeHtml(name)},</p><p>Thanks for claiming our new-client special. Use the coupon code below to take $25 off your first cleaning:</p><p style="margin:28px 0;padding:18px;border:2px dashed #20231f;background:#f8d817;text-align:center;font-size:28px;font-weight:800;letter-spacing:.08em">WELCOME25</p><p>Ready when you are. Book your clean and enter the code when confirming your service.</p><p style="margin-top:28px">The Solara Cleaning Services team</p></div></div>`,
      text: `Hi ${name},\n\nThanks for claiming our new-client special. Use coupon code WELCOME25 to take $25 off your first cleaning.\n\nThe Solara Cleaning Services team`,
    }),
  })

  if (!response.ok) {
    console.error('Coupon email provider rejected the request', response.status)
    return Response.json({ error: 'Unable to send coupon' }, { status: 502 })
  }

  return Response.json({ sent: true })
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character] ?? character)
}

export const config = {
  path: '/api/claim-offer',
  method: 'POST',
}
