# Fix Cycle Compositional Degradation Analysis

**Author:** fix-cycle-analysis (Opus 4.6)
**Date:** 2026-02-20
**Task:** Analyze how fix cycles strip compositional context and design a protocol to prevent it

---

## Section 1: Current Fix Cycle Assessment

### What SKILL.md Step 7 Actually Says

The fix cycle (SKILL.md lines 355-411) has three structural components:

**7.1 Fix Instruction Template** (lines 363-387):
The template has five sections:
1. Gate Failures -- "structured, with specific CSS"
2. Compositional Context -- references boundary direction, channel status, conventions brief section
3. PA Top-5 Issues -- "directional, not prescriptive"
4. Tier 5 Gaps -- question-level with implication
5. DO NOT TOUCH -- protected elements

**7.2 Builder Framing** (lines 389-393):
One sentence: "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions."

**7.3 Re-Verify** (lines 395-401):
Re-run gates, re-capture screenshots, deploy 2 PA auditors (reduced from 9).

### Assessment: Mixed -- Partially Compositional, Partially Mechanical

**What the template DOES include (compositional):**
- Section 2 "Compositional Context" references boundary direction from transition table
- Section 2 mentions which channels shift and which are missing
- Section 2 includes a conventions-brief section reference
- The worked example is compositional: "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten)."
- PA issues are "directional, not prescriptive" (good)
- Builder framing says "re-read conviction statement"

**What the template DOES NOT include (gaps):**
- No TC brief re-invocation. The _tc-brief.md (metaphor, zones, tensions, mechanisms) is never mentioned in fix instructions
- No distinction between fix types. All fixes use the same template whether they are hex-value changes or metaphor-expression issues
- No builder self-assessment requirement before fixing (no "before you change anything, scroll the page and describe what you see")
- No fractal echo table re-read. Only conviction statement and transition table are mentioned
- No mechanism catalog re-consultation. A fix that changes border patterns needs the builder to revisit grammar/mechanism-catalog.md, but nothing triggers this
- No "what is working" assessment. The DO NOT TOUCH section protects elements, but nothing asks the builder to articulate WHY those elements work
- No fix log requirement. The builder updates _build-log.md and _cascade-value-table.md but there is no structured "fix reflection" that captures what changed and why

**The critical gap:** The template is better than a pure checklist (it includes compositional context), but the context is PASSIVE. It is presented as information the builder receives, not as a process the builder executes. The builder can read "Planned: DEEPENING" and still apply the fix mechanically by changing a single hex value.

### Comparison with the Remediation Prompt (File 10)

The remediation prompt (`ephemeral/flagship-audit/10-REMEDIATION-PROMPT.md`, 301 lines) is the gold standard for fix instructions. Compare:

| Dimension | SKILL.md Fix Template | Remediation Prompt (File 10) |
|-----------|----------------------|------------------------------|
| Structure | Template with blank sections to fill | Complete recipe with exact CSS |
| CSS specificity | "CSS fix" (unspecified) | Exact selectors, properties, values, line numbers |
| Perception thresholds | Not mentioned in fix template | 7-row threshold table at top of document |
| Phase structure | Single flat list of failures | 6 sequential phases with perception checks |
| Verification | "Re-run gates" (after all fixes) | Perception check after EACH phase |
| Metaphor context | "Re-read conventions-brief Section N" | "Every difference serves the Assay Laboratory metaphor: raw variety -> analytical pressure -> refined unity" |
| WHY explanations | Template says to include "compositional reasoning" | Every CSS block has **WHY:** explaining compositional purpose |
| DO NOT TOUCH | List of protected elements | Explicit: "Do NOT change HTML structure, container width, font families, spacing contour" |

**The remediation prompt is a RECIPE. The SKILL.md fix template is a TEMPLATE FOR MAKING A RECIPE.** The gap is that the orchestrator must fill in the template -- and the orchestrator is not the builder. The orchestrator fills it with gate data (mechanical) and PA quotes (perceptual), but the compositional reasoning that connects them is often thin.

