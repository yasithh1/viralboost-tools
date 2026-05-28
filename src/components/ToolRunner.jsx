import { useState } from 'react'
import CopyButton from './CopyButton'
import {
  generateFacebookPost,
  generateHashtags,
  generateHook,
  generateThumbnailPlan,
  generateThumbnailText,
} from '../utils/generators'

const categories = ['Fitness', 'Tech', 'Motivation', 'Business', 'Creator', 'Vlog', 'Food', 'Travel']
const platforms = ['YouTube', 'Facebook', 'TikTok', 'Instagram']
const niches = ['Fitness', 'Tech', 'Motivation', 'Vlog', 'Business', 'Gaming', 'Education', 'AI Tools']
const styles = ['Cinematic', 'Modern', 'Dark', 'Colorful', 'Minimal', 'Viral', 'Professional']
const goals = ['Get clicks', 'Get comments', 'Promote service', 'Explain topic', 'Build brand']
const whatsAppLink =
  'https://wa.me/947XXXXXXXX?text=Hi%20I%20want%20to%20order%20a%20design'

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
  const [category, setCategory] = useState(categories[0])
  const [platform, setPlatform] = useState(platforms[0])
  const [niche, setNiche] = useState(niches[0])
  const [style, setStyle] = useState(styles[0])
  const [goal, setGoal] = useState(goals[0])
  const [output, setOutput] = useState(null)

  const generate = () => {
    const actions = {
      'facebook-engagement-idea-generator': () => [generateFacebookPost()],
      'thumbnail-text-generator': () => [generateThumbnailText()],
      'tiktok-hook-generator': () => [generateHook()],
      'hashtag-set-generator': () => generateHashtags(category),
      'thumbnail-design-planner': () => generateThumbnailPlan({ platform, niche, style, goal }),
    }

    setOutput(actions[tool.slug]())
  }

  return (
    <div className="glass-panel rounded-[2rem] p-5 sm:p-8">
      <div className="grid gap-4">
        {tool.slug === 'hashtag-set-generator' && (
          <SelectField label="Category" value={category} onChange={setCategory} options={categories} />
        )}
        {tool.slug === 'thumbnail-design-planner' && (
          <div className="grid gap-4 md:grid-cols-2">
            <SelectField label="Platform" value={platform} onChange={setPlatform} options={platforms} />
            <SelectField label="Niche" value={niche} onChange={setNiche} options={niches} />
            <SelectField label="Style" value={style} onChange={setStyle} options={styles} />
            <SelectField label="Goal" value={goal} onChange={setGoal} options={goals} />
          </div>
        )}
        {!['hashtag-set-generator', 'thumbnail-design-planner'].includes(tool.slug) && (
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="aqua-text text-sm font-black uppercase tracking-[0.18em]">No input needed</p>
            <p className="mt-2 text-sm leading-6 text-lime-50/75">
              Click Generate to get a random ready-to-copy result from preset templates.
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={generate}
        className="glow-button mt-6 w-full rounded-full px-5 py-3 font-black transition"
      >
        {output ? 'Generate Another' : 'Generate'}
      </button>

      {!output && (
        <div className="glass-card mt-6 rounded-2xl p-5 text-center text-cyan-50/65">
          Generate a preset idea or choose dropdown options to create a design plan.
        </div>
      )}
      {Array.isArray(output) && <OutputList items={output} />}
      {output && !Array.isArray(output) && <OutputObject output={output} />}

      <div className="glass-card mt-6 rounded-2xl p-5 text-center">
        <p className="font-black text-white">Need custom design? Starting from $2.</p>
        <a
          href={whatsAppLink}
          className="glow-button mt-4 inline-flex rounded-full px-5 py-3 font-black transition"
        >
          Contact me on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default ToolRunner
