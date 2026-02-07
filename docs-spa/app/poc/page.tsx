/* ═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/poc/page.tsx
Tier: C | Batch: 8 | Generated: 2026-02-06

1. WHY THIS EXISTS
POC gallery page that showcases 8 design variation experiments (Editorial Docs,
Blueprint, Notebook, Mountain, Trading Cards, Constellation, Sketchbook Blend,
Attio Docs) for the Complexity Ladder visualization. Also includes a before/after
comparison of raw HTML vs. React component approaches.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/ui-poc/LevelCardPOC.tsx | Imports LevelCard, LevelCardList, LevelCardListItem for component demo |
| next/link                               | Navigation to individual variant demo pages |
| framer-motion                           | Staggered entrance animations for variant cards |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Next.js App Router                      | Serves as page component at /poc route |
| docs-spa/app/poc/variants/page.tsx      | Linked from this page's variant cards  |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════ */
'use client'

/**
 * POC Gallery Page
 *
 * Shows all design variations for the Complexity Ladder visualization:
 * 1. Notebook - Personal annotated field notebook
 * 2. Mountain - Climbing expedition visualization
 * 3. Trading Cards - Collectible card game style
 * 4. Constellation - Star map with connected nodes
 *
 * Plus the original component comparison.
 */

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LevelCard, LevelCardList, LevelCardListItem } from '@/components/ui-poc/LevelCardPOC'

// The actual content data (would come from JSON in production)
const levelData = [
  {
    level: 0,
    title: 'Single Session',
    subtitle: 'The Pain You Know',
    description: 'Manual supervision. Context window fills. Quality degrades. You give up at 12:30 AM with incomplete feature.',
    unlockRequirement: 'Show up'
  },
  {
    level: 1,
    title: 'Ralph Loop',
    subtitle: 'Autonomy Begins',
    description: 'Fresh context per iteration. External state (prd.json, progress.txt). You write the PRD, then sleep. Wake up to completed feature.',
    unlockRequirement: 'Progress tracking + completion markers'
  },
  {
    level: 2,
    title: 'CC Mirror',
    subtitle: 'Multi-Agent',
    description: 'Hub-and-spoke orchestration. Opus orchestrator coordinates Sonnet/Haiku workers. Parallel execution. Model tiering for cost optimization.',
    unlockRequirement: 'Task decomposition + verification loops'
  },
  {
    level: 3,
    title: 'Specialized Workers',
    subtitle: 'Role Definition',
    description: 'Workers get domain expertise. Dedicated test writers, doc generators, security auditors. Each knows their constraints.',
    unlockRequirement: 'Clear boundaries + handoff protocols'
  },
]

// OLD APPROACH: Raw HTML string (what's currently in content.html files)
const oldHtmlContent = `
<div class="level-card" id="level-0" style="border-left: 4px solid #71717a; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
  <div class="level-header" style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
    <div class="level-badge" style="flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%; background: #71717a; color: white; font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(113, 113, 122, 0.3);">0</div>
    <div>
      <div class="level-title" style="font-size: 19px; font-weight: 700; color: #0f0f10; line-height: 1.3; letter-spacing: -0.02em;">Single Session</div>
      <div class="level-subtitle" style="font-size: 14px; color: #52525b; font-weight: 500;">The Pain You Know</div>
    </div>
  </div>
  <div class="level-description" style="font-size: 16px; font-weight: 450; color: #27272a; line-height: 1.7; margin-bottom: 16px;">
    Manual supervision. Context window fills. Quality degrades. You give up at 12:30 AM with incomplete feature.
  </div>
  <div class="level-unlock" style="background: #fafafa; border-radius: 8px; padding: 12px 16px; font-size: 14px; color: #27272a;">
    <strong style="color: #0D9373;">Unlock:</strong> Show up
  </div>
</div>

<div class="level-card" id="level-1" style="border-left: 4px solid #059669; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
  <div class="level-header" style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
    <div class="level-badge" style="flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%; background: #059669; color: white; font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.3);">1</div>
    <div>
      <div class="level-title" style="font-size: 19px; font-weight: 700; color: #0f0f10; line-height: 1.3; letter-spacing: -0.02em;">Ralph Loop</div>
      <div class="level-subtitle" style="font-size: 14px; color: #52525b; font-weight: 500;">Autonomy Begins</div>
    </div>
  </div>
  <div class="level-description" style="font-size: 16px; font-weight: 450; color: #27272a; line-height: 1.7; margin-bottom: 16px;">
    Fresh context per iteration. External state (prd.json, progress.txt). You write the PRD, then sleep. Wake up to completed feature.
  </div>
  <div class="level-unlock" style="background: #fafafa; border-radius: 8px; padding: 12px 16px; font-size: 14px; color: #27272a;">
    <strong style="color: #0D9373;">Unlock:</strong> Progress tracking + completion markers
  </div>
</div>
`

