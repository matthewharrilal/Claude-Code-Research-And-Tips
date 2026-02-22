# Failure Mode Audit -- Post-Surgery Pipeline Assessment

**Auditor:** Opus agent (fresh-eyes, zero surgery participation)
**Date:** 2026-02-20
**Files Audited (CURRENT state):**
1. `~/.claude/skills/build-page/SKILL.md` (476 lines)
2. `design-system/pipeline/conventions-brief.md` (546 lines)
3. `design-system/pipeline/gate-runner.md` (1,159 lines)
4. `design-system/pipeline/flagship-pa-questions.md` (158 lines)
5. `~/.claude/skills/tension-composition/SKILL.md` (1,945 lines -- referenced, not directly edited)
6. `~/.claude/skills/perceptual-auditing/SKILL.md` (988 lines -- referenced, not directly edited)

---

## Failure Mode Assessment Matrix

| FM | Name | Pre-Surgery Status | Post-Surgery Status | Evidence | Risk Level |
|----|------|-------------------|--------------------|---------|-----------|
| FM-1 | Guardrail Factory | ACTIVE (7.9:1) | **ADDRESSED** | 1:1.24 recipe:guardrail ratio in conventions-brief. New sections (4, 5, 7, 8) are almost entirely recipe content. | **LOW** |
| FM-2 | Builder Isolation | ACTIVE (75-line cap) | **PARTIAL** | 546-line conventions-brief + ~50-line TC brief = ~600 lines builder input before content. Critical content buried in middle sections (4-7). TC brief as first read helps but adds to total. | **MEDIUM** |
| FM-3 | Binary Without Semantic | ACTIVE | **ADDRESSED** | New sections provide SEMANTIC guidance (coherence arc planning, typographic progression recipes, parametric echo CSS, transition-to-coherence mapping). Not just thresholds. | **LOW** |
| FM-4 | Programmatic != Perceptual | ACTIVE | **ADDRESSED** | TC brief provides compositional anchor for PA-to-fix handoff. Fix instructions now reference conventions-brief sections + coherence direction. Gate-runner includes `brief_section` field. PA-68 (metaphor spatial coverage) added. | **LOW** |
| FM-5 | Continuation Bias | ACTIVE | **ADDRESSED** | Fix cycle (SKILL.md 7.1-7.2) explicitly references conviction statement + transition table. "Re-read your conviction statement and transition table" framing. Compositional Context section in fix instructions references boundary coherence direction. TC brief serves as external anchor. | **LOW** |
| FM-6 | Meta-Output Ratio | ACTIVE (660:1) | **PARTIAL** | Total pipeline infrastructure: 5,272 lines (SKILL 476 + brief 546 + gates 1,159 + PA-questions 158 + TC-skill 1,945 + PA-skill 988). Expected output: ~2,000 lines HTML + ~200 lines build log. Ratio: ~2.4:1. Under 10:1 threshold. BUT: TC skill (1,945 lines) and PA skill (988 lines) are reference files, not builder input. Gate-runner is referenced but JS is inline in SKILL.md guidance. | **LOW** |
| FM-7 | TC Gap | ACTIVE (no TC invocation) | **ADDRESSED** | TC is now invoked as a separate Opus agent (SKILL.md Step 2, lines 28-59). TC agent runs BEFORE builder. Builder receives TC output as first file. Two-instance pattern implemented: TC analyzes, builder builds. | **LOW** |

---

## Section-by-Section Analysis

### FM-1: The Guardrail Factory (7.9:1 ratio)

**Pre-surgery:** The Flagship prompt had 7.9:1 guardrail-to-recipe ratio. Builders were told what NOT to do 7.9x more than what TO DO.

**Post-surgery analysis of conventions-brief.md (546 lines):**

I counted lines by intent across all 14 sections:

