<!-- ═══════════════════════════════════════════════════════════════════════
     INLINE THREADING HEADER — Phase 2B
     File: design-extraction/component-system/perceptual-audit-v2/foundation/SOUL-TRANSLATION-GUIDE.md
     Tier: A | Batch: 2 | Generated: 2026-02-06
     ═══════════════════════════════════════════════════════════════════════

1. WHY THIS EXISTS

SOUL-TRANSLATION-GUIDE.md is the bridge document that translates KortAI's soul
philosophy into concrete CSS implementation rules for non-image components. The core
problem it solves: the KortAI soul was originally extracted from image-heavy card
references where halftone/duotone image treatment carried significant visual weight.
Non-image components (callouts, code blocks, decision matrices, file trees, etc.) cannot
inherit halftone. This file defines HOW they inherit soul through five alternate channels:
typography confidence, spacing generosity, container materiality, color discipline, and
hierarchical clarity. It provides specification tables for typography (5 tiers: title,
body, label, metadata, code), spacing (internal padding, zone gaps, external margins),
containers (standard, tinted, inverted), color (primary + background + functional accent
palettes), hierarchy rules, 9 component-specific translations, 5 perceptual tests, and
a 12-point anti-pattern checklist.

2. THE QUESTION THIS ANSWERS

"When a KortAI component has no image, how exactly does it still FEEL like KortAI — what
specific typography, spacing, container, color, and hierarchy rules must it follow to
inherit the editorial soul without the halftone visual anchor?"

3. STATUS

ACTIVE — Foundation reference document. Lifecycle: COMPLETE (all non-image translation
rules defined, 9 component-specific translations written, perceptual tests and
anti-pattern checklist finalized). Authority: FOUNDATION — this is consumed by T1
synthesis (PRODUCTION-RULES.md) and referenced by pipeline architecture documents.
Not itself T1, but actively cited by knowledge-architecture files.

4. SOUL ALIGNMENT

This file TRANSLATES soul to CSS. It bridges KORTAI-ESSENCE-FOUNDATION.md's philosophical
findings and SOUL-DEFINITION.md's locked rules into implementable specifications:

