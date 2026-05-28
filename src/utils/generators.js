const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

const cleanTopic = (topic) => topic.trim().replace(/\s+/g, ' ')

const topicWords = (topic) =>
  cleanTopic(topic)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(' ')
    .filter((word) => word.length > 2)

const hashtagBase = (topic) => {
  const words = topicWords(topic).slice(0, 5)
  const compact = words.join('')
  const title = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  return [...new Set([`#${compact}`, `#${title}`, ...words.map((word) => `#${word}`)])].filter(
    (tag) => tag.length > 1,
  )
}

const fillerTags = [
  '#contentcreator',
  '#socialmedia',
  '#creatorlife',
  '#dailycontent',
  '#viralpost',
  '#contentideas',
  '#smallbusiness',
  '#marketingtips',
  '#onlinegrowth',
  '#digitalcreator',
  '#reelsideas',
  '#tiktoktips',
  '#facebookpost',
  '#youtubecreator',
  '#brandgrowth',
]

const hashtagSet = (topic, count) => [...hashtagBase(topic), ...fillerTags].slice(0, count).join(' ')

const facebookPosts = [
  `Only smart users know this.\n\nQuestion:\nWhich one affects phone speed the most?\n\nA) Full storage\nB) Wallpaper\nC) Ringtone\nD) Font style\n\nComment your answer below.`,
  `Which one would you choose?\n\nA) Lower prices\nB) Better services\n\nComment A or B.`,
  `Complete this sentence:\n\nMy biggest goal this year is ________.\n\nComment your answer below.`,
  `Quick vote:\n\nWhat matters more when buying online?\n\nA) Fast delivery\nB) Low price\nC) Good reviews\nD) Easy returns\n\nVote in the comments.`,
  `Rate this from 1 to 10:\n\nPosting consistently is more important than posting perfectly.\n\nWhat score do you give it?`,
  `Opinion question:\n\nWhat is harder for creators?\n\nA) Getting ideas\nB) Editing content\nC) Staying consistent\nD) Growing followers\n\nComment below.`,
]

export const generateFacebookPost = () => randomItem(facebookPosts)

export const generateContentPack = (topic) => {
  const idea = cleanTopic(topic)
  return {
    'Facebook post idea': `Create a quick vote post about ${idea}: "What is the biggest challenge with ${idea}? A) Starting B) Staying consistent C) Getting results D) Finding time."`,
    Caption: `${idea} becomes easier when you keep it simple, stay consistent, and improve one step at a time.`,
    'TikTok hook': `Stop scrolling if you want better results with ${idea}.`,
    'Thumbnail text': `${idea.toUpperCase()} MADE SIMPLE`,
    Hashtags: hashtagSet(idea, 10),
    'Call-to-action': `Comment your biggest question about ${idea} below.`,
  }
}

const captionStyles = {
  Motivational: [
    (topic) => `${topic} starts with one small step. Keep moving forward.`,
    (topic) => `Do not wait for the perfect time to improve your ${topic}. Start today.`,
    (topic) => `Small progress in ${topic} is still progress.`,
    (topic) => `Your future results in ${topic} are built by what you do today.`,
    (topic) => `Stay consistent with ${topic}. The results will follow.`,
  ],
  Funny: [
    (topic) => `${topic} looked easy until I actually tried it.`,
    (topic) => `Me pretending I know everything about ${topic}.`,
    (topic) => `${topic}: simple in theory, dramatic in real life.`,
    (topic) => `Trying to master ${topic} one confused moment at a time.`,
    (topic) => `If ${topic} was easy, everyone would be doing it perfectly.`,
  ],
  Professional: [
    (topic) => `A clear strategy for ${topic} can save time and improve results.`,
    (topic) => `${topic} works best when the message is simple and useful.`,
    (topic) => `Use ${topic} to create value, build trust, and connect with the right audience.`,
    (topic) => `Strong ${topic} content starts with understanding your audience.`,
    (topic) => `Make ${topic} practical, focused, and easy to act on.`,
  ],
  Short: [
    (topic) => `${topic}, made simple.`,
    (topic) => `One idea. Better ${topic}.`,
    (topic) => `Start with ${topic}.`,
    (topic) => `${topic} tips that work.`,
    (topic) => `Keep ${topic} simple.`,
  ],
  Viral: [
    (topic) => `Nobody tells beginners this about ${topic}.`,
    (topic) => `The biggest mistake people make with ${topic}.`,
    (topic) => `I tried this ${topic} trick and it worked.`,
    (topic) => `Before you try ${topic}, read this.`,
    (topic) => `This changed how I think about ${topic}.`,
  ],
  Emotional: [
    (topic) => `${topic} can feel difficult at first, but every small step matters.`,
    (topic) => `If you are struggling with ${topic}, you are not alone.`,
    (topic) => `The journey with ${topic} teaches patience, confidence, and discipline.`,
    (topic) => `Sometimes ${topic} is not about perfection. It is about showing up.`,
    (topic) => `Your story with ${topic} can inspire someone else to begin.`,
  ],
}

