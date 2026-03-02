# DD Exploration Provenance Inventory

**Date:** 2026-03-01
**Task:** Comprehensive inventory of all DD-related files for first experiment
**Total files found:** 36 (6 HTML + 6 screenshots + 3 case studies + 3 visual analyses + 6 provenance docs + 4 pattern/research docs + 3 connective tissue + 2 ephemeral + 3 navigation/template)

---

## 1. PRIMARY HTML EXPLORATIONS (6 files, 6,259 lines)

These are the core DD artifacts -- self-contained HTML pages with inline CSS demonstrating density patterns.

| # | File | Lines | Pattern | Score | Pipeline Bias |
|---|------|-------|---------|-------|---------------|
| 1 | `design-system/validated-explorations/density/DD-001-breathing.html` | 770 | PULSE | 33/40 | YES: score, soul compliance %, INCLUDE status, Tier A label in threading header |
| 2 | `design-system/validated-explorations/density/DD-002-gradient.html` | 962 | CRESCENDO | 35/40 | YES: score, compliance %, INCLUDE status, "gold standard" label |
| 3 | `design-system/validated-explorations/density/DD-003-islands.html` | 881 | ISLANDS | 32/40 | YES: score, INCLUDE status, "lowest-scored" label |
| 4 | `design-system/validated-explorations/density/DD-004-layers.html` | 1,275 | GEOLOGICAL | 35/40 | YES: score, 3 EXEMPLARY ratings, 100% soul compliance |
| 5 | `design-system/validated-explorations/density/DD-005-rivers.html` | 1,251 | TIDAL | 36/40 | YES: score, INCLUDE, 100% soul compliance |
| 6 | `design-system/validated-explorations/density/DD-006-fractal.html` | 1,120 | FRACTAL | 36/40 | YES: score, INCLUDE, meta-pattern label, "highest-scored" |

**Classification:** HTML_EXPLORATION
**Unique information:** YES -- each is a complete, self-contained compositional artifact. The HTML+CSS IS the creative work. No other file captures what these contain.
**Include in experiment:** YES -- these are the core corpus. They ARE the explorations.
**Pipeline bias:** ALL 6 contain pipeline-era scoring (X/40), soul compliance percentages, INCLUDE/tier labels in their inline threading headers. The BODY CONTENT (actual HTML/CSS composition) is genuine creative work. The HEADER METADATA is pipeline infrastructure. The experiment agent should be informed that threading headers are pipeline metadata and should focus on the actual page content.

---

## 2. SCREENSHOTS (6 files, ~4.2 MB total)

| # | File | Size | Content |
|---|------|------|---------|
| 7 | `archive/true-extraction-inventory/screenshots/DD-001-full.png` | 612K | Full-page screenshot of DD-001 |
| 8 | `archive/true-extraction-inventory/screenshots/DD-002-full.png` | 657K | Full-page screenshot of DD-002 |
| 9 | `archive/true-extraction-inventory/screenshots/DD-003-full.png` | 562K | Full-page screenshot of DD-003 |
| 10 | `archive/true-extraction-inventory/screenshots/DD-004-full.png` | 846K | Full-page screenshot of DD-004 |
| 11 | `archive/true-extraction-inventory/screenshots/DD-005-full.png` | 894K | Full-page screenshot of DD-005 |
| 12 | `archive/true-extraction-inventory/screenshots/DD-006-full.png` | 594K | Full-page screenshot of DD-006 |

**Classification:** HTML_EXPLORATION (visual record)
**Unique information:** YES -- visual rendering captures perceptual qualities that HTML source alone does not convey (spacing feels, color relationships, overall rhythm)
**Include in experiment:** RECOMMENDED -- if the experiment involves perceptual evaluation, screenshots provide the visual reference. If the experiment is about compositional structure from source, these are supplementary.
**Pipeline bias:** NONE -- these are raw visual captures

---

## 3. CASE STUDIES (3 files, 1,210 lines)

Anti-prescription format analysis of 3 DD explorations. Written during Phase C extraction.

