import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function GooeyTextDemo() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <GooeyText
        texts={["Design", "Engineering", "Is", "Awesome"]}
        morphTime={1.5}
        cooldownTime={0.4}
        className="w-full"
        textClassName="text-white font-extrabold"
      />
    </div>
  );
}
