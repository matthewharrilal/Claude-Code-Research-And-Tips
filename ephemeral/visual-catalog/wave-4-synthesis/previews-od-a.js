// ═══ SCOPED CSS for OD-001 ═══
const cssOd001 = `
.preview-od001 {
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
  --accent-blue: #4A90D9; --accent-green: #4A9D6B; --accent-coral: #C97065;
  --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --question-width: 60%; --answer-width: 100%; --q-indent: 32px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-od001 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-od001 h1, .preview-od001 h2, .preview-od001 h3 { all: unset; display: block; }

/* Scroll Witness */
.preview-od001 .scroll-witness { display: flex; flex-direction: column; gap: 12px; }
.preview-od001 .scroll-witness__item { display: flex; align-items: center; gap: 8px; text-decoration: none; color: var(--color-text-secondary); }
.preview-od001 .scroll-witness__marker { width: 3px; height: 24px; background: var(--color-border); position: relative; overflow: hidden; }
.preview-od001 .scroll-witness__fill { position: absolute; top: 0; left: 0; width: 100%; background: var(--color-primary); }
.preview-od001 .scroll-witness__label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap; }

/* Exploration Header */
.preview-od001 .exploration-header { border-bottom: 3px solid var(--color-primary); padding: 24px 16px; background: var(--color-text); }
.preview-od001 .exploration-header__inner { max-width: 100%; }
.preview-od001 .exploration-id { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
.preview-od001 .exploration-title { font-family: var(--font-display); font-size: 1.625rem; font-style: italic; margin-bottom: 8px; line-height: 1.15; color: #FAFAF5; }
.preview-od001 .exploration-hypothesis { font-size: 14px; color: var(--color-text-secondary); max-width: 70ch; line-height: 1.6; }
.preview-od001 .exploration-meta { display: flex; gap: 12px; margin-top: 12px; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: #666666; flex-wrap: wrap; }
.preview-od001 .exploration-meta span { display: flex; align-items: center; gap: 4px; }
.preview-od001 .exploration-meta__value { color: var(--color-primary); }
.preview-od001 .version-badge { display: inline-block; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--color-primary); padding: 2px 8px; margin-left: 8px; vertical-align: middle; }

/* Pattern Visualization */
.preview-od001 .pattern-visualization { padding: 16px; background: white; border: 3px solid var(--color-text); border-left: 4px solid var(--color-primary); position: relative; }
.preview-od001 .pattern-visualization::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--offset-color); z-index: -1; }
.preview-od001 .pattern-visualization__title { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 12px; }
.preview-od001 .conversation-diagram { display: flex; flex-direction: column; gap: 8px; }
.preview-od001 .diagram-row { display: flex; align-items: center; gap: 8px; }
.preview-od001 .diagram-label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); width: 60px; flex-shrink: 0; }
.preview-od001 .diagram-bar { height: 24px; display: flex; align-items: center; padding: 0 8px; font-family: var(--font-mono); font-size: 9px; color: white; }
.preview-od001 .diagram-bar--question { background: var(--color-border); color: var(--color-text); width: 35%; }
.preview-od001 .diagram-bar--answer { background: var(--color-primary); width: 85%; }
.preview-od001 .diagram-density { font-family: var(--font-mono); font-size: 9px; color: var(--color-text-secondary); margin-left: auto; flex-shrink: 0; }

/* Chapter Progress Dots */
.preview-od001 .conversation-chapter { background: var(--color-zone-breathing); padding: 16px; }
.preview-od001 .conversation-chapter__label { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 4px; }
.preview-od001 .conversation-chapter__title { font-family: var(--font-display); font-size: var(--type-section); font-style: italic; padding-bottom: 8px; border-bottom: 3px solid var(--color-primary); }
.preview-od001 .conversation-chapter__progress { margin-top: 8px; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); display: flex; align-items: center; gap: 8px; }
.preview-od001 .progress-dots { display: flex; gap: 4px; }
.preview-od001 .progress-dot { width: 8px; height: 8px; background: var(--color-border); }
.preview-od001 .progress-dot--active { background: var(--color-primary); }
.preview-od001 .progress-dot--complete { background: var(--color-text); }

/* Socratic Narrowing Indicator */
.preview-od001 .question__narrowing { font-family: var(--font-mono); font-size: 8px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-secondary); opacity: 0.7; margin-top: 4px; }

/* Research Application Badges */
.preview-od001 .research-badge { display: inline-flex; gap: 4px; margin-bottom: 8px; }
.preview-od001 .research-badge__tag { font-family: var(--font-mono); font-size: 8px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); background: var(--color-border-subtle); padding: 1px 6px; opacity: 0.6; }

/* Question Marker */
.preview-od001 .question { max-width: 80%; margin-bottom: 8px; padding: 12px 12px 12px 32px; position: relative; background: var(--color-zone-sparse); }
.preview-od001 .question__marker { position: absolute; left: 0; top: 12px; font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary); width: 32px; }
.preview-od001 .question__marker::before { content: ''; display: inline-block; width: 8px; height: 8px; background: var(--color-primary); margin-right: 4px; vertical-align: middle; }
.preview-od001 .question__text { font-family: var(--font-display); font-size: 1.1rem; font-style: italic; line-height: 1.4; color: var(--color-text); }

/* Enrichment Appendix */
.preview-od001 .enrichment-appendix { padding-top: 16px; border-top: 3px solid var(--color-border); }
.preview-od001 .enrichment-appendix__title { font-family: var(--font-display); font-size: var(--type-section); font-style: italic; margin-bottom: 16px; color: var(--color-text-secondary); }
.preview-od001 .enrichment-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.preview-od001 .enrichment-card { border: 3px solid var(--color-border); padding: 12px; background: white; }
.preview-od001 .enrichment-card__id { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary); margin-bottom: 4px; }
.preview-od001 .enrichment-card__name { font-family: var(--font-display); font-size: 14px; font-style: italic; margin-bottom: 4px; }
.preview-od001 .enrichment-card__desc { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; }

/* Q/A Pair */
.preview-od001 .qa-pair { margin-bottom: 16px; }
.preview-od001 .answer { width: 100%; border-left: 4px solid var(--color-border); padding: 16px 16px 16px 24px; background: var(--color-zone-dense); }
.preview-od001 .answer__lead { font-size: var(--type-body); line-height: 1.7; margin-bottom: 12px; max-width: 65ch; }
.preview-od001 .answer__detail { margin-top: 12px; }
.preview-od001 .answer__detail p { font-size: 14px; line-height: 1.7; margin-bottom: 8px; max-width: 65ch; color: var(--color-text-secondary); }

/* Callout System */
.preview-od001 .callout { margin: 12px 0; border-left: 4px solid; padding: 12px 16px; }
.preview-od001 .callout__label { font-family: var(--font-mono); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text); margin-bottom: 8px; }
.preview-od001 .callout__body { font-size: 14px; line-height: 1.6; }
.preview-od001 .callout--info { border-left-color: var(--accent-blue); background: var(--color-border-subtle); }
.preview-od001 .callout--tip { border-left-color: var(--accent-green); background: var(--color-border-subtle); }
.preview-od001 .callout--gotcha { border-left-color: var(--accent-coral); background: var(--color-border-subtle); }
.preview-od001 .callout--essence { border-left-color: var(--accent-purple); background: var(--color-border-subtle); position: relative; border: 3px solid var(--accent-purple); border-left-width: 4px; }
.preview-od001 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; font-size: 15px; line-height: 1.6; }
.preview-od001 .callout--essence::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--accent-purple); z-index: -1; }
.preview-od001 .callout--challenge { border-left-color: var(--accent-amber); background: var(--color-border-subtle); }

/* Code Block */
.preview-od001 .code-block { background: #1A1A1A; font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; color: #FAFAF5; padding: 16px; margin: 8px 0; overflow-x: auto; position: relative; border: 3px solid var(--color-border); }
.preview-od001 .code-block::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--offset-color); z-index: -1; }
.preview-od001 .code-block__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--color-text-secondary); }
.preview-od001 .code-block__lang { font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); }
.preview-od001 .code-block__copy { font-size: var(--type-meta); cursor: pointer; background: none; border: 1px solid var(--color-text-secondary); padding: 2px 8px; color: var(--color-text-secondary); font-family: var(--font-mono); }
.preview-od001 .code-block__line { display: flex; gap: 8px; }
.preview-od001 .code-block__num { color: var(--color-text-secondary); user-select: none; min-width: 20px; text-align: right; }
.preview-od001 .code-block__code--comment { color: #666666; }
.preview-od001 .code-block__code--keyword { color: #E83025; }
.preview-od001 .code-block__code--string { color: #6B9B7A; }
.preview-od001 .code-block__code--function { color: #4A7C9B; }

/* Decision Matrix */
.preview-od001 .decision-matrix { overflow-x: auto; }
.preview-od001 .decision-matrix table { width: 100%; border-collapse: collapse; font-size: 12px; }
.preview-od001 .decision-matrix th { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); padding: 6px 8px; border-bottom: 3px solid var(--color-primary); text-align: left; }
.preview-od001 .decision-matrix td { padding: 6px 8px; border-bottom: 1px solid var(--color-border-subtle); vertical-align: top; }
.preview-od001 .decision-matrix__highlight td { background: var(--color-border-subtle); font-weight: 500; }

/* File Tree */
.preview-od001 .file-tree { font-family: var(--font-mono); font-size: 12px; line-height: 1.8; background: white; border-left: 4px solid var(--color-border); padding: 12px 16px; }
.preview-od001 .file-tree__label { font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 4px; display: block; }
.preview-od001 .file-tree__item--highlight { color: var(--color-primary); font-weight: 500; }
.preview-od001 .file-tree__annotation { color: var(--color-text-secondary); font-size: 10px; }

/* Follow-Up Container */
.preview-od001 .follow-up { margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); }
.preview-od001 .follow-up .question { max-width: 70%; }
.preview-od001 .follow-up .question__text { font-size: 16px; color: var(--color-text-secondary); }
.preview-od001 .follow-up .question__marker { color: var(--color-text-secondary); }
.preview-od001 .follow-up .question__marker::before { background: var(--color-text-secondary); width: 6px; height: 6px; }

/* Conversation Chapter Divider */
/* (uses .conversation-chapter already defined above) */

/* Essence Pull Quote */
.preview-od001 .essence-pullquote { padding: 16px 12px; border-top: 3px solid var(--accent-purple); border-bottom: 3px solid var(--accent-purple); text-align: center; position: relative; background: var(--color-background); }
.preview-od001 .essence-pullquote__label { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-purple); margin-bottom: 8px; }
.preview-od001 .essence-pullquote__text { font-family: var(--font-display); font-size: 1.2rem; font-style: italic; line-height: 1.5; max-width: 50ch; margin: 0 auto; }

/* Conversation Summary */
.preview-od001 .conversation-summary { padding: 16px; background: white; border: 3px solid var(--color-text); position: relative; }
.preview-od001 .conversation-summary::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--offset-color); z-index: -1; }
.preview-od001 .conversation-summary__title { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 12px; }
.preview-od001 .conversation-summary__list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.preview-od001 .conversation-summary__item { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; }
.preview-od001 .conversation-summary__marker { width: 8px; height: 8px; background: var(--color-primary); flex-shrink: 0; margin-top: 5px; }
`;

