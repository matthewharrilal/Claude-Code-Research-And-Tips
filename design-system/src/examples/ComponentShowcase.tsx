import { LevelCard, ArchitectureCard, InnovationCard, InfoBox, DecisionBox, HighlightBox, IronLawBox, QuoteBox } from '@/app/components/docs/cards';
import { Callout, GotchaBox } from '@/app/components/docs/callouts';
import { ComparisonTable, SeverityTable, MatrixTable, MigrationTable } from '@/app/components/docs/tables';
import { CodeBlock, InlineCode, AsciiDiagram, Formula } from '@/app/components/docs/code';
import { OrderedStepList, UnorderedList, DefinitionList } from '@/app/components/docs/lists';
import { EssenceBox, SectionHeader, SubsectionHeader, TwoColumnGrid, TaxonomySection, PageContainer } from '@/app/components/docs/layout';
import { TierBadge, SeverityBadge, StatusBadge, LevelBadge } from '@/app/components/docs/badges';
import { SidebarNavItem, CategoryGroupHeader, OnThisPageLinks, Breadcrumb, Sidebar } from '@/app/components/docs/navigation';
import { ArrowLeft } from 'lucide-react';

export function ComponentShowcase({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
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

      {/* Sidebar */}
      <Sidebar>
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-[#E31E24] transition-colors mb-8 font-medium uppercase tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            Design System
          </button>
        )}

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-[#E31E24]" />
          </div>
          <h2 className="text-sm font-bold tracking-[0.15em] text-neutral-900 mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
            DOCUMENTATION
          </h2>
          <p className="text-[10px] text-neutral-500 font-medium uppercase tracking-[0.2em]">Components</p>
        </div>

        <CategoryGroupHeader label="Getting Started">
          <SidebarNavItem label="Introduction" active={true} />
          <SidebarNavItem label="Quick Start" />
          <SidebarNavItem label="Installation" />
        </CategoryGroupHeader>

        <CategoryGroupHeader label="Core Concepts">
          <SidebarNavItem label="Architecture" />
          <SidebarNavItem label="Patterns" />
          <SidebarNavItem label="Best Practices" />
        </CategoryGroupHeader>

        <CategoryGroupHeader label="Advanced" defaultOpen={false}>
          <SidebarNavItem label="Optimization" />
          <SidebarNavItem label="Migration" />
        </CategoryGroupHeader>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <PageContainer maxWidth="xl">
          <Breadcrumb items={[
            { label: 'Docs' },
            { label: 'Components' },
            { label: 'Showcase' },
          ]} />

          <EssenceBox summary="A comprehensive component library for technical documentation, combining clarity with visual elegance." />

          <SectionHeader
            number={1}
            title="Cards & Content Boxes"
            subtitle="Structured containers for different types of documentation content"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Level Card" level={3} />
              <p className="text-sm text-neutral-600 mb-6 font-light">
                Shows progression and complexity levels with code examples and unlocked capabilities.
              </p>
              <LevelCard
                level={3}
                title="Advanced State Management"
                subtitle="Context API with Reducers"
                description="Combine React Context with useReducer to create scalable state management without external dependencies. This pattern is ideal for medium-sized applications."
                codeExample={`const [state, dispatch] = useReducer(reducer, initialState);
<AppContext.Provider value={{ state, dispatch }}>
  {children}
</AppContext.Provider>`}
                unlocks={[
                  'Predictable state updates',
                  'Time-travel debugging capability',
                  'Middleware pattern support',
                  'Testing isolation'
                ]}
              />
            </div>

            <div>
              <SubsectionHeader title="Architecture Card" level={3} />
              <p className="text-sm text-neutral-600 mb-6 font-light">
                Compare architectural patterns with diagrams, pros/cons, and use cases.
              </p>
              <ArchitectureCard
                icon="🏗️"
                title="Microservices Architecture"
                subtitle="Distributed services pattern"
                asciiDiagram={`┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   User API  │────▶│   Auth API  │────▶│  Database   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Product API │     │ Order API   │     │   Cache     │
└─────────────┘     └─────────────┘     └─────────────┘`}
                pros={[
                  'Independent deployment and scaling',
                  'Technology diversity per service',
                  'Fault isolation',
                  'Team autonomy'
                ]}
                cons={[
                  'Operational complexity',
                  'Network latency overhead',
                  'Distributed data management',
                  'Testing complexity'
                ]}
                useCases={[
                  'Large enterprise applications',
                  'High-traffic systems requiring independent scaling',
                  'Organizations with multiple development teams'
                ]}
              />
            </div>

            <div>
              <SubsectionHeader title="Innovation Card" level={3} />
              <p className="text-sm text-neutral-600 mb-6 font-light">
                Track innovation tiers with effort and value assessments.
              </p>
              <InnovationCard
                tier={2}
                number={7}
                title="Edge-Side Rendering"
                description="Render dynamic content at the CDN edge, closer to users. This reduces latency while maintaining personalization capabilities."
                codeExample={`export const config = { runtime: 'edge' };

export default async function handler(req) {
  const country = req.geo?.country || 'US';
  return new Response(renderPage(country));
}`}
                effort="Medium"
                value="High"
              />
            </div>

            <TwoColumnGrid gap="md">
              <div>
                <SubsectionHeader title="Info Box" level={3} />
                <InfoBox title="Key Concept">
                  The <InlineCode>useEffect</InlineCode> hook allows you to perform side effects in function components.
                  It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
                </InfoBox>
              </div>

              <div>
                <SubsectionHeader title="Decision Box" level={3} />
                <DecisionBox
                  topic="TypeScript"
                  reasoning="TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. This leads to more maintainable code and better IDE support."
                  takeaway="Start with TypeScript for new projects. The initial learning curve pays dividends in reduced debugging time and improved code quality."
                />
              </div>
            </TwoColumnGrid>

            <div>
              <SubsectionHeader title="Highlight Box" level={3} />
              <HighlightBox>
                Performance = (User Perception × Actual Speed) / Expectation
              </HighlightBox>
            </div>

            <div>
              <SubsectionHeader title="Iron Law Box" level={3} />
              <IronLawBox>
                You cannot have strong consistency, high availability, and partition tolerance simultaneously.
                In a distributed system, you must choose two. This is the CAP theorem—an immutable law of distributed computing.
              </IronLawBox>
            </div>

            <div>
              <SubsectionHeader title="Quote Box" level={3} />
              <QuoteBox
                quote="Premature optimization is the root of all evil."
                attribution="Donald Knuth"
              />
            </div>
          </div>

          <SectionHeader
            number={2}
            title="Callouts & Alerts"
            subtitle="Highlight important information with contextual styling"
          />

          <div className="space-y-6 mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <Callout variant="info" title="Information">
                This feature is available in all plans. Check the documentation for implementation details.
              </Callout>

              <Callout variant="warning" title="Warning">
                This API endpoint will be deprecated in version 3.0. Please migrate to the new endpoint.
              </Callout>

              <Callout variant="error" title="Critical">
                Breaking change: The authentication flow has changed. Update your integration immediately.
              </Callout>

              <Callout variant="success" title="Success">
                Your deployment was successful! The changes are now live in production.
              </Callout>
            </div>

            <div>
              <SubsectionHeader title="Gotcha Box" level={3} />
              <GotchaBox
                mistake="Forgetting to add dependencies to useEffect"
                symptom="The effect doesn't re-run when state changes, or you see stale data in the effect closure."
                recovery={[
                  'Add all external values used inside the effect to the dependency array',
                  'Use the ESLint exhaustive-deps rule to catch missing dependencies',
                  'Consider extracting the logic to a separate function if dependencies grow too large'
                ]}
              />
            </div>
          </div>

          <SectionHeader
            number={3}
            title="Tables"
            subtitle="Structured data presentation with various formatting options"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Comparison Table" level={3} />
              <ComparisonTable
                headers={['Feature', 'React', 'Vue', 'Angular']}
                rows={[
                  ['Learning Curve', 'Low', 'Low', 'High'],
                  ['Performance', 'Excellent', 'Excellent', 'Good'],
                  ['Ecosystem', 'Vast', 'Growing', 'Comprehensive'],
                  ['TypeScript', 'Optional', 'Optional', 'Built-in'],
                ]}
              />
            </div>

            <div>
              <SubsectionHeader title="Severity Table" level={3} />
              <SeverityTable
                headers={['Issue', 'Impact', 'Affected Users']}
                rows={[
                  { cells: ['Memory leak in dashboard', 'System becomes unresponsive after 2 hours', '~5,000'], severity: 'CRITICAL' },
                  { cells: ['Slow query on reports page', 'Page load takes 3-5 seconds', '~1,200'], severity: 'HIGH' },
                  { cells: ['Missing validation message', 'Users might enter invalid data', '~300'], severity: 'MEDIUM' },
                  { cells: ['Typo in help text', 'Minor confusion for new users', '~50'], severity: 'LOW' },
                ]}
              />
            </div>

            <div>
              <SubsectionHeader title="Matrix Table" level={3} />
              <MatrixTable
                rowHeaders={['REST API', 'GraphQL', 'gRPC', 'WebSocket']}
                columnHeaders={['React', 'Vue', 'Angular']}
                cells={[
                  ['Documented', 'Documented', 'Documented'],
                  ['Synergistic', 'Possible', 'Documented'],
                  ['Possible', 'Unexplored', 'Synergistic'],
                  ['Documented', 'Possible', 'Anti-pattern'],
                ]}
              />
            </div>

            <div>
              <SubsectionHeader title="Migration Table" level={3} />
              <MigrationTable
                rows={[
                  { from: 'Class Components', to: 'Function Components', trigger: 'React 16.8+', effort: 'Medium', cost: '2-4 weeks' },
                  { from: 'Redux', to: 'Context API', trigger: 'Simplification need', effort: 'High', cost: '4-6 weeks' },
                  { from: 'REST', to: 'GraphQL', trigger: 'Over-fetching issues', effort: 'High', cost: '6-8 weeks' },
                  { from: 'CSS', to: 'Tailwind', trigger: 'Consistency need', effort: 'Low', cost: '1-2 weeks' },
                ]}
              />
            </div>
          </div>

          <SectionHeader
            number={4}
            title="Code & Technical"
            subtitle="Display code examples, formulas, and technical diagrams"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Code Block with Filename" level={3} />
              <CodeBlock
                filename="app/components/Button.tsx"
                language="typescript"
                code={`interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${variant} btn-\${size}\`}
    >
      {children}
    </button>
  );
}`}
              />
            </div>

            <div>
              <SubsectionHeader title="ASCII Diagram" level={3} />
              <AsciiDiagram title="Request Flow">
{`Client Request
     │
     ▼
┌─────────────┐
│   Router    │
└─────────────┘
     │
     ├──▶ /api/users ────▶ User Controller ────▶ User Service ────▶ Database
     │
     ├──▶ /api/posts ────▶ Post Controller ────▶ Post Service ────▶ Database
     │
     └──▶ /api/auth  ────▶ Auth Controller ────▶ Auth Service ────▶ Redis`}
              </AsciiDiagram>
            </div>

            <div>
              <SubsectionHeader title="Formula Display" level={3} />
              <Formula label="Time Complexity">
                O(n log n)
              </Formula>
            </div>

            <div>
              <SubsectionHeader title="Inline Code" level={3} />
              <p className="text-sm text-neutral-700 leading-relaxed font-light">
                Use the <InlineCode>useState</InlineCode> hook to add state to function components.
                You can also use <InlineCode>useEffect</InlineCode> for side effects and <InlineCode>useContext</InlineCode> for consuming context.
              </p>
            </div>
          </div>

          <SectionHeader
            number={5}
            title="Lists & Sequences"
            subtitle="Organize information in ordered and unordered formats"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Ordered Step List" level={3} />
              <OrderedStepList
                steps={[
                  'Install the required dependencies using npm or yarn',
                  'Configure your environment variables in a .env file',
                  'Run the database migrations to set up your schema',
                  'Start the development server and verify everything works',
                ]}
              />
            </div>

            <TwoColumnGrid gap="md">
              <div>
                <SubsectionHeader title="Unordered List (Check)" level={3} />
                <UnorderedList
                  variant="check"
                  items={[
                    'Fast development cycle',
                    'Type safety with TypeScript',
                    'Rich ecosystem of packages',
                    'Active community support',
                  ]}
                />
              </div>

              <div>
                <SubsectionHeader title="Unordered List (Arrow)" level={3} />
                <UnorderedList
                  variant="arrow"
                  items={[
                    'Configure your build pipeline',
                    'Set up continuous integration',
                    'Deploy to staging environment',
                    'Run automated tests',
                  ]}
                />
              </div>
            </TwoColumnGrid>

            <div>
              <SubsectionHeader title="Definition List" level={3} />
              <DefinitionList
                items={[
                  {
                    term: 'Server-Side Rendering (SSR)',
                    definition: 'A technique where HTML is generated on the server for each request, improving initial load time and SEO.'
                  },
                  {
                    term: 'Static Site Generation (SSG)',
                    definition: 'Pre-rendering pages at build time to serve static HTML, combining performance with dynamic content capabilities.'
                  },
                  {
                    term: 'Incremental Static Regeneration (ISR)',
                    definition: 'A hybrid approach that allows updating static pages after deployment without rebuilding the entire site.'
                  },
                ]}
              />
            </div>
          </div>

          <SectionHeader
            number={6}
            title="Badges & Indicators"
            subtitle="Visual markers for status, tier, and categorization"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Tier Badges" level={3} />
              <div className="flex gap-3">
                <TierBadge tier={1} />
                <TierBadge tier={2} />
                <TierBadge tier={3} />
                <TierBadge tier={4} />
              </div>
            </div>

            <div>
              <SubsectionHeader title="Severity Badges" level={3} />
              <div className="flex gap-3">
                <SeverityBadge severity="LOW" />
                <SeverityBadge severity="MEDIUM" />
                <SeverityBadge severity="HIGH" />
                <SeverityBadge severity="CRITICAL" />
              </div>
            </div>

            <div>
              <SubsectionHeader title="Status Badges" level={3} />
              <div className="flex flex-wrap gap-3">
                <StatusBadge status="Documented" />
                <StatusBadge status="Synergistic" />
                <StatusBadge status="Possible" />
                <StatusBadge status="Anti-pattern" />
                <StatusBadge status="Unexplored" />
              </div>
            </div>

            <div>
              <SubsectionHeader title="Level Badges" level={3} />
              <div className="flex gap-3">
                <LevelBadge level={0} />
                <LevelBadge level={1} />
                <LevelBadge level={2} />
                <LevelBadge level={3} />
                <LevelBadge level={4} />
                <LevelBadge level={5} />
                <LevelBadge level={6} />
                <LevelBadge level={7} />
              </div>
            </div>
          </div>

          <SectionHeader
            number={7}
            title="Layout Components"
            subtitle="Structural elements for page organization"
          />

          <div className="space-y-8 mb-16">
            <div>
              <SubsectionHeader title="Taxonomy Section" level={3} />
              <TaxonomySection
                category="API Endpoints"
                description="RESTful endpoints for user management and authentication"
              >
                <ComparisonTable
                  headers={['Endpoint', 'Method', 'Description']}
                  rows={[
                    ['/api/users', 'GET', 'List all users'],
                    ['/api/users/:id', 'GET', 'Get user by ID'],
                    ['/api/users', 'POST', 'Create new user'],
                    ['/api/users/:id', 'PUT', 'Update user'],
                  ]}
                />
              </TaxonomySection>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Right Sidebar - On This Page */}
      <div className="w-64 hidden xl:block">
        <div className="sticky top-24 p-6">
          <OnThisPageLinks
            links={[
              { label: 'Cards & Content Boxes', id: 'section-1', level: 2 },
              { label: 'Callouts & Alerts', id: 'section-2', level: 2 },
              { label: 'Tables', id: 'section-3', level: 2 },
              { label: 'Code & Technical', id: 'section-4', level: 2 },
              { label: 'Lists & Sequences', id: 'section-5', level: 2 },
              { label: 'Badges & Indicators', id: 'section-6', level: 2 },
              { label: 'Layout Components', id: 'section-7', level: 2 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
