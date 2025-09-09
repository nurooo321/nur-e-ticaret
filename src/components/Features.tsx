import { useTranslation } from 'react-i18next'

export function Features() {
  const { t } = useTranslation()
  const items = [
    { title: t('features.quality') },
    { title: t('features.handmade') },
    { title: t('features.sustainable') },
  ]
  return (
    <section className="bg-linen">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <div key={i} className="feature-card p-6 rounded border border-wood-500/20 bg-white/70 transition-colors duration-300">
            <p className="font-medium">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


