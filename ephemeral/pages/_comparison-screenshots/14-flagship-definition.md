# Flagship 4/4 DESIGNED: Definitive Reference

**Author:** flagship-definition-researcher (Opus 4.6)
**Date:** 2026-02-22
**Sources:** 17 research files totaling ~15,000+ lines across ephemeral/flagship-44-recipe/, ephemeral/flagship-retrospective/, ephemeral/flagship-audit/
**Purpose:** Definitive answer to "What IS a Flagship 4/4, truly?"

---

## CRITICAL FRAMING

**Flagship 4/4 has NEVER been achieved.** No existing artifact demonstrates it. This definition is THEORETICAL -- derived from the compositional intelligence stack, from exhaustive forensic analysis of what existing artifacts lack, and from understanding what went wrong when it was attempted. It is the best-informed extrapolation we can make, but it remains unvalidated until a page passes all 14 dimensions.

**What we have observed:**
- Middle experiment: PA-05 4/4 with 12 mechanisms, 350-500 CSS, 2 fractal scales. "Professionally stiff."
- CD-006: 39/40 score, 18 mechanisms, ~999 CSS, 5 fractal scales. Best existing artifact. CEILING tier, NOT Flagship.
- Flagship experiment: PA-05 1.5/4. Catastrophic failure despite strong intent.
- Remediation: PA-05 2.5/4. Partial recovery.

**The tier model:**
| Tier | Mechanisms | CSS Lines | Build Time | Pages |
|------|-----------|-----------|------------|-------|
| Floor | 5 | 150-250 | 30-45 min | 10-20% |
| Middle (DEFAULT) | 8-10 | 350-500 | 70-100 min | 40-50% |
| Ceiling | 12-15 | 700-1000 | 150-220 min | 20-30% |
| **Flagship** | **16-18** | **1000-1500** | **240-400 min** | **5-10%** |

---

## 1. THE 14 DIMENSIONS

Each dimension has a binary threshold (pass/fail), a classification of its evidence status, and measured values from four reference artifacts.

### Dimension Applicability

- **[M+F]** = Required for BOTH Middle 4/4 and Flagship 4/4 (different thresholds)
- **[F-ONLY]** = Required ONLY for Flagship 4/4

### Evidence Status Key

- **PROVEN** = Demonstrated in at least one artifact, observed directly
- **EXTRAPOLATED** = Derived from theory + partial observation, threshold estimated
- **THEORETICAL** = Never observed, derived from compositional intelligence stack
- **JUDGMENT** = Requires human perceptual assessment, not fully programmable

---

### D-01: Mechanism Count and Category Coverage [M+F] -- PROVEN

Mechanisms are the 18 reusable CSS techniques from the catalog. "Perceptible" means: (1) CSS rule exists, (2) rule applies to rendered element, (3) effect is visible without tooling.

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Total deployed (perceptible) | >= 8 | >= 14 |
| Per-category minimum (Spatial, Hierarchy, Component, Depth, Structure) | >= 1 each | >= 2 each |

**Evidence:** CD-006: 18/18, all categories. Middle: 12, all categories covered. Flagship 1.5: 14 claimed, ~5-7 perceptible. Remediation 2.5: ~10-12 perceptible.

---

### D-02: Zone Transitions [M+F] -- EXTRAPOLATED

A zone transition is the boundary between major content sections. "Perceptible" = a reader scrolling at normal speed notices the change.

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Total perceptible transitions | >= 3 | >= 8 |
| Channels changing per transition | >= 1 | >= 2 of 3 |

The 3 channels tested per boundary: (1) Background color shifting >= 15 RGB points, (2) Structural border >= 3px appearing or changing, (3) Typography changing measurably (font-size >= 1px OR line-height >= 0.1 OR letter-spacing >= 0.5px).

**Evidence:** CD-006: 7 transitions at 2-3 channels. Middle: ~4-5 at 1-2 channels. Flagship 1.5: 0 perceptible. Remediation 2.5: 3-5 estimated.

---

### D-03: Channels Active Per Boundary [F-ONLY] -- EXTRAPOLATED

The 6 independent CSS channels: (1) Chromatic (background color), (2) Typographic (font-size, line-height, letter-spacing), (3) Spatial (padding/margin), (4) Structural (borders), (5) Component (different component types appear), (6) Density (content-to-whitespace ratio).

| Gate | Flagship 4/4 |
|------|-------------|
| Minimum per boundary | >= 3 of 6 channels |
| Average across all boundaries | >= 4 channels |

**THIS IS THE DEFINING MEASUREMENT.** Middle achieves 1-2 channels per transition. Flagship requires 3+ at EVERY boundary, averaging 4.

**Evidence:** CD-006: avg 4.3 channels/boundary (range 2-5). Middle: avg ~1.5. Flagship 1.5: avg ~0.5. Remediation 2.5: avg ~2-3.

**Key finding from CD-006 forensics:** CD-006 achieves its multi-channel coherence NOT through explicit per-boundary channel management but through LAYOUT DIVERSITY -- rotating grid patterns (Z-pattern, bento, choreography, F-pattern) guarantee that multiple CSS properties shift at boundaries as an emergent property of layout change. This is the easier, more reliable path to multi-channel transitions.

---

### D-04: Multi-Coherence [F-ONLY] -- THEORETICAL

