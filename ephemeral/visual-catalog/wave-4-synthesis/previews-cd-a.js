// ═══════════════════════════════════════════════════════════════════
// SCOPED CSS for CD-001 (Reasoning Inside Code)
// ═══════════════════════════════════════════════════════════════════
const cssCd001 = `
.preview-cd001 {
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
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-within: 8px;
  --space-between: 32px;
  --space-chapter: 64px;
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
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd001 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd001 h1, .preview-cd001 h2, .preview-cd001 h3, .preview-cd001 h4 { all: unset; display: block; }
.preview-cd001 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Section Indicator */
.preview-cd001 .section-indicator {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Density Meter */
.preview-cd001 .density-meter {
  display: flex;
  gap: var(--space-1);
  margin-bottom: var(--space-6);
}
.preview-cd001 .density-meter__segment {
  height: var(--space-2);
  flex: 1;
  background: var(--color-border-subtle);
  border: 1px solid var(--color-border);
}
.preview-cd001 .density-meter__segment--filled {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
.preview-cd001 .density-meter__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--space-1);
}

/* Version Badge */
.preview-cd001 .version-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

/* Meta-Line */
.preview-cd001 .meta-line {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Bento Cell Label */
.preview-cd001 .bento-cell__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Header (Dark Full-Bleed) */
.preview-cd001 .header-dark {
  background: var(--color-text);
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-8);
}
.preview-cd001 .header-dark .meta-line { color: var(--color-text-secondary); }
.preview-cd001 .header-dark h1 {
  font-family: var(--font-display);
  font-size: var(--type-page);
  color: var(--color-background);
  margin-bottom: var(--space-4);
  line-height: 1.15;
}
.preview-cd001 .header-dark .subtitle {
  font-family: var(--font-body);
  font-size: var(--type-body);
  color: var(--color-text-secondary);
  max-width: 70ch;
  line-height: 1.7;
}

/* Page Footer */
.preview-cd001 .page-footer {
  background: var(--color-text);
  border-top: 3px solid var(--color-primary);
  padding: var(--space-6);
}
.preview-cd001 .page-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preview-cd001 .page-footer__id {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.preview-cd001 .page-footer__rule {
  width: 48px;
  height: 3px;
  background: var(--color-primary);
}

/* Callout System */
.preview-cd001 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd001 .callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
.preview-cd001 .callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
.preview-cd001 .callout--note { border-left-color: var(--accent-blue); }
.preview-cd001 .callout--note .callout__label { color: var(--accent-blue); }
.preview-cd001 .callout--tip { border-left-color: var(--accent-green); }
.preview-cd001 .callout--tip .callout__label { color: var(--accent-green); }
.preview-cd001 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-cd001 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-cd001 .callout--caution { border-left-color: var(--accent-amber); }
.preview-cd001 .callout--caution .callout__label { color: var(--accent-amber); }
.preview-cd001 .callout--essence { border-left-color: var(--accent-purple); }
.preview-cd001 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-cd001 .callout--essence .callout__body {
  font-family: var(--font-display);
  font-style: italic;
}

/* Reasoning Component */
.preview-cd001 .reasoning {
  border: 3px solid var(--color-border);
  padding: var(--space-8);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd001 .reasoning__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}
.preview-cd001 .reasoning__icon {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-amber);
  border: 1px solid var(--accent-amber);
  padding: var(--space-1) var(--space-3);
}
.preview-cd001 .reasoning__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  color: var(--color-text);
}
.preview-cd001 .reasoning__body p { margin-bottom: var(--space-4); }
.preview-cd001 .reasoning__body p:last-child { margin-bottom: 0; }

/* Core Abstraction Component */
.preview-cd001 .core-abstraction {
  border: 3px solid var(--color-primary);
  margin: var(--space-4) 0;
  background: var(--color-zone-dense);
}
.preview-cd001 .core-abstraction__essence {
  padding: var(--space-8);
  border-bottom: 3px solid var(--color-primary);
  background: var(--color-zone-sparse);
}
.preview-cd001 .core-abstraction__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-purple);
  margin-bottom: var(--space-3);
}
.preview-cd001 .core-abstraction__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-section);
  line-height: 1.4;
  color: var(--color-text);
  max-width: 55ch;
}
.preview-cd001 .core-abstraction__proof {
  padding: 0;
}
.preview-cd001 .core-abstraction__proof pre {
  border: none;
  margin-bottom: 0;
  background: var(--color-text);
  color: var(--color-background);
  padding: var(--space-6) var(--space-8);
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
}
.preview-cd001 .kw { color: var(--syntax-keyword); }
.preview-cd001 .fn { color: var(--syntax-function); }
.preview-cd001 .st { color: var(--syntax-string); }
.preview-cd001 .cm { color: var(--syntax-comment); }
.preview-cd001 .ty { color: var(--syntax-type); }

/* Essence Pullquote */
.preview-cd001 .essence-pullquote {
  border-left: 4px solid var(--accent-purple);
  padding: var(--space-8) var(--space-6);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd001 .essence-pullquote p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--type-section);
  line-height: 1.4;
  color: var(--color-text);
  max-width: 55ch;
}
.preview-cd001 .essence-pullquote cite {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-style: normal;
  color: var(--color-text-secondary);
  margin-top: var(--space-3);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Bento Grid */
.preview-cd001 .bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}
.preview-cd001 .bento-cell {
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  background: var(--color-zone-dense);
}
.preview-cd001 .bento-cell--primary {
  grid-column: 1 / -1;
}
.preview-cd001 .bento-cell pre {
  margin-bottom: 0;
  background: var(--color-text);
  color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
}

/* Breathing Zone */
.preview-cd001 .breathing-zone {
  background: var(--color-zone-breathing);
  padding: var(--space-12) var(--space-6);
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
}
.preview-cd001 .breathing-zone--tight {
  padding: var(--space-6);
}
.preview-cd001 .breathing-zone--release {
  padding: var(--space-16) var(--space-6);
}
.preview-cd001 .breathing-zone__inner {
  max-width: 100%;
}

/* Section zones for gesture demos */
.preview-cd001 .section-zone { padding: var(--space-6); }
.preview-cd001 .section-zone--opening { background: var(--color-zone-sparse); padding: var(--space-16) var(--space-6); }
.preview-cd001 .section-zone--rising { background: var(--color-zone-dense); padding: var(--space-12) var(--space-6); }
.preview-cd001 .section-zone--building { background: var(--color-zone-dense); padding: var(--space-8) var(--space-6); }
.preview-cd001 .section-zone--peak { background: var(--color-zone-dense); padding: var(--space-6); }
.preview-cd001 .section-zone--resolution { background: var(--color-zone-sparse); padding: var(--space-16) var(--space-6); }

/* F-Pattern heading hierarchy */
.preview-cd001 .section-zone h2 {
  font-family: var(--font-display);
  font-size: var(--type-section);
  border-left: 4px solid var(--color-primary);
  padding-left: var(--space-4);
  margin-bottom: var(--space-6);
  color: var(--color-text);
  line-height: 1.2;
}
.preview-cd001 .section-zone h3 {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  margin-bottom: var(--space-4);
  color: var(--color-text);
  line-height: 1.2;
}
.preview-cd001 .section-zone h4 {
  font-family: var(--font-body);
  font-size: var(--type-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
  color: var(--color-text);
}
`;

