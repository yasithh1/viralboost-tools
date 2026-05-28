import { Navigate, useParams } from 'react-router-dom'
import CopyButton from '../components/CopyButton'
import PageHero from '../components/PageHero'
import ToolRunner from '../components/ToolRunner'
import { getToolBySlug } from '../data/tools'

function ToolPage() {
  const { toolSlug } = useParams()
  const tool = getToolBySlug(toolSlug)

  if (!tool) return <Navigate to="/tools" replace />

  return (
    <>
      <PageHero eyebrow="Free Tool" title={tool.name} text={tool.benefit} />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ToolRunner tool={tool} />
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-card mx-auto max-w-4xl rounded-[1.5rem] p-6">
          <h2 className="text-2xl font-black text-white">About this tool</h2>
          <p className="mt-4 leading-7 text-lime-50/75">
            {tool.name} is a free template-based tool for creators and small
            business owners. It helps you move faster when you need practical
            ideas for Facebook posts, short videos, thumbnail text, hashtags,
            or design planning. Keywords this page supports naturally include:
            {' '}
            {tool.keywords}.
          </p>
          <div className="mt-5">
            <CopyButton text={window.location.href} label="Copy page link" />
          </div>
        </div>
      </section>
    </>
  )
}

export default ToolPage
