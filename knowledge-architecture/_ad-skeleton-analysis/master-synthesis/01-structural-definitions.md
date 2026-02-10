# AD STRUCTURAL DEFINITIONS: Execution-Ready Specification

**Synthesizer:** domain-synthesizer
**Date:** 2026-02-09
**Sources:** 5 files (ad-skeleton-enrichment.md 606L, enrichment-gaps.md 474L, enrichment-audit.md 307L, chain-layers-gaps.md 562L, chain-layers-audit.md 181L)
**Total source lines analyzed:** 2,130

---

## PURPOSE

This section defines WHAT THINGS ARE -- the structural anatomy of AD documents, layers, templates, and conventions. It is the structural counterpart to the skeleton's procedural sections. Agents executing AD must know the SHAPE of what they produce, not just the SEQUENCE of steps.

Core framing (from enrichment-gaps.md GAP-E06, confirmed by enrichment-audit.md): **Enrichment is a DOCUMENT ENGINEERING problem, not a PIPELINE problem.** The skeleton describes operations to perform. This section describes the artifacts those operations produce.

---

## 1. THE 8 ENRICHMENT LAYERS OF A COMPLETE AD EXPLORATION FILE

Every AD exploration HTML file MUST contain all 8 layers. A file missing any layer is INCOMPLETE. This is a binary gate -- no partial credit.

Source: enrichment-gaps.md Section 3.1 (GAP-E06), reconstructed from OD-001 header analysis (75-line RAR + 45-line threading header). Enrichment-audit.md CONFIRMED this reconstruction as accurate and noted the total metadata is ~120 lines (RAR + threading header), not 75.

### Layer 1: Research Application Record (RAR)

**WHAT IT IS:** An HTML comment block at the TOP of the file (lines 1-50+) recording every research finding applied, every anti-pattern avoided, and every spirit violation fixed.

**WHAT IT CONTAINS:**
- Score breakdown: Innovation/Utility/Soul/Execution out of 10 each (total /40)
- Hypothesis statement: The question this exploration answers
- Identity statement: How this exploration maps to OD-F-005 (organizational-axis-density relationship)
- Density pairing declaration: Which density pairing (e.g., PULSE + Z-Pattern) this exploration embodies
- DD source references: Which DD explorations feed this one
- Research applied (original): Finding IDs per citation (R-4-NNN, R-2-NNN, DD-F-NNN, OD-F-NNN)
- Research applied (enrichment): EXT-AXIS-NNN IDs per citation
- Anti-patterns avoided: Finding IDs from anti-patterns/registry.md
- Spirit violations fixed: Specific CSS changes (if any deviation was corrected during build)
- DD-F-006 fractal compliance evidence: 4 scale descriptions showing fractal self-similarity
- OD-F-005 identity compliance statement: How org-density-axis chain manifests

**CONCRETE EXAMPLE (abbreviated from OD-001):**
```html
<!--
  AD-001: Z-Pattern Axis Exploration
  Score: 36/40 (Innovation: 9 | Utility: 9 | Soul: 9 | Execution: 9)
  Hypothesis: Can Z-pattern reading flow organize axis transitions?
  Identity: OD-F-005 maps to Z-Pattern via diagonal emphasis
  Density pairing: PULSE + Z-PATTERN
  DD sources: DD-003 (ISLANDS), DD-006 (FRACTAL)

  Research Applied (v1 enriched):
    - R4-PD015: Z-pattern eye tracking → diagonal content zones
    - R4-ZP003: F-to-Z transition at density boundaries
    - EXT-AXIS-Z-001: Asymmetric padding creates diagonal emphasis
    - EXT-AXIS-Z-002: Alternating full-bleed/constrained sections
    - DD-F-006: Fractal at 4 scales (section/subsection/element/micro)
    - OD-F-AP-001: 3px+ structural borders (Cat 1 system applied)

  Anti-patterns avoided: AP-001 (rounded corners), AP-003 (drop shadows)

  DD-F-006 Fractal Compliance:
    Scale 1 (Page): Z-pattern diagonal across full viewport
    Scale 2 (Section): Mini-Z within each content zone
    Scale 3 (Component): Alternating alignment in callouts
    Scale 4 (Micro): Typography rhythm mirrors Z at line level

  OD-F-005: Organization (Z-reading) creates density shifts at diagonal crossings
-->
```

### Layer 2: Inline Threading Header

**WHAT IT IS:** A SEPARATE HTML comment block (after Layer 1) containing graph-traversal metadata. This is the Layer 8 distributed provenance node for this file.

**WHAT IT CONTAINS (9 structured sections):**
1. File path, Tier classification, Stage identifier, Date
2. WHY THIS EXISTS: 1-2 paragraph context
3. THE QUESTION THIS ANSWERS: The exploration's hypothesis
4. STATUS: Version, audit results, soul compliance status
5. SOUL ALIGNMENT: 5-row table mapping to 5 soul pieces
6. BUILT ON: Dependency table (file paths of inputs)
7. CONSUMED BY: Consumer table (files that reference this)
8. MUST HONOR: Constraints from prior stages
9. Phase 2D light section (if applicable): Parent phase + T1 synthesis link

**CRITICAL DISTINCTION (from chain-layers-audit.md MISSED-3):** The RAR (Layer 1) and the Inline Threading Header (Layer 2) are structurally distinct blocks with DIFFERENT origins. The RAR is created DURING build by the builder agent. The threading header is graph-traversal metadata. They serve different functions: RAR = provenance metadata, Threading Header = dependency graph metadata. Do NOT collapse them into one block.

### Layer 3: LOCKED CSS Layer

**WHAT IT IS:** A `<style id="locked-layer">` block containing ALL convention CSS that builders MUST NOT modify. This is copied verbatim from AD-SOUL-TEMPLATE.html.

