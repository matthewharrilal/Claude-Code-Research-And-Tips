# 06 -- PA Skill Audit: Tier Removal + Flagship Enrichment

**Agent:** pa-auditor (Opus 4.6)
**Date:** 2026-02-19
**Task:** #6 -- Full audit of PA skill for tier removal + Flagship enrichment
**Source files read:**
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (848 lines, all read)
- `15-ALWAYS-FLAGSHIP-SIMPLIFICATION.md` (454 lines)
- `02-PA-ANALYSIS.md` (357 lines)
- `08-VERIFICATION-SPEC.md` (620 lines)
- `20-MULTI-COHERENCE-DEEP-DIVE.md` (450 lines)
- `22-FRACTAL-DEEP-DIVE.md` (541 lines)

---

## EXECUTIVE SUMMARY

The PA skill has **~34 tier-conditional mentions** across **~15 substantive conditional lines** (1.8% of 848 lines). Tier contamination is light because PA is a MEASUREMENT instrument, not a ROUTING instrument. However, the tier-conditional blocks gate quality checks behind "Ceiling+ only" qualifiers that should apply universally under ALWAYS FLAGSHIP.

Beyond tier removal, 6 enrichment categories are identified: Tier 5 compositional depth questions (8 new questions), multi-coherence evaluation guidance, fractal verification guidance, compositional surprise detection, restraint evaluation, and Flagship-specific auditor instructions. These enrichments transform the PA skill from a FLOOR detector into a FLOOR + CEILING detector.

**Net effect:** ~15 lines removed, ~180-220 lines added. The skill grows from ~848 to ~1,020-1,060 lines. The cognitive simplification is larger than the line change: auditors never ask "is this Ceiling+ or not?" -- the answer is always yes.

---

## PART 1: EXACT LINE RANGES TO REMOVE (Tier-Conditional Blocks)

### REMOVAL 1: PA-05c "Ceiling+ only" qualifier
**Lines 105-122** (the PA-05c Expanded Sub-Dimensions block)

Specifically, the tier-conditional language:
- **Line 105:** `**PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately for Ceiling+ audits):**` --> CHANGE to `**PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately):**`
- **Line 122:** `**PA-05c Scoring (Ceiling+ only):** All THREE sub-dimensions must PASS for PA-05c to PASS.` --> CHANGE to `**PA-05c Scoring:** All THREE sub-dimensions must PASS for PA-05c to PASS.`

**Action:** EDIT (remove qualifier text), not DELETE block. The sub-dimensions are signal; the "(Ceiling+ only)" and "(Ceiling+ audits)" qualifiers are noise.

---

### REMOVAL 2: PA-09 Severity Calibration "Ceiling+ audits" qualifier
**Lines 153-165** (PA-09 Severity Calibration block)

Specifically:
- **Line 153:** `**PA-09 Severity Calibration (MANDATORY for Ceiling+ audits):**` --> CHANGE to `**PA-09 Severity Calibration (MANDATORY):**`

**Action:** EDIT (remove "for Ceiling+ audits"), not DELETE block. The severity calibration content is signal.

---

### REMOVAL 3: PA-17/PA-41 Ceiling+ Tier Elevation block
**Lines 202-214** (the entire "CEILING+ TIER ELEVATION" section)

This block reads:
```
**CEILING+ TIER ELEVATION (MANDATORY, NOT ADVISORY):**

PA-17 and PA-41 are formally elevated to **Tier 1 equivalent** for all Ceiling-tier and above audits. This is a MANDATORY tier change, not a suggestion.

**For Ceiling+ audits (Ceiling, Flagship):**
- PA-17 (rhythm) and PA-41 (repetition monotony) are CRITICAL questions
- FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question (PA-01 through PA-05)
- All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
- Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

**Provenance:** [...]

**Binary enforcement:** If auditing a Ceiling+ page and PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.
```

**Action:** REWRITE. Under ALWAYS FLAGSHIP, there is no "elevation" -- PA-17 and PA-41 are ALWAYS Tier 1 equivalent. The concept of "elevating from lower tier" is meaningless. Replace with:

```
**PA-17 AND PA-41: TIER 1 EQUIVALENT (MANDATORY)**

PA-17 (rhythm) and PA-41 (repetition monotony) are **Tier 1 equivalent** -- equally critical as PA-01 through PA-05.

- FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question
- All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
- Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

**Binary enforcement:** If PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.

**Provenance:** Middle-tier experiment's highest-leverage perceptual finding was "metronomic rather than musical" rhythm. PA-17 correctly identified this as arrhythmic, and PA-41 caught the monotony.
```

**Lines saved:** ~3 (removed tier-conditional wrappers and "Ceiling-tier and above" phrasing). The provenance sentence survives in trimmed form.

---