// ═══ PREVIEW SNIPPETS for OD-001 ═══
const previewsOd001 = {
  'Scroll Witness': `<div class="scroll-witness">
    <a class="scroll-witness__item" style="text-decoration:none">
      <div class="scroll-witness__marker"><div class="scroll-witness__fill" style="height:100%"></div></div>
      <span class="scroll-witness__label">Ch 1</span>
    </a>
    <a class="scroll-witness__item" style="text-decoration:none">
      <div class="scroll-witness__marker"><div class="scroll-witness__fill" style="height:60%"></div></div>
      <span class="scroll-witness__label">Ch 2</span>
    </a>
    <a class="scroll-witness__item" style="text-decoration:none">
      <div class="scroll-witness__marker"><div class="scroll-witness__fill" style="height:0%"></div></div>
      <span class="scroll-witness__label">Ch 3</span>
    </a>
    <a class="scroll-witness__item" style="text-decoration:none">
      <div class="scroll-witness__marker"><div class="scroll-witness__fill" style="height:0%"></div></div>
      <span class="scroll-witness__label">Ch 4</span>
    </a>
  </div>`,

  'Exploration Header with Metadata': `<div class="exploration-header">
    <div class="exploration-header__inner">
      <div class="exploration-id">Exploration OD-001 <span class="version-badge">v3 re-enriched</span></div>
      <div class="exploration-title" style="font-family:var(--font-display);font-size:1.625rem;font-style:italic;color:#FAFAF5;margin-bottom:8px">Conversational Structure</div>
      <p class="exploration-hypothesis">What if documentation was organized as a conversation?</p>
      <div class="exploration-meta">
        <span>Density: <strong class="exploration-meta__value">PULSE + TIDAL</strong></span>
        <span>Organization: <strong class="exploration-meta__value">Q&amp;A Dialogue</strong></span>
        <span>Score: <strong class="exploration-meta__value">37/40</strong></span>
      </div>
    </div>
  </div>`,

  'Pattern Visualization (Conversation Diagram)': `<div class="pattern-visualization" style="position:relative;z-index:1">
    <div class="pattern-visualization__title">Conversational Density Pattern</div>
    <div class="conversation-diagram">
      <div class="diagram-row">
        <span class="diagram-label">Question</span>
        <div class="diagram-bar diagram-bar--question">sparse</div>
        <span class="diagram-density">LOW</span>
      </div>
      <div class="diagram-row">
        <span class="diagram-label">Answer</span>
        <div class="diagram-bar diagram-bar--answer">dense &mdash; code, tables</div>
        <span class="diagram-density">HIGH</span>
      </div>
      <div class="diagram-row">
        <span class="diagram-label">Follow-up</span>
        <div class="diagram-bar diagram-bar--question" style="width:25%">narrower</div>
        <span class="diagram-density">LOW</span>
      </div>
      <div class="diagram-row">
        <span class="diagram-label">Answer</span>
        <div class="diagram-bar diagram-bar--answer" style="width:70%">focused dense</div>
        <span class="diagram-density">HIGH</span>
      </div>
    </div>
  </div>`,

  'Chapter Progress Dots': `<div class="conversation-chapter">
    <div class="conversation-chapter__label">Chapter 2 of 4</div>
    <div class="conversation-chapter__title" style="font-family:var(--font-display);font-size:var(--type-section);font-style:italic;padding-bottom:8px;border-bottom:3px solid var(--color-primary)">Component Architecture</div>
    <div class="conversation-chapter__progress">
      <span>Progress</span>
      <div class="progress-dots">
        <div class="progress-dot progress-dot--complete"></div>
        <div class="progress-dot progress-dot--active"></div>
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
      </div>
      <span>2 / 4</span>
    </div>
  </div>`,

  'Socratic Narrowing Indicator': `<div class="question" style="max-width:80%;padding:12px 12px 12px 32px;position:relative;background:var(--color-zone-sparse)">
    <div class="question__marker" style="position:absolute;left:0;top:12px">Q</div>
    <div class="question__text" style="font-family:var(--font-display);font-size:1.1rem;font-style:italic;line-height:1.4">How do React Server Components handle data fetching?</div>
    <div class="question__narrowing">Narrowing: Broad &rarr; Specific</div>
  </div>`,

  'Research Application Badges': `<div>
    <div class="research-badge">
      <span class="research-badge__tag">EXT-CONV-001</span>
      <span class="research-badge__tag">EXT-CONV-003</span>
      <span class="research-badge__tag">R1-010</span>
    </div>
    <div style="font-size:13px;color:var(--color-text-secondary)">Applied research badges show which findings informed each section</div>
  </div>`,

  'Question Marker with Square': `<div class="question" style="max-width:90%;padding:12px 12px 12px 32px;position:relative;background:var(--color-zone-sparse)">
    <div class="question__marker" style="position:absolute;left:0;top:12px">Q</div>
    <div class="question__text" style="font-family:var(--font-display);font-size:1.1rem;font-style:italic;line-height:1.4">What is the difference between Server and Client Components?</div>
  </div>`,

  'Enrichment Appendix': `<div class="enrichment-appendix">
    <div class="enrichment-appendix__title" style="font-family:var(--font-display);font-size:var(--type-section);font-style:italic;margin-bottom:12px;color:var(--color-text-secondary)">Research Enrichments Applied</div>
    <div class="enrichment-grid">
      <div class="enrichment-card">
        <div class="enrichment-card__id">EXT-CONV-001</div>
        <div class="enrichment-card__name" style="font-family:var(--font-display);font-style:italic">Socratic Progressive Narrowing</div>
        <div class="enrichment-card__desc">Broad Q &rarr; Narrow Q &rarr; Specific Q</div>
      </div>
      <div class="enrichment-card">
        <div class="enrichment-card__id">EXT-CREATIVE-001</div>
        <div class="enrichment-card__name" style="font-family:var(--font-display);font-style:italic">The Solid Offset</div>
        <div class="enrichment-card__desc">Neobrutalist depth, no box-shadow</div>
      </div>
    </div>
  </div>`,

  'TIDAL Width Variation (Question/Answer Width Contrast)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">TIDAL Width Contrast</div>
    <div style="max-width:60%;padding:8px 12px;background:var(--color-zone-sparse);border-left:4px solid var(--color-border);margin-bottom:4px">
      <span style="font-family:var(--font-display);font-style:italic;font-size:14px">Question zone &mdash; 60% width (sparse)</span>
    </div>
    <div style="width:100%;padding:8px 12px;background:var(--color-zone-dense);border-left:4px solid var(--color-border)">
      <span style="font-size:13px">Answer zone &mdash; 100% width (dense). The width difference creates the TIDAL rhythm.</span>
    </div>
  </div>`,

  'Responsive TIDAL Collapse': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Responsive TIDAL Collapse</div>
    <div style="display:flex;gap:12px">
      <div style="flex:1;border:1px solid var(--color-border);padding:8px">
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-bottom:4px">Desktop (60% / 100%)</div>
        <div style="width:60%;height:12px;background:var(--color-border);margin-bottom:2px"></div>
        <div style="width:100%;height:12px;background:var(--color-primary)"></div>
      </div>
      <div style="flex:1;border:1px solid var(--color-border);padding:8px">
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-bottom:4px">Mobile (100% / 100%)</div>
        <div style="width:100%;height:12px;background:var(--color-border);margin-bottom:2px"></div>
        <div style="width:100%;height:12px;background:var(--color-primary)"></div>
      </div>
    </div>
  </div>`,

  'Editorial Drop Cap': `<div class="answer" style="border-left:4px solid var(--color-border);padding:16px 16px 16px 24px;background:var(--color-zone-dense)">
    <p style="font-size:15px;line-height:1.7;max-width:65ch"><span style="font-family:var(--font-display);font-size:3.5em;float:left;line-height:0.8;padding-right:0.1em;padding-top:0.05em;color:var(--color-primary)">S</span>erver Components execute on the server and send rendered HTML to the client. They can directly access databases, file systems, and other server-only resources.</p>
  </div>`,

  'Follow-Up Depth Degradation': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Follow-Up Depth Levels</div>
    <div style="margin-bottom:8px">
      <div style="max-width:60%;padding:8px 8px 8px 24px;background:var(--color-zone-sparse);position:relative"><span style="position:absolute;left:0;top:8px;width:8px;height:8px;background:var(--color-primary);display:block"></span><span style="font-family:var(--font-display);font-style:italic;font-size:15px">Primary question (full marker, 60%)</span></div>
    </div>
    <div style="margin-bottom:8px">
      <div style="max-width:70%;padding:8px 8px 8px 20px;background:var(--color-zone-sparse);position:relative"><span style="position:absolute;left:0;top:8px;width:6px;height:6px;background:var(--color-text-secondary);display:block"></span><span style="font-family:var(--font-display);font-style:italic;font-size:14px;color:var(--color-text-secondary)">Follow-up (smaller marker, 70%)</span></div>
    </div>
    <div>
      <div style="max-width:80%;padding:8px 8px 8px 20px;background:var(--color-zone-sparse);border-left:3px solid var(--color-border);margin-left:16px;position:relative"><span style="font-family:var(--font-display);font-style:italic;font-size:13px;color:var(--color-text-secondary)">Deep follow-up (border-left, indented, 80%)</span></div>
    </div>
  </div>`,

  'Three-Level Gestalt Spacing': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Three-Level Gestalt Spacing</div>
    <div style="border:1px solid var(--color-border);padding:12px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><div style="width:8px;height:8px;background:var(--color-primary)"></div><span style="font-family:var(--font-mono);font-size:10px">8px &mdash; Within (Q + A grouped)</span></div>
      <div style="height:8px;background:var(--color-zone-sparse);margin-bottom:4px"></div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><div style="width:8px;height:8px;background:var(--accent-blue)"></div><span style="font-family:var(--font-mono);font-size:10px">32px &mdash; Between (distinct Q/A pairs)</span></div>
      <div style="height:32px;background:var(--color-zone-breathing);margin-bottom:4px"></div>
      <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;background:var(--accent-purple)"></div><span style="font-family:var(--font-mono);font-size:10px">64px &mdash; Chapter (between chapters)</span></div>
      <div style="height:48px;background:var(--color-zone-breathing);border-top:1px dashed var(--color-border);border-bottom:1px dashed var(--color-border)"></div>
    </div>
  </div>`,

  'Zone Background Color Differentiation (PULSE Encoding)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">PULSE Zone Encoding</div>
    <div style="padding:8px 12px;background:#FEF9F5;border-left:4px solid var(--color-border);margin-bottom:2px">
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary)">SPARSE &mdash; #FEF9F5 (question zone)</span>
    </div>
    <div style="padding:8px 12px;background:#FFFFFF;border-left:4px solid var(--color-border);margin-bottom:2px">
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary)">DENSE &mdash; #FFFFFF (answer zone)</span>
    </div>
    <div style="padding:8px 12px;background:#FAF5ED;border-left:4px solid var(--color-border)">
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-secondary)">BREATHING &mdash; #FAF5ED (chapter divider)</span>
    </div>
  </div>`,

  'Solid Offset Depth': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:12px">Solid Offset Depth (4px/4px)</div>
    <div style="display:inline-block;position:relative;z-index:1;padding:16px 24px;background:white;border:3px solid #1A1A1A">
      <span style="font-family:var(--font-display);font-style:italic;font-size:15px">Neobrutalist depth &mdash; no box-shadow</span>
      <div style="content:'';position:absolute;top:4px;left:4px;width:100%;height:100%;background:#1A1A1A;z-index:-1"></div>
    </div>
  </div>`,

  'Q/A Pair': `<div class="qa-pair">
    <div class="question" style="max-width:80%;padding:12px 12px 12px 32px;position:relative;background:var(--color-zone-sparse)">
      <div class="question__marker" style="position:absolute;left:0;top:12px">Q</div>
      <div class="question__text" style="font-family:var(--font-display);font-size:1.1rem;font-style:italic;line-height:1.4">What are React Server Components?</div>
    </div>
    <div class="answer">
      <p class="answer__lead">Server Components are a new kind of component that run on the server and send rendered HTML to the client. They can access server-only resources directly.</p>
    </div>
  </div>`,

  'Callout System (5 variants)': `<div>
    <div class="callout callout--info"><div class="callout__label">Info</div><div class="callout__body">Server Components reduce bundle size by keeping server-only code off the client.</div></div>
    <div class="callout callout--tip"><div class="callout__label">Tip</div><div class="callout__body">Use the "use client" directive only when you need interactivity.</div></div>
    <div class="callout callout--gotcha"><div class="callout__label">Gotcha</div><div class="callout__body">Server Components cannot use useState or useEffect.</div></div>
    <div class="callout callout--essence" style="position:relative;z-index:1"><div class="callout__label">Essence</div><div class="callout__body">The boundary between server and client is the new architectural frontier.</div></div>
    <div class="callout callout--challenge"><div class="callout__label">Challenge</div><div class="callout__body">Refactor a client component to use server-side data fetching.</div></div>
  </div>`,

  'Code Block': `<div class="code-block" style="position:relative;z-index:1">
    <div class="code-block__header"><span class="code-block__lang">typescript</span><span class="code-block__copy">Copy</span></div>
    <div class="code-block__line"><span class="code-block__num">1</span><span class="code-block__code--comment">// Server Component</span></div>
    <div class="code-block__line"><span class="code-block__num">2</span><span class="code-block__code--keyword">async function</span> <span class="code-block__code--function">UserList</span>() {</div>
    <div class="code-block__line"><span class="code-block__num">3</span>  <span class="code-block__code--keyword">const</span> users = <span class="code-block__code--keyword">await</span> db.users.findMany();</div>
    <div class="code-block__line"><span class="code-block__num">4</span>  <span class="code-block__code--keyword">return</span> &lt;ul&gt;{users.map(u =&gt; &lt;li&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;</div>
    <div class="code-block__line"><span class="code-block__num">5</span>}</div>
  </div>`,

  'Decision Matrix': `<div class="decision-matrix">
    <table>
      <thead><tr><th>Feature</th><th>Server</th><th>Client</th></tr></thead>
      <tbody>
        <tr><td>Data fetching</td><td>Direct DB access</td><td>fetch() / SWR</td></tr>
        <tr><td>Bundle size</td><td>Zero JS shipped</td><td>Included in bundle</td></tr>
        <tr class="decision-matrix__highlight"><td>Best for</td><td>Static content</td><td>Interactive UI</td></tr>
      </tbody>
    </table>
  </div>`,

  'File Tree': `<div class="file-tree">
    <span class="file-tree__label">Project Structure</span>
    app/<br>
    &ensp;&ensp;<span class="file-tree__item--highlight">layout.tsx</span> <span class="file-tree__annotation">&larr; Server Component (root)</span><br>
    &ensp;&ensp;<span class="file-tree__item--highlight">page.tsx</span> <span class="file-tree__annotation">&larr; Server Component</span><br>
    &ensp;&ensp;components/<br>
    &ensp;&ensp;&ensp;&ensp;Counter.tsx <span class="file-tree__annotation">&larr; Client Component</span>
  </div>`,

  'Follow-Up Container': `<div class="follow-up">
    <div class="question" style="max-width:70%;padding:8px 8px 8px 24px;position:relative;background:var(--color-zone-sparse)">
      <div class="question__marker" style="position:absolute;left:0;top:8px;color:var(--color-text-secondary)">Q</div>
      <div class="question__text" style="font-family:var(--font-display);font-style:italic;font-size:16px;color:var(--color-text-secondary)">But what about shared state between server and client?</div>
    </div>
    <div class="answer" style="border-left:4px solid var(--color-border);padding:12px 12px 12px 24px;background:var(--color-zone-dense)">
      <p style="font-size:14px;line-height:1.7;color:var(--color-text-secondary)">Props flow from Server to Client Components. For complex state, use a combination of server actions and client-side state management.</p>
    </div>
  </div>`,

  'Conversation Chapter Divider': `<div class="conversation-chapter">
    <div class="conversation-chapter__label">Chapter 3 of 4</div>
    <div class="conversation-chapter__title" style="font-family:var(--font-display);font-size:var(--type-section);font-style:italic;padding-bottom:8px;border-bottom:3px solid var(--color-primary)">Data Patterns</div>
    <div class="conversation-chapter__progress">
      <span>Progress</span>
      <div class="progress-dots">
        <div class="progress-dot progress-dot--complete"></div>
        <div class="progress-dot progress-dot--complete"></div>
        <div class="progress-dot progress-dot--active"></div>
        <div class="progress-dot"></div>
      </div>
    </div>
  </div>`,

  'Essence Pull Quote': `<div class="essence-pullquote">
    <div class="essence-pullquote__label">Essence</div>
    <p class="essence-pullquote__text">The best conversations don't just answer questions &mdash; they teach you which questions to ask next.</p>
  </div>`,

  'Conversation Summary': `<div class="conversation-summary" style="position:relative;z-index:1">
    <div class="conversation-summary__title">What We Learned</div>
    <ul class="conversation-summary__list">
      <li class="conversation-summary__item"><div class="conversation-summary__marker"></div><span>Server Components run on the server and ship zero JavaScript</span></li>
      <li class="conversation-summary__item"><div class="conversation-summary__marker"></div><span>The "use client" directive marks the server-client boundary</span></li>
      <li class="conversation-summary__item"><div class="conversation-summary__marker"></div><span>Data flows from server to client via props</span></li>
    </ul>
  </div>`,
};

