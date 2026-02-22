# Critical Path Analysis: PA-05 2.5/4 to 4/4

**Analyst:** Critical Path Analyst (Opus 4.6)
**Date:** 2026-02-20
**Method:** Backward induction from PA-05 4/4 sub-criteria through every handoff boundary in the /build-page pipeline
**Sources:** /build-page SKILL.md, tension-composition SKILL.md, perceptual-auditing SKILL.md, conventions-brief.md, gate-runner.md, flagship-retrospective/09-SYNTHESIS.md, flagship-audit/03-guardrail-vs-playbook.md, flagship-audit/04-compression-losses.md, pipeline-analysis/CLAUDE.md, pipeline-analysis/42-OPERATIONAL-RECIPE.md

---

## PART 0: THE GAP STATEMENT

The pipeline has produced three data points:

| Experiment | PA-05 | Builder Prompt Format | Builder Model | Key Characteristic |
|-----------|-------|----------------------|---------------|-------------------|
| Middle-tier | 4/4 DESIGNED | 100-line recipe | Opus (manual) | Recipe with specific CSS values |
| Flagship | 1.5/4 FLAT | 71-line checklist (extracted from 963-line prompt) | Sonnet | Guardrails with zero CSS recipes |
| Flagship Remediation | 2.5/4 SHIP WITH FIXES | 1,025-line spec (recipe-format) | Opus | Recipe with HTML restructuring |

The gap between 2.5/4 and 4/4 is 1.5 PA-05 points. But the gap is not uniform across sub-criteria. Based on the Mode 4 PA reports:

| Sub-criterion | Remediation Score (est.) | Target | Gap | Primary Handoff Boundary |
|--------------|-------------------------|--------|-----|------------------------|
| DESIGNED | 2.5/4 | 4/4 | 1.5 | TC-to-Builder (metaphor structural expression) |
| COHERENT | 3.0/4 | 4/4 | 1.0 | Builder-internal (mid-build drift prevention) |
| PROPORTIONATE | 2.5/4 | 4/4 | 1.5 | Builder-to-Gates (perception verification) |
| POLISHED | 2.0/4 | 4/4 | 2.0 | Fix-Cycle-to-Builder (compositional context in fixes) |

**The highest-leverage sub-criterion is POLISHED** (largest gap), but **DESIGNED drives all others** (a page that feels intentionally crafted automatically reads as more coherent, proportionate, and polished). Working backwards from DESIGNED is the correct strategy.

---

## PART 1: BACKWARD INDUCTION FROM EACH SUB-CRITERION

### 1A. DESIGNED (4/4): "Every element appears intentionally crafted for its purpose"

**What 4/4 DESIGNED requires (from PA-05 rubric):**
- Multi-scale coherence: the same organizing principle visible at Navigation, Page, Section, Component, and Character scales
- Rhythm variation: not metronomic -- some transitions are dramatic (4-5 channel shifts), some are quiet (1-2 shifts)
- Focal points placed deliberately: visual peaks correlated with content importance
- "A designer made choices for THIS content" -- content-form coupling

**What handoff boundary MOST affects this criterion?**
The TC-to-Builder handoff. The TC brief is where the structural metaphor, zone architecture, and mechanism selections are transmitted. If the metaphor is ANNOUNCED (text labels) rather than STRUCTURAL (CSS-implied), the page cannot feel designed. If the zone architecture does not map to content's natural structure, CSS decisions will be arbitrary.

**What information MUST survive the handoff for 4/4?**
1. The metaphor's CSS IMPLICATIONS (not just the metaphor name). "Geological strata" must arrive at the builder as: "backgrounds darken with depth, spacing compresses, borders thicken, typography densifies -- all encoding DESCENT." The current TC brief template (Section 5: METAPHOR-IMPLIED CSS DIRECTIONS) requests this, but the enforcement is weak.
2. Content-form coupling map: which sections are analytically dense (and need tighter CSS treatment) vs. which are overview/reflective (and need more breathing room). The current TC brief template has ZONE ARCHITECTURE but not per-section content density annotations.
3. The coherence ARC: where the composition should peak in visual intensity. Without this, builders front-load design effort (the FRONT-LOADED arc failure mode).

**What CURRENTLY prevents 4/4?**
- The TC brief is 80-120 lines. It captures metaphor, zones, tensions, and mechanisms. But it does NOT capture the BUILD SEQUENCE -- what to do first, second, third. The conventions brief (584 lines) is the process guide, but it describes the WORLD, not the TASK. There is no document that says: "For THIS content with THIS metaphor, build zone backgrounds first using THESE specific hex values, then add borders using THESE weights at THESE locations."
- The builder receives the TC brief, conventions brief, content file, and 4 reference files. Total reading: ~1,200 lines minimum before writing CSS. By the time the builder starts Phase C (build), attention has diffused across world-description, not concentrated on task-execution.
- The metaphor often fails the structural test (BG-2) because TC briefs describe metaphors in prose terms, not in CSS terms. "Geological strata" is prose. "Background: Zone 1 #FEF9F5 -> Zone 2 #F0EBE3 -> Zone 3 #E8DFD0 (15+ RGB delta each, DARKENING)" is CSS. The TC brief asks for the latter (Section 5) but most TC agents produce the former.

