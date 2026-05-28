import { Link } from 'react-router-dom'

function ToolCardLink({ tool }) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/80 p-6 transition hover:border-yellow-300/60">
      <div className="text-sm font-black uppercase tracking-[0.18em] text-yellow-300">{tool.emoji}</div>
      <h3 className="mt-4 text-xl font-black text-white">{tool.name}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-300">{tool.benefit}</p>
      <Link
        to={`/tools/${tool.slug}`}
        className="mt-6 inline-flex w-full justify-center rounded-lg bg-yellow-300 px-4 py-3 font-black text-slate-950 transition hover:bg-yellow-200"
      >
        Open Tool
      </Link>
    </article>
  )
}

export default ToolCardLink
