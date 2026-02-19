# STRUCTURAL: Making the Compositional Intelligence Stack INHERENT to PV2

**Author:** Compositional Stack Architect (Opus 4.6)
**Task:** #83
**Date:** 2026-02-19
**Sources:** PV2-PIPELINE-DIAGRAM.md, reports 01-14, 17, 28, memory/scale-research.md, TC SKILL.md, mechanism-catalog.md

---

## THE PROBLEM IN ONE SENTENCE

PV2 compresses the entire compositional intelligence stack -- 5 scales, 6 channels, multi-coherence, fractal self-similarity, anti-scale model -- into perception thresholds (">=15 RGB delta"). Thresholds are a FLOOR preventing 1.5/4, not a CEILING enabling 4/4. The full stack must be ARCHITECTURALLY INHERENT to PV2, not mentioned in text instructions.

"Inherent" means: the pipeline CANNOT PRODUCE OUTPUT without engaging each layer. Not "the builder is told about scales" but "the build plan HAS a 5-row table that the handoff gate REJECTS if missing."

---

## THE FIVE-LAYER COMPOSITIONAL STACK

```
Layer 5: ANTI-SCALE MODEL (governing principle)
    Richness = semantic density x restraint x spatial confidence
    This EVALUATES the quality of everything below.
         |
Layer 4: MULTI-COHERENCE (binding rule)
    >= 3 channels shift together at each boundary in the same semantic direction
    This COORDINATES the channels below.
         |
Layer 3: CHANNELS (6 CSS property groups)
    Chromatic | Typographic | Spatial | Structural | Behavioral | Material
    These are the INSTRUMENTS that express the pattern.
         |
Layer 2: SCALES (5 zoom levels)
    Navigation | Page | Section | Component | Character
    These are the STAGES where the pattern appears.
         |
Layer 1: PERCEPTION THRESHOLDS (floor)
    >= 15 RGB | >= 2px font | >= 0.03em spacing | <= 108px stacking
    These prevent INVISIBILITY.
```

Each layer depends on the one below. Multi-coherence requires channels. Channels require scales (each channel operates at multiple scales). Scales require perception thresholds (a scale without perceptible expression is invisible). The anti-scale model evaluates the whole stack.

**Current state in PV2:** Layer 1 is encoded as binary gates (SC-09 through SC-12). Layers 2-5 are TEXT in skill files that evaporates at the TC-to-builder boundary.

---

## LAYER 1: PERCEPTION THRESHOLDS (Already Architectural -- The Floor)

### Current State: EMBEDDED

PV2 already makes thresholds structural:
- SC-09: background delta >= 15 RGB (Playwright gate)
- SC-10: stacked gap <= 108px (Playwright gate)
- SC-11: font-size zone delta >= 2px (Playwright gate)
- Recipe Phase 3: "Can you SEE the zone boundaries?"
- Handoff Gate: "BG colors >= 15 RGB delta?"

### Why This Works

Thresholds are BINARY. The gate runner measures a number and compares it to a threshold. PASS or FAIL. No judgment. No interpretation. This is why Layer 1 is the only layer that survived from the full stack into operational PV2 -- it maps perfectly to binary enforcement.

### What It Cannot Do

Thresholds prevent 1.5/4. They do NOT produce 3/4 or 4/4. A page with random backgrounds that each differ by exactly 15 RGB points passes every threshold but has zero compositional intelligence. The distance from 1.5/4 to 4/4 lives in Layers 2-5.

### No Changes Needed

Layer 1 is the model for how Layers 2-5 must become architectural. The question for each subsequent layer is: **what is its equivalent of SC-09?**

---

## LAYER 2: SCALES (5 Zoom Levels) -- Currently Lost at Handoff

### What Scales Are

The pattern should be visible at 5 zoom levels:

| Scale | What It Governs | CSS Expression |
|-------|----------------|----------------|
| Navigation | Header, TOC, footer, page chrome | Dark bookends, nav structure, ARIA |
| Page | Zone sequence, section arc, overall rhythm | Zone backgrounds, macro spacing |
| Section | Within-section density, internal structure | Padding gradients, border-weight shifts |
| Component | Callouts, tables, code blocks, pull-quotes | 2-zone DNA, accent borders, internal layout |
| Character | Typography weight, letter-spacing, font family | Serif/sans/mono assignments, tracking |

### Where Scales Get Lost

**Loss Point 1 -- TC produces the scale table but the build plan DROPS it.**

TC Step 4.7 (SKILL.md line ~1416) REQUIRES a 5-row "Scale Coverage Table" for Flagship:

```
| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | ... | ... |
| Page | ... | ... |
| Section | ... | ... |
| Component | ... | ... |
| Character | ... | ... |
```

