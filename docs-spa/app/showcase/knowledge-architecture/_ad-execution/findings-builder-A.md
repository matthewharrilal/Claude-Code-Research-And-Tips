# Findings — Builder A (AD-001 Z-Pattern)
## Generated: 2026-02-09

---

## AD-F-001: Z-Pattern Hero Establishes Axis Geometry Before Content

**Description:** The Z-pattern hero section (4-quadrant grid using golden ratio proportions) must appear BEFORE any Q&A content to establish the axis geometry. Without this establishing shot, readers encounter Q&A cycles without understanding the spatial framework that organizes them. The hero is not decorative — it is the Z-pattern's self-declaration.

**Evidence:**
- HTML: `<div class="z-hero">` with four named grid areas (hero-primary, hero-secondary, hero-diagonal, hero-terminal)
- CSS: `grid-template-columns: 1.618fr 1fr; grid-template-rows: 1.618fr 1fr;` — golden ratio proportions per EXT-AXIS-Z-001
- The hero maps directly to the Gutenberg diagram: Primary Optical (top-left) contains the definition, Strong Fallow (top-right) contains key properties, Weak Fallow (bottom-left) contains metadata, Terminal (bottom-right) contains the value proposition
- R4-055 (establishing shots) and R4-083 (hero Z-pattern) are the research sources

**Classification:** Class A — No deviation. Implements research directly.

---

## AD-F-002: Z-PULSE Equivalence — Z-Pattern Traversal Naturally Creates PULSE

**Description:** Z-pattern traversal and PULSE rhythm are not two separate phenomena that need to be coordinated — they are the SAME phenomenon viewed from different perspectives. Each Z-sweep cycle IS one PULSE beat: the question (sparse zone, narrow width, heavy serif type) is the inhale, and the answer (dense zone, full width, light sans type) is the exhale. This means Z-pattern axis geometry does not need to be "paired with" PULSE — it IS PULSE expressed spatially.

**Evidence:**
- Q&A alternation creates sparse→dense→sparse→dense rhythm (PULSE by definition per DD-F-001)
- Width variation (60% Q → 100% A) creates narrow→wide→narrow→wide rhythm (TIDAL by definition per DD-F-005)
- Typography weight shift (Instrument Serif 600 → Inter 400) creates slow→fast→slow→fast velocity (EXT-AXIS-Z-002)
- The Z-diagonal (the gap between question end and answer start) IS the PULSE transition point
- Essence callout in Zone 2 explicitly states this equivalence: "The Z-sweep and the PULSE beat are the same phenomenon viewed from different angles."

**Classification:** Class A — No deviation. Confirms research hypothesis.

**Implication for 3-way unification:** This finding supports the hypothesis that axis geometry SERVES (rather than being independent of) org-density. Z-pattern is not a separate layout overlaid on Conversational Q&A — it is the spatial expression of how Q&A naturally reads.

---

## AD-F-003: Micro-Z Grid Validated at Component Scale (DD-F-006 Fractal)

**Description:** The micro-Z pattern (code+explanation side-by-side in a 2-column grid within answer sections) successfully implements DD-F-006 fractal self-similarity at the component scale. Within each micro-Z, the code block occupies the "primary optical" position (top-left = dense), while the explanation occupies the "strong fallow" position (top-right = sparse). A second code+explanation pair below completes the micro-Z cycle.

**Evidence:**
- CSS: `.micro-z { display: grid; grid-template-areas: "code-primary explain-primary" "code-secondary explain-secondary"; grid-template-columns: 1fr 1fr; }`
- Used in Zone 3 (CSS Implementation chapter) for the grid-template-areas code example paired with its explanation
- The micro-Z follows the same Z-path as the page-level Z: code(top-left) → explanation(top-right) → code(bottom-left) → synthesis(bottom-right)
- Responsive collapse at 768px stacks code above explanation, preserving source order (AD Convention Section 16.1)

**Classification:** Class A — No deviation. Direct implementation of EXT-AXIS-Z-005.

**Open question:** The micro-Z works well for code+explanation pairs but may create cognitive overhead for non-code content. Further testing needed to determine if micro-Z should be limited to code examples only, or if it can extend to other content types (table+description, diagram+annotation).

---

## AD-F-004: 3-Way Unification Validated — Axis, Organization, and Density Are Not Independent

**Description:** The central hypothesis of AD-001 is confirmed: Z-Pattern axis geometry SERVES the Conversational org-pattern's PULSE+TIDAL density. These are not three independent dimensions that happen to be combined — they are three names for one underlying structure. The evidence is structural, not coincidental.

**Evidence:**
1. **Z-diagonal = conversational turn** (EXT-AXIS-Z-004): The gap between question and answer (32px+) IS the transition relevance place in conversation analysis. The Z-diagonal IS the conversational turn. They are geometrically identical.
2. **Width variation = TIDAL = Z-asymmetry** (OD-F-001 + DD-F-005 + R2-1.1): 60% question width / 100% answer width creates TIDAL (width signals density) AND Z-pattern asymmetry (narrow left column creates visual step). One CSS property (`max-width: 60%`) serves both functions simultaneously.
3. **PULSE = Z-cycle** (DD-F-001 + R4-038): The alternating Q(sparse)→A(dense) rhythm is both PULSE by definition and one Z-sweep cycle by geometry. Each Z-cycle IS one PULSE beat.
4. **Typography velocity = Z-position = PULSE tempo** (EXT-AXIS-Z-002 + R2-5.1): Heavy serif at Z-entry (slow reading = sparse absorption), light sans at Z-traverse (fast scanning = dense consumption). Typography weight serves Z-position, velocity control, AND density signaling simultaneously.

**Classification:** Class A — No deviation. This is the PRIMARY finding of AD-001.

**Implication:** If axis geometry is not independent of organization and density, then the AD phase is not adding a NEW dimension — it is expressing the SAME dimension spatially. This has consequences for CD (Combination) phase: combinations may be fewer than expected because some "combinations" are actually different views of the same phenomenon.

---

## DEVIATION LOG

No deviations from convention were required. All CSS in the axis-layer uses :root tokens exclusively. All borders follow the 3-category system. Zero instances of 2px in axis-layer CSS. All backgrounds are fully opaque. No rgba with alpha < 1.0. No box-shadow, no border-radius > 0, no filter: drop-shadow.

---

## CITATION COUNTS

| Category | Required | Actual | Status |
|----------|----------|--------|--------|
| R-4 findings cited | >= 15 | 31 | PASS |
| R-2 findings cited | >= 5 | 10 | PASS |
| EXT-AXIS-Z-* cited | >= 5 | 5 | PASS |
| OD-F findings | (informational) | 5 | N/A |
| DD-F findings | (informational) | 5 | N/A |

**Total citations in HTML:** 56 (31 R-4 + 10 R-2 + 5 EXT + 5 OD-F + 5 DD-F)

---

## SOUL COMPLIANCE VERIFICATION

- [x] Started from AD-SOUL-TEMPLATE.html
- [x] `<style id="locked-layer">` is UNCHANGED from template (diff = 0)
- [x] `border-radius: 0` on ALL elements — no rounded corners
- [x] `box-shadow: none` on ALL elements — no shadows
- [x] No `filter: drop-shadow()` in axis-layer CSS
- [x] 0 instances of `2px` in axis-layer CSS
- [x] All backgrounds opaque (no rgba with alpha < 1.0)
- [x] Font trio: Instrument Serif (display), Inter (body), JetBrains Mono (code)
- [x] Version badge = "v1 enriched" in header meta line
- [x] RAR block present with all 11 fields in HTML comment

---

*Builder-A findings complete | 2026-02-09*
