'use client'

/**
 * Level Card Design Variants
 * Multiple visual approaches to find the right aesthetic
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LevelCardProps {
  level: number
  title: string
  subtitle: string
  description: string
  unlockRequirement?: string
}

// Color mapping
const levelColors: Record<number, { primary: string; light: string; gradient: string }> = {
  0: { primary: '#71717a', light: '#f4f4f5', gradient: 'from-zinc-500 to-zinc-600' },
  1: { primary: '#059669', light: '#ecfdf5', gradient: 'from-emerald-500 to-emerald-600' },
  2: { primary: '#2563eb', light: '#eff6ff', gradient: 'from-blue-500 to-blue-600' },
  3: { primary: '#d97706', light: '#fffbeb', gradient: 'from-amber-500 to-amber-600' },
  4: { primary: '#dc2626', light: '#fef2f2', gradient: 'from-red-500 to-red-600' },
  5: { primary: '#7c3aed', light: '#f5f3ff', gradient: 'from-violet-500 to-violet-600' },
  6: { primary: '#db2777', light: '#fdf2f8', gradient: 'from-pink-500 to-pink-600' },
  7: { primary: '#18181b', light: '#fafafa', gradient: 'from-zinc-800 to-zinc-900' },
}

/**
 * VARIANT 1: Glassmorphism
 * Frosted glass effect with subtle blur
 */
export function LevelCardGlass({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl p-6"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      }}
    >
      {/* Gradient accent */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: `linear-gradient(180deg, ${colors.primary}, ${colors.primary}88)` }}
      />

      <div className="flex items-start gap-4">
        {/* Floating badge */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className={cn(
            'w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg',
            `bg-gradient-to-br ${colors.gradient}`
          )}
        >
          L{level}
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h3>
          <p className="text-sm text-zinc-500 font-medium">{subtitle}</p>
        </div>
      </div>

      <p className="mt-4 text-zinc-600 leading-relaxed">{description}</p>

      {unlockRequirement && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span
            className="px-2 py-1 rounded-full font-medium text-white"
            style={{ backgroundColor: colors.primary }}
          >
            Unlock
          </span>
          <span className="text-zinc-600">{unlockRequirement}</span>
        </div>
      )}
    </motion.div>
  )
}

/**
 * VARIANT 2: Bold Minimal
 * Strong typography, maximum whitespace
 */
export function LevelCardMinimal({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.3 }}
      className="border-l-2 pl-6 py-4"
      style={{ borderColor: colors.primary }}
    >
      <div className="flex items-baseline gap-4 mb-2">
        <span
          className="text-5xl font-black tracking-tighter"
          style={{ color: colors.primary }}
        >
          {level}
        </span>
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 tracking-tight leading-none">{title}</h3>
          <p className="text-zinc-400 uppercase tracking-widest text-xs mt-1">{subtitle}</p>
        </div>
      </div>

      <p className="text-zinc-500 leading-relaxed max-w-xl">{description}</p>

      {unlockRequirement && (
        <p className="mt-3 text-sm">
          <span className="text-zinc-400">→</span>
          <span className="ml-2 text-zinc-600">{unlockRequirement}</span>
        </p>
      )}
    </motion.div>
  )
}

/**
 * VARIANT 3: Dark Premium
 * Dark background, premium feel
 */
export function LevelCardDark({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
        boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: colors.primary }}
      />

      <div className="relative z-10 flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}33, ${colors.primary}11)`,
            border: `1px solid ${colors.primary}44`,
            color: colors.primary,
          }}
        >
          {level}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-zinc-400 text-sm">{subtitle}</p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-zinc-300 leading-relaxed">{description}</p>

      {unlockRequirement && (
        <div
          className="relative z-10 mt-4 px-3 py-2 rounded-lg text-sm"
          style={{
            background: `${colors.primary}15`,
            borderLeft: `2px solid ${colors.primary}`,
          }}
        >
          <span style={{ color: colors.primary }}>Unlock:</span>
          <span className="text-zinc-400 ml-2">{unlockRequirement}</span>
        </div>
      )}
    </motion.div>
  )
}

/**
 * VARIANT 4: Gradient Border
 * Animated gradient border, modern feel
 */
export function LevelCardGradient({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="relative p-[2px] rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}44, ${colors.primary})`,
      }}
    >
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
            }}
          >
            {level}
          </motion.div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
            <p className="text-zinc-500 text-sm">{subtitle}</p>
          </div>
        </div>

        <p className="text-zinc-600 leading-relaxed">{description}</p>

        {unlockRequirement && (
          <div className="mt-4 flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.primary }}
            />
            <span className="text-sm text-zinc-500">{unlockRequirement}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/**
 * VARIANT 5: Colorful Panel
 * Bold color blocks, playful
 */
export function LevelCardColorful({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -10 }}
      animate={{ opacity: 1, rotateX: 0 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-lg"
      style={{ backgroundColor: colors.light }}
    >
      {/* Colored header */}
      <div
        className="p-4 flex items-center gap-4"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl font-black">
          {level}
        </div>
        <div className="text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-zinc-700 leading-relaxed">{description}</p>

        {unlockRequirement && (
          <div className="mt-4 bg-white rounded-lg px-4 py-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill={colors.primary} viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium" style={{ color: colors.primary }}>{unlockRequirement}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/**
 * VARIANT 6: Notion-style
 * Clean, almost invisible borders, content-first
 */
export function LevelCardNotion({ level, title, subtitle, description, unlockRequirement }: LevelCardProps) {
  const colors = levelColors[level] || levelColors[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ backgroundColor: '#fafafa' }}
      transition={{ duration: 0.2 }}
      className="group p-4 rounded-lg cursor-default"
    >
      <div className="flex items-start gap-3">
        {/* Emoji-style badge */}
        <div
          className="w-8 h-8 rounded flex items-center justify-center text-sm font-semibold shrink-0"
          style={{ backgroundColor: colors.light, color: colors.primary }}
        >
          {level}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold text-zinc-900">{title}</h3>
            <span className="text-zinc-400 text-sm">·</span>
            <span className="text-zinc-400 text-sm">{subtitle}</span>
          </div>

          <p className="mt-1 text-zinc-600 text-sm leading-relaxed">{description}</p>

          {unlockRequirement && (
            <p className="mt-2 text-xs text-zinc-400">
              <span style={{ color: colors.primary }}>↳</span> {unlockRequirement}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
