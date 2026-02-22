# 09 -- Fix Cycle Integrity Audit: Recipe-to-Checklist Degradation

**Date:** 2026-02-20
**Auditor:** fix-cycle-auditor (Opus)
**Scope:** Full pipeline fix cycle flow, end-to-end, with focus on compositional context loss
**Files Analyzed:**
- `~/.claude/skills/build-page/SKILL.md` (476 lines)
- `~/.claude/skills/tension-composition/SKILL.md` (~2,006 lines, Phase 4.5 focus)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (~881 lines, weaver protocol focus)
- `design-system/pipeline/conventions-brief.md` (565 lines)
- `ephemeral/pipeline-surgery/38-master-enrichment-trim-synthesis.md` (295 lines)

---

## 1. THE EXACT FIX CYCLE PATH (Traced with Line References)

### Step-by-step trace:

```
PA auditors report findings (9 independent reports)
       ↓
Weaver synthesizes into _pa-report.md
  - TOP-5 ISSUES with: auditor source, question ID, severity,
    exact auditor quote, scroll position, "actionable CSS-level feedback"
    (build-page SKILL.md lines 325-331)
       ↓
Orchestrator reads weaver report, verdict = FIX
       ↓
Orchestrator composes fix instruction file
  - _fixes/fix-instructions-cycle-N.md
  - build-page SKILL.md lines 366-393
       ↓
Orchestrator sends fix instructions to SAME builder agent
  - With framing: "Re-read _tc-brief.md AND your conviction statement
    and transition table in _build-log.md before applying fixes"
    (build-page SKILL.md lines 397-398)
       ↓
Builder reads instructions, applies fixes to output.html
       ↓
Orchestrator re-runs gates, re-captures screenshots
       ↓
Cycle 2-3: 2 PA auditors (A + C) with focused questions + Tier 5
       ↓
Weaver re-synthesizes
```

### What happens to compositional context at each step:

| Step | Compositional Context Status |
|------|------------------------------|
| PA auditors report | **ZERO.** Auditors are fresh-eyes. They describe PERCEPTUAL impressions. No compositional vocabulary. This is CORRECT -- fresh-eyes is non-negotiable. |
| Weaver synthesizes | **PARTIAL.** Weaver has gate results (measured values) + lock sheet (locked vs challengeable). The lock sheet preserves WHAT is locked but not WHY. Weaver protocol (lines 304-357) produces "actionable CSS-level feedback" -- this is inherently MECHANICAL. The weaver names multi-coherence channels and fractal scales (line 328-331), which is structural, but the "actionable CSS-level feedback" phrase pushes toward mechanical fixes. |
| Orchestrator composes fix instructions | **THE CRITICAL JUNCTURE.** Fix instruction template (lines 366-393) has 4 sections. Section 2 ("Compositional Context") is the ONLY place where compositional framing survives. It references the transition table and conventions brief. Sections 1/3/4 are mechanical/directional/protective. |
| Builder receives instructions | **DEGRADED.** Builder receives: (1) gate failures with measured values and CSS fixes, (2) compositional context per boundary, (3) PA issues described directionally, (4) protected elements. The builder also receives the framing instruction to re-read TC brief and conviction statement. |
| Builder applies fixes | **DEPENDS ON BUILDER DISCIPLINE.** If builder re-reads TC brief and conviction statement as instructed, compositional context is restored. If builder skips to the fix list, context is lost. |

---

## 2. FIX INSTRUCTION FORMAT: What Does the Builder ACTUALLY Receive?

Reading the ACTUAL fix instruction template from build-page SKILL.md lines 366-393:

### Section 1: Gate Failures
```
[Paste _gate-results.json entries that FAILED, each with
measured_value, threshold, delta_from_threshold, and CSS fix]
```

**Format:** MECHANICAL. "SC-09 FAIL. Measured: 8 RGB. Threshold: 15 RGB. Fix: change background from X to Y."

This is exactly "change background from #FEF9F5 to #F0EBE3" -- the mechanical end of the spectrum.

