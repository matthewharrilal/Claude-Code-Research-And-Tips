# Specialist 4: Constraint Landscape for Molly Cantillon's Personal Panopticon

## Category 1: Soul Checklist (Non-Negotiable)

```
[ ] border-radius: 0 everywhere — no element, no pseudo-element, no grid cell, no domain card
[ ] box-shadow: none everywhere — no card lift, no domain shadows, no floating elements
[ ] No filter: drop-shadow() anywhere
[ ] No CSS gradients (linear-gradient, radial-gradient) — solid zone backgrounds only
[ ] No semi-transparent backgrounds — opacity === 1.0 on ALL visual elements (rgba with alpha < 1 is the MOST COMMON accidental violation; every builder in every wave found these)
[ ] No fake depth, blur effects, or parallax — the cartographic survey station is FLAT, like a map table
[ ] Locked palette: #E83025 (primary), #1A1A1A (text/bedrock), #FEF9F5 (cream bg), #E0D5C5 (border), #F0EBE3 (subtle), #666666 (secondary text), plus 5 accent colors (#4A90D9 blue, #4A9D6B green, #C97065 coral, #D97706 amber, #7C3AED purple)
[ ] Font trinity ONLY: Instrument Serif (display headings, Essence callout body), Inter (all body text, labels, UI), JetBrains Mono (code blocks, directory paths, bash scripts)
[ ] Spacing from 4px base scale: 4/8/12/16/20/24/32/40/48/64/80px — no off-scale values
[ ] Max 2 callouts per viewport section (~800px vertical)
[ ] h3 always italic: font-family: var(--font-display); font-style: italic
[ ] No hover lift effects (transform: translateY) — content is editorial, not interactive
[ ] No CSS animation implying object movement — "choreography" means reader attention through static structure
[ ] Visual page ending REQUIRED — page must not trail off into empty cream; footer with 3px border-top bookend
[ ] No dead space > 300px vertical between content sections
```

## Category 2: Conventions (Rules + Reasoning)

### Convention: Container Width 960px

**Rule:** Use `max-width: 960px` for the page container, consistent throughout.

**Reasoning:** The AD-PA-CONVENTIONS C-01 documents how 860px left ~40% of a 1440px viewport as unused cream. The range is 860-1100px, with 960px being the "standard" choice per vocabulary.md. The TC brief explicitly specifies 960px: "Standard-to-wide. This content has both dense prose (philosophy) and parallel structures (8 domains, comparison tables) that need room without becoming panoramic."

**For THIS build:** 960px gives the survey grid zone enough width for a bento-style 8-domain grid while keeping the philosophical prose in the datum point and contour map zones readable. Prose paragraphs still constrained by `p { max-width: 70ch }`.

### Convention: 3-Category Border System (2px BANNED)

**Rule:** Every border is Cat 1 (3px+ structural), Cat 2 (1px data separator), or Cat 3 (1px micro-element). 2px is BANNED — it is structurally ambiguous.

**Reasoning:** The 2px border epidemic was the #1 systemic OD audit finding — 108 CSS declarations, 1000+ computed instances. 2px is perceptually "neither here nor there": not strong enough for structure, not thin enough to recede. The 3-category system forces deliberate weight assignment (AD-PA-CONVENTIONS C-05 confirms auditors found the 4px/3px/1px gradient "legible" and "structurally clear").

**For THIS build:** This article has natural structural hierarchy: zone boundaries (4px structural), domain card edges within the 8-domain grid (3px structural framing), table row separators (1px data), and inline code borders (1px micro). The cartographic metaphor maps directly: grid lines on a survey map come in two weights — major grid (thick) and minor grid (thin). No "medium" exists on a survey grid.

### Convention: Dark Code Block Theme

**Rule:** Code blocks use `background: #1A1A1A; color: #FAFAF5;` with 3px Cat 1 border, JetBrains Mono at 0.875rem, syntax highlighting from the locked palette.

**Reasoning:** OD dialect unification resolved the Polished/Functional split. Dark code blocks create sufficient visual differentiation from surrounding warm cream content to signal "this is literal, executable text" (AD-PA-CONVENTIONS Section I).

**For THIS build:** HIGH RELEVANCE. This article contains 10+ code blocks: bash launch scripts, tmux commands, cron jobs, directory structures, CLAUDE.md examples. Code blocks ARE the surveyor's instruments — the field tools. They dominate the Field Notes zone. The dark-on-dark code blocks within the warm earthy Field Notes zone (TC brief assigns #FAF5ED) create maximum contrast at the register shift from prose to technical content.

