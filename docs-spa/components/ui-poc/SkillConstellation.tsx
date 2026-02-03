'use client'

/**
 * Skill Constellation Component
 *
 * Mastery levels as stars in a night sky constellation.
 * Visual metaphor: "Charting the unknown - exploration is discovery"
 *
 * Design Elements:
 * - Deep space background (#0f0f1a)
 * - 150 twinkling background stars (CSS animation)
 * - Level nodes as larger stars with glow
 * - Constellation lines connecting prerequisites
 * - Unlocked = bright glow, Locked = dim gray
 * - Nebula/fog overlay on locked regions
 * - L7 (Gas Town) as special gold apex star
 *
 * Colors: Blue #1A44B8, Red #FF0000, Cream #FBF5EF
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useMemo } from 'react'

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
  space: '#0f0f1a',
  spaceLight: '#1a1a2e',
}

// ============================================================================
// STAR POSITIONS (relative to viewport, percentage-based)
// ============================================================================

interface StarPosition {
  x: number  // percentage
  y: number  // percentage
}

const STAR_POSITIONS: Record<number, StarPosition> = {
  0: { x: 15, y: 85 },   // Base Camp - bottom left
  1: { x: 28, y: 72 },   // Memory Keeper
  2: { x: 42, y: 62 },   // Squad Leader
  3: { x: 55, y: 50 },   // Ralph - center
  4: { x: 68, y: 38 },   // PRD Master
  5: { x: 75, y: 28 },   // Conductor
  6: { x: 82, y: 18 },   // Swarm Lord
  7: { x: 50, y: 8 },    // Gas Town - apex, centered
}

// Constellation connections (from -> to)
const CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [3, 7], // Ralph can also connect directly to Gas Town
]

// ============================================================================
// LEVEL DATA
// ============================================================================

interface LevelData {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement: string
  constellation: string
  starColor: string
}

const LEVELS: LevelData[] = [
  {
    level: 0,
    title: 'Base Camp',
    subtitle: 'Single Session',
    description: 'Manual supervision. Where every journey begins. The familiar pain of context collapse.',
    unlockRequirement: 'Show up',
    constellation: 'Initium',
    starColor: '#9CA3AF',
  },
  {
    level: 1,
    title: 'Memory Keeper',
    subtitle: 'CLAUDE.md',
    description: 'Project context persists across sessions. Claude remembers your architecture.',
    unlockRequirement: 'Document your patterns',
    constellation: 'Memoria',
    starColor: '#34D399',
  },
  {
    level: 2,
    title: 'Squad Leader',
    subtitle: 'Subagents + Hooks',
    description: 'Specialized agents handle specific tasks. Claude becomes a small team.',
    unlockRequirement: 'Tool system mastery',
    constellation: 'Exercitus',
    starColor: '#60A5FA',
  },
  {
    level: 3,
    title: 'The Ralph',
    subtitle: 'Basic Loop',
    description: 'Continuous operation. Fresh context per iteration. Your first autonomous work.',
    unlockRequirement: 'Trust in automation',
    constellation: 'Perpetuus',
    starColor: '#F472B6',
  },
  {
    level: 4,
    title: 'PRD Master',
    subtitle: 'Full Ralph',
    description: 'JSON task tracking. Quality gates. Ship features while you sleep.',
    unlockRequirement: 'Clear specifications',
    constellation: 'Perfectus',
    starColor: '#A78BFA',
  },
  {
    level: 5,
    title: 'Conductor',
    subtitle: 'Multi-Agent',
    description: 'Central orchestrator. Hub-and-spoke. Parallel execution with model tiering.',
    unlockRequirement: 'CC Mirror setup',
    constellation: 'Harmonia',
    starColor: '#FB923C',
  },
  {
    level: 6,
    title: 'Swarm Lord',
    subtitle: 'Parallel Worktrees',
    description: 'Git isolation. Multiple loops simultaneously. Merge orchestration.',
    unlockRequirement: 'Git worktree mastery',
    constellation: 'Multitudo',
    starColor: '#F87171',
  },
  {
    level: 7,
    title: 'Gas Town',
    subtitle: 'Factory Scale',
    description: 'Agent factory. 7+ roles. Self-improving systems. Human becomes PM.',
    unlockRequirement: 'All previous levels',
    constellation: 'Apex Stellae',
    starColor: '#FBBF24',
  },
]

// ============================================================================
// BACKGROUND STARS COMPONENT
// ============================================================================

function BackgroundStars({ count = 150 }: { count?: number }) {
  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      brightness: Math.random() * 0.5 + 0.3,
    })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: '#fff',
          }}
          animate={{
            opacity: [star.brightness, star.brightness + 0.4, star.brightness],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// ============================================================================
// NEBULA EFFECT COMPONENT
// ============================================================================

function NebulaEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Purple/blue nebula - top right */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
      />
      {/* Pink nebula - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }}
      />
      {/* Blue dust - center */}
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
    </div>
  )
}