| Section | Lines | Primary Mode | Recipe Lines | Guardrail Lines |
|---------|-------|-------------|-------------|-----------------|
| 1. Identity (Soul) | 48 | Constraint | 0 | 30 |
| 2. Perception | 18 | Physics/Threshold | 4 | 10 |
| 3. Richness | 17 | Principle/Recipe | 12 | 3 |
| 4. Multi-Coherence | 72 | **RECIPE** | 56 | 8 |
| 5. Fractal Echo | 54 | **RECIPE** | 42 | 6 |
| 6. Unified Metaphor | 23 | Guidance | 14 | 4 |
| 7. Transition Grammar | 42 | **RECIPE** | 34 | 3 |
| 8. CSS Vocabulary | 55 | **RECIPE** | 48 | 2 |
| 9. Creative Authority | 15 | Permission | 12 | 0 |
| 9B. Quality Floor | 16 | Threshold | 4 | 8 |
| 10. Compositional Memory | 14 | Habit/Recipe | 12 | 0 |
| 11. Five Questions | 22 | Self-check | 18 | 0 |
| 12. Restraint List | 15 | Constraint | 0 | 12 |
| 13. Accessibility | 20 | Template/Recipe | 16 | 2 |
| 14. Responsive | 10 | Guidance | 6 | 2 |
| Conviction Card | 20 | Template | 16 | 0 |
| Process | 56 | **RECIPE** | 48 | 4 |

**Totals:** ~342 recipe/guidance lines vs ~94 guardrail/constraint lines.

**Post-surgery ratio: 3.64 recipe lines per guardrail line (3.64:1 recipe-to-guardrail, or 1:0.27 guardrail-to-recipe).**

This is a DRAMATIC inversion from the pre-surgery 7.9:1 guardrail-to-recipe. The new sections (4: Multi-Coherence with coherence arc planning, typographic progression recipes, and component-internal multi-coherence CSS; 5: Fractal Echo with parametric echo CSS recipes and character-scale register; 7: Transition Grammar with transition-to-coherence mapping and concrete boundary CSS; 8: CSS Vocabulary with layout topologies and component DNA) are almost entirely recipe content with specific CSS values.

**Key additions that are RECIPES (not checklists):**
- Coherence Arc Planning (conventions-brief lines 136-155): concrete 4-zone example with specific CSS values, tells builders HOW to plan the arc
- Typographic Progression Per Semantic Direction (lines 157-178): specific CSS progressions for DEEPENING and OPENING directions with actual property values
- Transition-to-Coherence Mapping (lines 268-279): table mapping transition types to channel counts, with planning shortcut
- Parametric Echo CSS Recipe (lines 203-212): table with scale-by-scale CSS values
- Component-Internal Multi-Coherence Recipe (lines 291-305): actual CSS showing dense vs sparse zone component variants
- Boundary CSS Recipe (lines 519-535): fully worked example of a DEEPENING boundary with 4 channels

**Verdict: ADDRESSED.** The conventions brief is now majority-recipe. The original 7.9:1 guardrail factory has been inverted to ~1:3.6 (more recipe than guardrail).

**Remaining risk:** Fix cycle instructions in SKILL.md (Step 7.1) are a MIX. They include Compositional Context (recipe-direction, referencing transition table and conventions-brief sections) AND structured gate failures (checklist-like, specific CSS). The framing at 7.2 ("Re-read your conviction statement and transition table") is good. This is NOT a pure checklist -- it preserves compositional anchoring. But gate failure fixes are still symptom-level CSS changes. The `brief_section` reference in gate-runner.md (line 249) mitigates this by pointing the builder back to the world model. **Risk: LOW.**

---

### FM-2: Builder Isolation (75-Line Visibility Cap)

**Pre-surgery:** Builders absorbed ~75 lines. The conventions brief was ~500 lines. Critical content in the middle got no attention.

**Post-surgery input stack for the builder:**

| Input | Lines | Position (Read Order) |
|-------|-------|----------------------|
| TC brief (_tc-brief.md) | ~50 | **FIRST** |
| conventions-brief.md | 546 | SECOND |
| Content file | Variable | THIRD |
| mechanism-catalog.md | ~800+ | Reference (consult as needed) |
| components.css | ~900+ | Reference (consult as needed) |
| tokens.css | 174 | Reference (consult as needed) |
| prohibitions.md | 353 | LAST before CSS |

**Total mandatory read before building:** ~596 lines (TC brief + conventions brief) + content.
**Total if all references consulted:** ~2,873+ lines.

**Critical content placement in conventions-brief:**
- Section 1 (Identity/Soul): Lines 1-48 -- TOP (high primacy)
- Section 2 (Perception): Lines 50-69 -- TOP (high primacy)
- Section 3 (Richness): Lines 71-89 -- TOP
- Section 4 (Multi-Coherence): Lines 91-178 -- **MIDDLE** (primacy risk)
- Section 5 (Fractal Echo): Lines 180-231 -- **MIDDLE** (primacy risk)
- Section 6 (Unified Metaphor): Lines 233-253 -- **MIDDLE** (primacy risk)
- Section 7 (Transition Grammar): Lines 255-281 -- **MIDDLE**
- Section 8 (CSS Vocabulary): Lines 283-327 -- **MIDDLE-LOW** (recency starts)
- Section 9+ (Creative Authority, etc.): Lines 329-497 -- BOTTOM (high recency)
- Conviction Card + Process: Lines 497-546 -- **BOTTOM** (highest recency)

