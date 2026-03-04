// ═══════════════════════════════════════════════════════════════════════════
// SCOPED CSS for OD-005
// ═══════════════════════════════════════════════════════════════════════════
const cssOd005 = `
.preview-od005 {
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
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-od005 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-od005 h1, .preview-od005 h2, .preview-od005 h3 { all: unset; display: block; }

/* Wave Visualization */
.preview-od005 .wave-visualization {
  padding: 24px;
  background: white;
  border-left: 4px solid var(--color-primary);
}
.preview-od005 .wave-visualization__title {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}
.preview-od005 .wave-diagram {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 80px;
  padding-bottom: 16px;
  border-bottom: 3px solid var(--color-border);
}
.preview-od005 .wave-bar { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }
.preview-od005 .wave-bar__fill { width: 100%; }
.preview-od005 .wave-bar--hub .wave-bar__fill { height: 14px; background: var(--color-border); }
.preview-od005 .wave-bar--s1 .wave-bar__fill { height: 68px; background: var(--color-primary); }
.preview-od005 .wave-bar--gap1 .wave-bar__fill { height: 10px; background: var(--color-border-subtle); }
.preview-od005 .wave-bar--s2 .wave-bar__fill { height: 62px; background: var(--color-text-secondary); }
.preview-od005 .wave-bar--gap2 .wave-bar__fill { height: 10px; background: var(--color-border-subtle); }
.preview-od005 .wave-bar--s3 .wave-bar__fill { height: 66px; background: var(--color-text-secondary); }
.preview-od005 .wave-bar--gap3 .wave-bar__fill { height: 10px; background: var(--color-border-subtle); }
.preview-od005 .wave-bar--s4 .wave-bar__fill { height: 58px; background: var(--color-text-secondary); }
.preview-od005 .wave-bar--end .wave-bar__fill { height: 14px; background: var(--color-border); }
.preview-od005 .wave-labels {
  display: flex; justify-content: space-between; margin-top: 12px;
  font-family: var(--font-mono); font-size: 9px; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-secondary);
}

/* Wave Indicator */
.preview-od005 .wave-indicator {
  display: flex; flex-direction: column; gap: 8px; align-items: center;
}
.preview-od005 .wave-indicator__zone {
  width: 8px; height: 24px; background: var(--color-border);
}
.preview-od005 .wave-indicator__zone--active { background: var(--color-primary); }
.preview-od005 .wave-indicator__label {
  font-family: var(--font-mono); font-size: 9px; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-secondary);
  writing-mode: vertical-rl; text-orientation: mixed; margin-top: 8px;
}

/* Exploration Header */
.preview-od005 .exploration-header {
  border-bottom: 3px solid var(--color-primary);
  padding: 32px 24px;
  background: var(--color-text);
  color: #FAFAF5;
}
.preview-od005 .exploration-id {
  font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 500;
  color: var(--color-text-secondary); text-transform: uppercase;
  letter-spacing: 0.15em; margin-bottom: 8px;
}
.preview-od005 .exploration-title {
  font-family: var(--font-display); font-size: 1.75rem; font-style: italic;
  color: #FAFAF5; margin-bottom: 12px; line-height: 1.15;
}
.preview-od005 .exploration-hypothesis {
  font-size: var(--type-body); color: var(--color-text-secondary);
  max-width: 60ch; line-height: 1.6;
}
.preview-od005 .exploration-meta {
  display: flex; gap: 24px; margin-top: 16px;
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary); flex-wrap: wrap;
}
.preview-od005 .exploration-meta__value { color: var(--color-primary); }

/* Breadcrumb */
.preview-od005 .breadcrumb {
  font-family: var(--font-mono); font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-text-secondary); margin-bottom: 16px;
}
.preview-od005 .breadcrumb a { color: var(--color-text-secondary); text-decoration: none; }
.preview-od005 .breadcrumb__separator { margin: 0 8px; color: var(--color-border); }
.preview-od005 .breadcrumb__current {
  font-family: var(--font-display); font-style: italic; font-size: 13px;
  text-transform: none; letter-spacing: 0; color: var(--color-text);
}

/* Checkpoint Callout */
.preview-od005 .callout--checkpoint {
  border-left: 4px solid var(--accent-green);
  background: var(--color-border-subtle);
  padding: 16px 20px;
}
.preview-od005 .callout--checkpoint .callout__label {
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text); margin-bottom: 8px;
}
.preview-od005 .callout--checkpoint .callout__body { font-size: 14px; line-height: 1.6; }

/* Footer Territory Map */
.preview-od005 .exploration-footer {
  border-top: 3px solid var(--color-primary);
  padding-top: 24px;
}
.preview-od005 .footer-meta {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary);
}
.preview-od005 .footer-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px;
}
.preview-od005 .footer-link {
  font-size: 13px; color: var(--color-text-secondary); text-decoration: none;
  padding: 12px; border: 1px solid var(--color-border-subtle); display: block;
}
.preview-od005 .footer-link__name {
  font-family: var(--font-display); font-style: italic; font-size: 15px;
  color: var(--color-text); display: block; margin-bottom: 4px;
}

/* Territory Tile */
.preview-od005 .territory-tile {
  border: 3px solid var(--color-text); padding: 20px; background: white;
  position: relative; transition: border-color 0.15s, background-color 0.15s;
  text-decoration: none; color: inherit; display: block;
}
.preview-od005 .territory-tile::after {
  content: ''; position: absolute; top: 4px; left: 4px;
  width: 100%; height: 100%; border: 3px solid var(--offset-color);
  z-index: -1; pointer-events: none;
}
.preview-od005 .territory-tile__marker { width: 8px; height: 8px; background: var(--color-primary); margin-bottom: 12px; }
.preview-od005 .territory-tile__name {
  font-family: var(--font-display); font-size: 20px; font-style: italic;
  margin-bottom: 8px; line-height: 1.2;
}
.preview-od005 .territory-tile__description {
  font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 12px;
}
.preview-od005 .territory-tile__badge {
  font-family: var(--font-mono); font-size: 10px; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-primary);
  border: 1px solid var(--color-primary); padding: 2px 8px; display: inline-block;
}

/* Territory Grid */
.preview-od005 .territory-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
}

/* Spoke Section */
.preview-od005 .spoke { padding: 32px 0; }
.preview-od005 .spoke__heading {
  font-family: var(--font-display); font-size: var(--type-section); font-style: italic;
  margin-bottom: 12px; padding-bottom: 12px; border-bottom: 3px solid var(--color-primary);
  line-height: 1.2;
}
.preview-od005 .spoke__intro {
  font-size: 15px; color: var(--color-text-secondary); max-width: 60ch;
  margin-bottom: 32px; line-height: 1.7;
}

/* Spoke Content Section */
.preview-od005 .spoke-grid { display: grid; grid-template-columns: 3fr 1fr; gap: 32px; }
.preview-od005 .spoke-section { margin-bottom: 32px; }
.preview-od005 .spoke-section__heading {
  font-family: var(--font-display); font-size: var(--type-subsection); font-style: italic;
  margin-bottom: 12px;
}
.preview-od005 .spoke-section p { max-width: 65ch; margin-bottom: 16px; font-size: 15px; line-height: 1.7; }

/* Sidebar Panel */
.preview-od005 .sidebar-panel {
  border-left: 4px solid var(--color-border); padding-left: 16px;
}
.preview-od005 .sidebar-panel__title {
  font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 12px;
}
.preview-od005 .sidebar-panel__list {
  list-style: square; padding-left: 16px; font-size: 13px;
  color: var(--color-text-secondary); line-height: 1.8;
}

/* Callout Family */
.preview-od005 .callout {
  margin: 16px 0; border-left: 4px solid; padding: 16px 20px;
}
.preview-od005 .callout .callout__label {
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text); margin-bottom: 8px;
}
.preview-od005 .callout__body { font-size: 14px; line-height: 1.6; }
.preview-od005 .callout--info { border-left-color: var(--accent-blue); background: var(--color-border-subtle); }
.preview-od005 .callout--tip { border-left-color: var(--accent-green); background: var(--color-border-subtle); }
.preview-od005 .callout--gotcha { border-left-color: var(--accent-coral); background: var(--color-border-subtle); }
.preview-od005 .callout--essence { border-left-color: var(--accent-purple); background: var(--color-border-subtle); }
.preview-od005 .callout--essence .callout__body {
  font-family: var(--font-display); font-style: italic; font-size: 16px; line-height: 1.6;
}

/* Code Block */
.preview-od005 .code-block {
  background: #1A1A1A; font-family: var(--font-mono); font-size: var(--type-code);
  line-height: 1.5; color: #FAFAF5; padding: 24px 32px; position: relative;
  border: 3px solid var(--color-border); overflow-x: auto;
}
.preview-od005 .code-block__header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border);
}
.preview-od005 .code-block__lang {
  font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}
.preview-od005 .code--comment { color: #666666; }
.preview-od005 .code--keyword { color: #E83025; }
.preview-od005 .code--string { color: #6B9B7A; }
.preview-od005 .code--function { color: #4A7C9B; }

/* Decision Table */
.preview-od005 .decision-table { overflow-x: auto; }
.preview-od005 .decision-table table { width: 100%; border-collapse: collapse; font-size: 13px; }
.preview-od005 .decision-table th {
  font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase;
  letter-spacing: 0.08em; text-align: left; padding: 12px 16px;
  border-bottom: 3px solid var(--color-text); color: var(--color-text-secondary);
}
.preview-od005 .decision-table td {
  padding: 12px 16px; border-bottom: 1px solid var(--color-border-subtle); vertical-align: top;
}

/* Flowchart */
.preview-od005 .flowchart {
  background: var(--color-border-subtle); padding: 20px; font-family: var(--font-mono);
  font-size: 12px; line-height: 1.8; border: 3px solid var(--color-border);
  white-space: pre; overflow-x: auto;
}
.preview-od005 .flowchart__title {
  font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--color-text-secondary); margin-bottom: 12px; display: block; white-space: normal;
}

/* Return-to-Map Link */
.preview-od005 .return-link {
  display: inline-block; padding: 12px 20px; border: 3px solid var(--color-text);
  font-family: var(--font-mono); font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.08em; text-decoration: none; color: var(--color-text);
}

/* Spoke Divider */
.preview-od005 .spoke-divider { height: 1px; background: var(--color-border); margin: 32px 0; }

/* Footer Link Card */
.preview-od005 .footer-link-card {
  font-size: 13px; color: var(--color-text-secondary); text-decoration: none;
  padding: 12px; border: 1px solid var(--color-border-subtle); display: block;
}
.preview-od005 .footer-link-card__name {
  font-family: var(--font-display); font-style: italic; font-size: 15px;
  color: var(--color-text); display: block; margin-bottom: 4px;
}

/* Essence Callout Variant */
.preview-od005 .callout--essence-variant {
  border-left: 4px solid var(--accent-purple);
  background: var(--color-border-subtle);
  padding: 24px 32px;
}
.preview-od005 .callout--essence-variant .callout__label {
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;
}
.preview-od005 .callout--essence-variant .callout__body {
  font-family: var(--font-display); font-style: italic; font-size: 16px; line-height: 1.6;
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for OD-005
// ═══════════════════════════════════════════════════════════════════════════
const previewsOd005 = {

  'WAVE Density Visualization': `<div class="wave-visualization">
  <div class="wave-visualization__title">Density Map: Wave Oscillation Across Territories</div>
  <div class="wave-diagram">
    <div class="wave-bar wave-bar--hub"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--s1"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--gap1"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--s2"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--gap2"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--s3"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--gap3"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--s4"><div class="wave-bar__fill"></div></div>
    <div class="wave-bar wave-bar--end"><div class="wave-bar__fill"></div></div>
  </div>
  <div class="wave-labels">
    <span>Hub</span><span>State</span><span>Patterns</span><span>Data</span><span>Hub</span>
  </div>
