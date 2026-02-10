# Research Package: AD-004 Spiral
## Paired with OD-004 Confidence | Density: GEOLOGICAL + CRESCENDO

**Generated:** 2026-02-09
**Agent:** Research Packager v2
**Purpose:** Complete research dossier for AD-004 builder — Spiral axis exploration
**Finding ID Range:** AD-F-013 through AD-F-016

---

## 1. CHAIN TRAVERSAL

```
OD-004 Confidence (34/40, v3)
  ├── Density: GEOLOGICAL (DD-F-004) + CRESCENDO secondary (DD-F-002)
  ├── DD-F-006 FRACTAL: mandatory at 5 scales
  ├── OD-004 v3: Border-weight gradient (4px/3px/2px/1px) encodes confidence as flat 2D
  ├── OD-004 v3: 4 strata (Established/Probable/Speculative/Open)
  ├── OD-004 v3: Zone tokens for confidence density semantics
  ├── OD-F-005: Organization IS Density (MANDATORY)
  └── EXT-CONF-013: Border-weight confidence encoding
        ↓
AD-004 Spiral Axis
  ├── Golden ratio (1.618) creates naturally balanced proportions
  ├── Pairs with GEOLOGICAL: spiral rings = geological strata
  ├── Focal point at spiral center = highest confidence (Established)
  ├── Outer rings = decreasing confidence (Probable → Speculative → Open)
  └── DD-F-012: density implies axis — GEOLOGICAL implies layered reveal
```

**Transitive Chain:** Confidence (OD-F-005) → GEOLOGICAL+CRESCENDO (DD-F-004, DD-F-002) → Spiral Reveal with confidence-encoded rings (DD-F-012, OD-F-FL-001)

**Why Spiral for Confidence:** The spiral's geometry naturally encodes layers of certainty. The focal point (center) holds the densest, most established knowledge — the bedrock. Each outward ring represents decreasing confidence: Probable, Speculative, Open. This maps directly to GEOLOGICAL strata, where depth = certainty. The golden ratio proportions (1.618) create mathematically harmonious ring widths that feel authoritative rather than arbitrary. The spiral also creates a natural CRESCENDO when traversed inward (from uncertain periphery to certain core) or inverse-CRESCENDO when traversed outward (from dense core to sparse edge). The border-weight gradient (4px at core, 1px at edge) makes GEOLOGICAL layering VISIBLE as a flat 2D signal.

---

## 2. R-4 FINDINGS (SOUL PASS + CONDITIONAL PASS)

### SOUL PASS Findings (15)