Multi-coherence = multiple CSS channels encoding the SAME semantic concept simultaneously. This is what creates "atmosphere" -- the feeling that the whole page is "about" something.

| Gate | Flagship 4/4 |
|------|-------------|
| Instances where >= 3 channels encode same concept | >= 3 |

**What a multi-coherence instance looks like (from CD-006 S1):**
- Border-weight: 4px bedrock -> 3px subsoil -> 1px atmosphere (Structural channel)
- Spacing: generous at bedrock -> compressed at atmosphere (Spatial channel)
- Typography: italic serif at bedrock -> regular prose at atmosphere (Typographic channel)
- Label: mono uppercase gray (Component channel)
- ALL 4 channels encode ONE concept: geological depth/confidence

**Why Middle does not have this:** Middle uses border-weight for hierarchy, zone backgrounds for section breaks, spacing for rhythm -- each channel solves a DIFFERENT problem. There is no moment where 3+ channels encode the same concept.

**Evidence:** CD-006: ~5 instances (but LOCAL -- geological strata in S1, header bookend, Z-pattern Q&A -- not unified by a single metaphor). Middle: 0-1. Flagship 1.5: 0. Remediation 2.5: 1-2.

**This dimension has LOW-MEDIUM confidence.** CD-006 has local multi-coherence (within sections) but not global (unified metaphor driving all boundaries). No page has achieved global multi-coherence from a single build.

---

### D-05: Fractal Self-Similarity [M+F] -- PROVEN

The same compositional pattern observable at multiple zoom levels.

| Scale | What to Check | Middle Gate | Flagship Gate |
|-------|--------------|------------|--------------|
| 1. Navigation | TOC/nav mirrors page density arc | NOT required | REQUIRED |
| 2. Page | Full scroll shows density arc | REQUIRED | REQUIRED |
| 3. Section | Individual sections have intro/body/close | NOT required | REQUIRED |
| 4. Component | 2-zone structure (label + body) | REQUIRED | REQUIRED |
| 5. Character | Inline font hierarchy | implicit | REQUIRED |

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Scales with coherent pattern | >= 2 | All 5 |

**Key finding (from scale research):** 2 strong scales beat 5 weak scales. The dependency chain matters: build bottom-up, establish the largest first. Character scale is OPTIONAL until Page+Section are perceptibly established.

**Evidence:** CD-006: 5/5 with EMERGENT cross-scale echo (same typography treatment at navigation, section, component, and character scales -- independent decisions that converged on same visual language). Middle: 2/5. Flagship 1.5: 2/5. Remediation 2.5: 3-4/5.

---

### D-06: Semantic Density [M+F] -- PROVEN

No whitespace voids. Content fills every viewport.

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Maximum consecutive blank space | <= 120px | <= 96px |
| Content-to-whitespace ratio per viewport (1440x900) | >= 35% | >= 40% |

**Evidence:** CD-006: max gap ~80px, every viewport filled. Middle: generally filled. Flagship 1.5: CATASTROPHIC -- 6 voids of 210-276px, 70-80% blank. Remediation 2.5: improved to 33-175px.

---

### D-07: Perceptibility Floor [M+F] -- PROVEN

Every compositional decision must be perceptible without tooling.

| Property | Minimum Delta |
|----------|-------------|
| Adjacent zone backgrounds | >= 15 RGB points on >= 1 channel |
| Font-size between zone groups | >= 2px cumulative |
| Letter-spacing (if used) | >= 0.5px (0.03em at 16px) or 0 |
| Padding between zones | >= 24px difference |
| Border weight | >= 3px structural, >= 1px separator; NO 2px |
| Container width | 940-1100px at 1440 viewport |
| Section gap total (stacked margins + padding) | <= 96px |

**Evidence:** CD-006: all met, zero sub-perceptual CSS. Flagship 1.5: catastrophic -- 1-8 RGB backgrounds, zero borders, uniform 16px, 210-276px gaps. 22% of CSS budget (227 lines) on imperceptible letter-spacing (0.001-0.01em).

---

### D-08: Restraint Indicators [M+F] -- PROVEN

Flagship is maximum INTENTIONAL composition, not maximum complexity.

| Indicator | Middle 4/4 | Flagship 4/4 |
|-----------|-----------|-------------|
| Zero sub-perceptual CSS | Yes | Yes |
| Deliberate exclusion of >= 1 catalog mechanism | Not required | Required |
| No single component type > X% of instances | > 50% | > 35% |
| Whitespace > 48px has structural content | Not required | Required |

**Evidence from CD-006 restraint:** Zero gradients, zero shadows, zero border-radius, zero animation beyond hover. Drop cap used only 2x. Only 1 decision matrix. Color reserved for semantic function (5 callout accent colors NEVER used outside callouts). Serif ONLY in headings and emphasis. ~40% of available mechanisms deliberately NOT deployed. This is what restraint looks like: the page demonstrates what it CHOSE not to do as much as what it does.

---

### D-09: Axis Pattern Variety [F-ONLY] -- EXTRAPOLATED

| Gate | Flagship 4/4 |
|------|-------------|
| Distinct axis patterns used | >= 3 of 5 available |
| Named transitions between patterns | >= 1 per pattern change |

The 5 axis patterns: Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography. Each must produce DISTINCT CSS output -- different layout, different component palette, different spacing rhythm. Labels without distinct CSS do not count.