### Comparison with Recipe Remediation (File 08)

The recipe-format remediation (`ephemeral/remediation-audit/08-recipe-remediation.md`, 832 lines) explicitly models itself on the Middle experiment's success formula. Its key structural innovation:

- **Phase-by-phase with perception checks.** Not "here are all the failures, fix them" but "fix backgrounds first, then check if you can SEE the change, then fix borders, then check again." Each phase builds on the previous one.
- **Exact find-and-replace instructions.** "Find this CSS block (around line 113). Replace with:" -- zero ambiguity about where to make changes.
- **WHY after every CSS block.** Not just "fix bg delta" but "Adjacent sections now differ by 10-18 RGB points instead of 2-6. The human eye can actually SEE the zone transitions. The metaphor arc is preserved: Zone 1 = warm variety, Zone 2 = cool convergence, Zone 3 = unified warmth."

**The recipe format explicitly prevents checklist degradation** because the builder cannot skip context -- the WHY is interspersed with the CSS, not in a separate "context" section that can be scrolled past.

---

## Section 2: Context Decay Model

### Builder Context at Initial Build Completion

After the initial build (Step 3), the builder's context contains:

1. **TC brief** (~50 lines) -- metaphor, zone architecture, tensions, mechanisms, CSS directions
2. **Conventions brief** (~545 lines) -- world model, perception physics, multi-coherence rules
3. **Content file** (variable) -- the actual material being designed
4. **Reference files** (consulted as needed) -- mechanism catalog, components.css, tokens.css, prohibitions.md
5. **Builder's own output:**
   - Conviction statement (metaphor, zones, coherence direction)
   - Transition table (planned values per boundary)
   - Fractal echo table (pattern at each scale)
   - Override log (deviations from defaults with reasoning)
   - Midpoint observation (what worked, what was weak)
   - 5-question self-assessment

**Total active compositional context:** ~700-800 lines of internalized design reasoning.

### What Fix Instructions ADD to Context

The fix instruction file (`_fixes/fix-instructions-cycle-N.md`) adds:

1. Gate failure JSON entries with measured values and thresholds (~5-10 lines per failure)
2. Compositional context per failure (~3-5 lines per failure, referencing transition table and conventions brief)
3. PA top-5 issues with auditor quotes (~5-8 lines per issue)
4. Tier 5 gaps (~2-3 lines per gap)
5. DO NOT TOUCH list (~5-10 lines)

**Total fix instruction size:** ~60-120 lines.

### What Fix Instructions PUSH OUT of Context

This is the critical question. The fix instructions do not formally push anything out, but **attention economics** do:

1. **Recency bias.** The fix instructions are the MOST RECENT thing the builder reads. They become the primary task framing. The TC brief (read at the start of the build, potentially 45+ minutes ago) has faded below the attention horizon.

2. **Problem framing.** Fix instructions frame the task as "fix these failures" -- a problem-solving frame. The original build was framed as "compose a page" -- a creative frame. The shift from creative to problem-solving mode changes which context the builder activates.

3. **Specificity gradient.** Gate failures come with SPECIFIC measured values (bg delta = 8 RGB, threshold = 15 RGB). PA issues come with SPECIFIC auditor quotes. The TC brief's compositional direction ("geological strata metaphor implies visible layer boundaries") is ABSTRACT. Specific overrides abstract in attention competition.

4. **Continuation bias.** The builder's CSS already exists. Fix instructions trigger continuation bias: "change this one value, keep everything else the same." The metaphor, zone architecture, and coherence direction are not re-invoked, so the builder operates at the level of individual properties, not compositional relationships.

### Context Decay Timeline