**The primacy/recency U-curve puts Sections 4-7 (Multi-Coherence, Fractal Echo, Unified Metaphor, Transition Grammar) in the TROUGH.** These are the most compositionally important sections -- the exact content that distinguishes DESIGNED from FLAT.

**Mitigating factors:**
1. TC brief as FIRST input (~50 lines) establishes the compositional foundation BEFORE the conventions brief. The builder arrives at the conventions brief already primed with metaphor, zones, tensions, and mechanisms. This is a strong structural mitigation.
2. The Conviction Card at the bottom (high recency) requires the builder to PLAN using concepts from Sections 4-7 before writing CSS. This creates a forced re-engagement with middle content.
3. The SKILL.md builder prompt (lines 92-101) explicitly sequences Phases A-D which reference TC brief + transition table + fractal echo table + self-check -- these are active uses of middle-section concepts.
4. The builder is Opus, which has stronger long-context comprehension than Sonnet.

**But the core problem remains:** 546 lines is a LOT of world-description. The TC brief helps by offloading content-specific composition (~50 lines), but the conventions brief is still a dense 546-line document. The question is whether the PROCESS structure (conviction card, fractal echo table, transition table) forces the builder to RE-ENGAGE with the middle sections.

**Would a builder who reads only the first 75 lines get enough compositional intelligence?**
First 75 lines = Sections 1-2 (Soul + Perception). That gives: palette, typography, container width, perception thresholds. It does NOT give: multi-coherence, fractal echo, transition grammar, parametric echo, coherence arc. A 75-line-only builder produces a page that is SOUL-COMPLIANT but compositionally FLAT.

**BUT:** The TC brief is read FIRST. A 75-line-only builder who read the TC brief gets: metaphor, zones, tensions, mechanisms, CSS directions. The TC brief provides the content-specific compositional intelligence that was previously entirely absent. Even a 75-line-only builder would arrive with compositional intent.

**Verdict: PARTIAL.** The TC brief as first input substantially mitigates the isolation problem by front-loading content-specific composition. The Conviction Card forces re-engagement with middle sections. But 546 lines is still beyond comfortable Opus absorption. The sections most at risk (4-7) are the ones that distinguish DESIGNED from FLAT.

**Recommendation:** Consider a "Builder's Quick Reference" -- a 40-line appendix at the END of the conventions brief (high recency) that summarizes the 6 key concepts from Sections 4-7 in actionable one-liners. This would put middle-section concepts at both ends of the U-curve. Example:
```
BUILDER QUICK REFERENCE (concepts from Sections 4-7):
- Multi-coherence: >= 3 channels shift at every boundary, same direction
- Fractal echo: page organizing principle echoes at 5 scales (nav > page > section > component > character)
- Transition types: SMOOTH (1-2 channels), BRIDGE (3-4), BREATHING (4-5)
- Coherence arc: opening (2-3) -> building (3-4) -> climax (4-5) -> resolution (2-3)
- Parametric echo: dense zones get tighter padding, heavier borders; sparse zones get the inverse
- Layout diversity: >= 2 topology changes = free multi-coherence events
```

---

### FM-3: Binary Compliance Without Semantic Quality

**Pre-surgery:** ">=3 distinct spacing values" satisfied by 48px/49px/50px. Perceptual thresholds are FLOORS, not quality indicators.

**Post-surgery analysis:**

The new conventions-brief sections provide SEMANTIC guidance beyond numerical floors:

1. **Coherence Arc Planning (Section 4, lines 136-155):** Describes the NARRATIVE SHAPE of multi-coherence -- opening (2-3 channels), building (3-4), climax (4-5), resolution (2-3). This is semantic: it tells the builder what "designed" multi-coherence LOOKS LIKE, not just the binary floor.

2. **Typographic Progression (Section 4, lines 157-178):** Provides CSS progressions for DEEPENING and OPENING directions. "DEEPENING: font-weight 400 -> 500 -> 600, letter-spacing 0.04em -> 0.03em, line-height 1.7 -> 1.6 -> 1.5." This is SEMANTIC -- it tells the builder what designed typography progression looks like for each coherence direction.

