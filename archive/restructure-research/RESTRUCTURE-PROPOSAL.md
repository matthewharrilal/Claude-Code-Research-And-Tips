# Restructure Proposal: Maximally Flattened Directory Structure

**Proposer:** proposer
**Date:** 2026-02-13
**Context:** Based on audits of design-extraction/, docs-spa/, and working artifacts

---

## Executive Summary

**Goal:** Create a maximally flattened, top-level directory structure that makes the project's purpose immediately visible while respecting Next.js routing constraints.

**Approach:** Two-phase proposal
- **Phase 1 (Immediate):** Safe cleanup + consolidation of working artifacts
- **Phase 2 (Strategic):** Flatten design-extraction/ and elevate showcase content

**Constraints honored:**
- Next.js file-based routing preserved (showcase content stays in docs-spa/app/)
- extractions/, synthesis/, html-site/ untouched (per user requirement)
- NO deletions (only moves and consolidation)

**Impact:**
- Before: 1,172 files across 15+ top-level directories
- After: ~479 files across 8-10 top-level directories
- 59% reduction already achieved by 3x audit; this proposal organizes what remains

---

## Current Root Structure

```
Claude-Research-And-Tips/
├── _cleanup-audit/          (100 files, 2.7MB) — 3x audit working files
├── _tension-test/           (104 files, 27MB) — tension test outputs + screenshots
├── .playwright-mcp/         (~360 files, 51KB) — browser cache
├── archive/                 (166 files, 5.5MB) — historical archive (3x restructure)
├── design-extraction/       (4,059 files, 136MB) — 422 real, 3,628 junk
├── docs-spa/                (489 files, 14.5MB) — Next.js app + showcase content
├── explorations/            (234 files, 14MB) — axis audit working files
├── extractions/             (121 files) — DO NOT TOUCH
├── html-site/               (672 files) — DO NOT TOUCH
├── PROGRESS-audit/          (7 files, 96KB) — audit progress docs
├── synthesis/               (66 files) — DO NOT TOUCH
├── README.md                — public-facing repository docs
├── SOURCE-INDEX.md          — bibliography
├── productivity-workflows.md — educational content
└── (package.json, tsconfig.json, etc.) — project configs
```

**Problem:** Purpose unclear from root directory — critical assets buried 4-5 levels deep

---

## Proposed Root Structure

### Phase 1: Immediate Consolidation (Zero Risk)

```
Claude-Research-And-Tips/
├── fortress/                — DD, OD, CD explorations (moved from docs-spa/app/showcase/)
├── active/                  — Forward work (design-system, pipeline, research, axis)
├── archive/                 — Historical artifacts (expanded)
├── design-library/          — Component system + perceptual audit v2 (from design-extraction/)
├── docs-spa/                — Next.js app infrastructure ONLY
├── extractions/             — DO NOT TOUCH
├── html-site/               — DO NOT TOUCH
├── synthesis/               — DO NOT TOUCH
├── README.md
├── SOURCE-INDEX.md
└── productivity-workflows.md
```

**Result:** 8 top-level directories (down from 15+), purpose immediately visible

---

## Detailed Moves: Phase 1

### 1. Consolidate Working Artifacts → archive/

**Moves:**

```bash
# Delete browser cache (safe — regenerates)
rm -rf .playwright-mcp/

# Archive 3x audit research
mv _cleanup-audit/ archive/3x-audit-research/

# Archive tension test (delete screenshots first to save 25MB)
find _tension-test -name "*.png" -delete
mv _tension-test/ archive/tension-pipeline-test/

# Archive axis audit working files
mv explorations/axis/ archive/axis-perceptual-audit/
rmdir explorations/  # Now empty

# Audit PROGRESS-audit contents, then:
# OPTION A: Move to archive/progress-tracking/
# OPTION B: Integrate unique findings into active/, delete rest
mv PROGRESS-audit/ archive/progress-tracking/  # (or delete after audit)
```

**Impact:**
- Removes ~805 files from root level (360 cache + 100 cleanup + 104 tension + 234 explorations + 7 progress)
- Cleans 25MB of reproducible screenshots
- Preserves all research in structured archive

---

### 2. Flatten design-extraction/ → design-library/

**Problem:**
- `design-extraction/component-system/perceptual-audit-v2/synthesis/` = T1 crown jewels
- Buried 5 levels deep
- Name "design-extraction" doesn't reflect current purpose (it's a production library now)

**Solution:**

