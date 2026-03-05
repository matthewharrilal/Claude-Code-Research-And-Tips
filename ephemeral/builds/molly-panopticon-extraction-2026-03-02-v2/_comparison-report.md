# Package → Build Comparison Report
Extracted from: _pa/synthesis.md Output 4
Verdict: REFINE (4 TYPE A mechanical issues, 0 TYPE B, 0 TYPE C)
Date: 2026-03-02

**Quick Reference:**
- Sections fully followed: 6/10 (S0, S1, S3, S4, S5, S6)
- Sections partially followed: 3/10 (S2, S7, S8)
- Sections not followed: 0/10
- NOVEL instructions followed: 10/12
- STANDARD instructions followed: 9/9
- Channels coordinated per question: avg 4.2 across 6 explored questions (range: 2-6)
- Questions explored: 6/6

**Section 10 Assessment — Channels Per Question:**
- Q1 (Atmospheric signatures): 2 channels (PARTIAL)
- Q2 (Typographic temperature): 6 channels (MULTI-CHANNEL) — strongest
- Q3 (Closing constellation): 5 channels (MULTI-CHANNEL)
- Q4 (Epistemic gravity): 4 channels (MULTI-CHANNEL)
- Q5 (Isolation→Correlation→Synthesis): 3 channels (MULTI-CHANNEL)
- Q6 (Observatory corridors): 5 channels (MULTI-CHANNEL)

---

## Output 4: Package Compliance

### Assessment Method

Compared the 3 research package files (Sections 0-8, 10) against the built HTML source code and the 6 screenshots across 3 viewports. Package instructions were evaluated for evidence in CSS comments, computed CSS values, and visual evidence in screenshots.

### Section-by-Section Assessment