3. **Parametric Echo Recipe (Section 5, lines 203-212):** "Dense zone: padding 16px, font-size 0.875rem. Sparse zone: padding 24px, font-size 1rem." This is not a floor -- it's a PATTERN showing what designed component behavior looks like.

4. **Transition-to-Coherence Mapping (Section 7, lines 268-279):** Maps transition types to channel budgets with concrete examples. "BRIDGE: bg + font-size + border + spacing all change. Reader pauses and reorients." This connects the binary (channel count) to the semantic (reader experience).

5. **Boundary CSS Recipe (Process section, lines 519-535):** Fully worked example showing HOW all channels encode the same direction at a boundary. This is the most concrete bridge from binary threshold to designed quality.

**What about gates?** Gate-runner.md still uses binary thresholds (>= 15 RGB, >= 3 channels, etc.). The new `brief_section` reference (gate-runner line 249) points the builder back to semantic context during fix cycles. SC-13B (Direction Coherence) is ADVISORY, not blocking -- it checks semantic direction but cannot enforce it.

**Gap:** There is no gate that checks SEMANTIC quality directly. Binary gates filter for the floor. PA catches quality above the floor. The gap between "technically passing all gates" and "PA-05 3.5+" is bridged by the conventions brief's semantic guidance. If the builder absorbs it, quality follows. If not, binary compliance alone produces a page that PASSES all gates but scores PA-05 2.0-2.5.

**Verdict: ADDRESSED.** The conventions-brief additions provide substantial semantic guidance above binary floors. The coherence arc, typographic progression, parametric echo, and boundary CSS recipe all describe what "designed" looks like, not just what the floor is. The remaining gap (gate filters vs PA judges) is architecturally correct -- gates should not judge composition.

---

### FM-4: Programmatic != Perceptual Truth

**Pre-surgery:** Gates say PASS but page is flat. PA finds symptoms without causes. PA-to-fix handoff loses diagnostic precision.

**Post-surgery analysis:**

Three improvements:

1. **TC brief provides compositional anchor.** With TC brief as the builder's first input, the builder has a named metaphor, named zones, named tensions, and named mechanisms BEFORE building. This means gate failures can now be diagnosed AGAINST the compositional plan. "SC-09 FAIL at Z2->Z3. Planned: DEEPENING. Missing: Chromatic (bg delta 8 RGB). Fix bg while maintaining DEEPENING (darken, not lighten). See brief Section 4." (SKILL.md line 374). This connects gate measurements to compositional intent.

2. **Fix instructions include Compositional Context.** SKILL.md Step 7.1 (lines 369-374) requires fix instructions to include: (a) the boundary's planned coherence direction from transition table, (b) which channels currently shift and which are missing, (c) a conventions-brief section reference. This is a DIAGNOSTIC fix instruction, not a pure symptom-level one.

3. **PA-68 added (Metaphor Spatial Coverage).** The flagship PA questions now include PA-68, which checks whether the metaphor persists across all scroll thirds. This catches the "announced" vs "structural" metaphor distinction at the perceptual level.

4. **Gate-runner `brief_section` field.** Each gate category maps to a conventions-brief section (gate-runner lines 229-238). This routes the builder back to the world model during fixes instead of operating in pure mechanical compliance mode.

**Remaining gap:** The PA still finds symptoms ("this section feels flat") without specific CSS causes. The weaver synthesis (SKILL.md Step 6.3) now includes multi-coherence channel names, fractal scales, and transition types in the Top-5 Issues format (line 326). This provides more diagnostic precision than pure perceptual language. But the PA auditors themselves still describe what they SEE, not what the CSS does -- which is correct (they are fresh-eyes), but means the PA-to-fix translation still happens at the weaver/orchestrator level.

**Verdict: ADDRESSED.** The TC brief, compositional context in fix instructions, `brief_section` gate references, and PA-68 all substantially improve the programmatic-to-perceptual bridge. The remaining translation gap at the weaver level is architecturally correct.

---

### FM-5: Continuation Bias

**Pre-surgery:** Builders continue what they start. Fix instructions trigger "change the value, keep everything else."

**Post-surgery analysis:**

Three countermeasures:

1. **Fix cycle framing (SKILL.md line 393):** "Re-read your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions." This explicitly asks the builder to re-establish compositional context before making mechanical changes.

