# RETROSPECTIVE MINING: What Actually Happened vs What Was Planned
## Lessons for the AD Skeleton from 6 Prior Team Executions

**Analyst:** retrospective-miner
**Date:** 2026-02-09
**Sources consumed:** 14 documents (2 retrospectives, WORKFLOW-METACOGNITION-ANALYSIS.md, WEAVER-SYNTHESIS.md, MASTER-AUDIT-REPORT.md, CAPTAIN-FIX-REPORT.md, CAPTAIN-FRESHEYES-REPORT.md, FIX-STATE.md, fix-report-fixer-c.md, MEMORY.md, ad-skeleton-synthesis.md, ad-skeleton-gaps.md)
**Target:** Identify every assumption in the AD skeleton that contradicts historical evidence

---

## 1. TEAM 1: OD BUILDERS (First-Ever Agent Team)

### 1.1 What Was Planned
- Parallel builders for 6 explorations
- Generative research loop: accumulate context -> guide research -> refine against identity
- Refinement step before each build
- 6 explorations with iteration
- Lead orchestrates + builds + audits

### 1.2 What Actually Happened
- 6+ sessions, multiple context limit crashes
- Lead was "fat" (built, audited, ran Playwright, managed checkpoints) -- context died
- Refinement loop was dropped for 4/6 explorations (only OD-001 and OD-002 iterated)
- OD-003, OD-004, OD-005 were parallel one-shot builds with zero iteration
- 2 of 5 external research documents LOST to context crashes (OD-001 EXT-CONV, OD-003 EXT-TASK)
- Finding IDs EXT-CONV-001 through EXT-CONV-005 referenced in HTML but no source file exists
- SendMessage confusion -- messages went into text stream, invisible to agents
- Playwright snapshots (~16K tokens each) consumed lead context catastrophically
- showcase/CLAUDE.md (500 lines) was NEVER read by any builder agent -- all 6 ODs are "technically invalid" by its own criteria

### 1.3 Why It Differed
- **Parallel agents can't iterate** -- they terminate after one response
- **Context limits hit hard** -- refinement was the first casualty (most context-expensive operation)
- **Lead did everything** -- zero role separation
- **Research agents didn't persist to file** -- work died with context crashes
- **Governance docs depend on directory traversal** -- spawned sub-agents don't traverse

### 1.4 Skeleton Risk
The skeleton plans 3 build waves of 2 builders each, with iteration. History shows:
- **Builder iteration** depends on prompts mandating self-critique. Skeleton includes this (Section 11.3 Builder Self-Critique). MITIGATED.
- **Research persistence** is addressed by "write to file BEFORE returning." MITIGATED.
- **Lead fat problem** is addressed by THIN lead rule. MITIGATED.
- **UNMITIGATED RISK:** The skeleton assumes builders will follow the 10-item self-check (Section 4.1 AD-BINARY-GATES.md). History shows 100% compliance on binary rules but only if they are SHORT (10 lines). A 10-item checklist is at the boundary. If any items require judgment ("Is research application genuine?"), they will be ignored.

---

## 2. TEAM 2: OD GRANULAR AUDIT (17 Agents)

### 2.1 What Was Planned
- 17 agents in 4-phase wave execution
- 2,154-line audit prompt with 17 sub-checks per agent
- Structured Debate Protocol (prosecution, defense, cross-examination, rebuttal, verdict)
- 30-second focused attention per viewport stop
- Fresh-eyes agent with bias self-correction table

