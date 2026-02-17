# Enrichment Invocation Map -- All 11 Pre-Flight Enrichments

**Author:** enrichment-invoker (Task #23)
**Date:** 2026-02-17
**Purpose:** Map exact new text added by each enrichment, specify how prompt language invokes each, and document cross-enrichment connections.

---

## 1. ENRICHMENT INVENTORY

### Summary Table

| ID | Enrichment Name | Target File | Lines Added | Exact Location |
|----|----------------|-------------|-------------|----------------|
| B1 | Max whitespace prohibition | prohibitions.md | +36 | Prohibition #21 (lines 323-356) |
| B3 | Front-loaded weight prohibition | prohibitions.md | +30 | Prohibition #22 (lines 359-386) |
| C3 | Max spacing token 96px | tokens.css | +9 | Lines 114-123 (after Gestalt Semantic Aliases) |
| A1 | Transition grammar | mechanism-catalog.md | +82 | Lines 944-1027 (after Combination Rules) |
| A2 | Restraint principle | mechanism-catalog.md | +43 | Lines 1029-1067 (after Transition Grammar) |
| A3 | Content density floors | semantic-rules.md | +63 | Gap 6 (lines 252-318) |
| D3 | Content-form fit | semantic-rules.md | +82 | Gap 7 (lines 322-397) |
| BT-08 | PA-50-53 void detection | PA SKILL.md | +35 | Tier 4: Void Prevention (lines 337-363) |
| BT-09 | Metaphor scoring rubric | TC SKILL.md | +54 | Step 3.5G (lines 705-757) |
| BT-10 | PA-09 severity + PA-05c expansion | PA SKILL.md | +30 | PA-09 calibration (lines 153-165), PA-05c expansion (lines 100-122) |
| BT-11 | PA-17/PA-41 ceiling+ elevation | PA SKILL.md | +7 (net) | Lines 202-214 (after PA-41 table) |

### File Modification Summary

| File | Before | After | Delta |
|------|--------|-------|-------|
| `design-system/compositional-core/identity/prohibitions.md` | 353 lines | 419 lines | +66 |
| `design-system/compositional-core/vocabulary/tokens.css` | 174 lines | 183 lines | +9 |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | 1093 lines | 1218 lines | +125 |
| `design-system/compositional-core/guidelines/semantic-rules.md` | 380 lines | 530 lines | +150 |
| `~/.claude/skills/perceptual-auditing/SKILL.md` | 775 lines | 847 lines | +72 |
| `~/.claude/skills/tension-composition/SKILL.md` | 1878 lines | 1932 lines | +54 |

---

## 2. PER-ENRICHMENT INVOCATION

### B1: Max Whitespace Prohibition (prohibitions.md, Prohibition #21)

#### Exact Text Added

```markdown
### 21. NEVER Allow a Full Viewport Height of Contentless Space (EXCEPT Single Breathing Zone)

**Why it exists:** A full viewport (100vh at 1440px width) with less than 30% content coverage
communicates "page is broken" or "content failed to load."

**Measurement (binary test):**
Step 1: Scroll in viewport-height increments (0, 900, 1800, 2700, ...).
Step 2: Estimate content coverage at each position.
Step 3: Count consecutive positions below 30%.

**Pass/Fail:**
- 0-1 consecutive positions below 30%: PASS
- 2+ consecutive positions below 30%: FAIL

**Exception:** SINGLE breathing zone with 1-3 sentences of transition text.
```

#### Which Agents Invoke B1

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Builder** | "No individual scroll position may have < 30% content coverage. If 2+ consecutive viewport-height positions fall below 30%, the build FAILS Prohibition B1." | During build, as spatial self-check after placing all content |
| **Planner/Architect** | "Ensure every zone has sufficient content to meet B1 (30% coverage at every viewport-height position). If your plan creates a zone that cannot meet 30%, merge it with an adjacent zone." | During plan creation |
| **PA Auditors (Mode 4)** | PA-50 directly measures B1: "Count viewport-height positions where < 30% is content. How many consecutive?" | During Mode 4 audit, Auditor C primary |
| **Verification agent** | "Serve at 1440px, scroll in 900px increments, capture screenshots, classify each as above/below 30% content." | Post-build verification gate |

#### Binary Rule for Execution Spec

```
RULE B1-VOID: At 1440px viewport width, scrolling in viewport-height increments,
NO 2+ consecutive positions may have content coverage below 30%.
TEST: Screenshot at each increment. Classify coverage. Count consecutive <30%.
PASS: 0-1 consecutive. FAIL: 2+ consecutive.
```

---

### B3: Front-Loaded Weight Prohibition (prohibitions.md, Prohibition #22)

#### Exact Text Added

```markdown
### 22. NEVER Concentrate All Visual Interest in the First Third of the Page

**Rule:** For pages with 3+ sections, at least ONE designed moment (visual peak using
3+ simultaneous mechanisms at high intensity) must appear in the SECOND HALF
(below 50% scroll depth).

**Measurement:**
Step 1: Identify designed moments (3+ mechanisms at high intensity + unique treatment).
Step 2: Map scroll position as percentage.
Step 3: At least 1 below 50%?

**Pass/Fail:**
- At least 1 designed moment below 50%: PASS
- All above 50%: FAIL
```

#### Which Agents Invoke B3

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Builder** | "Place at least 1 designed moment (3+ mechanisms, unique visual treatment) in the second half of the page. Explicitly plan which section below 50% scroll gets the visual peak." | During build, mechanism distribution phase |
| **Planner/Architect** | "In the mechanism distribution plan, assign at least 1 visual peak to the bottom 50%. Name the specific section and its mechanisms." | During plan creation |
| **PA Auditors** | PA-52 directly measures B3: "Does each third of the page have at least 1 designed moment?" PA-36 supplements: "Where is the dramatic visual moment positioned?" | During Mode 4 audit |

#### Binary Rule for Execution Spec

```
RULE B3-DISTRIBUTION: At least 1 designed moment (3+ mechanisms at high intensity
+ unique visual treatment) must appear below 50% scroll depth.
TEST: List designed moments. Map positions. Check if any is below 50%.
PASS: Yes. FAIL: No.
```

---

### C3: Max Spacing Token 96px (tokens.css)

#### Exact CSS Variables Added

```css
/* --- Spacing Maximums (AVAILABLE -- prevent void accumulation) --- */
--space-max-section: var(--space-16);  /* 64px -- Maximum margin/padding between sections within a zone */
--space-max-zone: var(--space-24);     /* 96px -- Maximum margin/padding between zones or major page divisions */
/* RULE: No single margin or padding value should exceed --space-max-zone (96px).
   If a zone transition needs more visual separation than 96px, use a CHECKPOINT
   element (see mechanism-catalog.md Transition Grammar), not more whitespace.
   Stacking two 96px margins creates 192px of void -- use checkpoint elements instead.
   Evidence: Ceiling experiment accumulated ~1,500-2,000px in zone transitions alone. */
```

#### Which Agents Invoke C3

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Builder** | "No margin or padding value may exceed `var(--space-max-zone)` (96px). Use `var(--space-max-section)` (64px) for within-zone spacing. If you need more visual separation, use a CHECKPOINT element, not more whitespace." | During CSS authoring |
| **Planner** | "Calculate total transition whitespace: (number of zone boundaries) x (max 96px each). If total exceeds 25% of estimated page height, reduce zone count." | During plan review |
| **Verification agent** | "Search CSS for all margin and padding values. Flag any exceeding 96px." | Post-build CSS audit |

#### Binary Rule for Execution Spec

```
RULE C3-MAXSPACE: No single margin or padding CSS value may exceed 96px (var(--space-max-zone)).
Within a zone, max is 64px (var(--space-max-section)).
TEST: grep all margin/padding declarations. Convert to px. Any > 96? FAIL.
If more separation needed: add CHECKPOINT element, not whitespace.
```

---

### A1: Transition Grammar (mechanism-catalog.md)

#### Transition Types Defined

3 transition types documented with CSS patterns:

1. **HARD CUT** -- Content changes DOMAIN (tutorial -> reference, narrative -> API docs)
   ```css
   .section-a + .section-b {
     border-top: 3px solid var(--color-primary);
     /* No additional spacing beyond --space-between (32px) */
   }
   ```

2. **SPACING SHIFT** -- Content changes INTENSITY within same domain (overview -> detail)
   ```css
   .zone--moderate {
     padding: var(--space-8); /* 32px */
     /* NO border, NO background change -- spacing alone carries signal */
   }
   ```

3. **CHECKPOINT** -- Content changes PHASE (prerequisites -> implementation -> verification)
   ```css
   .checkpoint {
     border-top: 1px solid var(--color-border);
     border-bottom: 1px solid var(--color-border);
     padding: var(--space-4) var(--space-6);
     background: var(--color-zone-breathing);
     font-family: var(--font-mono);
     font-size: var(--type-meta);
     text-transform: uppercase;
     letter-spacing: 0.1em;
   }
   ```

#### Selection Rule

```
Q: "Is the content on either side of this boundary from the SAME domain?"
- NO (different domains) -> Type 1: HARD CUT
- YES, but different intensity -> Type 2: SPACING SHIFT
- YES, but different phase -> Type 3: CHECKPOINT
```

#### Which Agents Invoke A1

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Planner/Architect** | "For every pair of adjacent sections, assign exactly one transition type (HARD CUT / SPACING SHIFT / CHECKPOINT) using the selection question. List ALL boundaries with assigned types as a deliverable." | During plan creation |
| **Builder** | "Implement each transition using the CSS pattern from A1. No transition may be 'just empty space.' Every boundary must have a structural element." | During build |
| **Verification agent** | "List all section boundaries. For each, identify transition type. If any boundary has no assigned type: FAIL." | Post-build check |

#### Binary Rule for Execution Spec

```
RULE A1-TRANSITIONS: Every zone/section boundary MUST use exactly one of:
HARD CUT (3px primary border), SPACING SHIFT (padding change only), or CHECKPOINT (labeled landmark).
"No transition" (just empty space) is NOT valid.
Maximum transition spacing: 96px (var(--space-max-zone)) per C3.
TEST: List boundaries. Each has type? PASS. Any without type? FAIL.
```

---

### A2: Restraint Principle (mechanism-catalog.md)

#### Key Rules Added

1. **Mechanism density cap:** Max 4 distinct mechanisms OPERATING (visually producing effects) per viewport-height section.
2. **Distribution requirement:** Every third of the page (0-33%, 33-66%, 66-100%) must contain at least 2 distinct mechanisms.
3. **Restraint ratio:** Ceiling: document 3+ rejected mechanisms with reasoning. Flagship: document 5+ rejected.
4. **"Operating" = visible distinction:** A mechanism in CSS but not producing visible effects does NOT count.

#### Which Agents Invoke A2

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Planner/Architect** | "Distribute mechanisms across the full page so every third has at least 2. Cap at 4 per viewport. Document 5+ mechanisms you CONSIDERED and REJECTED for Flagship tier." | During mechanism distribution plan |
| **Builder** | "After placing all mechanisms, verify: (1) no viewport has > 4 operating simultaneously, (2) each third has >= 2 distinct mechanisms. If violations found, redistribute before shipping." | Post-build self-check |
| **PA Auditors** | PA-52 (designed moment per third) and PA-32 (visual weight distribution) directly audit A2 distribution. PA-41 (repetition monotony) catches concentration. | During Mode 4 audit |

#### Binary Rule for Execution Spec

```
RULE A2-RESTRAINT:
(a) Max 4 distinct VISIBLE mechanisms per viewport-height section.
(b) Every page third (0-33%, 33-66%, 66-100%) has >= 2 distinct mechanisms.
(c) Flagship: document 5+ rejected mechanisms with reasoning.
TEST: Count per viewport. Count per third. Count rejections.
Any violation: FAIL.
```

---

### A3: Content Density Floors (semantic-rules.md, Gap 6)

#### Density Thresholds Added

| Zone Treatment | Minimum Content Required |
|----------------|-------------------------|
| Dedicated zone (own background) | 3+ paragraphs OR 2+ components (callouts, tables, code blocks) |
| Breathing zone (transition) | 1-3 sentences of transition text ONLY |
| Bedrock zone (dark background) | 1 featured element + context paragraph |

**Zone count ceiling by word count:**

| Content Volume | Maximum Zones |
|----------------|---------------|
| < 1,500 words | 2 zones |
| 1,500-3,000 | 3 zones |
| 3,000-5,000 | 4 zones |
| 5,000+ words | 5 zones |

**Boundary rule:** "Zones exist to SERVE content, not to DEMONSTRATE architecture."

#### Which Agents Invoke A3

| Agent Role | How to Invoke | When |
|-----------|--------------|------|
| **Content Architect** | "Count total content words. Apply zone count ceiling table. If plan has more zones than content supports, merge zones until within limits. For each zone, verify content meets the minimum (3+ paragraphs or 2+ components)." | During content-to-zone mapping |
| **Builder** | "Before implementing a zone, count its content blocks. If below minimum: MERGE with adjacent zone or ADD content." | During build, before zone CSS |
| **Verification agent** | "Count words. Count zones. Check against table. For each zone, count content blocks against minimum." | Post-build density check |

#### Binary Rule for Execution Spec

```
RULE A3-DENSITY:
(a) Word count determines max zones: <1500w=2, 1500-3000=3, 3000-5000=4, 5000+=5.
(b) Each zone must contain 3+ paragraphs OR 2+ components.
(c) At no scroll position may content coverage fall below 30% (links to B1).
TEST: Count words. Count zones. Count content per zone.
Any zone below minimum OR zone count exceeds word-count maximum: FAIL.
```

---

### D3: Content-Form Fit (semantic-rules.md, Gap 7)

#### Content-Form Mapping Added

| Form Decision | Minimum Content Required | If Below Minimum |
|---------------|--------------------------|------------------|
| Own zone (dedicated background) | 3+ paragraphs OR 2+ components | Merge into adjacent zone as subsection |
| Bento grid (#15) | 4+ items of comparable visual weight | Use a simple list or table instead |
| Progressive disclosure (#12) | 3+ distinct phases with unique content | Use section headings (h2/h3) instead |
| Drop cap (#16) | 1 paragraph of 3+ sentences | Do not use drop cap on short paragraphs |
| Full bedrock section (dark bg) | 1 featured element + context paragraph | Use inline emphasis (border-left accent) |
| Breathing zone | 1-3 sentences ONLY | If more: upgrade to zone. If less: spacing only |

**Two-question gate:**
1. "Does this section have enough content to fill this form at minimum density?" (YES = proceed, NO = downgrade)
2. "Is this form the SIMPLEST form that serves this content?" (simplest = correct)

**Boundary rule:** "Form follows content volume. Never the reverse."

#### How D3 Guides Metaphor -> Layout Decisions

The prompt should enforce D3 as a GATE between metaphor planning and implementation:

1. Metaphor agent derives zones and visual treatments from metaphor
2. **D3 GATE:** For each planned treatment, check content volume against the table
3. If content insufficient: DOWNGRADE the treatment (zone -> subsection, bento -> list)
4. If content sufficient: PROCEED

This prevents the ceiling experiment failure where the metaphor demanded elaborate zones for insufficient content.

#### Binary Rule for Execution Spec

```
RULE D3-FIT: Every form treatment must be justified by content volume:
- Zone: 3+ paragraphs or 2+ components
- Bento: 4+ items
- Progressive disclosure: 3+ phases
- Drop cap: 3+ sentence paragraph
- Bedrock: 1 featured element + context
TEST: For each section with a form treatment, count content against table.
Below minimum: FAIL. Also check inverse: is this the SIMPLEST adequate form?
```

---

### BT-08: PA-50-53 Void Detection Pipeline (PA SKILL.md, Tier 4)

#### Exact New Questions

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-50** | Count full viewport-height scroll positions where < 30% is content. How many consecutive blank viewports? | Empty viewport accumulation |
| **PA-51** | What % of total page scroll is content vs empty? 80%+ (dense), 60-80% (balanced), 40-60% (sparse), <40% (void-dominated)? | Content-to-scroll ratio |
| **PA-52** | Divide page into thirds. Does each third have at least 1 designed moment? | Visual weight distribution |
| **PA-53** | At 1440px, does content container use 65-80% of horizontal space? | Width utilization |

#### Void Guardrail Specifications (Binary)

| Guardrail | Threshold | Pass/Fail |
|-----------|-----------|-----------|
| Max consecutive blank viewports | 1.5 viewport-heights with < 30% content | 0-1 = PASS, 2+ = FAIL |
| Min content percentage | 60% of total scroll height | >= 60% = PASS, < 60% = FAIL |
| Visual weight distribution | Every third needs 1 designed moment | All thirds = PASS, any without = FAIL |
| Width utilization | 65-80% of viewport at 1440px | In range = PASS, out = FAIL |

#### How PA Auditors Invoke BT-08

```
MODE 4 ASSIGNMENT:
- Auditor C (Spatial+Proportion) is PRIMARY evaluator for PA-50 through PA-53
- ALL auditors should note spatial distribution observations
- PA-50 through PA-53 are MANDATORY for Ceiling+ audits

MODE 1 (Embedded, 90-second):
- After PA-01 through PA-05, add void check: scroll through and verify
  no 2+ consecutive blank viewport-heights exist
```

---

### BT-09: Metaphor Scoring Rubric (TC SKILL.md, Step 3.5G)

#### Exact New Text (Step 3.5G)

6-criterion rubric (18 points total):

| Criterion | What It Evaluates |
|-----------|-------------------|
| 1. Interpretive Distance (0-3) | How far the metaphor is from content domain (0=identical, 3=surprising but apt) |
| 2. Content-Shape Fit (0-3) | Whether metaphor's physical shape serves content flow |
| 3. Structural Survival (0-3) | Whether metaphor is visible without text labels |
| 4. Perceptual Risk (0-3) | Number of risk flags (dead zones, overlabeling, monotony) |
| 5. Mechanism Diversity (0-3) | How many CSS channels the metaphor activates |
| 6. Restraint Compatibility (0-3) | Whether metaphor naturally distributes or concentrates |

**Thresholds:** 15-18 STRONG, 12-14 VIABLE, 9-11 WEAK, 0-8 REJECT

**Critical rule:** Interpretive Distance MUST score >= 2 regardless of total.

**6 Binary Rejection Checks (R1-R6):**
- R1: Content-domain vocabulary? -> REJECT
- R2: Label-dependent communication? -> REJECT
- R3: Container width < 940px forced? -> REJECT
- R4: ALL transitions = empty space? -> REJECT
- R5: 6+ identical repeated elements? -> REJECT
- R6: Soul violations required? -> REJECT

#### How Metaphor Agent and Planner Invoke BT-09

```
METAPHOR AGENT:
After generating metaphor candidates (Step 3.5A-F), BEFORE selecting winner:
1. Apply 6 rejection checks (R1-R6). If ANY = YES, discard that candidate.
2. Score remaining candidates on 6-criterion rubric (18 points).
3. Reject any with Interpretive Distance < 2.
4. Select highest-scoring candidate >= 12/18.

PLANNER:
Reference the winning metaphor's rubric score when building the mechanism distribution plan.
Low "Restraint Compatibility" (0-1) means extra attention to A2 distribution.
Low "Content-Shape Fit" (0-1) means extra attention to D3 content-form gates.
```

---

### BT-10: PA-09 Severity Calibration + PA-05c Expansion (PA SKILL.md)

#### PA-09 Severity Calibration Added

| Dead Space Scale | Severity | Action |
|------------------|----------|--------|
| 1-2 viewport-heights | LOOKS-WRONG | Document and flag. May be acceptable if justified. |
| 3-5 viewport-heights | WOULD-NOT-SHIP | Mandatory fix. Readers perceive "page is broken." |
| 6+ viewport-heights | CATASTROPHIC | Structural rebuild required. |

#### PA-05c Expanded Sub-Dimensions

3 sub-dimensions (ALL must PASS for PA-05c to PASS in Ceiling+):

| Sub-Dimension | PASS | FAIL |
|--------------|------|------|
| **3a. Horizontal Proportion** | Content fills 65-80% of viewport width | < 65% (narrow strip) or > 85% (edge-to-edge) |
| **3b. Vertical Proportion** | Every third has at least 1 visual peak | All weight in first third |
| **3c. Breathing Proportion** | Empty space feels purposeful | Empty space feels abandoned |

#### How 9 PA Auditors Invoke BT-10

```
ALL AUDITORS:
- When PA-09 identifies dead space, MUST calibrate severity using the 3-level scale
- Do not report "dead space" without severity classification

AUDITOR A (Impression+Emotion) evaluates PA-05:
- PA-05c now has 3 sub-dimensions (horizontal, vertical, breathing)
- Each must be independently evaluated for Ceiling+ audits
- If ANY sub-dimension FAILS, PA-05c = FAIL

AUDITOR C (Spatial+Proportion):
- Primary evaluator for PA-09 severity calibration
- Cross-reference with PA-50 (quantitative blank viewport count)
```

---

### BT-11: PA-17/PA-41 Ceiling+ Tier Elevation (PA SKILL.md)

#### Exact Change

Replaced informal advisory note with MANDATORY tier change:

```
CEILING+ TIER ELEVATION (MANDATORY, NOT ADVISORY):
- PA-17 (rhythm) and PA-41 (repetition monotony) are CRITICAL for Ceiling+ audits
- FAIL on PA-17 or PA-41 = equivalent to FAIL on Tier 1 Mandatory (PA-01-05)
- ALL Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of assigned set
- Binary enforcement: PA-17 FAIL or PA-41 FAIL caps verdict at "YES WITH RESERVATIONS"
```

#### How 9 PA Auditors Invoke BT-11

```
ALL 9 AUDITORS (not just Auditor F):
- MUST note rhythm and repetition observations in their findings
- Even if PA-17/PA-41 are not in their assigned question set

AUDITOR F (Consistency+Rhythm):
- PRIMARY evaluator for PA-17 and PA-41
- Findings on these questions have Tier 1 weight

WEAVER-SYNTHESIZER:
- If PA-17 = FAIL or PA-41 = FAIL, verdict CANNOT exceed "YES WITH RESERVATIONS"
- This is a binary cap, regardless of how well other questions score
```

---

## 3. CROSS-ENRICHMENT CONNECTIONS

### The Anti-Void Triad (B1 + C3 + B3)

These three enrichments form a coordinated defense against void accumulation:

```
C3 (token cap)  --PREVENTS-->  Individual spacing values from exceeding 96px
       |
B1 (spatial prohibition) --DETECTS-->  Consecutive viewport-height voids at page level
       |
B3 (temporal prohibition) --DETECTS-->  Visual interest front-loading (all peaks in first third)
```

**C3 prevents** at the CSS property level (no single margin/padding > 96px).
**B1 detects** at the spatial measurement level (consecutive blank viewports).
**B3 detects** at the distribution level (designed moments concentrated in first third).

Worker 1 called this the "anti-void triad": C3 prevents, B1 detects spatially, B3 detects temporally.

### The Content-Form Chain (A3 -> D3 -> B1)

```
D3 (content-form fit) --PREVENTS-->  Form exceeding content volume
       |
A3 (density floors)   --PREVENTS-->  Zones with insufficient content
       |
B1 (void prohibition) --DETECTS-->   Voids caused by either A3 or D3 failures
```

**Builder temporal ordering:** D3 first (check if content warrants the form), THEN A3 (check if zone has enough content), THEN B1 (verify no voids resulted).

### The Transition-Restraint Pair (A1 + A2)

```
A1 (transition grammar) --PREVENTS-->  Transitions implemented as void
       |
A2 (restraint protocol) --PREVENTS-->  Mechanisms concentrated in one region
       |
Both reference C3:      --ENFORCES-->  Max transition spacing = 96px
```

**A1 prevents** void-as-transition. **A2 prevents** mechanism front-loading. Together they ensure mechanisms are distributed across the page AND transitions between zones have structural elements.

### The Detection Pipeline (BT-08 + BT-10 + BT-11)

```
BT-08 (PA-50-53)  --QUANTIFIES-->  Void magnitude (consecutive blanks, content %)
       |
BT-10 (PA-09 cal) --CLASSIFIES-->  Void severity (LOOKS-WRONG / WOULD-NOT-SHIP / CATASTROPHIC)
       |
BT-10 (PA-05c)    --DIAGNOSES-->   Which proportion dimension fails (horizontal / vertical / breathing)
       |
BT-11 (PA-17/41)  --ENFORCES-->    Rhythm quality as Tier 1 equivalent for Ceiling+
```

**PA-09 catches** the problem (gestalt). **PA-50 measures** it (quantitative). **PA-05c diagnoses** which dimension failed. **PA-17/PA-41 enforce** rhythm quality.

### BT-09 Gates Design System Enrichments

```
BT-09 (rubric)
  |
  +-- R3 rejection check references C3 (container width < 940px)
  +-- R4 rejection check references A1 (empty-space transitions)
  +-- Restraint Compatibility criterion references A2 (mechanisms per viewport)
  +-- Structural Survival criterion references B3 (must work below 50% scroll)
```

BT-09 is the UPSTREAM gate. If a metaphor passes BT-09, the design system enrichments (B1, B3, C3, A1, A2, A3, D3) become build-time enforcement. If a metaphor FAILS BT-09, it never reaches build-time where the design system enrichments operate.

---

## 4. BUILDER QUICK-REFERENCE

### What the Builder MUST Know (Condensed)

**BEFORE writing CSS:**
1. No margin/padding value > 96px (C3). Use `var(--space-max-zone)` as ceiling.
2. Every zone boundary needs a transition type: HARD CUT, SPACING SHIFT, or CHECKPOINT (A1). No "just empty space."
3. Each zone needs 3+ paragraphs or 2+ components (A3). Count before implementing.
4. Each form treatment (bento, progressive disclosure, etc.) needs minimum content (D3). Check before implementing.

**DURING CSS authoring:**
5. Max 4 mechanisms operating visually per viewport-height section (A2).
6. At least 2 mechanisms in each third of the page (A2).
7. At least 1 designed moment (3+ mechanisms, unique treatment) below 50% scroll depth (B3).

**AFTER building, BEFORE shipping:**
8. Scroll through at 1440px in viewport-height increments. No 2+ consecutive positions below 30% content coverage (B1).
9. Verify content-to-scroll ratio >= 60% (BT-08, PA-51).
10. Verify container width 65-80% of viewport (BT-08, PA-53).

### Builder Self-Check Sequence

```
STEP 1 (PLAN): Count content words. Apply A3 zone count ceiling.
STEP 2 (PLAN): For each zone, verify content meets D3 minimum.
STEP 3 (PLAN): Assign transition type to every boundary (A1).
STEP 4 (BUILD): Cap all spacing at 96px (C3).
STEP 5 (BUILD): Distribute mechanisms: max 4/viewport, min 2/third (A2).
STEP 6 (BUILD): Place designed moment below 50% scroll (B3).
STEP 7 (VERIFY): Scroll-through B1 void check.
STEP 8 (VERIFY): PA-50-53 quantitative checks (BT-08).
```

---

## 5. GATE INTEGRATION

### How Enrichments Feed Into Verification Gates

#### Pre-Build Gates (Planner/Architect)

| Gate | Enrichments Tested | Pass Condition |
|------|-------------------|----------------|
| Zone Count Gate | A3 | Zones <= word-count maximum |
| Content-Form Gate | D3 | Every form treatment meets content minimum |
| Transition Assignment Gate | A1 | Every boundary has assigned transition type |
| Mechanism Distribution Gate | A2 | Every third has >= 2 mechanisms planned |
| Visual Arc Gate | B3 | At least 1 designed moment planned below 50% |

#### Build-Time Gates (Builder Self-Check)

| Gate | Enrichments Tested | Pass Condition |
|------|-------------------|----------------|
| Spacing Cap Gate | C3 | No margin/padding > 96px |
| Mechanism Density Gate | A2 | No viewport has > 4 operating mechanisms |
| Landmark Gate | A1 (implicit) | Header + main + footer + typed transitions |

#### Post-Build Gates (Verification/PA)

| Gate | Enrichments Tested | Pass Condition |
|------|-------------------|----------------|
| B1 Void Gate | B1, BT-08 (PA-50) | 0-1 consecutive blank viewports |
| Content Ratio Gate | BT-08 (PA-51) | >= 60% content of total scroll |
| Distribution Gate | B3, BT-08 (PA-52) | Designed moment in each third |
| Width Gate | BT-08 (PA-53) | Container 65-80% of viewport |
| Severity Gate | BT-10 (PA-09) | No CATASTROPHIC or WOULD-NOT-SHIP findings |
| Proportion Gate | BT-10 (PA-05c) | All 3 sub-dimensions PASS |
| Rhythm Gate | BT-11 (PA-17/41) | No FAIL on PA-17 or PA-41 |

#### Upstream Gate (Metaphor Selection)

| Gate | Enrichment Tested | Pass Condition |
|------|-------------------|----------------|
| Rejection Check Gate | BT-09 (R1-R6) | All 6 rejection checks = NO |
| Rubric Score Gate | BT-09 | Total >= 12/18 AND Interpretive Distance >= 2 |

---

## 6. RISK MAP -- What Breaks If Each Enrichment Is Not Invoked

| Enrichment | If NOT Invoked | Failure Mode | Ceiling Experiment Analog |
|-----------|---------------|-------------|--------------------------|
| **B1** | Void accumulates undetected | Builder ships page with 70%+ blank scroll | EXACT ceiling failure (9/9 auditors flagged) |
| **B3** | Visual interest dies after 30% scroll | "Beautiful cover, blank pages" perception | Ceiling: all design at 10% depth |
| **C3** | Individual spacing values create multi-viewport voids | Builder uses 120px or 160px margins thinking "generous spacing is good" | Ceiling: 1,500-2,000px in transitions |
| **A1** | Zone transitions implemented as empty space | Every boundary becomes 48-80px of void with no structural signal | Ceiling: T1-T7 all void |
| **A2** | All 14+ mechanisms crammed into header | Header has 7 mechanisms per viewport, rest has 0 | Ceiling: 14 in CSS, 1 perceivable |
| **A3** | Zones declared with insufficient content | CSS containers (background, borders, padding) around 1 paragraph | Ceiling: zones 3-4 nearly empty |
| **D3** | Elaborate forms for simple content | Bento grid wrapping 2 items; progressive disclosure with 1 phase | Ceiling: architecture exceeded content |
| **BT-08** | Void not quantitatively measured | Auditors report "dead space" without severity or magnitude | Ceiling: gestalt caught it, quantitative missed |
| **BT-09** | Bad metaphor passes composite scoring | Zero-distance metaphor scores 12/12 on old rubric | Ceiling: "secure facility" scored 12/12 |
| **BT-10** | PA-09 is binary (yes/no dead space) | 1-viewport gap treated same as 24-viewport gap | Ceiling: 24 frames undifferentiated from 1 |
| **BT-11** | Rhythm failure not weighted as critical | "YES" verdict despite metronomic spacing | Middle: highest-leverage finding was rhythm |

### Highest-Risk Non-Invocations

1. **B1 not invoked** = CATASTROPHIC. This is THE root prohibition. Without it, all other enrichments are post-hoc.
2. **BT-09 not invoked** = HIGH. A bad metaphor upstream makes all downstream enrichments remedial rather than preventive.
3. **A1 not invoked** = HIGH. Transitions-as-void was the structural mechanism that produced the ceiling void.
4. **C3 not invoked** = MEDIUM-HIGH. Token-level cap prevents the most common spacing accumulation pattern.

---

## APPENDIX: Enrichment Application Verification

All 11 enrichments verified present in their target files as of 2026-02-17:

| Enrichment | File | Line Range | Verified |
|-----------|------|-----------|----------|
| B1 | prohibitions.md | 323-356 | YES -- Prohibition #21, "NEVER Allow a Full Viewport Height..." |
| B3 | prohibitions.md | 359-386 | YES -- Prohibition #22, "NEVER Concentrate All Visual Interest..." |
| C3 | tokens.css | 114-122 | YES -- `--space-max-section` and `--space-max-zone` tokens present |
| A1 | mechanism-catalog.md | 944-1027 | YES -- "Transition Grammar" section with 3 types |
| A2 | mechanism-catalog.md | 1029-1067 | YES -- "Restraint Protocol" section with density cap + distribution |
| A3 | semantic-rules.md | 252-318 | YES -- Gap 6 "Content Density Floors Per Zone" |
| D3 | semantic-rules.md | 322-397 | YES -- Gap 7 "Content-Form Fit" |
| BT-08 | PA SKILL.md | 337-363 | YES -- Tier 4: Void Prevention (PA-50 through PA-53) |
| BT-09 | TC SKILL.md | 705-757 | YES -- Step 3.5G Metaphor Scoring Rubric |
| BT-10 | PA SKILL.md | 100-122 (PA-05c), 153-165 (PA-09) | YES -- PA-05c sub-dimensions + PA-09 severity |
| BT-11 | PA SKILL.md | 202-214 | YES -- Ceiling+ Tier Elevation (MANDATORY) |

---

**END ENRICHMENT INVOCATION MAP**
**11 enrichments mapped across 6 files with per-agent invocation language, cross-enrichment connections, gate integration, and risk analysis.**