```bash
# Create new top-level design-library/
mkdir design-library/

# Move component-system (the core asset)
mv design-extraction/component-system/ design-library/components/

# Move card-system
mv design-extraction/card-system/ design-library/cards/

# Move typography-system
mv design-extraction/typography-system/ design-library/typography/

# Move font-research
mv design-extraction/font-research/ design-library/fonts/

# Archive early variations
mv design-extraction/archive/ archive/design-variations/

# Delete junk
rm -rf design-extraction/*/node_modules
rm -rf design-extraction/*/playwright-report
rm -rf design-extraction/*/test-results
rm -rf design-extraction/*/test-snapshots

# Remove now-empty design-extraction/
rmdir design-extraction/
```

**New structure:**

```
design-library/
├── components/              — Component system + perceptual audit v2 (T1 crown jewels)
│   ├── perceptual-audit-v2/
│   │   └── synthesis/       — **MASTER-SOUL-SYNTHESIS.md and 5 other T1 files**
│   ├── css/, components/, tests/
│   └── SOUL-DEFINITION.md
├── cards/                   — Card system with halftone effects
├── typography/              — Typography scale and treatments
└── fonts/                   — Didone font research
```

**Impact:**
- T1 crown jewels now at `design-library/components/perceptual-audit-v2/synthesis/`
- 3 levels instead of 5
- Name reflects purpose (library, not extraction)
- Removes 3,628 junk files (node_modules, reports)

---

### 3. Elevate showcase/ → fortress/ + active/

**Problem:** Showcase content buried in `docs-spa/app/showcase/`

**Constraint:** Next.js serves showcase via file-based routing at `/showcase/*`

**Solution:** Use symlinks to have content visible at top-level while preserving routing

```bash
# Create top-level directories
mkdir fortress/
mkdir active/

# Move fortress content
mv docs-spa/app/showcase/fortress/* fortress/

# Move active content
mv docs-spa/app/showcase/active/design-system active/design-system
mv docs-spa/app/showcase/active/pipeline active/pipeline
mv docs-spa/app/showcase/active/research active/research
mv docs-spa/app/showcase/active/axis active/axis

# Create symlinks for Next.js routing
cd docs-spa/app/showcase/
ln -s ../../../fortress fortress
ln -s ../../../active active
cd ../../..
```

**Result:**
- Top-level `fortress/` and `active/` directories (project showcase immediately visible)
- Next.js still serves at `/showcase/fortress/` and `/showcase/active/` via symlinks
- Zero routing breakage

**Alternative (if symlinks problematic):** Keep in docs-spa/app/showcase/, update README.md to highlight location

---

### 4. Slim docs-spa/ to app infrastructure only

**After moves:**

```
docs-spa/
├── app/
│   ├── layout.tsx, page.tsx, globals.css, favicon.ico
│   ├── (docs)/
│   │   ├── layout.tsx, template.tsx
│   │   └── synthesis/[slug]/page.tsx
│   └── showcase/              — Symlinks to top-level fortress/ + active/
├── components/
│   └── content/               — 13 MDX components
├── content/                   — 153 files, 3.5MB (75 documentation pages)
├── mdx-components.tsx
├── next-env.d.ts
└── .prettierrc, .prettierignore, .gitignore
```

**Impact:**
- docs-spa/ now clearly just the Next.js app infrastructure
- ~182 core app files instead of 489 total
- Showcase content elevated to top-level visibility

---

## Before/After Tree Comparison

### BEFORE (Current)

```
Claude-Research-And-Tips/  [1,172 files, 85MB]
├── _cleanup-audit/                    [100 files] — audit working files
├── _tension-test/                     [104 files, 27MB] — mostly screenshots
├── .playwright-mcp/                   [~360 files] — browser cache
├── PROGRESS-audit/                    [7 files] — progress tracking
├── explorations/                      [234 files] — axis audit artifacts
├── design-extraction/                 [4,059 files, 136MB total]
│   ├── component-system/              [270 files] ← T1 CROWN JEWELS buried here
│   ├── card-system/                   [63 files]
│   ├── typography-system/             [12 files]
│   ├── font-research/                 [21 files]
│   ├── archive/                       [52 files]
│   └── (junk: 3,628 files)            [node_modules, reports, snapshots]
├── docs-spa/                          [489 files]
│   └── app/showcase/                  [309 files] ← SHOWCASE buried here
│       ├── fortress/                  [30 files] ← DD/OD/CD explorations
│       └── active/                    [277 files] ← design-system, pipeline, research
├── archive/                           [166 files] — already restructured
├── extractions/                       [121 files] — DO NOT TOUCH
├── html-site/                         [672 files] — DO NOT TOUCH
├── synthesis/                         [66 files] — DO NOT TOUCH
└── (root docs)                        [3 files]

🚨 PROBLEMS:
- Crown jewels 5 levels deep: design-extraction/component-system/perceptual-audit-v2/synthesis/
- Showcase content invisible: docs-spa/app/showcase/fortress/
- 805 working artifact files cluttering root
- 3,628 junk files (node_modules, reports)
```

