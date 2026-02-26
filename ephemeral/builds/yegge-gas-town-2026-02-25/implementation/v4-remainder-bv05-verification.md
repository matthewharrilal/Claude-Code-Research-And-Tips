# BV-05 Keyword Verification Report

Date: 2026-02-25
Status: COMPLETE — CRITICAL MISMATCHES FOUND AND FIXED
File modified: `ephemeral/va-extraction/gate-runner-core.js` (lines 150-164)

---

## Summary

BV-05's keyword mapping was **completely misaligned** with the actual disposition definitions in `artifact-builder-recipe.md`. All 9 dispositions had keyword lists that matched generic CSS concepts rather than the specific vocabulary taught by each disposition. This means BV-05 was effectively checking "does the brief mention CSS?" rather than "does the brief contain disposition vocabulary?"

**Severity: HIGH.** A brief could pass BV-05 with zero disposition vocabulary by simply containing generic CSS terms like "typography", "color", "component", and "responsive". Conversely, a well-written brief using correct disposition language ("signing frame", "quiet zone", "skeleton test") could theoretically FAIL if it lacked generic terms.

---

## Keyword-by-Keyword Comparison Table

### D-01: Content-Register Reading

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Read content's register (NARRATIVE / REFERENCE / CODE) | `spatial, zone, background, section, layout` | **MISMATCH** |
| Recipe vocabulary | register, narrative, reference, code, density, content-register | (none present) | **0/6 matched** |
| BV-05 keywords | spatial, zone, background, section, layout | Generic CSS layout terms — NOT D-01 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['register', 'narrative', 'reference', 'content-register', 'code section']`

---

### D-02: Room Perception at Boundaries

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Each zone transition = entering a different room; combine multiple channels at boundaries | `typography, font, heading, typeface, serif` | **MISMATCH** |
| Recipe vocabulary | room, boundary, background color shift, RGB, zone transition, channels | (none present) | **0/6 matched** |
| BV-05 keywords | typography, font, heading, typeface, serif | Generic typography terms — NOT D-02 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['room', 'boundary', 'rgb', 'room perception', 'zone transition']`

---

### D-03: The Signing Frame

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Build as if you will sign this page; authority, restraint, certainty | `border, weight, hierarchy, primary, tertiary` | **PARTIAL** |
| Recipe vocabulary | signing, authority, restraint, border-weight hierarchy, certainty, zero decorative | `hierarchy` matches | **1/6 matched** |
| BV-05 keywords | border, weight, hierarchy, primary, tertiary | Generic border terms; `hierarchy` overlaps but `primary/tertiary` are generic | **PARTIAL — mostly wrong domain** |

**Fixed keywords:** `['signing', 'authority', 'restraint', 'signing frame', 'border-weight hierarchy']`

---

### D-04: The Second-Half Moment

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Create a surprise moment in the second half — scale break, inversion, rupture | `color, palette, warm, cream, red` | **MISMATCH** |
| Recipe vocabulary | surprise, second-half, scale break, color inversion, layout rupture, structural inversion | (none present) | **0/6 matched** |
| BV-05 keywords | color, palette, warm, cream, red | Generic color terms — NOT D-04 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['surprise', 'second-half', 'inversion', 'scale break', 'rupture']`

---

### D-05: The Reader's Scroll

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Scroll should feel like a journey with pacing; 3 dimensions of scroll rhythm | `component, callout, table, blockquote, pull-quote` | **MISMATCH** |
| Recipe vocabulary | scroll, rhythm, journey, pacing, measure length, dynamics, closure | (none present) | **0/7 matched** |
| BV-05 keywords | component, callout, table, blockquote, pull-quote | Generic component terms — NOT D-05 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['scroll', 'rhythm', 'journey', 'pacing', 'reader\'s scroll', 'measure length']`

---

### D-06: Negative Space as Shape

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Whitespace is a deliberate shape, not emptiness; vary gaps intentionally | `mechanism, channel, transition, shift` | **MISMATCH** |
| Recipe vocabulary | whitespace, negative space, gap, breathing, space, uniform gaps | (none present) | **0/6 matched** |
| BV-05 keywords | mechanism, channel, transition, shift | Generic mechanism terms — actually belong to D-02 or scaffolding | **WRONG DOMAIN** |

**Fixed keywords:** `['whitespace', 'negative space', 'gap', 'breathing', 'space as shape']`

---

### D-07: Edge Intentionality

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Every edge intentional; hover states, typographic micro-refinement, ::selection, delight | `density, arc, pacing, rhythm` | **MISMATCH** |
| Recipe vocabulary | hover, edge, delight, intentionality, ::selection, tabular-nums, print, first/last child | (none present) | **0/8 matched** |
| BV-05 keywords | density, arc, pacing, rhythm | Temporal terms — actually belong to D-05 | **WRONG DOMAIN** |