**Evidence:** CD-006: all 5 patterns with 7 named transitions. Middle: 1 pattern (F-pattern) throughout. Flagship 1.5: labels for multiple patterns but CSS uniform.

---

### D-10: Designed Moments Per Scroll [M+F] -- PROVEN

A "designed moment" = a viewport-sized region where at least one element goes BEYOND competent styling (drop cap, inverted dark block, multi-column grid, pullquote, solid offset, data table with header backgrounds, etc.).

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Coverage (segments with moment / total) | >= 75% | >= 90% |

**Evidence:** CD-006: ~100%. Middle: ~80-85%. Flagship 1.5: ~15%. Remediation 2.5: ~50-60%.

---

### D-11: Component Variety [M+F] -- PROVEN

| Gate | Middle 4/4 | Flagship 4/4 |
|------|-----------|-------------|
| Distinct component types | >= 5 | >= 8 |
| Max single type percentage | <= 50% | <= 35% |

**Evidence:** CD-006: 11 types, 33 instances (callouts x5, code blocks, file tree, decision matrix, core abstraction, task, reasoning). Flagship 1.5: ~5 effective types.

---

### D-12: CSS Quantitative Features [M+F] -- PROVEN

| Metric | Middle 4/4 | Flagship 4/4 |
|--------|-----------|-------------|
| CSS lines (non-comment, non-blank) | 250-600 | 600-1500 |
| Distinct CSS selectors | >= 30 | >= 60 |
| Custom properties (:root) | >= 20 | >= 40 |
| @media breakpoints | >= 1 | >= 2 |
| Distinct background colors | >= 3 | >= 6 |
| Distinct font-size values | >= 4 | >= 5 |
| Distinct border-width values | >= 2 | >= 3 (1px, 3px, 4px) |
| Grid/flexbox layouts | >= 1 | >= 3 |

---

### D-13: Metaphor Presence [F-ONLY] -- THEORETICAL

THIS IS THE DISTINGUISHING FEATURE. See Section 7 for detailed analysis.

| Gate | Flagship 4/4 |
|------|-------------|
| Metaphor named in code comments or HTML | Yes |
| Metaphor creates at least 3 distinct class name families NOT in the mechanism catalog | Yes |
| Metaphor drives at least 2 multi-coherence instances (D-04) | Yes |
| At least 40% of sections show metaphor influence WITHOUT textual labeling | Yes |

**Confidence: LOW.** No existing page demonstrates D-13 at Flagship level. This is the least proven dimension. See Section 7.

---

### D-14: Accessibility Baseline [M+F] -- PROVEN

| Gate | Both Tiers |
|------|-----------|
| Skip link present | Yes |
| Focus-visible styles on all interactive elements | Yes |
| ARIA landmarks (header, main, nav, contentinfo) | Yes |
| Reduced motion media query | Yes |
| No color-only semantic signaling | Yes |
| Heading hierarchy (h1 > h2 > h3, no skips) | Yes |

---

## 2. THE SUCCESS BAR

**PA-05 >= 3.5 AND Tier 5 >= 6/8 AND zero soul violations AND metaphor STRUCTURAL**

### What each component means:

**PA-05 >= 3.5:** PA-05 asks "Does this page feel designed?" scored 0-4. A score of 3.5+ indicates the page crosses into COMPOSED territory where atmosphere is present throughout. But PA-05 is a FLOOR detector, not a ceiling detector. The Middle experiment scored 4/4 while auditors called it "B+ effort." PA-05 alone cannot distinguish Middle 4/4 from Flagship 4/4. It tests whether the page crosses the designed THRESHOLD -- both a 16-year-old barely passing a driving test and a Formula 1 driver score 4/4.

**Tier 5 >= 6/8:** Eight additional questions (PA-70 through PA-77) that measure the compositional intelligence stack directly. These probe fractal self-similarity across scales (PA-70), channel independence (PA-71), multi-coherence at boundaries (PA-72), semantic density (PA-73), restraint as expression (PA-74), spatial confidence (PA-75), transition variety (PA-76), and design moment density (PA-77). Each is scored YES/NO with justification. 6-8 YES = COMPOSED (full stack operating). 3-4 = STRUCTURED. 0-2 = VOCABULARY ONLY. This is what distinguishes Flagship from Middle: a page scoring PA-05 4/4 + Tier 5 0-2/8 is CORRECTLY classified as Middle, not Flagship.

**Zero soul violations:** The 10 soul constraints (U-01 through U-10) are identity non-negotiables: container width 940-1100px, zero border-radius, zero gradients, no glassmorphism, etc. Soul violations are disqualifying regardless of compositional quality.

**Metaphor STRUCTURAL:** The pervading metaphor manifests in CSS, not just labels. The "40% test": remove all textual annotations (comments, labels, section-meta). Can a reader still perceive the metaphor's organizational principle from CSS treatment alone? "Announced" means labels say the metaphor. "Structural" means CSS embodies the metaphor. See Section 7.

---

## 3. CEILING vs FLAGSHIP: What CD-006 Lacks

CD-006 (39/40) is the best existing artifact. It passes ~10-11 of the 14 Flagship dimensions. But it is CEILING tier, not Flagship.

### What CD-006 achieves (Ceiling-level):

