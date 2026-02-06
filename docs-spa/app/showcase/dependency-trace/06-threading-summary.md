# Threading Readiness Assessment

**Generated:** 2026-02-05
**Sources:** showcase-threading.md, design-extraction-threading.md, design-system-threading.md
**Cross-ref:** cross-pollination-investigation.md

---

## Per-Directory Completeness

| Directory | Files | source: filled | built_on: filled | cited: filled | mandatory_for: filled | % Ready |
|-----------|-------|---------------|-----------------|--------------|----------------------|---------|
| showcase/ | 83 | 71 | 83 | 59 | 83 | 71% |
| design-extraction/ | 350 | 310 | 345 | 287 | 350 | 82% |
| design-system/ | 30 | 0 | 30 | 30 | 30 | 0% |
| **TOTAL** | **463** | **381** | **458** | **376** | **463** | **63%** |

**Notes on counting:**
- `source:` is counted as "filled" when the upstream origin file or creation context is identified, even if it is "N/A (authored as navigation file)"
- `built_on:` is counted as "filled" when at least one specific finding ID, file, or input is identified
- `cited:` is counted as "filled" when at least one explicit inbound reference is documented
- `mandatory_for:` is universally filled because every file has at least one identifiable downstream role
- design-system/ has 0% source because no file has any provenance marker pointing to its creation origin

---

## Field Gap Summary

| Field | Files with Data | Files Missing | % Complete |
|-------|----------------|---------------|------------|
| source: | 381 | 82 | 82% |
| built_on: | 458 | 5 | 99% |
| cited: | 376 | 87 | 81% |
| mandatory_for: | 463 | 0 | 100% |

**Gap breakdown by field:**

### source: (82 files missing)
- design-system/: 30 files (all undocumented provenance)
- showcase/: 12 files (navigation CLAUDE.md files, templates, trackers -- expected "N/A" cases that are borderline)
- design-extraction/: 40 files (archive variations, demo HTML, process docs -- low-priority experimental artifacts)

### cited: (87 files missing)
- design-system/: 0 files missing (all have at least README.md citation -- but these are WEAK citations)
- showcase/: 24 files (standalone audit records, progress trackers, navigation files consumed indirectly)
- design-extraction/: 63 files (archive files, experimental HTML, demo showcases, process state files)

---

## Top Blockers for Phase 3

### 1. design-system/ files have no determinable source (30 files, CRITICAL)

Every file in design-system/ lacks provenance markers. There are zero structured finding IDs (V1/V2 = 0), zero provenance annotations (V4 = 0), and zero deprecation markers (V8 = 0). The token values diverge critically from the soul-locked values in design-extraction/showcase (border-radius: 0.25rem-9999px vs 0; box-shadow: non-none vs none; primary: #FF0000 vs #E83025).

**Impact:** Cannot establish threading edges FROM showcase or design-extraction TO design-system, because design-system was created independently and never integrated into the provenance chain.

**Remediation:** Add CLAUDE.md to design-system/ documenting its relationship to the overall project. Decide whether to align tokens with soul-locked values or explicitly document design-system/ as a separate, non-soul-compliant implementation.

### 2. design-extraction archive/ files have unclear built_on chains (46 files, MEDIUM)

Archive files (extraction/, tokens/, components/specs/, variations/) are explicitly superseded but their built_on chains point to external sources (Sanrok screenshots, web research) that are not formally tracked.

**Impact:** Archive provenance is informal. Not a blocking issue since these files are SUPERSEDED and should not be consumed by new work.

**Remediation:** Add "SUPERSEDED BY" markers to archive/tokens/ (DANGEROUS: contains wrong values) and archive/perceptual-audit-phase-2.5/.

### 3. design-extraction component sub-agent analysis files (102) have repetitive structure but each has threading data (LOW)

The 102 files across 11 component directories in perceptual-audit-v2/components/ follow a strict template (12 zone analyses per component). Each has identifiable source/built_on/cited/mandatory_for data, but documenting each individually would produce 102 nearly identical records.

**Impact:** Low. Group-level threading is sufficient. Individual records add noise without insight.

**Remediation:** None needed. Group-level threading is complete.

### 4. Token drift between design-extraction tracking sheets and showcase tokens needs reconciliation (MEDIUM)

Cross-pollination investigation found drift in secondary tokens:
- accent-amber: #C49052 (tracking) vs #D97706 (showcase)
- accent-purple: #7B68EE (tracking) vs #7C3AED (showcase)
- bg-info: #F0F7FF (tracking) vs #F5F8FA (showcase)
- bg-tip: #F0F7F0 (tracking) vs #F5FAF5 (showcase)

**Impact:** Citation edges from tracking sheets to showcase tokens are technically inaccurate for these specific values. The showcase adopted synthesis values (DESIGN-TOKEN-SUMMARY.md) not tracking values.

**Remediation:** Document that showcase tokens derive from DESIGN-TOKEN-SUMMARY.md (synthesis), not directly from tracking sheets. Tracking sheets are reference/provenance, not authoritative sources for these specific values.

### 5. 8 token namespaces in design-system/ create impossible alignment (CRITICAL for design-system/ only)

design-system/ has 5 CSS namespaces (base, --blend-*, --blend-* variant, --mb-*) plus 3 JS inline token objects. No single source of truth exists within design-system/.

**Impact:** Token changes in tokens.css have zero effect on standalone themes or TSX components. This makes alignment with soul-locked values a multi-file refactor.

**Remediation:** Consolidate to a single namespace. TSX components must consume CSS custom properties instead of hardcoded Tailwind values.

---

## Threading Work Estimate

| Category | Files Needing Work | Estimated Effort | Priority |
|----------|-------------------|------------------|----------|
| design-system/ CLAUDE.md creation | 1 new file | 30 min | CRITICAL |
| design-system/ token alignment documentation | 10 CSS files | 2-4 hours | CRITICAL |
| design-system/ TSX token migration | 16 TSX files | 4-8 hours | HIGH |
| design-extraction/ CLAUDE.md update (Phase 4) | 1 file edit | 30 min | HIGH |
| design-extraction/ README.md phase table update | 1 file edit | 15 min | MEDIUM |
| design-extraction/ archive deprecation markers | 13 files | 1-2 hours | MEDIUM |
| showcase/ audit record cited-field backfill | 24 files | 2-3 hours | LOW |
| design-extraction/ archive cited-field backfill | 63 files | 3-4 hours | LOW |
| Token drift reconciliation documentation | 1 new document | 30 min | MEDIUM |
| **TOTAL** | **~130 file-level actions** | **~14-22 hours** | -- |

---

## Field Completeness Heatmap

```
                    source  built_on  cited  mandatory_for
showcase/DD HTML    [====]  [====]    [====]  [====]        100% ready
showcase/research   [====]  [====]    [====]  [====]        100% ready
showcase/checkpts   [=== ]  [====]    [==  ]  [====]         58% ready
showcase/KA         [=== ]  [====]    [=   ]  [====]         40% ready
showcase/DESIGN-SYS [====]  [====]    [=== ]  [====]         71% ready
d-extract/synth     [====]  [====]    [====]  [====]        100% ready
d-extract/tracking  [====]  [====]    [====]  [====]        100% ready
d-extract/typ-sys   [====]  [====]    [=== ]  [====]         83% ready
d-extract/card-sys  [=== ]  [====]    [=== ]  [====]         80% ready
d-extract/comp-sys  [==  ]  [====]    [==  ]  [====]         59% ready
d-extract/archive   [==  ]  [====]    [=   ]  [====]         30% ready
design-system/      [    ]  [====]    [====]  [====]          0% ready

Legend: [====] 80-100%  [=== ] 60-79%  [==  ] 40-59%  [=   ] 20-39%  [    ] 0-19%
```

---

## Cross-Directory Edge Summary

| From | To | Edges | Direction | Documented? |
|------|-----|-------|-----------|-------------|
| design-extraction/synthesis/ | showcase/DESIGN-SYSTEM/ | 6 | Unidirectional | YES |
| design-extraction/tracking/ | showcase/checkpoints/ | 7 | Unidirectional | YES |
| design-extraction/synthesis/ | showcase/explorations/ | 6 (CSS comment cites) | Unidirectional | YES (informal) |
| showcase/ | design-extraction/ | 0 | N/A | N/A (no reverse flow) |
| showcase/ | design-system/ | 0 | N/A | N/A (disconnected) |
| design-system/ | showcase/ | 0 | N/A | N/A (disconnected) |
| design-extraction/ | design-system/ | 0 | N/A | N/A (disconnected, different values) |
| design-system/ | design-extraction/ | 0 | N/A | N/A (disconnected) |
| **Total cross-directory edges** | | **19** | **All unidirectional** | **17/19 formally documented** |
