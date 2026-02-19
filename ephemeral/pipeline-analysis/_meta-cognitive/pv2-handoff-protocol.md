# Pipeline v2: TC-to-Builder Handoff Protocol

**Author:** handoff-designer (Opus 4.6)
**Date:** 2026-02-18
**Task:** Design the exact interface contract between TC (tension-composition) and the Builder (page-building) skill
**Sources:** TC SKILL.md (1,878 lines), File 42 (1,746 lines), pv2-form-proposal.md, pv2-relationship-map.md, pv2-file42-integration.md

---

## THE PROBLEM THIS SOLVES

The original master prompt compressed 337 research findings into "sample 2-4 mechanisms." The conclusion survived; the decision criteria died. This is 50:1 information loss at the handoff boundary.

Pipeline v2 separates THINKING (TC) from BUILDING (page-builder). The handoff document is the contract between them. If it compresses, Pipeline v2 repeats the flagship failure. If it bloats, the builder drowns in context.

**The design principle:** Every field in the handoff MUST be actionable by the builder AND traceable to a corpus finding. Fields that are "nice to know" but don't change CSS get cut. Fields that change CSS but aren't in the handoff get added.

---

## PART A: THE HANDOFF DOCUMENT TEMPLATE

The handoff is a structured markdown document written by TC at the end of its pipeline and read by the builder at the start of its recipe. It is named `_build-plan.md` and lives alongside the content source file.

### Section 1: ROUTING HEADER (all tiers)

```markdown
## BUILD PLAN

TIER: [Floor | Middle | Ceiling | Flagship]
CONTENT_SOURCE: [path to content file]
WORD_COUNT: [number]
CONTENT_TYPE: [Prose-dominant | Mixed | Visual-dominant]
CONTENT_ARC: [one sentence: "Introduction -> core argument -> synthesis"]
TC_PHASES_COMPLETED: [0 | 0-3.5 | 0-5]
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| TIER | YES (all) | Enum: Floor/Middle/Ceiling/Flagship | Determines which recipe phases to execute and at what depth |
| CONTENT_SOURCE | YES (all) | Absolute file path | Builder reads this file in Phase 0 |
| WORD_COUNT | YES (all) | Integer | Determines zone count (File 42 Phase 0.3) |
| CONTENT_TYPE | YES (all) | Enum from TC Phase 0A | Routes hybrid content to split treatment |
| CONTENT_ARC | YES (all) | One sentence, max 20 words | Seeds zone semantic assignment (File 42 Phase 0.4) |
| TC_PHASES_COMPLETED | YES (all) | Enum: 0, 0-3.5, 0-5 | Builder knows what derivation work is done |

---

### Section 2: ZONE ARCHITECTURE (all tiers)

```markdown
## ZONE ARCHITECTURE

ZONE_COUNT: [2-5]
PATTERN: [CRESCENDO | F-PATTERN | BENTO | PULSE | METAPHOR-DRIVEN]

| Zone | Sections | Temperature | Density | Voice | Weight | Rationale |
|------|----------|-------------|---------|-------|--------|-----------|
| Zone 1 (Opening) | S1-S3 | Warm | Open | Expansive | Light | [why] |
| Zone 2 (Core) | S4-S8 | Cool/Neutral | Compressed | Tight | Heavy | [why] |
| Zone 3 (Resolution) | S9-S12 | Warm | Standard | Standard | Light | [why] |
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| ZONE_COUNT | YES (all) | Integer 2-5 | Sets the spatial skeleton |
| PATTERN | YES (Middle+) | Enum for Middle; "METAPHOR-DRIVEN" for Ceiling+ | Middle: selects density flow. Ceiling+: metaphor determines flow |
| Zone table | YES (all) | One row per zone, 6 columns | Builder maps zones directly to CSS: Temperature -> background hex, Density -> padding values, Voice -> font-size, Weight -> font-weight |
| Rationale column | YES (Ceiling+), OPTIONAL (Middle) | One phrase per zone | Preserves WHY this zone has these properties. Without it, the builder treats values as arbitrary |

**Tier differences:**
- **Floor:** ZONE_COUNT = 1 or 2. Table has 1-2 rows. PATTERN = N/A (component assembly).
- **Middle:** ZONE_COUNT = 2-3. PATTERN is one of the 4 density patterns. Zone rationale is content-arc based ("introduction needs openness").
- **Ceiling:** ZONE_COUNT = 3-4. PATTERN = METAPHOR-DRIVEN. Zone rationale references the metaphor ("bedrock stratum = compressed analytical density").
- **Flagship:** ZONE_COUNT = 4-5. Full rationale with metaphor + tension derivation references.

---

### Section 3: SECTION INVENTORY (all tiers)

