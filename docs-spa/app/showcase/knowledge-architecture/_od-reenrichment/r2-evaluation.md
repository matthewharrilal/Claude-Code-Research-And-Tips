<!--
BUILT ON: ACCUMULATED-IDENTITY-v1.md, OD-SYNTHESIS, OD-outbound-findings, EXT-RESEARCH-REGISTRY, R2-CREATIVE-LAYOUTS
CONSUMED BY: builder-1a, builder-1b, scribe-1
-->

<!-- ─── LIGHT SECTION ───
Parent Phase: Stage 3 OD Re-Enrichment (Wave 1)
T1 Link: perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md
Chain: research/R2-CREATIVE-LAYOUTS.md → this file → OD-RESEARCH-GATE.md
Role: Comprehensive evaluation of all 27 R-2 Creative Layout findings against all 6 ODs. 25 SOUL PASS, 2 SOUL FAIL. Addresses R-2 at 0% consumption gap flagged in OD-SYNTHESIS Section 6b and HANDOFF-OD-TO-AD.
─── END LIGHT SECTION ─── -->

# R-2 Creative Layouts: Comprehensive Evaluation Against All 6 ODs

**Generated:** 2026-02-08
**Agent:** researcher-1a
**Purpose:** Evaluate ALL 27 R-2 Creative Layout findings against ALL 6 ODs
**Context:** R-2 is at 0% consumption -- 27 findings entirely untouched by OD stage. OD-SYNTHESIS Section 6b and HANDOFF-OD-TO-AD both flag this as a mandatory evaluation.

---

## Evaluation Protocol

Each R-2 finding is evaluated against ALL 6 ODs:
- **APPLICABLE** with rationale and target OD(s)
- **NOT APPLICABLE** with rationale
- **SOUL FAIL** if finding contradicts any of Gates 1-3

Soul Test Protocol applied to every finding:
- Gate 1 SOUL PIECES: Contradicts any of 5 soul pieces?
- Gate 2 LOCKED TOKENS: Requires border-radius > 0, box-shadow, off-palette?
- Gate 3 ANTI-PATTERNS: Matches anti-patterns/registry.md entry?

---

## Summary Table

| R2 Finding | Section | Soul Test | Applicable OD(s) | Priority |
|------------|---------|-----------|-------------------|----------|
| R2-1.1 Breaking the Grid | 1.1 | PASS (conditional) | OD-005, OD-006 | LOW |
| R2-1.2 Pull Quotes | 1.2 | PASS | OD-001, OD-002, OD-006 | MEDIUM |
| R2-1.3 Multi-Column Text | 1.3 | PASS | OD-002, OD-005 | LOW |
| R2-1.4 Running Headers | 1.4 | PASS | ALL (OD-001 already has scroll witness) | MEDIUM |
| R2-1.5 Whitespace as Content | 1.5 | PASS | ALL | HIGH |
| R2-2.1 F/Z-Pattern | 2.1 | PASS | OD-005, OD-006 | MEDIUM |
| R2-2.2 Card-Based Composition | 2.2 | PASS (conditional) | OD-003, OD-005, OD-006 | MEDIUM |
| R2-2.3 Dense but Breathable | 2.3 | PASS | OD-003, OD-004 | HIGH |
| R2-2.4 Dashboard Storylines | 2.4 | PASS | OD-002, OD-006 | MEDIUM |
| R2-3.1 Maturity Badges | 3.1 | PASS | OD-004 | HIGH |
| R2-3.2 Brand-Forward Docs | 3.2 | PASS | ALL | MEDIUM |
| R2-3.3 Dev Kitchen | 3.3 | PASS | OD-006 | LOW |
| R2-3.4 Atomic Design Org | 3.4 | PASS | OD-003, OD-004 | MEDIUM |
| R2-4.1 Bento Grid | 4.1 | PASS (conditional) | OD-005, OD-006 | MEDIUM |
| R2-4.2 Asymmetric Grid | 4.2 | PASS (conditional) | OD-005, OD-006 | LOW |
| R2-4.3 CSS Grid fr Units | 4.3 | PASS | OD-001, OD-004, OD-005 | MEDIUM |
| R2-4.4 Golden Ratio Grid | 4.4 | PARTIAL FAIL (typography), PASS (layout) | OD-005 (layout only) | LOW |
| R2-4.5 Swiss Design Grid | 4.5 | PASS | OD-003, OD-005, OD-006 | MEDIUM |
| R2-5.1 Typography as Primary | 5.1 | PASS | OD-001, OD-002, OD-006 | HIGH |
| R2-5.2 Whitespace for Hierarchy | 5.2 | PASS | ALL | HIGH |
| R2-5.3 Typographic Hierarchy | 5.3 | PASS | ALL | HIGH |
| R2-5.4 Dramatic Typography | 5.4 | PASS | OD-002, OD-006 | MEDIUM |
| R2-6.1 Split Screen | 6.1 | PASS | OD-004, OD-005 | LOW |
| R2-6.2 Overlapping Elements | 6.2 | SOUL FAIL | -- | -- |
| R2-6.3 Scrollytelling | 6.3 | PASS | OD-001, OD-002 | MEDIUM |
| R2-6.4 Card Animation | 6.4 | SOUL FAIL | -- | -- |
| R2-6.5 Copy-Paste Philosophy | 6.5 | PASS | ALL | MEDIUM |

