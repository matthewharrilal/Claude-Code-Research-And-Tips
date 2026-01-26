'use client'

import { useNavigationStore } from '@/lib/store'
import { ActivityItem, ActivityType } from '@/components/activity-zone'

interface ActivityItemData {
  id: string
  type: string
  linkedSection: string
  title: string
  content: string
}

interface ActivityZoneProps {
  items: ActivityItemData[]
}

export function ActivityZone({ items }: ActivityZoneProps) {
  const activeSection = useNavigationStore((s) => s.activeSection)

  return (
    <div className="p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
        Operational Intelligence
      </div>

      <div className="space-y-2">
        {items.length === 0 ? (
          <div className="text-sm text-text-muted italic">
            No activity items for this page.
          </div>
        ) : (
          items.map((item) => (
            <ActivityItem
              key={item.id}
              type={item.type as ActivityType}
              title={item.title}
              linkedSection={item.linkedSection}
              isActive={activeSection === item.linkedSection}
            >
              {item.content}
            </ActivityItem>
          ))
        )}
      </div>
    </div>
  )
}