| # | Finding ID | Description | How AD-004 Should Apply |
|---|-----------|-------------|-------------------------|
| 1 | R4-059 | Golden ratio (1.618) creates naturally balanced proportions | PRIMARY axis proportion. Spiral ring widths use golden ratio: core ring at 1fr, next at 1.618fr, next at 2.618fr. |
| 2 | R4-060 | Golden ratio two-column: main content (1fr) + sidebar (0.618fr) | Within each stratum: primary content at 1fr, confidence metadata sidebar at 0.618fr. |
| 3 | R4-061 | Fibonacci type scale: 16, 26, 42, 68px hierarchy | Reference only — locked type scale takes precedence. Compare Fibonacci ratios with locked values. |
| 4 | R4-062 | Golden ratio: place most important info at spiral focal point | Established stratum content at spiral focal point. IS-1 (hierarchy through POSITION). |
| 5 | R4-063 | Golden ratio component proportions via flex: 1.618 / flex: 1 | Stratum content sections proportioned via golden ratio flex values. |
| 6 | R4-039 | Progressive rhythm: elements change progressively (crescendo/diminuendo) | GEOLOGICAL strata create progressive density: Established (dense) → Open (sparse). Inverse CRESCENDO from core to edge. |
| 7 | R4-040 | Flowing rhythm: follows bends and curves | Spiral traversal follows flowing rhythm. Implemented as border-weight gradients (2D), not literal curves. |
| 8 | R4-042 | Breaking established rhythm creates focal points | Rhythm break at stratum transitions. Border-weight change (4px→3px) signals confidence level shift. |
| 9 | R4-069 | Progressive disclosure: reduce cognitive load by revealing gradually | Spiral reveal: show Established core first, progressively disclose Probable/Speculative/Open rings. |
| 10 | R4-071 | Progressive disclosure: start simple, let users drill down | Core = simple, established facts. Outer rings = complex, speculative analysis. Aligns with IS-7. |
| 11 | R4-073 | Progressive disclosure: surface → expanded → detail (three-level depth) | Maps to GEOLOGICAL: Established (surface) → Probable (expanded) → Speculative/Open (detail). |
| 12 | R4-036 | Five types of visual rhythm: regular, alternating, progressive, flowing, random | Spiral uses PROGRESSIVE rhythm (ring widths increase) with FLOWING transition between strata. |
| 13 | R4-048 | Progressive scaling via type scale creates rhythm | Type scale decreases from core to edge: largest at Established, smallest at Open. Mirrors OD-F-010. |
| 14 | R4-055 | Establishing shots orient before diving into details | Geological survey header (EXT-CONF-015) serves as establishing shot showing all 4 strata before traversal. |
| 15 | R4-013 | Reading gravity creates diagonal path through homogeneous content | Within each stratum, reading gravity applies. Between strata, spiral geometry overrides gravity. |

### Additional SOUL PASS (Universal — apply to AD-004)

| # | Finding ID | Description | How AD-004 Should Apply |
|---|-----------|-------------|-------------------------|
| 16 | R4-044 | Musical rest = whitespace/breathing room | Stratum transition zones (48px+ per OD-F-007) serve as musical rests between geological layers. |
| 17 | R4-045 | Accent = breaking pattern for emphasis | Border-weight transitions at stratum boundaries are structural accents. 4px→3px = confidence shift. |
| 18 | R4-046 | Repeated spacing creates rhythm | Consistent within-stratum spacing creates rhythm within each geological layer. |
| 19 | R4-049 | Consistent alignment patterns create rhythm | Left-aligned stratum headers create vertical rhythm spine down the spiral. |
| 20 | R4-087 | Regular rhythm for body content (consistent spacing, repeating patterns) | Within each stratum: regular rhythm for content paragraphs. Between strata: progressive rhythm. |
| 21 | R4-089 | Break rhythm for important callouts or warnings | Callout family (4px left border) within strata. Stratum-appropriate confidence coloring. |

### CONDITIONAL PASS Findings (8)

| # | Finding ID | Description | Adaptation Required | How AD-004 Should Apply |
|---|-----------|-------------|---------------------|-------------------------|
| 22 | R4-135 | Golden ratio: responsive design limits full ratio support | Apply golden ratio to individual stratum proportions, not full page. Responsive breakpoints may override. | Ratio applied at stratum scale; stacks vertically on mobile. |
| 23 | R4-114 | Visual rhythm: flowing rhythm follows bends and curves like sand dunes | "Curves" must be implemented as 2D line paths (SVG/clip-path), NOT rounded containers. | If spiral is visualized, use angular approximation (polygonal spiral). No border-radius. |
| 24 | R4-116 | Scroll-based progressive disclosure | No scroll-jacking. Content reveals via natural scroll + intersection observer. | Strata reveal progressively as reader scrolls through geological layers. prefers-reduced-motion. |
| 25 | R4-117 | Modals/popovers for detail-on-demand | Sharp corners, no box-shadow, no backdrop blur. Solid border + bg. | Deep-dive modal for speculative content within Open stratum. Flat, sharp-edged. |
| 26 | R4-150 | Decision matrix: complexity ratings guide exploration scoping | Low-complexity patterns easier to soul-comply. Golden ratio is medium complexity. | Use complexity rating to scope spiral implementation: core geometry first, progressive enhancement. |
| 27 | R4-123 | Rhythm: alternating colors create rhythm | Colors must alternate within locked palette. Zone tokens (sparse/dense). | Stratum backgrounds alternate warm cream/white within locked palette. |
| 28 | R4-075 | Progressive disclosure: use clear affordances for "more" content | Flat indicators (borders, typography weight) for stratum expansion. | Stratum headers with confidence badges and expand affordances. |
| 29 | R4-076 | Progressive disclosure: maintain context when expanding/collapsing | UX principle: keep stratum label visible during expansion. | Sticky stratum header during content scroll within each layer. |

