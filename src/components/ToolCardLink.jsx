import { Link } from 'react-router-dom'

function ToolCardLink({ tool }) {
  return (
    <article className="glass-card flex h-full flex-col rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-lime-200/60">
      <div className="aqua-text text-sm font-black uppercase tracking-[0.18em]">{tool.emoji}</div>
      <h3 className="mt-4 text-xl font-black text-white">{tool.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-lime-50/75">{tool.benefit}</p>
      <Link
        to={`/tools/${tool.slug}`}
        className="glow-button mt-5 inline-flex w-full justify-center rounded-full px-4 py-3 font-black transition"
      >
        Open Tool
      </Link>
    </article>
  )
}

export default ToolCardLink
