/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/CodeBlock.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
Renders code snippets with syntax-aware styling and a copy-to-clipboard button.
"The Precise Transcriptionist" — uses JetBrains Mono font, dark background
(#1A1A1A), and optional filename header bar. Also serves as the MDX `pre`
element override, so all fenced code blocks in MDX content render through this.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| react (useState)                        | Tracks copied state for button feedback |
| lucide-react (Check, Copy)              | Icons for copy button states          |

6. MUST HONOR
- border-radius: 0 on all elements (soul-locked)
- box-shadow: none (soul-locked)
- Background: #1A1A1A, text: #F0EBE3 (KortAI dark code palette)
- Font: JetBrains Mono / SF Mono monospace stack
- R1-017: Monospace Differentiation, R1-021: Code Snippet Best Practices

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/mdx-components.tsx             | Registered as MDX component + pre override |
| All MDX content pages                   | Renders fenced code blocks            |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

/**
 * CodeBlock — "The Precise Transcriptionist"
 *
 * Research Applied:
 * - R1-017: Monospace Differentiation (JetBrains Mono font)
 * - R1-021: Code Snippet Best Practices (copy button, syntax highlighting)
 * - R1-019: Tech Spec Aesthetic (sharp edges, minimal color)
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 * - box-shadow: none (LOCKED)
 * - Colors: #1A1A1A bg, #F0EBE3 text
 */
interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="relative group overflow-hidden mb-4"
      style={{ borderRadius: 0 }}
    >
      {filename && (
        <div
          className="px-4 py-2 text-sm font-mono"
          style={{
            backgroundColor: '#27272A',
            color: '#E0D5C5',
            borderRadius: 0
          }}
        >
          {filename}
        </div>
      )}
      <pre
        className="p-4 overflow-x-auto"
        style={{
          backgroundColor: '#1A1A1A',
          color: '#F0EBE3',
          borderRadius: 0,
          fontFamily: "'JetBrains Mono', 'SF Mono', monospace"
        }}
      >
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          backgroundColor: '#666666',
          color: '#F0EBE3',
          borderRadius: 0
        }}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}
