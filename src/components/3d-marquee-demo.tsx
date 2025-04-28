"use client"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://i.postimg.cc/RZJGr86G/SY.png",
    "https://i.postimg.cc/CxfyvcFp/image.jpg",
    "https://i.postimg.cc/Sx45rktC/image.jpg",
    "https://i.postimg.cc/4NckP84k/image.jpg",
    "https://i.postimg.cc/wMF4vmgV/image.jpg",

    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://i.postimg.cc/W1jNkRGf/image.jpg",
    "https://i.postimg.cc/RVx9krDV/spongebob.jpg",
    "https://i.postimg.cc/DwBT4Sy8/image.jpg",
    "https://i.postimg.cc/QCQL8tyN/image.jpg",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://i.postimg.cc/RVx9krDV/spongebob.jpg",
    "https://i.postimg.cc/DwBT4Sy8/image.jpg",
    "https://i.postimg.cc/hPnWCLXX/image.png",
    "https://i.postimg.cc/TYc8BKbC/background1.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://i.postimg.cc/TYc8BKbC/background1.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ]
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  )
}
