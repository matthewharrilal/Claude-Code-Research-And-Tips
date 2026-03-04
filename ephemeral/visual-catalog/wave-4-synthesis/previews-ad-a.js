// ═══════════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-001 (Z-Pattern)
// ═══════════════════════════════════════════════════════════════════════════
const cssAd001 = `
.preview-ad001 {
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
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-within: var(--space-2);
  --space-between: var(--space-8);
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-ad001 * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0; }
.preview-ad001 h1, .preview-ad001 h2, .preview-ad001 h3, .preview-ad001 h4 { all: unset; display: block; font-family: var(--font-display); line-height: 1.2; }
.preview-ad001 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Meta Line */
.preview-ad001 .meta-line {
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
}
.preview-ad001 .version-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
}

/* Running Header */
.preview-ad001 .running-header {
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

/* Z-Hero Grid */
.preview-ad001 .z-hero {
  display: grid;
  grid-template-areas: "hero-primary hero-secondary" "hero-diagonal hero-terminal";
  grid-template-columns: 1.618fr 1fr;
  grid-template-rows: 1.618fr 1fr;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  min-height: 200px;
}
.preview-ad001 .z-hero__primary {
  grid-area: hero-primary;
  background: var(--color-zone-dense);
  padding: var(--space-8);
  border: 3px solid var(--color-border);
  display: flex; flex-direction: column; justify-content: center;
}
.preview-ad001 .z-hero__secondary {
  grid-area: hero-secondary;
  background: var(--color-zone-sparse);
  padding: var(--space-8);
  border: 3px solid var(--color-border);
  display: flex; flex-direction: column; justify-content: center;
}
.preview-ad001 .z-hero__diagonal {
  grid-area: hero-diagonal;
  background: var(--color-zone-breathing);
  padding: var(--space-8);
  border: 3px solid var(--color-border);
  display: flex; flex-direction: column; justify-content: center;
}
.preview-ad001 .z-hero__terminal {
  grid-area: hero-terminal;
  background: var(--color-zone-dense);
  padding: var(--space-8);
  border: 3px solid var(--color-border);
  display: flex; flex-direction: column; justify-content: center;
  align-items: flex-end; text-align: right;
}

/* Z-Cycle Q&A */
.preview-ad001 .z-cycle { margin-bottom: var(--space-between); }
.preview-ad001 .z-question {
  max-width: 60%;
  background: var(--color-zone-sparse);
  padding: var(--space-6) var(--space-8);
  border-left: var(--border-left-width) solid var(--color-primary);
  margin-bottom: var(--space-4);
}
.preview-ad001 .z-question__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}
.preview-ad001 .z-question__text {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text);
}
.preview-ad001 .z-answer {
  background: var(--color-zone-dense);
  padding: var(--space-8);
  border: 3px solid var(--color-border);
}
.preview-ad001 .z-answer__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

/* Micro-Z Grid */
.preview-ad001 .micro-z {
  display: grid;
  grid-template-areas: "code-primary explain-primary" "code-secondary explain-secondary";
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-6) 0;
}
.preview-ad001 .micro-z__code-primary { grid-area: code-primary; }
.preview-ad001 .micro-z__explain-primary {
  grid-area: explain-primary;
  display: flex; flex-direction: column; justify-content: center;
  padding: var(--space-4); background: var(--color-zone-sparse);
}
.preview-ad001 .micro-z__code-secondary { grid-area: code-secondary; }
.preview-ad001 .micro-z__explain-secondary {
  grid-area: explain-secondary;
  display: flex; flex-direction: column; justify-content: center;
  padding: var(--space-4); background: var(--color-zone-sparse);
}
.preview-ad001 .micro-z pre { margin-bottom: 0; }

/* Z-Terminal CTA */
.preview-ad001 .z-terminal-cta {
  display: flex;
  justify-content: flex-end;
  padding: var(--space-4) 0;
  margin-top: var(--space-4);
}
.preview-ad001 .z-terminal-cta a {
  font-family: var(--font-body);
  font-size: var(--type-meta);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-primary);
  border-bottom: 3px solid var(--color-primary);
  padding-bottom: var(--space-1);
  text-decoration: none;
}

/* Tables */
.preview-ad001 table { width: 100%; border-collapse: collapse; margin-bottom: var(--space-8); }
.preview-ad001 th {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: var(--space-3) var(--space-4);
  border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad001 td {
  font-family: var(--font-body); font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle); vertical-align: top;
}
.preview-ad001 th, .preview-ad001 td { border-left: none; border-right: none; }
.preview-ad001 .z-properties td:first-child {
  font-family: var(--font-mono); font-size: var(--type-code); font-weight: 500; color: var(--color-primary);
}

/* Callout System */
.preview-ad001 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5);
  margin: var(--space-6) 0;
  background: var(--color-zone-sparse);
}
.preview-ad001 .callout__label {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2);
}
.preview-ad001 .callout__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.preview-ad001 .callout--note { border-left-color: var(--accent-blue); }
.preview-ad001 .callout--note .callout__label { color: var(--accent-blue); }
.preview-ad001 .callout--tip { border-left-color: var(--accent-green); }
.preview-ad001 .callout--tip .callout__label { color: var(--accent-green); }
.preview-ad001 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-ad001 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-ad001 .callout--caution { border-left-color: var(--accent-amber); }
.preview-ad001 .callout--caution .callout__label { color: var(--accent-amber); }
.preview-ad001 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad001 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad001 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Chapter Divider */
.preview-ad001 .chapter-divider {
  height: var(--space-8);
  background: var(--color-zone-breathing);
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
  margin: var(--space-8) 0;
}

/* Section Title */
.preview-ad001 .section-title {
  font-family: var(--font-display);
  font-size: var(--type-section);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-3);
  border-bottom: 3px solid var(--color-border);
}

/* Pre/Code */
.preview-ad001 pre {
  background: var(--color-text); color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: var(--space-6) var(--space-8);
  font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5;
  overflow-x: auto; margin-bottom: var(--space-8);
}
.preview-ad001 pre code { background: none; border: none; padding: 0; font-size: inherit; }

/* Footer */
.preview-ad001 .ad001-footer {
  border-top: 3px solid var(--color-border);
  padding: var(--space-8) 0;
  display: flex; justify-content: space-between; align-items: center;
}
.preview-ad001 .ad001-footer span {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-001 (24 elements)
// ═══════════════════════════════════════════════════════════════════════════
const previewsAd001 = {
  // ─── INSTRUMENTS (8) ───
  'Meta Line': `<div style="background: #1A1A1A; padding: 24px 32px;">
  <div class="meta-line" style="color: #666;">
    <span>EXPLORATION AD-001</span>
    <span>AXIS: Z-PATTERN</span>
    <span class="version-badge" style="border-color: #666; color: #666;">v1 enriched</span>
  </div>
</div>`,

  'Running Header': `<div class="running-header">Chapter 1 — Fundamentals</div>
<div style="padding: 8px 0; color: #666; font-size: 0.875rem;">Content below the running header...</div>`,

  'Z-Hero Diagonal Metadata Panel': `<div style="background: var(--color-zone-breathing); padding: 24px; border: 3px solid var(--color-border);">
  <p style="font-family: var(--font-mono); font-size: var(--type-code); color: var(--color-text-secondary); line-height: 1.6;">
    Axis: Z-PATTERN<br>
    Paired OD: OD-001 CONVERSATIONAL<br>
    Density: PULSE + TIDAL<br>
    Findings: AD-F-001 through AD-F-004
  </p>
</div>`,

  'Z-Terminal CTA': `<div class="z-terminal-cta">
  <a href="#">See: Gutenberg Diagram Mapping</a>
</div>`,

  'Gutenberg Zone Properties Table': `<table class="z-properties">
  <thead><tr><th>Zone</th><th>Position</th><th>Content Role</th><th>Z-Pattern Function</th></tr></thead>
  <tbody>
    <tr><td>Primary Optical</td><td>Top-left</td><td>Topic title</td><td>Z-entry point</td></tr>
    <tr><td>Strong Fallow</td><td>Top-right</td><td>Key properties</td><td>First horizontal scan</td></tr>
    <tr><td>Weak Fallow</td><td>Bottom-left</td><td>Metadata</td><td>Diagonal crossing</td></tr>
    <tr><td>Terminal</td><td>Bottom-right</td><td>Thesis / CTA</td><td>Z-completion</td></tr>
  </tbody>
