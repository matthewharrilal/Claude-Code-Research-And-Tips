# Specification Cross-Reference Audit

**Auditor:** specification-cross-ref agent
**Date:** 2026-03-01
**Task:** Identify insights in specification/ files that are MISSING from the 7 new vocabulary files

**Files audited:**
- specification/tokens/colors.md
- specification/tokens/typography.md
- specification/tokens/spacing.md
- specification/tokens/geometry.md
- specification/patterns/PATTERN-INDEX.md
- specification/patterns/density-patterns.md
- specification/patterns/organizational-patterns.md
- specification/patterns/axis-patterns.md
- specification/patterns/combination-rules.md
- specification/anti-patterns/registry.md
- specification/components/OVERVIEW.md
- specification/BACKBONE.md (first 200 lines)

**New vocabulary files cross-referenced:**
1. identity.md
2. vocabulary.md
3. mechanisms.md
4. grammar.md
5. components.md
6. tokens.css
7. components.css

---

## CATEGORY A: Token Value Discrepancies

### A-1: Background Zone Token Divergence (colors.md vs tokens.css)
**Source:** specification/tokens/colors.md lines 96-105
**Impact:** HIGH -- builder agents may use wrong values

specification/tokens/colors.md defines background zone tokens as:
```
bg-page:    #FAFAFA
bg-card:    #FFFFFF
bg-warm:    #FEF9F5
bg-dark:    #1E1E1E
bg-info:    #F5F8FA
bg-tip:     #F5FAF5
bg-gotcha:  #FEF6F5
bg-summary: #FEF9F0
```

tokens.css defines zone backgrounds as:
```
--color-zone-sparse:    #FEF9F5
--color-zone-dense:     #FFFFFF
--color-zone-breathing: #FAF5ED
--color-zone-bedrock:   #1A1A1A
```

**Discrepancies:**
- `bg-page: #FAFAFA` in spec vs no direct equivalent in tokens.css (`#FEF9F5` is the page bg)
- `bg-dark: #1E1E1E` in spec vs `--color-zone-bedrock: #1A1A1A` in tokens.css -- 4 hex points difference
- `bg-info: #F5F8FA` in spec vs `--bg-callout-info: #F5F9FE` in tokens.css -- divergent blues
- `bg-tip: #F5FAF5` in spec vs `--bg-callout-tip: #F2F9F4` in tokens.css -- divergent greens
- `bg-summary: #FEF9F0` not present in tokens.css at all (closest: `--bg-callout-challenge: #FFFBF2`)
- `--color-zone-breathing: #FAF5ED` in tokens.css has NO equivalent in spec colors.md

**Recommendation:** vocabulary.md should document which source is canonical for callout backgrounds. The tokens.css callout backgrounds appear to be from CD-006 explorations, while the spec values appear to be from the T1 synthesis. ONE set must be authoritative.

### A-2: Text Hierarchy Discrepancy (colors.md vs tokens.css)
**Source:** specification/tokens/colors.md lines 109-117
**Impact:** MEDIUM -- vocabulary.md says "Two-color text hierarchy" but spec defines FIVE levels

specification/tokens/colors.md defines:
```
text-primary:   #1A1A1A
text-secondary: #444444
text-tertiary:  #888888
text-muted:     #AAAAAA
text-inverse:   #FFFFFF
```

tokens.css defines only:
```
--color-text:           #1A1A1A
--color-text-secondary: #666666
```

vocabulary.md line 11 explicitly states: "Two-color text hierarchy. Primary text (#1A1A1A) and secondary text (#666666). That's it. The system rejected the pipeline's constructed gray ramp (#444444/#888888/#AAAAAA)"

**Status:** vocabulary.md correctly documents the design DECISION to reject the gray ramp. However, the spec colors.md still documents the 5-level ramp. This is not a gap in the vocabulary files -- it's a divergence between spec and vocabulary that should be noted for spec cleanup. No change needed to vocabulary files.

### A-3: Callout Background for Challenge (OVERVIEW.md vs tokens.css)
**Source:** specification/components/OVERVIEW.md line 88
**Impact:** LOW

OVERVIEW.md lists Challenge Callout background as `#F8F5FF` (purple tint).
tokens.css lists `--bg-callout-challenge: #FFFBF2` (warm/amber tint).
components.css maps `.callout--challenge` to `--bg-callout-challenge`.

