'use client'

/**
 * Design Direction Comparison POC
 *
 * Critical Decision: Radius Philosophy
 * - Current docs-spa: 8-12px rounded corners (soft UI)
 * - Design System: 0px radius (brutalist)
 *
 * These are incompatible - this page helps choose direction.
 *
 * Three Variations:
 * A: Soft Brutalist - 8-12px rounded, 1px borders, subtle shadows
 * B: Pure Brutalist - 0px edges, 2px borders, no shadows
 * C: Hybrid - 0px cards, 8px inputs/badges, selective shadows
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'

// Level data for testing
const levelProgression = [
  { level: 0, title: 'Single Session', subtitle: 'The Pain You Know', description: 'Manual supervision. Context window fills. Quality degrades. You give up at 12:30 AM.', unlockRequirement: 'Show up' },
  { level: 1, title: 'Ralph Loop', subtitle: 'Autonomy Begins', description: 'Fresh context per iteration. External state (prd.json, progress.txt). Sleep, wake up to results.', unlockRequirement: 'Progress tracking + completion markers' },
  { level: 2, title: 'CC Mirror', subtitle: 'Multi-Agent', description: 'Hub-and-spoke orchestration. Opus orchestrator coordinates Sonnet/Haiku workers.', unlockRequirement: 'Task decomposition + verification loops' },
  { level: 6, title: 'Factory Scale', subtitle: 'Autonomous Production', description: 'Multiple orchestrators running simultaneously. Zero human supervision. Self-healing systems.', unlockRequirement: 'Trust + monitoring infrastructure' },
]

// Design System colors (from theme.css)
const DS_PRIMARY = '#E31E24'
const DS_ACCENT_BG = '#FEF2F2'
const DS_GOLD = '#D4AF37'

// Current docs-spa colors
const CURRENT_ACCENT = '#0D9373'
const CURRENT_ACCENT_LIGHT = '#10b981'

// Shared interface
interface LevelCardProps {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement?: string
}

// Level colors consistent across all variations
const levelColors: Record<number, { bg: string; border: string }> = {
  0: { bg: '#71717a', border: '#71717a' },
  1: { bg: '#059669', border: '#059669' },
  2: { bg: '#2563eb', border: '#2563eb' },
  3: { bg: '#d97706', border: '#d97706' },
  4: { bg: '#dc2626', border: '#dc2626' },
  5: { bg: '#7c3aed', border: '#7c3aed' },
  6: { bg: DS_PRIMARY, border: DS_PRIMARY },  // High levels use DS primary
  7: { bg: '#18181b', border: '#18181b' },
}

/**
 * VARIATION A: Soft Brutalist
 * Keep current soft UI feel, add design system elements
 * - Rounded corners (8-12px)
 * - 1px borders
 * - Subtle shadows
 * - Use DS colors for accents
 */