</table>`,

  'Responsive Signal Transfer Table': `<table>
  <thead><tr><th>Signal</th><th>Desktop (Z-Pattern)</th><th>Mobile (Linear Stack)</th></tr></thead>
  <tbody>
    <tr><td>PULSE</td><td>Q/A alternation</td><td>Preserved (vertical)</td></tr>
    <tr><td>TIDAL</td><td>Width: 60%/100%</td><td>Color: sparse/dense</td></tr>
    <tr><td>Z-Geometry</td><td>Diagonal sweep</td><td>Collapsed to linear</td></tr>
    <tr><td>Fractal</td><td>4-scale nesting</td><td>3-scale (no spatial)</td></tr>
  </tbody>
</table>`,

  'Fractal Scale Mapping Table': `<table>
  <thead><tr><th>Scale</th><th>Z-Pattern Expression</th><th>PULSE Mapping</th></tr></thead>
  <tbody>
    <tr><td>Page</td><td>Q/A alternation across viewport</td><td>Page-level PULSE rhythm</td></tr>
    <tr><td>Section</td><td>Z-hero quadrant layout</td><td>Section sparse/dense</td></tr>
    <tr><td>Component</td><td>Micro-Z code/explain grid</td><td>Component-level pulse</td></tr>
    <tr><td>Character</td><td>Serif/sans font shift</td><td>Character weight shift</td></tr>
  </tbody>
</table>`,

  'Implementation Checklist Table': `<table>
  <thead><tr><th>Requirement</th><th>Implementation</th><th>Source</th></tr></thead>
  <tbody>
    <tr><td>Named grid areas</td><td style="font-family: var(--font-mono); font-size: var(--type-code);">grid-template-areas</td><td>AD Conv. 12.1</td></tr>
    <tr><td>Golden ratio</td><td style="font-family: var(--font-mono); font-size: var(--type-code);">1.618fr 1fr</td><td>EXT-AXIS-Z-001</td></tr>
    <tr><td>Q width 60%</td><td style="font-family: var(--font-mono); font-size: var(--type-code);">max-width: 60%</td><td>OD-F-001</td></tr>
  </tbody>
</table>`,

  // ─── GESTURES (9) ───
  'TIDAL Width Asymmetry (Q 60% / A 100%)': `<div>
  <div class="z-question" style="margin-bottom: 8px;">
    <div class="z-question__label">Question</div>
    <div class="z-question__text" style="font-size: 1rem;">60% width — sparse zone</div>
  </div>
  <div class="z-answer">
    <div class="z-answer__label">Answer</div>
    <p style="font-size: 0.875rem;">100% width — dense zone. The width jump from 60% to 100% IS the primary TIDAL density signal.</p>
  </div>
</div>`,

  'Typography Velocity Shift (Serif 600 → Sans 400)': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1; padding: 16px; background: var(--color-zone-sparse); border-left: 4px solid var(--color-primary);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-primary); margin-bottom: 4px;">BEFORE: Question</div>
    <div style="font-family: var(--font-display); font-size: var(--type-subsection); font-weight: 600; line-height: 1.3;">Serif 600 — slow</div>
  </div>
  <div style="flex: 1; padding: 16px; background: var(--color-zone-dense); border: 3px solid var(--color-border);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 4px;">AFTER: Answer</div>
    <div style="font-family: var(--font-body); font-size: var(--type-body); font-weight: 400; line-height: 1.7;">Sans 400 — fast scanning</div>
  </div>
</div>`,

  'Zone Background Color Alternation': `<div style="display: flex; flex-direction: column; gap: 4px;">
  <div style="padding: 12px 16px; background: #FEF9F5; border-left: 4px solid var(--color-primary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">SPARSE #FEF9F5</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Question zone (warm cream)</span>
  </div>
  <div style="padding: 12px 16px; background: #FFFFFF; border: 3px solid var(--color-border);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">DENSE #FFFFFF</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Answer zone (white)</span>
  </div>
  <div style="padding: 12px 16px; background: #FAF5ED;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">BREATHING #FAF5ED</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Transition zone (warm tan)</span>
  </div>
</div>`,

  'Border Category System (4px/3px/1px)': `<div style="display: flex; flex-direction: column; gap: 12px;">
  <div style="padding: 10px 16px; border-left: 4px solid var(--color-primary); background: var(--color-zone-sparse);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary);">4px RED</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Z-entry accent (questions)</span>
  </div>
  <div style="padding: 10px 16px; border: 3px solid var(--color-border); background: var(--color-zone-dense);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">3px STRUCTURAL</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Cat 1 — section boundaries</span>
  </div>
  <div style="padding: 10px 16px; border-bottom: 1px solid var(--color-border-subtle);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1px SEPARATOR</span>
    <span style="font-size: 0.875rem; margin-left: 8px;">Cat 2 — table rows, headers</span>
  </div>
</div>`,

  'Golden Ratio Grid Proportions': `<div class="z-hero" style="min-height: 160px;">
  <div class="z-hero__primary">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1.618fr</span>
    <span style="font-size: 0.875rem;">Primary Optical (~62%)</span>
  </div>
  <div class="z-hero__secondary">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1fr</span>
    <span style="font-size: 0.875rem;">Strong Fallow (~38%)</span>
  </div>
  <div class="z-hero__diagonal">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1.618fr row</span>
  </div>
  <div class="z-hero__terminal">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1fr row</span>
  </div>
</div>`,

  'Responsive Z-Collapse at 768px': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 8px;">DESKTOP: 2x2 Z-Grid</div>
    <div style="display: grid; grid-template-columns: 1.618fr 1fr; grid-template-rows: 1.618fr 1fr; gap: 4px; min-height: 80px;">
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Primary</div>
      <div style="background: var(--color-zone-sparse); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Secondary</div>
      <div style="background: var(--color-zone-breathing); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Diagonal</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px; text-align: right;">Terminal</div>
    </div>
  </div>
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 8px;">MOBILE: Linear Stack</div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Primary</div>
      <div style="background: var(--color-zone-sparse); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Secondary</div>
      <div style="background: var(--color-zone-breathing); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Diagonal</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Terminal</div>
    </div>
  </div>
</div>`,

  'Callout Label Typography': `<div style="display: flex; flex-direction: column; gap: 12px;">
  <div>
    <div style="font-family: var(--font-body); font-size: 1rem; line-height: 1.7; margin-bottom: 4px;">Normal body prose reads like this...</div>
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-blue);">CONTEXT</div>
    <div style="font-family: var(--font-body); font-size: 0.8rem; color: var(--color-text-secondary); margin-top: 2px;">4-property shift: size(12px) + weight(600) + spacing(0.1em) + case(UPPER)</div>
  </div>
