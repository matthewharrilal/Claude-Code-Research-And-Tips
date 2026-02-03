'use client'

/**
 * Trading Cards Component
 *
 * Each mastery level as a collectible trading card.
 * Visual metaphor: "Collectible game - progress is rewarding"
 *
 * Design Elements:
 * - 280x392px cards (poker ratio ~2.5:3.5)
 * - Rarity system: Common → Uncommon → Rare → Epic → Legendary → Mythic
 * - Star ratings in top left
 * - Stat bars (Setup Time, Power, Cost) as visual gauges
 * - Ability + Weakness sections
 * - Abstract art patterns unique to each level
 * - Holographic shimmer effect (CSS-only) for high rarities
 * - Card back for locked levels with "???" mystery
 *
 * Colors: Blue #1A44B8, Red #FF0000, Cream #FBF5EF
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const BRAND_BLUE = '#1A44B8'
const BRAND_RED = '#FF0000'
const BRAND_CREAM = '#FBF5EF'

const tokens = {
  blue: BRAND_BLUE,
  red: BRAND_RED,
  cream: BRAND_CREAM,
}

// ============================================================================
// RARITY SYSTEM
// ============================================================================

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic'

const rarityConfig: Record<Rarity, {
  label: string
  color: string
  bgGradient: string
  borderColor: string
  shimmer: boolean
}> = {
  common: {
    label: 'Common',
    color: '#71717A',
    bgGradient: 'linear-gradient(145deg, #f5f5f5 0%, #e5e5e5 100%)',
    borderColor: '#a1a1aa',
    shimmer: false,
  },
  uncommon: {
    label: 'Uncommon',
    color: '#22C55E',
    bgGradient: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
    borderColor: '#22c55e',
    shimmer: false,
  },
  rare: {
    label: 'Rare',
    color: '#3B82F6',
    bgGradient: 'linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)',
    borderColor: '#3b82f6',
    shimmer: false,
  },
  epic: {
    label: 'Epic',
    color: '#A855F7',
    bgGradient: 'linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%)',
    borderColor: '#a855f7',
    shimmer: true,
  },
  legendary: {
    label: 'Legendary',
    color: '#F97316',
    bgGradient: 'linear-gradient(145deg, #fff7ed 0%, #ffedd5 100%)',
    borderColor: '#f97316',
    shimmer: true,
  },
  mythic: {
    label: 'Mythic',
    color: '#EF4444',
    bgGradient: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
    borderColor: '#ef4444',
    shimmer: true,
  },
}

// ============================================================================
// CARD DATA
// ============================================================================

interface CardData {
  level: number
  title: string
  subtitle: string
  description: string
  rarity: Rarity
  stars: number
  ability: string
  weakness: string
  stats: {
    setupTime: number // 1-5
    power: number // 1-5
    cost: number // 1-5
  }
  pattern: 'dots' | 'lines' | 'waves' | 'grid' | 'circles' | 'triangles' | 'hexagons' | 'stars'
}

const CARDS: CardData[] = [
  {
    level: 0,
    title: 'Base Camp',
    subtitle: 'Single Session',
    description: 'Manual supervision. Context fills. Quality degrades. The starting point.',
    rarity: 'common',
    stars: 1,
    ability: 'Immediate Start - No setup required',
    weakness: 'Context Collapse - Degrades over time',
    stats: { setupTime: 1, power: 1, cost: 1 },
    pattern: 'dots',
  },
  {
    level: 1,
    title: 'Memory Keeper',
    subtitle: 'CLAUDE.md',
    description: 'Project context persists. Claude remembers your patterns.',
    rarity: 'uncommon',
    stars: 2,
    ability: 'Persistent Memory - Context survives sessions',
    weakness: 'Manual Updates - Requires documentation',
    stats: { setupTime: 2, power: 2, cost: 1 },
    pattern: 'lines',
  },
  {
    level: 2,
    title: 'Squad Leader',
    subtitle: 'Subagents + Hooks',
    description: 'Specialized agents. Automated responses. A small team.',
    rarity: 'rare',
    stars: 3,
    ability: 'Delegation - Spawn specialized helpers',
    weakness: 'Complexity Tax - Setup overhead',
    stats: { setupTime: 3, power: 3, cost: 2 },
    pattern: 'waves',
  },
  {
    level: 3,
    title: 'The Ralph',
    subtitle: 'Basic Loop',
    description: 'Continuous operation. Fresh context per iteration. Autonomous work.',
    rarity: 'rare',
    stars: 3,
    ability: 'Loop Protocol - Run until complete',
    weakness: 'Trust Requirement - Must let go',
    stats: { setupTime: 2, power: 4, cost: 2 },
    pattern: 'grid',
  },
  {
    level: 4,
    title: 'PRD Master',
    subtitle: 'Full Ralph',
    description: 'JSON task tracking. Quality gates. Ship features overnight.',
    rarity: 'epic',
    stars: 4,
    ability: 'Quality Gates - Built-in verification',
    weakness: 'PRD Dependency - Needs clear specs',
    stats: { setupTime: 4, power: 4, cost: 3 },
    pattern: 'circles',
  },
  {
    level: 5,
    title: 'Conductor',
    subtitle: 'Multi-Agent',
    description: 'Central orchestrator. Hub-and-spoke. Parallel execution.',
    rarity: 'epic',
    stars: 4,
    ability: 'Model Tiering - Optimize cost vs capability',
    weakness: 'Coordination Cost - Communication overhead',
    stats: { setupTime: 4, power: 5, cost: 4 },
    pattern: 'triangles',
  },
  {
    level: 6,
    title: 'Swarm Lord',
    subtitle: 'Parallel Worktrees',
    description: 'Git isolation. Multiple simultaneous loops. Merge orchestration.',
    rarity: 'legendary',
    stars: 5,
    ability: 'Parallel Execution - Many loops at once',
    weakness: 'Merge Complexity - Integration challenges',
    stats: { setupTime: 4, power: 5, cost: 5 },
    pattern: 'hexagons',
  },
  {
    level: 7,
    title: 'Gas Town',
    subtitle: 'Factory Scale',
    description: 'Agent factory. 7+ roles. Self-improving. Human = PM.',
    rarity: 'mythic',
    stars: 5,
    ability: 'Self-Evolution - System improves itself',
    weakness: 'All Previous Required - Maximum prerequisite',
    stats: { setupTime: 5, power: 5, cost: 5 },
    pattern: 'stars',
  },
]

// ============================================================================
// PATTERN BACKGROUNDS
// ============================================================================

function CardPattern({ pattern, color }: { pattern: CardData['pattern']; color: string }) {
  const opacity = 0.08
  const patternSize = 40

  const patterns: Record<CardData['pattern'], React.ReactElement> = {
    dots: (
      <pattern id="dots" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <circle cx={patternSize/2} cy={patternSize/2} r="3" fill={color} opacity={opacity} />
      </pattern>
    ),
    lines: (
      <pattern id="lines" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2={patternSize} y2={patternSize} stroke={color} strokeWidth="1" opacity={opacity} />
      </pattern>
    ),
    waves: (
      <pattern id="waves" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <path d={`M0 ${patternSize/2} Q${patternSize/4} 0 ${patternSize/2} ${patternSize/2} T${patternSize} ${patternSize/2}`} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      </pattern>
    ),
    grid: (
      <pattern id="grid" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <rect width={patternSize} height={patternSize} fill="none" stroke={color} strokeWidth="0.5" opacity={opacity} />
      </pattern>
    ),
    circles: (
      <pattern id="circles" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <circle cx={patternSize/2} cy={patternSize/2} r={patternSize/3} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      </pattern>
    ),
    triangles: (
      <pattern id="triangles" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <polygon points={`${patternSize/2},5 ${patternSize-5},${patternSize-5} 5,${patternSize-5}`} fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      </pattern>
    ),
    hexagons: (
      <pattern id="hexagons" width={patternSize} height={patternSize*0.866} patternUnits="userSpaceOnUse">
        <polygon points={`${patternSize/2},0 ${patternSize},${patternSize*0.25} ${patternSize},${patternSize*0.75} ${patternSize/2},${patternSize} 0,${patternSize*0.75} 0,${patternSize*0.25}`} fill="none" stroke={color} strokeWidth="1" opacity={opacity} transform={`scale(0.4) translate(${patternSize*0.7}, ${patternSize*0.3})`} />
      </pattern>
    ),
    stars: (
      <pattern id="stars" width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
        <polygon points={`${patternSize/2},2 ${patternSize/2+4},${patternSize/2-4} ${patternSize-2},${patternSize/2} ${patternSize/2+4},${patternSize/2+4} ${patternSize/2},${patternSize-2} ${patternSize/2-4},${patternSize/2+4} 2,${patternSize/2} ${patternSize/2-4},${patternSize/2-4}`} fill={color} opacity={opacity} />
      </pattern>
    ),
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5 }}>
      <defs>{patterns[pattern]}</defs>
      <rect width="100%" height="100%" fill={`url(#${pattern})`} />
    </svg>
  )
}

// ============================================================================
// STAT BAR COMPONENT
// ============================================================================

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-16 text-gray-500 uppercase tracking-wider">{label}</span>
      <div className="flex-1 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-2 flex-1 rounded-sm"
            style={{
              backgroundColor: i < value ? color : '#e5e5e5',
              opacity: i < value ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// STAR RATING COMPONENT
// ============================================================================

function StarRating({ stars, color }: { stars: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill={i < stars ? color : 'none'}
          stroke={color}
          strokeWidth="2"
        >
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      ))}
    </div>
  )
}

// ============================================================================
// HOLOGRAPHIC SHIMMER EFFECT
// ============================================================================

function HoloShimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Rainbow shimmer for mythic */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, #ff000040 35%, #ffff0040 40%, #00ff0040 45%, #00ffff40 50%, #0000ff40 55%, #ff00ff40 60%, transparent 65%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}

