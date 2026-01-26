'use client'

export function LeftNav() {
  return (
    <nav className="h-full flex flex-col p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
        Navigation
      </div>

      {/* Placeholder - will be replaced with GrandNav in Phase 4 */}
      <div className="space-y-2">
        <div className="px-3 py-2 rounded-md bg-accent/10 text-accent text-sm font-medium">
          Getting Started
        </div>
        <div className="px-3 py-2 text-text-muted text-sm hover:bg-bg-muted rounded-md cursor-pointer">
          Architecture
        </div>
        <div className="px-3 py-2 text-text-muted text-sm hover:bg-bg-muted rounded-md cursor-pointer">
          Patterns
        </div>
      </div>
    </nav>
  )
}
