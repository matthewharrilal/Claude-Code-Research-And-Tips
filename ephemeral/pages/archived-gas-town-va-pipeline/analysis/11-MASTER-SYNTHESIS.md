# MASTER SYNTHESIS — Gas Town VA Pipeline Analysis

**Date:** 2026-02-23
**Synthesizer:** Master Synthesis Agent (Opus)
**Sources:** 4 extraction files (3,137 lines) drawn from 30 analysis files
**Baseline:** PA-05 3/4 COMPOSED, Tier 5 6/9, SHIP WITH FIXES

---

## 1. CROSS-CUTTING FINDINGS

These are themes that converge across MULTIPLE extraction files and source analyses. Each finding is supported by evidence from at least 3 independent sources.

### CCF-01: The Trailing Void Is Universal and Unanimous

**Convergence:** 5/9 analysis files + 9/9 PA auditors + gate runner GR-14
**Sources:** 03-pa-synthesis, 05-cross-run-comparison, 09-visual-audit, 13-adversarial-review, 18-enrichment-surface-map

The trailing whitespace void (~5 viewport-heights of blank cream at 1440px, 5-7 at 768px) is the single most universally flagged defect in the entire analysis corpus. It appeared in BOTH Gas Town runs (fresh and previous), in the Flagship experiment, and is a recurring structural pattern. 9 of 9 PA auditors flagged it independently. The gate runner confirmed it programmatically. The integrative auditor's lone dissent ("does not damage reading experience") was overruled by the remaining 8/9.

**Root cause hypothesis:** `min-height: 100vh` or similar CSS on body/wrapper extending beyond content, or large bottom margin/padding on a container.

**Impact on PA-05:** +1.0 if fixed (from 2/4 to 3/4 in void-present scenario; from 3/4 to 3.25+ in current context by removing POLISHED sub-criterion defect).

**Pipeline implication:** A structural trailing-void gate (GR-XX) that measures distance from last content element to body bottom is the single most obviously needed new gate. Every analysis that touched this topic independently recommended it.

---

### CCF-02: Zone Background Deltas Are Systematically Sub-Perceptual

**Convergence:** 5/9 analysis files + 4/9 PA auditors + gate runner GR-11
**Sources:** 02-artifact-quality, 04-gate-failure-analysis, 09-visual-audit, 15-microscopic-css, 18-enrichment-surface-map; compliance audits audit-builder-recipe, audit-identity-perception, audit-information-flow, audit-value-tables

This is the DOMINANT perception-gate failure mode. Z2-Z3 delta = 11 RGB, Z3-Z4 delta = 8 RGB -- both below the 15-point threshold. The brief claimed "delta ~16" but actual computation shows the brief assembler MISCALCULATED the deltas. The builder then exercised creative authority to change colors further (brief specified Z3 as `#F5EFE5`, builder implemented `#FFF2E0`), compounding the error.

**Three independent failure points:**
1. Brief assembler estimated rather than computed deltas (E02-01, E04-02)
2. Brief used "~16" (approximate) rather than ">=16" (minimum) language (E04-05, E05-04)
3. Builder changed hex values under Tier 3 creative authority (A-01 from compliance)

**Pipeline implication:** Zone background hex values must be LOCKED (Tier 2, non-negotiable), deltas must be COMPUTED (not estimated), and the language must specify MINIMUMS with buffer (">=20, aim for 25-30"), not targets ("~16"). This triple-fix addresses all three failure points.

---

### CCF-03: Zone 4 Monotony — Identical Blockquotes Create Visual Drone

**Convergence:** 5/9 analysis files + 6/9 PA auditors
**Sources:** 03-pa-synthesis, 09-visual-audit, 12-pa-question-analysis, 13-adversarial-review, 16-macroscopic-quality

Six consecutive principle blocks with identical visual treatment (same class, same border, same padding) produces what the visual audit calls "the weakest stretch on the page." 6/9 auditors flagged it. The macroscopic quality analysis rates it as exemplifying the "correct but not composed" problem — technically compliant but emotionally flat.

**Root causes:**
- Content analyst did not flag >3 identical structural elements (AR-25)
- Brief assembler did not specify per-element variation for repeated components
- Builder applied uniform treatment to all principle blocks
- No gate exists to detect structural echo (>4 consecutive same-class elements)

**Pipeline implication:** Two-level fix needed: (1) Content analyst flags "anti-monotony" on sections with >3 identical elements (Phase 0); (2) Gate runner adds GR-XX Structural Echo detection (>4 consecutive same-class = SIGNIFICANT, >6 = BLOCKING).

---

### CCF-04: The Pipeline Produces "Correct" Not "Great" — The B+ Ceiling

**Convergence:** 6/9 analysis files
**Sources:** 06-unmeasured-dimensions, 08-editorial-designer, 12-pa-question-analysis, 13-adversarial-review, 16-macroscopic-quality, 17-meta-meta-analysis

This is the central meta-finding. The page scores 8-9/10 on CSS technical quality but achieves only "B+ tier" emotionally. The editorial designer perspective (File 08) captures it precisely: "The writing has swagger; the design has discipline." The macroscopic quality analysis (File 16) identifies "0/5 defining qualities of world-class long-form web design."

**Evidence across sources:**
- Editorial designer: "The CSS is technically excellent. Every zone works. Nothing is broken. But nothing makes you stop scrolling either."
- Macroscopic quality: "Clarity without movement. The design flatlines where the content has peaks."
- PA question analysis: 42/65 questions (~65%) measure structural properties; only 6/65 (~9%) measure experience
- Adversarial review: "Pipeline produces B+ pages reliably. It cannot produce A+ pages at all."
- Meta-meta: "Quality is a checklist of present/absent properties. We measure the page as an OBJECT."

**What separates correct from great (synthesized from all sources):**
1. **Content-form isomorphism** — form IS content, not form CONTAINS content (MQ-05)
2. **Emotional modulation** — feelings change over scroll, not steady-state (MQ-06)
3. **Surprise distribution** — 3-4 pattern breaks vs. Gas Town's 1 (MQ-03)
4. **Signature visual** — a "poster frame" viewport (MQ-04)
5. **Designed silence** — intentional restraint creating contrast (E06-11)
6. **Text measure variation** — breaking the uniform left-edge (E08-03)
7. **Voice amplification** — CSS matches content energy level (MQ-02)

**Pipeline implication:** The gap is NOT more rules. It is creative risk-taking informed by deep content understanding. The single highest-leverage intervention is the builder pre-question: "What is the ONE thing this page's design should make the reader FEEL that the text alone cannot?" (MQ-01, AR-15).

---

### CCF-05: Metaphor Fades in the Bottom Third — A Recurring Pattern

**Convergence:** 3/9 analysis files + 3/9 PA auditors + Tier 5 PA-68 FAIL
**Sources:** 05-cross-run-comparison, 09-visual-audit, 16-macroscopic-quality

Both Gas Town runs show metaphor fade: 80% expression in top third, 65% in middle, ~25% in bottom third. The bottom third contains practical content (implementation guides, comparisons, sources) where forcing the refinery metaphor onto utility content "sacrifices clarity for consistency" (AR-08). PA-68 (metaphor persistence) scored PARTIAL FAIL.

**The nuanced resolution (from adversarial review):** Metaphor affordance should be mapped PER SECTION, not applied globally. High-affordance sections get full metaphor treatment. Low-affordance sections get functional treatment with only structural echoes (concept-named custom properties, zone indicators sustaining metaphor vocabulary).

**Pipeline implication:** Content analyst should map "metaphor affordance" per section in Phase 0. Brief should specify per-zone metaphor intensity (FULL / ECHO / STRUCTURAL ONLY). This prevents both the fade AND dishonest forcing.

---

### CCF-06: The Measurement System Over-Indexes on Structure, Under-Indexes on Experience

**Convergence:** 4/6 meta-level sources
**Sources:** 06-unmeasured-dimensions, 12-pa-question-analysis, 14-perceptual-science, 17-meta-meta-analysis

Current PA question distribution: 42 structural (~65%), 14 visual quality (~22%), 6 experiential (~9%), 3 adversarial (~5%). The consequence: a page can score extremely well on structure while delivering a flat emotional experience. Gas Town is the proof — structurally excellent (14/18 gates, 6/9 Tier 5), emotionally flat (2/10 delight per editorial designer, 5/10 closure, 0 surprise distribution).

**Proposed rebalancing (from PA question deep analysis):** Reduce structural from 42 to ~25 (via retirements/merges), expand experiential from 6 to ~12 (largest improvement). Net question count: 58 (reduced from 65). Questions separating 3/4 from 4/4 increase from ~10 to ~18.

**Pipeline implication:** The PA protocol needs both question rebalancing AND a second instrument (Quality Journal) to capture degree that binary format cannot express.

---

### CCF-07: Responsive Design Is Fluid, Not Intentional

**Convergence:** 3/9 PA auditors + compliance audits + enrichment surface map
**Sources:** 03-pa-synthesis, 09-visual-audit, 18-enrichment-surface-map; compliance audit-builder-recipe

3/9 auditors flagged: "768px layout scales rather than reorganizes." Role cards remain 2-column at all viewports when single-column would improve readability. No evidence of distinct breakpoints. The builder recipe lacks responsive breakpoint guidance (E-12 from enrichment surface map rated HIGH impact).

**Pipeline implication:** Builder recipe needs explicit responsive breakpoint instructions: "At 768px breakpoint, at least 2 layout elements must REORGANIZE (change structure, not just scale)." Gate or recipe check needed.

---

### CCF-08: Prose Instructions Produce Partial Compliance; CSS-Specific Instructions Produce Full Compliance

**Convergence:** Pattern identified across ALL 13 compliance audits
**Sources:** extract-compliance (cross-cutting Pattern 1)

Empirical compliance rates by instruction type:
- Tier 1 (verbatim CSS world-descriptions): **100%** compliance
- Tier 3 multi-coherence (specific CSS values per boundary): **80%+** compliance
- Tier 4 dispositions WITH CSS values (D-04, D-05, D-06): **90%+** compliance
- Tier 4 dispositions with prose only (D-07, D-08): **60%** compliance

This confirms the earlier finding that binary rules achieve compliance, judgment rules achieve ~0%. The enrichment principle: every instruction that expects CSS output MUST include at least one CSS `property: value` pair as an example. Prose-only dispositions must be upgraded to include technique vocabulary.

---

### CCF-09: Gate Runner Has Structural Issues That Undermine Trust

**Convergence:** 4 compliance audits + gate failure analysis
**Sources:** audit-gate-runner, audit-manifest, audit-pipeline-fidelity, 04-gate-failure-analysis

Multiple structural problems:
1. **False positives from non-rendered elements:** GR-05 scans `<html>`, `<head>`, `<meta>` etc., producing 18 false "pure black" violations (browser defaults)
2. **Gate renumbering:** Fresh run used different gate IDs than the artifact
3. **Conflicting gate result files:** Two files with different outcomes exist
4. **Verdict logic deviation:** GR-05 FAIL should trigger REBUILD per artifact, but verdict was SHIP WITH FIXES
5. **Weak JS implementation:** GR-09 checks "any 2+ distinct weights" instead of the specified 4/3/1 hierarchy
6. **Missing gates:** GR-08 (No Decorative Elements) has no JS code
7. **No 768px re-run:** Artifact specifies responsive gate re-run but it was skipped

**Pipeline implication:** The gate runner needs a structural overhaul: (a) element filter for non-rendered tags, (b) canonicalized gate IDs, (c) output file naming convention, (d) verdict override mechanism, (e) JS code audit against specification text.

---

### CCF-10: The Brief Assembler Is the Critical Information Bottleneck

**Convergence:** Multiple compliance audits + pipeline flow + artifact quality analysis
**Sources:** 02-artifact-quality, 10-pipeline-flow, audit-tc-brief-template, audit-information-flow, audit-routing