| Soul Channel | From Philosophy | To CSS |
|-------------|----------------|--------|
| Typography confidence | "Authority through position, not emphasis stacking" | Instrument Serif 400 titles (18-24px), Inter 400 body (14-16px, line-height 1.5-1.7), uppercase labels 600 (11-12px) |
| Spacing generosity | "Well-curated museum" | 16-24px card padding, 8px tight coupling, 12px title-body gap, 16px zone-zone gap |
| Container materiality | "Paper notes on a desk" | Cream (#FEFCF3) or white bg, 0-4px radius, optional 1px subtle border (#e0d5c5), soft shadow 0 2px 4px rgba(0,0,0,0.05) |
| Color discipline | "Ink on quality paper" | Near-black text (#1a1a1a), dark gray body (#3d3d3d), muted labels (#999), KortAI Red (#E83025) as functional accent only |
| Hierarchical clarity | "Confident speaker" | SIZE primary, POSITION secondary, WEIGHT minimal (400 vs 600), COLOR functional only |

NOTE FOR IMPLEMENTORS: Container radius (0-4px) and shadow values in this file
represent the translation guide's original specifications. The soul-locked authoritative
values are `border-radius: 0` and `box-shadow: none` per SOUL-DEFINITION.md and
DESIGN-TOKEN-SUMMARY.md. When this file's values conflict with T1 locked values,
T1 ALWAYS wins.

5. BUILT ON

| Source | Role | Key Values | Path |
|--------|------|------------|------|
| KORTAI-ESSENCE-FOUNDATION.md | Primary philosophical source | "The Unhurried Editor" character, 7 zone-level perceptual truths, typography/spacing/container/color/hierarchy findings, root metaphor | `design-extraction/component-system/perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md` |
| SOUL-DEFINITION.md (component-system) | 6 Universal Rules authority | Locked :root CSS block, border-radius: 0, box-shadow: none, font stacks, color palette, spacing scale | `design-extraction/component-system/SOUL-DEFINITION.md` |
| card-system/SOUL-DEFINITION.md | Ancestor soul (SUPERSEDED) | Original editorial vs Bootstrap philosophy, halftone as soul carrier concept | `design-extraction/card-system/SOUL-DEFINITION.md` |
| Per-component audit findings | Component-specific behaviors | How each of the 9 listed components (callouts, essence, core abstraction, code snippet, file tree, decision matrix, task, reasoning, challenge) expresses soul | `design-extraction/component-system/perceptual-audit-v2/components/` |

6. MUST HONOR

This file INHERITS and TRANSLATES constraints from upstream:

| Constraint | Specification | Enforcement |
|-----------|--------------|-------------|
| "Halftone is ONLY for images" | Non-image components CANNOT use halftone/duotone treatment | Fundamental principle stated in line 1 of content |
| "Soul transfers through RESTRAINT, not decoration" | The 5 channels (typography, spacing, container, color, hierarchy) replace halftone | Design review gate: any component that uses decoration for visual interest instead of restraint fails |
| Typography weight ceiling | Maximum 2 weights: Regular (400) and SemiBold (600); NO bold (700+) | Anti-pattern checklist item: "Bold + italic stacking" |
| Color functional-only rule | Accent colors ONLY on borders, icons, small UI; NEVER on large backgrounds or text emphasis | Anti-pattern checklist item: "Colored text for emphasis" |
| Hierarchy method precedence | SIZE > POSITION > WEIGHT > COLOR (never reverse) | Anti-pattern checklist item: "Color used for hierarchy (not function)" |
| 5 Perceptual Tests | Paper Test, Magazine Test, Volume Test, Color Test, Hierarchy Test — all must pass | Each test has a pass/fail criterion documented in the PERCEPTUAL TESTS section |
| 12-point anti-pattern checklist | Rounded corners > 4px, multiple accents, gradient backgrounds, heavy shadows, centered composition, etc. — all banned | Checklist must be verified before component approval |

7. WHAT BREAKS IF THIS CHANGES

BLAST RADIUS: MODERATE-HIGH (6+ direct consumers, pipeline-level reference)

Direct breakage:
- PRODUCTION-RULES.md (T1) — component-specific implementation templates derive from
  the COMPONENT-SPECIFIC TRANSLATIONS section here
- MASTER-SOUL-SYNTHESIS.md (T1) — references this file for soul-to-CSS translation
  methodology
- All component CSS files (9 in component-system/css/) — implementors use this guide
  as the bridge between soul philosophy and CSS code
- Per-component audits (11 in perceptual-audit-v2/components/) — each audit validates
  against translation rules defined here

Pipeline-level breakage:
- PIPELINE-BACKBONE.md — lists this as Stage 2 ("Maps print to digital") in the
  design pipeline; removing or renaming breaks the pipeline documentation
- SOURCE-OF-TRUTH-REGISTRY.md — lists as foundation-tier source of truth for
  "Soul-to-CSS translation rules"
- docs-spa/app/showcase/dependency-trace/ — multiple files reference this as an
  external dependency for showcase explorations

8. CONSUMED BY

| Consumer | How It Uses This File |
|----------|----------------------|
| PRODUCTION-RULES.md (T1) | Codifies the 9 component-specific translations into mandatory implementation templates with correct/wrong CSS examples |
| MASTER-SOUL-SYNTHESIS.md (T1) | References as the translation methodology that bridges philosophy to implementation |
| component-system/css/*.css (9 files) | Implementors consult typography, spacing, container, and color rules tables when writing component CSS |
| perceptual-audit-v2/components/ (11 audits) | Each component audit validates against translation rules; uses perceptual tests as verification gates |
| PIPELINE-BACKBONE.md | Listed as pipeline Stage 2 — "Maps print to digital" |
| SOURCE-OF-TRUTH-REGISTRY.md | Registered as foundation-tier authority for soul-to-CSS translation |
| showcase/dependency-trace/02-threading-data/ | Referenced as external dependency for showcase exploration threading |
| showcase/explorations/density/ | DD work consumes soul-to-CSS mapping for density exploration decisions |

9. RESEARCH DEBT

- Container radius specification ("0-4px") is inconsistent with the soul-locked value
  of `border-radius: 0`. The file should carry an explicit warning or be updated to
  reflect the locked value. Currently, an agent reading this file alone could implement
  4px radius and believe it is compliant.
- Container shadow specification ("0 2px 4px rgba(0,0,0,0.05)") conflicts with
  soul-locked `box-shadow: none`. Same pre-lock issue as KORTAI-ESSENCE-FOUNDATION.md.
- The COMPONENT-SPECIFIC TRANSLATIONS section covers 9 components but the full system
  has 11 (missing: ASCII Dithered Art and Info Callout as distinct entries, though
  Info Callout may be covered under "Callouts (Info, Tip, Gotcha)").
- The anti-pattern checklist includes "Rounded corners > 4px" — but the soul-locked
  value is `border-radius: 0`, meaning ANY rounded corners (including 1-4px) are
  violations. The threshold should be "Rounded corners > 0px."
- No explicit guidance for dark mode or theme switching — all translations assume the
  light editorial theme.
- The hierarchy levels table (H1: 24-32px, H2: 20-24px, etc.) does not perfectly align
  with the type scale in SOUL-DEFINITION.md's :root block (text-h1: 40px, text-h2: 32px),
  suggesting the translation guide uses component-internal sizing rather than the global
  type scale. This distinction is not documented.

10. DIAGNOSTIC QUESTIONS

Q1: Does every CSS value in the typography, spacing, container, and color rules tables
    align with the locked :root values in DESIGN-TOKEN-SUMMARY.md? (Expected: PARTIAL
    NO — container radius and shadow values are known pre-lock divergences)

Q2: Can an agent use the COMPONENT-SPECIFIC TRANSLATIONS section to implement all 11
    KortAI components without consulting PRODUCTION-RULES.md? (Expected: NO — only 9
    components are covered, and the guide provides direction but not the
    correct/wrong CSS examples that PRODUCTION-RULES.md adds)

Q3: Do the 5 perceptual tests (Paper, Magazine, Volume, Color, Hierarchy) appear in
    PRODUCTION-RULES.md or ANTI-PATTERNS-REGISTRY.md as enforcement gates?
    (Expected: YES — tests should be propagated to enforcement layer)

Q4: Does the 12-point anti-pattern checklist fully subsume the anti-patterns in
    ANTI-PATTERNS-REGISTRY.md (T1), or does the T1 registry contain additional
    anti-patterns? (Expected: T1 registry is a SUPERSET — it adds anti-patterns
    discovered during per-component audits)

Q5: If the "Halftone is ONLY for images" principle were relaxed (e.g., CSS halftone
    effects on text), which downstream files would need updates? (Expected: This file's
    fundamental principle section, PRODUCTION-RULES.md component templates, and any
    component CSS file that would gain halftone treatment)

     ═══════════════════════════════════════════════════════════════════════
     END INLINE THREADING HEADER
     ═══════════════════════════════════════════════════════════════════════ -->
# Soul Translation Guide
## How Non-Image Components Inherit KortAI's Soul

**Created:** 2026-02-03
**Purpose:** Specific rules for translating KortAI's image-centric soul to text/interactive components

---

## THE FUNDAMENTAL PRINCIPLE

**Halftone is ONLY for images. Soul transfers through RESTRAINT, not decoration.**

When a component has no image, it cannot inherit the halftone treatment. Instead, it inherits:
1. Typography confidence
2. Spacing generosity
3. Container materiality
4. Color discipline
5. Hierarchical clarity

---

## TYPOGRAPHY RULES

### Title Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Instrument Serif or similar editorial serif | Editorial heritage |
| Weight | Regular (400) or Medium (500) | Confidence without shouting |
| Case | Sentence case | Professional, not aggressive |
| Size | 18-24px | Clear hierarchy anchor |
| Color | Near-black (#1a1a1a to #2d2d2d) | Readable authority |

### Body Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar clean sans-serif | Readability at length |
| Weight | Regular (400) | Calm, not emphasized |
| Size | 14-16px | Comfortable reading |
| Line-height | 1.5-1.7 | Generous for comprehension |
| Color | Dark gray (#3d3d3d to #4a4a4a) | Readable without stark |

### Label Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar sans-serif | Clean, functional |
| Weight | SemiBold (600) | Distinguishes from body |
| Case | UPPERCASE | Category marker convention |
| Size | 11-12px | Small but legible |
| Letter-spacing | 0.5-1px | Aids uppercase readability |
| Color | Muted (#888 to #999) | Secondary information |

### Metadata Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | Inter or similar sans-serif | Consistent with body |
| Weight | Regular (400) | No emphasis needed |
| Size | 12-13px | Smaller than body |
| Color | Muted (#777 to #888) | Tertiary importance |

### Code Typography
| Property | Value | Rationale |
|----------|-------|-----------|
| Font | JetBrains Mono or similar monospace | Technical clarity |
| Weight | Regular (400) | Neutral |
| Size | 13-14px | Readable in blocks |
| Background | Dark (#1a1a1a to #2d2d2d) | Technical specification feel |

---

## SPACING RULES

### Internal Padding
| Context | Value | Rationale |
|---------|-------|-----------|
| Card/component padding | 16-24px | Generous interior breathing |
| Callout padding | 16px | Comfortable reading |
| Code block padding | 16px | Clear code boundaries |
| Table cell padding | 8-12px | Dense but readable |

### Zone Gaps (Internal)
| Between | Value | Rationale |
|---------|-------|-----------|
| Label → Content | 8px | Tight coupling |
| Title → Body | 12px | Clear but connected |
| Zone → Zone | 16px | Distinct zones |
| Header → Body | 12-16px | Clear separation |

### External Spacing
| Context | Value | Rationale |
|---------|-------|-----------|
| Component margin | 16-24px | Breathing between components |
| Section gap | 32-48px | Clear section breaks |
| Grid gap | 24px | Consistent grid rhythm |

---

## CONTAINER RULES

### Standard Container (Cards, Callouts)
| Property | Value | Rationale |
|----------|-------|-----------|
| Background | #FEFCF3 (cream) or #FFFFFF | Paper quality |
| Border | None or 1px subtle (#e0d5c5) | Minimal container chrome |
| Shadow | 0 2px 4px rgba(0,0,0,0.05) | Soft lift, material presence |
| Radius | 0-4px | Sharp, die-cut precision |

### Tinted Container (Callouts by type)
| Type | Background | Border-left |
|------|------------|-------------|
| Info | #EBF5FF | 3px #3B82F6 |
| Tip | #ECFDF5 | 3px #10B981 |
| Gotcha | #FEF2F2 | 3px #EF4444 |
| Essence | #FEFCF3 | 1px #E83025 (full border) |

### Inverted Container (Code, Core Abstraction)
| Property | Value | Rationale |
|----------|-------|-----------|
| Background | #1a1a1a to #2d2d2d | Technical specification |
| Border | None | Clean inversion |
| Shadow | None | Flat, intentional |
| Radius | 0px | Sharp precision |

---

## COLOR RULES

### Primary Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Text Primary | Near-black | #1a1a1a | Titles, important text |
| Text Secondary | Dark gray | #3d3d3d | Body text |
| Text Tertiary | Medium gray | #666666 | Secondary info |
| Text Muted | Light gray | #999999 | Labels, metadata |

### Background Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Page | Warm off-white | #FEFCF3 | Overall background |
| Card | Cream or white | #FEFCF3 / #FFFFFF | Container backgrounds |
| Tint subtle | Very light tint | Opacity 5-10% | Callout backgrounds |

### Accent Palette (Functional Only)
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary accent | KortAI Red | #E83025 | Brand, emphasis, important |
| Info | Blue | #3B82F6 | Informational |
| Success/Tip | Green | #10B981 | Positive, helpful |
| Warning/Gotcha | Red | #EF4444 | Warnings, errors |
| Process/Reasoning | Amber | #F59E0B | Steps, logic |
| Challenge | Purple | #8B5CF6 | Interactive exercises |

### RULE: Color is Functional, Not Decorative
- Accent colors ONLY on borders, icons, checkboxes, small UI elements
- NEVER on large background areas (except subtle tints)
- NEVER on text for emphasis (use typography instead)
- NEVER multiple accent colors in one component

---

## HIERARCHY RULES

### Method Precedence
1. **SIZE** — Largest = most important
2. **POSITION** — Top/first = most important
3. **WEIGHT** — Bolder = more important
4. **COLOR** — Reserved for functional meaning only

### Hierarchy Levels
| Level | Typical Use | Size | Weight |
|-------|-------------|------|--------|
| H1 | Page titles | 24-32px | Medium |
| H2 | Section titles | 20-24px | Medium |
| H3 | Component titles | 18-20px | Medium |
| Body | Content text | 14-16px | Regular |
| Caption | Labels, metadata | 11-13px | Regular/SemiBold |

### RULE: Typography Does the Work
- If hierarchy is unclear, adjust size/position first
- Never add color to create hierarchy
- Never add decoration (borders, backgrounds) to create hierarchy
- Trust that position and size are enough

---

## COMPONENT-SPECIFIC TRANSLATIONS

### Callouts (Info, Tip, Gotcha)
- Inherit: Left border accent, tinted background, sharp corners
- Typography: Uppercase label → body content
- Spacing: 16px internal padding, 8px label-to-content gap
- Container: Subtle tint background, 3px left border

### Essence
- Inherit: Full red border (connects to card title color)
- Typography: Instrument Serif italic for quote
- Spacing: Generous padding, centered visual weight
- Container: Cream background, 1px red border all sides

### Core Abstraction
- Inherit: Inverted (dark) treatment (like technical specs)
- Typography: Instrument Serif for title, Inter for content
- Spacing: Standard padding, clear zones
- Container: Dark background, no border

### Code Snippet
- Inherit: Technical specification feel
- Typography: JetBrains Mono, no syntax color explosion
- Spacing: 16px padding, header-content separation
- Container: Dark background, sharp corners

### File Tree
- Inherit: Technical clarity, monospace
- Typography: JetBrains Mono for tree, Inter for header
- Spacing: Tight vertical rhythm (6-8px line gap)
- Container: Cream background, subtle border

### Decision Matrix
- Inherit: Editorial table treatment
- Typography: Inter, clear header/body distinction
- Spacing: Consistent cell padding, no cramping
- Container: White cells, dark header, minimal borders

### Task Component
- Inherit: Checklist clarity
- Typography: Inter, title + description
- Spacing: Checkbox-text gap (12px), item gap (8px)
- Container: Cream background, subtle border

### Reasoning
- Inherit: Process visibility
- Typography: Inter, numbered badges
- Spacing: Step separation (12-16px)
- Container: Warm beige background, subtle accent

### Challenge
- Inherit: Interactive invitation
- Typography: Instrument Serif for title
- Spacing: Standard padding
- Container: Cream background, purple accent

---

## PERCEPTUAL TESTS

### The Paper Test
"Can I imagine this printed on premium paper?"
- If yes: Container treatment is correct
- If no: Too digital, too floating

### The Magazine Test
"Would this element look at home in the Financial Times?"
- If yes: Editorial quality achieved
- If no: Too casual, too tech-y, or too aggressive

### The Volume Test
"Is the typography speaking at conversational volume?"
- If calm and measured: Correct
- If shouting or whispering: Adjust

### The Color Test
"If I remove all color, does the design still work?"
- If yes: Color is functional
- If no: Color is structural (wrong)

### The Hierarchy Test
"Can I blur my eyes and still understand what's important?"
- If yes: Hierarchy is clear
- If no: Needs size/position adjustment

---

## ANTI-PATTERN CHECKLIST

Before approving any component, verify NONE of these exist:

- [ ] Rounded corners > 4px
- [ ] Multiple accent colors in one component
- [ ] Color used for hierarchy (not function)
- [ ] ALL CAPS titles (labels OK)
- [ ] Bold + italic stacking
- [ ] Gradient backgrounds
- [ ] Heavy drop shadows
- [ ] Decorative borders
- [ ] Colored text for emphasis
- [ ] Inconsistent spacing within component
- [ ] Centered composition (should be left-aligned)
- [ ] Competing visual weights at same level

---

*This translation guide ensures non-image components inherit KortAI's soul without the halftone treatment. Every component audit must verify compliance with these rules.*
