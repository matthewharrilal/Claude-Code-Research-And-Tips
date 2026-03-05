# Mechanism Hardening Specification

**Date:** 2026-02-15
**Author:** coherence-designer (checklist-hardening team)
**Task:** Task #2 — Design mechanism interaction check + raise mechanism floor to 7
**Source Documents:** 20-checklist-gaming-audit.md, 18-middle-tier-checklist.md, mechanism-catalog.md

---

## EXECUTIVE SUMMARY

This specification addresses the #1 gaming surface identified in the adversarial audit: **no checklist item verifies mechanisms work TOGETHER.**

The current checklist verifies:
- ✅ Each mechanism is deployed (B3.1-B3.5 category presence)
- ✅ Each mechanism has a justification (B5.1)
- ✅ Mechanism count is within range (B4.1: 5-12 mechanisms)

The current checklist does NOT verify:
- ❌ Mechanisms reinforce each other to encode shared content dimensions
- ❌ Mechanisms are PERCEPTIBLE without developer tools (CSS differences could be 1px)
- ❌ Mechanism floor is appropriate for Middle tier (5 is Floor-tier territory)

**What this changes:**
- Adds NEW-1: Mechanism interaction check (multi-channel coherence)
- Adds NEW-2: Perceptibility floor (visible deployment verification)
- Modifies B4.1: Raises mechanism floor from 5 to 7 (Middle > Floor)

**Gaming resistance before:** 6/10 (Scenario 3A: 5 independent mechanisms pass all items)
**Gaming resistance after:** 8/10 (Compound check prevents independent mechanism padding)

---

## RESEARCH CONTEXT

### Gaming Audit Finding: Surface 3 (Cross-Item Coherence)

**Quote from 20-checklist-gaming-audit.md (lines 460-468):**

> NO ITEM in the checklist verifies that mechanisms work TOGETHER to create a unified spatial experience. Each mechanism is checked individually (B3.1-B3.5), each has a justification (B5.1), each category is covered (B3.6). But nowhere does the checklist ask:
> - "Do the mechanisms REINFORCE each other?"
> - "Does the sum exceed the parts?"
> - "Is there a SPATIAL ARGUMENT being made?"
>
> **THIS IS THE SINGLE LARGEST GAMING SURFACE.** Five independently justified mechanisms that don't interact produce a page with no spatial coherence.

### Gaming Scenario 3A: Five Categories, One Structural Pattern

**Quote from lines 126-140:**

> All 5 categories have 1 mechanism (B3.6 PASS), but the mechanisms all follow the same structural pattern — they all modify VERTICAL properties:
> - Spatial: #5 Dense/Sparse Alternation (vertical padding)
> - Hierarchy: #4 Spacing Compression (vertical padding)
> - Component: #10 Border-Left Semantic Signal (border-left, but primarily vertical flow)
> - Depth/Emphasis: #7 Zone Background Differentiation (background color changes on vertical sections)
> - Structure/Navigation: #13 Dark Header + 3px Border (vertical page chrome)
>
> **Result:** The page has "5-category breadth" but ZERO horizontal variation. Everything stacks vertically. No grid, no bento, no width variation, no columns. The page is a single-column stack with varying padding and colors.

**Anti-gaming measure proposed (lines 474-476):**

> **NEW-1** | Mechanism interaction check | "Name 2 pairs of mechanisms that REINFORCE each other (e.g., spacing compression + zone backgrounds both encode the same content dimension)." At least 1 pair documented. | Surface 3: cross-item coherence

### Mechanism Catalog Reference: Multi-Channel Coherence

**Quote from mechanism-catalog.md (lines 74-85):**

> **Ceiling (metaphor-driven multi-channel coherence):**
> - Builder has derived a metaphor (e.g., "geological strata") through Phases 1-3
> - Builder looks at catalog THROUGH the metaphor: "Geological strata have pressure gradients → spacing compression (#4). Strata have consolidation levels → border-weight (#1). Strata have distinct layers → zone backgrounds (#7)."
> - KEY REALIZATION: spacing compression, border-weight, AND zone backgrounds all encode the SAME thing — geological depth. They REINFORCE each other.
> - Selection logic: metaphor → shared semantic dimension → multiple mechanisms encoding that dimension simultaneously
>
> **The concrete difference in output:**
> - Middle: border-weight handles hierarchy, zone backgrounds handle section breaks, spacing handles rhythm — each independently solving different problems
> - Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" together — when you scroll down, borders get heavier AND backgrounds get darker AND spacing gets tighter, all saying "deeper" in three CSS channels at once

