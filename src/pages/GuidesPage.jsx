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
            <article key={guide.slug} className="glass-card rounded-[1.5rem] p-6">
              <h2 className="text-xl font-black text-white">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-cyan-50/75">{guide.intro}</p>
              <Link
                to={`/guides/${guide.slug}`}
                className="glow-button mt-5 inline-flex rounded-full px-4 py-3 font-black transition"
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
