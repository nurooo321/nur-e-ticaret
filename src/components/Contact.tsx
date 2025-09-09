import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = `mailto:hello@example.com?subject=İletişim&body=${encodeURIComponent(`${name} - ${email}\n\n${message}`)}`
  const wa = `https://wa.me/905335013973?text=${encodeURIComponent(message || 'Merhabalar bilgi alabilir miyim?')}`
  const ig = `https://instagram.com/nurefsankrtl`

  return (
    <section id="contact" className="bg-linen">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-3xl text-wood-900">{t('contact.title')}</h2>
          <form className="mt-6 grid grid-cols-1 gap-4" action={mailto}>
            <label className="block">
              <span className="text-wood-900">{t('contact.name')}</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border border-wood-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rust" required />
            </label>
            <label className="block">
              <span className="text-wood-900">{t('contact.email')}</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border border-wood-500/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rust" required />
            </label>
            <label className="block">
              <span className="text-wood-900">{t('contact.message')}</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full border border-wood-500/30 rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-rust" required />
            </label>
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-rust text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rust">{t('contact.send')}</button>
              <a href={wa} target="_blank" className="px-4 py-2 border border-wood-500/30 rounded text-wood-900 hover:bg-wood-500/10">WhatsApp</a>
              <a href={ig} target="_blank" className="px-4 py-2 border border-wood-500/30 rounded text-wood-900 hover:bg-wood-500/10">Instagram</a>
            </div>
          </form>
        </div>
        <div className="rounded border border-wood-500/20 bg-white/70 p-6">
          <p className="text-wood-900">Adres ve çalışma saatleri için bize yazın.</p>
        </div>
      </div>
    </section>
  )
}


