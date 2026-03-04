// ═══════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-004 (Spiral)
// ═══════════════════════════════════════════════════════════════════════
const cssAd004 = `
.preview-ad004 {
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
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px;
  --accent-blue: #4A90D9; --accent-green: #4A9D6B;
  --accent-coral: #C97065; --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --syntax-keyword: #E83025; --syntax-string: #6B9B7A; --syntax-comment: #666666;
  --syntax-function: #4A7C9B; --syntax-type: #C97065; --syntax-number: #D97706;
  --syntax-punctuation: #E0D5C5;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-ad004 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-ad004 h2, .preview-ad004 h3 { all: unset; display: block; }

/* Spiral Map */
.preview-ad004 .spiral-map {
  display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px; max-width: 320px;
}
.preview-ad004 .spiral-map__stratum {
  padding: 8px 12px; font-family: var(--font-mono); font-size: 0.75rem;
  color: var(--color-text-secondary); text-align: center; background: var(--color-text);
}
.preview-ad004 .spiral-map__stratum--established { border-bottom: 4px solid var(--color-primary); color: var(--color-background); }
.preview-ad004 .spiral-map__stratum--probable { border-bottom: 3px solid var(--color-border); }
.preview-ad004 .spiral-map__stratum--speculative { border-bottom: 3px solid var(--color-border-subtle); }
.preview-ad004 .spiral-map__stratum--open { border-bottom: 1px solid var(--color-border-subtle); }

/* Confidence Badge */
.preview-ad004 .confidence-badge {
  display: inline-block; font-family: var(--font-mono); font-size: 0.75rem;
  font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 12px;
}
.preview-ad004 .confidence-badge--established { border: 3px solid var(--color-primary); color: var(--color-primary); }
.preview-ad004 .confidence-badge--probable { border: 3px solid var(--color-border); color: var(--color-text-secondary); }
.preview-ad004 .confidence-badge--speculative { border: 1px solid var(--color-border); color: var(--color-text-secondary); }
.preview-ad004 .confidence-badge--open { border: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); }

/* Stratum Transition */
.preview-ad004 .stratum-transition {
  height: 48px; border-top: 3px solid var(--color-border); background: var(--color-zone-breathing);
  display: flex; align-items: center; padding: 24px 32px;
}
.preview-ad004 .stratum-transition__label {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
}

/* Metadata Panel */
.preview-ad004 .metadata-panel {
  background: var(--color-zone-sparse); border: 3px solid var(--color-border); padding: 24px;
}
.preview-ad004 .metadata-panel__title {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: 16px; padding-bottom: 8px; border-bottom: 3px solid var(--color-border);
}
.preview-ad004 .metadata-panel__item {
  display: flex; justify-content: space-between; padding: 8px 0;
  border-bottom: 1px solid var(--color-border-subtle); font-size: 0.875rem;
}
.preview-ad004 .metadata-panel__key { font-family: var(--font-mono); color: var(--color-text-secondary); }
.preview-ad004 .metadata-panel__value { font-family: var(--font-mono); font-weight: 500; }

/* Meta Line */
.preview-ad004 .meta-line {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
  display: flex; align-items: center; gap: 16px;
}

/* Version Badge */
.preview-ad004 .version-badge {
  display: inline-block; font-family: var(--font-mono); font-size: 0.75rem;
  font-weight: 500; letter-spacing: 0.05em; padding: 2px 8px;
  border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary);
}

/* RAR Block */
.preview-ad004 .rar-block {
  background: var(--color-zone-sparse); border: 3px solid var(--color-border); padding: 32px;
}
.preview-ad004 .rar-block__title {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: 24px; padding-bottom: 8px; border-bottom: 3px solid var(--color-border);
}
.preview-ad004 .rar-block dt {
  font-family: var(--font-mono); font-size: 0.875rem; font-weight: 500;
  color: var(--color-text-secondary); margin-top: 16px;
}
.preview-ad004 .rar-block dd {
  font-family: var(--font-body); font-size: 1rem; margin-left: 24px; margin-bottom: 8px;
}

/* Page Footer */
.preview-ad004 .page-footer {
  border-top: 3px solid var(--color-border); padding: 32px 0; text-align: center;
}
.preview-ad004 .page-footer__label {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
}

/* Stratum */
.preview-ad004 .stratum { border-left-style: solid; border-left-color: var(--color-border); }
.preview-ad004 .stratum--established {
  border-left-width: 4px; border-left-color: var(--color-primary);
  padding: 24px 24px 32px 32px; background: var(--color-zone-dense);
}
.preview-ad004 .stratum--probable {
  border-left-width: 3px; border-left-color: var(--color-border);
  padding: 32px 24px 32px 40px; background: var(--color-zone-sparse);
}
.preview-ad004 .stratum--speculative {
  border-left-width: 3px; border-left-color: var(--color-border-subtle);
  padding: 32px 24px 32px 48px; background: var(--color-zone-breathing);
}
.preview-ad004 .stratum--open {
  border-left-width: 1px; border-left-color: var(--color-border-subtle);
  padding: 32px 24px 32px 64px; background: var(--color-background);
}
.preview-ad004 .stratum__header {
  display: flex; align-items: baseline; gap: 16px; margin-bottom: 24px;
}
.preview-ad004 .stratum__title { font-family: var(--font-display); font-size: 1.625rem; line-height: 1.2; }

/* Spiral Container */
.preview-ad004 .spiral-container { display: flex; flex-direction: column; gap: 0; }

/* Comparison Grid */
.preview-ad004 .comparison-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin: 32px 0;
}
.preview-ad004 .comparison-grid__panel {
  padding: 24px; border: 3px solid var(--color-border);
}
.preview-ad004 .comparison-grid__panel--established {
  background: var(--color-zone-dense); border-left: 4px solid var(--color-primary);
}
.preview-ad004 .comparison-grid__panel--speculative {
  background: var(--color-zone-breathing); border-left: 4px solid var(--accent-amber);
}
.preview-ad004 .comparison-grid__title {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: 16px;
}

/* Pull Quote */
.preview-ad004 .pull-quote {
  font-family: var(--font-display); font-style: italic; font-size: 1.625rem;
  line-height: 1.3; color: var(--color-text); border-left: 4px solid var(--color-primary);
  padding: 24px 32px; background: var(--color-zone-sparse);
}
.preview-ad004 .pull-quote__attribution {
  display: block; font-family: var(--font-body); font-style: normal;
  font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--color-text-secondary); margin-top: 12px;
}

/* Callout */
.preview-ad004 .callout {
  border-left: 4px solid var(--accent-blue); padding: 24px 20px; background: var(--color-zone-sparse);
}
.preview-ad004 .callout__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
}
.preview-ad004 .callout__body { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }
.preview-ad004 .callout--note { border-left-color: var(--accent-blue); }
.preview-ad004 .callout--note .callout__label { color: var(--accent-blue); }
.preview-ad004 .callout--tip { border-left-color: var(--accent-green); }
.preview-ad004 .callout--tip .callout__label { color: var(--accent-green); }
.preview-ad004 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-ad004 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-ad004 .callout--caution { border-left-color: var(--accent-amber); }
.preview-ad004 .callout--caution .callout__label { color: var(--accent-amber); }
.preview-ad004 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad004 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad004 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Open Questions */
.preview-ad004 .open-questions { list-style: none; padding: 0; }
.preview-ad004 .open-questions li {
  padding: 16px 0; padding-left: 40px; text-indent: -40px;
  border-bottom: 1px solid var(--color-border-subtle); font-size: 1rem; line-height: 1.7;
}
.preview-ad004 .open-questions li::before {
  content: "?"; display: inline-block; width: 32px;
  font-family: var(--font-display); font-style: italic; font-size: 1.625rem;
  color: var(--color-text-secondary); vertical-align: middle; margin-right: 8px;
}

/* Header (dark) */
.preview-ad004 .header-dark {
  background: var(--color-text); color: var(--color-background);
  border-bottom: 3px solid var(--color-primary); padding: 32px;
}
.preview-ad004 .header-dark h1 {
  font-family: var(--font-display); font-size: 2.5rem; color: var(--color-background);
  margin-bottom: 16px; line-height: 1.15;
}
.preview-ad004 .header-dark .subtitle {
  font-family: var(--font-body); color: var(--color-text-secondary); line-height: 1.7;
}

/* Table */
.preview-ad004 table { width: 100%; border-collapse: collapse; }
.preview-ad004 th {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: 12px 16px; border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad004 td {
  font-family: var(--font-body); font-size: 1rem; padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-subtle); vertical-align: top;
}

/* Code Block */
.preview-ad004 pre {
  background: var(--color-text); color: var(--color-background);
  border: 3px solid var(--color-border); padding: 24px 32px;
  font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5; overflow-x: auto;
}
.preview-ad004 pre code { background: none; border: none; padding: 0; font-size: inherit; }
.preview-ad004 .kw { color: var(--syntax-keyword); }
.preview-ad004 .st { color: var(--syntax-string); }
.preview-ad004 .cm { color: var(--syntax-comment); }
.preview-ad004 .fn { color: var(--syntax-function); }

/* Inline Code */
.preview-ad004 code:not(pre code) {
  font-family: var(--font-mono); font-size: 0.9em;
  background: var(--color-border-subtle); padding: 2px 6px;
  border: 1px solid var(--color-border);
}
`;

