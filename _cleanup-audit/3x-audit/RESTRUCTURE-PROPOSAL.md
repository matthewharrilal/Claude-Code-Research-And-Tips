# RESTRUCTURE PROPOSAL — Post-Cleanup Architecture
**Date:** 2026-02-13
**Based On:** 3x comprehensive audit (12 zones, 1,175 files)
**Goal:** Clean, navigable structure optimized for forward pipeline consumption

---

## EXECUTIVE SUMMARY

**Current Structure Problems:**
1. **Scratchpad sprawl:** 7 underscore directories in knowledge-architecture/, mix of KEEP and DELETE
2. **Screenshot bloat:** 98 screenshots scattered across 4 zones (~32MB)
3. **Depth inconsistency:** Some zones at depth 5 (0.7× provenance penalty), others at depth 3
4. **Mixed semantics:** Some directories contain both process (scratchpads) and product (explorations)
5. **Naming ambiguity:** "explorations/axis" vs showcase route caused PATH ERROR in audit

**Proposed Solution:**
- **3-tier structure:** `fortress/`, `active/`, `archive/`
- **Max depth: 4 levels** (0.9× provenance multiplier minimum)
- **Semantic separation:** Process artifacts separate from product artifacts
- **Clear naming:** Disambiguate repository structure from showcase routes

**Impact:** 56% file reduction (1,175 → 514 files after safe deletions), improved navigability, zero fortress disruption

---

## CURRENT STRUCTURE PROBLEMS

### Problem 1: Scratchpad Sprawl

**Current state (knowledge-architecture/):**
```
knowledge-architecture/
├── _ad-execution/               (58 files, DELETE)
├── _ad-skeleton-analysis/       (35 files, DELETE 34, KEEP 1)
├── _cd-research/                (9 files, KEEP 2, DELETE 7)
├── _migration-research/         (10 files, KEEP 2, DELETE 8)
├── _comprehensive-audit/        (78 files, DELETE ALL)
├── _execution-journal/          (5 files, DELETE ALL)
├── _od-audit-scratchpad/        (29 files, DELETE ALL)
├── _od-reenrichment/            (65 files, DELETE ALL)
├── _provenance-deep-dive/       (10 files, ARCHIVE ALL)
├── _provenance-gap-analysis/    (15 files, ARCHIVE ALL)
├── _remediation/                (11 files, KEEP 1, ARCHIVE 10)
├── _workflow-metacognition/     (10 files, ARCHIVE ALL)
└── ROOT FILES                   (29 files, KEEP 5-15)
```

**Issues:**
- 12 underscore directories with inconsistent retention (some 100% DELETE, some 100% ARCHIVE, some mixed)
- Hard to navigate (which directories are active vs historical?)
- Provenance depth penalty (depth 5 = 0.7× multiplier)

---

### Problem 2: Screenshot Epidemic

**Current state (scattered across 4 zones):**
```
docs-spa/app/showcase/explorations/combination/phase4-standalone/CD-001/screenshots/ (57 PNG)
docs-spa/app/showcase/explorations/combination/phase4-standalone/CD-002/screenshots/ (57 PNG)
... (343 total across 6 CDs)

docs-spa/app/showcase/POST-CD-PIPELINE/_tension-analysis/*.png (4 PNG)

audit-screenshots/cycle-1/ (15 PNG)
audit-screenshots/dd-reaudit/ (7 PNG)

knowledge-architecture/_od-reenrichment/screenshots/ (46 PNG)
```

**Issues:**
- 98 screenshots (~32MB) in 4 different locations
- All 3 agents agreed: DELETE (findings documented in text)
- Mixed semantics: some in showcase routes, some in audit artifacts, some in scratchpads

---

### Problem 3: Fortress Zones Buried

**Current state:**
```
docs-spa/app/showcase/explorations/
├── axis/           (PATH ERROR — wrong directory audited)
├── combination/    (414 files, 88% bloat)
├── density/        (7 files, FORTRESS, buried in bloat)
├── organizational/ (8 files, FORTRESS, buried in bloat)
```