These are different hues entirely (purple vs warm amber). The tokens.css value `#FFFBF2` doesn't match either the purple semantic or the OVERVIEW spec.

**Recommendation:** Investigate which value is actually used in CD explorations and ensure tokens.css is correct. This should be noted in vocabulary.md's palette section if the OVERVIEW value is wrong.

### A-4: Code Block Dark Background (OVERVIEW.md vs tokens.css)
**Source:** specification/components/OVERVIEW.md line 93
**Impact:** LOW

OVERVIEW.md lists Code Snippet dark background as `#1E1E1E`.
tokens.css lists `--color-zone-bedrock: #1A1A1A`.
components.css uses `background: var(--color-text, #1A1A1A)` for code blocks.

`#1E1E1E` vs `#1A1A1A` -- these are different values. The vocabulary files consistently use `#1A1A1A`, which matches the exploration evidence. The spec OVERVIEW appears to have the older T1 value.

---

## CATEGORY B: Missing Pattern/Grammar Guidance

### B-1: Density Pattern CSS Implementations Missing from grammar.md
**Source:** specification/patterns/density-patterns.md lines 127-237
**Impact:** MEDIUM -- grammar.md has rhythm rules but not the specific density pattern CSS

density-patterns.md provides concrete CSS for 6 density patterns:
- PULSE: `.pulse-inhale { padding: 24px; }` / `.pulse-exhale { padding: 64-80px; }`
- CRESCENDO: 5-step progressive padding (80px -> 64px -> 48px -> 24px -> 16px)
- BOOKENDS: Dense intro (24px) -> Sparse action (64px) -> Dense summary (24px)
- WAVE: No fixed pattern, respond to content

grammar.md's "Rhythm (INHALE/EXHALE)" section (lines 16-21) covers the PRINCIPLE but not the specific implementations. mechanisms.md's "Transition Grammar" table (lines 70-78) covers zone boundaries but not density pattern CSS.

**Recommendation:** grammar.md could benefit from a brief "Density Pattern Quick Reference" section showing the canonical padding values for PULSE, CRESCENDO, and BOOKENDS. Currently a builder would need to look up density-patterns.md from specification/ which is not part of the operational vocabulary.

### B-2: Callout Asymmetric Padding Not in components.css
**Source:** specification/tokens/spacing.md lines 131-143
**Impact:** MEDIUM -- actionable CSS detail missing

spacing.md specifies asymmetric callout padding:
```css
.callout {
  padding-top: 24px;
  padding-right: 20px;
  padding-bottom: 28px;  /* Asymmetric! */
  padding-left: 20px;
}
```

components.css line 16 uses shorthand:
```css
.callout {
  padding: var(--space-6, 24px) var(--space-5, 20px);
}
```

This shorthand expands to `24px 20px 24px 20px` -- SYMMETRIC top/bottom. The spec calls for 28px bottom padding (asymmetric) to create a "visual settling effect."

**Recommendation:** Either update components.css to use the asymmetric padding from the spec, or document in vocabulary.md that the asymmetric padding was intentionally simplified. This is a concrete builder-facing CSS value that could affect visual quality.

### B-3: Callout Label Size Discrepancy
**Source:** specification/tokens/typography.md lines 140-148
**Impact:** MEDIUM