But the PV2 _build-plan.md format (diagram lines 311-351) does NOT include this table. The builder receives: zone count, mechanism deployment per category, background colors, isomorphism table, transition plan. No per-scale specification.

**Loss Point 2 -- Recipe phases are SCALE-BLIND.**

The 9 recipe phases proceed by CSS PROPERTY, not by SCALE:
- Phase 3: ALL backgrounds (one channel across all scales)
- Phase 4: ALL borders (one channel across all scales)
- Phase 5: ALL typography (one channel across all scales)

No phase says: "Now express the pattern at the Section scale."

**Loss Point 3 -- No gate checks scale coverage.**

The handoff gate checks zone count, bg delta, grid layouts, per-category mechanisms, transition types. It does NOT check: "Is the pattern expressed at >= 4 scales?"

### ARCHITECTURAL FIX: The Fractal Echo Table

**What:** A mandatory 5-row table that TC produces as part of _build-plan.md. The table specifies HOW the pattern expresses at each scale, with concrete CSS evidence.

**Where it becomes structural:**

#### A. TC MUST produce it (Phase 4.7 deliverable format)

```
## FRACTAL ECHO TABLE (MANDATORY)

Pattern direction: [ONE PHRASE, e.g., "sparse-to-dense" or "surface-to-depth"]

| Scale | Pattern Expression | Primary CSS | Secondary CSS |
|-------|-------------------|-------------|---------------|
| Navigation | [how header/footer echoes pattern] | [specific CSS] | [specific CSS] |
| Page | [how zone sequence echoes pattern] | [specific CSS] | [specific CSS] |
| Section | [how within-section echoes pattern] | [specific CSS] | [specific CSS] |
| Component | [how component DNA echoes pattern] | [specific CSS] | [specific CSS] |
| Character | [how typography echoes pattern] | [specific CSS] | [specific CSS] |
```

Key constraint: the "Pattern Direction" column must be the SAME direction at every row. "Sparse-to-dense" at Navigation AND Page AND Section AND Component AND Character. If the planner cannot write the same direction at every scale, the metaphor is not fractal -- and the build should fall back to FLAT mode.

#### B. Handoff gate REJECTS if missing (Wave 0.9 check #6)

Add to the 5 existing handoff checks:

```
[ ] Fractal Echo Table present with 5 rows?
[ ] Pattern Direction consistent across all 5 rows?
[ ] Each row has at least 1 CSS evidence entry?
```

Binary. Table present = PASS. Table absent or incomplete = FAIL, return to TC.

#### C. Recipe phases REFERENCE it (9 cross-reference lines)

At the end of each recipe phase, one line:

```
Phase 3: Zone Backgrounds
[...existing instructions...]
SCALE CHECK: Does your background progression match the "Page" row of the Fractal Echo Table?

Phase 4: Borders + Dividers
[...existing instructions...]
SCALE CHECK: Do your border decisions match the "Section" row of the Fractal Echo Table?

Phase 5: Typography Zones
[...existing instructions...]
SCALE CHECK: Does your typography arc match the "Character" row of the Fractal Echo Table?

Phase 6: Element-Level Richness
[...existing instructions...]
SCALE CHECK: Do your component treatments match the "Component" row of the Fractal Echo Table?
```

Cost: 9 lines added to recipe. The builder checks fractal coherence PER PHASE, not as a post-hoc Phase 8 verification.

#### D. Gate runner VERIFIES direction correlation (SC-13)

New programmatic gate:

```
SC-13: Fractal Direction Consistency
- Measure background-color progression at zone boundaries (Page scale)
- Measure padding progression at section boundaries (Section scale)
- Measure font-size progression at heading levels (Component scale)
- Compute: do >= 3 of these progress in the SAME direction?
  (e.g., backgrounds darken AND padding shrinks AND fonts decrease)
- PASS if >= 3 scales show same direction
- FAIL if scales show opposing directions
```

This is not full fractal verification (which is judgment-based) but direction CORRELATION, which is measurable.

### Summary: How Scales Become Inherent

| PV2 Stage | What Makes Scales Structural | Blocks If Missing? |
|-----------|-----------------------------|--------------------|
| TC Output | Fractal Echo Table (5 rows, mandatory) | TC cannot proceed past Phase 4.7 |
| Handoff Gate | Check #6: table present, consistent direction | FAIL, return to TC |
| Recipe Phases | SCALE CHECK line per phase | Builder reminded per phase |
| Gate Runner | SC-13: direction correlation across 3+ scales | FAIL, fix cycle |
| PA Audit | Q: "Is the same compositional direction visible at multiple zoom levels?" | PA-05 score |

---

