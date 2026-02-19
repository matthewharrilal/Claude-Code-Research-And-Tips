# Pipeline v2 Recipe Compilation Plan

**Author:** recipe-compiler (Opus 4.6)
**Date:** 2026-02-18
**Task:** Classify every section of File 42 (1,746 lines) and produce the compiled recipe outline for ~650-line `operational-recipe.md`

---

## OUTPUT 1: Section-by-Section Classification

Every section of File 42 classified by destination.

| Section | Lines | Classification | Destination | Rationale |
|---------|-------|---------------|-------------|-----------|
| Title + Author/Sources block | 1-7 | ANALYSIS | Stays in ephemeral | Provenance metadata; recipe gets its own header |
| "HOW TO READ THIS DOCUMENT" | 10-26 | CONVICTION | Recipe (compressed to ~8 lines) | The recipe/checklist distinction IS operational — builders need this framing. But the evidence paragraph (line 22) is analysis. |
| **PART 1: THE RECIPE** header | 28-36 | RECIPE | Recipe | Phase overview + content-agnostic declaration. Keep verbatim. |
| **Phase 0: Content Analysis and Zone Architecture** | 38-171 | RECIPE | Recipe | Core recipe content. All 6 steps (0.1-0.6) + checkpoint. Keep entirely. |
| Step 0.1 (Read Foundation Files) | 42-50 | RECIPE | Recipe | Mandatory read step with verification. |
| Step 0.2 (Read Content) | 52-73 | RECIPE | Recipe | Content analysis with inventory template. |
| Step 0.3 (Determine Zone Count) | 75-88 | RECIPE | Recipe | Zone count table + Alexander/Salingaros ceiling note. |
| Step 0.4 (Zone Semantics) | 90-116 | RECIPE | Recipe | Zone property table + 3-zone/2-zone examples. |
| Step 0.5 (Section Architecture) | 118-134 | RECIPE | Recipe | Layout shapes + grid mandate. |
| Step 0.6 (Transition Types) | 136-158 | RECIPE | Recipe | Transition type table + stacking arithmetic proof. |
| Phase 0 Checkpoint | 160-171 | RECIPE | Recipe | Checklist gate. |
| **Phase 1: HTML Skeleton** | 174-353 | RECIPE | Recipe | All 7 steps (1.1-1.7) + perception check. Keep entirely. |
| Step 1.1 (Document Shell) | 180-213 | RECIPE | Recipe | HTML template. The "Why skip-link" line (212) is borderline analysis but short enough to keep. |
| Step 1.2 (Header) | 214-231 | RECIPE | Recipe | Header HTML + constraints. |
| Step 1.3 (Sections with Zone Classes) | 233-258 | RECIPE | Recipe | Section markup template + ARIA. |
| Step 1.4 (Component Markup) | 260-295 | RECIPE | Recipe | Callout/table/pullquote markup templates. |
| Step 1.5 (Grid Wrappers) | 297-319 | RECIPE | Recipe | Grid HTML templates. The "Why wrapper divs" note (319) is borderline analysis but operationally necessary. |
| Step 1.6 (ARIA Attributes) | 321-327 | RECIPE | Recipe | ARIA attribute list. |
| Step 1.7 (Footer) | 329-341 | RECIPE | Recipe | Footer HTML template. |
| Phase 1 Perception Check | 343-353 | RECIPE | Recipe | Visual verification checklist. |
| **Phase 2: Base CSS and Soul Enforcement** | 356-578 | RECIPE | Recipe | All 4 steps (2.1-2.4) + perception check. |
| Step 2.1 (CSS Reset + Tokens) | 362-409 | RECIPE | Recipe | Full CSS reset + :root block. |
| Step 2.2 (Soul Enforcement) | 412-424 | RECIPE | Recipe | The `!important` soul enforcement block. The "Why !important" paragraph (424) is CONVICTION but short and operationally critical — keep. |
| Step 2.3 (Base Typography + Container) | 428-476 | RECIPE | Recipe | Base CSS. The "Container width is NON-NEGOTIABLE" line (476) is CONVICTION but keep as inline warning. |
| Step 2.4 (Header + Footer CSS) | 479-567 | RECIPE | Recipe | Bookend pattern CSS. |
| "Why dark bookends" paragraph | 566 | ANALYSIS | Remove from recipe | Evidence citation. |
| Phase 2 Perception Check | 568-578 | RECIPE | Recipe | Visual verification. |
| **Phase 3: Zone System and Backgrounds** | 582-674 | RECIPE | Recipe | All 3 steps (3.1-3.3) + perception check. |
| Step 3.1 (Zone Background Colors) | 586-620 | RECIPE | Recipe | Color templates + warm-only palette rule. |
| Step 3.2 (Apply Zone Backgrounds) | 622-631 | RECIPE | Recipe | CSS selectors. |
| Step 3.3 (Section Padding by Zone) | 633-666 | RECIPE | Recipe | Zone padding CSS with adaptation note. |
| Phase 3 Perception Check | 668-674 | RECIPE | Recipe | Visual verification. |
| **Phase 4: Structural Borders and Dividers** | 677-937 | RECIPE | Recipe | All 7 steps (4.1-4.7) + perception check. |
| Step 4.1 (Section-Level Left Borders) | 681-721 | RECIPE | Recipe | Border CSS. "Why this pattern" paragraph (720-721) is CONVICTION but keep as inline note. |
| Step 4.2 (Transition Dividers) | 723-759 | RECIPE | Recipe | Divider CSS. |
| Step 4.3 (Callout Family) | 761-818 | RECIPE | Recipe | Full callout CSS with 4 variants. |
| "All callout backgrounds MUST pass warm test" note | 818 | RECIPE | Recipe | Inline constraint — keep. |
| Step 4.4 (Grid Layouts) | 820-839 | RECIPE | Recipe | Grid CSS. |
| Step 4.5 (Table Styling) | 841-883 | RECIPE | Recipe | Table CSS. |
| Step 4.6 (Pullquote) | 886-909 | RECIPE | Recipe | Pullquote CSS. |
| Step 4.7 (Section Indicator) | 911-927 | RECIPE | Recipe | Indicator CSS. |
| Phase 4 Perception Check | 929-937 | RECIPE | Recipe | Visual verification. |
| **Phase 5: Typography Zones** | 940-1036 | RECIPE | Recipe | All 3 steps (5.1-5.3) + perception check. |
| Step 5.1 (Paragraph Typography by Zone) | 946-988 | RECIPE | Recipe | Zone paragraph CSS. |
| Step 5.2 (Heading Typography by Zone) | 990-1016 | RECIPE | Recipe | Zone heading CSS. |
| Step 5.3 (Paragraph Spacing by Zone) | 1018-1028 | RECIPE | Recipe | Zone spacing CSS. |
| Phase 5 Perception Check | 1030-1036 | RECIPE | Recipe | Visual verification. |
| **Phase 6: Element-Level Richness** | 1039-1133 | RECIPE | Recipe | All 3 steps (6.1-6.3) + perception check. |
| Step 6.1 (Inline Elements) | 1044-1087 | RECIPE | Recipe | Inline code, links, selection CSS. |
| Step 6.2 (Code Blocks) | 1089-1111 | RECIPE | Recipe | Code block CSS. |
| Step 6.3 (Drop Cap) | 1113-1125 | RECIPE | Recipe | Optional drop cap CSS. |
| Phase 6 Perception Check | 1127-1133 | RECIPE | Recipe | Visual verification. |
| **Phase 7: Accessibility and Responsive** | 1136-1250 | RECIPE | Recipe | All 3 steps (7.1-7.3) + perception check. |
| Step 7.1 (Accessibility) | 1142-1176 | RECIPE | Recipe | Focus, skip-link, reduced motion CSS. |
| Step 7.2 (Print Styles) | 1178-1203 | RECIPE | Recipe | Print CSS. |
| Step 7.3 (Responsive Breakpoints) | 1206-1242 | RECIPE | Recipe | 768px + 480px breakpoints. |
| Phase 7 Perception Check | 1244-1250 | RECIPE | Recipe | Visual verification. |
| **Phase 8: Verification** | 1253-1349 | RECIPE | Recipe | All 7 checks (8A-8G) + ship decision. Keep but COMPRESS perception threshold table — reference the standalone file instead of duplicating. |
| 8A (Perception Threshold Verification) | 1258-1271 | RECIPE | Recipe (compressed) | Table + rule. Reference `perception-thresholds.md` for canonical values. |
| 8B (Void Prevention) | 1273-1281 | RECIPE | Recipe | Void check. |
| 8C (Scale 5 Verification) | 1283-1291 | RECIPE | Recipe | 5-scale checklist. |
| 8D (Soul Constraint Verification) | 1293-1301 | RECIPE | Recipe | Soul checklist. |
| 8E (Multi-Coherence Verification) | 1303-1319 | RECIPE | Recipe | Coherence table template. |
| 8F (Accessibility Verification) | 1321-1330 | RECIPE | Recipe | Accessibility checklist. |
| 8G (Gestalt Perception Test) | 1332-1341 | RECIPE | Recipe | Subjective perception test. |
| Phase 8 Ship Decision | 1343-1349 | RECIPE | Recipe | Ship/fix/kill criteria. |
| --- | --- | --- | --- | --- |
| **PART 2: THE TEAM ARCHITECTURE** | 1354-1426 | ARCHITECTURE | Building protocol (CLAUDE.md) | Multi-agent topology, wave architecture, screenshot pattern, dependency chain. This is team-lead/orchestrator content, NOT builder content. |
| Recommended Team Structure | 1358-1399 | ARCHITECTURE | compositional-core/CLAUDE.md | Middle-tier (single builder) + Ceiling/Flagship (4-wave) architecture. |
| When Opus vs Sonnet | 1366-1368 | ARCHITECTURE | compositional-core/CLAUDE.md | Builder model selection guidance. |
| 4-wave architecture diagram | 1371-1393 | ARCHITECTURE | compositional-core/CLAUDE.md | Wave 0-3 agent topology. |
| Screenshot Pre-Capture Pattern | 1401-1410 | ARCHITECTURE | compositional-core/CLAUDE.md | PA workflow optimization. |
| Dependency Chain | 1412-1425 | ARCHITECTURE | compositional-core/CLAUDE.md | Phase ordering for potential parallelization. |
| --- | --- | --- | --- | --- |
| **PART 3: THE CONVICTION LAYER** | 1430-1487 | CONVICTION | build-page SKILL.md | Identity prohibitions, design philosophy, quality bar, core principle. This is pre-build mental model content. |
| 3.1 Identity Prohibitions | 1435-1443 | CONVICTION | build-page SKILL.md (and/or recipe preamble) | The 5 refusals. Already embedded in Phase 2 CSS values, but the philosophy framing is useful as builder orientation. |
| 3.2 Design Philosophy | 1445-1461 | CONVICTION | build-page SKILL.md | Personality axes (IS/IS NOT) + anti-scale model. |
| 3.3 Quality Bar | 1463-1475 | CONVICTION | build-page SKILL.md | PA-05 score levels + what DESIGNED means. |
| 3.4 Core Principle | 1477-1487 | CONVICTION | build-page SKILL.md (or recipe preamble) | "Recipes work, checklists fail" — the motivating principle. Already in "How to Read" section. |
| --- | --- | --- | --- | --- |
| **PART 4: WHAT THIS RECIPE DOES NOT COVER** | 1491-1531 | RECIPE (partially) | Recipe (Content Decision Guide section) | 4.1 (content decisions table) = RECIPE. 4.2 (file references) = RECIPE. 4.3 (metaphor integration) = goes to build-page SKILL.md routing. |
| 4.1 Content-Specific Decisions | 1494-1505 | RECIPE | Recipe (Content Decision Guide) | Decision table for content-specific judgment calls. Operationally necessary. |
| 4.2 What to Read for Guidance | 1507-1519 | RECIPE | Recipe (Content Decision Guide) | File reference table. |
| 4.3 Metaphor Integration (Track 2 Only) | 1521-1531 | ARCHITECTURE | build-page SKILL.md | Track 2 routing — how the recipe adapts for metaphor-driven builds. |
| --- | --- | --- | --- | --- |
| **PART 5: KNOWN RISKS** | 1535-1601 | ANALYSIS | Stays in ephemeral | Risk analysis with early warning signs. Valuable for human understanding but NOT builder execution content. |
| Risk 1-8 (Sub-Perceptual Drift through Metaphor Override) | 1539-1601 | ANALYSIS | Stays in ephemeral | Each risk is 8-12 lines of analysis. The MITIGATIONS are already embedded as recipe steps (perception checks, warm test, grid mandate, etc.). |
| --- | --- | --- | --- | --- |
| **APPENDIX A: Perception Thresholds Reference** | 1606-1624 | RECIPE (reference) | Recipe (Quick Reference section) | Threshold table. Compressed version goes in recipe; canonical version goes to `perception-thresholds.md`. |
| --- | --- | --- | --- | --- |
| **APPENDIX B: Deallocation Protocol** | 1628-1655 | RECIPE (conditional) | Recipe (Appendix — Remediation Only) | Only applies when REMEDIATING, not building from scratch. Include as a short appendix (~20 lines). |
| --- | --- | --- | --- | --- |
| **APPENDIX C: Quick-Reference Card** | 1659-1716 | RECIPE | Recipe (Quick Reference) | Soul, zone typography, margins, dividers, callouts, breakpoints, thresholds. This IS the builder's cheat sheet. Keep verbatim. |
| --- | --- | --- | --- | --- |
| **APPENDIX D: Provenance and Evidence** | 1720-1741 | ANALYSIS | Stays in ephemeral | Evidence chain table. Valuable for provenance but NOT builder content. |
| --- | --- | --- | --- | --- |
| Closing statement | 1743-1746 | ANALYSIS | Stays in ephemeral | Meta-commentary about the document itself. |