// ═══ SCOPED CSS for OD-002 ═══
const cssOd002 = `
.preview-od002 {
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
  --border-radius: 0; --box-shadow: none;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;
  --accent-blue: #4A90D9; --accent-green: #4A9D6B; --accent-coral: #C97065;
  --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-od002 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-od002 h1, .preview-od002 h2, .preview-od002 h3 { all: unset; display: block; }

/* Arc Visualization */
.preview-od002 .arc-visualization { padding: 16px; background: var(--color-zone-dense); border-left: 4px solid var(--color-primary); }
.preview-od002 .arc-visualization__title { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 12px; }
.preview-od002 .arc-diagram { display: flex; align-items: flex-end; gap: 3px; height: 100px; padding-bottom: 12px; border-bottom: 3px solid var(--color-border); }
.preview-od002 .arc-bar { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }
.preview-od002 .arc-bar__fill { width: 100%; }
.preview-od002 .arc-bar--1 .arc-bar__fill { height: 10px; background: var(--color-border); }
.preview-od002 .arc-bar--2 .arc-bar__fill { height: 18px; background: var(--color-border); }
.preview-od002 .arc-bar--3 .arc-bar__fill { height: 30px; background: var(--color-text-secondary); }
.preview-od002 .arc-bar--4 .arc-bar__fill { height: 45px; background: var(--color-text-secondary); }
.preview-od002 .arc-bar--5 .arc-bar__fill { height: 60px; background: var(--color-text-secondary); }
.preview-od002 .arc-bar--6 .arc-bar__fill { height: 80px; background: var(--color-primary); }
.preview-od002 .arc-bar--7 .arc-bar__fill { height: 95px; background: var(--color-primary); }
.preview-od002 .arc-bar--8 .arc-bar__fill { height: 70px; background: var(--color-text-secondary); }
.preview-od002 .arc-bar--9 .arc-bar__fill { height: 45px; background: var(--color-border); }
.preview-od002 .arc-bar--10 .arc-bar__fill { height: 25px; background: var(--color-border); }
.preview-od002 .arc-labels { display: flex; justify-content: space-between; margin-top: 8px; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); }

/* Tension Meter */
.preview-od002 .tension-meter { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.preview-od002 .tension-meter__label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); width: 60px; flex-shrink: 0; }
.preview-od002 .tension-meter__bar { height: 3px; background: var(--color-border); width: 200px; }
.preview-od002 .tension-meter__fill { height: 100%; background: var(--color-primary); }
.preview-od002 .tension-meter__bar--setup .tension-meter__fill { width: 10%; }
.preview-od002 .tension-meter__bar--rising .tension-meter__fill { width: 45%; }
.preview-od002 .tension-meter__bar--climax .tension-meter__fill { width: 95%; }
.preview-od002 .tension-meter__bar--falling .tension-meter__fill { width: 55%; }
.preview-od002 .tension-meter__bar--resolution .tension-meter__fill { width: 15%; }

/* Act Header */
.preview-od002 .act-header { margin-bottom: 12px; }
.preview-od002 .act-header__number { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 4px; }
.preview-od002 .act-header__title { font-family: var(--font-display); font-style: italic; padding-bottom: 8px; border-bottom: 3px solid var(--color-primary); }

/* Code Progression Label */
.preview-od002 .code-progression { padding: 8px 12px; background: var(--color-zone-breathing); border-left: 4px solid var(--color-border); font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.1em; }

/* Exploration Header */
.preview-od002 .exploration-header { border-bottom: 3px solid var(--color-primary); padding: 24px 16px; background: var(--color-text); }
.preview-od002 .exploration-header__inner { max-width: 100%; }
.preview-od002 .exploration-id { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
.preview-od002 .exploration-title { font-family: var(--font-display); font-size: 1.625rem; font-style: italic; color: #FAFAF5; margin-bottom: 8px; }
.preview-od002 .exploration-hypothesis { font-size: 14px; color: var(--color-text-secondary); max-width: 70ch; line-height: 1.7; }
.preview-od002 .exploration-meta { display: flex; gap: 12px; margin-top: 12px; font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); flex-wrap: wrap; }
.preview-od002 .exploration-meta span { display: flex; align-items: center; gap: 4px; }
.preview-od002 .exploration-meta__value { color: var(--color-primary); }

/* Narrative Summary */
.preview-od002 .narrative-summary { padding: 16px; background: var(--color-zone-dense); border-left: 4px solid var(--color-primary); }
.preview-od002 .narrative-summary__title { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 12px; }
.preview-od002 .narrative-summary__list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.preview-od002 .narrative-summary__item { display: flex; align-items: flex-start; gap: 8px; font-size: 13px; }
.preview-od002 .narrative-summary__marker { width: 8px; height: 8px; background: var(--color-primary); flex-shrink: 0; margin-top: 5px; }

/* Callout */
.preview-od002 .callout { margin: 12px 0; border-left: 4px solid; padding: 12px 16px; }
.preview-od002 .callout__label { font-family: var(--font-mono); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text); margin-bottom: 8px; }
.preview-od002 .callout__body { font-size: 14px; line-height: 1.6; }
.preview-od002 .callout--info { border-left-color: var(--accent-blue); background: var(--color-border-subtle); }
.preview-od002 .callout--tip { border-left-color: var(--accent-green); background: var(--color-border-subtle); }
.preview-od002 .callout--gotcha { border-left-color: var(--accent-coral); background: var(--color-border-subtle); }
.preview-od002 .callout--essence { border-left-color: var(--accent-purple); background: var(--color-border-subtle); }
.preview-od002 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; font-size: 15px; line-height: 1.6; }
.preview-od002 .callout--challenge { border-left-color: var(--accent-amber); background: var(--color-border-subtle); }

/* Essence Pullquote */
.preview-od002 .essence-pullquote { padding: 16px 12px; border-top: 3px solid var(--accent-purple); border-bottom: 3px solid var(--accent-purple); text-align: center; }
.preview-od002 .essence-pullquote__label { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent-purple); margin-bottom: 8px; }
.preview-od002 .essence-pullquote__text { font-family: var(--font-display); font-size: 1.2rem; font-style: italic; line-height: 1.5; max-width: 50ch; margin: 0 auto; }

/* Code Block */
.preview-od002 .code-block { background: var(--color-text); font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; color: #FAFAF5; padding: 16px; margin: 8px 0; overflow-x: auto; border: 3px solid var(--color-border); }
.preview-od002 .code-block__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333; }
.preview-od002 .code-block__lang { font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; color: #888; }
.preview-od002 .code-block__copy { font-size: var(--type-meta); background: none; border: 1px solid #444; padding: 2px 8px; color: #888; font-family: var(--font-mono); }
.preview-od002 .code-block__line { display: flex; gap: 8px; }
.preview-od002 .code-block__num { color: #555; user-select: none; min-width: 20px; text-align: right; }
.preview-od002 .code--comment { color: var(--color-text-secondary); }
.preview-od002 .code--keyword { color: var(--color-primary); }
.preview-od002 .code--string { color: #6B9B7A; }
.preview-od002 .code--function { color: #4A7C9B; }

/* Decision Matrix */
.preview-od002 .decision-matrix { overflow-x: auto; }
.preview-od002 .decision-matrix table { width: 100%; border-collapse: collapse; font-size: 12px; }
.preview-od002 .decision-matrix th { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); padding: 6px 8px; border-bottom: 3px solid var(--color-primary); text-align: left; }
.preview-od002 .decision-matrix td { padding: 6px 8px; border-bottom: 1px solid var(--color-border-subtle); }
.preview-od002 .decision-matrix__highlight td { background: var(--color-border-subtle); font-weight: 500; }
.preview-od002 .decision-matrix__highlight td:first-child { border-left: 4px solid var(--color-primary); }

/* File Tree */
.preview-od002 .file-tree { font-family: var(--font-mono); font-size: 12px; line-height: 1.8; background: var(--color-zone-dense); border-left: 4px solid var(--color-border); padding: 12px 16px; }
.preview-od002 .file-tree__label { font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: 4px; display: block; }
.preview-od002 .file-tree__item--highlight { color: var(--color-primary); font-weight: 500; }
.preview-od002 .file-tree__annotation { color: var(--color-text-secondary); font-size: 10px; }

/* Narrative Beat */
.preview-od002 .narrative-beat { margin-bottom: 16px; }
.preview-od002 .narrative-beat__subtitle { font-family: var(--font-body); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); margin-bottom: 8px; }
.preview-od002 .narrative-beat p { max-width: 65ch; margin-bottom: 12px; }

/* Act Divider */
.preview-od002 .act-divider { height: 48px; background: var(--color-zone-breathing); border-top: 3px solid var(--color-border); border-bottom: 3px solid var(--color-border); }
`;

