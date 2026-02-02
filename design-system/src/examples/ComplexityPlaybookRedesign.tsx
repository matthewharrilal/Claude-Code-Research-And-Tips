import { ArrowLeft, BookOpen, Layers, Zap, Link2, Sparkles, TrendingUp, Target } from 'lucide-react';

export function ComplexityPlaybookRedesign({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="flex relative z-10">
        {/* Left Sidebar */}
        <aside className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-neutral-300 bg-[#F5F5F5] p-6">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs text-neutral-500 hover:text-[#E31E24] transition-colors mb-8 font-medium uppercase tracking-wider"
            >
              <ArrowLeft className="w-3 h-3" />
              Back
            </button>
          )}

          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-8 bg-[#E31E24]" />
            </div>
            <h2 className="text-sm font-bold tracking-[0.15em] text-neutral-900 mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
              CLAUDE CODE
            </h2>
            <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-[0.2em]">
              Documentation
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Filter pages..."
              className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 focus:outline-none focus:border-[#E31E24] transition-colors placeholder:text-neutral-400 font-light"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <NavSection title="Core Guides" defaultOpen={true}>
              <NavItem label="The Complexity Playbook" active />
              <NavItem label="On The Level" indent />
              <NavItem label="Avalanche" indent />
              <NavItem label="3 Token Abstraction" />
              <NavItem label="3 Design Decisions" />
              <NavItem label="3 Capability Levels" />
              <NavItem label="5 Levels (Architectural Depth)" />
              <NavItem label="LCCO Map (Multi-Agent)" />
              <NavItem label="CAP-Now (Factory Build)" />
              <NavItem label="The Progression Path" />
              <NavItem label="8 Axioms" />
              <NavItem label="7 WRITE INIS" />
              <NavItem label="3 Pattern Classes" />
            </NavSection>

            <NavSection title="Architectures">
              <NavItem label="Complexity Ladder (0-7)" />
              <NavItem label="Architectural Primitives" />
              <NavItem label="Composition Rules" />
              <NavItem label="Design Isolation" />
              <NavItem label="Search Topologies" />
            </NavSection>

            <NavSection title="Mastery Classes">
              <NavItem label="Mastery Overview" />
              <NavItem label="Multi-Pass Deep Dive" />
              <NavItem label="Context Management" />
              <NavItem label="Error Handling" />
              <NavItem label="Mirror Concepts" />
              <NavItem label="Clip Trial Content" />
            </NavSection>

            <NavSection title="Principles" defaultOpen={false}>
              <NavItem label="Principles Overview" />
              <NavItem label="All 9 Principles" />
            </NavSection>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-12 py-16">
          {/* Hero Box - Dark luxury */}
          <div
            className="border border-neutral-800 p-8 mb-12 relative overflow-hidden rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #0D2818 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <div className="h-[1px] w-8 bg-[#D4917E]" />
              <div className="text-[10px] font-bold text-white/60 uppercase tracking-[0.25em]">
                Examples (8+ Prompts)
              </div>
            </div>
            <p className="text-2xl text-white leading-relaxed font-normal relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>
              The complete progression from single sessions to factory-scale autonomous development, with judgment for each level.
            </p>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4917E]/10 to-transparent pointer-events-none" />
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base text-neutral-700 leading-relaxed font-normal mb-6">
              This is the master entry point for learning Claude Code orchestration. If you're overwhelmed by
              options, or don't know which pattern to use – start here. This playbook provides
              the complete progression from Level 0 (single session) to Level 7 (factory-scale autonomous
              development), with clear milestones and judgment at each stage.
            </p>
          </div>

          {/* Core Abstraction with Teal Badge */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)' }}
              >
                1
              </div>
              <div>
                <h2 className="text-3xl text-neutral-900 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  The Core Abstraction
                </h2>
              </div>
            </div>

            <blockquote className="border-l-2 border-[#14B8A6] pl-8 py-4 mb-8 bg-[#F0FDFA] rounded-r-2xl">
              <p className="text-xl text-neutral-800 leading-relaxed font-normal" style={{ fontFamily: 'var(--font-serif)' }}>
                "Everything builds on 8 principles. Understand them, and you can derive any pattern."
              </p>
            </blockquote>

            {/* Code Block - Dark with syntax feel */}
            <div
              className="border border-neutral-800 p-8 mb-8 relative overflow-hidden rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
              }}
            >
              <p className="text-lg text-white/90 leading-relaxed relative z-10 font-light" style={{ fontFamily: 'var(--font-serif)' }}>
                Context is finite. External state persists. Fresh builds transcend.
                <br/>Orchestration cascades, and judgment scales.
                <br/><br/>
                <span className="text-[#D4AF37]">...only.</span>
              </p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4917E]/10 to-transparent pointer-events-none" />
            </div>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              These 8 constraints generate all 8 principles and every pattern in this playbook.
            </p>
          </div>

          {/* The 8 Core Principles */}
          <div className="mb-16">
            <h2 className="text-3xl text-neutral-900 mb-8 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              The 8 Core Principles
            </h2>

            <div className="space-y-6">
              {/* Principle 1 - Mint Green Accent */}
              <div className="bg-white border-l-4 border-[#14B8A6] p-8 hover:shadow-lg transition-shadow relative overflow-hidden rounded-r-2xl">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-[0.25em]">
                    Principle 1
                  </div>
                  <div className="h-[1px] flex-1 bg-neutral-300" />
                </div>
                <h3 className="text-xl text-neutral-900 mb-4 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Context Is The Primary Constraint
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed font-normal mb-4">
                  Claude's context window is finite (~200k tokens). Quality degrades as context fills (ideally stable at 40-70%).
                  Long sessions accumulate noise, contradictions, and dead ends that compound exponentially. Sub-optimal state.
                </p>
                <div
                  className="border-l-2 border-[#14B8A6] p-4 relative overflow-hidden rounded-r-xl"
                  style={{ background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)' }}
                >
                  <p className="text-sm text-neutral-700 font-medium relative z-10">
                    Every pattern in this playbook ultimately optimizes around context limits.
                  </p>
                </div>
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#14B8A6]/5 to-transparent pointer-events-none" />
              </div>

              {/* Principle 2 - Coral/Salmon Accent */}
              <div className="bg-white border-l-4 border-[#D4917E] p-8 hover:shadow-lg transition-shadow relative overflow-hidden rounded-r-2xl">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="text-[10px] font-bold text-[#D4917E] uppercase tracking-[0.25em]">
                    Principle 2
                  </div>
                  <div className="h-[1px] flex-1 bg-neutral-300" />
                </div>
                <h3 className="text-xl text-neutral-900 mb-4 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  External State &gt; Internal Memory
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed font-normal mb-4">
                  Claude's "memory" lives only in the context window. When the session ends, everything is lost.{' '}
                  <strong className="text-neutral-900 font-semibold">Store state in files (src, progress.md), in git (commits as memory), and in external tools.</strong>{' '}
                  External state survives session death and doesn't consume context tokens.
                </p>
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4917E]/5 to-transparent pointer-events-none" />
              </div>

              {/* Principle 3 - Purple Accent */}
              <div className="bg-white border-l-4 border-[#9333EA] p-8 hover:shadow-lg transition-shadow relative overflow-hidden rounded-r-2xl">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="text-[10px] font-bold text-[#9333EA] uppercase tracking-[0.25em]">
                    Principle 3
                  </div>
                  <div className="h-[1px] flex-1 bg-neutral-300" />
                </div>
                <h3 className="text-xl text-neutral-900 mb-4 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  Fresh Context Beats Polluted Context
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed font-normal mb-4">
                  A new session with clean context and explicit instructions outperforms a long-running session with accumulated confusion.
                  This is why multi-session patterns exist: kill the session, capture state, spawn fresh workers with clear missions.
                </p>
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#9333EA]/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Warning Callout - Yellow/Amber */}
          <div
            className="border-l-4 border-[#F59E0B] p-6 mb-12 relative overflow-hidden rounded-r-2xl"
            style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)' }}
          >
            <div className="flex items-start gap-3 relative z-10">
              <div className="text-[10px] font-bold text-[#92400E] uppercase tracking-[0.25em] mt-1">
                Common Mistake
              </div>
            </div>
            <p className="text-base text-neutral-800 leading-relaxed font-light mt-3 relative z-10">
              <strong className="font-medium">Skipping Levels:</strong> Level 5 patterns fail unexpectedly. Multi-agent chaos.
              <br/><strong className="font-medium">Why:</strong> You haven't internalized Level 3 context discipline. Workers inherit bad habits.
              <br/><strong className="font-medium">Fix:</strong> Go back to Level 3. Run 10 successful Ralph iterations. Verify progress list hygiene. Then retry Level 5.
            </p>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#F59E0B]/10 to-transparent pointer-events-none" />
          </div>
        </main>

        {/* Right Sidebar - RICH COLORS - MUCH WIDER NOW */}
        <aside className="w-[480px] h-screen sticky top-0 overflow-y-auto border-l border-neutral-300 bg-[#FCFCFC] p-8">
          {/* Operational Intelligence Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-[#E31E24]" />
              <div className="text-[10px] font-bold text-[#E31E24] uppercase tracking-[0.25em]">
                Operational Intelligence
              </div>
            </div>
            <div className="text-sm text-neutral-600 font-light mb-3">
              16 Items in Library
            </div>
          </div>

          {/* Card 1 - MINT GREEN with gradient */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#14B8A6]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #CCFBF1 0%, #99F6E4 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Target className="w-5 h-5 text-[#0D9488]" />
              <div className="text-[10px] font-bold text-[#0D9488] uppercase tracking-[0.25em]">
                Irresistible Pattern
              </div>
            </div>
            <h3 className="text-xl text-neutral-900 mb-3 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              The irresistible core of this playbook
            </h3>
            <div className="text-xs font-semibold text-[#0D9488] uppercase tracking-[0.15em] mb-4 relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>
              8 Principles × 3 Levels × Judgment Criteria
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal mb-4 relative z-10">
              Everything else is abstraction and syncopies.
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed font-light relative z-10">
              If you understand the principles and know your goal, you can derive everything else.
            </p>
            {/* Playful gradient accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/30 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#14B8A6]/20 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Card 2 - CORAL/SALMON with gradient */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#D4917E]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #FDE8E4 0%, #F9D5CE 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Sparkles className="w-5 h-5 text-[#B86F5A]" />
              <div className="text-[10px] font-bold text-[#B86F5A] uppercase tracking-[0.25em]">
                War Story
              </div>
            </div>
            <h3 className="text-xl text-neutral-900 mb-4 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Boris Cherny's "Vanilla" Philosophy
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal relative z-10">
              Claude Code's mental model has verifiable parallels with its CL-UCSE dial = git + verification. No elaborate frameworks. "This
              over workflow in CL may use you virtually owe." This playbook exists because most people read distributed progression to reach
              simplicity.
            </p>
            {/* Luxury gradient overlays */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/40 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#D4917E]/20 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Card 3 - SKY BLUE with gradient */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#0EA5E9]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Link2 className="w-5 h-5 text-[#0369A1]" />
              <div className="text-[10px] font-bold text-[#0369A1] uppercase tracking-[0.25em]">
                Important Connection
              </div>
            </div>
            <h3 className="text-xl text-neutral-900 mb-4 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              All patterns share INV-001: Context-First Paradigm
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal relative z-10">
              Every pattern in this playbook - Magic, OO Mirror, Dan Token, Inception - ultimately optimizes for context constraints. This
              core invariant ensures you'll never build a pattern that makes you choose your shovel over distilling, all patterns fall.
            </p>
            {/* Playful gradients */}
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-white/50 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0EA5E9]/15 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Card 4 - DARK LUXURY GREEN with gold accent */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#D4AF37]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #0D2818 0%, #1A3A2A 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                Constraint Chain
              </div>
            </div>
            <h3 className="text-xl text-white mb-4 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Context finite → ALL 8 PRINCIPLES
            </h3>
            <div className="space-y-2 text-sm text-white/90 font-normal leading-relaxed relative z-10">
              <p className="font-semibold text-[#D4AF37]" style={{ fontFamily: 'var(--font-serif)' }}>Math:</p>
              <ul className="space-y-2.5 ml-4 text-sm font-normal leading-relaxed">
                <li>• Context window is finite (~200K)</li>
                <li>• Quality degrades as context fills</li>
                <li>• External state must persist</li>
                <li>• Fresh context beats noisy context</li>
                <li>• You'll use prompt engineering</li>
                <li>• Tasks must be atomic and verifiable</li>
                <li>• Parallel work needs isolation</li>
                <li>• Orchestration must be explicit</li>
              </ul>
            </div>
            {/* Luxury fashion gradient overlays */}
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#D4917E]/10 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Card 5 - VIBRANT YELLOW/AMBER */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#F59E0B]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <BookOpen className="w-5 h-5 text-[#92400E]" />
              <div className="text-[10px] font-bold text-[#92400E] uppercase tracking-[0.25em]">
                Evolution Guide
              </div>
            </div>
            <h3 className="text-xl text-neutral-900 mb-4 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              If you skip Level 3, expect discipline failures
            </h3>
            <div className="space-y-2.5 text-sm text-neutral-700 font-normal leading-relaxed relative z-10">
              <p><strong className="font-semibold text-neutral-900">By:</strong> Begin true mastery</p>
              <p><strong className="font-semibold text-neutral-900">Then:</strong> No expertise with external state patterns</p>
              <p><strong className="font-semibold text-neutral-900">Then:</strong> Level 5 orchestrator has no content hygiene</p>
              <p><strong className="font-semibold text-neutral-900">Then:</strong> Workers inherit polluted context</p>
              <p><strong className="font-semibold text-neutral-900">Finally:</strong> "Multi-agent doesn't work" (but it does, with discipline)</p>
            </div>
            {/* Playful accent overlays */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/40 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#F59E0B]/20 to-transparent pointer-events-none rounded-3xl" />
          </div>

          {/* Card 6 - SOFT PURPLE/LAVENDER */}
          <div
            className="p-6 mb-6 hover:shadow-lg transition-all border border-[#9333EA]/30 relative overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)'
            }}
          >
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Zap className="w-5 h-5 text-[#7E22CE]" />
              <div className="text-[10px] font-bold text-[#7E22CE] uppercase tracking-[0.25em]">
                Reflection Point
              </div>
            </div>
            <h3 className="text-xl text-neutral-900 mb-4 font-semibold relative z-10 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              When Level 3 stops being enough
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-normal relative z-10">
              Level 3 Ralph is optimal. Parallel Ralph (Level 6) adds value. <strong className="font-semibold text-neutral-900">0-4 RATIONAL/LEVEL:</strong> Parallel Ralph (5-8) adds value.
            </p>
            {/* Soft gradient accents */}
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-white/50 to-transparent pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#9333EA]/10 to-transparent pointer-events-none rounded-3xl" />
          </div>
        </aside>
      </div>
    </div>
  );
}

// Navigation Components
interface NavSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function NavSection({ title, children, defaultOpen = false }: NavSectionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-2 hover:text-neutral-900 transition-colors"
      >
        {title}
      </button>
      {isOpen && (
        <div className="space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

interface NavItemProps {
  label: string;
  active?: boolean;
  indent?: boolean;
}

function NavItem({ label, active, indent }: NavItemProps) {
  return (
    <button
      className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
        indent ? 'pl-6' : ''
      } ${
        active
          ? 'bg-[#E31E24]/10 text-[#E31E24] font-medium border-l border-[#E31E24]'
          : 'text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 font-light border-l border-transparent'
      }`}
    >
      {label}
    </button>
  );
}

// Add React import at top
import React from 'react';
