'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  title: string
  level: number
}

export function AttioTOC() {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Extract headings from content
  useEffect(() => {
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll('.attio-content h2[id], .attio-content h3[id]')
      const extracted: TOCItem[] = []

      headings.forEach((el) => {
        const id = el.id
        const title = el.textContent?.replace(/^#\s*/, '') || ''
        const level = el.tagName === 'H2' ? 2 : 3

        if (id && title) {
          extracted.push({ id, title, level })
        }
      })

      setItems(extracted)
      if (extracted.length > 0) {
        setActiveId(extracted[0].id)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map(item => document.getElementById(item.id)).filter(Boolean)

      let currentId = ''
      for (const heading of headings) {
        if (heading) {
          const rect = heading.getBoundingClientRect()
          if (rect.top <= 100) {
            currentId = heading.id
          }
        }
      }

      if (currentId && currentId !== activeId) {
        setActiveId(currentId)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, activeId])

  if (items.length === 0) return null

  return (
    <aside className="fixed top-14 right-0 w-[200px] h-[calc(100vh-56px)] overflow-y-auto py-8 pr-6">
      <div className="sticky top-0">
        {/* Header */}
        <h4 className="text-[12px] font-semibold tracking-wider text-[#9CA3AF] uppercase mb-4">
          On this page
        </h4>

        {/* TOC Items */}
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = activeId === item.id
            const isSubItem = item.level === 3

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById(item.id)
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`
                  block py-1 text-[13px] leading-snug transition-colors
                  ${isSubItem ? 'pl-3' : ''}
                  ${isActive
                    ? 'text-[#111827] font-medium'
                    : 'text-[#6B7280] hover:text-[#111827]'
                  }
                `}
              >
                {isSubItem && (
                  <span className="inline-block w-1 h-1 rounded-full bg-[#D1D5DB] mr-2 align-middle" />
                )}
                {item.title}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
