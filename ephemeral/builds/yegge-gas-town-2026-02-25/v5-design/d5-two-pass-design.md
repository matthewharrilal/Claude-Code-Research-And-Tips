# D5 Two-Pass Builder Design — Crack Dimension: Position Effect / Attention Decay

**Date:** 2026-02-26
**Status:** DESIGN (research only — no pipeline files edited)
**Author:** Pipeline Architecture Agent (d5-recipe-architect)
**Crack Dimension:** D5 — Position Effect / Attention Decay
**Problem:** Later dispositions (D-07, D-08, D-09) receive significantly less LLM attention than D-01 through D-03 due to fixed ordering in the 833-line builder recipe. This is the #1 predicted cause of sub-3.0 PA-05 scores.

---

## 1. Rationale for the Split Point

### Why Split at All?

The builder recipe presents D-01 through D-09 in fixed order within a single 833-line file. LLM attention decay means tokens appearing later in the context window receive progressively less processing weight. The empirical evidence:

- **Gas Town initial build:** D-07 (Edge Intentionality / delight techniques) scored 2/10. D-08 (Skeleton Test) was not applied. D-09 (Quiet Zone) was added post-build. These are ALL late-position dispositions.
- **Flagship experiment:** Later dispositions produced imperceptible CSS — letter-spacing 0.001-0.01em, background deltas of 1-8 RGB. The builder spent 22% of CSS budget on imperceptible micro-typography, a hallmark of attention decay (builder processed D-07 "refinement" vocabulary but lost the perceptual threshold context from earlier in the recipe).

### Why D-01..D-05 / D-06..D-09?

The proposed split at D-05/D-06 boundary is NOT the right split point. After analyzing the dependency chains and semantic groupings, the correct split is:

**Pass A: Structure + Composition (D-01 through D-06, D-08, D-09)**
**Pass B: Refinement + Polish (D-07 only, plus accessibility, semantic HTML, and self-evaluation)**

Wait — that's too lopsided. Let me reason through this more carefully by analyzing what each disposition actually DOES to the CSS:

| Disposition | What It Produces | Depends On | CSS Impact |
|-------------|-----------------|------------|------------|
| D-01: Content-Register Reading | Per-section CSS treatment (NARRATIVE/REFERENCE/CODE) | Content map | HIGH — line-height, spacing, layout per zone |
| D-02: Room Perception at Boundaries | Multi-channel zone transitions | Zone definitions from scaffolding | HIGH — backgrounds, typography, spacing, borders at boundaries |
| D-03: The Signing Frame | Authority: border-weight hierarchy, restraint | D-01 + D-02 (needs zones to sign) | MEDIUM — border consistency, header treatment |
| D-04: The Second-Half Moment | 1-2 surprise moments in second half | Full page structure exists | MEDIUM — scale break, color inversion, layout rupture |
| D-05: The Reader's Scroll | Scroll rhythm: height x density x transitions | Zones + transitions defined | LOW CSS generation — mostly ASSESSMENT of what exists |
| D-06: Negative Space as Shape | Varied gap sizes, deliberate whitespace | Zone structure exists | MEDIUM — padding/margin variation |
| D-07: Edge Intentionality | Hover states, ::selection, micro-refinements | Full page structure + zones | MEDIUM — behavioral CSS, polish details |
| D-08: The Skeleton Test | ASSESSMENT only — no new CSS | Everything built | ZERO — assessment/verification step |
| D-09: The Quiet Zone | Designate 1 zone as plainer | Zone structure | MEDIUM — removes/simplifies CSS in one zone |

### The Real Dependency Chain

```
D-01 (content register) ─┐
                         ├──> D-02 (room perception at boundaries)
Phase 3 scaffolding ─────┘          │
                                    ├──> D-03 (signing frame — needs zones to exist)
                                    │         │
                                    │         ├──> D-04 (surprise in second half — needs base to break)
                                    │         │
                                    │         ├──> D-06 (negative space — needs zones to shape gaps between)
                                    │         │
                                    │         └──> D-09 (quiet zone — needs zone structure to designate one as quieter)
                                    │
                                    └──> D-05 (reader's scroll — assessment of rhythm created by D-01..D-04)
                                              │
                                              └──> D-07 (edge intentionality — polish AFTER composition is set)
                                                        │
                                                        └──> D-08 (skeleton test — pure assessment, no CSS)
```

### Recommended Split: COMPOSITION Pass vs POLISH Pass

**Pass A ("Compose"):** D-01, D-02, D-03, D-04, D-05, D-06, D-09
- Everything that determines the page's COMPOSITIONAL ARCHITECTURE
- Zone definitions, transitions, scroll rhythm, spatial hierarchy, surprise moments, quiet zones
- This is the structural skeleton + the compositional decisions that make it a DESIGNED page
- Produces: complete HTML with all zones, transitions, backgrounds, typography hierarchy, layout grids, density arc, surprise moments, quiet zones