</div>`,

  'WAVE Density Indicator (Fixed Sidebar)': `<div class="wave-indicator">
  <div class="wave-indicator__zone"></div>
  <div class="wave-indicator__zone wave-indicator__zone--active"></div>
  <div class="wave-indicator__zone"></div>
  <div class="wave-indicator__zone"></div>
  <div class="wave-indicator__zone"></div>
  <div class="wave-indicator__zone"></div>
  <span class="wave-indicator__label">Zone</span>
</div>`,

  'Exploration Header': `<div class="exploration-header">
  <div class="exploration-id">OD-005</div>
  <div class="exploration-title">Spatial/Hub-Spoke Structure</div>
  <div class="exploration-hypothesis">What if documentation was organized spatially -- as a hub-and-spoke map?</div>
  <div class="exploration-meta">
    <span>Density: <span class="exploration-meta__value">WAVE + ISLANDS</span></span>
    <span>Score: <span class="exploration-meta__value">35/40</span></span>
  </div>
</div>`,

  'Breadcrumb Navigation': `<nav class="breadcrumb">
  <a href="#">Hub</a>
  <span class="breadcrumb__separator">&#9656;</span>
  <a href="#">State Management</a>
  <span class="breadcrumb__separator">&#9656;</span>
  <span class="breadcrumb__current">Patterns</span>
</nav>`,

  'Exploration Meta Chips (in Header)': `<div class="exploration-header" style="padding:24px;">
  <div class="exploration-meta">
    <span>Density: <span class="exploration-meta__value">WAVE</span></span>
    <span>Secondary: <span class="exploration-meta__value">ISLANDS</span></span>
    <span>Score: <span class="exploration-meta__value">35/40</span></span>
    <span>Soul: <span class="exploration-meta__value">100%</span></span>
  </div>
</div>`,

  'Checkpoint Callouts': `<div class="callout--checkpoint">
  <div class="callout__label">Checkpoint</div>
  <div class="callout__body">Before navigating to the next spoke, verify: component API documented, edge cases listed, references linked.</div>
</div>`,

  'Footer Territory Map Summary': `<div class="exploration-footer">
  <div class="footer-meta">Territory Map -- 6 Zones Explored</div>
  <div class="footer-grid">
    <div class="footer-link">
      <span class="footer-link__name">State Management</span>
      Density: Compressed
    </div>
    <div class="footer-link">
      <span class="footer-link__name">Design Patterns</span>
      Density: Moderate
    </div>
  </div>
</div>`,

  'Hub-to-Spoke Density Transition (WAVE Oscillation)': `<div>
  <div style="background:var(--color-zone-sparse);padding:16px 20px;text-align:center;font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);border:1px solid var(--color-border-subtle);">Hub (Sparse) -- overview tiles, generous whitespace</div>
  <div style="width:2px;height:24px;background:var(--color-primary);margin:0 auto;"></div>
  <div style="background:var(--color-zone-dense);padding:16px 20px;text-align:center;font-size:14px;line-height:1.7;border-left:4px solid var(--color-primary);">Spoke (Dense) -- full content, code blocks, tables, sidebars</div>
  <div style="width:2px;height:24px;background:var(--color-primary);margin:0 auto;"></div>
  <div style="background:var(--color-zone-sparse);padding:16px 20px;text-align:center;font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);border:1px solid var(--color-border-subtle);">Hub (Sparse Return)</div>
</div>`,

  'Spoke Internal Density Arc (Section Scale WAVE)': `<div>
  <div style="padding:12px 16px;font-family:var(--font-display);font-style:italic;font-size:15px;color:var(--color-text-secondary);line-height:1.7;">Intro (sparse) -- brief overview of the territory</div>
  <div style="height:1px;background:var(--color-border-subtle);margin:8px 0;"></div>
  <div style="padding:12px 16px;font-size:14px;line-height:1.5;border-left:4px solid var(--color-text-secondary);">Content (dense) -- code examples, decision tables, detailed explanation with sidebar references</div>
  <div style="height:1px;background:var(--color-border-subtle);margin:8px 0;"></div>
  <div style="padding:12px 16px;font-family:var(--font-display);font-style:italic;font-size:14px;color:var(--color-text-secondary);">Exit (sparse) -- return-to-map link, essence callout</div>
