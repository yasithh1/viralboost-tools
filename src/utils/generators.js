const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

const hashtagData = {
  Fitness: [
    '#fitness',
    '#fitnessmotivation',
    '#gymjourney',
    '#workoutlife',
    '#discipline',
    '#fitnesstips',
    '#gymmotivation',
    '#healthylifestyle',
    '#strengthtraining',
    '#fitnessgoals',
    '#homeworkout',
    '#musclebuild',
    '#weightlossjourney',
    '#fitcreator',
    '#dailyfitness',
  ],
  Tech: [
    '#techtips',
    '#technology',
    '#androidtips',
    '#iphonetips',
    '#gadgets',
    '#smartphone',
    '#techcreator',
    '#digitaltools',
    '#aitools',
    '#productivity',
    '#appreview',
    '#techhacks',
    '#futuretech',
    '#learntech',
    '#techcontent',
  ],
  Motivation: [
    '#motivation',
    '#dailymotivation',
    '#mindset',
    '#successhabits',
    '#discipline',
    '#goalsetting',
    '#selfgrowth',
    '#inspiration',
    '#keepgoing',
    '#positivevibes',
    '#growthmindset',
    '#motivationalquotes',
    '#lifeadvice',
    '#successmindset',
    '#dreambig',
  ],
  Business: [
    '#smallbusiness',
    '#businessowner',
    '#marketingtips',
    '#brandgrowth',
    '#entrepreneurship',
    '#businessideas',
    '#localbusiness',
    '#salesstrategy',
    '#businessgrowth',
    '#startupmindset',
    '#contentmarketing',
    '#onlinebusiness',
    '#customertrust',
    '#digitalmarketing',
    '#businesscontent',
  ],
  Creator: [
    '#contentcreator',
    '#creatorlife',
    '#contentideas',
    '#socialmedia',
    '#dailycontent',
    '#creatorgrowth',
    '#viralpost',
    '#postideas',
    '#reelsideas',
    '#tiktoktips',
    '#youtubecreator',
    '#socialgrowth',
    '#contentstrategy',
    '#onlinecreator',
    '#creativeideas',
  ],
  Vlog: [
    '#vlog',
    '#vlogger',
    '#dailylife',
    '#lifestylevlog',
    '#travelvlog',
    '#dayinmylife',
    '#behindthescenes',
    '#creatorvlog',
    '#lifeupdate',
    '#vloglife',
    '#storytime',
    '#cinematicvlog',
    '#youtubevlog',
    '#reelsvlog',
    '#vlogcontent',
  ],
  Food: [
    '#food',
    '#foodlover',
    '#recipeideas',
    '#homecooking',
    '#foodcontent',
    '#easyrecipes',
    '#foodbusiness',
    '#tastyfood',
    '#cookingtips',
    '#foodcreator',
    '#dessertideas',
    '#streetfood',
    '#mealideas',
    '#foodphotography',
    '#dailyfood',
  ],
  Travel: [
    '#travel',
    '#travelvlog',
    '#exploremore',
    '#travelideas',
    '#adventure',
    '#wanderlust',
    '#travelcreator',
    '#tripideas',
    '#naturetravel',
    '#travelcontent',
    '#beautifulplaces',
    '#vacationideas',
    '#travelreels',
    '#destination',
    '#exploretheworld',
  ],
}

const facebookPosts = [
  `Quiz time:\n\nWhich one helps a page grow faster?\n\nA) Better captions\nB) Consistent posting\nC) Clear thumbnails\nD) All of the above\n\nComment your answer below.`,
  `This or That?\n\nWhich content would you watch first?\n\nA) Tips and tricks\nB) Real results\n\nComment A or B.`,
  `Fill in the blank:\n\nMy biggest content goal this month is ________.\n\nDrop your answer below.`,
  `Vote post:\n\nWhat should we post next?\n\nA) Beginner tips\nB) Mistakes to avoid\nC) Examples\nD) Behind the scenes`,
  `Rate this from 1 to 10:\n\nPosting consistently is more important than posting perfectly.\n\nWhat score do you give it?`,
  `Opinion question:\n\nWhat is harder for creators?\n\nA) Getting ideas\nB) Editing content\nC) Staying consistent\nD) Growing followers`,
  `Quick question:\n\nWhat makes you stop scrolling?\n\nA) Strong hook\nB) Good thumbnail\nC) Relatable topic\nD) Useful tips`,
  `Be honest:\n\nWhat takes the most time?\n\nA) Planning\nB) Filming\nC) Editing\nD) Posting`,
  `One word answer:\n\nDescribe your page or business in one word.\n\nBest answer gets pinned.`,
  `Which one would you choose?\n\nA) More followers\nB) More sales\nC) More comments\nD) Better content`,
]