Information loss at the brief assembly junction:
- Content tensions (Phase 0) lost at Phase 1 — names not preserved, effects distributed
- Section heights created at Phase 1, should be at Phase 0
- Content map appendix compressed from 79 lines to ~12 lines (violating verbatim rule)
- Tier 4 received 25 lines vs 40-line budget (template's own warning was ignored)
- RGB deltas ESTIMATED rather than COMPUTED
- Per-section element types only at aggregate level

**Pipeline implication:** The brief assembler is where the most information is lost. Fix priorities: (1) self-verify RGB delta claims programmatically, (2) enforce Tier 4 40-line minimum, (3) enforce verbatim content map appendix, (4) preserve tension names, (5) move height estimates to Phase 0.

---

## 2. THE GAP: CORRECT vs GREAT

### 2.1 The Evidence

Multiple analyses converge on the same diagnosis: Gas Town is "technically excellent but emotionally flat." The evidence:

**Quantitative:**
- CSS quality: 8-9/10 (microscopic CSS analysis)
- Gate pass rate: 14/18 (4 failures are false positives or edge cases)
- Tier 5: 6/9 (strong compositional vocabulary)
- PA-05: 3/4 COMPOSED (professional quality confirmed)

**Qualitative:**
- Editorial designer overall: "B+ execution" (File 08)
- Macroscopic quality: "Clarity without movement" (File 16)
- Visual audit: Zone transitions rated 3/5, metaphor in CSS rated 2/5 (File 09)
- PA synthesis: "Implementation Guide trends toward mechanical repetition" (verdict)

### 2.2 What Specifically Separates "Correct" from "Great"

Synthesizing all sources, the gap consists of **7 dimensions**:

| # | Dimension | Gas Town Status | What "Great" Looks Like | Source |
|---|-----------|----------------|------------------------|--------|
| 1 | **Content-form isomorphism** | Shallow (zone naming, bg tones) | "Form and content are the same thing expressed in different modalities" | 16-macroscopic |
| 2 | **Emotional modulation** | Flatline — steady absorption | Peaks, valleys, surprise, relief, resolution over scroll | 16-macroscopic, 06-unmeasured |
| 3 | **Surprise distribution** | 1 genuine surprise in 20+ screens | 3-4 pattern-breaking moments distributed across scroll | 16-macroscopic, 08-editorial |
| 4 | **Visual memory / poster frame** | No single viewport works as visual identity | At least one viewport that functions as standalone visual art | 16-macroscopic |
| 5 | **Text measure variation** | Uniform 960px left-aligned throughout | 3+ measures: narrow (600px) for reflection, standard for body, full-width for diagrams | 08-editorial |
| 6 | **Voice amplification** | "The content is punk; the design is business casual" | CSS matches content's energy — informal voice FEELS informal | 16-macroscopic |
| 7 | **Designed silence** | Implied but not deliberate (PA-64 scored NO) | At least one zone intentionally spare as compositional contrast | 06-unmeasured, 07-ceiling |

### 2.3 What the Pipeline Can Do About It

The gap has two components:

**Component A: Things the pipeline CAN address through enrichment (~60% of gap)**
- Add builder pre-question about reader feeling (MQ-01)
- Add CSS pattern library with worked examples (E07-02, E07-03)
- Add deliberate plainness disposition instruction (E06-11)
- Add text measure variation instruction (E08-03)
- Add surprise distribution targets (MQ-03)
- Implement automated REFINE cycle (E07-01)
- Add experiential PA questions to catch flatness (E06-01)

**Component B: Things that may require architectural change (~40% of gap)**
- Content-form isomorphism requires the builder to deeply understand content (not just structure)
- Voice amplification requires tone-matching that current brief format cannot specify
- Poster frame requires a visual invention pipeline does not currently enable
- True emotional modulation may require multi-pass building or human-in-the-loop

### 2.4 The Uncomfortable Truth

From the adversarial review (File 13): "The pipeline produces B+ pages reliably. It cannot produce A+ pages at all. The gap is not more rules. It is creative risk-taking informed by deep content understanding."

From the macroscopic quality analysis (File 16): "The SINGLE biggest thing our pipeline cannot produce: CONTENT-FORM ISOMORPHISM... If the answer [to the builder pre-question] is 'nothing' or 'clarity,' the page will be B+."

The pipeline may have a structural ceiling at ~3.5/4. Breaking through to 4/4 likely requires either (a) an Opus builder with exemplar reference + long creative context, or (b) a human designer's intervention on the "what should the reader feel" question before the pipeline runs.

---

## 3. COMPLIANCE SUMMARY

### 3.1 Overall Pipeline Fidelity

| Artifact | Compliance % | Notes |
|----------|-------------|-------|
| Builder Recipe | 82% (86.7% with partial) | RGB deltas, cold purple, zero dramatic backgrounds |
| Gate Runner | 68% (13/19 compliant) | Verdict logic error, gate renumbering, binary violations |
| Identity Perception | 78.8% (94.2% with partial) | BG deltas, density stacking, cold colors |
| Information Flow | ~85% aggregate | Brief-to-HTML junction at 78%, BG color deviation |
| MANIFEST | 70.6% (24/34) | Warm palette violation, missing weaver output B |
| Orchestrator | 87% (47/54) | Content map size, brief size, verdict logic |
| PA Protocol | 94/100 | Missing fix classification, missing emotional arc |
| Pipeline Fidelity | 86% weighted | Conviction statement file, weaver output B |
| Routing | 71.4% (90.5% with partial) | Section heights absent, transition weights absent |
| Skill | 7/10 sufficiency | File-writing mandate, HTTP serving |
| TC Brief Template | 83.7% (41/49) | Tier 4 line budget, content map appendix compressed |
| Value Tables | 86.9% effective | Zone padding compression, heading size flattening |
| Worked Examples | 12/12 patterns followed | No brief example, no counter-examples |

**Overall weighted fidelity: ~82%**

### 3.2 Most Faithfully Executed Artifacts

1. **PA Protocol** (94/100) — highest compliance. Auditor deployment, question assignments, and weaver synthesis closely followed the specification.
2. **Orchestrator** (87%) — phase sequencing and agent deployment were compliant. Deviations were in sizing targets and verdict logic.
3. **Pipeline Fidelity** (86% weighted) — overall process was followed. Gaps were in specific output file requirements.

### 3.3 Biggest Compliance Gaps

1. **Gate Runner** (68%) — lowest compliance. Structural issues: renumbered gates, conflicting result files, weak JS implementations, verdict logic deviation.
2. **MANIFEST** (70.6%) — second lowest. Warm palette violation (GR-05 FAIL), missing weaver output B (artistic impression), gate coverage gaps.
3. **Routing** (71.4%) — third lowest. Section heights absent from content map, transition weights absent, 73-line constraint layer exceeded.

### 3.4 TOP 10 Compliance Gaps That Directly Impacted Visual Quality

| Rank | Gap | Compliance Artifact | Visual Impact |
|------|-----|-------------------|---------------|
| 1 | Zone background hex values changed by builder (Tier 3 creative authority) | audit-information-flow | Z2-Z3 delta = 11, Z3-Z4 = 8 — both sub-perceptual |
| 2 | Tier 4 only 25 lines vs 40-line budget | audit-tc-brief-template | D-07 and D-08 lack technique vocabulary → 60% propagation |
| 3 | Cold purple #7C3AED used despite explicit prohibition | audit-builder-recipe | GR-05 identity gate FAIL |
| 4 | Content map appendix compressed (12 lines vs 79) | audit-tc-brief-template | Builder lacks full content analysis context |
| 5 | No responsive breakpoint guidance in recipe | audit-builder-recipe | Layout scales, doesn't reorganize at 768px |
| 6 | GR-05 scans non-rendered elements (false positives) | audit-gate-runner | 18 false "pure black" violations, verdict trust eroded |
| 7 | D-07 Edge Intentionality at 60% propagation | audit-information-flow | Zero print styling, no zone-specific ::selection |
| 8 | H2/H3 sizes uniform across zones (28px/20px everywhere) | audit-value-tables | Typographic flattening reduces zone differentiation |
| 9 | Builder self-evaluation not verified | audit-orchestrator | Trailing void not caught pre-PA |
| 10 | Verdict logic override: FAIL → SHIP WITH FIXES | audit-gate-runner | Identity gate failure not treated as REBUILD trigger |

### 3.5 Verdict Logic Deviation

The MANIFEST and gate runner artifact both specify: identity gate FAIL = REBUILD. GR-05 FAILED (98 cold colors). Per the artifact's verdict logic, the verdict should have been REBUILD, not REFINE or SHIP WITH FIXES.

The weaver exercised judgment that GR-05 was a mechanical fix (one color replacement + browser defaults), not a fundamental soul violation. This judgment was CORRECT in substance but DEVIANT in process.

**Recommended resolution:** Add formal verdict override mechanism with documented justification, AND add "SHIP WITH FIXES" as a formal verdict category.

---

## 4. MEASUREMENT FRAMEWORK GAPS

### 4.1 What We're Blind To

From the perceptual science foundations analysis (File 14), five dimensions have near-zero measurement coverage:

| Dimension | Current Coverage | What It Is | Why It Matters |
|-----------|-----------------|------------|----------------|
| Encoding efficiency | 0% | Meaningful distinctions per visual feature | Higher encoding = richer page with less clutter |
| Proximity ratio | 0% | Inter-group / intra-group spacing ratio | Determines grouping strength (absolute gap != perceived grouping) |
| Depth/layering | 5% | Perceptible visual planes from deepest to shallowest | Gas Town lacks depth — everything on one visual plane |
| Closure exploitation | 5% | Implied shapes/regions not explicitly drawn | Measures design sophistication |
| Scan path optimization | 15% | Eye movement guidance matching content priority | Measures visual hierarchy effectiveness |

From the unmeasured dimensions analysis (File 06), the experiential dimensions are severely under-measured:

| Dimension | Current Coverage | Proposed Coverage |
|-----------|-----------------|-------------------|
| Memorability | 10% | 30% (PA-88, NEW-02, QJ-05) |
| Emotional sequencing | 15% | 40% (PA-80, PA-85, QJ-01) |
| Type as expression | 15% | 35% (NEW-05, NEW-06) |
| Content-form resonance | 5% | 25% (PA-87, NEW-07) |
| Engagement sustainability | 20% | 45% (NEW-01, NEW-13, QJ-01) |
| Intentional confidence | 10% | 30% (PA-91, NEW-08, NEW-17) |

### 4.2 Complete List of Proposed New Questions

See Section 6 for the full enumerated list (46 new PA questions + 10 Quality Journal questions + 5 adversarial questions).

### 4.3 Proposed New Measurement Instruments

See Section 7 for the full gate list and the NM-01 through NM-10 instruments from perceptual science.

### 4.4 Measurement Paradigm Shifts

From the meta-meta analysis (File 17), three paradigm shifts are recommended:

1. **Object to Experience:** Stop measuring only what the page IS. Start measuring what the page DOES to a reader over time.
2. **Binary to Dual-Instrument:** Keep binary PA for gate/ship decisions. ADD Quality Journal (1-7 scales) for degree capture.
3. **Homogeneous to Mixed-Method:** Replace 9 identical-method auditors with 3 binary PA + 2 open-ended + 2 emotional journaling + 1 task-based + 1 comparison-based.

---

## 5. PIPELINE ENRICHMENT RECOMMENDATIONS — RANKED

This is the COMPREHENSIVE enumeration of every enrichment from every extraction, de-duplicated where overlap exists. Classification key:

- **(A)** Edit existing artifact
- **(B)** New artifact
- **(C)** Architectural change
- **(D)** Measurement improvement

Convergence count indicates how many independent source analyses recommended the same or substantially similar change.

---

### TIER 1: BLOCKING (Must implement — prevents recurring critical defects)

---

#### E-001: Brief Assembler Must COMPUTE RGB Delta Claims Programmatically

- **What:** After specifying zone background hex values, compute `max(|R1-R2|, |G1-G2|, |B1-B2|)` for ALL adjacent zone pairs. If any delta < 15, adjust hex values before finalizing brief. Include computed delta in the brief, not estimated.
- **Target:** `artifact-orchestrator.md` (Phase 1 Brief Assembly), `artifact-routing.md` (Phase 0)
- **Why:** Brief stated "delta ~16" for Z2-Z3 and Z3-Z4. Actual: Z2-Z3 max delta = 11, Z3-Z4 max delta = 8. The brief assembler MISCALCULATED.
- **Evidence:** E02-01, E04-02, A-01, A-02 (compliance). Convergence: **4 sources**.
- **Expected PA-05 impact:** +0.3 (prevents the #1 root cause of perception gate failures)
- **Effort:** LOW (~15 lines added to brief assembly instructions)
- **Classification:** (A) edit existing artifact

---

#### E-002: Lock Zone Background Hex Values as NON-NEGOTIABLE (Tier 2)

- **What:** Move zone background hex values from Tier 3 (compositional, 80% creative authority) to Tier 2 (perception physics, non-negotiable). Add: "Zone background colors are LOCKED. These exact hex values produce the specified RGB deltas. Do not substitute."
- **Target:** `artifact-tc-brief-template.md` (Tier 2 section)
- **Why:** Builder changed Z3 from `#F5EFE5` to `#FFF2E0` under creative authority. The resulting delta (11 RGB) violated the >=15 threshold.
- **Evidence:** A-01 (compliance), E04-05, E05-04. Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.2 (prevents builder color substitution that violates perception thresholds)
- **Effort:** LOW (~5 lines changed in template)
- **Classification:** (A) edit existing artifact

---

#### E-003: Add Trailing Void Detection Gate (NEW GATE)

- **What:** GR-XX (Trailing Void): Measure vertical distance from last content element bottom to `<body>` bottom. If > 1 viewport-height (900px at 1440px), FAIL. BLOCKING identity-level gate.
- **Target:** `artifact-gate-runner.md` (new gate)
- **Why:** 9/9 auditors flagged trailing whitespace void. Appeared in BOTH Gas Town runs AND Flagship. Recurring structural pattern with zero detection.
- **Evidence:** E03-01, E05-01, VA-01, E-16 (surface map). Convergence: **5+ sources**.
- **Expected PA-05 impact:** +1.0 (prevents catastrophic shipping defect)
- **Effort:** LOW (~20 lines Playwright JS)
- **Classification:** (A) edit existing artifact

---

#### E-004: Raise COMPOSED-Mode Background Delta Floor to >=20 RGB

- **What:** For COMPOSED mode: minimum 20 RGB at ALL adjacent zone boundaries. At least 3 boundaries at >=25 RGB. At least 1 boundary at >=40 RGB.
- **Target:** `artifact-identity-perception.md` (PT-01), `artifact-builder-recipe.md` (Step 2.1)
- **Why:** The 15 RGB floor is too low for perceptual distinctness. Builder hit 15-18 at multiple boundaries — technically compliant but perceptually invisible.
- **Evidence:** A-03 (compliance), E08-01, VA-02. Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.2 (eliminates compressed delta band pattern)
- **Effort:** LOW (~10 lines changed)
- **Classification:** (A) edit existing artifact

---

#### E-005: Fix Gate Runner to Exclude Non-Rendered Elements

- **What:** Add element filter to ALL element-scanning gates: exclude HTML, HEAD, META, TITLE, SCRIPT, STYLE, LINK, BR, NOSCRIPT from computed style analysis.
- **Target:** `artifact-gate-runner.md` (GR-01 through GR-10 JS code)
- **Why:** GR-05 scans all elements including non-rendered, producing 18 false positive "pure black" violations and 9 false positive font violations.
- **Evidence:** A-05 (compliance), E02-02. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (eliminates false positives that force PASS* verdicts)
- **Effort:** LOW (~5 lines of JS filter)
- **Classification:** (A) edit existing artifact

---

#### E-006: Fix Verdict Logic — Identity FAIL = REBUILD Unless Overridden

- **What:** Add verdict override mechanism: identity gate FAIL default = REBUILD. Override to REFINE permitted ONLY IF: (a) failure affects <= 1 component class, (b) fix is single CSS property change, (c) weaver documents justification. Add "SHIP WITH FIXES" as formal verdict category.
- **Target:** `artifact-gate-runner.md` (verdict section), `MANIFEST.md` (verdict vocabulary), `artifact-pa-protocol.md` (Section 10.1)
- **Why:** GR-05 FAILED but verdict was SHIP WITH FIXES — a category the pipeline invented ad-hoc, contradicting the REBUILD mandate.
- **Evidence:** B-02 (compliance), C-01 (compliance), AR-20, E02-03. Convergence: **4 sources**.
- **Expected PA-05 impact:** Indirect (process integrity)
- **Effort:** MEDIUM (~30 lines across 3 files)
- **Classification:** (A) edit existing artifact

---

#### E-007: Expand Tier 4 to 40-Line Budget (Template's Own Warning Ignored)

- **What:** Change Tier 4 instruction from a warning to a HARD GATE: "Tier 4 MINIMUM: 35 lines. EACH disposition MUST include at least one CSS property:value pair. D-08 MUST include at least 3 specific CSS values."
- **Target:** `artifact-tc-brief-template.md` (Tier 4 section, assembly rules)
- **Why:** Template explicitly warns about the 25-line vs 40-line deficit. The execution brief reproduced the EXACT failure at ~25 lines.
- **Evidence:** D-04 (compliance), PF-01, E-06 (surface map). Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.3 (ensures dispositions have technique vocabulary)
- **Effort:** LOW (~10 lines changed)
- **Classification:** (A) edit existing artifact

---

#### E-008: Specify Background Deltas as MINIMUMS Not TARGETS

- **What:** Change brief template language from "delta ~N" to "delta >= N (aim for N+5 to N+10)". Example: "Background shift from #FEF9F5 to #EDE6DA, delta >= 20 (aim for 25-30)."
- **Target:** `artifact-tc-brief-template.md` (Tier 3 multi-coherence section)
- **Why:** The tilde (~) communicates "approximately" not "at least." Builder may undershoot.
- **Evidence:** E04-05, E05-04. Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.15 (prevents builder undershoot)
- **Effort:** LOW (language change)
- **Classification:** (A) edit existing artifact

---

#### E-009: Implement Automated REFINE Cycle

- **What:** After gate check, if verdict = REFINE, automatically spawn a FRESH Opus builder with: (a) original brief, (b) built HTML, (c) gate failures described as perceptual observations (NOT threshold numbers), (d) Weaver's artistic impression. Limit: 1 REFINE cycle.
- **Target:** `artifact-orchestrator.md` (new Phase 4)
- **Why:** Every defect is a CSS fix. Pipeline already produces a precise fix list. Expected PA-05 delta: +0.3 to +0.5.
- **Evidence:** E07-01. Convergence: **1 source** but rated HIGHEST LEVERAGE by ceiling analysis.
- **Expected PA-05 impact:** +0.3 to +0.5
- **Effort:** HIGH (new pipeline phase, ~50 lines)
- **Classification:** (C) architectural change

---

#### E-010: Prohibit Cold Purple #7C3AED with Warm Replacement

- **What:** Strengthen prohibition with replacement: "PROHIBITED: #7C3AED (cold purple). USE INSTEAD: #7D5B8A (warm plum)." Add specific hex check in GR-05.
- **Target:** `artifact-builder-recipe.md` (Step 2.1), `artifact-gate-runner.md` (GR-05)
- **Why:** Builder used the EXACT hex value named as prohibited in the recipe.
- **Evidence:** A-07 (compliance). Convergence: **1 source** but represents direct specification violation.
- **Expected PA-05 impact:** Indirect (resolves GR-05 identity gate failure)
- **Effort:** LOW (~5 lines)
- **Classification:** (A) edit existing artifact

---

### TIER 2: SIGNIFICANT (Should implement — prevents moderate quality gaps)

---

#### E-011: Add Multi-Coherence Boundary Template to Brief

- **What:** Structured per-boundary template: `Z{n}->Z{n+1}: channels=[bg:+25RGB, type:weight_shift, spacing:+16px, border:3px->1px], type=medium, dominant_shift=background`
- **Target:** `artifact-tc-brief-template.md` (Tier 3 section)
- **Why:** Briefs describe transitions as "light/medium/heavy" without per-boundary channel specifics.
- **Evidence:** PF-02, E-05 (surface map). Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.25
- **Effort:** LOW (~15 lines template addition)
- **Classification:** (A) edit existing artifact

---

#### E-012: Inject Annotated CSS Reference Patterns from CD-006

- **What:** Create 100-line document with 10-15 annotated CSS patterns: "PATTERN: Heavy Zone Transition (4+ channels) -- [CSS snippet] -- This produces a 4-channel shift that scored 4/4 on PROPORTIONATE."
- **Target:** New file: `artifact-css-patterns.md` + reference in builder recipe
- **Why:** The builder has never SEEN what a 3.5/4 page looks like. Zero procedural knowledge of high-quality output.
- **Evidence:** E07-02. Convergence: **1 source** but addresses 30% of 3/4->4/4 gap.
- **Expected PA-05 impact:** +0.2 to +0.4
- **Effort:** MEDIUM (~100 lines new file)
- **Classification:** (B) new artifact

---

#### E-013: Add CSS Pattern Library to Execution Brief (Tier 3)

- **What:** Add "Pattern Library" subsection to Tier 3 with 5-8 CSS patterns: heavy transition, medium transition, light transition, zone-specific component modulation, dark inversion block, responsive grid collapse.
- **Target:** `artifact-tc-brief-template.md` (Tier 3 section)
- **Why:** The brief tells the builder WHAT to do but not HOW. Converts "deploy a heavy transition" from instruction to recipe.
- **Evidence:** E07-03. Convergence: **1 source** but directly addresses the instruction-to-recipe gap.
- **Expected PA-05 impact:** +0.2
- **Effort:** MEDIUM (~40 lines template addition)
- **Classification:** (A) edit existing artifact

---

#### E-014: Add Experiential PA Questions to Core Battery (5-8 new questions)

- **What:** Add PA-80 (emotional sequencing), PA-84 (micro-delight), PA-88 (visual memory), PA-91 (design commitment), PA-98 (gestalt completion) to the core battery, answered FIRST before structural questions.
- **Target:** `artifact-pa-protocol.md` (Part 3, Part 4)
- **Why:** 42/65 questions (~65%) are structural; only 6 (~9%) are experiential. Cannot detect the 3/4 vs 4/4 gap.
- **Evidence:** E06-01, PA-28. Convergence: **4+ sources** (06, 12, 14, 17 all recommend rebalancing).
- **Expected PA-05 impact:** Indirect (improves measurement accuracy for quality gradient)
- **Effort:** MEDIUM (~30 lines of question definitions + assignment changes)
- **Classification:** (D) measurement improvement

---

#### E-015: Intensify Zone Background Progression to 3 Clear Registers

- **What:** Zone backgrounds form at least 3 perceptually distinct registers (LIGHT, MEDIUM, DARK warm). Delta between registers >= 25 RGB points.
- **Target:** `artifact-tc-brief-template.md` (Tier 3) or `artifact-value-tables.md`
- **Why:** 6 warm-cream variants differ by single-digit RGB points. Editorial designer: "Instead of 6 variants, push to 3 clearly distinct registers."
- **Evidence:** E08-01, VA-02. Convergence: **2 sources** + 4/9 PA auditors.
- **Expected PA-05 impact:** +0.15
- **Effort:** LOW (~10 lines)
- **Classification:** (A) edit existing artifact

---

#### E-016: Add One Unique Visual Element Per Zone

- **What:** Each zone should contain at least one component or layout UNIQUE to that zone -- not used in any other zone. Creates visual landmarks.
- **Target:** `artifact-tc-brief-template.md` (D-02 Room Perception)
- **Why:** "Same template applied to different content" perception separates 3/4 from 4/4.
- **Evidence:** E08-02. Convergence: **1 source** but directly addresses "templated not designed."
- **Expected PA-05 impact:** +0.15
- **Effort:** LOW (~10 lines)
- **Classification:** (A) edit existing artifact

---

#### E-017: Add Text Measure Variation Instruction

- **What:** Vary text measure at least 3 times: (a) narrow-measure (600px/50ch) for reflective passages, (b) standard (container) for body, (c) full-width for diagrams/dramatic moments.
- **Target:** `artifact-builder-recipe.md` or Tier 3
- **Why:** Entire page runs at 960px max-width with everything left-aligned. "The left edge should NOT be at the same x-coordinate for every text block."
- **Evidence:** E08-03. Convergence: **1 source** (editorial designer).
- **Expected PA-05 impact:** +0.15
- **Effort:** LOW (~10 lines)
- **Classification:** (A) edit existing artifact

---

#### E-018: Add Deliberate Plainness Instruction (D-06)

- **What:** "At least one zone should be intentionally spare -- plain text with generous whitespace, no callouts, no colored borders. This is compositional contrast, not laziness."
- **Target:** `artifact-tc-brief-template.md` (D-06 Negative Space)
- **Why:** PA-64 scored WEAK PASS/NO. A 4/4 page has at least one zone of intentional simplicity.
- **Evidence:** E06-11, E07-09. Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.1 (directly addresses PA-64 failure)
- **Effort:** LOW (~5 lines)
- **Classification:** (A) edit existing artifact

---

#### E-019: Add Structural Transition Element Handling to GR-14

- **What:** Before measuring zone-to-zone gap, identify intervening elements with bg-color differing from both zones by >=100 RGB delta. Classify as "structural transition element." Measure sub-gaps instead.
- **Target:** `artifact-gate-runner.md` (GR-14 JS code)
- **Why:** Z5-Z6 gap = 318px due to dark inversion block (D-04 moment). Gate cannot distinguish compositional moments from accidental voids.
- **Evidence:** E04-03, B-04 (compliance). Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (prevents false positives on intentional drama)
- **Effort:** MEDIUM (~20 lines JS)
- **Classification:** (A) edit existing artifact

---

#### E-020: Add Table Cell Exemption to GR-17 Density Stacking

- **What:** `<td>` and `<th>` elements use 6px minimum padding (was 12px). Content elements retain 12px.
- **Target:** `artifact-gate-runner.md` (GR-17 JS code)
- **Why:** 262 violations are table cells at 8px -- standard for dense data tables, not a defect.
- **Evidence:** E04-04, E-04 (compliance). Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (eliminates 262 false positive violations)
- **Effort:** LOW (~5 lines JS)
- **Classification:** (A) edit existing artifact

---

#### E-021: Builder Threshold Awareness via Calibration Bands

- **What:** Deliver thresholds as RANGES with TARGETS: "Zone backgrounds should differ meaningfully. Subtle = 20-30 RGB. Dramatic = 50+ RGB. Below 15 is invisible."
- **Target:** `artifact-builder-recipe.md` (Phase 2 SELECT) or TC Brief Template Tier 2
- **Why:** When builder doesn't know 15 RGB floor, produces deltas of 8. "Pipeline chose theoretical harm (gaming) over demonstrated harm (failure). Gas Town PROVES the tradeoff was wrong."
- **Evidence:** AR-05. Convergence: **3 sources** (10, 13, 18).
- **Expected PA-05 impact:** +0.2 (directly prevents the 2 perception gate failures)
- **Effort:** LOW (~10 lines)
- **Classification:** (A) edit existing artifact

---

#### E-022: Add Common Defects Appendix to Builder Input

- **What:** 10-line appendix: "(1) backgrounds differing by <20 RGB feel identical; (2) >4 consecutive identical components = monotony; (3) trailing whitespace below footer breaks credibility; (4) cold accent colors break warm palette; (5) uniform headings flatten hierarchy."
- **Target:** `artifact-builder-recipe.md` or execution brief
- **Why:** Builder has zero knowledge of what went wrong in previous builds. 0% of historical defect patterns reach the builder.
- **Evidence:** E07-07, E-11 (surface map). Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.1
- **Effort:** LOW (~15 lines)
- **Classification:** (A) edit existing artifact

---

#### E-023: Add Builder Pre-Question ("What should the reader FEEL?")

- **What:** Before writing CSS, builder answers: "What is the ONE thing this page's design should make the reader FEEL that the text alone cannot?" Generic answers = B+ output. Content-specific = creative north star.
- **Target:** `artifact-builder-recipe.md` (Phase 2 SELECT, question 0)
- **Why:** The single highest-probability intervention for B+ -> A. If answered generically, the pipeline has a structural ceiling.
- **Evidence:** MQ-01, AR-15. Convergence: **2 sources** (both rated it highest-leverage).
- **Expected PA-05 impact:** Paradigm shift potential (changes what the builder ATTEMPTS)
- **Effort:** LOW (~5 lines)
- **Classification:** (A) edit existing artifact

---

#### E-024: Add Responsive Breakpoint Guidance to Builder Recipe

- **What:** Explicit responsive instructions: "At 768px, at least 2 layout elements must REORGANIZE (change structure, not just scale). Examples: 2-col -> 1-col, horizontal stats -> vertical list."
- **Target:** `artifact-builder-recipe.md` (responsive section), or new E-12 (surface map)
- **Why:** 3/9 auditors flagged: layout is FLUID not RESPONSIVE. Role cards remain 2-column at 768px.
- **Evidence:** E03-04, VA-05, E-12 (surface map). Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.15
- **Effort:** MEDIUM (~40 lines)
- **Classification:** (A) edit existing artifact

---

#### E-025: Canonicalize Gate IDs

- **What:** Gate-results output MUST use artifact gate IDs (GR-01 through GR-42). Implementations that rename/merge/decompose gates are NON-COMPLIANT.
- **Target:** `artifact-gate-runner.md` (new Section 0)
- **Why:** Fresh run renumbered and decomposed gates. Gate traceability is broken.
- **Evidence:** B-01 (compliance). Convergence: **1 source** but fundamental to process integrity.
- **Expected PA-05 impact:** Indirect (restores traceability)
- **Effort:** LOW (~10 lines)
- **Classification:** (A) edit existing artifact

---

#### E-026: Add Pre-Computed COMPOSED-Mode Color Palettes

- **What:** Add "COMPOSED-Mode Locked Palette" section with 3-4 pre-validated 6-zone progressions guaranteeing >=20 RGB at all boundaries and >=25 at 3+.
- **Target:** `artifact-value-tables.md` (new section)
- **Why:** Builder used 5/20 pairs and introduced 2 new colors with sub-threshold deltas.
- **Evidence:** A-04 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** +0.1 (gives builder safe path)
- **Effort:** MEDIUM (~30 lines)
- **Classification:** (A) edit existing artifact

---

#### E-027: Add Zone 4 Monotony Detection Gate (Structural Echo)

- **What:** GR-XX: For each zone, count consecutive elements sharing identical visual treatment. >4 consecutive = SIGNIFICANT. >6 = BLOCKING.
- **Target:** `artifact-gate-runner.md` (new gate)
- **Why:** 6/9 auditors flagged Zone 4 monotony (6 identical blockquotes).
- **Evidence:** E03-02, VA-03. Convergence: **5 source files**.
- **Expected PA-05 impact:** +0.1
- **Effort:** MEDIUM (~20 lines JS)
- **Classification:** (A) edit existing artifact

---

#### E-028: Add Concept-Naming Mandate for Custom Properties

- **What:** "Custom property names must not contain color literals (blue, green, red). Use concept names from the structural metaphor."
- **Target:** `artifact-tc-brief-template.md` (Tier 1 or Tier 3)
- **Why:** `--accent-blue: #A07D50` is gold/brown, NOT blue. Name is misleading.
- **Evidence:** E01-01, E04-01, CSS-01. Convergence: **3 sources**.
- **Expected PA-05 impact:** LOW (code hygiene, prevents future errors)
- **Effort:** LOW (~5 lines)
- **Classification:** (A) edit existing artifact

---

#### E-029: Add Builder Self-Evaluation with Screenshots

- **What:** Builder MUST write self-eval to `self-eval.md`: "I checked at 1440px and 768px", "Trailing content after footer: yes/no", "Zone backgrounds visually distinct: yes/no."
- **Target:** `artifact-orchestrator.md` (Phase 2), `artifact-builder-recipe.md` (Phase 5)
- **Why:** Trailing void not caught pre-PA. No self-eval evidence exists.
- **Evidence:** G-03 (compliance), E-15 (surface map). Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.1 (catches defects pre-PA)
- **Effort:** LOW (~15 lines)
- **Classification:** (A) edit existing artifact

---

#### E-030: Enforce Verbatim Content Map Appendix

- **What:** Content Map Appendix is FULL content map from Phase 0, appended without modification. If brief exceeds 200 lines, trim Tiers 1-4 commentary instead.
- **Target:** `artifact-tc-brief-template.md` (Assembly Rule 7)
- **Why:** Brief compressed 79-line content map to ~12 lines, violating the verbatim rule.
- **Evidence:** H-01 (compliance), E02-05. Convergence: **2 sources**.
- **Expected PA-05 impact:** LOW (ensures builder has full context)
- **Effort:** LOW (~5 lines rule clarification)
- **Classification:** (A) edit existing artifact

---

### TIER 3: MODERATE (Should add — improves quality and calibration)

---

#### E-031: Add Metaphor Persistence Guidance for Final Zones

- **What:** "Even in CODE/REFERENCE zones, maintain metaphor through: concept-named custom properties per zone, zone indicator text sustaining metaphor vocabulary, component titles referencing metaphor."
- **Target:** `artifact-tc-brief-template.md` (D-01), `artifact-builder-recipe.md`
- **Why:** Both runs show metaphor fade to ~25% in bottom third. PA-68 scored PARTIAL FAIL.
- **Evidence:** E05-02, E07-10, VA-12. Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.1 (addresses PA-68 failure)
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-032: Add Thematic Return Instruction

- **What:** "At least one visual motif introduced in the first zone should return transformed in the final zone. Examples: drop cap color in closing, opening serif italic in footer."
- **Target:** `artifact-tc-brief-template.md` (D-04 or new D-XX)
- **Why:** Each design moment is one-time; no motif develops. Creates circular narrative.
- **Evidence:** E06-12. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-033: Add Recovery Command Danger Hierarchy Guidance

- **What:** "When content includes destructive/dangerous operations alongside safe operations, apply visual weight hierarchy: destructive gets stronger borders (4px), warning colors, larger padding."
- **Target:** `artifact-builder-recipe.md` (component modulation section)
- **Why:** Auditor I: HARD RESET and KILL ALL AGENTS have identical visual weight to CLEAR INBOX.
- **Evidence:** E03-03. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW (UX safety)
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-034: Add Second Interstitial Moment for Long Pages

- **What:** "If page has 5+ zones, consider TWO structural break moments: one at 1/3 point, one at 2/3 point. First lighter than second to create crescendo."
- **Target:** `artifact-tc-brief-template.md` (D-04)
- **Why:** PA synthesis: "Add ONE more interstitial between Zones 3-4 is the best compromise."
- **Evidence:** E03-05, MQ-03, MQ-07. Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.1 (emotional modulation)
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-035: Lead PA Audit with Experiential Questions Before Structural

- **What:** Assign PA-80, PA-88, PA-84, PA-91, PA-98 FIRST before structural questions. Capture fresh impressions before "checking" mode.
- **Target:** `artifact-pa-protocol.md` (Part 4, question ordering)
- **Why:** "First impressions should be captured before the auditor enters 'checking' mode."
- **Evidence:** E03-06, MM-03. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (improves audit quality)
- **Effort:** LOW (~reorder existing assignments)
- **Classification:** (D)

---

#### E-036: Strengthen Dark/Light Rhythm (2-3 Additional Dark Moments)

- **What:** "For pages with 5+ zones, include at least 3 dark or semi-dark visual moments distributed across scroll. Not all at boundaries."
- **Target:** `artifact-tc-brief-template.md` (D-05 Reader's Scroll)
- **Why:** Editorial designer rated pacing/rhythm 2.5/5.
- **Evidence:** E08-04. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-037: Vary Heading Treatment for Emphasis

- **What:** "Break the heading pattern at least once per zone: bold upright for critical heading, size variation for editorial emphasis."
- **Target:** `artifact-builder-recipe.md` or Tier 3
- **Why:** "Every heading is Instrument Serif italic. Every single one. A designer would break the pattern."
- **Evidence:** E08-05. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-038: Vary Callout Component Structure for Different Types

- **What:** "Editorial callouts (essence, challenge) should feel fundamentally different from informational (warning, tip). Different size, layout, or typographic treatment."
- **Target:** `artifact-builder-recipe.md` (component section)
- **Why:** "Callout boxes are essentially the same component with different left-border colors."
- **Evidence:** E08-06. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-039: Design Footer as Real Destination

- **What:** "For pages with 5+ zones, footer should be designed: closing editorial quote, summary stats, related resources, navigation, visual weight matching header."
- **Target:** `artifact-builder-recipe.md` (footer section)
- **Why:** "Footer is a brief italic quote and metadata line." Closing Resonance rated 1.5/5.
- **Evidence:** E08-07, MQ-08. Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-040: Increase Spacing Compression Ratio

- **What:** "Zone padding range from 100-120px (sparse) to 24-32px (dense). Ratio >= 3:1. Current 80px to 32px = 2.5:1 insufficient."
- **Target:** `artifact-tc-brief-template.md` (D-06 or Tier 2)
- **Why:** "80px vs 32px does not FEEL like compression."
- **Evidence:** E08-08. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-041: Add Editorial-Weight-by-Importance Heading Treatment

- **What:** "Identify 2-3 headings carrying KEY INSIGHTS. Enhanced treatment regardless of heading level."
- **Target:** `artifact-tc-brief-template.md` (D-01 or D-03)
- **Why:** Visual hierarchy reflects structural level only, not editorial importance.
- **Evidence:** E08-09. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-042: Add Symmetry-Breaking Spacing (Asymmetric Vertical Spacing)

- **What:** "For high-emphasis components, use asymmetric spacing: more above than below (120px above, 48px below). Symmetric for body; asymmetric signals emphasis."
- **Target:** `artifact-builder-recipe.md` or Tier 3
- **Why:** "The spacing is consistent to a fault. Real editorial design has irregular spacing."
- **Evidence:** E08-11. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-043: Broaden D-04 Creative Latitude

- **What:** "Create 1-2 moments where reader thinks 'I have not seen this layout pattern before.' Specify content moment but leave visual treatment to creative authority."
- **Target:** `artifact-tc-brief-template.md` (D-04)
- **Why:** D-04 is too prescriptive ("dark inversion block" + "layout rupture"). Limits inventiveness.
- **Evidence:** E07-11. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.05
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-044: Add Mid-Build Gate Check After Zone 3

- **What:** After Zone 3, run subset of gates (GR-11, GR-13, GR-15, GR-21). If fails, provide CALIBRATION feedback as perceptual observation, not thresholds.
- **Target:** `artifact-orchestrator.md` (build sequence)
- **Why:** Catches issues mid-build while correction is cheap. Expected +0.1 to +0.3.
- **Evidence:** E07-04, AR-28. Convergence: **2 sources**.
- **Expected PA-05 impact:** +0.1 to +0.3
- **Effort:** HIGH (new pipeline checkpoint)
- **Classification:** (C)

---

#### E-045: Add Builder Conviction Document

- **What:** Builder produces 20-30 line conviction statement: metaphor interpretation, 3 strongest decisions, 1 creative risk, per-zone intent summary.
- **Target:** `MANIFEST.md` (Appendix E), `artifact-builder-recipe.md` (Phase 5)
- **Why:** Without conviction, REFINE agent cannot distinguish intentional restraint from omission.
- **Evidence:** PF-03, E05-05, G-01 (compliance). Convergence: **3 sources**.
- **Expected PA-05 impact:** +0.2 (through better REFINE cycles)
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-046: Per-Zone CSS Budget Allocation

- **What:** "High-density zones: ~150-200 CSS lines. Medium: ~100-150. Low: ~80-100. No zone exceeds 25% of total."
- **Target:** `artifact-builder-recipe.md` (Phase 3) or TC Brief Tier 3
- **Why:** CD-006 distributed CSS proportionally. Flagship spent 22% on imperceptible micro-typography.
- **Evidence:** PF-04. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.2
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-047: Add CSS Value Distribution Gate (GR-43)

- **What:** Verify values span full calibration range (15 subtle to 50 dramatic), not clustered at floor. Flag if >50% of values within 5 of floor.
- **Target:** `artifact-gate-runner.md` (new gate)
- **Why:** Z4-Z5 boundary had only 17 RGB delta — technically passing but perceptually flat.
- **Evidence:** PF-05. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.15
- **Effort:** MEDIUM (~20 lines JS)
- **Classification:** (A)

---

#### E-048: Add Brief Amendment for REBUILD Path

- **What:** If REBUILD triggered by PA findings suggesting brief inadequacy, orchestrator adds 5-10 line "emphasis supplement."
- **Target:** `artifact-orchestrator.md` (Phase 9, REBUILD protocol)
- **Why:** Same brief -> same results is documented failure mode.
- **Evidence:** PF-06. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.15
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-049: Automated GR-25 Suppressor Scan

- **What:** Regex-based scan of brief for 20 known suppressor patterns: "sample 2-4", "verify that", "fail if", "must be", count-gates, judgment language.
- **Target:** `artifact-gate-runner.md` (new GR-25) or `artifact-orchestrator.md` (Phase 2.5)
- **Why:** 20 suppressors identified, ALL correlate with quality degradation.
- **Evidence:** PF-07. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.1
- **Effort:** MEDIUM (~30 lines)
- **Classification:** (A)

---

#### E-050: Add Hover-State Screenshots to PA Protocol

- **What:** After cold look captures, trigger hover state on all links, buttons, callout elements. Capture at 1440px.
- **Target:** `artifact-pa-protocol.md` (Part 5, screenshot protocol)
- **Why:** D-07 (Edge Intentionality) includes hover states as key technique. Currently invisible to PA auditors.
- **Evidence:** PF-08. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.1
- **Effort:** MEDIUM (~20 lines)
- **Classification:** (D)

---

#### E-051: Add Content Appropriateness Gate

- **What:** Phase 0 outputs complexity budget. Simple content -> lower mechanism floor (6-8), fewer zones (2-3), less CSS (400-600). Complex -> current thresholds.
- **Target:** `artifact-routing.md` (Phase 0), `artifact-orchestrator.md` (threshold application)
- **Why:** "Pipeline applies IDENTICAL quality standards regardless of content."
- **Evidence:** AR-07, AR-11. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (prevents over-engineering of simple content)
- **Effort:** HIGH (new pipeline mechanism)
- **Classification:** (C)

---

#### E-052: Add Palette Consistency Gate

- **What:** GR-XX: Every computed color on visible elements must match a declared custom property value or be within 5 RGB points of one. 0 untraceable colors on structural elements.
- **Target:** `artifact-gate-runner.md` (new gate)
- **Why:** Rogue color values like cold blue on role-card__level.
- **Evidence:** E05-03. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** MEDIUM (~25 lines JS)
- **Classification:** (A)

---

#### E-053: Palette Families Instead of Absolute Warm/Cool Rules

- **What:** Define "palette families" -- warm primary with sanctioned accent families (including functional cool accents for categorization).
- **Target:** `artifact-identity-perception.md` (SC-05)
- **Why:** "Pipeline flags 98 'cold color violations' on role card labels -- but those blues might be exactly what a reader expects for technical categorization."
- **Evidence:** AR-02. Convergence: **1 source**.
- **Expected PA-05 impact:** Indirect (eliminates false positives)
- **Effort:** MEDIUM (~15 lines)
- **Classification:** (A)

---

#### E-054: Add One-Line Audience Description for PA Auditors

- **What:** Give auditors: "This page is for experienced developers evaluating a multi-agent coding framework." No design intent -- just audience.
- **Target:** `artifact-pa-protocol.md` (auditor prompt template)
- **Why:** Auditors judge for general audience when actual audience is specialized.
- **Evidence:** AR-04. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW (improves audit accuracy)
- **Effort:** LOW (~1 line per auditor)
- **Classification:** (D)

---

#### E-055: Add Emotional Arc 4-Register Synthesis to Weaver

- **What:** Weaver produces SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE assessment with evidence and arc verdict (COMPLETE/PARTIAL/ABSENT).
- **Target:** `artifact-pa-protocol.md` (Weaver section)
- **Why:** Weaver did not produce emotional arc assessment using the specified 4-register framework.
- **Evidence:** C-03 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** Indirect (better compositional quality assessment)
- **Effort:** LOW (~15 lines template)
- **Classification:** (A)

---

#### E-056: Add Weaver Output B (Artistic Impression) Enforcement

- **What:** Weaver ALWAYS produces TWO labeled sections: DIAGNOSTIC VERDICT and ARTISTIC IMPRESSION. Even for SHIP verdicts.
- **Target:** `artifact-pa-protocol.md` (Weaver section), `MANIFEST.md` (Step 10)
- **Why:** Only diagnostic was produced. Missing artistic impression means future builders lack context.
- **Evidence:** C-04 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** Indirect
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-057: Add Fix-Type Classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) to Weaver

- **What:** Each fix must include BOTH severity (BLOCKING/SIGNIFICANT) AND type (MECHANICAL/STRUCTURAL/COMPOSITIONAL).
- **Target:** `artifact-pa-protocol.md` (Weaver section)
- **Why:** Fix builder needs to know WHAT KIND of work each fix requires.
- **Evidence:** C-02 (compliance), AR-17. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (better fix targeting)
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-058: Remove Count-Gate Exposure from Builder-Visible Tier 3

- **What:** Replace "at least 3 channels, averaging 4+" with "Each boundary should feel like entering a different room." Count-gate stays in gate runner but invisible to builder.
- **Target:** `artifact-tc-brief-template.md` (Tier 3 multi-coherence)
- **Why:** Execution brief Tier 3 contains a count-gate in builder-visible form.
- **Evidence:** G-05 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** LOW (prevents Goodhart gaming)
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-059: Add Section Height Estimates to Content Map (Phase 0)

- **What:** Content Analyst estimates per-zone viewport heights: "Z1: ~700px (SPARSE), Z2: ~1800px (DENSE)..."
- **Target:** `artifact-routing.md` (Phase 0, content map template)
- **Why:** Heights appear only in the brief, but the content analyst has the actual content.
- **Evidence:** F-01 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-060: Add Transition Weight Vocabulary to Content Map

- **What:** "For each zone boundary, note transition WEIGHT: HEAVY (narrative->reference), MEDIUM (density change), LIGHT (continuation)."
- **Target:** `artifact-routing.md` (Phase 0, density arc section)
- **Why:** Transition weights generated by brief assembler, not content analyst who has the context.
- **Evidence:** F-02 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-061: Codify Zone-Adaptive Body Font-Size as Pipeline Pattern

- **What:** Document the zone-adaptive body font-size pattern (18->16->15->16->15->16) as a quality multiplier.
- **Target:** `artifact-builder-recipe.md` (Phase 3)
- **Why:** "The single most 'designed' decision in the CSS." Quality-per-line: 10/10.
- **Evidence:** CSS-10. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW (ensures pattern adoption)
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-062: Codify Dark Code Block Inversion as Pipeline Pattern

- **What:** Document dark-on-light code block inversion as structural punctuation technique.
- **Target:** `artifact-builder-recipe.md` (Phase 3)
- **Why:** "The strongest visual component on the page."
- **Evidence:** CSS-11. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-063: Codify Inversion Block as Pipeline Quality Multiplier

- **What:** Document full-bleed dark inversion block (negative margin, centered, inverted colors) as THE single strongest quality signal.
- **Target:** `artifact-builder-recipe.md` (Phase 4 D-04)
- **Why:** "One component, 34 lines CSS, maximum impact."
- **Evidence:** CSS-12. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-064: Add Metaphor Affordance per Section (Not Just Global)

- **What:** Content Analyst maps "metaphor affordance" per section. High-affordance = full treatment. Low-affordance = functional with structural echoes.
- **Target:** `artifact-routing.md` (Phase 0 metaphor assessment)
- **Why:** "Bottom third contains practical content that has nothing to do with a refinery."
- **Evidence:** AR-08. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-065: Add Anti-Monotony Flag in Content Analysis

- **What:** Content Analyst flags sections with >3 identical structural elements for special treatment.
- **Target:** `artifact-routing.md` (Phase 0, new operation)
- **Why:** Would have flagged Zone 4's 6 identical blockquotes at content analysis stage.
- **Evidence:** AR-25. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~5 lines)
- **Classification:** (A)

---

#### E-066: Add Structured Metaphor Exploration (5 Seeds)

- **What:** Expand from 3 to 5 metaphor seeds, each with structural mapping: concept -> zone group -> CSS naming -> transition implications.
- **Target:** `artifact-routing.md` (Phase 0 Content Analysis Protocol)
- **Why:** Metaphor selection is second-highest-impact creative decision.
- **Evidence:** PF-09. Convergence: **1 source**.
- **Expected PA-05 impact:** +0.1
- **Effort:** LOW (~15 lines)
- **Classification:** (A)

---

#### E-067: Add Per-Section Element Inventory to Content Map

- **What:** Change aggregate element counts to per-section table format.
- **Target:** `artifact-routing.md` (Phase 0, structural heterogeneity section)
- **Why:** Content map provides aggregate but not per-section breakdown.
- **Evidence:** F-03 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~10 lines)
- **Classification:** (A)