</div>`,

  'Essence Callout Serif Voice': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1; border-left: 4px solid var(--accent-blue); padding: 16px; background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-blue); margin-bottom: 4px;">NOTE</div>
    <div style="font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7;">Standard callout uses Inter (body font) for content delivery.</div>
  </div>
  <div style="flex: 1; border-left: 4px solid var(--accent-purple); padding: 16px; background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-purple); margin-bottom: 4px;">ESSENCE</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: var(--type-body); line-height: 1.7;">Essence shifts to Instrument Serif italic for editorial voice.</div>
  </div>
</div>`,

  'Selection Highlight': `<div style="padding: 16px;">
  <p style="font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: 8px;">Text selection uses brand colors (simulated below):</p>
  <span style="background: var(--color-primary); color: var(--color-background); padding: 2px 4px;">Selected text appears in red (#E83025) with cream text (#FEF9F5)</span>
  <span style="margin-left: 8px;">Normal text for comparison</span>
</div>`,

  // ─── COMPONENTS (7) ───
  'Z-Hero Grid': `<div class="z-hero" style="min-height: 180px;">
  <div class="z-hero__primary">
    <h2 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 8px;">Z-Pattern Axis</h2>
    <p style="font-size: 0.875rem; color: var(--color-text-secondary);">Primary Optical — topic title at Z-entry</p>
  </div>
  <div class="z-hero__secondary">
    <h3 style="font-family: var(--font-display); font-size: 1rem; font-style: italic; margin-bottom: 4px;">Key Properties</h3>
    <p style="font-size: 0.875rem;">Strong Fallow quadrant</p>
  </div>
  <div class="z-hero__diagonal">
    <p style="font-family: var(--font-mono); font-size: var(--type-code); color: var(--color-text-secondary);">Axis: Z-PATTERN<br>Density: PULSE + TIDAL</p>
  </div>
  <div class="z-hero__terminal">
    <p style="font-size: 0.875rem; font-style: italic;">The Z-sweep IS one PULSE beat.</p>
  </div>
</div>`,

  'Z-Cycle (Q&A Pair)': `<div class="z-cycle">
  <div class="z-question">
    <div class="z-question__label">Question</div>
    <div class="z-question__text">How does Z-pattern diagonal sweep create PULSE rhythm?</div>
  </div>
  <div class="z-answer">
    <div class="z-answer__label">Answer</div>
    <p>Each Q&amp;A pair IS one PULSE beat. The narrow question (60% width) creates a sparse zone; the full-width answer creates a dense zone. The width jump forces the eye diagonally.</p>
  </div>
</div>`,

  'Micro-Z Grid': `<div class="micro-z">
  <div class="micro-z__code-primary">
    <pre style="margin: 0;"><code>.z-hero {
  grid-template-columns: 1.618fr 1fr;
}</code></pre>
  </div>
  <div class="micro-z__explain-primary">
    <p style="font-size: 0.875rem;">Golden ratio creates proportional harmony across columns.</p>
  </div>
  <div class="micro-z__code-secondary">
    <pre style="margin: 0;"><code>.z-question {
  max-width: 60%;
}</code></pre>
  </div>
  <div class="micro-z__explain-secondary">
    <p style="font-size: 0.875rem;">Width asymmetry IS the TIDAL density signal.</p>
  </div>
</div>`,

  'Callout System (5 Variants)': `<div style="display: flex; flex-direction: column; gap: 8px;">
  <div class="callout callout--note" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label">Context</div>
    <div class="callout__body" style="font-size: 0.875rem;">Blue accent — informational note</div>
  </div>
  <div class="callout callout--tip" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label">Tip</div>
    <div class="callout__body" style="font-size: 0.875rem;">Green accent — implementation guidance</div>
  </div>
  <div class="callout callout--gotcha" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body" style="font-size: 0.875rem;">Coral accent — common mistake warning</div>
  </div>
  <div class="callout callout--caution" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label">Caution</div>
    <div class="callout__body" style="font-size: 0.875rem;">Amber accent — proceed carefully</div>
  </div>
  <div class="callout callout--essence" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label">Essence</div>
    <div class="callout__body" style="font-size: 0.875rem;">Purple accent + serif italic editorial voice</div>
  </div>
</div>`,

  'Chapter Divider': `<div style="padding: 16px 0;">
  <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 8px;">Content above...</div>
  <div class="chapter-divider"></div>
  <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 8px;">Content below...</div>
</div>`,

  'Section Title': `<h2 class="section-title">Understanding the Z-Pattern</h2>`,

  'Footer': `<div class="ad001-footer">
  <span>AD-001 &middot; Z-Pattern Axis</span>
  <span>v1 enriched</span>
</div>`,
};


// ═══════════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-002 (F-Pattern CRESCENDO)
// ═══════════════════════════════════════════════════════════════════════════
const cssAd002 = `
.preview-ad002 {
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
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-between: 32px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --axis-zone-primary: #FFFFFF;
  --axis-zone-secondary: #FEF9F5;
  --axis-zone-transition: #FAF5ED;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-ad002 * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0; }
.preview-ad002 h1, .preview-ad002 h2, .preview-ad002 h3, .preview-ad002 h4 { all: unset; display: block; font-family: var(--font-display); line-height: 1.2; }
.preview-ad002 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Act Indicator */
.preview-ad002 .act-indicator {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: var(--space-2);
  margin-bottom: var(--space-4);
}

/* Tension Meter */
.preview-ad002 .tension-meter {
  display: flex;
  gap: 4px;
  margin-bottom: var(--space-4);
}
.preview-ad002 .tension-meter__segment {
  width: 24px; height: 24px;
  background: var(--color-border-subtle);
  border: 1px solid var(--color-border);
}
.preview-ad002 .tension-meter__segment--filled {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
.preview-ad002 .tension-meter__label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

/* Meta Line & Version Badge (reuse pattern) */
.preview-ad002 .meta-line {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: var(--space-2); display: flex; align-items: center; gap: var(--space-4);
}
.preview-ad002 .version-badge {
  display: inline-block; font-family: var(--font-mono); font-size: var(--type-meta);
  font-weight: 500; letter-spacing: 0.05em; padding: 2px 8px;
  border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary);
}

/* Header */
.preview-ad002 .ad002-header {
  background: var(--color-text); color: var(--color-background);
  border-bottom: 3px solid var(--color-primary); padding: 24px 32px;
}
.preview-ad002 .ad002-header h1 {
  font-family: var(--font-display); font-size: 1.5rem; color: var(--color-background);
  margin-bottom: 8px; line-height: 1.15;
}
.preview-ad002 .ad002-header .subtitle {
  font-family: var(--font-body); font-size: var(--type-body); font-weight: 400;
  color: var(--color-text-secondary); line-height: 1.7;
}

/* Breathing Zone */
.preview-ad002 .breathing-zone {
  background: var(--color-zone-breathing);
  border-top: 3px solid var(--color-border);
  border-bottom: 3px solid var(--color-border);
  padding: 24px;
}
.preview-ad002 .breathing-zone__inner { max-width: 600px; margin: 0 auto; }

/* Essence Pullquote */
.preview-ad002 .essence-pullquote {
  max-width: 55ch;
}
.preview-ad002 .essence-pullquote p {
  font-family: var(--font-display); font-style: italic;
  font-size: var(--type-section); line-height: 1.4;
  border-left: 4px solid var(--accent-purple);
  padding-left: 20px; color: var(--color-text);
}
.preview-ad002 .essence-pullquote cite {
  display: block; margin-top: 12px; font-style: normal;
  font-family: var(--font-mono); font-size: var(--type-meta);
  letter-spacing: 0.05em; text-transform: uppercase;
  color: var(--color-text-secondary);
}

/* Decision Matrix Score */
.preview-ad002 .decision-matrix {
  border: 3px solid var(--color-border);
}
.preview-ad002 .decision-matrix th {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: var(--space-3) var(--space-4);
  background: var(--color-text); color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
}
.preview-ad002 .decision-matrix td {
  font-family: var(--font-body); font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}
.preview-ad002 .decision-matrix__score {
  font-family: var(--font-mono); font-size: var(--type-code); font-weight: 500;
}
.preview-ad002 .decision-matrix__score--high { color: var(--accent-green); }
.preview-ad002 .decision-matrix__score--mid { color: var(--accent-amber); }
.preview-ad002 .decision-matrix__score--low { color: var(--accent-coral); }

/* Page Footer */
.preview-ad002 .page-footer {
  background: var(--color-text); color: var(--color-background);
  border-top: 3px solid var(--color-primary); padding: 24px 32px;
}
.preview-ad002 .page-footer__inner {
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.preview-ad002 .page-footer__id {
  font-family: var(--font-mono); font-size: var(--type-meta);
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary);
}
.preview-ad002 .page-footer__rule {
  width: 48px; height: 3px; background: var(--color-primary);
}

/* Act Zone variants */
.preview-ad002 .act-zone { padding: 32px 24px; }
.preview-ad002 .act-zone--exposition { padding: 48px 24px; background: var(--axis-zone-secondary); }
.preview-ad002 .act-zone--rising { padding: 40px 24px; background: var(--axis-zone-primary); }
.preview-ad002 .act-zone--climax { padding: 24px; background: var(--axis-zone-primary); }
.preview-ad002 .act-zone--falling { padding: 40px 24px; background: var(--axis-zone-secondary); }
.preview-ad002 .act-zone--denouement { padding: 48px 24px; background: var(--axis-zone-secondary); }

/* Act zone headings */
.preview-ad002 .act-zone h2 {
  font-family: var(--font-display); font-size: var(--type-section);
  border-left: 4px solid var(--color-primary); padding-left: 16px;
  margin-bottom: 16px;
}
.preview-ad002 .act-zone h3 {
  font-family: var(--font-display); font-size: var(--type-subsection);
  font-style: italic; margin-bottom: 12px;
}
.preview-ad002 .act-zone h4 {
  font-family: var(--font-body); font-size: var(--type-body);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;
}

/* Content Block */
.preview-ad002 .content-block { margin-bottom: var(--space-between); }
.preview-ad002 .content-block:last-child { margin-bottom: 0; }

/* Two-Column */
.preview-ad002 .two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8);
}

/* Callout */
.preview-ad002 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5); margin: var(--space-6) 0;
  background: var(--color-zone-sparse);
}
.preview-ad002 .callout__label {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2);
}
.preview-ad002 .callout__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.preview-ad002 .callout--note { border-left-color: var(--accent-blue); }
.preview-ad002 .callout--note .callout__label { color: var(--accent-blue); }
.preview-ad002 .callout--tip { border-left-color: var(--accent-green); }
.preview-ad002 .callout--tip .callout__label { color: var(--accent-green); }
.preview-ad002 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-ad002 .callout--gotcha .callout__label { color: var(--accent-coral); }
.preview-ad002 .callout--caution { border-left-color: var(--accent-amber); }
.preview-ad002 .callout--caution .callout__label { color: var(--accent-amber); }
.preview-ad002 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad002 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad002 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Code Block */
.preview-ad002 pre {
  background: var(--color-text); color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: var(--space-6) var(--space-8);
  font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5;
  overflow-x: auto; margin-bottom: var(--space-8);
}
.preview-ad002 pre code { background: none; border: none; padding: 0; font-size: inherit; }
.preview-ad002 .kw { color: #E83025; }
.preview-ad002 .st { color: #6B9B7A; }
.preview-ad002 .cm { color: #666666; }
.preview-ad002 .fn { color: #4A7C9B; }
.preview-ad002 .nu { color: #D97706; }
.preview-ad002 .pu { color: #E0D5C5; }

/* Term Definition */
.preview-ad002 .term-def {
  font-weight: 600;
  border-bottom: 3px solid var(--color-border);
}

/* Tables */
.preview-ad002 table { width: 100%; border-collapse: collapse; margin-bottom: var(--space-8); }
.preview-ad002 th {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: var(--space-3) var(--space-4);
  border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad002 td {
  font-family: var(--font-body); font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-002 (25 elements)
// ═══════════════════════════════════════════════════════════════════════════
const previewsAd002 = {
  // ─── INSTRUMENTS (9) ───
  'Act Indicator': `<div class="act-indicator">Act I — Exposition</div>
