import { motion } from 'framer-motion'
import { AreaChart, ProgressBar } from '../Charts'

export function MetricsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="plataforma">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
        >
          Performance em tempo real
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light tracking-tight mb-10 sm:mb-14"
        >
          Centro de comando
        </motion.h2>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { label: 'Uptime Garantido', value: '99.99%', delta: '+0.01%', data: [98, 99, 97, 99, 100, 99, 98] },
            { label: 'Latência Média', value: '23ms', delta: '-12%', data: [42, 38, 35, 30, 28, 25, 23] },
            { label: 'Eficiência Operacional', value: '97.3%', delta: '+2.8%', data: [88, 90, 91, 93, 95, 96, 97] },
            { label: 'Throughput Global', value: '2.4M', delta: '+18%', data: [1.2, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4] },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#111111] border border-[#242424] rounded-xl p-5 group hover:border-[#2F5BFF]/20 transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A] mb-3">
                {kpi.label}
              </p>
              <div className="flex items-end justify-between mb-3">
                <p className="text-3xl font-light tracking-tight">{kpi.value}</p>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    kpi.delta.startsWith('+')
                      ? 'text-[#2F5BFF] bg-[#2F5BFF]/10'
                      : 'text-[#D9A441] bg-[#D9A441]/10'
                  }`}
                >
                  {kpi.delta}
                </span>
              </div>
              {/* Mini sparkline */}
              <svg viewBox="0 0 90 24" className="w-full h-5">
                {(() => {
                  const w = 90, h = 24
                  const max = Math.max(...kpi.data)
                  const min = Math.min(...kpi.data)
                  const range = max - min || 1
                  const pts = kpi.data.map(
                    (v, j) => [(j / (kpi.data.length - 1)) * w, h - ((v - min) / range) * h] as [number, number]
                  )
                  const line = pts.map((p, j) => `${j === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
                  return (
                    <>
                      <path d={line} fill="none" stroke="#2F5BFF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
                      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="2" fill="#2F5BFF" />
                    </>
                  )
                })()}
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Area/Bar Chart - Traffic */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-6 lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A]">
                Tráfego por Serviço
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-0.5 bg-[#2F5BFF] rounded" />
                  <span className="text-[8px] text-[#5A5A5A]">Requisições</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-0.5 bg-[#D9A441] rounded opacity-60" />
                  <span className="text-[8px] text-[#5A5A5A]">Erros</span>
                </div>
              </div>
            </div>

            {/* Bar chart with axis labels and hover */}
            <div className="mt-5 mb-3">
              <div className="flex">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between pr-2 pt-0 pb-4">
                  {['100', '75', '50', '25', '0'].map((label) => (
                    <span key={label} className="text-[7px] font-mono text-[#3A3A3A] h-0 flex items-center">
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex-1">
                  {/* Grid lines */}
                  <div className="relative h-40">
                    {[0, 25, 50, 75, 100].map((v) => (
                      <div
                        key={v}
                        className="absolute left-0 right-0 border-b border-[#1A1A1A]/80 border-dashed"
                        style={{ top: `${100 - v}%` }}
                      />
                    ))}

                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end gap-[3px] px-1">
                      {[
                        { label: 'Auth', value: 78 },
                        { label: 'API', value: 92 },
                        { label: 'Data', value: 65 },
                        { label: 'Streams', value: 88 },
                        { label: 'Cache', value: 45 },
                        { label: 'Queue', value: 70 },
                        { label: 'Search', value: 55 },
                        { label: 'ML', value: 82 },
                      ].map((item, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1 group">
                          {/* Hover tooltip */}
                          <div
                            className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 z-10 pointer-events-none"
                          >
                            <div className="bg-[#1A1A1A] border border-[#242424] rounded px-2 py-1 text-[8px] font-mono text-[#F5F5F5]/80">
                              {item.value}%
                            </div>
                          </div>
                          <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                            className="w-full rounded-[2px] origin-bottom"
                            style={{
                              height: `${item.value}%`,
                              background:
                                item.value > 80
                                  ? 'linear-gradient(to top, #1E3A8A, #2F5BFF)'
                                  : item.value > 50
                                    ? 'linear-gradient(to top, #1E3A8A, rgba(47,91,255,0.7))'
                                    : 'linear-gradient(to top, #15285A, rgba(47,91,255,0.45))',
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex gap-[3px] px-1 mt-1">
                    {['Auth', 'API', 'Data', 'Stream', 'Cache', 'Queue', 'Search', 'ML'].map((label) => (
                      <span
                        key={label}
                        className="flex-1 text-[7px] text-[#3A3A3A] text-center truncate"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Bars - Resource capacity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-6 lg:col-span-2"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A] mb-6">
              Capacidade de Recurso
            </p>
            <div className="space-y-5">
              {[
                { label: 'CPU', value: 67, color: '#D9A441', unit: 'utilização' },
                { label: 'Memória', value: 82, color: '#2F5BFF', unit: 'alocada' },
                { label: 'Disco', value: 45, color: '#F59E0B', unit: 'utilizado' },
                { label: 'Rede', value: 58, color: '#2F5BFF', unit: 'throughput' },
                { label: 'GPU', value: 91, color: '#D9A441', unit: 'compute' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-[#9A9A9A]">{item.label}</span>
                    <span className="text-[10px] font-mono text-[#F5F5F5]/70 tabular-nums">
                      {item.value}%
                    </span>
                  </div>
                  <ProgressBar value={item.value} color={item.color} />
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[7px] text-[#3A3A3A]">{item.unit}</span>
                    <span className="text-[7px] text-[#3A3A3A]">
                      {item.value >= 80 ? '⚠ alto' : 'normal'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="bg-[#111111] border border-[#242424] rounded-xl overflow-hidden mt-3 sm:mt-4"
        >
          <div className="px-5 pt-4 pb-2">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A]">
              Status de Serviços
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[540px]">
              <thead>
                <tr className="border-y border-[#242424]">
                  <th className="text-left py-3 px-4 sm:px-5 text-[9px] uppercase tracking-[0.15em] text-[#3A3A3A] font-normal">
                    Serviço
                  </th>
                  <th className="text-left py-3 px-4 sm:px-5 text-[9px] uppercase tracking-[0.15em] text-[#3A3A3A] font-normal">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 sm:px-5 text-[9px] uppercase tracking-[0.15em] text-[#3A3A3A] font-normal">
                    P50
                  </th>
                  <th className="text-right py-3 px-4 sm:px-5 text-[9px] uppercase tracking-[0.15em] text-[#3A3A3A] font-normal">
                    P99
                  </th>
                  <th className="text-right py-3 px-4 sm:px-5 text-[9px] uppercase tracking-[0.15em] text-[#3A3A3A] font-normal">
                    Uptime
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'API Gateway', status: 'Operacional', p50: '12ms', p99: '89ms', uptime: '99.99%' },
                  { name: 'Data Pipeline', status: 'Operacional', p50: '34ms', p99: '142ms', uptime: '99.97%' },
                  { name: 'Alert Engine', status: 'Operacional', p50: '8ms', p99: '45ms', uptime: '100%' },
                  { name: 'ML Inference', status: 'Degradado', p50: '156ms', p99: '890ms', uptime: '99.45%' },
                  { name: 'Auth Service', status: 'Operacional', p50: '18ms', p99: '67ms', uptime: '99.99%' },
                  { name: 'Event Bus', status: 'Operacional', p50: '5ms', p99: '23ms', uptime: '99.99%' },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-[#242424]/50 last:border-0 hover:bg-[#1A1A1A]/50 transition-colors"
                  >
                    <td className="py-3 px-4 sm:px-5 text-[#F5F5F5] font-medium whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 sm:px-5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <span
                            className={`block w-1.5 h-1.5 rounded-full ${
                              row.status === 'Operacional' ? 'bg-[#2F5BFF]' : 'bg-[#D9A441]'
                            }`}
                          />
                          {row.status === 'Operacional' && (
                            <span className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#2F5BFF] animate-ping opacity-20" />
                          )}
                        </div>
                        <span className="text-[#9A9A9A]">{row.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-right font-mono text-[#F5F5F5]/60 whitespace-nowrap tabular-nums">
                      {row.p50}
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-right font-mono text-[#D9A441]/70 whitespace-nowrap tabular-nums">
                      {row.p99}
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-right font-mono text-[#F5F5F5]/60 whitespace-nowrap tabular-nums">
                      {row.uptime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div className="bg-[#0A0A0A] px-5 py-2.5 flex items-center justify-between border-t border-[#242424]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF]" />
              <span className="text-[9px] text-[#4A4A4A]">Todos os 247 serviços monitorados</span>
            </div>
            <span className="text-[9px] font-mono text-[#4A4A4A]">
              245 operacional · 2 alerta
            </span>
          </div>
        </motion.div>

        {/* Area Chart - Historical */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-6 mt-3 sm:mt-4"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A]">
              Histórico de Performance — 30 dias
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-0.5 bg-[#2F5BFF]" />
                <span className="text-[8px] text-[#5A5A5A]">Latência</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-0.5 bg-[#D9A441]" />
                <span className="text-[8px] text-[#5A5A5A]">Error rate</span>
              </div>
            </div>
          </div>
          <AreaChart
            height={180}
            showGrid
            showDots={false}
            lines={[
              {
                data: [35, 30, 38, 25, 28, 32, 22, 20, 26, 18, 24, 19, 23, 15, 28, 22, 18, 20, 16, 22, 14, 18, 12, 15, 20, 16, 14, 18, 12, 15],
                color: '#2F5BFF',
                fillColor: 'rgba(47, 91, 255, 0.08)',
                width: 1.5,
              },
              {
                data: [8, 12, 10, 15, 8, 6, 11, 14, 9, 12, 7, 10, 8, 11, 6, 9, 13, 7, 10, 8, 5, 7, 9, 6, 8, 5, 7, 6, 8, 7],
                color: '#D9A441',
                fillColor: 'rgba(217, 164, 65, 0.05)',
                width: 1,
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}