**WHAT IT CONTAINS:**
- `:root { ... }` block with ALL locked tokens (copied from AD-CONVENTION-SPEC.md Section 10)
- Base styles: `::selection`, `*:focus-visible`, `.skip-link`, `@media (prefers-reduced-motion)`, `@media print`
- Header styles: Full-bleed dark background, inner wrapper 860px max-width
- Code block styles: Dark theme (#1A1A1A bg), syntax highlighting palette
- Callout styles: 5 accent variants, 4px left border
- Font loading references (Instrument Serif, Inter, JetBrains Mono via Google Fonts)

**BINARY GATE:** `diff` between builder's locked-layer and AD-SOUL-TEMPLATE.html locked-layer = 0 lines changed. ANY modification to the locked layer = FAIL.

**IMPLEMENTATION (from enrichment-audit.md Weakness 1):** The locked layer MUST be in a separate `<style id="locked-layer">` block with the comment `/* DO NOT MODIFY -- any diff here = FAIL */`. This enables PROGRAMMATIC verification via string comparison.

### Layer 4: AXIS CSS Layer

**WHAT IT IS:** A `<style id="axis-layer">` block containing builder-authored CSS for axis-specific layouts. This is the ONLY CSS the builder creates.

**WHAT IT CONTAINS (varies by axis pattern):**
- CSS Grid named areas for axis zones (e.g., `grid-template-areas: "hero hero" "content sidebar"`)
- Flexbox configurations for axis-internal content flow
- Responsive breakpoints for axis transitions
- Axis-specific zone tokens (extending --color-zone-sparse/dense/breathing)
- Axis transition signals (density shift CSS at axis boundaries)

**CONSTRAINTS:**
- All values MUST comply with AD-CONVENTION-SPEC.md axis-specific conventions
- MUST use tokens from the locked :root block (no hardcoded colors, fonts, or spacing)
- MUST NOT duplicate or override any locked-layer property
- If an override is NECESSARY (technical constraint), use the DEVIATION PROTOCOL (see Section 5.5)

**WHY THE SPLIT EXISTS (from enrichment-gaps.md GAP-E04):** OD's template claimed "builders add CONTENT only" but this was false -- axis explorations are inherently CSS-heavy. A Z-Pattern needs different CSS from a Bento Grid. The LOCKED/AXIS split acknowledges this reality while containing the blast radius: builders have full CSS freedom in the axis layer, zero freedom in the locked layer.

### Layer 5: Research Citation Inline Comments

**WHAT IT IS:** HTML comments within the `<body>` at the POINT where a research finding is applied.

**FORMAT:** `<!-- EXT-AXIS-Z-001 applied: asymmetric padding creates diagonal emphasis -->`

**REQUIREMENTS:**
- Every SOUL PASS finding from the research package MUST have at least one citation in the HTML body
- Citations MUST be at the point of application (not grouped at top/bottom)
- Each citation MUST include the finding ID AND a brief description of what it achieves

**ANTI-THEATER MEASURE (from enrichment-gaps.md GAP-E16):** Each research package includes 2-3 SIGNATURE ELEMENTS -- specific CSS/HTML patterns that would ONLY exist if the research finding was genuinely applied. Verifiers check for signature elements, not just comment strings. Example: If EXT-AXIS-Z-001 says "diagonal emphasis through asymmetric padding," the signature element is `padding-left != padding-right` on primary content sections.

### Layer 6: Finding ID Citations at Decision Points

**WHAT IT IS:** HTML comments citing AD-F-NNN finding IDs where the builder makes design decisions that embody stage findings.

**FORMAT:** `<!-- AD-F-AP-001: 3px structural border applied to section divider -->`

**DISTINCTION FROM LAYER 5:** Layer 5 cites RESEARCH input (EXT-AXIS-*, R-4-*, DD-F-*, OD-F-*). Layer 6 cites AD's OWN output findings (AD-F-NNN) -- declarations this exploration generates for downstream stages.

### Layer 7: Version Badge

**WHAT IT IS:** A visual element in the page header showing the enrichment version.

**VALUE:** `v1 enriched` for initial build. Never `v1` alone (that would indicate unenriched build).

**LOCATION:** Inside the full-bleed dark header, as part of the meta line.

### Layer 8: Fractal Compliance Evidence

**WHAT IT IS:** Structural and visual demonstration that DD-F-006 (fractal self-similarity) is present at 4 scales.

**THE 4 SCALES:**
1. Page level: Overall axis pattern visible in full-page view
2. Section level: Axis pattern echoed within each major section
3. Component level: Axis pattern reflected in callout/card/element layout
4. Micro level: Typography rhythm or spacing that mirrors the axis pattern

**WHERE DOCUMENTED:** In the RAR (Layer 1) as explicit scale descriptions AND visible in the HTML structure itself.

---

## 2. THE LOCKED/AXIS TEMPLATE SPLIT

Source: enrichment-gaps.md GAP-E04, enrichment-audit.md Weakness 1 (implementation detail added).

### 2.1 What AD-SOUL-TEMPLATE.html Contains

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AD-NNN: [Exploration Name]</title>
  <link href="[Google Fonts: Instrument Serif, Inter, JetBrains Mono]" rel="stylesheet">

  <style id="locked-layer">
    /* ========================================
       LOCKED LAYER — DO NOT MODIFY
       Any diff between this block and AD-SOUL-TEMPLATE.html = BUILD FAIL
       ======================================== */
    :root {
      /* Locked palette */
      --color-primary: #E83025;
      --color-bg-dark: #1A1A1A;
      --color-bg-light: #FAFAF5;
      /* ... all tokens from AD-CONVENTION-SPEC.md Section 10 ... */

      /* Locked typography */
      --font-display: 'Instrument Serif', serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --type-page: 2.5rem;
      --type-section: 1.625rem;
      --type-subsection: 1.375rem;
      --type-body: 1rem;
      --type-small: 0.875rem;
      --type-meta: 0.75rem;

      /* Locked spacing */
      --space-1: 0.25rem;
      /* ... through --space-20 ... */

      /* Locked geometry */
      /* border-radius: 0 enforced globally */
      /* box-shadow: none enforced globally */
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    *:where(:not(input, button, select)) { border-radius: 0; }

    ::selection { background: var(--color-primary); color: white; }
    *:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }

    .skip-link {
      position: absolute; left: -9999px;
      /* ... full skip-link styles ... */
    }
    .skip-link:focus { left: 0; /* ... */ }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; }
    }

    /* Header styles (full-bleed dark) */
    header { background: var(--color-bg-dark); color: var(--color-bg-light); }
    .header-inner { max-width: 860px; margin: 0 auto; /* ... */ }

    /* Code block styles */
    pre, code { font-family: var(--font-mono); }
    pre { background: var(--color-bg-dark); color: var(--color-bg-light); /* ... */ }

    /* Callout styles */
    .callout { border-left: 4px solid; /* 5 accent variants */ }

    @media print { /* print styles */ }
  </style>

  <style id="axis-layer">
    /* ========================================
       AXIS LAYER — Builder modifies this block
       Must comply with AD-CONVENTION-SPEC.md axis conventions
       Must use tokens from :root (no hardcoded values)
       ======================================== */

    /* Grid/Flex layout for [axis pattern name] */
    /* Responsive breakpoints for axis transitions */
    /* Axis-specific zone definitions */
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>

  <header>
    <div class="header-inner">
      <div class="meta-line">
        <span class="version-badge">v1 enriched</span>
        <!-- meta information -->
      </div>
      <h1><!-- Exploration title --></h1>
      <p class="subtitle"><!-- Subtitle --></p>
    </div>
  </header>

  <main id="main-content">
    <!-- Builder: add content sections here -->
    <!-- Each section must cite research findings at point of application -->
  </main>

  <!-- Provenance comment: AD-NNN built from AD-SOUL-TEMPLATE.html -->
