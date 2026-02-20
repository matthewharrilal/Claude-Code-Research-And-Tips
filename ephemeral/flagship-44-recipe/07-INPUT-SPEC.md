# 07 -- Builder Input Specification for Flagship 4/4

**Agent:** input-spec (Opus 4.6)
**Task:** #7
**Date:** 2026-02-19
**Sources:** Reports 02, 09, 10, 11, 21, 29 + PV2-FLAGSHIP-VARIANT.md Fat Core architecture

---

## EXECUTIVE SUMMARY

This document specifies EXACTLY what the Flagship 4/4 builder agent receives as input: which files, in what format, in what order, with what tone, at what total volume, and what it explicitly does NOT receive (and why). The spec is implementable -- someone reading only this document could assemble the builder's complete input set.

**The governing equation:**

```
Builder Input = Conventions Brief (~225 lines, PRIMARY)
              + Reference Files (~1,570 lines, CONSULTATIVE)
              + Content File (variable, THE MATERIAL)
              = ~1,795 lines of non-content input
```

**The governing principle:** SPECIFICITY > LENGTH > ABSTRACTION. Every line the builder reads must be either (a) a concrete value it will use in CSS, (b) a binary rule it can self-check, or (c) a creative principle framed as WHAT GOOD LOOKS LIKE. Zero lines of meta-commentary, zero lines of process justification, zero lines of research provenance.

**EPISTEMIC STATUS: THEORETICAL**

Flagship 4/4 DESIGNED has NEVER been achieved. No page at this quality level exists in the corpus. The closest references are:
- CD-006 (39/40) -- likely Middle or Ceiling tier, NOT Flagship. Uses multi-coherence but probably not at all 5 scales with full fractal echo.
- Middle experiment (PA-05 4/4) -- explicitly Middle tier. 12 mechanisms, 2-3 scales. Not Flagship depth.
- Flagship experiment (PA-05 1.5/4) -- attempted Flagship, catastrophically failed.

This input specification is therefore a HYPOTHESIS derived from the compositional intelligence stack (L1-L5), not an extraction from observed success at Flagship tier. Every prediction in this document (PA-05 scores, format effectiveness, reading order benefits) is extrapolated from lower-tier evidence. The specification MUST be validated experimentally.

---

## 1. WHAT FILES DOES THE BUILDER READ?

### 1.1 Complete File Manifest

| # | File | Path | Lines | Role | When Read | Format |
|---|------|------|-------|------|-----------|--------|
| 1 | **Content** | `[user-provided].md` | 500-10,000 | THE MATERIAL | Phase A (first thing, read completely) | Markdown |
| 2 | **Conventions Brief** | `_conventions-brief.md` | ~225 | PRIMARY GUIDANCE | Phase A-D (always in context, re-consulted at every checkpoint) | Hybrid: prose + YAML |
| 3 | **tokens.css** | `design-system/compositional-core/vocabulary/tokens.css` | 174 | CSS VALUES | Phase C (building -- exact token references for CSS) | CSS |
| 4 | **prohibitions.md** | `design-system/compositional-core/identity/prohibitions.md` | 353 | SOUL CONSTRAINTS | Phase A (loaded early, consulted when making identity choices) | Markdown |
| 5 | **mechanism-catalog.md** | `design-system/compositional-core/grammar/mechanism-catalog.md` | ~870 | VOCABULARY REFERENCE | Phase B (planning -- which mechanisms exist) + Phase C (deploying -- CSS patterns) | Markdown + CSS |
| 6 | **merged-components.css** | `design-system/compositional-core/components/merged-components.css` | ~500 | COMPONENT LIBRARY | Phase C (building -- class names and patterns to adopt) | CSS |

### 1.2 Total Line Counts

| Category | Lines | % of Total |
|----------|-------|------------|
| Content file | 500-10,000 | Variable (excluded from calculations below) |
| **Conventions brief** | **~225** | **12.5%** |
| Reference files (3-6) | ~1,570 | 87.5% |
| **Total non-content input** | **~1,795** | **100%** |

### 1.3 What Each File Contributes

**File 1: Content** -- The raw markdown the page will present. The builder reads this FIRST, completely, before anything else. This is the material that determines every compositional decision. Not a reference file -- THE subject.

**File 2: Conventions Brief (~225 lines)** -- The ONLY instruction document. Contains soul constraints, perception thresholds, compositional principles, multi-coherence binding rules, fractal echo requirements, self-check protocol, creative authority, anti-patterns, deliverables list, and process phases. This is the builder's PRIMARY guidance. Everything else is reference material to consult as needed.

**File 3: tokens.css (174 lines)** -- Exact CSS custom property values. The builder pulls hex codes, font stacks, spacing values, and border weights directly from this file into its CSS. Pure lookup reference. No prose, no explanation, just values.

**File 4: prohibitions.md (353 lines)** -- The 22 rules (8 absolute, 12 conditional, 2 meta) that define what the design system NEVER does. The builder consults this when making identity-level decisions. The 8 absolute prohibitions (border-radius: 0, box-shadow: none, etc.) are also summarized in the conventions brief's Section 1, so the full file serves as source-of-truth backup.

