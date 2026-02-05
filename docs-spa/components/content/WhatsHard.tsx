import { Flame } from 'lucide-react'

/**
 * WhatsHard — Challenge/Difficulty component
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 * - box-shadow: none (LOCKED)
 * - Colors: KortAI palette
 */
interface WhatsHardProps {
  title?: string
  tension: string
  symptoms: string[]
  mitigation: string | React.ReactNode
}

export function WhatsHard({ title, tension, symptoms, mitigation }: WhatsHardProps) {
  return (
    <div
      className="border-l-4 mb-6 overflow-hidden"
      style={{
        backgroundColor: '#FEF9F5',
        borderLeftColor: '#E83025',
        border: '1px solid #E0D5C5',
        borderLeftWidth: '4px',
        borderRadius: 0
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{
          backgroundColor: '#F0EBE3',
          borderBottom: '1px solid #E0D5C5'
        }}
      >
        <Flame className="w-5 h-5 flex-shrink-0" style={{ color: '#E83025' }} />
        <h4 className="font-bold" style={{ color: '#1A1A1A' }}>
          {title || "What's Hard About This"}
        </h4>
      </div>

      <div className="p-5 space-y-4">
        {/* Core Tension */}
        <div>
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-1 block"
            style={{ color: '#E83025', letterSpacing: '0.05em' }}
          >
            The Core Tension
          </span>
          <p className="leading-relaxed" style={{ color: '#666666' }}>{tension}</p>
        </div>

        {/* Symptoms */}
        <div>
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-2 block"
            style={{ color: '#666666', letterSpacing: '0.05em' }}
          >
            You&apos;ll Feel This When...
          </span>
          <ul className="space-y-2">
            {symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: '#666666' }}>
                <span className="mt-1.5 text-xs" style={{ color: '#E83025' }}>■</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mitigation */}
        <div
          className="p-4"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0D5C5',
            borderRadius: 0
          }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-2 block"
            style={{ color: '#E83025', letterSpacing: '0.05em' }}
          >
            How to Navigate
          </span>
          <div style={{ color: '#666666' }}>
            {typeof mitigation === 'string' ? <p>{mitigation}</p> : mitigation}
          </div>
        </div>
      </div>
    </div>
  )
}
