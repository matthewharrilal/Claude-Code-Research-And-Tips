# MASTER AD EXECUTION SPECIFICATION
## For: Another Claude Instance to Create an Execution Plan

**Version:** 1.0
**Date:** 2026-02-09
**Synthesized from:** 5 domain synthesis files (5,116 lines) + 5 cross-check reports (1,675 lines) = 6,791 lines total
**Governing Principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%.

---

### PREAMBLE

#### What This Document Is

This is the complete, self-contained execution specification for the AD (Axis Design) phase of the KORTAI Design Mind pipeline. A Claude instance reading ONLY this document should be able to create a full execution plan: what agents to spawn, what files to create, what gates to check, and how to handle every contingency.

This document distills ~11,500 lines of research (7 analysts + 7 auditors + 1 weaver across 15 files) into one actionable specification. Every finding, every correction, every gap resolution is represented here.

#### What AD (Axis Design) Does

AD is Stage 4 of a 5-stage design pipeline:
- **Stage 1:** Component Discovery (COMP-F findings)
- **Stage 2:** Density Design (DD) -- 6 density explorations, DD-F findings
- **Stage 3:** Organizational Design (OD) -- 6 org explorations, OD-F findings
- **Stage 4:** Axis Design (AD) -- 6 axis explorations, AD-F findings **<-- THIS STAGE**
- **Stage 5:** Combination Design (CD) -- future

AD builds 6 HTML exploration files, each demonstrating a different axis pattern (Z-Pattern, F-Pattern, Bento Grid, Spiral/alternative, Axis Choreography, Compound). Each exploration applies the accumulated identity, respects the soul constraints, and generates new findings for downstream consumption.

#### What OD Established

OD (Stage 3) produced:
- 6 enriched HTML explorations (OD-001 through OD-006), each ~80-120KB
- 17 formal findings (OD-F-001 through OD-F-013 + 4 categorical)
- OD-CONVENTION-SPEC.md (468 lines) -- the first convention specification
- ACCUMULATED-IDENTITY-v1.1.md (577 lines) -- the system's full inherited mind
- A formal provenance chain with YAML frontmatter, traversal paths, and inline threading headers
- Key finding: OD-F-005 "Organization IS Density" -- the identity's central claim

OD also produced the lessons that shape AD's design:
- 43-agent re-enrichment caused 3+ Lead compactions (flat topology fails at scale)
- Building without conventions created a 3-dialect gap
- Deferred provenance required 18-agent remediation
- Write contention caused silent data loss
- Citation theater achieves ~0% genuine compliance

#### What This Spec Assumes the Reader Has Access To

The executing Claude instance has access to:
1. The repository at `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`
2. The docs-spa showcase files (servable via HTTP)
3. Playwright MCP for browser automation
4. All files in `DESIGN-SYSTEM/provenance/` (the formal chain)
5. All files in `knowledge-architecture/` (working artifacts)
6. The `HANDOFF-OD-TO-AD.md` file (the gate document from OD)
7. All 6 OD HTML exploration files in `docs-spa/app/showcase/`

---

## SECTION 1: STRUCTURAL DEFINITIONS -- WHAT THINGS ARE

This section defines the SHAPE of what AD produces. The skeleton describes operations to perform; this section describes the artifacts those operations produce. Core framing: **Enrichment is a DOCUMENT ENGINEERING problem, not a PIPELINE problem.**

### 1.1 Document Anatomy: The 8 Enrichment Layers

Every AD exploration HTML file MUST contain all 8 layers. A file missing any layer is INCOMPLETE. This is a binary gate -- no partial credit.

#### Layer 1: Research Application Record (RAR)

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

**CONCRETE EXAMPLE (illustrative -- finding IDs are examples, not actual):**
```html
<!--
  AD-001: Z-Pattern Axis Exploration
  Score: 36/40 (Innovation: 9 | Utility: 9 | Soul: 9 | Execution: 9)
  Hypothesis: Can Z-pattern reading flow organize axis transitions?
  Identity: OD-F-005 maps to Z-Pattern via diagonal emphasis
  Density pairing: PULSE + Z-PATTERN
  DD sources: DD-003 (ISLANDS), DD-006 (FRACTAL)

  Research Applied (v1 enriched):
    - R4-PD015: Z-pattern eye tracking -> diagonal content zones
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

#### Layer 2: Inline Threading Header

**WHAT IT IS:** A SEPARATE HTML comment block (after Layer 1) containing graph-traversal metadata. This is the Layer 8 distributed provenance node for this file.

**WHAT IT CONTAINS (7 populated sections, numbered 1,2,3,5,6,8,10 with gaps at 4,7,9):**
1. WHY THIS EXISTS: Statement of purpose and chain position
2. QUESTION THIS ANSWERS: The exploration's hypothesis
3. STATUS: Version, audit results, soul compliance status
5. BUILT ON: Dependency table (file paths of inputs and relationship)
6. MUST HONOR: Constraints from prior stages
8. CONSUMED BY: Consumer table (files that reference this)
10. DIAGNOSTIC QUESTIONS: Questions answerable from this file alone

**CRITICAL DISTINCTION:** The RAR (Layer 1) and the Inline Threading Header (Layer 2) are structurally distinct blocks with DIFFERENT origins. The RAR is created DURING build by the builder agent. The threading header is graph-traversal metadata created during provenance operations. They serve different functions. Do NOT collapse them into one block.

#### Layer 3: LOCKED CSS Layer

**WHAT IT IS:** A `<style id="locked-layer">` block containing ALL convention CSS that builders MUST NOT modify. Copied verbatim from AD-SOUL-TEMPLATE.html.

**WHAT IT CONTAINS:**
- `:root { ... }` block with ALL locked tokens (from AD-CONVENTION-SPEC.md Section 10)
- Base styles: `::selection`, `*:focus-visible`, `.skip-link`, `@media (prefers-reduced-motion)`, `@media print`
- Header styles: Full-bleed dark background, inner wrapper 860px max-width
- Code block styles: Dark theme (#1A1A1A bg), syntax highlighting palette
- Callout styles: 5 accent variants, 4px left border
- Font loading references (Instrument Serif, Inter, JetBrains Mono via Google Fonts)

**BINARY GATE:** `diff` between builder's locked-layer and AD-SOUL-TEMPLATE.html locked-layer = 0 lines changed. ANY modification to the locked layer = FAIL.

**IMPLEMENTATION:** The locked layer MUST be in a separate `<style id="locked-layer">` block with the comment `/* DO NOT MODIFY -- any diff here = FAIL */`. This enables PROGRAMMATIC verification via string comparison.

#### Layer 4: AXIS CSS Layer

**WHAT IT IS:** A `<style id="axis-layer">` block containing builder-authored CSS for axis-specific layouts. This is the ONLY CSS the builder creates.

**WHAT IT CONTAINS (varies by axis pattern):**
- CSS Grid named areas for axis zones
- Flexbox configurations for axis-internal content flow
- Responsive breakpoints for axis transitions
- Axis-specific zone tokens (extending --color-zone-sparse/dense/breathing)
- Axis transition signals (density shift CSS at axis boundaries)

**CONSTRAINTS:**
- All values MUST comply with AD-CONVENTION-SPEC.md axis-specific conventions
- MUST use tokens from the locked :root block (no hardcoded colors, fonts, or spacing)
- MUST NOT duplicate or override any locked-layer property
- If an override is NECESSARY (technical constraint), use the DEVIATION PROTOCOL (Section 1.4)

**WHY THE SPLIT EXISTS:** OD's template claimed "builders add CONTENT only" but axis explorations are inherently CSS-heavy. A Z-Pattern needs different CSS from a Bento Grid. The LOCKED/AXIS split acknowledges this reality while containing the blast radius: builders have full CSS freedom in the axis layer, zero freedom in the locked layer.

#### Layer 5: Research Citation Inline Comments

**WHAT IT IS:** HTML comments within the `<body>` at the POINT where a research finding is applied.

**FORMAT:** `<!-- EXT-AXIS-Z-001 applied: asymmetric padding creates diagonal emphasis -->`

**REQUIREMENTS:**
- Every SOUL PASS finding from the research package MUST have at least one citation in the HTML body
- Citations MUST be at the point of application (not grouped at top/bottom)
- Each citation MUST include the finding ID AND a brief description of what it achieves

**ANTI-THEATER MEASURE:** Each research package includes 2-3 SIGNATURE ELEMENTS -- specific CSS/HTML patterns that would ONLY exist if the research finding was genuinely applied. Verifiers check for signature elements, not just comment strings. Example: If EXT-AXIS-Z-001 says "diagonal emphasis through asymmetric padding," the signature element is `padding-left != padding-right` on primary content sections.

#### Layer 6: Finding ID Citations at Decision Points

**WHAT IT IS:** HTML comments citing AD-F-NNN finding IDs where the builder makes design decisions that embody stage findings.

**FORMAT:** `<!-- AD-F-AP-001: 3px structural border applied to section divider -->`

**DISTINCTION FROM LAYER 5:** Layer 5 cites RESEARCH INPUT (EXT-AXIS-*, R-4-*, DD-F-*, OD-F-*). Layer 6 cites AD's OWN OUTPUT findings (AD-F-NNN) -- declarations this exploration generates for downstream stages.

#### Layer 7: Version Badge

**WHAT IT IS:** A visual element in the page header showing the enrichment version.

**VALUE:** `v1 enriched` for initial build. Never `v1` alone (that would indicate unenriched build).

**LOCATION:** Inside the full-bleed dark header, as part of the meta line.

#### Layer 8: Fractal Compliance Evidence

**WHAT IT IS:** Structural and visual demonstration that DD-F-006 (fractal self-similarity) is present at 4 scales.

**THE 4 SCALES:**
1. Page level: Overall axis pattern visible in full-page view
2. Section level: Axis pattern echoed within each major section
3. Component level: Axis pattern reflected in callout/card/element layout
4. Micro level: Typography rhythm or spacing that mirrors the axis pattern

**WHERE DOCUMENTED:** In the RAR (Layer 1) as explicit scale descriptions AND visible in the HTML structure itself.

### 1.2 LOCKED vs AXIS Template Split

#### What AD-SOUL-TEMPLATE.html Contains

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
       LOCKED LAYER -- DO NOT MODIFY
       Any diff between this block and AD-SOUL-TEMPLATE.html = BUILD FAIL
       ======================================== */
    :root {
      --color-primary: #E83025;
      --color-bg-dark: #1A1A1A;
      --color-bg-light: #FAFAF5;
      /* ... all tokens from AD-CONVENTION-SPEC.md Section 10 ... */

      --font-display: 'Instrument Serif', serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --type-page: 2.5rem;
      --type-section: 1.625rem;
      --type-subsection: 1.375rem;
      --type-body: 1rem;
      --type-small: 0.875rem;
      --type-meta: 0.75rem;

      --space-1: 0.25rem;
      /* ... through --space-20 ... */
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    *:where(:not(input, button, select)) { border-radius: 0; }

    ::selection { background: var(--color-primary); color: white; }
    *:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }

    .skip-link { position: absolute; left: -9999px; /* ... full skip-link styles ... */ }
    .skip-link:focus { left: 0; /* ... */ }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; }
    }

    header { background: var(--color-bg-dark); color: var(--color-bg-light); }
    .header-inner { max-width: 860px; margin: 0 auto; /* ... */ }

    pre, code { font-family: var(--font-mono); }
    pre { background: var(--color-bg-dark); color: var(--color-bg-light); /* ... */ }

    .callout { border-left: 4px solid; /* 5 accent variants */ }

    @media print { /* print styles */ }
  </style>

  <style id="axis-layer">
    /* ========================================
       AXIS LAYER -- Builder modifies this block
       Must comply with AD-CONVENTION-SPEC.md axis conventions
       Must use tokens from :root (no hardcoded values)
       ======================================== */
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header>
    <div class="header-inner">
      <div class="meta-line">
        <span class="version-badge">v1 enriched</span>
      </div>
      <h1><!-- Exploration title --></h1>
      <p class="subtitle"><!-- Subtitle --></p>
    </div>
  </header>
  <main id="main-content">
    <!-- Builder: add content sections here -->
  </main>
</body>
</html>
```

