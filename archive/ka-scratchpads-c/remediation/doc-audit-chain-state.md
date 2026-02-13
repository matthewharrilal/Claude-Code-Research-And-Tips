# Provenance Chain State Audit — Documentation Assessment
**Auditor:** chain-state agent (Task #3)
**Date:** 2026-02-08
**Scope:** 11 files read from OD provenance chain remediation outputs
**Purpose:** Identify what onboarding docs explain well vs. gaps for fresh agents

---

## 1. Executive Summary

The OD provenance chain is **structurally complete** — all 7 files in stage-3-organization-od/ exist and are marked COMPLETE. The chain tells the OD story coherently: what was consumed (186 findings), what was produced (17 OD-F findings, 6 explorations), and what flows forward to AD. The HANDOFF-OD-TO-AD.md is well-structured with an explicit acknowledgment checklist.

However, **three critical onboarding gaps** exist:

1. **The 3-layer provenance architecture is never explained anywhere.** No file describes the distinction between inline threading headers (per-file dependency graph), light sections (lighter metadata for non-critical files), and formal chain documents (curated narrative in provenance/). A fresh agent encounters these layers but has no document explaining the taxonomy.

2. **The accumulated identity concept is partially explained but not defined.** STAGE-HEADER.md references "ACCUMULATED-IDENTITY-v1" as a consumed input (539 lines), and the HANDOFF mentions it implicitly through the transitive chain. But no CLAUDE.md or navigation file explains WHAT accumulated identity is, how it grows per-stage, or where it lives.

3. **The provenance/CLAUDE.md R3-023 chain walkthrough is stale.** It still says "OD not started" and "Status: PENDING" for Stage 3, despite OD being COMPLETE with 17 findings. This is the primary provenance onboarding example and it gives incorrect state information.

---

## 2. Per-File Audit

### File 1: STAGE-HEADER.md (stage-3-organization-od/)
**What it tells a fresh agent:**
- Complete story of Stage 3 (OD): what it explored, consumed, produced
- Detailed quality metrics (scores, soul compliance, audit results)
- 10 key decisions with rationale
- Causal relationships (OD->AD forward chain, DD->OD backward chain)
- Accumulated research weight table (186 total findings, ~57% consumed)
- File inventory for the directory

**3-layer architecture explained?** NO. The inline threading header IS present (Phase 2B, Tier B, Batch 6) but the file doesn't explain what inline threading headers are or how they relate to the formal chain documents in the same directory.

**Accumulated identity explained?** PARTIALLY. Line 124 references "ACCUMULATED-IDENTITY-v1" as a consumed input (539 lines) but doesn't explain what this file is, how it was produced, or why it matters. A fresh agent would see it listed as an input but not understand the concept.

**Gaps:**
- The STAGE-HEADER is 263 lines — dense and comprehensive but lacks a "how to read this file" section
- No pointer to the 3-layer architecture explanation (because none exists)
- Diagnostic questions (section 10) are excellent but buried at the end of the inline header where agents might not read them

---

### File 2: HANDOFF-OD-TO-AD.md (first 150 lines)
**What it tells a fresh agent:**
- Clear purpose: "AD reads this FIRST at Phase 0"
- Explicit acknowledgment checklist (11 items, checkbox format)
- 6-pattern summary table with scores, density pairings, key insights
- Mandatory vs. optional finding consumption (9 MUST, 9 SHOULD)
- The TRANSITIVE CHAIN (org -> density -> axis) with ASCII diagram
- Soul pieces table with AD verification instructions

**3-layer architecture explained?** NO. Not mentioned at all.

**Accumulated identity explained?** IMPLICITLY. The transitive chain (org -> density -> axis) IS accumulated identity in action — each stage's findings compound into the next. But the term "accumulated identity" is not used and the concept is not defined.

**Gaps:**
- This is one of the best-structured files. The acknowledgment checklist is a strong pattern.
- Missing: explicit pointer to where ACCUMULATED-IDENTITY-v1 lives and how AD should update it
- Missing: explanation that AD will need to create ACCUMULATED-IDENTITY-v2 incorporating OD findings

---

### File 3: OD-outbound-findings.md (first 150 lines)
**What it tells a fresh agent:**
- Finding ID convention (4 prefixes: OD-F-NNN, OD-F-MP-NNN, OD-F-PR-NNN, OD-F-FL-NNN, OD-F-AP-NNN)
- OD-F-005 collision disambiguation (Source A canonical, Source B renumbered)
- Detailed per-finding documentation: ID, finding, source, discovery context, status, score, target stages, description, chain impact, validation evidence
- This is the SECOND LINK in the outbound chain (predecessor: DD-F, successor: AD-F)

**3-layer architecture explained?** NO.

**Accumulated identity explained?** NO. But the "chain impact" sections per finding implicitly describe accumulated constraint accumulation.

**Gaps:**
- The collision disambiguation (OD-F-005) is well-documented — good remediation outcome
- The "HOW TO USE THIS FILE" section is clear and actionable
- Could benefit from a "relationship to other chain files" pointer

---

### File 4: OD-SYNTHESIS.md (first 150 lines)
**What it tells a fresh agent:**
- Complete narrative of OD stage: story, consumed/produced tables, 6-pattern analysis, 3-dialect analysis
- Precise consumption tables with finding ID ranges
- Mentions "8 OD-F findings (with a known collision requiring resolution)" — NOTE: this is stale; the remediation resolved the collision and expanded to 17 findings total

**3-layer architecture explained?** NO.

**Accumulated identity explained?** NO. References ACCUMULATED-IDENTITY-v1 as a consumed input but doesn't explain the concept.

**Gaps:**
- **STALE DATA:** Line 20 says "8 OD-F findings" — should be 13 core + 4 categorical = 17 total after remediation
- **STALE DATA:** Line 21 says "with a known collision requiring resolution" — collision IS resolved per OD-outbound-findings.md
- The Produced table (line 76) lists "OD-F-001 through OD-F-008" — should be OD-F-001 through OD-F-013 after remediation
- These stale references could confuse a fresh agent reading this file alongside the corrected OD-outbound-findings.md

---

### File 5: OD-AUDIT-SYNTHESIS.md (first 100 lines)
**What it tells a fresh agent:**
- Executive summary: 89 findings, 16 fixes, 2 false positives, 3 dialects, 0 soul violations
- Audit metadata: 17 agents, 4 phases, ~45 min, 77% lead context usage
- Agent roster with wave execution model diagram
- Finding summary table by severity
- 89-to-17 prioritization methodology

**3-layer architecture explained?** NO.

**Accumulated identity explained?** NO.

**Gaps:**
- This is purely an audit record — its scope is appropriate
- The wave execution model diagram is valuable methodology documentation
- No gaps for its intended purpose (quality gate documentation)

---

### File 6: stage-3-organization-od/CLAUDE.md
**What it tells a fresh agent:**
- Identity and status (COMPLETE)
- Reading order (6 files, numbered)
- File inventory table
- Connection map (consumed from, produced for)
- Key findings for AD (4 critical items)
- Mindset framing (the 5 org-density identities)

**3-layer architecture explained?** NO. This CLAUDE.md IS one of the three layers (navigation/onboarding for the formal chain directory) but doesn't explain that it's part of a 3-layer system.

**Accumulated identity explained?** NO. The term is not used. The concept is partially present in the "KEY FINDINGS FOR AD" section which describes the transitive chain, but the formal accumulated identity mechanism is not explained.

**Gaps:**
- This is a solid navigation file. Reading order is clear, connections are mapped.
- **Missing:** explanation of what the inline threading headers in each file ARE and why they're there
- **Missing:** pointer to ACCUMULATED-IDENTITY-v1 and explanation of how it relates to this directory's contents
- **Missing:** note that OD-SYNTHESIS.md has some stale finding counts (8 vs 17)

---

### File 7: provenance/CLAUDE.md
**What it tells a fresh agent:**
- Identity: "The research chain — where every finding is traced from origin to application"
- Quick navigation table (8 entry points)
- Directory inventory (9 folders/files with status)
- Connection pointers (BACKBONE, patterns, explorations)
- R3-023 chain walkthrough example

**3-layer architecture explained?** NO. This file IS the provenance directory navigator and mentions PIPELINE-MANIFEST.md as the master registry, but does not explain the 3-layer system (inline headers + light sections + formal chain).

**Accumulated identity explained?** PARTIALLY. The R3-023 walkthrough demonstrates accumulation through stages ("One finding, accumulated through every stage") but doesn't name the concept or point to the ACCUMULATED-IDENTITY file.

**Gaps:**
- **STALE DATA (CRITICAL):** The R3-023 walkthrough at line 117-119 says "OD-001 through OD-006 must apply fractal self-similarity / Status: PENDING (OD not started)" — OD is COMPLETE. This is the PRIMARY example a fresh agent sees and it's wrong.
- **STALE DATA:** Line 123 says "Stage 4 (AD): Will consume DD-F-006 through OD / Status: PENDING" — still accurate but the OD context above it is not.
- **Missing:** section explaining the 3-layer provenance architecture
- **Missing:** pointer to EXT-RESEARCH-REGISTRY.md (newly created during remediation)
- The directory inventory (Section 3) IS up to date — shows stage-3 as COMPLETE and stage-4 as PENDING

---

### File 8: stage-4-axis-ad/CLAUDE.md
**What it tells a fresh agent:**
- MANDATORY ENFORCEMENT GATE (5 conditions, explicit STOP instruction)
- Identity and status (PENDING)
- Reading order for when AD begins (3 files)
- Connection summary (consumes OD-F/DD-F/COMP-F/R-4, produces AD-F)
- Mindset framing for axis exploration

**3-layer architecture explained?** NO.

**Accumulated identity explained?** NO. The enforcement gate implicitly enforces accumulated identity (must acknowledge OD findings before proceeding) but doesn't name the concept.

**Gaps:**
- The enforcement gate is well-designed — 5 explicit conditions with a STOP instruction
- **STALE:** Line 19 in inline header says "HANDOFF-OD-TO-AD.md (not yet created)" — it EXISTS now
- **Missing:** the enforcement gate should reference ACCUMULATED-IDENTITY-v1 as a required read
- **Missing:** instruction to create ACCUMULATED-IDENTITY-v2 as part of AD work
- The mindset section mentions DD-F-012 but doesn't mention the full transitive chain (org -> density -> axis) which is the critical OD-to-AD relationship

---

### File 9: DESIGN-SYSTEM/CLAUDE.md
**What it tells a fresh agent:**
- THE KORTAI DESIGN MIND: README.md must be read first
- 9-part README table of contents
- 3 reading modes (First Read, Task Execution, Context Recovery)
- Identity: tokens + patterns + provenance + mind
- Reading matrix ("I want to..." table)
- Directory inventory
- Connection pointers (explorations, checkpoints, components)
- Mindset framing (4 levels of engagement, conflict resolution rules)

**3-layer architecture explained?** NO. Lists "provenance/" in the directory but doesn't explain its internal architecture.

**Accumulated identity explained?** NO.

**Gaps:**
- **STALE:** Line 91 says "Start OD work" pointing to HANDOFF-DD-TO-OD — OD is COMPLETE; this should say "Start AD work" pointing to HANDOFF-OD-TO-AD
- **Missing:** the 3-layer provenance architecture is not mentioned here even though this is the top-level onboarding point
- **Missing:** any mention of the accumulated identity concept
- **Missing:** any mention of the OD provenance chain outputs (OD-F findings, organizational patterns)
- The patterns/ status says "density complete, org pending" — org patterns ARE now complete (organizational-patterns.md exists with 6 validated patterns)
- Good structure overall — the "I want to..." table is a strong navigation pattern

---

### File 10: EXT-RESEARCH-REGISTRY.md (first 80 lines)
**What it tells a fresh agent:**
- Total EXT findings: 47 unique (55 citations with shared findings counted once)
- 6 categories with per-category application rates (all 100%)
- Cross-reference table showing which OD consumed which EXT categories
- Per-finding documentation: ID, name, description, source URL, applied in, status, soul test result

**3-layer architecture explained?** NO (not its purpose).

**Accumulated identity explained?** NO (not its purpose).

**Gaps:**
- This is a well-structured registry — serves its purpose completely
- The soul test column ("PASSED — Content-level pattern, soul-neutral") adds useful verification data
- OD-002 shows 0 EXT research — this aligns with the synthesis data (OD-002 relied on narrative structure alone)

---

### File 11: organizational-patterns.md (first 80 lines)
**What it tells a fresh agent:**
- 6 organizational patterns with provenance notice
- Per-pattern documentation: status, when to use, research provenance (finding IDs), validated by, density pairing, soul pieces verified, key insight
- Explicit OD-F-005 meta-insight ("Organization IS Density")

**3-layer architecture explained?** NO (not its purpose).

**Accumulated identity explained?** IMPLICITLY. The research provenance per pattern lists R-1, R-3, and EXT findings — showing how research accumulates into validated patterns.

**Gaps:**
- Excellent pattern documentation — comprehensive, actionable, well-cited
- The NARRATIVE pattern (OD-002) says "no unique OD-F; validated DD-F-002" — accurate but worth noting that OD-F-009 through OD-F-013 were renumbered from builder-log OD-002 findings; these are the narrative findings
- The CREATIVE/EMERGENT pattern lists OD-F-005 through OD-F-008 — matches canonical Source A after collision resolution

---

## 3. Cross-Cutting Gap Analysis

### GAP A: 3-Layer Provenance Architecture (CRITICAL — affects all onboarding)

**What exists but is never explained:**
1. **Inline threading headers** (Phase 2B): Per-file dependency graph in HTML/CSS/JSX comments. Present in every source file (490 files total). Contains: WHY THIS EXISTS, STATUS, BUILT ON, CONSUMED BY.
2. **Light sections** (Phase 2D): Lighter metadata for files that don't need full inline headers. Present in 244 files.
3. **Formal chain documents** (provenance/): Curated narrative chain — STAGE-HEADER, outbound-findings, SYNTHESIS, AUDIT-SYNTHESIS, HANDOFF, RESEARCH-GATE.

**Where this explanation should live:** provenance/CLAUDE.md (Section 1 or new Section 1.5) AND DESIGN-SYSTEM/CLAUDE.md (in the provenance description).

**Why it matters:** A fresh agent entering any file sees inline headers and has no context for what they are or how they relate to the formal chain. The taxonomy is implicit — no document makes it explicit.

### GAP B: Accumulated Identity Concept (HIGH — affects AD work)

**What exists but is not defined:**
- ACCUMULATED-IDENTITY-v1.md is referenced as a consumed input (539 lines) in STAGE-HEADER.md and OD-SYNTHESIS.md
- The concept is demonstrated in practice (HANDOFF transitive chain, STAGE-HEADER causal relationships)
- But NO document defines: what accumulated identity IS, where the file lives, how it grows per-stage, or that AD must create v2

**Where this explanation should live:** provenance/CLAUDE.md (new subsection) AND stage-4-axis-ad/CLAUDE.md enforcement gate (add as required read).

**Why it matters:** The accumulated identity file is the mechanism by which findings compound across stages. Without understanding this, an AD agent might read the HANDOFF but miss the accumulated identity file entirely.

### GAP C: Stale Data in 4 Files (MEDIUM — causes confusion)

| File | Stale Content | Correct State |
|------|---------------|---------------|
| provenance/CLAUDE.md | R3-023 walkthrough says "OD not started" | OD is COMPLETE (17 findings, 6 explorations) |
| OD-SYNTHESIS.md | Says "8 OD-F findings" | Should be 13 core + 4 categorical = 17 total |
| stage-4-axis-ad/CLAUDE.md inline header | Says "HANDOFF-OD-TO-AD.md (not yet created)" | HANDOFF exists and is COMPLETE |
| DESIGN-SYSTEM/CLAUDE.md | Says "Start OD work" and "org pending" | OD COMPLETE; should say "Start AD work"; org patterns exist |

### GAP D: EXT-RESEARCH-REGISTRY Not Referenced (LOW)

The newly created EXT-RESEARCH-REGISTRY.md is listed in STAGE-HEADER.md's produced table and in stage-3-organization-od/CLAUDE.md's produced section, but provenance/CLAUDE.md's quick navigation (Section 2) includes it. This is adequate coverage.

---

## 4. What Onboarding Docs Should Explain

Based on this audit, an onboarding document for the provenance chain should cover:

### Must Explain (Gaps A, B, C)

1. **The 3-layer provenance architecture:**
   - Layer 1: Inline threading headers (per-file, in source comments, 490 files)
   - Layer 2: Light sections (lighter metadata, 244 files)
   - Layer 3: Formal chain documents (provenance/, curated narrative)
   - How they relate: inline headers = distributed dependency graph; formal chain = authoritative narrative
   - When to use each: inline headers for any source file; light sections for non-critical files; formal chain for stage-level provenance

2. **The accumulated identity concept:**
   - What it is: a file that grows per-stage, containing ALL prior soul pieces, findings, constraints, and decisions
   - Where it lives: ACCUMULATED-IDENTITY-v1.md (539 lines, consumed by OD)
   - How it grows: each stage reads the prior version and produces a new version incorporating its discoveries
   - Why it matters: enables the transitive chain (org -> density -> axis) and compound learning

3. **The stage lifecycle:**
   - Stage structure: STAGE-HEADER + outbound-findings + SYNTHESIS + AUDIT-SYNTHESIS + HANDOFF + RESEARCH-GATE
   - Entry gate: HANDOFF from prior stage (mandatory first-read)
   - Exit gate: HANDOFF to next stage (produced after completion)
   - Quality gate: AUDIT-SYNTHESIS (multi-agent adversarial audit record)

4. **The finding ID system:**
   - Core pipeline findings: COMP-F-###, DD-F-###, OD-F-###, AD-F-### (future)
   - Category prefixes: -MP- (meta-pattern), -PR- (process), -FL- (forward-looking), -AP- (anti-pattern)
   - Research findings: R1-### through R5-### (337 total)
   - External research: EXT-CATEGORY-### (47 unique)
   - Collision resolution protocol: Source Priority (CHECKPOINT > builder-log)

### Should Explain (Context)

5. **Current system state:**
   - Stages 1-3 COMPLETE; Stage 4 (AD) PENDING
   - 337 research findings, ~106 consumed by OD (~57%)
   - 5 soul pieces (visual only, no cognitive soul discovered)
   - R-2 Creative Layouts at 0% consumption (AD WARNING)
   - 3 quality dialects in OD (Polished, Functional, Editorial)

6. **Key files to read first (priority order):**
   - DESIGN-SYSTEM/README.md (THE KORTAI DESIGN MIND)
   - DESIGN-SYSTEM/BACKBONE.md (master narrative)
   - provenance/PIPELINE-MANIFEST.md (master finding registry)
   - provenance/SOUL-DISCOVERIES.md (5 non-negotiable constraints)
   - The HANDOFF for the current stage

---

## 5. Specific Update Recommendations

### Priority 1: Fix stale data (4 files)

| File | Action |
|------|--------|
| provenance/CLAUDE.md | Update R3-023 walkthrough Stage 3 to "Status: COMPLETE — DD-F-006 applied in ALL 6 ODs, verified in fractal audit" |
| OD-SYNTHESIS.md | Update line 20 from "8 OD-F findings" to "17 OD-F findings (13 core + 4 categorical)" and remove "collision requiring resolution" |
| stage-4-axis-ad/CLAUDE.md | Update inline header line 19 to remove "(not yet created)" |
| DESIGN-SYSTEM/CLAUDE.md | Change "Start OD work" to "Start AD work" pointing to HANDOFF-OD-TO-AD; update patterns/ status from "org pending" to "org complete" |

### Priority 2: Add 3-layer architecture explanation

Add to provenance/CLAUDE.md a new section between current Sections 1 and 2:

```
## 1.5 THE THREE LAYERS OF PROVENANCE

This system tracks provenance at three levels:

1. INLINE THREADING HEADERS (490 files)
   Per-file dependency graph embedded in source comments.
   Contains: WHY THIS EXISTS, STATUS, BUILT ON, CONSUMED BY.
   Created in Phase 2B. Every source file carries this.

2. LIGHT SECTIONS (244 files)
   Lighter metadata for files that don't need full inline headers.
   Created in Phase 2D. Points to parent phase and T1 synthesis.

3. FORMAL CHAIN DOCUMENTS (this directory)
   Curated narrative: STAGE-HEADER, outbound-findings, SYNTHESIS,
   AUDIT-SYNTHESIS, HANDOFF, RESEARCH-GATE per stage.
   This is where the AUTHORITATIVE story lives.

Inline headers are the DISTRIBUTED graph.
Formal chain documents are the AUTHORITATIVE narrative.
Light sections bridge the two for peripheral files.
```

### Priority 3: Add accumulated identity explanation

Add to provenance/CLAUDE.md and reference from stage-4-axis-ad/CLAUDE.md enforcement gate:

```
## ACCUMULATED IDENTITY

Each stage inherits an ACCUMULATED-IDENTITY file from its predecessor.
This file contains ALL prior soul pieces, findings, constraints, and
decisions — everything the new stage must honor.

- ACCUMULATED-IDENTITY-v1.md (539 lines) was consumed by OD (Stage 3)
- AD (Stage 4) must consume v1 AND produce v2 incorporating OD findings
- The identity file is how the transitive chain (org -> density -> axis)
  is formally transmitted between stages
```

---

## 6. Quality Assessment

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Structural completeness** | 9/10 | All 7 stage-3 files exist and are COMPLETE |
| **Narrative coherence** | 8/10 | Story flows well from STAGE-HEADER through HANDOFF |
| **Fresh agent onboardability** | 6/10 | Missing 3-layer explanation and accumulated identity definition |
| **Data accuracy** | 7/10 | 4 files have stale data from pre-remediation state |
| **AD readiness** | 7/10 | HANDOFF is strong but accumulated identity gap could cause AD to miss key input |
| **Cross-referencing** | 8/10 | Finding IDs are well-cited; collision resolved; chain impact documented |

**Overall:** The provenance chain CONTENT is excellent. The GAP is in meta-documentation — explaining the system that contains the content. A fresh agent can follow the chain if directed to specific files, but cannot independently discover how the three layers work together or what accumulated identity means.
