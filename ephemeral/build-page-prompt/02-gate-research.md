# 02 -- Gate Research Extraction for /build-page Master Prompt

**Author:** gate-researcher (Opus 4.6)
**Date:** 2026-02-19
**Task:** #2 -- Extract ALL 21 gates with exact thresholds, pass/fail criteria, and programmatic check logic
**Sources:**
- `ephemeral/flagship-44-recipe/08-VERIFICATION-SPEC.md` (620 lines -- verification recipe)
- `design-system/pipeline/PV2-FLAGSHIP-VARIANT.md` (2,544 lines -- gate registry in Wave 2)
- `ephemeral/fat-core-capability/15-gate-analysis.md` (309 lines -- compositional coverage)
- `ephemeral/fat-core-capability/28-yaml-gate-extraction.md` (305 lines -- YAML schema + promotions)
- `ephemeral/flagship-44-recipe/12-SYNTHESIS.md` (324 lines -- gate triage A/B/C)
- `design-system/compositional-core/identity/prohibitions.md` (420 lines -- soul constraints)

---

## EXECUTIVE SUMMARY

21 gates across 3 enforcement tiers. 15 Tier 1 (programmatic, code blocks pipeline) + 4 Tier 2 (deliverable validation, code validates builder YAML) + 2 Tier 3 (behavioral, honor system). Gates are triaged into 3 importance tiers: A (12 composition-critical), B (7 identity enforcement), C (2 behavioral). 6 gates have Flagship-elevated thresholds above Middle defaults.

Gates catch ~26% of compositional quality. The remaining ~74% requires PA judgment. Gates raise the FLOOR (prevent 1.5/4 FLAT), not the CEILING. The gate-to-PA handoff is ONE-WAY: gates filter, then PA judges. Gates never re-run during PA.

---

## PART 1: COMPLETE 21-GATE REGISTRY

### 1.1 TIER A: COMPOSITION-CRITICAL (12 gates)

These determine whether PA is even worth running. If any Tier A blocking gate fails, the page has mechanical compositional problems that PA cannot evaluate past.

---

#### GATE SC-01: Container Width

| Property | Value |
|----------|-------|
| **Gate ID** | SC-01 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Maximum width of primary content container |
| **Pass criteria** | 940px <= max-width <= 960px |
| **Fail criteria** | max-width < 940px OR max-width > 960px |
| **Flagship threshold** | Same as standard (940-960px) |
| **Programmatic check** | `getComputedStyle(document.querySelector('.page-container, main, [role="main"]')).maxWidth` -- parse to px, verify 940-960 |
| **Confidence** | 99% |
| **Provenance** | #1 Phase D failure mode (4/5 pages violated). Identity constraint. |
| **Soul constraint enforced** | Container width is NON-NEGOTIABLE identity (prohibitions.md implicit, CLAUDE.md explicit: "940px minimum container width") |

---

#### GATE SC-09: Background Delta at Zone Boundaries

| Property | Value |
|----------|-------|
| **Gate ID** | SC-09 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | RGB color difference between adjacent zone backgrounds |
| **Pass criteria** | max-channel delta >= 15 RGB at EVERY zone boundary, OR alternative path: >= 5 distinct component types per zone (CD-006 texture path) |
| **Fail criteria** | Any zone boundary with max-channel delta < 15 RGB AND zone has < 5 component types |
| **Flagship threshold** | >= 15 RGB (same as standard -- this IS the Flagship fix) |
| **Programmatic check** | For each pair of adjacent `.zone-*` elements: `getComputedStyle(el).backgroundColor` -> parse rgb values -> compute `max(abs(R1-R2), abs(G1-G2), abs(B1-B2))` -> must be >= 15. Alternative: count distinct component class families within zone >= 5. |
| **Confidence** | 95% |
| **Provenance** | THE PRIMARY Flagship failure. Backgrounds differed by 1-8 RGB (imperceptible). |
| **Fix recipe format** | `"FIX: Change .zone-N background from #XXXXXX to #YYYYYY (delta increases from D1 to D2 RGB points)"` with concrete hex + alternatives from tokens.css |

---

#### GATE SC-10: Stacked Gap Between Sections

| Property | Value |
|----------|-------|
| **Gate ID** | SC-10 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Total accumulated whitespace gap at zone boundaries (margin-bottom + padding-bottom of zone N + margin-top + padding-top of zone N+1) |
| **Pass criteria** | Total stacked gap <= 108px at EVERY zone boundary |
| **Fail criteria** | Any zone boundary with total gap > 108px |
| **Flagship threshold** | <= 108px (same as standard -- this IS the Flagship fix) |
| **Programmatic check** | For each pair of adjacent zone elements: `getBoundingClientRect()` on last child of zone N and first child of zone N+1 -> gap = `rect2.top - rect1.bottom`. Must be <= 108. |
| **Confidence** | 90% |
| **Provenance** | Flagship had 210-276px whitespace voids. S-09 stacking loophole: individual values pass but STACKED values create catastrophic voids. |

---

#### GATE SC-11: Typography Zone Hierarchy

