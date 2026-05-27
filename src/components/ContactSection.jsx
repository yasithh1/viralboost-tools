function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg border border-yellow-300/20 bg-yellow-300 p-6 text-slate-950 shadow-2xl shadow-yellow-300/10 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em]">Contact Us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Need Custom Content or Editing?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-800">
              Tell me what you need for your page or business. I can help with
              Facebook posts, thumbnails, captions, reels, and content ideas.
            </p>
            <a
              href="#tools"
              className="mt-6 inline-flex rounded-lg border border-slate-950 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white"
            >
              View Services
            </a>
          </div>

          <form
            action="https://formspree.io/f/meedveye"
            method="POST"
            className="rounded-lg bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/20"
          >
            <input type="hidden" name="_subject" value="New ViralBoost Tools contact request" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-200">Your name</span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-300"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-200">Your email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-300"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-200">What do you need?</span>
              <select
                required
                name="service"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-yellow-300"
              >
                <option value="">Select a service</option>
                <option>Facebook posts</option>
                <option>Thumbnail text or design</option>
                <option>Captions and hashtags</option>
                <option>Reels or TikTok ideas</option>
                <option>Custom content plan</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-200">Your requirement</span>
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Example: I need 10 Facebook posts for my cake business..."
                className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-300"
              />
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-yellow-300 px-6 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
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
