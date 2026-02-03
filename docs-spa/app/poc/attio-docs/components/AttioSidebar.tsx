'use client'

import { useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  expanded?: boolean
}

const navigation: NavItem[] = [
  {
    title: 'REFERENCE',
    items: [
      {
        title: 'Attio 101',
        expanded: true,
        items: [
          { title: 'Attio basics', href: '#' },
          { title: 'Keyboard shortcuts', href: '#' },
          { title: 'Getting started checklist', href: '#' },
        ],
      },
      {
        title: 'Managing data',
        expanded: true,
        items: [
          { title: 'Bulk update lists and views', href: '#bulk-update' },
          { title: 'Calculate rollups', href: '#calculate-rollups' },
          { title: 'Enrich your CRM', href: '#enrich-crm' },
        ],
      },
      {
        title: 'Objects',
        items: [
          { title: 'Objects overview', href: '#' },
          { title: 'Standard objects', href: '#' },
          { title: 'Custom objects', href: '#' },
        ],
      },
      {
        title: 'Records',
        items: [
          { title: 'Records overview', href: '#' },
          { title: 'People', href: '#' },
          { title: 'Companies', href: '#' },
          { title: 'Deals', href: '#' },
        ],
      },
      {
        title: 'Lists',
        items: [
          { title: 'Lists overview', href: '#' },
          { title: 'Creating lists', href: '#' },
          { title: 'Filtering lists', href: '#' },
        ],
      },
      {
        title: 'Views',
        items: [
          { title: 'Views overview', href: '#' },
          { title: 'Table view', href: '#' },
          { title: 'Kanban view', href: '#' },
        ],
      },
      {
        title: 'Attributes',
        items: [
          { title: 'Attributes overview', href: '#' },
          { title: 'Standard attributes', href: '#' },
          { title: 'Custom attributes', href: '#' },
        ],
      },
    ],
  },
]

interface NavSectionProps {
  item: NavItem
  depth?: number
  activeHref?: string
}

function NavSection({ item, depth = 0, activeHref }: NavSectionProps) {
  const [isExpanded, setIsExpanded] = useState(item.expanded ?? false)
  const hasChildren = item.items && item.items.length > 0
  const isActive = item.href === activeHref

  // Section header (REFERENCE, etc.)
  if (depth === 0 && !item.href) {
    return (
      <div className="mb-6">
        <div className="px-3 mb-3">
          <span className="text-[11px] font-semibold tracking-wider text-[#9CA3AF] uppercase">
            {item.title}
          </span>
        </div>
        {item.items?.map((child, idx) => (
          <NavSection key={idx} item={child} depth={1} activeHref={activeHref} />
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
          className="w-full flex items-center gap-2 px-3 py-1.5 text-[14px] text-[#374151] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-md transition-colors"
        >
          <ChevronRight
            className={`w-4 h-4 text-[#9CA3AF] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
          />
          <span className="font-medium">{item.title}</span>
        </button>

        {isExpanded && (
          <div className="ml-4 mt-1 border-l border-[#E5E7EB]">
            {item.items?.map((child, idx) => (
              <NavSection key={idx} item={child} depth={depth + 1} activeHref={activeHref} />
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
        block py-1.5 pl-4 pr-3 text-[14px] transition-colors relative
        ${isActive
          ? 'text-[#111827] font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-5 before:bg-[#111827] before:rounded-full'
          : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F9FAFB]'
        }
      `}
    >
      {item.title}
    </a>
  )
}

export function AttioSidebar() {
  const [activeHref] = useState('#bulk-update') // Current page active

  return (
    <aside className="fixed top-14 left-0 w-[240px] h-[calc(100vh-56px)] bg-white border-r border-[#E5E7EB] overflow-y-auto">
      <div className="p-4">
        {/* Search Box */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-9 pl-9 pr-12 text-[14px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[11px] text-[#9CA3AF] bg-white border border-[#E5E7EB] rounded">
            ⌘K
          </kbd>
        </div>

        {/* Navigation */}
        <nav>
          {navigation.map((section, idx) => (
            <NavSection key={idx} item={section} activeHref={activeHref} />
          ))}
        </nav>
      </div>
    </aside>
  )
}
