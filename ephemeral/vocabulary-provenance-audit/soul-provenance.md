# Soul Constraints Provenance Trace

**Agent:** soul-tracer
**Task:** #5 -- Trace soul-constraints.md: why these 3 and not others? What's the actual basis?
**Date:** 2026-03-01
**Files examined:**
- `design-system/compositional-core/identity/soul-constraints.md` (343 lines)
- `design-system/specification/provenance/SOUL-DISCOVERIES.md` (356 lines)
- `design-system/specification/provenance/stage-1-components/STAGE-HEADER.md` (240 lines)
- `design-system/specification/tokens/geometry.md` (163 lines)
- `design-system/compositional-core/identity/prohibitions.md` (420 lines)
- `design-system/compositional-core/process/lens-manifesto.md` (partial)
- All 18 validated-explorations HTML files (via grep)

---

## 1. THE CLAIM

`soul-constraints.md` claims exactly 3 CSS properties are "THE soul":

1. `border-radius: 0` -- angular geometry
2. `box-shadow: none` -- flat surfaces
3. `filter: none` (no drop-shadow) -- no shadow effects

The document states: "Every other prohibition, pattern, and token derives from or supports these 3."

---

## 2. ORIGIN STORY: WHERE DID "SOUL" COME FROM?

### The Primary Source: SOUL-DISCOVERIES.md

SOUL-DISCOVERIES.md documents **5 soul pieces**, not 3:

| # | Name | Discovery Context | Nature |
|---|------|------------------|--------|
| 1 | Sharp Edges Command Authority | globals.css audit | CSS property (border-radius: 0) |
| 2 | The Archivist Speaks in Serif | EssenceBox audit | Typography choice (Instrument Serif italic) |
| 3 | Callouts Share Family DNA | GotchaBox redesign | Structural pattern (2-zone + 4px border) |
| 4 | Shadows Lie About Depth | DesignDecision audit | CSS property (box-shadow: none) |
| 5 | Squares Signal System | PathOfTask audit | Shape semantics (squares vs circles) |