| Property | Value |
|----------|-------|
| **Gate ID** | SC-11 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Font-size differentiation between display headings, body text, and detail text across zones |
| **Pass criteria (standard)** | display-body font-size delta >= 2px; body-detail delta >= 2px |
| **Pass criteria (Flagship)** | display-body delta >= 10px; body-detail delta >= 2px; 3+ DISTINCT typography zones detected |
| **Fail criteria** | display-body delta < 10px (Flagship) OR fewer than 3 typography zones OR all text at same size/weight |
| **Flagship threshold** | >= 3px delta (elevated from 2px), 3+ distinct typography zones required |
| **Programmatic check** | Collect all `fontSize` values via `getComputedStyle()` on h1/h2/h3/p/small elements. Group by zone. Compute: largest heading size - body size = display-body delta. Body size - smallest detail size = body-detail delta. Count distinct font-size clusters (within 1px = same zone). |
| **Confidence** | 95% |
| **Provenance** | Flagship had ALL text at 16px/400 -- zero hierarchy. |

---

#### GATE SC-12: Zone Count

| Property | Value |
|----------|-------|
| **Gate ID** | SC-12 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Number of distinct visual zones (sections with different background colors or structural separation) |
| **Pass criteria (standard)** | 2-5 zones |
| **Pass criteria (Flagship)** | 3-5 zones (minimum 3, not 2) |
| **Fail criteria** | < 3 zones (Flagship) OR > 5 zones |
| **Flagship threshold** | 3-5 (elevated from 2-5; 2 zones = insufficient compositional space) |
| **Programmatic check** | `querySelectorAll('[class*="zone"], section[data-zone]')`.length OR count elements with distinct background-color values. Must be 3-5. |
| **Confidence** | 99% |
| **Provenance** | Structural baseline. Fewer than 3 zones = insufficient space for multi-coherence. |

---

#### GATE SC-13: Multi-Coherence (Channel Shift Count)

| Property | Value |
|----------|-------|
| **Gate ID** | SC-13 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | At every zone boundary, how many of 6 CSS channels visibly shift |
| **6 channels measured** | (1) Chromatic: background-color RGB delta >= 15, (2) Typographic: font-size delta >= 2px OR font-weight delta >= 100, (3) Spatial: padding delta >= 24px, (4) Structural: border configuration change (width, style, or color), (5) Behavioral: interactivity presence change (hover states, transitions), (6) Material: background-image/texture change |
| **Pass criteria (standard)** | >= 3 of 6 channels shift at EVERY zone boundary |
| **Pass criteria (Flagship)** | >= 3 at every boundary AND average >= 4 across ALL boundaries |
| **Fail criteria** | Any boundary with < 3 channels shifting, OR Flagship average < 4 |
| **Flagship threshold** | >= 3 every boundary, avg >= 4 across all (elevated from just >= 3) |
| **Programmatic check** | At each zone boundary, measure all 6 channels between last element of zone N and first element of zone N+1. Count channels that exceed their individual thresholds. ~60 lines JS. |
| **Confidence** | 70% (can count shifts but CANNOT assess semantic direction coherence) |
| **Provenance** | The ONLY programmatic gate with L4 compositional intelligence. Flagship had 0-2 channel shifts at boundaries. |
| **Known limitation** | Counts channels but CANNOT judge if shifts serve the SAME semantic direction. 3 contradicting shifts pass the gate. PA-61 catches direction. |

---

#### GATE SC-14: Sub-Perceptual Prevention

| Property | Value |
|----------|-------|
| **Gate ID** | SC-14 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Three sub-checks: (1) No letter-spacing < 0.02em, (2) No letter-spacing micro-clustering (adjacent values < 0.5px apart), (3) No intra-zone background deltas between 1-14 RGB |
| **Pass criteria** | All three sub-checks pass |
| **Fail criteria** | ANY letter-spacing value between 0 and 0.02em; OR any intra-zone bg delta between 1-14 RGB |
| **Flagship threshold** | Same as standard (this gate was DESIGNED for Flagship) |
| **Programmatic check** | (1) Collect all `letterSpacing` computed values. Convert to em. Flag any in (0, 0.02em) range. (2) Sort letter-spacing values, flag any pair < 0.5px apart. (3) For elements WITHIN same zone: compute bg delta, flag any 1-14 RGB. ~50 lines JS. |
| **Confidence** | 85% |
| **Provenance** | Flagship spent 22% of CSS budget (227 lines) on letter-spacing 0.001-0.01em -- ALL imperceptible. Prevents CSS budget misallocation. |

---

#### GATE SC-15: Border/Structural Presence

| Property | Value |
|----------|-------|
| **Gate ID** | SC-15 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Presence of structural borders on section/zone elements |
| **Pass criteria (standard)** | >= 1 element with border-left >= 3px OR >= 2 `<hr>` dividers |
| **Pass criteria (Flagship)** | >= 3 DISTINCT border configurations (different width/style/color combinations) |
| **Fail criteria** | Fewer than 3 distinct border configurations (Flagship) |
| **Flagship threshold** | >= 3 distinct border configs (elevated from >= 1 border) |
| **Programmatic check** | `querySelectorAll('*')` -> filter elements with `borderLeftWidth > 0`. Collect unique `${borderLeftWidth}-${borderLeftStyle}-${borderLeftColor}` strings. Count distinct. Also count `<hr>` elements. ~20 lines JS. |
| **Confidence** | 95% |
| **Provenance** | Flagship had ZERO borders, ZERO dividers. Zero structural vocabulary. |

---

#### GATE SC-13B: Channel Shift Direction Coherence (ADVISORY)

