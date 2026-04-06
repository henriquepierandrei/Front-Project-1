import { motion } from 'framer-motion'

export function Gallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-y border-[#242424] bg-[#111111]/50">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Gallery Cards - Abstract grayscale patterns */}
          {[
            {
              label: 'Estrutura',
              desc: 'Arquitetura distribuída em multi-region com failover automático.',
              pattern: 'grid',
            },
            {
              label: 'Fluxo',
              desc: 'Pipeline de dados unificado processando milhões de eventos por segundo.',
              pattern: 'waves',
            },
            {
              label: 'Precisão',
              desc: 'Modelos de ML com 94% de acurácia na detecção de anomalias.',
              pattern: 'dots',
            },
            {
              label: 'Escala',
              desc: 'De 10 a 10.000 nós, a mesma camada de observabilidade.',
              pattern: 'lines',
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-[#1A1A1A] border border-[#242424] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Abstract visual pattern */}
              <div className="h-44 lg:h-56 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]">
                  {card.pattern === 'grid' && (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'linear-gradient(#9A9A9A 1px, transparent 1px), linear-gradient(90deg, #9A9A9A 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                      }}
                    />
                  )}
                  {card.pattern === 'waves' && (
                    <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                      {[40, 60, 80, 100, 120, 140].map((y, j) => (
                        <line key={j} x1="0" y1={y} x2="200" y2={y} stroke="#9A9A9A" strokeWidth="0.5" />
                      ))}
                    </svg>
                  )}
                  {card.pattern === 'dots' && (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #9A9A9A 0.5px, transparent 0.5px)',
                        backgroundSize: '12px 12px'
                      }}
                    />
                  )}
                  {card.pattern === 'lines' && (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #9A9A9A 0px, #9A9A9A 1px, transparent 1px, transparent 20px)'
                      }}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/50" />
              </div>

              {/* Text overlay */}
              <div className="p-5 -mt-8 relative">
                <h3 className="text-sm font-medium mb-1">{card.label}</h3>
                <p className="text-[11px] text-[#9A9A9A] leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
