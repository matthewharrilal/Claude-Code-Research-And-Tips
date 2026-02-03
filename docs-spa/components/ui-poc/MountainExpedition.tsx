'use client'

/**
 * Mountain Expedition Component
 *
 * Visualizes the 8-level Complexity Ladder as climbing a mountain.
 * Each camp station represents a mastery level, with weather and
 * terrain difficulty increasing as you ascend.
 *
 * Design: Side-view mountain with CSS gradients/shapes (no images)
 * Colors: Blue #1A44B8, Red #FF0000, Cream #FBF5EF
 * Typography: Instrument Serif (headings), Georgia (body)
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface LevelData {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement: string
  codeExample?: string
  weather: 'clear' | 'partly-cloudy' | 'overcast' | 'windy' | 'cold' | 'snowy' | 'blizzard' | 'death-zone'
  terrain: string
  timeEstimate: string
  costRange: string
}

interface MountainExpeditionProps {
  currentLevel?: number
  onLevelSelect?: (level: number) => void
  className?: string
}

// ============================================================================
// CONSTANTS
// ============================================================================

const BRAND_BLUE = '#1A44B8'
const BRAND_RED = '#FF0000'
const BRAND_CREAM = '#FBF5EF'

// Camp positions (percentage of container width x height from top-left)
const CAMP_POSITIONS: Record<number, { x: number; y: number }> = {
  0: { x: 12, y: 88 },
  1: { x: 22, y: 78 },
  2: { x: 30, y: 68 },
  3: { x: 38, y: 56 },
  4: { x: 47, y: 44 },
  5: { x: 56, y: 32 },
  6: { x: 65, y: 20 },
  7: { x: 50, y: 6 },
}

// Terrain zone colors (altitude bands)
const TERRAIN_COLORS = {
  ground: '#8B6914',
  forest: '#4B7F52',
  meadow: '#6B8E5E',
  alpine: '#A8A87E',
  rock: '#9E9E9E',
  snow: '#E8E8E8',
  peak: '#FFFFFF',
}

// Level data with climbing metadata
const LEVELS: LevelData[] = [
  {
    level: 0,
    title: 'Base Camp',
    subtitle: 'Single Session',
    description: 'Manual supervision. Context fills. Quality degrades. You give up at 12:30 AM with incomplete feature.',
    unlockRequirement: 'Show up',
    weather: 'clear',
    terrain: 'Flat ground, easy trails',
    timeEstimate: '1 day',
    costRange: '$20-50/mo',
  },
  {
    level: 1,
    title: 'Lower Slopes',
    subtitle: 'CLAUDE.md + Slash Commands',
    description: 'Project context persists. Reusable workflows via commands. Claude remembers your architecture.',
    unlockRequirement: 'Document your project patterns',
    codeExample: `# .claude/commands/review.md
Review the current git diff for:
1. Logic errors
2. Missing error handling`,
    weather: 'partly-cloudy',
    terrain: 'Forest trails, gentle grade',
    timeEstimate: '1 week',
    costRange: '$20-50/mo',
  },
  {
    level: 2,
    title: 'Forest Zone',
    subtitle: 'Subagents + Hooks',
    description: 'Specialized agents handle specific tasks. Hooks automate responses to events. Claude becomes a small team.',
    unlockRequirement: 'Understand tool system + shell scripting',
    weather: 'overcast',
    terrain: 'Steep forest, roots and rocks',
    timeEstimate: '2 weeks',
    costRange: '$50-100/mo',
  },
  {
    level: 3,
    title: 'Alpine Meadows',
    subtitle: 'Basic Ralph Loop',
    description: 'Claude runs in a loop until complete. Fresh context per iteration. External memory via git and files.',
    unlockRequirement: 'Trust in unattended operation',
    codeExample: `while :; do
  claude "Check progress.txt, complete next task"
  sleep 5
done`,
    weather: 'windy',
    terrain: 'Open meadows, exposed ridges',
    timeEstimate: '1 week',
    costRange: '$50-100/mo',
  },
  {
    level: 4,
    title: 'Tree Line',
    subtitle: 'PRD-Driven Loops (Full Ralph)',
    description: 'JSON-based task tracking. Acceptance criteria. Quality gates. Real features shipped overnight.',
    unlockRequirement: 'PRD writing skills + test coverage',
    weather: 'cold',
    terrain: 'Rocky scrambles, thin air',
    timeEstimate: '2 weeks',
    costRange: '$100-200/mo',
  },
  {
    level: 5,
    title: 'Snow Line',
    subtitle: 'Multi-Agent Orchestration',
    description: 'Central orchestrator delegates to workers. Hub-and-spoke. Parallel execution with model tiering.',
    unlockRequirement: 'CC Mirror setup + coordination skills',
    weather: 'snowy',
    terrain: 'Permanent snow, crevasses',
    timeEstimate: '2 weeks',
    costRange: '$200-400/mo',
  },
  {
    level: 6,
    title: 'Death Zone Approach',
    subtitle: 'Parallel Swarms + Worktrees',
    description: 'Git worktrees for isolation. Multiple Ralph loops simultaneously. Merge orchestration.',
    unlockRequirement: 'Git worktree mastery + merge strategies',
    weather: 'blizzard',
    terrain: 'Ice walls, technical climbing',
    timeEstimate: '1 week',
    costRange: '$400-800/mo',
  },
  {
    level: 7,
    title: 'Summit',
    subtitle: 'Gas Town (Factory Scale)',
    description: 'Agent factory architecture. 7+ specialized roles. Self-improving systems. Human = Product Manager.',
    unlockRequirement: 'All previous levels + operational maturity',
    weather: 'death-zone',
    terrain: 'Exposed ridge, no margin for error',
    timeEstimate: '1+ month',
    costRange: '$800+/mo',
  },
]

// ============================================================================
// WEATHER ICONS (SVG Components)
// ============================================================================

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function CloudIcon({ className, partial }: { className?: string; partial?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {partial && (
        <circle cx="18" cy="8" r="4" fill="#FFD700" stroke="#FFA500" strokeWidth="1" />
      )}
      <path
        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

function WindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  )
}

function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function SkullIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="10" r="8" />
      <circle cx="9" cy="9" r="2" fill="white" />
      <circle cx="15" cy="9" r="2" fill="white" />
      <path d="M8 14h8v2H8z" fill="white" />
      <path d="M10 14v4M14 14v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function TentIcon({ className, color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 20h20L12 2z"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M12 2v18M8 20l4-10 4 10"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  )
}

function FlagIcon({ className, number }: { className?: string; number: number }) {
  return (
    <svg className={className} viewBox="0 0 24 32" fill="none">
      <line x1="4" y1="2" x2="4" y2="30" stroke={BRAND_BLUE} strokeWidth="2" />
      <path
        d="M4 2h14l-4 7 4 7H4V2z"
        fill={BRAND_RED}
        stroke={BRAND_RED}
        strokeWidth="1"
      />
      <text
        x="10"
        y="13"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {number}
      </text>
    </svg>
  )
}

// ============================================================================
// WEATHER INDICATOR COMPONENT
// ============================================================================

function WeatherIndicator({ weather }: { weather: LevelData['weather'] }) {
  const weatherConfig: Record<LevelData['weather'], { icon: React.ReactNode; label: string; color: string }> = {
    'clear': { icon: <SunIcon className="w-5 h-5" />, label: 'Clear', color: '#FFD700' },
    'partly-cloudy': { icon: <CloudIcon className="w-5 h-5" partial />, label: 'Partly Cloudy', color: '#87CEEB' },
    'overcast': { icon: <CloudIcon className="w-5 h-5" />, label: 'Overcast', color: '#9CA3AF' },
    'windy': { icon: <WindIcon className="w-5 h-5" />, label: 'Windy', color: '#60A5FA' },
    'cold': { icon: <SnowflakeIcon className="w-5 h-5" />, label: 'Cold', color: '#93C5FD' },
    'snowy': { icon: <SnowflakeIcon className="w-5 h-5" />, label: 'Heavy Snow', color: '#DBEAFE' },
    'blizzard': { icon: <LightningIcon className="w-5 h-5" />, label: 'Blizzard', color: '#FDE047' },
    'death-zone': { icon: <SkullIcon className="w-5 h-5" />, label: 'Death Zone', color: '#EF4444' },
  }

  const config = weatherConfig[weather]

  return (
    <div className="flex items-center gap-2" style={{ color: config.color }}>
      {config.icon}
      <span className="text-xs font-medium">{config.label}</span>
    </div>
  )
}

// ============================================================================
// CAMP MARKER COMPONENT
// ============================================================================

interface CampMarkerProps {
  level: LevelData
  position: { x: number; y: number }
  isActive: boolean
  isCurrent: boolean
  isCompleted: boolean
  onClick: () => void
}

function CampMarker({ level, position, isActive, isCurrent, isCompleted, onClick }: CampMarkerProps) {
  const markerSize = isCurrent ? 48 : 40

  return (
    <motion.g
      style={{
        cursor: 'pointer',
      }}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: level.level * 0.1, type: 'spring', stiffness: 200 }}
    >
      {/* Glow effect for current level */}
      {isCurrent && (
        <motion.circle
          cx={`${position.x}%`}
          cy={`${position.y}%`}
          r={32}
          fill={BRAND_RED}
          opacity={0.2}
          animate={{ r: [28, 36, 28], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Camp platform */}
      <ellipse
        cx={`${position.x}%`}
        cy={`${position.y + 2}%`}
        rx="20"
        ry="6"
        fill={isCompleted ? BRAND_BLUE : '#6B7280'}
        opacity={0.5}
      />

      {/* Tent */}
      <foreignObject
        x={`${position.x - 2.5}%`}
        y={`${position.y - 4}%`}
        width={markerSize}
        height={markerSize}
      >
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <TentIcon
            className="w-full h-full drop-shadow-lg"
            color={isCurrent ? BRAND_RED : isCompleted ? BRAND_BLUE : '#9CA3AF'}
          />
        </motion.div>
      </foreignObject>

      {/* Flag with level number */}
      <foreignObject
        x={`${position.x + 1}%`}
        y={`${position.y - 7}%`}
        width={24}
        height={32}
      >
        <FlagIcon className="w-full h-full" number={level.level} />
      </foreignObject>

      {/* Level label */}
      <text
        x={`${position.x}%`}
        y={`${position.y + 6}%`}
        textAnchor="middle"
        fontSize="10"
        fontWeight="600"
        fill={isActive ? BRAND_RED : isCompleted ? BRAND_BLUE : '#6B7280'}
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {level.title}
      </text>
    </motion.g>
  )
}

// ============================================================================
// SWITCHBACK PATH COMPONENT
// ============================================================================

function SwitchbackPaths({ currentLevel }: { currentLevel: number }) {
  // Generate bezier curves between camps with increasing complexity
  const generatePath = (from: number, to: number): string => {
    const start = CAMP_POSITIONS[from]
    const end = CAMP_POSITIONS[to]

    // Number of switchbacks increases with level
    const switchbacks = Math.min(from + 2, 5)

    // Calculate control points for a natural-looking path
    const dx = end.x - start.x
    const dy = end.y - start.y

    let path = `M ${start.x} ${start.y}`

    for (let i = 0; i < switchbacks; i++) {
      const t = (i + 1) / (switchbacks + 1)
      const x = start.x + dx * t
      const y = start.y + dy * t

      // Alternate left-right for switchback effect
      const offset = (i % 2 === 0 ? 1 : -1) * (3 + from * 0.5)

      path += ` Q ${x + offset} ${y - dy * 0.1}, ${x} ${y}`
    }

    path += ` L ${end.x} ${end.y}`

    return path
  }

  return (
    <g>
      {LEVELS.slice(0, -1).map((level) => {
        const isCompleted = level.level < currentLevel
        const isNext = level.level === currentLevel
        const pathD = generatePath(level.level, level.level + 1)

        return (
          <g key={`path-${level.level}`}>
            {/* Path shadow */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="6"
              strokeLinecap="round"
              transform="translate(0.5, 0.5)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: level.level * 0.15 + 0.5, duration: 0.8 }}
            />

            {/* Main path */}
            <motion.path
              d={pathD}
              fill="none"
              stroke={isCompleted ? BRAND_BLUE : isNext ? 'url(#pathGradient)' : '#D1D5DB'}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={isNext ? '8 4' : 'none'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: level.level * 0.15 + 0.5, duration: 0.8 }}
            />

            {/* Animated dash for current path */}
            {isNext && (
              <motion.path
                d={pathD}
                fill="none"
                stroke={BRAND_RED}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -24 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </g>
        )
      })}
    </g>
  )
}

// ============================================================================
// MOUNTAIN SHAPE COMPONENT
// ============================================================================

function MountainShape() {
  return (
    <>
      {/* Mountain gradient definitions */}
      <defs>
        {/* Sky gradient */}
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="60%" stopColor="#B8D4E8" />
          <stop offset="100%" stopColor={BRAND_CREAM} />
        </linearGradient>

        {/* Mountain body gradient (altitude zones) */}
        <linearGradient id="mountainGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={TERRAIN_COLORS.forest} />
          <stop offset="20%" stopColor={TERRAIN_COLORS.meadow} />
          <stop offset="40%" stopColor={TERRAIN_COLORS.alpine} />
          <stop offset="60%" stopColor={TERRAIN_COLORS.rock} />
          <stop offset="80%" stopColor={TERRAIN_COLORS.snow} />
          <stop offset="100%" stopColor={TERRAIN_COLORS.peak} />
        </linearGradient>

        {/* Path gradient for "next" indicator */}
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BRAND_BLUE} />
          <stop offset="100%" stopColor={BRAND_RED} />
        </linearGradient>

        {/* Snow cap gradient */}
        <linearGradient id="snowCapGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" stopOpacity="0" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
        </linearGradient>

        {/* Fog gradient */}
        <linearGradient id="fogGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="0.4" />
          <stop offset="70%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Sun glow filter */}
        <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sky background */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#skyGradient)" />

      {/* Sun behind mountain */}
      <motion.circle
        cx="70%"
        cy="15%"
        r="40"
        fill="#FFD93D"
        filter="url(#sunGlow)"
        animate={{ cy: ['14%', '16%', '14%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <motion.line
          key={angle}
          x1="70%"
          y1="15%"
          x2={`${70 + Math.cos(angle * Math.PI / 180) * 8}%`}
          y2={`${15 + Math.sin(angle * Math.PI / 180) * 8}%`}
          stroke="#FFD93D"
          strokeWidth="2"
          opacity={0.6}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: angle / 360 }}
        />
      ))}

      {/* Background mountains (distant) */}
      <path
        d="M -5 100 L 15 55 L 35 70 L 55 45 L 75 65 L 95 40 L 105 100 Z"
        fill="#B8C4CE"
        opacity="0.4"
        transform="translate(0, -5)"
      />

      {/* Main mountain shape */}
      <motion.path
        d={`
          M 0 100
          L 5 100
          L 8 95
          C 12 90, 16 88, 20 85
          L 25 80
          C 28 76, 32 72, 35 68
          L 40 62
          C 43 57, 46 52, 48 48
          L 50 42
          C 52 36, 54 30, 55 25
          L 50 10
          C 50 8, 50 6, 50 5
          L 50 4
          C 50 6, 50 8, 50 10
          L 45 25
          C 46 30, 48 36, 52 42
          L 56 48
          C 60 52, 64 57, 68 62
          L 74 68
          C 78 72, 82 76, 85 80
          L 90 85
          C 94 88, 96 90, 98 95
          L 100 100
          Z
        `}
        fill="url(#mountainGradient)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Snow cap overlay */}
      <path
        d={`
          M 35 50
          L 40 42
          C 43 36, 46 30, 48 25
          L 50 10
          L 50 5
          L 50 10
          L 52 25
          C 54 30, 57 36, 60 42
          L 65 50
          C 60 52, 55 48, 50 50
          C 45 48, 40 52, 35 50
          Z
        `}
        fill="url(#snowCapGradient)"
      />

      {/* Ridge lines for texture */}
      <path
        d="M 20 85 Q 30 75, 40 62 Q 45 55, 50 42"
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="2"
      />
      <path
        d="M 80 85 Q 70 75, 60 62 Q 55 55, 50 42"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
      />

      {/* Fog layer at tree line */}
      <motion.rect
        x="0"
        y="55%"
        width="100%"
        height="8%"
        fill="url(#fogGradient)"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ground */}
      <rect x="0" y="95%" width="100%" height="5%" fill={TERRAIN_COLORS.ground} />

      {/* Ground texture lines */}
      {[10, 30, 50, 70, 90].map((x) => (
        <line
          key={x}
          x1={`${x}%`}
          y1="95%"
          x2={`${x + 5}%`}
          y2="100%"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
        />
      ))}
    </>
  )
}

