# 25: Flagship-Specific Experiments -- What the Current 5 Experiments Cannot Test

**Author:** flagship-experimenter (Opus 4.6)
**Date:** 2026-02-19
**Scope:** Design experiments that specifically validate Flagship-tier compositional capabilities. The current 5 experiments (A-E) are biased toward Middle-tier outcomes. This report identifies the bias, proposes Flagship-specific experiments, defines success criteria beyond PA-05 >= 3.0, and specifies the infrastructure Flagship requires.

---

## EXECUTIVE SUMMARY

The current experiment plan (A-E) asks one question: "What's the minimum infrastructure needed to reach PA-05 >= 3.0?" This is a Middle-tier question. PA-05 3.0 is COMPOSED -- a page with coherent visual structure. Flagship demands DESIGNED (4/4) -- a page where compositional intelligence is visible at every zoom level, where multiple CSS channels shift in semantic coordination at boundaries, and where the whole exceeds the sum of its parts.

**The 5 experiments have a structural blind spot: they cannot distinguish between "good enough" (3.0 COMPOSED) and "exceptional" (4.0 DESIGNED).** Experiment B's Fast Path ("if PA-05 >= 3.0, skip everything") would declare victory at a score the Middle experiment already achieved. The Flagship question is not "can we reach 3.0?" -- it is "can we reach 4.0, and what specifically does 4.0 require that 3.0 does not?"

**Core proposal:** 3 Flagship-specific experiments (F1-F3) that test multi-coherence, scale depth, and content-form resonance -- the compositional capabilities that separate DESIGNED from COMPOSED.

---

## 1. WHY THE CURRENT EXPERIMENTS ARE BIASED TOWARD MIDDLE

### 1.1 The Fast Path Problem

Experiment B's decision gate: "PA-05 >= 3.0 --> skip to Step 7 (fast path)."

This gate treats 3.0 as the ceiling. But the project's own evidence shows:

| Build | PA-05 | Tier |
|-------|-------|------|
| CD-006 | ~4.0 (39/40) | Flagship-quality |
| Middle experiment | 4/4 DESIGNED | Middle (happened to exceed) |
| Remediation | 2.5/4 | Post-Flagship fix |
| Flagship | 1.5/4 | Failed |

The Middle experiment scored 4/4 on simpler content. RESEARCH-SYNTHESIS.md is a 384-line cross-research document with hierarchical structure, multiple content types (findings, frameworks, principles, tables), and competing semantic domains. This content DEMANDS Flagship treatment. Scoring 3.0 on it means the pipeline produced a competent page, not an exceptional one.

### 1.2 Content Insufficiency

All 5 experiments use RESEARCH-SYNTHESIS.md. This is appropriate for cross-comparison, but RESEARCH-SYNTHESIS.md has specific properties that may MASK Flagship failures:

- **Moderate length** (~384 lines): Not long enough to stress 5-scale expression across a deep scroll
- **Explicit structure** (headers, tables, bullet lists): Natural component mapping reduces the need for compositional invention
- **Single semantic domain** (design research): No domain TRANSITIONS requiring multi-coherence shifts
- **Pre-organized hierarchy**: The content already has clear H2/H3/list structure -- the builder doesn't need to DISCOVER hierarchy

Flagship pages need content with **inherent tension** -- content where the visual form must RESOLVE competing demands. RESEARCH-SYNTHESIS.md has hierarchical structure but minimal tension.

### 1.3 The 3.0 Ceiling Is a Middle Ceiling

PA-05 scoring:
- 1/4 FLAT: No visual differentiation
- 2/4 STYLED: Consistent but uniform
- 3/4 COMPOSED: Coherent visual structure, clear zones, appropriate hierarchy
- 4/4 DESIGNED: Compositional intelligence visible at every scale, channels coordinated, whole exceeds parts

The gap between 3.0 and 4.0 is the gap between "professional" and "exceptional." This gap is precisely where:
- Multi-coherence matters (channels shifting in semantic coordination)
- Fractal depth matters (pattern visible at 5 zoom levels)
- Content-form resonance matters (visual decisions emerging FROM content)
- Creative surprise matters (unexpected-yet-perfect choices)

