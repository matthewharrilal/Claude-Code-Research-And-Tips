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
        <div className="flex gap-4 justify-center">
          <span className="px-3 py-1 rounded-full bg-accent text-white text-sm">
            Phase 1 Complete
          </span>
          <span className="px-3 py-1 rounded-full bg-az-warstory text-white text-sm">
            SPA Ready
          </span>
        </div>
      </div>
    </div>
  )
}