</body>
</html>
```

### 2.2 What Goes in LOCKED vs AXIS

| Property Domain | Layer | Modifiable? | Examples |
|----------------|-------|-------------|---------|
| Color palette | LOCKED | NO | All --color-* tokens |
| Font families | LOCKED | NO | --font-display, --font-body, --font-mono |
| Type scale | LOCKED | NO | --type-page through --type-meta |
| Spacing tokens | LOCKED | NO | --space-1 through --space-20 |
| Geometry (border-radius, box-shadow) | LOCKED | NO | border-radius: 0, box-shadow: none |
| Border system (Cat 1/2/3) | LOCKED | NO | 3px+ structural, 1px data/micro, 2px BANNED |
| Base styles (selection, focus, skip-link) | LOCKED | NO | ::selection, :focus-visible, .skip-link |
| Header (full-bleed dark) | LOCKED | NO | header background, .header-inner max-width |
| Code blocks (dark theme) | LOCKED | NO | pre background, syntax colors |
| Callout styles | LOCKED | NO | .callout border-left, accent variants |
| Print + reduced-motion | LOCKED | NO | @media print, @media (prefers-reduced-motion) |
| Grid layout (named areas, fr units) | AXIS | YES | grid-template-areas, grid-template-columns |
| Flexbox configurations | AXIS | YES | flex-direction, align-items, justify-content |
| Responsive breakpoints | AXIS | YES | @media queries for axis transitions |
| Axis zone tokens | AXIS | YES | --axis-primary-zone, --axis-secondary-zone |
| Axis transition signals | AXIS | YES | Density shift CSS at axis boundaries |
| Section-specific layout overrides | AXIS | YES | Per-section grid/flex variations |

### 2.3 The max-width Override Question

**CONTRADICTION (from enrichment-audit.md Weakness 1, line 174):** The locked layer sets `.header-inner { max-width: 860px }`. But a Bento Grid exploration might need a different max-width for its content grid.

**RESOLUTION:** The locked layer controls the HEADER max-width (860px, immutable). The axis layer controls the CONTENT max-width (within `<main>`). The axis layer MAY set `main { max-width: [value] }` different from 860px. This is not an override of the locked layer because they target different elements.

If a builder genuinely needs to override a locked-layer value on a locked-layer element, they MUST use the DEVIATION PROTOCOL (Section 5.5).

---

## 3. THE 9 FUNCTIONAL LAYERS OF THE PROVENANCE CHAIN

Source: chain-layers-gaps.md Section 1 (full layer architecture), chain-layers-audit.md verification (confirmed with 2 corrections).

**NOTE:** The analyst labeled these as "8 layers" but there are actually 9 functional levels (0, 1, 2, 2.5, 3, 4, 5, 6, 7, 8). Per chain-layers-audit.md ISSUE 2: the count discrepancy is cosmetic, not structural.

### Layer 0: Meta-Architecture (The Map of the Map)

**Purpose:** Describes the chain itself. The only self-referential layer. Updated by EVERY stage.

| File | Location | Function |
|------|----------|----------|
| PIPELINE-MANIFEST.md | DESIGN-SYSTEM/provenance/ | Master finding registry, lifecycle tracking, cross-reference index (Section E) |
| BACKBONE.md | DESIGN-SYSTEM/ | Master narrative of entire pipeline |
| provenance/CLAUDE.md | DESIGN-SYSTEM/provenance/ | Navigation file, layer description |
| DESIGN-SYSTEM/CLAUDE.md | DESIGN-SYSTEM/ | "THE KORTAI DESIGN MIND" entry point |

**AD UPDATE REQUIREMENTS:**
- PIPELINE-MANIFEST: Add AD-F entries to Section B, update R-4 status in Section A, add AD cross-references to Section E
- BACKBONE: Update Stage 4 from PENDING to COMPLETE with narrative
- provenance/CLAUDE.md: Update stage-4 status
- DESIGN-SYSTEM/CLAUDE.md: Add AD entry to "I want to..." table

**PRE-AD HOUSEKEEPING (from chain-layers-audit.md MISSED-1, CRITICAL):** BACKBONE.md says "R-2: Creative Layouts (78)" at TWO locations (lines 85 and 311). The correct count is 27 (per PIPELINE-MANIFEST, corrected during comprehensive audit). This cross-Layer-0 inconsistency MUST be fixed before AD starts. An agent reading BACKBONE first would get R-2=78; an agent reading PIPELINE-MANIFEST first would get R-2=27. Both are Layer 0 documents and MUST agree.

### Layer 1: Soul + Identity (Immutable Foundations)

**Purpose:** Defines what CANNOT change. The DNA of the system.

| File | Location | Function |
|------|----------|----------|
| SOUL-DISCOVERIES.md | DESIGN-SYSTEM/provenance/ | 5 soul pieces as perceptual truths (SYNCED DUPLICATE of checkpoints/) |
| ACCUMULATED-IDENTITY-v1.1.md | knowledge-architecture/ | Full inherited mind (577 lines) |
| tokens/geometry.md | DESIGN-SYSTEM/tokens/ | border-radius: 0, box-shadow: none LOCKED |
| tokens/colors.md | DESIGN-SYSTEM/tokens/ | Locked palette |
| tokens/typography.md | DESIGN-SYSTEM/tokens/ | Font trio locked |
| tokens/spacing.md | DESIGN-SYSTEM/tokens/ | Spacing tokens locked |

**LOCATION ANOMALY (from chain-layers-gaps.md GAP-CL-02):** ACCUMULATED-IDENTITY-v1.1.md lives in knowledge-architecture/, NOT in DESIGN-SYSTEM/provenance/. This is architecturally anomalous. ACCUMULATED-IDENTITY-v2.md SHOULD live in DESIGN-SYSTEM/provenance/ with a reference from knowledge-architecture/.

**STALE REFERENCE (from chain-layers-audit.md MISSED-2):** stage-4-axis-ad/CLAUDE.md references "ACCUMULATED-IDENTITY-v1.md" (lines 46 and 66), not v1.1. This MUST be corrected before AD starts.

**AD EVOLUTION:** ACCUMULATED-IDENTITY evolves from v1.1 to v2 during AD. SOUL-DISCOVERIES gets a Stage 4 determination entry.

### Layer 2: Original Research (External Input)

**Purpose:** Raw research that feeds the pipeline. Written ONCE, consumed repeatedly, NEVER modified.

| File | Finding Count | Primary Consumer |
|------|--------------|-----------------|
| R1-DOCUMENTATION-PATTERNS.md | 28 | OD (primary) |
| R2-CREATIVE-LAYOUTS.md | 27 (NOT 78 -- see Layer 0 housekeeping) | OD + AD |
| R3-DENSITY-DIMENSIONS.md | 51 | DD (primary) |
| R4-AXIS-INNOVATIONS.md | 192 | AD (primary) |
| R5-COMBINATION-THEORY.md | 39 | CD (primary) |
| RESEARCH-SYNTHESIS.md | -- | Cross-research |

**Total:** 337 findings. AD's primary source is R-4 (192 findings, 7x larger than R-2's 27).

### Layer 2.5: Research Application Tracking (Status Bridge)

**Purpose:** Tracks which research has been applied and where. Bridge between raw research and stage outputs.

| File | Location | Function |
|------|----------|----------|
| RESEARCH-ACTIVE.md | DESIGN-SYSTEM/provenance/ | Per-finding application status (SYNCED DUPLICATE of checkpoints/) |
| EXT-RESEARCH-REGISTRY.md | DESIGN-SYSTEM/provenance/ | Registry of 94 bespoke external findings |

**AD ADDITIONS:**
- RESEARCH-ACTIVE: R-4 application rates, EXT-AXIS-* entries
- EXT-RESEARCH-REGISTRY: New EXT-AXIS-* category with 36-72 findings (targeting 6-12 per exploration)
- R-4-AD-EVALUATION.md: NEW file mapping all 192 R-4 findings to AD explorations (similar to OD's r2-evaluation.md)
- r2-ad-mapping.md: R-2 findings evaluated for AD applicability

### Layer 3: Per-Stage Infrastructure (Stage Scaffolding)

**Purpose:** Structural documents for each pipeline stage. Created in Phase 0, finalized at stage end.

| Document Type | AD Instance | OD Analog |
|---------------|-------------|-----------|
| STAGE-HEADER.md | stage-4-axis-ad/ | stage-3-organization-od/ |
| CLAUDE.md | stage-4-axis-ad/ | stage-3-organization-od/ |
| RESEARCH-GATE.md | AD-RESEARCH-GATE.md | OD-RESEARCH-GATE.md |
| CONVENTION-SPEC.md | AD-CONVENTION-SPEC.md | OD-CONVENTION-SPEC.md |

**YAML FRONTMATTER:** STAGE-HEADER.md MUST include `predecessor: provenance/stage-3-organization-od/STAGE-HEADER.md` and `successor: provenance/stage-5-combination-cd/STAGE-HEADER.md` for chain traversal.

### Layer 4: Stage Findings (The Output)

**Purpose:** Formal declarations of what each stage discovered. The outbound chain.

| File | Location | Function |
|------|----------|----------|
| AD-outbound-findings.md | stage-4-axis-ad/ | AD-F-001 through AD-F-NNN |

**YAML FRONTMATTER:** MUST include `predecessor: provenance/stage-3-organization-od/OD-outbound-findings.md` and `successor: provenance/stage-5-combination-cd/CD-outbound-findings.md`.

**Reserved ID ranges** prevent the OD-F-005 collision problem. Each builder has a non-overlapping range assigned in Phase 0.

### Layer 5: Stage Synthesis (Cross-Exploration Analysis)

**Purpose:** What the stage learned ACROSS all explorations. Written post-build. CANNOT be incremental -- requires all explorations to exist.

| File | Function |
|------|----------|
| AD-SYNTHESIS.md | Cross-AD analysis (patterns, tensions, common findings) |
| AD-AUDIT-SYNTHESIS.md | Adversarial audit record |

### Layer 6: Pattern Catalogs (Validated Outputs)

**Purpose:** Validated patterns consumable by downstream stages AND migration.

| File | Location | Function |
|------|----------|----------|
| axis-patterns.md | DESIGN-SYSTEM/patterns/ | 6 axis patterns |
| PATTERN-INDEX.md | DESIGN-SYSTEM/patterns/ | Master index (MUST add axis entry) |
| anti-patterns/registry.md | DESIGN-SYSTEM/anti-patterns/ | MUST add AD-F-AP-NNN entries |
| combination-rules.md | DESIGN-SYSTEM/patterns/ | MAY need axis-combination constraints |

**NOTE (from chain-layers-gaps.md GAP-CL-06):** axis-patterns.md goes in DESIGN-SYSTEM/patterns/ (NOT in provenance/). It follows density-patterns.md and organizational-patterns.md.

### Layer 7: Handoff Documents (Stage Transitions)

**Purpose:** Gate files that transfer everything from one stage to the next. Live in the OUTGOING stage's directory.

| File | Location | Function |
|------|----------|----------|
| HANDOFF-AD-TO-CD.md | stage-4-axis-ad/ | AD->CD gate with acknowledgment protocol |

### Layer 8: Distributed Provenance (Per-File Metadata)

**Purpose:** Every source file is a node in a traversal graph.

| Sub-Layer | Scope | Function |
|-----------|-------|----------|
| Inline Threading Headers | All AD files | WHY/QUESTION/STATUS/SOUL/BUILT-ON/CONSUMED-BY |
| Light Provenance Sections | All AD support files | Parent phase + T1 synthesis link |
| Exploration HTML Headers | 6 AD exploration files | 120+ line headers with RAR + threading (TWO DISTINCT BLOCKS per chain-layers-audit.md MISSED-3) |

---

## 4. CONVENTION LIFECYCLE: DRAFT --> VALIDATE --> FROZEN

Source: enrichment-gaps.md GAP-E02, enrichment-audit.md Section 5 (retrospective validation addition), enrichment-audit.md Section 6 (T2->T1 promotion).

### 4.1 The Two-Phase Convention Lifecycle

**WHY NEEDED:** OD's convention spec was written AFTER the audit -- extracted from empirically validated artifacts. AD's convention spec is written BEFORE any exploration exists. Freezing untested axis-geometry conventions risks locking in wrong decisions.

**Evidence (enrichment-gaps.md lines 61-65):** OD-001 had 5 "spirit violations" fixed in v3 -- semi-transparent offsets, type scale corrections, code block color, header background, border eliminations. These are CONVENTION-LEVEL fixes discovered during enrichment, not content fixes. If AD freezes its convention spec immediately, equivalent discoveries cannot be incorporated.

**LIFECYCLE:**

```
Phase 0: DRAFT Convention Spec
  - Convention Agent writes AD-CONVENTION-SPEC.md
  - Every value labeled DRAFT or INHERITED
  - INHERITED values (from OD-CONVENTION-SPEC.md): immediately authoritative
  - DRAFT values (axis-specific additions): provisional, subject to validation
  - Header: "STATUS: PROVISIONAL -- DRAFT values subject to revision after Wave 1A"

