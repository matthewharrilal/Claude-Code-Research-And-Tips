'use client'

import { motion } from 'framer-motion'
import { ACTIVITY_CONFIG, ActivityType } from './activity-config'

interface ActivityItemProps {
  type: ActivityType
  title: string
  linkedSection: string
  isActive?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export function ActivityItem({
  type,
  title,
  linkedSection,
  isActive,
  children,
  onClick
}: ActivityItemProps) {
  const config = ACTIVITY_CONFIG[type]
  const Icon = config.icon

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      const el = document.getElementById(linkedSection)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      data-section={linkedSection}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      className={`
        border-l-4 rounded-r-lg p-4 mb-3 cursor-pointer
        transition-all duration-200
        ${isActive ? 'bg-white shadow-md' : 'bg-white/50 hover:bg-white/80'}
      `}
      style={{ borderLeftColor: config.color }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isActive ? 1 : 0.7 }}
      whileHover={{ opacity: 1, x: 2 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4" style={{ color: config.color }} />
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>
      <h4 className="font-medium text-sm mb-1 text-text-primary">{title}</h4>
      <div className="text-xs text-text-muted">
        {children}
      </div>
    </motion.div>
  )
}
