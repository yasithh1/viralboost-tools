import PageHero from '../components/PageHero'

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms"
        text="Please review and edit generated ideas before publishing them on your own pages or channels."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 leading-8 text-slate-300">
          <p>You can use generated ideas for your own social media posts, videos, captions, thumbnails, and business pages.</p>
          <p>The tools are provided for free in version 1. They are template-based and do not guarantee followers, views, sales, or engagement.</p>
          <p>You are responsible for checking facts, editing wording, and making sure your final content matches your brand and audience.</p>
          <p>Design service pricing and availability may change later as the service grows.</p>
        </div>
      </section>
    </>
  )
}

export default TermsPage