```
Build Start:    [TC Brief] [Conventions] [Content] [References]
                ^^^^^^^^^ Full compositional context active

Build Complete: [TC Brief fading] [Conventions internalized] [Content known] [Builder's own plans active]
                ^^^^^^^^^^^^^^^^ Compositional memory partially externalized into build log

Fix Cycle 1:    [Fix Instructions active] [Build log consulted] [TC Brief forgotten] [Conventions forgotten]
                ^^^^^^^^^^^^^^^^^^^^^ Problem-solving frame dominates

Fix Cycle 2:    [Fix Instructions active] [Previous fix results] [Everything else gone]
                ^^^^^^^^^^^^^^^^^^^^^ Pure mechanical compliance

Fix Cycle 3:    [Fix Instructions active] [Diminishing returns]
                ^^^^^^^^^^^^^^^^^^^^^ Checklist-following mode
```

**The critical transition is Build Complete -> Fix Cycle 1.** This is where the builder's frame shifts from "I am composing" to "I am fixing." By Fix Cycle 2, the composition is fully detached -- the builder is operating on symptoms without awareness of the compositional whole.

### Evidence from Actual Fix Cycles

The Flagship remediation execution (`ephemeral/flagship-remediation/`) used a different approach: a fresh Opus builder received the remediation prompt (File 10, recipe format). This is NOT the normal fix cycle -- it was a standalone remediation, not the SKILL.md Step 7 protocol.

The SKILL.md Step 7 protocol has never been tested in production. The only actual fix cycle experience is from the Middle experiment (zero fix cycles needed) and the Flagship experiment (which failed badly enough to require full remediation, not a fix cycle).

**This means the fix cycle protocol is entirely theoretical.** Its design is reasonable but untested. The context decay model above is predictive, not observed.

---

## Section 3: Compositional Fix Protocol

### Redesigned Fix Instruction Template

The key insight is that fix instructions must be **interleaved with compositional context**, not separated from it. The remediation recipe (File 08) succeeded because WHY was next to WHAT. The SKILL.md template fails because context is in a separate section that can be scrolled past.

**New fix instruction template for `[output-dir]/_fixes/fix-instructions-cycle-N.md`:**

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Step 0: CONTEXT RELOAD (mandatory -- read before ANY changes)

Before touching any CSS, do these three things:

1. Re-read your conviction statement and transition table in _build-log.md.
   Your metaphor is: [PASTE METAPHOR FROM BUILD LOG].
   Your coherence direction is: [PASTE DIRECTION FROM BUILD LOG].

2. Re-read _tc-brief.md Section 2 (ZONE ARCHITECTURE) and Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS).
   Your zones are: [PASTE ZONE NAMES AND BOUNDARIES].

3. Scroll the page at 1440px, normal speed. In _build-log.md, write a 3-sentence
   FIX CYCLE N OBSERVATION describing: (a) what currently works best,
   (b) what feels weakest, (c) whether the metaphor is still perceptible.

### Gate Failures (structured, phased)

[Group failures by zone boundary, not by gate number]

**Boundary Z2->Z3 failures:**

- SC-09 FAIL: bg delta 8 RGB (threshold: 15 RGB)
  YOUR PLANNED DIRECTION at this boundary: DEEPENING (from transition table)
  DEEPENING means: bg darkens, spacing compresses, borders thicken
  FIX: Change Z3 bg from #FEFCFA to #F0EBE3 (delta increases to 18 RGB)
  WHY: Your metaphor requires this boundary to feel like entering deeper territory.
  The bg must darken, not lighten, to maintain DEEPENING direction.
  DO NOT lighten Z2's bg to create delta -- that breaks the Z1->Z2 transition.

- SC-13 FAIL: only 2 channels shift at Z2->Z3 (threshold: 3)
  CURRENTLY SHIFTING: Chromatic (bg), Spatial (padding)
  MISSING: Typographic (font-size identical), Structural (no border change)
  FIX DIRECTION: Add a typographic shift (h2 weight or font-size) AND
  a structural element (border-left or divider amplification) at this boundary.
  The specific values are yours to choose -- they must serve your metaphor.

**Boundary Z3->Z4 failures:**
[Same format]