// ═══ PREVIEW SNIPPETS for OD-002 ═══
const previewsOd002 = {
  'Arc Visualization (Freytag Bar Chart)': `<div class="arc-visualization">
    <div class="arc-visualization__title">Narrative Density Arc &mdash; Freytag 5-Beat Model</div>
    <div class="arc-diagram">
      <div class="arc-bar arc-bar--1"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--2"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--3"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--4"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--5"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--6"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--7"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--8"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--9"><div class="arc-bar__fill"></div></div>
      <div class="arc-bar arc-bar--10"><div class="arc-bar__fill"></div></div>
    </div>
    <div class="arc-labels"><span>I: Exposition</span><span>II: Rising</span><span>III: Climax</span><span>IV: Falling</span><span>V: Resolution</span></div>
  </div>`,

  'Tension Meter': `<div>
    <div class="tension-meter"><span class="tension-meter__label">Tension</span><div class="tension-meter__bar tension-meter__bar--setup"><div class="tension-meter__fill"></div></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act I: 10%</span></div>
    <div class="tension-meter"><span class="tension-meter__label">Tension</span><div class="tension-meter__bar tension-meter__bar--rising"><div class="tension-meter__fill"></div></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act II: 45%</span></div>
    <div class="tension-meter"><span class="tension-meter__label">Tension</span><div class="tension-meter__bar tension-meter__bar--climax"><div class="tension-meter__fill"></div></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act III: 95%</span></div>
    <div class="tension-meter"><span class="tension-meter__label">Tension</span><div class="tension-meter__bar tension-meter__bar--falling"><div class="tension-meter__fill"></div></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act IV: 55%</span></div>
    <div class="tension-meter"><span class="tension-meter__label">Tension</span><div class="tension-meter__bar tension-meter__bar--resolution"><div class="tension-meter__fill"></div></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act V: 15%</span></div>
  </div>`,

  'Act Header with Number + Title': `<div>
    <div class="act-header" style="margin-bottom:16px">
      <div class="act-header__number">Act I</div>
      <div class="act-header__title" style="font-family:var(--font-display);font-style:italic;font-size:2.5rem;padding-bottom:8px;border-bottom:3px solid var(--color-primary)">The Promise</div>
    </div>
    <div class="act-header">
      <div class="act-header__number">Act III</div>
      <div class="act-header__title" style="font-family:var(--font-display);font-style:italic;font-size:1.375rem;padding-bottom:8px;border-bottom:3px solid var(--color-primary)">The Battle</div>
    </div>
  </div>`,

  'Code Progression Label': `<div>
    <div class="code-progression" style="margin-bottom:4px">Disclosure Level: Naive Implementation</div>
    <div class="code-progression" style="margin-bottom:4px">Disclosure Level: Schema Approach</div>
    <div class="code-progression">Disclosure Level: Production Architecture</div>
  </div>`,

  'Exploration Header': `<div class="exploration-header">
    <div class="exploration-header__inner">
      <div class="exploration-id">Exploration OD-002 &mdash; Density: CRESCENDO</div>
      <div class="exploration-title" style="font-family:var(--font-display);font-size:1.625rem;font-style:italic;color:#FAFAF5;margin-bottom:8px">Narrative Arc Structure</div>
      <p class="exploration-hypothesis">What if documentation was organized as a story?</p>
      <div class="exploration-meta">
        <span>Density: <strong class="exploration-meta__value">CRESCENDO</strong></span>
        <span>Organization: <strong class="exploration-meta__value">Narrative Arc</strong></span>
      </div>
    </div>
  </div>`,

  'Narrative Summary': `<div class="narrative-summary">
    <div class="narrative-summary__title">The Story So Far</div>
    <ul class="narrative-summary__list">
      <li class="narrative-summary__item"><div class="narrative-summary__marker"></div><span>APIs start as four verbs but become layered architectures</span></li>
      <li class="narrative-summary__item"><div class="narrative-summary__marker"></div><span>The distance between tutorial and production is where growth happens</span></li>
      <li class="narrative-summary__item"><div class="narrative-summary__marker"></div><span>Validation, auth, and error handling are the hidden complexity</span></li>
    </ul>
  </div>`,

  'Typography Compression Gradient (Act Headers)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Typography Compression Across Acts</div>
    <div style="margin-bottom:8px"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act I: 40px</span><div style="font-family:var(--font-display);font-style:italic;font-size:2.5rem;border-bottom:3px solid var(--color-primary);padding-bottom:4px">The Promise</div></div>
    <div style="margin-bottom:8px"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act II: 26px</span><div style="font-family:var(--font-display);font-style:italic;font-size:1.625rem;border-bottom:3px solid var(--color-primary);padding-bottom:4px">The Complexity</div></div>
    <div style="margin-bottom:8px"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act III: 22px</span><div style="font-family:var(--font-display);font-style:italic;font-size:1.375rem;border-bottom:3px solid var(--color-primary);padding-bottom:4px">The Battle</div></div>
    <div style="margin-bottom:8px"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act IV: 16px bold</span><div style="font-family:var(--font-display);font-style:italic;font-size:1rem;font-weight:600;border-bottom:3px solid var(--color-primary);padding-bottom:4px">The Architecture</div></div>
    <div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act V: 16px</span><div style="font-family:var(--font-display);font-style:italic;font-size:1rem;border-bottom:3px solid var(--color-primary);padding-bottom:4px">The Reflection</div></div>
  </div>`,

  'Spacing-as-Density Gradient (Narrative Beats)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Beat Spacing Across Acts</div>
    <div style="display:flex;gap:8px;align-items:flex-end">
      <div style="flex:1;text-align:center"><div style="height:64px;background:var(--color-zone-breathing);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:10px">64px</span></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">I</span></div>
      <div style="flex:1;text-align:center"><div style="height:40px;background:var(--color-zone-breathing);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:10px">40px</span></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">II</span></div>
      <div style="flex:1;text-align:center"><div style="height:24px;background:var(--color-zone-breathing);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:10px">24px</span></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-primary)">III</span></div>
      <div style="flex:1;text-align:center"><div style="height:32px;background:var(--color-zone-breathing);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:10px">32px</span></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">IV</span></div>
      <div style="flex:1;text-align:center"><div style="height:40px;background:var(--color-zone-breathing);border:1px solid var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:10px">40px</span></div><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">V</span></div>
    </div>
  </div>`,

  'Body Typography Gradient (Font-size + Line-height)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Body Typography Across Acts</div>
    <div style="margin-bottom:6px;padding:6px 8px;background:var(--color-zone-sparse);border-left:4px solid var(--color-border)"><span style="font-size:17px;line-height:1.85">Act I: 17px / 1.85 &mdash; leisurely</span></div>
    <div style="margin-bottom:6px;padding:6px 8px;background:var(--color-zone-sparse);border-left:4px solid var(--color-border)"><span style="font-size:15px;line-height:1.7">Act II: 15px / 1.7 &mdash; moderate</span></div>
    <div style="margin-bottom:6px;padding:6px 8px;background:var(--color-zone-sparse);border-left:4px solid var(--color-primary)"><span style="font-size:14px;line-height:1.6">Act III: 14px / 1.6 &mdash; dense</span></div>
    <div style="margin-bottom:6px;padding:6px 8px;background:var(--color-zone-sparse);border-left:4px solid var(--color-border)"><span style="font-size:14px;line-height:1.7">Act IV: 14px / 1.7 &mdash; settled</span></div>
    <div style="padding:6px 8px;background:var(--color-zone-sparse);border-left:4px solid var(--color-border)"><span style="font-size:15px;line-height:1.8">Act V: 15px / 1.8 &mdash; exhale</span></div>
  </div>`,

  'Act Divider Breathing Zone': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Act Divider (CSS defined, unused in HTML)</div>
    <div class="act-divider"></div>
    <div style="font-size:12px;color:var(--color-text-secondary);margin-top:8px">48px height, breathing-zone background, 3px borders top and bottom. In OD-002, essence pullquotes serve this function instead.</div>
  </div>`,

  'Bar Color Gradient in Arc Visualization': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Bar Color Encodes Intensity</div>
    <div style="display:flex;gap:2px;align-items:flex-end;height:60px">
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:8px;background:#E0D5C5"></div><div style="font-family:var(--font-mono);font-size:8px;text-align:center;color:var(--color-text-secondary);margin-top:2px">muted</div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:15px;background:#E0D5C5"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:22px;background:#666666"></div><div style="font-family:var(--font-mono);font-size:8px;text-align:center;color:var(--color-text-secondary);margin-top:2px">medium</div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:35px;background:#666666"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:45px;background:#666666"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:55px;background:#E83025"></div><div style="font-family:var(--font-mono);font-size:8px;text-align:center;color:var(--color-primary);margin-top:2px">peak</div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:60px;background:#E83025"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:50px;background:#666666"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:30px;background:#E0D5C5"></div></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end"><div style="height:18px;background:#E0D5C5"></div><div style="font-family:var(--font-mono);font-size:8px;text-align:center;color:var(--color-text-secondary);margin-top:2px">muted</div></div>
    </div>
  </div>`,

  'Code Absence as Narrative Withholding': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Code Block Count Per Act</div>
    <div style="display:flex;gap:8px">
      <div style="flex:1;text-align:center;padding:8px;background:var(--color-zone-sparse);border:1px solid var(--color-border)"><div style="font-family:var(--font-mono);font-size:20px;font-weight:600;color:var(--color-text)">0</div><div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act I</div><div style="font-size:10px;color:var(--color-text-secondary)">prose only</div></div>
      <div style="flex:1;text-align:center;padding:8px;background:var(--color-zone-sparse);border:1px solid var(--color-border)"><div style="font-family:var(--font-mono);font-size:20px;font-weight:600;color:var(--color-text)">2</div><div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act II</div><div style="font-size:10px;color:var(--color-text-secondary)">code enters</div></div>
      <div style="flex:1;text-align:center;padding:8px;background:var(--color-zone-dense);border:1px solid var(--color-primary)"><div style="font-family:var(--font-mono);font-size:20px;font-weight:600;color:var(--color-primary)">3</div><div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">Act III</div><div style="font-size:10px;color:var(--color-text-secondary)">code-heavy</div></div>
    </div>
  </div>`,

  'Callout': `<div>
    <div class="callout callout--info"><div class="callout__label">Info</div><div class="callout__body">The API follows REST conventions for resource naming.</div></div>
    <div class="callout callout--essence"><div class="callout__label">Essence</div><div class="callout__body">Every API tells a story. The first chapter is always easy to write.</div></div>
    <div class="callout callout--gotcha"><div class="callout__label">Gotcha</div><div class="callout__body">Never expose internal IDs in your public API response.</div></div>
  </div>`,

  'Essence Pullquote': `<div class="essence-pullquote">
    <div class="essence-pullquote__label">Essence</div>
    <p class="essence-pullquote__text">Every API tells a story. The first chapter is always easy to write. The hard part is what happens when real users arrive.</p>
  </div>`,

  'Code Block': `<div class="code-block">
    <div class="code-block__header"><span class="code-block__lang">typescript</span><span class="code-block__copy">Copy</span></div>
    <div class="code-block__line"><span class="code-block__num">1</span><span class="code--comment">// The naive version</span></div>
    <div class="code-block__line"><span class="code-block__num">2</span>app.<span class="code--function">get</span>(<span class="code--string">'/users'</span>, (req, res) =&gt; {</div>
    <div class="code-block__line"><span class="code-block__num">3</span>  <span class="code--keyword">const</span> users = db.query(<span class="code--string">'SELECT * FROM users'</span>);</div>
    <div class="code-block__line"><span class="code-block__num">4</span>  res.json(users);</div>
    <div class="code-block__line"><span class="code-block__num">5</span>});</div>
  </div>`,

  'Decision Matrix': `<div class="decision-matrix">
    <table>
      <thead><tr><th>Layer</th><th>Tutorial</th><th>Production</th><th>Complexity</th></tr></thead>
      <tbody>
        <tr><td>Validation</td><td>None</td><td>Zod schema + middleware</td><td style="color:var(--accent-green)">Moderate</td></tr>
        <tr><td>Auth</td><td>None</td><td>JWT + RBAC</td><td style="color:var(--accent-amber)">High</td></tr>
        <tr class="decision-matrix__highlight"><td>Lines of Code</td><td>5</td><td>~150 across 6 files</td><td style="color:var(--color-primary);font-weight:600">30x increase</td></tr>
      </tbody>
    </table>
  </div>`,

  'File Tree': `<div class="file-tree">
    <span class="file-tree__label">Project Architecture</span>
    src/<br>
    &ensp;&ensp;<span class="file-tree__item--highlight">routes/</span> <span class="file-tree__annotation">&larr; Thin handlers</span><br>
    &ensp;&ensp;&ensp;&ensp;users.ts <span class="file-tree__annotation">&larr; CRUD endpoints</span><br>
    &ensp;&ensp;<span class="file-tree__item--highlight">services/</span> <span class="file-tree__annotation">&larr; Business logic</span><br>
    &ensp;&ensp;<span class="file-tree__item--highlight">middleware/</span> <span class="file-tree__annotation">&larr; Auth, validation</span>
  </div>`,

  'Narrative Beat': `<div class="narrative-beat">
    <div class="narrative-beat__subtitle" style="font-family:var(--font-body);font-size:var(--type-meta);font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--color-text-secondary);margin-bottom:8px">The Starting Point</div>
    <p style="max-width:65ch;margin-bottom:12px">Every API begins with a question: what does the outside world need to do with our data? For a user management API, the answer is deceptively simple.</p>
    <p style="max-width:65ch;font-size:14px;color:var(--color-text-secondary)">Four verbs. Four endpoints. The entire contract fits in a tweet.</p>
  </div>`,
};

