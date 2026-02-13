# Provenance Chain Remediation — Comprehension Prompt

**Purpose:** Give this entire document to a Claude instance. It will bring the instance to full understanding of the provenance chain problem, its diagnosis, and proposed remediation architecture. After completing this prompt, the instance will be ready to receive `PROVENANCE-REMEDIATION-PLAN-PROMPT.md` to create the execution plan.

**Context:** This problem space was investigated by 17 research agents producing 15 reports (11,237 lines, 676KB). A subsequent deep-dive team (5 agents) analyzed those reports and produced 885 lines of cross-referenced analysis. You are receiving BOTH layers — the pre-digested analysis AND the critical raw reports — to build a complete mental model without burning your entire context window.

---

## STRATEGY: LAYERED ABSORPTION

You will read files in 5 layers. Each layer deepens understanding. Do NOT skip layers or read out of order.

- **Layer 1** (885 lines): Pre-digested analysis from 5 specialist agents — builds the complete mental model
- **Layer 2** (298 lines): The handoff document — the bridge between analysis and execution
- **Layer 3** (~4,574 lines): The 4 critical raw reports needed for plan creation
- **Layer 4** (~1,200 lines): The actual provenance chain files — ground truth
- **Layer 5**: Demonstration of understanding — you prove absorption before proceeding

**Total reading: ~7,000 lines.** This leaves ample context for the plan creation prompt that follows.

---

## LAYER 1: THE DEEP-DIVE ANALYSIS (Read First)

These 5 files were produced by specialist agents that each read 3-11 source files and wrote genuine analytical reflection — not summaries but what SHIFTED in their mental models. Read them in order.

**Base path:** `docs-spa/app/showcase/knowledge-architecture/_provenance-deep-dive/`

### 1. `01-core-gaps.md` (129 lines)
**Covers:** Reports 07 (Perfect State Gap Audit — 33 gaps across 13 dimensions), 10 (Dark Matter Census — 51 files, 32,800 lines, ~89 finding IDs), 06 (Root Cause Analysis — 5 structural root causes, timeline reconstruction)

**What to absorb:**
- The gap is not absence of information — it is presence of WRONG information (STAGE-HEADER says "OD work has not begun")
- Dark matter is 3x the formal chain (60% of content)
- The deepest root cause: binary rules achieve 100% compliance, judgment rules achieve ~0% — provenance synthesis is a judgment rule
- DD's provenance was written in a one-time organic session that was never codified as a required step
- The checkpoint recorded what needed doing but had no power to enforce it

### 2. `02-evidence-chain.md` (218 lines)
**Covers:** Reports 05 (Traversal Chain Tests — 3 hop-by-hop traces), 11 (OD Quality Assessment — ~90%), 12 (Prior Stage Chain Audit — the inversion pattern)

**What to absorb:**
- All 3 traversal chains break at the SAME point (inline headers → formal provenance boundary) — this is a cliff, not a slope
- R3-023/R3-036 split identity: same finding has two IDs pointing to DIFFERENT things in PIPELINE-MANIFEST — semantic corruption
- OD was built at ~90% quality. The 10% gap: R-2 (27 findings, 0% consumed), RESEARCH-SYNTHESIS.md never cited, OD-002 got no external research
- Bespoke research (EXT-*) achieved 85% application vs pre-existing research (R-1) at 71% — in-context research outperforms pre-existing
- The gap pattern is INVERTED: Stages 1-2 (least process infrastructure) have most complete chains because they were retroactively formalized. Stage 3/OD (most infrastructure) has largest gaps because formalization was interrupted
- "COMPLETE" for Stages 1-2 means paperwork exists, NOT operational record preserved. DD left ZERO operational infrastructure

### 3. `03-architecture.md` (174 lines)
**Covers:** Reports 13 (Target Topology — the blueprint), 15 (Phase Architecture — 6 phases, ~90 min), 16 (Agent Team Topology — 17 agents, 5 waves), 17 (Verification Framework — 104 items)

