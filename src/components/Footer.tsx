export function Footer() {
  return (
    <footer className="bg-linen border-t border-wood-500/20">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-wood-500 text-sm">
        <span>© {new Date().getFullYear()} aft</span>
        <a href="#hero" className="hover:text-rust">Yukarı Çık</a>
      </div>
    </footer>
  )
}



