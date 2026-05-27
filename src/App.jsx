import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToolCard from './components/ToolCard'
import Generator from './components/Generator'
import ContactSection from './components/ContactSection'
import InfoSections from './components/InfoSections'
import Footer from './components/Footer'
import { tools } from './data/toolData'

function App() {
  const toolEntries = Object.entries(tools)
  const [activeToolKey, setActiveToolKey] = useState('facebook')
  const activeTool = tools[activeToolKey]

  const openTool = (toolKey) => {
    setActiveToolKey(toolKey)
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />

        <section id="tools" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Free Creator Tools
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pick a tool and create your next post idea.
              </h2>
              <p className="mt-4 text-slate-300">
                Generate ready-to-copy ideas for Facebook pages, TikTok videos,
                YouTube thumbnails, Instagram captions, and small business posts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {toolEntries.map(([key, tool]) => (
                <ToolCard
                  key={key}
                  tool={tool}
                  isActive={activeToolKey === key}
                  onOpen={() => openTool(key)}
                />
              ))}
            </div>
          </div>
        </section>

        <Generator key={activeToolKey} toolKey={activeToolKey} tool={activeTool} />

        <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 rounded-lg border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 md:grid-cols-3 md:p-8">
              {[
                ['1', 'Choose a tool', 'Open the generator that matches the content you need.'],
                ['2', 'Add your idea', 'Enter your topic, product, niche, or video idea.'],
                ['3', 'Copy and post', 'Copy the output, customize it if needed, and publish faster.'],
              ].map(([step, title, text]) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-300 font-black text-slate-950">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <InfoSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
