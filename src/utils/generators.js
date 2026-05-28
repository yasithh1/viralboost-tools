const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

const pickMany = (items, count) => [...items].sort(() => Math.random() - 0.5).slice(0, count)

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
  '#creatorgrowth',
  '#postideas',
  '#contentstrategy',
  '#growthtips',
  '#viralhooks',
  '#learnonline',
  '#businesscontent',
  '#socialgrowth',
  '#creativeideas',
]

const hashtagSet = (topic, count) => [...hashtagBase(topic), ...fillerTags].slice(0, count).join(' ')

const facebookPosts = [
  `Only smart users know this.\n\nQuestion:\nWhich one affects phone speed the most?\n\nA) Full storage\nB) Wallpaper\nC) Ringtone\nD) Font style\n\nComment your answer below.`,
  `Which one would you choose?\n\nA) Lower prices\nB) Better services\n\nComment A or B.`,
  `Complete this sentence:\n\nMy biggest goal this year is ________.\n\nComment your answer below.`,
  `Quick vote:\n\nWhat matters more when buying online?\n\nA) Fast delivery\nB) Low price\nC) Good reviews\nD) Easy returns\n\nVote in the comments.`,
  `Rate this from 1 to 10:\n\nPosting consistently is more important than posting perfectly.\n\nWhat score do you give it?`,
  `Opinion question:\n\nWhat is harder for creators?\n\nA) Getting ideas\nB) Editing content\nC) Staying consistent\nD) Growing followers\n\nComment below.`,
  `This or that?\n\nWhich content would you watch first?\n\nA) Tips and tricks\nB) Real results\n\nComment A or B.`,
  `Fill in the blank:\n\nThe one thing I want to improve this month is ________.\n\nDrop your answer below.`,
  `Quick challenge:\n\nDescribe your page or business in 3 words.\n\nBest answer gets pinned.`,
  `Vote now:\n\nWhat should we post next?\n\nA) Beginner tips\nB) Mistakes to avoid\nC) Examples\nD) Behind the scenes`,
  `Be honest:\n\nWhat takes the most time?\n\nA) Planning\nB) Filming\nC) Editing\nD) Posting\n\nComment your choice.`,
  `One word answer:\n\nWhat motivates you to keep creating?\n\nComment below.`,
]

export const generateFacebookPost = () => randomItem(facebookPosts)

export const generateContentPack = (topic) => {
  const idea = cleanTopic(topic)
  const facebookIdeas = [
    `Create a quick vote post about ${idea}: "What is the biggest challenge with ${idea}? A) Starting B) Staying consistent C) Getting results D) Finding time."`,
    `Create a this-or-that post about ${idea}: "Would you choose faster results or better quality? Comment A or B."`,
    `Create a fill-in-the-blank post: "My biggest goal with ${idea} is ________."`,
    `Create an opinion post: "What is one mistake beginners make with ${idea}?"`,
  ]
  const captions = [
    `${idea} becomes easier when you keep it simple, stay consistent, and improve one step at a time.`,
    `Small steps with ${idea} can create real results when you keep going.`,
    `Do not overthink ${idea}. Start with one clear action today.`,
    `Better ${idea} content starts with a useful idea and a clear message.`,
  ]
  const hooks = [
    `Stop scrolling if you want better results with ${idea}.`,
    `Nobody tells beginners this about ${idea}.`,
    `I tried this simple ${idea} tip and it actually worked.`,
    `Do not make this mistake with ${idea}.`,
  ]
  const thumbnailTexts = [
    `${idea.toUpperCase()} MADE SIMPLE`,
    `I TRIED ${idea.toUpperCase()}`,
    `${idea.toUpperCase()} MISTAKES`,
    `BEFORE YOU TRY ${idea.toUpperCase()}`,
  ]
  const ctas = [
    `Comment your biggest question about ${idea} below.`,
    `Save this if you want to improve your ${idea}.`,
    `Share this with someone learning ${idea}.`,
    `Follow for more simple ${idea} tips.`,
  ]

  return {
    'Facebook post idea': randomItem(facebookIdeas),
    Caption: randomItem(captions),
    'TikTok hook': randomItem(hooks),
    'Thumbnail text': randomItem(thumbnailTexts),
    Hashtags: hashtagSet(idea, 10),
    'Call-to-action': randomItem(ctas),
  }
}