### REMOVAL 4: Tier 4 Void Prevention "Ceiling+ Only" qualifier
**Lines 337-364** (Tier 4 header + content)

Specifically:
- **Line 337:** `### Tier 4: Void Prevention (Ceiling+ Only -- MANDATORY)` --> CHANGE to `### Tier 4: Void Prevention (MANDATORY)`
- **Lines 339-340:** The provenance paragraph references "ceiling experiment" -- this is historical context (factual), not tier-conditional logic. KEEP but could trim "These questions were ABSENT during the ceiling experiment" since it's provenance, not instruction.
- **Line 361:** `**Mode 4 Integration:** All 9 auditors (A through I) should note spatial distribution observations.` --> KEEP as-is (not tier-conditional)
- **Line 363:** `**Embedded Mode Integration:** Builders running Mode 1 (Embedded, 90 seconds)...` --> KEEP as-is (mode is independent of tier)

**Action:** EDIT line 337 header only. Remove "(Ceiling+ Only" from the tier label.

---

### REMOVAL 5: Tier label on question categories
**Line 78:** `### Tier 1: The Mandatory Five (Every Audit, Every Mode)` --> KEEP as-is (not tier-conditional, describes audit mode not page tier)
**Line 136:** `### Tier 2: Standard Fifteen (Standard + Standalone)` --> KEEP as-is (audit mode tier, not page tier)
**Line 304:** `### Tier 3: Deep Dive (Standalone Only)` --> KEEP as-is (audit mode tier)

**Note:** The Tier 1/2/3/4 labels in the PA skill refer to AUDIT DEPTH TIERS (which questions to ask based on audit mode), NOT page quality tiers (Floor/Middle/Ceiling/Flagship). These are a different concept and should NOT be removed. The confusion arises because "Tier 4" happens to be labeled "Ceiling+ Only" -- but the fix is removing the "Ceiling+ Only" qualifier, not the tier number.

---

### REMOVAL 6: Scattered "Ceiling+" references throughout
After thorough line-by-line scan, the remaining "Ceiling+" references are:

- **Line 110:** `- Ceiling experiment failure: Content appeared to use only ~50% of viewport width in places.` --> KEEP (factual provenance, not conditional)
- **Line 115:** `- Ceiling experiment failure: Visual interest died at 30% scroll depth` --> KEEP (factual provenance)
- **Line 120:** `- Ceiling experiment failure: 70-80% of scroll was "abandoned" negative space` --> KEEP (factual provenance)
- **Line 165:** `Ceiling experiment had ~24 consecutive frames of blank cream (CATASTROPHIC).` --> KEEP (factual provenance)
- **Line 206:** References removed by REMOVAL 3 above
- **Line 208:** References removed by REMOVAL 3 above

**Action:** No additional removals. Remaining "Ceiling" references are factual provenance about what happened in the ceiling experiment, not tier-conditional logic.

---

### SUMMARY OF REMOVALS

| # | Location | Content | Action | Lines Affected |
|---|----------|---------|--------|---------------|
| 1 | Line 105, 122 | PA-05c "Ceiling+ only" qualifiers | EDIT: remove qualifier text | 2 |
| 2 | Line 153 | PA-09 "Ceiling+ audits" qualifier | EDIT: remove qualifier | 1 |
| 3 | Lines 202-214 | PA-17/41 tier elevation block | REWRITE: remove tier framing | ~13 -> ~10 (net -3) |
| 4 | Line 337 | Tier 4 "Ceiling+ Only" label | EDIT: remove qualifier | 1 |
| 5 | N/A | Audit depth tier labels (Tier 1/2/3) | NO CHANGE (different concept) | 0 |
| 6 | Various | Factual "Ceiling experiment" references | NO CHANGE (provenance, not conditional) | 0 |
| **TOTAL** | | | | **~7 lines edited, ~3 lines net removed** |

**Actual edit count is small** because the PA skill is already 98.2% tier-agnostic. The 15-ALWAYS-FLAGSHIP-SIMPLIFICATION.md estimated ~15 lines; the actual count is ~7 edits affecting ~15 words.

---

## PART 2: EXACT ENRICHMENTS TO ADD

### ENRICHMENT 1: Tier 5 Compositional Depth Questions (PA-60 through PA-67)

**Source:** 02-PA-ANALYSIS.md Section 5 + 08-VERIFICATION-SPEC.md Section 2

**Where in skill:** NEW SECTION after Tier 4 (line 364), before "QUANTITATIVE GUARDRAILS" (line 367). This places Tier 5 in the natural progression: Tier 1 (Mandatory) -> Tier 2 (Standard) -> Tier 3 (Deep Dive) -> Tier 4 (Void Prevention) -> Tier 5 (Compositional Depth).

