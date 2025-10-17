import { useTranslation } from 'react-i18next'
import { ShoppingCart } from 'lucide-react'

type HeaderProps = {
  onOpenCart: () => void
}

export function Header({ onOpenCart }: HeaderProps) {
  const { t, i18n } = useTranslation()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-linen/90 backdrop-blur border-b border-wood-500/20">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl text-wood-900">aft</a>

        <nav className="hidden md:flex gap-6" aria-label="Main">
          <a href="#products" className="text-wood-900 hover:text-rust transition-colors">{t('nav.products')}</a>
          <a href="#about" className="text-wood-900 hover:text-rust transition-colors">{t('nav.about')}</a>
          <a href="#contact" className="text-wood-900 hover:text-rust transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            className="px-3 py-1 rounded border border-wood-500/30 text-wood-900 hover:bg-wood-500/10 focus:outline-none focus:ring-2 focus:ring-rust"
            aria-label="Toggle language"
          >
            {i18n.language.toUpperCase()}
          </button>
          <button
            onClick={onOpenCart}
            className="p-2 rounded border border-wood-500/30 text-wood-900 hover:bg-wood-500/10 focus:outline-none focus:ring-2 focus:ring-rust"
            aria-label="Open cart"
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
    </header>
  )
}



