/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/WhenToUse.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Usage guidance comparison component that presents "Use When" vs "Don't Use When"
in a two-column green/red layout, with an optional "Consider Instead" section
for alternatives. Supports both `use`/`dontUse` and legacy `useWhen`/`dontUseWhen`
prop names for backward compatibility. Helps readers make pattern selection
decisions quickly via visual comparison.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| lucide-react (Check, X)                 | Icons for use (green check) and don't-use (red X) items |

6. MUST HONOR
- border-radius: 0 on all elements (soul-locked)
- box-shadow: none (soul-locked)
- Use column: #6b9b7a sage green icons/label, white bg
- Don't Use column: #E83025 red icons/label, #FEF9F5 cream bg
- Alternatives section: #F0EBE3 bg, JetBrains Mono for pattern names
- Colors: KortAI palette only

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/mdx-components.tsx             | Registered as MDX component           |
| MDX content pages                       | Used for pattern selection guidance   |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
import { Check, X } from 'lucide-react'

/**
 * WhenToUse — Comparison component
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 * - box-shadow: none (LOCKED)
 * - Colors: KortAI palette
 */
interface WhenToUseProps {
  title?: string
  use?: string[]
  dontUse?: string[]
  // Legacy prop names for compatibility
  useWhen?: string[]
  dontUseWhen?: string[]
  alternatives?: Array<{
    name?: string
    when?: string
    condition?: string
    pattern?: string
  }>
}

export function WhenToUse({ title, use, dontUse, useWhen, dontUseWhen, alternatives }: WhenToUseProps) {
  // Support both prop name conventions
  const useItems = use || useWhen || []
  const dontUseItems = dontUse || dontUseWhen || []

  return (
    <div
      className="mb-6 overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0D5C5',
        borderRadius: 0
      }}
    >
      {/* Header */}
      {title && (
        <div
          className="px-5 py-3"
          style={{ borderBottom: '1px solid #E0D5C5' }}
        >
          <h4 className="font-bold" style={{ color: '#1A1A1A' }}>{title}</h4>
        </div>
      )}

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2">
        {/* Use When - Green */}
        <div className="p-5" style={{ borderRight: '1px solid #E0D5C5' }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: '#6b9b7a', letterSpacing: '0.05em' }}
          >
            <Check className="w-4 h-4" />
            Use When
          </span>
          <ul className="space-y-2">
            {useItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: '#666666' }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#6b9b7a' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Don't Use When - Red */}
        <div className="p-5" style={{ backgroundColor: '#FEF9F5' }}>
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2"
            style={{ color: '#E83025', letterSpacing: '0.05em' }}
          >
            <X className="w-4 h-4" />
            Don&apos;t Use When
          </span>
          <ul className="space-y-2">
            {dontUseItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: '#666666' }}>
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#E83025' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <div
          className="px-5 py-4"
          style={{
            backgroundColor: '#F0EBE3',
            borderTop: '1px solid #E0D5C5'
          }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-3 block"
            style={{ color: '#666666', letterSpacing: '0.05em' }}
          >
            Consider Instead
          </span>
          <div className="space-y-2">
            {alternatives.map((alt, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
                    color: '#E83025'
                  }}
                >
                  {alt.name || alt.pattern}
                </span>
                <span style={{ color: '#666666' }}>—</span>
                <span className="text-sm" style={{ color: '#666666' }}>{alt.when || alt.condition}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
