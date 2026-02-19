# STACK: Fractal Self-Similarity -- Where Pattern-at-Every-Zoom-Level Gets Lost

**Author:** Fractal Self-Similarity Stack Tracer (Opus 4.6)
**Date:** 2026-02-19
**Task:** #14
**Sources:** PV2-PIPELINE-DIAGRAM.md, tension-composition SKILL.md, mechanism-catalog.md, 14-MASTER-SYNTHESIS.md, cross-reference reports 07/09/12/15/20/21/23/24

---

## 1. THE FRACTAL SELF-SIMILARITY PRINCIPLE

Fractal self-similarity means the SAME compositional pattern is visible at every zoom level. If the metaphor is "geological strata," then:

| Scale | What Fractal Looks Like | CSS Expression |
|-------|------------------------|----------------|
| **Navigation** | TOC/header has layered structure echoing stratification | Dark header = bedrock, TOC items descend by weight |
| **Page** | Section arc shows three strata: overview (surface), deep-dive (sediment), synthesis (bedrock) | Zone backgrounds darken progressively, spacing compresses |
| **Section** | Each section internally stratifies: intro (loose), body (moderate), conclusion (dense) | Padding gradients within section, border-weight increases |
| **Component** | Components feel like geological specimens -- dense, contained, layered | 2-zone DNA (sparse label = surface, dense body = sediment), border-left = stratum marker |
| **Character** | Typography has the weight of stone -- serif headings = hewn inscriptions, mono = mineral composition labels | Font family = material quality, letter-spacing = compression level |

CD-006 achieved this. The "research laboratory" metaphor echoed at navigation (lab dashboard header), page (experimental arc), section (individual experiments), component (specimen cards), and character (precision typography). The flagship ANNOUNCED the metaphor ("geological intentionality") but only 60% of sections showed it visually without labels. That is not fractal -- that is partial.

---

## 2. WHERE PV2 SPECIFIES FRACTAL SELF-SIMILARITY

### 2A. TC Skill Phase 4.7 -- The Fractal Consistency GATE

The TC skill has an explicit fractal gate at Step 4.7 (line 1416-1462 of SKILL.md):

```
Scale coverage table (MANDATORY deliverable):

| Scale | Pattern Expression | CSS Evidence |
|-------|-------------------|--------------|
| Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
| Page | [How section sequence reflects pattern] | [Specific CSS] |
| Section | [How components within section reflect pattern] | [Specific CSS] |
| Component | [How content within component reflects pattern] | [Specific CSS] |
| Character | [How inline/text-level reflects pattern] | [Specific CSS] |
```

Tier requirements:
- Middle: 2 scales (Page + Component)
- Ceiling: 4 scales (Navigation + Page + Section + Component)
- **Flagship: 5 scales (ALL scales)**

Under ALWAYS FLAGSHIP, the TC planner MUST produce a 5-row scale coverage table with CSS evidence for each scale.

### 2B. TC Skill Step 0D-CEILING Context Box

Line 158 states: "4-scale fractal coherence: Pattern visible at Navigation + Page + Section + Component scales." This is for Ceiling. Flagship requires 5 (adding Character).

### 2C. PV2 Architecture Diagram

The diagram does NOT mention fractal self-similarity anywhere. Zero occurrences of "fractal," "self-similar," "every scale," "zoom level," "echo," or "same pattern" in the 977-line PV2-PIPELINE-DIAGRAM.md.

### 2D. Operational Recipe (Builder's 9 Phases)

The recipe's 9 phases (0-8) as described in the PV2 diagram contain NO fractal verification step. Phase 8 (Verification) checks zone boundaries, typography, borders, and soul constraints -- but does NOT ask "Is the same pattern visible at every scale?"

### 2E. Gate Runner (SC-01 through SC-12)

The 12 programmatic gates check: container width, soul properties, font trinity, warm palette, no pure extremes, ARIA landmarks, skip link, component library, background delta, stacked gap, font-size zones, zone count. None check fractal self-similarity.

### 2F. Cross-Reference Reports

Report 20 (diagnosis audit, line 221): "F-25: Fractal coherence unverifiable -- PARTIALLY FIXED. Recipe Phase 5 typography creates scale-level variation. For Flagship, '4-scale fractal coherence required.' PA evaluates fractal presence perceptually. But no PROGRAMMATIC gate measures fractal coherence."

Report 24 (meta-problem audit, line 180): "Fractal coherence: NO. Not referenced in permanent files. ACCEPTABLE (dropped from PV2)."

