function Hero() {
  return (
    <section id="top" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-200">
            One click. Better content. More engagement.
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Create Better Social Media Posts for Free in Seconds
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Free tools for creators to generate Facebook posts, captions,
            hashtags, thumbnail text, and TikTok hooks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tools"
              className="rounded-lg bg-yellow-300 px-6 py-3 text-center font-bold text-slate-950 shadow-lg shadow-yellow-300/20 transition hover:bg-yellow-200"
            >
              Start Generating
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-bold text-white transition hover:border-yellow-300 hover:text-yellow-300"
            >
              Contact for Custom Editing
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/30">
          <div className="rounded-lg bg-slate-950 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-yellow-300">Live idea preview</span>
              <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-300">
                Free
              </span>
            </div>
            <div className="space-y-3 text-left text-slate-200">
              <p className="font-bold text-white">Which one helps content grow faster? 🤔</p>
              <p>A) Better hooks</p>
              <p>B) Better thumbnails</p>
              <p>C) Posting consistency</p>
              <p>D) All of the above</p>
              <p className="pt-2 text-yellow-200">👉 Comment your answer 👇</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