## LAYER 3: CHANNELS (6 CSS Property Groups) -- Currently Threshold-Only

### What Channels Are

Six independent CSS property groups that can each carry semantic meaning:

| Channel | Properties | Current PV2 Gate |
|---------|-----------|-----------------|
| Chromatic | background-color, color, border-color, accent | SC-09 (bg delta >= 15 RGB) |
| Typographic | font-size, font-weight, font-family, letter-spacing, line-height | SC-11 (font-size >= 2px delta) |
| Spatial | padding, margin, gap, max-width | SC-10 (stacked gap <= 108px) |
| Structural | border-width, border-style, hr, dividers | (no gate) |
| Behavioral | hover, focus, transition, scroll, animation | (no gate) |
| Material | background-image, texture, opacity, filter | (no gate) |

### Where Channels Get Lost

**Only 3 of 6 channels have programmatic gates.** Structural, Behavioral, and Material have zero verification.

**Channels are planned per-CATEGORY, not per-CHANNEL.** TC's mechanism deployment uses 5 categories (S/T/M/B/R = Spatial/Temporal/Material/Behavioral/Relational). These do NOT map 1:1 to the 6 CSS channels. The builder receives "deploy mechanism X from category S" but no instruction about which CSS CHANNEL to express it through.

**The build plan specifies ONE channel's values (chromatic).** Zone backgrounds are the only channel with explicit hex values in the build plan. Typography, spacing, borders, behavior, material are all left to the builder's discretion.

### ARCHITECTURAL FIX: The 6-Column Transition Table

**What:** A mandatory table with 6 columns (one per channel) and N rows (one per section boundary). TC fills the Chromatic column with specific values. TC fills 2-3 additional columns with directional guidance. The builder completes the remaining columns during Phase 3.5 (see Layer 4 below).

**The transition table IS the central new artifact of PV2.** It makes channels structural by forcing the planner to THINK about all 6 at every boundary.

#### A. TC produces the transition table skeleton

```
## TRANSITION TABLE (MANDATORY)

| Boundary | Semantic Direction | Chromatic | Typographic | Spatial | Structural | Behavioral | Material |
|----------|-------------------|-----------|-------------|---------|------------|------------|----------|
| S1→S2 | DEEPENING | #FEF9F5→#F0EBE3 | COMPRESS | TIGHTEN | ADD | - | - |
| S2→S3 | INTENSIFYING | #F0EBE3→#E6DFD4 | COMPRESS | TIGHTEN | STRENGTHEN | ADD | - |
| S3→S4 | RESOLVING | #E6DFD4→#FEF9F5 | EXPAND | OPEN | LIGHTEN | - | - |

Legend: Direction words in CAPS = TC guidance. Specific values = TC decision.
"-" = no shift planned for this channel at this boundary.
Builder fills specific CSS values per channel during Phase 3.5.
```

TC provides:
1. **Chromatic column:** Fully specified (hex values, already done via zone backgrounds)
2. **Semantic Direction:** One word per boundary (DEEPENING, INTENSIFYING, RESOLVING...)
3. **2-3 additional channels:** Direction words (COMPRESS, TIGHTEN, ADD, LIGHTEN...) indicating which way each channel should shift

This is the SKELETON. The builder COMPLETES it with specific CSS values.

#### B. Handoff gate checks the skeleton (Wave 0.9 check #7)

```
[ ] Transition table present?
[ ] Chromatic column fully specified (hex values)?
[ ] Each boundary has >= 3 channels with direction guidance?
[ ] Each boundary has a semantic direction word?
```

Binary. If any boundary has < 3 channels specified, FAIL, return to TC.

#### C. Builder completes during Phase 3.5 (see Layer 4)

The builder takes TC's direction words and translates them to specific CSS:

```
| Boundary | Chromatic | Typographic | Spatial |
|----------|-----------|-------------|---------|
| S1→S2 | #FEF9F5→#F0EBE3 (TC) | 18px→16px body, +0.01em ls (builder) | 64px→48px padding (builder) |
```

#### D. Gate runner checks channel activity per boundary (SC-14)

```
SC-14: Channel Activity Gate
- For each section boundary, count how many channels have measurably shifted
- Channels measured: bg-color (chromatic), font-size (typographic),
  padding (spatial), border-width (structural)
- Threshold: >= 3 channels must shift at each major boundary
- Shift = value differs by more than the perception threshold for that channel
- PASS if all major boundaries have >= 3 active channels
- FAIL if any boundary has < 3
```

This is the PROGRAMMATIC ENFORCEMENT of multi-coherence (see Layer 4), but it starts with channel coverage.

### Summary: How Channels Become Inherent

