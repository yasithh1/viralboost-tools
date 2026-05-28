import PageHero from '../components/PageHero'
import { services } from '../data/studioData'

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital Design Services for Creators"
        text="Order thumbnail designs, social media post designs, TikTok covers, captions, content ideas, and AI image prompt writing."
      />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text]) => (
            <article key={title} className="glass-card rounded-[1.5rem] p-6">
              <h2 className="text-xl font-black text-white">{title}</h2>
              <p className="mt-3 leading-7 text-lime-50/75">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
