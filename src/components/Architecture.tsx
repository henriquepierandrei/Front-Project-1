import { motion } from 'framer-motion'

export function Architecture() {
  const modules = [
    { name: 'Observability', desc: 'Monitoramento distribuído com métricas, traces e logs unificados em tempo real.' },
    { name: 'Data Pipeline', desc: 'Ingestão, transformação e roteamento de dados com baixa latência e alta throughput.' },
    { name: 'Control Center', desc: 'Painel de controle unificado para gestão de infraestrutura e operações.' },
    { name: 'Alert Engine', desc: 'Motor de alertas inteligente com detecção de anomalias e roteamento contextual.' },
    { name: 'Analytics', desc: 'Análise avançada com correlação automática, dashboards e exportação.' },
    { name: 'Decision Support', desc: 'Motor de recomendação baseado em machine learning para decisões operacionais.' },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28" id="arquitetura">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
        >
          Fundamentos
        </motion.p>

        {/* Editorial Split */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 mb-14 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight"
          >
            System Architecture &
            <br />
            <span className="text-[#9A9A9A]">Core Modules</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#9A9A9A] leading-relaxed lg:mt-5"
          >
            Uma arquitetura modular projetada para escalar com complexidade. Cada módulo opera
            de forma independente e se integra ao ecossistema através de interfaces padronizadas,
            garantindo resiliência, observabilidade e controle granular.
          </motion.p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
              className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-6 group hover:border-[#2F5BFF]/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#2F5BFF]/40" />
                <h3 className="text-sm font-medium tracking-tight">{mod.name}</h3>
              </div>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">{mod.desc}</p>
              <div className="mt-5 pt-4 border-t border-[#242424] flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#9A9A9A]">módulo</span>
                <svg
                  className="w-4 h-4 text-[#9A9A9A] group-hover:text-[#2F5BFF] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