None of the current experiments specifically test these capabilities.

---

## 2. WHAT CONTENT SHOULD FLAGSHIP EXPERIMENTS USE?

### 2.1 Requirements for Flagship Test Content

Flagship content must have ALL of these properties:

1. **Inherent tension** -- competing demands that cannot be resolved by component assembly alone
2. **Multiple content types** -- at least 3 distinct types requiring different visual treatment (narrative, technical, data, procedural, comparative)
3. **Domain transitions** -- at least 2 clear shifts in subject matter or register that demand multi-coherence at boundaries
4. **Depth** -- enough length (500+ lines) to require 5-scale expression across a meaningful scroll journey
5. **Semantic ambiguity** -- at least 2 sections where the "correct" visual treatment is non-obvious (requires compositional judgment, not just component mapping)

### 2.2 Proposed Flagship Content Options

**Option A: RESEARCH-SYNTHESIS.md (current choice) -- INSUFFICIENT for Flagship**

Reasons: Moderate length, explicit structure, single domain, minimal tension. Acceptable for Middle-tier validation. Not challenging enough to expose Flagship failures.

**Option B: A composite document combining 2-3 research files**

Assemble a ~600-800 line document from sections of R1 (documentation patterns), R3 (density dimensions), and R5 (combination theory). This creates:
- Domain transitions (documentation -> density -> combination)
- Content type variety (findings lists, theoretical frameworks, practical implications)
- Semantic ambiguity (where do density and combination overlap?)
- Inherent tension (research conclusions sometimes contradict across streams)

**Option C: specification/README.md (THE KORTAI DESIGN MIND, ~2,053 lines, 109KB)**

The philosophical anchor document. Properties:
- Massive length requiring deep scroll architecture
- 3 Parts with fundamentally different registers (philosophy, specification, implementation)
- Inherent tension between abstract principles and concrete requirements
- Multiple content types (narrative, definitions, constraints, examples)
- Semantic ambiguity throughout (where does philosophy end and specification begin?)

**Option D: A purpose-built Flagship test document (~700 lines)**

Write a document specifically designed to stress-test compositional capabilities:
- Section 1: Narrative introduction with voice (tests content-form resonance)
- Section 2: Technical specification with data tables (tests component precision)
- Section 3: Philosophical argument with counterarguments (tests tension resolution)
- Section 4: Procedural guide with prerequisites (tests progressive disclosure)
- Section 5: Comparative analysis with competing options (tests multi-column/grid layout)

### 2.3 Recommendation

**Use Option B (composite research document) for the primary Flagship experiment.** It provides real content (not synthetic), genuine domain transitions, and sufficient length, while remaining comparable to the RESEARCH-SYNTHESIS.md used in experiments A-E (same corpus, different assembly).

**Use Option C (README.md) as a secondary validation** if Option B succeeds, to test whether Flagship capabilities extend to truly massive content.

---

## 3. WHAT IS THE FLAGSHIP SUCCESS BAR?

### 3.1 PA-05 >= 3.0 Is Not Enough

PA-05 >= 3.0 means COMPOSED. This is the Middle floor. Flagship success requires either PA-05 >= 3.5 (high COMPOSED trending DESIGNED) or meeting specific compositional criteria that PA-05 alone cannot capture.

### 3.2 Proposed Flagship Success Criteria

A Flagship build PASSES if ALL of the following are met:

**Tier 1: Baseline (same as current experiments)**
- PA-05 >= 3.0 (COMPOSED minimum)
- Soul: 0 violations (border-radius: 0, box-shadow: none, palette)
- Container: 940-960px
- Mechanisms: >= 12 across >= 4 categories

**Tier 2: Compositional Depth (Flagship-specific)**
- **Multi-coherence at boundaries:** At >= 3 zone boundaries, >= 3 CSS channels (of 6: chromatic, typographic, spatial, structural, behavioral, material) shift simultaneously in the same semantic direction. Verified programmatically (SC-13 equivalent) AND perceptually (PA auditors confirm transitions feel "intentional").
- **Scale coverage:** Pattern expression visible at >= 4 of 5 scales (navigation, page, section, component, character). Verified by asking each PA auditor: "At how many zoom levels is the design direction visible?"
- **Transition grammar completeness:** Every zone boundary uses exactly one of the 3 transition types (hard cut, spacing shift, checkpoint). Zero void transitions (boundaries implemented as empty space alone).
- **Distribution:** Mechanisms distributed across all thirds of the page (0-33%, 33-66%, 66-100%). No front-loading. Verified programmatically.

