import { useState } from 'react'
import PageHero from '../components/PageHero'

function ShareIdeaPage() {
  const [message, setMessage] = useState('')

  const submitIdea = (event) => {
    event.preventDefault()
    setMessage('Backend coming soon. Please use WhatsApp to send your idea.')
  }

  return (
    <>
      <PageHero
        eyebrow="Community Ideas"
        title="Share Your Content Idea"
        text="Have a tool idea or content idea? Send it to me and I may add it to ViralBoost Tools."
      >
        <a
          href="https://wa.me/947XXXXXXXX?text=Hi%20I%20have%20a%20content%20tool%20idea%20for%20ViralBoost%20Tools"
          className="glow-button inline-flex rounded-full px-6 py-3 font-black transition"
        >
          Send Idea on WhatsApp
        </a>
      </PageHero>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <form
          onSubmit={submitIdea}
          className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-6"
        >
          <label className="block">
            <span className="text-sm font-bold text-cyan-50">Name</span>
            <input className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-cyan-50">Idea</span>
            <textarea
              rows="5"
              className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-cyan-50">Contact</span>
            <input className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none" />
          </label>
          <button className="glow-button mt-5 w-full rounded-full px-5 py-3 font-black">
            Submit Idea
          </button>
          {message && <p className="aqua-text mt-4 text-center font-bold">{message}</p>}
        </form>
      </section>
    </>
  )
}

export default ShareIdeaPage
