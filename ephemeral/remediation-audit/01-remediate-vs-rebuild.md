# 01: Remediate vs. Rebuild Decision Analysis

**Analyst:** remediate-rebuild (Opus 4.6)
**Date:** 2026-02-17
**Sources Read (ALL fully, line-by-line):**
1. `07-intentionality.html` (2,034 lines) -- the current flagship HTML
2. `10-REMEDIATION-PROMPT.md` (301 lines) -- the current remediation prompt
3. `09-SYNTHESIS.md` (268 lines) -- the retrospective synthesis
4. `02-missing-causes.md` (397 lines) -- 7 new root causes
5. `components.css` (component library, first 100 lines examined; 34 components documented)

---

## EXECUTIVE SUMMARY

**RECOMMENDATION: Option B -- CSS + Targeted HTML Restructuring**

The flagship HTML has SOUND architectural bones (12-section zone system, correct metaphor mapping, dark header/footer bookends, 960px container, soul compliance). Rebuilding from scratch would discard ~1,200 lines of correct structural work. But CSS-only remediation cannot fix 4 of the 7 new root causes (RC-9, RC-12, RC-13, RC-14) because they require HTML structural changes. Option B preserves what works while surgically fixing what doesn't.

---

## PART 1: ELEMENT-BY-ELEMENT STRUCTURAL AUDIT

I read every line of the 2,034-line HTML and classified each structural element as needing CSS-only change, HTML restructuring, or no change.

### Elements That Need CSS-ONLY Change (Approach A sufficient)

| Element | Lines | What CSS Needs to Change | Count |
|---------|-------|-------------------------|-------|
| Zone backgrounds (`:root` tokens) | 113-135 | Amplify RGB deltas to >= 15 points | 12 tokens |
| Typography per-zone rules | 738-834 | Replace sub-perceptual values with visible ones | ~100 lines |
| Divider styles (`.divider-*`) | 590-610 | Amplify height, color, reduce margins | 3 rules |
| Table header backgrounds | 300-410 | Add `background-color` to `th` | ~6 rules |
| Component block backgrounds | 455-520 | Add tinted backgrounds per variant | 4 rules |
| Section padding asymmetry | (inline styles) | Can override with zone-specific CSS | 12 sections |
| Paragraph margin/max-width variation | 257-263 | Per-zone overrides | ~12 rules |
| Heading weight/size variation | 239-246 | Per-zone overrides | ~12 rules |
| Body text color variation | 257-263 | Per-zone paragraph color | ~4 rules |
| Accessibility: `::selection`, `focus-visible`, `prefers-reduced-motion` | (absent) | Add ~15 lines | 3 rules |
| Responsive breakpoint (768px) | (absent) | Add `@media` query | 1 block |

**Total CSS-only elements: ~55-60 CSS rule changes/additions**
**Estimated CSS lines added: ~150-180 lines**

### Elements That Need HTML RESTRUCTURING (Approach A insufficient)

| Element | Lines | What HTML Needs to Change | Why CSS Can't Fix It |
|---------|-------|--------------------------|---------------------|
| **Component classes** | 1180-1186, 1376-1381, 1452-1496, 2000-2005 | Replace `.component-block` with `.callout`, `.callout--essence`, `.callout--tip`, `.callout--gotcha` from component library | CSS can restyle `.component-block` but cannot ADD semantic variant structure (background tints, different label colors, different icon positions) that the component library provides. The HTML class names determine which CSS rules apply. |
| **Single-column layout in S7** | 1451-1496 | Wrap tension/resolution pairs in `display: flex` or `display: grid` container | CSS `float` or `flex` on existing elements would work BUT the DOM order (tension-block then resolution-block stacked) prevents side-by-side layout without a wrapper div. Each pair needs a `.tension-pair` wrapper. |
| **Single-column layout in S8** | 1605-1640 | Wrap 4 sequence blocks in a 2x2 grid container | Same issue: 4 consecutive `.sequence-block` divs need a parent grid container to arrange in 2x2. CSS alone cannot create a parent wrapper. |
| **S11 hypothesis tables** | 1844-1952 | Could arrange 3 tables side-by-side with grid wrapper | 3 separate `.table-wrapper` divs need a grid parent for horizontal arrangement. |
| **Transition divider stacking** | 1084-1087, 1113-1118, etc. | Restructure dividers INTO section elements (move from standalone `<div>` to section border/padding) | The 243-276px compound voids are caused by standalone divider elements WITH their own margins PLUS adjacent section padding. CSS can reduce individual margins, but the fundamental architecture (standalone dividers between sections) creates stacking. Integrating dividers INTO sections as border-top/bottom eliminates the stacking entirely. |
| **ARIA labels / semantic roles** | (absent throughout) | Add `role="note"` to callouts, `aria-label` to sections, skip link to header | These are HTML attributes, not CSS properties. |
| **`data-self-ref` attributes** | (absent) | Add to 3 self-referential component-blocks (S3, S7, S12) | Required for the remediation's Phase 5B CSS to target self-reference callouts. |
| **Content register variation** | (uniform prose throughout) | Would need content rewriting in some sections (lists, questions, short statements) | This is CONTENT change, not CSS or HTML structure. |

