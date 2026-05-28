import PageHero from '../components/PageHero'
import { pricing } from '../data/studioData'

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple Affordable Pricing"
        text="Start small with one design or order a pack for your page, channel, or business."
      />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {pricing.map(([name, price, features]) => (
            <article key={name} className="glass-card rounded-[1.5rem] p-6">
              <h2 className="text-xl font-black text-white">{name}</h2>
              <p className="aqua-text mt-3 text-4xl font-black">{price}</p>
              <ul className="mt-5 space-y-3 text-sm text-lime-50/75">
                {features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default PricingPage
