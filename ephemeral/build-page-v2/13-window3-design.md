# Window 3 Design: REFINE

**Author:** window3-spec (Task #19)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## What Window 3 IS

A different Opus builder receives the artifact from Window 1, the evaluation results from Window 2, and the original builder's creative state. The REFINE builder creates an improved version of the page in a single pass.

Window 3 fires only when the routing decision is REFINE. If the routing is SHIP, Window 3 does not exist. If the routing is RETHINK, control returns to Window 1 with a different agent and excluded metaphor.

The historical evidence: the Yegge Gas Town live run achieved PA-05 2.0 -> 3.5 (+1.5) in a single REFINE cycle. This is the largest single-cycle improvement in the project's history. The REFINE builder who reads conviction + auditor feedback and builds from their own creative response produces more compositional value than any number of additional gate passes or process cycles.

---

## What the REFINE Builder Receives

### Complete File Manifest

| Order | File | Source | Purpose |
|-------|------|--------|---------|
| 1 | `{OUTPUT_DIR}/output.html` | Window 1 builder | The artifact to refine |
| 2a | `{OUTPUT_DIR}/_pa/auditor-A.md` | PA Auditor A | Experiential perception (standard mode) |
| 2b | `{OUTPUT_DIR}/_pa/auditor-B.md` | PA Auditor B | Experiential perception (standard mode) |
| 2* | `{OUTPUT_DIR}/_pa/weaver-synthesis.md` | Weaver | Synthesized creative direction (high-stakes mode ONLY -- replaces 2a/2b) |
| 3 | `{OUTPUT_DIR}/_reflection.md` | Window 1 builder | Creative state: conviction, alternatives, unresolved |
| 4 | `{OUTPUT_DIR}/_tc-brief.md` | Window 1 builder | The metaphor, world, calibration, arc, content map |
| 5 | `{OUTPUT_DIR}/_content.md` | Orchestrator | Raw content markdown |
| 6 | `design-system/compositional-core/grammar/mechanism-catalog.md` | Design system | Technique vocabulary |
| 7 | `design-system/compositional-core/components/components.css` | Design system | Base component library |
| 8 | `design-system/compositional-core/identity/prohibitions.md` | Design system | World physics |
| 9 | `design-system/compositional-core/vocabulary/tokens.css` | Design system | Design tokens |

### Standard Mode vs High-Stakes Mode

**Standard mode (2 auditors, no Weaver):** The REFINE builder receives both auditor reports raw. With only 2 reports (totaling ~80-120 lines of prose), no synthesis is needed. The REFINE builder does their own convergence/divergence detection, guided by the receiving principle.

**High-stakes mode (5 auditors + Weaver):** The REFINE builder receives the Weaver's synthesis ONLY, not individual auditor reports. The Weaver has already performed convergence detection, divergence detection, and creative reframing across 5 reports (~200-400 lines compressed to ~60 lines). Loading all 5 reports would consume context budget without adding signal the Weaver hasn't already captured.

---

## Reading Order and Why It Matters

### The Sequence

```
1. ARTIFACT (form own impression)
     |
     v -- 2-sentence checkpoint: what do you experience?
     |
2. AUDITOR REPORTS or WEAVER SYNTHESIS (experiential feedback)
     |
     v -- note convergence and divergence
     |
3. REFLECTION (previous builder's creative state)
     |
     v -- what excites you? what tension remains?
     |
4. CONVICTION BRIEF (the aspirational intent)
     |
     v -- this is what the page was trying to become
     |
5. CONTENT + VOCABULARY FILES (building materials)
     |
     v -- creative commitment: the ONE THING
     |
6. BUILD
```

### Why This Order, Not Another

**Artifact first.** The REFINE builder must form their OWN impression before anyone else's account enters context. If the auditor reports arrive first, the builder reads the page looking for the problems the auditors described. If the reflection arrives first, the builder reads the page through the original builder's eyes. The artifact-first sequence produces a genuine fresh perception that becomes the builder's anchor for all subsequent reading.

The 2-sentence checkpoint after reading the artifact locks this impression. It forces the builder to WRITE their perception before continuing, converting them from reader to author. Once written, this impression cannot be overwritten by incoming material -- it exists as the builder's first-party data.

**Auditor reports second.** The builder's fresh impression meets the auditors' fresh impressions. Two (or five, via the Weaver) independent perceptions of the same page. The builder triangulates: where does my impression agree with theirs? (The page's truth.) Where does it disagree? (The page's most interesting creative territory.)

**Reflection third.** After the builder has both their own impression and the auditors' impressions, the original builder's creative state provides INTENT. The builder now knows what the page IS (their impression), what it FEELS LIKE to others (auditor reports), and what it was TRYING TO BE (reflection). The gap between "trying to be" and "what it is" maps the creative territory.

**Conviction brief fourth.** The brief arrives last among creative documents because it carries the most authority. The metaphor, the world-description, the calibration ranges -- these are the original creative direction. If they arrive first, every subsequent reading is filtered through the brief's frame. Arriving fourth, the brief enters a context already rich with the builder's own creative engagement. It becomes one perspective among several, not the governing authority.

**Content + vocabulary fifth.** The builder re-reads the raw content with all creative context loaded. They see the content through the lens of what the page is, what the auditors felt, what the original builder intended, and what the brief described. Then the mechanism catalog and components CSS provide building tools. Conventions brief embedded last as mechanical constraints.

### Challenge: Is Artifact-First Actually Right?

The receiving protocol (13-receiving-protocol.md, Section "Window 5") specifies this order and provides the rationale. The adversarial review (15-process-adversarial.md, Section 7) compressed the entire receiving protocol to 5 lines. Both agree on the core principle: fresh perception first, creative direction last.

One could argue that the builder should read the REFLECTION first, because understanding the original builder's creative vision would make the artifact-reading more productive. But this is exactly the compliance trap: reading the reflection first converts the artifact from "a page to experience" into "an execution of someone's vision to evaluate." The builder would read the page looking for where the reflection's claims hold and where they don't -- analytical mode, not generative mode.

**Verdict: Artifact-first is correct.** The 2-sentence checkpoint enforces it structurally.

---

## The Receiving Principle (5 Lines, Embedded in Prompt)

```
RECEIVING PRINCIPLE:
1. Scroll through the page first. Write 2 sentences about what you experience.
2. Read the auditor reports. Note where they agree and where they diverge.
3. Read the previous builder's reflection. What excites you? What tension remains?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page? Start there.
```

### How Each Line Works

**Line 1: "Scroll through the page first."** The word "first" is doing critical work. It is a temporal instruction that prevents the builder from reading any other document before the artifact. "Write 2 sentences about what you experience" is the checkpoint -- the builder must produce output before proceeding. The word "experience" (not "observe," not "evaluate," not "analyze") activates perceptual processing.

**Line 2: "Note where they agree and where they diverge."** This does the Weaver's work in the builder's own context (standard mode). Convergence = the page's confirmed truth. Divergence = the page's creative territory. The instruction is analytical but in service of creative discovery -- "note" is lighter than "identify" or "catalog."

**Line 3: "What excites you?"** This is the anti-compliance activator. A compliance reader would ask "what needs to be fixed?" or "what should be maintained?" The question "what excites you?" converts the reflection from a constraint document into creative fuel. "What tension remains?" identifies the live creative territory -- the places where the original builder ran out of energy or time.

**Line 4: "This is what the page was trying to become."** The brief is framed as ASPIRATION, not SPECIFICATION. The page "was trying" -- past tense, suggesting incompleteness. The REFINE builder's job is not to make the page match the brief. It is to make the page become more of what it already is, using the brief as one source of direction.

**Line 5: "What is the ONE thing you want to do with this page?"** This concentrates creative energy. A builder given the Weaver's AMPLIFY + RELEASE + DEEPEN tries all three and does each shallowly. A builder given permission to choose ONE THING does it deeply. The receiving protocol (13-receiving-protocol.md, R-07) provides the full rationale: depth on one territory produces more compositional value than surface engagement with three.

### How the Principle Prevents Compliance Collapse

The compliance trap for the REFINE builder: reading auditor feedback as a fix list. "Auditor A says the mid-sections are flat" becomes "fix the mid-sections." The receiving principle prevents this at three points:

1. **The builder has their own impression first.** If the builder's impression says the mid-sections are fine, the auditor's feedback is a DISAGREEMENT, not a DIRECTIVE. The builder investigates the disagreement rather than executing the fix.

2. **"Note where they agree and where they diverge" frames auditor feedback as data, not instructions.** The builder is mapping the perceptual landscape, not receiving a punch list.

3. **"What is the ONE thing" gives the builder permission to NOT address everything.** If the auditors identified three issues and the builder's one thing addresses only one, that is correct behavior. The builder does their one thing deeply rather than three things shallowly.

### How the Principle Activates Generation

The generation activation is in the questions: "what you experience" (Line 1), "what excites you" (Line 3), "what is the ONE thing you WANT to do" (Line 5). These are generative prompts -- they ask the builder to produce creative commitments, not analytical assessments. The builder who answers these questions has entered a creative processing state before they write any CSS.

---

## The Agent Prompt

### What the Orchestrator Constructs

The orchestrator builds the REFINE builder's prompt by concatenating sections in the reading-order sequence. The prompt is structured so the builder encounters materials in the correct order and is forced to produce creative output at checkpoints.

### Prompt Template (Standard Mode, 2 Auditors)

```
You are building the second version of a page. A different builder created the first version.
Your job is not to fix problems. Your job is to make the page more of what it already is.

You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms,
and extend the metaphor's expression. You may NOT replace the metaphor itself or
violate the world-description.

RECEIVING PRINCIPLE:
1. Scroll through the page first. Write 2 sentences about what you experience.
2. Read the auditor reports. Note where they agree and where they diverge.
3. Read the previous builder's reflection. What excites you? What tension remains?
4. Read the conviction brief. This is what the page was trying to become.
5. What is the ONE thing you want to do with this page? Start there.

Follow this sequence exactly. Write each checkpoint response before proceeding.

---

STEP 1: THE PAGE

Read this file: {OUTPUT_DIR}/output.html

CHECKPOINT: Write 2 sentences about what you experience on this page.
Do not proceed until you have written them.

---

STEP 2: WHAT OTHERS EXPERIENCED

Read these files:
- {OUTPUT_DIR}/_pa/auditor-A.md
- {OUTPUT_DIR}/_pa/auditor-B.md

Note: Where do both auditors describe the same thing? (convergence = truth)
Where do they disagree or notice different things? (divergence = creative territory)

---

STEP 3: WHAT THE PREVIOUS BUILDER WAS REACHING FOR

Read this file: {OUTPUT_DIR}/_reflection.md

This is the previous builder's creative state -- what they were trying to make,
what roads they did not take, what tensions remain unresolved.

What excites you in this reflection? What tension is still alive?

---

STEP 4: THE CREATIVE DIRECTION

Read this file: {OUTPUT_DIR}/_tc-brief.md

This is the conviction brief -- the metaphor, the world, the calibration ranges,
the opposition map, the compositional arc. This is what the page was TRYING to become.
The page you scrolled through is what it ACTUALLY became.

The gap between aspiration and reality is not failure. It is your creative territory.

---

STEP 5: CONTENT + BUILDING MATERIALS

Re-read the content: {OUTPUT_DIR}/_content.md

Vocabulary files (these are tools, not instructions):
- design-system/compositional-core/grammar/mechanism-catalog.md
- design-system/compositional-core/components/components.css
- design-system/compositional-core/identity/prohibitions.md
- design-system/compositional-core/vocabulary/tokens.css

CONVENTIONS (mechanical constraints):
- Container: 940-960px
- Fonts: Inter (body), Instrument Serif (headings), JetBrains Mono (code)
- Borders: 1px (subtle), 3px (section), 4px (primary)
- Prohibited: border-radius, box-shadow, gradients, transforms, transitions (except opacity)
- Backgrounds: R >= G >= B on every background hex (warm palette)
- Adjacent zone backgrounds: >= 15 RGB difference (perceptible)
- Stacked gap at any boundary: <= 120px total
- Single margin/padding: <= 96px
- Characters per line: 45-80
- WCAG 2.1 AA contrast: >= 4.5:1 body text, >= 3:1 large text
- ARIA landmarks: at least header, main, footer
- Responsive: 768px breakpoint minimum
- Self-contained HTML: all CSS embedded, no external dependencies

---

CREATIVE COMMITMENT:

Before you write any HTML or CSS, state:
What is the ONE THING you want to do with this page?
Not three things. Not "address the auditor feedback." One thing that,
if you achieved it, would make you proud of your contribution.

---

BUILD:

Overwrite {OUTPUT_DIR}/output.html with your refined version.

After building, write your own 3-dimension reflection to {OUTPUT_DIR}/_reflection-v2.md:

CONVICTION: What were you trying to make? Where did you succeed and where did you fall short?
ALTERNATIVES: What roads did you not take, and why?
UNRESOLVED: What tension remains? What would you tell a third builder?

Your reflection is 15-20 sentences across all three dimensions.
```

### Prompt Template (High-Stakes Mode, 5 Auditors + Weaver)

The high-stakes variant is identical except Step 2:

```
STEP 2: CREATIVE DIRECTION FROM THE EVALUATION

Read this file: {OUTPUT_DIR}/_pa/weaver-synthesis.md

The Weaver listened to five people experience your page and wrote about what they
collectively felt. The Weaver's direction has territories: AMPLIFY (where the page
has momentum), RELEASE (where it holds too tight), DEEPEN (where it has unexplored room).

These are territories to enter, not instructions to follow. What you do in each
territory is yours.
```

Note: in high-stakes mode, the REFINE builder receives the Weaver synthesis INSTEAD of raw auditor reports. The Weaver has already done convergence/divergence detection and reframed findings as creative direction.

---

## The Framing: "Building a New Version" vs. "Fixing Problems"

### The Opening Line Matters

```
"Your job is not to fix problems. Your job is to make the page more of what it already is."
```

This single sentence sets the processing mode for the entire prompt. Two framings, two outcomes:

**"You are refining a page that has issues..."** -- activates DIAGNOSTIC mode. The builder reads the artifact looking for defects. Auditor reports become evidence of defects. The reflection becomes a confession of failures. Every piece of input is processed through "what went wrong?" The builder produces a corrected version.

**"You are making the page more of what it already is..."** -- activates GENERATIVE mode. The builder reads the artifact looking for its existing qualities. Auditor reports become descriptions of what those qualities feel like to others. The reflection becomes testimony from the creator about what was intended. Every piece of input is processed through "what does this page want to become?" The builder produces an evolved version.

The corrected version fixes problems. The evolved version finds new territory. The evidence from the Yegge Gas Town run: the REFINE builder who "read conviction + artistic direction only, never sees gates" produced a +1.5 PA-05 improvement. This builder was not fixing. They were building.

### Relationship Between Weaver Direction and Own Impression

In high-stakes mode, the Weaver's AMPLIFY/RELEASE/DEEPEN is the most compliance-adjacent input the REFINE builder receives. It maps dangerously well to a fix list:

- AMPLIFY X = "make X louder"
- RELEASE Y = "fix Y"
- DEEPEN Z = "add more at Z"

The receiving protocol (13-receiving-protocol.md, R-04) provides the full anti-compliance mechanism. In the v2 prompt, this is compressed to one sentence: "These are territories to enter, not instructions to follow."

The builder's own impression (from Step 1's checkpoint) is the tiebreaker. If the Weaver says RELEASE the mid-sections and the builder's impression says the mid-sections work, the builder investigates the disagreement. Their own impression is sovereign. They may still end up working on the mid-sections, but from their own creative conviction, not from Weaver compliance.

