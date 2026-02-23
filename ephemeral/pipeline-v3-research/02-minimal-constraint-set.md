# 02: The Minimal Constraint Set -- Every Line, Every Rule, Every Threshold

**Author:** constraint-designer (Opus 4.6)
**Date:** 2026-02-22
**Task:** Design the exact 73-line minimal constraint set that OUTPERFORMS the 963-line master prompt by removing all 20 quality suppressors while retaining identity protection and positive scaffolding.

**Files Read (6):**
- `ephemeral/handoff-research/59-suppressor-archaeology.md` (867 lines, full)
- `ephemeral/handoff-research/50-adversarial-integration-gaps.md` (329 lines, full)
- `ephemeral/handoff-research/43-embodiment-chain.md` (452 lines, full)
- `design-system/compositional-core/identity/prohibitions.md` (419 lines, full)
- `design-system/compositional-core/vocabulary/tokens.css` (183 lines, full)
- `ephemeral/build-page-prompt/MASTER-EXECUTION-PROMPT.md` (578 lines, full)

---

## EXECUTIVE SUMMARY

This document delivers the concrete 73-line minimal constraint set predicted by Report 59's suppressor archaeology. The set is organized into three layers:

- **Layer 1: IDENTITY (15 lines)** -- Soul constraints preventing catastrophic identity failure
- **Layer 2: PERCEPTION (8 lines)** -- Calibration thresholds preventing measured failure modes
- **Layer 3: SCAFFOLDING (50 lines)** -- Positive frameworks providing the 30-40% of quality Opus cannot produce natively

Every rule is binary (pass/fail), every rule has a compliance test, and every rule traces to a specific catastrophic failure it prevents. The ~55 rules removed from the 963-line master prompt are cataloged with removal rationale.

**Predicted quality:** 3.5-4.0/4 on PA-05 (vs 1.5/4 from the 963-line prompt, vs 4/4 from the 100-line Middle recipe).

---

## PART 1: THE EXACT 73 LINES

### Layer 1: IDENTITY (15 lines)

These 15 lines define what KortAI IS by what it REFUSES. Without them, Opus produces generic editorial web design. With them, output is identity-specific.

```
LINE  RULE
----  ----
 1    border-radius: 0 on every element. No exceptions.
 2    box-shadow: none on every element. No exceptions.
 3    No filter: drop-shadow() anywhere.
 4    No gradient backgrounds (linear-gradient, radial-gradient, conic-gradient).
 5    No opacity < 1.0 on backgrounds or pseudo-elements.
 6    No pure black (#000000) or pure white (#FFFFFF). Use #1A1A1A and #FEF9F5.
 7    Warm palette: R >= G >= B on every background color.
 8    Container: 940-960px max-width. Every page. No exceptions.
 9    Font trinity: Instrument Serif for headings, Inter for body, JetBrains Mono for code.
10    Instrument Serif is DISPLAY ONLY -- never for body text.
11    All h3 elements must be italic.
12    No vertical borders in tables. Horizontal rules only.
13    No 2px borders. Use 4px (accent), 3px (structural), 1px (separator).
14    Border-left on callouts: 4px minimum.
15    No decorative elements that carry zero information.
```

### Layer 2: PERCEPTION (8 lines)

These 8 lines prevent the specific failure modes Opus commits without calibration. Each threshold is empirically derived from documented failures.

```
LINE  RULE
----  ----
16    Adjacent zone backgrounds must differ by >= 15 RGB points (max single-channel delta).
17    Letter-spacing, when used, must be >= 0.025em per element.
18    No single margin or padding value exceeds 96px.
19    Total stacked gap at any section boundary must not exceed 120px.
20    Font-size between body text in different zones must differ by >= 2px when varied.
21    No consecutive viewport-height scroll positions with < 30% content coverage (max 1 allowed).
22    At least 1 designed moment (3+ mechanisms at high intensity) must appear below 50% scroll depth.
23    Every CSS value the builder writes must be perceptible to a human eye.
```

### Layer 3: SCAFFOLDING (50 lines)

These 50 lines provide the positive frameworks that Opus does not natively possess. They are the 30-40% of quality that comes from this project's research, not from Opus's training data. Written as WORLD-DESCRIPTION, not commands.

**Subgroup A: Multi-Coherence Framework (18 lines)**

