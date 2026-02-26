# Compliance Audit: Worked Examples Artifact

**Artifact:** `ephemeral/va-extraction/artifact-worked-examples.md` (182 lines)
**Audited Against:** Fresh Pipeline v3 run (2026-02-23, Gas Town VA extraction)
**Auditor:** audit-examples agent
**Verdict:** PARTIALLY FOLLOWED — patterns structurally adopted, quality exceeded in most areas

---

## 1. Were the Worked Examples Actually Referenced?

**Assessment: INDIRECT REFERENCE — structurally followed, not explicitly cited.**

There is no explicit evidence in the content map, execution brief, or gate results that the worked examples document was loaded as a reference file during the fresh run. The artifacts do not cite "worked examples" or reference the artifact path. However, the structural patterns are clearly followed:

- Content Map follows the exact same 7-section structure (Classification, Mode, Zone Architecture, Tensions, Metaphor Seeds, Density Arc, Reader Profile)
- Execution Brief follows the exact 4-tier structure (Identity, Perception Physics, Compositional Frameworks, Disposition)
- Gate Runner follows the GR-XX naming convention (as noted in the worked example: "the enriched gate runner now uses GR-XX")

This suggests the worked examples were either: (a) embedded in the pipeline's prompt/template infrastructure so the agent inherited the patterns without directly reading the artifact, or (b) the pipeline spec itself encodes these structures and the worked examples simply document what the spec already requires.

**Conclusion:** The worked examples describe patterns that ARE followed, but the artifact itself may not have been the mechanism by which they were transmitted. The pipeline's own templates/specs likely encode the same structure.

---

## 2. Content Map Comparison

### Worked Example Content Map vs Fresh Run Content Map

| Dimension | Worked Example (Example 1) | Fresh Run | Match? |
|-----------|---------------------------|-----------|--------|
| Section count | 7 sections | 7 sections | YES |
| Word count | ~8,500 | ~5,800 | DIFFERS (same content, different measurement) |
| Classification | MIXED, HIGH heterogeneity, HIGH metaphor viability | MIXED, HIGH heterogeneity, HIGH metaphor viability | YES |
| Mode | COMPOSED | COMPOSED | YES |
| Zone count | 6 | 6 | YES |
| Zone names | Manifesto / Factory / Hierarchy / Memory / Principles+Waves / Cookbook | The Shift / Factory Floor / Nervous System / Operating Principles / Assembly Line / Decision Room | DIFFERS (see below) |
| Tensions | 4 tensions, #2 metaphor-shaping | 4 tensions, #1 metaphor-shaping | DIFFERS (see below) |
| Metaphor seeds | 3 seeds, Factory recommended | 3 seeds, Refinery recommended | SIMILAR (Refinery is a refinement of Factory) |
| Density arc | CRESCENDO + RELEASE | WAVE | DIFFERS |
| Reader profile | Axis positions as numbers (75-80%) | Axis positions as X/5 ratings | FORMAT DIFFERS, content similar |

### Quality Assessment

**The fresh run content map EXCEEDS the worked example quality in most dimensions:**

1. **Element inventory** — Fresh run adds explicit counts: "14 ASCII architecture diagrams, 12 tables, 18 code blocks (bash), 22 blockquotes." Worked example omits this.

2. **Mode determination justification** — Fresh run provides richer justification: "it has narrative arc (philosophy -> architecture -> implementation -> decision), emotional peaks (Yegge quotes), and a clear protagonist shift (reader transforms from programmer to factory manager)." Worked example states the conclusion without this narrative analysis.

3. **Zone architecture** — Fresh run adds Pacing and Direction columns with richer descriptions (e.g., "ENTRY -- orientation + philosophy + core metaphor" vs just "BREATHING / OPENING"). The worked example ALSO has these columns, so this is parity, not improvement.

4. **Tension analysis** — Fresh run tension #1 (Chaos vs Control) is more analytically precise: "Pole A dominant in philosophy; Pole B dominant in architecture." The worked example's version says "Pole A dominant" without distinguishing where each pole dominates.

5. **Metaphor seeds** — Fresh run develops CSS directions more concretely: "industrial materials (steel borders, pipeline connectors between sections), heat gradients (cool planning zones to hot execution zones), pressure gauges (density indicators)." Worked example is similarly detailed.

6. **Reader profile** — Fresh run adds Entry state and Exit state fields absent from worked example. Also adds Entry Velocity axis (2/5 with justification). More complete.

**Deficiencies relative to worked example:**
- The worked example's "What could be improved" section notes missing per-section character vocabulary, transition weights, and content inventory. The fresh run STILL does not include per-section character vocabulary or word counts per section. This suggests the worked example's self-critique was not actioned.

---

## 3. Execution Brief Comparison

### Worked Example Brief Description vs Fresh Run Brief