- 18/18 mechanisms, all categories (D-01 PASS)
- 7 perceptible transitions at 2-3 channels (D-02 PASS at Middle, marginal Flagship)
- Avg 4.3 channels/boundary (D-03 PASS -- but incidental, not planned)
- 5/5 fractal scales with emergent cross-scale echo (D-05 PASS)
- Max gap ~80px, every viewport filled (D-06 PASS)
- All perceptibility thresholds met (D-07 PASS)
- ~40% mechanisms deliberately withheld (D-08 PASS)
- All 5 axis patterns with 7 named transitions (D-09 PASS)
- ~100% designed moment coverage (D-10 PASS)
- 11 component types (D-11 PASS)
- 998 CSS lines, all quantitative features met (D-12 PASS)
- Full accessibility (D-14 PASS)

### What CD-006 LACKS (the Flagship gap):

**1. No unified metaphor (D-13 FAIL).** CD-006 uses MULTIPLE LOCAL metaphors: geological strata in S1, Z-pattern Q&A in S2, bento in S3, F-pattern in S4, choreography in S7, etc. These are DIFFERENT organizational patterns applied section-by-section. No single metaphor drives the entire page's CSS decisions through multiple channels simultaneously. The "geological" metaphor is local to Spiral sections (~2 of 8). A Flagship page would have ONE metaphor whose influence is felt at EVERY boundary.

**2. Multi-coherence is LOCAL, not GLOBAL (D-04 PARTIAL).** CD-006 has ~5 multi-coherence instances, but they are concentrated at bookends (S1 geological strata, S7-S8 choreography + spiral). The middle sections (S3-S6) rely more on component switching than coherent multi-channel transitions. A Flagship page would sustain multi-coherence THROUGHOUT, not just at bookends.

**3. Channel coordination is INCIDENTAL, not DESIGNED.** CD-006's 4.3 channels/boundary arose from accumulated craft across 4 pipeline stages (DD+OD+AD+CD), not from a deliberate compositional plan that said "at this boundary, chromatic + structural + spatial + typographic will all shift to encode the same thing." A Flagship builder would explicitly PLAN channel coordination at every boundary using a transition table.

**4. It was built under unreproducible conditions.** No prompt produced CD-006. It emerged from: Opus builder with full 4-stage pipeline context, known tutorial content that naturally demands all 11 components, accumulated vocabulary from 30+ prior explorations, and inter-agent messaging between planner and builder. The Flagship challenge is producing comparable quality from a SINGLE prompt + recipe.

### The gap in one sentence:

CD-006 achieves vocabulary fluency (every mechanism deployed correctly, independently). Flagship requires compositional fluency (mechanisms working IN CONCERT encoding the same semantic dimension simultaneously through multiple CSS channels, driven by a unified metaphor).

---

## 4. THE COMPOSITIONAL INTELLIGENCE STACK

The stack describes four layers that BUILD ON EACH OTHER as a vertical progression. This vertical relationship is the key concept -- the layers are not independent sections. They form a dependency chain.

### The Dependency Chain

```
L5: ANTI-SCALE MODEL (Governing Principle)
    "Is the overall composition rich?"
    Requires: L4 (multi-coherence produces density),
              L3 (channels produce breadth),
              L2 (scales produce depth)
    Cannot evaluate without all three below.
         |
L4: MULTI-COHERENCE
    "Do 3+ channels shift together at each boundary?"
    Requires: L3 (must know what channels ARE to count them)
    Cannot build without channel vocabulary.
         |
L3: CHANNELS (6 CSS Property Groups)
    "Which CSS property groups encode semantic direction?"
    Requires: L2 (channels shift at boundaries defined by scales)
    Cannot deploy without knowing where the boundaries are.
         |
L2: SCALES (5 Fractal Zoom Levels)
    "At what zoom levels does the pattern appear?"
    Requires: L1 (perception thresholds -- must be VISIBLE)
    Cannot verify without perceptible CSS values.
         |
L1: PERCEPTION THRESHOLDS
    ">= 15 RGB, >= 2px font-size, >= 0.03em letter-spacing..."
    No dependency. This is the absolute floor.
```

### Why the dependency is real (not nominal):

**You CANNOT have multi-coherence without scale coverage.** Multi-coherence means 3+ channels shifting at each boundary. If you only have 2 scales (page + component), you have at most 1-2 meaningful boundaries where multi-coherence could occur. CD-006 had 11 boundaries across 5 scales -- enough structural surface area for multi-coherence to manifest consistently.

**You CANNOT have channel breadth without fractal depth.** Channels shift AT BOUNDARIES. Boundaries exist BETWEEN scales. If your page has only page-scale boundaries, channels only shift at section breaks. With 5 scales, channels shift at navigation, page, section, component, AND character levels -- creating ~30+ opportunities for multi-coherence instead of ~5.

### The Prism Model (How it works during building):

The stack is NOT a pipeline (complete L2, then L3, then L4). It is a PRISM. A single CSS decision (e.g., `background: #F0EBE3` at a zone boundary) is simultaneously:
- An **L2 Scale** decision (which zoom level?)
- An **L3 Channel** decision (chromatic shift)
- An **L4 Multi-Coherence** decision (does it align with other channels shifting here?)
- An **L5 Anti-Scale** decision (does it serve density, restraint, or spatial confidence?)

The builder learns the stack layer by layer but deploys it BOUNDARY BY BOUNDARY (all layers at once per boundary).

### L2: Scales -- 5 Architectural Zoom Levels

