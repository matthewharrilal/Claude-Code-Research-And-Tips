# 11 -- Format Analysis: Recipe vs Checklist vs Conventions Brief

**Agent:** format-analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #29 -- META-AUDIT: Recipe vs checklist format analysis
**Sources:** 17-RECIPE-CEILING.md, 06-COMP-INTEL-CONDITIONS.md, 16-contrarian.md, 10-CONVENTIONS-BRIEF-DRAFT.md, 14-TELESCOPE-MICROSCOPE.md, ephemeral/flagship-retrospective/05-metacognitive-process.md

---

## PART 1: CONCRETE DEFINITIONS

### 1A. The Three Formats Defined

These three instruction formats are not points on a spectrum -- they are fundamentally different COGNITIVE FRAMES that determine what mode the builder inhabits.

**RECIPE** (tells the builder WHAT TO DO):
- **Verb signature:** Imperative action verbs -- "deploy," "read," "select," "assess," "write," "apply," "build," "render," "scroll"
- **Structure:** Sequenced phases with explicit ordering (Phase 1, Phase 2...)
- **Content:** Specific CSS values, concrete techniques, worked examples, before/after patterns
- **Builder mode induced:** PLANNING-THEN-EXECUTING. The builder reads the recipe as a plan and follows it. Creative micro-decisions happen within the recipe's structure.
- **Quality ceiling:** 3.0-4.0/4 (Middle hit 4/4 with a 100-line recipe; longer recipes degrade toward 3.0)
- **Characteristic sentence:** "Read the mechanism catalog. Select an axis pattern based on content structure. For each section, choose 1-2 mechanisms that serve the content."

**CHECKLIST** (tells the builder WHAT NOT TO DO):
- **Verb signature:** Constraint/verification verbs -- "verify," "ensure," "fail if," "must be," "must not," "do not," "check that," "confirm"
- **Structure:** Unordered rules, binary pass/fail criteria, threshold values
- **Content:** Prohibitions, guardrails, minimum/maximum values, compliance tests
- **Builder mode induced:** COMPLYING. The builder reads the checklist as a set of constraints and produces the minimum CSS that satisfies all of them simultaneously.
- **Quality ceiling:** 1.5-2.5/4 (Flagship hit 1.5; Remediation -- which was partly checklist -- hit 2.5)
- **Characteristic sentence:** "Verify that adjacent zone backgrounds differ by >= 15 RGB points. FAIL IF any zone boundary has fewer than 3 CSS channel shifts."

**CONVENTIONS BRIEF** (tells the builder WHAT WORLD IT INHABITS):
- **Verb signature:** Declarative/world-building verbs -- "is," "are," "defines," "creates," "produces," "emerges from," "means," "expresses"
- **Structure:** Descriptive sections organized by domain (identity, thresholds, grammar, etc.)
- **Content:** Principles, semantic definitions, domain descriptions, world-building, the design system's physics
- **Builder mode induced:** COMPOSING. The builder internalizes the world's rules and composes freely within them. Every CSS decision is made against the internalized world model.
- **Quality ceiling:** Agent-native (3.5-4.0/4 for Opus). CD-006 received essentially a conventions brief (soul constraints + design system description + content) and produced 39/40.
- **Characteristic sentence:** "KortAI pages are warm, sharp, flat, and editorial. Multi-coherence produces a reader experience where zone transitions feel unified rather than random."

### 1B. Why the Distinction Matters (Evidence)

From 05-metacognitive-process.md (flagship retrospective): "A builder receiving a recipe will produce output that FOLLOWS the recipe -- varied borders, varied spacing, mechanisms deployed per category. A builder receiving a checklist will produce the MINIMUM OUTPUT that passes the checklist -- uniform spacing (any value under 96px works), uniform typography (any font from the trinity works), zero borders (no rule REQUIRES borders)."

From 17-RECIPE-CEILING.md: The recipe ceiling analysis identifies three ceilings:
- Specification recipe (CSS values prescribed): 2.5/4
- Procedural recipe (steps with decision points): 3.0-3.5/4
- Dispositional recipe / conventions brief (creative mode established): unknown, estimated 3.5-4.0/4

From 06-COMP-INTEL-CONDITIONS.md: Anti-Condition D3 (Recipe as Cage): "The recipe is SEQUENTIAL BY CHANNEL (Phase 3 = backgrounds, Phase 4 = borders). Multi-coherence requires SIMULTANEOUS BY BOUNDARY (all channels at each boundary). These are incompatible organizational principles."

The format is not a cosmetic choice. It determines the builder's cognitive mode, which determines the quality ceiling.

---

## PART 2: SCORING THE CONVENTIONS BRIEF DRAFT (Report 10)

### 2A. Verb Inventory

