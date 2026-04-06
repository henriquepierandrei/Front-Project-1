import { motion } from 'framer-motion'

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      desc: 'Mapeamento completo do panorama operacional, identificando pontos cegos, gargalos de performance e oportunidades de automação.',
    },
    {
      num: '02',
      title: 'Arquitetura',
      desc: 'Desenho da solução com módulos sob medida, definindo fluxos de dados, integrações e camadas de observabilidade.',
    },
    {
      num: '03',
      title: 'Implementação',
      desc: 'Deploy progressivo com monitoramento contínuo, validação de métricas e ajuste fino de thresholds e alertas.',
    },
    {
      num: '04',
      title: 'Operação Contínua',
      desc: 'Suporte dedicado, otimização contínua de modelos, expansão progressiva de cobertura e evolução da plataforma.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-[#242424]" id="processo">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
        >
          Metodologia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-10 sm:mb-16"
        >
          Do diagnóstico à operação
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              className={`group ${i % 2 === 0 ? 'md:border-r' : ''} ${i < steps.length - 1 ? 'border-b' : ''} border-[#242424] p-8 sm:p-10 hover:bg-[#111111] transition-all duration-500`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-[#1A1A1A] group-hover:text-[#2F5BFF]/10 transition-colors duration-500">
                {step.num}
              </span>
              <h3 className="text-lg font-light mt-3 sm:mt-4 mb-3">{step.title}</h3>
              <div className="w-8 h-[1px] bg-[#9A9A9A]/30 mb-4 group-hover:bg-[#2F5BFF]/30 transition-colors duration-500" />
              <p className="text-sm text-[#9A9A9A] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