| Scale | Zoom Level | CSS Manifestation |
|-------|-----------|------------------|
| Navigation | ~1440px (full viewport) | TOC/nav mirrors page density arc |
| Page | ~960px (content width) | Full scroll shows density arc |
| Section | ~200-400px (zone height) | Individual sections have intro/body/close |
| Component | ~40-100px (component height) | 2-zone structure: label (sparse) + body (dense) |
| Character | ~12-20px (inline level) | Font hierarchy: heading tracked, body tight |

**Key finding:** 2 strong scales beat 5 weak scales. Middle achieved 4/4 with 2 scales. Flagship achieved 1.5/4 with 5 attempted scales. Build bottom-up. Establish the largest first.

### L3: Channels -- 6 CSS Property Groups

| Channel | CSS Properties | Role |
|---------|---------------|------|
| Chromatic | background-color, color | Zone identity, mood |
| Typographic | font-size, line-height, letter-spacing, font-weight, font-style | Register, formality |
| Spatial | padding, margin, gap | Rhythm, density |
| Structural | border-width, border-color, border-style | Architecture, containment |
| Behavioral | hover, focus, transitions, reduced-motion | Interactivity |
| Material | surface treatment (dark slab, cream paper, tinted film) | Texture, depth |

4 primary channels carry semantic direction (Chromatic, Typographic, Spatial, Structural). Behavioral and Material are enhancement-only.

**Key finding from CD-006 forensics:** CD-006 achieves avg 3.4 channels per boundary through LAYOUT DIVERSITY (rotating grid patterns guarantee multi-channel shifting as emergent property). The failed Flagship attempted the same through PROPERTY MODULATION (explicitly managing each property at each boundary) -- this approach is fragile and requires constant vigilance. Layout diversity is the more reliable path.

### L4: Multi-Coherence -- Simultaneous Alignment

Multi-coherence = 3+ channels shifting at a boundary in the SAME semantic direction. The builder must define direction BEFORE building.

**Operational rules:**
1. Name the direction in a CSS comment at each boundary ("DEEPENING", "BREATHING", "RESOLVING")
2. Count active channels at the boundary (target: >= 3)
3. Verify all active channels point the same semantic direction
4. Use a transition table to plan this before writing CSS
5. Vary intensity across boundaries (not every boundary at max channels)
6. Squint test: does the boundary feel like "one thing happening" not "several unrelated changes"?

**Practical scale:** 0-1 channels = FLAT / 2 = FUNCTIONAL / 3 = DESIGNED / 4-5 = COMPOSED / 6 = FLAGSHIP

### L5: Anti-Scale Model -- The Governing Principle

```
Richness = Semantic Density x Restraint x Spatial Confidence
```

This is MULTIPLICATIVE. If any term is zero, richness is zero.

- **Semantic Density** (~70% computable): how much meaning per CSS line. Not "more CSS = richer" but "each line carries load." The Flagship had 1,200 CSS lines with 227 on imperceptible micro-typography -- low semantic density. CD-006 had 998 lines, zero waste.

- **Restraint** (~60% instructable): designed simplicity as compositional contrast. CD-006 withheld ~40% of available mechanisms: zero gradients, zero shadows, zero animations, drop cap only 2x, decision matrix only 1x. Each absence is principled. Each deployment is an EVENT because it is rare.

- **Spatial Confidence** (~40% computable): the builder's willingness to make BOLD, VISIBLE decisions. 3-4px borders that a reader SEES. Zone backgrounds that DIFFER by 15+ RGB. Typography that SHIFTS between zones. Multi-column grids. Width variation (80% pullquote, 85% table, 90% tension group). Not uniform 16px everything.

### The Stack Integration Question

PA-65 (the music analogy) IS the stack integration assessment. "Would this page be a single instrument, a choir in unison, or an ensemble with different parts?"

- **Ensemble** (different parts, coordinated but independent) = full stack operating. This is Flagship.
- **Choir** (all channels move identically everywhere) = channels without restraint.
- **Solo** (one channel dominant) = channels without multi-coherence.
- **Broken** (layers contradicting) = dependency chain violated.

---

## 5. THE 14 QUALITY SUPPRESSORS

Quality = (Builder Skill x Content-Form Coupling x Compositional Metaphor) / Active Suppressors

### 5 ABSOLUTE Suppressors (always kill quality regardless of other conditions):

| # | Suppressor | Mechanism | What It Does |
|---|-----------|-----------|-------------|
| S-01 | **Checklist format** | Puts builder in defensive mode ("verify X") instead of generative mode ("build X") | Every experiment confirms: recipe format (Middle 4/4, CD-006 ~3/4 COMPOSED with 39/40 soul) outperforms checklist format (Flagship 1.5/4). The format determines whether the builder is COMPOSING or COMPLYING. |
| S-02 | **Prohibition overload** | 55 prohibitions exhaust cognitive budget on avoidance | Guardrail-to-playbook ratio of 7.9:1. Builder told 55 things NOT to do, almost nothing TO do. Cap at 15-20 prohibitions balanced with equal playbook entries. |
| S-04 | **Sub-perceptual emphasis** | Prompt vocabulary ("refinement gradients") directs skill toward invisibility | 22% of Flagship CSS budget (227 lines) on letter-spacing 0.001-0.01em. When prompts name invisible things, invisible things get built. Must name VISIBLE targets instead. |
| S-08 | **No perception thresholds** | Allows technically-valid but invisible CSS | Without minimum deltas (>= 15 RGB, >= 0.03em), "channel active" is satisfied by a 1 RGB background shift. The concept of perceptibility was missing entirely from the pipeline. |
| S-14 | **Analytical pipeline** | Pipeline structurally incapable of generating instructions | 11-step pipeline evolved from generative (Phases 1-4) to analytical (Phases 5-10). 660:1 meta-to-output ratio. 140 analytical artifacts, zero operational playbooks. Rules only accumulate, never retire. |

