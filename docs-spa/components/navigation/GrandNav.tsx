'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NavCategory } from './NavCategory'
import { SearchFilter } from './SearchFilter'
import { CollapsedNav } from './CollapsedNav'
import navigation from '@/content/navigation.json'

interface GrandNavProps {
  collapsed?: boolean
}

export function GrandNav({ collapsed = false }: GrandNavProps) {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop() || ''

  // Show collapsed view
  if (collapsed) {
    return <CollapsedNav categories={navigation.categories} currentSlug={currentSlug} />
  }

  return (
    <nav className="h-full flex flex-col" aria-label="Main navigation">
      {/* Search filter with generous spacing */}
      <div className="px-4 pt-5 pb-4">
        <SearchFilter />
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      {/* Scrollable navigation area */}
      <div className="flex-1 overflow-y-auto px-2 py-4 nav-scroll-area">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navigation.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <NavCategory
                id={category.id}
                title={category.title}
                icon={category.icon}
                items={category.items}
                currentSlug={currentSlug}
                defaultOpen={category.defaultOpen}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -mt-8 relative z-10" />
    </nav>
  )
}