**Total R-4 Findings for AD-004: 29** (exceeds minimum of 15)

---

## 3. R-2 FINDINGS (EMBEDDED)

### R2-1.2: Pull Quotes as Structural Elements

**AD-004 Application:** Pull quotes at spiral reveal waypoints summarize confidence level at each turn. At Established core: pull quotes in Instrument Serif italic present settled truths. At Speculative edge: pull quotes frame open questions. The pull quote IS the confidence marker at each stratum boundary — it tells the reader "this is what we know with THIS level of certainty." Placement at spiral transition points creates visual breathing between geological layers.

**R-4 Synergy:** R2-1.2 + R4-042 (rhythm break) = confidence-annotated axis waypoints.

---

### R2-1.4: Running Headers and Section Markers (UNIVERSAL)

**AD-004 Application:** Running headers become spiral depth indicators. "Stratum: Established | Confidence: HIGH" persists as the reader traverses through geological layers. This is the MOST important R-2 finding for AD-004 because the spiral geometry can be disorienting — the running header anchors the reader's position within the confidence hierarchy at all times. Maps directly to EXT-CONF-005 (Appleton epistemic disclosure) and EXT-CONF-010 (NNG information scent).

**R-4 Synergy:** R2-1.4 + R4-073 (three-level disclosure) = persistent confidence wayfinding.

---

### R2-1.5: White Space as Content (UNIVERSAL)

**AD-004 Application:** Whitespace encodes confidence-density inversion. Established core = dense content, minimal whitespace. Open edge = sparse content, generous whitespace. The AMOUNT of whitespace IS the confidence signal — established truths are tightly packed (high certainty = no room for doubt), while speculative ideas need breathing room (low certainty = space for alternatives). This implements the GEOLOGICAL density gradient through pure whitespace manipulation.

---

### R2-2.3: Dense but Breathable Interfaces

**AD-004 Application:** Spiral reveal layers: dense at established core, progressively more breathing room toward speculative edge. The 8px base unit within Established stratum content, expanding to 16px in Probable, 24px in Speculative, and 32px in Open. This creates a CRESCENDO of whitespace (inverse density) from core to edge, mirroring the confidence gradient.

**R-4 Synergy:** R2-2.3 + R4-039 (progressive rhythm) = confidence-proportional density gradient.

---

### R2-2.4: Analytical Dashboard Storylines

**AD-004 Application:** Spiral reveal as analytical storyline from certainty core to exploration edge. The geological survey header (EXT-CONF-015) functions as a dashboard overview showing all 4 strata, their confidence levels, and evidence density. Within each stratum, analytical storyline techniques (data visualization, evidence tables) present supporting evidence with appropriate confidence framing.

---

### R2-3.1: Maturity Badges and Component Status

**AD-004 HIGHEST RELEVANCE.** Spiral reveal rings carry confidence badges (Established/Probable/Speculative/Open) — this finding provides the visual mechanism for confidence stratification within spiral geometry. Soul-safe: sharp-edged badges with locked palette colors. Border-weight at badge correlates with stratum confidence: 4px badge border for Established, 1px for Open. This is the VISUAL ENCODING of the GEOLOGICAL strata within each spiral ring.