// ============================================================================
// CONSTELLATION LINE COMPONENT
// ============================================================================

interface ConstellationLineProps {
  from: StarPosition
  to: StarPosition
  isUnlocked: boolean
  isNext: boolean
}

function ConstellationLine({ from, to, isUnlocked, isNext }: ConstellationLineProps) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BRAND_BLUE} />
          <stop offset="100%" stopColor={BRAND_RED} />
        </linearGradient>
      </defs>

      <motion.line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke={isUnlocked ? 'url(#lineGradient)' : '#4B5563'}
        strokeWidth={isUnlocked ? 2 : 1}
        strokeDasharray={isNext ? '8 4' : 'none'}
        strokeOpacity={isUnlocked ? 0.6 : 0.2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Animated dash for next connection */}
      {isNext && (
        <motion.line
          x1={`${from.x}%`}
          y1={`${from.y}%`}
          x2={`${to.x}%`}
          y2={`${to.y}%`}
          stroke={BRAND_RED}
          strokeWidth={2}
          strokeDasharray="8 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -24 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </svg>
  )
}

// ============================================================================
// STAR NODE COMPONENT
// ============================================================================

interface StarNodeProps {
  level: LevelData
  position: StarPosition
  isUnlocked: boolean
  isCurrent: boolean
  isSelected: boolean
  onClick: () => void
}

function StarNode({ level, position, isUnlocked, isCurrent, isSelected, onClick }: StarNodeProps) {
  const isApex = level.level === 7
  const starSize = isApex ? 48 : isCurrent ? 40 : 32

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: isSelected ? 20 : 10,
      }}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: level.level * 0.1, type: 'spring', stiffness: 200 }}
    >
      {/* Glow ring for current */}
      {isCurrent && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: starSize + 24,
            height: starSize + 24,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${BRAND_RED}40 0%, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Outer glow */}
      {isUnlocked && (
        <div
          className="absolute rounded-full blur-lg"
          style={{
            width: starSize + 16,
            height: starSize + 16,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: level.starColor,
            opacity: 0.4,
          }}
        />
      )}

      {/* Star core */}
      <motion.div
        className="relative rounded-full flex items-center justify-center"
        style={{
          width: starSize,
          height: starSize,
          background: isUnlocked
            ? isApex
              ? `radial-gradient(circle at 30% 30%, #FDE68A, ${level.starColor})`
              : `radial-gradient(circle at 30% 30%, #fff, ${level.starColor})`
            : 'radial-gradient(circle at 30% 30%, #4B5563, #1f2937)',
          boxShadow: isUnlocked
            ? `0 0 ${starSize/2}px ${level.starColor}60, 0 0 ${starSize}px ${level.starColor}30`
            : 'none',
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className="text-xs font-bold"
          style={{ color: isUnlocked ? (isApex ? '#92400E' : '#1f2937') : '#9CA3AF' }}
        >
          {level.level}
        </span>
      </motion.div>

      {/* Star label */}
      <motion.div
        className="absolute whitespace-nowrap text-center"
        style={{
          top: starSize + 8,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: level.level * 0.1 + 0.5 }}
      >
        <p
          className="text-xs font-medium"
          style={{ color: isUnlocked ? level.starColor : '#6B7280' }}
        >
          {level.title}
        </p>
        <p
          className="text-[10px] italic"
          style={{ color: isUnlocked ? '#9CA3AF' : '#4B5563' }}
        >
          {level.constellation}
        </p>
      </motion.div>

      {/* "You are here" indicator */}
      {isCurrent && (
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-white/10 backdrop-blur"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-bold" style={{ color: BRAND_RED }}>
            YOU ARE HERE
          </span>
        </motion.div>
      )}

      {/* Locked fog overlay */}
      {!isUnlocked && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 0%, rgba(15,15,26,0.8) 100%)',
            width: starSize + 20,
            height: starSize + 20,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </motion.div>
  )
}

// ============================================================================
// INFO PANEL COMPONENT
// ============================================================================

interface InfoPanelProps {
  level: LevelData | null
  isOpen: boolean
  onClose: () => void
  currentLevel: number
}