2. **Compositional Context in fix instructions (SKILL.md lines 369-374):** Fix instructions now include the boundary's planned coherence direction, which channels currently shift, and a conventions-brief section reference. The builder receives DIRECTION ("maintain DEEPENING") not just VALUE ("change bg to #F0EBE3").

3. **TC brief as external anchor.** The TC brief exists as an external document the builder can re-read during fix cycles. It preserves the metaphor, zones, tensions, and mechanisms derived BEFORE building. This is a compositional anchor that survives continuation bias because it was written by a DIFFERENT agent.

4. **Build log as memory aid.** The conviction statement, fractal echo table, and transition table (written BEFORE CSS) serve as the builder's own compositional memory. The fix cycle framing points the builder back to these.

**Verdict: ADDRESSED.** The combination of fix cycle framing + compositional context in instructions + TC brief as external anchor + build log as memory aid provides robust defense against continuation bias. The builder has multiple compositional anchors to return to during fixes rather than operating at pure symptom level.

---

### FM-6: Meta-Output Ratio

**Pre-surgery:** Flagship had 660:1 meta-to-output ratio. Threshold: 10:1.

**Post-surgery calculation:**

| File | Lines | Role |
|------|-------|------|
| SKILL.md | 476 | Orchestrator instructions |
| conventions-brief.md | 546 | Builder world model |
| gate-runner.md | 1,159 | Gate specifications |
| flagship-pa-questions.md | 158 | PA question text |
| tension-composition SKILL.md | 1,945 | TC agent reference |
| perceptual-auditing SKILL.md | 988 | PA auditor reference |
| **Total pipeline files** | **5,272** | |

Expected output per build:
- output.html: ~1,500-2,500 lines
- _build-log.md: ~150-300 lines
- _cascade-value-table.md: ~50-100 lines
- _tc-brief.md: ~50 lines
- _gate-results.json: ~100 lines
- _pa reports (10 files): ~2,000-3,000 lines
- _lock-sheet, _run-manifest: ~50-100 lines

**Total expected output: ~4,000-6,500 lines.**

**Ratio: 5,272 / ~5,000 = ~1.05:1.**

This is well under the 10:1 threshold. However, the 5,272 lines are PERMANENT infrastructure (written once, used many times), while the ~5,000 lines are per-run output. The ratio improves with each additional build.

**What about ephemeral analysis output?** The surgery itself has generated 14 files of analysis. But these are one-time surgical artifacts, not pipeline infrastructure. The pipeline's RUNNING state is 5,272 lines of infrastructure.

**Does SKILL.md still write inline JS?** No. SKILL.md (line 157) says: "For complete gate specifications including JavaScript code, fix recipes, and execution groups, reference `design-system/pipeline/gate-runner.md` (1,159 lines, 22 gates with proven JS)." The SKILL.md contains a SUMMARY TABLE of gates (lines 159-177) and refers to gate-runner.md for the actual JS. This is proper separation.

**Is TC now actually invoked?** Yes. SKILL.md Step 2 (lines 28-59) spawns a separate Opus agent that reads the TC skill and produces a _tc-brief.md. The TC skill is INVOKED, not just referenced.

**Verdict: PARTIAL (but LOW risk).** The pipeline is at ~1.05:1 infrastructure-to-output ratio, well under 10:1. The "PARTIAL" is because the TC skill (1,945 lines) and PA skill (988 lines) are large reference files that agents must absorb. The META cost is in agent attention, not in file size. But this is architecturally appropriate -- skills SHOULD be large reference files. The ratio is healthy.

---

### FM-7: TC Gap (Per-Content Analysis)

**Pre-surgery:** Builder analyzes AND builds simultaneously. TC skill exists but isn't invoked. No two-instance pattern.

**Post-surgery analysis:**

SKILL.md Step 2 (lines 28-59) implements the full two-instance pattern:

1. **Separate TC agent:** "Spawn 1 Opus agent to derive content-specific composition" (line 30).
2. **TC runs BEFORE builder:** Step 2 completes before Step 3 (builder deployment). "Wait for TC agent to complete. Verify _tc-brief.md exists and contains all 5 sections" (line 59).
3. **Builder receives TC output:** "1. [output-dir]/_tc-brief.md -- YOUR DESIGN BRIEF. Content-specific metaphor, zones, tensions, mechanisms derived by the TC analyst. This is your compositional foundation" (line 81).
4. **TC does Phases 0-3 only:** "Execute Phases 0-3 of the tension-composition skill on this content... DO NOT proceed to Phases 4-5. Stop after mechanism selection" (lines 40-46).
5. **Builder starts at Phase B:** "Phase A: Read the TC brief. Your metaphor, zones, tensions, and mechanisms have been pre-derived by the TC analyst. Internalize them. Your job starts at Phase B" (line 92).

