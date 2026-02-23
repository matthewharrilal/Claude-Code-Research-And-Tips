# Builder Recipe: Scaffolding + Disposition (Layers 3-4)
Date: 2026-02-23
Status: AUTHORITATIVE (conforms to council-verdict.md)
Items covered: 70 SCAFFOLDING (Layer 3) + 76 DISPOSITION (Layer 4) = 146 items total
Format: RECIPE (sequenced steps with Read/Select/Deploy/Assess verbs)
Evidence status for D-01 through D-08: EXPERIMENTAL (council verdict Part 5, item 9)
Framing: PURPOSE + VOCABULARY (council verdict: "activation" RETIRED)

---

## How to Use This Document

This is a **sequenced recipe**, not a checklist. Work through it in order. Each phase builds on the previous one. You have **80% creative authority** within identity constraints — this recipe provides PURPOSE (why) and VOCABULARY (what's available), and you decide HOW to combine them to serve the page.

Per council verdict (CF-01): this recipe is part of ~3,600 total builder input lines (including reference files shared with v2). The improvement is FORMAT (recipe vs checklist) and STRUCTURE (layered constraint architecture), not volume reduction.

---

## PHASE 1: READ YOUR VOCABULARY

Before writing any CSS, read these files to internalize the design vocabulary.

### Step 1.1: Read tokens.css (183 lines) — shared vocabulary

Read `tokens.css` cover to cover. This file provides the CSS custom properties that form family DNA across all pages in the design system.

**What survives compression and appears here:**
- Hex colors (#E83025) [ITEM 7, extract-d12-d14.md, VA L980]
- Pixel measurements (64px) [ITEM 8, extract-d12-d14.md, VA L981]
- Border weights (4px/3px/1px) [ITEM 9, extract-d12-d14.md, VA L982]
- Font sizes (1rem, 0.875rem) [ITEM 10, extract-d12-d14.md, VA L983]
- Spacing scale (4-96px) [ITEM 11, extract-d12-d14.md, VA L984]
- Token names (--color-primary) [ITEM 12, extract-d12-d14.md, VA L985]

> These are your building blocks. They ensure ~80% cross-page coherence automatically.
> [ITEM 084, extract-d15-d17.md, VA L1318-1319]
> [ITEM 085, extract-d15-d17.md, VA L1322]
> [ITEM 086, extract-d15-d17.md, VA L1322]

### Step 1.2: Read components.css (290 lines) — shared component DNA

Read `components.css` to understand the pre-built component library.

> [ITEM 087, extract-d15-d17.md, VA L1323]
> [ITEM 088, extract-d15-d17.md, VA L1323]

These two files are provided as **direct file routes** — they bypass the brief and go straight to you uncompressed.
> [ITEM 20, extract-d04-d05.md, VA L415-416]
> [ITEM 52, extract-d01-d03.md, VA L107]
> [ITEM 53, extract-d01-d03.md, VA L108]
> [ITEM 18, extract-d04-d05.md, VA L413]
> [ITEM 19, extract-d04-d05.md, VA L413]

### Step 1.3: Read the 73-line template — shared identity

The 73-line template embeds soul constraints. It provides the identity frame.
> [ITEM 089, extract-d15-d17.md, VA L1324]
> [ITEM 090, extract-d15-d17.md, VA L1324]

### Step 1.4: Assess — do you know the vocabulary?

After reading, you should be able to answer:
- What are the primary, background, and text colors?
- What is the font trinity?
- What border weights define the hierarchy?
- What spacing scale is available?

If any answer is unclear, re-read the relevant file before proceeding.

---

## PHASE 2: SELECT YOUR PER-PAGE CREATIVE DECISIONS

These are the things that **vary per page** — your creative territory within the 80% authority zone. Each page is unique because of these decisions.

> [ITEM 074, extract-d15-d17.md, VA L1306]

### Step 2.1: Select zone background strategy + colors

Choose how background colors differentiate your page's zones. The backgrounds should make each zone feel like a distinct room.

> [ITEM 075, extract-d15-d17.md, VA L1306]

**Calibration (from perception thresholds — delivered as calibration, not pass/fail):**
- 15 RGB delta = FLOOR (minimum to be perceptible)
- 25-50 RGB delta = COMPOSITIONAL (creates distinct atmosphere per zone)
- Backgrounds that differ by <15 RGB points are invisible to the human eye

> [ITEM 047, extract-d21-d25.md, VA L1697]

**Anti-pattern: threshold gaming.** Using 16 RGB and 0.026em everywhere passes the floor but creates calibrationally flat output. 15 is the floor, not the target. Subtle and dramatic should be DIFFERENT values.

> [ITEM 016, extract-d15-d17.md, VA L1173-1176]
> [ITEM 017, extract-d15-d17.md, VA L1173-1176]
> [ITEM 9, extract-d18-d20.md, VA L1371]
> [ITEM 10, extract-d18-d20.md, VA L1372-1373]
> [ITEM 6, extract-d18-d20.md, VA L1347-1357]

### Step 2.2: Select type scale values + naming

Choose how typography varies across zones and content types.

> [ITEM 076, extract-d15-d17.md, VA L1307]

### Step 2.3: Select structural metaphor vocabulary

Derive a governing metaphor from the content. Name your CSS custom properties by CONCEPT, not by position.

> [ITEM 077, extract-d15-d17.md, VA L1308]

**COMPOSED mode indicator:** `--dispatch-open`, `--dispatch-tactical` (named by concept)
**APPLIED mode indicator:** `--bg-z1`, `--bg-z2` (named by position — avoid this)

> [ITEM 58, extract-d18-d20.md, VA L1507-1509]
> [ITEM 59, extract-d18-d20.md, VA L1507-1509]

Concept-based names PREDICT other CSS properties — if your naming scheme carries meaning, the rest of your CSS decisions flow from it.

> [ITEM 63, extract-d18-d20.md, VA L1513-1515]

**THE SMOKING GUN:** CSS custom properties naming is the strongest single indicator of composed vs applied mode.
> [ITEM 57, extract-d18-d20.md, VA L1502]

When CSS custom properties are named by concept rather than function, the builder is in COMPOSED mode.
> [ITEM 61, extract-d18-d20.md, VA L1512]

### Step 2.4: Select callout variant semantics

Decide how callouts adapt to zone context. In composed mode, callouts should modulate per zone:

> [ITEM 078, extract-d15-d17.md, VA L1309]

**Reference values for zone-adapted callouts:**
- Zone 1 (opening): padding 20px 24px (generous) [ITEM 66, extract-d18-d20.md, VA L1524]
- Zone 3 (dense): padding 12px 16px (compressed) [ITEM 67, extract-d18-d20.md, VA L1525]
- Zone 3 border-left-width: 5px (heavier — the compression emphasizes) [ITEM 68, extract-d18-d20.md, VA L1526]

Contrast with APPLIED mode where callouts are styled identically across all zones:
> [ITEM 64, extract-d18-d20.md, VA L1520-1521]
> [ITEM 65, extract-d18-d20.md, VA L1523-1526]

### Step 2.5: Select component selection + layout

Choose which components to use and how to lay them out. The brief's content map tells you what each section needs.

> [ITEM 079, extract-d15-d17.md, VA L1310]

**Reader model axis values (select based on content analysis):**

Axis 1 — Info Density:
- line-height: 1.5 (expert) ... 1.8 (general) [ITEM 83, extract-d12-d14.md, VA L1089]
- font-size: 15px (expert) ... 18px (general) [ITEM 84, extract-d12-d14.md, VA L1090]

> [ITEM 82, extract-d12-d14.md, VA L1088-1091]

Axis 2 — Visual Complexity:
- 3-4 components/viewport (expert) ... 2 (general) [ITEM 86, extract-d12-d14.md, VA L1094]
- Compound grids (expert) ... Simple stacks (general) [ITEM 87, extract-d12-d14.md, VA L1095]

Axis 4 — Navigation:
- Optional TOC (expert) ... Mandatory TOC + map (general) [ITEM 92, extract-d12-d14.md, VA L1102]
- Expert scrolls linearly ... Reader needs wayfinding [ITEM 93, extract-d12-d14.md, VA L1103]

Axis 5 — Entry Velocity:
- Minimal header (expert) ... Expansive header (general) [ITEM 95, extract-d12-d14.md, VA L1106]
- 30-50% less header height (expert) ... Full orientation (general) [ITEM 96, extract-d12-d14.md, VA L1107]

### Step 2.6: Select container width

Choose based on content density. Both are within identity constraints.

> [ITEM 080, extract-d15-d17.md, VA L1311]

Container must be 940-960px (soul constraint). 1100px is available for some layouts but the 940-960 range is the default.

### Step 2.7: Select hover behavior patterns

Choose how interactive elements respond.

> [ITEM 081, extract-d15-d17.md, VA L1312]

### Step 2.8: Select transition type vocabulary

Choose how zones transition into each other. You need at least 3 distinct transition types (not 1 uniform divider).

> [ITEM 082, extract-d15-d17.md, VA L1313]

**Reference: Three transition weights**
- Light transition: 1px border + 48px gap = legato [ITEM 64, extract-d12-d14.md, VA L1053]
- Medium transition: 3px border + 80px gap = breathing rest [ITEM 65, extract-d12-d14.md, VA L1054]
- Heavy transition: colored bg + text = full stop [ITEM 66, extract-d12-d14.md, VA L1055]

CD-006 uses 3 distinct transition types. Gas Town uses 1 (uniform dividers) = TEMPORAL MONOTONY.
> [ITEM 67, extract-d12-d14.md, VA L1057]
> [ITEM 68, extract-d12-d14.md, VA L1058]

### Step 2.9: Assess — are your selections coherent?

Before building, review all selections together. Do they serve a single governing logic? Can you state that logic in one sentence?

If your selections feel like isolated decisions rather than aspects of one idea, revisit the structural metaphor (Step 2.3) and let it unify them.

---

## PHASE 3: DEPLOY YOUR SCAFFOLDING

Build the page zone by zone, deploying your selected vocabulary.

### Step 3.1: Deploy the 6-channel framework

Your page has 6 channels that shift across zone boundaries. Use the value tables from the brief to deploy these.

> [ITEM 56, extract-d06-d08.md, VA L599-600]
> [ITEM 57, extract-d06-d08.md, VA L600]
> [ITEM 101, extract-d06-d08.md, VA L667-677]

The 4 CSS-fixable dimensions from the 10-dimension gap analysis:
1. Scale Hierarchy (3.0/5 current) [ITEM 82, extract-d06-d08.md, VA L667-668]
2. Channel Shifts (3.0/5 current) [ITEM 83, extract-d06-d08.md, VA L670-671]
3. Emotional Arc (3.5/5 current) [ITEM 84, extract-d06-d08.md, VA L673-674]
4. Spatial Confidence (3.5/5 current) [ITEM 85, extract-d06-d08.md, VA L676-677]

CSS-only improvements target these 4. The remaining 6 require prompt enrichment or architecture changes.
> [ITEM 86, extract-d06-d08.md, VA L681-685]
> [ITEM 87, extract-d06-d08.md, VA L683]

### Step 3.2: Deploy zone heights (scroll rhythm dimension A)

Plan section heights to create a deliberate scroll rhythm. This is the "measure length" of your page's music.

**Reference section heights from exemplars:**

Gas Town (crescendo pattern: SHORT -> LONG -> LONGEST -> MODERATE):
- Z1: ~600px [ITEM 34, extract-d12-d14.md, VA L1028]
- Z2: ~1800px [ITEM 35, extract-d12-d14.md, VA L1029]
- Z3: ~2400px [ITEM 36, extract-d12-d14.md, VA L1030]
- Z4: ~1200px [ITEM 37, extract-d12-d14.md, VA L1031]

CD-006 (regular 4/4 time: uniform sections):
- S1: ~900px [ITEM 38, extract-d12-d14.md, VA L1028]
- S2: ~1000px [ITEM 39, extract-d12-d14.md, VA L1029]
- S3: ~1000px [ITEM 40, extract-d12-d14.md, VA L1030]
- S4: ~1100px [ITEM 41, extract-d12-d14.md, VA L1031]
- S5: ~1000px [ITEM 42, extract-d12-d14.md, VA L1032]
- S6: ~900px [ITEM 43, extract-d12-d14.md, VA L1034]
- S7: ~900px [ITEM 44, extract-d12-d14.md, VA L1034]
- S8: ~700px [ITEM 45, extract-d12-d14.md, VA L1035]

Choose your pattern based on content: crescendo, 4/4 time, or another rhythmic structure.
> [ITEM 46, extract-d12-d14.md, VA L1033] (Gas Town crescendo)
> [ITEM 47, extract-d12-d14.md, VA L1036] (CD-006 uniform)

### Step 3.3: Deploy visual density arc (scroll rhythm dimension B)

Plan how density varies across zones. This is the "dynamics" — loud and quiet.

**Reference density patterns:**

Gas Town (CRESCENDO + RELEASE):
- Z1: SPARSE [ITEM 49, extract-d12-d14.md, VA L1041]
- Z2: MODERATE [ITEM 50, extract-d12-d14.md, VA L1042]
- Z3: DENSE [ITEM 51, extract-d12-d14.md, VA L1043]
- Z4: MODERATE [ITEM 52, extract-d12-d14.md, VA L1044]

CD-006 (PLATEAU + TAPER):
- S1: MEDIUM [ITEM 53, extract-d12-d14.md, VA L1041]
- S2: HIGH [ITEM 54, extract-d12-d14.md, VA L1042]
- S3: HIGH [ITEM 55, extract-d12-d14.md, VA L1043]
- S4: V.HIGH [ITEM 56, extract-d12-d14.md, VA L1044]
- S5: HIGH [ITEM 57, extract-d12-d14.md, VA L1045]
- S6: MEDIUM [ITEM 58, extract-d12-d14.md, VA L1046]
- S7: MEDIUM [ITEM 59, extract-d12-d14.md, VA L1047]
- S8: LOW [ITEM 60, extract-d12-d14.md, VA L1048]

> [ITEM 61, extract-d12-d14.md, VA L1046] (Gas Town density pattern)
> [ITEM 62, extract-d12-d14.md, VA L1049] (CD-006 density pattern)

### Step 3.4: Deploy the page — Build Order

Build zone by zone following the density arc (OPENING -> DEEPENING -> RESOLVING):

**Pass 1 output target:** Complete HTML/CSS with skeleton strong and metaphor established.
> [ITEM 7, extract-d06-d08.md, VA L495-496]

**Single-pass output target:** Complete HTML page with 800-1200 CSS lines.
> [ITEM 68, extract-d01-d03.md, VA L152]
> [ITEM 78, extract-d09-d11.md, VA L884]

The page should use the metaphor + zone strategy to create page uniqueness while drawing on shared tokens/components for family DNA.
> [ITEM 091, extract-d15-d17.md, VA L1325]

Cross-page coherence emerges naturally from tokens.css + soul + components.css. No additional cross-page spec is needed.
> [ITEM 66, extract-d06-d08.md, VA L617-619]
> [ITEM 67, extract-d06-d08.md, VA L618]

### Step 3.5: Assess scaffolding

After deploying the scaffolding, take a screenshot and assess:
- Do the zone backgrounds create distinct rooms? (>= 15 RGB delta minimum, but USE THE FULL RANGE)
- Do transitions vary? (at least 3 types)
- Does the scroll rhythm have shape? (not uniform)
- Does the type scale respond to content density?

---

## PHASE 4: DEPLOY DISPOSITIONAL INSTRUCTIONS (D-01 through D-08)

> **EVIDENCE STATUS: EXPERIMENTAL** (council verdict Part 5, item 9)
> These 8 instructions are DESIGN INTENTIONS that create conditions for quality. They do not guarantee outcomes. Per council verdict: "D-04 creates conditions for surprise (not guaranteed)."
> Include in smoke test. Evaluate via experiment #20.

The purpose of these instructions is to shift your building mode from APPLIED (each mechanism solves a local problem) to COMPOSED (each mechanism serves a governing logic).

> [ITEM 38, extract-d01-d03.md, VA L79]
> [ITEM 139, extract-d01-d03.md, VA L314]
> [ITEM 140, extract-d01-d03.md, VA L315]
> [ITEM 90, extract-d01-d03.md, VA L237]
> [ITEM 92, extract-d01-d03.md, VA L238]
> [ITEM 141, extract-d01-d03.md, VA L316]
> [ITEM 38, extract-d06-d08.md, VA L575-577]
> [ITEM 39, extract-d06-d08.md, VA L575]
> [ITEM 40, extract-d06-d08.md, VA L576]
> [ITEM 95, extract-d06-d08.md, VA L700-701]
> [ITEM 96, extract-d06-d08.md, VA L700]
> [ITEM 79, extract-d18-d20.md, VA L1556-1558]
> [ITEM 80, extract-d18-d20.md, VA L1557]
> [ITEM 81, extract-d18-d20.md, VA L1558]
> [ITEM 82, extract-d18-d20.md, VA L1560-1562]

**Builder disposition toward quality:** Optimize for quality, not gate compliance. Enter COMPOSING mode (not COMPLYING/PLANNING/REPAIRING).
> [ITEM 124, extract-d01-d03.md, VA L263]
> [ITEM 137, extract-d01-d03.md, VA L308]

### D-01: Content-Register Reading [EXPERIMENTAL]

**PURPOSE:** Read the content's register before choosing mechanisms. Each section has a character (NARRATIVE / REFERENCE / CODE). Your CSS should respond to what the content IS.

**VOCABULARY:** Match section character to density, typography, and layout:
- NARRATIVE sections: generous line-height, wider measure, breathing room
- REFERENCE sections: tighter spacing, possible multi-column, navigation aids
- CODE sections: monospace, fixed width, syntax highlighting from token vocabulary

> [ITEM 39, extract-d01-d03.md, VA L80]
> [ITEM 83, extract-d18-d20.md, VA L1561]

This is the content-form coupling mechanism: SPECIFIED via TC brief routing + D-01.
> [ITEM 41, extract-d06-d08.md, VA L579-581]
> [ITEM 43, extract-d06-d08.md, VA L580]

### D-02: Room Perception at Boundaries [EXPERIMENTAL]

**PURPOSE:** Each zone transition should feel like entering a different room. The visitor's eye needs to register that something has changed.

**VOCABULARY:** Combine multiple channels at boundaries:
- Background color shift (>= 15 RGB minimum, use 25-50 for compositional effect)
- Typography shift (font-size, weight, or letter-spacing)
- Spacing shift (padding, margin)
- Border weight shift (4px -> 3px -> 1px hierarchy)

This replaces the old threshold rule ("Use >= 15 RGB delta") with a perceptual instruction.
> [ITEM 40, extract-d01-d03.md, VA L81]
> [ITEM 24, extract-d12-d14.md, VA L1002]
> [ITEM 84, extract-d18-d20.md, VA L1561]

### D-03: The Signing Frame [EXPERIMENTAL]

**PURPOSE:** Build as if you will sign this page. Every element should express certainty — the page knows what it is.

**VOCABULARY (Authority techniques):**
- Consistent border-weight hierarchy (4px ALWAYS = primary) [ITEM 017, extract-d21-d25.md, VA L1615]
- Restraint: knowing what NOT to use [ITEM 018, extract-d21-d25.md, VA L1616]
- Dense, purposeful header (dark bg, tight spacing) [ITEM 019, extract-d21-d25.md, VA L1617]
- Zero decorative elements [ITEM 020, extract-d21-d25.md, VA L1618]

**DESIGN INTENTION:** D-03 creates conditions for AUTHORITY in the emotional arc.
> [ITEM 41, extract-d01-d03.md, VA L82]
> [ITEM 033, extract-d21-d25.md, VA L1659]
> [ITEM 016, extract-d21-d25.md, VA L1611-1612]

Authority should be HIGH throughout (soul ensures the baseline).
> [ITEM 028, extract-d21-d25.md, VA L1641-1642]

Gas Town scored 7/10 authority — lost for uniform component styling.
> [ITEM 021, extract-d21-d25.md, VA L1620-1622]

### D-04: The Second-Half Moment [EXPERIMENTAL]

**PURPOSE:** Somewhere in the second half of the page, create a moment that breaks the established pattern — a surprise that rewards the reader who has scrolled this far.

**VOCABULARY (Surprise techniques):**
- Scale break: headline 2.5x body size [ITEM 003, extract-d21-d25.md, VA L1583]
- Color inversion: dark zone mid-page [ITEM 004, extract-d21-d25.md, VA L1584]
- Layout rupture: grid after 4+ single-column viewports [ITEM 005, extract-d21-d25.md, VA L1585]
- Structural inversion: border-RIGHT in a border-LEFT page [ITEM 006, extract-d21-d25.md, VA L1586]

**DESIGN INTENTION:** D-04 creates conditions for SURPRISE. Requires COMPOSING mode. 1-2 moments only, in the SECOND HALF.
> [ITEM 42, extract-d01-d03.md, VA L83]
> [ITEM 034, extract-d21-d25.md, VA L1660]
> [ITEM 002, extract-d21-d25.md, VA L1579-1580]
> [ITEM 029, extract-d21-d25.md, VA L1644-1645]
> [ITEM 008, extract-d21-d25.md, VA L1592-1595]

Gas Town: ZERO surprise moments. Consistency as default = flatline.
> [ITEM 007, extract-d21-d25.md, VA L1588-1590]

D-04 + D-06 together create conditions for surprise.
> [ITEM 49, extract-d06-d08.md, VA L591-593]
> [ITEM 50, extract-d06-d08.md, VA L591]

### D-05: The Reader's Scroll [EXPERIMENTAL]

**PURPOSE:** After building, scroll through your page as a reader would. The scroll should feel like a journey with pacing — not a uniform wall.

**VOCABULARY:** The three dimensions of scroll rhythm:
- A. Section height = "measure length" (vary section heights to create rhythm)
- B. Visual density = "dynamics" (loud zones / quiet zones)
- C. Transition weight = "articulation" (staccato vs legato between zones)

**DESIGN INTENTION:** D-05 creates conditions for CLOSURE — the ending should feel earned by the journey.
> [ITEM 43, extract-d01-d03.md, VA L84]
> [ITEM 035, extract-d21-d25.md, VA L1661]
> [ITEM 071, extract-d12-d14.md, VA L1065]

Scroll rhythm EMERGES from height x density x transitions. The pipeline creates CONDITIONS, not specifications.
> [ITEM 74, extract-d12-d14.md, VA L1069-1070]
> [ITEM 75, extract-d12-d14.md, VA L1071]

Closure should appear only in final 2-3 viewports. Must be EARNED.
> [ITEM 031, extract-d21-d25.md, VA L1650-1651]

Gas Town: 5/10 closure. Z4 too similar to Z2, no final moment.
> [ITEM 027, extract-d21-d25.md, VA L1633-1635]

### D-06: Negative Space as Shape [EXPERIMENTAL] [NEW]

**PURPOSE:** Whitespace is not emptiness — it is a deliberate shape. Each gap should have a reason. Uniform gaps = visual monotony.

**VOCABULARY:**
- Vary padding between zones (not uniform 48px everywhere)
- Let dense sections compress and sparse sections breathe
- The gap between zones is a design element, not a default

**DESIGN INTENTION:** D-06 prevents uniform gaps. Combined with D-04, creates conditions for surprise by making silence (space) as intentional as sound (content).
> [ITEM 44, extract-d01-d03.md, VA L85]
> [ITEM 072, extract-d12-d14.md, VA L1066]
> [ITEM 60, extract-d06-d08.md, VA L605]
> [ITEM 59, extract-d06-d08.md, VA L604-605]

**Calibration:** Stacked gap must stay <= 120px total. But within that, VARY the gaps. 80-120px gap before footer for breathing space.
> [ITEM 026, extract-d21-d25.md, VA L1631]
> [ITEM 049, extract-d21-d25.md, VA L1699]

### D-07: Edge Intentionality [EXPERIMENTAL] [NEW]

**PURPOSE:** Every edge of every element should be intentional. Borders, margins, alignment — each edge is a decision, not a default.

**VOCABULARY (Delight techniques):**
- Hover states revealing hidden content (table row tint, link border) [ITEM 010, extract-d21-d25.md, VA L1601]
- Typographic micro-refinement (tabular-nums, text-indent) [ITEM 011, extract-d21-d25.md, VA L1602]
- Zone-specific ::selection colors [ITEM 012, extract-d21-d25.md, VA L1603]
- Print-specific styling (@media print) [ITEM 013, extract-d21-d25.md, VA L1604]
- First/last child edge treatments [ITEM 014, extract-d21-d25.md, VA L1605]

**DESIGN INTENTION:** D-07 creates conditions for DELIGHT — small unexpected refinements that reward attention. Distributed throughout, more in high-density zones.
> [ITEM 45, extract-d01-d03.md, VA L86]
> [ITEM 036, extract-d21-d25.md, VA L1662]
> [ITEM 009, extract-d21-d25.md, VA L1597-1598]
> [ITEM 030, extract-d21-d25.md, VA L1647-1648]

Gas Town delight score: 2/10. Missing 6 techniques.
> [ITEM 015, extract-d21-d25.md, VA L1607-1609]

### D-08: The Skeleton Test [EXPERIMENTAL] [NEW]

**PURPOSE:** Mentally remove all content from your page. Does the skeleton (spacing, borders, backgrounds, typography framework) still have shape? If the skeleton looks like a uniform stack of boxes, the page is APPLIED. If the skeleton has rhythm, proportion, and intentionality, the page is COMPOSED.

> [ITEM 46, extract-d01-d03.md, VA L87]

### Assess Disposition Deployment

After applying D-01 through D-08, the page's emotional arc should have shape:

**The 4 emotional registers:**
> [ITEM 001, extract-d21-d25.md, VA L1572-1574]

1. **AUTHORITY** (constant) — should be HIGH throughout (D-03 creates conditions)
   > [ITEM 028, extract-d21-d25.md, VA L1641-1642]

2. **SURPRISE** (rare peak) — 1-2 moments only, in SECOND HALF (D-04 creates conditions)
   > [ITEM 029, extract-d21-d25.md, VA L1644-1645]

3. **DELIGHT** (steady) — distributed throughout, more in high-density zones (D-07 creates conditions)
   > [ITEM 030, extract-d21-d25.md, VA L1647-1648]

4. **EARNED CLOSURE** — only in final 2-3 viewports, must be EARNED (D-05 creates conditions)
   > [ITEM 031, extract-d21-d25.md, VA L1650-1651]

**Closure techniques:**
- Footer echoes header (bookending) [ITEM 023, extract-d21-d25.md, VA L1628]
- Density arc resolves (Z4 releases what Z3 compressed) [ITEM 024, extract-d21-d25.md, VA L1629]
- Final drop cap or typographic moment [ITEM 025, extract-d21-d25.md, VA L1630]
- Breathing space before footer (80-120px gap) [ITEM 026, extract-d21-d25.md, VA L1631]

> [ITEM 022, extract-d21-d25.md, VA L1624-1625]

**Emotional arc is EMERGENT, not SPECIFIED.** It cannot be gate-checked. The PA auditor will assess it after build. The disposition-emotion links are DESIGN INTENTIONS, not guaranteed causal links.
> [ITEM 032, extract-d21-d25.md, VA L1656-1657]
> [ITEM 062, extract-d06-d08.md, VA L610-612]
> [ITEM 063, extract-d06-d08.md, VA L612]

Per council verdict: "D-04 creates conditions for surprise (not guaranteed)" — all D-emotion links are design intentions.

---

## PHASE 5: SELF-EVALUATE AND REFINE

### Step 5.1: Screenshot and assess vs conviction

Take a Playwright screenshot and compare against your conviction statement ("This page is about X. Metaphor Y. Arc Z.").

> This is the builder self-evaluation loop. You SEE your own output (Tier 4 info via EXPERIENCE).

### Step 5.2: Apply the Skeleton Test (D-08)

Mentally strip content. Does the skeleton have shape?

### Step 5.3: Apply the Reader's Scroll (D-05)

Scroll through as a reader. Does the journey have pacing?

### Step 5.4: Check mode indicators

Is the page in COMPOSED mode or APPLIED mode? Check:
- Mode determinant 1: Are custom property names concept-based or position-based?
- Mode determinant 2: Do components modulate per zone or stay identical?
- Mode determinant 3: Are layout choices driven by metaphor or by content-type alone?
- Mode determinant 5: Can you articulate the governing logic in one sentence?

> [ITEM 74, extract-d18-d20.md, VA L1550]
> [ITEM 75, extract-d18-d20.md, VA L1551]
> [ITEM 76, extract-d18-d20.md, VA L1552]
> [ITEM 78, extract-d18-d20.md, VA L1554]

### Step 5.5: Assess output targets

Your output should be:
- Complete HTML page
- 800-1200 CSS lines [ITEM 68, extract-d01-d03.md, VA L152]
- Responsive (1440px + 768px) [ITEM 67, extract-d01-d03.md, VA L146-149]
- Accessible
- With designed moments (D-04, D-07)

**For experimental 3-pass architecture (BLOCKED until experiment #21 validates):**
- Pass 2 output: Enriched page — mechanisms coupled, density arc embedded [ITEM 23, extract-d06-d08.md, VA L525-526]
- Pass 3 output: Finished page — responsive, accessible, designed moments [ITEM 29, extract-d06-d08.md, VA L542-543]

> [ITEM 88, extract-d06-d08.md, VA L687-689] (prompt enrichment tier fixes)
> [ITEM 90, extract-d06-d08.md, VA L691-694] (architecture change tier fixes)

---

## PHASE 6: TEMPORAL COMPOSITION (Advanced)

This phase addresses how static CSS creates a time-based experience. Every reader experiences the page temporally — they scroll.

> [ITEM 29, extract-d12-d14.md, VA L1018]
> [ITEM 30, extract-d12-d14.md, VA L1019]
> [ITEM 32, extract-d12-d14.md, VA L1023]

### Step 6.1: Deploy the density arc

The density arc has three movements: OPENING -> DEEPENING -> RESOLVING.

> [ITEM 34, extract-d01-d03.md, VA L70-71]

Phase 0 (Content Analyst) maps the section-by-section density arc. Phase 1 (Brief Assembler) includes the density arc description in the brief. D-05 activates temporal awareness.

> [ITEM 69, extract-d12-d14.md, VA L1063]
> [ITEM 70, extract-d12-d14.md, VA L1064]

### Step 6.2: Deploy multi-coherence

The multi-coherence framework: 6 channels, 4 directions, boundary-by-boundary.

> [ITEM 32, extract-d01-d03.md, VA L66-67]

Intentional Composition: ACTIVATED + EMERGENT via multi-coherence.
> [ITEM 48, extract-d06-d08.md, VA L587-589]

### Step 6.3: Deploy structural metaphor

Derive from content, embody in CSS. The metaphor should be STRUCTURAL (expressed through the CSS itself), not ANNOUNCED (only present in labels/comments).

> [ITEM 33, extract-d01-d03.md, VA L68-69]

### Step 6.4: Deploy content-form coupling

Per-section decisions linking content character to CSS treatment.

> [ITEM 35, extract-d01-d03.md, VA L72-73]

### Step 6.5: Deploy creative authority + components

80% creative authority / 20% constraint. Use the component library from components.css.

> [ITEM 36, extract-d01-d03.md, VA L74-75]
> [ITEM 85, extract-d18-d20.md, VA L1562]

### Step 6.6: Deploy CSS value tables

The CSS value tables provide specific ranges for each channel per zone. Use them as vocabulary, not as a checklist to satisfy.

> [ITEM 37, extract-d01-d03.md, VA L76]

---

## APPENDIX A: COUNCIL VERDICT AMENDMENTS

The following amendments from the council verdict affect this document:

1. **"Activation" framing RETIRED.** Replaced with PURPOSE + VOCABULARY. The disposition provides compositional intent; the value table provides CSS vocabulary. The builder integrates both. [Council verdict, Contradiction A]

2. **Dispositional instructions D-01-D-08 are EXPERIMENTAL.** Include in smoke test, evaluate via experiment #20. [Council verdict, Part 5, item 9]

3. **Emotional arc dependencies are DESIGN INTENTIONS, not guaranteed causal links.** "D-04 creates conditions for surprise (not guaranteed)" rather than "D-04 creates SURPRISE." [Council verdict, Contradiction C]

4. **80% creative authority = retained as builder framing.** Cross-page consistency is an OPEN QUESTION (untested). [Council verdict, Contradiction D]

5. **Value tables are "structured reference material"** (not "positive scaffolding" or "activation"). The creative authority is in HOW the builder combines these values to serve the page's governing logic. [Council verdict, Contradiction A resolution]

6. **Single-pass = DEFAULT.** 3-pass items tagged EXPERIMENTAL/BLOCKED-UNTIL-EXPERIMENT-21. [Council verdict, Contradiction B]

7. **Perception thresholds delivered as CALIBRATION** (not pass/fail): "Backgrounds must differ by at least 15 RGB points to be perceptible" rather than "FAIL if adjacent zone background delta < 15 RGB." [Council verdict, Pattern 1 resolution]

8. **CCS is a RESEARCH CONSTRUCT, not an operational metric.** Do not operationalize until methodology standardized. [Council verdict, Pattern 5 resolution]

9. **Compositional Critic = EXPERIMENTAL/UNVALIDATED.** All dependent items (3-pass, conviction artifacts) tagged EXPERIMENTAL. [Council verdict, CF-02]

10. **Opus builder = STRONG RECOMMENDATION, not non-negotiable.** Pending experiment #19 isolation. [Council verdict, Pattern 3 sub-ruling]

---

## APPENDIX B: COMPLETE ITEM CROSS-REFERENCE

### Layer 3: SCAFFOLDING Items (75 items)

| # | Item ID | Source | VA Line | Text (80 chars) |
|---|---------|--------|---------|------------------|
| 1 | ITEM 52 | extract-d01-d03.md | L107 | tokens.css (direct Tier 1 vocabulary) -- builder input #3 |
| 2 | ITEM 53 | extract-d01-d03.md | L108 | components.css (pre-built component library) -- builder input #4 |
| 3 | ITEM 68 | extract-d01-d03.md | L152 | Output: Complete HTML page (800-1200 CSS lines) |
| 4 | ITEM 3 | extract-d04-d05.md | L372-374 | RESEARCH ARCHIVE (337 findings) ~45,000 lines |
| 5 | ITEM 4 | extract-d04-d05.md | L372-374 | DESIGN SYSTEM (6-layer) ~3,500 lines |
| 6 | ITEM 18 | extract-d04-d05.md | L413 | tokens.css 183 lines |
| 7 | ITEM 19 | extract-d04-d05.md | L413 | components.css 290 lines |
| 8 | ITEM 20 | extract-d04-d05.md | L415-416 | tokens.css and components.css as DIRECT FILE routes |
| 9 | ITEM 7 | extract-d06-d08.md | L495-496 | Pass 1 output: Complete HTML/CSS -- skeleton strong, metaphor estab |
| 10 | ITEM 23 | extract-d06-d08.md | L525-526 | Pass 2 output: Enriched page -- mechanisms coupled, density arc emb |
| 11 | ITEM 29 | extract-d06-d08.md | L542-543 | Pass 3 output: Finished page -- responsive, accessible, designed moments |
| 12 | ITEM 56 | extract-d06-d08.md | L599-600 | Scale-Channel Independence: 6-channel framework + value tables |
| 13 | ITEM 57 | extract-d06-d08.md | L600 | 6-channel framework + value tables |
| 14 | ITEM 66 | extract-d06-d08.md | L617-619 | Cross-Page Coherence: soul + shared tokens.css + components.css |
| 15 | ITEM 67 | extract-d06-d08.md | L618 | shared tokens.css + components.css |
| 16 | ITEM 86 | extract-d06-d08.md | L681-685 | CSS-only fix tier: Channel Shifts, Emotional Arc, Spatial Confidence |
| 17 | ITEM 88 | extract-d06-d08.md | L687-689 | Prompt enrichment tier: Typographic Craft, Material Auth, Detail Den |
| 18 | ITEM 90 | extract-d06-d08.md | L691-694 | Architecture change tier: Pervading Metaphor, Multi-coherence, etc |
| 19 | ITEM 101 | extract-d06-d08.md | L667-677 | 4 dims fixable by CSS: Scale Hierarchy, Channel Shifts, Emo Arc, Spatial |
| 20 | ITEM 78 | extract-d09-d11.md | L884 | Output: complete HTML (800-1200 CSS) |
| 21 | ITEM 7 | extract-d12-d14.md | L980 | Hex colors (#E83025) survive compression |
| 22 | ITEM 8 | extract-d12-d14.md | L981 | Pixel measurements (64px) survive compression |
| 23 | ITEM 9 | extract-d12-d14.md | L982 | Border weights (4px/3px/1px) survive compression |
| 24 | ITEM 10 | extract-d12-d14.md | L983 | Font sizes (1rem, 0.875rem) survive compression |
| 25 | ITEM 11 | extract-d12-d14.md | L984 | Spacing scale (4-96px) survive compression |
| 26 | ITEM 12 | extract-d12-d14.md | L985 | Token names (--color-primary) survive compression |
| 27 | ITEM 34 | extract-d12-d14.md | L1028 | Gas Town Z1: ~600px height |
| 28 | ITEM 35 | extract-d12-d14.md | L1029 | Gas Town Z2: ~1800px height |
| 29 | ITEM 36 | extract-d12-d14.md | L1030 | Gas Town Z3: ~2400px height |
| 30 | ITEM 37 | extract-d12-d14.md | L1031 | Gas Town Z4: ~1200px height |
| 31 | ITEM 38 | extract-d12-d14.md | L1028 | CD-006 S1: ~900px height |
| 32 | ITEM 39 | extract-d12-d14.md | L1029 | CD-006 S2: ~1000px height |
| 33 | ITEM 40 | extract-d12-d14.md | L1030 | CD-006 S3: ~1000px height |
| 34 | ITEM 41 | extract-d12-d14.md | L1031 | CD-006 S4: ~1100px height |
| 35 | ITEM 42 | extract-d12-d14.md | L1032 | CD-006 S5: ~1000px height |
| 36 | ITEM 43 | extract-d12-d14.md | L1034 | CD-006 S6: ~900px height |
| 37 | ITEM 44 | extract-d12-d14.md | L1034 | CD-006 S7: ~900px height |
| 38 | ITEM 45 | extract-d12-d14.md | L1035 | CD-006 S8: ~700px height |
| 39 | ITEM 64 | extract-d12-d14.md | L1053 | Light transition: 1px + 48px gap = legato |
| 40 | ITEM 65 | extract-d12-d14.md | L1054 | Medium transition: 3px + 80px gap = breathing rest |
| 41 | ITEM 66 | extract-d12-d14.md | L1055 | Heavy transition: colored bg + text = full stop |
| 42 | ITEM 82 | extract-d12-d14.md | L1088-1091 | Axis 1: Info Density (line-height, font-size, max-width) |
| 43 | ITEM 83 | extract-d12-d14.md | L1089 | line-height: 1.5 Expert ... 1.8 General |
| 44 | ITEM 84 | extract-d12-d14.md | L1090 | font-size: 15px Expert ... 18px General |
| 45 | ITEM 86 | extract-d12-d14.md | L1094 | 3-4 components/viewport Expert ... 2 General |
| 46 | ITEM 87 | extract-d12-d14.md | L1095 | Compound grids Expert ... Simple stacks General |
| 47 | ITEM 92 | extract-d12-d14.md | L1102 | Optional TOC Expert ... Mandatory TOC + map General |
| 48 | ITEM 93 | extract-d12-d14.md | L1103 | Expert scrolls linearly ... Reader needs wayfinding |
| 49 | ITEM 95 | extract-d12-d14.md | L1106 | Minimal header Expert ... Expansive header General |
| 50 | ITEM 96 | extract-d12-d14.md | L1107 | 30-50% less header height Expert ... Full orientation General |
| 51 | ITEM 074 | extract-d15-d17.md | L1306 | WHAT VARIES (per-page creative decisions) |
| 52 | ITEM 075 | extract-d15-d17.md | L1306 | Zone background strategy + colors (varies per page) |
| 53 | ITEM 076 | extract-d15-d17.md | L1307 | Type scale values + naming (varies per page) |
| 54 | ITEM 077 | extract-d15-d17.md | L1308 | Structural metaphor vocabulary (varies per page) |
| 55 | ITEM 078 | extract-d15-d17.md | L1309 | Callout variant semantics (varies per page) |
| 56 | ITEM 079 | extract-d15-d17.md | L1310 | Component selection + layout (varies per page) |
| 57 | ITEM 080 | extract-d15-d17.md | L1311 | Container width (960px vs 1100px) (varies per page) |
| 58 | ITEM 081 | extract-d15-d17.md | L1312 | Hover behavior patterns (varies per page) |
| 59 | ITEM 082 | extract-d15-d17.md | L1313 | Transition type vocabulary (varies per page) |
| 60 | ITEM 085 | extract-d15-d17.md | L1322 | Builder reads tokens.css (183 lines) -> shared vocabulary |
| 61 | ITEM 086 | extract-d15-d17.md | L1322 | tokens.css (183 lines) |
| 62 | ITEM 087 | extract-d15-d17.md | L1323 | Builder reads components.css (290 lines) -> shared DNA |
| 63 | ITEM 088 | extract-d15-d17.md | L1323 | components.css (290 lines) |
| 64 | ITEM 089 | extract-d15-d17.md | L1324 | 73-line template embeds soul -> shared identity |
| 65 | ITEM 090 | extract-d15-d17.md | L1324 | 73-line template (exact size) |
| 66 | ITEM 091 | extract-d15-d17.md | L1325 | Per-page metaphor + zone strategy -> page uniqueness |
| 67 | ITEM 58 | extract-d18-d20.md | L1507-1509 | APPLIED: --bg-z1, --bg-z2 named by POSITION |
| 68 | ITEM 59 | extract-d18-d20.md | L1507-1509 | COMPOSED: --dispatch-open, --dispatch-tactical named by CONCEPT |

**Additional SCAFFOLDING items from secondary classification:**
| 69 | ITEM 64 | extract-d18-d20.md | L1520-1521 | APPLIED: Callouts styled identically across all zones |
| 70 | ITEM 65 | extract-d18-d20.md | L1523-1526 | COMPOSED: Callouts adapt to zone context (padding/border varies) |

**Council-reclassified from GATES (council verdict Pattern 1, items #5-#6):**
| 71 | ITEM 57 | extract-d18-d20.md | L1502 | THE SMOKING GUN — CSS Custom Properties naming |
| 72 | ITEM 61 | extract-d18-d20.md | L1512 | Named by CONCEPT = Composed mode indicator |

**Council-reclassified from GATES (council verdict Pattern 1, items #7-#9):**
| 73 | ITEM 66 | extract-d18-d20.md | L1524 | zone-1 callout padding: 20px 24px (generous) |
| 74 | ITEM 67 | extract-d18-d20.md | L1525 | zone-3 callout padding: 12px 16px (compressed) |
| 75 | ITEM 68 | extract-d18-d20.md | L1526 | zone-3 callout border-left-width: 5px (heavier) |

### Layer 4: DISPOSITION Items (78 items)

| # | Item ID | Source | VA Line | Text (80 chars) |
|---|---------|--------|---------|------------------|
| 1 | ITEM 38 | extract-d01-d03.md | L79 | Tier 4: DISPOSITION (8 instructions, ~40 lines) |
| 2 | ITEM 39 | extract-d01-d03.md | L80 | D-01: Content-Register Reading |
| 3 | ITEM 40 | extract-d01-d03.md | L81 | D-02: Room Perception at Boundaries |
| 4 | ITEM 41 | extract-d01-d03.md | L82 | D-03: The Signing Frame |
| 5 | ITEM 42 | extract-d01-d03.md | L83 | D-04: The Second-Half Moment |
| 6 | ITEM 43 | extract-d01-d03.md | L84 | D-05: The Reader's Scroll |
| 7 | ITEM 44 | extract-d01-d03.md | L85 | D-06: Negative Space as Shape (NEW) |
| 8 | ITEM 45 | extract-d01-d03.md | L86 | D-07: Edge Intentionality (NEW) |
| 9 | ITEM 46 | extract-d01-d03.md | L87 | D-08: The Skeleton Test (NEW) |
| 10 | ITEM 90 | extract-d01-d03.md | L237 | Recipe + disposition format (new pipeline) |
| 11 | ITEM 92 | extract-d01-d03.md | L238 | "This world IS / You ARE" (world-description voice) |
| 12 | ITEM 139 | extract-d01-d03.md | L314 | 8 dispositional instructions (COMPOSING mode factor) |
| 13 | ITEM 140 | extract-d01-d03.md | L315 | Creative authority (80/20) |
| 14 | ITEM 141 | extract-d01-d03.md | L316 | World-description voice |
| 15 | ITEM 38 | extract-d06-d08.md | L575-577 | Builder Cognitive Mode: ACTIVATED via D-01 to D-08 + recipe format |
| 16 | ITEM 39 | extract-d06-d08.md | L575 | Builder Cognitive Mode (11 concepts collapsed) |
| 17 | ITEM 40 | extract-d06-d08.md | L576 | Dispositional recipe D-01 through D-08 (file ref) |
| 18 | ITEM 48 | extract-d06-d08.md | L587-589 | Intentional Composition: ACTIVATED + EMERGENT via multi-coherence |
| 19 | ITEM 49 | extract-d06-d08.md | L591-593 | Peak-Valley Architecture: ACTIVATED via D-04 + density arc |
| 20 | ITEM 50 | extract-d06-d08.md | L591 | D-04 second-half moment + density arc (file ref) |
| 21 | ITEM 59 | extract-d06-d08.md | L604-605 | Temporal Composition: ACTIVATED via density arc recipe + D-06 |
| 22 | ITEM 60 | extract-d06-d08.md | L605 | D-06 neg space (file ref) |
| 23 | ITEM 62 | extract-d06-d08.md | L610-612 | Emotional Arc: EMERGENT via D-04 + D-05 + arc framing |
| 24 | ITEM 63 | extract-d06-d08.md | L612 | builder produces, cannot be specified (emotional arc) |
| 25 | ITEM 95 | extract-d06-d08.md | L700-701 | Pipeline v3 addresses via dispositional recipe + purpose arch |
| 26 | ITEM 96 | extract-d06-d08.md | L700 | dispositional recipe (file ref) |
| 27 | ITEM 24 | extract-d12-d14.md | L1002 | Disposition D-02 replaces threshold with perceptual instruction |
| 28 | ITEM 69 | extract-d12-d14.md | L1063 | Phase 0: Content Analyst maps section-by-section density arc |
| 29 | ITEM 70 | extract-d12-d14.md | L1064 | Phase 1: Brief includes density arc description |
| 30 | ITEM 71 | extract-d12-d14.md | L1065 | Phase 2: D-05 'Reader's Scroll' activates temporal awareness |
| 31 | ITEM 72 | extract-d12-d14.md | L1066 | D-06 'Negative Space as Shape' prevents uniform gaps |
| 32 | ITEM 74 | extract-d12-d14.md | L1069-1070 | KEY RULE: Scroll rhythm EMERGES from height x density x transitions |
| 33 | ITEM 75 | extract-d12-d14.md | L1071 | Pipeline v3 creates CONDITIONS, not specifications |
| 34 | ITEM 79 | extract-d18-d20.md | L1556-1558 | MODE IS SET AT BUILD START by spec format: Checklist->APPLIED, Recipe |
| 35 | ITEM 80 | extract-d18-d20.md | L1557 | Checklist -> APPLIED mode (inevitable) |
| 36 | ITEM 81 | extract-d18-d20.md | L1558 | Recipe + disposition -> COMPOSED mode (possible, not guaranteed) |
| 37 | ITEM 82 | extract-d18-d20.md | L1560-1562 | Pipeline v3 creates conditions via D-01 + D-02 + Recipe + 80% + Opus |
| 38 | ITEM 83 | extract-d18-d20.md | L1561 | D-01 content-register reading (dependency) |
| 39 | ITEM 84 | extract-d18-d20.md | L1561 | D-02 room perception (dependency) |
| 40 | ITEM 85 | extract-d18-d20.md | L1562 | 80% creative authority |
| 41 | ITEM 001 | extract-d21-d25.md | L1572-1574 | EMOTIONAL ARC: 4 emotional registers distinct from density arc |
| 42 | ITEM 002 | extract-d21-d25.md | L1579-1580 | 1. SURPRISE -- moment page does something unexpected |
| 43 | ITEM 003 | extract-d21-d25.md | L1583 | Scale break: headline 2.5x body size (surprise CSS technique) |
| 44 | ITEM 004 | extract-d21-d25.md | L1584 | Color inversion: dark zone mid-page (surprise CSS technique) |
| 45 | ITEM 005 | extract-d21-d25.md | L1585 | Layout rupture: grid after 4+ single-column viewports |
| 46 | ITEM 006 | extract-d21-d25.md | L1586 | Structural inversion: border-RIGHT in a border-LEFT page |
| 47 | ITEM 007 | extract-d21-d25.md | L1588-1590 | GAS TOWN: ZERO surprise moments. Consistency as default = flatline |
| 48 | ITEM 008 | extract-d21-d25.md | L1592-1595 | D-04 + D-06 create conditions for surprise. Requires COMPOSING mode |
| 49 | ITEM 009 | extract-d21-d25.md | L1597-1598 | 2. DELIGHT -- small unexpected refinements that reward attention |
| 50 | ITEM 010 | extract-d21-d25.md | L1601 | Hover states revealing hidden content (table row tint, link border) |
| 51 | ITEM 011 | extract-d21-d25.md | L1602 | Typographic micro-refinement (tabular-nums, text-indent) |
| 52 | ITEM 012 | extract-d21-d25.md | L1603 | Zone-specific ::selection colors |
| 53 | ITEM 013 | extract-d21-d25.md | L1604 | Print-specific styling (@media print) |
| 54 | ITEM 014 | extract-d21-d25.md | L1605 | First/last child edge treatments |
| 55 | ITEM 016 | extract-d21-d25.md | L1611-1612 | 3. AUTHORITY -- page knows what it is, every element expresses certainty |
| 56 | ITEM 017 | extract-d21-d25.md | L1615 | Consistent border-weight hierarchy (4px ALWAYS = primary) |
| 57 | ITEM 018 | extract-d21-d25.md | L1616 | Restraint (knowing what NOT to use) |
| 58 | ITEM 019 | extract-d21-d25.md | L1617 | Dense, purposeful header (dark bg, tight spacing) |
| 59 | ITEM 022 | extract-d21-d25.md | L1624-1625 | 4. EARNED CLOSURE -- ending feels earned by the journey |
| 60 | ITEM 023 | extract-d21-d25.md | L1628 | Footer echoes header (bookending) |
| 61 | ITEM 024 | extract-d21-d25.md | L1629 | Density arc resolves (Z4 releases what Z3 compressed) |
| 62 | ITEM 025 | extract-d21-d25.md | L1630 | Final drop cap or typographic moment |

**Additional DISPOSITION items from secondary classification:**
| 63 | ITEM 026 | extract-d21-d25.md | L1631 | Breathing space before footer (80-120px gap) |
| 64 | ITEM 027 | extract-d21-d25.md | L1633-1635 | GAS TOWN: 5/10 closure. Z4 too similar to Z2, no final moment |
| 65 | ITEM 028 | extract-d21-d25.md | L1641-1642 | Authority (constant): should be HIGH throughout (soul ensures) |
| 66 | ITEM 029 | extract-d21-d25.md | L1644-1645 | Surprise (rare peak): 1-2 moments only, in SECOND HALF (D-04) |
| 67 | ITEM 030 | extract-d21-d25.md | L1647-1648 | Delight (steady): distributed throughout, more in high-density zones |
| 68 | ITEM 031 | extract-d21-d25.md | L1650-1651 | Closure (earned): only in final 2-3 viewports, must be EARNED |
| 69 | ITEM 032 | extract-d21-d25.md | L1656-1657 | Emotional arc is EMERGENT, not SPECIFIED. Cannot be gate-checked |
| 70 | ITEM 033 | extract-d21-d25.md | L1659 | D-03 'Would you sign this?' -> AUTHORITY |
| 71 | ITEM 034 | extract-d21-d25.md | L1660 | D-04 'Second-half moment' -> SURPRISE |
| 72 | ITEM 035 | extract-d21-d25.md | L1661 | D-05 'Scroll as reader' -> CLOSURE |
| 73 | ITEM 036 | extract-d21-d25.md | L1662 | D-07 'Edge intentionality' -> DELIGHT |
| 74 | ITEM 015 | extract-d21-d25.md | L1607-1609 | GAS TOWN DELIGHT SCORE: 2/10. Missing 6 techniques |
| 75 | ITEM 021 | extract-d21-d25.md | L1620-1622 | GAS TOWN: 7/10 authority. Loses for uniform component styling |
| 76 | ITEM 166 | extract-d21-d25.md | L2018 | THEORIZED: Dispositional instructions activate native capability |

**Council-reclassified from GATES (council verdict Pattern 1, items #2-#3):**
| 77 | ITEM 124 | extract-d01-d03.md | L263 | Builder optimizes for quality (new) |
| 78 | ITEM 137 | extract-d01-d03.md | L308 | Builder enters COMPOSING mode (not COMPLYING/PLANNING/REPAIRING) |

---

## APPENDIX C: EVIDENCE STATUS KEY

Per council verdict (CF-04), all items carry evidence classification:

- **FACT**: Binary observation verifiable in the data
- **OBSERVED**: Consistent direction across available data, but variables not isolated
- **CONFOUNDED**: Direction observed but cannot separate from co-varying factors
- **THEORETICAL**: N=0, hypothesis only
- **SPECULATIVE**: Author estimate with no empirical basis

**Items in this document by evidence status:**
- SCAFFOLDING items: Mostly FACT (tokens.css exists, compression behavior observed) and OBSERVED (section heights, density patterns from N=2 exemplars)
- D-01 through D-08: THEORETICAL (N=0 as a set, council verdict flags as EXPERIMENTAL)
- Emotional arc: THEORETICAL (emergent, not yet observed in v3 pipeline)
- Perception thresholds (calibration values): FACT (observed across N=3+ builds)
- Mode determinants: OBSERVED (B8 investigation, N=2 builds analyzed)
- Reader model axis values: THEORETICAL (proposed in B2 investigation, never tested)

---

*End of Builder Recipe. 146 items from Layers 3-4, zero compression, all item IDs and VA line refs included. Conforms to council-verdict.md rulings.*