**R-4 Synergy:** R2-3.1 + R4-062 (focal point) = confidence-badged spiral waypoints.

---

### R2-3.4: Atomic Design Organization

**AD-004 Application:** Spiral reveal rings map to atomic complexity levels. Atoms at core (established facts — simple, indivisible truths). Molecules mid-ring (common patterns — combinations of established facts). Organisms at outer ring (complex recommendations — speculative assemblies). This creates a dual hierarchy: confidence (geological) AND complexity (atomic), both increasing from core to edge.

---

### R2-4.3: CSS Grid with Fractional Units (fr)

**AD-004 Application:** Spiral reveal sections widened/narrowed via fr units. Established stratum = wider (2fr, more content authority), Speculative/Open = narrower (1fr, less visual weight). This implements OD-F-001's width-as-density principle within the spiral: width encodes both confidence and density simultaneously. `grid-template-columns: 2fr 1fr` for established content with sidebar metadata.

**R-4 Synergy:** R2-4.3 + R4-063 (golden ratio flex values) = proportional spiral geometry via fr units.

---

### R2-5.1: Typography as Primary Design Element

**AD-004 Application:** Spiral reveal ring labels in large Instrument Serif italic create axis waypoints. "ESTABLISHED" as a dramatic typographic element at the core; progressively smaller stratum labels toward the edge. Typography IS the confidence hierarchy — larger, bolder type at the core (high certainty), lighter, smaller type at the edge (low certainty). The 5-level type cascade (OD-F-010) mirrors the geological strata.

---

### R2-5.4: Dramatic Typography as Content

**AD-004 Application:** Spiral reveal core label at largest display size (40px+ per locked scale), progressively smaller toward outer rings. Tight letter-spacing (-0.02em) for display sizes. The Established stratum heading IS dramatic content — it announces what is definitively known with typographic conviction. Open stratum headings at smallest display size signal tentativeness through scale.

---

### R2-6.1: Split Screen Layouts

**AD-004 Application:** Spiral reveal with split screen showing established (one side) vs speculative (other side) simultaneously. This extends the spiral into a comparative axis: left panel shows the dense core (Established), right panel shows the sparse edge (Open), creating a direct visual contrast between certainty levels. The split IS the GEOLOGICAL cross-section made visible.

**R-4 Synergy:** R2-6.1 + R4-060 (golden ratio two-column) = confidence-contrasting split layout.

---

### R2-6.3: Scrollytelling for Documentation

**AD-004 Application:** Spiral reveal as scroll-driven journey from core to edge. Fixed confidence indicator updates as reader scrolls through strata. The scrollytelling format IS the GEOLOGICAL traversal — the reader physically moves through geological layers by scrolling, with a persistent stratum indicator showing current confidence level. Must respect prefers-reduced-motion.

**R-4 Synergy:** R2-6.3 + R4-116 (scroll-based disclosure) = scroll-driven geological traversal.

---

### R2-6.5: Copy-Paste Component Philosophy (UNIVERSAL)

**AD-004 Application:** Spiral layout CSS extractable and reusable. Golden ratio proportions, border-weight gradient, stratum zone tokens — all as copy-paste CSS patterns. The confidence encoding mechanism (border-weight = certainty) should be independently usable outside the spiral context.

**Total R-2 Findings for AD-004: 13** (exceeds minimum of 5)

---

## 4. UNAPPLIED OD-F / DD-F FINDINGS CARRIED FORWARD

### From OD Stage