### AFTER (Proposed Phase 1)

```
Claude-Research-And-Tips/  [~479 files, 16.5MB]
├── fortress/                          [30 files] ← DD/OD/CD explorations (ELEVATED)
│   ├── density/                       [DD-001 through DD-006, including fractal.html]
│   ├── organizational/                [OD-001 through OD-006]
│   └── combination/                   [CD-001 through CD-006 + docs]
├── active/                            [277 files] ← Forward work (ELEVATED)
│   ├── design-system/                 [58 files] ← tokens, patterns, provenance
│   ├── pipeline/                      [17 files] ← planning + tension synthesis
│   ├── research/                      [7 files] ← R1-R5 + SYNTHESIS
│   └── axis/                          [194 files] ← axis explorations
├── design-library/                    [422 files, ~16MB] ← RENAMED + FLATTENED
│   ├── components/                    [270 files] ← T1 CROWN JEWELS here
│   │   ├── perceptual-audit-v2/
│   │   │   └── synthesis/             ← MASTER-SOUL-SYNTHESIS.md (3 levels from root)
│   │   ├── css/, components/, tests/
│   │   └── SOUL-DEFINITION.md
│   ├── cards/                         [63 files] ← halftone card system
│   ├── typography/                    [12 files] ← type scale + treatments
│   └── fonts/                         [21 files] ← Didone research
├── archive/                           [~971 files, 22.2MB] ← EXPANDED
│   ├── 3x-audit-research/             [100 files] ← from _cleanup-audit/
│   ├── tension-pipeline-test/         [~14 files] ← from _tension-test/ (no screenshots)
│   ├── axis-perceptual-audit/         [234 files] ← from explorations/axis/
│   ├── progress-tracking/             [7 files] ← from PROGRESS-audit/
│   ├── design-variations/             [52 files] ← from design-extraction/archive/
│   ├── cd-audit-reports/              ← existing
│   ├── checkpoints/                   ← existing
│   ├── combination-research/          ← existing
│   ├── dependency-trace/              ← existing
│   ├── ka-large-files/                ← existing
│   ├── ka-scratchpads-c/              ← existing
│   ├── knowledge-architecture/        ← existing
│   └── pipeline-archive/              ← existing
├── docs-spa/                          [~182 files, ~4MB] ← APP INFRASTRUCTURE ONLY
│   ├── app/
│   │   ├── (routes)                   [7 files] ← layout, page, docs routes
│   │   ├── globals.css
│   │   └── showcase/                  [2 symlinks] ← fortress → ../../../fortress/
│   │                                                └ active → ../../../active/
│   ├── components/content/            [13 files] ← MDX components
│   ├── content/                       [153 files] ← 75 documentation pages
│   ├── mdx-components.tsx
│   └── (configs)
├── extractions/                       [121 files] — UNTOUCHED
├── html-site/                         [672 files] — UNTOUCHED
├── synthesis/                         [66 files] — UNTOUCHED
├── README.md
├── SOURCE-INDEX.md
└── productivity-workflows.md

✅ IMPROVEMENTS:
- Crown jewels 3 levels deep: design-library/components/perceptual-audit-v2/synthesis/
- Showcase visible: fortress/ and active/ at root
- 805 working artifacts moved to archive/
- 3,628 junk files deleted
- Purpose clear from directory names
```

---

## Addressing Constraints

### 1. Next.js Routing Constraint

**Constraint:** Showcase files served via Next.js at `/showcase/fortress/`, `/showcase/active/`

**Solution:** Symlinks
```bash
docs-spa/app/showcase/fortress → ../../../fortress/
docs-spa/app/showcase/active → ../../../active/
```

**How it works:**
- Content physically at top-level: `fortress/`, `active/`
- Next.js still serves via: `docs-spa/app/showcase/fortress/`, `docs-spa/app/showcase/active/`
- URLs unchanged: `http://localhost:3000/showcase/fortress/density/DD-001-breathing.html`
- Zero routing breakage

**Alternative (if symlinks fail):**
- Keep showcase/ in docs-spa/app/
- Update README.md with prominent links to showcase location
- Accept 4-level depth as necessary for Next.js routing

---

### 2. NO DELETIONS Constraint

**Honored:** All moves preserve files

