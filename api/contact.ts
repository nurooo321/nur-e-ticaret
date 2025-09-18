import { Resend } from 'resend'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message } = req.body ?? {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'Email service is not configured' })
    }

    const resend = new Resend(apiKey)
    const from = process.env.CONTACT_FROM || 'WoodCraft <onboarding@resend.dev>'
    const to = process.env.CONTACT_TO || 'example@example.com'

    const subject = `Yeni iletişim mesajı: ${name}`
    const text = `Ad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text,
      reply_to: email,
    })

    if (result.error) {
      return res.status(502).json({ error: result.error.message || 'Email send failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal Server Error' })
  }
}