The two-instance pattern is cleanly implemented: TC agent ANALYZES (Phases 0-3), builder BUILDS (Phases B-D). Analysis is separated from construction.

**TC brief output specification** (SKILL.md lines 48-55):
1. STRUCTURAL METAPHOR: The metaphor and WHY it is structural
2. ZONE ARCHITECTURE: How the content divides into zones
3. CONTENT TENSIONS: The key tensions in the content
4. SELECTED MECHANISMS: Which mechanisms serve the metaphor
5. METAPHOR-IMPLIED CSS DIRECTIONS: Specific CSS patterns the metaphor suggests

This is comprehensive -- it gives the builder DIRECTION, not just ANALYSIS. The CSS directions field (item 5) is especially important: "geological strata -> visible layer boundaries via border-left, density gradient via tightening spacing, stratification via bg color shifts." This bridges from metaphor to CSS.

**Verdict: ADDRESSED.** TC is now fully invoked as a separate phase with a separate agent. The two-instance pattern is implemented. The builder receives content-specific compositional intelligence before building.

---

## Absorption Assessment

### Total Builder Input Size

| Input | Lines | When Read | Mandatory? |
|-------|-------|-----------|-----------|
| _tc-brief.md | ~50 | FIRST | Yes |
| conventions-brief.md | 546 | SECOND | Yes |
| Content file | ~200-500 | THIRD | Yes |
| mechanism-catalog.md | ~800 | During build | "Consult as needed" |
| components.css | ~900 | During build | "Consult as needed" |
| tokens.css | 174 | During build | "Consult as needed" |
| prohibitions.md | 353 | Before CSS | Yes |

**Mandatory sequential read: ~950-1,100 lines** (TC brief + conventions brief + content).
**Total if all references consulted: ~3,000+ lines.**

### Risk Analysis

**Is 950-1,100 lines too much for an Opus builder?**

Opus has a 200K context window. 1,100 lines is approximately 4,000-5,000 tokens, or ~2.5% of the context window. The raw capacity is not the issue.

The issue is ATTENTION QUALITY. LLM attention degrades in the middle of long inputs (the "lost in the middle" phenomenon). With 546 lines of conventions brief, the sections at lines 100-250 (Multi-Coherence, Fractal Echo, Unified Metaphor) receive the least attention.

**Mitigating factors:**
1. TC brief as first read (~50 lines) primes the builder with the CONTENT-SPECIFIC composition. Even if middle conventions-brief sections get low attention, the builder arrives pre-loaded with metaphor, zones, tensions, and mechanisms.
2. Conviction Card + Process at the END (high recency) force the builder to engage with multi-coherence, fractal echo, and transition concepts during planning.
3. The builder is Opus (not Sonnet), which has stronger long-context comprehension.
4. The conventions brief is WELL-STRUCTURED with clear section headers, making it navigable during build even if initial read doesn't absorb everything.

**Could the conventions brief be SHORTER?** With TC now providing content-specific composition:
- Section 6 (Unified Metaphor, 23 lines): REDUNDANT with TC brief. The TC brief already provides the metaphor and its structural implications. This section could be reduced to 5 lines ("Your TC brief provides your metaphor. Test: remove all text labels, can a reader feel it from CSS alone?").
- Section 9B (Quality Floor, 16 lines): PARTIALLY REDUNDANT with gate-runner. The gate thresholds already enforce these numbers. This section could be reduced to 3 lines ("Gates enforce the floor. Focus on semantic quality above the floor.").
- Sections 13-14 (Accessibility + Responsive, 30 lines): TEMPLATE content that could move to the HTML skeleton template in the process section, reducing ~20 lines.

**Potential savings: ~40-50 lines** (546 -> ~500). Modest but helpful.

**Verdict: MEDIUM RISK.** The total mandatory input is manageable for Opus, and the TC brief + Conviction Card mitigate the attention trough. But 546 lines of world-description is at the upper edge of productive absorption. The middle sections (4-7) are the most important and most at risk. The recommendation is to add a Builder Quick Reference at the end (high recency) summarizing key concepts from Sections 4-7, rather than trying to shorten the brief further.