---

## What the REFINE Builder Produces

### Required Outputs

1. **`{OUTPUT_DIR}/output.html`** (overwritten) -- The refined page. Complete, self-contained HTML with embedded CSS. The builder overwrites the Window 1 output in place.

2. **`{OUTPUT_DIR}/_reflection-v2.md`** (~15-20 sentences) -- The REFINE builder's own 3-dimension reflection:
   - **CONVICTION:** What were you trying to make? Where did you succeed and fall short?
   - **ALTERNATIVES:** What roads did you not take, and why?
   - **UNRESOLVED:** What tension remains? What would you tell a third builder?

### Does the REFINE Builder Update the Conviction Brief?

**No.** The conviction brief is the Window 1 builder's document. It captures the ORIGINAL creative direction: the metaphor, the world, the calibration. The REFINE builder works WITHIN this world. They do not redefine it.

If the REFINE builder's creative vision diverges significantly from the conviction brief, this divergence is captured in their reflection (CONVICTION dimension: "I was trying to make..." which may differ from the brief). The brief remains as the archaeological record of the page's creative genesis.

### What About the Conviction Brief's Calibration Values?

The brief's calibration section lists hex values, spacing ranges, and type scales. The REFINE builder treats these as the palette they inherited, not as targets they must hit. If the REFINE builder changes a background hex from #F5F0E8 to #F0E8DA, their reflection should note why -- but the conviction brief is not updated.