// ═══════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-004
// ═══════════════════════════════════════════════════════════════════════
const previewsAd004 = {

  'Spiral Map': `<nav class="spiral-map" style="margin:8px 0">
  <div class="spiral-map__stratum spiral-map__stratum--established">Bedrock</div>
  <div class="spiral-map__stratum spiral-map__stratum--probable">Subsoil</div>
  <div class="spiral-map__stratum spiral-map__stratum--speculative">Topsoil</div>
  <div class="spiral-map__stratum spiral-map__stratum--open">Atmos</div>
</nav>`,

  'Confidence Badge': `<div style="display:flex; gap:12px; flex-wrap:wrap; padding:8px 0">
  <span class="confidence-badge confidence-badge--established">Established</span>
  <span class="confidence-badge confidence-badge--probable">Probable</span>
  <span class="confidence-badge confidence-badge--speculative">Speculative</span>
  <span class="confidence-badge confidence-badge--open">Open</span>
</div>`,

  'Stratum Transition Zone': `<div class="stratum-transition">
  <span class="stratum-transition__label">Descending: Bedrock &rarr; Subsoil</span>
</div>`,

  'Metadata Panel': `<div class="metadata-panel">
  <div class="metadata-panel__title">Stratum Metadata</div>
  <div class="metadata-panel__item"><span class="metadata-panel__key">Confidence</span><span class="metadata-panel__value">Established</span></div>
  <div class="metadata-panel__item"><span class="metadata-panel__key">Border Weight</span><span class="metadata-panel__value">4px</span></div>
  <div class="metadata-panel__item"><span class="metadata-panel__key">Evidence Count</span><span class="metadata-panel__value">12</span></div>
  <div class="metadata-panel__item"><span class="metadata-panel__key">Stability</span><span class="metadata-panel__value">Locked</span></div>
</div>`,

  'Meta Line': `<div class="meta-line" style="color:var(--color-text-secondary)">
  <span>EXPLORATION AD-004</span>
  <span>AXIS: SPIRAL</span>
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Version Badge': `<div style="padding:8px 0">
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Research Application Record (RAR)': `<div class="rar-block">
  <div class="rar-block__title">Research Application Record</div>
  <dl>
    <dt>Research Applied</dt><dd>R4-059, R4-060, R4-062, R4-063</dd>
    <dt>Findings</dt><dd>AD-F-013, AD-F-014, AD-F-015, AD-F-016</dd>
    <dt>Soul Compliance</dt><dd>5/5 PASS</dd>
  </dl>
</div>`,

  'Page Footer': `<div class="page-footer">
  <span class="page-footer__label">AD-004 Spiral &mdash; Bedrock to Atmosphere</span>
</div>`,

  'Border-Weight Confidence Gradient': `<div style="display:flex; flex-direction:column; gap:0">
  <div style="border-left:4px solid var(--color-primary); padding:12px 16px; background:var(--color-zone-dense)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">ESTABLISHED &mdash; 4px primary</span>
  </div>
  <div style="border-left:3px solid var(--color-border); padding:12px 16px; background:var(--color-zone-sparse)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">PROBABLE &mdash; 3px border</span>
  </div>
  <div style="border-left:3px solid var(--color-border-subtle); padding:12px 16px; background:var(--color-zone-breathing)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">SPECULATIVE &mdash; 3px subtle</span>
  </div>
  <div style="border-left:1px solid var(--color-border-subtle); padding:12px 16px; background:var(--color-background)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">OPEN &mdash; 1px subtle</span>
  </div>
</div>`,

  'Confidence-Proportional Spacing (CRESCENDO Whitespace)': `<div style="display:flex; flex-direction:column; gap:0">
  <div style="border-left:4px solid var(--color-primary); padding:24px 24px 32px 32px; background:var(--color-zone-dense)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Established: tight (24/24/32/32)</span>
  </div>
  <div style="border-left:3px solid var(--color-border); padding:32px 24px 32px 40px; background:var(--color-zone-sparse)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Probable: moderate (32/24/32/40)</span>
  </div>
  <div style="border-left:3px solid var(--color-border-subtle); padding:32px 24px 32px 48px; background:var(--color-zone-breathing)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Speculative: generous (32/24/32/48)</span>
  </div>
  <div style="border-left:1px solid var(--color-border-subtle); padding:32px 24px 32px 64px; background:var(--color-background)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Open: expansive (32/24/32/64)</span>
  </div>
</div>`,

  'Background Zone Shift': `<div style="display:flex; flex-direction:column; gap:0">
  <div style="background:#FFFFFF; padding:16px; border-left:4px solid var(--color-primary)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Dense: #FFFFFF</span>
  </div>
  <div style="background:#FEF9F5; padding:16px; border-left:3px solid var(--color-border)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Sparse: #FEF9F5</span>
  </div>
  <div style="background:#FAF5ED; padding:16px; border-left:3px solid var(--color-border-subtle)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Breathing: #FAF5ED</span>
  </div>
  <div style="background:#FEF9F5; padding:16px; border-left:1px solid var(--color-border-subtle)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Background: #FEF9F5</span>
  </div>
</div>`,

  'Typography Scale Degradation': `<div style="display:flex; flex-direction:column; gap:16px; padding:8px 0">
  <div><span style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2">Established: Dense h3 Subsections</span>
    <p style="font-size:0.875rem;color:var(--color-text-secondary);margin-top:4px">Most headings, densest body text</p></div>
  <div><span style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2;font-style:italic">Probable: Moderate Subsections</span>
    <p style="font-size:0.875rem;color:var(--color-text-secondary);margin-top:4px">Fewer headings, moderate content</p></div>
  <div><span style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2;font-style:italic">Open: Sparse Content</span>
    <p style="font-size:0.875rem;color:var(--color-text-secondary);margin-top:4px">Fewest headings, sparse text</p></div>
</div>`,

  'Pull Quote Confidence Modulation': `<div style="display:flex;flex-direction:column;gap:16px">
  <div class="pull-quote">
    <span style="font-family:var(--font-display);font-style:italic;font-size:1.25rem">The spiral's angular form IS the geological encoding.</span>
    <span class="pull-quote__attribution">Subsoil stratum confidence marker</span>
  </div>
  <div class="pull-quote" style="border-left-color:var(--accent-amber)">
    <span style="font-family:var(--font-display);font-style:italic;font-size:1.25rem">These questions may never have definitive answers.</span>
    <span class="pull-quote__attribution">Open stratum confidence marker</span>
  </div>
</div>`,

  'Open Question Mark Prefix': `<ul class="open-questions">
  <li>Can a 6th scale exist beyond page-level fractal?</li>
  <li>Does the angular approximation lose meaning at very small sizes?</li>
</ul>`,

  'Responsive Spiral Collapse': `<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary);padding:12px;border:1px solid var(--color-border-subtle)">
  <div style="margin-bottom:8px">@media (max-width: 769px)</div>
  <div style="display:flex;gap:16px;flex-wrap:wrap">
    <span>grid &rarr; 1fr</span>
    <span>spiral-map &rarr; 2x2</span>
    <span>padding reduces</span>
    <span>indent gradient preserved</span>
  </div>