#### What Goes in LOCKED vs AXIS

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

**Max-width override resolution:** The locked layer controls the HEADER max-width (860px, immutable). The axis layer controls the CONTENT max-width (within `<main>`). The axis layer MAY set `main { max-width: [value] }` different from 860px. This is not an override of the locked layer because they target different elements.

### 1.3 Convention Lifecycle: DRAFT -> VALIDATE -> FROZEN

**WHY NEEDED:** OD's convention spec was written AFTER the audit -- extracted from empirically validated artifacts. AD's convention spec is written BEFORE any exploration exists. Freezing untested axis-geometry conventions risks locking in wrong decisions.

**LIFECYCLE:**

```
Phase 0: DRAFT Convention Spec
  - Convention Agent writes AD-CONVENTION-SPEC.md
  - Every value labeled DRAFT or INHERITED
  - INHERITED values (from OD-CONVENTION-SPEC.md): immediately authoritative
  - DRAFT values (axis-specific additions): provisional, subject to validation
  - Header: "STATUS: PROVISIONAL -- DRAFT values subject to revision after Wave 1A"

After Wave 1A Completion: VALIDATE
  - Lead reviews Wave 1A builder output
  - For each DRAFT value:
    - If builder confirmed in practice -> promote to VALIDATED
    - If builder deviated with justification -> revise the value
    - If builder encountered problems -> flag for discussion
  - T2 values confirmed by builder output promoted to T1:
    "T1 (validated by AD-001, convention confirmed in practice)"
  - T2 values contradicted by builder output: revised or removed

After Wave 1B Completion: FROZEN
  - ALL remaining DRAFT values either VALIDATED or REMOVED
  - Header: "STATUS: FROZEN -- all values validated against built artifacts"
  - No further modifications permitted (except via DEVIATION PROTOCOL)
```

**Convention Value Classification -- Every value in AD-CONVENTION-SPEC.md MUST be labeled with THREE attributes:**

1. **T1 or T2** (provenance): T1 = research-backed with finding ID; T2 = agent-authored with rationale
2. **INHERITED or AD-SPECIFIC** (origin): INHERITED = from OD-CONVENTION-SPEC.md; AD-SPECIFIC = new for axis
3. **FROZEN or DRAFT** (lifecycle state, Phase 0 only): FROZEN = already validated; DRAFT = awaiting builder validation

**CALIBRATION GATE:**
```
[ ] 1. Every value is labeled T1 or T2
[ ] 2. Every T1 value cites a finding ID that EXISTS in the provenance chain
[ ] 3. Every T2 value has a documented rationale (1 sentence minimum)
[ ] 4. Every T2 value is marked "CONVENTION: agent-authored"
[ ] 5. No UNLABELED values exist (FAIL if any value lacks T1/T2 label)
[ ] 6. Every value has INHERITED/AD-SPECIFIC label
[ ] 7. Every value has FROZEN/DRAFT lifecycle state
```

### 1.4 Template Enforcement Model

#### AD-CONVENTION-SPEC.md Structure

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
9. Intentional Divergences (AD-specific)
10. Unified :root Block (INHERITED base + AD additions)
11. Required Base Styles (INHERITED)
12. **NEW: CSS Grid Patterns** (AD-specific)
13. **NEW: Flexbox Configurations** (AD-specific)
14. **NEW: Axis Zone Tokens** (AD-specific)
15. **NEW: Axis Transition Signals** (AD-specific)
16. **NEW: Per-Standard Soul Test Results** (AD-specific)

Each inherited section: `INHERITED FROM: OD-CONVENTION-SPEC.md Section {N}`.
Each AD-specific section: `AD-SPECIFIC: added for axis explorations`.

#### Convention Agent Input Files (EXPLICIT, ORDERED)

1. OD-CONVENTION-SPEC.md (468 lines) -- INHERITED base, copy ALL sections
2. HANDOFF-OD-TO-AD.md -- transition requirements, transitive chain (org->density->axis)
3. ACCUMULATED-IDENTITY-v1.1.md -- what the system IS (full 577 lines -- Convention Agent is the only entity absorbing full identity)
4. R-4-AXIS-INNOVATIONS.md -- 192 findings (distinguish which inform CONVENTIONS vs CONTENT)
5. anti-patterns/registry.md -- what to avoid
6. tokens/ directory (geometry, colors, typography, spacing) -- locked values
7. OD-001 through OD-006 HTML files (headers only) -- how enrichment manifests in practice

#### Deviation Protocol

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

#### Post-Audit Convention Staleness Check

**BEFORE AD Phase 0:** Verify OD-CONVENTION-SPEC.md reflects ALL post-comprehensive-audit fixes. Cross-reference each of the 10 Critical/High fixes against the convention spec and update any stale values. **Estimated effort: 30-45 minutes** (not 15 -- requires reading 10 Critical/High fixes and cross-referencing each).

#### Weaver Convention Drift Detection Protocol

**AFTER EACH BUILDER COMPLETION, THE WEAVER SHALL:**
1. Read builder's AD-NNN.html `<style id="locked-layer">` block
2. Diff against AD-SOUL-TEMPLATE.html `<style id="locked-layer">` block
3. Any LOCKED value that differs = CONVENTION DRIFT -> flag to Lead immediately
4. Read builder's `<style id="axis-layer">` block
5. Check axis values against AD-CONVENTION-SPEC.md axis sections (12-16)
6. Any axis value that uses hardcoded colors/fonts/spacing (not tokens) = CONVENTION VIOLATION -> flag
7. Check for DEVIATION PROTOCOL comments if any override is detected
8. Write drift check result to AD-BUILD-STATE.md

---

## SECTION 2: PROVENANCE ARCHITECTURE -- THE GRAPH

### 2.1 The Provenance Chain Is a Layered Graph, Not a Linear Chain

The provenance chain is NOT a sequence of documents. It is a **layered directed graph** with 9 functional levels, 4 traversal paths, and two independent sub-chain structures (STAGE-HEADER chain and outbound-findings chain running in parallel).

The skeleton treats provenance as a list of files to create and update. It must instead treat provenance as a TOPOLOGY to maintain. Without graph-awareness, agents produce "dark matter" -- files that contain valuable information but sit outside the formal graph. OD accumulated 51 such dark matter files (~32,800 lines).

### 2.2 Three Physical Layers vs 9 Functional Layers

Two independent classification schemes coexist without contradiction. Agents must understand BOTH.

#### Three Physical Layers (WHERE Provenance Lives)

| Physical Layer | What It Is | File Count |
|----------------|-----------|------------|
| **P1: Inline Threading Headers** | 7 populated sections embedded in every source file | 490 files |
| **P2: Light Provenance Sections** | Shorter metadata linking files to parent phase and T1 synthesis | 244 files |
| **P3: Formal Chain Documents** | Per-stage curated narrative documents with YAML frontmatter | ~8 per stage + ~5 pipeline-level |

#### Nine Functional Layers (WHAT Provenance Does)

**Layer 0: Meta-Architecture (The Map of the Map)**
- PIPELINE-MANIFEST.md -- Master finding registry, lifecycle tracking, cross-reference index
- BACKBONE.md -- Master narrative of entire pipeline
- provenance/CLAUDE.md -- Navigation file, layer description
- DESIGN-SYSTEM/CLAUDE.md -- "THE KORTAI DESIGN MIND" entry point

**CRITICAL STALE DATA BUG:** BACKBONE.md says "R-2: Creative Layouts (78)" at BOTH line 85 and line 311. Correct count is 27. MUST fix before AD starts.

