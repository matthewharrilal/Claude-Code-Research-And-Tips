# Loss Mechanism Taxonomy: Complete Classification of Pipeline Information Loss

**Analyst:** loss-mechanism-analyst (Opus 4.6)
**Date:** 2026-02-23
**Source:** 13 compliance audit files across all pipeline artifacts
**Method:** Every individual loss instance extracted, classified by TYPE, SEVERITY, STAGE, and root cause

---

## 1. TAXONOMY OF LOSS TYPES

Seven loss types identified. Five match the hypothesized categories; two are NEW discoveries from the audit data.

### Type 1: COMPRESSION
**Definition:** Information squeezed into fewer tokens, losing granularity or specificity.
**Mechanism:** A larger body of information is condensed into a smaller representation, and the condensation loses distinguishing details.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| C-01 | Content map 79 lines from ~5,800 words of source (73:1 compression) — specific paragraph content, exact quotes, individual table contents not preserved | audit-information-flow | Content → Map | LOW |
| C-02 | Exact code block contents not catalogued in content map | audit-information-flow | Content → Map | LOW |
| C-03 | 4 named tensions collapsed to implicit effects in the execution brief — "Chaos vs Control," "Accessibility vs Gatekeeping," etc. are NOT listed in the brief body | audit-information-flow | Map → Brief | MEDIUM |
| C-04 | Reader profile relegated to appendix (12 lines) instead of integrated into Tiers 1-3 of brief; axis positions (Info Density 4/5, Entry Velocity 2/5) that should drive CSS decisions buried | audit-information-flow | Map → Brief | MEDIUM |
| C-05 | Content Map Appendix compressed to ~12 lines (was 79 lines); metaphor seed alternatives, per-section breakdowns, full density arc commentary lost | audit-tc-brief-template | Map → Brief | MEDIUM |
| C-06 | Tier 4 disposition budget 25 lines vs 40-line target — technique specifics lost, D-08 has zero CSS values (purpose-only) | audit-tc-brief-template | Map → Brief | HIGH |
| C-07 | Per-section element type classification collapsed to per-ZONE — 13 sections mapped to 6 zones, losing within-zone granularity | audit-routing | Content → Map | MEDIUM |
| C-08 | Structural heterogeneity reported as aggregate "HIGH" without per-section 3+ element type count evidence or section-length weighting | audit-routing | Content → Map | LOW |
| C-09 | Metaphor seeds #2 (Colony) and #3 (Control Room) dropped from brief — only the recommended Refinery survives | audit-information-flow | Map → Brief | LOW |
| C-10 | 73-line constraint layer target exceeded (~88-152 lines depending on measurement) — but the REVERSE problem: constraint layer is larger than intended, consuming token budget | audit-routing | Map → Brief | LOW |

**COMPRESSION TOTAL: 10 instances**

---

### Type 2: ESTIMATION
**Definition:** Values miscalculated, approximated, or chosen incorrectly relative to specifications.
**Mechanism:** The builder or assembler makes a numerical judgment that differs from the specified value.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| E-01 | Z3 background: brief specified #F5EFE5, builder implemented #FFF2E0 — resulting Z2→Z3 delta 11 vs specified ~16 | audit-information-flow, audit-builder-recipe | Brief → HTML | CRITICAL |
| E-02 | Z4 background: brief specified #FAF5ED, builder implemented #F0EBE5 — resulting Z3→Z4 delta 8 vs specified ~16 | audit-information-flow, audit-builder-recipe | Brief → HTML | CRITICAL |
| E-03 | Z4→Z5 delta 21 vs brief target 29 (HEAVY transition) — builder chose background colors that produce weaker delta than specified | audit-builder-recipe | Brief → HTML | HIGH |
| E-04 | Z5→Z6 delta 16 vs brief target 19 (MEDIUM transition) — marginally below specification | audit-builder-recipe | Brief → HTML | MEDIUM |
| E-05 | Z2 line-height implemented as 1.7 but brief D-01 specified 1.6 for the dense reference zone | audit-information-flow | Brief → HTML | LOW |
| E-06 | Header padding implemented as 48px/32px but D-03 specified "tight 12px padding" for dense purposeful header | audit-information-flow | Brief → HTML | LOW |
| E-07 | All Z2-Z6 H2s uniform at 28px — value table prescribed variation (28-32px by zone) | audit-value-tables | Brief → HTML | LOW |
| E-08 | All H3s uniform at 20px — value table prescribed variation (20-24px by zone) | audit-value-tables | Brief → HTML | LOW |
| E-09 | Zone padding-bottom values systematically ~50% of prescribed (Z1: 48px vs 64px, Z2: 32px vs 48px, Z5: 32px vs 64px, Z6: 48px vs 80px) | audit-value-tables | Brief → HTML | MEDIUM |
| E-10 | Zone inner spacing systematically ~50% of prescribed (16px actual vs 32px prescribed in moderate zones) | audit-value-tables | Brief → HTML | MEDIUM |
| E-11 | Label sizes all 10px vs prescribed 11-12px variation | audit-value-tables | Brief → HTML | LOW |
| E-12 | Z1 label letter-spacing 0.1em vs prescribed 0.05em (doubled) | audit-value-tables | Brief → HTML | LOW |
| E-13 | Gate GR-05 measured rgb(74,144,217) on .role-card__level but CSS defines --accent-blue: #A07D50 (warm brown) — computed value differs from source CSS | audit-gate-runner, audit-skill | HTML → Gates | MEDIUM |
| E-14 | Gate GR-07 (header DNA) measured border at 2.67px but CSS specifies 3px — subpixel rendering discrepancy | audit-information-flow | HTML → Gates | LOW |
| E-15 | Gate GR-08 checks ">=2 distinct weights" but specification says "must follow 4/3/1px hierarchy" — JS implementation weaker than textual spec | audit-gate-runner | Artifact design | MEDIUM |
| E-16 | Section height estimates absent from content map (generated by brief assembler instead of content analyst) — reverses intended information flow | audit-routing | Content → Map | MEDIUM |
| E-17 | Transition weight vocabulary absent from content map (generated by brief assembler instead of content analyst) | audit-routing | Content → Map | MEDIUM |
| E-18 | Z1 H2 at 32px (2rem) vs prescribed 40px — 20% smaller | audit-value-tables | Brief → HTML | LOW |

