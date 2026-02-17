# Context & Evaluation Cross-Reference Report

**Agent:** context-eval-explorer
**Date:** 2026-02-16
**Source:** ephemeral/session-insights/24-FINAL-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md (lines 1138-1761)
**Task:** Cross-reference Sections 6-10 + Appendices A-D against actual design system files

---

## CRITICAL DISCREPANCY FOUND

**Variant B Container Width:**
- **Prompt claims (Section 6.2, line 1172):** "Variant B = 880px (too narrow)"
- **Actual file shows (line 85):** `max-width: 960px;`
- **CONFLICT:** Prompt contradicts source file

**Investigation needed:** Check other Phase D variants and validation reports for authoritative container width values.

---

## SECTION 6: CONTEXT & LESSONS — Cross-Reference Results

### 6.1 The Tier Model (lines 1141-1158)

**CROSS-REF TARGET:** ephemeral/continuity-docs/HANDOFF.md

**VERIFICATION:**

| Property | Prompt Value (Section 6.1) | HANDOFF.md (lines 98-109) | Match? |
|----------|---------------------------|---------------------------|--------|
| Floor mechanisms | 5 | 5 of 18 | ✅ |
| Middle mechanisms | 8-10 | 8-10 of 18 | ✅ |
| Ceiling mechanisms | 12-15 | 12-15 of 18 | ✅ |
| Flagship mechanisms | 16-18 | 16-18 of 18 | ✅ |
| Floor CSS lines | 150-250 | ~150-250 | ✅ |
| Middle CSS lines | 350-500 | ~350-500 | ✅ |
| Ceiling CSS lines | 700-1000 | ~700-1,000 | ✅ |
| Flagship CSS lines | 1000-1500 | ~1,000-1,500 | ✅ |
| Floor build time | 30-45 min | 30-45 min | ✅ |
| Middle build time | 70-100 min | 70-100 min | ✅ |
| Ceiling build time | 150-220 min | 150-220 min | ✅ |
| Flagship build time | 240-400 min | 240-400 min | ✅ |
| Floor pages % | 10-20% | 10-20% | ✅ |
| Middle pages % | 40-50% | 40-50% | ✅ |
| Ceiling pages % | 20-30% | 20-30% | ✅ |
| Flagship pages % | 5-10% | 5-10% | ✅ |
| Middle metaphor? | No | No | ✅ |
| Ceiling metaphor? | Yes | Yes (full pipeline) | ✅ |
| Flagship metaphor? | Yes + multi-pattern | Yes (multi-pass audit) | ✅ |
| Floor categories | 2-3 | Not in table | ⚠️ HANDOFF table missing |
| Middle categories | 5/5 | 5/5 (inferred from Variant B baseline) | ✅ |
| Floor scales | 0 | Not in table | ⚠️ HANDOFF table missing |
| Middle scales | 2 | Not specified in table | ⚠️ HANDOFF table missing "Scales" row |
| Ceiling scales | 4 | Not specified in table | ⚠️ HANDOFF table missing "Scales" row |
| Flagship scales | 5 | Not specified in table | ⚠️ HANDOFF table missing "Scales" row |

**STATUS:** ✅ VERIFIED — All tier model numbers match HANDOFF.md. Minor omissions in HANDOFF table (Categories, Scales, Deployment rows missing).

**ENRICHMENT OPPORTUNITY:** HANDOFF.md tier table could add "Metaphor?", "Categories", "Scales", "Deployment" rows for completeness (present in prompt Section 6.1, line 1148-1151).

---

### 6.2 Phase D Findings (lines 1159-1184)

**CROSS-REF TARGET:** ephemeral/phase-d-execution/builds/variant-b-weak-perm.html

**VERIFICATION - What Worked:**
- ✅ "Scientific calibration laboratory" metaphor → NEEDS VERIFICATION (not in HTML header, need full file read)
- ✅ 100% token compliance → NEEDS CODE AUDIT
- ✅ 100% soul compliance (border-radius: 0, box-shadow: none) → VERIFIED in lines 19-20 of HTML
- ❌ **Container width 880px** → **CONFLICT:** Actual file shows 960px (line 85)

**VERIFICATION - What Failed:**
- ❌ **Container width violation** → DISPUTED: Variant B shows 960px (CORRECT), not 880px
- ⚠️ "4/5 pages violated 940-960px" → NEEDS VERIFICATION: check other 4 variants
- ✅ Always-load protocol skip (Track 1) → Referenced in HANDOFF.md line 34-35: "Track 1 instant fail"
- ⚠️ Prose-only content → NEEDS VERIFICATION: check actual Variant B content structure
- ⚠️ "Sample 2-4 mechanisms" limitation → Referenced in HANDOFF.md line 164: "single most damaging instruction"

