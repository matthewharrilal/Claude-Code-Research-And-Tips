# TOPOLOGY RISK AUDIT: Context/Compaction Analysis

**Auditor:** topology-auditor
**Date:** 2026-02-10
**Source:** Plan (`fizzy-sparking-popcorn.md`) + Master Prompt (Section 4)
**Method:** Per-agent context load estimation against 7-team / ~150-agent historical baseline

---

## EXECUTIVE SUMMARY

The plan's team topology is **well-designed with two HIGH risks and one CRITICAL risk**. The Research Contextualizer's reading load (13 files, ~5,473 lines for AD) is at the outer edge of safe but likely viable because it produces a concise output (200-line Lock Sheet). The Weaver-Synthesizer in Standalone mode faces the single highest compaction risk: reading 6 files + performing 7 complex tasks to produce a 300-500 line report. The enricher-ad agent touching ~18 files is a genuine CRITICAL risk that should be split.

**Overall verdict:** Topology is sound for all roles EXCEPT enricher-ad, which must be split into 2 agents. All other risks are manageable with the mitigations already present in the plan.

---

## CONTEXT BUDGET: Per-Agent Load Estimates

### Standalone Mode (AD-006, AD-003, AD-005) -- 7 agents per audit

| Agent | Files Read | Est. Lines Read | Lines Written | Screenshot Data | Risk |
|-------|-----------|-----------------|---------------|----------------|------|
| Research Contextualizer | 13 files | ~5,473 | ~200 (Lock Sheet) | None | **HIGH** |
| Auditor A (Impression+Emotion) | 0 source files | 0 | ~150-250 | 3 viewports x ~10 screenshots = ~30 images | MEDIUM |
| Auditor B (Readability+Resp) | 0 source files | 0 | ~150-250 | 3 viewports x ~10 screenshots = ~30 images | MEDIUM |
| Auditor C (Spatial+Grid) | 0 source files | 0 | ~150-250 | 3 viewports x ~10 screenshots = ~30 images | MEDIUM |
| Auditor D (Hierarchy+Coherence) | 0 source files | 0 | ~150-250 | 3 viewports x ~10 screenshots + cross-page = ~36 images | **HIGH** |
| Adversarial | 1 file (Lock Sheet, CHALLENGEABLE only) | ~50-80 | ~200-300 | 4+ non-standard viewports x ~10 screenshots = ~40+ images | MEDIUM |
| Weaver-Synthesizer | 6 files (Lock Sheet + 5 findings) | ~950-1,450 | ~300-500 | None | **HIGH** |

### Standard Mode (AD-001, AD-002, AD-004) -- 4 agents per audit

| Agent | Files Read | Est. Lines Read | Lines Written | Screenshot Data | Risk |
|-------|-----------|-----------------|---------------|----------------|------|
| Research Contextualizer | 13 files | ~5,473 | ~200 | None | **HIGH** |
| Auditor Alpha | 0 source files | 0 | ~200-300 | 2 viewports x ~10 screenshots = ~20 images | LOW |
| Auditor Beta | 0 source files | 0 | ~200-300 | 2 viewports x ~10 screenshots = ~20 images | LOW |
| Synthesizer-Validator | 3 files (Lock Sheet + 2 findings) | ~600-800 | ~300-500 | None | LOW |

### OD-006 Standard -- 4 agents

| Agent | Files Read | Est. Lines Read | Lines Written | Risk |
|-------|-----------|-----------------|---------------|------|
| Research Contextualizer | ~8 files | ~3,467 | ~200 | MEDIUM |
| Auditor Alpha | 0 | 0 | ~200 | LOW |
| Auditor Beta | 0 | 0 | ~200 | LOW |
| Synthesizer-Validator | 3 files | ~600 | ~300 | LOW |

### DD-006 Standard -- 4 agents

| Agent | Files Read | Est. Lines Read | Lines Written | Risk |
|-------|-----------|-----------------|---------------|------|
| Research Contextualizer | ~6 files | ~1,862 | ~200 | LOW |
| Auditor Alpha | 0 | 0 | ~200 | LOW |
| Auditor Beta | 0 | 0 | ~200 | LOW |
| Synthesizer-Validator | 3 files | ~600 | ~300 | LOW |

### Enrichment Team -- 5 agents

