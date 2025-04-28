import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
  {
    name: "Sangyu",
    username: "@Sangyu",
    body: "I can do it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "司马迁",
    username: "@司马迁",
    body: "天下熙熙，皆为利来；天下攘攘，皆为利往。",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "姚鼐",
    username: "@姚鼐",
    body: "极天云一线异色，须臾成五采。日上，正赤如丹，下有红光动摇承之。",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "曹植",
    username: "@曹植",
    body: "翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "白居易",
    username: "@白居易",
    body: "君埋泉下泥销骨 我寄人间雪满头",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "苏轼",
    username: "@苏轼",
    body: "与君世世为兄弟，更结来生未了因。",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}