| Finding | What It Says | How AD-004 Should Apply |
|---------|-------------|-------------------------|
| OD-F-005 | Organization IS Density | Confidence stratification IS GEOLOGICAL density. Spiral rings ARE density layers. High confidence = dense, low confidence = sparse. |
| OD-F-007 | Mode-transition breathing (48px+) | Between spiral strata, 48px+ breathing zones with stratum transition markers (EXT-CONF-014). |
| OD-F-010 | Typography size reduction mirrors density | Type scale decreases from core (largest) to edge (smallest), mirroring the confidence-density gradient. |
| OD-F-AP-001 | 2px border epidemic — use 3-category system | Stratum borders use the 4px/3px/2px/1px confidence gradient — this is the ONE context where progressive border widths are semantic, not epidemic. Rule 5 inversion documented in EXT-CONF-013. |

### From DD Stage

| Finding | What It Says | How AD-004 Should Apply |
|---------|-------------|-------------------------|
| DD-F-004 | GEOLOGICAL: stacked hierarchy layers | Spiral rings = geological strata. Atmosphere (minimal) → Surface (low) → Topsoil (medium) → Subsoil (high) → Bedrock (max). |
| DD-F-002 | CRESCENDO: sparse-to-dense progression | Inverse CRESCENDO from edge to core: Open (sparse) → Speculative → Probable → Established (dense). |
| DD-F-006 | FRACTAL: self-similarity at 5 scales | Spiral fractal: page scale (full spiral), stratum scale (ring layout), section scale (within-ring content), component scale (confidence badges), character scale (type weight gradient). |
| DD-F-014 | Max 2 callouts per viewport | Within each stratum, max 2 callouts visible. Dense strata (Established) especially prone to callout stacking. |
| DD-F-015 | No traffic-light color adjacency | Confidence badges never use red/green adjacency. Use warm palette tones for confidence differentiation. |
| DD-F-016 | Consistent border widths — 3-category system | AD-004 is the EXCEPTION: border-weight gradient (4px/3px/2px/1px) is SEMANTIC confidence encoding, not arbitrary variation. Document this exception explicitly. |

---

## 5. EXT-AXIS-SP FINDINGS (Bespoke External Research)

### EXT-AXIS-SP-001: Golden Ratio as Geological Proportion System

**Description:** The golden ratio (1.618) provides mathematically harmonious proportions for spiral ring widths. Each outward ring is 1.618x wider than the inner ring, creating a naturally expanding layout that mirrors geological strata accumulation. The core (Established) is the smallest, densest ring — bedrock compressed under pressure. Each outward ring expands, giving speculative content room to breathe. This is not decorative mathematics — the ratio creates a PERCEPTUAL signal that denser (inner) zones are more significant than sparser (outer) zones.

**Soul Test:** PASS — Pure CSS proportion via flex: 1.618 / flex: 1. No border-radius, no box-shadow. Mathematical proportion is soul-neutral. Hierarchy through SIZE (IS-1).

**Signature Elements:**
1. `flex: 1` for core (Established) ring — densest, smallest
2. `flex: 1.618` for Probable ring — golden ratio expansion
3. `flex: 2.618` for Speculative ring — double golden ratio, generous breathing

---

### EXT-AXIS-SP-002: Border-Weight Gradient as Flat Geological Encoding

**Description:** OD-004's most significant contribution: the border-weight gradient (4px/3px/2px/1px) encodes GEOLOGICAL strata as flat 2D signals. This solves the central design challenge of AD-004 — how to represent depth (geological layers) without violating the ANTI-PHYSICAL identity. The answer: border weight IS the depth signal. 4px = bedrock (heaviest, most certain). 1px = atmosphere (lightest, most speculative). This is Rule 5 inverted: normally 1px borders signal uncertainty, and here they literally DO signal uncertainty — it is semantic, not anti-pattern.

**Soul Test:** PASS — Border-left width is flat CSS. No shadows, no transforms, no 3D. The border IS on the same flat plane. Weight variation encodes meaning without implying physical depth.

**Signature Elements:**
1. `.stratum-established { border-left: 4px solid var(--color-primary); }` — heaviest, most certain
2. `.stratum-probable { border-left: 3px solid var(--color-border); }` — strong but subordinate
3. `.stratum-open { border-left: 1px solid var(--color-border-subtle); }` — lightest, most uncertain

