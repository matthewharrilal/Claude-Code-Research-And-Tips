<!--
INLINE THREADING HEADER -- Phase 2B (extended)
File: docs-spa/app/showcase/knowledge-architecture/OD-REENRICHMENT-SPECIFICATION.md
Tier: A | Batch: N/A | Generated: 2026-02-08

1. WHY THIS EXISTS
Comprehensive specification for re-enriching all 6 OD explorations using gate-based
team topology. This is the definitive reference document from which an execution plan
will be created. It captures strategic rationale, team topology, provenance strategy,
per-exploration details, hard rules, and a 205-item success criteria checklist.

3. STATUS
ACTIVE -- SPECIFICATION (not yet executed)

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| HANDOFF-OD-TO-AD.md                     | Quality bar, mistakes, transitive chain|
| OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md| Team lessons, protocol evolution      |
| OD-FIX-EXECUTION-PROMPT.md             | Fix execution team architecture        |
| WORKFLOW-METACOGNITION-ANALYSIS.md      | Binary rule principle, compression     |
| ACCUMULATED-IDENTITY-v1.md             | 539-line identity used as research driver|
| OD-outbound-findings.md                | 17 OD-F findings to feed back          |
| OD-SYNTHESIS.md                         | Cross-OD analysis, 3-dialect gap       |
| OD-AUDIT-SYNTHESIS.md                   | 89 findings, per-OD quality ranking    |
| EXT-RESEARCH-REGISTRY.md               | 47 external findings, consumption rates|
| organizational-patterns.md             | 6 validated patterns with density pairs|
| OD-GRANULAR-AUDIT-RESULTS.md           | 688-line full audit report             |

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| Re-enrichment execution plan            | Source specification for plan creation |
| Lead agent (re-enrichment)              | Reference during orchestration         |
| Verification agent                      | Success criteria checklist             |

END INLINE THREADING HEADER
-->

# OD RE-ENRICHMENT SPECIFICATION
## Comprehensive Reference for Gate-Based OD Re-Execution

**Version:** 1.0
**Date:** 2026-02-08
**Purpose:** Definitive specification for re-enriching all 6 OD (Organizational Density) explorations using a gate-based team topology that prevents the provenance failures of the original build. This document is the single source of truth from which an execution plan will be created.
**Scope:** OD re-enrichment only. Does not cover AD phase, migration, or combination stages.

---

## TABLE OF CONTENTS

