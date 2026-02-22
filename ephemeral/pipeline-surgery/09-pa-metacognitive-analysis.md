# PA Meta-Cognitive Analysis: Implications of TC-Driven Pipeline Architecture

**Author:** Meta-cognitive analyst (Opus)
**Date:** 2026-02-20
**Context:** Pipeline surgery -- evaluating whether the PA skill needs enrichment given the new /build-page architecture where TC runs BEFORE the builder.

---

## 1. TC-Awareness Assessment: Does PA Need to Know About TC?

### The Core Tension

The PA skill's Sovereignty Principle (line 61) states:

> "Audit the EXECUTION of research-backed decisions, never the decisions themselves."

The question is whether TC output constitutes a "research-backed decision" (LOCKED, not challengeable) or a "builder choice" (CHALLENGEABLE). This distinction matters enormously because it determines whether PA auditors can flag TC-derived compositions as failures.

### Analysis: TC Output Is Neither LOCKED Nor Fully CHALLENGEABLE

TC output occupies a novel third category that the current sovereignty framework does not accommodate:

**TC is not LOCKED (research-backed)** because:
- TC output varies per content. It is not a stable system-wide decision like "border-radius: 0."
- TC's metaphor is explicitly described as a CREATIVE ACT (TC SKILL.md line 10: "Your metaphor is CHOSEN, not found"). Creative acts are not research findings.
- TC output passes through the builder's interpretive filter -- the builder has "creative authority" to override non-soul values (build-page SKILL.md line 104).

**TC is not fully CHALLENGEABLE (builder choice)** because:
- TC operates BEFORE the builder, establishing the compositional foundation.
- The builder is instructed to "internalize" the TC brief (build-page line 82).
- TC decisions (metaphor, zones, tensions, mechanisms) are upstream of builder decisions.

**The missing category is COMPOSITIONAL INTENT -- decisions that establish the design direction but whose EXECUTION quality is fully auditable.** This is analogous to an architect choosing a building style (not auditable) but whose structural engineering IS auditable.

### What PA Actually Needs to Verify About TC

PA does NOT need to know about TC directly. The fresh-eyes principle correctly prohibits this. However, PA's EXISTING questions already cover TC's downstream effects -- with three critical gaps:

**Already covered (no change needed):**
- PA-44 detects whether metaphor is implicit vs explicit (structural vs announced)
- PA-42 detects metaphor-driven visual compromise
- PA-43 detects metaphor perceptual cost
- PA-60 detects design moment density
- PA-62 detects transition variation
- PA-63 detects fractal coherence
- PA-65 detects multi-voice composition

**Gap 1: Metaphor PERSISTENCE across scroll depth**
PA-44 asks "does the metaphor persist across the ENTIRE page?" -- this covers persistence. PA-68 (Tier 5) explicitly asks about spatial coverage across all three scroll thirds. This gap is ALREADY ADDRESSED by PA-68.

**Gap 2: Zone-boundary COMPOSITION quality**
PA-34 asks about transition quality. PA-62 asks about transition variation. But NEITHER explicitly asks: "At the boundary between two major areas, do MULTIPLE visual properties shift together in the SAME semantic direction?" The multi-coherence evaluation framework exists (PA skill lines 669-700) but is embedded in FRAMEWORK text that auditors never see. This is a coverage gap.

**Gap 3: Content-density CORRELATION**
No existing question asks: "Do visually dense areas contain dense content, and visually sparse areas contain sparse content?" This is a core TC principle (content-form coupling) that PA cannot currently detect. A page could pass all existing questions while having uniform visual treatment across wildly different content sections.

### Recommendation

**PA does NOT need to "know about TC."** TC knowledge would bias auditors toward confirming TC's intent rather than evaluating what they SEE. But PA DOES need 1-2 new questions that detect the downstream perceptual effects of TC-derived compositions -- specifically multi-coherence at boundaries and content-density correlation. These questions should be phrased in pure perceptual language with zero TC vocabulary.

---

## 2. Fresh-Eyes vs Framework Tension

### The Case FOR Framework Knowledge

The PA skill contains a rich evaluation framework: the Sovereignty Principle (line 59), the Three Laws (line 69), severity calibration (line 153), metaphor-awareness principles (lines 224-284, 592-667), multi-coherence evaluation (lines 669-700), and the progressive zoom test (lines 777-807). This is ~300 lines of sophisticated perceptual evaluation theory.