**Observation:** The original soul discovery process found 5 soul pieces, not 3. soul-constraints.md narrowed to 3 by selecting only the CSS-property-level constraints and dropping the compositional/structural ones (#2, #3, #5).

### The Narrowing: 5 -> 3

soul-constraints.md (lines 158-184) explicitly addresses "Why Only 3?" with this logic:

> "Soul Constraints (these 3): Immutable, non-negotiable, define identity at deepest level. Violating ANY ONE makes output 'not KortAI'. Visual recognition happens INSTANTLY when violated."
>
> "Other Prohibitions: Important, identity-bearing, but DERIVED from or SUPPORTING the 3 soul constraints."

The claimed test: "If you showed someone 2 pages (one compliant, one with THIS violation), could they instantly identify the violation without detailed inspection? If yes -> soul constraint. If no (requires inspection) -> important prohibition, not soul."

---

## 3. CRITICAL QUESTION: Were these 3 chosen because they're genuinely most identity-defining, or because they're easiest to verify programmatically?

### Evidence FOR "genuinely most identity-defining":

1. **All 5 original lens extractions agreed** on border-radius and box-shadow (lens-manifesto.md line 29: "All 5 Wave 1 lenses agreed on 3 soul constraints (border-radius, box-shadow, primary red)")
2. **AD validation confirmed generativity** -- border-radius: 0 was GENERATIVE, not merely restrictive. AD-004's angular spiral exists BECAUSE of the constraint (AD-F-013).
3. **The "instant recognition" test is plausible** -- rounded corners and shadows are visually obvious at a glance; serif vs sans-serif for a specific EssenceBox component is not.

### Evidence FOR "easiest to verify programmatically":

1. **All 3 are trivially grepable CSS properties.** `border-radius: 0`, `box-shadow: none`, `filter: none` can be verified with a regex in seconds. The original Soul Piece #2 (serif italic for wisdom voice) requires judgment about which elements qualify as "wisdom content." Soul Piece #3 (2-zone callout DNA) requires structural analysis. Soul Piece #5 (squares vs circles) requires semantic understanding of what constitutes a "step indicator."
2. **The "instant recognition" test is suspiciously aligned with programmatic verifiability.** What can a grep detect instantly? CSS property values. What requires inspection? Typography choices on specific component types, structural patterns, shape semantics.
3. **filter: none is essentially a sub-case of box-shadow: none.** soul-constraints.md itself acknowledges this (line 119): "Same principle as box-shadow, but often sneaks in via SVG styling or icon treatment." The document gives `filter: drop-shadow()` its own soul-constraint slot, but the principle is identical. This looks like it was split out to catch an implementation detail (CSS filter vs CSS box-shadow) rather than a genuinely distinct soul property.
4. **The lens-manifesto says "3 soul constraints" but lists a DIFFERENT third.** lens-manifesto.md line 29 says the 3 agreed-on constraints are "border-radius, box-shadow, **primary red**" -- NOT filter:none. The warm palette (#E83025 red, #FEF9F5 cream) was the original third consensus item. Somewhere between the lens extraction and soul-constraints.md, primary-red was demoted and filter:none was promoted.

### Verdict: MIXED.

border-radius:0 and box-shadow:none are genuinely identity-defining AND easy to verify. filter:none is a CSS implementation detail of box-shadow:none that got elevated to soul status, likely because it's another grepable property. The PRIMARY RED was demoted despite being a lens-extraction consensus item, likely because it's a positive assertion (use this color) rather than a prohibition (never use this property), making it a different category.

---

## 4. WHAT ELSE COULD QUALIFY AS SOUL?

### Candidate A: The Warm Palette (#FEF9F5 cream, #E83025 red)

**Case for soul status:**
- The lens-manifesto explicitly listed primary red (#E83025) as one of the 3 consensus soul constraints
- #FEF9F5 cream background appears in ALL 18 explorations (73 occurrences across 22 files)
- #E83025 red appears in ALL 18 explorations (21 occurrences in 19 files for the :root declaration alone)
- The warm palette is arguably MORE recognizable than filter:none. Show someone a KortAI page with warm cream background and red accents vs a page with cool gray background and blue accents -- the palette difference is instantly visible. Show them a page with or without `filter: drop-shadow()` on an SVG icon -- almost nobody would notice.
- Prohibitions.md makes cool grays (#F5F5F5) an explicit prohibition (#16), and pure black/white an absolute prohibition (#6), showing the system considers palette identity-critical
- SOUL-DISCOVERIES.md locks the palette in its "LOCKED DESIGN TOKENS" table alongside border-radius and box-shadow

**Case against:**
- Palette is a POSITIVE assertion ("use this color") not a PROHIBITION ("never do this"). The soul-constraints document is organized around prohibitions.
- Colors can change across themes/contexts more naturally than geometric properties.

**Assessment: STRONGER soul candidate than filter:none.** The lens-manifesto consensus originally included it. Its demotion appears to be a categorization artifact (positive vs negative rules) rather than an identity assessment.

### Candidate B: The Typography Trinity (Instrument Serif / Inter / JetBrains Mono)

**Case for soul status:**
- Instrument Serif appears 113 times across 27 exploration files
- Soul Piece #2 ("The Archivist Speaks in Serif") was one of the original 5 soul discoveries
- The typography trinity creates the "literary documentation" voice that distinguishes KortAI from generic technical docs
- Prohibitions.md makes "Instrument Serif for body text" an absolute prohibition (#7)

**Case against:**
- The soul piece is about a SPECIFIC COMPONENT (EssenceBox) using serif italic, not a universal property
- The trinity is 3 separate decisions, not one binary rule
- Font availability varies by platform

**Assessment: The display heading font (Instrument Serif) is a STRONGER identity signal than filter:none, but is naturally a vocabulary/token item rather than a prohibition-framed soul constraint.**

### Candidate C: The 940-960px Spine

**Case for soul status:**
- MEMORY.md records: "Container width 940-960px = NON-NEGOTIABLE. THE primary Phase D failure mode (4/5 pages violated it)"
- It's an absolute threshold enforced as a gate
- It defines the physical reading corridor that shapes every page

**Case against:**
- It's a SPECIFICATION value, not an identity philosophical principle
- It emerged from validation failures, not from the original soul discovery process
- It's a positive assertion ("use this width") not a prohibition

**Assessment: Functionally critical but not soul-level. It's infrastructure, not character.**

---

## 5. DO ALL EXPLORATIONS FOLLOW THE 3 CONSTRAINTS?

### border-radius: 0
**Grep result:** Zero non-zero border-radius values applied in any of the 18 explorations. The only non-zero value found was in a PROSE PARAGRAPH in OD-006 describing anti-patterns ("border-radius: 8px" mentioned as an example of what's wrong). **100% compliance.**

### box-shadow: none
**Grep result:** Every exploration declares `--box-shadow: none` in :root. Several OD explorations use `box-shadow: none` as an explicit reset (OD-006 has 4 such declarations, OD-003 has 1). Some explorations use `* { box-shadow: none !important; }` as a debug/verification tool. Zero actual shadow values applied. **100% compliance.**

### filter: drop-shadow()
**Grep result:** Zero instances of `filter: drop-shadow()` in any exploration. The only `filter:` references are in verification checklists confirming its absence. **100% compliance.**

**Note:** The perfect compliance across all 18 explorations for all 3 constraints is consistent with soul status. But the warm palette (#FEF9F5, #E83025) shows IDENTICAL 100% compliance. So compliance alone doesn't distinguish the 3 from other candidates.

---

## 6. IS filter:none A SEPARATE CONSTRAINT OR AN IMPLEMENTATION DETAIL?

### Evidence it's the same as box-shadow:none:

1. soul-constraints.md line 119: "Same principle as box-shadow" (the document itself admits this)
2. The philosophical justification is IDENTICAL: "Physical reality metaphors (light casting shadows) contradict KortAI's abstract precision"
3. The evidence citations overlap: AD-F-020 is cited for both #2 and #3
4. No exploration uses filter:drop-shadow() but also none use filter at all (except in verification checklists). There's no evidence of a distinct failure mode that filter:none prevents that box-shadow:none doesn't.

### Evidence it's legitimately separate:

1. `filter: drop-shadow()` and `box-shadow` are different CSS properties that require separate programmatic checks
2. filter:drop-shadow() can be applied to SVGs/icons where box-shadow semantically doesn't apply
3. An agent could pass a box-shadow audit while still using filter:drop-shadow()

### Verdict: filter:none is an IMPLEMENTATION DETAIL of the no-shadows principle, not a distinct soul constraint.

The actual soul principle is: **"No shadow effects of any kind."** This is ONE principle with multiple CSS manifestations (box-shadow, filter:drop-shadow, rgba pseudo-element tricks). Splitting the CSS implementations into separate soul constraints inflates the count and obscures the actual principle.

A more honest formulation would be:
1. **Angular geometry** (border-radius: 0)
2. **No shadow/depth simulation** (box-shadow: none AND filter: no drop-shadow AND no rgba pseudo-element tricks)

That's 2 soul constraints, not 3. The third slot should arguably go to something like the warm palette or the anti-physical principle itself.

---

## 7. PROVENANCE QUALITY ASSESSMENT

### Evidence chain strength:

| Constraint | Discovery origin | Stage validation | Evidence citations | Chain quality |
|-----------|-----------------|------------------|-------------------|---------------|
| border-radius: 0 | COMP-F-001, Stage 1 globals.css audit | DD/OD/AD/CD all 0 violations | geometry.md, anti-patterns/registry.md, AD-F-013 | STRONG |
| box-shadow: none | COMP-F-004, DesignDecision shadow-sm | DD/OD/AD/CD all 0 violations | geometry.md, anti-patterns/registry.md, AD-F-020 | STRONG |
| filter: none | No distinct discovery moment | DD/OD/AD/CD all 0 violations | geometry.md line 151, Identity-lens.md line 32 | WEAK -- parasitic on box-shadow |

### Evidence problems:

1. **Identity-lens.md doesn't exist.** Both soul-constraints.md and prohibitions.md cite "Identity-lens.md" at specific line numbers (line 30, 31, 32, 42, 53, 133, 149, 280, 282, 283, 285, 295, 299, 382). This file is not found anywhere in the design-system directory tree. It appears to have been an intermediate extraction artifact that was consumed during Phase C extraction but never preserved in the final file structure. This means roughly half the evidence citations in soul-constraints.md point to a non-existent file.

2. **Circular evidence.** Several evidence citations in soul-constraints.md cite other files that were themselves produced by the SAME extraction process (lens-manifesto.md, prohibitions.md). The actual PRIMARY evidence is the exploration HTML files and the original Soul Pieces discovery narrative in SOUL-DISCOVERIES.md.

3. **The lens-manifesto says "border-radius, box-shadow, primary red" but soul-constraints.md says "border-radius, box-shadow, filter:none."** This is an unexplained substitution with no documented rationale.

---

## 8. SUMMARY FINDINGS

### Finding 1: The "3 soul constraints" are really 2 principles + 1 implementation detail
- **border-radius: 0** = genuinely identity-defining, strong provenance
- **box-shadow: none** = genuinely identity-defining, strong provenance
- **filter: none** = implementation detail of box-shadow:none, admitted by the document itself

### Finding 2: The warm palette was demoted without documented rationale
- The lens-manifesto lists "primary red" as one of the 3 consensus soul items
- soul-constraints.md replaced it with filter:none
- No document explains this substitution
- The palette has EQUAL compliance across all explorations (100%)

### Finding 3: The selection criteria favor prohibitions over affirmations
- All 3 soul constraints are PROHIBITIONS (never use X)
- This systematically excludes positive identity markers (USE this color, USE this font)
- The document's own test ("instant recognition") would arguably rank warm cream/red palette HIGHER than filter:none for instant recognition

### Finding 4: filter:none is not a separate constraint from box-shadow:none
- The document says "Same principle as box-shadow"
- The evidence overlaps (same AD-F-020 finding cited for both)
- No distinct discovery moment exists for filter:none
- It's a CSS implementation catch, not a design philosophy

### Finding 5: Evidence citations are partially broken
- ~50% of citations reference Identity-lens.md which doesn't exist
- Some evidence is circular (citing other extraction artifacts)
- Primary evidence (exploration HTML files) is solid but not directly cited

### Finding 6: The ORIGINAL 5 soul pieces are more nuanced than the 3 constraints
- Soul Pieces #2 (serif voice), #3 (callout family DNA), and #5 (square shapes) were demoted to "Other Prohibitions" or vocabulary items
- The soul-constraints.md document explains this as an "instant recognition" distinction
- But this test is suspiciously aligned with "can I grep for it" rather than "is it identity-defining"

### Recommended corrections:
1. **Consolidate box-shadow and filter into one constraint:** "No shadow or depth simulation effects" (one principle, multiple CSS checks)
2. **Elevate the warm palette** to soul status or at minimum document why it was demoted from the lens-manifesto consensus
3. **Fix the Identity-lens.md citations** -- either restore the file or update citations to point to existing files
4. **Document the 5-to-3 rationale explicitly** -- the current "instant recognition" test should be examined for programmatic-verifiability bias