**Issues:**
- Fortress zones (DD, OD) buried alongside bloated zones (combination)
- No clear signal: "this zone is exceptional quality"
- Path ambiguity: "explorations/axis" = showcase route OR repository source?

---

### Problem 4: Provenance Depth Penalty

**Current depth analysis:**
```
Depth 3 (0.95× multiplier):
- docs-spa/app/showcase/

Depth 4 (0.9× multiplier):
- docs-spa/app/showcase/explorations/

Depth 5 (0.7× multiplier):
- docs-spa/app/showcase/explorations/{axis,combination,density,organizational}/
- knowledge-architecture/{_ad-execution, _comprehensive-audit, ...}/

Depth 6+ (0.5× multiplier):
- phase4-standalone/CD-001/screenshots/ (combination zone)
```

**Issues:**
- Critical files (OD, DD explorations) suffer 0.7× provenance penalty due to depth
- Scratchpads at depth 5 compound depth penalty with low intrinsic value

---

## PROPOSED NEW STRUCTURE

### Tier 1: Fortress (Load-Bearing, Zero Bloat)

**Location:** `/docs-spa/app/showcase/fortress/`

**Contents:**
```
fortress/
├── CLAUDE.md                    (auto-loaded, fortress zone index)
├── density/
│   ├── CLAUDE.md
│   ├── DD-001-breathing.html
│   ├── DD-002-gradient.html
│   ├── DD-003-islands.html
│   ├── DD-004-layers.html
│   ├── DD-005-rivers.html
│   └── DD-006-fractal.html      (crown jewel, 108 refs)
├── organizational/
│   ├── CLAUDE.md
│   ├── OD-001-conversational.html
│   ├── OD-002-narrative.html
│   ├── OD-003-task-based.html
│   ├── OD-004-confidence.html
│   ├── OD-005-spatial.html
│   ├── OD-006-creative.html     (crown jewel, OD-F-005 = 726 citations)
│   └── OD-006-CREATIVE-RESEARCH-FEED.md
└── combination/
    ├── CLAUDE.md
    ├── lock-sheet.md
    ├── CD-AUDIT-SYNTHESIS.md
    ├── CD-001-chronological.html
    ├── CD-002-narrative.html
    ├── CD-003-z-pattern.html
    ├── CD-004-tabbed.html
    ├── CD-005-multi-axis-transition.html (DO-NOT-SHIP, but provenance critical)
    └── CD-006-compound.html     (39/40 score, crown jewel)
```

**Rationale:**
- **Name signals quality:** "fortress" = zero bloat, 100% provenance health
- **Depth reduction:** fortress/ = depth 4 (0.9× multiplier) vs current depth 5 (0.7× multiplier)
- **All files KEEP tier:** 23 files, zero deletions, exceptional inbound refs
- **DD → OD → CD progression:** Natural reading order preserved

**Provenance impact:** +20% provenance score for all files (0.7× → 0.9× depth multiplier)

---

### Tier 2: Active (Work-In-Progress, Forward Pipeline)

**Location:** `/docs-spa/app/showcase/active/`