**This multi-channel coherence principle applies to Middle tier:** Even without metaphor derivation, Middle-tier pages should demonstrate that at least 2 mechanisms encode a SHARED content dimension. This is the difference between "mechanisms arranged on a page" and "mechanisms working as a system."

---

## NEW ITEM 1: MECHANISM INTERACTION CHECK

### Item Specification (NEW B4.4)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **NEW B4.4** | Mechanism interaction documented | Document at least 2 pairs of mechanisms that REINFORCE each other to encode a shared content dimension. Format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]." | Fewer than 2 reinforcing pairs documented, OR pairs documented without shared dimension explanation | Prevents independent mechanism padding. Mechanisms should work as a SYSTEM encoding content structure, not as isolated techniques applied to different problems. Multi-channel coherence is what creates spatial argument. |

### What Counts as "Reinforcing"?

**REINFORCING (valid pair):**
- Spacing compression (#4) + zone background differentiation (#7) both encode section importance
  - Compression: important sections get more space (sparse)
  - Zones: important sections get distinct background colors
  - Shared dimension: section importance encoded in TWO CSS channels (padding + background)

**REINFORCING (valid pair):**
- Border-weight gradient (#1) + typographic scale jumping (#11) both encode hierarchical depth
  - Border-weight: H1 gets 4px, H2 gets 3px, H3 gets 2px
  - Typography: H1 gets 2.5rem, H2 gets 1.625rem, H3 gets 1.375rem
  - Shared dimension: heading hierarchy encoded in TWO CSS channels (border + font-size)

**NOT REINFORCING (invalid pair):**
- Border-weight gradient (#1) + code block (#17) — different content features
  - Border-weight encodes heading hierarchy
  - Code block encodes syntax highlighting
  - NO shared dimension — these solve independent problems

**NOT REINFORCING (invalid pair):**
- Dark header (#13) + footer mirror (#14) — structural symmetry, not content encoding
  - These create page chrome balance
  - They don't encode a content property that varies across the page
  - Symmetry ≠ reinforcement

### Example Documentation Format

**Valid reinforcing pair 1:**
```
Mechanism #4 (Spacing Compression) + Mechanism #7 (Zone Background Differentiation)
both encode section importance BECAUSE the content has 3 distinct section types
(intro/detail/summary) that need differentiation. Intro sections get sparse padding
(80px) AND light background (#FEF9F5). Detail sections get dense padding (32px) AND
darker background (#FAF5ED). The TWO mechanisms reinforce the SAME structural hierarchy.
```

**Valid reinforcing pair 2:**
```
Mechanism #1 (Border-Weight Gradient) + Mechanism #11 (Typographic Scale Jumping)
both encode heading hierarchy BECAUSE the content has 3 heading levels (H1/H2/H3)
requiring clear visual weight differentiation. H1 gets 4px border + 2.5rem font.
H2 gets 3px border + 1.625rem font. The weight progression is visible in BOTH
border thickness and font size, reinforcing the hierarchy in two CSS channels.
```

**Invalid pair (different dimensions):**
```
Mechanism #2 (2-Zone Component DNA) + Mechanism #17 (Code Block) — INVALID
These solve different problems. 2-Zone DNA handles callout structure (label/body).
Code blocks handle syntax presentation. No shared content dimension.
```

### Why 2 Pairs Minimum?

**1 pair:** Could be coincidental. Not enough to demonstrate systematic thinking.

**2 pairs:** Establishes a pattern. Demonstrates the builder considered how mechanisms interact across the page, not just within one section.

**3+ pairs:** Better, but not required for Middle tier (that's Ceiling territory).

---

## NEW ITEM 2: PERCEPTIBILITY FLOOR

### Item Specification (NEW B4.5)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **NEW B4.5** | Mechanism perceptibility verified | All deployed mechanisms are VISIBLE to a reader without developer tools. If a mechanism's CSS values differ by less than 10% OR 8px (whichever is greater), the mechanism is NOT deployed. | Any mechanism has CSS differences below the perceptibility threshold (e.g., 48px vs 49px padding = imperceptible, width 98% vs 100% = imperceptible) | Prevents gaming via invisible deployment. A mechanism that exists in CSS but is imperceptible in rendering is decorative padding to hit a count target, not a functional design decision. The perceptibility floor makes "deployed" mean "visible." |

### Perceptibility Thresholds

**The 10% OR 8px Rule (whichever is greater):**

| Property | Base Value | 10% Threshold | 8px Threshold | Use Whichever Is Greater |
|----------|-----------|---------------|---------------|-------------------------|
| **Padding** | 48px | 4.8px → 5px | 8px | 8px (48px vs 56px = perceptible) |
| **Padding** | 80px | 8px | 8px | 8px (80px vs 88px = perceptible) |
| **Width** | 960px | 96px | 8px | 96px (960px vs 1056px = perceptible) |
| **Font size** | 16px | 1.6px → 2px | 8px | 8px (16px vs 24px = perceptible) |
| **Border** | 4px | 0.4px → 1px | 8px | 1px (4px vs 5px borderline, BUT 4px vs 3px = 25% = clearly perceptible) |
| **Background color** | #FEF9F5 | 10% lightness shift | N/A | Contrast ratio >= 1.05:1 (perceptible on most monitors) |

**Why this threshold?**
- **10%:** Below this, most readers won't notice the difference (Weber's Law for just-noticeable difference)
- **8px:** One spacing unit on the 4px base scale. Differences smaller than one unit are noise.
- **Whichever is greater:** Prevents both percentage gaming (48px vs 49px = 2%) and absolute gaming (960px vs 964px = 4px but imperceptible on large values)

### Examples (Passing vs Failing)

**PASS: Width Variation (#6)**
```css
.narrow-channel { max-width: 70%; }  /* 672px at 960px container */
.full-pool { max-width: 100%; }      /* 960px */
```
Difference: 288px = 30% of base. **PERCEPTIBLE** → mechanism deployed.

**FAIL: Width Variation (#6)**
```css
.narrow-channel { max-width: 98%; }  /* 940.8px */
.full-pool { max-width: 100%; }      /* 960px */
```
Difference: 19.2px = 2% of base. Below 10% AND below 96px threshold. **IMPERCEPTIBLE** → mechanism NOT deployed.

**PASS: Dense/Sparse Alternation (#5)**
```css
.section--sparse { padding: 80px 32px; }
.section--dense { padding: 32px; }
```
Difference: 48px = 60% of 80px. **PERCEPTIBLE** → mechanism deployed.

**FAIL: Dense/Sparse Alternation (#5)**
```css
.section--sparse { padding: 48px 32px; }
.section--dense { padding: 44px 32px; }
```
Difference: 4px = 8.3% of 48px. Below 10% AND below 8px threshold. **IMPERCEPTIBLE** → mechanism NOT deployed.

**PASS: Zone Background Differentiation (#7)**
```css
.zone--sparse { background: #FEF9F5; }   /* L* = 98 */
.zone--dense { background: #FAF5ED; }    /* L* = 96 */
```
Lightness difference: 2 points. Contrast ratio: ~1.08:1. **PERCEPTIBLE** (just barely) → mechanism deployed.

**FAIL: Zone Background Differentiation (#7)**
```css
.zone--sparse { background: #FEF9F5; }   /* L* = 98 */
.zone--dense { background: #FDF8F4; }    /* L* = 97.5 */
```
Lightness difference: 0.5 points. Contrast ratio: ~1.02:1. **IMPERCEPTIBLE** on most monitors → mechanism NOT deployed.

### Why This Matters (Gaming Prevention)

**Gaming scenario (from audit lines 353-373):**

> **Gaming move:** Deploy Width Variation (#6) by setting one paragraph to `max-width: 98%` and another to `max-width: 100%`. Technically, width variation exists. Perceptually, it is invisible.
>
> **Why it passes current checklist:** B3.1 says "at least one of: #5 Dense/Sparse Alternation, #6 Width Variation, #15 Bento Grid." The check is DEPLOYED, not EFFECTIVE. A 2% width difference is deployed but imperceptible.

**With perceptibility floor:**
- 2% width difference (19.2px on 960px container) is below 10% threshold AND below 96px threshold
- **FAIL** → mechanism NOT counted as deployed
- Builder must use perceptible width variation (e.g., 70% vs 100% = 30% difference = 288px) to pass

---

## MODIFICATION: MECHANISM FLOOR RAISE (B4.1)

### Current Item (B4.1)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B4.1 | Total mechanism count is 5-12 | Total unique mechanisms deployed is between 5 and 12 inclusive | Fewer than 5 (Floor-tier) or more than 12 (Ceiling-tier territory) | Middle-tier natural landing is 8-10, but 5-12 is the acceptable range. Below 5 = Floor behavior. Above 12 = Ceiling behavior (mechanism combinations expected). |

### Modified Item (NEW B4.1)

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **MOD B4.1** | Total mechanism count is 7-12 | Total unique mechanisms deployed is between 7 and 12 inclusive | Fewer than 7 (Floor-tier) or more than 12 (Ceiling-tier territory) | Middle-tier natural landing is 8-10, validated via tier model research. Floor tier is 5 mechanisms. Middle MUST be > Floor, therefore floor raised to 7. Below 7 = Floor behavior (insufficient vocabulary breadth). Above 12 = Ceiling behavior (multi-channel coherence expected). |

### Rationale for 7 (Not 8)

**Why not keep 5?**
- 5 mechanisms is the Floor-tier profile (Variant B deployed 5-7 mechanisms)
- Middle tier must be DISTINGUISHABLE from Floor
- Per-category minimum (1 per category = 5 minimum) should produce MORE than bare minimum

**Why not jump to 8?**
- 8-10 is the NATURAL LANDING for Middle when per-category minimum is applied
- Setting the floor at 8 makes 8 the TARGET (Goodhart's Law)
- Natural landings emerge from breadth; they shouldn't be mandated

**Why 7?**
- 7 = minimum Floor (5) + 2 additional mechanisms
- Forces breadth beyond bare per-category minimum (5) without mandating the natural landing (8-10)
- Creates friction against minimal compliance without creating a count target
- If builder gets exactly 7: natural outcome of content-mechanism fit at low end
- If builder gets 8-10: natural outcome of content-mechanism fit at expected range
- If builder gets 5-6: red flag that Middle-tier hypothesis isn't being tested

### Dependency Updates Required

**Items that reference "5-12" range:**

1. **A5.3** (Mechanism count as natural landing):
   - Current: "8-10 as 'what Middle naturally produces when breadth is ensured'"
   - Update: No change needed — this already describes 8-10 as natural landing, not floor

2. **B4.1** (already modified above)

3. **C1.1** (CSS line count):
   - Current: "350-500 lines" descriptive range
   - Update: No change needed — CSS lines are DESCRIPTIVE, not tied to mechanism count floor

4. **Scenario 1** in gaming audit (lines 30-42):
   - Current: "Mechanisms: exactly 5 total (1 per category -- minimum of 5-12 range in B4.1)"
   - Update: Documentation only — no checklist item to modify

**ONLY B4.1 needs modification.** Other references to "5-12" are either:
- Already describing 8-10 as natural landing (A5.3)
- Descriptive ranges unrelated to floor (C1.1)
- Gaming audit documentation (not checklist items)

---

## INTEGRATION INTO CHECKLIST

### Placement in Section B (Build Requirements)

**Current structure (excerpt from 18-middle-tier-checklist.md):**

```
## B4. Mechanism Deployment Count
B4.1 | Total mechanism count is 5-12
B4.2 | No mechanism deployed solely to hit a count target
B4.3 | Count emerged from breadth, not from targeting
```

**Modified structure:**

```
## B4. Mechanism Deployment Count
MOD B4.1 | Total mechanism count is 7-12 (raised from 5-12)
B4.2     | No mechanism deployed solely to hit a count target
B4.3     | Count emerged from breadth, not from targeting
NEW B4.4 | Mechanism interaction documented (2+ reinforcing pairs)
NEW B4.5 | Mechanism perceptibility verified (10% OR 8px threshold)
```

### Item Count Impact

**Current Section B:** 35 items (B1-B9)
**After modification:** 37 items (B1-B9, with B4 expanding from 3 to 5 items)

**Total checklist:** 129 → 131 items

---

## CRITICAL-7 IMPACT

**Current Critical-7 (lines 420-426 in checklist):**

1. B2.1 — Container width 940-960px
2. B3.6 — All 5 mechanism categories represented
3. B7.1 — border-radius: 0
4. B7.2 — box-shadow: none
5. B1.2 — Phases 1-3 skipped
6. E1.1 — Clear verdict stated
7. B8.2 — Always-load protocol completed

**Recommendation:** ADD NEW B4.4 (mechanism interaction) to Critical set → **Critical-8**

**Rationale:**
- B4.4 addresses the SINGLE LARGEST GAMING SURFACE (Surface 3: no cross-item coherence check)
- Without B4.4: page can pass all 129 items with 5-7 independent mechanisms
- With B4.4: page must demonstrate mechanisms work as a SYSTEM, not just as collection

**Updated Critical-8:**
1. B2.1 — Container width 940-960px (THE #1 Phase D failure mode)
2. B3.6 — All 5 mechanism categories represented (core Middle differentiator)
3. **NEW B4.4 — Mechanism interaction documented (prevents independent padding)**
4. B7.1 — border-radius: 0 (soul constraint)
5. B7.2 — box-shadow: none (soul constraint)
6. B1.2 — Phases 1-3 skipped (defines Middle experiment validity)
7. E1.1 — Clear verdict stated (experiment purpose)
8. B8.2 — Always-load protocol completed (Track 1 failure cause)

---

## VALIDATION EXAMPLES

### Example 1: Middle-Tier Page (PASS)

**Mechanisms deployed:** 9 total
1. Border-weight gradient (#1) — heading hierarchy
2. 2-Zone Component DNA (#2) — callout structure
3. Spacing compression (#4) — section importance
4. Dense/sparse alternation (#5) — rhythm
5. Zone background differentiation (#7) — section breaks
6. Confidence encoding via color (#9) — callout types
7. Border-left semantic signal (#10) — callout emphasis
8. Typographic scale jumping (#11) — heading scale
9. Dark header (#13) — page chrome

**Mechanism count check (MOD B4.1):** 9 mechanisms → 7-12 range → **PASS**

**Interaction check (NEW B4.4):**
- Pair 1: #4 (spacing compression) + #7 (zone backgrounds) encode section importance
- Pair 2: #1 (border-weight) + #11 (typography) encode heading hierarchy
- **2 reinforcing pairs documented → PASS**

**Perceptibility check (NEW B4.5):**
- #5 dense/sparse: 80px vs 32px = 48px difference (60%) → **PERCEPTIBLE**
- #7 zone backgrounds: #FEF9F5 vs #FAF5ED = 2-point lightness difference → **PERCEPTIBLE**
- #1 border-weight: 4px vs 3px vs 2px = 25-33% differences → **PERCEPTIBLE**
- All mechanisms above threshold → **PASS**

**Overall verdict:** PASS all three new/modified items

---

### Example 2: Minimal Compliance Attempt (FAIL)

**Mechanisms deployed:** 6 total
1. Border-weight gradient (#1) — H1 gets 4px, H2 gets 3px (only 2 levels)
2. Zone background (#7) — section A: #FEF9F5, section B: #FDF8F4 (barely different)
3. Dense/sparse alternation (#5) — section padding 48px vs 49px vs 50px
4. Border-left signal (#10) — 4px on callouts
5. Dark header (#13) — page chrome
6. Code block (#17) — syntax highlighting

**Mechanism count check (MOD B4.1):** 6 mechanisms → 7-12 range → **FAIL** (below floor)

**Interaction check (NEW B4.4):**
- Attempted pair: #1 (border-weight) + #7 (zone backgrounds) encode... different things?
  - Border-weight encodes heading hierarchy (H1 vs H2)
  - Zone backgrounds encode section types (intro vs detail)
  - NO shared dimension → **INVALID PAIR**
- Only 0 valid reinforcing pairs → **FAIL** (need 2)

**Perceptibility check (NEW B4.5):**
- #5 dense/sparse: 48px vs 49px vs 50px → max difference 2px = 4% of 48px → **IMPERCEPTIBLE** → FAIL
- #7 zone backgrounds: #FEF9F5 vs #FDF8F4 → 0.5-point lightness difference, contrast ~1.02:1 → **IMPERCEPTIBLE** → FAIL
- 2 mechanisms below perceptibility threshold → **FAIL**

**Overall verdict:** FAIL all three new/modified items

**What this demonstrates:** Minimal compliance gaming is now MUCH harder. Can't pad to hit count with imperceptible mechanisms. Can't deploy independent mechanisms without demonstrating interaction. Can't stay at Floor-tier mechanism count.

---

## ANTI-GAMING EFFECTIVENESS ANALYSIS

### Before Hardening (Gaming Surface 3)

**Scenario 3A outcome:**
- 5 mechanisms deployed (1 per category)
- All mechanisms modify vertical properties only (no horizontal variation)
- Each mechanism independently justified
- No interaction between mechanisms
- **PASSES** current B3.1-B3.6 (category coverage) ✓
- **PASSES** current B4.1 (5-12 range) ✓
- **PASSES** current B5.1 (individual justifications) ✓

**Result:** Page has 5-category breadth but ZERO spatial coherence. Mechanisms don't work together.

---

### After Hardening (With NEW B4.4, NEW B4.5, MOD B4.1)

**Same scenario, re-evaluated:**
- 5 mechanisms deployed (1 per category)
- All mechanisms modify vertical properties only
- Each mechanism independently justified
- **FAILS** MOD B4.1: 5 mechanisms < 7 floor ✗
- **FAILS** NEW B4.4: mechanisms don't reinforce (each solves different problem) ✗
- **DEPENDS** on NEW B4.5: perceptibility needs CSS inspection

**Forced adaptations to pass:**
1. Must deploy 7+ mechanisms (not just 5)
2. Must document 2+ pairs that encode shared dimensions
3. Must ensure CSS differences are perceptible (not 1px gaming)

**Result:** Page must demonstrate SYSTEM thinking, not just COVERAGE.

---

### Gaming Resistance Score Update

**Current checklist (from audit line 520):** 6/10 gaming resistance

**With these modifications:** 8/10 gaming resistance

**Improvement:**
- Surface 3 (cross-item coherence) → CLOSED by NEW B4.4
- Scenario 7 (invisible compliance) → CLOSED by NEW B4.5
- Scenario 1 (minimal compliance) → PARTIALLY CLOSED by MOD B4.1 (floor raised)

**Remaining gaps (irreducible):**
- PA-05 "feels designed" still has subjective component (1/10)
- Builder skill/judgment still matters for semantic fit (1/10)

---

## IMPLEMENTATION NOTES

### For Checklist Users (Builders)

**When applying NEW B4.4 (interaction check):**
1. After deploying mechanisms, scan the page for SHARED content dimensions
2. Look for 2+ mechanisms that encode the SAME structural property (hierarchy, importance, section type, etc.)
3. Document using format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]"
4. If you can't find 2 pairs → your mechanisms are too independent → add mechanisms that reinforce existing ones

**When applying NEW B4.5 (perceptibility check):**
1. Open browser dev tools, inspect computed styles
2. For each mechanism, measure CSS differences (padding values, widths, colors)
3. Apply 10% OR 8px threshold test
4. If any mechanism is below threshold → increase the difference OR remove the mechanism from count
5. Example fix: Change 48px vs 49px (imperceptible) → 48px vs 56px (perceptible 8px difference)

**When applying MOD B4.1 (7-12 floor):**
- No action needed if deploying per-category minimum (1 per category = 5, but natural landing is 8-10)
- If landing at 5-6 → content may not support Middle tier, OR builder is padding minimally
- Target natural landing (8-10), don't target floor (7)

---

### For Checklist Evaluators (Auditors)

**Verification protocol for NEW B4.4:**
1. Read mechanism interaction documentation
2. For each claimed pair, verify:
   - Are both mechanisms actually deployed? (check B3.1-B3.5)
   - Do they encode the SAME content dimension? (not just "both affect spacing")
   - Is the shared dimension documented with content evidence?
3. Count valid pairs. Need 2+ to pass.

**Verification protocol for NEW B4.5:**
1. Inspect page in browser at 1440px
2. Disable scroll animations (if any): `animation: none !important`
3. For each deployed mechanism, measure computed values:
   - Padding: compare adjacent sections
   - Width: compare narrow vs wide elements
   - Colors: check contrast ratio (use browser dev tools or online checker)
   - Borders: measure thickness differences
4. Apply threshold: 10% OR 8px, whichever is greater
5. Mark imperceptible mechanisms as NOT DEPLOYED

**Verification protocol for MOD B4.1:**
1. Count total unique mechanisms (same as before)
2. Check range: 7-12 (raised from 5-12)
3. If count is 5-6 → FAIL (Floor-tier)
4. If count is 13+ → FAIL (Ceiling-tier, but note this for follow-up: may indicate wrong tier classification)

---

## FORWARD COMPATIBILITY

### Wave 2 Modifications (Future)

These items are compatible with planned Wave 2 modifications:

**M6 (Semantic value justification):**
- NEW B4.4 requires documenting shared dimensions → this IS semantic reasoning
- No conflict — M6 would ENHANCE B4.4 by requiring semantic values (not just "hierarchy")

**M7 (Combination guidance):**
- NEW B4.4 requires demonstrating mechanism combinations → this IS combination thinking
- No conflict — M7 would provide lookup tables for valid combinations, making B4.4 easier to satisfy

**M1 (Per-category minimum):**
- MOD B4.1 raises floor from 5 to 7
- M1 changes "sample 2-4" to "1+ per category" (breadth, not count)
- Compatible — per-category minimum (5) + content-mechanism fit should naturally produce 7-10 mechanisms

### Ceiling-Tier Adaptation

If these items are applied to Ceiling tier (12-18 mechanisms):

**MOD B4.1:** Change range to 12-18 (Ceiling natural landing)

**NEW B4.4:** Increase pair requirement to 3-4 pairs (Ceiling has more mechanisms → more opportunities for multi-channel coherence)

**NEW B4.5:** Keep same threshold (perceptibility is viewport-dependent, not tier-dependent)

---

## CONCLUSION

**What this specification delivers:**

1. **NEW B4.4 (Mechanism Interaction Check)**
   - Verifies mechanisms work as a SYSTEM, not just as collection
   - Requires 2+ reinforcing pairs encoding shared content dimensions
   - Closes Surface 3 (cross-item coherence), the SINGLE LARGEST gaming surface
   - Format: "Mechanism X + Mechanism Y both encode [dimension] BECAUSE [content property]"

2. **NEW B4.5 (Perceptibility Floor)**
   - Verifies deployed mechanisms are VISIBLE without dev tools
   - Threshold: 10% OR 8px (whichever is greater)
   - Prevents gaming via invisible CSS differences (48px vs 49px padding)
   - Closes Scenario 7 (invisible compliance)

3. **MOD B4.1 (Mechanism Floor Raise)**
   - Raises floor from 5 to 7 mechanisms
   - Ensures Middle > Floor (5 mechanisms is Floor-tier profile)
   - Creates friction against minimal compliance without mandating natural landing (8-10)
   - Partially closes Scenario 1 (minimal compliance)

**Gaming resistance improvement:** 6/10 → 8/10

**Critical-7 expansion recommendation:** Add NEW B4.4 → Critical-8 (mechanism interaction is as critical as category coverage)

**Implementation ready:** All items are binary pass/fail, measurable, and compatible with current checklist structure.

---

**END SPECIFICATION**

*Next steps: Integration into 18-middle-tier-checklist.md by checklist-integrator (Task #5)*