I performed a comprehensive verb count across all 254 lines of the brief draft. Results categorized by verb type:

**IMPERATIVE VERBS (recipe-like -- tells builder what to DO):**
1. "Read this brief once, fully" (line 7)
2. "Match the transition type to the boundary meaning" (line 53)
3. "Define your direction before building" (line 76)
4. "Imagine a zone boundary where..." (line 86)
5. "Make every boundary do this" (line 86)
6. "produce a Fractal Echo Table" (line 100)
7. "align them or acknowledge the break" (line 112)
8. "Name the coherence direction" (line 123)
9. "Count the channels shifting" (line 124)
10. "add shifts before proceeding" (line 124)
11. "Verify all shifts point the same direction" (line 125)
12. "fix it now" (line 125)
13. "Render the page. Scroll top to bottom" (line 128)
14. "Write 3 sentences in your build log" (line 129)
15. "Strengthen the weakest section" (line 130)
16. "Count mechanisms by category" (line 133)
17. "Deploy one before continuing" (line 134)
18. "Evaluate whether the last addition was necessary" (line 135)
19. "Lean back from the screen. Squint." (line 145)
20. "Increase them" (line 147)
21. "Fill it with content or reduce spacing" (line 151)
22. "Move or add a designed moment" (line 155)
23. "add channel shifts" (line 159)
24. "Strengthen borders and spacing" (line 163)
25. "Override any non-soul value" (line 173)
26. "Invent new component patterns" (line 174)
27. "Choose your own zone count" (line 175)
28. "Reject any mechanism" (line 176)
29. "Deploy mechanisms your own way" (line 177)
30. "Trust your compositional instinct" (line 181)
31. "Deploy mechanisms from at least 4 of 5" (line 189)
32. "Use at least 10 component families" (line 198)
33. "build it into the HTML skeleton" (line 200)
34. "write this in your build log" (line 208)
35. "Read the content markdown" (line 233)
36. "Identify the natural zones" (line 233)
37. "Identify tensions" (line 233)
38. "name it" (line 233)
39. "Write your conviction statement" (line 235)
40. "Consult mechanism-catalog.md" (line 235)
41. "Plan your zone backgrounds" (line 235)
42. "Write HTML first" (line 237)
43. "verify against your plan" (line 237)
44. "check landmarks, skip link" (line 240)
45. "check >= 15 RGB delta" (line 241)
46. "check border-left presence" (line 242)
47. "check >= 2px font-size delta" (line 243)
48. "Render the page" (line 245)
49. "Scroll from top to bottom" (line 245)
50. "Answer the 5 self-check questions" (line 245)
51. "Produce your cascade value table" (line 245)
52. "Fix anything that fails" (line 245)

**Total imperative verbs: 52**

**CONSTRAINT VERBS (checklist-like -- tells builder what NOT to do or MUST verify):**
1. "cannot be overridden, negotiated, or reinterpreted" (line 13)
2. "is never used for body text" (line 23)
3. "is never used for main headings" (line 23)
4. "non-negotiable" (line 25)
5. "No single margin or padding value exceeds 96px" (line 27)
6. "must clear these floors" (line 33)
7. "Never stack two BREATHING transitions adjacent" (line 61)
8. "Never use more than three SMOOTH transitions in sequence" (line 61)
9. "must shift simultaneously" (line 67)
10. "must point the same semantic direction" (line 76)
11. "must be consistent across all 5 rows" (line 112)
12. "Do not proceed to final output until all five are answered" (line 143)
13. "must meet these minimums" (line 187)
14. "must function at 768px viewport width" (line 202)

**Total constraint verbs: 14**

**DECLARATIVE/WORLD-BUILDING VERBS (conventions-like -- describes the world):**
1. "You are building a single HTML page" (line 3)
2. "You are both the telescope and the microscope" (line 3)
3. "The compositional intelligence lives in you" (line 3)
4. "This brief describes the world you are building inside" (line 5)
5. "KortAI pages are warm, sharp, flat, and editorial" (line 13)
6. "Five constraints define the identity" (line 13)
7. "They are the physics of this world" (line 13)
8. "Every edge is sharp. Decisive, not friendly." (line 16)
9. "Depth comes from spacing and borders, not illusion" (line 17)
10. "Typography is a trinity" (line 23)
11. "These are the minimum deltas for a human to perceive a difference" (line 33)
12. "Every zone boundary has a character" (line 53)
13. "A quiet modulation. The content shifts topic but not mode." (line 55)
14. "A deliberate pause between territories" (line 57)
15. "A full rest. The page exhales." (line 59)
16. "The reader crosses without noticing" (line 55)
17. "The reader pauses, reorients, continues" (line 57)
18. "The reader arrives at a new region" (line 59)
19. "The reader feels 'we are going deeper'" (line 86)
20. "This is not decoration" (line 114)
21. "This is what makes a page feel composed rather than assembled" (line 114)
22. "Long builds drift" (line 120)
23. "You are the composer" (line 169)
24. "The soul constraints are your instrument's range" (line 169)
25. "they define what notes exist, not what melodies you play" (line 169)
26. "Richness is semantic density multiplied by restraint multiplied by spatial confidence" (line 181)
27. "More is not better. Meaning is better." (line 181)
28. "This is not bureaucracy. It is the difference between building with intention and building by accumulation." (line 227)