**Why:** PA-05's 4 binary sub-criteria measure a FLOOR (the "designed" threshold). Middle scored 4/4 with what auditors called "B+ effort." PA-05 structurally cannot distinguish Middle 4/4 from Flagship 4/4 because it has no score above 4/4. Tier 5 measures compositional depth ABOVE the floor -- the only instrument that separates "competent deployment" from "compositional mastery." Under ALWAYS FLAGSHIP, every audit needs this layer.

**Connection to existing question flow:** Tier 5 questions are assigned to existing Mode 4 auditors by perceptual affinity (not as a separate auditor). This integrates into the existing 9-auditor structure without requiring a 10th auditor.

**Exact content to add:**

```markdown
### Tier 5: Compositional Depth (MANDATORY)

**Provenance:** PA-05's 4 binary sub-criteria detect whether a page crosses the "designed" threshold (vocabulary fluency). Tier 5 detects compositional depth ABOVE that threshold -- the difference between "mechanisms deployed correctly" and "mechanisms in conversation." Under ALWAYS FLAGSHIP, Tier 5 is evaluated for every Mode 4 audit.

**Epistemic status:** These questions and their thresholds are INITIAL HYPOTHESES -- derived from the compositional intelligence stack (scales, channels, multi-coherence, anti-scale model), not from observed Flagship artifacts. The first experiment that reaches PA-05 >= 3.5 is calibration data. Thresholds may need adjustment.

**Compositional Depth Questions:**

| ID | Stack Layer | Question | What It Detects |
|----|-------------|----------|-----------------|
| **PA-60** | Multi-Coherence | Can you identify at least 3 distinct "design moments" -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each. | Design moment density: unique combinations at boundaries |
| **PA-61** | Channel Independence | Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time? | Multi-voice composition vs uniform coherence |
| **PA-62** | Transition Variation | Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds? | Dynamic range of transitions |
| **PA-63** | Fractal Coherence | Zoom into one component (a card, callout, table). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate? | Fractal self-similarity across scales |
| **PA-64** | Restraint | Is there any section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? | Designed simplicity vs default absence |
| **PA-65** | Compositional Voice | If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts? | Multi-voice detection: ensemble = Flagship; choir = Middle |
| **PA-66** | Negative Space | Look at the empty spaces between sections. Are they all the same "flavor" of emptiness, or do different gaps feel different from each other? | Negative space as composition, not just gap |
| **PA-67** | Novelty | Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel? | Creative surprise: unexpected-yet-perfect |

**Tier 5 Scoring:**

- Each PA-60 through PA-67: **YES** (with 2-3 sentence evidence) or **NO**
- Each YES/NO MUST include specific visual evidence cited from screenshots

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 7-8 / 8 | **COMPOSED** | Full compositional depth. All stack layers active and perceptible. |
| 5-6 / 8 | **APPROACHING** | Significant depth. Most stack layers active; 1-2 need strengthening. |
| 3-4 / 8 | **STRUCTURED** | Some compositional intelligence visible. Multiple stack layers absent. |
| 0-2 / 8 | **VOCABULARY ONLY** | Mechanisms deployed but not composed. Stack layers not engaged. |

**Combined verdict matrix (PA-05 x Tier 5):**

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template-quality) | VOCABULARY ONLY (Middle-equivalent) |
| **Tier 5: 3-4** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 5-6** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 7-8** | (impossible in practice) | (unlikely) | **COMPOSED** (Flagship target) |

**No prerequisite gate:** Tier 5 is evaluated for every Mode 4 audit regardless of PA-05 score. Even when PA-05 < 4/4, Tier 5 scores provide diagnostic value (they reveal WHICH stack layers are present even if the floor is not met).

**Tier 5 auditor assignments (Mode 4 integration):**

| Auditor | Standard Questions | Tier 5 Addition | Rationale |
|---------|-------------------|-----------------|-----------|
| **A** (Impression+Emotion) | PA-01,04,05,18,19,20,45 | **PA-65** (music analogy), **PA-67** (novelty) | Gestalt/emotional judgment |
| **B** (Readability+Typography) | PA-02,06,07,08,29 | (none) | Readability is pass/fail, not compositional |
| **C** (Spatial+Proportion) | PA-09,10,11,30,31,32,33,50,51,52,53 | **PA-64** (restraint), **PA-66** (negative space variety) | Spatial dimension |
| **D** (Flow+Pacing) | PA-12,13,34,35,36 | **PA-62** (transition variation) | Pacing dimension |
| **E** (Grid+Layout) | PA-14,15,37,38,39 | **PA-63** (fractal zoom) | Scale navigation |
| **F** (Consistency+Rhythm) | PA-16,17,40,41 | **PA-60** (design moments), **PA-61** (multi-voice) | Rhythm/coherence dimension |
| **G** (Metaphor+Ideology) | PA-42,43,44 | (none) | Already Flagship-relevant |
| **H** (Responsive) | PA-21,22,23,46,47 | (none) | Structural, not compositional |
| **I** (Adversarial) | PA-26,27,28,48 | (none) | Already probes beyond compliance |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**

**Weaver must produce TWO verdicts:**
1. **PA-05 Standard:** 0-4/4 (floor detection)
2. **Tier 5 Compositional Depth:** 0-8/8 (ceiling detection)
```