---

#### E-068: Reconcile Brief Line Targets Between Orchestrator and MANIFEST

- **What:** Single canonical target: "120-170 lines (COMPOSED), 80-120 lines (APPLIED). Above 180 = mode collapse risk."
- **Target:** `artifact-orchestrator.md` (Phase 1), `MANIFEST.md` (Step 4)
- **Why:** Orchestrator says "~93-113 lines", MANIFEST says "~100-165 lines." Contradictory.
- **Evidence:** G-04 (compliance). Convergence: **1 source**.
- **Expected PA-05 impact:** Indirect
- **Effort:** LOW (~5 lines in 2 files)
- **Classification:** (A)

---

#### E-069: Add Negative Space Intelligence (4 Void Types)

- **What:** Pipeline distinguishes STRUCTURAL void (bug), RHYTHMIC void (breathing), DRAMATIC void (deliberate pause), COMPOSITIONAL void (restraint). Only structural = defect.
- **Target:** `artifact-gate-runner.md` (GR-14), PA questions about space
- **Why:** "Pipeline treats all empty space as defect. A designer treats it as a tool."
- **Evidence:** AR-32. Convergence: **1 source**.
- **Expected PA-05 impact:** Indirect (reduces false positives)
- **Effort:** MEDIUM (~20 lines)
- **Classification:** (A)

