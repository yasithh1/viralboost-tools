import { useState } from 'react'

const cleanIdea = (idea) => idea.trim().replace(/\s+/g, ' ')

const pickRandom = (items) => items[Math.floor(Math.random() * items.length)]

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

const generatorPatterns = {
  facebook: [
    (topic) => `Quick question about ${topic}\n\nWhat matters most?\n\nA) Quality\nB) Price\nC) Fast results\nD) Trust\n\nComment A, B, C, or D.`,
    (topic) => `Only people interested in ${topic} will answer this.\n\nWhat is the biggest challenge?\n\nA) Getting started\nB) Staying consistent\nC) Finding the right tools\nD) Seeing results\n\nComment your answer below.`,
    (topic) => `Complete this sentence:\n\nThe best thing about ${topic} is ________.\n\nDrop your answer in the comments.`,
    (topic) => `This or that?\n\nFor ${topic}, would you choose:\n\nA) Faster results\nB) Better quality\n\nComment A or B.`,
    (topic) => `Be honest:\n\nWhat do you want to improve most in ${topic}?\n\nA) Skill\nB) Confidence\nC) Results\nD) Consistency\n\nVote below.`,
    (topic) => `What would you choose for ${topic}?\n\nA) Save time\nB) Save money\nC) Get better quality\nD) Learn faster\n\nComment your choice.`,
    (topic) => `True or false?\n\n${topic} becomes easier when you stay consistent.\n\nComment TRUE or FALSE.`,
    (topic) => `Fill in the blank:\n\nMy biggest problem with ${topic} is ________.\n\nLet us know below.`,
    (topic) => `Pick one for ${topic}:\n\nA) Beginner tips\nB) Advanced tricks\nC) Mistakes to avoid\nD) Real examples\n\nWhich post should we make next?`,
    (topic) => `If you had to teach ${topic} to a beginner, what is the first tip you would give?\n\nComment your best advice.`,
    (topic) => `Hot take about ${topic}:\n\nMost people fail because they skip the basics.\n\nAgree or disagree?`,
    (topic) => `Rate your confidence in ${topic} from 1 to 10.\n\nBe honest in the comments.`,
    (topic) => `What is harder in ${topic}?\n\nA) Starting\nB) Learning\nC) Staying consistent\nD) Getting results\n\nComment below.`,
    (topic) => `Choose your goal for ${topic}:\n\nA) More sales\nB) More followers\nC) Better skills\nD) More confidence\n\nVote now.`,
    (topic) => `One word challenge:\n\nDescribe ${topic} in one word.\n\nBest answer gets pinned.`,
    (topic) => `Question for you:\n\nWhat made you interested in ${topic}?\n\nTell your story below.`,
    (topic) => `Would you rather have:\n\nA) A complete guide to ${topic}\nB) A quick checklist for ${topic}\n\nComment A or B.`,
    (topic) => `What is your biggest win with ${topic} so far?\n\nSmall wins count too. Comment below.`,
    (topic) => `If we made a free tip about ${topic}, what should it cover?\n\nDrop your request.`,
    (topic) => `Do you think ${topic} is easy or difficult for beginners?\n\nComment EASY or DIFFICULT.`,
  ],
  caption: [
    (topic) => `${topic} starts with one simple step. Keep going.`,
    (topic) => `Make ${topic} simple, clear, and worth remembering.`,
    (topic) => `Your next ${topic} post could be the one that gets attention.`,
    (topic) => `Small improvements in ${topic} can create big results.`,
    (topic) => `Do not overthink ${topic}. Start, learn, and improve.`,
    (topic) => `Turn your ${topic} idea into action today.`,
    (topic) => `Better ${topic} results come from better consistency.`,
    (topic) => `Your audience needs a simple message about ${topic}.`,
    (topic) => `One clear idea about ${topic} can make your content stronger.`,
    (topic) => `Learn ${topic}, share the journey, and keep improving.`,
    (topic) => `The best ${topic} content is useful, honest, and easy to understand.`,
    (topic) => `Make ${topic} easier for someone today.`,
    (topic) => `If ${topic} matters to you, show up for it.`,
    (topic) => `Simple ${topic} tips can create real value.`,
    (topic) => `Your growth with ${topic} starts with the next post.`,
    (topic) => `Create first. Perfect later. That works for ${topic} too.`,
    (topic) => `People remember clear advice about ${topic}.`,
    (topic) => `Keep building your ${topic} skills one day at a time.`,
    (topic) => `This is your sign to post about ${topic}.`,
    (topic) => `Strong content starts with a strong ${topic} idea.`,
  ],
  hashtags: [
    (topic, randomItem) => `${createTopicHashtags(topic)} ${randomItem}`,
    (topic) => `${createTopicHashtags(topic)} #contentideas #creatorgrowth #socialmedia`,
    (topic) => `${createTopicHashtags(topic)} #viralcontent #dailycontent #onlinegrowth`,
    (topic) => `${createTopicHashtags(topic)} #tips #howto #learnonline #creatorlife`,
    (topic) => `${createTopicHashtags(topic)} #smallbusiness #marketingtips #brandgrowth`,
    (topic) => `${createTopicHashtags(topic)} #beginnerfriendly #quicktips #valuepost #growthtips`,
    (topic) => `${createTopicHashtags(topic)} #reelsideas #tiktoktips #shortscontent #contentstrategy`,
    (topic) => `${createTopicHashtags(topic)} #facebookpost #engagementideas #commentbelow #pagegrowth`,
    (topic) => `${createTopicHashtags(topic)} #dailyideas #onlinebusiness #digitalmarketing #creatorjourney`,
    (topic) => `${createTopicHashtags(topic)} #tutorial #stepbystep #learnsomethingnew #practicaltips`,
    (topic) => `${createTopicHashtags(topic)} #motivation #discipline #consistency #goals`,
    (topic) => `${createTopicHashtags(topic)} #businesscontent #brandtips #marketingideas #socialgrowth`,
    (topic) => `${createTopicHashtags(topic)} #videocontent #thumbnailideas #hookideas #viralhooks`,
    (topic) => `${createTopicHashtags(topic)} #nichecontent #targetaudience #contentplanning #postideas`,
    (topic) => `${createTopicHashtags(topic)} #tipsandtricks #creatorhelp #easycontent #contenttools`,
    (topic) => `${createTopicHashtags(topic)} #newpost #contentcreator #growyourpage #audiencegrowth`,
    (topic) => `${createTopicHashtags(topic)} #smallcreator #creatorcommunity #onlinegrowth #postdaily`,
    (topic) => `${createTopicHashtags(topic)} #socialmediatips #contentmarketing #digitalcreator #smartcontent`,
    (topic) => `${createTopicHashtags(topic)} #viralpost #engagementpost #sharevalue #creatorlife`,
    (topic) => `${createTopicHashtags(topic)} #learnonline #skillbuilding #helpfultips #dailycontent`,
  ],
  thumbnail: [
    (topic) => `${topic}: I Tried This For 7 Days`,
    (topic) => `Before You Try ${topic}, Watch This`,
    (topic) => `${topic} Changed Everything`,
    (topic) => `No One Expected This About ${topic}`,
    (topic) => `The Truth About ${topic}`,
    (topic) => `I Was Wrong About ${topic}`,
    (topic) => `Stop Making This ${topic} Mistake`,
    (topic) => `${topic} For Beginners`,
    (topic) => `This ${topic} Trick Works`,
    (topic) => `Do This Before ${topic}`,
    (topic) => `The Fastest Way To Improve ${topic}`,
    (topic) => `${topic}: What Nobody Shows You`,
    (topic) => `I Tested ${topic}`,
    (topic) => `${topic} Results Shocked Me`,
    (topic) => `Avoid This In ${topic}`,
    (topic) => `My Honest ${topic} Results`,
    (topic) => `${topic} In 5 Minutes`,
    (topic) => `The Simple ${topic} Guide`,
    (topic) => `${topic}: Start Here`,
    (topic) => `Watch This Before ${topic}`,
  ],
  hook: [
    (topic) => `Stop scrolling if you want better results with ${topic}.`,
    (topic) => `Nobody tells beginners this about ${topic}.`,
    (topic) => `I tried this simple ${topic} trick and it actually worked.`,
    (topic) => `Here is the truth about ${topic}.`,
    (topic) => `If you care about ${topic}, you need to hear this.`,
    (topic) => `Do not make this mistake with ${topic}.`,
    (topic) => `Here are 3 things I learned about ${topic}.`,
    (topic) => `This changed the way I think about ${topic}.`,
    (topic) => `If you are new to ${topic}, start here.`,
    (topic) => `Most people overcomplicate ${topic}.`,
    (topic) => `Save this before you try ${topic}.`,
    (topic) => `Here is a simple ${topic} idea you can use today.`,
    (topic) => `Want better ${topic} results? Try this first.`,
    (topic) => `The biggest ${topic} mistake is easier to fix than you think.`,
    (topic) => `This is what nobody explains about ${topic}.`,
    (topic) => `I wish I knew this about ${topic} earlier.`,
    (topic) => `Before you give up on ${topic}, watch this.`,
    (topic) => `This quick ${topic} tip can save you time.`,
    (topic) => `Beginners in ${topic} need to hear this.`,
    (topic) => `Here is how to make ${topic} easier.`,
  ],
}

const customizeOutput = (toolKey, idea, randomItem) => {
  const topic = cleanIdea(idea)
  const patterns = generatorPatterns[toolKey]

  if (!patterns) return `${topic}\n\n${randomItem}`

  return pickRandom(patterns)(topic, randomItem)
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

    const randomItem = pickRandom(tool.items)
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
              {tool.items.length}+ ideas
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
