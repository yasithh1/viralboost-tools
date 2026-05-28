import { Link } from 'react-router-dom'

const footerLinks = [
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Pricing', '/pricing'],
  ['Free Resources', '/free-resources'],
  ['Guides', '/guides'],
  ['Contact', '/contact'],
  ['Privacy Policy', '/privacy-policy'],
  ['Terms', '/terms'],
]

function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <p>ViralBoost Studio - Affordable thumbnail and social media post designs.</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map(([label, path]) => (
            <Link key={path} className="transition hover:text-yellow-300" to={path}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