**Totals:** 25 SOUL PASS (applicable) + 2 SOUL FAIL = 27 evaluated

---

## Per-Finding Detailed Evaluation

### R2-1.1: Breaking the Grid ("Intentional Mess")

**Soul Test:**
- Gate 1: PASS -- Sharp edges preserved; breaking the grid is about element positioning, not corner rounding
- Gate 2: PASS -- No locked token violations required. Uses CSS Grid named areas + negative margins
- Gate 3: CONDITIONAL PASS -- Must not use "decorative grid breaking" (anti-pattern). The breaking must serve CONTENT, not decoration

**Applicable ODs:**
- **OD-005 (Spatial):** APPLICABLE. Hub-spoke layout already uses CSS Grid. Allowing some spoke tiles to break grid boundaries (e.g., featured spoke spans 2 columns) would create visual hierarchy without decoration. Aligns with EXT-SPAT-003 (7-column magazine grid).
- **OD-006 (Creative):** APPLICABLE. As the crown jewel / synthesis page, OD-006 could use intentional grid breaks to signal section transitions between organizational modes. The break itself becomes a mode-transition marker.
- **OD-001 (Conversational):** NOT APPLICABLE. Conversational Q&A relies on consistent width variation (60%/100%) as its rhythm device. Breaking the grid would disrupt the TIDAL pattern.
- **OD-002 (Narrative):** NOT APPLICABLE. Narrative CRESCENDO requires linear vertical flow. Grid breaks would interrupt the progressive build.
- **OD-003 (Task-Based):** NOT APPLICABLE. Tasks are ISLANDS -- breaking the grid boundary of an island removes its isolation, destroying the pattern.
- **OD-004 (Confidence):** NOT APPLICABLE. Geological strata need clean horizontal layering. Grid breaks would confuse the certainty signal.

---

### R2-1.2: Pull Quotes as Structural Elements

**Soul Test:**
- Gate 1: PASS -- Reinforces Soul Piece 2 (serif=wisdom). Pull quotes in Instrument Serif italic = editorial authority
- Gate 2: PASS -- Uses font-size, font-style italic, border-left 4px (all locked tokens)
- Gate 3: PASS -- No anti-pattern match. Pull quotes interrupt scanning intentionally = different from callout stacking

**Applicable ODs:**
- **OD-001 (Conversational):** APPLICABLE. Pull quotes could extract key insights from answers, creating breathing pauses within dense answer zones. Placed between Q&A pairs, they serve as chapter dividers with content (extends OD-F-004 chapter breathing zones WITH content rather than empty space).
- **OD-002 (Narrative):** APPLICABLE. Pull quotes are a NATIVE editorial technique for narrative content. They create PULSE breaks within the CRESCENDO -- momentary sparse islands in the progressively dense build. Maps to R1-018 already applied.
- **OD-006 (Creative):** APPLICABLE. As meta-documentation, pull quotes could extract the key insight from each section's organizational pattern demonstration. "Organization IS Density" as a pull quote in OD-006 would be perfectly meta.
- **OD-003-005:** LOW applicability. Pull quotes are editorial techniques that don't map well to task-based, confidence-based, or spatial organizational patterns.

