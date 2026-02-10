# AD TEAM & EXECUTION PROTOCOL
## Execution-Ready Specification Synthesized from 8 Source Documents

**Synthesizer:** execution-synth
**Date:** 2026-02-09
**Sources consumed:**
1. ad-skeleton-protocols.md (573 lines) -- Team topology, gates, waves, prompts, ownership
2. ad-skeleton-gaps.md (482 lines) -- Structural, process, knowledge, tool, scale gaps
3. ad-skeleton-synthesis.md (730 lines) -- Unified 7-agent synthesis of AD skeleton
4. verification-topology.md (647 lines) -- Auditor-per-role architecture, planted violations
5. verification-audit.md (243 lines) -- Fresh-eyes assessment of verification topology
6. retrospective-mining.md (397 lines) -- Plan-vs-actual across 6 teams
7. retrospective-audit.md (217 lines) -- Verification of retrospective claims
8. weaver-synthesis.md (584 lines) -- Definitive cross-reference of all 14 gap analysis files

**Total input: ~3,873 lines across 8 files**

---

## 1. FULL TEAM TOPOLOGY (~25 Agents Total)

### 1.1 Topology Selection: FLAT-PER-PHASE WITH WEAVER THREAD

**Rationale (from ad-skeleton-protocols.md Section 1):**
- Flat works at <17 agents (0 Lead compactions in audit/remediation/fix)
- Flat FAILS at 43 agents (3+ Lead compactions in re-enrichment)
- Hierarchical validated at ~58 agents (0 Lead compactions) but captain-worker hierarchy has ~60% write reliability
- AD never exceeds 9 concurrent agents in any phase -- safely in flat zone
- Single recovery agents are MORE reliable than captain-worker hierarchies (100% vs ~60%)

**Decision:** Flat topology in every phase. No captains. Lead spawns all agents directly. Weaver persists across all phases.

### 1.2 Complete Agent Roster

#### PERSISTENT ROLES (Active Across All Phases)

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Lead** | Orchestrate ONLY. NEVER build, NEVER run Playwright, NEVER read HTML source. Check binary gates, write identity deltas, commit. | identity-delta-ad-wave{N}.md, AD-BINARY-GATES.md, PIPELINE-MANIFEST.md (batch updates), HANDOFF-AD-TO-CD.md, axis-patterns.md | AD-BUILD-STATE.md, all gate outputs, agent summaries | User |
| **Weaver** | Cross-reference intelligence. Maintain state file. Track finding ID sequence. Monitor convention drift. Verify Lead identity deltas (ID-01 through ID-04). LAST to shut down. | AD-BUILD-STATE.md, _ad-execution/CLAUDE.md | Everything from all agents -- no information barrier | Lead |