### 2.2 What Actually Happened
- Single session, 45 minutes, zero crashes -- MASSIVE improvement over Team 1
- Lead stayed THIN (zero Playwright, zero building) -- validated the rule
- Context usage at completion: 77% (154K/200K) -- fit in one window
- Adversarial debates were "largely performative" -- nearly all verdicts were IMPROVE (the safe middle)
- Systematic agents hit about 1/3 of the 17 sub-checks described in the prompt
- "30 seconds of attention" was meaningless for non-temporal agents
- Bias self-correction table was included but not operationalizable (agent with confirmation bias can't detect its own confirmation bias)
- Fresh-eyes was the single highest-value agent (2 Nuclear Question contradictions)
- 17 agents was 5-7 too many -- agents 11-17 had LOW marginal value
- Playwright contention STILL occurred within Wave 1 (agents navigated away from each other's tabs)
- Synthesizer agent needed 3-4 shutdown attempts before complying
- Research-ref (file-only, no Playwright) finished FIRST -- validates no-dependency-is-fastest principle

### 2.3 Why It Differed
- **Prompt ambition-to-capacity ratio was 3:1** -- described 3x more work than any agent could do
- **One agent simulating debate lacks genuine epistemic tension** -- knows both arguments simultaneously
- **Time-based instructions are meaningless** for agents (no concept of "30 seconds of attention")
- **The wave model only partially prevents contention** -- within-wave contention still occurs
- **Agent specialization hit diminishing returns** past ~10 agents

### 2.4 Skeleton Risk
The AD skeleton plans 8 audit agents (Section 1.2). History says 10-12 is the sweet spot, 17 was too many. 8 is well within safe range. MITIGATED.

**UNMITIGATED RISKS:**
1. **Playwright contention within audit phase.** Skeleton says "Sequential per-page assignment. Agent 1 finishes AD-001 completely before Agent 2 starts AD-002." This was PLANNED for OD too. Within-wave contention still happened. The skeleton needs ENFORCEMENT, not just planning.
2. **Prompt-to-capacity ratio.** The skeleton's 13 Binary Visual Gates per page (Section 5.1) plus structural checks could exceed agent capacity. v3 retrospective recommends 1.5:1 ratio. The skeleton doesn't specify prompt lengths for audit agents. If audit prompts exceed ~500 lines, agents will approximate.
3. **Planted violation protocol** (Section 5.4) is NEW and UNTESTED. The skeleton assumes 5 planted violations will be caught. What if agents catch 0/5? There's no contingency for "the audit methodology is non-functional."

---

## 3. TEAM 3: OD FIX EXECUTION (7 Agents)

### 3.1 What Was Planned
- 4 fixers with per-file ownership
- 2 verifiers (programmatic then visual, sequential)
- Weaver tracking state
- 16 targeted fixes from the audit report

### 3.2 What Actually Happened
- ALL 16 fixes applied, Fix #17 deferred (subjective)
- Fix #1 (Essence font): **NO FIX NEEDED** -- audit was FALSE POSITIVE caused by font-loading timing
- Fix #7 (dead zone): **NO FIX NEEDED** -- scroll-animation artifact, not structural gap
- Per-file ownership eliminated ALL contention -- zero file conflicts across 4 agents
- Fixer-B (1 file) and Fixer-D (2 files) finished in ~7 min; Fixer-A (2 complex files) ~10 min; Fixer-C (investigation) ~12 min
- All agents wrote reports before returning -- zero data loss
- Programmatic verifier: 187/187 tests PASS, 0 FAIL
- `document.fonts.ready` was CRITICAL -- without it, computed styles report fallback fonts incorrectly
- All 4 fixers independently invented the same 3-category border system (structural=3px, table=2px, micro=2px) without being told to -- EMERGENT convergent behavior

### 3.3 Why It Differed
- **Plan was accurate this time.** Fix execution was the most plan-compliant phase.
- **Two "fixes" turned out to be false positives** from the AUDIT, not the code
- **Per-file ownership is the single most reliable team pattern** -- proven with zero conflicts

### 3.4 Skeleton Risk
AD skeleton adopts per-file ownership (Section 3.5). FULLY MITIGATED.

**KEY FINDING:** The audit produced 2 false positives that the fixers discovered through Playwright investigation. The skeleton plans planted violations (Section 5.4) to calibrate audit accuracy. This is exactly the right response -- but the skeleton should also plan for the inverse: **audit findings that fixers disprove.** The fix phase should include investigation as well as application.

---

## 4. TEAM 4: COMPREHENSIVE HIERARCHICAL AUDIT (~58 Agents)

### 4.1 What Was Planned
- Hierarchical topology: Lead -> 7 direct reports (6 Captains + Weaver)
- 6 phases: Setup -> Parallel Audit -> Fresh Eyes -> Cross-Reference -> Fix+Scribe -> Verify
- 4 audit pillars: Visual, Structural, Provenance, Triage
- Captains spawning workers via Task tool

### 4.2 What Actually Happened
- Hierarchical topology VALIDATED -- Lead managed 7 direct reports, zero Lead compactions
- **Workers spawned by captains via Task tool frequently completed without writing files** -- THE critical failure mode
- Provenance/Triage workers (file-only, no Playwright) wrote files reliably
- Visual/Structural workers (Playwright + file writing) did NOT write files reliably
- V1 captains (Visual, Structural) required respawn as v2 with explicit "MUST use Write tool" instructions
- Captain-FreshEyes required FULL REPLACEMENT with a single recovery agent after 25 min of no worker output
- Single recovery agents (doing work directly, not spawning workers) were MORE reliable than captain->worker hierarchies
- Scribes spawned as direct recovery agents (not through Captain-Fix) worked perfectly
- **Playwright contention severe**: only 2 of 13 visual workers got actual Playwright access; remaining 11 fell back to source-code analysis
- 2 of 4 captains wrote to NON-STANDARD file paths (different directories than expected) -- Weaver found them via broad Glob search
- Fresh-eyes recovery agent produced 66 findings with 6 UNIQUE FRESH -- exceeding the threshold of 3
- 10 Critical/High fixes applied successfully with zero new soul violations

### 4.3 Why It Differed
- **Task tool workers are unreliable file writers.** They complete their work but don't use the Write tool to persist output. This is THE dominant failure mode for hierarchical teams.
- **Playwright is a scarce resource.** 13 visual workers competing for 1 browser instance means only 2 get real access. The rest improvise.
- **Captain->worker topology adds a reliability layer** that can FAIL (captain spawns worker, worker doesn't write, captain doesn't know). Direct agents (captain does the work itself) are more reliable but don't parallelize.

### 4.4 Skeleton Risk
The AD skeleton uses FLAT topology for build (4 direct reports to Lead) and recommends 8 agents for audit. This avoids the captain->worker hierarchy entirely. MITIGATED.

**UNMITIGATED RISKS:**
1. **File-write enforcement.** Even with flat topology, builders spawned via Task tool might not write files. The skeleton includes the "CRITICAL: You MUST write your output file" prompt text (Section 1.4). But history shows this text was ALREADY in v1 captain prompts and failed -- it required explicit v2 respawn. The RULE is necessary but not sufficient. Recovery protocol for non-writing agents is needed.
2. **Playwright contention during build.** 6 builders constructing HTML don't need Playwright during construction. But if they need to preview their work, contention returns. The skeleton doesn't address whether builders should preview their own work.

---

## 5. OD RE-ENRICHMENT (43 Agents)

### 5.1 What Was Planned
- 43-agent gate-based team, 7 waves (0-6)
- Mode C provenance (write as you discover)
- Comprehensive re-enrichment of all 6 OD explorations

### 5.2 What Actually Happened
- 92 files changed, 15,000 insertions, 3,035 deletions
- 3+ Lead compactions (flat 43-agent topology overwhelmed context)
- Successfully enriched all 6 OD files
- Created the 3-dialect gap (Polished/Functional/Editorial) as a TEMPORAL ARTIFACT of the build sequence
- Research application rate remained low (9.79% of 337 findings applied)
- Post-re-enrichment, chain infrastructure documents were NOT updated (PIPELINE-MANIFEST, EXT-RESEARCH-REGISTRY, STAGE-HEADER)
- This metadata drift was only discovered by the COMPREHENSIVE AUDIT (Team 4)

### 5.3 Why It Was Needed At All
The re-enrichment was a REMEDIATION phase that should not have been necessary. It existed because:
- OD was built without conventions (convention spec came AFTER building)
- Research was applied haphazardly (no pre-build research packages)
- No systematic enrichment process during initial build

### 5.4 Skeleton Risk
The AD skeleton's convention-first architecture (Section 4.1) is explicitly designed to eliminate the need for re-enrichment. AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html are created BEFORE any building. This is the skeleton's HIGHEST-VALUE architectural decision.

**UNMITIGATED RISK:** The skeleton assumes convention-first eliminates re-enrichment. But the re-enrichment also DISCOVERED the 3-dialect gap. If AD convention spec has an ERROR, all 6 builders will replicate it. There's no intermediate check between convention creation and build completion. GAP-P01 (authority laundering) is the correct diagnosis. The skeleton proposes "AD-CONVENTION-SPEC.md must be committed and human-reviewed BEFORE Wave 1." This is a judgment rule, not a binary one. History says judgment rules achieve ~0% compliance. Converting this to binary: "Gate 0-06 includes line count AND Lead reads the file AND confirms PASS before Wave 1 spawns" -- the Lead reading it is the judgment component.

---

## 6. PROVENANCE CHAIN REMEDIATION (18 Agents)

### 6.1 What Was Planned
- 18-agent team, 5 waves
- Create formal OD provenance chain
- Fill provenance gaps identified in prior analysis

### 6.2 What Actually Happened
- 27 files changed, 5,423 insertions, 336 deletions
- Formal provenance chain created and verified
- 94/104 verification items passed
- Proved that provenance is EXPENSIVE -- 18 agents for metadata, not product

### 6.3 What This Tells Us About Skeleton Assumptions
The AD skeleton embeds provenance incrementally (Mode C -- "write it when you discover it"). This is the correct response to the remediation lesson. But:
- **Mode C has never been tested in a build context.** Builders have never been asked to stop building, assign a finding ID, write a finding block, and resume building. This is a context-switching task that may cause builders to lose thread of their construction work.
- **Finding ID collision prevention** (Section 3.3 reserved ranges) is a direct response to OD-F-005 collision where two agents chose the same ID. The reserved ranges are novel and untested.

---

## 7. PLANNED-VS-ACTUAL DELTA TABLE

| Team | What Was Planned | What Actually Happened | Why It Differed | Skeleton Risk |
|------|-----------------|----------------------|-----------------|---------------|
| **1: Builders** | Parallel builders with iteration + refinement | One-shot builds, 4/6 no iteration, 2/5 research docs lost | Parallel agents can't iterate; context crashes | MITIGATED (thin lead, file persistence, self-critique prompt) |
| **1: Builders** | Lead orchestrates everything | Lead ran Playwright, built, audited -- context died | No role separation | MITIGATED (THIN lead rule, Section 1.3) |
| **1: Builders** | showcase/CLAUDE.md governs all work | Zero agents read it -- all output "technically invalid" | Spawned agents don't traverse directories | MITIGATED (10-line soul checklist embedded in prompts, Section 11.2) |
| **2: Audit** | 17 sub-checks per agent via JavaScript eval | Agents completed ~1/3 of sub-checks | 3:1 prompt-to-capacity ratio | PARTIALLY MITIGATED (skeleton doesn't specify prompt lengths) |
| **2: Audit** | Structured Debate Protocol | Performative debates, nearly all IMPROVE verdicts | Single agent simulating two sides lacks genuine tension | NOT ADDRESSED (skeleton doesn't mention adversarial pairing) |
| **2: Audit** | 30-second attention per viewport | Meaningless for non-temporal agents | Time-based instructions incompatible with LLMs | MITIGATED (skeleton uses question-based gates, not time-based) |
| **2: Audit** | No Playwright contention (wave model) | Within-wave contention still occurred | Multiple agents share one browser | PARTIALLY MITIGATED (skeleton says sequential per-page but doesn't enforce) |
| **3: Fix** | 16 fixes from audit findings | 2 findings were false positives (font-loading, scroll animation) | Audit limitations not calibrated | MITIGATED (planted violation protocol, Section 5.4) |
| **3: Fix** | Per-file ownership | Zero conflicts | Plan was correct | FULLY MITIGATED (skeleton uses per-file ownership) |
| **4: Hier. Audit** | Captain->worker hierarchy | Workers didn't write files; captains needed respawn | Task tool workers are unreliable file writers | MITIGATED (flat topology for build, but file-write enforcement is necessary-not-sufficient) |
| **4: Hier. Audit** | 13 visual workers get Playwright access | Only 2/13 got access; 11 fell back to source analysis | Single browser instance is scarce resource | MITIGATED (skeleton limits to 3 visual audit agents with sequential access) |
| **4: Hier. Audit** | Fresh-eyes captain spawns workers | Captain failed; replaced with single recovery agent | Captain->worker adds fragile layer | MITIGATED (skeleton uses flat fresh-eyes agent) |
| **5: Re-Enrichment** | 43 agents enrich comprehensively | 3+ Lead compactions, metadata drift undiscovered | Flat 43-agent topology overwhelmed context | MITIGATED (skeleton never exceeds 8 concurrent agents) |
| **5: Re-Enrichment** | Convention-compliant enrichment | Created 3-dialect gap because conventions came after building | No convention-first architecture | MITIGATED (AD-CONVENTION-SPEC.md before any build -- THE highest-value change) |
| **6: Provenance** | 18 agents create chain | Created but expensive (18 agents for metadata) | Provenance is inherently meta-work | PARTIALLY MITIGATED (Mode C incremental, but untested during build) |

---

## 8. THE SKELETON'S BLIND SPOTS

Based on all retrospectives, here are every assumption in the skeleton that contradicts or lacks historical evidence:

### 8.1 Assumptions That Contradict History

| # | Skeleton Assumption | Historical Evidence Against It | Risk Level |
|---|---------------------|-------------------------------|-----------|
| 1 | "10-item self-check every builder runs before completion" (Section 4.1) | Binary checklists work at 100% only when items are TRULY binary. "Is research application genuine?" is judgment. | MEDIUM |
| 2 | "Sequential per-page Playwright assignment" prevents contention (Section 5.1) | Within-wave contention occurred despite sequential PLANNING in OD audit | HIGH |
| 3 | "Convention-first eliminates re-enrichment" (Section 4.1) | A convention spec ERROR propagates to all 6 builders with no intermediate check | HIGH |
| 4 | "Mode C incremental provenance during build" (Section 3.1) | Mode C has NEVER been tested during construction. Builders stopping mid-build to assign IDs and write findings may lose construction thread | MEDIUM |
| 5 | "Planted violation protocol gives calibrated detection rate" (Section 5.4) | This is completely novel -- no historical data. If detection rate is low, there's no contingency | MEDIUM |
| 6 | "6 research packages produced in Phase 0" (Section 4.2) | Research agents in Team 1 lost 2/5 documents to context crashes. Phase 0 researchers may similarly fail to persist. | LOW (mitigated by file-write rule, but pattern has failed before) |
| 7 | "Weaver monitors convention drift DURING build" (Section 5.5) | Weaver has historically been AFTER-THE-FACT (cross-referencing post-build). Real-time monitoring during build is untested | MEDIUM |
| 8 | "Identity delta written between waves" (Section 4.6) | Identity deltas are a novel concept. No prior team has written inter-wave identity evolution. Whether this produces value or just more meta-work is unknown | LOW |

### 8.2 Assumptions That Lack Evidence (Neither Confirmed Nor Contradicted)

| # | Skeleton Assumption | Why Evidence Is Missing | Risk Level |
|---|---------------------|------------------------|-----------|
| 1 | "AD-SOUL-TEMPLATE.html ensures convention compliance structurally" | No prior stage used a soul template as a starting point | MEDIUM |
| 2 | "Anti-citation-theater measures will catch fake citations" (Section 4.4) | Citation theater was never audited programmatically before | HIGH |
| 3 | "Reserved finding ID ranges prevent collision" (Section 3.3) | OD-F-005 collision happened with ad-hoc IDs. Ranges are the fix, but never tested | LOW |
| 4 | "Batched build (2 per wave) is better than all-parallel (6)" | Team 1 did 3 parallel with mixed results. Team 3 did 4 parallel fixers successfully. No test of 2-at-a-time build | LOW |
| 5 | "EXT-AXIS-* research can be produced during Phase 0" | EXT-* research has been produced both before and during build, with variable quality | MEDIUM |

---

## 9. BINARY RULE COMPLIANCE ANALYSIS

The metacognition analysis found: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

### 9.1 Skeleton Gates That Are Genuinely Binary

These will achieve 100% compliance:
- GATE 0-04: Working directories exist (file existence check)
- GATE 0-06: AD-CONVENTION-SPEC.md exists, >= 300 lines (file existence + line count)
- GATE W-04: 0 border-radius > 0 (programmatic sweep)
- GATE W-05: 0 box-shadow != none (programmatic sweep)
- GATE W-06: 0 filter effects (programmatic sweep)
- GATE W-07: 0 instances of 2px borders (programmatic sweep)
- GATE W-08: 0 rgba with alpha < 1 (programmatic sweep)
- GATE 6-13: Git status shows only intended changes (git check)

### 9.2 Skeleton Gates That Contain Hidden Judgment

These LOOK binary but contain judgment components that will degrade:

| Gate | Surface Appearance | Hidden Judgment | Expected Compliance |
|------|-------------------|-----------------|---------------------|
| GATE 0-07: "all values labeled T1/T2" | Binary (label present/absent) | Deciding WHETHER a value is T1 or T2 requires judgment about research backing | 60-80% (labels will be present but accuracy unverifiable) |
| GATE 0-08: "renders correctly" | Binary (renders/doesn't) | "Correctly" is a judgment call on visual quality | ~50% (will render; "correctly" is subjective) |
| GATE 0-12: ">= 5 EXT-AXIS-* findings per AD, all SOUL PASS" | Binary (count + pass/fail) | Whether findings are substantive or padding to hit the count is judgment | 80% (count will be met; quality varies) |
| GATE W-03: "matches AD-CONVENTION-SPEC" | Binary (match/no match) | Determining what "matches" means for complex CSS values requires interpretation | 70% (obvious values will match; edge cases won't) |
| GATE W-09: "font trio correct" | Binary | Correct WHERE? In :root? In all elements? History shows font-loading timing makes computed style checks unreliable | 90% (mostly correct, but font-loading false positives possible) |
| GATE W-11: ">= N citations per file with evidence" | Binary (count) | Whether evidence is GENUINE or citation theater is judgment | 50% (count will be met; evidence quality is metacognition's 6.53% problem) |
| GATE 4-03: ">= 3 UNIQUE FRESH findings" | Binary (count) | "UNIQUE" requires judgment about novelty vs overlap | 70% (findings will be produced; uniqueness is debatable) |

### 9.3 Rules That Are Judgment Disguised as Binary

The skeleton's most dangerous patterns are rules that LOOK binary but ARE judgment:

1. **"Each citation must point to a specific HTML/CSS element"** (Section 4.4) -- Pointing to an element is binary. But whether the element ACTUALLY implements the cited finding is judgment. An agent can point to a `<div>` and say "R4-012 applied here" without R4-012 having influenced the div's design at all.

2. **"Discrepancy = citation theater flagged"** (Section 4.4) -- Detecting discrepancy between fresh-eyes observations and citation claims requires comparing two subjective assessments. This is judgment cubed.

3. **"Research Application Record present in each file"** (Section 2.3 GATE W-10) -- Presence is binary. But whether the record is ACCURATE (vs boilerplate) is judgment. History shows research application records were present in all OD files but the application rate was 9.79%.

---

## 10. THE TOP 10 LESSONS HISTORY TEACHES THE SKELETON

### Lesson 1: Convention-First Is the Highest-Value Architectural Decision
The 3-dialect gap, the re-enrichment necessity, and the metadata drift all trace to building without conventions. The skeleton addresses this. This is the ONE thing the skeleton gets most right.

### Lesson 2: File-Write Enforcement Is Necessary But Not Sufficient
"CRITICAL: You MUST write your output file" was in v1 captain prompts and FAILED. It required v2 respawns. The skeleton includes this text but should also include: "If no output file exists 15 minutes after agent spawn, Lead respawns agent with simplified prompt."

### Lesson 3: Playwright Is a Scarce Resource -- Plan for Scarcity, Not Abundance
2/13 visual workers got Playwright in the comprehensive audit. The skeleton plans sequential per-page access, which is correct, but should also plan for: "What if Playwright is unavailable? Fallback to source-code analysis with explicit acknowledgment of reduced confidence."

### Lesson 4: Fresh-Eyes Produces the Highest-Value-Per-Agent Findings
Fresh-eyes: 1 agent, 6 UNIQUE findings no other agent caught. Cost: minimal. Value: irreplaceable. The skeleton includes fresh-eyes (Section 5.3). This is validated.

### Lesson 5: The 2-False-Positive Discovery Means Fix Phase Must Include Investigation
Fixer-C's Playwright investigation disproved 2 audit findings. The skeleton's fix phase should explicitly include: "Before fixing a finding, fixers may investigate whether the finding is valid. If investigation disproves the finding, document the false positive."

### Lesson 6: Single Recovery Agents Are More Reliable Than Captain->Worker Hierarchies
Captain-FreshEyes failed completely. Its replacement (a single direct agent doing the work) succeeded. The skeleton avoids captain->worker for build phase. This is correct.

### Lesson 7: Prompt-to-Capacity Ratio of 1.5:1 Is Optimal
The 2,154-line audit prompt achieved ~1/3 completion (3:1 ratio). The skeleton doesn't specify prompt lengths. It should: "Each agent prompt MUST be under 200 lines. If longer, split into multiple agents."

### Lesson 8: Mode C Incremental Provenance Is Untested During Build
The skeleton's Mode C approach (builders stop building to write findings) has never been tested. The risk is that context-switching degrades build quality. Mitigation: "Builders may defer finding registration to the END of their build session, within the same spawn. Registration must happen before the builder returns."

### Lesson 9: The Orchestrator Trap Has No Mitigation
The user is the single point of failure. If they sleep during the build phase (as they did during audit), gates can't be checked. The skeleton's gates are binary, which SHOULD enable Lead to check them autonomously. But Lead compaction (which happened in the 43-agent re-enrichment) would reset the gate-checking state. Recovery protocol (Section 10.2) addresses this, but recovery itself takes context.

### Lesson 10: Judgment Rules Will Be Ignored -- Accept This or Binarize
6.53% research application rate. "Apply research rigorously" = judgment rule = ~0% compliance. The skeleton's citation requirements (Section 7.3: "Min R-4: 15 per file") are COUNTS, which are binary. But whether the citations are genuine is judgment. The skeleton's anti-citation-theater measures (Section 4.4) are themselves judgment rules. This creates an infinite regress: the rule checking whether another rule was followed is itself a judgment rule.

**The honest answer:** Accept that research application will be imperfect. Focus enforcement on the binary components (count, ID format, element reference) and use fresh-eyes as the gestalt check on quality. Don't build elaborate judgment-based verification systems -- they achieve ~0% compliance too.

---

## 11. EMERGENT PATTERNS ACROSS ALL 6 TEAMS

### Pattern A: Each Team's Greatest Innovation Was Improvised, Not Planned
- Team 1: Weaver role (emerged from necessity, not planned)
- Team 2: Fresh-eyes (was in the plan but its VALUE was unexpected)
- Team 3: Fixer-C investigation disproving findings (not in fix protocol)
- Team 4: Single recovery agents replacing failed captains (not in plan)
- Re-enrichment: Convention spec concept (created to fix dialect problem)
- Remediation: Mode C concept (created to fix deferred provenance)

**Implication for skeleton:** Leave room for improvisation. The skeleton is 730 lines. Not every contingency can be pre-planned. The skeleton's recovery protocol (Section 10) is the right approach -- it specifies HOW to recover, not WHAT will go wrong.

### Pattern B: The Most Reliable Agents Have the Fewest Dependencies
- Research-ref (file-only, no Playwright): finished first in audit
- Provenance/Triage workers (file-only): wrote files reliably in comprehensive audit
- Per-file fixers (one file each, no shared state): zero conflicts

**Implication for skeleton:** Minimize agent dependencies. The skeleton's per-file ownership (Section 3.5) and sequential Playwright access are correct applications of this pattern.

### Pattern C: Every Team Discovered Something The Previous Team Missed
- Team 1: Discovered OD-F-005 "Organization IS Density" (accidental)
- Team 2: Discovered the 3-dialect gap and 2 Nuclear Question contradictions
- Team 3: Discovered 2 false positives in Team 2's findings
- Team 4: Discovered rgba() epidemic (102 instances across 10/12 pages) that Team 2 missed
- Re-enrichment: Discovered that research application was only 9.79%
- Remediation: Discovered provenance gaps in 104 verification items

**Implication for skeleton:** Plan for DISCOVERING things you don't know. The skeleton's fresh-eyes protocol and planted violations are the right mechanism. But also: expect AD to discover things about axis geometry that no prior planning can anticipate. The skeleton should include an explicit "Discovery Protocol" -- what to do when a builder discovers something unexpected (stop, document, notify Lead, continue).

### Pattern D: Meta-Work Always Exceeds Product Work
- Meta-to-output ratio: 2.6:1 (47,944 lines infrastructure vs 18,428 lines product)
- 39 of 40 commits are process, not product
- 97.5% of planning content is NOT on the critical execution path

**Implication for skeleton:** The skeleton itself is meta-work. Its 730 lines will spawn thousands of lines of working artifacts. Accept this ratio. But also: actively resist meta-work expansion. The skeleton's 30-file limit for working directory (from the gap analysis GAP-P04) is a good binary constraint.

---

## 12. FINAL ASSESSMENT: SKELETON READINESS

### What the Skeleton Gets Right (Proven by History)
1. THIN lead rule (validated by Teams 2, 3, 4)
2. Per-file ownership (validated by Team 3)
3. File-write enforcement in prompts (validated by Team 4, with caveats)
4. Convention-first architecture (directly addresses re-enrichment failure)
5. Fresh-eyes as mandatory audit component (validated by Teams 2, 4)
6. Weaver as persistent infrastructure (validated by Teams 1, 2, 3, 4)
7. Wave execution with sequential gates (validated by Teams 2, 3)
8. Binary soul checklist embedded in every prompt (validated by Teams 1, 2, 3, 4)
9. Reserved finding ID ranges (directly addresses OD-F-005 collision)
10. Recovery protocol with state files (prophylactic paradox -- designing for failure prevents failure)

### What the Skeleton Gets Wrong or Leaves Unaddressed
1. No prompt length limits for agents (history says >500 lines = ~33% completion)
2. No fallback for Playwright unavailability
3. No agent respawn protocol for non-writing agents (beyond the prompt text)
4. Mode C incremental provenance is untested during build
5. Anti-citation-theater measures are judgment rules that will achieve ~0% compliance
6. No explicit investigation step in fix phase for potential false positives
7. Gate 0-08 ("renders correctly") is a judgment gate disguised as binary
8. Inter-wave identity deltas are novel and untested
9. Weaver real-time convention monitoring during build is untested
10. No contingency for planted violation detection rate being low

**Bottom line:** The skeleton is the best-informed plan in the project's history. It directly addresses the top failures from all 6 teams. Its remaining risks are mostly in NOVEL territory (things that have never been tried) rather than REPEATED territory (things that have failed before). This is the right risk profile -- the skeleton has learned from the past. Its challenge is the future.
