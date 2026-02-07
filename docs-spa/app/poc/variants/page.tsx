/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/poc/variants/page.tsx
Tier: C | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
Design variant showcase page that renders six different LevelCard visual styles
(Glassmorphism, Bold Minimal, Dark Premium, Gradient Border, Colorful Panel,
Notion-style) side by side for comparison and design direction evaluation.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/ui-poc/LevelCardVariants.tsx | Imports all 6 variant components (Glass, Minimal, Dark, Gradient, Colorful, Notion) |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Next.js App Router                      | Serves as page component at /poc/variants route |
| docs-spa/app/poc/page.tsx               | Links to this page from variant gallery |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
'use client'

/**
 * Design Variants Showcase
 * Compare different visual approaches side by side
 */

import {
  LevelCardGlass,
  LevelCardMinimal,
  LevelCardDark,
  LevelCardGradient,
  LevelCardColorful,
  LevelCardNotion,
} from '@/components/ui-poc/LevelCardVariants'

const sampleData = {
  level: 2,
  title: 'CC Mirror',
  subtitle: 'Multi-Agent',
  description: 'Hub-and-spoke orchestration. Opus orchestrator coordinates Sonnet/Haiku workers. Parallel execution. Model tiering for cost optimization.',
  unlockRequirement: 'Task decomposition + verification loops'
}

const levelProgression = [
  { level: 0, title: 'Single Session', subtitle: 'The Pain You Know', description: 'Manual supervision. Context window fills. Quality degrades.', unlockRequirement: 'Show up' },
  { level: 1, title: 'Ralph Loop', subtitle: 'Autonomy Begins', description: 'Fresh context per iteration. External state. Sleep, wake up to results.', unlockRequirement: 'Progress tracking' },
  { level: 2, title: 'CC Mirror', subtitle: 'Multi-Agent', description: 'Hub-and-spoke orchestration. Parallel workers. Model tiering.', unlockRequirement: 'Task decomposition' },
  { level: 3, title: 'Specialized Workers', subtitle: 'Role Definition', description: 'Workers get domain expertise. Each knows their constraints.', unlockRequirement: 'Clear boundaries' },
]

export default function VariantsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Design Variants
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Six different visual approaches. Which aesthetic fits best?
          </p>
        </div>

        {/* Grid of variants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* VARIANT 1: Glassmorphism */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm">1</span>
              Glassmorphism
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Frosted glass effect, subtle blur, floating elements. Modern and premium.</p>
            <div className="bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 p-6 rounded-2xl">
              <div className="space-y-4">
                {levelProgression.slice(0, 2).map(data => (
                  <LevelCardGlass key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

          {/* VARIANT 2: Bold Minimal */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-sm">2</span>
              Bold Minimal
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Giant numbers, strong typography, maximum whitespace. Content-first.</p>
            <div className="bg-white p-8 rounded-2xl">
              <div className="space-y-8">
                {levelProgression.slice(0, 2).map(data => (
                  <LevelCardMinimal key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

          {/* VARIANT 3: Dark Premium */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center text-white text-sm">3</span>
              Dark Premium
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Dark backgrounds, glowing accents, dramatic shadows. High-end feel.</p>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <div className="space-y-4">
                {levelProgression.slice(0, 2).map(data => (
                  <LevelCardDark key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

          {/* VARIANT 4: Gradient Border */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm">4</span>
              Gradient Border
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Animated gradient outlines, spinning badges, clean interior.</p>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <div className="space-y-4">
                {levelProgression.slice(0, 2).map(data => (
                  <LevelCardGradient key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

          {/* VARIANT 5: Colorful Panel */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm">5</span>
              Colorful Panel
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Bold color headers, playful energy, strong visual identity.</p>
            <div className="bg-white p-6 rounded-2xl">
              <div className="grid grid-cols-2 gap-4">
                {levelProgression.map(data => (
                  <LevelCardColorful key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

          {/* VARIANT 6: Notion-style */}
          <div>
            <h2 className="text-xl font-bold text-zinc-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-white border-2 border-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 text-sm">6</span>
              Notion-style
            </h2>
            <p className="text-zinc-500 text-sm mb-6">Ultra-clean, almost invisible structure. Content is everything.</p>
            <div className="bg-white p-4 rounded-2xl border border-zinc-200">
              <div>
                {levelProgression.map(data => (
                  <LevelCardNotion key={data.level} {...data} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Full progression preview */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-zinc-800 mb-8 text-center">
            Full Progression: Dark Premium (My Recommendation)
          </h2>
          <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl">
            <div className="space-y-4">
              {levelProgression.map(data => (
                <LevelCardDark key={data.level} {...data} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