function InfoPanel({ level, isOpen, onClose, currentLevel }: InfoPanelProps) {
  if (!level) return null

  const isUnlocked = level.level <= currentLevel
  const isCurrent = level.level === currentLevel

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
        >
          <div
            className="rounded-2xl p-6 backdrop-blur-xl"
            style={{
              background: 'rgba(26, 26, 46, 0.95)',
              border: `2px solid ${level.starColor}40`,
              boxShadow: `0 0 60px ${level.starColor}20`,
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <span className="text-white text-xl">×</span>
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #fff, ${level.starColor})`,
                  color: '#1f2937',
                }}
              >
                {level.level}
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {level.title}
                </h3>
                <p className="text-sm" style={{ color: level.starColor }}>
                  {level.subtitle} · {level.constellation}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="mb-4">
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-300">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-red-400"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Current Position
                </span>
              )}
              {level.level < currentLevel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Charted
                </span>
              )}
              {level.level > currentLevel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-500/20 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-gray-500" />
                  Uncharted
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className="text-gray-300 leading-relaxed mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {level.description}
            </p>

            {/* Unlock requirement */}
            <div
              className="rounded-lg p-3"
              style={{
                backgroundColor: isUnlocked ? 'rgba(34, 197, 94, 0.1)' : 'rgba(251, 191, 36, 0.1)',
                borderLeft: `3px solid ${isUnlocked ? '#22c55e' : '#fbbf24'}`,
              }}
            >
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: isUnlocked ? '#22c55e' : '#fbbf24' }}>
                {isUnlocked ? 'Unlocked via' : 'To chart this star'}
              </span>
              <p className="text-sm mt-1" style={{ color: isUnlocked ? '#86efac' : '#fde68a' }}>
                {level.unlockRequirement}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface SkillConstellationProps {
  currentLevel?: number
  onLevelSelect?: (level: number) => void
  className?: string
}

export function SkillConstellation({
  currentLevel = 3,
  onLevelSelect,
  className = '',
}: SkillConstellationProps) {
  const [selectedLevel, setSelectedLevel] = useState<LevelData | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleStarClick = useCallback((level: LevelData) => {
    setSelectedLevel(level)
    setIsPanelOpen(true)
    onLevelSelect?.(level.level)
  }, [onLevelSelect])

  const handleClosePanel = useCallback(() => {
    setIsPanelOpen(false)
  }, [])

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        backgroundColor: tokens.space,
        minHeight: '600px',
        height: '100vh',
      }}
    >
      {/* Background stars */}
      <BackgroundStars count={150} />

      {/* Nebula effects */}
      <NebulaEffect />

      {/* Title */}
      <div className="absolute top-8 left-8 z-20">
        <h1
          className="text-3xl font-bold text-white mb-1"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          The Complexity Constellation
        </h1>
        <p className="text-sm text-gray-400">
          8 stars to chart · {currentLevel}/7 discovered
        </p>
      </div>

      {/* Constellation lines */}
      {CONNECTIONS.map(([from, to]) => (
        <ConstellationLine
          key={`${from}-${to}`}
          from={STAR_POSITIONS[from]}
          to={STAR_POSITIONS[to]}
          isUnlocked={from < currentLevel && to <= currentLevel}
          isNext={from === currentLevel - 1 && to === currentLevel}
        />
      ))}

      {/* Star nodes */}
      {LEVELS.map(level => (
        <StarNode
          key={level.level}
          level={level}
          position={STAR_POSITIONS[level.level]}
          isUnlocked={level.level <= currentLevel}
          isCurrent={level.level === currentLevel}
          isSelected={selectedLevel?.level === level.level}
          onClick={() => handleStarClick(level)}
        />
      ))}

      {/* Info panel */}
      <InfoPanel
        level={selectedLevel}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        currentLevel={currentLevel}
      />

      {/* Legend */}
      <div className="absolute bottom-8 left-8 z-10 bg-white/5 backdrop-blur rounded-xl p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white to-emerald-400 shadow-lg shadow-emerald-400/50" />
            <span className="text-xs text-gray-400">Charted</span>
          </div>
          <div className="flex items-center gap-3">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-gray-400">Current Position</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <span className="text-xs text-gray-400">Uncharted</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-lg shadow-yellow-400/50" />
            <span className="text-xs text-gray-400">Apex Star</span>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 right-8 z-10 bg-white/5 backdrop-blur rounded-xl p-4">
        <div className="flex items-center gap-3">
          {LEVELS.map(level => (
            <div
              key={level.level}
              className="w-3 h-3 rounded-full transition-colors"
              style={{
                backgroundColor: level.level <= currentLevel ? level.starColor : '#374151',
                boxShadow: level.level <= currentLevel ? `0 0 8px ${level.starColor}80` : 'none',
              }}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Journey Progress
        </p>
      </div>

      {/* Click hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-600">
        Click any star to explore
      </p>
    </div>
  )
}

// ============================================================================
// DEMO WRAPPER
// ============================================================================

export function SkillConstellationDemo() {
  const [currentLevel, setCurrentLevel] = useState(3)

  return (
    <div>
      {/* Level selector */}
      <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur rounded-lg p-3">
        <p className="text-xs text-white mb-2">Demo: Set current level</p>
        <div className="flex gap-1">
          {LEVELS.map(level => (
            <button
              key={level.level}
              onClick={() => setCurrentLevel(level.level)}
              className={`w-8 h-8 rounded text-sm font-bold transition-colors ${
                currentLevel === level.level
                  ? 'text-gray-900'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              style={{
                backgroundColor: currentLevel === level.level ? level.starColor : undefined,
              }}
            >
              {level.level}
            </button>
          ))}
        </div>
      </div>

      <SkillConstellation
        currentLevel={currentLevel}
        onLevelSelect={(level) => console.log(`Selected level: ${level}`)}
      />
    </div>
  )
}

export default SkillConstellation
