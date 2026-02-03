'use client'

/**
 * IndexCardDocs: Library Index Card / Card Catalog Aesthetic
 *
 * Design concept: Library reference cards, Rolodex, recipe cards
 * - Cream/white cards on warm background
 * - Each major concept is an "index card"
 * - Tabbed organization (like dividers in a card box)
 * - Typewriter-style headers, clean body text
 * - Cards expand for details (not flip)
 *
 * This is REFERENCE documentation for lookup, not a journey.
 */

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// ============================================================================
// Types
// ============================================================================

export type CardCategory = 'patterns' | 'principles' | 'anti-patterns' | 'comparisons'

export interface IndexCard {
  id: string
  category: CardCategory
  title: string
  summary: string
  tags: string[]
  seeAlso?: string[]
  content: ReactNode
}

export interface QuickRefRow {
  term: string
  definition: string
  category?: string
}

// ============================================================================
// Color and Style Configuration
// ============================================================================

const categoryStyles: Record<CardCategory, {
  color: string
  bgLight: string
  borderColor: string
  tabBg: string
  icon: string
}> = {
  patterns: {
    color: '#2a7d7d',
    bgLight: '#f0f9f9',
    borderColor: '#2a7d7d',
    tabBg: '#e6f3f3',
    icon: 'P'
  },
  principles: {
    color: '#5c4b3a',
    bgLight: '#f9f6f0',
    borderColor: '#5c4b3a',
    tabBg: '#f0ebe3',
    icon: 'R'
  },
  'anti-patterns': {
    color: '#c97065',
    bgLight: '#fef6f5',
    borderColor: '#c97065',
    tabBg: '#fde8e6',
    icon: 'X'
  },
  comparisons: {
    color: '#6b9b7a',
    bgLight: '#f4faf6',
    borderColor: '#6b9b7a',
    tabBg: '#e8f4eb',
    icon: 'C'
  }
}

const categoryLabels: Record<CardCategory, string> = {
  patterns: 'Patterns',
  principles: 'Principles',
  'anti-patterns': 'Anti-Patterns',
  comparisons: 'Comparisons'
}

// ============================================================================
// Individual Index Card Component
// ============================================================================

interface IndexCardItemProps {
  card: IndexCard
  isExpanded: boolean
  onToggle: () => void
}