```markdown
## SECTION INVENTORY

| # | Title | Zone | Content Type | Layout | Transition TO Next | Elements |
|---|-------|------|-------------|--------|-------------------|----------|
| S1 | Introduction | Zone 1 | Prose | Single-column | SMOOTH | 2 paragraphs, 1 callout |
| S2 | Core Concepts | Zone 1 | Mixed | Two-column grid | BRIDGE | 1 table, 3 paragraphs, 2 callouts |
| S3 | Deep Analysis | Zone 2 | Prose | Single-column | SMOOTH | 5 paragraphs, 1 pullquote |
| S4 | Evidence | Zone 2 | Table-dominant | Single-column | BREATHING | 2 tables, 1 paragraph |
| S5 | Synthesis | Zone 3 | Prose | Two-column grid | SMOOTH | 3 paragraphs, 1 essence callout |
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| Section number | YES (all) | S1, S2, ... SN | Maps to HTML section elements and CSS zone selectors |
| Title | YES (all) | Max 5 words | Becomes the `<h2>` and `aria-label` content |
| Zone | YES (all) | Zone N reference | Links section to zone CSS properties |
| Content Type | YES (all) | Prose / Mixed / Table-dominant / Code-dominant / Visual | Determines component selection in Phase 1 |
| Layout | YES (all) | Single-column / Two-column grid / 2x2 grid / Asymmetric | Builder creates grid wrapper HTML. **At least 2 must be non-single-column** (File 42 mandate) |
| Transition TO Next | YES (all) | SMOOTH / BRIDGE / BREATHING | Builder writes divider HTML and CSS per File 42 Phase 4.2. Max 2-3 BREATHING per page |
| Elements | YES (all) | Comma-separated count + type | Builder knows what HTML elements to create in Phase 1 |

**Grid layout mandate:** At least 2 sections MUST have non-single-column layout. This is the single strongest anti-monotony intervention from the 41-file corpus (File 06). If TC cannot identify 2 grid-worthy sections, it MUST flag this: `GRID_WARNING: Only 1 grid section identified. Builder should consider splitting [section X] into paired callouts.`

---

### Section 4: MECHANISM DEPLOYMENT (Middle+ tiers)

```markdown
## MECHANISM DEPLOYMENT

DEPLOYMENT_LEVEL: [Individual | Combination | Multi-pattern]
MECHANISM_COUNT: [expected natural landing: 8-12 for Middle, 12-15 for Ceiling, 16-18 for Flagship]

| Category | Mechanism(s) Selected | Where Deployed | CSS Channel | Why This Content |
|----------|----------------------|---------------|-------------|-----------------|
| Spatial | #5 Dense/Sparse Alternation | Zone 1 vs Zone 2 padding contrast | Spacing | Content arc has open introduction -> compressed analysis |
| Hierarchy | #1 Border-Weight Gradient | S2, S5, S9 left borders (3px/4px) | Border | Three conclusion sections need structural containment |
| Component | #2 2-Zone DNA | Callouts in S2, S4 | Border + Background | Callout label/body split matches info vs essence distinction |
| Depth | #7 Zone Backgrounds | All sections | Background | Content arc has 3 movements needing perceptible color shifts |
| Structure | #13 Dark Header + #14 Footer Mirror | Header, Footer | Background + Typography | Bookend pattern proven (9/9 auditor acclaim) |
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| DEPLOYMENT_LEVEL | YES (Middle+) | Enum: Individual/Combination/Multi-pattern | Tells builder whether mechanisms work independently or must reinforce each other |
| MECHANISM_COUNT | YES (Middle+) | Integer range | Builder knows the natural landing zone; does NOT treat as target |
| Category | YES (Middle+) | One of: Spatial/Hierarchy/Component/Depth-Emphasis/Structure-Navigation | Ensures per-category breadth (5 categories, 1+ each) |
| Mechanism(s) Selected | YES (Middle+) | Catalog number + name | Builder can cross-reference the mechanism catalog for application modes |
| Where Deployed | YES (Middle+) | Section numbers or zone references | Maps mechanism to specific HTML locations |
| CSS Channel | YES (Middle+) | One or more of: Background/Border/Typography/Spacing/Layout/Accent | Builder knows WHICH CSS property to modify |
| Why This Content | YES (Ceiling+), OPTIONAL (Middle) | One sentence | Preserves the content-mechanism FIT rationale. Without it, mechanisms become checklist items |

**Per-category completeness check:** The table MUST have at least one row per category (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). If a category genuinely cannot be deployed, the table includes:

```
| Structure | NONE - JUSTIFIED | N/A | N/A | Content has no navigation needs (single-concept, < 1500 words) |
```

---

### Section 5: METAPHOR SPECIFICATION (Ceiling+ tiers ONLY)

