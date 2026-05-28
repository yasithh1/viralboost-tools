function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {text && <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