**Total declarative/world-building verbs: 28**

### 2B. Instruction Type Count

**Action instructions** (positive -- tells what TO DO): 52
**Prohibition instructions** (negative -- tells what NOT TO DO): 14
**World descriptions** (neutral -- describes how the world works): 28

**Ratio: 52 action : 14 prohibition : 28 world-building**

### 2C. CSS Specificity Count

**Specific CSS examples (concrete values/properties):**
1. `border-radius: 0` (line 16)
2. `box-shadow: none` (line 17)
3. `#1A1A1A`, `#FEF9F5` (line 19)
4. `opacity: 1` (line 20)
5. YAML thresholds block: 8 concrete values (lines 36-44)
6. SMOOTH CSS: "15-25 RGB, 1px horizontal rule" (line 55)
7. BRIDGE CSS: "25+ RGB, 48-64px band, weight or size shifts" (line 57)
8. BREATHING CSS: "3-4px border, 64-80px spacing" (line 59)
9. Direction definitions: "darker bg + tighter spacing + heavier borders" (lines 79-81)
10. Multi-coherence example: "#FEF9F5 to #F0EBE3, 18px to 16px, 64px to 48px, 3px border, 0.04em to 0.02em" (line 86)
11. Spacing scale: "8, 16, 24, 32, 48, 64, 80, 96" (line 27)
12. Container width: "940-960px" (line 25)
13. CSS range: "700-1200 lines" (line 196)
14. Color contrast: "4.5:1, 3:1" (line 200)
15. Build CSS sequence: "reset + soul + base typography -> zone backgrounds -> structural borders..." (line 237)

**Total: 15 specific CSS examples/value sets**

**Abstract descriptions (no concrete values):**
1. "express density through internal spacing" (line 25)
2. Entire fractal echo table (template without values) (lines 100-110)
3. "designed moment" definition (line 153 -- vague: "3+ mechanisms at high intensity")
4. "spatial skeleton communicates structure" (line 161 -- no measurable criterion)
5. Five mechanism categories (lines 189-194 -- named but no CSS)

**Total: 5 abstract descriptions**

**Ratio: 15 concrete : 5 abstract = 3:1 in favor of specificity**

### 2D. Format Scores

**RECIPE SCALE (1=pure checklist, 5=pure recipe):**

Score: **3.5 / 5**

Justification: The brief has a strong recipe streak. 52 imperative verbs vs 14 constraint verbs is a 3.7:1 action-to-prohibition ratio. The PROCESS section (Phase A-D) is explicitly sequential. The compositional memory protocol (Section 6) and self-check protocol (Section 7) are step-by-step procedures. However, it avoids the classic recipe failure mode of prescribing specific CSS values per section -- the action verbs are about PROCESS STEPS (render, scroll, count, check) rather than CSS CONTENT (apply this hex to this zone).

**CONVENTIONS SCALE (1=no world-building, 5=rich world description):**

Score: **3.5 / 5**

Justification: The brief has genuine world-building. The opening paragraph establishes the world metaphor ("the materials, the physics, the quality of light"). Section 1 defines identity as "the physics of this world." Section 3 builds a vocabulary of boundary characters (SMOOTH, BRIDGE, BREATHING) with reader-experience descriptions. Section 4 describes what multi-coherence PRODUCES in experiential terms. Section 8 uses the composer/instrument metaphor. The anti-scale formula appears. However, the world-building is INTERRUPTED by procedural sections (6, 7, PROCESS) that shift from "this is how the world works" to "this is what you must do."

### 2E. Overall Format Classification

The draft is a **HYBRID: 55% Recipe, 30% Conventions Brief, 15% Checklist.**

It is NOT a pure conventions brief despite the closing claim ("It describes a world, not a checklist"). The presence of 52 imperative verbs, 4 sequenced phases, 5 binary self-check questions, and a 3-step compositional memory protocol make it substantially a recipe -- a good recipe, shorter and more world-aware than previous recipes, but still a recipe.

---

## PART 3: SECTIONS THAT DRIFTED TO CHECKLIST FORMAT

