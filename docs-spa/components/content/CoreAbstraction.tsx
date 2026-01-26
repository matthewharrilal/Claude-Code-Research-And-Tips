interface CoreAbstractionProps {
  title: string
  philosophy: string
  philosophyAuthor?: string
  code?: string
  codeLanguage?: string
  anchor: string
  children?: React.ReactNode
}

export function CoreAbstraction({
  title,
  philosophy,
  philosophyAuthor,
  code,
  codeLanguage = 'typescript',
  anchor,
  children
}: CoreAbstractionProps) {
  return (
    <section id={anchor} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-text-primary mb-6">{title}</h2>

      {/* Philosophy Quote */}
      <blockquote className="border-l-4 border-accent-warm pl-6 py-2 mb-6 bg-warm-cream/50 rounded-r-lg">
        <p className="text-lg italic text-text-secondary leading-relaxed">
          "{philosophy}"
        </p>
        {philosophyAuthor && (
          <cite className="text-sm text-text-muted mt-2 block not-italic">
            — {philosophyAuthor}
          </cite>
        )}
      </blockquote>

      {/* Code Block */}
      {code && (
        <div className="relative group rounded-lg overflow-hidden mb-6">
          <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto rounded-lg">
            <code className={`language-${codeLanguage}`}>
              {code}
            </code>
          </pre>
        </div>
      )}

      {/* Anchor/Explanation Text */}
      {children && (
        <div className="prose prose-warm max-w-none text-text-secondary">
          {children}
        </div>
      )}
    </section>
  )
}
