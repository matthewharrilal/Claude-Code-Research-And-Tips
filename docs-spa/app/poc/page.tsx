'use client'

/**
 * POC Comparison Page
 *
 * Shows side-by-side comparison of:
 * - OLD: Raw HTML with CSS (current approach)
 * - NEW: React components with shadcn/ui patterns + Framer Motion
 */

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

export default function POCPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">
            UI Component POC: Before & After
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Comparison of the current raw HTML/CSS approach vs. shadcn/ui patterns + Framer Motion
          </p>
        </div>

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

      </div>
    </div>
  )
}
