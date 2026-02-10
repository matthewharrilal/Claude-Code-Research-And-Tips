# AD PHASE SKELETON: UNIFIED SPECIFICATION
## Synthesized from 7 Parallel Research Agents
**Date:** 2026-02-09
**Status:** READY FOR PLAN CONVERSION

---

## 0. AD SCOPE AND GOALS

**What AD is:** Stage 4 of the design system pipeline. AD explores **axis geometry** -- how the reader's eye physically moves through content. It validates the transitive chain: organization -> density -> axis.

**What AD produces:**
- 6 axis exploration HTML files (AD-001 through AD-006)
- 10-20+ AD-F findings (core + meta-pattern + process + forward + anti-pattern)
- 40-52 EXT-AXIS-* bespoke research findings
- ACCUMULATED-IDENTITY-v2.md
- HANDOFF-AD-TO-CD.md
- Full provenance chain documents (STAGE-HEADER, SYNTHESIS, AUDIT-SYNTHESIS, RESEARCH-GATE, CONVENTION-SPEC)

**What AD validates:** Whether axis geometry is a 3rd perspective on the same org-density phenomenon (3-way unification) or a genuinely independent dimension.

**What AD consumes:**
| Input | Count | Role |
|-------|-------|------|
| R-4 Axis Innovations | 192 findings | PRIMARY research (0% consumed, AD is designated stage) |
| R-2 Creative Layouts | 25 applicable (2 SOUL FAIL) | SECONDARY research (0% consumed across DD+OD+re-enrichment) |
| OD-F findings | 17 | Inherited constraints (8 MUST, 9 SHOULD) |
| DD-F findings | 18 | Inherited constraints (especially DD-F-012 GATE finding) |
| EXT-AXIS-* | 40-52 (commissioned) | Bespoke axis research |
| ACCUMULATED-IDENTITY-v1.1 | 577 lines | Full inherited identity |
| OD-CONVENTION-SPEC | 468 lines | Convention baseline |

---

## 1. TEAM TOPOLOGY

### 1.1 Recommended: Hybrid (Hierarchical Build + Hierarchical Audit + Flat Fix)

**Rationale from protocol mining:**
- Flat works for <17 agents (0 Lead compactions in audit/remediation/fix)
- Flat fails at 43 agents (3+ Lead compactions in re-enrichment)
- Hierarchical validated at ~58 agents (0 Lead compactions in comprehensive audit)
- AD targets ~21 total agents across all phases -- flat-safe but hierarchical for audit

### 1.2 Agent Roster by Phase

| Phase | Agents | Roles | Direct Reports to Lead |
|-------|--------|-------|----------------------|
| Phase 0: Convention + Research | 5 | Lead, Convention Agent, R-4 Evaluator, R-2 Re-Mapper, Weaver | 4 |
| Phase 1: Build (Wave 1) | 5 | Lead, Builder-A, Builder-B, Scribe, Weaver | 4 |
| Phase 1: Build (Wave 2) | 5 | Lead, Builder-C, Builder-D, Scribe, Weaver | 4 |
| Phase 1: Build (Wave 3) | 5 | Lead, Builder-E, Builder-F, Scribe, Weaver | 4 |
| Phase 2: Audit | 8 | Lead, 3 Visual, 1 Structural, 1 Fresh-Eyes, Weaver, Synthesizer | 7 |
| Phase 3: Fix | 5 | Lead, 3 Fixers, 1 Verifier | 4 |
| **Peak concurrent** | **8** | Audit phase | **7** |
| **Total unique** | **~21** | (Lead + Weaver persist; others are per-phase) | Never exceeds 7 |

### 1.3 Key Roles

**Lead:** Orchestrate only. NEVER build. NEVER run Playwright. NEVER read source HTML. Reads captain/agent summaries and state files only. Checks binary gates. Writes identity deltas between waves.

**Weaver (persists all phases):** Cross-reference intelligence. Maintains AD-BUILD-STATE.md. Tracks finding ID sequence. Monitors convention drift DURING build. Last to shut down.

**Builders (Phase 1 only):** One per AD exploration. Receives: soul template + convention spec + research package. Writes: AD-NNN.html + finding entries in AD-outbound-findings.md. Runs 10-item self-check before completion.

**Researchers (Phase 0 only):** R-4 Evaluator (reads all 192 findings), R-2 Re-Mapper (converts OD-mapped R-2 to AD targets), Convention Agent (writes AD-CONVENTION-SPEC.md + AD-SOUL-TEMPLATE.html). EXT-AXIS-* research is embedded in per-exploration research packages, prepared by researchers during Phase 0 or by builders' Wave-0 sub-agents.

**Fresh-Eyes (Phase 2):** Receives full identity knowledge but NO convention spec, NO builder justifications, NO prior audit findings. The ONLY agent allowed judgment calls on design quality.

### 1.4 Worker Reliability Rules (from all 4 OD teams)

| Rule | Source | Compliance |
|------|--------|-----------|
| Every agent prompt includes "CRITICAL: You MUST write your output file using the Write tool. Your output file is: {exact path}" | Comprehensive audit lesson | Required |
| File-only agents (no Playwright) are preferred for provenance/research work | 95% vs 30-40% write rate | Required |
| Single recovery agents replace failed captain-worker hierarchies | 100% reliability observed | Fallback |
| Sequential Playwright access (1 agent per page at a time) | Only 2/13 workers got Playwright in parallel mode | Required |