</div>`,

  'Breadcrumb Font Shift (Monospace to Serif)': `<div>
  <div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);margin-bottom:12px;">
    <span>Hub</span> <span style="margin:0 8px;color:var(--color-border);">&#9656;</span>
    <span>State</span> <span style="margin:0 8px;color:var(--color-border);">&#9656;</span>
    <span style="font-family:var(--font-display);font-style:italic;font-size:13px;text-transform:none;letter-spacing:0;color:var(--color-text);">Patterns</span>
  </div>
  <div style="font-size:12px;color:var(--color-text-secondary);margin-top:8px;border-top:1px solid var(--color-border-subtle);padding-top:8px;">
    Monospace (system navigation) &#8594; Serif (current territory = content voice)
  </div>
</div>`,

  'Sparse-to-Dense Zone Background Encoding': `<div>
  <div style="background:#FEF9F5;padding:12px 16px;border:1px solid var(--color-border-subtle);margin-bottom:4px;">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);">Sparse Zone</span>
    <span style="float:right;font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);">#FEF9F5</span>
  </div>
  <div style="background:#FFFFFF;padding:12px 16px;border:1px solid var(--color-border-subtle);margin-bottom:4px;">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);">Dense Zone</span>
    <span style="float:right;font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);">#FFFFFF</span>
  </div>
  <div style="background:#FAF5ED;padding:12px 16px;border:1px solid var(--color-border-subtle);">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);">Breathing Zone</span>
    <span style="float:right;font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);">#FAF5ED</span>
  </div>
</div>`,

  'Scroll-Triggered Reveal Animation': `<div>
  <div style="opacity:0.3;transform:translateY(12px);padding:8px 16px;font-size:13px;color:var(--color-text-secondary);border-left:2px solid var(--color-border-subtle);">Element entering viewport (opacity: 0, translateY: 16px)</div>
  <div style="margin:8px 0;text-align:center;font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);">&#8595; scroll &#8595;</div>
  <div style="opacity:1;padding:8px 16px;font-size:14px;border-left:2px solid var(--color-primary);">Element fully revealed (opacity: 1, translateY: 0)</div>
  <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-top:8px;">animation-timeline: view(); animation-range: entry 10% entry 40%</div>
</div>`,

  'Code Block Sparse-Dense Character Scale': `<div class="code-block" style="font-size:12px;padding:16px 20px;">
  <div class="code-block__header" style="margin-bottom:8px;padding-bottom:6px;">
    <span class="code-block__lang">jsx</span>
  </div>
  <div><span class="code--comment">// Sparse: comments provide breathing room</span></div>
  <div><span class="code--keyword">const</span> <span class="code--function">useStore</span> = () => {'{'}</div>
  <div>  <span class="code--keyword">return</span> <span class="code--function">createStore</span>(<span class="code--string">'app'</span>);</div>
  <div>{'}'}</div>
</div>`,

  'Territory Tile': `<div style="position:relative;display:inline-block;">
  <div class="territory-tile">
    <div class="territory-tile__marker"></div>
    <div class="territory-tile__name">State Management</div>
    <div class="territory-tile__description">5 pieces, 6 rules, 33 tokens. The perceptual bedrock.</div>
    <div class="territory-tile__badge">Dense</div>
  </div>
</div>`,

  'Territory Grid': `<div class="territory-grid">
  <div class="territory-tile" style="position:relative;">
    <div class="territory-tile__marker"></div>
    <div class="territory-tile__name">Soul</div>
    <div class="territory-tile__description">5 pieces, 6 rules.</div>
    <div class="territory-tile__badge">Compressed</div>
  </div>
  <div class="territory-tile" style="position:relative;">
    <div class="territory-tile__marker"></div>
    <div class="territory-tile__name">Patterns</div>
    <div class="territory-tile__description">Design patterns & composition.</div>
    <div class="territory-tile__badge">Moderate</div>
  </div>
</div>`,

  'Spoke Section': `<div class="spoke">
  <div class="breadcrumb">
    <a href="#">Hub</a><span class="breadcrumb__separator">&#9656;</span>
    <span class="breadcrumb__current">State Management</span>
  </div>
  <div class="spoke__heading">State Management</div>
  <div class="spoke__intro">React state management patterns across scales -- local, shared, and global.</div>
</div>`,

  'Spoke Content Section': `<div class="spoke-grid">
  <div>
    <div class="spoke-section">
      <div class="spoke-section__heading">Core Patterns</div>
      <p>State flows downward through the component tree. Each level introduces its own management strategy.</p>
    </div>
  </div>
  <div class="sidebar-panel">
    <div class="sidebar-panel__title">References</div>
    <ul class="sidebar-panel__list">
      <li>R1-001 Density Rhythm</li>
      <li>R3-006 WAVE Pattern</li>
    </ul>
  </div>
</div>`,

  'Sidebar Panel': `<div class="sidebar-panel">
  <div class="sidebar-panel__title">Related Findings</div>
  <ul class="sidebar-panel__list">
    <li>R1-001 Density Rhythm</li>
    <li>R3-006 WAVE Pattern</li>
    <li>R3-047 ISLANDS Contrast</li>
  </ul>
</div>`,

  'Callout (Family System)': `<div>
  <div class="callout callout--info">
    <div class="callout__label">Info</div>
    <div class="callout__body">State colocation reduces prop drilling by 60%.</div>
  </div>
  <div class="callout callout--tip">
    <div class="callout__label">Tip</div>
    <div class="callout__body">Prefer useReducer for complex state transitions.</div>
  </div>
  <div class="callout callout--gotcha">
    <div class="callout__label">Gotcha</div>
    <div class="callout__body">Avoid storing derived state -- compute it.</div>
  </div>
</div>`,

  'Code Block': `<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">jsx</span>
  </div>
  <div><span class="code--comment">/* LOCKED design tokens */</span></div>
  <div><span class="code--keyword">:root</span> {'{'}</div>
  <div>  --border-radius: <span class="code--string">0</span>;</div>
  <div>  --box-shadow: <span class="code--string">none</span>;</div>
  <div>{'}'}</div>
</div>`,

  'Decision Table': `<div class="decision-table">
  <table>
    <thead><tr><th>Pattern</th><th>Use When</th><th>Avoid When</th></tr></thead>
    <tbody>
      <tr><td>useState</td><td>Simple local state</td><td>Shared across components</td></tr>
      <tr><td>useReducer</td><td>Complex transitions</td><td>Simple toggles</td></tr>
      <tr><td>Context</td><td>Theme, auth</td><td>Frequently changing data</td></tr>
    </tbody>
  </table>
</div>`,

  'Flowchart (Text-Based)': `<div class="flowchart"><span class="flowchart__title">Decision: State Location</span>
[Component State?]
  ├── YES → useState / useReducer
  └── NO → [Shared?]
        ├── YES → Context / Store
        └── NO → Server State</div>`,

  'Return-to-Map Link': `<a class="return-link" href="#">&#8592; Return to Territory Map</a>`,

  'Spoke Divider': `<div>
  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">End of State Management</div>
  <div class="spoke-divider"></div>
  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:0.08em;margin-top:8px;">Next: Design Patterns</div>
</div>`,

  'Footer Link Card': `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
  <div class="footer-link">
    <span class="footer-link__name">State Management</span>
    Spoke 1 of 6 -- Density: Compressed
  </div>
  <div class="footer-link">
    <span class="footer-link__name">Design Patterns</span>
    Spoke 2 of 6 -- Density: Moderate
  </div>
</div>`,

  'Essence Callout (Variant)': `<div class="callout callout--essence">
  <div class="callout__label">Essence</div>
  <div class="callout__body">The hub-spoke structure creates natural WAVE density: users depart from sparse overview into dense content, then return to breathe.</div>
</div>`,

};