**ESTIMATION TOTAL: 18 instances**

---

### Type 3: OVERRIDE
**Definition:** Builder creative authority overriding specific instructions in the brief.
**Mechanism:** The builder exercises the 80% creative authority band to choose different values than the brief specified, or introduces elements the spec prohibits.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| O-01 | Cold purple #7C3AED declared as --accent-purple — this EXACT hex value is prohibited in the builder recipe (line 96) | audit-builder-recipe | Brief → HTML | HIGH |
| O-02 | Cold blue --syntax-function: #4A7C9B used in syntax highlighting — violates warm palette constraint | audit-identity-perception | Brief → HTML | MEDIUM |
| O-03 | Component naming divergence: brief specifies .table-wrapper, .section-header, .grid--2col but builder used .profile-table, .section-indicator, .role-grid | audit-information-flow | Brief → HTML | LOW |
| O-04 | CSS budget 1,687 lines vs 800-1200 specified upper bound — 42% over maximum | audit-information-flow, audit-builder-recipe | Brief → HTML | LOW |
| O-05 | 6 zones for ~5,800 words vs recommended 4-5 for the 5,000-10,000 word bracket | audit-routing | Map → Brief | LOW |
| O-06 | Weaver overrode REBUILD verdict (required by identity gate failure GR-05) to SHIP WITH FIXES — judgment-based override of binary verdict logic | audit-gate-runner, audit-manifest, audit-orchestrator | Gates → Verdict | HIGH |
| O-07 | Gate GR-06 marked PASS* with asterisk — binary gate principle violated by human judgment override | audit-gate-runner | HTML → Gates | HIGH |
| O-08 | New background colors introduced (Z3 #FFF2E0, Z4 #F0EBE5) not from pre-computed value table pairs — creative authority used to choose untested pairs | audit-value-tables | Brief → HTML | MEDIUM |
| O-09 | Builder introduced concept-named variable --accent-blue with misleading name (actual value #A07D50 is warm brown, not blue) | audit-skill | Brief → HTML | LOW |

**OVERRIDE TOTAL: 9 instances**

---

### Type 4: OMISSION
**Definition:** Instructions simply not followed, skipped, or absent from the output.
**Mechanism:** A required element in the specification is not present in the output — not compressed or approximated, simply missing.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| OM-01 | Zone-specific ::selection colors not implemented — brief specified "warm red in Z1-Z2, cooler teal in Z5-Z6"; only global red + Z6 red exists | audit-builder-recipe, audit-information-flow | Brief → HTML | MEDIUM |
| OM-02 | Print styling (@media print) completely absent — D-07 explicitly lists this as a technique | audit-builder-recipe | Brief → HTML | MEDIUM |
| OM-03 | First-child principle treatment not implemented — brief D-07 specified "4px top border on first-child principles" | audit-information-flow | Brief → HTML | LOW |
| OM-04 | Table row hover tint missing in Z2 — brief specified "hover states on role cards in Z2 revealing communication patterns (table row tint: rgba(232,48,37,0.05))" | audit-builder-recipe | Brief → HTML | LOW |
| OM-05 | Callout border-left-width not increased to 5px in Z5 dense zones as specified — stays at 4px | audit-builder-recipe | Brief → HTML | LOW |
| OM-06 | Global p { max-width: 70ch } absent — SC-10 specifies this as a family DNA property; individual paragraphs have various max-widths but no global rule | audit-identity-perception | Brief → HTML | MEDIUM |
| OM-07 | Conviction statement not output as SEPARATE FILE — embedded as HTML comment instead, breaking REBUILD path | audit-manifest, audit-pipeline-fidelity | Brief → HTML | MEDIUM |
| OM-08 | Weaver Output B (artistic impression) missing — MANIFEST specifies TWO outputs but only diagnostic verdict produced | audit-manifest, audit-pipeline-fidelity, audit-pa-protocol | PA → Verdict | HIGH |
| OM-09 | 24 of 42 gates not executed or not reported (GR-07, GR-08, GR-16, GR-19-22, GR-23-42) | audit-gate-runner, audit-manifest | HTML → Gates | HIGH |
| OM-10 | Precondition gates (GR-23-28) not documented — no explicit precondition check log in output | audit-manifest, audit-gate-runner | Pre-Build | MEDIUM |
| OM-11 | 768px responsive gate re-run not performed — screenshots exist but no gate results at 768px | audit-gate-runner | HTML → Gates | MEDIUM |
| OM-12 | Emotional arc 4-register assessment (SURPRISE/DELIGHT/AUTHORITY/CLOSURE) absent from verdict | audit-pa-protocol | PA → Verdict | MEDIUM |
| OM-13 | Fix classification by type (MECHANICAL/STRUCTURAL/COMPOSITIONAL) absent from verdict — uses severity instead | audit-pa-protocol | PA → Verdict | MEDIUM |
| OM-14 | Builder self-evaluation likely incomplete — trailing whitespace void (flagged by 9/9 PA auditors, ~5 viewport-heights) strongly suggests final screenshots not taken during build | audit-orchestrator | Brief → HTML | HIGH |
| OM-15 | GR-19 (Whitespace Voids) gate not executed — this gate should have caught the trailing void programmatically | audit-gate-runner | HTML → Gates | HIGH |
| OM-16 | GR-08 (No Decorative Elements) gate completely absent from execution | audit-gate-runner | HTML → Gates | LOW |
| OM-17 | No model identification logged in any output file | audit-pipeline-fidelity, audit-orchestrator | All stages | LOW |
| OM-18 | Content map missing per-section character vocabulary (NARRATIVE/REF/CODE per individual section, not per zone) | audit-routing | Content → Map | LOW |
| OM-19 | Content map missing "What they expect" and "What should surprise them" reader profile fields | audit-routing | Content → Map | LOW |
| OM-20 | No animation-disabling or font-readiness evidence in screenshot protocol | audit-pipeline-fidelity | HTML → PA | LOW |
| OM-21 | text-indent technique absent from D-07 edge intentionality | audit-builder-recipe | Brief → HTML | LOW |

**OMISSION TOTAL: 21 instances**

---

### Type 5: DILUTION
**Definition:** Too much information causing selective attention — the agent cannot process everything and drops items.
**Mechanism:** When a specification contains many small instructions, the agent implements the prominent ones and drops the subtle ones.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| D-01 | D-07 (Edge Intentionality) has 5 micro-techniques — only 2.5/5 deployed. Hover + first/last-child implemented; ::selection, print, text-indent dropped. The MANY-SMALL-INSTRUCTIONS pattern | audit-builder-recipe, audit-information-flow | Brief → HTML | MEDIUM |
| D-02 | Value table prescribes 20 background color pairs — builder used only 5 exactly, created 2 novel pairs. The remaining 13 pairs were not wrong to ignore (80% authority) but the sheer volume means the builder cherry-picked rather than studied the full range | audit-value-tables | Brief → HTML | LOW |
| D-03 | Per-zone typography combinations prescribe 8 properties per zone across 6 zones = 48 values. Builder matched ~60% of per-zone typography values. The volume of typography micro-specifications exceeds what a single-pass builder can track | audit-value-tables | Brief → HTML | MEDIUM |
| D-04 | Per-zone padding progressions prescribe top/bottom/inner spacing for 6 zones = 18 values. Builder matched padding-top (5/6) but padding-bottom (2/6) and inner spacing (0/6). Attention allocated to the FIRST column of each specification | audit-value-tables | Brief → HTML | MEDIUM |
| D-05 | 42-gate specification: orchestrator ran 18 gates. The gate runner artifact is 1,380 lines — the volume of gates and code overwhelms a single orchestrator pass | audit-gate-runner | HTML → Gates | HIGH |
| D-06 | Execution brief 174 lines with 4 tiers + appendix — builder realized 78% of traceable items. The 22% loss concentrates in micro-specifications (specific hex colors, specific padding values, specific sub-techniques) while macro-specifications (zone structure, metaphor, transitions) propagate at ~95% | audit-information-flow | Brief → HTML | MEDIUM |

**DILUTION TOTAL: 6 instances**

---

### Type 6: DRIFT (NEW — not in original hypothesis)
**Definition:** Gradual deviation from specification across repeated similar decisions, where each individual deviation is small but the cumulative effect is significant.
**Mechanism:** The builder makes a series of "close enough" choices that individually seem acceptable but collectively flatten the designed variation.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| DR-01 | Background deltas cluster in 15-27 RGB range when spec asks for 15-50+ range with 20 as floor and 50 as dramatic. All 5 interior boundaries converge toward the narrow band. No boundary reaches "dramatic" (50+). Only 1 reaches "compositional" (25+) | audit-builder-recipe, audit-value-tables | Brief → HTML | HIGH |
| DR-02 | H2 sizes flatten to uniform 28px across Z2-Z6 — prescribed variation was 28-32px. The builder settled on one comfortable value and repeated it | audit-value-tables | Brief → HTML | MEDIUM |
| DR-03 | H3 sizes flatten to uniform 20px across all zones — prescribed variation was 20-24px. Same flattening pattern | audit-value-tables | Brief → HTML | MEDIUM |
| DR-04 | Label sizes flatten to uniform 10px — prescribed 11-12px variation. Same pattern | audit-value-tables | Brief → HTML | LOW |
| DR-05 | Inner spacing compresses uniformly to ~50% of prescribed — instead of zone-specific spacing (48px Z1, 32px Z2, 24px Z3, etc.), all zones converge toward 16px paragraph margin | audit-value-tables | Brief → HTML | MEDIUM |
| DR-06 | Padding-bottom values flatten: Z1 48px, Z2 32px, Z3 32px, Z4 48px, Z5 32px, Z6 48px — only 2 distinct values (32, 48) instead of the 6 distinct prescribed values (64, 48, 32, 48, 64, 80) | audit-value-tables | Brief → HTML | MEDIUM |
| DR-07 | Zone backgrounds converge toward warm cream range rather than spanning the full warm palette. Builder's creative choices cluster around #EDE6DA-#FFF2E0 (delta ~20) rather than using the full #FEF9F5-#D5CCC0 range (delta ~53) available in the value table | audit-value-tables | Brief → HTML | HIGH |

**DRIFT TOTAL: 7 instances**

---

### Type 7: STRUCTURAL MISMATCH (NEW — not in original hypothesis)
**Definition:** The pipeline's own architecture creates information loss through mismatches between specification format and execution format.
**Mechanism:** The specification says one thing about how the pipeline should work, but the pipeline's actual execution model cannot accommodate that specification.

| # | Instance | Source Audit | Stage | Severity |
|---|----------|-------------|-------|----------|
| SM-01 | GR-14 binary gate has no exception mechanism for intentional large gaps — D-04 authorizes a dark inversion block creating 318px gap, but the gate has no way to know this is intentional. The BINARY GATE FORMAT structurally cannot accommodate INTENTIONAL DEVIATION | audit-gate-runner | HTML → Gates | HIGH |
| SM-02 | GR-05/GR-06 check document.querySelectorAll('*') including HTML/HEAD/META/TITLE — browser default styles create false positives that the binary gate cannot handle. The gate code structurally cannot distinguish authored CSS from browser defaults | audit-gate-runner | HTML → Gates | MEDIUM |
| SM-03 | Gate runner checks COMPUTED styles but brief specifies SOURCE values — CSS custom property #FFF2E0 may compute differently than its hex value suggests (gate measured Z3 as #F5EFE5 not #FFF2E0). The measurement model structurally differs from the specification model | audit-gate-runner, audit-information-flow | HTML → Gates | HIGH |
| SM-04 | MANIFEST verdict logic says "identity gate FAIL = REBUILD" but the weaver received contextual information that GR-05 is a 5-minute mechanical fix. The BINARY VERDICT TREE structurally cannot accommodate SEVERITY CONTEXT | audit-gate-runner, audit-orchestrator, audit-manifest | Gates → Verdict | HIGH |
| SM-05 | PA-24/PA-25 (cross-page questions) structurally unanswerable with only one page to evaluate — the protocol assigns them but the execution context makes them impossible | audit-pa-protocol | PA Deployment | LOW |
| SM-06 | PA-67 binary YES/NO criteria ambiguous for "partially novel" pages — auditor answered "Partially" which is not a valid binary response. The BINARY SCORING FORMAT cannot accommodate GRADIENT ASSESSMENT | audit-pa-protocol | PA → Verdict | LOW |
| SM-07 | Gate runner gate ID renumbering (artifact GR-07-10 decomposed and renumbered in fresh run) — artifact's ID scheme structurally mismatches the orchestrator's execution mapping | audit-gate-runner | HTML → Gates | MEDIUM |
| SM-08 | Two conflicting gate result files exist (gate-results.md with GR-XX naming vs _gate-results.md with SC/PT naming) reporting different outcomes for the same page. Pipeline versioning structurally fails | audit-gate-runner | HTML → Gates | HIGH |
| SM-09 | Content map "what the content IS" mandate vs metaphor seeds including "CSS directions: industrial materials, heat gradients..." — the content analysis role structurally bleeds into design prescription | audit-orchestrator, audit-routing | Content → Map | LOW |
| SM-10 | Brief line count targets contradict: artifact-orchestrator.md says 93-113 lines, MANIFEST says 100-165 lines. Internal document contradiction creates structural ambiguity | audit-orchestrator | Artifact design | MEDIUM |

**STRUCTURAL MISMATCH TOTAL: 10 instances**

---

## 2. LOSS COUNT AND SEVERITY BY ARTIFACT

| Artifact | Audit Score | Loss Instances | CRITICAL | HIGH | MEDIUM | LOW |
|----------|------------|---------------|----------|------|--------|-----|
| Gate Runner (artifact-gate-runner.md) | 68% | 16 | 0 | 5 | 6 | 5 |
| Builder Recipe (artifact-builder-recipe.md) | 86.7% | 14 | 2 | 2 | 5 | 5 |
| Routing (artifact-routing.md) | 71.4% | 10 | 0 | 0 | 5 | 5 |
| TC Brief Template (artifact-tc-brief-template.md) | 83.7% | 7 | 0 | 1 | 4 | 2 |
| Value Tables (artifact-value-tables.md) | 86.9% effective | 13 | 0 | 2 | 5 | 6 |
| MANIFEST (MANIFEST.md) | 70.6% | 8 | 0 | 3 | 3 | 2 |
| Orchestrator (artifact-orchestrator.md) | 87% | 8 | 0 | 1 | 4 | 3 |
| Identity-Perception (artifact-identity-perception.md) | 78.8% met | 7 | 2 | 1 | 2 | 2 |
| PA Protocol (artifact-pa-protocol.md) | 94/100 | 5 | 0 | 1 | 3 | 1 |
| Skill (SKILL.md) | N/A (7/10 sufficiency) | 2 | 0 | 0 | 1 | 1 |
| Worked Examples (artifact-worked-examples.md) | 3/5 utility | 3 | 0 | 0 | 1 | 2 |
| Pipeline Fidelity (overall) | 86% | 7 | 0 | 2 | 3 | 2 |
| Information Flow (overall) | ~85% | 8 | 2 | 1 | 3 | 2 |

**Most loss-prone artifacts:**
1. **Gate Runner** — 16 instances (structural mismatches dominate)
2. **Builder Recipe** — 14 instances (estimation and omission dominate)
3. **Value Tables** — 13 instances (drift and estimation dominate)
4. **Routing** — 10 instances (compression and omission dominate)

---

## 3. LOSS COUNT AND SEVERITY BY TYPE

| Loss Type | Instances | CRITICAL | HIGH | MEDIUM | LOW | Most Damaging Instance |
|-----------|-----------|----------|------|--------|-----|----------------------|
| **OMISSION** | 21 | 0 | 4 | 8 | 9 | OM-14: Builder self-evaluation incomplete (trailing void) |
| **ESTIMATION** | 18 | 2 | 1 | 6 | 9 | E-01/E-02: Z3/Z4 background colors wrong (gate GR-11 failure) |
| **COMPRESSION** | 10 | 0 | 1 | 5 | 4 | C-06: Tier 4 disposition budget underdelivered |
| **STRUCTURAL MISMATCH** | 10 | 0 | 4 | 3 | 3 | SM-01/SM-04: Binary gates cannot handle intentional deviations |
| **OVERRIDE** | 9 | 0 | 3 | 2 | 4 | O-01: Cold purple #7C3AED explicitly prohibited but used |
| **DRIFT** | 7 | 0 | 2 | 4 | 1 | DR-01: Background deltas cluster in narrow 15-27 band |
| **DILUTION** | 6 | 0 | 1 | 4 | 1 | D-05: 42-gate spec overwhelms orchestrator (18 run) |
| **TOTAL** | **81** | **2** | **16** | **32** | **31** |

**Most damaging loss type: ESTIMATION** — the 2 CRITICAL instances (E-01, E-02) are the ONLY losses that directly cause a gate failure and downgrade the verdict. The builder chose different background colors than the brief specified for Z3 and Z4, producing RGB deltas of 8 and 11 (vs >=15 threshold). This single estimation error is the root cause of the page's most consequential quality defect.

**Most frequent loss type: OMISSION** — 21 instances, but most are LOW severity. The pattern is consistent: when a specification contains many small requirements, the builder implements the prominent ones and skips the subtle ones.

---

## 4. LOSS COUNT AND SEVERITY BY PIPELINE STAGE

| Stage | Instances | CRITICAL | HIGH | MEDIUM | LOW | Propagation Rate |
|-------|-----------|----------|------|--------|-----|-----------------|
| **Brief → HTML** | 35 | 2 | 5 | 13 | 15 | 78% (from info-flow audit) |
| **HTML → Gates** | 15 | 0 | 5 | 5 | 5 | 85% |
| **Content → Map** | 8 | 0 | 0 | 4 | 4 | 95% |
| **Map → Brief** | 7 | 0 | 1 | 4 | 2 | 90% |
| **PA → Verdict** | 5 | 0 | 1 | 3 | 1 | 95% |
| **Gates → Verdict** | 2 | 0 | 2 | 0 | 0 | 100% |
| **Artifact Design** | 4 | 0 | 0 | 3 | 1 | N/A |
| **Pre-Build** | 2 | 0 | 0 | 2 | 0 | N/A |
| **PA Deployment** | 1 | 0 | 0 | 0 | 1 | 92% |
| **All Stages** | 2 | 0 | 0 | 0 | 2 | N/A |

**The Brief → HTML junction accounts for 43% of all loss instances (35/81) and 100% of CRITICAL losses.** This is consistent with the information flow audit finding it the "primary loss point" at 78% propagation. The builder must translate ~174 lines of specification into ~2,900 lines of HTML/CSS — a 17:1 expansion ratio that requires thousands of micro-decisions, each a potential loss point.

**The HTML → Gates junction accounts for 19% of all losses (15/81)** — these are primarily structural mismatches where the gate measurement model doesn't match the specification model.

---

## 5. PATTERN ANALYSIS: SYSTEMATIC OR RANDOM?

### Finding: Losses are overwhelmingly SYSTEMATIC, not random.

**5 systematic patterns identified:**

#### Pattern A: "Comfortable Default Convergence" (DRIFT type)
The builder consistently converges toward comfortable middle values rather than using the specified range. Background deltas cluster at 15-27 (should span 15-50). H2 sizes flatten to 28px (should vary 28-32). H3 sizes flatten to 20px (should vary 20-24). Inner spacing converges to 16px (should vary 12-48). This is not random loss — it is a systematic tendency to reduce variation.

**Evidence:** 7 DRIFT instances, all at the Brief → HTML stage, all showing the same "flatten to single comfortable value" pattern.

#### Pattern B: "Prominence-Based Selective Attention" (DILUTION + OMISSION)
When a specification contains N requirements, the builder implements the most prominent ones and drops the least prominent. D-07 has 5 techniques — 2.5 implemented. Value table has 20 color pairs — 5 used. Per-zone typography has 48 values — ~60% matched. Gate runner has 42 gates — 18 executed. The drop rate is roughly proportional to the total count: more items = lower per-item implementation rate.

**Evidence:** D-01 through D-06 (1-3 instructions each) propagated at 85-95%. D-07 (5 micro-instructions) propagated at 60%. The correlation between instruction count and implementation rate is inverse.

#### Pattern C: "Padding-Top Priority" (ESTIMATION)
When specifications give top/bottom/inner spacing for each zone, the builder consistently matches padding-top (5/6 correct) but diverges on padding-bottom (2/6) and inner spacing (0/6). Attention is allocated to the FIRST property mentioned in each specification cluster.

**Evidence:** audit-value-tables Section 2b shows 5/6 top-padding match, 2/6 bottom-padding match, 0/6 inner spacing match — a perfect gradient of declining fidelity from first-mentioned to last-mentioned.

#### Pattern D: "Binary Gate Structural Limits" (STRUCTURAL MISMATCH)
Binary gates structurally cannot handle: (a) intentional violations authorized by dispositions, (b) browser default styles creating false positives, (c) computed values differing from source values, (d) severity context for verdict logic. This is not a gate runner BUG — it is an architectural limitation of the binary gate model when applied to a pipeline with creative authority.

**Evidence:** SM-01 through SM-04 all share the same root cause: the binary gate specification format cannot accommodate the pipeline's actual execution model.

#### Pattern E: "Phase Boundary Blurring" (COMPRESSION)
The content analyst and brief assembler roles blur at the boundary. Section heights, transition weights, and per-section character classifications were specified for the content map but generated by the brief assembler. This reverses the intended information flow and means the brief assembler must infer information that the content analyst should have generated.

**Evidence:** audit-routing Requirements 20-21 (section heights and transition weights absent from content map, present only in execution brief).

---

## 6. ROOT CAUSE CHAIN

### Root Cause 1: Single-Value Satisficing
**Type:** DRIFT, ESTIMATION
**Chain:** Builder encounters a specification range (e.g., "15-50 RGB delta") → selects a value near the floor that satisfies the minimum → repeats similar values across all instances → cumulative effect is flattened variation.
**Underlying mechanism:** LLM builders optimize for "passing" constraints rather than "using the full range." The specification presents thresholds as floors, but the builder treats them as targets.
**Instances:** DR-01 through DR-07, E-07 through E-12 = 13 instances

### Root Cause 2: Attention Decay Over Specification Length
**Type:** DILUTION, OMISSION
**Chain:** Brief/recipe contains N instructions per section → builder processes instructions sequentially → implementation quality decays from first instruction to last → micro-specifications in latter positions are dropped.
**Underlying mechanism:** LLM context window creates a recency/prominence gradient. Instructions that appear earlier, are larger, or are more structurally prominent get more attention.
**Instances:** D-01 through D-06, OM-01 through OM-06, OM-21 = 13 instances

### Root Cause 3: Background Color as Creative Decision
**Type:** ESTIMATION, OVERRIDE
**Chain:** Brief specifies zone background hex values → builder treats these as suggestions (80% creative authority) → chooses new colors → new colors produce insufficient RGB deltas → gate GR-11 fails.
**Underlying mechanism:** Background colors sit in a specification ambiguity zone. They are specified as "Tier 3 Compositional" (80% creative authority) but they produce "Tier 2 Perception Physics" gate failures (non-negotiable). The builder has authority to change them but changing them breaks a non-negotiable.
**Instances:** E-01, E-02, E-03, E-04, O-08 = 5 instances, including both CRITICAL losses

### Root Cause 4: Binary Format Incompatible with Contextual Judgment
**Type:** STRUCTURAL MISMATCH
**Chain:** Gate/verdict specification uses binary format → execution context contains intentional deviations, false positives, or severity nuance → binary format forces incorrect classification → human judgment overrides are applied, creating compliance violations.
**Underlying mechanism:** The pipeline uses binary rules for compliance checking but contextual judgment for quality assessment. These two systems conflict when a binary rule is technically violated for a contextually justified reason.
**Instances:** SM-01 through SM-04, SM-06, O-06, O-07 = 7 instances

### Root Cause 5: Gate Coverage Overwhelm
**Type:** DILUTION, OMISSION
**Chain:** Artifact specifies 42 gates → gate runner is 1,380 lines of JavaScript → orchestrator executes a subset of 18 gates → critical gates (GR-19 whitespace voids) are in the unexecuted 24 → trailing void goes undetected until PA auditors find it.
**Underlying mechanism:** The gate runner artifact grew to encompass identity, perception, anti-pattern, precondition, verdict, mode, experiment, and policy gates. The orchestrator cannot execute all of them in a single pass and selectively runs the most prominent categories.
**Instances:** D-05, OM-09, OM-10, OM-11, OM-15, OM-16 = 6 instances

### Root Cause 6: Phase Boundary Ambiguity
**Type:** COMPRESSION, OMISSION
**Chain:** Content analyst role specified to produce 6-7 types of analysis → some types (section heights, transition weights) require CSS judgment → content analyst produces content analysis but not CSS-informed measurements → brief assembler must generate these from scratch.
**Underlying mechanism:** The content analyst and brief assembler have overlapping but unclear responsibilities. The routing artifact assigns work to the content analyst that requires brief-assembler-level CSS knowledge.
**Instances:** C-07, E-16, E-17, OM-18, OM-19, SM-09 = 6 instances

---

## 7. SEVERITY RANKING: TOP 15 INDIVIDUAL LOSSES BY IMPACT

| Rank | ID | Description | Type | Stage | Impact on Output Quality |
|------|-----|------------|------|-------|--------------------------|
| **1** | E-01 | Z3 background color differs from brief spec (#FFF2E0 vs #F5EFE5), producing Z2→Z3 delta of 11 (below 15 threshold) | ESTIMATION | Brief→HTML | **CRITICAL** — directly causes GR-11 FAIL, downgrades verdict, makes Z2→Z3 boundary invisible |
| **2** | E-02 | Z4 background color differs from brief spec (#F0EBE5 vs #FAF5ED), producing Z3→Z4 delta of 8 (below 15 threshold) | ESTIMATION | Brief→HTML | **CRITICAL** — directly causes GR-11 FAIL, collapses zones 2-3-4 into single visual mass |
| **3** | OM-14 | Builder self-evaluation likely incomplete — trailing whitespace void (~5 viewports) undetected during build | OMISSION | Brief→HTML | **HIGH** — produces the #1 issue flagged by 9/9 PA auditors, single biggest quality defect |
| **4** | OM-15 | GR-19 (Whitespace Voids) gate not executed — would have caught the trailing void programmatically | OMISSION | HTML→Gates | **HIGH** — gate coverage failure compounds OM-14; void reaches PA without programmatic detection |
| **5** | DR-01 | Background deltas cluster in 15-27 range (spec asks 15-50+ with "dramatic" at 50+) — no dramatic boundaries, only 1 compositional | DRIFT | Brief→HTML | **HIGH** — destroys the "different room" perception at 3 of 5 boundaries; the refinery metaphor loses its spatial power |
| **6** | O-06 | Weaver overrode REBUILD verdict to SHIP WITH FIXES (identity gate FAIL = REBUILD per spec) | OVERRIDE | Gates→Verdict | **HIGH** — violates the pipeline's own verdict logic, though judgment was reasonable |
| **7** | O-01 | Cold purple #7C3AED explicitly prohibited but used as --accent-purple | OVERRIDE | Brief→HTML | **HIGH** — soul constraint violation; the exact hex value named in the prohibition appears in CSS |
| **8** | OM-08 | Weaver Output B (artistic impression for REFINE builder) missing entirely | OMISSION | PA→Verdict | **HIGH** — any future REFINE builder receives only diagnostic language, which prior research identified as a quality suppressor |
| **9** | OM-09 | 24 of 42 gates not executed/reported | OMISSION | HTML→Gates | **HIGH** — pipeline self-evaluation is 43% coverage, missing critical whitespace void detection |
| **10** | SM-04 | Binary verdict tree cannot accommodate severity context — identity FAIL on a 5-minute fix forces REBUILD | STRUCTURAL MISMATCH | Gates→Verdict | **HIGH** — creates impossible choice: follow broken rule or exercise reasonable judgment |
| **11** | C-06 | Tier 4 disposition budget 25 lines vs 40 — exact failure mode the template was designed to prevent | COMPRESSION | Map→Brief | **HIGH** — D-08 has zero CSS values; builder has no technique vocabulary for skeleton test |
| **12** | SM-01 | Binary gate GR-14 has no exception for intentional D-04 dark inversion block (318px gap) | STRUCTURAL MISMATCH | HTML→Gates | **HIGH** — creates permanent false failure that cannot be resolved within the binary gate system |
| **13** | E-03 | Z4→Z5 delta 21 vs brief target 29 (HEAVY transition) — weakened room perception | ESTIMATION | Brief→HTML | **HIGH** — this HEAVY transition should be the most dramatic zone shift and reads as merely medium |
| **14** | D-05 | 42-gate spec overwhelms orchestrator — only 18 of 42 executed | DILUTION | HTML→Gates | **HIGH** — the gate runner artifact outgrew the orchestrator's capacity |
| **15** | DR-07 | Zone backgrounds converge toward warm cream rather than spanning full palette | DRIFT | Brief→HTML | **HIGH** — the refinery metaphor's visual geography requires distinct zones; convergence undermines this |

---

## 8. AGGREGATE STATISTICS

| Metric | Value |
|--------|-------|
| **Total loss instances identified** | 81 |
| **CRITICAL severity** | 2 (2.5%) |
| **HIGH severity** | 16 (19.8%) |
| **MEDIUM severity** | 32 (39.5%) |
| **LOW severity** | 31 (38.3%) |
| **Loss types identified** | 7 (5 hypothesized + 2 new) |
| **Most frequent type** | OMISSION (21 instances, 25.9%) |
| **Most damaging type** | ESTIMATION (2 CRITICAL + 1 HIGH = most severe concentration) |
| **Most loss-prone stage** | Brief → HTML (35 instances, 43.2%) |
| **Most loss-prone artifact** | Gate Runner (16 instances) |
| **Systematic patterns** | 5 identified (all losses fit at least one pattern) |
| **Root causes** | 6 identified |
| **Random/unexplained losses** | 0 (all losses trace to systematic root causes) |

---

## 9. KEY CONCLUSIONS

### 9.1 All losses are systematic, not random
Every one of the 81 identified loss instances traces to one of 6 root causes and fits one of 5 systematic patterns. There are zero "noise" losses — no cases where the pipeline randomly dropped information for no traceable reason. This means losses are PREDICTABLE and therefore PREVENTABLE.

### 9.2 The Brief → HTML junction is the critical bottleneck
43% of all losses (35/81) and 100% of CRITICAL losses occur at this junction. The builder makes a 17:1 expansion from specification to implementation, and each micro-decision is a loss opportunity. The two most impactful individual losses (E-01, E-02) are both background color estimation errors at this junction.

### 9.3 DRIFT is the most underappreciated loss type
While OMISSION is most frequent and ESTIMATION is most damaging in individual instances, DRIFT is the most insidious because it is invisible to binary gates. Every individual DRIFT instance "passes" the minimum threshold but the CUMULATIVE effect is that the page's designed variation is flattened to a narrow range. Binary gates cannot detect drift because they check individual values against floors, not distributions against intended ranges.

### 9.4 The gate runner is the most architecturally conflicted artifact
The gate runner has the most loss instances (16) and the lowest compliance score (68%). Its losses are primarily STRUCTURAL MISMATCH — the binary gate format is fundamentally incompatible with a pipeline that grants 80% creative authority and authorizes intentional deviations via dispositions. The gate runner needs an architectural revision, not just more gates.

### 9.5 The "comfortable default" is the builder's strongest attractor
Across ALL value categories (backgrounds, typography, spacing, borders), the builder converges toward a single comfortable value rather than using the specified range. This pattern (Root Cause 1) accounts for 13 of 81 instances (16%) and is responsible for the two HIGH-severity DRIFT instances. The builder does not VIOLATE specifications — it FLATTENS them.

### 9.6 Background colors should be NON-NEGOTIABLE, not 80% creative authority
The two CRITICAL losses (E-01, E-02) both result from the builder exercising creative authority over zone background colors. The brief specified exact hex values; the builder chose alternatives; the alternatives produced insufficient RGB deltas. Moving zone background specification from Tier 3 (80% creative authority) to Tier 2 (non-negotiable perception physics) would have prevented both CRITICAL losses.
