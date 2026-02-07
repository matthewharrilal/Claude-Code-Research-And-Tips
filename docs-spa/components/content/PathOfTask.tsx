/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/PathOfTask.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
"The Diligent Scribe" — renders step-by-step task progressions with numbered
steps connected by a vertical line. Each step can include description text,
code blocks, decision branches (yes/no fork with GitBranch icon), and tips.
Step numbers are SQUARE (not circle) per soul compliance. Decision branches
use a green/red two-column layout for yes/no paths.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| lucide-react (Check, GitBranch)         | Icons for tips and decision branches  |

6. MUST HONOR
- border-radius: 0 on ALL elements including step numbers (soul-locked, SQUARE not circle)
- box-shadow: none (soul-locked)
- Step number: #E83025 red bg, white text, square shape
- Code blocks: #1A1A1A bg, #F0EBE3 text, JetBrains Mono font
- Decision yes: #6b9b7a green border, Decision no: #E83025 red border
- Connecting line: #E0D5C5 vertical between steps
- R1-024: Props/API Table Format, R5-T2: Velocity Mismatch Rule (FAST)

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/mdx-components.tsx             | Registered as MDX component           |
| MDX content pages                       | Used for procedural/tutorial content  |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
import { Check, GitBranch } from 'lucide-react'

/**
 * PathOfTask — "The Diligent Scribe"
 *
 * Research Applied:
 * - R1-024: Props/API Table Format (scannable structure)
 * - R5-T2: Velocity Mismatch Rule (FAST velocity)
 * - R3-023: Interaction Density Zones (Action zone)
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED) — step numbers are SQUARE not circle
 * - box-shadow: none (LOCKED)
 * - Colors: KortAI palette only
 * - Checkboxes: Sharp squares, fill red (#E83025) when checked
 */
interface DecisionBranch {
  condition: string
  yes: string
  no: string
}

interface TaskStep {
  title: string
  description?: string | React.ReactNode
  code?: string
  decision?: DecisionBranch
  tip?: string
}

interface PathOfTaskProps {
  title?: string
  steps: TaskStep[]
}

export function PathOfTask({ title, steps }: PathOfTaskProps) {
  return (
    <div className="mb-8">
      {title && (
        <h3 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>{title}</h3>
      )}

      <div className="relative">
        {/* Vertical line connecting steps */}
        <div
          className="absolute w-0.5"
          style={{
            left: '20px',
            top: '40px',
            bottom: '40px',
            backgroundColor: '#E0D5C5'
          }}
        />

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className="relative pl-14">
              {/* Step number — SQUARE not circle (soul compliance) */}
              <div
                className="absolute left-0 w-10 h-10 flex items-center justify-center font-bold text-lg z-10"
                style={{
                  backgroundColor: '#E83025',
                  color: '#FFFFFF',
                  borderRadius: 0
                }}
              >
                {index + 1}
              </div>

              <div
                className="p-5"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0D5C5',
                  borderRadius: 0
                }}
              >
                {/* Step title */}
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#1A1A1A' }}>
                  {step.title}
                </h4>

                {/* Description */}
                {step.description && (
                  <div className="mb-3" style={{ color: '#666666' }}>
                    {typeof step.description === 'string' ? (
                      <p>{step.description}</p>
                    ) : (
                      step.description
                    )}
                  </div>
                )}

                {/* Code block */}
                {step.code && (
                  <pre
                    className="p-3 overflow-x-auto text-sm mb-3"
                    style={{
                      backgroundColor: '#1A1A1A',
                      color: '#F0EBE3',
                      borderRadius: 0,
                      fontFamily: "'JetBrains Mono', 'SF Mono', monospace"
                    }}
                  >
                    <code>{step.code}</code>
                  </pre>
                )}

                {/* Decision branch */}
                {step.decision && (
                  <div
                    className="mt-4 pt-4"
                    style={{ borderTop: '1px solid #E0D5C5' }}
                  >
                    <div className="flex items-center gap-2 mb-3" style={{ color: '#666666' }}>
                      <GitBranch className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {step.decision.condition}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div
                        className="p-3"
                        style={{
                          backgroundColor: '#F0EBE3',
                          border: '1px solid #6b9b7a',
                          borderRadius: 0
                        }}
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider block mb-1"
                          style={{ color: '#6b9b7a', letterSpacing: '0.05em' }}
                        >
                          Yes
                        </span>
                        <p className="text-sm" style={{ color: '#666666' }}>
                          {step.decision.yes}
                        </p>
                      </div>
                      <div
                        className="p-3"
                        style={{
                          backgroundColor: '#FEF9F5',
                          border: '1px solid #E83025',
                          borderRadius: 0
                        }}
                      >
                        <span
                          className="text-xs font-semibold uppercase tracking-wider block mb-1"
                          style={{ color: '#E83025', letterSpacing: '0.05em' }}
                        >
                          No
                        </span>
                        <p className="text-sm" style={{ color: '#666666' }}>
                          {step.decision.no}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tip */}
                {step.tip && (
                  <div className="mt-3 flex items-start gap-2 text-sm" style={{ color: '#E83025' }}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{step.tip}</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