// ═══ SCOPED CSS for OD-003 ═══
const cssOd003 = `
.preview-od003 {
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FFFFFF;
  --color-zone-breathing: #FAF5ED;
  --color-zone-emphasis: #F0EBE3;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --type-page: 2.5rem; --type-section: 1.625rem; --type-subsection: 1.375rem;
  --type-body: 1rem; --type-code: 0.875rem; --type-meta: 0.75rem;
  --border-radius: 0; --box-shadow: none;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;
  --space-12: 48px; --space-16: 64px; --space-20: 80px;
  --accent-blue: #4A90D9; --accent-green: #4A9D6B; --accent-coral: #C97065;
  --accent-amber: #D97706; --accent-purple: #7C3AED;
  --border-left-width: 4px;
  --offset-x: 4px; --offset-y: 4px; --offset-color: #1A1A1A;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.7;
  font-size: 1rem;
  background: var(--color-background);
  border-radius: 0;
}
.preview-od003 * { margin: 0; padding: 0; box-sizing: border-box; }
.preview-od003 h1, .preview-od003 h2, .preview-od003 h3 { all: unset; display: block; }

/* Archipelago Map */
.preview-od003 .archipelago-map { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.preview-od003 .archipelago-tile { padding: 8px; text-align: center; border: 3px solid var(--color-border); }
.preview-od003 .archipelago-tile__number { font-family: var(--font-mono); font-size: 18px; font-weight: 600; color: var(--color-background); display: block; margin-bottom: 2px; }
.preview-od003 .archipelago-tile__label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); display: block; }
.preview-od003 .archipelago-tile__duration { font-family: var(--font-mono); font-size: 9px; color: var(--color-text-secondary); display: block; margin-top: 2px; }
.preview-od003 .archipelago-tile--beginner { border-color: var(--accent-green); }
.preview-od003 .archipelago-tile--intermediate { border-color: var(--color-primary); }
.preview-od003 .archipelago-tile--advanced { border-color: var(--accent-purple); }

/* Exploration Header */
.preview-od003 .exploration-header { border-bottom: 3px solid var(--color-primary); padding: 24px 16px; background: var(--color-text); }
.preview-od003 .exploration-id { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
.preview-od003 .exploration-title { font-family: var(--font-display); font-size: 1.625rem; font-style: italic; color: var(--color-background); margin-bottom: 8px; }
.preview-od003 .exploration-meta { display: flex; gap: 12px; margin-top: 12px; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); flex-wrap: wrap; }
.preview-od003 .exploration-meta span { display: flex; align-items: center; gap: 4px; }
.preview-od003 .exploration-meta__value { color: var(--color-primary); }

/* Bookend Front */
.preview-od003 .bookend-front { background: var(--color-zone-dense); border-left: 4px solid var(--color-primary); padding: 16px; }
.preview-od003 .bookend-front__label { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-primary); margin-bottom: 12px; }
.preview-od003 .bookend-front__title { font-family: var(--font-display); font-style: italic; font-size: var(--type-section); margin-bottom: 12px; }
.preview-od003 .bookend-front__description { color: var(--color-text-secondary); font-size: 14px; line-height: 1.7; }
.preview-od003 .bookend-meta { display: flex; gap: 16px; padding-top: 12px; border-top: 3px solid var(--color-border); flex-wrap: wrap; }
.preview-od003 .bookend-meta__item { display: flex; flex-direction: column; gap: 2px; }
.preview-od003 .bookend-meta__label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-secondary); }
.preview-od003 .bookend-meta__value { font-weight: 600; font-size: 14px; }

/* Task Island */
.preview-od003 .task-island { background: var(--color-zone-dense); border: 3px solid var(--color-border); border-left: 4px solid var(--color-primary); }
.preview-od003 .task-island--beginner { border-left-color: var(--accent-green); }
.preview-od003 .task-island--intermediate { border-left-color: var(--color-primary); }
.preview-od003 .task-island--advanced { border-left-color: var(--accent-purple); }
.preview-od003 .task-island__summary { display: flex; align-items: flex-start; gap: 12px; padding: 16px; }
.preview-od003 .task-island__number { width: 40px; height: 40px; min-width: 40px; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 18px; font-weight: 600; border: 3px solid var(--color-primary); color: var(--color-primary); background: var(--color-background); }
.preview-od003 .task-island--beginner .task-island__number { border-color: var(--accent-green); color: var(--accent-green); }
.preview-od003 .task-island--advanced .task-island__number { border-color: var(--accent-purple); color: var(--accent-purple); }
.preview-od003 .task-island__label { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 2px; }
.preview-od003 .task-island__title { font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); line-height: 1.3; }
.preview-od003 .task-island__meta { display: flex; gap: 12px; margin-top: 4px; align-items: center; }
.preview-od003 .task-duration { font-family: var(--font-mono); font-size: var(--type-meta); color: var(--color-text-secondary); border: 3px solid var(--color-border); padding: 2px 8px; }
.preview-od003 .task-complexity { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 8px; }
.preview-od003 .task-complexity--beginner { color: var(--accent-green); border: 1px solid var(--accent-green); }
.preview-od003 .task-complexity--intermediate { color: var(--color-primary); border: 1px solid var(--color-primary); }
.preview-od003 .task-complexity--advanced { color: var(--accent-purple); border: 1px solid var(--accent-purple); }

/* Task Steps */
.preview-od003 .task-steps { list-style: none; }
.preview-od003 .task-step { display: flex; gap: 12px; margin-bottom: 16px; position: relative; }
.preview-od003 .task-step:not(:last-child)::after { content: ''; position: absolute; left: 15px; top: 36px; bottom: -12px; width: 1px; background: var(--color-border); }
.preview-od003 .task-step__marker { width: 32px; height: 32px; min-width: 32px; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 13px; font-weight: 600; border: 3px solid var(--color-border); background: white; color: var(--color-text-secondary); position: relative; z-index: 1; }
.preview-od003 .task-step__title { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
.preview-od003 .task-step__description { font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }

/* Callout System */
.preview-od003 .callout { border-left: 4px solid var(--color-border); background: var(--color-border-subtle); margin: 12px 0; }
.preview-od003 .callout__label { font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 8px 12px; border-bottom: 1px solid var(--color-border); color: var(--color-text); }
.preview-od003 .callout__body { padding: 8px 12px; font-size: 13px; line-height: 1.7; }
.preview-od003 .callout--essence { border-left-color: var(--color-primary); }
.preview-od003 .callout--essence .callout__body { font-family: var(--font-display); font-style: italic; font-size: 14px; }
.preview-od003 .callout--prereq { border-left-color: var(--color-primary); }
.preview-od003 .callout--tip { border-left-color: var(--accent-green); }
.preview-od003 .callout--checkpoint { border-left-color: var(--accent-green); }
.preview-od003 .callout--warning { border-left-color: var(--accent-amber); }
.preview-od003 .callout--gotcha { border-left-color: var(--accent-coral); }
.preview-od003 .callout--note { border-left-color: var(--accent-blue); }

/* Troubleshoot */
.preview-od003 .troubleshoot { border: 3px solid var(--accent-coral); }
.preview-od003 .troubleshoot__summary { background: var(--color-border-subtle); padding: 8px 12px; font-family: var(--font-mono); font-size: var(--type-meta); font-weight: 500; color: var(--accent-coral); text-transform: uppercase; letter-spacing: 0.06em; display: flex; align-items: center; gap: 8px; }
.preview-od003 .troubleshoot__marker { font-size: 14px; font-weight: 600; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; border: 3px solid var(--accent-coral); flex-shrink: 0; }
.preview-od003 .troubleshoot__body { padding: 12px; font-size: 13px; line-height: 1.7; border-top: 1px solid var(--accent-coral); }

/* Code Block */
.preview-od003 .code-block { background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); padding: 12px 16px; font-family: var(--font-mono); font-size: var(--type-code); line-height: 1.5; overflow-x: auto; }
.preview-od003 .code-block__label { font-family: var(--font-mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-secondary); margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid var(--color-border); }
.preview-od003 .code-keyword { color: var(--color-primary); }
.preview-od003 .code-string { color: #6B9B7A; }
.preview-od003 .code-comment { color: var(--color-text-secondary); font-style: italic; }

/* Bookend Back */
.preview-od003 .bookend-back { background: var(--color-zone-dense); border: 3px solid var(--color-border); border-left: 4px solid var(--color-primary); padding: 16px; }
.preview-od003 .bookend-back__title { font-family: var(--font-display); font-style: italic; font-size: var(--type-section); margin-bottom: 12px; }
.preview-od003 .verification-list { list-style: none; }
.preview-od003 .verification-list li { display: flex; align-items: flex-start; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--color-border-subtle); font-size: 13px; }
.preview-od003 .verification-list li:last-child { border-bottom: none; }
.preview-od003 .verification-list__check { width: 16px; height: 16px; min-width: 16px; border: 3px solid var(--accent-green); display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--accent-green); margin-top: 2px; }

/* Bookend Reflection */
.preview-od003 .bookend-reflection { background: var(--color-zone-breathing); border-left: 4px solid var(--accent-purple); padding: 12px; }
.preview-od003 .bookend-reflection__title { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-purple); margin-bottom: 8px; }
.preview-od003 .bookend-reflection__body { font-family: var(--font-display); font-style: italic; font-size: 14px; line-height: 1.6; }

/* What's Next */
.preview-od003 .whats-next { padding: 12px; border: 3px solid var(--color-border); border-left: 4px solid var(--color-primary); }
.preview-od003 .whats-next__title { font-family: var(--font-display); font-style: italic; font-size: var(--type-subsection); margin-bottom: 8px; }
.preview-od003 .whats-next__list { list-style: none; }
.preview-od003 .whats-next__list li { display: flex; align-items: flex-start; gap: 8px; padding: 4px 0; font-size: 13px; }
.preview-od003 .whats-next__arrow { font-family: var(--font-mono); color: var(--color-primary); font-size: var(--type-meta); margin-top: 3px; }

/* Section Label */
.preview-od003 .section-label { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); text-align: center; padding: 8px 0; }

/* Pattern Summary */
.preview-od003 .pattern-summary { padding: 12px; background: var(--color-border-subtle); border: 3px solid var(--color-border); font-size: 12px; }
.preview-od003 .pattern-summary__title { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-text-secondary); margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid var(--color-border); }
.preview-od003 .pattern-summary table { width: 100%; border-collapse: collapse; font-size: 12px; }
.preview-od003 .pattern-summary th, .preview-od003 .pattern-summary td { text-align: left; padding: 4px 6px; border-bottom: 1px solid var(--color-border); }
.preview-od003 .pattern-summary th { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); font-weight: 500; }

/* Sparse Sea */
.preview-od003 .sparse-sea { height: 40px; }

/* Essence Quote */
.preview-od003 .essence-quote { font-family: var(--font-display); font-style: italic; font-size: var(--type-section); color: var(--color-text); padding: 16px 0; border-top: 3px solid var(--color-primary); border-bottom: 3px solid var(--color-primary); text-align: center; line-height: 1.5; }
`;