**What to absorb:**
- This is DISTILLATION not migration: 10-14% extraction yield (3,200-4,500 lines from 32,800)
- 6 new files + 10 updates needed. Strict creation order (outbound-findings first, HANDOFF last)
- Census-extraction layer is a novel architecture: 5 agents extract structured data so builders never read raw dark matter
- Single graph builder is the serialization bottleneck (single point of failure)
- Proven-zero-contention file ownership (every file has exactly one writer)
- Report 15 allocates 15 min for verification; Report 17 designs 3.5-4.5 hours — these are implicitly two different activities but the relationship is never stated
- Census-b reads 29 files (nearly 3x the 10-file sweet spot) — flagged risk
- Chain-a (OD-outbound-findings + HANDOFF) is the critical path risk — recovery protocol exists but recovery agent must produce consistent HANDOFF without having written the outbound-findings

### 4. `04-context-and-chain.md` (161 lines)
**Covers:** Reports 01-04, 14 (supporting reports) + actual chain files (PIPELINE-MANIFEST, BACKBONE, HANDOFF-DD-TO-OD, DD-outbound-findings, STAGE-HEADER, OD-006 header)

**What to absorb:**
- DD's provenance was ITSELF retroactive formalization — the "gold standard" was not organic
- Inline headers are NODE descriptions (what a file IS); provenance docs are EDGE descriptions (how nodes relate) — neither substitutes for the other
- The pipeline accumulation model creates fragility at scale — Stage 5 must consume ALL prior findings with no compression mechanism
- 7 specific mistakes an AD agent could make without the handoff (most dangerous: missing the organizational → density → axis transitive chain)
- STAGE-HEADER line 31 "OD work has not begun" is the most dangerous lie — first thing agents read, categorically false
- The DD handoff has 7 structural elements that make it effective: acknowledgment protocol, pairing table, MUST/SHOULD hierarchy, quality bar with numbers, file creation checklist, iteration lessons, acknowledgment checklist
- OD-006's inline header (150 lines) contains OD-F-005 discovery, all 18 R-1 mappings, 9 creative techniques, cross-OD lessons — all trapped in an HTML comment

### 5. `05-synthesis-reflection.md` (203 lines)
**The synthesis.** Read this LAST in Layer 1. It integrates all 4 reader outputs.

**Key conclusions to internalize:**
- This is a TRUST problem, not a documentation problem. The chain lies to its readers.
- The user wants to open the provenance directory and have it FEEL complete — like reading the DD chain feels today
- The hardest part is cross-OD synthesis (nobody has looked at all 6 explorations together)
- 7 ranked failure modes (most catastrophic: introducing NEW false claims)
- The metacognition paradox: the handoff repeats patterns the metacognition analysis identified as failures
- What all 4 readers agree on: break is systemic, raw material exists, inline headers are strongest, STAGE-HEADER is most dangerous, Stages 1-2 aren't actually complete
- What no reader caught: temporal sequencing of remediation's own dark matter, verification time gap, OD-002 as systemic signal, user fatigue with meta-analysis

**After reading all 5 deep-dive files:** You should have a complete mental model of the problem, its causes, the proposed solution architecture, the ground truth, and the key tensions. Do NOT proceed until you can answer:
1. How many gaps? (33, across 13 perfection dimensions)
2. How many dark matter files? (51, ~32,800 lines, ~89 finding IDs)
3. What is the root cause? (No enforcement gate for post-build provenance — binary vs judgment compliance)
4. Where do all 3 traversal chains break? (The cliff at formal provenance boundary)
5. What is the inversion pattern? (Most process infrastructure = least formal completeness)

---

## LAYER 2: THE HANDOFF DOCUMENT

Read in full: `docs-spa/app/showcase/knowledge-architecture/PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md` (298 lines)

