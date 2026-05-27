function ToolCard({ tool, isActive, onOpen }) {
  return (
    <article
      className={`rounded-lg border p-6 transition ${
        isActive
          ? 'border-yellow-300 bg-yellow-300/10 shadow-lg shadow-yellow-300/10'
          : 'border-slate-800 bg-slate-900/80 hover:border-slate-600'
      }`}
    >
      <div className="text-4xl">{tool.emoji}</div>
      <h3 className="mt-5 text-xl font-bold text-white">{tool.name}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-300">{tool.description}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 w-full rounded-lg bg-yellow-300 px-4 py-3 font-bold text-slate-950 transition hover:bg-yellow-200"
      >
        Open Tool
      </button>
    </article>
  )
}

export default ToolCard