---

## 2. EXECUTION WAVES AND GATES

### 2.1 Wave Structure

```
Phase 0: Setup + Convention + Research Foundation (~45-60 min)
  Wave 0A: Setup (Lead only)
  Wave 0B: Convention (Convention Agent) + Research (R-4 Eval, R-2 Re-Map) — parallel
  Wave 0C: EXT-AXIS-* research packages (6 per-AD packages)
  Wave 0D: Research Gate compilation
  Gate 0: 13 binary checks (see 2.2)

Phase 1: Batched Build (~2-3 hours, 3 waves of 2 explorations)
  Wave 1A: AD-001 + AD-002 (Research -> Build -> Scribe -> Verify -> Identity Delta)
  Wave 1B: AD-003 + AD-004 (same sub-phase structure, reads delta from 1A)
  Wave 1C: AD-005 + AD-006 (same structure, reads deltas from 1A+1B)
  Gate 1/2/3: Per-wave binary checks (see 2.3)

Phase 2: Adversarial Audit (~45-60 min)
  Wave 2A: Visual audit (3 agents, sequential Playwright per page)
  Wave 2B: Structural audit (1 agent, programmatic DOM checks)
  Wave 2C: Fresh-eyes audit (1 agent, no convention spec)
  Wave 2D: Weaver cross-reference synthesis
  Gate 4: Audit complete checks (see 2.4)

Phase 3: Fix Execution (~25 min)
  Wave 3A: Per-file fixes (1 fixer per file, zero contention)
  Wave 3B: Verification (programmatic THEN visual — sequential)
  Wave 3C: Scribe provenance updates
  Gate 5: Fix complete checks (see 2.5)

Phase 4: Synthesis + Handoff (~30 min)
  Wave 4A: AD-SYNTHESIS.md, HANDOFF-AD-TO-CD.md
  Wave 4B: ACCUMULATED-IDENTITY-v2.md, BACKBONE.md, PIPELINE-MANIFEST.md updates
  Wave 4C: Final verification + commit
  Gate 6: Stage complete checks (see 2.6)
```

### 2.2 Gate 0: Setup + Convention + Research

```
GATE 0-01: TeamCreate success                                          — PASS/FAIL
GATE 0-02: HTTP server running, returning 200                          — PASS/FAIL
GATE 0-03: Playwright navigated to test page, screenshot shows content — PASS/FAIL
GATE 0-04: Working directories exist (_ad-execution/, stage-4-axis-ad/)— PASS/FAIL
GATE 0-05: AD-BUILD-STATE.md created                                   — PASS/FAIL
GATE 0-06: AD-CONVENTION-SPEC.md exists, >= 300 lines                  — PASS/FAIL
GATE 0-07: AD-CONVENTION-SPEC all values labeled T1/T2                 — PASS/FAIL
GATE 0-08: AD-SOUL-TEMPLATE.html exists and renders correctly          — PASS/FAIL
GATE 0-09: R-4-AD-EVALUATION.md exists, >= 150/192 findings categorized— PASS/FAIL
GATE 0-10: r2-ad-mapping.md exists, >= 18/25 findings have AD targets — PASS/FAIL
GATE 0-11: 6 research packages exist (research-package-ad-{1-6}.md)   — PASS/FAIL
GATE 0-12: >= 5 EXT-AXIS-* findings per AD, all SOUL PASS             — PASS/FAIL
GATE 0-13: AD-RESEARCH-GATE.md compiled with all findings tracked      — PASS/FAIL
```

**FAIL ROUTE for 0-02/0-03:** Troubleshoot server. NEVER skip. Empty Playwright = wasted agents.
**FAIL ROUTE for 0-06/0-07:** Convention spec incomplete. No builds start without complete convention.

### 2.3 Gates 1-3: Per-Build-Wave

Each wave checks ALL accumulated files, not just the new ones (lesson from rgba() epidemic):

```
GATE W-01: Expected AD HTML files exist, each >= 80KB                  — PASS/FAIL
GATE W-02: Each file has INLINE THREADING HEADER                       — PASS/FAIL
GATE W-03: Each file's :root block matches AD-CONVENTION-SPEC.md       — PASS/FAIL
GATE W-04: Soul: 0 border-radius > 0 across ALL files built so far    — PASS/FAIL
GATE W-05: Soul: 0 box-shadow != none across ALL files                 — PASS/FAIL
GATE W-06: Soul: 0 filter effects across ALL files                     — PASS/FAIL
GATE W-07: Border: 0 instances of 2px borders across ALL files         — PASS/FAIL
GATE W-08: All backgrounds opaque (0 rgba with alpha < 1)              — PASS/FAIL
GATE W-09: Convention compliance: font trio correct                    — PASS/FAIL
GATE W-10: Research Application Record present in each file            — PASS/FAIL
GATE W-11: >= N R-4/R-2/EXT citations per file with evidence          — PASS/FAIL
GATE W-12: AD-F findings written in AD-outbound-findings.md            — PASS/FAIL
GATE W-13: Scribe updated provenance files                             — PASS/FAIL
```