```markdown
## METAPHOR

NAME: [metaphor name, e.g., "Geological Core Sample"]
DOMAIN: [real-world domain, e.g., "Sedimentary geology"]
INTERPRETIVE_DISTANCE: [0-3 from 6-criterion rubric]
STRUCTURAL_SURVIVAL: [0-3 -- can the reader FEEL the metaphor without labels?]

### Tension Resolution
PRIMARY_TENSION: [Side A] vs [Side B]
RESOLUTION: [How the metaphor bridges the opposition -- one sentence]

### Isomorphism Table
| Metaphor Property | Content Property | CSS Expression | Perception Check |
|-------------------|-----------------|---------------|-----------------|
| Strata layers | Confidence levels | Zone backgrounds darkening from #FEF5EB to #F2EFEA | Can you SEE the color shift without a picker? |
| Consolidation pressure | Analytical density | Padding compression from 64px (Zone 1) to 32px (Zone 2) | Does Zone 2 FEEL tighter than Zone 1? |
| Fossil specimens | Key insights | Essence callouts with amber border + display font | Do callouts feel EMBEDDED, not pasted on? |
| Core sample width | Reading focus | Internal padding narrowing from 32px to 48px per side | Does the content feel more focused in dense zones? |
| Weathering surface | Introductory openness | 17px font, 1.85 line-height, warm background | Does Zone 1 feel MORE SPACIOUS than Zone 2? |

### Builder Warnings (from TC Appendix)
WARNINGS: [W-DEADZONE, W-MONOTONY, etc. -- only the relevant ones]
W-DEADZONE: "Geological strata transitions must be STATE CHANGES (background shift), not EMPTY SPACE. Max 48px between sections."
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| NAME | YES (Ceiling+) | 2-4 word metaphor name | Builder can reference the metaphor when making judgment calls about zone semantics |
| DOMAIN | YES (Ceiling+) | Real-world domain from TC Phase 3 | Context for understanding the isomorphism table |
| INTERPRETIVE_DISTANCE | YES (Ceiling+) | Integer 0-3 | Builder verifies >= 2 (reject at 0-1). This is the single highest-leverage gate from the ceiling experiment |
| STRUCTURAL_SURVIVAL | YES (Ceiling+) | Integer 0-3 | Builder knows whether to rely on structural CSS or add textual metaphor cues |
| PRIMARY_TENSION | YES (Ceiling+) | "X vs Y" format | Builder understands the emotional opposition driving CSS choices |
| RESOLUTION | YES (Ceiling+) | One sentence | The conceptual bridge. Builder reads this ONCE for orientation, then works from isomorphism table |
| Isomorphism Table | YES (Ceiling+) | One row per mapping, 4 columns | THE critical handoff artifact. Each row is a CSS RECIPE: metaphor property -> content property -> exact CSS expression -> perception check. The builder implements row by row. |
| Perception Check column | YES (Ceiling+) | Question format, answerable by visual inspection | Converts abstract metaphor properties into binary visual tests. This is the LOSSLESS version of "sample 2-4 mechanisms" |
| WARNINGS | YES (Ceiling+) | W-codes from TC Appendix | Builder reads these BEFORE starting Phase 1 |

**The Isomorphism Table is the CORE of the handoff for Ceiling+ tiers.** It is the lossless replacement for the master prompt's lossy compression. Each row preserves:
1. The metaphor insight (what physical property maps to content)
2. The CSS implementation (what to write)
3. The perception gate (how to verify the CSS works)

Without the perception check column, the builder can write CSS that satisfies the mapping abstractly but produces imperceptible results (the flagship failure mode).

---

### Section 6: TRANSITION PLAN (all tiers)

```markdown
## TRANSITIONS

| Boundary | Type | Visual Treatment | Bridge Prose (if Bridge/Breathing) |
|----------|------|-----------------|-----------------------------------|
| S1 -> S2 | SMOOTH | 1px tan, 16px margins | -- |
| S2 -> S3 | SMOOTH | 1px tan, 16px margins | -- |
| S3 -> S4 | BRIDGE | 2px dark, 24px margins | "Having established the principles, we now examine the evidence." |
| S4 -> S5 | SMOOTH | 1px tan, 16px margins | -- |
| S5 -> S6 | BREATHING | 4px red, 24px margins | "The analysis yields three conclusions." |

STACKING_CHECK: [PASS/FAIL]
WORST_CASE_GAP: [Nxx]px (must be < 120px)
RHYTHM_TYPES: [count of distinct transition types -- must be >= 3 for Middle+]
```

**Field specifications:**

| Field | Required | Format | Builder action |
|-------|----------|--------|----------------|
| Boundary | YES (all) | "SN -> SM" format | Maps directly to HTML divider elements |
| Type | YES (all) | SMOOTH/BRIDGE/BREATHING | Selects CSS class: `.divider-smooth`, `.divider-bridge`, `.divider-breathing` |
| Visual Treatment | YES (all) | Shorthand: weight + color + margins | Builder verifies CSS matches these values |
| Bridge Prose | YES for Bridge/Breathing transitions | One sentence, italic, editorial voice | Builder creates `.bridge-prose` HTML element with this text |
| STACKING_CHECK | YES (all) | PASS or FAIL | If FAIL, TC must fix before handing off. Builder does NOT receive a FAIL handoff |
| WORST_CASE_GAP | YES (all) | Integer px, must be < 120 | Binary gate: prevents the S-09 stacking loophole |
| RHYTHM_TYPES | YES (Middle+) | Integer >= 3 | Binary gate: prevents transition monotony |

**Stacking arithmetic formula (from File 42 Phase 0.6):**
```
Total gap = section-padding-bottom + divider-margin-top + divider-height + divider-margin-bottom + next-section-padding-top
```

TC computes this for the WORST-CASE boundary (the one with the largest combined gap). If it exceeds 120px, TC must adjust zone padding or transition margins before finalizing the handoff.

---

### Section 7: BUILDER DIRECTIVES (all tiers)

```markdown
## BUILDER DIRECTIVES

### Files to Read FIRST (in order)
1. `design-system/compositional-core/identity/prohibitions.md` (soul constraints)
2. `design-system/compositional-core/vocabulary/tokens.css` (palette + spacing)
3. `design-system/compositional-core/grammar/mechanism-catalog.md` (18 mechanisms -- Ceiling+ only, read FULL catalog)

### Files NOT to Read
- Case studies (divergence already verified by TC)
- TC SKILL.md (thinking document, not building document)
- Prior explorations (DD-001 through CD-006)

### Perception Thresholds (embed in every phase)
| Property | Minimum Perceptible Delta |
|----------|--------------------------|
| Background color | >= 10 RGB points between adjacent zones |
| Font-size | >= 2px between zone groups |
| Font-weight | >= 200 units between zone groups |
| Line-height | >= 0.2 between zone groups |
| Letter-spacing | >= 0.025em total range |
| Border weight | >= 1px between hierarchy levels |
| Margin-bottom | >= 8px between zone groups |
| Max-width | >= 6ch between zone groups |

