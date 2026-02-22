# 24 -- Holistic Pipeline Coherence Audit

**Author:** Holistic coherence auditor (Opus 4.6)
**Date:** 2026-02-20
**Reports read:** 19 (files 01-19 in ephemeral/pipeline-surgery/)
**Pipeline files read:** SKILL.md (479 lines), conventions-brief.md (547 lines), gate-runner.md (1,159 lines), flagship-pa-questions.md (158 lines), plus TC SKILL.md and PA SKILL.md (referenced)
**Verdict:** READY FOR TEST RUN WITH 5 BLOCKING FIXES

---

## Section 1: Consolidated BLOCKING Issues

All BLOCKING issues from all 19 reports, deduplicated and status-assessed.

### BLOCKING-01: TC Phase Numbering Mismatch (FIXED)
**Source:** Reports 01, 11, 13, 15, 18
**Issue:** TC spawn prompt had phase descriptions shifted by one position from actual TC skill phases.
**Status: FIXED.** Harmony fix in report 01 corrected this. SKILL.md lines 41-49 now correctly describe: Phase 0 = Content Assessment, Phase 1 = Multi-Axis Questioning, Phase 2 = Tension Derivation, Phase 3 = Metaphor Collapse, Phase 3.5 = Commitment, Phase 4 = Mechanism Selection.

### BLOCKING-02: "Stop after Phase 3" vs "Phase 4 Mechanism Selection" Contradiction (FIXED)
**Source:** Reports 01, 11, 13, 15
**Issue:** TC agent told to stop after Phase 3, but mechanism selection is Phase 4. TC brief requires SELECTED MECHANISMS.
**Status: FIXED.** Harmony fix in report 01 changed instruction to "Run through Phase 4 (Mechanism Selection). DO NOT proceed to Phase 5 (Compositional Layout)." TC agent also now receives mechanism-catalog.md as file #3.

### BLOCKING-03: BG-1 Behavioral Gate Checked Wrong File (FIXED)
**Source:** Reports 01, 11
**Issue:** BG-1 checked build log for TC pipeline evidence, but TC agent (not builder) now runs TC pipeline.
**Status: FIXED.** Harmony fix in report 01 changed BG-1 to check TC brief for content assessment -> questioning -> derivation -> collapse -> mechanism selection evidence.

### BLOCKING-04: PA-68 Missing from PA SKILL.md Tier 5 Section (PENDING)
**Source:** Reports 03, 10, 11
**Issue:** PA-68 (Metaphor Spatial Coverage) exists in flagship-pa-questions.md and build-page SKILL.md, but PA SKILL.md Tier 5 section (lines 363-402) still lists only 8 questions (PA-60-67) with /8 scoring thresholds. Build-page SKILL.md uses /9 thresholds. Internal contradiction in PA SKILL.md: Tier 5 section says /8, Mode 4 section says /9.
**Status: PENDING.** Task #33 (pa-skill-enricher) may be addressing this, but it has not been confirmed fixed. The weaver will receive conflicting scoring guidance: SKILL.md says /9, PA SKILL.md says /8.
**Required fix:** Add PA-68 to PA SKILL.md Tier 5 question table. Update all /8 thresholds to /9. Update combined verdict matrix.

### BLOCKING-05: PA-03, PA-24, PA-25 Unassigned in All Files (PENDING)
**Source:** Report 10
**Issue:** Three standard PA questions are defined but never assigned to any Mode 4 auditor. PA-03 ("Does this feel like one designer made it, or three?") is a Tier 1 MANDATORY question that should never have been omitted.
**Status: PENDING.** No task targets this. The reconciliation report proposes: PA-03 to Auditor A, PA-24 to Auditor F, PA-25 to Auditor G.
**Required fix:** Update SKILL.md Section 6.2, PA SKILL.md Mode 4 section, and flagship-pa-questions.md summary table.

### BLOCKING-06: Stacked Gap Threshold Inconsistency (PENDING -- DECISION NEEDED)
**Source:** Report 04
**Issue:** Pipeline uses 120px everywhere (conventions-brief, gate-runner SC-10, SKILL.md). PV2 architecture designed 120px as builder TARGET and 192px as GATE threshold. With 120px as a gate, standard padding (48px + 48px + 48px = 144px) automatically FAILS.
**Status: PENDING.** The three files agree with each other (all say 120px), but the threshold may be too strict for practical use. Standard section padding will frequently fail.
**Required fix:** DECIDE: keep 120px (strict, may cause frequent gate failures) or adopt PV2's 192px (lenient, prevents voids). If 120px: add a note explaining this is intentionally strict and builders should use tight spacing. If 192px: update all three files. EITHER is defensible but must be documented.