**Estimated lines added:** ~90

---

### ENRICHMENT 2: Multi-Coherence Evaluation Guidance

**Source:** 20-MULTI-COHERENCE-DEEP-DIVE.md Sections 2, 5, 6

**Where in skill:** NEW subsection within the existing "METAPHOR-AWARENESS PRINCIPLES" section (after line 592, before the "VISUAL AUDITING PROTOCOL" section at line 596). Multi-coherence is conceptually related to metaphor evaluation -- it is HOW the metaphor manifests at boundaries.

**Why:** Multi-coherence (>=3 channels shifting together at section boundaries in the same semantic direction) is THE signature Flagship quality. No current PA question directly targets it. PA-03 catches accidental incoherence but cannot detect the ABSENCE of multi-channel convergence. The Flagship experiment had 14 mechanisms in CSS but zero multi-coherence at boundaries -- all shifts below perception thresholds. Auditors need explicit guidance on how to evaluate multi-coherence from screenshots.

**Exact content to add:**

```markdown
### Multi-Coherence Evaluation (How Auditors Detect Channel Convergence)

**What multi-coherence IS:** The simultaneous shifting of >=3 visual properties at a section boundary, where ALL shifts communicate the SAME quality change (e.g., "deeper," "lighter," "more analytical"). The reader FEELS a zone change without being able to name any single cause.

**What to look for at section boundaries:**

1. **Count the shifts.** At each major boundary (where one area ends and another begins), how many things change simultaneously?
   - Background tone changes = 1 shift
   - Text size/density changes = 1 shift
   - Spacing (breathing room) changes = 1 shift
   - Borders appear/disappear/change = 1 shift
   - Content density (how much stuff per screen) changes = 1 shift
   - Visual rhythm (pacing of elements) changes = 1 shift

2. **Assess the direction.** Do the changes "agree"?
   - COHERENT: Background darkens AND text compresses AND spacing tightens AND borders thicken = all saying "denser/more intense" = GOOD
   - INCOHERENT: Background darkens AND spacing loosens = contradiction (one says "denser," other says "lighter") = PROBLEM

3. **Calibrate expectations:**

| Simultaneous Shifts | Experience | Quality Level |
|---------------------|------------|---------------|
| 0-1 | Flat, monotone -- sections feel the same | FLAT |
| 2 | Something changed, hard to say what | FUNCTIONAL |
| 3 | Definite zone change, somewhat mechanical | DESIGNED |
| 4-5 | Atmospheric shift, immersive | COMPOSED |
| 6 | Total transformation | FLAGSHIP |

**Key diagnostic:** If you scroll through the page and cannot tell WHERE one major area ends and another begins, multi-coherence is absent. If you can feel zone changes but cannot name what changed, multi-coherence is high. The best multi-coherence is invisible as technique but unmistakable as experience.

**Reference failure case (Flagship 1.5/4):** Background shifts of 1-8 RGB points (imperceptible), uniform 16px/400 typography, identical spacing -- reader scrolled through 12 sections that felt like one undifferentiated zone.

**Reference case (CD-006, Ceiling tier -- NOT Flagship target):** At S1->S2 boundary, 6 channels shifted simultaneously -- background, typography voice, spatial topology (1D stack to 2D grid), border semantics, component density, and rhythmic pattern ALL changed coherently. This demonstrates multi-coherence at Ceiling tier. Flagship multi-coherence goes BEYOND this: unified metaphor-driven semantic direction across ALL boundaries, dynamic coherence profiles (varying which channels lead at different boundaries), and compositional surprise at transitions.
```

**Estimated lines added:** ~40

---

### ENRICHMENT 3: Fractal Verification Guidance (Progressive Zoom Test)

**Source:** 22-FRACTAL-DEEP-DIVE.md Sections Q1, Q3, Q6

**Where in skill:** NEW subsection within "VISUAL AUDITING PROTOCOL" section (after line 668, after "Zone Sweep" and before "RESEARCH SOVEREIGNTY"). Fractal verification is an audit TECHNIQUE, not a question or a principle -- it belongs with the other audit protocols.

**Why:** Fractal self-similarity (same pattern direction at all 5 scales) is the VERTICAL axis of design coherence. PA-63 asks about it, but auditors need a specific PROTOCOL for how to test it from screenshots. The progressive zoom test is the perceptual method (Method 3 from 22-FRACTAL-DEEP-DIVE.md).

