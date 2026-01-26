import { create } from 'zustand'

// All category IDs that should be expanded by default
const ALL_CATEGORY_IDS = [
  'core', 'architecture', 'mastery', 'compare', 'transform',
  'taxonomy', 'principles', 'combinations', 'frontier', 'grammar',
  'technical', 'reference'
]

export interface ActivityItemData {
  id: string
  type: string
  linkedSection: string
  title: string
  content: string
  chain?: string[]
}

// Left nav constraints
const LEFT_NAV_CONSTRAINTS = {
  min: 200,
  max: 400,
  default: 280,
  collapsed: 56,
  collapseThreshold: 120,
  snapPoints: [200, 280, 360],
  snapThreshold: 20,
}

interface NavigationState {
  // Left Nav width (resizable)
  leftNavWidth: number
  leftNavCollapsed: boolean
  setLeftNavWidth: (width: number) => void
  setLeftNavCollapsed: (collapsed: boolean) => void
  getSnappedLeftNavWidth: (width: number) => number

  // Activity Zone width (resizable)
  activityZoneWidth: number
  setActivityZoneWidth: (width: number) => void

  // Expanded navigation sections
  expandedSections: Set<string>
  toggleSection: (id: string) => void

  // Active section for scroll sync
  activeSection: string | null
  setActiveSection: (section: string | null) => void

  // Hovered section for brushing interaction
  hoveredSection: string | null
  setHoveredSection: (section: string | null) => void

  // Activity items for current page
  activityItems: ActivityItemData[]
  setActivityItems: (items: ActivityItemData[]) => void
}

export const useNavigationStore = create<NavigationState>()((set, get) => ({
  // Left Nav
  leftNavWidth: LEFT_NAV_CONSTRAINTS.default,
  leftNavCollapsed: false,
  setLeftNavWidth: (width) => {
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('leftNavWidth', String(width))
    }
    set({ leftNavWidth: width })
  },
  setLeftNavCollapsed: (collapsed) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('leftNavCollapsed', String(collapsed))
    }
    set({ leftNavCollapsed: collapsed })
  },
  getSnappedLeftNavWidth: (width) => {
    for (const point of LEFT_NAV_CONSTRAINTS.snapPoints) {
      if (Math.abs(width - point) < LEFT_NAV_CONSTRAINTS.snapThreshold) {
        return point
      }
    }
    return width
  },

  // Activity Zone
  activityZoneWidth: 480,
  setActivityZoneWidth: (width) => set({ activityZoneWidth: width }),

  expandedSections: new Set(ALL_CATEGORY_IDS),
  toggleSection: (id) => set((state) => {
    const next = new Set(state.expandedSections)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    return { expandedSections: next }
  }),

  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),

  hoveredSection: null,
  setHoveredSection: (section) => set({ hoveredSection: section }),

  activityItems: [],
  setActivityItems: (items) => set({ activityItems: items }),
}))
