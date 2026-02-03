'use client'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface AttioBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function AttioBreadcrumbs({ items }: AttioBreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[14px] mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className={isLast ? 'text-[#374151]' : 'text-[#6B7280]'}>
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="text-[#D1D5DB]">/</span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
