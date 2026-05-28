import PageHero from '../components/PageHero'
import ToolCardLink from '../components/ToolCardLink'
import { tools } from '../data/tools'

function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tools"
        title="Free Creator Tools"
        text="Choose a preset or dropdown-based tool. No backend, no database, and no AI API."
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