**MINIMUM VIABLE FIX at the handoff boundary:**
Add a mandatory BOUNDARY-KEYED CSS TABLE to the TC brief output. For each zone boundary, the TC agent specifies: which CSS channels shift, in what direction, and with what minimum magnitude. Example:

```
BOUNDARY Z1->Z2 (DEEPENING):
  Chromatic: #FEF9F5 -> #F0EBE3 (delta 18 RGB on B channel)
  Typographic: body 17px -> 16px, heading weight 400 -> 500
  Spatial: section padding 64px -> 48px
  Structural: border-left 0 -> 3px solid #E0D5C5
```

This transforms the handoff from CONCEPTUAL ("the metaphor deepens here") to OPERATIONAL ("write these CSS values at this boundary"). The builder still has creative authority over everything NOT specified, but the critical multi-coherence architecture is pre-computed.

---

### 1B. COHERENT (4/4): "All elements work together as a unified system"

**What 4/4 COHERENT requires:**
- Consistent mechanism deployment: the same visual vocabulary across the entire page
- No dialect shifts: header, body, and footer share a single design language
- Components adapt to zone character: a callout in a dense zone looks different from the same callout in a sparse zone (parametric echo)
- Transition grammar is consistent: similar-importance boundaries get similar-weight transitions

**What handoff boundary MOST affects this criterion?**
The Builder-internal boundary -- the moment where the builder transitions from planning to implementation. The conventions brief calls this the CONVICTION CARD (Section: Conviction Card) and four VERIFICATION PAUSES (Section: Process). The problem is that mid-build drift is a fundamental property of long compositional tasks: by Section 8, the builder has forgotten what Zone 1 looked like.

**What information MUST survive the builder's internal build process?**
1. The fractal echo table (which the builder writes before CSS begins). This is the memory anchor -- "at every scale, my organizing principle expresses THIS way."
2. Boundary naming in CSS comments: `/* Boundary Z2->Z3: DEEPENING */`. The conventions brief mandates this (Section 10: Compositional Memory).
3. The midpoint observation: rendering the page at ~50% and asking "what is the weakest section?" This is mandated but there is no mechanism to VERIFY it happened.

**What CURRENTLY prevents 4/4?**
- The build log (DG-1, DG-4) checks that the fractal echo table EXISTS and has 5 rows. It does NOT check that the builder USED it. A builder can produce a perfect fractal echo table and then ignore it during CSS.
- Parametric echo (components adapting to zone character) is described in the conventions brief (Section 8: CSS VOCABULARY, Component-internal multi-coherence recipe) with specific CSS examples. But this description is in the VOCABULARY section, not the PROCESS section. The builder reads it as reference information, not as a task to execute. There is no checkpoint that verifies component-zone adaptation exists.
- The midpoint observation has no structured output format. "Render and scroll" is the instruction. But WHAT to look for is vague: "what feels designed? What feels flat?" A structured checklist would help: "At midpoint, verify: (a) can you distinguish every zone by background alone? (b) does at least one section below midpoint have a designed moment? (c) does the coherence direction from your conviction statement hold?"

**MINIMUM VIABLE FIX:**
1. Add a MIDPOINT MICRO-GATE: after the builder writes ~50% of CSS, the orchestrator runs SC-09 (bg delta), SC-13 (multi-coherence), and SC-15 (border presence) on the partially-built page. This catches coherence drift DURING the build, not after.
2. Add an SC-17 gate: PARAMETRIC ECHO -- verify that at least one component class has zone-dependent CSS (e.g., `.zone-2 .callout { padding: 16px; }` vs `.zone-1 .callout { padding: 24px; }`). This is a simple selector check: does `document.querySelectorAll('[class*="zone"] .callout, [class*="zone"] .code-block')` return elements with DIFFERENT computed padding/border values in different zones?

---

### 1C. PROPORTIONATE (4/4): "Visual weight is distributed with clear intention"

**What 4/4 PROPORTIONATE requires (expanded from PA-05c):**
- **Horizontal proportion (3a):** Content fills 65-80% of viewport width
- **Vertical proportion (3b):** Every third of the page has at least one designed moment
- **Breathing proportion (3c):** Empty space feels purposeful, not abandoned

