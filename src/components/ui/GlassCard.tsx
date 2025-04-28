'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function GlassCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-lg transition-all duration-300",
        className
      )}
    >
      {/* 模拟玻璃擦痕光斑 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-10 transition duration-500 pointer-events-none" />
      {children}
    </motion.div>
  )
}