### Soul Constraints (non-negotiable)
- border-radius: 0 on EVERYTHING
- box-shadow: none on EVERYTHING
- Container max-width: 960px
- All backgrounds: R >= G >= B (warm test)
- No pure #000000 or #FFFFFF
- Fonts: Instrument Serif (display) / Inter (body) / JetBrains Mono (code)
```

---

## PART B: INFORMATION PRESERVATION AUDIT

For each handoff section, what corpus finding does it preserve, and what dies if compressed?

### B1: Routing Header

| Field | Corpus Finding Preserved | LOSSY Version (master prompt) | LOSSLESS Version (Pipeline v2) |
|-------|-------------------------|------------------------------|-------------------------------|
| TIER | Tier model (11 research agents, validated by Middle experiment) | "Build a page" (no tier distinction) | Explicit tier classification with routing implications |
| CONTENT_TYPE | Phase 0A content classification (TC SKILL.md) | Not present | Builder knows prose vs mixed vs visual treatment |
| CONTENT_ARC | Zone semantic seeding | Not present | Builder maps arc to zone temperature/density/voice/weight |
| TC_PHASES_COMPLETED | Pipeline state tracking | Not tracked | Builder knows whether metaphor derivation is done |

**What dies at 1-sentence compression:** "Build this content as a Middle-tier page." -- Dies: content type (prose vs mixed), word count (zone count depends on it), content arc (zone semantics depend on it). The builder would have to re-derive all of Phase 0.

### B2: Zone Architecture

| Field | Corpus Finding Preserved | LOSSY Version | LOSSLESS Version |
|-------|-------------------------|---------------|-----------------|
| ZONE_COUNT | Alexander/Salingaros ceiling (5 max), validated by scale research (6 Opus agents) | "Use zones" (no count) | Exact count with mathematical justification |
| PATTERN | 4 density patterns (Middle) or metaphor-driven (Ceiling+) | "Apply appropriate layout" | Named pattern with CSS flow implications |
| Zone table | Zone semantics from File 42 Phase 0.4 (temperature, density, voice, weight) | "Create visual variety" | Per-zone property assignments that MAP DIRECTLY to CSS values (warm = specific hex range, compressed = specific padding values) |
| Rationale | Content-mechanism fit principle (all 11 richness agents) | Not present | Builder knows WHY Zone 2 is compressed, preventing arbitrary re-interpretation |

**What dies at 1-sentence compression:** "Use 3 zones with warm-cool-warm progression." -- Dies: specific density values per zone (padding), voice values per zone (font-size), weight values per zone (font-weight), section-to-zone assignments. The builder would assign arbitrary CSS values instead of semantically-driven ones.

### B3: Section Inventory

| Field | Corpus Finding Preserved | LOSSY Version | LOSSLESS Version |
|-------|-------------------------|---------------|-----------------|
| Layout column | Single-column monotony = #1 layout failure (File 06, 13 adversarial, 9/9 PA auditors) | Not specified | Per-section layout shape with 2+ grid mandate |
| Transition TO Next | 3-type transition grammar (SMOOTH/BRIDGE/BREATHING) replacing TC's 5x5 matrix | Not specified | Named transition per boundary with CSS implications |
| Elements column | Component library adoption (3/26 -> 10/26 in remediation) | Not specified | Builder knows which HTML elements to create, preventing custom-class proliferation |

**What dies at 1-sentence compression:** "Build 12 sections with appropriate layouts." -- Dies: which sections are grids (the anti-monotony intervention), which transitions are breathing vs smooth (the rhythm variation requirement), what components each section contains (preventing the 54 custom classes problem).

### B4: Mechanism Deployment

| Field | Corpus Finding Preserved | LOSSY Version | LOSSLESS Version |
|-------|-------------------------|---------------|-----------------|
| Category column | Per-category minimums replacing "sample 2-4" (THE single most limiting spec, ALL 11 agents) | "Sample 2-4 mechanisms from the catalog" | 5 categories, 1+ each, with named mechanisms and deployment locations |
| CSS Channel column | 6 exhaustive CSS channels (TC Phase 4.2) | Not specified | Builder knows WHICH CSS property to modify for each mechanism |
| Why This Content column | Content-mechanism fit > technique count (core richness finding) | Not present | Preserves the reasoning. Without it, mechanisms become items to check off rather than design decisions serving content |
| Where Deployed column | Inverted quality routing fix (mechanism catalog to BUILDER, not just planner) | Mechanisms described abstractly, builder never sees catalog | Specific section references. Builder implements mechanism AT a location, not "somewhere" |

**What dies at 1-sentence compression:** "Deploy 8-10 mechanisms across 5 categories." -- Dies: WHICH mechanisms (builder must re-select from 18), WHERE they go (builder must re-decide placement), WHY they fit (builder treats as checklist, not design). This is the EXACT compression that created the flagship failure. The 50:1 loss happens here.

### B5: Metaphor Specification (Ceiling+)

| Field | Corpus Finding Preserved | LOSSY Version | LOSSLESS Version |
|-------|-------------------------|---------------|-----------------|
| Isomorphism Table | Metaphor-to-CSS translation (TC Phase 4.1 + 4.2) | "Express the geological metaphor through CSS" | Row-by-row mapping: physical property -> content property -> exact CSS expression -> perception check |
| Perception Check column | Programmatic verification != perceptual verification (Gate 4 vs Gate 5 finding) | Not present | Every isomorphism has a binary visual test. Builder MUST verify by looking, not by checking CSS existence |
| WARNINGS | Builder instruction warnings (W-DEADZONE through W-IMPLICIT) | Not present | Specific perceptual risks from the metaphor's conceptual model, with mitigation strategies |
| INTERPRETIVE_DISTANCE | Ceiling experiment post-mortem: zero-distance metaphor = label, not bridge (6-criterion rubric) | Not measured | Binary gate: reject at 0-1. Prevents "secure facility for security docs" failure mode |

**What dies at 1-sentence compression:** "Use the geological core sample metaphor with strata layers encoding confidence levels." -- Dies: ALL isomorphisms except one, ALL perception checks, ALL builder warnings. The builder would implement the metaphor as a label ("BEDROCK LAYER") instead of as structural CSS (graduated backgrounds, compression, font weight shifts).

### B6: Transition Plan

| Field | Corpus Finding Preserved | LOSSY Version | LOSSLESS Version |
|-------|-------------------------|---------------|-----------------|
| STACKING_CHECK | S-09 stacking loophole (3 independent discoveries, File 02/08/29) | Individual spacing values checked (<= 96px) | Total boundary gap computed, must be < 120px |
| Bridge Prose | Agent communication finding (zero SendMessage = quality cost, missing footer = smoking gun) | Not present | Builder receives the actual transition text, preventing empty gaps at zone boundaries |
| RHYTHM_TYPES | Rhythm variation requirement (Middle experiment PA-17 failure) | Not present | Binary count >= 3, preventing metronomic transitions |

**What dies at 1-sentence compression:** "Use varied transitions between sections." -- Dies: which transitions are which type, bridge prose content, stacking arithmetic verification. Builder uses uniform `margin: 64px 0` everywhere (the flagship pattern that created 210-276px voids).

---

## PART C: THE BUILDER ENTRY PROTOCOL

When the builder skill receives `_build-plan.md`, it executes this exact sequence:

### Step 1: Validate Handoff Completeness (BEFORE any building)

```markdown
## HANDOFF VALIDATION CHECKLIST