Currently, auditors receive ONLY:
- Their assigned questions (full text pasted into prompt)
- Screenshots (Read tool)
- The language hard-block rule

They NEVER see:
- The sovereignty principle
- Severity calibration tables
- Multi-coherence evaluation guidance
- Progressive zoom test protocol
- Metaphor-awareness principles
- The audit optimization trap warning

**The argument:** Auditors are leaving ~300 lines of evaluation intelligence on the table. An auditor evaluating PA-62 (transition variation) without multi-coherence calibration tables doesn't know that 3 simultaneous shifts = DESIGNED while 4-5 = COMPOSED. They can only describe what they see, without calibrated language for distinguishing functional transitions from composed ones.

**Evidence from Mode 4 PA history:** In the ceiling experiment's Mode 4 PA, 9/9 auditors flagged the whitespace void -- but they used imprecise language ("lots of empty space," "feels abandoned," "way too much blank area"). Without severity calibration (lines 153-165), they couldn't distinguish between a 2-viewport void (LOOKS-WRONG) and a 24-frame void (CATASTROPHIC). The Weaver had to infer severity from the chorus of complaints.

### The Case AGAINST Framework Knowledge

**The fresh-eyes principle is the PA skill's highest-leverage design decision.** Here's why giving auditors the framework would be destructive:

1. **Confirmation bias.** An auditor who reads "3 simultaneous shifts = DESIGNED" will count to 3 and stop. They won't notice that all 3 shifts are imperceptible (the Flagship failure mode -- 6 channels shifted but by 1-8 RGB points). Framework knowledge replaces SEEING with COUNTING.

2. **Vocabulary contamination.** The framework uses terms like "multi-coherence," "parametric echo," "fractal coherence," "compositional intelligence stack." An auditor who absorbs these terms starts SEARCHING for named phenomena rather than DESCRIBING what they perceive. "I see fractal coherence at 3 scales" is framework-confirmation. "The card's internal color progression mirrors the page's overall darkening arc" is genuine observation.

3. **Severity anchoring.** If an auditor knows that "2+ consecutive blank viewports = FAIL," they will measure viewports instead of FEELING the dead zone. The dead zone's perceptual impact is lost in the counting exercise. The Flagship 24-frame void was CATASTROPHIC not because it was 24 frames, but because it made the reader feel like the page was broken. That FEELING is what PA captures; the count is what the gate runner captures.

4. **The Audit Optimization Trap applies recursively.** Lines 5-43 warn against building TO PASS the audit. The same principle applies to AUDITING with the framework: if auditors audit to DETECT framework-defined phenomena, they optimize for the framework rather than reporting genuine perception.

### Second-Order Effects

**If auditors know about TC:** They know a metaphor was derived. They will LOOK for a metaphor. This is catastrophic for PA-44 ("Could you still sense the metaphor from visual structure alone?"). An auditor who KNOWS a metaphor exists will always "sense" it. The question becomes meaningless.

**If auditors know about multi-coherence:** They will count channels at boundaries. This replaces the organic experience of "I felt the mood shift" with the analytical exercise of "I counted 4 property changes." The organic experience IS the measurement.

**If auditors know severity calibration:** They will measure viewports. This is the gate runner's job, not the auditor's. PA and gates measure DIFFERENT things -- PA measures perceptual impact, gates measure quantitative thresholds. Merging them loses the PA signal.

### Recommendation: PRESERVE FRESH-EYES WITH ONE TARGETED EXCEPTION

The framework should remain hidden from auditors. The ONE targeted exception:

**Give the WEAVER (not auditors) the multi-coherence calibration table and severity calibration table.** The Weaver already reads the lock sheet and gate results. The Weaver's job is CLASSIFICATION, not perception. Adding calibration tables to the Weaver's prompt would improve:

- Severity calibration of auditor findings (currently the Weaver infers severity from auditor language intensity)
- Multi-coherence scoring of PA-60/PA-61/PA-62 responses (currently the Weaver has no calibration for how many simultaneous shifts constitute DESIGNED vs COMPOSED)
- Tier 5 aggregate scoring (currently the Weaver applies YES/NO without nuance)

This preserves fresh-eyes for auditors while giving the CLASSIFIER the calibration it needs.