**Pass B ("Polish"):** D-07 (Edge Intentionality) + D-08 (Skeleton Test as assessment) + Accessibility + Self-evaluation
- Everything that REFINES the existing composition without restructuring it
- Hover states, ::selection colors, micro-typography, tabular-nums, print styles, first/last child treatments
- WCAG accessibility (skip links, ARIA, contrast, focus-visible)
- Semantic HTML verification
- The full self-evaluation (Step 5.0 through 5.7)
- Produces: enriched HTML with behavioral CSS, accessibility layer, and documented self-assessment

### Why NOT D-01..D-05 / D-06..D-09

The original proposed split would put D-06 (Negative Space) and D-09 (Quiet Zone) in Pass B, but both are STRUCTURAL decisions — they modify zone padding and zone content density, which are composition-level choices. Putting them in a "refinement" pass would mean Pass B needs to restructure HTML (moving content, changing zone padding), which violates the principle that Pass B should only ADD, not restructure.

D-07 is the natural isolation candidate because it is the ONLY disposition that produces CSS without affecting composition. Hover states, ::selection, print styles — these all ADD behavior to existing elements without moving anything.

---

## 2. Exact Disposition Assignments

### Pass A: COMPOSE (D-01, D-02, D-03, D-04, D-05, D-06, D-09)

Pass A receives the full recipe Phases 1-4 (minus D-07 and D-08) plus Phase 6 (Temporal Composition).

| Recipe Section | Pass A Role |
|---------------|-------------|
| PHASE 1: Read Vocabulary | Full — read tokens.css, components.css, mechanism-catalog.md |
| PHASE 2: Select Creative Decisions | Full — all 9 steps (2.1 through 2.9) |
| PHASE 3: Deploy Scaffolding | Full — 6-channel framework, zone heights, density arc, page build, component adaptation, signal declarations |
| PHASE 4: Deploy Disposition | D-01, D-02, D-03, D-04, D-05, D-06, D-09 (7 of 9 dispositions) |
| PHASE 5: Self-Evaluate | Partial — Step 5.3 (screenshot vs conviction), Step 5.5 (scroll), Step 5.6 (mode check) ONLY |
| PHASE 6: Temporal Composition | Full — density arc, multi-coherence, metaphor, content-form coupling |

**Pass A conviction statement:** Required. 3 sentences as `<!-- CONVICTION: ... -->`.

**Pass A RESIDUAL artifact:** Required. `<!-- RESIDUAL: ... -->` documenting what was preserved, changed, what comes next, trade-offs.

### Pass B: POLISH (D-07, D-08 + Accessibility + Full Self-Eval)

| Recipe Section | Pass B Role |
|---------------|-------------|
| PHASE 1: Read Vocabulary | Abbreviated — re-read tokens.css (for hover color vocabulary) and brief (for zone context) only |
| PHASE 4: Deploy Disposition | D-07 (Edge Intentionality) and D-08 (Skeleton Test as assessment) |
| PHASE 5: Self-Evaluate | Full — ALL steps including Step 5.0 (experiential reader pass, MANDATORY), 5.1 (legibility), 5.2 (visual clarity), 5.3 (screenshot vs conviction), 5.4 (skeleton test / D-08), 5.5-5.7 |
| New: ACCESSIBILITY | Skip link, ARIA landmarks, heading hierarchy, focus-visible, color contrast, reduced-motion |
| New: SEMANTIC HTML | Verify `<section>`, `<article>`, `<nav>`, `<figure>` usage; heading hierarchy |

---

## 3. Pass B Input Specification

### What Pass B Receives

| Input | Source | Lines (est.) | Purpose |
|-------|--------|-------------|---------|
| Pass A HTML output | Phase 2A output | 800-1200 | The page to polish |
| Execution Brief | Phase 1 output | ~100-165 | Zone context, metaphor, perception thresholds |
| tokens.css | Direct file route | 183 | Hover color vocabulary, token names |
| D-07 recipe section | Extracted from builder-recipe.md | ~25 | Edge Intentionality disposition |
| D-08 recipe section | Extracted from builder-recipe.md | ~8 | Skeleton Test (assessment) |
| Phase 5 self-eval instructions | Extracted from builder-recipe.md | ~80 | Full self-evaluation protocol (Steps 5.0-5.7) |
| Accessibility checklist | New content (see below) | ~30 | WCAG 2.1 AA requirements |
| **Total** | | **~1,426-1,691** | Well under BV-07 ceiling of 2,500 |

### What Pass B Does NOT Receive

