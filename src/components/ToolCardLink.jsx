import { Link } from 'react-router-dom'

function ToolCardLink({ tool }) {
  return (
    <article className="glass-card rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-cyan-200/60">
      <div className="aqua-text text-sm font-black uppercase tracking-[0.18em]">{tool.emoji}</div>
      <h3 className="mt-4 text-xl font-black text-white">{tool.name}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-cyan-50/75">{tool.benefit}</p>
      <Link
        to={`/tools/${tool.slug}`}
        className="glow-button mt-6 inline-flex w-full justify-center rounded-full px-4 py-3 font-black transition"
      >
        Open Tool
      </Link>
    </article>
  )
}

export default ToolCardLink