### BLOCKING-07: TC Skill Has Zero Sub-Skill Awareness (PENDING)
**Source:** Reports 13, 15
**Issue:** The TC skill was written as standalone end-to-end. Phase 0D says "Every page runs the FULL pipeline (Phases 1-5). No phase skipping." -- directly contradicts build-page's instruction to stop after Phase 4. No TC brief output format is specified in the TC skill. The TC agent must improvise the 5-section ~50-line brief format entirely from the build-page spawn prompt.
**Status: PENDING.** Task #32 (tc-skill-enricher) is in_progress and likely addressing this. The build-page spawn prompt provides enough detail that an Opus agent CAN produce the right output, but the TC skill actively contradicts the instructions.
**Required fix:** Add sub-skill mode section to TC SKILL.md: stop point after Phase 4 (mechanism selection), TC brief output format specification, clarification that Phases 5+ are not executed when invoked by /build-page.

### Summary of BLOCKING Status

| ID | Issue | Status | Who Fixes |
|----|-------|--------|-----------|
| B-01 | TC phase numbering | FIXED | harmony-skillmd (done) |
| B-02 | Phase 3 vs Phase 4 stop point | FIXED | harmony-skillmd (done) |
| B-03 | BG-1 wrong file | FIXED | harmony-skillmd (done) |
| B-04 | PA-68 missing from PA SKILL.md | PENDING | pa-skill-enricher (#33) |
| B-05 | PA-03/24/25 unassigned | PENDING | needs new task or manual fix |
| B-06 | 120px vs 192px stacked gap | PENDING | needs user decision |
| B-07 | TC skill no sub-skill mode | PENDING | tc-skill-enricher (#32) |

**BLOCKING items needing immediate action: 4 (B-04, B-05, B-06, B-07)**

---

## Section 2: Inter-Report Contradictions

### Contradiction C-1: Conventions Brief as RECIPE vs WORLD MODEL

**Report 05** (root cause coverage) classifies the conventions brief as a RECIPE (1.4:1 recipe-to-checklist ratio) and declares the guardrail factory ADDRESSED.
**Report 07** (PV2 alignment) classifies the conventions brief as a WORLD MODEL with "fundamentally different philosophy" from File 42's operational recipe and labels this a BLOCKING gap. Claims the conventions brief has ~3:1 constraint-to-action ratio.
**Report 08** (remediation lessons) rates the conventions brief 1.4:1 recipe-to-checklist (same as 05).

**Resolution:** Reports 05 and 08 are correct on the RATIO. Report 07 is making a PHILOSOPHICAL distinction, not a quantitative one. The conventions brief IS recipe-dominant by line count. It READS like a world model because its voice is descriptive ("this is how the world works") rather than imperative ("do step 1, then step 2, then step 3"). Both observations are true simultaneously. The conventions brief is a RECIPE wrapped in WORLD-MODEL voice.

**Is this a problem?** Report 07 argues the absence of File 42's operational-recipe.md is BLOCKING because the middle-tier experiment proved that sequential-recipe format produces DESIGNED (4/4) while the flagship's world-model format produced FLAT (1.5/4). However, the flagship prompt was NOT the conventions brief -- it was a 963-line constraint-heavy prompt with 7.9:1 guardrail ratio. The conventions brief is fundamentally different from the old prompt. The true test is whether an Opus builder, reading the conventions brief, produces DESIGNED output. N=0 -- we don't know yet.

**Verdict:** NOT BLOCKING for a test run. The conventions brief provides recipes, values, and creative guidance. Whether its world-model voice hurts builder output is an empirical question that the test run will answer.

### Contradiction C-2: Is Zero Inter-Agent Communication a Problem?

**Report 04** (anti-reproduction) rates agent communication as PARTIALLY ADDRESSED. File-based handoffs exist but no SendMessage protocol.
**Report 05** (root cause coverage) rates RC-5 (zero communication) as PARTIALLY ADDRESSED with risk LOW for current sequential architecture.
**Report 07** (PV2 alignment) rates communication protocol absence as SIGNIFICANT.

**Resolution:** All three agree on the facts: file-based communication exists, SendMessage does not. They differ on severity. The current pipeline is SEQUENTIAL (TC -> builder -> gates -> PA -> weaver), so each agent operates after the previous one completes. SendMessage adds value only when agents operate CONCURRENTLY and need to coordinate. In the current architecture, file-based handoffs are sufficient.

**Verdict:** NOT BLOCKING. File-based communication through orchestrator mediation is adequate for the sequential architecture. If future iterations add parallel builders, revisit.

### Contradiction C-3: Operational Recipe Required vs Conventions Brief Sufficient

**Report 07** calls the absence of operational-recipe.md BLOCKING and rates PV2 alignment at 2/10.
**Reports 05, 08, 19** all classify the conventions brief as ADEQUATE for builder guidance.
**Report 04** rates Gate 7 (recipe vs checklist) at 80% compliant.

**Resolution:** Report 07 is evaluating against the PV2 DESIGN SPEC, which is a planning document that was never implemented. The PV2 design is ONE possible architecture. The current architecture DIVERGED from PV2 deliberately -- design-system/CLAUDE.md says "ALWAYS FLAGSHIP" and the conventions brief was written fresh rather than extracted from File 42. The question is not "does this match PV2?" but "does this work?"

**Verdict:** NOT BLOCKING for a test run. The conventions brief may or may not produce the same results as File 42's operational recipe. This is the central empirical question of the test run. Report 07's BLOCKING classification is accurate against PV2 specs but not necessarily against pipeline FUNCTIONALITY.

### Contradiction C-4: How Many PA Questions?

**Report 10** counts 61 question IDs defined (52 standard + 9 Tier 5) but only 58 assigned.
**Report 03** says 57 (48 standard + 9 Tier 5).
**SKILL.md** says "57 questions x 9 auditors."
**PA SKILL.md** Tier 5 section says /8, Mode 4 section says /9.

**Resolution:** The "48 standard" convention counts Tiers 1-3 as standard (44) plus Tier 4 void (4) = 48. Then Tier 5 = 9. Total in the convention: 57. Report 10's "52 standard" counts all non-Tier-5 defined questions including the 3 unassigned (PA-03, PA-24, PA-25). If these 3 are assigned (as recommended), the ASSIGNED total becomes 52 + 9 = 61. The pipeline should state "61 questions x 9 auditors" after fixing B-05.

**Verdict:** The count discrepancy is a documentation issue, not a functional one. Fix B-05 (assign the 3 missing questions) and update all count references.

---

## Section 3: Uncovered Gaps

Issues that NO report adequately addressed:

### GAP-01: No End-to-End Test Has Ever Been Run (N=0)

Every report acknowledges this implicitly, but none treats it as the dominant risk it is. 19 agents have analyzed, cross-referenced, harmonized, and validated the pipeline. Zero agents have RUN it. The pipeline is a theory -- every observation about its quality is PREDICTED, not measured.

Report 06 (debrief) notes: "Validation builds were never run -- N/A. Historical observation." Report 04 (anti-reproduction) notes: "Pipeline surgery IS the codification action." Neither treats N=0 as a BLOCKING issue because they scope to their audit domain.

**The single most important next step is running the pipeline.** Not more analysis. Not more cross-referencing. Not more enrichment. RUN IT.

### GAP-02: HTTP Server Lifecycle Management

Report 06 notes "No explicit HTTP server shutdown (PID tracking)" as SIG-4. No other report addresses this. The SKILL.md starts the server (`python3 -m http.server 8765 &`) but the only shutdown instruction is "Stop the HTTP server after screenshots are complete" (line 233) with no PID capture or kill command.

If the server is not stopped, port 8765 remains bound. A second pipeline run will fail to start its server. This is a practical reliability issue for repeated runs.

**Fix:** Add `SERVER_PID=$!` after the server start command, and `kill $SERVER_PID` after screenshot capture.

### GAP-03: Font Trinity File Reference Discrepancy

Report 10 discovered: SKILL.md SC-03 references "Instrument Serif, Inter, JetBrains Mono" while an enriched prompt references "Instrument Serif / Source Sans 3 / Source Code Pro." No other report caught this. This is NOT in the current pipeline files (both SKILL.md and conventions-brief use the correct trinity), but the PA SKILL.md may have the wrong fonts in an enriched prompt section.

**Fix:** Verify PA SKILL.md font references match the canonical trinity in tokens.css.

### GAP-04: components.css vs merged-components.css Filename

Report 11 flags: SKILL.md line 90 references `components/components.css` but some places reference `merged-components.css`. Need to verify the actual filename on disk.

**Fix:** Run `ls` on the components directory and update the reference if needed.

---

## Section 4: Narrative Coherence Assessment

### Reading SKILL.md Top-to-Bottom

The document tells a coherent 12-step story:

```
MISSION (0) -> INTAKE (1) -> TC ANALYSIS (2) -> BUILD (3) -> GATES (4) ->
SCREENSHOTS (5) -> LOCK SHEET (5.5) -> PA AUDIT (6) -> FIX CYCLE (7) ->
SUCCESS BAR (8) -> OUTPUT (9) -> DETAILS (10) -> NON-NEGOTIABLES (11)
```

**Strengths:**
- The TC insertion (Step 2) creates a clean three-act structure: Gather (1-2), Build (3-4), Evaluate (5-7)
- Each step's output feeds naturally into the next step's input
- The builder spawn prompt (Step 3) is a well-crafted recipe: read order, process phases, creative authority, output specification
- Fix cycle (Step 7) correctly maintains compositional context via conviction statement + transition table references
- Non-negotiables (Step 11) bookend the mission (Step 0) -- the document starts and ends with what matters most

**Weaknesses:**
- Step 4 (Gates) is a SUMMARY TABLE that references gate-runner.md for full specifications. An orchestrator reading SKILL.md has a 16-row table but no JavaScript. The orchestrator must context-switch to gate-runner.md (1,159 lines) mid-execution. This is BY DESIGN (thin orchestrator + external reference), but the experience is less cohesive than inline gates would be.
- Step 6 (PA) has clear auditor assignments but the actual question text is in PA SKILL.md and flagship-pa-questions.md. The orchestrator must paste question text from two external files. This creates a THREE-FILE lookup: SKILL.md tells you WHICH questions, PA SKILL.md has question TEXT, flagship-pa-questions.md has Tier 5 text.
- The weaver prompt (Step 6.3) is comprehensive (55 lines including formatting) but does not include the multi-coherence calibration table or severity calibration that report 09 recommends. The weaver classifies without calibrated scales.

**Overall narrative coherence: 8/10.** The story flows well. The main friction is external file lookups during execution (gate-runner.md for JS, PA files for question text). This is acceptable for a thin-orchestrator architecture.

### Reading Conventions-Brief Top-to-Bottom

The conventions brief tells a world-model story:

```
IDENTITY (what cannot change) -> PERCEPTION (physics of visibility) ->
RICHNESS (governing principle) -> MULTI-COHERENCE (binding rule) ->
FRACTAL ECHO (pattern at every scale) -> UNIFIED METAPHOR (flagship req) ->
TRANSITION GRAMMAR (boundary types) -> CSS VOCABULARY (instruments) ->
CREATIVE AUTHORITY (your freedom) -> QUALITY FLOOR (minimums) ->
COMPOSITIONAL MEMORY (drift prevention) -> FIVE QUESTIONS (self-check) ->
RESTRAINT LIST (prohibitions) -> ACCESSIBILITY -> RESPONSIVE ->
CONVICTION CARD + PROCESS
```

**Strengths:**
- Opens with identity (what IS this world) and closes with process (what DO you do in it)
- The world-model voice is consistent: "this describes the world you are building inside"
- New sections (coherence arc, typographic progression, parametric echo, character-scale, navigation metaphor, transition mapping, component coherence) integrate naturally at correct locations
- PROCESS section at the end provides sequenced build steps with a worked boundary CSS example

**Weaknesses:**
- 547 lines is substantial for a builder to absorb before coding. The 75-line visibility cap finding suggests builders may skim middle sections. Sections 4-7 contain the most critical recipes but occupy the MIDDLE of the document.
- Section 9B (Quality Floor) is positioned BETWEEN Creative Authority (9) and Compositional Memory (10), breaking the creative flow. A builder reads "you are the composer, 80% of decisions are yours" then immediately "you must have >= 14 mechanisms, >= 800 CSS lines." The tonal whiplash may undermine the creative authority message.
- The conviction card + process are at the END. A builder who follows reading order will absorb 14 sections of world model before learning the build PROCESS. This is philosophically correct (understand the world, then build in it) but may lead to "I read 500 lines and still don't know what to DO."

**Overall narrative coherence: 7/10.** The world-model voice is strong and internally consistent. The main risk is that a 547-line document front-loads concepts and back-loads action. The SKILL.md builder prompt partially mitigates this by providing Phase A-D process structure, but the builder must reconcile two process descriptions (SKILL.md's Phase A-D and conventions-brief's PROCESS section).

---

## Section 5: Data Flow Trace

### Step-by-Step Data Flow with Integrity Check

```
USER provides content.md
  |
  v
[STEP 1: INTAKE] Orchestrator reads content, creates output directory
  |
  HANDOFF: content file path + output directory path
  INTEGRITY: CLEAN -- orchestrator parses path, no transformation
  |
  v
[STEP 2: TC ANALYSIS] Opus TC agent reads:
  IN:  TC SKILL.md + content.md + mechanism-catalog.md
  OUT: _tc-brief.md (~50 lines, 5 sections)
  |
  HANDOFF: _tc-brief.md file
  INTEGRITY: RISK -- TC skill says "run full pipeline" but spawn prompt says
  "stop after Phase 4." TC agent must reconcile contradictory instructions.
  The spawn prompt is MORE SPECIFIC and wins, but the contradiction creates
  cognitive friction. See BLOCKING-07.
  |
  v
[STEP 3: BUILD] Opus builder reads:
  IN:  _tc-brief.md + conventions-brief.md + content.md +
       (reference) mechanism-catalog.md, components.css, tokens.css, prohibitions.md
  OUT: output.html + _build-log.md + _cascade-value-table.md
  |
  HANDOFF: 3 files in output directory
  INTEGRITY: RISK -- builder receives ~600 lines of mandatory reading
  (TC brief + conventions brief) plus content. The 75-line visibility cap
  finding suggests the builder may not fully absorb all guidance. MITIGATED
  by Opus model (better absorption than Sonnet) and structured Phase A-D
  process (directed reading, not open-ended).
  |
  v
[STEP 4: GATES] Orchestrator runs 16 SC gates + advisory + deliverable + behavioral
  IN:  output.html (via Playwright), _build-log.md, _tc-brief.md
  OUT: _gate-results.json
  |
  HANDOFF: JSON file with measured values + pass/fail per gate
  INTEGRITY: CLEAN -- gates are programmatic with specific thresholds.
  DEPENDENCY: SC-00 (zone selector validation) must run first. SC-12 (zone count)
  must run before SC-09 and SC-13. These dependencies are documented in
  gate-runner.md but the SKILL.md gate table does not specify execution order
  beyond SC-00 being a "pre-gate." RISK: orchestrator may run gates in wrong
  order. MITIGATED by gate-runner.md specifying execution groups.
  |
  v
[STEP 5: SCREENSHOTS] Orchestrator captures screenshots at 3 viewports
  IN:  output.html (via Playwright)
  OUT: _screenshots/ directory with cold + scroll images
  |
  HANDOFF: Image files on disk
  INTEGRITY: CLEAN -- mechanical capture process. No transformation.
  |
  v
[STEP 5.5: LOCK SHEET] Orchestrator generates lock sheet
  IN:  _build-log.md + _gate-results.json
  OUT: _lock-sheet.md
  |
  HANDOFF: Lock sheet file
  INTEGRITY: JUDGMENT REQUIRED -- orchestrator must classify elements as
  LOCKED/CHALLENGEABLE. This requires understanding of soul constraints
  and research thresholds. Risk of misclassification is low (soul constraints
  are binary; research thresholds are measured in gate results).
  |
  v
[STEP 6: PA AUDIT] 9 Opus auditors read screenshots + answer questions
  IN:  Screenshots (via Read tool) + PA question text (from spawn prompt)
  OUT: 9 auditor reports
  |
  HANDOFF: Auditor reports in _pa/ directory
  INTEGRITY: CLEAN for fresh-eyes. Auditors receive ONLY screenshots +
  questions + evaluation framework (PA SKILL.md). No build context.
  RISK: Auditor quality depends on question clarity and framework absorption.
  The PA SKILL.md evaluation framework is ~300 lines that auditors are
  instructed to read for methodology. Whether they absorb it is unverifiable.
  |
  v
[STEP 6.3: WEAVER] 1 Opus weaver synthesizes
  IN:  9 auditor reports + _gate-results.json + _lock-sheet.md
  OUT: _pa-report.md + _pa-matrix.md
  |
  HANDOFF: Synthesis report + per-question matrix
  INTEGRITY: JUDGMENT -- weaver must calibrate PA-05 score (0-4 with 0.5
  precision) and Tier 5 score (YES/NO per question). No calibration tables
  provided (see report 09 recommendation). Weaver must infer calibration
  from auditor language intensity.
  |
  v
[STEP 7: FIX CYCLE] (if verdict = FIX)
  IN:  _gate-results.json + _pa-report.md + _build-log.md
  OUT: fix-instructions-cycle-N.md -> builder fixes -> re-verify
  |
  HANDOFF: Fix instructions include gate failures with measured values,
  PA top-5 issues with auditor quotes, Tier 5 gaps, compositional context
  with conventions-brief section references.
  INTEGRITY: GOOD -- fix instructions maintain compositional context via
  convention-brief section references, boundary coherence direction from
  transition table, and "re-read conviction statement" framing. This is
  the three-layer defense against recipe-to-checklist degradation.
```

### Data Flow Verdict

The data flow is **SOUND with 3 risk points:**

1. **TC skill contradiction** (BLOCKING-07): TC agent receives conflicting instructions. Opus will likely follow the more specific spawn prompt, but friction exists.
2. **Builder absorption capacity**: 600+ lines of mandatory reading is substantial. This is the NUMBER ONE empirical question the test run must answer.
3. **Weaver calibration**: No multi-coherence or severity calibration tables provided. The weaver must infer quality levels from raw auditor descriptions. This could be fixed by adding calibration tables to the weaver prompt (per report 09).

---

## Section 6: Agent Experience Simulation

### Simulation 1: I AM the TC Agent

I receive the spawn prompt from SKILL.md Step 2. I read the TC SKILL.md (1,946 lines), content file, and mechanism catalog.

**Can I produce a TC brief?**

The spawn prompt tells me: run Phases 0-4, write a ~50 line brief with 5 sections. The TC SKILL.md says Phase 0 = Content Assessment, Phase 1 = Multi-Axis Questioning, Phase 2 = Tension Derivation, Phase 3 = Metaphor Collapse, Phase 4 = Mechanism Selection. Phase 3.5 = Commitment gate.

**Friction points:**
- The TC SKILL.md Phase 0D says "Every page runs the FULL pipeline (Phases 1-5)." The spawn prompt says stop after Phase 4. I must resolve this contradiction. As an Opus agent, I follow the spawn prompt (more specific, more recent).
- No explicit TC brief output format exists in the TC skill. I must construct the 5-section format from the spawn prompt's description. This is DOABLE but adds improvisation.
- Phase 4 in the TC skill is labeled "Compositional Layout Generation" and includes HTML/CSS generation (Phase 4.4-4.8). The spawn prompt says to do Phase 4's MECHANISM SELECTION only. I must self-interpret which sub-steps of Phase 4 to execute. Steps 4.0-4.3 (mechanism extraction, property extraction, coherence checking) are relevant. Steps 4.4+ (component inventory, transition grammar, section-aware composition) are builder territory.

**Verdict: FEASIBLE with friction.** An Opus agent can produce a high-quality TC brief. The friction from contradictory TC skill instructions and absent output format specification introduces 10-15% risk of suboptimal output (e.g., too long, wrong sections, missing mechanism categories). BLOCKING-07 (sub-skill mode in TC skill) would reduce this risk to near-zero.

### Simulation 2: I AM the Builder

I receive the builder spawn prompt. I read: (1) TC brief, (2) conventions brief, (3) content.

**Can I build a page?**

The TC brief gives me: metaphor, zones, tensions, mechanisms, CSS directions. ~50 lines. I absorb this quickly -- it's a design brief.

The conventions brief gives me: identity constraints, perception thresholds, multi-coherence channels with concrete CSS examples, fractal echo with parametric recipes, transition grammar, CSS vocabulary patterns, creative authority, quality floor, process. 547 lines.

My process (from SKILL.md): Phase A (read TC brief), Phase B (plan -- write conviction statement, transition table, fractal echo table), Phase C (build with 3 checkpoints), Phase D (self-verify with cascade value table).

**Friction points:**
- 547-line conventions brief is substantial. As an Opus agent, I can absorb it, but I will prioritize sections that match my TC brief's metaphor. Sections 4 (Multi-Coherence), 7 (Transition Grammar), and 8 (CSS Vocabulary) contain the most actionable recipes. I will skim Identity (Section 1, already known) and Restraint (Section 12, final reminder).
- Two process descriptions: SKILL.md's Phase A-D and conventions-brief's PROCESS section. These are COMPATIBLE (SKILL.md says "from conventions brief") but the builder must reconcile them. Phase A-D is the overarching structure; PROCESS section provides the within-Phase-C detail.
- 3 self-check checkpoints during Phase C are ambitious. Checkpoint 2 (boundary verification: bg deltas >= 15 RGB, >= 3 border configs, >= 3 channels shift per boundary) requires the builder to measure its own output mid-build. This is honor-system verification.
- Quality floor (>= 14 mechanisms, >= 800 CSS lines) is a high bar. This is appropriate for Flagship but may feel constraining.

**Verdict: FEASIBLE.** An Opus builder with TC brief + conventions brief + content has everything needed to build a page. The question is whether the builder USES all the guidance or defaults to familiar patterns. The conviction statement (Phase B, before any CSS) is the key forcing function -- it makes the builder commit to the TC brief's metaphor in writing before building.

### Simulation 3: I AM a PA Auditor

I receive: screenshots (10-15 images at 3 viewports) + my assigned questions (5-13 depending on role) + instruction to read PA SKILL.md evaluation framework.

**Can I audit effectively?**

I read the screenshots using Read tool. I see a warm-palette page with varied sections. My questions ask me to describe what I SEE: spacing rhythm, typography variation, background shifts, transition quality, metaphor presence.

**Friction points:**
- I must read PA SKILL.md (~988 lines) for "evaluation framework." This is a LOT of context for a fresh-eyes auditor. The instruction says "Sections on perceptual language, evaluation approach, scoring guidance, the Three Laws, and the Sovereignty Principle" -- specific sections, not the full file. But the auditor must locate these sections.
- Screenshots from Read tool are viewed as images. The quality of perceptual judgment depends on image resolution and my ability to perceive subtle visual differences in a screenshot.
- PA-05 requires evaluating 4 sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) each at 0-4 scale. This is the most complex judgment call in the entire audit.

**Verdict: FEASIBLE.** The PA audit protocol is well-designed. Fresh-eyes principle is maintained. Question text is clear and uses perceptual language. The main risk is auditor fatigue for heavy loads (Auditor C has 13 questions).

---

## Section 7: Failure Mode Check (7 Known FMs)

| FM | Name | Status | Evidence | Risk |
|----|------|--------|----------|------|
| FM-1 | Guardrail Factory (7.9:1) | **RESOLVED** | Conventions brief ratio: 0.27:1 guardrail-to-recipe (inverted). Building sections 4:1 playbook-dominant. 7 missing playbooks all recovered. | LOW |
| FM-2 | Builder Isolation (75-line cap) | **MITIGATED** | Builder sees ~2,700+ lines across 7 files. Conventions brief alone is 547 lines. TC brief adds ~50 lines of content-specific guidance FIRST. | MEDIUM -- absorption capacity unknown at N=0 |
| FM-3 | Binary Compliance Without Semantics | **MITIGATED** | Conventions brief provides semantic guidance (coherence arcs, typographic progressions, transition-to-coherence mapping). Gates still binary but builder guidance is semantic. | LOW |
| FM-4 | Programmatic != Perceptual | **MITIGATED** | SC-14 catches sub-perceptual CSS. Perception thresholds (>= 15 RGB, >= 2px font-size) are in both builder guidance and gates. PA provides the perceptual verification layer. | LOW |
| FM-5 | Continuation Bias | **MITIGATED** | Fix cycle includes conviction statement re-read, conventions-brief section references, compositional context for each gate failure. TC brief serves as external anchor. Two-instance pattern: TC derives, builder builds. | LOW |
| FM-6 | Meta-Output Ratio | **RESOLVED** | Pipeline infrastructure: ~5,272 lines. Expected output: ~2,000 lines. Ratio: ~2.6:1. Well under 10:1 threshold. | LOW |
| FM-7 | TC Gap (no TC invocation) | **RESOLVED** | TC invocation is now Step 2 of SKILL.md. Separate Opus agent runs Phases 0-4 before builder starts. TC brief provides content-specific compositional foundation. | LOW |

**Verdict: All 7 failure modes ADDRESSED.** 3 RESOLVED, 4 MITIGATED with residual risk at MEDIUM (FM-2) and LOW (FM-3, FM-4, FM-5). The test run will determine whether MITIGATED is sufficient or whether further intervention is needed.

---

## Section 8: Overall Verdict

### Is This Pipeline READY for a Test Run?

**YES -- with 5 fixes that can be applied in <30 minutes.**

The pipeline is architecturally sound. It tells a coherent story from intake to verdict. The data flow is clean with well-defined handoffs. All 7 known failure modes are addressed. The conventions brief is recipe-dominant. The builder receives comprehensive, actionable guidance. TC invocation separates analysis from building. PA maintains fresh-eyes. Fix cycles preserve compositional context.

### What MUST Be Fixed First

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| P0 | **B-04:** Add PA-68 to PA SKILL.md Tier 5 section, update /8 to /9 thresholds | 10 min | Prevents weaver scoring confusion |
| P0 | **B-05:** Assign PA-03 to Auditor A, PA-24 to Auditor F, PA-25 to Auditor G in all 3 files | 15 min | Ensures all defined questions are evaluated |
| P1 | **B-07:** Add sub-skill mode note to TC SKILL.md (even a brief one: "when invoked by /build-page, stop after Phase 4 mechanism selection and produce a ~50 line TC brief") | 5 min | Eliminates contradictory instructions |
| P1 | **GAP-02:** Add PID capture and kill for HTTP server in SKILL.md | 2 min | Prevents port binding on repeated runs |
| P2 | **B-06:** Document the 120px threshold decision (keep or change to 192px) | 5 min | Prevents builder confusion about "expected failures" |

### What Should Wait Until After the Test Run

Everything else. The pipeline has been analyzed by 19+ agents across 19 reports. Further analysis without a test run violates Gate 6 (meta-to-output ratio). The test run will reveal:

1. Whether an Opus builder absorbs 547 lines of conventions brief
2. Whether TC brief quality is sufficient for builder guidance
3. Whether 120px stacked gap threshold causes excessive gate failures
4. Whether the conventions brief's world-model voice produces DESIGNED or FLAT output
5. Whether 16 gates + 57 PA questions catch the right issues at the right severity

None of these questions can be answered by more analysis. They require BUILDING A PAGE.

---

## Section 9: Recommended Fix Priority

**Immediate (before test run):**
1. B-04: PA-68 in PA SKILL.md Tier 5 section + /9 thresholds
2. B-05: PA-03/24/25 assignment in SKILL.md + PA SKILL.md + flagship-pa-questions.md
3. B-07: Sub-skill mode note in TC SKILL.md
4. GAP-02: HTTP server PID management in SKILL.md
5. B-06: Document 120px decision (even just a comment: "intentionally strict")

**After test run (based on results):**
6. Weaver calibration tables (report 09 recommendation -- add if weaver scores are poorly calibrated)
7. Mid-build perceptual checkpoints (report 08 recommendation -- add if builder produces imperceptible CSS)
8. CSS budget allocation guidance (report 08 recommendation -- add if builder over-invests in typography)
9. Content-type awareness (report 04 recommendation -- add if pipeline is used for non-prose content)
10. Sunset protocol (report 04 recommendation -- add after gate set stabilizes)
11. PA-69 (multi-coherence consistency) and PA-70 (content-form coupling) questions (report 09 -- add if PA misses these failure modes)
12. Task #9: design-system/CLAUDE.md sync (factual update, low urgency)
13. Golden reference / CD-006 mapping (report 06's recommended single change -- add if builder output lacks compositional sophistication)

**NOT recommended (analysis is sufficient):**
- Operational-recipe.md extraction from File 42 (the conventions brief serves this purpose differently -- test first)
- Gate-runner.js standalone executable (current inline approach works -- optimize only if gates need independent testing)
- Tier routing (always-Flagship is correct for current use case)
- Full PV2 implementation (current divergence is deliberate and may be better)

---

## Appendix: Report Quality Assessment

| Report | Focus | Quality | Key Contribution |
|--------|-------|---------|------------------|
| 01 | SKILL.md changelog | A | Definitive record of all edits + 3 critical harmony fixes |
| 02 | Conventions changelog | A- | Clean record of 7 gap additions + RGB threshold fix |
| 03 | PA questions changelog | A | PA-68 addition with full cross-file propagation |
| 04 | Anti-reproduction xref | A+ | Most thorough single-agent audit. 7 gates checked, 10 codification changes traced, 4 BLOCKING gaps found |
| 05 | Root cause coverage | A+ | Complete 15-root-cause analysis with guardrail ratio quantified at 0.56:1 |
| 06 | Debrief xref | A | 36 findings tracked across debrief + manifests + xref files. 24 ADDRESSED |
| 07 | PV2 alignment | B+ | Valuable PV2 comparison but over-indexes on design spec compliance vs actual functionality |
| 08 | Remediation lessons xref | A | 15 innovations tracked, 7/12 WELL PRESERVED. Identified mid-build verification gap |
| 09 | PA metacognitive analysis | A | Deep analysis of fresh-eyes tension + TC awareness. Proposed PA-69, PA-70, weaver calibration |
| 10 | PA assignment reconciliation | A+ | Definitive reconciliation across 18 files. Found PA-03/24/25 gap. Canonical table |
| 11 | SKILL.md harmony audit | A | Found 3 BLOCKING issues (all subsequently FIXED). Good edge case analysis |
| 12 | Conventions harmony audit | A- | Thorough tone, redundancy, placement analysis. Character-scale register tone concern valid |
| 13 | TC skill implications | A | Identified core mismatch: TC skill unaware it's a sub-skill. 4 needs identified |
| 14 | Gate runner implications | B+ | Proposed TC-01 and TC-02 gates. Good but these are enhancements, not fixes |
| 15 | TC sufficiency audit | A | 10-dimension sufficiency matrix. Found 6 NEEDS ENRICHMENT dimensions |
| 16 | PA sufficiency audit | A- | 10-dimension matrix. Weaver protocol gap is the key finding |
| 17 | Skill interaction analysis | A | TC output -> PA detection matrix is novel and valuable. Found mechanism detection gap |
| 18 | Canonical pipeline diagram | B+ | Useful reference but most value is the definitive ASCII flow diagram |
| 19 | Failure mode audit | A | Fresh-eyes assessment of all 7 FMs. Quantified conventions-brief at 3.64:1 recipe ratio |

---

**END OF HOLISTIC COHERENCE AUDIT**

**Total reports read:** 19 (files 01-19)
**Total pipeline files assessed:** 7 (SKILL.md, conventions-brief.md, gate-runner.md, flagship-pa-questions.md, TC SKILL.md, PA SKILL.md, design-system/CLAUDE.md)
**BLOCKING issues:** 7 found, 3 FIXED, 4 PENDING (B-04, B-05, B-06, B-07)
**Minimum fixes before test run:** 5 (30 minutes estimated)
**Overall verdict:** READY FOR TEST RUN WITH FIXES