<div style="margin-top: 8px; font-size: 0.75rem; color: #666;">Monospace uppercase label names the reader's position in the Freytag arc</div>`,

  'Tension Meter': `<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <div class="tension-meter__label">Narrative tension: 1 / 5</div>
    <div class="tension-meter">
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
      <div class="tension-meter__segment"></div>
      <div class="tension-meter__segment"></div>
      <div class="tension-meter__segment"></div>
      <div class="tension-meter__segment"></div>
    </div>
  </div>
  <div>
    <div class="tension-meter__label">Narrative tension: 5 / 5</div>
    <div class="tension-meter">
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
      <div class="tension-meter__segment tension-meter__segment--filled"></div>
    </div>
  </div>
</div>`,

  'Meta-Line (Header)': `<div style="background: #1A1A1A; padding: 24px 32px;">
  <div class="meta-line" style="color: #666;">
    <span>EXPLORATION AD-002</span>
    <span>AXIS: F-PATTERN</span>
    <span class="version-badge" style="border-color: #666; color: #666;">v1 enriched</span>
  </div>
</div>`,

  'Version Badge': `<div style="display: flex; gap: 16px; align-items: center;">
  <span style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);">EXPLORATION AD-002</span>
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Header (Dark Full-Bleed)': `<div class="ad002-header">
  <div class="meta-line" style="color: #666;">
    <span>EXPLORATION AD-002</span>
    <span>AXIS: F-PATTERN</span>
    <span class="version-badge" style="border-color: #666; color: #666;">v1 enriched</span>
  </div>
  <h1>AD-002: F-Pattern Layout</h1>
  <p class="subtitle">What if the F-pattern's natural reading degradation was not a bug but a feature?</p>
</div>`,

  'Breathing Zone': `<div class="breathing-zone">
  <div class="breathing-zone__inner">
    <div class="essence-pullquote">
      <p>The eye does not read documentation. It interrogates the page.</p>
      <cite>Reading physics observation — EXT-AXIS-F-001</cite>
    </div>
  </div>
</div>`,

  'Essence Pullquote': `<div class="essence-pullquote">
  <p>The eye does not read documentation. It interrogates the page, scanning for relevance before committing attention.</p>
  <cite>Reading physics observation — EXT-AXIS-F-001</cite>
</div>`,

  'Decision Matrix Score Encoding': `<table class="decision-matrix">
  <thead><tr><th>Criterion</th><th>F-Pattern</th><th>Z-Pattern</th><th>Gutenberg</th></tr></thead>
  <tbody>
    <tr>
      <td>Documentation fit</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--low">LOW</span></td>
    </tr>
    <tr>
      <td>Left-spine scanning</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--low">LOW</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
    </tr>
    <tr>
      <td>CRESCENDO compatibility</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
    </tr>
  </tbody>
</table>`,

  'Page Footer': `<div class="page-footer">
  <div class="page-footer__inner">
    <span class="page-footer__id">AD-002 — F-Pattern Layout</span>
    <div class="page-footer__rule"></div>
    <span class="page-footer__id">Exploration Complete</span>
  </div>
</div>`,

  // ─── GESTURES (9) ───
  'CRESCENDO Spacing Compression': `<div style="display: flex; flex-direction: column; gap: 2px;">
  <div style="padding: 20px 16px; background: var(--axis-zone-secondary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Act I — 64px padding</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Sparse (exposition)</span>
  </div>
  <div style="padding: 14px 16px; background: var(--axis-zone-primary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Act II — 48px padding</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Moderate (rising)</span>
  </div>
  <div style="padding: 8px 16px; background: var(--axis-zone-primary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary);">Act III — 32px padding</span>
    <span style="font-size: 0.75rem; margin-left: 8px; font-weight: 600;">DENSE (climax)</span>
  </div>
  <div style="padding: 14px 16px; background: var(--axis-zone-secondary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Act IV — 48px padding</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Relaxing (falling)</span>
  </div>
  <div style="padding: 20px 16px; background: var(--axis-zone-secondary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Act V — 64px padding</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Sparse (denouement)</span>
  </div>
