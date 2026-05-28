import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ToolCardLink from '../components/ToolCardLink'
import { tools } from '../data/tools'

function HomePage() {
  const featuredTools = tools.slice(0, 6)

  return (
    <>
      <PageHero
        eyebrow="Free Creator Toolkit"
        title={
          <>
            Creator tools that <span className="hero-word">grow</span> with you.
          </>
        }
        text="Generate content packs, Facebook engagement posts, captions, hashtags, TikTok hooks, thumbnail text, comment replies, bios, CTAs, and image prompts without login."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/tools/content-pack-generator"
            className="glow-button rounded-full px-6 py-3 text-center font-black transition"
          >
            Generate Content Pack
          </Link>
          <Link
            to="/design-services"
            className="ghost-button rounded-full px-6 py-3 text-center font-black transition"
          >
            Design Services
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="aqua-text text-sm font-semibold uppercase tracking-[0.2em]">
              Useful Tools
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">Create, post, reply, and sell better.</h2>
            <p className="mt-4 leading-7 text-cyan-50/75">
              ViralBoost Tools is made for Facebook page admins, TikTok creators,
              YouTubers, Instagram creators, freelancers, and small businesses
              that need quick practical content ideas.
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
            ['Template based', 'No backend, database, or AI API is used in version 1.'],
            ['Creator focused', 'Tools are built around posts, captions, replies, selling, and design.'],
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
