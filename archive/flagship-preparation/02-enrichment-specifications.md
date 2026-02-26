# Enrichment Specifications for 7 BLOCKING Gaps

**Author:** ENRICHMENT-SPECIFIER
**Date:** 2026-02-16
**Purpose:** Provide exact insertable text for each BLOCKING gap identified in the enrichment audit (03-enrichment-audit.md), traced to ceiling experiment failures (06-failure-analysis.md)
**Method:** For each gap: (1) exact insertable text, (2) insertion point in target file, (3) traceability to failure, (4) binary compliance test

---

## Overview of 7 BLOCKING Gaps

| ID | Gap | Target File | Failure Traced To |
|----|-----|-------------|-------------------|
| B1 | Maximum whitespace prohibition | prohibitions.md | Failure 1: Catastrophic whitespace void (9/9 auditors) |
| A1 | Transition grammar between zones | mechanism-catalog.md | Failure 1: Zone transitions implemented as void |
| A2 | Restraint principle | mechanism-catalog.md | Failure 1 + 3: 14 mechanisms present, 1 perceivable |
| A3 | Content density minimum per zone | semantic-rules.md | Failure 1: Zones with containers but no content |
| B3 | Front-loaded visual weight prohibition | prohibitions.md | Failure 1: Visual interest dies at 30% scroll |
| C3 | Maximum spacing token | tokens.css | Failure 1: Stacked spacing creates multi-viewport voids |
| D3 | Content-form fit guidance | semantic-rules.md | Failure 1 + 5: Architecture exceeds content volume |

**Note:** All 7 gaps trace to Failure 1 (catastrophic whitespace void). This is expected -- the void was caused by the convergence of missing constraints across multiple files. Each gap addresses a different facet of the same root cause.

---

## B1: Maximum Whitespace Prohibition

**THE MOST IMPORTANT ENRICHMENT. If only one gap is addressed, address this one.**

### Target File

`design-system/compositional-core/identity/prohibitions.md`

### Insertion Point

Insert AFTER Prohibition #20 ("NEVER Create New Patterns Without Tension Derivation"), BEFORE the "Summary Statistics" section (currently at line 323). This becomes Prohibition #21 under "CONDITIONAL PROHIBITIONS" since it has a measurement threshold.

### Insertable Text

```markdown
### 21. NEVER Allow a Full Viewport Height of Contentless Space (EXCEPT Single Breathing Zone)

**Why it exists:** A full viewport (100vh at 1440px width) with less than 30% content coverage communicates "page is broken" or "content failed to load." It destroys reading momentum and makes the page feel abandoned. Breathing zones serve intentional rest; voids serve nothing.

**What it protects:** Spatial confidence, reading momentum, page completeness perception

**Evidence:**
- Ceiling experiment (2026-02-16): 70-80% of scroll was empty cream void (9/9 Mode 4 auditors flagged independently)
- Mode 4 PA audit: "24 consecutive frames of nothing" (Auditor D); "cavernous emptiness" (PA-01 universal finding)
- Failure analysis root cause: Metaphor structural obligations created whitespace as feature, not bug. Plan demanded void. No prohibition prevented it.
- Re-audit confirmed fix team's CSS-only patches reduced ~1,652px from ~10,000px void -- insufficient because the problem was CONTENT, not SPACING

**Measurement (binary test):**

Step 1: At 1440px viewport width, scroll through the entire page in viewport-height increments (position 0, 900, 1800, 2700, ...).

Step 2: At each scroll position, estimate content coverage percentage:
- "Content" = text paragraphs, headings, callouts, code blocks, tables, diagrams, images, structured elements with visible content
- "Not content" = background color, margins, padding without child elements, empty containers

Step 3: Count consecutive scroll positions where content coverage is below 30%.

**Pass/Fail:**
- 0 consecutive positions below 30%: PASS
- 1 position below 30%: PASS (acceptable as breathing zone if intentional and labeled)
- 2+ consecutive positions below 30%: FAIL -- void pattern, always a defect

**Exception:** A SINGLE breathing zone (one scroll position, not two consecutive) with intentional transition content (1-3 sentences of text that connects the sections above and below). This exception requires:
1. The breathing zone has visible text content (not just background)
2. The breathing zone is between two content-bearing sections
3. No other breathing zone appears within 2 scroll positions

**Exception documentation:** If using a breathing zone near 30% threshold: "Breathing zone at [scroll position] contains [content description]. Adjacent sections at [positions] contain [content percentages]."
```

