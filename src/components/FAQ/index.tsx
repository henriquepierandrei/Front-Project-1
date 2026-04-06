import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [search, setSearch] = useState('')

  const items = [
    {
      q: 'Qual o tempo médio de implementação?',
      a: 'O tempo varia conforme a complexidade da infraestrutura. Para ambientes de médio porte, o deploy inicial leva entre 2 a 4 semanas. Ambientes enterprise podem requerer de 6 a 12 semanas, incluindo fases de validação e migração progressiva.',
    },
    {
      q: 'A plataforma funciona com infraestrutura on-premise?',
      a: 'Sim. A SQUARE suporta ambientes híbridos, on-premise e multi-cloud com a mesma camada de observabilidade. Os módulos podem ser implantados em Kubernetes, VMs ou bare metal, com conectores nativos para AWS, GCP e Azure.',
    },
    {
      q: 'Como funciona o modelo de pricing?',
      a: 'O modelo é baseado em volume de eventos e número de nós monitorados, com tiers predefinidos para diferentes escalas. Não há cobrança por usuário. Oferecemos planos enterprise com SLAs customizados e suporte dedicado.',
    },
    {
      q: 'Há limite de dados armazenados?',
      a: 'O storage é configurável conforme o plano. Oferecemos retenção padrão de 30 dias para métricas de alta resolução e 13 meses para dados agregados. Retenção extendida está disponível como add-on.',
    },
    {
      q: 'Qual o nível de suporte oferecido?',
      a: 'Todos os planos incluem suporte técnico durante o horário comercial. Planos enterprise incluem suporte 24/7 com engenheiro dedicado, SLA de resposta em 15 minutos para incidentes críticos e revisões trimestrais de arquitetura.',
    },
    {
      q: 'A plataforma é compatível com regulamentos de dados?',
      a: 'A SQUARE é nativamente compatível com LGPD, GDPR, SOC 2 Type II e ISO 27001. Relatórios de conformidade são gerados automaticamente, e oferecemos ferramentas de auditoria e controle de acesso granular.',
    },
  ]

  const filtered = items.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#111111]/50" id="perguntas">
      <div className="px-5 sm:px-8 lg:px-8 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
        >
          Perguntas Frequentes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-10"
        >
          Dúvidas estratégicas
        </motion.h2>

        {/* Search */}
        <div className="relative mb-10">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9A9A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar perguntas..."
            className="w-full bg-[#1A1A1A] border border-[#242424] rounded-lg pl-11 pr-4 py-3.5 text-sm text-[#F5F5F5] placeholder-[#9A9A9A]/50 focus:outline-none focus:border-[#2F5BFF]/30 transition-colors"
          />
        </div>

        <div className="space-y-0">
          {filtered.map((item, i) => (
            <div key={i} className="border-b border-[#242424]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 group text-left"
              >
                <span className="text-sm sm:text-base font-light text-left flex-1 pr-4">{item.q}</span>
                <svg
                  className={`w-4 h-4 text-[#9A9A9A] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-sm text-[#9A9A9A] leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
