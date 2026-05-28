import CopyButton from '../components/CopyButton'
import PageHero from '../components/PageHero'
import { resources } from '../data/resources'

function FreeResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Resources"
        title="Ready-Made Creator Resources"
        text="Copy thumbnail text ideas, TikTok hooks, Facebook engagement post ideas, hashtag packs, and thumbnail prompt examples."
      />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.title} className="glass-card rounded-[1.5rem] p-6">
              <h2 className="text-2xl font-black text-white">{resource.title}</h2>
              <div className="mt-5 max-h-96 space-y-3 overflow-auto pr-2">
                {resource.items.map((item, index) => (
                  <div key={`${resource.title}-${index}`} className="rounded-xl bg-black/20 p-3">
                    <p className="text-sm leading-6 text-lime-50/80">{item}</p>
                    <div className="mt-2">
                      <CopyButton text={item} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <CopyButton text={resource.items.join('\n')} label="Copy All" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default FreeResourcesPage