```
LINE  RULE
----  ----
24    A page has 3-5 zones, each with a distinct background color from the warm palette.
25    Six channels encode composition: Chromatic (background color), Typographic (size/weight/family),
26      Spatial (padding/margin), Structural (borders/components), Behavioral (transitions/states),
27      Material (texture/pattern).
28    At every zone boundary, >= 3 channels shift simultaneously in the same semantic direction.
29    Average channel shifts across all boundaries: >= 4.
30    Four semantic directions for channel shifts:
31      DEEPENING = denser spacing, heavier borders, darker backgrounds, smaller text.
32      OPENING = wider spacing, lighter borders, brighter backgrounds, larger text.
33      FOCUSING = tighter spacing, stronger borders, subtle backgrounds, precise text.
34      RESOLVING = moderate spacing, medium borders, warm backgrounds, balanced text.
35    At each boundary, decide ONE direction and shift 3+ channels in that direction.
36    Build boundary-by-boundary (set all channels at each boundary), not channel-by-channel
37      (set all backgrounds, then all borders). This produces multi-coherence naturally.
38    A boundary is a HARD CUT (3px border + bg change), BRIDGE (1px borders + mono label + bg),
39      or BREATHING (spacing shift only, no border, no bg change). Use all 3 types across a page.
40    Channel shifts must be PERCEPTIBLE -- every shift must meet the Layer 2 thresholds above.
41    Plan the full chromatic arc before writing CSS: list all zone backgrounds with RGB values
42      and verify each adjacent pair has >= 15 delta.
```

**Subgroup B: Structural Metaphor (8 lines)**

```
LINE  RULE
----  ----
43    Before building, derive a structural metaphor from the content. The metaphor organizes
44      the page architecture, names the zones, and determines which mechanisms are deployed where.
45    The metaphor must be STRUCTURAL (embodied in CSS: spacing, borders, colors, layout)
46      not ANNOUNCED (mentioned in text labels but invisible in CSS).
47    Test: if you remove all text labels and HTML comments, can a viewer still identify the
48      metaphor from CSS structure alone? If no, the metaphor is announced, not structural.
49    Each zone should have a metaphor-derived name used in CSS class names.
50    The metaphor determines per-section mechanism deployment -- not all sections get the same
      treatment. Different content character = different form.
```

**Subgroup C: Density Arc (6 lines)**

```
LINE  RULE
----  ----
51    Every page has a density arc: OPENING (wide, airy, inviting) -> DEEPENING (tighter,
52      denser, more mechanisms) -> RESOLVING (moderate, balanced, concluding).
53    The arc maps to CSS parameters: opening zones get max spacing and min mechanisms;
54      deepening zones get min spacing and max mechanisms; resolving zones balance both.
55    Do not front-load all visual interest in the first third. Distribute designed moments
56      across the full scroll depth (verified by Line 22 above).
```

**Subgroup D: Content-Form Coupling (4 lines)**

```
LINE  RULE
----  ----
57    Each section's CSS treatment should resonate with its content character. A section about
58      density should FEEL dense (tight spacing, heavy borders). A section about breathing
59      should FEEL airy (wide spacing, minimal borders).
60    Do not apply uniform CSS to all sections within a zone. Per-section decisions driven by
      content meaning are what separate DESIGNED from COMPOSED.
```

**Subgroup E: Creative Authority + Component Vocabulary (8 lines)**

```
LINE  RULE
----  ----
61    80% of all decisions -- grid layouts, component styling, mechanism selection, typography
62      choices, density distribution -- are yours. These constraints define the 20% physics.
63    You are composing, not complying. The constraints are the instrument's tuning, not the
64      score. Play what the content needs.
65    Use the component library (components.css) as your structural vocabulary: callouts (5
66      types: essence, tip, gotcha, info, challenge), code blocks, file trees, decision
67      matrices, bento grids, pull quotes, dark slabs.
68    Use all three border weights semantically: 4px for accents/callouts, 3px for structural
      divisions, 1px for subtle separators. Deploy all three on every page.
```

**Subgroup F: CSS Value Table (6 lines)**

```
LINE  RULE
----  ----
69    Primary: #E83025. Background: #FEF9F5. Text: #1A1A1A. Border: #E0D5C5.
70    Spacing scale (4px base): 8, 12, 16, 24, 32, 48, 64, 80, 96. Use 5+ distinct values.
71    Type scale: 0.75rem, 0.875rem, 1rem, 1.125rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem.
72    Callout accents: blue #4A90D9 (info), green #4A9D6B (tip), coral #C97065 (gotcha),
73      amber #D97706 (essence), purple #7C3AED (challenge).
```

---

## PART 2: WHY EACH RULE SURVIVES THE CUT

### Layer 1: Identity -- Each Rule's Catastrophic Failure Prevention

