import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(36,36,36,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(36,36,36,0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Left - Text */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-6"
            >
              Plataforma de inteligência operacional
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6"
            >
              Monitoramento e
              <br />
              <span className="font-medium">inteligência operacional</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9A9A9A] leading-relaxed mb-3"
            >
              Visibilidade total para operações, performance e decisão estratégica.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-[#9A9A9A]/70 leading-relaxed mb-10 max-w-md"
            >
              Observabilidade, controle e automação unificados para infraestruturas complexas.
              Operações em tempo real, do edge ao core.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contato"
                className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] bg-[#2F5BFF] rounded-lg text-white font-medium hover:bg-[#264AEF] transition-colors duration-300 text-center"
              >
                Solicitar demonstração
              </a>
              <a
                href="#arquitetura"
                className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] border border-[#242424] rounded-lg text-[#F5F5F5] hover:border-[#9A9A9A]/40 transition-all duration-300 text-center"
              >
                Ver arquitetura
              </a>
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 lg:mt-0 bg-[#111111] border border-[#242424] rounded-xl overflow-hidden w-full"
          >
            {/* Top indicators */}
            <div className="grid grid-cols-4 gap-1 px-5 pt-5">
              {[
                { label: 'Uptime', value: '99.98%' },
                { label: 'Latência', value: '23ms' },
                { label: 'Requisições', value: '1.2M' },
                { label: 'Eficiência', value: '97.3%' },
              ].map((item) => (
                <div key={item.label} className="pb-2">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A] mb-1.5 truncate">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[#F5F5F5]">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-5 border-t border-[#242424]" />

            {/* Bar Chart */}
            <div className="px-5 pt-4 pb-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A]">
                  Throughput
                </p>
                <span className="text-[9px] font-mono text-[#2F5BFF]/70">GB/h</span>
              </div>

              {/* Y-axis + Chart */}
              <div className="flex">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-28 pr-2 -mb-[18px]">
                  {['100', '75', '50', '25', '0'].map((v) => (
                    <span key={v} className="text-[6px] font-mono text-[#3A3A3A] leading-none">
                      {v}
                    </span>
                  ))}
                </div>

                {/* Grid + Bars */}
                <div className="flex-1 relative h-28">
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((v) => (
                    <div
                      key={v}
                      className="absolute left-0 right-0 border-b border-[#1A1A1A] border-dashed"
                      style={{ top: `${100 - v}%` }}
                    />
                  ))}

                  {/* Bars */}
                  <div className="absolute inset-0 flex items-end gap-[2px]">
                    {[45, 62, 38, 78, 56, 90, 70, 35, 82, 95, 48, 68].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center justify-end h-full"
                      >
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + i * 0.04,
                            ease: [0.25, 1, 0.5, 1],
                          }}
                          className="w-full origin-bottom rounded-[2px]"
                          style={{
                            height: `${val}%`,
                            background:
                              val > 80
                                ? 'linear-gradient(to top, #1E3A8A, #2F5BFF)'
                                : val > 50
                                  ? 'linear-gradient(to top, #1E3A8A, rgba(47,91,255,0.7))'
                                  : 'linear-gradient(to top, #15285A, rgba(47,91,255,0.45))',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex gap-[2px] mt-1.5">
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m) => (
                  <span key={m} className="flex-1 text-[7px] text-[#3A3A3A] text-center leading-none">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-5 border-t border-[#242424]" />

            {/* Service metrics */}
            <div className="px-5 py-4">
              {[
                { label: 'API Gateway', value: '14.2k', unit: 'req/s', pct: 85 },
                { label: 'Data Pipeline', value: '8.7M', unit: 'events', pct: 72 },
                { label: 'Alert Engine', value: '99.7%', unit: 'accuracy', pct: 98 },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: item.pct > 90 ? '#2F5BFF' : '#3a5ae0',
                      }}
                    />
                    <span className="text-xs text-[#9A9A9A] truncate">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-12 h-[2px] bg-[#1A1A1A] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="h-full rounded-full bg-[#2F5BFF]/50"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#F5F5F5]/60 tabular-nums w-[52px] text-right">
                      {item.value}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom bar */}
            <div className="bg-[#0A0A0A] px-5 py-2.5 flex items-center justify-between border-t border-[#242424]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF] animate-pulse shrink-0" />
                <span className="text-[9px] text-[#5A5A5A] uppercase tracking-wider">
                  Tempo real
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#4A4A4A] shrink-0">
                3s atrás
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