export function IndexCardItem({ card, isExpanded, onToggle }: IndexCardItemProps) {
  const styles = categoryStyles[card.category]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="relative"
    >
      {/* Card edge tabs (like stacked cards) */}
      <div
        className="absolute -top-1 left-4 right-4 h-2 rounded-t-sm opacity-40"
        style={{ backgroundColor: styles.borderColor }}
      />
      <div
        className="absolute -top-0.5 left-2 right-2 h-1 rounded-t-sm opacity-20"
        style={{ backgroundColor: styles.borderColor }}
      />

      {/* Main card */}
      <motion.div
        layout
        onClick={onToggle}
        className={cn(
          "relative bg-[#fffdf8] rounded-lg shadow-md cursor-pointer overflow-hidden",
          "border border-[#e0d5c5] hover:shadow-lg transition-shadow",
          "before:absolute before:top-0 before:left-0 before:w-full before:h-[3px]"
        )}
        style={{
          borderTopColor: styles.borderColor,
          borderTopWidth: '3px'
        }}
      >
        {/* Card holes (like a Rolodex card) */}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-[#e0d5c5]" />
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#e0d5c5]" />

        {/* Card front (always visible) */}
        <div className="p-5 pt-6">
          {/* Header with typewriter feel */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3
                className="text-xl font-mono font-bold tracking-tight text-[#3d3d3d]"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}
              >
                {card.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="px-2 py-0.5 text-xs font-semibold rounded uppercase tracking-wider"
                  style={{
                    backgroundColor: styles.bgLight,
                    color: styles.color
                  }}
                >
                  {categoryLabels[card.category]}
                </span>
              </div>
            </div>

            {/* Expand indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-6 h-6 flex items-center justify-center text-[#8c8c8c]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </motion.div>
          </div>

          {/* One-line summary */}
          <p className="text-[#5c5c5c] text-sm leading-relaxed mb-3">
            {card.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {card.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-[#f0ebe3] text-[#6b6b6b] rounded font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card detail (expanded content) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {/* Divider line with typewriter dots */}
              <div className="mx-5 border-t border-dashed border-[#d0c5b5] relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-[#fffdf8] px-2 text-[#8c8c8c] text-xs">
                  . . .
                </span>
              </div>

              {/* Content area */}
              <div className="p-5 pt-4 text-sm text-[#4d4d4d] leading-relaxed">
                {card.content}

                {/* See also links */}
                {card.seeAlso && card.seeAlso.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#e0d5c5]">
                    <span className="text-xs font-mono text-[#8c8c8c] uppercase tracking-wider">
                      See also:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {card.seeAlso.map(ref => (
                        <span
                          key={ref}
                          className="text-xs px-2 py-1 bg-[#f0ebe3] text-[#2a7d7d] rounded cursor-pointer hover:bg-[#e6ddd0] transition-colors"
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// Tab Divider Component (like card box dividers)
// ============================================================================

interface CardDividerProps {
  category: CardCategory
  isActive: boolean
  onClick: () => void
  count: number
}

export function CardDivider({ category, isActive, onClick, count }: CardDividerProps) {
  const styles = categoryStyles[category]

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 font-mono text-sm font-semibold transition-all",
        "border-b-2 rounded-t-md",
        isActive
          ? "bg-[#fffdf8] text-[#3d3d3d] -mb-[2px] z-10 border-transparent"
          : "text-[#6b6b6b] hover:text-[#3d3d3d] border-transparent"
      )}
      style={{
        backgroundColor: isActive ? '#fffdf8' : styles.tabBg,
        borderTopColor: isActive ? styles.borderColor : 'transparent',
        borderTopWidth: isActive ? '3px' : '0',
        borderLeftColor: isActive ? '#e0d5c5' : 'transparent',
        borderRightColor: isActive ? '#e0d5c5' : 'transparent',
        borderLeftWidth: isActive ? '1px' : '0',
        borderRightWidth: isActive ? '1px' : '0',
      }}
    >
      <span className="flex items-center gap-2">
        <span
          className="w-5 h-5 rounded text-xs flex items-center justify-center font-bold"
          style={{
            backgroundColor: isActive ? styles.color : 'transparent',
            color: isActive ? 'white' : styles.color,
            border: isActive ? 'none' : `1px solid ${styles.color}`
          }}
        >
          {styles.icon}
        </span>
        {categoryLabels[category]}
        <span className="text-xs text-[#8c8c8c] ml-1">({count})</span>
      </span>
    </button>
  )
}

// ============================================================================
// Quick Reference Table Component
// ============================================================================

interface QuickRefTableProps {
  title: string
  rows: QuickRefRow[]
}

export function QuickRefTable({ title, rows }: QuickRefTableProps) {
  return (
    <div className="bg-[#fffdf8] rounded-lg border border-[#e0d5c5] overflow-hidden">
      {/* Table header */}
      <div className="bg-[#f0ebe3] px-4 py-2 border-b border-[#e0d5c5]">
        <h4
          className="font-mono font-bold text-[#5c4b3a] text-sm uppercase tracking-wider"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          {title}
        </h4>
      </div>

      {/* Table content */}
      <div className="divide-y divide-[#e8e0d5]">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="flex px-4 py-2 hover:bg-[#faf7f0] transition-colors"
          >
            <div className="w-1/3 font-mono text-sm text-[#2a7d7d] font-medium">
              {row.term}
            </div>
            <div className="w-2/3 text-sm text-[#5c5c5c]">
              {row.definition}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Main Card Catalog Component
// ============================================================================

interface CardCatalogProps {
  cards: IndexCard[]
  quickRefTables?: { title: string; rows: QuickRefRow[] }[]
}

export function CardCatalog({ cards, quickRefTables }: CardCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CardCategory>('patterns')
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  // Filter cards by category and search
  const filteredCards = cards.filter(card => {
    const matchesCategory = card.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Count cards per category
  const categoryCounts = {
    patterns: cards.filter(c => c.category === 'patterns').length,
    principles: cards.filter(c => c.category === 'principles').length,
    'anti-patterns': cards.filter(c => c.category === 'anti-patterns').length,
    comparisons: cards.filter(c => c.category === 'comparisons').length,
  }

  const toggleCard = (id: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Card catalog header */}
      <div className="bg-[#5c4b3a] text-[#f5f0e6] py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {/* Card catalog icon */}
            <div className="w-14 h-14 bg-[#f0ebe3] rounded-lg flex items-center justify-center shadow-md">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c4b3a"
                strokeWidth="2"
              >
                <rect x="2" y="6" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
                <path d="M6 6V4" />
                <path d="M18 6V4" />
                <path d="M6 14h4" />
                <path d="M6 17h8" />
              </svg>
            </div>
            <div>
              <h1
                className="text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Courier New', Courier, monospace" }}
              >
                Pattern Reference
              </h1>
              <p className="text-[#c5b8a5] text-sm mt-1">
                Claude Code orchestration patterns - pull the card you need
              </p>
            </div>
          </div>

          {/* Search field */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "w-full px-4 py-2 pl-10 rounded-lg",
                "bg-[#4a3d2e] border border-[#7a6b5a] text-[#f5f0e6]",
                "placeholder:text-[#9a8b7a] focus:outline-none focus:border-[#a09080]",
                "font-mono text-sm"
              )}
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a8b7a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category tabs (card dividers) */}
      <div className="bg-[#e8e0d5] border-b border-[#d0c5b5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1 pt-2">
            {(['patterns', 'principles', 'anti-patterns', 'comparisons'] as CardCategory[]).map(cat => (
              <CardDivider
                key={cat}
                category={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                count={categoryCounts[cat]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card grid (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {filteredCards.length > 0 ? (
              filteredCards.map(card => (
                <IndexCardItem
                  key={card.id}
                  card={card}
                  isExpanded={expandedCards.has(card.id)}
                  onToggle={() => toggleCard(card.id)}
                />
              ))
            ) : (
              <div className="text-center py-12 text-[#8c8c8c]">
                <p className="font-mono">No cards found matching your search.</p>
              </div>
            )}
          </div>

          {/* Quick reference sidebar */}
          <div className="space-y-6">
            {quickRefTables && quickRefTables.map((table, idx) => (
              <QuickRefTable key={idx} {...table} />
            ))}

            {/* Card box decoration */}
            <div className="bg-[#fffdf8] rounded-lg border border-[#e0d5c5] p-4">
              <div className="text-center text-[#8c8c8c] text-sm">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#f0ebe3] flex items-center justify-center">
                  <span className="text-xl">📇</span>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider mb-1">
                  Library Reference
                </p>
                <p className="text-[#6b6b6b]">
                  Click any card to expand details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Content Helper Components (for rich card content)
// ============================================================================

export function CardCode({ children }: { children: ReactNode }) {
  return (
    <pre className="bg-[#f5f0e6] border border-[#e0d5c5] rounded p-3 overflow-x-auto font-mono text-xs text-[#4d4d4d] my-2">
      {children}
    </pre>
  )
}

export function CardList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 my-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-[#2a7d7d] mt-1">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CardHighlight({ children, type = 'info' }: {
  children: ReactNode
  type?: 'info' | 'warning' | 'success'
}) {
  const colors = {
    info: { bg: '#f0f9f9', border: '#2a7d7d', text: '#2a7d7d' },
    warning: { bg: '#fef6f5', border: '#c97065', text: '#c97065' },
    success: { bg: '#f4faf6', border: '#6b9b7a', text: '#6b9b7a' },
  }
  const style = colors[type]

  return (
    <div
      className="my-2 p-3 rounded border-l-3 text-sm"
      style={{
        backgroundColor: style.bg,
        borderLeftColor: style.border,
        borderLeftWidth: '3px'
      }}
    >
      {children}
    </div>
  )
}

export function CardQuote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <blockquote className="my-3 pl-4 border-l-2 border-[#d0c5b5] italic text-[#6b6b6b]">
      "{children}"
      {source && <cite className="block text-xs mt-1 not-italic text-[#8c8c8c]">- {source}</cite>}
    </blockquote>
  )
}
