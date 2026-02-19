# REVISED PV2 ARCHITECTURE — Post-Investigation Design

**Author:** PV2 Architecture Revision Agent (Opus 4.6)
**Task:** #67
**Date:** 2026-02-19
**Source Evidence:** 30 investigation reports (Reports 01-30), 6 design reports (15-20), 2 integration studies (21-22), 4 skill audits (23-26), 4 metacognitive analyses (27-29, 41), 1 adversarial challenge (30), master synthesis (14-MASTER-SYNTHESIS.md), original PV2 diagram (977 lines)

---

## EXECUTIVE SUMMARY

The original PV2 architecture (977-line diagram) correctly identified the pipeline shape: TC planner -> handoff gate -> Opus builder -> dual verification -> fix loop. The 30-report investigation validated this shape but revealed **7 structural gaps** that produce STYLED (2-3/4) when the pipeline needs to reliably produce COMPOSED (3/4) and occasionally reach DESIGNED (4/4).

This document specifies the revised PV2 architecture incorporating all investigation findings. Changes are additive (new artifacts, enriched handoffs) not subtractive (the pipeline shape is unchanged).

### The 7 Structural Gaps (and Their Fixes)

| # | Gap | Root Cause | Fix | Report Source |
|---|-----|-----------|------|---------------|
| G-1 | TC outputs a PLAN; builder needs a RECIPE | Plan-recipe format mismatch | TC generates Build Recipe Instance (Layer B), not just build plan | #17, #22 |
| G-2 | Multi-coherence is conceptual, never operational | No transition table at handoff | NEW: Transition Table as mandatory TC output | #12, #18 |
| G-3 | Builder gets 6 files but zero compositional WHY | Telescope missing from builder input | Telescope comments embedded in Build Recipe Instance | #18, #22 |
| G-4 | Gates check thresholds, not phase completion | Text-based phase enforcement | Hybrid enforcement: artifact chain + Playwright gates + YAML schema | #15, #19 |
| G-5 | Tier routing creates ~145 lines of dead code | ALWAYS FLAGSHIP makes tiers irrelevant | Remove all tier-conditional logic; Addition Test is only escape valve | #23, #41 |
| G-6 | TC Phases 4-5 duplicate builder work | TC tries to be planner AND build specifier | TC scope narrowed to Phases 0-3.5 only | #23, #25 |
| G-7 | Skills don't invoke each other | Orchestrator manages all invocations | Orchestrator remains central but skill outputs STRUCTURALLY couple | #25 |

---

## 1. REVISED PIPELINE OVERVIEW

```
/build-page content.md
       |
       v
WAVE 0: TC PLANNER (Opus, ~30-60 min)
  Phases 0-3.5: Content -> Tensions -> Metaphor -> Build Recipe Instance
  NEW OUTPUT: _build-recipe.md (Layer B, ~200-400 lines)
  CONTAINS: Zone specs, transition table, mechanism deployment, telescope comments
       |
       v
WAVE 0.5: METAPHOR VALIDATION (Fresh-Eyes Opus, ~5-10 min)
  Binary: STRUCTURAL or ANNOUNCED?
  UNCHANGED from original PV2
       |
       v
WAVE 0.9: ENRICHED HANDOFF GATE (Binary, ~1-2 min)
  EXPANDED: 8 checks (was 5) including transition table validation
       |
       v
WAVE 1: OPUS BUILDER (~90-150 min)
  NEW INPUT: Build Recipe Instance (Layer B) merged with Recipe Template (Layer A)
  9-PHASE execution with artifact dependency chain
  NEW: Inter-phase micro-gates (Playwright, 4 gates between phases)
       |
       v
WAVE 2: DUAL VERIFICATION (~30-45 min)
  Layer 1: 14 programmatic gates (was 12, +SC-13 multi-coherence, +SC-14 component count)
  Layer 2: 9 fresh-eyes PA auditors (UNCHANGED)
       |
       v
WAVE 3: FIX INTEGRATION (max 3 cycles)
  UNCHANGED from original PV2
       |
       v
OUTPUT: output.html + _pa-report.md + _build-log.md
```

---

## 2. WAVE 0: REVISED TC PLANNER

### 2.1 Scope Narrowing (from Report #23)

The TC skill currently spans 1,933 lines across 3 roles: content analyst, compositional planner, and build specifier. Under the revised architecture, TC's scope narrows to **2 roles only**:

| Role | Phases | Lines (est.) | What It Produces |
|------|--------|-------------|-----------------|
| Content Analyst | 0-1 | ~200 | Section inventory, axis questioning, reader needs |
| Compositional Planner | 2-3.5 | ~450 | Tension derivation, metaphor collapse, build recipe instance |

Phase 4+ (mechanism deployment, CSS lookup tables, coherence checking, component inventory, output templates) is **REMOVED from TC** and relocated to:
- `operational-recipe.md` (Layer A template) for universal recipe phases
- `mechanism-catalog.md` for mechanism reference
- `perception-thresholds.md` for guardrail values
- `_build-recipe.md` (Layer B instance) for content-specific deployment

