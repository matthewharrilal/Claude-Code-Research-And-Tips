# Cross-Reference: PV2-ARCHITECTURE-DIAGRAM vs pv2-relationship-map.md

**Author:** Relationship Map Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** Cross-reference the diagram's skill invocation chain against the relationship map's dependency graph
**Context:** ALWAYS FLAGSHIP mode

---

## TABLE OF CONTENTS

1. [Skill Invocation Chain Comparison](#1-skill-invocation-chain-comparison)
2. [Relationships the Map Identifies That the Diagram Misses](#2-relationships-the-map-identifies-that-the-diagram-misses)
3. [Relationships the Diagram Shows That the Map Misses](#3-relationships-the-diagram-shows-that-the-map-misses)
4. [Circular Dependencies](#4-circular-dependencies)
5. [How Relationships Change with ALWAYS FLAGSHIP](#5-how-relationships-change-with-always-flagship)
6. [Critical Path Analysis](#6-critical-path-analysis)
7. [Cross-Reference with pipeline-v2-architecture.md](#7-cross-reference-with-pipeline-v2-architecturemd)
8. [Findings Summary](#8-findings-summary)

---

## 1. SKILL INVOCATION CHAIN COMPARISON

### 1A. The Diagram's Invocation Chain (from PV2-ARCHITECTURE-DIAGRAM.html)

The HTML diagram presents a 7-step sequential flow:

```
Step 1: /build-page [content-source] [tier?]
Step 2: Orchestrator classifies tier
Step 3: TC Pipeline Phases 0-3.5 (content analysis)
  GATE: Handoff Validation (binary checks on _build-plan.md)
Step 4: Builder receives package (recipe + build-plan + design system files)
Step 5: Build Execution Phases 0-8
  LAYER 1: Programmatic Gates (12 binary checks, during + after)
  LAYER 2: Perceptual Audit (/perceptual-auditing skill)
Step 6: Fix Integration (if needed)
Step 7: Ship Decision (SHIP / FIX / ESCALATE)
```

The skill propagation section (Section 3 of diagram) shows:

```
/build-page (~350 lines, orchestrator)
  |
  +--INVOKES--> /tension-composition (~1,878 lines)
  |               |
  |               +--READS--> mechanism-catalog.md (Layer 3)
  |               +--READS--> tokens.css + prohibitions.md (Layers 1-2)
  |               |
  |               +--RETURNS--> _build-plan.md
  |
  +--ROUTES TO--> Opus Builder
  |               |
  |               +--READS--> operational-recipe.md (~650 lines)
  |               +--READS--> _build-plan.md (from TC)
  |               +--READS--> merged-components.css (Layer 4)
  |               +--READS--> tokens.css + prohibitions.md
  |               +--READS--> mechanism-catalog excerpts (Ceiling+ only)
  |
  +--INVOKES--> /perceptual-auditing (~774 lines)
```

### 1B. The Relationship Map's Dependency Graph (from pv2-relationship-map.md)

The relationship map presents a different framing. Rather than a linear flow, it provides a file-by-file analysis organized around:

- **TC SKILL.md** (Phases 0-5): Content analysis, metaphor derivation, mechanism selection
- **PA SKILL.md**: Post-build perceptual audit with 48 questions
- **compositional-core/CLAUDE.md**: Phase-gated building protocol and routing
- **design-system/CLAUDE.md**: Root navigation
- **semantic-rules.md**: Gap-filling semantic rules
- **File 42**: The 9-phase operational recipe
- **Codification Map**: 10 edits mapped to specific files

The relationship map defines these relationships:

| Existing File | PV2 Relationship |
|---------------|-----------------|
| TC SKILL.md | WRAP + PARTIAL REPLACE (Phases 0-3 wrapped, Phase 4 replaced by recipe approach) |
| PA SKILL.md | ENHANCE (add perception thresholds) + SUPPLEMENT (builder-facing verification) |
| compositional-core/CLAUDE.md | ENHANCE (expand Phase 6, add agent comms, model selection, routing fix) |
| design-system/CLAUDE.md | ENHANCE (add PV2 routing entry) |
| semantic-rules.md | ENHANCE (add S-09 stacking rule) |
| File 42 | INCORPORATE as PV2 building phase |
| Codification Map | EXECUTE then ARCHIVE |

### 1C. Point-by-Point Match Analysis

| Aspect | Diagram | Relationship Map | Match? |
|--------|---------|-----------------|--------|
| /build-page as orchestrator | YES - ~350 lines, thin orchestrator | NOT SPECIFIED as a skill - proposes "Pipeline v2 Router" (~100 lines in compositional-core/CLAUDE.md) | MISMATCH |
| TC Phases 0-3.5 invoked for Ceiling+ | YES | YES (Section 1A: "WRAP Phases 0-3 unchanged") | MATCH |
| TC Phase 4 relationship | Diagram implies TC outputs _build-plan.md, builder executes recipe | Map says "REPLACE Phase 4 with File 42's recipe-format phases" | PARTIAL MATCH - diagram is more nuanced (Phase 4 still provides mechanism selection) |
| Handoff validation gate | YES - explicit binary checks on _build-plan.md | NOT MENTIONED - no intermediate gate between TC output and builder intake | DIAGRAM ONLY |
| Builder reads operational-recipe.md | YES | YES (Section 1F: "The recipe IS Pipeline v2's building phase") | MATCH |
| Builder reads mechanism-catalog.md | YES (full catalog) | YES (Section 1C: "builder needs the FULL catalog") | MATCH |
| Builder reads merged-components.css | YES (explicit in file routing) | NOT MENTIONED for builder - only references tokens.css + prohibitions.md for builder | DIAGRAM ONLY |
| PA SKILL invoked post-build | YES - full Mode 4 for Flagship | YES - unchanged external audit tool | MATCH |
| Programmatic gates (gate-runner) | YES - 12 gates during + after build | YES but less specific - mentions per-phase perception checks from File 42, not a separate gate-runner.js | PARTIAL MATCH |
| Fix integration loop | YES - max 3 cycles, top 3 blocking issues | NOT SPECIFIED | DIAGRAM ONLY |
| Enrichment feedback paths | YES - Section 8 maps 5 enrichment propagation paths | NOT ADDRESSED | DIAGRAM ONLY |
| 4-wave Flagship architecture | YES - Wave 0 (TC) -> Wave 1 (Build) -> Wave 2 (PA) -> Wave 3 (Fix) | NOT MENTIONED - map discusses general team architecture but not wave sequencing | DIAGRAM ONLY |
| perception-thresholds.md as standalone file | YES (mentioned in verification section) | Proposed as Change 2 applied to PA SKILL, NOT as standalone file | MISMATCH |

---

## 2. RELATIONSHIPS THE MAP IDENTIFIES THAT THE DIAGRAM MISSES

### 2A. TC Phase 4's Ongoing Role

**Map says (Section 2A):** TC Phase 4 contains mechanism selection logic, coherence rules (C1-C5), fractal verification (Step 4.7), and divergence verification (Phase 5) that the recipe does NOT replicate. The map explicitly states "TC UNIQUE" for mechanism deployment, fractal consistency, and divergence verification.

**Diagram shows:** TC outputs _build-plan.md (Step 3), then the builder executes the recipe (Step 5). TC Phase 4's mechanism selection framework is invisible in the diagram's flow. The builder reads "mechanism-catalog excerpts (Ceiling+ only)" but the diagram does not show WHO selects those excerpts or HOW.

**Impact for ALWAYS FLAGSHIP:** This is SIGNIFICANT. For Flagship, TC Phase 4's mechanism selection with per-category minimums (Spatial 1+, Temporal 1+, Material 1+, Behavioral 1+, Relational 1+) is the difference between a mechanistically rich page and a mechanistically thin one. The diagram implies TC Phase 3.5 is the last TC step before builder handoff, but the map shows Phase 4 and Phase 5 are critical for Flagship quality.

### 2B. The 3-Document Model

**Map proposes (Section 5E):** Pipeline v2 should produce THREE documents:
1. Pipeline v2 Router (~100 lines, in compositional-core/CLAUDE.md)
2. Pipeline v2 Derivation (TC SKILL.md ~1,900 lines, consumed by PLANNER)
3. Pipeline v2 Building Recipe (~1,800 lines from File 42, consumed by BUILDER)

**Diagram shows:** A 4-entity model (build-page skill + TC skill + operational-recipe + PA skill). The map's Router is absorbed into the build-page skill, and the map's Derivation is TC unchanged. But the map frames the recipe at ~1,800 lines while the diagram frames it at ~650 lines.

**Impact for ALWAYS FLAGSHIP:** The 1,800 vs 650 line discrepancy is critical. If ALWAYS FLAGSHIP, the builder needs MORE context (full mechanism catalog application, isomorphism tables, metaphor-driven zone semantics) which inflates the recipe beyond 650 lines. The map's estimate may be more realistic for Flagship builds.

### 2C. Overlap and Conflict Analysis

The relationship map provides a detailed Phase Mapping table (Section 2A) identifying 18 activities and classifying each as "TC UNIQUE", "F42 UNIQUE", "OVERLAP", or "COMPLEMENT". The diagram has no equivalent. Key overlaps the diagram does not surface:

1. **Perceptual guardrails:** Both TC Phase 4.0 and File 42 Phase 2 contain the same container/CPL/line-height values. The map identifies F42's format as SUPERIOR (compliance is automatic via embedded CSS).

2. **Landmark verification:** Both TC Step 4.7B and File 42 Phase 1 verify header/main/footer. The map says "F42 bakes it in."

3. **Tokenization:** TC Step 4.9 checks token compliance after the fact; File 42 prevents the issue by using tokens from the start. The map says "F42 approach is superior."

4. **Coherence checking:** TC Step 4.3 (metaphor-direction checking) and File 42 Phase 6 (transition variation) are COMPLEMENTARY, not redundant. Both are needed. The diagram's flow does not show this dual coherence check.

### 2D. Hard Conflicts

The map identifies 4 hard conflicts (Section 3A) that the diagram does not address:

| # | Conflict | Map's Finding | Diagram's Treatment |
|---|----------|--------------|-------------------|
| C1 | Phase numbering collision (TC 0-5 vs F42 0-8) | "HIGH -- confuses agents about which phase they're in" | Diagram uses F42's numbering (0-8) without acknowledging TC's numbering |
| C2 | Zone approach divergence | "MEDIUM -- metaphor-driven vs content-arc at different tiers" | Diagram always uses F42's zone approach (Phase 0: Content Analysis + Zone Architecture) |
| C3 | Stacking gap threshold (96px vs 120px vs 192px) | "HIGH -- three different numbers for the same concern" | Diagram uses two numbers (108px Flagship, 120px Middle/Ceiling) which is DIFFERENT from both the map and pipeline-v2-architecture.md |
| C4 | Background delta (10 vs 15 RGB) | "LOW -- 15 RGB is the researched value" | Diagram uses 15 RGB (aligned with research) |

**The stacking gap is the most dangerous unresolved conflict.** The diagram says 108px/120px. The map says 96px/120px/192px. The pipeline-v2-architecture.md says 96px per-property + 192px total gate. Three different schemes across three documents.

### 2E. Semantic-Rules.md Dependencies

The map identifies semantic-rules.md as a file that should be ENHANCED with S-09 stacking rule expansion (Change 5 from codification map) and CONSULTED during building for callout selection, table styling, and zone architecture.

The diagram does not mention semantic-rules.md at all -- it is absent from the file routing diagram (Section 7 of the HTML). This means the builder has no path to semantic gap decisions for Info vs Context vs Note callouts, inline vs block code, or table styling.

### 2F. The "Neither Covers" Gap

The map identifies three things NEITHER TC nor File 42 covers (Section 2B):
- Agent communication protocol
- Model selection guidance
- Information routing to builder agents

The diagram's "Flagship 4-Wave Architecture" section (Section 6) addresses agent communication IMPLICITLY (Wave 0 completes before Wave 1, Wave 2 uses screenshot pre-capture pattern), but does not address it as a PROTOCOL. The map explicitly calls out that file-only communication was the confirmed quality bottleneck (codification-map Change 8).

---

## 3. RELATIONSHIPS THE DIAGRAM SHOWS THAT THE MAP MISSES

### 3A. Handoff Validation Gate

The diagram includes an explicit gate between TC's output and the builder's intake:

> Binary checks: All required fields present? Zone count within 2-5? Adjacent backgrounds differ by >= 15 RGB? At least 2 grid layouts assigned? Per-category mechanism minimums met (1+ Spatial, 1+ Temporal, 1+ Material, 1+ Behavioral, 1+ Relational)? If FAIL: TC re-runs with specific fix instructions.

The relationship map has no equivalent. TC outputs a build plan and the builder receives it -- there is no validation step in between. This is a SIGNIFICANT addition by the diagram that addresses the "garbage in, garbage out" risk: if TC's build plan is incomplete, the builder starts from a flawed foundation.

### 3B. The Fix Integration Loop

The diagram shows a concrete fix cycle:
- Maximum 3 fix cycles
- Each cycle targets TOP 3 blocking issues only
- Quick PA re-check (2 auditors) in Wave 3
- ESCALATE after 3 cycles

The map does not address post-PA remediation at all. It discusses TC, File 42, and PA as separate concerns without specifying what happens when PA identifies issues. In ALWAYS FLAGSHIP mode, this fix loop is where most of the quality improvement happens (the remediation execution moved PA-05 from 1.5/4 to 2.5/4).

### 3C. Enrichment Feedback Paths

The diagram's Section 8 maps 5 enrichment propagation paths:
1. PA SKILL enrichment -> every future build
2. TC SKILL enrichment -> better build plans
3. Recipe enrichment -> better CSS output
4. Gate runner enrichment -> catches more issues
5. Build failure analysis -> pipeline adaptation (kill criteria at 3 consecutive failures)

The relationship map treats files as static entities with fixed relationships. It does not model how the system EVOLVES over time. The enrichment feedback is the primary mechanism for Pipeline v2 to self-improve.

### 3D. The Two-Layer Verification Side-by-Side

The diagram's Section 4 provides a clear two-column comparison:

| Property | Programmatic (Layer 1) | Perceptual (Layer 2) |
|----------|----------------------|---------------------|
| When | DURING + AFTER build | AFTER build only |
| How | Playwright getComputedStyle | Screenshots + fresh-eyes |
| Speed | ~30 seconds | ~15-45 minutes |
| Catches | Threshold violations | Gestalt failures |
| Misses | "Does it feel designed?" | Nothing numbers catch |

The map discusses PA and programmatic verification separately but never provides this unified comparison. The diagram's "Why Both Layers Are Non-Negotiable" callout (flagship passed all programmatic gates but failed perceptual audit) is the key architectural lesson that the map alludes to but does not frame as a verification SYSTEM.

### 3E. Resolved Design Decisions

The diagram's Section 9 contains 7 resolved decisions with explicit rationale:
1. Background threshold: 15 RGB (not 10)
2. Stacked gap: 108px Flagship / 120px Middle-Ceiling
3. Anti-scale model placement: recipe Phase 8G + /build-page preamble
4. Conviction content: 20-line Pipeline Philosophy in preamble
5. Kill criteria: 3 consecutive PA-05 < 3/4 = recipe failure
6. Recipe length: ~650 lines extracted
7. Letter-spacing threshold: 0.03em (0.5px at 16px)

The map does not resolve decisions -- it identifies conflicts and proposes resolution paths. This is appropriate for an analysis document, but it means the map's dependency graph contains OPEN questions that the diagram has CLOSED.

### 3F. Tier-Specific Routing Table

The diagram includes a detailed 9-row comparison table (Section 5) covering:
- Builder agent configuration per tier
- TC involvement per tier
- Handoff document contents per tier
- Checkpoint requirements per tier
- Programmatic gate severity per tier
- Stacked gap limits per tier
- PA auditor count and question count per tier
- PA-05 thresholds per tier
- Fix cycle limits per tier
- Expected build time per tier

The map provides a simpler 4-row table (Section 5B) with less detail. For ALWAYS FLAGSHIP, the diagram's table is the authoritative specification.

---

## 4. CIRCULAR DEPENDENCIES

### 4A. Identified Circular Dependencies

**CD-1: PA enrichment -> Recipe -> Build output -> PA evaluation -> PA enrichment**

The diagram's enrichment feedback section shows PA learning from build outputs, which changes what future PAs catch, which changes what the recipe must address. This is an INTENTIONAL feedback loop, not a bug. But it means the recipe and PA skill drift over time, potentially in conflicting directions.

**Risk for ALWAYS FLAGSHIP:** If PA becomes increasingly strict (more questions, tighter thresholds), the recipe must keep pace. But recipe changes are manual codification while PA enrichments come from build experience. The two may diverge.

**CD-2: TC Phase 4 mechanism selection -> Recipe mechanism deployment -> PA mechanism evaluation -> TC mechanism catalog enrichment**

The map identifies that TC selects mechanisms and the recipe deploys them. PA evaluates whether they are perceptible. If PA finds mechanisms imperceptible, the mechanism catalog (which TC reads) should be enriched with application modes that produce perceptible results. But this enrichment path is NOT shown in either document.

**CD-3: Stacking threshold feedback loop**

The map identifies 3 different stacking numbers (96px, 120px, 192px). The diagram introduces 2 more (108px, 120px). If a build fails the stacking gate, which number is the builder told to target? If the gate is 192px but the recipe says 120px and the Flagship target is 108px, the builder has 3 conflicting targets. Resolving one failure may create another.

### 4B. Non-Circular but Dangerous Dependencies

**DEP-1: Build plan quality determines build quality, but build plan validation is OPTIONAL in the map.**

The diagram has a handoff validation gate. The map does not. If the handoff gate is omitted (as the map implies), the builder receives an unvalidated build plan. This is the "garbage in" problem.

**DEP-2: merged-components.css is in the diagram's builder file routing but absent from the map's analysis.**

The map analyzes TC SKILL.md, PA SKILL.md, compositional-core/CLAUDE.md, design-system/CLAUDE.md, semantic-rules.md, File 42, and codification map. It does NOT analyze merged-components.css (Layer 4 components). The diagram routes this file to the builder. If the component library has quality issues, they would be invisible to the map's dependency analysis.

---

## 5. HOW RELATIONSHIPS CHANGE WITH ALWAYS FLAGSHIP

### 5A. TC Becomes Mandatory (Not Optional)

In the diagram's tier routing, TC Phases 0-3.5 are only invoked for Ceiling and Flagship. Middle tier skips TC (Phase 0 classification only). With ALWAYS FLAGSHIP:

- TC Phases 0-3.5 run for EVERY build (no skip path)
- Metaphor derivation is always performed
- Isomorphism table is always generated
- Builder warnings are always produced
- Build plan always includes reinforcing pairs + bridge prose + full isomorphism

**Map alignment:** The map's Section 5B confirms this: Flagship uses "Phases 0-3.5 + enhanced rubric" and "Multi-pass adapted recipe with inter-agent communication" and "Mode 4 mandatory."

### 5B. PA Mode 4 Becomes the Only Mode

The diagram shows Mode 4 (9 auditors, all 48 questions) only for Flagship. With ALWAYS FLAGSHIP:

- Every build gets 9 fresh-eyes auditors
- All 48 PA questions are answered for every page
- Screenshot pre-capture pattern is always used
- Weaver always synthesizes verdict
- Build time increases to ~90-180 min for EVERY page

**Cost implication:** The map notes Flagship is 5-10% of pages with 240-400 min build time. ALWAYS FLAGSHIP means every page takes 90-180 min minimum, with PA adding 30-45 min. This is a 3-5x slowdown compared to Middle tier.

### 5C. The Recipe Must Always Accommodate Metaphor

The operational-recipe.md is described as ~650 lines and "content-agnostic" in the map (Section 1F). But for ALWAYS FLAGSHIP, the recipe must be metaphor-aware:

- Phase 0 zone architecture must incorporate metaphor-driven zone semantics (from TC)
- Phase 3 zone backgrounds must reflect metaphor temperature/density/voice/weight
- Phase 6 coherence must check metaphor-direction (TC's C1-C5 rules) in ADDITION to transition variation
- Phase 8 verification must include isomorphism verification

**Map alignment:** The map identifies this in Section 2C, Conflict "Zone definition approach": "For Ceiling+, TC's metaphor-driven approach [determines zone character]." The recipe's content-arc approach (default) is replaced by the metaphor-driven approach for every page under ALWAYS FLAGSHIP.

### 5D. The Handoff Document Becomes Richer

Under ALWAYS FLAGSHIP, the diagram specifies the build plan includes:
- Zone architecture + section inventory (Middle baseline)
- Mechanism deployment + isomorphism table (Ceiling addition)
- Reinforcing pairs + bridge prose + full isomorphism (Flagship addition)

This means the _build-plan.md handoff is always the FULL version. The map's Section 2A confirms the Flagship handoff includes metaphor property, zone semantics, mechanism selections, isomorphism table, and builder warnings.

### 5E. Agent Communication Protocol Becomes Critical

The map identifies agent communication as a "neither covers" gap. The diagram's 4-wave architecture implies sequential wave handoff but does not specify inter-wave communication protocols.

With ALWAYS FLAGSHIP, the builder MUST be able to ask the planner questions (the "missing footer" problem from the flagship experiment). The map says "TOPOLOGY (flat) is fine; COMMUNICATION PROTOCOL (file-only) must change." But neither document specifies what the communication protocol IS for ALWAYS FLAGSHIP.

**Gap:** Pipeline-v2-architecture.md (Section 4.6) specifies 10+ agents for Flagship with mandatory approvals at 5 phases. The diagram specifies 4-wave architecture with planner review at checkpoints. But the MECHANISM (SendMessage? file-bus? checkpoint files?) is unspecified in all three documents.

### 5F. Gate Severity Is Always BLOCKING

The diagram's tier routing table shows:
- Middle: 12 gates, SIGNIFICANT severity
- Ceiling: 12 gates, BLOCKING severity
- Flagship: 12 gates, ALL BLOCKING + tighter thresholds

With ALWAYS FLAGSHIP, every gate failure is BLOCKING. No soft failures. This means the fix integration loop (max 3 cycles) is exercised more frequently, and the build process is slower but more thorough.

### 5G. Kill Criteria Apply to Every Build

The diagram's Decision 5 (Kill Criteria) specifies:
1. 3 consecutive PA-05 < 3/4 = recipe failure
2. Any soul violation = structural leak
3. All gates pass but PA-05 < 3/4 = recipe captures minimum, not quality

With ALWAYS FLAGSHIP, these criteria are checked after EVERY build. If 3 consecutive pages score < 3/4, the pipeline itself is diagnosed as broken. This is a healthy self-correction mechanism but means the pipeline is more fragile -- 3 bad builds in a row triggers investigation.

---

## 6. CRITICAL PATH ANALYSIS

### 6A. The Flagship Critical Path

```
CRITICAL PATH (Flagship, from user command to shipped artifact):

/build-page command
    |
    v (1 min)
Tier Classification [ALWAYS: Flagship]
    |
    v (30-60 min)
TC Phases 0-3.5 [Metaphor derivation -- LONGEST THINKING PHASE]
    |
    v (5 min)
Handoff Validation Gate [Binary checks on _build-plan.md]
    |  FAIL -> TC re-runs with fix instructions (adds 15-30 min)
    v
Builder Receives Package
    |
    v (90-150 min)
Build Execution Phases 0-8 [THE CRITICAL BUILD -- LONGEST PHASE]
    |  Checkpoints at Phases 0, 1, 3, 4, 8 (planner reviews)
    |  Programmatic gates inline
    v
Programmatic Gate Runner [~30 seconds]
    |  FAIL -> Builder fixes inline (adds 5-15 min per gate)
    v
Screenshot Pre-Capture [~5 min]
    |
    v (30-45 min)
PA Mode 4 [9 auditors, all 48 questions -- PARALLEL]
    |
    v (10 min)
Weaver Synthesis [PA-05 score + fix list]
    |
    v
Ship Decision
    |
    +-- PA-05 >= 3/4 AND all gates PASS -> SHIP
    |
    +-- PA-05 < 3/4 OR gate FAIL -> Fix Cycle (30-60 min each, max 3)
    |       |
    |       v
    |   Builder applies top 3 fixes
    |   Re-run programmatic gates
    |   Quick PA re-check (2 auditors)
    |   Ship decision
    |
    +-- 3 cycles exhausted -> ESCALATE to user

TOTAL CRITICAL PATH: 170-280 min (no failures) to 350-460 min (3 fix cycles)
```

### 6B. Critical Path Dependencies

| Phase | Depends On | Blocks |
|-------|-----------|--------|
| Tier Classification | User input | TC invocation |
| TC Phases 0-3.5 | Content source | Handoff gate |
| Handoff Gate | TC output (_build-plan.md) | Builder intake |
| Builder Phases 0-8 | Handoff + recipe + design system files | Programmatic gates |
| Programmatic Gates | Rendered HTML (via Playwright) | PA invocation |
| PA Mode 4 | Screenshots (pre-captured) | Fix decision |
| Fix Integration | PA verdict + fix list | Ship decision |

**The bottleneck is Build Execution (90-150 min).** This is single-threaded (1 Opus builder). No parallelism is possible during the build because each phase depends on the previous phase's output.

### 6C. Parallelism Opportunities

| What | Parallel With | Map Coverage | Diagram Coverage |
|------|-------------|--------------|-----------------|
| 9 PA auditors | Each other | YES (Mode 4 architecture) | YES (Wave 2) |
| Screenshot capture at 3 viewports | Sequential (same Playwright instance) | Implied | YES (pre-capture pattern) |
| Gate runner | Build phases (inline) | Partial (per-phase perception checks from F42) | YES (during + after) |
| TC re-run on handoff failure | Nothing (blocks builder) | NOT COVERED | YES (explicit in gate) |
| Fix cycle PA re-check | Nothing (blocks ship decision) | NOT COVERED | YES (2 auditors in Wave 3) |

### 6D. Critical Path Risks for ALWAYS FLAGSHIP

**RISK 1: TC metaphor derivation stalls (30-60 min).** If TC cannot converge on a metaphor, the entire pipeline is blocked. Neither document specifies a timeout or fallback for TC failure.

**RISK 2: Builder context overload.** With ALWAYS FLAGSHIP, the builder receives: operational-recipe.md (~650 lines) + _build-plan.md (variable, ~200-400 lines for Flagship) + mechanism-catalog.md (unknown length) + tokens.css + prohibitions.md + merged-components.css + perception-thresholds.md. Total context could exceed 3,000 lines. The map warns about "75-line builder visibility" as a failure mode of the original prompt -- but the fix (send everything) risks the opposite problem.

**RISK 3: Fix cycle exhaustion.** If 3 fix cycles cannot reach PA-05 >= 3/4, the pipeline escalates to the user. But the flagship experiment showed that the ORIGINAL build (PA-05 1.5/4) could not be fixed by CSS-only remediation to 4/4 -- the remediation only reached 2.5/4. If the recipe itself caps quality at ~3/4, the fix loop may routinely exhaust 3 cycles.

**RISK 4: Agent communication gap.** The builder cannot ask the planner questions during Phases 0-8 because (per the map) the communication protocol is unspecified. The "missing footer" problem from the flagship experiment is not structurally prevented by either document.

---

## 7. CROSS-REFERENCE WITH pipeline-v2-architecture.md

The pipeline-v2-architecture.md (hereafter "arch doc") is the canonical unified architecture. It resolves many disagreements between the diagram and the map. Here is where all three align and diverge:

### 7A. Three-Way Alignment

| Topic | Diagram | Map | Arch Doc | All Agree? |
|-------|---------|-----|----------|-----------|
| /build-page as orchestrator | YES (~350 lines) | Proposes "Router" in CLAUDE.md | YES (~350 lines, /build-page) | MAP DIFFERS (router vs skill) |
| TC Phases 0-3.5 unchanged | YES | YES | YES | ALL AGREE |
| Recipe as separate file | YES (operational-recipe.md) | YES (F42 INCORPORATED) | YES (~650 lines in grammar/) | ALL AGREE |
| PA unchanged for external audit | YES | YES | YES | ALL AGREE |
| 15 RGB background delta | YES | YES (but notes F42 says 10) | YES (15 RGB, resolved) | ALL AGREE |
| Gate-runner.js for programmatic checks | YES (12 gates) | NOT SPECIFIED as separate file | YES (~250 lines, 12 gates) | MAP DIFFERS |
| perception-thresholds.md as standalone | Mentioned | Applied to PA skill (Change 2) | YES (~80 lines in guidelines/) | MAP DIFFERS |

### 7B. Three-Way Conflicts

| Topic | Diagram | Map | Arch Doc | Resolution Needed? |
|-------|---------|-----|----------|-------------------|
| Stacking gap max | 108px (Flagship) / 120px (other) | 96px per-prop / 120px total / 192px gate | 96px per-prop + 192px gate + 120px recipe target | YES -- 3 different schemes |
| Recipe length | ~650 lines (per skill propagation section) | ~1,800 lines (Section 5E) | ~650 lines (extracted from F42) | YES -- map's 1,800 is unreferenced elsewhere |
| TC Phase 4 fate | TC outputs _build-plan.md, Phase 4 implicit | "REPLACE Phase 4 with F42's recipe approach" | Phase 4 stays, gets recipe framing header | ARCH DOC RESOLVES (Phase 4 stays) |
| Agent communication | Implied by wave architecture | Identified as critical gap (Change 8) | Specified in compositional-core/CLAUDE.md (+25 lines) | ARCH DOC RESOLVES (+25 lines) |
| Model selection | Opus builder stated but not justified | Identified as Change 9 | Opus for Ceiling+, Sonnet for Middle | ARCH DOC RESOLVES |

### 7C. The Stacking Gap Conflict (Deep Dive)

This is the most dangerous three-way conflict because it directly affects the builder's CSS:

- **tokens.css current value:** `--space-max-zone: 96px` (per-property maximum)
- **File 42 recipe target:** 120px total stacked gap at boundaries
- **Codification map gate:** 192px binary fail threshold
- **Arch doc resolution:** 96px per-property STAYS + 192px total gate ADDED + 120px recipe TARGET
- **Diagram values:** 108px for Flagship / 120px for Middle-Ceiling (NOT aligned with arch doc)

The diagram introduces 108px as a Flagship-specific stacked gap limit, citing "File 42's arithmetic proves worst-case breathing = 108px." This number appears NOWHERE in the map or the arch doc. The arch doc says 192px gate + 120px target for all tiers.

**For ALWAYS FLAGSHIP:** If 108px is the correct Flagship limit, then the 192px gate is too loose (builder can produce 191px gaps and pass). If 192px is the gate, the 108px target is aspirational, and the builder has 84px of headroom between target and failure. The map does not help resolve this because it presents all three numbers without choosing.

---

## 8. FINDINGS SUMMARY

### 8A. Concordance Assessment

The diagram and the map agree on the CORE architecture:
- TC for thinking, recipe for building, PA for auditing
- Separation of concerns (each agent reads ONE document)
- 15 RGB background delta as the perceptual threshold
- Full mechanism catalog routed to builder (not just first 200 lines)
- Flagship requires metaphor derivation (TC Phases 0-3.5)

Concordance rate: ~65% of architectural elements align between diagram and map.

### 8B. The 10 Most Important Discrepancies

| # | Discrepancy | Severity | Impact on ALWAYS FLAGSHIP |
|---|-------------|----------|--------------------------|
| 1 | Stacking gap threshold (3 conflicting schemes) | HIGH | Builder has no single target number |
| 2 | /build-page as skill (diagram) vs Router in CLAUDE.md (map) | MEDIUM | Determines how users invoke the pipeline |
| 3 | Handoff validation gate (diagram only) | HIGH | Without it, bad TC output reaches builder unvalidated |
| 4 | Agent communication protocol unspecified | HIGH | "Missing footer" problem not structurally prevented |
| 5 | Recipe length (650 vs 1,800 lines) | MEDIUM | Builder context budget directly affected |
| 6 | TC Phase 4 fate (stays vs replaced) | MEDIUM | Determines mechanism selection quality |
| 7 | Fix integration loop (diagram only) | HIGH | Without it, PA findings have no remediation path |
| 8 | merged-components.css routing (diagram only, map omits) | LOW | Builder may miss component library |
| 9 | semantic-rules.md routing (map only, diagram omits) | LOW | Builder may miss semantic gap decisions |
| 10 | Enrichment feedback model (diagram only) | MEDIUM | Without it, pipeline cannot self-improve |

### 8C. Recommendations for ALWAYS FLAGSHIP

1. **RESOLVE the stacking gap conflict.** Pick ONE scheme. Recommendation: 96px per-property + 108px Flagship total target + 120px gate (tighter than arch doc's 192px because ALWAYS FLAGSHIP should use Flagship thresholds always).

2. **ADOPT the handoff validation gate from the diagram.** The map's omission of this gate is a structural weakness. Every TC output should be binary-validated before reaching the builder.

3. **SPECIFY the agent communication protocol.** Neither document does this. For ALWAYS FLAGSHIP: builder writes checkpoint files, planner reads and responds via file-bus, with SendMessage for blocking questions. Define this explicitly.

4. **USE the arch doc's resolution for TC Phase 4.** Phase 4 stays, gets recipe framing header. This preserves mechanism selection quality while adding recipe-format guidance.

5. **ADD the fix integration loop from the diagram to the map's dependency graph.** The map treats PA as terminal. The diagram correctly shows PA -> Fix -> Re-PA as a loop. This loop is essential for reaching PA-05 >= 3/4.

6. **ADD semantic-rules.md and merged-components.css to the builder's file routing.** Currently, the diagram includes merged-components.css but not semantic-rules.md, and the map analyzes semantic-rules.md but does not route it to the builder.

7. **RESOLVE recipe length.** The arch doc and diagram agree on ~650 lines. The map's ~1,800 line estimate appears to include analysis that should stay in ephemeral. Use 650 lines for the recipe, route the mechanism catalog separately.

8. **ADD TC failure/timeout handling.** Neither document specifies what happens if TC cannot converge on a metaphor. For ALWAYS FLAGSHIP, add a 60-minute timeout with fallback to content-arc zone architecture.

### 8D. The Critical Path Under ALWAYS FLAGSHIP

**Best case:** 170 min (TC 30 + build 90 + gates 1 + screenshots 5 + PA 30 + weaver 10 + ship 4)
**Expected case:** 250 min (TC 45 + build 120 + gates 5 + screenshots 5 + PA 35 + weaver 10 + 1 fix cycle 30)
**Worst case:** 460 min (TC 60 + handoff fix 30 + build 150 + gates 10 + PA 45 + 3 fix cycles 150 + escalation 15)

The single greatest optimization opportunity is parallelizing PA auditors (already specified -- 9 in parallel). The single greatest risk is fix cycle exhaustion, which depends on recipe quality.

---

**END OF CROSS-REFERENCE REPORT**

**Document statistics:**
- Sections: 8 (with 30+ subsections)
- Discrepancies identified: 10 critical
- Circular dependencies found: 3
- Critical path analysis: 3 scenarios (170/250/460 min)
- Recommendations: 8
- Three-way comparisons: 12 (diagram vs map vs arch doc)
