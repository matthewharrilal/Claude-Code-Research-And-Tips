/*
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/components/content/EssenceBox.tsx
Tier: B | Batch: 9 | Generated: 2026-02-06

1. WHY THIS EXISTS
"The Archivist of Axioms" — displays soul/essence statements with reverent,
timeless typography. Like marginalia in a first-edition book. The defining
character trait is Instrument Serif ITALIC body text with a #D97706 amber
left-accent border on cream background. Used for distilled philosophical
principles and core truths.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| React (core)                            | Component rendering, children prop    |

6. MUST HONOR
- border-radius: 0 on all elements (soul-locked)
- box-shadow: none (soul-locked)
- Body text MUST use Instrument Serif italic (defining character trait)
- Accent: #D97706 amber 4px left border on #FEF9F5 cream bg
- Label: "ESSENCE" uppercase, #D97706 color
- R1-018: Drop Cap & Pull Quote, R2-019: Typography as Primary Design
- R5-R3: Component Voices via Typography (Serif = "Archivist" voice)

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| docs-spa/components/content/index.ts    | Re-exported from barrel file          |
| docs-spa/mdx-components.tsx             | Registered as MDX component           |
| MDX content pages                       | Used for core philosophy/essence text |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
*/
interface EssenceBoxProps {
  children: React.ReactNode
}

/**
 * EssenceBox — "The Archivist of Axioms"
 *
 * Character: Reverent, timeless philosophy. Like marginalia in a first-edition book.
 * Critical: Uses Instrument Serif ITALIC for body text — this is the defining character trait.
 *
 * Research Applied:
 * - R1-018: Drop Cap & Pull Quote Pattern (serif italic for section emphasis)
 * - R2-002: Pull Quotes as Structural Elements (large typographic excerpt)
 * - R2-019: Typography as Primary Design (serif italic quote)
 * - R5-R3: Component Voices via Typography (Serif = "Archivist" voice)
 *
 * Soul Compliance:
 * - border-radius: 0 (no rounded corners)
 * - box-shadow: none (flat design)
 * - Colors: KortAI palette only (#D97706 amber accent, #FEF9F5 cream bg)
 */
export function EssenceBox({ children }: EssenceBoxProps) {
  return (
    <div
      className="border-l-4 p-6 mb-8"
      style={{
        backgroundColor: '#FEF9F5',
        borderLeftColor: '#D97706',
        borderRadius: 0
      }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-wider mb-2 block"
        style={{ color: '#D97706' }}
      >
        ESSENCE
      </span>
      <p
        className="text-lg leading-relaxed"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontStyle: 'italic',
          color: '#1A1A1A'
        }}
      >
        {children}
      </p>
    </div>
  )
}
