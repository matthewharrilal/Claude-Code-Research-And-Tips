# Typography and Border System Provenance Analysis

**Task:** Trace the 7-size typography scale and 3-tier border hierarchy backward through the full pipeline chain.

**Files examined:**
1. `output.html` -- the Gas Town page (1,508 lines)
2. `_tc-brief.md` -- TC brief (99 lines)
3. `conventions-brief.md` -- conventions brief (609 lines)
4. `tokens.css` -- design tokens (183 lines)
5. `mechanism-catalog.md` -- mechanism catalog (1,218 lines)
6. `MASTER-EXECUTION-PROMPT.md` -- master execution prompt (578 lines)
7. `RESEARCH-SYNTHESIS.md` -- research synthesis (384 lines)

---

## CORRECTION: Task Description vs Actual Output

The task description states the output has:
- "A 7-size typography scale (clamp functions from 0.85rem to 3rem)"
- "3-tier border hierarchy: primary (#5c4b3a, 2-3px), secondary (#8b7355, 1px), accent (#c49052)"
- "Typography weights: 300, 400, 500, 600, 700 used strategically"

**None of these are in the actual output.** The output contains:
- A 7-size typography scale using **static rem/px values** (no clamp functions)
- A 3-tier border hierarchy using **system border tokens** with colors from the KortAI palette (not #5c4b3a/#8b7355/#c49052)
- Typography weights: **400, 500, 600, 700** (no 300)

The task description appears to contain either hypothetical values or values from a different page. This analysis traces the **actual** systems present in the output.

---

## PART 1: THE 7-SIZE TYPOGRAPHY SCALE

### What the Output Contains

The output declares 7 type scale custom properties at `:root` (lines 48-55):

```css
--type-display: 3rem;       /* 48px */
--type-page: 2.5rem;        /* 40px */
--type-section: 2rem;       /* 32px */
--type-subsection: 1.5rem;  /* 24px */
--type-body: 1rem;          /* 16px */
--type-code: 0.875rem;      /* 14px */
--type-meta: 0.75rem;       /* 12px */
```

Plus additional literal font-sizes used inline:
- `3.5em` (drop cap ::first-letter)
- `1.125rem` (18px, dispatch opening, role card name, blockquote in callout)
- `1.375rem` (22px, mental model blockquote)
- `1.5rem` (24px, core-quote blockquote -- matches --type-subsection)
- `13px` (file-tree content)
- `14px` (skip-link)
- `12px` (768px responsive pre block)

The effective typographic vocabulary is wider than 7 stops: approximately 10-11 distinct sizes appear in the rendered output.

### Tracing Backward: Where Did Each Value Originate?

#### Level 1: tokens.css (the design system vocabulary)

`tokens.css` (lines 72-89) defines TWO overlapping type scales:

**Scale A (text-* naming):**
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-h4: 1.25rem;    /* 20px */
--text-h3: 1.5rem;     /* 24px */
--text-h2: 2rem;       /* 32px */
--text-h1: 2.5rem;     /* 40px */
--text-display: 3rem;  /* 48px */
```
(9 values)

**Scale B (type-* naming, labeled "CD-006 convention"):**
```css
--type-page: 3rem;         /* Note: DIFFERENT from output! tokens.css says 3rem */
--type-section: 1.625rem;  /* Note: DIFFERENT from output! tokens.css says 1.625rem */
--type-subsection: 1.375rem; /* Note: DIFFERENT from output! */
--type-body: 1rem;
--type-code: 0.875rem;
--type-meta: 0.75rem;
```
(6 values)

**CRITICAL FINDING:** The output's type-* values DO NOT MATCH tokens.css type-* values:

| Token | tokens.css | output.html | Delta |
|-------|-----------|-------------|-------|
| --type-page | 3rem | 2.5rem | **DIFFERENT** |
| --type-section | 1.625rem | 2rem | **DIFFERENT** |
| --type-subsection | 1.375rem | 1.5rem | **DIFFERENT** |
| --type-display | (absent) | 3rem | **ADDED** |
| --type-body | 1rem | 1rem | Match |
| --type-code | 0.875rem | 1rem | Match |
| --type-meta | 0.75rem | 0.75rem | Match |

The output REDEFINES the type-* tokens using values from the text-* scale (Scale A) instead of the CD-006 convention (Scale B). The output's --type-display (3rem) = tokens.css --text-display; the output's --type-page (2.5rem) = tokens.css --text-h1; the output's --type-section (2rem) = tokens.css --text-h2; the output's --type-subsection (1.5rem) = tokens.css --text-h3.

**Verdict: The builder created a HYBRID** -- it used the type-* naming convention but populated it with text-* scale values, plus added --type-display which does not exist in either tokens.css scale. This is a LEGITIMATE override per conventions-brief Section 9: "You may override any non-soul value in tokens.css if you log the override."

#### Level 2: conventions-brief.md

The conventions brief (Section 1, line 28) specifies spacing but does NOT prescribe specific font-size values. It says:

> **Spacing follows a 4px base unit: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. No single margin or padding value exceeds 96px.**

For typography, it prescribes:
- The font trinity (Instrument Serif / Inter / JetBrains Mono) -- Section 1
- "Five or more distinct font-sizes" -- Section 3 (Richness)
- "Typographic Progression Per Semantic Direction" with weight/letter-spacing ranges -- Section 4
- Character-scale closed vocabulary with font-size "14px minimum | 16px body | 18px large body | 20-48px headings" -- Section 5

The "20-48px headings" range is a PRINCIPLE, not exact values. The builder's choice of 3rem (48px), 2.5rem (40px), 2rem (32px), 1.5rem (24px) all fall within this range. The conventions brief says "see type scale in tokens.css" but the builder overrode those values.

**Specificity level: RANGE + PRINCIPLE, not exact values.**

#### Level 3: TC Brief

The TC brief (line 9) specifies:
> `hierarchy -> border-weight (4px critical, 3px operational, 1px separators) | clearance zones -> bg shifts >=20 RGB | dispatch compression -> spacing 64px->32px | rank -> typography scale (serif->sans->mono) | threat classification -> accent colors`

The phrase "typography scale (serif->sans->mono)" prescribes the FONT FAMILY progression, not the size scale. The TC brief does NOT specify font-size values.

Build recipe (lines 70-79) specifies per-zone typography:
- Z1: "h1 display 3rem, body 1rem/1.7"
- Z2: "h2 2rem, h3 1.5rem italic"
- Z3: "letter-spacing 0.03em, weight 600"
- Z4: "letter-spacing 0em, weight 400"

**CRITICAL FINDING:** The TC brief DOES prescribe specific values: `3rem`, `2rem`, `1.5rem`, `1rem`. These are the exact values that appear in the output's type scale. The TC brief is the DIRECT source of the output's heading sizes.

#### Level 4: mechanism-catalog.md

Mechanism #11 (Typographic Scale Jumping, lines 494-521) defines the concept:
```
--type-page: 2.5rem;
--type-section: 1.625rem;
--type-subsection: 1.375rem;
--type-body: 1rem;
--type-code: 0.875rem;
--type-meta: 0.75rem;
```

And specifies "~1.5x ratio between levels IS the mechanism."

The output's scale: 3.0 / 2.5 / 2.0 / 1.5 / 1.0 / 0.875 / 0.75

Ratios: 3.0/2.5 = 1.2x, 2.5/2.0 = 1.25x, 2.0/1.5 = 1.33x, 1.5/1.0 = 1.5x, 1.0/0.875 = 1.14x, 0.875/0.75 = 1.17x.

The output's scale has a DIFFERENT ratio profile from the mechanism catalog's ~1.5x. The builder added an extra step at the top (--type-display: 3rem) and used rounder values (2.0, 1.5) instead of the catalog's more granular values (1.625, 1.375).

#### Level 5: MASTER-EXECUTION-PROMPT.md

The master prompt (Section 2, lines 105-168) describes the conventions brief structure but does not prescribe specific font sizes. It says "Agent #1 reads tokens.css" and "verify thresholds" but the typography instructions are about the font trinity and perception thresholds (>=2px delta), not specific scale values.

#### Level 6: RESEARCH-SYNTHESIS.md

Principle 5 (lines 208-216) says:
> "Typography creates hierarchy without decoration. Sharp edges = confidence."

And provides a type hierarchy: "1. Size (largest = most important), 2. Weight (bold = emphasis), 3. Color (red accent = attention), 4. Space (more space = more important)."

This is a PRINCIPLE, not values. No specific font sizes appear.

### Typography Scale Provenance Summary

| Value | Origin | Specificity | Prescribed or Emergent? |
|-------|--------|-------------|------------------------|
| --type-display: 3rem | TC brief line 70 ("h1 display 3rem") | EXACT VALUE | **PRESCRIBED** by TC brief |
| --type-page: 2.5rem | tokens.css --text-h1 (builder override) | DERIVED from tokens.css Scale A | **SEMI-EMERGENT** -- builder chose text-h1 value, not type-page value |
| --type-section: 2rem | TC brief line 73 ("h2 2rem") | EXACT VALUE | **PRESCRIBED** by TC brief |
| --type-subsection: 1.5rem | TC brief line 73 ("h3 1.5rem") | EXACT VALUE | **PRESCRIBED** by TC brief |
| --type-body: 1rem | tokens.css, TC brief, conventions brief | EXACT VALUE (universal) | **PRESCRIBED** (consistent across all levels) |
| --type-code: 0.875rem | tokens.css (both scales) | EXACT VALUE | **PRESCRIBED** by tokens.css |
| --type-meta: 0.75rem | tokens.css (both scales) | EXACT VALUE | **PRESCRIBED** by tokens.css |

**Key finding: The 7-size scale is NOT "entirely Opus-native."** 4 of 7 values are directly prescribed by the TC brief. 2 more come from tokens.css. Only --type-page (2.5rem) represents a builder judgment call where it chose the text-* value over the type-* value. The builder's primary creative act was the NAMING and ORGANIZATION into a unified 7-stop scale, not the individual values.

---

## PART 2: THE 3-TIER BORDER HIERARCHY

### What the Output Contains

The output declares 3 border weight tokens (lines 72-74):

```css
--border-heavy: 4px;
--border-medium: 3px;
--border-light: 1px;
```

And uses them strategically across the page:

**4px (--border-heavy) deployments:**
- `.core-quote` border-left (line 308) -- Mechanism #3, SINGULAR emphasis
- `.file-tree` border-left (line 459) -- accent-blue
- `.role-card--mayor` border-width (line 500) -- highest rank
- `.role-card--overseer` border-width (line 506) -- human boss
- `.callout` border-left (line 598) -- all callouts
- `.extension-card` border-left (line 740) -- community extensions
- `.actionability` border-left (line 877) -- actionability callout

**3px (--border-medium) deployments:**
- `header` border-bottom (line 192) -- Mechanism #13, dark header
- `.zone-2` border-top (line 374) -- HARD CUT transition
- `.data-table th` border-bottom (line 421) -- structural table header
- `.role-card` border (line 491) -- all role cards
- `.checkpoint-bar` border-top (line 686) -- Z3->Z4 checkpoint
- `pre` border (line 806) -- code blocks
- `.mental-model` border (line 843) -- mental model callout
- `footer` border-top (line 925) -- Mechanism #14, footer mirror

**1px (--border-light) deployments:**
- `.header-stats` border-top (line 234) -- internal stats separator
- `.zone-1 .section-indicator` border-bottom (line 279) -- zone label
- `.source-meta` border-top (line 350) -- internal separator
- `.zone-2 .section-indicator` border-bottom (line 386) -- zone label
- `.data-table td` border-bottom (line 427) -- data rows
- `.architecture-section` border-top (line 453) -- subsection
- `.zone-3 .section-indicator` border-bottom (line 564) -- zone label
- `.callout__body blockquote` border-left (line 627) -- nested quote
- `.zone-3 code` border (line 666) -- inline code
- `.intel-divider` border-top (line 671) -- subsection separator
- `.checkpoint-bar` border-bottom (line 687) -- checkpoint bottom
- `.zone-4 .section-indicator` border-bottom (line 718) -- zone label
- `.upgrades-list li` border-bottom (line 784) -- list separator
- `.footer-tags` border-top (line 988) -- footer internal separator
- `.footer-tag` border (line 996) -- tag outlines

### Border Color Hierarchy

The output uses FOUR distinct border color contexts:

| Color | Usage | Semantic |
|-------|-------|----------|
| `var(--color-primary)` (#E83025) | Header bottom, Z1->Z2 hard cut, core-quote left, footer top, actionability left, upgrade numbers | **Authority / emphasis / editorial confidence** |
| `var(--color-text)` (#1A1A1A) | Mayor card border, solid offset background | **Maximum structural weight** |
| `var(--color-border)` (#E0D5C5) | Table headers, section dividers, code block border, checkpoint-bar top, mental model border | **Standard structural** |
| `var(--color-border-subtle)` (#F0EBE3) | Zone section indicators, upgrades list items, Z4 section indicator | **Minimum structural / data separators** |
| `var(--accent-blue)` (#4A90D9) | File tree, extension cards | **Info/community accent** |
| `var(--accent-color)` (variable) | Callouts (coral, amber, purple, blue, green) | **Semantic classification** |
| `var(--color-text-secondary)` (#666666) | Header stats, footer tags, footer tag border | **Chrome / metadata** |

### Tracing Backward: Where Did the 3-Tier System Originate?

#### Level 1: tokens.css

`tokens.css` (lines 131-135) defines border weights:
```css
--border-structural: 4px;   /* Left accent borders (callouts) */
--border-accent: 3px;       /* Secondary accent weight */
--border-micro: 1px;        /* Subtle dividers, frames */
--border-left-width: 4px;   /* Callout standard (alias) */
```

The OUTPUT uses DIFFERENT NAMES:
- `--border-heavy: 4px` (vs tokens.css `--border-structural: 4px`)
- `--border-medium: 3px` (vs tokens.css `--border-accent: 3px`)
- `--border-light: 1px` (vs tokens.css `--border-micro: 1px`)

**The VALUES are identical (4/3/1px). The NAMES are different.** The builder renamed the tokens. This is a significant finding: the builder did not copy tokens.css verbatim -- it created its own naming scheme that maps more intuitively to the heavy/medium/light hierarchy.

#### Level 2: conventions-brief.md

The conventions brief (Section 8, lines 333) prescribes:

> **3-Tier Border Budget.** Three border weights only: 4px for accent and emphasis (callout left-borders, highest-confidence elements), 3px for structural enclosure (component borders, header/footer accents, section landmarks), 1px for data separators (table cells, internal component dividers). The 2px weight does not exist in this world.

This is the **DIRECT SOURCE** of the 3-tier concept. The conventions brief defines:
- What each tier means semantically
- What contexts each tier serves
- That 2px is EXPLICITLY excluded

It also appears in Section 3 (Richness, line 110):
> "The 3-tier border system (4px / 3px / 1px)."

And in Section 12 (Restraint List, line 438):
> "borders at 2px weight (only 1px, 3px, and 4px exist in this world)"

The conventions brief provides the 3-tier system as a WORLD-DESCRIPTION: "these are the only border weights that exist."

#### Level 3: TC Brief

The TC brief (line 9) prescribes:
> `hierarchy -> border-weight (4px critical, 3px operational, 1px separators)`

This maps directly to the output:
- 4px "critical" = output's emphasis elements (core-quote, callouts, mayor card)
- 3px "operational" = output's structural elements (header, zone borders, tables, code blocks)
- 1px "separators" = output's data-level dividers (table rows, section indicators)

The TC brief also maps borders to the metaphor:
> `Zone 2: #1 borders at 3px`
> `Zone 3: #4 spacing at 32px throughout`

And in Section 4 (Selected Mechanisms, lines 40-56):

| Mechanism | Role |
|-----------|------|
| #1 Border-Weight Gradient | Authority level: 4px critical, 3px operational, 1px separators |

**The TC brief EXPLICITLY prescribes the 3-tier hierarchy with exact values and semantic mapping.**

#### Level 4: mechanism-catalog.md

Mechanism #1 (Border-Weight Gradient Encoding, lines 131-177) defines:
```css
.element--highest-priority { border-left: 4px solid var(--color-text); }
.element--high-priority    { border-left: 3px solid var(--color-text); }
.element--medium-priority  { border-left: 2px solid var(--color-text); }
.element--low-priority     { border-left: 1px solid var(--color-border); }
```

**Note:** The mechanism catalog includes a 4-tier system (4/3/2/1px) while the conventions brief and output use a 3-tier system (4/3/1px, no 2px). The conventions brief EXPLICITLY removes 2px from the vocabulary. The mechanism catalog is OLDER than the conventions brief and retains the full range as a reference. The conventions brief overrides by restricting to 3 tiers.

Mechanism #10 (Border-Left Semantic Signal, lines 469-490) reinforces: "4px left border IS the universal callout signal."

Mechanism #13 (Dark Header, lines 565-593): "border-bottom: 3px solid var(--color-primary)"

Mechanism #14 (Footer Mirror, lines 597-623): "border-top: 3px solid var(--color-primary)"

Mechanism #18 (Data Table, lines 733-764): "3px solid var(--color-border)" for th, "1px solid var(--color-border)" for td.

#### Level 5: MASTER-EXECUTION-PROMPT.md

The master prompt references border thresholds:
- SC-15: ">= 3 distinct border configurations across the page"
- The conventions brief specification (Section 2, line 124): "Standardize thresholds"

But does not itself specify the 4/3/1px values -- it delegates to the conventions brief.

#### Level 6: RESEARCH-SYNTHESIS.md

No specific border-weight values appear. The research synthesis discusses "typography creates hierarchy" (Principle 5) but does not prescribe border weights.

### Border System Provenance Summary

| Element | Origin | Specificity | Prescribed or Emergent? |
|---------|--------|-------------|------------------------|
| 3-tier concept (4/3/1) | conventions-brief Section 8 | EXACT VALUES + SEMANTIC MAPPING | **PRESCRIBED** |
| "2px does not exist" | conventions-brief Section 12 | ABSOLUTE PROHIBITION | **PRESCRIBED** |
| 4px = critical/emphasis | TC brief line 9 + conventions-brief | EXACT VALUE + SEMANTIC | **PRESCRIBED** (reinforced at 2 levels) |
| 3px = operational/structural | TC brief line 9 + conventions-brief | EXACT VALUE + SEMANTIC | **PRESCRIBED** (reinforced at 2 levels) |
| 1px = separators/data | TC brief line 9 + conventions-brief | EXACT VALUE + SEMANTIC | **PRESCRIBED** (reinforced at 2 levels) |
| Token names (heavy/medium/light) | Builder (not in any upstream source) | NAMING ONLY | **EMERGENT** -- builder renamed tokens |
| Border COLOR assignments | Mix of TC brief metaphor + palette | PRINCIPLE (from palette) | **SEMI-EMERGENT** -- palette is prescribed, color-to-context mapping is builder judgment |
| Header 3px primary border | mechanism-catalog #13, TC brief | EXACT CSS PATTERN | **PRESCRIBED** |
| Footer 3px primary border | mechanism-catalog #14, TC brief | EXACT CSS PATTERN | **PRESCRIBED** |
| Callout 4px left-border | mechanism-catalog #10, conventions-brief | EXACT CSS PATTERN | **PRESCRIBED** |

---

## PART 3: FONT WEIGHT SYSTEM

### What the Output Contains

Four font-weights used across zones:

| Weight | Where | Semantic |
|--------|-------|----------|
| 400 | Z1 body, Z4 body, base body | Regular / baseline |
| 500 | Z1 header-meta, Z2 body, Z4 section-indicator | Medium / moderate emphasis |
| 600 | Strong, section indicators, table headers, callout labels, Z3 body | Semibold / structural labels |
| 700 | Role card names, stage-current, upgrade numbers, mayor card rank | Bold / maximum emphasis |

### Per-Zone Weight Progression

| Zone | Body Weight | Label Weight | Heading Weight |
|------|-----------|-------------|----------------|
| Header | -- | 500 (meta) | -- (display font) |
| Z1 | 400 (default) | 500 (section-indicator) | display (font itself) |
| Z2 | 500 | 600 (section-indicator, table headers) | display/italic |
| Z3 | **600** (explicitly set) | 600 | display/italic |
| Z4 | 400 | 500 (section-indicator) | display/italic |
| Footer | -- | 600 (link group labels) | display/italic |

### Tracing Weight Progression Backward

#### conventions-brief.md (Section 4, lines 186-203)

Prescribes typographic progression per semantic direction:

**DEEPENING:**
```css
font-weight: 400 -> 500 -> 600;  /* heavier = more serious */
```

**OPENING:**
```css
font-weight: 600 -> 500 -> 400;  /* lighter = more relaxed */
```

The output follows this EXACTLY:
- Z1 (OPENING): 400
- Z2 (DEEPENING): 500
- Z3 (DEEPENING, densest): 600
- Z4 (RESOLVING): 400

The conventions brief also prescribes in Section 5 (Fractal Echo, line 236):
> "Dense zone: letter-spacing: 0.03em; font-weight: 600. Sparse zone: letter-spacing: 0.05em; font-weight: 400"

#### TC Brief (Section 6, lines 70-79)

Build recipe specifies:
- Z3: "letter-spacing 0.03em, weight 600"
- Z4: "letter-spacing 0em, weight 400"

And character-level directions (line 66):
> "Character: letter-spacing 0em(Z1)->0.03em(Z3)->0em(Z4). Font-weight 400(Z1)->600(Z2-3)->400(Z4)."

**This is the DIRECT source.** The TC brief prescribes the exact weight arc: 400 -> 600 -> 400.

#### tokens.css

Does NOT specify font-weight values as tokens. The weights are not tokenized in this system.

#### conventions-brief Section 5 (Character-Scale Register)

Prescribes a CLOSED vocabulary:
```
font-weight: 400 (regular) | 500 (medium) | 600 (semibold) | 700 (bold)
```

The output uses all four values, staying within the closed vocabulary.

**Note on weight 300:** The task description mentions weight 300, but the output does NOT use it. The conventions brief's closed vocabulary also excludes 300. If 300 appeared, it would be a vocabulary violation.

### Font Weight Provenance Summary

| Decision | Origin | Specificity |
|----------|--------|-------------|
| 4-weight vocabulary (400/500/600/700) | conventions-brief Section 5 | CLOSED VOCABULARY (exact values) |
| Z1=400, Z2-3=600, Z4=400 arc | TC brief line 66 | EXACT VALUES per zone |
| Weight 600 in Z3 (not 500) | TC brief + FIX CYCLE 1 (SC-13) | Builder CHANGED from 500 to 600 post-build |
| Weight 500 for Z2 body | Builder judgment | EMERGENT -- TC brief says "400(Z1)->600(Z2-3)" but builder chose 500 for Z2 body, 600 for Z3 body |
| Weight 700 for emphasis | Builder judgment within vocabulary | EMERGENT within PRESCRIBED vocabulary |

---

## PART 4: LETTER-SPACING SYSTEM

### What the Output Contains

| Value | Where | Semantic |
|-------|-------|----------|
| 0.1em | All section indicators, table headers, callout labels, card ranks, file-tree labels, code labels, footer labels, tags | **LABEL REGISTER** (mono + uppercase + 0.1em = the 2-zone DNA label pattern) |
| 0.05em | Core-quote cite, source-meta items, footer-meta | **CITATION REGISTER** (quieter than label) |
| 0.03em | Zone 3 body (line 552) | **DENSITY REGISTER** (tighter = denser content) |
| 0 / normal | Zone 4 body (line 706), callout body (line 617), Z3 headings reset (line 575, 583) | **BODY REGISTER** (default / reset) |

### Tracing Backward

#### conventions-brief.md (Section 5, Character-Scale Register)

Prescribes:
```
letter-spacing: 0 | 0.025em (minimum perceptible) | 0.03em | 0.05em | 0.08em | 0.1em (labels) | 0.12em (maximum)
```

**All output values fall within this vocabulary.** The output uses 0, 0.03em, 0.05em, and 0.1em -- all are listed values. 0.025em, 0.08em, and 0.12em are available but unused.

#### TC Brief (line 66)

Prescribes:
> "letter-spacing 0em(Z1)->0.03em(Z3)->0em(Z4)"

The output follows this arc exactly: Z1 body = normal (0), Z3 body = 0.03em, Z4 body = 0.

#### conventions-brief.md (Section 8, Component 2-Zone DNA)

Prescribes:
> "The label zone: font-weight 600 (or monospace), font-size 0.75rem, uppercase, letter-spacing 0.1em, muted color"

The output's label pattern matches precisely: every section indicator, table header, callout label, and card rank uses the exact pattern (mono + 0.75rem + uppercase + 0.1em + secondary color).

#### FIX CYCLE 1 (SC-14)

The output contains a fix-cycle comment (lines 567-571):
> "FIX CYCLE 1: SC-14 -- reset letter-spacing on Z3 headings. The zone's 0.03em computes to 0.48px at 16px base, which is sub-perceptual at heading sizes (0.015em at 32px, 0.02em at 24px). Display headings use normal letter-spacing; the 0.03em tracking is for body text density only."

This shows the builder initially applied 0.03em to ALL Z3 text (including headings), then the gate runner (SC-14, sub-perceptual CSS detection) caught that 0.03em on large headings would be below the perceptual threshold. The builder reset headings to `letter-spacing: normal` while keeping body at 0.03em.

**This is a case where the GATE RUNNER influenced the typography system post-build.**

---

## PART 5: CROSS-CUTTING ANALYSIS

### The Pipeline's Typography/Border Chain

```
RESEARCH-SYNTHESIS.md
  "Typography creates hierarchy" (PRINCIPLE only, no values)
       |
       v
mechanism-catalog.md
  Mechanism #1: 4/3/2/1px border gradient (TECHNIQUE)
  Mechanism #11: ~1.5x type scale ratio (TECHNIQUE)
  Mechanism #13: Dark header + 3px border (PATTERN)
       |
       v
tokens.css
  Border: --border-structural: 4px, --border-accent: 3px, --border-micro: 1px (VALUES)
  Type Scale A: 9 values from 0.75rem to 3rem (VALUES)
  Type Scale B: 6 values, CD-006 convention (VALUES)
       |
       v
conventions-brief.md
  3-tier border budget: 4px/3px/1px (WORLD RULE -- 2px excluded)
  Character-scale register: closed vocabulary (WORLD RULE)
  Typographic progression per direction (RECIPE -- 400->500->600)
  Perception thresholds (PHYSICS -- minimum deltas)
       |
       v
MASTER-EXECUTION-PROMPT.md
  Instructs builder to read conventions-brief FIRST (PRIMACY ordering)
  References SC-14 (letter-spacing), SC-15 (border configs) (GATE REFERENCES)
       |
       v
TC Brief (_tc-brief.md)
  Per-zone type sizes: 3rem, 2rem, 1.5rem, 1rem (EXACT VALUES)
  Per-zone weights: 400->600->400 (EXACT ARC)
  Per-zone letter-spacing: 0->0.03em->0 (EXACT ARC)
  Border hierarchy: 4px critical, 3px operational, 1px separators (EXACT MAPPING)
       |
       v
output.html (Opus builder)
  7-size type scale (IMPLEMENTED -- hybrid of TC brief + tokens.css)
  3-tier border system (IMPLEMENTED -- renamed tokens, faithful to prescribed hierarchy)
  4-weight system (IMPLEMENTED -- within closed vocabulary)
  4-value letter-spacing (IMPLEMENTED -- within closed vocabulary)
  FIX CYCLES applied (SC-13: weight 500->600, SC-14: heading letter-spacing reset)
```

### What Was PRESCRIBED vs EMERGENT

| System | % Prescribed | % Emergent | Key Emergent Decisions |
|--------|-------------|------------|----------------------|
| 7-size type scale | ~80% | ~20% | Builder's hybrid naming; --type-page value chosen from text-* over type-* |
| 3-tier border weights | ~95% | ~5% | Token renaming (heavy/medium/light) |
| Border color assignments | ~60% | ~40% | Which contexts get primary vs border vs accent colors |
| Font weight arc | ~90% | ~10% | Weight 500 as intermediate step (TC brief says 400 or 600, builder added 500 between) |
| Letter-spacing arc | ~85% | ~15% | 0.05em citation register (TC brief only specifies 0 and 0.03em) |
| Label register (0.1em) | ~100% | ~0% | Entirely prescribed by conventions-brief 2-zone DNA |

### Critical Question Answered: Was the 7-Size Scale "Entirely Opus-Native"?

**NO.** The 7-size type scale is approximately 80% prescribed:
- 4 of 7 values come directly from the TC brief (3rem, 2rem, 1.5rem, 1rem)
- 2 of 7 values come from tokens.css (0.875rem, 0.75rem)
- 1 value (2.5rem) is a builder choice from the tokens.css text-* scale

The builder's contribution was ORGANIZATION (unifying into a named 7-stop scale with type-* custom properties) and HYBRIDIZATION (choosing text-* values over type-* values from tokens.css). The individual values are almost entirely traced to upstream sources.

### Critical Question Answered: Was the 3-Tier Border Hierarchy "Entirely Opus-Native"?

**NO.** The 3-tier border hierarchy is approximately 95% prescribed:
- The 4px/3px/1px values are in tokens.css
- The 3-tier concept and 2px exclusion are explicit in the conventions brief
- The semantic mapping (critical/operational/separator) is in both TC brief and conventions brief
- Even the specific header/footer 3px primary border pattern is prescribed by mechanisms #13 and #14

The builder's contribution was TOKEN RENAMING (heavy/medium/light naming) and COLOR-CONTEXT ASSIGNMENT (deciding which border-color for which element type within the prescribed palette).

### The Sophistication Is in the COMPOSITION, Not the Values

The output LOOKS sophisticated because of how the systems interact:
- Border weights ENCODE hierarchy (4px mayor > 3px role card > 1px separator)
- Font weights TRACK zone density (400 opening -> 600 dense -> 400 resolving)
- Letter-spacing COMPRESSES with content (0 open -> 0.03em dense -> 0 resolved)
- Border colors SIGNAL semantics (red = authority, blue = info, border = structural)

But each individual decision is largely prescribed. The sophistication emerges from the COHERENT APPLICATION of multiple prescribed systems simultaneously -- which is exactly what multi-coherence theory predicts. The builder is executing a recipe that coordinates multiple channels at each boundary. The channels are prescribed; their coordination is the composition.

---

## PART 6: WHAT THE PIPELINE DID NOT CONTROL

Despite the high prescription rate, several typography/border decisions were left to the builder:

1. **The 1.125rem (18px) intermediate size** -- used for dispatch opening, role card names, blockquote in callouts. No upstream source prescribes this exact value, though it exists in tokens.css as --text-lg.

2. **The 1.375rem (22px) mental model blockquote** -- this size does not appear in the TC brief or conventions brief. It does appear in tokens.css as --type-subsection (CD-006 convention) but the builder's --type-subsection is already 1.5rem. This is a purely emergent choice.

3. **The 13px file-tree content** -- below the conventions brief minimum of 14px. Technically a vocabulary violation, though 13px for monospace code display is a reasonable judgment call.

4. **Zone-specific section-indicator weight variation** -- Z1 and Z4 indicators use weight 500, Z2 and Z3 indicators use weight 600. This echoes the density arc but is not explicitly prescribed in the TC brief.

5. **The accent-blue for file-tree and extension cards** -- the TC brief mentions "blue" for community extensions but does not specify which blue or that file-trees should also use it.

6. **Callout color mapping to metaphor** -- coral = threat, amber = caution, purple = doctrine, blue = intel, green = advantage. The conventions brief prescribes accent colors for callout types (info, tip, gotcha, challenge, essence) but the TC brief REMAPS them to metaphor vocabulary (threat, caution, doctrine). This remapping is emergent at the TC level and prescribed at the builder level.

---

## SUMMARY

The Gas Town output's typography and border systems are **heavily prescribed, minimally emergent**. The pipeline successfully propagated specific values (4/3/1px borders, 3rem/2rem/1.5rem/1rem type scale) through 4-5 levels of indirection from tokens and conventions through TC brief to final output. The builder's creative contribution was primarily in:

1. NAMING (type-* token nomenclature, border heavy/medium/light naming)
2. HYBRIDIZATION (merging two tokens.css scales into one coherent system)
3. INTERMEDIATE VALUES (1.125rem, 1.375rem for specific components)
4. ZONE-ADAPTIVE APPLICATION (section-indicator weights tracking zone density)
5. COLOR-CONTEXT MAPPING (which border-color serves which semantic role)

The pipeline's strength is that it prescribes VALUES and ARCS at the TC brief level while leaving NAMING and APPLICATION to the builder. This produces output that looks individually authored but is actually highly constrained. The conventions brief's "world description" framing is key -- the builder operates within physics (3 border weights exist, period) rather than following rules (use 3px for headers).

---

**END ANALYSIS**
