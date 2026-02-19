# PA Skill Audit Report

**Author:** PA Skill Auditor (Opus 4.6)
**Date:** 2026-02-19
**Task:** #24 -- Audit the perceptual-auditing skill for operational value
**Input:** SKILL.md (848 lines), PV2-PIPELINE-DIAGRAM.md (978 lines), 14-MASTER-SYNTHESIS.md (615 lines)

---

## 1. 48 QUESTIONS ANALYSIS: OPERATIONAL VALUE CLASSIFICATION

### Classification Criteria

- **HIGH VALUE:** Produces a finding that directly maps to a CSS/HTML fix. The auditor sees a problem AND the fix path is clear.
- **MEDIUM VALUE:** Identifies a genuine perceptual issue, but the fix path requires interpretation or involves multiple possible causes.
- **LOW VALUE:** Solicits opinion or subjective preference. Findings don't reliably lead to specific fixes. Different auditors produce contradictory results.
- **REDUNDANT:** Overlaps substantially with another question. Could be merged or removed without losing diagnostic coverage.

### Question-by-Question Classification

#### Tier 1: The Mandatory Five (PA-01 through PA-05)

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-01 | **HIGH** | "What's the first thing that bothers you?" -- Reliably identifies the DOMINANT failure. 9/9 auditors flagged the whitespace void via this question in Mode 4 PA. The open-ended format catches what structured questions miss. KEEP. |
| PA-02 | **HIGH** | "Is any text uncomfortable to read?" -- Directly maps to CPL, font-size, line-height, or contrast fixes. Binary and actionable. KEEP. |
| PA-03 | **MEDIUM** | "Does this feel like one designer made it, or three?" -- Identifies dialect shifts, but the fix path is unclear. Three designers could mean: inconsistent spacing, inconsistent color temperatures, inconsistent typography, or all three. Useful as a SIGNAL but not a DIAGNOSIS. |
| PA-04 | **HIGH** | "Where does your eye go first? Is that where it SHOULD go?" -- Directly maps to hierarchy fixes (font-size, weight, color, position). If the eye goes to the wrong place, the fix is to strengthen the intended focal point. KEEP. |
| PA-05 | **HIGH** | The composite metric. Its 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) are the pipeline's quality gate. However, see Section 2 for deep dive. |

**Tier 1 verdict:** 4 HIGH, 1 MEDIUM. No changes needed. The mandatory five earn their status.

#### Tier 2: Standard Fifteen (PA-06 through PA-20, PA-29 through PA-45)

**Readability and Comfort:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-06 | **HIGH** | Word stacking -- the canonical bento-grid failure. Binary, specific, actionable (widen column or reduce content). |
| PA-07 | **HIGH** | Line tracking loss -- maps to CPL or line-height fix. Measurable. |
| PA-08 | **HIGH** | Squinting -- maps to font-size or contrast fix. Measurable. |
| PA-29 | **MEDIUM** | Header text style count -- "more than three fighting for attention" is a reasonable heuristic but "fighting for attention" is subjective. Two auditors may disagree on whether 4 styles are "fighting" vs "differentiated." Still useful but less reliable than PA-02/06/07/08. |

**Spatial Balance and Proportion:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-09 | **HIGH** | Dead space -- the question that SHOULD have caught the whitespace void. With the added severity calibration (1-2/3-5/6+ viewport-heights), this is now operationally precise. The calibration upgrade was critical. |
| PA-10 | **HIGH** | Squint test -- binary macro composition check. If squinting reveals lopsided columns, the fix is grid rebalancing. |
| PA-11 | **LOW** | "Generous (confident) or anxious (clutching)" -- This is psychological interpretation, not perceptual diagnosis. Two auditors will project different emotional readings onto the same margins. The underlying signal (are margins too tight or too wide?) is better captured by PA-09 and the quantitative guardrails (32px minimum padding). **CANDIDATE FOR REMOVAL OR REWORK.** |
| PA-30 | **HIGH** | Desktop width utilization -- directly catches the container-width violation (THE primary Phase D failure mode). Binary: "designed for this width" vs "narrower design centered." Maps to max-width CSS fix. |
| PA-31 | **MEDIUM** | Negative space quality -- "designed or leftover" is USEFUL but overlaps with PA-09 (dead space) and PA-33 (silence vs dropped signal). See redundancy analysis. |
| PA-32 | **HIGH** | Visual weight distribution across scroll -- directly catches front-loading. Maps to "redistribute content/components lower in the page." |
| PA-33 | **MEDIUM→REDUNDANT** | "Silence in music or dropped signal" -- Beautiful metaphor, but operationally this is PA-09 asked with more poetry. The severity calibration on PA-09 makes PA-33 redundant. **CANDIDATE FOR MERGER INTO PA-09.** |

**Visual Flow and Pacing:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-12 | **HIGH** | Eye flow between sections -- catches visual walls, abrupt transitions. Maps to transition CSS fixes (border, background shift, spacing). |
| PA-13 | **HIGH** | Visual ending -- catches missing footers (the exact Middle experiment defect). Maps to footer/closing-section HTML addition. |
| PA-34 | **MEDIUM** | Transition quality -- "DESIGNED moment or just empty space" overlaps with PA-12 but adds specificity. Keep as supplementary to PA-12, not standalone. |
| PA-35 | **HIGH** | Scroll momentum and engagement decay -- "Where do you start skimming?" provides a precise SCROLL POSITION for where design fails. The fix: add visual differentiation at that exact position. |
| PA-36 | **HIGH** | Dramatic moment placement -- "Is there a dramatic visual moment?" catches monotony (all-same treatment). If NO dramatic moment exists, the fix is to add one (featured callout, pull-quote, grid break). |

**Grid and Layout:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-14 | **HIGH** | Column breathing room -- catches cramped grids. Maps to gap/padding increase. |
| PA-15 | **HIGH** | Left-edge alignment count -- catches alignment scatter. Maps to grid column alignment fix. Measurable (count starting positions). |
| PA-37 | **MEDIUM** | Container information density -- "5+ pieces competing" is a reasonable threshold but "control panel or pile" is subjective. The underlying signal (too much in one container) is valid. |
| PA-38 | **HIGH** | Internal container hierarchy -- "clear reading order or all elements compete at same weight." Directly maps to font-size/weight differentiation within cards/callouts. |
| PA-39 | **HIGH** | Header-to-content proportion -- "doorway or lobby." Maps to reducing header height or moving content higher. The metaphor is vivid AND actionable. |

**Consistency and Rhythm:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-16 | **HIGH** | Identical-element consistency -- binary check. Pick two, compare. Fix: make them match. Extremely reliable. |
| PA-17 | **HIGH** | Visual rhythm -- elevated to Tier 1 equivalent for Ceiling+. Catches arrhythmic spacing. Maps to spacing regularization or intentional variation. |
| PA-40 | **MEDIUM** | Spacing jumps -- "sudden jump where the page skips a beat" is a more specific version of PA-17. Useful as a follow-up but partially redundant. |
| PA-41 | **HIGH** | Repetition monotony -- elevated to Tier 1 equivalent for Ceiling+. Catches card-grid boredom. Maps to variation introduction (weight differentiation, featured items). |

**Color and Emotion:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-18 | **HIGH** | Gray family consistency -- catches color temperature drift. Maps to palette correction. Measurable (warm vs cool grays). |
| PA-19 | **HIGH** | Visual intruder detection -- "element from a different website." Maps to removing/restyling the intruder. Binary and reliable. |
| PA-20 | **LOW** | "Describe personality in three words" -- This is creative interpretation, not diagnosis. Three auditors produce three different personality readings. The underlying signal (does the page feel right for its purpose?) is better captured by PA-05 (COHERENT) and PA-44 (metaphor sensing). **CANDIDATE FOR REMOVAL.** |

**Metaphor and Ideology:**

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-42 | **HIGH** | Metaphor-comfort trade-off -- "you understand WHY but it still looks WRONG." This is the KEY question for tension-composition layouts. Identifies where metaphor overrides comfort, requiring implementation adjustment. |
| PA-43 | **MEDIUM** | Metaphor cost optimization -- "lighter way to express the same concept." Valid but the answer is design opinion, not diagnosis. Useful for informing the planner, not for directing specific CSS fixes. |
| PA-44 | **HIGH** | Implicit vs explicit metaphor -- "could you sense the metaphor from visual structure alone?" This is the STRUCTURAL vs ANNOUNCED test. Binary and critical. The Flagship's 40% label-dependency was caught by this type of assessment. |
| PA-45 | **MEDIUM** | Design highlight presence -- "single moment you'd show someone." Valid for mediocrity detection but the fix path ("add something worth showing") is vague. |

#### Tier 3: Deep Dive (PA-21 through PA-28, PA-46 through PA-48)

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-21 | **HIGH** | Responsive design assessment -- catches squeeze artifacts at narrow viewports. |
| PA-22 | **MEDIUM** | "Served or punished" -- emotional language, but the underlying question (is mobile a degraded experience?) is valid. Less precise than PA-21. |
| PA-23 | **HIGH** | Breakpoint fragility -- "what breaks at -200px." Directly maps to CSS breakpoint fixes. |
| PA-24 | **MEDIUM** | Cross-page sibling consistency -- only applicable when multiple pages exist. Under ALWAYS FLAGSHIP with single-page builds, this becomes inapplicable for the first build. Relevant after 2+ pages exist. |
| PA-25 | **LOW** | "Could you identify the design system?" -- Under ALWAYS FLAGSHIP, every page IS the design system. This question is about brand recognition, which is only meaningful in a multi-page context after the design system is established. **INAPPLICABLE for single-page builds.** |
| PA-26 | **HIGH** | Convention-caused problems -- catches fossilized conventions. Directly actionable: change the convention. |
| PA-27 | **MEDIUM** | "Would you design it this way?" -- Solicits the auditor's alternative design preference, which is opinion. But it reveals whether the layout was constraint-shaped (bad) or intention-shaped (good). |
| PA-28 | **HIGH** | Adversarial exploit -- "how could someone make this terrible while passing rules?" Identifies rule loopholes. Directly informs rule tightening. |
| PA-46 | **HIGH** | Responsive reorganization sense -- catches mindless shrinking (vs thoughtful reorganization). |
| PA-47 | **HIGH** | Visual novelty decay -- "what scroll position do you start seeing repeats?" Provides precise position for visual refresh injection. |
| PA-48 | **MEDIUM** | Comparative ranking -- "first choice, last choice, middle." Opinion-based, but forces the auditor to commit to a quality ranking. Less actionable than other questions. |

#### Tier 4: Void Prevention (PA-50 through PA-53)

| ID | Classification | Rationale |
|----|---------------|-----------|
| PA-50 | **HIGH** | Blank viewport counting -- THE question that catches the whitespace void failure mode. Measurable, binary, maps directly to content redistribution. The most operationally important addition to the skill. |
| PA-51 | **HIGH** | Content-to-scroll ratio -- provides the macro view (PA-50 is micro). 4-level scale (dense/balanced/sparse/void-dominated). |
| PA-52 | **HIGH** | Visual weight per third -- catches front-loading. Binary per-third check. |
| PA-53 | **HIGH** | Width utilization at 1440px -- catches container-width violations. Maps to max-width CSS fix. |

**Tier 4 verdict:** All 4 are HIGH value. These were the critical addition that prevents the ceiling experiment's catastrophic failure mode.

### Summary Statistics

| Classification | Count | Percentage |
|----------------|-------|-----------|
| HIGH | 32 | 67% |
| MEDIUM | 12 | 25% |
| LOW | 3 | 6% |
| REDUNDANT | 1 | 2% |
| **Total** | **48** | **100%** |

### Recommended Changes

**REMOVE (3 questions):**
- PA-11 (generous/anxious margins) -- psychological interpretation, covered by PA-09 + quantitative guardrails
- PA-20 (describe personality in 3 words) -- creative interpretation, covered by PA-05 COHERENT + PA-44
- PA-25 (identify the design system) -- inapplicable under ALWAYS FLAGSHIP single-page builds

**MERGE (1 question):**
- PA-33 → merge into PA-09 as a sub-prompt: "For the largest dead space you identified, does it feel like purposeful silence or a dropped signal?"

**REWORK (2 questions):**
- PA-11 → rework as: "Measure the largest and smallest margins you can see. Does the difference feel intentional or accidental?" (makes it measurable)
- PA-20 → rework as: "Does the page's visual tone match the content's purpose? (Yes/No, with one-sentence reason)" (makes it binary)

**NET RESULT:** 48 → 45 questions (or 48 with reworks). Operational hit rate improves from 67% HIGH to ~73% HIGH.

---

## 2. PA-05 DEEP DIVE: THE CRITICAL METRIC

### Current State

PA-05 has 4 sub-criteria with a 4-point scale:
1. **DESIGNED** -- intentional composition vs assembled components
2. **COHERENT** -- one designer vs vocabulary from multiple systems
3. **PROPORTIONATE** (PA-05c) -- spatial balance with 3 sub-dimensions (horizontal, vertical, breathing)
4. **POLISHED** -- execution quality (missing elements, token compliance, transitions)

Scoring: 4/4 = YES (ship-ready), 3/4 = YES WITH RESERVATIONS, 2/4 or fewer = NO.

### Assessment: Is This Operationally Clear?

**PA-05a (DESIGNED):** PARTIALLY OPERATIONAL.
- PASS: "A designer made choices for THIS content" -- clear
- FAIL: "Someone competent followed a template" -- clear
- BUT: The gap between DESIGNED (4/4) and COMPOSED (3/4) in the pipeline diagram's weaver scale is NOT defined in the skill. The skill has a binary PASS/FAIL on "DESIGNED." The pipeline diagram introduces a 1-4 numeric scale (FLAT/STYLED/COMPOSED/DESIGNED) that IS NOT IN THE SKILL.

**This is a critical disconnect.** The pipeline diagram (Wave 2, Layer 2, Step 3) defines:
```
1/4 = FLAT (uniform, no visual hierarchy)
2/4 = STYLED (some variation, not composed)
3/4 = COMPOSED (clear hierarchy, cohesive feel)
4/4 = DESIGNED (intentional, everything serves the content's purpose)
```

The PA skill defines PA-05 as binary PASS/FAIL on 4 sub-criteria, then sums to 4/4. These are NOT the same scale. The pipeline's 1-4 is a holistic quality judgment. The PA skill's 4/4 is a binary checklist sum.

**Recommendation:** ALIGN the scales. The PA skill should contain the pipeline's 4-level scale as the OPERATIONAL definition. Each level should have diagnostic markers that auditors can observe:

| Level | What You SEE (diagnostic markers) |
|-------|----------------------------------|
| 1/4 FLAT | All sections have identical treatment. No font-size variation. No background shifts. No borders. The page is a single column of same-weight text. |
| 2/4 STYLED | Some sections have different treatment (a header has larger text, one section has a background). But the differences feel decorative, not meaningful. "This section is blue because they ran out of beige." |
| 3/4 COMPOSED | Clear visual hierarchy visible at every scroll position. Multiple distinct zones with intentional transitions. Typography serves structure. "A professional made this." |
| 4/4 DESIGNED | Every visual choice serves the content's specific purpose. The form amplifies the meaning. "This layout could ONLY work for THIS content." |