Report 12 (flagship-always, line 237): "F-25 (Fractal Coherence): Phase 8C checks scale coverage but not whether moments at different scales ECHO each other. The 'fractal' part is still judgment-based."

---

## 3. THE FRACTAL LOSS MAP -- Where It Dies

### LOSS POINT 1: TC planner produces scale coverage table, but builder NEVER SEES IT

**The critical gap.** The TC planner is required (by Step 4.7) to produce a 5-row scale coverage table mapping metaphor expressions to CSS at each scale. This table is the fractal specification.

But look at what the builder receives (PV2 diagram lines 311-351):
1. operational-recipe.md (~650 lines)
2. _build-plan.md (from TC)
3. tokens.css
4. prohibitions.md
5. merged-components.css
6. mechanism-catalog.md

The _build-plan.md contains: zone count, section inventory, mechanism deployment per category, background colors, isomorphism table, transition plan, builder warnings.

**Does _build-plan.md contain the scale coverage table?** It is not listed. The isomorphism table maps metaphor properties to CSS forms, but this is a FLAT mapping (metaphor element -> CSS mechanism), not a SCALED mapping (metaphor at navigation -> CSS, metaphor at page -> CSS, metaphor at section -> CSS...).

**Verdict: The fractal specification is produced by TC (Step 4.7) but appears to be LOST in the handoff to the builder.** The _build-plan.md format as specified in the PV2 diagram does not include per-scale CSS expressions.

### LOSS POINT 2: Recipe phases are SCALE-BLIND

The 9 recipe phases operate on CSS PROPERTIES, not SCALES:

| Phase | What It Addresses | Scale Awareness |
|-------|------------------|-----------------|
| 0 | Content analysis + zone architecture | Page scale only (zones) |
| 1 | HTML skeleton | No scale concept |
| 2 | CSS reset + soul + base typography | No scale concept |
| 3 | Zone backgrounds | Page scale only (zones = page-level sections) |
| 4 | Borders + dividers + transitions | Section scale only (between-section) |
| 5 | Typography zones | Cross-scale (display/body/detail) but not fractal |
| 6 | Element-level richness | Component scale only |
| 7 | Accessibility | No scale concept |
| 8 | Verification | Self-check but no fractal verification |

The phases proceed from MACRO to MICRO (zones -> borders -> typography -> elements -> accessibility), which is a reasonable build order. But they never ASK: "Does the pattern I deployed at the page level (Phase 3) ECHO at the component level (Phase 6)?"

Each phase operates in isolation. Phase 3 sets zone backgrounds. Phase 6 sets element-level richness. Nothing connects them through a shared pattern direction.

**Comparison with CD-006:** CD-006's builder (a single Opus agent with full context) naturally created fractal coherence because the metaphor was internalized. The "research laboratory" concept guided every decision at every scale -- not because a gate required it, but because the builder held the metaphor as an organizing principle throughout the build. The recipe fragments the build into 9 independent phases, each with its own checklist. Fractal coherence requires CONTINUOUS pattern awareness across all phases.

### LOSS POINT 3: "Deploy metaphor" is a SINGLE instruction, not a per-scale specification

The TC skill's metaphor collapse (Phase 3) produces a metaphor with an isomorphism table:

```
| Metaphor Property | Content Property | System Mechanism |
|---|---|---|
| [physical trait] | [content parallel] | [CSS expression] |
```

This table is SCALE-BLIND. It maps metaphor traits to CSS without specifying WHICH SCALE each mapping operates at. "Geological layers -> zone backgrounds" -- at what scale? Page-level zones? Section-level internal zones? Component-level backgrounds? All of them?

For fractal self-similarity, the isomorphism table would need a 4th column:

```
| Metaphor Property | Content Property | System Mechanism | SCALE |
|---|---|---|---|
| Layered strata | Section progression | Zone backgrounds | Page |
| Internal stratification | Within-section density | Padding gradient | Section |
| Specimen layering | Component zones | 2-zone DNA | Component |
| Inscribed weight | Typography mass | Font family/weight | Character |
```

This 4th column does not exist in the current format.

### LOSS POINT 4: Handoff gate checks EXISTENCE, not FRACTALITY

The handoff validation gate (Wave 0.9) checks:
1. Zone count 2-5?
2. BG colors >= 15 RGB delta?
3. >= 2 grid layouts?
4. Per-category mechs met? (S/T/M/B/R:1+)
5. >= 3 transition types planned?

