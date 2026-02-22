# Meta-Cognitive Structural Audit: /build-page SKILL.md

**Subject:** `~/.claude/skills/build-page/SKILL.md` (436 lines)
**Auditor:** Opus 4.6, fresh-eyes meta-cognitive assessment
**Date:** 2026-02-20
**Files read:** 8 (SKILL.md, conventions-brief.md, gate-runner.md, flagship-pa-questions.md, tension-composition/SKILL.md, perceptual-auditing/SKILL.md, design-system/CLAUDE.md, compositional-core/CLAUDE.md)

---

## 1. EXECUTIVE SUMMARY

**Verdict: STRUCTURALLY SOUND WITH SIGNIFICANT GAPS**

SKILL.md is a well-organized, actionable orchestrator file that would allow a competent agent to run the pipeline from start to finish. Its greatest strength is the builder spawn prompt (Section 2) -- a genuine recipe that embodies the "recipe beats checklist" lesson. Its greatest weakness is a fundamental architectural omission: the tension-composition pipeline (Phases 0-5) that converts content into metaphor, mechanisms, and operational recipe is entirely absent from the orchestration flow. SKILL.md sends the builder directly to the conventions brief with raw content, bypassing the TC pipeline that every other pipeline document says is mandatory. This means the file currently orchestrates a BUILDER, not a PIPELINE. The file also contains 3 factual inaccuracies in its cross-references to gate-runner.md (line count, gate count, gate enumeration).

---

## 2. DIMENSION SCORES

### Dimension 1: ROLE CLARITY -- 4/5

SKILL.md immediately communicates its role in the frontmatter (lines 1-9): "Orchestrates: Opus builder with conventions brief, programmatic gate verification, 9-auditor perceptual audit." Section 0 MISSION is clear. The `>>> DO NOT build the page yourself` directive (line 32) is excellent -- binary, unambiguous.

**Deduction (-1):** The frontmatter says it "Orchestrates" but the actual orchestration is narrower than the description suggests. The TC pipeline (tension-composition Phases 0-5) is referenced in `design-system/CLAUDE.md` and `compositional-core/CLAUDE.md` as a mandatory component of /build-page, but SKILL.md contains zero TC invocation. An agent reading SKILL.md alone would not know that content should pass through multi-axis questioning, tension derivation, and metaphor collapse before reaching the builder. The role description implies a richer orchestration than what the file actually orchestrates.

### Dimension 2: INFORMATION ARCHITECTURE -- 4/5

The reading order is logical and well-sequenced:
1. MISSION (what success looks like)
2. INTAKE (how to start)
3. TEAM CREATION (who does the work)
4. GATE RUNNER (verify the output)
5. SCREENSHOT CAPTURE (prepare for audit)
6. LOCK SHEET (categorize elements)
7. PA DEPLOYMENT (audit the output)
8. FIX CYCLE (remediate issues)
9. SUCCESS BAR (define done)
10. OUTPUT SUMMARY (wrap up)
11. PRACTICAL DETAILS (reference)
12. RE-STATEMENT OF NON-NEGOTIABLES (anchor)

This mirrors the actual execution sequence. The most critical information (soul constraints at line 17, builder model requirement at line 40) appears early. Section 10 RE-STATEMENT is an excellent anti-drift anchor -- binary rules restated after 400 lines of procedural detail.

**Deduction (-1):** The gate table (Section 3.2, lines 126-143) lists 16 gates but then Section 3.3 (line 147) refers to "16 gates (plus advisory gates SC-13B, SC-16, deliverable gates DG-1 through DG-4, and behavioral gates BG-1 + BG-2)." This means the actual count is 16 + 2 + 4 + 2 = 24 items, not 16. The table creates an incomplete mental model that the prose then contradicts. An agent might run 16 gates and consider the job done.

### Dimension 3: REFERENCE INTEGRITY -- 2/5

This is SKILL.md's weakest dimension. Multiple factual inaccuracies exist in cross-references:

**INACCURACY 1: Gate-runner line count.** Line 124 states: `gate-runner.md (992 lines, 21 gates with proven JS)`. The actual file is **1,159 lines** and contains **22 gates** (1 pre-gate + 17 blocking + 2 advisory + 2 behavioral, per gate-runner.md line 1143). The 992/21 numbers are stale from a previous version.

**INACCURACY 2: Gate count in Section 3.2.** The header says "Run these 16 composition-critical gates" (line 122). The table lists 16 entries (SC-00 through SC-15). But the actual full gate suite has 22 gates. Section 3.3 then mentions additional gates (SC-13B, SC-16, DG-1-4, BG-1-2) that are NOT in the table. This creates ambiguity: does the orchestrator run 16 gates or 22?

**INACCURACY 3: DG-3 is missing.** Section 3.4 (Deliverable Gates) lists DG-1, DG-2, and DG-4 but does not mention DG-3 (Landmark Completeness). DG-3 exists in gate-runner.md (line 1051) as a blocking Tier B gate. Its absence from SKILL.md means the orchestrator might not check for header/main/footer presence.

**INACCURACY 4: conventions-brief.md line count.** Not explicitly stated in SKILL.md, but the conventions brief is 443 lines (not the ~440 that conventions-brief.md itself claims at line 443 -- minor, self-referential).

**SOUND REFERENCE:** File paths for `conventions-brief.md`, `mechanism-catalog.md`, `components.css`, `tokens.css`, and `prohibitions.md` are all valid and resolve correctly. The relative paths (`design-system/pipeline/...`) are correct from the project root.

**SOUND REFERENCE:** The PA question assignments in Section 5.2 match `flagship-pa-questions.md` exactly (verified auditor letter assignments and question IDs).

### Dimension 4: PROPAGATION EFFECTIVENESS -- 4/5

The builder spawn prompt (lines 44-86) is the single best section of the file. It is a RECIPE, not a CHECKLIST:

- Reading order specified with rationale ("primacy establishes world model, recency keeps soul constraints fresh")
- Process phases named and sequenced (A through D)
- Self-check checkpoints with specific numeric thresholds
- Creative authority explicitly granted with override protocol
- Content-form coupling explained as a principle, not a rule
- Deliverable files specified with purpose

This directly embodies the "recipe vs checklist" finding from the retrospective research. The builder receives compositional intelligence, not just constraints.

**Deduction (-1):** The builder does NOT receive the mechanism-catalog as a "must read" -- it is listed as "consult as needed" (line 53). But the conventions-brief (which the builder reads FIRST) contains quality floor requirements of ">= 14 mechanisms deployed across all 5 categories" (conventions-brief line 248). The builder needs the mechanism catalog to meet this bar, but the catalog is positioned as optional reference. A builder that takes "consult as needed" literally might not consult it and then fail DG-4 (which requires >= 14 mechanisms). This is not the 75-line visibility cap problem of the Flagship, but it is a weaker version of inverted quality routing.

### Dimension 5: ORCHESTRATION LOGIC -- 4/5

The pipeline stage sequence is clear and mostly unambiguous:

```
INTAKE -> BUILD -> GATES -> SCREENSHOTS -> LOCK SHEET -> PA -> FIX CYCLE -> VERDICT
```

The gate-to-PA handoff is well-defined: all blocking gates must PASS before PA runs. The fix cycle has a clear 3-cycle limit with ESCALATE. The success bar (Section 7) provides a precise 4-cell verdict matrix.

**Deduction (-1):** The fix cycle (Section 6) states "CRITICAL: Use the SAME Opus builder agent that produced the original page" (line 352). However, the Task tool creates agents that terminate after completing their task. Maintaining the "same agent" across fix cycles requires keeping the builder alive between waves, which the SKILL.md does not explicitly address. An orchestrator following SKILL.md literally would need to understand that "same agent" means "same Task tool task kept open" -- this is implicit, not explicit.

### Dimension 6: FAILURE MODE RESILIENCE -- 3/5