### PA Issues (compositional, not prescriptive)

[Each issue includes the auditor quote, the compositional diagnosis, and a direction]

1. [WOULD-NOT-SHIP] PA-05 Auditor A: "The middle sections feel monotone --
   I scroll through three screenfuls that look identical."
   COMPOSITIONAL DIAGNOSIS: Your transition table planned 3 distinct transition
   types (SMOOTH, BRIDGE, BREATHING) but the build only uses SMOOTH. The
   BRIDGE at Z2->Z3 and BREATHING at Z3->Z4 are not perceptible.
   DIRECTION: Re-read conventions-brief.md Section 7 (TRANSITION GRAMMAR).
   Your Z2->Z3 boundary needs a BRIDGE treatment: 25+ RGB bg shift, tinted
   breathing band, typography weight shift. Your Z3->Z4 needs BREATHING:
   structural border (3-4px), generous spacing (64-80px).
   DO NOT: Flatten the transitions to uniformity. The variety of transition
   types IS the compositional signal.

2. [WOULD-NOT-SHIP] PA-31 Auditor C: "There is a 250px blank area between
   section 6 and section 7."
   COMPOSITIONAL DIAGNOSIS: Stacked gap: section-6 padding-bottom (80px) +
   divider-breathing margin (80px) + section-7 padding-top (96px) = 256px.
   Individual values comply with S-09 (<= 96px) but stacked total violates
   120px cap.
   FIX: Reduce divider-breathing margin from 80px to 48px. This preserves
   the BREATHING transition character while eliminating the void.
   WHY: A BREATHING transition should feel like a rest, not like the page
   is broken. The 3-4px border at this divider already signals the pause --
   the spacing should support, not overwhelm.

### Tier 5 Gaps
- PA-62: NO -- "The coherence direction is not sustained through the middle third."
  IMPLICATION: Multi-coherence degrades in Zone 2. Re-read your transition
  table for Z2 boundaries. Check that bg, typography, and borders all shift
  in the same semantic direction at every boundary within Zone 2.

### DO NOT TOUCH (verified working)
- Header/footer dark slab inversion (PA auditors rated WOULD-SHIP)
- Z1 generous spacing (Auditor D: "opening feels welcoming")
- Drop cap in S1 (Auditor A: "strong editorial signal")
- Component block variant colors (3 distinct variants confirmed)

### After ALL Fixes: Self-Check

Before submitting, re-read your conviction statement one more time.
Answer YES or NO to each:
- Does each zone boundary still shift >= 3 channels in my declared direction?
- Does my metaphor still drive the CSS, or have I drifted to mechanical compliance?
- Have I preserved the elements in DO NOT TOUCH?
- Is there still at least one designed moment below the midpoint?