### Section 2: Compositional Context
```
For each failed gate or PA issue at a boundary, include:
- The boundary's planned coherence direction (from transition table in _build-log.md)
- Which channels currently shift there and which are missing
- Re-read conventions-brief.md Section [N] for the relevant concept
```

**Format:** COMPOSITIONAL. "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten). See brief Section 4."

This IS the right format -- it contextualizes the mechanical fix within the compositional direction.

### Section 3: PA Top-5 Issues
```
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]
```

**Format:** DIRECTIONAL. Not mechanical (doesn't prescribe CSS), not compositional (doesn't reference metaphor or coherence direction). A middle ground.

### Section 4: Tier 5 Gaps + Do Not Touch
```
- PA-6N: NO -- "[auditor reason]"
  IMPLICATION: [missing compositional property]
```

**Format:** STRUCTURAL. Names the missing compositional property, which is good.

### Verdict on fix instruction format:

The template is actually WELL-DESIGNED. It has a compositional layer (Section 2) that contextualizes mechanical fixes. **BUT:** The compositional layer depends entirely on the ORCHESTRATOR knowing what the transition table said and providing accurate compositional context. The orchestrator generates this section by reading `_build-log.md` -- which means the orchestrator must understand multi-coherence directions, not just copy-paste gate failures.

**The real risk:** A less sophisticated orchestrator (or a rushed one) may populate Section 1 and Section 3 while generating thin Section 2 content. Section 2 requires INTERPRETIVE WORK -- the orchestrator must map gate failures to planned coherence directions. Nothing in the build-page SKILL.md ENFORCES rich Section 2 content. It is aspirational, not structural.

---

## 3. RECIPE DEGRADATION PATH

### Initial State (Cycle 0): Recipe Mode

The builder starts with:
1. **TC brief** (~50 lines): metaphor, zones, tensions, mechanisms, CSS directions -- a DESIGN BRIEF
2. **Conventions brief** (~565 lines): world description, compositional principles, process guidance -- a RECIPE
3. **Content file**: the material being designed

The builder writes a conviction statement, transition table, fractal echo table. This is recipe mode: "Here is what I believe about this page, here is my plan, here is my rationale."

### Gate 1 Fails (Cycle 1): Recipe + Mechanical Instructions

The builder receives fix instructions. The fix instruction file has 4 sections. The orchestrator's framing says: "Re-read _tc-brief.md AND your conviction statement and transition table in _build-log.md before applying fixes."

**Question:** Does the builder ACTUALLY re-read the TC brief?

In practice, the builder is a continuation of the SAME agent that built the page. It has:
- The original TC brief in its context window (it read it during the build)
- The conventions brief in its context window
- Its own conviction statement and build log

**Cycle 1 is LOW RISK for context loss** because:
- Same agent, same context window
- The framing instruction is present
- The fix file includes compositional context (Section 2)
- The builder's recent memory includes the entire build

### Gate 2 Fails (Cycle 2): Compliance Mode Emerging

By Cycle 2, the builder has:
- Original context (possibly compressed/compacted if context is long)
- Cycle 1 fix instructions + applied changes
- Cycle 2 fix instructions arriving

**Two degradation vectors:**

**Vector A: Context compression.** If the conversation has grown long enough to trigger compaction, the TC brief and conventions brief may be summarized. The builder retains the fix instructions (recent) but may lose nuances of the original compositional intent. The conviction statement might be compressed to a summary.

**Vector B: Attention shift.** Each fix cycle adds a new set of instructions to the builder's attention. By Cycle 2, the builder has: original build context + Cycle 1 fixes + Cycle 2 fixes. The most recent instructions (Cycle 2 fixes) receive the most attention (recency bias). The builder's operational mode shifts from "express this metaphor" to "pass these gates."

**Cycle 2 is MODERATE RISK** because:
- Context compression may have occurred
- Recency bias favors fix instructions over compositional intent
- The builder has been CORRECTED twice -- this creates a compliance mindset
- The framing instruction ("re-read TC brief") competes with the urgency of the fix list

