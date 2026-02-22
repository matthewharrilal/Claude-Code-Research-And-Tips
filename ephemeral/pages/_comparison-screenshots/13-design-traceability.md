# Report 13: Design Intelligence Traceability

**Analyst:** design-intelligence-traceability-analyst (Opus)
**Date:** 2026-02-22
**Method:** For each page, 10 specific CSS decisions traced backward through the full chain: CSS -> mechanism catalog -> research finding -> research phase. Provenance depth scored 1-5 per decision.

---

## Part 1: Page A (yegge-gas-town) — 10 Traced Decisions

### Decision A1: Drop Cap (`.drop-cap::first-letter`, ~line 279)

- **What:** `font-family: var(--font-display); font-size: 3.5em; float: left; line-height: 0.8; color: var(--color-primary)`
- **Mechanism:** #16 Drop Cap (Editorial Opening) -- EXACT MATCH to catalog specification
- **Research finding:** R2 Creative Layouts -- editorial magazine conventions; RESEARCH-SYNTHESIS Principle 5 "Editorial Confidence Through Typography" (R-1 + R-2); Fresh extraction finding D1 "First letter HUGE (serif, 3x size)"
- **Research phase:** R2 (Creative Layouts) + R1 (Documentation Patterns). Validated in OD-006 (editorial sections), CD-006 (crown jewel divergence)
- **Provenance depth:** 4 (CSS -> mechanism #16 -> R2+R1 combined finding -> OD/CD exploration validation)

### Decision A2: Bento Grid for 8 Roles (`.bento-grid`, ~line 505)

- **What:** `display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6)` with `.bento-cell--primary { grid-column: 1 / -1 }` (Mayor spans full width)
- **Mechanism:** #15 Bento Grid (Variable Span Layout) -- MATCH. Catalog prescribes `repeat(auto-fit, minmax(280px, 1fr))` with span modifiers; Page A uses `1fr 1fr` instead
- **Research finding:** RESEARCH-SYNTHESIS Principle 2 "Layout as Choreography" (R-2 + R-4), which explicitly prescribes "Bento Grid" for "Component catalog, visual variety." R4 Axis Innovations bento grid as spatial pattern
- **Research phase:** R2 + R4. Originated in AD-003, reused in CD-005/CD-006. Mechanism catalog cross-references Strategy Library lines 607-676
- **Provenance depth:** 5 (CSS -> mechanism #15 -> R2+R4 combined principle -> AD-003 exploration origin -> Strategy Library codification)

### Decision A3: Dark Header with 3px Red Border (`header`, ~line 152)

- **What:** `background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary)`
- **Mechanism:** #13 Dark Header + 3px Primary Border -- EXACT MATCH
- **Research finding:** R1 Documentation Patterns -- premium site headers (Stripe, Vercel, Linear). R2 editorial confidence. Validated in OD-004, CD-006, Boris-2, Gastown-5
- **Research phase:** R1 + R2 + soul constraints (KortAI identity). Cross-validated in ALL exploration stages
- **Provenance depth:** 5 (CSS -> mechanism #13 -> R1+R2 research -> validated across 4+ explorations -> soul identity anchor)

### Decision A4: 2-Zone Callout DNA (`.callout` + `.callout__label` + `.callout__body`, ~line 302)

- **What:** `border-left: 4px solid var(--callout-accent)` + label zone (mono, 0.75rem, uppercase, 0.1em tracking) + body zone (1rem, 1.7 line-height)
- **Mechanism:** #2 (2-Zone Component DNA) + #10 (Border-Left Semantic Signal) + #9 (Confidence Encoding via Color) -- TRIPLE STACK
- **Research finding:** R5 Combination Theory -- component personality traits (velocity, temperature, weight). RESEARCH-SYNTHESIS Principle 3 "Components as Characters." The 2-zone structure extracted from DD-001 callouts, generalized across OD-004, CD-006, Boris-2, Gastown-5
- **Research phase:** R5 + R3 (sparse/dense rhythm at component scale). Cross-validated in ALL 5 examined exploration files
- **Provenance depth:** 5 (CSS -> mechanisms #2+#9+#10 -> R5+R3 findings -> DD-001 origin -> cross-validated 5 explorations)

### Decision A5: Zone Background Alternation with Override (~line 31-33 tokens, applied at ~line 226+)

- **What:** `--color-zone-sparse: #FEF9F5; --color-zone-dense: #FEFCF8; --color-zone-breathing: #F5EDE0` -- alternating cream/tan
- **Mechanism:** #7 Zone Background Differentiation -- MATCH, with documented override (build log: "#FAF5ED only has 8 RGB max-delta from #FEF9F5 (below 15 threshold). #F5EDE0 gives 21 max-delta")
- **Research finding:** R3 Density Dimensions -- 6 density dimensions including spatial density. RESEARCH-SYNTHESIS Principle 1 "Density as Rhythm"
- **Research phase:** R3. Zone color system validated in OD-004 (strata backgrounds), Boris-2, Gastown-5, CD-006
- **Provenance depth:** 4 (CSS -> mechanism #7 -> R3 density dimensions -> 4 exploration validations. Override uses perception threshold but not documented inline in CSS)

### Decision A6: Spacing Compression (64px -> 48px -> 40px -> 32px, across zone CSS)

- **What:** `.zone-opening { padding: 64px 0 }`, `.zone-architecture { padding: 48px 0 }`, `.zone-memory { padding: 40px 0 }`, `.zone-principles { padding: 32px 0 }`
- **Mechanism:** #4 Spacing Compression (Inverse Density-Confidence) -- MATCH. Catalog prescribes sparse=80px, moderate=32px, dense=16px
- **Research finding:** R3 Density Dimensions -- temporal density (information reveal over scroll). RESEARCH-SYNTHESIS Principle 1 + Principle 4 "Whitespace as Design Element" (24px/48px/92px+)
- **Research phase:** R3 + R1. OD-004 validation (confident=40px, uncertain=16px), DD-001 (EXHALE 92px, INHALE 24px)
- **Provenance depth:** 4 (CSS -> mechanism #4 -> R3+R1 findings -> DD-001/OD-004 validation)

### Decision A7: Border-Weight Gradient (4px/3px/1px, tokens ~line 59-61, applied throughout)

- **What:** 4px on callouts/featured elements, 3px on bento cells/code blocks/header/footer, 1px on table rows/separators
- **Mechanism:** #1 Border-Weight Gradient Encoding -- MATCH
- **Research finding:** No direct R1-R5 citation. This mechanism was EXTRACTED from exploration CSS (OD-004: 4px=established, 3px=probable, 2px=speculative, 1px=open; Boris-2; CD-006). It emerged through creative practice, not pre-existing research
- **Research phase:** Emergent during OD stage, codified during Phase C extraction. No upstream R-finding
- **Provenance depth:** 3 (CSS -> mechanism #1 -> OD-004/CD-006 emergent pattern -> no R1-R5 ancestor)

### Decision A8: Code Block Dark Background (`pre`, ~line 401)

- **What:** `background: var(--color-text); color: var(--color-background); border: 3px solid var(--color-border); font-family: var(--font-mono); font-size: 0.875rem` + 7 syntax tokens
- **Mechanism:** #17 Code Block (Dark Background + Syntax Highlighting) -- EXACT MATCH
- **Research finding:** R1 Documentation Patterns -- premium tech docs consistently use dark code blocks. Fresh extraction: "Dark code blocks STRONG contrast against cream"
- **Research phase:** R1. But this is essentially INDUSTRY STANDARD -- the research confirmed existing convention rather than discovering something novel
- **Provenance depth:** 2 (CSS -> mechanism #17 -> industry convention confirmed by R1. Not a novel research contribution)

### Decision A9: Data Table with Mono Headers (`th`, ~line 478)

- **What:** `font-family: var(--font-mono); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border-bottom: 3px solid` for headers, `border-bottom: 1px` for rows
- **Mechanism:** #18 Data Table (Mono Headers + Border Categories) -- MATCH
- **Research finding:** Fresh extraction: "Tables had same header style: bold, bottom border, left-aligned." R1 Documentation Patterns
- **Research phase:** R1. Industry convention
- **Provenance depth:** 2 (CSS -> mechanism #18 -> industry convention documented in R1)

### Decision A10: Per-Zone h2 Font-Size Gradient (~line 720-789)

- **What:** `.zone-opening h2 { font-size: 1.75rem }`, `.zone-architecture h2 { font-size: 1.625rem }`, `.zone-memory h2 { font-size: 1.5rem }`, `.zone-principles h2 { font-size: 1.375rem }`, `.zone-comparison h2 { font-size: 1.5rem }`
- **Mechanism:** #11 Typographic Scale Jumping -- PARTIAL match. Catalog documents ~1.5x ratio between scale LEVELS, but the per-zone h2 PROGRESSION is a builder invention not prescribed by the catalog
- **Research finding:** RESEARCH-SYNTHESIS Principle 5 "Editorial Confidence Through Typography" -- size = importance hierarchy. But progressive per-zone compression is builder creativity
- **Research phase:** R1 + R2 (typography principles). The application is novel
- **Provenance depth:** 3 (CSS -> mechanism #11 loosely -> R1+R2 typography principles. The per-zone gradient is builder creativity beyond mechanism specification)

### Page A Provenance Summary

| Decision | Depth | Key Provenance |
|----------|-------|----------------|
| A1 Drop Cap | 4 | R2+R1 -> mechanism #16 -> OD/CD validation |
| A2 Bento Grid | 5 | R2+R4 -> mechanism #15 -> AD-003 origin |
| A3 Dark Header | 5 | R1+R2+soul -> mechanism #13 -> all stages |
| A4 Callout 2-Zone | 5 | R5+R3 -> mechanisms #2+#9+#10 -> all 5 explorations |
| A5 Zone Backgrounds | 4 | R3 -> mechanism #7 -> 4 explorations |
| A6 Spacing Compression | 4 | R3+R1 -> mechanism #4 -> DD/OD validation |
| A7 Border-Weight | 3 | Emergent from OD/CD, no R1-R5 ancestor |
| A8 Code Block | 2 | Industry convention confirmed by R1 |
| A9 Data Table | 2 | Industry convention documented in R1 |
| A10 h2 Gradient | 3 | R1+R2 loosely -> builder creativity |

**Page A Average Provenance Depth: 3.7/5**

---

## Part 2: Page B (gas-town-steve-yegge) — 10 Traced Decisions

### Decision B1: Zone Backgrounds with Perception Override (~line 34-41 tokens)

- **What:** `--bg-z1: #FEF9F5; --bg-z2: #F0EBE3; --bg-z3: #E8E0D4; --bg-z4: #F5F0E8` with inline CSS comments: "TC brief values had max deltas of 13, 5, 8 -- all below 15 RGB threshold. Replaced with perceptible values"
- **Mechanism:** #7 Zone Background Differentiation -- MATCH with CRITICAL OVERRIDE documented inline
- **Research finding:** R3 Density Dimensions (original mechanism). Perception threshold (>=15 RGB minimum delta) from flagship experiment post-mortem. TC brief prescribed values of 13/5/8 delta; builder corrected using SC-09
- **Research phase:** R3 (original) + post-flagship perception research (corrective). The >=15 RGB rule came from Mode 4 PA findings on the ceiling experiment ("backgrounds differ by 1-8 RGB points = imperceptible")
- **Provenance depth:** 5 (CSS with inline documentation -> mechanism #7 with SC-09 threshold -> R3 + flagship failure analysis -> corrective codification into conventions brief)
- **KEY INSIGHT:** This is the strongest traceability in either page. Five distinct intelligence inputs converge: (a) R3 density research, (b) mechanism catalog extraction, (c) TC brief metaphor application, (d) perception threshold research from flagship failure, (e) builder correction documented inline. The CSS COMMENT itself is a provenance artifact.

### Decision B2: Solid Offset Depth on Core Quote (`.core-quote::after`, ~line 315)

- **What:** `content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--color-text); z-index: -1`
- **Mechanism:** #3 Solid Offset Depth (Box-Shadow Alternative) -- EXACT MATCH
- **Research finding:** OD-001 (EXT-CREATIVE-001), OD-004 (minimap), CD-006 (featured sections). Fresh extraction: "Creates depth WITHOUT violating soul." This mechanism exists BECAUSE of the soul constraint interaction (box-shadow: none is absolute)
- **Research phase:** Emerged during OD stage as soul-compliant depth technique. TC brief prescribes "SINGULAR solid-offset element. No other element gets solid offset. Scarcity = emphasis"
- **Provenance depth:** 5 (CSS -> mechanism #3 -> soul constraint reconciliation -> OD-001 origin -> TC brief scarcity principle)
- **NOTE:** Page A does NOT use this mechanism. It appears only in Page B, where the TC brief specifically prescribed singular deployment.

### Decision B3: HARD CUT Zone Transition (`.zone-2 { border-top: 3px solid var(--color-primary) }`, ~line 374)

- **What:** Z1->Z2 boundary uses strongest available transition signal under soul constraints
- **Mechanism:** Transition Grammar Type 1: HARD CUT. Catalog: "Content changes DOMAIN... border-top: 3px solid var(--color-primary)"
- **Research finding:** CD-006 validation: "3px primary border hard cuts between major content modes (39/40 audit score)." Ceiling experiment's void transitions identified as root cause of whitespace failure
- **Research phase:** Post-exploration discovery. Transition grammar codified AFTER ceiling experiment failure analysis. TC brief explicitly prescribes: "Z1->Z2 HARD CUT (3px primary border)"
- **Provenance depth:** 5 (CSS -> transition grammar Type 1 -> ceiling experiment failure analysis -> CD-006 positive validation -> TC brief prescription)
- **CRITICAL:** This is pipeline-mediated. The TC brief prescribes transition types per boundary. Page A uses similar transitions but from builder judgment, not explicit TC prescription.

### Decision B4: Font-Weight Zone Arc with Fix Cycle (400 -> 500 -> 600 -> 400)

- **What:** Z1 `p { font-weight: 400 }`, Z2 `p { font-weight: 500 }`, Z3 `p { font-weight: 600 }` (with CSS comment: "SC-13 increased from 500 to 600"), Z4 `p { font-weight: 400 }`
- **Mechanism:** Multi-coherence architecture using #11 Typographic Scale. Not a single mechanism but a channel-encoding system
- **Research finding:** R1+R2 (Principle 5 typography hierarchy). Fix Cycle 1 motivation: SC-13 (multi-coherence average >= 4.0). Flagship experiment finding: "uniform typography (all 16px/400)" = failure
- **Research phase:** R1+R2 (original) + experiment-derived SC-13 threshold + flagship failure avoidance
- **Provenance depth:** 4 (CSS with SC-13 comment -> multi-coherence framework -> R1+R2 + experiment thresholds)

### Decision B5: Letter-Spacing Zone Encoding with SC-14 Fix (`.zone-3 { letter-spacing: 0.03em }`, ~line 552)

- **What:** Zone 3 global 0.03em letter-spacing + heading resets to `letter-spacing: normal` (with CSS comment: "SC-14 -- the zone's 0.03em computes to 0.48px at 16px base, which is sub-perceptual at heading sizes")
- **Mechanism:** Character-scale fractal echo, enforced by SC-14 gate ("no letter-spacing < 0.025em")
- **Research finding:** R3 Density Dimensions -- cognitive density at inline level. SC-14 threshold from flagship post-mortem (ceiling experiment: "letter-spacing 0.001-0.01em consuming 22% of CSS budget")
- **Research phase:** R3 (original density concept) + flagship failure analysis (sub-perceptual waste discovery)
- **Provenance depth:** 4 (CSS with SC-14 fix documentation -> fractal echo framework + perception threshold -> R3 density + flagship failure)

### Decision B6: Checkpoint Bar Transition (`.checkpoint-bar`, ~line 685)

- **What:** `border-top: 3px; border-bottom: 1px; background: var(--color-border-subtle); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em` with Fix Cycle comments upgrading border from 1px to 3px
- **Mechanism:** Transition Grammar Type 3: CHECKPOINT. Catalog: "Content changes PHASE... mono label bar, borders, breathing bg"
- **Research finding:** Ceiling experiment: "CHECK-01 through CHECK-05 system (the one successful spatial element in an otherwise failed page)" -- discovered through failure
- **Research phase:** Post-ceiling analysis. The checkpoint was the ONLY element that worked in a page with 70-80% void
- **Provenance depth:** 5 (CSS with fix cycle comments -> transition grammar Type 3 -> ceiling experiment success-in-failure discovery -> post-mortem codification -> TC brief prescription "Z3->Z4 CHECKPOINT")

### Decision B7: Callout Threat Classification (`.callout--threat`, `.callout--caution`, etc., ~line 631)

- **What:** `--accent-color: var(--accent-coral)` for threat, `var(--accent-amber)` for caution, `var(--accent-purple)` for doctrine
- **Mechanism:** #9 Confidence/Priority Encoding via Color -- MATCH
- **Research finding:** R5 Combination Theory -- component "temperature" model. RESEARCH-SYNTHESIS Principle 3 (component personality traits)
- **Research phase:** R5. Validated in DD-001, OD-004, CD-006
- **Provenance depth:** 4 (CSS -> mechanism #9 -> R5 temperature model -> DD/OD/CD validation)
- **Metaphor layer:** NAMING (threat/caution/doctrine vs gotcha/tip/challenge) is metaphor-driven. CSS VALUES are identical to catalog. Mechanism/metaphor separation working correctly.

### Decision B8: Bento Grid for Roles with Rank Encoding (`.roles-grid`, ~line 483)

- **What:** `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px` + `.role-card--mayor { grid-column: span 2; border-width: 4px }` + `.role-card--overseer { border-color: var(--color-primary); border-width: 4px }`
- **Mechanism:** #15 Bento Grid + #1 Border-Weight Gradient -- COMBINED. Mayor gets 4px + span-2 (highest rank + largest cell). Overseer gets 4px red (highest threat)
- **Research finding:** R4 (bento grid) + OD extraction (border-weight). The COMBINATION of grid span + border weight to encode dual hierarchies is a novel compositional decision
- **Research phase:** R4 (grid) + OD (borders) + builder interpretation. TC brief: "#15 Bento Grid | S | Z2 | 7 Roles as variable-span grid (Mayor=span-2)"
- **Provenance depth:** 4 (CSS -> mechanisms #15+#1 -> R4+OD research -> TC brief prescription of exact layout)

### Decision B9: Stacked Gap Remediation at Z3->Z4 (~line 551, 688, 705)

- **What:** Z3 `padding-bottom: 20px` (down from 32px), checkpoint `padding: 8px` (down from 12px), Z4 `padding-top: 32px` (down from 48px). Total: 116px (from ~150px)
- **Mechanism:** SC-10 gate (stacked gap <= 120px) + tokens.css `--space-max-zone: 96px`
- **Research finding:** S-09 stacking loophole: "Individual spacing values pass S-09 (<=96px) but STACKED values at section boundaries create 210-276px voids." Flagship experiment: ~1,500-2,000px in transition whitespace
- **Research phase:** Post-flagship remediation analysis. The 120px threshold codified from the remediation audit
- **Provenance depth:** 5 (CSS -> SC-10 threshold -> S-09 stacking loophole discovery -> flagship whitespace failure -> remediation audit codification -> builder self-challenge identification)
- **DEEPEST CHAIN IN EITHER PAGE.** A single padding value (20px) encodes 6 intelligence inputs: mechanism #4, SC-10 gate, S-09 loophole discovery, flagship failure, remediation audit, and the builder's own self-challenge ("My conviction says urgency through spacing compression... but the checkpoint created the LARGEST visual gap").

### Decision B10: Dark Header with Stats Bar (`header`, ~line 189)

- **What:** `background: var(--color-text); color: var(--color-background); border-bottom: var(--border-medium) solid var(--color-primary)` + stats bar with mono labels
- **Mechanism:** #13 Dark Header + 3px Primary Border -- MATCH
- **Research finding:** Same chain as A3: R1+R2 premium site headers
- **Research phase:** R1 + R2 + soul identity
- **Provenance depth:** 5 (CSS -> mechanism #13 -> R1+R2 -> all-stage validation -> soul anchor)

### Page B Provenance Summary

| Decision | Depth | Key Provenance |
|----------|-------|----------------|
| B1 Zone BG Override | 5 | R3 + perception threshold + flagship failure + inline docs |
| B2 Solid Offset | 5 | Soul constraint -> mechanism #3 -> OD origin -> TC scarcity |
| B3 Hard Cut | 5 | Transition grammar -> ceiling failure -> TC prescription |
| B4 Font-Weight Arc | 4 | R1+R2 + multi-coherence + SC-13 threshold |
| B5 Letter-Spacing | 4 | R3 + SC-14 threshold + flagship failure |
| B6 Checkpoint Bar | 5 | Transition grammar -> ceiling success-in-failure |
| B7 Threat Colors | 4 | R5 temperature model -> DD/OD/CD validation |
| B8 Bento + Rank | 4 | R4+OD -> TC brief prescription |
| B9 Stacked Gap Fix | 5 | SC-10 -> S-09 loophole -> flagship failure |
| B10 Dark Header | 5 | R1+R2+soul -> all stages |

**Page B Average Provenance Depth: 4.6/5**

---

## Part 3: Comparative Scoring

### Depth Distribution

| Depth Level | Page A Count | Page B Count |
|-------------|-------------|-------------|
| 5 (deeply grounded) | 3 | 6 |
| 4 (strong chain) | 4 | 4 |
| 3 (moderate) | 1 | 0 |
| 2 (generic/industry) | 2 | 0 |
| 1 (no chain) | 0 | 0 |

| Metric | Page A | Page B | Delta |
|--------|--------|--------|-------|
| Average provenance depth | 3.7 | 4.6 | +0.9 |
| Decisions at depth 5 | 3/10 | 6/10 | +3 |
| Decisions at depth 2 | 2/10 | 0/10 | -2 |
| Inline provenance CSS comments | 0 | 4+ | +4 |
| Failure-derived intelligence used | 0 | 4 decisions | +4 |

---

## Part 4: Interpretive Findings

### Finding 1: Failure-Derived Intelligence Is the Deepest Provenance

Page B's deepest chains (B1, B3, B6, B9 -- all depth 5) trace through FAILURE ANALYSIS rather than original R1-R5 research. The transition grammar, perception thresholds, stacked gap limits, and sub-perceptual minimums were codified from the ceiling experiment failure and flagship remediation.

Page A's deepest chains trace to ORIGINAL RESEARCH + EXPLORATION VALIDATION -- a shallower but more direct provenance path.

The 0.9 depth advantage is almost entirely from failure-derived intelligence that accumulated BETWEEN the two pipeline versions. Page B benefits from two generations of failure analysis that Page A predates.

### Finding 2: Inline Provenance Documentation Is Page B's Distinctive Feature

Page B contains CSS comments that document the provenance chain:
- Token block: "TC brief values had max deltas of 13, 5, 8 -- all below 15 RGB threshold"
- Z3 headings: "The zone's 0.03em computes to 0.48px at 16px base, which is sub-perceptual at heading sizes"
- Fix Cycle 1: "SC-13 increased font-weight from 500 to 600"
- Checkpoint: "upgraded border-top from 1px to 3px to strengthen structural channel"

Page A has section comments ("Z1: OPENING ZONE") but zero gate-referenced fix documentation. This is a direct product of the /build-page pipeline's fix cycle process.

### Finding 3: Both Pages Use the Same Mechanisms -- Depth Comes from HOW, Not WHAT

Both deploy 15-16 mechanisms from the same 18-mechanism catalog. 14/15 mechanisms are shared. The ONLY difference is #3 Solid Offset in Page B and #12 Progressive Disclosure in Page A.

The depth difference comes from HOW mechanisms are deployed:
- Page B's zone backgrounds OVERRIDE TC brief values with documented rationale (depth 5)
- Page A's zone backgrounds use corrected values without inline documentation (depth 4)
- Page B's transitions use TYPED grammar prescribed by TC brief
- Page A's transitions are builder-judged, similar quality but less documented

### Finding 4: Industry Convention Decisions (Depth 2) Drag Page A's Average

Code blocks (#17) and data tables (#18) are effective in both pages. But they trace to INDUSTRY CONVENTION rather than novel research. Every tech doc site uses dark code blocks and mono-header tables. The research merely confirmed standard practice.

Page B avoids this drag by including more deeply-provenant decisions in the sample. Both pages USE code blocks and data tables, but Page B's 10-decision sample includes more novel decisions (solid offset, checkpoint, stacked gap fix).

### Finding 5: Untapped Research Findings (Neither Page)

From RESEARCH-SYNTHESIS, several findings are absent:
1. **R3 "Interaction density"** -- neither page has interactive elements (collapsible sections, scroll reveals)
2. **R4 "Spiral/diagonal movement"** -- neither uses non-linear reading patterns
3. **R5 "Nesting"** -- components-within-components are minimal
4. **RESEARCH-SYNTHESIS "PULSE rhythm"** -- neither implements cyclical HIGH->LOW->HIGH density; both use monotonic DEEPENING
5. **R4 "Gutenberg pattern"** -- diagonal reading path never deployed

These represent research intelligence that exists in the system but reaches neither page.

---

## Part 5: The Central Question

**Is richness CAUSED BY provenance, or merely CORRELATED?**

### Evidence for CAUSATION (provenance -> richness):

**B1 (zone background override) is provenance-CAUSED richness.** The TC brief prescribed imperceptible values (delta 5-13). The builder corrected them BECAUSE knowledge of the 15 RGB threshold was available. Without that research chain, the zone backgrounds would be invisible. Remove any link in the chain and the perceptible zone differentiation fails.

**B9 (stacked gap fix) is provenance-CAUSED non-failure.** The builder identified the 150px void and corrected to 116px specifically because the 120px threshold was available. Without the S-09 stacking loophole research, the void persists.

**B6 (checkpoint) is provenance-CAUSED transition quality.** The checkpoint transition TYPE exists because the ceiling experiment's void transitions failed. Without that failure analysis, the builder would likely use empty space.

### Evidence for CORRELATION only (provenance and richness co-occur but one doesn't cause the other):

**A2 (bento grid) has depth 5 and is visually strong in both pages.** Bento grids work in ANY well-designed page. The provenance doesn't CAUSE the effectiveness -- deeply-researched techniques tend to be effective, but the research didn't make them effective.

**A8 (code block) has depth 2 and is perfectly effective.** Industry conventions work without deep research backing.

**Page A's overall richness may be comparable to Page B's** despite 0.9 lower average provenance. The quality difference between the pages may not be proportional to the provenance difference.

### Resolution: Provenance is PARTIALLY CAUSAL Through a Failure-Prevention Mechanism

Provenance does not make decisions richer directly. It makes decisions LESS LIKELY TO FAIL at the perceptual level. The causal chain:

```
Deep provenance -> knowledge of failure modes -> avoidance of sub-perceptual CSS
                                              -> avoidance of whitespace voids
                                              -> avoidance of imperceptible deltas
                                              -> avoidance of uncategorized transitions
```

**Provenance prevents WASTE.** Without perception threshold research, builders spend CSS budget on imperceptible effects (ceiling experiment: 22% of CSS on letter-spacing 0.001-0.01em). Deep provenance redirects that budget toward perceptible effects.

The mechanism is NOT: "more provenance -> richer decisions"
The mechanism IS: "more provenance -> fewer wasted decisions -> same mechanism budget produces more PERCEPTIBLE richness"

### Does Pipeline Version Matter?

YES, but not for creativity. The /build-page pipeline does not make the builder's creative decisions deeper. It makes the builder's CORRECTIVE decisions possible:

1. Override zone backgrounds with documented rationale (perception thresholds available)
2. Fix stacked gaps with specific target (120px codified)
3. Reset sub-perceptual letter-spacing (SC-14 known)
4. Strengthen multi-coherence average (SC-13 quantified)

Page A's builder made similar creative decisions WITHOUT these guardrails. Where Page A succeeded, it succeeded through builder talent. Where Page B succeeded additionally, it succeeded through ACCUMULATED SYSTEM INTELLIGENCE surfaced by the pipeline.

**The pipeline is a failure-prevention layer, not a creativity-enhancement layer.** It surfaces research that prevents known failure modes. Creativity still comes from the builder.

### Pipeline Information Loss

Both pages demonstrate information loss from research to CSS:
- 337 original R1-R5 findings -> 18 mechanisms extracted -> 15-16 deployed per page -> ~10 perceptibly distinct per page
- **Compression ratio: ~34:1** (337 findings to ~10 perceptible manifestations)

But Page B's pipeline preserves MORE of the compression through documentation:
- TC brief captures metaphor-to-mechanism reasoning
- Build log captures override rationale with measurements
- Fix cycle comments capture gate-to-CSS corrections
- Cascade value table captures exact computed values

Page A preserves less: build log captures mechanism selections and conviction, but the planning-to-execution chain has fewer intermediate documents.

---

## Summary Scores

| Dimension | Page A | Page B |
|-----------|--------|--------|
| Average provenance depth | 3.7/5 | 4.6/5 |
| Decisions at depth 5 | 3/10 | 6/10 |
| Decisions at depth 2 (generic) | 2/10 | 0/10 |
| Inline provenance documentation | 0 | 4+ decisions |
| Failure-derived intelligence used | 0 | 4 decisions |
| Industry convention reliance | 2/10 | 0/10 |
| Untapped research findings | ~5 | ~5 (same) |
| Mechanism overlap | 14/15 shared | 14/15 shared |

**Conclusion:** Page B has meaningfully deeper design intelligence traceability (+0.9 average depth) because the /build-page pipeline surfaces failure-derived research (perception thresholds, stacking limits, transition grammar) that prevents known failure modes. Both pages use the same mechanism vocabulary. The creative decisions are comparable; the CORRECTIVE decisions -- made possible by deeper provenance chains -- are where traceability creates measurable quality differences. Provenance does not cause richness directly; it causes failure-prevention, which preserves richness that would otherwise be wasted on imperceptible CSS.

---

## FRAMING CORRECTION (2026-02-22)

**Issue:** Two minor framing concerns: (1) Line 16 uses "crown jewel divergence" as a label for CD-006, and (2) line 134 uses CD-006's "39/40 audit score" parenthetically as quality validation evidence for a CSS decision. These are minor -- the report primarily uses CD-006 as a factual provenance source (which is correct) rather than as a quality benchmark.

**Correct framing:** CD-006 is a CEILING-tier artifact, not a Flagship benchmark. References to CD-006 as a provenance source (where mechanisms were first validated) are appropriate. The "crown jewel" label should be "CEILING-tier exploration." The 39/40 score is a fact about CD-006's audit result, not evidence that any CSS decision validated in CD-006 is therefore at the quality ceiling.

**Impact:** MINIMAL. This report's central argument (provenance depth correlates with failure prevention, not with richness directly) is independent of CD-006's tier classification. The 10+10 traced decisions, depth scoring methodology, and the causation vs correlation analysis are all unaffected. The corrections here are cosmetic label changes, not analytical reframing.

---

**END REPORT 13**
