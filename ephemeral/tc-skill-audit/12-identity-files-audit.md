# Identity Files Audit: prohibitions.md + soul-constraints.md

**Auditor:** identity-auditor (Task #23)
**Date:** 2026-03-01
**Files audited:**
- `design-system/compositional-core/identity/prohibitions.md` (419 lines)
- `design-system/compositional-core/identity/soul-constraints.md` (342 lines)
- `design-system/compositional-core/identity/README.md` (138 lines)
- `design-system/implementation/component-system/tests/soul-principles.spec.ts` (436 lines)

**Classification key:**
- **IDENTITY:** Genuine design system personality -- keep as world-description
- **PIPELINE-ARTIFACT:** Rule from old pipeline audits -- evaluate for removal or reframing
- **CHANNELING:** Pre-decides compositional choices the builder should make -- remove
- **CONTRADICTS NEW MODEL:** Incompatible with feedback-loop composition -- flag

---

## 1. Overall Structure Assessment

### Current framing: RULES (compliance mode)

Both files are structured as compliance documents. The dominant voice is imperative/prohibitive:

- "NEVER use..." (22 instances across prohibitions.md)
- "SOUL VIOLATION" (14 instances across soul-constraints.md)
- "MUST document..." (5 instances)
- "There is NO context where..." (absolute language throughout)
- "Output is INVALID" (3 instances)
- "Cannot be committed" (1 instance)
- "Every violation must be caught BEFORE commit" (1 instance)

### What the new model wants: WORLD-DESCRIPTION (identity mode)

The new model wants identity files that describe what the design system IS -- its personality, its aesthetic sensibility, its worldview. Builders should internalize the world and then make choices within it, not check a compliance list.

**Example transformation:**

RULES mode (current):
> "NEVER Use border-radius > 0 on Any Element. If ANY checkbox is unchecked -> SOUL VIOLATION -> Output is INVALID."

WORLD-DESCRIPTION mode (target):
> "KortAI surfaces are sharp. Every edge is a right angle -- corners cut with authority, not softened for comfort. This sharpness comes from print heritage: editorial layouts trust content to carry warmth while geometry carries precision."

The world-description communicates the same constraint but through CHARACTER rather than COMPLIANCE.

---

## 2. Rule-by-Rule Classification

### ABSOLUTE PROHIBITIONS (1-8)

#### #1: NEVER Use border-radius > 0
**Classification: IDENTITY**
This IS soul. Sharp geometry is the single most recognizable KortAI trait. The rule itself is genuine identity; the framing is pipeline-era.
**Recommendation:** Keep the constraint. Reframe from "NEVER use border-radius > 0" to world-description of angular character.

#### #2: NEVER Use box-shadow
**Classification: IDENTITY**
Anti-physical depth is genuine identity. The distinction between physical simulation and structural depth is a real philosophical position.
**Recommendation:** Keep. Reframe as worldview ("depth is structural, not simulated").

#### #3: NEVER Use filter: drop-shadow()
**Classification: IDENTITY (redundant)**
This is a corollary of #2, not a separate identity marker. Having it as a separate rule is pipeline-era gate-thinking (each CSS property gets its own rule for programmatic checking).
**Recommendation:** Merge into #2 as part of "no simulated depth" world-description. The distinction between box-shadow and filter: drop-shadow() is a CSS implementation detail, not an identity characteristic.

#### #4: NEVER Use Semi-Transparent Backgrounds
**Classification: IDENTITY (borderline PIPELINE-ARTIFACT)**
The core idea (no simulated depth) is identity. But the specific formulation ("opacity < 1.0 on offset pseudo-elements") reads as a gate-runner rule, not a design personality trait. The evidence cites "OD-AP-003: Semi-Transparent Backgrounds (Systemic Audit Gap)" -- this is literally named after a pipeline audit finding.
**Recommendation:** Keep the principle (flat, honest surfaces). Remove the CSS-property-level specificity. In world-description: "Surfaces are opaque. What you see is what is there."

#### #5: NEVER Use Gradient Backgrounds
**Classification: IDENTITY**
Flat color is genuine identity. Gradients imply light sources, which contradicts the flat editorial aesthetic.
**Recommendation:** Keep. Folds naturally into world-description of flat, honest surfaces.

#### #6: NEVER Use Pure Black (#000000) or Pure White (#FFFFFF)
**Classification: IDENTITY**
Warm palette is genuine identity. The cream background (#FEF9F5) and near-black text (#1A1A1A) create editorial warmth that distinguishes KortAI from generic dark/light themes.
**Recommendation:** Keep. World-description: "KortAI lives in warm tones -- cream, not white; near-black, not black. The warmth is editorial, not accidental."

#### #7: NEVER Use Instrument Serif for Body Text
**Classification: IDENTITY**
The typography trinity (Instrument Serif for display, Inter for body, JetBrains Mono for code) is genuine identity.
**Recommendation:** Keep. World-description: "Instrument Serif speaks only in headlines -- its voice is too strong for body text, like an opera singer who shouldn't narrate the audiobook."

#### #8: NEVER Use Rounded Corners for Decoration (Redundant with #1)
**Classification: PIPELINE-ARTIFACT (redundant rule)**
This is explicitly labeled "Redundant Reinforcement of #1." It exists because pipeline gates were checklist-based and needed separate entries for separate failure modes. In a world-description model, one description of angular character covers both #1 and #8.
**Recommendation:** Delete. Merge into #1's world-description.

### CONDITIONAL PROHIBITIONS (9-18)

#### #9: NEVER Use 2px Borders (except OD-004 confidence encoding)
**Classification: IDENTITY with CHANNELING element**
The "2px epidemic" was a real finding -- 108 CSS declarations, 1000+ computed instances creating visual mush. The prohibition is justified. HOWEVER, the specific exception ("OD-004 confidence encoding") channels builders toward one specific pattern.
**Recommendation:** Keep the identity principle (border weights are semantic: 4px = strong signal, 1px = subtle divider, 2px = ambiguous). Remove the specific OD-004 exception reference -- let builders decide when 2px is semantically justified for THEIR content.

#### #10: NEVER Use Accent Borders < 4px (except progressive depth)
**Classification: IDENTITY with CHANNELING element**
The 4px accent border is a real signature. But the exception for "AD-004 (Spiral) progressive border-weight gradient (4px/3px/1px)" channels toward one specific exploration's implementation.
**Recommendation:** Keep the signature (4px accent). Remove exploration-specific exception. In world-description: "The signature accent is bold -- 4px minimum. Thinner accents don't register as intentional in KortAI's confident geometry."

#### #11: NEVER Use Decorative Elements Without Information
**Classification: IDENTITY**
"Every visual element carries semantic weight" is genuine identity. Anti-complexity is a real position.
**Recommendation:** Keep. This is already close to world-description.

#### #12: NEVER Break Grid with Decoration
**Classification: IDENTITY**
Content-driven grid breaks vs decorative grid breaks is a genuine distinction.
**Recommendation:** Keep. World-description: "The grid serves content. Content may break the grid; decoration may not."

#### #13: NEVER Use Vertical Borders in Tables
**Classification: IDENTITY**
Open grid with horizontal-only rules is a genuine aesthetic choice (print heritage, Swiss style influence).
**Recommendation:** Keep. World-description: "Tables breathe horizontally. Vertical bars create prisons."

#### #14: NEVER Use Hover Lift Effects
**Classification: IDENTITY**
Anti-physical interaction model is genuine. Content is editorial, not interactive UI elements.
**Recommendation:** Keep. Folds into anti-physical world-description.

#### #15: NEVER Use Traffic-Light Color Adjacency
**Classification: CHANNELING**
This is overly specific. The underlying principle (color palette discipline) is identity, but specifying exact adjacency rules for green and red pre-decides layout choices. A builder with world-understanding would naturally avoid kindergarten-level color combinations.
**Recommendation:** Remove as a separate rule. The warm palette identity (#6) and anti-decoration identity (#11) already cover this. A builder who understands the world won't place Christmas colors side-by-side.

#### #16: NEVER Use Cool-Toned Grays
**Classification: IDENTITY**
Warm palette is genuine identity. Cool grays break the editorial warmth.
**Recommendation:** Keep. Merge into warm palette world-description (#6).

#### #17: NEVER Use Non-Italic h3 Headings
**Classification: CHANNELING**
This is extremely specific typographic micro-management. It pre-decides one dimension of every h3 the builder will ever write. In a feedback-loop composition model, the builder should feel the typographic rhythm and make italic/roman choices based on the content's needs.
**Recommendation:** Remove as a hard rule. In world-description, describe the typographic rhythm: "KortAI typography has hierarchy through weight and posture -- italic creates a different voice, like a sidebar comment in a magazine."

#### #18: NEVER Use Same-Density Stacking
**Classification: CHANNELING**
This pre-decides compositional rhythm. Density variation IS good composition, but making it a prohibition rather than a world-characteristic channeling the builder into specific patterns (PULSE, CRESCENDO, BOOKENDS, WAVE -- all named patterns from the pipeline era).
**Recommendation:** Remove as a prohibition. In world-description: "KortAI pages breathe. Dense sections earn rest; sparse sections earn density. The rhythm is fractal -- the same variation at every scale."

### META-PROHIBITIONS (19-22)

#### #19: NEVER Justify Without Research Provenance
**Classification: PIPELINE-ARTIFACT**
This is entirely pipeline-process enforcement. "Every visual decision must trace to research findings" is a pipeline methodology requirement, not a design system identity trait. A builder composing a page doesn't need to cite R3-023 for their spacing choices.
**Recommendation:** Remove entirely. This is process documentation, not identity.

#### #20: NEVER Create Patterns Without Tension Derivation
**Classification: PIPELINE-ARTIFACT**
This is a pipeline process rule. Tension-composition is a skill/methodology, not a design system identity trait. The identity files should describe what KortAI IS, not how the pipeline creates it.
**Recommendation:** Remove entirely. This belongs in the skill/process documentation, not identity.

#### #21: NEVER Allow Full Viewport of Contentless Space
**Classification: PIPELINE-ARTIFACT (originated from ceiling experiment failure)**
The evidence explicitly cites "Ceiling experiment (2026-02-16): 70-80% of scroll was empty cream void." This rule was created in response to one specific failure, not derived from design system identity. It includes a detailed measurement protocol (scroll positions, 30% threshold, consecutive positions) that reads as a gate-runner specification, not identity.
**Recommendation:** Remove as identity rule. This is a quality check that belongs in the PA/gate system, not in the description of what KortAI IS. World-description: "KortAI pages are confident in their content. Space serves rhythm, not emptiness."

#### #22: NEVER Concentrate Visual Interest in First Third
**Classification: PIPELINE-ARTIFACT (originated from ceiling experiment failure)**
Same as #21 -- created in response to ceiling experiment findings. Evidence cites specific PA question numbers (PA-36, PA-47, PA-35, PA-32). Includes detailed measurement protocol (scroll depth percentages, "designed moment" definition). This is a quality audit criterion, not identity.
**Recommendation:** Remove as identity rule. Belongs in PA system. World-description: "Visual interest is distributed like chapters in a novel -- the good parts aren't all in the introduction."

---

## 3. soul-constraints.md Assessment

### The 3 Soul Constraints

**#1: border-radius: 0 -- IDENTITY (genuine)**
**#2: box-shadow: none -- IDENTITY (genuine)**
**#3: filter: none -- IDENTITY (redundant with #2)**

The core trio is genuine identity. However, the document has serious structural issues:

### Issues

1. **342 lines for 3 rules.** The ratio of explanation to constraint is ~114:1. This is pipeline-era documentation bloat. A world-description would communicate the same identity in ~50 lines.

2. **Redundancy with prohibitions.md.** Soul-constraints.md restates #1, #2, and #3 from prohibitions.md in greater detail. Two files saying the same thing in different ways creates maintenance burden and potential for drift.

3. **Pipeline-era framing throughout:**
   - "Output marked INVALID" (line 327)
   - "Cannot be committed" (line 328)
   - "Must be rebuilt from soul-compliant foundation" (line 329)
   - "Soul compliance is the FIRST checkpoint, not the last" (line 340)
   These are pipeline process statements, not identity descriptions.

4. **The "Why Only 3?" section is pipeline-defensive.** It spends 24 lines justifying why the number is 3, anticipating pipeline-audit challenges to the categorization. This is institutional anxiety, not identity.

5. **The "Validation Checklist" section (lines 293-304) is a gate-runner spec.** It lists checkboxes and pass/fail criteria. This belongs in the gate system, not identity.

6. **The "What Happens When Soul Is Violated" section (lines 309-337) is pipeline enforcement.** "Process Impact: Output marked INVALID, Cannot be committed, Cannot inform future patterns, Must be rebuilt." These are pipeline workflow consequences, not design identity.

### Recommendation

Merge soul-constraints.md into a unified identity world-description document. The 3 constraints are the CORE of identity, but they don't need their own 342-line file separate from prohibitions. One document that describes the world, with the 3 soul constraints as the opening paragraph, is more coherent.

---

## 4. README.md Assessment

### Classification: PIPELINE-ARTIFACT (routing/process document)

The README is a process routing document ("How to Use This Directory," "Step 1: Read prohibitions.md FIRST," "During Code Review"). It was written for the old pipeline's agent ingestion protocol.

**Issues:**
- "File Metadata" section at bottom counts files and lists "Next review: After Phase D-V builds" -- pipeline lifecycle language
- "Extraction lens: Identity (100% weight)" -- pipeline extraction methodology
- The entire "How to Use" section assumes pipeline-era sequential reading protocol
- Cross-references to Layer 2-5 are pipeline ontology, not identity

**Recommendation:** Rewrite as a brief introduction to the identity world-description. Remove pipeline process instructions.

---

## 5. soul-principles.spec.ts Assessment

### Classification: IDENTITY (implementation is fine, but test names channel)

The Playwright tests correctly enforce the 3 soul constraints plus typography and spacing. These are valid programmatic checks.

**Minor issue:** Test names like "Rule 5: Heavy Borders" and threshold values (e.g., `expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4)`) embed specific numeric thresholds that could channel builders into exact values rather than understanding the principle. But this is a test file, not a builder-facing document -- the channeling risk is low.

**Recommendation:** Keep as-is. Tests should be specific. The issue is only with the identity DESCRIPTION files, not the verification code.

---

## 6. Summary Classification Table

| Rule # | Name | Classification | Action |
|--------|------|---------------|--------|
| 1 | No border-radius > 0 | IDENTITY | Keep, reframe as world-description |
| 2 | No box-shadow | IDENTITY | Keep, reframe |
| 3 | No filter: drop-shadow | IDENTITY (redundant) | Merge into #2 |
| 4 | No semi-transparent backgrounds | IDENTITY (borderline) | Keep principle, remove CSS-level detail |
| 5 | No gradient backgrounds | IDENTITY | Keep, reframe |
| 6 | No pure black/white | IDENTITY | Keep, reframe |
| 7 | Serif for display only | IDENTITY | Keep, reframe |
| 8 | No rounded corners (redundant) | PIPELINE-ARTIFACT | Delete (duplicate of #1) |
| 9 | No 2px borders | IDENTITY + CHANNELING | Keep principle, remove OD-004 exception |
| 10 | No accent < 4px | IDENTITY + CHANNELING | Keep signature, remove AD-004 exception |
| 11 | No decorative elements | IDENTITY | Keep |
| 12 | No decorative grid breaks | IDENTITY | Keep |
| 13 | No vertical table borders | IDENTITY | Keep |
| 14 | No hover lift | IDENTITY | Keep, fold into anti-physical |
| 15 | No traffic-light adjacency | CHANNELING | Remove |
| 16 | No cool grays | IDENTITY | Keep, merge into #6 |
| 17 | All h3 italic | CHANNELING | Remove as hard rule |
| 18 | No same-density stacking | CHANNELING | Remove as prohibition |
| 19 | Require research provenance | PIPELINE-ARTIFACT | Remove entirely |
| 20 | Require tension derivation | PIPELINE-ARTIFACT | Remove entirely |
| 21 | No viewport-height voids | PIPELINE-ARTIFACT | Move to PA/gates |
| 22 | No top-heavy visual interest | PIPELINE-ARTIFACT | Move to PA/gates |

### Counts
- **IDENTITY (keep):** 13 rules (1-7, 9-14)
- **CHANNELING (remove/soften):** 4 rules (15, 17, 18, plus channeling elements in 9-10)
- **PIPELINE-ARTIFACT (remove/relocate):** 5 rules (8, 19, 20, 21, 22)
- **Redundant (merge):** 2 rules (3 into 2, 8 into 1)

---

## 7. Structural Recommendation

### Current structure (2 files + README):
```
identity/
  prohibitions.md     (419 lines, 22 rules, compliance framing)
  soul-constraints.md (342 lines, 3 rules expanded, compliance framing)
  README.md           (138 lines, pipeline process routing)
```

### Recommended structure (1 file):
```
identity/
  world.md            (~150 lines, world-description framing)
```

**world.md** would describe KortAI's visual identity as a WORLD:

1. **The Character** (~30 lines): Sharp, warm, editorial, flat. What it IS, not what it ISN'T.
2. **The Geometry** (~20 lines): Angular precision. Border-radius 0, no shadows, no simulated depth.
3. **The Palette** (~20 lines): Warm earth tones. Cream, near-black, signature red. No cool grays, no pure extremes.
4. **The Typography** (~20 lines): Three voices. Serif for authority (display), sans for clarity (body), mono for truth (code).
5. **The Surfaces** (~20 lines): Flat, opaque, honest. Depth through structure, not simulation.
6. **The Rhythm** (~20 lines): Borders carry weight (4px = strong, 1px = subtle). Tables breathe horizontal. Content earns its space.
7. **The Refusals** (~20 lines): Brief list of what this world rejects and why, as personality traits not compliance rules.

The soul constraints (border-radius: 0, box-shadow: none) would be the OPENING of this document -- the first thing a builder reads -- but framed as world characteristics, not checkboxes.

Rules #19-22 would move to process/pipeline documentation.
Rules #15, #17, #18 would be dissolved -- a builder who understands the world doesn't need them.
The test file (soul-principles.spec.ts) remains unchanged -- programmatic verification is separate from identity description.

---

## 8. Key Finding

**The identity files contain genuine identity buried under pipeline-era enforcement scaffolding.**

The CORE identity is clear and strong:
- Sharp angular geometry (the defining visual trait)
- Flat honest surfaces (no simulated depth)
- Warm editorial palette (cream, near-black, red)
- Typography trinity (serif display, sans body, mono code)
- Semantic visual weight (every element carries meaning)

But this identity is expressed through COMPLIANCE LANGUAGE (NEVER, MUST, VIOLATION, INVALID) instead of WORLD LANGUAGE (this world IS, surfaces ARE, geometry MEANS). The compliance language was appropriate for the old pipeline where binary rules achieved 100% agent compliance. In the new feedback-loop model, the builder needs to INTERNALIZE the world, not CHECK a list.

The transition from rules to world-description doesn't change what's prohibited -- it changes how the builder understands WHY. A builder who knows "KortAI surfaces are flat because depth is structural, not simulated" will never add a box-shadow. A builder who only knows "NEVER use box-shadow" might not understand why, and might try to simulate the same effect through rgba tricks (which is exactly what happened -- see rule #4's evidence from the "Semi-Transparent Backgrounds Systemic Audit Gap").

**The compliance framing CAUSED the loopholes it then had to patch.**