export const generateCaptions = (topic, style) => captionStyles[style].map((template) => template(cleanTopic(topic)))

const hookPatterns = [
  (topic) => `Stop scrolling if you want to improve ${topic}.`,
  (topic) => `Nobody tells beginners this about ${topic}.`,
  (topic) => `I tried ${topic} for 7 days and this happened.`,
  (topic) => `Here is the truth about ${topic}.`,
  (topic) => `Do not make this mistake with ${topic}.`,
  (topic) => `If you are new to ${topic}, start here.`,
  (topic) => `Most people overcomplicate ${topic}.`,
  (topic) => `This simple ${topic} tip can save you time.`,
]

export const generateHook = (topic) => randomItem(hookPatterns)(cleanTopic(topic))

const thumbnailPatterns = [
  (topic) => `${topic.toUpperCase()} RESULTS`,
  () => '30 DAYS LATER',
  () => "DON'T DO THIS",
  () => 'I TRIED THIS',
  () => 'BEFORE / AFTER',
  () => 'THIS CHANGED EVERYTHING',
  () => 'NO ONE EXPECTED THIS',
  (topic) => `${topic.toUpperCase()} MISTAKES`,
  (topic) => `I TESTED ${topic.toUpperCase()}`,
  (topic) => `${topic.toUpperCase()} MADE EASY`,
]

export const generateThumbnailText = (topic) => randomItem(thumbnailPatterns)(cleanTopic(topic))

export const generateHashtags = (topic) => ({
  'Small set': hashtagSet(topic, 5),
  'Medium set': hashtagSet(topic, 10),
  'Large set': hashtagSet(topic, 15),
})

const replyData = {
  'Price asking': ['Please message us for the price details.', 'I can send you the price information in DM.', 'Thanks for asking. Contact us and we will help you with the price.'],
  'Interested customer': ['Thank you for your interest. We are happy to help.', 'Great. Please send us a message and we will guide you.', 'Thanks. Tell us what you need and we will share the details.'],
  'Order asking': ['Yes, you can place an order. Please send us your details.', 'Sure. Message us with your order request.', 'We can help with your order. Please contact us directly.'],
  'Availability question': ['Yes, it is available right now.', 'Please message us to confirm current availability.', 'Thanks for asking. We will check and update you quickly.'],
  'Positive comment': ['Thank you so much for your support.', 'We really appreciate your kind words.', 'Thanks. Your feedback means a lot to us.'],
  'Negative comment': ['Sorry about that. Please message us so we can help.', 'Thank you for your feedback. We will check this carefully.', 'We are sorry for the experience. Please contact us directly.'],
  'Thank you reply': ['You are most welcome.', 'Happy to help.', 'Thank you for being with us.'],
  'DM request': ['Please send us a DM and we will share the details.', 'Message us directly for more information.', 'Kindly inbox us so we can help you better.'],
}