After Wave 1A Completion: VALIDATE
  - Convention Agent (or Lead) reviews Wave 1A builder output
  - For each DRAFT value:
    - If builder confirmed in practice → promote to VALIDATED
    - If builder deviated with justification → revise the value
    - If builder encountered problems → flag for discussion
  - T2 values confirmed by builder output promoted to T1:
    "T1 (validated by AD-001, convention confirmed in practice)"
  - T2 values contradicted by builder output: revised or removed

After Wave 1B Completion: FROZEN
  - ALL remaining DRAFT values either VALIDATED or REMOVED
  - Header: "STATUS: FROZEN -- all values validated against built artifacts"
  - No further modifications permitted (except via DEVIATION PROTOCOL)
```

### 4.2 Convention Value Classification

Every value in AD-CONVENTION-SPEC.md MUST be labeled with THREE attributes:

1. **T1 or T2** (provenance):
   - T1: Research-backed, cites a specific finding ID (R-N-NNN, DD-F-NNN, OD-F-NNN, EXT-AXIS-NNN)
   - T2: Convention/agent-authored, rationale documented

2. **INHERITED or AD-SPECIFIC** (origin):
   - INHERITED: From OD-CONVENTION-SPEC.md (cite section number)
   - AD-SPECIFIC: New for axis explorations

3. **FROZEN or DRAFT** (lifecycle state, Phase 0 only):
   - FROZEN: Inherited values (already validated by OD) or values immediately verifiable
   - DRAFT: New axis-specific values awaiting builder validation

**EXAMPLE:**
```
--type-page: 2.5rem (T1: DD-F-002 | INHERITED: OD-CONV Section 5 | FROZEN)
grid-template-areas: "hero hero" "content sidebar" (T2: CONVENTION -- agent-authored, rationale: Z-pattern requires 2x2 grid | AD-SPECIFIC | DRAFT)
```

### 4.3 Calibration Gate (T1/T2 Labeling Verification)

```
AD CALIBRATION GATE (applied to AD-CONVENTION-SPEC.md):
[ ] 1. Every value is labeled T1 or T2
[ ] 2. Every T1 value cites a finding ID that EXISTS in the provenance chain
[ ] 3. Every T2 value has a documented rationale (1 sentence minimum)
[ ] 4. Every T2 value is marked "CONVENTION: agent-authored"
[ ] 5. No UNLABELED values exist (FAIL if any value lacks T1/T2 label)
[ ] 6. Every value has INHERITED/AD-SPECIFIC label
[ ] 7. Every value has FROZEN/DRAFT lifecycle state
```

### 4.4 Convention Agent Input Specification

Source: enrichment-gaps.md GAP-E01 (CRITICAL -- Convention Agent inputs unspecified).

**THE PROBLEM:** The skeleton says "Convention Agent writes AD-CONVENTION-SPEC.md" but doesn't list WHAT the Convention Agent reads. OD's convention spec was written AFTER 89 audit findings had been cataloged and 3 quality dialects identified. AD writes conventions BEFORE building -- there are no audit findings yet.

**CONVENTION AGENT INPUT FILES (EXPLICIT, ORDERED):**
1. OD-CONVENTION-SPEC.md (468 lines) -- INHERITED base, copy ALL sections
2. HANDOFF-OD-TO-AD.md -- transition requirements, transitive chain (org->density->axis)
3. ACCUMULATED-IDENTITY-v1.1.md -- what the system IS
4. R-4-AXIS-INNOVATIONS.md -- 192 findings, but distinguish: which inform CONVENTIONS (Grid patterns, zone tokens) vs CONTENT (specific axis techniques)
5. anti-patterns/registry.md -- what to avoid
6. tokens/ directory (geometry, colors, typography, spacing) -- locked values
7. OD-001 through OD-006 HTML files (headers only) -- how enrichment manifests in practice

**CONSTRAINT FOR AXIS-SPECIFIC ADDITIONS:** Distinguish between:
- STRUCTURAL conventions (Grid vs Flexbox rules, zone token names): These ARE design decisions -- mark T2 with rationale
- INHERITED conventions (soul, palette, borders): Copy from OD, mark T1 with source finding IDs

---

## 5. TEMPLATE AND CONVENTION ENFORCEMENT

### 5.1 AD-CONVENTION-SPEC.md Structure

**FORMAT:** Standalone document (all values present, not referencing OD spec for base values). Target: 500-700 lines (300-500 inherited from OD + 200 AD-specific).

**SECTIONS (inheriting OD structure + AD additions):**
1. Soul Compliance Checklist (10 items, INHERITED)
2. Border System (3 categories, INHERITED)
3. Dark Code Block Theme (INHERITED)
4. Full-Bleed Dark Header Layout (INHERITED)
5. Type Scale (INHERITED)
6. Dual Spacing System (INHERITED)
7. Color Application Table (INHERITED)
8. Page Length Target (INHERITED)
9. Intentional Divergences (AD-specific -- analogous to OD's OD-006 divergences)
10. Unified :root Block (INHERITED base + AD additions)
11. Required Base Styles (INHERITED)
12. **NEW: CSS Grid Patterns** (AD-specific -- named grid areas, fr unit conventions, responsive breakpoints)
13. **NEW: Flexbox Configurations** (AD-specific -- when to use flex vs grid, alignment defaults)
14. **NEW: Axis Zone Tokens** (AD-specific -- extending --color-zone-sparse/dense/breathing)
15. **NEW: Axis Transition Signals** (AD-specific -- density shift CSS)
16. **NEW: Per-Standard Soul Test Results** (AD-specific additions tested through 3-gate protocol)

**INHERITANCE LABELS:** Each inherited section MUST include: `INHERITED FROM: OD-CONVENTION-SPEC.md Section {N}`. Each AD-specific section MUST include: `AD-SPECIFIC: added for axis explorations`.

**DIFF SECTION (end of document):** "VALUES CHANGED FROM OD" listing any OD values modified for axis needs, with rationale.

### 5.2 Convention Validation Gates

**Gate 0-06a:** AD-CONVENTION-SPEC.md exists, >= 500 lines (adjusted from skeleton's 300 to account for standalone format).

**Gate 0-06b (from enrichment-gaps.md GAP-E03):** AD-SOUL-TEMPLATE.html renders with correct :root values. PROGRAMMATIC verification via Playwright:
- All --type-* computed values match convention spec
- All --color-* computed values match convention spec
- All --space-* computed values match convention spec
- Computed border-radius === "0px" on ALL elements
- Computed box-shadow === "none" on ALL elements

**Gate 0-07:** All values labeled T1/T2 + INHERITED/AD-SPECIFIC + FROZEN/DRAFT.

### 5.3 Post-Audit Convention Staleness Check

Source: enrichment-gaps.md GAP-E11, enrichment-audit.md MISSED-4.

**THE PROBLEM:** OD-CONVENTION-SPEC.md was written during Wave 0 of re-enrichment (per file manifest). The comprehensive audit (commit 71dc02c) happened AFTER re-enrichment. 10 Critical/High fixes were applied that may not be reflected in the convention spec:
- rgba opacity cleanup
- R-2 count correction (78 to 27)
- EXT-* count correction (69 to 94)
- DD code block palette alignment
- Skip-link/focus-visible fixes
- Inline code font-size changes
- Off-palette background removal
- Stale metadata correction

**BEFORE AD Phase 0:** Verify OD-CONVENTION-SPEC.md reflects ALL post-audit fixes. Cross-reference each of the 10 Critical/High fixes against the convention spec and update any stale values. **Estimated effort: 30-45 minutes** (enrichment-audit.md MISSED-4 corrects the enrichment-gaps.md estimate of 15 minutes).

### 5.4 Weaver Convention Drift Detection Protocol

Source: enrichment-audit.md MISSED-3.

**AFTER EACH BUILDER COMPLETION, THE WEAVER SHALL:**
1. Read builder's AD-NNN.html `<style id="locked-layer">` block
2. Diff against AD-SOUL-TEMPLATE.html `<style id="locked-layer">` block
3. Any LOCKED value that differs = CONVENTION DRIFT → flag to Lead immediately
4. Read builder's `<style id="axis-layer">` block
5. Check axis values against AD-CONVENTION-SPEC.md axis sections (12-16)
6. Any axis value that uses hardcoded colors/fonts/spacing (not tokens) = CONVENTION VIOLATION → flag
7. Check for DEVIATION PROTOCOL comments if any override is detected
8. Write drift check result to AD-BUILD-STATE.md

### 5.5 Deviation Protocol

Source: enrichment-gaps.md GAP-E05.

**WHEN A BUILDER NEEDS TO DEVIATE FROM CONVENTION:**
```
1. STOP building
2. Document deviation in HTML comment:
   <!-- DEVIATION: [what is being overridden]
        REASON: [why the override is necessary]
        CONVENTION: [what the spec says]
        CLASSIFICATION: INTENTIONAL | NECESSARY -->