// ═══════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for CD-001
// ═══════════════════════════════════════════════════════════════════
const previewsCd001 = {
  'Section Indicator': `<div class="section-indicator">Opening -- Context</div>
<div class="section-indicator" style="margin-top:12px;">Rising -- First Contact</div>
<div class="section-indicator" style="margin-top:12px;">Building -- Analysis</div>
<div class="section-indicator" style="margin-top:12px;">Peak -- Core Teaching</div>
<div class="section-indicator" style="margin-top:12px;">Resolution -- Takeaway</div>`,

  'Density Meter': `<div style="margin-bottom:24px;">
  <div class="density-meter__label">Density: 1 / 5</div>
  <div class="density-meter">
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment"></div>
    <div class="density-meter__segment"></div>
    <div class="density-meter__segment"></div>
    <div class="density-meter__segment"></div>
  </div>
</div>
<div style="margin-bottom:24px;">
  <div class="density-meter__label">Density: 3 / 5</div>
  <div class="density-meter">
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment"></div>
    <div class="density-meter__segment"></div>
  </div>
</div>
<div>
  <div class="density-meter__label">Density: 5 / 5</div>
  <div class="density-meter">
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
    <div class="density-meter__segment density-meter__segment--filled"></div>
  </div>
</div>`,

  'Version Badge': `<span class="version-badge">v1</span>
<span class="version-badge" style="margin-left:8px;">v2</span>
<span class="version-badge" style="margin-left:8px;">v3.1</span>`,

  'Meta-Line': `<div style="background:#1A1A1A; padding:16px;">
  <div class="meta-line">
    <span>EXPLORATION CD-001</span>
    <span>COMBINATION: DEEP DIVE</span>
    <span class="version-badge">v1</span>
  </div>
</div>`,

  'Bento Cell Label': `<div style="background:#FFFFFF; border:3px solid #E0D5C5; padding:24px;">
  <div class="bento-cell__label">Complete Middleware Chain</div>
  <div style="font-family:var(--font-mono);font-size:var(--type-code);color:var(--color-text-secondary);">// Cell content below label...</div>
</div>`,

  'Header (Dark Full-Bleed)': `<div class="header-dark">
  <div class="meta-line">
    <span>EXPLORATION CD-001</span>
    <span>COMBINATION: DEEP DIVE</span>
    <span class="version-badge">v1</span>
  </div>
  <h1>Reasoning Inside Code</h1>
  <p class="subtitle">How authentication middleware transforms from boilerplate to architecture through deliberate reasoning at every decision point.</p>
</div>`,

  'Page Footer': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-001 -- Reasoning Inside Code</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">Exploration Complete</span>
  </div>
</div>`,

  'CRESCENDO Spacing Compression': `<div style="display:flex;gap:4px;align-items:stretch;">
  <div class="section-zone--opening" style="flex:1;text-align:center;min-height:40px;">
    <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Opening<br>64px</div>
  </div>
  <div class="section-zone--rising" style="flex:1;text-align:center;min-height:40px;">
    <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Rising<br>48px</div>
  </div>
  <div class="section-zone--building" style="flex:1;text-align:center;min-height:40px;">
    <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Building<br>32px</div>
  </div>
  <div class="section-zone--peak" style="flex:1;text-align:center;min-height:40px;">
    <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Peak<br>24px</div>
  </div>
  <div class="section-zone--resolution" style="flex:1;text-align:center;min-height:40px;">
    <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Resolution<br>64px</div>
  </div>
</div>`,

  'Breathing Zone Compression/Release': `<div style="display:flex;flex-direction:column;gap:4px;">
  <div class="breathing-zone" style="padding:48px 24px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Standard: 48px padding</span>
  </div>
  <div class="breathing-zone breathing-zone--tight" style="text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Tight: 24px padding</span>
  </div>
  <div class="breathing-zone breathing-zone--release" style="text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Release: 64px padding</span>
  </div>
</div>`,

  'F-Pattern Left-Spine Heading Hierarchy': `<div class="section-zone" style="background:var(--color-zone-sparse);">
  <h2>Section Heading (H2)</h2>
  <h3>Subsection Heading (H3)</h3>
  <h4>Detail Heading (H4)</h4>
  <p style="color:var(--color-text-secondary);font-size:var(--type-meta);margin-top:16px;">H2: 4px red left border + Instrument Serif | H3: Italic serif, no border | H4: Uppercase sans-serif</p>
</div>`,

  'Essence Typography Register Shift': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="callout callout--tip">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Standard callout: Inter body font for practical information.</p></div>
  </div>
  <div class="callout callout--essence">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Essence callout: Instrument Serif italic for philosophical truth.</p></div>
  </div>
</div>`,

  'Core Abstraction Internal CRESCENDO': `<div class="core-abstraction">
  <div class="core-abstraction__essence">
    <div class="core-abstraction__label">Core Abstraction</div>
    <p class="core-abstraction__quote">Warm cream zone with serif italic -- contemplative register</p>
  </div>
  <div class="core-abstraction__proof">
    <pre style="margin:0;border:none;"><code><span class="cm">// Dark code zone -- technical register</span>
<span class="kw">const</span> <span class="fn">proof</span> = <span class="st">"cold, dense, analytical"</span>;</code></pre>
  </div>
</div>`,

  'Syntax Highlighting Color Encoding': `<div style="background:#1A1A1A;padding:24px 32px;font-family:var(--font-mono);font-size:var(--type-code);line-height:1.5;">
  <code><span class="kw">const</span> <span class="fn">authenticate</span> = (<span class="ty">Request</span> req) => {
  <span class="kw">if</span> (req.token === <span class="st">"valid"</span>) {
    <span class="kw">return</span> <span class="nu">200</span>; <span class="cm">// success</span>
  }
};</code>
</div>
<div style="margin-top:8px;display:flex;gap:12px;flex-wrap:wrap;">
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#E83025;">keyword</span>
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#6B9B7A;">string</span>
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#666666;">comment</span>
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#4A7C9B;">function</span>
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#C97065;">type</span>
  <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:#D97706;">number</span>
</div>`,

  'Callout (5-Variant System)': `<div style="display:flex;flex-direction:column;gap:8px;">
  <div class="callout callout--note" style="margin:0;">
    <div class="callout__label">Note</div>
    <div class="callout__body"><p style="margin:0;">Blue accent -- neutral information</p></div>
  </div>
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Green accent -- constructive advice</p></div>
  </div>
  <div class="callout callout--gotcha" style="margin:0;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body"><p style="margin:0;">Coral accent -- watch out for this</p></div>
  </div>
  <div class="callout callout--caution" style="margin:0;">
    <div class="callout__label">Caution</div>
    <div class="callout__body"><p style="margin:0;">Amber accent -- proceed carefully</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Purple accent -- philosophical truth in serif italic</p></div>
  </div>
</div>`,

  'Reasoning Component': `<div class="reasoning">
  <div class="reasoning__header">
    <span class="reasoning__icon">Reasoning</span>
    <span class="reasoning__title">Which approach serves the middleware pipeline?</span>
  </div>
  <div class="reasoning__body">
    <p>The stateless approach treats each request as independent. This simplifies the middleware chain but creates redundant validation.</p>
    <p>The stateful approach caches authentication results. This adds complexity but reduces latency for repeated requests from the same client.</p>
  </div>
</div>`,

  'Core Abstraction Component': `<div class="core-abstraction">
  <div class="core-abstraction__essence">
    <div class="core-abstraction__label">Core Abstraction</div>
    <p class="core-abstraction__quote">Middleware is not a chain of functions. It is a negotiation between trust and verification.</p>
  </div>
  <div class="core-abstraction__proof">
    <pre style="margin:0;border:none;"><code><span class="kw">function</span> <span class="fn">authenticate</span>(req, res, next) {
  <span class="kw">const</span> trust = <span class="fn">verify</span>(req.token);
  <span class="kw">return</span> trust ? <span class="fn">next</span>() : <span class="fn">deny</span>(res);
}</code></pre>
  </div>
</div>`,

  'Essence Pullquote': `<div class="essence-pullquote">
  <p>The best middleware is invisible. It protects without announcing its presence.</p>
  <cite>-- Authentication Architecture Principle</cite>
</div>`,

  'Bento Grid': `<div class="bento-grid">
  <div class="bento-cell bento-cell--primary">
    <div class="bento-cell__label">Complete Middleware Chain</div>
    <pre style="margin:0;background:#1A1A1A;color:#FEF9F5;border:3px solid #E0D5C5;padding:16px;font-family:var(--font-mono);font-size:var(--type-code);"><code><span class="cm">// Primary cell spans full width</span></code></pre>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__label">Auth Handler</div>
    <pre style="margin:0;background:#1A1A1A;color:#FEF9F5;border:3px solid #E0D5C5;padding:16px;font-family:var(--font-mono);font-size:var(--type-code);"><code><span class="fn">verify</span>(token)</code></pre>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__label">Error Handler</div>
    <pre style="margin:0;background:#1A1A1A;color:#FEF9F5;border:3px solid #E0D5C5;padding:16px;font-family:var(--font-mono);font-size:var(--type-code);"><code><span class="fn">deny</span>(res)</code></pre>
  </div>
</div>`,

  'Breathing Zone': `<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <div class="essence-pullquote" style="margin:0;">
      <p>Every layer of middleware is a question the system asks itself before letting the request proceed.</p>
      <cite>-- Middleware Philosophy</cite>
    </div>
  </div>
</div>`,

  'Bento Grid': `<div class="bento-grid">
    <div class="bento-item" style="grid-column: span 2;">
      <div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Featured</div>
      <h3 style="font-family:var(--font-display);font-size:1.375rem;font-style:italic;color:var(--color-text);margin-bottom:8px">Rate Limiting Strategies</h3>
      <p style="font-size:14px;color:var(--color-text-secondary)">Primary technique for protecting API endpoints</p>
    </div>
    <div class="bento-item">
      <div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Pattern A</div>
      <h3 style="font-family:var(--font-display);font-size:1.2rem;font-style:italic;margin-bottom:6px">Token Bucket</h3>
    </div>
    <div class="bento-item">
      <div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Pattern B</div>
      <h3 style="font-family:var(--font-display);font-size:1.2rem;font-style:italic;margin-bottom:6px">Sliding Window</h3>
    </div>
  </div>`,

  'Breathing Zone': `<div class="breathing-zone">
    <div class="breathing-zone__inner" style="text-align:center;font-style:italic;color:var(--color-text-secondary);font-size:14px">
      <p>A moment of visual rest between dense sections</p>
    </div>
  </div>`,

  'Callout (5-Variant System)': `<div style="display:flex;flex-direction:column;gap:8px">
    <div class="callout callout--note"><div class="callout__label">Note</div><div class="callout__body">Informational callout — blue accent, standard typography.</div></div>
    <div class="callout callout--tip"><div class="callout__label">Tip</div><div class="callout__body">Practical advice — green accent, velocity buffer.</div></div>
    <div class="callout callout--gotcha"><div class="callout__label">Gotcha</div><div class="callout__body">Common mistake — coral accent, warning signal.</div></div>
    <div class="callout callout--caution"><div class="callout__label">Caution</div><div class="callout__body">Important caveat — amber accent, proceed carefully.</div></div>
    <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">The deepest insight shifts to serif italic — wisdom, not information.</div></div>
  </div>`,

  'Core Abstraction Component': `<div class="core-abstraction">
    <div class="core-abstraction__essence">
      <div class="core-abstraction__label">Core Abstraction</div>
      <p class="core-abstraction__quote">Middleware is not code that runs between things. Middleware IS the between.</p>
    </div>
    <div class="core-abstraction__proof">
      <pre style="margin:0;color:#EDEDED;font-family:var(--font-mono);font-size:13px"><span style="color:#E83025">const</span> middleware = (req, res, next) => {
  <span style="color:#666">// The between made manifest</span>
  next();
};</pre>
    </div>
  </div>`,

  'Essence Pullquote': `<div class="essence-pullquote">
    <p>Every API is a promise. Every endpoint is a contract. The question is not whether your API works — it's whether it communicates.</p>
    <cite>-- Velocity Interleaving Philosophy</cite>
  </div>`,

  'Reasoning Component': `<div class="reasoning">
    <div class="reasoning__header">
      <div class="reasoning__icon">💭</div>
      <div class="reasoning__title">Why Token Bucket Over Leaky Bucket?</div>
    </div>
    <div class="reasoning__body">
      <p>Token bucket allows burst traffic while maintaining average rate. Leaky bucket enforces strict uniformity. For APIs with variable request patterns, token bucket better matches real-world usage.</p>
    </div>
  </div>`,
};