</div>`,

  'Selection Styling': `<div style="padding:8px 0">
  <span style="background:var(--color-primary);color:var(--color-background);padding:2px 6px">Selected text</span>
  <span style="color:var(--color-text-secondary);font-size:0.875rem;margin-left:8px">::selection { background: #E83025; color: #FEF9F5 }</span>
</div>`,

  'Callout Essence Serif Voice': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="callout callout--note">
    <div class="callout__label">Note</div>
    <div class="callout__body">Standard body text in Inter (sans-serif).</div>
  </div>
  <div class="callout callout--essence">
    <div class="callout__label">Essence</div>
    <div class="callout__body">Archivist speaks in Instrument Serif italic.</div>
  </div>
</div>`,

  'Stratum': `<div class="spiral-container">
  <div class="stratum stratum--established">
    <div class="stratum__header">
      <span class="stratum__title">Bedrock</span>
      <span class="confidence-badge confidence-badge--established">Established</span>
    </div>
    <p style="font-size:1rem;line-height:1.7;max-width:70ch">Core principles confirmed through multiple explorations.</p>
  </div>
  <div class="stratum stratum--probable">
    <div class="stratum__header">
      <span class="stratum__title">Subsoil</span>
      <span class="confidence-badge confidence-badge--probable">Probable</span>
    </div>
    <p style="font-size:1rem;line-height:1.7;max-width:70ch">Strong evidence supporting these patterns.</p>
  </div>
</div>`,

  'Spiral Container': `<div class="spiral-container" style="border:1px solid var(--color-border-subtle)">
  <div style="border-left:4px solid var(--color-primary);padding:16px;background:var(--color-zone-dense)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Stratum 1</span>
  </div>
  <div style="border-left:3px solid var(--color-border);padding:16px;background:var(--color-zone-sparse)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Stratum 2</span>
  </div>
  <div style="border-left:1px solid var(--color-border-subtle);padding:16px;background:var(--color-background)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Stratum 3</span>
  </div>
</div>`,

  'Comparison Grid': `<div class="comparison-grid">
  <div class="comparison-grid__panel comparison-grid__panel--established">
    <div class="comparison-grid__title">Established Approach</div>
    <p style="font-size:0.875rem;line-height:1.7">Proven pattern with strong evidence base.</p>
  </div>
  <div class="comparison-grid__panel comparison-grid__panel--speculative">
    <div class="comparison-grid__title">Speculative Approach</div>
    <p style="font-size:0.875rem;line-height:1.7">Hypothetical pattern requiring validation.</p>
  </div>
</div>`,

  'Pull Quote': `<div class="pull-quote">
  <span style="font-family:var(--font-display);font-style:italic;font-size:1.625rem;line-height:1.3">The angular spiral transforms into nested rectangles with right-angle boundaries.</span>
  <span class="pull-quote__attribution">Bedrock stratum waypoint</span>
</div>`,

  'Callout': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="callout callout--note"><div class="callout__label">Note</div><div class="callout__body">Informational context.</div></div>
  <div class="callout callout--tip"><div class="callout__label">Tip</div><div class="callout__body">Constructive guidance.</div></div>
  <div class="callout callout--caution"><div class="callout__label">Caution</div><div class="callout__body">Proceed with care.</div></div>
  <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">The spiral is geological.</div></div>
</div>`,

  'Open Questions List': `<ul class="open-questions">
  <li>Can a 6th fractal scale exist beyond page-level?</li>
  <li>Does the angular approximation lose meaning at very small viewport sizes?</li>
  <li>Is the proportional equivalence mechanism a 3rd way the unification manifests?</li>
</ul>`,

  'Header': `<div class="header-dark">
  <div class="meta-line" style="color:var(--color-text-secondary)">
    <span>EXPLORATION AD-004</span>
    <span>AXIS: SPIRAL</span>
    <span class="version-badge">v1 enriched</span>
  </div>
  <h1 style="font-family:var(--font-display);font-size:2.5rem;color:var(--color-background);margin-bottom:16px;line-height:1.15">AD-004: The Angular Spiral</h1>
  <p class="subtitle" style="font-family:var(--font-body);color:var(--color-text-secondary);line-height:1.7">Can a spiral be geological? Golden-ratio nesting in angular form.</p>
</div>`,

  'Table': `<table>
  <thead><tr><th>Pattern</th><th>Success Rate</th><th>Evidence</th></tr></thead>
  <tbody>
    <tr><td>Border-weight gradient</td><td>4/4 strata</td><td>Strong</td></tr>
    <tr><td>Spacing crescendo</td><td>4/4 strata</td><td>Strong</td></tr>
    <tr><td>Zone background shift</td><td>4/4 strata</td><td>Moderate</td></tr>
  </tbody>
</table>`,

  'Code Block': `<pre><code><span class="cm">/* Stratum border-weight gradient */</span>
<span class="kw">.stratum--established</span> <span class="pu">{</span>
  <span class="fn">border-left-width</span>: <span class="nu">4px</span>;
  <span class="fn">border-left-color</span>: <span class="kw">var(--color-primary)</span>;
<span class="pu">}</span></code></pre>`,

  'Inline Code': `<p style="font-size:1rem;line-height:1.7">The <code>border-left-width</code> property uses <code>4px</code> for established, <code>3px</code> for probable, and <code>1px</code> for open strata.</p>`,
};


// ═══════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-005 (Choreography)
// ═══════════════════════════════════════════════════════════════════════
const cssAd005 = `
.preview-ad005 {
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
  --type-page: 2.5rem; --type-section: 1.625rem; --type-subsection: 1.375rem;
  --type-body: 1rem; --type-code: 0.875rem; --type-meta: 0.75rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px;
  --accent-blue: #4A90D9; --accent-green: #4A9D6B;
  --accent-coral: #C97065; --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  --axis-zone-primary: #FFFFFF; --axis-zone-secondary: #FEF9F5;
  --axis-zone-transition: #FAF5ED; --transition-standard: 0.3s ease;
  font-family: var(--font-body); color: var(--color-text);
  line-height: 1.7; font-size: 1rem; background: var(--color-background); border-radius: 0;
}
.preview-ad005 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-ad005 h2, .preview-ad005 h3 { all: unset; display: block; }

/* Meta Line + Version Badge */
.preview-ad005 .meta-line {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
  display: flex; align-items: center; gap: 16px;
}
.preview-ad005 .version-badge {
  display: inline-block; font-family: var(--font-mono); font-size: 0.75rem;
  font-weight: 500; letter-spacing: 0.05em; padding: 2px 8px;
  border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary);
}

/* Progress Bar */
.preview-ad005 .progress-bar { display: flex; gap: 4px; }
.preview-ad005 .progress-segment { height: 8px; flex: 1; background: var(--color-border-subtle); }
.preview-ad005 .progress-segment--active { background: var(--color-primary); }
.preview-ad005 .progress-segment--hub { flex: 1; }
.preview-ad005 .progress-segment--spoke { flex: 3; }

/* Breadcrumb */
.preview-ad005 .breadcrumb {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.05em; color: var(--color-text-secondary);
  display: flex; align-items: center; gap: 8px;
}
.preview-ad005 .breadcrumb__separator { color: var(--color-primary); }
.preview-ad005 .breadcrumb__current { color: var(--color-text); font-weight: 600; }

/* Axis Transition */
.preview-ad005 .axis-transition {
  background: var(--axis-zone-transition); clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  padding: 48px 24px; text-align: center;
}
.preview-ad005 .axis-transition--ascending { clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%); }
.preview-ad005 .axis-transition__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 8px;
}
.preview-ad005 .axis-transition__title {
  font-family: var(--font-display); font-size: 1.625rem; font-style: italic;
}

/* Axis Interstitial */
.preview-ad005 .axis-interstitial {
  background: var(--axis-zone-transition); padding: 32px 24px;
  border-top: 3px solid var(--color-border); border-bottom: 3px solid var(--color-border); text-align: center;
}
.preview-ad005 .axis-interstitial__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
}

/* Chapter Divider */
.preview-ad005 .chapter-divider { border-top: 3px solid var(--color-border); margin: 32px 0; }

/* Page Closing */
.preview-ad005 .page-closing {
  border-top: 3px solid var(--color-border); padding: 48px 24px; text-align: center;
}
.preview-ad005 .page-closing__rule { width: 80px; height: 3px; background: var(--color-primary); margin: 0 auto 24px; }
.preview-ad005 .page-closing__mark {
  font-family: var(--font-display); font-style: italic; font-size: 1rem; color: var(--color-text-secondary);
}

/* Density Table */
.preview-ad005 table { width: 100%; border-collapse: collapse; }
.preview-ad005 th {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: 12px 16px; border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad005 td {
  font-family: var(--font-body); font-size: 1rem; padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-subtle); vertical-align: top;
}
.preview-ad005 .density-table td:first-child {
  font-family: var(--font-mono); font-size: 0.875rem; font-weight: 500; white-space: nowrap;
}

/* Territory Tile */
.preview-ad005 .territory-tile {
  background: var(--axis-zone-primary); border: 3px solid var(--color-border);
  padding: 24px; display: flex; flex-direction: column; gap: 12px;
  transition: border-color 0.3s ease;
}
.preview-ad005 .territory-tile:hover { border-color: var(--color-primary); }
.preview-ad005 .territory-tile--featured {
  border-left: 4px solid var(--color-primary); position: relative;
}
.preview-ad005 .territory-tile--featured::after {
  content: ''; position: absolute; top: 4px; left: 4px;
  width: 100%; height: 100%; border: 3px solid var(--offset-color);
  z-index: -1; background: var(--color-background);
}
.preview-ad005 .territory-tile__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
}
.preview-ad005 .territory-tile__title { font-family: var(--font-display); font-size: 1.375rem; line-height: 1.2; }
.preview-ad005 .territory-tile--featured .territory-tile__title { font-size: 1.625rem; }
.preview-ad005 .territory-tile__desc {
  font-family: var(--font-body); font-size: 1rem; color: var(--color-text-secondary); line-height: 1.7;
}
.preview-ad005 .territory-tile__meta {
  font-family: var(--font-mono); font-size: 0.875rem; color: var(--color-text-secondary); margin-top: auto;
}

