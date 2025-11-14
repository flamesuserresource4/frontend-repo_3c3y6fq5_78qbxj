import { Menu, Camera, Instagram, Youtube, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
              <Camera className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">ThumbForge</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-white/90 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              Get a Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-white/90 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-white/80 hover:text-white"><Youtube className="h-5 w-5" /></a>
              <a href="#contact" aria-label="Email" className="text-white/80 hover:text-white"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
