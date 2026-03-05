# The Holistic Multi-Window Process: From Raw Markdown to Shipped Page

**Author:** process-architect (Task #19)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## The Shape of the Journey

The process has 7 windows. Each window is a separate context (separate Claude instance, separate conversation). The tissue between windows is what makes this a composition pipeline rather than an assembly line.

```
Window 1: TC DERIVATION (inhabit the content, construct the metaphor)
    |
    v -- tissue: conviction brief + exploration recommendation
Window 2: BUILD (create the artifact)
    |
    v -- tissue: artifact + 6-dimension reflection
    |
    +--[PARALLEL]--> Window 3a: GATE RUNNER (programmatic verification)
    |                    |
    +--[PARALLEL]--> Window 3b: PA AUDITORS (experiential perception)
                         |
                         v -- tissue: 5 auditor responses
                    Window 3c: WEAVER (creative synthesis)
                         |
    <----[MERGE]--------/
    |
    v -- routing decision (orchestrator combines gate + weaver)
    |
    [If SHIP] --> DONE
    [If mechanical fix needed] --> Window 4: MECHANICAL FIX (same builder, CSS patches)
    [If REFINE] --> Window 5: REFINE (different builder, creative deepening)
    [If RETHINK] --> Window 1 re-entry (different metaphor)
```

This is not a strict pipeline. It is a directed graph with one branch point (after build), one merge point (orchestrator routing), and two possible loops (REFINE may itself need another PA cycle; RETHINK returns to the beginning). Most pages will traverse Windows 1 -> 2 -> 3a+3b+3c -> 5 -> SHIP. The RETHINK path should be rare (< 5% of runs).

---

## Window 0: Pre-Pipeline (Orchestrator Setup)

**Who:** The orchestrator (the `/build-page` skill or the user directly)
**Duration:** Minutes
**Purpose:** Gather inputs and establish working directory

### Inputs Required
1. **Raw content markdown** -- the content to be composed. This is the ONE non-negotiable input.
2. **Output directory** -- where all artifacts will be written.
3. **Optional: Content context** -- what this content IS (blog post, research paper, tutorial), where it fits, who it's for. If not provided, the TC agent derives this from the content itself.

### What the Orchestrator Does
1. Creates output directory structure
2. Copies raw content to `[output-dir]/_content.md`
3. Spawns Window 1 (TC derivation)

### Context Allocation
This window is trivial -- no creative work happens here. Its only purpose is to ensure the raw content exists and the directory is ready.

---

## Window 1: TC Derivation

**Who:** A single TC agent running the tension-composition pipeline (Phases 0-4.5)
**Duration:** ~15-25 minutes (conversation turn, not clock time)
**Purpose:** Inhabit the content, construct the metaphor, produce the conviction brief

### Context Window Contents (~200K tokens available)

| Content | Lines | % of Context | Purpose |
|---------|-------|-------------|---------|
| TC Skill (SKILL-REWRITE.md) | ~842 | 15% | The pipeline protocol |
| Raw content markdown | varies | 10-30% | The material being composed |
| Identity files (prohibitions.md + tokens.css) | ~400 | 7% | The world's physics |
| _Remaining creative headroom_ | -- | 48-68% | Thinking space for derivation |

### What This Window Does NOT Receive
- No explorations (DD/OD/AD/CD HTML files). Anti-gravity R1: library access prohibited in Phases 0-3.
- No mechanism catalog. Only permitted after Phase 3.5 (metaphor commitment).
- No prior build artifacts. This is derivation from content, not iteration on existing work.
- No PA results, gate results, or audit feedback from any source.

### The Process Inside This Window

The TC skill governs the entire process. The key phases:

1. **Phase 0 (Assessment):** Content type, scope, section identification, pipeline entry decision.
2. **Phase 1 (Multi-Axis Questioning):** Core 4 axes (FEEL/UNDERSTAND/DO/BECOME) + Extended 5 + Structural Triggers. 4-14 axes produce needs and structural properties.
3. **Phase 2 (Tension Derivation):** Each axis's needs (Side A) vs. design system personality (Side B). Addition Test, BECAUSE test, SUBSTITUTION test. Genuine vs. cosmetic tension classification.
4. **Phase 3 (Metaphor Collapse):** Structural property extraction, search query generation, domain scanning, candidate evaluation, 6 binary rejection checks, interpretive distance gate.
5. **Phase 3.5 (Commitment Gate):** Metaphor locked. Zone architecture derived. Library access now permitted for mechanism catalog only.
6. **Phase 4 (Compositional Architecture):** 5-category property extraction, pacing assessment, multi-coherence transition table, component evaluation, fractal consistency check.
7. **Phase 4.5 (Conviction Brief):** The output. ~80-120 lines in 6 sections.

### What This Window Produces

**Primary output:** `[output-dir]/_tc-brief.md` (~80-120 lines)
- Section 1: WORLD-DESCRIPTION (~12 lines)
- Section 2: CALIBRATION (~10 lines)
- Section 3: OPPOSITION MAP (~15 lines)
- Section 4: COMPOSITIONAL ARC (~20 lines)
- Section 5: CREATIVE CONDITIONS (~10 lines)
- Section 6: CONTENT MAP (~15 lines)
- Appended: EXPLORATION RECOMMENDATION (~15 lines)

**What makes this output generative, not extractive:**
The conviction brief does not say "container width 940-960px" or ">= 15 RGB delta." It states calibration RANGES that inherently satisfy thresholds without naming them. It states opposition as CREATIVE INVITATION, not problem-to-solve. It describes the compositional arc as a JOURNEY, not a zone table.

### Tissue Produced for Window 2
The conviction brief IS the tissue. It carries:
- The metaphor (embedded as natural law in the world-description)
- The calibration ranges (physics embedded, not thresholds stated)
- The opposition map (creative invitations, not problems)
- The compositional arc (experiential journey, not zone spec)
- The creative conditions (invitations, not mandates)
- The content map (reference material for the builder)
- The exploration recommendation (which explorations to load, which to skip)

---

## Window 2: BUILD

**Who:** A single builder agent (Opus model for compositional quality)
**Duration:** ~30-60 minutes
**Purpose:** Create the HTML artifact -- the actual page

### Context Window Contents

| Content | Lines | % of Context | Purpose |
|---------|-------|-------------|---------|
| Conviction brief (_tc-brief.md) | ~100-120 | 2% | Creative direction (read FIRST) |
| Conventions brief | ~40-60 | 1% | Mechanical constraints (read SECOND) |
| Raw content markdown | varies | 10-30% | What the page contains |
| Explorations (per recommendation) | ~6,000-8,000 | 15-20% | Generatively opposing reference |
| Mechanism catalog | ~800 | 2% | Reusable technique reference |
| Components CSS | ~500 | 1% | Base component library |
| Identity files | ~400 | 1% | World physics |
| _Remaining creative headroom_ | -- | 43-68% | Building space |

### Reading Order (Critical)

1. **FIRST: Conviction brief.** Establishes the world, the metaphor, the opposition, the arc. The builder should WANT to create after reading this.
2. **SECOND: Raw content.** The material. The builder reads the content through the lens of the conviction brief.
3. **THIRD: Explorations (per recommendation).** These FIGHT with the conviction brief's approach. They are not models to copy but perspectives to challenge the builder's instincts.
4. **FOURTH: Conventions brief + mechanism catalog + components.** The mechanical vocabulary. By reading these LAST, the builder's creative direction is established before compliance enters the picture.

### What the Builder Does

Creates `[output-dir]/output.html` -- a complete, self-contained HTML page with embedded CSS that:
- Embodies the conviction brief's metaphor and compositional arc
- Contains the full raw content, composed (not just formatted)
- Uses the design system's vocabulary (6 CSS channels, 3 typefaces, flat/angular/sharp)
- Deploys mechanisms from the catalog (adapted, not copied) across all 5 categories

### What the Builder Does After Creating

**Immediately after the HTML is complete, BEFORE any audit or review, the builder writes the 6-dimension reflection.** This is critical -- the reflection captures creative state at completion, not post-audit rationalization.

The builder answers the writing prompts:

1. **(a) CONVICTION:** "Close your eyes and picture the page you were trying to make -- not the one you made, but the one in your head before you started writing CSS. What does it look like?"
2. **(b) ALTERNATIVES:** "Name two roads you didn't take. For each: was it the constraints that stopped you, your own judgment, or running out of context?"
3. **(c) SURPRISES:** "Was there a moment where you wrote CSS and the result was better than what you planned?"
4. **(d) IMPULSES:** "What did you WANT to do that the vocabulary wouldn't let you?"
5. **(e) EXPERIENCE:** "Scroll through your page slowly. Describe what you experience."
6. **(f) UNRESOLVED:** "Name a tension in this page that you couldn't fully resolve."

**Output:** `[output-dir]/_reflection.md` (~20-35 sentences across 6 dimensions)

### Tissue Produced for Windows 3a/3b/3c

Two artifacts travel forward:
1. **The HTML artifact** (`output.html`) -- the page itself
2. **The 6-dimension reflection** (`_reflection.md`) -- the builder's creative state

The conviction brief also persists in the output directory and is available to downstream windows, but it is not part of the explicit handoff -- it lives in the directory as reference material.

---

## Window 3a: GATE RUNNER (Programmatic Verification)

**Who:** The gate runner (programmatic, can run as a script or in a lightweight agent)
**Duration:** ~2-5 minutes
**Purpose:** Binary pass/fail on mechanical thresholds

### What It Receives
- The HTML artifact (`output.html`)

### What It Does NOT Receive
- No conviction brief (not relevant to mechanical checks)
- No reflection (not relevant to mechanical checks)
- No auditor responses (runs independently)

### What It Checks
All 47+ programmatic gates, including:
- Container width (940-960px)
- Background RGB deltas (>= 15 between adjacent zones)
- Stacked gap (< 120px)
- Characters per line (45-80)
- WCAG contrast ratios
- Mechanism count (>= 14)
- Font family compliance (3 typefaces only)
- Border weight categories (1px, 3px, 4px only)
- Soul violations (border-radius, box-shadow, gradients)
- Responsive breakpoints
- ARIA landmarks

### What It Produces
`[output-dir]/_gate-results.json` -- structured pass/fail for each gate, with specific failure details.

### Interaction with PA: NONE

The gate runner and the PA auditors run in PARALLEL. They do not see each other's results. The gate runner does not inform the PA. The PA does not inform the gate runner. They are two independent evaluation streams that the orchestrator merges.

---

## Window 3b: PA AUDITORS (Experiential Perception)

**Who:** 5 generalist auditors (Opus for perceptual quality), each answering 4 of 20 experiential questions
**Duration:** ~15-25 minutes
**Purpose:** Describe what the page FEELS like to experience

### Pre-Work: Screenshot Capture

Before spawning auditors, the orchestrator (or lead) captures screenshots:
- Desktop viewport (1440px): cold look + full scroll-through (every viewport height)
- Tablet viewport (768px): cold look + full scroll-through
- Optional: mobile (375px)

**Why pre-capture:** Eliminates Playwright contention between 5 parallel auditors. Each auditor reads saved images via Read tool.

### What Each Auditor Receives

| Content | Purpose |
|---------|---------|
| Screenshots (desktop + tablet) | The page to experience |
| Their 4 assigned questions | The inquiry frame |
| The conviction brief (Sections 1 + 4 only -- world-description + compositional arc) | Context for what the page was TRYING to achieve |

### What Each Auditor Does NOT Receive
- No gate runner results (programmatic compliance is not the auditor's concern)
- No reflection from the builder (the auditor's perception must be independent)
- No other auditors' responses (independence prevents anchoring)
- No PA-05 scale or scoring rubric (no numerical evaluation)
- No "what it catches" labels or diagnostic frames

### Auditor Assignments

| Auditor | Questions | Engagement Focus |
|---------|-----------|-----------------|
| A | E-01, E-05, E-11, E-17 | First encounter + density + tension + voice |
| B | E-02, E-06, E-14, E-18 | Scroll experience + space + rhythm + best moment |
| C | E-03, E-07, E-12, E-19 | Personality + transitions + structure + near-miss |
| D | E-04, E-08, E-13, E-20 | Empty space + thirds + complexity + one change |
| E | E-09, E-10, E-15, E-16 | Content-form + design value + peak + adaptation |

### What Each Auditor Produces

Prose responses to their 4 questions. No scores, no pass/fail, no severity classifications. Descriptive prose about what they experienced.

**Output:** Each auditor writes `[output-dir]/_pa/auditor-[A-E].md`

---

## Window 3c: WEAVER (Creative Synthesis)

**Who:** A single Weaver agent (Opus for synthesis quality)
**Duration:** ~10-15 minutes
**Purpose:** Synthesize 5 auditor reports into creative direction for the refinement builder

### What the Weaver Receives

| Content | Purpose |
|---------|---------|
| All 5 auditor reports | The experiential data |
| The conviction brief (full) | What the page was trying to achieve |
| The builder's 6-dimension reflection | The creator's account of their process |

### Why the Weaver Gets Both Reflection AND Auditor Reports

The reflection is the CREATOR's account (first-person, intent-aware, knows where compromises were made). The auditor reports are the EXPERIENCER's accounts (fresh-eyes, perception-only, unaware of intent). The Weaver holds BOTH perspectives and synthesizes them.

When the creator says "the transition at section 3 feels too abrupt" and two auditors independently say "something shifts suddenly around the middle" -- that's convergence. When the creator says "the quiet zone works" but three auditors say "the page gets tired near the end" -- that's divergence. Both signals are valuable.

### The Weaver's 3 Outputs

**Output 1: THE EXPERIENCE PORTRAIT (~15 lines)**
What the page feels like as a scroll experience. Not an average of auditor opinions -- a coherent portrait synthesized from multiple perspectives. Written as if describing a piece of music or a room.

**Output 2: THE CREATIVE DIRECTION (~10 lines)**
What the refinement builder should FOCUS ON. Structured as:
- AMPLIFY: the strongest moment, extended
- RELEASE: where tension should resolve
- DEEPEN: where the composition has room to grow
- THE GAP: the distance between intent (from conviction brief) and achievement (from auditor experience)

**Output 3: THE VERDICT (3 lines)**

| Verdict | Meaning | What Happens Next |
|---------|---------|------------------|
| SHIP | Composition is complete | Pipeline ends |
| REFINE | Foundation exists, needs another creative pass | Window 5 |
| RETHINK | Foundation not working, different approach needed | Window 1 re-entry |

Companion: one-sentence reason for the verdict.

**Output files:**
- `[output-dir]/_pa/weaver-synthesis.md` (experience portrait + creative direction + verdict)

---

## Orchestrator Routing Decision

**Who:** The orchestrator (the `/build-page` skill or the lead agent)
**When:** After both gate runner (3a) and weaver (3c) have produced results

The orchestrator reads BOTH evaluation streams and routes:

| | Gates PASS | Gates FAIL |
|---|-----------|-----------|
| **Weaver: SHIP** | Pipeline complete. Ship the page. | Window 4: Mechanical fix (same builder patches CSS). Then re-run gates. |
| **Weaver: REFINE** | Window 5: Creative refinement. | Window 4: Mechanical fix FIRST. Then Window 5: Creative refinement. |
| **Weaver: RETHINK** | Window 1 re-entry with different metaphor. | Mechanical assessment deferred until rethink produces new artifact. |

### The Routing is NOT Arithmetic

The orchestrator does not compute a combined score. It reads the gate results (binary failures) and the weaver's verdict (creative judgment) and makes a holistic routing decision. Examples:

- Gates pass, Weaver says REFINE with reason "transitions need graduation" --> Window 5 (creative refinement)
- 3 gates fail (background delta, stacked gap, missing ARIA), Weaver says SHIP --> Window 4 (mechanical fix only, the composition is done)
- Gates pass, Weaver says RETHINK with reason "the metaphor is fighting the content" --> Window 1 re-entry (the metaphor needs to change, not the CSS)

---

## Window 4: MECHANICAL FIX (When Needed)

**Who:** The same builder agent from Window 2, or a lightweight fix agent
**Duration:** ~10-20 minutes
**Purpose:** Patch CSS values that failed programmatic gates

### What It Receives

| Content | Purpose |
|---------|---------|
| The HTML artifact | The page to fix |
| Gate results (specific failures only) | What needs to change |
| Conventions brief | The mechanical rules |

### What It Does NOT Receive
- No Weaver output (creative direction is not relevant to mechanical fixes)
- No auditor reports (experiential perception is not relevant to CSS patches)
- No conviction brief (the creative direction is already embedded in the artifact)

### Fix Scope
TYPE A only: CSS value corrections. Background hex, padding value, border width, font-size, ARIA attributes, contrast ratios. These are mechanical, not creative.

If 3+ TYPE A fixes target the same section, the orchestrator escalates to TYPE B (structural fix, which means the builder re-reads the conviction brief's world-description and compositional arc to recover intent). TYPE B is rare. TYPE C (metaphor replacement) routes to Window 1 re-entry, not Window 4.

### What It Produces
Updated `[output-dir]/output.html` with CSS patches applied.

### After Mechanical Fix
The gate runner re-runs (lightweight, fast). If gates now pass:
- If Weaver verdict was SHIP --> pipeline complete
- If Weaver verdict was REFINE --> proceed to Window 5

---

## Window 5: REFINE (Creative Deepening)

**Who:** A DIFFERENT builder agent (different Opus instance from Window 2)
**Duration:** ~30-45 minutes
**Purpose:** Compose deeper, knowing what was

### Why a Different Builder

The Window 2 builder has continuation bias -- they will defend and incrementally adjust their own work rather than re-composing. A fresh instance brings fresh perception. The previous builder's creative state is transmitted through the reflection (first-party) and the Weaver's synthesis (third-party), not through same-instance memory.

### What the REFINE Builder Receives

| Content | Lines | Purpose |
|---------|-------|---------|
| Conviction brief (_tc-brief.md) | ~100-120 | The original creative direction |
| Builder's 6-dimension reflection | ~20-35 sentences | The previous creator's account |
| Weaver's creative direction | ~10 lines | AMPLIFY / RELEASE / DEEPEN / THE GAP |
| The HTML artifact (output.html) | varies | The page to refine |
| Raw content markdown | varies | The material |
| Explorations (same recommendation) | ~6,000-8,000 | Creative reference |
| Mechanism catalog | ~800 | Technique reference |

### What the REFINE Builder Does NOT Receive
- No gate runner results (mechanical compliance is not this builder's concern)
- No individual auditor reports (the Weaver has already synthesized these)
- No PA-05 scores (no numerical evaluation)
- No fix lists (the REFINE builder is not fixing -- they are composing deeper)
- No diagnostic vocabulary (no "fix," "repair," "address," "correct")

### The Receiving Prompts (How the REFINE Builder Enters Creative State)

Before touching the artifact, the REFINE builder answers 7 receiving prompts:

1. **R-01:** "Read the conviction dimension first. Before looking at the artifact, picture the page the previous builder was trying to make. What do you see?"
2. **R-02:** "Now look at the artifact. Where does the previous builder's vision show through clearly? Start there."
3. **R-03:** "Read the alternatives and impulses dimensions. Which rejected path resonates with you?"
4. **R-04:** "Read the surprises dimension. Does that discovery suggest a direction you want to push further?"
5. **R-05:** "Read the experience dimension. Now scroll through the artifact yourself. Where does your experience diverge from the previous builder's?"
6. **R-06:** "Read the unresolved dimension. The previous builder left you a gift -- an aesthetic tension they couldn't resolve."
7. **R-07:** "Having read all six dimensions: what's the ONE thing you want to do with this page?"

These prompts ensure the REFINE builder INHABITS the previous builder's creative state before engaging their own creative instincts. The builder starts from empathy, not from criticism.

### What the REFINE Builder Does

Creates an improved `[output-dir]/output.html`. The REFINE builder may:
- Restructure HTML sections
- Rewrite CSS substantially
- Change layout approaches
- Introduce new mechanisms
- Extend the metaphor's expression

The REFINE builder may NOT:
- Replace the metaphor (that's RETHINK, not REFINE)
- Violate the world-description (that's the physics of this world)
- Ignore the conviction brief's opposition map (those tensions are the creative territory)

### After Creating the Refined Artifact

The REFINE builder writes their OWN 6-dimension reflection (`[output-dir]/_reflection-v2.md`). This captures THEIR creative state, which may differ substantially from the original builder's.

### After REFINE: Another PA Cycle?

The orchestrator decides. Options:

1. **Quick gate check only.** Run the gate runner on the refined artifact. If gates pass, ship. This is appropriate when the Weaver's REFINE verdict was about minor compositional improvements (transitions, pacing).

2. **Full PA cycle.** Re-run Windows 3a+3b+3c. New screenshots, new auditors, new Weaver synthesis. This is appropriate when the REFINE was substantial (layout restructuring, significant CSS changes).

3. **Abbreviated PA.** Run 2-3 auditors on the specific areas the Weaver identified, not the full 5-auditor deployment. This is the middle path.

The decision depends on the SCOPE of the refinement. Most REFINE cycles should use option 1 (quick gate check) or option 3 (abbreviated PA). A full PA cycle after REFINE is expensive and usually unnecessary unless the refinement was transformative.

### REFINE Loop Limit

Maximum 2 REFINE cycles (original build + 2 refinements = 3 total creative passes). If after 2 REFINE cycles the Weaver still says REFINE, the orchestrator ships with the best available artifact. Infinite refinement is a trap.

---

## The Full Journey: Concrete Example

Content: Steve Yegge's Gas Town essay (~4,200 words).

### Window 1: TC Derivation (~20 min)
TC agent reads the content. Runs 14-axis questioning. Identifies 3 genuine tensions (institutional empathy vs. editorial authority; conversational register vs. hierarchical structure; eruption vs. measured tone). Metaphor collapse produces "geological stratigraphy." Zone architecture: 4 zones (Surface/Mid-stratum/Deep stratum/Bedrock) with igneous intrusion at ~65%.

**Produces:** `_tc-brief.md` (107 lines). Exploration recommendation: load DD-006 (Fractal), CD-005 (Multi-Axis Transition), DD-003 (Islands). Skip OD-004 (geological -- matches metaphor, risks copying).

### Window 2: BUILD (~45 min)
Builder reads conviction brief. Reads content through geological lens. Reads 3 opposing explorations (the fractal challenges the linear descent; the island approach challenges the connected flow). Reads conventions + mechanism catalog. Builds the page.

After building: writes 6-dimension reflection. Notes that the grid zone at section 3 fights the descent metaphor, that the igneous intrusion landed well as dark inversion, that the quiet zone before bedrock wants to feel like a clearing but doesn't quite.

**Produces:** `output.html` (the page), `_reflection.md` (28 sentences across 6 dimensions).

### Windows 3a+3b+3c: EVALUATION (~20 min total)
Gate runner checks 47 gates. 44 pass, 3 fail (background delta between zones 2 and 3 is 11 RGB, stacked gap at section 4 is 132px, one ARIA landmark missing).

5 PA auditors experience the page through screenshots. Auditor B reports "I sped up through the middle three sections -- they feel similar." Auditor D reports "the lower third got less attention from the designer." Auditor C reports the personality as "confident, warm, slightly stiff." Auditor E reports "the dark section at 65% is the best moment -- it feels earned."

Weaver synthesizes: Experience portrait describes a page with a strong opening and a strong dramatic peak but monotonous mid-sections. Creative direction: AMPLIFY the dark inversion; RELEASE the mid-section uniformity (vary the layout); DEEPEN the closing. THE GAP: the brief says "descent should feel inevitable" but the mid-sections feel like "horizontal plates stacked, not deepening terrain."

Verdict: **REFINE** -- "The descent arc works at the extremes but flattens in the middle."

### Orchestrator Routing
Gates FAIL + Weaver REFINE --> Window 4 (mechanical fix) THEN Window 5 (creative refinement).

### Window 4: MECHANICAL FIX (~10 min)
Fix agent patches 3 CSS values: background delta increased, stacked gap reduced, ARIA landmark added. Gates re-run: 47/47 pass.

### Window 5: REFINE (~40 min)
Different Opus builder receives: conviction brief, original builder's reflection (including the note about mid-section monotony and the grid-vs-descent tension), Weaver's creative direction (AMPLIFY dark peak, RELEASE mid-section, DEEPEN closing), the mechanically-fixed artifact, raw content, same explorations.

REFINE builder works through receiving prompts. Pictures the original builder's intended page. Sees where the vision shows through (opening, dark inversion). Resonates with the impulse about the "clearing" zone. Notes that their own scroll experience confirms the mid-section flatness.

The ONE thing: "Give the mid-sections distinct spatial signatures so the descent FEELS like moving through different rooms, not sliding down a uniform slope."

REFINE builder restructures mid-sections: introduces a 2-column grid for the failure modes comparison (section 3), gives the digressions asymmetric margins, adds a breathing transition before the igneous intrusion. Writes their own reflection (notes that the asymmetric margins for digressions worked better than expected, that the clearing zone is still unresolved).

### Final Gate Check
Quick gate check on refined artifact. 47/47 pass.

Orchestrator decision: abbreviated PA (2 auditors checking the mid-sections specifically). Both report improved flow. Weaver re-synthesizes (reading only the 2 new reports plus the previous 5 for continuity): verdict SHIP.

**Pipeline complete.** Total elapsed: ~3 hours across 5 windows (plus routing overhead).

---

## Context Allocation: The Budget That Matters

Each window has ~200K tokens of context. How that budget is allocated determines the quality of output. The generative principle: maximize raw material and creative headroom, minimize infrastructure.

### Window 1 (TC Derivation)
- 15% skill protocol (the pipeline itself)
- 10-30% raw content (the material)
- 7% identity files (the world's physics)
- **48-68% creative headroom** (thinking space)

The TC agent needs THINKING SPACE more than reference material. The derivation is creative work -- multi-axis questioning, tension evaluation, metaphor search, candidate testing. The protocol is the scaffold; the headroom is where the work happens.

### Window 2 (BUILD)
- 2% conviction brief (creative direction)
- 1% conventions brief (mechanical constraints)
- 10-30% raw content (the material)
- 15-20% explorations (creative reference)
- 4% mechanism catalog + components + identity (vocabulary)
- **43-68% creative headroom** (building space)

The builder needs BUILDING SPACE. The conviction brief is short by design (~100 lines) precisely so it doesn't consume context. The explorations are the largest reference load, selected by generative opposition to challenge the builder's instincts, not confirm them.

### Windows 3b (PA Auditors)
- Screenshots (loaded as images, variable token cost)
- 4 questions (~20 lines)
- Conviction brief Sections 1+4 (~32 lines)
- **~90% headroom** (perceptual engagement)

Auditors need almost NO reference material. Their job is to EXPERIENCE the page, not analyze it against specifications. The minimal context is deliberate -- more context means more analytical frames, which means less genuine perception.

### Window 3c (Weaver)
- 5 auditor reports (~50-80 lines each = ~300-400 total)
- Conviction brief (~100-120 lines)
- Builder's reflection (~20-35 sentences = ~40-70 lines)
- **~85% headroom** (synthesis space)

The Weaver needs the three perspectives (auditors, brief, reflection) and space to synthesize them. No other material.

### Window 5 (REFINE)
- Same as Window 2, PLUS:
- Previous builder's reflection (~40-70 lines)
- Weaver's creative direction (~25 lines)
- The existing artifact (which replaces the need for as much building headroom)
- Slightly less headroom (~35-60%) but richer creative context

The REFINE builder trades some headroom for the creative tissue from the previous cycle. This is the right trade -- the REFINE builder is building ON something, not FROM nothing.

---

## What Travels Between Windows: The Tissue Specification

### Boundary 1→2: TC to BUILD
| File | Contents | Lines | Carries |
|------|----------|-------|---------|
| `_tc-brief.md` | Conviction brief (6 sections + exploration rec) | ~100-120 | Creative direction, metaphor, calibration, opposition, arc, conditions, content map, exploration recommendation |

This is the ONLY tissue between Window 1 and Window 2. One file. ~100 lines. Everything the builder needs to WANT to create this page.

### Boundary 2→3: BUILD to EVALUATION
| File | Contents | Lines | Carries |
|------|----------|-------|---------|
| `output.html` | The HTML artifact | varies | The page itself |
| `_reflection.md` | 6-dimension reflection | ~40-70 | Builder's creative state |
| Screenshots | Captured by orchestrator before spawning auditors | N/A | Visual experience for auditors |

The artifact goes to BOTH the gate runner (3a) and the auditors (3b). The reflection goes to the Weaver (3c) only -- auditors must not see it (their perception must be independent).

### Boundary 3→Routing: EVALUATION to Orchestrator
| File | Contents | Lines | Carries |
|------|----------|-------|---------|
| `_gate-results.json` | Binary gate pass/fail | structured | Mechanical compliance |
| `_pa/auditor-[A-E].md` | Experiential prose | ~200-400 total | Auditor perceptions |
| `_pa/weaver-synthesis.md` | Portrait + direction + verdict | ~40-50 | Creative synthesis |

### Boundary Routing→5: Orchestrator to REFINE
| File | Contents | Lines | Carries |
|------|----------|-------|---------|
| `_tc-brief.md` | Conviction brief (unchanged) | ~100-120 | Original creative direction |
| `output.html` | The artifact (possibly mechanically fixed) | varies | The page to refine |
| `_reflection.md` | Original builder's reflection | ~40-70 | Creator's account |
| `_pa/weaver-synthesis.md` | Weaver's experience portrait + creative direction | ~40-50 | Artistic synthesis |
| Raw content | Unchanged | varies | The material |
| Explorations | Same recommendation | ~6,000-8,000 | Creative reference |

The REFINE builder sees the conviction brief (direction), the artifact (state), the reflection (creator's account), and the Weaver's direction (synthesis of auditor experience). This is rich tissue -- first-party creative state + third-party experiential synthesis + original creative direction.

**What the REFINE builder does NOT see:** gate results, individual auditor reports, fix lists, scores. The creative channel is kept clean.

---

## Edge Cases and Nuances

### 1. What If Window 1 Produces Zero Genuine Tension?

The TC skill's Addition Test may determine that the content has no genuine tension with the design system. This is valid -- some content is purely assembly territory.

In this case, the TC agent skips Phases 3-4 and outputs a simpler brief:
- World-description (without metaphor -- just the system's physics)
- Calibration (default ranges from identity files)
- Content map
- No opposition map, no compositional arc, no creative conditions

The builder receives this and produces a COMPETENT page using direct component assembly. The PA still runs (even competent pages deserve experiential evaluation) but the Weaver's verdict criteria are different -- SHIP is the expected outcome for assembly pages.

### 2. What If the Content Is Too Long for One Build Window?

For massive content (> 8,000 words, or > 30% of the builder's context window when combined with other materials):

**Option A: Multi-page architecture.** The TC agent identifies natural page boundaries in Phase 0C and produces a SEPARATE conviction brief for each page. Each page runs through its own Window 2. The TC agent also produces a UNIFYING note (~10 lines) that describes the shared palette, typography, and metaphor across pages.

**Option B: Segmented build.** A single conviction brief covers the full content, but the builder creates the page in two passes -- top half first, bottom half second, with a unifying pass at the end. This fits in one Window 2 but requires the builder to manage coherence manually.

Option A is preferred for genuinely long content (> 10,000 words). Option B works for borderline cases (6,000-10,000 words).

### 3. What If the REFINE Builder Needs Different Explorations?

The exploration recommendation comes from the TC agent and is specific to the ORIGINAL metaphor and tensions. The REFINE builder might discover that a different set of explorations would be more generative for their specific refinement task.

**Solution:** The REFINE builder may request exploration substitution from the orchestrator. The orchestrator (or TC agent in a lightweight re-consultation) can provide an updated recommendation based on the Weaver's creative direction. For example, if the Weaver says "the mid-sections need more spatial variation," the orchestrator might substitute in a bento-grid-heavy exploration.

In practice, this is rare. Most REFINE tasks work with the same explorations because the metaphor hasn't changed.

### 4. Where Does Responsive Design Fit?

Responsive design (768px breakpoint, mobile considerations) is checked in two places:

1. **Gate runner** -- programmatic checks for responsive breakpoints, mobile readability, viewport-specific layout
2. **PA auditors** -- screenshots at 768px are part of the standard capture; auditors experience the page at both widths

The BUILDER is responsible for responsive CSS during Window 2. The conviction brief's compositional arc should address responsive behavior when relevant ("The grid zone collapses to single-column at 768px -- the comparison becomes sequential, which loses some parallel power but gains readability"). The mechanism catalog includes responsive-specific mechanisms.

Responsive is NOT a separate window. It is part of the build and part of the evaluation.

### 5. Where Does Accessibility Fit?

WCAG 2.1 AA compliance is checked by the gate runner (contrast ratios, ARIA landmarks, heading hierarchy, keyboard navigation, focus indicators). The builder applies accessibility during Window 2 as part of the conventions brief's mechanical requirements.

Accessibility is NOT evaluated by the PA auditors. The auditors evaluate experiential perception, not compliance with accessibility standards. The separation is clean: gate runner handles accessibility; auditors handle experience.

### 6. What If the Generative Frame Collapses Back Into Compliance?

Three collapse points to monitor:

**Collapse Point 1: The conviction brief becomes a checklist.**
If the TC agent starts producing mechanism inventories, boundary-keyed CSS tables, or PERCEPTION CHECK lines in the conviction brief, the frame has collapsed. The test: could this brief produce a DIFFERENT page? If every line is a constraint, no -- it's a specification, not a conviction.

**Collapse Point 2: The auditors start counting.**
If auditors respond to experiential questions with "I see 4 different text styles" or "the background delta is approximately 12 RGB," the frame has collapsed. The auditors should describe EXPERIENCE ("the sections feel similar") not MEASUREMENT ("the backgrounds differ by a small amount").

**Collapse Point 3: The Weaver produces a fix list.**
If the Weaver's creative direction reads like "Fix: background delta in zone 2-3. Fix: stacked gap at section 4 boundary. Fix: typography uniformity in mid-sections," the frame has collapsed. The Weaver should produce DIRECTION ("RELEASE the mid-section uniformity -- let the layout vary") not CORRECTIONS.

### 7. Gate Runner vs. PA: Clean Separation

The gate runner and the PA must NEVER contaminate each other:

- Gate results NEVER reach auditors (auditors would shift from experiencing to verifying)
- Auditor responses NEVER reach the gate runner (the gate runner is programmatic, not interpretive)
- The Weaver sees auditor responses but NOT gate results (the Weaver's synthesis is creative, not mechanical)
- The orchestrator sees BOTH but uses them for ROUTING, not for combining into a single score

The only place both streams meet is the orchestrator's routing decision, and that decision is holistic (not arithmetic).

---

## What We Might Be Missing

### Gap 1: The Conventions Brief Is Underspecified

The conviction brief is fully designed (6 sections, ~100 lines). But the "conventions brief" -- the shorter document containing mechanical constraints -- is mentioned multiple times without a specification. What does it contain? How long is it? When is it produced?

**Recommendation:** The conventions brief should be a STANDARD document (~40-60 lines) that is produced by the orchestrator (not the TC agent) and contains:
- Container width: 940-960px
- Font families: Inter, Instrument Serif, JetBrains Mono
- Border weights: 1px, 3px, 4px
- Prohibited CSS: border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Color palette: the locked hex values
- Spacing scale: the quantized values
- WCAG requirements: contrast ratios, ARIA landmarks, heading hierarchy
- Responsive breakpoints: 768px, 375px

This document is the SAME for every page. It is the world's physics stated as specifications. The conviction brief is specific to THIS page; the conventions brief is universal.

### Gap 2: The Orchestrator's Role Is Under-Documented

The orchestrator makes critical routing decisions (SHIP/REFINE/RETHINK + gate results + PA scope after REFINE) but is described as if it's obvious. In practice, the orchestrator is the most complex agent in the pipeline because it holds the meta-level view.

**Recommendation:** Document the orchestrator's decision tree explicitly:
1. Spawn TC (Window 1)
2. Read TC output, spawn BUILD (Window 2)
3. After BUILD: take screenshots, spawn gate runner + 5 PA auditors in parallel
4. Wait for all 5 auditors, spawn Weaver
5. Read gate results + Weaver verdict, make routing decision
6. If routing to REFINE: decide PA scope for post-REFINE (quick gate / abbreviated PA / full PA)
7. After REFINE PA: if SHIP, done; if still REFINE, second REFINE cycle (max 2); if RETHINK, back to step 1

### Gap 3: The Exploration Recommendation's Dependency on Exploration Availability

The exploration recommendation assumes DD/OD/AD/CD HTML files exist and are available. If the exploration library is incomplete or the recommended explorations are very large, the recommendation may not fit in the builder's context window.

**Recommendation:** The TC agent's exploration recommendation should include LINE COUNTS and the orchestrator should verify that the total exploration load fits within the builder's context budget before spawning Window 2. If the recommended explorations exceed ~8,000 lines, the orchestrator trims (removes the wild card first, then the structural complement).

### Gap 4: No Explicit Protocol for RETHINK

The RETHINK path (Weaver says the metaphor isn't working) returns to Window 1, but with what constraints? Does the TC agent know which metaphor failed? Does it have access to the previous conviction brief? Does it know WHY the metaphor failed?

**Recommendation:** When routing to RETHINK, the orchestrator passes:
- The raw content (unchanged)
- The Weaver's one-sentence RETHINK reason
- The previous conviction brief's metaphor (for explicit exclusion -- "do NOT use geological stratigraphy")
- The previous builder's reflection dimension (f) UNRESOLVED (may contain clues about why the metaphor failed)

The TC agent runs the full pipeline again but with an explicit constraint: reject the previous metaphor.

### Gap 5: Multi-Cycle Reflection Accumulation

If the page goes through BUILD → REFINE → REFINE (2 cycles), there are now 3 reflections:
- `_reflection.md` (original builder)
- `_reflection-v2.md` (first REFINE builder)
- `_reflection-v3.md` (second REFINE builder)

The second REFINE builder receives both previous reflections. This is correct (each reflection carries unique creative intelligence) but the context cost accumulates (~120-210 lines of reflection across 3 iterations).

**Recommendation:** All reflections travel forward, but the REFINE builder reads them in reverse chronological order (most recent first). The most recent reflection is closest to the current state of the artifact.

### Gap 6: What Happens to the Explorations After Build?

The explorations are loaded into the BUILD and REFINE windows but are not used elsewhere. They consume 15-20% of the builder's context. After the build, they are discarded.

**Recommendation:** This is correct and intentional. Explorations serve the building process, not the evaluation process. They should NOT be loaded into PA auditor windows (would create analytical frames) or the Weaver window (would bias synthesis toward library patterns).

### Gap 7: The TC Agent's Phase 4 Output vs. the Conviction Brief

The TC skill's Phase 4 produces a transition table, pacing assessment, fractal consistency analysis, and component evaluation. But the conviction brief (Phase 4.5) deliberately OMITS these detailed outputs in favor of the experiential compositional arc.

Where does the Phase 4 work GO? It was produced by the TC agent during derivation but does not appear in the conviction brief.

**Recommendation:** The Phase 4 detailed work is the TC agent's THINKING, not its OUTPUT. It is visible in the TC agent's conversation (and could be saved to a `_tc-process.md` file for debugging) but it does not travel to the builder. The conviction brief is a DISTILLATION of Phase 4's thinking, not a summary of it. This is intentional: the builder should receive conviction, not process.

If debugging is needed (e.g., why did the TC agent choose this metaphor?), the orchestrator can request that the TC agent save its full Phase 1-4 process to `_tc-process.md`. But this file is for human review, not for the builder.

---

## Summary: The 7 Principles Embodied

1. **Processing over extraction** -- The TC agent PROCESSES the content through 14 axes, not extracts features. The builder PROCESSES the conviction brief through creative response, not extracts specifications. The auditors PROCESS the page through experience, not extract measurements.

2. **Raw material over summaries** -- The builder receives the RAW content alongside the conviction brief. The REFINE builder receives raw explorations (6,000-8,000 lines of actual HTML pages), not summaries of what those pages did. The auditors receive screenshots (raw visual experience), not descriptions of what the page looks like.

3. **Task determines mode** -- The TC agent's task is DERIVATION (creative). The builder's task is CREATION (generative). The gate runner's task is VERIFICATION (compliance). The auditors' task is EXPERIENCE (perceptual). The Weaver's task is SYNTHESIS (artistic). Each window's mode matches its task.

4. **Philosophy over specification** -- The conviction brief states "In this world, knowledge compresses under pressure" (philosophy), not "Use 4px borders for structural emphasis and reduce padding by 8px per zone" (specification). The calibration section states ranges (philosophy of compression), not thresholds (specification of minimums).

5. **Conviction over rules at every boundary** -- The conviction brief makes the builder WANT to create. The Weaver's creative direction makes the REFINE builder WANT to compose deeper. The receiving prompts make the REFINE builder INHABIT the previous builder's creative state. At no boundary does the tissue say "you must comply with the following."

6. **Opposition is fuel** -- The TC agent's Opposition Principle identifies where content FIGHTS the system. The exploration recommendation selects by GENERATIVE OPPOSITION. The Weaver's GAP identification names the distance between INTENT and ACHIEVEMENT. Opposition drives the creative energy at every stage.

7. **Each window optimized for its purpose** -- The TC window is optimized for THINKING (maximal headroom, minimal reference). The BUILD window is optimized for CREATING (balanced reference and headroom). The PA window is optimized for EXPERIENCING (minimal context, maximal perceptual freshness). The REFINE window is optimized for DEEPENING (rich tissue from previous cycle, plus creative reference).

---

**END OF HOLISTIC PROCESS DESIGN**