This is the document written for a fresh instance to understand the remediation task. It covers:
- What the provenance chain is and why it matters
- The 4-layer investigation architecture (Diagnosis → Blueprint → Execution Plan → Verification)
- Current state of the 3 stale OD provenance files
- The 5 known decisions still needed
- Success criteria (structural + architectural soundness)

**Critical reading notes:**
- The handoff was written 1 day after the metacognition analysis but exhibits some patterns the metacognition identified as failures (5 unresolved judgment decisions, meta-to-output ratio)
- The 5 open decisions should be absorbed but you'll make binary choices about them in the plan
- The handoff references the 15 raw reports by number — you've already absorbed these through the deep-dive files

---

## LAYER 3: THE 4 CRITICAL RAW REPORTS

These are the reports you need in their raw form for plan creation — the deep-dive analysis captures the insights, but the plan needs the SPECIFIC data (gap tables, file manifests, agent specifications, verification items).

**Base path:** `docs-spa/app/showcase/knowledge-architecture/_provenance-gap-analysis/`

### Report 07: `07-perfect-state-gap-audit.md` (960 lines)
**Why raw:** Contains the MASTER GAP TABLE with all 33 gaps, their severities, raw material locations, and resolution actions. The plan must address each one individually.
**Read strategy:** Start with the gap table at the bottom, then read the 13 perfection dimensions. Every GAP-NNN needs a closure plan.

### Report 13: `13-target-topology.md` (1,296 lines)
**Why raw:** Contains the exact file manifest (6 new files, 10 updates), the dark matter disposition map, the finding flow diagram, and the dependency ordering. This is the BLUEPRINT.
**Read strategy:** Focus on Sections 3 (file manifest), 4 (dark matter disposition), 5 (dependency ordering), and 6 (information flow diagram).

### Report 15: `15-phase-architecture.md` (1,447 lines)
**Why raw:** Contains the 6-phase execution plan with specific agent assignments, timing, dependency graph, and risk registry. This is the EXECUTION ARCHITECTURE.
**Read strategy:** Focus on the phase-by-phase breakdown, the critical path analysis, and Appendix C (what cannot be automated).

### Report 17: `17-verification-framework.md` (871 lines)
**Why raw:** Contains all 104 binary PASS/FAIL items across 18 dimensions. Every item must map to a gap closure in the plan. This is the SUCCESS CRITERIA.
**Read strategy:** Read the full item list. Note the execution phasing (which items depend on which). Note the 6 judgment-based items that need binary proxies.

---

## LAYER 4: THE ACTUAL CHAIN FILES (Ground Truth)

Read these files to see the REALITY — not reports about reality, but the actual provenance chain in its current state.

**These are what must MATCH the plan's target state.**

### The Gold Standard (DD) — Templates for OD equivalents:

1. `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` (339 lines, full)
   → Note every section: acknowledgment protocol, pairing table, MUST/SHOULD hierarchy, quality bar, iteration lessons, file checklist. OD's HANDOFF-OD-TO-AD must match this structural rigor.

2. `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` (221 lines, full)
   → Note the per-finding format: ID, Finding, Source, Score, For Which Stage, Chain Impact. Note the consumption matrix. OD's version must follow this format.

### The Stale Files (OD) — What must be replaced:

3. `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` (178 lines, full)
   → See how every claim is false. "OD work has not begun." Future tense throughout. This must become past tense with actual metrics.

4. `DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md` (280 lines, full)
   → Note the TBD sections at Stage 3. Note the DD section (complete) for format reference. Note the R3-023/R3-036 discrepancy.

5. `DESIGN-SYSTEM/BACKBONE.md` — Read only Section 4 (OD), approximately lines 220-260
   → Note the future tense. Compare to Section 3 (DD) which has past-tense completion narrative with metrics.

### The Trapped Identity (what should be in formal chain but isn't):

6. First 150 lines of `explorations/organizational/OD-006-creative.html`
   → See 150 lines of identity trapped in an HTML comment. Contains OD-F-005 definition, all 18 R-1 mappings, 9 creative techniques, cross-OD lessons. This is what provenance distillation must extract.

