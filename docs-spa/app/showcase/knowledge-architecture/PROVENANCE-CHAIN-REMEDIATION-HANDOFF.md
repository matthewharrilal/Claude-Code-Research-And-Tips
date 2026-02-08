# Provenance Chain Remediation — Handoff Document

**Date:** 2026-02-08
**For:** Incoming Claude instance picking up this work
**Context:** This document summarizes a multi-session investigation and design effort. 17 research agents produced 15 reports (676KB, 11,237 lines) analyzing the provenance chain's structural integrity and designing a remediation architecture.

---

## 1. PROBLEM STATEMENT

The KortAI Design System uses a 5-stage research pipeline: Research → T1 Synthesis → Stage 1 (Components) → Stage 2 (Density/DD) → Stage 3 (Organization/OD) → Stage 4 (Axis/AD) → Stage 5 (Combination/CD). Each stage produces explorations (self-contained HTML files with inline styles), and the provenance chain documents why each exploration exists, what research fed it, what findings it produced, and how those findings flow to the next stage.

**The problem:** Stage 3 (OD) is complete — 6 explorations built, audited by 17 agents (89 findings), fixed (16/16 fixes), and verified (187 programmatic tests + 12 visual screenshots). But the formal provenance chain for OD was never written. The provenance directory contains 3 stale files (437 lines) that describe OD as "not yet begun" — representing approximately 5% of the information available about OD.

Meanwhile, ~32,800 lines of research-bearing content are scattered across 51 files in checkpoints, knowledge-architecture, execution journals, audit scratchpads, and other directories — none of it reachable through the formal provenance chain. These are not junk files. They contain ~89 unique finding IDs, external research citations, accumulated identity data, audit evidence, and process innovations that are invisible to any agent navigating the formal chain.

Stage 4 (AD) cannot begin with structural integrity until the OD provenance chain is formalized and the scattered research is accounted for.

---

## 2. GOAL

Build the most structurally AND architecturally sound provenance chain possible, such that:

1. **Every piece of research is accounted for** — no finding ID lives only in dark matter
2. **Every traversal path works** — forward (origin → endpoint), backward (artifact → research), cross (sibling comparison within a stage)
3. **The provenance directory alone is sufficient** — a fresh agent reading only provenance can reconstruct what each stage produced and why
4. **The directory structure makes navigational sense** — clean URLs, intuitive file locations, no auxiliary files that haven't been assessed
5. **Prior stage gaps are corrected** — DD and Stage 1 have hidden gaps masked by retroactive formalization; these are also addressed
6. **The formal chain dominates dark matter** — the majority of the system's research knowledge is reachable through the formal chain, not trapped in scattered files
7. **104 verification items all PASS** — the definitive checklist confirms structural soundness across 18 dimensions

