"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/magicui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications: Item[] = [
  {
    name: "Payment received",
    description: "Weixin",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Steam",
    description: "Hi @sangyu,We...",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "QQ&&Weixin",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white shadow",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:border dark:border-white/15",
        "dark:[box-shadow:0_0_8px_0px_#ffffff0d_inset]"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  )
}

export default function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col items-start overflow-hidden p-4", className)}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      {/* ✅ 渐变遮罩改轻一点 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  )
}
