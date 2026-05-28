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
    <header className="sticky top-0 z-50 border-b border-cyan-200/20 bg-sky-950/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-lg font-black tracking-tight text-white drop-shadow-[0_0_14px_rgba(103,232,249,0.45)]">
            ViralBoost <span className="aqua-text">Tools</span>
          </Link>
          <Link
            to="/tools/content-pack-generator"
            className="glow-button hidden rounded-full px-4 py-2 text-sm font-black transition sm:inline-flex"
          >
            Start Free
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-1 text-sm font-medium text-cyan-100/75">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `shrink-0 transition hover:text-yellow-300 ${
                  isActive ? 'aqua-text drop-shadow-[0_0_10px_rgba(103,232,249,0.55)]' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