| # | File | Lines | Exploration Covered | Content Summary |
|---|------|-------|---------------------|-----------------|
| 13 | `design-system/compositional-core/case-studies/DD-003-islands.md` | 405 | DD-003 | Islands pattern case study. NOT A TEMPLATE warning. Tension analysis: discrete self-contained topics. Mechanism inventory: sparse ocean padding, horizontal offset rhythm, archipelago grouping, 2-zone DNA, border-left signaling. |
| 14 | `design-system/compositional-core/case-studies/DD-004-layers.md` | 428 | DD-004 | Geological layers case study. Tension: content serving radically different audience depths simultaneously. Mechanism inventory: spacing compression gradient (80px->16px), zone background differentiation, border-weight gradient, typographic scale jumping, progressive disclosure. |
| 15 | `design-system/compositional-core/case-studies/DD-006-fractal.md` | 377 | DD-006 | Fractal density case study. Tension: alternating density needs at EVERY structural level simultaneously. Mechanism inventory: dense/sparse alternation, spacing compression, border-weight encoding, zone backgrounds, typographic scale jumping, 2-zone DNA at multiple scales. |

**Classification:** CASE_STUDY
**Unique information:** PARTIALLY -- they reframe the HTML explorations as tension-to-metaphor-to-layout process documentation. The PROCESS narrative (how tension produced the metaphor) adds information not in the HTML. The mechanism inventories are extracted from HTML but organized differently. The anti-prescription warnings are pipeline-era framing infrastructure.
**Include in experiment:** YES -- these provide the "how this was made" narrative that the raw HTML does not. However, they embed pipeline-era assumptions (phase-gated access, divergence mandates, anti-prescription framing).
**Pipeline bias:** MODERATE
- X/40 scores appear in metadata headers (32/40, 35/40, 36/40)
- Anti-prescription template structure is pipeline infrastructure (the "NOT A TEMPLATE" framing is a pipeline-era behavioral control mechanism)
- "Phase 1-2 tension derivation" references are pipeline-specific process
- Mechanism numbers (#1, #2, #4, etc.) reference the pipeline's mechanism catalog numbering

---

## 4. VISUAL ANALYSIS FILES (3 files, 771 lines)

Playwright accessibility snapshots of rendered DD explorations.

| # | File | Lines | Exploration | Content Summary |
|---|------|-------|-------------|-----------------|
| 16 | `design-system/compositional-core/case-studies/dd-003-islands-visual.md` | 462 | DD-003 (actually OD-001 content -- mislabeled?) | Playwright accessibility tree dump. Shows element hierarchy, ARIA roles, text content. File appears to actually contain OD-001 conversational content (Q&A structure, "Exploration OD-001" label at top). |
| 17 | `design-system/compositional-core/case-studies/dd-004-layers-visual.md` | 144 | DD-004 | Playwright accessibility tree showing geological layer structure (Atmosphere/Surface/Topsoil/Subsoil/Bedrock). Genuine DD-004 content. |
| 18 | `design-system/compositional-core/case-studies/dd-006-fractal-visual.md` | 165 | DD-006 | Playwright accessibility tree showing fractal scale visualization (Page/Section/Component/Character levels). Genuine DD-006 content. |

**Classification:** ANALYSIS
**Unique information:** PARTIALLY -- accessibility trees reveal structural hierarchy that source HTML partially obscures. However, dd-003-islands-visual.md appears to contain OD-001 content, not DD-003 content (possible mislabeling).
**Include in experiment:** OPTIONAL -- useful for understanding structural hierarchy, but the HTML source is more complete. Flag the dd-003-islands-visual.md mislabeling issue.
**Pipeline bias:** NONE -- these are raw Playwright snapshots

---

## 5. PROVENANCE CHAIN -- STAGE 2 DENSITY (6 files, 1,808 lines)

Formal pipeline documentation for the DD exploration stage.

| # | File | Lines | Content Summary |
|---|------|-------|-----------------|
| 19 | `design-system/specification/provenance/stage-2-density-dd/CLAUDE.md` | 128 | Navigation file for stage-2-density-dd/ directory. Identifies DD-F-006 as most important finding. |
| 20 | `design-system/specification/provenance/stage-2-density-dd/DD-outbound-findings.md` | 232 | Formal finding declarations: DD-F-001 through DD-F-018. Defines all DD finding IDs. DD-F-006 (FRACTAL) is the meta-pattern. |
| 21 | `design-system/specification/provenance/stage-2-density-dd/DD-REAUDIT-CHECKPOINT.md` | 220 | Re-audit progress tracking. Phase-by-phase progress of DD perceptual deepening audit. Synced duplicate. |
| 22 | `design-system/specification/provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md` | 646 | Full perceptual audit results for all 6 DD explorations. Soul compliance verification. Score improvements. |
| 23 | `design-system/specification/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | 338 | Gate file between Stage 2 (DD) and Stage 3 (OD). Transfer of findings, density pattern assignments, DD-F-006 fractal constraint. |
| 24 | `design-system/specification/provenance/stage-2-density-dd/STAGE-HEADER.md` | 244 | Stage 2 completion documentation. Story of how visual rhythm vocabulary was discovered. |

**Classification:** PROVENANCE
**Unique information:** YES for DD-outbound-findings.md (formal finding definitions DD-F-001 through DD-F-018 exist nowhere else). PARTIALLY for others (they document the PROCESS of creating and auditing the explorations).
**Include in experiment:** SELECTIVE
- DD-outbound-findings.md: YES -- contains the formal finding definitions that give structure to DD discoveries
- STAGE-HEADER.md: YES -- narrative of how density vocabulary was discovered
- HANDOFF-DD-TO-OD.md: OPTIONAL -- shows how DD fed into OD, useful for understanding the chain but heavily pipeline-structured
- DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md: NO for experiment, YES for understanding -- this is audit infrastructure
- DD-REAUDIT-CHECKPOINT.md: NO -- pure pipeline tracking infrastructure
- CLAUDE.md: NO -- navigation file, no unique content
**Pipeline bias:** HEAVY -- all 6 files are pipeline infrastructure documents. They contain scores (X/40), compliance percentages (100% soul compliance), INCLUDE decisions, finding IDs (DD-F-###), tier labels (Tier A/B/C), audit results, and formal pipeline process documentation. These ARE the pipeline -- they document the pipeline process of creating DD explorations.

---

## 6. PATTERN AND RESEARCH FILES (4 files, 1,961 lines)

Files that define density patterns or provide the research that DD validated.

| # | File | Lines | Content Summary |
|---|------|-------|-----------------|
| 25 | `design-system/specification/patterns/density-patterns.md` | 342 | 6 validated density pattern definitions (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL) with CSS implementations, scores, usage recommendations. Copy-paste ready CSS. |
| 26 | `design-system/research/R3-DENSITY-DIMENSIONS.md` | 553 | Original research: 51 findings (R3-001 through R3-051) expanding density beyond spatial into 6 dimensions (temporal, depth, semantic, cognitive, interaction, spatial). PRIMARY input to all DD explorations. |
| 27 | `design-system/specification/provenance/original-research/R3-DENSITY-DIMENSIONS.md` | 519 | Provenance copy of R3 research. Should be identical to research/ copy (chain integration). |
| 28 | `design-system/compositional-core/components/components-dd-od.css` | 555 | Component CSS extracted from DD+OD explorations. Callout family, code blocks, data tables, file trees. HIGH/MEDIUM/LOW confidence tags. Genuine extractable CSS patterns. |

**Classification:** RESEARCH (R3), CONNECTIVE_TISSUE (density-patterns, components-dd-od.css)
**Unique information:**
- R3-DENSITY-DIMENSIONS.md: YES -- the original 51 research findings that DD was built to validate. Contains the research hypotheses BEFORE they became explorations.
- density-patterns.md: PARTIALLY -- formal pattern definitions with CSS. Consolidates what the 6 explorations demonstrated. Useful as reference but is a compressed/formalized derivative.
- components-dd-od.css: YES -- the actual reusable CSS extracted from DD+OD explorations. This is genuine compositional vocabulary.
- Provenance copy of R3: DUPLICATE -- identical content to research/ version
**Include in experiment:**
- R3-DENSITY-DIMENSIONS.md: YES (one copy only) -- provides the research foundation
- density-patterns.md: OPTIONAL -- useful reference but contains pipeline scores
- components-dd-od.css: YES -- genuine reusable CSS vocabulary
- Provenance R3 copy: NO -- duplicate
**Pipeline bias:**
- R3: LOW -- original research with finding IDs (R3-###) but these are research identifiers, not pipeline scores
- density-patterns.md: MODERATE -- contains scores (32-36/40), INCLUDE decisions, soul compliance claims
- components-dd-od.css: LOW -- confidence tags (HIGH/MEDIUM/LOW) are pipeline-era categorization but the CSS itself is genuine

---

## 7. CONNECTIVE TISSUE (3 files, 1,503 lines)

Files that connect DD explorations to broader compositional grammar.

| # | File | Lines | Content Summary |
|---|------|-------|-----------------|
| 29 | `design-system/compositional-core/grammar/mechanism-combinations.md` | 447 | Proven mechanism combinations for Ceiling+ tier. Documents 6 combination families validated across DD-006, OD-004, CD-006. Shows how multiple mechanisms encode the SAME semantic dimension. |
| 30 | `design-system/compositional-core/grammar/compositional-rules.md` | 527 | 11 compositional grammar rules extracted from DD/OD/CD explorations. Zone nesting rules, code block placement, structural patterns. Evidence-based with line references to DD source files. |
| 31 | `design-system/compositional-core/guidelines/semantic-rules.md` | 529 | Semantic decision rules filling gaps identified in adversarial review. Info vs Context callout selection, component appropriateness criteria. References DD explorations as evidence sources. |

**Classification:** CONNECTIVE_TISSUE
**Unique information:** YES -- these distill cross-exploration patterns that don't exist in any individual DD file. mechanism-combinations.md shows HOW mechanisms combine (multi-channel coherence). compositional-rules.md shows structural patterns ACROSS explorations. semantic-rules.md shows decision criteria for component selection.
**Include in experiment:** YES -- these represent genuine compositional knowledge extracted from DD (and OD/CD) explorations
**Pipeline bias:**
- mechanism-combinations.md: MODERATE -- references "Ceiling+ tier" terminology, mechanism numbering system (#1, #4, #7)
- compositional-rules.md: LOW -- mostly structural rules with HTML/CSS evidence
- semantic-rules.md: LOW -- practical decision criteria with evidence

---

## 8. EPHEMERAL / ARCHIVED (2 files, 497 lines)

Files from the multi-window handoff design, both in ARCHIVED status.

| # | File | Lines | Content Summary |
|---|------|-------|-----------------|
| 32 | `ephemeral/multi-window-handoff-design/_corpus-ingestion-ARCHIVED/dd-digest.md` | 304 | DEPRECATED digest compressing 6 DD explorations into 262 lines (36:1 compression). Self-identifies as dangerous -- "GOOD ENOUGH to feel complete, which is exactly why it is dangerous." Preserved as cautionary example of extraction failure. |
| 33 | `ephemeral/multi-window-handoff-design/_corpus-ingestion-ARCHIVED/dd-distribution-map.md` | 193 | Orchestration map for distributing DD files across 4 windows (TC Derivation, Builder, Evaluation, Refinement). Documents which DD case study goes to which window and why. |

**Classification:** ANALYSIS (both archived)
**Unique information:**
- dd-digest.md: NO for content (it's a compressed version of the DD explorations). YES for meta-learning (the deprecation notice is a powerful articulation of WHY compression fails). The deprecation notice itself is one of the clearest statements of the raw-over-digested principle.
- dd-distribution-map.md: YES -- unique orchestration logic for multi-window deployment. Shows which DD exploration creates which cognitive state.
**Include in experiment:**
- dd-digest.md: NO for content. The deprecation notice could be included as meta-context about why digests fail.
- dd-distribution-map.md: OPTIONAL -- useful if the experiment involves multi-window orchestration
**Pipeline bias:**
- dd-digest.md: MODERATE -- contains compressed pattern descriptions, conviction statements, and pipeline vocabulary. The deprecation notice itself critiques pipeline-era compression.
- dd-distribution-map.md: LOW -- orchestration logic is practical, not pipeline-scored

---

## 9. NAVIGATION AND TEMPLATE FILES (3 files, 1,110 lines)

| # | File | Lines | Content Summary |
|---|------|-------|-----------------|
| 34 | `design-system/validated-explorations/density/CLAUDE.md` | 98 | Navigation file for density/ directory. Catalogs all 6 DD explorations with scores, patterns, best-use recommendations. Identifies DD-006 as most important. |
| 35 | `design-system/compositional-core/case-studies/README.md` | 541 | Directory README for case-studies/. Lists all 9 case studies (3 DD, 3 OD, 3 CD) with metaphors, tensions, mechanisms. Contains NOT A TEMPLATE warnings. |
| 36 | `design-system/compositional-core/case-studies/ANTI-PRESCRIPTION-TEMPLATE.md` | 471 | Template structure for writing case studies in anti-prescription format. The framing infrastructure itself. |

**Classification:** OTHER (navigation/infrastructure)
**Unique information:** NO -- these are navigation and process infrastructure. No unique DD content.
**Include in experiment:** NO -- these are pipeline infrastructure files
**Pipeline bias:** HIGH -- scores, tier labels, INCLUDE decisions, anti-prescription framing, phase-gated access rules

---

## SUMMARY TABLE: Experiment Inclusion Recommendations

| Category | Files | Lines | Include? | Rationale |
|----------|-------|-------|----------|-----------|
| HTML Explorations (DD-001 to DD-006) | 6 | 6,259 | **YES** | Core corpus. The creative work IS the HTML. |
| Screenshots | 6 | N/A (4.2MB) | **RECOMMENDED** | Visual reference for perceptual evaluation |
| Case Studies (DD-003, DD-004, DD-006) | 3 | 1,210 | **YES** | Process narrative: tension -> metaphor -> layout |
| Visual Analysis | 3 | 771 | **OPTIONAL** | Structural hierarchy data. Flag dd-003 mislabeling. |
| Provenance - DD-outbound-findings.md | 1 | 232 | **YES** | Formal finding definitions (DD-F-001 to DD-F-018) |
| Provenance - STAGE-HEADER.md | 1 | 244 | **YES** | Narrative of density vocabulary discovery |
| Provenance - other 4 files | 4 | 1,332 | **NO** | Pipeline audit/tracking infrastructure |
| R3-DENSITY-DIMENSIONS.md (one copy) | 1 | 553 | **YES** | Original 51 research findings that DD validated |
| density-patterns.md | 1 | 342 | **OPTIONAL** | Formal pattern defs with CSS. Contains scores. |
| components-dd-od.css | 1 | 555 | **YES** | Genuine reusable CSS vocabulary |
| Connective tissue (3 files) | 3 | 1,503 | **YES** | Cross-exploration compositional grammar |
| dd-digest.md (deprecation notice only) | 1 | 304 | **NO** | Archived, self-deprecated. Meta-learning value only. |
| dd-distribution-map.md | 1 | 193 | **OPTIONAL** | Multi-window orchestration logic |
| Navigation/template files | 3 | 1,110 | **NO** | Pipeline infrastructure |

### Recommended First Experiment Set (15 files, ~11,099 lines + 4.2MB images)

**Core (must include):**
1. DD-001-breathing.html (770 lines)
2. DD-002-gradient.html (962 lines)
3. DD-003-islands.html (881 lines)
4. DD-004-layers.html (1,275 lines)
5. DD-005-rivers.html (1,251 lines)
6. DD-006-fractal.html (1,120 lines)
7. DD-003-islands.md case study (405 lines)
8. DD-004-layers.md case study (428 lines)
9. DD-006-fractal.md case study (377 lines)
10. R3-DENSITY-DIMENSIONS.md (553 lines)
11. DD-outbound-findings.md (232 lines)
12. STAGE-HEADER.md (244 lines)
13. components-dd-od.css (555 lines)
14. mechanism-combinations.md (447 lines)
15. compositional-rules.md (527 lines)

**Supplementary (include if context budget allows):**
- 6 screenshots (DD-001 to DD-006 full page captures)
- semantic-rules.md (529 lines)
- density-patterns.md (342 lines)
- dd-004-layers-visual.md (144 lines)
- dd-006-fractal-visual.md (165 lines)

---

## PIPELINE BIAS ASSESSMENT

### Files with NO pipeline bias (safe to include as-is):
- Screenshots (6 files) -- raw visual captures
- dd-004-layers-visual.md, dd-006-fractal-visual.md -- raw Playwright snapshots
- components-dd-od.css -- genuine CSS (LOW bias, confidence tags only)
- compositional-rules.md -- structural rules with evidence (LOW bias)
- semantic-rules.md -- practical decision criteria (LOW bias)

### Files with MODERATE pipeline bias (include with awareness):
- Case studies (3 files) -- anti-prescription framing is pipeline infrastructure; tension-to-metaphor process narrative is genuine; X/40 scores in headers
- mechanism-combinations.md -- tier terminology, mechanism numbering
- density-patterns.md -- scores, INCLUDE decisions, soul compliance claims
- R3-DENSITY-DIMENSIONS.md -- finding IDs are research identifiers, not pipeline scores (LOW-MODERATE)

### Files with HEAVY pipeline bias (pipeline infrastructure):
- All 6 HTML exploration threading headers -- scores, compliance %, tier labels, INCLUDE decisions (but body content is genuine)
- All 6 provenance stage-2 files -- these ARE the pipeline documentation
- density/ CLAUDE.md -- scoring table, INCLUDE decisions
- case-studies/ README.md -- pipeline process documentation
- ANTI-PRESCRIPTION-TEMPLATE.md -- pipeline behavioral control mechanism

### Key finding: BODY vs HEADER separation
The DD HTML explorations have a clear separation between:
- **Threading headers (pipeline metadata):** Inline HTML comments at top of each file containing scores, compliance %, tier labels, INCLUDE decisions, dependency tables, consumer tables. This IS pipeline infrastructure.
- **Page content (genuine creative work):** The actual HTML structure, CSS styling, and content composition. This IS the creative artifact.

The experiment agent should be instructed to focus on page content and treat threading headers as provenance metadata, not as quality judgments to internalize.

---

## NOTABLE FINDINGS

### 1. dd-003-islands-visual.md appears mislabeled
The file is named `dd-003-islands-visual.md` but its content begins with "Exploration OD-001" and contains Q&A conversational structure (OD-001's pattern), not DD-003's islands pattern. This may be a Playwright capture of the wrong page or a file naming error.

### 2. Only 3 of 6 DD explorations have case studies
DD-001 (breathing/PULSE), DD-002 (gradient/CRESCENDO), and DD-005 (rivers/TIDAL) have NO case study markdown files. The 3 case studies cover DD-003, DD-004, and DD-006 -- which are the most structurally distinct explorations. The missing case studies mean the experiment agent will rely solely on the HTML source for DD-001, DD-002, and DD-005 process understanding.

### 3. R3 research exists in two identical copies
`design-system/research/R3-DENSITY-DIMENSIONS.md` (553 lines) and `design-system/specification/provenance/original-research/R3-DENSITY-DIMENSIONS.md` (519 lines) are chain-integration copies. The 34-line difference may be threading header differences. Only one copy should be included.

### 4. DD-006 is overwhelmingly the most-referenced file
DD-006 (fractal) has 20+ inbound references across the repository. It is the "crown jewel" of DD -- the meta-pattern that constrains all subsequent work. The experiment should reflect this centrality.

### 5. The dd-digest.md deprecation notice is exceptionally valuable meta-context
While the digest content is deprecated, the deprecation notice (lines 1-38) contains one of the clearest articulations of WHY compression/extraction fails: "it is GOOD ENOUGH to feel complete, which is exactly why it is dangerous." This is relevant to the TC skill audit's core question about what to compress vs keep raw.
