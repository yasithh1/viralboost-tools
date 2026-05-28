function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto max-w-6xl rounded-[2rem] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="aqua-text text-sm font-black uppercase tracking-[0.2em]">Contact Us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Need Custom Content or Editing?
            </h2>
            <p className="mt-4 max-w-2xl text-cyan-50/75">
              Tell me what you need for your page or business. I can help with
              thumbnails, Facebook post designs, TikTok covers, and content ideas.
            </p>
            <a
              href="#contact-form"
              className="glow-button mt-6 inline-flex rounded-full px-6 py-3 text-center font-bold transition"
            >
              Contact Us
            </a>
          </div>

          <form
            id="contact-form"
            action="https://formspree.io/f/meedveye"
            method="POST"
            className="glass-card rounded-[1.5rem] p-5 text-white"
          >
            <input type="hidden" name="_subject" value="New ViralBoost Studio design request" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-cyan-50">Your name</span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none transition placeholder:text-cyan-100/35"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-cyan-50">Your email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none transition placeholder:text-cyan-100/35"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-cyan-50">What do you need?</span>
              <select
                required
                name="service"
                className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none transition"
              >
                <option value="">Select a service</option>
                <option>YouTube thumbnail</option>
                <option>Facebook post design</option>
                <option>TikTok cover</option>
                <option>Creator Pack</option>
                <option>Growth Pack</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-cyan-50">Your requirement</span>
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Example: I need a YouTube thumbnail for my fitness video..."
                className="glass-input mt-2 w-full resize-none rounded-xl px-4 py-3 outline-none transition placeholder:text-cyan-100/35"
              />
            </label>

            <button
              type="submit"
              className="glow-button mt-5 w-full rounded-full px-6 py-3 font-black transition"
            >
              Send Request
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Your email address is only used to reply to your request.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
