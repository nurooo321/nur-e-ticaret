import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<SubmitState>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(data.error || 'Request failed')
      }
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError((err as Error).message)
    }
  }

  return (
    <section id="contact" className="bg-linen py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl text-wood-900">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
          <label className="grid gap-2">
            <span className="text-wood-900">{t('contact.name')}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-3 py-2 rounded border border-wood-500/30 bg-white text-wood-900 focus:outline-none focus:ring-2 focus:ring-rust/60"
              type="text"
              name="name"
              autoComplete="name"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-wood-900">{t('contact.email')}</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 rounded border border-wood-500/30 bg-white text-wood-900 focus:outline-none focus:ring-2 focus:ring-rust/60"
              type="email"
              name="email"
              autoComplete="email"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-wood-900">{t('contact.message')}</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="px-3 py-2 rounded border border-wood-500/30 bg-white text-wood-900 focus:outline-none focus:ring-2 focus:ring-rust/60 min-h-[140px]"
              name="message"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center px-6 py-3 bg-rust text-white rounded hover:opacity-90 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-rust/60"
          >
            {status === 'loading' ? '...' : t('contact.send')}
          </button>
          {status === 'success' && (
            <p className="text-green-700">Mesajınız gönderildi. Teşekkürler!</p>
          )}
          {status === 'error' && (
            <p className="text-red-700">Gönderim başarısız: {error}</p>
          )}
        </form>
      </div>
    </section>
  )
}