---

### EXT-AXIS-SP-003: Spiral as Angular Approximation (Anti-Physical Spiral)

**Description:** R4-154 CHALLENGE identifies the Fibonacci spiral as an organic/physical form that could violate IS-5 (anti-physical). The solution: implement the spiral as an ANGULAR approximation — a polygonal spiral using straight-line segments rather than curves. Each "turn" is a right angle, creating a square-cornered spiral consistent with Soul Piece 1 (sharp edges) and Soul Piece 5 (squares signal system). The spiral becomes a series of nested rectangles, each representing a geological stratum, connected by sharp-angled transitions.

**Soul Test:** PASS — Angular/polygonal spiral uses straight lines and right angles. border-radius: 0 throughout. No curved paths, no rounded containers. The "spiral" is structural composition (nested rectangles), not decorative curve.

**Signature Elements:**
1. Nested `<section>` elements, each representing a stratum ring, with right-angle boundaries
2. No `border-radius` on any spiral element — all corners sharp
3. Angular transition markers (CSS triangles via `clip-path: polygon()`) at stratum boundaries

---

### EXT-AXIS-SP-004: Confidence-Proportional Spacing System

**Description:** The spacing within each spiral ring correlates with confidence level. Established core: tightest spacing (8px base unit, 16px paragraph gap) — dense content, no room for doubt. Probable ring: moderate spacing (12px base, 24px gap). Speculative ring: generous spacing (16px base, 32px gap) — room for alternative interpretations. Open ring: maximum spacing (24px base, 48px gap) — vast whitespace acknowledges vast uncertainty. This creates a CRESCENDO of whitespace from core to edge, making the confidence gradient physically scannable.

**Soul Test:** PASS — Pure CSS spacing. gap, margin, padding values. No soul implications. Whitespace as design element (Rule 6).

**Signature Elements:**
1. `.stratum-established { --stratum-gap: 16px; --stratum-padding: 24px; }` — tight, dense
2. `.stratum-speculative { --stratum-gap: 32px; --stratum-padding: 48px; }` — generous, breathing
3. CSS custom properties per stratum enable systematic spacing without magic numbers

---

### EXT-AXIS-SP-005: Geological Survey Header as Spiral Map

**Description:** EXT-CONF-015 established the dark header as geological survey map. For the spiral axis, this becomes a SPIRAL MAP — a miniature angular spiral in the header showing all 4 strata, their confidence levels, and the reader's current position. The map is a pure CSS flat graphic: nested rectangles with border-weight gradient, active stratum highlighted with --color-primary border. This creates DD-F-006 fractal at page scale — the map IS a miniature of the page content.

**Soul Test:** PASS — CSS-only flat graphic. Nested rectangles (border-radius: 0), border colors from locked palette. No box-shadow, no rounded paths. The miniature spiral map is a 2D diagram, not a 3D visualization.