</div>`,

  'Line-Height Compression': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1; padding: 12px; background: var(--axis-zone-secondary);">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">Exposition: line-height: 1.8</div>
    <p style="font-size: 0.875rem; line-height: 1.8; max-width: none;">Loose, contemplative reading pace with extra space between lines for reflective prose.</p>
  </div>
  <div style="flex: 1; padding: 12px; background: var(--axis-zone-primary);">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary); margin-bottom: 4px;">Climax: line-height: 1.5</div>
    <p style="font-size: 0.875rem; line-height: 1.5; max-width: none;">Tighter, denser reading as narrative tension peaks. Text compresses physically.</p>
  </div>
</div>`,

  'Left-Spine Landmark Hierarchy': `<div style="display: flex; flex-direction: column; gap: 12px;">
  <div style="border-left: 4px solid var(--color-primary); padding-left: 16px;">
    <h2 style="font-family: var(--font-display); font-size: var(--type-section);">H2 — Serif + red left border</h2>
  </div>
  <div style="padding-left: 20px;">
    <h3 style="font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic;">H3 — Serif italic, no border</h3>
  </div>
  <div style="padding-left: 20px;">
    <h4 style="font-family: var(--font-body); font-size: var(--type-body); text-transform: uppercase; letter-spacing: 0.05em;">H4 — Sans uppercase + tracking</h4>
  </div>
</div>`,

  'Code Density CRESCENDO': `<div style="display: flex; flex-direction: column; gap: 4px;">
  <div style="padding: 8px 12px; background: var(--axis-zone-secondary); display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 0.75rem;">Act I (Exposition)</span>
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">0 code blocks</span>
  </div>
  <div style="padding: 8px 12px; background: var(--axis-zone-primary); display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 0.75rem;">Act II (Rising)</span>
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">inline &lt;code&gt; only</span>
  </div>
  <div style="padding: 8px 12px; background: var(--axis-zone-primary); border-left: 4px solid var(--color-primary); display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 0.75rem; font-weight: 600;">Act III (Climax)</span>
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary);">3 full &lt;pre&gt; blocks</span>
  </div>
  <div style="padding: 8px 12px; background: var(--axis-zone-secondary); display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 0.75rem;">Act IV (Falling)</span>
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1 block</span>
  </div>
  <div style="padding: 8px 12px; background: var(--axis-zone-secondary); display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 0.75rem;">Act V (Denouement)</span>
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1 block (scaffold)</span>
  </div>
</div>`,

  'Background Zone Color Shift': `<div style="display: flex; flex-direction: column; gap: 2px;">
  <div style="padding: 10px 16px; background: #FEF9F5;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">SPARSE #FEF9F5</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Acts I, IV, V (low density)</span>
  </div>
  <div style="padding: 10px 16px; background: #FFFFFF; border: 1px solid var(--color-border-subtle);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">DENSE #FFFFFF</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Acts II, III (high density)</span>
  </div>
  <div style="padding: 10px 16px; background: #FAF5ED;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">BREATHING #FAF5ED</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Transition zones between acts</span>
  </div>
</div>`,

  'Editorial Serif/Sans Register Shift': `<div style="display: flex; flex-direction: column; gap: 8px;">
  <div style="padding: 8px 12px; border-left: 3px solid var(--color-border);">
    <span style="font-family: var(--font-display); font-size: 1.1rem;">Instrument Serif</span>
    <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 8px;">Structural scanning (headings)</span>
  </div>
  <div style="padding: 8px 12px; border-left: 3px solid var(--color-border);">
    <span style="font-family: var(--font-body); font-size: 1rem;">Inter sans-serif</span>
    <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 8px;">Content comprehension (body)</span>
  </div>
  <div style="padding: 8px 12px; border-left: 3px solid var(--color-border);">
    <span style="font-family: var(--font-mono); font-size: 0.875rem;">JetBrains Mono</span>
    <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 8px;">Metadata processing (code/labels)</span>
  </div>
</div>`,

  'Structural Border Hierarchy': `<div style="display: flex; flex-direction: column; gap: 12px;">
  <div style="padding: 10px 16px; border: 3px solid var(--color-primary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary);">Cat 1: 3px STRUCTURAL</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Header, code blocks, breathing zones, footer</span>
  </div>
  <div style="padding: 10px 16px; border-bottom: 1px solid var(--color-border-subtle);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Cat 2: 1px SEPARATOR</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Table rows, act indicators</span>
  </div>
  <div style="padding: 10px 16px; border: 1px solid var(--color-border);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">Cat 3: 1px MICRO</span>
    <span style="font-size: 0.75rem; margin-left: 8px;">Version badges, tension meter segments</span>
  </div>
</div>`,

  'Callout Accent Color System': `<div style="display: flex; flex-direction: column; gap: 4px;">
  <div style="border-left: 4px solid var(--accent-blue); padding: 8px 12px; background: var(--color-zone-sparse);"><span style="font-size: 0.75rem; color: var(--accent-blue); font-weight: 600;">NOTE</span> <span style="font-size: 0.75rem;">Blue = context/information</span></div>
  <div style="border-left: 4px solid var(--accent-green); padding: 8px 12px; background: var(--color-zone-sparse);"><span style="font-size: 0.75rem; color: var(--accent-green); font-weight: 600;">TIP</span> <span style="font-size: 0.75rem;">Green = implementation guidance</span></div>
  <div style="border-left: 4px solid var(--accent-coral); padding: 8px 12px; background: var(--color-zone-sparse);"><span style="font-size: 0.75rem; color: var(--accent-coral); font-weight: 600;">GOTCHA</span> <span style="font-size: 0.75rem;">Coral = common mistake</span></div>
  <div style="border-left: 4px solid var(--accent-amber); padding: 8px 12px; background: var(--color-zone-sparse);"><span style="font-size: 0.75rem; color: var(--accent-amber); font-weight: 600;">CAUTION</span> <span style="font-size: 0.75rem;">Amber = warning</span></div>
  <div style="border-left: 4px solid var(--accent-purple); padding: 8px 12px; background: var(--color-zone-sparse);"><span style="font-size: 0.75rem; color: var(--accent-purple); font-weight: 600;">ESSENCE</span> <span style="font-size: 0.75rem; font-family: var(--font-display); font-style: italic;">Purple + serif italic</span></div>
</div>`,

  'Responsive Collapse': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 6px;">DESKTOP: F-Pattern (2-col)</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
      <div style="background: var(--axis-zone-secondary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 1</div>
      <div style="background: var(--axis-zone-secondary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 1</div>
      <div style="background: var(--axis-zone-primary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 2</div>
      <div style="background: var(--axis-zone-primary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 2</div>
    </div>
  </div>
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 6px;">MOBILE: Single column</div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div style="background: var(--axis-zone-secondary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 1</div>
      <div style="background: var(--axis-zone-primary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Scan 2</div>
      <div style="background: var(--axis-zone-primary); padding: 6px; font-size: 10px; border: 1px solid var(--color-border);">Climax</div>
    </div>
  </div>
</div>`,

  // ─── COMPONENTS (7) ───
  'Act Zone': `<div class="act-zone act-zone--climax" style="padding: 16px;">
  <div class="act-indicator">Act III — Climax</div>
  <div class="tension-meter__label">Narrative tension: 5 / 5</div>
  <div class="tension-meter">
    <div class="tension-meter__segment tension-meter__segment--filled"></div>
    <div class="tension-meter__segment tension-meter__segment--filled"></div>
    <div class="tension-meter__segment tension-meter__segment--filled"></div>
    <div class="tension-meter__segment tension-meter__segment--filled"></div>
    <div class="tension-meter__segment tension-meter__segment--filled"></div>
  </div>
  <h2 style="font-family: var(--font-display); font-size: 1.25rem; border-left: 4px solid var(--color-primary); padding-left: 12px; margin-top: 12px;">The Decision Point</h2>
  <p style="margin-top: 8px; font-size: 0.875rem;">Peak density content with minimum spacing...</p>
</div>`,

  'Content Block': `<div class="content-block">
  <h3 style="font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic; margin-bottom: 8px;">Content Block with Heading</h3>
  <p style="font-size: 0.875rem;">A content block provides consistent bottom margin (32px) and contains any combination of headings, paragraphs, and code blocks.</p>
</div>`,

  'Two-Column Layout': `<div class="two-col">
  <div>
    <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic; margin-bottom: 8px;">The First Horizontal Scan</h3>
    <p style="font-size: 0.875rem;">The eye sweeps left-to-right across the top of the content area.</p>
  </div>
  <div>
    <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic; margin-bottom: 8px;">The Second Horizontal Scan</h3>
    <p style="font-size: 0.875rem;">A shorter sweep, covering less horizontal distance.</p>
  </div>
</div>`,

  'Callout': `<div style="display: flex; flex-direction: column; gap: 8px;">
  <aside class="callout callout--note" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label" style="color: var(--accent-blue);">Context</div>
    <div class="callout__body" style="font-size: 0.875rem;">The F-pattern was first described by Jakob Nielsen in 2006.</div>
  </aside>
  <aside class="callout callout--essence" style="margin: 0; padding: 12px 16px;">
    <div class="callout__label" style="color: var(--accent-purple);">Essence</div>
    <div class="callout__body" style="font-size: 0.875rem;">F-degradation is not a failure of reading but a feature of efficient cognition.</div>
  </aside>
</div>`,

  'Decision Matrix': `<table class="decision-matrix">
  <thead><tr><th>Criterion</th><th>F-Pattern</th><th>Z-Pattern</th></tr></thead>
  <tbody>
    <tr>
      <td>Documentation fit</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
    </tr>
    <tr>
      <td>CRESCENDO support</td>
      <td><span class="decision-matrix__score decision-matrix__score--high">HIGH</span></td>
      <td><span class="decision-matrix__score decision-matrix__score--mid">MID</span></td>
    </tr>
  </tbody>
</table>`,

  'Code Block (Dark Theme)': `<pre><code><span class="cm">/* F-Pattern left-spine hierarchy */</span>
<span class="fn">.act-zone h2</span> <span class="pu">{</span>
  <span class="kw">font-family</span><span class="pu">:</span> var(--font-display)<span class="pu">;</span>
  <span class="kw">border-left</span><span class="pu">:</span> <span class="nu">4px</span> solid var(--color-primary)<span class="pu">;</span>
<span class="pu">}</span></code></pre>`,

  'Term Definition (Inline)': `<p style="font-size: 0.9rem; line-height: 1.7;">The F-pattern creates <span class="term-def">landing pads</span> where the eye rests during horizontal scans, and a <span class="term-def">left spine</span> that the eye follows during vertical descent.</p>`,
};


// ═══════════════════════════════════════════════════════════════════════════
// SCOPED CSS for AD-003 (Bento Grid)
// ═══════════════════════════════════════════════════════════════════════════
const cssAd003 = `
.preview-ad003 {
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
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-between: 32px;
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-ad003 * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0; }
.preview-ad003 h1, .preview-ad003 h2, .preview-ad003 h3, .preview-ad003 h4 { all: unset; display: block; font-family: var(--font-display); line-height: 1.2; }
.preview-ad003 p { max-width: 70ch; margin-bottom: var(--space-4); overflow-wrap: break-word; }

/* Meta Line & Version Badge */
.preview-ad003 .meta-line {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);
  margin-bottom: var(--space-2); display: flex; align-items: center; gap: var(--space-4);
}
.preview-ad003 .version-badge {
  display: inline-block; font-family: var(--font-mono); font-size: var(--type-meta);
  font-weight: 500; letter-spacing: 0.05em; padding: 2px 8px;
  border: 1px solid var(--color-text-secondary); color: var(--color-text-secondary);
}