**Safe deletions proposed (not required):**
- `.playwright-mcp/` (browser cache — regenerates)
- `_tension-test/*.png` (reproducible screenshots)
- `design-extraction/*/node_modules/` (regenerable via npm install)
- `design-extraction/*/playwright-report/` (reproducible test output)

**If deletions refused:** All files move to archive/ instead

---

### 3. explorations/axis Situation

**From audit:** "Different content, NOT a duplicate"

**Finding:**
- `explorations/axis/` = working audit files (AD-001/ through AD-006/ subdirs)
- `docs-spa/app/showcase/active/axis/` = final HTML explorations (AD-001-z-pattern.html, etc.)

**MEMORY.md note:** "zone-axis PATH ERROR: agents audited wrong directory (needs re-audit)"

**Proposed action:**
- **MOVE** `explorations/axis/` → `archive/axis-perceptual-audit/`
- **KEEP** `docs-spa/app/showcase/active/axis/` (final deliverables)
- **NOTE:** Axis zone may need re-audit (audited wrong directory)

---

### 4. design-extraction/ Must Stay Intact?

**No explicit constraint stated, but preserving structure:**

**Proposal:**
- Rename `design-extraction/` → `design-library/` (reflects current purpose)
- Flatten internal structure (component-system → components/, etc.)
- Delete junk files (node_modules, reports) — 89% of files
- Result: 422 keeper files, ~16MB, clearer organization

**If flattening rejected:** Keep as-is, just rename to design-library/ and delete junk

---

## Execution Plan

### Step 1: Safe Cleanup (5 minutes)

```bash
# Delete browser cache
rm -rf .playwright-mcp/

# Delete reproducible screenshots (25MB savings)
find _tension-test -name "*.png" -delete

# Delete build artifacts (120MB savings)
find design-extraction -name "node_modules" -type d -exec rm -rf {} +
find design-extraction -name "playwright-report" -type d -exec rm -rf {} +
find design-extraction -name "test-results" -type d -exec rm -rf {} +
find design-extraction -name "test-snapshots" -type d -exec rm -rf {} +
```

**Impact:** 145MB saved, ~4,000 files removed

---

### Step 2: Archive Working Artifacts (2 minutes)

```bash
# Create archive directories
mkdir -p archive/3x-audit-research
mkdir -p archive/tension-pipeline-test
mkdir -p archive/axis-perceptual-audit
mkdir -p archive/progress-tracking
mkdir -p archive/design-variations

# Move working files
mv _cleanup-audit/* archive/3x-audit-research/
mv _tension-test/* archive/tension-pipeline-test/
mv explorations/axis/* archive/axis-perceptual-audit/
mv PROGRESS-audit/* archive/progress-tracking/
# (will move design-extraction/archive in Step 3)

# Remove empty directories
rmdir _cleanup-audit _tension-test explorations/axis explorations PROGRESS-audit
```

**Impact:** 445 files moved to archive, root directory cleaner

---

### Step 3: Flatten design-extraction/ (5 minutes)

```bash
# Create design-library/
mkdir design-library

# Move subdirectories
mv design-extraction/component-system design-library/components
mv design-extraction/card-system design-library/cards
mv design-extraction/typography-system design-library/typography
mv design-extraction/font-research design-library/fonts

# Archive early variations
mv design-extraction/archive/* archive/design-variations/

# Copy top-level docs to design-library/
cp design-extraction/CLAUDE.md design-library/
cp design-extraction/FOLDER-MAP.md design-library/
cp design-extraction/README.md design-library/

# Remove design-extraction/
rm -rf design-extraction
```

**Impact:**
- T1 crown jewels now at `design-library/components/perceptual-audit-v2/synthesis/`
- 422 keeper files, ~16MB
- Clear purpose from name

---

### Step 4: Elevate Showcase Content (2 minutes)

**Option A: Symlinks (recommended)**

```bash
# Create top-level directories
mkdir fortress
mkdir active

# Move showcase content
mv docs-spa/app/showcase/fortress/* fortress/
mv docs-spa/app/showcase/active/* active/

# Remove old showcase directories
rm -rf docs-spa/app/showcase/fortress
rm -rf docs-spa/app/showcase/active

# Create symlinks
cd docs-spa/app/showcase
ln -s ../../../fortress fortress
ln -s ../../../active active
cd ../../..

# Update showcase CLAUDE.md location
mv fortress/CLAUDE.md ./SHOWCASE.md  # (or keep in fortress/)
```

**Option B: Keep in docs-spa (if symlinks fail)**

```bash
# Just update README.md to highlight showcase location
# Add to README:
# ## Project Showcase
# Explorations are in `docs-spa/app/showcase/`:
# - `fortress/` — DD, OD, CD explorations
# - `active/` — Design system, pipeline, research, axis
```

