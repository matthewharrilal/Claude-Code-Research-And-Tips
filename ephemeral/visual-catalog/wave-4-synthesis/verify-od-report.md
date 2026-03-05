# OD Family Preview Coverage Verification Report

## Summary

| Metric | Count |
|--------|-------|
| Total OD catalog cards | 165 |
| Total OD preview entries | 163 (OD-004 has 27 keys but 2 are duplicates for the same concept) |
| Files with FULL match | 4 of 6 (OD-001, OD-002, OD-005, OD-006) |
| Files with gaps | 2 of 6 (OD-003, OD-004) |

---

## Per-File Results

### OD-001 -- PASS (24/24)

All 24 catalog cards have matching preview entries in `previews-od-a.js`. Zero discrepancies.

### OD-002 -- PASS (18/18)

All 18 catalog cards have matching preview entries in `previews-od-a.js`. Zero discrepancies.

### OD-003 -- PASS (25/25)

All 25 catalog cards have matching preview entries in `previews-od-a.js`. The initial automated check missed `What's Next Block` because the key uses an escaped apostrophe (`\'`), but the key IS present at line 981 of `previews-od-a.js`. The lookup uses `textContent.trim()` which decodes HTML entities, so the match works correctly at runtime.

### OD-004 -- FAIL (13 mismatches out of 26 cards)

OD-004 previews are defined inline in `visual-catalog.html` (lines 7525-7823) as `od004Previews`. There are **major naming mismatches** between the catalog card names and the preview keys. The preview data was apparently authored with different names than what the catalog extraction produced.

**13 MISSING previews** (catalog card exists, no matching preview key):

| # | Catalog Card Name | Likely Preview Match | Issue |
|---|---|---|---|
| 1 | `Exploration ID Tag` | `Exploration ID Label` | Name mismatch: "Tag" vs "Label" |
| 2 | `Survey Meta Row` | *(none)* | No corresponding preview at all |
| 3 | `Verification List` | `Verification Checklist` | Name mismatch: "List" vs "Checklist" |
| 4 | `Typography Compression Gradient` | `Typography Scale Compression` | Name mismatch |
| 5 | `Spacing-as-Confidence` | *(none -- maybe `Inverse Density-Confidence Gradient`?)* | Unclear match |
| 6 | `Zone Background Gradient` | *(none -- maybe `Inverse Density-Confidence Gradient`?)* | Unclear match |
| 7 | `Depth Label Color Encoding` | *(none -- covered by `Stratum Depth Label`?)* | Unclear match |
| 8 | `Callout Essence Typography Shift` | *(none)* | No corresponding preview |
| 9 | `Code Block Dark Theme Inversion` | *(none)* | No corresponding preview |
| 10 | `Stratum` | `Stratum Container` | Name mismatch: "Stratum" vs "Stratum Container" |
| 11 | `Callout System (6 variants)` | `Callout System` | Name mismatch: missing "(6 variants)" qualifier |
| 12 | `Troubleshoot (Collapsible Details)` | `Troubleshooting Accordion` | Name mismatch: different phrasing |
| 13 | `What's Next (Terminal Navigation)` | `What's Next Navigation Panel` (x2, one with Unicode apostrophe) | Name mismatch |

**14 EXTRA preview entries** (preview exists, no matching catalog card):

1. `Exploration ID Label` -- should be `Exploration ID Tag`
2. `Verification Checklist` -- should be `Verification List`
3. `Typography Scale Compression` -- should be `Typography Compression Gradient`
4. `Inverse Density-Confidence Gradient` -- no clear card match (possible partial match to `Spacing-as-Confidence` or `Zone Background Gradient`)
5. `Line-Height Compression` -- no clear card match
6. `Content Width Narrowing` -- no clear card match
7. `Solid Offset Depth Signal` -- no clear card match
8. `Square Marker System` -- no clear card match
9. `Callout System` -- should be `Callout System (6 variants)`
10. `Troubleshooting Accordion` -- should be `Troubleshoot (Collapsible Details)`
11. `Content Block` -- no clear card match
12. `Stratum Container` -- should be `Stratum`
13. `What\u2019s Next Navigation Panel` (Unicode right quote) -- should be `What's Next (Terminal Navigation)`
14. `What's Next Navigation Panel` (ASCII apostrophe) -- duplicate of above, should be `What's Next (Terminal Navigation)`

**Additional bug:** There are TWO entries for "What's Next Navigation Panel" -- one using a Unicode right single quotation mark (`\u2019`, line 7650) and one using an ASCII apostrophe (`'`, line 7817). The catalog card uses `What&#x27;s` which decodes to ASCII `'`. Neither version matches the catalog card name `What's Next (Terminal Navigation)`.

### OD-005 -- PASS (26/26)

All 26 catalog cards have matching preview entries in `previews-od-b.js`. Zero discrepancies.

### OD-006 -- PASS (46/46)

All 46 catalog cards have matching preview entries in `previews-od-b.js`. Zero discrepancies.

---

## Root Cause Analysis

OD-004 is the only file with inline previews (all other OD files use external `.js` files). The OD-004 preview data was apparently created independently from the catalog card extraction, resulting in:
1. **Name mismatches** -- the preview author used different (often simpler) names than the catalog cards
2. **Different element decomposition** -- some catalog gestures (e.g., `Spacing-as-Confidence`, `Zone Background Gradient`, `Depth Label Color Encoding`, `Callout Essence Typography Shift`, `Code Block Dark Theme Inversion`) have no corresponding preview entries, while the previews include elements not in the catalog (e.g., `Content Block`, `Content Width Narrowing`, `Line-Height Compression`, `Square Marker System`, `Solid Offset Depth Signal`, `Inverse Density-Confidence Gradient`)
3. **Unicode apostrophe bug** -- a duplicate entry with a Unicode curly quote that won't match the HTML-decoded ASCII apostrophe

## Recommended Fixes for OD-004

To achieve full coverage, either:

**Option A (rename preview keys to match catalog):**
- `Exploration ID Label` -> `Exploration ID Tag`
- `Verification Checklist` -> `Verification List`
- `Typography Scale Compression` -> `Typography Compression Gradient`
- `Stratum Container` -> `Stratum`
- `Callout System` -> `Callout System (6 variants)`
- `Troubleshooting Accordion` -> `Troubleshoot (Collapsible Details)`
- Remove Unicode `What\u2019s Next Navigation Panel` duplicate
- Rename `What's Next Navigation Panel` -> `What's Next (Terminal Navigation)`
- Create new preview entries for the 5 missing gestures/instruments: `Survey Meta Row`, `Spacing-as-Confidence`, `Zone Background Gradient`, `Depth Label Color Encoding`, `Callout Essence Typography Shift`, `Code Block Dark Theme Inversion`

**Option B (rename catalog cards to match previews):**
- Update the catalog card names to match the preview keys (less recommended since it changes the catalog source of truth)

---

## Duplicate Name Check

No duplicate element names were found within any single OD file. Each card name is unique within its file.

## HTML Entity Handling

The preview lookup code uses `textContent.trim()` (line 7923 of `visual-catalog.html`) which automatically decodes HTML entities. Keys in preview objects must use decoded characters (e.g., `'` not `&#x27;`, `->` not `&gt;`). This is correctly handled in OD-001 through OD-003 and OD-005/006 preview files.

---

## Final Verdict

- **OD-001**: PASS
- **OD-002**: PASS
- **OD-003**: PASS
- **OD-004**: FAIL -- 13 missing + 14 extra (naming mismatches + missing elements)
- **OD-005**: PASS
- **OD-006**: PASS
