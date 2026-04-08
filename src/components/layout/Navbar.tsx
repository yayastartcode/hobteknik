import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Promo', href: '#promo' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Elektronik', href: '#elektronik' },
    { name: 'Harga', href: '#harga' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/hoblg.png" alt="HOB Teknik Logo" className="h-20 lg:h-24 w-auto relative z-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a href={`https://wa.me/${siteConfig.phone1.number}`} target="_blank" rel="noreferrer" className={cn(
              "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
              "bg-brand-600 text-white hover:bg-brand-700 h-10 py-2 px-6 shadow-lg shadow-brand-500/30"
            )}>
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <div className="lg:hidden flex items-center relative z-10">
            <button
              onClick={toggleMenu}
              className="p-2 -mr-2 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay / Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden shadow-black/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 pb-2 px-3">
                <a
                  href={`https://wa.me/${siteConfig.phone1.number}`}
                  onClick={closeMenu}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-95 bg-brand-600 text-white h-12 shadow-md shadow-brand-500/20"
                >
                  <span className="mdi mdi-whatsapp text-xl mr-2" />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
