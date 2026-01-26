import { create } from 'zustand'

// All category IDs that should be expanded by default
const ALL_CATEGORY_IDS = [
  'core', 'architecture', 'mastery', 'compare', 'transform',
  'taxonomy', 'principles', 'combinations', 'frontier', 'grammar',
  'technical', 'reference'
]

interface NavigationState {
  // Activity Zone width (resizable)
  activityZoneWidth: number
  setActivityZoneWidth: (width: number) => void

  // Expanded navigation sections
  expandedSections: Set<string>
  toggleSection: (id: string) => void

  // Active section for scroll sync
  activeSection: string | null
  setActiveSection: (section: string | null) => void
}

export const useNavigationStore = create<NavigationState>()((set) => ({
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
}))