---

## 3. Question Coverage Gap Analysis

### Methodology

I mapped every TC output (from the TC brief: structural metaphor, zone architecture, content tensions, selected mechanisms, CSS directions) to existing PA questions. A "gap" exists when a TC-derived compositional property has no corresponding PA question that would detect its perceptual presence or absence.

### TC Output → PA Coverage Matrix

| TC Output | PA Questions That Detect It | Coverage |
|-----------|----------------------------|----------|
| Structural metaphor (visual form) | PA-44 (implicit vs explicit), PA-42 (compromise), PA-43 (cost) | GOOD |
| Metaphor spatial persistence | PA-68 (Tier 5, spatial coverage across thirds) | GOOD |
| Zone architecture (3-5 zones) | PA-30 (desktop utilization), PA-52 (thirds distribution) | PARTIAL -- detects zone effects but not zone DESIGN |
| Zone boundaries (transitions) | PA-34 (transition quality), PA-62 (transition variation) | GOOD |
| Content tensions (expressed in form) | PA-20 (personality match), PA-05a (designed) | PARTIAL -- captures gestalt but not tension-to-form mapping |
| Selected mechanisms (visible?) | PA-60 (design moments), PA-63 (fractal coherence) | GOOD for presence; NO QUESTION for mechanism INTEGRATION |
| Multi-coherence at boundaries | Multi-coherence framework (lines 669-700) | GAP -- framework exists but NO PA QUESTION asks this directly |
| Content-density correlation | (none) | GAP -- no question detects this |
| Restraint (deliberate simplicity) | PA-64 (restraint as expression) | GOOD |
| Channel independence | PA-61 (multi-voice composition) | GOOD |

### Identified Gaps

**GAP 1: Multi-Coherence at Boundaries (HIGH PRIORITY)**

The multi-coherence evaluation framework (PA skill lines 669-700) is sophisticated but orphaned. No PA question asks the auditor to evaluate it. The closest questions are:
- PA-62: "Count how many visual properties change simultaneously" -- this asks about ONE transition, not about whether the multi-coherence is CONSISTENT across ALL transitions
- PA-34: "Is it a DESIGNED moment or just empty space" -- this is quality, not channel-counting

**What's missing:** A question that asks the auditor to compare the SAME boundary type across different locations. Do all "major" boundaries feel equally dramatic? Do all "minor" boundaries feel equally subtle? Is there a hierarchy of transition intensity?

**GAP 2: Content-Density Correlation (MEDIUM PRIORITY)**

TC's core principle is content-form coupling: "Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT" (build-page SKILL.md line 106). No PA question detects this. A page could have beautiful, varied visual zones that bear NO relationship to the content within them. The visual variety would pass PA-17, PA-60, PA-62 -- but the content-form coupling would be absent.

**What's missing:** A question asking whether visual treatment RESPONDS to content type. "Does the densest-looking section contain the densest content? Does the simplest-looking section contain the simplest ideas?"

**GAP 3: Mechanism Integration vs Mechanism Presence (LOW PRIORITY)**

PA-60 detects design moment PRESENCE (>=3 distinct treatments). PA-63 detects fractal COHERENCE. But neither detects whether mechanisms INTEGRATE -- whether border patterns, spacing patterns, and color patterns tell the SAME story. A page could have 3 distinct moments (PA-60 YES) and fractal coherence (PA-63 YES) while those moments are unrelated to each other.

**What's missing:** A question about whether the distinct design moments feel like they're from the same "compositional vocabulary" -- whether the variety serves a unified direction or is random variety.

### Non-Gaps (Questions I Considered But Rejected)

- **"Does the metaphor match the TC brief?"** -- REJECTED. Auditors must never see the TC brief. This is the builder's job to self-verify, not the auditor's.
- **"Are all TC-specified mechanisms visible?"** -- REJECTED. Mechanism counting is the gate runner's domain (SC-08, SC-13). PA detects perceptual EFFECTS, not CSS presence.
- **"Is the zone count correct?"** -- REJECTED. Zone counting is the gate runner's domain (SC-12). PA detects whether zones FEEL designed.

---

## 4. Enrichment Recommendations

### 4.1 New Questions to Add

**PA-69: Multi-Coherence Consistency (NEW -- Tier 2, assign to Auditor D: Flow+Pacing)**

