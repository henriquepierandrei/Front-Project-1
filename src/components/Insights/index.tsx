import { motion } from 'framer-motion'

export function Insights() {
  const articles = [
    {
      tag: 'Operações',
      title: 'Automação como pilar da operação moderna',
      desc: 'Como reduzir intervenção manual em 80% mantendo confiabilidade e rastreabilidade.',
    },
    {
      tag: 'Observabilidade',
      title: 'Além dos dashboards: observabilidade preditiva',
      desc: 'De reativo a preditivo — como ML está transformando a detecção de anomalias.',
    },
    {
      tag: 'Governança',
      title: 'Dados como ativo estratégico',
      desc: 'Framework de governança que transforma dados operacionais em vantagem competitiva.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-28 border-t border-[#242424]" id="insights">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
            >
              Conteúdo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-light tracking-tight"
            >
              Insights
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="text-[10px] uppercase tracking-[0.15em] text-[#2F5BFF] hover:text-[#264AEF] transition-colors flex-shrink-0 hidden sm:block"
          >
            Ver todos —
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-6 group hover:border-[#2F5BFF]/20 transition-all duration-300 cursor-pointer"
            >
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#2F5BFF]/70 mb-4 block">
                {article.tag}
              </span>
              <h3 className="text-sm sm:text-base font-light leading-snug mb-3 group-hover:text-[#2F5BFF]/80 transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">{article.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
