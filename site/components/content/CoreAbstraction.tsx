/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/CoreAbstraction.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
"The Sagacious Mentor" — a composite component that unifies a philosophy quote
(serif italic) with an optional code block, presenting principle-then-proof
teaching sequences. Combines Essence Callout DNA with Code Snippet DNA into a
single pedagogical unit. The philosophy zone uses Instrument Serif italic as
its defining character trait.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| React (core)                            | Component rendering and children prop |

6. MUST HONOR
- border-radius: 0 on all elements (soul-locked)
- box-shadow: none (soul-locked)
- Philosophy zone MUST use Instrument Serif italic (R1-018)
- Code zone: #1A1A1A bg, #F0EBE3 text (KortAI dark code palette)
- Quote accent: #D97706 amber left border on #FEF9F5 cream bg
- R5-N2: Composite Components Pre-Composed, R5-S5: Teaching Moment Sequence

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/mdx-components.tsx             | Registered as MDX component           |
| MDX content pages                       | Used for principle + proof sections   |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
interface CoreAbstractionProps {
  title: string
  philosophy: string
  philosophyAuthor?: string
  code?: string
  codeLanguage?: string
  anchor: string
  children?: React.ReactNode
}

/**
 * CoreAbstraction — "The Sagacious Mentor"
 *
 * Character: Combines Essence Callout + Code Snippet DNA. Philosophy zone uses serif italic.
 *
 * Research Applied:
 * - R1-018: Serif italic for quotes/philosophy
 * - R5-N2: Composite Components Pre-Composed (Essence + Code DNA)
 * - R5-S5: Teaching Moment Sequence (principle + proof)
 *
 * Soul Compliance:
 * - border-radius: 0 (no rounded corners)
 * - box-shadow: none (flat design)
 * - Colors: KortAI palette only
 * - Philosophy zone: Instrument Serif italic
 */
export function CoreAbstraction({
  title,
  philosophy,
  philosophyAuthor,
  code,
  codeLanguage = 'typescript',
  anchor,
  children
}: CoreAbstractionProps) {
  return (
    <section id={anchor} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#1A1A1A' }}>{title}</h2>

      {/* Philosophy Quote — MUST use Instrument Serif italic */}
      <blockquote
        className="border-l-4 pl-6 py-2 mb-6"
        style={{
          backgroundColor: '#FEF9F5',
          borderLeftColor: '#D97706',
          borderRadius: 0
        }}
      >
        <p
          className="text-lg leading-relaxed"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            color: '#666666'
          }}
        >
          &quot;{philosophy}&quot;
        </p>
        {philosophyAuthor && (
          <cite
            className="text-sm mt-2 block not-italic"
            style={{ color: '#666666' }}
          >
            — {philosophyAuthor}
          </cite>
        )}
      </blockquote>

      {/* Code Block — No rounded corners, KortAI colors */}
      {code && (
        <div className="relative group overflow-hidden mb-6" style={{ borderRadius: 0 }}>
          <pre
            className="p-4 overflow-x-auto"
            style={{
              backgroundColor: '#1A1A1A',
              color: '#F0EBE3',
              borderRadius: 0
            }}
          >
            <code className={`language-${codeLanguage}`}>
              {code}
            </code>
          </pre>
        </div>
      )}

      {/* Anchor/Explanation Text */}
      {children && (
        <div className="prose prose-warm max-w-none" style={{ color: '#666666' }}>
          {children}
        </div>
      )}
    </section>
  )
}
