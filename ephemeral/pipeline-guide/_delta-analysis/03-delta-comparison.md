# 03 -- Delta Comparison: PV2 Diagram vs Guide (Fat Core / Experiment C)

**Sources compared:**
- **PV2 Diagram:** `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (1,354 lines)
- **Guide:** `ephemeral/pipeline-guide/PIPELINE-V2-IMPLEMENTATION-GUIDE.html` (1,997 lines)
- **Inventories:** `01-pv2-full-inventory.md` and `02-guide-inventory.md`

---

## EXECUTIVE SUMMARY

**Does running Experiment C test the ENTIRE PV2 pipeline diagram?**

**NO.** Experiment C tests the **Fat Core** architecture only, which is ONE of the five architecture variants (A-E) described in the PV2 diagram. The PV2 diagram describes a MUCH LARGER design space — including the full Linear Pipeline (Updated PV2), the 2D model framework, the transition table/fractal echo artifacts, the TC skill narrowing, and 5 experiments. The guide CHOSE Fat Core as the recommended path based on the Master Synthesis Verdict (Report 32) and built an implementation plan around it.

**Concretely:**
- PV2 diagram contains ~23 major components. The guide implements ~14 of them.
- 9 components from PV2 are absent from the guide, mostly because they belong to the Linear Pipeline architecture (which Fat Core replaces).
- 2 components in the guide are NOT in the PV2 diagram (gate-registry.js, tier classification).

---

## 1. WHAT'S IN THE PV2 DIAGRAM THAT IS IN FAT CORE / EXPERIMENT C

These elements appear in both the diagram and the guide's Fat Core implementation:

| # | Element | PV2 Diagram | Guide Implementation | Match Quality |
|---|---------|-------------|---------------------|---------------|
| 1 | `/build-page` entry point | Single slash command, user's only interaction | Same — `/build-page content.md` | EXACT |
| 2 | Single Opus core agent | Plans AND builds in one pass, NO Boundary 3 | Same — "the ONLY creative agent" | EXACT |
| 3 | Thin orchestrator | ~250 lines, mechanical routing only | Same — Sonnet, ~350-500 lines (larger) | CLOSE (guide is bigger) |
| 4 | 15 programmatic gates (SC-01 through SC-15) | 15 binary checks, all BLOCKING | Same — 15 gates in 3 phase-locked groups | EXACT |
| 5 | 3 phase-locked gate groups (G1, G2, G3) | G1 after skeleton, G2 after CSS, G3 comprehensive | Same | EXACT |
| 6 | 9 PA auditors (Mode 4) | Fresh-eyes, zero context, 48 questions | Same | EXACT |
| 7 | PA weaver | Synthesizes verdict | Same | EXACT |
| 8 | 7 boundary crossings, 0 destructive | Diagram's Fat Core section: 7 boundaries, 0 destructive | Guide: 7 boundaries, 0 destructive | EXACT |
| 9 | Fix cycle (max 3, same core agent) | Routes fixes to SAME core agent (memory preserved) | Same — max 3 rounds, 2-PA re-check per cycle | EXACT |
| 10 | conventions-brief.md (~100 lines) | 5 sections: Perception Thresholds, Soul, Spatial Rules, Quality Floor, Creative Authority | Same 5 sections, each ~20 lines | EXACT |
| 11 | gate-runner.js (~400 lines) | Playwright, getComputedStyle, fix recipes | Same | EXACT |
| 12 | perception-thresholds.md (~80 lines) | Canonical threshold table + 6-channel definitions | Same | EXACT |
| 13 | 5-layer intelligence stack (L1-L5) | Detailed hierarchy with dependencies | Same hierarchy, same descriptions | EXACT |
| 14 | 4-architecture comparison table | Master Prompt vs Original PV2 vs Updated PV2 vs Fat Core | Same 12-dimension table | EXACT |
| 15 | Screenshot pre-capture | Captures screenshots at 1440px + 768px | Same | EXACT |
| 16 | Fat Core phases (A-D) | Phase A (understand), B (plan), C (build), D (self-verify) | Same 4 phases with same time estimates | EXACT |
| 17 | Creative Authority Clause | Override any non-soul value with logged reasoning | Embedded in conventions brief Section 5 | EXACT |
| 18 | Output: 3 files | output.html + _pa-report.md + _build-log.md | Same | EXACT |
| 19 | Core agent input: ~300 lines | Content + 100-line conventions brief + reference files | Guide says ~230 lines (brief + tokens + prohibitions + content) | CLOSE (guide is more specific) |
| 20 | ALWAYS FLAGSHIP directive | No tier routing, every page gets maximum intensity | PARTIAL — guide adds tier classification in orchestrator | DIVERGENT (see Section 3) |
| 21 | Cost model | Fat Core: ~$15-40/page | Same range | EXACT |
| 22 | 9 known risks | Risks 1-9 documented | Guide references same risks in narrative | IMPLICIT (not tabulated) |
| 23 | Master Synthesis Verdict | Fat Core recommended, "trust the agent, constrain the soul" | Same verdict drives entire guide | EXACT |
| 24 | Decision tree (experiments) | A >= 3.0 -> STOP; A < 3.0 + B >= 3.0 -> Fat Core | Guide has same tree with 5 experiments (expanded) | EXPANDED |

---

## 2. WHAT'S IN THE PV2 DIAGRAM THAT IS NOT IN FAT CORE / EXPERIMENT C

These elements exist in the PV2 diagram but are **absent** from the guide's Fat Core implementation:

| # | Element | PV2 Diagram Description | Why Absent from Guide |
|---|---------|------------------------|----------------------|
| 1 | **TC Planner (Wave 0)** | Separate Opus agent running enriched TC (~660 lines), Phases 0-3.5 + 4T | ELIMINATED by Fat Core — core agent does its own planning. TC planner is a Linear Pipeline component. |
| 2 | **TC Skill Narrowing** (1,878 -> ~660 lines) | Major edit removing Phases 4+ builder content, tier routing, builder appendices | DEFERRED — diagram's own verdict says "defer until experiments prove value." Guide's TC edit is minimal (Step 1, ~15 lines recipe header only). |
| 3 | **Transition Table (YAML)** | Per-boundary x 6-channel specification with exact CSS, delta measurements, semantic direction, pass/fail pre-computation | NOT NEEDED — this is the B3 compression fix. Fat Core eliminates B3 entirely (same agent plans and builds). The guide explicitly doesn't mention transition tables. |
| 4 | **Fractal Echo Table** | 5-row table showing pattern expression at each of 5 scales | NOT NEEDED — same reason. Part of Linear Pipeline's intelligence survival mechanism. |
| 5 | **Phase 4T** (new TC phase) | Transition Table + Fractal Echo Table generation as TC output | NOT NEEDED — only exists to produce artifacts #3 and #4. |
| 6 | **Fresh-Eyes Metaphor Validator (Wave 0.5)** | Separate Opus agent checking STRUCTURAL vs ANNOUNCED | ABSENT — diagram itself notes mitigation "Option A (fresh-eyes metaphor validator, +5-10 min)" for Fat Core but doesn't make it mandatory. Guide does NOT include it. |
| 7 | **Enriched Handoff Gate (Wave 0.9, 8 checks)** | Pre-builder gate checking zone count, BG delta, grids, mechanisms, transitions, fractal echo, transition table, channel map | NOT NEEDED — handoff gate exists between TC and builder. Fat Core has no TC-to-builder handoff. |
| 8 | **9-Phase Build sequence** (Phases 0-8 for builder) | Structured phases with micro-gates | REPLACED — Fat Core uses 4 phases (A-D) instead of 9. Guide does NOT include the 9-phase structure or micro-gates. |
| 9 | **Inter-Phase Micro-Gates (MG-1 through MG-4)** | 4 mini-gates during build (after Phases 1, 3, 4, 5) | REPLACED — Fat Core uses 3 phase-locked gates (G1, G2, G3) instead. Similar concept, different implementation points. |
| 10 | **Phase 6.5 Observation Pause** | Builder renders, scrolls, writes 2-3 observations, ~5-10 min | ABSENT — described as "cheapest change with highest expected impact" but not mentioned in guide. Fat Core's core agent could do this organically. |
| 11 | **Anti-Scale Self-Test (3 questions in Phase 8)** | Q1: "Does every section earn its visual weight?" Q2: "Could you remove a CSS rule without losing meaning?" Q3: "Does restraint create more impact than addition?" | ABSENT from guide explicitly, though could be added to conventions brief. |
| 12 | **Convention Escalation Path** | If PA-05 = 3/4 and user wants 4/4: re-engage TC or give convention freedom for 2nd pass | NOT NEEDED — Fat Core builder already has full creative freedom. No ceiling to escalate past. |
| 13 | **Telescope + Microscope interlaced format** | Builder gets WHY + HOW at every line | PARTIALLY PRESENT — guide's conventions brief is the "telescope" (WHY), but the "microscope" (specific CSS values per line) is left to the core agent's judgment. No interlaced per-line WHY+HOW. |
| 14 | **11-boundary analysis** | Full B1-B11 boundary crossing analysis with intelligence survival estimates | REPLACED by 7-boundary model. The 11-boundary analysis applies to Linear Pipeline only. |
| 15 | **Anti-Degradation Patterns** (28 total from Report 95) | IT-1 Triple Encoding, SE-4 Circuit Breakers, MF-5 Poka-Yoke, MA-1 Conductor Model, IT-3 SNR Optimization | PARTIALLY PRESENT — MF-5 (Poka-Yoke, exact values) is in conventions brief. IT-3 (SNR optimization, 300-line cap) is in core agent input limit. Others are absent. |
| 16 | **6 Failure Modes** (F-1 through F-6) | Format loss, re-derivation error, context competition, stacked ambiguity, omission drift, perceptual blindness | IMPLICIT — guide doesn't enumerate these but designs around them (e.g., single agent eliminates F-1, F-2, F-4). |
| 17 | **2D Model (Specificity x Freedom)** | Replaces 1D checklist->recipe->convention with 2D quadrant analysis | NARRATIVE ONLY — guide mentions the model in the visual overview but doesn't operationalize it. |
| 18 | **Builder instruction approaches A, B, C (Recipe, Brief, Hybrid)** | Three non-Fat-Core builder approaches | NOT IMPLEMENTED — guide chose Fat Core (D) and tests only against Single Opus (E). Recipe/Brief/Hybrid remain untested alternatives. |
| 19 | **Inherent vs Bolted-On analysis (Report 87)** | Classification of what's inherent vs advisory + fix approaches | PARTIALLY PRESENT — guide achieves inherent enforcement through phase-locked gates, but doesn't enumerate the classification. |
| 20 | **4 Irreducible Capabilities** | Content-form resonance, proportional intelligence, creative surprise, emergent coherence | IMPLICIT — guide trusts the core Opus agent to exhibit these rather than trying to encode them. |
| 21 | **FLAT MODE** | Triggered when no tension found or fractal echo inconsistent | ABSENT — guide doesn't mention flat mode. Addition Test and fractal echo consistency check are TC-specific (Linear Pipeline). |
| 22 | **Ceiling Sentence** | "Do NOT deviate from the instance values without planner approval" = the 3/4 ceiling | INVERTED — guide's conventions brief Section 5 (Creative Authority) is the explicit REMOVAL of this sentence. |
| 23 | **Self-Referential Compression Warning** (Reports 102, 105) | Pipeline analysis exhibits same compression loss it studies | NOT MENTIONED in guide. |
| 24 | **Intelligence Heatmap** | Per-stage intelligence level visualization | NARRATIVE in guide's visual overview, not operational. |
| 25 | **Operational-recipe-template.md (~300 lines, Layer A)** | 9-phase universal recipe template with action verbs | NOT BUILT — guide defers this per Master Synthesis Verdict ("defer INDEFINITELY unless experiments prove brief insufficient"). |
| 26 | **experiment-protocol.md (~80 lines) listed as NEW FILE** | 5 experiments with exact inputs, success criteria, decision gates | PRESENT — guide's Section 7 serves this purpose, but as HTML narrative rather than a standalone .md file. The guide lists it as File 6 (~80 lines, ephemeral). |

---

## 3. WHAT'S IN THE GUIDE THAT IS NOT IN THE PV2 DIAGRAM

These elements exist in the guide but are **absent** from the PV2 diagram:

| # | Element | Guide Description | Why Not in PV2 Diagram |
|---|---------|------------------|----------------------|
| 1 | **gate-registry.js (~120 lines)** | Central configuration for all 15 gate thresholds, selectors, and phase-gate groups. Single source of truth. gate-runner.js reads this file. | PV2 diagram has gate-runner.js but no separate registry. The guide factored out the configuration for maintainability. |
| 2 | **Tier classification in orchestrator** | Guide's build-page SKILL.md "reads content, classifies tier (Floor/Middle/Ceiling/Flagship)" and "selects agent architecture per tier" | PV2 diagram says "ALWAYS FLAGSHIP. No tier routing." The guide CONTRADICTS the PV2 directive by adding tier classification. |
| 3 | **5 experiments** (expanded from 3) | Guide defines experiments A through E (Naked Test, $5 Conventions, Fat Core Full, Full Recipe, Head-to-Head) | PV2 diagram has 3 experiments in its final verdict section (A, B, C) and 5 in the earlier section (A-E). The guide's 5 experiments are a SUPERSET that includes both PV2 sets plus new ones. |
| 4 | **Track 1 vs Track 2 classification** | Orchestrator "determines Track 1 (data-heavy) or Track 2 (prose-heavy)" | PV2 diagram doesn't mention Track 1/Track 2 routing at all. |
| 5 | **Step-by-step master checklist** (Steps 1-7 with sub-steps) | 40+ checklist items with exact time estimates, experiment dependencies, fast path vs full path | PV2 diagram has "What to codify immediately" and "What to defer" but no step-by-step build sequence. |
| 6 | **Fast Path** (if Exp B >= 3.0) | Steps 1+2+3+7 = 4-8 hours. Skips orchestrator, gate runner, experiments C-E. | PV2 diagram's equivalent is "A >= 3.0 -> STOP. Pipeline is UNNECESSARY" but doesn't define what STOP means operationally. |
| 7 | **Phase sequencing for core agent** | Phase C split into skeleton (20-30 min) then CSS styling (40-90 min) with G1 between them, and CSS continues with G2 after | PV2 diagram shows Phase C as one block (60-120 min). Guide adds more granularity to when gates fire within Phase C. |
| 8 | **SC-03 threshold detail** | Guide specifies ">= 2 font families from trinity" | PV2 diagram says "Only 3 allowed fonts" (which is a different check — presence vs exclusion) |
| 9 | **SC-11 threshold detail** | Guide specifies "display-body >= 10px delta, body-detail >= 2px" (two-tier check) | PV2 diagram says ">= 2px delta" (single check) |
| 10 | **Gate confidence tiers** | Binary thresholds ~95%, structural ~90%, compositional (SC-13) ~70% | Not quantified in PV2 diagram (SC-13 says ~70% but no overall tier model) |
| 11 | **Post-PV2 phases (E through J)** | Hardening, Migration Playbook v2, Pilot Migration, Playbook Refinement, FREEZE LINE, Track 1 Migration, Track 2 Migration, Content Ingestion | PV2 diagram mentions "Then: Expand to 5 content types" but no detailed post-ship plan. |
| 12 | **"Floor pages skip TC. Middle pages skip metaphor."** | Tier-specific behavior in orchestrator | Contradicts "ALWAYS FLAGSHIP" directive. Not in PV2 diagram. |

---

## 4. IS EXPERIMENT C = FULL PV2 PIPELINE? OR A SUBSET?

**Experiment C is a subset.** Specifically:

**Experiment C tests:** The Fat Core architecture — one Opus agent that plans AND builds, verified by 3 phase-locked gates + 9 PA auditors + fix cycles.

**Experiment C does NOT test:**
- The Linear Pipeline architecture (TC planner -> builder handoff -> 15 post-build gates)
- Transition Table / Fractal Echo Table artifacts
- TC skill narrowing (1,878 -> 660 lines)
- Enriched Handoff Gate (8 pre-builder checks)
- 9-Phase build sequence with micro-gates
- Phase 6.5 Observation Pause
- Fresh-Eyes Metaphor Validator
- Recipe-based instruction format (tested by Experiment D instead)
- Hybrid approach (Recipe for structure + Convention for composition)
- FLAT MODE (tension-less content handling)
- Convention Escalation Path (PA 3/4 -> 4/4)

**What Experiment C IS testing is the Master Synthesis Verdict's RECOMMENDED architecture.** The PV2 diagram contains Fat Core as one option among five. The guide elevates it to THE option, per Report 32.

---

## 5. WHAT WOULD "BUILDING THE FULL PV2 PIPELINE" REQUIRE BEYOND EXPERIMENT C?

If someone wanted to build EVERYTHING the PV2 diagram describes (not just Fat Core), they would need:

### Additional Files (not in the guide)

| File | Size | Purpose |
|------|------|---------|
| TC SKILL.md narrowing | -1,270 lines | Cut TC from 1,878 to ~660 lines, add Phase 4T |
| Transition Table YAML schema | ~50-100 lines | Schema for per-boundary x 6-channel specification |
| Fractal Echo Table template | ~30-50 lines | 5-row template for scale coverage |
| operational-recipe-template.md | ~300 lines | 9-phase universal recipe (Layer A) |
| Enriched Handoff Gate script | ~100-150 lines | 8 pre-builder binary checks |
| Micro-gate runner | ~100 lines | MG-1 through MG-4 during build |
| Fresh-Eyes Metaphor Validator prompt | ~50-100 lines | Binary STRUCTURAL/ANNOUNCED check |
| FLAT MODE handler | ~50-100 lines | Tension-less content path |
| Convention Escalation Protocol | ~50-100 lines | 3/4 -> 4/4 upgrade path |

### Additional Architecture Variants to Test

| Experiment | What It Tests |
|-----------|--------------|
| Recipe (Approach A) | Full Linear Pipeline with 650-line recipe + transition table |
| Principles Brief (Approach B) | 100-line constraints + 15 post-build gates |
| Hybrid (Approach C) | Recipe Phases 0-4, Convention Phases 5-8 |

### Total Additional Effort

- ~730-1,100 additional lines of new files
- ~1,270 lines of TC skill edits
- 3 additional experiments (~$90-150, ~1-2 days)
- Estimated total: 20-40 additional hours beyond what the guide covers

### Key Point

**The PV2 diagram's own Master Synthesis Verdict recommends NOT building all of this.** The verdict explicitly says to DEFER the operational recipe, TC narrowing, transition table, and gate runner updates until experiments prove they're needed. The guide faithfully implements this recommendation.

---

## 6. SPECIFIC CONTRADICTIONS BETWEEN DIAGRAM AND GUIDE

| # | Topic | PV2 Diagram Says | Guide Says | Resolution |
|---|-------|-----------------|-----------|------------|
| 1 | **Tier routing** | "ALWAYS FLAGSHIP. No tier routing. No classification." | Orchestrator "classifies tier (Floor/Middle/Ceiling/Flagship)" and routes differently | **CONTRADICTION.** Guide adds tier routing that the diagram's directive explicitly forbids. Guide's orchestrator description says "Floor pages skip TC. Middle pages skip metaphor." |
| 2 | **Orchestrator size** | ~250 lines | ~350-500 lines | **EXPANSION.** Guide's orchestrator is 1.4-2x the diagram's specification, likely because it adds tier classification and more detailed routing. |
| 3 | **New file count** | 4 new files (~1,350 lines total) | 6 new files (~1,130 lines total) | **DIFFERENT.** Diagram: SKILL.md + operational-recipe-template + perception-thresholds + gate-runner. Guide: SKILL.md + conventions-brief + perception-thresholds + gate-runner + gate-registry + experiment-protocol. Guide drops operational-recipe-template, adds conventions-brief + gate-registry + experiment-protocol. |
| 4 | **TC skill edit scope** | 1,933 -> ~660 lines (-66%, major refactor) | ~15 lines added (recipe header Phase 4 only) | **MAJOR DIFFERENCE.** Diagram envisions massive TC narrowing. Guide does a minimal edit per the deferral recommendation. |
| 5 | **Core agent input** | ~300 lines (brief + content + reference files) | ~230 lines (conventions brief + tokens + prohibitions + content) | **CLOSE.** Guide is more specific and slightly smaller. Diagram includes "reference files (tokens, prohibitions, catalog)" — guide drops the mechanism catalog from core input. |
| 6 | **SC-03 check** | "Only 3 allowed fonts" (exclusion check) | ">= 2 font families from trinity" (presence check) | **DIFFERENT CHECK.** Diagram checks that NO other fonts appear. Guide checks that AT LEAST 2 of the 3 trinity fonts are used. |
| 7 | **SC-11 check** | ">= 2px delta" (single threshold) | "display-body >= 10px delta, body-detail >= 2px" (two thresholds) | **EXPANSION.** Guide adds a stricter display-body threshold. |
| 8 | **Experiment labels** | EXP A-E (5 experiments, then narrowed to A-C) | Experiments A-E (different labeling — Guide Exp B = Diagram EXP E, etc.) | **LABEL MISMATCH.** Guide acknowledges this explicitly. |
| 9 | **Experiment count** | 3 (final verdict) or 5 (earlier section) | 5 | **EXPANSION.** Guide's 5 is a superset. |
| 10 | **Core agent reads mechanism catalog?** | Yes — "mechanism-catalog.md (FULL, 18 mechanisms)" listed as file 8 of builder input | No — guide's core agent reads only conventions-brief + tokens + prohibitions + content (~230 lines) | **CONTRADICTION.** Diagram gives core agent 8 files; guide gives 4. |
| 11 | **Phase C granularity** | Fat Core: "Phase C: Build HTML+CSS (60-120 min)" as one block | Phase C split: skeleton (20-30 min) -> G1 -> CSS (40-90 min) -> G2 -> richness continues | **EXPANSION.** Guide adds sub-phase detail. |

---

## 7. SUMMARY TABLE — What Each Source Covers

| Component | PV2 Diagram | Guide (Fat Core) | Guide (Exp C) |
|-----------|:-----------:|:-----------------:|:-------------:|
| `/build-page` entry | YES | YES | YES |
| Single Opus core agent | YES | YES | YES |
| Orchestrator | YES (250 lines) | YES (350-500 lines) | YES |
| 15 gates (SC-01 to SC-15) | YES | YES | YES |
| 3 phase-locked groups (G1/G2/G3) | YES | YES | YES |
| 9 PA auditors + weaver | YES | YES | YES |
| Fix cycles (max 3) | YES | YES | YES |
| conventions-brief.md | YES | YES | YES |
| gate-runner.js | YES | YES | YES |
| gate-registry.js | NO | YES | YES |
| perception-thresholds.md | YES | YES | YES |
| 5-layer intelligence stack | YES | YES (narrative) | -- |
| Fat Core comparison table | YES | YES | -- |
| TC Planner (Wave 0) | YES | NO | NO |
| TC Skill narrowing (-66%) | YES | NO (minimal edit) | NO |
| Transition Table (YAML) | YES | NO | NO |
| Fractal Echo Table | YES | NO | NO |
| Phase 4T | YES | NO | NO |
| Fresh-Eyes Metaphor Validator | YES | NO | NO |
| Enriched Handoff Gate (8 checks) | YES | NO | NO |
| 9-Phase build sequence | YES | NO | NO |
| Micro-gates (MG-1 to MG-4) | YES | NO | NO |
| Phase 6.5 Observation Pause | YES | NO | NO |
| Anti-Scale Self-Test | YES | NO | NO |
| FLAT MODE | YES | NO | NO |
| Convention Escalation Path | YES | NO | NO |
| operational-recipe-template.md | YES | NO (deferred) | NO |
| Recipe approach (A) | YES | NO | NO |
| Principles Brief approach (B) | YES | NO | NO |
| Hybrid approach (C) | YES | NO | NO |
| Tier classification | NO | YES | YES |
| Track 1/Track 2 routing | NO | YES | YES |
| Step-by-step checklist | NO | YES | YES |
| Fast Path | NO | YES | -- |
| Post-PV2 phases (E-J) | NO | YES | -- |

---

## 8. BOTTOM LINE

**The guide is a faithful implementation of the PV2 diagram's RECOMMENDED path (Fat Core).** It correctly implements what the Master Synthesis Verdict says to build, correctly defers what the verdict says to defer, and adds operational detail (checklist, tier routing, gate registry) that the diagram-level document doesn't specify.

**The key deltas are:**

1. **Intentional omissions (9 items):** Linear Pipeline components like TC planner, transition table, fractal echo, 9-phase build, micro-gates, observation pause, flat mode, recipe template. These are correctly omitted because Fat Core replaces the Linear Pipeline.

2. **Intentional additions (3 items):** gate-registry.js, tier classification, step-by-step checklist. These are reasonable implementation details that make the guide more operational than the diagram.

3. **Contradictions (3 items):**
   - **Tier routing** — guide adds what diagram forbids ("ALWAYS FLAGSHIP")
   - **Core agent input** — diagram says 8 files including mechanism catalog; guide says 4 files without it
   - **SC-03/SC-11 thresholds** — guide changes the check semantics

**The tier routing contradiction is the most significant.** The PV2 diagram's "ALWAYS FLAGSHIP" is a core directive (line 37, reinforced throughout). The guide quietly introduces tier classification in the orchestrator, which could mean some pages get reduced treatment — exactly what the directive was designed to prevent.
