import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type CartItem = {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

type CartDrawerProps = {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onInc: (id: string) => void
  onDec: (id: string) => void
  onRemove: (id: string) => void
  onCheckout: () => void
}

export function CartDrawer({ isOpen, items, onClose, onInc, onDec, onRemove, onCheckout }: CartDrawerProps) {
  const { t } = useTranslation()
  const total = items.reduce((acc, it) => acc + it.price * it.quantity, 0)
  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-linen shadow-xl border-l border-wood-500/20 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Cart drawer"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-wood-500/20">
          <h3 className="font-display text-xl text-wood-900">{t('cart.title')}</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-wood-500/10" aria-label="Close cart">
            <X />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
          {items.length === 0 ? (
            <p className="text-wood-500">{t('cart.empty')}</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3">
                  <img src={it.image} alt={it.title} className="w-20 h-20 object-cover rounded" loading="lazy" />
                  <div className="flex-1">
                    <p className="text-wood-900 font-medium">{it.title}</p>
                    <p className="text-wood-500">₺{it.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="px-2 border rounded" onClick={() => onDec(it.id)} aria-label="Decrease">-</button>
                      <span className="min-w-6 text-center">{it.quantity}</span>
                      <button className="px-2 border rounded" onClick={() => onInc(it.id)} aria-label="Increase">+</button>
                      <button className="ml-auto text-rust" onClick={() => onRemove(it.id)} aria-label="Remove">Kaldır</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="h-16 border-t border-wood-500/20 px-4 flex items-center justify-between">
          <span className="font-semibold text-wood-900">{t('cart.total')}: ₺{total.toFixed(2)}</span>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="px-4 py-2 bg-rust text-white rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('cart.checkout')}
          </button>
        </div>
      </aside>
    </div>
  )
}