---

## Mechanical Fix vs. Creative Refine

### The Routing Logic (from 03-skill-architecture.md, Section 6)

When the routing decision is REFINE, the orchestrator checks whether any essential gates ALSO failed:

```
IF auditors say REFINE AND 0 gate failures:
  -> Spawn Window 3 REFINE builder directly

IF auditors say REFINE AND MECHANICAL gate failures only:
  -> Orchestrator patches CSS in-window (Edit tool, no agent)
  -> Spawn Window 3 REFINE builder
  -> The REFINE builder receives the PATCHED artifact

IF auditors say REFINE AND STRUCTURAL gate failures:
  -> Orchestrator patches MECHANICAL failures first
  -> Spawn Window 3 REFINE builder (structural issues are compositional -- the builder handles them)
```

### How the REFINE Builder Knows About CSS Patches

**They don't need to know.** The orchestrator patches mechanical CSS values (wrong hex, padding exceeds threshold, missing ARIA landmark) before the REFINE builder sees the artifact. The REFINE builder reads the PATCHED version as the starting point. The patches are invisible -- they changed a `#F0F0F0` to `#F0EBE3` or a `padding: 104px` to `padding: 96px`. These are value corrections, not compositional decisions.

The gate results are NOT loaded into the REFINE builder's prompt. The REFINE builder never sees gate failures, pass/fail status, or threshold values. Gates and creative refinement exist in completely separate channels. The orchestrator handles gate compliance. The REFINE builder handles composition.