### Why This Specific Wording

1. **"100vh at 1440px"** -- Ties measurement to the standard audit viewport, making it reproducible.
2. **"30% content coverage"** -- Threshold from the enrichment audit. Below 30% is perceptually "empty" per Mode 4 findings.
3. **"2+ consecutive positions"** -- Distinguishes single breathing zones (acceptable) from void patterns (never acceptable). The ceiling experiment had 24 consecutive blank frames -- even a threshold of 2 would have caught it.
4. **CONDITIONAL (not ABSOLUTE)** -- Has a documented exception (single breathing zone) unlike Prohibition #1 (border-radius: 0) which is ABSOLUTE. This allows intentional rest points while preventing voids.
5. **Binary measurement steps** -- Agent can execute Steps 1-3 mechanically. No judgment required for pass/fail.

### Compliance Test

An agent verifies compliance by:
1. Serving the page via HTTP at 1440px viewport
2. Capturing screenshots at every viewport-height interval (0, 900, 1800, ...)
3. For each screenshot, classifying content coverage as above/below 30%
4. Counting maximum consecutive below-30% positions
5. If count >= 2: FAIL. If count <= 1: PASS.

Automated alternative: `document.querySelectorAll('*')` → sum element heights with visible text/image content → divide by `document.documentElement.scrollHeight`. If ratio < 0.40, flag for manual review.

### Update to Summary Statistics

After inserting Prohibition #21, update the Summary Statistics section:

```markdown
## Summary Statistics

- **Absolute Prohibitions:** 8 (identity-defining, zero exceptions)
- **Conditional Prohibitions:** 13 (documented exceptions only)
- **Meta-Prohibitions:** 2 (process-level)
- **Total:** 23 prohibitions
```

(Change "12" to "13" for conditional, "22" to "23" for total.)

---

## A1: Transition Grammar Between Zones

### Target File

`design-system/compositional-core/grammar/mechanism-catalog.md`

### Insertion Point

Insert AFTER the "Combination Rules" section (ends around line 940) and BEFORE "Extraction Validation" (starts around line 944). This creates a new peer section within the catalog's usage guidance area.

### Insertable Text

