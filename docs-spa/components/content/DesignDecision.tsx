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
    <div className="bg-white border border-border rounded-xl shadow-sm mb-8 overflow-hidden">
      {/* Header */}
      <div className="bg-accent-light/20 px-6 py-4 border-b border-border">
        <h3 className="text-xl font-bold text-text-primary">
          Why {question}?
        </h3>
      </div>

      {/* Reasoning */}
      <div className="px-6 py-5">
        <div className="text-text-secondary leading-relaxed">
          {typeof reasoning === 'string' ? <p>{reasoning}</p> : reasoning}
        </div>

        {/* Alternatives considered */}
        {alternatives && alternatives.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <span className="text-sm font-medium text-text-muted">
              Alternatives considered:
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {alternatives.map((alt, i) => (
                <li
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-100 text-text-muted rounded-full"
                >
                  {alt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* What This Means For You */}
      <div className="bg-success-light/10 px-6 py-4 border-t border-success-light/30">
        <span className="text-xs font-semibold uppercase tracking-wider text-success mb-2 block">
          What This Means For You
        </span>
        <div className="text-text-secondary">
          {typeof forYou === 'string' ? <p>{forYou}</p> : forYou}
        </div>
      </div>
    </div>
  )
}