### If Gates Failed AND Weaver Said SHIP

```
IF Weaver/auditors say SHIP AND MECHANICAL gate failures:
  -> Orchestrator patches CSS values directly
  -> Re-runs failed gates
  -> SHIP (no Window 3 needed)
```

The Weaver/auditors judged the page as compositionally complete. The gate failures are mechanical (wrong values). The orchestrator fixes the values and ships. No REFINE builder is spawned.

---

## Scope of the REFINE Builder's Authority

### What the REFINE Builder MAY Do

- Restructure HTML sections (reorder, merge, split, add)
- Rewrite CSS substantially (new grid layouts, different spacing systems, new typography hierarchy)
- Change layout approaches (full-width to columns, linear to grid, stacked to island-isolated)
- Introduce new mechanisms from the catalog (or invent new ones)
- Extend the metaphor's expression (find new ways the metaphor manifests in CSS)
- Override the Window 1 builder's specific CSS decisions
- Create new HTML elements, new sections, new visual structures
- Change the compositional arc's pacing (if the content supports it)

### What the REFINE Builder May NOT Do

- **Replace the metaphor.** If the page is "geological descent," the REFINE builder works within geological descent. They do not introduce a new metaphor. If the metaphor is fundamentally wrong for the content, the routing should have been RETHINK, not REFINE.

