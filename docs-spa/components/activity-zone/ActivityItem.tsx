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
            relative rounded-[14px] p-4
            backdrop-blur-sm
            transition-all duration-300
            ${isActive
              ? 'bg-white'
              : 'bg-white/80 group-hover:bg-white'
            }
          `}
        >
          {/* Floating icon badge - the visual anchor */}
          <motion.div
            className="absolute -top-1 -right-1 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: config.color,
              boxShadow: isActive ? `0 4px 20px ${config.color}40` : `0 2px 8px ${config.color}30`,
            }}
            animate={{
              scale: isActive ? 1.1 : 1,
              rotate: isActive ? -3 : 0,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>

          {/* Type label - subtle chip */}
          <div
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3"
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
            font-bold text-[15px] leading-tight mb-2 pr-8
            ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
          `}>
            {title}
          </h4>

          {/* Content */}
          {htmlContent ? (
            <div
              className={`
                text-[13px] leading-relaxed activity-item-content
                ${isActive ? 'text-gray-600' : 'text-gray-500'}
              `}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : children ? (
            <div className={`
              text-[13px] leading-relaxed
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