Update _build-log.md with FIX CYCLE N REFLECTION: what you changed, what you
preserved, whether the metaphor is stronger or weaker after fixes.
Update _cascade-value-table.md with new computed values at changed boundaries.
```

### Key Design Principles of the New Template

1. **Context reload is Step 0, mandatory, and active.** Not "re-read your conviction" (passive) but "re-read, PASTE the metaphor, SCROLL and OBSERVE, WRITE an observation" (active). Forces the builder to re-enter the compositional frame before operating on symptoms.

2. **Failures grouped by boundary, not by gate.** The builder thinks boundary-by-boundary during the initial build. Fix instructions should maintain that frame. Grouping by gate number (SC-09, SC-10, SC-13) fragments the builder's attention across the page. Grouping by boundary (Z2->Z3 failures) keeps the builder focused on one compositional event at a time.

3. **Every fix includes WHY.** The remediation recipe proved this works. WHY is not in a separate "context" section -- it is interspersed with the CSS, so the builder cannot skip it.

4. **Coherence direction stated at every failure.** Not just "SC-09 FAIL at Z2->Z3" but "SC-09 FAIL at Z2->Z3. YOUR PLANNED DIRECTION: DEEPENING. DEEPENING means: bg darkens, spacing compresses, borders thicken." This re-invokes the semantic frame that the builder established in the transition table.

5. **PA issues include compositional diagnosis.** Not just the auditor quote and a direction, but a diagnosis that connects the perceptual observation to the builder's own plans. "Your transition table planned 3 distinct transition types but the build only uses SMOOTH" bridges from PA (perceptual) to TC (compositional).

6. **Post-fix self-check requires compositional reflection.** Not just "re-run gates" but "answer 4 questions about your compositional intent." This prevents the builder from submitting mechanical fixes without assessing whether they serve the composition.

---

## Section 4: Fix Type Classification

### Three Types of Fix

Not all fixes are the same. The current SKILL.md treats every fix identically. This classification routes different fix types through different processes:

**TYPE A: Mechanical (no compositional context needed)**

- What: Exact CSS value changes where the correct value is deterministic
- Examples: container width 1200px -> 960px, border-radius 4px -> 0, pure black #000 -> #1A1A1A, adding skip link, fixing ARIA landmark count
- Context needed: None -- the correct value is dictated by soul constraints or accessibility requirements
- Instruction format: "Change `max-width: 1200px` to `max-width: 960px` in `.page-container`"
- Route to: Builder directly, no context reload needed
- Risk: Zero compositional degradation -- these are constraint compliance, not creative decisions

**TYPE B: Structural (TC brief re-read required)**

- What: Changes to zone boundaries, background deltas, multi-coherence channels, or border configurations
- Examples: bg delta < 15 RGB between zones, fewer than 3 channels shifting at boundary, stacked gap > 120px, missing border configurations
- Context needed: TC brief (zone architecture, metaphor-implied CSS directions) + transition table + coherence direction
- Instruction format: Boundary-grouped with direction, WHY, and specific CSS (as in the redesigned template above)
- Route to: Builder with TC brief re-read and Step 0 context reload
- Risk: Moderate -- the builder may fix the measurement without serving the composition. The WHY text prevents this.

**TYPE C: Compositional (full context re-invocation required)**

- What: Changes to metaphor expression, design direction, transition type selection, density arc, or fractal echo
- Examples: PA reports "monotone middle," "metaphor not perceptible without labels," "no designed moment below midpoint," Tier 5 failures on PA-60/61/62/63/65/67
- Context needed: Full TC brief + conventions brief Section 3-7 + builder's conviction statement + fractal echo table + mechanism catalog
- Instruction format: Compositional diagnosis + direction (not specific CSS). The builder must DERIVE the CSS from the compositional direction.
- Route to: Builder with full context re-invocation. If the builder cannot resolve after 1 attempt, consider TC RE-DERIVATION (spawn a new TC agent to reassess the composition)
- Risk: Highest -- these fixes touch the compositional architecture, not individual properties. A mechanical fix to a compositional problem makes it worse (the builder changes one value to satisfy a gate while breaking the holistic composition).

### Classification Decision Tree

```
Is the fix a soul constraint or accessibility violation?
  YES -> TYPE A (mechanical)
  NO  -> Does the fix involve a specific measurable threshold?
           YES -> Is the threshold at a zone boundary?
                    YES -> TYPE B (structural, boundary-focused)
                    NO  -> TYPE A (mechanical, property-level)
           NO  -> TYPE C (compositional)
