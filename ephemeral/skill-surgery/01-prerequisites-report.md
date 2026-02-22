# Prerequisites Report -- Task #1

**Agent:** prereq-fixer
**Status:** COMPLETE
**Date:** 2026-02-20

---

## Fix 1: Build-page TC Spawn File List

**File:** `~/.claude/skills/build-page/SKILL.md`
**Location:** Lines 36-41 (TC Agent spawn prompt, "Read these files IN ORDER" section)

**Change:** Added 2 files to the TC agent's read list:

```
4. design-system/compositional-core/identity/prohibitions.md -- SOUL CONSTRAINTS. Know what the builder cannot override.
5. design-system/compositional-core/vocabulary/tokens.css -- TOKEN VALUES. Know the available CSS variables and palette.
```

**Before:** TC agent read 3 files (SKILL.md, content, mechanism-catalog.md)
**After:** TC agent reads 5 files (added prohibitions.md + tokens.css)

**Why this matters:** Without these files, trimming soul constraint content from TC SKILL.md would leave the TC agent blind to soul constraints. Now soul awareness flows through the source files directly, not through duplicated content in the skill.

---

## Fix 2: W-Code Definitions in conventions-brief.md

**File:** `design-system/pipeline/conventions-brief.md`
**Location:** New section "## Builder Warnings (W-Codes)" added at line 547, before the closing line

**Change:** Added condensed definitions for all 6 W-codes from TC SKILL.md:

| W-Code | Summary |
|--------|---------|
| W-DEADZONE | Section transitions must be changing state, not empty space. Max breathing zone 48px. |
| W-OVERLABEL | Use structural gradients, not text labels, to communicate metaphor transitions. |
| W-MONOTONY | Vary element sizes by content importance. Break 6+ same-shaped elements into groups. |
| W-RESPONSIVE | Test at 768px. TC brief describes specific weakness and mitigation. |
| W-STATS | Metadata strips fragile at 768px. Limit to 3 items or stack vertically. |
| W-IMPLICIT | (Always attached.) Reader should FEEL the metaphor, not READ about it. Show, don't tell. |

**Source:** TC SKILL.md lines 1916-1989 (Warning Categories + Warning Selection Protocol)

**Note on W-code names:** The task description listed W-MONOTONE, W-GRAVITY, W-FRAGMENTATION, W-SPECTACLE. The actual W-codes in TC SKILL.md are W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT. I used the actual source names.

---

## Verification

1. **Build-page TC spawn references prohibitions.md + tokens.css:** CONFIRMED (lines 40-41)
2. **Conventions-brief contains all 6 W-code definitions:** CONFIRMED (lines 547-565)
3. **No other files broken:** CONFIRMED -- changes are additive only (new list items, new section)