**What handoff boundary MOST affects this criterion?**
Two boundaries: (1) the TC-to-Builder boundary (zone architecture determines where visual weight lives), and (2) the Builder-to-Gates boundary (whether gates catch proportion failures before PA).

**What information MUST survive the handoff?**
1. The VISUAL WEIGHT MAP: which sections carry the most visual density and where they sit in the scroll. The TC brief's ZONE ARCHITECTURE partially captures this, but does not annotate which zones are HIGH WEIGHT vs LOW WEIGHT.
2. The conventions brief's void prevention guidance (Section 2: PERCEPTION, stacked gaps; Section 9B: Quality Floor). These are well-written but live in a world-description document, not a task-execution sequence.

**What CURRENTLY prevents 4/4?**
- The stacking loophole was FIXED in the gate runner (SC-10: total gap <= 120px). But the flagship remediation still had voids that were "improved but not resolved" (PA-05c estimated at 2.5/4 after remediation). The problem is that SC-10 prevents CATASTROPHIC voids (210px+) but does not prevent UNCOMFORTABLE voids (121-160px). The threshold may need tightening.
- The "designed moment below midpoint" requirement (PA-52, conventions brief Section 11: Five Questions -- "The Second Half") is checked by PA auditors but NOT by any programmatic gate. A builder can front-load all design effort and pass every gate while failing PA-52.
- Breathing proportion (3c) is the hardest to verify programmatically because "purposeful emptiness" vs. "abandoned emptiness" is a judgment call. However, a proxy exists: if empty space is bordered or contains a transition element (bridge prose, a thin rule), it reads as purposeful. If it is raw background with no structural marker, it reads as abandoned.

**MINIMUM VIABLE FIX:**
1. Add a SCROLL-THIRD GATE (SC-17 or folded into DG-4): divide total page height into thirds. Each third must contain at least 1 element with a non-default class (callout, grid, blockquote, figure, table -- anything beyond p/h2/h3). This proxies "designed moment" without requiring perceptual judgment.
2. Tighten SC-10 from 120px to 96px. The conventions brief already says "maximum padding 96px" (Section 1: IDENTITY). Having SC-10 allow 120px while the spacing system tops at 96px creates a 24px ambiguity zone that builders exploit.
3. Add a TRANSITION MARKER requirement: every zone boundary must have a visible structural element (border-top, background shift, or bridge element). Raw whitespace between zones is a gate failure.

---

### 1D. POLISHED (4/4): "Details are refined with visible craft"

**What 4/4 POLISHED requires:**
- No missing elements (footer present, header complete)
- Token compliance high (>= 80% CSS values use custom properties)
- Transitions typed, not uniform gaps
- No stray visual artifacts
- Accessibility complete (skip link, focus-visible, reduced-motion, responsive breakpoints)

**What handoff boundary MOST affects this criterion?**
The Fix-Cycle-to-Builder handoff. POLISHED is the last sub-criterion to be satisfied because it requires ITERATION -- seeing the page, identifying rough edges, and fixing them. The fix cycle is where polish happens. If the fix cycle degrades from recipe to checklist (the builder fixes symptoms without compositional context), polish degrades with it.

**What information MUST survive the fix cycle handoff?**
1. The builder's CONVICTION STATEMENT and TRANSITION TABLE. The fix cycle instruction (Step 7.2 in /build-page) mandates: "Re-read _tc-brief.md AND your conviction statement and transition table in _build-log.md before applying fixes." This is correct, but ENFORCEMENT is via instruction, not mechanism.
2. The LOCK SHEET (Step 5.5 in /build-page): classifying every element as LOCKED (Soul), LOCKED (Research), or CHALLENGEABLE (Builder). The weaver receives this; the builder does not receive it directly. This means the builder might regress a research-backed threshold while fixing a PA issue.
3. Accessibility is a PHASE, not an afterthought. The conventions brief (Section 13: ACCESSIBILITY) describes it as "structural, not cosmetic." But in the /build-page pipeline, accessibility has no dedicated gate beyond SC-06 (5 ARIA landmarks), SC-07 (skip link), and DG-3 (header/main/footer). Missing: focus-visible check, reduced-motion check, responsive breakpoint check, ARIA role count.

**What CURRENTLY prevents 4/4?**
- The fix cycle caps at 3 cycles (Step 7.4 in /build-page). After 3 cycles: ESCALATE. But from 2.5/4 to 4/4 likely requires MORE than 3 cycles of polish. The pipeline assumes 1-2 fix cycles for minor adjustments, not 3+ for major compositional refinement.
- The fix instruction format (Step 7.1) is well-structured: gate failures with CSS, PA issues with direction, DO NOT TOUCH list. But it does not include a PRIORITY ORDERING. The builder receives 5 PA issues + N gate failures simultaneously. Without priority, the builder addresses them in arbitrary order, potentially fixing a cosmetic issue while a structural issue remains.
- Token compliance has no programmatic gate. Section "Token Compliance" in the conventions brief says ">= 80% of applicable CSS values use tokens" and "verified during builder self-check and build-log review." But there is no SC-XX gate that counts token usage. This makes token compliance an honor-system check that degrades under fix-cycle pressure.

**MINIMUM VIABLE FIX:**
1. Add PRIORITY TIERS to fix instructions: Tier 1 (STRUCTURAL: gate failures, multi-coherence, zone architecture), Tier 2 (COMPOSITIONAL: PA-05 sub-criteria, design moment distribution), Tier 3 (POLISH: token compliance, accessibility gaps, visual artifacts). Builder MUST fix all Tier 1 before touching Tier 2.
2. Add an ACCESSIBILITY MICRO-GATE (MG-5): after the full build, before screenshots, check for `*:focus-visible`, `@media (prefers-reduced-motion)`, and `::selection`. These are 3 CSS rules (~6 lines) that are trivially verifiable and have been absent from every flagship build.
3. Extend fix cycle limit to 4 for pages targeting 4/4. The first 3 cycles address mechanical/structural issues. The 4th cycle addresses polish. If PA-05 is still below 3.5 after 3 cycles, ESCALATE. If PA-05 is 3.0-3.5 after 3 cycles, allow a 4th polish-only cycle.

---

## PART 2: SYNTHESIS -- TOP 5 HIGHEST-LEVERAGE HANDOFF IMPROVEMENTS

Ranked by estimated P(4/4) impact (most impactful first):

---

### #1: ADD BOUNDARY-KEYED CSS TABLE TO TC BRIEF OUTPUT

**Type:** HANDOFF PROTOCOL change
**Difficulty:** MEDIUM
**Files to edit:** `/build-page SKILL.md` (Section 2: TC SKILL INVOCATION, the TC agent spawn prompt)
**P(4/4) impact:** HIGH (~0.25 PA-05 points)

**The problem:** The TC brief outputs a STRUCTURAL METAPHOR, ZONE ARCHITECTURE, and METAPHOR-IMPLIED CSS DIRECTIONS as prose. The builder must TRANSLATE these prose descriptions into specific CSS values. This translation step is where the metaphor degrades from structural to announced. The TC agent understands the metaphor deeply (it derived it); the builder receives it as text.

**The fix:** Mandate that the TC brief include a BOUNDARY-KEYED CSS TABLE as one of its 8 output sections. For EACH zone boundary, the TC agent specifies:

```yaml
boundary: Z1->Z2
direction: DEEPENING
channels:
  chromatic: { from: "#FEF9F5", to: "#F0EBE3", delta: "18 RGB (B channel)" }
  typographic: { from: "17px/400", to: "16px/500", delta: "1px size, 100 weight" }
  spatial: { from: "padding 64px", to: "padding 48px", delta: "16px tighter" }
  structural: { from: "border-left 0", to: "border-left 3px solid #E0D5C5" }
min_channels: 4
```

This is an 8-10 line addition per boundary, 20-40 lines total. Within the TC brief's 80-120 line budget if we trim the prose sections slightly.

**Why this is #1:** The TC-to-Builder handoff is the single point where compositional intelligence either survives or dies. Every CSS value the builder writes flows from this handoff. CD-006 achieved 39/40 because a single Opus agent held the full compositional intent in its context. The pipeline splits that intent across agents. The boundary-keyed table is the minimum viable representation of that intent.

**Risk:** The TC agent may produce boundary tables with sub-perceptual deltas (repeating RC-4/RC-10). Mitigate by adding a binary validation: DG-4 sub-check verifies all TC-brief boundary deltas exceed perception thresholds BEFORE the builder starts.

---

### #2: ADD A MIDPOINT MICRO-GATE (MG-5)

**Type:** HANDOFF PROTOCOL change (new gate insertion point)
**Difficulty:** EASY
**Files to edit:** `/build-page SKILL.md` (Section 4: GATE RUNNER, add MG-5 between builder Phase C checkpoint and final build), `gate-runner.md` (add MG-5 specification)
**P(4/4) impact:** HIGH (~0.20 PA-05 points)

**The problem:** Currently, programmatic gates run AFTER the full build (Step 4.2). By then, fixing multi-coherence or zone architecture requires significant rework. The conventions brief mandates "midpoint reflection" (Section 10: Compositional Memory) but there is no programmatic enforcement. The builder scrolls, thinks "looks fine," and continues.

**The fix:** After the builder completes approximately 50% of sections (the orchestrator can estimate this from the build log), run a SUBSET of gates:

```
MG-5 (Midpoint, ~30 sec):
  SC-09: Background delta >= 15 RGB at ALL completed zone boundaries
  SC-15: >= 2 distinct border configurations in completed sections
  SC-13 (partial): >= 3 channel shifts at every completed boundary
```