const thumbnailTexts = [
  '30 DAYS LATER',
  "DON'T DO THIS",
  'BEFORE / AFTER',
  'THIS CHANGED EVERYTHING',
  'I TRIED THIS',
  'NO ONE EXPECTED THIS',
  'WATCH THIS FIRST',
  'BIG MISTAKE',
  'START HERE',
  'I WAS WRONG',
  'THE TRUTH',
  'SAVE THIS',
  'NEW METHOD',
  'BEST SETTINGS',
  'STOP DOING THIS',
  'REAL RESULTS',
]

const tiktokHooks = [
  'Stop scrolling if you want to improve your content.',
  'Nobody tells beginners this mistake.',
  'I tried this for 7 days.',
  "Here's the truth about growing online.",
  "Don't make this mistake.",
  'If your posts are not working, try this.',
  'This is what I wish I knew earlier.',
  'Most creators overcomplicate this.',
  'Save this before you post again.',
  'Here is a simple trick that actually helps.',
  'Before you give up, watch this.',
  'This changed how I create content.',
]

const platforms = {
  YouTube: '16:9',
  Facebook: '1:1',
  TikTok: '9:16',
  Instagram: '1:1',
}

const nicheSubjects = {
  Fitness: 'a focused fitness creator in a gym',
  Tech: 'a tech creator holding a smartphone',
  Motivation: 'a confident person under dramatic light',
  Vlog: 'a vlogger holding a camera in a cinematic scene',
  Business: 'a small business owner presenting an offer',
  Gaming: 'a gamer reacting in a neon gaming setup',
  Education: 'a teacher explaining a simple lesson',
  'AI Tools': 'a creator using a futuristic AI dashboard',
}

const styleDetails = {
  Cinematic: 'dramatic lighting, deep shadows, high contrast, film-like color grading',
  Modern: 'clean layout, sleek shapes, polished digital style, bright accents',
  Dark: 'dark background, glowing highlights, strong shadows, intense mood',
  Colorful: 'bright colors, energetic layout, playful shapes, vibrant contrast',
  Minimal: 'simple composition, clean spacing, few elements, strong readable text',
  Viral: 'large subject, bold text, arrows, glow effects, high contrast',
  Professional: 'premium layout, clean typography, balanced spacing, trust-building style',
}

const goalConcepts = {
  'Get clicks': 'a high-curiosity thumbnail designed to make people click',
  'Get comments': 'an interactive thumbnail that makes people want to respond',
  'Promote service': 'a service-focused thumbnail that builds trust and interest',
  'Explain topic': 'a clear educational thumbnail that explains the topic fast',
  'Build brand': 'a consistent branded thumbnail that looks professional',
}

export const generateFacebookPost = () => randomItem(facebookPosts)

export const generateThumbnailText = () => randomItem(thumbnailTexts)

export const generateHook = () => randomItem(tiktokHooks)

export const generateHashtags = (category) => {
  const tags = hashtagData[category]
  return {
    Small: tags.slice(0, 5).join(' '),
    Medium: tags.slice(0, 10).join(' '),
    Large: tags.slice(0, 15).join(' '),
  }
}

export const generateThumbnailPlan = ({ platform, niche, goal, style }) => {
  const ratio = platforms[platform]
  const subject = nicheSubjects[niche]
  const styleDetail = styleDetails[style]
  const text = randomItem(thumbnailTexts)
  const concept = goalConcepts[goal]

  return {
    'Thumbnail concept': `Create ${concept} for ${platform} in the ${niche} niche.`,
    'Text to add': text,
    'Text placement': 'Place the text on the left or top side in large bold letters with black shadow.',
    'Main subject': subject,
    'Background idea': `${style.toLowerCase()} ${niche.toLowerCase()} background with strong contrast and enough empty space for text.`,
    'Extra elements': 'Add a glowing arrow, small highlight circle, light rays, and subtle particles if the design needs more energy.',
    'Color style': `${styleDetail}. Use yellow/lime accents for attention and keep the background darker for readability.`,
    'AI image prompt': `Create a ${style.toLowerCase()} ${platform} thumbnail design showing ${subject}, ${styleDetail}, high contrast, yellow/lime accent colors, empty space for bold text, sharp details, professional social media thumbnail style, ${ratio} aspect ratio.`,
    'Editing notes': `Add big text "${text}". Use a thick font, black stroke, and shadow. Increase contrast, sharpen the subject, and keep the text readable on mobile. Useful for Canva, Photoshop, CapCut, or AI image generation.`,
  }
}
