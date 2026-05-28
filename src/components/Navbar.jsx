import { Link, NavLink } from 'react-router-dom'

const navItems = [
  ['Home', '/'],
  ['Tools', '/tools'],
  ['Guides', '/guides'],
  ['Design Services', '/design-services'],
  ['Share Idea', '/share-idea'],
  ['Contact', '/contact'],
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="glass-panel mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] px-5 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4 lg:shrink-0">
          <Link to="/" className="text-lg font-black tracking-tight text-white drop-shadow-[0_0_14px_rgba(190,242,100,0.35)]">
            ViralBoost <span className="aqua-text">Tools</span>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-1 text-sm font-medium text-lime-50/70 lg:justify-center lg:pb-0">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `shrink-0 transition hover:text-lime-200 ${
                  isActive ? 'aqua-text drop-shadow-[0_0_10px_rgba(190,242,100,0.45)]' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <Link
          to="/tools/content-pack-generator"
          className="glow-button hidden shrink-0 rounded-full px-4 py-2 text-sm font-black transition sm:inline-flex"
        >
          Start Free
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