- mechanism-catalog.md (1,200+ lines) — Not needed. Pass B deploys no new mechanisms.
- components.css (~944 lines) — Not needed. Pass B adopts no new components.
- Value tables (~262 lines) — Not needed. Pass B creates no new zone styling.
- CD-006 reference (~1,200 lines) — Not needed. Pass B is not making compositional decisions.
- Gate thresholds — Same isolation as initial builder.
- Pass A gate results — Pass B is ISOLATED from gate results. Same principle as REFINE builder.

### Pass B Isolation Principle

Pass B follows the same isolation philosophy as the REFINE builder: it enters POLISHING mode, not CORRECTIVE mode. It does not know what gates passed or failed. It receives the execution brief for CONTEXT (understanding the zone structure and metaphor), not for CONSTRAINT (re-checking compliance).

Key difference from REFINE: Pass B is a PLANNED second pass (happens every build). REFINE is a REACTIVE second pass (happens only when PA-05 < 3.5).

---

## 4. Pass B Creative Authority: ADD-Only Constraint

Pass B receives Pass A HTML and operates under an **ADD-ONLY constraint** with narrow exceptions:

### Permitted Operations
- **ADD** inline CSS rules for: `:hover`, `:focus-visible`, `::selection`, `@media print`, `@media (prefers-reduced-motion)`, `:first-child`, `:last-child`, `:nth-child`
- **ADD** ARIA attributes (`role`, `aria-label`, `aria-describedby`, etc.)
- **ADD** a `<a href="#main" class="skip-link">` element
- **ADD** `tabindex` attributes for keyboard navigation
- **ADD** `<figure>` / `<figcaption>` wrappers around images
- **ADD** HTML comment blocks for self-evaluation and experiential check
- **MODIFY** heading hierarchy ONLY if it violates accessibility (e.g., `<h1>` → `<h2>` → `<h4>` skip → fix to `<h3>`)
- **MODIFY** `font-variant-numeric: tabular-nums` on numeric elements
- **MODIFY** `text-indent` on paragraphs (D-07 micro-refinement)

### Prohibited Operations
- **NO** changing zone backgrounds (BV-02 locked)
- **NO** changing layout structure (grid, flexbox, zone ordering)
- **NO** adding or removing zones
- **NO** changing font-size, font-weight, or line-height on any element
- **NO** changing padding or margin on any zone or section
- **NO** changing border-width or border-color on any element
- **NO** moving content between zones
- **NO** changing the governing metaphor or CSS custom property names

### Rationale

If Pass B could restructure, it would need the full compositional context (mechanism catalog, value tables, CD-006 reference), defeating the purpose of the split. The ADD-only constraint keeps Pass B focused and its input volume low.

---

## 5. Recipe Restructuring Plan

### Current Structure (833 lines)

```
Lines 1-17:    Header + "How to Use This Document"
Lines 19-72:   PHASE 1: READ YOUR VOCABULARY (Steps 1.1-1.4)
Lines 75-186:  PHASE 2: SELECT CREATIVE DECISIONS (Steps 2.1-2.9)
Lines 189-321: PHASE 3: DEPLOY SCAFFOLDING (Steps 3.1-3.5)
Lines 324-477: PHASE 4: DEPLOY DISPOSITION (D-01 through D-09 + assessment)
Lines 481-569: PHASE 5: SELF-EVALUATE (Steps 5.0-5.7)
Lines 572-605: PHASE 6: TEMPORAL COMPOSITION (Steps 6.1-6.6)
Lines 608-833: APPENDIX A-C (Amendments, Cross-Reference, Evidence)
```

### Proposed Structure: Two Recipe Files

#### File 1: `artifact-builder-recipe-compose.md` (~620 lines)

```
[Lines 1-17 verbatim]: Header + "How to Use This Document"
  - MODIFY header to say "COMPOSE PASS (Pass A)"
  - ADD note: "This is Pass A of a two-pass build. You produce the compositional
    skeleton. A separate Pass B agent will add polish (hover states, accessibility,
    micro-refinements). Do NOT attempt D-07 or D-08."

[Lines 19-72 verbatim]: PHASE 1: READ YOUR VOCABULARY

[Lines 75-186 verbatim]: PHASE 2: SELECT CREATIVE DECISIONS

[Lines 189-321 verbatim]: PHASE 3: DEPLOY SCAFFOLDING

[Lines 324-398 verbatim]: PHASE 4 D-01 through D-05
[Lines 406-456 verbatim]: D-06, D-09
  - REMOVE D-07 (lines 419-432)
  - REMOVE D-08 (lines 434-437)
  - REINSERT D-09 (lines 438-456) after D-06
  - ADD note after D-09: "D-07 and D-08 are handled in Pass B."
[Lines 458-477 verbatim]: Assess Disposition Deployment

[Lines 481-569 PARTIAL]: PHASE 5 — Steps 5.3, 5.5, 5.6 ONLY
  - REMOVE Step 5.0 (experiential reader pass — moves to Pass B)
  - REMOVE Step 5.1 (text legibility — moves to Pass B)
  - REMOVE Step 5.2 (visual component clarity — moves to Pass B)
  - KEEP Step 5.3 (screenshot vs conviction)
  - REMOVE Step 5.4 (skeleton test — this IS D-08, moves to Pass B)
  - KEEP Step 5.5 (reader's scroll — already done as D-05)
  - KEEP Step 5.6 (mode indicators)
  - MODIFY Step 5.7 to remove "Accessible" and "designed moments (D-07)" targets

[Lines 572-605 verbatim]: PHASE 6: TEMPORAL COMPOSITION

[Lines 608-833]: APPENDIX A-C (unchanged)
```