// ═══════════════════════════════════════════════════════════════════════════
// SCOPED CSS for OD-006
// ═══════════════════════════════════════════════════════════════════════════
const cssOd006 = `
.preview-od006 {
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
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  --question-width: 60%;
  --answer-width: 100%;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: var(--type-body);
  background: var(--color-background);
  border-radius: 0;
}
.preview-od006 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-od006 h1, .preview-od006 h2, .preview-od006 h3 { all: unset; display: block; }

/* Scroll Witness */
.preview-od006 .scroll-witness {
  padding: 16px 12px; border-right: 3px solid var(--color-border);
  background: var(--color-background);
}
.preview-od006 .scroll-witness__title {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--color-text-secondary); margin-bottom: 16px;
}
.preview-od006 .toc__item {
  display: flex; align-items: flex-start; gap: 8px;
  margin-bottom: 12px; text-decoration: none; color: var(--color-text);
}
.preview-od006 .toc__marker {
  flex-shrink: 0; width: 4px; height: 24px;
  border: 1px solid var(--color-text); position: relative; overflow: hidden;
}
.preview-od006 .toc__marker--filled {
  background: var(--color-primary);
}
.preview-od006 .toc__label {
  font-family: var(--font-body); font-size: var(--type-meta);
  font-weight: 500; line-height: 1.3; color: var(--color-text-secondary);
}
.preview-od006 .toc__mode {
  display: block; font-family: var(--font-mono); font-size: 0.625rem;
  text-transform: uppercase; letter-spacing: 0.05em;
  color: var(--color-text-secondary); opacity: 0.7; margin-top: 2px;
}

/* Fractal Annotation Layer */
.preview-od006 .fractal-annotations {
  padding: 16px 8px; border-right: 1px solid var(--color-border);
  background: var(--color-zone-breathing);
}
.preview-od006 .fractal-annotation {
  font-family: var(--font-mono); font-size: var(--type-meta);
  color: var(--color-text-secondary); letter-spacing: 0.04em;
  writing-mode: vertical-lr; text-orientation: mixed;
  transform: rotate(180deg); white-space: nowrap;
  margin-bottom: 24px; opacity: 0.6;
}
.preview-od006 .fractal-annotation.active { opacity: 1; color: var(--color-primary); }
.preview-od006 .fractal-annotation__scale {
  display: block; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;
}
.preview-od006 .fractal-annotation__ratio {
  display: block; font-weight: 400; opacity: 0.7; margin-top: 4px;
}

/* Visual Index */
.preview-od006 .visual-index {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;
  border: 3px solid var(--color-text);
}
.preview-od006 .visual-index__cell {
  padding: 12px; border: 1px solid var(--color-border);
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.preview-od006 .visual-index__preview {
  width: 100%; aspect-ratio: 4/3; display: flex; align-items: center;
  justify-content: center; margin-bottom: 8px;
}
.preview-od006 .visual-index__label {
  font-size: 12px; font-weight: 600; line-height: 1.3;
}
.preview-od006 .visual-index__sublabel {
  display: block; font-family: var(--font-mono); font-size: 0.625rem;
  color: var(--color-text-secondary); margin-top: 2px;
}
/* Mini patterns */
.preview-od006 .mini-pulse { display: flex; flex-direction: column; gap: 3px; align-items: center; }
.preview-od006 .mini-pulse__bar { height: 4px; background: var(--color-text); }
.preview-od006 .mini-pulse__bar--narrow { width: 60%; }
.preview-od006 .mini-pulse__bar--wide { width: 100%; }
.preview-od006 .mini-crescendo { display: flex; align-items: flex-end; gap: 2px; height: 32px; }
.preview-od006 .mini-crescendo__bar { width: 6px; background: var(--color-text); }
.preview-od006 .mini-islands { display: flex; gap: 6px; }
.preview-od006 .mini-island { width: 16px; height: 16px; border: 3px solid var(--color-text); }
.preview-od006 .mini-geological { display: flex; flex-direction: column; gap: 2px; width: 80%; }
.preview-od006 .mini-geological__layer { height: 8px; }
.preview-od006 .mini-wave__container { width: 40px; height: 40px; position: relative; display: flex; align-items: center; justify-content: center; }
.preview-od006 .mini-wave__hub { width: 8px; height: 8px; background: var(--color-text); }
.preview-od006 .mini-wave__spoke-h { position: absolute; width: 100%; height: 1px; background: var(--color-text); top: 50%; }
.preview-od006 .mini-wave__spoke-v { position: absolute; height: 100%; width: 1px; background: var(--color-text); left: 50%; }
.preview-od006 .mini-fractal { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; width: 30px; height: 30px; }
.preview-od006 .mini-fractal__cell { background: var(--color-border); }
.preview-od006 .mini-fractal__cell--active { background: var(--color-primary); }

/* Section Header Mode Indicator */
.preview-od006 .section-header__mode {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary); margin-top: 8px;
  display: flex; align-items: center; gap: 8px;
}
.preview-od006 .section-header__mode::before {
  content: ''; display: inline-block; width: 8px; height: 8px;
  background: var(--color-primary);
}

/* Section Divider */
.preview-od006 .section-divider {
  margin: 32px 0; padding: 24px 0; background: var(--color-zone-breathing);
  text-align: center; border-top: 1px solid var(--color-border);
}
.preview-od006 .section-divider__transition {
  font-family: var(--font-mono); font-size: 0.625rem;
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--color-text-secondary);
}

/* Certainty Badge */
.preview-od006 .certainty-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 0.625rem;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary); margin-bottom: 12px;
}
.preview-od006 .certainty-badge__icon { width: 8px; height: 8px; flex-shrink: 0; }
.preview-od006 .certainty-badge--established .certainty-badge__icon { background: var(--color-text); }
.preview-od006 .certainty-badge--emerging .certainty-badge__icon { border: 1px solid var(--color-text-secondary); background: transparent; }
.preview-od006 .certainty-badge--exploratory .certainty-badge__icon { border: 1px solid var(--color-border); background: transparent; }

/* Synthesis Cards & Grid */
.preview-od006 .synthesis-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.preview-od006 .synthesis-card { border: 3px solid var(--color-text); padding: 16px; }
.preview-od006 .synthesis-card__org {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-primary); margin-bottom: 4px;
}
.preview-od006 .synthesis-card__density {
  font-family: var(--font-display); font-size: var(--type-subsection);
  margin-bottom: 8px;
}
.preview-od006 .synthesis-card__proof {
  font-size: var(--type-code); color: var(--color-text-secondary); line-height: 1.5;
}

/* Comparison Table */
.preview-od006 .comparison-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.preview-od006 .comparison-table th {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.06em;
  text-align: left; padding: 8px 12px;
  border-bottom: 3px solid var(--color-text); color: var(--color-text-secondary);
}
.preview-od006 .comparison-table td {
  padding: 8px 12px; border-bottom: 1px solid var(--color-border-subtle);
}
.preview-od006 .comparison-table tr:last-child td { border-bottom: none; }

/* Page Header */
.preview-od006 .page-header {
  background: var(--color-text); padding: 32px 24px;
  border-bottom: 3px solid var(--color-primary);
}
.preview-od006 .page-header__meta {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--color-text-secondary); margin-bottom: 8px;
}
.preview-od006 .page-header__title {
  font-family: var(--font-display); font-size: 2rem;
  line-height: 1.1; letter-spacing: -0.02em; color: #FAFAF5; margin-bottom: 12px;
}
.preview-od006 .page-header__subtitle {
  font-family: var(--font-display); font-style: italic;
  font-size: var(--type-section); color: var(--color-text-secondary); line-height: 1.3;
}
.preview-od006 .page-header__thesis {
  margin-top: 24px; padding: 16px 24px;
  border-left: 4px solid var(--color-primary); background: transparent;
}
.preview-od006 .page-header__thesis p {
  font-family: var(--font-display); font-style: italic;
  font-size: 1.125rem; line-height: 1.6; color: #FAFAF5;
}

/* Section Header */
.preview-od006 .section-header {
  background: var(--color-background); padding: 16px 0 12px 0;
  border-bottom: 3px solid transparent;
}
.preview-od006 .section-header.scrolled { border-bottom-color: var(--color-primary); }
.preview-od006 .section-header__number {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--color-primary); display: block; margin-bottom: 4px;
}
.preview-od006 .section-header__title {
  font-family: var(--font-display); font-size: var(--type-section);
  line-height: 1.2; color: var(--color-text);
}

/* Editorial Drop Cap */
.preview-od006 .section-opening {
  font-family: var(--font-body); font-size: var(--type-body);
  line-height: 1.7;
}
.preview-od006 .drop-cap {
  font-family: var(--font-display); font-size: 4.2em; float: left;
  line-height: 0.8; padding-right: 0.12em; padding-top: 0.05em;
  color: var(--color-primary); font-weight: 400;
}

/* Solid Offset */
.preview-od006 .solid-offset {
  position: relative; border: 3px solid var(--color-text);
  background: var(--color-background); border-radius: 0; box-shadow: none;
}
.preview-od006 .solid-offset::after {
  content: ''; position: absolute; top: 4px; left: 4px;
  width: 100%; height: 100%; background: var(--offset-color); z-index: -1;
}

/* Q/A Pair */
.preview-od006 .qa-pair { margin-bottom: 32px; }
.preview-od006 .question {
  max-width: 60%; padding: 12px 16px; margin-bottom: 8px;
  display: flex; align-items: flex-start; gap: 12px;
}
.preview-od006 .question__marker {
  flex-shrink: 0; width: 8px; height: 8px;
  background: var(--color-primary); margin-top: 6px;
}
.preview-od006 .question__text {
  font-family: var(--font-display); font-size: 1.375rem; line-height: 1.3;
}
.preview-od006 .answer {
  width: 100%; padding: 16px 24px; background: var(--color-zone-dense);
  border-left: 4px solid var(--color-border);
}
.preview-od006 .answer p { margin-bottom: 12px; line-height: 1.7; }

/* Dual Lens */
.preview-od006 .dual-lens { margin: 16px 0; }
.preview-od006 .dual-lens__toggle {
  display: flex; gap: 0; border: 3px solid var(--color-text);
  overflow: hidden; width: fit-content; margin-bottom: 16px;
}
.preview-od006 .dual-lens__btn {
  padding: 8px 24px; border: none; background: var(--color-background);
  font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.06em; cursor: pointer;
  color: var(--color-text); border-right: 1px solid var(--color-text);
}
.preview-od006 .dual-lens__btn:last-child { border-right: none; }
.preview-od006 .dual-lens__btn.active {
  background: var(--color-text); color: var(--color-background);
}
.preview-od006 .view-why {
  font-family: var(--font-display); font-size: 1.125rem;
  line-height: 1.7; font-style: italic;
}
.preview-od006 .view-how {
  font-family: var(--font-mono); font-size: var(--type-code);
  line-height: 1.5; background: var(--color-border-subtle); padding: 16px;
}

/* Territory Tile (with Solid Offset) */
.preview-od006 .territory-tile {
  position: relative; border: 3px solid var(--color-text); padding: 20px;
  background: var(--color-background); transition: border-color 0.15s;
}
.preview-od006 .territory-tile::after {
  content: ''; position: absolute; top: 4px; left: 4px;
  width: 100%; height: 100%; background: var(--offset-color); z-index: -1;
}
.preview-od006 .territory-tile__name {
  font-family: var(--font-display); font-size: var(--type-subsection);
  font-style: italic; margin-bottom: 8px;
}
.preview-od006 .territory-tile__desc {
  font-size: var(--type-code); color: var(--color-text-secondary); line-height: 1.5;
  margin-bottom: 8px;
}
.preview-od006 .territory-tile__density {
  font-family: var(--font-mono); font-size: 0.625rem; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--color-primary);
}

/* Callout System */
.preview-od006 .callout {
  border-left: 4px solid var(--accent-blue); padding: 16px 24px;
  margin: 16px 0; background: transparent;
}
.preview-od006 .callout .callout__label {
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text); margin-bottom: 8px;
}
.preview-od006 .callout__body {
  font-family: var(--font-body); font-size: var(--type-body); line-height: 1.6;
}
.preview-od006 .callout--insight { border-left-color: var(--accent-blue); }
.preview-od006 .callout--discovery { border-left-color: var(--accent-green); }
.preview-od006 .callout--warning { border-left-color: var(--accent-coral); }
.preview-od006 .callout--note { border-left-color: var(--accent-amber); }
.preview-od006 .callout--essence { border-left-color: var(--accent-purple); padding: 24px 32px; }
.preview-od006 .callout--essence .callout__body {
  font-family: var(--font-display); font-style: italic;
  font-size: 1.125rem; line-height: 1.5;
}

/* Task Island */
.preview-od006 .task-island { margin: 24px 0; }
.preview-od006 .task-island__header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.preview-od006 .task-island__number {
  width: 28px; height: 28px; border: 3px solid var(--color-primary);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: var(--type-code);
  font-weight: 600; color: var(--color-primary); flex-shrink: 0;
}
.preview-od006 .task-island__title {
  font-family: var(--font-body); font-size: var(--type-subsection); font-weight: 600;
}
.preview-od006 .task-step {
  padding: 8px 0 8px 40px; border-left: 1px solid var(--color-border); margin-left: 14px;
}
.preview-od006 .task-step__marker {
  display: inline-block; width: 6px; height: 6px;
  background: var(--color-text-secondary); margin-right: 8px; vertical-align: middle;
}

/* Task Checkpoint */
.preview-od006 .task-checkpoint {
  margin: 12px 0 12px 40px; padding: 12px 16px;
  border-left: 4px solid var(--accent-green);
  font-size: var(--type-code); color: var(--accent-green);
}
.preview-od006 .task-checkpoint::before {
  content: 'CHECKPOINT'; font-family: var(--font-mono); font-size: 0.625rem;
  font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
  display: block; margin-bottom: 4px;
}

/* Act Marker */
.preview-od006 .act { margin-bottom: 24px; }
.preview-od006 .act-marker {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.preview-od006 .act-marker__icon {
  width: 24px; height: 24px; border: 3px solid var(--color-text);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600;
}
.preview-od006 .act-marker__label {
  font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary);
}

/* Stratum */
.preview-od006 .stratum { margin-bottom: 24px; }
.preview-od006 .stratum--established {
  border-left: 4px solid var(--color-text); padding-left: 24px;
  line-height: 1.4; font-weight: 500;
}
.preview-od006 .stratum--emerging {
  border-left: 3px solid var(--color-text-secondary); padding-left: 24px;
  line-height: 1.6; font-weight: 400;
}
.preview-od006 .stratum--exploratory {
  border-left: 1px solid var(--color-border); padding-left: 24px;
  line-height: 1.8; font-weight: 300; font-style: italic;
}

/* Pull Quote */
.preview-od006 .pull-quote {
  font-family: var(--font-display); font-style: italic;
  font-size: 1.5rem; line-height: 1.3; border-left: 4px solid var(--color-primary);
  padding: 16px 24px; margin: 24px 0;
}
.preview-od006 .pull-quote__attribution {
  display: block; font-family: var(--font-mono); font-size: var(--type-meta);
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary); margin-top: 12px; font-style: normal;
}

/* Code Block */
.preview-od006 .code-block {
  background: var(--color-border-subtle); padding: 24px; position: relative;
  overflow-x: auto;
}
.preview-od006 .code-block code {
  font-family: var(--font-mono); font-size: var(--type-code);
  line-height: 1.5; color: var(--color-text);
}
.preview-od006 .code-block .comment { color: var(--color-text-secondary); }
.preview-od006 .code-block .keyword { color: var(--color-primary); font-weight: 500; }
.preview-od006 .code-block .string { color: var(--accent-green); }
.preview-od006 .code-block__label {
  position: absolute; top: 8px; right: 12px;
  font-family: var(--font-mono); font-size: 0.625rem;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--color-text-secondary);
}

/* Collapsible Details */
.preview-od006 details {
  border-left: 4px solid var(--color-border); margin: 12px 0;
}
.preview-od006 details summary {
  padding: 8px 16px; cursor: pointer; font-weight: 600;
  font-size: var(--type-code); color: var(--color-text-secondary);
  list-style: none;
}
.preview-od006 details summary::before {
  content: '\\25B8'; display: inline-block; margin-right: 8px;
  font-size: 0.75rem; transition: transform 0.15s ease;
}
.preview-od006 details[open] summary::before { transform: rotate(90deg); }
.preview-od006 .details-content {
  padding: 8px 24px 12px; font-size: var(--type-code); line-height: 1.6;
}

/* Page Footer */
.preview-od006 .page-footer {
  border-top: 3px solid var(--color-primary);
  padding-top: 24px; margin-top: 32px;
}
.preview-od006 .page-footer__meta {
  font-family: var(--font-mono); font-size: var(--type-meta);
  line-height: 1.8; color: var(--color-text-secondary);
}

/* Skip Link */
.preview-od006 .skip-link {
  background: var(--color-primary); color: #FEF9F5;
  padding: 8px 16px; font-family: var(--font-body);
  font-size: 14px; text-decoration: none; border: none; display: inline-block;
}

/* Semantic Bridge */
.preview-od006 .concept-link {
  border-bottom: 2px solid transparent; cursor: help;
  transition: border-color 0.15s;
}
.preview-od006 .concept-link:hover { border-bottom-color: var(--color-primary); }
.preview-od006 .code-target {
  transition: border-color 0.15s, background 0.15s;
  padding: 2px 4px;
}
.preview-od006 .code-target.highlighted {
  border-left: 3px solid var(--color-primary);
  background: var(--color-border-subtle);
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW SNIPPETS for OD-006
// ═══════════════════════════════════════════════════════════════════════════
const previewsOd006 = {

  'Scroll Witness (Recursive Fractal TOC)': `<div class="scroll-witness" style="width:180px;">
  <div class="scroll-witness__title">Exploration Progress</div>
  <a class="toc__item" href="#" onclick="return false">
    <div class="toc__marker"><div class="toc__marker--filled" style="width:100%;height:100%;background:var(--color-primary);"></div></div>
    <div>
      <span class="toc__label">Thesis</span>
      <span class="toc__mode">meta</span>
    </div>
  </a>
  <a class="toc__item" href="#" onclick="return false">
    <div class="toc__marker"><div style="width:100%;height:60%;background:var(--color-primary);"></div></div>
    <div>
      <span class="toc__label">Soul Discovery</span>
      <span class="toc__mode">conversational -- PULSE</span>
    </div>
  </a>
  <a class="toc__item" href="#" onclick="return false">
    <div class="toc__marker"></div>
    <div>
      <span class="toc__label">The Arc</span>
      <span class="toc__mode">narrative -- CRESCENDO</span>
    </div>
  </a>
