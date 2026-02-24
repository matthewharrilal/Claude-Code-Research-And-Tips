# Cross-Run Comparison: Previous Gas Town Build vs Fresh Run

**Date:** 2026-02-23
**Analyst:** comparator (Opus)
**Previous run:** `ephemeral/pages/gas-town-va-pipeline/output.html` (pre-enrichment pipeline)
**Fresh run:** `ephemeral/pages/yegge-gas-town-extraction/yegge-gas-town.html` (post-enrichment pipeline)

---

## 1. HTML Size and Scale

| Metric | Previous Run | Fresh Run | Delta |
|--------|-------------|-----------|-------|
| **Total lines** | 2,045 | 2,767 | +722 (+35%) |
| **File size** | 73 KB | 101 KB | +28 KB (+38%) |
| **CSS lines** (inside `<style>`) | 1,264 | 1,687 | +423 (+33%) |
| **HTML body lines** (approx) | 781 | 1,080 | +299 (+38%) |
| **CSS rule blocks** (closing `}` count) | 181 | 230 | +49 (+27%) |
| **Class attribute instances** | 302 | 394 | +92 (+30%) |

**Assessment:** The fresh run is substantially larger across every dimension -- ~35% more total content, ~33% more CSS. This is a meaningful increase that suggests the enrichments pushed the builder toward more elaborate structural work.

---

## 2. CSS Sophistication

### Custom Properties (Metaphor Encoding)

| Feature | Previous Run | Fresh Run |
|---------|-------------|-----------|
| **Metaphor token namespace** | `--factory-*` (6 zone backgrounds, 5 accent tones) | `--refinery-*` (6 zone bgs) + `--pipeline-connector` + `--pressure-indicator` + `--gauge-reading` |
| **Concept-named custom props** | 11 (`--factory-intake`, `--factory-workshop`, `--factory-floor`, `--factory-archive`, `--factory-output`, `--factory-dispatch`, `--factory-steel`, `--factory-rust`, `--factory-brass`, `--factory-copper`, `--factory-chrome`) | 9 (`--refinery-intake`, `--refinery-floor`, `--refinery-tank`, `--refinery-control`, `--refinery-line`, `--refinery-dispatch`, `--pipeline-connector`, `--pressure-indicator`, `--gauge-reading`) |
| **Border hierarchy tokens** | `--border-town`, `--border-rig`, `--border-worker` (metaphor-named) | `--border-structural`, `--border-accent`, `--border-micro` (function-named) |
| **Syntax highlighting vars** | 6 | 6 (identical) |

**Assessment:** Both runs use concept-named custom properties, a key COMPOSED indicator. The previous run had slightly more accent tones (5 vs 3 structural tokens), but the fresh run introduces `--pipeline-connector`, `--pressure-indicator`, and `--gauge-reading` which are structural metaphor tokens that extend beyond simple color aliases. The previous run named borders by metaphor (town/rig/worker); the fresh run names by function (structural/accent/micro). Both approaches are valid; the metaphor naming is arguably more composed.

### Grid Layouts

| Feature | Previous Run | Fresh Run |
|---------|-------------|-----------|
| **Grid declarations** | 1 (role-grid only) | 6 (TOC, role-grid, factory-comparison, decision-split, sources-grid, recovery-grid) |
| **768px responsive stacking** | 1 grid collapses | 6 grids collapse to 1fr |

**Assessment:** MAJOR IMPROVEMENT. The fresh run uses grid layouts 6x more than the previous run. The previous run was fundamentally single-column with one 2-col grid for role cards. The fresh run deploys grids in TOC, roles, comparisons, decisions, sources, and recovery -- each collapsing responsively at 768px. This addresses the "layout stays fundamentally single-column" criticism from the previous PA.

### Responsive Design

| Feature | Previous Run | Fresh Run |
|---------|-------------|-----------|
| **@media queries** | 3 (768px, print, reduced-motion) | 2 (768px, reduced-motion) |
| **Elements modified at 768px** | 5 rules | 10 rules |
| **Print styles** | Yes | No |

**Assessment:** The fresh run has significantly more responsive rules (10 vs 5) and explicitly stacks ALL grid layouts at 768px. It lacks print styles but provides better device adaptation. The previous run's 768px section was flagged as "fluid not responsive" -- the fresh run appears to genuinely reorganize layout at the breakpoint.

### Component Variety