// Design variations with metadata
const designVariations = [
  {
    id: 'editorial-docs',
    title: 'Editorial Documentation',
    emoji: '📰',
    description: 'Attio-structure meets Sanrok/Nous visual identity. Bold condensed typography, warm cream background, high contrast. Three-column layout with collapsible navigation.',
    metaphor: '"Contemporary editorial design meets technical documentation"',
    href: '/poc/editorial-docs',
    gradient: 'from-amber-50 to-orange-50',
    borderColor: '#E23B3B',
    density: 4,
    personality: 5,
    usability: 5,
    implementation: 'Complete',
    recommended: true,
  },
  {
    id: 'blueprint',
    title: 'Blueprint Reference',
    emoji: '📐',
    description: 'HIGH DENSITY three-column reference docs. 13px font, tight spacing, inline badges, stacked reference cards. Maximum information density.',
    metaphor: '"Technical reference manual, everything visible at once"',
    href: '/poc/blueprint',
    gradient: 'from-slate-100 to-stone-100',
    borderColor: '#1A44B8',
    density: 5,
    personality: 3,
    usability: 5,
    implementation: 'Medium',
    recommended: true,
  },
  {
    id: 'notebook',
    title: 'Personal Notebook',
    emoji: '📓',
    description: 'Documentation as someone\'s annotated field notebook. Cream paper, blue lines, handwritten headers, sticky notes for callouts.',
    metaphor: '"Discovering someone\'s personal mastery journal"',
    href: '/poc/notebook',
    gradient: 'from-amber-100 to-orange-100',
    borderColor: '#1A44B8',
    density: 5,
    personality: 5,
    usability: 4,
    implementation: 'Medium',
  },
  {
    id: 'mountain',
    title: 'Mountain Expedition',
    emoji: '⛰️',
    description: 'Complexity Ladder as climbing a mountain. Camp stations, switchback paths, weather indicators, animated clouds.',
    metaphor: '"Epic adventure - mastery is EARNED"',
    href: '/poc/mountain',
    gradient: 'from-sky-100 to-emerald-100',
    borderColor: '#059669',
    density: 3,
    personality: 4,
    usability: 3,
    implementation: 'High',
  },
  {
    id: 'trading-cards',
    title: 'Trading Cards',
    emoji: '🃏',
    description: 'Each level as a collectible card with rarity, stats, abilities, and holographic shimmer effects.',
    metaphor: '"Collectible game - progress is rewarding"',
    href: '/poc/trading-cards',
    gradient: 'from-purple-100 to-pink-100',
    borderColor: '#A855F7',
    density: 4,
    personality: 5,
    usability: 4,
    implementation: 'Medium',
  },
  {
    id: 'constellation',
    title: 'Skill Constellation',
    emoji: '✨',
    description: 'Levels as stars in a night sky. Twinkling background, constellation lines, nebula effects, glow on unlocked stars.',
    metaphor: '"Charting the unknown - exploration is discovery"',
    href: '/poc/constellation',
    gradient: 'from-indigo-900 to-purple-900',
    borderColor: '#6366F1',
    density: 3,
    personality: 4,
    usability: 3,
    implementation: 'High',
    darkCard: true,
  },
  {
    id: 'sketchbook-blend',
    title: 'Sketchbook Blend',
    emoji: '📖',
    description: 'Original pamphlet + documentation modes. Asymmetric layout, Medieval blue, Sanrok red accent.',
    metaphor: '"About to open a notebook, still warm from someone\'s hand"',
    href: '/poc/sketchbook-blend',
    gradient: 'from-blue-50 to-slate-50',
    borderColor: '#1A44B8',
    density: 4,
    personality: 5,
    usability: 4,
    implementation: 'Medium',
  },
  {
    id: 'attio-docs',
    title: 'Attio Documentation',
    emoji: '📄',
    description: 'Clean three-column layout. 240px sidebar, 650px content, 200px TOC. Gray scale palette, minimal, professional.',
    metaphor: '"Modern SaaS documentation - clean and scannable"',
    href: '/poc/attio-docs',
    gradient: 'from-gray-50 to-slate-50',
    borderColor: '#111827',
    density: 4,
    personality: 2,
    usability: 5,
    implementation: 'Low',
    recommended: true,
  },
]

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-500' : 'text-gray-300'}>★</span>
      ))}
    </div>
  )
}

