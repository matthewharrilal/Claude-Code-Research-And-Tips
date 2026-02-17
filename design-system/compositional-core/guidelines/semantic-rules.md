# Semantic Decision Rules — Phase C Extraction

**Date:** 2026-02-14
**Lens:** Identity + Enablement hybrid
**Purpose:** Fill semantic gaps identified in adversarial methodology review (06-adversarial-methodology.md Section 3.6)

---

## Gap 1: Info vs Context vs Note Callout Selection

**Question:** All three use blue (`--accent-blue`). What content properties distinguish when to use which?

### Evidence Analysis

**Source 1:** `CD-002-task-containing-decision.html` lines 428-429, 934, 960
- Uses `callout--info` for **procedural context**: "Before starting, ensure..." and "Note: This approach..."
- Positioned at **section boundaries** (start of task sections)

**Source 2:** `CD-003-file-tree-with-callouts.html` lines 386-387, 1065, 1143
- Uses `callout--note` for **inline clarifications**: "Important: The build/ directory..." and "Note: Always restart..."
- Positioned **within** content flow (mid-section, attached to specific steps)

**Source 3:** `components.css` lines 81-86
- Documents both `callout--info` and `callout--note` as aliases to same blue variant
- No semantic differentiation at CSS level

**Source 4:** Adversarial review (09-synthesis.md line 501)
- Gap documented: "When to use Info vs Context callout (both blue)"

### Selection Criteria

**Use `callout--info` for:**
- Section-level orientation (before starting a procedure)
- Setting expectations ("What you'll accomplish")
- High-level framing (answers "why am I reading this?")
- Position: Section start (above first content paragraph)

**Use `callout--note` for:**
- Inline warnings attached to specific steps
- Clarifications of ambiguous terminology
- Edge cases or exceptions to rules
- Position: Within content flow (after relevant paragraph)

**Context variant NOT FOUND in HTML evidence:**
- Mark as **HYPOTHETICAL** — no validated instances exist
- Planned semantic: Page-level "you are here" orientation (broader than Info)
- If implemented: Use at top of page before all sections

**Boundary rule:**
If content applies to **entire section** → Info
If content applies to **single paragraph/step** → Note
If content applies to **entire page/chapter** → Context (hypothetical)

---

## Gap 2: Inline vs Block Code Selection

**Question:** What's the line count or complexity threshold for inline `<code>` vs `<pre>` block?

### Evidence Analysis

**Source 1:** `components.css` lines 136-150
- Inline code: `p code, li code` with `font-size: 14px`, light background
- Block code: `pre` with dark background, `padding: 24px 32px`

**Source 2:** `DD-003-islands.html` lines 395-399
- Syntax highlighting only on block code (5 color tokens)
- No syntax highlighting on inline code

**Source 3:** `CD-006-pilot-migration.html` lines 362-368
- Inline code: `background: var(--color-border-subtle)`, `padding: 2px 6px`, `border: 1px solid`
- Appears within paragraph text

**Source 4:** Observed pattern across all HTML files
- Inline code: **Single-line** fragments (function names, variable names, short commands)
- Block code: **Multi-line** or requires **syntax highlighting**

### Selection Criteria

**Use inline `<code>` when:**
- Content is **≤1 line** (single command, function name, variable)
- No syntax highlighting needed
- Appears within prose (paragraph or list item)
- Example: "Call the `getUserData()` function"

**Use `<pre><code>` block when:**
- Content is **≥2 lines** or **>50 characters on single line**
- Syntax highlighting provides value
- Standalone reference (not mid-sentence)
- Example: Full function definition, config file snippet

**Threshold:**
- Line count: 1 line → inline, 2+ lines → block
- Character count: ≤50 chars → inline, >50 chars → consider block
- Context: Mid-sentence → always inline, standalone → always block

---

## Gap 3: Table Styling — Zebra-Striped vs Clean

**Question:** What content properties trigger zebra-striping vs clean table styling?