This is not just structural soundness (the chain is complete) but **architectural soundness** (the chain is navigable, files are where you'd expect them, research has a logical home, and the directory structure serves both human and agent readers).

---

## 3. APPROACH — WHAT WE LANDED ON AND WHY

### The Core Insight: This Is Distillation, Not Migration

The remediation produces ~3,200-4,500 lines of new formal chain content — roughly 10-14% of the dark matter volume. Most dark matter stays where it is (execution protocols, audit prompts, metacognition analyses serve different purposes). The formal chain **references** operational files rather than absorbing them wholesale.

However, the user explicitly wants **architectural soundness** alongside structural soundness. This means:
- Files that contain research should live in places that make navigational sense
- Research should be findable through direct, logical paths — not scattered across random directories
- The directory structure should serve as navigation, not just storage
- Dark matter that exists purely because of process mismanagement should be cleaned up, not just referenced

### Why This Approach

The investigation revealed 5 structural root causes for the gap:

1. **No enforcement gate for post-build documentation** — The pipeline has a research gate (blocks building until passed) but nothing that blocks the next stage until provenance is written
2. **Multi-session execution breaks the pipeline** — DD's provenance was written in a single retroactive session. OD's lifecycle spanned 5+ sessions (build → audit → fix → retrospective → metacognition) with no natural pause for formalization
3. **MEMORY.md doesn't track provenance** — Records "OD Fix COMPLETE" but never "OD Provenance PENDING"
4. **Inline headers create an illusion of completeness** — Rich 150-line headers make everything look done
5. **DD's provenance process was non-repeatable** — A dedicated documentation session that happened once but was never codified as a required step

The remediation addresses these by:
- Creating the missing provenance documents (closing the gap)
- Cleaning up scattered research (eliminating dark matter)
- Updating infrastructure files (making the chain self-consistent)
- Establishing patterns that prevent recurrence at AD/CD stages

---

## 4. ARCHITECTURE — THE LAYERS

### Layer 1: The Provenance Gap Analysis (DIAGNOSIS — complete)

**What it does:** 15 research reports that diagnose every gap, trace every broken chain, census every scattered file, and define what "perfect" looks like.

**Location:** `docs-spa/app/showcase/knowledge-architecture/_provenance-gap-analysis/`

**How to digest it:**

Read in this order for progressive understanding:

| Priority | Report | What you learn |
|----------|--------|---------------|
| **START HERE** | `07-perfect-state-gap-audit.md` | The 33 gaps and master gap table (read the table at the bottom first, then work backward through the 13 perfection dimensions) |
| 2nd | `10-dark-matter-census.md` | The 51 scattered files and what they contain — the scope of the problem |
| 3rd | `06-root-cause-analysis.md` | HOW we got here — the 5 structural causes and the timeline |
| 4th | `05-traversal-chain-tests.md` | 3 specific findings traced through the chain — see exactly where breaks happen |
| 5th | `11-od-quality-assessment.md` | Was OD built to its full potential? (90% — R-2 gap, RESEARCH-SYNTHESIS gap) |
| 6th | `12-prior-stage-chain-audit.md` | DD and Stage 1 also have hidden gaps — the problem is structural, not OD-specific |

The remaining reports (01-04) provide supporting detail. Reports 13-17 are the architecture design:

| Report | What it designs |
|--------|-----------------|
| `13-target-topology.md` | **The blueprint** — what the clean chain looks like, where every file lives, every finding flow mapped |
| `14-triage-protocol.md` | **The process** — how to handle each of 51 dark matter files (absorb/consolidate/archive/keep/delete) |
| `15-phase-architecture.md` | **The execution plan** — 6 phases, ~90 min, dependency graph, per-gap agent assignments |
| `16-agent-team-topology.md` | **The team structure** — 17 agents across 6 waves, file ownership matrix, crash recovery |
| `17-verification-framework.md` | **The proof** — 104 binary PASS/FAIL items that prove structural soundness when all pass |

**Key tension to be aware of:** Reports 13 and 14 have a philosophical disagreement. Report 13 (Target Topology) says "most dark matter should stay where it is; the chain must reference it." Report 14 (Triage Protocol) leans toward physically relocating files (22 ABSORB, 28 ARCHIVE). The user has expressed preference for architectural soundness (clean navigation, research in logical places) in addition to structural soundness — which leans toward Report 14's approach but with thoughtful reorganization, not just mechanical relocation.

### Layer 2: The Target Topology (BLUEPRINT — designed, not executed)

**What it does:** Defines the exact directory structure, per-stage file manifest, infrastructure updates, dark matter disposition, and finding registry for the clean chain.

**What problem it solves:** Answers "what does done look like?" — the target state that remediation builds toward.

**Key file:** `13-target-topology.md` (1,296 lines, 85KB)

**Critical details:**
- 6 new files to create, 10+ existing files to update
- 4 new OD-F findings proposed (OD-F-009 through OD-F-012) from insights in OD-002/003/004/005 that were never elevated
- New `EXT-RESEARCH-REGISTRY.md` for ~56 external research findings currently orphaned
- Finding ID collisions to resolve: R3-023/R3-036 (fractal identity split), OD-F-005 (builder-log vs checkpoint definitions)

### Layer 3: The Execution Architecture (PLAN — designed, not executed)

**What it does:** Specifies the multi-phase execution plan with agent team structure, dependencies, and coordination.

**What problem it solves:** Answers "how do we get from current state to target state?" — the operational plan.

**Key files:** `15-phase-architecture.md` (execution phases) + `16-agent-team-topology.md` (team structure)

**The 6 phases:**

```
Phase 0: Pre-Flight (Lead, ~5 min)
    → Create state files, directories, establish baseline
Phase 1: Complete Diagnostic (3 agents, ~15 min)
    → Finding registry, reference graph, traversal baseline
Phase 2: Dark Matter Triage (3 agents, ~20 min)
    → Classify and process 51 scattered files
Phase 3: Formal Chain Construction (2 agents, ~25 min)      ─┐
    → Create OD-outbound-findings, HANDOFF-OD-TO-AD,          │ PARALLEL
      OD-SYNTHESIS, organizational-patterns                    │
Phase 4: Prior Stage Corrections (2 agents, ~15 min)        ─┘
    → Fix DD tracking drift, Stage 1 uncitable reference,
      update infrastructure files
Phase 5: Verification (1 agent, ~15 min)
    → Re-run all diagnostics, verify 104 checklist items
Phase 6: Cleanup and Commit (Lead, ~10 min)
    → Archive, navigation updates, git commit
```

**Total: ~90 minutes, 11-17 agents across 6 waves**

### Layer 4: The Verification Framework (PROOF — designed, not executed)

**What it does:** 104 binary PASS/FAIL items across 18 verification dimensions and 11 categories that prove the chain is structurally sound when all pass.

**What problem it solves:** Answers "how do we know it's done?" — the success criteria.

**Key file:** `17-verification-framework.md` (871 lines, 60KB)

**The 11 categories:**
- A: Document Universe Completeness (7 items)
- B: Finding ID Integrity (10 items)
- C: Stage Provenance Completeness (21 items)
- D: Forward Traversability (10 items)
- E: Backward Traversability (10 items)
- F: Cross-Traversability (6 items)
- G: Accumulation Integrity (7 items)
- H: Infrastructure Consistency (16 items)
- I: Information Ratio (4 items)
- J: Reproducibility (5 items)
- K: Process Integrity (8 items)

**Success = 100% pass rate. No partial credit.**

52 items are fully automatable, 43 require agent reading comprehension, 6 require evaluative judgment.

---

## 5. CURRENT STATE

### What exists and is working

- **6 OD exploration HTML files** — Built, audited, fixed, verified. Soul-compliant. These are the product and they're solid.
- **DD provenance chain** — Exists and is mostly complete, but has tracking drift (RESEARCH-ACTIVE claims 10 R-3 findings applied; PIPELINE-MANIFEST claims ~48) and missing operational history.
- **Stage 1 provenance** — Exists and is mostly complete, but the foundational design target is uncitable ("Mental model" with no file path).
- **Inline threading headers** — All 12 explorations (6 DD + 6 OD) have rich headers with research citations, soul compliance, and dependency tables. These are the strongest part of the chain.
- **15 gap analysis reports** — The diagnosis is thorough and evidence-based.
- **5 architecture design documents** — The remediation is fully designed but not executed.

### What is open / not yet done

1. **No formal OD provenance documents exist.** The 4 critical files (OD-outbound-findings.md, HANDOFF-OD-TO-AD.md, OD-SYNTHESIS.md, organizational-patterns.md) have not been created.
2. **51 dark matter files remain unprocessed.** They contain ~89 finding IDs invisible to the formal chain.
3. **Infrastructure files are stale.** PIPELINE-MANIFEST, BACKBONE, SOUL-DISCOVERIES, PATTERN-INDEX all have OD sections that say "TBD" or "PENDING."
4. **Prior stage corrections not applied.** DD tracking drift and Stage 1 uncitable reference remain.
5. **No execution has begun.** The architecture is designed but zero remediation work has been done.
6. **The migrate-vs-reference decision is unresolved.** Report 13 says reference in place; Report 14 says relocate. The user wants architectural soundness (clean navigation) which may require selective reorganization beyond pure referencing.

### What the user cares about (priorities)

1. **Structural soundness** — Every chain link works, every finding is registered, every traversal succeeds
2. **Architectural soundness** — Files live in places that make navigational sense, direct logical paths to research, no auxiliary files cluttering the space
3. **Clean directory structure** — URLs and paths should be intuitive for both humans browsing and agents navigating
4. **No unassessed dark matter** — Every markdown file in the system has been evaluated and given a home or archived
5. **AD readiness** — When this is done, Stage 4 (AD) can begin with full confidence that the chain feeding it is complete
6. **Reproducibility** — Another instance should be able to navigate the provenance chain and understand the entire research history without reading dark matter

---

## 6. HOW TO REFLECT ON THE VERIFICATION CHECKLIST

The 104-item checklist in `17-verification-framework.md` is the definitive success criteria. When evaluating whether the remediation is complete:

1. **Read the 18 verification dimensions first** (Section 1) — understand what each dimension measures and why it matters
2. **Then read the master checklist** (Section 2) — each item is binary PASS/FAIL with specific test procedures
3. **Pay special attention to Category I (Information Ratio)** — this is the metric that proves dark matter has been addressed: formal chain must contain >90% of research knowledge by volume
4. **Category J (Reproducibility) is the ultimate test** — can a fresh agent reconstruct what each stage produced using ONLY the provenance directory?
5. **Appendix B maps every known gap to checklist items** — use this to verify complete coverage

The checklist is not aspirational. It's the minimum standard. 100% pass rate means the chain is structurally sound. Anything less means gaps remain.

---

## 7. KEY FILES AND PATHS

### The Analysis (read-only reference)
```
knowledge-architecture/_provenance-gap-analysis/
├── 01-dd-vs-od-comparison.md          (30KB)  DD vs OD artifact comparison
├── 02-inline-identity-audit.md        (33KB)  All 6 OD inline headers cataloged
├── 03-pipeline-infrastructure-map.md  (34KB)  Pipeline architecture expectations
├── 04-ad-readiness-assessment.md      (30KB)  What breaks if AD starts now
├── 05-traversal-chain-tests.md        (32KB)  3 finding chains traced with break points
├── 06-root-cause-analysis.md          (26KB)  5 structural root causes + timeline
├── 07-perfect-state-gap-audit.md      (74KB)  33 gaps, 13 perfection dimensions ★
├── 10-dark-matter-census.md           (51KB)  51 scattered files cataloged ★
├── 11-od-quality-assessment.md        (27KB)  OD built to 90% of potential
├── 12-prior-stage-chain-audit.md      (30KB)  DD and Stage 1 hidden gaps
├── 13-target-topology.md             (85KB)  Blueprint for clean chain ★
├── 14-triage-protocol.md             (57KB)  Per-file triage decisions
├── 15-phase-architecture.md          (67KB)  6-phase execution plan ★
├── 16-agent-team-topology.md         (71KB)  17-agent team structure ★
└── 17-verification-framework.md      (60KB)  104-item success checklist ★
```
★ = Start here files (most essential for understanding)

### The Provenance Chain (what needs remediation)
```
DESIGN-SYSTEM/provenance/
├── PIPELINE-MANIFEST.md           [STALE — OD sections say "TBD"]
├── SOUL-DISCOVERIES.md            [STALE — no OD determination]
├── original-research/             [OK]
├── stage-1-components/            [MOSTLY OK — uncitable design target]
├── stage-2-density-dd/            [MOSTLY OK — tracking drift]
│   ├── DD-outbound-findings.md    [OK]
│   ├── HANDOFF-DD-TO-OD.md        [OK]
│   └── ...
├── stage-3-organization-od/       [CRITICAL — 3 stale files, 4 missing]
│   ├── CLAUDE.md                  [STALE — says "not begun"]
│   ├── STAGE-HEADER.md            [STALE — says "in progress"]
│   └── OD-RESEARCH-GATE.md        [PRE-BUILD ONLY — no post-build verification]
├── stage-4-axis-ad/               [EMPTY — awaiting OD handoff]
└── stage-5-combination-cd/        [EMPTY — future]
```

### The Explorations (the product — these are solid)
```
explorations/
├── density/          DD-001 through DD-006 (all INCLUDE, audited)
├── organizational/   OD-001 through OD-006 (all INCLUDE, audited, fixed)
├── axis/             (empty — AD pending)
└── combination/      (empty — CD pending)
```

---

## 8. KNOWN DECISIONS STILL NEEDED

1. **Migrate vs Reference:** When dark matter contains research, do we physically move the data into the formal chain, or keep it in place and add references? The user wants architectural soundness (clean navigation), which suggests selective migration for research files and referencing for operational files.

2. **Archive structure:** Where does archived operational data live? Report 14 proposes `_archive/` with 5 subdirectories. This needs confirmation.

3. **EXT-RESEARCH-REGISTRY.md:** Report 13 proposes a new file to register ~56 external research findings. Is this the right architectural choice, or should EXT-* findings be absorbed into existing documents?

4. **New OD-F findings (009-012):** Report 13 proposes 4 new findings from OD-002/003/004/005 insights. These need evaluation — are they genuine findings or observations?

5. **Enforcement gate for future stages:** The root cause analysis identified that no gate prevents the next stage from starting without provenance. Should the remediation also create this enforcement mechanism for AD/CD?

---

## 9. WHAT SUCCESS LOOKS LIKE

When the remediation is complete:

- A fresh agent reads `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` and knows everything AD needs — every constraint, every finding, every pairing, every responsibility — without reading any HTML file or checkpoint document
- Every finding ID in the system (R-*, COMP-F-*, DD-F-*, OD-F-*, EXT-*) has a canonical definition reachable through the formal chain
- The directory structure is navigable — files are where you'd expect them, research is findable through logical paths
- PIPELINE-MANIFEST, BACKBONE, and all infrastructure files accurately reflect the current state of every completed stage
- The dark matter ratio has flipped: formal chain contains the majority of research knowledge
- All 104 verification items PASS
- AD can begin with full confidence

---

*End of handoff document.*
