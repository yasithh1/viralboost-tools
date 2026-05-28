import PageHero from '../components/PageHero'
import ToolCardLink from '../components/ToolCardLink'
import { tools } from '../data/tools'

function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="All Tools"
        title="Free Creator Tools"
        text="Choose a tool to generate useful content ideas for Facebook, TikTok, YouTube, Instagram, freelancing, and small business pages."
      />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCardLink key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ToolsPage
