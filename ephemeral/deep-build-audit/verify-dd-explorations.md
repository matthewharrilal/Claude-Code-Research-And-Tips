# DD Exploration File Verification
Generated: 2026-02-28

## Summary

- **6 DD HTML source files** found in `design-system/validated-explorations/density/`
- **6 DD-related case study files** found in `design-system/compositional-core/case-studies/`
  - 3 prose case studies (DD-003, DD-004, DD-006)
  - 3 visual case studies (dd-003, dd-004, dd-006 lowercase)
- **Total DD lines (HTML only):** 6,259
- **Total DD lines (case studies):** 1,981
- **Grand total across all DD files:** 8,240 lines
- **No CS-DD* files exist** (pattern CS-DD* yields zero results)
- **All corpus.ts DD references exist on disk** (6/6 verified)
- **No corpus.ts DD references are broken**

---

## HTML Source Files (validated-explorations/density/)

| File | Absolute Path | Lines | In corpus.ts | Case Study Exists |
|------|--------------|-------|-------------|------------------|
| DD-001-breathing.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-001-breathing.html` | 770 | NO | NO |
| DD-002-gradient.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-002-gradient.html` | 962 | NO | NO |
| DD-003-islands.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-003-islands.html` | 881 | NO (HTML not ref'd; case study IS ref'd) | YES |
| DD-004-layers.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-004-layers.html` | 1,275 | NO (HTML not ref'd; case study IS ref'd) | YES |
| DD-005-rivers.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-005-rivers.html` | 1,251 | NO | NO |
| DD-006-fractal.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/density/DD-006-fractal.html` | 1,120 | NO (HTML not ref'd; case study IS ref'd) | YES |

**Note:** No HTML source files are referenced in corpus.ts. The corpus references the derived *case study* documents, not the raw HTML explorations.

---

## Case Study Files (case-studies/) — corpus.ts References

| File | Absolute Path | Lines | Subset | approximateLines in corpus.ts | Match? |
|------|--------------|-------|--------|------------------------------|--------|
| DD-003-islands.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-003-islands.md` | 405 | S3 | 405 | EXACT |
| DD-004-layers.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-004-layers.md` | 428 | S3 | 428 | EXACT |
| DD-006-fractal.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/DD-006-fractal.md` | 377 | S1 | 377 | EXACT |
| dd-003-islands-visual.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-003-islands-visual.md` | 462 | S3 | 462 | EXACT |
| dd-004-layers-visual.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-004-layers-visual.md` | 144 | S3 | 144 | EXACT |
| dd-006-fractal-visual.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/dd-006-fractal-visual.md` | 165 | S3 | 165 | EXACT |

All 6 case study files referenced in corpus.ts exist on disk. All `approximateLines` values match actual line counts exactly.

---

## CS-DD* Pattern Search

No files matching `CS-DD*` exist anywhere in the project. The case study naming convention uses `DD-003-islands.md` format (not `CS-DD-003.md`).

---

## DD Files NOT Referenced in corpus.ts

The following DD HTML source files exist on disk but have no corpus.ts reference:

| File | Lines | Gap Analysis |
|------|-------|-------------|
| DD-001-breathing.html | 770 | No case study; not referenced |
| DD-002-gradient.html | 962 | No case study; not referenced |
| DD-005-rivers.html | 1,251 | No case study; not referenced |

**Impact:** These 3 files (2,983 lines total) are not in the build pipeline corpus. This may be intentional — only DD-003, DD-004, DD-006 have derived case studies, suggesting DD-001/002/005 were not promoted from exploration to case study status.

---

## corpus.ts DD References That Don't Exist on Disk

**NONE.** All 6 DD-related corpus.ts references are verified to exist on disk.

---

## Line Count vs Team Lead Expectation

Team lead expected ~18 files totaling ~9,700 lines. Actual findings:

| Category | Files | Lines |
|----------|-------|-------|
| DD HTML explorations | 6 | 6,259 |
| DD prose case studies | 3 | 1,210 |
| DD visual case studies | 3 | 771 |
| **Total DD files** | **12** | **8,240** |

Gap from expected: ~6 fewer files, ~1,460 fewer lines. The 18-file/9,700-line estimate may have included AD or OD files, or anticipated files that were never created (DD-001/002/005 case studies). The actual DD corpus is 12 files / 8,240 lines.

---

## Findings

1. **All clean:** corpus.ts references are 100% valid — no broken paths, no phantom references.
2. **approximateLines perfectly accurate** for all 6 DD case study files (exact match in all cases).
3. **DD-001, DD-002, DD-005 are orphaned HTML files** — exist in validated-explorations but never promoted to case studies and not in corpus.
4. **No CS-DD* naming convention** exists in this project; case studies use `DD-NNN-name.md` format.
5. **HTML source files are never referenced in corpus** — corpus only uses derived case study documents.
