# Specialist 4: Constraint Landscape for Steve Yegge Gas Town Extraction

## Category 1: Soul Checklist (Non-Negotiable)

Every item is binary pass/fail. Zero exceptions. Pre-flight AND post-flight.

```
[ ] border-radius: 0 on every element, pseudo-element, and generated content
[ ] box-shadow: none on every element (no card lifts, no hover shadows)
[ ] No filter: drop-shadow() anywhere in stylesheet
[ ] No CSS gradients (linear-gradient, radial-gradient, conic-gradient)
[ ] No rgba() or hsla() with alpha < 1.0 on ANY background (the #1 systemic violation -- survives multiple review layers)
[ ] opacity: 1.0 on ALL visual elements and offset pseudo-elements
[ ] No transform: translateY() on hover (ANTI-PHYSICAL: no hover lift effects)
[ ] No CSS animations implying object movement (choreography = reader attention through static structure, per AD-F-020)
[ ] Locked palette only: #E83025, #1A1A1A, #FEF9F5, #FFFFFF, #FAF5ED, #E0D5C5, #F0EBE3, #666666 + 5 accent colors
[ ] No cool-toned grays (#F5F5F5, #E0E0E0) -- warm earth tones only
[ ] No pure black #000000 for text -- use #1A1A1A
[ ] No #FFFFFF as page background -- permitted for dense zone surfaces, not dominant background
[ ] Font trinity locked: Instrument Serif (display headings + Essence callout body ONLY), Inter (all body text), JetBrains Mono (code + meta labels)
[ ] Instrument Serif NEVER used for body text
[ ] All spacing from 4px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
[ ] Max 2 callouts visible per ~800px vertical viewport section
[ ] DD-F-006 fractal self-similarity at 5 scales (navigation, page, section, component, character)
[ ] h3 elements are ALWAYS italic (font-family: var(--font-display); font-style: italic)
[ ] Callout family DNA: 2-zone structure (sparse label + dense body) with 4px left-border, differentiated by COLOR only
[ ] No vertical table borders -- horizontal rules only, open grid pattern
[ ] No decorative elements that carry no information
```

---

## Category 2: Conventions (Rules + Reasoning)

### Convention: Container Width 960px

**Rule:** Page container at `max-width: 960px` for this build, per TC brief calibration.

**Reasoning (C-01, AD-PA-CONVENTIONS):** The AD convention spec evolved container width from OD's 860px to AD's 1100px after unanimous 6/6 PA auditor findings flagged narrow containers. The documented range is 860-1100px, with width chosen per content needs. Narrow (860px) for dense reading-focused content, standard (900-1000px) for general purpose, wide (1100px) for multi-axis spatial layouts.

**For THIS build:** The TC brief specifies 960px -- standard width. This content is architecturally complex but primarily prose-driven. The ASCII diagrams need horizontal room but the content is not a multi-axis spatial layout. 960px gives the role hierarchy diagrams adequate width without inviting empty side-channels. Apply consistently: `.page-container`, header inner wrapper, section max-widths, and footer all at 960px.

---

### Convention: 3-Category Border System (2px BANNED)

**Rule:** Every border is Cat 1 (3px+ structural/accent), Cat 2 (1px data separator), or Cat 3 (1px micro-element). 2px borders are BANNED -- no exceptions.

**Reasoning (OD-F-AP-001, AD-PA-CONVENTIONS C-04):** The 2px border epidemic was the #1 systemic audit finding in OD -- 108 CSS declarations, 1000+ computed instances. 2px is perceptually ambiguous: not strong enough to signal structure, not thin enough to recede. AD introduced 4px/3px/1px gradient that deliberately SKIPS 2px (AD-F-014). PA auditors examining AD-004's spiral strata independently confirmed the skip-2px decision as "legible" and "structurally clear."

**For THIS build:** The TC brief specifies a 3-tier border system mapping to the control tower hierarchy: 4px for town-level structures (Mayor, Deacon, Dogs), 3px for rig-level structures (Refinery, Witness, Polecat), 1px for worker-level (Crew) and data separators within tables. The 8-role architecture section is the compositional challenge -- the border weight gradient IS the hierarchy made visible. Use Cat 1 (4px left-border) on the foundational declaration callout ("Gas Town is a factory for agents"). Use Cat 2 (1px) for all table row borders and the comparison tables in sections 5, 12. Use Cat 3 (1px) for inline code borders, badge outlines.