- **Violate the world-description.** If the world-description says "every surface is sharp and flat," the builder does not introduce border-radius. The world's physics are inherited.

- **Ignore the conviction brief's opposition map.** The opposition map names the genuine tensions in the content. The REFINE builder may resolve these tensions differently than the original builder, but they may not pretend the tensions don't exist.

### The Key Permission: Creative Override

The REFINE builder is not a copy-editor. They are a co-author. The prompt says "You may restructure HTML, rewrite CSS, change layouts, introduce new mechanisms, and extend the metaphor's expression." This is broad creative authority within the constraints of the inherited metaphor and world.

The evidence that this authority is necessary: in the Yegge Gas Town run, the REFINE builder achieved +1.5 PA-05 by making substantial compositional changes, not by tweaking hex values. Creative authority in REFINE is what transforms a FLOOR page into a CEILING page.

---

## Post-REFINE: What Happens Next

### The Orchestrator's Sequence After Window 3

1. **Validate outputs:** `output.html` exists and was modified (timestamp or diff check). `_reflection-v2.md` exists and is > 50 bytes.

2. **New screenshots:** Same protocol as Section 2 of the skill architecture. 3 viewports, cold look + scroll-through. Saved to `{OUTPUT_DIR}/_screenshots-v2/` (or overwrite `_screenshots/`).