### Gate 3 Fails (Cycle 3): Full Compliance Mode

By Cycle 3:
- Context compression is very likely
- The builder has been corrected THREE TIMES
- Three sets of fix instructions dominate the recent context
- The original compositional intent is 3 layers of correction deep
- The builder is in "make it pass" mode, not "make it composed"

**Cycle 3 is HIGH RISK for recipe-to-checklist degradation.**

This is the exact pattern the memory section of MEMORY.md documents: "Recipe = DESIGNED; Checklist = FLAT." The fix cycle structurally degrades recipe mode into checklist mode through repeated correction.

---

## 4. TC-ENRICH-05 IMPACT ASSESSMENT

### What TC-ENRICH-05 proposes (from synthesis doc, line 91):

```
TYPE A (mechanical) -> builder
TYPE B (structural) -> builder re-reads TC brief
TYPE C (compositional) -> TC re-invocation
```

### Does this ACTUALLY change fix instruction format?

**YES, partially.** The classification determines ROUTING:
- TYPE A: Builder gets mechanical fix instructions (current behavior)
- TYPE B: Builder gets an explicit instruction to re-read TC brief before fixing (strengthened framing)
- TYPE C: TC agent is re-invoked, potentially producing a new or refined TC brief

**What it does NOT change:**
- The fix instruction TEMPLATE itself (Sections 1-4 remain the same)
- The weaver's output format (still "actionable CSS-level feedback")
- The builder's tendency toward compliance mode after multiple corrections

**Assessment:** TC-ENRICH-05 is a ROUTING improvement, not a FORMAT improvement. It correctly identifies that some failures require compositional re-thinking (TYPE C), but for TYPE A and TYPE B fixes, the builder still receives the same instruction format. The TYPE B addition ("builder re-reads TC brief") is essentially codifying what build-page line 398 already specifies.

**The gap TC-ENRICH-05 does NOT close:** The format of instructions the builder receives for TYPE B fixes. Telling the builder "re-read your TC brief" is necessary but insufficient. The builder needs to be told HOW the fix relates to the TC brief. "SC-09 FAIL at Z2->Z3 -- re-read TC brief" is still a checklist item. "SC-09 FAIL at Z2->Z3 -- your TC brief says this boundary is DEEPENING (geological compression), so the background must darken, not lighten, and must shift by >=15 RGB to be perceptible as a layer change" is a recipe-format fix instruction.

---

## 5. PA-ENRICH-08 / PA-ENRICH-09 IMPACT ASSESSMENT

### PA-ENRICH-08: Fix-type classification in Weaver Top-5

**What it adds:** MECHANICAL / STRUCTURAL / COMPOSITIONAL classification to each Top-5 issue.

**Does the classification reach the builder?** YES -- the weaver's Top-5 is passed through to the fix instruction file Section 3. The classification would tag each issue.

**What it changes for the builder:** The builder sees "COMPOSITIONAL" next to an issue and... does what? The classification is a LABEL, not an ACTION. Without paired instructions for what to do differently with COMPOSITIONAL issues vs MECHANICAL ones, the label is informational only.

**Gap:** PA-ENRICH-08 classifies but does not prescribe differentiated treatment. The builder receives "COMPOSITIONAL: PA-44 FAIL -- metaphor not structural" but the fix instruction doesn't say what to do differently with a compositional failure vs a mechanical one.

### PA-ENRICH-09: Metaphor failure root-cause diagnosis

**What it adds:** When PA-44/PA-68 fail, diagnose whether it's:
- IMPLEMENTATION failure (builder labels instead of structures)
- STRUCTURAL failure (TC derivation produced a weak metaphor)
- COVERAGE failure (builder ran out of steam)

**Does this reach the builder?** It reaches the ORCHESTRATOR via the weaver report. The orchestrator then routes:
- IMPLEMENTATION → builder (with direction: remove labels, add CSS structure)
- STRUCTURAL → TC re-invocation (new metaphor)
- COVERAGE → builder (with direction: extend metaphor to neglected sections)

