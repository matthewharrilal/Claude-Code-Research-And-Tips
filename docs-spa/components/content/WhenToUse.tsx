import { Check, X } from 'lucide-react'

interface WhenToUseProps {
  title?: string
  useWhen: string[]
  dontUseWhen: string[]
  alternatives?: {
    name: string
    when: string
  }[]
}

export function WhenToUse({ title, useWhen, dontUseWhen, alternatives }: WhenToUseProps) {
  return (
    <div className="bg-white border border-border rounded-xl mb-6 overflow-hidden">
      {/* Header */}
      {title && (
        <div className="px-5 py-3 border-b border-border">
          <h4 className="font-bold text-text-primary">{title}</h4>
        </div>
      )}

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Use When - Green */}
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-success mb-3 block flex items-center gap-2">
            <Check className="w-4 h-4" />
            Use When
          </span>
          <ul className="space-y-2">
            {useWhen.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Don't Use When - Red */}
        <div className="p-5 bg-error-light/5">
          <span className="text-xs font-semibold uppercase tracking-wider text-error mb-3 block flex items-center gap-2">
            <X className="w-4 h-4" />
            Don't Use When
          </span>
          <ul className="space-y-2">
            {dontUseWhen.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <X className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alternatives */}
      {alternatives && alternatives.length > 0 && (
        <div className="px-5 py-4 bg-gray-50 border-t border-border">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 block">
            Consider Instead
          </span>
          <div className="space-y-2">
            {alternatives.map((alt, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="font-mono text-sm font-semibold text-accent">
                  {alt.name}
                </span>
                <span className="text-text-muted">—</span>
                <span className="text-sm text-text-secondary">{alt.when}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