/* Hub Grid */
.preview-ad005 .hub-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

/* Spoke Content */
.preview-ad005 .spoke-content { background: var(--axis-zone-primary); padding: 48px 24px; }
.preview-ad005 .spoke-section { margin-bottom: 32px; }

/* Callout */
.preview-ad005 .callout { border-left: 4px solid var(--accent-blue); padding: 24px 20px; background: var(--color-zone-sparse); }
.preview-ad005 .callout__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
}
.preview-ad005 .callout__body { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }
.preview-ad005 .callout--note .callout__label { color: var(--accent-blue); }
.preview-ad005 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad005 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad005 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Breathing Zone */
.preview-ad005 .breathing-zone {
  background: var(--axis-zone-transition); padding: 48px 24px;
  border-top: 3px solid var(--color-border); border-bottom: 3px solid var(--color-border);
}

/* Code Block */
.preview-ad005 pre {
  background: var(--color-text); color: var(--color-background);
  border: 3px solid var(--color-border); padding: 24px 32px;
  font-family: var(--font-mono); font-size: 0.875rem; line-height: 1.5; overflow-x: auto;
}
.preview-ad005 pre code { background: none; border: none; padding: 0; }

/* Code Explanation */
.preview-ad005 .code-explanation { display: flex; flex-direction: column; gap: 24px; }

/* Header dark */
.preview-ad005 .header-dark {
  background: var(--color-text); color: var(--color-background);
  border-bottom: 3px solid var(--color-primary); padding: 32px;
}
.preview-ad005 .header-dark h1 {
  font-family: var(--font-display); font-size: 2.5rem; color: var(--color-background);
  margin-bottom: 16px; line-height: 1.15;
}
`;

// ═══════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-005
// ═══════════════════════════════════════════════════════════════════════
const previewsAd005 = {

  'Meta Line': `<div class="meta-line" style="color:var(--color-text-secondary)">
  <span>EXPLORATION AD-005</span>
  <span>AXIS: CHOREOGRAPHY</span>
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Progress Bar': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="progress-bar">
    <div class="progress-segment progress-segment--hub progress-segment--active"></div>
    <div class="progress-segment progress-segment--spoke"></div>
    <div class="progress-segment progress-segment--spoke"></div>
    <div class="progress-segment progress-segment--spoke"></div>
  </div>
  <div class="progress-bar">
    <div class="progress-segment progress-segment--hub"></div>
    <div class="progress-segment progress-segment--spoke progress-segment--active"></div>
    <div class="progress-segment progress-segment--spoke"></div>
    <div class="progress-segment progress-segment--spoke"></div>
  </div>
  <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Hub (narrow) vs Spoke (wide) proportional widths</div>
</div>`,

  'Breadcrumb Navigation': `<div class="breadcrumb">
  <span>Hub</span>
  <span class="breadcrumb__separator">&#9656;</span>
  <span class="breadcrumb__current">Temporal Equivalence</span>
</div>`,

  'Axis Transition Marker': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="axis-transition">
    <div>
      <div class="axis-transition__label">Axis Direction Change</div>
      <div class="axis-transition__title">Descending into Detail</div>
    </div>
  </div>
  <div class="axis-transition axis-transition--ascending">
    <div>
      <div class="axis-transition__label">Axis Direction Change</div>
      <div class="axis-transition__title">Ascending to Synthesis</div>
    </div>
  </div>
</div>`,

  'Axis Interstitial': `<div class="axis-interstitial">
  <div class="axis-interstitial__label">Pausing to Measure the Wave</div>
</div>`,

  'Chapter Divider': `<div style="padding:24px 0">
  <div class="chapter-divider"></div>
  <p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary);margin-top:8px">3px structural border-top — minimal section separator</p>
</div>`,

  'Page Closing': `<div class="page-closing">
  <div class="page-closing__rule"></div>
  <div class="page-closing__mark">End of Exploration AD-005</div>
</div>`,

  'Density Table': `<table class="density-table">
  <thead><tr><th>Phase</th><th>Density</th><th>Typography</th><th>Direction</th></tr></thead>
  <tbody>
    <tr><td>Hub</td><td>Sparse</td><td>Display serif</td><td>Horizontal scan</td></tr>
    <tr><td>Transition</td><td>Breathing</td><td>Meta labels</td><td>Diagonal shift</td></tr>
    <tr><td>Spoke</td><td>Dense</td><td>Body + code</td><td>Vertical read</td></tr>
  </tbody>
</table>`,

  'Diagonal Clip-Path Direction Encoding': `<div style="display:flex;flex-direction:column;gap:12px">
  <div style="background:var(--axis-zone-transition);clip-path:polygon(0 0, 100% 0, 100% 85%, 0 100%);padding:32px;text-align:center">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">DESCENDING: polygon(0 0, 100% 0, 100% 85%, 0 100%)</span>
  </div>
  <div style="background:var(--axis-zone-transition);clip-path:polygon(0 15%, 100% 0, 100% 100%, 0 100%);padding:32px;text-align:center">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">ASCENDING: polygon(0 15%, 100% 0, 100% 100%, 0 100%)</span>
  </div>
</div>`,

  'Hub-to-Spoke Background Zone Alternation': `<div style="display:flex;flex-direction:column;gap:0">
  <div style="background:#FEF9F5;padding:16px;border-left:3px solid var(--color-border)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Hub: cream #FEF9F5 (sparse)</span></div>
  <div style="background:#FAF5ED;padding:16px;border-left:3px solid var(--color-border)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Transition: beige #FAF5ED (breathing)</span></div>
  <div style="background:#FFFFFF;padding:16px;border-left:3px solid var(--color-border)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Spoke: white #FFFFFF (dense)</span></div>
  <div style="background:#FAF5ED;padding:16px;border-left:3px solid var(--color-border)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Interstitial: beige #FAF5ED (breathing)</span></div>
  <div style="background:#FEF9F5;padding:16px;border-left:3px solid var(--color-border)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Synthesis: cream #FEF9F5 (sparse)</span></div>
</div>`,

  'Featured Tile Typography Scale-Up': `<div style="display:flex;gap:16px;align-items:flex-start">
  <div style="flex:2;border:3px solid var(--color-border);border-left:4px solid var(--color-primary);padding:16px">
    <span style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2">Featured: 1.625rem</span>
  </div>
  <div style="flex:1;border:3px solid var(--color-border);padding:16px">
    <span style="font-family:var(--font-display);font-size:1.375rem;line-height:1.2">Standard: 1.375rem</span>
  </div>
</div>`,

  'Spoke Section Typography Cascade': `<div style="display:flex;flex-direction:column;gap:12px;padding:8px 0">
  <div><span style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2">h2: Section (1.625rem) &mdash; medium shot</span></div>
  <div><span style="font-family:var(--font-display);font-size:1.375rem;font-style:italic;line-height:1.2">h3: Subsection (1.375rem italic) &mdash; close-up</span></div>
  <div><span style="font-family:var(--font-body);font-size:1rem;line-height:1.7">Body: 1rem &mdash; deep content</span></div>
</div>`,

  'Territory Tile Hover Border Assertion': `<div style="display:flex;gap:16px">
  <div class="territory-tile" style="flex:1">
    <span class="territory-tile__label">Default</span>
    <span class="territory-tile__title">Border: #E0D5C5</span>
  </div>
  <div class="territory-tile" style="flex:1;border-color:var(--color-primary)">
    <span class="territory-tile__label">Hover State</span>
    <span class="territory-tile__title" style="font-family:var(--font-display)">Border: #E83025</span>
  </div>
</div>`,

  'Scroll-Triggered Reveal': `<div style="display:flex;gap:16px;align-items:center">
  <div style="opacity:0.3;transform:translateY(10px);padding:16px;border:1px solid var(--color-border-subtle)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Before: opacity 0, translateY 20px</span>
  </div>
  <span style="font-family:var(--font-mono);font-size:1rem">&rarr;</span>
  <div style="opacity:1;padding:16px;border:1px solid var(--color-border-subtle)">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">After: opacity 1, translateY 0</span>
  </div>
</div>`,

  'Responsive Axis Simplification': `<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary);padding:12px;border:1px solid var(--color-border-subtle)">
  <div style="margin-bottom:8px">@media (max-width: 768px)</div>
  <div style="display:flex;gap:16px;flex-wrap:wrap">
    <span>hub-grid: 4&rarr;1 cols</span>
    <span>clip-path &rarr; none</span>
    <span>padding reduces</span>
    <span>WAVE preserved</span>
  </div>
</div>`,

  'Essence Callout Register Shift': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="callout callout--note"><div class="callout__label">Note</div><div class="callout__body">Inter sans-serif body text.</div></div>
  <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">Instrument Serif italic voice.</div></div>