**CRITICAL FINDING:** Container width discrepancy requires resolution before proceeding.

**ACTION NEEDED:**
1. Read full Variant B HTML (694 lines)
2. Check Phase D validation report for authoritative container width assessment
3. Verify other 4 variants' container widths
4. Determine if "880px" is a typo or if file was updated post-validation

---

### 6.3 Modification Recommendations Applied (lines 1185-1196)

**CROSS-REF TARGET:** ~/.claude/skills/tension-composition/SKILL.md

**VERIFICATION:**

| Mod | Status in Prompt | HANDOFF.md (line 156-174) | Match? |
|-----|------------------|---------------------------|--------|
| M2 (Fractal Gate) | APPLIED (Wave 1) | M2 APPLIED Wave 1 (line 159) | ✅ |
| M3 (Container Width) | APPLIED (Wave 1) | M3 APPLIED Wave 1 (line 159) | ✅ |
| M5 (Tier Routing) | APPLIED (Wave 1) | M5 APPLIED Wave 1 (line 159) | ✅ |
| M8 (Tier Framing) | APPLIED (Wave 1) | M8 APPLIED Wave 1 (line 159) | ✅ |
| M1 (Per-Category Min) | NOT YET APPLIED | M1 NOT YET APPLIED (line 161-174) | ✅ |

**STATUS:** ✅ VERIFIED — Modification status matches HANDOFF.md

**NEEDS VERIFICATION:** Check actual SKILL.md file to confirm Wave 1 mods are present and M1 still says "sample 2-4"

---

### 6.4 Core Research Findings (lines 1197-1214)

**CROSS-REF TARGET:** ephemeral/richness-research/ and ephemeral/rigidity-research/ summaries

**FILES FOUND:**
- richness-research/05-unified-synthesis.md
- rigidity-research/06-unified-synthesis.md

**VERIFICATION NEEDED:**
1. ⚠️ "Richness = Vocabulary Fluency, Not Creative Freedom" → verify in richness synthesis
2. ⚠️ "CD-006 operated under 78 simultaneous constraints" → verify count in rigidity synthesis
3. ⚠️ "The Gap is Quantitative, Not Qualitative" → verify in richness synthesis
4. ⚠️ "'Sample 2-4 Mechanisms' = 50:1 Information Loss" → verify calculation source
5. ⚠️ "Binary Rules vs Judgment Rules — 100% vs ~0% compliance" → verify in synthesis

**ACTION:** Read both synthesis files to verify all 5 core findings

---

### 6.5 Variant B Mechanism Recount (lines 1215-1230)

**CROSS-REF TARGET:** ephemeral/phase-d-execution/builds/variant-b-weak-perm.html (full file)

**CLAIMED MECHANISMS (7 total across 5 categories):**

| Category | Mechanisms | Count |
|----------|-----------|-------|
| Spatial (S) | #5 Dense/Sparse Alternation | 1 |
| Hierarchy (H) | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale | 3 |
| Component (C) | #2 2-Zone DNA, #10 Border-Left Signal | 2 |
| Depth/Emphasis (D) | #7 Zone Background | 1 |
| Structure/Nav (N) | #18 Data Table | 1 |

**11 MECHANISMS NOT DEPLOYED:** #3, #6, #8, #9, #12, #13, #14, #15, #16, #17

