import { useState } from 'react'
import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { Features } from '@components/Features'
import { Products } from '@components/Products'
import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { CartDrawer } from '@components/CartDrawer'

type CartItem = {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      void 0
      return []
    }
  })

  const persist = (next: CartItem[]) => {
    setItems(next)
    try { localStorage.setItem('cart', JSON.stringify(next)) } catch { void 0 }
  }

  const handleAdd = (p: { id: string; title: string; price: number; image: string }) => {
    const exists = items.find((it) => it.id === p.id)
    if (exists) {
      persist(items.map((it) => it.id === p.id ? { ...it, quantity: it.quantity + 1 } : it))
    } else {
      persist([...items, { ...p, quantity: 1 }])
    }
    setCartOpen(true)
  }

  const inc = (id: string) => persist(items.map((it) => it.id === id ? { ...it, quantity: it.quantity + 1 } : it))
  const dec = (id: string) => persist(items.flatMap((it) => it.id === id ? (it.quantity > 1 ? [{ ...it, quantity: it.quantity - 1 }] : []) : [it]))
  const remove = (id: string) => persist(items.filter((it) => it.id !== id))

  return (
    <div className="min-h-screen bg-linen">
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Products onAdd={handleAdd} />
        <About />
        <Contact />
      </main>
      <CartDrawer isOpen={cartOpen} items={items} onClose={() => setCartOpen(false)} onInc={inc} onDec={dec} onRemove={remove} />
    </div>
  )
}

export default App