</div>`,

  'Callout Accent Variant System': `<div style="display:flex;flex-direction:column;gap:8px">
  <div style="border-left:4px solid var(--accent-blue);padding:8px 16px;background:var(--color-zone-sparse)"><span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-blue);font-weight:600">Note</span> <span style="font-size:0.875rem">&mdash; informational</span></div>
  <div style="border-left:4px solid var(--accent-green);padding:8px 16px;background:var(--color-zone-sparse)"><span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-green);font-weight:600">Tip</span> <span style="font-size:0.875rem">&mdash; constructive</span></div>
  <div style="border-left:4px solid var(--accent-coral);padding:8px 16px;background:var(--color-zone-sparse)"><span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-coral);font-weight:600">Gotcha</span> <span style="font-size:0.875rem">&mdash; warning</span></div>
  <div style="border-left:4px solid var(--accent-amber);padding:8px 16px;background:var(--color-zone-sparse)"><span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-amber);font-weight:600">Caution</span> <span style="font-size:0.875rem">&mdash; careful</span></div>
  <div style="border-left:4px solid var(--accent-purple);padding:8px 16px;background:var(--color-zone-sparse)"><span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-purple);font-weight:600">Essence</span> <span style="font-size:0.875rem;font-family:var(--font-display);font-style:italic">&mdash; philosophical</span></div>
</div>`,

  'Solid Offset Pseudo-Element': `<div style="position:relative;display:inline-block;margin:8px">
  <div style="border:3px solid var(--color-border);border-left:4px solid var(--color-primary);padding:24px;background:var(--axis-zone-primary);position:relative;z-index:1">
    <span style="font-family:var(--font-display);font-size:1.375rem">Featured Tile</span>
  </div>
  <div style="position:absolute;top:4px;left:4px;width:100%;height:100%;border:3px solid #1A1A1A;z-index:0;background:var(--color-background)"></div>
</div>`,

  'Header': `<div class="header-dark">
  <div class="meta-line" style="color:var(--color-text-secondary)">
    <span>EXPLORATION AD-005</span>
    <span>AXIS: CHOREOGRAPHY</span>
    <span class="version-badge">v1 enriched</span>
  </div>
  <h1 style="font-family:var(--font-display);font-size:2.5rem;color:var(--color-background);margin-bottom:16px;line-height:1.15">AD-005: Choreography</h1>
  <p style="font-family:var(--font-body);color:var(--color-text-secondary);line-height:1.7">Hub-spoke topology with cinematic shot progression.</p>
</div>`,

  'Territory Tile': `<div class="hub-grid" style="max-width:500px">
  <div class="territory-tile territory-tile--featured" style="grid-column:span 2">
    <span class="territory-tile__label">Featured Territory</span>
    <span class="territory-tile__title" style="font-family:var(--font-display);font-size:1.625rem">WAVE Density Oscillation</span>
    <span class="territory-tile__desc" style="font-size:0.875rem;color:var(--color-text-secondary)">Hub-spoke as breathing rhythm.</span>
    <span class="territory-tile__meta">3 findings</span>
  </div>
  <div class="territory-tile">
    <span class="territory-tile__label">Standard</span>
    <span class="territory-tile__title" style="font-family:var(--font-display)">Temporal</span>
    <span class="territory-tile__meta">2 findings</span>
  </div>
  <div class="territory-tile">
    <span class="territory-tile__label">Standard</span>
    <span class="territory-tile__title" style="font-family:var(--font-display)">Spatial</span>
    <span class="territory-tile__meta">2 findings</span>
  </div>
</div>`,

  'Hub Grid': `<div class="hub-grid" style="max-width:400px">
  <div class="territory-tile" style="grid-column:span 2;border-left:4px solid var(--color-primary)"><span style="font-family:var(--font-display)">Featured (2-col span)</span></div>
  <div class="territory-tile"><span style="font-family:var(--font-display)">Tile A</span></div>
  <div class="territory-tile"><span style="font-family:var(--font-display)">Tile B</span></div>
</div>`,

  'Spoke Content Container': `<div class="spoke-content" style="padding:24px">
  <div class="breadcrumb">
    <span>Hub</span><span class="breadcrumb__separator">&#9656;</span><span class="breadcrumb__current">Spoke 1</span>
  </div>
  <p style="font-size:1rem;line-height:1.7;margin-top:12px">Dense reading content within the spoke.</p>
</div>`,

  'Spoke Section': `<div class="spoke-section">
  <div style="font-family:var(--font-display);font-size:1.625rem;margin-bottom:16px">Section Heading</div>
  <div style="font-family:var(--font-display);font-size:1.375rem;font-style:italic;margin-bottom:12px">Subsection</div>
  <p style="font-size:1rem;line-height:1.7">Body text within the spoke section.</p>
</div>`,

  'Callout': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="callout callout--note"><div class="callout__label" style="color:var(--accent-blue)">Note</div><div class="callout__body">Informational context.</div></div>
  <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">The Archivist speaks.</div></div>
</div>`,

  'Breathing Zone': `<div class="breathing-zone" style="padding:24px">
  <p style="font-size:1rem;line-height:1.7">Transitional content between dense zones. Warm beige background with structural borders creates a cognitive pause.</p>
</div>`,

  'Code Block (pre)': `<pre><code><span style="color:#666">/* Hub-spoke layout */</span>
<span style="color:#E83025">.hub-grid</span> {
  <span style="color:#4A7C9B">display</span>: grid;
  <span style="color:#4A7C9B">grid-template-columns</span>: repeat(<span style="color:#D97706">4</span>, <span style="color:#D97706">1fr</span>);
}</code></pre>`,

  'Table': `<table>
  <thead><tr><th>Phase</th><th>Density</th><th>Scanning</th></tr></thead>
  <tbody>
    <tr><td>Hub</td><td>Sparse</td><td>Horizontal</td></tr>
    <tr><td>Spoke</td><td>Dense</td><td>Vertical</td></tr>
    <tr><td>Return</td><td>Sparse</td><td>Horizontal</td></tr>
  </tbody>
</table>`,

  'Code-Explanation Pair': `<div class="code-explanation">
  <pre style="background:var(--color-text);color:var(--color-background);border:3px solid var(--color-border);padding:16px;font-family:var(--font-mono);font-size:0.875rem"><code>.hub-grid { gap: 24px; }</code></pre>
  <p style="font-size:1rem;line-height:1.7">The 24px gap creates the sparse phase of the WAVE density oscillation within the hub.</p>
</div>`,
};


