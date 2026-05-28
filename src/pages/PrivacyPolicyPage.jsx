import PageHero from '../components/PageHero'

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        text="ViralBoost Tools is built to be simple, free, and easy to use without accounts."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 leading-8 text-slate-300">
          <p>ViralBoost Tools does not require users to create an account or log in to use the free tools.</p>
          <p>The generator tools run in the browser using JavaScript templates. Version 1 does not use a backend, database, or AI API to store generated content.</p>
          <p>If you submit a contact form, the details you enter may be sent through the form service so we can reply to your request.</p>
          <p>Do not submit private passwords, payment details, or sensitive personal information through any form on this website.</p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage
