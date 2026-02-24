# Omission Remediation: Fixes for 5 Partially Fixable Omission Instances

**Analyst:** omission-remediation-agent (Opus 4.6)
**Date:** 2026-02-24
**Sources:** artifact-builder-recipe.md, artifact-pa-protocol.md, MANIFEST.md, 04-loss-mechanism-taxonomy.md, 08-anti-loss-catalog.md, mechanism-catalog.md, components.css
**Constraint:** All fixes must preserve anti-loss mechanisms M-11 (recipe format), M-04 (gate-hidden-from-builder), M-20 (fresh-eyes), M-12 (world-description framing), and the 80% creative authority principle.

---

## Table of Contents

1. [OM-09: Fractal Coherence Within Components](#om-09-fractal-coherence-within-components)
2. [OM-10: Zone-Specific Component Adaptation](#om-10-zone-specific-component-adaptation)
3. [OM-11: Restraint-as-Expression Technique](#om-11-restraint-as-expression-technique)
4. [OM-15: Builder Self-Evaluation Protocol (Phase 5)](#om-15-builder-self-evaluation-protocol-phase-5)
5. [OM-16: Temporal Composition Verification (Phase 6)](#om-16-temporal-composition-verification-phase-6)
6. [Cross-Cutting Analysis](#cross-cutting-analysis)
7. [Implementation Priority and Sequencing](#implementation-priority-and-sequencing)

---

## OM-09: Fractal Coherence Within Components

### A. Precise Root Cause

**Where the omission occurs:** The pipeline junction between mechanism-catalog.md (which describes fractal coherence as a PRINCIPLE in the "Scales" section, lines 804-867) and artifact-builder-recipe.md (which instructs the builder to deploy mechanisms but never instructs zone-level adaptation of components).

**What file/section should contain this:** artifact-builder-recipe.md Phase 3 ("DEPLOY YOUR SCAFFOLDING"), specifically around Step 3.4 ("Deploy the page -- Build Order"). The recipe tells the builder to deploy mechanisms and use the component library, but never says: "After deploying a component, check whether its internal styling echoes the page's governing logic at a smaller scale."

**Why the builder skips it:** The recipe provides two separate instructions without connecting them:
1. "Read components.css" (Phase 1, Step 1.2)
2. "Deploy the 6-channel framework" (Phase 3, Step 3.1)

The builder reads components.css as a LIBRARY to pull from. It reads the 6-channel framework as a PAGE-LEVEL tool. Nothing bridges them -- nothing says "the 6-channel framework should also operate WITHIN components." The mechanism-catalog.md "Scales" section (lines 804-867) explicitly describes this bridge, including a concrete example: "Callouts have sparse 12px label zone, dense 16px body zone. Headers use lighter weight, bodies use regular weight." But this section is 700+ lines into the catalog, making it easy to skim past, and it is framed as THEORY ("What Are Scales?") not as a RECIPE STEP.

**Root cause chain:** mechanism-catalog.md describes fractal coherence (theory) --> theory is not translated into a recipe step --> builder deploys components as-is from library --> components look identical regardless of page context.

### B. Proposed Fix (Concrete)

**File to edit:** artifact-builder-recipe.md

**Location:** After Step 3.4 ("Deploy the page -- Build Order"), BEFORE Step 3.5 ("Assess scaffolding"). Insert a new step.

**Exact text to add:**

```markdown
### Step 3.4b: Adapt components to zone character (fractal coherence)

After deploying components from the library, adapt their internal CSS to echo
the page's governing logic at a smaller scale. Each component should feel like
a miniature version of the zone it inhabits.

**VOCABULARY:** For each component instance, adjust these properties to match the zone:
- **Padding:** Match zone density (generous in sparse zones, compressed in dense zones)
- **Border-weight:** Match zone hierarchy (4px in primary zones, 3px in secondary)
- **Background tint:** Derive from the zone's background (not the library default)
- **Label sizing:** Match zone typography scale (larger labels in overview zones, smaller in dense zones)

**REFERENCE:** CD-006 callouts vary per zone:
- Zone 1 (opening): padding 20px 24px (generous), border-left 4px
- Zone 3 (dense): padding 12px 16px (compressed), border-left 5px (heavier -- compression emphasizes)

**ASSESS:** Pick any component. Does its internal structure rhyme with the zone's character? If the zone is compressed and the component has generous padding, the component feels pasted in.
```

**New PA question:** Not needed. PA-63 already covers this exactly: "Zoom into one component. Does its internal design echo the page's overall design language at a smaller scale? Then find the SAME component type in a different section -- does it adapt to its surroundings, or look identical?"

**New gate:** Not needed. This is compositional judgment -- it cannot be programmatically verified.

**New disposition:** Not needed. D-01 (Content-Register Reading) and D-02 (Room Perception) together create the conditions, but the specific instruction to APPLY these at the component level is the missing link that Step 3.4b provides.

### C. Fix Classification

**COMPOSITIONAL.** The recipe step provides vocabulary and reference values, but whether the builder actually produces perceptible component adaptation depends on compositional judgment. The builder could satisfy this minimally (change one padding value per component) without achieving genuine fractal coherence. However, the REFERENCE VALUES (20px 24px vs 12px 16px) provide a concrete demonstration, which mitigates the compositional risk.

### D. Risk Assessment

- **Could become a quality suppressor?** LOW risk. The instruction is framed as vocabulary ("adjust these properties to match") not as prohibition ("components MUST NOT have identical padding across zones"). It adds creative direction, not constraint.
- **Cognitive load:** MEDIUM. Adds one new step to Phase 3, but the step is concrete (4 properties to check, 2 reference values). Approximately 15 lines.
- **Specification paradox:** ACCEPTABLE. The 15 lines are within budget if we keep the total additions under control.
- **Recipe-to-checklist risk:** LOW. The step uses recipe verbs (Adapt, Adjust, Match, Assess) and provides vocabulary, not thresholds.

### E. Verification Strategy

- **PA-checkable:** YES. PA-63 (Tier 5, Auditor E) directly tests this: "Does its internal design echo the page's overall design language at a smaller scale?"
- **Gate-checkable:** NO. Component padding variation is not binary -- the gate would need to know WHICH zone each component is in and WHAT the zone's character IS, which requires semantic understanding.
- **Success evidence:** PA auditor E answers PA-63 with YES and names the shared language. PA auditor E identifies that the SAME component type in different zones looks visibly different.

---

## OM-10: Zone-Specific Component Adaptation

### A. Precise Root Cause

**Where the omission occurs:** This is the SAME omission as OM-09 viewed from the opposite direction. OM-09 asks "does the component echo the page?" OM-10 asks "does the component change between zones?" Both are caused by the same gap: the builder recipe instructs component DEPLOYMENT but not component ADAPTATION.

**What file/section should contain this:** artifact-builder-recipe.md Phase 2 ("SELECT YOUR PER-PAGE CREATIVE DECISIONS"), specifically Step 2.4 ("Select callout variant semantics"). This step ALREADY contains the right content -- it describes zone-adapted callouts with specific reference values. The problem is NOT that the information is missing from the recipe. The problem is that Step 2.4 is a SELECTION step, and there is no corresponding DEPLOYMENT step that operationalizes those selections.

**Why the builder skips it:** Step 2.4 says "Decide how callouts adapt to zone context" and provides reference values. But Phase 3 (DEPLOY) never says "Now implement those per-zone callout decisions." The builder selects adaptation in Phase 2 and then deploys uniform components in Phase 3 because nothing connects the selection to the deployment. The selection drifts during the 200+ lines between Step 2.4 and the actual building.

**Root cause chain:** Step 2.4 correctly specifies zone adaptation (selection) --> Phase 3 does not reference Step 2.4 selections --> builder writes CSS using library defaults --> all callouts identical.

### B. Proposed Fix (Concrete)

**File to edit:** artifact-builder-recipe.md

**Location:** The fix for OM-10 IS the same fix as OM-09 (Step 3.4b above). The key addition is the explicit callback to Phase 2 selections:

**Additional sentence to add to Step 3.4b:**

```markdown
**CALLBACK to Phase 2:** Review the callout variant decisions you made in Step 2.4.
Deploy those per-zone adaptations NOW -- do not use the library defaults uniformly.
```

This single sentence bridges the selection-deployment gap. It costs 2 lines.

**Alternatively,** add a cross-reference in Step 2.4 itself:

```markdown
> These selections will be deployed in Step 3.4b. Write them down — you will need them.
```

This costs 1 line and creates a forward reference that primes the builder to remember.

### C. Fix Classification

**COMPOSITIONAL** (identical to OM-09). The callback is MECHANICAL, but whether the builder produces perceptible zone-specific adaptation is compositional judgment.

### D. Risk Assessment

- **Could become a quality suppressor?** NO. This is a cross-reference, not a new constraint.
- **Cognitive load:** MINIMAL. 2 additional lines.
- **Specification paradox:** NOT AFFECTED. This is a structural connection, not new content.
- **Recipe-to-checklist risk:** NONE. A callback is a recipe technique (chefs say "return to the sauce you set aside in step 2").

### E. Verification Strategy

- **PA-checkable:** YES. PA-63 covers this (same as OM-09). Additionally, PA-16 ("Pick two elements that should look identical. Do they?") provides an inverse check -- if two callouts in different zones look identical, the auditor can flag it.
- **Gate-checkable:** PARTIALLY. A gate could check whether callout CSS varies between zones (e.g., whether `.callout` has different computed padding in different parent sections). This would be a LOW-CONFIDENCE gate because it would require knowing which parent class maps to which zone.
- **Success evidence:** PA-63 YES with "STRONG YES if same component adapts visibly to different zones."

---

## OM-11: Restraint-as-Expression Technique

### A. Precise Root Cause

**Where the omission occurs:** The pipeline has the DETECTION mechanism (PA-64 asks "Is there a section that is DELIBERATELY plain?") but lacks the CREATION mechanism. The builder recipe instructs the builder to deploy mechanisms, deploy dispositions, and use the full vocabulary -- but never instructs the builder to WITHHOLD deployment in specific zones as a deliberate compositional choice.

**What file/section should contain this:** artifact-builder-recipe.md Phase 4 ("DEPLOY DISPOSITIONAL INSTRUCTIONS"). D-06 ("Negative Space as Shape") is the closest existing instruction, but D-06 addresses whitespace BETWEEN zones, not density WITHIN zones. D-08 ("The Skeleton Test") asks "does the skeleton have shape?" -- but shape requires both loud AND quiet sections, and nothing instructs the builder to create the quiet ones.

**Why the builder skips it:** The builder recipe creates a pervasive pressure toward richness:
- Phase 3 says "Deploy the 6-channel framework" (deploy everywhere)
- Phase 3 says "At least 2 distinct layout patterns" (deploy variety)
- Phase 4 says "Deploy D-01 through D-08" (more deployment)
- Quality Floor says ">=14 mechanisms, >=800 CSS lines" (minimum density targets)

Every instruction says ADD. Nothing says WITHHOLD. The builder, optimizing for quality, fills every zone with mechanism deployments. The result is uniform density -- every zone tries to be "rich," which paradoxically produces monotony. The ceiling experiment's 70-80% whitespace void was the INVERSE of this problem (too much restraint), but the Gas Town build's uniform density is the same root cause: no instruction to vary the density WITHIN the build.

**Root cause chain:** Recipe instructs deployment --> every zone gets deployments --> no quiet zones --> no contrast --> density monotony.

### B. Proposed Fix (Concrete)

**File to edit:** artifact-builder-recipe.md

**Location:** Phase 4, after D-08 ("The Skeleton Test"). Add a new disposition instruction.

**Exact text to add:**

```markdown
### D-09: The Quiet Zone [EXPERIMENTAL] [NEW]

**PURPOSE:** Designate at least ONE zone as deliberately plainer than its neighbors.
Restraint is not emptiness -- it is the silence that makes surrounding sound audible.

**VOCABULARY:**
- Choose 1 zone in the middle third of the page (not the opening, not the closing)
- In that zone: use FEWER mechanisms than surrounding zones (2-3 instead of 4-5)
- Reduce: no bento grid, no multi-column, no component variety -- single-column prose
- Preserve: zone background, typography, border-weight (these maintain family membership)
- The goal is DESIGNED QUIET, not FORGOTTEN. The zone should still feel intentional.

**DESIGN INTENTION:** D-09 creates conditions for CONTRAST. The loud zones feel louder
by comparison. The quiet zone offers the reader a resting point before the next dense section.

**ANTI-PATTERN:** Empty zone with uniform cream background and no content treatment.
That is "forgot to design" not "designed quiet." The quiet zone should still have
its own background color, its own typography treatment, its own spacing -- just fewer
competing visual elements per viewport.
```

**Line cost:** ~20 lines.

**New PA question:** Not needed. PA-64 already covers this exactly: "Is there a section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? Can you tell the difference between 'designed quiet' and 'forgot to design this part'?"

**New gate:** Not possible. "Deliberately plain" is a compositional judgment. A gate checking "lowest mechanism density zone" would catch accidental emptiness as well as deliberate restraint.

### C. Fix Classification

**COMPOSITIONAL.** This is the hardest fix of the five. Prescribing restraint is paradoxical -- "be quiet here" often becomes either "be empty here" (too much restraint) or "be slightly less loud here" (imperceptible restraint). The fix provides vocabulary (what to REDUCE, what to PRESERVE) and anti-patterns (empty cream vs designed quiet), but execution depends entirely on builder compositional judgment.

### D. Risk Assessment

- **Could become a quality suppressor?** MEDIUM risk. If the builder interprets "plain" as "skip design effort," D-09 could produce empty zones that PA-50 (void detection) would flag. The anti-pattern section mitigates this, but the risk is real.
- **Cognitive load:** MEDIUM. D-09 is the 9th disposition instruction. The existing 8 (D-01 through D-08) already consume the Tier 4 budget (25/40 lines in the Gas Town brief). Adding D-09 either requires expanding Tier 4 or displacing an existing instruction.
- **Specification paradox:** THIS IS THE CRITICAL RISK. The recipe already exceeds the builder's attention budget at 840 lines. Adding 20 more lines of disposition further dilutes attention. D-09 could be the instruction that tips the balance from "recipe" to "too many instructions."
- **Recipe-to-checklist risk:** LOW. D-09 uses recipe framing (Purpose, Vocabulary, Design Intention) consistent with D-01-D-08. But the word "Designate at least ONE zone" has a checklist feel -- it prescribes a minimum. Consider softening to "Consider designating a zone..." but this risks the instruction being ignored entirely.

### E. Verification Strategy

- **PA-checkable:** YES. PA-64 (Tier 5, Auditor C) directly tests this.
- **Gate-checkable:** NO. Deliberate plainness cannot be distinguished from accidental emptiness programmatically.
- **Success evidence:** PA-64 YES with "plainness feels INTENTIONAL AND surrounding sections feel richer by contrast." The INTENTIONAL qualifier is key -- it distinguishes designed quiet from neglected empty.

---

## OM-15: Builder Self-Evaluation Protocol (Phase 5)

### A. Precise Root Cause

**Where the omission occurs:** artifact-builder-recipe.md Phase 5 ("SELF-EVALUATE AND REFINE"), lines 532-576. The phase exists -- it has 5 steps (5.1 through 5.5) totaling ~45 lines. The problem is not specification but ENFORCEMENT. The builder prompt (MANIFEST Appendix E) lists "PHASE 5 - SELF-EVALUATE" as a 1-line instruction: "Every zone transition = different room? 3+ transition types? Skeleton has shape?" This is the entire Phase 5 that reaches the builder through the brief.

**What file/section should contain this:** The builder prompt in MANIFEST.md Appendix E, lines 973-974. The prompt gives Phase 5 a single line, making it trivially skippable. The full Phase 5 in artifact-builder-recipe.md is 45 lines, but the Brief Assembler compresses it to 1 line in the Execution Brief because Tier 3 has only ~50 lines for all of Phases 1-6.

**Why the builder skips it:** Three reinforcing causes:
1. **Compression:** Phase 5 is 45 lines in the recipe but 1 line in the brief. The builder sees only the 1-line summary.
2. **No required output:** Phase 5 produces no deliverable. Phases 1-4 each produce something (vocabulary knowledge, selections, HTML, disposition). Phase 5 produces... self-reflection. Without a required output artifact, the builder treats Phase 5 as optional.
3. **Token budget exhaustion:** By Phase 5, the builder has already written 800-1200 lines of CSS + full HTML. The builder's generation is nearly complete. Self-evaluation requires RE-READING the output and comparing against the conviction -- a significant additional step when the builder is ready to finalize.

**Root cause chain:** 45-line recipe --> 1-line brief compression --> no required deliverable --> builder skips self-evaluation --> trailing void goes undetected.

### B. Proposed Fix (Concrete)

**Fix 1: Make self-evaluation a REQUIRED OUTPUT** (STRUCTURAL)

**File to edit:** MANIFEST.md Appendix E, Builder Prompt (Phase 2)

**Exact text to modify in builder prompt (lines 973-974):**

Replace:
```
PHASE 5 - SELF-EVALUATE: Every zone transition = different room? 3+ transition types? Skeleton has shape?
```

With:
```
PHASE 5 - SELF-EVALUATE: Before outputting the HTML, answer these 4 questions
as a code comment block at the TOP of your output (after the conviction statement):
1. Zone transitions: Does each boundary feel like entering a different room? (YES/NO per boundary)
2. Transition types: How many distinct transition types are used? (COUNT -- need 3+)
3. Skeleton shape: If you stripped all text content, would the spacing/borders/backgrounds
   still have visual rhythm? (YES/NO)
4. Scroll surprise: Is there at least one moment in the second half that breaks the established
   pattern? (YES/NO -- if NO, revisit D-04)
```

**Line cost:** +5 lines in the builder prompt (from 1 to 6). Zero additional lines in the recipe -- the recipe already has Phase 5 content.

**Fix 2: Expand Phase 5 in the brief** (MECHANICAL)

**File to edit:** artifact-tc-brief-template.md

Add a note in the assembly rules that Phase 5 must receive at least 4 lines in the Execution Brief (not compressed to 1 line). This is a budget allocation change, not new content.

**New gate:** Add a PRECONDITION gate that checks for the self-evaluation comment block in the HTML output:

```javascript
// GR-XX: Self-evaluation comment present
const html = await page.content();
const hasSelfEval = html.includes('<!-- SELF-EVALUATION:') ||
                     html.includes('<!-- Self-Evaluation:');
return hasSelfEval ? 'PASS' : 'FAIL';
```

This is a binary check for the EXISTENCE of the self-evaluation, not its QUALITY.

### C. Fix Classification

**STRUCTURAL.** This fix requires:
1. Modifying the builder prompt (MANIFEST Appendix E)
2. Modifying the brief template assembly rules (artifact-tc-brief-template.md)
3. Adding a new precondition gate (artifact-gate-runner.md)

The fix is structural because it changes the builder's OUTPUT FORMAT (adds a required deliverable) and adds a verification gate.

### D. Risk Assessment

- **Could become a quality suppressor?** LOW risk for the required output. The builder writes 4 lines of YES/NO answers -- this is minimal cognitive overhead. The gate is binary (comment exists or doesn't) and cannot cause threshold gaming.
- **Could become box-checking?** HIGH risk. The builder might write "YES YES YES YES" without actually self-evaluating. The self-evaluation's VALUE is in the ACT of reflection, not the OUTPUT. A builder that writes "NO" for skeleton shape and then doesn't fix anything has completed the requirement but missed the point.
- **Cognitive load:** LOW. 4 questions, YES/NO answers, as an HTML comment. This is ~30 seconds of additional work.
- **Specification paradox:** NOT AFFECTED. This adds 5 lines to the builder prompt, which is well within budget.
- **Recipe-to-checklist risk:** MEDIUM. The 4 questions ARE a mini-checklist. But they are framed as self-assessment ("answer these questions") not as pass/fail ("fail if any answer is NO"). The builder is invited to self-reflect, not to comply. This distinction is critical and fragile.

### E. Verification Strategy

- **Gate-checkable:** YES (existence of self-evaluation comment). The gate checks that the builder DID produce the self-evaluation output. It does not check quality.
- **PA-checkable:** INDIRECTLY. If the builder self-evaluates honestly and finds issues, those issues are more likely to be fixed before PA. The PA would see a better page. But we cannot attribute PA improvement specifically to self-evaluation vs other factors.
- **Success evidence:** The self-evaluation comment exists in 100% of builds (gate enforcement). The self-evaluation identifies at least one issue that the builder then addresses (observable by comparing the comment's answers against the final HTML -- e.g., if the comment says "skeleton shape: NO" but the page has obvious spatial rhythm, the builder addressed the finding). Most importantly: trailing void-class defects are caught by the builder before reaching PA.

---

## OM-16: Temporal Composition Verification (Phase 6)

### A. Precise Root Cause

**Where the omission occurs:** artifact-builder-recipe.md Phase 6 ("TEMPORAL COMPOSITION (Advanced)"), lines 579-631. Like Phase 5, Phase 6 exists in the recipe but is compressed to 1 line in the builder prompt: "PHASE 6 - TEMPORAL COMPOSITION: Section height varies? Loud/quiet zones alternate? Ending feels earned?"

**What file/section should contain this:** Two locations: (1) the builder prompt in MANIFEST.md Appendix E, and (2) artifact-gate-runner.md for the MEASURABLE aspects.

**Why the builder skips it:** The same three causes as Phase 5 (compression, no required output, token budget exhaustion), PLUS a fourth cause unique to Phase 6: **temporal composition is labeled "(Advanced)"** in the recipe. This label signals to the builder that Phase 6 is optional or aspirational. The builder, having already completed 800+ lines of CSS, treats "(Advanced)" as "if you have time," and since LLM builders do not have time pressure in the human sense but DO have context window pressure, they skip it to finalize output.

Additionally, Phase 6's content overlaps heavily with earlier phases:
- Step 6.1 (density arc) overlaps with Step 3.3 (deploy visual density arc)
- Step 6.2 (multi-coherence) overlaps with Step 3.1 (deploy 6-channel framework)
- Step 6.3 (structural metaphor) overlaps with Step 2.3 (select structural metaphor)
- Step 6.4 (content-form coupling) overlaps with D-01 (content-register reading)
- Step 6.5 (creative authority + components) overlaps with Phase 1 (read vocabulary)
- Step 6.6 (CSS value tables) overlaps with Phase 1 (read tokens.css)

Phase 6 is essentially a VERIFICATION PASS over Phases 2-4, not new work. But it is labeled as a separate deployment phase, which confuses the builder about its purpose.

**Root cause chain:** Phase 6 labeled "(Advanced)" + overlaps with earlier phases + compressed to 1 line --> builder perceives it as redundant and optional --> temporal composition never verified --> scroll rhythm and density arc unchecked.

### B. Proposed Fix (Concrete)

**Fix 1: Merge Phase 6 VERIFICATION into Phase 5** (STRUCTURAL)

Rather than keeping Phase 6 as a separate phase, merge its verifiable aspects into Phase 5's self-evaluation. This eliminates the redundancy and ensures temporal composition is checked during self-evaluation.

**File to edit:** MANIFEST.md Appendix E, Builder Prompt (Phase 2)

**Replace the Phase 6 line with an expansion of Phase 5:**

Replace:
```
PHASE 6 - TEMPORAL COMPOSITION: Section height varies? Loud/quiet zones alternate? Ending feels earned?
```

With (merge into Phase 5 self-evaluation):
```
5. Section height: Do sections have at least 3 DIFFERENT heights? (YES/NO -- uniform heights = metronomic)
6. Density arc: Does density increase and then resolve? (DESCRIBE the arc in 5 words or fewer)
7. Ending: Does the final viewport feel earned by the journey before it? (YES/NO)
```

This adds 3 questions to the self-evaluation block, for a total of 7 self-evaluation questions. The Phase 6 line is REMOVED from the builder prompt entirely.

**Line cost:** +3 lines in Phase 5, -1 line for Phase 6 removal. Net: +2 lines.

**Fix 2: Add MEASURABLE temporal checks to gate runner** (MECHANICAL)

**File to edit:** artifact-gate-runner.md

**New gate (GR-XX): Section Height Variation**

```javascript
// GR-XX: Section Height Variation
// At least 3 distinct section heights (within 50px tolerance bands)
const sections = await page.$$('section, [class*="zone"], [class*="section"]');
const heights = [];
for (const section of sections) {
  const box = await section.boundingBox();
  if (box) heights.push(Math.round(box.height / 50) * 50); // 50px bands
}
const distinctHeights = new Set(heights).size;
return distinctHeights >= 3 ? 'PASS' : 'FAIL';
```

**New gate (GR-XX+1): Density Arc Direction**

```javascript
// GR-XX+1: Density Arc -- Not Uniform
// Check that the densest section is NOT the first or last (suggests arc, not flat)
const sections = await page.$$('section, [class*="zone"], [class*="section"]');
const densities = [];
for (const section of sections) {
  const children = await section.$$('*');
  const box = await section.boundingBox();
  if (box) densities.push(children.length / box.height); // elements per pixel
}
if (densities.length < 3) return 'PASS'; // too few sections to check
const maxIdx = densities.indexOf(Math.max(...densities));
const isFirst = maxIdx === 0;
const isLast = maxIdx === densities.length - 1;
// Density peak should be in the middle, not at edges
return (!isFirst && !isLast) ? 'PASS' : 'ADVISORY';
```

Note: The density arc gate is ADVISORY, not binary PASS/FAIL, because some valid density patterns (crescendo ending in a dense zone) would fail this check.

### C. Fix Classification

**STRUCTURAL** (Fix 1: prompt restructure) + **MECHANICAL** (Fix 2: gate code).

Fix 1 restructures the builder prompt by merging Phase 6 into Phase 5, eliminating a redundant phase and ensuring temporal composition is checked during self-evaluation. Fix 2 adds 2 new gates for the measurable aspects of temporal composition.

### D. Risk Assessment

- **Could become a quality suppressor?** LOW for self-evaluation questions (same framing as Phase 5 questions). LOW for section height gate (binary, measurable). LOW for density arc gate (advisory only).
- **Cognitive load:** LOW. Removing Phase 6 as a separate concept REDUCES cognitive load. The builder no longer needs to think "what does Phase 6 add beyond Phase 3?" The 3 temporal questions are integrated into self-evaluation, which the builder is already doing.
- **Specification paradox:** IMPROVED. Merging Phase 6 into Phase 5 REDUCES the recipe's apparent length by removing a redundant phase header and its content. The recipe goes from 6 phases to 5 phases.
- **Recipe-to-checklist risk:** LOW. The self-evaluation questions use the same framing as OM-15's fix (self-assessment, not pass/fail). The gates are hidden from the builder per M-04 (gate-hidden-from-builder).
- **Risk of the "ending feels earned" question:** This question is fundamentally subjective. The builder could answer "YES" without genuine reflection. But the ACT of asking forces at least a moment of consideration, which is better than the current state (zero consideration).

### E. Verification Strategy

- **Gate-checkable:** PARTIALLY. Section height variation (>=3 distinct heights) is fully gate-checkable. Density arc direction (peak not at edges) is gate-checkable as advisory. "Ending feels earned" is NOT gate-checkable.
- **PA-checkable:** YES. PA-13 ("Is there a clear visual ending, or does the page just stop?"), PA-35 ("Scroll at reading speed. Does interest stay level, peak and valley, or fade?"), and PA-36 ("Is there a dramatic visual moment?") all verify temporal composition.
- **Success evidence:** Section height gate PASS (3+ distinct heights). Self-evaluation comment includes density arc description. PA-35 reports "peak and valley" rather than "stays level." PA-13 reports "clear visual ending" rather than "just stops."

---

## Cross-Cutting Analysis

### Complementary Fixes (Implement Together)

**OM-09 + OM-10: MANDATORY BUNDLE.** These address the same gap (component adaptation) from two angles (fractal echo and zone-specific variation). The fix IS the same fix (Step 3.4b + callback). Implementing one without the other is impossible because they are the same insertion.

**OM-15 + OM-16: MANDATORY BUNDLE.** Fix 1 for OM-16 merges Phase 6 into Phase 5. You cannot implement OM-15's self-evaluation expansion without also deciding what to do with Phase 6. Implementing them together produces a single, coherent self-evaluation block with 7 questions.

**OM-11 + OM-09/10: COMPLEMENTARY.** D-09 (quiet zone) and Step 3.4b (component adaptation) reinforce each other. If the builder creates a quiet zone, the components in that zone should be simpler (component adaptation). If components adapt to zones, the quiet zone's components should be visibly plainer. These fixes create a SYSTEM: D-09 creates the quiet zone, Step 3.4b ensures components respond to it.

### Conflicting Fixes

**OM-11 (D-09) vs OM-16 (density arc gate).** If D-09 instructs the builder to create a deliberately plain zone, and the density arc gate checks that the densest section is not at the edges, there is a tension: the quiet zone could be the lowest-density section, and if it is at a page edge (which D-09 explicitly prevents by saying "middle third"), the gate still passes. No actual conflict, but the builder must coordinate: the quiet zone should be in the middle third of the scroll, and the density arc should peak in the middle third, which means the quiet zone should be adjacent to (but not identical with) the density peak. This is compositionally complex but not contradictory.

**OM-15 (self-evaluation as required output) vs OM-11 (quiet zone).** If the self-evaluation asks "Skeleton has shape?" (question 3), the builder must evaluate its own quiet zone. A builder that created a quiet zone might answer "YES, skeleton has shape -- sparse in the middle, dense around it." A builder that did NOT create a quiet zone might still answer "YES" if the page has other spatial variation. No conflict.

### No Conflicts Detected

All 5 fixes are compatible. They operate on different pipeline components (recipe steps, disposition instructions, self-evaluation protocol, gate code) and none contradicts another.

### Priority Ordering

**Impact and risk ranked:**

| Rank | Fix | Impact | Risk | Line Cost | Justification |
|------|-----|--------|------|-----------|---------------|
| 1 | OM-15 (self-evaluation required output) | HIGH | LOW | +5 lines | Prevents the #3 ranked loss (OM-14: trailing void undetected). Mechanical enforcement via gate. Lowest risk of all 5 fixes. |
| 2 | OM-16 (merge Phase 6 into Phase 5) | HIGH | LOW | +2 lines (net) | Eliminates redundant phase, adds measurable gates for temporal composition. REDUCES cognitive load. |
| 3 | OM-09/10 (fractal + zone component adaptation) | MEDIUM-HIGH | LOW-MEDIUM | +17 lines | Addresses PA-63 (Tier 5 question) and the "callouts identical across all zones" defect. Reference values are concrete. |
| 4 | OM-11 (D-09 quiet zone) | MEDIUM | MEDIUM | +20 lines | High compositional value if executed well, but highest risk of misinterpretation. The "designed quiet vs forgot to design" distinction is genuinely hard. |

### Total Line Budget Impact

| Fix | File Modified | Lines Added | Lines Removed |
|-----|--------------|-------------|---------------|
| OM-09/10 | artifact-builder-recipe.md (Step 3.4b) | +17 | 0 |
| OM-11 | artifact-builder-recipe.md (D-09) | +20 | 0 |
| OM-15 | MANIFEST.md (builder prompt) | +5 | -1 (old Phase 5 line) |
| OM-16 Fix 1 | MANIFEST.md (builder prompt) | +3 | -1 (old Phase 6 line) |
| OM-16 Fix 2 | artifact-gate-runner.md (2 new gates) | +30 | 0 |
| **TOTAL** | | **+75** | **-2** |

**Net addition: +73 lines across 3 files.**

### Will These Fixes Push the Brief Past the 200-Line Danger Zone?

**Analysis of what reaches the builder:**

The builder receives:
1. **Builder prompt:** Currently ~33 lines (MANIFEST Appendix E, lines 959-992). After OM-15 and OM-16 fixes: ~39 lines. Well under 200.
2. **Execution Brief:** Currently ~100-165 lines. OM-11's D-09 adds ~4-6 lines to Tier 4 (the disposition section of the brief). New total: ~104-171 lines. Under 200 but approaching.
3. **Direct files:** tokens.css (183 lines), components.css (290 lines), mechanism-catalog.md (~1,200 lines). These are NOT affected by any fix.

**The builder recipe itself** (artifact-builder-recipe.md) goes from 840 lines to ~877 lines with OM-09/10 and OM-11 additions. But the recipe is NOT sent directly to the builder -- it is SYNTHESIZED into the brief by the Brief Assembler. The Brief Assembler extracts key instructions from the recipe into the brief's Tier 3 and Tier 4 sections.

**Critical question: Will the Brief Assembler include Step 3.4b and D-09?**

The Brief Assembler follows the extraction guide in MANIFEST.md Section 3 (artifact-builder-recipe.md routing table): "SUMMARIZE: Phase 2 creative decision framework" and "REFERENCE (not inline): Phase 3-6 deploy steps." This means:
- Step 3.4b (component adaptation) would be REFERENCED, not inlined -- the builder gets a 1-line reference to it.
- D-09 (quiet zone) would be INCLUDED VERBATIM per the extraction guide: "INCLUDE VERBATIM: disposition D-01-D-08 instructions."

This means D-09 would need to be updated to D-01 through D-09 in the extraction guide. And D-09's brief representation would need to fit within the Tier 4 budget (~40 lines, currently at 25). Adding D-09 at ~4-6 lines in the brief would bring Tier 4 to ~29-31 lines -- still under the 40-line target and actually closer to it.

**Conclusion: The brief stays under 200 lines.** The most impactful additions (self-evaluation, temporal composition) add to the builder PROMPT (not the brief), and the disposition addition (D-09) helps fill the Tier 4 underrun rather than exceeding the budget.

---

## Implementation Priority and Sequencing

### Recommended Implementation Order

**Phase 1: OM-15 + OM-16 (Self-Evaluation + Temporal Merge)**
- Implement together as a single change
- Edit MANIFEST.md builder prompt (7 self-evaluation questions replacing 2 old lines)
- Add 2 gates to artifact-gate-runner.md (section height variation + density arc direction)
- Remove "(Advanced)" label from Phase 6 header in artifact-builder-recipe.md
- Add note in Phase 6 header: "This phase is verified during Phase 5 self-evaluation"
- **Estimated effort:** 30 minutes
- **Verifiable immediately:** Gate for self-evaluation comment existence can be tested in next pipeline run

**Phase 2: OM-09 + OM-10 (Component Adaptation)**
- Add Step 3.4b to artifact-builder-recipe.md
- Add callback cross-reference in Step 2.4
- Update MANIFEST.md Section 3 extraction guide to include Step 3.4b in the REFERENCE list
- **Estimated effort:** 20 minutes
- **Verifiable in next pipeline run:** PA-63 answers should shift from NO to YES

**Phase 3: OM-11 (Quiet Zone Disposition)**
- Add D-09 to artifact-builder-recipe.md
- Update MANIFEST.md glossary (add D-09 to disposition list)
- Update artifact-tc-brief-template.md to include D-09 in Tier 4
- Update MANIFEST.md extraction guide (D-01 through D-08 --> D-01 through D-09)
- **Estimated effort:** 30 minutes
- **Verifiable in next pipeline run:** PA-64 answers should shift from NO to YES
- **RECOMMENDATION:** Run one build WITHOUT D-09 first to establish a baseline for the other 4 fixes, then add D-09 and compare. D-09 is the highest-risk fix and should be validated incrementally.

### Summary of All Edits

| File | Edit Description | Lines |
|------|-----------------|-------|
| artifact-builder-recipe.md | Add Step 3.4b after Step 3.4 | +17 |
| artifact-builder-recipe.md | Add cross-reference in Step 2.4 | +1 |
| artifact-builder-recipe.md | Add D-09 after D-08 | +20 |
| artifact-builder-recipe.md | Remove "(Advanced)" from Phase 6 header, add merge note | +1, -1 |
| MANIFEST.md Appendix E | Replace Phase 5 line with 7-question self-eval block | +6, -1 |
| MANIFEST.md Appendix E | Remove Phase 6 line (merged into Phase 5) | -1 |
| MANIFEST.md Section 3 | Update extraction guide for D-01-D-09 | +0 (word change) |
| MANIFEST.md Glossary | Add D-09 definition | +1 |
| artifact-gate-runner.md | Add self-evaluation comment gate | +10 |
| artifact-gate-runner.md | Add section height variation gate | +10 |
| artifact-gate-runner.md | Add density arc direction gate (advisory) | +10 |
| artifact-tc-brief-template.md | Add D-09 to Tier 4 assembly instructions | +2 |

**Grand total: +75 lines added, -3 lines removed. Net: +72 lines across 4 files.**

---

## Appendix: Relationship to Existing Anti-Loss Mechanisms

Each fix is evaluated against the 25 existing anti-loss mechanisms (from 08-anti-loss-catalog.md) to ensure no damage.

| Mechanism | OM-09/10 | OM-11 | OM-15 | OM-16 | Assessment |
|-----------|----------|-------|-------|-------|------------|
| M-11 Recipe Format | SAFE (uses recipe verbs) | SAFE (uses disposition format) | SAFE (self-assessment, not checklist) | SAFE (merge reduces phases) | No damage |
| M-04 Gate-Hidden | N/A | N/A | SAFE (gate checks comment existence, not quality) | SAFE (gates hidden from builder) | No damage |
| M-20 Fresh-Eyes | N/A | N/A | N/A | N/A | No damage (PA questions unchanged) |
| M-12 World-Description | N/A | SAFE (D-09 uses purpose framing) | N/A | N/A | No damage |
| 80% Creative Authority | SAFE (provides vocabulary, not mandates) | MEDIUM RISK (prescribes "at least ONE quiet zone") | SAFE (self-assessment questions) | SAFE (measurable gates) | OM-11 needs monitoring |

**OM-11 is the only fix with a non-trivial interaction with existing anti-loss mechanisms.** The phrase "Designate at least ONE zone" is a mandate within the 80% creative authority band. Strictly speaking, the builder should decide whether a quiet zone serves THIS content. But the evidence from Gas Town (every zone equally dense, PA-64 would answer NO) suggests that without explicit instruction, builders will never create quiet zones. The mandate trades a small amount of creative authority for a significant compositional improvement. This tradeoff should be monitored: if builders create perfunctory quiet zones (cream background, no treatment, feels empty), D-09 should be softened to "Consider designating..." with stronger anti-pattern examples.

---

*End of Omission Remediation Report. 5 omission instances analyzed, 4 concrete fix bundles proposed (OM-09+10, OM-11, OM-15+OM-16), total +72 net lines across 4 files, all preserving existing anti-loss mechanisms.*