// ═══════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-006 (Compound)
// ═══════════════════════════════════════════════════════════════════════
const cssAd006 = `
.preview-ad006 {
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
  --type-page: 2.5rem; --type-section: 1.625rem; --type-subsection: 1.375rem;
  --type-body: 1rem; --type-code: 0.875rem; --type-meta: 0.75rem;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px;
  --accent-blue: #4A90D9; --accent-green: #4A9D6B;
  --accent-coral: #C97065; --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  font-family: var(--font-body); color: var(--color-text);
  line-height: 1.7; font-size: 1rem; background: var(--color-background); border-radius: 0;
}
.preview-ad006 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-ad006 h2, .preview-ad006 h3 { all: unset; display: block; }

/* Scroll Witness */
.preview-ad006 .scroll-witness {
  position: relative; width: 100%; height: 3px; background: var(--color-border-subtle);
}
.preview-ad006 .scroll-witness__fill { height: 100%; background: var(--color-primary); width: 65%; }

/* Axis Indicator */
.preview-ad006 .axis-indicator {
  background: var(--color-text); color: var(--color-text-secondary);
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.05em;
  padding: 8px 24px; display: flex; justify-content: center; gap: 32px;
  border-bottom: 1px solid var(--color-border);
}
.preview-ad006 .axis-indicator__label { text-transform: uppercase; }
.preview-ad006 .axis-indicator__value { color: var(--color-background); }

/* Meta Line */
.preview-ad006 .meta-line {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
  display: flex; align-items: center; gap: 16px;
}
.preview-ad006 .version-badge {
  display: inline-block; font-family: var(--font-mono); font-size: 0.75rem;
  font-weight: 500; letter-spacing: 0.05em; padding: 2px 8px;
  border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary);
}

/* Pattern Echo Grid */
.preview-ad006 .pattern-echo-grid {
  display: grid; grid-template-columns: repeat(3, 80px); grid-template-rows: repeat(2, 80px); gap: 8px;
}
.preview-ad006 .pattern-echo {
  border: 1px solid var(--color-border); padding: 8px; display: flex;
  align-items: center; justify-content: center; position: relative; overflow: hidden;
}
.preview-ad006 .pattern-echo__label {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.05em;
  text-transform: uppercase; color: var(--color-text-secondary);
  position: absolute; bottom: 4px; left: 4px;
}
.preview-ad006 .echo-z::before { content:''; position:absolute; top:12px; left:12px; width:56px; height:56px; border-top:3px solid var(--color-primary); border-bottom:3px solid var(--color-primary); }
.preview-ad006 .echo-f::before { content:''; position:absolute; top:10px; left:10px; width:50px; height:0; border-top:3px solid var(--color-primary); }
.preview-ad006 .echo-f::after { content:''; position:absolute; top:10px; left:10px; width:0; height:50px; border-left:3px solid var(--color-text-secondary); }
.preview-ad006 .echo-bento::before { content:''; position:absolute; top:8px; left:8px; width:28px; height:56px; border:1px solid var(--color-border); }
.preview-ad006 .echo-bento::after { content:''; position:absolute; top:8px; right:8px; width:28px; height:24px; border:1px solid var(--color-border); }
.preview-ad006 .echo-spiral::before { content:''; position:absolute; top:10px; left:10px; width:50px; height:50px; border-top:3px solid var(--color-primary); border-left:3px solid var(--color-primary); }
.preview-ad006 .echo-spiral::after { content:''; position:absolute; top:22px; left:22px; width:26px; height:26px; border-bottom:3px solid var(--color-text-secondary); border-right:3px solid var(--color-text-secondary); }
.preview-ad006 .echo-choreo::before { content:''; position:absolute; top:30px; left:30px; width:16px; height:16px; border:3px solid var(--color-primary); }
.preview-ad006 .echo-choreo::after { content:''; position:absolute; top:18px; left:18px; width:40px; height:40px; border:1px solid var(--color-border); }
.preview-ad006 .echo-compound { background: var(--color-zone-breathing); }

/* Section Meta */
.preview-ad006 .section-meta {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 8px;
}

/* Stratum / Spoke Labels */
.preview-ad006 .stratum-label {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 16px;
}
.preview-ad006 .spoke-label {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary);
  margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border-subtle);
}

/* Fractal Annotation */
.preview-ad006 .fractal-annotation {
  display: grid; grid-template-areas: "annotation content";
  grid-template-columns: 3rem 1fr; gap: 16px; margin-bottom: 32px;
}
.preview-ad006 .fractal-annotation__marker {
  grid-area: annotation; font-family: var(--font-mono); font-size: 0.75rem;
  color: var(--color-text-secondary); writing-mode: vertical-lr;
  letter-spacing: 0.1em; text-transform: uppercase;
  border-right: 1px solid var(--color-border-subtle); padding-right: 8px;
}
.preview-ad006 .fractal-annotation__content { grid-area: content; }

/* Discovery Log */
.preview-ad006 .discovery-log {
  border: 3px solid var(--color-primary); padding: 24px; background: var(--color-zone-dense);
}
.preview-ad006 .discovery-log__title {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary);
  margin-bottom: 16px; padding-bottom: 8px; border-bottom: 3px solid var(--color-primary);
}
.preview-ad006 .discovery-item { padding: 16px 0; border-bottom: 1px solid var(--color-border-subtle); }
.preview-ad006 .discovery-item:last-child { border-bottom: none; }
.preview-ad006 .discovery-id { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; color: var(--color-primary); }

/* Bento Item Meta */
.preview-ad006 .bento-item__meta {
  font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-text-secondary);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;
}

/* Triple Column Heading */
.preview-ad006 .triple-column__heading {
  font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: 16px; padding-bottom: 8px; border-bottom: 3px solid var(--color-primary);
}

/* Zone backgrounds */
.preview-ad006 .zone-sparse { background: var(--color-zone-sparse); }
.preview-ad006 .zone-dense { background: var(--color-zone-dense); }
.preview-ad006 .zone-breathing { background: var(--color-zone-breathing); }

/* Section header */
.preview-ad006 .section-header { margin-bottom: 32px; }

/* Drop Cap */
.preview-ad006 .drop-cap::first-letter {
  font-family: var(--font-display); font-size: 3.5em; float: left;
  line-height: 0.8; margin-right: 12px; margin-top: 4px; color: var(--color-primary);
}

/* Z-Layout */
.preview-ad006 .z-layout {
  display: grid; grid-template-areas: "z-top-left z-top-right" "z-bottom-left z-bottom-right";
  grid-template-columns: 1fr 1fr; gap: 32px;
}
.preview-ad006 .z-top-left, .preview-ad006 .z-bottom-right {
  background: var(--color-zone-dense); padding: 32px; border: 3px solid var(--color-border);
}
.preview-ad006 .z-top-right, .preview-ad006 .z-bottom-left { padding: 32px; }
.preview-ad006 .z-top-left { grid-area: z-top-left; }
.preview-ad006 .z-top-right { grid-area: z-top-right; }
.preview-ad006 .z-bottom-left { grid-area: z-bottom-left; }
.preview-ad006 .z-bottom-right { grid-area: z-bottom-right; }

/* Triple Column */
.preview-ad006 .triple-column {
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
}
.preview-ad006 .triple-column__cell { padding: 24px; border: 3px solid var(--color-border); }

/* Bento Grid */
.preview-ad006 .bento-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
}
.preview-ad006 .bento-item {
  border: 3px solid var(--color-border); padding: 24px; background: var(--color-zone-dense);
}
.preview-ad006 .bento-item--featured {
  grid-column: span 2; border-color: var(--color-primary); position: relative;
}
.preview-ad006 .bento-item__title {
  font-family: var(--font-display); font-size: 1.375rem; font-style: italic; margin-bottom: 16px;
}

/* Spiral Layout */
.preview-ad006 .spiral-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
}
.preview-ad006 .spiral-wide { padding: 32px; background: var(--color-zone-sparse); border-left: 4px solid var(--accent-blue); grid-column: span 2; }
.preview-ad006 .spiral-medium { padding: 24px; background: var(--color-zone-dense); border-left: 4px solid var(--accent-green); }
.preview-ad006 .spiral-narrow { padding: 24px; background: var(--color-zone-breathing); border-left: 4px solid var(--accent-amber); }
.preview-ad006 .spiral-deep { padding: 24px; background: var(--color-zone-dense); border-left: 4px solid var(--accent-purple); }

/* Choreography Layout */
.preview-ad006 .choreo-layout {
  display: grid; grid-template-columns: 1fr 1.618fr 1fr; gap: 32px;
}
.preview-ad006 .choreo-hub {
  background: var(--color-zone-dense); border: 3px solid var(--color-primary);
  padding: 32px; position: relative;
}
.preview-ad006 .choreo-spoke {
  padding: 24px; border: 3px solid var(--color-border); background: var(--color-zone-sparse);
}

/* F-Layout */
.preview-ad006 .f-layout { display: flex; flex-direction: column; gap: 32px; }
.preview-ad006 .f-scanline { border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 32px; }
.preview-ad006 .f-scanline:last-child { border-bottom: none; }

/* Callout */
.preview-ad006 .callout { border-left: 4px solid var(--accent-blue); padding: 24px 20px; background: var(--color-zone-sparse); }
.preview-ad006 .callout__label {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;
}
.preview-ad006 .callout__body { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }
.preview-ad006 .callout--note .callout__label { color: var(--accent-blue); }
.preview-ad006 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad006 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad006 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Decision Matrix */
.preview-ad006 table { width: 100%; border-collapse: collapse; }
.preview-ad006 th {
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: 12px 16px; border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad006 td {
  font-family: var(--font-body); font-size: 1rem; padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-subtle); vertical-align: top;
}
.preview-ad006 .decision-matrix td.best-fit { border-left: 4px solid var(--color-primary); font-weight: 600; }
.preview-ad006 .decision-matrix td.acceptable { border-left: 4px solid var(--accent-green); }
.preview-ad006 .decision-matrix td.avoid { border-left: 4px solid var(--color-border); color: var(--color-text-secondary); }
.preview-ad006 .transition-matrix td.smooth { color: var(--accent-green); }
.preview-ad006 .transition-matrix td.bridge { color: var(--accent-amber); }
.preview-ad006 .transition-matrix td.breathing { color: var(--accent-coral); }

/* Details / Collapsible */
.preview-ad006 details { border: 3px solid var(--color-border); margin-bottom: 16px; }
.preview-ad006 details summary {
  padding: 16px 24px; cursor: pointer; font-weight: 600; background: var(--color-zone-breathing);
  border-bottom: 1px solid var(--color-border-subtle);
}
.preview-ad006 details[open] summary { border-bottom: 3px solid var(--color-border); }
.preview-ad006 details > div { padding: 24px; }

/* Header dark */
.preview-ad006 .header-dark {
  background: var(--color-text); color: var(--color-background);
  border-bottom: 3px solid var(--color-primary); padding: 32px;
}
.preview-ad006 .header-dark h1 {
  font-family: var(--font-display); font-size: 3rem; color: var(--color-background);
  margin-bottom: 16px; line-height: 1.15;
}
`;