> "Find the two most DIFFERENT-feeling section boundaries on the page. At the boundary that feels like a MAJOR shift, count how many things change (background, text style, spacing, borders, density, rhythm). At the boundary that feels MINOR, count the same. Is there a clear hierarchy -- major boundaries feel dramatically different while minor boundaries feel subtle? Or do all boundaries feel about the same?"

**What it detects:** Whether multi-coherence is deployed with DYNAMIC RANGE (dramatic boundaries vs quiet boundaries) or deployed uniformly (all boundaries equally dramatic or equally flat). TC specifies zone architecture with different boundary types (SMOOTH/BRIDGE/BREATHING). This question detects whether those types are PERCEPTIBLY DIFFERENT.

**Scoring:**
- YES: Auditor identifies >= 1 dramatic boundary (3+ perceptible changes) AND >= 1 quiet boundary (1-2 changes) AND can describe the difference
- NO: All boundaries feel similar, OR auditor cannot distinguish boundary types

**Auditor Assignment:** D (Flow+Pacing) -- already handles PA-34 (transition quality) and PA-62 (transition variation). PA-69 extends this to CONSISTENCY across the full page.

**PA-70: Content-Form Coupling (NEW -- Tier 2, assign to Auditor B: Readability+Typography)**

> "Find the section with the MOST complex or analytical content (definitions, data, detailed arguments). Then find the section with the SIMPLEST or most reflective content (introductions, conclusions, philosophical observations). Does the visual treatment of each section feel MATCHED to its content -- does the complex section look more structured/dense, and does the simple section look more spacious/open? Or do they look the same despite having different content?"

**What it detects:** Whether the builder's visual treatment responds to content type (TC's content-form coupling principle). A page where all sections look identical regardless of content complexity fails this question. This is one of the most common pipeline failure modes: uniform treatment applied to varied content.

**Scoring:**
- YES: Auditor identifies visible difference in treatment between complex and simple sections AND the difference feels appropriate (complex = denser, simple = airier)
- NO: Sections look the same regardless of content type, OR denser treatment applied to simpler content

**Auditor Assignment:** B (Readability+Typography) -- currently has only 5 questions (lightest load). This adds a question about how typography and visual density respond to content, which is squarely in B's domain.

### 4.2 Framework Modifications

**Add to Weaver prompt (NOT auditor prompts):**

The Weaver-Synthesizer (build-page SKILL.md, Step 6.3) should receive these additional calibration references:

1. **Multi-Coherence Calibration Table** (PA skill lines 686-698): The table mapping simultaneous shift count to quality level (0-1 = FLAT, 2 = FUNCTIONAL, 3 = DESIGNED, 4-5 = COMPOSED, 6 = FLAGSHIP). This helps the Weaver calibrate Tier 5 scoring from auditor descriptions.

2. **Severity Calibration Table** (PA skill lines 155-165): The PA-09 severity table mapping dead space scale to severity. This helps the Weaver classify void findings consistently.

3. **Metaphor Expression Spectrum** (PA skill lines 617-624): STRUCTURAL > ATMOSPHERIC > LABELED > ANNOUNCED. This helps the Weaver interpret PA-44 and PA-68 responses.

**Rationale:** The Weaver is a CLASSIFIER, not a perceiver. Classification requires calibrated scales. Currently the Weaver must infer calibration from the raw PA question scoring rubrics, which are less detailed than the framework's calibration tables.

### 4.3 Mode Deployment Changes

**No mode changes recommended.** The current Mode 4 structure (9 auditors + 1 weaver) is well-suited to the new pipeline. The only deployment change is question assignment (see Section 5).

### 4.4 What NOT to Change

**PRESERVE:**
- Fresh-eyes principle (non-negotiable)
- Language hard-block (no CSS vocabulary in auditor responses)
- Information isolation (auditors never see lock sheet, build log, TC brief)
- Cold Look protocol (gut reaction before analysis)
- Scroll-through protocol (mandatory viewport-by-viewport examination)
- Temporal firewall (auditors complete all PA answers BEFORE classification)
- The One Rule ("React to what you see before you check what you know")

**DO NOT:**
- Give auditors the TC brief
- Give auditors the conventions brief
- Give auditors the build log
- Add TC vocabulary to auditor prompts
- Inform auditors that a metaphor exists
- Add framework calibration tables to auditor prompts
- Change the language hard-block rules