---

#### E-070: Require Auditor Conviction Statement

- **What:** Each PA auditor identifies single DOMINANT finding (what would they fix first with 30 minutes?).
- **Target:** `artifact-pa-protocol.md` (auditor prompt template)
- **Why:** Focuses weaver synthesis and gives REFINE agent clear priority.
- **Evidence:** PF-14. Convergence: **1 source**.
- **Expected PA-05 impact:** LOW
- **Effort:** LOW (~5 lines)
- **Classification:** (D)

---

#### E-071: Implement PA-05 as 4-Dimensional Vector

- **What:** PA-05 reports [DESIGNED: 0.85, COHERENT: 0.90, PROPORTIONATE: 0.75, POLISHED: 0.60] rather than "3/4."
- **Target:** `artifact-pa-protocol.md` (PA-05 definition), Weaver prompt
- **Why:** "Brilliantly designed but poorly polished" and "polished but boring" both score 3/4 but need DIFFERENT remediation.
- **Evidence:** PA-30, AR-03. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (enables differentiated remediation)
- **Effort:** MEDIUM (~15 lines)
- **Classification:** (D)

---

#### E-072: Add "What Would You REMOVE?" Question

- **What:** Add adversarial removal question to every PA audit.
- **Target:** `artifact-pa-protocol.md` (Part 3, assign to adversarial auditor)
- **Why:** "Current PA questions are almost entirely ADDITIVE. This inverts the pipeline's bias toward complexity."
- **Evidence:** PA-32, AR-34. Convergence: **2 sources**.
- **Expected PA-05 impact:** Indirect (catches over-engineering)
- **Effort:** LOW (~5 lines)
- **Classification:** (D)

---