3. INTENTIONAL (editorial choice): Requires Lead approval via SendMessage BEFORE proceeding
4. NECESSARY (technical constraint): Proceed, document in completion report, Weaver flags for review
5. All deviations logged in AD-BUILD-STATE.md DEVIATION TRACKER
```

**PRECEDENT:** OD-006 had 5 intentional divergences documented in OD-CONVENTION-SPEC.md Section 9 as "INTENTIONAL and MUST NOT be unified." AD-006 (Compound) will likely need similar divergences. The protocol formalizes what was informal in OD.

---

## 6. CONVENTION BOTTLENECK: THE 1-AGENT PROPAGATION PROBLEM

Source: ad-skeleton-enrichment.md Section 1.1, enrichment-gaps.md GAP-E01/E02, ad-skeleton-synthesis.md (referenced in enrichment-gaps.md).

### 6.1 The Problem

One Convention Agent makes unsupervised decisions (T2 values) that propagate 6x:
- Convention Agent writes AD-CONVENTION-SPEC.md with T2 axis values
- AD-SOUL-TEMPLATE.html embeds those values
- 6 builders copy the template
- If a T2 value is WRONG, 6 explorations inherit the error
- Fixing requires modifying 6 files (the re-enrichment problem AD is supposed to prevent)

**PROPAGATION MATH:** 1 wrong T2 decision x 6 builders x ~3 CSS properties per decision = ~18 CSS fixes if the convention is wrong. This is OD's 43-agent re-enrichment problem in miniature.

### 6.2 The Solution: Two-Phase Lifecycle + LOCKED/AXIS Split + Convention Auditor

**Three-part mitigation:**

1. **Two-phase lifecycle (Section 4.1):** T2 values start as DRAFT, validated after Wave 1A, frozen after Wave 1B. Wrong decisions caught after 1-2 explorations, not 6.

2. **LOCKED/AXIS split (Section 2):** Convention errors in the LOCKED layer would be catastrophic (6x propagation). But LOCKED values are INHERITED (T1, already validated by OD). Convention errors in the AXIS layer are per-builder (limited blast radius because each builder writes their own axis CSS).

3. **Convention Auditor (highest-leverage single addition):** Before the Convention Agent's output is approved, a SEPARATE agent audits the convention spec:
   - Verifies all T1 citations trace to real findings
   - Checks all T2 rationales are coherent
   - Validates the template renders correctly (Playwright)
   - Confirms INHERITED values match OD-CONVENTION-SPEC.md exactly
   - Estimated ROI: 20:1 (30-min auditor prevents potential 6x error propagation)

**GATE:** Convention spec + template + binary gates ALL reviewed by Convention Auditor before Wave 1 starts. This is the single most important gate in the entire AD lifecycle.

---

## 7. SCRIBE OPERATIONS: COMPLETE TARGET ENUMERATION

Source: enrichment-gaps.md GAP-E07, enrichment-audit.md Error 1 (scribe role conflation correction).

### 7.1 Two Types of Scribes

**CRITICAL DISTINCTION (from enrichment-audit.md Error 1):** OD had TWO scribe roles that the enrichment analyst conflated:

**BUILD SCRIBES (Wave 1-N, after each builder batch):**
| Operation | Target File | What Changes |
|-----------|-------------|-------------|
| Register EXT-AXIS-* findings | EXT-RESEARCH-REGISTRY.md | New EXT-AXIS category + findings table |
| Update research tracking | RESEARCH-ACTIVE.md | Application rates, new citations |
| Update research gate | AD-RESEARCH-GATE.md | R-4 finding-by-finding mapping status |
| Update exploration status | AD-NNN.html (STATUS line in Layer 2 header) | "v1 enriched" + current status |
| Update outbound findings | AD-outbound-findings.md | New AD-F entries if builder discovered any |
| Update build state | AD-BUILD-STATE.md | Wave status, agent completion, finding IDs |

**AUDIT SCRIBES (Wave N+2, after adversarial audit):**
| Operation | Target File | What Changes |
|-----------|-------------|-------------|
| Update audit synthesis | AD-AUDIT-SYNTHESIS.md | Findings summary, per-AD soul compliance matrix |
| Update outbound findings | AD-outbound-findings.md | Post-audit findings section |
| Update state | AD-BUILD-STATE.md | Audit status, fix tracking |
| Update exploration status | AD-NNN.html (STATUS line) | Audit results, fix version |
| Update pipeline manifest | PIPELINE-MANIFEST.md | AD-F entries, audit metadata |
| Update CLAUDE.md manifest | _ad-execution/CLAUDE.md | File manifest updates |

### 7.2 Finding ID Collision Prevention

The Weaver maintains a FINDING ID TRACKER in AD-BUILD-STATE.md:
```
FINDING ID TRACKER:
  EXT-AXIS-*: last assigned EXT-AXIS-036 (by Scribe Wave 1A)
  AD-F-*: last assigned AD-F-007 (by Builder-002)
  AD-F-AP-*: last assigned AD-F-AP-003 (by Builder-001)

  RESERVED RANGES:
  Builder-001: AD-F-001 through AD-F-020
  Builder-002: AD-F-021 through AD-F-040
  Builder-003: AD-F-041 through AD-F-060
  [etc.]