3. **Re-run essential gates** on the refined artifact. Same ~28 gates as the initial run.

4. **If gates pass:** SHIP. Report to user.

5. **If MECHANICAL gate failures:** Orchestrator patches CSS directly (Edit tool). Re-runs failed gates. SHIP.

6. **If STRUCTURAL gate failures:** Log for user. Ship with advisory note.

### Second PA Cycle After REFINE

**NOT automatic.** The orchestrator does NOT run another PA by default. The reasoning: the REFINE builder is trusted with broad creative authority. Running another PA after every REFINE creates a loop (PA -> REFINE -> PA -> REFINE...) that the architecture explicitly prevents. One REFINE cycle is the default.

**Exception:** If the user explicitly requests it, the orchestrator runs an abbreviated PA: 2 auditors, 10 questions each, same protocol as the initial evaluation.

### If a Second REFINE Is Requested

The user looks at the shipped page and says "this needs more work." The user invokes a second cycle (explicit escalation). The orchestrator:

1. Takes new screenshots
2. Runs gates + 2 PA auditors
3. Spawns a THIRD Opus builder (different from both previous builders)
4. This builder receives: the current artifact, the current auditor reports, BOTH reflections (`_reflection.md` from Window 1, `_reflection-v2.md` from Window 3), the conviction brief, content, vocabulary files
5. Maximum 2 REFINE cycles total. If the user wants more, they must manually intervene.

---

## Context Budget for the REFINE Builder

| Content | Lines | % of ~200K tokens |
|---------|-------|-------------------|
| Prompt scaffolding (receiving principle, steps, conventions) | ~100 | ~2% |
| HTML artifact (output.html) | 800-2000 | 13-32% |
| Auditor reports (2 reports, standard) | ~80-120 | ~2% |
| OR Weaver synthesis (high-stakes) | ~60 | ~1% |
| Reflection | ~20 | <1% |
| Conviction brief | ~50 | ~1% |
| Raw content | varies | 10-30% |
| Mechanism catalog | ~750 | ~12% |
| Components CSS | ~944 | ~15% |
| Identity files | ~600 | ~10% |
| **Creative headroom** | -- | **~15-45%** |

The REFINE builder's context is tighter than the Window 1 builder's because it carries the existing artifact, auditor reports, and reflection in addition to the vocabulary files. For large content + large artifacts, creative headroom may drop to ~15%. This is acceptable because the REFINE builder is MODIFYING, not creating from scratch -- they need less blank-canvas thinking space and more material-engagement space.