1. [Executive Summary](#section-1-executive-summary)
2. [Strategic Rationale](#section-2-strategic-rationale)
3. [Lessons from Prior Phases](#section-3-lessons-from-prior-phases)
4. [Gates vs Guidelines](#section-4-gates-vs-guidelines)
5. [Team Topology](#section-5-team-topology)
6. [Wave Structure](#section-6-wave-structure)
7. [Provenance Layer Strategy](#section-7-provenance-layer-strategy)
8. [Per-Exploration Re-Enrichment](#section-8-per-exploration-re-enrichment)
9. [Hard Rules](#section-9-hard-rules)
10. [Success Criteria Checklist](#section-10-success-criteria-checklist)
11. [Existing Artifacts Inventory](#section-11-existing-artifacts-inventory)
12. [Scope and Boundaries](#section-12-scope-and-boundaries)

---

## SECTION 1: EXECUTIVE SUMMARY

### What This Document Is

This is the comprehensive specification for re-enriching all 6 OD explorations. It synthesizes strategic rationale, team topology design, provenance layer architecture, per-exploration enrichment details, battle-tested hard rules from 3 prior agent teams, and a 205-item binary success criteria checklist. A fresh Claude instance reading this document alone should be able to create a complete execution plan.

### Why Re-Enrichment

The original OD build produced 6 explorations with 0 soul violations across 3,479+ elements -- the build quality was solid. But it also produced:

- A **3-dialect quality gap** (Polished, Functional, Editorial) -- a temporal artifact of the build sequence, not a design decision
- **Uneven research enrichment** (OD-001 received 13 external resources scoring ~35/40; OD-002 received 0 scoring ~33/40)
- **51+ dark matter files** (~32,800 lines) containing valuable findings outside the formal provenance chain
- **A feedback loop gap** -- 17 OD-F findings were extracted FROM explorations but never fed BACK into them
- **4 of 6 explorations never received iteration** -- they were one-shot builds

Re-enrichment feeds the accumulated output (findings, research, conventions, identity) back into the explorations to produce uniformly high-quality artifacts that reflect everything learned across the entire pipeline.

### What It Produces

- 6 re-enriched OD HTML explorations, all scoring >=32/40 (target: >=34 average, crown jewel OD-006 >=36)
- Unified visual dialect (closing the 3-dialect gap)
- Incremental provenance (Mode C) with zero new dark matter
- Updated formal chain documents (synthesis, handoff, findings, research registry)
- Before/after comparison documenting the quality delta
- Validated gate-based team topology methodology for deployment to AD

### How to Use This Document

1. **Planning:** Read Sections 1-6 to understand the strategic rationale and team design
2. **Execution:** Use Sections 5-9 to build agent prompts and wave sequences
3. **Verification:** Use Section 10 (205-item checklist) as the pass/fail framework
4. **Reference:** Use Section 11 for concrete file paths and line counts

This is a SPECIFICATION, not an execution plan. It defines WHAT must happen and WHY. The execution plan (agent prompts, wave-by-wave scheduling, prompt text) will be created from this specification in a separate instance.

---

## SECTION 2: STRATEGIC RATIONALE

### 2.1 Why Re-Enrich OD Instead of Moving to AD

The pipeline has evolved through three provenance modes, each a response to failures in the previous one:

**Mode A (DD Phase -- Build First, Formalize Later):**
- DD explorations were built first, then provenance was written in a single retroactive documentation session
- Result: DD provenance exists and is "mostly complete" but has tracking drift (RESEARCH-ACTIVE claims 10 R-3 findings applied; PIPELINE-MANIFEST claims ~48) and missing operational history
- The retroactive session worked FOR DD but the process was non-repeatable

**Mode B (OD Phase -- Build + Document, Remediate Gaps):**
- OD attempted to build AND document simultaneously, but under context pressure the secondary missions (documentation, threading, provenance updates) were triaged away
- Builder agents were given 7 responsibilities simultaneously: build creatively AND document provenance AND update inline headers AND check soul compliance AND commission research AND iterate AND score
- Under context constraint, the agent rationally kept the primary mission (build) and dropped secondary missions (document, thread, update)
- This is not a bug -- it is rational agent behavior under constraint
- Result: The build was solid (6 explorations, 0 soul violations) but the provenance chain was never formally written
- Required MASSIVE retroactive remediation: 18 agents, 5 waves, 104 verification items, 27 files modified, 5,423 insertions, 336 deletions -- 3 months after the build

**Mode C (Target -- Write Provenance Incrementally As You Build):**
- The HANDOFF-OD-TO-AD.md explicitly states: "Create provenance INCREMENTALLY during build. DO NOT defer to post-build session."
- "If you can't cite the provenance for a decision, stop and write it down"
- Discover something during build --> write the finding entry IMMEDIATELY
- Apply a research finding --> update RESEARCH-ACTIVE.md IMMEDIATELY
- Mode C prevents the OD failure mode where deferred provenance loses discovery context and forces reconstruction from memory

**The Retroactive C Proposal:**
Re-enrichment applies Mode C principles RETROACTIVELY to OD before moving to AD. Instead of just patching the provenance chain (which the remediation did), it re-enriches the actual exploration HTML files to match the quality that Mode C would have produced had it been available during the original build. This closes the quality loop before adding more layers on top.

### 2.2 The 3-Dialect Quality Gap

OD produced three visually distinct quality dialects -- a temporal artifact from building without established conventions:

| Dialect | Explorations | Characteristics | Why |
|---------|-------------|-----------------|-----|
| A: Polished | OD-001, OD-002 | Dark code blocks, full-bleed headers | Built FIRST, got 2 iterations each, before conventions existed |
| B: Functional | OD-003, OD-004, OD-005 | Lighter code blocks, thin borders | Built AFTER conventions solidified, but one-shot (no iteration) |
| C: Editorial | OD-006 | No code blocks, heaviest typography | Crown jewel synthesis page, deliberately different |

"Iteration and convention maturity pull quality in opposite directions unless both are present simultaneously." OD-001 had iteration without mature conventions. OD-005 had mature conventions without iteration. Neither achieved what both together would produce. Re-enrichment applies BOTH iteration AND mature conventions to ALL 6 explorations uniformly.

### 2.3 Uneven Research Enrichment

Research enrichment across OD explorations was dramatically uneven:

| Exploration | External Resources | Score | Iteration |
|-------------|-------------------|-------|-----------|
| OD-001 | 13 (EXT-CONV) | ~35/40 | 2 passes |
| OD-002 | 0 | ~33/40 | 2 passes |
| OD-003 | 12 (EXT-TASK) | ~33/40 | 0 (one-shot) |
| OD-004 | 12 (EXT-CONF) | INCLUDE | Partial (R1-001 rebuild) |
| OD-005 | 12 (EXT-SPAT) | INCLUDE | 0 (one-shot) |
| OD-006 | 9 (EXT-CREATIVE) | INCLUDE (crown jewel) | 0 (one-shot) |

Key correlations:
- OD-001 (13 external resources, 2 iterations): ~35/40 -- highest score
- OD-002 (0 external resources, 2 iterations): ~33/40 -- lowest score
- The 2-point gap correlates directly with research enrichment
- Bespoke research (EXT-*) achieved ~85% consumption rate vs pre-existing research (R-1) at ~71%
- R-2 Creative Layouts: 27 findings at 0% consumption across ALL OD explorations -- completely ignored, not because irrelevant but because no one evaluated applicability

### 2.4 Closing the Feedback Loop

The pipeline has a one-way flow problem:

```
Explorations --> Audit --> Findings --> Synthesis --> Handoff --> Next Stage
     ^                                                              |
     +------------ MISSING FEEDBACK LOOP ---------------------------+
```

Findings were extracted FROM explorations but never fed BACK into them:
- OD-F-005 (Organization IS Density) was discovered in OD-006 but was never reflected in OD-001 through OD-005
- 89 audit findings identified issues but fix execution only applied 16 targeted fixes, not conceptual enrichment
- The accumulated identity (ACCUMULATED-IDENTITY-v1.md, 539 lines) was never used to re-evaluate early explorations built before it existed
- External research findings (EXT-CONF, EXT-SPAT, EXT-CREATIVE) were applied to their target explorations but not cross-pollinated

Re-enrichment feeds the accumulated output back in:
```
Original exploration + accumulated findings + new research = enriched exploration
```

### 2.5 OD as Proving Ground for Gate-Based Team Topology

The re-enrichment serves a dual purpose:

**Primary:** Bring OD to uniform high quality before AD builds on top of it.

**Secondary:** Test whether gate-based execution produces measurably better output -- one unknown at a time.
- The team topology (gates, separated responsibilities, sequential verification) has been designed but never tested on CREATIVE BUILD work
- It was tested on AUDIT work (17-agent adversarial audit -- successful) and REMEDIATION work (18-agent provenance chain -- successful)
- But creation is fundamentally different from auditing/remediation: it requires depth, judgment, and aesthetic sensitivity
- Re-enriching 6 existing explorations is a lower-risk test than building 6 NEW AD explorations from scratch
- If the gate-based topology works for re-enrichment, deploy it to AD with confidence
- If it fails, learn why BEFORE AD -- when the cost of failure is lower

**Measurable:** The re-enrichment has before/after scores. If OD-002 goes from ~33 to ~36+ after gate-based re-enrichment with dedicated research, the methodology is validated. If scores don't improve, the gates might be adding ceremony without value.

### 2.6 Resource Priority: Comprehensive Quality Over Efficiency

The user explicitly stated: "I don't care how many resources we expend" -- comprehensive quality is the priority, not speed or cost efficiency. This mandate means:
- Every exploration gets full research enrichment, not just the ones that are easiest to improve
- The team topology can be as large as needed
- Multiple iteration passes are expected, not optional
- The goal is uniform excellence, not "good enough"

### 2.7 Before/After Visual Comparison as Concrete Proof

Re-enrichment produces a tangible before/after comparison that demonstrates:
- Infrastructure investment (18-agent remediation, provenance chain, accumulated identity) was not wasted
- The quality delta between "OD as originally built" and "OD after re-enrichment" is visible
- This proof justifies continued investment in the pipeline methodology
- Screenshots at 1440px and 768px provide concrete visual evidence

---

## SECTION 3: LESSONS FROM PRIOR PHASES

### 3.1 What Failed in Original OD Execution

#### The Execution Plan Was Gates Written as Prose

The OD execution plan (tranquil-bouncing-koala.md, 763 lines) contained 15 non-negotiable requirements. These were essentially gates -- checkpoints that needed to be cleared before proceeding. But they were encoded as prose instructions in a planning document, not as physical checks in the file system or team architecture.

The 15 requirements included: read research files before building, apply research findings with citations, verify soul compliance after building, update inline headers, update RESEARCH-ACTIVE.md, commission bespoke research per exploration, write provenance entries as you discover things, check anti-patterns, score the exploration, document decisions.

**Why they failed:**
1. All 15 responsibilities loaded onto the SAME agent
2. Gates were in a document, not in the file system -- when context compacted mid-build, gate instructions vanished
3. No enforcement mechanism -- gates depended on the agent reading AND remembering AND prioritizing them

#### Single Agent Carrying 7 Responsibilities

The fundamental structural problem: one agent was asked to do 7 conflicting things simultaneously:
1. Build creatively (write HTML)
2. Document provenance (record findings)
3. Update inline headers (threading metadata)
4. Check soul compliance (border-radius, box-shadow)
5. Commission research (request external research)
6. Iterate (self-critique and revise)
7. Score (evaluate against rubric)

Under context pressure, the agent kept PRIMARY (build) and dropped SECONDARY (document, thread, update). This is rational behavior under constraint. Given limited context, producing the exploration is more valuable than producing metadata about the exploration.

#### Context Compaction Destroyed Gate Instructions

When context compacted mid-build: the 763-line execution plan vanished from context, the 15 requirements vanished, and the agent continued building based on whatever remained in compressed context. Building instructions survived (active task) but meta-instructions (document, thread, update) did not.

#### The Massive Retroactive Cost

Because provenance was never written during the build, it required: 18 agents deployed across 5 waves, 104 verification items, 93/104 PASS (11 FAIL at LOW severity), 27 files modified, 5,423 insertions, 336 deletions -- all 3 months after the original build when discovery context was lost.

#### The showcase/CLAUDE.md Governance Gap

The showcase/CLAUDE.md is a 500+ line governance document mandating a 5-step research grounding loop, refinement loop, mandatory output format, and full perceptual depth audit. None of the builder agents followed it -- they were spawned with direct prompts and never traversed into the showcase/ directory. By the document's own criteria ("if this record is missing or incomplete, the work is INVALID"), all 6 ODs are technically invalid.

**Root cause:** Governance documents that depend on directory traversal don't apply to spawned sub-agents. Either embed critical requirements into agent prompts (10-line checklist, not 500-line document) or accept that the document is aspirational, not enforceable.

#### External Research Lost to Context

OD-001 (EXT-CONV) and OD-003 (EXT-TASK) external research was conducted by agents that terminated or whose sessions crashed before persisting results as standalone documents. The findings ended up in HTML headers but with no source provenance document. Rule established: external research agents must write their output to a file BEFORE returning results to the lead.

#### The Refinement Loop Was Dropped for 4/6 Explorations

| Step | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|------|--------|--------|--------|--------|--------|--------|
| Context-guided research | Partial* | N/A | Partial* | YES | YES | YES |
| Findings in HTML | YES | YES | YES | YES | YES | YES |
| Refinement against identity | YES (2 iter) | YES (2 iter) | NO (one-shot) | PARTIAL | NO (one-shot) | NO (one-shot) |

*OD-001 and OD-003 research happened but was not persisted.

Parallel agents cannot iterate (they terminate after one response). The refinement step requires holding both external findings AND accumulated identity simultaneously -- the most context-expensive operation. When context limits hit, refinement was the first casualty.

### 3.2 What Succeeded in Remediation

#### The v4 Remediation Plan Architecture

The v4 remediation plan (synthetic-orbiting-firefly.md, 988 lines) fixed every structural problem:
- **Wave dependencies:** Wave 2 literally cannot start until Wave 1 files exist -- physical dependency, not guideline
- **File existence checks:** Lead verifies file existence after each wave -- binary check (file exists? yes/no)
- **Zero judgment rules:** Every instruction is "DO this" or "DO NOT do this" -- no "consider whether"
- **File ownership matrix:** Every file has exactly one owner -- zero contention
- **Crash recovery via skeleton-first:** Agents write skeleton files FIRST so data survives crashes
- **Source priority table:** Pre-defined resolution for source disagreements
- **Weaver for cross-agent state:** Dedicated agent maintains shared state without building or auditing

#### Remediation Results

- 18-agent team, 5 waves
- 93/104 PASS on verification framework (11 FAIL, all LOW severity)
- Category J (Reproducibility): 5/5 PASS -- fresh agent answers all questions from provenance alone
- Category B (Finding IDs): 10/10 PASS -- zero collisions, R3-023/036 disambiguated, OD-F-005 resolved
- 6 new chain files created: OD-outbound-findings (828 lines, 17 OD-F), OD-SYNTHESIS (514 lines), OD-AUDIT-SYNTHESIS (388 lines), HANDOFF-OD-TO-AD (458 lines), EXT-RESEARCH-REGISTRY (244 lines), organizational-patterns (383 lines)
- 13 infrastructure files updated + 8 remediation artifacts
- 27 files total, 5,423 insertions, 336 deletions

### 3.3 The Binary Rule Principle (Validated)

Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%. This is THE most important architectural principle discovered across all phases.

**Binary rules achieving 100% compliance:**
- border-radius: 0 everywhere -- ZERO violations across 3,479+ elements
- box-shadow: none everywhere -- ZERO violations
- Write to file BEFORE returning -- ZERO data loss in remediation
- One committer, one branch -- ZERO merge conflicts

**Judgment rules achieving ~0% compliance:**
- "Make sure you document your findings as you build" -- provenance never written
- "1-2px borders signal uncertainty" -- 108 CSS declarations with 2px borders
- "Update RESEARCH-ACTIVE.md after applying a finding" -- tracking drift

### 3.4 Metacognition Analysis Discoveries

#### The Hard Numbers
- Meta-to-output ratio: 2.6:1 (47,944 lines infrastructure vs 18,428 lines product)
- Only 2.5% of planning content on critical execution path (430 of 17,084 lines)
- 50:1 compression from agent output to behavioral constraint (99.8% information loss)

#### The Two-Instance Pattern
Exploits a fundamental LLM property: continuation bias prevents self-revision. An instance that generated Plan A is biased toward defending Plan A. A fresh instance treats it as an artifact to evaluate. Phase A (Creation) --> Phase B (Revision by fresh instance) --> Phase C (Execution by another fresh instance).

#### The Prophylactic Paradox
Designing for failure prevents failure. Every crash recovery mechanism, compaction survival protocol, and skeleton-first pattern shapes agent behavior in ways that prevent the failure it was designed to recover from. The compaction survival protocol for the audit was never triggered because the DESIGN of the protocol made agents self-documenting, keeping lead context lean.

#### The Complexity Ratchet
Rules only accumulate, never retire. MEMORY.md treats tactical learnings (macOS syntax) the same as strategic ones (binary rule principle). Needs a tiered approach: strategic principles (permanent), phase-specific tactics (per-phase), technical workarounds (reference only).

#### The Compression Cascade
Information flows through a 5-stage pipeline with ~50:1 total compression:
1. Agent Output --> Report: 10:1 (~85% lossy)
2. Report --> STATE File: 28:1 (~95% lossy)
3. STATE + Retrospective --> MEMORY.md: various
4. MEMORY.md --> Agent Prompt: 4:1 (~70% lossy)
5. Agent Prompt --> Agent Behavior

Only binary rules survive this compression. "border-radius: 0" propagated perfectly. "1-2px borders signal uncertainty" did not. This is WHY gates use binary checks.

#### The Adversarial Tension Discovery
One agent arguing both sides produces debate-shaped text, not genuine disagreement. The verdict distribution (mostly IMPROVE, few VALIDATED or REJECT) indicates hedging. Adversarial PAIRING -- two separate agents, one defending, one attacking, compared by a third -- produces genuine disagreement. Fresh-eyes proved this.

#### Known Issue Amplification
7 agents independently confirmed the 2px border epidemic -- validation but attention consumed. Future prompts should include a "KNOWN ISSUES TO SKIP" section directing agents past confirmed problems toward the frontier of unknown issues.

#### The Acquisitive vs Generative Loop

**Acquisitive loop (what OD did):**
```
Identity --> narrows search --> finds confirming patterns --> inserts them
```

**Generative loop (what re-enrichment should do):**
```
Identity --> generates better questions --> discovers surprising patterns
    --> refines against identity --> identity itself evolves
    --> threads the evolution back in
```

OD-F-005 ("Organization IS Density") was a genuine discovery -- but it emerged accidentally from the OD-006 builder's accumulated context, not from a structured dialectical process. Re-enrichment should make generativity structural.

---

## SECTION 4: GATES VS GUIDELINES

### 4.1 Definition of Each

**A guideline** is advice. It tells the agent what it should do. It depends on the agent reading it, remembering it, and choosing to follow it.

Example guideline: "Make sure you document your findings as you build"

This is advice that agents: Read (yes), Agree with (yes), Intend to follow (yes), Forget under context pressure (yes). Under context constraint, guidelines are the FIRST thing triaged.

**A gate** is a physical checkpoint. It does not tell the agent what it should do -- it prevents the agent from proceeding until a condition is met.

Example gate: "Before you start building OD-004, check that these 3 specific files exist. If they don't exist, you can't start."

This is NOT advice. It is a physical dependency: the Builder literally cannot proceed because input files don't exist yet. No judgment call. Binary check. Enforcement lives in the file system, not in prose.

### 4.2 Why Guidelines Fail Under Context Pressure

| Aspect | Guideline | Gate |
|--------|-----------|------|
| **Mechanism** | Prose instruction | Physical dependency |
| **Survival** | Lost during compaction | Exists in file system |
| **Enforcement** | Agent memory | Team architecture |
| **Language** | "You should" | "You cannot proceed until" |
| **State** | Continuous (degrees of compliance) | Binary (pass/fail) |
| **Judgment** | Required (is this the right time?) | None (file exists or doesn't) |
| **Failure mode** | Silent (agent forgets, nobody notices) | Loud (agent blocked, lead investigates) |

### 4.3 Concrete Conversion Examples

Every guideline that failed in OD can be converted to a gate:

| OD Guideline (Failed) | Gate Version |
|------------------------|-------------|
| "Document findings as you build" | Scribe agent writes provenance file. Builder cannot see score until Scribe confirms provenance exists |
| "Apply research with citations" | Researcher agent writes research brief. Builder receives brief as input -- cannot build without it |
| "Update RESEARCH-ACTIVE.md" | Weaver updates tracking. This is the Weaver's only job -- it can't forget it |
| "Verify soul compliance" | Verifier agent runs binary soul check. File marked PASS/FAIL. Lead reads the mark |
| "Commission bespoke research" | Scout agent runs before Builder. Builder's prompt INCLUDES scout output. No scout = no input |
| "Iterate at least twice" | Builder prompt includes mandatory self-critique questions. Second pass is part of the prompt, not a separate instruction to remember |

### 4.4 The Core Insight: Enforcement Through Team Topology

The insight is NOT about more agents or more rules. It is about making it **structurally impossible to skip steps.**

In original OD: one agent carried 7 responsibilities. Under context pressure, it deprioritized 5 (kept building). No amount of prompting fixes this because the agent makes a rational choice under constraints.

With role separation: the Builder cannot deprioritize provenance because it has ZERO provenance responsibilities. The Scribe cannot deprioritize provenance because it has ONLY provenance responsibilities. The Verifier cannot rubber-stamp because its checks are ALL binary. Progress is physically blocked by the gate sequence.

---

## SECTION 5: TEAM TOPOLOGY

### 5.1 The 5 Core Roles

#### Lead (Orchestrator)

**Sole Responsibility:** Sequencing gates, spawning agents, verifying completion.

**Hard Rules (battle-tested across 3 team executions):**
1. The lead NEVER edits HTML files
2. The lead NEVER runs Playwright
3. The lead NEVER reads full OD files (reads STATE files and reports only)
4. The lead NEVER builds, audits, or synthesizes
5. One committer, one branch -- Lead commits, agents never commit

**Behavior:** "Builder, OD-003 is done? Good." --> "Scribe, create provenance for OD-003." --> "Scribe done? Good." --> "Verifier, check OD-003 provenance." --> "Verifier says PASS? Good." --> "Builder, start OD-004."

**Evidence from prior phases:**
- OD Audit (17 agents, 45 min): Lead context at completion was 77% (154K/200K tokens) -- session completed without compaction because Lead stayed THIN
- OD Builders (first team, 6+ sessions): Lead burned context on Playwright and building -- multiple compaction crashes

#### Builder (Creative Work)

**Sole Responsibility:** Writes exploration HTML files + checkpoint scores. Does NOT touch provenance files AT ALL.

**Key Design Insight:** By removing provenance responsibility from the Builder, the Builder cannot "deprioritize" provenance under context pressure. In the original OD build, the Builder was responsible for BOTH building AND creating inline sections. When context hit 85%, the Builder chose to start the next OD instead of completing provenance. With role separation, the Builder literally cannot make that choice -- provenance is Scribe's job.

**Convention Compliance:** Every Builder inherits the convention spec established by the Convention Agent (Wave 0). This prevents the 3-dialect quality gap from recurring.

**Enrichment Iteration Pattern:** Build draft --> audit --> enrich --> rebuild. First-draft target: ~32-33/40; final target: 35+ after iteration.

#### Scribe (Provenance Maintenance)

**Sole Responsibility:** Maintains provenance in REAL-TIME, never builds.

**After each exploration completes, the Scribe:**
1. Creates/updates research gate files
2. Creates/updates outbound finding entries (OD-F-### format)
3. Updates inline headers on consumed files (CONSUMED BY sections)
4. Updates PIPELINE-MANIFEST with new findings
5. Updates RESEARCH-ACTIVE.md with application status
6. Creates EXTERNAL-V files with inline headers AT BIRTH (Layer 1 included at creation)

**The "No New Dark Matter" Principle:** Anything the Builder discovers gets written into the formal chain IMMEDIATELY by the Scribe. Findings are born in the chain, never become "dark matter." OD phase produced 51+ operational files (32,800 lines) of dark matter that required an 18-agent remediation team to resolve.

**Capacity:** Can cover 2-3 explorations per batch (cross-reference findings across batch).

**From HANDOFF-OD-TO-AD.md:** "Create provenance INCREMENTALLY during build. DO NOT defer to post-build session. If you can't cite the provenance for a decision, stop and write it down."

#### Researcher (External Research + Sub-agents)

**Sole Responsibility:** Deploys sub-agents for bespoke research. Uses accumulated identity to GENERATE research queries (not just constrain).

**Rules:**
- Creates EXTERNAL-V files with inline headers AT BIRTH (Layer 1 included at creation)
- Each file has BUILT ON + CONSUMED BY from moment of creation
- Packages findings for Builder consumption
- Does NOT dump findings into scratchpad -- goes directly into EXT-RESEARCH-REGISTRY
- Uses accumulated identity to generate research queries, not just constrain them

**Evidence from OD Phase:**
- Bespoke research (EXT-*) achieved ~85% consumption rate vs pre-existing (R-1) at ~71%
- Targeted research created for a specific exploration's hypothesis is more easily consumed than broad pre-existing research
- OD-001 (13 external resources): 35/40 -- highest score
- OD-002 (0 external resources): 33/40 -- lowest score

**Research Consumption Gap Warning:** R-2 Creative Layouts has 27 findings at 0% consumption by OD. Re-enrichment must explicitly evaluate R-2 applicability before building.

#### Verifier (Gate Enforcement)

**Sole Responsibility:** Runs after each exploration, blocks next one. Reports PASS/FAIL to Lead. Does NOT evaluate quality -- only checks existence and binary conditions.

**All Checks Are Binary (yes/no):**
- Does research gate file exist?
- Does outbound findings entry exist?
- Are inline headers updated on consumed files?
- Score >= target?
- Conventions applied?
- Research consumed?
- Soul compliance verified?

**Why Binary Checks Work:** Binary rules achieve 100% agent compliance (border-radius: 0 -- zero violations across 3,479 elements). Judgment rules achieve ~0% (108 CSS declarations with thin borders despite "1-2px signals uncertainty"). The Verifier's ALL-binary checklist exploits this fundamental property.

**J-03 Test (Fresh-Eyes Verification):**
A fresh agent with NO prior context should answer 5 questions using ONLY the provenance chain:
1. What did this stage discover? (Answer from outbound-findings)
2. What constraints did it inherit? (Answer from HANDOFF-[prev]-TO-[this])
3. What constraints does it pass forward? (Answer from HANDOFF-[this]-TO-[next])
4. What research was consumed and at what rate? (Answer from RESEARCH-GATE)
5. What quality bar was achieved? (Answer from SYNTHESIS or CHECKPOINT)

### 5.2 The 3 Additional Roles

#### Convention Agent (Wave 0)

**Sole Responsibility:** Establishes code block theme, header layout, type scale, border system BEFORE any building.

**Purpose:** Prevents the 3-dialect quality gap from recurring.

**Convention Spec Must Cover:**
- Code block theme (background, border, syntax highlighting)
- Header layout (meta format, title style, spacing)
- Type scale (heading sizes, body size, line-height)
- Border system (3-category: Cat 1 structural 3px+, Cat 2 separators, Cat 3 micro)
- Color application (palette usage rules)
- Spacing tokens (consistent --space-* usage)
- Page length targets (prevent Dialect B sprawl: 17,613px avg vs Polished 8,114px avg)

**Execution:** Runs ONCE, produces a convention specification document. Every Builder inherits this spec.

#### Dark Matter Indexer (Wave 0, 3-4 agents)

**Sole Responsibility:** Goes through 51+ operational files (32,800 lines) systematically. Extracts anything that should be referenced in formal chain. Creates proper links/edges from formal chain to dark matter.

**What Is "Dark Matter":** Valuable information that exists in operational files but is NOT referenced by the formal provenance chain. A fresh agent following only the formal chain would never discover them.

**Rules:**
- NOT migrating content -- creating references so nothing is orphaned
- Embarrassingly parallel -- each dark matter file is independent
- Each indexer handles a subset of operational files
- Produces cross-references linking formal chain to operational artifacts

**Current Dark Matter Inventory:**

| Directory | Files | Lines | Content |
|-----------|-------|-------|---------|
| `_od-audit-scratchpad/` | 29 | ~9,275 | Per-agent audit reports, visual audits, fix reports |
| `_provenance-gap-analysis/` | 15 | ~11,237 | Gap analysis, dark matter census, target topology |
| `_workflow-metacognition/` | 9+1 | ~4,257 | Chronological analysis, paradoxes, architecture |
| `_execution-journal/` | varies | varies | Execution logs |
| `_remediation/` | varies | varies | Remediation execution artifacts |
| **Total** | **51+** | **~32,800+** | |

#### Weaver (Cross-agent State Tracker)

**Sole Responsibility:** Tracks completion across agents, alerts lead of missing reports, cross-references findings across agents.

**Proven Pattern:** Validated across 3 team executions:
1. **OD builders:** Experimental. Proved value by maintaining shared state.
2. **OD audit (17 agents):** Core infrastructure. Produced 18 cross-references -- highest-value coordination artifact.
3. **OD fix execution (7 agents):** Tracked progress automatically, updated FIX-STATE.md at each completion. Zero data loss.

"The Weaver is now a proven pattern across 2 team executions with different team structures. It's no longer experimental. It's infrastructure." -- Retrospective v3

### 5.3 Per-Role Binary Rules

| Role | DO | DO NOT |
|------|-----|--------|
| **Lead** | Create tasks, assign them, process verdicts, decide next steps, commit | Edit HTML, run Playwright, read full OD files, build, audit, synthesize |
| **Builder** | Write HTML, score iterations, report completion | Touch provenance files, update inline headers, commission research |
| **Scribe** | Maintain formal chain, update inline headers, create finding entries | Build HTML, run Playwright, score explorations |
| **Researcher** | Deploy sub-agents, create EXT-V files with headers, package findings | Build HTML, write provenance narrative, make design decisions |
| **Verifier** | Run binary checks, report PASS/FAIL | Evaluate quality, make judgment calls, fix issues |
| **Convention** | Establish standards, produce specification document | Build explorations, apply standards (Builders do that) |
| **Dark Matter Indexer** | Read operational files, create cross-references | Migrate content, modify formal chain narrative, build |
| **Weaver** | Track state, cross-reference, alert lead | Build, audit, verify, make decisions |

### 5.4 Gate Architecture Diagram

```
+--------------+     +--------------+     +--------------+     +--------------+
|   BUILDER    |---->|    LEAD      |---->|    SCRIBE    |---->|    LEAD      |
|  Builds OD-X |     | Receives     |     | Creates      |     | Routes to    |
|  Scores it   |     | completion   |     | provenance   |     | Verifier     |
+--------------+     +--------------+     +--------------+     +--------------+
                                                                      |
                                          +--------------+            |
                                          |   VERIFIER   |<-----------+
                                          | Binary checks|
                                          | PASS/FAIL    |
                                          +------+-------+
                                                 |
                                     +-----------+-----------+
                                     |                       |
                                  PASS                     FAIL
                                     |                       |
                              +------+------+        +------+------+
                              | LEAD spawns |        | LEAD routes |
                              | next Builder|        | back to     |
                              | for OD-(X+1)|        | failing role|
                              +-------------+        +-------------+
```

### 5.5 Comparison: Prior Team Architectures

| Team | Agents | Duration | Crashes | Gate Model | Result |
|------|--------|----------|---------|------------|--------|
| OD Builders (1st) | 6+ sessions | Multi-hour | Multiple | No gates | 51+ files dark matter |
| OD Audit (2nd) | 17 | 45 min | Zero | Wave model with sequential gates | 89 findings, 0 soul violations |
| OD Fix (3rd) | 7 | 25 min | Zero | Per-file ownership + sequential verification | 16/16 fixes, 0 regressions |
| Re-Enrichment (planned) | 30-40 | TBD | Target: Zero | Role separation + binary gates | Target: 0 dark matter |

---

## SECTION 6: WAVE STRUCTURE

### Wave 0: Convention + Dark Matter (~15-20 min)

**Agents Active:** Convention Agent + 3-4 Dark Matter Indexers + Weaver

**Purpose:** Establish standards and catalog operational knowledge BEFORE any building.

**Parallel Execution:** Convention Agent and Dark Matter Indexers run in parallel. They produce artifacts that all later waves consume.

**Convention Agent Outputs:**
- Convention specification document
- Code block theme standard
- Header layout standard
- Type scale standard
- Border system standard (3-category)

**Dark Matter Indexer Outputs:**
- Cross-reference index linking formal chain to operational files
- Per-file summary of what each operational file contains
- Flagged items that should be promoted to formal chain

### Waves 1-3: Per-Exploration Enrichment in Batches of 2

**Agents per batch:** 2 Builders + 2 Researchers + 1 Scribe + 1 Verifier = ~6 agents

**Three batches cover all 6 ODs:**
- Batch 1: 2 explorations
- Batch 2: 2 explorations
- Batch 3: 2 explorations

**Cross-Pollination:** Later batches inherit findings from earlier ones. Scribe documents findings from Batch 1 before Batch 2 Builders start, enabling cross-pollination.

**Recommended Batching:**

| Batch | Explorations | Rationale |
|-------|-------------|-----------|
| 1 | OD-001 + OD-002 | Polished dialect, already strongest, sets convention standard |
| 2 | OD-003 + OD-005 | Functional dialect, most structural work needed |
| 3 | OD-004 + OD-006 | Complex: geological metaphor + crown jewel synthesis |

**Open Question:** Whether to establish conventions on already-best explorations first (Polished dialect) or start with the ones that need the most work. The recommended approach starts with strongest to validate conventions before applying to weaker explorations.

**Per-Batch Gate Sequence:**
```
For each batch of 2 explorations:

 1. Researchers deploy sub-agents for bespoke research
 2. Researchers package findings, create EXT-V files with inline headers
 3. Builders receive research + convention spec + accumulated identity
 4. Builders iterate OD HTML with new research + conventions
 5. Builders score each iteration, report completion to Lead
 6. Lead tells Scribe: "Exploration X complete. Create provenance artifacts."
 7. Scribe creates:
    - Research gate entries
    - Outbound finding entries
    - Inline header updates on consumed files
    - PIPELINE-MANIFEST updates
 8. Lead tells Verifier: "Check Exploration X provenance."
 9. Verifier runs binary checklist:
    - Research gate file exists? YES/NO
    - Outbound findings entry exists? YES/NO
    - Inline headers updated? YES/NO
    - Score >= target? YES/NO
    - Conventions applied? YES/NO
    - Research consumed? YES/NO
10. Result: PASS or FAIL
11. If PASS: Lead spawns next batch
12. If FAIL: Lead identifies specific failure, routes back to responsible agent
```

### Wave 4: Synthesis + Infrastructure

**Agents Active:** Synthesizer + Infrastructure Updaters + Weaver

**Synthesizer Updates:**
- OD-SYNTHESIS.md (cross-OD analysis)
- OD-AUDIT-SYNTHESIS.md (quality gate results)
- organizational-patterns.md (validated patterns)

**Infrastructure Updaters:**
- PIPELINE-MANIFEST (findings, lifecycle counts)
- BACKBONE.md (stage narrative)
- PATTERN-INDEX.md (validated patterns)
- ACCUMULATED-IDENTITY updated to v1.1

**Critical Update:** HANDOFF-OD-TO-AD.md rewritten to reflect re-enriched state. AD must read the UPDATED handoff, not the original.

### Wave 5: Adversarial Audit (10-15 agents)

**Architecture (from Retrospective v3, Appendix A):**
```
Team size: 10-12 agents (not 17)
  - 1 Traverser (identity loading)
  - 3 Visual-First (per-exploration pairing, 2 files each)
  - 1 Fresh-Eyes (all files, no builder context)
  - 2-3 Systematic (per-exploration pairing, focused sub-checks)
  - 1 Standards Agent (structural + accessibility + content)
  - 1 Weaver (cross-reference + state management)
  - 1 Consistency + Synthesizer (combined)
```

**Refinements Over v2 Audit:**
- Include "KNOWN ISSUES TO SKIP" section (prevents known-issue amplification)
- Reduce prompt-to-capacity ratio to 1.5:1 (was 3:1, caused incomplete execution)
- Replace Structured Debate with adversarial agent pairing (if budget allows)
- Time-based instructions replaced with question-based instructions
- Nuclear Question split into insider test + outsider test

**Verification Built Into Scope:**
- Plant 3-5 known violations before audit (calibration -- measures detection rate)
- Lead spot-checks 3 random findings (quality floor)
- Before/after comparison built into audit scope
- Dual purpose: quality gate + comparative analysis

**Wave Model (proven):**
1. Identity Loading
2. Visual-First (Wave 1)
3. Programmatic (Wave 2)
4. Cross-Exploration Consistency
5. Synthesis

### Wave 6: Verification (3 parallel verifiers)

**Agents Active:** 3 Verifiers running in parallel

**Tasks:**
1. Running the 205-item verification framework (this document's Section 10)
2. Fresh-eyes test (J-03: fresh agent answers 5 questions from provenance alone)
3. Before/after comparative analysis

**Gate:** If PASS --> commit. If FAIL --> route back to responsible wave.

### Concurrency and Sizing

| Wave | Agents Active | Concurrency Model |
|------|--------------|-------------------|
| Wave 0 | 4-5 (1 Convention + 3-4 Dark Matter + Weaver) | Embarrassingly parallel |
| Waves 1-3 | ~6 per batch (2 Builders + 2 Researchers + 1 Scribe + 1 Verifier) | Parallel within batch, sequential across batches |
| Wave 4 | 3-5 (Synthesizer + Infrastructure + Weaver) | Mostly parallel |
| Wave 5 | 10-15 (audit team) | Wave model with sequential gates |
| Wave 6 | 3 (parallel verifiers) | Parallel |

**Total Unique Agents Across All Waves: ~30-40**

**Playwright Contention Considerations:**
- Full parallel (6 at once all using Playwright) risks contention
- From audit retrospective: "Visual-first-a reported: 'Playwright contention prevented me from capturing OD-002 screenshots'"
- Solutions: multiple HTTP ports, sequential pairs within waves, or accept and document
- Per-file ownership eliminates ALL file contention (proven: 4 fixers, zero conflicts)
- Batches of 2 are the Goldilocks zone for speed vs cross-learning

---

## SECTION 7: PROVENANCE LAYER STRATEGY

### 7.1 The 3-Layer Architecture

The provenance system operates at three distinct layers, each serving a different zoom level and traversal purpose.

#### Layer 1: Inline Threading Headers (490 files)

Per-file metadata embedded in comments at the top of every source file. Each header contains:
- **WHY THIS EXISTS** -- Purpose statement
- **STATUS** -- ACTIVE, COMPLETE, SUPERSEDED, etc.
- **BUILT ON** -- Dependencies table (what this file depends on)
- **CONSUMED BY** -- Consumers table (what depends on this file)

Every source file is a node in a traversal graph. BUILT ON and CONSUMED BY create directed edges enabling forward and backward traversal.

Format varies by file type: `.md` = HTML comment, `.css` = block comment, `.tsx` = block comment, `.mdx` = JSX comment.

**During re-enrichment:**
- NEW files get inline threading headers at birth (Builder creates file, Scribe adds header immediately)
- CONSUMED files get CONSUMED BY sections updated
- Researcher creates EXTERNAL-V files with inline headers immediately
- Scribe updates CONSUMED BY sections on files read during build

#### Layer 2: Light Provenance Sections (244 files)

Lighter metadata linking files to their parent phase and T1 synthesis. Bridge between distributed per-file graph (Layer 1) and formal chain (Layer 3). Answers "what phase created this and what synthesis does it connect to."

**During re-enrichment:**
- New artifacts get light sections at creation time
- Existing files get light sections updated if content changes
- Placement: goes AFTER closing `-->` or `*/`, never inside the inline header

#### Layer 3: Formal Chain Documents (provenance/ directory)

Located at `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/`. Per-pipeline-stage subdirectories with curated narrative documents.

| Document Type | Purpose | OD Example | Lines |
|---------------|---------|------------|-------|
| STAGE-HEADER | What the stage did, consumed/produced | `stage-3-organization-od/STAGE-HEADER.md` | exists |
| outbound-findings | Formal finding declarations | `stage-3-organization-od/OD-outbound-findings.md` | 828 |
| SYNTHESIS | Cross-exploration analysis | `stage-3-organization-od/OD-SYNTHESIS.md` | 515 |
| AUDIT-SYNTHESIS | Quality gate results | `stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | 388 |
| HANDOFF | Briefing for next stage | `stage-3-organization-od/HANDOFF-OD-TO-AD.md` | 458 |
| RESEARCH-GATE | Research filtering decisions | `stage-3-organization-od/OD-RESEARCH-GATE.md` | exists |
| CLAUDE.md | Navigation for stage directory | `stage-3-organization-od/CLAUDE.md` | 145 |

Cross-stage documents at provenance root: PIPELINE-MANIFEST.md, EXT-RESEARCH-REGISTRY.md (244 lines), SOUL-DISCOVERIES.md, RESEARCH-ACTIVE.md.

**During re-enrichment:** ALL of these update as explorations change. New findings get added to outbound-findings. Scores change as explorations are re-audited. Synthesis documents reflect re-enriched state. Handoff is rewritten to reflect re-enriched state. Version history lives in git, not duplicate files -- update in place.

### 7.2 How the Three Layers Relate

- **Inline headers** = Distributed dependency graph (who depends on whom)
- **Formal chain** = Authoritative narrative (what happened, why, what it means)
- **Light sections** = Bridge connecting individual files to the larger story

Zoom levels (general to specific):
1. Pipeline level: `BACKBONE.md`
2. Stage level: `STAGE-HEADER.md`
3. Finding level: `outbound-findings.md`
4. File level: Inline threading headers
5. Forward guidance: `HANDOFF-*.md`

### 7.3 Mode C: Incremental Provenance During Build

**Concrete meaning of Mode C:**
- Builder discovers "task clusters work better with 56px gaps" --> Scribe writes it as OD-F-018 (or updates OD-F-007 from "48px+" to "56px optimal, 48px minimum") in OD-outbound-findings.md RIGHT THEN
- The finding is born in the chain. It never becomes dark matter.
- Researcher's sub-agent returns external research --> goes directly into EXT-RESEARCH-REGISTRY.md with inline header. Not a scratchpad file.
- Research query results --> written as EXT-V files with inline threading headers immediately

This rule is enforced structurally by team topology: the Scribe's ONLY job is to maintain the formal chain. The Scribe cannot be deprioritized because provenance is the primary deliverable, not a secondary task.

### 7.4 Dark Matter --> Formal Chain Indexing

"Dark matter" refers to operational files containing valuable findings that sit OUTSIDE the formal provenance chain. Currently: 51+ files, ~32,800+ lines.

**Indexing is NOT migrating content.** It is creating edges so the traversal graph reaches dark matter files. Files stay where they are. Chain documents get new references pointing to them.

**Embarrassingly parallel:** Each dark matter file is independent. Multiple agents can index simultaneously without coordination.

**The user's emphasis:** "Make sure we're not just adding more to the dark matter." New work during re-enrichment MUST flow into the formal chain, not create new dark matter. Enforced by: (1) Scribe role, (2) Mode C incremental provenance, (3) Research going to EXT-RESEARCH-REGISTRY not scratchpad, (4) Findings going to OD-outbound-findings not checkpoint notes, (5) Decisions going to OD-SYNTHESIS not execution journals.

### 7.5 Accumulated Identity as Active Research Driver

**Current state (passive context):** ACCUMULATED-IDENTITY-v1.md (539 lines) gets READ by agents as background. Contains: Master Soul Statement, 5 Soul Pieces, 6 Universal Rules, DD-F findings, OD-F findings, transitive chains, 337 research findings.

**Target state (active research generator):** Used to GENERATE research queries, not just constrain them.

**The difference:**

Passive: "Find research on task layouts"

Active: "Given OD-F-005 (organization IS density), DD-F-003 (ISLANDS density), OD-F-007 (48px mode-transition breathing), and the TASK-BASED pattern -- find external research on how discrete task containers maintain island density while respecting fractal self-similarity at component level"

The active query could only exist because accumulated identity informed it. It encodes the org-density equivalence principle (OD-F-005), the specific density pattern (DD-F-003), the quantitative constraint (OD-F-007), the organizational pattern context (TASK-BASED), and the cross-scale requirement (fractal self-similarity at component level).

**Version Updates:**

| Version | When | Content |
|---------|------|---------|
| v1 | Remediation (2026-02-07) | 539 lines. DD-F + OD-F findings, soul pieces, constraints |
| v1.1 | After re-enrichment | Same stage (OD), enriched findings. Updated scores, refined constraints, new findings if discovered |
| v2 | After AD phase | Adds AD-F findings, axis constraints |

### 7.6 The "No New Dark Matter" Principle

Every piece of new work flows directly into the formal chain through the Scribe:

| Work Product | Destination | Chain Document |
|-------------|-------------|----------------|
| Research findings | `EXT-RESEARCH-REGISTRY.md` | With inline header, EXT-V-* ID |
| Design discoveries | `OD-outbound-findings.md` | As OD-F-### finding |
| Pattern insights | `OD-SYNTHESIS.md` | As cross-exploration observation |
| Quality results | `OD-AUDIT-SYNTHESIS.md` | As audit record |
| Design decisions | `OD-SYNTHESIS.md` | As documented rationale |
| External research | `EXT-RESEARCH-REGISTRY.md` | As EXT-V-* entry |

**What does NOT flow to formal chain (genuinely ephemeral):**
- Agent coordination messages (SendMessage traffic)
- Intermediate build states (work-in-progress HTML)
- Agent task completion notifications

### 7.7 Forward/Backward/Cross Traversal Maintenance

**Forward (CONSUMED BY):** When Builder reads file X to inform work on file Y, Scribe adds Y to file X's CONSUMED BY table. Enables: "What downstream work used this file?"

**Backward (BUILT ON):** Written at creation time for new files by Scribe. Enables: "What upstream sources informed this file?"

**Cross-Stage (HANDOFF):** Bridge pipeline stages. HANDOFF-DD-TO-OD, HANDOFF-OD-TO-AD (458 lines), future HANDOFF-AD-TO-CD. Enables: "How did this constraint flow from research through DD to OD to AD?"

**Builder does NOT touch inline threading headers. Scribe maintains all traversal edges.**

### 7.8 The Provenance-Checklist-Template

From HANDOFF-OD-TO-AD.md, a reusable binary checklist for ALL future stages:

```
Before marking ANY stage COMPLETE:
- [ ] outbound-findings EXISTS with >=10 findings
- [ ] HANDOFF EXISTS with acknowledgment protocol
- [ ] SYNTHESIS EXISTS with consumption/production tables
- [ ] STAGE-HEADER says COMPLETE in YAML + heading
- [ ] PIPELINE-MANIFEST updated with stage findings + lifecycle counts
- [ ] BACKBONE updated with past-tense stage entry
- [ ] PATTERN-INDEX updated with VALIDATED patterns
- [ ] SOUL-DISCOVERIES has stage determination
- [ ] FINDINGS-INDEX has stage entries
- [ ] Fresh agent can answer 5 J-03 questions from provenance alone
```

---

## SECTION 8: PER-EXPLORATION RE-ENRICHMENT

### 8.1 What Each Exploration Started With (Before vs Now)

#### Original Build Context

| Source | Items | Application Rate | Notes |
|--------|-------|-----------------|-------|
| R-1 Documentation Patterns | 28 findings | ~71% (20/28 applied) | PRIMARY research for OD |
| DD-F findings | 18 from DD | 17/18 consumed (DD-F-016 violated: 2px epidemic) | MANDATORY constraints |
| COMP-F findings | 21 from components | Consumed as soul/component constraints | Stage 1 findings |
| R-5 Combination Theory | 39 findings | Partially consumed | Secondary reference |
| MASTER-SOUL-SYNTHESIS.md | 5 soul pieces | T1 LOCKED -- 100% enforced | Non-negotiable |
| DESIGN-TOKEN-SUMMARY.md | Locked token values | T1 LOCKED -- 100% enforced | Non-negotiable |
| EXT-* bespoke research | Unevenly distributed | OD-001:13, OD-002:0, OD-003:12, OD-004:12, OD-005:12, OD-006:9 | 47 unique, 55 citations |
| HANDOFF-DD-TO-OD | 1 file | Consumed as entry gate | Mandatory first-read |

**Critical gap:** OD-002 received ZERO external research (scored lowest at ~33/40). OD-001 received 13 (scored highest at ~35/40).

#### Re-Enrichment Context (Everything Original PLUS)

| New Source | Lines | Status | Why It Matters |
|------------|-------|--------|----------------|
| OD-outbound-findings.md | 828 | 17 OD-F findings | OD's own discoveries now feed back into rebuilds |
| OD-F-005 "Organization IS Density" | -- | Crown jewel finding, MANDATORY | Discovered mid-build; now available from start |
| OD-F-AP-001 (2px border epidemic) | -- | Anti-pattern: 108 CSS decls | Must avoid from start |
| OD-F-FL-001 (Org implies axis) | -- | Forward-looking | Available for layout decisions |
| OD-F-PR-001 (Research enrichment) | -- | Methodology | Justifies commissioning research for ALL 6 |
| OD-SYNTHESIS.md | 514 | Cross-OD analysis | 3-dialect identification, scoring, research rates |
| OD-AUDIT-SYNTHESIS.md | 388 | Audit record | 89 findings, 16 fixes, 2 false positives |
| HANDOFF-OD-TO-AD.md | 458 | Transfer document | Quality bar, mistakes, transitive chain |
| EXT-RESEARCH-REGISTRY.md | 244 | 47 unique findings | Cataloged with soul test results |
| organizational-patterns.md | 383 | 6 validated patterns | Per-pattern research provenance, density pairs |
| ACCUMULATED-IDENTITY-v1.md | 539 | Full inherited context | Soul + findings + constraints in single doc |
| OD-GRANULAR-AUDIT-RESULTS.md | 688 | Full audit report | Per-OD detailed findings |
| Convention specification | NEW | Wave 0 output | Prevents dialect gap from recurring |
| Fresh bespoke research | NEW | Per-exploration | Targeted by accumulated identity |
| 29 scratchpad files | ~528KB | Raw audit data | Visual, programmatic, structural, contrast, fresh-eyes |

### 8.2 The Enrichment Loop (8 Steps)

```
1. RESEARCHER reads:
   - ACCUMULATED-IDENTITY-v1.md (539 lines)
   - Existing OD-NNN HTML header (with all prior research citations)
   - Existing EXT-* research for this OD's category
   - OD-SYNTHESIS.md 3-dialect analysis for this OD's weaknesses
   - OD-AUDIT-SYNTHESIS.md per-OD quality ranking and findings

2. RESEARCHER commissions 2-3 bespoke sub-agent searches:
   - Targeted by accumulated identity (not generic broad searches)
   - Informed by audit findings (where did this OD fall short?)
   - Queries documented with context source

3. RESEARCHER packages findings into EXTERNAL-V files:
   - Inline headers created at birth (not retrofitted)
   - BUILT ON + CONSUMED BY sections populated immediately
   - Cataloged in EXT-RESEARCH-REGISTRY

4. BUILDER reads:
   - Existing OD-NNN HTML artifact
   - New research from Researcher
   - Convention specification (Wave 0 output)
   - organizational-patterns.md entry for this pattern
   - OD-outbound-findings.md (all 17 findings)

5. BUILDER iterates:
   - Applies conventions (closing dialect gap)
   - Integrates new research (elevating quality)
   - Applies OD-F findings retroactively (OD-F-005, OD-F-AP-001, etc.)
   - Scores against 4-dimension rubric (Innovation, Utility, Soul, Execution)

6. SCRIBE documents:
   - What research was consumed (with finding IDs)
   - What was discovered during rebuild (new findings if any)
   - Updates inline headers in real-time
   - Updates formal chain documents incrementally

7. VERIFIER checks:
   - Conventions applied? (code blocks, headers, type scale, borders)
   - Research consumed? (application rate >=80%)
   - Provenance exists? (inline headers, light sections, chain updates)
   - Score improved? (no regression from pre-enrichment)
   - Soul compliance? (5/5, 0 violations)
   - Anti-patterns avoided? (0 new 2px borders, no traffic-light, no off-palette)

8. GATE:
   - If PASS --> next exploration
   - If FAIL --> iterate (return to step 5)
```

### 8.3 The OD-003 Concrete Example

**OD-003 (Task-Based) -- Rank 6 (Needs Most Work)**

**Original context when first built:**
- R-1 findings: R1-001, R1-003, R1-007, R1-008, R1-016, R1-019 (6 of 28)
- DD-F-003 (ISLANDS density), DD-F-006 (FRACTAL mandate)
- HANDOFF-DD-TO-OD constraints
- EXT-TASK-001 through EXT-TASK-012 (12 researched, 8 applied)
- Scored ~33/40 (tied lowest with OD-002)

**Re-enrichment context adds ALL of the above PLUS:**
- OD-F-005 (Organization IS Density) -- discovered by OD-006 but applies to OD-003: task clusters ARE ISLANDS, not merely "create" ISLANDS
- OD-F-007 (48px mode-transition breathing) -- applies between task islands and orientation zones
- OD-F-AP-001 (2px border epidemic) -- OD-003 was WORST offender with 661 computed thin-border instances and 25 thin-border CSS declarations
- 3-dialect analysis showing OD-003 is "Functional" dialect (lighter code blocks, thin borders, simpler headers). Fresh-eyes ship verdict: CONDITIONAL NO
- Per-OD quality ranking: RANK 6 (needs most work) -- lowest craft, adequate identity
- organizational-patterns.md TASK-BASED entry with full research provenance and density pairing
- EXT-TASK findings cataloged in EXT-RESEARCH-REGISTRY with soul test results (4 were not applied: EXT-TASK-005, 007, 008, 010)
- Convention spec closing the dialect gap (dark code blocks, consistent header, unified type scale, 3-category borders)
- NEW bespoke research commissioned from accumulated identity context (targeted by OD-003's specific hypothesis + past failures)
- Off-palette color fix: --accent-tan: #B8A080 was removed (Fix #8), must stay removed
- OD-003 audit data: systematic-audit-003.md (453 lines), visual-audit-003.md (294 lines)

**The difference is enormous:** Original OD-003 was built in relative isolation, knowing only DD constraints and broad R-1 research. Re-enriched OD-003 knows its specific weaknesses, its dialect classification, its audit findings, and has access to ALL cross-OD learnings.

### 8.4 Per-OD Details Table

| OD | Pattern | Current Score | Dialect | Density Pairing | Quality Rank | Key Enrichment Need |
|----|---------|---------------|---------|-----------------|--------------|---------------------|
| OD-001 | Conversational | ~35/40 (I:8 U:9 S:9 E:9) | A: Polished | PULSE + TIDAL | 3rd (Strong) | Already strongest; refine with conventions, maintain v2 polish |
| OD-002 | Narrative | ~33/40 | A: Polished | CRESCENDO | 5th (Needs Enrichment) | Got 0 external research -- biggest enrichment opportunity. Research debt: "narrative pacing research not yet integrated" |
| OD-003 | Task-Based | ~33/40 | B: Functional | ISLANDS + BOOKENDS | 6th (Needs Most Work) | Close dialect gap, fix repetitive island structure, remove 661 thin-border instances, set page length target |
| OD-004 | Confidence | INCLUDE | B: Functional | GEOLOGICAL + CRESCENDO | 4th (Strong concept) | Close dialect gap, enrich research. Dead zone false positive resolved. Essence font false positive resolved. |
| OD-005 | Spatial | INCLUDE | B: Functional | WAVE + ISLANDS | 2nd (Strong) | Close dialect gap, enrich research. Width fixed (960px->860px). |
| OD-006 | Creative/Emergent | INCLUDE (>=36/40 target) | C: Editorial | ALL (FRACTAL primary) | 1st (Strongest) | Close dialect gap where appropriate while maintaining crown jewel status. Type scale 3rem may be intentional. |

### 8.5 Per-OD External Research Consumption (Current State)

| OD | EXT-* Resources | Applied | Rate | Categories |
|----|-----------------|---------|------|------------|
| OD-001 | 13 | 13 | 100% | EXT-CONV(5), EXT-CREATIVE(5), EXT-DENSITY(3) |
| OD-002 | **0** | **0** | **N/A** | None -- biggest gap |
| OD-003 | 12 | 8 | 67% | EXT-TASK(8 applied, 4 not applied) |
| OD-004 | 12 | 12 | 100% | EXT-CONF(12) -- uses descriptive names, not numeric IDs |
| OD-005 | 12 | 10 | 83% | EXT-SPAT(10 applied, 2 not applied) |
| OD-006 | 9 | 9 | 100% | EXT-CREATIVE(9) |

### 8.6 Per-OD Audit Data

| OD | Soul | Craft | Accessibility Failures | Identity | Ship Verdict (Fresh-Eyes) |
|----|------|-------|----------------------|----------|--------------------------|
| OD-001 | 5/5 | HIGH | 5 | STRONG | YES |
| OD-002 | 5/5 | MEDIUM | 7 | WEAK | YES |
| OD-003 | 5/5 | LOW | 6 | ADEQUATE | CONDITIONAL NO |
| OD-004 | 5/5 (Essence false positive resolved) | HIGH | 5 | STRONGEST concept | NO |
| OD-005 | 5/5 | HIGH | 8 | STRONG | CONDITIONAL YES |
| OD-006 | 5/5 | HIGHEST | 4 | STRONGEST | YES (STRONG PASS, unanimous) |

### 8.7 Per-OD Specific Known Issues to Address

**OD-001:**
- Semi-transparent solid offset pseudo-elements (opacity 0.15/0.3) create colored glow -- spirit equivalent of box-shadow (HIGH severity spirit violation)
- EXT-CREATIVE-002 type scale deviations: 26px->24px, 22px->20px, 10px->12px
- Missing `<main>` landmark (FIXED in f5357a7 but convention must be maintained)

**OD-002:**
- ZERO external research (biggest enrichment opportunity)
- WEAK identity per audit ranking
- Research Debt RD-1: "Narrative pacing research not yet integrated"
- Missing `<main>` landmark (FIXED)
- 7 accessibility failures

**OD-003:**
- WORST thin-border count: 661 computed, 25 CSS declarations
- Off-palette --accent-tan: #B8A080 (REMOVED in Fix #8, must stay removed)
- Repetitive island structure (all 6 task islands follow identical template -- no variation)
- Longest OD at 19,829px body height
- Fresh-eyes ship verdict: CONDITIONAL NO
- Rank 6 -- needs most work

**OD-004:**
- Dead zone at ~6,881px was FALSE POSITIVE (scroll animation artifact, content exists)
- Essence font was FALSE POSITIVE (font-loading timing)
- EXT-CREATIVE-002 type scale deviations (shared with OD-001)
- Stratum transitions marked but spacing inconsistent

**OD-005:**
- Width fixed 960px -> 860px (in f5357a7)
- `.territory-tile:hover { transform: translate(-4px,-4px) }` creates fake lift/depth (HIGH severity spirit violation)
- 8 accessibility failures (most of all ODs)
- EXT-SPAT-006/007 not applied (evaluate for re-enrichment)

**OD-006:**
- Type scale divergence: 3rem page title vs 2.5rem in OD-001-005
- `.territory-tile:hover { transform: translate(-2px,-2px) }` creates fake lift/depth (MEDIUM severity)
- space-24 inconsistency (1 of 4 high divergences)
- Deliberately different as editorial/synthesis -- some divergence is INTENTIONAL
- Crown jewel status must be maintained or elevated

### 8.8 Spirit Violations to Fix During Re-Enrichment

From EXT-RESEARCH-REGISTRY.md research-refinement audit:

| # | OD(s) | Finding | Violation | Severity | Fix |
|---|-------|---------|-----------|----------|-----|
| 1 | OD-001 | EXT-CREATIVE-001 | Semi-transparent offset = colored glow = spirit box-shadow | HIGH | Change opacity 0.15/0.3 to 1 with palette color, or remove |
| 2 | OD-001,003,004,005,006 | EXT-CREATIVE-001 | Opaque solid offsets creating perceptual depth illusion | MEDIUM | Case-by-case: flat graphic = OK; floating illusion = FAILS |
| 3 | OD-005 | EXT-CREATIVE-001 | Tile hover transform creates fake lift/depth | HIGH | Remove transform |
| 4 | OD-006 | EXT-CREATIVE-001 | Tile hover transform creates fake lift/depth | MEDIUM | Remove transform |
| 5 | OD-001,004,006 | EXT-CREATIVE-002 | 3 type scale values deviate from locked scale | MEDIUM | Map: 26px->24px, 22px->20px, 10px->12px |

### 8.9 Quality Bar for Re-Enrichment

| Metric | OD Achieved | Re-Enrichment Target |
|--------|-------------|---------------------|
| Average score | ~34/40 (OD-001 highest at ~35) | >=34/40 uniform, target >=35/40 |
| Soul compliance | 100% (0 violations across 3,479+ elements) | 100% maintained |
| Anti-pattern violations | 0 (after fix execution) | 0 maintained |
| Research application (R-1) | ~71% | >=85% |
| Research application (EXT-*) | ~85% | >=90% |
| R-2 evaluation | 0% (27 findings unconsumed) | 100% EVALUATED (applied or justified skip) |
| Iteration passes | 2/6 got iteration | ALL 6 get iteration |
| External research | OD-001:13, OD-002:0 | UNIFORM across all 6 |
| Dialect consistency | 3 dialects | 1 unified dialect (with documented intentional divergences) |
| Provenance | Written retroactively | Updated incrementally during enrichment |

---

## SECTION 9: HARD RULES

### 9.1 Battle-Tested Rules from Prior Teams

#### Communication
1. SendMessage is the ONLY way teammates hear you
2. Idle notifications are noise -- filter them
3. Background agents are underused -- use `run_in_background` for non-visual agents

#### Context Management
4. The lead NEVER runs Playwright (validated 3 times -- zero context crashes)
5. The lead NEVER builds, audits, or synthesizes. Orchestrate ONLY.
6. Research/file-only agents write to file BEFORE returning (validated -- zero data loss)
7. Every agent output ends with a compaction-safe summary (validated -- enabled lead monitoring without deep reads)

#### Quality
8. One committer, one branch (unchanged across all teams)
9. Fresh-eyes is mandatory in any audit (earned by highest-value output in OD audit)
10. Known issues get a "skip list" in agent prompts (prevents amplification waste)
11. Prompt-to-capacity ratio should be ~1.5:1 (overcalibrated prompts produce incomplete execution)

#### Architecture
12. Wave execution with sequential gates between phases (proven)
13. Weaver is infrastructure, not experimental (proven across 3 teams)
14. 10-12 agents is the sweet spot for auditing (beyond 12, marginal value declines)
15. The 10-line soul checklist embedded in every prompt is the enforcement mechanism (proven)

### 9.2 New Rules for Re-Enrichment

16. Role separation enforces provenance: Builder builds, Scribe documents, Verifier gates
17. Binary checks ONLY for gate verification (judgment checks achieve ~0% compliance)
18. Convention Agent runs before any Builder (prevents 3-dialect gap)
19. Dark Matter Indexers catalog operational knowledge before synthesis
20. Scribe creates provenance INCREMENTALLY during build, not after

### 9.3 Prompt Design Principles

**Prompt-to-Capacity Ratio:**

| Ratio | Effect | When |
|-------|--------|------|
| 0.5:1 | Underspecified | Simple tasks |
| 1:1 | Exact match, max compliance | Mechanical tasks |
| 1.5:1 | Slightly more than capacity, forces prioritization | OPTIMAL for most |
| 3:1 | Can't complete everything, skips sections | AVOID (was OD audit) |

**Outcome vs Procedure:** Describe the OUTCOME, not the PROCEDURE. Instead of "run these 17 sub-checks with these exact JavaScript evaluations," say "verify that every element complies with the soul checklist by any means necessary."

**Question-Based, Not Time-Based:** "At each viewport stop, answer these 3 specific questions before scrolling: (1) Does anything violate the soul checklist? (2) Does any element feel proportionally wrong? (3) Would you flag anything for a human reviewer?"

### 9.4 The Soul Compliance Checklist (10 Lines, Embedded in Every Prompt)

```
Soul Compliance Quick Reference:
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

This 10-line block achieved 100% compliance across 3,479+ elements across 3 team executions.

### 9.5 The Three-Category Border System

Established to prevent the 2px border epidemic (108 CSS declarations, 1,619 computed instances):

| Category | Examples | Required Width | Action |
|----------|----------|---------------|--------|
| 1. Structural (accent/frame) | Chapter titles, code block frames, section dividers | 3px+ | UPGRADE |
| 2. Data separators | Table row borders, connector lines, timeline lines | 1px (appropriate) | LEAVE |
| 3. Micro-element | Badges, toggle buttons, copy buttons | 1px (pragmatic) | LEAVE |

### 9.6 The 5 Organizational-Density Identities

| # | Pattern | Density Pairing | Key Finding |
|---|---------|-----------------|-------------|
| 1 | Conversational Q&A | PULSE + TIDAL | OD-001 |
| 2 | Narrative Arc | CRESCENDO | OD-002 |
| 3 | Task Clusters | ISLANDS + BOOKENDS | OD-003 |
| 4 | Confidence Strata | GEOLOGICAL + CRESCENDO | OD-004 |
| 5 | Spatial Mapping | WAVE + ISLANDS | OD-005 |

OD-006 (Creative/Emergent) uses ALL density patterns with FRACTAL as primary.

### 9.7 The Transitive Chain

```
Organizational Pattern (OD-F-005: organization IS density)
       |  [organization IS density]
Density Pattern (DD-F-001 through DD-F-005)
       |  [density implies axis -- DD-F-012]
Axis Preference (OD-F-FL-001)
       |  [axis serves the unified phenomenon]
AD Geometry Decision
```

When AD selects axis geometry, it is simultaneously choosing an organizational-density configuration. The three CANNOT be separated.

---

## SECTION 10: SUCCESS CRITERIA CHECKLIST

This checklist contains 205 binary (YES/NO) items across 15 categories. The re-enrichment is NOT COMPLETE until all items are checked. This section is designed to be copy-pasteable as a standalone verification framework.

---

### Category A: Per-Exploration Quality (Visual & Structural) -- 27 items

- [ ] A-01: Each OD scores >= its previous score (no regression)
- [ ] A-02: Each OD scores >= 32/40 (INCLUDE threshold)
- [ ] A-03: Average score across all 6 ODs >= 34/40 (up from ~34 current average)
- [ ] A-04: OD-001 score >= 35/40 (maintain or improve)
- [ ] A-05: OD-002 score >= 34/40 (up from ~33, biggest enrichment target)
- [ ] A-06: OD-003 score >= 34/40 (up from ~33, needs most work)
- [ ] A-07: OD-004 score >= 33/40 (establish numeric score from INCLUDE)
- [ ] A-08: OD-005 score >= 33/40 (establish numeric score from INCLUDE)
- [ ] A-09: OD-006 score >= 36/40 (crown jewel target)
- [ ] A-10: Soul compliance: 100% across ALL elements in ALL 6 ODs (5 soul pieces)
- [ ] A-11: border-radius: 0 verified on every element + pseudo-element in all 6 ODs
- [ ] A-12: box-shadow: none verified on every element in all 6 ODs
- [ ] A-13: filter: drop-shadow(none) verified on every element in all 6 ODs
- [ ] A-14: Serif (Instrument Serif) used for wisdom/titles/essence -- verified in all 6 ODs
- [ ] A-15: Callout family DNA (2-zone + 4px left border) -- verified in all 6 ODs
- [ ] A-16: Square markers for procedures -- verified in all 6 ODs
- [ ] A-17: 0 anti-pattern violations across all 6 ODs
- [ ] A-18: 0 new 2px structural borders introduced (Category 1 = 3px+)
- [ ] A-19: No traffic-light violations (no green+red adjacent callouts) in any OD
- [ ] A-20: No off-palette colors in any OD (OD-003 accent-tan must stay removed)
- [ ] A-21: DD-F-006 fractal self-similarity applied at 4 scales in all 6 ODs (page, section, component, character)
- [ ] A-22: Max 2 callouts per viewport section enforced in all 6 ODs (DD-F-014)
- [ ] A-23: DD-F-016 border consistency: zero 2px structural borders in Cat 1
- [ ] A-24: 12/12 locked tokens identical across all 6 ODs
- [ ] A-25: All 16 audit fixes from f5357a7 maintained (not regressed)
- [ ] A-26: Both false positives remain resolved (Essence font, dead zone)
- [ ] A-27: All 5 spirit violations from EXT research addressed (see Section 8.8)

### Category B: Convention Uniformity (Dialect Gap Closure) -- 22 items

- [ ] B-01: Code block theme consistent across all 6 ODs (dark or light -- ONE choice)
- [ ] B-02: Header layout consistent across all 6 ODs (same structural pattern)
- [ ] B-03: Type scale consistent across all 6 ODs (resolve 3rem vs 2.5rem for page titles)
- [ ] B-04: Border system consistent: 3-category system applied uniformly
- [ ] B-05: Spacing system documented and applied consistently
- [ ] B-06: Page length targets set and enforced (reduce Dialect B sprawl)
- [ ] B-07: No more "Polished vs Functional" gap -- unified visual standard
- [ ] B-08: OD-006 Editorial intentional differences DOCUMENTED (which divergences are by design)
- [ ] B-09: Convention specification document exists and was read by all Builders
- [ ] B-10: Squint test PASS across all 6 ODs (series looks like one product, not three)
- [ ] B-11: Thin-border count reduced in OD-003 (from 661 computed instances)
- [ ] B-12: Thin-border count reduced in OD-004 (from 19 CSS declarations)
- [ ] B-13: Thin-border count reduced in OD-005 (from 17 CSS declarations)
- [ ] B-14: `<main>` landmark present in all 6 ODs
- [ ] B-15: Heading hierarchy correct (no flat h1-only) in all 6 ODs
- [ ] B-16: Skip-to-content link present in all 6 ODs
- [ ] B-17: prefers-reduced-motion respected in all 6 ODs
- [ ] B-18: focus-visible styles present in all 6 ODs
- [ ] B-19: ::selection styling present in all 6 ODs
- [ ] B-20: @media print styles present in all 6 ODs
- [ ] B-21: Inline code font (JetBrains Mono) correct in all 6 ODs
- [ ] B-22: Favicon present in all 6 ODs

### Category C: Research Enrichment -- 20 items

- [ ] C-01: Every exploration received bespoke research (no 0-research explorations -- fixes OD-002 gap)
- [ ] C-02: OD-002 specifically received narrative pacing research (Research Debt RD-1 resolved)
- [ ] C-03: Research application rate >= 80% across all ODs (up from ~71% for R-1)
- [ ] C-04: R-1 findings: per-OD application rate documented
- [ ] C-05: R-1 unapplied findings (R1-012, R1-014, R1-020, R1-021, R1-023, R1-024, R1-027, R1-028) evaluated for applicability
- [ ] C-06: EXT-* findings: all new findings cataloged in EXT-RESEARCH-REGISTRY with inline headers
- [ ] C-07: New external research files have BUILT ON + CONSUMED BY sections at creation (born in chain)
- [ ] C-08: Accumulated identity (ACCUMULATED-IDENTITY-v1.md) used to GENERATE research queries (not just constrain)
- [ ] C-09: R-2 Creative Layouts (27 findings, 0% consumed by OD) explicitly evaluated for applicability
- [ ] C-10: R-2 evaluation documented: which findings applicable, which not, with rationale per finding
- [ ] C-11: Sub-agent research queries documented with context source
- [ ] C-12: Bespoke research application rate >= 85% (matching or exceeding original EXT-* rate of 88.7%)
- [ ] C-13: Previously unapplied EXT-TASK findings (005, 007, 008, 010) evaluated for OD-003 re-enrichment
- [ ] C-14: Previously unapplied EXT-SPAT findings (006, 007) evaluated for OD-005 re-enrichment
- [ ] C-15: EXT-CONF findings numeric ID mapping resolved (descriptive names -> numeric IDs)
- [ ] C-16: OD-F findings (all 17) explicitly consumed and applied where relevant across all 6 ODs
- [ ] C-17: OD-F-005 (Organization IS Density) explicitly applied in every OD (not just OD-006)
- [ ] C-18: OD-F-007 (Mode-Transition Breathing) applied in OD-006 and any OD with mode transitions
- [ ] C-19: OD-F-AP-001 (2px Border Epidemic) anti-pattern explicitly avoided from the start
- [ ] C-20: Research consumption comparison table: before vs after rates per OD

### Category D: Provenance Layer 1 (Inline Threading Headers) -- 8 items

- [ ] D-01: Every NEW file created during re-enrichment has inline header at birth
- [ ] D-02: Every CONSUMED file has CONSUMED BY updated to reflect re-enrichment consumption
- [ ] D-03: BUILT ON sections accurate for all new files (list actual dependencies)
- [ ] D-04: STATUS fields current across all modified files
- [ ] D-05: Zero orphan files (created without inline header)
- [ ] D-06: Inline headers in existing OD HTML files updated to reflect re-enrichment changes
- [ ] D-07: New research findings have BUILT ON linking to accumulated identity + OD synthesis
- [ ] D-08: Header format correct per file type (.md=HTML comment, .html=HTML comment, .css=block comment)

### Category E: Provenance Layer 2 (Light Sections) -- 4 items

- [ ] E-01: New artifacts have light provenance sections
- [ ] E-02: Existing light sections updated if content changed
- [ ] E-03: Light sections link to correct parent phase (Stage 3 OD re-enrichment)
- [ ] E-04: Light sections placed correctly (AFTER closing comment delimiter, never inside)

### Category F: Provenance Layer 3 (Formal Chain Documents) -- 26 items

- [ ] F-01: OD-outbound-findings.md updated with any new findings discovered during re-enrichment
- [ ] F-02: Finding ID convention maintained (no new collisions)
- [ ] F-03: OD-F-005 disambiguation note preserved
- [ ] F-04: OD-SYNTHESIS.md updated to reflect re-enriched state (scores, research rates, dialect gap closure)
- [ ] F-05: OD-SYNTHESIS.md Section 4 (3-dialect analysis) updated post-convention unification
- [ ] F-06: OD-SYNTHESIS.md Section 8 (Scoring Summary) updated with new per-OD scores
- [ ] F-07: OD-SYNTHESIS.md Section 9 (Research Consumption) updated with new rates
- [ ] F-08: OD-AUDIT-SYNTHESIS.md updated with re-enrichment audit results
- [ ] F-09: HANDOFF-OD-TO-AD.md rewritten for re-enriched state (quality bar, scores, research rates)
- [ ] F-10: HANDOFF-OD-TO-AD.md quality bar table updated with re-enriched scores
- [ ] F-11: HANDOFF-OD-TO-AD.md research consumption rates updated
- [ ] F-12: HANDOFF-OD-TO-AD.md PROVENANCE-CHECKLIST-TEMPLATE still intact
- [ ] F-13: HANDOFF-OD-TO-AD.md Mode C guidance still intact
- [ ] F-14: HANDOFF-OD-TO-AD.md Mistakes to Avoid updated if new mistakes discovered
- [ ] F-15: HANDOFF-OD-TO-AD.md AD enforcement gate still functional
- [ ] F-16: HANDOFF-OD-TO-AD.md transitive chain documented with any refinements
- [ ] F-17: organizational-patterns.md updated if patterns refined (scores, research provenance)
- [ ] F-18: EXT-RESEARCH-REGISTRY.md updated with new research (new EXT-* entries)
- [ ] F-19: EXT-RESEARCH-REGISTRY.md summary table updated with new totals and rates
- [ ] F-20: STAGE-HEADER.md reflects re-enrichment
- [ ] F-21: OD-RESEARCH-GATE.md post-build verification updated with new application rates
- [ ] F-22: All finding IDs consistent across ALL formal chain documents
- [ ] F-23: Zero finding ID collisions (verify R3-023 = fractal, R3-036 = CRESCENDO per PIPELINE-MANIFEST Section E)
- [ ] F-24: OD-F-005 finding correctly referenced everywhere (no residual collision artifacts)
- [ ] F-25: DD-F consumption verification table updated (OD-outbound-findings Section "DD-F CONSUMPTION VERIFICATION")
- [ ] F-26: Finding consumption matrix updated (OD-outbound-findings Section "FINDING CONSUMPTION MATRIX")

### Category G: Dark Matter Prevention -- 8 items

- [ ] G-01: All existing operational files in scratchpad cataloged (29 audit files + 7 fix files = 36 total)
- [ ] G-02: Every file reviewed for formal-chain-relevant content before completion
- [ ] G-03: References created from formal chain to dark matter where needed
- [ ] G-04: Zero NEW dark matter created during re-enrichment
- [ ] G-05: All Scribe output goes directly into formal chain (not scratchpad)
- [ ] G-06: All Researcher output goes directly into EXT-RESEARCH-REGISTRY (not loose files)
- [ ] G-07: Convention specification lives in formal chain (not just scratchpad)
- [ ] G-08: Re-enrichment process decisions documented in formal chain (not just agent messages)

### Category H: Infrastructure Updates -- 10 items

- [ ] H-01: PIPELINE-MANIFEST updated with any new/refined findings
- [ ] H-02: BACKBONE.md updated to reflect re-enrichment
- [ ] H-03: PATTERN-INDEX updated if patterns refined
- [ ] H-04: Anti-patterns registry updated if new anti-patterns found during re-enrichment
- [ ] H-05: SOUL-DISCOVERIES unchanged (5 soul pieces remain) -- OR updated if found
- [ ] H-06: FINDINGS-INDEX updated with any new findings
- [ ] H-07: RESEARCH-ACTIVE.md updated with new application data and rates
- [ ] H-08: ACCUMULATED-IDENTITY updated from v1 to v1.1 (reflecting re-enrichment)
- [ ] H-09: Stage 3 CLAUDE.md files updated to reflect re-enrichment completion
- [ ] H-10: COMPONENTS-REGISTRY.md reviewed for relevance (no action expected)

### Category I: Traversal Integrity -- 10 items

- [ ] I-01: Forward traversal PASS: all CONSUMED BY sections current
- [ ] I-02: Backward traversal PASS: all BUILT ON sections accurate
- [ ] I-03: Cross-stage traversal: HANDOFF documents bridge correctly between stages
- [ ] I-04: R3-023/R3-036 disambiguation maintained (R3-023 = fractal self-similarity, R3-036 = CRESCENDO)
- [ ] I-05: OD-F-005 finding correctly referenced in: OD-outbound-findings, OD-SYNTHESIS, HANDOFF-OD-TO-AD, organizational-patterns, PIPELINE-MANIFEST
- [ ] I-06: Transitive chain (org -> density -> axis) documented and intact
- [ ] I-07: DD-F findings -> OD consumption -> OD-F findings chain unbroken
- [ ] I-08: EXT-* -> OD HTML -> OD-F findings chain traceable
- [ ] I-09: No dangling references (files referenced that don't exist)
- [ ] I-10: No orphaned files (files that exist but are referenced by nothing)

### Category J: Before/After Comparison -- 12 items

- [ ] J-01: Screenshots at 1440px for all 6 ODs BEFORE re-enrichment
- [ ] J-02: Screenshots at 768px for all 6 ODs BEFORE re-enrichment
- [ ] J-03: Screenshots at 1440px for all 6 ODs AFTER re-enrichment
- [ ] J-04: Screenshots at 768px for all 6 ODs AFTER re-enrichment
- [ ] J-05: Score comparison table (before vs after per exploration, per dimension if available)
- [ ] J-06: Dialect consistency comparison (before: 3 dialects; after: 1 unified or documented intentional divergences)
- [ ] J-07: Research consumption comparison (before vs after rates per OD and overall)
- [ ] J-08: Thin-border count comparison (before vs after per OD)
- [ ] J-09: Page height comparison (before vs after per OD)
- [ ] J-10: Accessibility failure count comparison (before vs after per OD)
- [ ] J-11: Provenance coverage comparison (retroactive vs born-in-chain)
- [ ] J-12: Spirit violation count comparison (before: 5 identified; after: 0 target)

### Category K: Fresh-Eyes Reproducibility -- 8 items

- [ ] K-01: A fresh agent can find how many OD explorations exist (answer: 6) from provenance alone
- [ ] K-02: A fresh agent can find all 6 exploration scores from provenance alone
- [ ] K-03: A fresh agent can find all OD-F finding IDs (17 total) from provenance alone
- [ ] K-04: A fresh agent can find what was audited (89 findings), how many fixes (16), from provenance alone
- [ ] K-05: A fresh agent can find what AD must consume before starting work from HANDOFF alone
- [ ] K-06: A fresh agent can determine the re-enrichment happened and what changed (delta documented)
- [ ] K-07: A fresh agent can trace any OD-F finding back to its source exploration and research
- [ ] K-08: A fresh agent can identify the quality bar (>=32 for INCLUDE, 100% soul, 0 anti-patterns)

### Category L: AD Handoff Readiness -- 14 items

- [ ] L-01: HANDOFF-OD-TO-AD reflects re-enriched state (not original build state)
- [ ] L-02: Quality bar table updated with re-enriched scores (not original ~34 avg)
- [ ] L-03: Research consumption rates updated (both R-1 and EXT-*)
- [ ] L-04: PROVENANCE-CHECKLIST-TEMPLATE still intact and applicable to AD
- [ ] L-05: Mode C (incremental provenance) guidance still intact
- [ ] L-06: Mistakes to Avoid updated if new mistakes discovered during re-enrichment
- [ ] L-07: AD enforcement gate still functional (all mandatory consumption items listed)
- [ ] L-08: Transitive chain documented with any refinements from re-enrichment
- [ ] L-09: OD-to-Axis pairing table current (all 6 pairings)
- [ ] L-10: DD-F findings carried forward section current
- [ ] L-11: R-2 evaluation results included (which of 27 findings applicable for AD)
- [ ] L-12: Re-enrichment lessons added to "OD ITERATION LESSONS" section
- [ ] L-13: OD-002 no longer flagged as "0 external research" (gap closed)
- [ ] L-14: 3-dialect gap noted as "RESOLVED" (no longer a warning for AD)

### Category M: Process Integrity -- 14 items

- [ ] M-01: Gate-based team topology functioned as designed (Researcher -> Builder -> Scribe -> Verifier)
- [ ] M-02: No single agent carried both creative and provenance responsibilities
- [ ] M-03: All gates were binary (file exists or doesn't; test passes or doesn't)
- [ ] M-04: All findings born in chain (not retrofitted post-hoc)
- [ ] M-05: Scribe maintained provenance in real-time (not deferred)
- [ ] M-06: Verifier blocked progress until gates passed (no pass-throughs)
- [ ] M-07: Convention established before building (Wave 0 complete before Wave 1)
- [ ] M-08: Weaver tracked cross-agent state (if applicable)
- [ ] M-09: Per-file ownership prevented contention (if parallel agents used)
- [ ] M-10: HTTP server started before any Playwright-dependent work
- [ ] M-11: Sequential verification (programmatic then visual) for any audit work
- [ ] M-12: Lead did not build or run Playwright (THIN rule)
- [ ] M-13: All agents wrote reports/output before returning (zero data loss)
- [ ] M-14: One committer, one branch (lead commits, never agents)

### Category N: Content & Accessibility -- 10 items

- [ ] N-01: Zero placeholder content in any OD (no lorem ipsum, no TODO markers)
- [ ] N-02: Zero broken internal links in any OD
- [ ] N-03: All code blocks contain valid, functional code
- [ ] N-04: ARIA landmarks correct in all 6 ODs
- [ ] N-05: Tab navigation functional in all 6 ODs (OD-004 tab ARIA was fixed)
- [ ] N-06: Color contrast meeting WCAG 2.1 AA for body text in all 6 ODs
- [ ] N-07: Callout label contrast fixed (was 1.00:1 in original -- CRITICAL)
- [ ] N-08: Keyboard focus indicators visible in all 6 ODs
- [ ] N-09: Skip-to-content link functional in all 6 ODs
- [ ] N-10: Semantic heading hierarchy (h1 -> h2 -> h3, no skips) in all 6 ODs

### Category O: Regression Prevention -- 12 items

- [ ] O-01: All 16 fixes from commit f5357a7 preserved (not reverted by re-enrichment edits)
- [ ] O-02: OD-003 accent-tan (#B8A080) not reintroduced
- [ ] O-03: OD-005 max-width stays at 860px (not reverted to 960px)
- [ ] O-04: Main landmarks not removed from OD-001/002
- [ ] O-05: Heading hierarchy not flattened in any OD
- [ ] O-06: Callout contrast fixes not reverted
- [ ] O-07: Border upgrades (2px -> 3px for Cat 1) not reverted
- [ ] O-08: prefers-reduced-motion not removed
- [ ] O-09: focus-visible styles not removed
- [ ] O-10: Skip-to-content links not removed
- [ ] O-11: Inline code font fix (JetBrains Mono) not reverted
- [ ] O-12: No NEW soul violations introduced (0 border-radius > 0, 0 box-shadow != none)

---

### Checklist Summary

| Category | Items | Domain |
|----------|-------|--------|
| A: Per-Exploration Quality | 27 | Visual, structural, soul compliance |
| B: Convention Uniformity | 22 | Dialect gap closure, accessibility |
| C: Research Enrichment | 20 | Bespoke research, R-1/R-2/EXT-* |
| D: Provenance Layer 1 | 8 | Inline threading headers |
| E: Provenance Layer 2 | 4 | Light provenance sections |
| F: Provenance Layer 3 | 26 | Formal chain documents |
| G: Dark Matter Prevention | 8 | No untracked operational files |
| H: Infrastructure Updates | 10 | Pipeline-wide document updates |
| I: Traversal Integrity | 10 | Forward/backward/cross-stage |
| J: Before/After Comparison | 12 | Visual + metric deltas |
| K: Fresh-Eyes Reproducibility | 8 | Can a new agent navigate the chain? |
| L: AD Handoff Readiness | 14 | Is HANDOFF current and complete? |
| M: Process Integrity | 14 | Team topology, gates, conventions |
| N: Content & Accessibility | 10 | WCAG, ARIA, semantic HTML |
| O: Regression Prevention | 12 | Preserve all prior fixes |
| **TOTAL** | **205** | |

### Critical Path Items (Minimum Viable Re-Enrichment)

If time-constrained, these are the items that MUST pass (failure here = re-enrichment invalid):

1. **A-02:** All 6 ODs score >= 32/40 (INCLUDE threshold)
2. **A-10:** 100% soul compliance across all elements
3. **A-17:** 0 anti-pattern violations
4. **B-01 through B-04:** Convention uniformity on the 4 key dimensions
5. **C-01:** Every exploration received bespoke research
6. **C-09:** R-2 Creative Layouts evaluated
7. **F-09:** HANDOFF-OD-TO-AD rewritten for re-enriched state
8. **K-01 through K-05:** Fresh-eyes reproducibility
9. **O-01:** All 16 prior fixes preserved

Everything else elevates quality. These 9 groups are the floor.

---

## SECTION 11: EXISTING ARTIFACTS INVENTORY

### Formal Chain Documents (Layer 3)

All paths relative to `docs-spa/app/showcase/`.

| File | Path | Lines |
|------|------|-------|
| OD-outbound-findings | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | 828 |
| OD-SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md` | 515 |
| OD-AUDIT-SYNTHESIS | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | 388 |
| HANDOFF-OD-TO-AD | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | 458 |
| OD CLAUDE.md | `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | 145 |
| OD-RESEARCH-GATE | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | exists |
| STAGE-HEADER | `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` | exists |
| EXT-RESEARCH-REGISTRY | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` | 244 |
| organizational-patterns | `DESIGN-SYSTEM/patterns/organizational-patterns.md` | 383 |
| Provenance CLAUDE.md | `DESIGN-SYSTEM/provenance/CLAUDE.md` | 189 |
| **Total formal chain** | | **~3,150 lines** |

### Accumulated Identity

| File | Path | Lines |
|------|------|-------|
| ACCUMULATED-IDENTITY-v1 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` | 539 |

### Dark Matter (Outside Formal Chain)

| Directory | Path (relative to `knowledge-architecture/`) | Files | Lines |
|-----------|-------|-------|-------|
| _od-audit-scratchpad | `_od-audit-scratchpad/` | 29 | ~9,275 |
| _provenance-gap-analysis | `_provenance-gap-analysis/` | 15 | ~11,237 |
| _workflow-metacognition | `_workflow-metacognition/` | 9+1 | ~4,257 |
| _execution-journal | `_execution-journal/` | varies | varies |
| _remediation | `_remediation/` | varies | varies |
| **Total dark matter** | | **51+** | **~32,800+** |

### Inline Threading Headers (Layer 1)

- **490 files** across design-extraction/ and docs-spa/
- Created in Phase 2B (commits f13a5c3, 9daa70c, 1886040, 281755a, 72db76d)

### Light Provenance Sections (Layer 2)

- **244 files** across design-extraction/ and docs-spa/
- Created in Phase 2D (commit e489549)

### OD Exploration Files

All at `docs-spa/app/showcase/explorations/organization/`:

| File | Pattern | Lines (approximate) |
|------|---------|---------------------|
| OD-001-conversational-qa.html | Conversational Q&A | varies |
| OD-002-narrative-arc.html | Narrative Arc | varies |
| OD-003-task-based.html | Task-Based Clusters | varies |
| OD-004-confidence-strata.html | Confidence Strata | varies |
| OD-005-spatial-mapping.html | Spatial Mapping | varies |
| OD-006-creative-emergent.html | Creative/Emergent | varies |

### Cross-Stage Documents (Provenance Root)

| Document | Purpose |
|----------|---------|
| PIPELINE-MANIFEST.md | Master finding registry across all stages |
| BACKBONE.md | Pipeline narrative |
| SOUL-DISCOVERIES.md | 5 soul pieces tracking |
| RESEARCH-ACTIVE.md | Research application tracking |
| PATTERN-INDEX.md | Validated patterns |
| FINDINGS-INDEX.md | Finding registry |

### Knowledge Architecture Working Documents

| File | Path (relative to `knowledge-architecture/`) | Purpose |
|------|------|---------|
| OD-GRANULAR-AUDIT-RESULTS.md | `OD-GRANULAR-AUDIT-RESULTS.md` | 688-line full audit report |
| OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md | `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` | Team lessons, protocol evolution |
| OD-FIX-EXECUTION-PROMPT.md | `OD-FIX-EXECUTION-PROMPT.md` | Fix execution team architecture |
| WORKFLOW-METACOGNITION-ANALYSIS.md | `WORKFLOW-METACOGNITION-ANALYSIS.md` | Binary rule principle, compression analysis |
| OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | `OD-RETROSPECTIVE-AND-PROTOCOL-v2.md` | Earlier retrospective |
| OD-EXECUTION-PROTOCOL.md | `OD-EXECUTION-PROTOCOL.md` | Original execution protocol |
| OD-004-EXTERNAL-RESEARCH.md | `OD-004-EXTERNAL-RESEARCH.md` | EXT-CONF standalone research |
| OD-005-EXTERNAL-RESEARCH.md | `OD-005-EXTERNAL-RESEARCH.md` | EXT-SPAT standalone research |
| OD-GRANULAR-AUDIT-PROMPT.md | `OD-GRANULAR-AUDIT-PROMPT.md` | Audit prompt for reference |

---

## SECTION 12: SCOPE AND BOUNDARIES

### What This Re-Enrichment Covers

1. **All 6 OD exploration HTML files** -- re-enriched with research, conventions, and accumulated findings
2. **Convention establishment** -- unified visual standard across all explorations
3. **Dark matter indexing** -- creating references from formal chain to 51+ operational files
4. **Formal chain updates** -- all Layer 3 documents updated to reflect re-enriched state
5. **Inline header maintenance** -- Layer 1 CONSUMED BY and BUILT ON kept current
6. **Light section updates** -- Layer 2 updated where content changed
7. **Accumulated identity update** -- v1 to v1.1 with enriched findings
8. **HANDOFF rewrite** -- HANDOFF-OD-TO-AD reflecting re-enriched state for AD consumption
9. **Adversarial audit** -- full re-audit of enriched explorations
10. **Before/after documentation** -- screenshots, scores, metrics comparison
11. **R-2 evaluation** -- explicit evaluation of 27 previously unconsumed Creative Layout findings
12. **Spirit violation fixes** -- 5 identified violations addressed

### What This Re-Enrichment Does NOT Cover

1. **AD phase work** -- no AD explorations are built during re-enrichment
2. **New OD explorations** -- the 6 existing explorations are enriched, not replaced or expanded
3. **Design system migration** -- no changes to docs-spa React components
4. **Research stream creation** -- no new R-6+ research streams (bespoke research creates EXT-V entries only)
5. **Fundamental HTML restructuring** -- enrichment, not rewrite. The exploration structure remains; content and styling improve
6. **CLAUDE.md governance rewrite** -- the showcase/CLAUDE.md governance gap is documented but not resolved in this phase
7. **Complexity ratchet cleanup** -- MEMORY.md tiering is deferred
8. **Tool evaluation** -- mem0/knowledge-graph evaluation for threading data is deferred

### Deferred Items

| Item | Why Deferred | When |
|------|-------------|------|
| AD phase | Re-enrichment must complete first | After re-enrichment passes verification |
| CLAUDE.md governance rewrite | Requires broader architectural decision | Future session |
| MEMORY.md tiering | Not blocking; informational only | Future session |
| Tool evaluation (mem0) | Experimental; not critical path | Future session |
| Combination stage (CD) | Depends on AD completion | After AD |
| Design system migration | Depends on all explorations being final | After CD |

---

## END OF SPECIFICATION

**Document Statistics:**
- 12 sections
- 205-item binary success criteria checklist (15 categories)
- 9 critical path item groups (minimum viable re-enrichment)
- 20 hard rules (15 battle-tested + 5 new)
- 8 agent roles defined (5 core + 3 additional)
- 7 waves of execution
- 6 OD explorations covered with per-OD detail tables
- 3 provenance layers specified
- 3 provenance modes documented (A, B, C)

**This specification is the single source of truth for creating an execution plan. A fresh Claude instance reading this document alone should be able to design the complete wave-by-wave agent team architecture for OD re-enrichment.**