### Classification Summary

| Classification | Line Count (approx) | % of File 42 | Destination |
|---------------|-------------------|-------------|-------------|
| **RECIPE** | ~1,100 | 63% | `grammar/operational-recipe.md` |
| **ANALYSIS** | ~330 | 19% | Stays in `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` |
| **ARCHITECTURE** | ~120 | 7% | `compositional-core/CLAUDE.md` building protocol |
| **CONVICTION** | ~90 | 5% | `build-page/SKILL.md` preamble |
| **Mixed/Borderline** | ~106 | 6% | Inline in recipe (short "Why" notes kept; long evidence paragraphs removed) |

---

## OUTPUT 2: The Compiled Recipe — Table of Contents

Target: ~650 lines in `design-system/compositional-core/grammar/operational-recipe.md`

---

### Header (~10 lines)

```
# Operational Recipe: 9-Phase Page Building Pipeline
```

- Title, one-line purpose, version
- From File 42: title block (adapted)
- Line count: ~10

---

### How to Read This Document (~8 lines)

- Recipe vs checklist distinction (compressed from File 42 lines 10-24)
- "THE RULE: Every step tells you WHAT TO DO" sentence
- Excludes: the evidence paragraph (line 22), the comparison table (lines 14-20) -- those stay in ephemeral
- **Builder DOES:** Understands that this is a recipe, not a checklist. Reads sequentially.
- Line count: ~8

