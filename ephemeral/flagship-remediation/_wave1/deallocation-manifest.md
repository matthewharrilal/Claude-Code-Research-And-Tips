# DEALLOCATION MANIFEST

Source file: `ephemeral/flagship-experiment/07-intentionality.html` (2,035 lines)
Spec reference: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md`, Phase 0 (Section 2)

## Summary

- **Total lines to remove:** ~201 (of ~216 spec estimate; see notes below)
- **Total blocks to remove:** 8 discrete deletion ranges
- **Lines to KEEP (perceptible):** Lines 855-856, 863-864 (`.zone-s5 .component-block` and `.zone-s7 .component-block`)
- **Lines FLAGGED as potentially perceptible (DO NOT DELETE):** Lines 897-903 (zone-s3/s4 table header border shifts -- see Block 6 notes)

---

## Block 1: Typographic Convergence Gradient -- Zone 1

- **Start line:** 728
- **End line:** 762
- **First 30 chars:** `    /* ========================`
- **Selectors removed:**
  - `/* --- Zone 1: Typographic variety (raw intake) --- */` (comment)
  - `.zone-s1 p` (line-height 1.8, letter-spacing 0.006em, word-spacing 0.02em)
  - `.zone-s1 h2` (letter-spacing 0.01em)
  - `.zone-s3 p` (line-height 1.75, letter-spacing 0.004em, word-spacing 0.015em)
  - `.zone-s3 h2` (letter-spacing 0.008em)
  - `.zone-s1 .page-container > p + p, .zone-s3 .page-container > p + p` (margin-top 4px)
- **Lines:** 728-762 (35 lines)
- **Reason:** Letter-spacing 0.004-0.01em = 0.064-0.16px at 16px base, far below 0.5px perception threshold. Word-spacing 0.015-0.02em = 0.24-0.32px, also sub-perceptual. Line-height deltas of 0.05 (1.75 vs 1.7 base) are imperceptible. The `p + p` margin-top of 4px is borderline but superseded by Phase 5.

**NOTE:** This block also covers Step 0.6 (the extra paragraph breathing rule at lines 758-762). No separate deletion needed for Step 0.6.

---

## Block 2: Typographic Convergence Gradient -- Zone 2

- **Start line:** 764
- **End line:** 795
- **First 30 chars:** `    /* --- Zone 2: Typographic`
- **Selectors removed:**
  - `.zone-s4 p` (line-height 1.7, letter-spacing 0.002em)
  - `.zone-s4 h2` (letter-spacing 0.004em)
  - `.zone-s5 p, .zone-s7 p, .zone-s8 p` (line-height 1.65, letter-spacing -0.003em, word-spacing -0.01em)
  - `.zone-s5 h2, .zone-s7 h2, .zone-s8 h2` (letter-spacing -0.01em)
  - `.zone-s6 p` (line-height 1.7, letter-spacing 0)
  - `.zone-s6 h2` (letter-spacing 0)
- **Lines:** 764-795 (32 lines)
- **Reason:** Letter-spacing 0.002-0.01em = 0.032-0.16px, all below 0.5px threshold. `letter-spacing: 0` and `letter-spacing: -0.003em` (-0.048px) are at or below perception floor. Line-height 1.65 vs 1.7 base = 0.05 delta, imperceptible.

---

## Block 3: Typographic Convergence Gradient -- Zone 3

- **Start line:** 797
- **End line:** 834
- **First 30 chars:** `    /* --- Zone 3: Typographic`
- **Selectors removed:**
  - `.zone-s9 p` (line-height 1.7, letter-spacing 0, word-spacing 0)
  - `.zone-s9 h2` (letter-spacing 0)
  - `.zone-s10 p` (line-height 1.75, letter-spacing 0)
  - `.zone-s10 h2` (letter-spacing 0)
  - `.zone-s11 p` (line-height 1.75, letter-spacing 0)
  - `.zone-s11 h2` (letter-spacing 0.005em)
  - `.zone-s12 p` (line-height 1.8, letter-spacing 0, word-spacing 0)
  - `.zone-s12 h2` (letter-spacing 0.01em)
- **Lines:** 797-834 (38 lines)
- **Reason:** All `letter-spacing: 0` declarations are no-ops (match CSS default). `letter-spacing: 0.005-0.01em` = 0.08-0.16px, sub-perceptual. Line-height 1.75/1.8 vs 1.7 base = 0.05-0.1 delta, imperceptible at 16px.

**Blocks 1+2+3 combined = lines 728-834 = 107 lines** (the full convergence gradient, including the section header comment at 728-735 and paragraph breathing rule at 758-762)

---

## Block 4: Spatial Compression -- Zone 1 (DELETE)

- **Start line:** 836
- **End line:** 852
- **First 30 chars:** `    /* ========================`
- **Selectors removed:**
  - Section header comment (METAPHOR Ch3 Spatial)
  - `.zone-s1 .component-block` (margin: 32px 0) -- base is 24px, delta +8px
  - `.zone-s3 .component-block` (margin: 32px 0) -- same
  - `.zone-s3 .table-wrapper` (margin: 32px 0) -- base table-wrapper margin is 24px, delta +8px
- **Lines:** 836-852 (17 lines)
- **Reason:** 8px margin deltas are below the 24px perception threshold cited in the spec. Base component-block margin is `var(--space-6)` = 24px; these set 32px. The 8px difference is borderline sub-perceptual, especially when surrounded by larger spacing values.

---

## Block 5: Spatial Compression -- Zone 2 (PARTIAL DELETE, KEEP 2 rules)

- **Start line:** 854
- **End line:** 873
- **First 30 chars:** `    /* Zone 2: Compressed inte`
- **Selectors to DELETE:**
  - Comment line 854
  - `.zone-s5 .table-wrapper { margin: var(--space-4) 0; }` (lines 859-861) -- 16px vs 24px base = -8px
  - `.zone-s8 .table-wrapper { margin: var(--space-4) 0; }` (lines 867-869) -- same
  - `.zone-s8 .sequence-block { margin: var(--space-3) 0; }` (lines 871-873) -- 12px vs 16px base = -4px
- **Selectors to KEEP:**
  - `.zone-s5 .component-block { margin: var(--space-4) 0; }` (lines 855-857) -- 16px vs 24px base = -8px, SPEC says KEEP
  - `.zone-s7 .component-block { margin: var(--space-4) 0; }` (lines 863-865) -- same, SPEC says KEEP
- **Lines deleted:** ~12 lines (keeping 6 lines for the two KEEP rules)
- **Reason:** Table-wrapper 8px deltas and sequence-block 4px deltas are sub-perceptual. The two kept component-block rules are preserved per spec (halving margin from 24px to 16px is at the boundary of perceptibility, and the spec explicitly identifies them as perceptible).

---

## Block 6: Spatial Compression -- Zone 3 (DELETE)

- **Start line:** 875
- **End line:** 890
- **First 30 chars:** `    /* Zone 3: Released interna`
- **Selectors removed:**
  - Comment line 875
  - `.zone-s9 .table-wrapper { margin: var(--space-6) 0; }` -- 24px = IDENTICAL to base (no-op)
  - `.zone-s10 .table-wrapper { margin: var(--space-6) 0; }` -- same
  - `.zone-s11 .table-wrapper { margin: var(--space-6) 0; }` -- same
  - `.zone-s12 .component-block { margin: var(--space-8) 0; }` -- 32px vs 24px base = +8px
- **Lines:** 875-890 (16 lines)
- **Reason:** Three `.table-wrapper` rules set `margin: var(--space-6) 0` which is identical to the base table-wrapper margin -- literal no-ops. The `.zone-s12 .component-block` rule adds only +8px, same sub-perceptual delta as Zone 1.

---

## Block 7: Per-Zone Border Color Shifts (DELETE with CAUTION)

- **Start line:** 892
- **End line:** 930
- **First 30 chars:** `    /* ========================`
- **Selectors removed:**
  - Section header comment (METAPHOR Ch4 Structural)
  - `.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A; }` -- **SEE FLAG**
  - `.zone-s4 .table-compact thead tr { border-bottom-color: #4A3F35; }` -- **SEE FLAG**
  - `.zone-s3 table td { border-bottom-color: #EAE0D4; }` -- vs base `#E8DDD0`: R+2, G+3, B+4
  - `.zone-s4 table td { border-bottom-color: #E5DCCE; }` -- vs base `#E8DDD0`: R-3, G-1, B-2
  - `.zone-s10 table td { border-bottom-color: #EAE0D4; }` -- vs base `#E8DDD0`: R+2, G+3, B+4
  - `.zone-s11 table td { border-bottom-color: #ECE4D8; }` -- vs base `#E8DDD0`: R+4, G+7, B+8
  - `.zone-s11 .table-light { border-color: #E5DCCE; }` -- vs base `#E8DDD0`: R-3, G-1, B-2
  - `.zone-s11 .table-light thead tr { border-bottom-color: #DDD3C5; }` -- vs base `#D4C5B5`: R+9, G+14, B+16
- **Lines:** 892-930 (39 lines)
- **Reason:** Cell divider color shifts are 2-8 RGB deltas per channel, well below the 15-point minimum perceptual threshold. Table-light borders are 9-16 delta (borderline). All shifts are within the same warm-neutral family and would not be distinguishable on screen.

### FLAG: Lines 897-903 -- Potentially Perceptible Table Header Borders

The two rules `.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A; }` and `.zone-s4 .table-compact thead tr { border-bottom-color: #4A3F35; }` shift the header border from the base `#1A1A1A` (near-black) to warm brown tones.

- `#5C4B3A` vs `#1A1A1A`: R+66, G+49, B+32 -- **CLEARLY PERCEPTIBLE**
- `#4A3F35` vs `#1A1A1A`: R+48, G+37, B+27 -- **CLEARLY PERCEPTIBLE**

These change a near-black 3px table header border to a distinctly warm brown. This IS visible.

**HOWEVER:** The spec says delete them. The spec author's "2-7 RGB delta" description likely compared zone-to-zone (s3 vs s4 difference = ~14 delta), not zone vs base. Since these warm-brown borders are being replaced by Phase 3's new border system anyway, and since the current effect (warm brown instead of near-black) is aesthetically minor on a 3px border, **I recommend proceeding with deletion per spec** but logging this as a checkpoint verification item.

**RECOMMENDATION:** Delete per spec. Verify at checkpoint that table header borders in S3/S4 revert to base `#1A1A1A` and still look acceptable. If they look wrong, this was the cause.

---

## Block 8: Per-Zone Heading Color Shifts (DELETE)

- **Start line:** 932
- **End line:** 963
- **First 30 chars:** `    /* ========================`
- **Selectors removed:**
  - Section header comment (METAPHOR Ch5 Density)
  - `.zone-s1 h2 { color: #2A2420; }` -- vs base `#1A1A1A`: R+16, G+10, B+6, net ~11
  - `.zone-s3 h2 { color: #252018; }` -- vs base `#1A1A1A`: R+11, G+6, B-2, net ~7
  - `.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 { color: var(--color-text); }` -- IDENTICAL to base (no-op)
  - `.zone-s9 h2 { color: #1E1B18; }` -- vs base `#1A1A1A`: R+4, G+1, B-2, net ~3
  - `.zone-s10 h2 { color: #221F1A; }` -- vs base `#1A1A1A`: R+8, G+5, B+0, net ~5
  - `.zone-s12 h2 { color: #2A2420; }` -- vs base `#1A1A1A`: R+16, G+10, B+6, net ~11
- **Lines:** 932-963 (32 lines)
- **Reason:** All heading color shifts are under 16 RGB per-channel max delta. The largest shift (#2A2420, net ~11 from base) is still below the 15-point minimum perceptual threshold established in the research. The Zone 2 rules are literal no-ops (set color to the same value as the base).

**NOTE:** `.zone-s1 h2` and `.zone-s12 h2` have the largest delta at ~16R/10G/6B. At 28px heading size on a warm cream background, this shifts near-black to a slightly-warm near-black. Borderline but still likely invisible per research thresholds. Include in checkpoint verification.

---

## Block 9: Rhythmic Micro-Modulations (DELETE)

- **Start line:** 965
- **End line:** 977
- **First 30 chars:** `    /* ========================`
- **Selectors removed:**
  - Section header comment (METAPHOR Ch6 Rhythmic)
  - `.zone-s7 .tension-group { margin-bottom: var(--space-6); }` -- 24px vs base 32px = -8px
  - `.zone-s8 .sequence-block + .sequence-block { margin-top: var(--space-2); }` -- 8px override
- **Lines:** 965-977 (13 lines)
- **Reason:** The tension-group -8px delta is sub-perceptual. The sequence-block sibling margin is a minor 8px addition that gets superseded by Phase 5 spacing. Both are small enough to be imperceptible in isolation.

---

## DELETION MAP (ordered by line number)

| # | Lines | Count | Description |
|---|-------|-------|-------------|
| 1 | 728-762 | 35 | Typographic gradient Zone 1 + paragraph breathing |
| 2 | 764-795 | 32 | Typographic gradient Zone 2 |
| 3 | 797-834 | 38 | Typographic gradient Zone 3 |
| 4 | 836-852 | 17 | Spatial compression Zone 1 (all deleted) |
| 5 | 854-873 | 20* | Spatial compression Zone 2 (*KEEP lines 855-857, 863-865) |
| 6 | 875-890 | 16 | Spatial compression Zone 3 (all deleted) |
| 7 | 892-930 | 39 | Per-zone border color shifts |
| 8 | 932-963 | 32 | Per-zone heading color shifts |
| 9 | 965-977 | 13 | Rhythmic micro-modulations |
| **Total** | | **~201** | **(after keeping 6 lines from Block 5)** |

**Note on line count vs spec:** The spec estimated ~216 lines. The actual count is ~201 because the spec likely double-counted some comment lines or the paragraph breathing rule (which is inside Block 1, not a separate 3-line block).

---

## LINES TO KEEP FROM BLOCK 5

These two rules MUST survive the deletion. After deleting the rest of Block 5, these remain:

```css
    /* Zone 2: Component compression — perceptible */
    .zone-s5 .component-block {
      margin: var(--space-4) 0;
    }

    .zone-s7 .component-block {
      margin: var(--space-4) 0;
    }