| Property | Value |
|----------|-------|
| **Gate ID** | SC-13B |
| **Tier** | A (composition-critical) / Enforcement: ADVISORY (does not block) |
| **What it checks** | Whether channels at a boundary shift in the same semantic direction |
| **Direction classification** | darker = INTENSIFYING (+), lighter = RELAXING (-); larger/heavier font = +, smaller/lighter = -; tighter spacing = +, looser = - |
| **Pass criteria** | >= 50% of boundaries have >= 3 channels shifting in SAME direction |
| **Fail criteria** | N/A (advisory -- logs WARNING, does not FAIL) |
| **Flagship threshold** | Advisory only -- diagnostic data for PA auditors |
| **Programmatic check** | After SC-13 passes: classify each channel's shift as +/- per boundary. Count agreements. Report percentages. ~30 lines additional JS. |
| **Confidence** | ~50% (direction heuristic -- "darker = intensifying" is not universal) |
| **Provenance** | Report 15 -- the gap between "channels shift" and "channels shift coherently." |

---

#### GATE SC-16: Monotonic Property Progression (ADVISORY)

| Property | Value |
|----------|-------|
| **Gate ID** | SC-16 |
| **Tier** | A (composition-critical) / Enforcement: ADVISORY (does not block) |
| **What it checks** | Whether at least 1 CSS property progresses monotonically across 3+ consecutive zones |
| **Properties measured** | background lightness, font-size, padding, border-weight |
| **Pass criteria** | >= 1 property forms monotonic sequence (always increasing or always decreasing) across 3+ zones |
| **Fail criteria** | N/A (advisory -- logs "No monotonic progression detected" as diagnostic) |
| **Flagship threshold** | Advisory only |
| **Programmatic check** | For each tracked property across zones: sort zone-level values, check if sequence is monotonically increasing or decreasing. ~25 lines JS. |
| **Confidence** | ~80% (catches progressions, but not all compositions are monotonic -- tension-release patterns would not be caught) |
| **Provenance** | Report 15 -- catches absence of compositional direction. |

---

#### GATE DG-1: Fractal Echo Table (Tier 2 Deliverable)

| Property | Value |
|----------|-------|
| **Gate ID** | DG-1 |
| **Tier** | A (composition-critical) / Enforcement: Tier 2 (deliverable validation) |
| **What it checks** | Builder's `fractal_table.yaml` deliverable -- 5-scale coverage with CSS evidence |
| **Pass criteria** | 5 rows present (Navigation, Page, Section, Component, Character); CSS evidence field non-empty at each scale; pattern direction documented at each scale; pattern direction CONSISTENT across all 5 rows |
| **Fail criteria** | < 5 rows OR any empty CSS evidence field OR missing pattern direction OR inconsistent direction across rows |
| **Flagship threshold** | All 5 rows required (standard might accept 3) |
| **Programmatic check** | Parse YAML file. Validate: `scales.length === 5`, each entry has `css_evidence` (non-empty string), each entry has `pattern_direction` (non-empty string), all `pattern_direction` values match OR are documented as intentional variation. |
| **Confidence** | Structural validation ~95%; whether CSS evidence ACTUALLY produces claimed pattern = 0% (needs PA-63) |
| **Provenance** | Reports 83, 68 -- L2 scale coverage was ABSENT from all prior gates. Promoted from Tier 3 to Tier 2. |

---

#### GATE DG-2: Cascade Value Table (Tier 2 Deliverable)

| Property | Value |
|----------|-------|
| **Gate ID** | DG-2 |
| **Tier** | A (composition-critical) / Enforcement: Tier 2 (deliverable validation) |
| **What it checks** | Builder's `cascade_table.yaml` -- computed CSS at every zone boundary, cross-validated against SC-13's measured values |
| **Pass criteria** | Computed CSS present at every boundary; cross-validation against SC-13 measured values: discrepancy < 5 RGB / 1px font-size / 0.01em letter-spacing |
| **Fail criteria** | Missing boundary data OR discrepancy between claimed and measured values exceeds thresholds |
| **Flagship threshold** | Same as standard |
| **Programmatic check** | Parse YAML. Compare builder-claimed values against SC-13's actual computed values. Flag discrepancies. |
| **Confidence** | ~90% for structural validation; cross-validation catches dishonest/stale self-reports |
| **Provenance** | Reports 15, 28 -- promoted from Tier 3 (agent self-report) to Tier 2 (structured deliverable with cross-validation). |

---

### 1.2 TIER B: IDENTITY ENFORCEMENT (7 gates)

Must pass (zero exceptions). Tell us nothing about compositional quality -- they enforce the design system's SOUL.

---

#### GATE SC-02: Soul Properties (Radius + Shadow)

| Property | Value |
|----------|-------|
| **Gate ID** | SC-02 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | border-radius and box-shadow on ALL elements |
| **Pass criteria** | border-radius: 0 AND box-shadow: none on every element |
| **Fail criteria** | ANY element with border-radius > 0 OR box-shadow != none |
| **Flagship threshold** | Same (identity is universal) |
| **Programmatic check** | `document.querySelectorAll('*')` -> for each: `getComputedStyle(el).borderRadius !== '0px'` OR `getComputedStyle(el).boxShadow !== 'none'` -> FAIL |
| **Confidence** | 99% |
| **Soul constraint** | Prohibitions #1 (border-radius: 0 ALWAYS), #2 (box-shadow: none ALWAYS), #3 (no drop-shadow) |

---

#### GATE SC-03: Font Trinity

