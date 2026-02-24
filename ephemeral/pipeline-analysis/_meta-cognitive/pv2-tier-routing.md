# Pipeline v2 Tier-Specific Routing Matrix

**Author:** tier-router (Opus 4.6)
**Date:** 2026-02-18
**Sources:** tension-composition SKILL.md (Step 0D), 42-OPERATIONAL-RECIPE.md (Phases 0-8), pv2-form-proposal.md, pv2-user-experience.md, compositional-core/CLAUDE.md (Track 1/2 workflow)
**Purpose:** Comprehensive specification of what happens at each tier -- phase by phase, agent by agent, gate by gate

---

## A) PHASE-BY-PHASE EXECUTION MATRIX

Each cell indicates the execution mode at that tier:
- **SKIP** -- Phase does not execute; output is default or absent
- **MINIMAL** -- Phase executes with reduced scope (fewer steps, simpler checks)
- **FULL** -- Phase executes as specified in the source pipeline
- **ENHANCED** -- Phase executes with expanded scope (multi-pass, multi-agent, deeper analysis)

### Content Analysis Phases (TC Pipeline, Phases 0-3.5)

| Phase | Floor | Middle | Ceiling | Flagship |
|-------|-------|--------|---------|----------|
| **TC Phase 0A: Content Type Classification** | MINIMAL -- classify as reference/data, route to Track 1 | FULL -- classify prose vs mixed vs visual, determine STANDARD/HYBRID path | FULL -- same classification, but Addition Test applied | FULL -- same as Ceiling |
| **TC Phase 0B: Scope Assessment** | MINIMAL -- just word count | FULL -- word count, scope category (MICRO/SHORT/STANDARD/LONG/MASSIVE) | FULL -- same | FULL -- same, but LONG/MASSIVE content segmented for multi-pass |
| **TC Phase 0C: Section Identification** | SKIP -- sections auto-detected from headings only | FULL -- natural sections by heading, topic shift, mode change; classify each as NARRATIVE/REFERENCE/CODE/DATA/MIXED | FULL -- same | ENHANCED -- section identification includes sub-section granularity, incompatible structure flagging |
| **TC Phase 0D: Tier Classification** | MINIMAL -- auto-classified Floor by content signal (<200 words, API ref, config table, changelog) | MINIMAL -- auto-classified Middle by content signal (tutorial, guide, overview, narrative). Density pattern selected (CRESCENDO/F-PATTERN/BENTO/PULSE). SKIP Phases 1-3. | FULL -- Addition Test = NO triggers Ceiling. Per-category minimums set (S:1+, H:1+, C:1+, D:1+, N:1+). Proceed to Phase 1. | FULL -- Anchor content, showcase, philosophical deep-dive. Same as Ceiling but multi-pass audit flagged. |
| **TC Phase 1: Multi-Axis Questioning** | SKIP | SKIP -- no metaphor derivation for Middle | FULL -- Core 4 axes (FEEL/UNDERSTAND/DO/BECOME) + Extended 5 + 0-5 conditional axes. 4-14 entries. | ENHANCED -- same axes but deeper probing per axis; compound tension pairs identified explicitly |
| **TC Phase 2: Tension Derivation** | SKIP | SKIP | FULL -- Side A (reader needs) vs Side B (KortAI constraints). Addition Test. BECAUSE test. Richness formula (Opposition x Overlap x Width). Tension Threshold Gate. | ENHANCED -- multiple tension candidates developed in parallel, richness scored and ranked, perceptual risk assessed for each |
| **TC Phase 3: Metaphor Collapse** | SKIP | SKIP | FULL -- Extract structural properties from both sides, find overlap, generate 3-5 metaphor candidates, score each. Lock top candidate. | ENHANCED -- 5+ candidates generated, each scored on resolution strength AND perceptual risk. Top 2 developed to sketch stage before selection. |
| **TC Phase 3.5: Metaphor Lock-In Gate** | SKIP | SKIP | FULL -- 3 mandatory questions: (1) Derived independently? (2) Can justify without library? (3) Appears in case-studies index? Divergence table if overlap. POINT OF NO RETURN. | FULL -- same gate, but divergence justification requires 4+/5 dimensions different (vs 3+ for Ceiling) |