```

---

## CHECKPOINT

After all deletions, the page must look IDENTICAL at 1440px viewport width. Specific items to verify:

1. **Table header borders in S3/S4:** Will revert from warm brown (`#5C4B3A`/`#4A3F35`) to near-black (`#1A1A1A`). This is the ONLY deletion with per-channel deltas above 15. Verify it looks acceptable. (Block 7 flag)

2. **Heading colors in S1 and S12:** Will revert from slightly-warm near-black (`#2A2420`) to default near-black (`#1A1A1A`). Maximum delta is ~16 on R channel. Should be invisible but verify. (Block 8)

3. **Zone-s11 table-light header border:** Will revert from `#DDD3C5` to base `#D4C5B5`. Delta of 9-16 per channel. Borderline. (Block 7)

4. **Line-height on Zone 1 and Zone 3 paragraphs:** Will revert to base 1.7 from 1.75/1.8. These 0.05-0.1 deltas produce ~0.8-1.6px changes per line. Likely invisible but verify scroll length didn't change dramatically.

5. **Component spacing in zones s5/s7:** Confirm the KEPT rules still produce the 16px compressed margins.

### Rules That MIGHT Produce a Visible Change (flagged as CAUTION, not DO NOT DELETE)

| Rule | Base Value | Override Value | Delta | Risk |
|------|-----------|---------------|-------|------|
| `.zone-s3 .table-compact thead tr { border-bottom-color: #5C4B3A }` | `#1A1A1A` | `#5C4B3A` | R+66 G+49 B+32 | **HIGH** -- visibly warm brown vs black |
| `.zone-s4 .table-compact thead tr { border-bottom-color: #4A3F35 }` | `#1A1A1A` | `#4A3F35` | R+48 G+37 B+27 | **HIGH** -- same family |
| `.zone-s1 h2 { color: #2A2420 }` | `#1A1A1A` | `#2A2420` | R+16 G+10 B+6 | LOW -- 28px heading, small delta |
| `.zone-s12 h2 { color: #2A2420 }` | `#1A1A1A` | `#2A2420` | R+16 G+10 B+6 | LOW -- same |
| `.zone-s11 .table-light thead tr { border-bottom-color: #DDD3C5 }` | `#D4C5B5` | `#DDD3C5` | R+9 G+14 B+16 | LOW -- 1px border, small delta |
| `.zone-s1 p { line-height: 1.8 }` | 1.7 | 1.8 | +0.1 | LOW -- ~1.6px per line |
| `.zone-s12 p { line-height: 1.8 }` | 1.7 | 1.8 | +0.1 | LOW -- same |

**VERDICT:** Proceed with all deletions per spec. The two HIGH-risk items (table header borders) will revert to the base dark color, which is consistent with the design system's default table treatment. Phase 3 will replace zone backgrounds and Phase 5 will rebuild spacing, so any minor visual artifacts from deallocation are temporary.
