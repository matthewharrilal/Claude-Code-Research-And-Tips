/**
 * DesignDecision — "The Impartial Cartographer"
 *
 * Research Applied:
 * - R1-006: Horizontal Comparison Break (multi-column for comparison)
 * - R1-023: Decision Matrix Layout (Options × Criteria grid)
 * - R5-A3: Anti-Pattern: Decision Paralysis (only one matrix per section)
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED) — was rounded-xl
 * - box-shadow: none (LOCKED) — was shadow-sm
 * - Border: 4px left red accent + 1px border
 * - Colors: KortAI palette only
 */
interface DesignDecisionProps {
  question: string
  reasoning: string | React.ReactNode
  forYou: string | React.ReactNode
  alternatives?: string[]
}

export function DesignDecision({
  question,
  reasoning,
  forYou,
  alternatives
}: DesignDecisionProps) {
  return (
    <div
      className="border-l-4 mb-8 overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E0D5C5',
        borderLeftWidth: '4px',
        borderLeftColor: '#E83025',
        borderRadius: 0,
        boxShadow: 'none'
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 border-b"
        style={{
          backgroundColor: '#FEF9F5',
          borderBottomColor: '#E0D5C5'
        }}
      >
        <h3 className="text-xl font-bold" style={{ color: '#1A1A1A' }}>
          Why {question}?
        </h3>
      </div>

      {/* Reasoning */}
      <div className="px-6 py-5">
        <div className="leading-relaxed" style={{ color: '#666666' }}>
          {typeof reasoning === 'string' ? <p>{reasoning}</p> : reasoning}
        </div>

        {/* Alternatives considered */}
        {alternatives && alternatives.length > 0 && (
          <div
            className="mt-4 pt-4"
            style={{ borderTop: '1px solid #F0EBE3' }}
          >
            <span className="text-sm font-medium" style={{ color: '#666666' }}>
              Alternatives considered:
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {alternatives.map((alt, i) => (
                <li
                  key={i}
                  className="text-sm px-3 py-1"
                  style={{
                    backgroundColor: '#F0EBE3',
                    color: '#666666',
                    borderRadius: 0
                  }}
                >
                  {alt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* What This Means For You */}
      <div
        className="px-6 py-4"
        style={{
          backgroundColor: '#F0EBE3',
          borderTop: '1px solid #E0D5C5'
        }}
      >
        <span
          className="text-xs font-semibold uppercase tracking-wider mb-2 block"
          style={{ color: '#E83025', letterSpacing: '0.05em' }}
        >
          What This Means For You
        </span>
        <div style={{ color: '#666666' }}>
          {typeof forYou === 'string' ? <p>{forYou}</p> : forYou}
        </div>
      </div>
    </div>
  )
}