| PV2 Stage | What Makes Channels Structural | Blocks If Missing? |
|-----------|-------------------------------|--------------------|
| TC Output | 6-column Transition Table skeleton (mandatory) | TC cannot complete Phase 4 |
| Handoff Gate | Check #7: table present, >= 3 channels per boundary | FAIL, return to TC |
| Recipe Phase 3.5 | Builder completes table with specific CSS values | Phase 3.5 gate |
| Gate Runner | SC-14: >= 3 channels shift at each boundary | FAIL, fix cycle |

---

## LAYER 4: MULTI-COHERENCE (>= 3 Channels Shifting Together) -- Currently Post-Hoc Only

### What Multi-Coherence Is

At each section boundary, >= 3 CSS channels shift SIMULTANEOUSLY in the SAME semantic direction. The reader doesn't notice any single shift. They register the ENSEMBLE as atmospheric change -- the page feels like it's progressing, not just continuing.

STYLED (2/4): Channels vary independently. Background changes here, typography changes there.
COMPOSED (3/4): Channels roughly correlate. General darkening = general compression.
DESIGNED (4/4): Every boundary has >= 3 channels shifting in the same direction with perception-proportional intensity. The ensemble creates atmospheric coherence.

### Where Multi-Coherence Gets Lost

Report 12 identifies 5 loss points. The most critical:

**The recipe is SEQUENTIAL BY CHANNEL, but multi-coherence requires SIMULTANEOUS BY BOUNDARY.**

```
Current recipe:
  Phase 3: Apply ALL backgrounds (chromatic for all sections)
  Phase 4: Apply ALL borders (structural for all sections)
  Phase 5: Apply ALL typography (typographic for all sections)

Multi-coherence requires:
  Boundary S1→S2: ALL channels shift TOGETHER
  Boundary S2→S3: ALL channels shift TOGETHER
```

The builder does backgrounds first (Phase 3), borders second (Phase 4), typography third (Phase 5). Each channel is decided in isolation. By Phase 8 (verification), if only 2 channels shifted at boundary S2→S3, the builder must retrofit coherence -- much harder than building it in.

### ARCHITECTURAL FIX: Phase 3.5 (Multi-Coherence Binding)

**What:** A new recipe phase inserted between Phase 3 (backgrounds, which establishes the chromatic direction) and Phase 4 (borders). In Phase 3.5, the builder COMPLETES the transition table by translating TC's direction words into specific CSS values for all remaining channels.

**Why this location:** After Phase 3, the builder has DECIDED the chromatic arc. Before Phase 4, the builder has NOT yet decided borders. Phase 3.5 is the moment where the builder can bind ALL remaining channels to the chromatic direction established in Phase 3.

#### A. Phase 3.5 specification in the recipe

```
PHASE 3.5: MULTI-COHERENCE BINDING (MANDATORY -- do not skip)

You have completed Phase 3 (backgrounds). Now, BEFORE writing any more CSS:

1. Read the Transition Table skeleton from the build plan.
2. For EACH boundary, complete the table:
   - The Chromatic column is DONE (your Phase 3 backgrounds).
   - For each additional channel with a direction word (e.g., "COMPRESS"):
     a. Choose the SPECIFIC CSS value that expresses this direction.
     b. Write it in the table cell.
     c. Verify: does this value move in the SAME semantic direction
        as your background shift?
   - Ensure >= 3 channels have specific CSS values at each boundary.

3. Write the PLANNED Cascade Value Table:
   Record the CSS you INTEND to apply at each boundary across all channels.
   You will VERIFY this against computed values in Phase 8.

4. Self-test: "Can I name the SEMANTIC DIRECTION at each boundary in one word?"
   If you cannot, the boundaries lack coherence. Revise.

Your completed transition table is the CONTRACT for Phases 4, 5, and 6.
When Phase 4 says "add borders," you add the borders specified in YOUR table.
When Phase 5 says "create typography zones," you create what YOUR table specifies.
Deviation from the table = coherence failure.
```

#### B. Phase 3.5 gate (binary check before proceeding to Phase 4)

The checkpoint after Phase 3.5 (one of the 5 mandatory agent-to-agent approvals):

```
PHASE 3.5 CHECKPOINT:
[ ] Completed transition table exists?
[ ] Every boundary has >= 3 channels with specific CSS values?
[ ] Every boundary has a named semantic direction?
[ ] Planned cascade value table exists?
[ ] Builder can name the semantic direction at each boundary?
```

If the planner-reviewer rejects: builder REVISES the table, does not proceed to Phase 4.

#### C. Phases 4-6 reference the completed table