---

## 5. Question Assignment Evaluation

### Current Assignment Analysis

| Auditor | Role | Standard | Tier 5 | Total | Load Assessment |
|---------|------|----------|--------|-------|-----------------|
| A | Impression+Emotion | 7 | 2 | 9 | HEAVY -- PA-05 alone requires evaluating 4 sub-criteria with 3 sub-dimensions on PA-05c |
| B | Readability+Typography | 5 | 0 | 5 | LIGHT -- only auditor with zero Tier 5 |
| C | Spatial+Proportion | 11 | 2 | 13 | HEAVIEST -- 60% more than median load |
| D | Flow+Pacing | 5 | 1 | 6 | MODERATE |
| E | Grid+Layout | 5 | 1 | 6 | MODERATE |
| F | Consistency+Rhythm | 4 | 2 | 6 | MODERATE |
| G | Metaphor+Ideology | 3 | 1 | 4 | LIGHTEST |
| H | Responsive | 5 | 0 | 5 | LIGHT -- no Tier 5 |
| I | Adversarial | 4 | 0 | 4 | LIGHT -- no Tier 5 |

**Issues identified:**

1. **Auditor C is overloaded.** 13 questions is 60% above the median of 5.5. Spatial+Proportion questions (PA-50 through PA-53) are measurement-heavy -- each requires counting viewports or estimating percentages. Combined with 11 standard questions, C faces cognitive fatigue risk.

2. **Auditor B has zero Tier 5 questions.** B evaluates readability and typography -- but the new content-form coupling question (PA-70) fits B's domain and would balance the load.

3. **Role groupings are generally LOGICAL.** PA-09 (dead space) is correctly with C (Spatial). PA-17 (rhythm) is correctly with F (Consistency). PA-42/43/44 (metaphor) are correctly with G. PA-28 (adversarial) is correctly with I. The auditor-role-question alignment is well-designed.

4. **Tier 5 distribution is role-appropriate.** PA-60 (design moments) and PA-61 (multi-voice) are with F (Consistency+Rhythm) -- correct, as these detect PATTERN. PA-63 (fractal) is with E (Grid+Layout) -- correct, as fractal coherence manifests in component structure. PA-64 (restraint) and PA-66 (negative space) are with C (Spatial) -- correct, as restraint is a spatial judgment.

### Recommended Assignment Changes

**Add PA-69 (Multi-Coherence Consistency) to Auditor D.** D already handles transition-related questions (PA-34, PA-62). PA-69 extends transition evaluation to CONSISTENCY. D goes from 6 to 7 questions -- still moderate.

**Add PA-70 (Content-Form Coupling) to Auditor B.** B currently has the lightest load (5 questions, zero Tier 5). Content-form coupling is fundamentally about whether TYPOGRAPHIC and DENSITY treatment responds to content -- this is B's domain. B goes from 5 to 6 questions.

**Consider offloading PA-52 from C to D.** PA-52 (visual weight distribution across thirds) is about PACING as much as proportion. Moving it to D would reduce C from 13 to 12 and increase D from 7 to 8. This is optional -- C can handle 13 if the questions are well-structured.

### Updated Assignment Table (with new questions)

| Auditor | Role | Questions | Total |
|---------|------|-----------|-------|
| A | Impression+Emotion | PA-01, 04, 05, 18, 19, 20, 45, **65**, **67** | 9 |
| B | Readability+Typography | PA-02, 06, 07, 08, 29, **70** | 6 |
| C | Spatial+Proportion | PA-09, 10, 11, 30, 31, 32, 33, 50, 51, 52, 53, **64**, **66** | 13 |
| D | Flow+Pacing | PA-12, 13, 34, 35, 36, **62**, **69** | 7 |
| E | Grid+Layout | PA-14, 15, 37, 38, 39, **63** | 6 |
| F | Consistency+Rhythm | PA-16, 17, 40, 41, **60**, **61** | 6 |
| G | Metaphor+Ideology | PA-42, 43, 44, **68** | 4 |
| H | Responsive | PA-21, 22, 23, 46, 47 | 5 |
| I | Adversarial | PA-26, 27, 28, 48 | 4 |

**New total: 48 standard + 9 Tier 5 + 2 new = 59 questions across 9 auditors.**