**Assessment:** This is the most useful of the three enrichments for the fix cycle because it determines ROUTING, not just labeling. STRUCTURAL failure triggers TC re-invocation, which is a fundamentally different fix than sending the builder another correction.

**Gap:** The COVERAGE routing still sends mechanical instructions to the builder ("extend metaphor to sections 7-10"). This is still a checklist item. The builder needs a recipe: "Your TC brief says Zone 4 (sections 7-10) should use RESOLVING direction. Re-read your Zone 4 plan and apply the following multi-coherence channels at the Z3->Z4 boundary..."

---

## 6. COMPOSITIONAL MEMORY: What Mechanism Preserves Intent Through Fix Cycles?

### What currently exists:

1. **Conventions brief Section 10** (lines 365-378): "Fix cycle memory" -- 1 paragraph, 4 habits:
   - Boundary naming (CSS comments)
   - Midpoint reflection
   - Category awareness
   - Fix cycle memory: "re-read your conviction statement and fractal echo table before touching CSS"

2. **Build-page SKILL.md line 398**: Framing instruction to builder: "Re-read _tc-brief.md AND your conviction statement and transition table in _build-log.md before applying fixes."

3. **Build-page SKILL.md Section 7.1** (fix instruction template, Section 2): Compositional context per boundary from transition table.

### What is MISSING:

**No structural mechanism forces the builder to re-engage with compositional intent.** Every memory aid is an INSTRUCTION that the builder may follow or skip:

- "Re-read TC brief" -- instruction, not enforcement
- "Re-read conviction statement" -- instruction, not enforcement
- CSS boundary comments -- passive, easily scrolled past

**The conventions brief describes compositional memory as a HABIT, not a GATE.** There is no verification that the builder actually re-engaged. The orchestrator cannot check whether the builder read the TC brief or just applied the mechanical fixes.

### The answer to "what mechanism preserves compositional intent through fix cycles?" is: **NONE that is structural. Only instructions that rely on builder compliance.**

This is the core vulnerability. The entire fix cycle architecture depends on the builder's willingness to re-read context documents before applying mechanical fixes. In a LLM context, recency bias means the fix instruction list dominates attention over "re-read these old documents."

---

## 7. THE DEEPER QUESTION: Should Fix Instructions Reference the TC Brief?

### Current state:

Build-page line 398 already says: "Re-read _tc-brief.md (your metaphor, zones, tensions) AND your conviction statement and transition table in _build-log.md before applying fixes."

This is a BLANKET instruction. It does not connect SPECIFIC fixes to SPECIFIC TC brief sections.

### Proposed improvement:

Fix instructions should reference TC brief sections PER ISSUE:

```
## FIX INSTRUCTIONS (Cycle 2)

### Gate Failures

SC-09 FAIL at Z2->Z3
- Measured: bg delta 8 RGB
- Threshold: >= 15 RGB
- YOUR TC BRIEF Section 2 says Z2->Z3 is a DEEPENING boundary (geological
  compression). Your conviction statement says "making every zone boundary
  shift >= 3 channels in the DEEPENING direction."
- FIX RECIPE: Darken Z3 background. Z2 is #FEF9F5. Z3 must be at least
  15 RGB darker in at least one channel. Try #F0EBE3 (18 RGB delta on B
  channel). This serves DEEPENING because deeper geological layers are
  darker.
- VERIFY: After changing, scroll to the Z2->Z3 boundary and confirm the
  transition is PERCEPTIBLE and encodes DEEPENING.

### PA Issue: PA-44 FAIL (Metaphor not structural)
- TYPE: COMPOSITIONAL (requires re-engagement with metaphor, not CSS change)
- YOUR TC BRIEF Section 1 says the metaphor is [X]. Section 5 says it
  should manifest as [specific CSS patterns].
- RE-READ TC brief Sections 1 and 5. Then scroll through your page and
  identify sections where the metaphor is ANNOUNCED (labels) rather than
  STRUCTURAL (CSS treatment).
- FOR EACH such section: Remove the label. Add CSS treatment from TC brief
  Section 5 that would make the metaphor visible WITHOUT the label.
```