| Property | Value |
|----------|-------|
| **Gate ID** | SC-03 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Only allowed fonts: Instrument Serif, Inter, JetBrains Mono |
| **Pass criteria** | Every computed fontFamily resolves to one of the 3 allowed fonts (after fallback resolution) |
| **Fail criteria** | Any element using a font family not in the trinity |
| **Flagship threshold** | Same (identity is universal) |
| **Programmatic check** | `document.querySelectorAll('*')` -> check `getComputedStyle(el).fontFamily` starts with one of: `"Instrument Serif"`, `"Inter"`, `"JetBrains Mono"`. Must wait for `document.fonts.ready` FIRST. |
| **Confidence** | 95% (font fallback chains can complicate detection) |
| **Soul constraint** | Prohibition #7 (NEVER use Instrument Serif for body text -- display only) |

---

#### GATE SC-04: Warm Palette

| Property | Value |
|----------|-------|
| **Gate ID** | SC-04 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | All background colors satisfy R >= G >= B (warm palette) |
| **Pass criteria** | For every element with a non-transparent background: R >= G >= B |
| **Fail criteria** | Any background where R < G OR G < B (cool-toned) |
| **Flagship threshold** | Same (identity is universal) |
| **Programmatic check** | Collect all background-color values. Parse to RGB. Verify R >= G >= B. |
| **Confidence** | 95% |
| **Soul constraint** | Prohibition #16 (NEVER use cool-toned grays) |

---

#### GATE SC-05: No Pure Extremes

| Property | Value |
|----------|-------|
| **Gate ID** | SC-05 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | No rgb(0,0,0) or rgb(255,255,255) anywhere |
| **Pass criteria** | Zero elements with computed color or background-color of exactly #000000 or #FFFFFF |
| **Fail criteria** | Any element with pure black or pure white |
| **Flagship threshold** | Same (identity is universal) |
| **Programmatic check** | Check all computed `color` and `backgroundColor` values. Flag exact `rgb(0, 0, 0)` or `rgb(255, 255, 255)`. |
| **Confidence** | 99% |
| **Soul constraint** | Prohibition #6 (NEVER use pure black #000 or pure white #FFF) |

---

#### GATE SC-06: ARIA Landmarks

| Property | Value |
|----------|-------|
| **Gate ID** | SC-06 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Count of ARIA landmark elements |
| **Pass criteria (standard)** | >= 3 landmarks |
| **Pass criteria (Flagship)** | >= 5 landmarks |
| **Fail criteria** | < 5 landmarks (Flagship) |
| **Flagship threshold** | >= 5 (elevated from 3; Flagship pages are longer, more structured) |
| **Programmatic check** | `querySelectorAll('header, nav, main, aside, footer, [role="banner"], [role="navigation"], [role="main"], [role="complementary"], [role="contentinfo"]')`.length |
| **Confidence** | 99% |

---

#### GATE SC-07: Skip Link

| Property | Value |
|----------|-------|
| **Gate ID** | SC-07 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Presence of skip-to-content link |
| **Pass criteria** | At least one `<a>` with href starting with `#` that appears first or near-first in DOM and has text like "skip" |
| **Fail criteria** | No skip link found |
| **Flagship threshold** | Same (accessibility is universal) |
| **Programmatic check** | `document.querySelector('a[href^="#"]')` that contains text matching /skip/i AND is within first 5 DOM children of body. |
| **Confidence** | 99% |

---

#### GATE SC-08: Component Library Adoption

| Property | Value |
|----------|-------|
| **Gate ID** | SC-08 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic) |
| **What it checks** | Count of distinct component library class families used |
| **Pass criteria (standard)** | >= 3 component class families |
| **Pass criteria (Flagship)** | >= 8 component types |
| **Fail criteria** | < 8 distinct component types (Flagship) |
| **Flagship threshold** | >= 8 (elevated from 3; Flagship composition requires component vocabulary) |
| **Programmatic check** | Scan all `className` attributes. Match against known component library prefixes (e.g., `callout-`, `grid-`, `card-`, `table-`, `code-block-`, `bento-`, etc.). Count distinct families. |
| **Confidence** | 90% (depends on class naming convention consistency) |

---

### 1.3 TIER C: BEHAVIORAL (2 gates)

Honor system with audit trail. Cannot be promoted to Tier 1/2 because they require semantic judgment.

---

#### GATE BG-1: Metaphor Independence

| Property | Value |
|----------|-------|
| **Gate ID** | BG-1 (Behavioral Gate 1) |
| **Tier** | C (behavioral) / Enforcement: Tier 3 (agent attestation) |
| **What it checks** | Did the builder derive the metaphor BEFORE consulting the library? |
| **Verification method** | Builder audit trail / build log must show metaphor derivation timestamps BEFORE library consultation timestamps |
| **Pass criteria** | Build log shows: (1) content analysis, (2) tension derivation, (3) metaphor collapse, (4) THEN library consultation (if any) |
| **Fail criteria** | Build log shows library consultation BEFORE metaphor commitment |
| **Why unpromovable** | "Did the agent derive independently?" is fundamentally subjective. No programmatic check can determine whether prose in a build log represents genuine derivation or post-hoc rationalization. |
| **Soul constraint** | Prohibition #20 (NEVER create new patterns without tension derivation) |

---

#### GATE BG-2: Metaphor Structural