None of these check: "Does the metaphor expression appear at >= 4 scales?" The gate verifies WHAT is planned, not WHETHER it fractals.

### LOSS POINT 5: PA catches fractal absence post-hoc, at maximum cost

The Mode 4 PA (9 auditors, 48 questions) can perceptually assess whether "the same compositional direction is observable at multiple scales" (Report 20, line 349). PA-05 ("Does this feel DESIGNED?") implicitly evaluates coherence across scales.

But this happens AFTER 90-150 minutes of build time. Catching fractal absence at the PA stage means the builder already spent the full build without fractal awareness. The fix cycle (Wave 3) can address specific issues but cannot retrofit a fundamentally non-fractal build into a fractal one -- that requires reconceiving the build from scratch.

**Cost of late detection:** 90-150 min wasted build + 30-45 min PA + fix cycle that cannot address the structural issue = potential 180+ min wasted before escalation.

### LOSS POINT 6: Fractal coherence is UNPROGRAMMABLE in the gate runner

Report 20 confirms: "No PROGRAMMATIC gate measures fractal coherence" (line 221). Report 12 adds: "The 'fractal' part is still judgment-based" (line 237).

The gate runner uses `getComputedStyle` to measure backgrounds, font sizes, borders. It COULD theoretically measure whether background color progression at section boundaries MATCHES padding progression at component boundaries MATCHES font-size progression at heading levels. But this would require:
1. Defining what "same pattern direction" means in measurable CSS terms
2. Measuring properties at EVERY scale independently
3. Computing correlation between scales

This is architecturally feasible but not specified anywhere in PV2.

---

## 4. THE CRITICAL QUESTION ANSWERED

**Does PV2 specify that the metaphor should be visible at EVERY zoom level?**

YES, in the TC skill (Step 4.7, Step 0D-CEILING). The TC planner is REQUIRED to produce a 5-scale coverage table for Flagship.

**Does the specification SURVIVE to the builder?**

NO. The fractal specification dies in 3 places:
1. **Handoff compression:** The _build-plan.md format does not include the scale coverage table
2. **Recipe isolation:** The 9-phase recipe is scale-blind; each phase addresses a property, not a scale
3. **Gate absence:** Neither the handoff gate nor the gate runner checks fractal coherence

**Does PV2 just say "deploy metaphor" once and hope it fractalizes?**

ESSENTIALLY YES. The TC planner thinks about fractality (Step 4.7 requires it). But the builder receives:
- A mechanism deployment table (per-category, not per-scale)
- An isomorphism table (metaphor -> CSS, without scale column)
- A recipe that proceeds property-by-property, not scale-by-scale

The builder has no structured instruction to echo the pattern at navigation, section, component, and character scales. The recipe tells the builder WHAT to build at each phase, not HOW to make each phase echo the same compositional direction.

---

## 5. WHAT WOULD ENFORCE FRACTAL SELF-SIMILARITY WITHOUT MORE TEXT

The question asks for a STRUCTURED approach that enforces fractality without adding volume. Here are four architecturally distinct approaches:

### APPROACH A: Per-Scale Column in Existing Tables

**Cost:** ~20 additional characters per row in existing tables. Zero new text.

Add a "Scale" column to the isomorphism table that TC already produces:

```
| Metaphor Property | Content Property | System Mechanism | Scale |
```

And add a "Scale" column to the mechanism deployment table:

```
| Category | Mechanism | Scale Target | CSS |
|----------|-----------|-------------|-----|
| Spatial | Dense/sparse | Page | Zone padding gradient |
| Spatial | Dense/sparse | Section | Internal padding variation |
| Hierarchy | Border-weight | Component | Label vs body border |
| Depth | Zone backgrounds | Page | Section background progression |
| Depth | Zone backgrounds | Component | Component background subtle shift |
```

**What this does:** Forces the TC planner to assign EVERY mechanism a scale. If a mechanism only appears at one scale, the planner must add more mechanisms at other scales to achieve 5/5 coverage. The STRUCTURE of the table enforces fractality.

**What this does NOT do:** Guarantee the builder EXECUTES at every scale. But it makes the instruction explicit.

### APPROACH B: Fractal Appendix to _build-plan.md

**Cost:** ~30 lines added to build plan output format. No new files.

After the isomorphism table, TC adds:

```
## FRACTAL ECHO TABLE

| Scale | Pattern Direction | Primary CSS Expression | Secondary CSS Expression |
|-------|------------------|----------------------|-------------------------|
| Navigation | [e.g., dense-header-sparse-body] | [e.g., dark bg + compressed padding] | [e.g., bold nav items thin to light] |
| Page | [same direction] | [e.g., zone backgrounds darken] | [e.g., spacing compresses] |
| Section | [same direction] | [e.g., internal padding shrinks] | [e.g., border-weight increases] |
| Component | [same direction] | [e.g., 2-zone dense body] | [e.g., accent color intensifies] |
| Character | [same direction] | [e.g., serif = weight, sans = light] | [e.g., letter-spacing tightens] |
```

**What this does:** Gives the builder an EXPLICIT per-scale CSS prescription. The builder can follow it phase by phase. At Phase 3 (zone backgrounds), they check the Page row. At Phase 6 (element richness), they check the Component row.

**The key innovation:** "Pattern Direction" column. Every row must state the SAME direction (e.g., "sparse-to-dense," "surface-to-depth," "light-to-heavy"). If the planner cannot write the same direction at every scale, the metaphor is not fractal.

### APPROACH C: Recipe Phase Cross-References

**Cost:** ~1 line added per recipe phase. 9 lines total.

At the end of each recipe phase, add a cross-reference to the fractal echo table:

```
Phase 3: Zone Backgrounds
[existing recipe instructions]
FRACTAL CHECK: Verify Page row of fractal echo table. Does your background progression match the pattern direction?

Phase 6: Element-Level Richness
[existing recipe instructions]
FRACTAL CHECK: Verify Component row of fractal echo table. Does your element styling mirror the same direction?
```

**What this does:** Makes each phase AWARE of its fractal responsibility. The builder is reminded at every phase that the pattern should echo.

**Cost-benefit:** 9 lines of text in exchange for phase-level fractal awareness. This is the minimum viable intervention.

### APPROACH D: Gate Runner Fractal Correlation (Programmatic)

**Cost:** ~30 lines in gate-runner.js. New gate SC-13.

```javascript
// SC-13: Fractal Coherence (direction correlation)
// Measures whether CSS progression DIRECTION is consistent across scales

// 1. Measure background-color values at zone boundaries (Page scale)
// 2. Measure padding values at section boundaries (Section scale)
// 3. Measure font-size at heading levels (Component scale)
// 4. Compute: do all three progress in the SAME direction?
//    (e.g., backgrounds darken AND padding shrinks AND fonts decrease = consistent "deepening")
// 5. PASS if >= 3 of 4 measurable scales show same direction
// 6. FAIL if scales show opposing directions (backgrounds darken but padding INCREASES)
```

**What this does:** Makes fractal coherence PROGRAMMABLE. The gate runner already measures computed styles at every element. Extending it to compute cross-scale correlation adds ~30 lines.

**Limitation:** Cannot measure metaphor-specific fractality (is the geological strata pattern visible?). Can only measure DIRECTION consistency (do CSS values progress in the same direction across scales?). This is fractal-adjacent, not fractal-exact.

---

## 6. RECOMMENDED APPROACH: B + C + D (Layered)

The three approaches are complementary and form a 3-layer defense:

| Layer | Approach | Cost | What It Catches |
|-------|----------|------|-----------------|
| **Planning** | B (Fractal Echo Table) | 30 lines in build plan | TC planner must think per-scale |
| **Execution** | C (Recipe cross-refs) | 9 lines in recipe | Builder checks fractal at each phase |
| **Verification** | D (Gate SC-13) | 30 lines in gate runner | Programmatic direction consistency |

Total cost: ~70 lines across 3 existing artifacts. Zero new files. Zero new agents. Zero new waves.

**Why all three matter:**
- B without C: Planner produces fractal spec, builder ignores it (same as current gap)
- C without B: Builder checks fractal at each phase, but has no fractal specification to check against
- D without B+C: Gate catches direction inconsistency, but cannot tell builder HOW to fix it
- B+C+D: Planner specifies per-scale, builder checks per-phase, gate verifies per-direction. Fractal coherence is embedded at planning, execution, and verification -- the same 3-layer embedding that made perception thresholds PV2's most important innovation.

---

## 7. WHY CD-006 FRACTALIZED AND THE FLAGSHIP DIDN'T

CD-006 was built by a single Opus agent with FULL context. The research laboratory metaphor was not fragmented into phases. The builder held the metaphor as a CONTINUOUS organizing principle and naturally made decisions at every scale that echoed the same direction.

The flagship was built by a Sonnet agent following a checklist. Each phase was addressed independently. The metaphor ("geological intentionality") was stated once in the build plan but not broken down per-scale. The builder executed Phase 3 (backgrounds) without thinking about Phase 6 (elements), and executed Phase 6 without connecting it back to Phase 3.