### Would this preserve compositional framing?

**YES, significantly.** This format:
1. **Grounds each fix in the builder's own compositional plan** -- not generic instructions
2. **Connects mechanical values to compositional reasoning** -- "15 RGB delta BECAUSE geological layers are darker"
3. **Creates a recipe, not a checklist** -- sequenced steps with verification
4. **References specific TC brief sections** -- forces the builder to re-engage with specific parts

### What would this look like as a specific addition to the weaver protocol?

The weaver currently produces Top-5 issues with "actionable CSS-level feedback" (build-page line 328). The change would be in the ORCHESTRATOR's fix instruction composition (Section 7.1), not in the weaver protocol itself. The weaver should continue to produce fresh-eyes findings. The ORCHESTRATOR is the right place to marry weaver findings with TC brief context.

---

## 8. PROPOSED ADDITIONS

### Addition 1: Fix Instruction Recipe Format (build-page SKILL.md, Section 7.1)

**File:** `~/.claude/skills/build-page/SKILL.md`
**Location:** Replace the fix instruction template at lines 366-393
**What changes:** Transform from 4-section template to recipe format with TC brief references

```markdown
### 7.1 Build Fix Instructions

Compose a fix instruction file at `[output-dir]/_fixes/fix-instructions-cycle-N.md`.

For EACH issue (gate failure or PA finding), produce a FIX RECIPE with these 5 parts:

1. **WHAT FAILED:** Gate ID + measured value vs threshold, OR PA question + auditor quote
2. **YOUR PLAN SAID:** Quote the relevant line from the builder's transition table
   or conviction statement (from _build-log.md). Name the coherence direction at that
   boundary. Reference specific TC brief section.
3. **WHY IT FAILED:** Connect the measurement to the compositional intent. "Your planned
   DEEPENING at Z2->Z3 requires darker bg in Z3, but the delta is only 8 RGB -- below
   the 15 RGB perceptibility threshold."
4. **FIX RECIPE:** Specific sequenced steps. "Step 1: Change Z3 background to #F0EBE3
   (18 RGB delta). Step 2: Verify other DEEPENING channels (typography, spacing, borders)
   still align. Step 3: Scroll to Z2->Z3 boundary and confirm the transition is perceptible."
5. **VERIFY:** How the builder confirms the fix worked WITHOUT re-running gates. "After
   change, the Z2->Z3 boundary should show a visible background shift AND the coherence
   direction should still read as DEEPENING."

Classify each issue:
- **TYPE A (mechanical):** Gate threshold not met but coherence direction is correct. Fix
  the value. Builder stays in current mode.
- **TYPE B (structural):** Multi-coherence direction at a boundary is contradictory or
  absent. Builder must re-read TC brief Section 2 (Zone Architecture) and re-plan that
  boundary's channel shifts.
- **TYPE C (compositional):** Metaphor is not structural (PA-44/PA-68 fail). Requires
  TC re-invocation if 2+ cycles have not resolved it.

### Fix Instruction Footer (MANDATORY on every fix file):

"Before applying any fix: Re-read your conviction statement and the specific TC brief
sections referenced above. Each fix must maintain your planned coherence directions.
After applying all fixes, scroll the full page and verify the metaphor still reads as
structural, not just labeled."
```

**Lines added:** ~30 (replacing ~27 existing). Net: +3 lines.
**Impact:** Transforms fix instructions from template-with-optional-context to recipe-with-mandatory-context. Each fix is grounded in the builder's own plan. TYPE classification (from TC-ENRICH-05) is integrated into the format rather than being a separate routing decision.

### Addition 2: Compositional Memory Gate (conventions-brief.md, Section 10)

**File:** `design-system/pipeline/conventions-brief.md`
**Location:** Section 10 (Compositional Memory), after "Fix cycle memory" paragraph (line 377)
**What to add:**