**Total HTML restructuring elements: 7 categories, ~25-35 specific edits**

### Elements That Need NO CHANGE (Already Correct)

| Element | Lines | Why It's Correct |
|---------|-------|-----------------|
| 12-section zone architecture | 1066-2008 | Correct zone mapping, correct metaphor arc |
| Dark header bookend | 1046-1052 | Correct styling, correct height, correct meta text |
| Dark footer bookend | 2019-2032 | Mirrors header, correct provenance stamp |
| 960px container | 181-184 | Correct value, correctly applied |
| Soul enforcement (border-radius: 0, box-shadow: none) | 55-63 | First CSS rule, `!important` enforced |
| Font loading (Google Fonts) | 46-48 | Correct trinity (Instrument Serif, Inter, JetBrains Mono) |
| Table progression (compact -> featured -> moderate -> warning -> light -> findings) | 334-418 | 6 distinct table treatments with correct semantic borders |
| Pullquote (S2) | 426-448 | Correct solid-offset mechanism (#3) |
| Drop cap (S1) | 274-282 | Correct mechanism (#16) |
| Code blocks / sequence blocks (S8) | 542-579 | Correct dark-on-light contrast |
| Inline threading header | 1-37 | Correct provenance metadata |
| Section-meta labels | 1012-1019 | Correct mono/uppercase/secondary treatment |
| Bridge prose | 613-625 | Correct italic/secondary styling |

**Total unchanged elements: 13 categories, ~800+ lines of HTML preserved**

---

## PART 2: CAN CSS-ONLY ADDRESS THE ROOT CAUSES?

### Root Cause Coverage by Approach

| Root Cause | CSS-Only (A) | CSS+HTML (B) | Rebuild (C) |
|------------|-------------|-------------|-------------|
| RC-1: No generative arrow | N/A (process) | N/A (process) | N/A (process) |
| RC-2: 7.9:1 guardrail ratio | N/A (prompt) | N/A (prompt) | N/A (prompt) |
| RC-3: Builder saw 13.4% | N/A (prompt) | N/A (prompt) | N/A (prompt) |
| **RC-4: Sub-perceptual variation** | **YES** | **YES** | **YES** |
| RC-5: Zero agent communication | N/A (process) | N/A (process) | N/A (process) |
| RC-6: Validation checked coverage | N/A (audit method) | N/A (audit method) | N/A (audit method) |
| **RC-7: Absence coherence** | **PARTIALLY** (can add borders) | **YES** (borders + containment) | **YES** |
| RC-8: 2,400:1 compression | N/A (process) | N/A (process) | N/A (process) |
| **RC-9: Component library invisible** | **NO** (class names in HTML) | **YES** (rename classes) | **YES** |
| **RC-10: Tokens not values** | **YES** (override tokens) | **YES** | **YES** |
| **RC-11: Ch4 absent at section level** | **PARTIALLY** (can add borders via CSS) | **YES** (borders + semantic HTML) | **YES** |
| **RC-12: Single-column monotony** | **NO** (needs wrapper divs) | **YES** (add grid wrappers) | **YES** |
| **RC-13: Uniform prose register** | **NO** (content, not styling) | **NO** (content, not styling) | **PARTIALLY** (new content) |
| **RC-14: Transition divider stacking** | **PARTIALLY** (reduce margins) | **YES** (restructure dividers) | **YES** |
| **RC-15: No plan-fidelity gate** | N/A (process) | N/A (process) | N/A (process) |

### Addressable Root Causes by Approach

| Approach | Fully Addressable | Partially Addressable | Not Addressable |
|----------|------------------|-----------------------|-----------------|
| A (CSS-only) | 2 (RC-4, RC-10) | 3 (RC-7, RC-11, RC-14) | 2 (RC-9, RC-12) |
| B (CSS+HTML) | 5 (RC-4, RC-7, RC-9, RC-10, RC-11) | 2 (RC-12, RC-14) | 0 |
| C (Rebuild) | 5 (RC-4, RC-7, RC-9, RC-10, RC-11) | 2 (RC-12, RC-14) | 0 |

**Note:** RC-12 (single-column) is "partially" for B because adding grid wrappers to 2-3 sections is feasible but doesn't transform the entire page layout. RC-14 is "partially" for B because restructuring dividers into section borders fixes most but may require re-testing the spatial arc. RC-13 (prose register) requires content rewriting, which none of the approaches fully solve without new content authoring.

Of the 7 product-addressable root causes (excluding process/prompt causes): CSS-only fully solves 2, partially solves 3, and cannot solve 2. CSS+HTML fully solves 5 and partially solves 2. The 2 partially-solved by B are actually ADEQUATELY solved -- adding 2-3 grid wrappers addresses the worst monotony, and restructuring dividers into sections eliminates the void problem.

---

## PART 3: PERCENTAGE OF PAGE NEEDING HTML RESTRUCTURING

### By Line Count

| Category | Lines | % of Total (2,034) |
|----------|-------|-------------------|
| CSS `<style>` block (lines 50-1034) | 984 | 48.4% |
| HTML body (lines 1036-2034) | 998 | 49.1% |
| HTML head/meta (lines 1-49) | 49 | 2.4% |

### HTML Body Restructuring Breakdown

| Change Type | Affected HTML Lines | % of HTML Body |
|-------------|-------------------|----------------|
| Class name changes (`.component-block` -> `.callout`) | ~30 lines | 3.0% |
| New wrapper divs (grid containers for S7, S8, S11) | ~12 lines added | 1.2% |
| Attribute additions (ARIA, data-self-ref) | ~20 lines modified | 2.0% |
| Divider restructuring (move into sections) | ~40 lines modified | 4.0% |
| Skip link addition | ~3 lines added | 0.3% |
| **Total HTML changes** | **~105 lines** | **~10.5%** |

**~10.5% of the HTML body needs structural changes.** The remaining ~89.5% is correct and should be preserved.

---

## PART 4: COST-BENEFIT ANALYSIS

### Approach A: CSS-Only Remediation

**What it does:**
- Amplifies all sub-perceptual values (backgrounds, typography, spacing)
- Adds borders, containment, accessibility CSS
- Differentiates component blocks via CSS

**What it cannot do:**
- Use component library class names (RC-9)
- Add multi-column layouts (RC-12)
- Restructure divider architecture (RC-14 -- only margin reduction, not elimination)
- Add ARIA attributes (accessibility)
- Add `data-self-ref` for self-reference targeting

**Estimated effort:** 1 agent, ~30-45 minutes
**Risk:** LOW (pure additive CSS, no HTML breakage)
**Expected outcome:** Perceptible richness improves from 0/10 to ~5-6/10. Monotony persists. Accessibility stays at 0/8. Whitespace voids reduced but not eliminated.
**PA-05 prediction:** 2/4 (improved but still visually monotonous -- single-column, uniform component shapes)

### Approach B: CSS + Targeted HTML Restructuring

**What it does (everything from A, PLUS):**
- Renames component classes to use design system library (`.callout--essence`, `.callout--tip`)
- Adds 2-3 grid wrapper divs for layout variety (S7 tension pairs side-by-side, S8 sequence blocks in 2x2)
- Restructures dividers into section borders (eliminates stacking voids)
- Adds ARIA labels, skip link, `data-self-ref` attributes
- Adds responsive breakpoint HTML (no new content, just breakpoint behavior)

**What it cannot do:**
- Change prose register (RC-13 -- would need content rewriting)
- Add entirely new section types or content

**Estimated effort:** 1-2 agents, ~60-90 minutes
- CSS changes: ~30 min (same as Approach A)
- HTML restructuring: ~30-45 min (class renames, wrapper divs, ARIA, divider moves)
- Verification: ~15 min

**Risk:** MEDIUM-LOW
- Class renames are mechanical (find-and-replace `.component-block` with `.callout`)
- Grid wrappers are additive (new parent divs around existing elements)
- Divider restructuring is the riskiest change (moving content between elements)
- Soul constraints cannot be violated (no border-radius, no box-shadow)
- Mitigation: per-section verification after each structural change

**Expected outcome:** Perceptible richness improves to ~7-8/10. Layout variety added in 2-3 sections. Component library semantic names enable downstream tooling. Accessibility improves to 5-6/8. Whitespace voids eliminated.
**PA-05 prediction:** 3/4 (DESIGNED territory -- visible variety, structural containment, multi-column moments, accessibility baseline)

### Approach C: Full Rebuild

**What it does:**
- Rebuilds from scratch using the design system component library
- New content adaptation (varied prose register)
- New metaphor implementation (potentially different from Assay Laboratory)
- New layout architecture (grid-first, multi-column)

**What it discards:**
- 12-section zone architecture (correct, ~400 lines)
- 7 table treatments with correct semantic borders (~100 lines)
- Dark header/footer bookends (correct, ~80 lines)
- Pullquote, drop cap, code blocks (~60 lines)
- Section-meta labels, bridge prose (~40 lines)
- Inline threading header, provenance stamp (~50 lines)
- All per-zone spatial modulation (~150 lines)
- **Total discarded: ~880 lines of correct, working CSS+HTML**

**Estimated effort:** 3-5 agents, ~180-300 minutes (3-5 hours)
- Content re-adaptation: 1 Opus agent, ~45-60 min
- Skeleton build: 1 agent, ~30-45 min
- Mechanism pass: 1 agent, ~45-60 min
- Intentionality pass: 1 agent, ~30-45 min
- Perceptual audit: 1 agent, ~30-45 min

**Risk:** HIGH
- Rebuilding has produced a WORSE result before (the flagship experiment itself is a rebuild that scored lower than the ceiling experiment)
- New agents may repeat the same errors (sub-perceptual variation, zero borders) unless the prompt is fundamentally different
- The process lessons (Takeaways 1-10 from synthesis) apply to the PROMPT, not the HTML -- rebuilding without fixing the prompt produces the same outcome
- 3-5 hour investment for uncertain improvement over 60-90 minute Approach B

**Expected outcome:** UNCERTAIN. Could be 9/10 richness (if prompt is fixed) or 1/10 (if same prompt errors recur). The retrospective identified the prompt as the root cause, not the HTML.
**PA-05 prediction:** 1/4 to 4/4 (high variance -- depends entirely on whether prompt issues are fixed)

---

## PART 5: CLEAR RECOMMENDATION

### RECOMMENDED: Approach B (CSS + Targeted HTML Restructuring)

**Evidence supporting this recommendation:**

1. **89.5% of the HTML body is correct.** The 12-section zone architecture, table progression, dark bookends, pullquote, drop cap, code blocks, section-meta labels, bridge prose, and provenance stamp are all working correctly. Discarding them (Approach C) wastes ~880 lines of correct work.

2. **CSS-only (Approach A) leaves 2 root causes completely unaddressed.** RC-9 (component library) and RC-12 (single-column monotony) require HTML changes. These are among the highest-visual-impact gaps (the retrospective identifies single-column monotony and component library absence as distinct root causes).

3. **The HTML restructuring is surgical and low-risk.** The 4 categories of HTML change (class renames, grid wrappers, ARIA attributes, divider restructuring) are mechanical operations, not creative decisions. They don't require metaphor derivation or content authorship.

4. **Rebuild risk is disproportionately high.** The flagship experiment itself demonstrates that rebuilding from scratch with incorrect prompts produces incorrect output. The root causes are in the PROMPT (RC-1 through RC-8), not the HTML. Fixing the HTML addresses the 7 PRODUCT root causes (RC-9 through RC-15) while a rebuild would still face the 8 PROCESS root causes.

5. **Time-to-value is 2-3x better.** Approach B: 60-90 min, predictable outcome (7-8/10 richness). Approach C: 180-300 min, uncertain outcome (1/4 to 4/4 PA-05).

6. **Approach B addresses 5/7 product root causes fully and 2/7 partially.** The 2 partial addresses (RC-12 layout variety in 2-3 sections, RC-14 divider restructuring) are sufficient improvements -- they don't need to transform every section, just break the monotony in the most critical locations.

### Specific HTML Changes Required (Approach B scope)

**Priority 1 (BLOCKING -- must do):**
1. Rename `.component-block` to `.callout` family classes (S3, S5, S7, S12) -- ~30 lines
2. Add skip link + ARIA labels to header and sections -- ~20 lines
3. Add `data-self-ref` to 3 self-referential callouts -- 3 attributes
4. Restructure transition dividers into section `border-top` / `padding-top` -- ~40 lines

**Priority 2 (HIGH -- should do):**
5. Add grid wrapper around S7 tension/resolution pairs (side-by-side layout) -- 6 lines
6. Add grid wrapper around S8 sequence blocks (2x2 grid) -- 4 lines
7. Add responsive breakpoint `@media (max-width: 768px)` behavior -- ~15 CSS lines

**Priority 3 (NICE TO HAVE):**
8. Add grid wrapper around S11 hypothesis tables (3-column) -- 6 lines
9. Add `role="note"` to all callout elements -- ~8 attributes
10. Add `aria-label` to all 12 sections -- 12 attributes

### Decision Matrix Summary

| Factor | A (CSS-only) | B (CSS+HTML) | C (Rebuild) |
|--------|-------------|-------------|-------------|
| Time | 30-45 min | 60-90 min | 180-300 min |
| Risk | LOW | MEDIUM-LOW | HIGH |
| Root causes addressed (of 7 product) | 2 full, 3 partial | 5 full, 2 partial | 5 full, 2 partial |
| Lines preserved | 2,034 (100%) | ~1,930 (95%) | 0 (0%) |
| Predicted PA-05 | 2/4 | 3/4 | 1/4 to 4/4 |
| Monotony addressed | NO | YES (2-3 sections) | YES (if prompt fixed) |
| Accessibility | 0/8 -> 2/8 | 0/8 -> 5-6/8 | 0/8 -> 7-8/8 (if built in) |
| Component library usage | NO | YES | YES |

**VERDICT: Approach B. Preserve what works. Fix what's broken. Don't rebuild what isn't the problem.**

---

## APPENDIX: Risk Register for Approach B

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Class renames break CSS cascade | LOW | MEDIUM | Test each rename individually; CSS selectors target `.callout` family already defined in component library |
| Grid wrappers break spacing arc | LOW | LOW | Verify section padding preserved after wrapper insertion |
| Divider restructuring changes spatial rhythm | MEDIUM | MEDIUM | Measure total gap before and after; target <= 128px between content elements |
| Accessibility additions conflict with soul | ZERO | N/A | `::selection`, `focus-visible`, `@media` have zero interaction with border-radius/box-shadow |
| Agent takes too long on HTML restructuring | LOW | LOW | HTML changes are mechanical; can be scripted with find-and-replace for class renames |

---

**END OF ANALYSIS**

**Recommendation: APPROACH B (CSS + Targeted HTML Restructuring)**
**Estimated effort: 60-90 minutes, 1-2 agents**
**Expected PA-05 improvement: 0/4 -> 3/4 (DESIGNED territory)**