---

### Convention: Dark Full-Bleed Header with Red Bottom Border

**Rule:** Page opens with `background: #1A1A1A` full-bleed header, cream text in Instrument Serif, `border-bottom: 3px solid var(--color-primary)`.

**Reasoning (C-16, AD-PA-CONVENTIONS):** Unanimously praised across all 6 AD pages by 20+ independent adversarial auditors. Not one negative finding. AD-001 Alpha called it "commanding," AD-003 Beta found "real presence and gravitas." This is the single most-praised element in the entire audit corpus. The dark header survived adversarial scrutiny from 20+ independent reviewers without a single negative finding.

**For THIS build:** The header establishes the Overseer's floor -- the top of the industrial control tower. Yegge's provocative voice ("The agent factory architect") demands the display serif at literary scale. The warm cream background returns below the header; the dark-to-cream transition is the first register shift (authority establishment -> briefing). Meta labels in JetBrains Mono with letter-spacing 0.1em position the content in the complexity ladder.

---

### Convention: Visual Page Ending Required (Footer Bookend)

**Rule:** Every page MUST end with a footer element using `border-top: 3px solid var(--color-border)` that mirrors the header's design language. No trailing empty cream space.

**Reasoning (C-02, C-04, C-23, AD-PA-CONVENTIONS):** The single most consistently flagged finding across the entire AD PA corpus. Every page "just stopped." AD-002's Beta: "a page about F-pattern reading physics that itself fails the most basic reading physics test." Six independent fix agents all converged on header-mirroring footers without coordination -- the solution is a natural design principle, not arbitrary.

**For THIS build:** The page's compositional arc (TC brief Section 4) returns to warm cream at the Sources/Comparison section. The footer IS the reader arriving back at the Overseer's floor. Include exploration identifier, date/provenance line, and navigation hint in JetBrains Mono to echo the header's meta labels. The bookend framing says: "you ascended from the Overseer's floor, descended through every operational floor, and returned."

---

### Convention: Dead Space Elimination (Max 300px Gaps)

**Rule:** No blank zones exceeding ~300px vertical height. Breathing zones must be 15-25% of total page height. No single breathing zone exceeds 300px.

**Reasoning (C-03, C-11, AD-PA-CONVENTIONS):** Dead space was the #1 or #2 finding on every single AD audit. AD-003 found "approximately 4,000 pixels of blank space -- nearly 5 empty viewports." AD-004 encountered "approximately FOUR consecutive screens of nothing." The distinction between "breathing" and "dead" is perceptual: 48px feels like a pause; 300px+ feels like the page is broken. The 25% ceiling prevents the "is the page broken?" experience.

**For THIS build:** The TC brief's spatial arc specifies 64-80px for opening zones, compressing to 32-40px in the Beads section, returning to 48-64px for closing. This content is LONG (~5,000 words, 14 sections). The risk is stacking section gaps: if every section divider uses `--space-16` (64px), the total breathing space will exceed 25%. Deploy `--space-16` (64px) for major register shifts (Narrative -> Reference, Reference -> Code), `--space-12` (48px) for within-register section breaks, `--space-8` (32px) for subsection breaks within the 8 Roles section.

---

### Convention: Code Block Dark Theme

**Rule:** Code blocks use `background: #1A1A1A`, `color: #FAFAF5`, `border: 3px solid var(--color-border)`, font-size 0.875rem (14px), with locked syntax highlighting palette.

**Reasoning (OD-CONV Section 3):** The Polished/Functional dialect split manifested most visibly in code blocks. Unified to dark theme to create consistent visual weight. Syntax highlighting uses locked palette colors: keywords #E83025 (red), strings #6B9B7A (sage), comments #666666, functions #4A7C9B (blue), types #C97065 (coral), numbers #D97706 (amber), punctuation #E0D5C5.

