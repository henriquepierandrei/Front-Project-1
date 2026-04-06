import { motion } from 'framer-motion'

export function Manifesto() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight tracking-tight leading-[1.15] mb-8">
            Operações,
            <br />
            <span className="text-[#9A9A9A]">não apenas observabilidade.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9A9A9A] max-w-xl mx-auto leading-relaxed">
            Monitorar é o ponto de partida. Nossa visão é transformar dados operacionais
            em decisões que escalam com o negócio, gerando impacto real na performance e confiabilidade.
          </p>
          <div className="w-12 h-[1px] bg-[#2F5BFF]/30 mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  )
}