```

Each Scribe reads the tracker BEFORE assigning new IDs. Each Scribe updates the tracker AFTER registering findings. This prevents the OD-F-005 collision.

---

## 8. BUILD TOOLS vs CHAIN DOCUMENTS

Source: chain-layers-gaps.md GAP-CL-04, chain-layers-audit.md verification (confirmed valid).

### 8.1 Classification

Every file proposed by the skeleton is classified as either CHAIN (permanent, part of the provenance layer architecture) or BUILD (ephemeral, supports the build process). They have DIFFERENT storage locations and DIFFERENT metadata requirements.

**CHAIN DOCUMENTS (go in DESIGN-SYSTEM/provenance/stage-4-axis-ad/):**
| File | Layer | YAML Frontmatter Required? |
|------|-------|---------------------------|
| STAGE-HEADER.md | 3 | YES (predecessor/successor) |
| AD-CONVENTION-SPEC.md | 3 | YES |
| AD-RESEARCH-GATE.md | 3 | YES |
| AD-outbound-findings.md | 4 | YES (predecessor/successor) |
| AD-SYNTHESIS.md | 5 | YES |
| AD-AUDIT-SYNTHESIS.md | 5 | YES |
| HANDOFF-AD-TO-CD.md | 7 | YES |
| ACCUMULATED-IDENTITY-v2.md | 1 | YES |
| axis-patterns.md | 6 (in DESIGN-SYSTEM/patterns/) | YES |

**BUILD TOOLS (go in knowledge-architecture/_ad-execution/):**
| File | Purpose | Inline Threading Header Required? |
|------|---------|----------------------------------|
| AD-SOUL-TEMPLATE.html | Pre-populated HTML skeleton | YES |
| AD-BINARY-GATES.md | 10-item builder self-check | YES |
| AD-BUILD-STATE.md | Weaver's state tracking | YES |
| research-package-ad-{1-6}.md | Per-builder research packages | YES |
| identity-delta-ad-wave{N}.md | Identity evolution documents | YES |
| R-4-AD-EVALUATION.md | R-4 mapping to AD explorations | YES |
| r2-ad-mapping.md | R-2 applicability assessment | YES |
| verification-wave{N}.md | Per-wave gate verification | YES |
| screenshots/ | Visual evidence (before/after) | NO (binary files) |

**KEY RULE:** Chain documents get YAML frontmatter with predecessor/successor links for traversal. Build tools get inline threading headers (WHY/STATUS/BUILT-ON/CONSUMED-BY) for dark matter prevention. Both types are tracked in _ad-execution/CLAUDE.md file manifest.

### 8.2 CLAUDE.md Navigation Mesh Updates

Source: chain-layers-gaps.md GAP-CL-03, chain-layers-audit.md Section 1.3 (confirmed valid).

**5 CLAUDE.md files requiring AD-related updates:**

1. `DESIGN-SYSTEM/CLAUDE.md` -- Add AD entry to "I want to..." table: "Start AD work -> HANDOFF-OD-TO-AD.md"
2. `DESIGN-SYSTEM/provenance/CLAUDE.md` -- Update stage-4 from PENDING to IN PROGRESS/COMPLETE
3. `DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md` -- Full population (exists with 99 lines, has MANDATORY ENFORCEMENT GATE, but references v1 not v1.1 -- FIX REQUIRED per chain-layers-audit.md MISSED-2)
4. `DESIGN-SYSTEM/explorations/axis/CLAUDE.md` -- CREATE (does not exist yet per chain-layers-audit.md Section 3.2)
5. `DESIGN-SYSTEM/explorations/CLAUDE.md` -- Add AD row

---

## 9. RESEARCH PACKAGE FORMAT SPECIFICATION

Source: enrichment-audit.md MISSED-1 (HIGH gap the enrichment analyst missed), ad-skeleton-enrichment.md Section 3.1 (template structure).

### 9.1 What a Research Package Contains

Every AD exploration gets a dedicated research package (200-430 lines) written by a Researcher agent BEFORE the Builder starts. This is the Builder's PRIMARY input alongside the soul template and convention spec.

**REQUIRED SECTIONS:**

```
1. CHAIN TRAVERSAL (10-20 lines)
   - Minimum 3 links deep through provenance chain
   - Path: ACCUMULATED-IDENTITY -> OD-outbound-findings -> DD-outbound-findings -> original research
   - Emergent insight: what I learned NOT in the compiled identity