### Convention: Full-Bleed Dark Header

**Rule:** Page opens with full-bleed dark header (`background: #1A1A1A`), Instrument Serif title, Inter subtitle, 3px `--color-primary` border-bottom, inner wrapper matching page container width.

**Reasoning:** Dark header validated as "universal amplifier" across all 18 explorations (6 DD + 6 OD + 6 AD). It creates a landmark for spatial orientation and signals "this is curated editorial content, not a blog post" (AD-PA-CONVENTIONS C-04, OD re-enrichment Discovery 2).

**For THIS build:** The TC brief's datum point zone opens at `#FEF9F5` warm cream — NOT a dark header. The dark header convention applies, but the builder has creative freedom to adapt: the datum point IS the benchmark from which measurement begins. A dark header here creates the institutional surveillance atmosphere before inverting to the personal survey. The "They can see you" provocation sits well on near-black.

### Convention: 5-Level Type Scale

**Rule:** --type-page (2.5rem/40px), --type-section (1.625rem/26px), --type-subsection (1.375rem/22px), --type-body (1rem/16px), --type-code (0.875rem/14px), --type-meta (0.75rem/12px). Instrument Serif for display headings, Inter for body, JetBrains Mono for code.

**Reasoning:** OD-AP-002 identified inconsistent typography scale as the driver of quality dialect divergence. The unified 5-level cascade at ~1.5x ratio creates clear hierarchy without shouting. Font-size jumps of 4px+ signal zone boundaries; 2px jumps signal within-zone variation (vocabulary.md).

**For THIS build:** The 5 zones (datum → survey grid → field notes → contour map → projection) each need distinct typographic register. The TC brief specifies: Instrument Serif display headings in datum and contour map zones, Inter-dominant in survey grid, JetBrains Mono-heavy in field notes. The type scale governs these shifts. Cantillon's key quotes in the contour map zone get Instrument Serif italic treatment — they ARE the terrain.

### Convention: Zone Background Differentiation