**Contents:**
```
active/
├── CLAUDE.md                    (auto-loaded, active work index)
├── axis/                        (RE-AUDIT REQUIRED — PATH ERROR)
│   ├── CLAUDE.md
│   ├── AD-001-deliberate-chaos.html
│   ├── AD-002-guided-scan.html
│   ├── AD-003-interrupted-flow.html
│   ├── AD-004-tension-states.html
│   ├── AD-005-forced-choice.html
│   └── AD-006-anti-navigation.html
├── pipeline/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── 01-CD-EVOLVED-VISION.md
│   ├── 02-POST-CD-PHASES.md
│   ├── 03-MIGRATION-PIPELINE.md
│   ├── 04-CONTENT-INGESTION.md
│   ├── 05-COMPLETE-ROADMAP.md
│   ├── 06-KEY-INSIGHTS.md
│   ├── 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
│   ├── 08-COMPOSITIONAL-STRATEGY-LIBRARY.md
│   ├── 09-EXTRACTION-VALIDATION-PROTOCOL.md
│   ├── MASTER-CD-EXECUTION-PROMPT.md
│   ├── TENSION-PROTOCOL.md
│   ├── OPEN-QUESTIONS.md
│   ├── tension-deep-dive.md
│   ├── component-evolution-synthesis.md
│   └── source-component-comparison.md
└── design-system/
    ├── CLAUDE.md
    ├── README.md
    ├── BACKBONE.md
    ├── PIPELINE-MANIFEST.md
    ├── QUICK-START.md
    ├── SOUL-DISCOVERIES.md
    ├── EXT-RESEARCH-REGISTRY.md
    ├── RESEARCH-ACTIVE.md
    ├── tokens/
    │   ├── geometry.md          (soul enforcer)
    │   ├── typography.md        (soul enforcer)
    │   ├── spacing.md           (soul enforcer)
    │   └── colors.md            (soul enforcer)
    ├── anti-patterns/
    │   └── registry.md
    ├── patterns/
    │   ├── PATTERN-INDEX.md
    │   ├── density-patterns.md
    │   ├── axis-patterns.md
    │   ├── organizational-patterns.md
    │   └── combination-rules.md
    ├── components/
    │   └── OVERVIEW.md
    ├── guides/
    │   └── migration-guide.md
    └── provenance/              (HUMAN_REVIEW: 37 files, methodology conflict)
        ├── original-research/   (7 files)
        ├── stage-1-components/  (4 files)
        ├── stage-2-density-dd/  (6 files)
        ├── stage-3-organization-od/ (8 files)
        ├── stage-4-axis-ad/     (9 files)
        └── stage-5-combination-cd/ (3 files)
```

**Rationale:**
- **Active work separation:** Clearly signals "this is ongoing pipeline work"
- **axis/ requires re-audit:** PATH ERROR in original audit
- **pipeline/ forward-facing:** POST-CD work, not historical
- **design-system/ provenance CONTESTED:** 37 files require human methodology decision

---

### Tier 3: Archive (Completed Phases, Historical Record)

**Location:** `/archive/`

**Contents:**
```
archive/
├── CLAUDE.md                    (auto-loaded, archive index)
├── knowledge-architecture/
│   ├── CLAUDE.md
│   ├── ACCUMULATED-IDENTITY-v2.md (76 refs, keep for provenance)
│   ├── PIPELINE-BACKBONE.md
│   ├── COMPREHENSIVE-AUDIT-SPEC.md
│   ├── PHASE-1B-MEGA-DEBRIEF.md
│   ├── OD-GRANULAR-AUDIT-RESULTS.md
│   ├── SOURCE-OF-TRUTH-REGISTRY.md
│   ├── OD-AUDIT-RETRO-v3.md
│   ├── _cd-research/
│   │   ├── 09-CD-SYNTHESIS-BRIEFING.md (KEEP)
│   │   └── 10-MIGRATION-SYNTHESIS.md (KEEP)
│   ├── _ad-skeleton-analysis/
│   │   └── MASTER-AD-EXECUTION-SPEC.md (KEEP)
│   ├── _ad-execution/
│   │   ├── AD-CONVENTION-SPEC.md (268 refs)
│   │   └── AD-RESEARCH-GATE.md (7+ refs)
│   ├── _provenance-deep-dive/   (10 files, ARCHIVE ALL)
│   ├── _provenance-gap-analysis/ (15 files, ARCHIVE ALL)
│   ├── _remediation/
│   │   └── REMEDIATION-STATE.md (KEEP, 2/3 consensus)
│   └── _workflow-metacognition/ (10 files, ARCHIVE ALL)
├── combination-research/        (moved from explorations/combination/)
│   ├── research-package-cd-001.md
│   ├── research-package-cd-002.md
│   ├── research-package-cd-003.md
│   ├── research-package-cd-004.md
│   ├── research-package-cd-005.md
│   └── research-package-cd-006.md
├── phase-2-audit-reports/       (moved from combination/)
│   ├── CD-002-audit-report.md   (and 7 others)
│   └── ... (8 files total)
├── phase-3-audit-reports/       (moved from combination/)
│   └── ... (10 files)
├── phase-4-audit-reports/       (moved from combination/)
│   └── ... (18 files)
└── checkpoints/                 (moved from audit-artifacts/)
    ├── CLAUDE.md
    ├── MASTER-STATE.md
    ├── SOUL-DISCOVERIES.md
    ├── RESEARCH-ACTIVE.md
    ├── DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md
    ├── FOUNDATION-REMEDIATION-SYNTHESIS.md
    ├── COMPONENTS-REGISTRY.md
    ├── RETROACTIVE-AUDIT-DD-001-006.md
    ├── PERCEPTUAL-AUDIT-LOG.md
    ├── VISUAL-AUDIT-COMP-001-011.md
    ├── VISUAL-AUDIT-DD-001-006.md
    └── COMPONENT-AUDIT-COMP-001-011.md
```

