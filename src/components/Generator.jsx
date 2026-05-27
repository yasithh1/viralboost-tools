import { useState } from 'react'

const cleanIdea = (idea) => idea.trim().replace(/\s+/g, ' ')

const createTopicHashtags = (idea) => {
  const words = cleanIdea(idea)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(' ')
    .filter((word) => word.length > 2)
    .slice(0, 3)

  if (!words.length) return ''

  const joined = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  return [`#${words.join('')}`, `#${joined}`, ...words.map((word) => `#${word}tips`)].join(' ')
}

const customizeOutput = (toolKey, idea, randomItem) => {
  const topic = cleanIdea(idea)

  const templates = {
    facebook: [
      `Quick question about ${topic} 👇\n\nWhat matters most?\n\nA) Quality\nB) Price\nC) Fast results\nD) Trust\n\n👉 Comment A, B, C, or D 👇`,
      `Only people interested in ${topic} will answer this 😳\n\nWhat is the biggest challenge?\n\nA) Getting started\nB) Staying consistent\nC) Finding the right tools\nD) Seeing results\n\n💬 Comment your answer below.`,
      `Complete this sentence 👇\n\nThe best thing about ${topic} is ________.\n\n👉 Drop your answer in the comments.`,
      `This or that? 🤔\n\nFor ${topic}, would you choose:\n\nA) Faster results\nB) Better quality\n\nComment A or B 👇`,
      `Be honest 👇\n\nWhat do you want to improve most in ${topic}?\n\nA) Skill\nB) Confidence\nC) Results\nD) Consistency\n\nVote below.`,
    ],
    caption: [
      `${topic} starts with one simple step. Keep going 🔥`,
      `Make ${topic} simple, clear, and worth remembering.`,
      `Your next ${topic} post could be the one that gets attention 🚀`,
      `Small improvements in ${topic} can create big results.`,
      `Do not overthink ${topic}. Start, learn, and improve.`,
    ],
    hashtags: [
      `${createTopicHashtags(topic)} ${randomItem}`,
      `${createTopicHashtags(topic)} #contentideas #creatorgrowth #socialmedia`,
      `${createTopicHashtags(topic)} #viralcontent #dailycontent #onlinegrowth`,
      `${createTopicHashtags(topic)} #tips #howto #learnonline #creatorlife`,
      `${createTopicHashtags(topic)} #smallbusiness #marketingtips #brandgrowth`,
    ],
    thumbnail: [
      `${topic}: I Tried This For 7 Days`,
      `Before You Try ${topic}, Watch This`,
      `${topic} Changed Everything`,
      `No One Expected This About ${topic}`,
      `The Truth About ${topic}`,
    ],
    hook: [
      `Stop scrolling if you want better results with ${topic}.`,
      `Nobody tells beginners this about ${topic}.`,
      `I tried this simple ${topic} trick and it actually worked.`,
      `Here is the truth about ${topic}.`,
      `If you care about ${topic}, you need to hear this.`,
    ],
  }

  const toolTemplates = templates[toolKey] || [`${topic}\n\n${randomItem}`]
  return toolTemplates[Math.floor(Math.random() * toolTemplates.length)]
}

function Generator({ toolKey, tool }) {
  const [idea, setIdea] = useState('')
  const [output, setOutput] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const [error, setError] = useState('')

  const generateItem = () => {
    if (!cleanIdea(idea)) {
      setError('Please enter your idea first.')
      setOutput('')
      return
    }

    const randomItem = tool.items[Math.floor(Math.random() * tool.items.length)]
    setOutput(customizeOutput(toolKey, idea, randomItem))
    setCopyStatus('')
    setError('')
  }

  const copyOutput = async () => {
    if (!output) return

    await navigator.clipboard.writeText(output)
    setCopyStatus('Copied!')
  }

  return (
    <section id="generator" className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-black/30 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-4xl">{tool.emoji}</div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">{tool.name}</h2>
              <p className="mt-3 text-slate-300">{tool.description}</p>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-bold text-yellow-300">
              {tool.items.length} ideas
            </span>
          </div>

          <label className="mt-8 block">
            <span className="text-sm font-bold text-slate-200">Your idea or topic</span>
            <input
              type="text"
              value={idea}
              onChange={(event) => {
                setIdea(event.target.value)
                setError('')
              }}
              placeholder="Example: phone speed tips, gym motivation, cake business"
              className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-300"
            />
          </label>
          {error && <p className="mt-3 text-sm font-semibold text-red-300">{error}</p>}

          <div className="mt-8 min-h-64 rounded-lg border border-slate-800 bg-slate-900 p-5">
            {output ? (
              <pre className="whitespace-pre-wrap break-words font-sans text-base leading-7 text-slate-100">
                {output}
              </pre>
            ) : (
              <div className="flex min-h-52 items-center justify-center text-center text-slate-400">
                Enter your idea first, then generate a ready-to-copy result.
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={generateItem}
              className="rounded-lg bg-yellow-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-yellow-200"
            >
              {output ? 'Generate Another' : tool.buttonText}
            </button>
            <button
              type="button"
              onClick={copyOutput}
              disabled={!output}
              className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-white transition hover:border-yellow-300 hover:text-yellow-300 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {tool.copyText}
            </button>
            <div className="flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-green-300">
              {copyStatus || 'Ready when you are'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Generator