### 2.4 Gate 4: Audit Complete

```
GATE 4-01: Visual audit report exists with findings                    — PASS/FAIL
GATE 4-02: Structural audit report exists with findings                — PASS/FAIL
GATE 4-03: Fresh-eyes report exists with >= 3 UNIQUE FRESH findings    — PASS/FAIL
GATE 4-04: Weaver synthesis exists with cross-references               — PASS/FAIL
GATE 4-05: All Critical/High findings have fix assignments             — PASS/FAIL
GATE 4-06: No unresolved contradictions between auditors               — PASS/FAIL
GATE 4-07: Master audit report compiled                                — PASS/FAIL
```

### 2.5 Gate 5: Fix Complete

```
GATE 5-01: All Critical fixes applied                                  — PASS/FAIL
GATE 5-02: All High fixes applied                                     — PASS/FAIL
GATE 5-03: Programmatic verification PASS (DOM checks)                 — PASS/FAIL
GATE 5-04: Visual verification PASS (screenshots)                      — PASS/FAIL
GATE 5-05: Soul compliance re-verified: 0 violations post-fix         — PASS/FAIL
GATE 5-06: 0 NEW violations introduced by fixes                       — PASS/FAIL
GATE 5-07: Per-fixer reports exist                                     — PASS/FAIL
GATE 5-08: Scribe provenance updates complete                          — PASS/FAIL
```

### 2.6 Gate 6: Stage Complete

```
GATE 6-01: All 6 AD HTML files exist, scored >= 32/40                 — PASS/FAIL
GATE 6-02: AD-outbound-findings.md exists with >= 10 findings          — PASS/FAIL
GATE 6-03: AD-SYNTHESIS.md exists with all 7 sections                  — PASS/FAIL
GATE 6-04: AD-RESEARCH-GATE.md exists with post-build verification     — PASS/FAIL
GATE 6-05: AD-AUDIT-SYNTHESIS.md exists                                — PASS/FAIL
GATE 6-06: HANDOFF-AD-TO-CD.md exists with acknowledgment protocol     — PASS/FAIL
GATE 6-07: ACCUMULATED-IDENTITY-v2.md finalized                       — PASS/FAIL
GATE 6-08: BACKBONE.md updated with Stage 4 narrative                  — PASS/FAIL
GATE 6-09: PIPELINE-MANIFEST.md updated with AD-F entries              — PASS/FAIL
GATE 6-10: RESEARCH-ACTIVE.md updated (R-4 >= 80%, R-2 >= 72%)        — PASS/FAIL
GATE 6-11: SOUL-DISCOVERIES.md has Stage 4 determination               — PASS/FAIL
GATE 6-12: axis-patterns.md has all 6 patterns                        — PASS/FAIL
GATE 6-13: Git status shows only intended changes                      — PASS/FAIL
```

### 2.7 Sequencing Principles (Proven Across 4 OD Teams)

1. **Convention BEFORE any build** -- OD built without conventions, got 3-dialect gap
2. **Research BEFORE build, never during** -- prevents builder context exhaustion
3. **Identity loading BEFORE build** -- accumulated identity evolves between waves
4. **Scribe AFTER build, same wave** -- Mode C incremental provenance
5. **Visual audit BEFORE programmatic** -- "look before you measure"
6. **Fresh-eyes AFTER regular audit** -- different epistemic position
7. **Per-file ownership for fixes** -- zero contention (proven)
8. **Weaver LAST to shut down** -- maintains state through final verification

---

## 3. PROVENANCE: INLINE-DURING-BUILD (Mode C)

### 3.1 The Fundamental Rule

> **Write it when you discover it. Not later. Not in a separate pass. NOW.**

OD deferred provenance -> required 18-agent remediation. AD writes provenance incrementally.

### 3.2 Discovery-to-Documentation Flow

```
Builder discovers finding during AD-003
  -> STOP building
  -> Assign ID from reserved range (AD-003: AD-F-009 to AD-F-012)
  -> Write 7-field finding block in AD-outbound-findings.md (APPEND)
  -> RESUME building
  -> Cite AD-F-NNN in the HTML header comment
```

### 3.3 Finding ID Reserved Ranges (Collision Prevention)

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

**Why:** OD-F-005 collision happened because two agents independently chose the same ID. Reserved ranges make this impossible.

### 3.4 Incremental vs Deferred Decision Matrix

| Document | When Written | Rationale |
|----------|-------------|-----------|
| AD-outbound-findings.md | **INCREMENTAL** (each finding at discovery) | Highest-value change from OD |
| AD-RESEARCH-GATE.md | **PRE-BUILD** (Phase 0) | Must block building until passed |
| AD-CONVENTION-SPEC.md | **PRE-BUILD** (Phase 0) | Prevents dialect drift |
| AD-SYNTHESIS.md | **DEFERRED** (after all ADs built) | Requires cross-AD comparison |
| AD-AUDIT-SYNTHESIS.md | **DEFERRED** (after audit) | Cannot exist before audit |
| HANDOFF-AD-TO-CD.md | **DEFERRED** (at stage end) | Requires complete picture |
| STAGE-HEADER.md | **HYBRID** (draft at start, incremental updates) | |
| ACCUMULATED-IDENTITY-v2.md | **HYBRID** (draft at start, findings during build, finalize at end) | |
| PIPELINE-MANIFEST.md | **BATCHED** (Lead updates between waves) | Contention prevention |
| axis-patterns.md | **INCREMENTAL** (each pattern after its exploration) | |
| EXT-RESEARCH-REGISTRY.md | **INCREMENTAL** (each EXT-AD category when commissioned) | |

