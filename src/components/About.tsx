import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="bg-linen">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-3xl text-wood-900">{t('about.title')}</h2>
          <p className="mt-4 text-wood-500">{t('about.content')}</p>
        </div>
        <img loading="lazy" src="/images/ChatGPT Image 9 Eyl 2025 18_35_50.png" alt="Workshop" className="rounded shadow" />
      </div>
    </section>
  )
}


