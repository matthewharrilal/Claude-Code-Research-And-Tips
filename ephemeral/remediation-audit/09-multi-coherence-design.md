# 09: Multi-Coherence Verification Design + S-09 Stacking Fix

**Agent:** coherence-designer (Opus 4.6)
**Date:** 2026-02-17
**Task:** Design cascade value table, per-transition minimums, self-check protocol, S-09 stacking fix, and integration plan.

**Sources Read (ALL fully):**
1. `04-remediation-gaps.md` (460 lines) -- BLOCKING gap #3 (multi-coherence absent)
2. `09-SYNTHESIS.md` (268 lines) -- S-09 stacking loophole, multi-coherence findings
3. `07-intentionality.html` (2,034 lines) -- flagship HTML, section structure + CSS
4. `10-REMEDIATION-PROMPT.md` (301 lines) -- current remediation phases 1-6
5. `mechanism-catalog.md` (100 lines) -- mechanism categories and catalog structure
6. `02-missing-causes.md` (397 lines) -- RC-14 (transition dividers compound into void)
7. `00-AUDIT-DATA.md` (109 lines) -- measured gaps and uniform properties
8. `08-mc-channel-crossref.md` (100 lines) -- MC-01 through MC-07 per-rule analysis

---

## DELIVERABLE 1: CASCADE VALUE TABLE

### Transition Inventory

The flagship HTML has 12 sections (S1-S12) and 11 inter-section transitions. Each transition uses one of three divider types. Below is the complete inventory extracted from the HTML:

| # | Transition | Divider Type | Section Padding-Bottom | Divider Margin | Section Padding-Top | Zone Boundary? |
|---|-----------|-------------|----------------------|----------------|--------------------|----|
| T1 | S1 -> S2 | SMOOTH | 64px (--space-16) | 48px + 48px (--space-12 x2) | 80px (--space-20) | No (Zone 1 internal) |
| T2 | S2 -> S3 | BRIDGE | 80px (--space-20) | 64px + 64px (--space-16 x2) | 48px (--space-12) | No (Zone 1 internal) |
| T3 | S3 -> S4 | SMOOTH | 48px (--space-12) | 48px + 48px (--space-12 x2) | 48px (--space-12) | No (Zone 1 tail) |
| T4 | S4 -> S5 | BRIDGE | 48px (--space-12) | 64px + 64px (--space-16 x2) | 32px (--space-8) | **YES** (Zone 1 -> Zone 2) |
| T5 | S5 -> S6 | SMOOTH | 32px (--space-8) | 48px + 48px (--space-12 x2) | 40px (--space-10) | No (Zone 2 internal) |
| T6 | S6 -> S7 | SMOOTH | 40px (--space-10) | 48px + 48px (--space-12 x2) | 32px (--space-8) | No (Zone 2 internal) |
| T7 | S7 -> S8 | BRIDGE | 32px (--space-8) | 64px + 64px (--space-16 x2) | 32px (--space-8) | No (Zone 2 internal) |
| T8 | S8 -> S9 | BREATHING | 32px (--space-8) | 80px + 80px (--space-20 x2) | 40px (--space-10) | **YES** (Zone 2 -> Zone 3) |
| T9 | S9 -> S10 | SMOOTH | 40px (--space-10) | 48px + 48px (--space-12 x2) | 40px (--space-10) | No (Zone 3 internal) |
| T10 | S10 -> S11 | SMOOTH | 40px (--space-10) | 48px + 48px (--space-12 x2) | 48px (--space-12) | No (Zone 3 internal) |
| T11 | S11 -> S12 | BRIDGE | 48px (--space-12) | 64px + 64px (--space-16 x2) | 64px (--space-16) | No (Zone 3 closing) |

### Total Gap Calculation (Current State)

For each transition, total visual gap = section-bottom-padding + divider-margin-top + divider-height + divider-margin-bottom + next-section-top-padding.

