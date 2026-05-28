import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { guides } from '../data/guides'

function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Creator Guides"
        text="Helpful guides for Facebook engagement, TikTok hooks, captions, hashtags, thumbnail text, customer replies, and faster content creation."
      />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.slug} className="rounded-lg border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-black text-white">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{guide.intro}</p>
              <Link
                to={`/guides/${guide.slug}`}
                className="mt-5 inline-flex rounded-lg bg-yellow-300 px-4 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
              >
                Read Guide
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default GuidesPage
