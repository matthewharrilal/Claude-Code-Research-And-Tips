'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { useNavigationStore } from '@/lib/store'
import { NavItem } from './NavItem'
import { PageSections } from './PageSections'

interface NavCategoryProps {
  id: string
  title: string
  icon: string
  items: Array<{ slug: string; title: string }>
  currentSlug?: string
  defaultOpen?: boolean
}

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.2 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
}

export function NavCategory({ id, title, icon, items, currentSlug, defaultOpen }: NavCategoryProps) {
  const expandedSections = useNavigationStore((s) => s.expandedSections)
  const toggleSection = useNavigationStore((s) => s.toggleSection)

  const containsCurrent = items.some(item => item.slug === currentSlug)
  const isExpanded = expandedSections.has(id) || containsCurrent || defaultOpen

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[icon] || Icons.Folder

  return (
    <div className="mb-1">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-bg-muted rounded-lg transition-colors"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-text-muted" />
        </motion.div>
        <IconComponent className="w-4 h-4 text-text-muted" />
        <span className="font-medium text-text-primary">{title}</span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="ml-4 pl-4 border-l border-gray-200">
              {items.map((item) => (
                <div key={item.slug}>
                  <NavItem
                    slug={item.slug}
                    title={item.title}
                    isActive={item.slug === currentSlug}
                  />
                  {item.slug === currentSlug && (
                    <PageSections slug={item.slug} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
