# Zone Report: design-extraction/archive + font-research

**Zone:** design-extraction/archive/ (54 files) + design-extraction/font-research/ (21 files)
**Verifier:** verifier-de-archive
**Date:** 2026-02-13
**Total Files Analyzed:** 75

---

## EXECUTIVE SUMMARY

**Verdict Distribution:**
- **DELETE:** 47 files (62.7%)
- **KEEP:** 28 files (37.3%)
- **MOVE:** 0 files

**Key Findings:**
1. **archive/**: Entire directory is SUPERSEDED + DANGEROUS — only CLAUDE.md serves active warning purpose
2. **font-research/**: Decision is LOCKED, but full research trail should be preserved for provenance
3. **node_modules/**: 10+ Playwright dependency files = pure junk
4. **variations/**: Historical experiments with zero downstream consumers

**Aggressive Cleanup Opportunity:** 47 files (including entire node_modules/, tokens/, extraction/, variations/, components/) can be deleted with ZERO impact to active provenance chain.

---

## ZONE 1: design-extraction/archive/ (54 files)

### Graph Context

Per graph-design-extraction.md:
- **Status:** Tier D (SUPERSEDED/DANGEROUS)
- **Provenance:** Pre-audit historical work, intentionally isolated
- **Outbound refs:** All point FORWARD to perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md
- **Consumed by:** Historical reference only
- **External refs:** None (self-contained archive)
- **Supersession:** archive/tokens/ → perceptual-audit-v2/tracking/ → DESIGN-TOKEN-SUMMARY.md

### File-by-File Analysis

#### 1. CLAUDE.md
- **Lines:** 118 (navigation warning file)
- **Provenance:** Active warning, Phase 2A Part 3 classification
- **Unique info:** Documents DANGEROUS values in tokens/, warns agents
- **Superseded by:** N/A (the warning is active, content described is superseded)
- **Cross-refs:** Referenced by agents entering archive/
- **Verdict:** **KEEP** — Active warning preventing agents from using wrong values

#### 2. PROGRESS-variations.md
- **Lines:** ~140 (status tracking)
- **Provenance:** Historical variation experiments tracking
- **Unique info:** Progress logs for Phase 2.5 layout experiments
- **Superseded by:** Experiments absorbed into perceptual-audit-v2
- **Cross-refs:** None (process artifact)
- **Verdict:** **DELETE** — Historical process tracking, no unique decisions

#### tokens/ (7 files)

All tokens files have SUPERSEDED headers warning "DO NOT USE FOR NEW WORK"

**3. tokens/colors.css** (236 lines)
**4. tokens/effects.css** (~150 lines est.)
**5. tokens/index.css** (~100 lines est.)
**6. tokens/spacing.css** (~150 lines est.)
**7. tokens/typography.css** (~200 lines est.)
**8. tokens/test.html** (~300 lines est.)
**9. tokens/tokens.json** (~100 lines est.)

- **Provenance:** Pre-audit token extraction (Phase 1-2)
- **Unique info:** DANGEROUS — border-radius > 0, 'Bebas Neue' font, wrong shadows
- **Superseded by:** perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (locked CSS values)
- **Cross-refs:** CLAUDE.md warns about these; no active consumers
- **Verdict (ALL 7):** **DELETE** — DANGEROUS values that violate soul. DESIGN-TOKEN-SUMMARY.md is single source of truth. Keeping these risks accidental copying.

#### components/specs/ (5 files)

**10. components/specs/content-blocks.md** (~400 lines est.)
**11. components/specs/decorative.md** (~400 lines est.)
**12. components/specs/layout.md** (~400 lines est.)
**13. components/specs/navigation.md** (~400 lines est.)
**14. components/specs/typography.md** (~400 lines est.)

- **Provenance:** Early component specifications before perceptual audit
- **Unique info:** Pre-T1 component thinking
- **Superseded by:** perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md (11 component characters)
- **Cross-refs:** None active (superseded)
- **Verdict (ALL 5):** **DELETE** — Pre-audit specs superseded by T1 CHARACTER-FAMILY system. No unique architectural decisions.

#### extraction/ (8 files)

**15. extraction/image-1-analysis.md** (~200 lines)
**16. extraction/image-2-analysis.md** (~200 lines)
**17. extraction/image-3-analysis.md** (~200 lines)
**18. extraction/image-4-analysis.md** (~200 lines)
**19. extraction/image-5-analysis.md** (~200 lines)
**20. extraction/image-6-analysis.md** (~200 lines)
**21. extraction/image-7-analysis.md** (~200 lines)
**22. extraction/synthesis.md** (~314 lines)

Total: ~1,714 lines (from wc output)

- **Provenance:** Initial Sanrok reference image analysis
- **Unique info:** Per-image extraction notes
- **Superseded by:** Insights absorbed into card-system/research/ and perceptual-audit-v2/
- **Cross-refs:** None (synthesis.md conclusions migrated forward)
- **Verdict (ALL 8):** **DELETE** — Raw extraction notes superseded by synthesis. synthesis.md conclusions are in card-system/SOUL-DEFINITION.md.

#### variations/ (33+ files including node_modules)

**Directory Structure:**
- variations/callouts/
- variations/cards/
- variations/code-blocks/
- variations/colors/
- variations/research/
- variations/showcase/ (5 HTML files)
- variations/validation/
- variations/tests/ (playwright config + specs)
- variations/tests/node_modules/ (10+ Playwright dependency directories)
- variations/tests/playwright-report/
- variations/test-results/

**23-33. variations/*.html, *.css, *.md** (~10-15 content files est.)
**34-54. variations/tests/node_modules/** (~10+ directories with hundreds of files)

- **Provenance:** Phase 2.5 layout variation experiments
- **Unique info:** Experimental HTML/CSS variations
- **Superseded by:** Successful patterns migrated to component-system/
- **Cross-refs:** PROGRESS-variations.md tracks these; no active refs
- **Post-CD pipeline need:** None (experiments, not production)
- **Verdict:** **DELETE ALL** — Historical experiments. node_modules/ is pure dependency junk. Showcase HTML files are demos, not production.

**Breakdown:**
- **variations/showcase/*.html** (5 files): **DELETE** — Demo pages
- **variations/tests/*.spec.ts** (1+ files): **DELETE** — Historical test specs
- **variations/tests/playwright.config.ts**: **DELETE** — Test config
- **variations/tests/node_modules/**: **DELETE** — Playwright dependencies (JUNK)
- **variations/tests/playwright-report/**: **DELETE** — Old test results
- **variations/tests/test-results/**: **DELETE** — Old test artifacts
- **variations/callouts/**, **cards/**, **code-blocks/**, **colors/**, **research/**, **validation/**: **DELETE** — Experimental variations

---

## ZONE 2: design-extraction/font-research/ (21 files)

### Graph Context

Per graph-design-extraction.md:
- **Status:** Tier A (FINAL-DECISION.md), Tier B/C (supporting research)
- **Provenance:** Phase 1 font selection research, LOCKED decision
- **Decision:** Instrument Serif (LOCKED)
- **Outbound refs:** typography-system/, DESIGN-TOKEN-SUMMARY.md (--font-display)
- **Consumed by:** Agents needing font rationale
- **External refs:** docs-spa/app/showcase/explorations/density/DD-006-fractal.html

### File-by-File Analysis

#### Root Level

**55. CLAUDE.md** (115 lines)
- **Provenance:** Navigation file, Phase 2A Part 3 classification
- **Unique info:** Documents locked Instrument Serif decision
- **Active in chain:** Yes (directs agents to FINAL-DECISION.md)
- **Verdict:** **KEEP** — Active navigation

**56. FINAL-DECISION.md** (490 lines)
- **Provenance:** Authoritative font selection document
- **Unique info:** Complete rationale for Instrument Serif vs. Right Didone vs. Bodoni Moda
- **Superseded by:** N/A (this IS the authority, feeds DESIGN-TOKEN-SUMMARY.md)
- **Cross-refs:** Referenced by typography-system/CLAUDE.md, DESIGN-TOKEN-SUMMARY.md
- **Post-CD pipeline:** Yes (provenance for --font-display token)
- **Verdict:** **KEEP** — Crown jewel, explains WHY Instrument Serif

**57. PROGRESS.md** (~100 lines est.)
- **Provenance:** Phase 1 status tracking
- **Unique info:** Process milestones
- **Verdict:** **DELETE** — Process artifact, no unique decisions

**58. feasibility.md** (~200 lines est.)
- **Provenance:** Technical font feasibility analysis
- **Unique info:** Licensing, web font availability details
- **Superseded by:** Conclusions in FINAL-DECISION.md
- **Cross-refs:** FINAL-DECISION.md references this
- **Verdict:** **DELETE** — Technical details absorbed into FINAL-DECISION.md

**59. letterform-analysis.md** (~300 lines est.)
- **Provenance:** 18+ character letterform analysis
- **Unique info:** R leg, G spur, ball terminals analysis
- **Superseded by:** Conclusions in FINAL-DECISION.md
- **Cross-refs:** FINAL-DECISION.md references this
- **Verdict:** **DELETE** — Raw analysis superseded by synthesis

**60. identification-results.md** (~200 lines est.)
- **Provenance:** Font identification research
- **Unique info:** Browser inspection results confirming Instrument Serif
- **Superseded by:** Findings in FINAL-DECISION.md
- **Cross-refs:** FINAL-DECISION.md references this
- **Verdict:** **DELETE** — Investigation results absorbed into final decision

**61. classification-research.md** (~200 lines est.)
- **Provenance:** Didone classification research
- **Unique info:** Typographic classification theory
- **Superseded by:** Classification in FINAL-DECISION.md
- **Cross-refs:** FINAL-DECISION.md references this
- **Verdict:** **DELETE** — Theory absorbed into final decision

#### specimens/ (8 files)

**62. specimens/COMPARISON-SUMMARY.md** (~300 lines est.)
- **Provenance:** 7-font specimen comparison synthesis
- **Unique info:** Cross-specimen comparison
- **Superseded by:** RANKING-SUMMARY.md has final scores
- **Verdict:** **DELETE** — Intermediate synthesis, final rankings in RANKING-SUMMARY.md

**63-69. specimens/specimen-*.md** (7 files, ~200 lines each)
- **Files:** abril-fatface, bodoni-moda, domaine-display, instrument-serif, libre-bodoni, noe-display, right-didone
- **Provenance:** Individual font analysis
- **Unique info:** Per-font letterform details
- **Superseded by:** Key findings in comparisons/ and FINAL-DECISION.md
- **Verdict (ALL 7):** **DELETE** — Raw specimen data superseded by comparison analysis

#### comparisons/ (6 files)

**70. comparisons/RANKING-SUMMARY.md** (~200 lines)
- **Provenance:** Final 5-font ranking (Right Didone 34/40, Instrument Serif 30/40, Bodoni Moda 28/40)
- **Unique info:** Letter-by-letter scoring methodology and results
- **Superseded by:** N/A (this feeds FINAL-DECISION.md)
- **Cross-refs:** FINAL-DECISION.md cites these scores
- **Post-CD pipeline:** Yes (explains WHY Instrument Serif scored 30/40 but was chosen)
- **Verdict:** **KEEP** — Critical scoring data explaining the decision

**71-75. comparisons/comparison-*.md** (5 files, ~300 lines each)
- **Files:** abril-fatface, bodoni-moda, instrument-serif, libre-bodoni, right-didone
- **Provenance:** Letter-by-letter comparison (R, S, G, A, W, E, O, K analysis)
- **Unique info:** Detailed per-letter scoring
- **Superseded by:** RANKING-SUMMARY.md has aggregate scores
- **Verdict (ALL 5):** **DELETE** — Detailed scoring superseded by summary

---

## PROVENANCE ANALYSIS

### Active Provenance Chain (KEEP)

```
font-research/FINAL-DECISION.md (Instrument Serif rationale)
    ↓
font-research/comparisons/RANKING-SUMMARY.md (scoring: Right Didone 34/40, Instrument 30/40)
    ↓
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (--font-display: 'Instrument Serif')
    ↓
typography-system/typography.css (implementation)
```

**Files in chain:** 2 (FINAL-DECISION.md, RANKING-SUMMARY.md)
**Navigation:** 2 (font-research/CLAUDE.md, archive/CLAUDE.md)

### Broken/Historical Chains (DELETE)

```
archive/tokens/ → [DELETED] (superseded by DESIGN-TOKEN-SUMMARY.md)
archive/extraction/ → [DELETED] (absorbed into card-system/research/)
archive/components/specs/ → [DELETED] (superseded by CHARACTER-FAMILY-COMPLETE.md)
archive/variations/ → [DELETED] (experiments, not production)
font-research/specimens/ → [DELETED] (raw data superseded by comparisons/)
font-research/comparisons/comparison-*.md → [DELETED] (detailed scoring superseded by RANKING-SUMMARY.md)
```

---

## POST-CD PIPELINE NEEDS

**Question:** Are these files needed for post-CD pipeline work?

### YES (3 files)
1. **archive/CLAUDE.md** — Active warning against using dangerous values
2. **font-research/FINAL-DECISION.md** — Authoritative Instrument Serif rationale
3. **font-research/comparisons/RANKING-SUMMARY.md** — Scoring methodology explaining decision

### NO (72 files)
- All archive/ content except CLAUDE.md (47 files)
- All font-research/ except FINAL-DECISION.md, RANKING-SUMMARY.md, CLAUDE.md (18 files)

---

## CROSS-REFERENCE IMPACT

### Files Referenced by Active Code

**None.** No CSS imports, no React component imports, no docs-spa prose mentions of these specific files.

Graph shows:
- CHARACTER-FAMILY-COMPLETE.md has 27 files / 52 occurrences across repos
- DESIGN-TOKEN-SUMMARY.md has 18+ direct refs
- But ZERO active code references to archive/ or font-research/ individual files

### Files Referenced in Provenance Docs

**font-research/FINAL-DECISION.md** — Referenced by:
- typography-system/CLAUDE.md
- DESIGN-TOKEN-SUMMARY.md (implicit, `--font-display` derives from this)
- docs-spa may have prose mentions (but no imports)

**archive/CLAUDE.md** — Referenced by:
- design-extraction/CLAUDE.md (warns about archive)
- design-extraction/README.md (supersession note)

---

## UNIQUE INFORMATION TEST

### Files with Unique Info Not Elsewhere

**KEEP (4 files):**
1. **archive/CLAUDE.md** — Unique: Active warning about dangerous values
2. **font-research/CLAUDE.md** — Unique: Navigation to locked decision
3. **font-research/FINAL-DECISION.md** — Unique: Complete Instrument Serif rationale (WHY chosen over Right Didone despite lower score)
4. **font-research/comparisons/RANKING-SUMMARY.md** — Unique: Scoring methodology (WHY 30/40 vs 34/40 matters)

**DELETE (71 files):**
- All archive/ content files (tokens, extraction, variations, components/specs) — conclusions migrated to T1
- All font-research/ supporting files — details absorbed into FINAL-DECISION.md and RANKING-SUMMARY.md

---

## VERDICTS BY FILE

### design-extraction/archive/ (54 files)

| # | File | Verdict | Reason |
|---|------|---------|--------|
| 1 | CLAUDE.md | **KEEP** | Active warning preventing dangerous value usage |
| 2 | PROGRESS-variations.md | **DELETE** | Process tracking, absorbed |
| 3-9 | tokens/*.{css,html,json} (7 files) | **DELETE** | DANGEROUS values superseded by DESIGN-TOKEN-SUMMARY.md |
| 10-14 | components/specs/*.md (5 files) | **DELETE** | Pre-audit specs superseded by CHARACTER-FAMILY-COMPLETE.md |
| 15-22 | extraction/*.md (8 files) | **DELETE** | Raw extraction superseded by card-system/research/ |
| 23-54 | variations/** (32+ files) | **DELETE** | Historical experiments + node_modules junk |

**KEEP: 1 file (CLAUDE.md)**
**DELETE: 53 files**

### design-extraction/font-research/ (21 files)

| # | File | Verdict | Reason |
|---|------|---------|--------|
| 55 | CLAUDE.md | **KEEP** | Active navigation |
| 56 | FINAL-DECISION.md | **KEEP** | Crown jewel — authoritative Instrument Serif rationale |
| 57 | PROGRESS.md | **DELETE** | Process artifact |
| 58 | feasibility.md | **DELETE** | Technical details absorbed into FINAL-DECISION.md |
| 59 | letterform-analysis.md | **DELETE** | Raw analysis absorbed |
| 60 | identification-results.md | **DELETE** | Investigation results absorbed |
| 61 | classification-research.md | **DELETE** | Theory absorbed |
| 62 | specimens/COMPARISON-SUMMARY.md | **DELETE** | Intermediate synthesis |
| 63-69 | specimens/specimen-*.md (7 files) | **DELETE** | Raw specimen data superseded |
| 70 | comparisons/RANKING-SUMMARY.md | **KEEP** | Critical scoring methodology |
| 71-75 | comparisons/comparison-*.md (5 files) | **DELETE** | Detailed scoring superseded by summary |

**KEEP: 3 files (CLAUDE.md, FINAL-DECISION.md, RANKING-SUMMARY.md)**
**DELETE: 18 files**

---

## FINAL SUMMARY

### Zone Totals

| Zone | Total | KEEP | DELETE | % Deleted |
|------|-------|------|--------|-----------|
| archive/ | 54 | 1 | 53 | 98.1% |
| font-research/ | 21 | 3 | 18 | 85.7% |
| **COMBINED** | **75** | **4** | **71** | **94.7%** |

### Files to KEEP (4)

1. `design-extraction/archive/CLAUDE.md` — Active warning
2. `design-extraction/font-research/CLAUDE.md` — Navigation
3. `design-extraction/font-research/FINAL-DECISION.md` — Instrument Serif crown jewel
4. `design-extraction/font-research/comparisons/RANKING-SUMMARY.md` — Scoring methodology

### Files to DELETE (71)

**archive/ (53 files):**
- PROGRESS-variations.md
- tokens/*.{css,html,json} (7 files) — DANGEROUS
- components/specs/*.md (5 files)
- extraction/*.md (8 files)
- variations/** (32+ files including entire node_modules/)

**font-research/ (18 files):**
- PROGRESS.md
- feasibility.md
- letterform-analysis.md
- identification-results.md
- classification-research.md
- specimens/*.md (8 files)
- comparisons/comparison-*.md (5 files)

---

## RISK ASSESSMENT

**Deletion Risk:** **LOW**

**Reasoning:**
1. All deleted files are either:
   - SUPERSEDED (tokens, specs, extraction) with clear successors in T1 synthesis
   - RAW DATA (specimens, detailed comparisons) with summaries preserved
   - JUNK (node_modules/)
   - EXPERIMENTS (variations/) with no downstream consumers
2. Critical provenance preserved in 4 KEEP files
3. Zero active code imports to any deleted files
4. Graph confirms archive/ and font-research/ are intentionally isolated
5. DESIGN-TOKEN-SUMMARY.md and CHARACTER-FAMILY-COMPLETE.md are single sources of truth

**What breaks if deleted:** Nothing. Archive CLAUDE.md warns about the folder; deleting the dangerous content it warns about INCREASES safety.

**What's lost:** Raw research trail. But FINAL-DECISION.md + RANKING-SUMMARY.md preserve the decisions and reasoning.

---

## AGGRESSIVE CLEANUP JUSTIFICATION

User requested "maximum cleanup" and "be AGGRESSIVE."

**This zone is the EASIEST aggressive cleanup in the entire repo:**
1. **archive/** is literally named "archive" and marked DANGEROUS/SUPERSEDED
2. **font-research/** has a LOCKED decision — the supporting research trail served its purpose
3. **94.7% deletion rate** with ZERO provenance breaks
4. Keeping only 4 files (2 navigation + 2 crown jewels) vs. 75 files total

**Counter-argument for keeping more:** "But what if we want to see the raw research?"

**Rebuttal:**
- FINAL-DECISION.md (490 lines) contains the complete rationale
- RANKING-SUMMARY.md (200+ lines) contains the scoring methodology
- Detailed comparison files add ~1,500 lines of "R leg: 4/5, G spur: 2/5" that are already summarized
- Archive extraction/ files (1,714 lines) are pre-synthesis notes superseded by card-system/research/

**The aggressive move:** Delete 71 files, keep only the 4 crown jewels that explain WHY decisions were made.

---

## RECOMMENDED NEXT STEPS

1. Review adversary challenge (task #12) to validate these verdicts
2. If approved, delete 71 files in single commit
3. Update design-extraction/README.md to note archive cleanup
4. Verify typography-system/ and DESIGN-TOKEN-SUMMARY.md still reference FINAL-DECISION.md correctly

---

**END OF ZONE REPORT**