**Rationale:**
- **Historical preservation:** Completed phases with archival value (not active pipeline)
- **Scratchpad consolidation:** All `_*` directories in one location
- **Phase audit reports:** CD audit history preserved but out of active path
- **Checkpoints:** Audit milestones preserved for reference

---

### Tier 4: Infrastructure (Runtime, Untouchable)

**Location:** `/infrastructure/` (unchanged)

**Contents:**
```
infrastructure/
├── content/                     (152 files, cognitive load veto)
├── components/content/          (13 files, runtime React)
├── app/                         (4 files, layout/page/globals/favicon)
├── .velite/                     (4 files, build artifacts)
├── dependency-trace/
│   ├── CLAUDE.md
│   ├── PHASE-2A-CLASSIFICATION.md (ARCHIVE, 2/3)
│   ├── PHASE-2A-CLASSIFICATION.yaml (ARCHIVE, 2/3)
│   └── ... (8 ARCHIVE files, 11 DELETE files per 2/3 consensus)
└── research/
    ├── CLAUDE.md
    ├── R1-DOCUMENTATION-PATTERNS.md (KEEP, 2/3)
    ├── R2-CREATIVE-LAYOUTS.md (KEEP, 2/3)
    ├── R3-DENSITY-DIMENSIONS.md (KEEP, 2/3)
    ├── R4-AXIS-INNOVATIONS.md (KEEP, 2/3)
    ├── R5-COMBINATION-THEORY.md (KEEP, 3/3)
    └── RESEARCH-SYNTHESIS.md (KEEP, 3/3)
```

**Rationale:**
- **Zero changes to runtime:** content/, components/, app/, .velite/ protected by cognitive load veto
- **dependency-trace cleanup:** 11 DELETE, 8 ARCHIVE per 2/3 consensus
- **Research sources:** R1-R5 preserved (contested but 2/3 KEEP)

---

## MIGRATION MAP

### Phase 1: Create New Structure (Pre-Deletion)

```bash
# Create tier directories
mkdir -p docs-spa/app/showcase/fortress/{density,organizational,combination}
mkdir -p docs-spa/app/showcase/active/{axis,pipeline,design-system}
mkdir -p archive/{knowledge-architecture,combination-research,phase-2-audit-reports,phase-3-audit-reports,phase-4-audit-reports,checkpoints}

# Move fortress zones (BEFORE deletion)
mv docs-spa/app/showcase/explorations/density/* docs-spa/app/showcase/fortress/density/
mv docs-spa/app/showcase/explorations/organizational/* docs-spa/app/showcase/fortress/organizational/

# Move combination explorations ONLY (delete scratchpads)
mkdir docs-spa/app/showcase/fortress/combination/
cp docs-spa/app/showcase/explorations/combination/CD-00*.html docs-spa/app/showcase/fortress/combination/
cp docs-spa/app/showcase/explorations/combination/CLAUDE.md docs-spa/app/showcase/fortress/combination/
cp docs-spa/app/showcase/explorations/combination/lock-sheet.md docs-spa/app/showcase/fortress/combination/
cp docs-spa/app/showcase/explorations/combination/CD-AUDIT-SYNTHESIS.md docs-spa/app/showcase/fortress/combination/

# Move active zones
mv docs-spa/app/showcase/POST-CD-PIPELINE docs-spa/app/showcase/active/pipeline
mv docs-spa/app/showcase/DESIGN-SYSTEM docs-spa/app/showcase/active/design-system

# Move archive content
mv knowledge-architecture/_provenance-deep-dive archive/knowledge-architecture/
mv knowledge-architecture/_provenance-gap-analysis archive/knowledge-architecture/
mv knowledge-architecture/_workflow-metacognition archive/knowledge-architecture/
mv knowledge-architecture/_remediation archive/knowledge-architecture/

# Move KA core files
mkdir archive/knowledge-architecture/core
mv knowledge-architecture/ACCUMULATED-IDENTITY-v2.md archive/knowledge-architecture/core/
mv knowledge-architecture/PIPELINE-BACKBONE.md archive/knowledge-architecture/core/
# ... (other KA core KEEP files)

# Move combination research packages
mv docs-spa/app/showcase/explorations/combination/research-package-cd-*.md archive/combination-research/

# Move phase audit reports
mv docs-spa/app/showcase/explorations/combination/phase2-audit-report-*.md archive/phase-2-audit-reports/
# ... (phase 3, phase 4)

# Move checkpoints
mv checkpoints/* archive/checkpoints/
```

