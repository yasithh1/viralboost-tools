const sections = [
  {
    id: 'about',
    title: 'About',
    text: 'ViralBoost Tools is a free content creation toolkit for creators, Facebook page owners, TikTok users, YouTubers, Instagram creators, and small businesses. It helps you generate Facebook engagement posts, captions, hashtag sets, thumbnail text ideas, and TikTok hooks without logging in.',
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    text: 'ViralBoost Tools does not require user accounts and does not store generated ideas in a database. If you submit the contact form, the details you enter are sent through the form service so we can reply to your request.',
  },
  {
    id: 'terms',
    title: 'Terms',
    text: 'You can use the generated ideas for your own social media content. The tools are provided for free, and results should be reviewed and edited by you before posting.',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    text: 'Generated content ideas are suggestions only. ViralBoost Tools does not guarantee views, followers, sales, or engagement results. Your final content performance depends on your niche, audience, timing, and posting quality.',
  },
]

function InfoSections() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article
            id={section.id}
            key={section.id}
            className="scroll-mt-24 rounded-lg border border-slate-800 bg-slate-900/70 p-6"
          >
            <h2 className="text-2xl font-black text-white">{section.title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default InfoSections
