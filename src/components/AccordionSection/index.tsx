import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      title: 'Governança de Dados',
      content: 'Framework completo de governança aplicado em toda a cadeia de dados. Definição de políticas, catálogo automatizado, linhagem de dados e controle de acesso granular, garantindo conformidade com regulamentações e padronização organizacional.',
      metric: '100% conformidade LGPD',
    },
    {
      title: 'Integração Operacional',
      content: 'Conectores nativos para as principais plataformas de infraestrutura, aplicações e serviços. APIs REST, GraphQL e streaming para ingestão contínua de eventos. Orquestração automatizada com fallback inteligente e retry adaptativo.',
      metric: '200+ conectores',
    },
    {
      title: 'Inteligência de Decisão',
      content: 'Motores de inferência e correlação automática que transformam dados operacionais em insights acionáveis. Modelos de machine learning treinados continuamente com dados do contexto específico de cada operação.',
      metric: '94% precisão preditiva',
    },
    {
      title: 'Segurança e Conformidade',
      content: 'Camada de segurança com criptografia end-to-end, gestão de certificados, análise de vulnerabilidades e auditoria automatizada. SOC 2 Type II e ISO 27001 como baseline, com relatórios de conformidade em tempo real.',
      metric: 'Zero incidentes em 365 dias',
    },
    {
      title: 'Escalabilidade',
      content: 'Arquitetura horizontal com auto-scaling inteligente baseado em demanda real. Capacidade de lidar com picos de tráfego sem degradação de performance, com provisionamento sob demanda em múltiplas clouds.',
      metric: '10x scale-up em < 60s',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28" id="capacidades">
      <div className="px-5 sm:px-8 lg:px-8 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
        >
          Capacidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-10 sm:mb-14"
        >
          Framework de capacidades
        </motion.h2>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={item.title} className="border-b border-[#242424]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 sm:py-6 group text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-[8px] text-[#9A9A9A] font-mono w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm sm:text-base font-light group-hover:text-[#F5F5F5] transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                  <span className="text-[9px] text-[#2F5BFF] hidden sm:block">
                    {openIndex === i ? item.metric : ''}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#9A9A9A] transition-transform duration-300 ${
                      openIndex === i ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-10 pr-4">
                      <p className="text-sm text-[#9A9A9A] leading-relaxed">{item.content}</p>
                      <p className="text-xs text-[#2F5BFF] mt-3 sm:hidden">{item.metric}</p>
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