const captionStyles = {
  Motivational: [
    (topic) => `${topic} starts with one small step. Keep moving forward.`,
    (topic) => `Do not wait for the perfect time to improve your ${topic}. Start today.`,
    (topic) => `Small progress in ${topic} is still progress.`,
    (topic) => `Your future results in ${topic} are built by what you do today.`,
    (topic) => `Stay consistent with ${topic}. The results will follow.`,
    (topic) => `You do not need perfect ${topic}. You need progress.`,
    (topic) => `Every expert in ${topic} started with a simple first step.`,
    (topic) => `Keep showing up for ${topic}, even when results feel slow.`,
  ],
  Funny: [
    (topic) => `${topic} looked easy until I actually tried it.`,
    (topic) => `Me pretending I know everything about ${topic}.`,
    (topic) => `${topic}: simple in theory, dramatic in real life.`,
    (topic) => `Trying to master ${topic} one confused moment at a time.`,
    (topic) => `If ${topic} was easy, everyone would be doing it perfectly.`,
    (topic) => `${topic} is my personality now, apparently.`,
    (topic) => `Plot twist: ${topic} needed more patience than expected.`,
    (topic) => `Me after learning one new thing about ${topic}: expert mode activated.`,
  ],
  Professional: [
    (topic) => `A clear strategy for ${topic} can save time and improve results.`,
    (topic) => `${topic} works best when the message is simple and useful.`,
    (topic) => `Use ${topic} to create value, build trust, and connect with the right audience.`,
    (topic) => `Strong ${topic} content starts with understanding your audience.`,
    (topic) => `Make ${topic} practical, focused, and easy to act on.`,
    (topic) => `A focused ${topic} message helps your audience make faster decisions.`,
    (topic) => `${topic} content performs better when it solves a real problem.`,
    (topic) => `Use clear examples to make ${topic} easier to understand.`,
  ],
  Short: [
    (topic) => `${topic}, made simple.`,
    (topic) => `One idea. Better ${topic}.`,
    (topic) => `Start with ${topic}.`,
    (topic) => `${topic} tips that work.`,
    (topic) => `Keep ${topic} simple.`,
    (topic) => `${topic}. Start here.`,
    (topic) => `Better ${topic}, less stress.`,
    (topic) => `${topic} in simple steps.`,
  ],
  Viral: [
    (topic) => `Nobody tells beginners this about ${topic}.`,
    (topic) => `The biggest mistake people make with ${topic}.`,
    (topic) => `I tried this ${topic} trick and it worked.`,
    (topic) => `Before you try ${topic}, read this.`,
    (topic) => `This changed how I think about ${topic}.`,
    (topic) => `The ${topic} tip I wish I knew earlier.`,
    (topic) => `This is why your ${topic} is not working yet.`,
    (topic) => `I tested ${topic} so you do not have to.`,
  ],
  Emotional: [
    (topic) => `${topic} can feel difficult at first, but every small step matters.`,
    (topic) => `If you are struggling with ${topic}, you are not alone.`,
    (topic) => `The journey with ${topic} teaches patience, confidence, and discipline.`,
    (topic) => `Sometimes ${topic} is not about perfection. It is about showing up.`,
    (topic) => `Your story with ${topic} can inspire someone else to begin.`,
    (topic) => `${topic} can feel heavy, but small wins still matter.`,
    (topic) => `If ${topic} feels hard today, take the next tiny step.`,
    (topic) => `Your journey with ${topic} is still worth sharing.`,
  ],
}

export const generateCaptions = (topic, style) =>
  pickMany(captionStyles[style], 5).map((template) => template(cleanTopic(topic)))

const hookPatterns = [
  (topic) => `Stop scrolling if you want to improve ${topic}.`,
  (topic) => `Nobody tells beginners this about ${topic}.`,
  (topic) => `I tried ${topic} for 7 days and this happened.`,
  (topic) => `Here is the truth about ${topic}.`,
  (topic) => `Do not make this mistake with ${topic}.`,
  (topic) => `If you are new to ${topic}, start here.`,
  (topic) => `Most people overcomplicate ${topic}.`,
  (topic) => `This simple ${topic} tip can save you time.`,
  (topic) => `Before you give up on ${topic}, try this.`,
  (topic) => `Here are 3 things I learned about ${topic}.`,
  (topic) => `This changed the way I do ${topic}.`,
  (topic) => `If your ${topic} is not working, this may be why.`,
  (topic) => `Save this ${topic} tip for later.`,
  (topic) => `Beginners in ${topic} need to hear this.`,
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
  (topic) => `THE ${topic.toUpperCase()} SECRET`,
  (topic) => `START ${topic.toUpperCase()} HERE`,
  (topic) => `${topic.toUpperCase()} IN 5 MINUTES`,
  (topic) => `WATCH BEFORE ${topic.toUpperCase()}`,
  (topic) => `${topic.toUpperCase()} HACKS`,
]

export const generateThumbnailText = (topic) => randomItem(thumbnailPatterns)(cleanTopic(topic))

export const generateHashtags = (topic) => ({
  'Small set': hashtagSet(topic, 5),
  'Medium set': hashtagSet(topic, 10),
  'Large set': hashtagSet(topic, 15),
})