**File 5: mechanism-catalog.md (~870 lines)** -- The 18 mechanisms with CSS code examples, organized by 5 categories (Spatial, Hierarchy, Component, Depth, Structure/Nav). Contains impact profiles, application modes, transition grammar, restraint protocol, and scale definitions. The builder consults this when deciding WHICH mechanisms to deploy and HOW to implement them in CSS. This is the vocabulary from which the builder selects.

**File 6: merged-components.css (~500 lines)** -- The component library CSS classes. The builder adopts >= 10 component families from this file (Section 2 threshold). Pure CSS reference -- the builder reads class names and patterns, then applies them to its HTML.

---

## 2. WHAT FORMAT ARE INSTRUCTIONS IN?

### 2.1 The Conventions Brief: Hybrid Prose + YAML

The conventions brief uses a HYBRID format proven by the remediation experiment (PA-05 +1.0):

| Section | Format | Why This Format |
|---------|--------|-----------------|
| Soul constraints | Prose list (terse) | 8 rules that must be memorized, not parsed |
| Perception thresholds | **YAML block** | Machine-parseable, unambiguous, gate-runner compatible |
| Anti-scale model | Prose (4 lines) | Evaluative principle, not procedural rule |
| Multi-coherence binding | **YAML block + prose example** | 6 channels as data + 1 worked direction example |
| Fractal echo | Prose + blank table template | Pattern requirement + structured planning artifact |
| Memory protocol | Numbered prose steps | Sequential checkpoints during build |
| Creative authority | Prose (permissions) | Cannot be structured -- it's about judgment |
| Anti-patterns | Bulleted list | Binary: "do not do X" |
| Deliverables | Numbered list | Concrete file list |
| Process | Phase descriptions (4 phases) | Sequential build order |

### 2.2 Why NOT Pure Recipe

The recipe format (sequential steps with exact CSS values) was proven in the remediation (2.5/4). But it has a documented CEILING at 3/4:

- **Recipe compliance = mechanical execution.** The builder follows steps. It does not compose.
- **The "DO NOT deviate" ceiling.** Report 84 identified this as THE 3/4 limit sentence.
- **Convention format = creative authority.** The builder receives WHAT outcomes matter, then exercises judgment on HOW.
- **Evidence:** CD-006 (39/40, likely Middle/Ceiling tier -- NOT Flagship) was built with conventions, not a recipe. Middle experiment (4/4) had a brief + Opus planner. Both were convention-style. NOTE: No Flagship 4/4 page has ever been built. This format choice is a HYPOTHESIS based on the compositional intelligence stack, not observed evidence at Flagship tier.

### 2.3 Why NOT Pure YAML

YAML is excellent for verification (gate-runner) but poor for generation:

- **YAML specifies WHAT, not WHY.** `border_weight: [4, 3, 1]` tells the builder values but not when to use each.
- **Coherence is a judgment rule.** `direction: "all channels same"` -- YAML syntax doesn't make this binary.
- **Predicted PA-05 for pure YAML: 2.0-2.5/4** (Report 11). Consistently functional, never composed.

### 2.4 Why NOT Annotated Recipe

The annotated recipe (pattern-language intro + CSS steps + self-test) was Report 11's recommended format and scores well (~3.0-3.5/4 predicted). For Flagship 4/4 DESIGNED, the annotated recipe is a strong fallback but not the primary format because:

- It prescribes build order at CSS-property granularity (Phase 1: zone backgrounds, Phase 2: borders...). Fat Core's builder should organize by COMPOSITIONAL INTENT (semantic zones, then depth within zones, then refinement).
- The 180-line annotated recipe + reference files would create a dual-instruction problem (brief says one thing, recipe says another).
- For a single Opus agent that plans AND builds, conventions + self-checks outperform externally-sequenced recipes.

### 2.5 The Answer: Convention + YAML Data + Self-Check = "World Description" Format

The conventions brief describes the WORLD the builder enters (what the design system is, what quality looks like, what failures to avoid) rather than prescribing the steps to take. This is **80% world description, 20% constraint** (v1 change log).

The YAML blocks embed machine-parseable data WITHIN the world description. The self-check protocol creates binary verification moments WITHIN the creative process.

---

## 3. WHAT TONE?

### 3.1 Primary Tone: Creative Authority with Calibrated Expectations

The brief's tone operates on a spectrum from Section 1 (most constrained) to Section 7 (most free):

| Section | Tone | Example Language |
|---------|------|-----------------|
| 1 (Soul) | **ABSOLUTE COMMAND** | "border-radius: 0 -- ALWAYS. ZERO exceptions." |
| 2 (Thresholds) | **BINARY SPECIFICATION** | `background_delta: ">= 15 RGB"` |
| 3 (Anti-scale) | **PHILOSOPHICAL FRAME** | "Richness = semantic density x restraint x spatial confidence" |
| 4 (Multi-coherence) | **TECHNICAL INSTRUCTION + EXAMPLE** | "At every zone boundary, >= 3 of these 6 channels must shift... Example: deeper = denser = darker = heavier" |
| 5 (Fractal echo) | **CREATIVE CHALLENGE** | "Your pattern must appear at ALL 5 scales. BEFORE writing CSS, produce a fractal echo table." |
| 6 (Memory protocol) | **PROFESSIONAL DISCIPLINE** | "At every ZONE BOUNDARY: RECALL, CHECK, VERIFY, LOG." |
| 7 (Creative authority) | **EMPOWERMENT** | "Override ANY non-soul value with logged compositional reasoning. Soul values LOCKED. Everything else is SUGGESTION to improve upon." |
| 8 (Anti-patterns) | **WARNING FROM EXPERIENCE** | "AVOID THESE (all observed in the PA-05 1.5/4 failure)..." |
| 9-10 (Deliverables/Process) | **PROFESSIONAL EXPECTATION** | "Your build MUST produce..." / "Phase A: Read content..." |

