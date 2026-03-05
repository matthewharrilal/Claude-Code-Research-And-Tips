// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW DATA: CD-004, CD-005, CD-006
// Generated for visual-catalog.html integration
// ═══════════════════════════════════════════════════════════════════════════

// ═══ SCOPED CSS for CD-004 ═══
const cssCd004 = `
.preview-cd004 {
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --type-page: 2.5rem;
  --type-section: 1.625rem;
  --type-subsection: 1.375rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;
  --border-radius: 0;
  --box-shadow: none;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;
  --space-within: 8px; --space-between: 32px; --space-chapter: 64px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  --syntax-keyword: #E83025;
  --syntax-string: #6B9B7A;
  --syntax-comment: #666666;
  --syntax-function: #4A7C9B;
  --syntax-type: #C97065;
  --syntax-number: #D97706;
  --syntax-punctuation: #E0D5C5;
  --transition-standard: 0.3s ease;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd004 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd004 h2, .preview-cd004 h3, .preview-cd004 h4 { all: unset; display: block; }

/* Confidence Badge */
.preview-cd004 .confidence-badge {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border);
  margin-bottom: var(--space-3);
  margin-right: 8px;
}
.preview-cd004 .confidence-badge--established { color: var(--accent-green); border-color: var(--accent-green); }
.preview-cd004 .confidence-badge--probable { color: var(--accent-blue); border-color: var(--accent-blue); }
.preview-cd004 .confidence-badge--speculative { color: var(--accent-amber); border-color: var(--accent-amber); }
.preview-cd004 .confidence-badge--open { color: var(--accent-coral); border-color: var(--accent-coral); }

/* Version Badge */
.preview-cd004 .version-badge {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

/* Header Meta Line */
.preview-cd004 .header-meta {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--type-meta);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}
.preview-cd004 .meta-line {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.preview-cd004 .header-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-background);
  line-height: 1.2;
  margin-bottom: var(--space-4);
}

/* Confidence Gap Spacers */
.preview-cd004 .confidence-gap-moderate { margin-top: var(--space-8); }
.preview-cd004 .confidence-gap-breathing { margin-top: var(--space-12); }
.preview-cd004 .confidence-gap-wide { margin-top: var(--space-16); }

/* Strata */
.preview-cd004 .stratum-established {
  border-left: 4px solid var(--color-border);
  padding-left: var(--space-6);
  margin-bottom: var(--space-6);
  padding-top: 8px;
  padding-bottom: 8px;
}
.preview-cd004 .stratum-probable {
  border-left: 3px solid var(--color-border);
  padding-left: var(--space-8);
  margin-bottom: var(--space-8);
  padding-top: 8px;
  padding-bottom: 8px;
}
.preview-cd004 .stratum-speculative {
  border-left: 1px solid var(--color-border);
  padding-left: var(--space-12);
  margin-bottom: var(--space-12);
  padding-top: 8px;
  padding-bottom: 8px;
}
.preview-cd004 .stratum-open {
  padding-left: var(--space-16);
  margin-bottom: var(--space-16);
  padding-top: 8px;
  padding-bottom: 8px;
}
.preview-cd004 .stratum-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.preview-cd004 .stratum-content {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-secondary);
}

/* Callout base */
.preview-cd004 .callout-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
.preview-cd004 .callout-body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
  color: var(--color-text);
}

/* Essence Callout */
.preview-cd004 .callout-essence {
  border-left: 4px solid var(--accent-purple);
  padding: var(--space-4) var(--space-6);
  margin: var(--space-4) 0;
  max-width: 60%;
  background: var(--color-zone-sparse);
}
.preview-cd004 .callout-essence .callout-label { color: var(--accent-purple); }
.preview-cd004 .callout-essence .callout-body {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-body);
  line-height: 1.7;
}

/* Info Callout */
.preview-cd004 .callout-info {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-4) var(--space-6);
  margin: var(--space-4) 0;
  background: var(--color-zone-dense);
}
.preview-cd004 .callout-info .callout-label { color: var(--accent-blue); }

/* Tip Callout */
.preview-cd004 .callout-tip {
  border-left: 4px solid var(--accent-green);
  padding: var(--space-4) var(--space-6);
  margin: var(--space-4) 0;
  background: var(--color-zone-dense);
}
.preview-cd004 .callout-tip .callout-label { color: var(--accent-green); }

/* Challenge Callout */
.preview-cd004 .callout-challenge {
  border-left: 4px solid var(--accent-amber);
  padding: var(--space-4) var(--space-6);
  margin: var(--space-4) 0;
  background: var(--color-zone-dense);
}
.preview-cd004 .callout-challenge .callout-label { color: var(--accent-amber); }

/* Code Block */
.preview-cd004 .code-block {
  background: var(--color-text);
  color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: var(--space-6) var(--space-8);
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
  overflow-x: auto;
  margin: var(--space-4) 0;
}
.preview-cd004 .code-block .code-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  display: block;
}
.preview-cd004 .code-block code {
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
}
.preview-cd004 .kw { color: var(--syntax-keyword); }
.preview-cd004 .str { color: var(--syntax-string); }
.preview-cd004 .cmt { color: var(--syntax-comment); }
.preview-cd004 .fn { color: var(--syntax-function); }
.preview-cd004 .typ { color: var(--syntax-type); }
.preview-cd004 .num { color: var(--syntax-number); }

/* Reasoning Component */
.preview-cd004 .reasoning {
  border: 3px solid var(--color-border);
  margin: var(--space-4) 0;
  background: var(--color-zone-dense);
}
.preview-cd004 .reasoning-header {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  color: var(--color-text);
  padding: var(--space-6) var(--space-8);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
.preview-cd004 .reasoning-columns {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-6) var(--space-8);
}
.preview-cd004 .reasoning-col { flex: 1; }
.preview-cd004 .reasoning-col h4 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-body);
  margin-bottom: var(--space-3);
}
.preview-cd004 .reasoning-col ul {
  padding-left: var(--space-5);
  font-size: 14px;
  line-height: 1.7;
}
.preview-cd004 .reasoning-col li { margin-bottom: var(--space-2); }
.preview-cd004 .reasoning-summary {
  padding: var(--space-4) var(--space-8);
  border-top: 1px solid var(--color-border);
  font-weight: 500;
  font-size: 14px;
}

/* Task Component */
.preview-cd004 .task-component {
  border: 3px solid var(--color-border);
  padding: var(--space-6) var(--space-8);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd004 .task-header {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--type-subsection);
  color: var(--color-text);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
.preview-cd004 .task-list { list-style: none; }
.preview-cd004 .task-list li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--type-body);
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}
.preview-cd004 .task-list li:last-child { border-bottom: none; }
.preview-cd004 .task-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  display: inline-block;
  flex-shrink: 0;
  margin-top: 4px;
}

/* Breathing Transition Zone */
.preview-cd004 .transition--breathing {
  margin: var(--space-8) 0;
  padding: var(--space-8) 0;
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
  background: var(--color-zone-breathing);
  text-align: center;
}
.preview-cd004 .transition--breathing .transition-essence {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-section);
  color: var(--color-text);
  max-width: 60ch;
  margin: 0 auto;
  padding: var(--space-4);
}

/* Footer */
.preview-cd004 .page-footer {
  background: var(--color-text);
  border-top: 3px solid var(--color-primary);
  padding: var(--space-4) var(--space-6);
}
.preview-cd004 .page-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preview-cd004 .page-footer__id {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.preview-cd004 .page-footer__rule {
  width: 48px;
  height: 3px;
  background: var(--color-primary);
}

/* Research Application Record */
.preview-cd004 .research-record {
  font-size: var(--type-code);
  font-family: var(--font-mono);
  background: var(--color-zone-breathing);
  padding: var(--space-6);
  line-height: 1.6;
}
.preview-cd004 .research-record__title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-4);
}
.preview-cd004 .research-record__section {
  margin-bottom: var(--space-3);
}
.preview-cd004 .research-record__label {
  font-weight: 600;
  color: var(--color-text);
  display: block;
  margin-bottom: 2px;
}
.preview-cd004 .research-record__value {
  color: var(--color-text-secondary);
}
`;