2. R-4 APPLICABLE (15-30 lines)
   - Specific R-4 findings with per-finding application guidance
   - Each finding: ID, summary, specific CSS/HTML technique, soul test result
   - Not just "apply R4-PD015" but "R4-PD015: Z-pattern eye tracking → implement as diagonal content zones using CSS Grid with 2-column asymmetric layout"

3. R-2 APPLICABLE (5-10 lines)
   - Specific R-2 findings with AD targets
   - Cross-referenced against r2-ad-mapping.md

4. UNAPPLIED OD-F / DD-F EVALUATION (10-20 lines)
   - Per-finding: APPLICABLE / NOT APPLICABLE / CONDITIONALLY APPLICABLE
   - Application guidance for applicable findings

5. EXT-AXIS-* BESPOKE FINDINGS (20-40 lines)
   - 6-12 newly commissioned external research findings
   - Each with: Finding ID, Summary, Application Guidance, Source URL, Soul Test (Gates 1-3), Gate 4 (Density Pairing), Gate 5 (Identity Tension)
   - SOUL PASS findings: packaged for builder with specific instructions
   - SOUL FAIL findings: documented with exclusion rationale (negative knowledge)

6. SIGNATURE ELEMENTS (5-10 lines)
   - 2-3 specific CSS/HTML patterns that would ONLY exist if research was genuinely applied
   - Verifier checks for these (anti-citation-theater measure)

7. SOUL FAIL SUMMARY (5-10 lines)
   - Count of rejected findings
   - Pattern: what keeps failing and why

8. DISCOVERIES (5-10 lines)
   - Findings that extend or contradict identity
   - Feed generative loop