</div>`,

  'Fractal Annotation Layer': `<div class="fractal-annotations" style="display:flex;gap:32px;padding:16px;">
  <div class="fractal-annotation active" style="writing-mode:vertical-lr;transform:rotate(180deg);">
    <span class="fractal-annotation__scale">Page Scale</span>
    <span class="fractal-annotation__ratio">48px &rarr; 26px (1.85x)</span>
  </div>
  <div class="fractal-annotation" style="writing-mode:vertical-lr;transform:rotate(180deg);">
    <span class="fractal-annotation__scale">Section Scale</span>
    <span class="fractal-annotation__ratio">26px &rarr; 22px (1.18x)</span>
  </div>
  <div class="fractal-annotation" style="writing-mode:vertical-lr;transform:rotate(180deg);">
    <span class="fractal-annotation__scale">Component</span>
    <span class="fractal-annotation__ratio">22px &rarr; 16px</span>
  </div>
</div>`,

  'Visual Index / Pattern Echo': `<div class="visual-index">
  <div class="visual-index__cell">
    <div class="visual-index__preview">
      <div class="mini-pulse">
        <div class="mini-pulse__bar mini-pulse__bar--narrow" style="width:60%;height:4px;background:var(--color-text);"></div>
        <div class="mini-pulse__bar mini-pulse__bar--wide" style="width:100%;height:4px;background:var(--color-text);"></div>
        <div class="mini-pulse__bar mini-pulse__bar--narrow" style="width:60%;height:4px;background:var(--color-text);"></div>
      </div>
    </div>
    <div class="visual-index__label">1. Soul<span class="visual-index__sublabel">Conversational -- PULSE</span></div>
  </div>
  <div class="visual-index__cell">
    <div class="visual-index__preview">
      <div class="mini-crescendo" style="display:flex;align-items:flex-end;gap:2px;height:32px;">
        <div class="mini-crescendo__bar" style="width:6px;height:8px;background:var(--color-text);"></div>
        <div class="mini-crescendo__bar" style="width:6px;height:16px;background:var(--color-text);"></div>
        <div class="mini-crescendo__bar" style="width:6px;height:24px;background:var(--color-text);"></div>
        <div class="mini-crescendo__bar" style="width:6px;height:32px;background:var(--color-text);"></div>
      </div>
    </div>
    <div class="visual-index__label">2. Arc<span class="visual-index__sublabel">Narrative -- CRESCENDO</span></div>
  </div>
  <div class="visual-index__cell">
    <div class="visual-index__preview">
      <div class="mini-islands" style="display:flex;gap:6px;">
        <div class="mini-island"></div>
        <div class="mini-island"></div>
        <div class="mini-island"></div>
      </div>
    </div>
    <div class="visual-index__label">3. Tasks<span class="visual-index__sublabel">Task -- ISLANDS</span></div>
  </div>
