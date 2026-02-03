'use client'

import { ReactNode } from 'react'

interface DocsLayoutProps {
  sidebar?: ReactNode
  toc?: ReactNode
  children: ReactNode
  header?: ReactNode
}

/**
 * Three-column documentation layout
 *
 * Structure:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Header (optional)                                                │
 * ├─────────────┬───────────────────────────────┬───────────────────┤
 * │ Sidebar     │ Content                       │ TOC               │
 * │ 256px       │ max-width: 720px              │ 200px             │
 * │ fixed       │ centered                      │ sticky            │
 * └─────────────┴───────────────────────────────┴───────────────────┘
 */
export function DocsLayout({ sidebar, toc, children, header }: DocsLayoutProps) {
  return (
    <div className="editorial-docs min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      {header && (
        <header className="fixed top-0 left-0 right-0 z-[var(--z-header)] h-[var(--layout-header-height)] bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          {header}
        </header>
      )}

      <div
        className="flex"
        style={{
          paddingTop: header ? 'var(--layout-header-height)' : 0,
        }}
      >
        {/* Sidebar */}
        {sidebar && (
          <aside
            className="fixed top-[var(--layout-header-height)] left-0 w-[var(--layout-sidebar-width)] h-[calc(100vh-var(--layout-header-height))] overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-surface)]"
            style={{
              top: header ? 'var(--layout-header-height)' : 0,
              height: header
                ? 'calc(100vh - var(--layout-header-height))'
                : '100vh',
            }}
          >
            {sidebar}
          </aside>
        )}

        {/* Main Content Area */}
        <main
          className="flex-1 min-w-0"
          style={{
            marginLeft: sidebar ? 'var(--layout-sidebar-width)' : 0,
            marginRight: toc ? 'var(--layout-toc-width)' : 0,
          }}
        >
          <div className="max-w-[var(--layout-content-max-width)] mx-auto px-[var(--layout-content-padding-x)] py-[var(--layout-content-padding-y)]">
            {children}
          </div>
        </main>

        {/* Table of Contents */}
        {toc && (
          <aside
            className="fixed top-[var(--layout-header-height)] right-0 w-[var(--layout-toc-width)] h-[calc(100vh-var(--layout-header-height))] overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-surface)]"
            style={{
              top: header ? 'var(--layout-header-height)' : 0,
              height: header
                ? 'calc(100vh - var(--layout-header-height))'
                : '100vh',
            }}
          >
            {toc}
          </aside>
        )}
      </div>
    </div>
  )
}

/**
 * Content area wrapper with proper max-width and typography
 */
export function ContentArea({ children }: { children: ReactNode }) {
  return (
    <article className="prose-editorial max-w-[var(--prose-width)]">
      {children}
    </article>
  )
}

export default DocsLayout