---

## New Failure Modes Introduced

### NFM-1: TC-Builder Coherence Gap (NEW, MEDIUM)

The TC agent derives the metaphor, zones, tensions, and mechanisms. The builder receives the TC brief. But the builder can IGNORE or REINTERPRET the TC brief's directions. There is no gate that validates the builder's plan against the TC brief's specification.

**Evidence:** SKILL.md Step 3 (builder deployment) says "Phase A: Read the TC brief... Internalize them. Your job starts at Phase B." But "internalize" is not "comply with." The builder could read the TC brief, decide the metaphor doesn't work, and build something entirely different. No gate catches this divergence.

**DG-4 (Handoff Validation)** checks the builder's plan (zone count, bg deltas, mechanisms, transitions, grid layouts) but does NOT cross-validate against the TC brief. The builder could plan 4 zones with 14 mechanisms (passing DG-4) while completely ignoring the TC brief's zone architecture and mechanism selection.

**Mitigation:** BG-1 checks that the metaphor was derived before library consultation, but it checks the BUILD LOG (the builder's self-report), not the TC brief. The builder could report deriving the metaphor independently while actually ignoring the TC agent's derivation.

**Recommendation:** Add a TC-Builder Alignment check. After the builder writes the conviction statement (before building), compare:
- TC brief zone count vs builder's planned zone count
- TC brief metaphor vs builder's stated metaphor
- TC brief mechanism selections vs builder's planned mechanisms

This does NOT require full alignment (the builder should have creative authority), but flagrant divergence (different metaphor, different zone count) should trigger a WARNING.

### NFM-2: Micro-Gate Cost Creep (NEW, LOW)

The gate-runner (lines 36-69) specifies 4 micro-gate checkpoints during the build. Each micro-gate takes ~30 seconds. Total: ~2 minutes. But micro-gates require the builder to STOP, render, run JS, evaluate results, potentially fix, and re-run. The cognitive cost of 4 interruptions during a creative build process may exceed the mechanical cost.

**Evidence:** No evidence yet (pipeline hasn't been run). This is THEORETICAL.

**Mitigation:** Micro-gates are defined in gate-runner.md, not in SKILL.md. SKILL.md does not mention micro-gates at all -- it only describes the full gate run after build complete (Step 4). So micro-gates may not actually be invoked in the current pipeline.

**Recommendation:** Clarify whether micro-gates are part of the /build-page pipeline or only a reference for manual builds. If they are part of the pipeline, evaluate their cost-benefit after the first run.

### NFM-3: PA Question Volume (NEW, LOW)

57 questions across 9 auditors + 9 Tier 5 questions = substantial evaluation load. Each auditor produces a report. The weaver must synthesize 9 reports into a coherent assessment. The risk is that the VOLUME of PA output overwhelms the fix instruction synthesis.

**Evidence:** SKILL.md Step 6.3 (weaver prompt) asks for Top-5 Issues with specific format (auditor source, question ID, severity, exact quote, scroll position, actionable CSS feedback). This CONSTRAINS the output to actionable items. But the full per-question matrix (_pa-matrix.md) for 57 questions x 9 auditors is ~500+ cells.

**Mitigation:** The weaver is explicitly instructed to RANK by severity (WOULD-NOT-SHIP first) and limit to Top-5. This prevents the volume from becoming the bottleneck.

**Recommendation:** Monitor in first run. If the weaver produces fix instructions longer than 30 items, the PA volume may be counterproductive.

---

## BLOCKING Issues

### BLOCKING-1: No TC-Builder Alignment Validation

**Severity:** MEDIUM-HIGH

The entire TC Gap fix (FM-7) depends on the builder actually USING the TC brief's output. If the builder ignores the TC brief, the two-instance pattern degrades to a one-instance pattern with wasted TC computation. No gate or check validates this.

**Fix:** Add a lightweight cross-validation step between TC brief and builder's conviction statement. Can be a simple text comparison by the orchestrator: does the builder's stated metaphor match the TC brief's metaphor? Does the zone count match? This is 5 minutes of orchestrator work, not a new agent.

**Alternative fix:** Add a line to DG-4 (Handoff Validation) sub-check: "6. TC-builder alignment: builder's conviction metaphor matches TC brief metaphor name."

### BLOCKING-2: FM-2 Middle-Section Attention Trough

**Severity:** MEDIUM

Sections 4-7 of the conventions brief (Multi-Coherence, Fractal Echo, Unified Metaphor, Transition Grammar) contain the most critical compositional guidance and sit in the attention trough of a 546-line document. No structural mechanism guarantees the builder absorbs these sections.

**Fix:** Add a 30-40 line "Builder Quick Reference" at the END of conventions-brief.md (high recency position) that summarizes key concepts from Sections 4-7 in actionable one-liners. This creates a SECOND placement of critical content at the high-recency end of the attention U-curve.

---

## Recommendations

### Priority 1: Add TC-Builder Alignment Check (addresses BLOCKING-1)

Add to SKILL.md Step 3 (Wave 1 Monitoring), after the builder completes the conviction statement but before build starts:

```
### TC-Builder Alignment (orchestrator check)
Compare _tc-brief.md and _build-log.md conviction statement:
- Metaphor names match (or builder documents why they diverge)
- Zone count within +/- 1
- At least 3/5 TC-selected mechanisms appear in builder's plan
If divergent: send builder a message asking them to reconcile or document reasoning.
```

### Priority 2: Add Builder Quick Reference (addresses BLOCKING-2)

Add to the END of conventions-brief.md (after "Process" section, before closing):

```markdown
## BUILDER QUICK REFERENCE

Key compositional concepts (details in Sections 4-7):
- MULTI-COHERENCE: >= 3 channels shift at every boundary, ALL same direction. 4 primary channels: Chromatic, Typographic, Spatial, Structural.
- COHERENCE ARC: Opening (2-3 ch) -> Building (3-4) -> Climax (4-5) -> Resolution (2-3). Not uniform.
- FRACTAL ECHO: Organizing principle echoes at 5 scales. Build largest first. Dense zones = tighter everything; sparse zones = looser everything.
- TRANSITIONS: SMOOTH (1-2 ch, subtle) / BRIDGE (3-4 ch, deliberate pause) / BREATHING (4-5 ch, full reset, max 2 per page).
- PARAMETRIC ECHO: Components adapt to their zone -- tighter padding + heavier borders in dense zones, looser + lighter in sparse zones.
- LAYOUT DIVERSITY: Each topology change = free 3-channel multi-coherence event.
```

### Priority 3: Clarify Micro-Gate Invocation (addresses NFM-2)

Add a note to SKILL.md Step 4 (Gate Runner) clarifying whether micro-gates from gate-runner.md are part of the /build-page pipeline or are reference-only for manual builds.

### Priority 4: Monitor PA Volume (addresses NFM-3)

After first /build-page run, check: (a) total weaver report length, (b) fix instruction count, (c) whether the builder can act on all fixes in one cycle. If not, consider reducing auditor count in initial run from 9 to 5.

### Priority 5: Trim Conventions Brief Redundancy (addresses FM-2 absorption)

Consider shortening:
- Section 6 (Unified Metaphor): Reduce from 23 to ~8 lines (TC brief handles content-specific metaphor)
- Section 9B (Quality Floor): Reduce from 16 to ~5 lines (gates enforce these numbers)
- Sections 13-14 (Accessibility + Responsive): Move template CSS to the Process section's HTML skeleton area

Savings: ~40-50 lines (546 -> ~500).

---

## Summary Verdict

**Overall post-surgery status: 5 of 7 failure modes ADDRESSED, 2 PARTIAL.**

The surgical edits represent a substantial improvement over the pre-surgery pipeline. The two most critical fixes -- TC invocation (FM-7) and guardrail-to-recipe inversion (FM-1) -- are cleanly implemented. The semantic guidance additions (FM-3) and continuation bias countermeasures (FM-5) are strong.

The remaining risks are:
1. **Builder absorption of 546-line conventions brief** (FM-2, MEDIUM) -- mitigated by TC brief + Conviction Card, but attention trough for Sections 4-7 remains.
2. **TC-Builder alignment validation absent** (NFM-1, MEDIUM-HIGH) -- the TC gap is fixed structurally but not verified procedurally.

Neither blocking issue requires major rearchitecture. BLOCKING-1 needs a ~10-line addition to SKILL.md. BLOCKING-2 needs a ~30-line appendix to conventions-brief.md. Both are quick fixes.

**The pipeline is ready for a test run** with these two additions. The first run should be treated as calibration data for all thresholds and should specifically monitor: (a) does the builder reference TC brief concepts in the build log? (b) do Sections 4-7 concepts appear in the output? (c) is the PA volume manageable for the weaver?