Net: ~620 lines (removed ~210 lines of D-07, D-08, Steps 5.0/5.1/5.2/5.4)

#### File 2: `artifact-builder-recipe-polish.md` (~200 lines, NEW)

```
# Builder Recipe: Polish Pass (Pass B)
Date: 2026-02-26
Status: AUTHORITATIVE (extends artifact-builder-recipe-compose.md)
Pass: B (POLISH — adds behavioral CSS, accessibility, self-evaluation)
Creative Authority: ADD-ONLY within composition established by Pass A.

---

## How to Use This Document

You received a COMPLETE HTML page from Pass A. Your job is to POLISH it —
add hover states, micro-refinements, accessibility features, and thorough
self-evaluation. You do NOT restructure, restyle zones, or change the metaphor.

---

## PHASE 1: ORIENT

### Step 1.1: Read the Pass A HTML
Read the complete HTML from top to bottom. Identify:
- The governing metaphor (from <!-- CONVICTION: ... -->)
- The zone structure (how many zones, their backgrounds)
- The density arc (which zones are dense, which are sparse)
- The quiet zone (D-09 — which zone is deliberately plainer)

### Step 1.2: Re-read tokens.css (183 lines)
Focus on hover-relevant tokens: color values for interactive states.

### Step 1.3: Re-read the Execution Brief
Focus on zone definitions and perception thresholds (for ::selection contrast).

---

## PHASE 2: DEPLOY D-07 — EDGE INTENTIONALITY [EXPERIMENTAL]

[D-07 section from builder-recipe.md lines 419-432, verbatim]

Apply these techniques to the existing page:

### Step 2.1: Hover States
- Table rows: subtle background tint on hover
- Links: border-bottom or color shift on hover
- Callouts: slight border-color shift on hover
- Cards: border-left-width increase on hover

### Step 2.2: Micro-Typography
- Numbers in tables/lists: `font-variant-numeric: tabular-nums`
- Opening paragraphs: `text-indent: 1.5em` (if compositionally appropriate)
- Zone-specific `::selection` colors (match zone background warmth)

### Step 2.3: Print Styles
- `@media print { ... }` — hide navigation, adjust margins, ensure readability

### Step 2.4: Edge Treatments
- First child of each zone: distinctive top treatment (padding or border)
- Last child of each zone: breathing space before transition
- Even/odd row differentiation in tables (subtle background alternation)

### Step 2.5: Reduced Motion
- `@media (prefers-reduced-motion: reduce) { ... }` — disable any transitions/animations

---

## PHASE 3: DEPLOY ACCESSIBILITY

### Step 3.1: Skip Link
Add `<a href="#main" class="skip-link">Skip to main content</a>` as first child of `<body>`.
Style: visually hidden, visible on :focus.

### Step 3.2: ARIA Landmarks
- `<header role="banner">`
- `<main id="main" role="main">`
- `<nav role="navigation">` (if TOC exists)
- `<footer role="contentinfo">`

### Step 3.3: Heading Hierarchy
Verify headings skip no levels. Fix if violated (this is the ONE permitted structural change).

### Step 3.4: Focus-Visible
All interactive elements: `:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }`

### Step 3.5: Color Contrast
Verify text meets WCAG 2.1 AA contrast ratios. If any text fails, increase contrast.

---

## PHASE 4: DEPLOY D-08 — THE SKELETON TEST [EXPERIMENTAL]

[D-08 section from builder-recipe.md lines 434-437, verbatim]

Mentally strip content. Does the skeleton have shape? Report your finding in the self-evaluation.

---

## PHASE 5: FULL SELF-EVALUATION

[Steps 5.0 through 5.7 from builder-recipe.md, VERBATIM — this is the full version
including the experiential reader pass, legibility checks, and visual component clarity]

Step 5.0: MANDATORY experiential reader pass — read the page as a reader would.
Step 5.1: Text legibility across the page.
Step 5.2: Visual component clarity.
Step 5.3: Screenshot and assess vs conviction.
Step 5.4: Skeleton Test (D-08).
Step 5.5: Reader's Scroll (D-05 verification).
Step 5.6: Mode indicators.
Step 5.7: Output targets.

Place all findings in:
<!-- EXPERIENTIAL-CHECK: ... -->
<!-- SELF-EVALUATION: ... -->

---

## ADD-ONLY CONSTRAINT

You are ADDING to Pass A's composition. Prohibited modifications:
- Zone backgrounds (locked by BV-02)
- Layout structure (grid, flexbox, zone ordering)
- Font-size, font-weight, line-height on any element
- Padding or margin on zones/sections
- Border-width or border-color
- Governing metaphor or CSS custom property names

If you discover a compositional flaw during D-08 or Step 5.0, DOCUMENT it in
the self-evaluation comment but do NOT fix it. The PA audit will catch it and
the REFINE protocol will address it.
```