**HANDLED WELL:**
- Missing builder output files: explicitly checked (lines 90-95)
- Gate failures: structured fix instruction routing (lines 161-162)
- Fix cycle exhaustion: 3-cycle limit with ESCALATE (line 372)
- HTTP server lifecycle: start before gates, stop after screenshots (implicit from Section 4)

**NOT HANDLED:**
- **What if the conventions-brief file is missing?** The builder spawn prompt hardcodes `design-system/pipeline/conventions-brief.md` as PRIMARY GUIDANCE. If this file does not exist (corrupted working directory, wrong branch), the builder has zero world model. No fallback is specified.
- **What if Playwright fails to navigate?** The gate runner requires Playwright to load `http://localhost:8765/output.html`. If the server fails to start (port in use), if fonts fail to load, or if the page has JavaScript errors, no recovery path is documented.
- **What if fewer than 9 PA auditors successfully spawn?** Section 5 spawns 9 parallel agents. If some fail, the weaver receives incomplete coverage. No minimum auditor count threshold is specified.
- **What if the HTTP server port (8765) is already in use?** No port selection or retry logic.

### Dimension 7: META-COGNITIVE COHERENCE -- 3/5

**COHERENT:** SKILL.md understands that recipe beats checklist (the builder spawn prompt proves this). It understands that same-builder fix cycles preserve compositional memory (Section 6.2). It understands that fresh-eyes PA auditors must have zero build context (lines 219, 233). It understands that Playwright contention is a problem and solves it with screenshot pre-capture (Section 4).

**INCOHERENT:** The most significant meta-cognitive gap is the ABSENCE OF THE TC PIPELINE.

`design-system/CLAUDE.md` states (under SKILLS):
> "What it orchestrates: Content analysis -> TC pipeline (Flagship-only) -> Opus builder deployment -> 21-gate programmatic verification -> Mode 4 PA"

`compositional-core/CLAUDE.md` states (under BUILD PROTOCOL):
> "What /build-page does:
> 1. Content analysis (structural heterogeneity, rhetorical variety, mechanism affinity)
> 2. TC pipeline Phases 0-5 (metaphor derivation, mechanism selection, operational recipe)
> 3. Opus builder deployment (with recipe, not checklist)"

But SKILL.md goes directly from INTAKE (read content) to TEAM CREATION (spawn builder). There is no Phase 0-5 TC pipeline execution. The builder receives the raw content and the conventions brief. The builder is expected to derive metaphor, select mechanisms, and build CSS all in one agent. This IS what the builder spawn prompt's Phase A-D describe, but it conflates TC pipeline work (which 1,878 lines of tension-composition SKILL.md specify in detail) with builder work.

This creates a coherence gap: the rest of the ecosystem describes /build-page as an orchestrator that runs TC THEN hands a recipe to the builder. SKILL.md describes /build-page as an orchestrator that hands raw content to the builder and lets the builder do everything.

This may be intentional ("fat core" architecture where one Opus agent does planning + building), but it contradicts the documented pipeline architecture elsewhere.

**ALSO INCOHERENT:** SKILL.md says "Run these 16 composition-critical gates" but gate-runner.md has 22. The micro-gate schedule described in gate-runner.md (MG-1 through MG-4, run DURING build) is absent from SKILL.md -- SKILL.md only runs gates AFTER the builder completes. This means the highest-leverage gate intervention (catching problems at lowest fix cost) is not orchestrated.

### Dimension 8: AGENT COMPLIANCE LIKELIHOOD -- 5/5

This is SKILL.md's strongest dimension. Nearly every instruction is binary:

- "Spawn ONE Opus agent as the builder" (line 37)
- "Model: Opus (ALWAYS -- never Sonnet for builders)" (line 40)
- "Run programmatic gates YOURSELF (the orchestrator). Do not spawn a separate agent." (line 99)
- "ZERO concurrent Playwright usage" (line 423)
- "After Cycle 3: ESCALATE to user. Do NOT loop beyond 3 cycles." (line 372)
- "Container: 940-960px. Every page. No exceptions." (line 431)