### 3.5 File Ownership Matrix (Zero Contention)

| File | Owner | Others May |
|------|-------|-----------|
| AD-NNN.html | Builder who creates it | Nobody else touches |
| AD-outbound-findings.md | Builder who discovers finding (append-only) | Read only |
| PIPELINE-MANIFEST.md | Lead (batch updates between waves) | Nobody else |
| AD-CONVENTION-SPEC.md | Lead (Phase 0 only, frozen after) | All read; nobody modifies |
| AD-BUILD-STATE.md | Weaver | All read |
| HANDOFF-AD-TO-CD.md | Lead only | Nobody |
| ACCUMULATED-IDENTITY-v2.md | Lead (draft/finalize), builders add to their sections | |

---

## 4. ENRICHMENT STRATEGY

### 4.1 Convention-First Architecture

AD eliminates OD's 43-agent re-enrichment phase by embedding enrichment DURING build.

**Three convention artifacts created in Wave 0 (HARD BLOCK on Wave 1):**

1. **AD-CONVENTION-SPEC.md** (300-500 lines): Inherits ALL OD conventions + adds axis-specific CSS Grid/Flexbox patterns, zone tokens, responsive breakpoints, axis transition signals. Every value labeled T1 (research-backed) or T2 (agent-authored with rationale).

2. **AD-SOUL-TEMPLATE.html**: Skeleton HTML file every builder copies. Embeds ALL convention CSS. Builders add CONTENT only -- cannot accidentally create dialect divergence.

3. **AD-BINARY-GATES.md**: 10-item self-check every builder runs before completion.

### 4.2 Research-as-Build-Input (Not Post-Hoc)

```
Wave 0 produces:
  R-4-AD-EVALUATION.md (192 findings mapped to AD explorations)
  r2-ad-mapping.md (25 applicable R-2 findings remapped from OD to AD targets)
  6 research packages (one per AD, with chain traversal + EXT-AXIS-* + R-4/R-2 applicable subset)

Wave 1+ builders receive AS INPUT:
  1. AD-SOUL-TEMPLATE.html (starting point)
  2. AD-CONVENTION-SPEC.md (styling rules)
  3. research-package-ad-{N}.md (what research to apply)

Builder applies research DURING construction, citing finding IDs inline.
```

### 4.3 Research Application Targets

| Research | Target Rate | Rationale |
|----------|------------|-----------|
| R-4 (192 findings) | >= 80% of applicable | Matches OD R-1 target; R-4 is AD's primary |
| R-2 (25 applicable) | >= 72% (18/25 findings) | Previously 0% across 3 stages |
| EXT-AXIS-* (~40-52) | >= 90% | Bespoke research should have highest utilization |
| DD-F + OD-F constraints | 100% | Non-negotiable inherited constraints |

### 4.4 Anti-Citation-Theater Measures

1. Each citation must point to a specific HTML/CSS element (not just "R4-001 applied")
2. Weaver cross-checks: citation ID exists in source + cited element exists in HTML
3. Fresh-eyes agent observes axis patterns WITHOUT reading research, then cross-references
4. Discrepancy = citation theater flagged

### 4.5 EXT-AXIS-* Naming Convention

| AD | Research Prefix | Target Count |
|----|----------------|-------------|
| AD-001 | EXT-AXIS-Z-### | 6-8 |
| AD-002 | EXT-AXIS-F-### | 6-8 |
| AD-003 | EXT-AXIS-B-### | 6-8 |
| AD-004 | EXT-AXIS-S-### | 6-8 |
| AD-005 | EXT-AXIS-C-### | 8-10 |
| AD-006 | EXT-AXIS-X-### | 8-10 |
| **Total** | | **40-52** |

### 4.6 Generative Identity Loop

Identity evolves BETWEEN waves via deltas (10-15 lines each):

```
Identity v1.1 -> Wave 1A builds -> Lead writes identity-delta-ad-wave1A
-> Identity + delta1A -> Wave 1B builds (DIFFERENT questions)
-> Lead writes identity-delta-ad-wave1B
-> Identity + delta1A + delta1B -> Wave 1C builds (forward questions)
-> Final synthesis -> ACCUMULATED-IDENTITY v2
```

Each delta MUST contain >= 1 specific new question referencing THIS wave's findings and targeting a SPECIFIC aspect of the next wave's ADs.

---

## 5. AUDIT PROTOCOL

### 5.1 Visual Audit (Playwright)

