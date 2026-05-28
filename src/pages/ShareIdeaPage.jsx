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
          className="inline-flex rounded-lg bg-yellow-300 px-6 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
        >
          Send Idea on WhatsApp
        </a>
      </PageHero>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <form
          onSubmit={submitIdea}
          className="mx-auto max-w-3xl rounded-lg border border-slate-800 bg-slate-900/80 p-6"
        >
          <label className="block">
            <span className="text-sm font-bold text-slate-200">Name</span>
            <input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-yellow-300" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-200">Idea</span>
            <textarea
              rows="5"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-yellow-300"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-200">Contact</span>
            <input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-yellow-300" />
          </label>
          <button className="mt-5 w-full rounded-lg bg-yellow-300 px-5 py-3 font-black text-slate-950">
            Submit Idea
          </button>
          {message && <p className="mt-4 text-center font-bold text-yellow-300">{message}</p>}
        </form>
      </section>
    </>
  )
}

export default ShareIdeaPage