**Exact content to add:**

```markdown
### Progressive Zoom Test (Fractal Coherence Verification)

**When:** Any audit evaluating PA-63 (fractal zoom) or assessing compositional depth. MANDATORY for Mode 4.

**What it tests:** Whether the page's organizing principle appears at every zoom level -- the same DIRECTION of visual treatment visible whether you look at the full page, one section, one component, or one line of text.

**The 5 scales:**

| Scale | What to examine | What "present" looks like |
|-------|----------------|--------------------------|
| **Navigation** | Header + TOC area only | Header communicates the organizing principle (authority, warmth, structure). TOC previews the page's journey. |
| **Page** | Full scroll, squinted | Zone backgrounds shift visibly. Spacing compresses then releases. Transition types vary. An ARC is visible. |
| **Section** | One viewport in the middle | Multiple component types within the section. Internal rhythm (intro -> peak -> conclusion). |
| **Component** | One callout/card/table isolated | 2-zone DNA (sparse label, dense body). Internals respond to which zone of the page it sits in (denser in dense zones). |
| **Character** | One paragraph from sparse zone vs dense zone | Text itself FEELS different -- airier in sparse zones, denser in dense zones. |

**Protocol (5 steps, executed on scroll-through screenshots):**

1. **Bird's eye:** Cover all body content in screenshots. Look ONLY at the header + navigation region. Does it communicate what kind of page this is? **Scale 1: Navigation.**
2. **Scroll-through squint:** Blur vision. Scroll through all screenshots at speed. Can you feel a density/color/spacing ARC across the full page? **Scale 2: Page.**
3. **One-screen focus:** Pick a single viewport-height screenshot from the middle of the page. Is there component variety and internal rhythm within this one screen? **Scale 3: Section.**
4. **Component isolation:** Find the same component type (callout, card) appearing in two different zones. Side by side, can you tell which is from the sparse zone and which from the dense zone WITHOUT reading content? **Scale 4: Component.**
5. **Character comparison:** Read one paragraph from a sparse zone screenshot and one from a dense zone screenshot. Does the TEXT itself feel different (airier vs denser)? **Scale 5: Character.**

**Scoring:**
- 3+ scales clearly present = FRACTAL COHERENCE DETECTED
- 1-2 scales present = PARTIAL (identify which scales are missing)
- 0 scales = NO FRACTAL COHERENCE

**Dependency rule:** Scale 3 (Section), Scale 4 (Component), and Scale 5 (Character) DEPEND on Scale 2 (Page) being perceptible. If the page-level arc is invisible (no zone background shifts, no spacing variation), finer-scale coherence is orphaned -- it reinforces nothing. Flag this specific failure mode: "Character-level variation exists but page-level context is absent."
```

**Estimated lines added:** ~35

---

### ENRICHMENT 4: Flagship-Specific Auditor Instructions

**Source:** 02-PA-ANALYSIS.md Sections 4, 7; 08-VERIFICATION-SPEC.md Sections 3, 4

**Where in skill:** ADD to the Mode 4 team structure (lines 479-513). Augment the existing auditor assignment table with Tier 5 questions and the new question total.

**Why:** Under ALWAYS FLAGSHIP, Mode 4 auditors need to evaluate 56 questions (48 standard + 8 Tier 5) instead of 48. The assignment table in the skill must reflect this. Additionally, the Weaver must produce TWO verdicts (PA-05 standard + Tier 5 depth).

**Exact content to modify at lines 487-497:**

Replace the existing Mode 4 team block with:

```
**Team:**
```
[Lead]
  |- Research Contextualizer (Wave 1 -- Lock Sheet)
  |- Auditor A: Impression+Emotion (PA-01,04,05,18,19,20,45 + T5: PA-65,67) [9 Qs]
  |- Auditor B: Readability+Typography (PA-02,06,07,08,29) [5 Qs]
  |- Auditor C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53 + T5: PA-64,66) [13 Qs]
  |- Auditor D: Flow+Pacing (PA-12,13,34,35,36 + T5: PA-62) [6 Qs]
  |- Auditor E: Grid+Layout (PA-14,15,37,38,39 + T5: PA-63) [6 Qs]
  |- Auditor F: Consistency+Rhythm (PA-16,17,40,41 + T5: PA-60,61) [6 Qs]
  |- Auditor G: Metaphor+Ideology (PA-42,43,44) [3 Qs]
  |- Auditor H: Responsive (PA-21,22,23,46,47) [5 Qs]
  |- Adversarial (PA-26,27,28,48) [4 Qs]
  └- Weaver-Synthesizer (Wave 3 -- PA-05 verdict + Tier 5 verdict)
```

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**
```