**Tier 3: Creative Excellence (aspirational)**
- PA-05 >= 3.5 (trending toward DESIGNED)
- At least 1 PA auditor uses the word "intentional," "designed," or "purposeful" unprompted
- At least 1 compositional surprise (an unexpected-yet-appropriate visual choice not specified in any input document)

### 3.3 Scoring Framework

```
FLAGSHIP SCORE = Tier 1 (pass/fail) + Tier 2 (0-4 points) + Tier 3 (0-3 bonus)

Tier 1: ALL must pass (gate)
  - PA-05 >= 3.0      [PASS/FAIL]
  - Soul 0 violations  [PASS/FAIL]
  - Container 960px    [PASS/FAIL]
  - Mechanisms >= 12   [PASS/FAIL]

Tier 2: Each scored 0 or 1
  - Multi-coherence    [0/1] -- >= 3 boundaries with >= 3 channel shifts
  - Scale coverage     [0/1] -- >= 4 of 5 scales
  - Transition grammar [0/1] -- every boundary has a type, zero voids
  - Distribution       [0/1] -- >= 2 mechanisms in each page third

Tier 3: Each scored 0 or 1
  - PA-05 >= 3.5       [0/1]
  - "Intentional" unprompted [0/1]
  - Compositional surprise   [0/1]

FLAGSHIP PASS: Tier 1 ALL PASS + Tier 2 >= 3/4
FLAGSHIP EXCELLENCE: Tier 1 ALL PASS + Tier 2 4/4 + Tier 3 >= 2/3
```

---

## 4. FLAGSHIP-SPECIFIC EXPERIMENTS

### 4.1 Experiment F1: Multi-Coherence Stress Test (~$30-50, ~4 hours)

**What it tests:** Can the builder produce multi-coherence at >= 5 zone boundaries? This is the specific capability that separates CD-006 from the Flagship failure.

**Setup:**
- Content: Composite research document (Option B, ~600-800 lines)
- Architecture: Fat Core (one Opus agent plans AND builds)
- Input: Conventions brief (~100 lines) + tokens + prohibitions + mechanism catalog (FULL 18 mechanisms) + content
- Key addition: The conventions brief includes a **MULTI-COHERENCE SECTION** (~20 lines) with:
  - Definition: "At each zone boundary, >= 3 of 6 CSS channels must shift simultaneously"
  - The 6 channels named with concrete examples
  - One worked example of a multi-coherent boundary (before/after CSS values for 4 channels)
  - Binary self-check: "At boundary X, list which channels shift. If < 3, add channels or merge zones."

**Verification:**
- Mode 4 PA (9 auditors, 48 questions)
- PLUS: Programmatic SC-13 check (channel shift count at every zone boundary)
- PLUS: 3 additional PA questions per auditor:
  1. "At each major section break, how many visual properties change simultaneously?"
  2. "Do section transitions feel coordinated or random?"
  3. "Rate the coherence of transitions: disconnected / partially connected / fully coordinated"

**Success criteria:**
- Tier 1 ALL PASS
- Multi-coherence: >= 3 boundaries with >= 3 channel shifts (measured programmatically)
- PA auditors: majority (5+/9) rate transitions as "partially" or "fully" coordinated

**What this resolves:**
- Whether a single worked example of multi-coherence is sufficient for the builder to generalize
- Whether the conventions brief can carry L4 (multi-coherence) intelligence
- Whether multi-coherence is achievable without a full transition table

---

### 4.2 Experiment F2: Scale Depth Test (~$30-50, ~4 hours)

**What it tests:** Can the builder produce fractal coherence across 4-5 scales? This tests whether the pattern is visible at navigation, page, section, component, AND character zoom levels.

