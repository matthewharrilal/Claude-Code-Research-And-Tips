# Channel 2: Typographic — Where Typography Becomes "3-Zone Arc" and Where It Doesn't

**Agent:** Typographic Channel Tracer
**Task:** #7
**Date:** 2026-02-19
**Files Read:** PV2-PIPELINE-DIAGRAM.md, tension-composition/SKILL.md (Phases 0-4.7), tokens.css, mechanism-catalog.md (all 18 mechanisms), flagship-audit/02-channel-expansion-playbook.md, flagship-audit/05-crown-jewel-comparison.md

---

## 1. THE TYPOGRAPHIC CHANNEL DEFINED

The typographic channel encompasses six CSS sub-properties:

| Sub-Property | Token Source | Range | Perceptual Weight |
|---|---|---|---|
| **font-size** | `--text-xs` through `--text-display` (12px-48px) | 9 named stops + CD-006 aliases | HIGH — immediately visible hierarchy |
| **font-weight** | 400 (body), 500 (semi-bold), 600 (labels), 700 (headings) | Not tokenized, implicit | MEDIUM — reinforces hierarchy, rarely sole differentiator |
| **font-family** | `--font-display`, `--font-body`, `--font-mono` | 3 families only (IMMUTABLE) | HIGH — font swap signals role change |
| **letter-spacing** | Not tokenized (threshold >= 0.03em per PV2) | Perception floor 0.03em at 16px | LOW unless >= 0.03em; sub-0.01em is invisible |
| **line-height** | Guardrail floor 1.5 (WCAG) | 1.5 (dense) to 1.8 (sparse) | LOW — creates atmosphere, not drama |
| **text-transform** | `uppercase` on labels/meta, `normal` elsewhere | Binary: uppercase or not | MEDIUM — signals meta-level content |

**The channel's unique property:** Typography is the ONLY channel that operates at ALL 5 scales simultaneously. Background colors change between zones (Page/Section scale). Borders appear on components (Component scale). But typography is present on every single element from page title to inline code span. This makes it both the most pervasive channel and the most dangerous one to misallocate.

---

## 2. WHERE TYPOGRAPHY LIVES IN PV2

### 2.1 TC Planner (Wave 0) — Typography as Metaphor Property

The TC skill encodes typography as a Material Property in the 5-Category Taxonomy (Phase 4.1):

```
C. Material Properties — Texture, weight, substance
| Texture | Font family shifts (serif vs sans vs mono) |
| Density/compression | padding, line-height, font-size, gap |
| Weight/heaviness | border-width, font-weight, background opacity |
```

And as a Translation Grammar lookup (Phase 4.2 Hierarchy table):

```
| Primary   | font-family: var(--font-display); font-size: 2.5-3rem |
| Secondary | font-family: var(--font-display); font-size: 1.625rem |
| Tertiary  | font-family: var(--font-display); font-size: 1.375rem; font-style: italic |
| Meta      | font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em |
```

**FINDING 1: The TC planner sees typography through a HIERARCHY lens, not a SEMANTIC DIRECTION lens.** The translation grammar maps hierarchy levels (Primary/Secondary/Tertiary/Meta) to font stacks and sizes. This is correct but incomplete. It tells you WHAT sizes to use for WHICH heading levels, but it never says: "As the content deepens from Zone 1 to Zone 4, heading weights should compress, letter-spacing should tighten, and line-height should decrease — all reinforcing the metaphor's descent." The hierarchy lookup is STATIC (Primary always = 2.5-3rem regardless of zone), not DYNAMIC (Primary in Zone 1 = generous, Primary in Zone 4 = compressed).

### 2.2 Coherence Rules (Phase 4.3) — Typography Has One Rule

Rule C-3 is the only coherence rule addressing typography:

> **Rule C-3: Typography role must match content authority.**
> - Display serif = highest authority (Essence, Core Abstraction)
> - Body sans-serif = standard authority (prose)
> - Mono = precision/reference (code, labels, meta)

**FINDING 2: C-3 is a CLASSIFICATION rule, not a DIRECTION rule.** It says "display font = authority, body font = standard, mono = precision." This prevents mis-assignment (mono for headings would be wrong). But it does NOT say: "Within the body font-family, font-size should VARY between zones to reinforce the metaphor's semantic direction." Classification prevents errors; direction creates composition. C-3 prevents errors. Nothing creates typographic composition.

