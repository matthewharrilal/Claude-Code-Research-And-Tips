# Specialist 4: Constraint Landscape for Molly Cantillon's Personal Panopticon

## Category 1: Soul Checklist (Non-Negotiable)

Every item is binary. PASS or FAIL. No judgment, no nuance.

```
[ ] border-radius: 0 on every element and pseudo-element (no rounded panels, no pill badges, no rounded code block corners)
[ ] box-shadow: none on every element (no card shadows, no floating panels, no depth effects on the 8-domain grid)
[ ] No filter: drop-shadow() anywhere
[ ] No CSS gradients (linear-gradient, radial-gradient) -- solid zone backgrounds only
[ ] No rgba() with alpha < 1.0 on any visual element background -- opacity === 1.0 binary rule
[ ] No transform: translateY() on hover (no lift effects on domain panels or interactive elements)
[ ] No CSS animations implying physical object movement (ANTI-PHYSICAL identity -- "choreography" = reader attention, not DOM motion)
[ ] Locked palette only: #E83025 (primary red), #1A1A1A (text/dark zones), #FEF9F5 (warm cream bg), #FFFFFF (dense zones), #FAF5ED (breathing zones), #E0D5C5 (borders), #F0EBE3 (subtle borders), #666666 (secondary text)
[ ] Callout accent colors from locked set only: blue #4A90D9, green #4A9D6B, coral #C97065, amber #D97706, purple #7C3AED
[ ] Font trinity: Instrument Serif (display/headings/Essence), Inter (body), JetBrains Mono (code/meta)
[ ] Spacing from 4px base scale: 4/8/12/16/20/24/32/40/48/64/80px only
[ ] Max 2 callouts per viewport section (~800px vertical span)
[ ] DD-F-006 fractal self-similarity at 5 scales (navigation, page, section, component, character)
[ ] No cool grays (#F5F5F5, #E0E0E0) anywhere -- warm earth tones only
[ ] No pure black #000000 or pure white #FFFFFF as page background (components may use #FFFFFF for dense zones)
[ ] No hover lift effects (transform: translateY) -- editorial content, not interactive cards
[ ] No vertical table borders -- horizontal rules only, open grid (especially relevant for Parts II, V, XV comparison tables)
```

---

## Category 2: Conventions (Rules + Reasoning)

### Convention: Container Width 960px

**Rule:** Use `max-width: 960px` for the page container. The TC brief specifies 960px.

**Reasoning (from AD-PA-CONVENTIONS.md C-01):** The convention spec documents an 860-1100px range. OD explorations used 860px, which six independent auditor teams found cramped at 1440px (~40% unused margins). AD amended to 1100px. For THIS build, the TC brief explicitly calibrates to 960px because the content mixes prose, code, and architecture diagrams -- wide enough for the 8-domain panel layout (Zone 2), narrow enough for intimate philosophical prose (Zones 1, 4, 6). The `p { max-width: 70ch }` rule prevents prose lines from becoming uncomfortably long.

**For THIS build:** 960px is the sweet spot. The 8-domain grid panels in Zone 2 need horizontal space to feel like simultaneous instruments, not a narrow list. The philosophical prose in Zones 1, 4, and 6 is intimate single-voice writing that benefits from contained width. 960px serves both.

### Convention: Full-Bleed Dark Header with Red Border

