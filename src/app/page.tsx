import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { projectHeadLine, projectIntro, projects, blogHeadLine, blogIntro, techIcons } from '@/config/infoConfig'
import { awards, awardsHeadLine, awardsIntro, activities, activitiesHeadLine, activitiesIntro } from '@/config/projects'
import IconCloud from "@/components/ui/icon-cloud"
import { Award, Briefcase, Heart } from 'lucide-react'
import { Marquee } from "@/components/magicui/marquee.tsx";
import MarqueeDemo from "@/components/marquee-demo.tsx";  
import { AnimatedList } from "@/components/magicui/animated-list";
//import  ThreeDMarqueeDemo  from "@/components/animated-list-demo.tsx";
import  ThreeDMarqueeDemo  from "@/components/3d-marquee-demo.tsx";
import AnimatedListDemo from "@/components/animated-list-demo";




export default async function Home() {
  const blogList = (await getAllBlogs()).slice(0, 4);

  return (
    <TracingBeam className="my-custom-class">
      <Container className="mt-9">

        {/* --- 顶部简介 + 技能图标 --- */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              {introduction}
            </p>
            <SocialLinks className='md:mt-24' />
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>

        {/* --- 获奖经历 --- */}
        <section className="mx-auto flex flex-col max-w-6xl gap-6 my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Award size={30} />
            {awardsHeadLine}
          </h2>
          {/* 这里改了！卡片列数从 md:grid-cols-3 => md:grid-cols-2，让每个卡片更宽 */}
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
            {awards.map((award) => (
              <ActivityCard key={award.name} activity={award} titleAs='h3' />
            ))}
          </ul>
        </section>

        {/* --- 滚动标语 --- */}
        <MarqueeDemo />

        {/* --- 博客列表 + 个人经历 --- */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs='h3' />
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />
          </div>
        </div>

        {/* --- 科研项目 --- */}
        <section className="mx-auto flex flex-col max-w-7xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28} />
            {projectHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntro}
          </p>
          {/* 这里改了！项目卡片列数从 md:grid-cols-3 => md:grid-cols-2 */}
          <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs='h3' />
            ))}
          </ul>
        </section>

        {/* --- 志愿活动 --- */}
        <section className="mx-auto flex flex-col max-w-7xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Heart size={28} />
            {activitiesHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {activitiesIntro}
          </p>
          {/* 这里也改了！志愿活动卡片列数也从 md:grid-cols-3 => md:grid-cols-2 */}
          <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2">
            {activities.map((activity) => (
              <ActivityCard key={activity.name} activity={activity} titleAs='h3' />
            ))}
          </ul>
        </section>

        {/* --- 博客区域底部 --- */}
        <section className="mx-auto flex flex-col max-w-xl gap-6 py-8 my-8 lg:max-w-none border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            {blogHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {blogIntro}
          </p>
        </section>
        {/* --- 3D Marquee --- */}
          <ThreeDMarqueeDemo />
        {/* --- AnimatedListDemo --- */}
          <AnimatedListDemo />
        
      </Container>
    </TracingBeam> 
  )
}