```markdown
**Fix cycle re-engagement (MANDATORY):** When you receive fix instructions, do these
three things BEFORE reading the fix list:

1. Re-read your conviction statement (top of _build-log.md). Remind yourself what
   this page IS and what coherence direction you committed to.
2. Re-read the specific TC brief sections called out in the fix instructions. Each
   fix references a section of YOUR compositional plan.
3. Scroll through your current page once at normal speed. Note which sections still
   feel composed and which feel mechanical.

THEN read the fix list. Apply each fix in the context of your compositional plan,
not as isolated corrections.

If you find that a fix contradicts your coherence direction, document the conflict in
_build-log.md and apply the fix that serves the metaphor while meeting the threshold.
```

**Lines added:** ~14
**Impact:** Converts "re-read your TC brief" from a blanket instruction to a sequenced protocol. The builder engages with compositional intent BEFORE seeing mechanical fixes.

### Addition 3: TC Brief Fix-Cycle Section (TC SKILL.md, Phase 4.5)

**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Location:** Phase 4.5, after Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS), before the length note
**What to add:**

```markdown
### 6. FIX-CYCLE ANCHORS (for builder re-engagement)

Distill 3 compositional anchors the builder MUST NOT violate during fix cycles:

1. **METAPHOR ANCHOR:** "The metaphor is [X]. It manifests as [specific CSS pattern].
   If a fix removes this manifestation, the fix is wrong even if the gate passes."
2. **COHERENCE ANCHOR:** "The dominant coherence direction is [X]. At every zone
   boundary, channel shifts must encode this direction. A fix that makes a boundary
   encode the OPPOSITE direction breaks multi-coherence."
3. **RESTRAINT ANCHOR:** "These mechanisms are DELIBERATELY ABSENT: [list 3].
   A fix must not introduce them."

These anchors give the builder a 3-line memory card to re-read before each fix cycle.
They survive context compression because they are SHORT and SPECIFIC.
```

**Lines added:** ~15
**Impact:** Creates a compression-resistant memory artifact in the TC brief. Even if the full TC brief is compressed during fix cycles, these 3 anchors survive because they are short, specific, and at the end of the brief (recency bias works in their favor during re-reading).

### Addition 4: Weaver Fix-Type Output (PA SKILL.md, Weaver Calibration)

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`
**Location:** After the Weaver Calibration References section (around line 655), before the divider
**What to add:**

```markdown
*Fix-Type Classification (for Weaver Top-5 only):*

When the verdict is FIX, classify each Top-5 issue:

| Type | Signal | Routing |
|------|--------|---------|
| **MECHANICAL** | Gate threshold not met, coherence direction correct | Builder applies value fix |
| **STRUCTURAL** | Multi-coherence broken or absent at boundary | Builder re-reads TC brief Zone Architecture |
| **COMPOSITIONAL** | Metaphor not structural, PA-44/PA-68 fail | Orchestrator considers TC re-invocation |

For COMPOSITIONAL issues, additionally diagnose root cause:
- **IMPLEMENTATION:** Builder labeled the metaphor instead of structuring it (CSS change needed)
- **DERIVATION:** Metaphor was weak from TC derivation (TC re-invocation needed)
- **COVERAGE:** Metaphor present in top third, absent in bottom (extension needed)

