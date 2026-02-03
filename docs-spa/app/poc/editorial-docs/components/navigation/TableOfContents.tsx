'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items?: TOCItem[]
  title?: string
}

/**
 * Table of Contents with scroll spy
 *
 * Features:
 * - "ON THIS PAGE" header (uppercase, small)
 * - Indented hierarchy for h2/h3
 * - Active section indicator based on scroll
 * - Click to scroll to section
 */
export function TableOfContents({
  items = [],
  title = 'On this page',
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  // Scroll spy - track which section is currently visible
  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="p-[var(--layout-toc-padding-y)] p-[var(--layout-toc-padding-x)] sticky top-0">
      {/* Header */}
      <h4 className="text-[var(--typography-label-size)] font-[var(--font-semibold)] tracking-[var(--tracking-wider)] text-[var(--color-text-muted)] uppercase mb-4">
        {title}
      </h4>

      {/* TOC Items */}
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              paddingLeft: item.level > 2 ? 'var(--component-toc-indent)' : 0,
            }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className={`
                block py-[var(--component-toc-item-padding-y)] text-sm transition-colors
                ${
                  activeId === item.id
                    ? 'text-[var(--color-text-primary)] font-medium'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                }
              `}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Auto-extract TOC items from heading elements
 * Use this in the parent page to generate items
 */
export function extractTOCItems(contentSelector: string = '.editorial-content'): TOCItem[] {
  if (typeof document === 'undefined') return []

  const content = document.querySelector(contentSelector)
  if (!content) return []

  const headings = content.querySelectorAll('h2, h3')
  const items: TOCItem[] = []

  headings.forEach((heading) => {
    const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
    if (!heading.id) heading.id = id

    items.push({
      id,
      title: heading.textContent || '',
      level: parseInt(heading.tagName[1]),
    })
  })

  return items
}

export default TableOfContents
