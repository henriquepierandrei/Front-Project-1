import { useState } from 'react'
import { motion } from 'framer-motion'
import { AreaChart } from '../Charts'

const tabData: {
  label: string
  lines: Parameters<typeof AreaChart>[0]['lines']
  cards: { label: string; value: string; unit: string }[]
}[] = [
  {
    label: 'Visão Geral',
    lines: [
      { data: [45, 52, 38, 62, 55, 70, 65, 78, 72, 88, 80, 90, 85, 92], color: '#2F5BFF', fillColor: 'rgba(47,91,255,0.08)', width: 1.5 },
      { data: [20, 25, 18, 30, 22, 35, 28, 40, 32, 42, 38, 45, 40, 48], color: '#D9A441', fillColor: 'rgba(217,164,65,0.05)', width: 1 },
    ],
    cards: [
      { label: 'Eventos Hoje', value: '12,847', unit: 'eventos' },
      { label: 'Alertas Ativos', value: '23', unit: 'alertas' },
      { label: 'SLA Atual', value: '99.97', unit: '%' },
      { label: 'Nós Ativos', value: '1,247', unit: 'nós' },
    ],
  },
  {
    label: 'Operações',
    lines: [
      { data: [60, 55, 70, 65, 80, 75, 85, 78, 90, 82, 88, 95, 92, 98], color: '#2F5BFF', fillColor: 'rgba(47,91,255,0.08)', width: 1.5 },
      { data: [15, 18, 12, 20, 16, 22, 14, 18, 10, 15, 12, 8, 10, 5], color: '#D9A441', fillColor: 'rgba(217,164,65,0.05)', width: 1 },
    ],
    cards: [
      { label: 'Deploys Hoje', value: '47', unit: 'deploys' },
      { label: 'Rollbacks', value: '2', unit: 'rollbacks' },
      { label: 'Uptime Médio', value: '99.95', unit: '%' },
      { label: 'MTTR', value: '4.2', unit: 'minutos' },
    ],
  },
  {
    label: 'Segurança',
    lines: [
      { data: [30, 28, 35, 32, 40, 38, 42, 35, 30, 25, 28, 22, 18, 15], color: '#2F5BFF', fillColor: 'rgba(47,91,255,0.08)', width: 1.5 },
      { data: [12, 15, 18, 22, 20, 25, 28, 30, 28, 35, 32, 38, 40, 45], color: '#D9A441', fillColor: 'rgba(217,164,65,0.05)', width: 1 },
    ],
    cards: [
      { label: 'Ameaças Bloqueadas', value: '1,284', unit: 'eventos' },
      { label: 'Vuln. Abertas', value: '8', unit: 'críticas' },
      { label: 'Certificados', value: '352', unit: 'válidos' },
      { label: 'Score Geral', value: '94', unit: '/100' },
    ],
  },
  {
    label: 'SLA',
    lines: [
      { data: [99.5, 99.7, 99.3, 99.8, 99.9, 99.6, 99.95, 99.9, 99.99, 99.97, 99.99, 99.98, 99.99, 100], color: '#2F5BFF', fillColor: 'rgba(47,91,255,0.08)', width: 1.5 },
      { data: [99, 99, 99.1, 99.2, 99.3, 99.5, 99.6, 99.7, 99.75, 99.8, 99.85, 99.9, 99.92, 99.95], color: '#D9A441', fillColor: 'rgba(217,164,65,0.05)', width: 1 },
    ],
    cards: [
      { label: 'SLA Comprometido', value: '99.99', unit: '%' },
      { label: 'SLA Realizado', value: '99.97', unit: '%' },
      { label: 'Violações', value: '0', unit: 'este mês' },
      { label: 'Tempo Médio', value: '99.96', unit: '%' },
    ],
  },
]

export function CommandCenter() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = tabData.map((d) => d.label)

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#111111]/50">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        {/* Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2">
            Visibilidade total
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-tight">
            Command Center &
            <br />
            <span className="text-[#9A9A9A]">Território Operacional</span>
          </h2>
        </motion.div>

        {/* Tabs - scrollable on mobile */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto border-b border-[#242424]">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 sm:px-5 py-3 text-[10px] uppercase tracking-[0.15em] whitespace-nowrap border-b transition-colors duration-300 ${
                activeTab === i
                  ? 'text-[#F5F5F5] border-b-[#2F5BFF]'
                  : 'text-[#9A9A9A] border-b-transparent hover:text-[#F5F5F5]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Area Chart Card */}
          <motion.div
            key={`chart-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1A1A1A] border border-[#242424] rounded-xl p-5 sm:p-6 lg:col-span-2"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#5A5A5A] mb-1">
              {tabData[activeTab].label}
            </p>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl sm:text-2xl font-light tracking-tight">
                {tabData[activeTab].cards[0].value}
              </span>
              <span className="text-[10px] text-[#9A9A9A]">
                {tabData[activeTab].cards[0].unit}
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-0.5 bg-[#2F5BFF]" />
                <div className="w-2 h-0.5 bg-[#D9A441] opacity-60" />
              </div>
            </div>
            <AreaChart
              height={200}
              showGrid
              lines={tabData[activeTab].lines}
            />
          </motion.div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {tabData[activeTab].cards.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-[#1A1A1A] border border-[#242424] rounded-xl p-4 hover:border-[#2F5BFF]/20 transition-all duration-300"
              >
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#5A5A5A] mb-1">
                  {item.label}
                </p>
                <p className="text-xl sm:text-2xl font-light tracking-tight">{item.value}</p>
                <p className="text-[8px] text-[#3A3A3A] mt-0.5">{item.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
