import { ReactNode } from 'react';

// Ordered Step List for tutorials/procedures
interface OrderedStepListProps {
  steps: ReactNode[];
}

export function OrderedStepList({ steps }: OrderedStepListProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#E31E24] text-white flex items-center justify-center text-sm font-medium">
            {idx + 1}
          </div>
          <div className="flex-1 pt-1">
            <div className="text-sm text-neutral-700 leading-relaxed font-light">{step}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

// Unordered Feature/Decision List
interface UnorderedListProps {
  items: ReactNode[];
  variant?: 'default' | 'check' | 'arrow';
}

export function UnorderedList({ items, variant = 'default' }: UnorderedListProps) {
  const markers = {
    default: '•',
    check: '✓',
    arrow: '→',
  };

  const markerColors = {
    default: 'text-neutral-400',
    check: 'text-green-600',
    arrow: 'text-[#E31E24]',
  };

  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className={`flex-shrink-0 ${markerColors[variant]}`}>{markers[variant]}</span>
          <div className="flex-1 text-sm text-neutral-700 leading-relaxed font-light">{item}</div>
        </li>
      ))}
    </ul>
  );
}

// Definition List for term/explanation pairs
interface DefinitionListProps {
  items: {
    term: string;
    definition: ReactNode;
  }[];
}

export function DefinitionList({ items }: DefinitionListProps) {
  return (
    <dl className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="border-l-2 border-neutral-200 pl-4">
          <dt className="text-sm font-medium text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            {item.term}
          </dt>
          <dd className="text-sm text-neutral-700 leading-relaxed font-light">{item.definition}</dd>
        </div>
      ))}
    </dl>
  );
}