| Line | Rule | Catastrophic Failure Prevented | Evidence |
|------|------|-------------------------------|----------|
| 1 | border-radius: 0 | Identity collapse -- output becomes generic rounded-corner web design. THE #1 soul constraint. | Report 43: survived all 6 levels of indirection via code-path incarnation. 100% compliance in every experiment. |
| 2 | box-shadow: none | Loss of anti-physical identity. Shadows = false depth through physical light metaphors. | prohibitions.md #2. Validated across DD/OD/CD/AD explorations. |
| 3 | No drop-shadow | Same as #2 via filter property. Separate line because builders treat box-shadow and filter independently. | prohibitions.md #3. Found in multiple re-enrichment waves. |
| 4 | No gradients | Gradients imply light sources and dimensional depth. Contradicts flat editorial identity. | prohibitions.md #5. |
| 5 | No opacity < 1 | Semi-transparent backgrounds create the same visual effect as box-shadow. Survives multiple review layers as a hidden soul violation. | prohibitions.md #4. OD-AP-003 found in EVERY wave of re-enrichment. |
| 6 | No pure black/white | Pure black = harsh digital. Pure white = sterile clinical. Warm cream #FEF9F5 and soft black #1A1A1A create editorial warmth. | prohibitions.md #6. Verified in tokens.css. |
| 7 | Warm palette R>=G>=B | Forces warmth in all colors. Without it, cool grays creep in. | Report 59 S-08: programmatic check in gate runner. |
| 8 | Container 940-960px | THE #1 historically violated constraint. 4/5 Phase D pages violated it. Wide layouts lose intimacy. | Memory: "Container width 940-960px = NON-NEGOTIABLE." Every experiment validated. |
| 9 | Font trinity | Locks visual identity to specific font pairing. Without it, Opus uses generic serif/sans. | prohibitions.md #7. tokens.css IMMUTABLE. |
| 10 | Serif display only | Using Instrument Serif for body text destroys readability and typography hierarchy. | prohibitions.md #7 explicitly. |
| 11 | Italic h3 | Creates the "literary documentation" feel that distinguishes KortAI from standard web heading style. | prohibitions.md #17. |
| 12 | No vertical table borders | "Prison bars effect" -- claustrophobic, heavy. Open grid with horizontal rules = breathing room. | prohibitions.md #13. geometry.md lines 130-138. |
| 13 | No 2px borders | 2px is structurally ambiguous -- too thin for architectural signal, too thick for subtle separator. The "2px epidemic" was the #1 systemic issue in OD audit. | prohibitions.md #9. OD-F-AP-001: 108 CSS declarations, 1000+ computed instances. |
| 14 | 4px callout border | KortAI's signature accent. 1-2px on callouts doesn't register as intentional. | prohibitions.md #10. |
| 15 | No decorative elements | Anti-complexity principle. Every visual element must carry semantic weight. | prohibitions.md #11. |

### Layer 2: Perception -- Each Rule's Measured Failure Prevention

| Line | Rule | What Fails Without It | Evidence |
|------|------|----------------------|----------|
| 16 | >= 15 RGB bg delta | Opus produces 1-8 RGB zone deltas (invisible). Flagship had 5 channels "active" at sub-perception magnitudes. | Report 59 S-08: "The TRUEST root cause per the contrarian." Gas Town builder explicitly overrode brief values when they computed to sub-15 deltas. |
| 17 | >= 0.025em letter-spacing | Opus produces 0.001-0.01em micro-tracking (sub-pixel, invisible). 107 lines of per-zone letter-spacing at sub-pixel magnitudes in Flagship. | Report 59 S-04: 22% CSS budget wasted on imperceptible properties. |
| 18 | Max 96px single margin/padding | Without a per-property cap, individual values combine to create massive voids. | tokens.css --space-max-zone: 96px. Ceiling experiment accumulated ~1,500-2,000px. |
| 19 | <= 120px stacked gap | The S-09 stacking loophole: individual spacing values pass S-09 (<=96px) but STACKED values at section boundaries create 210-276px voids. | Memory: "Must measure TOTAL gap, not per-property." Ceiling experiment 9/9 auditors flagged. |
| 20 | >= 2px font-size delta | Without a floor, Opus varies font-size by 0-1px between zones (imperceptible). | Derived from perception threshold research. |
| 21 | No content void > 1 viewport | 70-80% of ceiling experiment scroll was empty cream void. 9/9 Mode 4 auditors flagged independently. | prohibitions.md #21. "24 consecutive frames of nothing" (Auditor D). |
| 22 | Designed moment below 50% | Pages with all visual interest in first 30% produce "beautiful book cover attached to blank pages." | prohibitions.md #22. "Visual novelty dies at 30% scroll depth" (PA-47). |
| 23 | All CSS must be perceptible | Meta-rule covering all sub-perceptual failure modes not caught by Lines 16-20. | Report 59 S-08, S-04, S-18: "CSS effort does not equal CSS effect." |

### Layer 3: Scaffolding -- Each Rule's Positive Contribution