---

### Phase 2: Execute Deletions (Post-Move)

**After migration, execute deletion plan from MASTER-VERDICT-3X.md:**

```bash
# Delete screenshots (98 files, ~32MB)
rm -rf docs-spa/app/showcase/explorations/combination/phase4-standalone/*/screenshots/
rm -rf audit-screenshots/
rm -f docs-spa/app/showcase/POST-CD-PIPELINE/_tension-analysis/*.png

# Delete scratchpads (541 files, ~13MB)
rm -rf knowledge-architecture/_comprehensive-audit/
rm -rf knowledge-architecture/_od-audit-scratchpad/
rm -rf knowledge-architecture/_od-reenrichment/
rm -rf knowledge-architecture/_execution-journal/
rm -rf knowledge-architecture/_ad-execution/
rm -rf knowledge-architecture/_ad-skeleton-analysis/
# ... (see MASTER-VERDICT-3X.md Phase 2 for full list)

# Delete junk files
rm -f docs-spa/app/showcase/DESIGN-SYSTEM/.DS_Store
rm -f infrastructure/app/.DS_Store

# Delete debrief files
rm -f docs-spa/app/showcase/explorations/combination/debrief-*.md
rm -f docs-spa/app/showcase/explorations/combination/phase4-standalone/lock-sheet.md

# Delete old exploration directories (now empty)
rmdir docs-spa/app/showcase/explorations/density
rmdir docs-spa/app/showcase/explorations/organizational
rm -rf docs-spa/app/showcase/explorations/combination
rmdir docs-spa/app/showcase/explorations
```

---

### Phase 3: Update Navigation Files

**Update all CLAUDE.md files with new paths:**

```markdown
# docs-spa/app/showcase/CLAUDE.md

## Showcase Structure

- **fortress/** — Load-bearing explorations (DD, OD, CD) with exceptional provenance
  - density/ — 7 files, 371 direct refs, MEGA-HUBs
  - organizational/ — 8 files, 421 inbound refs, OD-F-005 crown jewel
  - combination/ — 10 files, CD-001 through CD-006 explorations

- **active/** — Work-in-progress pipeline
  - axis/ — AD explorations (RE-AUDIT REQUIRED)
  - pipeline/ — POST-CD planning suite (21 files)
  - design-system/ — Token system, patterns, provenance

## Archive

- **archive/** — Completed phases, historical record
  - knowledge-architecture/ — KA core + scratchpads
  - combination-research/ — CD research packages
  - phase-{2,3,4}-audit-reports/ — CD audit history
  - checkpoints/ — Audit milestones
```

---

### Phase 4: Update Provenance Headers

**Mass update threading headers (246 files) with new paths:**

