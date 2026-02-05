'use client'

import { CodeBlock } from '@/components/content/CodeBlock'
import { EssenceBox } from '@/components/content/EssenceBox'
import { GotchaBox } from '@/components/content/GotchaBox'
import { CoreAbstraction } from '@/components/content/CoreAbstraction'
import { DesignDecision } from '@/components/content/DesignDecision'
import { FileStructure } from '@/components/content/FileStructure'
import { PathOfTask } from '@/components/content/PathOfTask'
import { WhatsHard } from '@/components/content/WhatsHard'
import { WhenToUse } from '@/components/content/WhenToUse'

/**
 * Component Audit Page
 *
 * Displays all 11 components for perceptual deepening audit.
 * Each component is isolated for individual screenshot capture.
 */
export default function ComponentAuditPage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FEF9F5' }}>
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#1A1A1A' }}>
        Component Audit — Perceptual Deepening
      </h1>

      {/* COMP-001: CodeBlock */}
      <section id="comp-001" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-001: CodeBlock — "The Precise Transcriptionist"
        </h2>
        <CodeBlock language="typescript" filename="example.ts">
{`// Ralph Wiggum Loop - Autonomous Agent Pattern
while :; do
  cat PROMPT.md | claude-code
  git add -A && git commit -m "auto: iteration"
done`}
        </CodeBlock>
      </section>

      {/* COMP-005: EssenceBox */}
      <section id="comp-005" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-005: EssenceBox — "The Archivist of Axioms"
        </h2>
        <EssenceBox>
          Context is the constraint that enables creativity. Without boundaries, the infinite possibility space paralyzes rather than liberates.
        </EssenceBox>
      </section>

      {/* COMP-004: GotchaBox */}
      <section id="comp-004" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-004: GotchaBox — "The Vigilant Sentinel"
        </h2>
        <GotchaBox>
          Fresh context beats extended sessions. Claude gets confused after 50+ interactions.
          Start new sessions for major pivots rather than trying to correct accumulated misunderstandings.
        </GotchaBox>
      </section>

      {/* COMP-009: CoreAbstraction */}
      <section id="comp-009" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-009: CoreAbstraction — "The Sagacious Mentor"
        </h2>
        <CoreAbstraction
          title="The Loop Pattern"
          philosophy="The expert writes the test, the machine writes the implementation. Verification is human; generation is machine."
          philosophyAuthor="Boris Cherny"
          code={`while :; do cat PROMPT.md | claude; done`}
          anchor="loop-pattern"
        >
          <p>The Ralph Wiggum Loop represents the fundamental shift from &quot;AI assistant&quot; to &quot;AI workforce&quot;.
          You define what success looks like; Claude figures out how to get there.</p>
        </CoreAbstraction>
      </section>

      {/* COMP-008: DesignDecision */}
      <section id="comp-008" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-008: DesignDecision — "The Impartial Cartographer"
        </h2>
        <DesignDecision
          question="Sharp Edges Over Rounded Corners"
          reasoning="Rounded corners communicate friendliness and approachability, but they also signal casualness. Technical documentation requires precision and authority. Sharp edges create a sense of exactness that matches the precision expected in code."
          forYou="All components use border-radius: 0. This is a LOCKED token — no exceptions. The sharp edges reinforce that this is serious technical content, not a friendly chat interface."
          alternatives={['Subtle 2px radius', 'Variable by context', 'Rounded for callouts only']}
        />
      </section>

      {/* COMP-007: FileStructure */}
      <section id="comp-007" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-007: FileStructure — "The Methodical Surveyor"
        </h2>
        <FileStructure
          title="Project Structure"
          tree={`project/
├── CLAUDE.md           # Context for Claude
├── PROMPT.md           # Current task definition
├── src/
│   ├── components/     # React components
│   └── lib/            # Utilities
└── tests/              # Verification scripts`}
        />
      </section>

      {/* COMP-010: PathOfTask */}
      <section id="comp-010" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-010: PathOfTask — "The Diligent Scribe"
        </h2>
        <PathOfTask
          title="Getting Started"
          steps={[
            {
              title: 'Create CLAUDE.md',
              description: 'Document your project context, conventions, and constraints.',
              code: 'touch CLAUDE.md'
            },
            {
              title: 'Define PROMPT.md',
              description: 'Write a clear task definition with success criteria.',
              tip: 'Include verification commands Claude can run to confirm completion.'
            },
            {
              title: 'Run the Loop',
              description: 'Execute the Ralph Wiggum pattern and let Claude iterate.',
              code: 'while :; do cat PROMPT.md | claude; done'
            }
          ]}
        />
      </section>

      {/* COMP-011: WhatsHard (Reasoning proxy) */}
      <section id="comp-011" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          COMP-011: WhatsHard — "Deliberative Counselor"
        </h2>
        <WhatsHard
          tension="Balancing autonomous operation with maintaining meaningful human oversight"
          symptoms={[
            'Claude completes the task but not in the way you expected',
            'Changes accumulate that subtly drift from your vision',
            'You spend more time reviewing than you would have coding'
          ]}
          mitigation="Define explicit verification checkpoints. Every major decision should have a human-reviewable artifact. Use git commits as natural review boundaries."
        />
      </section>

      {/* WhenToUse */}
      <section id="when-to-use" className="mb-16 pb-8" style={{ borderBottom: '2px solid #E0D5C5' }}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#E83025' }}>
          WhenToUse Component
        </h2>
        <WhenToUse
          title="Ralph Wiggum Loop"
          use={[
            'Well-defined tasks with clear success criteria',
            'Repetitive operations across multiple files',
            'Tasks that benefit from persistent iteration'
          ]}
          dontUse={[
            'Exploratory work without clear direction',
            'Tasks requiring real-time human judgment',
            'Security-critical operations'
          ]}
          alternatives={[
            { name: 'Single Session', when: 'Task is simple and well-defined' },
            { name: 'Agentic Handoff', when: 'Task requires human decisions mid-stream' }
          ]}
        />
      </section>

      <div className="text-center py-8" style={{ color: '#666666' }}>
        <p>End of Component Audit Page</p>
        <p className="text-sm mt-2">All components rendered with current styling</p>
      </div>
    </div>
  )
}
