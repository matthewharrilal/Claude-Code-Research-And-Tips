'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Header } from './Header'
import { LeftNav } from './LeftNav'
import { ActivityZone } from './ActivityZone'
import { Resizer } from './Resizer'
import { LeftNavResizer } from './LeftNavResizer'
import { useNavigationStore } from '@/lib/store'
import { ScrollSyncProvider } from '@/lib/hooks'
import { PageTransition } from '@/components/transitions'

interface ThreePanelLayoutProps {
  children: ReactNode
}

export function ThreePanelLayout({ children }: ThreePanelLayoutProps) {
  const activityZoneWidth = useNavigationStore((s) => s.activityZoneWidth)
  const leftNavWidth = useNavigationStore((s) => s.leftNavWidth)
  const leftNavCollapsed = useNavigationStore((s) => s.leftNavCollapsed)

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />

      <div className="flex pt-[var(--header-height)]">
        {/* Left Navigation - Fixed, Resizable */}
        <motion.aside
          className="fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden border-r border-border bg-white z-40"
          initial={false}
          animate={{ width: leftNavWidth }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <LeftNav collapsed={leftNavCollapsed} />
        </motion.aside>

        {/* Left Nav Resizer */}
        <LeftNavResizer />

        {/* Main Content - Flexible */}
        <motion.main
          className="flex-1 min-h-[calc(100vh-var(--header-height))]"
          initial={false}
          animate={{
            marginLeft: leftNavWidth,
            marginRight: activityZoneWidth,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <ScrollSyncProvider>
            <div className="w-full max-w-4xl mx-auto px-8 lg:px-12 py-12">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </ScrollSyncProvider>
        </motion.main>

        {/* Resizer */}
        <Resizer />

        {/* Activity Zone - Fixed, Resizable */}
        <aside
          className="fixed top-[var(--header-height)] right-0 h-[calc(100vh-var(--header-height))] overflow-y-auto border-l border-dashed border-border bg-bg-subtle z-40 activity-zone-wrapper"
          style={{ width: `${activityZoneWidth}px` }}
        >
          <ActivityZone />
        </aside>
      </div>
    </div>
  )
}
