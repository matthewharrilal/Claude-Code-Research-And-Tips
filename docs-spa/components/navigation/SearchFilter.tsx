'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText } from 'lucide-react'
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
    <div className="relative">
      <motion.div
        className={`
          relative rounded-xl border transition-all duration-200
          ${isFocused
            ? 'border-accent/40 ring-2 ring-accent/10 bg-white shadow-sm'
            : 'border-border/60 bg-bg-subtle/80 hover:border-border hover:bg-bg-subtle'}
        `}
        animate={{
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isFocused ? 'text-accent' : 'text-text-muted'}`} />
        <input
          type="text"
          placeholder="Filter pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-10 pr-8 py-2.5 text-[13px] bg-transparent focus:outline-none placeholder:text-text-muted/60"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-muted transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Results dropdown */}
      <AnimatePresence>
        {isFocused && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full mt-2 bg-white border border-border/60 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            <div className="p-2">
              {results.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    href={`/synthesis/${item.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-bg-muted/80 transition-colors group"
                    onClick={() => setQuery('')}
                  >
                    <div className="w-8 h-8 rounded-lg bg-bg-muted/60 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <FileText className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium text-text-primary truncate">{item.title}</div>
                      <div className="text-[11px] text-text-muted truncate">{item.category}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