**Rule:** Page opens with `background: #1A1A1A`, cream text (#FEF9F5), Instrument Serif title, `border-bottom: 3px solid #E83025`.

**Reasoning (from AD-PA-CONVENTIONS.md C-16):** The dark header was unanimously praised across all 6 AD audits as the strongest visual element. It establishes editorial authority in the first viewport. The 3px red bottom border is Cat 1 structural, creating a sharp threshold between header and content.

**For THIS build:** The observatory metaphor maps directly. The dark header IS the dome exterior at dusk -- the reader approaches the observatory, sees the dark structure against the warm sky. The red border is the threshold: crossing from outside (dark) to inside (warm cream). The TC brief's Zone 1 opens at #FEF9F5 after this threshold. Title in Instrument Serif carries the philosopher's literary authority for the self-legibility thesis.

### Convention: Visual Page Ending (Footer Required)

**Rule:** Every page MUST end with a visual terminus. 3px Cat 1 structural border-top. No trailing cream void.

**Reasoning (from AD-PA-CONVENTIONS.md C-02):** This was the #1 most consistently flagged finding in all AD audits. Every page "just stopped." AD-004 found "approximately FOUR consecutive screens of nothing." The footer creates a bookend frame with the header -- period at the end of the sentence.

**For THIS build:** The closing constellation (Zone 6) ends with "We must continue to live outside it." The footer must arrive immediately after this final quote. The reader steps outside the observatory -- the footer is the dome door closing behind them. No trailing void. The observatory visit is complete.

### Convention: Border System (3-Category, 2px BANNED)

**Rule:** Cat 1 structural (3px+, 4px for callout left-borders), Cat 2 data separator (1px for table rows, horizontal rules), Cat 3 micro-element (1px for badges, inline code). 2px borders are BANNED.

**Reasoning (from OD-CONVENTION-SPEC Section 2 + AD-PA-CONVENTIONS C-05):** The 2px border epidemic was the #1 systemic finding in OD -- 108 CSS declarations, 1000+ computed instances. 2px is perceptually ambiguous: not strong enough for structure, not thin enough to recede. Creates "visual droning" where every element has the same weight. The 3-category system forces deliberate weight assignment.

**For THIS build:** The 8-domain panels (Zone 2) need Cat 1 borders (4px) -- these are load-bearing walls isolating instruments, not decorative frames. Table borders in the production automations table (Part V) and comparison tables (Part XV) use Cat 2 (1px horizontal rules only). Inline code within CLAUDE.md examples uses Cat 3 (1px). The TC brief explicitly calls for 4px panel borders: "The panel borders are 4px -- these are structural instruments, load-bearing walls."

### Convention: Code Block Theme (Dark, #1A1A1A Background)

**Rule:** Code blocks use dark background (#1A1A1A), cream text (#FAFAF5), 3px Cat 1 border, JetBrains Mono at 0.875rem, syntax highlighting from locked palette.

**Reasoning (from OD-CONVENTION-SPEC Section 3):** Unified from the Polished/Functional dialect split. Dark theme creates maximum contrast for code readability and visually separates code from prose.

**For THIS build:** HIGH RELEVANCE. This content has 10+ code blocks (bash scripts, tmux commands, cron jobs, CLAUDE.md configs, directory trees). The TC brief calls these "brass fittings on a telescope" -- old technology in service of new vision. Dark code blocks against warm cream prose create the engineer/philosopher contrast that IS the compositional arc. JetBrains Mono at slightly smaller size than body text reinforces "these are instrument specifications etched into metal plates."

### Convention: Type Scale (5-Level Cascade, ~1.5x Ratio)

**Rule:** --type-page: 2.5rem (40px), --type-section: 1.625rem (26px), --type-subsection: 1.375rem (22px), --type-body: 1rem (16px), --type-code: 0.875rem (14px), --type-meta: 0.75rem (12px). Instrument Serif for display, Inter for body. h3 ALWAYS italic.

**Reasoning (from OD-CONVENTION-SPEC Section 5 + vocabulary.md):** The ~1.5x ratio creates clear hierarchy without shouting. A font-size jump of 4px+ signals a zone boundary; 2px signals within-zone variation. The italic h3 creates a visual "step down" from h2's upright serif, reinforcing hierarchy without changing weight.

**For THIS build:** The TC brief describes a type arc: Zone 1 opens with Instrument Serif at display scale (philosopher's entrance), Zone 2 shifts to Inter body with JetBrains Mono (architect's precision), Zone 4 returns Instrument Serif for philosophical turn, Zone 6 gives Instrument Serif the final word. The builder deploys the type scale to encode WHO IS SPEAKING: serif = essayist (Cantillon's philosophical voice), sans = engineer (implementation details), mono = machine (bash scripts, configs).

### Convention: Zone Background Differentiation (PULSE/WAVE)

**Rule:** Use zone backgrounds to create density oscillation: sparse (#FEF9F5 warm cream), dense (#FFFFFF white), breathing (#FAF5ED earthy tan). Background changes at zone boundaries are the primary atmospheric tool.

**Reasoning (from OD-CONVENTION-SPEC Section 7 + AD-PA-CONVENTIONS C-14):** Zone tokens carry density function names, not container names. 12+ independent auditors across 6 pages perceived consistent warmth with zero temperature violations. The 3 locked zone colors create subtle PULSE differentiation.

**For THIS build:** The TC brief specifies a 6-zone background arc calibrated to the observatory metaphor: Zone 1 at #FEF9F5 (dome interior, last light), Zone 2 at #FFFFFF (instrument floor, clean working light), Zone 3 at #FAF5ED (observation log, sepia-toned), Zone 4 at #FEF9F5 (observer's journal), Zone 5 at #FFFFFF (survey manual), Zone 6 at #FEF9F5 returning through #FAF5ED (stepping outside, dusk). All values are from the locked palette. The builder must use these EXACT zone backgrounds -- the arc is calibrated.

### Convention: Breathing Zone Budget (15-25%, No Zone >300px)

**Rule:** Minimum 15% of page height must be whitespace. Maximum ~25%. No single breathing zone exceeds 300px.

**Reasoning (from AD-PA-CONVENTIONS.md C-11):** All 6 AD audits flagged excessive breathing as a problem. AD-006 found actual breathing at 30-40% due to dead space accumulation. The distinction between "breathing" and "dead" is perceptual: 48px divider between sections = pause; 300px+ void = broken page.

**For THIS build:** MEDIUM-HIGH risk. This content is long (~6,700 words across 17 parts). The TC brief prescribes a spatial arc from 64-80px (Zones 1, 6) to 32-40px (Zone 5). The risk is stacked breathing zones between the many small parts (XVI, XVII) creating cumulative dead space. Apply: measure TOTAL vertical gap at every section boundary. If stacked padding + margin exceeds 120px at any boundary, reduce.

### Convention: Callout System (4px Left Border, 2-Zone DNA, Max 2 per Viewport)

**Rule:** All callouts share Family DNA: 2-zone structure (sparse uppercase label 12px + dense body 16px), 4px left border, differentiated by COLOR only. Max 2 callouts visible in any ~800px vertical span. Essence callout body uses Instrument Serif italic.

**Reasoning (from identity.md Soul Piece #3 + DD-F-014):** The 2-zone DNA pattern appears in 18/18 validated explorations. Callout stacking creates alarm fatigue -- the signal is lost in noise.

**For THIS build:** This content has natural callout candidates: Goodhart's Law warning (Zone 4), the $2000 discovery (Zone 1), the self-imprisonment concern (Zone 4), the Anthropic trade-off (Zone 4). Risk: Zone 4 has 4 philosophical warnings that all feel callout-worthy. Select maximum 2 for Zone 4 (Goodhart + self-imprisonment), demote the others to prose integration or blockquote treatment. The TC brief recommends treating blockquotes as "eyepiece moments" (Instrument Serif italic, distinct from callout system).

### Convention: Responsive Collapse at 768px

**Rule:** All multi-column grids collapse to single column at max-width: 768px. Reduce padding from --space-16/--space-8 to --space-8/--space-4. Footer stacks vertically.

**Reasoning (from AD-PA-CONVENTIONS.md C-05 + AD-CONVENTION-SPEC S12.5):** 768px is consistently the viewport where responsive problems concentrate across all 6 AD audits. The fix pattern reduces padding to give content more horizontal room.

**For THIS build:** The 8-domain grid panels (Zone 2) are the critical responsive challenge. At desktop, they should feel like 8 simultaneous instruments (2x4 or 4+4 grid). At 768px, they MUST collapse to a single column stack. The TC brief suggests each panel could have subtly different internal density -- this micro-differentiation disappears on mobile and that is acceptable. The builder should test the panel grid at 960px as well (4+-column bento grids break between 768-960px per DM-001).

---

## Category 3: Anti-Patterns (Risk-Profiled)

### Code Wall -- HIGH

**Risk rationale:** This content contains 10+ code blocks across Parts IV, VIII, IX, XII. The implementation sections (Parts IV, VIII) have consecutive code blocks showing bash scripts, tmux commands, and CLAUDE.md configs. Without prose buffering, these become impenetrable walls.

**Why dangerous HERE:** The TC brief explicitly frames code as "brass fittings on a telescope" -- old, solid, engineered. But the CONTRAST between philosophical prose and mundane bash is the compositional point. If code blocks stack without interruption, the contrast disappears into a terminal dump. The reader loses the "radically new idea, radically old technology" tension.

**Mitigation:**
```css
/* Buffer every code block with prose or callout context */
/* No two code blocks within 200px vertical distance */
pre + pre { margin-top: var(--space-12); /* 48px minimum gap */ }
/* Insert explanatory prose between consecutive code examples */
/* For Part VIII CLAUDE.md examples: each config block gets its own */
/* domain heading + 1-2 sentence intro before the code */
```

**Detection:** Count consecutive `<pre>` elements. If 2+ are adjacent siblings with no intervening prose element, break them apart.

### Callout Cacophony -- HIGH

**Risk rationale:** This content has 7+ blockquotes (Part XIII alone has 7), 4 philosophical warnings (Part VI), tips scattered through the build guide (Part XII), and anti-patterns (Part X). The natural impulse is to make each blockquote and warning a callout, producing 15+ callouts across the page.

**Why dangerous HERE:** The TC brief's compositional arc calls for emotional oscillation: vertigo (Zone 1) -> technical calm (Zone 2-3) -> philosophical tension (Zone 4) -> reference density (Zone 5) -> quiet resolution (Zone 6). Stacking callouts flattens this arc into monotone alerting. The observatory metaphor requires precision instruments (few, calibrated callouts), not alarm panels (many, undifferentiated).

**Mitigation:**
```css
/* Budget: 6-8 total callouts across entire page */
/* Zone 1: 1 callout max (the "violent gap" moment) */
/* Zone 2-3: 1-2 callouts max (key architectural insights) */
/* Zone 4: 2 callouts max (Goodhart + self-imprisonment) */
/* Zone 5-6: 1 callout max (build guide key warning) */
/* Demote remaining insights to: */
/*   - blockquote treatment (Instrument Serif italic, no left-border) */
/*   - inline bold emphasis within prose */
/*   - pull-quote styling (wider margins, larger type, no box) */
.callout { margin: var(--space-12) 0; }
/* Enforce viewport density: */
/* count callouts in any 800px vertical slice -- must be <= 2 */
```

**Detection:** Count `.callout` elements. If > 2 visible in any 800px vertical slice, reduce.

### Uniform Density (Same Spacing Throughout) -- HIGH

**Risk rationale:** This content has 17 parts of widely varying length (100-800 words each). Without intervention, the builder will apply uniform --space-12 (48px) between all parts, creating a metronome-like rhythm.

**Why dangerous HERE:** The TC brief describes a spatial arc that MUST vary: Zone 1 breathes wide (64-80px), Zone 2 compresses (40-48px), Zone 4 opens back (56-64px), Zone 5 tightens (32-40px), Zone 6 releases (64-80px). Uniform density contradicts this arc. The observatory metaphor demands variation: the dome entrance is spacious, the instrument floor is precise, the observation deck is expansive.

**Mitigation:**
```css
/* Deploy density variation matching the TC brief's spatial arc */
.zone--threshold { padding: var(--space-16) 0; /* 64px -- breathing */ }
.zone--instruments { padding: var(--space-10) 0; /* 40px -- precise */ }
.zone--log { padding: var(--space-12) 0; /* 48px -- moderate */ }
.zone--journal { padding: var(--space-12) var(--space-4); /* 48px+16px -- breathing */ }
.zone--manual { padding: var(--space-8) 0; /* 32px -- tight, reference */ }
.zone--sky { padding: var(--space-16) 0; /* 64px -- release */ }
```

**Detection:** Measure vertical padding between all sections. If all values are identical (or within 8px), density is uniform. Apply variation.

### Traffic-Light Color Adjacency -- MEDIUM

**Risk rationale:** The content has tip/success patterns (build guide checkpoints in Part XII use "you should see" = green signal) adjacent to warning patterns (anti-patterns in Part X, Goodhart warning in Part VI). If green callouts sit next to red/coral callouts, the traffic-light anti-pattern triggers.

**Why dangerous HERE:** The build guide (Part XII) has 4 checkpoint sections that naturally suggest green (success) callouts. Part X has 4 anti-pattern blocks that suggest coral/red (warning) callouts. If these sections are visually adjacent, green-next-to-red undermines both.

**Mitigation:**
```css
/* Separate any green-accent callout from red/coral callout */
/* by at least 48px (var(--space-12)) of neutral content */
/* For Part XII checkpoints: use accent-blue (info) instead of green */
/* Reserve green for genuine success states, not guide checkpoints */
.callout--checkpoint { border-left-color: var(--accent-blue); }
.callout--antipattern { border-left-color: var(--accent-coral); }
```

**Detection:** Scan for adjacent callout elements with green + red/coral accent colors. If found within 48px vertical distance, insert neutral content between or change accent color.

### Decorative Grid Breaking -- MEDIUM

**Risk rationale:** The 8-domain panel layout (Zone 2) is the page's spatial centerpiece. The temptation is to break the grid with decorative elements -- fancy borders between panels, ornamental connecting lines, the ~/shared/ handoff mechanism as a visual flourish.

**Why dangerous HERE:** The TC brief explicitly states "The isolation between [panels] is visible: explicit gaps, no shared borders." The observatory metaphor demands that each instrument is self-contained. Decorative connectors between panels violate both the metaphor (instruments are isolated) and the identity (decoration competes with content). The handoff mechanism (~/shared/) should be "visually subordinate to the panels themselves."

**Mitigation:**
```css
/* Grid isolation via gap, not decoration */
.domain-grid { gap: var(--space-8); /* 32px explicit gap, no shared borders */ }
/* No connecting lines, arrows, or decorative bridges between cells */
/* ~/shared/ mechanism rendered as small, subordinate text below grid */
/* Not as a visual element within or between grid cells */
```

**Detection:** Check for any decorative pseudo-elements (::before, ::after) that span across grid cells or create visual bridges. If found, remove.

### Same-Velocity Stacking -- MEDIUM

**Risk rationale:** The content has two long stretches of similar-register material: Parts II-IV (architecture/implementation, all REFERENCE register) and Parts VIII-XII (code/reference, all CODE/REFERENCE register). Adjacent sections with the same velocity create monotonous rhythm.

**Why dangerous HERE:** The TC brief identifies the register arc: NARRATIVE -> REFERENCE -> DATA -> NARRATIVE -> CODE -> REFERENCE -> NARRATIVE -> REFERENCE. Within the REFERENCE stretches, the builder must create micro-velocity variation to prevent reader fatigue. Parts II (taxonomy) and III (isolation) are both reference, but II should feel more spacious (establishing the 8 domains) and III should feel tighter (implementation details).

**Mitigation:**
```css
/* Vary velocity within same-register stretches */
/* Part II (taxonomy): wider spacing, display elements */
.section--taxonomy { padding: var(--space-12) 0; }
/* Part III (isolation): tighter, more code-heavy */
.section--isolation { padding: var(--space-8) 0; }
/* Part IV (implementation): tightest, densest code */
.section--implementation { padding: var(--space-6) 0; }
/* Create SLOW-FAST-SLOW micro-rhythm within each zone */
```

**Detection:** Measure padding values of adjacent same-register sections. If 3+ consecutive sections have identical padding, vary them.

### Semi-Transparent Backgrounds (Systemic) -- MEDIUM

**Risk rationale:** This anti-pattern survives multiple review layers. Every wave of OD re-enrichment found new instances. rgba() backgrounds on callout inline code, offset pseudo-elements, and code block backgrounds are the most common accidental violations.

**Why dangerous HERE:** This build has heavy code block usage and callout system usage. The most common vector is `callout code { background: rgba(0,0,0,0.04); }` for inline code within callouts, and offset pseudo-elements with opacity < 1.0.

**Mitigation:**
```css
/* Binary rule: opacity === 1.0 on ALL visual elements */
/* Replace any rgba() background with opaque equivalent */
/* WRONG: */ .callout code { background: rgba(0,0,0,0.04); }
/* RIGHT: */ .callout code { background: #F0EBE3; }
/* WRONG: */ .offset::after { background: rgba(0,0,0,0.04); }
/* RIGHT: */ .offset::after { background: #F5F0EB; opacity: 1; }
```

**Detection:** Search CSS for `rgba(` and `opacity:` values. Any alpha < 1.0 on a visual element background = FAIL.

---

## Category 4: Creative Territory

### Freedom: Metaphor Interpretation (Observatory/Panopticon Inversion)

**Bounded by:** Soul constraints (sharp edges, flat surfaces, warm palette), locked font trinity, no decorative elements carrying no information.

**Available choices:** How the observatory metaphor manifests visually. The dome slit opening, the instrument isolation, the correlation chamber, the reversal from prison to sovereignty -- all are the builder's interpretation within identity. Custom CSS property names encoding the metaphor (--dome-interior, --instrument-panel, --observation-log, --eyepiece-focus) rather than generic names (--section-bg, --card-style).

**TC brief suggests:** The inversion motif -- a moment where visual hierarchy INVERTS (dark background, light text) for Zone 4's philosophical turn. The reader has been looking AT the content; suddenly the content looks at THEM. The Goodhart warning lives in this inverted zone. This is the richest creative territory -- surveillance as liberation held structurally, not argued textually.

### Freedom: 8-Domain Panel Architecture

**Bounded by:** Grid must use named areas (AD-CONVENTION-SPEC S12.1), fr units (S12.2), spacing tokens for gaps (S12.3), collapse to single column at 768px (S12.5). Cat 1 (4px) borders for structural containment. No decorative grid-breaking.

**Available choices:** Grid configuration (2x4, 4+4, asymmetric), whether work domains and life domains occupy visually distinct rows, internal panel character variation (~/trades with tighter padding and tabular density vs ~/writing with wider breathing), whether panels share borders or have explicit gaps (TC brief says explicit gaps). The builder decides how parallelism lives in a linear medium.

**TC brief suggests:** Each panel could carry a faint atmospheric signature of its domain through subtle spacing differences -- NOT through color labels or icons, but through internal density. ~/trades compresses (financial data is dense). ~/writing breathes wider (creative work needs air). Test: cover the domain names, guess which panel is which from spatial rhythm alone.

### Freedom: Blockquote Treatment as Eyepiece Moments

**Bounded by:** Must use Instrument Serif for quotes (Soul Piece #2 -- serif italic for accumulated wisdom). Must not create callout cacophony (max 2 callouts per viewport). Blockquotes are NOT callouts -- they should feel distinct from the callout system.

**Available choices:** Whether blockquotes get a left border (and if so, thinner than 4px callout standard -- perhaps 3px or even 1px to signal "optical element" not "structural callout"), whether they float on the page surface with no background, whether each quote gets its own spatial allocation or they stack. The distinction between a callout (system alert, structural) and a blockquote (human voice, intimate) is the builder's to establish.

**TC brief suggests:** Blockquotes as "looking through the telescope" -- a shift in focus, narrowing of attention. Instrument Serif italic, slightly indented, left border implying the edge of an optical element rather than the standard 4px callout border. The "violent gap" quote and "attention span of a thousand clones" are the two brightest objects in the eyepiece. Zone 6 quotes treated as discrete astronomical observations -- individual bright points with generous breathing between them, not a stacked list.

### Freedom: Zone Transition Design

**Bounded by:** Background changes must use locked zone colors only (#FEF9F5, #FFFFFF, #FAF5ED). No gradients between zones. Spacing transitions must use token values. RGB delta >= 15 at zone boundaries.

**Available choices:** Whether transitions are sharp (hard background cut) or structural (breathing zone insert between content zones), whether transitions are marked by border (Cat 1 divider) or spacing alone, how many zones (minimum 4, maximum guided by TC brief's 6). The builder owns the rhythm of zone changes.

**TC brief suggests:** 6 zones mapped to the observatory journey: Threshold -> Instrument Floor -> Observation Log -> Observer's Journal -> Survey Manual -> Night Sky. The transitions should feel like moving through rooms of the observatory. Zone 2->3 might be a breathing zone (#FAF5ED) marking the shift from active instruments to recorded observations. Zone 4 (philosophical turn) might warrant the bedrock (#1A1A1A) dark zone for the inversion motif.

### Freedom: Component Selection and Density

**Bounded by:** Must use components from components.css. Bento grid for Zone 2 panels. Code blocks for Parts IV, VIII, IX, XII. Tables for Parts II, V, XV. Callout system for key insights (max budget). Must include skip link, ARIA landmarks (>= 5), proper heading hierarchy.

**Available choices:** Which of the 11 component types to deploy, how many instances of each, their density and rhythm. Whether to use `<details>` for progressive disclosure on the build guide phases (Part XII -- 4 phases with extensive checkpoints could collapse). Whether tables get full-width or constrained treatment. Whether the comparison table (Part XV: Panopticon vs Gas Town) gets bento-style side-by-side or standard table.

**TC brief suggests:** The build guide (Zone 5) should be "a different visual register from the preceding philosophical zone" -- the shift from reflective journal to practical handbook. Collapsible `<details>` for checkpoint verification steps keeps this zone tight. The production automations table (Zone 3) should feel like "a photographic plate showing what the observatory has captured" -- data displayed, not argued.

### Freedom: Responsive Adaptation Strategy

**Bounded by:** Must collapse multi-column grids at 768px. Padding reduces at 768px. Footer stacks vertically. Content must remain readable at all viewports.

**Available choices:** Whether the 8-domain grid goes from 2x4 to 1x8 at 768px or has an intermediate 2x4->2-column->1-column cascade. Whether blockquote treatment changes at narrow viewports (wider margins on desktop become standard margins on mobile). Whether Zone 2's panel micro-differentiation (varied internal density per domain) simplifies to uniform density on mobile.

**TC brief suggests:** The observatory metaphor should degrade gracefully. On mobile, the reader can no longer see all 8 instruments simultaneously -- they examine one at a time. This is acceptable and even appropriate: the mobile experience IS the focused observation, the desktop experience IS the survey overview.

---

## Agent Log

- **Files read:** specialist-4-prompt.md (366 lines), molly-panopticon-extraction.md (950 lines), _tc-brief.md (209 lines), AD-CONVENTION-SPEC.md (~900 lines), AD-PA-CONVENTIONS.md (~400 lines read), OD-CONVENTION-SPEC.md (468 lines), identity.md (87 lines), vocabulary.md (55 lines), tokens.css (124 lines), registry.md (354 lines), ACCUMULATED-IDENTITY-v2.md (519 lines), BACKBONE.md (542 lines), OD-RESEARCH-GATE.md (440 lines), AD-RESEARCH-GATE.md (510 lines)
- **Conventions assessed:** 16 total from convention specs, 10 relevant (container width, dark header, footer, border system, code blocks, type scale, zone backgrounds, breathing zones, callouts, responsive collapse)
- **Anti-patterns profiled:** 12 total from registry, 7 rated HIGH or MEDIUM (code wall HIGH, callout cacophony HIGH, uniform density HIGH, traffic-light MEDIUM, decorative grid-breaking MEDIUM, same-velocity stacking MEDIUM, semi-transparent backgrounds MEDIUM). Rounded corners and drop shadows = SKIP (soul checklist already covers). Hover reveals and hover lift = LOW (minimal interactive elements in this editorial content). Non-italic h3 = LOW (covered by type scale convention).
- **Decisions made:** (1) Container 960px per TC brief calibration, not the AD-amended 1100px -- content-specific; (2) Blockquotes treated as distinct from callout system per TC brief eyepiece concept; (3) Zone 4 inversion motif mapped to creative territory, not convention -- builder's choice whether to deploy bedrock dark zone; (4) 8-domain panel grid architecture placed in creative territory with structural constraints from AD-CONVENTION-SPEC S12; (5) Callout budget set at 6-8 total across page, with zone allocation guiding distribution.
- **Output size:** ~290 lines
- **Quality self-assessment:** MEETS quality floor. Soul checklist: 17 binary items (exceeds 10-12 minimum). Conventions: 10 with full reasoning traced to AD-PA-CONVENTIONS.md and OD-CONVENTION-SPEC.md sources (exceeds 8 minimum). Anti-patterns: 7 risk-profiled at HIGH or MEDIUM with content-specific CSS mitigation (exceeds 6 minimum). Creative territory: 6 freedom areas mapped with constraint boundaries and TC brief connections (exceeds 5 minimum). Every convention includes WHY (reasoning from source documents). Every HIGH anti-pattern includes specific CSS mitigation with actual property values. Every creative freedom states what CONSTRAINS it and what CHOICES are available.
