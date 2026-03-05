# TC Brief: Gas Town -- Steve Yegge (009)

## 1. STRUCTURAL METAPHOR

**COMMAND POST / FIELD DISPATCH** -- QUALITY: 14/18 (VIABLE)

The page is a field dispatch from a forward command post. Yegge is a field commander reporting from active engagement. The 8-stage readiness model = CLEARANCE SYSTEM. The 7 roles = CHAIN OF COMMAND. The warnings = THREAT ASSESSMENTS.

CSS directions: hierarchy -> border-weight (4px critical, 3px operational, 1px separators) | clearance zones -> bg shifts >=20 RGB | dispatch compression -> spacing 64px->32px | rank -> typography scale (serif->sans->mono) | threat classification -> accent colors (coral/amber/purple)

BECAUSE: Yegge's content IS a dispatch -- a 40-year veteran reporting volatile intel with explicit readiness gates ("Stage 7+") and role hierarchies (Mayor, Deacon, Dogs).

RISK: Cost 2/5. RESIST label-heavy transitions -- let structure (bg, borders, spacing) carry zone shifts. AMPLIFY: rank hierarchy + oscillation between authority and raw danger.

## 2. ZONE ARCHITECTURE

| Zone | Name | Density | Content | Pacing | Layout | Direction |
|------|------|---------|---------|--------|--------|-----------|
| Z1 | Situation Brief | sparse | Source, core insight ("ant colony" thesis) | BREATHING | single-col | OPENING |
| Z2 | Operational Readiness | moderate | 8 Stages, Architecture, 7 Worker Roles | DENSE | bento grid + tables | DEEPENING |
| Z3 | Field Intelligence | dense | Vibe Coding, Beads, MCP, Why Go, Warnings | DENSE | single-col + tables | DEEPENING |
| Z4 | Allied Ops & Deployment | moderate | Community, upgrades, commands, mental model | TRANSITIONAL | single-col + code | RESOLVING |

Boundaries: Z1->Z2 HARD CUT (3px primary border) | Z2->Z3 SPACING SHIFT (density only) | Z3->Z4 CHECKPOINT (mono label bar)

## 3. CONTENT TENSIONS

| # | Axis | Pole A | Pole B | Dom? |
|---|------|--------|--------|------|
| T1 | TRUST | Authority + fragility ("40yr vet" + "3 weeks old") | Monolithic authority | **YES** |
| T2 | FEEL | Wild chaotic energy (profanity, chimps) | Austere formal restraint | Support |
| T3 | RECONCILE | Overthrow single-agent belief | Decisive assertion | Support |

T1 shapes metaphor: command post holds BOTH military discipline AND active-theater volatility.

## 4. SELECTED MECHANISMS

**15 total. S:2, H:3, C:4, D:3, N:3.**

| # | Mechanism | Cat | Zone | Metaphor Role | Vis |
|---|-----------|-----|------|---------------|-----|
| 1 | Border-Weight Gradient | H | all | Authority level: 4px critical, 3px operational, 1px separators | HIGH |
| 2 | 2-Zone Component DNA | C | Z2-3 | Intel briefs: mono label + body | MED |
| 3 | Solid Offset Depth | D | Z1 | Singular emphasis on "ant colony" quote | HIGH |
| 4 | Spacing Compression | H | Z1-3 | Dispatch compression: 64->40->32px | LOW |
| 5 | Dense/Sparse Alternation | S | page | Z1 sparse, Z2-3 dense, Z4 moderate | MED |
| 7 | Zone Background Diff | D | all | Clearance zones: #FEF9F5->#F5F0E8->#FAF5ED->#FEF9F5 | MED |
| 9 | Confidence Color | C | Z2-3 | coral=THREAT, amber=CAUTION, purple=DOCTRINE | MED |
| 10 | Border-Left Signal | C | Z2-3 | 4px accent on all callouts | HIGH |
| 11 | Typographic Scale | H | all | serif display -> sans body -> mono commands | LOW |
| 13 | Dark Header | N | nav | Command post designation + 3px red | HIGH |
| 14 | Footer Mirror | N | nav | Deployment summary bookend | MED |
| 15 | Bento Grid | S | Z2 | 7 Roles as variable-span grid (Mayor=span-2) | MED |
| 16 | Drop Cap | D | Z1 | Editorial dispatch opening | MED |
| 17 | Code Block | C | Z4 | Install commands as deployment orders | HIGH |
| 18 | Data Table | N | Z2-3 | 8 Stages + Why Go, mono headers, no vertical borders | LOW |

