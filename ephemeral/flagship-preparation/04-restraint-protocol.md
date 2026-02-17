# Restraint Protocol: Concrete Operational Specification

**Author:** RESTRAINT-DESIGNER (Opus 4.6)
**Date:** 2026-02-16
**Evidence Base:**
- 05-flagship-architecture.md (restraint protocol concept, Section C)
- 06-adversarial-anti-scale.md (restraint > saturation argument)
- 02-content-form-analysis.md (signal-to-silence ratio 1.18:1 finding)
- 03-diminishing-returns.md (restraint creates richness, iteration > scale)
- mechanism-catalog.md (18 mechanisms, 5 categories)

**Purpose:** Make every restraint concept from the flagship architecture BINARY, MEASURABLE, and ENFORCEABLE by builder agents.

---

## 1. REJECTION LOG FORMAT

### 1.1 What Is a Rejected Placement?

A rejected placement is a SPECIFIC location where a SPECIFIC mechanism COULD be deployed but is DELIBERATELY withheld. Rejection is not "I didn't think of it." Rejection is "I considered this, decided it would reduce contrast, and chose absence instead."

The rejection log exists because:
- The ceiling experiment deployed 14 mechanisms. Only 1 was perceptually visible. Signal saturation eliminated drama.
- The content-form analysis found a 1.18:1 signal-to-silence ratio -- too flat. The page's best moment (architecture diagram) had a 3:1 silence-to-signal ratio LOCALLY.
- The adversarial research argues: "Richness comes from the ratio of signal to silence, not from the total amount of signal."

Rejection logging forces the planner to PROVE they considered absence as a design tool, not just presence.

### 1.2 Rejection Entry Template

Each rejected placement uses this exact format (copy-paste ready):

```
REJECTED: [Mechanism # and Name]
PROPOSED LOCATION: [Section name or CSS selector where it would deploy]
PROPOSED SCALE: [Page / Section / Component / Detail]
REASON FOR REJECTION: [One sentence: what would be LOST by deploying here]
WHAT IS PRESERVED: [One sentence: what the ABSENCE achieves]
```

### 1.3 Worked Example (3 Entries)

```
REJECTED: #7 Zone Background Differentiation
PROPOSED LOCATION: Callout interiors (all callout types)
PROPOSED SCALE: Component
REASON FOR REJECTION: Callout interiors already use 2-zone DNA (#2) with border-left
  color encoding (#9). Adding zone background would create triple-channel encoding
  inside a container that is ALREADY semantically complete.
WHAT IS PRESERVED: Callouts remain QUIET containers. The silence inside callouts
  contrasts with the section-level zone backgrounds outside them, making the callouts
  feel like moments of focus within a shifting landscape.

REJECTED: #5 Dense/Sparse Alternation
PROPOSED LOCATION: Within-section paragraph rhythm (alternating paragraph spacing)
PROPOSED SCALE: Detail
REASON FOR REJECTION: Dense/sparse alternation already deploys at Page scale
  (sections 1,3,5 sparse; sections 2,4 dense). Adding paragraph-level alternation
  creates DOUBLE RHYTHM -- two simultaneous density waves that read as noise.
WHAT IS PRESERVED: Section-level density rhythm is the ONLY rhythm. Paragraphs
  within sections use uniform spacing, which makes the section-to-section density
  shift MORE prominent by contrast.

REJECTED: #1 Border-Weight Gradient
PROPOSED LOCATION: All h3 headings (uniform 3px left border)
PROPOSED SCALE: Component
REASON FOR REJECTION: Uniform border on ALL h3 elements is DISCRETE MODE applied
  mechanically. This contradicts the mechanism's purpose (encoding DIFFERENT
  importance levels). A 3px border on every h3 communicates nothing because
  there is no contrast.
WHAT IS PRESERVED: Border-weight remains available for SEMANTIC use -- critical h3
  elements get 3px, supporting h3 elements get 1px or none. The variation is the
  signal, not the presence.
```

### 1.4 Where in the Build Process

Rejection logging happens in TWO phases:

**Phase A: During Planner's Elaboration Plan (Pass 2 planning)**