### Building Phases (File 42 Recipe / Page-Builder Skill, Phases 0-8)

| Phase | Floor | Middle | Ceiling | Flagship |
|-------|-------|--------|---------|----------|
| **F42 Phase 0: Content Analysis + Zone Architecture** | SKIP -- no zones. Design system defaults applied directly. | FULL -- Read prohibitions + tokens. Determine zone count (2-5 by word count). Assign zone semantics (temperature, density, voice, weight). Establish section architecture (>= 2 grid layouts). Assign transition types (smooth/bridge/breathing). | FULL -- same as Middle, but zone semantics informed by metaphor from TC output. Reinforcing mechanism pairs required (>= 2 pairs encoding same semantic through different CSS channels). | ENHANCED -- same as Ceiling, but zone architecture verified against metaphor consistency. 4-scale fractal coherence required (Navigation + Page + Section + Component). |
| **F42 Phase 1: HTML Skeleton** | MINIMAL -- page shell + header/footer + content wrapped in semantic HTML. No grid wrappers. No section indicators. No bridge prose. | FULL -- Complete document shell, header (bookend pattern), sections with zone classes + ARIA, component markup (callouts, tables, pullquotes using library classes), grid wrappers (>= 2 sections), section indicators, footer, all ARIA landmarks. | FULL -- same as Middle | FULL -- same as Middle, but HTML structure verified against metaphor requirements before proceeding |
| **F42 Phase 2: Base CSS + Soul Enforcement** | MINIMAL -- CSS reset + tokens + soul enforcement (`border-radius: 0 !important; box-shadow: none !important`). Container 960px. Base typography (Inter 16px, Instrument Serif headings). Header/footer bookend. No zone variables. | FULL -- Complete reset + token block + soul enforcement + base typography + container 960px + header/footer bookend pattern. Zone background CSS variables declared as placeholders. | FULL -- same as Middle | FULL -- same as Middle |
| **F42 Phase 3: Zone System + Backgrounds** | SKIP -- single background (`--color-background: #FEF9F5`) throughout | FULL -- Define zone background colors (warm palette, R >= G >= B). Apply per-section backgrounds. Apply section padding by zone (Opening: generous, Core: compressed, Resolution: settled). Perception check: >= 2 visible background shifts without color picker. Adjacent zones >= 10 RGB delta. | FULL -- same constraints, but background colors should reinforce metaphor semantics. >= 15 RGB delta between adjacent zones (stricter than Middle's >= 10). | ENHANCED -- same as Ceiling, but multi-channel zone differentiation verified. Background, typography, spacing, AND borders must all shift at zone boundaries. 6+ CSS channels shifting at each major boundary. |
| **F42 Phase 4: Structural Borders + Dividers** | MINIMAL -- basic table borders (1px). No section-level borders. No transition dividers. No callout variants. | FULL -- Section-level left borders (alternating, 40-60% of sections). 3 transition types (smooth 1px / bridge 2px / breathing 4px). 4 callout variants (info/gotcha/tip/essence). Grid layouts. Table styling. Pullquotes. Section indicators. Stacking arithmetic verified (max gap <= 120px). | FULL -- same as Middle, plus border-weight gradient encoding metaphor semantics (4px/3px hierarchy). | ENHANCED -- same as Ceiling. Border rhythm explicitly mapped to metaphor. Stacking arithmetic verified with tighter tolerance (max gap <= 108px). |
| **F42 Phase 5: Typography Zones** | SKIP -- single typographic voice throughout (16px, 1.7 line-height) | FULL -- Paragraph typography varies by zone: Zone 1 (17px/1.85/0.02em), Zone 2 (15px/1.55/-0.01em), Zone 3 (16px/1.75/0). Heading typography varies by zone. All deltas exceed perception thresholds (font-size >= 2px, line-height >= 0.15, letter-spacing >= 0.5px). | FULL -- same thresholds, but typographic voice shifts reinforce metaphor | ENHANCED -- same as Ceiling, but typography verified for 4-scale fractal coherence |
| **F42 Phase 6: Element Richness (Components + Interactivity)** | MINIMAL -- link styles, code block styling. No hover states. No selection styling. | FULL -- Link hover/visited, code blocks (inline + block), list styling, selection color, optional interactive hover on callouts/cards. | FULL -- same as Middle, plus metaphor-driven component styling | ENHANCED -- same as Ceiling, plus compositional transitions between components |
| **F42 Phase 7: Accessibility + Responsive** | MINIMAL -- skip link, basic responsive (768px stack). No ARIA beyond semantic HTML. No focus styles. No reduced motion. No print. | FULL -- Skip link (visible on focus). ARIA landmarks (banner, navigation, main, contentinfo, complementary). Focus styles (2px outline, KortAI red). Responsive breakpoints (768px + 480px). Reduced motion media query. Print styles. Grid-to-stack collapse at 768px. | FULL -- same as Middle | FULL -- same as Middle |
| **F42 Phase 8: Verification / Perception Audit** | SKIP -- no self-audit | MINIMAL -- Builder self-check: soul compliance, warm palette, container width, void prevention (max gap < 120px), scale coverage (5/5 scales). Self-assessed PA-05. 5 core PA questions only (PA-01 through PA-05). | FULL -- Programmatic gate runner (soul + palette + container + voids + scale + coherence). External PA auditor (Mode 2: 1 fresh-eyes Opus, PA-01 to PA-10, 10 questions). | ENHANCED -- Full programmatic gate suite. Mode 4 PA: screenshot pre-capture (1440px cold look + scroll, 768px, 375px = 16+ screenshots). 9 fresh-eyes Opus auditors running all 48 PA questions in parallel. Consensus weaving. Fix cycle if PA-05 < 3/4. |

---

## B) AGENT TOPOLOGY BY TIER

### Floor: Single Agent, Self-Build

```
User invokes /build-page
    |
    v
[1 Sonnet Agent]
    - Reads content
    - Classifies as Floor
    - Applies design system defaults from tokens.css
    - Wraps in page shell (header/footer/sections)
    - Styles tables + code blocks
    - No PA audit
    |
    v
Output: .html file
```

**Total agents:** 1 (Sonnet)
**Communication protocol:** None (single agent)
**Model justification:** Floor pages are component assembly only. Sonnet's compliance precision is ideal; creative composition is not needed.

---

### Middle: Single Opus Builder + Optional PA

```
User invokes /build-page
    |
    v
[1 Opus Agent -- Builder]
    - TC Phase 0 only (content analysis, tier classification, pattern selection)
    - Skips TC Phases 1-3 (no metaphor)
    - Executes File 42 Phases 0-8 sequentially
    - Self-verifies at Phase 8 (5 core PA questions)
    |
    v
Output: .html file + self-assessment
    |
    v (optional, user-triggered)
[1 Opus Agent -- PA Auditor]
    - Mode 4 if user requests full audit
    - Fresh-eyes, zero build context
```

**Total agents:** 1 (Opus) + 0-1 optional (Opus PA)
**Communication protocol:** None (single agent, or independent PA)
**Model justification:** Opus for builder because recipe execution + per-category mechanism deployment benefits from compositional intelligence beyond Sonnet's compliance-only mode. Middle experiment SUCCESS used Opus builder.

---

### Ceiling: 4-Wave, Multi-Agent

```
WAVE 0: Content Analysis (~10 min)
[1 Opus Agent -- TC Planner]
    - Full TC Pipeline: Phases 0-3.5
    - Multi-axis questioning, tension derivation, metaphor collapse
    - Outputs: metaphor + mechanism selections + zone architecture
    - Writes build plan to shared file
    |
    v
WAVE 1: Building (~30-40 min)
[1 Opus Agent -- Builder]
    - Reads TC Planner's build plan
    - Reads mechanism catalog (routed to builder, NOT planner only)
    - Executes File 42 Phases 0-8
    - Can message TC Planner via file bus for clarification
    |
    v
WAVE 2: Verification (~15-20 min)
[1 Sonnet Agent -- Programmatic Verifier] (parallel)
    - Gate runner: soul, palette, container, voids, scales, coherence
[1 Opus Agent -- PA Auditor] (parallel)
    - Mode 2: PA-01 to PA-10 (10 questions), fresh-eyes
    |
    v
WAVE 3: Fix Integration (~5-10 min, conditional)
[1 Opus Agent -- Fix Integrator]
    - Only spawned if Wave 2 finds BLOCKING or SIGNIFICANT issues
    - Applies targeted CSS/HTML fixes
    - Re-runs programmatic gates
```

**Total agents:** 3-4 (1 planner + 1 builder + 1-2 verifiers + 0-1 fixer)
**Communication protocol:** File bus (shared files in build directory). Builder reads planner's output file. Verifiers read HTML artifact. Fixer reads verifier reports.
**Model justification:** Opus for planner (creative metaphor derivation), Opus for builder (compositional CSS), Sonnet for programmatic verification (compliance checking), Opus for PA (perceptual judgment), Opus for fixes (creative problem-solving).

---

### Flagship: 4-Wave with Expanded Verification

```
WAVE 0: Deep Content Analysis (~15-20 min)
[1 Opus Agent -- TC Planner]
    - Full TC Pipeline: Phases 0-3.5
    - Extended multi-axis probing
    - Multiple tension candidates developed
    - Perceptual risk assessed per metaphor candidate
    - Outputs: rich build plan (metaphor, mechanisms, zone architecture,
      transition types, scale-channel mappings)
    |
    v
WAVE 1: Building (~40-60 min)
[1 Opus Agent -- Builder]
    - Reads TC Planner's rich build plan
    - Reads mechanism catalog + case studies for divergence check
    - Executes File 42 Phases 0-8 with enhanced zone differentiation
    - Communication channel to TC Planner for metaphor clarification
    |
    v
WAVE 2: Full Verification Suite (~20-30 min)
[Team Lead -- Screenshot Pre-Capture]
    - Captures all screenshots before spawning auditors
    - 1440px cold look, 1440px scroll (12+ positions), 768px, 375px
    - Total: 16-36 screenshots saved to files
    |
[1 Sonnet Agent -- Programmatic Verifier] (parallel)
    - Full gate suite: soul, palette, container, voids, scales, coherence,
      accessibility (8/8 WCAG checks)
[1 Sonnet Agent -- Soul Compliance] (parallel)
    - Dedicated soul checker (22 prohibitions, zero tolerance)
[9 Opus Agents -- PA Auditors] (parallel)
    - Mode 4: All 48 PA questions distributed across 9 auditors
    - Each auditor reads saved screenshots (no Playwright contention)
    - Zero context about build plan, metaphor, or mechanism count
    - Assignment: PA-01-05 to Auditor 1, PA-06-10 to Auditor 2, etc.
    |
[1 Opus Agent -- PA Weaver]
    - Synthesizes 9 auditor reports into consensus verdict
    - Identifies BLOCKING vs SIGNIFICANT vs MINOR issues
    - Computes consensus PA-05 score
    |
    v
WAVE 3: Fix Integration (~10-20 min, conditional)
[1 Opus Agent -- Fix Integrator]
    - Spawned if PA-05 < 3/4 or BLOCKING issues exist
    - Applies ranked fixes (highest PA-05 impact first)
    - Re-runs programmatic gates after fixes
    |
    v
WAVE 4: Spot-Check (~5-10 min, conditional)
[2 Opus Agents -- Spot-Check PA]
    - Fresh auditors verify fixes resolved the issues
    - Only PA-05 + the specific flagged questions
    - Determines if another fix cycle is needed
```

**Total agents:** 12-16 (1 planner + 1 builder + 2 programmatic verifiers + 9 PA auditors + 1 PA weaver + 0-1 fixer + 0-2 spot-checkers)
**Communication protocol:** File bus (shared files) + agent messaging for blocking issues. TC Planner writes build plan. Builder writes HTML. Verifiers read HTML. PA auditors read screenshots. Weaver reads auditor reports. Fixer reads weaver verdict.
**Model justification:** Opus for ALL creative/perceptual roles. Sonnet for programmatic compliance roles only. Screenshot pre-capture eliminates Playwright contention for 9-auditor parallel execution.

---

## C) GATE STRICTNESS BY TIER

Gates are verification checkpoints that can either BLOCK (halt the build, require fix) or WARN (flag the issue, allow continuation).

| Gate | Floor | Middle | Ceiling | Flagship |
|------|-------|--------|---------|----------|
| **Soul Compliance** (border-radius: 0, box-shadow: none, palette) | BLOCKING -- auto-fixed silently | BLOCKING -- auto-fixed silently | BLOCKING -- auto-fixed silently | BLOCKING -- auto-fixed silently |
| **Warm Palette** (R >= G >= B for all backgrounds) | BLOCKING | BLOCKING | BLOCKING | BLOCKING |
| **Container Width** (960px max-width) | BLOCKING | BLOCKING | BLOCKING | BLOCKING |
| **Void Prevention** (max stacked gap <= 120px) | N/A (no zones) | BLOCKING | BLOCKING (threshold: 120px) | BLOCKING (threshold: 108px, stricter) |
| **Zone Differentiation** (adjacent zones differ by >= N RGB) | N/A | WARNING (>= 10 RGB) | BLOCKING (>= 15 RGB) | BLOCKING (>= 15 RGB, + 6 CSS channels) |
| **Scale Coverage** (N/5 scales with designed moments) | N/A | WARNING (3/5 target) | BLOCKING (4/5 minimum) | BLOCKING (5/5 required) |
| **Grid Layout Minimum** (>= 2 non-single-column sections) | N/A | WARNING | BLOCKING | BLOCKING |
| **Typography Zone Variation** (font-size >= 2px delta, line-height >= 0.15) | N/A | WARNING | BLOCKING | BLOCKING |
| **Stacking Arithmetic** (per-boundary total gap check) | N/A | BLOCKING | BLOCKING | BLOCKING |
| **WCAG 2.1 AA Accessibility** (skip link, ARIA, focus, responsive) | MINIMAL (skip link only) | WARNING (full check) | BLOCKING (full check) | BLOCKING (full check, 8/8 items) |
| **Per-Category Mechanism Minimum** (S:1+, H:1+, C:1+, D:1+, N:1+) | N/A | WARNING (best effort) | BLOCKING | BLOCKING |
| **Coherence Check** (>= 3 transitions between sections) | N/A | WARNING | BLOCKING | BLOCKING |
| **Metaphor Consistency** (mechanisms reinforce metaphor) | N/A | N/A (no metaphor) | WARNING | BLOCKING |
| **Fractal Coherence** (pattern visible at 4 scales) | N/A | N/A | WARNING | BLOCKING |
| **PA-05 Threshold** (>= 3/4 COMPOSED) | N/A | N/A (self-check, aspirational) | BLOCKING (external PA, >= 3/4) | BLOCKING (Mode 4 consensus, >= 3/4) |
| **Reinforcing Mechanism Pairs** (>= 2 pairs encoding same semantic via different CSS channels) | N/A | N/A | BLOCKING | BLOCKING |

### Gate Strictness Summary

| Tier | BLOCKING Gates | WARNING Gates | N/A Gates |
|------|---------------|---------------|-----------|
| **Floor** | 3 (soul, palette, container) | 0 | 13 |
| **Middle** | 5 (soul, palette, container, voids, stacking) | 7 (zone diff, scales, grids, typography, accessibility, mechanisms, coherence) | 4 |
| **Ceiling** | 13 (all except metaphor consistency + fractal coherence) | 2 (metaphor consistency, fractal coherence) | 1 (N/A: none at Ceiling) |
| **Flagship** | 16 (ALL gates are BLOCKING) | 0 | 0 |

---

## D) EXPECTED OUTCOMES BY TIER

### Performance Envelope

| Metric | Floor | Middle | Ceiling | Flagship |
|--------|-------|--------|---------|----------|
| **Expected PA-05** | N/A (no audit) | 3-4/4 (self-assessed, validated by Middle experiment at 4/4) | 3-3.5/4 COMPOSED (external Mode 2 PA) | 3.2-4/4 COMPOSED to DESIGNED (external Mode 4 PA) |
| **Build Time** | ~5 min | ~15-25 min | ~45-60 min | ~90-180 min |
| **Expected CSS Lines** | 80-150 | 350-500 | 700-1000 | 1000-1500 |
| **Expected HTML Lines** | 100-200 | 250-400 | 400-600 | 500-800 |
| **Expected Mechanism Count** | 0-2 (component defaults only) | 8-12 (per-category minimums, individual deployment) | 12-15 (mechanism COMBINATION deployment, reinforcing pairs) | 16-18 (multi-pattern COMPOSITION, typed transitions) |
| **Zone Count** | 1 (no zones) | 2-3 | 3-4 | 4-5 |
| **Grid Layouts** | 0 | 2-3 | 3-5 | 4-6 |
| **Agent Count** | 1 | 1 (+1 optional) | 3-4 | 12-16 |
| **Agent Model** | 1 Sonnet | 1 Opus | 2 Opus + 1-2 Sonnet | 10+ Opus + 2 Sonnet |
| **PA Mode** | None | Self-check (5 questions) | Mode 2 (1 auditor, 10 questions) | Mode 4 (9 auditors, 48 questions) |
| **Communication Protocol** | None | None | File bus | File bus + agent messaging |
| **Metaphor Derivation** | None | Pattern selection only (CRESCENDO/F-PATTERN/BENTO/PULSE) | Full TC pipeline (Phases 1-3.5) | Full TC pipeline + multi-candidate development |
| **Pages of Total Site** | 10-20% | 40-50% | 20-30% | 5-10% |

### Deployment Level Distinction (NOT Just Mechanism Count)

The tiers differ in HOW mechanisms are deployed, not just how many:

| Tier | Deployment Strategy | Example |
|------|-------------------|---------|
| **Floor** | Component assembly only -- 0 custom mechanisms, Track 1 templates | Tables styled from tokens.css, no spatial decisions |
| **Middle** | Individual mechanism deployment -- each mechanism serves content independently | Border-weight (#1) encodes hierarchy. Zone backgrounds (#2) encode spatial progression. Independent contributions. |
| **Ceiling** | Mechanism COMBINATION -- 2-3 mechanisms encode the SAME semantic through different CSS channels | Border-weight + zone backgrounds + typography ALL encode "depth" together through the geological metaphor. |
| **Flagship** | Multi-pattern COMPOSITION -- 3+ density patterns with typed transitions between them | CRESCENDO (S1-S5) transitions via breathing divider to F-PATTERN (S6-S9), with PULSE rhythm in S10-S12. Each pattern uses different mechanism combinations. |

### Evidence Base for Expected Outcomes

| Tier | Evidence Source | Observed PA-05 | Observed Mechanisms |
|------|---------------|----------------|---------------------|
| **Floor** | N/A (no experiment run) | N/A | N/A |
| **Middle** | Middle-tier experiment (2026-02-16) | 4/4 DESIGNED | 12 (S:1, H:3, C:4, D:2, N:3) |
| **Ceiling** | Ceiling experiment (pre-remediation) | 1.5/4 DO NOT SHIP (but with known process failures) | 14 (metaphor-driven, but imperceptible CSS) |
| **Ceiling** | Post-remediation (2026-02-18) | 2.5/4 SHIP WITH FIXES (projected 3.0-3.2 after CSS fixes) | 14 (same mechanisms, perceptible CSS) |
| **Flagship** | CD-006 pilot (reference, different process) | 39/40 soul score (~3/4 PA-05 COMPOSED, CEILING tier) | ~16-18 |

**CAVEAT:** N=2-3 for most tiers. Expected outcomes are calibrated hypotheses, not proven ranges. The Middle experiment's 4/4 PA-05 may be an outlier (content was particularly well-suited). True Middle range likely 3-4/4.

---

## E) TIER ROUTING DECISION TREE

```
Content arrives at /build-page
    |
    v
[Step 0D: Content Signal Classification]
    |
    |-- <200 words / API ref / config table / changelog
    |       --> FLOOR
    |
    |-- Tutorial / guide / overview / comparison / narrative (prose-dominant)
    |       --> MIDDLE (default)
    |
    |-- Addition Test = NO (genuine structural tension)
    |       --> CEILING
    |
    |-- Anchor content / design system showcase / philosophical deep-dive
    |       --> FLAGSHIP
    |
    v
[User Override?]
    |
    |-- User accepts recommendation --> proceed at recommended tier
    |-- User overrides higher --> proceed at higher tier (no questions asked)
    |-- User overrides lower --> proceed at lower tier (no questions asked)
```

### Graceful Degradation Protocol

If a higher-tier build encounters problems and must degrade:

1. **Ceiling -> Middle degradation:** Abandon metaphor. Revert to pattern selection. MANDATORY documentation:
   - (a) What metaphor was attempted?
   - (b) Why was it abandoned?
   - (c) What would make Ceiling viable for this content?

2. **Flagship -> Ceiling degradation:** Reduce verification to Mode 2 PA. Drop multi-candidate metaphor development. Single TC pass instead of multi-pass.

3. **Middle -> Floor degradation:** Abandon zones and mechanism deployment. Apply design system defaults only.

**Degradation is NEVER silent.** The system always informs the user and documents the reason.

---

## F) COST-BENEFIT SUMMARY

| Tier | Cost (Time) | Cost (Agents) | Benefit (Quality) | Best For |
|------|-------------|---------------|-------------------|----------|
| **Floor** | 5 min | 1 Sonnet | Correct but plain | API docs, changelogs, config tables, short references |
| **Middle** | 15-25 min | 1 Opus | Designed and engaging | Tutorials, guides, overviews, most narrative content (40-50% of pages) |
| **Ceiling** | 45-60 min | 3-4 mixed | Composed and coherent | Content with genuine tension, architectural docs, system explanations |
| **Flagship** | 90-180 min | 12-16 Opus-heavy | Exceptional and intentional | Anchor content, showcase pages, philosophical deep-dives (5-10% of pages) |

**Floor-to-Middle transition has the highest ROI:** 3-4x richness improvement for +10-20 min. This is why Middle is the recommended universal floor -- the cost of NOT deploying mechanisms individually is very high relative to the marginal time investment.

**Middle-to-Ceiling transition adds metaphor:** The jump from individual mechanism deployment to mechanism COMBINATION through metaphor is the qualitative shift. It requires full TC pipeline execution, which approximately doubles build time.

**Ceiling-to-Flagship transition adds verification breadth:** The build itself is similar, but Mode 4 PA (9 auditors, 48 questions) catches issues that Mode 2 misses. The whitespace void was THE dominant failure in the ceiling experiment -- flagged by 9/9 Mode 4 auditors but missed entirely by the 2-PA lighter audit.

---

**END OF TIER ROUTING MATRIX**

**Summary in one sentence:** Pipeline v2 has 4 tiers with increasing execution depth (Floor: component assembly, Middle: individual mechanism deployment with pattern selection, Ceiling: mechanism combination through metaphor, Flagship: multi-pattern composition with Mode 4 verification), each with precisely specified phase execution modes, agent topologies, and gate strictness levels.