// ═══════════════════════════════════════════════════════════════════
// SCOPED CSS for CD-002 (Task Containing Decision)
// ═══════════════════════════════════════════════════════════════════
const cssCd002 = `
.preview-cd002 {
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
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-within: 8px;
  --space-between: 32px;
  --space-chapter: 64px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd002 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd002 h1, .preview-cd002 h2, .preview-cd002 h3, .preview-cd002 h4 { all: unset; display: block; }
.preview-cd002 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Running Header */
.preview-cd002 .running-header {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border-subtle);
  margin-bottom: var(--space-8);
}

/* Meta Line */
.preview-cd002 .meta-line {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.preview-cd002 .version-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

/* Breathing Transition */
.preview-cd002 .transition--breathing {
  height: var(--space-12);
  background: var(--color-zone-breathing);
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
  margin: var(--space-12) 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview-cd002 .transition--breathing__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

/* Stratum Label */
.preview-cd002 .stratum__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

/* Decision Matrix Header */
.preview-cd002 .decision-matrix__header {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 3px solid var(--color-primary);
}

/* Recommendation Box */
.preview-cd002 .recommendation {
  margin-top: var(--space-6);
  padding: var(--space-4) var(--space-5);
  border-left: 4px solid var(--color-primary);
  background: var(--color-zone-dense);
}
.preview-cd002 .recommendation__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

/* Task Component Header */
.preview-cd002 .task-component__header {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Footer Dimension Labels */
.preview-cd002 .page-footer {
  background: var(--color-text);
  border-top: 3px solid var(--color-primary);
  padding: var(--space-6);
}
.preview-cd002 .page-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preview-cd002 .page-footer__id {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.preview-cd002 .page-footer__rule {
  width: 48px;
  height: 3px;
  background: var(--color-primary);
}

/* Strata */
.preview-cd002 .stratum--bedrock {
  border-left: 4px solid var(--color-text);
  padding: var(--space-8) var(--space-6);
  background: var(--color-zone-dense);
}
.preview-cd002 .stratum--bedrock .stratum__label { color: var(--color-text); }
.preview-cd002 .stratum--subsoil {
  border-left: 3px solid var(--color-text-secondary);
  padding: var(--space-6) var(--space-5);
  background: var(--color-zone-sparse);
}
.preview-cd002 .stratum--subsoil .stratum__label { color: var(--color-text-secondary); }
.preview-cd002 .stratum--atmosphere {
  border-left: 1px solid var(--color-border);
  padding: var(--space-5) var(--space-4);
  background: var(--color-zone-breathing);
}
.preview-cd002 .stratum--atmosphere .stratum__label { color: var(--color-border); }
.preview-cd002 .stratum__title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}

/* Section Title */
.preview-cd002 .section-title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-3);
  border-bottom: 3px solid var(--color-border);
  line-height: 1.2;
}

/* Task Component */
.preview-cd002 .task-component {
  background: var(--color-zone-dense);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}
.preview-cd002 .task-component__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}
.preview-cd002 .task-list {
  list-style: none;
  padding: 0;
}
.preview-cd002 .task-item {
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border-subtle);
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}
.preview-cd002 .task-item:last-child { border-bottom: none; }
.preview-cd002 .task-item__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 3px solid var(--color-border);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  flex-shrink: 0;
  margin-top: 2px;
}
.preview-cd002 .task-item__content { flex: 1; }

/* Decision Matrix (full component) */
.preview-cd002 .decision-matrix {
  background: var(--color-zone-sparse);
  padding: var(--space-8);
}
.preview-cd002 .decision-matrix__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}
.preview-cd002 table {
  width: 100%;
  border-collapse: collapse;
}
.preview-cd002 th {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  padding: var(--space-3) var(--space-4);
  border-bottom: 3px solid var(--color-border);
  color: var(--color-text-secondary);
  background: var(--color-zone-breathing);
}
.preview-cd002 td {
  font-family: var(--font-body);
  font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: top;
}

/* Reasoning Component */
.preview-cd002 .reasoning {
  background: var(--color-zone-sparse);
  border-left: 4px solid var(--accent-amber);
  padding: var(--space-6) var(--space-5);
}
.preview-cd002 .reasoning__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-amber);
  margin-bottom: var(--space-2);
}
.preview-cd002 .reasoning__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

/* Callout */
.preview-cd002 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd002 .callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
.preview-cd002 .callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
.preview-cd002 .callout--info { border-left-color: var(--accent-blue); }
.preview-cd002 .callout--info .callout__label { color: var(--accent-blue); }
.preview-cd002 .callout--tip { border-left-color: var(--accent-green); }
.preview-cd002 .callout--tip .callout__label { color: var(--accent-green); }
.preview-cd002 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-cd002 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-cd002 .callout--essence { border-left-color: var(--accent-purple); }
.preview-cd002 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-cd002 .callout--essence .callout__body {
  font-family: var(--font-display);
  font-style: italic;
}

/* Challenge Box */
.preview-cd002 .challenge {
  border: 3px solid var(--color-primary);
  padding: var(--space-6);
  background: var(--color-zone-sparse);
}
.preview-cd002 .challenge__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

/* Spiral Stratum Container -- reuse stratum styles above */
`;