### 3.2 Critical Tone Rules

1. **Never "VERIFY" or "FAIL IF" language in creative sections (4-7).** This is checklist language that triggers compliance mode. Use "check," "ensure," "aim for."
2. **Always "MUST" language in soul/threshold sections (1-2).** These are non-negotiable. Ambiguity here = violations.
3. **The Creative Authority clause (Section 7) is LOUDER than the constraints.** It must feel like permission, not a concession. "You may override" not "exceptions are sometimes allowed."
4. **Anti-patterns (Section 8) are framed as LESSONS, not commands.** "All observed in the 1.5/4 failure" gives the builder a concrete reference point, not an abstract prohibition.
5. **The conviction card (within Section 4) uses PERCEPTUAL language.** "Reader feels the transition without analyzing it." Not "5 CSS properties change simultaneously."

### 3.3 What the Tone is NOT

- NOT a checklist ("Verify X. Fail if Y. Must be Z.") -- triggers compliance, not composition.
- NOT a recipe ("Step 1: Write zone backgrounds. Step 2: Add borders.") -- prescribes order, constrains creativity.
- NOT research prose ("Studies show that multi-coherence..." ) -- wastes attention on justification.
- NOT a spec sheet (pure YAML/JSON data) -- provides values without compositional understanding.

---

## 4. WHAT ORDER?

### 4.1 File Reading Order (How the Orchestrator Delivers Input)