#### E-073: Implement Quality Journal as Second Instrument

- **What:** 10-question 1-7 scale journal (QJ-01 through QJ-10) administered by 2-3 separate auditors, not PA auditors.
- **Target:** `artifact-pa-protocol.md` (new Part 6)
- **Why:** "Binary format produces 1 bit per question. Cannot distinguish 'adequate' from 'exceptional.'"
- **Evidence:** MM-01. Convergence: **2 sources** (12, 17).
- **Expected PA-05 impact:** Indirect (captures degree binary cannot)
- **Effort:** HIGH (new instrument, 2-3 new agents)
- **Classification:** (D)

---

#### E-074: Add Mechanical Fix Path for Trivial BLOCKING Issues

- **What:** After gate check, if BLOCKING issues are all MECHANICAL (CSS value wrong), spawn targeted fix agent with specific CSS instructions.
- **Target:** New phase in `artifact-orchestrator.md`
- **Why:** Saves 60+ minutes on rebuild-bound builds when fixes are trivial.
- **Evidence:** E-30 (surface map). Convergence: **1 source**.
- **Expected PA-05 impact:** Time savings
- **Effort:** MEDIUM (~25 lines)
- **Classification:** (C)

---

### TIER 4: NICE-TO-HAVE (Incremental improvements)

---

#### E-075: Add Zone-Specific Section Indicator Styling
- **What:** Zone indicators vary at least 2 properties per zone (color, tracking, border-style, font-weight).
- **Target:** Execution brief template, Tier 3
- **Evidence:** E01-02. Impact: LOW. Effort: LOW. Classification: (A)

#### E-076: Add Zone-Specific Inline Code Styling
- **What:** In CODE-heavy zones, differentiate inline code from block code through additional property.
- **Target:** Execution brief template, D-01
- **Evidence:** E01-03. Impact: LOW. Effort: LOW. Classification: (A)

#### E-077: Add Responsive Drop Cap Adjustment
- **What:** Scale drop-cap at 768px (3.5em -> 2.5em).
- **Target:** Builder recipe, responsive section
- **Evidence:** E01-04. Impact: LOW. Effort: LOW. Classification: (A)

#### E-078: Add Ghost Token Detection
- **What:** Flag custom properties defined but never referenced.
- **Target:** Gate runner (new anti-pattern gate)
- **Evidence:** E01-05, CSS-04. Impact: LOW. Effort: LOW. Classification: (A)

#### E-079: Standardize Grid Gap Patterns
- **What:** Use one primary gap technique; limit alternative to 1-2 instances.
- **Target:** Builder recipe, component patterns
- **Evidence:** E01-06. Impact: LOW. Effort: LOW. Classification: (A)

#### E-080: Add Zone Count Validation
- **What:** If zone count exceeds recommended range, require explicit justification.
- **Target:** `artifact-routing.md` (Section 11)
- **Evidence:** E02-08, F-05 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-081: Fix Per-Section NARRATIVE/REFERENCE/CODE Labels
- **What:** Add explicit template row with character classification per section.
- **Target:** `artifact-routing.md` (Phase 0 output template)
- **Evidence:** E02-06. Impact: LOW. Effort: LOW. Classification: (A)

#### E-082: Calibrate Auditor E's Question Assignments
- **What:** Distribute structural-positive questions across multiple auditors.
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** E03-07. Impact: LOW. Effort: LOW. Classification: (D)

#### E-083: Add Semantic Consistency Check for Colored Borders
- **What:** If colored borders used semantically anywhere, maintain that mapping throughout.
- **Target:** Builder recipe or gate runner
- **Evidence:** E03-08. Impact: LOW. Effort: LOW. Classification: (A)

#### E-084: WAVE Density Arc for Multi-Peak Content
- **What:** For 5+ zones with mixed types, prefer WAVE (2 peaks with valleys) over CRESCENDO.
- **Target:** `artifact-routing.md` (density arc section)
- **Evidence:** E05-06. Impact: LOW. Effort: LOW. Classification: (A)

#### E-085: Builder Conviction Statement Validation
- **What:** Conviction statement mandatory as HTML comment (>= 30 words).
- **Target:** `artifact-builder-recipe.md`
- **Evidence:** E05-05. Impact: LOW. Effort: LOW. Classification: (A)

#### E-086: Add ASCII Diagram vs Code Block Visual Distinction
- **What:** Diagrams and code blocks must be visually distinguishable (different bg shade, border style, or padding).
- **Target:** `artifact-builder-recipe.md` (component section)
- **Evidence:** E08-10. Impact: LOW. Effort: LOW. Classification: (A)

#### E-087: Add Collapsible Treatment for Long Code Blocks
- **What:** Wrap long startup scripts in `<details>/<summary>`.
- **Target:** Builder recipe or PA flagging
- **Evidence:** VA-09. Impact: LOW. Effort: LOW. Classification: (A)

#### E-088: Add Zebra-Striping to Tables
- **What:** Table `tr:nth-child(even)` background for readability.
- **Target:** Builder recipe or components.css
- **Evidence:** VA-08. Impact: LOW. Effort: LOW. Classification: (A)

#### E-089: Differentiate Role Card Backgrounds by Level
- **What:** Zone-specific card background tints (town/rig/human).
- **Target:** Builder recipe or TC brief
- **Evidence:** VA-11. Impact: LOW. Effort: LOW. Classification: (A)

#### E-090: Add Print Styling to D-07
- **What:** REQUIRED: @media print block (5+ rules).
- **Target:** `artifact-builder-recipe.md` (D-07)
- **Evidence:** D-01 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-091: Add Zone-Specific ::selection Colors
- **What:** Warm red in Z1-Z2, cooler teal in Z5-Z6.
- **Target:** `artifact-tc-brief-template.md` (D-07), builder recipe
- **Evidence:** D-02 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-092: Consolidate D-07 into Fewer, Larger Instructions
- **What:** Restructure from 5 micro-items to 2 macro-items (RESPONSIVE REFINEMENTS + PERCEPTION POLISH).
- **Target:** `artifact-builder-recipe.md` (D-07)
- **Evidence:** D-03 (compliance). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-093: Add Callout Border-Left-Width Modulation
- **What:** `.zone-line .callout { border-left-width: 5px; }` -- dense zones get heavier borders.
- **Target:** `artifact-builder-recipe.md` (Step 2.4)
- **Evidence:** D-05 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-094: Add Table Row Hover Tint for Data Zones
- **What:** `.zone-floor tr:hover td { background-color: rgba(232,48,37,0.05); }`
- **Target:** `artifact-builder-recipe.md` (D-07)
- **Evidence:** D-06 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-095: Add PA-05 "Conditional Pass" Guidance
- **What:** Sub-criterion CONDITIONAL PASS = FAIL for 4/4 but PASS for 3/4.
- **Target:** `artifact-pa-protocol.md` (Part 1, Section 1.3)
- **Evidence:** E-01 (compliance). Impact: LOW. Effort: LOW. Classification: (D)

#### E-096: Clarify PA-67 Binary Criteria for "Partially Novel"
- **What:** YES requires novel VISUAL technique (not editorial). PARTIAL = NO.
- **Target:** `artifact-pa-protocol.md` (PA-67)
- **Evidence:** E-02 (compliance). Impact: LOW. Effort: LOW. Classification: (D)

#### E-097: Add PA-24/PA-25 Single-Page Guidance
- **What:** Assess inferred system coherence from single page (>=3 system traits = YES).
- **Target:** `artifact-pa-protocol.md` (PA-24, PA-25)
- **Evidence:** E-03 (compliance). Impact: LOW. Effort: LOW. Classification: (D)

#### E-098: Add p { max-width: 70ch } Gate Check
- **What:** Verify all `<p>` within `.container` have computed max-width constraint.
- **Target:** `artifact-gate-runner.md` (GR-10)
- **Evidence:** E-05 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-099: Clarify 73-Line Constraint Layer Scope
- **What:** "73-line cap measures Tier 1 + Tier 2 ONLY. Tier 3+4 outside cap."
- **Target:** `artifact-routing.md` (Compression Physics section)
- **Evidence:** F-04 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-100: Update Content Map Line Cap to Reflect Observed Length
- **What:** "Content Map target: ~50-80 lines for COMPOSED, ~30-50 for APPLIED."
- **Target:** `artifact-routing.md`
- **Evidence:** F-06 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-101: Log Model Selection in Output Files
- **What:** All agent outputs begin with "Agent: {role} | Model: {model_id}".
- **Target:** `artifact-orchestrator.md` (agent prompt headers)
- **Evidence:** G-02 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-102: Add File-Writing Mandate to SKILL.md
- **What:** "Write ALL intermediate artifacts to files: content-map.md, execution-brief.md, etc."
- **Target:** `~/.claude/skills/build-page/SKILL.md`
- **Evidence:** G-06 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-103: Add Output Filename Convention to SKILL.md
- **What:** Standard names: `{content-slug}.html`, `content-map.md`, `gate-results.md`, etc.
- **Target:** `~/.claude/skills/build-page/SKILL.md`
- **Evidence:** G-07 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-104: Preserve Tension Names in Brief
- **What:** "Content tensions (from Content Map): {list all tensions with dominant poles}."
- **Target:** `artifact-tc-brief-template.md` (Tier 3)
- **Evidence:** H-02 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-105: Add Component Name Aliasing Rule
- **What:** "Component class names from components.css are CANONICAL. Use as base class."
- **Target:** `artifact-builder-recipe.md` (Step 1.2)
- **Evidence:** H-03 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-106: Expand Worked Example Brief Section
- **What:** Replace 14-line description with full Tier 3 multi-coherence section (30-40 lines).
- **Target:** `artifact-worked-examples.md` (Example 2)
- **Evidence:** I-01 (compliance). Impact: LOW. Effort: MEDIUM. Classification: (A)

#### E-107: Add Counter-Example to Worked Examples
- **What:** Example 5: APPLIED-mode content map that missed tensions. Annotate differences.
- **Target:** `artifact-worked-examples.md` (new Example 5)
- **Evidence:** I-02 (compliance). Impact: LOW. Effort: MEDIUM. Classification: (B)

#### E-108: Add Phase 2 Build Worked Example
- **What:** 30-50 lines CSS with annotations: zone setup, custom properties, component modulation.
- **Target:** `artifact-worked-examples.md` (new Example 6)
- **Evidence:** I-03 (compliance). Impact: LOW. Effort: MEDIUM. Classification: (B)

#### E-109: Document Acceptable Deviation Ranges
- **What:** "Content map: 40-80 lines. Brief: 120-180 lines. CSS: 800-1500 lines."
- **Target:** `artifact-worked-examples.md` (new section)
- **Evidence:** I-04 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-110: Add Inner Spacing Compression Pattern Acknowledgment
- **What:** Inner spacing may be compressed to 50-75% if systematic. Document in value tables.
- **Target:** `artifact-value-tables.md` (spacing section)
- **Evidence:** J-01 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-111: Add H2/H3 Size Variation Requirement
- **What:** "H2 MUST vary between at least 2 distinct sizes across zones (>=4px difference)."
- **Target:** `artifact-builder-recipe.md` (Step 2.2), gate runner advisory gate
- **Evidence:** J-02 (compliance). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-112: Remove Unused Font Weight from Import
- **What:** Remove 700 from Inter import (never used). Saves ~20-50KB.
- **Target:** Builder recipe or HTML hygiene check
- **Evidence:** CSS-03. Impact: LOW. Effort: LOW. Classification: (A)

#### E-113: Consolidate 6 Near-Duplicate Section-Indicator Styles
- **What:** Shared `.section-indicator` class with Z5 override only. Saves ~48 lines.
- **Target:** CSS patterns documentation
- **Evidence:** CSS-05. Impact: LOW. Effort: LOW. Classification: (A)

#### E-114: Add scroll-margin-top for Anchor Targets
- **What:** Headings get scroll-margin-top for TOC anchor navigation.
- **Target:** Builder recipe
- **Evidence:** CSS-07. Impact: LOW. Effort: LOW. Classification: (A)

#### E-115: Codify Font-Family Trinity as Structural Pattern
- **What:** Serif = authority, Sans = neutrality, Mono = system. Zero crossover.
- **Target:** Builder recipe
- **Evidence:** CSS-13. Impact: LOW. Effort: LOW. Classification: (A)

#### E-116: Codify Border Hierarchy with Color-Weight Pairing
- **What:** 4px+red = heavy, 3px+tan = medium, 1px+subtle = light.
- **Target:** Builder recipe
- **Evidence:** CSS-14. Impact: LOW. Effort: LOW. Classification: (A)

#### E-117: Codify Zone Padding Arc as Quality Multiplier
- **What:** Z1 generous -> Z2 compressed -> ... -> Z6 release.
- **Target:** Builder recipe (Phase 3)
- **Evidence:** CSS-15. Impact: LOW. Effort: LOW. Classification: (A)

#### E-118: Increase Callout Background Opacity from 3% to 8-10%
- **What:** `rgba(color, 0.03)` produces sub-perceptual ~7 RGB shift. Increase to 8-10%.
- **Target:** Builder recipe or value tables
- **Evidence:** CSS-02. Impact: LOW. Effort: LOW. Classification: (A)

#### E-119: Strengthen GR-09 Border Weight Hierarchy JS
- **What:** Check for actual 4/3/1 weights (within 0.5px tolerance), not just "any 2+ distinct."
- **Target:** `artifact-gate-runner.md` (GR-09 JS)
- **Evidence:** B-03 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-120: Add GR-08 No Decorative Elements JS Code
- **What:** Check for background-image patterns, content:'' pseudo-elements, border-image, clip-path.
- **Target:** `artifact-gate-runner.md` (new GR-08 code)
- **Evidence:** B-05 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-121: Add 768px Responsive Gate Re-Run
- **What:** After 1440px gates, re-run GR-03, GR-11, GR-13, GR-14, GR-15 at 768px.
- **Target:** `artifact-gate-runner.md`, `artifact-orchestrator.md`
- **Evidence:** B-06 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-122: Resolve Conflicting Gate Result Files
- **What:** Only one `gate-results.md` may exist at verdict time. Archive previous.
- **Target:** `MANIFEST.md` (output naming), `artifact-orchestrator.md`
- **Evidence:** B-07 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-123: Investigate GR-05 Cold Color Measurement Anomaly
- **What:** Add diagnostic that logs computed style chain for cold-color violations.
- **Target:** `artifact-gate-runner.md` (GR-05 JS)
- **Evidence:** A-06 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-124: Add Background Delta Diagnostic Output to GR-11
- **What:** Report BOTH :root declared value AND computed bg-color of zone's first child section.
- **Target:** `artifact-gate-runner.md` (GR-11 JS)
- **Evidence:** A-08 (compliance). Impact: LOW. Effort: LOW. Classification: (A)

#### E-125: Add Minority Finding Preservation to Weaver
- **What:** Weaver appends "low-confidence observations" section: 1-line summaries of 1/9 findings.
- **Target:** `MANIFEST.md` (Appendix E Weaver prompt)
- **Evidence:** PF-10. Impact: LOW. Effort: LOW. Classification: (A)

#### E-126: Add Pre-Computed Orchestrator Digest
- **What:** 200-line summary of "what the orchestrator must know" to reduce context load.
- **Target:** New artifact or MANIFEST appendix
- **Evidence:** PF-12. Impact: MODERATE. Effort: MEDIUM. Classification: (B)

#### E-127: Add Zone Validation Checkpoint in Content Map
- **What:** Content Map zone table includes word counts and content register ratios.
- **Target:** `artifact-routing.md` (Phase 0 output spec)
- **Evidence:** PF-13. Impact: LOW. Effort: LOW. Classification: (A)

#### E-128: Soft Boundary for REBUILD/REFINE Decision
- **What:** 2.3-2.7 "judgment zone" where orchestrator considers nature of PA findings.
- **Target:** `artifact-orchestrator.md` (Section 7 verdict tree)
- **Evidence:** PF-15. Impact: MODERATE. Effort: LOW. Classification: (A)