// ═══ PREVIEW SNIPPETS for CD-004 ═══
const previewsCd004 = {
  'Confidence Badge': `<div style="padding: 8px;">
  <span class="confidence-badge confidence-badge--established">Established</span>
  <span class="confidence-badge confidence-badge--probable">Probable</span>
  <span class="confidence-badge confidence-badge--speculative">Speculative</span>
  <span class="confidence-badge confidence-badge--open">Open Question</span>
</div>`,

  'Version Badge': `<div style="padding: 12px; background: var(--color-text);">
  <span class="version-badge">v1</span>
</div>`,

  'Header Meta Line': `<div style="background: var(--color-text); padding: 20px;">
  <div class="header-meta">
    <div class="meta-line">
      <span>EXPLORATION CD-004</span>
      <span>COMBINATION: ESSENCE AS BACKGROUND</span>
      <span class="version-badge">v1</span>
    </div>
  </div>
  <div class="header-title">Database Architecture Decisions</div>
</div>`,

  'Confidence Gap Spacers': `<div style="padding: 8px;">
  <div class="stratum-established">
    <div class="stratum-label" style="color: var(--accent-green);">Established</div>
    <div class="stratum-content">Dense content, tight spacing (24px gap below)</div>
  </div>
  <div class="confidence-gap-moderate" style="border-top: 1px dashed var(--color-border);"></div>
  <div class="stratum-probable">
    <div class="stratum-label" style="color: var(--accent-blue);">Probable</div>
    <div class="stratum-content">Moderate content (32px gap = confidence-gap-moderate)</div>
  </div>
  <div class="confidence-gap-breathing" style="border-top: 1px dashed var(--color-border);"></div>
  <div class="stratum-speculative">
    <div class="stratum-label" style="color: var(--accent-amber);">Speculative</div>
    <div class="stratum-content">Wider breathing (48px gap = confidence-gap-breathing)</div>
  </div>
  <div class="confidence-gap-wide" style="border-top: 1px dashed var(--color-border);"></div>
  <div class="stratum-open">
    <div class="stratum-label" style="color: var(--accent-coral);">Open Question</div>
    <div class="stratum-content">Maximum breathing (64px gap = confidence-gap-wide)</div>
  </div>
</div>`,

  'Research Application Record': `<div class="research-record">
  <div class="research-record__title">Research Application Record</div>
  <div class="research-record__section">
    <span class="research-record__label">Research Identified as Applicable</span>
    <span class="research-record__value">R5-H2, R5-H3, R5-T2, R5-T3, R5-N1, R5-G1, R5-G2, R5-G3, R5-S2, R5-S3, R5-S4, R5-S5, R5-A5</span>
  </div>
  <div class="research-record__section">
    <span class="research-record__label">AD-F Applied</span>
    <span class="research-record__value">AD-F-004, AD-F-013, AD-F-014, AD-F-015, AD-F-016, AD-F-017, AD-F-023, AD-F-024, AD-F-025</span>
  </div>
  <div class="research-record__section">
    <span class="research-record__label">Soul Verification</span>
    <span class="research-record__value">5/5 PASS</span>
  </div>
</div>`,

  'Footer Identity Bar': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-004 · Essence as Background</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:TIDAL · OD:CONFIDENCE · AD:SPIRAL+CHOREO</span>
  </div>
</div>`,

  'Footer Rule': `<div style="background: var(--color-text); padding: 20px; text-align: center;">
  <div class="page-footer__rule" style="display: inline-block;"></div>
  <div style="font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); margin-top: 8px; letter-spacing: 0.1em;">48px × 3px red rule — echoes header border-bottom</div>
</div>`,

  'Border-Weight Confidence Gradient': `<div style="padding: 8px;">
  <div style="border-left: 4px solid var(--color-border); padding: 12px 16px; margin-bottom: 8px; background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-weight: 600; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-green); margin-bottom: 4px;">ESTABLISHED — border-left: 4px</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Thickest border = highest confidence</div>
  </div>
  <div style="border-left: 3px solid var(--color-border); padding: 12px 20px; margin-bottom: 8px;">
    <div style="font-family: var(--font-body); font-weight: 600; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-blue); margin-bottom: 4px;">PROBABLE — border-left: 3px</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Slightly thinner = slightly less certain</div>
  </div>
  <div style="border-left: 1px solid var(--color-border); padding: 12px 32px; margin-bottom: 8px;">
    <div style="font-family: var(--font-body); font-weight: 600; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-amber); margin-bottom: 4px;">SPECULATIVE — border-left: 1px</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Thin border = uncertain</div>
  </div>
  <div style="border-left: none; padding: 12px 48px;">
    <div style="font-family: var(--font-body); font-weight: 600; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-coral); margin-bottom: 4px;">OPEN — no border</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">No border = pure question</div>
  </div>
</div>`,

  'Spacing-as-Confidence Gradient': `<div style="padding: 8px;">
  <div style="border-left: 4px solid var(--accent-green); padding: 8px 24px; margin-bottom: 24px; font-size: 13px;">
    <strong style="color: var(--accent-green);">ESTABLISHED</strong> — padding-left: 24px, margin-bottom: 24px (tight)
  </div>
  <div style="border-left: 3px solid var(--accent-blue); padding: 8px 32px; margin-bottom: 32px; font-size: 13px;">
    <strong style="color: var(--accent-blue);">PROBABLE</strong> — padding-left: 32px, margin-bottom: 32px
  </div>
  <div style="border-left: 1px solid var(--accent-amber); padding: 8px 48px; margin-bottom: 48px; font-size: 13px;">
    <strong style="color: var(--accent-amber);">SPECULATIVE</strong> — padding-left: 48px, margin-bottom: 48px (wide)
  </div>
  <div style="padding: 8px 64px; font-size: 13px;">
    <strong style="color: var(--accent-coral);">OPEN</strong> — padding-left: 64px, margin-bottom: 64px (widest)
  </div>
</div>`,

  'Tidal Width Modulation': `<div style="padding: 8px;">
  <div class="callout-essence" style="margin-bottom: 12px;">
    <div class="callout-label">Essence</div>
    <div class="callout-body">Narrow at 60% — dense philosophical voice</div>
  </div>
  <div class="code-block" style="margin-bottom: 12px;">
    <span class="code-label">SQL — Full Width</span>
    <code><span class="kw">SELECT</span> * <span class="kw">FROM</span> patterns <span class="kw">WHERE</span> width = <span class="str">'100%'</span>;</code>
  </div>
  <div class="callout-essence">
    <div class="callout-label">Essence</div>
    <div class="callout-body">Back to narrow — tidal oscillation</div>
  </div>
</div>`,

  'Callout Color-Coding System': `<div style="padding: 8px;">
  <div class="callout-essence" style="margin-bottom: 8px; max-width: 100%;">
    <div class="callout-label">Essence</div>
    <div class="callout-body">Purple = philosophical reflection</div>
  </div>
  <div class="callout-info" style="margin-bottom: 8px;">
    <div class="callout-label">Context</div>
    <div class="callout-body">Blue = contextual information</div>
  </div>
  <div class="callout-tip" style="margin-bottom: 8px;">
    <div class="callout-label">Tip</div>
    <div class="callout-body">Green = practical advice</div>
  </div>
  <div class="callout-challenge">
    <div class="callout-label">Challenge</div>
    <div class="callout-body">Amber = reader engagement</div>
  </div>
</div>`,

  'Essence Typography Register': `<div style="padding: 8px;">
  <div style="font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; margin-bottom: 16px; padding: 8px; background: var(--color-zone-dense);">
    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 4px;">Body text (Inter, sans-serif)</div>
    Technical content uses Inter for analytical reading mode.
  </div>
  <div style="font-family: var(--font-display); font-style: italic; font-size: var(--type-body); line-height: 1.7; padding: 8px; border-left: 4px solid var(--accent-purple); background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-style: normal; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-purple); margin-bottom: 4px;">Essence text (Instrument Serif, italic)</div>
    The ambient philosophical voice shifts to serif italic — a distinct typographic register reserved exclusively for Essence content.
  </div>
</div>`,

  'Breathing Transition Zone': `<div class="transition--breathing">
  <div class="transition-essence">
    The strata have been read. Now the question turns practical: how do you choose among these layers?
  </div>
</div>`,

  'Essence Callout': `<div class="callout-essence">
  <div class="callout-label">Essence</div>
  <div class="callout-body">A database is not a tool you choose. It is a set of assumptions you inherit. Every query you write is a conversation with those assumptions.</div>
</div>`,

  'Info Callout': `<div class="callout-info">
  <div class="callout-label">Context</div>
  <div class="callout-body">ACID (Atomicity, Consistency, Isolation, Durability) guarantees that database transactions are processed reliably. This is the foundation of relational database integrity.</div>
</div>`,

  'Tip Callout': `<div class="callout-tip">
  <div class="callout-label">Tip</div>
  <div class="callout-body">Start with PostgreSQL for most new projects. Its JSON support gives you document flexibility without sacrificing relational integrity.</div>
</div>`,

  'Challenge Callout': `<div class="callout-challenge">
  <div class="callout-label">Challenge</div>
  <div class="callout-body">Design a schema that handles both user profiles (relational) and user activity logs (time-series). Which trade-offs emerge?</div>
</div>`,

  'Code Block': `<div class="code-block">
  <span class="code-label">SQL — ACID Transaction</span>
  <code><span class="kw">BEGIN</span> <span class="kw">TRANSACTION</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance - <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">1</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance + <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">2</span>;
<span class="kw">COMMIT</span>;</code>
</div>`,

  'Reasoning Component': `<div class="reasoning">
  <div class="reasoning-header">When to Choose Documents Over Relations?</div>
  <div class="reasoning-columns">
    <div class="reasoning-col">
      <h4>Arguments For Documents</h4>
      <ul>
        <li>Schema flexibility for evolving data</li>
        <li>Natural fit for nested/hierarchical data</li>
        <li>Horizontal scaling built-in</li>
      </ul>
    </div>
    <div class="reasoning-col">
      <h4>Arguments For Relations</h4>
      <ul>
        <li>ACID guarantees for data integrity</li>
        <li>Complex queries across entities</li>
        <li>Mature tooling and optimization</li>
      </ul>
    </div>
  </div>
  <div class="reasoning-summary"><strong>Resolution:</strong> Use documents when your data is self-contained; use relations when your data is interconnected.</div>
</div>`,

  'Task Component': `<div class="task-component">
  <div class="task-header">Action Items: Established Patterns</div>
  <ul class="task-list">
    <li><span class="task-checkbox"></span> Audit current schema for normalization violations</li>
    <li><span class="task-checkbox"></span> Benchmark query performance on production dataset</li>
    <li><span class="task-checkbox"></span> Document indexing strategy for top 10 queries</li>
  </ul>
</div>`,
};


// ═══ SCOPED CSS for CD-005 ═══
const cssCd005 = `
.preview-cd005 {
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --type-page: 2.5rem;
  --type-section: 1.625rem;
  --type-subsection: 1.375rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;
  --border-radius: 0;
  --box-shadow: none;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;
  --space-within: 8px; --space-between: 32px; --space-chapter: 64px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --syntax-keyword: #E83025;
  --syntax-string: #6B9B7A;
  --syntax-comment: #666666;
  --syntax-function: #4A7C9B;
  --syntax-type: #C97065;
  --syntax-number: #D97706;
  --syntax-punctuation: #E0D5C5;
  --transition-standard: 0.3s ease;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd005 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd005 h2, .preview-cd005 h3, .preview-cd005 h4 { all: unset; display: block; }

.preview-cd005 .meta-line { display: flex; align-items: center; gap: var(--space-4); font-family: var(--font-body); font-weight: 500; font-size: var(--type-meta); letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary); flex-wrap: wrap; }
.preview-cd005 .version-badge { font-family: var(--font-mono); font-size: var(--type-meta); padding: var(--space-1) var(--space-2); border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary); }
.preview-cd005 .header-title { font-family: var(--font-display); font-size: 1.5rem; color: var(--color-background); line-height: 1.15; margin-top: var(--space-2); }
.preview-cd005 .section-heading { font-family: var(--font-display); font-size: var(--type-section); margin-bottom: var(--space-8); padding-bottom: var(--space-3); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .transition--smooth { padding: var(--space-8) 0; text-align: center; }
.preview-cd005 .transition--smooth__line { border: none; border-top: 1px solid var(--color-border); margin-bottom: var(--space-6); }
.preview-cd005 .transition--smooth__heading { font-family: var(--font-display); font-size: var(--type-section); color: var(--color-text); }
.preview-cd005 .transition--bridge { background: var(--color-zone-breathing); padding: var(--space-8); margin: var(--space-8) 0; border-top: 3px solid var(--color-border); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .callout { border-left: 4px solid var(--accent-blue); padding: var(--space-6) var(--space-5); margin: var(--space-4) 0; background: var(--color-zone-sparse); }
.preview-cd005 .callout__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.preview-cd005 .callout__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.preview-cd005 .callout--note { border-left-color: var(--accent-blue); }
.preview-cd005 .callout--note .callout__label { color: var(--accent-blue); }
.preview-cd005 .callout--tip { border-left-color: var(--accent-green); }
.preview-cd005 .callout--tip .callout__label { color: var(--accent-green); }
.preview-cd005 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-cd005 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-cd005 .callout--essence { border-left-color: var(--accent-purple); }
.preview-cd005 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-cd005 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }
.preview-cd005 .callout--challenge { border-left-color: var(--accent-amber); }
.preview-cd005 .callout--challenge .callout__label { color: var(--accent-amber); }
.preview-cd005 .bento-item__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-4); }
.preview-cd005 .bento-item__title { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: var(--space-4); }
.preview-cd005 .file-tree { font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.8; background: var(--color-text); color: var(--color-background); padding: var(--space-6) var(--space-8); border: 3px solid var(--color-border); }
.preview-cd005 .file-tree__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-3); display: block; }
.preview-cd005 .file-tree__dir { color: var(--syntax-function); }
.preview-cd005 .file-tree__file { color: var(--color-background); }
.preview-cd005 .file-tree__comment { color: var(--syntax-comment); }
.preview-cd005 .file-tree__item--l1 { padding-left: var(--space-4); }
.preview-cd005 .file-tree__item--l2 { padding-left: var(--space-8); }
.preview-cd005 .page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); padding: var(--space-4) var(--space-6); }
.preview-cd005 .page-footer__inner { display: flex; justify-content: space-between; align-items: center; }
.preview-cd005 .page-footer__id { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; }
.preview-cd005 .page-footer__rule { width: 48px; height: 3px; background: var(--color-primary); }
.preview-cd005 .z-sweep { display: grid; grid-template-areas: "z-term z-def"; grid-template-columns: 1fr 1.618fr; gap: var(--space-8); align-items: start; }
.preview-cd005 .z-sweep--reverse { grid-template-areas: "z-def z-term"; grid-template-columns: 1.618fr 1fr; }
.preview-cd005 .z-term { grid-area: z-term; background: var(--color-zone-sparse); padding: var(--space-6) var(--space-8); border-left: 4px solid var(--color-primary); }
.preview-cd005 .z-term__label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-primary); margin-bottom: var(--space-2); }
.preview-cd005 .z-term__text { font-family: var(--font-display); font-size: var(--type-subsection); line-height: 1.3; }
.preview-cd005 .z-def { grid-area: z-def; background: var(--color-zone-dense); padding: var(--space-8); border: 3px solid var(--color-border); }
.preview-cd005 .z-def p { font-size: 14px; line-height: 1.7; }
.preview-cd005 pre { background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; }
.preview-cd005 pre code { background: none; border: none; padding: 0; font-size: inherit; }
.preview-cd005 .kw { color: var(--syntax-keyword); }
.preview-cd005 .st { color: var(--syntax-string); }
.preview-cd005 .cm { color: var(--syntax-comment); }
.preview-cd005 .fn { color: var(--syntax-function); }
.preview-cd005 .nu { color: var(--syntax-number); }
.preview-cd005 .core-abstraction { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd005 .core-abstraction__principle { background: var(--color-zone-sparse); padding: var(--space-8); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .core-abstraction__principle-label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-purple); margin-bottom: var(--space-3); }
.preview-cd005 .core-abstraction__principle-text { font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); line-height: 1.4; }
.preview-cd005 .core-abstraction__code { background: var(--color-text); color: var(--color-background); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; }
.preview-cd005 .reasoning { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd005 .reasoning__header { background: var(--color-zone-sparse); padding: var(--space-6) var(--space-8); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .reasoning__header-label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-2); }
.preview-cd005 .reasoning__header-title { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; }
.preview-cd005 .reasoning__columns { display: grid; grid-template-columns: 1fr 1fr; }
.preview-cd005 .reasoning__column { padding: var(--space-6) var(--space-8); }
.preview-cd005 .reasoning__column:first-child { border-right: 1px solid var(--color-border); }
.preview-cd005 .reasoning__column-title { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-4); }
.preview-cd005 .reasoning__column ul { list-style: none; }
.preview-cd005 .reasoning__column li { font-size: var(--type-body); line-height: 1.7; padding: var(--space-2) 0; border-bottom: 1px solid var(--color-border-subtle); }
.preview-cd005 .reasoning__column li:last-child { border-bottom: none; }
.preview-cd005 .reasoning__summary { background: var(--color-zone-breathing); padding: var(--space-6) var(--space-8); border-top: 3px solid var(--color-border); }
.preview-cd005 .reasoning__summary-label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-green); margin-bottom: var(--space-2); }
.preview-cd005 .bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-8); }
.preview-cd005 .bento-item { background: var(--color-zone-dense); border: 3px solid var(--color-border); padding: var(--space-6); }
.preview-cd005 .bento-item--wide { grid-column: span 2; }
.preview-cd005 .decision-matrix { border: 3px solid var(--color-border); margin: var(--space-4) 0; overflow-x: auto; }
.preview-cd005 .decision-matrix__header { background: var(--color-zone-sparse); padding: var(--space-4) var(--space-6); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .decision-matrix__header-label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-1); }
.preview-cd005 .decision-matrix__header-title { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; }
.preview-cd005 .decision-matrix table { width: 100%; border-collapse: collapse; }
.preview-cd005 .decision-matrix th { background: var(--color-zone-sparse); font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.05em; padding: var(--space-4) var(--space-6); text-align: left; border-bottom: 3px solid var(--color-border); }
.preview-cd005 .decision-matrix td { font-family: var(--font-body); font-size: var(--type-body); padding: var(--space-4) var(--space-6); border-bottom: 1px solid var(--color-border); vertical-align: top; }
.preview-cd005 .decision-matrix .row-highlight { background: var(--color-zone-breathing); }
.preview-cd005 .decision-matrix .cell-best { color: var(--accent-green); font-weight: 600; }
.preview-cd005 .decision-matrix .cell-ok { color: var(--color-text-secondary); }
.preview-cd005 .decision-matrix .cell-weak { color: var(--accent-coral); }
.preview-cd005 .task-component { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd005 .task-component__header { background: var(--color-zone-sparse); padding: var(--space-4) var(--space-6); border-bottom: 3px solid var(--color-border); }
.preview-cd005 .task-component__header-label { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); }
.preview-cd005 .task-component__list { list-style: none; padding: var(--space-4) var(--space-6); }
.preview-cd005 .task-component__item { font-size: var(--type-body); line-height: 1.7; padding: var(--space-2) 0; padding-left: var(--space-6); position: relative; border-bottom: 1px solid var(--color-border-subtle); }
.preview-cd005 .task-component__item:last-child { border-bottom: none; }
.preview-cd005 .task-component__item::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 14px; height: 14px; border: 1px solid var(--color-border); background: var(--color-zone-dense); }
.preview-cd005 table { width: 100%; border-collapse: collapse; }
.preview-cd005 th { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; text-align: left; padding: var(--space-3) var(--space-4); border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary); }
.preview-cd005 td { font-family: var(--font-body); font-size: var(--type-body); padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--color-border-subtle); vertical-align: top; }
.preview-cd005 .page-header { background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary); padding: var(--space-8) var(--space-6); }
.preview-cd005 .subtitle { font-family: var(--font-body); font-weight: 400; font-size: var(--type-body); color: var(--color-text-secondary); line-height: 1.7; margin-top: var(--space-4); }
.preview-cd005 .f-heading { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; padding-left: var(--space-6); border-left: 4px solid var(--color-primary); margin-bottom: var(--space-4); }
`;

// ═══ PREVIEW SNIPPETS for CD-005 ═══
const previewsCd005 = {
  'Header Meta Line': `<div style="background: var(--color-text); padding: 20px;">
  <div class="meta-line">
    <span>EXPLORATION CD-005</span>
    <span>COMBINATION: MULTI-AXIS TRANSITION</span>
    <span class="version-badge">v1</span>
  </div>
  <div class="header-title">Testing Strategy</div>
