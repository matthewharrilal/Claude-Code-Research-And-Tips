# PROJECT STRUCTURE PROPOSAL — CODEBASE CLEANUP

**Analyzer:** structure-analyzer
**Date:** 2026-02-13
**Scope:** Full repository restructuring based on 8 zone audits + 8 adversarial challenges
**Files Analyzed:** ~2,300 across 19 reports

---

## EXECUTIVE SUMMARY

**CURRENT PAIN POINTS:**
1. **Excessive nesting** — DESIGN-SYSTEM buried 4 levels deep (`docs-spa/app/showcase/DESIGN-SYSTEM/`)
2. **SPA framework tax** — 3 levels of Next.js structure (`docs-spa/app/showcase/`) for docs that may not need the SPA
3. **Crown jewels hidden** — T1 synthesis at `design-extraction/component-system/perceptual-audit-v2/synthesis/`
4. **Root-level debris** — 580+ files in root folders (PROGRESS-audit, _tension-test, explorations/axis) awaiting cleanup

**PROPOSED SOLUTION:**
- **Flatten to 2-level max** for active content
- **Promote crown jewels** to top-level visibility
- **Group by purpose** (production vs research vs archive)
- **Preserve all provenance** through header migration strategy

**IMPACT:** 580+ files removed from root, 3 levels of nesting eliminated, T1 synthesis at `/design-system/foundation/`

---

## CURRENT STATE ANALYSIS

### File Distribution (from zone reports)