---

## 6. Gate Timing Recommendation

### Current Gate Architecture (54 gates)

Gates are organized into categories. The question is: which gates are relevant AFTER Pass A, which AFTER Pass B, and which need to run at both points?

### Recommendation: Gates Run ONCE, After Pass B

**Rationale:** Running gates after Pass A creates a problem — if gates fail, who fixes them? Pass A is done. Pass B is ADD-only and cannot fix compositional issues. The orchestrator would need to either:
1. Re-run Pass A (expensive, defeats the purpose)
2. Allow Pass B to fix gate failures (violates ADD-only constraint)
3. Accept the failure and let PA audit catch it (the current model)

Option 3 is correct. Gates should run ONCE, after Pass B completes, because:
- Pass B only ADDS CSS — it cannot CREATE new gate failures for identity/composition gates
- Pass B CAN create accessibility gate issues, but those gates (GR-60 WCAG) should run last anyway
- Running gates twice doubles Playwright execution time (~5 min → ~10 min)

### Exception: BV-07 (Builder Input Volume Ceiling)

BV-07 must be checked TWICE — once for Pass A input, once for Pass B input. Both must be under 2,500 lines.

**Pass A input estimate:**
- Execution Brief: ~100-165 lines
- tokens.css: 183 lines
- components.css: ~944 lines
- mechanism-catalog.md: ~1,200+ lines (this is the problem)
- Value tables: ~262 lines
- CD-006 reference (COMPOSED only): ~1,200 lines
- Total without CD-006: ~2,689-2,754 lines — OVER BV-07 CEILING
- Total with CD-006: ~3,889-3,954 lines — WAY OVER

**This is a pre-existing problem.** The current single-pass builder already exceeds BV-07. The two-pass split does not make it worse. Pass A gets the same input the current builder gets. BV-07 may need its ceiling raised or mechanism-catalog.md may need compression for builder use.

**Pass B input estimate:**
- Pass A HTML: 800-1200 lines
- Execution Brief: ~100-165 lines
- tokens.css: 183 lines
- D-07 + D-08 recipe: ~35 lines
- Phase 5 self-eval: ~80 lines
- Accessibility checklist: ~30 lines
- Total: ~1,228-1,693 lines — WELL under BV-07 ceiling

### Gate Timing Summary

| Gate Category | When | Why |
|--------------|------|-----|
| BV-01..BV-06 | Before Phase 2 (unchanged) | Brief verification |
| BV-07 | Before Phase 2A AND before Phase 2B | Volume ceiling per-pass |
| GR-01..GR-22, GR-43..GR-53, GR-60..GR-64 | After Phase 2B | Full post-build gate suite |
| GR-23..GR-28 (orchestrator decision rules) | Before Phase 2A (unchanged) | Pre-build checks |

---

## 7. REFINE Interaction Design

### Current REFINE Protocol

REFINE spawns a different Opus builder with: conviction + artistic impression + RESIDUAL + brief + Pass 1 HTML. The REFINE builder enters COMPOSITIONAL mode and deepens relationships.

### Two-Pass REFINE: Which Pass Does REFINE Target?

**Answer: REFINE replaces Pass A ONLY. Pass B re-runs on the new Pass A output.**

Reasoning:
- If PA audit says REFINE, the problem is COMPOSITIONAL (PA-05 2.5-3.5 means the page lacks designed/coherent/proportionate/polished quality). This is Pass A's domain.
- Giving the REFINE builder Pass A's HTML and asking them to deepen composition is correct. The REFINE builder should NOT be burdened with also adding hover states and accessibility — those are mechanical tasks that can happen after.
- After REFINE Pass A produces new HTML, Pass B re-runs on the new HTML to add polish.