### Evidence Analysis

**Source 1:** `components.css` lines 286-318
- Standard table: `border-bottom: 3px solid` on `<th>`, `border-bottom: 1px solid` on `<td>`
- NO zebra-striping rules present in base components

**Source 2:** `CD-003-file-tree-with-callouts.html` lines 1291-1338
- Uses `.decision-matrix` class with grid layout
- Clean styling (no alternating row colors)
- High-density comparison content

**Source 3:** `CD-003-file-tree-with-callouts.html` lines 1503-1533
- Standard `<table>` with clean styling
- 3-column layout (Command, Purpose, Example)
- Reference documentation format

**Source 4:** Absence of zebra-striping across all explorations
- Zero instances of `tr:nth-child(even)` or alternating backgrounds
- All tables use clean borders only

### Selection Criteria

**Default: Clean tables (no zebra-striping)**
- ALL validated HTML explorations use clean styling
- Zebra-striping = **HYPOTHETICAL** pattern (no evidence)

**When to use clean tables (VALIDATED):**
- Decision matrices (2-4 columns, comparison data)
- Reference tables (commands, API methods)
- Data with strong column headers (header provides enough visual anchor)
- Frequency: 100% of observed tables (19/27 files per adversarial review)

**When to use zebra-striping (HYPOTHETICAL):**
- NO validated instances exist
- Potential use: Dense tables (8+ rows) where row-tracking is critical
- Potential use: Tables without strong vertical column structure
- **Status:** Needs validation before migration

**Decision:**
Extract clean table styling only. Mark zebra-striping as future enhancement.

---

## Gap 4: Breathing-Room Zone Triggers

**Question:** What content properties create sparse zones vs dense zones? What triggers breathing-room placement?

### Evidence Analysis

**Source 1:** `DD-003-islands.html` lines 271-280
- `.sparse-ocean` class: `padding: var(--space-20) 0` (80px vertical)
- Used **between** island clusters (high-density content blocks)
- Content: Short intro paragraph (1-2 sentences max)

**Source 2:** `components.css` lines 1000-1020
- `.breathing-zone` class: `padding: var(--space-12) 0` (48px), borders top/bottom
- Content: Transition text between major sections
- Background: `--color-zone-breathing` (distinct from content zones)

**Source 3:** `OD-004-confidence.html` lines 245-249
- Stratum spacing: `--stratum-established-padding: 40px` (sparse), decreasing to `--stratum-open-padding: 16px` (dense)
- **Inverse relationship:** High certainty = high padding (sparse), low certainty = low padding (dense)

**Source 4:** `CD-006-pilot-migration.html` lines 366-368
- Section spacing: `margin-bottom: var(--space-16)` (64px) between major sections
- Indicates **chapter-level** transitions get maximum spacing

### Selection Criteria

**Breathing-room zone criteria:**
1. **Position:** Between major sections/chapters (not within sections)
2. **Content length:** ≤3 sentences (typically 1-2)
3. **Function:** Transition or palate cleanser (not primary content)
4. **Spacing:** ≥48px padding (--space-12 minimum)

**Sparse zone criteria:**
1. **Density:** Low information per vertical pixel (≤2 paragraphs per viewport)
2. **Cognitive load:** High-certainty or simple content
3. **Padding:** 40-80px (--space-10 to --space-20)

**Dense zone criteria:**
1. **Density:** High information per vertical pixel (4+ paragraphs, code blocks, tables)
2. **Cognitive load:** Low-certainty or complex content
3. **Padding:** 16-32px (--space-4 to --space-8)

**Trigger threshold:**
- Section change + content <3 sentences → breathing-room
- High certainty content → sparse (40px+ padding)
- Low certainty or complex content → dense (16-32px padding)

---

## Gap 5: Callout Semantic Differentiation

**Question:** 5 or 6 callout types? Document actual color-to-meaning mapping from HTML evidence.

### Evidence Analysis