**Rule:** Use zone backgrounds to signal content type shifts: sparse (#FEF9F5 warm cream), dense (#FFFFFF near-white), breathing (#FAF5ED earthy tan), bedrock (#1A1A1A dark). Background changes at zone boundaries are the primary atmospheric tool.

**Reasoning:** Zone tokens carry quadruple validation (tokens + layout + content + annotations) from OD re-enrichment. Background shifts encode density function names (sparse/dense/breathing), not organizational container names — this IS the OD-F-005 proof that organization IS density (OD-CONVENTION-SPEC Section 7).

**For THIS build:** The TC brief prescribes a 5-zone background arc: datum (#FEF9F5 cream) → survey grid (#FFFFFF white) → field notes (#FAF5ED tan) → contour map (#1A1A1A bedrock) → projection (#FEF9F5 cream). This arc creates a descent into darkness at the philosophical core and a return to light. Each background shift must produce >= 15 RGB max-channel delta at zone boundaries (SC-09 guardrail).

### Convention: Breathing Zone Budget (15-25%)

**Rule:** Minimum 15% of total page height must be whitespace (chapter dividers, mode transitions, section gaps). Maximum 25% (DM-005 ceiling).

**Reasoning:** Below 15%, the page feels relentless — no cognitive recovery points. Above 25%, breathing zones dominate and content feels sparse. The budget forces deliberate allocation: where does the reader need to pause? (AD-CONVENTION-SPEC Section 8, DM-005 amendment).

**For THIS build:** With 5 zones and ~4,300 words of content, the builder must allocate breathing space deliberately. The TC brief calls for maximum breathing at the datum point (64-80px padding) and the transition from field notes to contour map (the "BREATHING" transition type — full cognitive reset). Tightest spacing in the field notes (32-40px). The 15-25% budget prevents the descent into the contour map from becoming an endless dark tunnel.

### Convention: Callout System (2-Zone DNA, 4px Left Border)

**Rule:** All callouts share structural DNA: sparse uppercase label (12px Inter 500, letter-spaced) above dense body content (16px Inter 400). 4px left border with accent color. Max 2 per viewport. 5 semantic types: info (blue), tip (green), gotcha/warning (coral), challenge (amber), essence (purple — Instrument Serif italic body).

**Reasoning:** Soul Piece #3 (Family DNA) — components in a family must share structural DNA, differentiated through COLOR only. DD-F-014 established max 2 per viewport to prevent alarm fatigue.

**For THIS build:** MEDIUM-HIGH RELEVANCE. The article has philosophical warnings (Goodhart's Law, the prison objection — essence or warning callouts), technical tips (tmux commands, cron patterns — tip callouts), and key distinctions (Flutterwhat's critique — could be challenge callout). The TC brief's contour map zone concentrates the highest callout density risk. Builder must select 6-8 highest-signal moments across the full page and integrate the rest into prose. The "meta-level outside the system" concept deserves essence callout treatment — it is the datum point of the philosophy.

### Convention: Visual Page Ending (Footer)

**Rule:** Every page MUST end with a visual terminus element — footer with 3px border-top, matching page container width. Page must NOT trail off into empty cream.

**Reasoning:** This was the single most consistently flagged finding across the entire AD PA corpus. Every page "just stopped." Auditors used language like "catastrophic dead space," "deeply ironic," and "approximately FOUR consecutive screens of nothing" (AD-PA-CONVENTIONS C-02). The footer says "you have reached the end" the way a period ends a sentence.

**For THIS build:** The TC brief's projection zone ends with synthesis/mental model summary functioning as a "survey legend." The footer must signal completion — the survey is done, the map is drawn. This is especially important because the content has a 4-phase tutorial section that could mislead readers into expecting more.

### Convention: Prose Line Length Constraint

**Rule:** `p { max-width: 70ch }` on all prose paragraphs within the wider container.

**Reasoning:** C-20 in AD-PA-CONVENTIONS. The 960-1100px container accommodates grids and spatial layouts, but prose running to full container width becomes unreadable. 70ch caps reading line length while allowing non-prose elements (code blocks, tables, grids) to use full width.

**For THIS build:** The philosophical prose in datum point and contour map zones stays at 70ch. The 8-domain grid in survey grid zone uses full 960px width. Code blocks in field notes use full width. Tables (Panopticon vs Gas Town, production automations) use full width. This creates natural density variation between prose and structured content.

## Category 3: Anti-Patterns (Risk-Profiled)

### Callout Cacophony — HIGH

**Risk rationale:** This article contains 8+ key insights, 5 philosophical warnings, 4 anti-pattern pairs, 3 critique-response dialogues, and multiple technical tips. The natural impulse is to make 15+ callouts. At ~800px viewport height, that produces 3-4 callouts per screen in the contour map zone (which concentrates philosophy + warnings + critiques). The cartographic metaphor's "contour lines tightening" could be misinterpreted as "more callouts = more dense terrain."

**Mitigation:**
```css
/* Select 6-8 highest-signal moments for full callout treatment: */
/* Essence (purple): "meta-level outside the system" concept, "violent gap" quote */
/* Warning (coral): Goodhart's Law, self-imprisonment warning */
/* Tip (green): tmux setup, cron pattern */
/* Demote remaining insights to: */
.prose-emphasis { font-weight: 500; } /* Bold sentence within paragraph */
blockquote { border-left: 4px solid var(--color-border); font-family: var(--font-display); font-style: italic; }
/* Cantillon's quotes as blockquotes, NOT callouts — they are terrain features, not alerts */
```
**Detection:** Count callout elements per 800px vertical slice. If > 2 in any slice, demote lower-priority items to prose integration.

### Code Wall — HIGH

**Risk rationale:** The article contains 10+ code blocks: bash launch scripts (8 lines), tmux commands (4 lines), cron jobs (5 lines), 3 CLAUDE.md examples (10-15 lines each), correlation engine cron (3 lines), directory structures (7 lines each). The field notes zone (Parts IV-V) concentrates most of them. Without intervention, the builder will stack code block after code block with minimal prose buffer, creating a wall of dark blocks on the warm tan background.

**Mitigation:**
```css
/* Break code walls with explanatory prose or callout between blocks */
/* Maximum consecutive code blocks without prose interruption: 2 */
/* Buffer between code blocks: minimum var(--space-8) (32px) + prose paragraph */
.code-block + .code-block { margin-top: var(--space-12); } /* 48px if no prose between */
/* Group related code into single blocks with comments, not separate blocks */
```
**Detection:** Count consecutive `<pre>` elements. If > 2 without intervening prose content, consolidate or add explanatory bridge.

### Uniform Density (Same Spacing Throughout) — HIGH

**Risk rationale:** This article has 17 parts of relatively uniform length. Without the TC brief's 5-zone architecture, the builder will apply uniform --space-12 (48px) between all sections, creating metronomic rhythm. The cartographic metaphor demands density variation: sparse datum point, structured survey grid, dense field notes, philosophical contour map, resolving projection.

**Mitigation:**
```css
/* Deploy density variation matching TC brief's arc: */
.zone--datum { padding: var(--space-20) 0; } /* 80px — wide-open field, benchmark breathing */
.zone--survey-grid { padding: var(--space-12) 0; } /* 48px — structured, organized */
.zone--field-notes { padding: var(--space-8) 0; } /* 32px — dense technical reference */
.zone--contour-map { padding: var(--space-8) var(--space-6); } /* 32px top/bot, varied internal */
.zone--projection { padding: var(--space-12) 0; } /* 48px — opening back out */
```
**Detection:** Measure section padding. If all values within 8px of each other, density is uniform — apply TC brief arc.

### Grid for Sequential Content — HIGH

**Risk rationale:** The 4-phase tutorial (Part XII: Phase 1 Core Setup → Phase 2 Automation → Phase 3 Correlation → Phase 4 Refinement) is inherently SEQUENTIAL. The builder may be tempted to grid these 4 phases because they look like parallel items. But signal words "Day 1," "Week 1," "Week 2," "Ongoing" indicate strict temporal ordering. Grid would destroy the progression.

**Mitigation:** Use vertical layout with sequential markers for the tutorial phases. Grid is ONLY appropriate for the 8-domain taxonomy (which IS parallel — 8 independent compartments). Signal words test: "then," "next," "step," "first/second/third" appear in the tutorial phases (grid contraindicated). "Domains," "parallel," "simultaneously" appear in the domain taxonomy (grid permitted).

**Detection:** Count ordering words in content section. If > 3, grid is contraindicated.

### Traffic-Light Color Adjacency — MEDIUM

**Risk rationale:** The article contains warning content (Goodhart's Law, self-imprisonment) adjacent to empowerment content (capability expansion, $2,000 savings). If the builder places a green tip callout directly next to a coral warning callout, the Christmas-tree effect undermines editorial authority. Risk increases in the contour map zone where philosophical warnings cluster.

**Mitigation:**
```css
/* Separate colored callouts with minimum 48px neutral spacing */
.callout + .callout { margin-top: var(--space-12); } /* 48px minimum */
/* OR interpose prose content between callouts of different accent colors */
/* NEVER: green callout immediately followed by coral/red callout */
```
**Detection:** Inspect adjacent callout elements. If two different accent-colored callouts are within 48px vertical distance, add spacing or interpose prose.

### Structural Overload (Too Many Non-Standard Layouts) — MEDIUM

**Risk rationale:** The TC brief identifies several candidates for non-standard spatial treatment: the 8-domain grid (bento), the Panopticon vs Gas Town comparison table, the correlation engine diagram, the anti-pattern symptom/solution pairs, the bilateral gaze in the datum point. If the builder creates a non-standard section for each, the reader encounters 5+ different spatial logics and cannot build a mental model. The cartographic metaphor encourages spatial variety (different "projections"), increasing the risk.

**Mitigation:** Maximum 2 non-standard spatial sections per page. The 8-domain taxonomy grid IS the page's STRUCTURAL HIGHLIGHT — it gets non-standard treatment. One additional section (bilateral gaze in datum OR anti-pattern cards in contour map) may get non-standard treatment. All other sections use standard vertical editorial flow.

**Detection:** Count sections with non-standard `display: grid` (excluding simple 1-column responsive grids). If > 2, reduce to 2 most content-justified.

### Semi-Transparent Backgrounds — MEDIUM

**Risk rationale:** Every builder in every OD wave found opacity < 1.0 violations not caught by prior audits. This is a systemic audit gap. The cartographic metaphor's zone background arc (#FEF9F5 → #FFFFFF → #FAF5ED → #1A1A1A → #FEF9F5) creates many background transitions where the builder might reach for rgba() to create subtle intermediate steps. The dark contour map zone is especially risky — builders may use rgba(0,0,0,0.04) for subtle code block backgrounds within the dark zone.

**Mitigation:**
```css
/* Binary rule: opacity === 1.0 on ALL visual elements */
/* NO rgba() with alpha < 1 on any background */
/* Use fully opaque tinted alternatives from the palette */
code:not(pre code) { background: var(--color-border-subtle); } /* #F0EBE3, not rgba(0,0,0,0.04) */
```
**Detection:** Search CSS for `rgba(` and `opacity:`. Any alpha < 1.0 on visual elements is a violation.

## Category 4: Creative Territory

### Freedom: Metaphor Interpretation (Cartographic Survey Station)

**Bounded by:** Soul constraints (angular, flat, warm palette, no depth). The cartographic metaphor must manifest through structure, not decoration. No literal map illustrations, no compass roses, no topographic drawings — these would be decorative elements carrying no information (identity.md refusal).

**Available choices:** How "survey station" manifests in CSS: grid lines as border patterns, zones as survey quadrants, contour-line tightening as spacing compression, the benchmark datum as a structurally distinct element. Custom property naming using survey vocabulary (`--quadrant-depth`, `--contour-spacing`, `--datum-offset`). The surveyor's notebook texture through typography register shifts.

**TC brief suggests:** Territory being surveyed = the reader's life. Survey zones = 8 domains. Grid lines = isolation principle. Contour lines = cross-domain patterns. The metaphor should feel like the reader is learning to map their own territory.

### Freedom: Zone Count and Proportions

**Bounded by:** TC brief specifies 5 zones with named semantic direction (ESTABLISHING → GRIDDING → RECORDING → INTERPRETING → PROJECTING). Breathing zone budget 15-25%. Zone boundaries must produce >= 15 RGB delta and >= 3 of 6 channel shifts (SC-09, SC-13).

**Available choices:** Exact proportional split between zones. Whether zones have hard borders (4px structural at boundaries) or soft transitions (background color shift only). Whether the contour map zone (dark) uses the full 960px width or a narrower reading corridor. Zone internal subdivision — how many subsections within each zone.

**TC brief suggests:** Sparse → Moderate → Dense → Dense-with-variation → Moderate-to-sparse. The descent into darkness at the philosophical core and return to light. The contour map at 60-70% scroll depth is the dramatic peak.

### Freedom: 8-Domain Grid Layout

**Bounded by:** Max 2 non-standard spatial sections. The 8 domains are parallel items that want spatial treatment — a grid the reader can scan as a FIELD. Container width 960px. Grid cells must have border-radius: 0. Bento grid override at 960px documented (DM-001, AD-CONVENTION-SPEC S12.5).

**Available choices:** Grid configuration — 4x2, 2x4, asymmetric (work domains larger than life domains?). Whether domains carry different visual weights encoding time horizon (daily = heavier borders, quarterly = lighter). Whether the 4+4 work/life subdivision occupies different hemispheres. How much information lives in each domain card vs. depth-on-demand via `<details>`.

**TC brief suggests:** Consider visual weight encoding time horizon. Work domains and life domains could occupy different hemispheres. The reader should SEE the isolation architecture as a FIELD before reading individual domain descriptions. This is a compositional question, not a constraint.

### Freedom: Bilateral Gaze (Institutional vs. Personal)

**Bounded by:** Max 2 non-standard layout sections. No decorative grid-breaking. The bilateral structure must carry CONTENT, not decoration. Standard editorial flow is the default.

**Available choices:** Whether to express the institutional/personal asymmetry through layout (asymmetric visual weight) or through typography register shift (dense institutional description vs. sparse personal empowerment). Whether this occupies the datum point zone only or echoes throughout. The structural mirroring pattern — subtle (border-weight difference) or overt (two-column).

**TC brief suggests:** Not a split-screen but an asymmetric visual weight: institutional apparatus described with dense, heavy borders on one margin, the individual's blindness through open, borderless space. The asymmetry IS the argument.

### Freedom: Cantillon's Quotes Treatment

**Bounded by:** Blockquotes or Essence callouts only. If Essence callout: Instrument Serif italic body, 4px left border, purple accent. Max 2 callouts per viewport. Font-style: italic required for h3 and Essence body.

**Available choices:** Whether quotes are blockquotes (structural, within prose flow) or Essence callouts (pull-out, attention-demanding). Spacing around quotes — generous (geological features) or tight (embedded in argument). Whether quotes in the dark contour map zone get special warm-element treatment (cream background callout on dark ground — the "surveyor's lamp" idea from TC brief).

**TC brief suggests:** Cantillon's quotes are not commentary — they ARE the territory. In the contour map zone, consider giving them Instrument Serif italic on near-black, with generous spacing, as geological features the surveyor has discovered. The "single warm element" experimental question — one cream-background element in the dark zone as an anchor.

### Freedom: Responsive Adaptation Strategy

**Bounded by:** Must work at 768px breakpoint minimum. Bento grid must collapse gracefully (AD-CONVENTION-SPEC Section 15, DM-002 progressive enhancement). Reading must remain functional at 768px. The 8-domain grid must linearize at narrow viewports.

**Available choices:** How the 8-domain grid collapses (4x2 → 2x4 → 1x8? or maintain 2-column down to 768px?). Whether the dark contour map zone maintains full-bleed or constrains at narrow viewports. Whether bilateral asymmetry flattens to sequential at narrow widths. How code blocks handle overflow-x at narrow viewports.

**TC brief suggests:** Not specified beyond standard responsive requirements. The domain grid is the primary responsive challenge — parallel → linear transition.

### Freedom: Component Selection

**Bounded by:** >= 8 component library classes required (SC-08). Available: callouts (5 types), code blocks, tables, header/footer, bento grid, file tree, dark zone, breathing zone. Must use >= 3 distinct border configurations across page (SC-15).

**Available choices:** Which of the 11 component types to deploy and where. Whether to use file tree component for the directory structures (~/trades/, ~/correlation/). Whether to use bento grid for the 8-domain taxonomy. How many callout types to deploy (essence for key philosophy, tip for technical patterns, warning for Goodhart). Whether breathing zones are explicit components or implicit through spacing.

**TC brief suggests:** Rich structural features: blockquotes, 8-item taxonomy, directory trees, code blocks, comparison table, anti-pattern pairs, ASCII diagrams. The content demands high component variety. The field notes zone is code-block dominant. The survey grid zone is grid/card dominant. The contour map is quote/callout dominant.

## Agent Log
- **Files read:** specialist-4-prompt.md (~427 lines), molly-panopticon-extraction.md (~950 lines), _tc-brief.md (~397 lines), AD-CONVENTION-SPEC.md (~1,093 lines), AD-PA-CONVENTIONS.md (~970 lines), OD-CONVENTION-SPEC.md (~468 lines), identity.md (87 lines), vocabulary.md (55 lines), tokens.css (124 lines), registry.md (~354 lines), ACCUMULATED-IDENTITY-v2.md (~519 lines), BACKBONE.md (~542 lines), OD-RESEARCH-GATE.md (~440 lines), AD-RESEARCH-GATE.md (~510 lines)
- **Conventions assessed:** 18 total (10 OD-inherited + 8 AD-specific), 10 relevant to this build, 8 excluded (axis-specific zone tokens, accessibility keyboard navigation, and grid alignment rules that are subsumed by general conventions)
- **Anti-patterns profiled:** 12 total, 7 at HIGH or MEDIUM (3 HIGH: callout cacophony, code wall, uniform density; 1 HIGH: grid for sequential content; 3 MEDIUM: traffic-light adjacency, structural overload, semi-transparent backgrounds), 2 LOW (hub-spoke for hierarchical content, same-velocity stacking), 3 SKIP (decorative grid breaking — content is text-primary; non-italic h3 — standard convention; hover reveals — no hover-dependent content)
- **Decisions made:** (1) Container at 960px not 1100px — TC brief explicit, content has prose-heavy zones that benefit from narrower reading corridor. (2) Dark header convention applied despite TC brief's warm datum point — the dark header IS the institutional surveillance; the warm cream is the personal survey that follows. (3) Code wall profiled HIGH not MEDIUM — 10+ code blocks concentrated in field notes creates genuine risk. (4) Grid-for-sequential profiled HIGH — the 4-phase tutorial is a specific trap.
- **Output size:** ~230 lines
- **Quality self-assessment:** MEETS QUALITY FLOOR. Soul checklist: 15 items (exceeds 10-12 minimum). Conventions: 10 with full reasoning (exceeds 8 minimum). Anti-patterns: 7 at HIGH/MEDIUM with content-specific CSS mitigation (exceeds 6 minimum). Creative territory: 7 freedom areas mapped (exceeds 5 minimum). Every convention includes WHY. Every HIGH anti-pattern includes specific CSS values.
