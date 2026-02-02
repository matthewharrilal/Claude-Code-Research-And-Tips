import { ReactNode, useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Code Block with syntax highlighting and copy button
interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'javascript', filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
      {filename && (
        <div className="bg-[#FAFBFC] border-b border-neutral-200 px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-600">{filename}</span>
          <span className="text-xs text-neutral-400">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white border border-neutral-200 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-neutral-600" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-neutral-800 leading-relaxed">
            {showLineNumbers ? (
              <div>
                {lines.map((line, idx) => (
                  <div key={idx} className="flex">
                    <span className="inline-block w-8 text-neutral-400 select-none">{idx + 1}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Inline Code
interface InlineCodeProps {
  children: ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-[#FAFBFC] border border-neutral-200 text-sm font-mono text-[#E31E24] font-normal">
      {children}
    </code>
  );
}

// ASCII Diagram Container
interface AsciiDiagramProps {
  children: string;
  title?: string;
}

export function AsciiDiagram({ children, title }: AsciiDiagramProps) {
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
      {title && (
        <div className="bg-[#FAFBFC] border-b border-neutral-200 px-4 py-2">
          <span className="text-xs font-medium text-neutral-700">{title}</span>
        </div>
      )}
      <pre className="p-6 overflow-x-auto bg-[#FAFBFC]">
        <code className="text-xs font-mono text-neutral-700 leading-relaxed">{children}</code>
      </pre>
    </div>
  );
}

// Formula Display
interface FormulaProps {
  children: ReactNode;
  label?: string;
}

export function Formula({ children, label }: FormulaProps) {
  return (
    <div className="my-6 text-center">
      {label && (
        <div className="text-xs text-neutral-500 mb-2 font-light">{label}</div>
      )}
      <div className="inline-block bg-[#FEF2F2] border border-red-100 rounded-xl px-8 py-4">
        <div className="text-xl font-medium text-neutral-900" style={{ fontFamily: 'var(--font-serif)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