</div>`,

  'Section Heading with Structural Border': `<div style="padding: 8px;">
  <div class="section-heading">Testing Overview: Z-Pattern Section</div>
  <div style="font-size: 13px; color: var(--color-text-secondary); margin-top: 8px;">3px solid border-bottom creates structural separation between major page sections</div>
</div>`,

  'Smooth Transition Divider': `<div class="transition--smooth">
  <hr class="transition--smooth__line">
  <div class="transition--smooth__heading">Deep Dive: F-Pattern Section</div>
</div>`,

  'Bridge Transition Zone': `<div class="transition--bridge">
  <div class="callout callout--essence" style="max-width: 70ch; margin: 0 auto;">
    <div class="callout__label">Essence</div>
    <div class="callout__body">Testing reveals architecture. The boundaries between overview, deep content, and reference are the boundaries between understanding, mastery, and daily use.</div>
  </div>
</div>`,

  'Bento Item Labels': `<div style="background: var(--color-zone-dense); border: 3px solid var(--color-border); padding: var(--space-6);">
  <div class="bento-item__label">REFERENCE CARD</div>
  <div class="bento-item__title">Test Coverage Metrics</div>
  <div style="font-size: 14px; color: var(--color-text-secondary); line-height: 1.7;">Uppercase monospace label orients the reader to the bento cell's role within the grid.</div>