---

## 6. BLOCKING Findings

### BLOCKING-01: Weaver Has No Multi-Coherence Calibration

**Severity:** BLOCKING
**Impact:** The Weaver synthesizes Tier 5 scores without calibration tables for multi-coherence quality levels. When Auditor F reports on PA-60/PA-61, the Weaver has no framework for translating "I noticed 3 independent visual properties" into a COMPOSED vs DESIGNED distinction. Currently the Weaver applies raw YES/NO, losing nuance.

**Fix:** Add the multi-coherence calibration table (PA skill lines 686-698) and the metaphor expression spectrum (lines 617-624) to the Weaver's prompt in build-page SKILL.md Step 6.3.

### BLOCKING-02: Content-Form Coupling Has Zero Detection

**Severity:** BLOCKING
**Impact:** TC's primary value proposition is content-specific composition. The builder is instructed that "identical visual treatment across sections with different content is a design failure" (build-page line 106). But PA has no question that detects this failure. A page could have uniform visual treatment across wildly different content sections and still pass all 57 current questions.

**Fix:** Add PA-70 (Content-Form Coupling) to the PA skill.

### NON-BLOCKING Observations

1. **Auditor C overload (13 questions)** -- SIGNIFICANT but not blocking. C has always carried this load. Monitor for quality degradation in C's later-numbered questions.

2. **PA-69 (multi-coherence consistency) is nice-to-have, not blocking.** PA-62 partially covers this. PA-69 adds cross-page CONSISTENCY evaluation that PA-62 doesn't capture but the incremental value is moderate.

3. **The sovereignty framework's COMPOSITIONAL INTENT category gap** -- OBSERVED but not blocking for PA skill enrichment. This is a conceptual gap in the lock-sheet classification system. TC-derived decisions should be classified as COMPOSITIONAL INTENT (direction auditable, decision not). This affects the lock sheet generation in build-page Step 5.5, not the PA skill itself.

---

## 7. Recommended PA Skill Edits

### Edit 1: Add PA-69 and PA-70 to PA Skill

**Location:** After PA-48 (line 333), before Tier 4 header (line 335)

**Add the following under a new "Tier 2.5: Pipeline Integration" header:**

```markdown
### Tier 2.5: Pipeline Integration (Standard + Standalone)

**Provenance:** These questions detect downstream perceptual effects of content-specific composition. They do NOT require auditors to know about the composition process -- they evaluate what is VISIBLE to a reader with zero context.

**Multi-Coherence and Content Response:**

| ID | Question | What It Catches |
|----|----------|-----------------|
| **PA-69** | Find the two most DIFFERENT-feeling section boundaries on the page. At the boundary that feels like a MAJOR shift, count how many things change (background, text style, spacing, borders, density, rhythm). At the boundary that feels MINOR, count the same. Is there a clear hierarchy -- major boundaries feel dramatically different while minor boundaries feel subtle? Or do all boundaries feel about the same? | Multi-coherence dynamic range -- whether boundaries have VARIED intensity or uniform intensity. Catches the "all transitions identical" failure mode. |
| **PA-70** | Find the section with the MOST complex or analytical content (definitions, data, detailed arguments). Then find the section with the SIMPLEST or most reflective content (introductions, conclusions, philosophical observations). Does the visual treatment of each section feel MATCHED to its content -- does the complex section look more structured/dense, and does the simple section look more spacious/open? Or do they look the same despite having different content? | Content-form coupling -- whether visual density responds to content density. Catches the "uniform treatment across varied content" failure mode. |
```

### Edit 2: Update Mode 4 Question Assignment Table

**Location:** PA skill line 541-551 (Mode 4 team structure)

Update Auditor B and Auditor D lines:

```
├── Auditor B: Readability+Typography (PA-02,06,07,08,29,70) [6 Qs]
...
├── Auditor D: Flow+Pacing (PA-12,13,34,35,36 + T5: PA-62 + PA-69) [7 Qs]
```

**Location:** PA skill line 553

Update total:

```
**Total: 48 standard + 2 pipeline integration + 9 Tier 5 = 59 questions across 9 auditors.**
```

### Edit 3: Add Weaver Calibration References to build-page SKILL.md

**Location:** build-page SKILL.md Step 6.3 (Weaver spawn prompt, line ~293)

