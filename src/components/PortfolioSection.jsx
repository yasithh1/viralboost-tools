import { useState } from 'react'
import { Link } from 'react-router-dom'

const portfolioItems = [
  {
    title: 'Fitness Thumbnail',
    type: 'YouTube thumbnail',
    image: '/portfolio/fitness.png',
  },
  {
    title: 'Tech Tips Thumbnail',
    type: 'Facebook post design',
    image: '/portfolio/techtips.png',
  },
  {
    title: 'AI Tools Thumbnail',
    type: 'TikTok cover',
    image: '/portfolio/ai-tools.png',
  },
  {
    title: 'Vlog Thumbnail',
    type: 'YouTube thumbnail',
    image: '/portfolio/vlog.png',
  },
  {
    title: 'Motivation Thumbnail',
    type: 'Reels cover',
    image: '/portfolio/motivation.png',
  },
  {
    title: 'Facebook Engagement Design',
    type: '1:1 editing sample',
    image: '/portfolio/before-after-editing.png',
    aspect: 'square',
  },
  {
    title: 'Editing Service Thumbnail',
    type: 'Social media design',
    image: '/portfolio/Editing-Service.png',
  },
  {
    title: 'Creator Growth Thumbnail',
    type: 'Short video cover',
    image: '/portfolio/creator-cover.png',
  },
]

function PortfolioCard({ item }) {
  const [imageLoaded, setImageLoaded] = useState(true)

  return (
    <article className="glass-card overflow-hidden rounded-[1.5rem]">
      <div className={`${item.aspect === 'square' ? 'aspect-square' : 'aspect-video'} bg-sky-950/70`}>
        {imageLoaded ? (
          <img
            src={item.image}
            alt={`${item.title} ${item.type} sample`}
            onError={() => setImageLoaded(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-sky-950/70 p-5 text-center">
            <p className="aqua-text text-sm font-bold uppercase tracking-[0.2em]">
              Sample Slot
            </p>
            <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-400">Add image: {item.image}</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-cyan-50/65">{item.type}</p>
      </div>
    </article>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="aqua-text text-sm font-semibold uppercase tracking-[0.2em]">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Thumbnail & Content Design Samples
          </h2>
          <p className="mt-4 text-cyan-50/75">
            A quick look at design styles for thumbnails, Facebook posts, TikTok
            covers, reels covers, and content editing samples.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>

        <div className="glass-panel mt-10 rounded-[2rem] p-6 text-center">
          <h3 className="text-2xl font-black text-white">
            Want designs like this for your page or channel?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-cyan-50/75">
            I create YouTube thumbnails, Facebook post designs, TikTok covers,
            and content ideas.
          </p>
          <Link
            to="/contact"
            className="glow-button mt-6 inline-flex rounded-full px-6 py-3 font-black transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
