# 48 — Chromatic Arc and Zone Architecture Provenance

**Author:** beyond-eight-integrator (Opus 4.6, repurposed for Task #12)
**Date:** 2026-02-22
**Task:** Trace the 4-zone chromatic arc with 15-20 RGB deltas backward through the full provenance chain.

**Sources read:**
- `ephemeral/pages/gas-town-steve-yegge/output.html` (lines 1-800)
- `ephemeral/pages/gas-town-steve-yegge/_tc-brief.md` (99 lines)
- `design-system/pipeline/conventions-brief.md` (lines 1-250)
- `design-system/compositional-core/vocabulary/tokens.css` (184 lines)
- `design-system/compositional-core/identity/prohibitions.md` (420 lines)
- Reports 40 and 41 from `ephemeral/handoff-research/`

---

## 1. THE OUTPUT: What RGB Values Are in the CSS?

From `output.html` lines 34-41, the builder declares:

```css
--bg-z1: #FEF9F5;   /* Situation Brief -- warm cream, open */
--bg-z2: #F0EBE3;   /* Operational Readiness -- warm gray-beige (delta 18 from Z1) */
--bg-z3: #E8E0D4;   /* Field Intelligence -- deep earthy (delta 15 from Z2) */
--bg-z4: #F5F0E8;   /* Allied Ops -- lighter return (delta 20 from Z3) */
```

**RGB breakdown:**

| Zone | Hex | R | G | B | Direction Comment |
|------|-----|---|---|---|-------------------|
| Z1 | #FEF9F5 | 254 | 249 | 245 | OPENING |
| Z2 | #F0EBE3 | 240 | 235 | 227 | DEEPENING |
| Z3 | #E8E0D4 | 232 | 224 | 212 | DEEPENING (densest) |
| Z4 | #F5F0E8 | 245 | 240 | 232 | RESOLVING |

**Delta calculations (max single-channel delta):**

| Boundary | R delta | G delta | B delta | Max delta | Passes >= 15? |
|----------|---------|---------|---------|-----------|---------------|
| Z1->Z2 | 14 | 14 | 18 | **18 (B)** | YES |
| Z2->Z3 | 8 | 11 | 15 | **15 (B)** | YES (exactly at threshold) |
| Z3->Z4 | 13 | 16 | 20 | **20 (B)** | YES |

All three boundaries pass the >= 15 RGB threshold. The B (blue) channel carries the largest delta at every boundary -- the arc moves from warm cream (high B relative to perception) through earthy tones (lower B) and back. This creates a warm-to-cool-to-warm perceptual arc through the blue channel.

**Zone application in CSS:**

| Zone | CSS selector | Background application | Padding |
|------|-------------|----------------------|---------|
| Z1 | `.zone-1` (line 265) | `background: var(--bg-z1)` | `padding: 64px 80px` |
| Z2 | `.zone-2` (line 371) | `background: var(--bg-z2)` | `padding: 40px 80px` |
| Z3 | `.zone-3` (line 549) | `background: var(--bg-z3)` | `padding: 32px 64px 20px` |
| Z4 | `.zone-4` (line 703) | `background: var(--bg-z4)` | `padding: 32px 80px 48px` |

**Additional chromatic elements:**
- Dark header: `background: var(--color-text)` = #1A1A1A (line 190)
- Dark footer: mirrors header (implied at end of file)
- Component backgrounds: several components use `background: var(--bg-z1)` (#FEF9F5) as inset contrast within Z2/Z3

---

## 2. DID THE TC BRIEF SPECIFY THESE VALUES?

From `_tc-brief.md` line 47 and lines 70-79 (Build Recipe):

**TC brief specified these zone backgrounds:**

| Zone | TC Brief Hex | TC Brief Description |
|------|-------------|---------------------|
| Z1 | #FEF9F5 | (default -- same as page background) |
| Z2 | #F5F0E8 | "delta ~20 RGB" |
| Z3 | #FAF5ED | "delta ~15 RGB" |
| Z4 | #FEF9F5 | (return to page background) |

**TC brief's boundary CSS section (lines 83-86):**
```
Z1->Z2: Chromatic #FEF9F5->#F5F0E8 (~20 RGB)
Z2->Z3: Chromatic #F5F0E8->#FAF5ED (~15 RGB)
Z3->Z4: Chromatic #FAF5ED->#FEF9F5 (~15 RGB)
```

**But the builder OVERRODE the TC brief's values.** The output's CSS comment at lines 34-37 is explicit:

> "OVERRIDE: TC brief values (#FEF9F5/#F5F0E8/#FAF5ED/#FEF9F5) had max deltas of 13, 5, 8 -- all below 15 RGB threshold. Replaced with perceptible values that maintain warm->cool->deep->resolved arc."

**Verification of the TC brief's original deltas:**

| Boundary (TC Brief) | Hex A | Hex B | R | G | B | Max Delta |
|---------------------|-------|-------|---|---|---|-----------|
| Z1->Z2 | #FEF9F5 | #F5F0E8 | 9 | 9 | 13 | **13** |
| Z2->Z3 | #F5F0E8 | #FAF5ED | 5 | 5 | 5 | **5** |
| Z3->Z4 | #FAF5ED | #FEF9F5 | 4 | 4 | 8 | **8** |

The builder's comment is CORRECT. The TC brief's values fail the 15 RGB threshold at every boundary (13, 5, 8). The builder self-corrected using the perception physics from the conventions brief.

### TC brief's zone specification accuracy

The TC brief correctly specified:
- 4 zones (zone count: TC brief decision)
- Zone names and semantic directions (OPENING, DEEPENING, DEEPENING, RESOLVING)
- Zone density progression (sparse -> moderate -> dense -> moderate)
- Zone content mapping
- The INTENT of a chromatic arc ("clearance zones: #FEF9F5->...")
- Approximate delta targets ("~20 RGB", "~15 RGB")

The TC brief incorrectly specified:
- The actual hex values (all sub-perceptual)
- The delta magnitudes (claimed ~20 RGB, actual was 13; claimed ~15 RGB, actual was 5)

**Assessment:** The TC brief provided the ARCHITECTURE (4 zones, semantic directions, density arc) but failed on the IMPLEMENTATION (specific hex values). The builder fixed the implementation using the conventions brief's threshold knowledge.

---

## 3. WHERE DOES THE 15 RGB THRESHOLD COME FROM?

### Provenance chain:

```
Flagship experiment failure (2026-02-17)
  → 9 PA auditors independently flagged imperceptible backgrounds
  → Flagship backgrounds differed by 1-8 RGB (proved invisible)
  → Root cause analysis: programmatic gates passed, perceptual audit failed
    → Threshold established: >= 15 RGB max-channel delta
      → Encoded in conventions brief Section 2: "Perception (The Physics of Visibility)"
        → conventions-brief.md line 57: "Adjacent zone backgrounds exist in different
           hues only when at least one RGB channel differs by 15 or more points."
          → Threshold table line 83: "Background color delta | >= 15 RGB max-channel | CONFIRMED"
```

**Key finding:** The 15 RGB threshold is NOT from the original R1-R5 research (337 findings). It is from EXPERIMENT FAILURE. Report 40 (soul survival) Finding 9 confirms: "4 of the 18 surviving rules (22%) came from EXPERIMENT FAILURES, not from the original research."

**Confidence tier:** CONFIRMED (conventions-brief.md line 83) -- "Validated across N>=3 independent experiments or corpus-wide evidence: 11/25 corpus files + flagship failure."

**How it reached the builder:** The conventions brief Section 2 presents it as "physics of visibility," not as a rule. Line 94: "These are not rules to comply with. They are the physics of human perception." This framing enabled the builder to treat it as a world-law and self-correct the TC brief's values.

---

## 4. WHERE DOES THE "WARM CREAM TO DEEP EARTHY" DIRECTION COME FROM?

The chromatic direction (warm cream -> gray-beige -> deep earthy -> lighter return) has multiple provenance sources:

### Source 1: Soul constraints (prohibitions.md)

- Rule #6: "NEVER Use Pure Black (#000000) or Pure White (#FFFFFF)" -- forces warm palette
- Rule #16: "NEVER Use Cool-Toned Grays (#F5F5F5, #E0E0E0, etc.)" -- eliminates cool direction
- Implicit R >= G >= B warm palette rule (from Report 41): "every background hex satisfies R >= G >= B"

**What soul provides:** The CONSTRAINT that the chromatic arc must be warm. The arc cannot go cool (blue-gray) or neutral. All backgrounds must have R >= G >= B (warm).

### Source 2: tokens.css

- `--color-background: #FEF9F5` (line 28) -- defines the starting point
- `--color-border-subtle: #F0EBE3` (line 32) -- this exact value becomes Z2's background
- `--bg-warm: #FEF9F5` (line 44) -- warm emphasis
- `--color-zone-sparse: #FEF9F5` (line 52) -- sparse zones use this
- `--color-zone-breathing: #FAF5ED` (line 54) -- breathing zone

**What tokens provide:** The VOCABULARY of valid warm colors. The builder's Z1 (#FEF9F5) and Z2 (#F0EBE3) are both token values. Z3 (#E8E0D4) and Z4 (#F5F0E8) are builder-derived but follow the R >= G >= B constraint.

### Source 3: Conventions brief Section 4 (Multi-Coherence)

Lines 172-179 provide a "Concrete 4-zone example (DEEPENING arc)" with specific hex values:
```
Zone 1: bg #FEF9F5
Zone 2: bg #F0EBE3
Zone 3: bg #FFFFFF (note: this is DIFFERENT from what the builder used)
Zone 4: bg #FEF9F5
```

**What the conventions brief provides:** A RECIPE with example hex values. The builder's Z1 and Z2 match the recipe exactly. Z3 diverges (builder used #E8E0D4, recipe said #FFFFFF). Z4 diverges (builder used #F5F0E8, recipe said #FEF9F5).

### Source 4: TC brief metaphor

The TC brief's "Command Post / Field Dispatch" metaphor with "clearance zones" provides the SEMANTIC direction: "hierarchy -> border-weight | clearance zones -> bg shifts >=20 RGB | dispatch compression -> spacing" (line 9).

**What the metaphor provides:** MOTIVATION for why backgrounds should darken as the reader goes "deeper into the field." The military metaphor justifies a cream-to-earthy-to-cream arc (open dispatch -> classified territory -> deployment exit).

### Source 5: Builder's own design intelligence (Report 41 Category D)

Report 41 identifies the zone background overrides as a Category D finding: "Neither the prompt alone (which suggested imperceptible values) nor Opus alone (which might not know the 15 RGB threshold) would have produced this."

**What Opus provides:** The SPECIFIC hex values for Z3 and Z4 that satisfy all constraints simultaneously:
1. Warm (R >= G >= B)
2. Perceptible (delta >= 15 from adjacent)
3. Earthy (semantic direction from metaphor)
4. Non-token (builder-derived, not from tokens.css)
5. Return arc (Z4 lighter than Z3, signaling RESOLVING)

---

## 5. WHERE DOES THE CONCEPT OF "CHROMATIC ARC" COME FROM?

### Three-layer provenance:

**Layer 1 -- Research origin:** The concept of zone differentiation through background color appears in the R3 density research and CD combination research. Multi-coherence (requiring 3+ channel shifts at boundaries) was established during CD-006 analysis. The chromatic channel is identified as "the strongest visual signal" in the conventions brief (line 123).

**Layer 2 -- Conventions brief formalization:** The conventions brief Section 4 formalizes the concept with:
- 4 semantic directions (DEEPENING, OPENING, FOCUSING, RESOLVING)
- A "Coherence Arc Planning" table (lines 162-170) with arc phases (Opening -> Building -> Climax -> Resolution)
- An explicit statement: "Multi-coherence is not uniform -- it has a narrative shape" (line 163)
- A concrete 4-zone example with hex values (lines 172-179)

**Layer 3 -- Opus native understanding:** Report 41 attributes "dark header/footer bookends" and "warm off-white backgrounds" to Category C (Opus native). The CONCEPT of varying backgrounds across page sections is deeply embedded in Opus's training data from editorial web design. The conventions brief did not teach Opus to use different backgrounds per zone -- it taught Opus HOW MUCH to vary them (>= 15 RGB) and in WHAT SEMANTIC DIRECTION (matching the declared coherence direction).

### Assessment:

The "chromatic arc" concept is a HYBRID provenance:
- **Architecture** (4 zones with directions): Conventions brief recipe + TC brief content analysis
- **Threshold** (>= 15 RGB): Experiment failure analysis
- **Direction** (warm -> earthy -> warm): Soul constraints (warmth) + TC metaphor (clearance levels) + Opus native design sense (arc shape)
- **Values** (specific hex codes): Opus creativity within constraints, partially overriding TC brief

---

## 6. WHERE DO THE DARK BOOKENDS COME FROM?

### Header (lines 189-193):
```css
header {
  background: var(--color-text);      /* #1A1A1A */
  color: var(--color-background);      /* #FEF9F5 */
  border-bottom: var(--border-medium) solid var(--color-primary);  /* 3px red */
}
```

### Provenance:

**TC brief (line 51):** "Dark Header: Command post designation + 3px red" -- explicit instruction.

**TC brief (line 52):** "Footer Mirror: Deployment summary bookend" -- explicit instruction.

**TC brief Build Recipe (line 79):** "Deploy #14 footer (dark + 3px red)"

**Conventions brief:** Section 4 example (line 176): Zone 3 uses bg #FFFFFF (white, not dark), but the CONCEPT of bookending is not explicitly specified in the conventions brief's multi-coherence section. The dark header IS in the conventions brief's accessibility skeleton (Section 13, which provides the HTML template structure).

**Mechanism catalog:** Mechanism #13 (Dark Header) and #14 (Footer Mirror) in the TC brief's mechanism list.

**Opus native:** Report 41 classifies "Dark header/footer bookends" as Category C (Opus native): "Dark header with light text is STANDARD editorial web design. Any 'build a beautiful editorial page' prompt would produce dark header/footer bookends with extremely high probability."

### Assessment:

Dark bookends are TRIPLE-SOURCED:
1. TC brief explicitly selected mechanisms #13 and #14
2. The mechanism catalog (grammar layer) documents them as named mechanisms
3. Opus natively produces dark header/footer for editorial content

The red 3px bottom border on the header is SPECIFIC to the TC brief's interpretation of the "command post designation" metaphor. The conventions brief does not specify header border color. This is metaphor-driven: the red border signals authority in the military dispatch metaphor.

---

## 7. DID THE TC BRIEF SPECIFY 4 ZONES, OR DID THE BUILDER DECIDE?

**The TC brief specified 4 zones.** This is unambiguous from `_tc-brief.md` Section 2 (Zone Architecture), which provides a complete 4-zone specification table with zone names, density levels, content assignments, pacing, layout, and semantic directions.

### Where did the TC brief get 4 zones?

The TC brief was generated by the tension-composition pipeline (TC skill), which analyzes content structure and derives zone architecture. The pipeline:

1. Read the Gas Town content (Steve Yegge extraction)
2. Identified 4 natural content groups:
   - Source + core insight ("ant colony" thesis)
   - 8 Stages + Architecture + 7 Worker Roles
   - Vibe Coding + Beads + MCP + Why Go + Warnings
   - Community + upgrades + commands + mental model
3. Mapped these to a 4-zone structure with a density arc (sparse -> moderate -> dense -> moderate)

**Is 4 zones from research, conventions brief, or Opus native?**

The conventions brief Section 4 provides a "4-zone example (DEEPENING arc)" -- suggesting 4 zones as a typical pattern. But it does not mandate 4 zones. The number of zones is a content-driven decision.

The research identified zone architecture through CD-006 analysis (which has multiple zones) and the Middle experiment (which had 4 zones).

The number 4 is likely the most natural zone count for typical content: opening, two development zones, resolution. This maps to a narrative arc (introduction -> rising action -> climax -> denouement). Both the conventions brief and Opus's training on narrative structure converge on 4 as a default.

**Assessment:** The TC brief chose 4 zones based on content analysis. The conventions brief provides 4-zone examples. Opus's narrative intelligence would tend toward 4. The number is CONVERGENT across all three sources.

---

## 8. ZONE ARCHITECTURE -- RESEARCH vs OPUS NATIVE

### What the research discovered (codified in conventions brief):
- Zone differentiation through background color (multi-coherence framework)
- Semantic directions (DEEPENING, OPENING, FOCUSING, RESOLVING)
- Perception thresholds (>= 15 RGB) making zone shifts visible
- Coherence arc shape (opening -> building -> climax -> resolution)
- Boundary CSS recipe ("at each boundary, set bg + type + space + border together")
- Named zone comments in CSS as breadcrumbs
- Density arc: sparse -> dense -> sparse rhythm
- Dark bookends (header/footer) as framing device

### What Opus natively understands (Report 41 Category C):
- Sections with different visual treatments
- Background color variation for visual variety
- Editorial dark header/footer
- Spacing variation across page
- Typography progression (display -> body -> code)
- Grid layouts for structured content
- Responsive breakpoints

### What the INTERACTION produces (Report 41 Category D):
- SPECIFIC hex values that satisfy warmth + perceptibility + metaphor simultaneously
- Military metaphor mapping zones to "clearance levels" justifying the chromatic progression
- Parametric echo (component internal padding varies by zone density)
- Builder self-correction overriding TC brief's imperceptible values
- Boundary direction comments documenting compositional intent

---

## 9. PROVENANCE SUMMARY: THE CHROMATIC ARC IN ONE TABLE

| Element | Source | Evidence | Compression Ratio |
|---------|--------|----------|-------------------|
| **4-zone count** | TC pipeline (content analysis) | `_tc-brief.md` Section 2 | N/A (content-driven) |
| **Zone names** | TC pipeline (metaphor derivation) | "Situation Brief", "Operational Readiness", etc. | N/A (content-specific) |
| **Semantic directions** | Conventions brief Section 4 | OPENING, DEEPENING, DEEPENING, RESOLVING | Research -> recipe (~5:1) |
| **15 RGB threshold** | Flagship experiment failure | `conventions-brief.md` line 57, 83 | 1:1 (binary rule) |
| **Warmth constraint** | Soul constraints (prohibitions.md) | Rules #6, #16; R >= G >= B | 1:1 (binary prohibition) |
| **Z1 = #FEF9F5** | tokens.css | `--color-background` (line 28) | 1:1 (code) |
| **Z2 = #F0EBE3** | tokens.css | `--color-border-subtle` (line 32) | 1:1 (code) |
| **Z3 = #E8E0D4** | Builder-derived | Not in any source; satisfies all constraints | N/A (generated) |
| **Z4 = #F5F0E8** | Builder-derived | Not in any source; satisfies all constraints | N/A (generated) |
| **TC brief override** | Builder + conventions brief interaction | Output lines 34-37 (explicit override comment) | Category D (interaction) |
| **Multi-coherence recipe** | Conventions brief Section 4 | "at each boundary, set 4+ channels" | ~5:1 (recipe reformatting) |
| **Dark bookends** | TC brief + Opus native | Mechanism #13/#14 + standard editorial pattern | Triple-sourced |
| **Coherence arc shape** | Conventions brief + Opus native | Opening -> Building -> Climax -> Resolution | ~10:1 (research -> recipe) |
| **3px red header border** | TC brief (metaphor-specific) | "Command post designation + 3px red" | N/A (metaphor-derived) |

---

## 10. THE CRITICAL FINDING: TC BRIEF FAILURE AND BUILDER SELF-CORRECTION

The most important finding in this provenance trace is that the TC brief's zone background values FAILED the perception threshold at every boundary (max deltas: 13, 5, 8 against a >= 15 threshold). The builder caught this and self-corrected.

**Why the TC brief failed:**
- The TC brief was written by the tension-composition pipeline, which does not have the conventions brief's perception physics
- The TC brief specified approximate deltas ("~20 RGB", "~15 RGB") but computed incorrect hex values
- The TC brief's values (#FEF9F5, #F5F0E8, #FAF5ED, #FEF9F5) were all in the sub-perceptual range

**Why the builder caught it:**
- The conventions brief Section 2 gave the builder perception physics knowledge
- The framing "These are not rules to comply with. They are the physics of human perception" enabled the builder to treat 15 RGB as a world-law, not a compliance check
- The builder computed max-channel deltas on the TC brief's values and found them failing
- The builder had Opus-level design intelligence to generate alternative values that satisfy all constraints

**What this means for the pipeline:**
1. The TC brief's role is ARCHITECTURE, not IMPLEMENTATION -- it provides zone count, names, directions, density, and content mapping. The specific hex values are suggestions that the builder should validate.
2. The conventions brief's perception thresholds are PROTECTIVE -- they enabled the builder to self-correct what would have been an imperceptible zone arc.
3. This is a Category D finding (Report 41) -- the interaction between the TC brief's intent, the conventions brief's physics, and Opus's color judgment produced the correct chromatic arc. No single source would have achieved it alone.

---

*The Gas Town chromatic arc is a 5-source hybrid: soul constraints (warmth), tokens.css (Z1/Z2 values), conventions brief (threshold + recipe), TC brief (architecture + metaphor), and Opus creativity (Z3/Z4 values + self-correction). The TC brief provided the architecture but failed on implementation values. The builder self-corrected using perception physics from the conventions brief -- the single most important instance of cross-document knowledge interaction in the entire provenance chain.*
