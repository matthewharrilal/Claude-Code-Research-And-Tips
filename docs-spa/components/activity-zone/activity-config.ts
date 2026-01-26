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

// Color palette designed for maximum visual distinction
// Each color is perceptually unique across hue, saturation, and lightness
export const ACTIVITY_CONFIG: Record<ActivityType, ActivityConfig> = {
  invariant: { icon: Link, color: '#2563eb', label: 'Invariant Connection' },       // Blue-600 - core links
  effect: { icon: Zap, color: '#f59e0b', label: 'Second-Order Effect' },            // Amber-500 - energy/impact
  composition: { icon: Layers, color: '#7c3aed', label: 'Composition Case' },       // Violet-600 - layered/stacked
  frontier: { icon: Telescope, color: '#dc2626', label: 'Research Frontier' },      // Red-600 - exploration/danger
  warstory: { icon: Flame, color: '#ea580c', label: 'War Story' },                  // Orange-600 - battle/heat
  alternative: { icon: GitFork, color: '#6b7280', label: 'Alternative Path' },      // Gray-500 - neutral choices
  inversion: { icon: RefreshCw, color: '#4f46e5', label: 'Inversion Lens' },        // Indigo-600 - flip/reverse
  constraint: { icon: Link2, color: '#0891b2', label: 'Constraint Chain' },         // Cyan-600 - boundaries/limits
  gradient: { icon: AlertTriangle, color: '#be123c', label: 'Failure Gradient' },   // Rose-700 - failure/warning
  horizon: { icon: Clock, color: '#0d9488', label: 'Time Horizon Shift' },          // Teal-600 - time/future
  violation: { icon: AlertOctagon, color: '#9f1239', label: 'Violation Chain' },    // Rose-800 - danger/broken
  tradeoff: { icon: Scale, color: '#ca8a04', label: 'Trade-Off Tension' },          // Yellow-600 - balance/weighing
  analogy: { icon: Merge, color: '#c026d3', label: 'Analogical Bridge' },           // Fuchsia-600 - creative connection
  expertise: { icon: TrendingUp, color: '#16a34a', label: 'Expertise Gradient' },   // Green-600 - growth/skill
  minimal: { icon: Minimize2, color: '#65a30d', label: 'Minimal Pattern' },         // Lime-600 - simplicity/reduction
  inflection: { icon: ArrowUpRight, color: '#7c2d12', label: 'Inflection Point' },  // Orange-900 - turning points
}