There are zero "use good judgment" instructions. Every directive has a specific actor, a specific action, and a specific threshold. The judgment-free design means a Sonnet orchestrator would produce the same behavior as an Opus orchestrator.

The question assignment table (Section 5.2) is precise and unambiguous. The weaver prompt (Section 5.3) specifies exact scoring criteria, verdict thresholds, and output structure. The fix cycle instructions (Section 6) include specific file names, framing language, and re-verification protocol.

### Dimension 9: ECOSYSTEM FIT -- 3/5

**FITS WELL:**
- `design-system/CLAUDE.md` routes "/build-page" directly to this skill. The trigger phrases match.
- The success bar (PA-05 >= 3.5, Tier 5 >= 6/8) matches the criteria stated in `design-system/CLAUDE.md` and `compositional-core/CLAUDE.md`.
- The agent model table (Section 9) matches the Opus-for-builders mandate established by pipeline research.

**FITS POORLY:**
- `design-system/CLAUDE.md` describes a 7-step process: "1. Content analysis 2. TC pipeline Phases 0-5 3. Opus builder deployment 4. 21-gate programmatic verification 5. Mode 4 PA 6. Fix cycles 7. Verdict." SKILL.md only implements steps 3-7. Steps 1-2 (content analysis + TC pipeline) are missing.
- `compositional-core/CLAUDE.md` describes phase-gated library access: "Phases 0-3: TC runs BLIND (no library access). Phase 3.5: Metaphor lock. Phase 4: Mechanisms extracted. Phase 5: Optional case study comparison." SKILL.md has no phase gating -- the builder receives ALL reference files (mechanism-catalog, components, tokens, prohibitions) simultaneously.
- `design-system/CLAUDE.md` says "Sub-skills invoked automatically: Tension-composition (TC): Full Phases 0-5." SKILL.md does not invoke the TC skill.
- Gate-runner.md has 22 gates; SKILL.md references 21 gates (line 124) and tabulates 16 (Section 3.2). The "21 gates" claim in the cross-reference does not match either the 16 in the table or the 22 in gate-runner.md.

**CONTRADICTION:** `design-system/CLAUDE.md` says "Anti-gravity mechanisms: 94.7% deployment (18/19 mechanisms verified)" and specifies phase-gated access as critical to anti-gravity. SKILL.md bypasses all anti-gravity mechanisms by giving the builder simultaneous access to all files.

### Dimension 10: EVOLUTION READINESS -- 4/5

SKILL.md is well-structured for targeted edits:

- **Sections are logically separated.** The builder spawn prompt (Section 2) can be edited independently of the gate table (Section 3.2) or the PA deployment (Section 5).
- **The question assignment table (Section 5.2) is easy to update.** Adding or removing questions is a single-row edit.
- **The success bar (Section 7) is a self-contained table** that can be adjusted without cascading changes.
- **Hard-coded values are few and well-contained:** HTTP port 8765 (line 104), viewport widths [1440, 1024, 768] (line 186), gate thresholds in the table.

**Deduction (-1):** There is no version number or changelog. Given the 436-line size and the number of stale references already present (992 lines, 21 gates), a simple `Version: X.Y (YYYY-MM-DD)` header would help track whether the file is current. The stale gate-runner reference suggests at least one edit round occurred on gate-runner.md without updating SKILL.md's cross-reference.

---

## 3. BLOCKING ISSUES (Must Fix Before Pipeline Can Be Trusted)

### BLOCKING-1: Missing TC Pipeline Orchestration

**What:** SKILL.md does not invoke the tension-composition pipeline (Phases 0-5). The builder receives raw content and the conventions brief, not a metaphor, operational recipe, or mechanism selection informed by TC analysis.

**Why blocking:** Every other pipeline document (design-system/CLAUDE.md, compositional-core/CLAUDE.md, pipeline/CLAUDE.md) describes TC as a mandatory component of /build-page. The conventions-brief itself (Section 6: UNIFIED METAPHOR) says "Your page needs one structural metaphor that drives CSS decisions" -- but the orchestrator does not ensure the metaphor is derived through the TC pipeline's rigorous 6-phase process.

