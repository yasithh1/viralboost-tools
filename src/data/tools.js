export const tools = [
  {
    slug: 'facebook-engagement-idea-generator',
    emoji: 'FB',
    name: 'Facebook Engagement Idea Generator',
    benefit: 'Generate ready-to-use quiz, vote, this-or-that, rate, opinion, and fill-in-the-blank post ideas.',
    keywords: 'free Facebook engagement ideas, Facebook post ideas, comment post generator',
  },
  {
    slug: 'thumbnail-text-generator',
    emoji: 'Text',
    name: 'Thumbnail Text Generator',
    benefit: 'Generate bold preset thumbnail text ideas for YouTube thumbnails, reel covers, and Facebook videos.',
    keywords: 'thumbnail text generator, YouTube thumbnail text ideas, reel cover text',
  },
  {
    slug: 'tiktok-hook-generator',
    emoji: 'Hook',
    name: 'TikTok Hook Generator',
    benefit: 'Generate preset short video hooks for TikTok, Instagram Reels, and YouTube Shorts.',
    keywords: 'free TikTok hook generator, short video hooks, viral hook ideas',
  },
  {
    slug: 'hashtag-set-generator',
    emoji: 'Tags',
    name: 'Hashtag Set Generator',
    benefit: 'Choose a category and generate small, medium, and large hashtag sets.',
    keywords: 'hashtag set generator, TikTok hashtags, Instagram hashtags, creator hashtags',
  },
  {
    slug: 'thumbnail-design-planner',
    emoji: 'Plan',
    name: 'Thumbnail Design Planner',
    benefit: 'Use dropdowns to generate a full thumbnail design plan with concept, text, layout, prompt, and editing notes.',
    keywords: 'thumbnail design planner, YouTube thumbnail plan, Canva thumbnail ideas, thumbnail prompt',
  },
]

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug)