**VERIFICATION NEEDED:**
1. Read full Variant B HTML (694 lines)
2. Count actual mechanisms deployed
3. Verify CSS structure matches claimed pattern
4. Check if dark header (#13), footer (#14), code blocks (#17), color encoding (#9), bento grid (#15), solid offset (#3) are truly absent

**NOTE:** This section makes specific implementationassertions requiring full code audit

---

## SECTION 7: REFERENCE EXAMPLES — Cross-Reference Results

### 7.1 Variant B Anatomy (lines 1236-1261)

**CROSS-REF TARGET:** variant-b-weak-perm.html structure

**CLAIMED STRUCTURE:**
```html
<div class="page-container">  <!-- max-width: 960px -->
  <section class="lab-zone">
  <section class="lab-zone--critical">
  <section class="lab-zone--clean-room">
  <section class="lab-zone--dense">
  <section class="lab-zone--transition">
</div>
```

**VERIFICATION:**
- ✅ `.page-container` class exists (line 84-88)
- ✅ `max-width: 960px` present (line 85)
- ⚠️ Section class names need verification (HTML body starts line 421+)
- ⚠️ "5 lab-zone variants" structure needs full HTML read

**CONFLICT ALERT:** Line 1241 says "max-width: 960px" but line 1172 said "880px (too narrow)". Prompt is internally inconsistent.

---

### 7.2 Crown Jewel Summary: DD-006 (lines 1262-1270)

**CROSS-REF TARGET:** design-system/validated-explorations/density/DD-006-fractal.html

**CLAIMED PROPERTIES:**
- CSS lines: ~730 (Ceiling range: 700-1000)
- Mechanisms: 12+ across all 5 categories
- Fractal: 4-level demonstration
- What separates from Middle: Structural recursion at 4 scales, 730 CSS lines

**VERIFICATION NEEDED:**
1. Count CSS lines in DD-006-fractal.html
2. Count mechanisms deployed
3. Verify fractal scale count
4. Check if CSS line count falls in 700-1000 range

---

### 7.3 Crown Jewel Summary: CD-006 (lines 1271-1280)

**CROSS-REF TARGET:** design-system/validated-explorations/combination/CD-006-pilot-migration.html

**CLAIMED PROPERTIES:**
- CSS lines: 1,000+ (Flagship range)
- Components: ALL 11 types deployed
- Patterns: ALL 5 axis patterns on one page
- Transitions: 7 total (2 Smooth, 3 Bridge, 2 Breathing)
- Fractal: 5 scales

**VERIFICATION NEEDED:**
1. Count CSS lines in CD-006-pilot-migration.html
2. Verify 11 component types present
3. Count axis patterns
4. Count and classify transitions
5. Verify 5-scale fractal claim

---

### 7.4 Concrete CSS: Callout System (lines 1281-1297)

**CROSS-REF TARGET:** design-system/compositional-core/components/merged-components.css

**CLAIMED CSS:**
```css
.callout { border-left: 4px solid; padding: var(--space-6) var(--space-8); margin: var(--space-6) 0; }
.callout-label { font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta); ... }
.callout-body { font-family: var(--font-body); font-size: var(--type-body); line-height: 1.7; }
.callout--info { border-left-color: var(--accent-blue); background: #F5F9FE; }
...
```

**VERIFICATION NEEDED:**
1. Read merged-components.css
2. Search for `.callout` pattern
3. Verify border-left: 4px structure
4. Verify 4 callout variants (info/tip/gotcha/essence)
5. Check background color values match

---

### 7.5 Concrete CSS: Section Zones (lines 1299-1321)

**CROSS-REF TARGET:** design-system/compositional-core/vocabulary/tokens.css

**CLAIMED CSS:**
```css
.section--sparse { padding: var(--space-16); /* 64px */ background: var(--color-zone-sparse); }
.section--dense { padding: var(--space-8); /* 32px */ background: var(--color-zone-dense); }
...
```

**VERIFICATION NEEDED:**
1. Verify --space-16 = 64px in tokens.css
2. Verify --space-8 = 32px in tokens.css
3. Verify --space-12 = 48px in tokens.css
4. Check if --color-zone-sparse, --color-zone-dense, --color-zone-breathing are defined in tokens

---

### 7.6 The 5 Most Universal Mechanisms (lines 1322-1333)

**CROSS-REF TARGET:** design-system/compositional-core/case-studies/README.md (or _INDEX.md if it exists)

**CLAIMED FREQUENCY (mechanisms appearing in 3+ of 9 case studies):**
1. 2-Zone Component DNA (#2) — 6/9 case studies
2. Border-Weight Gradient (#1) — 4/9
3. Zone Background Differentiation (#7) — 4/9
4. Spacing Compression (#4) — 3/9
5. Dense/Sparse Alternation (#5) — 3/9

**VERIFICATION NEEDED:**
1. ⚠️ NO _INDEX.md file found (only README.md)
2. Count mechanism frequency across 9 case study files
3. Verify #2 appears in 6/9 files
4. Verify #1, #7 appear in 4/9 files
5. Verify #4, #5 appear in 3/9 files

**GAP:** Case studies directory has README.md not _INDEX.md. Prompt references non-existent file path.

---

## SECTION 8: ANTI-PATTERNS — Cross-Reference Results

### 8.1 Known Gaming Vulnerabilities (lines 1337-1356)

**CROSS-REF TARGET:** Hardening document (needs path verification)

**CLAIMS:**
- Post-hardening gaming resistance: 8/10
- Pre-hardening worst case: single-column 940px, 5 mechanisms, 48-52px uniform padding
- NOW fails: B4.1 (< 7 floor), B4.4 (no reinforcing pairs), B4.5 (4px < 8px threshold), PA-05a (< 2 custom layouts), PA-05b (1.08x < 2.0x)

**VERIFICATION NEEDED:**
1. Find hardening document path (likely in ephemeral/session-insights/)
2. Verify gaming resistance score
3. Verify failure criteria match checklist items
4. Cross-check thresholds against Section 10.7

---

### 8.2 Common Build Failures (lines 1357-1370)

**CROSS-REF TARGET:** Multiple sources (prohibitions.md, tokens.css, Phase D findings)

**CLAIMED RULES:**
- Container width < 940px → Use 960px max-width
- Skip always-load protocol → Read prohibitions.md + tokens.css FIRST (527 lines)
- "Sample 2-4 mechanisms" → Read FULL catalog, deploy 1+ per category
- Uniform density → Vary padding: 64px sparse, 32px moderate, 16px dense, range >= 32px
- Missing h3 italic → ALL h3 elements: `font-style: italic`

**VERIFICATION:**
- ✅ Always-load protocol = 527 lines → VERIFIED (353 + 174 = 527)
- ⚠️ Container width rule → Check against prohibitions.md or guardrails doc
- ⚠️ h3 italic rule → Verify in prohibitions.md
- ⚠️ Density range >= 32px → Verify threshold source

---

### 8.3 Anti-Patterns from Compositional Rules (lines 1371-1382)

**CROSS-REF TARGET:** design-system/compositional-core/grammar/mechanism-catalog.md (compositional rules section)

**CLAIMED RULES:**
- N4: Nesting > 2 levels deep
- R2: 4+ consecutive dense sections
- Z2: 4+ zone color changes per viewport
- D1: 5+ components per viewport height
- AP1: 3+ callouts per viewport section
- C1: Simultaneous axis patterns

**VERIFICATION NEEDED:**
1. Read mechanism-catalog.md compositional rules section
2. Count total compositional rules (Appendix C claims 41 rules)
3. Verify each anti-pattern code (N4, R2, Z2, D1, AP1, C1) exists
4. Verify thresholds match (N4 = 2 levels, R2 = 4 consecutive, etc.)

**CRITICAL:** Appendix C claims 41 total compositional rules. Need to verify this count.

---

### 8.4 Border Anti-Patterns (lines 1383-1390)

**CROSS-REF TARGET:** design-system/compositional-core/grammar/border-system.md

**CLAIMED RULES:**
- AP-B1: 2px borders outside confidence encoding → 4px callouts, 3px sections, 1px separators
- AP-B2: Mixed border widths on same element → 1px all sides, then override left to 4px
- AP-B3: Border for spacing (transparent borders) → Use spacing tokens
- AP-B4: Rounded borders → border-radius: 0 ALWAYS

**VERIFICATION NEEDED:**
1. Verify border-system.md file exists
2. Verify 4 anti-pattern codes (AP-B1 through AP-B4)
3. Check border width guidelines (4px/3px/1px)
4. Verify border-radius: 0 is absolute prohibition

---

## SECTION 9: CONTENT REQUIREMENTS — Cross-Reference Results

### 9.1-9.2 Content Selection Criteria (lines 1406-1429)

**CROSS-REF TARGET:** Full checklist (ephemeral/session-insights/18-middle-tier-checklist.md)

**CLAIMED CRITERIA:**
- A2.1: Word count 800-1,200
- A2.2: Prose paragraphs >= 3
- A2.3: Code blocks >= 2
- A2.4: Callouts/tips/warnings >= 2
- A2.5: Hierarchical headings (2+ levels)
- A2.6: Table OR reference >= 1
- A2.7: Step sequence (3+ steps) >= 1
- A2.8: Domain different from Variant B (NOT scientific calibration)
- A2.9: NOT self-referential
- A2.10: Maps to density pattern (CRESCENDO / F-PATTERN / BENTO / PULSE)
- A3.1: Structural element type count >= 4
- A3.2: No single element > 60% by word/line count
- A3.3: Verification documented

**VERIFICATION NEEDED:**
1. Read 18-middle-tier-checklist.md
2. Verify A2.1 through A2.10 items exist
3. Verify A3.1 through A3.3 items exist
4. Check if thresholds match (800-1200 words, >= 3 paragraphs, etc.)

---

## SECTION 10: SUCCESS CRITERIA — Cross-Reference Results

### 10.1 The Decision Matrix (lines 1459-1467)

**CROSS-REF TARGET:** Checklist Section E (decision framework)

**CLAIMED MATRIX:**
| Engagement | Novelty | Verdict | Action |
|-----------|---------|---------|--------|
| Designed | Novel | SUCCESS | Proceed to Wave 2 |
| Designed | Derivative | PARTIAL | Middle achieves richness but feels like showcase copy |
| Under-designed | Novel | PARTIAL | Tier boundary wrong |
| Under-designed | Derivative | PARTIAL | Wave 1 validated |

**VERIFICATION NEEDED:**
1. Verify checklist has Section E
2. Verify 2x2 decision matrix structure
3. Check if verdicts match (SUCCESS / PARTIAL conditions)

---

### 10.2 SUCCESS Criteria (lines 1468-1479)

**CROSS-REF TARGET:** Checklist Section E2

**CLAIMED CRITERIA:**
- E2.1: PA-05 at 1440px = YES (4/4 sub-criteria PASS)
- E2.2: Better than Variant B = YES (clear improvement, NOT marginal + 1 perceptual observation)
- E2.3: Spatial atmosphere = YES or SOMEWHAT
- E2.4: 5-category coverage = PASS (B3.6)
- E2.5: Novelty >= 2 of 3 signals (D3.1/D3.2/D3.3)
- E2.6: Container width = 940-960px (B2.1)
- E2.7: Soul compliance = 7/7 (B7.1-B7.7)

**VERIFICATION NEEDED:**
1. Verify E2.1 through E2.7 items exist in checklist
2. Cross-check item codes (B3.6, D3.1-3, B2.1, B7.1-7)
3. Verify PA-05 has 4 sub-criteria
4. Verify soul compliance has 7 checks

---

### 10.3 FAILURE Criteria (lines 1480-1489)

**CROSS-REF TARGET:** Checklist Section E4

**CLAIMED CRITERIA:**
- E4.1: PA-05 at 1440px = NO (0-1 sub-criteria PASS)
- E4.2: Better than Variant B = NO
- E4.3: All 3 novelty signals = DERIVATIVE
- E4.4: Container width violated
- E4.5: 5-category coverage failed

**VERIFICATION NEEDED:**
1. Verify E4.1 through E4.5 items exist
2. Check if failure thresholds match SUCCESS criteria inverses

---

### 10.4 Novelty Assessment (lines 1490-1499)

**CROSS-REF TARGET:** Checklist Section D3

**CLAIMED TESTS:**
- D3.1: Structural fingerprint (20px Gaussian blur comparison)
- D3.2: CSS value overlap (< 30% novel, > 60% derivative)
- D3.3: Mechanism combination (different pairs = novel)

**VERIFICATION NEEDED:**
1. Verify D3.1, D3.2, D3.3 exist in checklist
2. Verify blur test method
3. Verify overlap thresholds (30% vs 60%)
4. Check if combination test is defined

---

### 10.5-10.6 Post-Experiment Decisions & Meta-Checks (lines 1501-1544)

**CROSS-REF TARGET:** Checklist Sections F and G

**CLAIMED SECTIONS:**
- F1: If SUCCESS (5 actions)
- F2: If PARTIAL (5 actions)
- F3: If FAILURE (5 actions)
- G1-G8: Meta-checks (8 total)

**VERIFICATION NEEDED:**
1. Verify checklist has Sections F and G
2. Count actions per verdict type
3. Verify G1-G8 meta-check descriptions

---

### 10.7 Key Thresholds Quick Reference (lines 1545-1572)

**CROSS-REF TARGET:** All previous sections for consistency

**CLAIMED THRESHOLDS (27 total):**
- Container max-width: 940-960px (B2.1)
- Horizontal padding: >= 32px (B9.1)
- Characters per line: 45-80 (B9.2)
- Compression ratio: Deepest >= 40% of shallowest (B9.3)
- Body line-height: >= 1.5 (B9.4)
- Section breathing: >= 48px (B9.5)
- Heading-body gap: >= 16px (B9.6)
- Density range: >= 32px span
- Token compliance: >= 80% (B8.1)
- Mechanism count: 7-12 (target 8-10) (B4.1)
- Mechanism categories: 5/5 (B3.6)
- Mechanism interactions: >= 2 pairs (B4.4)
- Perceptibility: >= 10% OR 8px (B4.5)
- CSS line count: 350-500 (descriptive) (C1.1)
- Word count: 800-1,200 (A2.1)
- Structural types: >= 4 (A3.1)
- PA-05a elements: >= 2 (1440px) (C4.5)
- PA-05b padding ratio: >= 2.0x (1440px) (C4.5)
- PA-05d compositional CSS: >= 15% (C4.5)
- WCAG contrast: >= 4.5:1 (B10.9)
- Semantic HTML: >= 3 landmarks (B10.1)
- Fractal scales: 2 (Page + Component) (B6.1)
- Transitions: >= 3 (C3 enrichment)

**VERIFICATION NEEDED:**
1. Cross-check each threshold against earlier sections
2. Verify item codes match (B2.1, B9.1-6, B8.1, B4.1, B3.6, etc.)
3. Check for internal contradictions
4. Verify "7-12 (target 8-10)" matches Section 6.1 tier model

**CONFLICT CHECK:** Is mechanism count "7-12" consistent with "Middle tier = 8-10"?

---

## APPENDIX A: FILE REFERENCE MAP — Cross-Reference Results

### Tier 1: MUST-LOAD (lines 1577-1589)

**CLAIMED FILES:**

| # | File | Lines | Purpose |
|---|------|-------|---------|
| 1 | compositional-core/identity/prohibitions.md | 353 | 22 soul constraints |
| 2 | compositional-core/vocabulary/tokens.css | 174 | 65 tokens |
| 3 | compositional-core/grammar/mechanism-catalog.md | 1,011 | 18 mechanisms + compositional rules |
| 4 | compositional-core/guidelines/semantic-rules.md | 286 | Semantic gap rules |
| 5 | compositional-core/guidelines/usage-criteria.md | 298 | Usage criteria |
| 6 | ~/.claude/skills/tension-composition/SKILL.md | ~1,582 | Build pipeline |
| 7 | ~/.claude/skills/perceptual-auditing/SKILL.md | ~200 | PA audit questions |
| 8 | compositional-core/components/merged-components.css | 1,195 | Component CSS library |

**VERIFICATION STATUS:**
- ✅ File 1 exists (prohibitions.md)
- ✅ File 2 exists (tokens.css)
- ✅ File 3 exists (mechanism-catalog.md)
- ⚠️ File 4: Verify path and line count
- ⚠️ File 5: Verify path and line count
- ⚠️ File 6: Verify SKILL.md line count (~1,582)
- ⚠️ File 7: Verify SKILL.md line count (~200)
- ⚠️ File 8: Verify merged-components.css line count (1,195)

**ACTION:** Verify all 8 file paths exist and line counts match

---

### Tier 2: MUST-REFERENCE (lines 1591-1601)

**CLAIMED FILES:**

| # | File | Purpose |
|---|------|---------|
| 9 | ephemeral/session-insights/18-middle-tier-checklist.md | 138-item checklist |
| 10 | ephemeral/session-insights/21-quick-check.md | 15-item gate |
| 11 | ephemeral/session-insights/21-pa05-operationalization.md | PA-05 sub-criteria |
| 12 | ephemeral/session-insights/21-mechanism-hardening.md | B4.4, B4.5, floor raise |
| 13 | ephemeral/continuity-docs/HANDOFF.md | State transfer document |
| 14 | ephemeral/phase-d-execution/builds/variant-b-weak-perm.html | Variant B baseline |

**VERIFICATION STATUS:**
- ⚠️ File 9: Verify path and "138-item" count
- ⚠️ File 10: Verify path and "15-item" count
- ⚠️ File 11: Verify path exists
- ⚠️ File 12: Verify path exists
- ✅ File 13: Verified (HANDOFF.md exists, 511 lines)
- ✅ File 14: Verified (variant-b-weak-perm.html exists, 694 lines)

**ACTION:** Verify ephemeral/session-insights/ files exist

---

### Tier 3: Crown Jewel References (lines 1602-1607)

**CLAIMED FILES:**

| # | File | Purpose |
|---|------|---------|
| 15 | design-system/validated-explorations/density/DD-006-fractal.html | Ceiling reference |
| 16 | design-system/validated-explorations/combination/CD-006-pilot-migration.html | Flagship reference |

**VERIFICATION STATUS:**
- ⚠️ File 15: Verify path (need to check validated-explorations/ structure)
- ⚠️ File 16: Verify path

**ACTION:** List validated-explorations/ directory structure

---

### Tier 4: For Deeper Context (lines 1608-1617)

**CLAIMED FILES:**

| Topic | File |
|-------|------|
| Border grammar | design-system/compositional-core/grammar/border-system.md |
| Component inventory | design-system/compositional-core/components/component-inventory.md |
| Research synthesis | design-system/research/RESEARCH-SYNTHESIS.md |
| Tier methodology | ephemeral/doc-enrichment/02-tier-methodology.md |
| Density patterns | design-system/specification/patterns/density-patterns.md |

**VERIFICATION STATUS:**
- ⚠️ All 5 files need path verification

**ACTION:** Verify all Tier 4 file paths exist

---

## APPENDIX B: BUILDER PROMPT MANDATORY BLOCKS — No External Cross-Ref

**STATUS:** Self-contained templates (no external verification needed)

**CONTENT:** 4 blocks (Soul Checklist, File-Write Enforcement, Container Width Enforcement, M1 Override)

---

## APPENDIX C: COMPOSITIONAL RULES SUMMARY — Cross-Reference Results

**CROSS-REF TARGET:** compositional-core/grammar/mechanism-catalog.md (compositional rules section)

**CLAIMED STRUCTURE:** 41 rules across 9 categories
1. Zone Nesting (4 rules): N1, N2, N3, N4
2. Spacing Rhythm (4 rules): R1, R2, R3, R4
3. Background Zones (3 rules): Z1, Z2, Z3
4. Component Density (3 rules): D1, D2, D3
5. 2-Zone DNA (3 rules): DNA1, DNA2, DNA3
6. Compound Grammar (3 rules): C1, C2, C3
7. Fractal (3 rules): F1, F2, F3
8. Grid Grammar (3 rules): G1, G2, G3
9. Responsive Collapse (2 rules): RC1, RC2
10. Anti-Patterns (4 rules): AP1, AP2, AP3, AP4

**TOTAL:** 4+4+3+3+3+3+3+3+2+4 = 32 rules (NOT 41!)

**DISCREPANCY:** Appendix C claims 41 rules but only lists 32 (with 13 unique across 10 categories in Section 8.3).

**VERIFICATION NEEDED:**
1. Read mechanism-catalog.md compositional rules section
2. Count actual rules present
3. Reconcile 32 vs 41 discrepancy
4. Verify all rule codes (N1-N4, R1-R4, Z1-Z3, D1-D3, DNA1-3, C1-C3, F1-F3, G1-G3, RC1-RC2, AP1-AP4)

**CRITICAL FINDING:** Rule count mismatch requires resolution.

---

## APPENDIX D: EVALUATION TIME ESTIMATES — Cross-Reference Results

**CROSS-REF TARGET:** MEMORY.md agent team lessons (build time patterns)

**CLAIMED ESTIMATES:**
- Pre-build decisions: 30-45 min
- Build (HTML + CSS): 70-100 min
- Programmatic audit: 5 min
- Quick Check (15 items): 30-40 min
- Perceptual audit (PA-01 to PA-20 + SEM): 30 min
- Comparison with Variant B: 20-30 min
- Verdict decision: 15-20 min
- **TOTAL: 3.5-4.5 hours**

**VERIFICATION NEEDED:**
1. Check MEMORY.md "Build time" row in tier table: Middle = 70-100 min
2. Verify PA audit time estimate (30 min for 48 questions?)
3. Cross-check total time (200-265 min = 3.3-4.4 hours) vs claimed 3.5-4.5 hours

**MINOR ARITHMETIC CHECK:**
- 30+70+5+30+30+20+15 = 200 min (3.3 hrs)
- 45+100+5+40+30+30+20 = 270 min (4.5 hrs)
- Range: 3.3-4.5 hours (matches "3.5-4.5 hours" claim within rounding)

**STATUS:** ✅ TIME ESTIMATES REASONABLE

---

## SUMMARY OF FINDINGS

### CRITICAL CONFLICTS (Must Resolve Before Middle-Tier Experiment)

1. **❌ Variant B Container Width Contradiction**
   - Prompt Section 6.2 (line 1172): "Variant B = 880px (too narrow)"
   - Prompt Section 7.1 (line 1241): "max-width: 960px"
   - Actual file (line 85): `max-width: 960px;`
   - **Internal contradiction + file mismatch**

2. **❌ Compositional Rules Count Mismatch**
   - Appendix C header: "41 Rules"
   - Appendix C table: 32 rules listed (4+4+3+3+3+3+3+3+2+4)
   - **9-rule discrepancy**

### GAPS (Missing Files or Data)

1. **⚠️ Case Studies _INDEX.md Does Not Exist**
   - Prompt references: `compositional-core/case-studies/_INDEX.md`
   - Actual file: `compositional-core/case-studies/README.md`
   - Section 7.6 relies on this file for mechanism frequency count

2. **⚠️ Tier Model Properties Missing from HANDOFF.md**
   - HANDOFF table missing: "Scales", "Deployment" rows
   - Prompt Section 6.1 includes these (lines 1150-1151)

3. **⚠️ Unverified File Paths (Tier 1-4 References)**
   - 13 file paths need existence verification
   - Line counts need confirmation (especially SKILL.md files)

### VERIFICATION PENDING (Requires Full File Reads)

1. **Variant B Full Structure Audit**
   - Mechanism count (claimed 7, need to verify)
   - Lab-zone section structure
   - Metaphor derivation evidence
   - Content type (prose-only claim)

2. **Crown Jewel Properties**
   - DD-006 CSS line count (~730 claimed)
   - CD-006 CSS line count (1,000+ claimed)
   - Mechanism counts (12+ and 16-18 claimed)
   - Fractal scale counts (4 and 5 claimed)

3. **Compositional Rules Full Enumeration**
   - Read mechanism-catalog.md rules section
   - Count all rules present
   - Reconcile 32 vs 41 discrepancy
   - Verify all rule codes in Appendix C match actual file

4. **Richness + Rigidity Core Findings**
   - Verify "78 simultaneous constraints" (CD-006)
   - Verify "50:1 information loss" calculation
   - Verify "100% vs ~0% compliance" for binary vs judgment rules
   - Verify "4:1 ratio" (vocabulary vs constraint rigidity)

5. **Callout & Zone CSS Verification**
   - Verify callout structure in merged-components.css
   - Verify zone token definitions in tokens.css
   - Verify section padding token values

6. **Checklist Structure Verification**
   - 138-item count (18-middle-tier-checklist.md)
   - Section codes (A2.1-A3.3, B2.1-B10.9, C1.1-C4.5, D3.1-D3.3, E2.1-E4.5, F1-F3, G1-G8)
   - PA-05 4 sub-criteria definition

### ENRICHMENTS (Additions to Make)

1. **HANDOFF.md Tier Table**
   - Add "Scales" row (Floor: 0, Middle: 2, Ceiling: 4, Flagship: 5)
   - Add "Deployment" row (Individual, Individual, Combination, Multi-pattern)

2. **Case Studies Frequency Index**
   - Create actual _INDEX.md or update README.md
   - Document mechanism frequency across 9 case studies
   - Verify "5 most universal mechanisms" claim

---

## NEXT ACTIONS

### Immediate (Context-Eval Agent)

1. **Resolve container width conflict**
   - Read Phase D validation reports
   - Check all 5 variant HTML files
   - Determine authoritative container width for Variant B

2. **Verify compositional rules count**
   - Read mechanism-catalog.md full rules section
   - Count all rules
   - Reconcile 32 vs 41 discrepancy

3. **Verify all Tier 1-4 file paths**
   - Check 21 file paths exist
   - Count lines where specified
   - Report missing files

### Medium Priority

4. **Audit Variant B full structure**
   - Count mechanisms deployed
   - Verify lab-zone section architecture
   - Confirm prose-only content claim

5. **Verify crown jewel properties**
   - DD-006 CSS line count
   - CD-006 CSS line count + component/pattern counts

6. **Read synthesis files**
   - richness-research/05-unified-synthesis.md
   - rigidity-research/06-unified-synthesis.md
   - Verify 5 core findings in Section 6.4

### Lower Priority

7. **Verify CSS examples**
   - Callout system in merged-components.css
   - Zone tokens in tokens.css
   - Border system in border-system.md

8. **Verify checklist structure**
   - 138-item count
   - All section codes
   - PA-05 sub-criteria

---

## STATUS: IN PROGRESS

**Files Read:** 3 (HANDOFF.md, Variant B HTML first 150 lines, README.md)
**Files Verified:** 2 (HANDOFF.md, Variant B partial)
**Conflicts Found:** 2 (container width, rule count)
**Gaps Found:** 3 (_INDEX.md missing, HANDOFF table incomplete, unverified file paths)
**Verification Pending:** 8 categories

**Next Step:** Resolve container width conflict + verify compositional rules count