| Component Type | Previous Run | Fresh Run |
|---------------|-------------|-----------|
| **Callout variants** | 5 (default, warning, info, tip, essence) | 6 (+challenge variant) |
| **Table types** | 3 (comparison, waves, dispatch-comparison) | ~4 (profile, comparison, role-communication, checkpoint) |
| **Code block types** | 2 (pre, code-snippet with header) | ~3 (code-block with header, inline, monospace pre) |
| **Diagram types** | 6 (ladder, ascii, hierarchy, comm-flow, memory-layer, decision-flow) | Similar set (ladder-block, architecture diagrams, memory-layer, decision flow) |
| **Special components** | inversion-block, role-card, principle-block, troubleshoot-item, closing-section | inversion-block, role-card, principle-block, pull-quote, decision-split, sources-grid, recovery-grid, checkpoint-block |

**Assessment:** The fresh run has more component variety, particularly in layout components (decision-split, sources-grid, recovery-grid). The previous run had more diagram-specific CSS classes. Both have similar callout systems.

---

## 3. Zone Structure

### Zone Count and Naming

| Zone | Previous Run | Fresh Run |
|------|-------------|-----------|
| **Z1** | `zone-intake` "The Manifesto" (SPARSE) | `zone-intake` "The Shift" (SPARSE) |
| **Z2** | `zone-workshop` "The Workshop" (MODERATE) | `zone-floor` "The Factory Floor" (DENSE) |
| **Z3** | `zone-floor` "The Factory Floor" (DENSE) | `zone-tank` "The Nervous System" (MODERATE) |
| **Z4** | `zone-archive` "The Archive" (MODERATE) | `zone-control` "The Control Room" (MODERATE) |
| **Z5** | `zone-output` "The Output Line" (MODERATE) | `zone-line` "The Assembly Line" (DENSE) |
| **Z6** | `zone-dispatch` "The Dispatch" (DENSE->SPARSE) | `zone-dispatch` "The Dispatch" (MODERATE) |

**Key differences:**
1. The fresh run uses MORE EVOCATIVE zone names ("The Shift", "The Nervous System", "The Control Room", "The Assembly Line") vs the previous run's more literal names ("The Manifesto", "The Workshop", "The Archive", "The Output Line").
2. The density arc is DIFFERENT: Previous = SPARSE->MODERATE->DENSE->MODERATE->MODERATE->DENSE, Fresh = SPARSE->DENSE->MODERATE->MODERATE->DENSE->MODERATE. The fresh run has a WAVE pattern (two peaks) vs the previous run's CRESCENDO pattern (one peak). The wave pattern has two density peaks (Z2 and Z5) with valleys between them -- better cognitive recovery.
3. The fresh run explicitly marks transition types in class names: `transition-heavy`, `transition-medium`, `transition-light`. These appear to be CSS classes on zone sections, directly encoding the multi-coherence boundary map from the execution brief.

### Boundary Implementation

| Boundary | Previous Run | Fresh Run |
|----------|-------------|-----------|
| **Z1->Z2** | 3px border, bg shift 21 RGB | 3px red border, bg shift ~27 RGB, **HEAVY** transition class |
| **Z2->Z3** | 4px border (heaviest on page), bg shift 37 RGB | 3px border, bg shift ~16 RGB, **MEDIUM** transition class |
| **Z3->Z4** | 3px border, bg shift 17 RGB | 1px border + 48px gap, bg shift ~16 RGB, **LIGHT** transition class |
| **Z4->Z5** | 1px border (weakest -- THE universal weak link), bg shift 22 RGB | 4px red border, bg shift ~29 RGB, **HEAVY** transition class |
| **Z5->Z6** | 3px border, bg shift varies | 3px border, bg shift ~19 RGB, **MEDIUM** transition class |

**Assessment:** SIGNIFICANT IMPROVEMENT on the Z4->Z5 boundary. In the previous run, this was flagged by 7/9 auditors as the weakest transition (1px border, barely above 15 RGB threshold). The fresh run makes Z4->Z5 a HEAVY transition with 4px red border and 29 RGB delta -- it went from the weakest to one of the strongest boundaries. The fresh run also introduces the concept of explicitly typed transitions (heavy/medium/light), directly implementing the multi-coherence framework from the execution brief.

---

## 4. Gate Results Comparison

### Identity Gates

| Gate | Previous Run | Fresh Run | Change |
|------|-------------|-----------|--------|
| GR-01 Border Radius Zero | PASS | PASS | Same |
| GR-02 Box Shadow None | PASS | PASS | Same |
| GR-03 Container 940-960px | PASS (960px) | PASS (960px) | Same |
| GR-04 No Gradients | PASS | PASS | Same |
| GR-05 Warm Palette | PASS | **FAIL** (98 cold colors) | **REGRESSION** |
| GR-06 Font Trinity | PASS | PASS* | Same |
| GR-07 Header DNA | PASS | PASS | Same |
| GR-08 Border Hierarchy | PASS | PASS | Same |
| GR-09 Typography | PASS | PASS | Same |
| GR-10 Accessibility | PASS | PASS | Same |