</div>`,

  'Section Header Mode Indicator': `<div>
  <div class="section-header__mode">Conversational &mdash; PULSE density</div>
  <div style="margin-top:8px;" class="section-header__mode">Narrative &mdash; CRESCENDO density</div>
  <div style="margin-top:8px;" class="section-header__mode">Task-Based &mdash; ISLANDS density</div>
</div>`,

  'Section Divider with Mode Transition': `<div class="section-divider">
  <span class="section-divider__transition">Conversational &rarr; Narrative</span>
</div>`,

  'Certainty Badge': `<div>
  <div class="certainty-badge certainty-badge--established">
    <span class="certainty-badge__icon"></span>
    Established &mdash; Verified across 6+ explorations
  </div>
  <div style="margin-top:8px;" class="certainty-badge certainty-badge--emerging">
    <span class="certainty-badge__icon"></span>
    Emerging &mdash; Validated in 2-5 explorations
  </div>
  <div style="margin-top:8px;" class="certainty-badge certainty-badge--exploratory">
    <span class="certainty-badge__icon"></span>
    Exploratory &mdash; Single observation
  </div>
</div>`,

  'Synthesis Cards': `<div class="synthesis-grid">
  <div class="synthesis-card">
    <div class="synthesis-card__org">Conversational</div>
    <div class="synthesis-card__density">IS Pulse</div>
    <div class="synthesis-card__proof">Q&A alternation inherently creates sparse-dense oscillation.</div>
  </div>
  <div class="synthesis-card">
    <div class="synthesis-card__org">Narrative</div>
    <div class="synthesis-card__density">IS Crescendo</div>
    <div class="synthesis-card__proof">Three-act structure builds from sparse setup to dense climax.</div>
  </div>
</div>`,

  'Proof Table (Comparison Table in Section 6)': `<table class="comparison-table">
  <thead><tr><th>Section</th><th>Organization</th><th>Density</th></tr></thead>
  <tbody>
    <tr><td>1. Soul</td><td>Conversational</td><td>PULSE</td></tr>
    <tr><td>2. Arc</td><td>Narrative</td><td>CRESCENDO</td></tr>
    <tr style="color:var(--color-primary);font-weight:600;"><td>6. Synthesis</td><td>Emergent</td><td>FRACTAL</td></tr>
  </tbody>
</table>`,

  'Page Header Thesis Block': `<div class="page-header" style="padding:24px;">
  <div class="page-header__thesis">
    <p>This page discovers a truth hidden in plain sight: organization and density are not two layers but one phenomenon.</p>
  </div>
</div>`,

  'Page Header Meta Line': `<div style="background:var(--color-text);padding:16px 24px;">
  <div class="page-header__meta">Exploration OD-006 &mdash; Density: Emergent (Fractal Primary)</div>
</div>`,

  'Page Footer Compliance Manifest': `<div class="page-footer">
  <div class="page-footer__meta">
    <strong>OD-006: Organization IS Density</strong><br>
    Soul Compliance: 5/5 &mdash; border-radius: 0 &#10003; | box-shadow: none &#10003;<br>
    Fractal: 4/4 scales &#10003; | Anti-patterns: 5/5 avoided &#10003;
  </div>
</div>`,

  'Section Number Label': `<div>
  <span class="section-header__number">Section 01</span>
  <div class="section-header__title" style="font-family:var(--font-display);font-size:var(--type-section);line-height:1.2;">How the Soul Pieces Were Discovered</div>
</div>`,

  'Task Checkpoint': `<div class="task-checkpoint">
  You should have: soul pieces memorized, applicable findings listed, lesson chain documented.
</div>`,

  'Code Block Language Label': `<div class="code-block" style="padding:24px;min-height:60px;">
  <span class="code-block__label">css</span>
  <code><span class="comment">/* LOCKED design tokens */</span></code>
