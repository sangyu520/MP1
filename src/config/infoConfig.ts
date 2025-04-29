export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Sang Yu'
export const headline = ' '
export const introduction =
  ""
export const email = '2035027466@qq.com'
export const githubUsername = 'sangyu520'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hello everyone! My name is Sangyu, and I'm from Sichuan, China. I have been studying at Hainan University since 2024, majoring in Mathematics and Applied Mathematics.",
  'As of now, I\'m happily drifting through life and embracing a laid-back attitude.',
  "I started this blog to document and share what I learn every day. Most of the posts focus on education in Artificial Intelligence and general Computer Science, along with occasional reflections and lessons from my personal life.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Douyin',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/self?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1349188481?spm_id_from=333.1007.0.0',
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "qq",
  "java",
  "react",
  "vite",
  "cplusplus",
  "kalilinux",
  "css",
  "nodedotjs",
  "wordpress",
  "nextdotjs",
  "xiaohongshu",
  "treyarch",
  "monkeytie",
  "steam",
  "MySQL",
  "vercel",
  "Hexo",
  "neteasecloudmusic",
  "zhihu",
  "docker",
  "git",
  "lamborghini",
  "github",
  "huawei",
  "republicofgamers",
  "apple",
  "bilibili",
  "mihoyo",
]