The builder receives all files at spawn time. There is no phased revelation (phased revelation requires an orchestrator that monitors builder state -- Fat Core's orchestrator is thin/mechanical). However, the conventions brief's INTERNAL structure guides the builder's attention order:

```
READING ORDER (Builder's natural flow):

1. Content file              -- Read FIRST. Completely. Before anything else.
                                Understand what this page is ABOUT.

2. Conventions brief         -- Read SECOND. The world you're entering.
   Sections 1-3 (Soul,      -- What you CANNOT do + what QUALITY means.
   Thresholds, Anti-scale)

3. Prohibitions.md           -- Read THIRD (or skip if Section 1 is sufficient).
                                Full soul constraints for edge cases.

4. Conventions brief         -- Continue.
   Sections 4-5 (Multi-     -- What COMPOSITIONAL means at this tier.
   coherence, Fractal echo)

5. Mechanism catalog         -- Read FOURTH. What vocabulary do you have?
                                Select mechanisms that serve YOUR content.

6. Conventions brief         -- Continue.
   Sections 6-10 (Memory,   -- How to MAINTAIN quality during long build.
   Creative authority,
   Anti-patterns, Process)

7. tokens.css                -- Consult DURING Phase C (building).
                                Pull exact values for CSS.

8. merged-components.css     -- Consult DURING Phase C (building).
                                Adopt component class names.
```

### 4.2 Why This Order

The order follows the **comprehension-then-vocabulary-then-execution** pattern observed in the highest-scoring builds:

1. **Content first** -- The builder must UNDERSTAND what it's composing before it learns the rules. Content-form resonance (L5, the theoretical 4/4 gap) requires the builder to have the content IN MIND while making every compositional decision. This is hypothesized as essential for Flagship quality based on the compositional intelligence stack -- L5 (intentionality) depends on deep content understanding.

2. **Constraints + principles before vocabulary** -- The builder knows WHAT QUALITY MEANS before it browses available mechanisms. This prevents the "mechanism shopping" pattern where the builder selects techniques that are cool but don't serve the content.

3. **Vocabulary before execution** -- The builder selects mechanisms (Phase B planning) before writing CSS (Phase C building). The mechanism catalog is consulted during planning, then re-consulted during building for CSS specifics.

4. **Reference files on-demand during execution** -- tokens.css and components.css are LOOKUP resources. The builder doesn't read them sequentially -- it consults them when writing specific CSS rules.

### 4.3 What the Builder Does NOT Read Sequentially

The mechanism catalog (870 lines) and merged-components.css (500 lines) are NOT meant to be read cover-to-cover. The builder:

- Scans the catalog's TABLE OF CONTENTS (mechanism names + categories) to identify relevant mechanisms
- Reads SPECIFIC mechanism sections for CSS patterns when deploying them
- Scans component CSS for CLASS NAMES that match its HTML structure
- Copies and adapts specific CSS blocks as needed

This is **reference behavior**, not **instruction following**. The distinction matters because reference material does not compete with instructions for attention in the same way (Report 29).

---

## 5. WHAT TOTAL LINE COUNT REACHES THE BUILDER?

### 5.1 Active vs Reference Lines

| Category | Lines | Attention Mode | Competes with Instructions? |
|----------|-------|---------------|---------------------------|
| Content file | 500-10,000 | DEEP READ (Phase A) | No -- this IS the subject |
| Conventions brief | ~225 | INSTRUCTION FOLLOWING | Yes -- PRIMARY attention target |
| tokens.css | 174 | LOOKUP (during CSS writing) | Minimal -- consulted, not followed |
| prohibitions.md | 353 | CONSTRAINT CHECK (early + edge cases) | Moderate -- soul rules compete |
| mechanism-catalog.md | ~870 | SELECTIVE READ (scan TOC, read relevant sections) | Low -- reference, not instruction |
| merged-components.css | ~500 | LOOKUP (during CSS writing) | Minimal -- consulted, not followed |
| **TOTAL** | **~2,120 + content** | | |

### 5.2 Effective Instruction Volume

The critical metric (from the inverse-quality-with-instruction-volume finding) is not total lines but INSTRUCTION lines that compete for attention during creative work:

| Metric | Value |
|--------|-------|
| **Lines the builder FOLLOWS** (conventions brief) | ~225 |
| **Lines the builder CHECKS** (prohibitions soul rules) | ~50 (of 353 -- only the 8 absolute) |
| **Lines the builder SELECTS FROM** (mechanism names/categories) | ~40 (catalog TOC) |
| **Effective instruction volume** | **~315 lines** |

This is within the ~300-line sweet spot identified by the inverse correlation (Report 09): Middle at 100 lines scored 4/4, Remediation at 300 lines scored 2.5/4, Flagship at 530 scored 1.5/4. At ~315 effective instruction lines, we're at the upper boundary of the productive range.

### 5.3 Comparison to Prior Experiments

| Experiment | Effective Instruction Lines | Total Builder Input | PA-05 |
|------------|---------------------------|---------------------|-------|
| Middle | ~100 (brief) | ~675 (with planner output) | 4/4 |
| Remediation | ~300 (recipe phases) | ~1,025 (full spec) | 2.5/4 |
| Flagship | ~530 (master prompt) | ~963 (to team, 75 to builder) | 1.5/4 |
| **THIS SPEC** | **~315 (conventions brief + soul checks)** | **~2,120 (with all references)** | **Target: 3.5-4/4** |

---

## 6. WHAT DOES THE BUILDER NOT READ? (And Why Not)

### 6.1 Excluded Files

| File | Lines | Why EXCLUDED |
|------|-------|-------------|
| **TC SKILL.md** (~1,932 lines) | 1,932 | Fat Core's builder IS the creative agent. It doesn't need the TC pipeline's methodology -- it EMBODIES it. TC's multi-axis questioning, tension derivation, and metaphor collapse are things Opus does natively. Routing TC to the builder would add 1,932 instruction lines, violating the ~300-line sweet spot by 6x. |
| **PA SKILL.md** (~847 lines) | 847 | The builder doesn't audit itself using the PA protocol. Separate PA auditors handle this. The self-check protocol (Section 6, ~30 lines) provides the builder's own verification -- NOT the full 48-question PA instrument. |
| **Case studies** (13 files, ~4,579 lines) | 4,579 | Case studies teach PROCESS (how tension analysis works). Fat Core's builder doesn't learn process -- it exercises compositional judgment directly. Case studies also carry extreme template gravity risk: the builder would pattern-match to existing solutions rather than composing for its content. |
| **RESEARCH-SYNTHESIS.md** (383 lines) | 383 | Research findings are already encoded in the conventions brief (as thresholds, principles, anti-patterns) and mechanism catalog (as mechanism definitions). Adding the synthesis would be redundant and add 383 lines of prose competing with the brief's 225 lines of instruction. |
| **R1-R5 research files** (~3,721 lines) | 3,721 | Pure research artifacts. Already distilled through the compositional core into the mechanism catalog and conventions. The builder builds from distilled knowledge, not raw research. |
| **compositional-rules.md** (527 lines) | 527 | The 11 grammar rules (nesting, rhythm, zones, density) are PARTIALLY encoded in the conventions brief (anti-patterns, thresholds) and mechanism catalog (restraint protocol). Full rules would add 527 lines of additional constraints. Opus compensates for the specific ratios (inside:between = 1:3, max 3 consecutive dense) from training. |
| **border-system.md** (658 lines) | 658 | The 3-category border encoding is summarized in the mechanism catalog's border-weight gradient section. Full file would add 658 lines of reference for a system the builder encounters through tokens.css (border weight values) and the conviction card (5-channel boundary example). |
| **component-inventory.md** (879 lines) | 879 | Confidence levels for each component. The builder adopts component CLASSES from merged-components.css directly -- it doesn't need the inventory's confidence annotations. |
| **PV2-FLAGSHIP-VARIANT.md** | ~2,300 | Architecture document. Describes the pipeline, not what the builder should do. The builder exists INSIDE the pipeline -- it doesn't need to know the pipeline's design. |
| **operational-recipe.md** (if it existed) | ~650 | Fat Core eliminates the operational recipe. The conventions brief REPLACES it. Adding both would create dual instruction sets that conflict. |

### 6.2 The Exclusion Principle

**The builder reads ONLY what it will USE in the next 2 hours of work.**

- It will USE token values (tokens.css) -- included.
- It will USE component classes (merged-components.css) -- included.
- It will USE mechanism CSS patterns (mechanism-catalog.md) -- included.
- It will FOLLOW compositional principles (conventions brief) -- included.
- It will CHECK soul constraints (prohibitions.md) -- included.
- It will NOT LEARN research methodology -- excluded.
- It will NOT STUDY process documentation -- excluded.
- It will NOT REFERENCE architecture diagrams -- excluded.
- It will NOT READ case studies for inspiration -- excluded (too much template gravity).

### 6.3 What About the Conviction Card and Exemplar Excerpt?

The conviction card (Report 10, Option E -- ~20 lines showing a multi-channel boundary shift) is EMBEDDED IN the conventions brief Section 4, not delivered as a separate file. The builder sees it as part of the multi-coherence explanation, not as a separate reference. This prevents template-gravity risk while providing concrete calibration.

**CRITICAL CAVEAT:** The conviction card's source (CD-006) is likely Middle or Ceiling tier, NOT Flagship. No Flagship 4/4 page exists yet. The conviction card demonstrates multi-coherence at the CHANNEL level, which transfers across tiers. But the INTENSITY (5 scales, fractal echo at all levels, content-form resonance) required for Flagship 4/4 has never been observed. The conviction card teaches the PATTERN of multi-channel shifting -- the builder must exceed it in depth and compositional ambition for Flagship.

No full exemplar HTML is routed to the builder. One 15-line boundary excerpt provides pattern calibration. Full exemplar CSS would overwhelm the builder's creative space with someone else's compositional decisions at a lower tier.

---

## 7. WHAT SELF-CHECK PROTOCOL?

### 7.1 The Three-Layer Self-Check Architecture

The builder's self-check operates at three levels, each triggered at different build phases:

#### Layer 1: Phase Checkpoints (DURING build, at each CSS phase)

These are embedded in the conventions brief Section 10 (Process):

```
After HTML skeleton complete:
  CHECK: >= 3 ARIA landmarks? (header, main, footer minimum)
  CHECK: Skip link present?
  CHECK: >= 10 component family classes from merged-components.css?

After zone backgrounds applied:
  CHECK: List hex values of all zone backgrounds.
  CHECK: Adjacent zones: compute max RGB channel delta. All >= 15?
  If any < 15: INCREASE delta before continuing.

After borders and dividers applied:
  CHECK: >= 1 structural border-left (3px+) somewhere on the page?
  CHECK: >= 2 distinct border-weight values used?

After typography cascade applied:
  CHECK: Largest heading vs smallest meta: ratio >= 3:1?
  CHECK: Adjacent zone font-size delta >= 2px?
```

These are BINARY checks the builder runs against its own CSS. They take 2-3 minutes each. They prevent the flagship failure modes (imperceptible backgrounds, zero borders, uniform typography) at the point of introduction.

#### Layer 2: Compositional Self-Check (AFTER first draft, BEFORE final output)

These are embedded in the conventions brief Section 6 (Memory Protocol) and derived from Report 10 Option C:

```
SCALE CHECK:
Q1: Squint at full page. Do you see rhythm? (Y/N)
Q2: Look at one section. Same rhythm inside it? (Y/N)
Q3: Look at one component. Does it echo page-level pattern? (Y/N)
If any N: add mechanism deployment at that scale.

CHANNEL CHECK:
Q4: At each zone boundary, count CSS properties that change.
    List: boundary X: [bg, font-size, spacing] = 3 channels.
    If any boundary < 3: add channel shifts.
Q5: Do all shifts at each boundary point the same direction? (Y/N)
    If N: identify contradictory channel and align.

RESTRAINT CHECK:
Q6: Any viewport-height section with >4 distinct mechanisms? (Y/N)
    If Y: redistribute to sparser sections.
Q7: Does every third of the page have >= 2 mechanisms? (Y/N)
    If N: add deployment to sparse section.

SPATIAL CONFIDENCE:
Q8: Remove all color mentally. With only spacing and borders,
    does the page still feel structured? (Y/N)
    If N: spatial skeleton is incomplete. Fix before adding richness.
```

These 8 questions are the builder's FINAL self-evaluation. Q4 is deliberately QUANTITATIVE (count channels, not judge quality) to resist performative self-assessment. Q8 is the most important -- it tests spatial confidence, the single dimension that separates COMPOSED from DESIGNED.

#### Layer 3: Self-Generated Planning Artifacts (BEFORE build)

The builder must produce two structured artifacts in its build log BEFORE writing any CSS:

**Transition Table:**
```
| Boundary | bg hex | font-size | font-weight | letter-spacing | border | padding | channels |
|----------|--------|-----------|-------------|----------------|--------|---------|----------|
| ->Z1     | ...    | ...       | ...         | ...            | ...    | ...     | n/a      |
| Z1->Z2   | ...    | ...       | ...         | ...            | ...    | ...     | >= 3?    |
| Z2->Z3   | ...    | ...       | ...         | ...            | ...    | ...     | >= 3?    |
```

**Fractal Echo Table:**
```
| Scale       | Pattern Expression | Primary CSS | Secondary CSS |
|-------------|-------------------|-------------|---------------|
| Navigation  | ...               | ...         | ...           |
| Page        | ...               | ...         | ...           |
| Section     | ...               | ...         | ...           |
| Component   | ...               | ...         | ...           |
| Character   | ...               | ...         | ...           |
```

These tables serve as the builder's OWN navigation tools during the 60-120 minute build. When writing CSS for zone boundary Z2->Z3, the builder consults ITS OWN transition table to verify >= 3 channels shift. This is the telescope/microscope pattern internalized: the builder is both the composer and the checker.

### 7.2 When Self-Checks Occur (Timeline)

```
Phase A: Content understanding (10-20 min)
  -- No self-checks. Pure comprehension.

Phase B: Planning (10-20 min)
  -- Produce transition table (Layer 3)
  -- Produce fractal echo table (Layer 3)

Phase C: Building (60-120 min)
  -- After HTML skeleton: Layer 1 checkpoint (landmarks, components)
  -- After zone backgrounds: Layer 1 checkpoint (RGB deltas)
  -- After borders: Layer 1 checkpoint (border presence + variety)
  -- After typography: Layer 1 checkpoint (type scale ratio)
  -- At MIDPOINT (~Section 6 of 12): Memory protocol pause
     PAUSE. Render the page. Scroll top to bottom.
     Is the density arc holding?
     Is the metaphor still structural, not decorative?
     What is the weakest section? Strengthen it.
  -- At every 5th mechanism deployment: Category count check

Phase D: Self-verification (10-15 min)
  -- Complete Layer 2 self-check (8 questions)
  -- Produce cascade value table
  -- Final scroll + assessment in build log
```

---

## 8. WHAT REFERENCE MATERIAL IS AVAILABLE BUT NOT MANDATORY?

### 8.1 Available-On-Request Files

These files are accessible to the builder but NOT loaded into its initial context. The builder can request them if it encounters a specific need:

| File | Lines | Available For | When Builder Might Need It |
|------|-------|--------------|---------------------------|
| `semantic-rules.md` | 529 | Callout type decisions | Builder unsure whether to use INFO vs TIP callout |
| `usage-criteria.md` | 337 | Component selection | Builder unsure when to use table vs grid vs list |
| `responsive-strategy.md` | 271 | Breakpoint decisions | Builder needs 768px collapse strategy specifics |
| `RESEARCH-SYNTHESIS.md` | 383 | Deep content understanding | Content is about a research topic and the builder needs domain context |

### 8.2 How "Available But Not Mandatory" Works in Practice

In Fat Core, the builder agent has READ access to the entire `design-system/compositional-core/` directory. The orchestrator does not restrict file access. However, the conventions brief does not INSTRUCT the builder to read these files, and the builder's natural behavior will be to work from the 6 mandated files.

A sophisticated builder (Opus) may spontaneously consult additional files if it encounters an ambiguity. This is DESIRABLE -- it means the builder is exercising judgment. A compliant builder (Sonnet) will not seek additional files unless instructed. This is why the conventions brief exists: it provides enough guidance that additional files are rarely needed, but doesn't prevent access.

### 8.3 The Anti-Mandatory Principle

Making more files MANDATORY increases effective instruction volume. Every mandatory file adds attention competition with the conventions brief. The current spec keeps 6 files mandatory and 4 available -- this ratio is intentional. Adding even one more mandatory file (e.g., semantic-rules.md at 529 lines) would push effective instruction volume past the ~300-line sweet spot.

---

## 9. THE CONVENTIONS BRIEF -- SECTION-BY-SECTION SPECIFICATION

This section specifies the EXACT content of each section of the conventions brief. This is what Task #10 (Brief Drafter) will use as its blueprint.

### Section 1: IDENTITY (SOUL) -- ~20 lines

**Content:**
- Opening frame: "You are building a page for the KortAI design system."
- 7 absolute constraints (border-radius: 0, box-shadow: none, no #000/#FFF, no gradients, container 940-960px, font trinity, 4px spacing base)
- Emphasis that these are ZERO EXCEPTIONS, NEVER override

**Format:** Terse prose list. Each rule on one line. No justification.

**Approximate text:**
```
border-radius: 0 -- ALWAYS sharp edges, ZERO exceptions
box-shadow: none -- ALWAYS flat surfaces
No pure #000000 or pure #FFFFFF -- use palette values from tokens.css
No gradient backgrounds -- solid colors only
Container: max-width 960px, centered -- NON-NEGOTIABLE (the primary historical failure)
Fonts: Instrument Serif (display headings), Inter (body), JetBrains Mono (code)
Spacing: 4px base unit, only multiples of 4
```

---

### Section 2: PERCEPTION THRESHOLDS -- ~20 lines

**Content:**
- YAML block with every binary threshold the gate runner will check
- Includes both floor thresholds (what must be >= N) and ceiling thresholds (what must be <= N)
- Flagship-calibrated values (higher than Middle)

**Format:** YAML data block. Machine-parseable, builder-readable.

**Approximate YAML:**
```yaml
thresholds:
  background_delta_rgb: ">= 15 between adjacent zones"
  font_size_delta: ">= 2px between adjacent typographic zones"
  letter_spacing_minimum: ">= 0.02em (nothing sub-perceptual)"
  stacked_gap_maximum: "<= 108px total at any section boundary"
  multi_coherence: ">= 3 CSS channels shift at every zone boundary"
  border_presence: ">= 1 structural border-left (3px+) per page, alternating OK"
  component_adoption: ">= 10 component families from merged-components.css"
  mechanism_categories: ">= 4 of 5 categories (Spatial, Hierarchy, Component, Depth, Structure)"
  zone_count: "2-5 semantic zones"
  grid_layouts: ">= 2 distinct grid/layout patterns on the page"
  aria_landmarks: ">= 3 (header, main, footer minimum)"
  skip_link: "present and functional"
```

---

### Section 3: ANTI-SCALE MODEL -- ~5 lines

**Content:**
- The governing formula: Richness = semantic density x restraint x spatial confidence
- One-line definition of each term
- This is the EVALUATIVE FRAME the builder carries through every decision

**Format:** Terse prose. Not YAML -- this is a principle, not a threshold.

---

### Section 4: MULTI-COHERENCE BINDING -- ~25 lines

**Content:**
- The 6 CSS channels named and defined (1 line each)
- The binding rule: >= 3 shift at every zone boundary, SAME semantic direction
- 1 worked example: "deeper = denser = darker = heavier" with 5-channel CSS values (the conviction card)
- Explicit anti-pattern: "NOT: bg darkens but spacing increases (contradictory direction)"
- Transfer instruction: "Your page has different content. The PATTERN transfers. The VALUES do not."

**Format:** Prose + embedded CSS example. The conviction card is the centerpiece.

---

### Section 5: FRACTAL ECHO -- ~20 lines

**Content:**
- The 5 scales named (Navigation, Page, Section, Component, Character)
- Requirement: pattern must express at ALL 5 scales
- Mandate: produce fractal echo table BEFORE writing CSS
- Blank table template (5 rows x 4 columns)
- Consistency rule: pattern direction SAME at all rows

**Format:** Prose + blank table template. The template triggers completion bias (Report 21).

---

### Section 6: COMPOSITIONAL MEMORY PROTOCOL -- ~30 lines

**Content:**
- Zone boundary protocol: RECALL direction, CHECK >= 3 channels, VERIFY same direction, LOG in CSS comment
- Midpoint pause protocol: render, scroll, assess density arc + metaphor structural integrity + weakest section
- Mechanism count protocol: every 5th mechanism, count by category, deploy to empty categories, check saturation

**Format:** Numbered steps. Professional discipline language.

---

### Section 7: CREATIVE AUTHORITY -- ~20 lines

**Content:**
- Permission to override ANY non-soul value with logged compositional reasoning
- Soul values LOCKED (restated)
- 4 conditions: no soul violations, no threshold violations, log every override, maintain coherence
- Emphasis: "Everything else is a SUGGESTION that you can improve upon."

**Format:** Prose. Permission-granting language. This must feel like empowerment, not a footnote.

---

### Section 8: FLAGSHIP ANTI-PATTERNS -- ~15 lines

**Content:**
- 6 specific anti-patterns, all from the PA-05 1.5/4 failure:
  1. Sub-perceptual CSS (letter-spacing < 0.02em)
  2. Uniform typography (all 16px/400)
  3. Imperceptible backgrounds (1-8 RGB delta)
  4. Whitespace voids (> 108px stacked gap)
  5. Zero borders (no structural border-left)
  6. Announced-not-structural metaphor (decoration without structure)
- Framing: "All observed in a real failure. These are not hypothetical."

**Format:** Bulleted list with specific values. Warning tone from experience.

---

### Section 9: REQUIRED DELIVERABLES -- ~15 lines

**Content:**
- 3 required output files:
  1. `output.html` (the page)
  2. `_build-log.md` (transition table, fractal echo table, override log, midpoint observation, final self-assessment)
  3. `_cascade-value-table.md` (computed CSS values at every section boundary: background, font-size, font-weight, letter-spacing, border-left, padding, margin)

**Format:** Numbered list with file names and content descriptions.

---

### Section 10: PROCESS -- ~15 lines

**Content:**
- Phase A: Read content. Identify zones, tensions, metaphor (if any). (~10-20 min)
- Phase B: Plan. Write transition table + fractal echo table in build log. (~10-20 min)
- Phase C: Build HTML+CSS. Consult reference files as needed. (~60-120 min)
  - Sub-checkpoints: after skeleton, after backgrounds, after borders, after typography
- Phase D: Self-verify. Produce cascade value table. Complete 8-question self-check. Scroll + assess. (~10-15 min)

**Format:** Phase descriptions with approximate timings. Not recipe steps -- phase GOALS.

---

## 10. IMPLEMENTATION NOTES FOR THE ORCHESTRATOR

### 10.1 How the Orchestrator Prepares the Builder's Input

The thin orchestrator (~250 lines) does the following before spawning the builder:

1. Receives `/build-page path/to/content.md` from user
2. Reads `content.md` to verify it exists
3. Assembles builder prompt with:
   - System-level instruction: "You are a compositional page builder for the KortAI design system."
   - Content file path
   - Conventions brief (embedded or as file path)
   - Reference file paths (tokens.css, prohibitions.md, mechanism-catalog.md, merged-components.css)
4. Spawns ONE Opus agent with this prompt
5. Monitors for Phase C completion (builder produces `output.html`)
6. Runs 3 phase-locked gates (G1 after skeleton, G2 after CSS, G3 comprehensive)
7. If gates pass: proceeds to PA
8. If gates fail: routes gate results + fix suggestions back to SAME builder agent

### 10.2 What the Builder's Spawn Prompt Looks Like (Approximate)

```
You are building a page for the KortAI design system.

Read the content file at: [path/to/content.md]
Read the conventions brief at: [path/to/_conventions-brief.md]

Reference files (consult as needed during build):
- design-system/compositional-core/vocabulary/tokens.css
- design-system/compositional-core/identity/prohibitions.md
- design-system/compositional-core/grammar/mechanism-catalog.md
- design-system/compositional-core/components/merged-components.css

Follow the conventions brief. It contains your constraints, principles,
self-check protocol, and process phases.

Write output.html, _build-log.md, and _cascade-value-table.md.
```

This is ~15 lines of orchestrator prompt + the conventions brief (~225 lines) + 6 file reads. Total prompt overhead: ~240 lines. The reference files add ~1,570 lines of consultative material. Content adds variable lines.

---

## 11. DECISION RATIONALE SUMMARY

| Decision | Chosen | Alternatives Rejected | Why |
|----------|--------|----------------------|-----|
| Instruction format | Convention (hybrid) | Recipe, YAML, exemplar | Convention = creative authority. Recipe ceiling = 3/4. YAML = 2.0-2.5/4 predicted. Exemplar = template gravity. |
| Instruction volume | ~225 lines | 100 (Middle), 530 (Flagship), 650 (recipe) | ~225 is within the productive range. 100 insufficient for Flagship complexity. 530+ triggers inverse correlation. |
| Reference volume | ~1,570 lines | 0 (ultra-minimal), 2,645 (full), 1,574 (trimmed Report 10) | Full reference provides vocabulary without competing with instructions. Trimmed to exclude non-CSS reference material. |
| Self-check design | 3-layer (checkpoints + 8 questions + planning tables) | None, 48-question PA, programmatic only | Checkpoints catch errors at introduction. 8 questions catch composition gaps. Planning tables prevent drift. Full PA is for separate auditors. |
| File exclusions | TC skill, PA skill, case studies, research | Include everything | Each excluded file adds 300-4,500 instruction lines. Template gravity risk from case studies. Research already distilled. |
| Tone | Creative authority with calibrated expectations | Pure constraint, pure freedom, pure recipe | Constraint = flat. Freedom = soul violations. Recipe = 3/4 ceiling. Calibrated authority = theoretical best for compositional emergence. |
| Reading order | Comprehension-vocabulary-execution | All-at-once, phased revelation | Matches highest-scoring build patterns (Middle 4/4, CD-006 Middle/Ceiling). Phased revelation requires sophisticated orchestrator (rejected for thin orchestrator). All-at-once causes skimming. NOTE: This order is UNTESTED at Flagship tier. |
| Conviction card | Embedded in Section 4 | Separate file, omitted entirely | Embedded = part of the compositional explanation. Separate file = template gravity. Omitted = no calibration. |

---

## 12. WHAT SUCCESS LOOKS LIKE

If this input specification is implemented correctly:

1. The builder reads ~225 lines of PRIMARY guidance (conventions brief)
2. The builder has ~1,570 lines of REFERENCE material available (tokens, prohibitions, mechanisms, components)
3. The builder produces self-generated planning artifacts (transition table, fractal echo table) BEFORE writing CSS
4. The builder self-checks at 4 phase checkpoints + 1 midpoint pause + 8 compositional questions
5. The builder exercises CREATIVE AUTHORITY to compose original solutions, not execute a recipe
6. The builder's effective instruction volume (~315 lines) stays within the productive range
7. The builder produces 3 deliverable files (output.html, _build-log.md, _cascade-value-table.md)

**Predicted PA-05: 3.5-4.0/4 with Opus builder. 2.5-3.0/4 with Sonnet builder.**

The gap between 3.5 and 4.0 depends on content-form resonance (L5) -- whether the content SUPPORTS Flagship-level compositional treatment. This is a content selection problem (Task #9), not an input specification problem.

---

**END OF INPUT SPECIFICATION**

**Document statistics:**
- Sections: 12
- Files specified: 6 mandatory, 4 available
- Total builder input: ~2,120 lines (225 primary + 1,570 reference + content)
- Effective instruction volume: ~315 lines
- Self-check moments: 4 checkpoints + 1 midpoint pause + 8 final questions + 2 planning artifacts
- Excluded files: 10 categories, ~14,000+ lines excluded with rationale for each
- Conventions brief: 10 sections, ~225 lines, hybrid prose+YAML format