Read _build-plan.md. Verify ALL required fields are present:

[ ] TIER is set (Floor/Middle/Ceiling/Flagship)
[ ] CONTENT_SOURCE path exists and is readable
[ ] WORD_COUNT is present
[ ] ZONE_COUNT is present and 2-5
[ ] Zone table has one row per zone with all 4 properties
[ ] Section inventory has at least 2 non-single-column layouts
[ ] Transition plan has STACKING_CHECK = PASS
[ ] Transition plan has RHYTHM_TYPES >= 3 (Middle+)
[ ] Mechanism deployment table has >= 1 row per category (Middle+)
[ ] Perception threshold table is present in Builder Directives

For Ceiling+ also verify:
[ ] Metaphor NAME and DOMAIN are present
[ ] INTERPRETIVE_DISTANCE >= 2
[ ] Isomorphism table has >= 4 rows
[ ] Every isomorphism row has a Perception Check entry
[ ] WARNINGS section lists at least 1 relevant W-code

RESULT: ___ / ___ fields present

IF ANY REQUIRED FIELD IS MISSING: STOP. Do not build.
Report missing field(s) to TC via SendMessage.
```

**Why validation first:** The flagship builder received a 75-line compressed extract of a 963-line prompt. It had no way to know what was missing because it never saw the full spec. The handoff validation checklist makes incompleteness VISIBLE before the builder starts writing CSS.

### Step 2: Read Foundation Files (in order)

1. `design-system/compositional-core/identity/prohibitions.md` -- soul constraints. Read FIRST. Know what you CANNOT do.
2. `design-system/compositional-core/vocabulary/tokens.css` -- palette and spacing. Read SECOND. Know what values exist.
3. **For Ceiling+ only:** `design-system/compositional-core/grammar/mechanism-catalog.md` -- full 18-mechanism catalog. Read the application modes and impact profiles for each mechanism in the deployment table.

**Why this order:** Prohibitions -> tokens -> mechanisms mirrors the design system ontology (identity -> vocabulary -> grammar). The builder absorbs constraints before values, values before techniques. Reversing this order caused the flagship's 227 lines of sub-perceptual micro-typography: the builder wrote CSS values without knowing the perception thresholds.

### Step 3: Read Content Source

Read the content file specified in CONTENT_SOURCE. As you read, verify:
- The section inventory matches the content's actual structure
- The zone assignments feel appropriate for the content arc
- The element counts match what's in the content

**If mismatches found:** Note them but proceed. The build plan is authoritative; the builder does NOT re-derive zone architecture. Minor mismatches (one extra paragraph, a table not in the inventory) are handled by extending the closest section.

### Step 4: Read Build Plan Sections in This Order

| Order | Section | What Builder Extracts | What Builder Ignores |
|-------|---------|----------------------|---------------------|
| 1st | Routing Header | TIER (determines recipe depth), WORD_COUNT (confirms zone count) | TC_PHASES_COMPLETED (informational) |
| 2nd | Builder Directives | Perception thresholds (post on wall), soul constraints (verify loaded) | File routing (already done in Steps 1-2) |
| 3rd | Zone Architecture | Zone table (convert each property to CSS range) | Pattern name (informational for Middle, the table IS the implementation) |
| 4th | Section Inventory | Layout shapes (plan grid HTML), transitions (plan divider HTML), elements (plan component HTML) | Section titles (these come from content, not the plan) |
| 5th | Transition Plan | Type per boundary, bridge prose text, stacking verification | Stacking arithmetic (already verified by TC, PASS in handoff) |
| 6th | Mechanism Deployment | Per-mechanism deployment location and CSS channel | Why column (informational -- builder implements WHERE, not WHY) |
| 7th (Ceiling+) | Metaphor Specification | Isomorphism table (row-by-row CSS), builder warnings | Tension resolution narrative (informational -- builder uses isomorphisms, not tension theory) |

**What the builder does NOT read:**
- TC SKILL.md (thinking document, not building document)
- The analysis corpus (41 files, ~1.3MB -- this is for discussants, not builders)
- Case studies (divergence already verified by TC in Phase 5)
- Prior explorations (pattern contamination risk)

**What the builder reads INSTEAD of those:**
- The page-builder SKILL.md (the 9-phase recipe from File 42)
- The build plan (this handoff document)
- The 3 foundation files (prohibitions, tokens, mechanism catalog for Ceiling+)

### Step 5: Begin Building

After Steps 1-4, the builder has:
- Soul constraints loaded (from prohibitions.md)
- Token vocabulary loaded (from tokens.css)
- Perception thresholds memorized (from builder directives)
- Zone architecture planned (from zone table)
- Section layout planned (from section inventory)
- Transition plan ready (from transition plan)
- Mechanism deployment mapped (from mechanism deployment)
- For Ceiling+: Metaphor isomorphisms ready for row-by-row CSS implementation

The builder now proceeds to File 42 Phase 1 (HTML Skeleton) with ALL information needed to write every CSS value.

---

## PART D: TIER-SPECIFIC HANDOFF EXAMPLES

### D1: Floor Tier Handoff (minimal)

```markdown
## BUILD PLAN