---

### Phase 0: Content Analysis and Zone Architecture (~90 lines)

- **0.1: Read Mandatory Foundation Files** (~8 lines)
  - From File 42 lines 42-50
  - Builder DOES: Reads prohibitions.md + tokens.css. Verifies soul knowledge.
- **0.2: Read the Content** (~15 lines)
  - From File 42 lines 52-73
  - Builder DOES: Reads content source, inventories word count + element types + content arc.
- **0.3: Determine Zone Count** (~10 lines)
  - From File 42 lines 75-88
  - Excludes: "Why:" paragraph (line 86-87) -- evidence citation
  - Builder DOES: Maps word count to zone count (2-5) using table.
- **0.4: Assign Zone Semantics** (~20 lines)
  - From File 42 lines 90-116
  - Excludes: "Why:" paragraph (line 114) -- evidence citation
  - Builder DOES: Maps content arc to zone properties (temperature, density, voice, weight).
- **0.5: Establish Section Architecture** (~12 lines)
  - From File 42 lines 118-134
  - Excludes: "Why:" paragraph (lines 132-133) -- evidence citation
  - Builder DOES: Plans section-by-section layout with at least 2 grid sections.
- **0.6: Determine Transition Types** (~15 lines)
  - From File 42 lines 136-158
  - Builder DOES: Assigns transition types (smooth/bridge/breathing) and verifies stacking arithmetic.