### REFINE Flow

```
Initial Pipeline:
  Phase 0 → Phase 1 → Phase 2A (Compose) → Phase 2B (Polish) → Phase 3 (Audit) → Verdict

If REFINE:
  Phase 2A' (REFINE Compose — different Opus, reads conviction + artistic)
    → Phase 2B' (Polish — re-runs on new HTML, can be same or different agent)
    → Phase 3' (Full re-audit)
    → Verdict'
```

### REFINE Builder Input (unchanged from current)

The REFINE builder receives exactly what the current REFINE protocol specifies:
1. Conviction artifact from Pass A
2. Artistic impression from Weaver
3. RESIDUAL artifact from Pass A
4. Original Execution Brief
5. Pass A HTML output (NOT Pass B output — REFINE targets composition, not polish)

**Critical:** REFINE builder does NOT receive Pass B's HTML. It receives Pass A's raw compositional output. This ensures REFINE is working on the composition, not the polished version. After REFINE produces new HTML, Pass B re-runs fresh to add the polish layer.

### REFINE Self-Evaluation

The REFINE builder does the same partial self-eval as Pass A (Steps 5.3, 5.5, 5.6 only). The full experiential self-evaluation happens in Pass B.

---

## 8. Dependency Analysis

### Hard Dependencies (blocking)

| Pass B Depends On | Reason |
|-------------------|--------|
| Pass A HTML output exists | Pass B's primary input |
| Pass A conviction statement exists | Pass B reads it for orientation |
| Execution Brief exists | Pass B reads for zone context |
| tokens.css exists | Pass B reads for hover vocabulary |

### Soft Dependencies (informational)

| Pass B Benefits From | Reason |
|---------------------|--------|
| Pass A RESIDUAL artifact | Helps Pass B understand trade-offs |
| Pass A self-eval comments | Helps Pass B understand what was verified |

### Dependency Chains Within Dispositions

| Dependency | Risk If Violated |
|-----------|------------------|
| D-07 (hover states) depends on D-02 (zone boundaries) | Hover states need to know zone context for ::selection colors |
| D-07 (edge intentionality) depends on D-03 (border hierarchy) | Hover border changes must respect the 4px/3px/1px hierarchy |
| D-08 (skeleton test) depends on D-01..D-06, D-09 | Assessment of everything |
| Accessibility depends on D-09 (quiet zone) | Skip link target, ARIA landmark placement |

All dependencies flow FROM Pass A TO Pass B. No circular dependencies. No Pass A → Pass B → Pass A feedback needed.

### The D-07 → Background Hex Lock Dependency

D-07 includes `::selection` colors which should be zone-aware. Pass B needs to know zone backgrounds (from the brief, which it receives). The background hex values are LOCKED in the brief, so Pass B can read them directly. No dependency on Pass A's CSS for this — the brief is the source of truth.

---

## 9. Risk Analysis

### Risk 1: Pass B Breaks Pass A's Composition (MEDIUM)

**What could go wrong:** Pass B adds hover states that conflict with the compositional logic. Example: adding a bright hover color in a quiet zone (D-09) that breaks the zone's deliberately restrained character.

**Mitigation:** The ADD-only constraint + zone context from the brief. Pass B must respect zone character when choosing hover treatments. Add explicit instruction: "Hover states in the quiet zone should be subtle (1px border shift, slight opacity change) rather than dramatic (color change, size increase)."

### Risk 2: Pass B Misses Self-Eval Issues It Cannot Fix (MEDIUM)

**What could go wrong:** Pass B runs Step 5.0 (experiential reader pass) and discovers a compositional flaw (e.g., two adjacent zones have nearly identical backgrounds). But it cannot fix this (ADD-only constraint). The flaw gets documented but not fixed until REFINE.

**Mitigation:** This is BY DESIGN. Pass B documents the issue; the PA audit confirms it; REFINE fixes it. The self-evaluation in Pass B serves as an early warning system, not a fix mechanism. Adding a note to the recipe: "If you find a compositional flaw, document it in `<!-- EXPERIENTIAL-CHECK: COMPOSITIONAL-ISSUE: [description] -->`. This will be caught by the PA audit."

### Risk 3: Two Opus Calls vs One (COST)

**What could go wrong:** Two builder Opus calls cost roughly twice the tokens of one call.

**Mitigation:** Pass B is significantly smaller context (1,300-1,700 lines input vs 2,700+ lines for Pass A). Pass B generates less CSS (~100-200 lines of behavioral CSS + accessibility vs 800-1200 lines for Pass A). Net cost increase: ~40-60%, not 100%. This is offset by the expected quality improvement (fewer REFINE cycles if D-07/D-08 get proper attention).

