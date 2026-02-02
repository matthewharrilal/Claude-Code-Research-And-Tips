// Tier Badge
interface TierBadgeProps {
  tier: 1 | 2 | 3 | 4;
}

export function TierBadge({ tier }: TierBadgeProps) {
  const tierConfig = {
    1: { bg: 'bg-neutral-100', text: 'text-neutral-900', border: 'border-neutral-300', label: 'Tier 1' },
    2: { bg: 'bg-neutral-100', text: 'text-neutral-900', border: 'border-neutral-300', label: 'Tier 2' },
    3: { bg: 'bg-neutral-100', text: 'text-neutral-900', border: 'border-neutral-300', label: 'Tier 3' },
    4: { bg: 'bg-[#E31E24]', text: 'text-white', border: 'border-[#E31E24]', label: 'Tier 4' },
  };

  const config = tierConfig[tier];

  return (
    <span className={`inline-flex items-center px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
}

// Severity Badge
interface SeverityBadgeProps {
  severity: 'HIGH' | 'MEDIUM' | 'CRITICAL' | 'LOW';
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const severityConfig = {
    CRITICAL: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
    HIGH: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
    MEDIUM: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
    LOW: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  };

  const config = severityConfig[severity];

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border ${config.bg} ${config.text} ${config.border}`}>
      {severity}
    </span>
  );
}

// Status Badge
type Status = 'Documented' | 'Synergistic' | 'Possible' | 'Anti-pattern' | 'Unexplored';

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig: Record<Status, { bg: string; text: string; border: string }> = {
    'Documented': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
    'Synergistic': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
    'Possible': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
    'Anti-pattern': { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
    'Unexplored': { bg: 'bg-neutral-100', text: 'text-neutral-600', border: 'border-neutral-300' },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] border ${config.bg} ${config.text} ${config.border}`}>
      {status}
    </span>
  );
}

// Level Badge
interface LevelBadgeProps {
  level: number;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const levelColors = [
    { bg: 'bg-neutral-200', text: 'text-neutral-900', border: 'border-neutral-300' },
    { bg: 'bg-neutral-200', text: 'text-neutral-900', border: 'border-neutral-300' },
    { bg: 'bg-neutral-200', text: 'text-neutral-900', border: 'border-neutral-300' },
    { bg: 'bg-neutral-200', text: 'text-neutral-900', border: 'border-neutral-300' },
    { bg: 'bg-neutral-200', text: 'text-neutral-900', border: 'border-neutral-300' },
    { bg: 'bg-[#E31E24]', text: 'text-white', border: 'border-[#E31E24]' },
    { bg: 'bg-[#E31E24]', text: 'text-white', border: 'border-[#E31E24]' },
    { bg: 'bg-[#E31E24]', text: 'text-white', border: 'border-[#E31E24]' },
  ];

  const config = levelColors[level] || levelColors[0];

  return (
    <span className={`inline-flex items-center justify-center w-10 h-10 text-sm font-bold border ${config.bg} ${config.text} ${config.border}`}>
      {level}
    </span>
  );
}