| Zone | Files | Status | Issues |
|------|-------|--------|--------|
| **design-extraction/** | ~250 | Active (T1 authority) | T1 buried 5 levels deep |
| **docs-spa/app/showcase/** | ~1,170 | Active (provenance chain) | 4 levels deep, SPA tax |
| **Root (PROGRESS-audit, _tension-test, axis)** | 580 | Debris | 96% DELETE recommended |
| **archive/** | 54 | Dangerous tokens | 98% DELETE recommended |
| **node_modules/** (3 locations) | ~40 | Junk | 100% DELETE |

**TOTAL SOURCE FILES:** ~910 (per Phase 2A classification)
**TOTAL JUNK:** ~670 files (root debris + archive + node_modules)

### Current Nesting Examples

**Design System (4 levels):**
```
docs-spa/app/showcase/DESIGN-SYSTEM/
```

**T1 Synthesis (5 levels):**
```
design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md
```

**Explorations (3 levels):**
```
docs-spa/app/showcase/explorations/density/DD-001.html
```

**Knowledge Architecture (3 levels):**
```
docs-spa/app/showcase/knowledge-architecture/OD-GRANULAR-AUDIT-RESULTS.md
```

---

## PROPOSED STRUCTURE

### Principle: **Purpose-Based Grouping at Top Level**

```
/
├── design-system/          ← PROMOTED (was docs-spa/app/showcase/DESIGN-SYSTEM/)
│   ├── foundation/         ← T1 synthesis promoted here
│   ├── tokens/
│   ├── patterns/
│   ├── anti-patterns/
│   └── provenance/
│
├── explorations/           ← CONSOLIDATED (keep only showcase versions)
│   ├── density/            ← DD-001 through DD-006
│   ├── organizational/     ← OD-001 through OD-006
│   ├── axis/               ← AD-001 through AD-006
│   └── combination/        ← CD-001 through CD-006
│
├── research/               ← CONSOLIDATED
│   ├── pipeline/           ← was knowledge-architecture/, POST-CD-PIPELINE/
│   ├── findings/           ← R1-R5 + RESEARCH-SYNTHESIS + FINDINGS-INDEX
│   ├── workflows/          ← WORKFLOW-METACOGNITION + productivity-workflows.md
│   └── _archives/          ← 12 underscore dirs from knowledge-architecture/
│
├── checkpoints/            ← KEPT (operational tracking)
├── dependency-trace/       ← KEPT (Phase 2A evidence)
├── README.md               ← KEPT (entry point)
├── SOURCE-INDEX.md         ← KEPT (bibliography)
│
└── archive/                ← EXPANDED
    ├── design-extraction/  ← Move superseded content here
    ├── root-debris/        ← 12 files from PROGRESS-audit/_tension-test/axis
    └── migration-history/  ← Document the restructuring
```

---

## DETAILED MIGRATION PLAN

### Phase 1: ROOT CLEANUP (580 files → 12 archived, 568 deleted)

**DELETE ENTIRELY:**
- `/PROGRESS-audit/` (5/7 files) — unintegrated research
- `/_tension-test/` (100/104 files) — skill integration complete
- `/explorations/axis/` (230/233 files) — superseded by showcase

**ARCHIVE (12 files):**
```
archive/root-debris-2026-02-13/
├── PROGRESS-audit/
│   ├── design-system-inventory.md  ← Type scale research
│   └── library-research.md         ← Testing methodology
├── tension-test/
│   ├── playbook-metaphor-4-elevation-map.html
│   ├── boris-metaphor-2-geological-core.html
│   ├── audit-boris.md
│   └── visual-verification-report.md
└── axis-explorations/
    ├── lock-sheet.md
    ├── provenance-synthesis.md
    └── AD-006-compound.html
```

**IMPACT:** 568 files deleted (98%), 12 archived (2%)

---

### Phase 2: PROMOTE DESIGN SYSTEM (4→1 level)

**FROM:**
```
docs-spa/app/showcase/DESIGN-SYSTEM/
```

**TO:**
```
/design-system/
```

**RATIONALE:**
- Crown jewel of project (hub document per graph scan)
- No SPA runtime needed (static documentation)
- Most-referenced folder (15+ inbound refs to PIPELINE-MANIFEST alone)
- Public-facing authority

**MOVES (58 files):**
- `DESIGN-SYSTEM/README.md` → `/design-system/README.md`
- `DESIGN-SYSTEM/BACKBONE.md` → `/design-system/BACKBONE.md`
- `DESIGN-SYSTEM/tokens/` → `/design-system/tokens/`
- `DESIGN-SYSTEM/provenance/` → `/design-system/provenance/`

**HEADER UPDATES:** 58 files need path updates in INLINE THREADING HEADER

---

### Phase 3: PROMOTE T1 SYNTHESIS (5→2 levels)

**FROM:**
```
design-extraction/component-system/perceptual-audit-v2/synthesis/
```

**TO:**
```
/design-system/foundation/
```

**RATIONALE:**
- T1 = highest authority tier (per Phase 2A classification)
- 6 crown jewel files (MASTER-SOUL-SYNTHESIS, DESIGN-TOKEN-SUMMARY, CHARACTER-FAMILY-COMPLETE, etc.)
- 18+ inbound refs per file (hub documents)
- Foundation of entire pipeline

**MOVES (6 files):**
- `MASTER-SOUL-SYNTHESIS.md` → `/design-system/foundation/MASTER-SOUL-SYNTHESIS.md`
- `DESIGN-TOKEN-SUMMARY.md` → `/design-system/foundation/DESIGN-TOKEN-SUMMARY.md`
- `CHARACTER-FAMILY-COMPLETE.md` → `/design-system/foundation/CHARACTER-FAMILY-COMPLETE.md`
- `ANTI-PATTERNS-REGISTRY.md` → `/design-system/foundation/ANTI-PATTERNS-REGISTRY.md`
- `PRODUCTION-RULES.md` → `/design-system/foundation/PRODUCTION-RULES.md`
- `CONSISTENCY-VERIFICATION.md` → `/design-system/foundation/CONSISTENCY-VERIFICATION.md`

**IMPACT:** T1 synthesis now at `/design-system/foundation/` (2 levels)

**HEADER UPDATES:** 6 files + 27 consumers (CHARACTER-FAMILY-COMPLETE has 52 occurrences)

---

### Phase 4: CONSOLIDATE RESEARCH (3 locations → 1)

**FROM:**
- `docs-spa/app/showcase/knowledge-architecture/` (319 .md files)
- `docs-spa/app/showcase/POST-CD-PIPELINE/` (36 files)
- `docs-spa/app/showcase/research/` (7 files)

**TO:**
```
/research/
├── pipeline/
│   ├── POST-CD-PIPELINE/          ← Move here (36 files)
│   ├── ACCUMULATED-IDENTITY-v2.md
│   ├── OD-GRANULAR-AUDIT-RESULTS.md
│   ├── WORKFLOW-METACOGNITION-ANALYSIS.md
│   └── provenance/                ← Handoff docs, remediation specs
│
├── findings/
│   ├── R1-DOCUMENTATION-PATTERNS.md
│   ├── R2-CREATIVE-LAYOUTS.md
│   ├── R3-DENSITY-DIMENSIONS.md
│   ├── R4-AXIS-INNOVATIONS.md
│   ├── R5-COMBINATION-THEORY.md
│   ├── RESEARCH-SYNTHESIS.md
│   └── FINDINGS-INDEX.md
│
├── workflows/
│   ├── WORKFLOW-METACOGNITION-ANALYSIS.md
│   └── productivity-workflows.md
│
└── _archives/
    ├── _comprehensive-audit/      ← 12 underscore dirs move here
    ├── _od-audit-scratchpad/
    ├── _workflow-metacognition/
    └── ... (10 more)
```

**RATIONALE:**
- Groups all research artifacts together
- Preserves underscore archive pattern
- Separates operational research (findings) from meta-research (workflows)
- Keeps POST-CD strategic planning accessible

**MOVES:** ~362 files total

**HEADER UPDATES:** ~200 files (knowledge-architecture has inline headers)

---

### Phase 5: FLATTEN EXPLORATIONS (3→2 levels)

**FROM:**
```
docs-spa/app/showcase/explorations/
```

**TO:**
```
/explorations/
```

**RATIONALE:**
- No SPA runtime needed (static HTML files)
- 24 HTML layouts are reference artifacts
- Already in provenance chain (Phase 2B threaded)

**MOVES (24 HTML + ~100 .md files):**
- `explorations/density/` → `/explorations/density/`
- `explorations/organizational/` → `/explorations/organizational/`
- `explorations/axis/` → `/explorations/axis/` (showcase version only, delete root version)
- `explorations/combination/` → `/explorations/combination/`

**DELETE:** Root `/explorations/axis/` (233 files, already covered in Phase 1)

**HEADER UPDATES:** ~100 files

---

### Phase 6: ARCHIVE OLD DESIGN-EXTRACTION (5→0 levels for superseded)

**FROM:**
```
design-extraction/
├── archive/            ← DANGEROUS (98% delete)
├── font-research/      ← LOCKED decision (keep 3 files)
├── card-system/        ← SUPERSEDED (entire dir)
├── typography-system/  ← Active CSS (keep)
└── component-system/   ← Active but reorganize
```

**TO:**
```
/design-system/
├── foundation/         ← T1 synthesis (moved in Phase 3)
├── typography/         ← Active CSS from typography-system/
├── components/         ← Active CSS from component-system/css/
│
/archive/design-extraction/
├── archive/            ← DANGEROUS superseded tokens
├── card-system/        ← SUPERSEDED soul definition
└── font-research-full/ ← Full research trail

/design-system/provenance/
└── font-research/      ← FINAL-DECISION.md + RANKING-SUMMARY.md (3 files)
```

**DELETES:**
- `archive/` — 53/54 files (keep CLAUDE.md warning only)
- `font-research/` — 18/21 files (keep CLAUDE.md, FINAL-DECISION.md, RANKING-SUMMARY.md)
- `card-system/` — entire dir (66 files) → move to `/archive/design-extraction/`

**MOVES:**
- `typography-system/*.css` → `/design-system/typography/`
- `component-system/css/*.css` → `/design-system/components/`
- `font-research/FINAL-DECISION.md` → `/design-system/provenance/font-research/`

**IMPACT:** 137 files deleted, 9 files moved to `/design-system/`, 66 files archived

---

### Phase 7: ELIMINATE SPA NESTING (optional — depends on SPA usage)

**QUESTION FOR HUMAN:** Is the Next.js SPA (`docs-spa/`) actively used for runtime serving, or is it only a build tool for static exports?

**IF STATIC ONLY:**
```
docs-spa/app/showcase/  → (DELETE after migrating content)
docs-spa/components/    → /design-system/components/ (React implementations)
docs-spa/public/        → /design-system/assets/
```

**IF SPA ACTIVE:**
Keep `docs-spa/` but update imports to reference new top-level paths:
```typescript
// Before
import { CHARACTER_FAMILY } from '@/app/showcase/design-extraction/...';

// After
import { CHARACTER_FAMILY } from '@/design-system/foundation/CHARACTER-FAMILY-COMPLETE';
```

**DEFER DECISION** until human clarifies SPA usage.

---

## PROVENANCE CHAIN MIGRATION STRATEGY

### Challenge: 734 Files Have Inline Threading Headers

**Per MEMORY.md:**
- Phase 2B: 490 files with INLINE THREADING HEADER
- Phase 2D: 244 files with LIGHT SECTION headers
- **Total:** 734 files reference current paths

**SOLUTION: 3-Phase Header Update**

#### Step 1: Generate Path Mapping

Create `migration-map.json`:
```json
{
  "docs-spa/app/showcase/DESIGN-SYSTEM/README.md": "/design-system/README.md",
  "design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md": "/design-system/foundation/MASTER-SOUL-SYNTHESIS.md",
  ...
}
```

#### Step 2: Automated Header Updates

For each file with inline header:
1. Read `BUILT ON` section
2. Map old paths → new paths via `migration-map.json`
3. Update `CONSUMED BY` section
4. Rewrite header with updated paths

**Script stub:**
```bash
#!/bin/bash
for file in $(find . -name "*.md"); do
  if grep -q "INLINE THREADING HEADER" "$file"; then
    # Apply path transformations
    sed -i.bak -f migration-transforms.sed "$file"
  fi
done
```

#### Step 3: Cross-Reference Verification

After migration:
1. Generate new dependency graph
2. Compare with pre-migration graph
3. Verify 0 broken references
4. Verify inbound/outbound ref counts unchanged

**Validation metric:** If pre-migration had 27 files referencing CHARACTER-FAMILY-COMPLETE, post-migration must have 27 files referencing `/design-system/foundation/CHARACTER-FAMILY-COMPLETE.md`.

---

## PRIORITY ORDER FOR MIGRATION

### Tier 1: IMMEDIATE (Zero Provenance Impact)

1. **Phase 1: Root cleanup** — 568 files deleted, 12 archived
   - **Impact:** No provenance chain changes (root folders not in chain)
   - **Risk:** ZERO
   - **Effort:** 2 hours (manual archive + bulk delete)

2. **Delete node_modules/** — 40 playwright files across 3 locations
   - **Impact:** No provenance chain changes (junk files)
   - **Risk:** ZERO
   - **Effort:** 5 minutes

3. **Archive design-extraction/archive/** — 53/54 files deleted
   - **Impact:** CLAUDE.md warning remains, dangerous tokens gone
   - **Risk:** ZERO (superseded, DANGEROUS flag confirmed)
   - **Effort:** 10 minutes

**TOTAL TIER 1:** 661 files removed, 0 provenance updates, ~3 hours effort

---

### Tier 2: STRUCTURAL (Moderate Provenance Impact)

4. **Phase 2: Promote DESIGN-SYSTEM/** — 58 files, 1 level reduction
   - **Impact:** 58 file headers + ~30 consumers (~88 header updates)
   - **Risk:** LOW (clear references, automated update possible)
   - **Effort:** 4 hours (script header updates + verification)

5. **Phase 3: Promote T1 synthesis** — 6 files, 3 level reduction
   - **Impact:** 6 file headers + 27 consumers (52 occurrences) = ~33 header updates
   - **Risk:** MEDIUM (CHARACTER-FAMILY-COMPLETE has 52 occurrences across codebase)
   - **Effort:** 6 hours (manual verification of all 52 references)

**TOTAL TIER 2:** 64 files moved, ~121 header updates, ~10 hours effort

---

### Tier 3: COMPREHENSIVE (High Provenance Impact)

6. **Phase 4: Consolidate research/** — 362 files, flatten knowledge-architecture/
   - **Impact:** ~200 file headers + unknown consumers
   - **Risk:** HIGH (knowledge-architecture has complex cross-references)
   - **Effort:** 16 hours (generate dependency graph first)

7. **Phase 5: Flatten explorations/** — 124 files, 1 level reduction
   - **Impact:** ~100 file headers + exploration consumers
   - **Risk:** MEDIUM (explorations referenced by research docs)
   - **Effort:** 8 hours

8. **Phase 6: Archive design-extraction superseded** — 137 files deleted, 9 moved
   - **Impact:** Typography/component CSS imports need updates
   - **Risk:** MEDIUM (CSS imports in React components)
   - **Effort:** 6 hours

**TOTAL TIER 3:** 623 files affected, ~300 header updates, ~30 hours effort

---

### Tier 4: DEFERRED (Depends on SPA Usage)

9. **Phase 7: Eliminate SPA nesting** — TBD files
   - **Impact:** Unknown (depends on human decision)
   - **Risk:** UNKNOWN
   - **Effort:** DEFER until SPA usage clarified

---

## RECOMMENDED EXECUTION SEQUENCE

### Option A: AGGRESSIVE (Maximum Cleanup, 3 Days Effort)

**Day 1 (Tier 1):**
- Morning: Root cleanup (568 files deleted)
- Afternoon: node_modules + archive cleanup (93 files deleted)
- **Result:** 661 files removed, 0% provenance risk

**Day 2 (Tier 2):**
- Morning: Promote DESIGN-SYSTEM (58 files, 88 header updates)
- Afternoon: Promote T1 synthesis (6 files, 33 header updates)
- **Result:** 64 files moved, 121 header updates, LOW/MEDIUM risk

**Day 3 (Tier 3 — Phase 4 only):**
- Full day: Consolidate research (362 files, ~200 header updates)
- **Result:** 362 files moved, HIGH risk but high value

**TOTAL:** 1,087 files affected, 321 header updates, 3 days

---

### Option B: CONSERVATIVE (Safety First, 5 Days Effort)

**Day 1:** Tier 1 only (661 files removed)

**Day 2:** Phase 2 only (DESIGN-SYSTEM promotion, 88 updates)

**Day 3:** Phase 3 only (T1 synthesis promotion, 33 updates)
- Full day manual verification of CHARACTER-FAMILY-COMPLETE 52 occurrences

**Day 4:** Phase 4 only (research consolidation, 200 updates)
- Generate dependency graph first
- Automated header updates
- Manual cross-reference verification

**Day 5:** Phase 5+6 (explorations + design-extraction, 246 updates)

**TOTAL:** 1,087 files affected, 321 header updates, 5 days, incremental risk

---

### Option C: MINIMAL (Quick Wins Only, 3 Hours)

**Phase 1 only:** Root cleanup (568 files deleted, 12 archived)
- No provenance impact
- No header updates
- Immediate 62% file reduction (568/910 source files)

**DEFER** structural changes until post-CD pipeline work begins.

**RATIONALE:** Cleanup debris now, restructure when actively building.

---

## RISK ASSESSMENT

### High-Risk Items

1. **CHARACTER-FAMILY-COMPLETE migration** (52 occurrences)
   - Used by 7 React components
   - Referenced in 27 files
   - Moving from 5-level to 2-level path = HIGH BREAKAGE RISK
   - **Mitigation:** Automated find-replace + manual verification

2. **knowledge-architecture/ consolidation** (~200 files)
   - Complex cross-references
   - 12 underscore archives with synthesis dependencies
   - Unknown CONSUMED BY graph
   - **Mitigation:** Generate full dependency graph first

3. **CSS imports after design-extraction moves**
   - `typography.css` consumed by component-system
   - component-system consumed by React components
   - **Mitigation:** Update import paths in React components

### Medium-Risk Items

4. **DESIGN-SYSTEM/ promotion** (58 files)
   - Well-documented in graph scan (15+ inbound refs)
   - Clear reference pattern
   - **Mitigation:** Automated updates likely sufficient

5. **Explorations flattening** (124 files)
   - In provenance chain (Phase 2B threaded)
   - Referenced by research docs
   - **Mitigation:** Dependency graph + automated updates

### Zero-Risk Items

6. **Root cleanup** (568 files)
   - NOT in provenance chain (verified by zone reports)
   - Zero inbound references
   - **Mitigation:** None needed

7. **node_modules deletion** (40 files)
   - Playwright dependency junk
   - **Mitigation:** None needed

8. **archive/ cleanup** (53 files)
   - SUPERSEDED, DANGEROUS flagged
   - **Mitigation:** Keep CLAUDE.md warning

---

## OPEN QUESTIONS FOR HUMAN

1. **SPA Usage Clarification:**
   - Is `docs-spa/` used for runtime Next.js serving, or static export only?
   - If static: Can we eliminate `docs-spa/app/showcase/` entirely after migration?

2. **Archive Strategy:**
   - Keep 12 root-debris files archived, or delete entirely?
   - Adversary recommended archiving for meta-analysis potential

3. **T1 Promotion Priority:**
   - Is T1 visibility worth 6 hours manual verification of CHARACTER-FAMILY-COMPLETE references?
   - Alternative: Keep T1 at current path, only promote DESIGN-SYSTEM/

4. **Migration Timing:**
   - Execute now (pre-CD pipeline work) or defer until post-CD phases?
   - Per MEMORY.md: "CD complete, post-CD planning" = ACTIVE WORK IN PROGRESS

5. **Header Update Automation:**
   - Use sed script (fast, risky) or manual updates (slow, safe)?
   - Preference for automated with verification, or fully manual?

6. **Checkpoints + dependency-trace:**
   - Keep at root level (operational tracking) or move to `/research/infrastructure/`?
   - Current recommendation: KEEP at root (per zone-support audit)

---

## SUCCESS METRICS

### Quantitative

| Metric | Before | After (Aggressive) | Improvement |
|--------|--------|-------------------|-------------|
| Total files | ~2,300 | ~1,639 | -29% |
| Root clutter | 580 files | 12 archived | -98% |
| Max nesting depth | 5 levels | 2 levels | -60% |
| DESIGN-SYSTEM visibility | 4 levels | 1 level | -75% |
| T1 visibility | 5 levels | 2 levels | -60% |

### Qualitative

- [ ] Crown jewels at top-level (DESIGN-SYSTEM, T1 foundation)
- [ ] Research grouped by purpose (pipeline, findings, workflows)
- [ ] Zero broken provenance references
- [ ] All 734 inline headers updated correctly
- [ ] No soul violations introduced (border-radius, box-shadow checks)

---

## FINAL RECOMMENDATION

**EXECUTE OPTION C (MINIMAL) IMMEDIATELY:**
- **Phase 1 only:** Delete 568 root files, archive 12 samples
- **Effort:** 3 hours
- **Risk:** ZERO
- **Impact:** 62% file reduction, zero provenance changes

**DEFER OPTION B (CONSERVATIVE) UNTIL POST-CD WORK:**
- **Reasoning:** Per MEMORY.md, post-CD pipeline work is ACTIVE
- Restructuring now risks disrupting active research
- Better to cleanup debris immediately, restructure when building

**ALTERNATIVE:** If user wants aggressive cleanup NOW, execute Option A (3 days) but:
- Require full dependency graph generation first (Day 0)
- Manual verification of CHARACTER-FAMILY-COMPLETE 52 occurrences
- Automated header updates with verification script

---

## PROVENANCE CHAIN PRESERVATION GUARANTEE

**Before any migration:**
1. Generate full reference graph (inbound/outbound for all 734 threaded files)
2. Document all CONSUMED BY relationships
3. Create rollback snapshots (git tags at each phase)

**After each phase:**
1. Regenerate reference graph
2. Compare inbound/outbound counts (must match pre-migration)
3. Verify 0 broken references (no 404s in BUILT ON sections)
4. Run soul compliance check (border-radius, box-shadow, palette)

**Rollback trigger:**
- ANY broken reference
- ANY inbound/outbound count mismatch
- ANY soul violation introduced

**This ensures the provenance chain survives migration intact.**

---

**STRUCTURE PROPOSAL COMPLETE**
**Awaiting human decision on:**
1. Option A/B/C execution choice
2. SPA usage clarification
3. Archive strategy (keep 12 or delete entirely)
4. Migration timing (now vs. post-CD)