The planner writes the Restraint Map in `02b-elaboration-plan.md`. This is where MOST rejections are documented -- the planner considers each mechanism's deployment scope and rejects overextension. The planner MUST document rejections BEFORE handing the elaboration plan to the builder.

Minimum: The planner documents at least 15 rejected placements in the elaboration plan.

**Phase B: During Builder's Implementation (Pass 2 execution)**

The builder encounters additional deployment opportunities during implementation and rejects some. These are appended to the Restraint Map after implementation.

Minimum: The builder documents at least 6 additional rejected placements.

### 1.5 Minimum Rejection Count

**Total minimum before proceeding to Pass 3: 21 rejected placements.**

This enforces the 1.5:1 reject-to-deploy ratio for the recommended 12-14 deployed mechanisms:
- 14 deployed x 1.5 = 21 rejections minimum
- 12 deployed x 1.5 = 18 rejections minimum (rounded up to 21 for consistency)

**Counting rule:** Each rejection entry is ONE placement. The same mechanism rejected at different locations counts as separate rejections. Example: #7 Zone Background rejected for callout interiors AND rejected for code block backgrounds = 2 rejections.

### 1.6 Verification

At Gate 4 (Composition Verification), the team-lead counts rejection entries in the Restraint Map:
- Count >= 21: PASS
- Count 15-20: WARN (team-lead prompts planner to consider additional rejections)
- Count < 15: FAIL (return to planner for additional restraint consideration)

---

## 2. SILENCE ZONE SPECIFICATION

### 2.1 Definition

A **silence zone** is a contiguous vertical region of the page where:
- ONLY base typography operates (body font, body size, body line-height, body color)
- ONLY base spacing operates (standard paragraph margins, standard section padding)
- ONLY base container styling operates (page background, standard max-width)

A silence zone is NOT void. It contains CONTENT (text, possibly simple lists). But it contains NO MECHANISM beyond the base vocabulary.

### 2.2 What CSS Is ALLOWED in a Silence Zone

```css
/* ALLOWED in silence zones: */
font-family: var(--font-body);           /* Inter */
font-size: var(--type-body);             /* 1rem / 16px */
line-height: 1.7;
color: var(--color-text);                /* #1A1A1A */
background: var(--color-background);     /* #FEF9F5 (page default) */
max-width: /* page container width */;
margin: 0 auto;
padding: var(--space-8) 0;              /* Standard section padding */
margin-bottom: var(--space-between);     /* Standard paragraph spacing */
```

Simple HTML elements allowed:
- `<p>` paragraphs
- `<ul>` / `<ol>` lists (no custom styling beyond base)
- `<h2>` / `<h3>` headings (standard typographic scale, NO added borders or backgrounds)
- `<a>` links (standard color)
- `<em>`, `<strong>` (standard weight/style)

### 2.3 What CSS Is PROHIBITED in a Silence Zone

```css
/* PROHIBITED in silence zones (any of these = NOT a silence zone): */
border-left: *;                          /* No border-weight gradient (#1) */
border-left-color: var(--accent-*);      /* No confidence encoding (#9) */
background: var(--color-zone-*);         /* No zone differentiation (#7) */
background: var(--color-text);           /* No dark zones */
/* Any ::after or ::before pseudo-element with visual effect */
/* Solid offset depth (#3) */
/* Any grid or flex layout beyond standard flow */
/* Any custom component styling (callouts, data tables, code blocks) */
/* Drop cap (#16) */
/* Any mechanism from the catalog */
```

### 2.4 Minimum Size

A silence zone MUST be at least **200px in rendered height at 1440px viewport** (approximately 6-7 lines of body text with standard spacing). Below this threshold, the absence is too brief to register as DESIGNED SILENCE -- it reads as a gap between decorated sections.

### 2.5 How Many Per Page

| Requirement | Count |
|-------------|-------|
| **MINIMUM** | 2 silence zones |
| **RECOMMENDED** | 3-4 silence zones |
| **MAXIMUM** | No cap, but more than 6 risks the page feeling sparse rather than restrained |

### 2.6 Placement Rules

Silence zones MUST be placed according to these rules:

