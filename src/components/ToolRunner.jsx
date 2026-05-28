import { useState } from 'react'
import CopyButton from './CopyButton'
import {
  generateBios,
  generateCaptions,
  generateContentPack,
  generateCtas,
  generateFacebookPost,
  generateHashtags,
  generateHook,
  generateReplies,
  generateThumbnailPlan,
  generateThumbnailText,
} from '../utils/generators'

const captionStyles = ['Motivational', 'Funny', 'Professional', 'Short', 'Viral', 'Emotional']
const replyTypes = [
  'Price asking',
  'Interested customer',
  'Order asking',
  'Availability question',
  'Positive comment',
  'Negative comment',
  'Thank you reply',
  'DM request',
]
const replyTones = ['Friendly', 'Professional', 'Short', 'Polite', 'Sales-focused']
const bioTypes = [
  'TikTok bio',
  'Instagram bio',
  'Facebook page bio',
  'YouTube channel bio',
  'Freelancer bio',
  'Small business bio',
]
const platforms = ['YouTube', 'Facebook', 'TikTok', 'Instagram']
const niches = [
  'Fitness',
  'Tech',
  'Motivation',
  'Vlog',
  'Business',
  'Gaming',
  'Education',
  'AI Tools',
  'Social Media Growth',
]
const thumbnailGoals = [
  'Get clicks',
  'Get comments',
  'Promote service',
  'Explain topic',
  'Build brand',
  'Make people curious',
]
const thumbnailStyles = ['Cinematic', 'Modern', 'Dark', 'Colorful', 'Minimal', 'Viral', 'Professional']

function Field({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-cyan-50">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none transition placeholder:text-cyan-100/35"
      />
    </label>
  )
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-cyan-50">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="glass-input mt-2 w-full rounded-xl px-4 py-3 outline-none transition"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function OutputList({ items }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="glass-card rounded-2xl p-4">
          <p className="whitespace-pre-wrap leading-7 text-slate-100">{item}</p>
          <div className="mt-3">
            <CopyButton text={item} />
          </div>
        </div>
      ))}
    </div>
  )
}

function OutputObject({ output }) {
  return (
    <div className="mt-6 space-y-3">
      {Object.entries(output).map(([label, value]) => (
        <div key={label} className="glass-card rounded-2xl p-4">
          <p className="aqua-text text-sm font-black uppercase tracking-[0.18em]">{label}</p>
          <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-100">{value}</p>
          <div className="mt-3">
            <CopyButton text={value} />
          </div>
        </div>
      ))}
    </div>
  )
}

function ToolRunner({ tool }) {
  const [topic, setTopic] = useState('')
  const [captionStyle, setCaptionStyle] = useState(captionStyles[0])
  const [replyType, setReplyType] = useState(replyTypes[0])
  const [replyTone, setReplyTone] = useState(replyTones[0])
  const [bioType, setBioType] = useState(bioTypes[0])
  const [platform, setPlatform] = useState(platforms[0])
  const [niche, setNiche] = useState(niches[0])
  const [thumbnailGoal, setThumbnailGoal] = useState(thumbnailGoals[0])
  const [thumbnailStyle, setThumbnailStyle] = useState(thumbnailStyles[0])
  const [error, setError] = useState('')
  const [output, setOutput] = useState(null)

  const requiresTopic = ![
    'facebook-engagement-post-generator',
    'comment-reply-generator',
    'call-to-action-generator',
    'thumbnail-idea-prompt-generator',
  ].includes(tool.slug)

  const ensureTopic = () => {
    if (requiresTopic && !topic.trim()) {
      setError('Please enter your idea first.')
      setOutput(null)
      return false
    }
    setError('')
    return true
  }

  const generate = () => {
    if (!ensureTopic()) return

    const actions = {
      'content-pack-generator': () => generateContentPack(topic),
      'facebook-engagement-post-generator': () => generateFacebookPost(),
      'caption-generator': () => generateCaptions(topic, captionStyle),
      'tiktok-hook-generator': () => [generateHook(topic)],
      'thumbnail-text-generator': () => [generateThumbnailText(topic)],
      'hashtag-generator': () => generateHashtags(topic),
      'comment-reply-generator': () => generateReplies(replyType, replyTone),
      'bio-generator': () => generateBios(bioType, topic),
      'call-to-action-generator': () => generateCtas(),
      'thumbnail-idea-prompt-generator': () =>
        generateThumbnailPlan({
          platform,
          niche,
          goal: thumbnailGoal,
          style: thumbnailStyle,
          topic,
        }),
    }

    setOutput(actions[tool.slug]())
  }

  return (
    <div className="glass-panel rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-4">
        {requiresTopic && (
          <Field
            label="Your idea or topic"
            value={topic}
            onChange={setTopic}
            placeholder="Example: gym motivation, cake business, phone speed tips"
          />
        )}
        {tool.slug === 'caption-generator' && (
          <SelectField
            label="Caption style"
            value={captionStyle}
            onChange={setCaptionStyle}
            options={captionStyles}
          />
        )}
        {tool.slug === 'comment-reply-generator' && (
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField
              label="Comment type"
              value={replyType}
              onChange={setReplyType}
              options={replyTypes}
            />
            <SelectField label="Tone" value={replyTone} onChange={setReplyTone} options={replyTones} />
          </div>
        )}
        {tool.slug === 'bio-generator' && (
          <SelectField label="Bio type" value={bioType} onChange={setBioType} options={bioTypes} />
        )}
        {tool.slug === 'thumbnail-idea-prompt-generator' && (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField label="Platform" value={platform} onChange={setPlatform} options={platforms} />
              <SelectField label="Niche" value={niche} onChange={setNiche} options={niches} />
              <SelectField
                label="Goal"
                value={thumbnailGoal}
                onChange={setThumbnailGoal}
                options={thumbnailGoals}
              />
              <SelectField
                label="Style"
                value={thumbnailStyle}
                onChange={setThumbnailStyle}
                options={thumbnailStyles}
              />
            </div>
            <Field
              label="Optional topic"
              value={topic}
              onChange={setTopic}
              placeholder="Example: phone battery tips, gym transformation, AI tools for creators"
            />
          </>
        )}
      </div>

      {error && <p className="mt-4 text-sm font-semibold text-red-300">{error}</p>}

      <button
        type="button"
        onClick={generate}
        className="glow-button mt-6 w-full rounded-full px-5 py-3 font-black transition"
      >
        Generate
      </button>

      {!output && (
        <div className="glass-card mt-6 rounded-2xl p-5 text-center text-cyan-50/65">
          Add the details above and generate a ready-to-copy result.
        </div>
      )}
      {Array.isArray(output) && <OutputList items={output} />}
      {output && !Array.isArray(output) && (
        <>
          {tool.slug === 'thumbnail-idea-prompt-generator' && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CopyButton
                label="Copy Full Plan"
                text={Object.entries(output)
                  .map(([label, value]) => `${label}:\n${value}`)
                  .join('\n\n')}
              />
              <CopyButton label="Copy AI Prompt" text={output['AI Image Prompt']} />
              <button
                type="button"
                onClick={generate}
                className="ghost-button rounded-full px-4 py-2 text-sm font-bold transition"
              >
                Generate Another
              </button>
            </div>
          )}
          <OutputObject output={output} />
        </>
      )}
    </div>
  )
}

export default ToolRunner
