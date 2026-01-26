import { Flame } from 'lucide-react'

interface WhatsHardProps {
  title?: string
  tension: string
  symptoms: string[]
  mitigation: string | React.ReactNode
}

export function WhatsHard({ title, tension, symptoms, mitigation }: WhatsHardProps) {
  return (
    <div className="bg-error-light/5 border border-error-light/50 rounded-xl mb-6 overflow-hidden">
      {/* Header */}
      <div className="bg-error-light/20 px-5 py-3 flex items-center gap-3 border-b border-error-light/30">
        <Flame className="w-5 h-5 text-error flex-shrink-0" />
        <h4 className="font-bold text-text-primary">
          {title || "What's Hard About This"}
        </h4>
      </div>

      <div className="p-5 space-y-4">
        {/* Core Tension */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-error mb-1 block">
            The Core Tension
          </span>
          <p className="text-text-secondary leading-relaxed">{tension}</p>
        </div>

        {/* Symptoms */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 block">
            You'll Feel This When...
          </span>
          <ul className="space-y-2">
            {symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <span className="text-error mt-1.5 text-xs">●</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mitigation */}
        <div className="bg-white/70 rounded-lg p-4 border border-border">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
            How to Navigate
          </span>
          <div className="text-text-secondary">
            {typeof mitigation === 'string' ? <p>{mitigation}</p> : mitigation}
          </div>
        </div>
      </div>
    </div>
  )
}
