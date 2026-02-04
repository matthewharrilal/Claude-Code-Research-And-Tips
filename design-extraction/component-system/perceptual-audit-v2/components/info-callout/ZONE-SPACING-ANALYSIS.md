# Zone Spacing Analysis: Info Callout (Revised)

**Component:** Info Callout
**Screenshot:** `info-callout-L3-revised.png`
**Analysis Date:** 2026-02-03
**Previous Score:** 2.5/5 (mechanical uniform padding)

---

## Step 1: Spacing Audit

### External Margins
- **Above callout:** Generous (~32-40px from section headers)
- **Below callout:** Consistent (~24-32px before next content)
- **Horizontal:** Full-width within content column, no lateral margins

### Internal Padding
- **Top:** ~24px - creates entry breathing room
- **Left:** ~20px (plus ~4px for accent bar = ~24px total visual offset)
- **Right:** ~20px - matches left for content balance
- **Bottom:** ~28px - extra closure weight, settles the content

### Label-to-Content Gap
- **Label to body text:** ~8px - tight semantic coupling
- **Label is ALL-CAPS, small size** - creates visual separation despite tight gap
- The uppercase treatment + size differential does MORE work than raw pixel gap

### Paragraph Spacing
- **Inter-paragraph gap (multi-paragraph variant):** ~16px
- **Comfortable reading rhythm** without feeling disconnected

### Accent Bar
- **Width:** ~4px solid vertical bar
- **Full height:** Runs entire component height
- **Color:** Warm tan/brown (default), blue (tinted variant)

---

## Step 2: Rhythm Assessment

### Breathing Room at Top
**Yes.** The 24px top padding creates a clear "entrance" moment. The eye lands, the label announces what's coming, and there's enough space to register "I'm entering a callout zone" before content begins.

### Label Tightly Coupled to Content
**Yes.** The 8px gap is intentionally snug. The label (NOTE, IMPORTANT, INFO) acts as a **semantic header** for the body text. They read as a unit, not as separate elements. The ALL-CAPS treatment and smaller size create visual hierarchy WITHOUT needing large spacing.

This is the key insight: **typographic differentiation reduces spacing requirements.**

### Closure at Bottom
**Yes.** The 28px bottom padding is noticeably heavier than top (24px). This creates:
1. **Visual "settling"** - content feels grounded, not floating
2. **Clear exit** - the extra 4px signals "this thought is complete"
3. **Asymmetric intentionality** - NOT mechanical, clearly a design decision

### Rhythm Rating: **4/5**

The asymmetry (24/20/28) creates genuine rhythm. It's not metronomic (16/16/16/16) but has the syncopation of intentional design. The only reason it's not 5/5: the difference is subtle enough that casual observation might miss the intentionality. A bolder choice (like 20/16/32) would be more perceptually obvious.

---

## Step 3: KortAI Alignment

**Reference principle:** *"Each piece has room to be considered without feeling isolated."*

### Does Spacing Create Reading Flow?
**Yes.** The progression is:
1. **Enter** (24px top) - pause, orient
2. **Label** (small caps) - announces type
3. **Gap** (8px) - tight semantic link
4. **Body** - the actual message
5. **Exit** (28px bottom) - close, settle

This is a **reading journey**, not just stacked boxes.

### Is Density Comfortable?
**Yes.** The callouts don't feel cramped OR sparse. Looking at the multi-paragraph variant:
- Two paragraphs fit comfortably
- Inter-paragraph gap (16px) maintains coherence
- Inline code (`CLAUDE.md`, `--reload`) has breathing room
- Total height feels proportional to content

### KortAI Alignment: **Strong**

The revised spacing achieves KortAI's ideal: content is considered (there's pause before and after), but nothing feels orphaned. The label+body unit reads as one thought. The asymmetric padding creates "entrance" and "exit" moments.

---

## Step 4: Score the Spacing

| Criterion | Previous (2.5/5) | Revised | Change |
|-----------|------------------|---------|--------|
| Top breathing room | Adequate | Intentional entry | +0.5 |
| Label coupling | Mechanical | Semantic unity | +0.5 |
| Bottom closure | Equal to top | Weighted settlement | +0.5 |
| Asymmetric intentionality | None | Clear design choice | +0.5 |
| Typography-spacing synergy | Basic | Caps treatment reduces gap need | +0.5 |

### New Score: **4.5/5**

**Reasoning:**
- The asymmetry (24/20/28) creates genuine rhythm
- Label-to-body gap (8px) works because typography does heavy lifting
- Bottom weight creates closure without feeling heavy-handed
- Multi-paragraph variant proves the system scales

**Why not 5/5:**
- The asymmetry is subtle (24 vs 28 = 4px difference)
- Could benefit from more dramatic bottom weight for stronger "settle"
- Tinted variant background might warrant different internal padding (but maintains consistency)

---

## Step 5: Perceptual Truth (Revised)

> **"The spacing breathes you in at top, binds label to message as a single thought, and settles you firmly at the bottom - a reading journey, not a box."**

---

## Visual Verification

### Default Variant (NOTE)
- Cream background, brown accent bar
- Single line of body text with inline code
- Spacing feels proportional to content length

### Multi-Paragraph Variant (IMPORTANT)
- Same cream background, same accent bar
- Two paragraphs with inline code
- Inter-paragraph gap maintains coherence
- Proves the spacing system scales

### In-Context Variant (NOTE)
- Nested between body paragraphs
- External margins create clear separation from surrounding text
- Callout reads as "aside" without breaking reading flow

### Tinted Variant (INFO)
- Light blue background, blue accent bar
- Same internal spacing as default
- Background color adds ~2px perceptual padding (optical adjustment NOT made)
- Still feels appropriate - the tint is subtle enough

---

## Recommendations for Further Refinement

### Consider (Low Priority)
1. **Bolder bottom weight:** 32px instead of 28px for more obvious settle
2. **Tinted variant adjustment:** +2px vertical padding to compensate for background perceptual shrink
3. **Multi-paragraph inter-gap:** 20px instead of 16px for longer callouts (3+ paragraphs)

### Keep As-Is
- Label-to-body gap (8px) - typography carries hierarchy
- Side padding (20px) - consistent, comfortable
- Top entry (24px) - clear without excessive

---

## Comparison: Before vs After

| Aspect | Before (Uniform) | After (Asymmetric) |
|--------|------------------|-------------------|
| Top padding | 16px | 24px |
| Side padding | 16px | 20px |
| Bottom padding | 16px | 28px |
| Label-body gap | 6px | 8px |
| Perceptual effect | Mechanical box | Intentional rhythm |
| Reading flow | Container-first | Content-first |

The revised spacing transforms the callout from "content in a box" to "guided reading moment."

---

*Analysis complete. Score improved from 2.5/5 to 4.5/5.*