function LevelCardSoftBrutalist({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]
  const isHighLevel = level >= 6

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -2,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.25 }}
      className="bg-white p-6"
      style={{
        borderRadius: '12px',
        border: '1px solid #e4e4e7',
        borderLeftWidth: '4px',
        borderLeftColor: colors.border,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        {/* Rounded badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-white text-lg font-bold"
          style={{
            backgroundColor: colors.bg,
            borderRadius: '50%',
            boxShadow: `0 2px 8px ${colors.bg}40`,
          }}
        >
          {level}
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-zinc-900 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="text-base text-zinc-600 leading-relaxed mb-4">
        {description}
      </p>

      {unlockRequirement && (
        <div
          className="px-4 py-3"
          style={{
            backgroundColor: isHighLevel ? DS_ACCENT_BG : '#fafafa',
            borderRadius: '8px',
          }}
        >
          <span className="text-sm">
            <span
              className="font-semibold"
              style={{ color: isHighLevel ? DS_PRIMARY : CURRENT_ACCENT }}
            >
              Unlock:
            </span>
            {' '}
            <span className="text-zinc-600">{unlockRequirement}</span>
          </span>
        </div>
      )}
    </motion.div>
  )
}

/**
 * VARIATION B: Pure Brutalist
 * Full design system aesthetic
 * - 0px radius (sharp edges)
 * - 2px bold borders
 * - No shadows
 * - Playfair Display for headings (simulated with serif)
 */
function LevelCardPureBrutalist({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]
  const isHighLevel = level >= 6

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        borderColor: DS_PRIMARY,
      }}
      transition={{ duration: 0.2 }}
      className="bg-white p-8"
      style={{
        border: '1px solid #D4D4D4',
        borderLeftWidth: '2px',
        borderLeftColor: colors.border,
      }}
    >
      <div className="flex items-start gap-6 mb-6">
        {/* Square badge - brutalist */}
        <div
          className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-xl font-bold"
          style={{
            backgroundColor: isHighLevel ? DS_PRIMARY : '#f5f5f5',
            color: isHighLevel ? 'white' : '#171717',
          }}
        >
          {level}
        </div>

        <div className="flex-1">
          <h3
            className="text-2xl text-neutral-900 mb-2 tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}  // Simulates Playfair Display
          >
            {title}
          </h3>
          <p className="text-sm text-neutral-500 font-light uppercase tracking-wider">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="text-base text-neutral-600 leading-relaxed mb-6 font-light">
        {description}
      </p>

      {unlockRequirement && (
        <div>
          <div
            className="text-xs font-bold text-neutral-500 uppercase mb-3"
            style={{ letterSpacing: '0.25em' }}
          >
            Unlocks
          </div>
          <div className="flex items-start">
            <span
              className="mr-3 mt-0.5"
              style={{ color: DS_PRIMARY }}
            >
              →
            </span>
            <span className="text-sm text-neutral-600 font-light">
              {unlockRequirement}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  )
}

/**
 * VARIATION C: Hybrid
 * Best of both worlds
 * - 0px for cards (brutalist)
 * - 8px for badges/inputs (soft)
 * - 1px borders with selective shadows on hover
 * - Teal for lower levels, Red for higher levels
 */
function LevelCardHybrid({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]
  const isHighLevel = level >= 6

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      }}
      transition={{ duration: 0.2 }}
      className="bg-white p-6"
      style={{
        border: '1px solid #e4e4e7',
        borderLeftWidth: '3px',
        borderLeftColor: colors.border,
        // No border-radius on card (brutalist)
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        {/* Rounded badge (soft element in brutalist container) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white text-lg font-bold"
          style={{
            backgroundColor: colors.bg,
            borderRadius: '8px',  // Soft radius for badge
            boxShadow: isHighLevel ? `0 0 12px ${DS_PRIMARY}40` : 'none',
          }}
        >
          {level}
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-zinc-900 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5 uppercase tracking-wide text-xs">
            {subtitle}
          </p>
        </div>

        {/* DS influence: tier indicator for high levels */}
        {isHighLevel && (
          <div
            className="px-2 py-1 text-xs font-bold uppercase"
            style={{
              backgroundColor: DS_ACCENT_BG,
              color: DS_PRIMARY,
              letterSpacing: '0.1em',
            }}
          >
            Advanced
          </div>
        )}
      </div>

      <p className="text-base text-zinc-600 leading-relaxed mb-4">
        {description}
      </p>

      {unlockRequirement && (
        <div
          className="px-4 py-3"
          style={{
            backgroundColor: '#fafafa',
            borderRadius: '6px',  // Soft radius for inner elements
            borderLeft: `2px solid ${isHighLevel ? DS_PRIMARY : CURRENT_ACCENT}`,
          }}
        >
          <span className="text-sm">
            <span
              className="font-semibold"
              style={{ color: isHighLevel ? DS_PRIMARY : CURRENT_ACCENT }}
            >
              Unlock:
            </span>
            {' '}
            <span className="text-zinc-600">{unlockRequirement}</span>
          </span>
        </div>
      )}
    </motion.div>
  )
}

// Main comparison page
export default function DesignComparePage() {
  const [selectedVariation, setSelectedVariation] = useState<'A' | 'B' | 'C' | null>(null)

  const variations = [
    {
      id: 'A' as const,
      name: 'Soft Brutalist',
      description: 'Keep current rounded aesthetic. Add DS colors gradually. Familiar feel.',
      traits: ['8-12px rounded corners', '1px borders', 'Subtle shadows', 'Teal primary, red for advanced'],
      risk: 'Low',
      Component: LevelCardSoftBrutalist,
    },
    {
      id: 'B' as const,
      name: 'Pure Brutalist',
      description: 'Full DS adoption. Sharp edges, bold typography. Premium publication feel.',
      traits: ['0px radius (sharp)', '1-2px borders', 'No shadows', 'Red #E31E24 primary'],
      risk: 'Medium',
      Component: LevelCardPureBrutalist,
    },
    {
      id: 'C' as const,
      name: 'Hybrid',
      description: 'Sharp cards, soft inner elements. Best of both worlds. Progressive enhancement.',
      traits: ['0px card radius', '8px badge/input radius', 'Selective shadows', 'Teal → Red progression'],
      risk: 'Low-Medium',
      Component: LevelCardHybrid,
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-100 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Design Direction: Choose Your Path
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-6">
            Critical decision from Gap Analysis: The design system uses <strong>0px radius</strong> (brutalist),
            while docs-spa uses <strong>8-12px radius</strong> (soft UI). These are incompatible. Choose one direction.
          </p>

          {/* Decision context */}
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-left">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">Current: Soft UI</div>
              <div className="text-sm text-amber-700">Rounded corners, subtle shadows</div>
            </div>
            <div className="text-amber-400 text-2xl">vs</div>
            <div className="text-left">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">Design System: Brutalist</div>
              <div className="text-sm text-amber-700">Sharp edges, bold borders</div>
            </div>
          </div>
        </div>

        {/* Three variations side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {variations.map((variation) => (
            <div key={variation.id} className="space-y-4">
              {/* Variation header */}
              <div
                className={cn(
                  'p-4 cursor-pointer transition-all',
                  selectedVariation === variation.id
                    ? 'bg-emerald-50 border-emerald-500'
                    : 'bg-white border-zinc-200 hover:border-zinc-400',
                )}
                style={{
                  border: '2px solid',
                  borderColor: selectedVariation === variation.id ? CURRENT_ACCENT : '#e4e4e7',
                  borderRadius: variation.id === 'B' ? '0' : '8px',  // Meta: each header uses its own style
                }}
                onClick={() => setSelectedVariation(variation.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-8 h-8 flex items-center justify-center font-bold text-white"
                    style={{
                      backgroundColor: selectedVariation === variation.id ? CURRENT_ACCENT : '#71717a',
                      borderRadius: variation.id === 'B' ? '0' : '6px',
                    }}
                  >
                    {variation.id}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-900">{variation.name}</h2>
                </div>
                <p className="text-sm text-zinc-600 mb-3">{variation.description}</p>
                <div className="flex flex-wrap gap-2">
                  {variation.traits.map((trait, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-zinc-100 text-zinc-600"
                      style={{ borderRadius: variation.id === 'B' ? '0' : '4px' }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs">
                  <span className="text-zinc-400">Migration Risk:</span>{' '}
                  <span className={cn(
                    'font-medium',
                    variation.risk === 'Low' ? 'text-green-600' :
                    variation.risk === 'Medium' ? 'text-amber-600' : 'text-zinc-600'
                  )}>
                    {variation.risk}
                  </span>
                </div>
              </div>

              {/* Cards preview */}
              <div
                className="p-6 space-y-4"
                style={{
                  backgroundColor: variation.id === 'B' ? '#fafafa' : '#f4f4f5',
                  borderRadius: variation.id === 'B' ? '0' : '12px',
                }}
              >
                {levelProgression.slice(0, 2).map((data) => (
                  <variation.Component key={data.level} {...data} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full progression for selected variation */}
        {selectedVariation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-2 text-center">
              Full Progression: Variation {selectedVariation}
            </h2>
            <p className="text-zinc-600 text-center mb-8">
              See all levels with the selected design direction
            </p>
            <div
              className="max-w-2xl mx-auto p-8 space-y-5"
              style={{
                backgroundColor: selectedVariation === 'B' ? '#fafafa' : '#ffffff',
                borderRadius: selectedVariation === 'B' ? '0' : '16px',
                border: '1px solid #e4e4e7',
              }}
            >
              {levelProgression.map((data) => {
                const SelectedComponent = variations.find(v => v.id === selectedVariation)!.Component
                return <SelectedComponent key={data.level} {...data} />
              })}
            </div>
          </motion.div>
        )}

        {/* Decision Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Variation A: Soft Brutalist</h3>
            <p className="text-zinc-600 text-sm mb-4">
              Safest choice. Minimal disruption. Add DS colors without changing fundamental feel.
            </p>
            <div className="text-sm">
              <span className="text-green-600 font-medium">+ Lowest risk</span><br/>
              <span className="text-amber-600 font-medium">~ Gradual adoption</span><br/>
              <span className="text-red-600 font-medium">- Less distinctive</span>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Variation B: Pure Brutalist</h3>
            <p className="text-zinc-600 text-sm mb-4">
              Bold commitment. Premium publication aesthetic. Full design system alignment.
            </p>
            <div className="text-sm">
              <span className="text-green-600 font-medium">+ Most distinctive</span><br/>
              <span className="text-green-600 font-medium">+ Full DS alignment</span><br/>
              <span className="text-red-600 font-medium">- Breaking change</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">Variation C: Hybrid (Recommended)</h3>
            <p className="text-zinc-600 text-sm mb-4">
              Sharp containers, soft controls. Clear visual hierarchy. Progressive enhancement.
            </p>
            <div className="text-sm">
              <span className="text-green-600 font-medium">+ Best of both</span><br/>
              <span className="text-green-600 font-medium">+ Clear hierarchy</span><br/>
              <span className="text-amber-600 font-medium">~ Moderate effort</span>
            </div>
          </div>
        </div>

        {/* Selection prompt */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-lg">
            <p className="text-lg font-medium mb-2">
              {selectedVariation
                ? `You selected Variation ${selectedVariation}`
                : 'Click a variation header to select'
              }
            </p>
            <p className="text-zinc-400 text-sm">
              This choice will guide the full migration in Phase 5
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