</div>`,

  'Editorial Drop Cap': `<div class="section-opening">
  <span class="drop-cap">E</span>very design system begins with decisions that feel arbitrary until they are tested across dozens of implementations and proven invariant.
</div>`,

  'Collapsing Section Header (Sticky with Red Border Reveal)': `<div>
  <div class="section-header" style="padding:12px 0 8px 0;">
    <span class="section-header__number">Section 01</span>
    <div class="section-header__title" style="font-family:var(--font-display);font-size:1.25rem;line-height:1.2;">Default (transparent border)</div>
  </div>
  <div class="section-header scrolled" style="padding:12px 0 8px 0;margin-top:8px;">
    <span class="section-header__number">Section 01</span>
    <div class="section-header__title" style="font-family:var(--font-display);font-size:1.25rem;line-height:1.2;">Scrolled (red border reveal)</div>
  </div>
</div>`,

  'Dual Lens Font Shift': `<div>
  <div style="padding:12px 16px;font-family:var(--font-display);font-style:italic;font-size:1.125rem;line-height:1.7;border-left:3px solid var(--accent-purple);margin-bottom:12px;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);margin-bottom:4px;font-style:normal;">WHY VIEW (Serif)</div>
    The organizational pattern does not "create" density...
  </div>
  <div style="padding:12px 16px;font-family:var(--font-mono);font-size:var(--type-code);line-height:1.5;background:var(--color-border-subtle);">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);margin-bottom:4px;">HOW VIEW (Mono)</div>
    const pairings = { conversational: 'PULSE' };
  </div>
</div>`,

  'Narrative Density Compression (Act Line-Height Gradient)': `<div>
  <div style="line-height:1.9;padding:8px 16px;border-left:2px solid var(--color-border-subtle);margin-bottom:8px;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Act I -- Exposition (line-height: 1.9)</div>
    The system began with a simple observation about documentation patterns. Reading rhythms emerge naturally.
  </div>
  <div style="line-height:1.7;padding:8px 16px;border-left:2px solid var(--color-text-secondary);margin-bottom:8px;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Act II -- Rising (line-height: 1.7)</div>
    But five explorations revealed a deeper truth: organization generates density. The patterns converge.
  </div>
  <div style="line-height:1.5;padding:8px 16px;border-left:2px solid var(--color-text);font-weight:500;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Act III -- Climax (line-height: 1.5)</div>
    Organization IS density. The distinction is artificial. The proof is this page.
  </div>
</div>`,

  'Confidence-Border Encoding': `<div>
  <div style="border-left:4px solid var(--color-text);padding-left:24px;line-height:1.4;font-weight:500;margin-bottom:16px;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Established (4px, near-black)</div>
    The five soul pieces are invariant.
  </div>
  <div style="border-left:3px solid var(--color-text-secondary);padding-left:24px;line-height:1.6;margin-bottom:16px;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Emerging (3px, gray)</div>
    The fractal pattern may extend to navigation structure.
  </div>
  <div style="border-left:1px solid var(--color-border);padding-left:24px;line-height:1.8;font-weight:300;font-style:italic;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;font-style:normal;">Exploratory (1px, light)</div>
    Dynamic density might respond to reader behavior.
  </div>
</div>`,

  'Arriving Wisdom (Scroll-Triggered Staggered Reveal)': `<div>
  <div style="opacity:0.2;transform:translateY(12px);padding:8px 16px;font-size:13px;color:var(--color-text-secondary);">
    <span style="font-family:var(--font-mono);font-size:10px;">reveal</span> -- entry 10%-40%
  </div>
  <div style="opacity:0.5;transform:translateY(6px);padding:8px 16px;font-size:13px;color:var(--color-text-secondary);margin-top:4px;">
    <span style="font-family:var(--font-mono);font-size:10px;">reveal-delay-1</span> -- entry 15%-45%
  </div>
  <div style="opacity:1;padding:8px 16px;font-size:14px;margin-top:4px;">
    <span style="font-family:var(--font-mono);font-size:10px;">reveal-delay-2</span> -- entry 20%-50%
  </div>
</div>`,

  'Territorial Border-Color Hover': `<div style="display:flex;gap:16px;">
  <div style="border:3px solid var(--color-text);padding:16px;text-align:center;flex:1;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">Default</div>
    <div style="font-family:var(--font-display);font-style:italic;">Territory</div>
  </div>
  <div style="border:3px solid var(--color-primary);background:#F5EDE0;padding:16px;text-align:center;flex:1;">
    <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:4px;">:hover</div>
    <div style="font-family:var(--font-display);font-style:italic;">Territory</div>
  </div>
</div>`,

  'Callout Essence Typography Shift': `<div>
  <div class="callout callout--insight" style="margin-bottom:8px;">
    <div class="callout__label">Insight</div>
    <div class="callout__body" style="font-family:var(--font-body);font-size:1rem;">Standard callout: Inter, 1rem, line-height 1.6</div>
  </div>
  <div class="callout callout--essence">
    <div class="callout__label">Essence</div>
    <div class="callout__body">Shifted to Instrument Serif italic, 1.125rem -- wisdom register</div>
  </div>
</div>`,

  'Zone Background Color Shift': `<div>
  <div style="background:#FEF9F5;padding:12px 16px;margin-bottom:4px;border:1px solid var(--color-border-subtle);">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);">Sparse #FEF9F5</span> -- questions, hubs
  </div>
  <div style="background:#FFFFFF;padding:12px 16px;margin-bottom:4px;border:1px solid var(--color-border-subtle);">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);">Dense #FFFFFF</span> -- answers, content
  </div>
  <div style="background:#FAF5ED;padding:12px 16px;border:1px solid var(--color-border-subtle);">
    <span style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);">Breathing #FAF5ED</span> -- dividers, transitions
  </div>
</div>`,

  'Collapsible Section Triangle Rotation': `<div>
  <details>
    <summary>What makes this "emerging" rather than "established"?</summary>
    <div class="details-content">Established requires validation across 6+ explorations with consistent results.</div>
  </details>
</div>`,

  'Q/A Pair': `<div class="qa-pair">
  <div class="question">
    <div class="question__marker"></div>
    <div class="question__text">What does "discovered, not decided" mean?</div>
  </div>
  <div class="answer">
    <p>It means the process was empirical. The soul pieces were not designed in advance -- they emerged from testing across dozens of implementations.</p>
  </div>
</div>`,

  'Dual Lens': `<div class="dual-lens">
  <div class="dual-lens__toggle">
    <button class="dual-lens__btn active">Why</button>
    <button class="dual-lens__btn">How</button>
  </div>
  <div class="view-why">The organizational pattern does not "create" the density pattern. It IS the density pattern.</div>
</div>`,

  'Territory Tile (with Solid Offset)': `<div style="position:relative;display:inline-block;margin:8px;">
  <div class="territory-tile" style="width:200px;">
    <div class="territory-tile__name">Soul</div>
    <div class="territory-tile__desc">5 pieces, 6 rules, 33 tokens.</div>
    <div class="territory-tile__density">Density: Compressed</div>
  </div>
</div>`,

  'Solid Offset': `<div style="position:relative;display:inline-block;margin:8px;">
  <div class="solid-offset" style="padding:20px;width:180px;">
    <div style="font-family:var(--font-display);font-style:italic;font-size:1.125rem;">Any element</div>
    <div style="font-size:13px;color:var(--color-text-secondary);margin-top:4px;">4px offset depth</div>
  </div>
</div>`,

  'Callout System (5 Variants)': `<div>
  <div class="callout callout--insight" style="margin:8px 0;">
    <div class="callout__label">Insight</div>
    <div class="callout__body">Blue accent -- analytical observations.</div>
  </div>
  <div class="callout callout--discovery" style="margin:8px 0;">
    <div class="callout__label">Discovery</div>
    <div class="callout__body">Green accent -- new findings.</div>
  </div>
  <div class="callout callout--warning" style="margin:8px 0;">
    <div class="callout__label">Warning</div>
    <div class="callout__body">Coral accent -- caution.</div>
  </div>
  <div class="callout callout--note" style="margin:8px 0;">
    <div class="callout__label">Note</div>
    <div class="callout__body">Amber accent -- supplementary info.</div>
  </div>
  <div class="callout callout--essence" style="margin:8px 0;">
    <div class="callout__label">Essence</div>
    <div class="callout__body">Purple accent -- key wisdom in serif italic.</div>
  </div>