#### E-129: Early-Abort: Skip PA if Identity Gates Fail
- **What:** Save ~11 agent spawns on rebuild-bound builds.
- **Target:** `artifact-orchestrator.md` (Phase verdict logic)
- **Evidence:** AR-16. Impact: Cost savings. Effort: LOW. Classification: (C)

#### E-130: Post-Verdict Institutional Learning/Logging
- **What:** Log content type, mode, builder model, PA-05, gate pass rate per run.
- **Target:** `artifact-orchestrator.md` (new post-verdict phase)
- **Evidence:** AR-13. Impact: Compounding. Effort: MEDIUM. Classification: (C)

#### E-131: HTML Post-Processing for Shipping Hygiene
- **What:** Validate HTML (W3C), check WCAG AA, compress, minify after SHIP verdict.
- **Target:** `artifact-orchestrator.md` (post-verdict)
- **Evidence:** AR-14. Impact: Production readiness. Effort: MEDIUM. Classification: (C)

#### E-132: Emotional Arc as Specified (Not Emergent)
- **What:** Design emotional arc explicitly rather than declaring it "emergent."
- **Target:** `artifact-tc-brief-template.md` (Tier 4) or builder recipe Phase 4
- **Evidence:** AR-39. Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-133: Make Mechanism Count Floor ADVISORY Not Gated
- **What:** Replace ">=14 mechanisms" with advisory. Mechanism count informational, not a gate.
- **Target:** Gate runner quality floor, orchestrator verdict logic
- **Evidence:** AR-10. Impact: Prevents mechanism-stuffing. Effort: LOW. Classification: (A)

#### E-134: Component Pre-Selection in Content Analysis
- **What:** Content Analyst maps which components.css classes fit each section.
- **Target:** `artifact-routing.md` (Phase 0, new operation)
- **Evidence:** AR-26. Impact: LOW. Effort: LOW. Classification: (A)

#### E-135: Section Rhythm Prediction in Content Analysis
- **What:** Content Analyst flags which sections need drama/visual emphasis.
- **Target:** `artifact-routing.md` (Phase 0)
- **Evidence:** AR-27. Impact: LOW. Effort: LOW. Classification: (A)

#### E-136: Builder Component Adoption Reporting
- **What:** Builder reports which components.css classes used. If <5, brief Tier 3 was insufficient.
- **Target:** Builder prompt template
- **Evidence:** AR-30. Impact: Feedback loop. Effort: LOW. Classification: (A)

#### E-137: Brief Validation Gate
- **What:** Verify brief contains actionable creative guidance (Tier 3 >= 3 CSS values, >= 2 zone descriptions).
- **Target:** `artifact-orchestrator.md` (Phase 2.5)
- **Evidence:** AR-31, PF-07 related. Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-138: Fix Prioritization Intelligence (Effort + PA-05 Impact)
- **What:** Weaver adds estimated fix effort + expected PA-05 impact per fix item.
- **Target:** Weaver output template
- **Evidence:** AR-21. Impact: LOW. Effort: LOW. Classification: (A)

#### E-139: Regression Awareness for Re-Runs
- **What:** Weaver compares current scores against previous and flags regressions.
- **Target:** Weaver prompt
- **Evidence:** AR-22. Impact: LOW. Effort: LOW. Classification: (A)

#### E-140: Artistic Impression Includes Builder Intent
- **What:** From conviction statement, so next builder understands intent, not just problems.
- **Target:** Weaver prompt
- **Evidence:** AR-23. Impact: LOW. Effort: LOW. Classification: (A)

#### E-141: Hybrid APPLIED/COMPOSED Mode
- **What:** APPLIED base with COMPOSED zones, rather than binary mode selection.
- **Target:** `artifact-routing.md` (mode determination)
- **Evidence:** AR-24. Impact: MODERATE. Effort: MEDIUM. Classification: (C)

#### E-142: Builder Self-Catch for Sub-Perceptual Deltas
- **What:** Builder screenshots Z2-Z3 boundary. "Can you tell zones apart?"
- **Target:** `artifact-builder-recipe.md` (Phase 5)
- **Evidence:** AR-29. Impact: LOW. Effort: LOW. Classification: (A)

#### E-143: Integrative Auditor Receives Gate Results
- **What:** Cross-reference perceptual findings with gate data.
- **Target:** `artifact-pa-protocol.md` (integrative auditor prompt)
- **Evidence:** AR-19. Impact: LOW. Effort: LOW. Classification: (D)

#### E-144: Add Tier 5 Partial Scoring (NO/PARTIAL/YES)
- **What:** 3-point scale for Tier 5 only: NO=0, PARTIAL=0.5, YES=1. Core battery stays binary.
- **Target:** `artifact-pa-protocol.md` (Tier 5 scoring)
- **Evidence:** E06-08. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-145: Add Voice-Design Alignment Assessment
- **What:** PA-86: "Does CSS amplify how text speaks -- making informal feel informal?"
- **Target:** `artifact-pa-protocol.md`
- **Evidence:** E06-10. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-146: Add Emotional Arc Sequencing to Weaver
- **What:** Map sequence of emotional registers. Does sequence follow narrative arc?
- **Target:** `artifact-pa-protocol.md` (Weaver synthesis)
- **Evidence:** E06-09. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-147: Add "Reader Auditor" as 10th PA Agent Type
- **What:** Scrolls at reading speed. Reports attention drift, memory, share-worthiness.
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** E06-02. Impact: MEDIUM. Effort: MEDIUM. Classification: (D)

#### E-148: Content Map Per-Section Register Vocabulary
- **What:** Add register vocabulary column to content map (sparse/moderate/dense/dramatic).
- **Target:** `artifact-routing.md` (Phase 0)
- **Evidence:** E-01 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-149: Content Map Omits Transition Weight Recommendations
- **What:** Add transition weight per boundary in content map.
- **Target:** `artifact-routing.md` (Phase 0)
- **Evidence:** E-02 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-150: Brief Assembler Channel Coverage Self-Check
- **What:** After assembling Tier 3, verify each boundary mentions at least 3 channel types.
- **Target:** `artifact-tc-brief-template.md` (assembly rules)
- **Evidence:** E-07 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-151: Explicit Layout Variety Requirement in Brief
- **What:** Brief must specify at least 2 distinct layout modes (single-column, 2-col grid, etc.).
- **Target:** `artifact-tc-brief-template.md`
- **Evidence:** E-08 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-152: Builder Prompt Lacks CSS Worked Example
- **What:** Add 30-50 line CSS example to builder prompt showing zone transition + component.
- **Target:** Builder recipe or new artifact
- **Evidence:** E-10 (surface map). Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-153: Builder Conviction Statement Under-Specified
- **What:** Template for conviction: metaphor + 3 decisions + 1 risk + per-zone intent.
- **Target:** Builder recipe
- **Evidence:** E-13 (surface map). Impact: LOW. Effort: LOW. Classification: (A)

#### E-154: Builder Component Adoption Checklist
- **What:** Checklist of components.css classes with "used / not used / zone" tracking.
- **Target:** Builder recipe
- **Evidence:** E-14 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-155: Gate Runner Doesn't Test at 1024px
- **What:** Add 1024px as third viewport for gate testing.
- **Target:** Gate runner
- **Evidence:** E-17 (surface map). Impact: LOW. Effort: LOW. Classification: (A)

#### E-156: GR-22 CSS Budget Misallocation Not Implemented
- **What:** Flag if >15% of CSS lines produce sub-perceptual effects.
- **Target:** Gate runner (new gate JS)
- **Evidence:** E-18 (surface map), E02-04. Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-157: GR-05 Warm-Color Check Not Comprehensive
- **What:** Improve warm color scanning to cover computed styles from inheritance.
- **Target:** Gate runner (GR-05 JS)
- **Evidence:** E-19 (surface map). Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-158: No Full-Page Screenshot
- **What:** Add full-page screenshot at 1440px.
- **Target:** Screenshot protocol
- **Evidence:** E-20 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-159: Auditor C Overloaded (14 Questions)
- **What:** Split Auditor C into C1 + C2 (7 questions each).
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** E-22 (surface map). Impact: MEDIUM. Effort: MEDIUM. Classification: (D)

#### E-160: No PA Question for Density Arc
- **What:** Add question: "Does visual density change across the scroll?"
- **Target:** `artifact-pa-protocol.md`
- **Evidence:** E-23 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-161: No PA Question for Component Library Adoption
- **What:** Add question: "Do components feel related to a shared visual system?"
- **Target:** `artifact-pa-protocol.md`
- **Evidence:** E-24 (surface map). Impact: LOW. Effort: LOW. Classification: (D)

#### E-162: Integrative Auditor Lacks Gestalt Framework
- **What:** Provide structured synthesis template covering 6 dimensions.
- **Target:** `artifact-pa-protocol.md` (integrative auditor prompt)
- **Evidence:** E-25 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-163: Weaver Verdict Lacks Severity Hierarchy
- **What:** Structured output: BLOCKING (stop) / SIGNIFICANT (should fix) / MODERATE / MINOR.
- **Target:** Weaver output template
- **Evidence:** E-27 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-164: Weaver Artistic Impression Unstructured
- **What:** Template: emotional arc + strongest moments + what to preserve.
- **Target:** Weaver output template
- **Evidence:** E-28 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-165: REFINE Builder Receives No CSS-Specific Fix Targets
- **What:** Fix list includes specific CSS selectors and properties to change.
- **Target:** Weaver output template
- **Evidence:** E-29 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-166: Value Tables Has Below-Threshold Pair Without Warning
- **What:** Flag pairs with delta < 15 in the value tables document.
- **Target:** `artifact-value-tables.md`
- **Evidence:** E-31 (surface map). Impact: LOW. Effort: LOW. Classification: (A)

#### E-167: Worked Examples Incomplete (References Not Includes)
- **What:** Replace references to artifacts with inline excerpts.
- **Target:** `artifact-worked-examples.md`
- **Evidence:** E-32 (surface map). Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-168: Component Adoption Lacks Decision Tree
- **What:** "IF content has tables -> use .table-wrapper. IF >3 blockquotes -> use .callout variants."
- **Target:** Builder recipe
- **Evidence:** E-33 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-169: Agent Prompts Lack CRITICAL RULES Header
- **What:** Top of each agent prompt: 3-5 CRITICAL rules in bold.
- **Target:** `artifact-orchestrator.md` (all agent prompts)
- **Evidence:** E-34 (surface map). Impact: MEDIUM. Effort: LOW. Classification: (A)

#### E-170: No Cross-Artifact Consistency Check
- **What:** Automated check that threshold values match across artifacts.
- **Target:** New meta-artifact or orchestrator operation
- **Evidence:** E-35 (surface map). Impact: LOW. Effort: MEDIUM. Classification: (C)

#### E-171: TC Brief Template Doesn't Specify Zone BG Color Plan Format
- **What:** Template specifies exact hex pair + computed delta for each boundary.
- **Target:** `artifact-tc-brief-template.md`
- **Evidence:** E-36 (surface map). Impact: HIGH. Effort: LOW. Classification: (A)

#### E-172: Content Analyst Spec Misaligned with Worked Example
- **What:** Reconcile worked example output format with current spec.
- **Target:** `artifact-routing.md` + `artifact-worked-examples.md`
- **Evidence:** E-37 (surface map). Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

#### E-173: Rotating PA Question Pool (Goodhart Resistance)
- **What:** 120+ questions, randomly sample 40 per audit. Builder cannot optimize.
- **Target:** `artifact-pa-protocol.md` restructure
- **Evidence:** AR-33, MM-09. Impact: Highest anti-gaming. Effort: HIGH. Classification: (C)

#### E-174: Unprompted Discovery Auditors (No Questions)
- **What:** 2-3 auditors with only: "Look at this page. Write down everything you notice."
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** AR-40. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-175: Adversarial Auditors ("Find Reasons This Is BAD")
- **What:** 2 auditors with "find everything that PASSES but shouldn't."
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** AR-41, MM-08. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-176: Mixed-Method Auditor Diversity (Model D)
- **What:** 3 binary PA + 2 open-ended + 2 emotional journaling + 1 task-based + 1 comparison.
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** MM-02. Impact: HIGH (information gain). Effort: HIGH. Classification: (C)

#### E-177: Frame Diversity for Auditors
- **What:** 5 frames: Designer, Reader, Editor, Developer, First-time visitor.
- **Target:** `artifact-pa-protocol.md` (Part 4 prompts)
- **Evidence:** MM-07. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-178: Description-Before-Judgment Format
- **What:** Auditor describes what they see FIRST, then answers YES/NO. 2.3 bits/question.
- **Target:** `artifact-pa-protocol.md` (question format)
- **Evidence:** MM-10. Impact: LOW. Effort: LOW. Classification: (D)

#### E-179: Behavioral Indicators Instead of Judgment Questions
- **What:** Instead of "Is there variety?" ask "Count distinct visual treatments in Zone 3."
- **Target:** Selected PA questions
- **Evidence:** MM-11. Impact: LOW. Effort: LOW. Classification: (D)

#### E-180: Live-Page Interaction Auditing
- **What:** Some auditors interact with live page (hover, click, scroll at natural speed).
- **Target:** `artifact-pa-protocol.md` (Part 5)
- **Evidence:** MM-12. Impact: MEDIUM. Effort: HIGH. Classification: (C)

#### E-181: Bloom Taxonomy Question Ordering
- **What:** Remember -> Understand -> Apply -> Analyze -> Evaluate -> Create.
- **Target:** `artifact-pa-protocol.md` (Part 4, ordering)
- **Evidence:** MM-15. Impact: LOW. Effort: LOW. Classification: (D)

#### E-182: Dimension-Based Auditor Assignment
- **What:** All typography questions to one auditor, all spatial to another.
- **Target:** `artifact-pa-protocol.md` (Part 4)
- **Evidence:** MM-16. Impact: MEDIUM. Effort: LOW. Classification: (D)

#### E-183: Two Vocabularies (Machine + Human)
- **What:** Machine vocabulary (mechanisms, channels) for gates. Human vocabulary (breathing room, weight) for builder.
- **Target:** Builder recipe, TC brief template
- **Evidence:** AR adversarial Attack 5. Impact: MEDIUM. Effort: MEDIUM. Classification: (A)

---

### ENRICHMENT SUMMARY

| Tier | Count | Description |
|------|-------|-------------|
| BLOCKING | 10 (E-001 through E-010) | Prevents recurring critical defects |
| SIGNIFICANT | 20 (E-011 through E-030) | Prevents moderate quality gaps |
| MODERATE | 44 (E-031 through E-074) | Improves quality and calibration |
| NICE-TO-HAVE | 109 (E-075 through E-183) | Incremental improvements |
| **TOTAL** | **183** | |

**After full de-duplication from ~268 raw recommendations across all extractions.**

**Most-cited artifacts for changes:**
1. `artifact-gate-runner.md` — 22 enrichments
2. `artifact-pa-protocol.md` — 28 enrichments (including new questions)
3. `artifact-builder-recipe.md` — 24 enrichments
4. `artifact-tc-brief-template.md` — 18 enrichments
5. `artifact-orchestrator.md` — 14 enrichments
6. `artifact-routing.md` — 12 enrichments

---

## 6. NEW PA QUESTIONS — COMPLETE LIST

All proposed new PA questions from all extractions, de-duplicated. Organized by quality dimension.

### 6.1 Emotional Arc & Pacing (8 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-80 | "Scroll at reading speed. Does your feeling change at least 3 times in a logical order (beginning, middle, end)?" | YES = 3+ sequenced changes | Emotional sequencing | 06-unmeasured |
| PA-81 | "Is there a 3+ screen stretch where attention drifts and nothing pulls it back? Point to start." | YES = no sag (inverted) | Engagement sag | 06-unmeasured |
| PA-82 | "Do visual events arrive at different speeds in different parts -- sometimes rapid, sometimes spacious -- or evenly spaced?" | YES = 2+ tempos | Tempo variation | 06-unmeasured |
| PA-83 | "Compare visually loudest to quietest moment. Is the gap wide?" | YES = clear volume differential | Dynamic range | 06-unmeasured |
| PA-85 | "In the bottom half, is there a visual moment that genuinely surprised you?" | YES = surprise exists | Surprise distribution | 06-unmeasured |
| NEW-03 | "Point to the moment of STRONGEST emotional response. Is it in top, middle, or bottom third?" | Location + YES if not top | Emotional peak placement | 12-pa-question |
| NEW-04 | "After scrolling entire page, do you feel the journey CONCLUDED or just STOPPED?" | YES = concluded | Resolution satisfaction | 12-pa-question |
| NEW-19 | "At any zone boundary, did you feel ANTICIPATION based on visual cues, not content curiosity?" | YES = anticipation exists | Visual anticipation | 12-pa-question |