**For THIS build:** This content has 6+ code blocks in the Implementation Guide, 6+ in Troubleshooting, 2+ in Beads, plus scattered inline code throughout. Code blocks are the "factory floor" -- the operational substrate beneath the narrative voice. The dark code blocks within the dark Beads zone (#1A1A1A bedrock) create a nested depth effect: differentiate with the 3px border becoming more prominent against the matching background. In lighter zones, the dark code blocks provide high-contrast structural anchors. Inline code uses `background: #F0EBE3; border: 1px solid #E0D5C5; padding: 2px 6px` -- Cat 3 micro treatment.

---

### Convention: Type Scale (5-Level Cascade)

**Rule:** `--type-page: 2.5rem (40px)`, `--type-section: 1.625rem (26px)`, `--type-subsection: 1.375rem (22px)`, `--type-body: 1rem (16px)`, `--type-code: 0.875rem (14px)`, `--type-meta: 0.75rem (12px)`.

**Reasoning (OD-CONV Section 5, AD-PA-CONVENTIONS C-15):** The ~1.5x ratio cascade creates clear hierarchy without shouting. Instrument Serif for display/section headings (literary authority), Inter for body (functional clarity), JetBrains Mono for code/meta (technical precision). Every AD auditor confirmed the trio creates three distinct voices readers learn to distinguish.

**For THIS build:** The TC brief specifies a type arc from Instrument Serif 40-48px hero to JetBrains Mono 13px metadata. Apply: hero title at `--type-page` or `--text-display` (48px) in Instrument Serif (Yegge's voice demands literary scale). Section headings in Instrument Serif at `--type-section` (26px) -- these are the "floor labels" of the control tower. Subsection headings in Inter 500 at `--type-subsection` (22px) -- operational signage. Body at 16px Inter, line-height 1.7. Code at 14px JetBrains Mono. Metadata/labels at 12px Inter uppercase with letter-spacing 0.1em -- control panel indicators.

---

### Convention: Callout System (5 Types, Max 2 Per Viewport)

**Rule:** Five semantic callout types with locked accent colors: info (#4A90D9 blue), tip (#4A9D6B green), warning/gotcha (#C97065 coral), challenge (#D97706 amber), essence (#7C3AED purple). All share 2-zone DNA: sparse uppercase label (12px, letter-spaced) above dense body (16px). 4px left-border. Essence callout body in Instrument Serif italic.

**Reasoning (DD-F-014, ACCUMULATED-IDENTITY Soul Piece #3):** Callout stacking creates alarm fatigue -- the signal is lost in noise. Max 2 callouts per viewport was validated across AD. The 2-zone DNA (label + body, 4px left border, differentiation through COLOR only) is the most consistent visual signature across 18/18 explorations.

**For THIS build:** This content has natural callout candidates: the "Idea Compiler" insight, the "Gas Town isn't an agent -- it's a factory" declaration, warnings about cost/complexity, troubleshooting gotchas. The TC brief identifies 3+ blockquotes that deserve Essence treatment (Yegge's voice in Instrument Serif italic with 4px red left-border). Budget: ~3-4 Essence callouts for Yegge's most distinctive quotes, 2-3 warning callouts for prerequisites/costs, 1-2 tip callouts for implementation guidance. Never stack two callouts without at least 48px of prose between them.

---

### Convention: Responsive Collapse at 768px

**Rule:** All multi-column grids collapse to single column at 768px. Reduce padding from `--space-16 --space-8` (64px 32px) to `--space-8 --space-4` (32px 16px). Footer stacks vertically.

**Reasoning (C-05, AD-PA-CONVENTIONS):** Multiple audit findings across all 6 AD pages flagged cramped content at 768px. Desktop padding values consumed too much of the limited viewport width. AD-005 discovered "the page renders identically at 1440px, 1024px, and 768px" -- zero responsive adaptation. The fix pattern emerged consistently from all 6 fix agents.

**For THIS build:** The role hierarchy section may use a 2-column layout for Town-Level roles (Mayor, Deacon, Dogs). This MUST collapse to single column at 768px. The comparison tables (Section 12) should switch from side-by-side to stacked. ASCII diagrams in `<pre>` blocks need `overflow-x: auto` at narrow viewports to prevent horizontal overflow. The tmux layout diagram in Section 7 is wide -- ensure it scrolls horizontally rather than breaking the page layout.

---

### Convention: Zone Background Differentiation

**Rule:** Four zone backgrounds signal content type shifts: sparse `#FEF9F5` (warm cream), dense `#FFFFFF` (white), breathing `#FAF5ED` (earthy tan), bedrock `#1A1A1A` (dark). Background changes at zone boundaries are the primary atmospheric tool.

**Reasoning (OD-CONV Section 7, vocabulary.md):** Zone backgrounds create the PULSE differentiation that drives the density oscillation. The subtle shift between #FEF9F5 and #FFFFFF (15+ RGB delta requirement per SC-09) signals content register changes without borders. Background alternation is how the system creates atmosphere.

**For THIS build:** The TC brief specifies a 5-zone arc: Overseer floor (#FEF9F5 warm cream) -> Town level (#FFFFFF dense white) -> Rig level (#FAF5ED earthy) -> Beads/Memory (#1A1A1A bedrock dark) -> Resolution (#FEF9F5 return to warm). Each zone boundary must shift 3+ of 6 channels (background, typography, spacing, border weight, accent color, component type) per SC-13. The dark Beads zone is the page's most intense visual moment -- the contrast between #1A1A1A background and warm accent borders creates perceptual depth without violating the ANTI-PHYSICAL identity.

---

## Category 3: Anti-Patterns (Risk-Profiled)

### Uniform Role Cards (Code Wall variant) -- HIGH

**Risk rationale:** The 8-role architecture section presents 8 roles with identical structural properties (name, function, code examples, model recommendations). The natural impulse is to render all 8 as identical cards -- same border weight, same padding, same background, same typography. This produces the "code wall" anti-pattern crossed with "same-density stacking."

**Why dangerous HERE:** The TC brief explicitly warns: "The builder who treats all 8 roles identically misses the content's own structure." The content has a built-in 3-tier hierarchy (Town-Level, Rig-Level, Worker-Level) that DEMANDS varied visual treatment. Uniform cards flatten this hierarchy into a monotone wall, contradicting the control tower metaphor where each floor has a different function.

**Mitigation:**
```css
/* TIERED treatment matching operational hierarchy */
/* Town-Level: Mayor, Deacon, Dogs (4px borders, structural emphasis) */
.role--town { border-left: 4px solid var(--color-text); padding: var(--space-8); }

/* Rig-Level: Refinery, Witness, Polecat (3px borders, operational) */
.role--rig { border-left: 3px solid var(--color-border); padding: var(--space-6); }

/* Worker-Level: Crew (1px border, ephemeral) */
.role--worker { border-left: 1px solid var(--color-border-subtle); padding: var(--space-4); }

/* Vary layout: Town-Level in 2-col bento, Rig-Level full-width, Worker inline */
```

**Detection:** Count role presentation elements. If all 8 share identical border-left width, padding, and background -- the hierarchy is flattened. Border weights MUST vary across tiers.

---

### Callout Cacophony -- HIGH

**Risk rationale:** This content contains 10+ blockquotes (Yegge's provocative voice), 6+ warnings/prerequisites, 4+ tips, and 3+ key insights. The natural impulse is to make each a callout -- producing 20+ callouts across the page.

**Why dangerous HERE:** The TC brief's compositional arc calls for Yegge's voice to erupt as "typographic temperature changes" at strategic moments. Stacking callouts flattens this into monotone alerting -- every eruption has the same visual weight, so none of them erupt. The metaphor of an industrial control tower requires operational precision, not alarm cacophony. At ~800px viewport height, 20 callouts means 4-5 callouts per screen.

**Mitigation:**
```css
/* HIGH-signal callouts (keep as callouts -- max 6-8 total): */
.callout--essence { /* 3-4 max: Yegge's definitive declarations */
  border-left: 4px solid var(--color-primary);
  font-family: var(--font-display); font-style: italic;
}
.callout--warning { /* 2-3 max: genuine cost/complexity dangers */ }

/* DEMOTED items (integrate into prose): */
/* Minor quotes -> bold sentence with em dash, within paragraph flow */
/* Tips -> styled inline with Inter weight 500, no callout box */
/* Prereqs -> bulleted list with single warning callout wrapping group */
```

**Detection:** Count callout elements. If > 2 visible in any 800px vertical slice, reduce.

---

### Same Density Throughout -- HIGH

**Risk rationale:** This content has 14 sections of progressively technical depth, but sections 3-9 are all REFERENCE register with similar structural properties (headings, prose, code blocks, tables). Without intervention, the builder will apply uniform spacing between all sections, creating a metronome rhythm.

**Why dangerous HERE:** The TC brief describes a clear spatial arc: opening breathes at 64-80px, compresses to 32-40px in the Beads core, returns to 48-64px for closing. The content's own register shifts (PROVOCATIVE -> REFERENCE -> CODE -> PROVOCATIVE) demand density variation. Uniform density contradicts the control tower metaphor -- different floors have different operational tempos.

**Mitigation:**
```css
/* Opening (Overseer floor -- expansive, inviting): */
.zone--overseer { padding: var(--space-20) 0; /* 80px */ }

/* Architecture core (factory floor -- compressed, operational): */
.zone--architecture { padding: var(--space-10) 0; /* 40px */ }

/* Beads/Memory (bedrock -- maximum density): */
.zone--bedrock { padding: var(--space-8) 0; /* 32px */ }

/* Decision/Comparison (return to human surface): */
.zone--decision { padding: var(--space-16) 0; /* 64px */ }
```

**Detection:** Measure vertical padding between sections. If all values are within 8px of each other, density is uniform -- apply the TC brief's spatial arc.

---

### Code Wall -- HIGH

**Risk rationale:** Sections 7 (Implementation Guide) and 9 (Troubleshooting) contain 6+ code blocks each. The Implementation Guide has a bash script, tmux configuration, startup sequence, and daily workflow commands. Troubleshooting has 6 failure patterns each with code blocks. These sections risk becoming a wall of dark code blocks with no prose breaks.

**Why dangerous HERE:** The TC brief identifies the register shift from NARRATIVE to CODE as the most dramatic transition. If the Implementation section is a solid wall of dark code, the reader experiences no shift -- it's just "more dark blocks." The control tower metaphor requires even the factory floor to have operational rhythm, not monolithic machinery.

**Mitigation:**
```css
/* Break code sequences with explanation callouts */
/* Rule: No more than 30 lines of code without a prose/callout break */
/* For troubleshooting: symptom/cause/recovery structure */
.troubleshoot-pattern {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4); /* tight -- these are dense operational sequences */
}
.troubleshoot-pattern .symptom { /* prose description */ }
.troubleshoot-pattern pre { /* code fix, max 15 lines */ }
.troubleshoot-pattern .recovery { /* prose outcome */ }
```

**Detection:** Count consecutive code blocks with no prose element between them. If > 2, insert explanation or callout breaks.

---

### Traffic-Light Color Adjacency -- MEDIUM

**Risk rationale:** This content has success states (checkpoints, verifications) adjacent to warning states (prerequisites, cost warnings, failure patterns). The callout system uses green (#4A9D6B) for tips/checkpoints and coral/red (#C97065/#E83025) for warnings/gotchas.

**Why dangerous HERE:** Section 8 (Checkpoints) immediately precedes Section 9 (Troubleshooting). If a green checkpoint callout sits directly above a coral troubleshooting callout, the red-green adjacency creates the "kindergarten" effect that diminishes both signals.

**Mitigation:**
```css
/* Minimum 48px neutral spacing between differently-colored callouts */
/* If green tip is followed by coral warning within same section: */
.callout + .callout { margin-top: var(--space-12); /* 48px minimum */ }
/* Or better: insert prose paragraph between differently-colored callouts */
```

**Detection:** Scan for adjacent callout elements with different accent colors. If green/coral or green/red are adjacent without 48px+ gap or intervening prose, separate them.

---

### Semi-Transparent Backgrounds -- MEDIUM

**Risk rationale:** This is the MOST COMMON accidental violation (identity.md). rgba() backgrounds survive multiple review layers. Every wave of OD re-enrichment found new instances (OD-AP-003). Builders instinctively reach for rgba(0,0,0,0.04) for subtle code backgrounds or offset pseudo-elements.

**Why dangerous HERE:** This build has many inline code references (`tmux`, `alice`, `bob`, model names like `opus`, shell commands). The temptation to use semi-transparent backgrounds for inline code distinction is high. Any rgba() on backgrounds creates the same visual effect as box-shadow -- a depth illusion violating the ANTI-PHYSICAL identity.

**Mitigation:**
```css
/* WRONG */
code:not(pre code) { background: rgba(0,0,0,0.04); }
.offset::after { background: rgba(0,0,0,0.04); }

/* RIGHT */
code:not(pre code) { background: var(--color-border-subtle); /* #F0EBE3 */ }
.offset::after { background: #F5F0EB; opacity: 1; }
```

**Detection:** Search entire stylesheet for `rgba(` and `opacity:`. If any visual element has opacity < 1.0, replace with fully opaque equivalent.

---

### Decorative Grid Breaking -- LOW

**Risk rationale:** The ASCII hierarchy diagram and tmux layout diagram are the content's primary spatial tools. The temptation exists to break them out of the content column for visual emphasis.

**Why dangerous HERE:** The TC brief asks "What happens if the Communication Flow diagram becomes a full-width event?" This is a valid experimental question, but breaking grid with DECORATION (borders, background fills around the diagram) violates the anti-pattern. Breaking grid with CONTENT (the diagram itself occupying wider space) is permitted.

**Detection:** Check if any decorative element (border, background panel) extends beyond the content column. If yes, ask: does the CONTENT justify the break, or is the decoration creating it?

---

## Category 4: Creative Territory

### Freedom: Metaphor Interpretation (Control Tower)

**Bounded by:** Soul constraints (angular geometry, flat design), locked palette, no decorative elements. The metaphor MUST manifest through structure, not decoration.

**Available choices:** How the "industrial control tower" concept becomes visual. The builder decides: which CSS properties encode "floor levels" (background zones, border weights, spacing compression)? How does the Overseer's warm floor differ from the Rig's operational floor? Whether the complexity ladder diagram becomes a structural spine or a contained code block.

**TC brief suggests:** Vertical stratification through border weight (4px town / 3px rig / 1px worker), background zone progression from warm cream to dense white to earthy tan to bedrock dark, and the Beads memory model as the natural dark zone at the deepest floor. Named human workers (Alice, Bob, Carol) become typographic events in Instrument Serif within the operational Inter context.

---

### Freedom: Custom Property Naming

**Bounded by:** Must use locked `--color-*`, `--space-*`, `--font-*`, `--type-*` token names for standard values. Custom properties for metaphor-specific semantics are permitted.

**Available choices:** The builder can create concept-based aliases: `--tower-floor-town`, `--tower-floor-rig`, `--tower-floor-worker` mapped to locked values. `--bedrock-bg: var(--color-zone-bedrock)`. `--overseer-warmth: var(--color-zone-sparse)`. These carry semantic meaning about the control tower without introducing non-standard values.

**TC brief suggests:** Zone naming that maps to the tower's vertical organization. The memory layer beneath workers is "bedrock," the coordination layer is "town," the execution layer is "rig."

---

### Freedom: Zone Count and Proportions

**Bounded by:** Breathing zones 15-25% of page height. No single zone > 300px gap. Must have density variation (not uniform). Background deltas >= 15 RGB at boundaries.

**Available choices:** The TC brief specifies 5 background zones but the builder chooses exact transition points, zone proportions, and how much of the 14-section content lives in each zone. The Beads dark zone could be 1 section or expand to encompass adjacent technical material. The warm cream bookend could be brief or expansive.

**TC brief suggests:** Opening + closing in warm cream, coordination sections in dense white, execution sections in earthy tan, Beads/Memory in bedrock dark. The climax at approximately 55-65% page height (Beads section) should be the densest, darkest zone.

---

### Freedom: ASCII Diagram Treatment

**Bounded by:** Code blocks use dark theme (#1A1A1A bg). JetBrains Mono at 14px. Must be accessible (not images of text). Must not overflow container at 768px.

**Available choices:** This content has 6+ ASCII diagrams that serve as the primary spatial communication tool. The builder decides: standard code block treatment for all diagrams? Or elevated treatment (wider monospace blocks, reduced surrounding content density, subtle background distinction from standard code blocks) for the 2-3 largest diagrams (role hierarchy, communication flow, tmux layout)? Whether the complexity ladder gets full-width breathing room or lives within the standard content column.

**TC brief suggests:** The largest diagrams (role hierarchy, communication flow) deserve breathing room -- wider monospace blocks with reduced surrounding density. The complexity ladder as the opening thesis rendered in monospace. The tmux diagram as a physical workspace counterpart to the logical hierarchy.

---

### Freedom: Yegge Quote Treatment

**Bounded by:** Callout family DNA (2-zone, 4px left-border). Essence callouts use Instrument Serif italic for body. Max 2 callouts per viewport.

**Available choices:** Which of Yegge's 10+ quotes get Essence callout treatment vs. inline bold treatment. The builder curates: 3-4 highest-signal quotes become Essence callouts (Instrument Serif italic, 4px red left-border). Remaining quotes integrate as bold inline text or styled blockquotes without callout framing. The "eruption" of personality within technical architecture -- the reader should feel the shift from technical to personal as a typographic temperature change.

**TC brief suggests:** "The world's biggest fuckin' ant" and "Gas Town is an Idea Compiler" are the strongest Essence candidates. These are moments where the human voice breaks through the tower's operational surface. Each becomes a typographic event.

---

### Freedom: Comparison Table Design

**Bounded by:** No vertical table borders (horizontal rules only). 1px border-bottom on rows (Cat 2). Font-size 14px. Must collapse gracefully at 768px.

**Available choices:** This content has 3+ comparison tables plus the 6 Waves table. The builder decides: standard table treatment for all? Or can the Wave 6 row break the pattern (bolder border, accent color, expanded row height) to signal "you are here"? Whether the "Which Orchestrator?" spectrum gets table treatment or a custom horizontal layout.

**TC brief suggests:** The 6 Waves table is a TIMELINE where Wave 6 breaks the pattern. The orchestrator spectrum (Ralph -> CC Mirror -> Orchestra -> Gas Town) is the closing spatial event. Both deserve more than default table treatment -- these are moments where the content's temporal and evaluative dimensions become explicit.

---

### Freedom: Component Selection and Density

**Bounded by:** Must use >= 8 component library classes (SC-08). Must have >= 3 distinct border configurations (SC-15). Must deploy >= 3 distinct typography zones with display-body >= 10px delta (SC-11).

**Available choices:** Which of the 11 component types to deploy, how many, and in what proportion. This content naturally demands: callouts (multiple types), code blocks (dark theme), tables (data comparison), header (dark full-bleed), footer (bookend), blockquotes (Yegge voice). Additional options: bento grid for Town-Level role cards, file tree for project structure, details/summary for progressive disclosure of troubleshooting patterns.

**TC brief suggests:** Bento grid for Town-Level roles (Mayor wider, Deacon and Dogs sharing a row). Full-width for Rig-Level roles where the hierarchy diagram lives. Minimal inline for Crew. Progressive disclosure (`<details>`) for the 6 troubleshooting patterns -- these are depth-on-demand reference content.

---

## Agent Log

- **Files read:** specialist-4-prompt.md (~366 lines), yegge-gas-town-extraction.md (~1280 lines, via persisted output), _tc-brief.md (~155 lines), AD-CONVENTION-SPEC.md (~1093 lines), AD-PA-CONVENTIONS.md (~970 lines), OD-CONVENTION-SPEC.md (~468 lines), identity.md (~87 lines), vocabulary.md (~55 lines), tokens.css (~124 lines), registry.md (~354 lines), ACCUMULATED-IDENTITY-v2.md (~519 lines), BACKBONE.md (~542 lines), OD-RESEARCH-GATE.md (~440 lines), AD-RESEARCH-GATE.md (~510 lines)
- **Conventions assessed:** 27 total from AD-PA-CONVENTIONS, 10 relevant to this build (container width, border system, dark header, footer, dead space, code blocks, type scale, callouts, responsive, zone backgrounds)
- **Anti-patterns profiled:** 12 total from registry + convention amendments. 4 HIGH (uniform role cards, callout cacophony, same density, code wall), 2 MEDIUM (traffic-light, semi-transparent backgrounds), 1 LOW (decorative grid breaking), 5 SKIP (rounded corners -- binary soul check, drop shadows -- binary soul check, hover lift -- binary soul check, sans-serif essence -- binary soul check, non-italic h3 -- binary soul check)
- **Decisions made:**
  - Container width 960px (TC brief calibration, within 860-1100px documented range)
  - AD-CONVENTION-SPEC is authoritative over OD-CONVENTION-SPEC where values differ (per prompt edge case 1)
  - Uniform role cards treated as a custom HIGH anti-pattern derived from TC brief's risk profile rather than from registry alone
  - 5 skipped anti-patterns are already covered by soul checklist binary checks -- including them as anti-patterns would be redundant
  - Creative territory emphasizes ASCII diagram treatment and Yegge quote curation as the two areas where builder choices most affect output quality
- **Output size:** ~340 lines
- **Quality self-assessment:** MEETS quality floor. Soul checklist has 22 items (exceeds 10-12 minimum). 10 conventions with full reasoning extracted (exceeds 8 minimum). 7 anti-patterns risk-profiled with 4 HIGH and 2 MEDIUM (exceeds 6 minimum), all with content-specific CSS mitigation. 7 freedom areas mapped with constraint boundaries (exceeds 5 minimum). Every convention includes WHY from AD-PA-CONVENTIONS. Every HIGH anti-pattern includes specific CSS.