### Risk 4: Pass B Receives Stale Context (LOW)

**What could go wrong:** If the brief is modified between passes (it shouldn't be — briefs are immutable after BV verification).

**Mitigation:** Both passes receive the same brief. The brief is immutable. Pass B also reads the Pass A conviction statement for additional context grounding.

### Risk 5: Attention Decay Within Pass A (LOW-MEDIUM)

**What could go wrong:** Even with D-07/D-08 removed, Pass A still has 7 dispositions. D-06 and D-09 (the last two in Pass A) might still suffer attention decay.

**Mitigation:** Pass A's recipe is ~620 lines, down from 833. The removed dispositions were 35 lines of text, but the bigger savings are the 130+ lines of Phase 5 self-evaluation (Steps 5.0-5.2, 5.4) that moved to Pass B. This meaningfully reduces late-context content. Additionally, D-06 and D-09 are compositional decisions that benefit from being in the SAME context as D-01-D-05 (they need to see the full zone structure). The attention decay risk is acceptable because the removed material is BEHAVIORAL (hover states) not COMPOSITIONAL (zone structure).

### Risk 6: REFINE Protocol Confusion (MEDIUM)

**What could go wrong:** Orchestrator feeds REFINE builder the Pass B HTML instead of Pass A HTML, causing the REFINE builder to try to deepen hover states rather than composition.

**Mitigation:** Explicit protocol in orchestrator: "REFINE builder receives `p2a-compose-*.html`, NOT `p2b-polish-*.html`." Add to file naming convention: Pass A output is `p2a-compose-{timestamp}.html`, Pass B output is `p2b-polish-{timestamp}.html`. Different naming prevents confusion.

---

## 10. Orchestrator Changes Required

### Phase 2 Split

Current:
```
Phase 2: Spawn Builder → Receive HTML
```

Proposed:
```
Phase 2A: Spawn Compose Builder (Opus) → Receive Pass A HTML
Phase 2B: Spawn Polish Builder (Opus) → Receive Pass B HTML
```

### Execution Tracker Template Changes

Add new fields:
```
## Phase 2A: COMPOSE
P2A-1: Pass A builder spawned? [Y/N]
P2A-2: Pass A conviction artifact captured? [Y/N]
P2A-3: Pass A RESIDUAL artifact captured? [Y/N]
P2A-4: Pass A HTML output received? [Y/N]
P2A-5: Pass A HTML lines: ___
P2A-6: Pass A CSS lines: ___

## Phase 2B: POLISH
P2B-1: BV-07 check for Pass B inputs? [Y/N, lines: ___]
P2B-2: Pass B builder spawned? [Y/N]
P2B-3: Pass B received Pass A HTML? [Y/N]
P2B-4: Pass B HTML output received? [Y/N]
P2B-5: Pass B HTML lines: ___
P2B-6: Pass B CSS lines added: ___
P2B-7: Pass B experiential check documented? [Y/N]
P2B-8: Pass B self-evaluation documented? [Y/N]
```

### REFINE Protocol Update

Add to orchestrator REFINE section:
```
REFINE targets Pass A ONLY:
1. Spawn REFINE Compose Builder with: conviction + artistic + RESIDUAL + brief + Pass A HTML
2. After REFINE Compose completes: spawn Pass B Polish Builder on new HTML
3. After Pass B completes: proceed to Phase 3 re-audit
```

### Builder Prompt Template Changes

The current builder prompt (MANIFEST Appendix E) becomes the Pass A prompt with these modifications:
- Title: "You are the COMPOSE Builder for Pipeline v3 (Pass A of 2)."
- Add note about what is NOT your responsibility (D-07, D-08, accessibility, full self-eval)
- Remove D-07, D-08 from the recipe reference
- Remove Steps 5.0, 5.1, 5.2, 5.4 from self-eval section

New Pass B prompt template (see Section 5 above for recipe content):
- Title: "You are the POLISH Builder for Pipeline v3 (Pass B of 2)."
- ADD-only constraint is FIRST in prompt (primacy position)
- D-07, accessibility, self-eval are the operative sections

### File Naming Convention

| Output | Filename |
|--------|----------|
| Pass A HTML | `p2a-compose-{timestamp}.html` |
| Pass B HTML | `p2b-polish-{timestamp}.html` |
| REFINE Pass A HTML | `p2a-compose-refine-{timestamp}.html` |
| REFINE Pass B HTML | `p2b-polish-refine-{timestamp}.html` |

---

## 11. Builder Input Volume Analysis (BV-07 Compliance)

### Pass A (Compose)

| Input File | Lines | Notes |
|-----------|-------|-------|
| Execution Brief | ~100-165 | Primary guide |
| tokens.css | 183 | Direct file |
| components.css | ~944 | Direct file |
| mechanism-catalog.md | ~1,200+ | Direct file |
| Value tables | ~262 | Direct file |
| CD-006 reference (COMPOSED only) | ~1,200 | Optional |
| **Total (APPLIED)** | **~2,689-2,754** | OVER 2,500 ceiling |
| **Total (COMPOSED)** | **~3,889-3,954** | WAY OVER 2,500 ceiling |

**Status:** BV-07 is ALREADY violated by the current single-builder architecture. The two-pass split does not make this worse. Recommendation: either raise BV-07 ceiling for Pass A or compress mechanism-catalog.md for builder consumption (create a ~500 line summary version).

### Pass B (Polish)

| Input File | Lines | Notes |
|-----------|-------|-------|
| Pass A HTML | ~800-1,200 | Primary input |
| Execution Brief | ~100-165 | Zone context |
| tokens.css | 183 | Hover vocabulary |
| Polish recipe | ~200 | D-07 + D-08 + accessibility + self-eval |
| **Total** | **~1,283-1,748** | WELL under 2,500 ceiling |

**Status:** Pass B comfortably fits within BV-07.

---

## 12. Exact Edit Specifications

### Files to Create (2 new files)

1. **`artifact-builder-recipe-compose.md`** (~620 lines)
   - Source: artifact-builder-recipe.md with deletions
   - Remove: D-07 (lines 419-432), D-08 (lines 434-437), Steps 5.0 (lines 483-521), 5.1 (lines 523-527), 5.2 (lines 529-533), 5.4 (lines 541-543)
   - Add: Header indicating "Pass A — Compose"
   - Add: Note after D-09 "D-07 and D-08 are handled in Pass B"

2. **`artifact-builder-recipe-polish.md`** (~200 lines)
   - Source: New file (content in Section 5 above)
   - Contains: D-07 extracted, D-08 extracted, accessibility checklist, Phase 5 full self-eval

### Files to Modify (4 existing files)

3. **`MANIFEST.md`** — Section 2 Agent Roster, Phase 2 row
   - Change: "Builder" → "Compose Builder (Pass A)" + "Polish Builder (Pass B)"
   - Add: Pass B agent row with inputs/outputs
   - Update: Section 3 artifact routing for the two recipe files
   - Update: Appendix E prompt templates (add Pass B prompt)

4. **`artifact-orchestrator.md`** — Section 4 Phase 2
   - Change: Single "Phase 2: Building" → "Phase 2A: Compose" + "Phase 2B: Polish"
   - Add: Phase 2B protocol (spawn, inputs, constraints)
   - Update: Section 7 REFINE protocol (targets Pass A only, re-runs Pass B)
   - Update: Dependency graph (Phase 2A → Phase 2B → Phase 3A)

5. **`EXECUTION-TRACKER-TEMPLATE.md`**
   - Add: P2A and P2B field sections (see Section 10 above)

6. **`artifact-builder-recipe.md`** (original)
   - Change: Add redirect header pointing to compose + polish split files
   - OR: Keep as reference/archive with note that operational versions are the split files

### Files NOT Modified

- gate-runner-core.js — No gate changes needed
- gate-manifest.json — No new gates needed
- pa-questions.md — No PA changes needed
- pa-deployment.md — No deployment changes needed
- artifact-identity-perception.md — No identity changes needed
- artifact-routing.md — No routing changes needed (Brief Assembler still references the original recipe for extraction guidance)

---

## 13. Summary: Decision Matrix

| Question | Answer |
|----------|--------|
| Split point | D-01..D-06,D-09 (Compose) / D-07,D-08 (Polish) + accessibility + self-eval |
| Pass B input | Pass A HTML + brief + tokens.css + polish recipe (~1,300-1,700 lines) |
| Pass B isolation | Same as REFINE: no gate results, no PA scores, no diagnostic language |
| Recipe structure | Two separate files: `compose` (~620 lines) and `polish` (~200 lines) |
| Gate timing | Once, after Pass B (exception: BV-07 checked before each pass) |
| REFINE targets | Pass A only. Pass B re-runs on new Pass A output. |
| Dependencies | All flow Pass A → Pass B. No circular dependencies. |
| Pass B authority | ADD-only (behavioral CSS + accessibility + self-eval). No restructuring. |
| BV-07 compliance | Pass A: pre-existing violation (unchanged). Pass B: comfortably under. |
| Cost estimate | ~40-60% increase in builder token cost. Offset by fewer REFINE cycles. |
| Risk rating | MEDIUM overall. Highest risk: REFINE protocol confusion (mitigated by file naming). |

---

*End of D5 Two-Pass Builder Design. Research only — no pipeline files edited.*