// ═══════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for CD-002
// ═══════════════════════════════════════════════════════════════════
const previewsCd002 = {
  'Running Header': `<div class="running-header">Phase 1 -- Understanding the Pipeline</div>
<div class="running-header" style="margin-top:12px;">Phase 2 -- Choosing Your CI Tool</div>
<div class="running-header" style="margin-top:12px;">Stratum 1 -- Bedrock</div>`,

  'Meta Line': `<div style="background:#1A1A1A; padding:16px;">
  <div class="meta-line">
    <span>EXPLORATION CD-002</span>
    <span>COMBINATION: DECISION GUIDE</span>
    <span class="version-badge">v1</span>
  </div>
</div>`,

  'Breathing Transition': `<div class="transition--breathing" style="margin:16px 0;">
  <span class="transition--breathing__label">Deployment Strategy</span>
</div>`,

  'Stratum Label': `<div style="display:flex;flex-direction:column;gap:16px;">
  <div class="stratum--bedrock" style="padding:16px 24px;">
    <div class="stratum__label">Core Abstraction</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">4px border, #1A1A1A label -- highest confidence</span>
  </div>
  <div class="stratum--subsoil" style="padding:16px 20px;">
    <div class="stratum__label">Implementation Detail</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">3px border, #666 label -- moderate confidence</span>
  </div>
  <div class="stratum--atmosphere" style="padding:16px;">
    <div class="stratum__label">Speculative</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">1px border, #E0D5C5 label -- lowest confidence</span>
  </div>
</div>`,

  'Decision Matrix Header': `<div style="background:var(--color-zone-sparse);padding:24px;">
  <div class="decision-matrix__header">Decision Matrix</div>
  <div style="font-size:var(--type-meta);color:var(--color-text-secondary);margin-top:8px;">Red primary color + 3px bottom border = decision-mode signal</div>
</div>`,

  'Recommendation Box': `<div class="recommendation">
  <div class="recommendation__label">Recommendation</div>
  <p style="margin:0;"><strong>For teams already on GitHub:</strong> Use GitHub Actions. The integration advantage outweighs platform lock-in concerns for 90% of projects.</p>
</div>`,

  'Task Component Header': `<div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:24px;">
  <div class="task-component__header">Task: Setup Checklist</div>
  <div style="font-size:var(--type-meta);color:var(--color-text-secondary);margin-top:8px;">Uppercase metadata label with 1px separator below</div>
</div>`,

  'Footer Dimension Labels': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">CD-002 &middot; Task Containing Decision</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">DD:PULSE &middot; OD:TASK-BASED &middot; AD:Z+SPIRAL</span>
  </div>
</div>`,

  'Border-Weight Confidence Gradient (Spiral Strata)': `<div style="display:flex;flex-direction:column;gap:8px;">
  <div class="stratum--bedrock" style="padding:16px 24px;">
    <div class="stratum__label">Bedrock</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">4px #1A1A1A | pad 32/24 | white bg</span>
  </div>
  <div class="stratum--subsoil" style="padding:12px 20px;">
    <div class="stratum__label">Subsoil</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">3px #666 | pad 24/20 | cream bg</span>
  </div>
  <div class="stratum--atmosphere" style="padding:10px 16px;">
    <div class="stratum__label">Atmosphere</div>
    <span style="font-size:var(--type-meta);color:var(--color-text-secondary);">1px #E0D5C5 | pad 20/16 | breathing bg</span>
  </div>
</div>`,

  'PULSE Dense/Sparse Alternation': `<div style="display:flex;flex-direction:column;gap:4px;">
  <div style="background:#FFFFFF;border:3px solid #E0D5C5;padding:16px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">DENSE: white bg, 3px structural border</span>
  </div>
  <div style="background:#FEF9F5;border-left:4px solid #4A9D6B;padding:16px;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">SPARSE: cream bg, 4px accent border</span>
  </div>
  <div style="background:#FFFFFF;border:3px solid #E0D5C5;padding:16px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">DENSE: task checklist</span>
  </div>
  <div style="background:#FAF5ED;border-top:3px solid #E0D5C5;border-bottom:3px solid #E0D5C5;padding:16px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">BREATHING: transition zone</span>
  </div>
</div>`,

  'Callout Accent-Color Semantic Shift': `<div style="display:flex;flex-direction:column;gap:8px;">
  <div class="callout callout--info" style="margin:0;padding:12px 16px;">
    <div class="callout__label">Context</div>
    <div class="callout__body"><p style="margin:0;">Blue = neutral orientation</p></div>
  </div>
  <div class="callout callout--tip" style="margin:0;padding:12px 16px;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Green = positive actionable</p></div>
  </div>
  <div class="callout callout--gotcha" style="margin:0;padding:12px 16px;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body"><p style="margin:0;">Coral = heightened caution</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;padding:12px 16px;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Purple = reflective/philosophical</p></div>
  </div>
</div>`,

  'Essence Callout Typographic Register Shift': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Inter sans-serif body font -- practical register</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Instrument Serif italic -- the Archivist speaks in a different voice</p></div>
  </div>
</div>`,

  'Section Title with Structural Border': `<div style="display:flex;flex-direction:column;gap:16px;">
  <div>
    <div class="running-header" style="margin-bottom:12px;">Phase 1 -- Understanding the Pipeline</div>
    <div class="section-title">Continuous Integration Fundamentals</div>
  </div>
  <div>
    <div class="running-header" style="margin-bottom:12px;">Phase 2 -- Choosing Your CI Tool</div>
    <div class="section-title">Evaluating CI/CD Platforms</div>
  </div>
</div>`,

  'Task Item Checkbox Affordance': `<div class="task-component" style="max-width:400px;">
  <div class="task-component__header">Task: Setup Checklist</div>
  <h3 class="task-component__title">Configure Your CI Pipeline</h3>
  <ul class="task-list">
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Create workflow file:</strong> .github/workflows/ci.yml</div>
    </li>
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Add test step:</strong> run: npm test</div>
    </li>
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Configure triggers:</strong> on push and pull_request</div>
    </li>
  </ul>
</div>`,

  'Z-to-Spiral Temperature Gradient': `<div style="display:flex;flex-direction:column;gap:2px;">
  <div style="background:#FFFFFF;padding:12px 16px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Z-Pattern: #FFFFFF (warm/dense)</span>
  </div>
  <div style="background:#FEF9F5;padding:12px 16px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Z-Pattern: #FEF9F5 (sparse)</span>
  </div>
  <div style="background:#FAF5ED;padding:12px 16px;text-align:center;border-top:3px solid #E0D5C5;border-bottom:3px solid #E0D5C5;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Breathing Transition</span>
  </div>
  <div style="background:#FFFFFF;padding:12px 16px;border-left:4px solid #1A1A1A;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Bedrock: #FFFFFF (warm)</span>
  </div>
  <div style="background:#FEF9F5;padding:12px 16px;border-left:3px solid #666666;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Subsoil: #FEF9F5 (neutral)</span>
  </div>
  <div style="background:#FAF5ED;padding:12px 16px;border-left:1px solid #E0D5C5;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Atmosphere: #FAF5ED (cool)</span>
  </div>
</div>`,

  'Closing Statement Typographic Gesture': `<div style="padding:48px 0 32px; text-align:center;">
  <p style="font-family:var(--font-display);font-size:var(--type-section);font-style:italic;color:var(--color-text-secondary);max-width:100%;line-height:1.4;">
    The pipeline is not infrastructure.<br>
    It is the team's definition of done.
  </p>
</div>`,

  'Task Component': `<div class="task-component">
  <div class="task-component__header">Task: Setup Checklist</div>
  <h3 class="task-component__title">Configure Your CI Pipeline</h3>
  <ul class="task-list">
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Create workflow file:</strong> Add .github/workflows/ci.yml to repository root</div>
    </li>
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Define triggers:</strong> Configure on push and pull_request events</div>
    </li>
    <li class="task-item">
      <span class="task-item__check"></span>
      <div class="task-item__content"><strong>Add test step:</strong> Include npm test in the workflow steps</div>
    </li>
  </ul>
</div>`,

  'Decision Matrix': `<div class="decision-matrix">
  <div class="decision-matrix__header">Decision Matrix</div>
  <h3 class="decision-matrix__title">Which CI/CD Platform Fits Your Project?</h3>
  <table>
    <thead>
      <tr><th>Criterion</th><th>GitHub Actions</th><th>Jenkins</th><th>CircleCI</th></tr>
    </thead>
    <tbody>
      <tr><td>Setup Time</td><td>Minutes</td><td>Hours</td><td>Minutes</td></tr>
      <tr><td>Cost (Small)</td><td>Free</td><td>Self-host</td><td>Free tier</td></tr>
      <tr><td>Flexibility</td><td>Good</td><td>Excellent</td><td>Good</td></tr>
    </tbody>
  </table>
  <div class="recommendation">
    <div class="recommendation__label">Recommendation</div>
    <p style="margin:0;"><strong>For teams already on GitHub:</strong> Use GitHub Actions.</p>
  </div>
</div>`,

  'Reasoning Component': `<div class="reasoning">
  <div class="reasoning__label">Reasoning</div>
  <h3 class="reasoning__title">Why Platform Lock-in Matters Less Than You Think</h3>
  <p>CI/CD workflows are fundamentally YAML configuration. The mental model transfers across platforms even when syntax differs.</p>
  <p style="margin-bottom:0;">The real lock-in is in custom plugins and integrations, not in the pipeline definition itself.</p>
</div>`,

  'Callout': `<div style="display:flex;flex-direction:column;gap:8px;">
  <div class="callout callout--info" style="margin:0;">
    <div class="callout__label">Context</div>
    <div class="callout__body"><p style="margin:0;">CI/CD automates the path from code commit to production deployment.</p></div>
  </div>
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Start with the simplest pipeline that runs your tests on every push.</p></div>
  </div>
  <div class="callout callout--gotcha" style="margin:0;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body"><p style="margin:0;">Secrets in CI logs are the most common security mistake.</p></div>
  </div>
</div>`,

  'Challenge Box': `<div class="challenge">
  <div class="challenge__label">Challenge</div>
  <p><strong>Add a rollback stage to your pipeline.</strong> What happens when your deployment fails at 3am? Define the automated recovery path.</p>
  <p style="margin-top:16px;margin-bottom:0;">The harder question: how do you detect a deployment that succeeds but degrades performance?</p>
</div>`,

  'Spiral Stratum Container': `<div style="display:flex;flex-direction:column;gap:16px;">
  <div class="stratum--bedrock">
    <div class="stratum__label">Core Abstraction</div>
    <h2 class="stratum__title">The Pipeline Is the Product</h2>
    <p style="margin:0;">Your CI/CD pipeline is not infrastructure -- it is the team's shared definition of what "done" means.</p>
  </div>
  <div class="stratum--subsoil">
    <div class="stratum__label">Implementation Detail</div>
    <h2 class="stratum__title">Caching Strategies</h2>
    <p style="margin:0;">Cache node_modules between runs to reduce build time by 60-80%.</p>
  </div>
  <div class="stratum--atmosphere">
    <div class="stratum__label">Speculative</div>
    <h2 class="stratum__title">AI-Assisted Pipeline Optimization</h2>
    <p style="margin:0;">Future pipelines may self-optimize based on historical build patterns.</p>
  </div>
</div>`,
};