// ============================================================================
// WEATHER EFFECTS COMPONENT
// ============================================================================

function WeatherEffects({ currentLevel }: { currentLevel: number }) {
  // Snow particles (appear at level 5+)
  const showSnow = currentLevel >= 5

  // Clouds (always present, density increases)
  const cloudCount = Math.min(currentLevel + 1, 5)

  return (
    <g>
      {/* Animated clouds */}
      {Array.from({ length: cloudCount }).map((_, i) => {
        const yPos = 10 + i * 8
        const size = 20 + Math.random() * 15
        const duration = 30 + i * 10

        return (
          <motion.g
            key={`cloud-${i}`}
            initial={{ x: -50 }}
            animate={{ x: 110 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 5,
            }}
          >
            <ellipse
              cx="0"
              cy={`${yPos}%`}
              rx={size}
              ry={size * 0.4}
              fill="white"
              opacity={0.6 + i * 0.05}
            />
            <ellipse
              cx={size * 0.3}
              cy={`${yPos - 2}%`}
              rx={size * 0.6}
              ry={size * 0.3}
              fill="white"
              opacity={0.7}
            />
            <ellipse
              cx={-size * 0.2}
              cy={`${yPos - 1}%`}
              rx={size * 0.5}
              ry={size * 0.25}
              fill="white"
              opacity={0.5}
            />
          </motion.g>
        )
      })}

      {/* Storm clouds at high levels */}
      {currentLevel >= 6 && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ellipse cx="45%" cy="8%" rx="60" ry="20" fill="#4B5563" opacity="0.7" />
          <ellipse cx="55%" cy="12%" rx="50" ry="18" fill="#374151" opacity="0.6" />

          {/* Lightning flashes */}
          <motion.path
            d="M 48 15 L 46 22 L 49 22 L 47 30"
            stroke="#FDE047"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 0, 0, 0, 0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.g>
      )}

      {/* Snow particles */}
      {showSnow && Array.from({ length: 20 }).map((_, i) => (
        <motion.circle
          key={`snow-${i}`}
          cx={`${10 + Math.random() * 80}%`}
          cy={`${Math.random() * 50}%`}
          r={1 + Math.random() * 2}
          fill="white"
          initial={{ y: 0, opacity: 0.8 }}
          animate={{
            y: [0, 100],
            x: [0, Math.sin(i) * 20],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        />
      ))}
    </g>
  )
}

// ============================================================================
// CAMP INFO PANEL COMPONENT
// ============================================================================

interface CampInfoPanelProps {
  level: LevelData | null
  isOpen: boolean
  onClose: () => void
  currentLevel: number
}

function CampInfoPanel({ level, isOpen, onClose, currentLevel }: CampInfoPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    if (level?.codeExample) {
      navigator.clipboard.writeText(level.codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [level?.codeExample])

  if (!level) return null

  const isCompleted = level.level < currentLevel
  const isCurrent = level.level === currentLevel
  const isLocked = level.level > currentLevel

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute right-4 top-4 bottom-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ zIndex: 100 }}
        >
          {/* Header */}
          <div
            className="p-5 text-white"
            style={{
              background: isLocked
                ? '#6B7280'
                : isCurrent
                ? `linear-gradient(135deg, ${BRAND_RED} 0%, #CC0000 100%)`
                : `linear-gradient(135deg, ${BRAND_BLUE} 0%, #0D2F7A 100%)`,
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <span className="text-xl">&times;</span>
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-2xl font-bold">{level.level}</span>
              </div>
              <div>
                <h3
                  className="text-xl font-bold tracking-tight"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  {level.title}
                </h3>
                <p className="text-sm opacity-80">{level.subtitle}</p>
              </div>
            </div>

            <WeatherIndicator weather={level.weather} />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Status badge */}
            <div className="mb-4">
              {isCompleted && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Completed
                </span>
              )}
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  You Are Here
                </span>
              )}
              {isLocked && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  Locked
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className="text-gray-700 leading-relaxed mb-5"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {level.description}
            </p>

            {/* Terrain info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Terrain Conditions
              </h4>
              <p className="text-sm text-gray-700">{level.terrain}</p>
            </div>

            {/* Time and cost */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-blue-50 rounded-xl p-3">
                <span className="block text-xs font-semibold text-blue-600 mb-1">Time to Master</span>
                <span className="text-sm font-bold text-blue-900">{level.timeEstimate}</span>
              </div>
              <div className="bg-amber-50 rounded-xl p-3">
                <span className="block text-xs font-semibold text-amber-600 mb-1">API Cost</span>
                <span className="text-sm font-bold text-amber-900">{level.costRange}</span>
              </div>
            </div>

            {/* Code example */}
            {level.codeExample && (
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Example Code
                </h4>
                <div className="relative">
                  <pre
                    className="bg-gray-900 text-gray-100 rounded-xl p-4 text-xs overflow-x-auto"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    {level.codeExample}
                  </pre>
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {copied ? (
                      <span className="text-green-400 text-xs">Copied!</span>
                    ) : (
                      <span className="text-gray-400 text-xs">Copy</span>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Unlock requirement */}
            <div
              className="rounded-xl p-4"
              style={{
                backgroundColor: isLocked ? '#FEF3C7' : '#DCFCE7',
                borderLeft: `4px solid ${isLocked ? '#F59E0B' : '#22C55E'}`,
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: isLocked ? '#92400E' : '#166534' }}>
                {isLocked ? 'To Unlock' : 'Unlock Requirement'}
              </h4>
              <p className="text-sm" style={{ color: isLocked ? '#78350F' : '#14532D' }}>
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
// PROGRESS BAR COMPONENT
// ============================================================================

function ProgressBar({ currentLevel }: { currentLevel: number }) {
  const progress = (currentLevel / 7) * 100

  return (
    <div className="absolute bottom-4 left-4 right-4 z-10">
      <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Expedition Progress
          </span>
          <span className="text-sm font-bold" style={{ color: BRAND_BLUE }}>
            {currentLevel}/7 Camps
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_RED} 100%)`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {LEVELS.map((level) => (
            <div
              key={level.level}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: level.level < currentLevel
                  ? BRAND_BLUE
                  : level.level === currentLevel
                  ? BRAND_RED
                  : '#E5E7EB',
                color: level.level <= currentLevel ? 'white' : '#9CA3AF',
              }}
            >
              {level.level}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function MountainExpedition({
  currentLevel = 3,
  onLevelSelect,
  className = '',
}: MountainExpeditionProps) {
  const [selectedLevel, setSelectedLevel] = useState<LevelData | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleCampClick = useCallback((level: LevelData) => {
    setSelectedLevel(level)
    setIsPanelOpen(true)
    onLevelSelect?.(level.level)
  }, [onLevelSelect])

  const handleClosePanel = useCallback(() => {
    setIsPanelOpen(false)
  }, [])

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      style={{
        backgroundColor: BRAND_CREAM,
        minHeight: '600px',
        maxHeight: '800px',
        height: '70vh',
      }}
    >
      {/* Title overlay */}
      <div className="absolute top-4 left-4 z-10">
        <h2
          className="text-3xl font-bold tracking-tight mb-1"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            color: '#1F2937',
          }}
        >
          The Complexity Ladder
        </h2>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
          8 levels of Claude Code mastery, from base camp to summit
        </p>
      </div>

      {/* Mountain visualization */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {/* Background and mountain */}
        <MountainShape />

        {/* Weather effects */}
        <WeatherEffects currentLevel={currentLevel} />

        {/* Switchback paths between camps */}
        <SwitchbackPaths currentLevel={currentLevel} />

        {/* Camp markers */}
        {LEVELS.map((level) => (
          <CampMarker
            key={level.level}
            level={level}
            position={CAMP_POSITIONS[level.level]}
            isActive={selectedLevel?.level === level.level}
            isCurrent={level.level === currentLevel}
            isCompleted={level.level < currentLevel}
            onClick={() => handleCampClick(level)}
          />
        ))}

        {/* "You are here" floating label */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <foreignObject
            x={`${CAMP_POSITIONS[currentLevel].x - 6}%`}
            y={`${CAMP_POSITIONS[currentLevel].y - 12}%`}
            width="60"
            height="24"
          >
            <motion.div
              className="bg-white rounded-full px-2 py-1 shadow-lg border-2 text-center"
              style={{ borderColor: BRAND_RED }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-[8px] font-bold" style={{ color: BRAND_RED }}>
                YOU ARE HERE
              </span>
            </motion.div>
          </foreignObject>
        </motion.g>
      </svg>

      {/* Info panel */}
      <CampInfoPanel
        level={selectedLevel}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        currentLevel={currentLevel}
      />

      {/* Progress bar */}
      <ProgressBar currentLevel={currentLevel} />

      {/* Legend */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Legend</h4>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_BLUE }} />
            <span className="text-xs text-gray-600">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: BRAND_RED }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-gray-600">Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-600">Locked</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// DEMO WRAPPER (for standalone page)
// ============================================================================

export function MountainExpeditionDemo() {
  const [currentLevel, setCurrentLevel] = useState(3)

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: BRAND_CREAM }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Level selector for demo */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">Demo: Set current level</span>
          <div className="flex gap-2">
            {LEVELS.map((level) => (
              <button
                key={level.level}
                onClick={() => setCurrentLevel(level.level)}
                className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                  currentLevel === level.level
                    ? 'text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: currentLevel === level.level ? BRAND_BLUE : undefined,
                }}
              >
                {level.level}
              </button>
            ))}
          </div>
        </div>

        {/* Main component */}
        <MountainExpedition
          currentLevel={currentLevel}
          onLevelSelect={(level) => console.log(`Selected level: ${level}`)}
        />
      </div>
    </div>
  )
}

export default MountainExpedition