/* Complexity Badge */
.preview-ad003 .complexity-badge {
  display: inline-block; font-family: var(--font-mono); font-size: var(--type-meta);
  font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;
  padding: 2px 8px; border: 1px solid;
}
.preview-ad003 .complexity-badge--beginner { color: var(--accent-green); border-color: var(--accent-green); }
.preview-ad003 .complexity-badge--intermediate { color: var(--accent-blue); border-color: var(--accent-blue); }
.preview-ad003 .complexity-badge--advanced { color: var(--accent-amber); border-color: var(--accent-amber); }

/* Duration Badge */
.preview-ad003 .duration-badge {
  font-family: var(--font-mono); font-size: var(--type-meta);
  color: var(--color-text-secondary);
}

/* Category Label */
.preview-ad003 .category-label {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: var(--space-2); margin-bottom: var(--space-4);
}

/* Section Heading */
.preview-ad003 .section-heading {
  font-family: var(--font-display); font-size: var(--type-section);
  margin-bottom: var(--space-8); padding-bottom: var(--space-3);
  border-bottom: 3px solid var(--color-border);
}

/* Bento Grid */
.preview-ad003 .bento-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

/* Bento Cell */
.preview-ad003 .bento-cell {
  background: var(--color-zone-dense);
  border: 3px solid var(--color-border);
  padding: var(--space-6);
}
.preview-ad003 .bento-item--large { grid-column: span 2; grid-row: span 2; }
.preview-ad003 .bento-item--wide { grid-column: span 2; }
.preview-ad003 .bento-item--tall { grid-row: span 2; }

/* Bento Cell Header */
.preview-ad003 .bento-cell__header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: var(--space-2);
}
.preview-ad003 .bento-cell__title {
  font-family: var(--font-display); font-size: var(--type-subsection);
  font-style: italic;
}

/* Bento Cell Body */
.preview-ad003 .bento-cell__body {
  font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7;
}
.preview-ad003 .bento-cell__body p { margin-bottom: 12px; }
.preview-ad003 .bento-cell__body p:last-child { margin-bottom: 0; }

/* Bento Details (Collapsible) */
.preview-ad003 .bento-details { border-top: 1px solid var(--color-border-subtle); margin-top: var(--space-4); }
.preview-ad003 .bento-details summary {
  padding: var(--space-3) 0; cursor: pointer;
  font-family: var(--font-body); font-size: var(--type-body);
  color: var(--color-primary); font-weight: 500;
  list-style: none;
}
.preview-ad003 .bento-details summary::before {
  content: '\\25B6'; display: inline-block; margin-right: 8px;
  font-size: 10px; transition: transform 0.3s ease;
}
.preview-ad003 .bento-details[open] summary::before { transform: rotate(90deg); }
.preview-ad003 .bento-details__content { padding: var(--space-4) 0; }

/* Step List */
.preview-ad003 .step-list { list-style: none; counter-reset: steps; }
.preview-ad003 .step-list__item {
  display: flex; align-items: flex-start; gap: 12px;
  margin-bottom: var(--space-6); counter-increment: steps;
}
.preview-ad003 .step-list__item::before {
  content: counter(steps);
  display: flex; align-items: center; justify-content: center;
  min-width: 24px; height: 24px;
  background: var(--color-text); color: var(--color-background);
  font-family: var(--font-mono); font-size: var(--type-meta);
  flex-shrink: 0;
}
.preview-ad003 .step-list__text { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }

/* Split Layout */
.preview-ad003 .split-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8);
}
.preview-ad003 .split-layout__side { font-size: var(--type-body); }

/* Bookends */
.preview-ad003 .bookend {
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8);
}
.preview-ad003 .bookend--front { border-left: 4px solid var(--color-primary); }
.preview-ad003 .bookend--back { border-left: 4px solid var(--accent-green); }
.preview-ad003 .bookend__heading {
  font-family: var(--font-display); font-size: var(--type-section);
  margin-bottom: var(--space-4);
}

/* Verification Checklist */
.preview-ad003 .verify-list { list-style: none; }
.preview-ad003 .verify-list__item {
  display: flex; align-items: flex-start; gap: 8px;
  margin-bottom: var(--space-3);
  font-family: var(--font-body); font-size: var(--type-body);
}
.preview-ad003 .verify-list__check {
  font-family: var(--font-mono); font-size: var(--type-code);
  color: var(--accent-green); flex-shrink: 0;
}

/* Page End */
.preview-ad003 .page-end {
  text-align: center; padding: var(--space-16) 0 var(--space-8);
  font-family: var(--font-mono); font-size: var(--type-meta);
  letter-spacing: 0.3em; color: var(--color-border);
  position: relative;
}
.preview-ad003 .page-end::before {
  content: ''; display: block; width: 64px; height: 3px;
  background: var(--color-border); margin: 0 auto var(--space-4);
}

/* RAR Block */
.preview-ad003 .rar-block {
  background: var(--color-zone-breathing);
  border: 3px solid var(--color-border);
  padding: var(--space-8); margin-top: var(--space-16);
}
.preview-ad003 .rar-block h2 {
  font-family: var(--font-display); font-size: var(--type-section);
  margin-bottom: var(--space-6);
}
.preview-ad003 .rar-block h3 {
  font-family: var(--font-display); font-size: var(--type-subsection);
  font-style: italic; margin-bottom: var(--space-2); margin-top: var(--space-4);
}

/* Breathing Zone */
.preview-ad003 .breathing-zone {
  height: 48px; background: var(--color-zone-breathing);
}

