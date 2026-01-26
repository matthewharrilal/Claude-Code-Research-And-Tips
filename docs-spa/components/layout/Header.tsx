import Link from 'next/link'
import { BookOpen, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6">
      <Link href="/" className="flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-accent" />
        <span className="font-semibold text-text-primary">Claude Code</span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-bg-subtle text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted bg-bg-muted px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </div>
    </header>
  )
}