**Rule 1: After high-density sections.** A section containing 3+ mechanisms MUST be followed by a silence zone OR a section with at most 1 mechanism. The rationale: density-then-silence creates drama. Density-then-density creates fatigue.

**Rule 2: Before the page's strongest designed moment.** The single most visually impactful element on the page (the "drama moment") MUST be preceded by at least 200px of silence. The rationale: the architecture diagram in the ceiling experiment was the page's best moment specifically because it was surrounded by dark-background silence. Silence before signal = signal prominence.

**Rule 3: NOT at page start or end.** The first and last 300px of the page are NOT silence zones -- they are the header/intro and footer/conclusion, which need mechanism presence for structural bookending. Silence zones belong in the MIDDLE of the page's scroll depth.

### 2.7 Documentation Format

Silence zones are documented in the Restraint Map:

```
SILENCE ZONE 1:
LOCATION: Between [Section Name A] and [Section Name B]
APPROXIMATE POSITION: [X]% of total scroll depth
CONTENT WITHIN: [Brief description -- e.g., "3 paragraphs of bridge text"]
WHAT IT FOLLOWS: [High-density section with N mechanisms]
WHAT IT PRECEDES: [Description of next section]
WHY SILENCE HERE: [One sentence -- what the absence achieves]
```

### 2.8 Verification

At Gate 4 (Composition Verification), the team-lead or programmatic-auditor checks:

1. Count sections that qualify as silence zones (no mechanism CSS beyond base typography).
2. Verify each silence zone is >= 200px rendered height.
3. Verify at least 2 silence zones exist.
4. Verify at least 1 silence zone precedes the page's most visually impactful element.

**Binary result:** PASS (2+ qualifying silence zones, correctly placed) or FAIL (insufficient or misplaced).

---

## 3. MECHANISM CAP ENFORCEMENT

### 3.1 Hard Cap

**Maximum deployed mechanisms: 16.**

This is a HARD CAP. There is no exception process. If the planner's elaboration plan specifies more than 16 mechanisms, the plan MUST be revised before the builder begins.

**Recommended range: 12-14.** The flagship architecture explicitly states that the quality uplift comes from intentionality (Pass 3), not mechanism density. The ceiling experiment deployed 14 and produced catastrophic whitespace with only 1 perceivable moment. More mechanisms will not improve perception.

### 3.2 How to Count: Definition of "Deployed"

A mechanism is **deployed** when its CSS is PRESENT in the final stylesheet AND it is APPLIED to at least one HTML element via class name, element selector, or pseudo-element.

| Scenario | Deployed? |
|----------|-----------|
| CSS for mechanism #1 exists AND `.element--highest` is used in HTML | YES -- counts as 1 |
| CSS for mechanism #1 exists but NO element uses those classes | NO -- CSS-only presence is not deployment |
| Mechanism #5 operates at Page scale AND Component scale | YES -- counts as 1 (same mechanism, multiple scales) |
| Mechanism #1 AND #4 both encode hierarchy but via different CSS properties | YES -- counts as 2 (different mechanisms, even if same semantic purpose) |

### 3.3 Scale Rule: Same Mechanism Across Multiple Scales

**A mechanism deployed at multiple scales counts as 1 mechanism, not multiple.**