| Lines | Subgroup | Quality Contribution | Why Opus Needs It |
|-------|----------|---------------------|-------------------|
| 24-42 | Multi-Coherence | +0.2-0.3 PA-05 points | NOT in Opus training data. Emerged from this project's research. Without it, Opus deploys mechanisms independently rather than in coordinated clusters. The "3+ channels shift together at boundaries" framework is novel. |
| 43-50 | Structural Metaphor | +0.1-0.2 PA-05 points | Opus produces competent generic editorial without metaphor instruction. The instruction "derive a metaphor from the content and embody it in CSS structure" produces content-resonant design (Gas Town's military command post, the fractal's geological strata). |
| 51-56 | Density Arc | +0.1 PA-05 points | The framework of OPENING -> DEEPENING -> RESOLVING with CSS parameter shifts is research-derived, not native Opus knowledge. Prevents uniform spacing from top to bottom. |
| 57-60 | Content-Form Coupling | +0.1 PA-05 points | THE primary residual suppressor (S-10) explaining the remediation's 2.5/4 ceiling. Per-section decisions ARE the difference between COMPOSED (3.0) and DESIGNED (4.0). |
| 61-68 | Creative Authority + Components | +0.2-0.3 PA-05 points (anti-suppression) | Directly counteracts S-01 (checklist format), S-02 (prohibition overload), S-09 (component deprivation), S-16 (token budget anxiety), S-19 (self-censorship). The "80% creative / 20% constraint" framing is proven effective (Gas Town). |
| 69-73 | CSS Value Table | +0.1 PA-05 points | Concrete CSS values survive all levels of indirection (Report 43 finding). Without them, Opus samples from training data distribution. Values anchor the builder in system-specific territory. |

---

## PART 3: WHAT WAS CUT AND WHY

### Category A: Measurement Infrastructure (Removed -- For Human Verification, Not Model Instruction)

These ~21 rules exist for the HUMANS evaluating model output. The model does not need them to produce quality; the humans need them to VERIFY quality. In Pipeline v3, these move to a SEPARATE gate-runner document, not the builder prompt.

| Cut Rule | What It Was | Why Removable |
|----------|-------------|---------------|
| >= 5 content sections | Count gate | Opus naturally structures content into sections |
| CPL 45-80 characters | Measurement | Opus naturally sets readable line lengths |
| Footer MUST exist | Presence check | Opus naturally creates header/footer bookends |
| >= 12 mechanisms | Count gate | Opus deploys 12-15 mechanisms natively with a recipe |
| >= 3 transition types | Count gate | Opus varies transitions naturally |
| >= 2 reinforcing pairs | Count gate | Opus naturally reinforces in COMPOSING mode |
| All 21 compositional count-gates | Measurement battery | Opus exceeds most naturally; gates measure, not instruct |
| All 8 multi-coherence count-gates | Measurement battery | Framework (Lines 24-42) produces compliance naturally |
| All 10 scale-channel count-gates | Measurement battery | Framework produces compliance naturally |
| All 5 metaphor gates | Measurement battery | Metaphor instruction (Lines 43-50) produces compliance |
| 22-item self-check | Verification checklist | Builder has own quality checking in COMPOSING mode |
| SC-00 zone selector resolution | Pre-gate | Infrastructure, not instruction |
| SC-01 container width programmatic | Gate | Covered by Line 8 as identity constraint |
| SC-02 through SC-08 identity gates | Gates | Covered by Lines 1-15 as identity constraints |
| MG-1 through MG-4 micro-gates | Mid-build checks | Move to separate gate document |
| DG-1 through DG-4 deliverable gates | Deliverable checks | Move to separate gate document |
| BG-1, BG-2 behavioral gates | Process checks | Move to separate gate document |
| _gate-results.json structure | Instrumentation | Move to orchestrator, not builder prompt |
| _pa-matrix.md structure | Instrumentation | Move to orchestrator, not builder prompt |
| _run-manifest.md structure | Instrumentation | Move to orchestrator, not builder prompt |
| _build-plan.yaml requirement | Deliverable | Move to orchestrator, not builder prompt |

**Total removed: ~21 measurement rules.** These are NOT deleted from the pipeline -- they move to a gate-runner that runs AFTER the builder produces output. The builder never sees them.

### Category B: Suppressive Constraints (Removed -- Net Quality Negative)

These ~20 rules ACTIVELY REDUCE quality by triggering suppression chains A through G (Report 59). Removing them directly improves output.