**Impact:** Without TC, the builder derives metaphor ad hoc during the build. This is the "fat core" approach. It may work with Opus, but it bypasses:
- The library prohibition (anti-gravity R1) -- the builder reads all reference files simultaneously
- The metaphor quality rubric (18-point scoring in TC SKILL.md)
- The 6 binary rejection checks
- The perceptual risk assessment
- The divergence mandate

**Fix:** Add a "Wave 0: TC Pipeline" step between INTAKE and TEAM CREATION. The orchestrator either runs TC itself or spawns a TC agent, producing: conviction statement, transition table, fractal echo table, mechanism selections, and operational recipe. The builder then receives these artifacts instead of (or alongside) the conventions brief.

**Alternatively:** If the "fat core" design is intentional (builder does TC + build in one pass), document this explicitly and reconcile with design-system/CLAUDE.md which says otherwise.

### BLOCKING-2: Stale Gate-Runner Cross-Reference

**What:** Line 124 says `gate-runner.md (992 lines, 21 gates with proven JS)`. The actual file is 1,159 lines with 22 gates.

**Why blocking:** An orchestrator that believes there are 21 gates and the file is 992 lines may read an old cached version or stop reading at line 992. The gate table (Section 3.2) lists only 16 of the 22 gates. DG-3 (Landmark Completeness -- checking for header/main/footer) is missing entirely from SKILL.md.

**Fix:** Update line 124 to: `gate-runner.md (1159 lines, 22 gates with proven JS)`. Add DG-3 to Section 3.4. Reconcile the "16 composition-critical gates" header with the actual full gate suite.

### BLOCKING-3: Missing Micro-Gate Schedule

**What:** Gate-runner.md defines MG-1 through MG-4 (micro-gates run DURING the build, between build phases). SKILL.md only runs gates AFTER the builder completes (Section 3).

**Why blocking:** Micro-gates are described as "Why here: If HTML structure is wrong, all CSS is wasted. Catches structural foundation problems when fix cost is lowest." The gate-runner explicitly says "Builder cannot proceed until the micro-gate passes." SKILL.md does not instruct the builder to pause for micro-gate checks.

**Impact:** Without micro-gates, the builder may produce 1000+ lines of CSS on a broken HTML skeleton. All post-build gate failures then require full remediation instead of incremental correction. This was identified as a key failure mode.

**Fix:** Add micro-gate checkpoints to the builder spawn prompt's Phase C (Build). At minimum, reference the 4 micro-gate groups and instruct the builder to verify before proceeding. The orchestrator could also interleave micro-gate runs between builder phases (though this requires keeping the builder alive and communicating mid-build).

---

## 4. SIGNIFICANT ISSUES (Should Fix for Quality)

### SIGNIFICANT-1: Phase-Gated Library Access Not Enforced

The builder spawn prompt (line 52-56) presents ALL reference files as simultaneously available: mechanism-catalog, components.css, tokens.css, prohibitions.md. The anti-gravity mechanism (R1: Phase-Gated Library Access) that the rest of the ecosystem mandates is not enforced.

**Impact:** The builder may read the mechanism catalog before deriving a metaphor, leading to pattern-matching instead of tension-derivation. This is the precise failure mode that 5 anti-gravity rules were designed to prevent.

**Fix:** If TC is run separately (per BLOCKING-1), the builder receives TC output + constrained file access. If TC is embedded in the builder, the builder prompt must explicitly phase-gate: "Read mechanism-catalog.md ONLY after you have committed to a metaphor in your conviction statement."

### SIGNIFICANT-2: Mechanism Catalog as "Consult as Needed"

Line 53 positions the mechanism catalog as "consult as needed during build." But conventions-brief.md (line 248) requires ">= 14 mechanisms deployed across all 5 categories." DG-4 validates this threshold. A builder that takes "consult as needed" literally and does not consult it will fail DG-4.