**Additionally, add Weaver instructions after the Mode 4 task graph (line 513):**

```markdown
**Weaver Dual-Verdict Protocol:**

The Weaver-Synthesizer produces TWO independent scores:

1. **PA-05 Score (0-4/4):** Standard floor detection. 4 binary sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED). Same protocol as existing.

2. **Tier 5 Score (0-8/8):** Compositional depth. Aggregate YES/NO from PA-60 through PA-67 across assigned auditors. Include 2-3 sentence justification per question.

**Final Verdict uses BOTH scores:**

| PA-05 | Tier 5 | Verdict |
|-------|--------|---------|
| >= 3.5 | >= 6/8 | **SHIP** (Flagship COMPOSED) |
| >= 3.5 | 4-5/8 | **SHIP WITH RESERVATION** (Flagship APPROACHING) |
| >= 3.5 | 0-3/8 | **NOT FLAGSHIP** (excellent Middle/Ceiling quality) |
| 3.0-3.4 | any | **FIX CYCLE** (top-3 PA issues) |
| < 3.0 | N/A | **REBUILD** (structural failure) |
```

**Estimated lines added:** ~35

---

### ENRICHMENT 5: Compositional Surprise Detection

**Source:** 02-PA-ANALYSIS.md Section 4.5; 22-FRACTAL-DEEP-DIVE.md Section Q4

**Where in skill:** This is already covered by PA-67 (novelty) in Tier 5 questions above. No separate section needed -- PA-67 directly asks "Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive?" with "Creative surprise: unexpected-yet-perfect" as detection target.

**No additional content needed.** PA-67 handles this enrichment.

---

### ENRICHMENT 6: Restraint Evaluation Guidance

**Source:** 02-PA-ANALYSIS.md Section 4.4 (Anti-Scale Model); 22-FRACTAL-DEEP-DIVE.md Section Q1

