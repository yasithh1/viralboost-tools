import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getGuideBySlug } from '../data/guides'

function GuidePage() {
  const { guideSlug } = useParams()
  const guide = getGuideBySlug(guideSlug)

  if (!guide) return <Navigate to="/guides" replace />

  return (
    <>
      <PageHero eyebrow="Guide" title={guide.title} text={guide.intro} />
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl leading-8 text-cyan-50/78">
          {guide.sections.map(([title, text]) => (
            <section key={title} className="mb-8">
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-3">{text}</p>
            </section>
          ))}
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">Practical example</h2>
            <p className="mt-3">
              If your topic is "gym motivation", you can create a Facebook post
              asking people to rate their discipline from 1 to 10, a TikTok hook
              that says "Stop scrolling if you want better gym motivation", a
              caption about small daily progress, and a CTA asking people to save
              the post for later.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">Simple workflow you can follow</h2>
            <p className="mt-3">
              Start by choosing one clear topic. Write down the audience, the
              problem they care about, and the result they want. Then create one
              post idea, one short caption, one hook, one CTA, and one visual
              direction. This workflow keeps your content focused and helps you
              avoid wasting time on random ideas that do not fit your page.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">Examples to test this week</h2>
            <p className="mt-3">
              Try creating three versions of the same idea: one educational, one
              emotional, and one question-based. For example, a phone tips page
              can post a quick tutorial, a mistake beginners make, and a Facebook
              question asking which phone problem annoys people most. Testing
              different angles teaches you what your audience responds to.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">Mistakes to avoid</h2>
            <p className="mt-3">
              Do not copy every generated line without editing. The best results
              come when you adjust the wording to your voice, your niche, and
              your audience. Avoid making every post sound the same, avoid using
              unrelated hashtags, and avoid asking people to comment if the post
              does not give them a simple reason to reply.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">How to measure results</h2>
            <p className="mt-3">
              Do not judge a content idea from one post only. Watch simple
              signals such as comments, saves, clicks, watch time, shares, and
              messages from customers. If a post gets comments but no sales, it
              may be good for engagement but weak for selling. If a post gets
              fewer comments but brings messages from serious buyers, it may be a
              stronger business post. Track what matters for your goal.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-black text-white">Turn one idea into more posts</h2>
            <p className="mt-3">
              The fastest creators reuse one strong idea in multiple formats. A
              guide can become a carousel, a short video, a Facebook question, a
              story poll, a thumbnail idea, and a caption. This does not mean
              posting the same thing everywhere. It means changing the format so
              the same useful message fits each platform. That is how a small
              idea becomes a full content plan.
            </p>
          </section>
          <section className="glass-panel rounded-[2rem] p-6">
            <h2 className="text-2xl font-black text-white">Try the free tool now</h2>
            <p className="mt-3">
              Use the related free tool to create ideas faster and customize the
              output for your own page, channel, or business.
            </p>
            <Link
              to="/free-resources"
              className="glow-button mt-5 inline-flex rounded-full px-5 py-3 font-black transition"
            >
              View Free Resources
            </Link>
          </section>
        </div>
      </article>
    </>
  )
}

export default GuidePage