// ═══════════════════════════════════════════════════════════════════
// SCOPED CSS for CD-003 (File Tree with Callouts)
// ═══════════════════════════════════════════════════════════════════
const cssCd003 = `
.preview-cd003 {
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
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-within: 8px;
  --space-between: 32px;
  --space-chapter: 64px;
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
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-cd003 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-cd003 h1, .preview-cd003 h2, .preview-cd003 h3, .preview-cd003 h4 { all: unset; display: block; }
.preview-cd003 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Header Meta-Line */
.preview-cd003 .meta-line {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}
.preview-cd003 .version-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

/* Cell Type Badge */
.preview-cd003 .cell-badge {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-border);
  white-space: nowrap;
  display: inline-block;
}
.preview-cd003 .cell-badge--hub {
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.preview-cd003 .cell-badge--spoke {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}
.preview-cd003 .cell-badge--file-tree {
  color: var(--accent-green);
  border-color: var(--accent-green);
}

/* Choreography Spoke Label */
.preview-cd003 .choreo-spoke__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

/* Smooth Transition Divider */
.preview-cd003 .transition--smooth {
  height: var(--space-8);
  position: relative;
}
.preview-cd003 .transition--smooth::after {
  content: '';
  display: block;
  width: 120px;
  height: 3px;
  background: var(--color-border);
  margin: 0 auto;
  position: relative;
  top: 50%;
}

/* Page End Marker */
.preview-cd003 .page-end {
  text-align: center;
  padding: var(--space-12) 0 var(--space-8);
  color: var(--color-border);
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.3em;
}
.preview-cd003 .page-end::before {
  content: '';
  display: block;
  width: 64px;
  height: 3px;
  background: var(--color-border);
  margin: 0 auto var(--space-6);
}

/* RAR Block */
.preview-cd003 .rar-block {
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}
.preview-cd003 .rar-block h2 {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}
.preview-cd003 .rar-block h3 {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  margin-top: var(--space-6);
  margin-bottom: var(--space-4);
  line-height: 1.2;
}

/* Header (Full-Bleed Dark) */
.preview-cd003 .header-dark {
  background: var(--color-text);
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-8);
}
.preview-cd003 .header-dark h1 {
  font-family: var(--font-display);
  font-size: var(--type-page);
  color: var(--color-background);
  margin-bottom: var(--space-4);
  line-height: 1.15;
}
.preview-cd003 .header-dark .subtitle {
  font-family: var(--font-body);
  font-size: var(--type-body);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* Bento Cell */
.preview-cd003 .bento-cell {
  background: var(--color-zone-dense);
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.preview-cd003 .bento-cell__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
}
.preview-cd003 .bento-cell__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  line-height: 1.3;
}
.preview-cd003 .bento-cell__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}

/* Bento Grid Layout */
.preview-cd003 .bento-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-8);
}
.preview-cd003 .bento-item--2x2 {
  grid-column: span 2;
  grid-row: span 2;
}
.preview-cd003 .bento-item--2x1 {
  grid-column: span 2;
}

/* File Tree */
.preview-cd003 .file-tree {
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.8;
  background: var(--color-zone-breathing);
  border-left: 4px solid var(--color-text);
  padding: var(--space-6) var(--space-5);
}
.preview-cd003 .file-tree__item {
  display: block;
  color: var(--color-text);
  white-space: pre;
}
.preview-cd003 .file-tree__item--dir {
  font-weight: 600;
  color: var(--color-text);
}
.preview-cd003 .file-tree__item--file {
  color: var(--color-text-secondary);
}
.preview-cd003 .file-tree__item--highlight {
  color: var(--color-primary);
  font-weight: 600;
}
.preview-cd003 .file-tree__comment {
  color: var(--color-text-secondary);
  font-style: italic;
  font-family: var(--font-body);
  font-size: var(--type-meta);
}

/* Callout (5-Variant System) */
.preview-cd003 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5);
  margin: var(--space-4) 0;
  background: var(--color-zone-sparse);
}
.preview-cd003 .callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}
.preview-cd003 .callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}
.preview-cd003 .callout--note { border-left-color: var(--accent-blue); }
.preview-cd003 .callout--note .callout__label { color: var(--accent-blue); }
.preview-cd003 .callout--tip { border-left-color: var(--accent-green); }
.preview-cd003 .callout--tip .callout__label { color: var(--accent-green); }
.preview-cd003 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-cd003 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-cd003 .callout--caution { border-left-color: var(--accent-amber); }
.preview-cd003 .callout--caution .callout__label { color: var(--accent-amber); }
.preview-cd003 .callout--challenge { border-left-color: var(--accent-amber); }
.preview-cd003 .callout--challenge .callout__label { color: var(--accent-amber); }
.preview-cd003 .callout--essence { border-left-color: var(--accent-purple); }
.preview-cd003 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-cd003 .callout--essence .callout__body {
  font-family: var(--font-display);
  font-style: italic;
}

/* Choreography Section */
.preview-cd003 .choreo-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

/* Choreography Hub */
.preview-cd003 .choreo-hub {
  background: var(--color-zone-dense);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}
.preview-cd003 .choreo-hub__title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}
.preview-cd003 table {
  width: 100%;
  border-collapse: collapse;
}
.preview-cd003 th {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: left;
  padding: var(--space-3) var(--space-4);
  border-bottom: 3px solid var(--color-border);
  color: var(--color-text-secondary);
  background: var(--color-zone-breathing);
}
.preview-cd003 td {
  font-family: var(--font-body);
  font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: top;
}
.preview-cd003 .recommended {
  font-weight: 600;
  color: var(--accent-green);
}

/* Choreography Spoke */
.preview-cd003 .choreo-spoke {
  background: var(--color-zone-dense);
  border: 3px solid var(--color-border);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.preview-cd003 .choreo-spoke--full {
  grid-column: span 2;
}
.preview-cd003 .choreo-spoke__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  margin-bottom: var(--space-2);
  line-height: 1.2;
}
.preview-cd003 .choreo-spokes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8);
}

/* Core Abstraction */
.preview-cd003 .core-abstraction {
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}
.preview-cd003 .core-abstraction__title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-4);
  line-height: 1.2;
}
.preview-cd003 .core-abstraction__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}

/* Decision Matrix */
.preview-cd003 .decision-matrix {
  width: 100%;
  border-collapse: collapse;
}
.preview-cd003 .decision-matrix th {
  background: var(--color-zone-breathing);
}

/* Reasoning Block */
.preview-cd003 .reasoning {
  background: var(--color-zone-sparse);
  border-left: 4px solid var(--accent-purple);
  padding: var(--space-6) var(--space-5);
}
.preview-cd003 .reasoning__title {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
  margin-bottom: var(--space-4);
  color: var(--accent-purple);
  line-height: 1.2;
}
.preview-cd003 .reasoning__body {
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: 1.7;
}

/* Footer */
.preview-cd003 .page-footer {
  background: var(--color-text);
  border-top: 3px solid var(--color-primary);
  padding: var(--space-6);
}
.preview-cd003 .page-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preview-cd003 .page-footer__id {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.preview-cd003 .page-footer__rule {
  width: 48px;
  height: 3px;
  background: var(--color-primary);
}
`;

