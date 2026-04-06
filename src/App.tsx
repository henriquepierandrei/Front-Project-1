import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MetricsSection } from './components/MetricsSection'
import { Architecture } from './components/Architecture'
import { CommandCenter } from './components/CommandCenter'
import { AccordionSection } from './components/AccordionSection'
import { ProcessSection } from './components/ProcessSection'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Insights } from './components/Insights'
import { Manifesto } from './components/Manifesto'
import { Gallery } from './components/Gallery'
import { StatsCredibility } from './components/StatsCredibility'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#2F5BFF]/20 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <Architecture />
        <CommandCenter />
        <AccordionSection />
        <ProcessSection />
        <FAQ />
        <Contact />
        <Insights />
        <Manifesto />
        <Gallery />
        <StatsCredibility />
      </main>
      <Footer />
    </div>
  )
}

export default App
