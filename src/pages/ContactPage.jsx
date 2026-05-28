import ContactSection from '../components/ContactSection'
import PageHero from '../components/PageHero'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact ViralBoost Tools"
        text="Send your custom content, editing, design, or creator tool request. Your email is used only to reply to your message."
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
