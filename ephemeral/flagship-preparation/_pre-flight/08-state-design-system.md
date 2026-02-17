# Design System State Assessment: 4 Core Files vs 7 BLOCKING Gaps

**Author:** state-assessor-1
**Date:** 2026-02-16
**Purpose:** Document what exists in the 4 design system files, compare against the 7 BLOCKING enrichment gaps from `02-enrichment-specifications.md`, and assess overlap with prior Enrichment Execution Team work.

---

## File 1: prohibitions.md

**Path:** `design-system/compositional-core/identity/prohibitions.md`
**Total Lines:** 353
**Key Sections/Headings:**
- What This Document IS (lines 11-16)
- ABSOLUTE PROHIBITIONS (No Exceptions, EVER) -- 8 prohibitions (#1-#8) (lines 19-129)
  - #1 border-radius > 0, #2 box-shadow, #3 drop-shadow, #4 semi-transparent backgrounds, #5 gradients, #6 pure black/white, #7 Instrument Serif for body, #8 rounded corners
- CONDITIONAL PROHIBITIONS (Documented Exceptions ONLY) -- 12 prohibitions (#9-#20) (lines 131-321)
  - #9 2px borders, #10 accent borders < 4px, #11 decorative elements, #12 grid breaking, #13 vertical table borders, #14 hover lift, #15 traffic-light adjacency, #16 cool grays, #17 non-italic h3, #18 same-density stacking, #19 no unjustified design choices, #20 no patterns without tension
- Meta-Prohibitions (Process-Level) -- 2 prohibitions (#19-#20) (lines 293-320)
- Summary Statistics (lines 323-337)
- How to Use This Document (lines 341-348)

**Content related to needed enrichments:**
- **Spatial confidence:** Not addressed directly. No prohibition against excessive whitespace or void accumulation.
- **Void prevention:** NOT PRESENT. No maximum whitespace rule exists.
- **Restraint:** NOT PRESENT. No guidance on limiting mechanism concentration.
- **Transitions:** NOT PRESENT directly, though #18 (same-density stacking) touches rhythm.
- **Content density:** NOT PRESENT. No minimum content per zone.
- **Whitespace limits:** NOT PRESENT. Only indirect reference in #15 (traffic-light adjacency exception: "Separate with whitespace (48px+ spacing)").
- **Spacing limits:** NOT PRESENT. No maximum spacing values referenced.
- **Content-form fit:** NOT PRESENT. No prohibition against over-engineering simple content.
- **Front-loaded visual weight:** NOT PRESENT. No prohibition against concentrating visual interest.

---

## File 2: mechanism-catalog.md

**Path:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Total Lines:** 1,093
**Key Sections/Headings:**
- What Is a MECHANISM? (lines 16-29) -- Name Test + Transfer Test
- Extraction Method (lines 32-49)
- Mechanism Categories (5 Property Families) (lines 52-89) -- Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation
- Tier differentiation (Middle vs Ceiling selection logic) (lines 64-89)
- Provenance and Family Resemblance (lines 93-126)
- The Mechanisms (18 Total) (lines 129-766) -- #1 through #18 with CSS, examples, application modes
- Rejected Non-Mechanisms (lines 768-801)
- WHAT ARE SCALES? (lines 804-867) -- 5 named scales, fractal coherence, tier-to-scale mapping
- Mechanism Summary Table (lines 870-893)
- Usage Guidance (Mechanism Application) (lines 902-940) -- Selection flow + combination rules
- Extraction Validation (lines 944-997)
- Novel Mechanisms (lines 983-997)
- Mechanisms by Complexity Tier (lines 1000-1024)
- Mechanism Deployment Recommendations (lines 1028-1053)
- Research Application Record (lines 1071-1092)

**Content related to needed enrichments:**
- **Spatial confidence:** No explicit section. Mechanisms #4 (Spacing Compression) and #5 (Dense/Sparse Alternation) touch spatial rhythm but not spatial confidence as a principle.
- **Void prevention:** NOT PRESENT. No guidance about avoiding void patterns.
- **Restraint:** NOT PRESENT. No "when NOT to deploy" guidance. The selection flow (lines 906-927) tells agents WHEN to use mechanisms. No counterpart for WHEN NOT TO.
- **Transitions:** PARTIALLY PRESENT. The "Combination Rules" section (lines 929-940) lists compatible/incompatible mechanism combinations but does NOT document HOW to transition between zones. The separate `compositional-rules.md` file has Rule C2 (lines 287-301) with 3 transition types (SMOOTH, BRIDGE, BREATHING) referencing AD-F-025, but this is NOT in mechanism-catalog.md itself.
- **Content density:** NOT PRESENT in this file. Mechanism #5 (Dense/Sparse Alternation) describes the pattern but not minimum content per zone.
- **Whitespace limits:** NOT PRESENT. No maximum spacing guidance.
- **Spacing limits:** NOT PRESENT. No cap on spacing values.
- **Content-form fit:** NOT PRESENT. No guidance on matching form complexity to content volume.
- **Application modes (from Enrichment Execution Team):** PRESENT. Mechanisms #1 and #7 have "Application Modes" sections and "Middle-tier validation" paragraphs added during enrichment execution. #1 has PROGRESSIVE MODE and DISCRETE MODE (lines 166-178). #7 has Semantic Mappings table (lines 388-399) and Middle-tier validation (line 399).

---

## File 3: tokens.css

**Path:** `design-system/compositional-core/vocabulary/tokens.css`
**Total Lines:** 174
**Key Sections/Headings:**
- SOUL CONSTRAINTS (lines 17-20) -- border-radius: 0, box-shadow: none
- COLOR PALETTE (lines 24-61) -- Primary (6 values), Accent (5 values), Background (8 values), Zone (3 values), Text Hierarchy (5 values)
- TYPOGRAPHY (lines 64-89) -- Font Families (3 fonts), Type Scale (10 sizes + 6 CD-006 aliases)
- SPACING SCALE (lines 92-113) -- Core Scale (12 values), Gestalt Semantic Aliases (3 aliases)
- BORDER WIDTHS (lines 118-125) -- 4px structural, 3px accent, 1px micro
- SYNTAX HIGHLIGHTING (lines 128-137) -- 7 syntax colors
- TRANSITIONS (lines 140-142) -- 1 standard timing
- SOLID OFFSET (lines 145-150) -- offset-x/y/color
- Token Extraction Notes (lines 153-173)

**Content related to needed enrichments:**
- **Spacing limits/maximums:** NOT PRESENT. The spacing scale goes up to `--space-24: 96px` (line 107) but there is NO explicit maximum. No `--space-max-section` or `--space-max-zone` token exists.
- **Void prevention:** NOT PRESENT. No spacing cap or comment about maximum values.
- **Spatial confidence:** NOT PRESENT.
- **Content density:** NOT PRESENT.
- **Transitions:** One transition token exists: `--transition-standard: 0.3s ease` (line 142). This is a CSS timing function, unrelated to zone transitions.

---

## File 4: semantic-rules.md

**Path:** `design-system/compositional-core/guidelines/semantic-rules.md`
**Total Lines:** 380
**Key Sections/Headings:**
- Gap 1: Info vs Context vs Note Callout Selection (lines 9-52) -- boundary rule for callout type
- Gap 2: Inline vs Block Code Selection (lines 56-96) -- line count/character threshold
- Gap 3: Table Styling -- Zebra-Striped vs Clean (lines 99-143) -- default clean, zebra hypothetical
- Gap 4: Breathing-Room Zone Triggers (lines 146-192) -- sparse/dense criteria, trigger thresholds
- Gap 5: Callout Semantic Differentiation (lines 195-249) -- 5 colors, 8 CSS classes
- Research Citations (lines 252-278)
- Semantic Value Framework (lines 282-379) -- 3-Question Test, tier-specific justification, PA-SEM integration

**Content related to needed enrichments:**
- **Spatial confidence:** NOT PRESENT directly. Gap 4 (Breathing-Room Zone Triggers, lines 146-192) addresses WHEN to create breathing zones and sparse/dense zones but NOT minimum content per zone.
- **Content density minimum per zone:** PARTIALLY PRESENT. Gap 4 has "Sparse zone criteria" (lines 178-181) and "Dense zone criteria" (lines 183-186) with padding ranges, but these describe SPACING criteria, not CONTENT VOLUME criteria. There is no "minimum 3 paragraphs per zone" rule.
- **Whitespace limits:** NOT PRESENT. Gap 4 mentions maximum spacing (80px for sparse) as a RECOMMENDATION but not as a PROHIBITION.
- **Content-form fit:** NOT PRESENT. No guidance on matching form complexity to content volume.
- **Transitions:** NOT PRESENT in this file.
- **Restraint:** NOT PRESENT.
- **Front-loaded visual weight:** NOT PRESENT.

---

## Gap-by-Gap Assessment: 7 BLOCKING Gaps vs Current State

### B1: Maximum Whitespace Prohibition
**Target file:** prohibitions.md
**Status: ABSENT**

No prohibition against excessive whitespace or void patterns exists anywhere in prohibitions.md. The closest related content is:
- Prohibition #18 (same-density stacking) addresses RHYTHM but not whitespace VOLUME
- Prohibition #15 (traffic-light adjacency) mentions "whitespace" but only as a SEPARATION technique

The concept of "maximum viewport-height of contentless space" does not appear in any form. The 30% content coverage threshold, the consecutive-positions test, and the breathing zone exception are entirely new content.

**Prior enrichment overlap:** None. The Enrichment Execution Team worked on SKILL files (tension-composition, perceptual-auditing) and mechanism-catalog.md (application modes/impact profiles), not on prohibitions.md.

---

### A1: Transition Grammar Between Zones
**Target file:** mechanism-catalog.md
**Status: PARTIALLY PRESENT (in a different file, not in mechanism-catalog.md)**

mechanism-catalog.md has NO transition grammar section. However, the separate file `compositional-rules.md` (same grammar/ directory) contains Rule C2 (lines 287-301) with three transition types:
- SMOOTH transition (compatible reading flows, 32-48px, no background shift)
- BRIDGE transition (incompatible flows, 64-96px, optional background shift)
- BREATHING transition (chapter boundaries, 96px+, breathing background)

These are conceptually related to A1's three types (HARD CUT, SPACING SHIFT, CHECKPOINT) but differ:
- compositional-rules.md types are about PATTERN transitions (Z-Pattern -> F-Pattern)
- A1 types are about ZONE transitions (tutorial zone -> reference zone)
- compositional-rules.md has no CHECKPOINT type (the successful element from the ceiling experiment)
- compositional-rules.md has no CSS examples
- compositional-rules.md has no binary compliance test ("list all boundaries, each must have a type")
- compositional-rules.md does not reference max spacing of 96px or the ceiling experiment void failure

The case study CD-006-pilot-migration.md also references "Transition Grammar (AD-F-025)" as a key mechanism with types BREATHING, SMOOTH, BRIDGE.

**Conclusion:** The CONCEPT of transition grammar exists in the codebase (compositional-rules.md Rule C2 and CD-006 case study), but the specific content specified in A1 is NOT present in mechanism-catalog.md. The A1 enrichment adds: (a) zone-level scope (not just pattern-level), (b) CSS code blocks, (c) binary compliance test, (d) CHECKPOINT type, (e) ceiling experiment evidence. These are new.

**Prior enrichment overlap:** None. The Enrichment Execution Team added impact profiles, application modes, and zone mappings to mechanism-catalog.md, but not transition grammar.

---

### A2: Restraint Principle
**Target file:** mechanism-catalog.md
**Status: ABSENT**

No "when NOT to deploy" guidance exists in mechanism-catalog.md. The file has:
- A selection flow chart (lines 906-927) for WHEN to use mechanisms
- Combination rules (lines 929-940) for compatible/incompatible pairings
- Tier deployment counts (e.g., "Middle: 8-10 mechanisms") in the CLAUDE.md files

But NONE of these address:
- Maximum mechanisms per viewport (the "4 per viewport" cap)
- Distribution requirement (every third of the page must have 2+ mechanisms)
- Rejection documentation (document mechanisms considered and rejected)
- The restraint ratio concept

The closest related content is in compositional-rules.md Rule D1 (lines 183-186): "5+ components per viewport = density ceiling violation" -- but this is about COMPONENTS, not MECHANISMS, and it's in a different file.

**Prior enrichment overlap:** None.

---

### A3: Content Density Minimum Per Zone
**Target file:** semantic-rules.md
**Status: PARTIALLY PRESENT (related content but different scope)**

semantic-rules.md Gap 4 (lines 146-192) addresses breathing-room zone triggers with:
- Sparse zone criteria: "Low information per vertical pixel (<=2 paragraphs per viewport)" and padding 40-80px
- Dense zone criteria: "High information per vertical pixel (4+ paragraphs)" and padding 16-32px
- Breathing-room zone criteria: "position between major sections" and "content length <=3 sentences"

However, this describes SPACING behavior for zones, not CONTENT VOLUME MINIMUMS. Gap 4 says "sparse zones have low information" but does NOT say "you need at least 3 paragraphs before you can create a zone." The A3 enrichment adds:
- Minimum content per zone type table (3+ paragraphs OR 2+ components for dedicated zone)
- Maximum consecutive empty viewport height rule (30% coverage)
- Zone count ceiling by word count (< 1,500 words = max 2 zones, etc.)
- "Zones exist to SERVE content, not to DEMONSTRATE architecture" principle

**Prior enrichment overlap:** None directly. The perceptual-auditing skill additions mention "40% horizontal whitespace" as a conceptual bias example, but this is a PA question context, not a design system rule.

---

### B3: Front-Loaded Visual Weight Prohibition
**Target file:** prohibitions.md
**Status: ABSENT**

No prohibition against concentrating visual interest in the first third exists. Prohibition #18 (same-density stacking) addresses ADJACENT density monotony but not PAGE-LEVEL visual weight distribution. There is no concept of "designed moments" or "scroll depth distribution" anywhere in prohibitions.md.

The mechanism-catalog.md has the SCALES section (lines 804-867) which discusses page-level patterns, and the density patterns (CRESCENDO, PULSE, WAVE) in compositional-rules.md, but none of these create a PROHIBITION against front-loading.

**Prior enrichment overlap:** None.

---

### C3: Maximum Spacing Token
**Target file:** tokens.css
**Status: ABSENT**

tokens.css has a spacing scale up to `--space-24: 96px` (line 107) and gestalt aliases:
```css
--space-within: var(--space-2);   /* 8px */
--space-between: var(--space-8);  /* 32px */
--space-chapter: var(--space-16); /* 64px */
```

But there is NO maximum spacing token (`--space-max-section` or `--space-max-zone`). The file documents what spacing values ARE AVAILABLE but not what the CEILING is. The `--space-24: 96px` comment says "Sparse ocean" -- it's a named value, not labeled as a maximum.

The compositional-rules.md mentions "BREATHING transition: Maximum spacing (96px+)" (line 301) with a PLUS sign, suggesting values ABOVE 96px are permitted. The A1 enrichment caps this at 96px.

**Prior enrichment overlap:** None. The Enrichment Execution Team did not modify tokens.css.

---

### D3: Content-Form Fit Guidance
**Target file:** semantic-rules.md
**Status: ABSENT**

No content-form fit guidance exists in semantic-rules.md. The file addresses:
- WHICH callout to use (Gaps 1, 5)
- WHEN to use inline vs block code (Gap 2)
- WHETHER to use zebra-striped tables (Gap 3)
- WHEN to create breathing zones (Gap 4)
- HOW to justify varying CSS values (Semantic Value Framework)

But NONE of these address: "Does this section have enough content to justify this form treatment?" The concept of form following content volume, minimum content for bento grids (4+ items), minimum content for progressive disclosure (3+ phases), or the "simplest form" inverse test are entirely absent.

**Prior enrichment overlap:** None.

---

## Summary Table: Gap Status

| Gap ID | Gap | Target File | Status | Detail |
|--------|-----|-------------|--------|--------|
| B1 | Maximum whitespace prohibition | prohibitions.md | **ABSENT** | No void prevention rule exists anywhere |
| A1 | Transition grammar between zones | mechanism-catalog.md | **PARTIALLY PRESENT** (wrong file) | compositional-rules.md has Rule C2 with 3 types, but scoped to pattern transitions, no CSS, no binary test, no CHECKPOINT type |
| A2 | Restraint principle | mechanism-catalog.md | **ABSENT** | No "when NOT to deploy" guidance exists |
| A3 | Content density minimum per zone | semantic-rules.md | **PARTIALLY PRESENT** (different scope) | Gap 4 has spacing criteria for zones but not content volume minimums |
| B3 | Front-loaded visual weight | prohibitions.md | **ABSENT** | No visual weight distribution prohibition |
| C3 | Maximum spacing token | tokens.css | **ABSENT** | No spacing ceiling token exists |
| D3 | Content-form fit | semantic-rules.md | **ABSENT** | No form-follows-content-volume guidance |

**Fully ABSENT:** 4 gaps (B1, A2, B3, C3)
**PARTIALLY PRESENT:** 2 gaps (A1, A3)
**PRESENT:** 0 gaps

---

## Enrichment Execution Team Overlap Assessment

The earlier Enrichment Execution Team (6 agents, 20 enrichments) worked on:

1. **tension-composition SKILL.md** (1,583 -> 1,878 lines, +295): Added impact profiles, application modes, zone mappings, slicing strategy, isolation matrix
2. **mechanism-catalog.md** (added to 18/18 mechanisms): Impact profiles ("HIGH/MEDIUM/LOW"), application modes (PROGRESSIVE/DISCRETE), semantic zone mappings
3. **perceptual-auditing SKILL.md** (736 -> 774 lines, +38): Added PA question enhancements
4. **2 new protocol docs** in skill-enrichments/: slicing strategy + isolation matrix (1,165 lines)

**Overlap with 7 BLOCKING gaps:** ZERO. The Enrichment Execution Team addressed:
- Mechanism APPLICATION guidance (how to use each mechanism) -- not RESTRAINT (when NOT to use)
- Impact PROFILES (perceptual effectiveness ratings) -- not DISTRIBUTION rules (4 per viewport max)
- Zone MAPPING recommendations (which zone color for which content type) -- not CONTENT DENSITY minimums
- Perceptual audit QUESTIONS -- not PROHIBITIONS

The two work streams are complementary, not overlapping. The Enrichment Execution Team made mechanisms RICHER to deploy; the 7 BLOCKING gaps make deployment SAFER by preventing concentration, void, and over-engineering.

---

## Implications for Enrichment Execution

All 7 BLOCKING gaps need to be applied. None are already addressed. The 2 partially present gaps (A1, A3) contain related but insufficient content -- the new enrichment text adds scope, specificity, and binary compliance tests that don't exist.

**Recommended insertion order** (from 02-enrichment-specifications.md):
1. B1 (prohibitions.md) -- root prohibition
2. C3 (tokens.css) -- token-level prevention, 8 lines
3. A3 (semantic-rules.md) -- content-level prevention
4. D3 (semantic-rules.md) -- content-form fit
5. A1 (mechanism-catalog.md) -- structural prevention
6. A2 (mechanism-catalog.md) -- distribution
7. B3 (prohibitions.md) -- arc-level prevention

**Total lines to add:** ~328 across 4 files.

---

**END STATE ASSESSMENT**