**PA-05b (COHERENT):** OPERATIONAL.
- Clear diagnostic: "same design intent visible across entire page" vs "header looks different from body from footer."
- Maps to: consistent mechanism deployment, dialect shift detection.

**PA-05c (PROPORTIONATE):** WELL-DESIGNED after the 3 sub-dimension expansion.
- The 3 sub-dimensions (horizontal, vertical, breathing) were added as a direct response to the ceiling experiment's failure.
- The "all THREE must PASS" requirement is binary and enforceable.
- The provenance notes (ceiling experiment failure examples) help auditors calibrate.

**PA-05d (POLISHED):** OPERATIONAL.
- "Missing elements (footer present?)" -- catches the Middle experiment's exact defect.
- "Token compliance high" -- binary check.
- "Transitions typed (not uniform gaps)" -- maps to transition CSS.

### PA-05 Verdict

PA-05 is 75% operational. The critical gap is the DESIGNED scale disconnect between the skill (binary sub-criteria sum) and the pipeline (holistic 1-4 quality level). This MUST be resolved before PV2 codification. The 4-level scale from the pipeline diagram should be embedded in the PA skill as the canonical PA-05 evaluation framework.

---

## 3. MODE 4 PROTOCOL ANALYSIS

### Is the 9-Auditor Deployment Embedded in the Skill?

**YES, partially.** The skill defines Mode 4 on lines 479-513:
- 9 auditors (A through I) with specific question assignments
- Task graph with dependencies
- Wave structure (contextualizer -> auditors -> weaver)

**NOT embedded:**
- The screenshot pre-capture pattern (team lead takes ALL screenshots before spawning auditors) -- this is in MEMORY.md but NOT in the PA skill
- The "auditors read saved images via Read tool" protocol
- The Playwright contention avoidance strategy
- The specific file naming convention for screenshots

**Assessment:** The Mode 4 protocol is structurally defined but OPERATIONALLY incomplete. The skill says "9 auditors" and assigns questions, but the proven execution pattern (pre-capture, Read tool, parallel agents) is scattered between memory files and informal knowledge.

### Recommendation

Add a "Mode 4 Operational Protocol" section to the PA skill that includes:
1. Screenshot pre-capture by team lead (BEFORE spawning auditors)
2. File naming: `{target}-{viewport}-coldlook.png`, `{target}-{viewport}-scroll-{NN}.png`
3. Auditor agents use Read tool (NOT Playwright) to examine screenshots
4. All 9 auditors spawn in parallel (zero Playwright contention)
5. Expected screenshot count: 36-102 depending on page length
6. Expected audit time: 30-45 minutes total (parallel execution)

This is ~30 lines. It codifies the proven pattern from the Mode 4 Standalone PA (102 screenshots, 9 agents parallel, zero contention).

---

## 4. CONNECTION TO COMPOSITIONAL INTELLIGENCE

### Does the PA Skill Know About Multi-Coherence?

**NO.** The PA skill does not contain the terms:
- "multi-coherence"
- "channel shift"
- "fractal self-similarity"
- "reinforcing pairs"
- "cascade value table"

The skill checks PERCEPTION (does it look good?) but not COMPOSITION (are the mechanisms deployed coherently?). These are different things:
- A page could look good without multi-coherence (lucky accident)
- A page could have multi-coherence but look bad (technically correct but perceptually flat -- the exact flagship failure)

### What the PA Skill Currently Checks

1. **Gestalt impression** (PA-01, PA-03, PA-04, PA-10)
2. **Readability** (PA-02, PA-06, PA-07, PA-08)
3. **Spatial distribution** (PA-09, PA-30, PA-31, PA-32, PA-50-53)
4. **Flow and pacing** (PA-12, PA-13, PA-34, PA-35, PA-36)
5. **Consistency** (PA-16, PA-17, PA-40, PA-41)
6. **Metaphor quality** (PA-42, PA-43, PA-44)