**Layer 1: Soul + Identity (Immutable Foundations)**
- SOUL-DISCOVERIES.md -- 5 soul pieces as perceptual truths
- ACCUMULATED-IDENTITY-v1.1.md -- Full inherited mind (577 lines)
- tokens/ directory -- LOCKED CSS values (geometry, colors, typography, spacing)

**STALE REFERENCE:** stage-4-axis-ad/CLAUDE.md references "ACCUMULATED-IDENTITY-v1.md" at lines 46 and 66. MUST update to v1.1 before AD starts.

**Layer 2: Original Research (External Input)**
- R-1 through R-5 research files (337 total findings)
- AD's primary source is R-4 (192 findings, 7x larger than R-2's 27)
- R-2 count is 27 (NOT 78 -- see Layer 0 bug)
- Research files are NEVER modified after creation

**Layer 2.5: Research Application Tracking (Status Bridge)**
- RESEARCH-ACTIVE.md -- Per-finding application status (SYNCED DUPLICATE of checkpoints/)
- EXT-RESEARCH-REGISTRY.md -- Registry of 94 bespoke external findings

**Layer 3: Per-Stage Infrastructure**
- STAGE-HEADER.md -- 8 sections (Story, Consumed, Produced, Quality, Decisions, Causal, Research Weight, Files)
- CLAUDE.md -- Navigation file (auto-read by Claude Code)
- RESEARCH-GATE.md -- Pre-build research filtering + post-build verification
- CONVENTION-SPEC.md -- Unified convention definition

**Layer 4: Stage Findings (The Output Chain)**
- AD-outbound-findings.md -- AD-F-001 through AD-F-NNN, 7-field blocks, YAML frontmatter with predecessor/successor

**Layer 5: Stage Synthesis (Cross-Exploration Analysis)**
- AD-SYNTHESIS.md -- 7-section cross-AD analysis (deferred, post-build)
- AD-AUDIT-SYNTHESIS.md -- Audit record (deferred, post-audit)

**Layer 6: Pattern Catalogs (Validated Outputs)**
- axis-patterns.md in `DESIGN-SYSTEM/patterns/` (NOT in provenance/)
- PATTERN-INDEX.md -- must add axis entry
- anti-patterns/registry.md -- must add AD-F-AP-NNN entries

**Layer 7: Handoff Documents**
- HANDOFF-AD-TO-CD.md in stage-4-axis-ad/

**Layer 8: Distributed Provenance (Per-File Metadata)**
- Inline Threading Headers (490 files)
- Light Provenance Sections (244 files)
- Exploration HTML Headers (6 AD files, ~120 lines each -- TWO DISTINCT BLOCKS: RAR + threading header)

### 2.3 Four Traversal Paths

**Forward (Finding Origin -> Application):**
```
R3-023 (Layer 2) -> PIPELINE-MANIFEST (Layer 0) -> DD-006 (Layer 8) ->
DD-F-006 (Layer 4) -> HANDOFF-DD-TO-OD (Layer 7) -> OD-001-006 (Layer 8) ->
OD-SYNTHESIS (Layer 5) -> HANDOFF-OD-TO-AD (Layer 7) -> AD explorations (Layer 8)
```

**Backward (Artifact -> Research Origin):**
```
OD-003 (Layer 8) -> BUILT ON table -> OD-outbound (Layer 4) ->
OD-RESEARCH-GATE (Layer 3) -> DD-outbound (Layer 4) -> R1 source (Layer 2) ->
EXT-RESEARCH-REGISTRY (Layer 2.5) -> PIPELINE-MANIFEST (Layer 0)
```

**Cross-Stage (Sibling Comparison):**
```
OD-001 vs OD-006 -> OD-SYNTHESIS (Layer 5) -> organizational-patterns (Layer 6) ->
OD-CONVENTION-SPEC (Layer 3) -> ACCUMULATED-IDENTITY (Layer 1)
```

**Identity Enforcement (Soul Piece -> Verification):**
```
Soul Piece #1 (Layer 1) -> ACCUMULATED-IDENTITY (Layer 1) -> tokens/geometry (Layer 1) ->
OD-CONVENTION-SPEC (Layer 3) -> All OD files verified (Layer 8) ->
OD-AUDIT-SYNTHESIS (Layer 5) -> PIPELINE-MANIFEST (Layer 0)
```

### 2.4 Mode C Incremental Provenance (Scribe Fallback)

**THE CORE LESSON:** OD built provenance AFTER the fact. AD builds provenance DURING the fact. This is the single most important change.

**THE PROVENANCE TIMING PARADOX:** "Builders write findings at the moment of discovery" sounds right. But there is ZERO evidence from OD that builders can successfully do this. Builders wrote HTML content and informal CSS comment headers. The formal 7-field finding entries were created retroactively by scribes during the remediation.

**RESOLUTION: SCRIBE FALLBACK PROTOCOL**
```
PRIMARY: Builder discovers finding -> STOPS -> writes AD-F-NNN entry to per-builder
         scratch file -> RESUMES building
FALLBACK: If Gate W-12 FAILS (0 findings written after build):
  1. Deploy per-wave scribe agent (one per wave, sequential)
  2. Scribe reads builder's CSS comment headers + builder messages
  3. Scribe formalizes findings into 7-field blocks in AD-outbound-findings.md
  4. This is PROVEN in OD re-enrichment (scribes wrote provenance successfully)
```

### 2.5 Write Contention Prevention

**THE PROBLEM (CRITICAL):** The Write tool performs ATOMIC REPLACEMENT of entire file contents. If two builders simultaneously write to AD-outbound-findings.md, the second write silently destroys the first's data. No error, no warning, no recovery.

**THE SOLUTION: Per-Builder Scratch Files**

| Agent | Writes To | When |
|-------|-----------|------|
| Builder-A | `_ad-execution/findings-builder-A.md` | During build wave |
| Builder-B | `_ad-execution/findings-builder-B.md` | During build wave |
| Lead | AD-outbound-findings.md | Between waves (merge from scratch files) |

Each scratch file has exactly ONE writer. No contention possible. The lead merges sequentially between waves when no builders are active.

### 2.6 CLAUDE.md Navigation Mesh

Five CLAUDE.md files require AD-related updates:

| CLAUDE.md File | Current State | AD Update Required |
|---------------|---------------|-------------------|
| `DESIGN-SYSTEM/CLAUDE.md` | Has AD entry | Update with AD completion state |
| `provenance/CLAUDE.md` | stage-4 shows PENDING | Update to IN_PROGRESS then COMPLETE |
| `stage-4-axis-ad/CLAUDE.md` | Exists (99 lines), has gate logic | Fix v1->v1.1 reference. Populate fully. |
| `explorations/axis/CLAUDE.md` | **DOES NOT EXIST** | CREATE with AD inventory and scores |
| `explorations/CLAUDE.md` | Has AD row | Update to COMPLETE |

### 2.7 Chain Documents vs Build Tools

**CHAIN DOCUMENTS (go in DESIGN-SYSTEM/provenance/stage-4-axis-ad/, have YAML frontmatter):**
STAGE-HEADER.md, AD-CONVENTION-SPEC.md, AD-RESEARCH-GATE.md, AD-outbound-findings.md, AD-SYNTHESIS.md, AD-AUDIT-SYNTHESIS.md, HANDOFF-AD-TO-CD.md, ACCUMULATED-IDENTITY-v2.md, axis-patterns.md (in patterns/)

**BUILD TOOLS (go in knowledge-architecture/_ad-execution/, have inline threading headers):**
AD-SOUL-TEMPLATE.html, AD-BINARY-GATES.md, AD-BUILD-STATE.md, research-package-ad-{1-6}.md, identity-delta-ad-wave{N}.md, R-4-AD-EVALUATION.md, r2-ad-mapping.md, findings-builder-{A-F}.md, verification-wave{N}.md

### 2.8 File Ownership Matrix

| File | Owner | Other Agents May | Contention Risk |
|------|-------|-----------------|-----------------|
| AD-outbound-findings.md | Lead (merges between waves) | Read only | ELIMINATED |
| Per-builder scratch files | Each builder (one writer) | Lead reads between waves | NONE |
| PIPELINE-MANIFEST.md | Lead only | Nobody else | NONE |
| AD-CONVENTION-SPEC.md | Lead only (Phase 0) | Read; nobody modifies post-Wave-0 | NONE |
| ACCUMULATED-IDENTITY-v2.md | Lead (draft/finalize) | Contribute via messages | LOW |
| EXT-RESEARCH-REGISTRY.md | Researchers (append-only) | Builders read only | LOW |

---

## SECTION 3: IDENTITY-RESEARCH BIDIRECTIONAL LOOP

### 3.1 Loop Structure: States, Transitions, Triggers

