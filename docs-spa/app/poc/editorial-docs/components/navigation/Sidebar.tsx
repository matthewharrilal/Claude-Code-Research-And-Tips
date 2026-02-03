'use client'

import { useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  expanded?: boolean
}

interface SidebarProps {
  navigation: NavItem[]
  currentPath?: string
  showSearch?: boolean
  onSearch?: () => void
}

/**
 * Editorial Documentation Sidebar
 *
 * Features:
 * - Collapsible tree navigation
 * - Active state with left border indicator
 * - Search trigger with ⌘K hint
 * - Section headers (uppercase, tracked)
 */
export function Sidebar({
  navigation,
  currentPath = '',
  showSearch = true,
  onSearch,
}: SidebarProps) {
  return (
    <nav className="p-[var(--layout-sidebar-padding-y)] p-[var(--layout-sidebar-padding-x)]">
      {/* Search Trigger */}
      {showSearch && (
        <button
          onClick={onSearch}
          className="w-full flex items-center gap-2 px-[var(--component-input-padding-x)] py-[var(--component-input-padding-y)] mb-6 text-sm text-[var(--color-text-muted)] bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-[var(--radius-md)] hover:border-[var(--color-border-strong)] transition-colors"
        >
          <Search className="w-4 h-4" />
          <span className="flex-1 text-left">Search...</span>
          <kbd className="px-1.5 py-0.5 text-xs bg-[var(--color-surface)] border border-[var(--color-border)] rounded">
            ⌘K
          </kbd>
        </button>
      )}

      {/* Navigation Tree */}
      <div className="space-y-6">
        {navigation.map((section, idx) => (
          <NavSection key={idx} item={section} depth={0} currentPath={currentPath} />
        ))}
      </div>
    </nav>
  )
}

interface NavSectionProps {
  item: NavItem
  depth: number
  currentPath: string
}

function NavSection({ item, depth, currentPath }: NavSectionProps) {
  const [isExpanded, setIsExpanded] = useState(item.expanded ?? true)
  const hasChildren = item.items && item.items.length > 0
  const isActive = item.href === currentPath

  // Section header (depth 0, no href)
  if (depth === 0 && !item.href) {
    return (
      <div className="mb-4">
        <div className="px-[var(--component-nav-item-padding-x)] mb-2">
          <span className="text-[var(--typography-label-size)] font-[var(--font-medium)] tracking-[var(--tracking-wider)] text-[var(--color-text-muted)] uppercase">
            {item.title}
          </span>
        </div>
        {item.items?.map((child, idx) => (
          <NavSection key={idx} item={child} depth={1} currentPath={currentPath} />
        ))}
      </div>
    )
  }

  // Expandable section
  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center gap-2 px-[var(--component-nav-item-padding-x)] py-[var(--component-nav-item-padding-y)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-hover-bg)] rounded-[var(--radius-sm)] transition-colors"
        >
          <ChevronRight
            className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
          <span className="font-medium">{item.title}</span>
        </button>

        {isExpanded && (
          <div className="ml-4 mt-1 border-l-2 border-[var(--color-border)]">
            {item.items?.map((child, idx) => (
              <NavSection key={idx} item={child} depth={depth + 1} currentPath={currentPath} />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Leaf item
  return (
    <a
      href={item.href}
      className={`
        block py-[var(--component-nav-item-padding-y)] pl-4 pr-[var(--component-nav-item-padding-x)] text-sm transition-colors relative
        ${
          isActive
            ? 'text-[var(--color-text-primary)] font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[var(--border-width-heavy)] before:h-5 before:bg-[var(--color-primary)] before:rounded-full'
            : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-hover-bg)]'
        }
      `}
    >
      {item.title}
    </a>
  )
}

export default Sidebar