</div>`,

  'File Tree Label': `<div class="file-tree">
  <span class="file-tree__label">PROJECT STRUCTURE</span>
  <div><span class="file-tree__dir">src/</span></div>
  <div class="file-tree__item--l1"><span class="file-tree__dir">tests/</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">unit.test.ts</span> <span class="file-tree__comment">-- fast, isolated</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">integration.test.ts</span></div>
  <div class="file-tree__item--l1"><span class="file-tree__dir">e2e/</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">smoke.test.ts</span> <span class="file-tree__comment">-- slow, comprehensive</span></div>
</div>`,

  'Footer Identity Bar': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-005 · Multi-Axis Transition</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:WAVE · OD:SPATIAL · AD:Z+F+BENTO</span>
  </div>
</div>`,

  'Z-Sweep Diagonal Alternation': `<div style="padding: 8px;">
  <div class="z-sweep" style="margin-bottom: 12px;">
    <div class="z-term"><div class="z-term__label">CONCEPT</div><div class="z-term__text">Unit Testing</div></div>
    <div class="z-def"><p>Tests individual functions in isolation. Fast feedback, narrow scope.</p></div>
  </div>
  <div class="z-sweep z-sweep--reverse">
    <div class="z-term"><div class="z-term__label">CONCEPT</div><div class="z-term__text">Integration</div></div>
    <div class="z-def"><p>Tests interactions between modules. Catches boundary errors.</p></div>
  </div>
</div>`,

  'Z-Term vs. Z-Def Density Split': `<div style="padding: 8px;">
  <div class="z-sweep">
    <div class="z-term"><div class="z-term__label">DENSE: 1fr</div><div class="z-term__text">Compact term</div></div>
    <div class="z-def"><p><span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary);">SPARSE: 1.618fr (golden ratio)</span></p><p>Expanded definition with room for prose. Width ratio creates density split.</p></div>
  </div>
</div>`,

  'F-Pattern Left-Anchor Spine': `<div style="padding: 8px;">
  <div class="f-heading">First F-Heading: Left-Anchored</div>
  <div style="padding-left: var(--space-6); margin-bottom: var(--space-6); font-size: 14px; line-height: 1.7; color: var(--color-text-secondary);">Content indented to match the 4px red left border. Eye follows the left spine.</div>
  <div class="f-heading">Second F-Heading: Progressive Disclosure</div>
  <div style="padding-left: var(--space-6); font-size: 14px; line-height: 1.7; color: var(--color-text-secondary);">Each heading anchors a new horizontal scan line. Content grows deeper.</div>
</div>`,

  'Callout Accent Color Encoding': `<div style="padding: 8px;">
  <div class="callout callout--note" style="margin-bottom: 8px;"><div class="callout__label">Note</div><div class="callout__body">Blue = informational</div></div>
  <div class="callout callout--tip" style="margin-bottom: 8px;"><div class="callout__label">Tip</div><div class="callout__body">Green = practical</div></div>
  <div class="callout callout--gotcha" style="margin-bottom: 8px;"><div class="callout__label">Gotcha</div><div class="callout__body">Coral = pitfall</div></div>
  <div class="callout callout--essence" style="margin-bottom: 8px;"><div class="callout__label">Essence</div><div class="callout__body">Purple = philosophical</div></div>
  <div class="callout callout--challenge"><div class="callout__label">Challenge</div><div class="callout__body">Amber = engagement</div></div>
</div>`,

  'Essence Callout Serif Shift': `<div style="padding: 8px;">
  <div style="font-family: var(--font-body); margin-bottom: 12px; padding: 8px; background: var(--color-zone-dense); font-size: 14px;">
    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 4px;">STANDARD — Inter sans-serif</div>
    Analytical body text in the default register.
  </div>
  <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">Serif italic signals a different voice — contemplative, not instructional.</div></div>
</div>`,

  'WAVE Density Oscillation': `<div style="padding: 8px;">
  <div style="background: var(--color-zone-sparse); padding: 12px; margin-bottom: 4px; font-size: 13px;"><strong>Z-SECTION: MEDIUM density</strong> — balanced, definition pairs</div>
  <div style="background: var(--color-zone-dense); padding: 8px; margin-bottom: 4px; font-size: 13px; border-left: 4px solid var(--color-primary);"><strong>F-SECTION: HIGH density</strong> — compressed, progressive disclosure</div>
  <div style="background: var(--color-zone-breathing); padding: 16px; font-size: 13px;"><strong>BENTO SECTION: MEDIUM-HIGH</strong> — grid islands, reference cards</div>
</div>`,

  'Velocity Interleaving': `<div style="padding: 8px; font-size: 13px;">
  <div style="background: var(--color-zone-dense); padding: 8px; margin-bottom: 4px; border-left: 3px solid var(--color-border);"><strong>SLOW</strong> — Reasoning (heavy)</div>
  <div style="padding: 6px 8px; margin-bottom: 4px;"><strong>FAST</strong> — Body paragraph (light)</div>
  <div style="background: var(--color-text); color: var(--color-background); padding: 8px; margin-bottom: 4px;"><strong>MEDIUM</strong> — Code snippet</div>
  <div style="border-left: 4px solid var(--accent-green); padding: 6px 12px;"><strong>FAST</strong> — Tip callout</div>
</div>`,

  'Decision Matrix Semantic Color Encoding': `<div class="decision-matrix">
  <div class="decision-matrix__header"><div class="decision-matrix__header-label">DECISION MATRIX</div><div class="decision-matrix__header-title">Testing Strategy</div></div>
  <table><thead><tr><th>Strategy</th><th>Speed</th><th>Coverage</th></tr></thead>
  <tbody>
    <tr class="row-highlight"><td><strong>Unit</strong></td><td class="cell-best">Fast</td><td class="cell-ok">Narrow</td></tr>
    <tr><td><strong>Integration</strong></td><td class="cell-ok">Medium</td><td class="cell-best">Wide</td></tr>
    <tr><td><strong>E2E</strong></td><td class="cell-weak">Slow</td><td class="cell-best">Full</td></tr>
  </tbody></table>
</div>`,

  'Z-Sweep Definition Pair': `<div class="z-sweep">
  <div class="z-term"><div class="z-term__label">CONCEPT</div><div class="z-term__text">Test Isolation</div></div>
  <div class="z-def"><p>Each test runs independently with no shared state. Mock external dependencies.</p></div>
</div>`,

  'Callout (5 variants)': `<div style="padding: 8px;">
  <div class="callout callout--note" style="margin-bottom: 8px;"><div class="callout__label">Note</div><div class="callout__body">Blue informational callout.</div></div>
  <div class="callout callout--tip" style="margin-bottom: 8px;"><div class="callout__label">Tip</div><div class="callout__body">Green practical tip.</div></div>
  <div class="callout callout--gotcha" style="margin-bottom: 8px;"><div class="callout__label">Gotcha</div><div class="callout__body">Coral common pitfall.</div></div>
  <div class="callout callout--essence" style="margin-bottom: 8px;"><div class="callout__label">Essence</div><div class="callout__body">Purple philosophical reflection.</div></div>
  <div class="callout callout--challenge"><div class="callout__label">Challenge</div><div class="callout__body">Amber engagement challenge.</div></div>
</div>`,

  'Code Snippet': `<pre><code><span class="cm">// Unit test example</span>
<span class="kw">describe</span>(<span class="st">'calculateTotal'</span>, () => {
  <span class="kw">it</span>(<span class="st">'sums line items'</span>, () => {
    <span class="kw">const</span> result = <span class="fn">calculateTotal</span>([<span class="nu">10</span>, <span class="nu">20</span>]);
    <span class="fn">expect</span>(result).<span class="fn">toBe</span>(<span class="nu">30</span>);
  });
});</code></pre>`,

  'Core Abstraction': `<div class="core-abstraction">
  <div class="core-abstraction__principle"><div class="core-abstraction__principle-label">Core Principle</div><div class="core-abstraction__principle-text">Tests are specifications. A passing suite is a living document.</div></div>
  <div class="core-abstraction__code"><code><span class="cm">// The test IS the spec</span>
<span class="kw">it</span>(<span class="st">'rejects negative quantities'</span>, () => {
  <span class="fn">expect</span>(() => <span class="fn">addToCart</span>(-<span class="nu">1</span>)).<span class="fn">toThrow</span>();
});</code></div>
</div>`,

  'Reasoning Panel': `<div class="reasoning">
  <div class="reasoning__header"><div class="reasoning__header-label">DELIBERATION</div><div class="reasoning__header-title">Mock or Real Dependencies?</div></div>
  <div class="reasoning__columns">
    <div class="reasoning__column"><div class="reasoning__column-title">FOR MOCKS</div><ul><li>Tests run faster</li><li>No external deps</li><li>Deterministic</li></ul></div>
    <div class="reasoning__column"><div class="reasoning__column-title">FOR REAL</div><ul><li>Catches integration bugs</li><li>Tests real behavior</li><li>Less maintenance</li></ul></div>
  </div>
  <div class="reasoning__summary"><div class="reasoning__summary-label">RECOMMENDATION</div><div style="font-size: 14px; line-height: 1.7;">Use mocks for unit tests, real for integration. The testing pyramid is a budget allocation.</div></div>
</div>`,

  'Bento Grid': `<div class="bento-grid">
  <div class="bento-item bento-item--wide"><div class="bento-item__label">REFERENCE</div><div class="bento-item__title">Coverage Thresholds</div><div style="font-size: 14px;">80% coverage is a floor, not a ceiling.</div></div>
  <div class="bento-item"><div class="bento-item__label">QUICK REF</div><div class="bento-item__title">Unit Test Patterns</div></div>
  <div class="bento-item"><div class="bento-item__label">QUICK REF</div><div class="bento-item__title">E2E Best Practices</div></div>
</div>`,

  'File Tree': `<div class="file-tree">
  <span class="file-tree__label">TEST STRUCTURE</span>
  <div><span class="file-tree__dir">tests/</span></div>
  <div class="file-tree__item--l1"><span class="file-tree__dir">unit/</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">calculator.test.ts</span></div>
  <div class="file-tree__item--l1"><span class="file-tree__dir">integration/</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">api.test.ts</span></div>
  <div class="file-tree__item--l1"><span class="file-tree__dir">e2e/</span></div>
  <div class="file-tree__item--l2"><span class="file-tree__file">checkout.test.ts</span></div>
</div>`,

  'Decision Matrix': `<div class="decision-matrix">
  <div class="decision-matrix__header"><div class="decision-matrix__header-label">DECISION MATRIX</div><div class="decision-matrix__header-title">Test Type Selection</div></div>
  <table><thead><tr><th>Type</th><th>Speed</th><th>Confidence</th><th>Cost</th></tr></thead>
  <tbody>
    <tr class="row-highlight"><td><strong>Unit</strong></td><td class="cell-best">ms</td><td class="cell-ok">Function</td><td class="cell-best">Low</td></tr>
    <tr><td><strong>Integration</strong></td><td class="cell-ok">seconds</td><td class="cell-best">Module</td><td class="cell-ok">Medium</td></tr>
    <tr><td><strong>E2E</strong></td><td class="cell-weak">minutes</td><td class="cell-best">System</td><td class="cell-weak">High</td></tr>
  </tbody></table>
</div>`,

  'Task Component': `<div class="task-component">
  <div class="task-component__header"><div class="task-component__header-label">ACTION ITEMS</div></div>
  <ul class="task-component__list">
    <li class="task-component__item">Write unit tests for all pure functions</li>
    <li class="task-component__item">Set up integration test database fixture</li>
    <li class="task-component__item">Configure CI pipeline for E2E tests</li>
  </ul>
</div>`,

  'Task Item Checkbox Pseudo-Element': `<div class="task-component">
  <div class="task-component__header"><div class="task-component__header-label">CHECKBOX DETAIL</div></div>
  <ul class="task-component__list">
    <li class="task-component__item">14x14px checkbox via ::before pseudo-element</li>
    <li class="task-component__item">1px border, white fill, vertically centered</li>
  </ul>
</div>`,

  'Table (Base)': `<table style="border: 3px solid var(--color-border);">
  <thead><tr><th>Property</th><th>Unit Test</th><th>Integration</th><th>E2E</th></tr></thead>
  <tbody>
    <tr><td>Speed</td><td>~1ms</td><td>~100ms</td><td>~10s</td></tr>
    <tr><td>Scope</td><td>Function</td><td>Module</td><td>System</td></tr>
    <tr><td>Isolation</td><td>Full</td><td>Partial</td><td>None</td></tr>
  </tbody>
</table>`,

  'Header': `<div class="page-header">
  <div class="meta-line"><span>EXPLORATION CD-005</span><span>COMBINATION: MULTI-AXIS TRANSITION</span><span class="version-badge">v1</span></div>
  <div class="header-title">Testing Strategy</div>
  <div class="subtitle">From Unit Tests to End-to-End Validation — three axis patterns with transition grammar.</div>
</div>`,
};