typography.md specifies callout labels as `10px`:
```css
.callout__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

components.css line 22 uses `var(--text-xs, 12px)`:
```css
.callout__label {
  font-size: var(--text-xs, 12px);
}
```

tokens.css defines `--text-xs: 0.75rem;` which is 12px, not 10px.

The spec says 10px. The implementation uses 12px. The spec OVERVIEW.md line 88 corroborates "10-11px uppercase." The vocabulary files use the token value (12px) which is larger than what the spec intended.

**Recommendation:** vocabulary.md's typography section should note this decision. If 12px is the canonical value (matching the type scale), then the spec is outdated. If 10px is correct (matching visual intent), then tokens.css `--text-xs` is being misused for callout labels and a separate `--text-callout-label: 10px` token may be needed.

### B-4: h3 Must Be Italic Rule Missing from grammar.md
**Source:** specification/tokens/typography.md lines 124-129
**Impact:** MEDIUM -- this is a typography convention not captured in grammar

typography.md specifies:
```css
h3 {
  font-family: var(--font-display);
  font-style: italic;
}
```

This rule is in the anti-patterns registry (registry.md line 207-218: "Non-Italic h3" anti-pattern) but NOT in any of the 7 new vocabulary files.

grammar.md has no typography rules. mechanisms.md mentions Typographic Scale Jumping (#11) but says nothing about h3 italic. identity.md mentions "Typography Trinity" but doesn't specify per-heading rules. vocabulary.md's typography section doesn't mention h3 italic.

**Recommendation:** This belongs either in grammar.md (as a compositional rule about heading styling) or in vocabulary.md (as a typography decision). It's a concrete, actionable convention that builders need.

### B-5: Size Jump = Zone Boundary Rule Missing
**Source:** specification/tokens/typography.md lines 151-153
**Impact:** LOW-MEDIUM

typography.md specifies:
```
- Jump of 4px+ = zone boundary
- Jump of 2px = within-zone variation
```

This is a useful compositional rule for builders deciding how to use the type scale to signal zone boundaries. Not captured in grammar.md or vocabulary.md.

**Recommendation:** Add to grammar.md's "Zones" section or vocabulary.md's typography section.

### B-6: Component-Specific Typography Not Captured
**Source:** specification/tokens/typography.md lines 156-167
**Impact:** LOW-MEDIUM

typography.md has a complete table mapping components to font families:
```
| Component       | Title Font | Body Font | Special              |
|-----------------|-----------|-----------|----------------------|
| Code Snippet    | Sans      | Mono      | --                   |
| Callouts (most) | --        | Sans      | 10px uppercase label |
| Essence Callout | --        | Serif It. | Quote treatment      |
| File Tree       | --        | Mono      | ASCII connectors     |
| Decision Matrix | Sans      | Sans      | Open grid            |
| Core Abstraction| Serif     | Serif+Mono| Framed               |
| Reasoning       | Serif     | Sans      | Equal-weight columns |
```

components.md lists components but doesn't include font assignments. components.css implements these but they're scattered across individual component rules.

**Recommendation:** components.md could include a "Typography by Component" column in its tables to make this cross-reference explicit for builders.

---

## CATEGORY C: Missing Anti-Pattern Guidance

### C-1: 2px Border Epidemic Missing from identity.md Refusals
**Source:** specification/anti-patterns/registry.md lines 282-307
**Impact:** HIGH -- this is the #1 systemic anti-pattern found in OD audits

The 2px border epidemic (OD-F-AP-001) is documented extensively in registry.md: "108 CSS declarations, 1000+ computed instances across OD-001 through OD-006."

identity.md line 63 mentions it briefly: "No 2px borders -- structurally ambiguous (exception: OD-004 confidence encoding)"

However, the REGISTRY provides much more detail: WHY 2px is problematic (neither bold accent nor subtle separator), WHAT to use instead (3px minimum for structural, 1px for subtle), and the AD-F-014 validation that border-weight gradient deliberately SKIPS 2px.

**Recommendation:** The identity.md coverage is adequate for the refusal. But grammar.md could benefit from a "Border Weight Selection" section that explains WHEN to use each weight, since the 3-weight system (4px/3px/1px) is described in vocabulary.md but the selection logic is not in grammar.md.

### C-2: Semi-Transparent Background Anti-Pattern (OD-AP-003)
**Source:** specification/anti-patterns/registry.md lines 329-355
**Impact:** MEDIUM

registry.md documents: "rgba(0,0,0,0.04) or any opacity < 1.0 on background colors, offset pseudo-elements, or inline code backgrounds... Found in EVERY wave of re-enrichment."

identity.md line 56 covers this: "No semi-transparent backgrounds on visual elements -- opacity must be 1"

But the spec provides important detail: this is the MOST RECURRING violation, found in every build wave, because "embedded rgba backgrounds survive multiple review layers." This systemic nature is not captured in identity.md.

**Recommendation:** Consider adding to identity.md's "Absolute" refusals section a note that rgba backgrounds are the most common accidental violation, to heighten builder awareness.

### C-3: Traffic-Light Rule Not in grammar.md
**Source:** specification/anti-patterns/registry.md lines 95-109, combination-rules.md lines 172-181
**Impact:** MEDIUM

Both the anti-patterns registry and combination-rules.md specify: "NEVER place Tip Callout (green) adjacent to Gotcha Callout (red)."

grammar.md's anti-patterns section (lines 72-77) lists 4 anti-patterns but does NOT include the traffic-light rule. identity.md mentions it nowhere. vocabulary.md mentions it nowhere.

**Recommendation:** Add to grammar.md anti-patterns: "Traffic-light adjacency -- green tip callout next to red gotcha callout"

---

## CATEGORY D: Missing Combination/Composition Guidance

### D-1: Component Properties Model (Velocity/Temperature/Weight) Entirely Missing
**Source:** specification/components/OVERVIEW.md lines 57-73, 168-185
**Impact:** HIGH -- this is a complete compositional system not captured in any vocabulary file

OVERVIEW.md defines a 3-property model for every component:
- **Velocity:** SLOW (user pauses), MEDIUM (user scans), FAST (user glances)
- **Temperature:** Cold, Neutral, Warm, Reverent, Deliberate
- **Weight:** Light, Medium, Heavy

This model drives ALL 4 combination rules in combination-rules.md. None of the 7 vocabulary files capture this model.

grammar.md mentions "No same-density stacking" (line 75) but doesn't explain the velocity/temperature/weight framework that makes this rule actionable. components.md lists components but has no velocity/temperature/weight columns.

**Recommendation:** This is the single largest gap. Either:
- Add velocity/temperature/weight columns to components.md's tables, OR
- Add a "Component Combination Properties" section to grammar.md that references the properties and the 4 combination rules

### D-2: Four Combination Rules Not in grammar.md
**Source:** specification/patterns/combination-rules.md lines 88-127
**Impact:** HIGH -- grammar.md is about how things combine, yet misses these rules

combination-rules.md defines 4 rules:
1. Never stack same-velocity
2. Temperature flow (warm -> neutral -> cold, not warm -> cold)
3. Weight balance (intersperse heavy with light)
4. Semantic proximity spacing

grammar.md's "Density" section (lines 33-38) touches on component density but doesn't capture velocity sequencing, temperature flow, or weight balance.

**Recommendation:** grammar.md should have a "Component Sequencing" section with the 4 combination rules. These are compositional grammar rules by definition.

### D-3: Recommended Component Sequences Not Captured
**Source:** specification/patterns/combination-rules.md lines 130-168
**Impact:** MEDIUM -- useful builder recipes

combination-rules.md provides 4 recommended sequences:
- Opening: Hero -> Overview Callout -> Navigation
- Teaching: Essence -> Core Abstraction -> Code Snippet -> Tip
- Decision: Decision Matrix -> Reasoning -> Gotcha
- Closing: Challenge -> Task -> Essence

These are valuable builder-facing recipes not captured in any vocabulary file.

**Recommendation:** Add to grammar.md as "Recommended Sequences" or to components.md as usage patterns.

### D-4: Max Components Per Viewport Not Consolidated
**Source:** specification/patterns/combination-rules.md lines 186-193
**Impact:** LOW-MEDIUM

combination-rules.md specifies:
- Callouts: max 2 per viewport
- Code Snippets: max 2 per viewport
- Decision structures: max 1 per viewport
- Heavy components total: max 3 per viewport

grammar.md line 36 says "Maximum 2 callouts per viewport" but misses the other three limits.

**Recommendation:** Add full viewport maximums to grammar.md's "Density" section.

---

## CATEGORY E: Missing Structural/Pattern Guidance

### E-1: OD-to-Density Pairing Table Not in grammar.md
**Source:** specification/patterns/PATTERN-INDEX.md lines 139-149
**Impact:** MEDIUM

PATTERN-INDEX.md provides the validated OD-to-density pairings:
- Conversational -> PULSE + TIDAL
- Narrative -> CRESCENDO
- Task-Based -> ISLANDS + BOOKENDS
- Confidence -> GEOLOGICAL + CRESCENDO
- Spatial -> WAVE + ISLANDS
- Creative -> ALL (FRACTAL primary)

grammar.md mentions density patterns exist (lines 37, 44-46) but doesn't provide this mapping. A builder choosing an organizational approach has no vocabulary-file guidance on which density pattern follows.

**Recommendation:** Add a "Pattern Pairing" table to grammar.md or mechanisms.md's existing section.

### E-2: Axis-to-Organization-to-Density Triple Mapping Not Captured
**Source:** specification/patterns/axis-patterns.md lines 636-644
**Impact:** MEDIUM

axis-patterns.md provides the complete triple mapping (axis + org + density + mechanism type). This is the key operational insight from the AD stage. Not captured in any vocabulary file.

**Recommendation:** mechanisms.md or grammar.md could include a "Triple Equivalence Reference" table showing the validated pairings.

### E-3: Transition Grammar (AD-F-025) 5x5 Matrix Not in mechanisms.md
**Source:** specification/patterns/axis-patterns.md lines 501-511
**Impact:** LOW-MEDIUM

mechanisms.md has a "Transition Grammar" section (lines 69-78) with 3 transition types (SMOOTH/BRIDGE/BREATHING). But the spec provides the full 5x5 matrix: 4 Smooth, 10 Bridge, 6 Breathing. Notably: "Choreography is the universal bridge. Spiral is the most isolated pattern."

**Recommendation:** The 3-type summary in mechanisms.md is sufficient for most builders. The full matrix is specialized knowledge. Consider adding a one-line note: "Choreography bridges all patterns; Spiral requires 48px+ breathing at every transition."

### E-4: 6 Density Dimensions Not Captured
**Source:** specification/patterns/density-patterns.md lines 233-245
**Impact:** LOW

density-patterns.md describes 6 density dimensions beyond spatial:
- Temporal (information over scroll)
- Depth (Z-axis layering)
- Semantic (meaning per area)
- Cognitive (processing required)
- Interaction (clickables per viewport)
- Spatial (elements per area)

None of the vocabulary files mention these dimensions. grammar.md talks about density as purely spatial (padding/spacing).

**Recommendation:** This is deep research context, not operational builder guidance. No change needed unless builders need to think about non-spatial density.

### E-5: Density Debt Rule with Specific Values
**Source:** specification/patterns/density-patterns.md lines 250-252
**Impact:** LOW-MEDIUM

density-patterns.md specifies: "After dense sections, add recovery whitespace (64-80px)." With AD validation: "Spiral transitions require 48px+ breathing."

grammar.md line 18 says "48px+ spacing or background shift to breathing zone" which is close but uses 48px threshold, not the 64-80px from the spec.

**Recommendation:** Harmonize the numbers. grammar.md says 48px+, density-patterns.md says 64-80px. These may refer to different contexts (section breathing vs dense recovery).

---

## CATEGORY F: Zone Separation and Geometry

### F-1: Zone Separation Methods Table Missing
**Source:** specification/tokens/geometry.md lines 141-152
**Impact:** LOW-MEDIUM

geometry.md provides a zone separation methods table:
```
| Method                    | KortAI Preferred? | When Used           |
|---------------------------|-------------------|---------------------|
| Whitespace only           | YES               | Primary method      |
| Background color change   | YES               | Semantic zones      |
| Left border accent        | YES               | Callouts            |
| Full border (1px)         | Sometimes         | Tables, frames      |
| Horizontal rule           | RARELY            | Explicit breaks     |
| Drop shadow               | NEVER             |                     |
| Rounded corners           | NEVER             |                     |
```

This is a useful builder decision guide not captured in vocabulary.md or grammar.md. grammar.md's "Zones" section discusses zone backgrounds but not the full preference hierarchy for separation methods.

**Recommendation:** Add to grammar.md's "Zones" section as "Zone Separation Preference" -- whitespace first, then background change, then borders.

### F-2: Container Style Meanings Table Missing
**Source:** specification/tokens/geometry.md lines 155-163
**Impact:** LOW

geometry.md maps container styles to semantic meanings:
```
| Style                | Zone Type        | Meaning            |
|----------------------|------------------|--------------------|
| No visible container | Content-defined  | "Content speaks"   |
| Left accent border   | Flagged zone     | "Semantic category"|
| Full 1px border      | Enclosed zone    | "Bounded content"  |
| Dark background      | Inverted zone    | "Focus content"    |
| Tinted background    | Semantic zone    | "Type-specific"    |
```

Not captured in any vocabulary file. Useful for builder decision-making.

**Recommendation:** Consider adding to vocabulary.md's "Borders" section or grammar.md.

---

## CATEGORY G: Component Detail Gaps

### G-1: Essence Callout Background Inconsistency
**Source:** specification/components/OVERVIEW.md line 87
**Impact:** LOW

OVERVIEW.md lists Essence background as `#FEF9F5` (same as page background).
tokens.css lists `--bg-callout-essence: #F8F5FE` (purple tint).
components.css maps `.callout--essence` to `--bg-callout-essence`.

