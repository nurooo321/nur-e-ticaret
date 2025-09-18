import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()
  return (
    <section id="hero" className="pt-20 bg-linen">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-wood-900">{t('hero.title')}</h1>
          <p className="mt-4 text-wood-500 text-lg">{t('hero.subtitle')}</p>
          <a href="#products" className="inline-block mt-8 px-6 py-3 bg-rust text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rust/60">{t('nav.products')}</a>
        </div>
        <div>
          <img loading="lazy" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop" alt="Wood crafts" className="rounded shadow-md" />
        </div>
      </div>
    </section>
  )
}