**Fixed keywords:** `['hover', 'edge', 'delight', 'intentionality', '::selection', 'tabular-nums']`

**Critical note:** Hover vocabulary is now correctly placed in D-07 (where the recipe defines it). The separate `hoverTerms` check at line 170 provides an additional WARNING-level alert specifically for hover, which remains valuable since hover was the #1 recurrent failure.

---

### D-08: The Skeleton Test

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | Strip content mentally; does the skeleton have shape? COMPOSED vs APPLIED indicator | `responsive, viewport, breakpoint, 768` | **MISMATCH** |
| Recipe vocabulary | skeleton, shape, composed, applied, strip content, rhythm, proportion | (none present) | **0/7 matched** |
| BV-05 keywords | responsive, viewport, breakpoint, 768 | Responsive design terms — NOT D-08 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['skeleton', 'skeleton test', 'shape', 'strip content']`

---

### D-09: The Quiet Zone

| Aspect | Recipe Definition | BV-05 Keywords (BEFORE) | MATCH? |
|--------|------------------|------------------------|--------|
| Core concept | At least 1 zone in middle third deliberately plainer; breathing pause, fewer mechanisms | `accessibility, contrast, focus, wcag, aria` | **MISMATCH** |
| Recipe vocabulary | quiet zone, quiet, rest, plain, breathing pause, fewer mechanisms, single-column | (none present) | **0/7 matched** |
| BV-05 keywords | accessibility, contrast, focus, wcag, aria | Accessibility terms — NOT D-09 vocabulary | **WRONG DOMAIN** |

**Fixed keywords:** `['quiet zone', 'quiet', 'rest', 'plain', 'fewer mechanisms', 'breathing pause']`

---

## Mismatch Severity Summary

| Disposition | Match Level | Old Keywords Domain | Correct Domain |
|-------------|------------|--------------------:|---------------:|
| D-01 | 0/6 | Generic CSS layout | Content register reading |
| D-02 | 0/6 | Generic typography | Room/boundary perception |
| D-03 | 1/6 | Generic borders | Authority/signing frame |
| D-04 | 0/6 | Generic colors | Surprise/inversion |
| D-05 | 0/7 | Generic components | Scroll rhythm/journey |
| D-06 | 0/6 | Generic mechanisms | Whitespace/negative space |
| D-07 | 0/8 | Temporal (D-05 vocab!) | Hover/edge/delight |
| D-08 | 0/7 | Responsive design | Skeleton test |
| D-09 | 0/7 | Accessibility | Quiet zone/rest |
| **TOTAL** | **1/59** | | |

**Only 1 out of 59 recipe vocabulary terms was matched.** The keyword lists appear to have been written by scanning generic CSS categories (layout, typography, borders, colors, components, mechanisms, temporal, responsive, accessibility) rather than reading the actual disposition definitions.

---

## Old Keywords — Where They Actually Belonged

The old keywords weren't random — they formed a coherent mapping to generic CSS phases. Here's where each old set actually belongs in the pipeline:

| Old D-XX Keywords | Actually Belongs To |
|-------------------|---------------------|
| D-01: spatial, zone, background, section, layout | **Step 2.1 / Step 3.1** (zone background strategy) |
| D-02: typography, font, heading, typeface, serif | **Step 2.2** (type scale selection) |
| D-03: border, weight, hierarchy, primary, tertiary | **Step 1.1** (tokens.css border weights) |
| D-04: color, palette, warm, cream, red | **Step 2.1** (color selection) |
| D-05: component, callout, table, blockquote, pull-quote | **Step 2.5** (component selection) |
| D-06: mechanism, channel, transition, shift | **Step 3.1** (6-channel framework) |
| D-07: density, arc, pacing, rhythm | **Step 3.3** (visual density arc) |
| D-08: responsive, viewport, breakpoint, 768 | **Step 5.7** (output targets) |
| D-09: accessibility, contrast, focus, wcag, aria | **Phase 5** (self-evaluate accessibility) |

This confirms the old keywords were a Phase 1-5 scaffolding vocabulary scan, NOT a Phase 4 disposition vocabulary scan.

---

## Hover Vocabulary Check

**Question:** Does BV-05 check for hover vocabulary specifically?

**Answer:** YES — both before and after the fix.

1. **In D-07 keywords (NEW):** `'hover'` is now in the D-07 keyword list, matching the recipe which places hover under D-07 (Edge Intentionality). If the brief mentions hover, D-07 passes.

2. **Separate hoverTerms check (unchanged, line 170):** `['hover', 'interactive', ':hover']` — generates a WARNING if none found. This is a belt-and-suspenders check since hover was the #1 recurrent failure.

3. **Before the fix:** Hover was NOT in any D-01–D-09 keyword list. The only hover check was the separate WARNING at line 170. This means a brief could pass BV-05's disposition check with zero hover vocabulary.

**After the fix:** Hover is checked in TWO places — as part of D-07 disposition matching (FAIL if missing) AND as the separate WARNING check. This is correct because:
- D-07 is about edge intentionality broadly (hover + ::selection + tabular-nums + print)
- The separate hover check is specifically about the #1 failure mode
- A brief could mention "delight" or "::selection" to pass D-07 but still lack explicit hover vocabulary

---

## Compression Ratio Analysis

**Code (lines 172-184):**
```javascript
const tier3Match = briefText.match(/^#+\s*Tier\s*3/im);
// ...
const tier3Lines = tier3Text.split('\n').filter(l => l.trim()).length;
const totalBriefLines = lines.filter(l => l.trim()).length;
compressionRatio = tier3Lines > 0 ? totalBriefLines / tier3Lines : 0;
if (compressionRatio > 50) compressionStatus = 'BLOCKING';
else if (compressionRatio > 30) compressionStatus = 'WARNING';
```

**What it measures:** `totalBriefLines / tier3Lines` — the ratio of the full brief to its Tier 3 section.

**Is it mathematically sound?** YES, with caveats:
- If the brief is 200 lines and Tier 3 is 40 lines, ratio = 5.0 (PASS)
- If the brief is 200 lines and Tier 3 is 4 lines, ratio = 50.0 (BLOCKING)
- This correctly flags briefs where Tier 3 (the detailed disposition/creative content) has been over-compressed

**What it does NOT measure:** It does not measure compression from the recipe SOURCE (artifact-builder-recipe.md, ~700+ lines) to the brief. It measures internal brief balance. This is a reasonable but different metric than "compression ratio" implies. The variable was renamed from `totalRecipeLines` to `totalBriefLines` to clarify this.

**Thresholds:**
- >50 = BLOCKING (Tier 3 is <2% of brief — pathologically compressed)
- >30 = WARNING (Tier 3 is <3.3% of brief — suspiciously thin)
- These thresholds are reasonable for catching briefs that omit dispositional content.

---

## Fixes Applied

### Fix 1: Disposition keyword lists (CRITICAL)
- **File:** `ephemeral/va-extraction/gate-runner-core.js`
- **Lines:** 154-163
- **Change:** All 9 disposition keyword arrays replaced with recipe-accurate vocabulary
- **Before:** 45 generic CSS keywords across 9 dispositions, 1/59 recipe term matched
- **After:** 48 disposition-specific keywords across 9 dispositions, derived from Phase 4 recipe definitions

### Fix 2: Comment correction (MINOR)
- **File:** `ephemeral/va-extraction/gate-runner-core.js`
- **Line:** 150
- **Change:** Removed incorrect "(D-07)" reference from comment — BV-05 covers D-01 through D-09, not just D-07
- **Added:** Provenance comment noting keywords derived from artifact-builder-recipe.md

### Fix 3: Variable name clarification (MINOR)
- **File:** `ephemeral/va-extraction/gate-runner-core.js`
- **Line:** 179-181
- **Change:** Renamed `totalRecipeLines` to `totalBriefLines` with clarifying comments
- **Reason:** Variable was measuring brief lines but named as if measuring recipe source lines

---

## Corrected BV-05 Keyword Lists (Final)

```javascript
const dispositionKeywords = {
  'D-01': ['register', 'narrative', 'reference', 'content-register', 'code section'],
  'D-02': ['room', 'boundary', 'rgb', 'room perception', 'zone transition'],
  'D-03': ['signing', 'authority', 'restraint', 'signing frame', 'border-weight hierarchy'],
  'D-04': ['surprise', 'second-half', 'inversion', 'scale break', 'rupture'],
  'D-05': ['scroll', 'rhythm', 'journey', 'pacing', "reader's scroll", 'measure length'],
  'D-06': ['whitespace', 'negative space', 'gap', 'breathing', 'space as shape'],
  'D-07': ['hover', 'edge', 'delight', 'intentionality', '::selection', 'tabular-nums'],
  'D-08': ['skeleton', 'skeleton test', 'shape', 'strip content'],
  'D-09': ['quiet zone', 'quiet', 'rest', 'plain', 'fewer mechanisms', 'breathing pause']
};
```

---

## Risk Assessment

**False positive risk (brief incorrectly passes):** LOW. Keywords are specific enough that generic CSS discussion won't accidentally match. "skeleton test", "signing frame", "quiet zone" are disposition-specific phrases.

**False negative risk (brief incorrectly fails):** MEDIUM for D-08. The D-08 keywords ("skeleton", "shape") are somewhat generic — a brief discussing "the shape of the page" might pass D-08 without actually teaching the skeleton test. However, `.some()` matching means only ONE keyword needs to match, so this is acceptable.

**Interaction with hover WARNING:** CORRECT. D-07 checks for hover as part of a broader disposition; the separate WARNING specifically escalates hover absence. Both checks serve different purposes and can coexist.
