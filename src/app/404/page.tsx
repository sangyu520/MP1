"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  // 禁止滚动
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="fixed inset-0 bg-white font-serif flex items-center justify-center z-50">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div
              className="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain mx-auto"
              aria-hidden="true"
            >
              <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8">
                404
              </h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl text-black sm:text-3xl font-bold mb-4">
                Look like you're lost
              </h3>
              <p className="mb-6 text-black sm:mb-5">
                The page you are looking for is not available!
              </p>

              <Button
                variant="default"
                onClick={() => router.push("/")}
                className="my-5 bg-green-600 hover:bg-green-700"
              >
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