```

### Routing Matrix

| Fix Type | TC Brief Re-read | Conventions Brief Section | Step 0 Context Reload | Post-Fix Reflection | Mechanism Catalog |
|----------|-----------------|--------------------------|----------------------|--------------------|--------------------|
| TYPE A | No | No | No | No | No |
| TYPE B | Yes (Sections 2, 5) | Yes (Section referenced in gate fix) | Yes | Yes | Only if border/structure fix |
| TYPE C | Yes (full re-read) | Yes (Sections 3-7) | Yes | Yes + conviction re-assessment | Yes |

---

## Section 5: TC Brief Re-Invocation Protocol

### When to Re-Invoke

The TC brief (`_tc-brief.md`) contains the compositional foundation: metaphor, zone architecture, tensions, mechanisms, and CSS directions. It is currently read ONCE at the start of the build and never referenced again.

**Re-invoke the TC brief when:**
1. Any TYPE B or TYPE C fix is needed (always)
2. The weaver reports metaphor is ANNOUNCED not STRUCTURAL (always TYPE C)
3. More than 2 gate failures at a single zone boundary (signals structural misalignment, not individual property error)
4. PA-05 sub-score DESIGNED < 3 (the composition itself is in question, not individual values)

**Do NOT re-invoke when:**
1. Only TYPE A fixes needed (soul compliance, accessibility)
2. Fix cycle 2-3 with only 1-2 minor failures remaining (the composition is sound, individual values need adjustment)

### How to Re-Invoke

**Lightweight re-invocation (TYPE B fixes):**
Include in fix instructions:
```
Re-read _tc-brief.md Section 2 (ZONE ARCHITECTURE) and Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS) before applying boundary fixes.
```
This is a pointer, not a re-read of the entire brief. It takes ~30 seconds and re-activates the zone-level reasoning.

**Full re-invocation (TYPE C fixes):**
Include in fix instructions:
```
FULL TC BRIEF RE-READ REQUIRED.
Read _tc-brief.md completely before applying ANY fixes.
After reading, write a 2-sentence METAPHOR RE-ASSESSMENT in _build-log.md:
(1) Is my current CSS expressing the metaphor structurally (through CSS properties)
    or only textually (through comments and labels)?
(2) Which zone boundary is the strongest metaphor expression, and which is the weakest?
Then address the weakest boundary FIRST.
```

**TC re-derivation (extreme -- PA-05 DESIGNED < 2):**
If the composition has fundamentally failed, a fix cycle cannot save it. Instead:
1. Spawn a NEW TC agent to re-analyze the content
2. The new TC agent reads the CURRENT HTML (not the original content) to understand what the builder actually produced
3. The new TC agent writes a REVISED tc-brief.md that works with the existing HTML structure
4. The builder reads the revised brief and applies compositional fixes

This is expensive (~15 min + agent cost) and should only be used when the verdict is REBUILD but the HTML structure is sound enough to salvage.

---

## Section 6: Specific SKILL.md Edits

### Edit 1: Add Fix Type Classification to Step 7.1

**Location:** SKILL.md Step 7.1 (lines 359-387)

**Current state:** Single fix instruction template for all fix types.

**Proposed edit:** Insert BEFORE the template (after "Compose a fix instruction file"):

```markdown
### 7.0 Classify Fixes

Before composing fix instructions, classify each failure:

| Type | Trigger | Builder Context | Template Section |
|------|---------|----------------|-----------------|
| A (Mechanical) | Soul violation, accessibility gap, non-boundary property error | None -- exact CSS value given | Gate Failures section only |
| B (Structural) | Threshold failure at a zone boundary (bg delta, multi-coherence, stacked gap, border count) | TC brief Sections 2+5, transition table | Full template with boundary grouping |
| C (Compositional) | PA reports monotone, metaphor not structural, no designed moment, Tier 5 failures | Full TC brief + conventions brief Sections 3-7 + mechanism catalog | Full template with compositional diagnosis |

If ANY Type C fixes exist: the fix instructions MUST include a Step 0 Context Reload.
If ONLY Type A fixes exist: skip Step 0 and send CSS-only instructions.
```

### Edit 2: Restructure the Fix Instruction Template

**Location:** SKILL.md Step 7.1 template (lines 363-387)

**Replace the current template with:**

```markdown
## FIX INSTRUCTIONS (Cycle N)

### Step 0: CONTEXT RELOAD [Include if ANY Type B or C fixes]

Before touching any CSS, do these three things:

1. Re-read your conviction statement and transition table in _build-log.md.
   Your metaphor is: [PASTE FROM BUILD LOG].
   Your coherence direction is: [PASTE FROM BUILD LOG].

