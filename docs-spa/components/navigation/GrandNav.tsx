'use client'

import { usePathname } from 'next/navigation'
import { NavCategory } from './NavCategory'
import { SearchFilter } from './SearchFilter'
import navigation from '@/content/navigation.json'

export function GrandNav() {
  const pathname = usePathname()
  const currentSlug = pathname.split('/').pop() || ''

  return (
    <nav className="h-full flex flex-col">
      <SearchFilter />

      <div className="flex-1 overflow-y-auto py-4">
        {navigation.categories.map((category) => (
          <NavCategory
            key={category.id}
            id={category.id}
            title={category.title}
            icon={category.icon}
            items={category.items}
            currentSlug={currentSlug}
            defaultOpen={category.defaultOpen}
          />
        ))}
      </div>
    </nav>
  )
}