If MG-5 fails, the builder receives a structured fix instruction WITH compositional context ("Your Z1->Z2 boundary has only 8 RGB delta. Your planned direction was DEEPENING. Darken Z2 background to >= 15 RGB delta."). The builder fixes BEFORE writing the remaining 50% of CSS. This catches the flagship's core failure mode (imperceptible backgrounds, zero borders) BEFORE it compounds across the full page.

**Why this is #2:** The flagship's catastrophic failure was detectable after 3 sections. If a midpoint gate had run after Zone 2 was complete, the builder would have received: "SC-09 FAIL: Zone 1->2 background delta is 5 RGB (threshold: 15)." Fix cost at midpoint: 2 minutes. Fix cost after full build: 30+ minutes. The leverage is the TIMING of the gate, not its existence.

**Risk:** The orchestrator must know when the builder is at midpoint. Current /build-page has no mechanism for mid-build gate injection. Implementation requires either: (a) splitting the builder into two phases with a gate between them, or (b) having the builder call back to the orchestrator at midpoint. Option (a) is cleaner but requires ARCHITECTURAL change to the pipeline.

---

### #3: REPLACE CONVENTIONS BRIEF SECTIONS 2-5 WITH A PER-ZONE BUILD RECIPE

**Type:** CONTENT change (major rewrite of builder's primary reference)
**Difficulty:** HARD
**Files to edit:** `conventions-brief.md` (rewrite Sections 2-5 from world-description to task-sequence)
**P(4/4) impact:** HIGH (~0.20 PA-05 points, but distributed across all sub-criteria)

**The problem:** The conventions brief is 584 lines of WORLD DESCRIPTION. It describes the physics of the design system (what perception thresholds exist, what multi-coherence is, what fractal echo means). It does NOT describe a BUILD SEQUENCE (what to do first, second, third). The builder must read 584 lines of theory and then infer a build process. This is exactly the "checklist vs recipe" failure mode from the retrospective.

The conventions brief is excellent for UNDERSTANDING the system. But the builder does not need to UNDERSTAND the system -- the builder needs to BUILD a page. The understanding should live in the TC agent's analysis, not in the builder's execution context.

**The fix:** Rewrite Sections 2-5 (PERCEPTION, RICHNESS, MULTI-COHERENCE, FRACTAL ECHO) as a BUILD RECIPE keyed to the builder's workflow phases:

Current structure (world-description):
```
Section 2: PERCEPTION (theory of human perception limits)
Section 3: RICHNESS (theory of what makes a page rich)
Section 4: MULTI-COHERENCE (theory of channel alignment)
Section 5: FRACTAL ECHO (theory of multi-scale expression)
```

Proposed structure (task-sequence):
```
Section 2: ZONE BACKGROUNDS (Phase C.1)
  - Step 1: Set each zone background from your TC brief boundary table
  - Step 2: Verify each adjacent delta >= 15 RGB
  - Step 3: Self-check: squint test -- can you distinguish zones?

Section 3: BORDERS AND STRUCTURE (Phase C.2)
  - Step 1: Add border-left to callouts/components in dense zones (3-4px)
  - Step 2: Add section dividers matching your transition plan
  - Step 3: Self-check: skeleton test -- remove all color. Does structure hold?

Section 4: TYPOGRAPHY CASCADE (Phase C.3)
  - Step 1: Set zone-specific font-sizes from TC brief
  - Step 2: Verify display-body delta >= 10px
  - Step 3: Self-check: compare sparse zone text to dense zone text -- visible difference?

Section 5: COHERENCE VERIFICATION (Phase C.4)
  - Step 1: At each boundary, count shifting channels
  - Step 2: Verify >= 3 channels shift in same semantic direction
  - Step 3: Self-check: name the coherence direction at each boundary
```

**Why this is #3:** The retrospective's Finding 1 (recipe vs checklist) is THE most replicated finding across the entire pipeline-analysis corpus. The middle-tier builder received a 100-line recipe and scored 4/4. The flagship builder received 71 lines of constraints and scored 1.5/4. The conventions brief is currently a 584-line constraint document that EXPLAINS the world but does not SEQUENCE the work. Restructuring it as a recipe aligns the builder's primary reference document with the proven success pattern.

**Risk:** The conventions brief currently serves BOTH builders (who need a recipe) and auditors/researchers (who need world-description). Rewriting it for builders may degrade its utility for other roles. Mitigate by keeping the current conventions brief as `conventions-brief-reference.md` (renamed) and creating a new `conventions-brief.md` that is the recipe version. Or: embed the recipe as Section 2B-5B within the existing structure.

**Anti-pattern check:** Is the 584-line brief causing cognitive overload? The builder is told to "Read this brief once, fully. Then build." (Line 7). But 584 lines is ~15 minutes of reading. That is 15 minutes where the builder is absorbing theory, not building. The TC brief + boundary table + a 200-line recipe brief would total ~320-400 lines -- shorter, more actionable, and sequenced.

---

### #4: ADD SC-17: PARAMETRIC ECHO GATE

**Type:** HANDOFF PROTOCOL change (new gate)
**Difficulty:** EASY
**Files to edit:** `gate-runner.md` (add SC-17 specification), `/build-page SKILL.md` (add to gate table)
**P(4/4) impact:** MEDIUM (~0.15 PA-05 points, primarily affects COHERENT and DESIGNED)

**The problem:** Parametric echo -- components adapting to zone character -- is described in the conventions brief (Section 8: CSS VOCABULARY) with specific CSS examples. But there is NO programmatic gate that checks for its presence. The builder can deploy identical callouts/components in every zone and pass all gates.

Parametric echo is the mechanism by which a page demonstrates that its organizing principle operates at Component scale (Scale 4 in the fractal echo table). Without it, the fractal echo table has 4 scales at best (Navigation, Page, Section, Character). PA-63 (fractal zoom coherence) specifically asks: "Does the SAME component type ADAPT to its surroundings, or does it look identical regardless of where it sits?"

**The fix:**

```javascript
// SC-17: Parametric Echo
// PASS: At least one component class has different computed styles in different zones
const zones = document.querySelectorAll('[class*="zone"], section[data-zone], .section');
if (zones.length < 2) return { status: 'ADVISORY', reason: 'Need 2+ zones for parametric echo check' };

const componentSelectors = ['.callout', '.code-block', '.card', 'blockquote', 'table', 'figure'];
for (const selector of componentSelectors) {
  const instances = document.querySelectorAll(selector);
  if (instances.length < 2) continue;

  const styles = [...instances].map(el => {
    const s = getComputedStyle(el);
    return {
      padding: parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
      borderWidth: parseFloat(s.borderLeftWidth),
      fontSize: parseFloat(s.fontSize),
      zone: el.closest('[class*="zone"], section[data-zone], .section')
    };
  });

  // Check if same component type has different styles in different zones
  const zoneGroups = {};
  for (const style of styles) {
    const zoneClass = style.zone?.className || 'unknown';
    if (!zoneGroups[zoneClass]) zoneGroups[zoneClass] = [];
    zoneGroups[zoneClass].push(style);
  }

  const zoneKeys = Object.keys(zoneGroups);
  if (zoneKeys.length >= 2) {
    const avg1 = zoneGroups[zoneKeys[0]].reduce((s, x) => s + x.padding, 0) / zoneGroups[zoneKeys[0]].length;
    const avg2 = zoneGroups[zoneKeys[1]].reduce((s, x) => s + x.padding, 0) / zoneGroups[zoneKeys[1]].length;
    if (Math.abs(avg1 - avg2) >= 8) return { status: 'PASS', component: selector, delta: Math.abs(avg1 - avg2) };
  }
}
return { status: 'ADVISORY', reason: 'No component type found with zone-dependent styling. Consider adding .zone-N .callout variants.' };
```

**Why this is #4:** Parametric echo is the bridge between DESIGNED (mechanisms deployed) and COMPOSED (mechanisms in conversation with their environment). CD-006 has components that adapt to zone character. The flagship has components that are static. This gate makes parametric echo verifiable, which makes it achievable.

**Risk:** Making this a BLOCKING gate rather than ADVISORY might be premature. Start as ADVISORY for the first 2 builds, then promote to BLOCKING if it correlates with PA-63 YES scores.

---

### #5: RESTRUCTURE FIX CYCLE WITH PRIORITY TIERS AND EXTENDED LIMIT

**Type:** HANDOFF PROTOCOL change
**Difficulty:** EASY
**Files to edit:** `/build-page SKILL.md` (Section 7: FIX CYCLE, restructure fix instruction format)
**P(4/4) impact:** MEDIUM (~0.15 PA-05 points, primarily affects POLISHED)

**The problem:** The current fix cycle sends all failures simultaneously to the builder: gate failures, PA top-5 issues, Tier 5 gaps, and DO NOT TOUCH items. The builder triages implicitly. Under time pressure, builders fix the easiest issues first (font-size adjustment) and leave the hardest (multi-coherence restructuring) for later -- or not at all. Additionally, 3 fix cycles may be insufficient for 4/4 from a starting point of 2.5/4.

**The fix:**

Restructure the fix instruction template (Section 7.1) into explicitly tiered phases:

```markdown
## FIX INSTRUCTIONS (Cycle N) -- PRIORITY ORDERED

### TIER 1: STRUCTURAL (fix ALL before proceeding to Tier 2)
[Gate failures that affect zone architecture, multi-coherence, or spatial skeleton]
[PA issues flagged as STRUCTURAL by the weaver]

### TIER 2: COMPOSITIONAL (fix ALL before proceeding to Tier 3)
[PA-05 sub-criteria issues]
[Tier 5 gaps related to design moments, transition variation, restraint]

### TIER 3: POLISH (fix as many as possible)
[Token compliance, accessibility, visual artifacts]
[Minor PA issues flagged as MECHANICAL by the weaver]

### PROTECTED (changes here require explicit justification)
[Elements scoring well in PA -- do not regress]
```

Also:
- Extend cycle limit to 4 when PA-05 >= 3.0 after cycle 2 (the page is structurally sound but needs polish).
- Add SELF-CHECK between tiers: after fixing all Tier 1, the builder re-reads their conviction statement and answers: "Does my page still follow my planned coherence direction?" This prevents fix-cycle drift.

**Why this is #5:** The retrospective identified "recipe vs checklist" as the core failure mechanism. The fix cycle has the same vulnerability: fix instructions are a LIST (checklist), not a SEQUENCE (recipe). Tiered prioritization transforms the fix cycle from "here are 8 things wrong" into "fix the foundation first, then the composition, then the polish." This mirrors the build sequence (skeleton -> zones -> components -> refinement) and prevents the common failure of polishing details while the structure is broken.

**Risk:** Extending to 4 cycles adds ~20 minutes per page. For a pipeline targeting 4/4, this is acceptable -- 4/4 is FLAGSHIP quality, expected for 5-10% of pages. The additional cycle is justified by the quality target.

---

## PART 3: ANTI-PATTERN ANALYSIS

### Is the pipeline optimizing for COMPLIANCE instead of QUALITY?

**YES, partially.** The gate runner has 22 gates that verify mechanical properties (background deltas, border counts, font-size differences). These gates prevent FLAT (1.5/4) but they do NOT produce DESIGNED (4/4). The gap between "passes all gates" and "feels designed" is exactly the gap between 2.5 and 4.0.

Evidence: The flagship passed 0 gates (catastrophic). The remediation passed ~18/22 gates (3 BLOCKING fixes needed). But PA-05 was still only 2.5/4. Gates raised the floor from 1.5 to ~2.5 (a 1.0 point improvement). The remaining 1.5 points require compositional intelligence that gates cannot measure.

**The fix is NOT more gates.** It is routing compositional intelligence MORE EFFECTIVELY through handoffs. The TC brief's boundary table (#1 above) carries compositional intent. The midpoint gate (#2) catches drift before it compounds. The recipe format (#3) guides the builder through a QUALITY-producing sequence, not just a compliance-producing checklist.

### Are there handoff points where MORE information would HURT quality?

**YES.** The builder currently receives 7 input files (TC brief, conventions brief, content file, mechanism catalog, components.css, tokens.css, prohibitions.md). Total potential reading: ~3,500 lines. This is well above the hypothesized 100-200 line effective attention window for LLM agents.

**The conventions brief at 584 lines is the primary overload vector.** The builder is told to "Read this brief once, fully. Then build." But at 584 lines, this brief competes with the TC brief (80-120 lines) for attention. The conventions brief's WORLD DESCRIPTION sections (1-6) are essential context for UNDERSTANDING but not for BUILDING. The builder needs Sections 7-14 (CSS Vocabulary, Creative Authority, Quality Floor, Compositional Memory, Five Questions, Restraint List, Accessibility, Responsive) and a task-keyed version of Sections 2-5.

**Recommended attention budget:**
```
TC brief (80-120 lines)      -- PRIMARY: what THIS page needs
Conventions brief (200 lines) -- SECONDARY: how to build in this world
Reference files (on-demand)   -- TERTIARY: consult when needed
```

This means the conventions brief needs to shrink from 584 to ~200 lines, OR be restructured so the first 200 lines are the recipe and the remaining 384 lines are appendix material.

### Is the 80-120 line TC brief enough, or does the builder need a 200-line brief?

**The TC brief at 80-120 lines is SUFFICIENT if it includes the boundary-keyed CSS table (#1 above).** The middle-tier experiment's success with a ~100-line brief confirms this. The flagship failed not because the brief was too short, but because it was the WRONG FORMAT (checklist instead of recipe).

A 200-line TC brief risks diluting the critical information. Longer is not better. More specific is better. The boundary-keyed CSS table adds ~30-40 lines of HIGH-DENSITY information (specific CSS values at specific boundaries) without adding prose.

---

## PART 4: ARCHITECTURAL CHANGES REQUIRED

Two of the five improvements require ARCHITECTURAL changes to the pipeline, not just enrichments:

### Architectural Change 1: Mid-Build Gate Injection (#2)

Currently, the /build-page pipeline spawns the builder as a single agent that runs to completion. The orchestrator does not interact with the builder mid-build. To run MG-5 (midpoint gate), the orchestrator must either:

(a) **Split the builder into two phases:** Phase C.1 (skeleton + zones + borders) produces a partial HTML file. The orchestrator runs MG-5 gates. If pass, the builder continues with Phase C.2 (typography + components + refinement). If fail, fix instructions are sent.

(b) **Builder self-gates:** The builder runs micro-gates on its own output at midpoint, using Playwright or computed style checks. This avoids the orchestrator interaction but requires the builder to have gate-running capability.

**Recommendation:** Option (a) is more reliable because the orchestrator already has gate-running capability (Step 4 in /build-page). The builder produces `output-partial.html` at midpoint, signals completion, and the orchestrator gates it. This adds ~2 minutes to the pipeline but prevents 30+ minutes of post-build rework.

### Architectural Change 2: Recipe-Format Conventions Brief (#3)

This is a CONTENT change, not an architectural change per se. But it requires rewriting 584 lines of a document that serves multiple audiences (builders, auditors, researchers). The safest approach:

1. Keep the current `conventions-brief.md` as `conventions-brief-reference.md` (available to auditors/researchers)
2. Create a new `conventions-brief.md` that is the recipe version (~200 lines)
3. Update `/build-page SKILL.md` to point builders to the recipe version

This preserves backward compatibility while giving builders the format they need.

---

## PART 5: IMPLEMENTATION ROADMAP

| Priority | Improvement | Difficulty | Files | Estimated Time |
|----------|------------|------------|-------|---------------|
| 1 | Boundary-keyed CSS table in TC brief | MEDIUM | build-page SKILL.md | 30 min |
| 2 | Midpoint micro-gate (MG-5) | MEDIUM | build-page SKILL.md, gate-runner.md | 45 min |
| 3 | Recipe-format conventions brief | HARD | conventions-brief.md (new + rename) | 2-3 hours |
| 4 | SC-17 Parametric Echo gate | EASY | gate-runner.md, build-page SKILL.md | 20 min |
| 5 | Tiered fix cycle + extended limit | EASY | build-page SKILL.md | 30 min |

**Total estimated implementation time:** 4-5 hours

**Validation:** After implementing all 5, run `/build-page` on 2 different content files. If both score PA-05 >= 3.5, the improvements are validated. If one scores >= 3.5 and one scores 3.0-3.4, the improvements are partially validated (content-specific gap remains). If both score < 3.0, the improvements are insufficient and the architectural issue (single-agent builder attention limit) dominates.

---

## PART 6: THE HONEST ASSESSMENT

**Can handoff improvements alone close the gap from 2.5 to 4.0?**

Probably not entirely. Here is why:

1. **The intentionality gap (Layer F) is unanalyzed.** The pipeline-analysis corpus explicitly flags this: "the corpus's biggest blind spot" (file 31). What separates COMPOSED (3/4) from DESIGNED (4/4) is intentionality -- the quality where every element feels like it exists because the designer WANTED it there, not because a rule required it. This is a property of the BUILDER'S CREATIVE JUDGMENT, not of the handoff protocol. No amount of boundary tables, recipe formats, or gate runners can produce the spark of creative decision-making that makes CD-006 feel alive.

2. **The recipe thesis has a ceiling.** The pipeline-analysis corpus warns: "recipe may cap at 3/4" (file 05, Section 5). A recipe produces CORRECT work. 4/4 requires SURPRISING work -- moments where the builder does something unexpected-yet-perfect. Recipes cannot prescribe surprise.

3. **The 3-variable confound is unresolved.** The remediation changed format (recipe), specificity (exact values), AND perception (thresholds) simultaneously. We do not know which change drove the improvement from 1.5 to 2.5. The cheapest experiment (add ONLY perception thresholds to the original prompt, re-run) has not been executed.

**Realistic expectation:** These 5 improvements should raise the floor from 2.5/4 to 3.0-3.5/4. Getting to 4/4 likely requires either (a) an Opus builder with exceptional creative judgment (the CD-006 scenario), (b) multiple iterations with increasingly refined compositional feedback, or (c) a fundamentally different pipeline architecture where compositional decisions are not compressed across agent boundaries.

The 5 improvements address the PREVENTABLE failures (sub-perceptual CSS, missing borders, whitespace voids, uniform components, fix-cycle degradation). The remaining gap is the CREATIVE frontier -- the territory where rules end and judgment begins. That territory cannot be codified. It can only be reached by builders with deep internalization of the design system's values, which is what the TC skill, the conventions brief, and the build process are designed to cultivate.

---

**END OF CRITICAL PATH ANALYSIS**