| Agent | Files Read | Files Written/Updated | Est. Total Lines | Risk |
|-------|-----------|----------------------|-----------------|------|
| enricher-ad | 6 AUDIT-REPORT.md (~2,400) + 6 HTML inline headers + 6 light sections + provenance | ~18 files touched | **CRITICAL** |
| enricher-od | 1 AUDIT-REPORT.md (~400) + 1 HTML + provenance | ~5 files touched | LOW |
| enricher-dd | 1 AUDIT-REPORT.md (~400) + 1 HTML + provenance | ~5 files touched | LOW |
| consolidator | 3 scratch files (~600) + 4 output files | ~7 files | MEDIUM |
| verifier | 11 verification checks across many files | Read-heavy, no write | LOW |

### Cross-Page Quick Pass -- 1 agent

| Agent | Viewports | Pages | Screenshots | Risk |
|-------|-----------|-------|-------------|------|
| Cross-page agent | 2 (1440 + 768) | 6 AD pages | ~12 Cold Look only | LOW |

### Cascade Team (conditional) -- 2-5 agents

| Agent | Files Read | Risk |
|-------|-----------|------|
| Cascade Classifier | PA-outbound-findings + tokens + patterns + convention specs + identity | MEDIUM |
| Cascade Fixers (1-3) | Per-file ownership, small scope | LOW |
| Unanimity Verifier | 7 conditions, systematic grep | LOW |

### Lead Agent

| Phase | Context Load | Risk |
|-------|-------------|------|
| Phase 1A (6 AD audits) | Team lifecycle management x6, gate checks, file-existence polling | MEDIUM |
| Phase 1B (2 crown jewels) | Team lifecycle x2 | LOW |
| Phase 1C (enrichment) | Read 8 AUDIT-REPORT.md files (~3,200 lines) + PA-F ID allocation | MEDIUM |
| Phase 1D (cascade) | Conditional, classifier + fix coordination | LOW |
| Phase 1E (validation) | Bento Grid Litmus Test, metrics, red flags | LOW |
| **Cumulative Phase 1** | **All of the above sequentially over ~7-8 hours** | **HIGH** |

---

## DETAILED RISK ANALYSIS

### 1. Research Contextualizer -- RISK: HIGH (AD), MEDIUM (OD), LOW (DD)

**The numbers:**
- AD: 13 files, 5,473 lines total
- OD: ~8 files, ~3,467 lines total
- DD: ~6 files, ~1,862 lines total

**Breakdown of AD reading load:**

| File | Lines |
|------|-------|
| SOUL-DISCOVERIES.md | 299 |
| ACCUMULATED-IDENTITY-v2.md | 518 |
| R4-AXIS-INNOVATIONS.md | 962 |
| R2-CREATIVE-LAYOUTS.md | 782 |
| HANDOFF-OD-TO-AD.md | 351 |
| AD-outbound-findings.md | 506 |
| AD-CONVENTION-SPEC.md | 821 |
| AD-AUDIT-SYNTHESIS.md | 357 |
| AD-SYNTHESIS.md | 298 |
| geometry.md | 146 |
| colors.md | 126 |
| typography.md | 159 |
| spacing.md | 148 |
| **TOTAL** | **5,473** |

**Analysis:** 13 files is above the 5-10 sweet spot from MEMORY.md lesson #4 by file count, but some are short (4 token files at ~145 lines each). The effective "cognitive load units" are ~10 substantial files. The contextualizer's task is COMPRESSION: read 5,473 lines, produce 200 lines. This is a read-heavy, write-light pattern that agents handle well -- the risk is not compaction during writing but whether the agent can correctly classify 5,473 lines of decisions into ALWAYS-LOCKED / LOCKED / CHALLENGEABLE categories without losing nuance.

**Risk of compaction before writing Lock Sheet:** LOW-MEDIUM. The agent reads sequentially and writes once. The prompt template (Section 4.10) is ~40 lines. Total context: prompt (~40) + file reads (~5,473) + output (~200) = ~5,713 lines. This is within safe limits for a single-task agent. The 10-minute timeout (Gate 1) provides adequate time.