**Lines removed from TC:** ~461 (OPERATIONAL content that duplicates builder inputs)
**Lines removed for ALWAYS FLAGSHIP:** ~145 (tier-conditional routing, see Report #41)
**Estimated revised TC:** ~650 lines (down from 1,933)

### 2.2 ALWAYS FLAGSHIP Simplification (from Report #41)

All tier-conditional routing is removed. Specifically:

- **Step 0D tier classification table** (78 lines) -> replaced with 5-line universal routing: "All content runs full pipeline. Addition Test is the only escape valve."
- **Middle-tier skip logic** (CRESCENDO/F-PATTERN/BENTO/PULSE routing) -> density patterns relocate to Phase 4 as deployment OPTIONS within the Build Recipe Instance, not as tier shortcuts
- **Phase 4 deployment levels** (Floor/Middle/Ceiling/Flagship counts) -> single rule: "Deploy across all 5 categories, S:1+/T:1+/M:1+/B:1+/R:1+, natural landing 12-18 mechanisms"
- **Fractal tier-calibrated requirements** -> "5 scales required (Navigation/Page/Section/Component/Character)"
- **Landmark tier-calibrated** -> "Header + main + footer + transition grammar ALL required"
- **Tokenization self-check** -> MANDATORY at 80%+ compliance (was OPTIONAL)

**What survives:** The Addition Test (Phase 2 binary gate). Low-tension content (API docs, changelogs) fast-exits to FLAT mode: zones + recipe, no metaphor. ALWAYS FLAGSHIP means "maximum intensity when running," not "force metaphor on everything."

### 2.3 NEW: Build Recipe Instance (Layer B) as TC Output

The single most important change in the revised PV2. Instead of outputting a generic `_build-plan.md`, TC now generates a **Build Recipe Instance** (`_build-recipe.md`) that structurally mirrors the 9-phase recipe template.

**Why this matters (from Reports #17 and #22):**
- The Middle experiment's recipe was a SINGLE document with inline compositional intelligence: "For Section 1, deploy sparse background #FEF9F5, 64px padding." The builder executed it directly.
- The Flagship builder received TWO documents (plan + recipe) requiring MENTAL MERGE. That merge is where compression happens, and compression is where quality dies.
- The remediation spec (1,025 lines) succeeded because TELESCOPE comments appeared DIRECTLY ABOVE the CSS rules they governed. The builder read WHY before reading WHAT.

**Structure of Build Recipe Instance:**

```markdown
# Build Recipe Instance: [Content Title]
# Generated by TC Planner | Date

## METAPHOR
[Structural metaphor + 3-5 isomorphisms with CSS forms]
[Or: FLAT MODE -- no metaphor, zones + density patterns only]

## ZONE ARCHITECTURE (Phase 0/3 input)
Zone 1: [Section range] | bg: #HEX | padding: Npx | semantic: [role]
Zone 2: [Section range] | bg: #HEX | padding: Npx | semantic: [role]
...
RGB deltas: Z1->Z2: [N] (PASS/FAIL) | Z2->Z3: [N] (PASS/FAIL) | ...

## TRANSITION TABLE (Phase 4/8 input) [NEW -- see Section 3]
| Boundary | bg delta | font-size | font-weight | letter-spacing | border-left | margin | type |
|----------|----------|-----------|-------------|---------------|-------------|--------|------|
| Z1->Z2   | +20 RGB  | same      | same        | same          | ADD 3px     | same   | SMOOTH |
| Z2->Z3   | -15 RGB  | -1px      | +200        | -0.01em       | REMOVE      | -4px   | BREATHING |
...

## MECHANISM DEPLOYMENT (Phase 6 input)
1. [Mechanism name] (#N) -> Apply: [specific CSS instruction]
   /* TELESCOPE: [WHY this mechanism serves this content] */
2. ...
[5-8 mechanisms selected, per-category minimums met]

## COMPONENT ADOPTION (Phase 1 input)
[Specific library classes to adopt for THIS content]
.callout .callout--info -> [section], [N instances], [semantic role]
.callout .callout--gotcha -> [section], [N instances], [semantic role]
...
[Target: >= 10/26 families]

## BUILDER WARNINGS
W-1: [Content-specific gotcha]
W-2: ...
```

**Key property:** The Build Recipe Instance is NOT a plan. It is an OPERATIONAL SPECIFICATION with the same structure as the recipe phases. Each section maps directly to specific recipe phases, eliminating the mental merge problem.

---

## 3. THE TRANSITION TABLE: The Key New Artifact

### 3.1 What It Is (from Reports #12 and #18)

The Transition Table is the operational encoding of multi-coherence. It specifies EXACTLY which CSS channels shift at every zone/section boundary, by how much, and in what direction.

Multi-coherence -- the property that separates DESIGNED from STYLED -- requires >= 3 channels shifting SIMULTANEOUSLY at each boundary. Without the Transition Table, this requirement is a conceptual aspiration ("channels should shift together"). With it, the requirement becomes a cell-by-cell specification.

### 3.2 Structure

```
TRANSITION TABLE — [Content Title]

6 Channels: Chromatic (C) | Typographic (T) | Spatial (S) | Structural (St) | Behavioral (B) | Material (M)

| Boundary | C: bg delta | T: font-size | T: letter-sp | St: border | S: padding | S: margin | Shifts | Type |
|----------|-------------|-------------|-------------|-----------|-----------|----------|--------|------|
| Z1->Z2   | #FEF9F5->#F0EBE3 (+15) | 18px->16px | 0.01->0 | none->3px | 64->32 | same | 4/6 | SMOOTH |
| Z2->Z3   | #F0EBE3->#E6DFD4 (+12) | same | same | 3px->4px red | 32->24 | 24->16 | 4/6 | BRIDGE |
| Z3->Z4   | #E6DFD4->#FEF9F5 (-20) | 16px->18px | 0->0.01 | 4px->none | 24->48 | 16->24 | 5/6 | BREATHING |
```

### 3.3 Where It Lives in the Pipeline

The Transition Table appears at THREE points:

1. **TC OUTPUT (Wave 0):** TC generates the Transition Table as part of `_build-recipe.md`. The planner decides WHICH channels shift at each boundary based on the metaphor/content structure.

2. **BUILDER INPUT (Wave 1):** The builder reads the Transition Table and uses it as a SPECIFICATION for Phases 3-6. At each phase, the builder applies the channel changes specified in the table.

3. **VERIFICATION (Wave 2):** The cascade value table (Phase 8 + programmatic gates) is the Transition Table's MEASURED counterpart. Gate SC-13 programmatically verifies that >= 3 channels actually shifted at each boundary by comparing computed styles.

### 3.4 How TC Generates It

TC Phase 3.5 (Lock-In) currently validates metaphor commitment. Under the revised architecture, TC generates the Transition Table IMMEDIATELY AFTER metaphor lock-in:

1. TC Phase 3: Metaphor collapse (unchanged)
2. TC Phase 3.5: Metaphor lock-in gate (unchanged)
3. **TC Phase 3.6 [NEW]: Transition Table generation**
   - For each zone boundary, TC decides which channels shift based on metaphor semantics
   - Applies directional consistency (C-1 coherence rule: if metaphor implies "descent," all channels darken/compress/tighten together)
   - Fills in specific values using perception thresholds as minimums (>= 15 RGB chromatic, >= 2px typographic, >= 0.03em letter-spacing)
   - Marks transition TYPE per boundary: SMOOTH (same-axis continuation), BRIDGE (decorative separator), BREATHING (major semantic shift)
   - Ensures >= 3 channels shift at every boundary

### 3.5 Handoff Gate Validation

The enriched handoff gate (Wave 0.9) validates the Transition Table:

| Check | Threshold | Action on Fail |
|-------|-----------|---------------|
| Table has >= (zone_count - 1) rows | Binary | Return to TC |
| Every row has >= 3 channels marked as shifting | Binary | Return to TC |
| All chromatic deltas >= 15 RGB | Binary | Return to TC |
| All typographic deltas >= 2px (where shifting) | Binary | Return to TC |
| >= 3 transition TYPES used across all boundaries | Binary | Return to TC |

---

## 4. WAVE 0.9: ENRICHED HANDOFF GATE

### 4.1 Expanded from 5 to 8 Checks

Original PV2 had 5 handoff checks. The revised architecture adds 3 checks based on investigation findings:

| # | Check | Threshold | Source |
|---|-------|-----------|--------|
| H-1 | Zone count | 2-5 | Original |
| H-2 | BG colors >= 15 RGB delta | Adjacent zones | Original |
| H-3 | >= 2 grid layouts planned | Binary | Original |
| H-4 | Per-category mechanism minimums | S:1+, T:1+, M:1+, B:1+, R:1+ | Original |
| H-5 | >= 3 transition types | SMOOTH/BRIDGE/BREATHING | Original |
| **H-6** | **Transition Table present and valid** | **>= 3 channels shift per boundary** | **NEW from #12** |
| **H-7** | **Component adoption list present** | **>= 10 families identified** | **NEW from #18** |
| **H-8** | **Telescope comments present** | **>= 1 per mechanism deployment** | **NEW from #22** |

### 4.2 Validation Method

The handoff gate remains orchestrator-executed text validation (no Playwright needed). The enriched checks parse structured sections of `_build-recipe.md`:

- H-6: Parse TRANSITION TABLE section, count channel-shift cells per row
- H-7: Parse COMPONENT ADOPTION section, count unique families
- H-8: Parse MECHANISM DEPLOYMENT section, check for `/* TELESCOPE: */` comments

---

## 5. WAVE 1: REVISED BUILDER EXECUTION

### 5.1 Two-Layer Recipe Architecture (from Report #17)

The builder no longer reads a static recipe + separate plan. Instead:

**Layer A: Recipe Template** (`operational-recipe.md`, ~300 lines, PERMANENT)
- Phase ordering (0-8, immutable)
- Perception thresholds (universal)
- Soul constraints (universal)
- Accessibility requirements (universal)
- Self-check question templates per phase
- Cascade value table format (Phase 8)

**Layer B: Build Recipe Instance** (`_build-recipe.md`, ~200-400 lines, GENERATED per build by TC)
- Per-zone specification with telescope comments
- Transition Table (channel shifts at every boundary)
- Per-section mechanism assignment with WHY
- Component adoption list with section mapping
- Builder warnings

**The builder's mental model:**
- Layer A says "Phase 3: Apply zone backgrounds. Perception threshold: >= 15 RGB delta. Self-check: Can you SEE zone boundaries?"
- Layer B says "Phase 3: Zone 1 = #FEF9F5 (warm cream, introduction). Zone 2 = #F0EBE3 (earthy tan, -14/-14/-18 from Z1). /* TELESCOPE: Warm-cool-warm arc mirrors the content's journey from open inquiry to analytical depth to resolved synthesis. */"
- The builder applies Layer B's specifics using Layer A's process structure

### 5.2 Builder Input Files (Revised)

| # | File | Lines (est.) | What It Provides |
|---|------|-------------|-----------------|
| 1 | `operational-recipe.md` (Layer A) | ~300 | Process structure, thresholds, self-checks |
| 2 | `_build-recipe.md` (Layer B) | ~200-400 | Content-specific specs, transition table, telescope |
| 3 | `tokens.css` | ~174 | Design system tokens |
| 4 | `prohibitions.md` | ~353 | Soul constraints |
| 5 | `merged-components.css` | ~800 | Component library |
| 6 | `mechanism-catalog.md` | ~1,200 | Full mechanism reference |

**Total builder visibility:** ~1,800-2,400 lines (up from ~1,150 in original PV2)

**Key difference from original PV2:** Files 1 and 2 are now STRUCTURALLY COUPLED. Layer B's sections map directly to Layer A's phases. The builder reads them as a single integrated specification, not two documents requiring mental merge.

### 5.3 Telescope + Microscope Pattern (from Report #22)

The remediation's success came from interleaving three document types:
- **TELESCOPE** (declarative, compositional): WHY each phase matters
- **RECIPE** (imperative, sequenced): WHAT to do, in order
- **MICROSCOPE** (specific, verifiable): EXACT CSS values

The Build Recipe Instance (Layer B) embeds telescope comments at every specification point. The Recipe Template (Layer A) provides recipe structure and microscope thresholds. Together they reproduce the remediation's interleaving pattern:

```
LAYER A (Recipe Template):
  Phase 3: Zone Backgrounds
  Apply backgrounds per zone from build recipe instance.
  Threshold: >= 15 RGB delta between adjacent zones.
  Self-check: "Can you SEE the zone boundaries without borders?"

LAYER B (Build Recipe Instance):
  ## ZONE ARCHITECTURE
  Zone 1 (S1-S3): #FEF9F5 | padding: 64px 32px
  /* TELESCOPE: Surface layer -- accessible, inviting, sparse.
     Content enters as open inquiry. Visual register: expansive. */
  Zone 2 (S4-S8): #F0EBE3 | padding: 32px 32px | delta from Z1: -14/-14/-18 = PASS
  /* TELESCOPE: Sediment layer -- consolidated, dense, analytical.
     Content shifts to evidence chains. Visual register: compressed. */
```

### 5.4 Inter-Phase Micro-Gates (from Report #19)

The investigation found that text-based phase instructions achieve ~0% compliance for phase ordering. The revised architecture adds 4 lightweight micro-gates between critical build phases:

| Gate | After Phase | Checks | Method |
|------|------------|--------|--------|
| MG-1 | Phase 1 (HTML) | Semantic elements present, >= 3 ARIA landmarks, >= 10 component classes | DOM inspection |
| MG-2 | Phase 3 (Backgrounds) | Zone backgrounds applied, >= 15 RGB delta measured | Playwright getComputedStyle |
| MG-3 | Phase 4 (Borders) | >= 1 border-left present, >= 3 transition types | DOM + Playwright |
| MG-4 | Phase 5 (Typography) | >= 2px font-size delta between zones, >= 3 distinct sizes | Playwright getComputedStyle |

These are LIGHTWEIGHT checks (~30 sec each) inserted between phases. They do NOT replace the full 12-gate Wave 2 verification -- they prevent the builder from proceeding on a fundamentally broken foundation.

**Implementation:** The orchestrator runs micro-gates by saving the builder's intermediate HTML and running a focused Playwright check. If a micro-gate fails, the builder receives a specific fix instruction (e.g., "Zone 1 and Zone 2 backgrounds differ by only 6 RGB points. Increase Zone 2 to at least #F0EBE3 (-15 from Zone 1)").

**Overhead:** ~2 min total (4 gates x 30 sec). Prevents wasted build time on doomed foundations.

### 5.5 Guardrail-Playbook Pairing (from Report #20)

The original PV2 recipe inverted the guardrail:playbook ratio from 7.9:1 to ~0.5:1. The revised architecture makes this systematic through 42 guardrail-playbook pairs embedded in the recipe template.

Format: Every prohibition has a paired concrete action with exact CSS values.

Example:
```
GUARDRAIL: Don't use letter-spacing below 0.03em (invisible).
PLAYBOOK:  Use ONLY these values:
           0em      -- body text (default)
           0.03em   -- callout labels, secondary headings
           0.06em   -- subheadings, nav items
           0.1em    -- meta labels, uppercase text
```

The 42 pairs cover perception (12 pairs), soul constraints (8 pairs), accessibility (6 pairs), typography (6 pairs), spatial (5 pairs), and structural (5 pairs).

---

## 6. WAVE 2: REVISED VERIFICATION

### 6.1 Expanded Programmatic Gates (14, was 12)

| Gate | What It Checks | Threshold | Status |
|------|---------------|-----------|--------|
| SC-01 | Container width | 940-960px | Original |
| SC-02 | Soul properties | border-radius: 0, box-shadow: none | Original |
| SC-03 | Font trinity | Only 3 allowed fonts | Original |
| SC-04 | Warm palette | R >= G >= B for all colors | Original |
| SC-05 | No pure extremes | No #000 or #FFF | Original |
| SC-06 | ARIA landmarks | >= 3 | Original |
| SC-07 | Skip link | Present | Original |
| SC-08 | Component library | Library classes in use | Original |
| SC-09 | Background delta | >= 15 RGB adjacent zones | Original |
| SC-10 | Stacked gap | <= 108px total at boundaries | Original |
| SC-11 | Font-size zones | >= 2px delta between zones | Original |
| SC-12 | Zone count | 2-5 zones | Original |
| **SC-13** | **Multi-coherence** | **>= 3 channels shift at each boundary** | **NEW** |
| **SC-14** | **Component adoption** | **>= 10 component family classes** | **NEW** |

### 6.2 SC-13: Multi-Coherence Gate (from Reports #12 and #19)

SC-13 is the most architecturally significant new gate. It programmatically verifies that >= 3 CSS channels shift at every zone boundary.

**Implementation:**
1. Identify zone boundaries from `data-zone` attributes
2. At each boundary, measure 6 channels via getComputedStyle:
   - Chromatic: background-color
   - Typographic: font-size + letter-spacing
   - Spatial: padding + margin
   - Structural: border-left
   - Behavioral: (not measurable via static DOM -- skip)
   - Material: (not measurable via static DOM -- skip)
3. Count channels where measured values CHANGE between last element of zone N and first element of zone N+1
4. Require >= 3 out of 4 measurable channels to shift

**Limitation (from Report #19):** SC-13 can count channel CHANGES but cannot assess whether they serve the SAME semantic direction. A background that lightens while typography compresses (contradictory directions) would pass SC-13 but fail perceptual coherence. This is the ~40% gap where perceptual audit remains irreplaceable.

### 6.3 Perceptual Audit (Unchanged)

Mode 4 with 9 fresh-eyes Opus auditors remains unchanged. The screenshot pre-capture pattern, parallel auditor execution, and PA weaver synthesis are validated and unmodified.

---

## 7. REVISED FILE ARCHITECTURE

### 7.1 Files to Write (NEW or REWRITTEN)

| File | Lines (est.) | Status |
|------|-------------|--------|
| `~/.claude/skills/build-page/SKILL.md` | ~205 | NEW: orchestrator |
| `design-system/compositional-core/operational-recipe.md` | ~300 | REWRITTEN: Layer A template only (was ~650 static) |
| `design-system/compositional-core/perception-thresholds.md` | ~80 | NEW: canonical thresholds |
| `design-system/compositional-core/gate-runner.js` | ~400 | NEW: 14 gates + 4 micro-gates (was ~300 for 12 gates) |
| `design-system/compositional-core/transition-table-template.md` | ~40 | NEW: template for TC to fill |
| **Total new/rewritten** | **~1,025** | |

### 7.2 Files to Edit (EXISTING)

| File | Edit Description | Lines Changed |
|------|-----------------|---------------|
| TC SKILL.md | Remove Phases 4-5, remove tier routing, add Phase 3.6 (Transition Table generation), add Build Recipe Instance output format | ~-600, +150 = net -450 |
| PA SKILL.md | Remove tier-conditional framing (20 lines), make all Ceiling+ questions universal | -20 |
| `design-system/CLAUDE.md` | Update pipeline description, remove tier routing references | ~-15 |
| `design-system/compositional-core/CLAUDE.md` | Update agent routing for revised pipeline | ~-10 |
| `semantic-rules.md` | S-09 stacking at 108px total | ~+5 |
| `mechanism-catalog.md` | Add transition table generation guidance per mechanism | ~+30 |

### 7.3 Estimated Totals

| Category | Lines |
|----------|-------|
| New files | ~1,025 |
| Edits (additions) | ~185 |
| Edits (deletions) | ~645 |
| Net new permanent lines | ~565 |

This is significantly less than the original PV2 estimate of ~1,605 lines because:
- The operational recipe shrinks from ~650 to ~300 (Layer B is generated per-build, not permanent)
- TC shrinks from 1,933 to ~650 (removing build-specifier role)
- Gate runner grows from ~300 to ~400 (adding micro-gates and SC-13/14)

---

## 8. WHAT CHANGED VS ORIGINAL PV2

### 8.1 Structural Changes

| Dimension | Original PV2 | Revised PV2 | Evidence |
|-----------|-------------|-------------|----------|
| TC output format | `_build-plan.md` (planning document) | `_build-recipe.md` (Layer B recipe instance) | Reports #17, #22: plan requires mental merge; recipe instance is directly executable |
| TC scope | Phases 0-5 (1,933 lines) | Phases 0-3.6 (~650 lines) | Report #23: 461 lines of OPERATIONAL content duplicates builder inputs |
| New TC phase | None | Phase 3.6: Transition Table generation | Reports #12, #18: multi-coherence needs operational specification |
| Recipe architecture | Static ~650 lines | Layer A template (~300) + Layer B instance (~200-400, generated) | Report #17: recipe must contain content-specific compositional intelligence |
| Handoff gate | 5 checks | 8 checks (+ transition table, component list, telescope comments) | Reports #12, #18, #22: enriched gate prevents more downstream failures |
| Build phases | 9 phases, text-ordered | 9 phases + 4 inter-phase micro-gates | Report #19: programmatic phase enforcement prevents foundation failures |
| Programmatic gates | 12 (SC-01 to SC-12) | 14 (+ SC-13 multi-coherence, SC-14 component adoption) | Reports #12, #19: multi-coherence is the DEFINING quality property |
| Tier routing | ALWAYS FLAGSHIP (no routing) | Same, but now CODIFIED: ~145 lines of dead tier code removed | Reports #23, #41: tier references are pure noise under ALWAYS FLAGSHIP |
| Builder input | Plan + recipe + 4 ref files (~1,150 lines) | Recipe template + recipe instance + 4 ref files (~1,800-2,400 lines) | Report #18: 100% visibility > 13.4% visibility |

### 8.2 New Artifacts

| Artifact | Where | When Created | Purpose |
|----------|-------|-------------|---------|
| Transition Table | Inside `_build-recipe.md` (Layer B) | Per-build (TC Phase 3.6) | Operational multi-coherence specification |
| Build Recipe Instance | `_build-recipe.md` | Per-build (TC Phases 0-3.6) | Content-specific recipe with telescope comments |
| Inter-phase micro-gate results | Build log | Per-build (between Phases 1/3/4/5) | Prevent building on broken foundations |
| Guardrail-playbook pairs | Inside `operational-recipe.md` (Layer A) | Permanent | Every prohibition has a paired action with CSS |

### 8.3 Unchanged from Original PV2

These components are validated and unmodified:
- Pipeline shape (5 waves)
- Wave 0.5 fresh-eyes metaphor validation
- Wave 1 single Opus builder (not multiple agents)
- Wave 2 Layer 2: Mode 4 PA with 9 auditors + screenshot pre-capture
- Wave 3 fix loop (max 3 cycles, 2-PA re-check, escalation)
- Output format (3 files at deterministic paths)
- Fire-and-forget user model
- `tokens.css`, `prohibitions.md`, `merged-components.css` as builder inputs
- Addition Test as escape valve for low-tension content

---

## 9. ADDRESSING CD-006 AND THE RECIPE CEILING

### 9.1 The CD-006 Challenge (from Report #21)

CD-006 scored 39/40 without any PV2 infrastructure. Reverse engineering reveals 7 success factors:
1. Single Opus builder holding entire content-to-form mapping in working memory
2. Fractal self-similarity at all 5 scales (TOC mirrors page density arc)
3. 7 section transitions averaging 4.7 channel shifts each
4. 11 component types, 33 instances (exhaustive, content-matched)
5. Section-level compositional autonomy (each section = miniature design)
6. Drop caps at narrative-opening positions (character-level focal points)
7. Density arc as dramatic structure (4-act: Orient/Learn/Build/Ship)

**What the revised PV2 CAN encode:** Factors 1, 3, 4, and 6 are captured by the Transition Table, component adoption list, mechanism deployment, and recipe phases.

**What the revised PV2 CANNOT encode:** Factors 2, 5, and 7 are emergent compositional properties -- they arise from the builder's holistic vision, not from recipe steps. A recipe can say "design each zone as a compositional unit" but cannot specify the hundreds of micro-decisions that make each zone's internal structure cohere with the whole.

### 9.2 The Recipe Ceiling (from Reports #21 and #29)

The investigation confirms the recipe ceiling at 3/4 (COMPOSED). Getting from 3/4 to 4/4 (DESIGNED) requires compositional fluency that recipes fundamentally cannot encode. Eight reports flag this.

**The revised PV2 addresses the ceiling in three ways:**

1. **Transition Table raises the FLOOR.** Without operational multi-coherence, the floor is 1.5-2/4. With it, the floor is 2.5-3/4. The Transition Table converts the most impactful quality property from aspiration to specification.

2. **Telescope comments provide compositional REASONING.** The builder doesn't just know WHAT to build -- it knows WHY. This enables informed micro-decisions within recipe phases that push toward 4/4.

3. **The Addition Test + FLAT mode prevents forced complexity.** Simple content gets zones + recipe without metaphor, which is appropriate. Complex content gets full pipeline. The ceiling only matters for complex content, where the TC planner's metaphor provides the creative seed.

**Honest prediction:** The revised PV2 reliably produces 3/4 (COMPOSED). It occasionally produces 4/4 when:
- TC derives a strong STRUCTURAL metaphor (not announced)
- The content has genuine tension that maps to multiple CSS channels
- The Opus builder exercises compositional fluency within the recipe's structure

---

## 10. COMPLETE REVISED FLOW — BIRD'S EYE VIEW

```
/build-page content.md
       |
       v
WAVE 0: TC PLANNER (Opus, ~30-60 min)
  Phases 0-3.6
  READS: content.md, tokens.css, prohibitions.md
  Phase 0: Content structure analysis (zones, sections, topology)
  Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered)
  Phase 2: Tension derivation + Addition Test
    |-- NO TENSION --> FLAT MODE (zones + density patterns, skip metaphor)
    |-- TENSION EXISTS --> continue
  Phase 3: Metaphor collapse + candidate scoring + commitment
  Phase 3.5: Lock-in gate (binary: independent? structural? per-category?)
  Phase 3.6 [NEW]: Transition Table generation + Build Recipe Instance assembly
  OUTPUT: _build-recipe.md (Layer B, ~200-400 lines)
    Contains: zone specs, transition table, mechanism deployment,
    component adoption, telescope comments, builder warnings
       |
       v
WAVE 0.5: METAPHOR VALIDATION (Fresh-Eyes Opus, ~5-10 min)
  Reads ONLY metaphor description from _build-recipe.md
  Binary: STRUCTURAL (pass) or ANNOUNCED (fail -> TC revision or FLAT mode)
       |
       v
WAVE 0.9: ENRICHED HANDOFF GATE (~1-2 min)
  8 binary checks (ALL must PASS, any FAIL -> return to TC):
  H-1: Zone count 2-5
  H-2: BG >= 15 RGB delta between adjacent zones
  H-3: >= 2 grid layouts planned
  H-4: Per-category mechanisms: S:1+, T:1+, M:1+, B:1+, R:1+
  H-5: >= 3 transition types (SMOOTH/BRIDGE/BREATHING)
  H-6 [NEW]: Transition Table valid (>= 3 channels shift per boundary)
  H-7 [NEW]: Component adoption list (>= 10 families)
  H-8 [NEW]: Telescope comments present (>= 1 per mechanism)
       |
       v
WAVE 1: OPUS BUILDER (~90-150 min)
  READS: operational-recipe.md (Layer A, ~300 lines)
         _build-recipe.md (Layer B, ~200-400 lines)
         tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md

  Phase 0: Absorb build recipe, confirm zone-section mapping
  Phase 1: HTML skeleton (semantic, >= 10 component classes, >= 3 ARIA, skip link)
    --> MG-1: DOM inspection (landmarks, components) [~30 sec]
  Phase 2: CSS reset + soul + base typography
  Phase 3: Zone backgrounds (from Layer B zone specs)
    --> MG-2: Playwright getComputedStyle (bg delta >= 15 RGB) [~30 sec]
  Phase 4: Borders + dividers + transitions (from Layer B transition table)
    --> MG-3: DOM + Playwright (borders exist, 3 transition types) [~30 sec]
  Phase 5: Typography zones (display/body/detail arc)
    --> MG-4: Playwright getComputedStyle (font-size delta >= 2px) [~30 sec]
  Phase 6: Element-level richness (from Layer B mechanism deployment)
  Phase 7: Accessibility (skip link, ARIA, focus, reduced motion, responsive, print)
  Phase 8: Verification + cascade value table (measured CSS at every boundary)

  OUTPUT: output.html + cascade value table
       |
       v
WAVE 2: DUAL VERIFICATION (~30-45 min)
  Layer 1: 14 programmatic gates (Playwright + getComputedStyle)
    SC-01 through SC-12 (original)
    SC-13 [NEW]: Multi-coherence (>= 3 channels shift at each boundary)
    SC-14 [NEW]: Component adoption (>= 10 library classes)
    ALL BLOCKING. Any FAIL -> fix cycle.

  Layer 2: Mode 4 PA (9 fresh-eyes Opus auditors)
    Team lead pre-captures 36-102 screenshots
    9 auditors read ONLY screenshots, zero build context
    PA Weaver synthesizes reports, produces PA-05 score + top-3 issues
       |
       v
WAVE 3: FIX INTEGRATION (max 3 cycles, ~30-60 min)
  ALL PASS + PA-05 >= 3/4 --> SHIP
  GATES PASS + PA-05 < 3/4 --> FIX CYCLE (builder fixes top-3, 2-PA re-check)
  FAIL after 3 cycles --> ESCALATE TO USER
       |
       v
OUTPUT:
  path/to/output.html      (700-1500 lines CSS, 500-1000 lines HTML)
  path/to/_pa-report.md     (48 PA questions, PA-05 score, convergent findings)
  path/to/_build-log.md     (TC output, gate results, cascade table, timing)
```

---

## 11. RISKS AND OPEN QUESTIONS

### 11.1 Risks Inherited from Original PV2 (Unchanged)

| Risk | Status | Mitigation |
|------|--------|-----------|
| Recipe ceiling at 3/4 | CONFIRMED by investigation | Transition Table + telescope comments raise effective ceiling to occasional 4/4 |
| Content generalizability (N=2) | UNCHANGED | Build on 5 content types, track PA-05 per type |
| CD-006 contradicts recipe thesis | DEEPENED (7 factors identified, 3 beyond recipe encoding) | Accept: recipes produce COMPOSED, not DESIGNED. DESIGNED requires compositional fluency. |
| Cost: 75-215 min per page | SLIGHTLY INCREASED (~2 min micro-gates, ~5-10 min TC Phase 3.6) | Addition Test is escape valve for simple content |

### 11.2 New Risks from Revised Architecture

| Risk | Description | Mitigation |
|------|-------------|-----------|
| Transition Table quality | TC may produce technically-valid but compositionally-incoherent transition tables (channels shift in contradictory directions) | Handoff gate checks structure; PA auditors check perceptual coherence |
| Layer B generation complexity | TC Phase 3.6 is a significant new phase requiring the planner to produce per-zone CSS specifications | Phase 3.6 uses perception thresholds as minimums, mechanism catalog as reference -- not open-ended creative choice |
| Micro-gate overhead | 4 inter-phase gates add ~2 min per build | Overhead is trivial vs 90-150 min build; prevents 30+ min wasted on broken foundations |
| Builder context window | ~1,800-2,400 lines of input may approach Opus context limits on complex content | Most complex builds need ~2,000 lines; Opus handles 200K tokens. Not a real risk. |
| TC shrinkage regret | Removing 461 lines from TC may lose implicit guidance | All removed content is OPERATIONAL (CSS tables, output templates) that duplicates what the builder receives from reference files |

### 11.3 Open Questions

1. **Should micro-gates block the builder or just warn?** Blocking prevents wasted work but may interrupt creative flow. Current design: BLOCKING for MG-2 (backgrounds) and MG-4 (typography), WARNING for MG-1 and MG-3.

2. **Should Layer B include FLAT-mode builds?** When Addition Test = NO TENSION, TC fast-exits to FLAT mode. Should TC still generate a Build Recipe Instance for flat-mode builds, or use a simplified output? Current design: yes, generate Layer B but with the METAPHOR section replaced by DENSITY PATTERN selection.

3. **How does the Transition Table handle non-linear layouts?** CD-006 uses grid layouts where zones are spatially adjacent horizontally, not just vertically. The current Transition Table assumes linear top-to-bottom zone ordering. Grids may need a 2D transition specification.

---

## 12. NEXT STEPS — CODIFICATION ORDER

The investigation is complete. The revised architecture is specified. What remains is CODIFICATION: writing the permanent files.

**Recommended order:**

1. **Edit TC SKILL.md** — Remove Phases 4-5, remove tier routing, add Phase 3.6 (Transition Table + Build Recipe Instance generation). This is the highest-impact single change.

2. **Write `operational-recipe.md` (Layer A)** — The 300-line recipe template with 42 guardrail-playbook pairs, phase structure, perception thresholds, self-checks.

3. **Write `perception-thresholds.md`** — 80-line canonical threshold table. Simple but referenced everywhere.

4. **Write `transition-table-template.md`** — 40-line template that TC fills per build.

5. **Write `gate-runner.js`** — 400-line gate runner with 14 end-gates + 4 micro-gates.

6. **Write `build-page/SKILL.md`** — 205-line orchestrator. Invokes TC, validates handoff, spawns builder, runs gates, manages fix cycles.

7. **Edit PA SKILL.md** — Remove tier-conditional framing (20 lines). Make all Ceiling+ questions universal.

8. **Edit supporting files** — `semantic-rules.md`, `mechanism-catalog.md`, `CLAUDE.md` files.

**Estimated total effort:** ~1,200 permanent lines across ~10 files. Significantly less than original PV2's ~1,605 estimate because Layer B is generated per-build (not permanent) and TC shrinks by ~600 lines.

---

## APPENDIX: COMPARISON TABLE

| Dimension | Master Prompt (failed) | Original PV2 (designed) | Revised PV2 (this doc) |
|-----------|----------------------|------------------------|----------------------|
| Builder input | 75 lines (13.4%) | ~1,150 lines (100%) | ~1,800-2,400 lines (100%+) |
| Format | Checklist | Recipe | Recipe Template + Recipe Instance |
| Multi-coherence | Zero mention | Concept + Phase 8 verification | Transition Table + SC-13 gate |
| Telescope comments | Zero | In build plan (separate doc) | Inline in Build Recipe Instance |
| Phase enforcement | Text only | Text + end-gates | Text + micro-gates + end-gates |
| TC scope | Phases 0-5 (1,933 lines) | Phases 0-3.5 (mentioned, not enacted) | Phases 0-3.6 (~650 lines, enacted) |
| Programmatic gates | 0 | 12 | 14 + 4 micro-gates |
| Handoff checks | 0 | 5 | 8 |
| Tier routing | 3 tiers | None (ALWAYS FLAGSHIP) | None (tier code REMOVED) |
| Guardrail:playbook | 7.9:1 | ~0.5:1 (claimed) | ~0.5:1 (42 pairs codified) |
| Quality floor | PA-05 1.5/4 | PA-05 >= 3/4 (projected) | PA-05 >= 3/4 (structurally enforced) |
| Quality ceiling | PA-05 1.5/4 | PA-05 3-4/4 (projected) | PA-05 3/4 reliable, occasional 4/4 |

---

*END OF REVISED PV2 ARCHITECTURE*