If context becomes critical (very large content files), the orchestrator can omit the mechanism catalog and components CSS for the REFINE builder. The REFINE builder has the existing artifact's CSS as their vocabulary reference -- they see what mechanisms the Window 1 builder already used and can extend or modify them without consulting the catalog.

---

## Addressing the Adversarial Challenges

### "5-line receiving principle can't prevent compliance collapse" (Process Adversarial, Section 7)

The adversarial review argues that the 524-line receiving protocol was reduced to 5 lines, and 5 lines cannot prevent compliance collapse as effectively.

**Response:** The 5 lines work because they are OPERATIONALLY EMBEDDED, not theoretically justified. The builder encounters them at the moment of action. The 524-line protocol was a design rationale document that no agent ever read in full. The 5 lines are instructions the agent follows step by step. The compliance prevention lives in the SEQUENCE (artifact first, constraints last) and the CHECKPOINTS (2-sentence impression, ONE THING commitment), not in the volume of anti-compliance reasoning.

The structural enforcement -- placing the artifact before auditor reports in the prompt, placing conventions last, requiring written checkpoints -- does more compliance prevention than any amount of explanatory prose.

### "The REFINE builder will read auditor reports as a fix list" (Receiving Protocol, Section on Window 5)

**Response:** Three structural mechanisms prevent this:

1. **The builder has their own impression before auditor reports arrive.** They are not reading a blank critique of an unknown page. They are reading someone else's experience of a page they have already experienced themselves.

2. **Line 2 says "note where they agree and where they diverge," not "list the issues to fix."** This is an analytical instruction in service of creative discovery, not a diagnostic instruction.

3. **Line 5 says "what is the ONE thing you WANT to do."** "Want" is a generative word. A fix list produces "what you NEED to do." The one-thing constraint further prevents fix-list behavior -- you cannot fix-list one thing.

### "A different builder loses the original builder's creative state" (General concern)

**Response:** The 3-dimension reflection preserves creative state at the level that matters: CONVICTION (what they were trying to make), ALTERNATIVES (roads not taken -- creative options still live), UNRESOLVED (tensions that need a fresh perspective). The lost dimensions from the 6-dimension protocol (SURPRISES, IMPULSES, EXPERIENCE-as-separate) provided color but not direction.

The REFINE builder does not need to perfectly replicate the original builder's creative state. They need to UNDERSTAND IT well enough to build on it. The conviction dimension tells them what world they are in. The alternatives dimension tells them what roads are still available. The unresolved dimension tells them where the creative energy is concentrated. This is sufficient for creative continuity.

### "One REFINE cycle may not be enough" (Process Adversarial, Section 8)

**Response:** The evidence says one cycle captures most available improvement (2.0 -> 3.5 in the live run). The architecture provides escalation: the user can request a second cycle. Automatic multi-cycle iteration optimizes for pipeline metrics, not user judgment. The user sees the page and decides. This is a feature.

---

## Summary: Window 3 in 10 Sentences

1. Window 3 fires only on REFINE routing. It is not automatic.
2. A different Opus builder receives the artifact, auditor reports (or Weaver synthesis), reflection, and conviction brief -- in that order.
3. The builder reads the artifact first and writes a 2-sentence impression before seeing anything else.
4. Auditor reports are read as experiential data, not a fix list, guided by "note where they agree and diverge."
5. The reflection is read as creative testimony from a peer, not constraints from an authority.
6. The conviction brief arrives last among creative documents to prevent it from governing the builder's perception.
7. The builder commits to ONE THING before writing CSS.
8. The builder has full creative authority: restructure, rewrite, extend -- but cannot replace the metaphor.
9. The builder produces a refined `output.html` (overwriting) and a new `_reflection-v2.md`.
10. After REFINE, the orchestrator re-runs gates, patches mechanical failures if needed, and ships. No automatic second PA.

---

**END OF WINDOW 3 DESIGN**