2. [TYPE B] Re-read _tc-brief.md Sections 2 and 5.
   [TYPE C] Re-read _tc-brief.md completely.
   Your zones are: [PASTE ZONE NAMES].

3. Scroll the page at 1440px. Write a 3-sentence FIX CYCLE N OBSERVATION
   in _build-log.md: (a) what works best, (b) what feels weakest,
   (c) whether the metaphor is still perceptible.

### Gate Failures [Group by zone boundary, not gate number]

**Boundary Z[N]->Z[N+1] failures:**
- [GATE ID] FAIL: [measured] (threshold: [threshold])
  YOUR PLANNED DIRECTION: [direction from transition table]
  [DIRECTION] means: [what CSS properties should do in this direction]
  FIX: [specific CSS change]
  WHY: [compositional reasoning connecting fix to metaphor/direction]
  DO NOT: [what NOT to change at this boundary]

### PA Issues (compositional diagnosis)
1. [Severity] PA-XX Auditor [Letter]: "[exact quote]"
   COMPOSITIONAL DIAGNOSIS: [connect observation to builder's plans]
   DIRECTION: [what to change -- not specific CSS for Type C]
   Re-read: [specific conventions-brief section]

### Tier 5 Gaps
- PA-6N: NO -- "[reason]"
  IMPLICATION: [missing compositional property]
  Re-read: [specific TC brief or conventions brief section]

### DO NOT TOUCH (verified working)
- [Elements + why they work, from PA positive reports]

### After ALL Fixes: Self-Check
Answer YES/NO in _build-log.md (FIX CYCLE N REFLECTION):
- Each boundary still shifts >= 3 channels in my declared direction?
- My metaphor still drives CSS, not mechanical compliance?
- DO NOT TOUCH elements preserved?
- At least one designed moment below midpoint?

Update _cascade-value-table.md with new values at changed boundaries.
```

### Edit 3: Strengthen Builder Framing in Step 7.2

**Location:** SKILL.md Step 7.2 (lines 389-393)

**Current state:**
```
Send fix instructions with this framing: "Re-read your conviction statement
and transition table in _build-log.md before applying fixes. Each fix must
maintain your planned coherence directions."
```

**Replace with:**
```
Send fix instructions. The framing depends on fix types present:

TYPE A ONLY: "Apply these CSS corrections. Soul compliance fixes only --
no compositional changes needed."

TYPE B PRESENT: "Step 0 of the fix instructions requires a context reload
before ANY CSS changes. Complete Step 0 fully (including the 3-sentence
observation in _build-log.md) before proceeding to fixes."

TYPE C PRESENT: "This fix cycle requires compositional revision, not just
value changes. Complete the full TC brief re-read in Step 0 before ANY
CSS changes. Your fixes must address the compositional diagnosis, not
just the measured values. If a PA issue says 'monotone middle,' the fix
is not 'change one hex value' -- it is 'reconsider your transition type
selection at Zone 2 boundaries.'"
```

### Edit 4: Add Fix Cycle Memory to Step 7.3

**Location:** SKILL.md Step 7.3 (lines 395-401)

**Add after "Weaver re-synthesizes":**
```
Verify builder wrote FIX CYCLE N OBSERVATION and FIX CYCLE N REFLECTION
in _build-log.md. If missing: send builder back to complete them before
re-verification. These observations are the compositional memory anchor --
without them, subsequent fix cycles have no compositional continuity.
```

### Edit 5: Gate-Runner Fix Recipe Enhancement

**Location:** gate-runner.md (line 241-252) -- already partially implemented

The gate-runner already includes `brief_section` in its fix recipe format. Verify that the orchestrator actually USES this field when composing fix instructions. Currently the SKILL.md template says "[Paste _gate-results.json entries that FAILED]" -- this will include the brief_section reference IF the gate-runner writes it, but the template does not explicitly require the orchestrator to surface it.

**Add to the template header (after "### Gate Failures"):**
```
For each gate failure, include the brief_section reference from _gate-results.json.
This reference tells the builder WHICH conventions-brief section to re-read for
compositional context. Do not omit it -- it is the cheapest anti-degradation measure.
```

---

## Section 7: BLOCKING Issues

### BLOCKING-1: Fix Cycle Protocol is Untested

**Status:** BLOCKING -- the fix cycle protocol in SKILL.md Step 7 has NEVER been executed in production. The Middle experiment needed zero fix cycles. The Flagship experiment failed badly enough to require standalone remediation, bypassing the fix cycle entirely. The redesigned protocol in this document is based on analysis of what SHOULD work, not evidence of what DOES work.

**Resolution:** The first /build-page run that enters a fix cycle is a critical test. The orchestrator should log whether:
- Step 0 context reload was completed by the builder (or skipped)
- Fix instructions were grouped by boundary or by gate number
- Builder wrote FIX CYCLE OBSERVATION and REFLECTION in build log
- PA-05 score improved, stayed flat, or degraded after the fix cycle
- The compositional direction was maintained or drifted

This data will validate or invalidate the redesigned protocol.

### BLOCKING-2: Orchestrator is the Bottleneck

**Status:** BLOCKING -- The fix instruction quality depends entirely on the orchestrator's ability to (a) classify fix types correctly, (b) extract compositional context from the build log and TC brief, (c) compose boundary-grouped instructions with WHY text. If the orchestrator does this mechanically (copy-paste gate results, copy-paste PA quotes, add "see conventions brief"), the degradation happens at the orchestrator level, not the builder level.

**Resolution:** The redesigned template makes the orchestrator's job more structured (fill in [PASTE FROM BUILD LOG], extract boundary direction, write WHY text), which reduces but does not eliminate this risk. Consider adding a self-check for the orchestrator:
- Before sending fix instructions, verify: does each failure entry include a WHY that references the metaphor or coherence direction?
- If any WHY is missing, the orchestrator is operating mechanically. STOP and re-read the TC brief.

### BLOCKING-3: No TC Brief Reference in Current SKILL.md Fix Cycle

**Status:** BLOCKING -- The current SKILL.md Step 7 mentions _build-log.md (conviction statement, transition table) but NEVER mentions _tc-brief.md. The TC brief is the compositional foundation -- the metaphor, zone architecture, and mechanism selections. Fix instructions that do not reference the TC brief cannot maintain compositional context because the builder's internalized metaphor fades after the build.

**Resolution:** Add explicit TC brief re-read to fix instructions for TYPE B and TYPE C fixes (implemented in Edit 2 above).

---

## Appendix: Summary of All Proposed Changes

| Change | File | Lines | Type |
|--------|------|-------|------|
| Fix type classification (7.0) | SKILL.md | Before current 359 | NEW section |
| Restructured fix template (7.1) | SKILL.md | 363-387 | REPLACE |
| Type-dependent builder framing (7.2) | SKILL.md | 389-393 | REPLACE |
| Fix cycle memory verification (7.3) | SKILL.md | After 401 | INSERT |
| Gate-runner brief_section surfacing | SKILL.md | In template header | INSERT |
| Gate-runner already has brief_section | gate-runner.md | 241-252 | VERIFY (already present) |

**Net effect:** Fix instructions shift from a single template for all fixes to a classified system where:
- TYPE A fixes are fast and mechanical (no context overhead)
- TYPE B fixes include boundary-level compositional context (moderate overhead)
- TYPE C fixes require full compositional re-invocation (significant overhead, proportional to risk)

The core anti-degradation mechanism is **active context reload** (Step 0): the builder must re-read, re-paste, and re-observe before applying any structural or compositional fix. This converts "re-read your conviction statement" (passive, easily skipped) into "paste your metaphor, scroll the page, write 3 sentences" (active, produces observable artifacts that the orchestrator can verify).
