import { AlertTriangle } from 'lucide-react'

interface GotchaBoxProps {
  title?: string
  symptom: string
  why: string
  stats?: string
  fix: string | React.ReactNode
}

export function GotchaBox({ title, symptom, why, stats, fix }: GotchaBoxProps) {
  return (
    <div className="bg-warning-light/10 border border-warning rounded-xl mb-6 overflow-hidden">
      {/* Header */}
      <div className="bg-warning/10 px-5 py-3 flex items-center gap-3 border-b border-warning/30">
        <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
        <h4 className="font-bold text-text-primary">
          {title || 'Common Gotcha'}
        </h4>
      </div>

      <div className="p-5 space-y-4">
        {/* Symptom */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-warning mb-1 block">
            Symptom
          </span>
          <p className="text-text-secondary">{symptom}</p>
        </div>

        {/* Why this happens */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1 block">
            Why This Happens
          </span>
          <p className="text-text-secondary">{why}</p>
        </div>

        {/* Stats if provided */}
        {stats && (
          <div className="bg-white/50 rounded-lg p-3 border border-warning/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1 block">
              Impact
            </span>
            <p className="text-lg font-semibold text-warning">{stats}</p>
          </div>
        )}

        {/* Fix */}
        <div className="bg-success-light/10 rounded-lg p-4 border border-success-light/30">
          <span className="text-xs font-semibold uppercase tracking-wider text-success mb-2 block">
            The Fix
          </span>
          <div className="text-text-secondary">
            {typeof fix === 'string' ? <p>{fix}</p> : fix}
          </div>
        </div>
      </div>
    </div>
  )
}
