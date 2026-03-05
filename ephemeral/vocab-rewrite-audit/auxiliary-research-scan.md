# Auxiliary Research Scan — Cross-Reference Against 7 New Vocabulary Files

**Agent:** dd-od-cd-research-scan (Task #40)
**Date:** 2026-03-01
**Scope:** All auxiliary markdown files in specification/, compositional-core/guidelines/, compositional-core/validation/, compositional-core/case-studies/, compositional-core/skill-enrichments/, compositional-core/process/
**Cross-referenced against:** identity.md, vocabulary.md, mechanisms.md, grammar.md, components.md, tokens.css, components.css

---

## Summary

**Total findings: 31**
- HIGH priority (builder-impacting, missing from all 7 files): 14
- MEDIUM priority (useful enrichment, partially covered): 11
- LOW priority (niche or already implied): 6

---

## HIGH PRIORITY FINDINGS (14)

### H-01: Component Combination Rules — Velocity/Temperature/Weight System ENTIRELY ABSENT

**Source:** `specification/patterns/combination-rules.md` (lines 1-193)
**What is missing:** The entire component behavioral properties system:
- 11 components each have velocity (SLOW/MEDIUM/FAST), temperature (Cold/Neutral/Warm/Reverent/Deliberate), weight (Light/Medium/Heavy)
- 4 combination rules: same-velocity adjacency ban, temperature flow, weight balance, semantic proximity spacing
- Traffic Light Rule: never place green-accent adjacent to red-accent
- Max components per viewport: 3-4 (desktop), 2-3 (mobile)
- Recommended sequences: Opening (Info+Tip), Teaching (Code+Reasoning), Decision (Matrix+Challenge), Closing (Essence+Tip)

**Which file should contain it:** `components.md` (the component inventory file)
**Proposed addition (append to components.md):**
```
## Component Behavioral Properties

| Component | Velocity | Temperature | Weight |
|-----------|----------|-------------|--------|
| Code Snippet | SLOW | Neutral | Heavy |
| Info Callout | FAST | Neutral | Light |
| Tip Callout | FAST | Warm | Light |
| Gotcha Callout | FAST | Cold | Medium |
| Essence Callout | SLOW | Warm | Medium |
| Challenge Callout | FAST | Warm | Medium |
| File Tree | MEDIUM | Neutral | Heavy |
| Decision Matrix | MEDIUM | Neutral | Heavy |
| Core Abstraction | SLOW | Reverent | Heavy |
| Task Component | FAST | Utilitarian | Medium |
| Reasoning | SLOW | Deliberate | Heavy |

Rules: Never stack same-velocity. Max 3-4 components per viewport.
Traffic Light: Never place green-accent adjacent to red-accent.
```

---

### H-02: Text Color Hierarchy Has 4 Levels, Not 2

**Source:** `specification/tokens/colors.md` (lines 44-65)
**What is missing:** vocabulary.md states a "Two-color text hierarchy" (#1A1A1A and #666666), but the specification defines 4 levels:
- Primary: #1A1A1A (headings, body)
- Secondary: #444444 (supporting text, less prominent)
- Tertiary: #888888 (metadata, timestamps)
- Muted: #AAAAAA (disabled states, placeholders)

**Which file should contain it:** `vocabulary.md` (design decisions section on palette)
**Proposed addition:**
```
Text hierarchy: 4 levels — #1A1A1A (primary), #444444 (secondary), #888888 (tertiary/metadata), #AAAAAA (muted/disabled). Two-color shorthand refers to the most commonly used pair.
```

---

### H-03: Missing Token — space-24 (96px)

**Source:** `specification/tokens/spacing.md` (line ~85)
**What is missing:** The spacing specification defines `space-24: 96px` as "Sparse ocean — maximum breathing room." This value does NOT appear in tokens.css, which jumps from space-20 (80px) to nothing.

**Which file should contain it:** `tokens.css`
**Proposed addition (after --space-20):**
```css
--space-24: 96px;
```

---

### H-04: h3 MUST Be Italic Rule

**Source:** `specification/tokens/typography.md` (lines 82-95)
**What is missing:** h3 headings MUST use `font-style: italic` (Instrument Serif italic). This is described as an identity-level rule in the typography specification but appears in NONE of the 7 new files.

**Which file should contain it:** `identity.md` (under identity signatures or vocabulary limitations) AND `components.css` (in base heading styles)
**Proposed addition to identity.md:**
```
h3 headings: ALWAYS italic (Instrument Serif italic) — distinguishes subsection from section hierarchy.
```

---

### H-05: Asymmetric Callout Padding

**Source:** `specification/tokens/spacing.md` (line ~60) + `specification/components/OVERVIEW.md` (line 146-148)
**What is missing:** Callout padding is explicitly ASYMMETRIC: `24px top / 20px right / 28px bottom / 20px left`. The specification and OVERVIEW both confirm this. However, `components.css` uses `padding: 20px 24px` (symmetric) for `.callout`.

**Which file should contain it:** `components.css` (the callout base style)
**Proposed fix in components.css:**
```css
/* Current: padding: 20px 24px; */
/* Should be: padding: 24px 20px 28px 20px; */
```

---

### H-06: Content Density Floor Rules

**Source:** `compositional-core/guidelines/semantic-rules.md` (lines ~270-320)
**What is missing:** Three binary rules that prevent whitespace voids:
1. Every zone must contain >= 2 content elements (heading + paragraph minimum)
2. No consecutive empty viewport (if scrolling reveals no content for 100vh, zone is too sparse)
3. Zone count ceiling: max 7 zones per page (more = noise, not richness)

**Which file should contain it:** `grammar.md` (compositional rules section)
**Proposed addition:**
```
Content Density Floor: Every zone >= 2 content elements. No empty viewport on scroll. Max 7 zones per page.
```

---

### H-07: Six Density Dimensions Not Captured

**Source:** `specification/patterns/density-patterns.md` (lines 1-80)
**What is missing:** The density specification defines 6 dimensions of density, but grammar.md only covers spatial density. The 6 dimensions are:
1. Temporal (reading speed, pause frequency)
2. Depth (information layers per area)
3. Semantic (meaning per word count)
4. Cognitive (mental model complexity)
5. Interaction (decision points per scroll)
6. Spatial (visual elements per viewport)

**Which file should contain it:** `grammar.md` (density section, currently lines 27-30)
**Proposed addition:**
```
Density operates on 6 dimensions: Spatial (visual elements), Temporal (reading speed), Depth (info layers), Semantic (meaning/word), Cognitive (mental model complexity), Interaction (decisions/scroll). Spatial is the primary design lever; others inform content arrangement.
```

---

### H-08: Density Debt Rule (Recovery After Dense Sections)

**Source:** `specification/patterns/density-patterns.md` (lines ~180-200)
**What is missing:** After any dense section, a breathing space of 64-80px is REQUIRED. This is called "Density Debt" — you must pay back after pushing density high. Grammar.md says "max 3 consecutive dense" but does not specify the recovery requirement.

**Which file should contain it:** `grammar.md` (rhythm rules section)
**Proposed addition:**
```
Density Debt: After 2-3 consecutive dense elements, insert 64-80px breathing space. Dense sections accumulate perceptual debt that must be repaid.
```

---

### H-09: Size Jump = Zone Boundary Typography Rule

**Source:** `specification/tokens/typography.md` (lines 110-125)
**What is missing:** A 4px+ font-size jump signals a zone boundary. A 2px jump signals within-zone hierarchy. This is a critical builder rule for creating perceptible typography zones but appears nowhere in the 7 new files.

**Which file should contain it:** `grammar.md` (typography or zones section)
**Proposed addition:**
```
Typography zone boundaries: >= 4px font-size jump = zone boundary. 2px jump = within-zone hierarchy. This makes zone transitions perceptible.
```

---

### H-10: Callout Label Typography Specification

**Source:** `specification/tokens/typography.md` (lines 96-108) + `specification/components/OVERVIEW.md` (lines 150-156)
**What is missing:** Callout labels have specific typography: 10-11px, font-weight 600, uppercase, letter-spacing 0.1em. The OVERVIEW confirms "10px uppercase mono." While components.css has `.callout-label` styles, the identity.md and vocabulary.md files do not document this as part of the 2-zone DNA pattern.

**Which file should contain it:** Already in `components.css` — but `mechanisms.md` should reference it when describing 2-zone DNA.
**Proposed addition to mechanisms.md (under 2-Zone DNA):**
```
Label zone: 10-11px uppercase mono, letter-spacing 0.1em, weight 600. Content zone: body font at standard size.
```

---

### H-11: Essence Callout Uses Serif Body

**Source:** `specification/tokens/typography.md` (line ~100) + `specification/components/OVERVIEW.md` (line 87)
**What is missing:** The Essence callout is the ONLY callout using serif body text (Instrument Serif italic). All other callouts use sans (Inter). This is a critical identity distinction documented in OVERVIEW.md but not explicit in components.md or identity.md.

**Which file should contain it:** `components.md` (component inventory)
**Proposed addition:**
```
Essence callout: ONLY callout with serif italic body (Instrument Serif). All others use Inter sans-serif.
```

---

### H-12: Background Zone Color Values Discrepancy

**Source:** `specification/tokens/colors.md` (lines 77-90)
**What is missing:** The specification tokens define `bg-page: #FAFAFA` and zone backgrounds differently than tokens.css:
- tokens.css: `--color-zone-sparse: #FEF9F5`
- specification: `bg-page: #FAFAFA`
These are different colors (warm cream vs neutral gray). While the specification may be from an older stage, builders need clarity on which is canonical.

**Which file should contain it:** `vocabulary.md` (design decisions — should note which is canonical)
**Proposed addition:**
```
Background canonical value: #FEF9F5 (warm cream) per tokens.css. Specification references to #FAFAFA reflect an older neutral palette before warm refinement.
```

---

### H-13: Organizational Pattern Selection Guide

**Source:** `specification/patterns/organizational-patterns.md` (lines 400-505)
**What is missing:** The specification has a detailed content-type to organizational pattern mapping that would be extremely valuable for builders:
- CONVERSATIONAL: Q&A, FAQ, interview-style
- NARRATIVE: Story-driven, chronological, journey
- TASK-BASED: How-to, tutorial, step-by-step
- CONFIDENCE-BASED: Variable certainty, research findings
- SPATIAL: Reference, catalog, API docs
- CREATIVE/EMERGENT: Experimental, exploration, essay

None of this mapping exists in the 7 new files. Builders have no guidance on WHICH organizational approach to use for WHAT content.

**Which file should contain it:** `grammar.md` (or a new section in mechanisms.md under organizational patterns)
**Proposed addition:**
```
Organizational pattern selection: CONVERSATIONAL (Q&A content), NARRATIVE (chronological/journey), TASK-BASED (tutorials), CONFIDENCE-BASED (variable certainty), SPATIAL (reference/catalog), CREATIVE (exploration/essay). Content type determines pattern; metaphor refines it.
```

---

### H-14: Transition Grammar 5x5 Matrix

**Source:** `specification/patterns/axis-patterns.md` (lines 400-500)
**What is missing:** The axis patterns specification contains a 5x5 matrix defining transition types between all axis pattern pairs (4 Smooth, 10 Bridge, 6 Breathing). Mechanisms.md mentions 3 transition types (SMOOTH, BRIDGE, BREATHING) but does NOT provide the full matrix showing which transitions apply between which patterns.

**Which file should contain it:** `mechanisms.md` (transition grammar section, currently lines 68-78)
**Proposed addition:**
```
Transition selection: Spiral exits always use BREATHING (most isolated). Z-Pattern and F-Pattern use SMOOTH between each other. Bento uses BRIDGE (structural boundary). See axis-patterns.md for full 5x5 matrix.
```

---

## MEDIUM PRIORITY FINDINGS (11)

### M-01: BOOKENDS and WAVE Density Patterns

**Source:** `specification/patterns/density-patterns.md` (lines ~100-160)
**What is missing:** Two density patterns mentioned in the specification but not in mechanisms.md:
- BOOKENDS: Dense openings + dense closings sandwich sparse middle
- WAVE: Regular alternation without crescendo (equal dense/sparse throughout)

**Which file should contain it:** `mechanisms.md` (Structure category, alongside existing patterns like PULSE, CRESCENDO, ISLANDS)
**Proposed:** Consider whether these are distinct enough to warrant separate mechanism entries or are variants of existing patterns.

---

### M-02: The Bootstrap Test Anti-Pattern

**Source:** `specification/anti-patterns/registry.md` (lines ~250-270)
**What is missing:** The "Bootstrap Test" — if a component or layout could exist in a Bootstrap project without modification, it fails the KortAI identity test. This is a memorable, actionable heuristic not in identity.md's refusals section.

**Which file should contain it:** `identity.md` (under vocabulary limitations or refusals)
**Proposed addition:**
```
The Bootstrap Test: If a layout could exist in Bootstrap without modification, it lacks KortAI identity. Not a prohibition — a diagnostic.
```

---

### M-03: Code Wall Anti-Pattern

**Source:** `specification/anti-patterns/registry.md` (lines ~140-160)
**What is missing:** "Code Wall" — a code block exceeding 30 lines without any inline explanation or callout. Listed in the anti-pattern registry but not in grammar.md's anti-patterns section.

**Which file should contain it:** `grammar.md` (anti-patterns section, line 64+)
**Proposed addition:**
```
Code Wall: Code blocks > 30 lines without inline explanation or adjacent callout. Break with reasoning or explanation.
```

---

### M-04: Grid Column Selection Criteria

**Source:** `compositional-core/guidelines/usage-criteria.md` (lines ~120-160)
**What is missing:** Specific criteria for choosing grid columns:
- 2 columns: min cell width 280px, comparison/contrast content
- 3 columns: min cell width 200px, categories/options content
- 4 columns: min cell width 160px, metrics/stats only

**Which file should contain it:** `grammar.md` (could fit in responsive or density rules)
**Proposed addition:**
```
Grid columns: 2-col (min 280px cell, comparison), 3-col (min 200px cell, categories), 4-col (min 160px cell, stats only). Never force grid if cells would be < minimum width.
```

---

### M-05: Footer Content Criteria

**Source:** `compositional-core/guidelines/usage-criteria.md` (lines ~200-230)
**What is missing:** When and what to include in page footer. The usage-criteria file specifies footer requirements that builders need but grammar.md and components.md are silent on.

**Which file should contain it:** `components.md` (alongside page header)
**Proposed addition:**
```
Page footer: Include when page has > 3 sections. Content: page metadata, related links, build date. Skip for short single-section pages.
```

---

### M-06: Responsive Typography Reduction Ratio

**Source:** `compositional-core/guidelines/responsive-strategy.md` (lines ~80-110)
**What is missing:** At 768px breakpoint, typography reduces by ~19% (e.g., 32px becomes 26px). This specific ratio is not in grammar.md's responsive section.

**Which file should contain it:** `grammar.md` (responsive section, line 53+)
**Proposed addition:**
```
Typography at 768px: ~19% reduction from desktop values (e.g., 32px -> 26px, 24px -> 20px). Maintain relative hierarchy.
```

---

### M-07: Dark Mode is HYPOTHETICAL

**Source:** `compositional-core/guidelines/responsive-strategy.md` (lines ~150-170)
**What is missing:** Dark mode has ZERO validated implementations. It is purely hypothetical. Builders should not invest time in dark mode unless specifically asked. None of the 7 new files mention this.

**Which file should contain it:** `vocabulary.md` (as a note under palette) or `grammar.md` (responsive section)
**Proposed addition:**
```
Dark mode: Hypothetical (zero validated implementations). Do not build dark mode unless explicitly requested.
```

---

### M-08: Semi-Transparent Backgrounds as Systemic Audit Gap

**Source:** `specification/anti-patterns/registry.md` (lines ~200-230, OD-AP-003)
**What is missing:** Semi-transparent backgrounds (rgba with alpha < 1) are flagged as a systemic audit gap. The anti-patterns registry notes this is an under-detected violation pattern. Identity.md mentions "opacity: 1 on containers" but doesn't call out rgba backgrounds specifically.

**Which file should contain it:** `identity.md` (under the opacity prohibition, as clarification)
**Proposed addition:**
```
Opacity 1 includes: no rgba() backgrounds with alpha < 1 on containers, no semi-transparent overlays. Use solid hex colors from palette.
```

---

### M-09: Nesting vs Flattening Criteria

**Source:** `compositional-core/guidelines/usage-criteria.md` (lines ~250-280)
**What is missing:** When to nest components vs flatten them:
- Max 3 nesting levels observed in validated explorations
- Nesting appropriate when content has genuine containment hierarchy
- Flatten when nesting is purely visual (no semantic container relationship)

**Which file should contain it:** `grammar.md` (nesting rules, line 17)
**Proposed addition:** grammar.md already says "max 2 levels" — but usage-criteria says "max 3 observed." Reconcile: grammar.md's 2-level limit is a BUILD constraint; 3-level is what was observed in showcases. Keep grammar.md at 2.

---

### M-10: Inline vs Block Code Threshold

**Source:** `compositional-core/guidelines/semantic-rules.md` (lines ~100-120)
**What is missing:** When to use inline code vs code block: inline for <= 1 line AND <= 50 characters. Beyond that, use a code block component.

**Which file should contain it:** `grammar.md` or `components.md`
**Proposed addition:**
```
Inline code: <= 1 line AND <= 50 chars. Beyond either threshold, use code block component.
```

---

### M-11: "Organization IS Density" Meta-Insight (OD-F-005)

**Source:** `specification/patterns/organizational-patterns.md` (lines ~20-40)
**What is missing:** Finding OD-F-005 states "Organization IS Density" — choosing an organizational pattern simultaneously determines density distribution. This is a key architectural insight: you don't pick density AND organization separately; organization implies density.

**Which file should contain it:** `grammar.md` (density section)
**Proposed addition:**
```
Organization IS Density (OD-F-005): Choosing organizational pattern determines density distribution. Don't select both independently.
```

---

## LOW PRIORITY FINDINGS (6)

### L-01: 10-Second Test

**Source:** `specification/patterns/density-patterns.md` (lines ~220-240)
**What is missing:** "10-Second Test" — scroll through any page section in 10 seconds. If you can't tell dense from sparse zones, density differentiation has failed. Useful audit heuristic but already implicitly covered by PA questions.

**Which file:** Consider for `grammar.md` as a self-check.

---

### L-02: Max 1-2 Callouts Per Viewport

**Source:** `specification/patterns/density-patterns.md` (lines ~200-210)
**What is missing:** Maximum 1-2 callouts visible in any single viewport to prevent "callout fatigue."

**Which file:** `grammar.md` (density rules). Partially covered by existing "max 3 consecutive dense" rule.

---

### L-03: Breathing-Room Zone Triggers

**Source:** `compositional-core/guidelines/semantic-rules.md` (lines ~140-160)
**What is missing:** Specific content patterns that should trigger breathing-room zones (block quotes, pullquotes, transition text between major topics).

**Which file:** `grammar.md` (zones section).

---

### L-04: Component-Specific Typography Table

**Source:** `specification/tokens/typography.md` (lines 130-165)
**What is missing:** A table mapping each component to its exact typography values (font, size, weight, line-height). Most of this is already in components.css, but the specification has a cleaner reference table.

**Which file:** Already covered in `components.css` implementations. Low priority as duplicate.

---

### L-05: Zone Separation Methods Table

**Source:** `specification/tokens/geometry.md` (lines 70-120)
**What is missing:** A table showing 5 zone separation methods (spacing only, border rule, background change, combined, bedrock inversion) with their appropriate contexts.

**Which file:** `mechanisms.md` (transition grammar section) or `grammar.md` (zones). Partially covered by existing transition types.

---

### L-06: Semantic Value Framework (3-Question Test)

**Source:** `compositional-core/guidelines/semantic-rules.md` (lines ~350-400)
**What is missing:** A 3-question test for every CSS value: (1) Is this perceptible? (2) Does it encode meaning? (3) Could it be removed without losing information? If all 3 are NO, remove the CSS value.

**Which file:** Consider for `grammar.md` as a self-check. Already partially addressed by the "no sub-perceptual CSS" guardrail.

---

## CROSS-FILE DISCREPANCIES REQUIRING RESOLUTION

### D-01: Text Color Levels (2 vs 4)
- `vocabulary.md`: "Two-color text hierarchy (#1A1A1A, #666666)"
- `specification/tokens/colors.md`: 4 levels (#1A1A1A, #444444, #888888, #AAAAAA)
- `tokens.css`: Only #1A1A1A and #666666 defined as variables
- **Resolution needed:** Either add #444444 and #888888 to tokens.css, or document why 2 is sufficient.

### D-02: Callout Backgrounds
- `specification/components/OVERVIEW.md`: Info bg = #F5F8FA, Tip bg = #F5FAF5
- `tokens.css`: --bg-callout-info = #F5F9FE, --bg-callout-tip = #F2F9F4
- **Resolution needed:** Different hex values. Determine which is canonical.

### D-03: Callout Padding
- `specification/components/OVERVIEW.md`: 24px 20px 28px 20px (asymmetric)
- `components.css`: padding: 20px 24px (symmetric)
- **Resolution needed:** Which is correct? Asymmetric matches specification.

---

## FILES SCANNED

### Specification Directory
- specification/patterns/density-patterns.md
- specification/patterns/organizational-patterns.md
- specification/patterns/axis-patterns.md
- specification/patterns/combination-rules.md
- specification/patterns/PATTERN-INDEX.md
- specification/anti-patterns/registry.md
- specification/tokens/colors.md
- specification/tokens/typography.md
- specification/tokens/spacing.md
- specification/tokens/geometry.md
- specification/components/OVERVIEW.md

### Compositional-Core Directories
- guidelines/semantic-rules.md
- guidelines/usage-criteria.md
- guidelines/responsive-strategy.md
- validation/anti-gravity-compliance.md
- validation/gap-check.md
- validation/convergence-check.md
- skill-enrichments/tension-composition-additions.md
- skill-enrichments/perceptual-auditing-additions.md
- process/lens-manifesto.md
- process/construction-narrative.md
- case-studies/README.md
- case-studies/ANTI-PRESCRIPTION-TEMPLATE.md
- case-studies/DD-003-islands.md
- case-studies/DD-006-fractal.md
- case-studies/OD-004-confidence.md
- case-studies/CD-001-reasoning-inside-code.md
- case-studies/CD-006-pilot-migration.md

### 7 New Files (Reference Set)
- compositional-core/identity/identity.md
- compositional-core/identity/vocabulary.md
- compositional-core/grammar/mechanisms.md
- compositional-core/grammar/grammar.md
- compositional-core/components/components.md
- compositional-core/vocabulary/tokens.css
- compositional-core/components/components.css
