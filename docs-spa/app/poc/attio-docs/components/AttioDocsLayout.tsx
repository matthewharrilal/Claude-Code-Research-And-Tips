'use client'

import { ReactNode } from 'react'
import { AttioHeader } from './AttioHeader'
import { AttioSidebar } from './AttioSidebar'
import { AttioTOC } from './AttioTOC'

interface AttioDocsLayoutProps {
  children: ReactNode
}

export function AttioDocsLayout({ children }: AttioDocsLayoutProps) {
  return (
    <div className="attio-docs min-h-screen bg-white">
      {/* Header */}
      <AttioHeader />

      {/* Three-column layout */}
      <div className="flex">
        {/* Left Sidebar - 240px fixed */}
        <AttioSidebar />

        {/* Main Content - centered, max-width 650px */}
        <main className="flex-1 ml-[240px] mr-[200px] min-h-[calc(100vh-56px)] pt-14">
          <div className="max-w-[650px] mx-auto px-8 py-12">
            {children}
          </div>
        </main>

        {/* Right TOC - 200px fixed */}
        <AttioTOC />
      </div>
    </div>
  )
}
