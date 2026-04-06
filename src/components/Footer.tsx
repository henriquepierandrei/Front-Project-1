import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-[#242424] relative overflow-hidden">
      {/* Giant watermark text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[12rem] lg:text-[20rem] font-bold tracking-tight text-[#F5F5F5]/[0.015] leading-none whitespace-nowrap block -ml-4">
          SQUARE.
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            <a href="#" className="text-lg font-medium tracking-tight">
              SQUARE<span className="text-[#2F5BFF]">.</span>
            </a>
            <p className="text-xs text-[#9A9A9A] mt-3 leading-relaxed max-w-[240px]">
              Plataforma de inteligência operacional para infraestruturas modernas.
            </p>
          </div>

          {/* Links Columns */}
          {[
            {
              title: 'Produto',
              links: ['Plataforma', 'Módulos', 'Pricing', 'Integrações', 'Changelog'],
            },
            {
              title: 'Recursos',
              links: ['Documentação', 'API Reference', 'Blog', 'Guides', 'Comunidade'],
            },
            {
              title: 'Empresa',
              links: ['Sobre', 'Carreiras', 'Contato', 'Parceiros', 'Imprensa'],
            },
            {
              title: 'Legal',
              links: ['Privacidade', 'Termos', 'Segurança', 'Cookies', 'Licenças'],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-4 font-medium">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#242424] gap-4">
          <p className="text-[10px] text-[#9A9A9A]/60">
            © 2026 SQUARE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['LinkedIn', 'GitHub', 'Twitter', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
