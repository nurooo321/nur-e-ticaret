# Ahşap Ürünler E-Ticaret Sitesi

React, Vite ve Tailwind CSS ile geliştirilmiş ahşap ürünler e-ticaret sitesi.

## Özellikler

- 🛍️ Ürün kataloğu ve sepet yönetimi
- 🌍 Türkçe/İngilizce dil desteği
- 📱 Responsive tasarım
- 🎨 Modern ve sıcak renk paleti
- ⚡ Hızlı yükleme ve performans
- 🖼️ Ürün görselleri için lightbox modal

## Teknolojiler

- React 18
- Vite
- TypeScript
- Tailwind CSS
- i18next (çoklu dil desteği)
- Lucide React (ikonlar)

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

### Netlify
1. GitHub'a push yapın
2. Netlify'da yeni site oluşturun
3. Repository'yi bağlayın
4. Build settings: `npm run build`, Publish directory: `dist`

### Vercel
1. GitHub'a push yapın
2. Vercel'de yeni proje oluşturun
3. Repository'yi bağlayın
4. Framework: Vite seçin

## Proje Yapısı

```
src/
├── components/     # React bileşenleri
├── assets/         # Statik veriler (ürünler JSON)
├── hooks/          # Custom React hooks
├── i18n/           # Dil dosyaları
└── styles/         # CSS dosyaları
```

## Ürün Verileri

Ürün bilgileri `src/assets/products.json` dosyasında tutulmaktadır. Yeni ürün eklemek için bu dosyayı düzenleyin.

## Görseller

Ürün görselleri `public/images/` klasöründe bulunmaktadır.