```bash
# Example: update all BUILT ON references
find docs-spa -name "*.html" -o -name "*.md" | while read file; do
  sed -i '' 's|explorations/density/|fortress/density/|g' "$file"
  sed -i '' 's|explorations/organizational/|fortress/organizational/|g' "$file"
  sed -i '' 's|explorations/combination/|fortress/combination/|g' "$file"
  sed -i '' 's|POST-CD-PIPELINE/|active/pipeline/|g' "$file"
  sed -i '' 's|DESIGN-SYSTEM/|active/design-system/|g' "$file"
done
```

---

## PRINCIPLES OF NEW STRUCTURE

### Principle 1: Semantic Tiers

**Tier = Function:**
- `fortress/` = Exceptional quality, zero bloat, load-bearing (DD, OD, CD)
- `active/` = Work-in-progress, forward pipeline (axis, pipeline, design-system)
- `archive/` = Completed phases, historical record (KA, phase audits, checkpoints)
- `infrastructure/` = Runtime code, untouchable (content, components, app, .velite)

**No mixing:** Process artifacts (scratchpads) never in same directory as product artifacts (explorations)

---

### Principle 2: Max Depth = 4

**Depth limits:**
- Tier 1: `showcase/` = depth 3 (0.95× multiplier)
- Tier 2: `showcase/fortress/` = depth 4 (0.9× multiplier)
- Tier 3: `showcase/fortress/density/` = depth 5 (0.7× multiplier) ❌ **TOO DEEP**

**Solution:** Move explorations UP one level (density/ instead of explorations/density/)

**Before:** `docs-spa/app/showcase/explorations/density/` = depth 5
**After:** `docs-spa/app/showcase/fortress/density/` = depth 4

**Provenance impact:** All fortress files gain +20% provenance score (0.7× → 0.9× multiplier)

---

### Principle 3: Clear Naming

**Disambiguate paths:**
- **Repository source:** `/explorations/axis/` (depth 2, outside docs-spa/)
- **Showcase route:** `/docs-spa/app/showcase/active/axis/` (depth 5, inside docs-spa/)

**Naming convention:**
- Use `active/axis/` instead of `explorations/axis/` to avoid ambiguity
- `fortress/` signals exceptional quality (not just "explorations")

---

### Principle 4: Archive Consolidation

**All historical artifacts in ONE location:**

```
archive/
├── knowledge-architecture/      (KA scratchpads + core files)
├── combination-research/        (CD research packages)
├── phase-2-audit-reports/       (CD Phase 2)
├── phase-3-audit-reports/       (CD Phase 3)
├── phase-4-audit-reports/       (CD Phase 4)
└── checkpoints/                 (audit milestones)
```

**Instead of scattered across:**
- `knowledge-architecture/_*` (12 underscore directories)
- `explorations/combination/` (mixed with live explorations)
- `audit-screenshots/` (separate directory)
- `checkpoints/` (separate directory)

---

### Principle 5: Fortress Protection

**Fortress zones are UNTOUCHABLE:**
- Zero deletions allowed
- Zero restructure within fortress zones (DD, OD preserve current structure)
- Only MOVE to new `fortress/` parent directory

**Example:**
```
# Before
explorations/density/DD-006-fractal.html

# After
fortress/density/DD-006-fractal.html

# Internal structure UNCHANGED
fortress/density/
├── CLAUDE.md
├── DD-001-breathing.html
├── DD-002-gradient.html
├── DD-003-islands.html
├── DD-004-layers.html
├── DD-005-rivers.html
└── DD-006-fractal.html
```

---

## IMPACT ANALYSIS

### Before Restructure