const toneOpeners = {
  Friendly: ['Hi! ', 'Hello! ', 'Thanks for reaching out. '],
  Professional: ['Thank you for contacting us. ', 'Thank you for your message. ', 'We appreciate your interest. '],
  Short: ['', '', ''],
  Polite: ['Thank you kindly. ', 'Please allow us to help. ', 'We appreciate your message. '],
  'Sales-focused': ['Great choice. ', 'We can help you with that. ', 'This is available for interested customers. '],
}

export const generateReplies = (replyType, tone) =>
  replyData[replyType].map((reply, index) => `${toneOpeners[tone][index]}${reply}`)

const bioTemplates = {
  'TikTok bio': (topic) => [`${topic} tips daily`, `Helping you grow with ${topic}`, `${topic} ideas, tips, and motivation`, `Follow for simple ${topic} content`, `Making ${topic} easier one video at a time`],
  'Instagram bio': (topic) => [`${topic} content creator`, `Simple tips for better ${topic}`, `Helping creators with ${topic}`, `${topic} ideas and inspiration`, `Follow for useful ${topic} posts`],
  'Facebook page bio': (topic) => [`We share helpful ${topic} tips, ideas, and updates.`, `Your daily page for ${topic} content and inspiration.`, `Helping our community learn more about ${topic}.`, `Follow us for simple and useful ${topic} posts.`, `Practical ${topic} ideas for everyday people.`],
  'YouTube channel bio': (topic) => [`Videos about ${topic}, tips, and real examples.`, `Subscribe for helpful ${topic} tutorials and ideas.`, `Simple ${topic} videos for beginners and creators.`, `Learn ${topic} with clear, practical videos.`, `${topic} guides, reviews, and helpful content.`],
  'Freelancer bio': (topic) => [`Freelancer helping clients with ${topic}.`, `I create simple and effective ${topic} solutions.`, `Helping brands improve their ${topic}.`, `Available for custom ${topic} projects.`, `Creative freelancer focused on ${topic}.`],
  'Small business bio': (topic) => [`Quality ${topic} services for customers who value care.`, `Helping customers with reliable ${topic} solutions.`, `Your trusted place for ${topic}.`, `Simple, friendly, and reliable ${topic} service.`, `Message us for custom ${topic} support.`],
}

export const generateBios = (bioType, topic) => bioTemplates[bioType](cleanTopic(topic))

export const generateCtas = () => [
  'Comment your answer below',
  'Save this post for later',
  'Share this with a creator friend',
  'DM me for details',
  'Follow for more tips',
  'Tap the link to learn more',
  'Which one would you choose?',
  'Tag someone who needs this',
  'Message us to get started',
  'Try this today and tell us what happened',
]

const promptStyles = {
  'YouTube thumbnail': ['16:9', 'Bold face expression, high contrast background, bright yellow text, clear subject, dramatic lighting'],
  'Facebook engagement post': ['1:1', 'Clean social post design, readable question text, bright accents, simple layout, comment-friendly visual'],
  'Fitness motivation': ['1:1', 'Strong athlete pose, gym background, dramatic shadows, motivational bold text, high energy'],
  'Tech post': ['1:1', 'Modern smartphone or laptop setup, neon accents, clean tech background, clear title space'],
  'Business post': ['1:1', 'Professional workspace, confident business owner, clean premium style, brand-friendly colors'],
  'Cinematic vlog': ['16:9', 'Cinematic street or travel scene, warm color grading, subject in motion, clean text area'],
}

export const generateImagePrompt = (style, topic) => {
  const [ratio, notes] = promptStyles[style]
  const idea = cleanTopic(topic)
  return {
    'AI image prompt': `Create a high-quality ${style.toLowerCase()} image about ${idea}. Use a clear main subject, strong composition, sharp details, and space for text overlay.`,
    'Suggested text': generateThumbnailText(idea),
    'Aspect ratio': ratio,
    'Design style notes': notes,
  }
}