**Risk for repeated instantiation:** The contextualizer is spawned 8 SEPARATE TIMES (once per audit: 6 AD + OD-006 + DD-006). Each is a FRESH agent with fresh context. This is a strength -- no accumulated context. However, each AD contextualizer reads the SAME 5,473 lines. This is redundant but safe (fresh context per audit = no cross-contamination). Consider caching the Lock Sheet across same-stage audits (see Recommendation #1).

**Mitigation (already in plan):** 200-line Lock Sheet cap prevents output bloat. File-existence gate catches failure.

### 2. Visual Auditors (A, B, C, D / Alpha, Beta) -- RISK: MEDIUM (Standalone), LOW (Standard)

**Context consumption model for a Standalone auditor:**

| Phase | Context Added |
|-------|--------------|
| Prompt injection | ~50-80 lines of instructions |
| Cold Look at 1440px | 1 screenshot (image data) + 4-line LOCKED reaction |
| Scroll-through at 1440px | ~10-15 screenshots (image data) + ~50 lines of notes |
| Cold Look at 768px | 1 screenshot + 4-line reaction |
| Scroll-through at 768px | ~10-15 screenshots + ~50 lines of notes |
| Cold Look at 1024px | 1 screenshot + 4-line reaction |
| Scroll-through at 1024px | ~10-15 screenshots + ~50 lines of notes |
| Question answering | ~6-7 questions x 3 viewports = ~18-21 answers |
| **Writing findings file** | ~150-250 lines |

**The screenshot problem:** Each viewport-sized screenshot is a substantial image. At 3 viewports x ~10 scroll positions = ~30-36 screenshots per auditor, this is the dominant context consumer. Screenshots are NOT compressible in the context window -- each is a full image token allocation.

**Estimated screenshot context load:**
- Per screenshot at 1440x900: substantial (image tokens are expensive)
- 30-36 screenshots per Standalone auditor: This is the LARGEST context consumer in the entire pipeline
- 20 screenshots per Standard auditor: More manageable

**Risk of mid-audit compaction (Standalone):** MEDIUM. The agent must hold all screenshots + all reactions + all question answers in context simultaneously while writing the findings file. If the page is long (AD-006 at 2,225 lines of HTML could produce 15-20 scroll positions per viewport), the total could reach ~50-60 screenshots. This is where compaction risk is real.

**Auditor D specific risk:** HIGH. In addition to the standard 30+ screenshots, Auditor D takes cross-page screenshots of 2-3 AD siblings for PA-24/PA-25. This adds ~4-6 more screenshots to an already loaded context. Auditor D has the highest screenshot count of any agent in the pipeline.

**Mitigation (already in plan):**
- Sub-wave staggering (A+B at 0:10, C+D at 0:27) manages Playwright contention
- Each auditor writes ONE file (per-file ownership)
- Language HARD BLOCK prevents analytical drift (reducing unnecessary reasoning chains)
- "If Playwright unavailable, wait 30s and retry 3x" prevents source-code fallback

**Mitigation gap:** The plan does NOT specify what happens if an auditor compacts mid-audit. Cold Look reactions would be lost. Recommendation: auditors should write Cold Look reactions to a temporary file IMMEDIATELY after taking them, before proceeding to scroll-through. This creates a checkpoint.

### 3. Adversarial Agent -- RISK: MEDIUM

**Context load:**
- Reads Lock Sheet CHALLENGEABLE section (~50-80 lines)
- Takes screenshots at non-standard viewports (900, 1100, 500, 320px)
- PA-28 tests 50px increments from 1440->320 -- that's (1440-320)/50 = ~22 resize operations
- Each resize could produce a screenshot

**The PA-28 resize sweep is context-expensive:** 22+ screenshots from the resize sweep alone, plus regular viewport screenshots. Total could be 30-40+ screenshots.

**Risk assessment:** The adversarial agent's task is bounded (3 questions, not 6-7), which compensates for the screenshot volume. The Lock Sheet reading primes with CHALLENGEABLE items specifically -- this is intentional and beneficial for adversarial mode, not a contamination vector. The agent sees only what CAN be challenged, not what is LOCKED.

**Mitigation:** The adversarial agent's findings-adversarial.md output is typically shorter than other auditors (~200-300 lines). The total context (prompt + Lock Sheet excerpt + screenshots + output) should stay within limits IF the resize sweep is done efficiently (not all 22 screenshots needed -- the plan could specify "screenshot at breakage points only").

### 4. Weaver-Synthesizer -- RISK: HIGH

**Context load:**

| Input | Est. Lines |
|-------|-----------|
| Weaver prompt | ~60-80 |
| lock-sheet.md | ~200 |
| findings-impression-emotion.md | ~150-250 |
| findings-readability-resp.md | ~150-250 |
| findings-spatial-grid.md | ~150-250 |
| findings-hierarchy-coherence.md | ~150-250 |
| findings-adversarial.md | ~200-300 |
| **Total input** | **~1,060-1,580** |
| **Output (AUDIT-REPORT.md)** | **~300-500** |
| **Grand total** | **~1,360-2,080** |

**Analysis:** The line count alone (~2,000 lines) is well within safe limits. The risk is NOT raw volume but TASK COMPLEXITY. The Weaver must perform 7 distinct cognitive tasks sequentially:

1. Contamination check (scan all findings for CSS property names)
2. Cross-reference against Lock Sheet (classify each finding)
3. Deduplication (find identical findings across 4 auditors)
4. Ranking (assign WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER)
5. Cold Look concordance (compare gut reactions)
6. Sovereignty classification (INVALID / VALID / VALID+ACTIONABLE / ESCALATE)
7. Final verdict (SHIP / SHIP WITH CONCERNS / DO NOT SHIP)

Each task requires re-reading the input with a different lens. The risk is that the agent attempts all 7 tasks, generates a very long reasoning chain, and compacts before completing the output file. The 300-500 line output + 7-task analysis chain could easily produce 2,000+ lines of internal reasoning.

**Mitigation (already in plan):** The Weaver is the LAST agent and has no downstream dependencies. If it compacts, it loses its own earlier analysis but the input files still exist on disk. A respawned Weaver can re-read the same files.

**Mitigation gap:** The plan should specify that the Weaver writes INCREMENTALLY -- after each of the 7 tasks, append to a working draft file. This way, if compaction occurs, the completed tasks are preserved. The final step is assembling the draft sections into AUDIT-REPORT.md.

### 5. enricher-ad -- RISK: **CRITICAL**

**This is the single highest-risk agent in the entire pipeline.**

**What enricher-ad must do:**
1. Read 6 AUDIT-REPORT.md files (~2,400 lines total, ~400 per report)
2. Write scratch findings file (PA-findings-AD.md)
3. Update 6 AD HTML files' inline headers (Sections 3, 5, 9 per file)
4. Update 6 AD HTML files' light sections
5. Update STAGE-HEADER.md STATUS section
6. Update AD-AUDIT-SYNTHESIS.md
7. Update AD-outbound-findings.md (CASCADE/SOUL only)
8. Update stage-4 CLAUDE.md
9. Append to RESEARCH-ACTIVE.md

**File count:** ~18 files (6 reads + ~12 updates)
**Why CRITICAL:**
- 18 files is nearly DOUBLE the 5-10 sweet spot (MEMORY.md lesson #4)
- Each HTML file is 1,300-2,200 lines. Even reading just the headers = scanning 6 large files
- The Edit operations on 6 HTML files require holding the exact inline header format in context
- After editing 6 HTML files + 6 light sections + 4 provenance docs = 16 write operations
- An agent doing 16 sequential edits across 18 files WILL accumulate significant context
- If the agent compacts mid-enrichment, some files get updated and others don't = INCONSISTENT STATE

**Historical precedent:** This is the EXACT failure pattern seen in prior teams (MEMORY.md lesson #1: "Workers spawned by captains via Task tool frequently complete WITHOUT writing files"). A single agent doing 16 file operations is the highest-risk configuration possible.

**Recommended mitigation:** Split enricher-ad into 2 agents:
- **enricher-ad-files:** Handles 6 HTML inline header updates + 6 light section updates (12 operations, files only)
- **enricher-ad-provenance:** Handles scratch findings, STAGE-HEADER, AUDIT-SYNTHESIS, outbound-findings, CLAUDE.md, RESEARCH-ACTIVE (6 operations, provenance docs only)

This gives per-file ownership AND keeps each agent under 10 file operations.

### 6. Consolidator -- RISK: MEDIUM

**What it reads:** 3 scratch files (~600 lines total) from the 3 enrichers
**What it writes/updates:** 4 files (PA-outbound-findings.md, PIPELINE-MANIFEST.md, PA-IDENTITY-DELTA.md, RESEARCH-ACTIVE.md)

**Analysis:** 7 total file operations is within the sweet spot. The risk is that PIPELINE-MANIFEST.md (324 lines) and RESEARCH-ACTIVE.md (636 lines) are both moderately large files to edit. The consolidator must read them, find the right insertion points, and edit without breaking existing content.

**Risk:** The "No existing content was deleted or overwritten" verification item (checklist #9) suggests this has been a problem before. The consolidator is merging data from 3 sources into 4 targets -- a many-to-many operation that requires careful context management.

**Mitigation:** The 5-minute time budget is tight. If the consolidator compacts, partial updates are problematic. Consider: have the consolidator write ALL 4 files from scratch (as new sections) rather than editing existing content. This is safer for context management.

### 7. Lead Agent -- RISK: HIGH (cumulative)

**The Lead's cumulative context load across Phase 1:**

| Step | Context Added |
|------|--------------|
| Phase 1A: 6 AD audits | 6 team lifecycles x (TeamCreate + TaskCreate + gate checks + shutdown) |
| Phase 1B: 2 crown jewel audits | 2 team lifecycles |
| Phase 1C: Enrichment | Read 8 AUDIT-REPORT.md files + PA-F ID allocation |
| Phase 1D: Cascade | Conditional, classifier + fix coordination |
| Phase 1E: Validation | Bento Grid Litmus Test, metrics, red flags |

**Estimated Lead context over Phase 1:**
- Plan itself in system prompt: ~571 lines
- Master prompt excerpts needed for agent prompts: variable but large
- 8 team lifecycles: TeamCreate, spawn agents, gate checks, file polling, shutdown
- Reading 8 AUDIT-REPORT.md files for enrichment prep: ~3,200 lines
- Gate checks, error handling decisions, metrics evaluation

**The 7-8 hour session problem:** Even with teams running sequentially (no parallel context), the Lead accumulates context from each team's lifecycle. By team 6 (the last AD audit), the Lead has been through 5 full team lifecycles. Context from the Master Prompt reference, prior team outcomes, etc., accumulates.

**Historical precedent:** In the Comprehensive Audit (MEMORY.md), the hierarchical topology with 7 direct reports achieved "Zero Lead compactions" -- but that was a single-phase operation. This plan asks the Lead to run 8 sequential team lifecycles + enrichment + cascade + validation across ~7-8 hours. This is significantly longer than any prior session.

**Mitigation (already in plan):** Teams are SEQUENTIAL with TeamDelete between each. This cleans up team state. The Lead follows the THIN rule (no building, no Playwright). File-based communication reduces message context.

**Mitigation gap:** The plan should specify explicit compaction checkpoints for the Lead:
- After Phase 1A (6 AD audits): Lead can /compact safely because all AD audit artifacts are on disk
- After Phase 1B (2 crown jewels): Another safe compaction point
- Before Phase 1C (enrichment): Read fresh from disk, don't rely on in-context memory of audit results

### 8. Overall Architecture Assessment

**Checklist item 16: Single points of failure?**
- Research Contextualizer: If it fails, the entire audit is blocked (Lock Sheet is Wave 1 dependency). Plan handles this with emergency Lock Sheet fallback (Lead produces it). ADEQUATE.
- Weaver-Synthesizer: If it fails, all findings files still exist on disk. Respawn works. ADEQUATE.
- enricher-ad: If it fails mid-way, partial enrichment = INCONSISTENT STATE. This is the single point of failure. INADEQUATE until split.

**Checklist item 17: File-writing failure mode accounted for?**
- YES. The plan explicitly includes "MUST write file using Write tool" in every prompt template.
- YES. Gate checks verify file existence, not agent self-reports.
- YES. Error handling specifies "Respawn with MUST write file emphasis" for missing files.
- VALIDATED: This is the #1 lesson from prior teams and the plan addresses it explicitly.

**Checklist item 18: Is TeamCreate overhead justified?**
- Standalone (7 agents): YES. TeamCreate is essential for managing 7 agents with task dependencies.
- Standard (4 agents): BORDERLINE. 4 agents could be managed via Task tool with dependency chains. However, TeamCreate provides shutdown management and team lifecycle. The overhead is small. JUSTIFIED.
- Enrichment (5 agents): YES. 3 parallel enrichers + sequential consolidator + verifier requires team coordination.
- Cross-page Quick (1 agent): NO TeamCreate -- plan correctly uses single Task agent. GOOD.

**Checklist item 19: Maximum context load for Lead?**
- Peak context load occurs at Phase 1C (enrichment) when the Lead must read all 8 AUDIT-REPORT.md files (~3,200 lines) to allocate PA-F ID ranges. This is a read-heavy moment but happens ONCE, not accumulated over time.
- The larger risk is CUMULATIVE context from 8 team lifecycles. Each lifecycle adds TeamCreate/Delete overhead, gate check results, file-existence polling, error handling messages.
- Estimated cumulative Lead context at end of Phase 1A: ~4,000-6,000 lines (plan + 6 team lifecycles + gate check results). This is manageable but approaching caution zone.

**Checklist item 20: Should agent prompts be shortened?**
- The prompt templates (Section 4.10) are ~40-80 lines each. This is well-designed.
- The LANGUAGE HARD BLOCK word list is repeated in EVERY auditor prompt. This is necessary (fresh context per agent) and not bloat.
- The Weaver prompt is the longest but has the most complex task. No shortening recommended.

---

## RECOMMENDATIONS

### R1: Cache Lock Sheet Across Same-Stage Audits (MEDIUM priority)

The Research Contextualizer reads the SAME 5,473 lines 6 times (once per AD audit) and produces essentially the SAME Lock Sheet 6 times. This is 32,838 lines of redundant reading.

**Recommendation:** Run the Research Contextualizer ONCE for the entire AD stage. Use the resulting Lock Sheet for all 6 AD audits. This saves 5 contextualizer agent spawns and ~30 minutes of redundant processing.

**Risk:** A Lock Sheet produced for AD-006 might miss page-specific considerations for AD-001. However, the Lock Sheet classifies DECISIONS (which are stage-level, not page-level), so this is safe.

**Implementation:** Before the first AD Standalone audit, spawn one Research Contextualizer that writes `explorations/axis/_perceptual-audit/lock-sheet.md` (stage-level). Each subsequent AD audit team skips Wave 1 and uses this shared Lock Sheet.

### R2: Split enricher-ad Into 2 Agents (HIGH priority)

As detailed in analysis #5 above, enricher-ad touching ~18 files is a CRITICAL risk.

**Split:**
- enricher-ad-files: 6 HTML inline headers + 6 HTML light sections = 12 file operations
- enricher-ad-provenance: scratch findings + STAGE-HEADER + AUDIT-SYNTHESIS + outbound-findings + CLAUDE.md + RESEARCH-ACTIVE = 6 file operations

Both read the same 6 AUDIT-REPORT.md files but write to non-overlapping file sets.

### R3: Add Cold Look Checkpoint Write for Auditors (MEDIUM priority)

Visual auditors should write their Cold Look reactions to a temporary checkpoint file (`cold-look-checkpoint.md`) IMMEDIATELY after recording them, before beginning the scroll-through. This prevents Cold Look loss if the agent compacts during the scroll-through phase.

**Implementation:** Add to each auditor prompt: "After recording your Cold Look for each viewport, IMMEDIATELY write your Cold Look reactions to `{output-path}/cold-look-{agent-name}.md`. This checkpoint protects your reactions if context compaction occurs."

### R4: Incremental Weaver Writing (MEDIUM priority)

The Weaver-Synthesizer should write each of its 7 tasks to a working draft as it completes them, rather than holding all analysis in context until the final write.

**Implementation:** Add to Weaver prompt: "After completing each of the 7 tasks, append your results to `{output-path}/weaver-draft.md`. After all 7 tasks, assemble the draft into AUDIT-REPORT.md."

### R5: Lead Compaction Checkpoints (LOW priority)

The Lead should plan explicit compaction points:
- After Phase 1A: All AD audit artifacts are on disk. Safe to compact.
- After Phase 1B: Crown jewel artifacts on disk. Safe to compact.
- Before Phase 1C: Read AUDIT-REPORT.md files fresh from disk for enrichment prep.

The Lead must NEVER rely on in-context memory of audit results -- always re-read from disk.

### R6: Limit Adversarial PA-28 Resize Sweep (LOW priority)

PA-28 specifies resizing from 1440->320 in 50px increments (22 resize operations). This is context-expensive. Recommend: "Resize in 100px increments (12 operations). Screenshot ONLY at breakage points, not at every increment."

---

## TOPOLOGY MAP: Risk Heat Map

```
STANDALONE AUDIT TEAM (7 agents, ~70 min)
  Research Contextualizer .............. HIGH (5,473 lines in, 200 out)
  Auditor A (Impression+Emotion) ...... MEDIUM (30 screenshots)
  Auditor B (Readability+Resp) ........ MEDIUM (30 screenshots)
  Auditor C (Spatial+Grid) ............ MEDIUM (30 screenshots)
  Auditor D (Hierarchy+Coherence) ..... HIGH (36+ screenshots incl. cross-page)
  Adversarial ......................... MEDIUM (40+ screenshots from resize sweep)
  Weaver-Synthesizer .................. HIGH (7 complex tasks on ~1,500 lines)

STANDARD AUDIT TEAM (4 agents, ~38 min)
  Research Contextualizer .............. HIGH/MEDIUM (same reading load, could cache)
  Auditor Alpha ....................... LOW (20 screenshots, 11 questions)
  Auditor Beta ........................ LOW (20 screenshots, 9 questions)
  Synthesizer-Validator ............... LOW (3 files, ~700 lines, 7 tasks)

ENRICHMENT TEAM (5 agents, ~35 min)
  enricher-ad ......................... CRITICAL (18 files -- MUST SPLIT)
  enricher-od ......................... LOW (5 files)
  enricher-dd ......................... LOW (5 files)
  consolidator ........................ MEDIUM (7 files, many-to-many merge)
  verifier ............................ LOW (read-only checks)

CASCADE TEAM (conditional, 2-5 agents, ~20 min)
  cascade classifier .................. MEDIUM (multi-file read + decision tree)
  cascade fixers (1-3) ................ LOW (per-file ownership)
  unanimity verifier .................. LOW (systematic checks)

LEAD (across all Phase 1, ~7-8 hours)
  Cumulative context .................. HIGH (8 team lifecycles)
```

---

## PRIOR LESSON COMPLIANCE MATRIX

| Lesson # | Lesson | Plan Compliance | Gap? |
|----------|--------|----------------|------|
| 1 | Workers via Task frequently don't write files | ADDRESSED -- "MUST write using Write tool" in every prompt | None |
| 2 | Playwright contention: only 2/13 got access | ADDRESSED -- sub-wave staggering, sequential teams, "DO NOT fall back to source reading" | Minor: 10s stagger may not be enough |
| 3 | Single recovery agents more reliable than captain->worker | ADDRESSED -- all agents are DIRECT, no captain->worker hierarchies | None |
| 4 | 5-10 files per agent sweet spot | VIOLATED by enricher-ad (~18 files) | CRITICAL: must split |
| 5 | File-writing emphasis in ALL prompts | ADDRESSED -- every template includes "MUST write file using Write tool" | None |
| 6 | Sequential verification eliminates Playwright contention | ADDRESSED -- teams are sequential, not parallel | None |
| 7 | Per-file ownership eliminates contention | ADDRESSED -- each auditor writes ONE file, enrichers own their stage | None |
| 8 | HTTP server must start before Playwright agents | ADDRESSED -- Step 0 pre-flight | None |
| 9 | Agents don't call TaskUpdate | ADDRESSED -- Lead verifies via file existence, not agent self-reports | None |
| 10 | Lead THIN rule | ADDRESSED -- Lead does zero building, zero Playwright, orchestrate only | None |

**Compliance: 9/10 lessons addressed. 1 CRITICAL violation (enricher-ad file count).**

---

## FINAL VERDICT

The team topology is **architecturally sound** -- it correctly applies hierarchical lessons (flat teams, no captain->worker), enforces file-based communication, uses per-file ownership, and follows the THIN Lead principle. The sequential team execution eliminates cross-team contention entirely.

**One CRITICAL fix required:** Split enricher-ad from 1 agent (18 files) into 2 agents (12 + 6 files).

**Three HIGH risks accepted with mitigation:**
1. Research Contextualizer (5,473 lines) -- mitigated by R1 (Lock Sheet caching)
2. Weaver-Synthesizer (7 tasks) -- mitigated by R4 (incremental writing)
3. Lead cumulative context -- mitigated by R5 (compaction checkpoints)

**Expected compaction events across Phase 1:** 0-1 for auditors (if pages are very long), 0 for Lead (with checkpoints), 0 for enrichers (with split).
