'use client'

import { ReactNode } from 'react'
import { Info, AlertTriangle, AlertCircle, Lightbulb, FileText } from 'lucide-react'

type CalloutVariant = 'info' | 'warning' | 'error' | 'tip' | 'note'

interface CalloutProps {
  variant?: CalloutVariant
  title?: string
  children: ReactNode
  icon?: ReactNode
}

const variantConfig = {
  info: {
    icon: Info,
    bgClass: 'bg-[var(--color-callout-info-bg)]',
    borderClass: 'border-[var(--color-callout-info-border)]',
    textClass: 'text-[var(--color-callout-info-text)]',
    iconClass: 'text-[var(--color-callout-info-border)]',
  },
  warning: {
    icon: AlertTriangle,
    bgClass: 'bg-[var(--color-callout-warning-bg)]',
    borderClass: 'border-[var(--color-callout-warning-border)]',
    textClass: 'text-[var(--color-callout-warning-text)]',
    iconClass: 'text-[var(--color-callout-warning-border)]',
  },
  error: {
    icon: AlertCircle,
    bgClass: 'bg-[var(--color-callout-error-bg)]',
    borderClass: 'border-[var(--color-callout-error-border)]',
    textClass: 'text-[var(--color-callout-error-text)]',
    iconClass: 'text-[var(--color-callout-error-border)]',
  },
  tip: {
    icon: Lightbulb,
    bgClass: 'bg-[var(--color-callout-tip-bg)]',
    borderClass: 'border-[var(--color-callout-tip-border)]',
    textClass: 'text-[var(--color-callout-tip-text)]',
    iconClass: 'text-[var(--color-callout-tip-border)]',
  },
  note: {
    icon: FileText,
    bgClass: 'bg-[var(--color-callout-note-bg)]',
    borderClass: 'border-[var(--color-callout-note-border)]',
    textClass: 'text-[var(--color-callout-note-text)]',
    iconClass: 'text-[var(--color-callout-note-border)]',
  },
}

/**
 * Callout/Admonition Component
 *
 * Variants:
 * - info: Blue - General information
 * - warning: Yellow/amber - Potential issues
 * - error: Red - Critical warnings
 * - tip: Green - Helpful tips
 * - note: Gray - Additional notes
 */
export function Callout({
  variant = 'note',
  title,
  children,
  icon,
}: CalloutProps) {
  const config = variantConfig[variant]
  const IconComponent = config.icon

  return (
    <div
      className={`
        ${config.bgClass}
        border-l-[var(--border-width-heavy)]
        ${config.borderClass}
        rounded-[var(--radius-md)]
        p-[var(--content-callout-padding)]
        my-[var(--content-callout-margin-y)]
      `}
    >
      <div className="flex gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${config.iconClass}`}>
          {icon || <IconComponent className="w-5 h-5" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <div className={`font-semibold mb-1 ${config.textClass}`}>
              {title}
            </div>
          )}
          <div className={`text-sm ${config.textClass} [&>p]:mb-2 [&>p:last-child]:mb-0`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callout