Example: Dense/sparse alternation (#5) at Page scale (section padding alternation) AND at Component scale (callout label vs body density) is 1 deployed mechanism.

**However: No mechanism may operate at ALL 5 scales.** Maximum deployment per mechanism: 3 scales.

| Scale coverage | Status |
|---------------|--------|
| 1 scale | Allowed |
| 2 scales | Allowed |
| 3 scales | Allowed (maximum) |
| 4 scales | PROHIBITED -- reduce to 3 |
| 5 scales | PROHIBITED -- reduce to 3 |

The rationale: the ceiling experiment saturated every zoom level. The adversarial research argues "no amount of micro-scale coherence rescues a page that fails the squint test." Limiting per-mechanism scale coverage prevents saturation.

### 3.4 Unused Mechanism Requirement

**At least 2 of the 18 catalog mechanisms MUST remain entirely unused.**

"Unused" means: zero CSS for that mechanism, zero HTML elements using it. Not deployed at any scale, in any section, for any purpose.

**How to choose which mechanisms to leave unused:**

The planner selects unused mechanisms based on content fit, NOT arbitrary exclusion. The selection criteria:

1. Does the content have the structural property this mechanism requires? (e.g., Drop cap #16 requires editorial/narrative opening. If content is procedural, #16 is a natural exclusion.)
2. Would deploying this mechanism duplicate the semantic channel of another deployed mechanism? (e.g., if border-weight gradient #1 already encodes hierarchy, typographic scale jumping #11 may be redundant for the same dimension.)
3. Does this mechanism's perceptual effectiveness justify its deployment given the content density? (e.g., Width variation #6 has LOW perceptual effectiveness -- it may not be worth deploying on a page where other spatial mechanisms already operate.)

**Document unused mechanisms in the Restraint Map:**

```
UNUSED MECHANISM: #[N] [Name]
REASON: [One sentence -- why this mechanism is deliberately excluded]
```

### 3.5 Verification

At Gate 4 (Composition Verification), the programmatic-auditor checks:

1. **Count deployed mechanisms:** Scan CSS for mechanism patterns. Count distinct mechanisms that are both defined in CSS AND applied to HTML elements.
   - Count <= 16: PASS
   - Count > 16: FAIL (mandatory reduction)

2. **Check per-mechanism scale coverage:** For each deployed mechanism, identify how many scales it operates at.
   - All mechanisms at <= 3 scales: PASS
   - Any mechanism at 4+ scales: FAIL (reduce scale coverage)

3. **Count unused mechanisms:** Identify mechanisms from the catalog of 18 with zero CSS presence.
   - Unused count >= 2: PASS
   - Unused count < 2: FAIL (remove at least one mechanism)

---

## 4. SIGNAL-TO-SILENCE RATIO

### 4.1 Target Ratio

**Target signal-to-silence ratio: 0.6:1 to 0.8:1.**

This means: for every signal event, there should be 1.25 to 1.67 silence elements. The page should be PREDOMINANTLY QUIET, with signal moments emerging from silence.

**Why this range:**
- The ceiling experiment measured 1.18:1 (67 signal events, 57 silence elements). This was TOO FLAT -- the content-form analysis concluded "the reader never gets genuine rest."
- The page's best moment (architecture diagram) had approximately 0.33:1 LOCALLY (1 signal event surrounded by 3 silence elements). This is too extreme for a full-page target but demonstrates the principle.
- 0.6:1 to 0.8:1 represents "predominantly quiet with distinct signal peaks" -- the perceptual sweet spot where readers experience rhythm rather than either saturation or emptiness.

### 4.2 What Counts as a Signal Event

A **signal event** is a CSS-styled element that draws visual attention BEYOND base typography. Count each occurrence:

| Signal Type | Examples | Count As |
|------------|---------|----------|
| **Structural borders** | 4px border-left on callout, 3px border-bottom on header | 1 per element with structural border |
| **Background shifts** | Zone background change (cream to white to dark) | 1 per section with non-default background |
| **Dark-background blocks** | Header, footer, code blocks, checkpoint dividers | 1 per dark block |
| **Component containers** | Callouts, data tables, bento grid cells | 1 per container with custom styling |
| **Decorative elements** | Drop cap, solid offset depth, ::after pseudo-elements | 1 per decorative instance |
| **Typographic emphasis** | Headings (h1-h3) with custom styling beyond scale | 1 per heading with added borders, backgrounds, or decorative treatment |
| **Transition markers** | Section dividers, checkpoint bars, zone indicators | 1 per transition element |

**DO NOT count as signal:**
- Standard `<h2>` or `<h3>` headings with only typographic scale (size/weight change) -- these are base typography
- Standard paragraph text
- Standard list items (no custom bullets or borders)
- Standard link styling
- Spacing and padding (these are silence, not signal)

### 4.3 What Counts as a Silence Element

A **silence element** is a region of the page where the reader encounters base typography with no mechanism activation:

| Silence Type | Examples | Count As |
|-------------|---------|----------|
| **Plain paragraphs** | Body text between signal events | 1 per paragraph group (consecutive paragraphs with no signal between them count as 1) |
| **Standard spacing** | Inter-section padding, paragraph margins | 1 per spacing gap >= 32px |
| **Silence zones** | Documented silence zones (Section 2 of this protocol) | 2 per silence zone (weighted because they are designed, not accidental) |
| **Breathing transitions** | Simple spacing increase between sections (no border, no background change) | 1 per breathing transition |

### 4.4 Measurement Method

**Step 1:** List all signal events on the page. Use the signal type table above. Assign each a count of 1.

**Step 2:** List all silence elements on the page. Use the silence type table above. Assign each a count of 1 (silence zones count as 2 each).

**Step 3:** Compute: `ratio = total_signal / total_silence`

**Step 4:** Compare to target range:
- Ratio 0.6 to 0.8: PASS (balanced restraint)
- Ratio 0.5 to 0.59: WARN (may feel too sparse -- verify silence zones contain content)
- Ratio 0.81 to 1.0: WARN (approaching flatness -- consider removing signal events)
- Ratio > 1.0: FAIL (signal-saturated -- mandatory signal reduction)
- Ratio < 0.5: FAIL (too sparse -- verify content is present)

### 4.5 Worked Example

**Hypothetical flagship page (12 mechanisms deployed, 8 sections):**

**Signal Events:**
| # | Element | Type |
|---|---------|------|
| 1 | Dark header with 3px border | Dark block |
| 2 | Title heading (custom serif + size) | Typographic emphasis |
| 3 | "You Are Here" callout (4px border + zone background) | Component container |
| 4 | Architecture overview diagram (dark code block) | Dark block |
| 5 | Section 2 zone background shift (cream -> white) | Background shift |
| 6 | Data table (mono headers, 3px border) | Component container |
| 7 | Code block 1 (dark background) | Dark block |
| 8 | Critical callout (4px primary border) | Component container |
| 9 | Section 4 zone background shift (white -> breathing) | Background shift |
| 10 | Code block 2 (dark background) | Dark block |
| 11 | Feature comparison table | Component container |
| 12 | Section divider (1px border) | Transition marker |
| 13 | Info callout | Component container |
| 14 | Code block 3 (dark background) | Dark block |
| 15 | Drop cap opening paragraph | Decorative element |
| 16 | Dark footer with 3px border | Dark block |

**Total signal events: 16**

**Silence Elements:**
| # | Element | Type | Count |
|---|---------|------|-------|
| 1 | Intro paragraphs (3 consecutive, no signal) | Plain paragraph group | 1 |
| 2 | Space between header and intro | Standard spacing | 1 |
| 3 | Silence zone 1: bridge text before diagram | Designed silence zone | 2 |
| 4 | 3 paragraphs after diagram | Plain paragraph group | 1 |
| 5 | Space between Section 2 and Section 3 | Standard spacing | 1 |
| 6 | Silence zone 2: 4 paragraphs of narrative explanation | Designed silence zone | 2 |
| 7 | 2 paragraphs between code blocks | Plain paragraph group | 1 |
| 8 | Space between Section 4 and Section 5 | Standard spacing | 1 |
| 9 | Silence zone 3: contemplative section (diagrams + prose) | Designed silence zone | 2 |
| 10 | 2 paragraphs before conclusion | Plain paragraph group | 1 |
| 11 | Breathing transition before footer | Breathing transition | 1 |
| 12 | 4 paragraphs of configuration examples (plain list) | Plain paragraph group | 1 |
| 13 | Space between Section 5 and Section 6 | Standard spacing | 1 |
| 14 | Space between Section 6 and Section 7 | Standard spacing | 1 |
| 15 | 3 paragraphs of concept explanation | Plain paragraph group | 1 |
| 16 | Space between Section 7 and footer | Standard spacing | 1 |
| 17 | Breathing transition between sections 3 and 4 | Breathing transition | 1 |

**Total silence elements: 21 (including 6 from silence zone weighting)**

**Ratio: 16 / 21 = 0.76:1**

**Verdict: PASS** (within 0.6-0.8 target range).

### 4.6 When to Measure

The signal-to-silence ratio is measured AFTER Pass 2 completion (before Pass 3), at Gate 4 (Composition Verification).

The planner can ESTIMATE the ratio during elaboration planning. If the planned signal count exceeds the silence count (ratio > 1.0), the planner should reduce planned mechanism deployments BEFORE the builder begins.

---

## 5. SYNTHESIS: HOW THE FOUR RESTRAINT DIMENSIONS INTERLOCK

### 5.1 The Restraint Equation

The four dimensions of restraint are not independent. They constrain each other:

```
Mechanism Cap (16 max, 12-14 recommended)
    |
    +--> limits total signal events (fewer mechanisms = fewer signal sources)
    |
Rejection Log (1.5:1 ratio, 21+ rejections)
    |
    +--> forces planner to consider WHERE each mechanism deploys (not just WHETHER)
    |
Silence Zones (2+ zones, 200px+ each)
    |
    +--> creates structural gaps in the signal distribution
    |
Signal-to-Silence Ratio (0.6-0.8:1 target)
    |
    +--> validates that the combination of cap + rejections + silence zones
         produces the right perceptual density
```

If a planner deploys 14 mechanisms but the signal-to-silence ratio is 1.2:1, the silence zones are insufficient or the mechanisms are deployed too densely. The ratio is the FEEDBACK METRIC that tells the planner whether the other three dimensions are working.

### 5.2 Failure Mode Prevention

Each restraint dimension prevents a specific ceiling experiment failure:

| Ceiling Failure | Restraint Dimension | Prevention |
|----------------|---------------------|------------|
| 14 mechanisms deployed, only 1 perceived | Mechanism Cap (12-14 recommended) | Fewer mechanisms = each gets more spatial room |
| Signal-to-silence 1.18:1 (too flat) | Signal-to-Silence Ratio (0.6-0.8:1) | Forces predominantly quiet page with distinct peaks |
| Zone indicators, checkpoints, workstation bars added signal where silence needed | Rejection Log (21+ rejections) | Planner must document WHY each location does NOT get a mechanism |
| No designed moments of rest | Silence Zones (2+ at 200px+) | Forces explicit regions of base-typography-only |
| Every zoom level saturated | Scale Rule (max 3 scales per mechanism) | Prevents any single mechanism from filling all zoom levels |

### 5.3 Gate Integration

All four restraint dimensions are checked at Gate 4 (Composition Verification):

| Check | Binary? | Pass Criteria | Fail Action |
|-------|---------|---------------|-------------|
| Mechanism count | YES | <= 16 deployed | Remove mechanisms |
| Rejection count | YES | >= 21 entries in Restraint Map | Planner adds rejections |
| Unused mechanisms | YES | >= 2 of 18 entirely unused | Remove one mechanism |
| Silence zone count | YES | >= 2 zones, each >= 200px | Add silence zones |
| Silence zone placement | YES | >= 1 before strongest moment | Reposition silence zone |
| Per-mechanism scale coverage | YES | All <= 3 scales | Reduce scale coverage |
| Signal-to-silence ratio | RANGE | 0.6-0.8:1 | Add silence or remove signal |

**All checks must PASS before proceeding to Pass 3 (Intentionality Layer).**

---

## 6. BUILDER INSTRUCTIONS (<30 LINES)

These are the actual instructions a builder agent receives, suitable for direct inclusion in the builder's prompt:

```
RESTRAINT PROTOCOL -- MANDATORY FOR ALL BUILDERS

MECHANISM CAP:
- Deploy AT MOST 16 mechanisms from the catalog. Recommended: 12-14.
- Each mechanism at AT MOST 3 of the 5 scales (Navigation/Page/Section/Component/Character).
- At least 2 of the 18 catalog mechanisms MUST be entirely unused (zero CSS, zero HTML).
- A mechanism at multiple scales counts as 1 deployment.

SILENCE ZONES:
- Include AT LEAST 2 silence zones: regions of 200px+ height with ONLY base typography.
- Silence zones contain content (paragraphs, simple lists) but NO mechanism CSS.
- NO borders, NO background shifts, NO decorative elements, NO component containers.
- Place at least 1 silence zone BEFORE the page's most visually impactful element.
- Do NOT place silence zones in the first or last 300px of the page.

REJECTION LOG:
- For every mechanism you deploy, document AT LEAST 1.5 placements you REJECTED.
- Minimum 21 total rejection entries before Pass 3 begins.
- Each entry: mechanism name, proposed location, why rejected, what absence preserves.
- Append your rejections to the Restraint Map in 02b-elaboration-plan.md.

SIGNAL-TO-SILENCE RATIO:
- Target ratio: 0.6 to 0.8 signal events per silence element.
- Signal = borders, background shifts, dark blocks, components, decorative CSS, transitions.
- Silence = plain paragraph groups, standard spacing >= 32px, designed silence zones (count 2x).
- If ratio exceeds 1.0, REMOVE signal events until ratio drops below 0.8.

SELF-CHECK (before submitting to gate):
- Count deployed mechanisms. Is it <= 16?
- Count silence zones. Are there >= 2, each >= 200px?
- Estimate signal-to-silence ratio. Is it between 0.6 and 0.8?
- Are >= 2 mechanisms from the catalog entirely unused?
- Does any mechanism deploy at 4+ scales? If yes, reduce.
```

---

## APPENDIX A: RESTRAINT MAP TEMPLATE

This is the complete template for the Restraint Map section of `02b-elaboration-plan.md`:

```markdown
## RESTRAINT MAP

### Deployed Mechanisms ([count]/16 cap)

| # | Mechanism | Scales Active | Primary Purpose |
|---|-----------|--------------|-----------------|
| [N] | [Name] | [Page, Section] | [One-line purpose] |
...

### Unused Mechanisms ([count]/18 -- minimum 2 unused)

UNUSED MECHANISM: #[N] [Name]
REASON: [Why excluded]

UNUSED MECHANISM: #[N] [Name]
REASON: [Why excluded]

### Rejected Placements ([count] -- minimum 21)

REJECTED: #[N] [Name]
PROPOSED LOCATION: [Where]
PROPOSED SCALE: [Scale]
REASON FOR REJECTION: [What would be lost]
WHAT IS PRESERVED: [What absence achieves]

[... repeat for each rejection ...]

### Silence Zones ([count] -- minimum 2)

SILENCE ZONE 1:
LOCATION: Between [Section A] and [Section B]
APPROXIMATE POSITION: [X]% of scroll depth
CONTENT WITHIN: [Description]
WHAT IT FOLLOWS: [High-density section with N mechanisms]
WHAT IT PRECEDES: [Next section description]
WHY SILENCE HERE: [What absence achieves]

[... repeat for each silence zone ...]

### Signal-to-Silence Estimate

Estimated signal events: [count]
Estimated silence elements: [count]
Estimated ratio: [ratio]:1
Target range: 0.6-0.8:1
Status: [PASS / WARN / FAIL]
```

---

## APPENDIX B: QUICK REFERENCE CARD

| Dimension | Value | Source |
|-----------|-------|--------|
| Mechanism hard cap | 16 | Flagship architecture Section C |
| Mechanism recommended range | 12-14 | Flagship architecture Section C |
| Per-mechanism scale max | 3 of 5 scales | Flagship architecture Section C |
| Unused mechanisms minimum | 2 of 18 | Flagship architecture Section C |
| Reject-to-deploy ratio | 1.5:1 minimum | Flagship architecture Section C |
| Minimum rejection entries | 21 | Derived: 14 deployed x 1.5 |
| Silence zones minimum | 2 | Flagship architecture Section C |
| Silence zone minimum height | 200px | This protocol (operational spec) |
| Silence zone placement | After density, before drama | Content-form analysis Section D |
| Signal-to-silence target | 0.6-0.8:1 | Content-form analysis (1.18:1 = too flat) |
| Ceiling experiment's ratio | 1.18:1 | Content-form analysis Section D5 |
| Ceiling experiment's best moment ratio | ~0.33:1 | Content-form analysis Section D5 |
| Gate where checked | Gate 4 (Composition Verification) | Flagship architecture Section A |

---

**END RESTRAINT PROTOCOL**
