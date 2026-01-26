import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Claude Code Knowledge Base
        </h1>
        <p className="text-text-muted mb-8">
          144 pages of AI-assisted development patterns
        </p>
        <Link
          href="/synthesis/master-playbook"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors mb-8"
        >
          Enter Documentation
        </Link>
        <div className="flex gap-4 justify-center">
          <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">
            SPA Ready
          </span>
          <span className="px-3 py-1 rounded-full bg-az-warstory/20 text-az-warstory text-sm">
            3-Panel Layout
          </span>
        </div>
      </div>
    </div>
  )
}
