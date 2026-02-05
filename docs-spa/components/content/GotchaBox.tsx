/**
 * GotchaBox — "The Vigilant Sentinel"
 *
 * REDESIGNED to match Callout Family DNA:
 * - 2-zone structure: Label + Body (not 6 zones!)
 * - 4px left accent border
 * - No rounded corners (border-radius: 0)
 * - Uses #E83025 red accent (not amber/warning colors)
 *
 * Research Applied:
 * - R5-H1: Family Cohesion Through Shared DNA
 * - R5-T4: 2-Callout Limit (simple structure)
 * - R5-R1: Kinship Model (matches other callouts)
 * - R1-007: Callout Positioning Doctrine (BEFORE dangerous content)
 *
 * Soul Compliance:
 * - border-radius: 0 (LOCKED)
 * - box-shadow: none (LOCKED)
 * - Color: #E83025 (Sanrok red)
 */
interface GotchaBoxProps {
  children: React.ReactNode
}

export function GotchaBox({ children }: GotchaBoxProps) {
  return (
    <div
      className="border-l-4 p-6 mb-6"
      style={{
        backgroundColor: '#FEF9F5',
        borderLeftColor: '#E83025',
        borderRadius: 0
      }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-wider mb-2 block"
        style={{ color: '#E83025', letterSpacing: '0.05em' }}
      >
        GOTCHA
      </span>
      <div
        className="text-base leading-relaxed"
        style={{ color: '#1A1A1A' }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * GotchaBoxLegacy — For backward compatibility with old multi-zone usage.
 * Deprecated: Use the new simple GotchaBox with children instead.
 */
interface GotchaBoxLegacyProps {
  title?: string
  symptom: string
  why: string
  stats?: string
  fix: string | React.ReactNode
}

export function GotchaBoxLegacy({ symptom, why, fix }: GotchaBoxLegacyProps) {
  return (
    <div
      className="border-l-4 p-6 mb-6"
      style={{
        backgroundColor: '#FEF9F5',
        borderLeftColor: '#E83025',
        borderRadius: 0
      }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-wider mb-2 block"
        style={{ color: '#E83025', letterSpacing: '0.05em' }}
      >
        GOTCHA
      </span>
      <div className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
        <p className="mb-2"><strong>Symptom:</strong> {symptom}</p>
        <p className="mb-2"><strong>Why:</strong> {why}</p>
        <p><strong>Fix:</strong> {typeof fix === 'string' ? fix : fix}</p>
      </div>
    </div>
  )
}