// ═══ SCOPED CSS for CD-006 ═══
const cssCd006 = `
.preview-cd006 {
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --type-page: 3rem;
  --type-section: 1.625rem;
  --type-subsection: 1.375rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;
  --border-radius: 0;
  --box-shadow: none;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --syntax-keyword: #E83025;
  --syntax-string: #6B9B7A;
  --syntax-comment: #666666;
  --syntax-function: #4A7C9B;
  --syntax-type: #C97065;
  --syntax-number: #D97706;
  --syntax-punctuation: #E0D5C5;
  --transition-standard: 0.3s ease;
  --axis-zone-primary: var(--color-zone-dense);
  --axis-zone-secondary: var(--color-zone-sparse);
  --axis-zone-focal: var(--color-background);
  --axis-zone-transition: var(--color-zone-breathing);
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd006 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd006 h2, .preview-cd006 h3, .preview-cd006 h4 { all: unset; display: block; }

.preview-cd006 .header-meta { font-family: var(--font-body); font-weight: 500; font-size: var(--type-meta); letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-2); display: flex; align-items: center; gap: var(--space-4); flex-wrap: wrap; }
.preview-cd006 .version-badge { font-family: var(--font-mono); font-size: 0.625rem; padding: 2px 8px; border: 1px solid currentColor; letter-spacing: 0.1em; }
.preview-cd006 .header-title { font-family: var(--font-display); font-size: 1.75rem; color: var(--color-background); margin-bottom: var(--space-4); line-height: 1.15; }
.preview-cd006 .header-subtitle { font-family: var(--font-body); font-weight: 400; font-size: var(--type-body); color: var(--color-text-secondary); line-height: 1.6; }
.preview-cd006 .toc { background: var(--color-zone-breathing); border: 3px solid var(--color-border); padding: var(--space-8); }
.preview-cd006 .toc h2 { font-family: var(--font-display); font-size: var(--type-subsection); margin-bottom: var(--space-4); }
.preview-cd006 .toc-list { list-style: none; display: flex; flex-direction: column; gap: var(--space-2); }
.preview-cd006 .toc-list li a { color: var(--color-text); text-decoration: none; display: flex; align-items: baseline; gap: var(--space-2); padding: var(--space-1) 0; }
.preview-cd006 .toc-number { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); min-width: 24px; }
.preview-cd006 .toc-density { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); margin-left: auto; }
.preview-cd006 .section-meta { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.preview-cd006 .drop-cap::first-letter { font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; margin-right: var(--space-2); margin-top: 4px; color: var(--color-primary); }
.preview-cd006 .callout { border-left: var(--border-left-width) solid; padding: var(--space-6) var(--space-8); margin: var(--space-4) 0; position: relative; }
.preview-cd006 .callout-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.preview-cd006 .callout-body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.preview-cd006 .callout-body p:last-child { margin-bottom: 0; }
.preview-cd006 .callout--info { border-left-color: var(--accent-blue); background: #F5F9FE; }
.preview-cd006 .callout--info .callout-label { color: var(--accent-blue); }
.preview-cd006 .callout--tip { border-left-color: var(--accent-green); background: #F2F9F4; }
.preview-cd006 .callout--tip .callout-label { color: var(--accent-green); }
.preview-cd006 .callout--gotcha { border-left-color: var(--accent-coral); background: #FEF6F5; }
.preview-cd006 .callout--gotcha .callout-label { color: var(--accent-coral); }
.preview-cd006 .callout--essence { border-left-color: var(--accent-purple); background: var(--color-zone-breathing); }
.preview-cd006 .callout--essence .callout-label { color: var(--accent-purple); }
.preview-cd006 .callout--essence .callout-body { font-family: var(--font-display); font-style: italic; font-size: 1.125rem; line-height: 1.6; }
.preview-cd006 .callout--challenge { border-left-color: var(--accent-amber); background: #FFFBF2; }
.preview-cd006 .callout--challenge .callout-label { color: var(--accent-amber); }
.preview-cd006 .code-block { background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; margin: var(--space-4) 0; position: relative; }
.preview-cd006 .code-block code { font-family: inherit; font-size: inherit; }
.preview-cd006 .code-label { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.05em; margin-bottom: var(--space-2); display: block; }
.preview-cd006 .kw { color: var(--syntax-keyword); }
.preview-cd006 .str { color: var(--syntax-string); }
.preview-cd006 .cmt { color: var(--syntax-comment); }
.preview-cd006 .fn { color: var(--syntax-function); }
.preview-cd006 .typ { color: var(--syntax-type); }
.preview-cd006 .num { color: var(--syntax-number); }
.preview-cd006 .file-tree { background: var(--color-zone-breathing); border: 3px solid var(--color-border); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.8; margin: var(--space-4) 0; }
.preview-cd006 .file-tree-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: var(--space-4); }
.preview-cd006 .file-tree-item--l1 { padding-left: var(--space-4); }
.preview-cd006 .file-tree-item--l2 { padding-left: var(--space-8); }
.preview-cd006 .file-tree-icon { color: var(--color-text-secondary); margin-right: var(--space-2); }
.preview-cd006 .decision-matrix { border: 3px solid var(--color-border); margin: var(--space-4) 0; overflow-x: auto; }
.preview-cd006 .decision-matrix-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); padding: var(--space-4) var(--space-6); background: var(--color-zone-breathing); border-bottom: 1px solid var(--color-border); }
.preview-cd006 .decision-matrix table { width: 100%; border-collapse: collapse; }
.preview-cd006 .decision-matrix th { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.05em; padding: var(--space-4) var(--space-6); text-align: left; background: var(--color-zone-breathing); border-bottom: 3px solid var(--color-border); }
.preview-cd006 .decision-matrix td { font-family: var(--font-body); font-size: var(--type-body); padding: var(--space-4) var(--space-6); border-bottom: 1px solid var(--color-border); vertical-align: top; }
.preview-cd006 .decision-matrix .recommended { background: #F2F9F4; font-weight: 600; }
.preview-cd006 .core-abstraction { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd006 .core-abstraction-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-purple); padding: var(--space-4) var(--space-6); background: #F8F5FE; border-bottom: 1px solid var(--color-border); }
.preview-cd006 .core-abstraction-principle { font-family: var(--font-display); font-style: italic; font-size: 1.25rem; line-height: 1.5; padding: var(--space-6) var(--space-8); border-bottom: 1px solid var(--color-border); }
.preview-cd006 .core-abstraction-proof { background: var(--color-text); color: var(--color-background); padding: var(--space-6) var(--space-8); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; }
.preview-cd006 .task-component { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd006 .task-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); padding: var(--space-4) var(--space-6); background: var(--color-zone-breathing); border-bottom: 1px solid var(--color-border); }
.preview-cd006 .task-list { list-style: none; padding: var(--space-4) var(--space-6); }
.preview-cd006 .task-list li { padding: var(--space-2) 0; font-size: var(--type-body); line-height: 1.6; display: flex; align-items: flex-start; gap: var(--space-2); }
.preview-cd006 .task-checkbox { display: inline-block; width: 16px; height: 16px; border: 1px solid var(--color-border); background: var(--color-background); flex-shrink: 0; margin-top: 4px; }
.preview-cd006 .reasoning { border: 3px solid var(--color-border); margin: var(--space-4) 0; }
.preview-cd006 .reasoning-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); padding: var(--space-4) var(--space-6); background: var(--color-zone-breathing); border-bottom: 1px solid var(--color-border); }
.preview-cd006 .reasoning-question { font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); padding: var(--space-6) var(--space-8); border-bottom: 1px solid var(--color-border); }
.preview-cd006 .reasoning-columns { display: grid; grid-template-columns: 1fr 1fr; }
.preview-cd006 .reasoning-column { padding: var(--space-6) var(--space-8); }
.preview-cd006 .reasoning-column:first-child { border-right: 1px solid var(--color-border); }
.preview-cd006 .reasoning-column h4 { font-family: var(--font-body); font-weight: 600; font-size: var(--type-body); margin-bottom: var(--space-4); color: var(--accent-blue); }
.preview-cd006 .reasoning-column ul { list-style: none; display: flex; flex-direction: column; gap: var(--space-2); }
.preview-cd006 .reasoning-column li { font-size: var(--type-body); line-height: 1.6; padding-left: var(--space-4); position: relative; }
.preview-cd006 .reasoning-column li::before { content: "--"; position: absolute; left: 0; color: var(--color-text-secondary); }
.preview-cd006 .reasoning-recommendation { padding: var(--space-6) var(--space-8); background: #F2F9F4; border-top: 3px solid var(--accent-green); }
.preview-cd006 .reasoning-recommendation strong { color: var(--accent-green); }
.preview-cd006 .qa-question { font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); color: var(--color-primary); margin-bottom: var(--space-4); padding-left: var(--space-4); border-left: 4px solid var(--color-primary); }
.preview-cd006 .qa-answer { padding-left: var(--space-8); font-size: 14px; line-height: 1.7; }
.preview-cd006 .stratum { padding: var(--space-6) var(--space-8); position: relative; }
.preview-cd006 .stratum--established { border-left: 4px solid var(--color-text); }
.preview-cd006 .stratum--probable { border-left: 3px solid var(--color-text-secondary); }
.preview-cd006 .stratum--speculative { border-left: 1px solid var(--color-border); }
.preview-cd006 .stratum-label { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2); }
.preview-cd006 .z-hero { display: grid; grid-template-columns: 1.618fr 1fr; gap: var(--space-8); }
.preview-cd006 .z-terminal { background: var(--color-text); color: var(--color-background); padding: var(--space-6); }
.preview-cd006 .bento-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.preview-cd006 .bento-item { background: var(--axis-zone-primary); border: 3px solid var(--color-border); padding: var(--space-6); }
.preview-cd006 .bento-item--wide { grid-column: span 2; }
.preview-cd006 .bento-item h3 { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: var(--space-4); }
.preview-cd006 .choreo-hub { text-align: center; padding: var(--space-8); background: var(--axis-zone-focal); border: 3px solid var(--color-border); margin-bottom: var(--space-4); }
.preview-cd006 .choreo-spokes { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.preview-cd006 .choreo-spoke { background: var(--axis-zone-primary); border: 3px solid var(--color-border); padding: var(--space-6); }
.preview-cd006 .choreo-spoke h4 { font-family: var(--font-body); font-weight: 600; font-size: var(--type-body); margin-bottom: var(--space-4); }
.preview-cd006 .f-movement { margin-bottom: var(--space-8); }
.preview-cd006 .f-movement h3 { font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: var(--space-4); border-left: 4px solid var(--color-primary); padding-left: var(--space-6); }
.preview-cd006 .inline-code { font-family: var(--font-mono); font-size: 0.9em; background: var(--color-border-subtle); padding: 2px 6px; border: 1px solid var(--color-border); }
.preview-cd006 .page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); padding: var(--space-4) var(--space-6); }
.preview-cd006 .page-footer__inner { display: flex; justify-content: space-between; align-items: center; }
.preview-cd006 .page-footer__id { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); letter-spacing: 0.1em; text-transform: uppercase; }
.preview-cd006 .page-footer__rule { width: 48px; height: 3px; background: var(--color-primary); }
.preview-cd006 .transition--smooth { margin: var(--space-8) 0; border-top: 1px solid var(--color-border); padding-top: var(--space-8); }
.preview-cd006 .transition--bridge { margin: var(--space-12) 0; background: var(--color-zone-breathing); padding: var(--space-8); border-top: 3px solid var(--color-border); border-bottom: 3px solid var(--color-border); }
.preview-cd006 .transition--breathing { margin: var(--space-16) 0; border-top: 3px solid var(--color-border); padding-top: var(--space-16); }
`;

