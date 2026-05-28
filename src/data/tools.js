export const tools = [
  {
    slug: 'content-pack-generator',
    emoji: 'Pack',
    name: 'Content Pack Generator',
    benefit: 'Turn one idea into a complete post package with caption, hook, thumbnail text, hashtags, and CTA.',
    keywords: 'free content pack generator for creators, social media content package, post idea generator',
  },
  {
    slug: 'facebook-engagement-post-generator',
    emoji: 'FB',
    name: 'Facebook Engagement Post Generator',
    benefit: 'Generate quiz, vote, this-or-that, rate, opinion, and fill-in-the-blank posts.',
    keywords: 'free Facebook engagement post generator, Facebook post ideas, comment post generator',
  },
  {
    slug: 'caption-generator',
    emoji: 'Cap',
    name: 'Caption Generator',
    benefit: 'Generate five captions from one topic in motivational, funny, professional, short, viral, or emotional style.',
    keywords: 'free caption generator, reels captions, social media caption ideas',
  },
  {
    slug: 'tiktok-hook-generator',
    emoji: 'Hook',
    name: 'TikTok Hook Generator',
    benefit: 'Create strong first lines that help short videos start with curiosity and clarity.',
    keywords: 'free TikTok hook generator, viral video hooks, short video first lines',
  },
  {
    slug: 'thumbnail-text-generator',
    emoji: 'Text',
    name: 'Thumbnail Text Generator',
    benefit: 'Generate bold short text ideas for YouTube thumbnails, reels covers, and Facebook videos.',
    keywords: 'thumbnail text generator, YouTube thumbnail ideas, reel cover text',
  },
  {
    slug: 'hashtag-generator',
    emoji: 'Tags',
    name: 'Hashtag Generator',
    benefit: 'Create small, medium, and large hashtag sets from your topic.',
    keywords: 'free hashtag generator, TikTok hashtags, Instagram hashtag sets',
  },
  {
    slug: 'comment-reply-generator',
    emoji: 'Reply',
    name: 'Comment Reply Generator',
    benefit: 'Generate replies for price questions, interested customers, orders, positive comments, and negative comments.',
    keywords: 'customer comment reply generator, Facebook page reply ideas, small business replies',
  },
  {
    slug: 'bio-generator',
    emoji: 'Bio',
    name: 'Bio Generator',
    benefit: 'Generate short bios for TikTok, Instagram, Facebook pages, YouTube channels, freelancers, and businesses.',
    keywords: 'bio generator for creators, Instagram bio ideas, small business bio',
  },
  {
    slug: 'call-to-action-generator',
    emoji: 'CTA',
    name: 'Call-To-Action Generator',
    benefit: 'Generate CTA lines for posts, captions, sales messages, and short videos.',
    keywords: 'call to action generator, CTA ideas for captions, post CTA lines',
  },
  {
    slug: 'thumbnail-idea-prompt-generator',
    emoji: 'Plan',
    name: 'Thumbnail Idea & Prompt Generator',
    benefit: 'Generate a full thumbnail design plan with concept, text, placement, subject, background, AI prompt, and editing notes.',
    keywords: 'thumbnail idea generator, AI thumbnail prompt generator, YouTube thumbnail design plan, Canva thumbnail ideas',
  },
]

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug)