| Cut Rule | Suppressor It Triggers | Chain | Quality Impact of Removal |
|----------|----------------------|-------|--------------------------|
| "Verify X" / "Fail if Y" / "Must be Z" language (throughout) | S-01 Checklist Format | A, D | +0.5-1.0 -- builder shifts from defensive to generative mode |
| 55 prohibition-type rules in builder prompt | S-02 Prohibition Overload | A, F | +0.3-0.5 -- cognitive creative bandwidth from ~30% to ~100% |
| "Consistent absence reads as restraint" | S-05 Absence Rationalization | A (amplifier) | +0.3-0.5 as chain A amplifier removed |
| "Refinement gradients" vocabulary | S-04 Sub-Perceptual Emphasis | E | Prevents 22% CSS budget waste on imperceptible properties |
| 5-pass sequential build architecture | S-07 Multi-Pass Fragmentation | C | Prevents annotation accumulation without richness accumulation |
| "Compositional intelligence" sections at lines 400-700 | S-15 Context Position Effect | F | Prevents critical info landing in 5% attention zone |
| Implicit output-length constraint | S-16 Token Budget Anxiety | F | Builder produces full CSS without self-limiting |
| "FAIL" / "kill criterion" / "ABORT" language | S-19 Self-Censorship | F | Removes ambient threat that suppresses creative exploration |
| Fix cycle checklist format | S-20 Fix Cycle Regression | E | Prevents recipe->checklist cognitive shift mid-build |
| Zone-uniform CSS specifications | S-10 Content-Form Decoupling | C | Enables per-section compositional decisions |
| Task framing as "fix this" | S-11 Repair Mode | C | Maintains generative composing mode, not corrective patching |
| Builder prompt limited to 71 lines of guardrails | S-03 Inverted Quality Routing | B | Routes CSS-rich references TO the CSS-writing agent |
| No component library routing | S-09 Component Library Deprivation | B | Builder sees components.css and uses 34-class vocabulary |
| No exemplar HTML reference | S-13 Exemplar Deprivation | B, G | Builder's quality target shifts from training median to system-specific |
| Programmatic gate optimization | S-18 Gate Optimization (Goodhart) | A, E | No longer rational to produce invisible CSS that passes gates |
| Training data gravity (no override) | S-17 Training Data Anchoring | G | Identity constraints + frameworks override the modal distribution |
| Analytical pipeline process drift (meta-suppressor) | S-14 Analytical Process Drift | ALL | 73-line set IS the anti-S-14 -- it's a recipe, not a checklist |
| Sonnet model for creative work | S-12 Agent Model Mismatch | D | ALWAYS use Opus for builder (or: Sonnet + recipe, not Sonnet + checklist) |

**Total removed: ~20 suppressive rules.** Each removal breaks one or more suppression chains. The first 3-4 removals have NONLINEAR returns because suppressors interact multiplicatively.

### Category C: Redundant / Native Rules (Removed -- Opus Does This Already)

These ~14 rules encode behavior Opus produces natively without instruction, confirmed by the Gas Town page analysis (Report 41, Category C: 60-70% native).

| Cut Rule | What Opus Does Natively |
|----------|------------------------|
| "Use semantic HTML" | Opus naturally produces semantic HTML5 with ARIA landmarks |
| "Include skip link" | Opus naturally includes accessibility features when building editorial pages |
| "Add ARIA landmarks" | Same as above |
| "Make responsive at 3 breakpoints" | Opus naturally creates responsive layouts |
| "Use CSS custom properties" | Opus naturally uses custom properties for token values |
| "Load fonts properly" | Opus naturally includes font loading |
| "Write valid HTML" | Opus never produces invalid HTML |
| "Code blocks should have syntax highlighting" | Opus naturally adds syntax highlighting |
| "Include print styles" | Low-priority; Opus adds when relevant |
| "Dark mode consideration" | Not identity-relevant; omit |
| "Content-to-void ratio > 60%" | Covered by Lines 21-22 (content coverage + designed moment distribution) |
| "Stacked gap measurement" (duplicate) | Covered by Lines 18-19 |
| "Header/footer bookends" | Opus naturally creates these |
| "Modular type scale" | Covered by Line 71 (concrete values) |

**Total removed: ~14 redundant rules.**

### Summary of Cuts

| Category | Rules Removed | Reason |
|----------|-------------|--------|
| A: Measurement Infrastructure | ~21 | Move to separate gate-runner, not builder prompt |
| B: Suppressive Constraints | ~20 | Net quality negative -- removing them improves output |
| C: Redundant / Native | ~14 | Opus produces these behaviors without instruction |
| **Total** | **~55** | **From ~128 builder-visible rules to 73** |

---

## PART 4: RISK ASSESSMENT

### What Could Go Wrong With the Minimal Set