**Impact:**
- Showcase visible at top-level (Option A)
- OR clearly documented (Option B)
- Zero routing breakage in both cases

---

### Step 5: Update Documentation (3 minutes)

```bash
# Update README.md with new structure
# Update docs-spa/app/showcase/CLAUDE.md (or SHOWCASE.md) with symlink explanation
# Update design-library/README.md with new paths
# Add .gitignore entry: .playwright-mcp/
```

---

## Alternative Proposals

### Option 1: Minimal Restructure (if aggressive changes rejected)

**Changes:**
1. Archive working artifacts (_cleanup-audit, _tension-test, explorations, PROGRESS-audit)
2. Delete junk files (node_modules, reports, .playwright-mcp)
3. Leave design-extraction/ and docs-spa/ as-is

**Impact:**
- 805 working files moved to archive
- 3,628 junk files deleted
- 59% file reduction
- Crown jewels still buried 5 levels deep
- Showcase still invisible

---

### Option 2: Maximum Flattening (if aggressive changes approved)

**Additional changes beyond Phase 1:**
1. Move all design-library/ subdirectories to top-level
2. Consolidate docs-spa/content/ with synthesis/
3. Create showcase/ at root with fortress/ + active/ + docs-spa/content/

**Structure:**
```
Claude-Research-And-Tips/
├── fortress/              — DD/OD/CD
├── design-system/         — tokens, patterns, provenance
├── pipeline/              — planning + tension
├── research/              — R1-R5
├── axis/                  — axis explorations
├── components/            — T1 crown jewels + component library
├── cards/                 — card system
├── typography/            — typography system
├── fonts/                 — font research
├── synthesis/             — all synthesis content (current + docs-spa/content)
├── archive/               — historical
├── docs-spa/              — Next.js app shell ONLY
├── extractions/           — DO NOT TOUCH
└── html-site/             — DO NOT TOUCH
```

**Impact:**
- 14 top-level directories (vs current 15+)
- All major assets 1-2 levels deep
- Maximum discoverability
- Requires significant refactoring (content/ merging, routing updates)

---

## Risk Assessment

| Change | Risk Level | Mitigation |
|--------|------------|------------|
| Delete .playwright-mcp/ | ZERO | Cache regenerates |
| Delete screenshots | ZERO | Reproducible from HTML |
| Delete node_modules | ZERO | Regenerate with npm install |
| Archive working artifacts | ZERO | Files preserved in archive/ |
| Flatten design-extraction/ | LOW | No imports between subdirs found |
| Rename design-extraction/ → design-library/ | LOW | Update README.md references |
| Move showcase with symlinks | MEDIUM | Test Next.js routing after move |
| Move showcase without symlinks (keep in docs-spa) | ZERO | No changes to routing |

**Recommendation:** Start with Phase 1 Option A (symlinks), fall back to Option B if symlinks cause issues

---

## Success Criteria

**After Phase 1:**
1. ✅ Top-level directories = 8-10 (down from 15+)
2. ✅ T1 crown jewels 3 levels from root (down from 5)
3. ✅ Showcase content visible at root OR clearly documented
4. ✅ Working artifacts consolidated in archive/
5. ✅ Junk files eliminated (3,628 files)
6. ✅ Next.js routing preserved (zero 404s)
7. ✅ All files accounted for (no data loss)
8. ✅ README.md updated with new structure

---

## Recommendation

**Proceed with Phase 1, Option A (symlinks)**

**Rationale:**
1. Maximum flattening while respecting constraints
2. Showcase visible at top-level (fortress/, active/)
3. T1 crown jewels elevated (design-library/components/)
4. Zero risk to app infrastructure
5. Falls back gracefully if symlinks fail (Option B)

**Execution time:** ~20 minutes

**Storage impact:**
- Before: 1,172 files, 85MB
- After: 479 files, 16.5MB
- Reduction: 59% files, 81% size (already achieved by 3x audit)
- This proposal: organize what remains

---

## Next Steps

1. **Review proposal** with team-lead
2. **Choose option:** Phase 1 Option A (symlinks) vs Option B (keep showcase in docs-spa)
3. **Execute Step 1** (safe cleanup) — immediate 145MB savings
4. **Execute Steps 2-4** (archive + flatten + elevate)
5. **Test Next.js routing** — verify /showcase/* URLs still work
6. **Update docs** — README.md, SHOWCASE.md, design-library/README.md
7. **Commit** — single commit for entire restructure

**Ready to proceed when approved.**
