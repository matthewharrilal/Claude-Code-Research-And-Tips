'use client'

import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: 'slash' | 'chevron'
}

/**
 * Breadcrumb navigation
 *
 * Features:
 * - "/" or "›" separator options
 * - Current page (last item) styled differently
 * - Links are subtle with hover underline
 */
export function Breadcrumbs({ items, separator = 'slash' }: BreadcrumbsProps) {
  if (items.length === 0) return null

  const Separator = () => {
    if (separator === 'chevron') {
      return <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
    }
    return <span className="text-[var(--color-text-muted)]">/</span>
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-[var(--component-breadcrumb-gap)] text-sm"
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1

        return (
          <div key={idx} className="flex items-center gap-[var(--component-breadcrumb-gap)]">
            {idx > 0 && <Separator />}

            {isLast ? (
              <span className="text-[var(--color-text-primary)] font-medium">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:underline transition-colors"
              >
                {item.label}
              </a>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