// ═══════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for CD-003
// ═══════════════════════════════════════════════════════════════════
const previewsCd003 = {
  'Header Meta-Line': `<div style="background:#1A1A1A; padding:16px;">
  <div class="meta-line">
    <span>EXPLORATION CD-003</span>
    <span>COMBINATION: FILE TREE WITH CALLOUTS</span>
    <span class="version-badge">v1</span>
  </div>
</div>`,

  'Cell Type Badge': `<div style="display:flex;gap:12px;flex-wrap:wrap;">
  <span class="cell-badge cell-badge--file-tree">Root</span>
  <span class="cell-badge cell-badge--hub">Hub</span>
  <span class="cell-badge cell-badge--spoke">Spoke</span>
  <span class="cell-badge">Info</span>
  <span class="cell-badge">Tip</span>
  <span class="cell-badge">Config</span>
  <span class="cell-badge">Gotcha</span>
</div>`,

  'Choreography Spoke Label': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="choreo-spoke__label">Spoke 1 -- Recommended</div>
  <div class="choreo-spoke__label">Spoke 2 -- Traditional</div>
  <div class="choreo-spoke__label">Spoke 3 -- Recommendation</div>
</div>`,

  'Smooth Transition Divider': `<div style="padding:24px 0;">
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);text-align:center;margin-bottom:8px;">BENTO GRID section above</div>
  <div class="transition--smooth"></div>
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);text-align:center;margin-top:8px;">CHOREOGRAPHY section below</div>
</div>`,

  'Page End Marker': `<div class="page-end">
  CD-003 FILE TREE WITH CALLOUTS