TIER: Floor
CONTENT_SOURCE: /path/to/api-config-reference.md
WORD_COUNT: 180
CONTENT_TYPE: Visual-dominant
CONTENT_ARC: "Parameter table with usage notes"
TC_PHASES_COMPLETED: 0

## ZONE ARCHITECTURE

ZONE_COUNT: 1
PATTERN: N/A (Track 1 component assembly)

| Zone | Sections | Temperature | Density | Voice | Weight |
|------|----------|-------------|---------|-------|--------|
| Zone 1 | S1-S2 | Warm | Standard | Standard | Standard |

## SECTION INVENTORY

| # | Title | Zone | Content Type | Layout | Transition | Elements |
|---|-------|------|-------------|--------|------------|----------|
| S1 | Overview | Zone 1 | Prose | Single-column | -- | 1 paragraph |
| S2 | Parameters | Zone 1 | Table-dominant | Single-column | SMOOTH | 1 table, 1 callout |

## TRANSITIONS

| Boundary | Type | Visual Treatment | Bridge Prose |
|----------|------|-----------------|-------------|
| S1 -> S2 | SMOOTH | 1px tan, 16px margins | -- |

STACKING_CHECK: PASS
WORST_CASE_GAP: 89px
RHYTHM_TYPES: 1 (Floor exempt from >= 3 requirement)

## BUILDER DIRECTIVES

### Files to Read FIRST
1. prohibitions.md
2. tokens.css

### Perception Thresholds
[standard table]

### Soul Constraints
[standard list]
```

**Note:** Floor handoff has NO mechanism deployment, NO metaphor, NO zone variation. The builder applies Track 1 component assembly with default design system styling.

---

### D2: Middle Tier Handoff (standard)

```markdown
## BUILD PLAN

TIER: Middle
CONTENT_SOURCE: /path/to/tutorial-getting-started.md
WORD_COUNT: 2,400
CONTENT_TYPE: Prose-dominant
CONTENT_ARC: "Conceptual overview -> step-by-step setup -> verification and next steps"
TC_PHASES_COMPLETED: 0

## ZONE ARCHITECTURE

ZONE_COUNT: 3
PATTERN: CRESCENDO

| Zone | Sections | Temperature | Density | Voice | Weight | Rationale |
|------|----------|-------------|---------|-------|--------|-----------|
| Zone 1 (Overview) | S1-S3 | Warm | Open | Expansive (17px) | Light (h2: 400) | Conceptual introduction needs spacious reading |
| Zone 2 (Steps) | S4-S7 | Neutral | Compressed | Tight (15px) | Heavy (h2: 600) | Step-by-step needs analytical density |
| Zone 3 (Wrap-up) | S8-S10 | Warm | Standard | Standard (16px) | Light (h2: 400) | Resolution needs settled, reflective pace |

## SECTION INVENTORY

| # | Title | Zone | Content Type | Layout | Transition | Elements |
|---|-------|------|-------------|--------|------------|----------|
| S1 | What Is KortAI | Zone 1 | Prose | Single-column | SMOOTH | 3 paragraphs |
| S2 | Why This Matters | Zone 1 | Mixed | Two-column grid | SMOOTH | 2 callouts (info + essence) |
| S3 | Prerequisites | Zone 1 | Prose | Single-column | BRIDGE | 1 paragraph, 1 callout (tip) |
| S4 | Step 1: Install | Zone 2 | Code-dominant | Single-column | SMOOTH | 1 paragraph, 1 code block, 1 callout (gotcha) |
| S5 | Step 2: Configure | Zone 2 | Mixed | Two-column grid | SMOOTH | 1 paragraph, 1 table, 1 code block |
| S6 | Step 3: Verify | Zone 2 | Code-dominant | Single-column | SMOOTH | 2 paragraphs, 1 code block |
| S7 | Troubleshooting | Zone 2 | Mixed | Single-column | BREATHING | 3 callouts (gotcha), 1 table |
| S8 | What You Built | Zone 3 | Prose | Single-column | SMOOTH | 2 paragraphs, 1 pullquote |
| S9 | Next Steps | Zone 3 | Prose | Single-column | SMOOTH | 2 paragraphs, 1 callout (tip) |
| S10 | Resources | Zone 3 | Mixed | Single-column | -- | 1 paragraph, 1 table |

