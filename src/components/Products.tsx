import products from '@assets/products.json'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

type Product = {
  id: string
  title: string
  price: number
  image: string
  description: string
  longDescription?: string
}

type ProductsProps = {
  onAdd: (product: Product) => void
}

export function Products({ onAdd }: ProductsProps) {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; title: string; price: number; description?: string; longDescription?: string } | null>(null)
  return (
    <section id="products" className="bg-linen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-3xl text-wood-900">{t('products.title')}</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(products as Product[]).map((p) => (
            <article key={p.id} className="rounded border border-wood-500/20 bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setLightbox({ src: p.image, alt: p.title, title: p.title, price: p.price, description: p.description, longDescription: p.longDescription })}
                className="block w-full focus:outline-none focus:ring-2 focus:ring-rust/60"
                aria-label={`${p.title} görselini büyüt`}
              >
                <img loading="lazy" src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              </button>
              <div className="p-4">
                <h3 className="text-wood-900 font-medium">{p.title}</h3>
                <p className="text-wood-500 text-sm mt-1">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-wood-900">₺{p.price.toFixed(2)}</span>
                  <button onClick={() => onAdd(p)} className="px-3 py-2 bg-rust text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rust/60">
                    {t('products.add_to_cart')}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <div className="bg-white rounded shadow max-w-5xl w-full grid md:grid-cols-2 gap-0" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 flex items-center justify-center bg-linen">
              <img src={lightbox.src} alt={lightbox.alt} className="max-h-[70vh] w-auto object-contain" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-wood-900">{lightbox.title}</h3>
              <p className="mt-3 text-wood-500 leading-relaxed">{lightbox.longDescription || lightbox.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-semibold text-wood-900">₺{lightbox.price.toFixed(2)}</span>
                <button onClick={() => { onAdd({ id: lightbox.title, title: lightbox.title, price: lightbox.price, image: lightbox.src, description: lightbox.description || '' }); setLightbox(null) }} className="px-4 py-2 bg-rust text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rust/60">
                  {t('products.add_to_cart')}
                </button>
              </div>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 px-3 py-1 rounded bg-white/90 text-wood-900 border border-wood-500/30 hover:bg-white"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            Kapat
          </button>
        </div>
      )}
    </section>
  )
}


