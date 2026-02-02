import { Copy, Check, Terminal, ArrowLeft, Code2, FileCode, Type } from 'lucide-react';
import { useState } from 'react';

type CodeType = 'terminal' | 'code-block' | 'inline' | 'config';

export function CodeSnippetShowcase() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeType, setActiveType] = useState<CodeType>('terminal');

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleBack = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFA]" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Left Sidebar - Navigation */}
      <aside className="w-72 h-screen sticky top-0 overflow-y-auto border-r border-neutral-300 bg-white p-8">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to System</span>
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-6 bg-[#E31E24]" />
            <div className="text-[9px] font-bold text-[#E31E24] uppercase tracking-[0.25em]">
              Code Styles
            </div>
          </div>
          <h1 className="text-3xl text-neutral-900 leading-tight mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Style Guide
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed font-normal">
            Core code presentation patterns for technical documentation.
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          <button
            onClick={() => setActiveType('terminal')}
            className={`w-full text-left p-4 rounded-2xl transition-all border-2 ${
              activeType === 'terminal'
                ? 'bg-gradient-to-br from-[#CCFBF1] to-[#A7F3D0] border-[#14B8A6]/30 shadow-md'
                : 'bg-neutral-50 border-neutral-200 hover:border-[#14B8A6]/20'
            }`}
          >
            <div className="flex items-center gap-3 mb-1">
              <Terminal className={`w-4 h-4 ${activeType === 'terminal' ? 'text-[#0D9488]' : 'text-neutral-500'}`} />
              <span className={`text-sm font-semibold ${activeType === 'terminal' ? 'text-neutral-900' : 'text-neutral-700'}`}>
                Terminal Commands
              </span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal ml-7">
              Shell execution, CLI tools
            </p>
          </button>

          <button
            onClick={() => setActiveType('code-block')}
            className={`w-full text-left p-4 rounded-2xl transition-all border-2 ${
              activeType === 'code-block'
                ? 'bg-gradient-to-br from-[#FDE8E4] to-[#FECACA] border-[#D4917E]/30 shadow-md'
                : 'bg-neutral-50 border-neutral-200 hover:border-[#D4917E]/20'
            }`}
          >
            <div className="flex items-center gap-3 mb-1">
              <Code2 className={`w-4 h-4 ${activeType === 'code-block' ? 'text-[#B86F5A]' : 'text-neutral-500'}`} />
              <span className={`text-sm font-semibold ${activeType === 'code-block' ? 'text-neutral-900' : 'text-neutral-700'}`}>
                Code Blocks
              </span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal ml-7">
              Multi-line syntax examples
            </p>
          </button>

          <button
            onClick={() => setActiveType('inline')}
            className={`w-full text-left p-4 rounded-2xl transition-all border-2 ${
              activeType === 'inline'
                ? 'bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] border-[#9333EA]/30 shadow-md'
                : 'bg-neutral-50 border-neutral-200 hover:border-[#9333EA]/20'
            }`}
          >
            <div className="flex items-center gap-3 mb-1">
              <Type className={`w-4 h-4 ${activeType === 'inline' ? 'text-[#7E22CE]' : 'text-neutral-500'}`} />
              <span className={`text-sm font-semibold ${activeType === 'inline' ? 'text-neutral-900' : 'text-neutral-700'}`}>
                Inline Code
              </span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal ml-7">
              In-sentence snippets
            </p>
          </button>

          <button
            onClick={() => setActiveType('config')}
            className={`w-full text-left p-4 rounded-2xl transition-all border-2 ${
              activeType === 'config'
                ? 'bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD] border-[#0EA5E9]/30 shadow-md'
                : 'bg-neutral-50 border-neutral-200 hover:border-[#0EA5E9]/20'
            }`}
          >
            <div className="flex items-center gap-3 mb-1">
              <FileCode className={`w-4 h-4 ${activeType === 'config' ? 'text-[#0369A1]' : 'text-neutral-500'}`} />
              <span className={`text-sm font-semibold ${activeType === 'config' ? 'text-neutral-900' : 'text-neutral-700'}`}>
                Configuration Files
              </span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-normal ml-7">
              JSON, YAML, settings
            </p>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto px-16 py-12">
        {activeType === 'terminal' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#14B8A6]" />
              <div className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-[0.25em]">
                Terminal Style
              </div>
            </div>

            <h2 className="text-5xl text-neutral-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Terminal Commands
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed font-normal mb-12 max-w-2xl">
              Dark, focused blocks for shell commands and CLI execution. Mint green accents signal executable actions and provide visual hierarchy.
            </p>

            {/* Terminal Example */}
            <div
              className="border border-neutral-800 relative overflow-hidden rounded-2xl group mb-8"
              style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'
              }}
            >
              {/* Header Bar */}
              <div className="border-b border-neutral-700/50 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <button
                  onClick={() => handleCopy('npm install @openskills/numman-ai\nnpx openskills setup numman-ai', 0)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg"
                >
                  {copiedIndex === 0 ? (
                    <Check className="w-4 h-4 text-[#14B8A6]" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#14B8A6] font-semibold select-none">$</span>
                  <code className="text-white/90 leading-relaxed">
                    npm install @openskills/numman-ai
                  </code>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14B8A6] font-semibold select-none">$</span>
                  <code className="text-white/90 leading-relaxed">
                    npx openskills setup numman-ai
                  </code>
                </div>
              </div>

              {/* Gradient Accent */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#14B8A6]/10 to-transparent pointer-events-none" />
            </div>

            {/* Multi-step variant */}
            <h3 className="text-2xl text-neutral-900 mb-6 mt-16 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
              Multi-Step Process
            </h3>

            <div
              className="border border-neutral-800 relative overflow-hidden rounded-2xl group"
              style={{
                background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0A2E 100%)'
              }}
            >
              <div className="border-b border-neutral-700/50 px-6 py-3 flex items-center justify-between">
                <div className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-[0.25em]">
                  Context Management
                </div>
                <button
                  onClick={() => handleCopy('# Initialize\nnpx cc-mirror tasks create --subject "auth"\n\n# Update status\nnpx cc-mirror tasks update --id auth-001 --status resolved', 2)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg"
                >
                  {copiedIndex === 2 ? (
                    <Check className="w-4 h-4 text-[#14B8A6]" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="mb-4">
                  <div className="text-[#14B8A6] text-xs font-semibold mb-2 uppercase tracking-wider"># Initialize</div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#14B8A6] font-semibold select-none">$</span>
                    <code className="text-white/90 leading-relaxed">
                      npx cc-mirror tasks create --subject <span className="text-[#F59E0B]">"auth"</span>
                    </code>
                  </div>
                </div>

                <div>
                  <div className="text-[#14B8A6] text-xs font-semibold mb-2 uppercase tracking-wider"># Update status</div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#14B8A6] font-semibold select-none">$</span>
                    <code className="text-white/90 leading-relaxed">
                      npx cc-mirror tasks update --id auth-001 --status resolved
                    </code>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#14B8A6]/10 to-transparent pointer-events-none" />
            </div>
          </div>
        )}

        {activeType === 'code-block' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#D4917E]" />
              <div className="text-[10px] font-bold text-[#D4917E] uppercase tracking-[0.25em]">
                Code Block Style
              </div>
            </div>

            <h2 className="text-5xl text-neutral-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Code Blocks
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed font-normal mb-12 max-w-2xl">
              Syntax-highlighted blocks for JavaScript, TypeScript, and other languages. Warm coral and gold accents create luxury technical documentation.
            </p>

            <div
              className="border border-neutral-800 relative overflow-hidden rounded-2xl group"
              style={{
                background: 'linear-gradient(135deg, #1A1A1A 0%, #0D2818 100%)'
              }}
            >
              <div className="border-b border-neutral-700/50 px-6 py-3 flex items-center justify-between">
                <div className="text-xs text-white/60 font-mono">
                  orchestration.ts
                </div>
                <button
                  onClick={() => handleCopy('const result = await claude.orchestrate({\n  tasks: [...],\n  isolation: true,\n  verify: (output) => output.success\n});', 1)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg"
                >
                  {copiedIndex === 1 ? (
                    <Check className="w-4 h-4 text-[#14B8A6]" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-sm overflow-x-auto">
                <code className="block text-white/90 leading-relaxed whitespace-pre">
                  <span className="text-[#D4AF37]">const</span> <span className="text-white">result</span> = <span className="text-[#D4AF37]">await</span> <span className="text-[#D4917E]">claude</span>.<span className="text-[#14B8A6]">orchestrate</span>({'{'}
                  <span className="text-[#9333EA]">tasks</span>: [...],
                  <span className="text-[#9333EA]">isolation</span>: <span className="text-[#F59E0B]">true</span>,
                  <span className="text-[#9333EA]">verify</span>: (<span className="text-white">output</span>) {'=>'} output.success
                {'}'});
                </code>
              </div>

              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4917E]/10 to-transparent pointer-events-none" />
            </div>
          </div>
        )}

        {activeType === 'inline' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#9333EA]" />
              <div className="text-[10px] font-bold text-[#9333EA] uppercase tracking-[0.25em]">
                Inline Code Style
              </div>
            </div>

            <h2 className="text-5xl text-neutral-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Inline Code
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed font-normal mb-12 max-w-2xl">
              Minimal, readable code snippets within flowing text. Color-coded variants help categorize different types of inline references.
            </p>

            <div className="space-y-6">
              {/* Default Inline */}
              <div className="bg-white border-2 border-neutral-200 p-8 rounded-2xl">
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Default</div>
                <p className="text-lg text-neutral-700 leading-relaxed font-normal">
                  Use the{' '}
                  <code className="px-2.5 py-1.5 bg-neutral-100 text-neutral-900 rounded-lg font-mono text-base font-medium border border-neutral-200">
                    progress.md
                  </code>{' '}
                  file to track session state across multiple workers.
                </p>
              </div>

              {/* Mint Accent */}
              <div className="bg-white border-2 border-[#14B8A6]/20 p-8 rounded-2xl">
                <div className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest mb-3">Command</div>
                <p className="text-lg text-neutral-700 leading-relaxed font-normal">
                  Execute{' '}
                  <code className="px-2.5 py-1.5 bg-[#CCFBF1] text-[#0D9488] rounded-lg font-mono text-base font-semibold border border-[#14B8A6]/30">
                    npm run orchestrate
                  </code>{' '}
                  to spawn parallel workers with isolated contexts.
                </p>
              </div>

              {/* Coral Accent */}
              <div className="bg-white border-2 border-[#D4917E]/20 p-8 rounded-2xl">
                <div className="text-xs font-bold text-[#D4917E] uppercase tracking-widest mb-3">Parameter</div>
                <p className="text-lg text-neutral-700 leading-relaxed font-normal">
                  The{' '}
                  <code className="px-2.5 py-1.5 bg-[#FDE8E4] text-[#B86F5A] rounded-lg font-mono text-base font-semibold border border-[#D4917E]/30">
                    --verify
                  </code>{' '}
                  flag ensures atomic task completion before proceeding.
                </p>
              </div>

              {/* Purple Accent */}
              <div className="bg-white border-2 border-[#9333EA]/20 p-8 rounded-2xl">
                <div className="text-xs font-bold text-[#9333EA] uppercase tracking-widest mb-3">Configuration</div>
                <p className="text-lg text-neutral-700 leading-relaxed font-normal">
                  Configure{' '}
                  <code className="px-2.5 py-1.5 bg-[#F3E8FF] text-[#7E22CE] rounded-lg font-mono text-base font-semibold border border-[#9333EA]/30">
                    maxContextTokens: 140000
                  </code>{' '}
                  to maintain optimal quality at 70% capacity.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeType === 'config' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#0EA5E9]" />
              <div className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-[0.25em]">
                Configuration Style
              </div>
            </div>

            <h2 className="text-5xl text-neutral-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Configuration Files
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed font-normal mb-12 max-w-2xl">
              Light, approachable blocks for JSON, YAML, and configuration files. Sky blue theme signals settings and structured data.
            </p>

            <div
              className="border-2 border-[#0EA5E9]/30 relative overflow-hidden rounded-2xl group"
              style={{
                background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)'
              }}
            >
              <div className="border-b-2 border-[#0EA5E9]/20 px-6 py-3 flex items-center justify-between bg-white/50">
                <div className="text-xs text-[#0369A1] font-mono font-semibold">
                  claude.config.json
                </div>
                <button
                  onClick={() => handleCopy('{\n  "contextLimit": 200000,\n  "qualityThreshold": 0.7,\n  "externalState": true\n}', 3)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-[#0EA5E9]/10 rounded-lg"
                >
                  {copiedIndex === 3 ? (
                    <Check className="w-4 h-4 text-[#14B8A6]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#0369A1]" />
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-sm">
                <code className="block text-[#0369A1] leading-relaxed whitespace-pre">
{`{
  "contextLimit": 200000,
  "qualityThreshold": 0.7,
  "externalState": true
}`}
                </code>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#0EA5E9]/15 to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </main>

      {/* Right Sidebar - Anatomy Breakdown */}
      <aside className="w-[420px] h-screen sticky top-0 overflow-y-auto border-l border-neutral-300 bg-[#FCFCFC] p-8">
        {activeType === 'terminal' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-[#14B8A6]" />
              <h3 className="text-xl text-neutral-900 font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                Anatomy
              </h3>
            </div>

            {/* Design Specs Card */}
            <div
              className="p-6 mb-6 rounded-3xl border-2 border-[#14B8A6]/30"
              style={{
                background: 'linear-gradient(135deg, #CCFBF1 0%, #A7F3D0 100%)'
              }}
            >
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Design Specs</h4>
              <div className="space-y-3 text-sm font-normal leading-relaxed">
                <div className="flex justify-between">
                  <span className="text-neutral-700">Background</span>
                  <code className="text-xs font-mono text-[#0D9488] bg-white/50 px-2 py-1 rounded">gradient-dark</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Border Radius</span>
                  <code className="text-xs font-mono text-[#0D9488] bg-white/50 px-2 py-1 rounded">rounded-2xl</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Padding</span>
                  <code className="text-xs font-mono text-[#0D9488] bg-white/50 px-2 py-1 rounded">p-6</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Font</span>
                  <code className="text-xs font-mono text-[#0D9488] bg-white/50 px-2 py-1 rounded">mono, text-sm</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Accent Color</span>
                  <code className="text-xs font-mono text-[#0D9488] bg-white/50 px-2 py-1 rounded">#14B8A6</code>
                </div>
              </div>
            </div>

            {/* Key Features Card */}
            <div className="p-6 mb-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#14B8A6] mt-1">●</span>
                  <span>Window controls create macOS terminal feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14B8A6] mt-1">●</span>
                  <span>Mint prompt ($) signals executable commands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14B8A6] mt-1">●</span>
                  <span>Dark gradient background focuses attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14B8A6] mt-1">●</span>
                  <span>Copy button appears on hover for clean UI</span>
                </li>
              </ul>
            </div>

            {/* When to Use */}
            <div className="p-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">When to Use</h4>
              <p className="text-sm font-normal leading-relaxed text-neutral-700 mb-4">
                Use terminal blocks for shell commands, CLI instructions, and system-level operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                  <span>Installation commands</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                  <span>Build scripts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                  <span>Git operations</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === 'code-block' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-[#D4917E]" />
              <h3 className="text-xl text-neutral-900 font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                Anatomy
              </h3>
            </div>

            <div
              className="p-6 mb-6 rounded-3xl border-2 border-[#D4917E]/30"
              style={{
                background: 'linear-gradient(135deg, #FDE8E4 0%, #FECACA 100%)'
              }}
            >
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Syntax Colors</h4>
              <div className="space-y-3 text-sm font-normal leading-relaxed">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Keywords</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#D4AF37]" />
                    <code className="text-xs font-mono text-neutral-600">#D4AF37</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Objects</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#D4917E]" />
                    <code className="text-xs font-mono text-neutral-600">#D4917E</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Methods</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#14B8A6]" />
                    <code className="text-xs font-mono text-neutral-600">#14B8A6</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Properties</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#9333EA]" />
                    <code className="text-xs font-mono text-neutral-600">#9333EA</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Booleans</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#F59E0B]" />
                    <code className="text-xs font-mono text-neutral-600">#F59E0B</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 mb-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Typography</h4>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4917E] mt-1">●</span>
                  <span>Monospace font for code readability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4917E] mt-1">●</span>
                  <span>14px base size with relaxed line height</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4917E] mt-1">●</span>
                  <span>Color-coded syntax enhances scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4917E] mt-1">●</span>
                  <span>File name label provides context</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">When to Use</h4>
              <p className="text-sm font-normal leading-relaxed text-neutral-700 mb-4">
                Use code blocks for multi-line examples, function definitions, and complex logic demonstrations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#D4917E]" />
                  <span>TypeScript/JavaScript</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#D4917E]" />
                  <span>API examples</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#D4917E]" />
                  <span>Function signatures</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === 'inline' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Type className="w-5 h-5 text-[#9333EA]" />
              <h3 className="text-xl text-neutral-900 font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                Anatomy
              </h3>
            </div>

            <div
              className="p-6 mb-6 rounded-3xl border-2 border-[#9333EA]/30"
              style={{
                background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)'
              }}
            >
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Color Variants</h4>
              <div className="space-y-3 text-sm font-normal leading-relaxed">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Default</span>
                  <span className="text-xs text-neutral-600">Neutral gray</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Command</span>
                  <span className="text-xs text-neutral-600">Mint green</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Parameter</span>
                  <span className="text-xs text-neutral-600">Warm coral</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Config</span>
                  <span className="text-xs text-neutral-600">Purple</span>
                </div>
              </div>
            </div>

            <div className="p-6 mb-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Design Principles</h4>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">●</span>
                  <span>Subtle enough to not disrupt reading flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">●</span>
                  <span>Distinct enough to be clearly identifiable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">●</span>
                  <span>Rounded corners feel approachable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9333EA] mt-1">●</span>
                  <span>Generous padding improves legibility</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Best Practices</h4>
              <p className="text-sm font-normal leading-relaxed text-neutral-700 mb-4">
                Keep inline code snippets short (under 40 characters) and use color variants to categorize different types.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#9333EA]" />
                  <span>File names & paths</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#9333EA]" />
                  <span>Variable names</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#9333EA]" />
                  <span>CLI flags</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeType === 'config' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileCode className="w-5 h-5 text-[#0EA5E9]" />
              <h3 className="text-xl text-neutral-900 font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                Anatomy
              </h3>
            </div>

            <div
              className="p-6 mb-6 rounded-3xl border-2 border-[#0EA5E9]/30"
              style={{
                background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)'
              }}
            >
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Design Specs</h4>
              <div className="space-y-3 text-sm font-normal leading-relaxed">
                <div className="flex justify-between">
                  <span className="text-neutral-700">Background</span>
                  <code className="text-xs font-mono text-[#0369A1] bg-white/50 px-2 py-1 rounded">gradient-light</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Border</span>
                  <code className="text-xs font-mono text-[#0369A1] bg-white/50 px-2 py-1 rounded">2px sky-blue</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Text Color</span>
                  <code className="text-xs font-mono text-[#0369A1] bg-white/50 px-2 py-1 rounded">#0369A1</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700">Theme</span>
                  <code className="text-xs font-mono text-[#0369A1] bg-white/50 px-2 py-1 rounded">Light</code>
                </div>
              </div>
            </div>

            <div className="p-6 mb-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Why Light Theme?</h4>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA5E9] mt-1">●</span>
                  <span>Config files are often simple and structured</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA5E9] mt-1">●</span>
                  <span>Light background feels less intimidating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA5E9] mt-1">●</span>
                  <span>Contrast with dark code blocks creates hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0EA5E9] mt-1">●</span>
                  <span>Sky blue signals "settings" and configuration</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-3xl border-2 border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">When to Use</h4>
              <p className="text-sm font-normal leading-relaxed text-neutral-700 mb-4">
                Use light config blocks for JSON, YAML, environment files, and structured settings.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span>package.json</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span>.env files</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <span>YAML configs</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
