import { motion } from 'framer-motion'

export function StatsCredibility() {
  const stats = [
    { value: '500+', label: 'Empresas atendidas' },
    { value: '99.9%', label: 'Uptime garantido' },
    { value: '24/7', label: 'Monitoramento contínuo' },
    { value: '12', label: 'Países' },
  ]

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] text-center mb-16"
        >
          Confiança em escala
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-[#F5F5F5] group-hover:text-[#F5F5F5]/90 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#9A9A9A]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
