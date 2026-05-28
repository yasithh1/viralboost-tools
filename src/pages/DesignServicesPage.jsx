import PortfolioSection from '../components/PortfolioSection'
import PageHero from '../components/PageHero'

const prices = [
  ['Starter Design', '$2', ['1 thumbnail, Facebook post, or TikTok cover', 'Text included', '1 revision', 'JPG/PNG delivery']],
  ['Creator Pack', '$5', ['3 designs', '2 revisions', 'JPG/PNG delivery']],
  ['Growth Pack', '$10', ['7 designs', 'Priority support', 'Custom style']],
]

function DesignServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Design Services"
        title="Thumbnail & Content Design Services"
        text="Need designs like this for your page or channel? I create YouTube thumbnails, Facebook post designs, TikTok covers, captions, and content ideas for creators and small businesses."
      >
        <a
          href="mailto:yourname@example.com?subject=Design%20Order%20Request"
          className="glow-button inline-flex rounded-full px-6 py-3 font-black transition"
        >
          Send Design Request by Email
        </a>
      </PageHero>
      <PortfolioSection />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-white">Simple Pricing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {prices.map(([name, price, features]) => (
              <article key={name} className="glass-card rounded-[1.5rem] p-6">
                <h3 className="text-xl font-black text-white">{name}</h3>
                <p className="aqua-text mt-3 text-4xl font-black">{price}</p>
                <ul className="mt-5 space-y-3 text-sm text-cyan-50/75">
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

export default DesignServicesPage