/* Cell Callout */
.preview-ad003 .cell-callout {
  border-left: 4px solid var(--accent-green);
  padding: 12px 16px; margin: 12px 0;
  background: var(--color-zone-sparse);
}
.preview-ad003 .cell-callout--tip { border-left-color: var(--accent-green); }
.preview-ad003 .cell-callout--gotcha { border-left-color: var(--accent-coral); }
.preview-ad003 .cell-callout--caution { border-left-color: var(--accent-amber); }
.preview-ad003 .cell-callout__label {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;
}
.preview-ad003 .cell-callout--tip .cell-callout__label { color: var(--accent-green); }
.preview-ad003 .cell-callout--gotcha .cell-callout__label { color: var(--accent-coral); }
.preview-ad003 .cell-callout--caution .cell-callout__label { color: var(--accent-amber); }

/* Callout (locked layer) */
.preview-ad003 .callout {
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-6) var(--space-5); margin: var(--space-6) 0;
  background: var(--color-zone-sparse);
}
.preview-ad003 .callout__label {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: var(--space-2);
}
.preview-ad003 .callout__body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.preview-ad003 .callout--essence { border-left-color: var(--accent-purple); }
.preview-ad003 .callout--essence .callout__label { color: var(--accent-purple); }
.preview-ad003 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; }

/* Pre/Code */
.preview-ad003 pre {
  background: var(--color-text); color: var(--color-background);
  border: 3px solid var(--color-border);
  padding: var(--space-6) var(--space-8);
  font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5;
  overflow-x: auto; margin-bottom: var(--space-4);
}
.preview-ad003 pre code { background: none; border: none; padding: 0; font-size: inherit; }

/* Tables */
.preview-ad003 table { width: 100%; border-collapse: collapse; margin-bottom: var(--space-8); }
.preview-ad003 th {
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  letter-spacing: 0.05em; text-transform: uppercase; text-align: left;
  padding: var(--space-3) var(--space-4);
  border-bottom: 3px solid var(--color-border); color: var(--color-text-secondary);
}
.preview-ad003 td {
  font-family: var(--font-body); font-size: var(--type-body);
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for AD-003 (27 elements)
// ═══════════════════════════════════════════════════════════════════════════
const previewsAd003 = {
  // ─── INSTRUMENTS (10) ───
  'Meta Line': `<div style="background: #1A1A1A; padding: 24px 32px;">
  <div class="meta-line" style="color: #666;">
    <span>EXPLORATION AD-003</span>
    <span>AXIS: BENTO GRID</span>
    <span class="version-badge" style="border-color: #666; color: #666;">v1 enriched</span>
  </div>
</div>`,

  'Version Badge': `<div style="display: flex; gap: 16px; align-items: center;">
  <span style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-secondary);">EXPLORATION AD-003</span>
  <span class="version-badge">v1 enriched</span>
</div>`,

  'Complexity Badge': `<div style="display: flex; gap: 12px; align-items: center;">
  <span class="complexity-badge complexity-badge--beginner">Beginner</span>
  <span class="complexity-badge complexity-badge--intermediate">Intermediate</span>
  <span class="complexity-badge complexity-badge--advanced">Advanced</span>
</div>`,

  'Duration Badge': `<div style="display: flex; gap: 24px; align-items: center;">
  <div><span class="duration-badge">~5 min</span> <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 4px;">Quick task</span></div>
  <div><span class="duration-badge">~15 min</span> <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 4px;">Medium task</span></div>
  <div><span class="duration-badge">~30 min</span> <span style="font-size: 0.75rem; color: var(--color-text-secondary); margin-left: 4px;">Deep task</span></div>
</div>`,

  'Category Label': `<div class="category-label">Beginner</div>
<div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 4px;">Grid cells for this difficulty tier appear below...</div>`,

  'Section Heading with Structural Border': `<h2 class="section-heading">Getting Started</h2>`,

  'Verification Checklist': `<ul class="verify-list">
  <li class="verify-list__item">
    <span class="verify-list__check">[\\u2713]</span>
    <span><code style="font-family: var(--font-mono); font-size: 0.85em; background: var(--color-border-subtle); padding: 1px 4px;">border-radius: 0</code> on all grid cells</span>
  </li>
  <li class="verify-list__item">
    <span class="verify-list__check">[\\u2713]</span>
    <span>Cell size creates visual hierarchy (large > wide > default)</span>
  </li>
  <li class="verify-list__item">
    <span class="verify-list__check">[\\u2713]</span>
    <span>Grid gap is consistent 32px (--space-8)</span>
  </li>
</ul>`,

  'Page End Marker': `<div class="page-end">AD-003 BENTO GRID</div>`,

  'RAR Block': `<div class="rar-block">
  <h2 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 12px;">Research Application Record</h2>
  <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic; margin-bottom: 4px;">1. Axis Pattern</h3>
  <p style="font-size: 0.875rem;">Bento Grid — modular CSS Grid with varied cell sizes encoding hierarchy through physical area.</p>
  <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic; margin-bottom: 4px; margin-top: 12px;">2. Density Pairing</h3>
  <p style="font-size: 0.875rem;">ISLANDS (discontinuous dense zones) + BOOKENDS (dense start/end)</p>
</div>`,

  'Breathing Zone': `<div style="padding: 8px 0;">
  <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 4px;">Section above</div>
  <div class="breathing-zone"></div>
  <div style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 4px;">Section below</div>
</div>`,

  // ─── GESTURES (8) ───
  'Cell Size as Hierarchy': `<div class="bento-grid" style="grid-template-columns: repeat(3, 1fr); min-height: 160px;">
  <div class="bento-cell bento-item--large" style="padding: 12px;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">span 2x2</span>
    <div style="font-size: 0.875rem; margin-top: 4px; font-weight: 500;">LARGE — highest hierarchy</div>
  </div>
  <div class="bento-cell" style="padding: 12px;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1x1</span>
    <div style="font-size: 0.75rem; margin-top: 4px;">Default</div>
  </div>
  <div class="bento-cell" style="padding: 12px;">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary);">1x1</span>
    <div style="font-size: 0.75rem; margin-top: 4px;">Default</div>
  </div>
</div>`,

  'Grid Gap as Sparse Ocean': `<div class="bento-grid" style="grid-template-columns: repeat(3, 1fr); gap: 32px;">
  <div class="bento-cell" style="padding: 12px; text-align: center;">
    <span style="font-size: 0.75rem; font-weight: 500;">Dense island</span>
  </div>
  <div class="bento-cell" style="padding: 12px; text-align: center;">
    <span style="font-size: 0.75rem; font-weight: 500;">Dense island</span>
  </div>
  <div class="bento-cell" style="padding: 12px; text-align: center;">
    <span style="font-size: 0.75rem; font-weight: 500;">Dense island</span>
  </div>
</div>
<div style="text-align: center; font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">32px gap = sparse ocean between dense islands</div>`,

  'Progressive Complexity Positioning': `<div style="display: flex; flex-direction: column; gap: 4px;">
  <div style="padding: 8px 12px; background: var(--color-zone-dense); border-left: 4px solid var(--accent-green); border: 1px solid var(--color-border);">
    <span class="complexity-badge complexity-badge--beginner" style="margin-right: 8px;">Beginner</span>
    <span style="font-size: 0.75rem;">Top of page (scanned first)</span>
  </div>
  <div style="padding: 8px 12px; background: var(--color-zone-dense); border-left: 4px solid var(--accent-blue); border: 1px solid var(--color-border);">
    <span class="complexity-badge complexity-badge--intermediate" style="margin-right: 8px;">Intermediate</span>
    <span style="font-size: 0.75rem;">Middle of page</span>
  </div>
  <div style="padding: 8px 12px; background: var(--color-zone-dense); border-left: 4px solid var(--accent-amber); border: 1px solid var(--color-border);">
    <span class="complexity-badge complexity-badge--advanced" style="margin-right: 8px;">Advanced</span>
    <span style="font-size: 0.75rem;">Bottom of page (scrolled to)</span>
  </div>
</div>`,

  'Collapsible Island Toggle': `<div class="bento-cell" style="padding: 16px;">
  <div class="bento-cell__header">
    <span class="bento-cell__title" style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic;">Create the Grid</span>
    <span class="complexity-badge complexity-badge--beginner">Beginner</span>
  </div>
  <span class="duration-badge">~5 min</span>
  <div class="bento-cell__body" style="margin-top: 8px;">
    <p style="font-size: 0.875rem;">Define a grid container with display: grid...</p>
  </div>
  <details class="bento-details">
    <summary>View implementation steps</summary>
    <div class="bento-details__content">
      <p style="font-size: 0.875rem;">Step-by-step instructions appear here when expanded.</p>
    </div>
  </details>
</div>`,

  'Bookend Density Shift': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1; border-left: 4px solid var(--color-primary); background: var(--color-zone-breathing); padding: 12px; border: 3px solid var(--color-border); border-left: 4px solid var(--color-primary);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary);">RED = Entry</span>
    <div style="font-size: 0.75rem; margin-top: 4px;">Front bookend: orientation</div>
  </div>
  <div style="flex: 1; border-left: 4px solid var(--accent-green); background: var(--color-zone-breathing); padding: 12px; border: 3px solid var(--color-border); border-left: 4px solid var(--accent-green);">
    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-green);">GREEN = Completion</span>
    <div style="font-size: 0.75rem; margin-top: 4px;">Back bookend: verification</div>
  </div>