**Pairs:** #1+#7 encode DEPTH at Z1->Z2 | #4+#11 encode COMPRESSION Z1->Z3 | #2+#9 encode CLASSIFICATION in Z3
**Rejected:** #8 Scroll Witness (too short), #12 Progressive Disclosure (linear not phased), #6 Width Variation (no Q&A)

## 5. METAPHOR-IMPLIED CSS DIRECTIONS

**Page:** 960px container. Arc: cream(Z1)->cool(Z2)->earthy(Z3)->cream(Z4). Dark header/footer bookends.
**Section:** bg >=20 RGB shifts, border-weight 4px->3px->1px descent, padding 64->40->32->48px.
**Component:** 2-zone callouts (mono label + body). Bento for roles (Mayor=wide). Tables: mono headers + 3px/1px borders.
**Character:** letter-spacing 0em(Z1)->0.03em(Z3)->0em(Z4). Font-weight 400(Z1)->600(Z2-3)->400(Z4).

## 6. BUILD RECIPE

**Z1 -- Situation Brief:** bg #FEF9F5, padding 64px 80px. Deploy #16 drop cap (primary red). Deploy #3 solid offset on "ant colony" quote + #1 border-left 4px primary. Typography: h1 display 3rem, body 1rem/1.7.
TRANSITION: HARD CUT -- border-top: 3px solid var(--color-primary)

**Z2 -- Operational Readiness:** bg #F5F0E8 (delta ~20 RGB), padding 40px 80px. Deploy #18 data tables (8 Stages, Why Go). Deploy #15 bento grid for roles (minmax 280px, Mayor span-2). #1 borders at 3px. Typography: h2 2rem, h3 1.5rem italic.
TRANSITION: SPACING SHIFT -- density compression only, no border

**Z3 -- Field Intelligence:** bg #FAF5ED (delta ~15 RGB), padding 32px 64px. Deploy #2 2-zone callouts + #9 color encoding (coral/amber/purple). Deploy #17 code block (dark bg). #4 spacing at 32px throughout. Typography: letter-spacing 0.03em, weight 600.
TRANSITION: CHECKPOINT -- mono label bar, 1px borders, breathing bg

**Z4 -- Allied Ops & Deployment:** bg #FEF9F5, padding 48px 80px. Deploy #17 code (install commands). #10 border-left blue on community links. Deploy #14 footer (dark + 3px red). Typography: letter-spacing 0em, weight 400.

**Boundary CSS:**
```
Z1->Z2: Chromatic #FEF9F5->#F5F0E8 (~20 RGB) | Typo 3rem->2rem | Spatial 64->40px | Struct +3px border = 4 channels
Z2->Z3: Chromatic #F5F0E8->#FAF5ED (~15 RGB) | Typo +0.03em spacing | Spatial 40->32px | Struct 3px->4px callouts = 3 ch
Z3->Z4: Chromatic #FAF5ED->#FEF9F5 (~15 RGB) | Typo -0.03em, wt 600->400 | Spatial 32->48px | Struct checkpoint = 3 ch
```

**Top 5 CSS:** #3 `.core-quote::after{content:'';position:absolute;top:4px;left:4px;width:100%;height:100%;background:#1A1A1A;z-index:-1}` | #15 `.roles-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}` | #13 `header{background:#1A1A1A;color:#FEF9F5;border-bottom:3px solid #E83025}` | #2 `.intel-brief__label{font:600 0.75rem var(--font-mono);text-transform:uppercase;letter-spacing:0.1em}` | #16 `.dispatch-opening::first-letter{font:3.5em var(--font-display);float:left;color:#E83025}`

## 7. DETECTION EXPECTATIONS (WEAVER ONLY)

Squint Z1: warm cream, one dramatic solid-offset quote, red drop cap. Z2: cooler bg, bento grid breaks monotony, tables. Z3: earthy warmth, densest, colored callout accents, dark code block contrast. Z4: cream return, relaxed spacing, code block, dark footer mirrors header. Three distinct transition types (HARD CUT, SPACING SHIFT, CHECKPOINT) = rhythm PASS.

## 8. BUILDER ANCHORS

1. **Spacing descent arc MUST be visible:** Z1(64px)->Z2(40px)->Z3(32px)->Z4(48px). Densest zone is Z3, not Z1.
2. **Bento grid in Z2 is the ONLY non-single-column layout.** Mayor=span-2. Without this = single-column monotony.
3. **Core Insight quote is the SINGULAR solid-offset element.** No other element gets solid offset. Scarcity = emphasis.