**The structural cause:** Fractal self-similarity requires HOLISTIC awareness -- the ability to hold a pattern in mind and apply it at every level of zoom. The recipe format FRAGMENTS the build into independent phases. This fragmentation is the recipe's strength (clear, sequential, binary) and its weakness (no cross-phase coherence).

**The fix is not "remove the recipe."** The fix is to make the recipe FRACTAL-AWARE: each phase references the same pattern direction, each phase checks against the same echo table, and a final gate measures whether the directions correlate.

---

## 8. THE FLAGSHIP FAILURE AS FRACTAL CASE STUDY

The flagship experiment's metaphor was "geological intentionality." PA audit found that 40% of visual elements needed text labels to connect to the metaphor. This means:

- **At navigation scale:** The header DID use dark backgrounds (geological bedrock). FRACTAL: YES.
- **At page scale:** Zones DID darken progressively. FRACTAL: YES.
- **At section scale:** Internal section structure was FLAT (uniform padding, no internal stratification). FRACTAL: NO.
- **At component scale:** Components had no geological DNA -- no weight variation, no layering. FRACTAL: NO.
- **At character scale:** All text was 16px/400 -- zero typographic variation suggesting geological weight. FRACTAL: NO.

Score: 2/5 scales showed the metaphor. This is worse than Middle tier's 2-scale requirement. A Flagship page achieved FLOOR-LEVEL fractal coverage.

**Root cause:** The metaphor was deployed at macro scales (header, zone backgrounds) but not at micro scales (section internals, component structure, typography). The builder ran out of CSS budget on macro features and never reached micro-scale pattern deployment. The recipe phases (which address macro before micro) reinforced this: Phases 3-4 consumed effort, Phases 5-6 got minimal attention.

**The fix (Approach B):** If the build plan had included:

```
FRACTAL ECHO TABLE (Geological Strata):
Pattern direction: surface-to-depth (light/sparse -> dark/dense)

| Scale | Direction | CSS |
|-------|-----------|-----|
| Navigation | Surface = light nav, depth = dark header | #FEF9F5 nav -> #1A1A1A header |
| Page | Surface sections sparse, deep sections dense | Zone bgs darken, padding shrinks |
| Section | Each section: intro=surface, body=sediment | Internal padding 48px->24px->16px |
| Component | Components layered: label=surface, body=depth | 2-zone with bg shift, border-weight encodes depth |
| Character | Surface text lighter, depth text denser | Serif headings (inscribed), mono labels (mineral) |
```

...the builder would have had EXPLICIT per-scale CSS to implement. Phase 6 would not have been "add some hover states" but "deploy geological component DNA with layered 2-zone structure."

---

## 9. SUMMARY OF FINDINGS

| Finding | Evidence | Severity |
|---------|----------|----------|
| TC Step 4.7 requires 5-scale coverage table | SKILL.md line 1416-1462 | SPECIFICATION EXISTS |
| Build plan format does NOT include scale table | PV2 diagram lines 311-351 | **BLOCKING LOSS** |
| Recipe 9 phases are scale-blind | PV2 diagram Phase descriptions | **BLOCKING LOSS** |
| Handoff gate has no fractal check | PV2 diagram Wave 0.9 | **SIGNIFICANT LOSS** |
| Gate runner has no fractal gate | 12 SC gates, none measure cross-scale | **SIGNIFICANT LOSS** |
| PA catches fractal absence at 90-150 min cost | Report 20, 12 confirm | LATE DETECTION |
| CD-006 fractalized via holistic builder awareness | Memory findings | COMPARATIVE EVIDENCE |
| Flagship scored 2/5 fractal scales | PA audit findings | FAILURE EVIDENCE |
| Report 24 says fractal coherence "dropped from PV2" | Line 180 | EXPLICIT CONFIRMATION |

**The verdict:** PV2 SPECIFIES fractal self-similarity in the TC skill but DROPS IT between planning and execution. The fractal specification is produced but never reaches the builder, never enters the recipe, and never gets verified programmatically. The 5-scale coverage table is a mandatory TC deliverable that evaporates at the handoff boundary.

**The fix:** 70 lines across 3 existing artifacts (Fractal Echo Table in build plan, cross-references in recipe phases, SC-13 gate in gate runner). This mirrors PV2's most successful innovation (perception thresholds at 4 layers) applied to fractal coherence.