### 6.2 Memorability & Visual Memory (4 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-88 | "Close eyes 5 seconds, reopen. What single visual image persists? Is it a designed element?" | YES = names designed element | Visual memory | 06-unmeasured |
| PA-89 | "Imagine you read this yesterday and need to find a section. Could you navigate by visual landmarks alone?" | YES = landmark navigation possible | Return-visit findability | 06-unmeasured |
| NEW-02 | "If you described this page a week later, what visual element would you describe FIRST? What shape/color?" | PASS = names specific visual | One-week memory | 12-pa-question |
| QJ-05 | "How MEMORABLE will this page be in a week?" (1-7 scale, Quality Journal) | Scale: 1=forgettable, 7=specific images | Memorability degree | 17-meta-meta |

### 6.3 Content-Form Resonance (4 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-86 | "Read 2-3 paragraphs. Does the CSS amplify how the text speaks -- informal voice feels informal, precise feels precise -- or generic?" | YES = amplifies voice | Voice-design alignment | 06-unmeasured |
| PA-87 | "Could this exact visual design work equally for completely different subject matter? Or custom-built for THIS content?" | YES = custom for this content | Content-form specificity | 06-unmeasured |
| NEW-07 | "Name one visual element created SPECIFICALLY for this content that wouldn't work on a different page." | PASS = names element | Custom vs template | 12-pa-question |
| PA-96 | "Does visual design mirror the content's logical structure -- denser where argument is denser, resolving where it resolves?" | YES = mirrors structure | Narrative flow support | 06-unmeasured |

### 6.4 Intentional Confidence (6 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-91 | "Can you find a place where the design hedges -- half-commits to a visual idea?" | YES = no hedging (inverted) | Design commitment | 06-unmeasured |
| PA-92 | "Can you point to something the design deliberately does NOT do, and does that absence make surrounding design stronger?" | YES = identifies deliberate omission | Restraint as strength | 06-unmeasured |
| NEW-08 | "Point to one BOLD design decision -- extreme size, unusual placement, deliberate asymmetry." | PASS = names bold decision | Compositional audacity | 12-pa-question |
| NEW-10 | "Find a section using fewer techniques. Simplicity feels like: (a) chose restraint, (b) content simpler, (c) ran out of ideas?" | PASS = (a) or (b) | Restraint vs laziness | 12-pa-question |
| NEW-17 | "Can you find one place where the page intentionally breaks its own visual rules? Is it effective?" | YES = identifies effective rule-break | Sprezzatura | 12-pa-question |
| NEW-18 | "Is there any section where you sense the designer STOPPED PAYING ATTENTION?" | YES = no drop-off (inverted) | Consistency of craft | 12-pa-question |

### 6.5 Typography as Expression (3 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| NEW-05 | "Cover images/diagrams. Looking ONLY at text -- size, weight, spacing -- does typography express a personality? One word." | PASS = specific word (not "clean"/"readable") | Type personality | 12-pa-question |
| NEW-06 | "Squint at paragraphs in different zones. Same gray TEXTURE or different typographic density?" | YES = different textures | Type texture variation | 12-pa-question |
| PA-94 | "Do different content types feel like different physical weight or material quality?" | YES = 3+ material presences | Material contrast | 06-unmeasured |

### 6.6 Spatial Composition (4 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-95 | "Does space between major elements feel TAUT (deliberate, precise) or SLACK (roughly correct)?" | YES = taut | Compositional precision | 06-unmeasured |
| NEW-15 | "As you scroll, does visual density BREATHE -- alternating compressed/expanded? Or constant?" | YES = breathes | Compression-expansion | 12-pa-question |
| NEW-16 | "Find two elements placed CLOSER together than others. Does closeness communicate a relationship?" | YES = proximity has meaning | Proximity semantics | 12-pa-question |
| NEW-20 | "Pick largest blank space IN CONTENT AREA. Does it feel COMPOSED or like a GAP?" | YES = composed | Negative space quality | 12-pa-question |

### 6.7 Engagement & Scroll Experience (4 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| NEW-01 | "Scrolling at normal speed, does anything make you INVOLUNTARILY STOP? What caused the stop?" | PASS = describes stop mechanism | Scroll-stop mechanism | 12-pa-question |
| NEW-13 | "After starting to skim (PA-35), does the page PULL YOU BACK? What re-engages?" | YES = recovery mechanism exists | Engagement recovery | 12-pa-question |
| NEW-14 | "Look at any element more closely. Does closer inspection reveal additional detail you missed?" | YES = hidden refinements | Depth reward | 12-pa-question |
| PA-84 | "Look at 3 interactive/typographic details (hover, selection, numbers, edges). Does any reveal a refinement not immediately obvious?" | YES = micro-delight found | Delight moments | 06-unmeasured |

### 6.8 Color & Coherence (3 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| NEW-11 | "Count distinct colors (excluding text/cream). Is each doing a JOB? Name each job." | PASS = all colors have jobs | Color economy | 12-pa-question |
| NEW-12 | "Does color CHANGE as you scroll? Warm-to-cool, monochrome-to-colorful? Or same throughout?" | YES = color narrative | Color progression | 12-pa-question |
| PA-97 | "For each zone: does it NEED to look different from neighbors to serve content? Could adjacent zones merge?" | YES = zones are content-justified | Zone justification | 06-unmeasured |

### 6.9 Holistic (3 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| PA-93 | "At this viewport, can you identify a layout decision made FOR this width?" | YES = viewport-specific decision | Responsive design intent | 06-unmeasured |
| PA-98 | "Does the page feel finished -- a complete thought -- or could it continue indefinitely?" | YES = feels complete | Compositional completeness | 06-unmeasured |
| PA-99 | "If you needed this info regularly, would you WANT to return? Does reading experience add value?" | YES = experience adds value | Experience value | 06-unmeasured |

### 6.10 Adversarial (5 questions)

| ID | Question Text | Binary | Dimension | Source |
|----|--------------|--------|-----------|--------|
| NEW-09 | "Pick two similar elements. SHOULD one be visually different? Is similarity serving content or template?" | YES = similarity serves content | Template lock detection | 12-pa-question |
| (Q9-a) | "Would you come back to this page?" | YES/NO | Utility beyond aesthetics | 13-adversarial |
| (Q9-b) | "Can you remember what the page looked like 5 minutes after?" | YES/NO | Memorability (behavioral) | 13-adversarial |
| (Q9-c) | "Is this page trying too hard?" | YES = not trying too hard (inverted) | Over-engineering detection | 13-adversarial |
| (H6) | "What would you REMOVE from this page?" | Open-ended | Bloat detection | 13-adversarial |

### 6.11 Quality Journal (Separate Instrument, 1-7 Scale)

| ID | Question Text | Anchors | Source |
|----|--------------|---------|--------|
| QJ-01 | "How much does this page make you WANT to keep scrolling?" | 1=stop, 7=compelled | 17-meta-meta |
| QJ-02 | "How CONFIDENT does the design feel?" | 1=tentative, 7=decisive | 17-meta-meta |
| QJ-03 | "How well does visual treatment AMPLIFY content's voice?" | 1=flattens, 7=design IS content | 17-meta-meta |
| QJ-04 | "How VARIED across full scroll?" | 1=uniform, 7=richly varied | 17-meta-meta |
| QJ-05 | "How MEMORABLE in a week?" | 1=forgettable, 7=specific images | 17-meta-meta |
| QJ-06 | "How much does design REWARD close attention?" | 1=everything at glance, 7=details reveal | 17-meta-meta |
| QJ-07 | "How well does page PACE demands?" | 1=boring or overwhelming, 7=perfectly metered | 17-meta-meta |
| QJ-08 | "EXPERIENCE vs DOCUMENT?" | 1=document, 7=journey | 17-meta-meta |
| QJ-09 | "How TRUSTWORTHY?" | 1=amateur, 7=authoritative | 17-meta-meta |
| QJ-10 | "Overall placement?" | 1=competent, 4=professional, 7=exceptional | 17-meta-meta |

### 6.12 Questions to RETIRE (4)

| ID | Rationale |
|----|-----------|
| PA-06 | Near-zero failure rate. Extreme edge case. |
| PA-07 | Near-zero failure rate. PA-02 covers readability. |
| PA-09 | PA-33 captures same with better framing. PA-50 catches quantitatively. |
| PA-40 | Low discrimination. PA-69 subsumes it. |

### 6.13 Questions to MERGE (2 merges)

| Source | Into | How |
|--------|------|-----|
| PA-08 | PA-02 | Revised PA-02: "Any text uncomfortable? Point to worst spot. Lean closer?" |
| PA-18 | PA-03 | Add sub-check: "Do all neutrals feel like the same temperature?" |

### 6.14 Questions to REVISE (2)

| ID | From | To |
|----|------|-----|
| PA-12 | "Eyes flow smoothly?" | "Where does visual flow BREAK? Name exact scroll position." |
| PA-16 | "Twin elements identical?" | NEW-09 (inverse twin test) |

### 6.15 Proposed Net Change

- **Current:** 65 questions (42 structural, 14 visual, 6 experiential, 3 adversarial)
- **After changes:** ~58 core PA + 10 Quality Journal = 68 total instruments
- **Distribution:** ~25 structural, ~15 visual, ~12 experiential, ~6 adversarial + 10 QJ
- **Questions discriminating at 3/4->4/4 level:** ~10 current -> ~18 proposed

---

## 7. NEW GATES — COMPLETE LIST

### 7.1 New Gates to Add

| Gate ID | Name | Threshold | Type | Source |
|---------|------|-----------|------|--------|
| GR-43 | **Trailing Void** | Body extends > 900px beyond last content element = FAIL | Identity (BLOCKING) | E03-01, VA-01, E-16 |
| GR-44 | **Structural Echo** | >4 consecutive same-class elements = SIGNIFICANT; >6 = BLOCKING | Anti-Pattern | E03-02, VA-03 |
| GR-45 | **Palette Consistency** | 0 untraceable colors on structural elements | Identity | E05-03 |
| GR-46 | **CSS Value Distribution** | >50% of delta values within 5 of floor = FAIL | Anti-Pattern | PF-05 |
| GR-47 | **Multi-Channel Boundary** | >= 2 perceptible channel shifts per zone boundary | Perception | AR-06 |
| GR-48 | **Proximity Ratio** | Inter-section/intra-section spacing ratio >= 2.5 | Perception | PS-02 |
| GR-49 | **Depth Layer Count** | >= 3 visual layers for Middle tier, >= 4 for Ceiling | Perception | PS-06 |
| GR-50 | **Brief Validation** | Tier 3 >= 3 CSS values, >= 2 zone descriptions, >= 1 transition assignment | Process | AR-31 |
| GR-51 | **Suppressor Scan** | 0 suppressor patterns in builder-visible brief | Process | PF-07 |

### 7.2 Existing Gates to MODIFY

| Gate | Modification | Reason | Source |
|------|-------------|--------|--------|
| **GR-05** | Exclude non-rendered elements; add specific #7C3AED check; add diagnostic logging | False positives, specific violation | A-05, A-07, A-06, A-08 |
| **GR-09** | Strengthen JS to check 4/3/1 hierarchy, not "any 2+ weights" | Weak implementation | B-03 |
| **GR-11** | Report both :root declared AND computed bg-color | CSS specificity overrides | A-08 |
| **GR-14** | Add structural transition element detection; subtract element height from gap | False positive on D-04 dark inversions | E04-03, B-04 |
| **GR-17** | Exclude `<td>` and `<th>` from 12px minimum (use 6px for table cells) | 262 false positives on tables | E04-04, E-04 |
| **GR-10** | Add p { max-width: 70ch } check | Specified but not gated | E-05 |

### 7.3 Gates to ADD JS Implementation (Currently Text-Only)

| Gate | Status | Source |
|------|--------|--------|
| GR-08 | No Decorative Elements -- has spec text but no JS code | B-05 |
| GR-16 | Threshold Gaming -- spec exists, no implementation | E02-04 |
| GR-19 | Whitespace Voids -- spec exists, no implementation | E02-04 |
| GR-21 | Uniform Typography -- spec exists, no implementation | E02-04 |
| GR-22 | CSS Budget Misallocation -- spec exists, no implementation | E02-04, E-18 |

### 7.4 Gate Process Changes

| Change | Description | Source |
|--------|-------------|--------|
| **768px Re-Run** | Re-run GR-03, GR-11, GR-13, GR-14, GR-15 at 768px | B-06 |
| **Pre-Build :root Verification** | After builder writes :root, verify values match brief BEFORE construction | A-02 |
| **Gate Result Naming** | Only one `gate-results.md` at verdict time | B-07 |
| **Gate ID Canonicalization** | Runs MUST use artifact gate IDs (GR-01 through GR-42) | B-01 |
| **Void Classification** | Distinguish structural/rhythmic/dramatic/compositional voids | AR-32 |

---

## 8. PROPOSED EXPERIMENTS

### Experiment 1: Architecture Effect Test (CHEAPEST)

- **Hypothesis:** Scale-based question ordering produces richer PA responses than PA-number ordering.
- **Method:** 4 auditors, same questions, different orders (PA-number, scale-based, temporal, Bloom taxonomy). Compare distinct issues found, response depth, cross-dimensional insights.
- **Cost:** LOW (4 Opus agents, existing screenshots, ~30 min)
- **Expected outcome:** Scale-based or Bloom produces more cross-dimensional insights.
- **Source:** MM-04

### Experiment 2: Dual-Instrument Comparison (VERY HIGH STRATEGIC VALUE)

- **Hypothesis:** Quality Journal captures measurable differences between pages that binary PA rates identically.
- **Method:** 3 pages with similar PA-05 (all 3/4). Deploy Mode 4 PA + 3 QJ auditors per page. Compare QJ variance vs PA variance.
- **Cost:** MEDIUM (9 QJ auditors + possibly 2 PA runs)
- **Expected outcome:** QJ distinguishes pages binary rates identically (e.g., 4.2, 5.1, 3.8).
- **Source:** MM-05

### Experiment 3: Adversarial Goodhart Probe (HIGHEST STRATEGIC VALUE)

- **Hypothesis:** A page can pass all 65 PA questions while being mediocre.
- **Method:** Give Opus builder FULL PA protocol + instruction to satisfy letter while violating spirit. Deploy Mode 4 PA + Quality Journal. If PA passes but QJ fails, instrument is gameable.
- **Cost:** MEDIUM (1 builder + Mode 4 + 3 QJ)
- **Expected outcome:** Proves or disproves measurement system integrity.
- **Source:** MM-06

### Experiment 4: Threshold Awareness Test

- **Hypothesis:** Showing builder calibration RANGES reduces perception gate failures.
- **Method:** Same content. Builder A: hidden thresholds (current). Builder B: calibration bands ("Subtle = 20-30 RGB. Below 15 = invisible."). Compare gate pass rates.
- **Cost:** MEDIUM (2 builder runs + 2 PA runs)
- **Expected outcome:** Builder B has fewer perception gate failures.
- **Source:** AR-05 (AR adversarial)

### Experiment 5: Pipeline vs Nothing (ULTIMATE VALIDATION)

- **Hypothesis:** A skilled human developer with ONLY soul constraints produces comparable quality.
- **Method:** Same content to human + pipeline. Same PA evaluation. If hand-coded scores within 0.5, infrastructure is overhead.
- **Cost:** HIGH (human developer + pipeline run + 2 PA runs)
- **Expected outcome:** Validates pipeline's value proposition.
- **Source:** AR-12

### Experiment 6: Single-Agent Opus Baseline