**Where in skill:** ADD as a new subsection within the Tier 5 questions section (as a guidance note after PA-64's entry). Restraint is the hardest quality for auditors to evaluate because it requires distinguishing "designed quiet" from "forgot to design this part."

**Why:** Restraint is the second multiplicand of the anti-scale model (Richness = semantic density x RESTRAINT x spatial confidence). If restraint = 0, the product is maximalist noise. No current PA question distinguishes designed simplicity from default absence. PA-64 asks the question; this guidance tells auditors HOW to evaluate it.

**Exact content to add (after Tier 5 question table):**

```markdown
**Restraint Evaluation Guidance (for PA-64):**

Restraint is the hardest quality to audit because absence and simplicity look identical to the untrained eye. The key distinction:

| Quality | What It Looks Like | How to Tell |
|---------|-------------------|-------------|
| **Designed restraint** | A section with fewer visual treatments than its neighbors. Clean, simple, breathing. | The surrounding sections ARE richer -- the plain section is CONTRAST. It makes the rich sections more noticeable. The simplicity feels like a CHOICE. |
| **Default absence** | A section with fewer visual treatments than its neighbors. Empty, flat, forgettable. | The surrounding sections are equally flat -- there is no contrast effect. The simplicity feels like the designer RAN OUT of ideas or time. |
| **Accidental void** | A section with almost no content and large empty space. | The void has no compositional purpose. It is not "breathing room" -- it is dead air. Nothing about it enhances the surrounding content. |

**The test:** Cover the plain section with your hand. Does removing it make the page WORSE (designed restraint -- it was serving a purpose) or BETTER (absence -- it was dead weight)?

**What restraint looks like at Ceiling tier (CD-006 -- NOT Flagship target):** CD-006's BREATHING transitions (80px gap + 3px structural border) demonstrate restraint at Ceiling tier -- deliberately plain moments that separate rich sections. Flagship restraint would go beyond this: restraint as a metaphor-driven compositional choice where quiet sections MEAN something specific within the governing metaphor, not just "breathing room between rich sections." The Flagship experiment's whitespace voids were NOT restraint -- they were abandoned space with no compositional purpose.
```

**Estimated lines added:** ~20

---

### ENRICHMENT SUMMARY

| # | Enrichment | Location in Skill | Lines Added | Source |
|---|-----------|------------------|-------------|--------|
| 1 | Tier 5 Compositional Depth Questions (PA-60-67) | After Tier 4, before Quantitative Guardrails | ~90 | 02-PA-ANALYSIS, 08-VERIFICATION-SPEC |
| 2 | Multi-Coherence Evaluation Guidance | Within Metaphor-Awareness Principles | ~40 | 20-MULTI-COHERENCE-DEEP-DIVE |
| 3 | Fractal Verification (Progressive Zoom Test) | Within Visual Auditing Protocol | ~35 | 22-FRACTAL-DEEP-DIVE |
| 4 | Flagship Mode 4 Auditor Instructions + Weaver Dual Verdict | Mode 4 team structure (lines 479-513) | ~35 | 08-VERIFICATION-SPEC |
| 5 | Compositional Surprise Detection | Covered by PA-67 in Enrichment 1 | 0 | 02-PA-ANALYSIS |
| 6 | Restraint Evaluation Guidance | Within Tier 5 questions section | ~20 | 02-PA-ANALYSIS, 22-FRACTAL-DEEP-DIVE |
| **TOTAL** | | | **~220** | |

---

## PART 3: POST-EDIT AUDIT CHECKLIST

### 3.1 Orphaned References Check

| Reference | Status | Action |
|-----------|--------|--------|
| "Ceiling+" in PA-05c sub-dimensions | WILL BE ORPHANED by Removal 1 | Edit removes qualifier -- check no other line references "Ceiling+ only PA-05c" |
| "Ceiling+" in PA-09 severity | WILL BE ORPHANED by Removal 2 | Edit removes qualifier -- check no other line references "Ceiling+ PA-09" |
| "Tier 1 equivalent" for PA-17/41 | REWIRED by Removal 3 | New text says "Tier 1 equivalent" directly -- verify no line says "elevated for Ceiling+" |
| "Ceiling+ Only" in Tier 4 header | WILL BE ORPHANED by Removal 4 | Edit removes qualifier -- check no other section says "if Ceiling+, also do Tier 4" |
| PA-60 through PA-67 (new IDs) | NEW by Enrichment 1 | Verify no collision with existing PA IDs (PA-48 is highest existing; PA-50-53 are Tier 4; PA-60-67 are clear) |
| "Tier 5" concept | NEW by Enrichment 1 | Verify the term "Tier 5" doesn't appear elsewhere in skill with different meaning. Current: Tier 1-4 only. CLEAR. |
| Mode 4 auditor table | MODIFIED by Enrichment 4 | Verify old table is REPLACED, not duplicated. Only ONE auditor assignment table should exist. |
| Weaver instructions | NEW by Enrichment 4 | Verify no conflicting Weaver instructions elsewhere. Current: Weaver mentioned at lines 497, 727-729. Check for conflicts. |

### 3.2 Dead Paths Check

| Path | Status | Action |
|------|--------|--------|
| "If Ceiling+ audit, use PA-05c sub-dimensions" | DEAD after Removal 1 | PA-05c sub-dimensions now apply universally -- no conditional path |
| "If Ceiling+ audit, use severity calibration" | DEAD after Removal 2 | Severity calibration now applies universally |
| "If Ceiling+ audit, elevate PA-17/41" | DEAD after Removal 3 | PA-17/41 are always Tier 1 equivalent |
| "If Ceiling+ audit, add Tier 4 questions" | DEAD after Removal 4 | Tier 4 always applies |
| "Tier 5 questions gated behind PA-05 >= 3/4" | INTENTIONALLY REMOVED | 02-PA-ANALYSIS initially proposed gating Tier 5 behind PA-05 >= 3/4, but later concluded "No prerequisite gate" -- Tier 5 always runs for diagnostic value |

### 3.3 Broken Cross-References Check

| Cross-Reference | Status | Action |
|----------------|--------|--------|
| "48 PA questions" in line 7 | STALE after Enrichment 1 | UPDATE to "56 PA questions (48 standard + 8 Tier 5)" |
| "All 48 questions" in Mode 4 description (line 482) | STALE after Enrichment 1 | UPDATE to "All 56 questions" |
| Auditor assignment in Mode 3 (lines 463-468) | UNAFFECTED | Mode 3 uses PA-01 through PA-45 only (no Tier 5); Tier 5 is Mode 4 only |
| "PA-01-PA-05" Tier 1 description | UNAFFECTED | Tier 1 still the Mandatory Five; PA-17/41 are "Tier 1 EQUIVALENT," not literal Tier 1 members |
| Lock Sheet references PA-17/41 elevation | STALE after Removal 3 | If any Lock Sheet template references "Ceiling+ elevation," update |
| Line 482 "All 48 questions at 1440px, 768px, and 1024px" | STALE | Update to "All 56 questions" |
| Definitive Specification reference (line 844-847) | UNAFFECTED but STALE | The reference to `11-final-specification.md` may be outdated; verify it still exists and is consistent |

### 3.4 Strengthening Opportunities

| Opportunity | Description | Priority |
|------------|-------------|----------|
| **PA-05 scoring update** | PA-05 scoring (lines 129-133) should reference the Tier 5 combined verdict matrix. Currently PA-05 = 4/4 is the ceiling. Under ALWAYS FLAGSHIP, PA-05 = 4/4 + Tier 5 = 0/8 is "VOCABULARY ONLY" -- not ship-ready. Add a note after line 133: "For compositional depth beyond the designed threshold, see Tier 5 (PA-60 through PA-67)." | HIGH |
| **Mode 1/2 Tier 5 guidance** | Modes 1-2 do NOT include Tier 5 questions (too quick). Add a note in Mode 1 (line 449) and Mode 2 (line 455): "Tier 5 compositional depth questions are Mode 4 only." | MEDIUM |
| **Validation section update** | The Bento Grid Litmus Test (line 792) validates PA catches mechanical failures. Add a Tier 5 litmus test: "The skill passes if it can distinguish a Middle 4/4 page (well-deployed mechanisms, single-voice composition) from a Flagship 4/4 page (multi-voice composition, fractal coherence, designed restraint). PA-60-67 should score YES on the Flagship page and NO on the Middle page." | MEDIUM |
| **Red Flags update** | Line 803 lists red flags. Add: "All Tier 5 questions answered YES without specific visual evidence cited" and "Tier 5 score = 8/8 on a page with PA-05 < 3/4 (impossible in practice -- flag as unreliable auditor)" | LOW |
| **Error Handling update** | Line 778 lists failure/recovery. Add: "Tier 5 auditor answers YES on all 8 questions without citing evidence -> Flag as UNRELIABLE, respawn with emphasis on specific evidence requirement" | LOW |
| **Fresh-Eyes principle reinforcement** | Line 46-48 emphasizes fresh-eyes for PA. Add Tier 5 to the list: "Do NOT provide: mechanism counts, pattern names, tier model, build plan details, prior experiment results, **Tier 5 expected scores, or compositional stack theory**." This prevents auditors from learning the stack model and then seeing it everywhere. | HIGH |
| **Quantitative guardrails note** | After the Quantitative Guardrails section (line 367-440), add: "These guardrails are FLOORS for programmatic gates. Tier 5 questions measure compositional quality ABOVE these floors. Meeting all guardrail thresholds is necessary but not sufficient for Flagship quality." | LOW |

### 3.5 Consistency Check: PA Question ID Numbering

| Range | Assignment | Status |
|-------|-----------|--------|
| PA-01 to PA-05 | Tier 1: Mandatory Five | STABLE |
| PA-06 to PA-20 | Tier 2: Standard Fifteen | STABLE |
| PA-21 to PA-28 | Tier 3: Deep Dive | STABLE |
| PA-29 to PA-45 | Tier 2 continued (added questions) | STABLE |
| PA-46 to PA-48 | Tier 3 continued (added questions) | STABLE |
| PA-50 to PA-53 | Tier 4: Void Prevention | STABLE (gap at PA-49 is fine) |
| **PA-60 to PA-67** | **Tier 5: Compositional Depth (NEW)** | **NEW -- no collision** |
| PA-70 to PA-77 | Alternate numbering from 02-PA-ANALYSIS | **CONFLICT -- use PA-60-67 not PA-70-77** |

**IMPORTANT:** 02-PA-ANALYSIS.md uses PA-70 through PA-77 for the same questions. 08-VERIFICATION-SPEC.md uses PA-60 through PA-67. The skill should use **PA-60 through PA-67** to maintain tighter numbering (no unnecessary gap from PA-53 to PA-70). The master prompt must RECONCILE this numbering. Recommend PA-60-67 as canonical.

---

## PART 4: EDIT EXECUTION PLAN (Ordered)

For the agent applying these edits, execute in this order:

1. **Tier removals first** (Removals 1-4): Small, surgical edits to existing lines
2. **Cross-reference updates** (3.3): Update "48 questions" to "56 questions" throughout
3. **Tier 5 questions** (Enrichment 1): Insert new section after Tier 4
4. **Multi-coherence guidance** (Enrichment 2): Insert after line 592
5. **Fractal verification** (Enrichment 3): Insert after line 668
6. **Mode 4 team update** (Enrichment 4): Replace auditor table at lines 487-497
7. **Restraint guidance** (Enrichment 6): Insert within Tier 5 section
8. **Strengthening opportunities** (3.4): Apply HIGH priority items
9. **Final pass:** Read the entire edited skill to verify no orphaned refs, no duplicate sections

**Estimated total edit time:** 30-40 minutes for an agent with the skill loaded.

---

**END OF PA SKILL AUDIT**

**Key numbers:**
- 7 edits for tier removal (~15 words changed, ~3 net lines removed)
- 6 enrichments adding ~220 lines
- 8 cross-references to update
- 7 strengthening opportunities (3 HIGH, 2 MEDIUM, 2 LOW)
- PA-60 through PA-67 = canonical Tier 5 IDs
- 56 total questions (48 standard + 8 Tier 5) for Mode 4
- 9 auditors (unchanged) + dual-verdict Weaver