**Protocol:**
1. Set viewport 1440x900, navigate via HTTP (NEVER file://)
2. Wait for `document.fonts.ready` (prevents font-loading false positives)
3. Inject animation-disable CSS
4. Screenshot viewport-by-viewport (8-12 slices per page)
5. Repeat at 768px width
6. Target: ~132 screenshots (6 pages x 2 viewports x ~10 slices + full-page)

**Playwright Contention Mitigation:** Sequential per-page assignment. Agent 1 finishes AD-001 completely before Agent 2 starts AD-002.

**13 Binary Visual Gates (per page):** VA-01 (renders) through VA-13 (research compliance). All PASS/FAIL.

### 5.2 Structural Audit (DOM)

**Per-file checks:**
- Element count, soul violations (0 tolerance), 2px borders (0 tolerance)
- rgba() backgrounds (0 tolerance), font compliance, heading hierarchy
- Accessibility: skip-link, focus-visible, reduced-motion, print media, landmarks
- :root token verification against AD-CONVENTION-SPEC.md (every mismatch = FAIL)

### 5.3 Fresh-Eyes Protocol

**Core constraint:** Full identity knowledge, NO convention spec values, NO builder justifications, NO prior audit findings.

**5 questions per page:**
1. First impression? (5 words max)
2. Single worst thing?
3. Single best thing?
4. Would a newcomer understand this is part of a design system showcase?
5. If you could change ONE thing?

**Dual Nuclear Questions:**
1. Insider test: "Does this communicate identity to someone who already knows the system?"
2. Outsider test: "Does this communicate identity to someone encountering it for the first time?"

**Minimum threshold:** >= 3 UNIQUE FRESH findings. Below this = respawn with stricter isolation.

### 5.4 Planted Violation Protocol (Audit Calibration)

Before audit, Lead plants 5 known violations:
1. border-radius: 4px on one callout
2. box-shadow on one code block
3. filter: drop-shadow on one header
4. Off-palette color on one label
5. 2px border on one section divider

**Detection scoring:** 5/5 = high confidence, 3-4/5 = moderate, 1-2/5 = low, 0/5 = non-functional.
Post-audit: remove all planted violations before fix phase.

### 5.5 Weaver Protocol

Maintained across ALL phases. Responsibilities:
1. Cross-references (same finding from multiple agents)
2. Contradictions (conflicting findings requiring resolution)
3. Emergent patterns (systemic issues visible only cross-pillar)
4. Convention drift monitoring DURING build (catches dialect problems early)
5. State file maintenance (AD-BUILD-STATE.md)
6. Finding ID sequence tracking

---

## 6. IDENTITY CHAIN CONTINUITY (OD -> AD)

### 6.1 Consumption Order (Required)

| # | File | Why This Order |
|---|------|---------------|
| 1 | HANDOFF-OD-TO-AD.md | THE FIRST THING AD READS. Contains acknowledgment protocol. |
| 2 | ACCUMULATED-IDENTITY-v1.1.md | Full inherited mental model |
| 3 | OD-outbound-findings.md | Specific findings AD must consume |
| 4 | OD-SYNTHESIS.md | Context for HOW OD discoveries were made |
| 5 | SOUL-DISCOVERIES.md | Immutable constraints (5 soul pieces) |
| 6 | OD-CONVENTION-SPEC.md | Apply conventions from day one |
| 7 | R-4 Axis Innovations | PRIMARY research (192 findings) |
| 8 | R-2 Creative Layouts | SECONDARY research (25 applicable) |
| 9 | density-patterns.md | Axis must SERVE these |
| 10 | organizational-patterns.md | Axis must serve unified org-density |

### 6.2 ACCUMULATED-IDENTITY v1.1 -> v2 Extension

| v1.1 Section | v2 Change |
|-------------|-----------|
| WHO WE ARE | Add axis identity statement. IF spatial soul piece discovered, add Soul Piece #6 |
| WHAT WE'VE LEARNED | Add AD-F findings table. Add transitive chain validation results |
| WHAT WE HONOR | Add axis-specific constraints. Update fractal scale count if 6th scale discovered |
| WHAT WORKED | Add AD scoring table |
| WHAT DIDN'T WORK | Add AD anti-patterns |
| WHERE WE ARE | Update pipeline position (AD COMPLETE). Update research utilization |
| OPEN QUESTIONS | Replace "for AD" with "for CD". Answer v1.1's 6 open questions. Pose new ones |
| IDENTITY STATEMENT | Extend with axis dimension. Address 3-way unification |

**v2 constraints:** Target 700-800 lines. Standalone document (any agent reading ONLY v2 can make consistent decisions). Written AFTER all 6 ADs are built, audited, and fixed.

### 6.3 Answering v1.1's Open Questions

| # | Open Question | AD Answers Through |
|---|-------------- |-------------------|
| 1 | 4px/3px/1px gap asymmetry | AD-004 Spiral + AD-006 Compound testing |
| 2 | Quintuple equivalence (is navigation a scale?) | AD-006 testing 6th member |
| 3 | Semi-transparent violations | Binary rgba/opacity sweep on all 6 ADs |
| 4 | WAVE self-documentation | AD-005 Choreography as natural test |
| 5 | R-2 at 0% | AD consumes R-2 (25 SOUL PASS, 2 SOUL FAIL) |
| 6 | Org implies axis (transitive chain) | AD's CORE task. 6 explorations validate chain. |

### 6.4 Soul Discovery Protocol

AD watches for potential Soul Piece #6 (spatial). Outcomes:
- **No spatial soul piece:** Document negative finding. 5 pieces remain complete.
- **Spatial soul piece discovered:** Must be a WAY OF SEEING (not CSS rule), must be DISCOVERED (not decided), must be immutable. Two-instance verification required.
- **ANTI-PHYSICAL elevated:** If AD produces 10+ SOUL FAILs in same categories as OD's 20/20, evidence becomes overwhelming for formalization.

---

## 7. RESEARCH STRATEGY

### 7.1 R-4 Digestion (192 Findings -> AD Mapping)

Wave 0 produces R-4-AD-EVALUATION.md mapping all 192 findings:

| AD | Org Pattern | Density Pattern | Natural Axis | Primary R4 Categories |
|----|------------|-----------------|-------------|----------------------|
| AD-001 | Conversational | PULSE + TIDAL | Vertical flow, width variation | Classic Reading (Z/F), Visual Rhythm |
| AD-002 | Narrative Arc | CRESCENDO | Vertical progressive build | Cinematic, Visual Rhythm, Diagonal |
| AD-003 | Task-Based | ISLANDS + BOOKENDS | Grid/cluster layout | Bento Grid, Hub-and-Spoke, Golden Ratio |
| AD-004 | Confidence | GEOLOGICAL + CRESCENDO | Horizontal strata | Axis Transitions, Masonry |
| AD-005 | Spatial | WAVE + ISLANDS | Hub-and-spoke grid | Hub-and-Spoke, Bento Grid, Broken Grid |
| AD-006 | Creative | ALL patterns | Meta-axis | Pattern Combinations, Use Cases |

**Gate:** >= 150/192 findings categorized by AD target.

### 7.2 R-2 Consumption (25 Applicable Findings)

r2-evaluation.md from OD re-enrichment already evaluated all 27 R-2 findings. AD re-maps from OD targets to AD targets. HIGH priority findings: R2-005 (Whitespace as Content), R2-008 (Dense but Breathable), R2-010 (Maturity Badges), R2-019 (Typography as Primary), R2-020 (Whitespace for Hierarchy), R2-021 (Typographic Hierarchy).

**Gate:** >= 18/25 findings have planned AD targets with specific application guidance.

### 7.3 Citation Requirements Per File

| AD | Min R-4 | Min R-2 | Min EXT-AXIS-* |
|----|---------|---------|----------------|
| AD-001 through AD-004 | 15 | 5 | 5 |
| AD-005 | 20 | 8 | 5 |
| AD-006 | 25 | 8 | 8 |

---

## 8. TOP GAPS THAT MUST BE ADDRESSED

From the gap analysis, ranked by impact:

### 8.1 CRITICAL Gaps (Must Resolve Before Build)

**GAP-K01: Zero prior testing of axis geometry within KortAI soul.**
AD is entering completely untested territory. Neither DD nor OD tested axis patterns. Key unknowns: Does Bento Grid work without shadows? Does Spiral work without depth cues? Does Choreography work without animation?

**Resolution:** Phase 0 convention agent performs a soul-compatibility assessment for each axis pattern. For AD-004 Spiral and AD-005 Choreography, this may result in pattern modification. The assessment answers: "What soul-compliant visual signals replace depth/animation for axis transitions?"

**GAP-S05: Animation/transition within soul constraints.**
Axis transitions NEED visual signals but soul prohibits parallax, shadows, z-depth, animation-as-effect. What's left: typography scale changes, border thickness changes, background color zones, spacing changes, content width changes.

**Resolution:** AD-CONVENTION-SPEC.md must include a "Soul-Compliant Axis Transition Toolkit" section specifying exactly which techniques are permitted. Binary ruling needed on: scroll-snap (ALLOWED/BANNED), CSS `order` property (ALLOWED with aria-flowto / BANNED), IntersectionObserver state changes.

### 8.2 HIGH Gaps (Must Resolve in Phase 0)

**GAP-S01: CSS architecture decision framework.**
Without specifying Grid vs Flexbox per exploration, 6 builders make 6 different choices.

**Resolution:** AD-CONVENTION-SPEC.md includes per-AD CSS approach table.

**GAP-S02: Responsive behavior (1440 vs 768).**
No specification for how axis patterns collapse at narrow viewports. Audit checks both widths.

**Resolution:** Each AD exploration has explicit 768px collapse rules in AD-CONVENTION-SPEC.md.

**GAP-S03: Accessibility for axis navigation.**
Source order vs visual order, CSS `order` risks, landmark regions, focus order.

**Resolution:** Binary rule: source order MUST be logical reading order. Visual reordering via CSS Grid placement only (not `order` property). Each axis zone needs `<section>` with descriptive `aria-label`.

**GAP-X01/X02: Stale MASTER-STATE.md and DISCOVERIES-LOG.md.**
Must be updated before AD begins. 15-minute housekeeping.

### 8.3 MEDIUM Gaps (Address During Build)

**GAP-P01: Authority laundering in AD-CONVENTION-SPEC.md.**
Agent-authored conventions treated as research-backed. Resolution: T1/T2 labeling required for every value.

**GAP-M02: Judgment requirements that can't be binarized.**
Some AD decisions ("Does this spiral imply depth?") require judgment. Resolution: Binary rules for all compliance checks. Fresh-eyes agent is the ONLY agent allowed judgment calls on design quality.

**GAP-SC02: AD-004 Spiral risk assessment.**
Highest soul-compliance risk. Resolution: Lead makes formal keep/modify/replace decision during Phase 0 after soul-compatibility assessment.

---

## 9. CONTRADICTIONS BETWEEN AGENTS AND RESOLUTIONS

### 9.1 Provenance Agent vs Protocols Agent: Who Writes Findings?

**Provenance agent says:** "The builder who discovers the finding writes the entry IMMEDIATELY. Not a scribe."
**Protocols agent says:** "Sub-Phase C: Scribe (sequential) — registers EXT-AXIS-* findings, updates AD-outbound-findings.md."

**Resolution:** SPLIT RESPONSIBILITY. Builders write AD-F-NNN findings in AD-outbound-findings.md immediately at discovery (provenance agent is correct -- this is the single most important change from OD). Scribes update SECONDARY chain documents (EXT-RESEARCH-REGISTRY, RESEARCH-ACTIVE, PIPELINE-MANIFEST) after builder completion. This preserves Mode C incrementalism for findings while keeping builders focused on build + finding registration only.

### 9.2 Enrichment Agent vs Research Agent: EXT-AXIS-* Timing

**Enrichment agent says:** EXT-AXIS-* research is embedded in per-exploration research packages, prepared in Wave 0.
**Research agent says:** 6 dedicated EXT-AXIS-* researchers (one per AD) in Wave 0.

**Resolution:** MERGE. Research packages (one per AD) are produced in Wave 0. Each package includes chain traversal + R-4 applicable subset + R-2 applicable subset + EXT-AXIS-* bespoke findings. The number of researchers depends on context budget: 2-3 researchers with 2-3 packages each (preferred) or 6 if budget allows. Key constraint: research packages must exist BEFORE builders spawn.

### 9.3 Gap Agent vs Protocols Agent: AD-004 Spiral

**Gap agent says:** AD-004 Spiral may need to be replaced or modified (GAP-SC02, GAP-K01).
**Protocols agent says:** AD-004 is assumed to exist in all wave structures.

**Resolution:** Phase 0 includes a soul-compatibility assessment for AD-004. If the assessment concludes Spiral is NOT feasible within soul constraints, the Lead substitutes an alternative axis pattern (Gutenberg Diagram, Masonry Grid, or Broken Grid from the R-4 catalog of 25 axis concepts). This decision MUST be made before Wave 1.

### 9.4 Gap Agent vs All Others: Team Size

**Gap agent says:** Range is 14-30, proposes 21 total.
**Protocols agent says:** Implies larger teams in some phases.
**Enrichment agent says:** Implies 6 researchers + 6 builders + supporting cast.

**Resolution:** Target 21 unique agents (Lead + Weaver persist; others per-phase). Peak concurrent is 8 (audit phase). This stays within the <17 safe zone for flat topology in any given phase. If audit needs hierarchy, the 8 audit agents are manageable as direct reports.

### 9.5 Enrichment Agent vs Identity Agent: Convention Spec Approach

**Enrichment agent says:** AD-CONVENTION-SPEC.md is a separate file that inherits OD and extends.
**Identity agent says:** OD-CONVENTION-SPEC.md should be inherited, AD extensions documented.

**Resolution:** Separate file (AD-CONVENTION-SPEC.md) that starts with "INHERITS: OD-CONVENTION-SPEC.md" and only adds axis-specific conventions. This is cleaner than modifying OD's spec and preserves provenance. The enrichment agent's soul template approach (AD-SOUL-TEMPLATE.html) is adopted as the mechanism that enforces convention compliance structurally.

---

## 10. RECOVERY PROTOCOL

### 10.1 State Files (Written to Disk, Survive Compaction)

1. **AD-BUILD-STATE.md** -- Master state. Phase status, agent status, finding summary. Updated by Weaver.
2. **_ad-execution/CLAUDE.md** -- Working directory manifest. File list with owners, purposes, line counts.
3. **identity-delta-ad-wave{N}.md** -- Identity evolution. 10-15 lines each. Written by Lead after each wave.
4. **Per-agent output files** -- Agent's partial output IS its checkpoint.

### 10.2 Lead Recovery Protocol

```
If Lead compacts mid-session:
1. RE-READ AD-BUILD-STATE.md -> current phase, which agents completed
2. RE-READ _ad-execution/CLAUDE.md -> file manifest
3. RE-READ identity-delta-ad-wave{N}.md (latest) -> current identity
4. CHECK TaskList -> completed vs in_progress vs pending
5. VERIFY file existence for expected outputs
6. CONTINUE from where state indicates -- DO NOT restart
```

### 10.3 Agent Recovery Protocol

```
If agent compacts mid-task:
1. RE-READ your output file (partial work IS checkpoint)
2. RE-READ AD-BUILD-STATE.md for phase status
3. RE-READ your input files to rebuild context
4. Continue from where output file left off
5. DO NOT restart from scratch
```

### 10.4 Skeleton-First Pattern

Agents write file SKELETON first (headers + structure + empty sections), then populate. If crash occurs, skeleton survives and can be continued.

---

## 11. PROMPT DESIGN RULES

### 11.1 Length and Structure

- Agent prompts: 50-100 lines max
- Describe OUTCOMES not PROCEDURES
- Embed the 10-line soul compliance checklist in EVERY visual/structural agent prompt
- Embed compaction survival block in EVERY agent prompt
- Embed file-write enforcement in EVERY agent prompt

### 11.2 The 10-Line Soul Checklist (Embed Verbatim)

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

### 11.3 Binary Rule Principle

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

Every constraint must be expressible as "DO X" or "DO NOT do X" -- never "consider whether X."

---

## 12. PRE-AD HOUSEKEEPING

Before AD Phase 0 begins, the following quick-win items should be executed:

| Item | Effort | Impact |
|------|--------|--------|
| Update MASTER-STATE.md to reflect OD complete | 5 min | Prevents downstream confusion |
| Update DISCOVERIES-LOG.md with OD-001 through OD-006 entries | 10 min | Completes tracking gap |
| Execute triage: archive 128 files, delete 6 stale state files | 15 min | Reduces noise for AD agents |
| Verify rgba() fixes from comprehensive audit were committed | 5 min | Prevents AD builders copying unfixed patterns |

---

## 13. FILES AD MUST CREATE

| File | Phase | Owner |
|------|-------|-------|
| AD-001-z-pattern.html through AD-006-compound.html | 1 | Builders |
| AD-CONVENTION-SPEC.md | 0 | Convention Agent |
| AD-SOUL-TEMPLATE.html | 0 | Convention Agent |
| AD-BINARY-GATES.md | 0 | Lead |
| R-4-AD-EVALUATION.md | 0 | R-4 Evaluator |
| r2-ad-mapping.md | 0 | R-2 Re-Mapper |
| research-package-ad-{1-6}.md | 0 | Researchers |
| AD-RESEARCH-GATE.md | 0 | Gate Compiler |
| AD-outbound-findings.md | 0 scaffold, 1 incremental | Builders |
| AD-SYNTHESIS.md | 4 | Lead/Synthesizer |
| AD-AUDIT-SYNTHESIS.md | 2-3 | Audit Synthesizer |
| STAGE-HEADER.md | 0 draft, 4 final | Lead |
| stage-4-axis-ad/CLAUDE.md | 0 draft, ongoing | Lead |
| HANDOFF-AD-TO-CD.md | 4 | Lead |
| ACCUMULATED-IDENTITY-v2.md | 0 draft, 4 final | Lead |
| axis-patterns.md | 1 incremental | Lead |
| identity-delta-ad-wave{1A,1B,1C}.md | 1 | Lead |

## 14. FILES AD MUST UPDATE

| File | What Changes | When |
|------|-------------|------|
| PIPELINE-MANIFEST.md | Add AD-F entries, update R-4/R-2 status | Between waves (Lead) |
| BACKBONE.md | Stage 4 narrative, pipeline diagram | At stage completion |
| RESEARCH-ACTIVE.md | R-4 application rates, EXT-AD-* entries | During build (Scribe) |
| SOUL-DISCOVERIES.md | Stage 4 determination | At stage completion |
| EXT-RESEARCH-REGISTRY.md | EXT-AXIS-* categories | During research |
| explorations/axis/CLAUDE.md | AD inventory and scores | After each AD built |
| explorations/CLAUDE.md | AD row status | At stage completion |
| provenance/CLAUDE.md | stage-4 status | At stage completion |

---

## 15. SHUTDOWN PROTOCOL

**Per-Agent:** Verify output file exists -> send shutdown_request -> wait for response (2 min timeout) -> update state file.

**Per-Wave:** All agents verified complete -> Lead checks gate (binary) -> PASS: shutdown all wave agents -> FAIL: route to responsible agent -> update state file.

**Session:** All phases complete -> all gates PASS -> git status clean -> shutdown Weaver (LAST) -> commit (Lead only) -> TeamDelete.

**Known issue:** Synthesizer agents sometimes need 3-4 shutdown attempts. Workers sometimes don't call TaskUpdate -- verify via file existence.

---

**END OF AD SKELETON SYNTHESIS**

**Source files consumed:**
1. ad-skeleton-protocols.md (572 lines) -- Team topology, gates, waves, prompts, ownership
2. ad-skeleton-provenance.md (647 lines) -- Files to create/update, incremental provenance, finding IDs
3. ad-skeleton-enrichment.md (605 lines) -- Convention-first, research packages, dark matter, generative loop
4. ad-skeleton-audit.md (808 lines) -- Visual/structural/fresh-eyes protocols, fix-and-verify, weaver
5. ad-skeleton-research.md (654 lines) -- R-4 digestion, R-2 consumption, EXT-AXIS-* commissioning
6. ad-skeleton-identity.md (694 lines) -- Identity traversal, v2 extension, chain continuity, soul discovery
7. ad-skeleton-gaps.md (482 lines) -- Structural, process, knowledge, tool, scale, meta-process gaps