| Property | Value |
|----------|-------|
| **Gate ID** | BG-2 (Behavioral Gate 2) |
| **Tier** | C (behavioral) / Enforcement: Tier 3 (fresh-eyes Opus check at Wave 0.5) |
| **What it checks** | Is the metaphor STRUCTURAL (suggests specific CSS) or ANNOUNCED (label-only, decoration not structure)? |
| **Verification method** | Fresh-eyes Opus agent reads the build plan and outputs (without reading the build log). Binary judgment: STRUCTURAL or ANNOUNCED. |
| **Pass criteria** | Fresh-eyes agent rates metaphor as STRUCTURAL |
| **Fail criteria** | Fresh-eyes agent rates metaphor as ANNOUNCED |
| **Why unpromovable** | "Does the metaphor suggest specific CSS?" requires semantic understanding of how a metaphor maps to visual properties. No code can determine this. |
| **Provenance** | Ceiling experiment: 40% of metaphor was only visible with labels = ANNOUNCED. |

---

### 1.4 TIER 2 DELIVERABLE GATES (Additional 2)

---

#### GATE DG-3: Landmark Completeness (Tier 2 Deliverable)

| Property | Value |
|----------|-------|
| **Gate ID** | DG-3 |
| **Tier** | B (identity) / Enforcement: Tier 1 (programmatic -- promoted from Tier 3) |
| **What it checks** | Presence of header, main, and footer landmark elements |
| **Pass criteria** | At least 1 `<header>`, 1 `<main>`, 1 `<footer>` (or equivalent ARIA roles) |
| **Fail criteria** | Any of the 3 missing |
| **Programmatic check** | `document.querySelector('header, [role="banner"]')` AND `document.querySelector('main, [role="main"]')` AND `document.querySelector('footer, [role="contentinfo"]')` -- all must be non-null |
| **Confidence** | 99% |
| **Provenance** | Report 28 -- was Tier 3 agent self-check, promoted to Tier 1 because DOM query already possible. |

---

#### GATE DG-4: Handoff Validation (Tier 2 Deliverable)

| Property | Value |
|----------|-------|
| **Gate ID** | DG-4 |
| **Tier** | A (composition-critical) / Enforcement: Tier 1 (programmatic -- promoted from Tier 3) |
| **What it checks** | TC's `_build-plan.yaml` output -- zone count, bg deltas, mechanisms, transitions, grid layouts |
| **Pass criteria** | (1) zone_count: 2-5, (2) ALL bg_deltas >= 15, (3) mechanisms: >= 1 in each of 5 categories (Spatial/Temporal/Material/Behavioral/Relational), (4) transitions: >= 3 types, (5) grid_layouts: >= 2 |
| **Fail criteria** | Any of the 5 sub-checks fails |
| **Programmatic check** | Parse `_build-plan.yaml`. Validate each field programmatically. This is the HIGHEST-LEVERAGE single change: machine-parses YAML instead of text-matching prose. |
| **Confidence** | 99% (YAML parsing is deterministic) |
| **Provenance** | Reports 28, 15 -- "YAML-as-Prompt is theater. YAML-as-Schema is real." Promoted from Tier 3 to Tier 1. |
| **NOTE for Fat Core** | In Fat Core architecture (single agent plans + builds), DG-4 applies to the agent's SELF-GENERATED plan. The agent produces a build plan in its build log; the gate runner validates it before build proceeds. |

---

## PART 2: GATE EXECUTION ORDER

### 2.1 Micro-Gates During Build (Phase-Locked)

Run by the orchestrator between build phases. Builder cannot proceed until gate passes. Max 2 re-runs per micro-gate.

```
MG-1: After Phase 1 (HTML Skeleton)    ~30 sec
  Gates: SC-06, SC-07, SC-08, SC-12, DG-3
  Checks: ARIA landmarks >= 5, skip link present, component classes >= 8,
          zones 3-5, header/main/footer present
  WHY HERE: Structural foundation -- if HTML skeleton is wrong, all CSS is wasted

MG-2: After Phase 3 (Zone Backgrounds)  ~30 sec
  Gates: SC-04, SC-05, SC-09
  Checks: Warm palette (R>=G>=B), no pure extremes, bg delta >= 15 RGB
  WHY HERE: Catches THE primary Flagship failure BEFORE more build time
  FIX COST AT THIS STAGE: ~5 min (vs ~30 min if caught at full run)

MG-3: After Phase 4 (Borders)           ~30 sec
  Gates: SC-01, SC-02, SC-15
  Checks: Container 940-960px, soul (radius:0, shadow:none), border presence >= 3 configs
  WHY HERE: Structural boundaries established; soul must hold

MG-4: After Phase 5 (Typography)        ~30 sec
  Gates: SC-03, SC-11
  Checks: Font trinity, typography zones (display-body >= 10px, 3+ zones)
  WHY HERE: Typography arc must exist before element-level richness
```

**Total micro-gate time: ~2 minutes**
**Each micro-gate: single Playwright session, sequential checks**

### 2.2 Full Gate Run After Build Complete (Gate 5)

Run after all build phases complete. ALL gates run. ~5-15 seconds total.

```
FULL RUN (Gate 5): After Phase 8 complete
  ALL SC-01 through SC-15 (15 blocking gates)
  + SC-13B (advisory -- direction coherence)
  + SC-16 (advisory -- monotonic progression)
  + DG-1 (fractal echo table validation)
  + DG-2 (cascade value table validation + cross-validation vs SC-13)
  = 19 checks total (15 blocking + 2 advisory + 2 deliverable)

  NOTE: BG-1 and BG-2 (behavioral) are checked at different stages:
  - BG-1 (metaphor independence): verified via build log at any point
  - BG-2 (metaphor structural): verified at Wave 0.5 BEFORE build starts
```

### 2.3 Gate Dependencies / Prerequisites

