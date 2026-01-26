'use client'

/**
 * Level Card POC: shadcn/ui + Framer Motion
 *
 * This demonstrates the new approach vs. the old approach.
 *
 * OLD APPROACH (current):
 * - Raw HTML string: <div class="level-card"><div class="level-badge">...</div>...</div>
 * - Rendered via dangerouslySetInnerHTML
 * - Styling via globals.css (1770+ lines)
 * - No type safety, no guaranteed consistency
 *
 * NEW APPROACH (this component):
 * - Typed React component with defined props
 * - Uses shadcn/ui design patterns
 * - Framer Motion for polish animations
 * - Guaranteed consistency - impossible to render incorrectly
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Type definitions ensure content structure
interface LevelCardProps {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement?: string
  className?: string
}

// Color mapping for level badges - consistent by design
const levelColors: Record<number, { bg: string; shadow: string; border: string }> = {
  0: { bg: '#71717a', shadow: 'rgba(113, 113, 122, 0.3)', border: '#71717a' },
  1: { bg: '#059669', shadow: 'rgba(5, 150, 105, 0.3)', border: '#059669' },
  2: { bg: '#2563eb', shadow: 'rgba(37, 99, 235, 0.3)', border: '#2563eb' },
  3: { bg: '#d97706', shadow: 'rgba(217, 119, 6, 0.3)', border: '#d97706' },
  4: { bg: '#dc2626', shadow: 'rgba(220, 38, 38, 0.3)', border: '#dc2626' },
  5: { bg: '#7c3aed', shadow: 'rgba(124, 58, 237, 0.3)', border: '#7c3aed' },
  6: { bg: '#db2777', shadow: 'rgba(219, 39, 119, 0.3)', border: '#db2777' },
  7: { bg: '#18181b', shadow: 'rgba(24, 24, 27, 0.3)', border: '#18181b' },
}

export function LevelCard({
  level,
  title,
  subtitle,
  description,
  unlockRequirement,
  className
}: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      // Entrance animation - fades and slides in
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      // Hover micro-interaction - subtle lift
      whileHover={{
        y: -2,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        transition: { duration: 0.2 }
      }}
      className={cn(
        // Base card styles
        'bg-white rounded-xl p-6',
        'border border-zinc-200',
        'transition-colors duration-200',
        className
      )}
      style={{
        borderLeftWidth: '4px',
        borderLeftColor: colors.border
      }}
    >
      {/* Header with badge and title */}
      <div className="flex items-start gap-4 mb-4">
        {/* Level Badge with glow effect */}
        <motion.div
          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold"
          style={{
            backgroundColor: colors.bg,
            boxShadow: `0 2px 8px ${colors.shadow}`
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {level}
        </motion.div>

        {/* Title and subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-zinc-900 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-base text-zinc-600 leading-relaxed mb-4">
        {description}
      </p>

      {/* Unlock requirement (optional) */}
      {unlockRequirement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-50 rounded-lg px-4 py-3"
        >
          <span className="text-sm">
            <span className="font-semibold text-emerald-600">Unlock:</span>
            {' '}
            <span className="text-zinc-600">{unlockRequirement}</span>
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

// Staggered list animation for multiple cards
export function LevelCardList({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="space-y-5"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Wrapper for cards in list to apply stagger
export function LevelCardListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  )
}
