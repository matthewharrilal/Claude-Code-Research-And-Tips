import { ReactNode } from 'react';

// Level Card Component
interface LevelCardProps {
  level: number;
  title: string;
  subtitle: string;
  description: string;
  codeExample?: string;
  unlocks: string[];
}

export function LevelCard({ level, title, subtitle, description, codeExample, unlocks }: LevelCardProps) {
  const levelColors = [
    'bg-neutral-200 text-neutral-900',
    'bg-neutral-200 text-neutral-900',
    'bg-neutral-200 text-neutral-900',
    'bg-neutral-200 text-neutral-900',
    'bg-neutral-200 text-neutral-900',
    'bg-[#E31E24] text-white',
    'bg-[#E31E24] text-white',
    'bg-[#E31E24] text-white',
  ];

  return (
    <div className="border border-neutral-300 p-8 bg-white hover:border-[#E31E24] transition-colors">
      <div className="flex items-start gap-6 mb-6">
        <div className={`w-14 h-14 flex items-center justify-center text-xl font-bold ${levelColors[level] || levelColors[0]}`}>
          {level}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-neutral-900 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h3>
          <p className="text-sm text-neutral-500 font-light uppercase tracking-wider">{subtitle}</p>
        </div>
      </div>

      <p className="text-base text-neutral-600 leading-relaxed mb-6 font-light">{description}</p>

      {codeExample && (
        <div className="bg-neutral-50 border border-neutral-300 p-4 mb-6">
          <pre className="text-xs font-mono text-neutral-700 overflow-x-auto leading-relaxed">{codeExample}</pre>
        </div>
      )}

      <div>
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.25em] mb-3">Unlocks</div>
        <ul className="space-y-2">
          {unlocks.map((unlock, idx) => (
            <li key={idx} className="text-sm text-neutral-600 flex items-start font-light">
              <span className="mr-3 text-[#E31E24] mt-0.5">→</span>
              <span>{unlock}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Architecture Card Component
interface ArchitectureCardProps {
  icon?: string;
  title: string;
  subtitle: string;
  asciiDiagram?: string;
  pros: string[];
  cons: string[];
  useCases: string[];
}

export function ArchitectureCard({ icon, title, subtitle, asciiDiagram, pros, cons, useCases }: ArchitectureCardProps) {
  return (
    <div className="border border-neutral-300 p-8 bg-white hover:border-[#E31E24] transition-colors">
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-[#E31E24] text-2xl">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl text-neutral-900 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h3>
          <p className="text-sm text-neutral-500 font-light uppercase tracking-wider">{subtitle}</p>
        </div>
      </div>

      {asciiDiagram && (
        <div className="bg-neutral-50 border border-neutral-300 p-5 mb-6">
          <pre className="text-xs font-mono text-neutral-700 overflow-x-auto leading-relaxed">{asciiDiagram}</pre>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="text-[10px] font-bold text-green-700 uppercase tracking-[0.25em] mb-3">Pros</div>
          <ul className="space-y-2">
            {pros.map((pro, idx) => (
              <li key={idx} className="text-sm text-neutral-700 flex items-start font-light">
                <span className="mr-2 text-green-600 font-bold">+</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold text-red-700 uppercase tracking-[0.25em] mb-3">Cons</div>
          <ul className="space-y-2">
            {cons.map((con, idx) => (
              <li key={idx} className="text-sm text-neutral-700 flex items-start font-light">
                <span className="mr-2 text-red-600 font-bold">−</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.25em] mb-3">Use Cases</div>
        <ul className="space-y-2">
          {useCases.map((useCase, idx) => (
            <li key={idx} className="text-sm text-neutral-600 flex items-start font-light">
              <span className="mr-2 text-neutral-400">•</span>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Innovation Card Component
interface InnovationCardProps {
  tier: 1 | 2 | 3 | 4;
  number: number;
  title: string;
  description: string;
  codeExample?: string;
  effort: 'Low' | 'Medium' | 'High';
  value: 'Low' | 'Medium' | 'High';
}

export function InnovationCard({ tier, number, title, description, codeExample, effort, value }: InnovationCardProps) {
  const tierColors = {
    1: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    2: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    3: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    4: 'bg-[#E31E24] text-white border-[#E31E24]',
  };

  const effortColors = {
    Low: 'text-green-700',
    Medium: 'text-yellow-700',
    High: 'text-red-700',
  };

  return (
    <div className="border border-neutral-300 p-8 bg-white hover:border-[#E31E24] transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border ${tierColors[tier]}`}>
            Tier {tier}
          </div>
          <div className="w-10 h-10 border border-neutral-300 flex items-center justify-center text-sm font-bold text-neutral-900">
            {number}
          </div>
        </div>
      </div>

      <h3 className="text-2xl text-neutral-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
        {title}
      </h3>

      <p className="text-base text-neutral-600 leading-relaxed mb-6 font-light">{description}</p>

      {codeExample && (
        <div className="bg-neutral-50 border border-neutral-300 p-4 mb-6">
          <pre className="text-xs font-mono text-neutral-700 overflow-x-auto leading-relaxed">{codeExample}</pre>
        </div>
      )}

      <div className="flex gap-8 text-sm">
        <div>
          <span className="text-neutral-500 font-light uppercase tracking-wide text-xs">Effort:</span>{' '}
          <span className={`font-medium ${effortColors[effort]}`}>{effort}</span>
        </div>
        <div>
          <span className="text-neutral-500 font-light uppercase tracking-wide text-xs">Value:</span>{' '}
          <span className={`font-medium ${effortColors[value]}`}>{value}</span>
        </div>
      </div>
    </div>
  );
}

// Info Box Component
interface InfoBoxProps {
  title: string;
  children: ReactNode;
}

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6">
      <h4 className="text-xs font-bold text-blue-900 mb-3 uppercase tracking-[0.2em]">{title}</h4>
      <div className="text-sm text-blue-900/90 leading-relaxed font-light">{children}</div>
    </div>
  );
}

// Decision Box Component
interface DecisionBoxProps {
  topic: string;
  reasoning: string;
  takeaway: string;
}

export function DecisionBox({ topic, reasoning, takeaway }: DecisionBoxProps) {
  return (
    <div className="border-l-2 border-[#E31E24] bg-[#FEF2F2] p-8">
      <h4 className="text-lg font-bold text-neutral-900 mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
        WHY {topic.toUpperCase()}?
      </h4>
      <p className="text-base text-neutral-700 leading-relaxed mb-6 font-light">{reasoning}</p>
      <div className="bg-white border border-red-200 p-5">
        <div className="text-[10px] font-bold text-[#E31E24] mb-2 uppercase tracking-[0.2em]">What this means for you</div>
        <p className="text-sm text-neutral-700 leading-relaxed font-light">{takeaway}</p>
      </div>
    </div>
  );
}

// Highlight Box Component
interface HighlightBoxProps {
  children: ReactNode;
}

export function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className="bg-yellow-50 border border-yellow-300 p-8 text-center">
      <div className="text-xl text-neutral-900 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
        {children}
      </div>
    </div>
  );
}

// Iron Law Box Component
interface IronLawBoxProps {
  children: ReactNode;
}

export function IronLawBox({ children }: IronLawBoxProps) {
  return (
    <div className="bg-[#1A1A1A] text-white p-8 border border-neutral-800">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">⚠️</span>
        <h4 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-serif)' }}>
          Iron Law
        </h4>
      </div>
      <div className="text-base leading-relaxed font-light">{children}</div>
    </div>
  );
}

// Quote Box Component
interface QuoteBoxProps {
  quote: string;
  attribution: string;
}

export function QuoteBox({ quote, attribution }: QuoteBoxProps) {
  return (
    <blockquote className="border-l border-neutral-300 pl-8 py-4 my-8">
      <p className="text-xl text-neutral-700 leading-relaxed font-light mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
        "{quote}"
      </p>
      <cite className="text-sm text-neutral-500 not-italic font-light uppercase tracking-wide">— {attribution}</cite>
    </blockquote>
  );
}