### 9 CONTEXTUAL Suppressors (depend on interactions):

| # | Suppressor | Activating Condition | Neutralizing Condition |
|---|-----------|---------------------|----------------------|
| S-03 | Inverted quality routing | Multi-agent + capped visibility (builder saw 13.4% of prompt) | Single builder with full access |
| S-05 | Absence coherence rationalization | + Prohibition overload + no deployment mandates | Creative latitude + mandatory minimums |
| S-06 | Zero inter-agent communication | High complexity + multi-agent + no feedback | Low complexity OR single agent |
| S-07 | Multi-pass fragmentation | Compliance-mode agents + annotation goals | Single pass with amplification goals |
| S-09 | Component library deprivation | Low-capability builder + no vocabulary | Opus + direct design system access |
| S-10 | Content-form decoupling | Zone-uniform specs (all Zone 2 identical) | Builder reads content + per-section decisions |
| S-11 | Repair mode | Task = "fix this artifact" (converges on COMPETENT) | Task = "compose from scratch" (reaches DESIGNED) |
| S-12 | Agent model mismatch | Sonnet + checklist + prohibition overload | Recipe format (any model) OR Opus + permissive tone |
| S-13 | Exemplar deprivation | Compliance builder + no internal quality model | Opus (has internal model) OR examples provided |

### The 4 Suppressor Chains:

**Chain A "Compliance Trap":** Checklist (S-01) -> defensive mode -> prohibition overload (S-02) amplifies -> absence coherence (S-05) justifies inaction -> no thresholds (S-08) so minimal values pass. Result: technically compliant, perceptually empty.

**Chain B "Information Black Hole":** Analytical pipeline (S-14) extracts rules -> rules route to wrong agents (S-03) -> builder never sees components (S-09) or exemplars (S-13). Result: CSS-writing agent works blind.

**Chain C "Middle Sag":** Content decoupled (S-10) -> zones treated uniformly -> multi-pass (S-07) can't override -> repair mode (S-11) fixes defects, doesn't compose richness. Result: front-loaded diversity that sags in the middle.

**Chain D "Sonnet Ceiling":** Sonnet builder (S-12) + checklist (S-01) + prohibitions (S-02) = minimum viable compliance with zero creative surplus.

---

## 6. WHAT THE FLAGSHIP EXPERIMENT REVEALED

The Flagship experiment scored PA-05 1.5/4 despite containing MORE compositional intelligence than any prior experiment (14 mechanisms, 6 channels, metaphor, multi-pass architecture). It failed because ALL 14 suppressors were active simultaneously.

### The Flagship's Specific Failures:

**Sub-perceptual CSS waste:** 227 lines (22% of CSS budget) on per-zone letter-spacing 0.001-0.01em and heading color shifts 1-12 RGB. Zero human can perceive these. CD-006 spent those same lines on 11 components, 5 grids, 3 breakpoints.

**Zero borders:** Ch4 (Structural) completely absent. Zero section-level borders, zero containment, zero dividers. The prompt had no rule REQUIRING structural elements, only rules DESCRIBING them.

**Imperceptible zone backgrounds:** 12 per-section background variables differing by 1-8 RGB (threshold is 15). The page looks like uniform cream despite 12 distinct CSS declarations.

**6 whitespace voids of 210-276px:** S-09 capped individual spacing at 96px, but STACKED values at boundaries (section padding-bottom 64px + divider margin 80px + section padding-top 64px = 208px) created catastrophic voids. The specification defect behind the voids was measuring per-property, not total gap.

**Single-column monotony:** Zero multi-column layout, zero grid, zero flex. The prompt had no rule requiring layout variation.

**Metaphor announced but not structural:** "Assay laboratory" metaphor in comments, zero CSS manifestation. Without labels, the page reads as a generic documentation page.

### What the failure taught us:

**1. Recipe vs Checklist = Success vs Failure.** The Middle builder got a 100-line RECIPE with sequenced steps, action verbs ("Read/Select/Deploy/Assess"), specific CSS values. The Flagship builder got a 71-line CHECKLIST with judgment verbs ("Verify/Fail if/Must be"). Recipe = DESIGNED. Checklist = FLAT. This is the single most important finding.

**2. 97 rules exceed builder attention capacity by 5x.** Builder attention capacity is ~15-20 binary rules simultaneously. At 97 rules, the builder processes the first ~20 (spatial, soul) and skims the rest. Compositional quality rules live in lines 170-400 -- below the attention waterline.

**3. Compression kills playbooks but preserves guardrails.** 91.2% of actionable content was lost from research to prompt. The compression pattern: WHAT-TO-CHECK survived, HOW-TO-ACHIEVE died. Names survived, manifestations died. Thresholds survived, measurement protocols died. The prompt tells 97 things NOT to do and almost nothing TO do.