- **Gate 0: Phase Complete Checkpoint** (~10 lines)
  - From File 42 lines 160-171
  - Checks: Soul loaded, content analyzed, zones determined, sections planned, transitions assigned.

---

### Phase 1: HTML Skeleton (~100 lines)

- **1.1: Write the Document Shell** (~25 lines)
  - From File 42 lines 180-213
  - Excludes: "Why skip-link" note (line 212) -- compress to inline comment
  - Builder DOES: Writes the complete HTML shell with head, body, header, main, footer.
- **1.2: Write the Header** (~12 lines)
  - From File 42 lines 214-231
  - Builder DOES: Writes header HTML with label, h1, subtitle, meta.
- **1.3: Write Sections with Zone Classes and ARIA** (~18 lines)
  - From File 42 lines 233-258
  - Builder DOES: Writes each section with zone class, aria-label, section-indicator, dividers.
- **1.4: Add Component Markup** (~22 lines)
  - From File 42 lines 260-295
  - Builder DOES: Uses standard component classes (callout, table, pullquote) -- NOT custom classes.
- **1.5: Add Grid Wrappers** (~15 lines)
  - From File 42 lines 297-319
  - Excludes: "Why wrapper divs" paragraph (line 319) -- compress to inline comment
  - Builder DOES: Adds content-pair and content-grid wrapper divs for multi-column sections.