**Fix:** Either promote mechanism-catalog to mandatory reading (after metaphor commitment) or add a note: "You will be evaluated on mechanism deployment from all 5 categories. Consult the catalog to ensure coverage."

### SIGNIFICANT-3: Weaver Does Not Receive Convention-Brief Section References for Fix Context

Gate-runner.md (lines 229-256) defines a "Fix Recipe Compositional Context" table mapping each gate category to a conventions-brief section reference. SKILL.md's fix cycle (Section 6.1) instructs the orchestrator to include "Compositional Context (from build log and conventions brief)" but does not reference the specific gate-to-brief-section mapping from gate-runner.md.

**Impact:** Fix instructions may lack compositional context, degrading from recipe to checklist during fix cycles -- the exact pattern identified as a root cause in the Flagship failure.

**Fix:** Add the gate-to-brief-section mapping table to Section 6.1, or reference gate-runner.md's "Fix Recipe Compositional Context" section explicitly.

### SIGNIFICANT-4: No Explicit HTTP Server Shutdown

Line 196 says "Stop the HTTP server after screenshots are complete." But the server is started with `&` (background process) in line 104. No explicit `kill` command or PID tracking is specified. If the server is not stopped and a subsequent build uses the same port, the new server will fail to start.

**Fix:** Add explicit server lifecycle management: capture PID on start, kill after screenshots. Example: `PID=$!; ... ; kill $PID`

### SIGNIFICANT-5: Question Count Inconsistency

SKILL.md's PA question assignment table (Section 5.2) assigns questions PA-01 through PA-48 plus PA-50-53 plus PA-60-67. This totals to approximately 56 questions across 9 auditors, which matches `flagship-pa-questions.md`. However, the question IDs do not form a contiguous range (PA-49 is skipped, PA-54-59 are skipped, PA-24/25 are absent). An agent counting questions might be confused by the gaps.

**Minor fix:** Add a note clarifying that question IDs are non-contiguous (some IDs were retired or are cross-page only).

---

## 5. OBSERVATIONS (Strengths, Patterns, Subtleties)

### STRENGTH: The Builder Spawn Prompt is a Masterwork

Lines 44-86 represent the most important 42 lines in the entire pipeline. They embody every lesson learned:
- **Recipe, not checklist:** Sequenced phases (A-D) with specific actions at each
- **Primacy/recency framing:** "Read FIRST... Read LAST before CSS begins"
- **Self-check with thresholds:** Binary numeric checks at 3 checkpoints
- **Creative authority with protocol:** "You may override ANY non-soul value if you log the override"
- **Content-form coupling as principle:** "Identical visual treatment across sections with different content is a design failure"
- **Deliverable specification:** 3 files with clear purposes, including mandatory BRIEF REFLECTION

This prompt is strong enough that an Opus builder receiving it would likely produce a DESIGNED page even without TC pre-processing. The conventions-brief it points to (443 lines of world-description) carries enough compositional intelligence to compensate for the missing TC pipeline in many cases.

### STRENGTH: Screenshot Pre-Capture Pattern

Section 4 implements the "screenshot pre-capture" pattern validated in Mode 4 PA: the orchestrator takes all screenshots before spawning auditors. This eliminates Playwright contention entirely and enables 9 parallel auditors. This is a direct application of a hard-won operational lesson.

### STRENGTH: Lock Sheet Architecture

Section 4.5 introduces the lock sheet as a bridge between gate results and PA weaver. The three-tier categorization (LOCKED Soul / LOCKED Research / CHALLENGEABLE Builder) is sound. The directive "Do NOT give it to PA auditors -- they must remain fresh-eyes with zero build context" (line 208) protects audit integrity.

### STRENGTH: Fix Cycle Framing

Section 6.2 includes: "Re-read your conviction statement and transition table in _build-log.md before applying fixes." This directly addresses the "fix cycles degrade from recipe to checklist" finding by anchoring the builder in compositional context before applying fixes.

### PATTERN: Implicit "Fat Core" Architecture