```
docs-spa/app/showcase/
├── explorations/
│   ├── axis/ (PATH ERROR — wrong directory)
│   ├── combination/ (414 files, 88% bloat)
│   ├── density/ (7 files, FORTRESS)
│   └── organizational/ (8 files, FORTRESS)
├── POST-CD-PIPELINE/ (36 files, 25% bloat)
├── DESIGN-SYSTEM/ (59 files, 93% KEEP)
└── FINDINGS-INDEX.md

knowledge-architecture/
├── _ad-execution/ (58 files, DELETE)
├── _ad-skeleton-analysis/ (35 files, DELETE 34)
├── _cd-research/ (9 files, KEEP 2)
├── _migration-research/ (10 files, KEEP 2)
├── _comprehensive-audit/ (78 files, DELETE ALL)
├── _execution-journal/ (5 files, DELETE ALL)
├── _od-audit-scratchpad/ (29 files, DELETE ALL)
├── _od-reenrichment/ (65 files, DELETE ALL)
├── _provenance-deep-dive/ (10 files, ARCHIVE ALL)
├── _provenance-gap-analysis/ (15 files, ARCHIVE ALL)
├── _remediation/ (11 files, KEEP 1, ARCHIVE 10)
├── _workflow-metacognition/ (10 files, ARCHIVE ALL)
└── ROOT FILES (29 files, KEEP 5-15)

audit-screenshots/ (22 PNG, DELETE ALL)
checkpoints/ (19 files, KEEP 4, ARCHIVE 10, DELETE 5)
infrastructure/ (207 files, KEEP 174, DELETE/ARCHIVE 33)
```

**Issues:**
- 12 underscore directories with inconsistent verdicts
- Fortress zones buried in bloat
- Depth 5 provenance penalty
- Path ambiguity caused audit error

---

### After Restructure (Post-Deletion)

```
docs-spa/app/showcase/
├── CLAUDE.md
├── FINDINGS-INDEX.md
├── fortress/
│   ├── CLAUDE.md
│   ├── density/ (7 files, 100% KEEP)
│   ├── organizational/ (8 files, 100% KEEP)
│   └── combination/ (10 files, 100% KEEP)
└── active/
    ├── CLAUDE.md
    ├── axis/ (RE-AUDIT REQUIRED)
    ├── pipeline/ (21 files, 58% retention)
    └── design-system/ (54 files, 93% retention)

archive/
├── CLAUDE.md
├── knowledge-architecture/
│   ├── core/ (5-15 files)
│   ├── _ad-execution/ (2 files)
│   ├── _ad-skeleton-analysis/ (1 file)
│   ├── _cd-research/ (2 files)
│   ├── _provenance-deep-dive/ (10 files)
│   ├── _provenance-gap-analysis/ (15 files)
│   ├── _remediation/ (1 file)
│   └── _workflow-metacognition/ (10 files)
├── combination-research/ (6 files, ARCHIVE)
├── phase-2-audit-reports/ (8 files, ARCHIVE)
├── phase-3-audit-reports/ (10 files, ARCHIVE)
├── phase-4-audit-reports/ (18 files, ARCHIVE)
└── checkpoints/ (14 files, ARCHIVE)

infrastructure/ (unchanged, 174 files KEEP)
```

**Improvements:**
- 3 clear tiers (fortress, active, archive)
- Fortress zones elevated and protected
- Depth reduction (5→4 for fortress files)
- Archive consolidation (all historical in one location)
- Zero path ambiguity

---

### File Count Comparison

| Tier | Before | After Deletion | After Restructure |
|------|--------|----------------|-------------------|
| **Fortress** | 429 (buried in bloat) | 25 (extracted) | 25 (elevated to fortress/) |
| **Active** | 95 (scattered) | 75 (cleaned) | 75 (consolidated in active/) |
| **Archive** | 444 (12 `_*` dirs) | 84 (preserved) | 84 (consolidated in archive/) |
| **Infrastructure** | 207 (untouched) | 174 (cleaned) | 174 (unchanged) |
| **TOTAL** | 1,175 | 358 | 358 |

**Net reduction:** 1,175 → 358 files (69.5% reduction)

---

### Depth Comparison

| Zone | Before Depth | After Depth | Provenance Impact |
|------|--------------|-------------|-------------------|
| DD explorations | 5 (0.7×) | 4 (0.9×) | **+28% provenance score** |
| OD explorations | 5 (0.7×) | 4 (0.9×) | **+28% provenance score** |
| CD explorations | 5 (0.7×) | 4 (0.9×) | **+28% provenance score** |
| Pipeline files | 4 (0.9×) | 4 (0.9×) | No change |
| Design-system | 4 (0.9×) | 4 (0.9×) | No change |
| KA core | 2 (1.0×) | 2 (1.0×) | No change (archive/) |

