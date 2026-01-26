'use client'

import { motion } from 'framer-motion'
import { ACTIVITY_CONFIG, ActivityType } from './activity-config'

interface ActivityItemProps {
  type: ActivityType
  title: string
  linkedSection: string
  isActive?: boolean
  children?: React.ReactNode
  htmlContent?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function ActivityItem({
  type,
  title,
  linkedSection,
  isActive,
  children,
  htmlContent,
  onClick,
  onMouseEnter,
  onMouseLeave
}: ActivityItemProps) {
  const config = ACTIVITY_CONFIG[type]

  // Guard against undefined config (invalid type)
  if (!config) {
    console.warn(`ActivityItem: Unknown type "${type}"`)
    return null
  }

  const Icon = config.icon

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      const el = document.getElementById(linkedSection)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <motion.div
      data-section={linkedSection}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        group relative cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${isActive ? 'focus-visible:ring-accent' : 'focus-visible:ring-gray-400'}
      `}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Card with gradient border effect */}
      <div
        className={`
          relative overflow-hidden rounded-2xl
          ${isActive ? 'p-[2px]' : 'p-[1px]'}
        `}
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${config.color}, ${config.color}88)`
            : `linear-gradient(135deg, ${config.color}40, ${config.color}20)`,
        }}
      >
        {/* Inner card content */}
        <div
          className={`
            relative rounded-[14px] p-5
            backdrop-blur-sm
            transition-all duration-300
            ${isActive
              ? 'bg-white'
              : 'bg-white/80 group-hover:bg-white'
            }
          `}
        >
          {/* Type label - subtle chip */}
          <div
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: `${config.color}12`,
              color: config.color,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.color }} />
            {config.label}
          </div>

          {/* Title - prominent, bold */}
          <h4 className={`
            font-bold text-[15px] leading-snug mb-4
            ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
          `}>
            {title}
          </h4>

          {/* Content */}
          {htmlContent ? (
            <div
              className={`
                text-[13px] leading-[1.85] activity-item-content
                ${isActive ? 'text-gray-600' : 'text-gray-500'}
              `}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : children ? (
            <div className={`
              text-[13px] leading-[1.85]
              ${isActive ? 'text-gray-600' : 'text-gray-500'}
            `}>
              {children}
            </div>
          ) : null}

          {/* Subtle connecting line indicator */}
          {isActive && (
            <motion.div
              className="absolute left-0 top-1/2 -translate-x-full w-4 h-0.5 rounded-full"
              style={{ backgroundColor: config.color }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