The identity-research loop has 8 states forming a cycle that executes once per build wave (3 times for AD's 3-wave structure).

**STATES:**
```
STATE 1: IDENTITY-LOADED    (v1.1 consumed)
STATE 2: LENS-ACTIVE         (constraint map + lens + tension table generated)
STATE 3: RESEARCH-FILTERED   (R-4, R-2, EXT-AXIS-* classified as PASS/FAIL/CHALLENGE)
STATE 4: BUILD-IN-PROGRESS   (builders applying research)
STATE 5: FINDINGS-PRODUCED   (build wave complete, findings await evaluation)
STATE 6: IDENTITY-TESTED     (findings classified by paradigm fit + challenge protocol)
STATE 7: GUIDANCE-EVOLVED    (delta written, checkpoint updated, research guidance revised)
STATE 8: SYNTHESIS (Terminal) (v2 produced from v1.1 + all deltas)
```

**KEY TRANSITIONS:**
- T1 (LOADED->LENS): Convention Agent generates identity-constraint map (10 binary gates from v1.1)
- T2 (LENS->FILTERED): R-4 Evaluator applies 10 gates to 192 findings; R-2 Re-Mapper remaps 25 findings
- T3 (FILTERED->BUILD): Gate Compiler assembles per-AD research packages
- T4 (BUILD->FINDINGS): Builders report DISCOVERIES and CHALLENGES
- T5 (FINDINGS->TESTED): Lead applies paradigm fit test + challenge protocol
- T6 (TESTED->EVOLVED): Lead writes identity delta with REVISED RESEARCH GUIDANCE
- T7 (EVOLVED->LENS): Next wave researchers read cumulative checkpoint + delta-derived queries
- T8 (EVOLVED->SYNTHESIS): Identity Scribe produces v2

**LOOP FREQUENCY:** The STATE 2 -> STATE 7 cycle executes 3 times (Waves 1A, 1B, 1C). Each iteration MUST evolve the lens -- if Wave 1B's research guidance is identical to Wave 1A's, the loop has broken.

### 3.2 Identity as Lens (Guiding Research)

The skeleton conflates two fundamentally different ways identity constrains research:

**FILTER (already in skeleton):** Identity constrains what gets APPLIED. The 5-gate soul test. Binary, well-specified.

**LENS (missing from skeleton):** Identity constrains what gets EXPLORED. The accumulated identity shapes search queries. This is generative -- it determines what you even look for.

**THE IDENTITY LENS DOCUMENT (generated during T1):**
```
DO SEARCH FOR:
- Flat 2D visual signals for axis hierarchy
- Axis patterns that preserve editorial calm
- Grid/layout techniques that work WITHOUT shadows, rounded corners, or animation
- Multi-scale self-similar axis patterns (DD-F-006 mandatory at 4+ scales)
- Axis patterns where reading path is signaled by typographic weight

DO NOT SEARCH FOR (will SOUL FAIL):
- Parallax scrolling, card shadows, animated transitions
- Rounded container shapes, gradient-based differentiation
- Traffic-light color semantics, opacity-based transitions
- Z-depth layering, blurred backgrounds, decorative borders (2px BANNED)
```

### 3.3 Research Validates Back (Challenge Protocol)

**THREE CLASSES OF RESEARCH-IDENTITY INTERACTION:**

```
CLASS A: PARADIGM-CONFIRMING -- Finding strengthens identity. Apply, cite confirmation.
CLASS B: PARADIGM-EXTENDING  -- Finding adds something new. Apply, mark as identity candidate.
CLASS C: PARADIGM-CHALLENGING -- Finding contradicts identity. DO NOT apply directly.
                                 Invoke decision tree (Section 3.5).
CLASS D: PARADIGM-BREAKING   -- Finding fundamentally contradicts. Reject unless adaptation exists.
```

**BINARY ENFORCEMENT OF FEEDBACK LOOP (4 rules):**

RULE 1: Each identity delta MUST reference >= 1 specific EXT-AXIS-* finding by ID. GATE: FAIL if missing.

RULE 2: Each Wave N+1 research package MUST contain a "DELTA-DERIVED QUERIES" section with >= 1 query provably derived from the latest delta. GATE: FAIL if missing.

RULE 3: Each Wave N+1 builder MUST cite >= 1 finding from Wave N's identity delta in their HTML comments. GATE: FAIL if missing.

RULE 4: The final ACCUMULATED-IDENTITY v2 MUST contain >= 3 sentences referencing specific AD wave discoveries. GATE: FAIL if v2 is just v1.1 with findings appended.

### 3.4 Findings Refine Identity (Circular Refinement)

**IDENTITY DELTA TEMPLATE (per wave):**
```markdown
# IDENTITY DELTA: AD Wave {N}

### NEW DISCOVERIES (CLASS A + B findings)
| Finding | Class | Paradigm Fit | Impact on Identity |

### CHALLENGES RESOLVED (CLASS C findings)
| Challenge | Identity Statement Challenged | Resolution | Rationale |

### REVISED RESEARCH GUIDANCE FOR WAVE {N+1}
| Wave N Discovery | Wave N+1 Research Directive |

### FORWARD QUESTION(S)
[>= 1 question following: Wave 1A: CONFIRMING, Wave 1B: STRESS-TESTING, Wave 1C: EXTENDING]

### EXT-AXIS-* REFERENCE
[>= 1 specific EXT-AXIS-* finding ID from this wave's research]
```

**IDENTITY DELTA QUALITY GATE:**
```
[ ] >= 2 surprises (specific, citing finding IDs from THIS wave)
[ ] >= 1 identity refinement (rule change or rule addition)
[ ] >= 1 SOUL FAIL pattern summary
[ ] >= 2 questions for next wave
[ ] Total delta: 10-20 lines (not 3-line stub)
```

**CUMULATIVE IDENTITY CHECKPOINT (50-100 lines, written after each wave):**
Captures the CURRENT state of all identity beliefs. Replaces reading v1.1 (577 lines) + all deltas after compaction. The deltas remain as append-only audit trail.

### 3.5 Decision Tree for Identity-Challenging Findings

```
FINDING X CHALLENGES IDENTITY STATEMENT Y

STEP 1: CLASSIFY WHAT Y IS
  |-- Y is a SOUL PIECE (1-5) --> Branch A: SOUL CHALLENGE
  |-- Y is a DERIVED CONSTRAINT --> Branch B: DERIVED CHALLENGE
  |-- Y is a PROCESS PATTERN --> Branch C: PROCESS CHALLENGE
  |-- Y is an EMPIRICAL FINDING --> Branch D: EMPIRICAL CHALLENGE

BRANCH A: Soul pieces are IMMUTABLE.
  Can finding be adapted to respect soul piece? YES -> Adapt. NO -> REJECT.

BRANCH B: Is derived constraint traceable to soul piece?
  YES -> Treat as Branch A.
  NO -> Was it empirically validated? YES -> Require 2+ counterexamples.
        NO -> Apply to ONE AD as experiment, compare audited quality.

BRANCH C: Apply proposed change to ONE wave as experiment.
  Compare score, soul compliance, audit findings. Better on ALL THREE = adopt.

BRANCH D: EMPIRICAL CLAIM CHALLENGE (AD's most important case).
  1. FLAG as CHAIN CHALLENGE
  2. DO NOT reject. DO NOT accept.
  3. DESIGN a discriminating test in the AD exploration
  4. Document test design, results, conclusion
  5. NEVER silently override an empirical finding
```

**INTERNAL TENSION PROTOCOL:** When two identity statements conflict in a specific AD context, the higher-precedence statement WINS: Soul Piece > Empirical Finding > Derived Constraint > Process Pattern. The lower-precedence statement is CONSTRAINED, not violated.

### 3.6 R-2 Structural Integration

R-2 (Creative Layouts, 27 findings) has been at 0% consumption across 4 pipeline opportunities. The fix has three parts:

1. **Designation:** AD designates R-2 as secondary with minimum application targets per AD
2. **Embedding:** R-2 findings EMBEDDED in each per-AD research package (not referenced, COPIED)
3. **Binary Gate:** R-2 >= 72% application rate; each research package must contain >= 4 R-2 findings

**ANTI-ORPHANING RULE:** No research evaluation document may exist as a standalone output. Every evaluation must be CONSUMED by a downstream document that builders actually read.

### 3.7 Evolving Research Guidance

After Lead writes identity-delta-ad-wave{N}.md, the delta MUST include a "REVISED RESEARCH GUIDANCE FOR WAVE {N+1}" section with 2-3 specific updates.

**IDENTITY LENS VERSIONING:** Lens version number MUST match wave number. Lens 1.0 = base. Lens 1.1 = after Wave 1A. If version and wave disagree, the lens was not updated. FAIL.

**FORWARD QUESTION EVOLUTION PATTERN:**
- Wave 1A: CONFIRMING questions ("Does [principle] hold in AD context?")
- Wave 1B: STRESS-TESTING questions ("Given [confirmed], does it hold in [harder case]?")
- Wave 1C: EXTENDING questions ("Given [stress-tested], what does this imply for CD?")

---

## SECTION 4: RULE FRAMEWORK -- BINARY vs JUDGMENT

**Governing Principle:** Binary rules achieve 100% agent compliance. Judgment rules achieve ~0%. Every constraint in agent prompts must be expressible as "DO X" or "DO NOT do X" -- never "consider whether X."

### 4.1 The Binary Rule Principle

Every gate, every constraint, every verification check is classified as one of:
- **BINARY:** Measurable, automatable, PASS/FAIL with zero interpretation. Expected compliance: 100%.
- **JUDGMENT:** Requires interpretation, taste, assessment. Expected compliance: ~0%.
- **HIDDEN-JUDGMENT:** LOOKS binary but contains an embedded judgment component. Expected compliance: 50-90%.

### 4.2 Gate Classification Table

**99 total gates across Phases 0-4. After binary conversions: 93/99 (94%) fully binary.**

| Phase | Gates | Binary | Hidden-Judgment (converted) | Residual |
|-------|-------|--------|---------------------------|----------|
| Gate 0 (Setup) | 17 | 16 | 1 (render quality) | 0 |
| Gates 1-3 (Build, x3) | 48 | 42 | 6 (accuracy, dead zones) | 0 |
| Gate 4 (Audit) | 11 | 11 | 0 | 0 |
| Gate 5 (Fix) | 10 | 10 | 0 | 0 |
| Gate 6 (Stage Complete) | 13 | 12 | 1 (citation genuineness) | 0 |
| **TOTAL** | **99** | **93 (94%)** | **6 (6%)** | **0** |

The 6 residual-judgment gates are delegated to: programmatic spot-checks (catches worst cases), Fresh-Eyes gestalt evaluation (catches perceptual cases), and human review post-session (final authority).

### 4.3 Hidden Judgment Gates and Binary Conversions

**12 hidden-judgment gates identified and converted:**

| Gate | Original Issue | Binary Conversion |
|------|---------------|-------------------|
| 0-03 "Shows content" | Distinguishing real vs error content | `querySelectorAll('section').length >= 3` AND `document.title` matches AND `readyState === 'complete'` |
| 0-07 "T1/T2 labeled" | Label accuracy vs presence | Split: 0-07a (presence, BINARY) + 0-07b (spot-check 5 random T1 labels) |
| 0-08 "Renders correctly" | Undefined "correctly" | 7 programmatic checks at 1440px + 768px |
| W-03 "Matches spec" | Complex value interpretation | Character-for-character match on `getComputedStyle` values |
| W-09 "Font trio correct" | WHERE and WHEN to check | 3 checks after `document.fonts.ready` on body/h1/code |
| W-10 "Record present" | Accuracy vs presence | Presence is W-10 (BINARY); accuracy delegated to PA-07/PA-08 |
| W-11 "Evidence" | Evidence quality | Evidence defined as structural format (3 required fields: finding ID + CSS selector + property) |
| 4-03 "UNIQUE FRESH" | Novelty assessment | Triple-match non-collision (same element + property + type = not unique) |
| 4-06 "Contradictions" | Disagreement vs perspectives | Same-element-same-property collision with RECONCILIATION entry required |
| 5-04 "Visual PASS" | Before/after comparison | Primary: programmatic re-check. Secondary: screenshot for human review |
| 6-01 "Scored >= 32" | Rubric undefined | 40-item binary rubric (10 soul + 10 convention + 10 provenance + 10 content) |
| 6-10 "Application rate" | Citation genuineness | Rate is binary count. Genuineness delegated to PA spot-checks |

### 4.4 Anti-Citation-Theater Infinite Regress

**THE PROBLEM:** Anti-citation-theater measures are THEMSELVES judgment rules. The chain terminates at the human.

**3-LAYER RESOLUTION:**

**Layer 1: FORMAT REQUIREMENTS (binary)** -- Citation must contain finding ID + target CSS selector + specific CSS property. Missing any = doesn't count. Gate: W-11.

**Layer 2: EXISTENCE VERIFICATION (binary)** -- PA-07: cited finding ID exists in source file. PA-08: cited CSS selector matches actual element. Gate: PA-07/PA-08 spot-check 5 random citations.

**Layer 3: GESTALT CHECK (judgment, terminates at human)** -- Fresh-Eyes evaluates design quality WITHOUT reading citations. Findings are RECOMMENDATIONS for human review, not gate blockers.

**The honest conclusion:** Layers 1 and 2 eliminate zero-effort and moderate-effort theater. Layer 3 routes judgment to human attention. The system never blocks on judgment alone.

### 4.5 Convention Auditor Specification

**Scope:** 16 binary checks (CA-01 through CA-16) on AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html.

**Timing:** Phase 0, INLINE. After Convention Agent completes, BEFORE Gate 0 passes, BEFORE any builder spawns.

**Information Barrier:** READS OD-CONVENTION-SPEC.md, T1 synthesis files, SOUL-DISCOVERIES.md, AD-CONVENTION-SPEC.md, AD-SOUL-TEMPLATE.html. DOES NOT READ Convention Agent's process notes or rationale.

**Position:** Direct report to Lead (NOT spawned by Convention Agent).

**ROI:** 1 agent, ~15 min, file-only. Prevents 3-5 hours of downstream damage. 20:1 return.

**FAIL Route:** Convention Agent fixes identified issues -> Convention Auditor re-runs -> Gate 0 does not pass until all 16 checks PASS.

### 4.6 File-Only Auditor Specifications (4 Types)

| Auditor | Trigger | Checks | Runtime | Files Written |
|---------|---------|--------|---------|---------------|
| Convention Auditor | After Convention Agent, before Gate 0 | 16 (CA-01-CA-16) | ~15 min | CONVENTION-AUDIT-REPORT.md |
| Research Auditor | After evaluators, before Gate 0 | 10 (RA-01-RA-10) | ~20 min | RESEARCH-AUDIT-REPORT.md |
| Provenance Auditor | Phase 2, parallel with audit | 12 (PA-01-PA-12) | ~25 min | PROVENANCE-AUDIT-REPORT.md |
| Scribe Spot-Checker | After scribe per wave, before gate | 6 (SC-01-SC-06) | ~5 min/wave | SCRIBE-SPOT-CHECK-WAVE{N}.md |

All are file-only (no Playwright), ~95% write reliability.

### 4.7 Planted Violations Testing Framework

**14 planted violations across 5 auditor types:**

| Target | Count | When Planted | Auditor |
|--------|-------|-------------|---------|
| Convention spec | 3 (C1-C3) | Before Convention Auditor | Convention Auditor |
| Research eval | 1 (R1) | Before Research Auditor | Research Auditor |
| Build output | 5 (B1-B5) | After Phase 1, before Phase 2 | Visual + Structural |
| Provenance chain | 3 (P1-P3) | After Phase 1, before Phase 2 | Provenance Auditor |
| Scribe output | 2 (S1-S2) | After scribe, before spot-check | Scribe Spot-Checker |

**Detection Scoring:** 5/5 or 3/3 = high confidence. 3-4/5 or 2/3 = investigate. <3/5 or <2/3 = NON-FUNCTIONAL auditor, escalate to user.

**Plant Timing Resolution:** Audit report stands with FAIL results on planted violations. Lead annotates: "FAIL items B1-B5, P1-P3 are PLANTED VIOLATIONS (detected successfully). Remaining FAIL items are GENUINE findings." No re-run needed.

---

## SECTION 5: TEAM & EXECUTION PROTOCOL

### 5.1 Full Team Topology (~25 Agents)

**Topology:** Flat-per-phase with Weaver thread. Flat works at <17 concurrent agents (AD never exceeds 9). No captains. Lead spawns all agents directly. Weaver persists across all phases.

#### PERSISTENT ROLES

| Role | Responsibility | Key Rule |
|------|---------------|----------|
| **Lead** | Orchestrate ONLY. NEVER build, NEVER run Playwright, NEVER read HTML source. Check binary gates, write identity deltas, commit. | THIN: reads state files, agent summaries, gate results only |
| **Weaver** | Cross-reference intelligence. Maintain AD-BUILD-STATE.md. Track finding ID sequence. Monitor convention drift. LAST to shut down. | Reads EVERYTHING from all agents -- no information barrier |

#### PHASE 0 AGENTS (~45-60 min)

| Role | Output Files | Reports To |
|------|-------------|-----------|
| Convention Agent | AD-CONVENTION-SPEC.md, AD-SOUL-TEMPLATE.html | Lead |
| R-4 Evaluator | R-4-AD-EVALUATION.md | Lead |
| R-2 Re-Mapper | r2-ad-mapping.md | Lead |
| Research Packager(s) | research-package-ad-{1-6}.md | Lead |
| Convention Auditor | CONVENTION-AUDIT-REPORT.md | Lead |
| Research Auditor | RESEARCH-AUDIT-REPORT.md | Lead |

#### PHASE 1 AGENTS (3 waves x ~45-60 min each)

Per wave:
| Role | Output Files | Reports To |
|------|-------------|-----------|
| Builder-{A,B} | AD-{N}.html, findings-builder-{X}.md | Lead |
| Scribe | AD-outbound-findings.md (append), RESEARCH-ACTIVE.md, EXT-RESEARCH-REGISTRY.md | Lead |
| Scribe Spot-Checker | SCRIBE-SPOT-CHECK-WAVE{N}.md | Lead |

#### PHASE 2 AGENTS (~45-60 min)

| Role | Output Files | Notes |
|------|-------------|-------|
| Visual Auditor 1-3 | visual-audit-{1-6}.md | SEQUENTIAL Playwright (1 then 2 then 3) |
| Structural Auditor | structural-audit-report.md | File-only, parallel |
| Fresh-Eyes | fresh-eyes-report.md | Playwright AFTER visual auditors complete |
| Provenance Auditor | PROVENANCE-AUDIT-REPORT.md | File-only, parallel |
| Synthesizer | AD-AUDIT-SYNTHESIS.md | After all auditors |

#### PHASE 3 AGENTS (~25 min)

1 fixer per AD file needing fixes (per-file ownership, zero contention). Programmatic verifier then visual verifier (sequential). Post-fix scribe + spot-checker.

#### PHASE 4 AGENTS (~30 min)

Synthesizer (AD-SYNTHESIS.md), Identity Scribe (v2.md), Infrastructure Updater (BACKBONE, PIPELINE-MANIFEST, SOUL-DISCOVERIES, STAGE-HEADER, CLAUDE.md files).

### 5.2 Wave Execution Order (Phases 0-4 with Gates)

#### PHASE 0: Setup + Convention + Research (~45-60 min)

**Sub-Phase 0A: Setup (Lead only, ~10 min)**
```
1. Create working directories
2. Start HTTP server
3. Verify Playwright
4. Create AD-BUILD-STATE.md
5. Execute pre-AD housekeeping:
   a. Fix BACKBONE.md R-2 count: 78 -> 27 in BOTH locations
   b. Fix stage-4-axis-ad/CLAUDE.md: v1 -> v1.1
   c. Verify OD-CONVENTION-SPEC.md reflects all post-audit fixes (30-45 min)
   d. Create explorations/axis/CLAUDE.md (does not exist yet)
   e. Decide ACCUMULATED-IDENTITY v2 location (provenance/ recommended)
```

**Sub-Phase 0B: Convention + Research (parallel, ~30-40 min)**
Spawn simultaneously: Convention Agent, R-4 Evaluator, R-2 Re-Mapper

**Sub-Phase 0C: Research Packages + Auditors (~15-20 min)**
Spawn: Research Packager(s), Convention Auditor (AS convention completes), Research Auditor (AS evaluators complete)

**Sub-Phase 0D: Gate Compilation**
Lead: Compile AD-RESEARCH-GATE.md. Plant 3 convention violations + 1 research miscategorization. After auditors pass: remove all planted violations.

**GATE 0: 20 binary checks.** ALL must PASS before any builder spawns.

#### PHASE 1: Batched Build (3 waves, ~2-3 hours total)

**Wave 1A: AD-001 (Z-Pattern) + AD-002 (F-Pattern)**
- Sub-Phase 1A-Build: Builders copy template, add content + axis CSS, write findings to per-builder scratch files
- Sub-Phase 1A-Scribe: Merge findings, update provenance files (SEQUENTIAL after builders)
- Sub-Phase 1A-Verify: Scribe spot-check + gate checks
- Sub-Phase 1A-Delta: Lead writes identity-delta-ad-wave1A.md

**Wave 1B: AD-003 (Bento Grid) + AD-004 (Spiral or alternative)**
Same structure. Builders receive identity delta from 1A. Cross-wave consistency check added.

**Wave 1C: AD-005 (Choreography) + AD-006 (Compound -- crown jewel)**
Same structure. AD-006 gets 30-40% additional research investment.

**PER-WAVE GATE: 16 binary checks.** Includes:
- W-04/05/06: Soul compliance (border-radius, box-shadow, filter = 0 violations)
- W-07: Border 0 instances of 2px
- W-08: All backgrounds opaque
- W-12: AD-F findings written (FAIL ROUTE: deploy scribe)
- W-14: Scribe Spot-Check PASS
- W-15: Identity Delta verified by Weaver

**POST-PHASE 1:** Plant 5 build violations + 3 provenance violations for Phase 2 audit.

#### PHASE 2: Adversarial Audit (~45-60 min)

Wave 2A: Visual Audit (sequential Playwright, 3 auditors one after another)
Wave 2B: Structural + Provenance (parallel, file-only)
Wave 2C: Fresh-Eyes (after 2A+2B, with information barrier)
Wave 2D: Weaver synthesis + audit compilation

**GATE 4: 11 checks.** Includes planted violation detection (5/5 build, 3/3 provenance).

#### PHASE 3: Fix Execution (~25 min)

Per-file fixers (parallel), programmatic then visual verification (sequential), post-fix scribe + spot-check.

**GATE 5: 10 checks.** 0 NEW violations introduced by fixes.

#### PHASE 4: Synthesis + Handoff (~30 min)

Synthesizer + Identity Scribe + Infrastructure Updater (parallel). Lead writes HANDOFF-AD-TO-CD.md.

**GATE 6: 13 checks.** Includes chain integrity scan and J-03 Test.

**POST-GATE 6:** Lead commits. Shutdown Weaver (LAST). TeamDelete.

### 5.3 Convention Bottleneck Solution (3-Part)

**THE PROBLEM:** One Convention Agent makes unsupervised decisions (T2 values) that propagate to 6 builders. If a T2 value is WRONG, 6 explorations inherit the error.

**PART 1: Two-phase lifecycle.** T2 values start DRAFT, validated after Wave 1A, frozen after Wave 1B. Wrong decisions caught after 1-2 explorations, not 6.

**PART 2: LOCKED/AXIS split.** Convention errors in the LOCKED layer would be catastrophic (6x propagation). But LOCKED values are INHERITED (T1, already validated by OD). Convention errors in the AXIS layer are per-builder (limited blast radius).

**PART 3: Convention Auditor.** 16 binary checks before ANY builder starts. 20:1 ROI.

### 5.4 Per-File Ownership Model

> **No agent touches a file they don't own. Ever.**

This is the single most reliable team pattern, validated by OD Fix Execution (4 fixers, zero file conflicts).

**Finding ID Reserved Ranges:**

| Builder | AD Exploration | Reserved Range |
|---------|---------------|----------------|
| Builder-A | AD-001 Z-Pattern | AD-F-001 through AD-F-004 |
| Builder-B | AD-002 F-Pattern | AD-F-005 through AD-F-008 |
| Builder-C | AD-003 Bento Grid | AD-F-009 through AD-F-012 |
| Builder-D | AD-004 Spiral | AD-F-013 through AD-F-016 |
| Builder-E | AD-005 Choreography | AD-F-017 through AD-F-020 |
| Builder-F | AD-006 Compound | AD-F-021 through AD-F-028 |
| Overflow | Any builder | AD-F-029+ |

### 5.5 Recovery Protocol

**STATE FILES (survive compaction):**
- AD-BUILD-STATE.md (Weaver-maintained)
- _ad-execution/CLAUDE.md (file manifest)
- identity-delta-ad-wave{N}.md (identity evolution)
- Per-agent output files (partial output IS checkpoint)

**LEAD RECOVERY:**
1. RE-READ AD-BUILD-STATE.md -> current phase
2. RE-READ _ad-execution/CLAUDE.md -> file manifest
3. RE-READ latest identity delta -> current identity state
4. CHECK TaskList -> completed vs in_progress
5. VERIFY file existence for expected outputs
6. CONTINUE -- DO NOT restart
7. RE-SPAWN any agents whose files don't exist but should

**NON-WRITING AGENT PROTOCOL:**
```
If no output file exists 15 minutes after agent spawn:
  1. Check TaskList for agent status
  2. If in_progress: send message asking for status
  3. If idle/complete but no file: RESPAWN with simplified prompt
  4. If second spawn fails: Lead or Weaver performs work directly
```

### 5.6 Agent Prompt Design Rules

**LENGTH:** 50-100 lines max. Never exceed 200 lines. Describe OUTCOMES not PROCEDURES.

**MANDATORY PROMPT BLOCKS (embed in EVERY agent prompt):**

**Block 1: Soul Compliance Checklist (10 lines):**
```
- border-radius: 0 everywhere
- box-shadow: none
- No filter: drop-shadow()
- No fake depth, gradients, or blur
- Locked palette: #E83025, #1A1A1A, #FAFAF5, #E0D5C5, #6B9B7A, #4A7C9B, #C97065, #7C3AED
- Font trio: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
- Border weights: 4px left accent OR 3px full -- never 1-2px structural
- Spacing model: --space-* tokens
- Max 2 callouts per viewport section
- DD-F-006 fractal self-similarity at 4 scales
```

**Block 2: File-Write Enforcement (3 lines):**
```
CRITICAL: You MUST write your output file using the Write tool BEFORE you finish.
Your output file is: {exact absolute path}
If you do not write this file, your work is LOST.
```

**Block 3: Compaction Survival (5 lines):**
```
If your context compacts mid-task:
1. RE-READ your output file to see what you've already done
2. RE-READ AD-BUILD-STATE.md for current phase status
3. RE-READ your input files to rebuild context
4. Continue from where your output file left off -- DO NOT restart
```

### 5.7 OD Lessons Baked In (from 5 Teams, 100+ Agents)

| Lesson | Source Team | How AD Addresses It |
|--------|-----------|-------------------|
| Lead was "fat" (built, audited, ran Playwright) -- context died | Team 1 | Lead-THIN rule: orchestrate only |
| showcase/CLAUDE.md (500 lines) never read by builders | Team 1 | 10-line soul checklist embedded in prompt |
| Parallel builders can't iterate | Team 1 | Builders terminate after 1 response |
| 2,154-line prompt achieved ~33% completion | Team 2 | 50-100 line max |
| Fresh-eyes was highest value per agent | Team 2 | Fresh-eyes mandatory in Phase 2 |
| Per-file ownership eliminated ALL contention | Team 3 | Per-file ownership for all fixers |
| `document.fonts.ready` required before checks | Team 3 | Mandatory in all computed style checks |
| Workers spawned by captains didn't write files | Team 4 | No captains. Lead spawns directly. File-write enforcement in all prompts |
| Building without conventions created 3-dialect gap | Team 5 | Convention-first architecture |
| Deferred provenance required 18-agent remediation | Team 6 | Mode C incremental with scribe fallback |

### 5.8 Untested Mechanisms Inventory

| Mechanism | Risk | Fallback |
|-----------|------|----------|
| Builder incremental finding writing | Context-switching degrades build quality | Scribes formalize from CSS comments |
| Mode C during active build | Builders may drop finding-writing under pressure | Scribe formalization per wave |
| Convention-first architecture | Freezing untested values may lock in wrong decisions | Two-phase lifecycle + Convention Auditor |
| Identity deltas between waves | May be too shallow or too prescriptive | Quality gate (>= 2 surprises + >= 2 questions) + Weaver cross-check |
| Planted violation protocol | If detection rate is 0-1/5, audit is non-functional | Escalate to user for manual review |
| LOCKED/AXIS template split | Builders may modify LOCKED layer | Post-build diff gate |
| Weaver convention drift monitoring | May lag behind builders | Batch-per-wave, not continuous |

---

## SECTION 6: THE THREE DEEPEST HOLES -- REMEDIATION

### 6.1 Convention Bottleneck -> Two-Phase Lifecycle + LOCKED/AXIS + Convention Auditor

**The Problem:** 1 agent makes unsupervised decisions that propagate 6x. 1 wrong T2 decision x 6 builders x ~3 CSS properties = ~18 CSS fixes.

**The Fix (three-part):**
1. **Two-phase lifecycle:** T2 values start DRAFT, validated after Wave 1A, frozen after Wave 1B. Errors caught after 1-2 explorations, not 6.
2. **LOCKED/AXIS split:** Convention errors in LOCKED layer are prevented by inheritance (all LOCKED values are T1, already validated by OD). AXIS layer errors are per-builder (contained blast radius).
3. **Convention Auditor:** 16 binary checks before any builder starts. 20:1 ROI (15 min prevents 3-5 hours of downstream damage).

### 6.2 Provenance Timing Paradox -> Scribe Fallback Mechanism

**The Problem:** "Builders write findings at the moment of discovery" is the skeleton's single most important change from OD. It is also completely UNTESTED. OD builders never wrote formal findings; scribes always did.

**The Fix:** Attempt builder-writes first (per-builder scratch files for contention prevention). If Gate W-12 FAILS (0 findings after build), deploy per-wave scribe to formalize from CSS comments. This preserves the INTENT (per-wave provenance) using the PROVEN mechanism (scribes).

### 6.3 Binary-Judgment Boundary -> Explicit Classification of Every Rule

**The Problem:** Every analyst proposed improvements containing hidden judgment. Total would add 15+ judgment rules at ~0% compliance. This directly contradicts the governing principle.

**The Fix:** Explicitly classify EVERY rule as BINARY (gate-enforce, 100% compliance expected) or JUDGMENT (Lead/Fresh-Eyes only, ~0% compliance from others). After conversion, 94% of gates are fully binary. The remaining 6% contain residual judgment that is explicitly labeled, delegated to appropriate mechanisms, and never used as sole gate blockers.

---

## SECTION 7: CROSS-REFERENCE INDEX

### 7.1 All 15 Cross-References

| ID | Finding | Severity | Resolution |
|----|---------|----------|------------|
| XR-01 | Builder incremental finding writing untested | CRITICAL | Scribe fallback from CSS comments |
| XR-02 | File write contention for simultaneous writes | CRITICAL | Per-builder scratch files, Lead merges |
| XR-03 | Convention freezing before validation | CRITICAL | Two-phase lifecycle + LOCKED/AXIS + Convention Auditor |
| XR-04 | No identity-research challenge protocol | CRITICAL | CLASS A/B/C/D + 4-branch decision tree (unified) |
| XR-05 | R-2 structural orphaning (0% across 3+ stages) | HIGH | Embed in research packages, anti-orphaning rule |
| XR-06 | No explicit layer architecture definition | HIGH | 9-layer functional + 3-layer physical architecture defined |
| XR-07 | Static research guidance never evolves | HIGH | Dynamic guidance in identity deltas, lens versioning |
| XR-08 | Enrichment layers not enumerated | HIGH | 8-layer checklist in builder prompts |
| XR-09 | Inline threading header format unspecified | HIGH | 7-section template specification |
| XR-10 | Identity delta quality gate too low | HIGH | >= 2 surprises + >= 2 questions minimum |
| XR-11 | Synced duplicate pattern unaddressed | MEDIUM | Designate authoritative location |
| XR-12 | ACCUMULATED-IDENTITY location anomaly | MEDIUM | Move v2 to provenance/ |
| XR-13 | Playwright contention during audit | MEDIUM | File-only new auditors, sequential visual |
| XR-14 | Anti-citation-theater infinite regress | MEDIUM | 3-layer strategy (binary then judgment) |
| XR-15 | BACKBONE.md R-2 count still wrong (78 vs 27) | MEDIUM | Fix BEFORE AD starts |

### 7.2 All 40 Gaps with Status

**CRITICAL (5) -- ALL ADDRESSED:**

| # | Gap | Resolution |
|---|-----|------------|
| 1 | File write contention (PC-09) | Per-builder scratch files |
| 2 | Convention bottleneck (XR-03) | Two-phase lifecycle |
| 3 | Builder finding writing untested (XR-01) | Scribe fallback |
| 4 | Challenge protocol missing (XR-04) | CLASS A/B/C/D + 4-branch tree |
| 5 | Convention inputs unspecified (E01) | 7 explicit input files enumerated |

**HIGH (10) -- ALL ADDRESSED:**

| # | Gap | Resolution |
|---|-----|------------|
| 6 | Enrichment layers not enumerated (XR-08) | 8-layer checklist |
| 7 | Inline header format unspecified (XR-09) | 7-section template |
| 8 | Layer architecture undefined (XR-06) | 9-layer + 3-layer |
| 9 | Static research guidance (XR-07) | Dynamic guidance per wave |
| 10 | R-2 orphaning (XR-05) | Embed in packages |
| 11 | Identity delta quality gate too low (XR-10) | Raised minimum |
| 12 | Research package format unspecified (Auditor M1) | 8-section template |
| 13 | Template enforcement weakness (E04) | LOCKED/AXIS split |
| 14 | No chain integrity diagnostic (PC-10) | Gate 6 scan |
| 15 | BACKBONE R-2 count stale (XR-15) | Fix before AD starts |

**MEDIUM (18) -- ALL ADDRESSED OR MITIGATED** (including YAML standardization, CLAUDE.md mesh, build tool/chain distinction, synced duplicates, pattern catalog, deferred issues, identity dosage, and more)

**LOW (7) -- MITIGATED OR ACCEPTED** (naming conventions, EXT-RESEARCH incremental, R-4 disambiguation, etc.)

### 7.3 Resolved Contradictions (5)

| # | Contradiction | Resolution |
|---|--------------|------------|
| 1 | "8 layers" vs 9 functional levels | 9 functional levels. "8 layers" is cosmetic error. |
| 2 | Dark matter indexer count (4 vs 3) | 3 completed. dm-c was never finished. |
| 3 | Identity delta element count (10 vs 11) | 11 elements. SOUL FAIL summary is separate. |
| 4 | Convention staleness effort (15 vs 30-45 min) | 30-45 minutes (multiple files may need updates). |
| 5 | Convention spec line count (300-500 vs 500-700) | 500-700 (standalone spec includes ALL OD values + AD additions). |

### 7.4 Emergent Patterns (4)

| # | Pattern | Impact | Resolution |
|---|---------|--------|------------|
| 1 | **Binary-Judgment Boundary** | Every analyst proposes improvements containing hidden judgment | Explicit BINARY/JUDGMENT classification of every rule |
| 2 | **Convention Bottleneck** | 1 agent, 6x amplification | Two-phase lifecycle + LOCKED/AXIS + Convention Auditor |
| 3 | **Provenance Timing Paradox** | Mode C uses wrong mechanism (builders not scribes) | Scribe fallback preserving per-wave intent |
| 4 | **Document Engineering** | Skeleton is ~90% procedural, ~10% structural | Add structural definitions (this document shifts toward ~60/40) |

---

## SECTION 8: NUANCE LOSS REPORT

Every [NUANCE LOSS] flag from cross-checkers and every [META: JUDGMENT RULE DETECTED] flag, with resolution.

### 8.1 Nuance Losses from Cross-Check Reports

| # | Source | Loss | Severity | Resolution |
|---|--------|------|----------|------------|
| 1 | 06-crosscheck-structural | GAP-E09: Screenshot provenance (PNGs need catalog files) | LOW | Screenshots tracked in AD-BUILD-STATE.md by Weaver. No separate catalog needed if Weaver maintains manifest in _ad-execution/CLAUDE.md. |
| 2 | 06-crosscheck-structural | GAP-CL-07: Cross-stage file naming convention | LOW | AD files use AD- prefix. Cross-stage files use version numbers. Registries are appended. Manifests are batch-updated. |
| 3 | 06-crosscheck-structural | Traversal path examples omitted from structural synthesis | HIGH | INCORPORATED in Section 2.3 of this document (4 traversal paths with step-by-step chains). |
| 4 | 06-crosscheck-structural | AD-BINARY-GATES.md 10-item checklist not reproduced | MEDIUM | 10-item soul checklist is embedded in Section 5.6 Block 1. Builder-specific binary gates are in per-wave gate checks. |
| 5 | 06-crosscheck-structural | Wave sub-phase sequencing (A->B->C->D) | MEDIUM | INCORPORATED in Section 5.2 Phase 1 sub-phases. |
| 6 | 06-crosscheck-structural | OD failure modes table (8 OD + 4 AD-specific) | MEDIUM | Mitigations are distributed throughout this document. Failure-mode-to-mitigation pairs captured in Section 5.8 (untested mechanisms). |
| 7 | 06-crosscheck-structural | OD benchmark numbers | LOW | Benchmarks are implicit in gate thresholds (>= 32/40 score, >= 80% R-4, >= 72% R-2). |
| 8 | 07-crosscheck-provenance | HANDOFF-AD-TO-CD 16-section structure not enumerated | MEDIUM | Referenced in gate checks. Full structure will be specified in HANDOFF-AD-TO-CD.md during Phase 4. |
| 9 | 07-crosscheck-provenance | AD-SYNTHESIS 7-section structure not listed | MEDIUM | Sections are: Story, Consumed/Produced, 6-Pattern Analysis, Quality Dialect, Key Decisions, Negative Space, Emergence Tracking. |
| 10 | 07-crosscheck-provenance | ACCUMULATED-IDENTITY-v2 specific changes list | MEDIUM | Changes: Sections 1-6 updated + New ANTI-PHYSICAL section + New Convention Spec Evolution + AD-F findings integrated + 6 open questions answered. |
| 11 | 07-crosscheck-provenance | NOTE-severity chronological inconsistency (OD-CONV-SPEC timing) | LOW | No impact on execution. |
| 12 | 08-crosscheck-identity | Auditor's ~15% challenge coverage correction | LOW | 0% claim not repeated. Formal protocol now provided. |
| 13 | 08-crosscheck-identity | "Spiral not circle" characterization | LOW | Behavior captured: Wave 1 confirms, Wave 2 stress-tests, Wave 3 extends. |
| 14 | 09-crosscheck-rules | Mode C untested during build not flagged in rules doc | MEDIUM | INCORPORATED in Section 5.8 (untested mechanisms inventory). |
| 15 | 09-crosscheck-rules | 6 vs 7 UNIQUE FRESH discrepancy | LOW | Source disagreement (captain report vs MEMORY.md). Minor. Use >= 3 as gate threshold. |
| 16 | 09-crosscheck-rules | "3-4 deep > 6 shallow" lesson | LOW | AD builds 6 explorations as planned. Depth ensured by per-AD research investment and quality gates. |
| 17 | 10-crosscheck-execution | XR-04 CLASS A/B/C/D detail not embedded in execution flow | HIGH | INCORPORATED in Section 3.3 and 3.5 of this document. |
| 18 | 10-crosscheck-execution | Document Engineering structural definitions referenced but not included | HIGH | INCORPORATED throughout Sections 1-3 of this document (structural definitions ARE the content). |
| 19 | 10-crosscheck-execution | Identity dosage for Convention Agent concern | MEDIUM | Convention Agent NEEDS full identity (577 lines) to write conventions. Mitigation: R-4 Evaluator independently reads identity-constraint map and can flag discrepancies. |
| 20 | 10-crosscheck-execution | Scribe Spot-Checker planted violations missing | MEDIUM | INCORPORATED in Section 4.7 (14 total planted violations, including S1 and S2 for scribe). |
| 21 | 10-crosscheck-execution | Gate count cosmetic error (87 vs 105) | LOW | Correct count is ~105 across all phases. This document uses the accurate count. |

### 8.2 Meta-Judgment Rules Detected

| # | Location | Rule | Issue | Resolution |
|---|----------|------|-------|------------|
| 1 | Section 4.3 (W-10 binary conversion) | Research Application Record accuracy | Presence is BINARY; accuracy delegated to PA-07/PA-08 spot-checks | ACCEPTED: spot-checks provide binary layer; full accuracy is judgment-terminal at human |
| 2 | Section 4.4 Layer 3 | Fresh-Eyes gestalt check | Comparing two subjective assessments | ACCEPTED: explicitly labeled JUDGMENT, routes to human review |
| 3 | Section 3.4 | Identity elevation criteria 2 and 4 | "Identity impact" and "irreversibility" are judgment | ACCEPTED: restricted to Lead-only protocol. Cannot be binarized. |
| 4 | Section 3.7 | Forward question evolution pattern | Whether question type matches wave position | ACCEPTED: labeled as JUDGMENT-BASED guideline, Lead is judgment agent |
| 5 | Section 4.3 (4-06 conversion) | "Same element" matching for contradiction detection | Different naming conventions across auditors | ACCEPTED: structural definition catches most; edge cases are residual judgment |
| 6 | Section 4.6 RA-06 | "Plausible" keyword-match for research spot-check | Synonym matching is judgment | ACCEPTED: labeled as RESIDUAL JUDGMENT. Spot-check is probabilistic by design |

---

## SECTION 9: EXECUTION CHECKLIST

Binary checklist another Claude instance can use to verify its plan covers everything.

### PRE-AD HOUSEKEEPING (before Phase 0)
```
[ ] BACKBONE.md R-2 count fixed: 78 -> 27 at line 85 AND line 311
[ ] stage-4-axis-ad/CLAUDE.md: v1 -> v1.1 at lines 46 AND 66
[ ] OD-CONVENTION-SPEC.md verified against all 10 post-comprehensive-audit fixes
[ ] explorations/axis/CLAUDE.md CREATED
[ ] ACCUMULATED-IDENTITY v2 location decided (provenance/ recommended)
[ ] Synced duplicate pattern decision made (continue or consolidate)
```

### PHASE 0 COVERAGE
```
[ ] HTTP server started and returning 200
[ ] Playwright verified (non-blank screenshot)
[ ] Working directories created (_ad-execution/, stage-4-axis-ad/)
[ ] Convention Agent spawned with 7 explicit input files
[ ] R-4 Evaluator spawned (categorize 192 findings)
[ ] R-2 Re-Mapper spawned (25 applicable findings)
[ ] Convention Auditor spawned AFTER Convention Agent completes (16 binary checks)
[ ] Research Auditor spawned AFTER evaluators complete (10 binary checks)
[ ] 3 convention violations planted (C1-C3) before Convention Auditor
[ ] 1 research miscategorization planted (R1) before Research Auditor
[ ] AD-CONVENTION-SPEC.md exists, >= 500 lines, all values labeled T1/T2
[ ] AD-SOUL-TEMPLATE.html exists with LOCKED/AXIS split
[ ] 6 research packages exist with R-2 EMBEDDED (not referenced)
[ ] AD-RESEARCH-GATE.md compiled
[ ] Finding ID ranges assigned to all builders
[ ] All planted violations detected, then removed
[ ] Gate 0 passes (20 checks)
```

### PHASE 1 COVERAGE (per wave)
```
[ ] Builders receive: soul template + convention spec + research package + latest identity delta
[ ] Per-builder scratch files created (one per builder)
[ ] Builders use template as starting point (copy, not create from scratch)
[ ] Each builder runs 10-item self-check before completion
[ ] Scribe spawned AFTER builders complete (never concurrent)
[ ] Scribe merges findings from scratch files -> AD-outbound-findings.md
[ ] Scribe Spot-Checker runs 6 binary checks (SC-01-SC-06)
[ ] Lead writes identity delta (>= 2 surprises, >= 2 questions, >= 1 EXT-AXIS-* reference)
[ ] Weaver verifies identity delta (ID-01 through ID-04)
[ ] Cross-wave consistency check for Wave 1B+ (tokens match)
[ ] Wave gate passes (16+ checks)
```

### PHASE 2 COVERAGE
```
[ ] 5 build violations planted (B1-B5) before audit
[ ] 3 provenance violations planted (P1-P3) before audit
[ ] Visual auditors run SEQUENTIALLY (not parallel) to prevent Playwright contention
[ ] Structural auditor runs file-only (parallel with visual, no Playwright)
[ ] Fresh-Eyes has information barrier (no convention spec, no prior findings)
[ ] Fresh-Eyes produces >= 3 UNIQUE FRESH findings
[ ] Provenance Auditor runs 12 binary checks (PA-01-PA-12)
[ ] Weaver cross-references all audit findings
[ ] Planted violations detection rate documented
[ ] All planted violations removed BEFORE Phase 3
[ ] Gate 4 passes (11 checks)
```

### PHASE 3 COVERAGE
```
[ ] One fixer per AD file needing fixes (per-file ownership)
[ ] Fixers MAY investigate findings before fixing (false positive check)
[ ] Programmatic verifier runs BEFORE visual verifier (sequential)
[ ] document.fonts.ready used before any computed style check
[ ] Soul compliance re-verified: 0 violations post-fix
[ ] 0 NEW violations introduced by fixes
[ ] Post-fix scribe updates provenance
[ ] Post-fix scribe spot-check passes
[ ] Gate 5 passes (10 checks)
```

### PHASE 4 COVERAGE
```
[ ] AD-SYNTHESIS.md created with 7 sections
[ ] ACCUMULATED-IDENTITY-v2.md finalized (700-800 lines, standalone, >= 3 AD sentences)
[ ] HANDOFF-AD-TO-CD.md created with acknowledgment protocol
[ ] BACKBONE.md updated with Stage 4 narrative
[ ] PIPELINE-MANIFEST.md updated with AD-F entries and Section E walkthrough
[ ] RESEARCH-ACTIVE.md updated (R-4 >= 80%, R-2 >= 72%)
[ ] SOUL-DISCOVERIES.md has Stage 4 determination
[ ] axis-patterns.md has all 6 patterns (in DESIGN-SYSTEM/patterns/)
[ ] PATTERN-INDEX.md updated with axis entry
[ ] anti-patterns/registry.md updated (if AD-F-AP entries exist)
[ ] All 5 CLAUDE.md navigation mesh files updated
[ ] Chain integrity scan passed (9 items)
[ ] J-03 Test passed (5 questions answerable from provenance alone)
[ ] Git status shows only intended changes
[ ] Gate 6 passes (13 checks)
[ ] Lead commits (one committer, one branch)
[ ] Weaver shut down LAST
```

### IDENTITY-RESEARCH LOOP COVERAGE
```
[ ] Identity lens document generated (>= 5 DO + >= 5 DO NOT)
[ ] Identity-constraint map applied to >= 150 R-4 findings
[ ] >= 18 R-2 findings mapped to AD targets
[ ] >= 5 EXT-AXIS-* per AD, all SOUL PASS
[ ] Each research package contains >= 4 R-2 findings
[ ] Each builder report has DISCOVERIES + CHALLENGES sections
[ ] Every CHALLENGE finding has resolution (ADAPTED/REJECTED/ESCALATED/TEST-DESIGNED)
[ ] Every DISCOVERY has paradigm fit classification
[ ] Each delta references >= 1 EXT-AXIS-* finding by ID
[ ] Each delta contains REVISED RESEARCH GUIDANCE section
[ ] Cumulative checkpoint exists (50-100 lines)
[ ] Lens version matches wave number
[ ] Next wave packages contain DELTA-DERIVED QUERIES section
[ ] Final v2 contains >= 3 sentences referencing AD wave discoveries
[ ] Final v2 is standalone (700-800 lines)
```

### SEQUENCING PRINCIPLES (absolute rules)
```
[ ] Convention BEFORE any build
[ ] Research BEFORE build, never during
[ ] Identity loading BEFORE build
[ ] Scribe AFTER build, same wave
[ ] Visual audit BEFORE programmatic (if sharing Playwright)
[ ] Fresh-eyes AFTER regular audit
[ ] Per-file ownership for fixes
[ ] Weaver LAST to shut down
[ ] HTTP server BEFORE any Playwright agent
[ ] document.fonts.ready BEFORE any computed style check
```

---

## END OF MASTER AD EXECUTION SPECIFICATION

**Document Statistics:**
- Total length: ~2,400 lines
- Sections: 9 major sections + preamble
- Cross-references incorporated: 15
- Gaps addressed: 40 (5 CRITICAL, 10 HIGH, 18 MEDIUM, 7 LOW)
- Contradictions resolved: 5
- Emergent patterns addressed: 4
- Nuance losses cataloged and resolved: 21
- Meta-judgment rules detected and classified: 6
- Gates specified: 99 (94% binary after conversion)
- Agents specified: ~25 (9 peak concurrent)
- Untested mechanisms inventoried: 7 (all with fallbacks)
- OD lessons incorporated: from 5 teams, 100+ agents
- Execution checklist items: 90+ binary checkboxes

**This document is SELF-CONTAINED.** A Claude instance reading only this file can create a complete AD execution plan.
