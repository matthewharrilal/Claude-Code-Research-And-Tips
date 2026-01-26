'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface NavItemProps {
  slug: string
  title: string
  isActive?: boolean
}

// Spring configs for natural, bouncy motion
const springs = {
  snappy: { type: 'spring' as const, stiffness: 500, damping: 30 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 20 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 25 },
}

export function NavItem({ slug, title, isActive }: NavItemProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Link
      href={`/synthesis/${slug}`}
      scroll={false}
      aria-current={isActive ? 'page' : undefined}
      className="block relative group"
    >
      <motion.div
        className={`
          relative flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-md
          transition-colors duration-150
          ${isActive
            ? 'bg-accent/8 text-accent'
            : 'text-text-secondary/80 hover:text-text-primary hover:bg-black/[0.02]'}
        `}
        initial={false}
        whileHover={prefersReducedMotion ? {} : {
          x: 2,
          transition: { duration: 0.1 }
        }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Active indicator - refined left accent */}
        <motion.div
          className="absolute left-0 top-1/2 w-[2px] rounded-r-full bg-accent"
          initial={false}
          animate={{
            height: isActive ? '50%' : '0%',
            y: '-50%',
            opacity: isActive ? 1 : 0,
          }}
          transition={prefersReducedMotion ? { duration: 0 } : springs.bouncy}
        />

        {/* Title - refined size for density */}
        <span
          className={`flex-1 text-[13px] leading-tight ${isActive ? 'font-medium' : 'font-normal'}`}
        >
          {title}
        </span>

        {/* Arrow indicator - only on active */}
        {isActive && (
          <ChevronRight className="w-3 h-3 text-accent/60 flex-shrink-0" />
        )}
      </motion.div>
    </Link>
  )
}