## MECHANISM DEPLOYMENT

DEPLOYMENT_LEVEL: Individual
MECHANISM_COUNT: 10

| Category | Mechanism(s) | Where | CSS Channel | Why |
|----------|-------------|-------|-------------|-----|
| Spatial | #5 Dense/Sparse | Zone 1 (64px pad) vs Zone 2 (32px pad) | Spacing | Tutorial builds from spacious overview to compressed steps |
| Hierarchy | #1 Border-Weight | S3, S7 left borders (3px tan, 4px red) | Border | Prerequisites and troubleshooting need structural containment |
| Hierarchy | #11 Typography Scale | Zone 1 h2 (30px/400) vs Zone 2 h2 (26px/600) | Typography | Zone shift needs perceptible heading contrast |
| Component | #2 2-Zone DNA | All callouts | Border + Background | Label/body split across 4 callout variants |
| Component | #10 Border-Left Signal | S3 callout-tip, S4 callout-gotcha | Border + Accent | Semantic callout differentiation by border color |
| Depth | #7 Zone Backgrounds | All sections | Background | 3-zone warm/cool/warm progression |
| Depth | #16 Drop Cap | S1 only | Typography | Editorial opening for prose-heavy first section |
| Structure | #13 Dark Header | Header | Background + Typography | Proven bookend pattern |
| Structure | #14 Footer Mirror | Footer | Background + Typography | Narrative closure |
| Structure | #18 Data Table | S5, S10 | Border + Typography | Configuration and resource tables |

## TRANSITIONS

| Boundary | Type | Visual Treatment | Bridge Prose |
|----------|------|-----------------|-------------|
| S1 -> S2 | SMOOTH | 1px tan, 16px margins | -- |
| S2 -> S3 | SMOOTH | 1px tan, 16px margins | -- |
| S3 -> S4 | BRIDGE | 2px dark, 24px margins | "With foundations in place, let us begin building." |
| S4 -> S5 | SMOOTH | 1px tan, 16px margins | -- |
| S5 -> S6 | SMOOTH | 1px tan, 16px margins | -- |
| S6 -> S7 | SMOOTH | 1px tan, 16px margins | -- |
| S7 -> S8 | BREATHING | 4px red, 24px margins | "The setup is complete. Let us take stock." |
| S8 -> S9 | SMOOTH | 1px tan, 16px margins | -- |
| S9 -> S10 | SMOOTH | 1px tan, 16px margins | -- |

STACKING_CHECK: PASS
WORST_CASE_GAP: 108px (Breathing: 40px + 24px + 4px + 24px + 32px = 124px -- WAIT, exceeds 120px)

**TC NOTE:** Adjusted Zone 2 padding-bottom to 32px and Breathing divider margin to 20px:
Revised worst case: 32px + 20px + 4px + 20px + 32px = 108px. PASS.

RHYTHM_TYPES: 3 (SMOOTH, BRIDGE, BREATHING). PASS.

## BUILDER DIRECTIVES

### Files to Read FIRST
1. prohibitions.md
2. tokens.css

### Perception Thresholds
[standard table]

### Soul Constraints
[standard list]
```

---

### D3: Ceiling Tier Handoff (full metaphor)

```markdown
## BUILD PLAN

TIER: Ceiling
CONTENT_SOURCE: /path/to/research-synthesis.md
WORD_COUNT: 4,200
CONTENT_TYPE: Prose-dominant
CONTENT_ARC: "Theoretical framework -> evidence synthesis -> practical implications -> philosophical reflection"
TC_PHASES_COMPLETED: 0-5

## ZONE ARCHITECTURE

ZONE_COUNT: 4
PATTERN: METAPHOR-DRIVEN (Geological Core Sample)

| Zone | Sections | Temperature | Density | Voice | Weight | Rationale |
|------|----------|-------------|---------|-------|--------|-----------|
| Zone 1 (Topsoil) | S1-S3 | Warm cream | Open (64px) | Expansive (17px/1.85) | Light (h2: 400) | Surface layer: accessible, inviting, weathered-open |
| Zone 2 (Sediment) | S4-S7 | Warm neutral | Standard (48px) | Standard (16px/1.7) | Standard (h2: 500) | Transitional: compacting under gentle pressure |
| Zone 3 (Bedrock) | S8-S10 | Cool neutral | Compressed (32px) | Tight (15px/1.55) | Heavy (h2: 600) | Deep analytical core: maximum consolidation |
| Zone 4 (Core Sample) | S11-S12 | Warm settled | Standard (48px) | Standard (16px/1.75) | Light (h2: 400) | Reflection: returning to surface with knowledge |

## METAPHOR

NAME: Geological Core Sample
DOMAIN: Sedimentary geology
INTERPRETIVE_DISTANCE: 2 (analogous domain -- geology for confidence levels)
STRUCTURAL_SURVIVAL: 3 (remove labels: spatial compression + color darkening still communicate depth)