- **1.6: Add ARIA Attributes** (~5 lines)
  - From File 42 lines 321-327
  - Builder DOES: Adds role and aria attributes to all landmarks and components.
- **1.7: Write the Footer** (~8 lines)
  - From File 42 lines 329-341
  - Builder DOES: Writes footer HTML matching header bookend pattern.
- **Perception Check** (~5 lines)
  - From File 42 lines 343-353 (compressed)
  - Builder DOES: Opens HTML, verifies all sections present, skip link visible, grid wrappers exist.

---

### Phase 2: Base CSS and Soul Enforcement (~80 lines)

- **2.1: CSS Reset and Token Block** (~40 lines)
  - From File 42 lines 362-409
  - Builder DOES: Writes reset + :root block with all CSS custom properties.
- **2.2: Soul Enforcement** (~8 lines)
  - From File 42 lines 412-424
  - Excludes: "Why !important" paragraph -- compress to 1-line inline comment
  - Builder DOES: Writes `* { border-radius: 0 !important; box-shadow: none !important; }`
- **2.3: Base Typography and Container** (~25 lines)
  - From File 42 lines 428-476
  - Excludes: "Container width is NON-NEGOTIABLE" paragraph (line 476) -- compress to 1-line comment
  - Builder DOES: Sets body, .page-container (960px), base h2/h3/p styles.
- **2.4: Header and Footer CSS (Bookend Pattern)** (~55 lines)
  - From File 42 lines 479-564
  - Excludes: "Why dark bookends" paragraph (line 566) -- evidence citation
  - Builder DOES: Writes complete header + footer dark bookend CSS.
- **Perception Check** (~5 lines)
  - From File 42 lines 568-578 (compressed)
  - Builder DOES: Verifies dark header, Inter body text, 960px container, dark footer, sharp edges.
- **NOTE:** This phase subtotal exceeds individual line estimates because the CSS blocks are long. Actual: ~80 lines due to CSS verbosity.

---

### Phase 3: Zone System and Backgrounds (~55 lines)

- **3.1: Define Zone Background Colors** (~25 lines)
  - From File 42 lines 586-620
  - Builder DOES: Chooses zone backgrounds from template, verifies warm test (R >= G >= B) and >= 10 RGB delta.
- **3.2: Apply Zone Backgrounds** (~8 lines)
  - From File 42 lines 622-631
  - Builder DOES: Writes per-section background-color rules.
- **3.3: Apply Section Padding by Zone** (~18 lines)
  - From File 42 lines 633-666
  - Builder DOES: Writes zone-specific padding (generous/compressed/settled).
- **Perception Check** (~4 lines)
  - From File 42 lines 668-674 (compressed)
  - Builder DOES: Scrolls page, verifies 2+ visible color shifts, tighter Zone 2, 960px container.

