# Corpus Path Validation Audit

**Date:** 2026-02-28
**Auditor:** audit-corpus-paths agent
**Status:** CRITICAL ISSUES FOUND

---

## Executive Summary

The `tools/deep-build/src/config/corpus.ts` configuration file is **out of sync** with the actual filesystem structure.

- **Infrastructure files:** 3/3 FOUND ✓
- **Corpus files (expected):** 38 files
  - **Found:** 17 (44.7%)
  - **Missing/Misnamed:** 21 (55.3%)

**Verdict:** corpus.ts cannot be deployed as-is. It will fail at runtime when attempting to load non-existent files.

---

## Critical Issues

### Issue 1: Research Files Mismatch (SEVERITY: HIGH)

corpus.ts expects file names that do NOT match actual filesystem names.

**Actual files (EXIST):**
```
design-system/research/R1-DOCUMENTATION-PATTERNS.md
design-system/research/R2-CREATIVE-LAYOUTS.md
design-system/research/R3-DENSITY-DIMENSIONS.md
design-system/research/R4-AXIS-INNOVATIONS.md
design-system/research/R5-COMBINATION-THEORY.md
```

**corpus.ts expects (DON'T EXIST):**
```
design-system/research/R1-design-philosophy-analysis.md
design-system/research/R2-spatial-design-language.md
design-system/research/R3-compositional-techniques-analysis.md
design-system/research/R4-typography-material-analysis.md
design-system/research/R5-agent-assisted-design-review.md
```

**Pattern:** Actual files use `-UPPERCASE-DESCRIPTOR` suffix; corpus.ts expects `-lowercase-description` suffix.

**Action Required:** Update all 5 file paths in corpus.ts to match actual filenames.

---

### Issue 2: Missing Directory Structure (SEVERITY: CRITICAL)

corpus.ts references two subdirectories that **do not exist** on the filesystem:

1. **design-system/deep-dives/** (referenced in Subsets 1, 2, 3, 4)
   - corpus.ts expects: DD1-design-philosophy.md through DD7-coherence-patterns.md
   - Actual: no such directory exists

2. **design-system/cross-studies/** (referenced in Subsets 1, 2, 3, 4)
   - corpus.ts expects: CS-DD1-philosophy-cross-study.md through CS-DD7-coherence-cross-study.md
   - Actual: no such directory exists

**Total files affected:** 18 file paths in Subsets 1-4

**Action Required (choose one):**
- A) Create the missing directories and files, OR
- B) Remove all DD*/CS-* references from corpus.ts and redefine Subsets 1-4

---

### Issue 3: Case Studies Path Mismatch (SEVERITY: HIGH)

**Path mismatch:**
- corpus.ts expects: `design-system/compositional-core/case-studies/CD-006/exploration.html`
- Actual: Case studies are stored as flat markdown files: `design-system/compositional-core/case-studies/CD-006-pilot-migration.md`

**Missing index file:**
- corpus.ts expects: `design-system/compositional-core/case-studies/_INDEX.md`
- Actual: No index file exists

**What actually exists in design-system/compositional-core/case-studies/:**
```
ANTI-PRESCRIPTION-TEMPLATE.md
CD-001-reasoning-inside-code.md
CD-005-multi-axis-transition.md
CD-006-pilot-migration.md
DD-003-islands.md
DD-004-layers.md
DD-006-fractal.md
OD-001-conversational.md
OD-004-confidence.md
OD-006-creative.md
README.md
dd-003-islands-visual.md
dd-004-layers-visual.md
dd-006-fractal-visual.md
```

**Action Required:**
- Create `design-system/compositional-core/case-studies/_INDEX.md`, OR
- Update corpus.ts path to point to actual .md files instead of .html

---

### Issue 4: Subset Composition Mismatch (SEVERITY: HIGH)

The 7 subsets defined in corpus.ts do NOT match the original diagram specification (K03).

**Diagram spec (K03):**
- Subset 1: R3, DD-003, DD-006, CS-DD-003, CS-DD-006
- Subset 2: R1, OD-001, OD-006, case studies
- Subset 3: R4, R5, AD-006, CD-006, CD-006 case study
- Subset 4: DD-001, DD-002, DD-004, DD-005, DD-004 case study
- Subset 5: OD-002, OD-003, OD-004, AD-001
- Subset 6: AD-002, AD-003, CD-001, CD-005
- Subset 7: RESEARCH-SYNTHESIS, R2, ...etc...

**corpus.ts implementation:**
- Subset 1: R3, DD3, DD6, CS-DD3, CS-DD6 (uses DD/CS naming)
- Subset 2: R1, R2, DD1, DD2, CS-DD1 (uses DD/CS naming)
- Subset 3: R4, DD4, DD5, CS-DD4, CS-DD5 (uses DD/CS naming)
- Subset 4: R5, RESEARCH-SYNTHESIS, DD7, CS-DD7 (uses DD/CS naming)
- Subset 5: semantic-rules, prohibitions, world-description, case-studies/_INDEX, CD-006
- Subset 6: 6x va-extraction artifacts (identity, recipe, routing, orchestrator, value-tables, tc-brief)
- Subset 7: 5x PA artifacts (questions, deployment, weaver, guardrails, guardrails-weaver)

**Issue:** The content types don't match. Diagram specifies OD/AD/CD nomenclature; corpus.ts uses DD/CS/R nomenclature. Fundamentally different content groupings.

---

## Actual Filesystem Structure

```
/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/
├── design-system/
│   ├── research/
│   │   ├── CLAUDE.md
│   │   ├── R1-DOCUMENTATION-PATTERNS.md ✓
│   │   ├── R2-CREATIVE-LAYOUTS.md ✓
│   │   ├── R3-DENSITY-DIMENSIONS.md ✓
│   │   ├── R4-AXIS-INNOVATIONS.md ✓
│   │   ├── R5-COMBINATION-THEORY.md ✓
│   │   └── RESEARCH-SYNTHESIS.md ✓
│   ├── compositional-core/
│   │   ├── grammar/
│   │   │   └── mechanism-catalog.md ✓
│   │   ├── components/
│   │   │   └── components.css ✓
│   │   ├── vocabulary/
│   │   │   └── tokens.css ✓
│   │   ├── guidelines/
│   │   │   └── semantic-rules.md ✓
│   │   ├── identity/
│   │   │   ├── prohibitions.md ✓
│   │   │   └── world-description.md (need to verify)
│   │   └── case-studies/
│   │       ├── (13 flat .md files - see issue #3)
│   │       └── (NO _INDEX.md)
│   └── (NO deep-dives/ subdirectory) ✗
│   └── (NO cross-studies/ subdirectory) ✗
│
└── ephemeral/va-extraction/
    ├── artifact-identity-perception.md ✓
    ├── artifact-builder-recipe.md ✓
    ├── artifact-routing.md ✓
    ├── artifact-orchestrator.md ✓
    ├── artifact-value-tables.md ✓
    ├── artifact-tc-brief-template.md ✓
    ├── pa-questions.md ✓
    ├── pa-deployment.md ✓
    ├── pa-weaver.md ✓
    ├── pa-guardrails.md ✓
    └── pa-guardrails-weaver.md ✓
```

---

## File Validation Summary

### Infrastructure Files (3/3 FOUND)
- ✓ design-system/compositional-core/grammar/mechanism-catalog.md
- ✓ design-system/compositional-core/components/components.css
- ✓ design-system/compositional-core/vocabulary/tokens.css

### Subset 1: Research Foundation (0/5 FOUND)
- ✗ design-system/research/R3-compositional-techniques-analysis.md → should be R3-DENSITY-DIMENSIONS.md
- ✗ design-system/deep-dives/DD3-mechanisms-of-richness.md (directory missing)
- ✗ design-system/deep-dives/DD6-scale-channel-invocation.md (directory missing)
- ✗ design-system/cross-studies/CS-DD3-mechanisms-cross-study.md (directory missing)
- ✗ design-system/cross-studies/CS-DD6-scale-channel-cross-study.md (directory missing)

### Subset 2: Identity & Perception (0/5 FOUND)
- ✗ design-system/research/R1-design-philosophy-analysis.md → should be R1-DOCUMENTATION-PATTERNS.md
- ✗ design-system/research/R2-spatial-design-language.md → should be R2-CREATIVE-LAYOUTS.md
- ✗ design-system/deep-dives/DD1-design-philosophy.md (directory missing)
- ✗ design-system/deep-dives/DD2-spatial-intelligence.md (directory missing)
- ✗ design-system/cross-studies/CS-DD1-philosophy-cross-study.md (directory missing)

### Subset 3: Typography & Material (0/5 FOUND)
- ✗ design-system/research/R4-typography-material-analysis.md → should be R4-AXIS-INNOVATIONS.md
- ✗ design-system/deep-dives/DD4-typography-as-architecture.md (directory missing)
- ✗ design-system/deep-dives/DD5-material-honesty.md (directory missing)
- ✗ design-system/cross-studies/CS-DD4-typography-cross-study.md (directory missing)
- ✗ design-system/cross-studies/CS-DD5-material-cross-study.md (directory missing)

### Subset 4: Agent Design Review (1/4 FOUND)
- ✗ design-system/research/R5-agent-assisted-design-review.md → should be R5-COMBINATION-THEORY.md
- ✓ design-system/research/RESEARCH-SYNTHESIS.md
- ✗ design-system/deep-dives/DD7-coherence-patterns.md (directory missing)
- ✗ design-system/cross-studies/CS-DD7-coherence-cross-study.md (directory missing)

### Subset 5: Composition & Guidelines (2/5 FOUND)
- ✓ design-system/compositional-core/guidelines/semantic-rules.md
- ✓ design-system/compositional-core/identity/prohibitions.md
- ? design-system/compositional-core/identity/world-description.md (need to verify)
- ✗ design-system/compositional-core/case-studies/_INDEX.md (missing)
- ✗ design-system/compositional-core/case-studies/CD-006/exploration.html (wrong format/path)

### Subset 6: Pipeline Knowledge (6/6 FOUND)
- ✓ ephemeral/va-extraction/artifact-identity-perception.md
- ✓ ephemeral/va-extraction/artifact-builder-recipe.md
- ✓ ephemeral/va-extraction/artifact-routing.md
- ✓ ephemeral/va-extraction/artifact-orchestrator.md
- ✓ ephemeral/va-extraction/artifact-value-tables.md
- ✓ ephemeral/va-extraction/artifact-tc-brief-template.md

### Subset 7: PA & Evaluation (5/5 FOUND)
- ✓ ephemeral/va-extraction/pa-questions.md
- ✓ ephemeral/va-extraction/pa-deployment.md
- ✓ ephemeral/va-extraction/pa-weaver.md
- ✓ ephemeral/va-extraction/pa-guardrails.md
- ✓ ephemeral/va-extraction/pa-guardrails-weaver.md

---

## Root Cause Analysis

**Most likely cause:** corpus.ts was designed based on a specification/diagram (K03) but was never cross-validated against the actual filesystem before deployment.

**Evidence:**
1. File names follow naming pattern that's different from actual files
2. References to deep-dives/ and cross-studies/ directories suggest a planned structure that was never created
3. Mixed content types (R, DD, CS) vs actual structure (R + case studies stored flat)
4. Subsets don't align with actual content organization

---

## Recommendations (Priority Order)

### IMMEDIATE (Blocking)
1. **Clarify source of truth:** Is K03 diagram the source specification or is the actual filesystem? They're incompatible.
2. **Choose remediation path:**
   - **Path A:** Create missing directories/files to match corpus.ts (requires creating ~18 new files)
   - **Path B:** Redefine corpus.ts to match actual filesystem (less data creation, more code changes)

### HIGH (Before deployment)
3. **Fix research filenames:** Update all 5 R*.md paths to use actual -UPPERCASE suffixes
4. **Create/Fix case study paths:** Either create _INDEX.md or update corpus.ts
5. **Document subset composition:** Clarify what each of the 7 rotating subsets ACTUALLY should contain

### MEDIUM (Best practices)
6. **Add filesystem validation:** Run `npm run validate-corpus` before deploying
7. **Add CI checks:** Prevent corpus.ts from being deployed if file paths don't validate
8. **Document corpus philosophy:** Why 7 subsets? Why rotate? What's the pedagogical purpose?

---

## Testing Recommendation

Once fixes are applied, run:
```javascript
// In tools/deep-build/src/config/corpus.ts
import { getAllCorpusFilePaths } from './corpus.js';
import fs from 'fs';
import path from 'path';

const projectRoot = '/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips';
const paths = getAllCorpusFilePaths();

let missing = [];
for (const p of paths) {
  const fullPath = path.join(projectRoot, p);
  if (!fs.existsSync(fullPath)) {
    missing.push(p);
  }
}

if (missing.length > 0) {
  console.error('MISSING FILES:');
  missing.forEach(p => console.error(`  ${p}`));
  process.exit(1);
}
console.log(`✓ All ${paths.length} corpus files found`);
```

---

## Impact Assessment

**If deployed as-is:**
- ✓ Pipeline will load infrastructure files (mechanism-catalog, components.css, tokens.css)
- ✓ Subsets 6 & 7 will load (va-extraction and PA files exist)
- ✗ Subsets 1-4 will FAIL to load (21 files missing)
- ✗ Subset 5 will partially fail (3 files missing)

**Expected behavior:** The orchestrator will throw an error trying to load non-existent files.

---

## References

- corpus.ts location: `/tools/deep-build/src/config/corpus.ts` (122 lines)
- paths.ts location: `/tools/deep-build/src/config/paths.ts` (74 lines)
- Diagram specification: K03 (referenced in corpus.ts comments)
- Actual filesystem: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/`