</div>`,

  'Task Island': `<div class="task-island">
  <div class="task-island__header">
    <div class="task-island__number">1</div>
    <div class="task-island__title">Load the Inherited Identity</div>
  </div>
  <div class="task-step">
    <span class="task-step__marker"></span>Read ACCUMULATED-IDENTITY-v1.md in full
  </div>
  <div class="task-step">
    <span class="task-step__marker"></span>Note all 5 soul pieces and 6 universal rules
  </div>
  <div class="task-checkpoint">You should have: soul pieces memorized, findings listed.</div>
</div>`,

  'Act Marker': `<div>
  <div class="act">
    <div class="act-marker">
      <div class="act-marker__icon">I</div>
      <div class="act-marker__label">Exposition &mdash; The Problem</div>
    </div>
  </div>
  <div class="act">
    <div class="act-marker">
      <div class="act-marker__icon">II</div>
      <div class="act-marker__label">Rising Action &mdash; The Discovery</div>
    </div>
  </div>
  <div class="act">
    <div class="act-marker">
      <div class="act-marker__icon">III</div>
      <div class="act-marker__label">Climax &mdash; The Proof</div>
    </div>
  </div>
</div>`,

  'Stratum': `<div>
  <div class="stratum stratum--established">
    <div class="certainty-badge certainty-badge--established">
      <span class="certainty-badge__icon"></span> Established
    </div>
    <p>The five soul pieces are invariant across all explorations.</p>
  </div>
  <div class="stratum stratum--emerging">
    <div class="certainty-badge certainty-badge--emerging">
      <span class="certainty-badge__icon"></span> Emerging
    </div>
    <p>The fractal pattern may extend to navigation structure.</p>
  </div>
  <div class="stratum stratum--exploratory">
    <div class="certainty-badge certainty-badge--exploratory">
      <span class="certainty-badge__icon"></span> Exploratory
    </div>
    <p>Dynamic density might respond to reader behavior.</p>
  </div>
</div>`,

  'Pull Quote': `<div class="pull-quote">
  The border thickness tells you the certainty. You can feel it without reading a word.
  <span class="pull-quote__attribution">&mdash; OD-004 Discovery</span>
</div>`,

  'Code Block': `<div class="code-block">
  <span class="code-block__label">css</span>
  <code><span class="comment">/* LOCKED design tokens */</span>
<span class="keyword">:root</span> {
  --border-radius: <span class="string">0</span>;
  --box-shadow: <span class="string">none</span>;
}</code>
</div>`,

  'Synthesis Card': `<div class="synthesis-card" style="width:240px;">
  <div class="synthesis-card__org">Conversational</div>
  <div class="synthesis-card__density">IS Pulse</div>
  <div class="synthesis-card__proof">Question-answer alternation inherently creates sparse-dense oscillation.</div>
</div>`,

  'Collapsible Details Section': `<details>
  <summary>What makes this "emerging" rather than "established"?</summary>
  <div class="details-content">
    Established requires validation across 6+ explorations with consistent results. This finding has been observed in only 3 explorations so far.
  </div>
</details>`,

  'Page Header': `<div class="page-header">
  <div class="page-header__meta">Exploration OD-006 &mdash; Density: Emergent</div>
  <div class="page-header__title">Organization IS Density</div>
  <div class="page-header__subtitle">The KortAI Design System, Documented by Itself</div>
</div>`,

  'Comparison Table': `<table class="comparison-table">
  <thead><tr><th>Section</th><th>Organization</th><th>Density</th><th>How</th></tr></thead>
  <tbody>
    <tr><td>1. Soul</td><td>Conversational</td><td>PULSE</td><td>Q/A alternation</td></tr>
    <tr><td>2. Arc</td><td>Narrative</td><td>CRESCENDO</td><td>3-act buildup</td></tr>
  </tbody>
</table>`,

  'TOC Marker Progress Fill (CSS Houdini Progress Bar)': `<div style="display:flex;gap:24px;align-items:flex-start;">
  <div style="text-align:center;">
    <div style="width:4px;height:24px;border:1px solid var(--color-text);position:relative;overflow:hidden;margin:0 auto;">
      <div style="width:100%;height:100%;background:var(--color-primary);"></div>
    </div>
    <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-top:4px;">100%</div>
  </div>
  <div style="text-align:center;">
    <div style="width:4px;height:24px;border:1px solid var(--color-text);position:relative;overflow:hidden;margin:0 auto;">
      <div style="width:100%;height:60%;background:var(--color-primary);"></div>
    </div>
    <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-top:4px;">60%</div>
  </div>
  <div style="text-align:center;">
    <div style="width:4px;height:24px;border:1px solid var(--color-text);position:relative;overflow:hidden;margin:0 auto;">
    </div>
    <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-top:4px;">0%</div>
  </div>
</div>`,

  'Selection Highlight': `<div>
  <span style="background:var(--color-primary);color:#FEF9F5;padding:2px 4px;">Selected text appears in primary red</span>
  <span style="margin-left:8px;">with cream text on red background</span>
  <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-top:8px;">::selection { background: #E83025; color: #FEF9F5; }</div>
</div>`,

  'Focus Visible Outline': `<div>
  <div style="display:inline-block;padding:8px 16px;border:1px solid var(--color-border);outline:3px solid var(--color-primary);outline-offset:2px;">
    Focused element
  </div>
  <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-top:8px;">*:focus-visible { outline: 3px solid #E83025; outline-offset: 2px; }</div>
</div>`,

  'Skip Link': `<div>
  <a class="skip-link" href="#" onclick="return false">Skip to main content</a>
  <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-top:8px;">Hidden at top: -100%, revealed on :focus at top: 0</div>
</div>`,

  'Semantic Bridge (Concept Link + Code Target)': `<div>
  <p>The <span class="concept-link" style="border-bottom:2px solid var(--color-primary);">border-radius</span> token is locked to zero.</p>
  <div class="code-block" style="margin-top:8px;padding:12px;">
    <code><span class="code-target highlighted" style="border-left:3px solid var(--color-primary);background:var(--color-border-subtle);padding:2px 4px;">--border-radius: 0;</span></code>
  </div>
</div>`,

  'Print Stylesheet': `<div style="background:white;border:1px solid #ccc;padding:16px;">
  <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:#999;margin-bottom:8px;">@media print</div>
  <div style="color:black;font-size:14px;line-height:1.7;">
    Background: white. Text: black.<br>
    Navigation hidden. Links show URLs.<br>
    <a href="#" style="color:black;" onclick="return false">Link text <span style="font-size:0.8em;color:#666;">(https://example.com)</span></a>
  </div>
</div>`,

  'Responsive Breakpoint Collapse (1024px and 768px)': `<div>
  <div style="display:flex;gap:8px;margin-bottom:12px;">
    <div style="flex:1;border:1px solid var(--color-border);padding:8px;font-family:var(--font-mono);font-size:10px;text-align:center;">Fractal<br>Annotations</div>
    <div style="flex:1;border:1px solid var(--color-border);padding:8px;font-family:var(--font-mono);font-size:10px;text-align:center;">Scroll<br>Witness</div>
    <div style="flex:3;border:1px solid var(--color-primary);padding:8px;font-family:var(--font-mono);font-size:10px;text-align:center;">Content</div>
  </div>
  <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);text-align:center;">&#8595; @1024px: sidebar hidden &#8595; @768px: grids collapse to single column</div>
</div>`,

  'Reduced Motion Preference': `<div>
  <div style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--color-text-secondary);margin-bottom:8px;">@media (prefers-reduced-motion: reduce)</div>
  <div style="display:flex;gap:16px;">
    <div style="flex:1;padding:8px;border:1px solid var(--color-border-subtle);text-align:center;">
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-bottom:4px;">Default</div>
      <div style="opacity:0.4;font-size:13px;">Animated reveal</div>
    </div>
    <div style="flex:1;padding:8px;border:1px solid var(--color-border-subtle);text-align:center;">
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary);margin-bottom:4px;">Reduced Motion</div>
      <div style="opacity:1;font-size:13px;">Instant display</div>
    </div>
  </div>
</div>`,

};