// ============================================================================
// SINGLE TRADING CARD COMPONENT
// ============================================================================

interface TradingCardProps {
  card: CardData
  isLocked?: boolean
  isFlipped?: boolean
  onFlip?: () => void
}

function TradingCard({ card, isLocked = false, isFlipped = false, onFlip }: TradingCardProps) {
  const rarity = rarityConfig[card.rarity]
  const isMythic = card.rarity === 'mythic'

  return (
    <motion.div
      className="relative cursor-pointer perspective-1000"
      style={{ width: 280, height: 392 }}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: rarity.bgGradient,
            border: `3px solid ${rarity.borderColor}`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset`,
          }}
        >
          {/* Pattern background */}
          <CardPattern pattern={card.pattern} color={rarity.color} />

          {/* Holographic effect for epic+ */}
          {rarity.shimmer && <HoloShimmer />}

          {/* Card content */}
          <div className="relative z-10 h-full flex flex-col p-4">
            {/* Header row */}
            <div className="flex items-start justify-between mb-3">
              <StarRating stars={card.stars} color={rarity.color} />
              <span
                className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: rarity.color,
                  color: isMythic ? 'white' : 'white',
                }}
              >
                {rarity.label}
              </span>
            </div>

            {/* Level badge */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 mx-auto"
              style={{
                background: `linear-gradient(135deg, ${rarity.color} 0%, ${rarity.color}aa 100%)`,
                boxShadow: `0 4px 12px ${rarity.color}40`,
              }}
            >
              <span
                className="text-3xl font-black"
                style={{ color: isMythic ? '#fff' : '#fff' }}
              >
                {card.level}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold text-center mb-1"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                color: isMythic ? '#fff' : '#1a1a2e',
              }}
            >
              {card.title}
            </h3>

            <p
              className="text-xs text-center uppercase tracking-widest mb-3"
              style={{ color: isMythic ? '#aaa' : '#666' }}
            >
              {card.subtitle}
            </p>

            {/* Description */}
            <p
              className="text-xs text-center leading-relaxed mb-4 flex-1"
              style={{
                fontFamily: 'Georgia, serif',
                color: isMythic ? '#ccc' : '#444',
              }}
            >
              {card.description}
            </p>

            {/* Stats */}
            <div className="space-y-1.5 mb-3">
              <StatBar label="Setup" value={card.stats.setupTime} color={rarity.color} />
              <StatBar label="Power" value={card.stats.power} color={rarity.color} />
              <StatBar label="Cost" value={card.stats.cost} color={rarity.color} />
            </div>

            {/* Level indicator at bottom */}
            <div
              className="text-center text-xs font-bold uppercase tracking-widest"
              style={{ color: rarity.color }}
            >
              Level {card.level}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
            border: `3px solid ${rarity.borderColor}`,
          }}
        >
          {/* Ability */}
          <div className="mb-6 text-center">
            <span className="text-xs uppercase tracking-widest text-green-400 font-bold">Ability</span>
            <p className="mt-2 text-white text-sm" style={{ fontFamily: 'Georgia, serif' }}>
              {card.ability}
            </p>
          </div>

          {/* Weakness */}
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-red-400 font-bold">Weakness</span>
            <p className="mt-2 text-gray-300 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
              {card.weakness}
            </p>
          </div>

          {/* Click hint */}
          <p className="absolute bottom-4 text-xs text-gray-500">
            Click to flip back
          </p>
        </div>
      </motion.div>

      {/* Locked overlay */}
      {isLocked && (
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center"
          style={{
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-2">🔒</div>
            <p className="text-white font-bold">Locked</p>
            <p className="text-gray-400 text-xs mt-1">Complete Level {card.level - 1} first</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

// ============================================================================
// MAIN TRADING CARDS GRID
// ============================================================================

interface TradingCardsProps {
  currentLevel?: number
  onCardSelect?: (level: number) => void
}

export function TradingCards({ currentLevel = 3, onCardSelect }: TradingCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleFlip = useCallback((level: number) => {
    setFlippedCards(prev => {
      const next = new Set(prev)
      if (next.has(level)) {
        next.delete(level)
      } else {
        next.add(level)
      }
      return next
    })
    onCardSelect?.(level)
  }, [onCardSelect])

  return (
    <div
      className="min-h-screen py-12 px-8"
      style={{ backgroundColor: '#1a1a2e' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Complexity Ladder
          </h1>
          <p className="text-gray-400">
            Collect all 8 levels · Click cards to flip · Progress: {currentLevel}/7 unlocked
          </p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {CARDS.map(card => (
            <TradingCard
              key={card.level}
              card={card}
              isLocked={card.level > currentLevel}
              isFlipped={flippedCards.has(card.level)}
              onFlip={() => toggleFlip(card.level)}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {Object.entries(rarityConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: config.color }}
              />
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {config.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// DEMO WRAPPER
// ============================================================================

export function TradingCardsDemo() {
  const [currentLevel, setCurrentLevel] = useState(3)

  return (
    <div>
      {/* Level selector */}
      <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur rounded-lg p-3">
        <p className="text-xs text-white mb-2">Demo: Set current level</p>
        <div className="flex gap-1">
          {CARDS.map(card => (
            <button
              key={card.level}
              onClick={() => setCurrentLevel(card.level)}
              className={`w-8 h-8 rounded text-sm font-bold transition-colors ${
                currentLevel === card.level
                  ? 'bg-white text-gray-900'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {card.level}
            </button>
          ))}
        </div>
      </div>

      <TradingCards
        currentLevel={currentLevel}
        onCardSelect={(level) => console.log(`Selected level: ${level}`)}
      />
    </div>
  )
}

export default TradingCards
