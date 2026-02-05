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
