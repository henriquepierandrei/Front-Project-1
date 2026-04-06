import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  return (
    <section className="py-20 sm:py-24 lg:py-28" id="contato">
      <div className="px-5 sm:px-8 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 gap-12 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] mb-2"
            >
              Contato
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-light tracking-tight mb-6"
            >
              Vamos conversar sobre sua operação
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-[#9A9A9A] leading-relaxed mb-10 max-w-md"
            >
              Agende uma demonstração personalizada com nosso time de especialistas.
              Mapeamos seu cenário e apresentamos como a SQUARE pode transformar
              sua operação.
            </motion.p>

            <div className="space-y-6">
              {[
                { label: 'E-mail', value: 'contato@square.dev' },
                { label: 'Telefone', value: '+55 (11) 4002-8922' },
                { label: 'Escritório', value: 'São Paulo, SP — Brasil' },
              ].map((info) => (
                <div key={info.label}>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm text-[#F5F5F5]">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="bg-[#111111] border border-[#242424] rounded-xl p-5 sm:p-8"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-2 block">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#242424] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#9A9A9A]/50 focus:outline-none focus:border-[#2F5BFF]/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-2 block">
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#242424] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#9A9A9A]/50 focus:outline-none focus:border-[#2F5BFF]/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-2 block">
                  Empresa
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#242424] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#9A9A9A]/50 focus:outline-none focus:border-[#2F5BFF]/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-[0.2em] text-[#9A9A9A] mb-2 block">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte-nos sobre sua operação..."
                  className="w-full bg-[#1A1A1A] border border-[#242424] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#9A9A9A]/50 focus:outline-none focus:border-[#2F5BFF]/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] bg-[#2F5BFF] rounded-lg text-white font-medium hover:bg-[#264AEF] transition-colors duration-300"
              >
                Solicitar demonstração
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
