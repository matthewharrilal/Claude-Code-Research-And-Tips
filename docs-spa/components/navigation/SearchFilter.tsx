'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import navigation from '@/content/navigation.json'

interface FlatItem {
  slug: string
  title: string
  category: string
}

export function SearchFilter() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Flatten all items for search
  const allItems = useMemo<FlatItem[]>(() => {
    const items: FlatItem[] = []
    navigation.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        items.push({
          slug: item.slug,
          title: item.title,
          category: cat.title
        })
      })
    })
    return items
  }, [])

  // Filter items based on query
  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    ).slice(0, 8)
  }, [query, allItems])

  return (
    <div className="p-4 border-b border-gray-200 relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          placeholder="Filter pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-9 pr-8 py-2 text-sm rounded-md border border-gray-200 bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {isFocused && results.length > 0 && (
        <div className="absolute left-4 right-4 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/synthesis/${item.slug}`}
              className="block px-3 py-2 hover:bg-bg-muted transition-colors"
              onClick={() => setQuery('')}
            >
              <div className="text-sm font-medium text-text-primary">{item.title}</div>
              <div className="text-xs text-text-muted">{item.category}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