**4. CSS effort is not CSS effect.** The Flagship had MORE custom properties (53 vs 44), MORE intentional zone-specific rules (59% intentionality vs 30%), MORE letter-spacing values (15 vs 3) than CD-006. It had LESS richness because 81% of its intentional variations were invisible. Richness is NOT how many CSS rules you write. Richness IS: how many DIFFERENT things can a reader SEE.

**5. The remediation proved suppressor removal is necessary but insufficient.** Fixing 7 of 14 suppressors gained only +1.0 point (1.5 to 2.5). The dominant residual was REPAIR MODE (S-11): the builder was patching an existing file, not composing from scratch. 100 lines of recipe composing from scratch (Middle) outperformed 1,025 lines of recipe repairing (Remediation). Length does not equal quality. MODE equals quality.

---

## 7. THE PERVADING METAPHOR REQUIREMENT

This is THE distinguishing feature of Flagship. It is also the LEAST PROVEN dimension -- no existing page demonstrates it at Flagship level.

### What "pervading metaphor" means:

A pervading metaphor is a single organizing concept that transforms EVERY visual decision on the page. It is not a theme or decoration. It is a CSS decision-making framework.

**Example (theoretical):** A page about geological research uses "sedimentary layers" as the pervading metaphor. This means:
- Backgrounds literally darken with depth (Chromatic channel encodes "deeper")
- Borders get heavier near "bedrock" sections (Structural channel encodes "deeper")
- Typography gets more formal as you descend (Typographic channel encodes "deeper")
- Spacing compresses toward the center/climax (Spatial channel encodes "deeper")
- The metaphor creates custom class families: `.stratum--surface`, `.stratum--bedrock`, `.deposit--rich`, `.erosion--gap`

ALL channels encode the SAME concept ("geological depth") simultaneously. This IS multi-coherence (D-04) driven by metaphor (D-13).

### "Announced" vs "STRUCTURAL":

**Announced (FAIL):** The Flagship experiment's "assay laboratory" metaphor. Comments say "assay." Section-meta labels say "assay." But CSS does nothing differently because of it. Remove all labels and comments -- the page reads as generic documentation. The metaphor lives in TEXT, not in CSS.

**Local (CEILING):** CD-006's geological strata metaphor in S1. Within that section, border-weight encodes confidence, spacing encodes depth, typography encodes formality. But S2 uses a different metaphor (Z-pattern pulse), S3 uses another (bento islands). The geological metaphor is LOCAL -- it transforms S1 but not S3 or S5. Remove the "geological" labels from S1 and the structural hierarchy remains visible. But it doesn't pervade the other 7 sections.

**Structural (FLAGSHIP target):** A unified metaphor that pervades ALL sections. The metaphor creates custom class families (not just mechanism catalog entries). It drives at least 2 multi-coherence instances. At least 40% of sections show its influence when ALL textual labels are stripped.

### The 40% Test:

Remove all textual annotations from the HTML: comments, section-meta labels, class names that merely describe the metaphor, any text that names the metaphor. Now look at only the CSS and rendered output.

Can a reader perceive the organizing principle -- something consistent about HOW this page structures information -- from the CSS treatment alone?

If yes: structural metaphor. Flagship candidate.
If no: announced metaphor. Ceiling at best.

### Why this is THEORETICAL:

**No page has ever passed the 40% test at the Flagship level.** CD-006 passes it locally (S1's structural hierarchy is visible without labels) but not globally. The Flagship experiment fails it entirely (zero CSS manifestation of "assay laboratory"). The Middle experiment has no metaphor at all (and scores 4/4 -- metaphor is not required for Middle).

The 40% threshold is a best guess. The 3-class-family requirement is a best guess. The "2 multi-coherence instances driven by metaphor" threshold is a best guess.

**This dimension will need revision after the first Flagship attempt.** It is a hypothesis to test, not a proven gate.

### What would enable a structural metaphor:

The conventions brief approach is to describe a "world" the builder is building inside: "Here is the physics of this world. Surfaces have weight. Depth manifests as compression. Bedrock is dark and heavy." The builder then makes CSS decisions that are CONSISTENT WITH the physics, creating structural manifestation naturally.

The checklist approach ("verify metaphor manifests in CSS") produces announced metaphors because the builder adds labels to satisfy the check, not CSS to embody the concept.

---

## 8. SUMMARY SCORECARD

| Dim | Name | Class | Evidence Status | CD-006 | Middle | Flagship 1.5 | Remed. 2.5 |
|-----|------|-------|----------------|--------|--------|-------------|-----------|
| D-01 | Mechanisms | M+F | PROVEN | 18/18 | 12 | ~5-7 eff. | ~10-12 |
| D-02 | Zone transitions | M+F | EXTRAPOLATED | 7 (all) | ~4-5 | 0 | 3-5 |
| D-03 | Channels/boundary | F-ONLY | EXTRAPOLATED | 4.3 avg | ~1.5 | ~0.5 | ~2-3 |
| D-04 | Multi-coherence | F-ONLY | THEORETICAL | ~5 local | 0-1 | 0 | 1-2 |
| D-05 | Fractal scales | M+F | PROVEN | 5/5 | 2/5 | 2/5 | 3-4/5 |
| D-06 | Semantic density | M+F | PROVEN | PASS | PASS | FAIL | PARTIAL |
| D-07 | Perceptibility | M+F | PROVEN | PASS | PASS | FAIL | PARTIAL |
| D-08 | Restraint | M+F | PROVEN | PASS | PASS | FAIL | PARTIAL |
| D-09 | Axis variety | F-ONLY | EXTRAPOLATED | 5/5 | 1 | labels only | partial |
| D-10 | Designed moments | M+F | PROVEN | ~100% | ~80% | ~15% | ~55% |
| D-11 | Component variety | M+F | PROVEN | 11 | ~7-8 | ~5 | ~8-9 |
| D-12 | CSS features | M+F | PROVEN | PASS | PASS | PARTIAL | PASS |
| D-13 | Metaphor | F-ONLY | THEORETICAL | LOCAL | N/A | FAIL | PARTIAL |
| D-14 | Accessibility | M+F | PROVEN | PASS | PASS | PARTIAL | PASS |

### Estimated Tier Scores:

| Artifact | Middle Dims (of 10) | Flagship Dims (of 14) | Tier |
|----------|--------------------|-----------------------|------|
| CD-006 | 10/10 | ~10-11/14 | Ceiling |
| Middle | 10/10 | 3-4/14 | Middle |
| Flagship 1.5 | 2/10 | 0/14 | Failed |
| Remediation 2.5 | 5-6/10 | 2-3/14 | Partial |
| **Flagship target** | **10/10** | **14/14** | **Flagship** |

---

## 9. THE 7 DIMENSIONS THAT SEPARATE FLAGSHIP FROM MIDDLE

These are the dimensions where Middle 4/4 either does not apply or has substantially lower thresholds:

1. **D-03: Channels per boundary.** Middle gets 1-2. Flagship requires 3+ at EVERY boundary averaging 4. The single most discriminating measurement.

2. **D-04: Multi-coherence.** Middle has zero. Flagship needs 3+ instances of 3+ channels encoding the SAME concept. This is the QUALITATIVE difference -- mechanisms working together vs independently.

3. **D-05: Fractal depth.** Middle: 2 scales. Flagship: all 5. The compositional pattern must echo at Navigation, Section, and Character scales too.

4. **D-09: Axis variety.** Middle: 1 pattern throughout. Flagship: 3-5 with named transitions.

5. **D-13: Metaphor.** Middle: none needed. Flagship: structural, not announced, driving CSS decisions perceivable without labels.

6. **D-01: Mechanism count.** 14 vs 8. Not just "more" but enough for 2+ per category, enabling multi-channel encoding.

7. **D-12: CSS scale.** 600-1500 vs 250-600. The budget required to execute all the above, with zero sub-perceptual waste.

### The Core Insight:

**Flagship 4/4 DESIGNED is not "Middle 4/4 with more stuff."**

| Property | Middle 4/4 | Flagship 4/4 |
|----------|-----------|-------------|
| Selection logic | Content feature -> mechanism | Metaphor -> shared semantic -> multiple mechanisms |
| Channel coordination | Independent (each solves different problem) | Coherent (3+ encode same concept) |
| Fractal depth | 2 scales | 5 scales |
| Spatial variety | Single axis pattern | 3-5 patterns with transitions |
| Metaphor | None (content-structure mapping) | Structural (drives CSS decisions) |
| Atmosphere | Professional but flat | Integrated and atmospheric |
| Formula | Richness = vocabulary correctness | Richness = density x restraint x confidence |

---

## 10. CONTRARIAN CHALLENGES -- WHERE THIS DEFINITION MAY BE WRONG

**C1: Flagship 4/4 may not exist as a discrete register.** It may be a continuous spectrum, not a qualitative shift. The definition was derived from "what CD-006 lacks that a theoretically perfect page would have" -- extrapolation from absence. Confidence in challenge: HIGH. The first experiment producing two PA-05 4/4 pages will test this.

**C2: The 14 dimensions may be circular.** D-04 (multi-coherence) and D-13 (metaphor) are THEORETICAL with zero evidence. They were derived from the same compositional intelligence stack that this definition claims to validate. The definition might be selecting for "pages that match our theory" rather than "pages that are objectively excellent."

**C3: CD-006 reclassification may be rhetorical.** Calling CD-006 "Ceiling, not Flagship" serves the purpose of defining a higher target. But CD-006 scored 39/40. If 39/40 is not Flagship, the target may be unreachable.

**C4: The embarrassingly simple alternative.** Opus + content + soul + "make this extraordinary" for $5 and 2 hours. If it works, the entire pipeline is unjustified. The meta-to-output ratio is at infinity:0 (infinite research, zero Flagship output). The exit is building, not analyzing.

**C5: 4/4 may be EMERGENT, not producible.** It may arise from an agent's native compositional capability meeting the right content at the right moment, and no recipe can systematically create the conditions. If true, the optimal investment is: best model + best content + minimal constraints, then run many attempts.

---

**END OF FLAGSHIP DEFINITION**

*This document synthesizes 17 research files (~15,000+ lines) into a single definitive reference. The 14 dimensions are: 8 PROVEN, 4 EXTRAPOLATED, 2 THEORETICAL. Flagship 4/4 has never been achieved. The key innovation over prior definitions is: (1) explicit separation of Middle and Flagship thresholds per dimension, (2) the compositional intelligence stack as a VERTICAL DEPENDENCY CHAIN not independent sections, (3) honest classification of CD-006 as Ceiling, (4) transparent epistemic status for every threshold, (5) the pervading metaphor requirement with the 40% structural test. This definition is our best theory. The first Flagship attempt will prove or revise it.*
