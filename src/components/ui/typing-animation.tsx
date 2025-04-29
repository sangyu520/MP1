'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('')

  useEffect(() => {
    let i = 0

    const typeChar = () => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
        setTimeout(typeChar, duration)
      }
    }

    typeChar()

    return () => {
      // 清理 timeout
      i = text.length
    }
  }, [text, duration])

  return (
    <h1
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className,
      )}
    >
      {displayedText || text}
    </h1>
  )
}
