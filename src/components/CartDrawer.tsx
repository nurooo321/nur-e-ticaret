import React from 'react'

type CartItem = {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

type Props = {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onInc: (id: string) => void
  onDec: (id: string) => void
  onRemove: (id: string) => void
}

export const CartDrawer: React.FC<Props> = ({ isOpen, items, onClose, onInc, onDec, onRemove }) => {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  return (
    <div className={`fixed inset-0 z-50 transition ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-black/40 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Sepet</h3>
          <button onClick={onClose} className="px-2 py-1 rounded hover:bg-gray-100">Kapat</button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
          {items.length === 0 && <p className="text-gray-600">Sepetiniz boş.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 items-center">
              <img src={it.image} alt={it.title} className="w-16 h-16 rounded object-cover" />
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-gray-600">₺{(it.price * it.quantity).toFixed(2)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => onDec(it.id)} className="px-2 py-1 border rounded">-</button>
                  <span className="min-w-6 text-center">{it.quantity}</span>
                  <button onClick={() => onInc(it.id)} className="px-2 py-1 border rounded">+</button>
                  <button onClick={() => onRemove(it.id)} className="ml-4 text-red-600 hover:underline">Kaldır</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex items-center justify-between">
          <span className="font-semibold">Toplam</span>
          <span className="text-lg font-bold">₺{total.toFixed(2)}</span>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer


