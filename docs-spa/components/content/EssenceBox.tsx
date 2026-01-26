interface EssenceBoxProps {
  children: React.ReactNode
}

export function EssenceBox({ children }: EssenceBoxProps) {
  return (
    <div className="bg-accent-light/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
        ESSENCE
      </span>
      <p className="text-lg font-medium text-text-primary leading-relaxed">
        {children}
      </p>
    </div>
  )
}