</div>`,

  'RAR Block (Research Application Record)': `<div class="rar-block">
  <h2>Research Application Record</h2>
  <h3>1. Combination Pattern</h3>
  <p>DD:ISLANDS | OD:SPATIAL | AD:BENTO GRID + CHOREOGRAPHY</p>
  <h3>2. Research Applied</h3>
  <p style="margin-bottom:0;">R5-001, R5-007, R5-011, R5-015, AD-F-009, AD-F-010, DD-F-003...</p>
</div>`,

  'Islands Density Spacing': `<div style="display:flex;flex-direction:column;">
  <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:24px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Content Island 1</span>
  </div>
  <div style="height:64px;display:flex;align-items:center;justify-content:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-border);">64px ocean gap</span>
  </div>
  <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:24px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Content Island 2</span>
  </div>
  <div style="height:64px;display:flex;align-items:center;justify-content:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-border);">64px ocean gap</span>
  </div>
  <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:24px;text-align:center;">
    <span style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Content Island 3</span>
  </div>
</div>`,

  'Bento Cell Size Hierarchy': `<div class="bento-grid" style="max-width:100%;">
  <div class="bento-cell bento-item--2x2" style="min-height:80px;">
    <div class="bento-cell__header">
      <span class="bento-cell__title">2x2 Primary</span>
      <span class="cell-badge cell-badge--file-tree">Root</span>
    </div>
    <div class="bento-cell__body"><p style="margin:0;">Dominant -- 4x area</p></div>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__header">
      <span class="bento-cell__title">1x1</span>
      <span class="cell-badge">Info</span>
    </div>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__header">
      <span class="bento-cell__title">1x1</span>
      <span class="cell-badge">Tip</span>
    </div>
  </div>
</div>`,

  'File Tree Weight Differentiation from Callouts': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="file-tree">
    <span class="file-tree__item file-tree__item--dir">src/</span>
    <span class="file-tree__item file-tree__item--file">  index.ts</span>
    <span class="file-tree__item file-tree__item--highlight">  App.tsx</span>
  </div>
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);text-align:center;">vs</div>
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Both use 4px left-border but differ in border-color, background, and font</p></div>
  </div>
</div>`,

  'File Tree Item Type Encoding': `<div class="file-tree">
  <span class="file-tree__item file-tree__item--dir">my-react-app/</span>
  <span class="file-tree__item file-tree__item--dir">  src/</span>
  <span class="file-tree__item file-tree__item--dir">    components/</span>
  <span class="file-tree__item file-tree__item--file">      Button.tsx</span>
  <span class="file-tree__item file-tree__item--file">      Card.tsx</span>
  <span class="file-tree__item file-tree__item--highlight">    App.tsx</span>
  <span class="file-tree__item file-tree__item--file">    index.ts</span>
</div>
<div style="margin-top:8px;display:flex;gap:16px;">
  <span style="font-weight:600;color:#1A1A1A;font-size:var(--type-meta);">dir (bold)</span>
  <span style="color:#666666;font-size:var(--type-meta);">file (gray)</span>
  <span style="color:#E83025;font-weight:600;font-size:var(--type-meta);">highlight (red)</span>
</div>`,

  'Callout Accent Color Temperature System': `<div style="display:flex;flex-direction:column;gap:6px;">
  <div class="callout callout--note" style="margin:0;padding:10px 16px;">
    <div class="callout__label">Note</div>
    <div class="callout__body"><p style="margin:0;">Blue -- neutral/informational</p></div>
  </div>
  <div class="callout callout--tip" style="margin:0;padding:10px 16px;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Green -- warm/constructive</p></div>
  </div>
  <div class="callout callout--gotcha" style="margin:0;padding:10px 16px;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body"><p style="margin:0;">Coral -- cold/warning</p></div>
  </div>
  <div class="callout callout--challenge" style="margin:0;padding:10px 16px;">
    <div class="callout__label">Challenge</div>
    <div class="callout__body"><p style="margin:0;">Amber -- caution/challenge</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;padding:10px 16px;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Purple -- essence/philosophical (serif italic)</p></div>
  </div>
</div>`,

  'Essence Callout Serif Register Shift': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Inter sans-serif: practical advice register</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Instrument Serif italic: the archivist speaks -- only callout variant that changes body font</p></div>
  </div>
</div>`,

  'Responsive Bento Collapse Sequence': `<div style="display:flex;flex-direction:column;gap:12px;">
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Desktop (1440px): 3-column grid</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;grid-column:span 2;grid-row:span 2;text-align:center;"><span style="font-size:var(--type-meta);">2x2</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
  </div>
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Tablet (960px): 2-column</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;grid-column:span 2;text-align:center;"><span style="font-size:var(--type-meta);">2x1</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
  </div>
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);">Mobile (768px): 1-column stack</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;"><span style="font-size:var(--type-meta);">1x1</span></div>
  </div>
</div>`,

  'Header (Full-Bleed Dark)': `<div class="header-dark">
  <div class="meta-line" style="margin-bottom:8px;">
    <span>EXPLORATION CD-003</span>
    <span>COMBINATION: FILE TREE WITH CALLOUTS</span>
    <span class="version-badge">v1</span>
  </div>
  <h1>File Tree with Callouts</h1>
  <p class="subtitle">How hierarchical file structure and advisory callouts coexist in an ISLANDS density / SPATIAL organization layout.</p>
