'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'
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

// Spring configs for dynamic, bouncy animations
const springs = {
  snappy: { type: 'spring' as const, stiffness: 500, damping: 30 },
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 20 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 25 },
}

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.15 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.1 },
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  collapsed: { opacity: 0, y: -8, scale: 0.95 },
  expanded: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  }
}

export function NavCategory({ id, title, icon, items, currentSlug, defaultOpen }: NavCategoryProps) {
  const expandedSections = useNavigationStore((s) => s.expandedSections)
  const toggleSection = useNavigationStore((s) => s.toggleSection)
  const prefersReducedMotion = useReducedMotion()

  const containsCurrent = items.some(item => item.slug === currentSlug)
  const isExpanded = expandedSections.has(id) || containsCurrent || defaultOpen

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[icon] || Icons.Folder

  return (
    <div className="mb-4">
      {/* Category Header Button - Refined typography and spacing */}
      <motion.button
        onClick={() => toggleSection(id)}
        aria-expanded={isExpanded}
        aria-controls={`nav-category-${id}`}
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 group"
        whileHover={prefersReducedMotion ? {} : {
          backgroundColor: 'rgba(0, 0, 0, 0.025)',
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.995 }}
      >
        {/* Chevron - more subtle */}
        <motion.div
          className="flex items-center justify-center w-5 h-5 rounded-md"
          animate={{
            rotate: isExpanded ? 90 : 0,
          }}
          transition={prefersReducedMotion ? { duration: 0 } : springs.bouncy}
        >
          <ChevronRight
            className={`w-3 h-3 transition-colors ${isExpanded ? 'text-accent' : 'text-text-muted/60'}`}
          />
        </motion.div>

        {/* Category icon - larger for visual anchor */}
        <motion.div
          className="relative flex-shrink-0"
          animate={{
            scale: isExpanded ? 1.05 : 1,
          }}
          transition={prefersReducedMotion ? { duration: 0 } : springs.gentle}
        >
          <IconComponent
            className={`w-[18px] h-[18px] transition-colors duration-200 ${isExpanded ? 'text-accent' : 'text-text-muted/70 group-hover:text-text-secondary'}`}
          />
        </motion.div>

        {/* Category title - sentence case, refined typography */}
        <span
          className={`flex-1 text-left text-[12px] font-semibold tracking-[0.02em] transition-colors duration-200 ${isExpanded ? 'text-text-primary' : 'text-text-secondary/90 group-hover:text-text-primary'}`}
        >
          {title}
        </span>

        {/* Item count - always visible, muted */}
        <span className={`text-[10px] font-medium tabular-nums px-1.5 py-0.5 rounded-full transition-colors ${isExpanded ? 'bg-accent/10 text-accent' : 'text-text-muted/40'}`}>
          {items.length}
        </span>
      </motion.button>

      {/* Expandable content with stagger animation */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`nav-category-${id}`}
            variants={prefersReducedMotion ? {} : contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            {/* Items container - cleaner spacing, no connector line */}
            <div className="ml-[30px] py-1.5">
              {/* Subtle vertical guide */}
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border/40" />

              <div className="space-y-0.5">
                {items.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    variants={prefersReducedMotion ? {} : itemVariants}
                    custom={index}
                  >
                    <NavItem
                      slug={item.slug}
                      title={item.title}
                      isActive={item.slug === currentSlug}
                    />

                    {/* Page sections for active item */}
                    {item.slug === currentSlug && (
                      <PageSections slug={item.slug} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