The spec value would make Essence callouts invisible against the page background. tokens.css appears correct (purple tint for the essence/amber semantic).

### G-2: Component Character Names Not in components.md
**Source:** specification/components/OVERVIEW.md lines 61-73
**Impact:** LOW

OVERVIEW.md assigns character names to all 11 components (e.g., "Precise Transcriptionist" for Code Snippet, "Archivist of Axioms" for Essence Callout). These are not in components.md.

**Recommendation:** This is flavor/personality documentation. The character names may be more relevant to the identity layer than the component inventory. No action unless the system values them for builder guidance.

### G-3: Component Soul Scores Not in components.md
**Source:** specification/components/OVERVIEW.md lines 61-73
**Impact:** LOW

OVERVIEW.md lists soul compliance scores (81%-90%) for all 11 components. components.md doesn't include these.

**Recommendation:** These scores are from the initial Stage 1 audit and may be outdated. Not recommended for inclusion in operational vocabulary.

---

## PRIORITY SUMMARY

### BLOCKING (should fix before using vocabulary files for builds)

1. **D-1: Component Velocity/Temperature/Weight model** -- Complete compositional system with no representation in vocabulary files
2. **D-2: Four combination rules** -- Core grammar rules missing from grammar.md

### HIGH PRIORITY (significant builder-facing gaps)

