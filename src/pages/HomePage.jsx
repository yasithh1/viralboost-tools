import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PortfolioSection from '../components/PortfolioSection'
import { pricing, services } from '../data/studioData'

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="ViralBoost Studio"
        title="Affordable Thumbnail & Social Media Post Designs"
        text="I create YouTube thumbnails, Facebook posts, TikTok covers, captions, and content ideas for creators and small businesses."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="glow-button rounded-full px-6 py-3 text-center font-black transition">
            Order a Design
          </Link>
          <Link to="/portfolio" className="ghost-button rounded-full px-6 py-3 text-center font-black transition">
            View Portfolio
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="aqua-text text-sm font-semibold uppercase tracking-[0.2em]">Services</p>
          <h2 className="mt-3 text-3xl font-black text-white">Design and content support for creators.</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text]) => (
              <article key={title} className="glass-card rounded-[1.5rem] p-6">
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-lime-50/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="aqua-text text-sm font-semibold uppercase tracking-[0.2em]">Pricing</p>
          <h2 className="mt-3 text-3xl font-black text-white">Affordable design packages.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricing.map(([name, price, features]) => (
              <article key={name} className="glass-card rounded-[1.5rem] p-6">
                <h3 className="text-xl font-black text-white">{name}</h3>
                <p className="aqua-text mt-3 text-4xl font-black">{price}</p>
                <ul className="mt-5 space-y-3 text-sm text-lime-50/75">
                  {features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
