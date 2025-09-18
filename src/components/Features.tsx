import React from 'react'

export const Features: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-lg font-semibold">Hızlı Teslimat</h3>
          <p className="text-sm text-gray-600 mt-2">1-3 iş günü içinde kargoda.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-lg font-semibold">Güvenli Ödeme</h3>
          <p className="text-sm text-gray-600 mt-2">256-bit SSL ile korunur.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-lg font-semibold">7/24 Destek</h3>
          <p className="text-sm text-gray-600 mt-2">Her zaman yanındayız.</p>
        </div>
      </div>
    </section>
  )
}

export default Features