```markdown
## Transition Grammar -- How Mechanisms Hand Off Between Zones

### Why This Section Exists

The catalog above documents 18 individual mechanisms. This section documents how to TRANSITION between them. Without transition grammar, zone boundaries are implemented as VOID (empty space with no signal), which produces the catastrophic whitespace pattern (ceiling experiment: 70-80% void, 9/9 auditors flagged).

**Evidence:** Ceiling experiment had 7 zone transitions (T1-T7). Each was implemented as 48-80px of empty space with no content or structural signal. Total transition whitespace: ~400-560px before any intra-zone spacing. The transitions themselves became the void.

### The 3 Transition Types

Every zone boundary or section transition MUST use exactly one of these three types. "No transition" (just empty space) is NOT a valid option.

#### Type 1: HARD CUT

**When to use:** Content changes DOMAIN (tutorial -> reference, narrative -> API documentation, conceptual -> procedural).

**CSS pattern:**
```css
.section-a + .section-b {
  border-top: 3px solid var(--color-primary);
  /* Zone background change occurs at element boundary */
  /* No additional spacing beyond --space-between (32px) */
}
```

**What the reader perceives:** Clear break. "We are now in a different part of the document." The 3px primary border is the strongest available transition signal under soul constraints.

**Validated example:** CD-006 uses 3px primary border hard cuts between major content modes (39/40 audit score).

#### Type 2: SPACING SHIFT

**When to use:** Content changes INTENSITY within the same domain (overview -> detail, introduction -> deep-dive, sparse -> dense within same topic).

**CSS pattern:**
```css
.zone--moderate {
  padding: var(--space-8); /* 32px */
  /* Intermediate spacing between sparse (--space-16 = 64px) and dense (--space-4 = 16px) */
  /* NO border, NO background change -- spacing alone carries the signal */
}
```

**What the reader perceives:** Gradual compression. "The content is getting more detailed." No visible break element -- the density change IS the transition.

**Validated example:** OD-004 uses spacing compression between established (40px) and speculative (16px) strata.

#### Type 3: CHECKPOINT

**When to use:** Content changes PHASE (prerequisites -> implementation -> verification, or when the page's metaphor explicitly defines zone boundaries with labels).

**CSS pattern:**
```css
.checkpoint {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  background: var(--color-zone-breathing);
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

**What the reader perceives:** Structural landmark. "I've completed one phase and am entering another." The checkpoint element has visible content (a label), visible structure (borders + background), and occupies minimal space.

**Validated example:** Ceiling experiment's CHECK-01 through CHECK-05 system (the one successful spatial element in an otherwise failed page).

### Transition Selection Rule

For every pair of adjacent sections in your page, answer:

**Q: "Is the content on either side of this boundary from the SAME domain?"**
- NO (different domains) -> Type 1: HARD CUT
- YES, but different intensity -> Type 2: SPACING SHIFT
- YES, but different phase -> Type 3: CHECKPOINT

**Binary compliance test:** List all section boundaries. Each boundary must have exactly one transition type assigned. If any boundary has no assigned type (implemented as empty space only), the page FAILS transition grammar compliance.

### Maximum Transition Spacing

No transition may exceed `var(--space-max-zone)` (96px) in total vertical space consumed (see C3 below). If a transition needs more visual separation, add a CHECKPOINT element -- do not add more whitespace.
```

### Why This Specific Wording

1. **"MUST use exactly one of these three types"** -- Binary rule. Agent cannot skip transitions. Directly prevents the ceiling experiment's void-as-transition pattern.
2. **Three concrete CSS blocks** -- Agent has copy-paste-ready code. No ambiguity about what "transition" means in CSS.
3. **Selection question ("same domain?")** -- Reduces transition selection to a single binary question with clear follow-up branches. Agent doesn't need to exercise judgment about which "feels right."
4. **"No transition is NOT valid"** -- Explicitly closes the loophole that produced the ceiling experiment's voids. Empty space between zones must have a structural element.
5. **Ceiling validation reference** -- The checkpoints (CHECK-01 to CHECK-05) were the ONE successful transition element in the ceiling experiment. This validates the CHECKPOINT type.

### Compliance Test

An agent verifies transition grammar compliance by:
1. Listing all section/zone boundaries in the HTML
2. For each boundary, identifying which transition type is implemented (HARD CUT / SPACING SHIFT / CHECKPOINT)
3. If any boundary has no transition type (just empty space with no border, no background change, no checkpoint element): FAIL
4. If all boundaries have exactly one transition type: PASS

---

## A2: Restraint Principle

### Target File

`design-system/compositional-core/grammar/mechanism-catalog.md`

### Insertion Point

Insert AFTER the new "Transition Grammar" section (A1 above) and BEFORE "Extraction Validation." This creates a second new section in the usage guidance area.

### Insertable Text

```markdown
## Restraint Protocol -- When NOT to Deploy a Mechanism

### Why This Section Exists

The catalog above documents 18 mechanisms and a selection flow chart (Usage Guidance). That flow only addresses WHEN to use mechanisms. This section addresses WHEN NOT TO. Without restraint guidance, builders treat mechanism count as a target rather than a natural landing zone, producing front-loaded saturation.

**Evidence:** Ceiling experiment deployed 14 mechanisms in CSS. Only 1 was perceptually visible (Mode 4 audit finding). 13 mechanisms were present in code but not perceivable by readers. The problem was not insufficient mechanisms -- it was insufficient DISTRIBUTION and excessive CONCENTRATION.

### Mechanism Density Cap Per Viewport

**Rule:** No single viewport-height section (one screenful at 1440px) may contain MORE THAN 4 distinct mechanisms operating simultaneously.

**What counts as "operating":** A mechanism is operating in a section if its CSS properties are producing a VISIBLE effect within that viewport. A mechanism defined in CSS but not visible (e.g., border-weight gradient on an element not in view) does not count.

**Why 4:** At 4 simultaneous mechanisms, readers can perceive each one distinctly. At 5+, mechanisms compete for attention and none register clearly. The ceiling experiment concentrated 14 mechanisms in the first 20% of scroll -- average of ~7 mechanisms per viewport in the opening section -- and none were individually perceivable.

**Binary test:** For each viewport-height section of the page, count distinct mechanisms with VISIBLE effects. If any section exceeds 4: redistribute mechanisms to other sections or remove the least essential one from that section.

### Distribution Requirement

**Rule:** Across the full page, mechanisms must be distributed so that EVERY third of the page (0-33%, 33-66%, 66-100% by scroll depth) contains at least 2 distinct mechanisms.

**Why:** The ceiling experiment had 14 mechanisms in the first 20% and ~0 in the remaining 80%. Distribution, not count, drives perception.

**Binary test:** Divide page into thirds by scroll depth. Count distinct mechanisms in each third. If any third has fewer than 2 mechanisms: add mechanism deployment to that third or redistribute from an over-concentrated third.

### The Restraint Ratio

For Ceiling and Flagship tiers, document which mechanisms you CONSIDERED AND REJECTED for each section, and why.

**Target ratios:**
- Middle: Deploy 8-10, no rejection documentation required
- Ceiling: Deploy 12-15, document 3+ rejected mechanisms with reasoning
- Flagship: Deploy 16-18, document 5+ rejected mechanisms with reasoning

**Why:** Documenting rejections forces the builder to EVALUATE each mechanism rather than deploying all available mechanisms by default. A mechanism rejected with reasoning ("border-weight gradient not used in FAQ section because questions have equal importance -- no hierarchy to encode") demonstrates deeper understanding than deploying all 18 mechanisms mechanically.

**Binary test:** Count documented rejections. If below minimum for tier: add rejection documentation. This does NOT require the builder to reject additional mechanisms -- only to document the reasoning for mechanisms NOT deployed.
```

### Why This Specific Wording

1. **"4 per viewport" cap** -- Binary, measurable. Derived from the ceiling experiment where ~7 per viewport produced zero perceptible mechanisms. 4 is conservative enough to prevent saturation while allowing rich deployment.
2. **"Every third has at least 2"** -- Directly addresses the 80/20 front-loading problem. The ceiling experiment had 14 in the first 20% and 0 in the last 80%. This rule makes that pattern impossible.
3. **Rejection documentation** -- Converts restraint from a judgment call ("use fewer mechanisms") to a binary deliverable ("document N rejections"). Binary rules achieve 100% agent compliance per project findings.
4. **"Operating" = visible** -- Prevents gaming where mechanisms are in CSS but not perceivable. The ceiling experiment proved that CSS-present mechanisms that aren't visible don't contribute to richness.

### Compliance Test

An agent verifies restraint compliance by:
1. For each viewport-height section: count distinct visible mechanisms. If any > 4: FAIL.
2. For each third of the page: count distinct mechanisms. If any third < 2: FAIL.
3. For Ceiling/Flagship: count documented rejections. If below tier minimum: FAIL.
4. All three checks pass: PASS.

---

## A3: Content Density Minimum Per Zone

### Target File

`design-system/compositional-core/guidelines/semantic-rules.md`

### Insertion Point

Insert AFTER Gap 5 (Callout Semantic Differentiation, ends around line 273) and BEFORE the "Research Citations" section (around line 253). This becomes "Gap 6: Content Density Floors Per Zone."

### Insertable Text

```markdown
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
```

### Why This Specific Wording

1. **Concrete minimums per zone type** -- Binary thresholds. "3+ paragraphs OR 2+ components" is countable. No judgment about "enough content."
2. **Zone count ceiling by word count** -- Prevents the ceiling experiment's failure where 4 zones were declared for content that could fill 2-3.
3. **"Shrink the zone to fit its content"** -- Directly addresses the root cause. The ceiling experiment created zones sized for architecture, not content. This rule inverts the priority.
4. **"MERGE or ADD"** -- Binary action options when the minimum isn't met. Agent doesn't have to decide what to do -- there are exactly two paths.

### Compliance Test

An agent verifies content density compliance by:
1. For each zone: count content blocks (paragraphs, components, diagrams). If below minimum for zone type: FAIL.
2. Scroll through page at viewport increments. If any position < 30% content: FAIL.
3. Count total words and planned zones. If zones exceed maximum for word count: FAIL.
4. All three pass: PASS.

---

## B3: Front-Loaded Visual Weight Prohibition

### Target File

`design-system/compositional-core/identity/prohibitions.md`

### Insertion Point

Insert AFTER the new Prohibition #21 (B1 above). This becomes Prohibition #22, also under "CONDITIONAL PROHIBITIONS."

### Insertable Text

```markdown
### 22. NEVER Concentrate All Visual Interest in the First Third of the Page

**Why it exists:** Pages where all designed moments (visual peaks -- diagrams, dark-background sections, bento grids, featured callouts) cluster in the first 30% of scroll produce a "beautiful book cover attached to blank pages" perception.

**What it protects:** Reading momentum, scroll engagement, visual arc across the page

**Evidence:**
- Ceiling experiment: Only 1 designed moment at 10% scroll depth (PA-36)
- Mode 4 PA audit: "Visual novelty dies at 30% scroll depth" (PA-47)
- Mode 4 PA audit: "Interest level: PEAK -> CLIFF -> FLATLINE" (PA-35)
- Mode 4 PA audit: "Visual weight concentrated at top, depleted downward" (PA-32)

**Rule:** For pages with 3+ sections, at least ONE designed moment (visual peak using 3+ simultaneous mechanisms at high intensity) must appear in the SECOND HALF of the page (below 50% scroll depth).

**Measurement:**

Step 1: Identify all designed moments on the page. A designed moment is a section that uses 3+ mechanisms at high intensity AND has a unique visual treatment not repeated elsewhere on the page. Examples: architecture diagram on dark background, bento grid with variable spans, drop cap + zone-bedrock + border-weight-max combined, full-width code block with syntax highlighting after text-only sections.

Step 2: Map each designed moment's scroll position as a percentage of total page height.

Step 3: Check: Is at least one designed moment at or below 50% scroll depth?

**Pass/Fail:**
- At least 1 designed moment below 50%: PASS
- All designed moments above 50%: FAIL

**Exception:** Very short pages (< 3 sections or < 2 viewport heights total) where the entire page is visible without substantial scrolling.
```

### Why This Specific Wording

1. **"Second HALF" (50%)** -- Simpler and more conservative than "final third." A designed moment at 51% scroll satisfies this rule while still being in the middle of the page. The ceiling experiment's problem was so extreme (all visual interest at 10%) that even a 50% threshold would catch it.
2. **"3+ simultaneous mechanisms at high intensity"** -- Defines "designed moment" concretely. Prevents gaming where a single border change counts as a designed moment.
3. **"Unique visual treatment not repeated"** -- A repeated element (e.g., the same callout style used 5 times) is not a designed moment. A designed moment must feel distinct.
4. **3-step measurement** -- Binary and sequential. Agent can follow mechanically.

### Compliance Test

An agent verifies visual weight distribution by:
1. Listing all sections with 3+ simultaneous high-intensity mechanisms
2. Mapping their scroll positions as percentages
3. Checking if at least 1 is at or below 50%
4. If yes: PASS. If no: FAIL.

---

## C3: Maximum Spacing Token

### Target File

`design-system/compositional-core/vocabulary/tokens.css`

### Insertion Point

Insert AFTER the existing "Gestalt Semantic Aliases" section (ends at line 113, `--space-chapter: var(--space-16);`) and BEFORE the "Grid System" section (starts at line 114, `/* --- Grid System ---*/`).

### Insertable Text

```css
  /* --- Spacing Maximums (AVAILABLE -- prevent void accumulation) --- */
  --space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
  --space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
  /* RULE: No single margin or padding value should exceed --space-max-zone (96px).
     If a zone transition needs more visual separation than 96px, use a CHECKPOINT
     element (see mechanism-catalog.md Transition Grammar), not more whitespace.
     Stacking two 96px margins creates 192px of void -- use checkpoint elements instead.
     Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone
     by stacking generous spacing values. This rule caps the maximum per-property value. */
```

### Why This Specific Wording

1. **Two levels (section vs zone)** -- Mirrors the existing semantic aliases pattern (`--space-within`, `--space-between`, `--space-chapter`). `--space-max-section` (64px) caps section spacing; `--space-max-zone` (96px) caps zone spacing. This vocabulary integrates naturally with the existing token hierarchy.
2. **"No single margin or padding"** -- Explicitly prevents double-stacking (96px bottom margin + 96px top padding = 192px void). The cap applies to individual CSS properties.
3. **Checkpoint redirect** -- When builders need more separation, they must use a structural element (checkpoint) rather than more whitespace. This converts "I need more space" into "I need a designed transition."
4. **AVAILABLE mutability** -- Matches the existing token classification system. These are not IMMUTABLE (builders could in theory use smaller values) but they are ceiling values.

### Compliance Test

An agent verifies spacing maximum compliance by:
1. Searching the CSS for all `margin` and `padding` property values
2. Converting any `var()` references to pixel values
3. Checking if any single margin or padding value exceeds 96px
4. If any exceed 96px: FAIL. If all are <= 96px: PASS.

Automated: `grep -E "(margin|padding).*[0-9]+(px|rem)" page.css` and check no individual value exceeds 96px / 6rem.

---

## D3: Content-Form Fit Guidance

### Target File

`design-system/compositional-core/guidelines/semantic-rules.md`

### Insertion Point

Insert AFTER the new Gap 6 (A3 above). This becomes "Gap 7: Content-Form Fit -- Minimum Content for Form Decisions."

If A3 is not being inserted in semantic-rules.md, insert AFTER Gap 5 (Callout Semantic Differentiation) as "Gap 6" instead.

### Insertable Text

```markdown
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
```

### Why This Specific Wording

1. **Concrete minimum table** -- For each form decision, a specific content minimum is stated. Agent checks content count against the table. No judgment.
2. **"Downgrade" options** -- When content is insufficient, the agent has a specific simpler form to use instead. "Bento grid -> list" is actionable, not vague.
3. **"Form follows content volume"** -- One-line principle that captures the entire gap. The ceiling experiment violated this -- zones were designed for the metaphor, not the content.
4. **"Simplest form" inverse test** -- Prevents the subtler problem of over-engineering simple content. Even if a section meets the minimum for a bento grid, if a list would work equally well, use the list.
5. **1-paragraph example** -- Makes the principle concrete with the most common failure case.

### Compliance Test

An agent verifies content-form fit by:
1. For each section with a form treatment (zone, bento, progressive disclosure, etc.):
   a. Count content blocks (paragraphs, components)
   b. Check against the minimum table
   c. If below minimum: FAIL
2. For each section: ask "is this the simplest form that serves this content?"
   a. If a simpler form would work: FLAG for review (not automatic fail, but documented concern)
3. All sections meet minimums: PASS.

---

## Cross-Gap Dependencies

The 7 gaps are deeply interconnected. Here is how they reinforce each other:

```
B1 (no void)
 |
 +-- A3 (content density floors) -- prevents zones from being empty
 |
 +-- C3 (spacing maximum) -- prevents spacing from creating void
 |
 +-- D3 (content-form fit) -- prevents forms from exceeding content
 |
 +-- B3 (no front-loading) -- prevents second half from being void
 |
 +-- A1 (transition grammar) -- prevents transitions from being void
      |
      +-- A2 (restraint) -- prevents mechanisms from concentrating

```

**B1 is the ROOT prohibition.** A3, C3, D3, B3, and A1 are PREVENTION rules that make B1 violations harder to produce. A2 distributes mechanisms so that visual interest fills the space that B1 protects from being empty.

**Implementation order recommendation:** B1 first (establishes the prohibition), then C3 (token-level prevention), then A3 + D3 (content-level prevention), then A1 (structural prevention), then A2 (distribution), then B3 (arc-level prevention).

---

## Insertion Summary

| Gap | File | Insert After | Lines Added |
|-----|------|-------------|-------------|
| B1 | prohibitions.md | Prohibition #20 | ~40 |
| A1 | mechanism-catalog.md | Combination Rules | ~80 |
| A2 | mechanism-catalog.md | A1 (Transition Grammar) | ~50 |
| A3 | semantic-rules.md | Gap 5 | ~60 |
| B3 | prohibitions.md | B1 (Prohibition #21) | ~35 |
| C3 | tokens.css | Gestalt Semantic Aliases | ~8 |
| D3 | semantic-rules.md | A3 (Gap 6) | ~55 |
| **Total** | **4 files** | | **~328 lines** |

**Files modified:** 4
- prohibitions.md (+75 lines: B1 + B3)
- mechanism-catalog.md (+130 lines: A1 + A2)
- tokens.css (+8 lines: C3)
- semantic-rules.md (+115 lines: A3 + D3)

---

**END ENRICHMENT SPECIFICATIONS**
**7 BLOCKING gaps specified with insertable text, insertion points, failure traceability, and binary compliance tests.**