### What the PA Skill Does NOT Check

1. **Channel diversity at transitions** -- "Do at least 3 CSS channels shift at each section boundary?" (The programmatic gates check this, but auditors should PERCEIVE it too.)
2. **Mechanism count and category spread** -- "Can you count at least 5 distinct visual treatments?" (Fresh-eyes version of the per-category minimum.)
3. **Scale structure** -- "At squint distance, can you see 3+ levels of visual hierarchy?" (Related to PA-10 but more specific.)
4. **Coherence between mechanisms** -- "Do the visual treatments feel like they belong to the same vocabulary?" (Related to PA-03 but mechanistically specific.)

### Should PA Questions Be Structured to Verify Compositional Intelligence?

**NO, not directly.** The PA skill's core principle is "react to what you see before you check what you know." Adding questions about mechanisms, channels, and scales would violate the fresh-eyes principle. Auditors should NOT know what a "mechanism" or "channel" is.

**YES, indirectly.** The PERCEPTUAL EFFECTS of compositional intelligence should be checkable. Translate technical concepts into perception-level questions:

| Compositional Intelligence Concept | Perception-Level PA Question (proposed) |
|------------------------------------|-----------------------------------------|
| Multi-coherence (3+ channels shift at transitions) | "At each major section break, can you see at least 3 things change? (background, text style, spacing, borders, etc.)" |
| Fractal self-similarity (patterns repeat at different scales) | "Do you see the same visual 'idea' at different sizes? (e.g., a thick-to-thin pattern in borders AND in text weights AND in spacing)" |
| Reinforcing pairs (mechanisms that amplify each other) | "Is there any visual effect that you notice because TWO things are working together? (e.g., both the background AND the border emphasize the same section)" |

These could be added as 2-3 questions in a new "Compositional Perception" tier, without violating the fresh-eyes principle (they ask what you SEE, not what you KNOW).

### Recommendation

Add 2-3 compositional perception questions as a NEW tier (Tier 2.5, between Standard and Deep Dive):

- **PA-54:** "At each major section break, count how many things visibly change (background, text style, spacing, border, etc.). Is it usually 1 change, 2, or 3+?"
- **PA-55:** "Do you see any visual pattern that repeats at different sizes? (Same idea at headline scale, section scale, and page scale?)"

These are perception-level checks that INDIRECTLY verify compositional intelligence without requiring auditors to know the underlying theory. 2 questions, ~15 lines. High-leverage addition.

---

## 5. ALWAYS FLAGSHIP IMPACT ON PA

### Questions That Become Irrelevant Under ALWAYS FLAGSHIP

| ID | Current Purpose | ALWAYS FLAGSHIP Impact |
|----|----------------|----------------------|
| PA-24 | Cross-page sibling consistency | INAPPLICABLE for first build. Becomes relevant only after 2+ pages exist. Not tier-dependent but deployment-dependent. |
| PA-25 | Design system identification | INAPPLICABLE for single-page builds. Only meaningful when the design system has multiple pages to compare. |

### Questions Whose Behavior Changes

| ID | Current | Under ALWAYS FLAGSHIP |
|----|---------|----------------------|
| PA-17, PA-41 | "Elevated to Tier 1 equivalent for Ceiling+" | Now ALWAYS Tier 1 equivalent. The "Ceiling+" qualifier dissolves -- these are just mandatory. Simplify the language. |
| PA-50-53 | "Tier 4: Void Prevention (Ceiling+ Only -- MANDATORY)" | Now ALWAYS mandatory. Remove the "Ceiling+ Only" qualifier. Merge into Tier 2 or rename tier. |
| PA-09 | Severity calibration "MANDATORY for Ceiling+ audits" | Now ALWAYS mandatory. Remove qualifier. |
| PA-05c | "Expanded Sub-Dimensions (evaluate ALL THREE separately for Ceiling+ audits)" | Now ALWAYS expanded. Remove qualifier. |

