import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /** 可选的自定义 class */
  className?: string;
  /** 是否反向滚动 */
  reverse?: boolean;
  /** 是否在悬停时暂停 */
  pauseOnHover?: boolean;
  /** 展示内容 */
  children: React.ReactNode;
  /** 是否垂直滚动 */
  vertical?: boolean;
  /** 内容重复次数，默认4次 */
  repeat?: number;
  /** 滚动一轮所需的时间（秒），默认40秒 */
  duration?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40, // 默认40秒
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{
        ...style,
        ["--duration" as any]: `${duration}s`, // 确保变量存在
        ["--gap" as any]: "1rem",              // 同时把gap也补充掉
      }}
      className={cn(
        "group flex overflow-hidden p-2 [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            },
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