// ═══════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-006
// ═══════════════════════════════════════════════════════════════════════
const previewsAd006 = {

  'Scroll Witness': `<div class="scroll-witness">
  <div class="scroll-witness__fill"></div>
</div>
<p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary);margin-top:8px">Fixed 3px progress bar &mdash; 65% scroll position</p>`,

  'Axis Indicator': `<div class="axis-indicator">
  <span><span class="axis-indicator__label">Axis: </span><span class="axis-indicator__value">Bento Grid</span></span>
  <span><span class="axis-indicator__label">Density: </span><span class="axis-indicator__value">Islands</span></span>
  <span><span class="axis-indicator__label">Org: </span><span class="axis-indicator__value">Creative</span></span>
</div>`,

  'Meta Line': `<div class="meta-line" style="color:var(--color-text-secondary)">
  <span>EXPLORATION AD-006</span>
  <span>AXIS: COMPOUND</span>
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Pattern Echo Grid': `<div class="pattern-echo-grid">
  <div class="pattern-echo echo-z"><span class="pattern-echo__label">Z</span></div>
  <div class="pattern-echo echo-f"><span class="pattern-echo__label">F</span></div>
  <div class="pattern-echo echo-bento"><span class="pattern-echo__label">Ben</span></div>
  <div class="pattern-echo echo-spiral"><span class="pattern-echo__label">Spi</span></div>
  <div class="pattern-echo echo-choreo"><span class="pattern-echo__label">Cho</span></div>
  <div class="pattern-echo echo-compound"><span class="pattern-echo__label">X</span></div>
</div>`,

  'Section Meta': `<div style="display:flex;flex-direction:column;gap:8px">
  <div class="section-meta">Section 1 &mdash; Z-Pattern</div>
  <div class="section-meta">Section 2 &mdash; F-Pattern</div>
  <div class="section-meta">Section 3 &mdash; Bento Grid</div>
</div>`,

  'Stratum Labels': `<div style="display:flex;flex-direction:column;gap:12px">
  <div style="border-left:4px solid var(--accent-blue);padding-left:12px"><span class="stratum-label">Validated</span></div>
  <div style="border-left:4px solid var(--accent-green);padding-left:12px"><span class="stratum-label">Established</span></div>
  <div style="border-left:4px solid var(--accent-amber);padding-left:12px"><span class="stratum-label">Exploratory</span></div>
  <div style="border-left:4px solid var(--accent-purple);padding-left:12px"><span class="stratum-label">Speculative</span></div>
</div>`,

  'Spoke Labels': `<div style="display:flex;flex-direction:column;gap:12px">
  <div class="spoke-label">Temporal</div>
  <div class="spoke-label">Spatial</div>
  <div class="spoke-label">Proportional</div>
  <div class="spoke-label">Gravitational</div>
</div>`,

  'Fractal Annotation Layer': `<div class="fractal-annotation">
  <div class="fractal-annotation__marker">Page Scale</div>
  <div class="fractal-annotation__content">
    <p style="font-size:1rem;line-height:1.7">Content annotated with its fractal scale level. The vertical text marker identifies which of the 5 scales this content demonstrates.</p>
  </div>
</div>`,

  'Discovery Log': `<div class="discovery-log">
  <div class="discovery-log__title">Findings Inventory</div>
  <div class="discovery-item"><span class="discovery-id">AD-F-023</span> Meta-equivalence is ATTENTION TOPOLOGY</div>
  <div class="discovery-item"><span class="discovery-id">AD-F-024</span> Compound is sequential, not simultaneous</div>
  <div class="discovery-item"><span class="discovery-id">AD-F-028</span> 5-scale fractal model is complete</div>
</div>`,

  'Bento Item Meta': `<div style="padding:16px;border:3px solid var(--color-border);background:var(--color-zone-dense)">
  <div class="bento-item__meta">Featured Pattern</div>
  <div style="font-family:var(--font-display);font-size:1.375rem;font-style:italic">Bento Grid</div>
</div>`,

  'Triple Column Headings': `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">
  <div><div class="triple-column__heading">Organization</div></div>
  <div><div class="triple-column__heading">Density</div></div>
  <div><div class="triple-column__heading">Axis</div></div>
</div>`,

  'Research Application Record': `<div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary);padding:12px;border:1px solid var(--color-border-subtle)">
  <div style="margin-bottom:8px;text-transform:uppercase;letter-spacing:0.1em">Research Application Record</div>
  <div>display: none; aria-hidden="true" &mdash; hidden metadata for system inspection</div>
</div>`,

  'Drop Cap': `<p class="drop-cap" style="font-size:1rem;line-height:1.7;max-width:70ch">The compound axis exploration tests whether all five patterns can coexist in sequence, whether the triple equivalence holds at compound scale.</p>`,

  'Zone Background Alternation': `<div style="display:flex;flex-direction:column;gap:0">
  <div style="background:#FEF9F5;padding:12px 16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section 1: Sparse #FEF9F5</span></div>
  <div style="background:#FFFFFF;padding:12px 16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section 2: Dense #FFFFFF</span></div>
  <div style="background:#FAF5ED;padding:12px 16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section 3: Breathing #FAF5ED</span></div>
  <div style="background:#FEF9F5;padding:12px 16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section 4: Sparse #FEF9F5</span></div>
  <div style="background:#FFFFFF;padding:12px 16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section 5: Dense #FFFFFF</span></div>
</div>`,

  'Section Boundary Gesture': `<div style="display:flex;flex-direction:column;gap:0">
  <div style="background:var(--color-zone-sparse);padding:24px">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section N: 48px padding-bottom</span>
  </div>
  <div style="border-top:3px solid var(--color-border)"></div>
  <div style="background:var(--color-zone-dense);padding:24px">
    <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Section N+1: 48px padding-top (total gap: 96px + 3px)</span>
  </div>
</div>`,

  'Spiral Border-Weight Confidence Encoding': `<div style="display:flex;flex-direction:column;gap:0">
  <div style="border-left:4px solid var(--accent-blue);padding:12px 16px;background:var(--color-zone-sparse)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Validated &mdash; Blue 4px</span></div>
  <div style="border-left:4px solid var(--accent-green);padding:12px 16px;background:var(--color-zone-dense)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Established &mdash; Green 4px</span></div>
  <div style="border-left:4px solid var(--accent-amber);padding:12px 16px;background:var(--color-zone-breathing)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Exploratory &mdash; Amber 4px</span></div>
  <div style="border-left:4px solid var(--accent-purple);padding:12px 16px;background:var(--color-zone-dense)"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Speculative &mdash; Purple 4px</span></div>
</div>`,

  'F-Scanline Crescendo': `<div class="f-layout" style="gap:16px">
  <div class="f-scanline" style="padding-bottom:16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Scanline 1: Sparse overview (2 paragraphs)</span></div>
  <div class="f-scanline" style="padding-bottom:16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Scanline 2: Triple-column comparison</span></div>
  <div class="f-scanline" style="padding-bottom:16px"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Scanline 3: Detailed analysis</span></div>
  <div class="f-scanline" style="border-bottom:none"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-secondary)">Scanline 4: Dense evidence tables (CRESCENDO peak)</span></div>
</div>`,

  'Decision Matrix Cell Classification': `<table class="decision-matrix">
  <thead><tr><th>Content Type</th><th>Z-Pattern</th><th>F-Pattern</th></tr></thead>
  <tbody>
    <tr><td>Overview</td><td class="best-fit">Best Fit</td><td class="acceptable">Acceptable</td></tr>
    <tr><td>Deep Analysis</td><td class="avoid">Avoid</td><td class="best-fit">Best Fit</td></tr>
    <tr><td>Reference</td><td class="acceptable">Acceptable</td><td class="avoid">Avoid</td></tr>
  </tbody>
</table>`,

  'Transition Grammar Color Coding': `<table class="transition-matrix">
  <thead><tr><th></th><th>Z</th><th>F</th><th>Bento</th></tr></thead>
  <tbody>
    <tr><td style="font-weight:600">Z</td><td>&mdash;</td><td class="smooth">Smooth</td><td class="bridge">Bridge</td></tr>
    <tr><td style="font-weight:600">F</td><td class="smooth">Smooth</td><td>&mdash;</td><td class="breathing">Breathing</td></tr>
    <tr><td style="font-weight:600">Bento</td><td class="bridge">Bridge</td><td class="breathing">Breathing</td><td>&mdash;</td></tr>
  </tbody>
</table>`,

  'Solid Offset Depth': `<div style="position:relative;display:inline-block;margin:8px">
  <div style="border:3px solid var(--color-primary);padding:24px;background:var(--color-zone-dense);position:relative;z-index:1">
    <span style="font-family:var(--font-display);font-size:1.375rem">Featured Element</span>
  </div>
  <div style="position:absolute;top:4px;left:4px;width:100%;height:100%;border:3px solid #1A1A1A;z-index:0;background:var(--color-zone-breathing)"></div>
