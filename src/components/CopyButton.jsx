import { useState } from 'react'

function CopyButton({ text, label = 'Copy' }) {
  const [copied, setCopied] = useState(false)

  const copyText = async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={copyText}
      className="ghost-button rounded-full px-4 py-2 text-sm font-bold transition"
    >
      {copied ? 'Copied!' : label}
    </button>
  )
}

export default CopyButton