</div>`,

  'Bento Cell': `<div class="bento-cell">
  <div class="bento-cell__header">
    <span class="bento-cell__title">Project File Tree</span>
    <span class="cell-badge cell-badge--file-tree">Root</span>
  </div>
  <div class="bento-cell__body">
    <p style="margin:0;">Cell content with title + badge header and flexible body slot.</p>
  </div>
</div>`,

  'Bento Grid Layout': `<div class="bento-grid">
  <div class="bento-cell bento-item--2x2" style="min-height:60px;">
    <div class="bento-cell__header">
      <span class="bento-cell__title">File Tree</span>
      <span class="cell-badge cell-badge--file-tree">Root</span>
    </div>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__header">
      <span class="bento-cell__title">Context</span>
      <span class="cell-badge">Info</span>
    </div>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__header">
      <span class="bento-cell__title">Best Practice</span>
      <span class="cell-badge">Tip</span>
    </div>
  </div>
  <div class="bento-cell bento-item--2x1">
    <div class="bento-cell__header">
      <span class="bento-cell__title">Code Snippet</span>
      <span class="cell-badge">Config</span>
    </div>
  </div>
  <div class="bento-cell">
    <div class="bento-cell__header">
      <span class="bento-cell__title">Warning</span>
      <span class="cell-badge">Gotcha</span>
    </div>
  </div>
</div>`,

  'File Tree': `<div class="file-tree">
  <span class="file-tree__item file-tree__item--dir">my-react-app/</span>
  <span class="file-tree__item file-tree__item--dir">  src/</span>
  <span class="file-tree__item file-tree__item--dir">    components/</span>
  <span class="file-tree__item file-tree__item--file">      Button.tsx</span>
  <span class="file-tree__item file-tree__item--file">      Card.tsx</span>
  <span class="file-tree__item file-tree__item--highlight">    App.tsx <span class="file-tree__comment">&larr; entry point</span></span>
  <span class="file-tree__item file-tree__item--file">    index.ts</span>
  <span class="file-tree__item file-tree__item--dir">  public/</span>
  <span class="file-tree__item file-tree__item--file">    index.html</span>
  <span class="file-tree__item file-tree__item--file">  package.json</span>
</div>`,

  'Callout (5-Variant System)': `<div style="display:flex;flex-direction:column;gap:8px;">
  <div class="callout callout--note" style="margin:0;">
    <div class="callout__label">Note</div>
    <div class="callout__body"><p style="margin:0;">Blue -- informational context</p></div>
  </div>
  <div class="callout callout--tip" style="margin:0;">
    <div class="callout__label">Tip</div>
    <div class="callout__body"><p style="margin:0;">Green -- constructive advice</p></div>
  </div>
  <div class="callout callout--gotcha" style="margin:0;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body"><p style="margin:0;">Coral -- warning/danger</p></div>
  </div>
  <div class="callout callout--challenge" style="margin:0;">
    <div class="callout__label">Challenge</div>
    <div class="callout__body"><p style="margin:0;">Amber -- reader challenge</p></div>
  </div>
  <div class="callout callout--essence" style="margin:0;">
    <div class="callout__label">Essence</div>
    <div class="callout__body"><p style="margin:0;">Purple -- philosophical truth (serif italic)</p></div>
  </div>
</div>`,

  'Choreography Section': `<div class="choreo-section" style="gap:24px;">
  <div class="core-abstraction" style="padding:16px;">
    <h3 class="core-abstraction__title" style="font-size:var(--type-subsection);margin-bottom:8px;">Framing Component</h3>
    <div class="core-abstraction__body"><p style="margin:0;">Conceptual foundation</p></div>
  </div>
  <div class="choreo-hub" style="padding:16px;">
    <h3 class="choreo-hub__title" style="font-size:var(--type-subsection);margin-bottom:8px;">Hub: Comparison</h3>
    <p style="margin:0;font-size:var(--type-meta);color:var(--color-text-secondary);">Decision matrix here</p>
  </div>
  <div style="font-family:var(--font-mono);font-size:var(--type-meta);color:var(--color-text-secondary);text-align:center;">Spokes radiate below</div>
</div>`,

  'Choreography Hub': `<div class="choreo-hub">
  <h3 class="choreo-hub__title">Architecture Pattern Comparison</h3>
  <table class="decision-matrix">
    <thead>
      <tr><th>Criterion</th><th>Feature-Based</th><th>Layer-Based</th></tr>
    </thead>
    <tbody>
      <tr><td>Organization</td><td class="recommended">By feature</td><td>By type</td></tr>
      <tr><td>Scalability</td><td class="recommended">High</td><td>Medium</td></tr>
    </tbody>
  </table>
</div>`,

  'Choreography Spoke': `<div class="choreo-spokes">
  <div class="choreo-spoke">
    <div class="choreo-spoke__label">Spoke 1 -- Recommended</div>
    <h3 class="choreo-spoke__title">Feature-Based Structure</h3>
    <div class="file-tree" style="font-size:11px;">
      <span class="file-tree__item file-tree__item--dir">features/</span>
      <span class="file-tree__item file-tree__item--dir">  auth/</span>
      <span class="file-tree__item file-tree__item--file">    Login.tsx</span>
    </div>
  </div>
  <div class="choreo-spoke">
    <div class="choreo-spoke__label">Spoke 2 -- Traditional</div>
    <h3 class="choreo-spoke__title">Layer-Based Structure</h3>
    <div class="file-tree" style="font-size:11px;">
      <span class="file-tree__item file-tree__item--dir">components/</span>
      <span class="file-tree__item file-tree__item--dir">services/</span>
      <span class="file-tree__item file-tree__item--dir">utils/</span>
    </div>
  </div>
</div>`,

  'Core Abstraction': `<div class="core-abstraction">
  <h3 class="core-abstraction__title">The Architecture Decision</h3>
  <div class="core-abstraction__body">
    <p>A React application's file structure is not arbitrary. It encodes the team's understanding of where boundaries exist between concerns.</p>
    <p style="margin-bottom:0;">The decision is architectural, not aesthetic.</p>
  </div>
</div>`,

  'Decision Matrix': `<div class="choreo-hub" style="padding:24px;">
  <table class="decision-matrix">
    <thead>
      <tr><th>Criterion</th><th>Feature-Based</th><th>Layer-Based</th><th>Domain-Driven</th></tr>
    </thead>
    <tbody>
      <tr><td>Organization</td><td class="recommended">By feature</td><td>By type</td><td>By domain</td></tr>
      <tr><td>Scalability</td><td class="recommended">High</td><td>Medium</td><td class="recommended">High</td></tr>
      <tr><td>Team Size</td><td class="recommended">Any</td><td>Small</td><td>Large</td></tr>
    </tbody>
  </table>
</div>`,

  'Reasoning Block': `<div class="reasoning">
  <h3 class="reasoning__title">Decision Framework</h3>
  <div class="reasoning__body">
    <p><strong>Start with feature-based.</strong> It scales naturally and keeps related code together.</p>
    <p><strong>Evolve to domain-driven</strong> when your application outgrows a single team's mental model.</p>
    <p style="margin-bottom:0;"><strong>Avoid layer-based</strong> for anything beyond small applications -- it fractures features across directories.</p>
  </div>
</div>`,
};