SKILL.md implements a "fat core" where one Opus agent does TC + build. This is architecturally simpler (fewer agents, no inter-agent handoff, no TC output artifact management) but contradicts the documented pipeline architecture. The fat core may actually be the RIGHT design for practical reasons (TC output is highly compressed when passing between agents; an Opus builder reading the conventions-brief may derive metaphor as effectively as running TC separately). If so, this should be explicitly stated and the design-system/CLAUDE.md should be updated to match.

### SUBTLETY: The Build Log as Memory Device

The required build log deliverables (conviction statement, fractal echo table, transition table, midpoint observation, override log, restraint log, five-question responses, brief reflection) serve dual purposes: (1) artifact for verification, and (2) compositional memory device for the builder. By writing the conviction statement BEFORE any CSS, the builder commits to a direction that persists through the build. This is the "compositional memory" concept from conventions-brief Section 10 operationalized as a build requirement.

---

## 6. CROSS-FILE CONTRADICTION REPORT

| SKILL.md Says | Referenced File Says | Contradiction Type |
|---|---|---|
| "992 lines, 21 gates" (line 124) | gate-runner.md is 1,159 lines with 22 gates (line 1143) | **Factual error** (stale reference) |
| "Run these 16 composition-critical gates" (line 122) | gate-runner.md defines 22 gates total: 1 pre-gate + 15 programmatic blocking + 2 advisory + 2 behavioral + 4 deliverable (grouped as 22) | **Scope mismatch** (16 vs 22) |
| Builder receives all reference files simultaneously | compositional-core/CLAUDE.md: "PROHIBITED until Phase 5: case-studies/ directory... grammar/mechanism-catalog.md (permitted at Phase 4, NOT before)" | **Anti-gravity violation** |
| No TC pipeline invocation | design-system/CLAUDE.md: "What it orchestrates: Content analysis -> TC pipeline (Flagship-only) -> Opus builder deployment" | **Pipeline architecture mismatch** |
| DG-3 not mentioned | gate-runner.md: DG-3 Landmark Completeness (header + main + footer, Tier B blocking) at line 1051 | **Gate omission** |
| No micro-gates during build | gate-runner.md: MG-1 through MG-4, "Builder cannot proceed until the micro-gate passes" (lines 36-69) | **Process omission** |
| "Tier 5 >= 6/8" success bar (line 16) | flagship-pa-questions.md: 7-8 = COMPOSED, 5-6 = APPROACHING (line 125-128) | **Consistent** (6/8 maps to APPROACHING-COMPOSED boundary) |
| "PA-05 >= 3.5" success bar (line 16) | perceptual-auditing SKILL.md: PA-05 sub-criteria scoring at lines 88-132 | **Consistent** (PA-05 is scored 0-4 with 4 sub-criteria) |
| Builder model always Opus (line 40) | design-system/CLAUDE.md: "ALWAYS set model: 'opus' explicitly" | **Consistent** |
| 9 Opus PA auditors (line 212) | perceptual-auditing SKILL.md Mode 4: 9 auditors (lines 540-551) | **Consistent** |
| Weaver verdict matrix (lines 306-309) | perceptual-auditing SKILL.md verdict matrix (lines 580-587) | **Consistent** |
| Question assignments (Section 5.2) | flagship-pa-questions.md auditor assignments (lines 131-143) | **Consistent** |

---

## 7. RECOMMENDATIONS (Prioritized)

### Priority 1: Fix BLOCKING Issues

1. **Add TC Pipeline Orchestration or Document Fat Core Decision.** Either:
   - (A) Add a "Wave 0: TC Pipeline" section that invokes tension-composition SKILL.md, runs Phases 0-5, and produces artifacts (conviction statement, metaphor, mechanism selections, operational recipe) that are passed to the builder. This aligns with design-system/CLAUDE.md.
   - (B) Explicitly document the "fat core" decision: "This orchestrator implements a single-agent architecture where the builder derives metaphor and builds in one pass. The conventions-brief provides sufficient compositional intelligence for a single Opus agent. This design was chosen over multi-agent TC + builder separation because [reason]." Then update design-system/CLAUDE.md to match.