**Signature Elements:**
1. Dark header (#1A1A1A) containing miniature spiral map as CSS grid of nested rectangles
2. Active stratum highlighted with `border-color: var(--color-primary)` (3px)
3. Stratum labels in --font-mono at --type-meta size (12px)

---

## 6. SIGNATURE ELEMENTS SUMMARY

| Finding | Signature Element 1 | Signature Element 2 | Signature Element 3 |
|---------|---------------------|---------------------|---------------------|
| EXT-AXIS-SP-001 | flex: 1 core ring | flex: 1.618 expansion | flex: 2.618 outer ring |
| EXT-AXIS-SP-002 | 4px established border | 3px probable border | 1px open border |
| EXT-AXIS-SP-003 | Nested rectangular sections | Sharp-angled transitions | No border-radius anywhere |
| EXT-AXIS-SP-004 | 16px core gap | 32px speculative gap | CSS custom properties per stratum |
| EXT-AXIS-SP-005 | Dark header spiral map | Active stratum highlight | --font-mono stratum labels |

---

## 7. SOUL FAIL FINDINGS (Reference Only — NOT for Application)

| Finding ID | Description | Why It Fails | Gate Violated |
|-----------|-------------|-------------|---------------|
| R4-154 | Golden ratio: spiral guides eye to center (Fibonacci spiral) | Spiral as visible curved path = organic/physical form. Use angular approximation instead. | G1 (border-radius if rendered as curve), G8 (rounded physical shape) |
| R4-182 | Diagonal: header with parallax scroll depth effect | Parallax = canonical ANTI-PHYSICAL violation | G6 |
| R4-181 | 3D Bento with CSS perspective and depth layering | 3D transforms, perspective, depth effects | G2, G5, G6, G7 |
| R4-186 | Progress indicators with rounded ends (pill-shaped bars) | Pill-shaped = border-radius: 9999px | G1, G8 |
| R4-189 | Progressive disclosure with gradient reveal animation | Gradient reveal = light/material interaction simulation | G7 |

**AD-004 Specific Risk:** The biggest soul risk for spiral is making the GEOLOGICAL metaphor literal — implying actual physical depth through shadows, gradients, or z-transforms. The solution is EXT-AXIS-SP-002: border-weight gradient encodes geological depth as a flat 2D signal. The "depth" is semantic (confidence level), not visual (z-axis simulation). Additionally, watch for the Fibonacci spiral itself — if rendered as a visible curve, it violates Soul Piece 1 (sharp edges). Use angular approximation (EXT-AXIS-SP-003).

---

## 8. RESEARCH DISCOVERIES / OPEN QUESTIONS FOR IDENTITY DELTA

### Discoveries to Investigate

1. **Rule 5 inversion at confidence boundaries:** OD-004 established that 1px borders in Open/Speculative strata are SEMANTIC confidence signals, not anti-pattern violations. Does AD-004's spiral axis extend this inversion further — could the entire border-weight gradient (4px→1px) be recognized as a formal identity pattern beyond the confidence context?

2. **Angular vs curved spiral:** EXT-AXIS-SP-003 proposes angular approximation. Is this the ONLY valid implementation, or could a purely decorative (non-container) SVG spiral path be acceptable as a graphic element (like a printed diagram) while containers remain sharp-edged?

3. **Confidence-density paradox:** GEOLOGICAL says dense layers = deeper = more fundamental. But the spiral's inner ring is SMALLER (less space). Does the spatial compression at the core create a density that is visually overwhelming, or does it reinforce the "compressed certainty" metaphor?

4. **Split screen comparison mode:** R2-6.1 proposes Established vs Open side-by-side. Does this break the spiral geometry (linear comparison instead of spiral traversal), or does it complement it as an alternative view mode?

### R-2/R-4 Synergy Pairings for AD-004

| Synergy | R-2 Source | R-4 Source | Axis Integration |
|---------|-----------|-----------|-----------------|
| Axis Structure | R2-3.1 (maturity badges) | R4-062 (focal point) | Confidence-badged spiral rings |
| Axis Proportion | R2-4.3 (CSS Grid fr) | R4-063 (golden ratio flex) | Proportional ring widths via golden ratio |
| Axis Density | R2-2.3 (dense-but-breathable) | R4-039 (progressive rhythm) | Confidence-proportional density gradient |
| Axis Typography | R2-5.4 (dramatic type) | R4-048 (progressive scaling) | Type scale mirrors confidence gradient |
| Axis Navigation | R2-6.3 (scrollytelling) | R4-073 (three-level depth) | Scroll-driven geological traversal |

---

*Research package compiled by Research Packager v2 agent | 2026-02-09*
*Citations: 29 R-4 + 13 R-2 + 4 OD-F + 6 DD-F + 5 EXT-AXIS-SP = 57 total findings*