---

### Phase 4: Structural Borders and Dividers (~95 lines)

- **4.1: Section-Level Left Borders** (~25 lines)
  - From File 42 lines 681-718
  - Excludes: "Why this pattern" paragraph (lines 720-721) -- compress to 1-line comment
  - Builder DOES: Adds left borders to 40-60% of sections, varying color and weight.
- **4.2: Transition Dividers** (~20 lines)
  - From File 42 lines 723-757
  - Builder DOES: Writes 3 divider types (smooth 1px, bridge 2px, breathing 4px) + bridge-prose.
- **4.3: Callout Family** (~35 lines)
  - From File 42 lines 761-818
  - Builder DOES: Writes base callout + 4 semantic variants (info, gotcha, tip, essence).
- **4.4: Grid Layouts** (~10 lines)
  - From File 42 lines 820-839
  - Builder DOES: Writes content-pair and content-grid CSS.
- **4.5: Table Styling** (~20 lines)
  - From File 42 lines 841-883
  - Builder DOES: Writes table CSS with header, cell, featured variant, wrapper.
- **4.6: Pullquote** (~12 lines)
  - From File 42 lines 886-909
  - Builder DOES: Writes pullquote CSS with display font and primary border.
- **4.7: Section Indicator** (~8 lines)
  - From File 42 lines 911-927
  - Builder DOES: Writes section indicator CSS (mono, uppercase, subtle).
- **Perception Check** (~5 lines)
  - From File 42 lines 929-937 (compressed)
  - Builder DOES: Verifies borders visible, 3 divider types distinct, callout variants distinct, grids working.

---

### Phase 5: Typography Zones (~45 lines)

- **5.1: Paragraph Typography by Zone** (~25 lines)
  - From File 42 lines 946-988
  - Builder DOES: Writes zone-specific p styles (Zone 1: 17px/1.85, Zone 2: 15px/1.55, Zone 3: 16px/1.75).
- **5.2: Heading Typography by Zone** (~15 lines)
  - From File 42 lines 990-1016
  - Builder DOES: Writes zone-specific h2 styles (Zone 1: 30px/400, Zone 2: 26px/600, Zone 3: 28px/400).
- **5.3: Paragraph Spacing by Zone** (~5 lines)
  - From File 42 lines 1018-1028
  - Builder DOES: Writes zone-specific margin-bottom (Zone 1: 20px, Zone 2: 12px, Zone 3: 18px).
- **Perception Check** (~4 lines)
  - From File 42 lines 1030-1036 (compressed)
  - Builder DOES: Compares Zone 1 and Zone 2 text -- Zone 1 larger/open, Zone 2 bolder/tighter.

---

### Phase 6: Element-Level Richness (~40 lines)

- **6.1: Inline Elements** (~22 lines)
  - From File 42 lines 1044-1087
  - Builder DOES: Writes inline code, link hover, table row hover, smooth scroll, selection styling.
- **6.2: Code Blocks** (~12 lines)
  - From File 42 lines 1089-1111
  - Builder DOES: Writes dark code block CSS (if content includes code).
- **6.3: Drop Cap (optional)** (~6 lines)
  - From File 42 lines 1113-1125
  - Builder DOES: Optionally writes drop cap for prose-heavy Zone 1 opening.
- **Perception Check** (~4 lines)
  - From File 42 lines 1127-1133 (compressed)
  - Builder DOES: Tests selection highlight, table hover, link hover, inline code background.

---

### Phase 7: Accessibility and Responsive (~55 lines)

- **7.1: Accessibility** (~18 lines)
  - From File 42 lines 1142-1176
  - Builder DOES: Writes focus-visible, skip-link, reduced-motion CSS.
- **7.2: Print Styles** (~12 lines)
  - From File 42 lines 1178-1203
  - Builder DOES: Writes print media query (white backgrounds, black text, hidden skip-link).
- **7.3: Responsive Breakpoints** (~20 lines)
  - From File 42 lines 1206-1242
  - Builder DOES: Writes 768px (grid collapse, smaller fonts) and 480px (further reduction) media queries.
- **Perception Check** (~5 lines)
  - From File 42 lines 1244-1250 (compressed)
  - Builder DOES: Tests Tab focus ring, 768px layout, 480px readability, print preview.