```
DEPENDENCY CHAIN:
  SC-12 (zone count) -> SC-09 (bg delta) -> SC-13 (multi-coherence)
    Zone count must be known before bg delta can be measured per boundary.
    Bg deltas must exist before channel shifts can be counted.

  SC-13 (multi-coherence) -> SC-13B (direction) -> SC-16 (monotonic)
    Channel shifts must be counted before direction can be assessed.
    Channel data needed for monotonic progression check.

  SC-13 (measured values) <-> DG-2 (cascade table cross-validation)
    DG-2 compares builder's CLAIMED values against SC-13's ACTUAL computed values.
    Must run AFTER SC-13.

  DG-4 (handoff) is a PRE-BUILD gate (runs at Wave 0.9, before builder starts).
  All other gates run DURING or AFTER build.

  BG-2 (metaphor structural) runs at Wave 0.5 (BEFORE build).
  BG-1 (metaphor independence) verified from build log (AFTER build).
```

### 2.4 Recommended Execution Sequence (Full Run)

```
GROUP 1: Identity (can run in parallel)
  SC-01, SC-02, SC-03, SC-04, SC-05

GROUP 2: Structure (can run in parallel)
  SC-06, SC-07, SC-08, SC-12, DG-3

GROUP 3: Perception (sequential -- SC-12 result needed)
  SC-09 (needs zone boundaries identified from SC-12)
  SC-10 (needs zone boundaries)
  SC-11 (needs zone identification)
  SC-14 (can run parallel with SC-09)
  SC-15 (can run parallel)

GROUP 4: Compositional (sequential -- depends on Group 3)
  SC-13 (needs zone boundaries + per-zone computed styles from Group 3)
  SC-13B (needs SC-13 output)
  SC-16 (needs zone-level property values)

GROUP 5: Deliverable (after Group 4)
  DG-1 (parse fractal_table.yaml -- independent)
  DG-2 (parse cascade_table.yaml + cross-validate against SC-13)

TOTAL: 5 groups, ~15 seconds end-to-end (single Playwright session)
```

---

## PART 3: FLAGSHIP-SPECIFIC THRESHOLD ELEVATIONS

6 gates use Middle-calibrated thresholds insufficient for Flagship:

| Gate | Middle Threshold | Flagship Threshold | Rationale |
|------|-----------------|-------------------|-----------|
| SC-06 | >= 3 landmarks | >= 5 landmarks | Flagship pages are longer, more structured |
| SC-08 | >= 3 component classes | >= 8 component types | Flagship composition requires component vocabulary |
| SC-11 | >= 2px delta | >= 10px display-body + 3px body-detail + 3 distinct zones | Flagship typography arc requires visible differentiation |
| SC-12 | 2-5 zones | 3-5 zones | 2 zones insufficient for multi-coherence |
| SC-13 | >= 3 channels shift | >= 3 every boundary + avg >= 4 across all | Flagship requires richer multi-coherence |
| SC-15 | >= 1 border | >= 3 distinct border configurations | Flagship structural vocabulary needs variety |

**IMPORTANT CALIBRATION NOTE (from 08-VERIFICATION-SPEC.md):** These Flagship thresholds are THEORETICAL -- derived from analysis, not from observed Flagship output. The first successful Flagship experiment should be treated as calibration data. Thresholds may need adjustment.

---

## PART 4: GATE FAILURE PROTOCOL

### 4.1 Micro-Gate Failures (During Build)

```
Gate fails at MG-N:
  1. Gate runner outputs STRUCTURED fix recipe:
     {
       "gate": "SC-09",
       "status": "FAIL",
       "measured": { "zone1_bg": "#FAF5ED", "zone2_bg": "#F9F3EA", "delta_rgb": 8 },
       "threshold": { "min_delta": 15 },
       "fix": {
         "instruction": "Darken zone 2 background",
         "css": ".zone-2 { background: #F0EBE3; }",
         "new_delta": 19,
         "alternative": ".zone-2 { background: #EDE5D9; } /* delta=24 */",
         "reference": "tokens.css line 12"
       }
     }
  2. Builder applies fix
  3. Gate re-runs (max 2 re-runs per micro-gate)
  4. If still failing after 2 re-runs: ESCALATE (do not proceed to next phase)
```

### 4.2 Full Run Failures (After Build)

```
Full gate run fails:
  1. ALL gates run. ALL failures collected into _gate-results.json.
  2. Builder receives structured fix recipes for ALL failures simultaneously.
  3. Builder applies fixes (top priority: Tier A gates first).
  4. Full gate re-run.
  5. Max 3 fix cycles on full run.
  6. After 3 failed full-run cycles: ESCALATE to user (do not loop).
```

### 4.3 Fix Recipe Format (Structured JSON)

Every gate failure MUST produce:

```json
{
  "gate": "SC-XX",
  "status": "FAIL",
  "measured": { /* actual values found */ },
  "threshold": { /* required values */ },
  "fix": {
    "instruction": "Human-readable fix direction",
    "css": "Specific CSS to apply",
    "new_delta": 0,
    "alternative": "Alternative CSS option",
    "reference": "File and line to consult"
  }
}
```

This is the RECIPE format that produced PA-05 2.5/4 in remediation (specific CSS fixes) vs the CHECKLIST format that produced 1.5/4 in the Flagship (generic "fix it" instructions).

---

## PART 5: GATE-TO-PA HANDOFF

### 5.1 The Principle

**Gates FILTER; PA JUDGES.**

Gates catch mechanical errors that should never consume PA auditor attention. When SC-09 fails (backgrounds differ by 5 RGB), there is no point asking 9 auditors "does this feel designed?" -- the answer is definitionally NO.

