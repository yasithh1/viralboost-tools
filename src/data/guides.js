export const guides = [
  {
    slug: 'how-to-create-better-youtube-thumbnails',
    title: 'How to Create Better YouTube Thumbnails',
    intro: 'A strong YouTube thumbnail should explain the video quickly, create curiosity, and stay readable on mobile.',
    sections: [
      ['Use one clear idea', 'Do not add too many messages to one thumbnail. Pick the main result, mistake, transformation, or question from the video and make that the visual focus.'],
      ['Keep the text short', 'Two to five words is usually enough. Text like "I Tried This", "Big Mistake", or "Before / After" is easier to read than a full sentence.'],
      ['Make the subject stand out', 'Use contrast, light, shadow, outlines, and background blur so the main person, product, or object is clear even at small size.'],
      ['Design for curiosity', 'A thumbnail should make someone want to know what happens next. Use expressions, arrows, comparison layouts, and strong visual contrast when it fits the topic.'],
    ],
  },
  {
    slug: 'best-thumbnail-text-ideas-for-beginners',
    title: 'Best Thumbnail Text Ideas for Beginners',
    intro: 'Beginner thumbnail text should be simple, bold, and easy to understand without reading the video title.',
    sections: [
      ['Use result-based text', 'Words like "30 Days Later", "Real Results", and "This Changed Everything" tell viewers there is a result worth seeing.'],
      ['Use warning text carefully', 'Text like "Do Not Do This" or "Big Mistake" works when the video truly explains a mistake. Do not use warning text if the video does not deliver.'],
      ['Use comparison text', 'Before / After, Old vs New, Cheap vs Expensive, and Beginner vs Pro are simple formats that viewers understand quickly.'],
      ['Test different styles', 'Try curiosity, result, mistake, and tutorial styles. Over time you will learn which text style matches your audience best.'],
    ],
  },
  {
    slug: 'how-to-make-facebook-posts-more-engaging',
    title: 'How to Make Facebook Posts More Engaging',
    intro: 'Facebook posts get more engagement when people can respond quickly with a vote, opinion, rating, or short answer.',
    sections: [
      ['Ask easy questions', 'Use A or B choices, rate 1 to 10 questions, fill-in-the-blank prompts, and simple opinion questions.'],
      ['Keep the post readable', 'Short lines and clear spacing help people understand the post fast. Avoid long paragraphs when the goal is comments.'],
      ['Use visuals with the question', 'A simple design with a bold question can perform better than plain text because it catches attention in the feed.'],
      ['End with a direct CTA', 'Use clear prompts like "Comment A or B", "Rate this from 1 to 10", or "Drop your answer below."'],
    ],
  },
  {
    slug: 'how-to-use-tiktok-hooks',
    title: 'How to Use TikTok Hooks',
    intro: 'A TikTok hook is the first line or first visual idea that gives people a reason to keep watching.',
    sections: [
      ['Start with the viewer problem', 'Speak directly to what the viewer wants or struggles with. Example: "Stop scrolling if you want better content."'],
      ['Create curiosity fast', 'Hooks like "Nobody tells beginners this" or "Here is the truth about..." work because they promise useful information.'],
      ['Match the video', 'Do not use a hook that promises something your video does not explain. Good hooks must lead into real value.'],
      ['Pair hook with cover text', 'Your TikTok cover and first line should support each other so people understand the video before tapping.'],
    ],
  },
  {
    slug: 'how-to-choose-colors-for-social-media-designs',
    title: 'How to Choose Colors for Social Media Designs',
    intro: 'Good colors make your design easier to notice, read, and remember.',
    sections: [
      ['Use contrast first', 'Text must be easy to read. Bright text on a dark background or dark text on a bright background usually works better than low-contrast colors.'],
      ['Pick one accent color', 'Yellow, lime, red, or orange can work well for attention. Use one main accent so the design does not feel messy.'],
      ['Match the niche', 'Fitness can use energetic colors, tech can use blue or neon, business can use premium dark tones, and motivation can use warm light or strong contrast.'],
      ['Keep brand consistency', 'If you post often, reuse similar colors, fonts, and layout styles so people recognize your content faster.'],
    ],
  },
]

export const getGuideBySlug = (slug) => guides.find((guide) => guide.slug === slug)