### 3A. Section 2: PERCEPTION THRESHOLDS

**Current format: CHECKLIST**

The YAML block is pure checklist format. It tells the builder what to verify, not what to do or what the world is. The closing sentence reinforces checklist mode: "Design above the floor or do not design at all."

**Problem:** This section shifts the builder from "composing a page" mode (established by the opening) into "checking thresholds" mode. The builder's attention pivots from aesthetic judgment to numeric compliance.

**Rewrite in conventions format:**

```
## 2. PERCEPTION THRESHOLDS (The Floor of Visibility)

Human perception has hard limits. Below certain deltas, CSS changes
are technically present but experientially invisible -- the reader
cannot see them. The flagship failure proved this: backgrounds
differing by 1-8 RGB points read as the same color.

The physics of visibility in this world:

  Adjacent zone backgrounds exist in different hues only above 15 RGB.
  Adjacent typographic zones become perceptibly different at 2px font-size
    and 0.03em letter-spacing.
  Stacked gaps above 108px create voids -- dead stretches where the
    reader loses the page's thread.
  Multi-coherence requires at least 3 CSS channels shifting together
    at every zone boundary; fewer reads as arbitrary, not designed.
  Structure needs at least 1 structural border-left per zone and at
    least 10 component families for spatial confidence.
  Mechanism breadth requires at least 4 of 5 categories (S/H/C/D/N).

These are not rules to comply with. They are the physics of human
perception. CSS below these thresholds is invisible. Invisible CSS
is wasted CSS.
```

**Why this is better:** Same information, but framed as world-description ("the physics of visibility") rather than pass/fail criteria. The builder internalizes the WHY (human perception limits) alongside the WHAT (the values). The values are still present and precise -- no information is lost.

### 3B. Section 6: COMPOSITIONAL MEMORY PROTOCOL

**Current format: RECIPE (procedure + checklist hybrid)**

This section is the most overtly procedural in the entire brief: numbered steps, conditional branching ("If fewer than 3: add shifts"), midpoint audit protocol, 5th-mechanism checkpoint. It reads like a factory floor procedure.

**Problem:** It induces COMPLYING mode during the build. The builder stops composing and starts counting. The retrospective evidence (05-metacognitive-process.md) shows this is exactly the pattern that produced the flagship failure.

**Rewrite in conventions format:**

```
## 6. COMPOSITIONAL MEMORY (Preventing Drift)

Long builds drift. By Section 10, the coherence direction you
established at Section 1 may have faded. This is normal -- context
windows are finite, and 1000+ lines of CSS push early decisions
below the attention horizon.

Three habits prevent drift:

**Boundary naming.** Each zone boundary gets a CSS comment naming
its direction: `/* Boundary Z2->Z3: DEEPENING */`. This is your
breadcrumb trail. When you return to a boundary later, the comment
tells you what you intended.

**Midpoint reflection.** When you reach roughly the halfway point
of your build, render the page and scroll through it. Ask yourself:
what feels designed? What feels flat? Strengthen the weakest section
before continuing. This is 5 minutes that prevents 30 minutes of
post-build remediation.

**Category awareness.** The mechanism catalog has 5 categories. If
you notice you have deployed nothing from a category, that is a
signal -- not necessarily to deploy one, but to ask whether the
absence is intentional or accidental.

These are habits of attention, not compliance steps. A builder who
is AWARE of drift prevents it naturally. A builder who is COUNTING
checkboxes produces flat output.
```

**Why this is better:** Same three practices, but framed as habits of a composing builder rather than factory-floor checkpoints. The key shift: "Count mechanisms by category. Any category at 0? Deploy one before continuing" (checklist) becomes "If you notice you have deployed nothing from a category, that is a signal -- not necessarily to deploy one, but to ask whether the absence is intentional" (convention). The first prescribes an action. The second invites judgment.

### 3C. Section 7: SELF-CHECK PROTOCOL

**Current format: PURE CHECKLIST**

Five binary questions with YES/NO gates. This is the most checklist-formatted section in the brief. Each question ends with a directive: "Increase them," "Fill it with content," "Move or add," "add channel shifts," "Strengthen borders."

**Problem:** By the time the builder reaches this section (after completing a full draft), its cognitive mode should be REFLECTIVE, not COMPLIANT. Binary YES/NO questions force compliance mode. The builder answers the questions to PASS them, not to IMPROVE the page.

**Rewrite in conventions format:**

