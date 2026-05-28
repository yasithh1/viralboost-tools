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
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-lg font-black tracking-tight text-white">
            ViralBoost <span className="text-yellow-300">Tools</span>
          </Link>
          <Link
            to="/tools/content-pack-generator"
            className="hidden rounded-lg bg-yellow-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-yellow-200 sm:inline-flex"
          >
            Start Free
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-1 text-sm font-medium text-slate-300">
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `shrink-0 transition hover:text-yellow-300 ${
                  isActive ? 'text-yellow-300' : ''
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
