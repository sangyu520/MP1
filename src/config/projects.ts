// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: '高中物理竞赛三等奖',
    description: '嘿嘿，水的',
    date: '2023',
    location: 'Mianyang, Sichuan',
  },
  {
    name: '英语四级',
    description: '五百多险过',
    date: '2024',
    location: 'Haikou,Hainan',
  },
  {
    name: '普通话考试',
    description: '三甲--哎哟，可以当公务员了',
    date: '2024',
    location: 'Haikou,Hainan',
  },
  {
    name: '无题',
    description: '也许会有的',
    date: 'present',
    location: 'Haikou,Hainan',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '部署的东西挺多的',
    description: '',
    link: { href: '', label: '' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'Hexo']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: '搭建自己的blog',
    description:
      '这是站点，可以去往我的各个分站',
    date: '2025-03-28',
    location: 'Hainan',
    link: 'https://temp.sangyufeiwan.com/',
  },
  {
    name: '',
    description:
      '慢慢培养嘛',
    date: 'present',
    location: 'Haikou,Hainan',
    link: '',
  },
  
]