```
## 7. FIVE QUESTIONS (Before You Submit)

After your first full draft, step back. These five questions are not
a pass/fail gate -- they are a way of SEEING your own page clearly.

**The Squint.** Lean back and squint. The blur strips away detail,
revealing your page's architecture in pure shape and color. If you
can identify every zone boundary from blur alone, your chromatic
and spatial architecture is working. If zones blend together, your
deltas are below perception.

**The Scroll.** Scroll the full page at normal speed. Any stretch
of pure background longer than 108px is a void -- a place where
the reader's eye has nothing to land on. Voids are where readers
leave.

**The Second Half.** Most builders front-load visual interest. Check:
does at least one designed moment -- a peak where 3+ mechanisms
combine with unique treatment -- appear below the midpoint? If not,
the second half of your page is coasting on the first half's energy.

**The Boundary.** Find your most important zone boundary. Count the
CSS channels that shift there. If 3 or more shift in the same
direction, the transition coheres. Fewer than 3 reads as noise
rather than design.

**The Skeleton.** Imagine stripping all color and text, leaving only
borders and whitespace. Does the skeleton alone communicate structure?
Spatial confidence means the page's bones are strong enough to carry
any surface treatment.

These questions have no "pass" state. They are compositional mirrors.
Look in them honestly.
```

**Why this is better:** Same five checks, but framed as SEEING rather than PASSING. The builder's mode shifts from "do I pass?" to "what do I see?" The key change: removing the explicit YES -> proceed / NO -> fix it branching. The binary branching induces checklist behavior; the descriptive framing induces reflective behavior.

### 3D. Section 9: QUALITY FLOOR

**Current format: CHECKLIST**

"Your page must meet these minimums." "These are guidelines, not gates" (contradicts "must meet" in the same section). "Use at least 10 component families." This section is minimum-viable-compliance formatted.

**Problem:** A quality FLOOR section tells the builder: "the minimum acceptable output is..." This invites the builder to target the minimum. The Middle-tier experiment showed that a builder given a RECIPE targets the recipe's INTENT, which is often above the floor. A builder given a FLOOR targets the floor.

**Rewrite in conventions format:**

```
## 9. WHAT FLAGSHIP QUALITY LOOKS LIKE

A Flagship page is the design system's crown jewel. These are the
characteristics that distinguish Flagship from lesser tiers:

**Mechanism depth.** All 5 mechanism categories are represented -- not
because a rule requires it, but because the content demands spatial
reasoning (S), hierarchical clarity (H), component richness (C),
depth encoding (D), and navigational confidence (N). A Flagship
page deploys 12-18 mechanisms, each earning its place through content
service.

**Component vocabulary.** The component library (merged-components.css)
contains proven patterns. A Flagship page uses 10+ families, adapting
and extending them for the specific content. The library is a
vocabulary, not a constraint -- use it as fluently as you use CSS
properties.

**CSS investment.** Flagship pages typically produce 700-1200 lines of
CSS. Below 500 suggests under-investment in compositional detail.
Above 1500 suggests CSS serving itself rather than the content.

**Accessibility as structure.** Skip links, landmark roles, focus
indicators, and 4.5:1 contrast are not afterthoughts bolted onto a
visual design -- they are structural elements that strengthen the
page's spatial skeleton.

**Responsive grace.** At 768px, multi-column layouts become single-
column. Spacing reduces. But the soul -- sharp edges, flat surfaces,
warm palette, typography trinity -- remains unchanged. The page
adapts without losing its character.
```

**Why this is better:** Same information, but framed as WHAT QUALITY LOOKS LIKE rather than WHAT MINIMUMS TO HIT. The builder reads "Flagship pages deploy 12-18 mechanisms, each earning its place through content service" and aims for 12-18 with justification. The builder reads "at least 4 of 5 categories" and aims for exactly 4 categories.

### 3E. PROCESS Section (Phase A-D)

**Current format: RECIPE**

This is the most overtly recipe-formatted section: four sequenced phases with explicit ordering and specific sub-steps. "Write HTML first (skeleton with landmarks, skip link, ARIA roles, component classes). Then CSS in this sequence: reset + soul + base typography -> zone backgrounds -> structural borders -> typography zones -> element-level richness -> responsive."

**Problem from 06-COMP-INTEL-CONDITIONS.md:** Anti-Condition D3 -- sequential-by-channel organization is incompatible with multi-coherence, which requires simultaneous-by-boundary thinking. The PROCESS section's CSS sequence (backgrounds -> borders -> typography) is exactly the channel-by-channel approach that produces compliant-but-flat output.

**However:** Report 17-RECIPE-CEILING makes a crucial distinction. A procedural recipe with decision points (Phase A: "Identify the natural zones" -- the builder must DECIDE where zones are) is fundamentally different from a specification recipe (Phase C: "CSS in this sequence" -- the builder must FOLLOW an order). The PROCESS section mixes both types.

**Rewrite preserving the useful procedural framing while removing the channel-by-channel cage:**