Add after "Read the lock sheet at [output-dir]/_lock-sheet.md":

```
Also read these calibration references (for CLASSIFICATION, not perception):
- Multi-Coherence Calibration: 0-1 simultaneous shifts = FLAT, 2 = FUNCTIONAL,
  3 = DESIGNED, 4-5 = COMPOSED, 6 = FLAGSHIP. Use when interpreting PA-60, PA-61,
  PA-62, PA-69 auditor descriptions.
- Severity Calibration: 1-2 viewport-heights low-content = LOOKS-WRONG,
  3-5 = WOULD-NOT-SHIP, 6+ = CATASTROPHIC. Use when interpreting PA-09, PA-50
  auditor descriptions.
- Metaphor Expression Spectrum: STRUCTURAL (spatial organization, color progression)
  > ATMOSPHERIC (palette, vocabulary) > LABELED (explicit text labels) > ANNOUNCED
  (section titles explain metaphor). Use when interpreting PA-44, PA-68 responses.
```

### Edit 4: Update flagship-pa-questions.md Auditor Assignment Summary

**Location:** flagship-pa-questions.md line 146-157

Update the assignment summary table to include PA-69 and PA-70:

```
| B | Readability+Typography | PA-02,06,07,08,29 | PA-70 | 6 |
| D | Flow+Pacing | PA-12,13,34,35,36 | PA-62, PA-69 | 7 |
```

And update total line to: **Total: 48 standard + 2 pipeline + 9 Tier 5 = 59 questions across 9 auditors.**

---

## Appendix A: The Audit Optimization Trap and TC

The PA skill's opening warning (lines 5-43) describes the audit optimization trap: building pages TO PASS the audit rather than building pages to serve content. The TC-driven pipeline introduces a SECOND-ORDER version of this trap:

**First-order trap (existing):** Builder reads PA questions, designs to satisfy them.
**Second-order trap (new):** TC analyst reads PA questions, derives metaphors that will produce high PA scores.

The second-order trap is subtle. A TC analyst who knows that PA-60 requires ">=3 distinct design moments" might derive a metaphor that naturally produces many moments, rather than the metaphor that best serves the CONTENT. Similarly, a TC analyst who knows PA-62 requires "BOTH dramatic and quiet transitions" might select a metaphor with built-in transition variety rather than one whose transitions emerge from content structure.

**The current mitigation is sufficient:** The TC skill's library access prohibition (Phase 0E) and the explicit warning that the pipeline predicts RICHNESS not QUALITY (line 630) serve as guards against optimization. The TC analyst should NEVER see the PA skill.

**But verify:** The build-page SKILL.md TC agent spawn prompt (Step 2) should be checked to ensure it does NOT reference PA questions, PA scores, or PA terminology. Currently it does not. This is correct and should be preserved.

## Appendix B: The "Compositional Intent" Sovereignty Category

The current sovereignty framework has three categories:
- ALWAYS-LOCKED (soul rules)
- LOCKED (research-backed decisions)
- CHALLENGEABLE (convention values, builder choices)

TC output creates a fourth category that doesn't fit cleanly:

**COMPOSITIONAL INTENT** -- The metaphor was derived through a rigorous process (Phases 0-3 of TC) but is NOT a research finding. It is a creative construction for THIS specific content. The metaphor ITSELF should not be challenged by PA (that would violate the Sovereignty Principle). But the metaphor's EXPRESSION quality is fully auditable.

**Examples:**
- "The metaphor should be geological, not architectural" = INVALID PA finding (challenges the DECISION)
- "The geological layering is only visible in the top third" = VALID PA finding (challenges the EXECUTION)
- "I can't sense any organizing metaphor at all" = VALID PA finding (the execution completely failed to express the intent)

**Recommendation:** This category should be documented in the lock sheet classification system (build-page Step 5.5) rather than in the PA skill. The lock sheet already has LOCKED and CHALLENGEABLE -- adding COMPOSITIONAL INTENT would help the Weaver correctly classify findings about metaphor expression.

This is NOT a PA skill edit -- it's a build-page SKILL.md edit to the lock sheet generation prompt. The Weaver would see: "TC-derived metaphor: geological strata. Category: COMPOSITIONAL INTENT. The decision to use geological strata is not auditable. Whether the geological strata metaphor is PERCEPTIBLE in the final page IS auditable."