### 2.3 Recipe Phase 5 (Wave 1) — The "3-Zone Typography Arc"

The PV2 Pipeline Diagram introduces the most specific typographic intelligence in the entire pipeline:

```
PHASE 5: Typography Zones
  3-zone typography arc: display / body / detail.
  Display (h1-h2): 28-36px, Instrument Serif
  Body (p, li): 16-18px, system serif
  Detail (caption, meta): 13-14px, system sans
  MANDATORY: >= 2px font-size delta between zones.
  Letter-spacing: >= 0.03em between typographic zones.
```

**FINDING 3: The 3-zone arc is the pipeline's ENTIRE typographic intelligence, and it operates at one scale only: the PAGE scale.** Display/Body/Detail is a global classification — h1 everywhere is display, p everywhere is body, caption everywhere is detail. This produces correct hierarchy but uniform treatment. It does NOT produce SECTION-LEVEL typographic variation, where Zone 2's body text might be at 15px/1.65 line-height (compressed, focused) while Zone 1's body text is at 18px/1.8 line-height (generous, exploratory).

### 2.4 Programmatic Gate SC-11 (Wave 2) — Font-Size Zones

```
SC-11 | Font-size zones | >= 2px delta
```

**FINDING 4: SC-11 checks that the 3-zone arc EXISTS (delta between display/body/detail) but not that it VARIES between content zones.** A page with h1=32px, p=16px, meta=12px everywhere passes SC-11 perfectly — even if all 12 sections look typographically identical. The gate verifies HIERARCHY (big/medium/small exist) but not MODULATION (big/medium/small shift by section).

### 2.5 Mechanism Catalog — One Typographic Mechanism (#11)

Mechanism #11 (Typographic Scale Jumping) documents the ~1.5x ratio between adjacent type sizes. Its impact is rated LOW: "Operates through hierarchy, not drama. Readers use headings, don't admire them."