Previous: **10 PASS**, Fresh: **9 PASS, 1 FAIL**

**GR-05 Regression Analysis:** The previous run had no cold color violations. The fresh run has `rgb(74,144,217)` on `.role-card__level` elements -- 98 violations. This is a cold blue color (#4A90D9) that exists in the previous run's palette as `--accent-blue` but the previous builder used it sparingly on `.role-card__model` badges. The fresh run's `--accent-blue` is actually redefined to `#A07D50` (warm brownish) in the CSS custom properties, but the role card level elements appear to be using the old cold blue value directly. This is likely a builder error where the accent-blue token was redefined but not all usages were updated.

### Perception Gates

| Gate | Previous Run | Fresh Run | Change |
|------|-------------|-----------|--------|
| GR-11 BG Delta >= 15 | PASS (all 5 boundaries pass) | **FAIL** (Z2->Z3: 11, Z3->Z4: 8) | **REGRESSION** |
| GR-12 Letter Spacing | PASS | PASS | Same |
| GR-13 Stacked Gap <= 120px | PASS | PASS (max 112px) | Same |
| GR-14 Visual Gap <= 150px | N/A (not in prev gates) | **FAIL** (318px Z5->Z6) | New gate, new failure |
| GR-15 Single Margin <= 96px | MANUAL | PASS | Improvement |

Previous: **4 PASS, 0 FAIL**, Fresh: **3 PASS, 2 FAIL**

**GR-11 Regression Analysis:** The previous run had ALL background deltas above 15 (21, 31, 37, 17, 22). The fresh run has two failures: Z2->Z3 at 11 RGB points and Z3->Z4 at 8 points. This is directly related to the fresh run's WAVE density pattern -- Z3 ("The Nervous System") sits between two moderate zones and needs to be perceptually distinct from both. The execution brief specified these deltas (Z2->Z3 delta ~16, Z3->Z4 delta ~16) but the builder undershot them.

**GR-14 (New Gate):** This gate (Visual Gap <= 150px) did not exist in the previous run's gate set. The 318px gap is the D-04 dark inversion block positioned between Z5 and Z6. This is an intentional dramatic moment, but the gate correctly flags it as a structural concern.

### Anti-Pattern Gates

| Gate | Previous Run | Fresh Run | Change |
|------|-------------|-----------|--------|
| GR-17 Density Stacking | N/A | **FAIL** (262 violations) | New gate, new failure |
| GR-18 Ghost Mechanisms | N/A | PASS | New gate |
| GR-20 Structural Echo | N/A | PASS | New gate |

**Assessment:** The anti-pattern gates are new to the fresh run. GR-17 flags table cells at 8px padding, which is a common dense-data pattern. GR-18 (ghost mechanisms) and GR-20 (structural echo) both pass, meaning the fresh run has no CSS rules without rendered elements and no excessive visual repetition.

### Gate Summary

| Category | Previous Run | Fresh Run |
|----------|-------------|-----------|
| Identity | 10 PASS / 0 FAIL (4 MANUAL) | 9 PASS / 1 FAIL |
| Perception | 4 PASS / 0 FAIL (1 MANUAL) | 3 PASS / 2 FAIL |
| Anti-Pattern | N/A | 2 PASS / 1 FAIL |
| **Total** | **14 PASS / 0 FAIL** | **14 PASS / 4 FAIL** |

**The fresh run has MORE gate failures, but this is misleading.** The fresh run's gate runner is significantly more rigorous: it includes 4 new gates (GR-14, GR-17, GR-18, GR-20), runs more checks, and produces a more detailed report. The previous run had 4 "MANUAL" gates that were not programmatically assessed and would likely have revealed issues if they had been.

---

## 5. PA-05 Scores

**Both runs score PA-05: 3/4 COMPOSED.** However, the evidence and sub-scores differ significantly.

### Previous Run PA (Mode 4: 9 auditors, 46 questions)

| Sub-Criterion | Rating | Key Evidence |
|---------------|--------|-------------|
| DESIGNED | Strong | Factory metaphor is structural; density arc tracks content; multiple channels shift at boundaries |
| COHERENT | Strong | One designer; consistent vocabulary throughout |
| PROPORTIONATE | Strong | Well-defined column; generous margins |
| POLISHED | Moderate | Post-footer void; Z3 pure white violation; inline style attributes |

**Grand score: 174/200 (87.0%)** across 40 scored questions from 8 specialist auditors.
**Lowest auditor:** H (Spatial) at 19/25
**Highest auditor:** E (Content) at 24/25
**Score distribution:** 16 questions at 5/5 (40%), 22 at 4/5 (55%), 2 at 3/5 (5%)

### Fresh Run PA (Mode 4: 9 auditors, ~48 questions)

| Sub-Criterion | Rating | Key Evidence |
|---------------|--------|-------------|
| DESIGNED | Strong | Zone structure creates narrative arc; interstitial pivot; role card grid; complexity ladder |
| COHERENT | Strong | One designer; consistent vocabulary: serif italic headings, colored-border blockquotes, dark code panels |
| PROPORTIONATE | Strong | Content in well-defined column (~65-70% viewport at 1440px); dark/light alternation |
| POLISHED | High with critical defect | Clean typography, proper syntax highlighting. Trailing whitespace void (~5 viewports) is a shipping defect. |

**Key findings from fresh PA:**
- 9/9 auditors flagged trailing whitespace void (5 viewport-heights of blank after footer)
- 6/9 flagged Zone 4 Core Principles monotony (6 identical blockquotes)
- 4/9 flagged code block saturation in Zone 5
- 4/9 flagged sub-perceptual background deltas between light zones

### PA-05 Comparison

| Dimension | Previous Run | Fresh Run | Assessment |
|-----------|-------------|-----------|-----------|
| Zone naming/metaphor | Factory-named zones (structural) | Refinery-named zones (structural) | **Fresh slightly stronger** — more evocative names, transition types encoded |
| Density arc | CRESCENDO (single peak at Z3) | WAVE (two peaks at Z2, Z5) | **Fresh stronger** — two peaks with recovery valleys is better pacing |
| Multi-coherence | ~4-5 channels per boundary | Explicit 3-type transition system (heavy/medium/light) | **Fresh stronger** — systematized boundary treatment |
| Layout variety | Single-column + 1 grid | Single-column + 6 grids | **Fresh much stronger** — 6x grid usage |
| Critical defect | Post-footer void (fix: `html { background: var(--color-text) }`) | Trailing whitespace void (~5 viewports blank) | **Similar** — both have a void defect, fresh run's is larger |
| Warm palette compliance | Clean (PASS) | 98 cold color violations (FAIL) | **Previous stronger** — fresh has a palette regression |
| BG delta compliance | All above 15 RGB | 2 zones below 15 RGB | **Previous stronger** — fresh has perceptibility regression |

### Why Both Get 3/4

Both pages achieve COMPOSED through:
1. Structural metaphor (factory/refinery) that maps to CSS, not just labels
2. Multi-coherence boundary treatment (multiple channels shifting simultaneously)
3. Density arc that tracks content register (narrative -> reference -> code)
4. Consistent visual vocabulary throughout

Both fail to reach DESIGNED (4/4) because:
1. Shipping defects (void/whitespace issues)
2. Insufficient zone background differentiation in the light-cream range
3. Layout, while improved in the fresh run, still relies predominantly on single-column

---

## 6. Tier 5 Scores

### Previous Run: No Tier 5 Questions

The previous run used the 48-question PA framework but did **NOT** include Tier 5 questions (PA-60 through PA-77). These were added to the framework between runs.

### Fresh Run: Tier 5 = 6/9

| Question | Score | Summary |
|----------|-------|---------|
| PA-60 (3+ design moments) | YES | 5 moments identified |
| PA-61 (Independent rhythm channels) | YES | 3 channels confirmed |
| PA-62 (Both dramatic and quiet transitions) | YES | Three tiers deployed |
| PA-63 (Component echo + adaptation) | YES | Role cards echo page labels |
| PA-64 (Deliberate plainness) | NO | No evidence of conscious restraint |
| PA-65 (Music metaphor) | YES | Small jazz quartet |
| PA-66 (Different gaps feel different) | YES | 3+ flavors confirmed |
| PA-67 (Novelty/invention) | PARTIAL->NO | Inventive editorially, conventional visually |
| PA-68 (Metaphor persists across all thirds) | NO | Bottom third drops to ~25% expression |

**Assessment:** 6/9 is a solid score for a first Tier 5 assessment. The two clear failures (PA-64 deliberate plainness, PA-68 metaphor persistence across all thirds) identify specific gaps: the builder doesn't know how to make a section deliberately plain as a compositional choice, and the refinery metaphor fades in the bottom third where the content becomes implementation-focused.

---

## 7. Defect Profiles

### Previous Run Defects (from PA + Master Retrospective)

| # | Issue | Severity | Auditor Count |
|---|-------|----------|---------------|
| 1 | Z4-Z5 boundary is universal weak link | BLOCKING | 7/9 |
| 2 | Warm cream zone blending (Z1/Z4/Z5) | SIGNIFICANT | 4/9 |
| 3 | Z3 pure white background (#FFFFFF) | SIGNIFICANT | 2/9 |
| 4 | Post-footer void (trailing cream) | SIGNIFICANT | 1/9 (H only) |
| 5 | Inline style attributes | MINOR | 1/9 |
| 6 | Factory metaphor text-dependent | MODERATE | 2/9 |

### Fresh Run Defects (from PA + Verdict)

| # | Issue | Severity | Auditor Count |
|---|-------|----------|---------------|
| B1 | Trailing whitespace void (~5 viewports) | BLOCKING | 9/9 |
| B2 | Cold color on role card level labels | BLOCKING | Gate |
| S1 | Zone 4 Core Principles monotony | SIGNIFICANT | 6/9 |
| S2 | Background deltas below threshold (Z2-Z3, Z3-Z4) | SIGNIFICANT | 4/9 |
| S3 | 768px lacks responsive breakpoints | SIGNIFICANT | 3/9 |
| S4 | Z5-Z6 visual gap = 318px | SIGNIFICANT | Gate |
| M1 | Quote section border colors lack semantic discipline | MODERATE | 2/9 |
| M2 | Implementation Guide code block saturation | MODERATE | 4/9 |
| M3 | Recovery commands lack danger hierarchy | MODERATE | 1/9 |
| M4 | Metaphor fades in bottom third | MODERATE | 3/9 |
| M5 | Table cells at 8px padding (density stacking) | MODERATE | Gate |

### Comparison

**SAME issues across runs:**
- Background delta problems (cream zone blending) -- both runs struggle with the narrow warm-cream palette
- Post-footer/trailing void -- both runs have a whitespace defect at the bottom
- Metaphor fading in later zones -- both runs lose metaphor expression toward the end

**FIXED from previous run:**
- Z4-Z5 boundary weakness: FIXED (was 7/9 BLOCKING, now a HEAVY transition with 4px border + 29 RGB delta)
- Z3 pure white background: FIXED (changed from #FFFFFF to #F5EFE5, a warm near-white)
- Inline style attributes: MOSTLY FIXED (fresh run uses proper CSS classes)

**NEW issues in fresh run:**
- Cold color regression (GR-05): new failure, 98 cold color violations on role card level labels
- Zone 4 Core Principles monotony: not flagged in previous run (may be a content structure difference)
- Z5-Z6 318px visual gap: caused by the D-04 inversion block placement
- Code block saturation in Zone 5: new pattern (more code blocks in implementation zone)

---

## 8. Content Map Quality Comparison

| Dimension | Previous Run | Fresh Run |
|-----------|-------------|-----------|
| **Word count estimate** | ~8,500 words | ~5,800 words |
| **Content classification** | MIXED (HIGH heterogeneity, HIGH metaphor viability) | MIXED (HIGH heterogeneity, HIGH metaphor viability) |
| **Mode determination** | COMPOSED | COMPOSED |
| **Zone count** | 6 | 6 |
| **Tension analysis** | 4 tensions identified, #2 (Individual vs Colony) metaphor-shaping | 4 tensions identified, #1 (Chaos vs Control) metaphor-shaping |
| **Metaphor seeds** | 3 seeds, recommended Industrial Factory | 3 seeds, recommended The Refinery |
| **Reader profile** | Expert (75-80%), Info Density HIGH | Stage 7+, Info Density 4/5, Entry Velocity 2/5 |
| **Density arc** | CRESCENDO + RELEASE | WAVE (two peaks with valleys) |
| **Element inventory** | Lists 7+ element types | Lists specific counts: 14 ASCII diagrams, 12 tables, 18 code blocks, 22 blockquotes |

**Assessment:** The fresh run content map is MORE DETAILED in several dimensions:
1. **Specific element inventory** (counts per type) vs the previous run's qualitative description
2. **Reader axis positions** (5 numeric axes: Info Density 4/5, Visual Complexity 3/5, etc.) vs the previous run's qualitative description
3. **Entry state/exit state** framing (what the reader knows before and after) -- not present in previous
4. **Density arc with ASCII visualization** -- the fresh run includes an ASCII chart showing the wave pattern
5. **Metaphor-shaping tension** is different: previous = #2 Individual vs Colony, fresh = #1 Chaos vs Control. Both are valid; the fresh choice arguably maps better to the refinery metaphor (taming volatile inputs).
6. **Word count is lower** in the fresh run (5,800 vs 8,500) -- this may indicate the content was trimmed or differently scoped

The fresh content map is a clear improvement in specificity and structure.

---

## 9. Execution Brief Quality Comparison

| Dimension | Previous Run | Fresh Run |
|-----------|-------------|-----------|
| **Tier structure** | 4 tiers (Identity, Perception Physics, Compositional Frameworks, Disposition) | 4 tiers (same) |
| **Identity rules** | 10 constraints | 10 constraints (identical wording) |
| **Perception thresholds** | 5 thresholds | 5 thresholds (identical values) |
| **Multi-coherence** | 6 channels, 4 directions, boundary-by-boundary guidance | 6 channels, boundary-by-boundary guidance WITH specific RGB deltas per boundary |
| **Boundary map specificity** | General ("Z2->Z3 shifts...3 channels") | EXTREMELY SPECIFIC per boundary (e.g., "Z1->Z2: background shifts from #FEF9F5 to #EDE6DA, delta ~27. Typography compresses: body drops from 18px to 16px, line-height from 1.8 to 1.7") |
| **Disposition count** | 8 (D-01 through D-08) | 8 (D-01 through D-08, same categories) |
| **D-04 (Second-Half Moment)** | Generic techniques listed | SPECIFIC: "dark inversion block in Z5 or Z6 where 'Nature prefers colonies' appears as 32-36px pull quote" |
| **Per-zone height estimates** | Yes (Z1 ~500px to Z6 ~1800px) | Yes, more detailed (Z1 ~700px to Z5 ~2000px) |
| **CSS value table** | General reference | Reference + specific targets (800-1200 CSS lines, 2+ layout patterns, grid in Z2+Z6) |
| **Component targeting** | "Use 8+ component library classes" | Lists 8 specific component classes with zone assignments and modulation guidance |
| **Content-form coupling** | 6 zone descriptions | 6 zone descriptions WITH specific font sizes, line-heights, and layout recommendations per zone |

**Assessment:** The fresh execution brief is SUBSTANTIALLY more specific in three critical areas:

1. **Boundary map with RGB deltas:** The fresh brief specifies exact background colors AND delta values at each boundary. The previous brief said "Z2->Z3 shifts from dense roles to moderate memory" -- the fresh says "Background shifts from #EDE6DA to #F5EFE5, delta ~16. Body drops to 15px." This is the recipe-vs-checklist difference identified in the flagship retrospective.

2. **D-04 with specific content:** The fresh brief names the exact quote ("Nature prefers colonies"), font size (32-36px), and visual treatment (dark inversion) for the second-half moment. The previous brief listed generic techniques.

3. **Content-form coupling with CSS values:** The fresh brief provides specific font sizes and line-heights per zone (Z1: 18px/1.8, Z2: 16px/1.6, Z5: 15px/1.5). The previous brief described registers without CSS values.

This increased specificity is a direct result of the enrichments. It represents a shift from CHECKLIST (what constraints to follow) toward RECIPE (what values to use and why).

---

## 10. Artifact Completeness

| Artifact | Previous Run | Fresh Run |
|----------|-------------|-----------|
| **HTML page** | `output.html` | `yegge-gas-town.html` |
| **Content map** | `_content-map.md` | `content-map.md` |
| **Execution brief** | `_execution-brief.md` | `execution-brief.md` |
| **Gate results** | `_gate-results.md` | `gate-results.md` |
| **Verdict report** | None | `verdict.md` (247 lines) |
| **PA reports** | 9 auditor reports + 7 buddy reviews + master retrospective (18 files) | Referenced in verdict.md |
| **Screenshots** | Referenced in gate results (22 at 1440px) | Referenced (55 total across 3 viewports) |
| **Conviction statement** | Not present as separate artifact | Embedded in HTML comment (lines 1-9) |
| **TOC in page** | No | Yes (13-item navigation with anchor links) |

**Assessment:** The fresh run produces a **verdict report** that the previous run lacked -- a synthesized document with PA-05 score, Tier 5 scores, cross-auditor findings, issue severity classification, contradictions, fix priority list, and projected post-fix scores. This is a significant pipeline improvement.

The fresh run also has a **conviction statement** embedded as an HTML comment at the top of the page -- an explicit declaration of the page's compositional intent. The previous run has no equivalent.

The previous run has MORE PA documentation (18 separate files: 9 auditor reports + 7 buddy reviews + 1 master retrospective) vs the fresh run's consolidated verdict. Both approaches have value; the previous provides more granular evidence while the fresh provides more actionable synthesis.

---

## 11. Enrichment Impact Assessment

18 enrichments were applied between runs. Here is the assessment of each category's visible impact.

### BLOCKING Enrichments (8)

| Enrichment | Visible Impact? | Evidence |
|------------|----------------|----------|
| **1. Gate runner overhaul** | YES | Previous run had 14 gates with 4 MANUAL. Fresh run has 18 gates, all programmatic, including new GR-14 (visual gap), GR-17 (density stacking), GR-18 (ghost mechanisms), GR-20 (structural echo). More rigorous and comprehensive. |
| **2. TC brief template** | YES | Fresh execution brief has boundary-by-boundary RGB deltas, per-zone CSS values, specific component targeting. Previous brief was more general. This is the single most visible enrichment -- the recipe-vs-checklist transformation. |
| **3. Orchestrator rewrite** | PARTIALLY | The fresh run produced more artifacts (verdict report, conviction statement, TOC) and the HTML is 35% larger. However, both runs achieved the same PA-05 score, so the orchestrator changes did not push the score higher. |
| **4. Worked examples** | UNCLEAR | Cannot isolate this enrichment's effect without seeing the builder's input context. |
| **5. Builder recipe CSS values** | YES | The fresh execution brief contains specific CSS values per zone (font sizes, line-heights, border weights, spacing values). The builder used them: Z1 has 18px/1.8 body text exactly as specified, Z2 compresses to 16px/1.6 as specified. This is the enrichment that converts checklist to recipe. |
| **6. Value tables** | YES | The CSS value table section is more detailed in the fresh execution brief. References specific targets (800-1200 CSS lines, 2+ layout patterns). Fresh run landed at 1,687 CSS lines -- above the 800-1200 range but significantly more than the previous 1,264. |
| **7. PA question assignments** | YES | The fresh verdict report shows 9 auditors with specific focus areas and question assignments. The previous run's auditors had similar assignments. This enrichment appears to have been already partially in place. |
| **8. Self-containedness audit** | PARTIALLY | The conviction statement and TOC suggest the page is more self-contained. The conviction statement articulates the design intent explicitly. But the trailing void defect suggests the self-containedness audit did not catch all issues. |

### SIGNIFICANT Enrichments (10 -- various builder recipe and artifact improvements)

| Category | Visible Impact? | Evidence |
|----------|----------------|----------|
| **Boundary map specificity** | YES -- HIGHEST IMPACT | The fresh execution brief specifies exact RGB deltas per boundary (e.g., "Z1->Z2 delta ~27"). The builder responded: Z1->Z2 actually achieved 27 RGB, Z4->Z5 achieved 29 RGB. The Z4->Z5 boundary, which was the previous run's weakest link (7/9 auditors flagged it), is now one of the strongest. |
| **Transition typing (heavy/medium/light)** | YES | The fresh run has CSS classes encoding transition types (`transition-heavy`, `transition-medium`, `transition-light`). Three distinct transition weights are deployed with clear alternation pattern. This was explicitly absent from the previous run. |
| **Zone-specific component modulation** | YES | Callout padding varies: Z1 is generous (20px 24px), Z5 is compressed. Code blocks compress in Zone 5. These modulations were specified in the brief and executed by the builder. |
| **Grid layout targets** | YES | The brief specified "2+ layout patterns" and the builder delivered 6 grid layouts. The previous run had 1 grid. This is a 6x improvement in layout variety. |
| **D-04 content specification** | YES | The brief specified the exact quote and treatment. The builder built `inversion-block` with "Nature prefers colonies" at 32px. It is positioned between Z5 and Z6 exactly as specified. |
| **Responsive stacking rules** | YES | The 768px breakpoint now stacks ALL 6 grids to single column. Previous run only stacked 1 grid. |

---

## 12. Summary Scorecard

| Dimension | Previous Run | Fresh Run | Winner |
|-----------|-------------|-----------|--------|
| **PA-05** | 3/4 | 3/4 | TIE |
| **Tier 5** | N/A | 6/9 | Fresh (new capability) |
| **Gate pass rate** | 14/14 (100% of tested) | 14/18 (78%) | Previous (but fewer gates) |
| **HTML size** | 2,045 lines / 73KB | 2,767 lines / 101KB | Fresh (more substantial) |
| **CSS lines** | 1,264 | 1,687 | Fresh (+33%) |
| **Grid layouts** | 1 | 6 | Fresh (6x improvement) |
| **Responsive rules** | 5 | 10 | Fresh (2x improvement) |
| **Custom properties** | 11 concept-named | 9 concept-named + 3 structural | Fresh (structural tokens) |
| **Component variety** | ~15 distinct classes | ~20 distinct classes | Fresh (+33%) |
| **Boundary specificity** | Weakest link at Z4-Z5 | Z4-Z5 now HEAVY, systematic typing | Fresh (critical fix) |
| **Background delta compliance** | All pass | 2 failures (Z2-Z3, Z3-Z4) | Previous |
| **Warm palette compliance** | Clean | 98 cold violations | Previous |
| **Trailing void** | Small (post-footer) | Large (~5 viewports) | Previous (smaller defect) |
| **Verdict report** | None | 247-line synthesis with fix priorities | Fresh (new artifact) |
| **Content map specificity** | Qualitative | Quantitative (element counts, axis scores) | Fresh |
| **Execution brief specificity** | Checklist-like | Recipe-like (RGB deltas, CSS values) | Fresh |

---

## 13. Key Conclusions

### What the 18 Enrichments Accomplished

1. **RECIPE TRANSFORMATION (highest impact):** The execution brief shifted from checklist ("shift 3+ channels at each boundary") to recipe ("Z1->Z2: background from #FEF9F5 to #EDE6DA delta ~27, body from 18px to 16px, line-height from 1.8 to 1.7, 3px red border"). The builder followed these recipes faithfully. This is THE most important pipeline change.

2. **LAYOUT VARIETY (second highest impact):** Grid layouts went from 1 to 6. The previous run's "fundamentally single-column" criticism is addressed. All grids collapse responsively at 768px.

3. **BOUNDARY SYSTEMATIZATION:** The transition typing (heavy/medium/light) with specific channel assignments per boundary created a more intentional multi-coherence pattern. The Z4-Z5 weak link was fixed.

4. **GATE RIGOR:** 4 new gates catch issues the previous run's gates missed. The gate runner is more comprehensive even though it produces more failures.

5. **ARTIFACT QUALITY:** Content map, execution brief, and verdict report are all more structured and actionable than their previous equivalents.

### What the Enrichments Did NOT Fix

1. **PA-05 score is unchanged at 3/4.** Despite 35% more CSS, 6x more grids, better boundaries, and more specific recipes, the core score did not budge. This suggests 3/4 may be a ceiling for the current pipeline architecture, or that the new defects (trailing void, cold color, BG deltas) offset the improvements.

2. **The void problem persists.** Both runs have trailing whitespace issues. The previous run had a small post-footer void. The fresh run has a catastrophic 5-viewport void. This is likely a builder behavior pattern (not checking the page's end) rather than a pipeline input problem.

3. **Background delta sensitivity is WORSE.** The previous run passed all BG delta gates. The fresh run fails on Z2-Z3 and Z3-Z4. The execution brief specified deltas that were close to the threshold (~16 RGB for both), and the builder undershot them. The brief should specify MINIMUMS (e.g., "delta >= 20") rather than TARGETS (e.g., "delta ~16").

4. **Warm palette regression.** A new cold color violation appeared that didn't exist before. The token redefinition of `--accent-blue` from cold to warm was incomplete.

5. **Metaphor still fades in the bottom third.** Both runs lose metaphor expression toward the end. The enrichments did not address this structural pattern.

### The Core Paradox

The fresh run is objectively MORE SOPHISTICATED across nearly every measurable dimension: more CSS, more grids, more components, better boundaries, more specific artifacts, systematic transition typing. Yet it scores identically on PA-05 and has MORE gate failures. This reveals that **sophistication and quality are not the same thing.** The fresh run tries harder and achieves more, but introduces new defects (void, cold color, BG deltas) that prevent the score from rising. The path from 3/4 to 4/4 requires not just more work but ZERO shipping defects -- a quality floor that neither run meets.

### Recommended Next Actions

1. **Add a void-checking gate** that measures total blank space after the last content element and flags if > 1 viewport-height
2. **Specify background deltas as MINIMUMS not TARGETS** in the execution brief (e.g., ">= 20 RGB" not "~16 RGB")
3. **Add a palette consistency gate** that checks all color usages against the defined custom property palette
4. **Investigate why the builder creates trailing voids** -- this is a recurring pattern across both runs and may need a builder-level instruction ("verify the page ends within 100px of the footer")
5. **Add metaphor-persistence guidance** to the execution brief for the final zone(s) -- "the factory metaphor must be visually active in ALL zones, not just the opening"
