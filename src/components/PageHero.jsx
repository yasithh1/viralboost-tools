function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.2),transparent_35rem)]" />
      <div className="glass-panel mx-auto max-w-6xl rounded-[2rem] p-6 text-center sm:p-10">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] aqua-text">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {text && <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-lime-50/70">{text}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
