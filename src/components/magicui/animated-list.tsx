"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { type ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
  visibleCount?: number; // 新增：最大显示数量
}

export const AnimatedList = React.memo(({ children, className, delay = 1000, visibleCount = 10, ...props }: AnimatedListProps) => {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(() => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (index + i) % childrenArray.length;
      items.push(childrenArray[idx]);
    }
    return items.reverse(); // 和你原来一样，反向排
  }, [index, visibleCount, childrenArray]);

  return (
    <div className={cn("flex flex-col items-center gap-4", className)} {...props}>
      <AnimatePresence initial={false}>
        {itemsToShow.map((item, idx) => (
          <AnimatedListItem key={(item as React.ReactElement).key ?? idx}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";