```
## PROCESS (The Flow)

**Understand.** Read the content. Where does it shift topic, mode,
or intensity? Those shifts are your zone boundaries. What pulls in
two directions? That tension is your compositional opportunity. If
a metaphor emerges from the content's structure, name it. If not,
build without one.

**Plan.** Write your conviction statement, transition table, and
fractal echo table. Consult the mechanism catalog for techniques that
serve YOUR content. Plan your zone architecture -- backgrounds,
borders, typography, spacing -- thinking about each BOUNDARY as a
complete multi-coherence event, not each CSS channel separately.

**Build.** HTML skeleton first (landmarks, skip link, ARIA roles,
component classes). Then CSS, working BOUNDARY BY BOUNDARY rather
than channel by channel. At each zone boundary, set all shifting
channels together: background + typography + spacing + borders.
Verify your transition table values against the perception thresholds
as you go.

**Verify.** Render the page. Scroll top to bottom. Answer the five
questions. Produce your cascade value table. Fix anything that does
not match your intent.

Deliverables:
1. output.html
2. _build-log.md (conviction, transition table, fractal echo,
   midpoint observation, override log, five-question responses)
3. _cascade-value-table.md (computed values at every section boundary)
```

**Why this is better:** The critical change is in Phase C: "working BOUNDARY BY BOUNDARY rather than channel by channel." This directly addresses Anti-Condition D3. Instead of "backgrounds -> borders -> typography" (channel-by-channel, which produces backgrounds that ignore borders that ignore typography), the builder sets "background + typography + spacing + borders" at each boundary as a unified multi-coherence event.

---

## PART 4: THE MASTER PROMPT FORMAT QUESTION

### 4A. The Question

The master prompt must instruct a fresh Claude instance to:
1. Write 4 new files (conventions brief, gate-runner, PA questions, orchestrator script)
2. Edit 4 existing files (TC skill, PA skill, 2 CLAUDE.md files)
3. Validate the results

Should this master prompt be a RECIPE, a CONVENTIONS BRIEF, or something else?

### 4B. The Answer: The Master Prompt MUST Be a Recipe

This is not the same question as "should the conventions brief be a recipe?" The conventions brief is a document FOR A BUILDER -- an Opus agent composing a page. The master prompt is a document FOR A CODIFIER -- an instance writing/editing specific files with specific content.

The codification task has these properties:
- **Concrete deliverables:** 8 specific files, each with defined content
- **External dependencies:** Content must come from 20+ research reports, not the instance's judgment
- **Zero creative latitude:** The gate-runner.js checks must match the perception thresholds exactly. The PA questions must match the audit protocol exactly. The skill edits must preserve existing structure.
- **Verifiable correctness:** Every value in every file has a source that can be checked.

These properties make the task fundamentally DIFFERENT from page-building:

| Property | Page-building | Codification |
|----------|--------------|-------------|
| Primary skill | Compositional judgment | Accurate extraction + synthesis |
| Creative latitude | Maximum (within constraints) | Near-zero (faithfulness to sources) |
| Quality measure | Perceptual (does it FEEL designed?) | Factual (does it MATCH sources?) |
| Error type | Flatness (under-composing) | Inaccuracy (wrong values, missing content) |
| Optimal format | Conventions brief | Recipe |

A conventions brief for the codification task would be counterproductive. "This system values accurate extraction from research sources" does not help the instance decide what to put in gate-runner.js. The instance needs to be told: "Read report 06. Extract the 7 perception thresholds from Section 3. Write them as JavaScript assertions. The background_delta threshold is >= 15 RGB -- this becomes `assert(Math.abs(r1-r2) + Math.abs(g1-g2) + Math.abs(b1-b2) >= 15)`."

### 4C. Recipe Format for the Master Prompt

The master prompt should be:

1. **A brief orientation** (~10 lines): What is being built, why, and the 5 user decisions that have been made
2. **Per-file recipes** (~30-50 lines each, 8 files = ~240-400 lines): For each deliverable:
   - EXACT file path
   - Source files to read (with specific sections to extract from)
   - What to write (concrete structure, not abstract principles)
   - Verification: how to check the file is correct
3. **Validation protocol** (~20 lines): Cross-file consistency checks
4. **Sequencing** (~10 lines): Which files to write first (dependencies)

Total estimated: ~300-450 lines. This is a LONG recipe, but the task warrants it because every file has specific content requirements drawn from specific sources. This is not the "recipe as cage" failure mode (Anti-Condition D3) because the codification task IS a compliance task -- faithfulness to sources, not creative composition.

### 4D. The Critical Distinction

**The conventions brief describes a world for a COMPOSER to inhabit.**
**The master prompt gives instructions for a CODIFIER to execute.**