</div>`,

  'Responsive Grid Collapse': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 6px;">DESKTOP: 3-col grid</div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;">
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px; grid-column: span 2; grid-row: span 2;">Large 2x2</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">1x1</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">1x1</div>
    </div>
  </div>
  <div style="flex: 1;">
    <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-text-secondary); margin-bottom: 6px;">MOBILE: 1-col stack</div>
    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">Large (now 1x1)</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">1x1</div>
      <div style="background: var(--color-zone-dense); border: 1px solid var(--color-border); padding: 4px; font-size: 10px;">1x1</div>
    </div>
  </div>
</div>`,

  'Step Counter Rhythm': `<ol class="step-list">
  <li class="step-list__item">
    <span class="step-list__text">Define the grid container with <code style="font-family: var(--font-mono); font-size: 0.85em; background: var(--color-border-subtle); padding: 1px 4px;">display: grid</code></span>
  </li>
  <li class="step-list__item">
    <span class="step-list__text">Set columns with <code style="font-family: var(--font-mono); font-size: 0.85em; background: var(--color-border-subtle); padding: 1px 4px;">grid-template-columns: repeat(3, 1fr)</code></span>
  </li>
  <li class="step-list__item">
    <span class="step-list__text">Add gap spacing with <code style="font-family: var(--font-mono); font-size: 0.85em; background: var(--color-border-subtle); padding: 1px 4px;">gap: var(--space-8)</code></span>
  </li>
</ol>`,

  'Typography Register Shift: Essence Callout': `<div style="display: flex; gap: 16px;">
  <div style="flex: 1; border-left: 4px solid var(--accent-blue); padding: 12px; background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-blue); margin-bottom: 4px;">STANDARD</div>
    <div style="font-family: var(--font-body); font-size: 0.875rem; line-height: 1.7;">Inter body font for analytical content.</div>
  </div>
  <div style="flex: 1; border-left: 4px solid var(--accent-purple); padding: 12px; background: var(--color-zone-sparse);">
    <div style="font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-purple); margin-bottom: 4px;">ESSENCE</div>
    <div style="font-family: var(--font-display); font-style: italic; font-size: 0.875rem; line-height: 1.7;">Serif italic for contemplative mode.</div>
  </div>
</div>`,

  // ─── COMPONENTS (9) ───
  'Bento Cell': `<div class="bento-cell" style="padding: 16px;">
  <div class="bento-cell__header">
    <span class="bento-cell__title" style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic;">Create the Grid Container</span>
    <span class="complexity-badge complexity-badge--beginner">Beginner</span>
  </div>
  <span class="duration-badge">~5 min</span>
  <div class="bento-cell__body" style="margin-top: 8px;">
    <p style="font-size: 0.875rem;">Learn to define a CSS Grid container with the fundamental properties needed for a bento layout.</p>
  </div>
  <details class="bento-details">
    <summary>View implementation steps</summary>
    <div class="bento-details__content">
      <p style="font-size: 0.875rem;">Implementation content here...</p>
    </div>
  </details>
</div>`,

  'Bento Cell Header': `<div style="display: flex; flex-direction: column; gap: 12px;">
  <div class="bento-cell__header">
    <span class="bento-cell__title" style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic;">Create the Grid Container</span>
    <span class="complexity-badge complexity-badge--beginner">Beginner</span>
  </div>
  <div class="bento-cell__header">
    <span class="bento-cell__title" style="font-family: var(--font-display); font-size: 1.1rem; font-style: italic;">Responsive Patterns</span>
    <span class="complexity-badge complexity-badge--advanced">Advanced</span>
  </div>
</div>`,

  'Bento Cell Body': `<div class="bento-cell__body">
  <p style="font-size: 0.875rem;">The bento cell body contains prose content in Inter at body size with 1.7 line-height.</p>
  <p style="font-size: 0.875rem;">Internal paragraphs have 12px bottom margin except the last one.</p>
</div>`,

  'Collapsible Details Section': `<details class="bento-details" open>
  <summary>View implementation steps</summary>
  <div class="bento-details__content">
    <p style="font-size: 0.875rem;">Expanded content with steps, code, and guidance appears inside this progressive-disclosure container.</p>
  </div>
</details>`,

  'Step List': `<ol class="step-list">
  <li class="step-list__item">
    <span class="step-list__text">Define the grid container</span>
  </li>
  <li class="step-list__item">
    <span class="step-list__text">Set column template to 3 equal fractions</span>
  </li>
  <li class="step-list__item">
    <span class="step-list__text">Apply gap spacing for island separation</span>
  </li>
</ol>`,

  'Split Layout': `<div class="split-layout">
  <div class="split-layout__side">
    <p style="font-size: 0.875rem;"><strong>Desktop:</strong> 3-column grid with cell spanning</p>
    <p style="font-size: 0.875rem;"><strong>Mobile:</strong> Single column, source order</p>
  </div>
  <div class="split-layout__side">
    <pre style="margin: 0;"><code>.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}</code></pre>
  </div>
</div>`,

  'Front Bookend': `<div class="bookend bookend--front">
  <h2 class="bookend__heading" style="font-family: var(--font-display); font-size: 1.25rem;">Building with Bento Grid Layouts</h2>
  <p style="font-size: 0.875rem;">This exploration demonstrates how bento grid geometry serves the ISLANDS density pattern...</p>
</div>`,

  'Back Bookend': `<div class="bookend bookend--back">
  <h2 class="bookend__heading" style="font-family: var(--font-display); font-size: 1.25rem;">Verification Checklist</h2>
  <h3 style="font-family: var(--font-display); font-size: 1rem; font-style: italic; margin-top: 12px; margin-bottom: 4px;">Verify</h3>
  <p style="font-size: 0.875rem;">Check all requirements against your implementation...</p>
  <h3 style="font-family: var(--font-display); font-size: 1rem; font-style: italic; margin-top: 12px; margin-bottom: 4px;">Reflect</h3>
  <p style="font-size: 0.875rem;">Consider how cell size creates hierarchy...</p>
</div>`,

  'Cell Callout': `<div style="display: flex; flex-direction: column; gap: 8px;">
  <div class="cell-callout cell-callout--tip">
    <div class="cell-callout__label">Tip</div>
    <p style="font-size: 0.875rem;">Green accent — implementation guidance inside a bento cell</p>
  </div>
  <div class="cell-callout cell-callout--gotcha">
    <div class="cell-callout__label">Gotcha</div>
    <p style="font-size: 0.875rem;">Coral accent — common mistake warning inside a cell</p>
  </div>
  <div class="cell-callout cell-callout--caution">
    <div class="cell-callout__label">Key Pattern</div>
    <p style="font-size: 0.875rem;">Amber accent — important pattern note inside a cell</p>
  </div>
</div>`,
};
