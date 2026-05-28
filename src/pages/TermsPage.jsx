import PageHero from '../components/PageHero'

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms"
        text="Please review service details, pricing, and deliverables before ordering a design."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 leading-8 text-slate-300">
          <p>You can use delivered designs and written content ideas for your own social media posts, videos, thumbnails, and business pages.</p>
          <p>Design services do not guarantee followers, views, sales, or engagement. Performance depends on your niche, audience, offer, and posting quality.</p>
          <p>You are responsible for checking final wording, details, and making sure your published content matches your brand and audience.</p>
          <p>Design service pricing and availability may change later as the service grows.</p>
        </div>
      </section>
    </>
  )
}

export default TermsPage
