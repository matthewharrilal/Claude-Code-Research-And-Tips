'use client'

import { ReactNode } from 'react'
import { Header } from './Header'
import { LeftNav } from './LeftNav'
import { ActivityZone } from './ActivityZone'
import { Resizer } from './Resizer'
import { useNavigationStore } from '@/lib/store'

interface ThreePanelLayoutProps {
  children: ReactNode
  activityItems?: Array<{
    id: string
    type: string
    linkedSection: string
    title: string
    content: string
  }>
}

export function ThreePanelLayout({ children, activityItems = [] }: ThreePanelLayoutProps) {
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />

      <div className="flex pt-[var(--header-height)]">
        {/* Left Navigation - Fixed */}
        <aside
          className="fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-r border-gray-200 bg-white z-40"
          style={{ width: 'var(--left-nav-width)' }}
        >
          <LeftNav />
        </aside>

        {/* Main Content - Flexible */}
        <main
          className="flex-1 min-h-[calc(100vh-var(--header-height))]"
          style={{
            marginLeft: 'var(--left-nav-width)',
            marginRight: `${activityZoneWidth}px`
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-12">
            {children}
          </div>
        </main>

        {/* Resizer */}
        <Resizer />

        {/* Activity Zone - Fixed, Resizable */}
        <aside
          className="fixed top-[var(--header-height)] right-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-l border-gray-200 bg-bg-subtle z-40 activity-zone-wrapper"
          style={{ width: `${activityZoneWidth}px` }}
        >
          <ActivityZone items={activityItems} />
        </aside>
      </div>
    </div>
  )
}