2. **Update gate-runner cross-reference.** Line 124: change `(992 lines, 21 gates with proven JS)` to `(1159 lines, 22 gates with proven JS)`.

3. **Add DG-3 to Section 3.4** or ensure the gate table (Section 3.2) includes all 22 gates.

4. **Add micro-gate schedule** to the builder spawn prompt or as a separate orchestrator-mediated verification step during the build.

### Priority 2: Fix SIGNIFICANT Issues

5. **Enforce phase-gated library access** in the builder spawn prompt if TC is embedded in the builder.

6. **Promote mechanism-catalog** from "consult as needed" to "read after metaphor commitment" with a note about DG-4's >= 14 mechanism threshold.

7. **Add gate-to-brief-section mapping** to fix cycle instructions (Section 6.1).

8. **Add HTTP server lifecycle management** with PID tracking.

### Priority 3: Polish

9. **Add version header** (e.g., `Version: 1.0 (2026-02-20)`) for change tracking.

10. **Reconcile gate counts** throughout the file: decide whether Section 3.2 should list all 22 gates or explicitly state "16 of 22 gates; remaining 6 are checked separately per Sections 3.3-3.4."

11. **Add minimum auditor count threshold** for PA deployment (e.g., "If fewer than 7 of 9 auditors produce reports, respawn failed auditors before proceeding to weaver").

12. **Add port retry logic** or parameterize the HTTP server port.

---

## 8. THE BIG QUESTION: "Does This File Do Its Job?"

**Yes, with a structural gap.**

SKILL.md would allow a competent Opus orchestrator to produce a designed HTML page. The builder spawn prompt is excellent -- a genuine recipe that carries compositional intelligence. The gate runner, PA deployment, and fix cycle are all well-specified and would produce meaningful quality verification. An agent following this file literally would produce output in the PA-05 3.0-3.5 range (DESIGNED, possibly approaching COMPOSED).

But the file does not do what the REST OF THE PIPELINE says it does. design-system/CLAUDE.md describes /build-page as orchestrating a TC pipeline THEN a builder. SKILL.md orchestrates ONLY a builder. This is not a minor discrepancy -- it is the difference between a pipeline that uses 1,878 lines of tension-composition methodology (multi-axis questioning, tension derivation, metaphor quality rubric, perceptual risk assessment, 6 binary rejection checks, divergence mandate) and a pipeline that relies on a single builder agent reading a 443-line conventions brief.

The conventions brief is remarkable -- it is genuinely a world-description rather than a checklist, and an Opus builder reading it may derive a strong metaphor organically. But the TC pipeline exists for a reason: it catches metaphor failures BEFORE 2+ hours of build time is invested. Skipping it is a bet that Opus will get the metaphor right on the first try.

The file's strengths (binary instructions, recipe-format builder prompt, screenshot pre-capture, lock sheet architecture, fix cycle memory anchoring) demonstrate deep understanding of what makes the pipeline succeed. Its weaknesses (stale references, missing TC, missing micro-gates, absent phase gating) are all fixable with targeted edits. The architecture is sound; the specification has gaps.

**Bottom line:** This file is ~80% of a fully realized orchestrator. The remaining 20% is the TC pipeline integration, reference accuracy, and micro-gate inclusion. With those additions, it would be the definitive entry point for the pipeline.

---

## APPENDIX: File Paths Referenced

- `/Users/spacewizardmoneygang/.claude/skills/build-page/SKILL.md` (436 lines) -- audit subject
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/conventions-brief.md` (443 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/gate-runner.md` (1,159 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/flagship-pa-questions.md` (144 lines)
- `/Users/spacewizardmoneygang/.claude/skills/tension-composition/SKILL.md` (999+ lines)
- `/Users/spacewizardmoneygang/.claude/skills/perceptual-auditing/SKILL.md` (988 lines)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/CLAUDE.md` (auto-loaded root navigation)
- `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/CLAUDE.md` (662 lines)