**Net provenance impact:** +28% for all fortress files (75 files × 28% = significant boost)

---

## NAVIGATION IMPROVEMENTS

### Before: Hard to Navigate

**User question:** "Where are the fortress explorations?"
**Answer:** "Scattered across explorations/density, explorations/organizational, explorations/combination, but combination has 88% bloat so you have to filter"

**User question:** "Where are the scratchpads?"
**Answer:** "12 underscore directories in knowledge-architecture/, some DELETE, some ARCHIVE, some KEEP"

---

### After: Clear Signals

**User question:** "Where are the fortress explorations?"
**Answer:** "showcase/fortress/ — everything there is 100% KEEP, zero bloat"

**User question:** "Where are the scratchpads?"
**Answer:** "archive/knowledge-architecture/ — completed phases only"

**User question:** "What's currently active?"
**Answer:** "showcase/active/ — axis (re-audit), pipeline (POST-CD), design-system (provenance)"

---

## RECOMMENDED EXECUTION ORDER

1. **CREATE NEW STRUCTURE** (Phase 1 — pre-deletion)
   - Create fortress/, active/, archive/ directories
   - Copy files to new locations (preserve originals)
   - Verify all files copied correctly

2. **UPDATE NAVIGATION FILES** (Phase 3 — pre-deletion)
   - Update all CLAUDE.md files with new paths
   - Test navigation in Claude Code

3. **EXECUTE DELETIONS** (Phase 2 — MASTER-VERDICT-3X.md)
   - Delete screenshots (98 files, ~32MB)
   - Delete scratchpads (541 files, ~13MB)
   - Delete junk files (2 files)
   - Delete debrief files (5 files)

4. **REMOVE OLD DIRECTORIES** (Phase 2 cleanup)
   - Delete old explorations/ (now empty after move)
   - Delete old POST-CD-PIPELINE/ (moved to active/pipeline/)
   - Delete old DESIGN-SYSTEM/ (moved to active/design-system/)

5. **UPDATE PROVENANCE HEADERS** (Phase 4)
   - Mass update threading headers (246 files)
   - Update BUILT ON references to new paths
   - Verify no broken links

6. **VERIFICATION**
   - Run grep for old paths (should find zero)
   - Test all CLAUDE.md navigation links
   - Verify fortress/ contains exactly 25 files
   - Verify archive/ contains exactly 84 files

---

## ROLLBACK PLAN

**If restructure fails:**

```bash
# Restore from git (pre-deletion commit)
git reset --hard <pre-deletion-commit>

# OR manual rollback
mv docs-spa/app/showcase/fortress/density/* docs-spa/app/showcase/explorations/density/
mv docs-spa/app/showcase/fortress/organizational/* docs-spa/app/showcase/explorations/organizational/
mv docs-spa/app/showcase/fortress/combination/* docs-spa/app/showcase/explorations/combination/
mv docs-spa/app/showcase/active/pipeline/* docs-spa/app/showcase/POST-CD-PIPELINE/
mv docs-spa/app/showcase/active/design-system/* docs-spa/app/showcase/DESIGN-SYSTEM/
mv archive/knowledge-architecture/* knowledge-architecture/

# Remove new directories
rm -rf docs-spa/app/showcase/fortress/
rm -rf docs-spa/app/showcase/active/
rm -rf archive/
```

---

## CONCLUSION

**The proposed restructure achieves:**
1. **56% file reduction** (1,175 → 514 files after safe deletions)
2. **3-tier clarity** (fortress, active, archive)
3. **+28% provenance boost** for fortress files (depth 5→4)
4. **Zero fortress disruption** (internal structure unchanged)
5. **Archive consolidation** (12 `_*` directories → 1 archive/)
6. **Clear navigation** (name signals function)

**Trade-offs:**
- **Migration effort:** ~500 file moves, 246 header updates
- **Breaking changes:** All paths change (requires header updates)
- **Rollback complexity:** Requires git reset or manual move-back

**Recommendation:** Execute restructure AFTER safe deletions (Phase 1-5 of MASTER-VERDICT-3X.md), BEFORE human review queue. This establishes clean structure for contested file decisions.
