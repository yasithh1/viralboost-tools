import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ToolCardLink from '../components/ToolCardLink'
import { tools } from '../data/tools'

function HomePage() {
  const featuredTools = tools.slice(0, 6)

  return (
    <>
      <PageHero
        eyebrow="Creator Tools + Design Services"
        title="Free Creator Tools & Affordable Design Services"
        text="Get content ideas, thumbnail text, hooks, hashtags, and custom designs for your social media pages."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/tools"
            className="glow-button rounded-full px-6 py-3 text-center font-black transition"
          >
            Explore Free Tools
          </Link>
          <Link
            to="/design-services"
            className="ghost-button rounded-full px-6 py-3 text-center font-black transition"
          >
            Order Design
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="aqua-text text-sm font-semibold uppercase tracking-[0.2em]">
              Free Preset Tools
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">Simple tools for creators and page admins.</h2>
            <p className="mt-4 leading-7 text-cyan-50/75">
              ViralBoost Tools focuses on preset ideas and dropdown-based planning.
              No backend, no database, no AI API. Just fast tools plus affordable
              thumbnail and post design services.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCardLink key={tool.slug} tool={tool} />
            ))}
          </div>
          <Link
            to="/tools"
            className="ghost-button mt-8 inline-flex rounded-full px-5 py-3 font-bold transition"
          >
            View all tools
          </Link>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ['No login', 'Use the tools instantly without accounts or signup.'],
            ['Preset based', 'No fake AI generator. Results come from useful preset arrays and dropdown logic.'],
            ['Design focused', 'Use free ideas, then order custom thumbnails or social media designs from $2.'],
          ].map(([title, text]) => (
            <div key={title} className="glass-card rounded-[1.5rem] p-6">
              <h3 className="font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cyan-50/75">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