**FINDING 5: The mechanism catalog has ONE mechanism in the Hierarchy category that is primarily typographic (#11), and it is rated LOW effectiveness.** The catalog devotes 50 lines to border-weight gradient (#1), 80 lines to 2-zone component DNA (#2), and 20 lines to typographic scale jumping (#11). The per-category deployment requirement (Hierarchy: 1+) is satisfied by border-weight (#1) or spacing compression (#4) — builders can fulfill the Hierarchy minimum without touching typography at all.

### 2.6 The Cascade Value Table (Phase 8) — Typography Appears in Verification

Phase 8 requires recording computed CSS at EVERY section boundary including font-size, font-weight, and letter-spacing. This is the only place where per-boundary typographic values are explicitly measured.

**FINDING 6: Typography enters the CASCADE VALUE TABLE as a verification artifact, not a compositional artifact.** The builder records what typography IS at boundaries after building, but is never told what typography SHOULD BE at boundaries before building. The cascade value table is a POST-HOC audit tool, not a GENERATIVE specification.

---

## 3. THE TYPOGRAPHIC CHANNEL'S FAILURE MODE: THE FLAGSHIP

The flagship experiment's typographic profile, from the dissection audit:

- **p fontSize: 16px everywhere** (12 sections, zero variation)
- **p fontWeight: 400 everywhere** (12 sections, zero variation)
- **p color: rgb(26,26,26) everywhere** (12 sections, zero variation)
- **letter-spacing: 0.001em-0.01em** (sub-perceptual, 22% of CSS budget wasted)
- **42 of 63 CSS techniques were typographic modulations** (67% of total CSS budget)

The crown jewel comparison (File 05) diagnosed it precisely:

> "The flagship was built as a TYPOGRAPHY + ZONE-BACKGROUND exercise, not a STRUCTURAL COMPOSITION exercise."

> "42 of the flagship's 63 CSS techniques are typography modulations (letter-spacing, line-height, word-spacing, heading color modulations per zone) or zone background definitions... The result is a page where every section READS differently (at a sub-perceptual level) but LOOKS identical."

**ROOT CAUSE OF TYPOGRAPHIC FAILURE:** The builder allocated 22% of its CSS budget to letter-spacing values between 0.001em and 0.01em — below the perception threshold of 0.03em. These were technically correct CSS. They were technically different between zones. They were technically effort. But they were perceptually invisible. The pipeline's emphasis on "refinement gradients" and micro-variation directed the builder's typographic skill toward invisibility.

**Contrast with CD-006:** CD-006 spent ~15/89 techniques on typography, distributed across a 5-level discrete scale with visible jumps. The remaining 74 techniques went to borders, grids, components, colors, accessibility. CD-006's typography was VISIBLE because it was DISCRETE (big jumps between levels), not CONTINUOUS (tiny gradients between zones).

---

## 4. WHERE TYPOGRAPHIC INTELLIGENCE GETS LOST

### 4.1 Gap: No "Typographic Arc" Concept Matching Content Zones

The pipeline has a 3-zone typography arc (display/body/detail) and separate content zones (Zone 1 through Zone N). These two systems are DISCONNECTED. Nothing in the pipeline says:

> "Zone 1 (introduction) should use the generous end of the typographic range: body at 18px, line-height 1.8, letter-spacing 0.01em. Zone 3 (deep technical) should use the compressed end: body at 16px, line-height 1.6, letter-spacing 0em. Zone 4 (resolution) should return toward generous: body at 17px, line-height 1.7."

This is what the flagship audit's "channel expansion playbook" called **zone-specific typographic variation**:

```css
/* Zone 1: generous, exploratory typography */
.zone-1 p { line-height: 1.8; letter-spacing: 0.005em; }
.zone-1 h2 { letter-spacing: -0.01em; /* tight display = authoritative */ }

/* Zone 2: compressed, focused typography */
.zone-2 p { line-height: 1.65; letter-spacing: normal; }
.zone-2 h2 { font-weight: 500; /* heavier = more assertive */ }

/* Zone 3: balanced, resolved typography */
.zone-3 p { line-height: 1.7; letter-spacing: 0.003em; }
```

**This intelligence exists in the audit report but was never codified into the recipe or the TC planner's output.**

### 4.2 Gap: Typography Doesn't Reinforce the Metaphor's Semantic Direction

The TC planner derives a semantic direction (e.g., "descent from overview to technical depth" or "geological strata from surface to bedrock"). The chromatic channel reinforces this: backgrounds darken with depth (Finding from chromatic channel analysis). The spatial channel reinforces it: padding compresses with depth. But the typographic channel does NOT reinforce it. There is no instruction that says:

> "If the metaphor's semantic direction is DESCENT: heading font-weights should increase (bolder at depth), body line-heights should decrease (tighter at depth), and letter-spacing on meta elements should converge toward 0 (less air at depth)."

Rule C-1 (density direction consistency) LISTS typography as something that should follow direction: "Typography MUST compress (smaller sizes, tighter line-height)." But it is stated as a COHERENCE CHECK (verify after building), not a RECIPE STEP (execute during building). The recipe never says "Phase 5, Step 3: For each zone, adjust body line-height by 0.05 increment following the metaphor direction."

### 4.3 Gap: The Perception Threshold Table Doesn't Cover Typography Deeply Enough

PV2's perception thresholds (from the pipeline diagram and the proposed perception-thresholds.md):

| Channel | Threshold | Gate |
|---|---|---|
| Chromatic (backgrounds) | >= 15 RGB delta between adjacent zones | SC-09 |
| Typographic (font-size) | >= 2px delta between typographic zones | SC-11 |
| Typographic (letter-spacing) | >= 0.03em between typographic zones | (no gate) |

**FINDING 7: Letter-spacing has a threshold (0.03em) but no programmatic gate.** SC-11 checks font-size deltas only. A builder could pass SC-11 with perfect font-size zones while still wasting 22% of CSS on sub-perceptual letter-spacing. The threshold exists in the recipe text but is not enforced by gate-runner.js.

**FINDING 8: No perception threshold exists for font-weight or line-height.** These are the two typographic sub-properties most responsible for creating "atmosphere" at the section level. A zone where body text shifts from 400/1.8 to 500/1.6 FEELS dramatically different even if font-size stays at 16px. But neither font-weight delta nor line-height delta has a threshold or a gate.

### 4.4 Gap: Typography Is Absent from the Transition Model

PV2 defines 3 transition types (HARD CUT, SPACING SHIFT, CHECKPOINT). None of them mention typography. The cascade value table records font-size/font-weight/letter-spacing at boundaries, and the multi-coherence rule requires >= 3 channels to shift simultaneously. But the transition TYPE taxonomy doesn't specify how typography should behave at transitions.

A HARD CUT (domain change) could also include a font-family shift (from body serif to body sans or vice versa for a reference section). A SPACING SHIFT (intensity change) could include a line-height shift. These would make transitions richer without adding visual complexity. But the transition grammar currently operates in only two channels: spatial (spacing values) and structural (border presence).

---

## 5. WHAT "TYPOGRAPHIC INTELLIGENCE" WOULD LOOK LIKE

### 5.1 Per-Zone Typographic Profile (Metaphor-Driven)

Instead of a single 3-zone arc (display/body/detail) applied uniformly, the TC planner would output a **per-zone typographic profile** as part of the build plan:

```
ZONE 1 (Introduction — Surface):
  body: 18px / 400 / 1.8 line-height / 0.01em letter-spacing
  headings: 32px / 600 / Instrument Serif / -0.01em letter-spacing
  meta: 12px / 600 / JetBrains Mono / 0.1em / uppercase

ZONE 2 (Technical Depth — Core):
  body: 16px / 400 / 1.6 line-height / 0em letter-spacing
  headings: 28px / 700 / Instrument Serif / -0.02em letter-spacing
  meta: 11px / 600 / JetBrains Mono / 0.08em / uppercase

ZONE 3 (Resolution — Emergence):
  body: 17px / 400 / 1.7 line-height / 0.005em letter-spacing
  headings: 30px / 600 / Instrument Serif / -0.01em letter-spacing
  meta: 12px / 600 / JetBrains Mono / 0.1em / uppercase
```

This would make the typographic channel REINFORCE the metaphor's semantic direction at EVERY boundary, just as backgrounds and spacing already do.

### 5.2 Typographic Shift Requirements at Boundaries

Extend the multi-coherence rule (>= 3 channels must shift at every transition) with specific typographic requirements:

- At HARD CUT boundaries: font-family OR font-weight must change (in addition to background + spacing)
- At SPACING SHIFT boundaries: line-height must change (tighter or looser matching the density shift)
- At CHECKPOINT boundaries: ALL typographic sub-properties may reset (marking a genuine phase change)

### 5.3 Programmatic Gates for Typography

Extend gate-runner.js:

- **SC-11A:** Font-size delta >= 2px between display/body/detail zones (already SC-11)
- **SC-11B:** Letter-spacing delta >= 0.03em between any two elements claiming different typographic treatment (prevents sub-perceptual waste)
- **SC-11C:** Line-height varies across zones (at least 2 distinct line-height values for body text across content zones)
- **SC-11D:** Font-weight varies semantically (not all headings at same weight; at least 2 distinct heading weights)

### 5.4 Typography Budget Cap (Anti-Flagship Pattern)

A binary rule preventing the flagship's failure mode:

> "Typographic CSS lines (font-size, font-weight, letter-spacing, line-height, word-spacing, text-transform declarations) must not exceed 25% of total CSS lines. If they do, the builder is over-investing in one channel at the expense of structural/spatial/chromatic channels."

This directly addresses the flagship's 42/63 (67%) typography concentration.

---

## 6. THE FUNDAMENTAL TENSION: TYPOGRAPHY AS ATMOSPHERE VS. TYPOGRAPHY AS HIERARCHY

The pipeline currently treats typography as HIERARCHY: big headings, medium body, small meta. This is the 3-zone arc. It is necessary but insufficient.

Crown jewel pages (CD-006, OD-004) treat typography as BOTH hierarchy AND atmosphere. The hierarchy is the static backbone (h1 is always bigger than p). The atmosphere is the dynamic modulation (p in Zone 1 feels spacious; p in Zone 3 feels compressed; p in Zone 4 feels resolved). The modulation is achieved through line-height + letter-spacing + font-weight shifts that track the metaphor's semantic direction.

The pipeline encodes hierarchy (3-zone arc, Phase 5, SC-11). It does NOT encode atmosphere (per-zone modulation, metaphor-driven typography, direction-tracking shifts). The flagship ATTEMPTED atmosphere (42 typographic modulations) but failed because the modulations were sub-perceptual (0.001-0.01em). The cure is not "stop modulating typography" — it is "modulate typography PERCEPTIBLY."

**The typographic channel's paradox:** It is the most over-invested channel in the failing pipeline (67% of flagship CSS) and the most under-specified channel in PV2 (1 recipe phase, 1 mechanism, 1 gate, 0 zone-specific guidance). PV2 correctly identified the flagship's typographic WASTE but over-corrected by providing almost no typographic DIRECTION. The result is likely to flip the failure mode: from "invisible typography everywhere" to "correct but uniform typography everywhere."

---

## 7. STRUCTURED TYPOGRAPHIC GATES

### Gate: Per-Zone Typographic Profile (Planning)

**Location:** Wave 0.9 Handoff Gate (add to the 5 binary checks)

```
[ ] Typographic profile per zone?
    - body font-size specified per zone (not just globally)
    - line-height specified per zone
    - At least ONE sub-property VARIES between adjacent zones
    - All deltas >= perception thresholds (2px font-size, 0.05 line-height, 0.03em letter-spacing)
```

### Gate: Typographic Channel Budget (Building)

**Location:** Recipe Phase 8 (verification)

```
[ ] Typography CSS <= 25% of total CSS lines?
    - Count all font-*, letter-spacing, line-height, word-spacing, text-transform declarations
    - Divide by total CSS line count
    - If > 25%: REBALANCE (redirect effort to structural/spatial channels)
```

### Gate: Typographic Shift at Boundaries (Verification)

**Location:** Wave 2, extend SC-11

```
SC-11A: Font-size delta >= 2px between display/body/detail (existing SC-11)
SC-11B: At least 2 distinct body line-heights across content zones
SC-11C: No letter-spacing value between 0.001em and 0.029em (sub-perceptual dead zone)
SC-11D: Heading font-weight varies by at least 100 between zones (e.g., 600 + 700)
```

---

## 8. SUMMARY: THE TYPOGRAPHIC CHANNEL IN PV2

### What PV2 Gets Right
1. The 3-zone arc (display/body/detail) prevents the zero-hierarchy failure
2. The >= 2px font-size delta threshold (SC-11) is a necessary gate
3. The >= 0.03em letter-spacing threshold prevents sub-perceptual waste
4. The cascade value table records typographic values at boundaries for verification
5. Phase 2 of the recipe (CSS Reset + Soul + Base Typography) correctly positions typography as FOUNDATION not FINISH

### What PV2 Misses
1. **No per-zone typographic profile** — Typography is specified globally (3-zone arc) but not per-content-zone (how typography modulates with the metaphor's semantic direction)
2. **No typographic direction rule** — C-1 lists typography as needing direction consistency but this is a coherence CHECK, not a recipe STEP the builder executes
3. **No letter-spacing gate** — The 0.03em threshold is textual, not in gate-runner.js
4. **No line-height or font-weight thresholds** — These atmospheric sub-properties have no perception floors
5. **No typography budget cap** — Nothing prevents a builder from investing 67% of CSS in typography again
6. **No typographic transition intelligence** — The 3 transition types (HARD CUT/SPACING SHIFT/CHECKPOINT) don't specify typographic behavior
7. **Mechanism #11 is under-developed** — 20 lines vs 50-80 for border/component mechanisms; rated LOW effectiveness with no guidance on how to make it HIGH

### The Core Insight

**Typography in PV2 has correct CLASSIFICATION but no COMPOSITION.** The pipeline classifies (display/body/detail) and gates (>= 2px delta) but never composes (Zone 1 generous through Zone 3 compressed back to Zone 4 resolved). Compositional typography — where type properties track the metaphor's semantic arc across zones — is the missing intelligence that separates "correctly formatted" from "atmospherically designed."

The fix is not more gates. It is extending the TC planner to output a per-zone typographic profile (alongside the existing per-zone background colors and per-zone spacing values), and extending the recipe to tell the builder HOW to implement zone-specific typography, not just WHAT the global type scale should be.

---

*End of Channel 2 Typographic Trace*