#### PHASE 0 AGENTS: Convention + Research Foundation (~45-60 min)

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Convention Agent** | Create AD-CONVENTION-SPEC.md (inheriting OD conventions + axis-specific extensions). Create AD-SOUL-TEMPLATE.html (skeleton HTML every builder copies). Every value labeled T1 (research-backed) or T2 (agent-authored). | AD-CONVENTION-SPEC.md, AD-SOUL-TEMPLATE.html | OD-CONVENTION-SPEC.md, T1 synthesis files, SOUL-DISCOVERIES.md, R-4 axis findings (subset), ACCUMULATED-IDENTITY-v1.1.md | Lead |
| **R-4 Evaluator** | Categorize all 192 R-4 Axis Innovations findings by target AD exploration. | R-4-AD-EVALUATION.md | R-4 source files (all 192 findings) | Lead |
| **R-2 Re-Mapper** | Re-map 25 applicable R-2 Creative Layout findings from OD targets to AD targets. | r2-ad-mapping.md | r2-evaluation.md, R-2 source files | Lead |
| **Research Packager** | Compile 6 per-AD research packages (chain traversal + R-4 subset + R-2 subset + EXT-AXIS-* bespoke findings). May be 1-3 agents depending on context budget. | research-package-ad-{1-6}.md | R-4-AD-EVALUATION.md, r2-ad-mapping.md, chain traversal files, OD explorations for reference | Lead |
| **Convention Auditor** | Audit AD-CONVENTION-SPEC.md with 15 binary checks (CA-01 through CA-15). Verify T1/T2 labeling, soul compliance, responsive rules, inheritance from OD. File-only, no Playwright. | CONVENTION-AUDIT-REPORT.md | OD-CONVENTION-SPEC.md, T1 synthesis, SOUL-DISCOVERIES.md (NOT convention agent's process notes) | Lead |
| **Research Auditor** | Spot-check R-4 categorizations and R-2 mappings with 10 binary checks (RA-01 through RA-10). File-only. | RESEARCH-AUDIT-REPORT.md | Original R-4/R-2 source files (NOT evaluator's methodology notes) | Lead |

**Phase 0 Peak Concurrent: 7** (Lead + Convention + R-4 Eval + R-2 Re-Map + Research Packager + Weaver + one auditor at a time)

#### PHASE 1 AGENTS: Batched Build (3 waves x ~45-60 min each)

Each wave has:

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Builder-{A,B}** | Build one AD exploration HTML file each. Apply soul template, convention spec, research package. Write findings in per-builder scratch file. Run 10-item self-check. | AD-{N}.html, findings-builder-{A or B}.md | AD-SOUL-TEMPLATE.html, AD-CONVENTION-SPEC.md, research-package-ad-{N}.md, identity-delta (latest) | Lead |
| **Scribe** | After builders complete: merge per-builder finding files into AD-outbound-findings.md. Update RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md. Sequential, never concurrent with builders. | AD-outbound-findings.md (append), RESEARCH-ACTIVE.md (update), EXT-RESEARCH-REGISTRY.md (update) | findings-builder-{A,B}.md, builder HTML output | Lead |
| **Scribe Spot-Checker** | Verify scribe accuracy with 6 binary checks (SC-01 through SC-06) per wave. File-only. | SCRIBE-SPOT-CHECK-WAVE{N}.md | Builder output, scribe output, source files | Lead |

**Phase 1 Per-Wave Concurrent: 5** (Lead + Builder-A + Builder-B + Weaver + Scribe or Spot-Checker -- never concurrent)
**Unique Phase 1 Agents Across 3 Waves: ~10** (Lead + Weaver persist; 6 builders + 3 scribes + 3 spot-checkers, though scribe/checker may be reused)

#### PHASE 2 AGENTS: Adversarial Audit (~45-60 min)

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Visual Auditor 1** | Visual audit of AD-001 and AD-002 at 1440px and 768px. Sequential Playwright access. Wait for `document.fonts.ready`. Inject animation-disable CSS. | visual-audit-{1-2}.md | AD-001.html, AD-002.html via Playwright, AD-CONVENTION-SPEC.md | Lead |
| **Visual Auditor 2** | Visual audit of AD-003 and AD-004. Sequential Playwright -- starts AFTER Auditor 1 finishes. | visual-audit-{3-4}.md | AD-003.html, AD-004.html via Playwright, AD-CONVENTION-SPEC.md | Lead |
| **Visual Auditor 3** | Visual audit of AD-005 and AD-006. Sequential Playwright -- starts AFTER Auditor 2 finishes. | visual-audit-{5-6}.md | AD-005.html, AD-006.html via Playwright, AD-CONVENTION-SPEC.md | Lead |
| **Structural Auditor** | Programmatic DOM checks on all 6 files. Element count, soul violations, 2px borders, rgba, font compliance, heading hierarchy, accessibility. File-only (reads source HTML, no Playwright). | structural-audit-report.md | All 6 AD HTML files (source), AD-CONVENTION-SPEC.md | Lead |
| **Fresh-Eyes** | Full identity knowledge but NO convention spec, NO builder justifications, NO prior audit findings. The ONLY agent allowed judgment calls. 5 questions per page + dual nuclear questions. Minimum 3 UNIQUE FRESH findings. | fresh-eyes-report.md | ACCUMULATED-IDENTITY-v1.1.md, SOUL-DISCOVERIES.md, all 6 AD HTML files via Playwright (AFTER visual auditors complete) | Lead |
| **Provenance Auditor** | 12 binary checks (PA-01 through PA-12) on provenance chain accuracy. Citation spot-checking. Count verification. File-only. | PROVENANCE-AUDIT-REPORT.md | AD-outbound-findings.md, HTML files (source), PIPELINE-MANIFEST.md, RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md | Lead |
| **Synthesizer** | Compile master audit report from all auditor outputs. | AD-AUDIT-SYNTHESIS.md | All audit reports | Lead |

**Phase 2 Peak Concurrent: 9** (Lead + Weaver + 1 Visual Auditor active + Structural + Fresh-Eyes + Provenance + Synthesizer)
- Visual auditors run SEQUENTIALLY (1 then 2 then 3) to prevent Playwright contention
- Structural, Provenance run in PARALLEL (both file-only, no contention)
- Fresh-Eyes runs AFTER regular auditors complete (information barrier requires it)

#### PHASE 3 AGENTS: Fix Execution (~25 min)

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Fixer-{1-N}** | One fixer per AD file needing fixes. Max 6. Per-file ownership, zero contention. May investigate findings before fixing (2 false positives in OD). | The AD HTML file they own, fix-report-fixer-{N}.md | AD-AUDIT-SYNTHESIS.md (their file's findings only) | Lead |
| **Programmatic Verifier** | DOM checks on all fixed files. Runs BEFORE visual verifier (sequential). | verification-programmatic.md | All fixed AD HTML files (source) | Lead |
| **Visual Verifier** | Playwright screenshots of all fixed files. Runs AFTER programmatic verifier (sequential). | verification-visual.md | All fixed AD HTML files via Playwright | Lead |
| **Post-Fix Scribe** | Update provenance chain after fixes. | RESEARCH-ACTIVE.md update, provenance updates | Fix reports, fixed HTML files | Lead |

**Phase 3 Peak Concurrent: 8** (Lead + Weaver + up to 6 fixers running in parallel -- but fixers are per-file, zero contention)

#### PHASE 4 AGENTS: Synthesis + Handoff (~30 min)

| Role | Responsibility | Files Owned (Write) | Files Read | Reports To |
|------|---------------|--------------------|-----------|----|
| **Synthesizer** | Create AD-SYNTHESIS.md with all 7 sections. | AD-SYNTHESIS.md | All AD files, findings, identity deltas | Lead |
| **Identity Scribe** | Finalize ACCUMULATED-IDENTITY-v2.md. Answer v1.1's 6 open questions. | ACCUMULATED-IDENTITY-v2.md | v1.1, all AD-F findings, identity deltas | Lead |
| **Infrastructure Updater** | Update BACKBONE.md, PIPELINE-MANIFEST.md, SOUL-DISCOVERIES.md, STAGE-HEADER.md. | BACKBONE.md, SOUL-DISCOVERIES.md, STAGE-HEADER.md, explorations/axis/CLAUDE.md, explorations/CLAUDE.md, provenance/CLAUDE.md | All AD outputs | Lead |

**Phase 4 Concurrent: 5** (Lead + Weaver + Synthesizer + Identity Scribe + Infrastructure Updater)

### 1.3 Total Agent Summary

| Metric | Count |
|--------|-------|
| Peak concurrent (any phase) | 9 (Phase 2 audit) |
| Total unique agents (all phases) | ~25 |
| Persistent agents | 2 (Lead + Weaver) |
| File-only agents (no Playwright) | ~20 (~80%) |
| Playwright agents | ~5 (3 visual auditors + fresh-eyes + visual verifier) |
| New auditor roles (from verification topology) | 4 (Convention, Research, Provenance, Scribe Spot-Checker) |

---

## 2. WAVE EXECUTION ORDER (Phases 0-4 with Gate Checks)

### PHASE 0: Setup + Convention + Research Foundation (~45-60 min)

**Sub-Phase 0A: Setup (Lead only, ~10 min)**
```
Lead actions:
1. Create working directories (_ad-execution/, stage-4-axis-ad/)
2. Start HTTP server (serve docs-spa/app/showcase/)
3. Verify Playwright: navigate to test page, confirm non-blank screenshot
4. Create AD-BUILD-STATE.md (scaffold)
5. Create task structure for Phase 0 agents
6. Execute pre-AD housekeeping:
   a. Update MASTER-STATE.md (OD COMPLETE, position = AD/Step 2.3)
   b. Update DISCOVERIES-LOG.md (add OD-001 through OD-006 entries)
   c. Fix BACKBONE.md R-2 count: 78 -> 27 in BOTH locations (XR-15)
   d. Fix stage-4-axis-ad/CLAUDE.md: v1 reference -> v1.1
   e. Verify rgba() fixes from commit 71dc02c are present
```

**Sub-Phase 0B: Convention + Research (parallel, ~30-40 min)**
```
Spawn simultaneously:
- Convention Agent (writes AD-CONVENTION-SPEC.md + AD-SOUL-TEMPLATE.html)
- R-4 Evaluator (writes R-4-AD-EVALUATION.md)
- R-2 Re-Mapper (writes r2-ad-mapping.md)
```

**Sub-Phase 0C: Research Packages + Auditors (after 0B completes, ~15-20 min)**
```
Spawn:
- Research Packager(s): compile 6 per-AD research packages
- Convention Auditor: 15 binary checks on AD-CONVENTION-SPEC.md (spawned AS Convention Agent completes)
- Research Auditor: 10 binary checks on R-4/R-2 evaluations (spawned AS evaluators complete)
```

**Sub-Phase 0D: Gate Compilation**
```
Lead compiles AD-RESEARCH-GATE.md from all research outputs.
Lead plants 3 convention violations (C1-C3) and 1 research miscategorization (R1) BEFORE auditors run.
After auditors pass: remove all planted violations.
Lead makes formal AD-004 Spiral decision (keep/modify/replace) based on soul-compatibility assessment.
```

#### GATE 0: Setup + Convention + Research (20 checks)

```
GATE 0-01: Working directories exist (_ad-execution/, stage-4-axis-ad/)          -- PASS/FAIL
GATE 0-02: HTTP server running, returning 200                                     -- PASS/FAIL
GATE 0-03: Playwright navigated, screenshot shows content                         -- PASS/FAIL
GATE 0-04: AD-BUILD-STATE.md created                                              -- PASS/FAIL
GATE 0-05: MASTER-STATE.md updated (shows AD phase, not stale OD)                -- PASS/FAIL
GATE 0-06: DISCOVERIES-LOG.md has OD-001 through OD-006 entries                  -- PASS/FAIL
GATE 0-07: BACKBONE.md R-2 count = 27 (not 78) in both locations                -- PASS/FAIL
GATE 0-08: AD-CONVENTION-SPEC.md exists, >= 300 lines                            -- PASS/FAIL
GATE 0-09: AD-CONVENTION-SPEC every CSS value labeled T1 or T2                   -- PASS/FAIL
GATE 0-10: AD-CONVENTION-SPEC has per-AD CSS approach table (Grid vs Flexbox)    -- PASS/FAIL
GATE 0-11: AD-CONVENTION-SPEC has 768px responsive collapse rules per AD         -- PASS/FAIL
GATE 0-12: AD-CONVENTION-SPEC has Axis Transition Toolkit section                -- PASS/FAIL
GATE 0-13: AD-CONVENTION-SPEC has scroll-snap ruling (ALLOWED/BANNED)            -- PASS/FAIL
GATE 0-14: AD-SOUL-TEMPLATE.html exists                                          -- PASS/FAIL
GATE 0-15: R-4-AD-EVALUATION.md exists, >= 150/192 findings categorized          -- PASS/FAIL
GATE 0-16: r2-ad-mapping.md exists, >= 18/25 findings have AD targets            -- PASS/FAIL
GATE 0-17: 6 research packages exist (research-package-ad-{1-6}.md)              -- PASS/FAIL
GATE 0-18: Convention Audit Report: all 15 checks PASS                           -- PASS/FAIL
GATE 0-19: Research Audit Report: all 10 checks PASS                             -- PASS/FAIL
GATE 0-20: AD-RESEARCH-GATE.md compiled with all findings tracked                -- PASS/FAIL
```

**FAIL ROUTES:**
- 0-02/0-03 FAIL: Troubleshoot server. NEVER skip. Empty Playwright = wasted agents.
- 0-08 through 0-13 FAIL: Convention spec incomplete. Respawn Convention Agent with specific instructions.
- 0-18 FAIL: Convention Auditor found errors. Fix errors, re-run auditor.
- 0-19 FAIL: Research Auditor found misclassifications. Fix, re-run.
- ANY FAIL: No builds start. Phase 1 is HARD-BLOCKED on Gate 0.

---

### PHASE 1: Batched Build (3 waves, ~2-3 hours total)

#### Wave 1A: AD-001 + AD-002 (~45-60 min)

**Sub-Phase 1A-Research: Research Loading (~5 min)**
```
- Builders receive: AD-SOUL-TEMPLATE.html + AD-CONVENTION-SPEC.md + research-package-ad-{1,2}.md
- Builders receive: identity = ACCUMULATED-IDENTITY-v1.1.md (initial)
```

**Sub-Phase 1A-Build: Construction (~30-40 min)**
```
Spawn: Builder-A (AD-001 Z-Pattern) + Builder-B (AD-002 F-Pattern)
  - Each builder copies AD-SOUL-TEMPLATE.html as starting point
  - Adds CONTENT ONLY -- template embeds ALL convention CSS
  - Writes informal findings as CSS comments: <!-- FINDING: ... -->
  - Writes formal finding blocks in findings-builder-{A,B}.md (per-builder scratch file)
  - Runs 10-item self-check before completion
  - CRITICAL: Must use Write tool to save output BEFORE finishing
```

**Sub-Phase 1A-Scribe: Provenance (~10-15 min, sequential AFTER builders)**
```
Spawn: Scribe (sequential, after both builders complete)
  - Merges findings-builder-A.md + findings-builder-B.md -> AD-outbound-findings.md
  - Updates RESEARCH-ACTIVE.md
  - Updates EXT-RESEARCH-REGISTRY.md
```

**Sub-Phase 1A-Verify: Gate Check + Spot-Check (~5-10 min)**
```
Spawn: Scribe Spot-Checker (6 binary checks on scribe output)
Lead: runs gate checks on builder output
Weaver: verifies identity delta (ID-01 through ID-04)
```

**Sub-Phase 1A-Delta: Identity Evolution (~5 min, Lead)**
```
Lead writes identity-delta-ad-wave1A.md (10-15 lines):
  - >= 2 surprises from this wave
  - >= 1 identity refinement
  - >= 1 SOUL FAIL pattern observation
  - >= 2 forward questions targeting Wave 1B ADs specifically
  - REVISED RESEARCH GUIDANCE for Wave 1B
```

#### GATE 1 (Wave 1A): Per-Build-Wave Checks (16 checks)

```
GATE W-01: AD-001.html and AD-002.html exist, each >= 80KB                      -- PASS/FAIL
GATE W-02: Each file has INLINE THREADING HEADER (7-section format)              -- PASS/FAIL
GATE W-03: Each file's :root block matches AD-CONVENTION-SPEC.md                 -- PASS/FAIL
GATE W-04: Soul: 0 border-radius > 0 across ALL files built so far              -- PASS/FAIL
GATE W-05: Soul: 0 box-shadow != none across ALL files                           -- PASS/FAIL
GATE W-06: Soul: 0 filter effects across ALL files                               -- PASS/FAIL
GATE W-07: Border: 0 instances of 1-2px structural borders across ALL files      -- PASS/FAIL
GATE W-08: All backgrounds opaque (0 rgba with alpha < 1)                        -- PASS/FAIL
GATE W-09: Font trio correct in :root (Instrument Serif, Inter, JetBrains Mono)  -- PASS/FAIL
GATE W-10: Research Application Record present in each file                      -- PASS/FAIL
GATE W-11: >= citation minimums per file (AD-001/002: 15 R-4 + 5 R-2 + 5 EXT)   -- PASS/FAIL
GATE W-12: AD-F findings written in AD-outbound-findings.md                      -- PASS/FAIL
GATE W-13: Scribe updated provenance files                                       -- PASS/FAIL
GATE W-14: Scribe Spot-Check Report: all 6 checks PASS                          -- PASS/FAIL
GATE W-15: Identity Delta verified by Weaver (4 checks PASS)                     -- PASS/FAIL
GATE W-16: No unexplained CSS custom properties (not in convention spec)         -- PASS/FAIL
```

**FAIL ROUTES:**
- W-04/05/06 FAIL: Soul violation. Builder must fix BEFORE wave passes. Respawn if needed.
- W-07/08 FAIL: Convention violation. Builder must fix.
- W-14 FAIL: Scribe error. Respawn scribe with specific corrections.
- ANY FAIL: Wave 1B does NOT start until Gate 1 passes.

#### Wave 1B: AD-003 + AD-004 (~45-60 min)

Same sub-phase structure as 1A. Builders receive identity-delta-ad-wave1A as additional input (reads ACCUMULATED-IDENTITY-v1.1 + delta-1A).

**AD-004 Decision:** If Phase 0 soul-compatibility assessment concluded Spiral is NOT feasible, Lead substitutes an alternative (Gutenberg Diagram, Masonry Grid, or Broken Grid).

#### GATE 2 (Wave 1B): Same 16 checks, applied to ALL 4 files built so far

Adds cross-wave consistency check:
```
GATE W-17: :root tokens in Wave 1B files match Wave 1A files exactly             -- PASS/FAIL
```

#### Wave 1C: AD-005 + AD-006 (~45-60 min)

Same structure. Builders receive identity-delta-ad-wave1A + identity-delta-ad-wave1B.

AD-006 (Compound) receives 30-40% additional research investment. Builder-F gets the enriched research package.

#### GATE 3 (Wave 1C): Same 16+1 checks, applied to ALL 6 files

Adds:
```
GATE W-18: AD-006 has >= 25 R-4 + 8 R-2 + 8 EXT citations (crown jewel minimum) -- PASS/FAIL
```

**POST-PHASE 1 LEAD ACTIONS:**
```
1. Verify Weaver state file accuracy (WV-01 through WV-05 -- 5 binary checks)
2. Plant 5 build violations for Phase 2 audit:
   a. border-radius: 4px on one callout
   b. box-shadow on one code block
   c. filter: drop-shadow on one header
   d. Off-palette color on one label
   e. 2px border on one section divider
3. Plant 3 provenance violations for Phase 2 (P1-P3)
```

---

### PHASE 2: Adversarial Audit (~45-60 min)

**Wave 2A: Visual Audit (sequential Playwright)**
```
Visual Auditor 1: AD-001 + AD-002 (1440px AND 768px, viewport-by-viewport screenshots)
  -> COMPLETES, shuts down
Visual Auditor 2: AD-003 + AD-004 (starts AFTER Auditor 1 shuts down)
  -> COMPLETES, shuts down
Visual Auditor 3: AD-005 + AD-006 (starts AFTER Auditor 2 shuts down)
  -> COMPLETES, shuts down
```

**Wave 2B: Structural + Provenance (parallel, file-only)**
```
Structural Auditor: all 6 files (reads HTML source, programmatic DOM checks)
Provenance Auditor: all chain documents (12 binary checks PA-01 through PA-12)
  - Both file-only: zero Playwright contention, run in parallel
```

**Wave 2C: Fresh-Eyes (after 2A+2B complete)**
```
Fresh-Eyes: all 6 files via Playwright (sequential per-page)
  - Information barrier: NO convention spec, NO builder justifications, NO prior findings
  - 5 questions per page + dual nuclear questions
  - Minimum 3 UNIQUE FRESH findings or respawn with stricter isolation
```

**Wave 2D: Weaver Synthesis + Audit Compilation**
```
Weaver: cross-reference all audit findings
Synthesizer: compile master audit report (AD-AUDIT-SYNTHESIS.md)
Lead: resolve any contradictions between auditors (XR-05 from weaver synthesis)
```

#### GATE 4: Audit Complete (11 checks)

```
GATE 4-01: Visual audit reports exist for all 6 pages                            -- PASS/FAIL
GATE 4-02: Structural audit report exists with findings                          -- PASS/FAIL
GATE 4-03: Fresh-Eyes report exists with >= 3 UNIQUE FRESH findings              -- PASS/FAIL
GATE 4-04: Weaver synthesis exists with cross-references                         -- PASS/FAIL
GATE 4-05: All Critical/High findings have fix assignments                       -- PASS/FAIL
GATE 4-06: No unresolved contradictions between auditors                         -- PASS/FAIL
GATE 4-07: Master audit report compiled (AD-AUDIT-SYNTHESIS.md)                  -- PASS/FAIL
GATE 4-08: Provenance Audit Report: all 12 checks PASS                          -- PASS/FAIL
GATE 4-09: Planted provenance violations detected (3/3)                          -- PASS/FAIL (note rate)
GATE 4-10: Planted build violations detected (5/5)                               -- PASS/FAIL (note rate)
GATE 4-11: Weaver state file verified by Lead (WV-01 through WV-05 PASS)        -- PASS/FAIL
```

**POST-GATE 4:** Remove ALL planted violations from ALL files before Phase 3.

**FAIL ROUTES:**
- 4-03 FAIL (< 3 UNIQUE FRESH): Respawn fresh-eyes with stricter isolation.
- 4-09/4-10 FAIL (low detection): Log detection rate. If 0-1/5 build plants detected, audit methodology is NON-FUNCTIONAL -- escalate to user for manual review.

---

### PHASE 3: Fix Execution (~25 min)

**Wave 3A: Per-File Fixes (parallel, per-file ownership)**
```
Spawn 1 fixer per AD file needing Critical/High fixes.
  - Each fixer owns exactly ONE HTML file. No contention.
  - Fixers MAY INVESTIGATE findings before fixing (lesson from OD false positives).
  - If investigation disproves finding, document as false positive.
  - Each fixer writes fix-report-fixer-{N}.md before completion.
```

**Wave 3B: Verification (sequential)**
```
Programmatic Verifier: DOM checks on all fixed files (runs first)
  -> COMPLETES
Visual Verifier: Playwright screenshots of all fixed files (runs second, AFTER programmatic)
  -> COMPLETES
```

**Wave 3C: Post-Fix Provenance**
```
Post-Fix Scribe: update provenance chain documents with fix metadata.
Post-Fix Scribe Spot-Checker: 6 binary checks on scribe output.
```

#### GATE 5: Fix Complete (10 checks)

```
GATE 5-01: All Critical fixes applied                                            -- PASS/FAIL
GATE 5-02: All High fixes applied                                               -- PASS/FAIL
GATE 5-03: Programmatic verification PASS                                        -- PASS/FAIL
GATE 5-04: Visual verification PASS (screenshots)                                -- PASS/FAIL
GATE 5-05: Soul compliance re-verified: 0 violations post-fix                   -- PASS/FAIL
GATE 5-06: 0 NEW violations introduced by fixes                                 -- PASS/FAIL
GATE 5-07: Per-fixer reports exist                                               -- PASS/FAIL
GATE 5-08: Scribe provenance updates complete                                    -- PASS/FAIL
GATE 5-09: Post-fix Scribe Spot-Check PASS                                      -- PASS/FAIL
GATE 5-10: All planted violations REMOVED from all files                         -- PASS/FAIL
```

---

### PHASE 4: Synthesis + Handoff (~30 min)

**Wave 4A: Synthesis (parallel)**
```
Synthesizer: AD-SYNTHESIS.md (all 7 sections)
Identity Scribe: ACCUMULATED-IDENTITY-v2.md (answer v1.1's 6 questions, add AD learnings)
Lead: HANDOFF-AD-TO-CD.md
```

**Wave 4B: Infrastructure Updates (parallel)**
```
Infrastructure Updater: BACKBONE.md, SOUL-DISCOVERIES.md, STAGE-HEADER.md,
  explorations/axis/CLAUDE.md, explorations/CLAUDE.md, provenance/CLAUDE.md
Lead: PIPELINE-MANIFEST.md (final update), axis-patterns.md (final)
```

**Wave 4C: Final Verification + Commit (Lead only)**

#### GATE 6: Stage Complete (13 checks)

```
GATE 6-01: All 6 AD HTML files exist, scored >= 32/40                           -- PASS/FAIL
GATE 6-02: AD-outbound-findings.md exists with >= 10 findings                   -- PASS/FAIL
GATE 6-03: AD-SYNTHESIS.md exists with all 7 sections                           -- PASS/FAIL
GATE 6-04: AD-RESEARCH-GATE.md exists with post-build verification              -- PASS/FAIL
GATE 6-05: AD-AUDIT-SYNTHESIS.md exists                                          -- PASS/FAIL
GATE 6-06: HANDOFF-AD-TO-CD.md exists                                           -- PASS/FAIL
GATE 6-07: ACCUMULATED-IDENTITY-v2.md finalized                                 -- PASS/FAIL
GATE 6-08: BACKBONE.md updated with Stage 4 narrative                           -- PASS/FAIL
GATE 6-09: PIPELINE-MANIFEST.md updated with AD-F entries                       -- PASS/FAIL
GATE 6-10: RESEARCH-ACTIVE.md R-4 >= 80%, R-2 >= 72%                           -- PASS/FAIL
GATE 6-11: SOUL-DISCOVERIES.md has Stage 4 determination                        -- PASS/FAIL
GATE 6-12: axis-patterns.md has all 6 patterns                                  -- PASS/FAIL
GATE 6-13: Git status shows only intended changes                               -- PASS/FAIL
```

**POST-GATE 6:** Lead commits. Shutdown Weaver (LAST). TeamDelete.

---

## 3. CONVENTION BOTTLENECK SOLUTION (Three-Part Fix)

### The Problem (from weaver synthesis, Emergent Pattern 2)

The Convention Agent is a single point of failure with the highest blast radius. It receives the full 577-line identity, makes unsupervised design decisions about axis geometry, freezes those decisions before any validation, and every builder downstream inherits its output. If the spec has an error, ALL 6 builders replicate it. This is the same failure mode that caused OD's 3-dialect gap.

### Part 1: Two-Phase Convention Lifecycle (DRAFT -> VALIDATE -> FROZEN)

```
DRAFT (Phase 0, Sub-Phase 0B):
  Convention Agent creates AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html.
  Status: DRAFT. All values labeled T1 (research-backed) or T2 (agent-authored).

VALIDATE (Phase 0, Sub-Phase 0C):
  Convention Auditor runs 15 binary checks (CA-01 through CA-15).
  Lead reviews T2 values for plausibility.
  If Convention Auditor FAILS: fix errors, re-run.
  If Convention Auditor PASSES: proceed to FROZEN.

FROZEN (Phase 0, Gate 0 PASS):
  AD-CONVENTION-SPEC.md is FROZEN. No modifications during Phase 1 build.
  Exceptions: only if Weaver detects convention drift that traces to a spec ERROR,
  Lead may issue a PATCH (documented in AD-BUILD-STATE.md with rationale).

POST-WAVE-1A REVIEW (Phase 1, after Gate 1 PASS):
  Lead reviews Wave 1A build output against convention spec.
  T2 values that produced good results: promote to T1 (mark as "T1 (validated by Wave 1A)").
  T2 values that produced problems: flag for Wave 1B builders.
```

### Part 2: LOCKED/AXIS Template Split

```
AD-SOUL-TEMPLATE.html contains TWO layers:

LOCKED LAYER (immutable, cannot be modified by any builder):
  - :root token block with ALL convention CSS custom properties
  - Soul compliance CSS (border-radius: 0, box-shadow: none, etc.)
  - Base styles (fonts, colors, spacing, base typography)
  - Skip-link, focus-visible, reduced-motion media query
  - Print media query (basic)

AXIS LAYER (builder-authored, must be convention-compliant):
  - Axis-specific CSS (grid-template, flexbox direction, axis transition markers)
  - Page-specific content structure
  - Research Application Record placeholder
  - Finding ID citation placeholders

Builders COPY the template and ONLY modify the AXIS LAYER sections.
The LOCKED LAYER is marked with:
  /* === LOCKED: DO NOT MODIFY BELOW THIS LINE === */
  /* === END LOCKED === */
```

### Part 3: Convention Auditor Role

The Convention Auditor runs 15 binary checks immediately after the Convention Agent completes, BEFORE Gate 0 passes. Checks include:

- CA-01 through CA-15 (see Section 1.2 Phase 0 Agents)
- Additionally, CA-16 (from verification audit): All OD-CONVENTION-SPEC.md values present in AD-CONVENTION-SPEC.md or explicitly documented as superseded

**Cost:** 1 agent, ~15 min, file-only, ~95% write reliability.
**ROI:** Estimated 20:1 (15 min prevention vs 5+ hours of downstream damage from a spec error).

---

## 4. PER-FILE OWNERSHIP MODEL

### The Rule (from ad-skeleton-protocols.md Section 5)

> **No agent touches a file they don't own. Ever.**

This is the single most reliable team pattern, validated by OD Fix Execution (4 fixers, zero file conflicts).

### Complete Ownership Matrix

#### Files CREATED by AD

| File | Phase | Owner | Change Type | Notes |
|------|-------|-------|-------------|-------|
| AD-001-z-pattern.html | 1A | Builder-A | CREATE | 80-120K |
| AD-002-f-pattern.html | 1A | Builder-B | CREATE | 80-120K |
| AD-003-bento-grid.html | 1B | Builder-C | CREATE | 80-120K |
| AD-004-spiral.html (or alt) | 1B | Builder-D | CREATE | 80-120K |
| AD-005-choreography.html | 1C | Builder-E | CREATE | 80-120K |
| AD-006-compound.html | 1C | Builder-F | CREATE | 80-120K (crown jewel) |
| AD-CONVENTION-SPEC.md | 0 | Convention Agent | CREATE | 300-500 lines, FROZEN after Gate 0 |
| AD-SOUL-TEMPLATE.html | 0 | Convention Agent | CREATE | Skeleton HTML |
| AD-BINARY-GATES.md | 0 | Lead | CREATE | 10-item self-check |
| R-4-AD-EVALUATION.md | 0 | R-4 Evaluator | CREATE | 192 findings mapped |
| r2-ad-mapping.md | 0 | R-2 Re-Mapper | CREATE | 25 findings remapped |
| research-package-ad-{1-6}.md | 0 | Research Packager(s) | CREATE | 6 packages |
| AD-RESEARCH-GATE.md | 0 | Lead | CREATE | Compiled gate |
| findings-builder-{A-F}.md | 1 | Each builder | CREATE | Per-builder scratch |
| AD-outbound-findings.md | 1 | Scribe (merge from scratch files) | CREATE+APPEND | Findings registry |
| AD-SYNTHESIS.md | 4 | Synthesizer | CREATE | 7-section synthesis |
| AD-AUDIT-SYNTHESIS.md | 2 | Audit Synthesizer | CREATE | Audit master report |
| HANDOFF-AD-TO-CD.md | 4 | Lead | CREATE | Stage handoff |
| ACCUMULATED-IDENTITY-v2.md | 4 | Identity Scribe | CREATE | 700-800 lines |
| identity-delta-ad-wave{1A,1B,1C}.md | 1 | Lead | CREATE | 10-15 lines each |
| axis-patterns.md | 1+ | Lead | CREATE (incremental) | Per-pattern entries |
| AD-BUILD-STATE.md | 0+ | Weaver | CREATE (ongoing) | Master state |
| _ad-execution/CLAUDE.md | 0+ | Weaver | CREATE (ongoing) | Working dir manifest |

#### Files UPDATED by AD

| File | Owner for Updates | When |
|------|------------------|------|
| PIPELINE-MANIFEST.md | Lead (batch between waves) | Between waves |
| BACKBONE.md | Infrastructure Updater | Phase 4 |
| RESEARCH-ACTIVE.md | Scribe (per wave) | Phase 1 per wave |
| SOUL-DISCOVERIES.md | Infrastructure Updater | Phase 4 |
| EXT-RESEARCH-REGISTRY.md | Scribe (per wave) | Phase 1 per wave |
| STAGE-HEADER.md | Infrastructure Updater | Phase 4 |
| MASTER-STATE.md | Lead | Phase 0 (housekeeping) |
| DISCOVERIES-LOG.md | Lead | Phase 0 (housekeeping) |

#### Audit Report Files (one per auditor)

| File | Owner | Phase |
|------|-------|-------|
| CONVENTION-AUDIT-REPORT.md | Convention Auditor | 0 |
| RESEARCH-AUDIT-REPORT.md | Research Auditor | 0 |
| SCRIBE-SPOT-CHECK-WAVE{N}.md | Scribe Spot-Checker | 1 |
| visual-audit-{N}.md | Visual Auditors 1-3 | 2 |
| structural-audit-report.md | Structural Auditor | 2 |
| fresh-eyes-report.md | Fresh-Eyes | 2 |
| PROVENANCE-AUDIT-REPORT.md | Provenance Auditor | 2 |
| verification-programmatic.md | Programmatic Verifier | 3 |
| verification-visual.md | Visual Verifier | 3 |
| fix-report-fixer-{N}.md | Fixers | 3 |

### Contention Resolution: The findings-builder Problem (XR-02)

**Problem:** Two builders running simultaneously could both attempt to write AD-outbound-findings.md. The Write tool atomically replaces file contents -- the second write silently destroys the first's data.

**Solution:** Per-builder scratch files.
- Builder-A writes to `findings-builder-A.md`
- Builder-B writes to `findings-builder-B.md`
- Scribe merges BOTH into `AD-outbound-findings.md` AFTER both builders complete (sequential, never concurrent)
- No contention. No data loss.

### Finding ID Reserved Ranges (Collision Prevention)

| Builder | AD Exploration | Reserved Range |
|---------|---------------|----------------|
| Builder-A | AD-001 Z-Pattern | AD-F-001 through AD-F-004 |
| Builder-B | AD-002 F-Pattern | AD-F-005 through AD-F-008 |
| Builder-C | AD-003 Bento Grid | AD-F-009 through AD-F-012 |
| Builder-D | AD-004 Spiral | AD-F-013 through AD-F-016 |
| Builder-E | AD-005 Choreography | AD-F-017 through AD-F-020 |
| Builder-F | AD-006 Compound | AD-F-021 through AD-F-028 |
| Overflow | Any builder | AD-F-029+ |
| Meta-pattern | Lead/Synthesizer | AD-F-MP-001+ |
| Process | Lead | AD-F-PR-001+ |
| Forward | Lead | AD-F-FL-001+ |
| Anti-pattern | Any | AD-F-AP-001+ |

---

## 5. RECOVERY PROTOCOL

### 5.1 State Files (Written to Disk, Survive Compaction)

| File | Purpose | Updated By | Frequency |
|------|---------|-----------|-----------|
| AD-BUILD-STATE.md | Master state: phase status, agent status, finding summary | Weaver | After every agent completion |
| _ad-execution/CLAUDE.md | Working directory manifest: file list, owners, line counts | Weaver | After every file creation |
| identity-delta-ad-wave{N}.md | Identity evolution between waves (10-15 lines each) | Lead | After each wave gate PASS |
| Per-agent output files | Agent's partial output IS its checkpoint | Each agent | During execution |

### 5.2 Lead Recovery Protocol (If Lead Compacts)

```
1. RE-READ AD-BUILD-STATE.md -> current phase, which agents completed
2. RE-READ _ad-execution/CLAUDE.md -> file manifest, what exists
3. RE-READ identity-delta-ad-wave{N}.md (latest) -> current identity state
4. CHECK TaskList -> completed vs in_progress vs pending
5. VERIFY file existence for expected outputs (Glob for _ad-execution/*.md)
6. CONTINUE from where state indicates -- DO NOT restart
7. RE-SPAWN any agents whose files don't exist but should
```

### 5.3 Agent Recovery Protocol (If Agent Compacts)

```
1. RE-READ your output file (partial work IS your checkpoint)
2. RE-READ AD-BUILD-STATE.md for phase status
3. RE-READ your input files to rebuild context
4. Continue from where your output file left off
5. DO NOT restart from scratch -- your partial output IS your progress
```

### 5.4 Skeleton-First Pattern

Agents write file SKELETON first (headers + structure + empty sections), then populate. If crash occurs, skeleton survives and can be continued by respawned agent. This pattern was validated in provenance remediation.

### 5.5 Delta-Only vs Full Rebuild Decision Matrix

| Condition | Action |
|-----------|--------|
| Single agent failed to write file, others succeeded | Respawn that agent with simplified prompt |
| Agent wrote partial file (skeleton exists) | Respawn agent, point to partial file as checkpoint |
| Multiple agents failed in same wave | Re-run entire wave (wave is the atomic recovery unit) |
| Convention spec error discovered mid-Phase-1 | Issue PATCH via Lead, document in state file. Do NOT restart. |
| All files exist but gate FAIL on one check | Fix the specific failure, re-check gate |
| Lead compacted, agents still running | Recovery protocol above -- read state, continue |
| HTTP server crashed | Restart server, re-verify Playwright, continue from current phase |

### 5.6 Non-Writing Agent Protocol

**Problem:** "CRITICAL: You MUST write your output file" was in v1 captain prompts and FAILED. It required v2 respawns.

**Solution:** The text is necessary but not sufficient. Add time-based verification:
```
If no output file exists 15 minutes after agent spawn:
  1. Lead checks TaskList for agent status
  2. If agent is still in_progress: send message asking for status
  3. If agent is idle/complete but no file: RESPAWN with simplified prompt
  4. Simplified prompt = original prompt + "URGENT: Write to [exact path] IMMEDIATELY"
  5. If second spawn also fails: Lead or Weaver performs the work directly
```

---

## 6. AGENT PROMPT DESIGN RULES

### 6.1 Length and Structure

- Agent prompts: 50-100 lines max (from ad-skeleton-protocols.md Section 4.1)
- Describe OUTCOMES not PROCEDURES
- Never exceed 200 lines under any circumstances (retrospective: 2,154-line prompt achieved ~33% completion)
- Prompt-to-capacity ratio target: 1.5:1 (not 3:1 as in OD audit)
- Split exhaustive checks into focused micro-agents rather than one agent with 17 sub-checks

### 6.2 Mandatory Prompt Blocks (Embed in EVERY Agent Prompt)

**Block 1: Soul Compliance Checklist (10 lines -- VERBATIM)**
```
- border-radius: 0 everywhere (no rounded corners)
- box-shadow: none (no shadows, except solid-offset pseudo-elements)
- No filter: drop-shadow() anywhere
- No fake depth, gradients, or blur
- Locked palette: #E83025, #1A1A1A, #FAFAF5, #E0D5C5, #6B9B7A, #4A7C9B, #C97065, #7C3AED
- Font trio: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
- Border weights: 4px left accent OR 3px full -- never 1-2px structural
- Spacing model: --space-* tokens
- Max 2 callouts per viewport section
- DD-F-006 fractal self-similarity at 4 scales
```

**Block 2: File-Write Enforcement (3 lines)**
```
CRITICAL: You MUST write your output file using the Write tool BEFORE you finish.
Your output file is: {exact absolute path}
If you do not write this file, your work is LOST.
```

**Block 3: Compaction Survival (5 lines)**
```
If your context compacts mid-task:
1. RE-READ your output file to see what you've already done
2. RE-READ AD-BUILD-STATE.md for current phase status
3. RE-READ your input files to rebuild context
4. Continue from where your output file left off -- DO NOT restart
```

### 6.3 Binary Rule Principle

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%." -- the most-cited principle across all 14 gap analysis files.

Every constraint in agent prompts must be expressible as "DO X" or "DO NOT do X" -- never "consider whether X."

### 6.4 Binary vs Judgment Classification of ALL Rules

**BINARY (gate-enforce, embed in prompts, 100% expected compliance):**
- File existence checks
- Count thresholds (line count, finding count, citation count)
- Computed CSS value checks (border-radius === '0px')
- ID format checks (AD-F-NNN within reserved range)
- Template compliance (all :root values match convention spec)

**JUDGMENT (assign to Lead or Fresh-Eyes ONLY, accept ~0% compliance from other agents):**
- Quality assessment ("Does this spiral imply depth?")
- Paradigm fit ("Does this axis transition feel abrupt?")
- Research application genuineness (citation theater detection)
- Identity delta question quality
- Design quality gestalt

**REFERENCE (agents read but NOT gate-checked on):**
- Identity lens documents
- Tension resolution tables
- Question evolution patterns
- Historical retrospective lessons

### 6.5 The Lead-Thin Principle

```
Lead NEVER builds HTML.
Lead NEVER runs Playwright.
Lead NEVER reads source HTML files.
Lead orchestrates, checks binary gates, writes identity deltas, commits.
Lead reads: state files, agent summaries, gate results, verification screenshots.
Lead writes: identity deltas, gate compilations, handoff documents.
```

### 6.6 Convention Values Embedding

The FULL :root CSS block from AD-CONVENTION-SPEC.md must be embedded VERBATIM in every visual/structural agent prompt. Not a reference to a file -- the ACTUAL values inline. This prevents agents from misremembering or not reading the convention spec. (From protocols Section 4.6)

---

## 7. OD TEAM LESSONS (from 5 Teams, 100+ Agents)

### From retrospective-mining.md (all 6 teams) and weaver-synthesis.md:

### 7.1 Team 1: OD Builders (First Team)
- Weaver role PROVEN -- emerged from necessity, now infrastructure
- Parallel builders can't iterate (terminate after 1 response)
- Research agents MUST write to file before returning (survives crashes)
- SendMessage is the ONLY way teammates hear you (text output is invisible)
- Lead was "fat" (built, audited, ran Playwright) -- context died
- showcase/CLAUDE.md (500 lines) was NEVER read by any builder -- 10-line embedded soul checklist is the fix
- 3-4 deep explorations > 6 shallow ones

### 7.2 Team 2: OD Granular Audit (17 Agents)
- Lead stayed THIN (zero Playwright, zero building) -- VALIDATED the rule
- Context at 77% after 45 min -- flat <17 is safe
- Fresh-eyes was THE highest-value-per-agent (2 Nuclear Question contradictions)
- Adversarial debates were "largely performative" (single agent can't produce genuine tension)
- 2,154-line prompt achieved ~1/3 completion (3:1 ratio) -- prompts must be 50-100 lines
- Agents 11-17 had LOW marginal value -- sweet spot is 10-12
- Playwright contention occurred within-wave despite sequential planning
- Research-ref (file-only, no Playwright) finished FIRST

### 7.3 Team 3: OD Fix Execution (7 Agents)
- Per-file ownership eliminated ALL contention -- ZERO file conflicts
- Fix #1 and Fix #7 were FALSE POSITIVES -- fixers investigated and disproved
- `document.fonts.ready` is CRITICAL before any computed style check
- All 4 fixers independently invented the same border system -- EMERGENT convergent behavior
- All agents wrote reports before returning -- zero data loss

### 7.4 Team 4: Comprehensive Hierarchical Audit (~58 Agents)
- Hierarchical topology VALIDATED (0 Lead compactions with 7 direct reports)
- Workers spawned by captains frequently completed WITHOUT writing files -- THE critical failure mode
- File-only workers wrote reliably (~95%); Playwright workers did NOT (~30-40%)
- V1 captains required respawn as v2 with explicit Write tool instructions
- Captain-FreshEyes replaced with single recovery agent (which worked perfectly)
- Single recovery agents (doing work directly) are MORE reliable than captain-worker hierarchies
- Only 2/13 visual workers got Playwright -- plan for scarcity, not abundance
- Playwright contention: only sequential per-page assignment works

### 7.5 Team 5: OD Re-Enrichment (43 Agents)
- 3+ Lead compactions (flat 43-agent topology overwhelmed context)
- Created the 3-dialect gap -- building without conventions
- Post-re-enrichment chain infrastructure NOT updated (metadata drift)
- Convention spec concept was CREATED to fix dialect problem -- convention-first is the highest-value fix

### 7.6 Team 6: Provenance Remediation (18 Agents)
- 94/104 verification items passed
- Proved provenance is EXPENSIVE (18 agents for metadata, not product)
- Mode C incremental provenance is the correct INTENT but was never tested during BUILD
- Skeleton-first pattern validated (data survived all crashes)

### 7.7 Cross-Team Emergent Patterns (from retrospective Section 11)

| Pattern | Evidence | Skeleton Application |
|---------|----------|---------------------|
| Each team's greatest innovation was IMPROVISED | Weaver, fresh-eyes, fixer investigation, recovery agents | Leave room for improvisation. Recovery protocol covers HOW to recover, not WHAT will go wrong. |
| Most reliable agents have fewest dependencies | File-only finished first, per-file fixers had zero conflicts | Minimize dependencies. Per-file ownership. File-only for all new auditors. |
| Every team discovered something the previous missed | rgba epidemic, false positives, 3-dialect gap, R-2 orphaning | Plan for DISCOVERING unexpected things. Fresh-eyes + planted violations are the mechanisms. |
| Meta-work always exceeds product work (2.6:1 ratio) | 47,944 lines infrastructure vs 18,428 lines product | Accept the ratio. Actively resist meta-work expansion. 30-file limit on working directory. |

---

## 8. TEAMCREATE VS TASK SUBAGENT

### When to Use TeamCreate (Formal Teams)

| Scenario | Why TeamCreate |
|----------|---------------|
| Build phase (Phase 1) | Multiple agents need persistent communication, Weaver maintains state across waves |
| Audit phase (Phase 2) | Visual auditors need sequential Playwright access coordinated by Lead |
| Any phase with > 3 concurrent agents | Lead needs to track, message, and shutdown agents |
| Any phase requiring Weaver cross-reference | Weaver must receive updates from all agents |

### When to Use Task Subagents (Simple Delegation)

| Scenario | Why Task Subagent |
|----------|-------------------|
| Pre-AD housekeeping (updating MASTER-STATE, DISCOVERIES-LOG) | Single-file updates, no coordination needed |
| Quick spot-checks during planning | Read-and-report, no file output needed |
| One-off research queries | No persistent communication needed |

### AD Decision

**Use TeamCreate for all 5 phases.** AD is a multi-phase, multi-agent operation where:
- Weaver must persist across phases
- Lead must coordinate sequential Playwright access
- State file maintenance is continuous
- Recovery protocol requires TaskList awareness

Task subagents are appropriate for pre-AD housekeeping ONLY (before Team is created).

---

## 9. UNTESTED MECHANISMS INVENTORY

These mechanisms have ZERO OD precedent. They are the AD skeleton's novel territory. Each has a fallback plan.

### 9.1 Builder Incremental Finding Writing (XR-01, CRITICAL)

**What:** Builders stop mid-HTML-construction to assign a finding ID, write a formal 7-field block, and resume.
**Why Untested:** OD builders never wrote formal findings. Scribes always did the formalization.
**Risk:** Context-switching may degrade build quality. Builder may forget to resume, or lose construction thread.
**Fallback:** Builders write INFORMAL CSS comments (`<!-- FINDING: ... -->`). Per-wave scribe extracts and formalizes findings from CSS comments + per-builder scratch files. This preserves Mode C intent (findings per wave) using OD's proven mechanism (scribes).

### 9.2 Mode C During Active Build

**What:** Provenance written incrementally DURING construction, not deferred.
**Why Untested:** OD used Mode A (build first, document later) and Mode B (simultaneous, but secondary missions dropped). Mode C is the fix for both.
**Risk:** If builders drop finding-writing under context pressure (as they dropped secondary missions in OD), Mode C reverts to Mode A.
**Fallback:** Same as 9.1 -- scribe formalization from CSS comments and scratch files.

### 9.3 Convention-First Architecture

**What:** AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html created BEFORE any exploration exists.
**Why Untested:** OD conventions were created AFTER building, to fix the 3-dialect gap. No stage has tested convention-first.
**Risk:** Freezing untested axis-geometry conventions may lock in wrong decisions.
**Mitigation:** Two-phase lifecycle (DRAFT -> VALIDATE -> FROZEN), Convention Auditor, T1/T2 labeling, post-Wave-1A T2 review.

### 9.4 Identity Deltas Between Waves

**What:** Lead writes 10-15 line identity evolution documents between waves.
**Why Untested:** No prior team has written inter-wave identity evolution.
**Risk:** Deltas may be either too shallow (1 question, nearly worthless) or too prescriptive (constraining builder creativity).
**Mitigation:** Quality gate raised to >= 2 surprises + >= 2 questions (XR-10). Weaver cross-checks against actual findings (ID-01 through ID-04).

### 9.5 Planted Violation Protocol

**What:** Lead plants 12 deliberate violations across 4 auditor types to calibrate detection rates.
**Why Untested:** Completely novel -- proposed in retrospective as "Open Question 6."
**Risk:** If detection rate is 0-1/5 for build plants, audit methodology is non-functional. No contingency exists.
**Mitigation:** If detection rate is < 3/5, escalate to user for manual review. Document detection rate for future calibration.

### 9.6 LOCKED/AXIS Template Split

**What:** Soul template has an immutable LOCKED layer and a builder-modifiable AXIS layer.
**Why Untested:** OD had no template -- builders started from blank files.
**Risk:** Builders may modify the LOCKED layer despite instructions (though "DO NOT MODIFY" is a binary rule, which achieves 100% compliance).
**Mitigation:** Post-build gate check: diff LOCKED layer of built file against template. Any change = FAIL.

### 9.7 Weaver Real-Time Convention Drift Monitoring

**What:** Weaver monitors convention compliance DURING build, not just after.
**Why Untested:** Weaver has historically been after-the-fact (cross-referencing post-build).
**Risk:** Real-time monitoring adds Weaver workload and may cause it to lag behind builders.
**Mitigation:** Weaver checks convention compliance at WAVE boundaries (after each wave completes), not continuously during build. This is batch-per-wave, not truly real-time.

---

## 10. WEAVER DEFINITIVE FINDINGS (Incorporated)

### 10.1 All 15 Cross-References

| ID | Finding | Severity | Sources | Resolution |
|----|---------|----------|---------|------------|
| XR-01 | Builder incremental finding writing is untested | CRITICAL | 6 sources | Scribe fallback from CSS comments |
| XR-02 | File write contention for simultaneous writes | CRITICAL | 4 sources | Per-builder scratch files, Lead merges |
| XR-03 | Convention freezing before validation | CRITICAL | 6 sources | Two-phase lifecycle + LOCKED/AXIS split |
| XR-04 | No identity-research challenge protocol | CRITICAL | 4 sources | CLASS A/B/C challenge protocol |
| XR-05 | R-2 structural orphaning (0% across 3+ stages) | HIGH | 4 sources | Embed in research packages, anti-orphaning rule |
| XR-06 | No explicit layer architecture definition | HIGH | 4 sources | 30-50 line LAYER ARCHITECTURE section |
| XR-07 | Static research guidance never evolves | HIGH | 3 sources | Dynamic guidance in identity deltas |
| XR-08 | Enrichment layers not enumerated | HIGH | 3 sources | 8-layer checklist in builder prompts |
| XR-09 | Inline threading header format unspecified | HIGH | 4 sources | 7-section template specification |
| XR-10 | Identity delta quality gate too low | HIGH | 3 sources | >= 2 surprises + >= 2 questions minimum |
| XR-11 | Synced duplicate pattern unaddressed | MEDIUM | 4 sources | Designate authoritative location |
| XR-12 | ACCUMULATED-IDENTITY location anomaly | MEDIUM | 4 sources | Move v2 to provenance/ |
| XR-13 | Playwright contention during audit | MEDIUM | 4 sources | File-only new auditors, sequential visual |
| XR-14 | Anti-citation-theater is judgment infinite regress | MEDIUM | 4 sources | Accept imperfection, enforce binary components |
| XR-15 | BACKBONE.md R-2 count still wrong (78 vs 27) | MEDIUM | 3 sources | Fix BEFORE AD starts (Phase 0 housekeeping) |

### 10.2 All 5 Resolved Contradictions

| # | Contradiction | Resolution |
|---|-------------|------------|
| 1 | Layer count: 3 vs 5 vs 8-9 layers | Two layering systems: Physical (3 WHERE) + Functional (8-9 WHAT). Both correct at different abstraction levels. Document both. |
| 2 | Fresh-eyes challenge coverage: 0% vs 15% | ~15% informal (fresh-eyes exists), 0% formal protocol. Add formal protocol, acknowledge informal mechanism. |
| 3 | Prompt length: 200 vs 50-100 lines | Skeleton already specifies 50-100. Miner's 200 was a false gap. Proposed additions go in reference files, not prompts. |
| 4 | Section reference: Section 10 vs 6.3 | Auditor correct. Minor factual correction. |
| 5 | UNIQUE FRESH count: 6 vs 7 | Source disagreement (captain report vs MEMORY.md). Minor. Doesn't affect lesson. |

### 10.3 All 4 Emergent Patterns

| # | Pattern | Impact | Resolution |
|---|---------|--------|------------|
| 1 | **Binary-Judgment Boundary** | Every analyst proposes improvements containing hidden judgment. Total would add 15+ judgment rules at ~0% compliance. | Explicitly classify EVERY rule as BINARY (gate-enforce) or JUDGMENT (Lead/Fresh-Eyes only). The deepest structural finding. |
| 2 | **Convention Bottleneck** | Convention Agent = single point of failure with 6x downstream amplification. | Two-phase lifecycle + LOCKED/AXIS split + Convention Auditor (Section 3 of this document). |
| 3 | **Provenance Timing Paradox** | Mode C uses wrong mechanism (builders, not scribes) to address right problem (deferred provenance). | Plan for Mode C failure. Scribe fallback extracts from CSS comments. Preserve INTENT (per-wave) using PROVEN mechanism (scribes). |
| 4 | **Document Engineering** | Skeleton is ~90% procedural, ~10% structural. Should be ~60/40. Agents need STRUCTURAL definitions (what a complete document contains) alongside PROCEDURAL ones (what steps to follow). | Add structural definitions: 8 enrichment layers, 7-section inline header template, layer architecture graph, complete document anatomy. |

### 10.4 All CRITICAL and HIGH Gaps (15 total)

**CRITICAL (5):**
1. File write contention (XR-02) -- per-builder scratch files
2. Convention bottleneck (XR-03) -- two-phase lifecycle
3. Builder finding writing untested (XR-01) -- scribe fallback
4. Challenge protocol missing (XR-04) -- CLASS A/B/C protocol
5. Convention Agent inputs unspecified (E01) -- enumerate explicit inputs

**HIGH (10):**
6. Enrichment layers not enumerated (XR-08) -- 8-layer checklist
7. Inline header format unspecified (XR-09) -- 7-section template
8. Layer architecture undefined (XR-06) -- 30-50 line section
9. Static research guidance (XR-07) -- dynamic guidance per wave
10. R-2 structural orphaning (XR-05) -- embed in packages
11. Identity delta quality gate too low (XR-10) -- raise minimum
12. Research package format unspecified (Auditor M1) -- template
13. Template enforcement weakness (E04) -- LOCKED/AXIS split
14. No post-build chain integrity diagnostic (PC-10) -- Gate 6 step
15. BACKBONE.md R-2 count stale (XR-15) -- fix before AD starts

---

## 11. SEQUENCING PRINCIPLES (Proven Across All Teams)

These are absolute rules, not guidelines. Each was validated by at least one OD team execution:

1. **Convention BEFORE any build** -- OD built without conventions, got 3-dialect gap
2. **Research BEFORE build, never during** -- prevents builder context exhaustion
3. **Identity loading BEFORE build** -- accumulated identity evolves between waves
4. **Scribe AFTER build, same wave** -- Mode C incremental provenance
5. **Visual audit BEFORE programmatic** -- "look before you measure"
6. **Fresh-eyes AFTER regular audit** -- different epistemic position
7. **Per-file ownership for fixes** -- zero contention (proven)
8. **Weaver LAST to shut down** -- maintains state through final verification
9. **HTTP server BEFORE any Playwright agent** -- blank tabs = wasted agents
10. **`document.fonts.ready` BEFORE any computed style check** -- prevents false font findings

---

## 12. SHUTDOWN PROTOCOL

### Per-Agent Shutdown
```
1. Verify agent output file exists and is non-empty
2. Send shutdown_request via SendMessage
3. Wait for shutdown_response (approve) -- 2 min timeout
4. If no response: verify file written, proceed anyway
5. Update AD-BUILD-STATE.md: agent status -> SHUTDOWN
```

### Per-Wave Shutdown
```
1. All agents in wave verified complete (file existence + TaskUpdate check)
2. Lead reviews gate criteria (binary checks)
3. Gate PASS -> send shutdown_request to ALL wave agents
4. Gate FAIL -> route back to responsible agent (respawn if needed)
5. Update AD-BUILD-STATE.md: wave status -> COMPLETE
6. Create tasks for next wave (wave-gated task creation, not all-at-once)
```

### Session Shutdown
```
1. All phases complete (AD-BUILD-STATE.md shows all phases COMPLETE)
2. All verification gates PASS (Gate 6, 13 checks)
3. Git status shows only intended changes
4. Lead sends shutdown_request to Weaver (LAST to shut down -- always)
5. Verify all agents shutdown
6. Commit changes (Lead ONLY -- one committer, one branch)
7. TeamDelete (cleanup)
```

### Known Issues
- Synthesizer agents sometimes need 3-4 shutdown attempts -- be persistent
- Workers sometimes don't call TaskUpdate on completion -- verify via FILE EXISTENCE instead
- Broadcast shutdown is cleaner than per-agent shutdown requests for wave-end shutdown
- Idle notifications are noise -- filter them, don't act on them

---

## 13. PLANTED VIOLATION SUMMARY

| Target | Count | When Planted | When Checked | When Removed | Auditor |
|--------|-------|-------------|-------------|-------------|---------|
| Convention spec | 3 (C1-C3) | Before Convention Auditor | Phase 0 | Before Gate 0 passes | Convention Auditor |
| Research eval | 1 (R1) | Before Research Auditor | Phase 0 | Before Gate 0 passes | Research Auditor |
| Build output | 5 | After Phase 1, before Phase 2 | Phase 2 | Before Phase 3 | Visual + Structural |
| Provenance chain | 3 (P1-P3) | After Phase 1, before Phase 2 | Phase 2 | Before Phase 3 | Provenance Auditor |
| **Total** | **12** | | | | |

**Detection Scoring:**
- 5/5 or 3/3 = high confidence in auditor
- 3-4/5 or 2/3 = moderate confidence
- 0-2/5 or 0-1/3 = NON-FUNCTIONAL auditor -- escalate to user

---

**END OF TEAM & EXECUTION PROTOCOL**

**Total: ~850 lines**
**Phases: 5 (0-4) with 87 total gate checks**
**Agents: ~25 unique (9 peak concurrent)**
**Cross-references incorporated: 15**
**Contradictions resolved: 5**
**Emergent patterns addressed: 4**
**CRITICAL gaps addressed: 5**
**HIGH gaps addressed: 10**
**Untested mechanisms inventoried: 7 (all with fallbacks)**
**OD lessons incorporated: from 5 teams, 100+ agents**
