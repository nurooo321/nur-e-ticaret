import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X, CreditCard } from 'lucide-react'

type PaymentModalProps = {
  isOpen: boolean
  onClose: () => void
  total: number
  onPaymentSuccess: () => void
}

export function PaymentModal({ isOpen, onClose, total, onPaymentSuccess }: PaymentModalProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      // Format card number with spaces
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19)
    } else if (name === 'expiryDate') {
      // Format expiry date as MM/YY
      formattedValue = value.replace(/\D/g, '')
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4)
      }
    } else if (name === 'cvv') {
      // Limit CVV to 3 digits
      formattedValue = value.replace(/\D/g, '').slice(0, 3)
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    setTimeout(() => {
      onPaymentSuccess()
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-wood-900" />
            <h2 className="font-display text-xl text-wood-900">{t('payment.title')}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
            aria-label="Close payment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-linen rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-wood-900 font-medium">{t('payment.total')}</span>
              <span className="text-xl font-semibold text-wood-900">₺{total.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-wood-900 mb-1">
                {t('payment.cardholder_name')}
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder={t('payment.cardholder_placeholder')}
                className="w-full px-3 py-2 border border-wood-500/30 rounded focus:outline-none focus:ring-2 focus:ring-rust/60 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-wood-900 mb-1">
                {t('payment.card_number')}
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-wood-500/30 rounded focus:outline-none focus:ring-2 focus:ring-rust/60 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-wood-900 mb-1">
                  {t('payment.expiry_date')}
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-wood-500/30 rounded focus:outline-none focus:ring-2 focus:ring-rust/60 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-wood-900 mb-1">
                  {t('payment.cvv')}
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-wood-500/30 rounded focus:outline-none focus:ring-2 focus:ring-rust/60 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-rust text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rust/60 transition-colors"
              >
                {t('payment.pay_now')}
              </button>
            </div>
          </form>

          <div className="mt-4 text-xs text-gray-500 text-center">
            {t('payment.security_note')}
          </div>
        </div>
      </div>
    </div>
  )
}