### 5.2 Handoff Flow

```
ALL 15 blocking gates PASS?
     |
  YES |          NO
     |           |
     v           v
  Run PA      FIX CYCLE
  (9 auditors  (gate-generated
  + Tier 5)    CSS recipes)
     |
  Gate diagnostics
  included as PA
  context file
```

### 5.3 Gate Diagnostic Output as PA Context

Gates produce diagnostic output that PA auditors receive AS CONTEXT (orientation, not instruction):

```markdown
## Gate Diagnostic Summary (for PA auditors)

### SC-13 (Multi-Coherence): PASS
- Boundary 1-2: 4/6 channels shift (chromatic, typographic, spatial, structural)
- Boundary 2-3: 3/6 channels shift (chromatic, typographic, behavioral)
- Boundary 3-4: 5/6 channels shift (all except material)

### SC-13B (Direction Coherence): ADVISORY WARNING
- Boundary 2-3: channels shift in CONTRADICTORY directions
  (background darkens [intensifying], font-size decreases [relaxing])

### SC-16 (Monotonic Progression): ADVISORY
- font-size increases monotonically across zones 1-3-4
- No other monotonic property detected
```

PA auditors use this as WHERE-TO-LOOK orientation. The auditor determines whether contradictory shifts are BUG (incoherent) or FEATURE (designed counterpoint).

### 5.4 The Handoff Is ONE-WAY

Once gates pass and PA begins:
- Gates are NOT re-run during PA
- PA findings do NOT trigger gate re-evaluation
- Gates and PA operate in sequence, not in dialogue

**Exception:** After a fix cycle, the FULL gate suite re-runs (builder CSS changes may introduce new gate failures). This is a NEW handoff, not a gate-PA dialogue.

### 5.5 What Each Layer Catches

| Quality Level | Who Catches It | Instrument |
|--------------|---------------|-----------|
| BROKEN (0/4) | Gates SC-01 through SC-05 | Identity enforcement |
| FLAT (1.5/4) | Gates SC-09, SC-10, SC-11, SC-14, SC-15 | Perception thresholds |
| STYLED (2/4) | PA-05 sub-criteria + Tier 4 void questions | Perceptual judgment |
| COMPOSED (3/4) | PA-05 full score + PA-17, PA-41 elevated | Perceptual judgment + rhythm |
| DESIGNED (3.5/4) | PA-05 >= 3.5 + compositional criteria | Multi-instrument convergence |
| FLAGSHIP (4/4) | Tier 5 >= 6/8 | Flagship-specific compositional depth |

---

## PART 6: COMPOSITIONAL COVERAGE ANALYSIS

### What Gates Can and Cannot Detect

| Layer | Description | Gate Coverage | Gap Filled By |
|-------|-------------|--------------|---------------|
| L1 | Perception Floor | ~95% (SC-09/10/11/14/15) | Gates sufficient |
| L2 | 5 Scales | ~20% (DG-1 structure only) | PA-63 (fractal zoom) |
| L3 | 6 Channels | ~15% (presence only) | PA auditors + builder skill |
| L4 | Multi-Coherence | ~35% (SC-13 count + SC-13B direction) | PA-61, PA-62, PA-65 |
| L5 | Anti-Scale Model | 0% (fundamentally ungated) | Builder judgment only |

**Total: ~26% of compositional quality is gateable.**

The 74% gap is NOT a gate design failure -- it is a fundamental limitation. Gates measure PROPERTIES (numbers, presence, counts). Compositional quality is about RELATIONSHIPS (purpose, direction, proportion, surprise). `getComputedStyle` returns CSS values; compositional quality lives in the MEANING those values create.

### The Irreducible Un-Gateable Properties

1. **Semantic direction coherence** -- whether shifts SERVE the same purpose
2. **Proportional intelligence** -- the RIGHT amount at the RIGHT boundary
3. **Content-form resonance** -- visual decisions emerging FROM content meaning
4. **Creative surprise** -- unexpected-yet-perfect (definitionally ungated)
5. **Emergent coherence** -- the whole exceeding parts
6. **Narrative arc** -- the pattern across ALL boundaries tells a story

---

## PART 7: YAML GATE DEFINITION SCHEMA

Single `gates.yaml` registry for all 21 gates (~200 lines). Gate runner reads dynamically.

```yaml
# Schema per gate definition:
gate_id: string          # e.g., "sc_09_background_delta"
stage: enum              # tc_lockin | fractal | landmark | handoff | build_verify
trigger: string          # e.g., "after_phase_3" or "full_run"
enforcement: enum        # programmatic | deliverable | agent_self_check
triage: enum             # A (composition-critical) | B (identity) | C (behavioral)

require:
  - check: string        # What to verify
    method: enum         # computed_style | dom_query | file_parse | table_verify
    selector: string     # CSS selector or file path
    threshold:
      min: number|null
      max: number|null
      exact: value|null
      contains: string|null
    unit: string         # px | em | rgb_delta | count | boolean

fail_action: enum        # block_and_recipe | block_and_return | warn_only | block_and_escalate
fail_recipe:
  instruction: string    # Specific fix instruction
  css_example: string    # Concrete CSS to apply
  reference_file: string # File to consult

metadata:
  provenance: string     # Which report established this gate
  confidence: enum       # very_high (>95%) | high (85-95%) | moderate (70-85%) | low (<70%)
  flagship_elevation: boolean  # Whether threshold is elevated for Flagship
  sunset: string|null    # When to re-evaluate
```