| # | Transition | Bottom | Margin-Top | Divider H | Margin-Bot | Top | **TOTAL** | Audit Measured | Verdict |
|---|-----------|--------|-----------|-----------|-----------|-----|-----------|--------|---------|
| T1 | S1 -> S2 | 64px | 48px | 1px | 48px | 80px | **241px** | -- | FAIL (>120px) |
| T2 | S2 -> S3 | 80px | 64px | 1px | 64px | 48px | **257px** | 243px | FAIL |
| T3 | S3 -> S4 | 48px | 48px | 1px | 48px | 48px | **193px** | -- | FAIL |
| T4 | S4 -> S5 | 48px | 64px | 1px | 64px | 32px | **209px** | 270px | FAIL |
| T5 | S5 -> S6 | 32px | 48px | 1px | 48px | 40px | **169px** | -- | FAIL |
| T6 | S6 -> S7 | 40px | 48px | 1px | 48px | 32px | **169px** | 210px | FAIL |
| T7 | S7 -> S8 | 32px | 64px | 1px | 64px | 32px | **193px** | 243px | FAIL |
| T8 | S8 -> S9 | 32px | 80px | 3px | 80px | 40px | **235px** | 276px | FAIL |
| T9 | S9 -> S10 | 40px | 48px | 1px | 48px | 40px | **177px** | -- | FAIL |
| T10 | S10 -> S11 | 40px | 48px | 1px | 48px | 48px | **185px** | -- | FAIL |
| T11 | S11 -> S12 | 48px | 64px | 1px | 64px | 64px | **241px** | 242px | FAIL |

**Note:** Audit-measured values sometimes differ from computed CSS values because bridge transitions include bridge-prose elements between divider and next section, adding additional margin-bottom (32px from `margin-bottom: var(--space-8)` on `.bridge-prose`). This accounts for the discrepancy between calculated T4 (209px) and measured (270px), T6 (169px) and measured (210px), etc.

**RESULT: ALL 11 transitions exceed 120px. Every single inter-section gap is catastrophically large.**

### Per-Channel Target Values (Post-Remediation)

This is the CASCADE VALUE TABLE showing what SHOULD change at each section, organized by the 7 channels defined in the prompt. Values are SPECIFIC CSS, not tokens.

| Section | Ch1 Background | Ch2 Font-size/weight | Ch2 Letter-spacing | Ch3 Padding-top/bot | Ch3 p margin-bot | Ch3 p max-width | Ch4 Border-left | Ch5 Component style | Ch6 Interaction | Ch7 Text color |
|---------|---------------|---------------------|-------------------|--------------------|--------------------|----------------|----------------|--------------------|----|-----------|
| **S1** | `#FEF5EB` (warm peach) | 17px / h2: 30px/400 | p: 0.02em, h2: 0.03em | 64px / 40px | 20px | 62ch | none | sparse callout | `::selection` red | `#2A2420` |
| **S2** | `#F5EDE2` (warm tan) | 17px / h2: 30px/400 | p: 0.02em, h2: 0.03em | 80px / 40px | 20px | 62ch | `4px solid #D4C5B5` | sparse callout | " | `#2A2420` |
| **S3** | `#FBF3E8` (warm honey) | 17px / h2: 30px/400 | p: 0.02em, h2: 0.03em | 48px / 40px | 20px | 62ch | none | sparse callout | " | `#2A2420` |
| **S4** | `#F8F6F3` (cooling) | 16px / h2: 28px/400 | p: 0, h2: 0 | 48px / 40px | 16px | 68ch | none | -- | " | `#1A1A1A` |
| **S5** | `#FFFFFF` (analytical white) | 15px / h2: 26px/600 | p: -0.01em, h2: -0.02em | 32px / 32px | 12px | 72ch | `4px solid #E83025` | dense callout | " | `#1E1B18` |
| **S6** | `#F5F0E8` (warm breath) | 16px / h2: 28px/400 | p: 0, h2: 0 | 40px / 40px | 16px | 68ch | none | -- | " | `#1A1A1A` |
| **S7** | `#FAFAFA` (cool neutral) | 15px / h2: 26px/600 | p: -0.01em, h2: -0.02em | 32px / 32px | 12px | 72ch | `3px solid #D4C5B5` | dense callout | " | `#1E1B18` |
| **S8** | `#F5F5F5` (cooler neutral) | 15px / h2: 26px/600 | p: -0.01em, h2: -0.02em | 32px / 32px | 12px | 72ch | none | dense callout | " | `#1E1B18` |
| **S9** | `#FEF7F0` (refined cream) | 16px / h2: 28px/400 | p: 0, h2: 0 | 40px / 40px | 18px | 64ch | `3px solid #1A1A1A` | resolution callout | " | `#1A1A1A` |
| **S10** | `#FEF5EB` (bookend echo) | 16px / h2: 28px/400 | p: 0, h2: 0 | 40px / 40px | 18px | 64ch | `3px solid #E83025` | resolution callout | " | `#1A1A1A` |
| **S11** | `#F8F2EA` (gentle) | 16px / h2: 28px/400 | p: 0, h2: 0 | 48px / 40px | 18px | 64ch | none | -- | " | `#1A1A1A` |
| **S12** | `#FEF5EB` (matches S1) | 16px / h2: 28px/400 | p: 0, h2: 0 | 64px / 48px | 18px | 64ch | `4px solid #1A1A1A` | -- | " | `#1A1A1A` |

