import ContactSection from '../components/ContactSection'
import PageHero from '../components/PageHero'
import { orderEmail } from '../data/studioData'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Order a Design"
        text="Send your design request and I will reply with details. You can order thumbnails, Facebook posts, TikTok covers, Instagram posts, captions, and content idea packs."
      >
        <a href={orderEmail} className="glow-button inline-flex rounded-full px-6 py-3 font-black transition">
          Email Your Order
        </a>
      </PageHero>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="glass-card mx-auto max-w-4xl rounded-[1.5rem] p-6">
          <h2 className="text-2xl font-black text-white">Order instructions</h2>
          <ol className="mt-5 space-y-3 text-lime-50/75">
            <li>1. Send your topic.</li>
            <li>2. Send the text you want on the design.</li>
            <li>3. Choose your style.</li>
            <li>4. Get your design as JPG/PNG.</li>
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export default ContactPage