- **Hypothesis:** Single Opus agent with CD-006 reference + soul constraints matches pipeline output.
- **Method:** Give single Opus: content + soul constraints + CD-006 CSS excerpt + long context. Compare PA-05 vs pipeline.
- **Cost:** MEDIUM (1 agent + 1 PA run)
- **Expected outcome:** Tests whether pipeline solves a problem that still exists.
- **Source:** AR-36

### Experiment 7: 3-Pass Build

- **Hypothesis:** Multiple build passes improve quality.
- **Method:** Run 3-pass build (council declared single-pass default without evidence). Compare PA-05 to single-pass.
- **Cost:** MEDIUM (3 builder runs + PA)
- **Expected outcome:** Tests multi-pass quality ceiling.
- **Source:** AR-37

### Experiment 8: Brief Line Budget A/B Test

- **Hypothesis:** There is an optimal brief length.
- **Method:** Compare 80-line brief vs 200-line brief, same content.
- **Cost:** MEDIUM (2 builder runs + 2 PA runs)
- **Expected outcome:** Identifies optimal brief length.
- **Source:** AR-38

### Experiment 9: Experiential Question Placement

- **Hypothesis:** Leading with experiential questions changes auditor responses.
- **Method:** A/B: Pool A = current order. Pool B = experiential-first. Compare response depth.
- **Cost:** LOW (existing screenshots, 6-8 auditors)
- **Expected outcome:** Pool B produces richer experiential responses.
- **Source:** 06-unmeasured (implicit)

### Experiment 10: World-Description Framing Validation

- **Hypothesis:** "World-description" framing actually changes builder behavior vs direct prohibition.
- **Method:** Same content. Builder A: world-description framing. Builder B: direct prohibition framing. Compare quality.
- **Cost:** MEDIUM (2 builder runs + 2 PA runs)
- **Expected outcome:** Validates or invalidates a major pipeline design decision.
- **Source:** AR-35

### Experiment 11: Cross-Model Evaluation

- **Hypothesis:** Opus-judging-Opus inflates scores.
- **Method:** Build with Opus, evaluate with Sonnet. Build with Sonnet, evaluate with Opus. Compare.
- **Cost:** MEDIUM (4 runs)
- **Expected outcome:** Quantifies model-evaluation bias.
- **Source:** 13-adversarial

### Experiment 12: Human Validation (GROUND TRUTH)

- **Hypothesis:** Professional web designers' judgment is the ground truth.
- **Method:** Show pages to 5 professional web designers. Ask "would you ship this?" Compare to pipeline.
- **Cost:** HIGH (external recruitment)
- **Expected outcome:** Calibrates ALL instruments against human judgment.
- **Source:** MM-17

---

## 9. THE SINGLE HIGHEST-LEVERAGE CHANGE

### Synthesis Across All Sources

Three candidates emerged as "the single highest-leverage change" from different analyses:

| Candidate | Source | Argument | Expected PA-05 Impact |
|-----------|--------|----------|-----------------------|
| **Automated REFINE cycle** | 07-ceiling | Every defect is CSS fix. Pipeline already has fix list. Just execute. | +0.3 to +0.5 |
| **Builder pre-question** | 16-macroscopic, 13-adversarial | Changes what the builder ATTEMPTS, not just what it executes | Paradigm shift |
| **Brief self-verification of RGB deltas** | 02-artifact, 04-gate-failure, compliance | Prevents the #1 root cause (brief self-contradiction) | +0.3 |

### The Answer: It Depends on the Timescale

**For the NEXT build (immediate):** E-001 (brief self-verify RGB deltas) + E-003 (trailing void gate). These two changes alone would have prevented both BLOCKING issues and the 2 perception gate failures. Combined expected impact: +0.5 PA-05. Total effort: ~35 lines.

**For sustainable quality improvement (medium-term):** E-009 (automated REFINE cycle). This creates a feedback loop that catches and corrects EVERY CSS defect class, not just background deltas. Expected impact: +0.3 to +0.5 per build, every build.

**For breaking the B+ ceiling (long-term):** E-023 (builder pre-question). If the builder answers "What should the reader FEEL?" with a specific, content-rooted answer, it changes the entire creative trajectory. This is the only intervention that addresses the content-form isomorphism gap that NO amount of rules can fix.

### The Recommended Sequence

1. **Week 1:** E-001 + E-002 + E-003 + E-005 + E-008 (brief verification + trailing void gate + element filter). ~50 lines of changes. Prevents ALL recurring critical defects.
2. **Week 2:** E-007 + E-011 + E-021 + E-022 (Tier 4 expansion + boundary template + threshold bands + common defects). ~50 lines. Fills the builder knowledge gap.
3. **Week 3:** E-012 + E-013 + E-023 (CSS patterns + pattern library + builder pre-question). ~150 lines. Gives the builder procedural knowledge and creative direction.
4. **Week 4:** E-009 (automated REFINE cycle). ~50 lines. Closes the feedback loop.

**Projected PA-05 after all 4 weeks: 3.5-3.8/4** (from current 3.0/4 baseline).

---

## 10. QUALITY CEILING ASSESSMENT

### 10.1 Current Architecture Ceiling

**Maximum achievable PA-05 with current architecture (no changes): ~3.2/4**

The current architecture hits a ceiling because:
- Brief assembler produces sub-threshold RGB deltas with no self-verification
- Builder has zero procedural knowledge of what quality CSS looks like
- No REFINE cycle to fix discovered defects
- Measurement system cannot detect the experiential gap between 3/4 and 4/4
- Builder has no creative north star beyond the brief

### 10.2 Ceiling with Recommended BLOCKING + SIGNIFICANT Changes

**Maximum achievable PA-05 with Tier 1+2 enrichments: ~3.5/4**

These changes address:
- All perception gate failure modes (RGB deltas, trailing voids)
- Builder knowledge gap (patterns, threshold bands, common defects)
- Measurement accuracy (experiential PA questions, Quality Journal)
- Feedback loop (automated REFINE cycle)

### 10.3 Ceiling with ALL Recommended Changes

**Maximum achievable PA-05 with all enrichments: ~3.8/4**

The remaining 0.2 gap to 4.0 consists of:
- Content-form isomorphism (requires deep content understanding pipeline cannot currently provide)
- Signature visual / poster frame (requires visual invention beyond current capability)
- Emotional modulation (may require multi-pass or human-in-the-loop)

### 10.4 Barriers Ranked by Difficulty

| Rank | Barrier | Difficulty | What It Blocks |
|------|---------|------------|----------------|
| 1 | **Content-form isomorphism** | VERY HIGH | 4/4 DESIGNED sub-score |
| 2 | **Visual invention** | HIGH | PA-67 (novelty), poster frame |
| 3 | **Emotional modulation over scroll** | HIGH | PA-80, QJ-01, QJ-04 |
| 4 | **Builder creative direction** | MEDIUM (addressable via pre-question) | All creative dimensions |
| 5 | **Perception threshold compliance** | LOW (addressable via brief verification) | GR-11, GR-14 gates |
| 6 | **Trailing void / construction defects** | LOW (addressable via gates) | POLISHED sub-score |
| 7 | **Measurement blind spots** | MEDIUM (addressable via new questions) | Score accuracy |

### 10.5 The Hard Truth About 4/4

From the synthesis of all 30 analyses, a 4/4 DESIGNED page requires something the pipeline fundamentally struggles to produce: a CREATIVE RESPONSE to specific content that could not have been predetermined by rules. The pipeline excels at applying rules. It cannot generate the insight "this article about software-as-colony deserves a design where the visual density literally reproduces colony growth patterns."

The pipeline's realistic ceiling is **3.5-3.8/4** with all recommended changes. Reaching 4/4 likely requires either:
- An Opus builder with exceptional creative prompt + long reference context + multi-pass refinement
- A human designer making the key creative decisions, with the pipeline executing them
- A fundamentally different architecture (template-driven start where builder focuses on composition, not construction)

---

## 11. OPEN QUESTIONS

Even after 30 analysis files, these questions remain unanswered:

### 11.1 About the Pipeline

1. **Does the world-description framing actually work on LLMs?** (AR-35) — The reframing is a psychological trick designed for humans. No evidence it changes LLM builder behavior vs. direct prohibition. Experiment needed.

2. **What is the optimal brief length?** (AR-38) — Current runs produce 174-line briefs vs. targets of 93-165 lines. No A/B test has compared brief lengths. The brief could be over-specified OR under-specified.

3. **Does single-pass produce worse quality than multi-pass?** (AR-37) — Pipeline declared single-pass default without comparative evidence. 3-pass might dramatically improve quality, or waste tokens.

4. **Is the pipeline better than nothing?** (AR-12) — A skilled Opus agent with soul constraints + CD-006 reference might match pipeline output. The 885-item infrastructure might be overhead for a model that already has good taste.

5. **Why does the builder create trailing voids?** (E05-01) — Recurring across ALL builds. Root cause not confirmed. Could be min-height, could be margin collapse, could be body sizing. No one has inspected the CSS.

6. **Where does the cold blue rgb(74,144,217) come from?** (A-06) — No such value in the CSS source. Browser default? Link color? CSS specificity override? Mystery unresolved.

### 11.2 About Quality Measurement

7. **Can PA-05 be Goodharted?** (MM-06) — If a sophisticated builder can pass all 65 questions while being mediocre, the entire measurement system is compromised. Experiment 3 tests this.

8. **Does Opus-judging-Opus inflate scores?** (AR adversarial) — Model evaluation bias is unquantified. Cross-model evaluation experiment needed.

9. **What does a human professional think?** (MM-17) — We have never compared pipeline verdicts to professional human judgment. The ultimate ground truth is unmeasured.

10. **Is binary format losing critical information?** (MM-01) — Quality Journal hypothesis: degree information exists but binary format discards it. Experiment 2 tests this.

### 11.3 About Quality Itself

11. **Is 4/4 DESIGNED achievable by pipeline at all?** — The analysis suggests a structural ceiling at 3.5-3.8. Content-form isomorphism may require human creative insight.

12. **Is the B+ ceiling a pipeline problem or an LLM problem?** — If the best Opus agent with unlimited context and no pipeline still produces B+, the problem is model capability, not pipeline design.

13. **What would the content AUTHOR think?** — Yegge's voice is punk/swagger. The design is business casual. Would Yegge say "this captures my energy" or "this domesticates my voice"? We have never asked.

14. **Is "more mechanisms" actually better?** — The adversarial review challenges the entire mechanism-count paradigm. A masterful page with 6 mechanisms might be better than 18 deployed to pass a gate. Quality may live in the RATIO of complexity to content need, not absolute complexity.

15. **What does the READER experience?** — All measurement is proxy. We measure what auditors (LLM agents viewing screenshots) report. We have never observed actual human reading behavior: scroll speed, pauses, re-reads, sharing, bookmarking, returning.

---

## APPENDIX A: ENRICHMENT INDEX BY TARGET ARTIFACT

| Artifact | Enrichment IDs | Count |
|----------|---------------|-------|
| `artifact-gate-runner.md` | E-003, E-005, E-019, E-020, E-025, E-027, E-047, E-049, E-052, E-078, E-083, E-098, E-119, E-120, E-121, E-122, E-123, E-124, E-156, E-157, E-171 | 21 |
| `artifact-pa-protocol.md` | E-014, E-035, E-054, E-055, E-056, E-057, E-070, E-071, E-072, E-073, E-082, E-095, E-096, E-097, E-143, E-144, E-145, E-146, E-147, E-159, E-160, E-161, E-162, E-174, E-175, E-176, E-177, E-178, E-179, E-180, E-181, E-182 | 32 |
| `artifact-builder-recipe.md` | E-010, E-017, E-022, E-023, E-024, E-029, E-033, E-037, E-038, E-039, E-042, E-046, E-061, E-062, E-063, E-077, E-085, E-086, E-088, E-090, E-091, E-092, E-093, E-094, E-105, E-111, E-114, E-115, E-116, E-117, E-118, E-136, E-142, E-152, E-153, E-154, E-168, E-183 | 38 |
| `artifact-tc-brief-template.md` | E-002, E-007, E-008, E-011, E-013, E-015, E-016, E-018, E-028, E-031, E-032, E-034, E-036, E-040, E-041, E-043, E-058, E-104, E-132, E-150, E-151, E-171 | 22 |
| `artifact-orchestrator.md` | E-001, E-006, E-009, E-029, E-044, E-048, E-051, E-068, E-101, E-121, E-122, E-129, E-130, E-131, E-137, E-169 | 16 |
| `artifact-routing.md` | E-001, E-059, E-060, E-064, E-065, E-066, E-067, E-080, E-081, E-084, E-099, E-100, E-127, E-134, E-135, E-141, E-148, E-149 | 18 |
| `artifact-value-tables.md` | E-026, E-110, E-166 | 3 |
| `artifact-worked-examples.md` | E-106, E-107, E-108, E-109, E-167, E-172 | 6 |
| `artifact-identity-perception.md` | E-004, E-053 | 2 |
| `MANIFEST.md` | E-006, E-045, E-056, E-068, E-101, E-122, E-125 | 7 |
| `SKILL.md` | E-102, E-103 | 2 |
| New artifacts | E-012 (css-patterns.md), E-107, E-108 (worked examples), E-126 (orchestrator digest) | 4 |

---

## APPENDIX B: CONVERGENCE MAP — ENRICHMENTS APPEARING IN 3+ SOURCES

| Enrichment Theme | Sources | Convergence Count |
|-----------------|---------|-------------------|
| Trailing void detection | 03, 05, 09, 13, 18 + 9/9 auditors | **6+** |
| Zone background delta verification | 02, 04, 05, 09, 15, 18 + compliance | **7+** |
| Zone 4 monotony / structural echo | 03, 09, 12, 13, 16 | **5** |
| Builder threshold awareness | 10, 13, 18 | **3** |
| Metaphor persistence in later zones | 05, 07, 09, 16 | **4** |
| Experiential PA questions needed | 06, 12, 14, 17 | **4** |
| Concept naming for custom properties | 01, 04, 15 | **3** |
| Responsive breakpoint guidance | 03, 09, 18 | **3** |
| Builder creative north star question | 13, 16 | **2** |
| Content-form isomorphism gap | 06, 13, 16 | **3** |
| Auditor diversity needed | 13, 17 | **2** |
| Binary measurement loses degree info | 12, 17 | **2** |
| Tier 4 CSS technique deficit | 10, 18, compliance | **3** |
| Multi-coherence boundary template | 10, 18 | **2** |
| Deliberate plainness instruction | 06, 07 | **2** |

---

## APPENDIX C: STATISTICS

| Metric | Value |
|--------|-------|
| Source analysis files | 30 |
| Extraction files synthesized | 4 (3,137 lines) |
| Verdict baseline | PA-05 3/4 COMPOSED, Tier 5 6/9 |
| Total raw enrichment recommendations | ~268 |
| After de-duplication | 183 unique enrichments |
| BLOCKING enrichments | 10 |
| SIGNIFICANT enrichments | 20 |
| MODERATE enrichments | 44 |
| NICE-TO-HAVE enrichments | 109 |
| New PA questions proposed | 46 (binary) + 10 (Quality Journal) |
| PA questions to retire | 4 |
| PA questions to merge | 2 pairs |
| PA questions to revise | 2 |
| New gates proposed | 9 |
| Existing gates to modify | 6 |
| Gates needing JS implementation | 5 |
| Experiments proposed | 12 |
| Artifacts requiring changes | 11 of 11 pipeline artifacts + SKILL.md + MANIFEST.md |
| Most-changed artifact | `artifact-builder-recipe.md` (38 enrichments) |
| Projected PA-05 after BLOCKING fixes | 3.2-3.3/4 |
| Projected PA-05 after BLOCKING + SIGNIFICANT | 3.5/4 |
| Projected PA-05 after ALL enrichments | 3.8/4 |
| Estimated pipeline quality ceiling | 3.8/4 (structural limit: content-form isomorphism) |

---

*End of master synthesis. 183 enrichments enumerated from 30 analysis files. Every enrichment from every extraction is represented. This document drives all future pipeline work.*