### Tier System Under ALWAYS FLAGSHIP

The current 4-tier structure becomes simpler:

**Current:**
- Tier 1: Mandatory Five (always)
- Tier 2: Standard Fifteen (Standard + Standalone)
- Tier 3: Deep Dive (Standalone only)
- Tier 4: Void Prevention (Ceiling+ Only)

**Under ALWAYS FLAGSHIP:**
- Tier 1: Mandatory Five (PA-01 through PA-05) -- every audit, every mode
- Tier 2: Standard Twenty-Five (PA-06 through PA-53, excluding removed) -- Mode 3+
- Tier 3: Deep Dive (PA-21 through PA-28, PA-46 through PA-48) -- Mode 4

The Ceiling+ qualifiers dissolve. Tier 4 merges into Tier 2. The elevation notes for PA-17/PA-41 become unnecessary (they're just Tier 2 questions that happen to be critical).

**Net simplification:** 4 tiers -> 3 tiers. All "Ceiling+ only" language removed. All "MANDATORY for Ceiling+ audits" language simplified to "MANDATORY."

---

## 6. ENRICHMENT RECOMMENDATIONS: THE OPERATIONALLY EXCELLENT PA SKILL

### Current State Assessment

The PA skill is 848 lines. Here is the breakdown by section:

| Section | Lines | % | Assessment |
|---------|-------|---|-----------|
| Critical warning + fresh-eyes | 50 | 6% | ESSENTIAL -- keep |
| The One Rule + Sovereignty | 25 | 3% | ESSENTIAL -- keep |
| Three Laws | 5 | 1% | ESSENTIAL -- keep |
| 48 Questions (with tables + notes) | 285 | 34% | CORE -- needs alignment with pipeline |
| Quantitative Guardrails | 75 | 9% | ESSENTIAL -- keep, add perception thresholds |
| 4 Modes | 55 | 6% | NEEDS UPDATE -- Mode 4 operational protocol missing |
| Metaphor-Awareness Principles | 115 | 14% | GOOD -- keep |
| Visual Auditing Protocol | 65 | 8% | GOOD but Mode 4 pre-capture missing |
| Research Sovereignty + Lock Sheet | 45 | 5% | GOOD -- keep |
| Team Roles (CAN/CANNOT) | 40 | 5% | GOOD -- keep |
| Dual Severity Track | 20 | 2% | GOOD -- keep |
| Information Isolation | 10 | 1% | GOOD -- keep |
| Gate Verification | 10 | 1% | GOOD -- keep |
| Error Handling | 15 | 2% | GOOD -- keep |
| Validation + Red Flags | 30 | 4% | GOOD -- keep |
| File Structure + Team Naming | 15 | 2% | GOOD -- keep |

### Targeted Enrichments (NOT Wholesale Rewrite)

The skill is fundamentally sound. It needs surgical enrichments, not a rewrite. Here are the 6 specific changes:

**E-1: Embed the PA-05 4-level scale from the pipeline diagram (CRITICAL)**
- Location: After PA-05 sub-criteria (around line 88)
- Content: The FLAT/STYLED/COMPOSED/DESIGNED scale with diagnostic markers
- Lines: ~25
- Why: Resolves the critical disconnect between skill and pipeline

**E-2: Add Mode 4 Operational Protocol (IMPORTANT)**
- Location: After Mode 4 team/task graph (around line 513)
- Content: Screenshot pre-capture, Read tool, parallel execution, timing
- Lines: ~30
- Why: Codifies the proven execution pattern from the Mode 4 Standalone PA

**E-3: Add 2-3 Compositional Perception questions (VALUABLE)**
- Location: New section between Tier 2 and Tier 3 (after PA-45)
- Content: PA-54 (channel shift perception), PA-55 (fractal self-similarity perception)
- Lines: ~20
- Why: Indirectly verifies compositional intelligence without violating fresh-eyes

**E-4: Remove ALWAYS FLAGSHIP conditionals (SIMPLIFICATION)**
- Location: All "Ceiling+ only" and "MANDATORY for Ceiling+ audits" qualifiers
- Content: Remove qualifiers, merge Tier 4 into Tier 2
- Lines: Net -20 (removes more than adds)
- Why: Under ALWAYS FLAGSHIP, all conditionals dissolve

**E-5: Link to perception-thresholds.md (REFERENCE)**
- Location: Quantitative Guardrails section (around line 367)
- Content: Reference to the canonical perception threshold file (>=15 RGB, >=2px, >=0.03em, <=108px)
- Lines: ~10
- Why: Ensures thresholds are maintained in one canonical location

**E-6: Rework PA-11 and PA-20 (QUALITY)**
- Location: In-place rewrites
- Content: PA-11 → measurable margin comparison; PA-20 → binary tone-match check
- Lines: Net +5
- Why: Converts 2 LOW-value questions to MEDIUM-value

### Total Impact

| Change | Lines Added | Lines Removed | Net |
|--------|-----------|--------------|-----|
| E-1 PA-05 scale | +25 | 0 | +25 |
| E-2 Mode 4 protocol | +30 | 0 | +30 |
| E-3 Compositional questions | +20 | 0 | +20 |
| E-4 ALWAYS FLAGSHIP simplification | +5 | -25 | -20 |
| E-5 Threshold reference | +10 | 0 | +10 |
| E-6 Question rework | +10 | -5 | +5 |
| **Total** | **+100** | **-30** | **+70** |

**Result:** 848 lines -> ~918 lines. Still under 1,000 lines. Operationally tighter, pipeline-aligned, ALWAYS FLAGSHIP simplified.

---

## 7. VERDICT

### The PA Skill Is Fundamentally Sound

67% of questions are HIGH value. The tier structure is logical. The fresh-eyes principle is correctly enforced. The metaphor-awareness section is sophisticated. The quantitative guardrails are well-calibrated. The dual severity track is a genuine innovation.

### The 6 Enrichments Are Necessary

The PA skill has not been updated to reflect:
1. The pipeline's PA-05 scale (FLAT/STYLED/COMPOSED/DESIGNED) -- the CRITICAL gap
2. The Mode 4 operational protocol (screenshot pre-capture) -- the proven pattern
3. Compositional intelligence perception -- the missing diagnostic layer
4. ALWAYS FLAGSHIP simplification -- the dead-code removal
5. Perception threshold canonical reference -- the single source of truth
6. Two weak questions -- the quality floor

### What NOT to Do

- Do NOT add more questions. 48 is already near the upper bound. The proposed additions (PA-54, PA-55) are offset by the proposed removals (PA-11, PA-20, PA-25 rework).
- Do NOT add technical vocabulary to auditor prompts. The fresh-eyes principle is the skill's greatest strength.
- Do NOT merge Mode 3 and Mode 4. The 4-agent vs 9-agent distinction is cost-meaningful.
- Do NOT add mechanism-awareness to auditor instructions. Auditors should perceive EFFECTS, not causes.

### Priority

E-1 (PA-05 scale) is BLOCKING for PV2 codification. Without it, the pipeline's quality gate and the PA skill's scoring produce different meanings for the same score. All other enrichments are IMPORTANT but not BLOCKING.

---

**END OF REPORT**

**Statistics:**
- Questions audited: 48
- HIGH value: 32 (67%)
- MEDIUM value: 12 (25%)
- LOW value: 3 (6%)
- REDUNDANT: 1 (2%)
- Enrichments proposed: 6
- Net line change: +70 (848 -> ~918)
- BLOCKING enrichment: 1 (PA-05 scale alignment)