---

### Phase 8: Verification (~55 lines)

- **8A: Perception Threshold Verification** (~10 lines)
  - From File 42 lines 1258-1271 (COMPRESSED -- reference `perception-thresholds.md` for full table)
  - Builder DOES: Verifies every zone-varying CSS property exceeds perception minimum.
- **8B: Void Prevention** (~6 lines)
  - From File 42 lines 1273-1281
  - Builder DOES: Scrolls full page, checks no gap > 120px, no blank viewport.
- **8C: Scale 5 Verification** (~8 lines)
  - From File 42 lines 1283-1291
  - Builder DOES: Checks all 5 scales (page/zone/section/component/element).
- **8D: Soul Constraint Verification** (~8 lines)
  - From File 42 lines 1293-1301
  - Builder DOES: Verifies 0 border-radius, 0 shadows, trinity fonts, 960px, warm palette.
- **8E: Multi-Coherence Verification** (~10 lines)
  - From File 42 lines 1303-1319
  - Builder DOES: Counts CSS channels shifting at each zone boundary (>= 3 per major transition).
- **8F: Accessibility Verification** (~8 lines)
  - From File 42 lines 1321-1330
  - Builder DOES: Tests tab order, skip link, ARIA, responsiveness.
- **8G: Gestalt Perception Test** (~6 lines)
  - From File 42 lines 1332-1341
  - Builder DOES: Scrolls at reading speed, assesses DESIGNED vs PATCHED.
- **Ship Decision** (~4 lines)
  - From File 42 lines 1343-1349
  - Builder DOES: Makes ship/fix/kill decision based on 8A-8G results.

---

### Content Decision Guide (~30 lines)

- From File 42 Part 4, Section 4.1 (lines 1494-1505)
- From File 42 Part 4, Section 4.2 (lines 1507-1519)
- Excludes: Section 4.3 (metaphor integration -- goes to build-page SKILL.md)
- Content: Decision table for zone semantics, section boundaries, callout variant selection, grid placement, transition types, bridge prose, drop cap, element markup.
- File reference table for guidance files.

---

### Quick Reference Card (~50 lines)

- From File 42 Appendix C (lines 1659-1716)
- Keep VERBATIM -- this is the builder's cheat sheet
- Soul, zone typography, zone margins, divider margins, callout variants, breakpoints, perception thresholds
- Builder DOES: Uses this for quick lookups during building.

---

### Appendix: Perception Thresholds (~15 lines)

- From File 42 Appendix A (lines 1606-1624) -- COMPRESSED
- One-line pointer: "See `guidelines/perception-thresholds.md` for canonical reference"
- Inline copy of the threshold table (compact version)
- Builder DOES: Cross-checks every zone-varying CSS value against thresholds.

---

### Appendix: Deallocation Protocol (Remediation Only) (~20 lines)

- From File 42 Appendix B (lines 1628-1655) -- COMPRESSED
- Only relevant when remediating existing pages, not building from scratch
- Identification criteria, steps, expected volume
- Builder DOES: When remediating, identifies and removes sub-perceptual CSS before applying recipe.

---

## LINE COUNT ESTIMATE

| Section | Lines |
|---------|-------|
| Header + How to Read | 18 |
| Phase 0: Content Analysis | 90 |
| Phase 1: HTML Skeleton | 100 |
| Phase 2: Base CSS | 80 |
| Phase 3: Zones | 55 |
| Phase 4: Borders/Dividers | 95 |
| Phase 5: Typography | 45 |
| Phase 6: Element Richness | 40 |
| Phase 7: Accessibility | 55 |
| Phase 8: Verification | 55 |
| Content Decision Guide | 30 |
| Quick Reference Card | 50 |
| Appendix: Thresholds | 15 |
| Appendix: Deallocation | 20 |
| **TOTAL** | **~748** |

**Status:** ~748 lines, ~100 over the 650 target. To reach 650:
- Compress CSS code blocks by removing inline comments within them (-30 lines)
- Compress perception checks to 2-3 lines each instead of 4-5 (-20 lines)
- Remove "Adapt selectors to YOUR section count" repeated notes (-10 lines)
- Compress Phase 8 sub-checks by combining 8C+8D and 8E+8F (-15 lines)
- Remove optional Phase 6.3 drop cap section (-6 lines)
- Remove deallocation appendix to separate file (-20 lines)
- Net reduction: ~101 lines, bringing total to **~647 lines**