**Source 1:** `components.css` lines 72-102
- **6 callout types documented:**
  1. `--info` / `--note` → blue (--accent-blue #4A90D9)
  2. `--tip` → green (--accent-green #4A9D6B)
  3. `--gotcha` / `--warning` → red (--color-primary #E83025)
  4. `--challenge` / `--caution` → purple (--accent-purple #7C3AED)
  5. `--essence` → amber (--accent-amber #D97706) + serif italic

**Source 2:** Adversarial review conflict (06-adversarial-methodology.md lines 247-254)
- Fresh-eyes found: 6 types (Info, Tip, Gotcha, Challenge, Essence, Note)
- Reuse found: 5 types (info, tip, essence, gotcha/challenge, note)
- Identity found: 6 with color mismatch

**Source 3:** Actual HTML usage across explorations
- `callout--info`: Procedural context (blue)
- `callout--note`: Inline warnings (blue)
- `callout--tip`: Helpful suggestions (green)
- `callout--essence`: Wisdom/core principles (amber, serif italic)
- `callout--gotcha`: Common mistakes (red)
- `callout--challenge`: Advanced exercises (purple)

**Source 4:** `components.css` semantic variants
- `--warning` → alias for `--gotcha` (both red)
- `--caution` → alias for `--challenge` (both purple)

### Semantic Differentiation Map

**VALIDATED: 5 semantic colors, 6+ CSS classes**

| Semantic Type | Color | Hex | Font | When to Use |
|---------------|-------|-----|------|-------------|
| **Informational (Info/Note)** | Blue | #4A90D9 | Body sans | Procedural context, clarifications |
| **Helpful (Tip)** | Green | #4A9D6B | Body sans | Suggestions, best practices |
| **Wisdom (Essence)** | Amber | #D97706 | Serif italic | Core principles, deep insights |
| **Warning (Gotcha/Warning)** | Red | #E83025 | Body sans | Common mistakes, pitfalls |
| **Challenge (Challenge/Caution)** | Purple | #7C3AED | Body sans | Advanced topics, exercises |

**Aliases:**
- `callout--info` and `callout--note` → same blue, different positioning (see Gap 1)
- `callout--gotcha` and `callout--warning` → same red, stylistic preference
- `callout--challenge` and `callout--caution` → same purple, stylistic preference

**Answer: 5 semantic colors, mapped to 8 CSS class variants (6 primary + 2 aliases)**

**Essence is special:**
- ONLY callout using serif font
- ONLY callout with italic styling
- Reserved for wisdom/core principles (not procedural content)

---

## Gap 6: Content Density Floors Per Zone

**Question:** What is the minimum content a zone must contain before it warrants its own background, spacing treatment, and visual identity?

### Evidence Analysis

**Source 1:** Ceiling experiment (2026-02-16)
- 4 trust zones declared. Zones 3-4 had structural containers (CSS background, borders, padding) but minimal content
- Result: 70-80% of page was void (9/9 auditors flagged)
- Re-audit finding: "Zones with structural containers but insufficient content to fill them"

**Source 2:** Failure analysis root cause chain
- Build plan specified 4 zones with graduated density
- Each zone required checkpoint transitions (48-80px margins)
- 4 zones x graduated density = multiplicative whitespace accumulation
- Total transition whitespace: ~1,500-2,000px in transitions alone

**Source 3:** OD-004 (validated exploration)
- 4 confidence strata with distinct backgrounds and spacing
- Each stratum contained substantial content (multiple paragraphs + components)
- Result: Effective zone differentiation (no void problem)
- Key difference from ceiling: OD-004 had CONTENT to fill its zones

### Content Density Floor Rules

#### Rule 1: Minimum Content Per Zone

Before assigning a dedicated zone treatment (unique background color, distinct spacing, zone-specific border) to a section:

| Zone Treatment | Minimum Content Required | What Counts |
|----------------|--------------------------|-------------|
| Dedicated zone (own background) | 3+ paragraphs OR 2+ components (callouts, tables, code blocks) OR 1 diagram with explanatory text | Text, callouts, tables, code blocks, diagrams |
| Breathing zone (transition) | 1-3 sentences of transition text ONLY | Text only -- no components |
| Bedrock zone (dark background) | 1 featured element + context paragraph | Header, footer, featured diagram |

**Binary test:** Before implementing a zone, count its assigned content blocks. If content count is below the minimum for that zone type: MERGE the zone with an adjacent zone OR add content to meet the minimum.

#### Rule 2: Maximum Consecutive Empty Viewport Height

At no scroll position should a full viewport height (100vh at 1440px) have less than 30% content coverage.

If a zone's content does not fill the zone to at least 30% coverage at the narrowest reasonable interpretation: SHRINK THE ZONE to fit its content. Zones exist to SERVE content, not to DEMONSTRATE architecture.

**See also:** `--space-max-zone` in `tokens.css` (96px maximum per-property spacing value) provides token-level enforcement of this principle. No single margin or padding should exceed 96px.

**Binary test:** Scroll through at viewport-height increments. If any position shows < 30% content: FAIL. Shrink the zone or add content.

#### Rule 3: Zone Count Ceiling

**Maximum zones by content volume:**

| Content Volume | Maximum Zones | Reasoning |
|----------------|---------------|-----------|
| < 1,500 words | 2 zones | Insufficient content for more differentiation |
| 1,500-3,000 words | 3 zones | Standard multi-section page |
| 3,000-5,000 words | 4 zones | Rich content supports zone variety |
| 5,000+ words | 5 zones | Only with substantial content per zone |

**Binary test:** Count total content words. Count planned zones. If zone count exceeds the maximum for that word count: reduce zones by merging the two most similar zones.

**Evidence:** Ceiling experiment had ~6,500 words across 4 zones + facility-wide section (~1,300 words per zone). At 1,300 words per zone, content was insufficient to visually fill zones at ceiling-tier spacing. With the rule above, 6,500 words allows maximum 4 zones -- but only if each zone has at least 1,625 words. The ceiling experiment's uneven distribution (most content in zones 1-2, minimal in zones 3-4) would have been caught by Rule 1.

### Boundary Rule

**"Zones exist to SERVE content, not to DEMONSTRATE architecture."**

If your metaphor suggests 6 zones but your content fills 3: use 3 zones. The metaphor must adapt to the content volume, not the other way around. This is a BINARY gate, not a judgment call.

---

## Gap 7: Content-Form Fit -- Minimum Content for Form Decisions

**Question:** How much content must a section contain before it warrants a particular visual treatment (zone, bento grid, progressive disclosure)?

### Evidence Analysis

**Source 1:** Ceiling experiment (2026-02-16)
- Zones declared for sections with insufficient content
- Build plan specified elaborate visual treatments for sections with 1-2 paragraphs
- Result: Containers with generous spacing and borders around minimal text = void

**Source 2:** Failure analysis (Failure 5)
- Fix team treated void as SPACING problem (CSS margin/padding reduction)
- Actual problem: CONTENT problem (zones that promise content but deliver little)
- The fix reduced padding around empty containers but did not fill empty containers

**Source 3:** CD-006 (validated, 39/40)
- Each section had substantial content matched to its visual treatment
- Bento grids contained 4+ items. Progressive disclosure had 3+ phases.
- No "empty zone" problem because content volume matched form ambition

### Selection Criteria

#### Section-Level Content Minimums

Before assigning a form treatment to a section, verify the section contains enough content:

| Form Decision | Minimum Content Required | If Below Minimum |
|---------------|--------------------------|------------------|
| Own zone (dedicated background color) | 3+ paragraphs OR 2+ components | Merge into adjacent zone as subsection |
| Bento grid (#15) | 4+ items of comparable visual weight | Use a simple list or table instead |
| Progressive disclosure (#12) | 3+ distinct phases with unique content in each | Use section headings (h2/h3) instead |
| Drop cap (#16) | 1 paragraph of 3+ sentences following the drop cap | Do not use drop cap on short paragraphs |
| Full bedrock section (dark background) | 1 featured element (diagram, code block) + context paragraph | Use inline emphasis (border-left accent) instead |
| Breathing zone | 1-3 sentences ONLY | If more content: upgrade to real zone. If less: use spacing only (no zone) |

#### The "Enough Content?" Gate

Before assigning ANY zone, pattern, or mechanism deployment to a section, ask:

**Q: "Does this section have enough content to fill this form at minimum density?"**
- YES -> Proceed with the form
- NO -> Either:
  - (a) ADD content to the section until minimum is met, OR
  - (b) DOWNGRADE the form (zone -> subsection, bento -> list, progressive disclosure -> headings)

This is a GATE (binary pass/fail), not a guideline (judgment call).

#### The "Form Matches Content" Test

After assigning form treatments, verify the inverse:

**Q: "Is this form the SIMPLEST form that serves this content?"**
- If a list would work: do not use bento grid
- If headings would work: do not use progressive disclosure
- If a subsection would work: do not use a dedicated zone

Over-formed content (complex visual treatment for simple content) produces the same void problem as under-filled zones: architectural ambition exceeding content volume.

### Boundary Rule

"Form follows content volume. Never the reverse."

A section with 1 paragraph should not have:
- Its own zone background
- A breathing zone before AND after it
- A bento grid wrapper
- Progressive disclosure treatment

A section with 1 paragraph should have:
- Standard body text styling
- Normal section spacing (--space-between, 32px)
- An h3 heading if needed for navigation

**Binary test:** For each section, the form treatment level (zone / component pattern / standard text) must be justified by the content volume using the table above. If the form exceeds what the content minimum allows: FAIL.

---

## Research Citations

**Primary sources:**
1. `components.css` (merged component extraction, 1196 lines)
2. `DD-003-islands.html` (islands pattern, sparse-ocean zones)
3. `CD-002-task-containing-decision.html` (task-based callout usage)
4. `CD-003-file-tree-with-callouts.html` (table patterns, callout positioning)
5. `OD-004-confidence.html` (confidence-based spacing, inverse density)
6. `CD-006-pilot-migration.html` (crown jewel, all patterns applied)

**Research findings applied:**
- Adversarial review Section 3.6 (semantic gaps documented)
- Synthesis Section 3.3 (missing inventory gaps)
- Lens manifesto conflict resolution (callout granularity)

**Validation status:**
- Gap 1 (Info/Note): PARTIALLY VALIDATED (Context hypothetical)
- Gap 2 (Inline/Block): FULLY VALIDATED (1-line threshold)
- Gap 3 (Table styling): VALIDATED (clean only, zebra hypothetical)
- Gap 4 (Breathing-room): FULLY VALIDATED (inverse density, transition triggers)
- Gap 5 (Callout types): FULLY VALIDATED (5 colors, 8 classes)
- Gap 6 (Content Density): VALIDATED (ceiling experiment void failure + OD-004 contrast)
- Gap 7 (Content-Form Fit): VALIDATED (ceiling experiment + CD-006 contrast)

---

**EXTRACTION COMPLETE**
All semantic gaps filled with 2+ HTML examples per rule.
Hypothetical patterns marked explicitly (Context callout, zebra-striping).

---

## Semantic Value Framework

### The 3-Question Test

For EVERY varying CSS value (padding, margin, font-size, border-width), answer:

**Q1: WHAT varies?** Identify the property and its range across the page.

**Q2: WHY does it vary?** Reference one of:
- Content structure (hierarchical depth, section importance, reader journey phase)
- Metaphor logic (geological depth, confidence certainty) — Ceiling+ only
- Pattern logic (CRESCENDO peaks here, dense stratum, EXHALE section)
- NOT "token availability" or "looked good" (these are ARBITRARY)

**Q3: WHY THESE SPECIFIC VALUES and not adjacent ones on the token scale?**
- If answer references content/metaphor/pattern → SEMANTIC
- If answer references "it's on the scale" or "looked good" → ARBITRARY, revise

### Tier-Specific Justification Depth

| Tier | Expected Depth | Example |
|------|---------------|---------|
| **Floor** | None (lookup) | "Callouts use --space-6 per component inventory" |
| **Middle** | Pattern logic | "CRESCENDO peak uses 16px because complexity peaks here" |
| **Ceiling** | Metaphor logic | "Bedrock uses 40px because geological consolidation = sparse" |
| **Flagship** | Multi-dimensional | "20px = confidence (compression) × journey (unfamiliarity) × attention (recovery)" |

### Passing Criteria

- **Floor:** No justification required (lookup values)
- **Middle:** 80%+ varying values justified via pattern logic
- **Ceiling:** 90%+ varying values justified via metaphor logic
- **Flagship:** 95%+ varying values encode multi-dimensional overlaps

### Red Flags (Indicates ARBITRARY Values)

- "It looked good" — aesthetics without structural reasoning
- "It was available on the token scale" — token availability ≠ semantic fit
- "OD-004 used this value" — copied values without YOUR semantic reasoning
- "Padding decreases as page progresses" — pattern without RATIO justification

### Before/After Examples

**Example 1: Section Padding (ARBITRARY vs SEMANTIC)**

ARBITRARY:
```css
.section--intro { padding: 48px 24px; }
.section--detail { padding: 40px 24px; }
.section--summary { padding: 32px 24px; }
/* "Padding decreases" — but WHY 48/40/32? No ratio justification. */
```

SEMANTIC:
```css
.section--intro { padding: 64px 24px; }
  /* CRESCENDO intro: reader unfamiliar, needs orientation SPACE. Maximum breathing. */
.section--detail { padding: 32px 24px; }
  /* CRESCENDO build: reader oriented. 50% compression from intro. */
.section--summary { padding: 16px 24px; }
  /* CRESCENDO peak: reader has full context. Minimum padding = densest.
     RATIO: 64→32→16 = 4:2:1 exponential compression matching cognitive familiarity. */
```

**Example 2: Border-Weight (ARBITRARY vs SEMANTIC)**

ARBITRARY:
```css
.level-1 { border-left: 4px solid; padding: 40px; }
.level-2 { border-left: 3px solid; padding: 32px; }
.level-3 { border-left: 2px solid; padding: 24px; }
/* Values decrease — but 40→32→24 has no ratio justification */
```

SEMANTIC:
```css
.stratum--established { border-left: 4px solid; padding: 40px; }
  /* Bedrock: max weight (4px) + sparse (40px). Consolidation = space. */
.stratum--probable { border-left: 3px solid; padding: 32px; }
  /* Sediment: 75% weight. Partially consolidated. */
.stratum--speculative { border-left: 2px solid; padding: 16px; }
  /* Topsoil: 50% weight + 60% compression from bedrock.
     Gap between probable→speculative is LARGER than established→probable
     because epistemic distance grows non-linearly. */
```

### PA-SEMANTIC Integration

The 3-question test connects to Perceptual Audit semantic questions (PA-SEM-01 through PA-SEM-08):
- PA-SEM-01 through PA-SEM-03 verify PATTERN LOGIC (Middle tier)
- PA-SEM-04 through PA-SEM-06 verify METAPHOR LOGIC (Ceiling tier)
- PA-SEM-07 through PA-SEM-08 verify MULTI-DIMENSIONAL encoding (Flagship tier)

When auditing: apply the 3-question test to flagged CSS values. If Q2 answer references aesthetics/availability → FAIL.

---

**For more details:** See ephemeral/session-insights/03-semantic-framework.md (complete 991-line analysis with 5 before/after examples, audit checklists, and perceptual audit integration protocol).