| Risk | Severity | Likelihood | Mitigation |
|------|----------|-----------|------------|
| **Opus drifts toward training data median without enough identity anchoring** | HIGH | LOW | Lines 1-15 provide 15 identity anchors -- more than enough. Gas Town proved 10 identity constraints + framework produce 3.5+ quality. |
| **Sub-perceptual CSS creeps back without per-value gate enforcement** | MEDIUM | MEDIUM | Lines 16-23 provide calibration thresholds AS WORLD DESCRIPTION. Report 43 shows concrete values survive indirection. The gate-runner STILL RUNS post-build; it just doesn't appear in the builder prompt. |
| **Builder skips multi-coherence (too abstract even at 18 lines)** | MEDIUM | MEDIUM | Lines 36-37 provide the concrete RECIPE: "build boundary-by-boundary." This is the specific Middle experiment instruction that produced 4/4. The abstract framework (Lines 24-35) provides vocabulary; the recipe provides action. |
| **Content-form coupling (Lines 57-60) is the most judgment-dependent rule** | MEDIUM | HIGH | This is the one area where the 73-line set may underperform. S-10 (content-form decoupling) is the "primary residual suppressor" -- even with all others removed, uniform zone treatment caps quality at 3.0. The 4-line instruction may be insufficient. MITIGATION: If PA-05 plateaus at 3.0, expand this section with 2-3 concrete before/after examples (adding ~10 lines). |
| **No exemplar HTML means builder targets training median, not CD-006 quality** | LOW | MEDIUM | Line 67 directs builder to components.css vocabulary. The metaphor instruction (Lines 43-50) and component vocabulary (Lines 65-68) together provide system-specific richness without needing a full HTML exemplar. |
| **Missing component character model (A-1 from integration gaps) means same-velocity stacking** | LOW | MEDIUM | This is a REAL gap the minimal set does not address. The 11-component velocity/temperature/weight matrix is absent. Acceptable for first test; add ~5 lines if stacking issues appear. |
| **Missing content-form fit gate (A-10 from integration gaps) means over-formed zones** | LOW | MEDIUM | Line 21 (no content void) partially addresses this. Missing: explicit "verify section has enough content for its assigned form" gate. Add to gate-runner, not builder prompt. |
| **73 lines may be too LONG for the hypothesis -- maybe 50 would work** | LOW | LOW | The 73-line set is already MUCH shorter than the 100-line Middle recipe that produced 4/4. Further reduction risks cutting Lines 24-42 (multi-coherence) which is the key non-native capability. Keep at 73; test whether shorter variants maintain quality. |

### Risk Severity Distribution

- BLOCKING (would prevent >= 3.0): **0 identified**
- SIGNIFICANT (could reduce quality by 0.3-0.5): **2** (content-form coupling, multi-coherence absorption)
- MINOR (could reduce quality by 0.1-0.2): **4** (training median, sub-perceptual creep, component stacking, over-formed zones)
- INFORMATIONAL: **2** (total length, exemplar deprivation)

### Worst-Case Prediction