export default function POCPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Design System Exploration
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            4 distinct visual approaches to the Complexity Ladder.
            Each balances density vs. personality differently.
          </p>
          <div className="mt-8 flex justify-center gap-4 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60">Density</span> = Information per screen
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60">Personality</span> = Distinctive identity
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60">Usability</span> = Easy to reference
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Design Variations Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Design Variations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designVariations.map((variation, index) => (
              <motion.div
                key={variation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={variation.href}>
                  <div
                    className={`relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl cursor-pointer h-full ${
                      variation.darkCard ? 'text-white' : 'text-zinc-900'
                    }`}
                    style={{
                      background: variation.darkCard
                        ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
                        : `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      borderLeft: `4px solid ${variation.borderColor}`,
                    }}
                  >
                    <div className={`p-6 bg-gradient-to-br ${variation.gradient}`}>
                      {/* Recommended badge */}
                      {variation.recommended && (
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
                          RECOMMENDED
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{variation.emoji}</span>
                        <h3 className="text-xl font-bold">{variation.title}</h3>
                      </div>

                      {/* Description */}
                      <p className={`text-sm mb-3 ${variation.darkCard ? 'text-slate-300' : 'text-zinc-600'}`}>
                        {variation.description}
                      </p>

                      {/* Metaphor */}
                      <p className={`text-xs italic mb-4 ${variation.darkCard ? 'text-slate-400' : 'text-zinc-500'}`}>
                        {variation.metaphor}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 text-xs mb-4">
                        <div>
                          <span className={variation.darkCard ? 'text-slate-400' : 'text-zinc-500'}>Density</span>
                          <StarRating rating={variation.density} />
                        </div>
                        <div>
                          <span className={variation.darkCard ? 'text-slate-400' : 'text-zinc-500'}>Personality</span>
                          <StarRating rating={variation.personality} />
                        </div>
                        <div>
                          <span className={variation.darkCard ? 'text-slate-400' : 'text-zinc-500'}>Usability</span>
                          <StarRating rating={variation.usability} />
                        </div>
                      </div>

                      {/* Implementation badge */}
                      <div className="flex justify-between items-center">
                        <span className={`text-xs ${variation.darkCard ? 'text-slate-400' : 'text-zinc-500'}`}>
                          Implementation: <span className="font-medium">{variation.implementation}</span>
                        </span>
                        <span className={`text-sm font-medium ${variation.darkCard ? 'text-indigo-300' : 'text-indigo-600'}`}>
                          View Demo →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Comparison Matrix</h2>
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-center p-4 font-semibold">📓 Notebook</th>
                  <th className="text-center p-4 font-semibold">⛰️ Mountain</th>
                  <th className="text-center p-4 font-semibold">🃏 Cards</th>
                  <th className="text-center p-4 font-semibold">✨ Constellation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Information Density</td>
                  <td className="text-center p-4"><StarRating rating={5} /></td>
                  <td className="text-center p-4"><StarRating rating={3} /></td>
                  <td className="text-center p-4"><StarRating rating={4} /></td>
                  <td className="text-center p-4"><StarRating rating={3} /></td>
                </tr>
                <tr className="border-t bg-zinc-50/50">
                  <td className="p-4 font-medium">Visual Identity</td>
                  <td className="text-center p-4"><StarRating rating={5} /></td>
                  <td className="text-center p-4"><StarRating rating={4} /></td>
                  <td className="text-center p-4"><StarRating rating={5} /></td>
                  <td className="text-center p-4"><StarRating rating={4} /></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Reference Usability</td>
                  <td className="text-center p-4"><StarRating rating={4} /></td>
                  <td className="text-center p-4"><StarRating rating={3} /></td>
                  <td className="text-center p-4"><StarRating rating={4} /></td>
                  <td className="text-center p-4"><StarRating rating={3} /></td>
                </tr>
                <tr className="border-t bg-zinc-50/50">
                  <td className="p-4 font-medium">Extends to Other Components</td>
                  <td className="text-center p-4 text-green-600 font-medium">Easy</td>
                  <td className="text-center p-4 text-red-600 font-medium">Hard</td>
                  <td className="text-center p-4 text-amber-600 font-medium">Medium</td>
                  <td className="text-center p-4 text-red-600 font-medium">Hard</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="text-center p-4 text-xs">Dense docs</td>
                  <td className="text-center p-4 text-xs">Landing/showcase</td>
                  <td className="text-center p-4 text-xs">Gamification</td>
                  <td className="text-center p-4 text-xs">Overview page</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-16 bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">💡 Recommendation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-emerald-800 mb-2">For Documentation Pages:</h3>
              <p className="text-emerald-700">
                <strong>📓 Notebook</strong> is the strongest choice. Highest information density,
                extends naturally to other components (code blocks, callouts, tables), and has the
                strongest "personal/discovered" feeling.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-800 mb-2">For Landing/Overview Pages:</h3>
              <p className="text-emerald-700">
                <strong>⛰️ Mountain</strong> or <strong>✨ Constellation</strong> work better.
                Visual impact is immediate, great for first impressions, not meant for
                repeated reference use.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/50 rounded-lg">
            <p className="text-emerald-800 font-medium">
              💡 <strong>Hybrid approach:</strong> Use Notebook aesthetic for actual documentation pages,
              Mountain/Constellation for overview pages or navigation.
            </p>
          </div>
        </section>

        {/* Original Component Comparison */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Original Component POC: Before & After
          </h2>
          <p className="text-zinc-600 mb-8">
            Comparison of raw HTML/CSS vs. React components with Framer Motion
          </p>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* OLD APPROACH */}
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-bold text-red-800 mb-2">
                ❌ OLD: Raw HTML + CSS
              </h2>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Rendered via dangerouslySetInnerHTML</li>
                <li>• Inline styles or globals.css classes</li>
                <li>• No type safety</li>
                <li>• No animations</li>
                <li>• Inconsistency possible across pages</li>
                <li>• 1770+ lines of CSS to maintain</li>
              </ul>
            </div>

            <div
              className="bg-white rounded-lg border border-zinc-200 p-6"
              dangerouslySetInnerHTML={{ __html: oldHtmlContent }}
            />

            <div className="bg-zinc-100 rounded-lg p-4 text-xs font-mono text-zinc-600 overflow-auto max-h-64">
              <pre>{oldHtmlContent}</pre>
            </div>
          </div>

          {/* NEW APPROACH */}
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-2">
                ✅ NEW: React Components + Framer Motion
              </h2>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Type-safe props (impossible to render incorrectly)</li>
                <li>• Consistent by design</li>
                <li>• Smooth entrance animations</li>
                <li>• Hover micro-interactions</li>
                <li>• Staggered list animations</li>
                <li>• One component file, not 1770 lines of CSS</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <LevelCardList>
                {levelData.slice(0, 2).map((level) => (
                  <LevelCardListItem key={level.level}>
                    <LevelCard {...level} />
                  </LevelCardListItem>
                ))}
              </LevelCardList>
            </div>

            <div className="bg-zinc-100 rounded-lg p-4 text-xs font-mono text-zinc-600">
              <pre>{`// Usage:
<LevelCardList>
  <LevelCardListItem>
    <LevelCard
      level={0}
      title="Single Session"
      subtitle="The Pain You Know"
      description="Manual supervision..."
      unlockRequirement="Show up"
    />
  </LevelCardListItem>
</LevelCardList>`}</pre>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">🎯 Guaranteed Consistency</h3>
            <p className="text-zinc-600">
              If a LevelCard renders, it renders correctly. The component enforces the design system - impossible to have styling mismatches.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">✨ Micro-interactions</h3>
            <p className="text-zinc-600">
              Hover over the new cards - notice the subtle lift. The badge has spring physics. Lists stagger in. These details make it feel polished.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h3 className="font-bold text-lg text-zinc-900 mb-3">🔧 Maintainability</h3>
            <p className="text-zinc-600">
              One component file vs. hunting through 1770 lines of globals.css. Changes propagate automatically to all instances.
            </p>
          </div>
        </div>

        {/* More Examples */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
            Full Level Progression (New Approach)
          </h2>
          <div className="max-w-2xl mx-auto">
            <LevelCardList>
              {levelData.map((level) => (
                <LevelCardListItem key={level.level}>
                  <LevelCard {...level} />
                </LevelCardListItem>
              ))}
            </LevelCardList>
          </div>
        </div>

        </section>
      </div>
    </div>
  )
}