```

### 9.2 Gate 4/5 Cross-Pollination (Wave 2+ Only)

In Wave 2+ packages, researchers re-evaluate prior wave SOUL FAIL Gate 4/5 findings against THEIR AD's density pairing. A finding that failed Gate 4 for Z-Pattern (wrong density pairing) might PASS for Bento Grid (right density pairing).

---

## 10. DARK MATTER MANAGEMENT

Source: enrichment-gaps.md GAP-E08, ad-skeleton-enrichment.md Section 2.

### 10.1 Prevention Protocol

Every file born in _ad-execution/ MUST have an inline threading header. This is a binary rule in every agent prompt.

### 10.2 Why Prevention Alone Is Insufficient

Source: enrichment-gaps.md GAP-E08 (confirmed by enrichment-audit.md).

OD re-enrichment STILL needed 3 dark matter indexers (not 4 -- per enrichment-audit.md Section 1.5, dm-c never completed) to catalog ~100 files. Dark matter is NOT files without headers. It is files with headers that NO formal chain document references.

**WHAT ACCUMULATES:**
- Working artifact files in _ad-execution/ that no chain document references
- Agent reports containing insights compressed out of formal synthesis
- Screenshots (PNGs have no inline headers)
- State tracking files (operational, not provenance)

### 10.3 The Weaver as Dark Matter Indexer

**AFTER EACH WAVE, THE WEAVER SHALL:**
1. List all files in _ad-execution/
2. For each file: check if it is referenced by at least one formal chain document (Layers 0-7)
3. If NOT referenced: catalog in _ad-execution/CLAUDE.md manifest with: file name, owner agent, purpose, line count, status
4. The CLAUDE.md manifest IS the dark matter index (formalized role)
5. No separate dark matter indexing phase needed IF the manifest is current

---

## 11. IDENTITY EVOLUTION (GENERATIVE LOOP)

Source: ad-skeleton-enrichment.md Section 6, enrichment-gaps.md GAP-E12/E13.

### 11.1 Identity Delta Quality Gate

Source: enrichment-gaps.md GAP-E12 (gate raised from skeleton's ">=1 question" to evidence-based minimum).

**IDENTITY DELTA GATE (after each wave):**
```
[ ] >= 2 surprises (specific, citing finding IDs from THIS wave)
[ ] >= 1 identity refinement (rule change or rule addition)
[ ] >= 1 SOUL FAIL pattern summary (from researcher SOUL FAILs)
[ ] >= 2 questions for next wave (each citing THIS wave's findings + targeting SPECIFIC next-wave AD aspects)
[ ] Total delta: 10-20 lines (not 3-line stub)
```

**OD BENCHMARK:** Wave 1 delta had 4 surprises + 3 refinements + 1 SOUL FAIL summary + 3 questions = 11 substantive elements (per enrichment-audit.md Section 1.8, correcting the enrichment analyst's count of 10).

### 11.2 SOUL FAIL Accumulator

Source: enrichment-gaps.md GAP-E13.

The Weaver maintains a SOUL FAIL ACCUMULATOR in AD-BUILD-STATE.md:
```
SOUL FAIL ACCUMULATOR:
  Wave 1A: N FAILs -- [pattern description]
  Wave 1B: N FAILs -- [pattern description]
  Wave 2A: N FAILs -- [pattern description]
  CUMULATIVE PATTERN: [synthesis across all waves]
  THRESHOLD: If >= 15 accumulated SOUL FAILs share a pattern, elevate to identity finding
```

**OD PRECEDENT:** By Wave 3, the accumulated SOUL FAIL pattern (ANTI-PHYSICAL) became a significant identity discovery. AD should track this systematically.

---

## 12. VERIFICATION INFRASTRUCTURE

### 12.1 Before/After Measurement Baseline

Source: enrichment-audit.md MISSED-2.

AD builds from scratch (no "before" state). But it DOES need a measurement baseline against the TEMPLATE.

**TEMPLATE BASELINE (captured once in Phase 0):**
```
TEMPLATE BASELINE:
  Element count: N (bare template)
  :root token count: N
  Page height: Npx (at 1440px viewport)
  Section count: 0
  Research citations: 0
  Axis CSS lines: 0
```

**POST-BUILD DELTA (per AD exploration):**
```
POST-BUILD DELTA for AD-NNN:
  Element count increase: >= 200 (meaningful content)
  Research citations: >= [minimum from research package]
  Page height: within 10,000-14,000px range
  Axis CSS lines: > 0 (builder DID add axis CSS)
  Signature elements present: [from research package]
```

### 12.2 Per-Wave Verification Report Format

Source: enrichment-gaps.md GAP-E14.

**STANDARDIZED FORMAT (embed in verifier prompt):**
```markdown
# Wave {N} Gate Verification Results
**Verifier:** verifier-{N}
**Scope:** AD-{X} + AD-{Y} post-build gate check
**Method:** Playwright MCP + grep on source HTML + direct file reads

## AD-{X}: {Pattern Name} ({score}/40)
| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1 | Started from AD-SOUL-TEMPLATE.html? | YES/NO | locked-layer diff |
| 2 | Score >= {target}/40? | YES/NO | score from RAR |
| 3 | 0 soul violations? | YES/NO | Playwright DOM: border-radius, box-shadow |
| 4 | Research application rate >= 80%? | YES/NO | grep confirms N/M findings |
| 5 | Convention compliance? | YES/NO | Playwright fonts, colors, spacing |
| 6 | OD-F/DD-F findings applied? | YES/NO | grep confirms OD-F-005, DD-F-006, etc. |
| 7 | No 2px structural borders? | YES/NO | Playwright DOM check |
| 8 | Signature elements present? | YES/NO | per research package |
| 9 | 8 enrichment layers present? | YES/NO | per Section 1 checklist |

## Provenance Checks (Shared)
| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 10 | AD-outbound-findings.md updated? | YES/NO | |
| 11 | EXT entries in EXT-RESEARCH-REGISTRY? | YES/NO | |
| 12 | RESEARCH-ACTIVE.md updated? | YES/NO | |
| 13 | AD-RESEARCH-GATE.md updated? | YES/NO | |
| 14 | No new dark matter? | YES/NO | |
| 15 | AD-BUILD-STATE.md Finding ID Tracker current? | YES/NO | |

## DEFERRED ISSUES (carry forward)
| Wave | Note | Issue | Deferred To | Status |
|------|------|-------|-------------|--------|

## GATE VERDICT: PASS/FAIL
```

### 12.3 Deferred Issues Tracking

Source: enrichment-gaps.md GAP-E15.

AD-BUILD-STATE.md includes a DEFERRED ISSUES section maintained by the Weaver. Each wave's verifier checks whether previously deferred issues were resolved.

### 12.4 Chain Traversal Verification (Gate 6)

Source: chain-layers-gaps.md Section 5.5, chain-layers-audit.md (confirmed gap).

Gate 6 MUST include explicit chain traversal verification:
```
CHAIN TRAVERSAL CHECKS (Gate 6):
[ ] All STAGE-HEADERs link correctly (predecessor/successor YAML)
[ ] All outbound-findings files link correctly (predecessor/successor YAML)
[ ] All CLAUDE.md files reference correct file versions (v1.1, not v1)
[ ] PIPELINE-MANIFEST counts match actual findings
[ ] RESEARCH-ACTIVE matches PIPELINE-MANIFEST application rates
[ ] BACKBONE.md Stage 4 section is populated
[ ] axis-patterns.md exists in DESIGN-SYSTEM/patterns/
[ ] PATTERN-INDEX.md has axis entry
[ ] anti-patterns/registry.md has AD-F-AP entries (if any)
```

---

## 13. PRE-AD HOUSEKEEPING ITEMS

Items that MUST be completed before Phase 0 starts, compiled from all 5 source files:

| # | Item | Source | Effort |
|---|------|--------|--------|
| 1 | Fix BACKBONE.md R-2 count: 78 -> 27 in TWO locations (lines 85, 311) | chain-layers-audit MISSED-1 | 5 min |
| 2 | Fix stage-4-axis-ad/CLAUDE.md: v1 -> v1.1 references (lines 46, 66) | chain-layers-audit MISSED-2 | 5 min |
| 3 | Verify OD-CONVENTION-SPEC.md reflects ALL 10 post-comprehensive-audit fixes | enrichment-gaps GAP-E11, enrichment-audit MISSED-4 | 30-45 min |
| 4 | Create DESIGN-SYSTEM/explorations/axis/CLAUDE.md (directory exists but is empty) | chain-layers-audit Section 3.2 | 10 min |
| 5 | Resolve ACCUMULATED-IDENTITY location: decide if v2 goes in provenance/ or knowledge-architecture/ | chain-layers-gaps GAP-CL-02 | 5 min (decision) |
| 6 | Decide synced duplicate pattern: continue or consolidate (SOUL-DISCOVERIES, RESEARCH-ACTIVE) | chain-layers-gaps GAP-CL-05 | 5 min (decision) |

---

## 14. CONTRADICTIONS AND RESOLUTIONS

### Contradiction 1: "8 layers" vs 9 functional levels

**Source A (chain-layers-gaps.md line 11):** "8 distinct layers"
**Source B (chain-layers-audit.md ISSUE 2):** "9 functional levels (0, 1, 2, 2.5, 3, 4, 5, 6, 7, 8)"

**Resolution:** There are 9 functional levels. The "8 layers" label is a cosmetic error in the analyst's text. The layer map itself (which enumerates all 9) is correct. Use "9 functional layers" in the execution spec.

### Contradiction 2: Dark matter indexer count

**Source A (enrichment-gaps.md GAP-E08):** "4 dark matter indexers (dm-a through dm-d)"
**Source B (enrichment-audit.md Section 1.5):** "3 completed, not 4. dm-c was never completed."

**Resolution:** 3 indexers completed. dm-c was IN PROGRESS but never finished. The gap recommendation (dark matter prevention alone is insufficient) remains valid regardless of the count.

### Contradiction 3: Identity delta element count

**Source A (enrichment-gaps.md GAP-E12):** "4 surprises + 3 refinements + 3 questions = 10 elements"
**Source B (enrichment-audit.md Section 1.8):** "11 substantive elements (SOUL FAIL summary is a distinct element)"

**Resolution:** 11 elements. The SOUL FAIL summary is a separate substantive element the enrichment analyst miscounted. The identity delta quality gate (Section 11.1) uses the corrected count as benchmark.

### Contradiction 4: Convention spec effort for post-audit staleness check

**Source A (enrichment-gaps.md GAP-E11):** "15-minute verification"
**Source B (enrichment-audit.md MISSED-4):** "30-45 minutes -- requires reading 10 Critical/High fixes, cross-referencing each"

**Resolution:** 30-45 minutes. The enrichment-audit.md's estimate is more realistic, having verified that BACKBONE.md was NOT corrected despite the comprehensive audit fixing PIPELINE-MANIFEST. Multiple files may need updates.

### Contradiction 5: AD-CONVENTION-SPEC.md line count target

**Source A (ad-skeleton-enrichment.md Section 1.1):** "Target: 300-500 lines"
**Source B (enrichment-gaps.md GAP-E10 recommendation):** Standalone spec with all OD values present + AD additions implies 600-700 lines

**Resolution:** 500-700 lines. A standalone spec (option (a) from enrichment-gaps.md, which the auditor confirmed as correct approach) necessarily includes ALL OD values (468 lines base) plus AD-specific sections (100-200 lines). The 300-500 target assumed a reference-based spec, not standalone.

### Non-Contradiction: Build tool vs chain document distinction

Both the chain-layers analyst and auditor AGREE on this classification. No conflict exists. The distinction is adopted verbatim in Section 8.

---

## COMPACTION-SAFE SUMMARY

- **8 enrichment layers** define what a COMPLETE AD exploration file contains (RAR, threading header, locked CSS, axis CSS, research citations, finding citations, version badge, fractal compliance)
- **LOCKED/AXIS template split** into two `<style>` blocks with `id="locked-layer"` (immutable, diff=0) and `id="axis-layer"` (builder-authored, convention-compliant)
- **9 functional chain layers** (0 through 8 with 2.5): meta-architecture, identity, research, research tracking, stage infrastructure, findings, synthesis, patterns, handoffs, distributed provenance
- **Convention lifecycle: DRAFT -> VALIDATE -> FROZEN** with T1/T2 + INHERITED/AD-SPECIFIC + FROZEN/DRAFT triple-labeling
- **Convention bottleneck mitigated** by: two-phase lifecycle (catch errors after 1-2 explorations not 6), LOCKED/AXIS split (limit blast radius), Convention Auditor (independent verification before Wave 1)
- **Two scribe types:** BUILD scribes (6 targets post-builder) and AUDIT scribes (6 targets post-audit) -- NOT interchangeable
- **Build tools vs chain documents** stored in different locations with different metadata
- **Research package format** specified: 8 required sections, 200-430 lines, including signature elements for anti-citation-theater
- **5 contradictions resolved** between source files (layer count, dm indexer count, delta element count, staleness effort, spec line count)
- **6 pre-AD housekeeping items** (BACKBONE R-2 fix, CLAUDE.md v1->v1.1, convention staleness check, create axis CLAUDE.md, ACCUMULATED-IDENTITY location decision, synced duplicate decision)
- **Document engineering, not pipeline design:** The spec defines what artifacts LOOK LIKE, not just what operations produce them
