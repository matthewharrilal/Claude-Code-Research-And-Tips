'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useNavigationStore } from '@/lib/store'
import { ActivityItem, ActivityType } from '@/components/activity-zone'
import { Sparkles } from 'lucide-react'

export function ActivityZone() {
  const activeSection = useNavigationStore((s) => s.activeSection)
  const hoveredSection = useNavigationStore((s) => s.hoveredSection)
  const setHoveredSection = useNavigationStore((s) => s.setHoveredSection)
  const items = useNavigationStore((s) => s.activityItems)

  return (
    <div className="px-4 py-6">
      {/* Enhanced header with visual indicator */}
      <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border/50">
        <motion.div
          className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-4 h-4 text-accent" />
        </motion.div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">
            Operational Intelligence
          </div>
          <div className="text-[10px] text-text-muted">
            {items.length} insights for this page
          </div>
        </div>
      </div>

      {/* Activity items with staggered animation */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-text-muted italic text-center py-8"
            >
              No activity items for this page.
            </motion.div>
          ) : (
            items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
              >
                <ActivityItem
                  type={item.type as ActivityType}
                  title={item.title}
                  linkedSection={item.linkedSection}
                  isActive={activeSection === item.linkedSection || hoveredSection === item.linkedSection}
                  onMouseEnter={() => setHoveredSection(item.linkedSection)}
                  onMouseLeave={() => setHoveredSection(null)}
                  htmlContent={item.content}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