---

## PART 8: SOUL CONSTRAINTS THE GATES ENFORCE

From `prohibitions.md` (24 total prohibitions), the gates enforce these soul constraints:

| Prohibition | Gate | How Enforced |
|------------|------|-------------|
| #1: NEVER border-radius > 0 | SC-02 | `getComputedStyle().borderRadius` on all elements |
| #2: NEVER box-shadow | SC-02 | `getComputedStyle().boxShadow !== 'none'` |
| #3: NEVER drop-shadow filter | SC-02 (extended) | `getComputedStyle().filter` check |
| #4: NEVER semi-transparent backgrounds | SC-14 (partial) | bg delta check catches some |
| #5: NEVER gradients | NOT GATED | Would need additional gate |
| #6: NEVER pure black/white | SC-05 | Exact RGB match check |
| #7: NEVER Instrument Serif for body | SC-03 (partial) | Font family check |
| #9: NEVER 2px borders (except OD-004) | NOT GATED | Requires context |
| #13: NEVER vertical table borders | NOT GATED | Requires table context |
| #16: NEVER cool-toned grays | SC-04 | R >= G >= B check |
| #21: NEVER full viewport of contentless space | SC-10 | Stacked gap <= 108px |
| #22: NEVER concentrate interest in first third | NOT GATED | Requires spatial analysis |

**Prohibitions NOT enforced by gates (require PA or builder compliance):**
- #4 (semi-transparent -- partial coverage only)
- #5 (gradients)
- #8 (redundant with #1)
- #9 (2px borders -- context-dependent)
- #10 (accent borders < 4px)
- #11 (decorative elements without information)
- #12 (decorative grid breaking)
- #13 (vertical table borders)
- #14 (hover lift effects)
- #15 (traffic-light color adjacency)
- #17 (non-italic h3)
- #18 (same-density stacking)
- #19, #20 (meta-prohibitions -- process level)
- #22 (interest concentration)

---

## SUMMARY TABLE: ALL 21 GATES

| # | Gate ID | Name | Tier | Triage | Threshold | Flagship Elevation? | Blocking? |
|---|---------|------|------|--------|-----------|-------------------|-----------|
| 1 | SC-01 | Container Width | T1 | A | 940-960px | No | YES |
| 2 | SC-02 | Soul Properties | T1 | B | radius:0, shadow:none | No | YES |
| 3 | SC-03 | Font Trinity | T1 | B | 3 allowed fonts only | No | YES |
| 4 | SC-04 | Warm Palette | T1 | B | R >= G >= B | No | YES |
| 5 | SC-05 | No Pure Extremes | T1 | B | No #000 or #FFF | No | YES |
| 6 | SC-06 | ARIA Landmarks | T1 | B | >= 5 (Flagship) | YES (3->5) | YES |
| 7 | SC-07 | Skip Link | T1 | B | Present | No | YES |
| 8 | SC-08 | Component Library | T1 | B | >= 8 types (Flagship) | YES (3->8) | YES |
| 9 | SC-09 | Background Delta | T1 | A | >= 15 RGB (or texture path) | No | YES |
| 10 | SC-10 | Stacked Gap | T1 | A | <= 108px | No | YES |
| 11 | SC-11 | Typography Zones | T1 | A | >= 10px + 3 zones (Flag) | YES (2px->10px+3z) | YES |
| 12 | SC-12 | Zone Count | T1 | A | 3-5 (Flagship) | YES (2-5->3-5) | YES |
| 13 | SC-13 | Multi-Coherence | T1 | A | >= 3/boundary, avg >= 4 | YES (avg>=4) | YES |
| 14 | SC-14 | Sub-Perceptual | T1 | A | No ls<0.02em, no bg 1-14 | No | YES |
| 15 | SC-15 | Border Presence | T1 | A | >= 3 distinct configs | YES (1->3) | YES |
| 16 | SC-13B | Direction Coherence | T1 | A | >= 50% boundaries coherent | N/A | ADVISORY |
| 17 | SC-16 | Monotonic Progress | T1 | A | >= 1 monotonic property | N/A | ADVISORY |
| 18 | DG-1 | Fractal Echo Table | T2 | A | 5 rows, evidence, direction | No | YES |
| 19 | DG-2 | Cascade Value Table | T2 | A | All boundaries, cross-val | No | YES |
| 20 | DG-3 | Landmark Complete | T1 | B | header+main+footer | No | YES |
| 21 | DG-4 | Handoff Validation | T1 | A | 5 sub-checks on YAML | No | YES |

**Totals: 15 Tier 1 + 4 Tier 2 + 2 Tier 3 = 21 gates**
**Blocking: 17 blocking + 2 advisory + 2 behavioral = 21 gates**
**Flagship elevations: 6 gates**

---

**END OF GATE RESEARCH EXTRACTION**

**Key numbers for the gate-runner section of the master prompt:**
- 21 total gates (15 T1 + 4 T2 + 2 T3)
- 17 blocking + 2 advisory + 2 behavioral
- 6 Flagship threshold elevations
- 4 micro-gate checkpoints during build (~2 min total)
- 1 full gate run after build (~15 sec)
- Max 2 re-runs per micro-gate, max 3 fix cycles on full run
- Gates catch ~26% of compositional quality; PA catches ~74%
- Gate-to-PA handoff is ONE-WAY (gates filter, PA judges)
- Every gate failure generates structured JSON fix recipe with specific CSS
