function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-black tracking-tight text-white">
          ViralBoost <span className="text-yellow-300">Tools</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
          <a className="transition hover:text-yellow-300" href="#about">
            About
          </a>
          <a className="transition hover:text-yellow-300" href="#tools">
            Tools
          </a>
          <a className="transition hover:text-yellow-300" href="#how-it-works">
            How It Works
          </a>
          <a className="transition hover:text-yellow-300" href="#portfolio">
            Portfolio
          </a>
          <a className="transition hover:text-yellow-300" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
