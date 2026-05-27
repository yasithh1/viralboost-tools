function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <p>ViralBoost Tools - Free creator tools for faster social media ideas.</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a className="transition hover:text-yellow-300" href="#about">
            About
          </a>
          <a className="transition hover:text-yellow-300" href="#contact">
            Contact
          </a>
          <a className="transition hover:text-yellow-300" href="#privacy">
            Privacy Policy
          </a>
          <a className="transition hover:text-yellow-300" href="#terms">
            Terms
          </a>
          <a className="transition hover:text-yellow-300" href="#disclaimer">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