| Dimension | Worked Example Description | Fresh Run | Match? |
|-----------|---------------------------|-----------|--------|
| Tier count | 4 tiers | 4 tiers | YES |
| Tier 1 content | "10 soul constraints as world-description" | 10 paragraphs of world-description | YES |
| Tier 2 content | "5 perception thresholds as natural laws with calibration ranges" | 5 threshold descriptions with ranges | YES |
| Tier 3 content | Multi-coherence, metaphor, density arc, content-form, creative authority | All present + CSS value table | YES (fresh run adds more) |
| Tier 4 content | "All 8 dispositions with content-specific observations" | 8 dispositions (D-01 through D-08) | YES |
| Content Map appended | Yes (noted) | Yes (as appendix) | YES |
| Line count | 165 lines (noted as exceeding 93-113 target) | 173 lines (exceeds further) | CONSISTENT (both exceed target) |

### Quality Assessment

**The fresh run brief is SIGNIFICANTLY richer than what the worked example describes:**

1. **Multi-coherence detail** — The fresh run provides boundary-by-boundary descriptions for all 5 zone transitions with specific RGB values, typography changes, spacing shifts, and emotional characterization. Example: "Z1->Z2 = HEAVY transition. Background shifts from warm cream (#FEF9F5) to a deeper sand (#EDE6DA, delta ~27). Typography compresses: body drops from 18px to 16px..." This level of specificity is not visible in the worked example's description (which only summarizes the brief's characteristics).

2. **Structural metaphor** — Fresh run provides 6 CSS custom property names (`--refinery-intake`, `--refinery-floor`, etc.) with semantic justification plus 3 extension properties. Deeply specific.

3. **Disposition entries** — Each D-XX entry in the fresh run includes specific CSS values, zone-specific guidance, and content-aware observations. D-04 (Second-Half Moment) specifies exact pull-quote sizing (32-36px) and a dark inversion block with color property references. D-06 (Negative Space) gives per-zone padding-top values (80px -> 64px -> 48px -> 48px -> 32px -> 48px).

4. **CSS Value Table** — Fresh run adds a summary section with token references, CSS line budget (800-1200), layout diversity requirements (single-column must not exceed 60% of zones), and component library targets (10+). This section is NOT mentioned in the worked example.

**The worked example undersells the brief.** The Example 2 section is only 14 lines of description rather than showing actual brief content. This is the weakest section of the worked examples artifact (see Section 6 below).

---

## 4. Gate Results Comparison

### Worked Example Gate Excerpt vs Fresh Run Gate Results

| Dimension | Worked Example (Example 3) | Fresh Run | Match? |
|-----------|---------------------------|-----------|--------|
| Naming convention | SC/PT (noted as old convention) | GR-XX (enriched convention) | EVOLVED (as predicted) |
| Gate coverage | 14 of 42 gates (33%) | 18+ gates across 3 categories | IMPROVED |
| MANUAL gates | 4 (SC-07, SC-09, SC-10) | 0 MANUAL | IMPROVED |
| Identity results | 10 PASS, 0 FAIL | 9 PASS, 1 FAIL (cold color) | SIMILAR |
| Perception results | All PASS | 3 PASS, 2 FAIL | WORSE |
| Background colors | 6 zones listed | 6 zones listed | YES |
| Anti-pattern gates | Not in worked example | 3 gates (2 PASS, 1 FAIL) | NEW CATEGORY |
| Screenshot inventory | Not in worked example | 55 screenshots across 3 viewports | NEW |
| Overall verdict | Not explicitly stated | REFINE | NEW |

### Quality Assessment

**The fresh run gate results are STRUCTURALLY IMPROVED but show more failures:**

1. **Gate coverage** — The worked example's 33% coverage has been addressed. The fresh run covers Identity (10 gates), Perception (5 gates), and Anti-Pattern (3 gates) = 18 gates. Still not 42, but the enriched gate runner has automated what were previously MANUAL checks.

2. **Zero MANUAL gates** — The worked example had 4 MANUAL-tagged gates. The fresh run has zero. This confirms the enriched gate runner addressed the known defect.

3. **More failures detected** — The fresh run finds GR-05 (cold color), GR-11 (two BG deltas below 15), GR-14 (318px visual gap), and GR-17 (density stacking). The worked example's run had 10 PASS, 0 FAIL on identity. Either the old run had different CSS or the new gate runner is more rigorous.

4. **Actionable fix recommendations** — The fresh run includes a "Fixes Needed" section with 4 specific items. The worked example does not include this pattern.

5. **Background deltas** — The worked example flagged Z4-Z5 at 17 RGB (barely above threshold). The fresh run flags Z2-Z3 at 11 and Z3-Z4 at 8 (below threshold). The SAME pattern of borderline deltas appears, suggesting this is a systemic issue in how zone backgrounds are chosen relative to each other — not random but architecturally predictable.

**The worked example's gate annotation ("gate coverage was 33%, a known defect") was accurate and the defect was partially addressed.** The fresh run has better coverage, automated MANUAL gates, and more rigorous failure detection.

---

## 5. Pattern Compliance Summary