**Section 0: Soul Checklist**
- **Instructed:** border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0, no transform: translateY, no CSS animations, locked palette only, font trinity, 4px spacing scale, max 2 callouts per viewport, container 960px, no cool grays, no pure #000 as page bg, no hover lift, no vertical table borders, 3-category borders (1px/3px/4px, zero 2px), footer with 3px border-top, dark header with #1A1A1A bg / cream text / Instrument Serif / 3px red border-bottom.
- **Evidence:** CSS line 62: `* { border-radius: 0; }`. Line 64: `* { box-shadow: none; }`. No gradient or rgba() found in CSS. Locked palette in :root. Font trinity loaded via Google Fonts. Spacing scale from 4px base in :root variables. Container 960px on line 189. Footer has 3px red border-top (line 1239). Header matches specification (lines 202-228). 3-category borders in variables (line 106-108). Callout count appears well under budget (builder notes 1 of 6-8 budget).
- **Compliance:** FOLLOWED
- **Gap:** Footer uses cream background (#FEF9F5) rather than dark #1A1A1A. The soul checklist says "footer present with 3px border-top" which is met; the dark footer is from Pattern 6 (Section 7), not the soul checklist. Technically compliant with Section 0.

**Section 1: Build Context**
- **Instructed:** 6-zone observatory arc (Threshold, Instrument Floor, Observation Log, Observer's Journal, Survey Manual, Night Sky). Density progression: SPARSE -> DENSE -> MODERATE -> BREATHING -> COMPRESSED -> RELEASE. Background arc: #FEF9F5 -> #FFFFFF -> #FAF5ED -> #FEF9F5 -> #FFFFFF -> #FEF9F5/#FAF5ED. Type arc: Instrument Serif -> Inter + JetBrains Mono -> Instrument Serif returns -> Inter + JetBrains Mono -> Instrument Serif final. 48px+ breathing gap at zone transitions.
- **Evidence:** All 6 zones present with correct class names. Background colors match specification. Transition corridors present between all adjacent zones with 48px+ padding. Zone 1 uses Instrument Serif (display), Zone 2 switches to Inter + JetBrains Mono, Zone 4 returns Instrument Serif, Zone 5 returns Inter + JetBrains Mono, Zone 6 uses Instrument Serif. Density progression visible in padding: Z1 80px, Z2 48px, Z3 48px, Z4 64px, Z5 40px, Z6 80px.
- **Compliance:** FOLLOWED
- **Gap:** Zone 3 padding (48px) matches Zone 2 rather than being distinctly MODERATE vs DENSE, but this is within acceptable range.

**Section 2: Mechanism Selections**
- **Instructed:** 7 mechanisms: (M01) Fractal Self-Similarity at 5 scales [NOVEL], (M02) PULSE Density Rhythm [NOVEL], (M03) Border-Weight Gradient [NOVEL], (M04) Bento Grid [STANDARD], (M05) Typography as Three Voices [NOVEL], (M06) Density Contrast at Key Emotional Moments [NOVEL], (M07) CRESCENDO Compression [STANDARD].
- **Evidence:** M01: Zone padding varies at page scale; component-level label/body contrast visible in instrument panels and callouts. M02: Line-height varies per zone (1.8/1.6/1.7/1.8/1.5/1.8). M03: 4px borders on instrument panels, 3px on table headers, 1px on philosophical blockquotes. M04: 4-column bento grid at desktop, collapses to 1-column at 768px. M05: Instrument Serif on Zone 1/4/6 headings; Inter for body; JetBrains Mono for code. M06: Violent gap waypoint and Goodhart inversion deployed. M07: Zone padding compresses from 80px (Z1) through 40px (Z5) then releases to 80px (Z6).
- **Compliance:** FOLLOWED
- **Gap:** M01 (Fractal) achieves 4 visible scales (page, section, component, character) rather than the full 5 (navigation landmarks not distinctly present). M03 border-weight gradient is deployed but the perceptual difference between 3px and 4px is subtle.
- **Diagnosis:** PACKAGE UNCLEAR — the 5th fractal scale (navigation) was specified in the mechanism but the page has no persistent navigation element to deploy it on.

**Section 3: Research Findings -> Build Actions**
- **Instructed:** 23 findings, 5 validated (ELEVATED), 18 HIGH-relevance. Key: geological depth strata (3-layer background), density contrast at emotional peaks, density debt recovery, viewport principle, pull quotes, cinematic wide-close-wide, velocity interleaving, semantic proximity, setup-payoff arc, component moods, F-pattern.
- **Evidence:** Background 3-layer system present (#FEF9F5, #FFFFFF, #FAF5ED). Density contrast at violent gap and Goodhart. Density debt via `pre + pre { margin-top: 48px }` and recovery gaps. Pull quotes in Instrument Serif with 3px border and 85% max-width. Prose corridor 720px. Velocity bridges between code blocks. Semantic proximity tiers in CSS variables. Code block 2-zone structure (header/body). PULSE width differential in Zone 4 (claim 100%, response 80%). F-pattern with left-aligned headings and 720px reading corridor.
- **Compliance:** FOLLOWED
- **Gap:** Finding 11 (viewport principle — `min-height: 80vh`) not implemented; instead achieved through generous padding. Finding 14 (cinematic wide-close-wide) prose corridor 720px is present but the "close-up" narrowing at Zone 2 is not achieved — Zone 2 uses full 960px container which is the expected behavior for the grid. Net: 20-21 of 23 findings clearly deployed.
- **Diagnosis:** BUILDER DIVERGED (defensible — min-height: 80vh is fragile across viewport sizes; padding-based approach is more robust)

**Section 4: Zone Architecture**
- **Instructed:** 6-zone recipe with specific density, background, mechanisms, components, spacing, emotional register, and transition types per zone. Key specifications: Z1 80px top, Z2 48px, Z3 48px, Z4 64px, Z5 32-40px, Z6 64-80px. Transition types: Z1->2 BRIDGE, Z2->3 SMOOTH, Z3->4 BRIDGE, Z4->5 BRIDGE, Z5->6 SMOOTH.
- **Evidence:** All 6 zones built with correct class names and backgrounds. Zone padding values: Z1=80px/64px, Z2=48px, Z3=48px, Z4=64px, Z5=40px, Z6=80px/64px. 5 transition corridors built with differentiated treatment. Z1->2: 3px border + bridge text (BRIDGE). Z2->3: no border, bg shift only (SMOOTH). Z3->4: 1px border + bridge context (BRIDGE). Z4->5: 3px border + thicker padding (BRIDGE). Z5->6: 1px border + bg shift (SMOOTH).
- **Compliance:** FOLLOWED
- **Gap:** Z5 padding (40px) is at the top of the 32-40px range rather than the compressed end, slightly reducing the CRESCENDO compression differential. Transition types correctly differentiated. Zone component inventories match specification.

**Section 5: Case Study Processes**
- **Instructed:** 3 case study CSS patterns to integrate: DD-003 (Islands — instrument panels with isolation gaps), OD-004 (Confidence — border-weight gradient), DD-006 (Fractal — multi-scale rhythm). Each with adaptation notes.
- **Evidence:** DD-003: instrument-floor grid with 32px gap, self-contained panels with 4px border-left, handoff channel visually subordinate. OD-004: 3-tier border weight (4px established, 3px demonstrated, 1px philosophical) deployed across zones. DD-006: dense/sparse alternation at page scale (zone padding) and component scale (label/body DNA in instrument panels and callouts). Adaptation notes followed: DD-003 32px gap (not 80px ocean), structured grid (not scatter), OD-004 3-register (not 4-layer), DD-006 5 scales (attempted).
- **Compliance:** FOLLOWED
- **Gap:** None significant. All three case study processes integrated with correct adaptations.

**Section 6: Anti-Patterns**
- **Instructed:** 8 anti-patterns to mitigate: Code Wall (HIGH), Callout Cacophony (HIGH), Uniform Density (HIGH), Same-Velocity Stacking (MEDIUM), Traffic-Light Color Adjacency (MEDIUM), Decorative Grid Breaking (MEDIUM), Semi-Transparent Backgrounds (MEDIUM), Whitespace Void (MEDIUM). 7-step check procedure.
- **Evidence:** Code Wall: `pre + pre { margin-top: 48px }` deployed, prose bridges between code blocks. Callout Cacophony: builder reports 1 callout of 6-8 budget — dramatically under-utilized (good). Uniform Density: 5 distinct zone padding values in CSS. Same-Velocity Stacking: velocity bridges deployed between code blocks. Traffic-Light: checkpoints use green, anti-patterns use coral — separated by sufficient content. Decorative Grid: no connecting pseudo-elements on instrument grid. Semi-Transparent: no rgba() found in CSS search. Whitespace Void: anti-pattern fix comment at line 1237 notes void reduction.
- **Compliance:** FOLLOWED
- **Gap:** The auditors' convergent finding that dark blocks become monotonous in the middle suggests the Same-Velocity Stacking mitigation did not fully succeed within Zone 5 — the dark code-block sections stack despite prose bridges. The velocity bridges (14px secondary text) may be too visually thin to break the perceived stacking.
- **Diagnosis:** PACKAGE UNCLEAR — the anti-pattern focused on consecutive `<pre>` elements but did not address consecutive dark-background SECTIONS (which include prose as well as code), which is the actual perceptual problem.

**Section 7: Proven CSS Patterns**
- **Instructed:** 6 proven patterns: (P1) Zone Transition via Background Shift + Spacing, (P2) Code Block as Brass Fitting (Dark 2-Zone), (P3) Blockquote as Eyepiece Moment, (P4) Instrument Panel with Domain-Specific Density, (P5) Inversion Motif (Dark Zone), (P6) Footer as Observatory Door (dark #1A1A1A footer).
- **Evidence:** P1: 5 corridor transitions with background shifts, spacing, and typed borders. P2: 2-zone code blocks with #27272A header and #1A1A1A body. P3: Blockquotes in Instrument Serif italic, 3px border-left, 85% max-width, 40px margins. Violent gap enhanced. Constellation treatment in Zone 6 with 56px inter-quote gap. P4: 8 instrument panels with domain-specific padding and line-height. P5: Goodhart inversion with #1A1A1A background, cream text, 64px padding. P6: NOT deployed — footer uses cream background.
- **Compliance:** PARTIALLY FOLLOWED
- **Gap:** Pattern 6 (dark footer) not implemented. Builder acknowledged this in reflection as a deliberate conservative choice during hardening pass.
- **Diagnosis:** BUILDER DIVERGED — builder preserved Pass 1's cream footer rather than applying Pattern 6. Defensible as a hardening-pass discipline call, but the auditors' silence on the footer suggests it may not register as a problem perceptually.

**Section 8: Structural Propositions**
- **Instructed:** 5 testable propositions: (SP1) Zone boundaries felt not seen, (SP2) 8-domain grid reads as simultaneity, (SP3) Density perceptible at 3+ scales, (SP4) Philosophical voice feels like different person, (SP5) Closing constellation feels like field not list.
- **Evidence:** SP1: Background shifts + typography changes at zone boundaries create perceptual transitions without heavy dividers. SP2: 4-column bento grid at 1440px creates simultaneity. SP3: Density variation visible at page scale (zone padding), section scale (component grouping), and component scale (label/body DNA). SP4: Zone 4 uses Instrument Serif headings, line-height 1.8, wider margins. SP5: 56px inter-quote gap, 85% max-width ragged right, PULSE indent alternation, no background/box framing.
- **Compliance:** FOLLOWED
- **Gap:** SP4 is partially undermined by Zone 4 body text remaining in Inter (only headings and `.voice--philosopher` elements use Instrument Serif). The "different person" effect is present but not as strong as it would be if more Zone 4 body text used the philosopher's voice. SP5 has 9 quotes (generous), with 4 sharing the same category label, creating some visual repetition — but this is content-level, not CSS-level.

### Section 10 Assessment (Compositional Questions)

**Q1: Atmospheric signatures in 8-domain panels**
- CSS citations found: 9 (lines 447-481 — 8 panel variant classes + parent rule)
- Channels coordinated: padding (16px/20px/24px per domain), line-height (1.4-1.7 per domain)
- Channel count: 2 of 7
- Assessment: PARTIAL (1-2). Two perceptible channels deployed. Letter-spacing values were stripped during hardening where sub-perceptual. The package implied 5 channels (padding, line-height, letter-spacing, gap, border-left accent variation); 2 survived with perceptible deltas.

**Q2: Typographic temperature shift**
- CSS citations found: 6 (lines 789, 798, 806, 809 + related)
- Channels coordinated: font-family (Instrument Serif), font-style (italic), font-size (1.0625rem), line-height (1.85), letter-spacing (0.03em), paragraph spacing (space-6)
- Channel count: 6 of 7
- Assessment: MULTI-CHANNEL (3+). Strong execution — the philosopher's voice differs from the architect's voice across 6 measurable dimensions. This is the build's strongest question response.

**Q3: Closing constellation**
- CSS citations found: 3 (lines 1106, 2226 + related constellation rules)
- Channels coordinated: font-family (Instrument Serif), font-size (1.25rem), margin-bottom (56px), border-left (3px), max-width (85%), PULSE indent alternation (even quotes indented 32px)
- Channel count: 5 of 7
- Assessment: MULTI-CHANNEL (3+). Effective field composition with discrete bright points. The PULSE indent alternation and 56px gap between quotes prevent list-reading behavior.

**Q4: Epistemic gravity gradient**
- CSS citations found: 3 (lines 813, 819 + related)
- Channels coordinated: border-width (1px vs 4px), padding (space-8), margin (space-10), max-width (85%)
- Channel count: 4 of 7
- Assessment: MULTI-CHANNEL (3+). The visual gravity difference between Zone 2 (4px borders, tight spacing) and Zone 4 (1px borders, generous spacing) is perceptible. The package implied extending into line-height and font-size variation as well — partially achieved through zone-level rules but not explicitly cited as Q4 responses.

**Q5: Isolation -> Correlation -> Synthesis at 3 scales**
- CSS citations found: 5 (lines 1151, 1158, 1165, 1170, 1194)
- Channels coordinated: content grouping (structural), background-color (zone shift via nightsky-synthesis sub-zone), font-family (display -> body shift at correlation), line-height (compression at correlation)
- Channel count: 3 of 7
- Assessment: MULTI-CHANNEL (3+), though builder notes this is "more intellectual than visual." The 3-scale arc (zone -> section -> component) is structurally present but relies on content ordering more than perceptible CSS differentiation.

**Q6: Observatory corridors**
- CSS citations found: 2 (lines 334, 744)
- Channels coordinated: background-color (distinct per corridor), border (3px/1px/none per transition type), font-family (mono for labels), font-size (14px bridge text), padding (32-48px per corridor)
- Channel count: 5 of 7
- Assessment: MULTI-CHANNEL (3+). Five corridors with differentiated treatment matching the 3-type transition grammar (BRIDGE, SMOOTH). The corridors are architecturally present, though auditors perceived them as "seams" rather than atmospheric spaces — the concept exceeds the perceptual impact.

### Summary

- Sections fully followed: 6/10 (S0, S1, S3, S4, S5, S6)
- Sections partially followed: 3/10 (S2, S7, S8)
- Sections not followed: 0/10
- Section 10 (Compositional Questions): 6/6 questions explored, 5 at MULTI-CHANNEL (3+), 1 at PARTIAL
- **NOVEL instructions followed:** 10/12 (Section 2: M01 at 4/5 scales, M02 FOLLOWED, M03 FOLLOWED, M05 FOLLOWED, M06 FOLLOWED. Section 3 validated: F1 partial (4/5 scales), F2 FOLLOWED, F3 FOLLOWED, F5 FOLLOWED. Section 3 HIGH: F6 FOLLOWED, F7 FOLLOWED, F11 partial, F12 FOLLOWED, F14 FOLLOWED, F15 FOLLOWED, F17 FOLLOWED, F19 FOLLOWED, F22 FOLLOWED)
- **STANDARD instructions followed:** 9/9 (M04, M07, F4, F8, F9, F10, F13, F16, F18, F20, F21, F23 — all deployed)
- **Channels coordinated per question:** avg 4.2 across 6 explored questions (range: 2-6)
- Highest-impact gap: Dark-background overuse in Zones 2 and 5 — the package specified the inversion motif for Zone 4's Goodhart warning ONLY (Pattern 5 explicitly says "use sparingly — if deployed in more than one section, the inversion loses its power"), but the code-block 2-zone treatment and multiple dark-background sections create a perceptual accumulation that dilutes the Goodhart inversion's impact. The package addressed this at the code-block level (dark 2-zone structure) but did not anticipate the cumulative effect of many dark code blocks across a long page.
- Diagnosis: BOTH — The builder followed the dark 2-zone code block pattern faithfully (BUILDER FOLLOWED). But the package did not adequately warn against the cumulative dark-surface area across 10+ code blocks in a 6,700-word page (PACKAGE UNCLEAR). The anti-pattern for "Same-Velocity Stacking" addressed consecutive code blocks but not the macro-level dark-block accumulation that all 5 auditors independently flagged.

> High compliance with moderate perceptual result in the middle third. The gap is not between package and build at the instruction level — the builder followed instructions with precision. The gap is between the package's component-level dark-block specification and the page-level perceptual effect of deploying that specification at scale. The package's anti-pattern mitigations addressed local stacking (consecutive pre elements) but not global dark-surface accumulation across zones.
