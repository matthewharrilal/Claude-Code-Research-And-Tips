'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { Search, ChevronRight } from 'lucide-react'

interface Category {
  id: string
  title: string
  icon: string
  items: Array<{ slug: string; title: string }>
}

interface CollapsedNavProps {
  categories: Category[]
  currentSlug: string
}

export function CollapsedNav({ categories, currentSlug }: CollapsedNavProps) {
  return (
    <nav className="h-full flex flex-col items-center py-4" aria-label="Navigation (collapsed)">
      {/* Search icon */}
      <motion.button
        className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-muted transition-colors mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Search"
      >
        <Search className="w-5 h-5" />
      </motion.button>

      {/* Divider */}
      <div className="w-6 h-px bg-border/60 mb-4" />

      {/* Category icons */}
      <div className="flex-1 flex flex-col gap-2">
        {categories.map((category) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (Icons as any)[category.icon] || Icons.Folder
          const isActive = category.items.some(item => item.slug === currentSlug)
          const firstItem = category.items[0]

          return (
            <motion.div key={category.id} className="relative group">
              <Link
                href={firstItem ? `/synthesis/${firstItem.slug}` : '#'}
                title={category.title}
              >
                <motion.div
                  className={`
                    w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                    ${isActive
                      ? 'bg-accent/15 text-accent'
                      : 'text-text-muted hover:text-text-primary hover:bg-bg-muted'}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.div>
              </Link>

              {/* Tooltip on hover */}
              <div className="
                absolute left-full top-1/2 -translate-y-1/2 ml-2
                px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-150 whitespace-nowrap z-50
                shadow-lg
              ">
                {category.title}
                <span className="text-gray-400 text-xs ml-2">
                  {category.items.length} pages
                </span>
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Expand hint at bottom */}
      <motion.div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted"
        animate={{
          x: [0, 3, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        title="Drag to expand"
      >
        <ChevronRight className="w-4 h-4" />
      </motion.div>
    </nav>
  )
}