// ═══ PREVIEW SNIPPETS for OD-003 ═══
const previewsOd003 = {
  'Archipelago Map': `<div style="background:var(--color-text);padding:16px">
    <div class="archipelago-map">
      <div class="archipelago-tile archipelago-tile--beginner"><span class="archipelago-tile__number">1</span><span class="archipelago-tile__label">Install</span><span class="archipelago-tile__duration">~10 min</span></div>
      <div class="archipelago-tile archipelago-tile--beginner"><span class="archipelago-tile__number">2</span><span class="archipelago-tile__label">Config</span><span class="archipelago-tile__duration">~15 min</span></div>
      <div class="archipelago-tile archipelago-tile--intermediate"><span class="archipelago-tile__number">3</span><span class="archipelago-tile__label">Build</span><span class="archipelago-tile__duration">~15 min</span></div>
      <div class="archipelago-tile archipelago-tile--intermediate"><span class="archipelago-tile__number">4</span><span class="archipelago-tile__label">Test</span><span class="archipelago-tile__duration">~20 min</span></div>
      <div class="archipelago-tile archipelago-tile--advanced"><span class="archipelago-tile__number">5</span><span class="archipelago-tile__label">Deploy</span><span class="archipelago-tile__duration">~20 min</span></div>
      <div class="archipelago-tile archipelago-tile--advanced"><span class="archipelago-tile__number">6</span><span class="archipelago-tile__label">Verify</span><span class="archipelago-tile__duration">~15 min</span></div>
    </div>
  </div>`,

  'Exploration ID / Header Metadata': `<div class="exploration-header">
    <div class="exploration-id">Exploration OD-003 / Density: Islands + Bookends</div>
    <div class="exploration-title" style="font-family:var(--font-display);font-size:1.625rem;font-style:italic;color:var(--color-background);margin-bottom:8px">Task-Based Structure</div>
    <div class="exploration-meta">
      <span>Stage: <strong class="exploration-meta__value">3 &mdash; Organization</strong></span>
      <span>DD Source: <strong class="exploration-meta__value">DD-003 (32/40)</strong></span>
      <span>Soul: <strong class="exploration-meta__value">5/5</strong></span>
    </div>
  </div>`,

  'Bookend Front (Orientation Zone)': `<div class="bookend-front">
    <div class="bookend-front__label">You Are Here</div>
    <div class="bookend-front__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-section);margin-bottom:8px">Setting Up a CI/CD Pipeline</div>
    <div class="bookend-front__description">This guide walks you through setting up a complete pipeline. Each task is self-contained.</div>
    <div class="bookend-meta" style="margin-top:12px">
      <div class="bookend-meta__item"><span class="bookend-meta__label">Total Time</span><span class="bookend-meta__value">~95 min</span></div>
      <div class="bookend-meta__item"><span class="bookend-meta__label">Difficulty</span><span class="bookend-meta__value">Beginner &rarr; Advanced</span></div>
    </div>
  </div>`,

  'Task Island Summary Header (per island)': `<div class="task-island task-island--intermediate">
    <div class="task-island__summary">
      <div class="task-island__number" style="border-color:var(--color-primary);color:var(--color-primary)">3</div>
      <div style="flex:1">
        <div class="task-island__label">Task Island 3 of 6</div>
        <div class="task-island__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-subsection)">Configure Build Stage</div>
        <div class="task-island__meta"><span class="task-duration">~15 min</span><span class="task-complexity task-complexity--intermediate">Intermediate</span></div>
      </div>
    </div>
  </div>`,

  'Checkpoint Callouts': `<div class="callout callout--checkpoint">
    <div class="callout__label">Checkpoint</div>
    <div class="callout__body"><strong>You should see</strong> all three tools respond with version numbers: <code style="font-family:var(--font-mono);font-size:12px;background:var(--color-border-subtle);padding:1px 4px">node --version && docker --version && gh --version</code></div>
  </div>`,

  'Section Labels': `<div>
    <div class="section-label">Task Islands</div>
    <div style="height:1px;background:var(--color-border-subtle);margin:4px 0"></div>
    <div class="section-label">Verification</div>
  </div>`,

  'Bookend Back Verification Checklist': `<div class="bookend-back">
    <div class="bookend-back__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-section);margin-bottom:12px">Verification</div>
    <ul class="verification-list">
      <li><div class="verification-list__check">&check;</div><span>Pipeline triggers on push to main</span></li>
      <li><div class="verification-list__check">&check;</div><span>Build job completes under 3 minutes</span></li>
      <li><div class="verification-list__check">&check;</div><span>Test coverage above 80%</span></li>
    </ul>
  </div>`,

  'Essence Reflection Block': `<div class="bookend-reflection">
    <div class="bookend-reflection__title">Reflection</div>
    <div class="bookend-reflection__body">A pipeline is not a feature you build once. It is a living system that evolves with your codebase.</div>
  </div>`,

  'What\'s Next Block': `<div class="whats-next">
    <div class="whats-next__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-subsection);margin-bottom:8px">What's Next</div>
    <ul class="whats-next__list">
      <li><span class="whats-next__arrow">&rarr;</span><span>Add branch protection rules</span></li>
      <li><span class="whats-next__arrow">&rarr;</span><span>Configure staging environment</span></li>
      <li><span class="whats-next__arrow">&rarr;</span><span>Set up monitoring and alerting</span></li>
    </ul>
  </div>`,

  'Pattern Summary Table': `<div class="pattern-summary">
    <div class="pattern-summary__title">Pattern Summary</div>
    <table>
      <thead><tr><th>Property</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>Organization</td><td>Task-based (ISLANDS)</td></tr>
        <tr><td>Density</td><td>ISLANDS + BOOKENDS</td></tr>
        <tr><td>Tasks</td><td>6 (3 beginner, 2 intermediate, 1 advanced)</td></tr>
      </tbody>
    </table>
  </div>`,

  'Sparse Sea Separators': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Sparse Sea Between Islands</div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;font-size:12px;color:var(--color-text-secondary)">Task Island 1</div>
    <div class="sparse-sea" style="border-left:1px dashed var(--color-border-subtle);margin-left:20px;display:flex;align-items:center;padding-left:8px"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">80px+ sparse sea</span></div>
    <div style="background:var(--color-zone-dense);border:3px solid var(--color-border);padding:8px;text-align:center;font-size:12px;color:var(--color-text-secondary)">Task Island 2</div>
  </div>`,

  'Complexity Color Gradient (Beginner -> Intermediate -> Advanced)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Complexity Color Encoding</div>
    <div style="display:flex;gap:8px">
      <div style="flex:1;border:3px solid var(--accent-green);padding:8px;text-align:center"><div style="font-family:var(--font-mono);font-size:18px;font-weight:600;color:var(--accent-green)">1-2</div><span class="task-complexity task-complexity--beginner">Beginner</span></div>
      <div style="flex:1;border:3px solid var(--color-primary);padding:8px;text-align:center"><div style="font-family:var(--font-mono);font-size:18px;font-weight:600;color:var(--color-primary)">3-4</div><span class="task-complexity task-complexity--intermediate">Intermediate</span></div>
      <div style="flex:1;border:3px solid var(--accent-purple);padding:8px;text-align:center"><div style="font-family:var(--font-mono);font-size:18px;font-weight:600;color:var(--accent-purple)">5-6</div><span class="task-complexity task-complexity--advanced">Advanced</span></div>
    </div>
  </div>`,

  'Island Expand/Collapse State Shift': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Expand/Collapse States</div>
    <div style="display:flex;gap:8px">
      <div style="flex:1;border:3px solid var(--color-border);border-left:4px solid var(--accent-green);padding:12px;background:var(--color-zone-dense)">
        <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-family:var(--font-display);font-style:italic;font-size:14px">Task 1: Install</span><span style="font-family:var(--font-mono);font-size:14px;font-weight:600;width:20px;height:20px;border:3px solid var(--color-border);display:flex;align-items:center;justify-content:center">+</span></div>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-top:4px">Collapsed</div>
      </div>
      <div style="flex:1;border:3px solid var(--color-border);border-left:4px solid var(--accent-green);padding:12px;background:var(--color-zone-emphasis)">
        <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-family:var(--font-display);font-style:italic;font-size:14px">Task 1: Install</span><span style="font-family:var(--font-mono);font-size:14px;font-weight:600;width:20px;height:20px;border:3px solid var(--color-border);display:flex;align-items:center;justify-content:center">&minus;</span></div>
        <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);margin-top:4px">Expanded (emphasis bg)</div>
      </div>
    </div>
  </div>`,

  'Bookend Density Transition (Dense -> Sparse -> Dense)': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Bookend Density Pattern</div>
    <div style="display:flex;gap:4px;align-items:stretch;height:60px">
      <div style="flex:2;background:var(--color-zone-dense);border:1px solid var(--color-primary);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-primary)">DENSE (front)</span></div>
      <div style="flex:3;background:var(--color-zone-sparse);border:1px dashed var(--color-border);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">SPARSE (islands in sea)</span></div>
      <div style="flex:2;background:var(--color-zone-dense);border:1px solid var(--color-primary);display:flex;align-items:center;justify-content:center"><span style="font-family:var(--font-mono);font-size:9px;color:var(--color-primary)">DENSE (back)</span></div>
    </div>
  </div>`,

  'Callout Label/Body Typography Split': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Label vs Body Typography</div>
    <div class="callout callout--prereq">
      <div class="callout__label">Prerequisites <span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary);text-transform:none;letter-spacing:0;font-weight:400">&larr; Mono, uppercase, 12px, 600</span></div>
      <div class="callout__body">Body text uses Inter 14px 400 with 1.7 line-height <span style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-secondary)">&larr; Sans, sentence, 14px, 400</span></div>
    </div>
  </div>`,

  'Essence Quote Typographic Shift': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Essence Callout Typography Shift</div>
    <div class="callout callout--essence">
      <div class="callout__label">Essence</div>
      <div class="callout__body">A pipeline is not a feature you build once. It is a living system that evolves with your codebase.</div>
    </div>
    <div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">Body shifts to Instrument Serif italic &mdash; the only callout variant that changes the body font.</div>
  </div>`,

  'Code Block Dark Inversion': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Code Block (Dark Inversion)</div>
    <div class="code-block">
      <div class="code-block__label">Terminal</div>
      <code style="font-family:var(--font-mono);font-size:var(--type-code);color:var(--color-background)"><span class="code-comment"># Install nvm</span><br>curl -o- https://raw.githubusercontent.com/.../install.sh | bash<br><span class="code-comment"># Verify</span><br>node --version</code>
    </div>
  </div>`,

  'Step Connector Lines': `<div>
    <div style="font-family:var(--font-mono);font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-secondary);margin-bottom:8px">Step Connector Lines</div>
    <ol class="task-steps" style="counter-reset:task-step">
      <li class="task-step"><div class="task-step__marker">1</div><div style="flex:1;padding-top:4px"><div class="task-step__title">Install Node.js</div><div class="task-step__description">Using nvm for version control</div></div></li>
      <li class="task-step"><div class="task-step__marker">2</div><div style="flex:1;padding-top:4px"><div class="task-step__title">Install Docker</div><div class="task-step__description">Containerized build environments</div></div></li>
      <li class="task-step" style="margin-bottom:0"><div class="task-step__marker">3</div><div style="flex:1;padding-top:4px"><div class="task-step__title">Install GitHub CLI</div><div class="task-step__description">Interact with Actions from terminal</div></div></li>
    </ol>
  </div>`,

  'Task Island': `<div class="task-island task-island--beginner">
    <div class="task-island__summary">
      <div class="task-island__number">1</div>
      <div style="flex:1">
        <div class="task-island__label">Task Island 1 of 6</div>
        <div class="task-island__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-subsection)">Install Prerequisites</div>
        <div class="task-island__meta"><span class="task-duration">~10 min</span><span class="task-complexity task-complexity--beginner">Beginner</span></div>
      </div>
    </div>
  </div>`,

  'Task Steps List': `<ol class="task-steps" style="counter-reset:task-step;padding:0 12px">
    <li class="task-step"><div class="task-step__marker">1</div><div style="flex:1;padding-top:4px"><div class="task-step__title">Install Node.js via nvm</div><div class="task-step__description">Using nvm gives you control over which Node version your pipeline uses.</div></div></li>
    <li class="task-step" style="margin-bottom:0"><div class="task-step__marker">2</div><div style="flex:1;padding-top:4px"><div class="task-step__title">Install Docker Desktop</div><div class="task-step__description">Docker provides containerized build environments.</div></div></li>
  </ol>`,

  'Callout System': `<div>
    <div class="callout callout--prereq"><div class="callout__label">Prerequisites</div><div class="callout__body">A macOS or Linux terminal, admin privileges.</div></div>
    <div class="callout callout--checkpoint"><div class="callout__label">Checkpoint</div><div class="callout__body"><strong>You should see</strong> version numbers from all tools.</div></div>
    <div class="callout callout--warning"><div class="callout__label">Warning</div><div class="callout__body">Never hardcode secrets in workflow files.</div></div>
  </div>`,

  'Troubleshoot Accordion': `<div class="troubleshoot">
    <div class="troubleshoot__summary"><div class="troubleshoot__marker">+</div> If This Fails: Node.js not found after installation</div>
    <div class="troubleshoot__body"><p>Add the following to <code style="font-family:var(--font-mono);font-size:12px;background:var(--color-border-subtle);padding:1px 4px">~/.zshrc</code>:</p></div>
  </div>`,

  'Code Block': `<div class="code-block">
    <div class="code-block__label">Terminal</div>
    <code style="font-family:var(--font-mono);font-size:var(--type-code);color:var(--color-background)"><span class="code-comment"># Install nvm</span><br>curl -o- https://raw.githubusercontent.com/.../install.sh | bash<br><br><span class="code-comment"># Verify</span><br>node --version <span class="code-comment"># v20.x.x or later</span></code>
  </div>`,

  'Exploration Header': `<div class="exploration-header">
    <div class="exploration-id">Exploration OD-003 / Density: Islands + Bookends</div>
    <div class="exploration-title" style="font-family:var(--font-display);font-size:1.625rem;font-style:italic;color:var(--color-background);margin-bottom:8px">Task-Based Structure</div>
    <div class="exploration-meta">
      <span>DD Source: <strong class="exploration-meta__value">DD-003</strong></span>
      <span>Soul: <strong class="exploration-meta__value">5/5</strong></span>
    </div>
  </div>`,

  'Bookend Back': `<div class="bookend-back">
    <div class="bookend-back__title" style="font-family:var(--font-display);font-style:italic;font-size:var(--type-section);margin-bottom:8px">Pipeline Complete</div>
    <ul class="verification-list">
      <li><div class="verification-list__check">&check;</div><span>All 6 tasks completed</span></li>
      <li><div class="verification-list__check">&check;</div><span>Pipeline triggers correctly</span></li>
    </ul>
  </div>`,

  "What's Next Block": `<div class="whats-next" style="padding:24px;border-left:4px solid var(--color-primary);background:var(--color-zone-sparse)">
    <h2 class="whats-next__title" style="font-family:var(--font-display);font-size:1.375rem;font-style:italic;margin-bottom:12px">What's Next</h2>
    <ul class="whats-next__list" style="list-style:none;padding:0">
      <li style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="whats-next__arrow" style="color:var(--color-primary);font-weight:600">→</span> Continue to the next task island</li>
      <li style="display:flex;align-items:center;gap:8px"><span class="whats-next__arrow" style="color:var(--color-primary);font-weight:600">→</span> Review the archipelago map above</li>
    </ul>
  </div>`,
};