// ═══ PREVIEW SNIPPETS for CD-006 ═══
const previewsCd006 = {
  'Header Meta Bar': `<div style="background: var(--color-text); padding: 20px;">
  <div class="header-meta"><span>EXPLORATION CD-006</span><span>COMBINATION: PILOT MIGRATION</span><span class="version-badge">v1</span></div>
  <div class="header-title">Building Your First KortAI Documentation Page</div>
</div>`,

  'Table of Contents with Density Annotations': `<div class="toc">
  <h2>In This Guide</h2>
  <ol class="toc-list">
    <li><a href="#"><span class="toc-number">01</span><span>Understanding the System</span><span class="toc-density">MEDIUM</span></a></li>
    <li><a href="#"><span class="toc-number">02</span><span>Core Components</span><span class="toc-density">HIGH</span></a></li>
    <li><a href="#"><span class="toc-number">03</span><span>Axis Patterns</span><span class="toc-density">MEDIUM-HIGH</span></a></li>
    <li><a href="#"><span class="toc-number">04</span><span>Putting It Together</span><span class="toc-density">HIGH</span></a></li>
  </ol>
</div>`,

  'Section Meta Label': `<div style="padding: 8px;">
  <div class="section-meta">SECTION 01 · Z-PATTERN · MEDIUM DENSITY</div>
  <div style="font-family: var(--font-display); font-size: var(--type-section); margin-top: 4px;">Understanding the System</div>
</div>`,

  'Stratum Label': `<div style="padding: 8px;">
  <div class="stratum stratum--established" style="margin-bottom: 8px;">
    <div class="stratum-label">ESTABLISHED · DEPTH 1</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1.15rem; margin-top: 4px;">Soul Constraints</div>
    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 4px;">border-radius: 0, box-shadow: none</div>
  </div>
  <div class="stratum stratum--probable" style="margin-bottom: 8px;">
    <div class="stratum-label">PROBABLE · DEPTH 2</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1.1rem; margin-top: 4px;">Component Patterns</div>
  </div>
  <div class="stratum stratum--speculative">
    <div class="stratum-label">SPECULATIVE · DEPTH 3</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1.05rem; margin-top: 4px;">Emerging Approaches</div>
  </div>
</div>`,

  'Code Label': `<div class="code-block">
  <span class="code-label">HTML — CALLOUT STRUCTURE</span>
  <code>&lt;div class="callout callout--info"&gt;
  &lt;div class="callout-label"&gt;Context&lt;/div&gt;
  &lt;div class="callout-body"&gt;...&lt;/div&gt;
&lt;/div&gt;</code>
</div>`,

  'Decision Matrix Label': `<div class="decision-matrix">
  <div class="decision-matrix-label">COMPONENT SELECTION GUIDE</div>
  <table><thead><tr><th>Component</th><th>Weight</th><th>Use When</th></tr></thead>
  <tbody>
    <tr class="recommended"><td><strong>Callout</strong></td><td>Light</td><td>Supplementary context</td></tr>
    <tr><td>Code Block</td><td>Medium</td><td>Technical examples</td></tr>
    <tr><td>Reasoning</td><td>Heavy</td><td>Complex decisions</td></tr>
  </tbody></table>
</div>`,

  'Task Component Label': `<div class="task-component">
  <div class="task-label">NEXT STEPS</div>
  <ul class="task-list">
    <li><span class="task-checkbox"></span> Set up your project structure</li>
    <li><span class="task-checkbox"></span> Configure the token system</li>
    <li><span class="task-checkbox"></span> Build your first page</li>
  </ul>
</div>`,

  'Footer Identity Bar': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-006 · Pilot Migration</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:FRACTAL · OD:ALL · AD:ALL 5 AXES</span>
  </div>
</div>`,

  'Drop Cap': `<div style="padding: 8px;">
  <p class="drop-cap" style="font-size: var(--type-body); line-height: 1.7; max-width: 60ch;">Every page begins with a single decision: what is this page about, and who is it for? The drop cap — a 3.5em Instrument Serif first letter in primary red — signals that a new section is beginning with authority.</p>
</div>`,

  'Border-Weight Confidence Encoding': `<div style="padding: 8px;">
  <div class="stratum stratum--established" style="margin-bottom: 8px;">
    <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">ESTABLISHED — 4px solid #1A1A1A</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Thickest, darkest border = highest confidence</div>
  </div>
  <div class="stratum stratum--probable" style="margin-bottom: 8px;">
    <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">PROBABLE — 3px solid #666666</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Medium border = moderate confidence</div>
  </div>
  <div class="stratum stratum--speculative">
    <div style="font-weight: 600; font-size: 13px; margin-bottom: 4px;">SPECULATIVE — 1px solid #E0D5C5</div>
    <div style="font-size: 13px; color: var(--color-text-secondary);">Lightest border = lowest confidence</div>
  </div>
</div>`,

  'Essence Callout Typography Shift': `<div style="padding: 8px;">
  <div style="font-family: var(--font-body); margin-bottom: 12px; padding: 8px; background: var(--color-zone-dense); font-size: 14px;">
    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 4px;">BODY — Inter sans-serif</div>
    Standard analytical content in the default register.
  </div>
  <div class="callout callout--essence"><div class="callout-label">Essence</div><div class="callout-body">The page is not a container for information. It is an experience the reader inhabits.</div></div>
</div>`,

  'Smooth Transition': `<div style="padding: 8px;">
  <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">Section A content ends here</div>
  <div class="transition--smooth">
    <div style="font-size: 13px; color: var(--color-text-secondary);">Section B begins — minimal 1px border + spacing preserves reading flow</div>
  </div>
</div>`,

  'Bridge Transition': `<div class="transition--bridge" style="margin: 8px 0;">
  <div style="text-align: center; font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection);">The overview is complete. Now we build.</div>
</div>`,

  'Breathing Transition': `<div style="padding: 8px;">
  <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 8px;">Section ends</div>
  <div class="transition--breathing">
    <div style="font-size: 13px; color: var(--color-text-secondary);">3px structural border + 64px gap = maximum cognitive reset between incompatible axis patterns</div>
  </div>
</div>`,

  'Q&A Question Register Shift': `<div style="padding: 8px;">
  <div class="qa-question">What makes a page feel like it belongs to this system?</div>
  <div class="qa-answer">Three things: the typography trinity (Instrument Serif for display, Inter for body, JetBrains Mono for code), the angular geometry (border-radius: 0 everywhere), and the warm palette anchored by #E83025 red.</div>
</div>`,

  'Callout Accent Color System': `<div style="padding: 8px;">
  <div class="callout callout--info" style="margin-bottom: 8px;"><div class="callout-label">Info</div><div class="callout-body">Blue = contextual information</div></div>
  <div class="callout callout--tip" style="margin-bottom: 8px;"><div class="callout-label">Tip</div><div class="callout-body">Green = practical advice</div></div>
  <div class="callout callout--gotcha" style="margin-bottom: 8px;"><div class="callout-label">Gotcha</div><div class="callout-body">Coral = common pitfall</div></div>
  <div class="callout callout--essence" style="margin-bottom: 8px;"><div class="callout-label">Essence</div><div class="callout-body">Purple = philosophical (serif italic)</div></div>
  <div class="callout callout--challenge"><div class="callout-label">Challenge</div><div class="callout-body">Amber = reader engagement</div></div>
</div>`,

  'Responsive Collapse at 768px': `<div style="padding: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.7;">
  <div style="font-weight: 600; color: var(--color-text); margin-bottom: 4px;">@media (max-width: 768px)</div>
  <div>Z-hero grid collapses to single column. Reasoning panels stack vertically. Bento items span full width. Footer becomes centered stack.</div>
</div>`,

  'Responsive Collapse at 960px': `<div style="padding: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.7;">
  <div style="font-weight: 600; color: var(--color-text); margin-bottom: 4px;">@media (max-width: 960px)</div>
  <div>Bento grid collapses from 4-column to single column. Choreography spokes stack vertically. Multi-column grids linearize.</div>
</div>`,

  'Responsive Typography Compression at 480px': `<div style="padding: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.7;">
  <div style="font-weight: 600; color: var(--color-text); margin-bottom: 4px;">@media (max-width: 480px)</div>
  <div>Title compresses from 3rem to 1.625rem. Section headings reduce. Code block padding and font-size shrink. Callout padding tightens.</div>
</div>`,

  'Z-Terminal Dark Zone': `<div style="padding: 8px;">
  <div class="z-hero" style="grid-template-columns: 1fr 1fr;">
    <div style="padding: var(--space-6); border: 3px solid var(--color-border); background: var(--color-zone-sparse);">
      <div style="font-size: 13px; color: var(--color-text-secondary);">Z-Primary (light)</div>
    </div>
    <div class="z-terminal">
      <div style="font-size: 13px;">Z-Terminal — dark background inverts the reading register at the grid's terminal position</div>
    </div>
  </div>
</div>`,

  'Recommended Row Highlight': `<div class="decision-matrix">
  <div class="decision-matrix-label">FRAMEWORK COMPARISON</div>
  <table><thead><tr><th>Framework</th><th>Speed</th><th>Ecosystem</th></tr></thead>
  <tbody>
    <tr><td>Option A</td><td>Fast</td><td>Growing</td></tr>
    <tr class="recommended"><td><strong>Option B (Recommended)</strong></td><td>Fast</td><td>Mature</td></tr>
    <tr><td>Option C</td><td>Medium</td><td>Niche</td></tr>
  </tbody></table>
</div>`,

  'Header': `<div style="background: var(--color-text); padding: 20px; border-bottom: 3px solid var(--color-primary);">
  <div class="header-meta"><span>EXPLORATION CD-006</span><span>PILOT MIGRATION</span><span class="version-badge">v1</span></div>
  <div class="header-title">Building Your First KortAI Documentation Page</div>
  <div class="header-subtitle">A complete guide to the design system's vocabulary, grammar, and compositional patterns.</div>
</div>`,

  'Callout (5 variants)': `<div style="padding: 8px;">
  <div class="callout callout--info" style="margin-bottom: 8px;"><div class="callout-label">Info</div><div class="callout-body">Contextual information callout.</div></div>
  <div class="callout callout--tip" style="margin-bottom: 8px;"><div class="callout-label">Tip</div><div class="callout-body">Practical tip callout.</div></div>
  <div class="callout callout--gotcha" style="margin-bottom: 8px;"><div class="callout-label">Gotcha</div><div class="callout-body">Common pitfall callout.</div></div>
  <div class="callout callout--essence" style="margin-bottom: 8px;"><div class="callout-label">Essence</div><div class="callout-body">Philosophical reflection in serif italic.</div></div>
  <div class="callout callout--challenge"><div class="callout-label">Challenge</div><div class="callout-body">Reader engagement callout.</div></div>
</div>`,

  'Code Block': `<div class="code-block">
  <span class="code-label">CSS — TOKEN SYSTEM</span>
  <code><span class="cmt">/* Soul Piece #1: Angular geometry */</span>
<span class="kw">:root</span> {
  <span class="fn">--border-radius</span>: <span class="num">0</span>;
  <span class="fn">--color-primary</span>: <span class="str">#E83025</span>;
  <span class="fn">--font-display</span>: <span class="str">'Instrument Serif'</span>;
}</code>
</div>`,

  'File Tree': `<div class="file-tree">
  <div class="file-tree-label">PROJECT STRUCTURE</div>
  <div>design-system/</div>
  <div class="file-tree-item--l1"><span class="file-tree-icon">+</span>compositional-core/</div>
  <div class="file-tree-item--l2">identity.md</div>
  <div class="file-tree-item--l2">tokens.css</div>
  <div class="file-tree-item--l1"><span class="file-tree-icon">+</span>validated-explorations/</div>
  <div class="file-tree-item--l2">DD-001 through DD-006</div>
</div>`,

  'Decision Matrix': `<div class="decision-matrix">
  <div class="decision-matrix-label">AXIS PATTERN SELECTION</div>
  <table><thead><tr><th>Pattern</th><th>Best For</th><th>Density</th></tr></thead>
  <tbody>
    <tr class="recommended"><td><strong>Z-Pattern</strong></td><td>Overview / Hero</td><td>Medium</td></tr>
    <tr><td>F-Pattern</td><td>Deep content</td><td>High</td></tr>
    <tr><td>Bento Grid</td><td>Reference cards</td><td>Medium-High</td></tr>
  </tbody></table>
</div>`,

  'Core Abstraction': `<div class="core-abstraction">
  <div class="core-abstraction-label">CORE PRINCIPLE</div>
  <div class="core-abstraction-principle">The design system is not a set of rules. It is a vocabulary for visual thinking — a way of encoding meaning into layout, typography, and space.</div>
  <div class="core-abstraction-proof"><code><span class="cmt">/* The vocabulary in code */</span>
<span class="kw">border-radius</span>: <span class="num">0</span>;     <span class="cmt">/* angular = intentional */</span>
<span class="kw">box-shadow</span>: <span class="str">none</span>;    <span class="cmt">/* flat = honest */</span></code></div>
</div>`,

  'Task Component': `<div class="task-component">
  <div class="task-label">BUILD CHECKLIST</div>
  <ul class="task-list">
    <li><span class="task-checkbox"></span> Load identity.md + tokens.css</li>
    <li><span class="task-checkbox"></span> Choose axis pattern for each section</li>
    <li><span class="task-checkbox"></span> Verify soul constraints (0 violations)</li>
  </ul>
</div>`,

  'Reasoning Component': `<div class="reasoning">
  <div class="reasoning-label">DELIBERATION</div>
  <div class="reasoning-question">When should you use a Bento Grid vs. F-Pattern?</div>
  <div class="reasoning-columns">
    <div class="reasoning-column"><h4>Bento Grid</h4><ul><li>Reference material</li><li>Parallel concepts</li><li>Visual scanning</li></ul></div>
    <div class="reasoning-column"><h4>F-Pattern</h4><ul><li>Sequential learning</li><li>Progressive disclosure</li><li>Deep reading</li></ul></div>
  </div>
  <div class="reasoning-recommendation"><strong>Recommendation:</strong> Use Bento for reference sections the reader will return to. Use F-Pattern for content they read once, deeply.</div>
</div>`,

  'Q&A Block': `<div style="padding: 8px;">
  <div class="qa-question">How do I know which components to use?</div>
  <div class="qa-answer">Match component weight to content weight. Light content (tips, notes) gets light callouts. Heavy content (decisions, trade-offs) gets Reasoning panels. Code examples always get Code Blocks with syntax highlighting.</div>
</div>`,

  'Spiral Strata Container': `<div style="padding: 8px; display: flex; flex-direction: column; gap: var(--space-4);">
  <div class="stratum stratum--established">
    <div class="stratum-label">ESTABLISHED · DEPTH 1</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1.1rem;">Soul Constraints</div>
    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 4px;">border-radius: 0, box-shadow: none — non-negotiable</div>
  </div>
  <div class="stratum stratum--probable">
    <div class="stratum-label">PROBABLE · DEPTH 2</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1.05rem;">Component Vocabulary</div>
  </div>
  <div class="stratum stratum--speculative">
    <div class="stratum-label">SPECULATIVE · DEPTH 3</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 1rem;">Emerging Patterns</div>
  </div>
</div>`,

  'Z-Hero Grid': `<div class="z-hero" style="grid-template-columns: 1.618fr 1fr;">
  <div style="padding: var(--space-6); border: 3px solid var(--color-border); background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: 8px;">Primary Content Zone</div>
    <div style="font-size: 14px; color: var(--color-text-secondary);">Golden ratio 1.618fr — the dominant content area in Z-pattern layouts.</div>
  </div>
  <div style="padding: var(--space-6); border: 3px solid var(--color-border);">
    <div style="font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: 8px;">Secondary</div>
    <div style="font-size: 14px; color: var(--color-text-secondary);">1fr sidebar zone</div>
  </div>
</div>`,

  'Bento Grid': `<div class="bento-grid">
  <div class="bento-item bento-item--wide"><h3>Component Reference</h3><div style="font-size: 14px;">Wide item spanning 2 columns for primary reference content.</div></div>
  <div class="bento-item"><h3>Tokens</h3><div style="font-size: 14px; color: var(--color-text-secondary);">Quick reference card</div></div>
  <div class="bento-item"><h3>Patterns</h3><div style="font-size: 14px; color: var(--color-text-secondary);">Quick reference card</div></div>
</div>`,

  'Choreography Hub-Spoke': `<div>
  <div class="choreo-hub">
    <div style="font-family: var(--font-display); font-size: var(--type-section); font-style: italic;">Central Decision</div>
    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 8px;">Hub anchors the decision; spokes explore consequences</div>
  </div>
  <div class="choreo-spokes">
    <div class="choreo-spoke"><h4>Path A</h4><div style="font-size: 14px; color: var(--color-text-secondary);">First consequence</div></div>
    <div class="choreo-spoke"><h4>Path B</h4><div style="font-size: 14px; color: var(--color-text-secondary);">Second consequence</div></div>
    <div class="choreo-spoke"><h4>Path C</h4><div style="font-size: 14px; color: var(--color-text-secondary);">Third consequence</div></div>
  </div>
</div>`,

  'F-Movement': `<div class="f-movement">
  <h3>Progressive Disclosure: Component Selection</h3>
  <div style="font-size: 14px; line-height: 1.7; padding-left: var(--space-6);">
    F-pattern left-anchors headings along a vertical spine. Each heading starts a new horizontal scan. Content deepens as the reader descends — light overview at top, heavy detail at bottom.
  </div>
</div>`,

  'Inline Code': `<div style="padding: 8px; font-size: 14px; line-height: 1.7;">
  Use <span class="inline-code">border-radius: 0</span> for all elements. The <span class="inline-code">--color-primary</span> token resolves to <span class="inline-code">#E83025</span>. Code spans use <span class="inline-code">JetBrains Mono</span> at 0.9em with a subtle background.
</div>`,
};