---

### R2-1.3: Multi-Column Text with Visual Interruptions

**Soul Test:**
- Gate 1: PASS -- No soul piece contradiction. Multi-column is a layout choice, not a soul issue.
- Gate 2: PASS -- CSS `column-count` and `column-gap` don't violate locked tokens.
- Gate 3: PASS -- Not decorative grid breaking (it's content-driven column flow).

**Applicable ODs:**
- **OD-002 (Narrative):** APPLICABLE at LOW priority. Newspaper-style columns could be used for exposition sections (Act I), transitioning to single-column for dense climax (Act III). The column-count reduction would mirror the CRESCENDO density increase.
- **OD-005 (Spatial):** APPLICABLE. Spoke content pages could use multi-column layouts for reference material within each spoke.
- Other ODs: NOT APPLICABLE. Q&A (OD-001) needs width variation, not column splits. Tasks (OD-003) need sequential flow. Confidence (OD-004) needs strata, not columns.

---

### R2-1.4: Running Headers and Section Markers

**Soul Test:**
- Gate 1: PASS -- Orientation markers support the editorial identity.
- Gate 2: PASS -- Sticky positioning, progress bars don't violate tokens.
- Gate 3: PASS -- No anti-pattern match.

**Applicable ODs:**
- **OD-001:** ALREADY APPLIED via EXT-CREATIVE-003 (scroll witness). Could be strengthened with section-level markers showing which chapter the reader is in.
- **OD-002:** APPLICABLE. Narrative arc position could be shown via a running header showing "Act I: Setup" -> "Act II: Rising" -> "Act III: Climax." Extends OD-F-011 (tension meters).
- **OD-003:** APPLICABLE. Task progress indicator showing completed/current/remaining tasks.
- **OD-004:** APPLICABLE. Stratum indicator showing current confidence level.
- **OD-005:** APPLICABLE. Breadcrumb showing hub->spoke->current position.
- **OD-006:** APPLICABLE. Section mode indicator showing which organizational pattern is currently being demonstrated.

---

### R2-1.5: White Space as Content

**Soul Test:**
- Gate 1: PASS -- STRENGTHENS Soul. Universal Rule 6 is "Whitespace as Design Element."
- Gate 2: PASS -- Generous margins align with --space-* tokens.
- Gate 3: PASS -- Directly OPPOSES anti-pattern "Same Density Throughout."

**Applicable ODs:**
- **ALL 6 ODs:** APPLICABLE. This finding validates the soul's own Rule 6. All ODs should use whitespace as content, not wasted space. OD-001/002 (Polished dialect) already do this well. OD-003/004/005 (Functional dialect) are the primary candidates for whitespace improvement -- the audit identified them as having longer pages without proportional content increase.
- **Priority:** HIGH for OD-003/004/005, MEDIUM for OD-001/002 (already strong), MEDIUM for OD-006.

---

### R2-2.1: F-Pattern and Z-Pattern for Information Hierarchy

**Soul Test:**
- Gate 1: PASS -- Layout placement patterns, no soul contradiction.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern match.

**Applicable ODs:**
- **OD-005 (Spatial):** APPLICABLE. The hub page should place the most important spoke in the top-left (primary attention zone per F-pattern). Secondary spokes follow the F or Z reading path.
- **OD-006 (Creative):** APPLICABLE. The pattern gallery (2x3 grid) should follow Z-pattern for the 6 OD comparison cards -- most important pattern top-left, synthesis bottom-right.
- Other ODs: NOT DIRECTLY APPLICABLE. OD-001/002 are single-column vertical flows. OD-003 uses task islands without clear spatial hierarchy. OD-004 uses strata (horizontal layers, not F/Z patterns).

---

### R2-2.2: Card-Based Composition with Hierarchy Signals

**Soul Test:**
- Gate 1: CONDITIONAL PASS -- Cards must have border-radius: 0 and box-shadow: none. Size/whitespace for hierarchy = PASS.
- Gate 2: PASS if cards use sharp edges and flat design.
- Gate 3: PASS -- Uses size not decoration for hierarchy.

**Applicable ODs:**
- **OD-003 (Task-Based):** APPLICABLE. Task map grid already uses card-like elements. Size differentiation (featured task 2x, standard 1x) would create hierarchy per this finding.
- **OD-005 (Spatial):** APPLICABLE. Hub-spoke tiles are already card-like. This finding provides the hierarchy mechanism (span 2 for featured spoke, span 1 for standard).
- **OD-006 (Creative):** APPLICABLE. Pattern gallery comparison grid could use card hierarchy signals.
- **OD-001/002/004:** NOT APPLICABLE. These use vertical flow, not card grids.

---

### R2-2.3: Dense but Breathable Interfaces

**Soul Test:**
- Gate 1: PASS -- Professional density aligns with editorial identity.
- Gate 2: PASS -- 8px base unit aligns with --space-2 token. Consistent gap values use --space-* tokens.
- Gate 3: PASS -- Opposes "Same Density Throughout" anti-pattern by being intentionally dense WITH breathing room.

**Applicable ODs:**
- **OD-003 (Task-Based):** HIGH APPLICABILITY. OD-003 has the most thin-border instances (661 computed) and longest page height (19,829px). Dense-but-breathable techniques (tight step spacing within islands, generous spacing between islands) would directly address the Functional dialect quality gap. Aligns with EXT-TASK-004 (3rem after titles, 6rem between islands).
- **OD-004 (Confidence):** HIGH APPLICABILITY. The geological strata should be dense within each layer but breathable between layers. The dead zone finding (false positive) still indicates a spacing rhythm issue.
- **OD-001/002:** Already achieved in Polished dialect.
- **OD-005/006:** MEDIUM applicability.

---

### R2-2.4: Analytical Dashboard Storylines

**Soul Test:**
- Gate 1: PASS -- Narrative organization aligns with editorial identity.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern match.

**Applicable ODs:**
- **OD-002 (Narrative):** APPLICABLE. The analytical storyline concept (organize as narrative, not catalog) IS OD-002's hypothesis. This finding validates the approach. Specific application: ensure OD-002's three-act structure reads as a learning journey from hero/overview through building blocks to composite patterns.
- **OD-006 (Creative):** APPLICABLE. OD-006's pattern gallery could adopt the storyline principle: start with overview, progress to individual patterns, end with the "Organization IS Density" synthesis.

---

### R2-3.1: Maturity Badges and Component Status

**Soul Test:**
- Gate 1: PASS -- Transparency builds trust, aligns with editorial authority.
- Gate 2: PASS -- Badges with border-radius: 0, locked palette colors.
- Gate 3: PASS -- No anti-pattern match.

**Applicable ODs:**
- **OD-004 (Confidence):** HIGH APPLICABILITY. Maturity badges directly map to OD-004's confidence levels: "Established" = Stable, "Probable" = Beta, "Speculative" = Experimental, "Open" = Draft. This finding provides the VISUAL MECHANISM for OD-004's confidence stratification. Extends EXT-CONF (Agentic Categorical Labels).
- **OD-003 (Task-Based):** MEDIUM. Task steps could show completion status badges.
- Other ODs: LOW applicability.

---

### R2-3.2: Brand-Forward Documentation (Audi Pattern)

**Soul Test:**
- Gate 1: PASS -- Brand-forward documentation reinforces editorial identity.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern match (connects components to use cases, not decoration).

**Applicable ODs:**
- **ALL 6 ODs:** MEDIUM APPLICABILITY. Each OD should connect its organizational pattern to real documentation use cases, not abstract demonstrations. OD-001's RSC tutorial is the best example of this already working. OD-003-005 could benefit from more brand-forward content that ties the organizational pattern to real KortAI documentation needs.

---

### R2-3.3: Development Kitchen / Experimental Namespace

**Soul Test:**
- Gate 1: PASS -- Shows system is alive.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **OD-006 (Creative):** APPLICABLE. OD-006 as the synthesis/emergent exploration could include a "Kitchen" section showing experimental organizational patterns that didn't make it into the main 5. This reinforces its role as the meta-documentation page.
- Other ODs: NOT APPLICABLE. Individual ODs demonstrate specific patterns, not experimental namespaces.

---

### R2-3.4: Atomic Design Organization

**Soul Test:**
- Gate 1: PASS -- Hierarchy of complexity aligns with editorial organization.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **OD-003 (Task-Based):** APPLICABLE. Tasks could be organized by complexity level: Atoms (single-step tasks), Molecules (multi-step sequences), Organisms (full workflows). This creates a CRESCENDO within the ISLANDS pattern.
- **OD-004 (Confidence):** APPLICABLE. Confidence strata could map to atomic design levels: Atoms (established facts), Molecules (common patterns), Organisms (complex recommendations).
- Other ODs: NOT DIRECTLY APPLICABLE. Conversational and narrative patterns don't have atomic decomposition.

---

### R2-4.1: Bento Grid Layout

**Soul Test:**
- Gate 1: CONDITIONAL PASS -- Bento tiles MUST have border-radius: 0. No rounded corners.
- Gate 2: PASS if tiles are sharp-edged and flat.
- Gate 3: PASS -- Creates visual interest through variety while maintaining order.

**Applicable ODs:**
- **OD-005 (Spatial):** APPLICABLE. Hub-spoke grid could use bento layout with varied tile sizes for different spoke importance levels.
- **OD-006 (Creative):** APPLICABLE. Pattern gallery comparison could use bento grid (2x2 featured pattern, 1x1 supporting patterns).
- Other ODs: NOT APPLICABLE. Conversational, narrative, task-based, and confidence patterns are primarily vertical-flow layouts.

---

### R2-4.2: Asymmetric / Broken Grid Layouts

**Soul Test:**
- Gate 1: CONDITIONAL PASS -- Asymmetry must serve content, not decoration. Same condition as R2-1.1.
- Gate 2: PASS -- CSS Grid positioning only.
- Gate 3: CONDITIONAL PASS -- Must not match "Decorative Grid Breaking" anti-pattern.

**Applicable ODs:**
- **OD-005 (Spatial):** LOW APPLICABILITY. Hub-spoke already provides asymmetry. Adding broken grid on top may be excessive.
- **OD-006 (Creative):** LOW APPLICABILITY. Could be used for mode-transition sections.
- Other ODs: NOT APPLICABLE. Same rationale as R2-1.1.

---

### R2-4.3: CSS Grid with Fractional Units (fr)

**Soul Test:**
- Gate 1: PASS -- Proportional layout, no soul contradiction.
- Gate 2: PASS -- CSS Grid fr units don't violate any token.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **OD-001 (Conversational):** APPLICABLE. The 60%/100% width variation could be expressed with fr units: `grid-template-columns: 3fr 5fr` for Q/A side-by-side layouts on wide viewports. This creates natural proportion without arbitrary percentages.
- **OD-004 (Confidence):** APPLICABLE. Certainty strata with comparison columns could use `2fr 1fr` for established (wider) vs speculative (narrower) content. Wider = more certain, narrower = less certain. Extends OD-F-001 concept (width as density signal) to confidence context.
- **OD-005 (Spatial):** APPLICABLE. Hub-spoke grid already uses CSS Grid. Fr units provide more flexible proportions than fixed column counts.

---

### R2-4.4: Golden Ratio Grid System

**Soul Test:**
- Gate 1: PASS for layout proportions. FAIL for typography values.
- Gate 2: PARTIAL FAIL. Layout proportions (61.8%/38.2%) are fine. Typography values (16px -> 26px -> 42px) deviate from locked type scale (16px -> 24px -> 40px). The golden ratio type values diverge by 2px at each level.
- Gate 3: PASS -- No anti-pattern match for layout proportions.

**Applicable ODs:**
- **OD-005 (Spatial):** APPLICABLE (LAYOUT ONLY -- NOT typography). Content area 61.8% + sidebar 38.2% could enhance the hub-spoke layout. The golden ratio provides mathematically harmonious proportions.
- Other ODs: LOW applicability. Vertical-flow ODs don't benefit from golden ratio column splits.

**NOTE:** Builder MUST NOT apply the golden ratio to typography. The locked type scale uses ~1.5x ratio, not 1.618x.

---

### R2-4.5: Swiss Design Grid System

**Soul Test:**
- Gate 1: PASS -- Swiss design aligns with KortAI's editorial philosophy (clean, minimal, typography-first).
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern match.

**Applicable ODs:**
- **OD-003 (Task-Based):** APPLICABLE. Swiss grid provides structure for task islands without decoration. Modular grid with consistent gutters creates orderly island arrangements.
- **OD-005 (Spatial):** APPLICABLE. Hub-spoke navigation could use Swiss grid principles for spoke page layouts.
- **OD-006 (Creative):** APPLICABLE. The pattern gallery benefits from Swiss grid's "classic sophistication with modern flexibility."

---

### R2-5.1: Typography as Primary Design Element

**Soul Test:**
- Gate 1: PASS -- STRONGLY REINFORCES Soul Pieces 1 and 2. Typography-dominant design IS KortAI's identity.
- Gate 2: PASS -- Uses Instrument Serif (display) + Inter (body). Large sizes create impact without decoration.
- Gate 3: PASS -- Directly opposes "need a hero image" assumption.

**Applicable ODs:**
- **OD-001 (Conversational):** HIGH APPLICABILITY. Questions in large Instrument Serif italic serve as typography-only heroes for each Q&A section. The question text IS the design element. Extends EXT-CONV-011 (bold minimalism).
- **OD-002 (Narrative):** HIGH APPLICABILITY. Narrative section headers in large serif create editorial authority. Act titles as typography heroes.
- **OD-006 (Creative):** HIGH APPLICABILITY. Already uses the strongest typography conviction. This finding validates OD-006's approach.
- **OD-003/004/005:** MEDIUM. Could strengthen headers with more typographic conviction.

---

### R2-5.2: Whitespace for Hierarchy

**Soul Test:**
- Gate 1: PASS -- REINFORCES Universal Rule 6 (whitespace as design element).
- Gate 2: PASS -- Uses --space-* tokens for spacing decisions.
- Gate 3: PASS -- Opposes "Same Density Throughout" anti-pattern.

**Applicable ODs:**
- **ALL 6 ODs:** HIGH APPLICABILITY. The proximity principle (headings closer to the text they introduce than preceding text) should be verified across all 6 ODs. The 1.5x rule (1.5x more whitespace above heading than below) creates clear grouping. Already applied via EXT-CONV-003 (three-level Gestalt spacing) in OD-001.

---

### R2-5.3: Typographic Hierarchy Techniques

**Soul Test:**
- Gate 1: PASS -- Size, weight, color as differentiation tools = core KortAI approach.
- Gate 2: PASS -- Must use locked font families and scale values.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **ALL 6 ODs:** HIGH APPLICABILITY. The minimalist typography scale (clamp-based responsive sizing) could be applied to all OD headers for responsive behavior. The "limit to two font pairings" rule is already satisfied (Instrument Serif + Inter, with JetBrains Mono for code = 3, one more than recommended but functionally distinct).

---

### R2-5.4: Dramatic Typography as Content

**Soul Test:**
- Gate 1: PASS -- Bold text compensates for fewer graphics = editorial identity.
- Gate 2: PASS -- Tight letter-spacing (-0.02em to -0.04em for display) is within soul parameters.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **OD-002 (Narrative):** APPLICABLE. Act titles could use dramatic display sizes (96px+) for impact at act openings, reinforcing the CRESCENDO structure.
- **OD-006 (Creative):** APPLICABLE. Section titles already use large display serif. This finding validates extending the drama.
- Other ODs: MEDIUM. Dramatic typography works best in editorial (OD-002, OD-006) contexts, less in functional (OD-003-005) or conversational (OD-001).

---

### R2-6.1: Split Screen Layouts

**Soul Test:**
- Gate 1: PASS -- Split screen is a layout choice, no soul contradiction.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **OD-004 (Confidence):** APPLICABLE. Split screen could show established (one side) vs speculative (other side) content simultaneously. Extends R1-004 (Three-Column Doctrine) with a simpler 2-panel model.
- **OD-005 (Spatial):** APPLICABLE. Hub on one side, spoke content on the other.
- Other ODs: NOT APPLICABLE. Conversational, narrative, and task patterns are sequential, not simultaneous.

---

### R2-6.2: Overlapping/Layered Elements with Z-Index

**Soul Test:**
- Gate 1: **FAIL** -- Contradicts Soul Piece 4 (shadows lie about depth, everything grounded on same plane). Overlapping creates implicit depth hierarchy.
- Gate 3: **FAIL** -- Matches anti-pattern: Decorative Grid Breaking.

**Verdict:** SOUL FAIL. Excluded from all ODs.

---

### R2-6.3: Scrollytelling for Documentation

**Soul Test:**
- Gate 1: PASS -- Scroll-driven narrative is a progressive disclosure technique, not a depth illusion.
- Gate 2: PASS -- CSS scroll-driven animations use no locked token violations. Must respect prefers-reduced-motion.
- Gate 3: PASS -- Not callout stacking or decorative breaking.

**Applicable ODs:**
- **OD-001 (Conversational):** APPLICABLE. Fixed component preview that changes as Q&A scrolls. EXT-CREATIVE-003 (scroll witness) is already applied. Full scrollytelling could enhance by showing the PULSE density visualization updating as the reader scrolls through Q&A pairs.
- **OD-002 (Narrative):** APPLICABLE. The most natural fit: narrative content IS storytelling. Fixed sidebar showing narrative arc position while content scrolls. Extends OD-F-011 (tension meters) to full scrollytelling.
- Other ODs: LOW. Scrollytelling is a linear narrative technique; task-based, confidence, and spatial patterns are non-linear.

---

### R2-6.4: Card Manipulation and Animation

**Soul Test:**
- Gate 1: **FAIL** -- Liquid glass aesthetic = shadows + blur. Tactile shadows = box-shadow. 3D details = fake depth. All violate Soul Piece 4.
- Gate 2: **FAIL** -- Requires box-shadow, border-radius > 0.
- Gate 3: **FAIL** -- Matches anti-pattern: Hover Lift Effects.

**Verdict:** SOUL FAIL. Excluded from all ODs.

---

### R2-6.5: Copy-Paste Component Philosophy (shadcn/ui)

**Soul Test:**
- Gate 1: PASS -- Ownership over dependency aligns with editorial authority.
- Gate 2: PASS -- No token violations.
- Gate 3: PASS -- No anti-pattern.

**Applicable ODs:**
- **ALL 6 ODs:** MEDIUM APPLICABILITY. Each OD's code examples could include prominent "copy code" buttons (already present in v2 fixes). The philosophy (own the code, control the styling) aligns with KortAI's opinionated design system. Application is more at the showcase level than individual OD level.

---

## Cross-OD Applicability Summary

| OD | R-2 Findings Applicable | HIGH Priority | MEDIUM Priority | LOW Priority |
|----|------------------------|---------------|-----------------|--------------|
| **OD-001** | 12 | R2-1.5, R2-5.1, R2-5.2, R2-5.3 | R2-1.2, R2-1.4, R2-4.3, R2-6.3, R2-6.5, R2-3.2 | R2-5.4, R2-2.3 |
| **OD-002** | 13 | R2-1.5, R2-5.1, R2-5.2, R2-5.3 | R2-1.2, R2-1.3, R2-1.4, R2-2.4, R2-5.4, R2-6.3, R2-3.2, R2-6.5 | R2-2.3 |
| **OD-003** | 12 | R2-1.5, R2-2.3, R2-5.2, R2-5.3 | R2-1.4, R2-2.2, R2-3.1, R2-3.4, R2-4.5, R2-3.2, R2-6.5 | R2-5.1 |
| **OD-004** | 13 | R2-1.5, R2-2.3, R2-3.1, R2-5.2, R2-5.3 | R2-1.4, R2-3.4, R2-4.3, R2-6.1, R2-3.2, R2-6.5 | R2-5.1, R2-5.4 |
| **OD-005** | 16 | R2-1.5, R2-5.2, R2-5.3 | R2-1.1, R2-1.3, R2-1.4, R2-2.1, R2-2.2, R2-4.1, R2-4.3, R2-4.4(layout), R2-4.5, R2-6.1, R2-3.2, R2-6.5 | R2-4.2 |
| **OD-006** | 16 | R2-1.5, R2-5.1, R2-5.2, R2-5.3 | R2-1.1, R2-1.2, R2-1.4, R2-2.1, R2-2.2, R2-2.4, R2-3.3, R2-4.1, R2-4.5, R2-5.4, R2-3.2, R2-6.5 | R2-4.2 |

### Key Observations

1. **Universal findings (ALL 6 ODs):** R2-1.5 (whitespace), R2-5.2 (whitespace hierarchy), R2-5.3 (typographic hierarchy), R2-3.2 (brand-forward), R2-6.5 (copy-paste), R2-1.4 (running headers) -- 6 findings apply universally
2. **OD-005 and OD-006 have the most applicable findings** (16 each) because they use grid/spatial layouts that benefit most from creative layout innovations
3. **OD-001 and OD-002 benefit primarily from editorial/typography findings** (R2-5.x series) since they use vertical flow, not grid layouts
4. **OD-003 and OD-004 benefit from density management findings** (R2-2.3 dense-but-breathable) since they are the Functional dialect with the most quality improvement needed
5. **Only 2 of 27 findings are SOUL FAIL** (R2-6.2 overlapping, R2-6.4 card animation) -- both fail on the depth/shadow constraint

---

## Recommendations for Re-Enrichment Priority

### For OD-001 (current re-enrichment target):
1. **R2-5.1** (Typography as Primary) -- HIGH. Questions as typography heroes. Aligns with EXT-CONV-011.
2. **R2-1.5** (Whitespace as Content) -- HIGH. Verify generous margins, Rule 6 compliance.
3. **R2-5.2** (Whitespace for Hierarchy) -- HIGH. Verify 1.5x heading proximity rule.
4. **R2-5.3** (Typographic Hierarchy) -- HIGH. Verify responsive clamp-based sizing.
5. **R2-1.2** (Pull Quotes) -- MEDIUM. Breathing pauses between Q&A groups with content.
6. **R2-6.3** (Scrollytelling) -- MEDIUM. Enhance scroll witness to full PULSE visualization.
7. **R2-4.3** (CSS Grid fr Units) -- MEDIUM. Express 60%/100% as fr unit proportions.

### For OD-002 (parallel re-enrichment):
1. **R2-5.1** (Typography as Primary) -- HIGH. Act titles as dramatic typography heroes.
2. **R2-5.4** (Dramatic Typography) -- MEDIUM. 96px+ act title sizes for narrative impact.
3. **R2-6.3** (Scrollytelling) -- MEDIUM. Natural fit for narrative arc storytelling.
4. **R2-1.2** (Pull Quotes) -- MEDIUM. Native editorial technique for narrative.
5. **R2-2.4** (Dashboard Storylines) -- MEDIUM. Validates OD-002's narrative approach.

---

*Evaluation completed by researcher-1a agent | 2026-02-08*
*27 R-2 findings evaluated against all 6 ODs*
*Results: 25 SOUL PASS (applicable to 1+ ODs), 2 SOUL FAIL (excluded)*
*Pattern of failures: depth illusions (overlapping, card animation with shadows/3D/hover-lift)*
*Most applicable ODs: OD-005 and OD-006 (16 findings each)*
*Least applicable ODs: OD-001 and OD-003 (12 findings each)*
*Universal findings (all 6 ODs): 6*