**Setup:**
- Content: Same composite document as F1 (for comparison)
- Architecture: Fat Core
- Input: Same as F1 PLUS a **FRACTAL ECHO PROMPT** (~15 lines):
  - The 5 scales named with "your pattern must be visible at each"
  - One concrete example of how a single pattern (e.g., CRESCENDO) appears at each scale:
    - Navigation: lighter header, heavier footer
    - Page: sections compress as you scroll
    - Section: intro paragraph has more breathing than closing
    - Component: callout labels sparse, bodies dense
    - Character: heading letter-spacing wider than body
  - Self-check: "Scroll to any point. Zoom out. Can you still see the direction?"

**Verification:**
- Mode 4 PA (9 auditors)
- PLUS: 2 additional PA questions per auditor:
  1. "At how many zoom levels is the design direction visible? (1=page only, 5=visible everywhere from header to character spacing)"
  2. "If you cover the middle third of the page with your hand, does the remaining content still feel 'designed'?"

**Success criteria:**
- Tier 1 ALL PASS
- Scale coverage: PA auditor median >= 3.5 scales (on the 1-5 question)
- At least 2 auditors report >= 4 scales

**What this resolves:**
- Whether a 15-line fractal echo prompt is sufficient to produce scale depth
- Whether Opus can independently generate scale expressions from a single example
- Whether fractal coherence is even perceptible to fresh-eyes auditors (maybe it's invisible)

---

### 4.3 Experiment F3: Content-Form Resonance Test (~$40-60, ~5 hours)

**What it tests:** Can the builder make visual decisions that emerge FROM the content -- not just applied TO the content? This tests the irreducible capability that separates COMPOSED from DESIGNED.

**Setup:**
- Content: TWO different documents built by the SAME builder configuration
  - Document 1: Composite research (analytical, hierarchical, comparative)
  - Document 2: A narrative/philosophical section (~400 lines from README.md Parts I-II)
- Architecture: Fat Core (same conventions brief for both)
- Input: Conventions brief + tokens + prohibitions + mechanism catalog + content

**Verification:**
- Mode 4 PA for each document separately
- PLUS: A **CROSS-COMPARISON PA** (3 additional auditors who see BOTH pages side by side):
  1. "Do these two pages feel like they were built by the same system with the same rules?"
  2. "Do the visual differences between the pages feel content-driven or arbitrary?"
  3. "Which page's visual treatment feels more appropriate for its content? Or are both equally appropriate?"
  4. "Rate content-form fit for each page: forced / acceptable / natural / inevitable"

**Success criteria:**
- Both pages: Tier 1 ALL PASS independently
- Cross-comparison: majority (2+/3) rate both pages as "natural" or "inevitable" for content-form fit
- Cross-comparison: majority confirm differences feel "content-driven" not "arbitrary"
- The two pages use DIFFERENT mechanism selections, zone architectures, and/or transition patterns (not the same template applied to different content)

**What this resolves:**
- Whether the conventions brief produces content-sensitive output (not one-size-fits-all)
- Whether the same builder configuration adapts to different content types
- Whether the "4 irreducible capabilities" (content-form resonance, proportional intelligence, creative surprise, emergent coherence) are achievable with Fat Core

---

## 5. INFRASTRUCTURE FLAGSHIP REQUIRES THAT THE $5 TEST DOES NOT

### 5.1 What the $5 Test Has
- 1 Opus agent
- ~100-line conventions brief
- tokens.css + prohibitions.md
- RESEARCH-SYNTHESIS.md (~384 lines)
- Mode 4 PA (9 auditors, 48 questions)

### 5.2 What Flagship Additionally Requires

| Infrastructure | Why | Cost |
|---------------|-----|------|
| **Full mechanism catalog** (18 mechanisms, ~1,200 lines) | Middle needs 8-10 mechanisms. Flagship needs 12-15. The builder must SELECT from the full vocabulary, not receive a curated subset. | +0 (file exists, just route it) |
| **Multi-coherence prompt section** (~20 lines in conventions brief) | L4 multi-coherence does not emerge spontaneously. The builder needs to know it's a requirement and see one worked example. | +20 lines in brief |
| **Fractal echo prompt section** (~15 lines in conventions brief) | L2 scale coverage does not emerge from mechanism count alone. The builder needs scale awareness. | +15 lines in brief |
| **Longer/harder content** (600-800 lines with domain transitions) | Flagship complexity requires content that cannot be served by component assembly alone. | ~2 hours assembly |
| **Programmatic SC-13** (multi-coherence gate) | PA auditors sense multi-coherence but cannot count channel shifts. The programmatic gate provides binary verification. | ~50 lines JS |
| **Extended PA questions** (5-7 additional questions per auditor) | Standard 48 questions do not specifically test multi-coherence, scale depth, or content-form resonance. | +7 questions per auditor |
| **Cross-comparison PA protocol** (for F3) | Content-form resonance cannot be evaluated from a single page. Requires comparison. | 3 additional auditors |
| **Transition table capability** (optional) | If F1 shows multi-coherence fails without exact boundary values, the transition table becomes necessary. | ~80-150 lines YAML per build |

### 5.3 Total Additional Cost

```
Experiment F1: ~$30-50 (same as Exp C, but with harder content + extended PA)
Experiment F2: ~$30-50 (same setup, different measurement focus)
Experiment F3: ~$40-60 (two builds + cross-comparison)

TOTAL FLAGSHIP EXPERIMENTS: ~$100-160
TOTAL ALL EXPERIMENTS (A-E + F1-F3): ~$210-355

TIMELINE: F1-F3 can run AFTER A-E complete.
          F1 and F2 can run in PARALLEL (same content, different measurement).
          F3 requires F1/F2 results (uses the winning configuration).
```

---

## 6. SHOULD THE FAST PATH EXIST FOR FLAGSHIP?

### 6.1 No. The Fast Path Must Be Eliminated or Gated.

The current Fast Path: "If Exp B PA-05 >= 3.0, skip everything."

This is correct for Middle-tier pages. If a single Opus agent with a conventions brief produces COMPOSED output, then for Middle-tier content, no additional infrastructure is needed.

But Flagship is a DIFFERENT question. The Fast Path should be:

```
REVISED DECISION TREE:

Exp B PA-05 >= 3.0?
  |
  +-- For MIDDLE-TIER pages: YES, fast path. Conventions brief is sufficient.
  |
  +-- For FLAGSHIP pages: NOT YET. Run F1-F3 with harder content.
      |
      +-- F1 multi-coherence PASS + F2 scale PASS?
      |     |
      |     +-- YES: Conventions brief + 35 extra lines = Flagship capable.
      |     |         No additional infrastructure needed.
      |     |
      |     +-- NO: Flagship requires transition table / recipe / other support.
      |           Run Exp D equivalent with composite content.
      |
      +-- F3 content-form resonance PASS?
            |
            +-- YES: Single configuration handles all content types.
            +-- NO: Content-specific tuning needed. Investigate.
```

### 6.2 The Tier-Aware Decision Tree

```
AFTER ALL 8 EXPERIMENTS (A-E + F1-F3):

MIDDLE PAGES:
  Best of A-E determines architecture (current plan, unchanged)

FLAGSHIP PAGES:
  F1 + F2 determine compositional requirements
  F3 determines content sensitivity

  Scenario 1: F1 PASS + F2 PASS + F3 PASS
    --> Conventions brief (~135 lines: 100 base + 35 flagship additions)
        + full mechanism catalog is sufficient for ALL tiers
        BEST OUTCOME: one configuration, zero tier routing

  Scenario 2: F1 PASS + F2 FAIL
    --> Scale depth requires structural support (fractal echo table)
        Flagship needs TC planner for scale planning, Middle does not
        TWO configurations: brief-only for Middle, brief+fractal for Flagship

  Scenario 3: F1 FAIL
    --> Multi-coherence requires transition table
        Flagship needs full TC planning + transition table
        TWO architectures: Fat Core for Middle, Linear Pipeline for Flagship
        This is the WORST outcome: confirms the original PV2 separation

  Scenario 4: F3 FAIL (content-form resonance)
    --> Single configuration cannot adapt to different content types
        Requires either content-specific tuning or TC-driven content analysis
        UNCLEAR: may indicate a fundamental capability limit, not an architecture problem
```

---

## 7. HOW TO TEST COMPOSITIONAL DEPTH SPECIFICALLY

### 7.1 Mechanisms (Vocabulary Breadth)

**Programmatic test (existing gates):**
- Count distinct mechanism classes in CSS output
- Verify >= 12 mechanisms deployed
- Verify >= 4 of 5 categories represented (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation)

**PA test (perceptual):**
- "How many distinct visual techniques can you identify?" (expecting >= 8 perceptible)
- Note: mechanism COUNT in CSS does not equal mechanism PERCEPTION. The Flagship had 14 in CSS, ~1 perceptible.

### 7.2 Scales (Coherence Depth)

**Programmatic test (new, for F2):**
- Check that `font-size` varies at >= 4 structural levels (h1, h2, h3, body, meta)
- Check that `padding` varies at >= 3 structural levels (section, component, element)
- Check that `letter-spacing` has >= 2 distinct values at different hierarchy levels
- Check that header styling differs from section styling differs from component styling

**PA test (perceptual):**
- "At how many zoom levels is the design direction visible?" (1-5 scale)
- "Zoom out until the page is thumbnail-sized. Can you still see structure?"

### 7.3 Channels (Expression Breadth)

**Programmatic test (SC-13):**
At each zone boundary, measure 6 channels:
1. Chromatic: background-color change (RGB delta)
2. Typographic: font-size, font-weight, font-family, letter-spacing change
3. Spatial: padding, margin, gap change
4. Structural: border-left, border-top, border-bottom presence/absence/width change
5. Behavioral: transition, animation, hover effect change (optional)
6. Material: background-image, opacity, texture change (optional)

Binary: >= 3 channels shift at each zone boundary = PASS

**PA test:**
- "At the transition between major sections, what visual properties change?"
- "Do transitions feel like single changes or coordinated shifts?"

### 7.4 Coherence (Semantic Coordination)

**Programmatic test (partial -- SC-13 extension):**
- SC-13 can count HOW MANY channels shift but NOT whether they shift in the SAME SEMANTIC DIRECTION
- A page where backgrounds get darker, typography gets larger, AND spacing gets tighter at a boundary has 3 channel shifts but potentially CONFLICTING directions (darker=heavier, larger=lighter? or darker=deeper, larger=more important?)
- Semantic coherence is fundamentally a JUDGMENT domain -- PA auditors must evaluate it

**PA test (the only reliable test):**
- "Do section transitions feel like they're going 'somewhere' -- deepening, broadening, intensifying, resolving?"
- "Rate coherence: random / loosely connected / directional / inevitable"

### 7.5 Content-Form Resonance (The Irreducible)

**Cannot be tested programmatically.** Content-form resonance means the visual treatment feels like it EMERGED from the content rather than being APPLIED to the content. This is the difference between "this page uses good design patterns" and "this page could not look any other way."

**PA test (cross-comparison only, experiment F3):**
- Show auditors TWO pages built from different content with the same configuration
- If both pages look the same: resonance is ABSENT (template behavior)
- If pages differ AND differences feel content-appropriate: resonance is PRESENT
- "Rate content-form fit: forced / acceptable / natural / inevitable"

---

## 8. EXPERIMENT SCHEDULE AND DEPENDENCIES

```
PHASE 1: Current Experiments (A-E)          ~$110-195, ~2 days
  Run all 5 as currently planned
  Decision gate: architecture for Middle determined

PHASE 2: Flagship Content Assembly          ~2 hours, ~$0
  Assemble composite research document (Option B)
  Requirements: sections from R1 + R3 + R5, 600-800 lines
  Include >= 2 domain transitions, >= 3 content types

PHASE 3: Flagship Experiments (F1 + F2)     ~$60-100, ~1 day
  Run F1 (multi-coherence) and F2 (scale depth) IN PARALLEL
  Same content, same builder config, different measurement
  Decision gate: Flagship compositional requirements determined

PHASE 4: Flagship Experiment F3             ~$40-60, ~1 day
  Run ONLY if F1 and/or F2 pass
  Uses winning configuration from F1/F2
  Requires a second content document (README.md section)
  Decision gate: content sensitivity determined

TOTAL FLAGSHIP ADDITION: ~$100-160, ~2-3 days
TOTAL ALL EXPERIMENTS: ~$210-355, ~4-5 days
```

---

## 9. ANSWERS TO THE 6 QUESTIONS

### (a) What CONTENT should Flagship experiments use?

A composite research document (~600-800 lines) assembled from R1, R3, and R5 sections, providing domain transitions, content type variety, and semantic ambiguity. RESEARCH-SYNTHESIS.md is too structured and too short for Flagship stress-testing. Secondary validation on README.md (~2,053 lines) if the composite test passes.

### (b) What's the Flagship success bar?

PA-05 >= 3.0 is necessary but not sufficient. Flagship success requires:
- Tier 2 compositional criteria: multi-coherence at >= 3 boundaries (>= 3 channels each), scale coverage >= 4/5, transition grammar completeness, mechanism distribution across all page thirds
- Tier 2 score >= 3/4
- Aspirational: PA-05 >= 3.5, unprompted "intentional/designed" language, compositional surprise

### (c) Should there be Flagship-SPECIFIC experiments?

Yes. Three: F1 (multi-coherence stress test), F2 (scale depth test), F3 (content-form resonance test). These test capabilities that current experiments A-E cannot distinguish from Middle-tier competence.

### (d) What infrastructure does Flagship REQUIRE that the $5 test doesn't?

Full mechanism catalog (18 mechanisms), multi-coherence prompt section (~20 lines), fractal echo prompt section (~15 lines), harder/longer content (600-800 lines), programmatic SC-13 (multi-coherence gate, ~50 lines JS), extended PA questions (7 additional per auditor), cross-comparison PA protocol (3 additional auditors for F3).

### (e) Should the Fast Path exist at all for Flagship?

No. The Fast Path (PA-05 >= 3.0 = skip everything) is a Middle optimization. For Flagship, PA-05 >= 3.0 triggers F1-F3, not termination. The decision tree must be tier-aware: Middle can fast-path, Flagship cannot.

### (f) How do you test for compositional depth specifically?

- **Mechanisms:** Programmatic count (>= 12) + PA perception count (>= 8 perceptible)
- **Scales:** PA zoom-level question (median >= 3.5/5) + programmatic structural variation check
- **Channels:** Programmatic SC-13 (>= 3 channels shift at zone boundaries)
- **Coherence:** PA-only (semantic direction cannot be measured programmatically). "Do transitions feel directional or random?"
- **Content-form resonance:** Cross-comparison PA (F3). Two pages, same config, different content. If visual treatment adapts to content = resonance present.

---

## 10. RISK ANALYSIS

### Risk 1: Flagship experiments are unnecessary (all content scores 3.0+ naturally)
**Probability:** 30%. If Opus naturally produces multi-coherence and scale depth with a conventions brief, F1-F3 will confirm that the brief is sufficient for all tiers. This is the BEST OUTCOME -- it means no tier-specific infrastructure is needed.
**Mitigation:** Run F1/F2 in parallel with A-E's later experiments (D, E). Low marginal cost.

### Risk 2: Flagship experiments fail and reveal that 4/4 requires capabilities beyond any architecture
**Probability:** 20%. Content-form resonance may be an emergent property of specific Opus instances interacting with specific content, not reproducible by any configuration.
**Mitigation:** F3 specifically tests this. If content-form resonance fails across ALL configurations, the project must accept COMPOSED (3/4) as the reproducible ceiling and DESIGNED (4/4) as an occasional bonus.

### Risk 3: Flagship experiments succeed but don't generalize beyond composite research content
**Probability:** 25%. The composite document may have properties that uniquely suit the testing criteria.
**Mitigation:** Secondary validation on README.md (radically different content type). If Flagship passes on both, generalizability is reasonable for N=2.

### Risk 4: The additional PA questions bias auditors toward finding coherence
**Probability:** 15%. Asking "do transitions feel coordinated?" may prime auditors to see coordination that isn't there.
**Mitigation:** Include 2 control questions ("what feels random or disconnected?", "what would you change about the transitions?") that invite negative feedback. Compare responses to standard 48-question PA without the additions.

---

**END REPORT**