Alternatively, accepting ~700 lines is reasonable since the CSS code blocks are irreducible content (the recipe IS the CSS values). Compressing them would defeat the recipe's purpose.

---

## EXCLUSION SUMMARY: What Stays in Ephemeral

| File 42 Section | Lines | Why Excluded |
|----------------|-------|-------------|
| Author/sources block | 1-7 | Provenance metadata |
| Evidence paragraph (line 22) | 1 | Analysis |
| Recipe vs Checklist comparison table | 14-20 | Analysis (the principle is kept; the evidence table is not) |
| "Why:" paragraphs after Steps 0.3, 0.4, 0.5 | ~9 | Evidence citations (85-87, 114, 132-133) |
| "Why skip-link" | 1 | Replaced by inline comment |
| "Why !important" paragraph | 2 | Replaced by 1-line comment |
| "Container width NON-NEGOTIABLE" paragraph | 2 | Replaced by 1-line comment |
| "Why dark bookends" paragraph | 2 | Evidence citation |
| "Why wrapper divs" paragraph | 2 | Replaced by inline comment |
| "Why this pattern" (borders) | 2 | Replaced by 1-line comment |
| Part 2: Team Architecture (entire) | 73 | Goes to CLAUDE.md |
| Part 3: Conviction Layer (entire) | 58 | Goes to build-page SKILL.md |
| Part 4.3: Metaphor Integration | 11 | Goes to build-page SKILL.md |
| Part 5: Known Risks (entire) | 67 | Analysis/risk assessment |
| Appendix D: Provenance | 22 | Evidence chain |
| Closing statement | 4 | Meta-commentary |
| **TOTAL EXCLUDED** | **~256 lines** | |

## SEPARATION SUMMARY: What Goes Elsewhere

| Content | Lines | Destination |
|---------|-------|-------------|
| Team architecture (Part 2) | ~73 | `compositional-core/CLAUDE.md` building protocol |
| Conviction layer (Part 3) | ~58 | `build-page/SKILL.md` preamble |
| Metaphor integration (4.3) | ~11 | `build-page/SKILL.md` routing |
| **TOTAL SEPARATED** | **~142 lines** | |

---

## DECISION LOG

1. **Keep "Why" notes inline or remove?** DECISION: Remove multi-sentence "Why" paragraphs (evidence citations). Keep single-line warnings as inline comments. Rationale: recipe format means action verbs and values, not justification. But 1-line warnings ("Container 960px is NON-NEGOTIABLE") prevent common mistakes without bloating.

2. **Keep CSS code blocks verbatim or compress?** DECISION: Keep verbatim. The CSS blocks ARE the recipe. Compressing them (removing comments, combining rules) would force the builder to derive values -- the exact failure mode we're fixing.

3. **Include deallocation protocol?** DECISION: Include as short appendix (~20 lines). It's operationally relevant for remediation use cases and short enough not to bloat the recipe. Could be moved to a separate file to save lines.

4. **Duplicate perception thresholds or reference?** DECISION: Inline a compact version (1-row-per-property table) in Phase 8 + Quick Reference. Point to `perception-thresholds.md` as canonical source. Rationale: builder should not need to open a second file during Phase 8, but the full discussion of confidence tiers and provenance lives in the standalone file.

5. **Content Decision Guide: include or reference?** DECISION: Include in recipe (~30 lines). These are the ONLY content-specific guidance the builder needs. Without them, the builder has no framework for making judgment calls about zone semantics, callout variants, or grid placement.

---

**END OF RECIPE COMPILATION PLAN**

**Summary:** File 42's 1,746 lines break down to ~1,100 RECIPE + ~330 ANALYSIS + ~120 ARCHITECTURE + ~90 CONVICTION + ~106 MIXED. The compiled recipe targets ~650 lines (achievable at ~647 with compression, ~700-748 if CSS blocks kept fully verbose). All analysis stays in ephemeral. Team architecture goes to CLAUDE.md. Conviction goes to build-page SKILL.md.