These are different tasks requiring different formats. The error would be to apply the conventions format to the master prompt (producing a vague instruction that the instance interprets loosely, introducing drift from sources) or the recipe format to the conventions brief (producing a specification that caps the builder's quality at 2.5-3.0/4).

The master prompt should contain the conventions brief AS ONE OF ITS DELIVERABLES -- the recipe says "write this file, with this content, in this format." The conventions brief inside that deliverable should be in conventions format. But the master prompt wrapping it is a recipe.

### 4E. Hybrid Structure (Recommended)

```
MASTER PROMPT STRUCTURE:

LAYER 0: ORIENTATION (conventions format, ~15 lines)
  What this system is, why it exists, what the builder will do.
  World-building for the codifier's understanding.

LAYER 1: USER DECISIONS (factual, ~10 lines)
  The 5 decisions that have been made. No reasoning, just facts.

LAYER 2: FILE-BY-FILE RECIPES (recipe format, ~300 lines)
  For each of 8 files: path, sources, structure, content, verification.
  Imperative verbs: "Read X. Extract Y. Write Z. Verify W."

LAYER 3: VALIDATION PROTOCOL (checklist format, ~20 lines)
  Cross-file consistency checks. Binary pass/fail.
  This is the ONE place where checklist format is appropriate:
  verifying completed work, not guiding creation.

LAYER 4: SEQUENCING (recipe format, ~10 lines)
  Order of operations. What depends on what.
```

This hybrid uses each format where it is strongest:
- Conventions for orientation (composing understanding)
- Recipe for file creation (executing extraction)
- Checklist for validation (verifying correctness)

---

## PART 5: SYNTHESIS -- FORMAT RECOMMENDATIONS

### 5A. The Conventions Brief (Report 10) Verdict

**Current state:** A hybrid (55% recipe, 30% conventions, 15% checklist) that claims to be a conventions brief but drifts to recipe/checklist in Sections 2, 6, 7, 9, and PROCESS.

**Target state:** Closer to 25% recipe, 55% conventions, 20% checklist.

**Specific changes needed:**

| Section | Current Format | Target Format | Change Required |
|---------|---------------|---------------|-----------------|
| Opening + S1 (Identity) | Conventions | Conventions | NONE -- this is the best section |
| S2 (Thresholds) | Checklist (YAML) | Conventions with embedded values | Rewrite as world-description (see 3A) |
| S3 (Transitions) | Conventions | Conventions | NONE -- excellent world-building |
| S4 (Multi-coherence) | Conventions + recipe | Conventions | MINOR -- the worked example is good; the "Define your direction" imperative is fine as seasoning |
| S5 (Fractal echo) | Conventions + recipe | Conventions | MINOR -- the table mandate is fine; the "produce" imperative is appropriate |
| S6 (Memory protocol) | Recipe/checklist | Conventions | REWRITE (see 3B) |
| S7 (Self-check) | Checklist | Conventions | REWRITE (see 3C) |
| S8 (Creative authority) | Conventions | Conventions | NONE -- this is the second-best section |
| S9 (Quality floor) | Checklist | Conventions | REWRITE (see 3D) |
| S10 (Conviction card) | Recipe | Conventions + recipe | MINOR -- the template is fine; the framing needs softening |
| PROCESS | Recipe | Conventions + recipe | REWRITE Phase C (see 3E) |

**Net effect of rewrites:** The brief shifts from 55/30/15 (recipe/conventions/checklist) to approximately 30/55/15 (recipe/conventions/checklist). The recipe component is preserved where it adds value (Phase A-D process flow, conviction card template, fractal echo table mandate) and removed where it induces compliance mode (compositional memory as factory procedure, self-check as binary gate, quality as minimums).

### 5B. The Master Prompt Verdict

The master prompt SHOULD be a recipe -- the codification task is an extraction-and-synthesis task where the codifier needs specific instructions about what to extract from which sources and where to put it. The codification task has near-zero creative latitude, making recipe format optimal.

The master prompt should use:
- **Conventions format** for Layer 0 (orientation) only
- **Recipe format** for Layer 2 (file-by-file instructions) -- the bulk
- **Checklist format** for Layer 3 (validation) only

### 5C. The Relationship Between Formats

```
CONVENTIONS BRIEF (for the eventual Opus builder):
  Describes the world. Enables composition. Avoids prescribing HOW.
  Format: 55% conventions, 30% recipe, 15% checklist.

MASTER PROMPT (for the codifying instance):
  Prescribes what to write. Enables accurate extraction. Avoids vagueness.
  Format: 10% conventions, 75% recipe, 15% checklist.
```

These are not contradictory. They serve different audiences with different tasks. The master prompt's recipe format PRODUCES the conventions brief as one of its deliverables. The conventions brief's conventions format ENABLES the eventual builder to compose. Applying the wrong format to either audience degrades the output.

### 5D. The Contrarian Check (from Report 16)

Report 16 challenges the entire format hierarchy: "No two formats were tested under identical conditions. The format ranking is inseparable from the model ranking and the content ranking."

This is correct. But the challenge applies to the BUILDER'S format (conventions brief), not to the CODIFIER'S format (master prompt). The codification task is not creative. It does not depend on the builder model's compositional intelligence. It depends on accurate extraction. Recipe format is standard for extraction tasks across all LLM applications. The contrarian challenge to format ordering does not apply here.

For the conventions brief, the contrarian is right that we have N=0 tests of a pure conventions brief at Flagship complexity. The rewrite recommendations above are theoretical improvements. Only building a page with the rewritten brief will test whether the format shift actually produces better output.

---

## PART 6: CD-006 FRAMING CORRECTION

**CRITICAL:** CD-006 is NOT Flagship 4/4. It is Ceiling tier. The 14-dimension definition (01-DEFINITION.md) establishes that Flagship 4/4 has NEVER been achieved and is qualitatively beyond CD-006 in four ways:

1. **Unified pervading metaphor** -- CD-006 uses section-local metaphors (geological in S1, bento in S3, etc.), not a single metaphor driving the entire page's CSS
2. **Dynamic multi-coherence profile** -- CD-006 has LOCAL multi-coherence (concentrated in S1 and bookends), not GLOBAL (sustained at every boundary via unified metaphor)
3. **Compositional surprise** -- CD-006 is sophisticated but predictable; Flagship requires moments that transcend expected vocabulary
4. **Fractal at ALL 5 scales with strong expression** -- CD-006 is 4 strong + 1 moderate

This affects the format analysis in one specific way: when I cite CD-006 as evidence that conventions-brief format enables high quality (line 37 of this document), the correct framing is "conventions format enabled CD-006 to achieve CEILING 4/4 (39/40)" -- not "conventions format can produce FLAGSHIP 4/4." Flagship is beyond what any format has achieved. The format question for Flagship is genuinely open.

The format analysis conclusions remain valid but require this caveat:
- Conventions format is the best format for the builder based on available evidence (it enabled the highest-scoring artifact we have), but that artifact is Ceiling, not Flagship
- The 14-dimension Flagship target reinforces the need for conventions over checklist -- D-04 (global multi-coherence) and D-13 (unified structural metaphor) are CREATIVE dimensions that checklists structurally cannot produce
- D-04 and D-13 are the two THEORETICAL dimensions (LOW-MEDIUM confidence) that have never been observed -- the conventions brief must create conditions for them to emerge, but we have zero evidence any instruction format can reliably produce them
- The master prompt should still be a recipe -- the codification task does not change based on the Flagship target

The key implication for the conventions brief rewrites: my proposed Section 9 rewrite correctly uses "Flagship page" framing rather than "CD-006 quality" framing, but should explicitly acknowledge that Flagship quality is BEYOND any existing artifact and that the conventions brief is creating conditions for emergence of something never before achieved.

---

## SUMMARY TABLE

| Question | Answer |
|----------|--------|
| Is the conventions brief draft a conventions brief? | NO. It is 55% recipe, 30% conventions, 15% checklist. |
| Recipe score (1-5) | 3.5/5 (52 imperative verbs, 4 sequenced phases, 5 binary self-checks) |
| Conventions score (1-5) | 3.5/5 (genuine world-building in S1, S3, S4, S8; undermined by procedural sections) |
| Sections needing rewrite | S2 (thresholds), S6 (memory), S7 (self-check), S9 (quality floor), PROCESS Phase C |
| Should the master prompt be a recipe? | YES. Codification is an extraction task, not a creative task. |
| Should the conventions brief be a recipe? | NO. Building is a creative task. Conventions format enables composition. |
| Target format for conventions brief | 25% recipe, 55% conventions, 20% checklist |
| Target format for master prompt | 10% conventions, 75% recipe, 15% checklist |

---

**END FORMAT ANALYSIS**

**Statistics:**
- Source files read: 6 (17-RECIPE-CEILING 610 lines, 06-COMP-INTEL-CONDITIONS 477 lines, 16-contrarian 257 lines, 10-CONVENTIONS-BRIEF-DRAFT 255 lines, 14-TELESCOPE-MICROSCOPE 645 lines, 05-metacognitive-process excerpt)
- Imperative verbs counted in brief: 52
- Constraint verbs counted in brief: 14
- Declarative verbs counted in brief: 28
- CSS examples counted: 15 specific, 5 abstract
- Sections with rewrite recommendations: 5 (with full rewrites provided)
- Rewrites totaling approximately 120 lines of replacement text