---

## LAYER 5: DEMONSTRATE UNDERSTANDING

After reading everything, write a structured reflection. This is NOT optional — it proves absorption.

### 5A: The Problem in One Paragraph
Write the problem as you understand it. Not the symptoms — the structural mechanism that caused them. Reference specific findings by ID (GAP-NNN, OD-F-NNN, R3-NNN).

### 5B: The 5 Key Tensions
For each tension, write 2-3 sentences explaining what's at stake:
1. Structural soundness vs architectural soundness
2. Distillation vs migration
3. Binary enforcement vs judgment processes
4. Retroactive formalization (DD) vs interrupted formalization (OD)
5. Meta-infrastructure volume vs product output

### 5C: The 5 Open Decisions — Your Binary Answers
The handoff document contains 5 unresolved decisions. For each, commit to a binary answer:

1. **Migrate vs Reference for dark matter files** → Choose one and state why
2. **Archive directory structure** → Choose flat `_archive/` or category-based and state why
3. **EXT-RESEARCH-REGISTRY.md** → Separate new file or section within OD-outbound-findings? State why
4. **New OD-F findings (009-012)** → Formalize from checkpoint data or leave as observations? State why
5. **Post-build enforcement gate** → Binary gate in next stage's CLAUDE.md or judgment recommendation? State why

### 5D: What "Done" Feels Like
In 3-5 sentences, describe the EXPERIENCE of a fresh agent opening the provenance directory after remediation. Not the checklist — the gestalt.

### 5E: The Three Biggest Risks
List the 3 most likely failure modes and how the plan should prevent them.

---

## COMPACTION SURVIVAL

If context is compacted during this process:

1. **Check what Layer you completed.** Read any reflection you've already written.
2. **The deep-dive files persist on disk.** Re-read `_provenance-deep-dive/05-synthesis-reflection.md` first — it's the 203-line synthesis of everything.
3. **Your reflection persists.** If you wrote 5A-5E before compaction, you don't need to re-read everything. Read your own reflection + the synthesis.
4. **The raw reports persist.** If you need to re-read specific data, go to the raw reports (Layer 3).

**Key file for recovery:** `_provenance-deep-dive/05-synthesis-reflection.md` — read this FIRST after any compaction.

---

## WHAT HAPPENS NEXT

After you complete Layer 5 and demonstrate understanding, you will receive `PROVENANCE-REMEDIATION-PLAN-PROMPT.md`. That prompt will ask you to:

1. Deploy 6 sub-agents for ground truth research (finding registry, reference graph, dark matter audit, DD templates, verification decomposition, architectural assessment)
2. Create gap-by-gap closure plans for all 33 gaps
3. Design the agent team structure with binary rules, exclusive file ownership, and wave execution
4. Assemble a comprehensive execution plan document

**Your Layer 5 reflection is the foundation for that plan.** The decisions you make in 5C become the binary constraints that agents follow. The risks you identify in 5E become the mitigations you design. The gestalt you describe in 5D becomes the success criterion you verify against.

---

## RULES

- Do NOT skip files or skim. Read every file specified in Layers 1-4.
- Do NOT propose solutions until Layer 5 is complete and acknowledged.
- Do NOT say "I understand" without demonstrating understanding through specific references to specific findings, specific gap numbers, specific file paths.
- Do NOT flatten the nuance. This system has 337 research findings, 5 soul pieces, 18 DD-F findings, 8+ OD-F findings, ~56 EXT-* findings, and 5 stages. If your mental model doesn't hold that complexity, you haven't absorbed enough.
- If you hit context limits before finishing all reads, say so. Partial absorption is worse than acknowledged incompleteness.
- The deep-dive files (Layer 1) are your EFFICIENCY lever. They compress 11,237 lines of raw reports into 885 lines of genuine analytical insight. Trust them for mental model building. Use the raw reports (Layer 3) for specific data you'll need during plan creation.