</div>`,

  'Collapsible Details State Shift': `<details open>
  <summary>Experiment: Z-Pattern + Spiral</summary>
  <div><p style="font-size:1rem;line-height:1.7">Failed because simultaneous dual-axis creates cognitive overload.</p></div>
</details>
<details>
  <summary>Experiment: All Five Simultaneous</summary>
  <div><p style="font-size:1rem;line-height:1.7">Content hidden until expanded.</p></div>
</details>`,

  'Crown Jewel Title Amplification': `<div style="display:flex;gap:24px;align-items:baseline">
  <span style="font-family:var(--font-display);font-size:2.5rem;color:var(--color-text)">Standard: 2.5rem</span>
  <span style="font-family:var(--font-display);font-size:3rem;color:var(--color-text)">Crown: 3rem</span>
</div>`,

  'Typography Trinity Register Shifts': `<div style="display:flex;flex-direction:column;gap:12px">
  <div><span style="font-family:var(--font-display);font-size:1.625rem;font-style:italic">Instrument Serif &mdash; display/editorial</span></div>
  <div><span style="font-family:var(--font-body);font-size:1rem">Inter &mdash; body/analytical</span></div>
  <div><span style="font-family:var(--font-mono);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary)">JetBrains Mono &mdash; metadata/technical</span></div>
</div>`,

  'Z-Layout': `<div class="z-layout" style="max-width:400px">
  <div class="z-top-left" style="padding:16px"><span style="font-family:var(--font-display)">TL (dense)</span></div>
  <div class="z-top-right" style="padding:16px"><span style="color:var(--color-text-secondary)">TR (sparse)</span></div>
  <div class="z-bottom-left" style="padding:16px"><span style="color:var(--color-text-secondary)">BL (sparse)</span></div>
  <div class="z-bottom-right" style="padding:16px"><span style="font-family:var(--font-display)">BR (dense)</span></div>
</div>`,

  'Triple Column': `<div class="triple-column" style="max-width:500px">
  <div class="triple-column__cell"><div class="triple-column__heading">Organization</div><p style="font-size:0.875rem">Creative emergent synthesis</p></div>
  <div class="triple-column__cell"><div class="triple-column__heading">Density</div><p style="font-size:0.875rem">Fractal at all 5 scales</p></div>
  <div class="triple-column__cell"><div class="triple-column__heading">Axis</div><p style="font-size:0.875rem">Compound sequential</p></div>
</div>`,

  'Bento Grid': `<div class="bento-grid" style="max-width:500px">
  <div class="bento-item bento-item--featured">
    <div class="bento-item__meta">Featured Pattern</div>
    <div class="bento-item__title">Compound Sequential</div>
    <p style="font-size:0.875rem;line-height:1.7;color:var(--color-text-secondary)">All five axis patterns in musical verse-chorus sequence.</p>
  </div>
  <div class="bento-item">
    <div class="bento-item__meta">Scanning</div>
    <div class="bento-item__title">Z-Pattern</div>
  </div>
  <div class="bento-item">
    <div class="bento-item__meta">Structural</div>
    <div class="bento-item__title">F-Pattern</div>
  </div>
</div>`,

  'Spiral Layout': `<div class="spiral-layout" style="max-width:500px">
  <div class="spiral-wide"><div class="stratum-label">Validated</div><p style="font-size:0.875rem">Wide zone &mdash; full width, highest confidence.</p></div>
  <div class="spiral-medium"><div class="stratum-label">Established</div><p style="font-size:0.875rem">Medium zone.</p></div>
  <div class="spiral-narrow"><div class="stratum-label">Exploratory</div><p style="font-size:0.875rem">Narrow zone.</p></div>
  <div class="spiral-deep"><div class="stratum-label">Speculative</div><p style="font-size:0.875rem">Deep zone.</p></div>
</div>`,

  'Choreography Layout': `<div class="choreo-layout" style="max-width:500px">
  <div class="choreo-spoke"><div class="spoke-label">Temporal</div><p style="font-size:0.875rem">Spoke content</p></div>
  <div class="choreo-hub"><span style="font-family:var(--font-display);font-size:1.375rem">Hub: Attention Topology</span></div>
  <div class="choreo-spoke"><div class="spoke-label">Spatial</div><p style="font-size:0.875rem">Spoke content</p></div>
</div>`,

  'F-Layout': `<div class="f-layout" style="gap:16px">
  <div class="f-scanline" style="padding-bottom:16px"><span style="font-family:var(--font-display);font-size:1.375rem;font-style:italic">Scanline 1: Overview</span><p style="font-size:0.875rem;margin-top:8px">Sparse introductory content.</p></div>
  <div class="f-scanline" style="padding-bottom:16px"><span style="font-family:var(--font-display);font-size:1.375rem;font-style:italic">Scanline 2: Evidence</span><p style="font-size:0.875rem;margin-top:8px">Denser analysis with tables.</p></div>
  <div class="f-scanline" style="border-bottom:none"><span style="font-family:var(--font-display);font-size:1.375rem;font-style:italic">Scanline 3: Synthesis</span><p style="font-size:0.875rem;margin-top:8px">Densest content at bottom.</p></div>
</div>`,

  'Callout System': `<div style="display:flex;flex-direction:column;gap:8px">
  <div class="callout callout--note"><div class="callout__label" style="color:var(--accent-blue)">Note</div><div class="callout__body">Informational.</div></div>
  <div class="callout" style="border-left-color:var(--accent-green)"><div class="callout__label" style="color:var(--accent-green)">Tip</div><div class="callout__body">Constructive.</div></div>
  <div class="callout" style="border-left-color:var(--accent-coral)"><div class="callout__label" style="color:var(--accent-coral)">Gotcha</div><div class="callout__body">Warning.</div></div>
  <div class="callout" style="border-left-color:var(--accent-amber)"><div class="callout__label" style="color:var(--accent-amber)">Caution</div><div class="callout__body">Be careful.</div></div>
  <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">The Archivist speaks.</div></div>
</div>`,

  'Section Header': `<div class="section-header">
  <div class="section-meta">Section 3 &mdash; Bento Grid</div>
  <div style="font-family:var(--font-display);font-size:1.625rem;line-height:1.2;margin-bottom:16px">Pattern Reference: The Archipelago</div>
  <p style="color:var(--color-text-secondary);font-size:1rem;line-height:1.7">Five patterns as islands in a grid ocean.</p>
</div>`,

  'Decision Matrix Table': `<table class="decision-matrix">
  <thead><tr><th>Content</th><th>Z</th><th>F</th><th>Bento</th></tr></thead>
  <tbody>
    <tr><td>Overview</td><td class="best-fit">Best</td><td class="acceptable">OK</td><td class="acceptable">OK</td></tr>
    <tr><td>Deep Dive</td><td class="avoid">Avoid</td><td class="best-fit">Best</td><td class="acceptable">OK</td></tr>
    <tr><td>Reference</td><td class="avoid">Avoid</td><td class="avoid">Avoid</td><td class="best-fit">Best</td></tr>
  </tbody>
</table>`,

  'Transition Grammar Matrix': `<table class="transition-matrix">
  <thead><tr><th></th><th>Z</th><th>F</th><th>Bento</th><th>Spiral</th></tr></thead>
  <tbody>
    <tr><td style="font-weight:600">Z</td><td>&mdash;</td><td class="smooth">Smooth</td><td class="bridge">Bridge</td><td class="breathing">Breathing</td></tr>
    <tr><td style="font-weight:600">F</td><td class="smooth">Smooth</td><td>&mdash;</td><td class="breathing">Breathing</td><td class="bridge">Bridge</td></tr>
    <tr><td style="font-weight:600">Bento</td><td class="bridge">Bridge</td><td class="breathing">Breathing</td><td>&mdash;</td><td class="smooth">Smooth</td></tr>
  </tbody>
</table>`,

  'Development Kitchen (Details/Collapsible)': `<details>
  <summary>Experiment: Z-Pattern + Spiral (failed)</summary>
  <div><p style="font-size:1rem;line-height:1.7">Simultaneous dual-axis creates cognitive overload. Sequential is mandatory.</p></div>
</details>
<details>
  <summary>Experiment: All Five Simultaneous (failed)</summary>
  <div><p style="font-size:1rem;line-height:1.7">Five patterns fighting for the same viewport = chaos.</p></div>
</details>`,

  'Header': `<div class="header-dark">
  <div class="meta-line" style="color:var(--color-text-secondary)">
    <span>EXPLORATION AD-006</span>
    <span>AXIS: COMPOUND</span>
    <span class="version-badge">v1 enriched</span>
  </div>
  <h1 style="font-family:var(--font-display);font-size:3rem;color:var(--color-background);margin-bottom:16px;line-height:1.15">AD-006: The Convergence</h1>
  <p style="font-family:var(--font-body);color:var(--color-text-secondary);line-height:1.7">Compound axis &mdash; all five patterns in sequential synthesis.</p>
</div>`,
};