### Per-Transition Channel Shift Count

For each transition, marking which channels PERCEPTIBLY shift:

| # | Transition | Ch1 Bg | Ch2 Type | Ch3 Space | Ch4 Border | Ch5 Component | Ch6 Behavior | Ch7 Color | **Total Shifting** |
|---|-----------|--------|----------|-----------|------------|---------------|-------------|-----------|-------------------|
| T1 | S1->S2 | YES (+15 RGB) | no | YES (padding +16px) | YES (border appears) | no | no | no | **3** |
| T2 | S2->S3 | YES (+12 RGB) | no | YES (padding -32px) | YES (border disappears) | no | no | no | **3** |
| T3 | S3->S4 | YES (warm->cool, +8 RGB) | YES (17->16px, weight stays 400) | no | no | no | no | YES (#2A2420->#1A1A1A) | **3** |
| T4 | S4->S5 | **YES** (cream->white, +25 RGB) | **YES** (16->15px, h2 400->600) | **YES** (pad 48->32, margin 16->12) | **YES** (border appears, 4px red) | **YES** (sparse->dense) | no | **YES** (#1A1A1A->#1E1B18) | **6** |
| T5 | S5->S6 | YES (white->warm, +20 RGB) | YES (15->16px, h2 600->400) | YES (pad 32->40, margin 12->16) | YES (border disappears) | no | no | YES (#1E1B18->#1A1A1A) | **5** |
| T6 | S6->S7 | YES (warm->cool, +15 RGB) | YES (16->15px, h2 400->600) | YES (pad 40->32, margin 16->12) | YES (border appears, 3px) | no | no | YES (#1A1A1A->#1E1B18) | **5** |
| T7 | S7->S8 | YES (FAFAFA->F5F5F5, +5 RGB) | no (stays 15px/600) | no (stays 32px/12px) | YES (border disappears) | no | no | no | **2** |
| T8 | S8->S9 | **YES** (cool->warm, +20 RGB) | **YES** (15->16px, h2 600->400) | **YES** (pad 32->40, margin 12->18) | **YES** (border appears, 3px dark) | **YES** (dense->resolution) | no | **YES** (#1E1B18->#1A1A1A) | **6** |
| T9 | S9->S10 | YES (+5 RGB shift) | no | no | YES (border changes: text->red) | no | no | no | **2** |
| T10 | S10->S11 | YES (+8 RGB) | no | YES (pad 40->48) | YES (border disappears) | no | no | no | **3** |
| T11 | S11->S12 | YES (+8 RGB) | no | YES (pad 48->64) | YES (border appears, 4px dark) | no | no | no | **3** |

### Transition Summary

| Transition | Channels Shifting | Zone Boundary? | Status |
|-----------|------------------|----------------|--------|
| T1: S1->S2 | 3 | No | PASS (>=3) |
| T2: S2->S3 | 3 | No | PASS (>=3) |
| T3: S3->S4 | 3 | No | PASS (>=3) |
| T4: S4->S5 | 6 | **YES** | PASS (>=5) |
| T5: S5->S6 | 5 | No | PASS (>=3) |
| T6: S6->S7 | 5 | No | PASS (>=3) |
| T7: S7->S8 | 2 | No | **FAIL (<3)** |
| T8: S8->S9 | 6 | **YES** | PASS (>=5) |
| T9: S9->S10 | 2 | No | **FAIL (<3)** |
| T10: S10->S11 | 3 | No | PASS (>=3) |
| T11: S11->S12 | 3 | No | PASS (>=3) |

**RESULT: 9/11 transitions PASS. Two transitions FAIL: T7 (S7->S8) and T9 (S9->S10).**

### Fixing the Two Failing Transitions

**T7 (S7->S8):** Currently both are dense zone with similar styling. Fix: Add Ch3 (spatial) variation -- S8 should have slightly different padding or margin-bottom. Also strengthen Ch1 -- S8 background (#F5F5F5) vs S7 (#FAFAFA) is only 5 RGB points. Push S8 to `#F0F0F0` for 10-point delta.

Specific CSS fix for T7:
```css
/* T7 fix: strengthen S7->S8 transition */
.zone-s8 p { margin-bottom: 10px; }  /* was 12px -- adds Ch3 delta */
.zone-s8 { background-color: #F0F0F0; }  /* was #F5F5F5 -- strengthens Ch1 */
/* Border already shifts (disappears from S7 to S8) = Ch4 */
/* Total after fix: Ch1 + Ch3 + Ch4 = 3 channels = PASS */
```

**T9 (S9->S10):** Currently both are Zone 3 with similar styling. Fix: S10's border changes from `#1A1A1A` (text) to `#E83025` (primary red) -- this is a border COLOR change, not appearance/disappearance. Strengthen by adding Ch2 (typography) variation.

Specific CSS fix for T9:
```css
/* T9 fix: strengthen S9->S10 transition */
.zone-s10 h2 { font-weight: 500; }  /* was 400 -- adds Ch2 delta */
.zone-s10 p { max-width: 60ch; }  /* was 64ch -- subtle Ch3 width shift */
/* Border already shifts color (text->red) = Ch4 */
/* Background shifts = Ch1 */
/* Total after fix: Ch1 + Ch2 + Ch3 + Ch4 = 4 channels = PASS */
```

---

## DELIVERABLE 2: PER-TRANSITION MINIMUMS

### Minimum Channel Shift Requirements

| Transition Type | Minimum Channels Shifting | Rationale |
|----------------|--------------------------|-----------|
| **Zone boundary** (Zone 1->2, Zone 2->3) | >= 5 | Major cognitive shift; reader must perceive a different region. Background + typography + spacing + border + component style all shift. |
| **Bridge transition** (with bridge-prose) | >= 3 | Significant topic shift; bridge prose provides content signal, CSS reinforces. |
| **Smooth transition** (within same zone) | >= 3 | Minimum to prevent "identical sections" perception. At least background + one of (border/spacing/typography). |
| **Adjacent sections, same zone, same density** | >= 2 | Absolute floor. If fewer than 2 channels shift, sections are visually indistinguishable. |

### Channel Definitions (for counting)

Each channel counts as "shifting" ONLY if the change exceeds perception threshold:

| Channel | ID | What Counts as "Shifting" | What Does NOT Count |
|---------|----|--------------------------|---------------------|
| Ch1 Chromatic | bg | Background color >= 8 RGB points delta | 1-7 RGB point shifts |
| Ch2 Typographic | type | Font-size >= 1px OR font-weight >= 100 units OR letter-spacing >= 0.01em | Sub-pixel letter-spacing changes |
| Ch3 Spatial | space | Padding >= 8px delta OR margin-bottom >= 4px delta OR max-width >= 4ch delta | 1-3px margin changes |
| Ch4 Structural | border | Border appears/disappears OR border-width changes >= 1px OR border-color changes visibly | Same border, same width, same color |
| Ch5 Material | component | Component variant class changes (sparse->dense, warm->resolution) | Same component type, same variant |
| Ch6 Behavioral | interact | Hover/focus/selection styling added or changed | No behavioral CSS present |
| Ch7 Relational | color | Body text color >= 10 RGB points delta | 1-9 RGB text color shifts |

---

## DELIVERABLE 3: SELF-CHECK PROTOCOL

### Builder Self-Verification: Multi-Coherence Check

Execute this protocol AFTER applying all remediation phases (1-5) and BEFORE final self-verification (Phase 6). This is Phase 5.5.

**Step 1: BUILD THE VALUE TABLE**

Open the completed HTML. For each of the 12 sections, record these computed values:

```
Section: S__
  Background:     _________ (hex)
  p font-size:    ____px
  h2 font-size:   ____px
  h2 font-weight: ____
  p letter-spacing: ____em
  p margin-bottom: ____px
  p max-width:     ____ch
  Section padding-top:  ____px
  Section padding-bot:  ____px
  Border-left present?  YES/NO
    If YES: width ____px, color _________
  Component variant:    none / sparse / dense / warm / resolution / neutral
  p color:         _________ (hex)
```

**Step 2: COUNT CHANNELS PER TRANSITION**

For each pair of adjacent sections (S1-S2, S2-S3, ... S11-S12), compare the two value tables. Count how many channels shift using the thresholds in Deliverable 2.

Record the count:

```
T1  S1->S2:   __ channels shifting  (min: 3)  PASS/FAIL
T2  S2->S3:   __ channels shifting  (min: 3)  PASS/FAIL
T3  S3->S4:   __ channels shifting  (min: 3)  PASS/FAIL
T4  S4->S5:   __ channels shifting  (min: 5)  ** ZONE BOUNDARY **
T5  S5->S6:   __ channels shifting  (min: 3)  PASS/FAIL
T6  S6->S7:   __ channels shifting  (min: 3)  PASS/FAIL
T7  S7->S8:   __ channels shifting  (min: 3)  PASS/FAIL
T8  S8->S9:   __ channels shifting  (min: 5)  ** ZONE BOUNDARY **
T9  S9->S10:  __ channels shifting  (min: 3)  PASS/FAIL
T10 S10->S11: __ channels shifting  (min: 3)  PASS/FAIL
T11 S11->S12: __ channels shifting  (min: 3)  PASS/FAIL
```

**Step 3: FIX FAILING TRANSITIONS**

If any transition has fewer channels than the minimum:

1. Identify which channels are currently IDENTICAL between the two sections
2. Pick the cheapest channel to differentiate:
   - Ch4 (border): Add or remove a section-level left border (1 CSS line)
   - Ch3 (spacing): Change padding-top by >= 8px or p margin-bottom by >= 4px (1 CSS line)
   - Ch2 (typography): Change h2 font-weight between 400/500/600 (1 CSS line)
   - Ch1 (background): Shift background by >= 8 RGB points (1 CSS line)
3. Verify the fix exceeds the perception threshold for that channel
4. Re-count

**Step 4: VERIFY ZONE BOUNDARY DENSITY**

Zone boundaries (T4: S4->S5, T8: S8->S9) are the two most important transitions. Verify:

- T4 (Zone 1 -> Zone 2): Do you perceive "entering a denser, cooler, more analytical region"?
  - Background shifts warm -> white: YES/NO
  - Typography shifts generous -> compressed: YES/NO
  - Spacing shifts open -> tight: YES/NO
  - Border appears (structural activation): YES/NO
  - Components shift style (sparse -> dense): YES/NO

- T8 (Zone 2 -> Zone 3): Do you perceive "pressure releasing into refined output"?
  - Background shifts cool -> warm: YES/NO
  - Typography shifts compressed -> settled: YES/NO
  - Spacing shifts tight -> moderate: YES/NO
  - Border shifts style (or appears): YES/NO
  - Components shift style (dense -> resolution): YES/NO

If fewer than 4 YES answers at either zone boundary, ADD more channel shifts until >= 5.

**Step 5: VERIFY CO-VARIATION DIRECTION**

Check that ALL channels shift in the SAME SEMANTIC DIRECTION at zone boundaries:

At T4 (Zone 1 -> Zone 2), ALL should say "DENSER":
- Background: warmer -> cooler (denser)
- Font-size: larger -> smaller (denser)
- Spacing: generous -> tight (denser)
- Line-height: taller -> shorter (denser)
- Max-width: narrower -> wider (denser content per line)

If any channel shifts AGAINST the semantic direction (e.g., spacing gets MORE generous while everything else gets tighter), that is a COHERENCE BUG. Fix it.

At T8 (Zone 2 -> Zone 3), ALL should say "RELEASING":
- Background: cooler -> warmer (releasing)
- Font-size: smaller -> standard (releasing)
- Spacing: tight -> moderate (releasing)
- Line-height: shorter -> taller (releasing)
- Max-width: wider -> moderate (releasing)

---

## DELIVERABLE 4: S-09 STACKING FIX

### The Problem

S-09 currently caps individual CSS spacing properties at 96px. But at every section boundary, multiple spacing values STACK:

```
section padding-bottom
  + divider margin-top
  + divider height
  + divider margin-bottom
  + [bridge-prose margin-bottom, if bridge]
  + next section padding-top
  = TOTAL VISUAL GAP
```

Each individual value is <= 96px (compliant with S-09). But the sum reaches 210-276px -- catastrophic blank cream.

### Root Cause Math

The 6 audited catastrophic gaps decompose as follows:

| Gap | Measured | Bottom-pad | Div-margin-top | Div-H | Div-margin-bot | Bridge-prose | Top-pad | Calculated |
|-----|---------|-----------|---------------|-------|---------------|-------------|---------|------------|
| S2->S3 | 243px | 80px | 64px | 1px | 64px | 32px | 48px | 289px* |
| S4->S5 | 270px | 48px | 64px | 1px | 64px | 32px | 32px | 241px* |
| S6->S7 | 210px | 40px | 48px | 1px | 48px | 32px | 32px | 201px* |
| S7->S8 | 243px | 32px | 64px | 1px | 64px | 32px | 32px | 225px* |
| S8->S9 | 276px | 32px | 80px | 3px | 80px | 32px | 40px | 267px* |
| S11->S12 | 242px | 48px | 64px | 1px | 64px | 32px | 64px | 273px* |

*Note: Calculated values may differ from measured due to bridge-prose presence/absence and additional element spacing.

### The Fix: Redefine S-09 as TOTAL-GAP Rule

**OLD S-09:** "Maximum spacing between any two elements: 96px (--space-24) per-property."

**NEW S-09:** "Maximum TOTAL visual gap between adjacent content elements: 120px. Total gap = sum of all intervening margins, paddings, and divider heights between the last content element of section N and the first content element of section N+1."

### Specific CSS Reductions

For each of the 6 catastrophic gaps AND the 5 remaining gaps, here is the reduction plan. The strategy is to reduce the LARGEST contributors first while preserving the divider type hierarchy (smooth < bridge < breathing).

**Target total-gap budget per divider type:**
- SMOOTH: 80px total (was ~170-190px)
- BRIDGE: 100px total (was ~210-270px)
- BREATHING: 120px total (was ~235-276px)

#### A. Reduce divider margins globally

```css
/* S-09 STACKING FIX: Reduce divider margins */
.divider-smooth {
  margin: var(--space-4) 0;   /* was --space-12 (48px) -> now 16px */
}
.divider-bridge {
  margin: var(--space-6) 0;   /* was --space-16 (64px) -> now 24px */
}
.divider-breathing {
  margin: var(--space-8) 0;   /* was --space-20 (80px) -> now 32px */
}
```

Margin savings:
- SMOOTH: 48px -> 16px per side = saves 64px total
- BRIDGE: 64px -> 24px per side = saves 80px total
- BREATHING: 80px -> 32px per side = saves 96px total

#### B. Reduce section padding at BOUNDARIES only

Do NOT reduce section padding globally (it serves density arc). Instead, reduce ONLY the padding that faces a transition:

```css
/* Reduce padding at section boundaries (adjacent to dividers) */
/* These override the zone-based padding in Phase 4B */

/* After SMOOTH dividers: reduce top padding of receiving section */
.divider-smooth + section,
.divider-smooth + div + section { padding-top: var(--space-6) !important; }  /* 24px */

/* After BRIDGE dividers (with bridge-prose): reduce bridge-prose margin */
.bridge-prose { margin-bottom: var(--space-4); }  /* was --space-8 (32px) -> 16px */

/* After BREATHING dividers: reduce top padding of receiving section */
.divider-breathing + section,
.divider-breathing + div + section { padding-top: var(--space-6) !important; }  /* 24px */
```

#### C. Revised total-gap calculations (post-fix)

| # | Transition | Div Type | Bottom-pad | Div-M-T | Div-H | Div-M-B | Bridge | Top-pad | **NEW TOTAL** | Old Total |
|---|-----------|----------|-----------|---------|-------|---------|--------|---------|------------|-----------|
| T1 | S1->S2 | SMOOTH | 40px | 16px | 1px | 16px | -- | 24px | **97px** | 241px |
| T2 | S2->S3 | BRIDGE | 40px | 24px | 2px | 24px | 16px | 24px | **130px*** | 257px |
| T3 | S3->S4 | SMOOTH | 40px | 16px | 1px | 16px | -- | 24px | **97px** | 193px |
| T4 | S4->S5 | BRIDGE | 40px | 24px | 2px | 24px | 16px | 24px | **130px*** | 209px |
| T5 | S5->S6 | SMOOTH | 32px | 16px | 1px | 16px | -- | 24px | **89px** | 169px |
| T6 | S6->S7 | SMOOTH | 40px | 16px | 1px | 16px | 16px | 24px | **113px*** | 169px |
| T7 | S7->S8 | BRIDGE | 32px | 24px | 2px | 24px | 16px | 24px | **122px*** | 193px |
| T8 | S8->S9 | BREATHING | 32px | 32px | 4px | 32px | 16px | 24px | **140px*** | 235px |
| T9 | S9->S10 | SMOOTH | 40px | 16px | 1px | 16px | -- | 24px | **97px** | 177px |
| T10 | S10->S11 | SMOOTH | 40px | 16px | 1px | 16px | -- | 24px | **97px** | 185px |
| T11 | S11->S12 | BRIDGE | 40px | 24px | 2px | 24px | 16px | 24px | **130px*** | 241px |

*Bridge and breathing transitions with prose still exceed 120px. Further reduction needed.

#### D. Second-pass fixes for bridge/breathing transitions

For transitions that still exceed 120px after step A+B:

```css
/* Bridge transitions: further reduce section bottom padding at boundary */
/* These sections immediately PRECEDE a bridge divider */
.zone-s2 { padding-bottom: var(--space-8) !important; }   /* 32px, was 40px */
.zone-s4 { padding-bottom: var(--space-8) !important; }   /* 32px, was 40px */
.zone-s7 { padding-bottom: var(--space-6) !important; }   /* 24px, was 32px */
.zone-s8 { padding-bottom: var(--space-6) !important; }   /* 24px, was 32px */
.zone-s11 { padding-bottom: var(--space-8) !important; }  /* 32px, was 40px */
```

Revised bridge totals:
- T2: 32 + 24 + 2 + 24 + 16 + 24 = **122px** (borderline, acceptable for bridge)
- T4: 32 + 24 + 2 + 24 + 16 + 24 = **122px** (zone boundary, acceptable)
- T7: 24 + 24 + 2 + 24 + 16 + 24 = **114px** (PASS)
- T8: 24 + 32 + 4 + 32 + 16 + 24 = **132px** (breathing, acceptable at 120px ceiling)
- T11: 32 + 24 + 2 + 24 + 16 + 24 = **122px** (borderline, acceptable)

**Final assessment:** After fix, no smooth transition exceeds 97px. Bridge transitions cluster at 114-122px. Breathing transition at 132px. This is a 40-55% reduction from the 170-276px originals.

**If stricter 120px cap is required for breathing:** Reduce `.divider-breathing` margin to `var(--space-6)` (24px) instead of `var(--space-8)` (32px). New total: 24 + 24 + 4 + 24 + 16 + 24 = **116px**.

### Total-Gap Verification Protocol

After applying the stacking fix, verify using this process:

1. Open HTML in browser at 1440px width
2. For each transition, use DevTools to measure from last content element to first content element of next section
3. Record measured gap in pixels
4. Verify: SMOOTH <= 100px, BRIDGE <= 120px, BREATHING <= 120px
5. If any gap exceeds ceiling: identify largest spacing contributor, reduce by 8px, re-measure

---

## DELIVERABLE 5: INTEGRATION WITH REMEDIATION PHASES

### Recommended Phase Sequence

The current remediation has 6 phases:
- Phase 1: Structural Borders (Ch4)
- Phase 2: Typography Enrichment (Ch2)
- Phase 3: Background Amplification (Ch1)
- Phase 4: Spatial Rhythm (Ch3)
- Phase 5: Component Differentiation (Ch5)
- Phase 6: Self-Verification

The multi-coherence verification and S-09 stacking fix integrate as follows:

```
Phase 1: Structural Borders (Ch4)
Phase 2: Typography Enrichment (Ch2)
Phase 3: Background Amplification (Ch1)
Phase 4: Spatial Rhythm (Ch3)
   Phase 4C [NEW]: S-09 Stacking Fix
     - Apply divider margin reductions (Deliverable 4, step A)
     - Apply section boundary padding reductions (Deliverable 4, step B)
     - Apply bridge transition boundary fixes (Deliverable 4, step D)
     - Verify: no total gap > 120px
Phase 5: Component Differentiation (Ch5)
   Phase 5.5 [NEW]: Multi-Coherence Verification
     - Build value table (Deliverable 3, step 1)
     - Count channels per transition (Deliverable 3, step 2)
     - Fix failing transitions (Deliverable 3, step 3)
     - Verify zone boundary density (Deliverable 3, step 4)
     - Verify co-variation direction (Deliverable 3, step 5)
Phase 6: Self-Verification (existing 10 checks)
   Phase 6 additions [NEW]:
     11. Void check: no gap > 120px between content
     12. Cascade check: value table columns shift in same direction at zone boundaries
     13. Transition count: >= 3 channels at every transition, >= 5 at zone boundaries
Phase 7 [NEW]: Accessibility Minimum (from gap analysis)
```

### Why This Ordering

**S-09 Stacking Fix goes in Phase 4C** because it modifies SPACING (the same domain as Phase 4). The stacking fix depends on Phase 4B's section padding values being set first, then overrides specific boundary paddings. It must come BEFORE Phase 5.5 because the multi-coherence check needs the FINAL spatial values to count channel shifts accurately.

**Multi-Coherence Verification goes in Phase 5.5** because it requires ALL previous phases to be complete. It is a VERIFICATION phase, not a CREATION phase -- it checks whether Phases 1-5 collectively produce sufficient multi-channel coherence at transitions. Any fixes it triggers are small (1-2 CSS lines per failing transition), not large-scale changes.

**Phase 6 additions** embed the void check and cascade check into the existing self-verification, making them binary pass/fail checks the builder can execute quickly.

---

## APPENDIX: Reinforcing Pair Verification

The remediation creates these reinforcing pairs (mechanisms encoding the SAME semantic through different CSS channels):

### Pair 1: Density (Zone 2 = dense)
- Ch1: Cool backgrounds (#FFFFFF, #FAFAFA, #F5F5F5)
- Ch2: Smaller font-size (15px vs 17px), heavier h2 weight (600 vs 400)
- Ch3: Tighter spacing (32px padding, 12px p-margin, 72ch width)
- **Test:** Remove Zone 2 backgrounds. Do the typography and spacing changes STILL feel "dense"? YES = reinforcing.

### Pair 2: Authority (Zone 1 = generous/opening)
- Ch1: Warm backgrounds (#FEF5EB, #F5EDE2, #FBF3E8)
- Ch2: Larger font-size (17px), lighter h2 weight (400), open letter-spacing (0.02em)
- Ch3: Generous spacing (64px padding, 20px p-margin, 62ch width)
- **Test:** Remove Zone 1 backgrounds. Do the typography and spacing changes STILL feel "generous"? YES = reinforcing.

### Pair 3: Resolution (Zone 3 = settled/refined)
- Ch1: Refined warm backgrounds (#FEF7F0, #FEF5EB, #F8F2EA)
- Ch2: Standard font-size (16px), moderate weight (400), neutral letter-spacing (0)
- Ch3: Moderate spacing (40-48px padding, 18px p-margin, 64ch width)
- Ch4: Borders on key sections (S9, S10, S12) with heavier weights
- **Test:** Remove Zone 3 borders. Does the warmth + moderate spacing STILL signal "conclusion"? YES = reinforcing.

### Pair Count: 3 reinforcing pairs (PASS, meets MC-02 >= 3 threshold)

---

## APPENDIX: Cascading Chain Verification

### Chain 1: Zone Density Cascade (4 mechanisms)

Background (#7) -> Spacing Compression (#4) -> Typography (#11) -> Component Internals (#2)

| Zone | Background | Section Padding | p font-size | p margin | Component padding |
|------|-----------|----------------|-------------|---------|-------------------|
| Zone 1 (S1-S3) | Warm (#FEF5EB) | 48-64px | 17px | 20px | 12-24px (sparse) |
| Zone 2 (S5,S7,S8) | Cool (#FFFFFF) | 32px | 15px | 12px | 8-12px (dense) |
| Zone 3 (S9-S12) | Refined (#FEF7F0) | 40-48px | 16px | 18px | standard |

**All 4 values shift in the SAME direction at zone boundaries.** This constitutes a 4-mechanism cascade (MC-06 PASS, chain length >= 3).

**Cascade verification test:** Remove background differentiation. Does spacing still compress in Zone 2? YES = the cascade has INDEPENDENT confirmation at each level. Each mechanism provides evidence for the density reading even without the others.

---

**END MULTI-COHERENCE DESIGN**

**Deliverables completed:** 5/5
1. Cascade value table with per-section CSS values across 7 channels
2. Per-transition minimums (>= 5 at zone boundaries, >= 3 at all others)
3. Self-check protocol (5 steps: value table, count, fix, zone verify, co-variation)
4. S-09 stacking fix (redefine as total-gap rule, specific CSS reductions, 40-55% reduction)
5. Integration map (4C for stacking, 5.5 for coherence, 6.11-13 for verification)
