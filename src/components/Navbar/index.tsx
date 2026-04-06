import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Arquitetura', href: '#arquitetura' },
    { label: 'Processo', href: '#processo' },
    { label: 'Insights', href: '#insights' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#242424]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <a href="#" className="text-lg font-medium tracking-tight text-[#F5F5F5]">
              SQUARE<span className="text-[#2F5BFF]">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-xs uppercase tracking-[0.15em] text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.12em] border border-[#242424] rounded-lg text-[#F5F5F5] hover:border-[#2F5BFF]/40 hover:bg-[#2F5BFF]/5 transition-all duration-300"
              >
                Contato
              </a>
            </div>

            {/* Mobile Toggle - Simple SVG icon */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 p-1"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen ? (
                /* X icon */
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h10M4 17h13" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 sm:top-[72px] lg:top-20 left-0 right-0 z-30 md:hidden bg-[#0A0A0A] border-b border-[#242424] overflow-hidden"
          >
            <div className="px-5 py-6">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileOpen(false)
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="block py-3 text-base font-light text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors border-l border-transparent hover:border-[#2F5BFF]/40 pl-4"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 pt-6 border-t border-[#242424]"
              >
                <a
                  href="#contato"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3.5 text-xs uppercase tracking-[0.15em] bg-[#2F5BFF] rounded-lg text-white font-medium"
                >
                  Solicitar demonstração
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