```
Phase 4: Borders + Dividers
[...existing instructions...]
YOUR BORDER DECISIONS: Follow column 5 (Structural) of your completed transition table.
Do NOT add borders that contradict the semantic direction at each boundary.

Phase 5: Typography Zones
[...existing instructions...]
YOUR TYPOGRAPHY DECISIONS: Follow column 3 (Typographic) of your completed transition table.
Do NOT create a typography arc that contradicts the chromatic arc.
```

#### D. Phase 8 verifies against the planned table

```
Phase 8: Verification
E. CASCADE VALUE TABLE VERIFICATION:
   - Run getComputedStyle at EVERY section boundary.
   - Record actual values for: background, font-size, font-weight,
     letter-spacing, border-left, padding, color.
   - COMPARE against your Phase 3.5 planned cascade value table.
   - Discrepancies > 20% from plan = investigate. CSS specificity override?
   - Confirm >= 3 channels shifted at EVERY major boundary.
```

### Summary: How Multi-Coherence Becomes Inherent

| PV2 Stage | What Makes Multi-Coherence Structural | Blocks If Missing? |
|-----------|--------------------------------------|--------------------|
| TC Output | Transition table skeleton with direction words | Part of mandatory table |
| Recipe Phase 3.5 | Builder COMPLETES table with CSS values | Phase 3.5 checkpoint blocks Phase 4 |
| Recipe Phases 4-6 | "Follow your completed transition table" | Reference per phase |
| Recipe Phase 8 | Compare computed values vs planned table | Discrepancy = flag |
| Gate Runner | SC-14: >= 3 channel shifts at each boundary | FAIL, fix cycle |
| PA Audit | Auditors see ensemble atmospheric shift (or don't) | PA-05 score |

---

## LAYER 5: ANTI-SCALE MODEL (Governing Principle) -- Currently Zero Operational Encoding

### What the Anti-Scale Model Is

```
Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence)
```

- **Semantic density:** How much MEANING each CSS choice carries. Not "is it visible?" but "does it encode a content relationship?"
- **Restraint:** The ratio of plausible additions REJECTED to additions ACCEPTED. More rejection = higher restraint = richer result.
- **Spatial confidence:** Whether the page's macro rhythm communicates intentional proportion. Destroyed by whitespace voids, restored by bold proportional choices.

The model is MULTIPLICATIVE: zero on any factor = zero richness. A page with high semantic density but zero spatial confidence (the Ceiling experiment: 70-80% blank cream) scores zero.

### Where the Anti-Scale Model Gets Lost

Report 13 maps a complete compression chain:

```
Anti-Scale Model (350 lines of evaluative framework)
  -> Memory (1 line: the formula)
    -> PV2 Architecture (0 mentions)
      -> TC SKILL (0 mentions across 1,878 lines)
        -> Build Plan (0 lines)
          -> Recipe (0 lines)
            -> Builder CSS (0 lines)
```

Total operational encoding: 0/350 lines. INFINITY:1 compression. The most important evaluative discovery has zero operational representation.

PV2 encodes the SYMPTOMS (threshold minimums for semantic density; 108px cap for spacing restraint) but not the PRINCIPLE (the multiplicative relationship, the primacy of restraint over addition, the veto power of spatial confidence).

### ARCHITECTURAL FIX: Three Operational Proxies

The anti-scale model cannot be encoded as a single gate (it is inherently evaluative). But it CAN be encoded as THREE OPERATIONAL PROXIES -- one per factor -- that together approximate the model's intelligence through binary-testable mechanisms.

#### PROXY 1: Semantic Density -> Isomorphism Consultation Protocol

**What:** Every CSS decision the builder makes must reference the isomorphism table (or content-CSS map for FLAT mode). A binary self-test per phase: "For each CSS property I just set, can I name the content relationship it encodes? If I cannot, the property is DECORATION -- remove it."

**Where it becomes structural:**

TC already produces an isomorphism table (metaphor element -> CSS form). For FLAT mode, TC produces a simpler content-CSS map:

```
| Content Section | Content Type | CSS Treatment | Why |
|----------------|--------------|---------------|-----|
| Introduction | Orienting | Light bg, open spacing | Welcoming, accessible |
| Core Analysis | Analytical | Dense spacing, heavier borders | Concentrated evidence |
| Conclusion | Resolving | Return to light, wider spacing | Arrival, breathing |
```

**Recipe integration -- the "Name It" test (per-phase):**

```
Phase 3 [after applying backgrounds]:
SEMANTIC DENSITY CHECK: For each zone background you applied, state in
one phrase what content relationship it encodes.
  Zone 1: #FEF9F5 encodes ___
  Zone 2: #F0EBE3 encodes ___
If you cannot fill a blank, that zone background is DECORATION. Revise.

Phase 4 [after applying borders]:
SEMANTIC DENSITY CHECK: For each border you added, state what it separates
and WHY that separation matters to the reader.
  Border 1: separates ___ from ___ because ___
If you cannot fill a blank, that border is DECORATION. Remove.

Phase 6 [after element-level richness]:
SEMANTIC DENSITY CHECK: For each hover state, pull-quote style, or table
treatment you added, state the content relationship it serves.
If you cannot: REMOVE IT. Fewer well-justified treatments > many unjustified.
```

**Gate enforcement:** Not directly programmable. But Phase 8 self-check includes:

```
Phase 8 Self-Test A (Semantic Density):
"Count your CSS declarations. Count how many you can justify by referencing
the isomorphism table or content-CSS map. If < 80%, you have decoration debt.
Remove unjustified declarations until ratio >= 80%."
```

#### PROXY 2: Restraint -> Mechanism Rejection Log

**What:** The builder produces a REJECTION LOG alongside the cascade value table. For each of the 5 mechanism categories (S/T/M/B/R), the builder names one mechanism NOT deployed and states why.

**Where it becomes structural:**

**Recipe Phase 0 (mandatory deliverable):**

```
Phase 0: Content Analysis
[...existing instructions...]

RESTRAINT LOG (MANDATORY -- 5 entries minimum):
Before writing any CSS, list 5 mechanisms from the catalog that you will
NOT deploy on this page, with content-specific reasons:

| Category | Mechanism NOT Deployed | Why NOT |
|----------|----------------------|---------|
| Spatial | [e.g., progressive-disclosure] | [e.g., content is non-hierarchical] |
| Temporal | [e.g., scroll-reveal] | [e.g., content is reference, not narrative] |
| Material | [e.g., paper-texture] | [e.g., content is technical, texture adds noise] |
| Behavioral | [e.g., parallax] | [e.g., page is data-heavy, motion distracts] |
| Relational | [e.g., mirror-footer] | [e.g., content has no bookend structure] |

This log establishes what you CHOSE NOT TO DO. Quality =
what you rejected + what you accepted, not just what you accepted.
```

**Recipe Phase 6 STOP CHECK (mandatory):**

```
Phase 6: Element-Level Richness
[...existing instructions...]

STOP CHECK (MANDATORY before proceeding to Phase 7):
Review ALL CSS written in Phases 3-6. For each declaration:
  1. Can you name the content relationship it encodes? (If not: REMOVE)
  2. Is this the MINIMUM CSS needed to achieve the effect? (If not: SIMPLIFY)
  3. Would the page feel LESS designed if you removed this? (If not: REMOVE)

A page with 400 justified CSS lines is richer than 800 lines where 400
are unjustified. The flagship spent 227 lines on letter-spacing between
0.001em and 0.01em -- all sub-perceptual. Those 227 lines could have
been 11 components, 5 grids, 3 breakpoints.

Record: How many CSS lines did you REMOVE during this STOP CHECK? ___
Target: >= 10% of your Phase 3-6 CSS should be removed as unjustified.
```

**Gate enforcement:** Not directly programmable as a binary gate. But:

```
SC-15: Restraint Log Completeness
- Does the builder output contain a rejection log with >= 5 entries?
- Does each entry have a content-specific justification (not "not needed")?
- Binary: present and complete = PASS, absent or incomplete = FAIL
```

This is a TEXT gate (checking for artifact presence), not a computed-style gate. The gate runner can verify the rejection log file exists and has >= 5 table rows.

#### PROXY 3: Spatial Confidence -> Mass Distribution Check

**What:** At Recipe Phase 1 (HTML skeleton), the builder maps content mass per zone and flags any zone below 30% fill.

**Where it becomes structural:**

**Recipe Phase 1 (mandatory deliverable):**

```
Phase 1: HTML Skeleton
[...existing instructions...]

MASS DISTRIBUTION TABLE (MANDATORY):
Before writing CSS, estimate each zone's content mass:

| Zone | Content Sections | Estimated Fill | Spatial Signal |
|------|-----------------|----------------|----------------|
| Header | title + nav | 80-100% | N/A (always dense) |
| Zone 1 | [sections] | ___% | [if <30%: what deliberate spatial element?] |
| Zone 2 | [sections] | ___% | [if <30%: what deliberate spatial element?] |
| Zone 3 | [sections] | ___% | [if <30%: what deliberate spatial element?] |
| Footer | closure + links | 60-80% | N/A (always structured) |

ANY zone below 30% fill MUST contain at least one deliberate spatial signal
(centered heading, framing border, full-width hr) that communicates
"this space is INTENTIONALLY open." A zone below 30% with no spatial
signal = SPATIAL FAILURE. Merge with adjacent zone or add signal.

ANY zone below 20% fill MUST be merged with an adjacent zone. No exceptions.
```

**Gate enforcement:**

```
SC-16: Spatial Confidence Gate
- For each <section> element, compute: height of content-bearing children /
  total section height
- If ratio < 0.3 AND section contains no structural element (border, hr,
  centered heading with >= 24px margin), FAIL
- If ratio < 0.2, FAIL regardless
- This catches the Ceiling experiment's catastrophic whitespace (70-80% blank)
```

### Summary: How the Anti-Scale Model Becomes Inherent

| Factor | Operational Proxy | Where Structural | What Blocks |
|--------|------------------|-----------------|-------------|
| Semantic Density | "Name It" test per phase + isomorphism consultation | Recipe Phases 3, 4, 6, 8 | Phase 8 self-check: >= 80% justified |
| Restraint | Rejection Log (Phase 0) + STOP CHECK (Phase 6) | Recipe Phases 0, 6 | SC-15: log present with 5+ entries |
| Spatial Confidence | Mass Distribution Table (Phase 1) | Recipe Phase 1 | SC-16: no zone < 30% without spatial signal |

---

## THE COMPLETE ARCHITECTURAL MAP

### New Artifacts Required

| Artifact | Produced By | Consumed By | Lines | Purpose |
|----------|------------|-------------|-------|---------|
| Fractal Echo Table | TC Phase 4.7 | Builder (all phases), Gate SC-13 | ~15 | Scale coverage at 5 levels |
| Transition Table | TC Phase 4 (skeleton) + Builder Phase 3.5 (completion) | Builder Phases 4-6, Gate SC-14 | ~20-40 | 6-channel shift plan per boundary |
| Restraint Log | Builder Phase 0 | Gate SC-15 | ~10 | 5 mechanisms NOT deployed |
| Mass Distribution Table | Builder Phase 1 | Gate SC-16 | ~10 | Content fill % per zone |
| Planned Cascade Value Table | Builder Phase 3.5 | Builder Phase 8 (verification) | ~20-30 | Intended CSS at every boundary |

Total new artifact lines: ~75-105 per build. These are NOT additional TEXT INSTRUCTIONS. They are STRUCTURED TABLES that must EXIST for the pipeline to proceed.

### New Gates Required

| Gate | Layer | What It Checks | Type | Lines in gate-runner.js |
|------|-------|---------------|------|------------------------|
| HG-06 | Scales | Fractal Echo Table present, 5 rows, consistent direction | Text presence | ~10 |
| HG-07 | Channels | Transition Table present, >= 3 channels per boundary | Text presence | ~10 |
| SC-13 | Scales | CSS direction correlation across >= 3 scales | Computed style | ~30 |
| SC-14 | Multi-Coherence | >= 3 channels shift at each boundary | Computed style | ~40 |
| SC-15 | Anti-Scale (Restraint) | Rejection log present with >= 5 entries | Text presence | ~10 |
| SC-16 | Anti-Scale (Spatial) | No zone < 30% fill without spatial signal | Computed style | ~30 |

Total new gate lines: ~130. Added to existing ~300-line gate-runner.js.

### Modified Recipe Phases

| Phase | Current | Addition | Cost |
|-------|---------|----------|------|
| 0 | Content analysis | + Restraint Log (5 mechanisms NOT deployed) | +10 lines |
| 1 | HTML skeleton | + Mass Distribution Table (fill % per zone) | +10 lines |
| 3 | Zone backgrounds | + SCALE CHECK reference to Fractal Echo Table | +2 lines |
| NEW 3.5 | (does not exist) | Multi-Coherence Binding: complete transition table | +25 lines |
| 4 | Borders | + "Follow transition table column 5" + SCALE CHECK | +3 lines |
| 5 | Typography | + "Follow transition table column 3" + SCALE CHECK | +3 lines |
| 6 | Element richness | + STOP CHECK (restraint) + SCALE CHECK | +10 lines |
| 8 | Verification | + Planned vs actual cascade comparison + semantic density check | +10 lines |

Total recipe additions: ~73 lines. Current recipe: ~650 lines. New recipe: ~723 lines.

### Modified Handoff Gate (Wave 0.9)

Current: 5 checks. New: 7 checks.

```
[ ] Zone count 2-5?
[ ] BG colors >= 15 RGB delta between adjacent zones?
[ ] >= 2 grid layouts?
[ ] Per-category mechs met? (S/T/M/B/R: 1+ each)?
[ ] >= 3 transition types planned?
[ ] Fractal Echo Table: 5 rows, consistent direction? [NEW]
[ ] Transition Table: >= 3 channels per boundary? [NEW]
```

---

## THE INHERENCE TEST

For each layer, answer: can the pipeline PRODUCE OUTPUT without engaging this layer?

| Layer | Before This Design | After This Design |
|-------|-------------------|-------------------|
| 1. Thresholds | NO -- gates block (correct) | NO (unchanged) |
| 2. Scales | YES -- no gate checks scale coverage | NO -- HG-06 blocks if Fractal Echo Table missing |
| 3. Channels | YES -- only 3/6 channels gated | NO -- HG-07 blocks if Transition Table missing; SC-14 verifies |
| 4. Multi-Coherence | YES -- verified in Phase 8 but not enforced | NO -- Phase 3.5 checkpoint blocks Phase 4; SC-14 verifies |
| 5. Anti-Scale | YES -- zero operational encoding | PARTIALLY -- SC-15/SC-16 enforce restraint + spatial confidence; semantic density remains self-check |

Layer 5 (anti-scale) is the hardest to make fully inherent because semantic density is inherently evaluative. The "Name It" test is a self-check, not a binary gate. This is the CORRECT tradeoff: semantic density is where Opus fluency creates beyond recipes. The gate cannot verify MEANING, only PRESENCE of justification.

---

## WHAT THIS DOES NOT SOLVE

### The Recipe Ceiling at 3/4

This design raises the FLOOR from 1.5/4 (thresholds only) to ~2.5-3/4 (structured multi-coherence). It does NOT guarantee 4/4 (DESIGNED). The distance from 3/4 to 4/4 is COMPOSITIONAL FLUENCY -- the builder's ability to create emergent coherence that no recipe can specify. This is where Opus model selection and metaphor-driven building exceed recipe capacity.

### The Sequential-vs-Boundary Contradiction

Phase 3.5 MITIGATES but does not RESOLVE the fundamental tension between sequential-by-channel recipe execution and simultaneous-by-boundary multi-coherence. The builder still executes Phases 4-6 channel-by-channel. Phase 3.5 provides a CONTRACT (the completed transition table) that constrains per-channel execution, but the builder must hold that contract in active attention across three subsequent phases.

This is acceptable because:
1. The transition table is a CONCRETE ARTIFACT (not text instruction)
2. The recipe says "follow your transition table" at each phase (cross-reference)
3. The gate runner verifies the result (SC-14)
4. The PA audit catches perceptual failure that slips through

### The N=2 Content Problem

All evidence comes from 2 experiments on 1 content type (RESEARCH-SYNTHESIS). The transition table format may need adaptation for API docs (many short sections), tutorials (linear progression), or data-heavy pages (few boundaries, many components). The architecture is designed to be content-agnostic, but validation requires diverse content.

---

## SUMMARY: FROM TEXT TO STRUCTURE

| Layer | Before (Text) | After (Structure) |
|-------|--------------|-------------------|
| Thresholds | Binary gates | Binary gates (unchanged) |
| Scales | "Deploy at 5 scales" (TC instruction) | 5-row Fractal Echo Table + HG-06 gate + SC-13 |
| Channels | "Use 6 channels" (skill text) | 6-column Transition Table + HG-07 gate + SC-14 |
| Multi-Coherence | "Verify >= 3 channels" (Phase 8 text) | Phase 3.5 binding step + checkpoint + SC-14 |
| Anti-Scale | Zero operational encoding | Restraint Log + Mass Distribution + STOP CHECK + SC-15/SC-16 |

**Total cost:** ~73 lines to recipe, ~130 lines to gate runner, ~75-105 lines of mandatory artifacts per build, 2 new handoff checks. Zero new files. Zero new agents. Zero new waves.

**Total effect:** The compositional intelligence stack goes from 1/5 layers structurally enforced (thresholds only) to 5/5 layers structurally enforced (with Layer 5 partially self-check). The pipeline CANNOT skip scales, channels, multi-coherence, restraint, or spatial confidence because the handoff gate, recipe checkpoints, and programmatic gates all block.

The stack is no longer text. It is architecture.

---

**END REPORT**

**Statistics:**
- Sources read: 12 (PV2 diagram, 4 stack traces, 3 design reports, propagation analysis, 3 channel/scale traces, memory)
- New artifacts designed: 5 (Fractal Echo Table, Transition Table, Restraint Log, Mass Distribution Table, Planned Cascade Value Table)
- New gates designed: 4 (SC-13 through SC-16) + 2 handoff checks (HG-06, HG-07)
- Recipe modifications: 8 phases touched, ~73 lines added
- Key architectural move: Transition Table as central artifact (channels x boundaries matrix)
- Inherence score: 1/5 layers -> 5/5 layers (Layer 5 partial: semantic density remains self-check)