const replyData = {
  'Price asking': ['Please message us for the price details.', 'I can send you the price information in DM.', 'Thanks for asking. Contact us and we will help you with the price.', 'Sure, I can share the price details with you privately.', 'Thanks for your interest. Please send us a message for the latest price.'],
  'Interested customer': ['Thank you for your interest. We are happy to help.', 'Great. Please send us a message and we will guide you.', 'Thanks. Tell us what you need and we will share the details.', 'Happy to help. Please let us know what you are looking for.', 'Thanks for reaching out. We can guide you with the next steps.'],
  'Order asking': ['Yes, you can place an order. Please send us your details.', 'Sure. Message us with your order request.', 'We can help with your order. Please contact us directly.', 'Yes, orders are welcome. Please share what you need.', 'Thanks. Send your order details and we will confirm everything.'],
  'Availability question': ['Yes, it is available right now.', 'Please message us to confirm current availability.', 'Thanks for asking. We will check and update you quickly.', 'Availability can change, so please contact us for the latest update.', 'Yes, we can help you check the current availability.'],
  'Positive comment': ['Thank you so much for your support.', 'We really appreciate your kind words.', 'Thanks. Your feedback means a lot to us.', 'So glad you liked it. Thank you for the support.', 'Thank you. We are happy to hear that.'],
  'Negative comment': ['Sorry about that. Please message us so we can help.', 'Thank you for your feedback. We will check this carefully.', 'We are sorry for the experience. Please contact us directly.', 'Thanks for letting us know. We want to understand and help.', 'We appreciate the feedback and will look into this.'],
  'Thank you reply': ['You are most welcome.', 'Happy to help.', 'Thank you for being with us.', 'Anytime. We appreciate your support.', 'Glad we could help.'],
  'DM request': ['Please send us a DM and we will share the details.', 'Message us directly for more information.', 'Kindly inbox us so we can help you better.', 'Please contact us privately and we will guide you.', 'Send us a message and we will reply with the details.'],
}

const toneOpeners = {
  Friendly: ['Hi! ', 'Hello! ', 'Thanks for reaching out. '],
  Professional: ['Thank you for contacting us. ', 'Thank you for your message. ', 'We appreciate your interest. '],
  Short: ['', '', ''],
  Polite: ['Thank you kindly. ', 'Please allow us to help. ', 'We appreciate your message. '],
  'Sales-focused': ['Great choice. ', 'We can help you with that. ', 'This is available for interested customers. '],
}

export const generateReplies = (replyType, tone) =>
  pickMany(replyData[replyType], 3).map((reply, index) => `${toneOpeners[tone][index]}${reply}`)

const bioTemplates = {
  'TikTok bio': (topic) => [`${topic} tips daily`, `Helping you grow with ${topic}`, `${topic} ideas, tips, and motivation`, `Follow for simple ${topic} content`, `Making ${topic} easier one video at a time`, `Real ${topic} tips for beginners`, `${topic} content that helps you improve`],
  'Instagram bio': (topic) => [`${topic} content creator`, `Simple tips for better ${topic}`, `Helping creators with ${topic}`, `${topic} ideas and inspiration`, `Follow for useful ${topic} posts`, `Making ${topic} easier to understand`, `Daily ${topic} value for creators`],
  'Facebook page bio': (topic) => [`We share helpful ${topic} tips, ideas, and updates.`, `Your daily page for ${topic} content and inspiration.`, `Helping our community learn more about ${topic}.`, `Follow us for simple and useful ${topic} posts.`, `Practical ${topic} ideas for everyday people.`, `Useful ${topic} posts for our community.`, `Simple updates and tips about ${topic}.`],
  'YouTube channel bio': (topic) => [`Videos about ${topic}, tips, and real examples.`, `Subscribe for helpful ${topic} tutorials and ideas.`, `Simple ${topic} videos for beginners and creators.`, `Learn ${topic} with clear, practical videos.`, `${topic} guides, reviews, and helpful content.`, `Weekly ${topic} videos made simple.`, `Helping you understand ${topic} one video at a time.`],
  'Freelancer bio': (topic) => [`Freelancer helping clients with ${topic}.`, `I create simple and effective ${topic} solutions.`, `Helping brands improve their ${topic}.`, `Available for custom ${topic} projects.`, `Creative freelancer focused on ${topic}.`, `Reliable support for your ${topic} needs.`, `Helping small brands with better ${topic}.`],
  'Small business bio': (topic) => [`Quality ${topic} services for customers who value care.`, `Helping customers with reliable ${topic} solutions.`, `Your trusted place for ${topic}.`, `Simple, friendly, and reliable ${topic} service.`, `Message us for custom ${topic} support.`, `Affordable ${topic} service with friendly support.`, `Local service for better ${topic}.`],
}

export const generateBios = (bioType, topic) => pickMany(bioTemplates[bioType](cleanTopic(topic)), 5)

const ctaLines = [
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
  'Send this to someone who needs it',
  'Which tip helped you most?',
  'Follow for simple daily ideas',
  'Contact us for custom help',
  'Tell us your biggest challenge',
  'Use this idea in your next post',
  'Reply with YES if you want more',
  'Click follow before you forget',
  'Share your opinion in the comments',
  'Ask your question below',
]

export const generateCtas = () => pickMany(ctaLines, 10)

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