Include this classification in your Top-5 synthesis. The orchestrator uses it to
compose fix instructions with appropriate compositional context.
```

**Lines added:** ~18
**Impact:** Gives the weaver a structured vocabulary for fix-type classification. The classification then flows to the orchestrator, who uses it to compose recipe-format fix instructions with appropriate context depth. This is PA-ENRICH-08 and PA-ENRICH-09 combined into a single integrated addition.

---

## 9. SUMMARY OF FINDINGS

### The Core Problem

The fix cycle is architecturally sound in design (the template at build-page lines 366-393 DOES include compositional context). But it is structurally fragile in practice because:

1. **Compositional context is OPTIONAL in the template.** Section 2 (Compositional Context) requires the orchestrator to do interpretive work. Nothing enforces rich content.

2. **Memory preservation is INSTRUCTION-based, not GATE-based.** "Re-read your TC brief" is an instruction the builder may or may not follow. There is no verification.

3. **Recency bias degrades recipe mode.** Each fix cycle adds mechanical instructions that dominate the builder's attention window. By Cycle 3, the original compositional intent is buried under three layers of correction.

4. **The weaver speaks mechanical language.** "Actionable CSS-level feedback" is inherently mechanical. The weaver classifies issues but prescribes CSS changes, not compositional responses.

### What the Planned Enrichments Fix

| Enrichment | What It Fixes | What It Misses |
|------------|---------------|----------------|
| TC-ENRICH-05 (TYPE A/B/C) | Routing -- compositional failures get different treatment | Format -- TYPE A/B fixes still arrive as checklists |
| PA-ENRICH-08 (fix-type classification) | Labeling -- weaver classifies issues | Action -- classification without differentiated treatment is just a label |
| PA-ENRICH-09 (metaphor root-cause) | Diagnosis -- distinguishes implementation vs derivation vs coverage | Delivery -- correct diagnosis still arrives as a mechanical instruction |

### What REMAINS Unfixed After Enrichments

1. **No compression-resistant memory artifact.** The TC brief is ~50 lines. During a 3-cycle fix process with a growing context window, those 50 lines may be compressed. There is no short (3-5 line) artifact designed to survive compression.

2. **Fix instructions are not recipe-format.** TC-ENRICH-01 converts the TC brief itself to recipe format, which is the highest-leverage change. But fix INSTRUCTIONS remain in the old template format. The builder's initial recipe degrades to checklist through fix cycles even if the original recipe was excellent.

3. **No orchestrator accountability for Section 2.** The template says "include compositional context per boundary" but there is no quality check on whether the orchestrator did this adequately.

4. **The conventions brief describes compositional memory as a habit, not a protocol.** Section 10 says "four habits prevent drift" -- but in the fix cycle, the builder needs a PROTOCOL (sequenced mandatory steps), not habits (aspirational practices).

### Net Assessment

The fix cycle is the pipeline's **second most vulnerable point** after the TC brief's compression into the builder's context. The planned enrichments (TC-ENRICH-05, PA-ENRICH-08, PA-ENRICH-09) address ROUTING and CLASSIFICATION but do not close the core FORMAT gap. The 4 additions proposed in Section 8 would close this gap by:

1. Converting fix instructions to recipe format (Addition 1)
2. Converting conventions brief memory section to a protocol (Addition 2)
3. Adding compression-resistant anchors to TC brief (Addition 3)
4. Integrating fix-type classification into weaver protocol (Addition 4)

Total proposed additions: ~77 lines across 4 files. These are within the scope of the TC and PA skills and the build-page orchestrator.

---

## APPENDIX: Concordance with Planned Enrichments

| Planned Enrichment | This Audit's Assessment | Recommendation |
|-------------------|------------------------|----------------|
| TC-ENRICH-01 (recipe format) | Highest-leverage change. Does NOT address fix cycle format. | Apply. Also apply Addition 1 to extend recipe format into fix instructions. |
| TC-ENRICH-05 (TYPE A/B/C) | Correct routing taxonomy. Incomplete without format change. | Apply with Addition 1 integration (TYPE classification embedded in recipe format). |
| PA-ENRICH-08 (fix-type classification) | Useful classification. Inert without differentiated treatment. | Apply with Addition 4 integration (weaver produces classification, orchestrator acts on it). |
| PA-ENRICH-09 (metaphor root-cause) | Most useful enrichment for fix cycles. Correct routing to TC re-invocation. | Apply as-is. Addition 4 already integrates this. |

### Files that need changes:

1. `~/.claude/skills/build-page/SKILL.md` -- Section 7.1 (fix instruction template)
2. `design-system/pipeline/conventions-brief.md` -- Section 10 (compositional memory)
3. `~/.claude/skills/tension-composition/SKILL.md` -- Phase 4.5 (add Section 6: Fix-Cycle Anchors)
4. `~/.claude/skills/perceptual-auditing/SKILL.md` -- Weaver Calibration (add fix-type classification)