| Worked Example Pattern | Followed? | Evidence |
|------------------------|-----------|----------|
| 7-section Content Map structure | YES | Exact same 7 sections |
| COMPOSED mode for high heterogeneity + high metaphor viability | YES | Same logic, same conclusion |
| 6-zone architecture with table format | YES | Same structure, richer content |
| Content tensions as novel analysis | YES | 4 tensions in both, different #1 |
| 3 metaphor seeds with risk ratings | YES | Same pattern, Refinery instead of Factory |
| Density arc with ASCII diagram | YES | Same format, WAVE instead of CRESCENDO+RELEASE |
| 4-tier execution brief structure | YES | All 4 tiers present |
| 10 soul constraints as world-description prose | YES | Exact match to pattern |
| 5 perception thresholds with calibration ranges | YES | Exact match to pattern |
| 8 dispositions with content-specific observations | YES | All 8 present with specific guidance |
| GR-XX gate naming convention | YES | Adopted as predicted |
| Background color zone table | YES | Same format |
| Perceptual language in PA reports | N/A | PA reports not included in scope |

**Overall pattern compliance: 12/12 assessed patterns FOLLOWED.**

---

## 6. Artifact Usefulness Assessment

### What the Artifact Does Well

1. **Content Map example is excellent.** The full 60-line content map with annotations about what makes it good AND what could be improved is highly calibratable. A fresh instance can see the exact format, level of detail, and analytical depth expected.

2. **Gate result annotations are valuable.** The worked example's notes about known defects (33% coverage, MANUAL gates, Z4-Z5 delta barely passing) are exactly what a fresh instance needs to understand expected failure modes vs unexpected ones.

3. **PA excerpt selection is instructive.** Choosing Auditor C's multi-coherence analysis — which uses perceptual language, references specific zones, and identifies the dominant defect — teaches the auditor voice effectively.

4. **Self-critique sections are honest.** The "What could be improved" notes on the content map and the "known defect" annotations on gate results show intellectual honesty rather than presenting the worked example as perfect.

### What the Artifact is Missing

1. **Execution Brief example is SEVERELY UNDERDEVELOPED.** Example 2 is only 14 lines of description. It says "See the full 165-line brief at: `ephemeral/pages/gas-town-va-pipeline/_execution-brief.md`" — but this is a worked examples artifact, not a pointer artifact. The fresh instance needs to see at least 30-50 lines of the actual brief to calibrate quality. As it stands, the brief section tells a fresh instance WHAT should be in a brief but not HOW it should read. This is the artifact's biggest gap.

2. **No diff between "good" and "bad" examples.** All examples are from one run rated PA-05 3/4. A fresh instance cannot calibrate what "bad" looks like. Even one counter-example (e.g., a content map that MISSED tensions, or a brief with generic dispositions) would dramatically improve calibration.

3. **No guidance on DEVIATIONS.** The worked example documents what happened but not which deviations from the template are acceptable. The content map is 66 lines vs 30-50 target — is this good or bad? The brief is 165 lines vs 93-113 target — the artifact says "the target should be treated as advisory" but doesn't explain when exceeding is warranted vs when it signals bloat.

4. **Zone naming divergence is unexplained.** The worked example shows zone names like "The Manifesto" / "The Factory" / "The Hierarchy" while the fresh run uses "The Shift" / "The Factory Floor" / "The Nervous System." Both are for the SAME content. A worked examples artifact should explain what drives zone naming decisions and why different runs of the same content produce different names.

5. **No builder-side examples.** The artifact covers Phase 0 (content map), Phase 1 (brief), Phase 3A (gates), and Phase 3B (PA). It has ZERO coverage of Phase 2 (the actual HTML/CSS build). A fresh instance cannot calibrate build quality, mechanism density, or CSS structure from this artifact.

6. **Missing artifact interdependency guidance.** How should the brief USE the content map? How should the gate runner INTERPRET brief-driven intentional violations (like the D-04 dark inversion block that caused GR-14 to fail)? The linkages between phases are invisible.

### Utility Rating

**3/5 — Useful for structure calibration, insufficient for quality calibration.**

The artifact successfully teaches a fresh instance WHAT each pipeline phase produces and what FORMAT to expect. It fails to teach HOW GOOD each output should be, what deviations are acceptable, or what failure looks like. The brief example (Example 2) is particularly weak — 14 lines of description cannot calibrate a 165-line output.

---

## 7. Recommendations

1. **Expand Example 2** to include at least the Tier 3 multi-coherence section in full. This is the richest, most calibration-sensitive section of the brief.

2. **Add a counter-example** for at least one phase. Show a content map that produced a FUNCTIONAL mode determination and explain why it's worse than COMPOSED.

3. **Add a Phase 2 example** — even a 20-line CSS excerpt with annotations showing mechanism deployment, metaphor expression, and zone differentiation.

4. **Document acceptable deviation ranges** — e.g., "Content map: 40-80 lines (below 40 = underspecified, above 80 = verbose). Brief: 100-180 lines effective range."

5. **Add interdependency notes** — "The brief's D-04 (Second-Half Moment) authorized a dark inversion block. When the gate runner flags this as GR-14 FAIL, the REFINE verdict should note it as INTENTIONAL. Briefs that authorize deviations should be cross-referenced during gating."