3. **A-1: Background zone token divergence** -- Multiple hex values differ between spec and tokens.css
4. **C-1: 2px border epidemic detail** -- #1 systemic anti-pattern needs grammar-level guidance
5. **B-4: h3 italic rule** -- Concrete typography convention missing from all 7 files

### MEDIUM PRIORITY (useful additions)

6. **B-1: Density pattern CSS implementations** -- Canonical padding values for PULSE/CRESCENDO/BOOKENDS
7. **B-2: Callout asymmetric padding** -- Spec says 28px bottom, implementation uses 24px
8. **B-3: Callout label 10px vs 12px** -- Spec vs token value mismatch
9. **E-1: OD-to-density pairing table** -- Validated pattern pairings not in grammar
10. **D-3: Recommended component sequences** -- Builder recipes
11. **C-3: Traffic-light rule** -- Not in grammar.md anti-patterns
12. **D-4: Full viewport maximums** -- Only callouts mentioned, 3 other limits missing
13. **F-1: Zone separation preference hierarchy** -- Useful builder decision guide
14. **B-5: Size jump = zone boundary** -- Typography compositional rule

### LOW PRIORITY (nice to have)

15. **E-2: Triple mapping table** -- Deep reference
16. **B-6: Component-specific typography table** -- Scattered in CSS already
17. **E-3: Full transition matrix** -- Specialized knowledge
18. **F-2: Container style meanings** -- Useful but not essential
19. **E-4: 6 density dimensions** -- Research context
20. **E-5: Density debt number harmonization** -- 48px vs 64-80px

---

## SUMMARY STATISTICS

- **Total findings:** 23
- **Token value discrepancies:** 4 (Category A)
- **Missing grammar/pattern guidance:** 6 (Category B)
- **Missing anti-pattern guidance:** 3 (Category C)
- **Missing combination/composition guidance:** 4 (Category D)
- **Missing structural/pattern guidance:** 5 (Category E)
- **Missing zone/geometry guidance:** 2 (Category F)
- **Component detail gaps:** 3 (Category G)

**Blocking:** 2 findings (D-1, D-2)
**High priority:** 3 findings (A-1, C-1, B-4)
**Medium priority:** 9 findings
**Low priority:** 9 findings
