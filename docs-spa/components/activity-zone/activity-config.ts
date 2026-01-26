import {
  Link, Zap, Layers, Telescope, Flame, GitFork,
  RefreshCw, Link2, AlertTriangle, Clock, AlertOctagon,
  Scale, Merge, TrendingUp, Minimize2, ArrowUpRight,
  LucideIcon
} from 'lucide-react'

export type ActivityType =
  | 'invariant' | 'effect' | 'composition' | 'frontier'
  | 'warstory' | 'alternative' | 'inversion' | 'constraint'
  | 'gradient' | 'horizon' | 'violation' | 'tradeoff'
  | 'analogy' | 'expertise' | 'minimal' | 'inflection'

interface ActivityConfig {
  icon: LucideIcon
  color: string
  label: string
}

export const ACTIVITY_CONFIG: Record<ActivityType, ActivityConfig> = {
  invariant: { icon: Link, color: '#3b82f6', label: 'Invariant Connection' },
  effect: { icon: Zap, color: '#f59e0b', label: 'Second-Order Effect' },
  composition: { icon: Layers, color: '#8b5cf6', label: 'Composition Case' },
  frontier: { icon: Telescope, color: '#ef4444', label: 'Research Frontier' },
  warstory: { icon: Flame, color: '#10b981', label: 'War Story' },
  alternative: { icon: GitFork, color: '#6b7280', label: 'Alternative Path' },
  inversion: { icon: RefreshCw, color: '#4f46e5', label: 'Inversion Lens' },
  constraint: { icon: Link2, color: '#8b5cf6', label: 'Constraint Chain' },
  gradient: { icon: AlertTriangle, color: '#f43f5e', label: 'Failure Gradient' },
  horizon: { icon: Clock, color: '#06b6d4', label: 'Time Horizon Shift' },
  violation: { icon: AlertOctagon, color: '#f97316', label: 'Violation Chain' },
  tradeoff: { icon: Scale, color: '#f59e0b', label: 'Trade-Off Tension' },
  analogy: { icon: Merge, color: '#d946ef', label: 'Analogical Bridge' },
  expertise: { icon: TrendingUp, color: '#10b981', label: 'Expertise Gradient' },
  minimal: { icon: Minimize2, color: '#84cc16', label: 'Minimal Pattern' },
  inflection: { icon: ArrowUpRight, color: '#eab308', label: 'Inflection Point' },
}