### Tension Resolution
PRIMARY_TENSION: Reader needs graduated trust and warmth (Side A) vs system demands austerity and sharp edges (Side B)
RESOLUTION: Geological strata naturally layer warmth (topsoil) and hardness (bedrock) within the same angular, flat structure. The strata ARE both warm and hard.

### Isomorphism Table
| Metaphor Property | Content Property | CSS Expression | Perception Check |
|-------------------|-----------------|---------------|-----------------|
| Strata depth (surface to core) | Confidence gradient (tentative to certain) | Zone backgrounds: #FEF5EB -> #F5EDE2 -> #F8F6F3 -> #FEF7F0 | Can you SEE >= 2 color shifts while scrolling? |
| Consolidation pressure | Analytical density | Padding: 64px -> 48px -> 32px -> 48px | Does Zone 3 FEEL tighter than Zone 1? |
| Mineral hardness | Heading authority | h2 weight: 400 -> 500 -> 600 -> 400 | Do Zone 3 headings look BOLDER? |
| Weathered surface texture | Reading ease | Font-size: 17px -> 16px -> 15px -> 16px | Is Zone 1 text visibly LARGER? |
| Fossil specimens | Key insights | Essence callouts with amber border + display font | Do callouts feel EMBEDDED in the stratum? |
| Core sample width | Reading focus | max-width: 62ch -> 68ch -> 72ch -> 64ch | Does measure feel WIDER in analytical sections? |
| Erosion channels | Section borders | Left borders on S2, S5, S8, S11 (3px/4px alternating) | Can you see border PRESENCE vs ABSENCE rhythm? |

### Builder Warnings
WARNINGS: [W-DEADZONE, W-IMPLICIT]
W-DEADZONE: "Strata transitions MUST be background color shifts, NOT vertical gaps. Max 48px between sections."
W-IMPLICIT: "The reader should FEEL increasing density/consolidation without labels like 'BEDROCK LAYER'. Show through compression, not words."

[... Section Inventory, Mechanism Deployment, Transitions, Builder Directives follow same format as Middle but with more entries and metaphor-driven rationale ...]
```

---

## PART E: HANDOFF ANTI-PATTERNS

These are the failure modes the handoff protocol is designed to prevent:

### Anti-Pattern 1: Conclusion Without Criteria
**LOSSY:** "Sample 2-4 mechanisms from the catalog."
**LOSSLESS:** Mechanism deployment table with per-category selections, deployment locations, CSS channels, and content-fit rationale.
**Detection:** Any handoff field that says "appropriate" or "as needed" instead of a specific value.

### Anti-Pattern 2: Abstract Without Concrete
**LOSSY:** "Express the metaphor through zone backgrounds."
**LOSSLESS:** Isomorphism table row: "Strata depth -> Zone backgrounds: #FEF5EB -> #F5EDE2 -> #F8F6F3 -> Can you SEE >= 2 color shifts?"
**Detection:** Any CSS channel reference without a specific value or value range.

### Anti-Pattern 3: What Without Where
**LOSSY:** "Deploy border-weight gradient encoding."
**LOSSLESS:** "Deploy #1 Border-Weight at S2, S5, S8, S11 (3px tan / 4px red alternating)."
**Detection:** Any mechanism reference without section numbers.

### Anti-Pattern 4: Rule Without Perception Gate
**LOSSY:** "Zone backgrounds must be perceptibly different."
**LOSSLESS:** ">= 10 RGB points between adjacent zones. Can you SEE the shift without a color picker?"
**Detection:** Any perceptual requirement without a numeric threshold AND a visual test question.

### Anti-Pattern 5: Metaphor Without Isomorphisms
**LOSSY:** "Use a geological core sample metaphor."
**LOSSLESS:** 7-row isomorphism table mapping physical properties to CSS expressions to perception checks.
**Detection:** Any metaphor reference without an isomorphism table (Ceiling+ only).

---

## IMPLEMENTATION NOTES

### File Naming Convention
- Build plan: `_build-plan.md` (underscore prefix = not content, not shipped)
- Placed alongside the content source file
- One build plan per page

### Version Control
- Build plans are EPHEMERAL -- they exist for one build cycle
- After the page ships, the build plan is archived (not deleted) for retrospective reference
- If the page needs remediation, the original build plan is the starting point

### Handoff Validation Tool
A programmatic validator should check:
1. All REQUIRED fields present for the declared TIER
2. ZONE_COUNT matches zone table row count
3. Section inventory has >= 2 non-single-column layouts
4. STACKING_CHECK = PASS
5. RHYTHM_TYPES >= 3 (Middle+)
6. INTERPRETIVE_DISTANCE >= 2 (Ceiling+)
7. Isomorphism table has >= 4 rows (Ceiling+)
8. Every isomorphism row has a Perception Check entry (Ceiling+)

This validator runs BEFORE the builder agent is spawned. If it fails, the handoff returns to TC for completion.

---

**END OF HANDOFF PROTOCOL**

**Summary:** The handoff document is a 7-section structured markdown file that preserves corpus findings at every field level. It replaces the 50:1 compression of the master prompt with a ~3:1 compression (337 findings -> ~100 structured fields). Each field is tied to a specific corpus finding, has a defined builder action, and includes a perception gate where applicable. The builder entry protocol ensures completeness verification before building begins, and the reading order ensures constraints are loaded before values, values before techniques.

**Total: ~600 lines. 5 parts (template + preservation audit + entry protocol + tier examples + anti-patterns). Every field has: format, builder action, corpus provenance, and compression loss analysis.**