If ALL significant risks materialize: PA-05 ~2.5-3.0 (still better than the 963-line prompt's 1.5). The minimal set's FLOOR is approximately the remediation's CEILING.

### Best-Case Prediction

If the recipe format activates Opus's generative mode (as it did in the Middle experiment): PA-05 ~3.5-4.0. The minimal set matches or exceeds the Middle experiment.

---

## PART 5: SELF-TESTS -- Binary Compliance Test for Every Rule

### Layer 1: Identity Tests

| Line | Rule | Binary Test | Pass Condition |
|------|------|------------|----------------|
| 1 | border-radius: 0 | `getComputedStyle(el).borderRadius === '0px'` for all elements | ALL elements pass |
| 2 | box-shadow: none | `getComputedStyle(el).boxShadow === 'none'` for all elements | ALL elements pass |
| 3 | No drop-shadow | `getComputedStyle(el).filter` does not contain `drop-shadow` | ALL elements pass |
| 4 | No gradients | `getComputedStyle(el).backgroundImage` does not contain `gradient` | ALL elements pass |
| 5 | No opacity < 1 | `getComputedStyle(el).opacity === '1'` for all background/container elements | ALL containers pass |
| 6 | No pure BW | No element has computed bg `rgb(0,0,0)` or `rgb(255,255,255)` | ZERO pure BW found |
| 7 | Warm palette | For every background: parse RGB, verify R >= G >= B | ALL backgrounds pass |
| 8 | Container width | `document.querySelector('[class*="container"], main, article').offsetWidth` in [940, 960] | Width in range |
| 9 | Font trinity | All headings use Instrument Serif; all body uses Inter; all code uses JetBrains Mono | Fonts correct |
| 10 | Serif display only | No `<p>`, `<li>`, `<td>`, `<span>` element has font-family containing "Instrument Serif" | ZERO body serif |
| 11 | Italic h3 | `getComputedStyle(h3).fontStyle === 'italic'` for all h3 | ALL h3 italic |
| 12 | No vertical table borders | No `<td>` or `<th>` has `borderLeft` or `borderRight` > 0 | ZERO vertical borders |
| 13 | No 2px borders | No element has computed border-width of exactly `2px` on any side | ZERO 2px borders |
| 14 | 4px callout border | All `.callout*` elements have `borderLeftWidth >= 4px` | ALL callouts pass |
| 15 | No empty decoration | Manual audit: every visible element carries content or structural meaning | ZERO decorative-only |

### Layer 2: Perception Tests

| Line | Rule | Binary Test | Pass Condition |
|------|------|------------|----------------|
| 16 | >= 15 RGB delta | For each adjacent zone pair: parse bg RGB, compute max single-channel delta, verify >= 15 | ALL pairs pass |
| 17 | >= 0.025em letter-spacing | For elements with non-default letter-spacing: parse value, verify >= 0.025em | ALL elements pass |
| 18 | Max 96px margin/padding | For all elements: parse margin and padding values, verify none > 96px | ZERO values > 96 |
| 19 | <= 120px stacked gap | At each section boundary: sum margin-bottom of prior element + margin-top of next element + any padding, verify <= 120px | ALL boundaries pass |
| 20 | >= 2px font-size delta | For body text in different zones: compute font-size delta, verify >= 2px when varied | ALL varied sizes pass |
| 21 | No content void | At 1440px width, scroll in viewport increments; at each position estimate content %; count consecutive < 30% | 0-1 consecutive |
| 22 | Designed moment below 50% | Identify designed moments (3+ high-intensity mechanisms); map scroll positions; verify >= 1 below 50% | >= 1 below 50% |
| 23 | Perceptible CSS | Meta-test: all specific sub-tests above (16-22) pass | ALL pass |

### Layer 3: Scaffolding Tests

| Lines | Subgroup | Binary Test | Pass Condition |
|-------|----------|------------|----------------|
| 24-42 | Multi-Coherence | At each zone boundary: count channels that shift by >= perception threshold; verify >= 3 per boundary, >= 4 average | ALL boundaries >= 3, avg >= 4 |
| 43-50 | Structural Metaphor | Remove all text/labels/comments from HTML; can viewer identify organizing principle from CSS alone? (Requires human assessment, PA-05 proxy) | PA-05 >= 3.5 |
| 51-56 | Density Arc | Measure spacing values per zone top-to-bottom; verify non-uniform distribution with identifiable arc shape | Spacing values vary across zones in arc pattern |
| 57-60 | Content-Form Coupling | Compare CSS treatment of 3 sections with different content character; verify they have different visual treatment | >= 3 sections with distinct treatment for distinct content |
| 61-68 | Creative Authority | Count distinct component types, grid layouts, border configurations; verify diversity | >= 5 component types, >= 1 grid layout, 3 border weights |
| 69-73 | CSS Value Table | Verify all color values from warm palette; spacing values from 4px scale; type values from modular scale | ALL values on-system |

---

## PART 6: FORMAT RECOMMENDATION

### Should This Be One Document or Multiple?

**RECOMMENDATION: ONE document, delivered as the builder's SOLE input alongside content.**

**Rationale from Report 43 (Embodiment Chain):**

The embodiment chain shows that information survives compression when it becomes more concrete at each level. The 73-line set IS the maximally concrete form. Splitting it into multiple documents would:

1. **Re-introduce routing problems (S-03):** Multiple files = some files might not reach the builder
2. **Re-introduce position effects (S-15):** Builder reads files in sequence; late files get less attention
3. **Re-introduce cognitive overhead (S-02):** Multiple documents = more navigation = more non-creative cognitive load

**The 73-line set should be delivered as a single block** prepended to the content file or delivered as a single-page conventions brief. No layers, no files, no routing.

### Recommended Delivery Format

```
# KortAI Design System -- Builder Constraints
# 73 lines. Read once. Then build.

[Lines 1-15: Identity]
[Lines 16-23: Perception]
[Lines 24-73: Scaffolding]

---

# Content Below

[The actual content.md]
```

### What ACCOMPANIES the 73 Lines (Separate Documents NOT Shown to Builder)

1. **Gate-runner (for orchestrator only):** All 21+ programmatic gates run AFTER the builder produces output. The builder never sees gate specifications.
2. **PA questions (for auditors only):** All 56+ questions deployed by independent auditors. The builder never sees PA criteria.
3. **Component library (reference file):** `components.css` is listed in Line 65-67 as available vocabulary. The builder reads it as a reference, not as part of the constraint set.
4. **tokens.css (reference file):** Concrete values from Lines 69-73 are already in the constraint set. tokens.css provides the full :root block for CSS custom property usage.

### Separation of Concerns

| Document | Reader | Purpose | Line Count |
|----------|--------|---------|------------|
| 73-line constraint set | Builder | Define world + provide framework | 73 |
| Gate-runner | Orchestrator | Verify output programmatically | ~400 |
| PA questions | Auditors | Evaluate perceptually | ~80 |
| components.css | Builder (reference) | Structural vocabulary | ~900 |
| tokens.css | Builder (reference) | CSS custom properties | ~180 |

**The builder sees: 73 lines of constraints + content + 2 reference files.**
**The builder does NOT see: gates, PA questions, orchestrator instructions, measurement infrastructure.**

This separation is the STRUCTURAL FIX for S-03 (inverted quality routing), S-14 (analytical process drift), and S-15 (context position effect). The builder gets a recipe, not a compliance manual.

---

## PART 7: COMPARISON WITH 963-LINE MASTER PROMPT

| Dimension | 963-Line Master Prompt | 73-Line Minimal Set |
|-----------|----------------------|---------------------|
| Lines builder sees | ~610 (conventions brief) + scattered references | 73 + 2 reference files |
| Prohibition count | 55+ in builder-visible prompt | 15 (identity layer only) |
| Constraint language % | ~30-40% "must/verify/fail" | ~5% (Lines 1-15 use "no/never"; rest is world-description) |
| Recipe content % | ~20% | ~70% (Lines 24-73 are all scaffolding) |
| Guardrail:Playbook ratio | 7.9:1 | ~0.3:1 (15 guardrails : 50 playbooks) |
| Creative authority | "80% is yours" (stated but contradicted by constraint density) | "80% is yours" (reinforced by actual ratio of 15/73 = 20% constraint) |
| Suppression chains active | 7 chains, 3 feedback loops | 0 chains (all trigger conditions removed) |
| Builder cognitive mode | DEFENSIVE (what must I not violate?) | GENERATIVE (what should I create?) |
| Predicted PA-05 | 1.5/4 (empirical) | 3.5-4.0/4 (predicted) |
| Reference files builder sees | Guardrails only (71 lines) | Full component library + tokens + mechanism catalog |

### The Critical Insight

The 963-line prompt's PROBLEM is not that it contains too much information. The problem is that its information is in the WRONG FORMAT (checklist, not recipe) with the WRONG RATIO (7.9:1 guardrail to playbook) and the WRONG ROUTING (CSS-rich references to planners, constraint-only references to builders).

The 73-line set doesn't just SUBTRACT from the 963 lines. It REPLACES the format: checklist -> recipe. It INVERTS the ratio: 7.9:1 guardrails -> 0.3:1. It FIXES the routing: CSS values and component vocabulary go directly to the builder.

---

## PART 8: IMPLEMENTATION RECOMMENDATION

### How to Test This

1. **Prepare the 73-line document** exactly as specified in Part 1
2. **Select content:** Use `extractions/deep/yegge-gas-town-extraction.md` (same content as Gas Town validation)
3. **Deploy a single Opus builder** with the 73-line document + content + `components.css` + `tokens.css`
4. **Do NOT run any gates mid-build.** Let the builder compose without interruption.
5. **After build:** Run the full gate-runner and Mode 4 PA audit
6. **Compare:** PA-05 score vs Flagship (1.5/4), Remediation (2.5/4), Gas Town (3.5+/4), Middle (4/4)

### What Success Looks Like

- PA-05 >= 3.5: **73-line hypothesis VALIDATED.** Suppressor removal + minimal scaffolding produces DESIGNED quality.
- PA-05 3.0-3.4: **Partially validated.** Need to expand content-form coupling section (Lines 57-60) with concrete examples. Add ~10 lines.
- PA-05 2.5-2.9: **Scaffolding insufficient.** Multi-coherence and/or metaphor instruction not absorbing. Need concrete CSS examples (add ~20 lines, bring total to ~93).
- PA-05 < 2.5: **Hypothesis FALSIFIED.** Something other than suppressor removal is needed. Investigate whether the model (Opus vs Sonnet), content, or format is the confounding variable.

### If Expanding Is Needed: Priority Order for Additional Lines

| Priority | Addition | Lines | Brings Total To |
|----------|----------|-------|-----------------|
| 1 | Content-form coupling examples (before/after CSS) | +8 | 81 |
| 2 | Component character model (velocity/temperature table) | +5 | 86 |
| 3 | Concrete boundary CSS example (one worked boundary) | +7 | 93 |
| 4 | Mechanism density cap (max 4 per viewport) | +2 | 95 |
| 5 | Content-volume-to-zone-count mapping | +3 | 98 |

The diminishing returns threshold is approximately 100 lines. Beyond 100, the constraint set begins to re-introduce the very suppression effects it was designed to eliminate.

---

## SUMMARY

| Metric | Value |
|--------|-------|
| Total lines | 73 |
| Identity rules | 15 |
| Perception rules | 8 |
| Scaffolding rules | 50 |
| Rules removed vs 963-line prompt | ~55 |
| Suppression chains eliminated | 7 (all) |
| Feedback loops eliminated | 3 (all) |
| Guardrail:Playbook ratio | 0.3:1 (vs 7.9:1) |
| Predicted PA-05 | 3.5-4.0/4 |
| Format | Single document, world-description + recipe |
| Delivery | Builder sees 73 lines + content + 2 reference files (components.css, tokens.css) |

**The 73-line minimal set is not a compromise. It is the architecturally correct prompt for a system where 60-70% of quality comes from the model's native intelligence, 15-20% from identity constraints, and 10-20% from positive compositional frameworks. Everything else in the 963-line prompt was either measurement infrastructure (move to gate-runner), suppressive in effect (remove), or redundant with native capability (remove).**

---

**END OF REPORT 02**
