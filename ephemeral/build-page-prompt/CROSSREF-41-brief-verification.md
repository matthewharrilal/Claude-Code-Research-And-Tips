# CROSS-REF 41: Line-by-Line Verification of Conventions Brief Against 23 Source Reports

**Agent:** cross-ref-41 (Opus 4.6)
**Date:** 2026-02-19
**Task:** #41 -- Verify every claim, value, and instruction in 10-CONVENTIONS-BRIEF-DRAFT.md against its source report(s)
**Method:** Read all 23 reports in ephemeral/flagship-44-recipe/ (Reports 01-23), the research extraction (01-brief-research.md), and the conventions brief draft (10-CONVENTIONS-BRIEF-DRAFT.md). Built traceability matrix section by section.

**CRITICAL FRAMING (from team lead):** CD-006 IS NOT FLAGSHIP 4/4. The brief must target BEYOND CD-006.

---

## SCORING LEGEND

- **[ACCURATE]** -- Brief faithfully represents source material
- **[DISTORTION]** -- Brief misrepresents or oversimplifies source
- **[OMISSION]** -- Important source material the brief leaves out
- **[UNSOURCED]** -- Brief adds content not found in any source report
- **[CONTRADICTION]** -- Brief contradicts its own source reports
- **[FRAMING]** -- Brief's framing sets wrong expectations vs sources

---

## PREAMBLE (Lines 1-8)

### Claims Verified

| # | Claim in Brief | Source(s) | Verdict |
|---|----------------|-----------|---------|
| P1 | "You are both the telescope (WHY) and the microscope (WHAT)" | Report 14 (Telescope-Microscope), Section 7: "The telescope/microscope problem is a volume problem" | **[ACCURATE]** -- Faithfully captures Report 14's conclusion that the brief IS the telescope and the recipe IS the microscope, fused into one document |
| P2 | "You plan the composition, write the HTML and CSS, and verify your own work" | Report 04 (Conditions) N1 "compositional intel reaches builder"; Report 15 (Always-Flagship) pipeline diagram; Fat Core architecture in PV2-FLAGSHIP-VARIANT | **[ACCURATE]** -- Reflects Fat Core single-agent architecture |
| P3 | "There is no separate planner handing you instructions" | Report 14 Section 6: "Three Instruments, Three Documents, One Builder"; Report 17 (Recipe-Ceiling) Part 9: trust the builder | **[ACCURATE]** |
| P4 | "This brief describes the world you are building inside -- the materials, the physics, the quality of light" | Report 17 Part 3C: dispositional recipe ("tells the builder HOW TO BE while building") | **[ACCURATE]** -- This is the dispositional framing Report 17 recommends |
| P5 | "It does not tell you what to build. That comes from the content." | Report 17 Part 8C: "The recipe's job is not to contain the answer but to create the silence in which the builder can hear the question" | **[ACCURATE]** |
| P6 | "Read this brief once, fully. Then build." | Report 14 Section 3: brief is read ONCE at start to establish intent, recipe read SEQUENTIALLY | **[ACCURATE]** |

### Omissions in Preamble

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| PO1 | No Stack Overview preamble | Report 23 (Stack Integration) Section 3 recommends 5-line "Stack Overview" preamble linking all sections to L1-L5 | **SIGNIFICANT** -- Report 23 explicitly says "Add a 5-line Stack Overview preamble right after 'Read this brief once'" |
| PO2 | No explicit statement that Flagship 4/4 has never been achieved | Report 01 (Definition) "Flagship 4/4 DESIGNED has NEVER been achieved"; Report 16 (Unasked) "meta-to-output ratio is NaN:0" | **MODERATE** -- Builder should know it is attempting something unprecedented |

---

## SECTION 1: IDENTITY (Soul) -- Lines 11-28

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S1-1 | "Warm, sharp, flat, and editorial" | prohibitions.md (identity language); tokens.css; Report 01-brief-research Section 1 | **[ACCURATE]** |
| S1-2 | `border-radius: 0` | prohibitions.md; tokens.css line 126 | **[ACCURATE]** |
| S1-3 | `box-shadow: none` | prohibitions.md | **[ACCURATE]** |
| S1-4 | `background: solid only` | prohibitions.md (no gradients) | **[ACCURATE]** |
| S1-5 | `color: no #000 or #FFF` with warm alternatives | prohibitions.md; tokens.css lines 29-30 | **[ACCURATE]** |
| S1-6 | `opacity: 1 on containers` | prohibitions.md | **[ACCURATE]** |
| S1-7 | Typography trinity: Instrument Serif, Inter, JetBrains Mono | tokens.css lines 67-70; prohibitions.md | **[ACCURATE]** |
| S1-8 | "Serif is never used for body text" | prohibitions.md: "Serif ONLY for display headings" | **[ACCURATE]** |
| S1-9 | Container width 940-960px | CLAUDE.md, PV2, prohibitions.md, MEMORY.md: "Container width 940-960px = NON-NEGOTIABLE" | **[ACCURATE]** |
| S1-10 | Spacing: 4px base, values 8-96px, max single value 96px | tokens.css lines 96-122 | **[ACCURATE]** |

### Omissions in Section 1

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S1-O1 | Missing 3 of 8 absolute prohibitions: `filter: drop-shadow(): NEVER`, `No decorative complexity`, and the Serif-only-headings rule is stated but not in the code block list | 01-brief-research Section 1 lists 8 prohibitions; brief lists 5 in code block | **MODERATE** -- The `drop-shadow` and `no decorative complexity` prohibitions are absent from the code block |
| S1-O2 | Missing explicit color palette values | tokens.css lines 27-39; 01-brief-research lists all 6 locked colors + 5 accent colors with hex values | **SIGNIFICANT** -- The builder needs actual hex values for `--color-primary`, `--color-border`, etc. Without them, it must look them up in tokens.css |
| S1-O3 | Missing border weight system (4px/3px/1px) | tokens.css lines 132-135; Report 03 (CD-006 Forensics) confirms 3-tier border system | **MODERATE** -- Report 17 includes this in "Hard Constraints (15 lines)"; 01-brief-research includes it. Brief mentions borders later but not in Section 1 where identity is established |
| S1-O4 | Missing explicit "2px border is BANNED" rule | tokens.css: only 4px/3px/1px defined; CD-006 forensics: "2px is banned"; 01-brief-research: "No 2px. 3-value system only." | **MINOR** -- Implied by the 3-value system but not stated |

### Distortions in Section 1

| # | Claim | Issue | Severity |
|---|-------|-------|----------|
| S1-D1 | "Five constraints define the identity" but code block shows 5 items | 01-brief-research documents 8 absolute prohibitions | **[DISTORTION]** -- Undercounts. The word "Five" flatly contradicts the source material which lists 8 |

---

## SECTION 2: PERCEPTION THRESHOLDS -- Lines 30-48

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S2-1 | Background delta >= 15 RGB | Report 03 (CD-006), Report 20 (Multi-Coherence), MEMORY.md, remediation audit | **[ACCURATE]** |
| S2-2 | Font-size delta >= 2px | Report 19 (Channels): "Font-size changes < 1px are imperceptible"; 01-brief-research | **[ACCURATE]** |
| S2-3 | Letter-spacing delta >= 0.03em | Report 19: ">= 0.03em"; MEMORY.md: ">=0.5px" (~0.03em at 16px) | **[ACCURATE]** |
| S2-4 | Stacked gap max <= 108px | MEMORY.md S-09 rule; 01-brief-research; tokens.css max 96px per property | **[ACCURATE]** |
| S2-5 | Border presence >= 1 structural border-left per zone | Report 19 (Channels): "border appearance/disappearance is ALWAYS perceptible" | **[ACCURATE]** |
| S2-6 | Component adoption >= 10 families | Report 10 originally specified this | **[UNSOURCED THRESHOLD]** -- see distortion below |
| S2-7 | Mechanism categories >= 4 of 5 | 01-brief-research Section 2; Report 04 (Conditions) | **[ACCURATE]** |
| S2-8 | Multi-coherence >= 3 channels at every zone boundary | Report 20 (Multi-Coherence) R-MC-02; Report 19 (Channels) | **[ACCURATE]** |

### Distortions in Section 2

| # | Claim | Issue | Severity |
|---|-------|-------|----------|
| S2-D1 | "component_adoption: >= 10 component families from merged-components.css" listed as a PERCEPTION THRESHOLD | This is not a perception threshold -- it is a quality floor. Perception thresholds are about whether a human can perceive a CSS delta. Component count has nothing to do with perceptual thresholds. | **[DISTORTION]** -- Conflates two distinct concepts. Report 21 (Anti-Scale) Section 1: semantic density metrics are separate from perception thresholds. Should be moved to Section 9 (Quality Floor). |
| S2-D2 | "mechanism_categories: >= 4 of 5" listed as a PERCEPTION THRESHOLD | Same issue -- mechanism deployment breadth is a quality floor, not a perception threshold | **[DISTORTION]** -- Should be in Section 9 |

### Omissions in Section 2

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S2-O1 | Missing perception-proportional intensity levels (SUBTLE/MODERATE/STRONG) | 01-brief-research Section 2 has a full table: SUBTLE (15 RGB, 2px, 0.03em), MODERATE (20-30 RGB, 3-4px, 0.05em), STRONG (40+ RGB, 6+px, 0.08+em) | **MODERATE** -- Gives builder calibration for how much delta achieves what intensity |
| S2-O2 | Missing spatial threshold >= 24px | Report 19 (Channels): "Padding differences < 24px between adjacent sections are not perceptible as intentional change"; 01-brief-research cites >= 24px | **SIGNIFICANT** -- The stacked gap MAX (108px) is present but the spatial MINIMUM (24px between zones) is absent. The Flagship's padding varied by 16px between some sections which was borderline. |
| S2-O3 | Missing typographic font-weight delta | Report 19: weight shift (400 -> 600) is a channel-level change | **MINOR** -- Implicitly covered by typographic channel but no explicit threshold |

---

## SECTION 3: TRANSITION GRAMMAR -- Lines 50-62

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S3-1 | Three types: SMOOTH, BRIDGE, BREATHING | Report 03 (CD-006 Forensics) ST3; 01-brief-research Section 3; Report 18 (Scales) | **[ACCURATE]** |
| S3-2 | SMOOTH: 15-25 RGB, 1px rule, spacing steady | 01-brief-research Section 3: "Background shifts by 15-25 RGB, 1px horizontal rule" | **[ACCURATE]** |
| S3-3 | BRIDGE: 25+ RGB, tinted band 48-64px, typography shifts | 01-brief-research Section 3 | **[ACCURATE]** |
| S3-4 | BREATHING: 3-4px border, 64-80px spacing, "one or two per page" | 01-brief-research Section 3; CD-006 forensics: `.transition--breathing { margin: 80px; border-top: 3px }` | **[ACCURATE]** |
| S3-5 | "Never stack two BREATHING transitions adjacent" | 01-brief-research Section 3 | **[ACCURATE]** |
| S3-6 | "Never use more than three SMOOTH in sequence without BRIDGE or BREATHING" | 01-brief-research Section 3 | **[ACCURATE]** |

### Omissions in Section 3

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S3-O1 | No concrete CSS values for each transition type | 01-brief-research Section 3 includes CD-006's exact CSS: `.transition--smooth { margin: 48px; border-top: 1px }`, `.transition--bridge { margin: 64px; background: breathing }`, `.transition--breathing { margin: 80px; border-top: 3px }` | **MODERATE** -- Providing exact CSS removes ambiguity about what "48-64px" means concretely |
| S3-O2 | Missing the principle that transition type should MATCH cognitive distance | Report 18 (Scales) Page scale: "Transition type MATCHES the cognitive distance between adjacent sections"; Report 19 (Channels): layout diversity guarantees multi-coherence | **MODERATE** -- The brief says "Match the transition type to the boundary meaning" but doesn't explain the cognitive distance principle |

---

## SECTION 4: MULTI-COHERENCE BINDING -- Lines 64-87

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S4-1 | 6 CSS channels: Chromatic, Typographic, Spatial, Structural, Behavioral, Material | Report 19 (Channels); Report 20 (Multi-Coherence); mechanism-catalog.md | **[ACCURATE]** |
| S4-2 | >= 3 channels must shift at every zone boundary | Report 20 R-MC-02 | **[ACCURATE]** |
| S4-3 | Shifts must point "same semantic direction" | Report 20 R-MC-04, R-MC-05 | **[ACCURATE]** |
| S4-4 | Direction definitions: "deeper", "lighter", "focusing" | Report 20 Section 2 | **[ACCURATE]** but see omission |
| S4-5 | Anti-pattern: bg darkens but spacing increases | Report 20 R-MC-05 | **[ACCURATE]** |
| S4-6 | Worked example: bg #FEF9F5 to #F0EBE3 (18 RGB), font 18->16px, padding 64->48px, 3px border, letter-spacing 0.04em->0.02em | Report 23 (Stack Integration) Section 7 worked example; partially original | **[ACCURATE]** -- Values are plausible and consistent with source material |

### Omissions in Section 4

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S4-O1 | Missing the "RESOLVING" semantic direction | 01-brief-research Section 4 lists 4 directions: DEEPENING, OPENING, FOCUSING, RESOLVING. Brief lists 3: deeper, lighter, focusing. | **MODERATE** -- Brief draft in the PROCESS section uses "resolving" in an example, but it's absent from the formal direction list |
| S4-O2 | Missing channel-count-to-quality scale | 01-brief-research Section 4 + Report 20: "0-1=FLAT (1.5/4), 2=FUNCTIONAL (2.5/4), 3=DESIGNED (3/4), 4-5=COMPOSED (3.5-4/4), 6=FLAGSHIP" | **MODERATE** -- Gives the builder a calibration for how many channels produces what quality tier |
| S4-O3 | Missing R-MC-06 zone count constraint | Report 20 R-MC-06: "2-4 major zones, producing 2-4 zone boundaries. Too many = fragmentation, too few = elimination." | **MINOR** -- Brief says "Choose your own zone count (2-5)" in Section 8 but doesn't explain the tradeoff here |
| S4-O4 | Missing layout diversity recommendation | Report 19 (Channels) core finding: "Layout diversity is the easiest path to multi-coherence. Changing axis pattern inherently shifts Typographic, Spatial, and Structural channels." | **SIGNIFICANT** -- This is the single most actionable path to multi-coherence and it's absent from Section 4. CD-006 achieved 3.4 channels/boundary largely through 5 different axis patterns. |
| S4-O5 | Missing the transition table as a mandatory pre-build artifact in this section | Report 20 R-MC-01: "Builder MUST produce a transition table mapping every major boundary to >=3 channel shifts BEFORE writing CSS" | **MODERATE** -- Mentioned in Section 10 (Conviction Card) and PROCESS but not in the multi-coherence section where the concept is explained |
| S4-O6 | Missing the distinction between zone boundaries and section boundaries | Report 20 R-MC-02: "At every ZONE boundary (not every section boundary)" vs R-MC-06: within-zone sections can shift 1-2 channels | **SIGNIFICANT** -- Brief says "at every zone boundary" but then the worked example references section boundaries. The distinction matters: not EVERY section break needs 3+ channels, only ZONE-LEVEL transitions do. |

---

## SECTION 5: FRACTAL ECHO -- Lines 89-115

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S5-1 | 5 architectural scales: Navigation, Page, Section, Component, Character | Report 18 (Scales); Report 22 (Fractal); scale-research.md | **[ACCURATE]** |
| S5-2 | Navigation ~1440px | Report 18: "Scale 1: NAVIGATION (~1440px zoom -- bird's eye)" | **[ACCURATE]** |
| S5-3 | Page ~960px | Report 18: "Scale 2: PAGE (~960px zoom -- the scroll)" | **[ACCURATE]** |
| S5-4 | Section ~200-400px | Report 18: "Scale 3: SECTION (~200-400px zoom -- one screen)" | **[ACCURATE]** |
| S5-5 | Component ~40-100px | Report 18: "Scale 4: COMPONENT (~40-100px zoom -- one element)" | **[ACCURATE]** |
| S5-6 | Character ~12-20px | Report 18: "Scale 5: CHARACTER (~12-20px zoom -- inline text)" | **[ACCURATE]** |
| S5-7 | Fractal Echo Table requirement | Report 22 (Fractal) Q2; Report 23 (Stack Integration) | **[ACCURATE]** |
| S5-8 | "Pattern direction must be consistent across all 5 rows" | Report 22 Q1; Report 23 | **[ACCURATE]** |
| S5-9 | "This is not decoration. This is what makes a page feel composed rather than assembled" | Report 22 executive summary; general project finding | **[ACCURATE]** |

### Omissions in Section 5

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S5-O1 | Missing bottom-up construction order | Report 18 conclusion: "Scales must be built BOTTOM-UP (largest first)"; Report 22 Q6: "Build scales in order: Navigation -> Page -> Section -> Component -> Character. Never implement Scale N+1 before verifying Scale N is perceptible." | **CRITICAL** -- THE primary lesson from the Flagship failure. The Flagship built all 5 scales in parallel and verified none. The dependency chain (Scale 3 depends on Scale 2 being perceptible) is absent. |
| S5-O2 | Missing minimum perceptual threshold per scale | Report 18 "Gap 2": Navigation (padding>=48px), Page (bg delta>=15 RGB), Section (>=2 component types), Component (padding delta>=4px), Character (tracking delta>=0.02em) | **SIGNIFICANT** -- Without per-scale thresholds, the Fractal Echo Table becomes a planning exercise with no verification |
| S5-O3 | Missing the "3 strong beats 5 weak" principle | Report 18 paradox: "Middle at 2 scales scored PA-05 4/4 while Ceiling at 4 scales scored 1.5/4"; Report 22 Q6: "2-3 STRONG scales beat 5 WEAK scales" | **SIGNIFICANT** -- The brief implies all 5 are equally required. Source material says: prioritize STRONG expression at 3 scales over attempting all 5 weakly |
| S5-O4 | Missing structural echo vs parametric echo distinction | Report 22 Q1: "Structural echo = same TYPE of principle appears at each scale (binary). Parametric echo = DEGREE of expression varies to match the page zone (gradient)." CD-006 has both; Flagship had only structural. | **MODERATE** -- The distinction explains WHY the Flagship's fractal attempt failed despite being "present" |
| S5-O5 | Missing verification column in the Fractal Echo Table template | Report 18 Gap 3: "Add a column: Verification method with the specific test for that scale"; Report 22 Q2: "Min Threshold" column | **MODERATE** -- Without it the table is a plan, not a verifiable artifact |
| S5-O6 | Missing dependency chain diagram | Report 22 Q6: "Scale 3 (Section) depends on Scale 2 (Page) being perceptible; Scale 5 (Character) depends on Scale 2 + Scale 3" | **SIGNIFICANT** -- The builder must know that Character scale without perceptible Page scale is waste |

---

## SECTION 6: COMPOSITIONAL MEMORY PROTOCOL -- Lines 117-138

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S6-1 | CSS comment boundary annotation: `/* Boundary Z2->Z3: DEEPENING */` | Report 20 R-MC-01 (transition table); compositional memory concept | **[ACCURATE]** |
| S6-2 | Count channels shifting, add if fewer than 3 | Report 20 R-MC-02 | **[ACCURATE]** |
| S6-3 | Verify all shifts point same direction | Report 20 R-MC-04, R-MC-05 | **[ACCURATE]** |
| S6-4 | Midpoint render and assessment | Report 23 (Stack Integration) Section 5: stack health check at midpoint | **[ACCURATE]** |
| S6-5 | "Write 3 sentences: designed? flat? weakest?" | Reasonable pedagogical structure; aligns with Report 17's "revision opportunity" | **[ACCURATE]** |
| S6-6 | Category count after every 5th mechanism | Report 04 per-category mechanism minimum; fractal gate concept | **[ACCURATE]** |
| S6-7 | "This protocol adds approximately 15 minutes" | Report estimations of build time overhead | **[UNSOURCED]** -- No source report provides this specific time estimate. Reasonable but invented. |

### Omissions in Section 6

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S6-O1 | Missing the stack health assessment template | Report 23 Section 5 proposes a 1-2 line compressed version: "At midpoint, assess: scale coverage (__/5), channel breadth (__/6), boundary coherence (__% >= 3), density/restraint/confidence (H/M/L each)." | **MODERATE** -- The 3-sentence observation is good but doesn't cover the full stack |
| S6-O2 | Missing "strengthen weakest section" as MANDATORY | Brief says "Strengthen the weakest section before continuing" -- this is good | **N/A** -- Actually present. |

---

## SECTION 7: SELF-CHECK PROTOCOL -- Lines 140-164

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S7-1 | Q1: Squint Test (zone boundaries from color/spacing) | Report 18 (Scales): "Squint test: Cover all body content. Look ONLY at the header + TOC region"; Report 22: progressive zoom method 3 | **[ACCURATE]** |
| S7-2 | Q2: Scroll Test (no 108px+ voids) | S-09 stacking rule; MEMORY.md; Flagship failure (210-276px voids) | **[ACCURATE]** |
| S7-3 | Q3: Second-Half Test (designed moment below 50% scroll) | Report 08 (Verification) designed-moment distribution; PA-65 | **[ACCURATE]** |
| S7-4 | Q4: Channel Count (3+ at most important boundary) | Report 20 R-MC-02 | **[ACCURATE]** |
| S7-5 | Q5: Spatial Skeleton (borders + whitespace communicate structure) | Report 21 (Anti-Scale) spatial confidence section | **[ACCURATE]** |

### Omissions in Section 7

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S7-O1 | Missing scale-specific sub-questions for Q1 | Report 18 Gap 3: "Q1A: Can you identify every zone boundary from COLOR? Q1B: Within one viewport, internal rhythm without reading? Q1C: Can you distinguish a sparse-zone component from dense-zone component? If Q1A fails, Q1B and Q1C are irrelevant." | **MODERATE** -- Sub-questions make the squint test hierarchical and catch scale-dependency violations |
| S7-O2 | Missing the anti-scale PA questions | Report 21 Section 7: "PA-AS-01: SQUINT TEST at 25% zoom, PA-AS-02: ABSENCE TEST (can you identify withheld techniques?), PA-AS-03: COMMITMENT TEST (do choices feel BOLD or TIMID?)" | **MINOR** -- These are audit questions not builder self-checks, but the commitment test overlaps with Q5 |
| S7-O3 | Q4 says "at your most important zone boundary" but should check ALL zone boundaries | Report 20 R-MC-02: "At every zone boundary" not just the most important one | **[DISTORTION]** -- Brief weakens the requirement from "every boundary" to "most important boundary" |

---

## SECTION 8: CREATIVE AUTHORITY -- Lines 166-181

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S8-1 | "You are the composer" | Report 17 (Recipe-Ceiling) Part 8D: "The builder is a composer"; dispositional framing | **[ACCURATE]** |
| S8-2 | Override non-soul values with logged reasoning | Report 06 (Comp-Intel) P2: "generative format that invites compositional moves"; standard design-system override protocol | **[ACCURATE]** |
| S8-3 | Invent new component patterns if content demands | Report 17 Part 5C: "Opus can compose. It proved it with CD-006." | **[ACCURATE]** |
| S8-4 | Choose zone count (2-5), section architecture, mechanism selection, metaphor, density arc | Report 04 (Conditions); Report 17; Report 14 | **[ACCURATE]** |
| S8-5 | Reject mechanisms that don't serve content | Report 21 (Anti-Scale) restraint: "Knowing when MORE deployment hurts rather than helps" | **[ACCURATE]** |
| S8-6 | Anti-scale formula: "Richness is semantic density multiplied by restraint multiplied by spatial confidence" | Report 21 throughout; scale-research.md; MEMORY.md | **[ACCURATE]** |
| S8-7 | "More is not better. Meaning is better." | Report 21 Section 5: "zero in any factor kills richness"; Report 17: restraint principle | **[ACCURATE]** |

### Omissions in Section 8

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S8-O1 | Anti-scale model buried in closing paragraph of creative authority section | Report 23 (Stack Integration) Section 3: "L5 (Anti-Scale) is BURIED. The formula appears once in Section 8. It needs to be the GOVERNING FRAME, not a closing thought." Recommends repositioning as Section 3. | **SIGNIFICANT** -- The anti-scale model is the governing evaluation function for the entire stack. Placing it as a one-liner in Creative Authority devalues it. Report 23 recommends it be Section 3. |
| S8-O2 | Missing operational proxies for the anti-scale formula | Report 21 Section 6: 3 binary floor gates (DENSITY: >=2 component types/viewport; RESTRAINT: >=3 mechanisms deliberately absent; CONFIDENCE: remove-and-check all CSS). Also: "No CSS line should be imperceptible. Zero waste." | **SIGNIFICANT** -- The formula alone is abstract. The gates make it actionable. |
| S8-O3 | Missing the "remove-and-check" protocol | Report 21 Section 6C: "For each CSS rule: comment it out, refresh, can you see the difference? YES=keep, NO=delete permanently." | **MODERATE** -- This is the most teachable aspect of the anti-scale model per Report 21 |
| S8-O4 | Missing explicit restraint instruction (mechanism absences) | Report 21 Section 2: "At least 3 catalog mechanisms deliberately absent"; "No single component type > 35% of instances"; CD-006 withheld 40% of available mechanisms | **MODERATE** -- Brief says "Using fewer mechanisms with deeper intention beats deploying many mechanisms superficially" which captures the spirit but not the operational rule |

---

## SECTION 9: QUALITY FLOOR -- Lines 184-203

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S9-1 | Mechanisms from >= 4 of 5 categories (S/H/C/D/N) | 01-brief-research Section 2; Report 04 per-category minimums | **[ACCURATE]** |
| S9-2 | CSS range 700-1200 typical, 500 under-deployment, 1500 over-engineering | MEMORY.md tier model: Flagship 1000-1500 CSS lines; Report 01 D-01 >=14 mechanisms | **[ACCURATE]** as guidelines |
| S9-3 | Component adoption >= 10 families | Report 10 draft | **[UNSOURCED THRESHOLD]** -- The ">=10" number does not appear in any research report. It first appears in the conventions brief draft itself. CD-006 uses 11 component types. But no source report derives or validates "10" as the threshold. |
| S9-4 | WCAG 2.1 AA compliance (skip link, landmarks, focus, contrast ratios) | General web accessibility standards; remediation spec added full ARIA | **[ACCURATE]** |
| S9-5 | Responsive at 768px | MEMORY.md audit protocol: "Always audit at 1440px AND 768px" | **[ACCURATE]** |
| S9-6 | "Soul remains unchanged" at responsive breakpoints | prohibitions.md: identity constraints are universal | **[ACCURATE]** |

### Omissions in Section 9

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S9-O1 | Missing Flagship-specific mechanism count (>=14) | Report 01 (Definition) D-01: ">=14 total mechanism instances, including >=5 unique mechanism types and >=4 reinforcing pairs" | **SIGNIFICANT** -- Brief says "4 of 5 categories" but says nothing about TOTAL mechanism count. The Flagship spec requires >=14 instances. CD-006 had 41. |
| S9-O2 | Missing multi-coherence instances count (>=3) | Report 01 D-04: ">=3 multi-coherent boundary transitions" | **MODERATE** -- Brief covers multi-coherence in Section 4 but Quality Floor doesn't specify a minimum instance count |
| S9-O3 | Missing 5/5 fractal scale requirement | Report 01 D-05: "All 5 architectural scales expressed with pattern-direction consistency. 3 strong minimum." | **MODERATE** -- Brief covers fractal in Section 5 but Quality Floor doesn't set the minimum |
| S9-O4 | Missing the 5-category names full expansion | The brief uses S/H/C/D/N abbreviations and provides expansions, but the mapping to mechanism-catalog.md's actual 5 categories should be verified for consistency | **MINOR** |

### Distortion in Section 9

| # | Claim | Issue | Severity |
|---|-------|-------|----------|
| S9-D1 | "Deploy mechanisms from at least 4 of 5 categories" -- the minimum is 4 | Report 01 D-01 for FLAGSHIP is "5 categories with >=1 per category" (since Flagship requires per-category minimums promoted from Ceiling box). Brief targets 4/5 which is MIDDLE TIER, not Flagship. | **[DISTORTION]** -- Under ALWAYS FLAGSHIP (Report 15), the Ceiling context box contents promote to universal: "Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)." Brief should require ALL 5 categories. |

---

## SECTION 10: CONVICTION CARD -- Lines 205-227

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| S10-1 | Conviction statement template (content, zones, principle, direction, metaphor) | Report 08 (Verification); 01-brief-research conviction section; PV2 conviction card concept | **[ACCURATE]** |
| S10-2 | Commitment bullets (3+ channels, designed moment in second half, midpoint pause, override logging, self-check) | Synthesized from Sections 4, 6, 7, 8 requirements | **[ACCURATE]** -- Each bullet traces to a requirement stated earlier |
| S10-3 | "This is not bureaucracy. It is the difference between building with intention and building by accumulation." | Report 17 (Recipe-Ceiling): compositional memory concept; dispositional framing | **[ACCURATE]** -- Captures the dispositional vs compliance distinction |

### Omissions in Section 10

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| S10-O1 | Missing transition table as a required conviction deliverable | Report 20 R-MC-01: transition table is a REQUIRED deliverable; Report 23 Section 2: "The transition table IS the stack in tabular form" | **MODERATE** -- The PROCESS section mentions transition table but the Conviction Card doesn't explicitly require it alongside the conviction statement |
| S10-O2 | Missing fractal echo table as a conviction deliverable | Report 22: "BEFORE writing CSS, fill a 5-row table" | **MODERATE** -- Same: mentioned in PROCESS but not in the commitment list |

---

## PROCESS SECTION -- Lines 230-254

### Claims Verified

| # | Claim | Source(s) | Verdict |
|---|-------|-----------|---------|
| SP-1 | Phase A: Understand (read content, identify zones, tensions, metaphor) | Report 14 Phase A; Report 17 Part 9 step 1; Report 04 conditions | **[ACCURATE]** |
| SP-2 | "If a metaphor emerges from the content's structure, name it. If not, build without one" | Report 15 (Always-Flagship): "Addition Test = ONLY ESCAPE VALVE"; content without tension enters FLAT MODE | **[ACCURATE]** |
| SP-3 | Phase B: Plan (conviction statement, transition table, fractal echo table) | Reports 20, 22, 23 all require these planning artifacts | **[ACCURATE]** |
| SP-4 | Phase C: Build sequence (HTML first, then CSS: reset+soul+base -> zone bg -> borders -> typography -> richness -> responsive) | Report 18 bottom-up construction; Report 22 fractal build order | **[ACCURATE]** -- This sequence respects the scale dependency chain |
| SP-5 | Four verification pauses during build | Novel synthesis of: HTML landmark check, zone bg RGB check, border check, typography check | **[ACCURATE]** -- Each pause maps to a known failure mode |
| SP-6 | Phase D: Verify (5 self-check questions, cascade value table) | Sections 7 + 8 of brief; Report 08 (Verification) | **[ACCURATE]** |
| SP-7 | Three deliverables: output.html, _build-log.md, _cascade-value-table.md | Report 07 (Input-Spec); Report 08 (Verification); PV2 deliverable spec | **[ACCURATE]** |

### Omissions in Process

| # | What's Missing | Source | Severity |
|---|----------------|--------|----------|
| SP-O1 | Missing explicit mandate to read content FULLY before starting | Report 17 Part 9: "Invest in content analysis. A 20-minute Opus pass that reads the content as a READER"; Report 14: "Read the content first" | **MINOR** -- Implied by Phase A but not stated as a time investment |
| SP-O2 | Missing the self-revision pass | Report 17 Part 4D: the lead-sheet pipeline includes Step 5 (Critique) and Step 6 (Revision). The brief's process goes Plan -> Build -> Verify but has no explicit "look at what you built and REVISE before verifying" step. | **SIGNIFICANT** -- Report 17 identifies revision opportunity as one of the 7 conditions for 4/4. Report 16 (Unasked) UQ-04 proposes 3-pass architecture. The brief currently goes straight from Build to Verify with no self-revision phase. |
| SP-O3 | Missing reading order for reference files | Report 07 (Input-Spec) Section 4: "Reading order: content first, then constraints+principles, then vocabulary, then execution" | **MINOR** -- The brief assumes the builder will know to read content first |
| SP-O4 | Missing explicit "build boundary-by-boundary, not channel-by-channel" instruction | Report 23 (Stack Integration) Section 2: "Not 'all backgrounds first' but 'Zone 1 complete (bg + type + spacing + borders), then Zone 2 complete'" | **[CONTRADICTION]** -- The PROCESS section says "CSS in this sequence: reset+soul+base typography -> zone backgrounds -> structural borders -> typography zones -> element-level richness -> responsive" which IS channel-by-channel, NOT boundary-by-boundary. Report 23 explicitly warns that this was the Flagship's exact architecture and it FAILED. |

---

## GLOBAL FINDINGS

### Cross-Cutting Omissions (Material Not in Any Section)

| # | What's Missing | Source(s) | Severity |
|---|----------------|-----------|----------|
| GO-1 | Missing Stack Overview preamble (L1-L5 map) | Report 23 Section 3: 5-line preamble linking sections to stack layers | **SIGNIFICANT** |
| GO-2 | Anti-Scale Model has no dedicated section | Report 23 Section 3: "Reposition Section 3 as Anti-Scale Model" -- currently displaced by Transition Grammar | **SIGNIFICANT** |
| GO-3 | No worked example showing one boundary through ALL 4 stack lenses (L1-L5) | Report 23 Section 7: detailed 30-line worked example of Z1->Z2 boundary through perception, scales, channels, multi-coherence, and anti-scale simultaneously | **MODERATE** |
| GO-4 | Missing layout diversity as a strategy | Report 19 core finding: "Layout diversity is the easiest path to multi-coherence"; CD-006 used 5 axis patterns; Report 03 forensics documents this extensively | **SIGNIFICANT** |
| GO-5 | Missing the Flagship 14-dimension specification as a reference | Report 01 defines 14 binary dimensions (D-01 through D-14) for Flagship 4/4 | **MODERATE** -- The brief doesn't need all 14, but key ones (D-01 mechanism count, D-04 multi-coherence instances, D-05 fractal scales, D-13 metaphor) should inform quality floor |
| GO-6 | Missing any mention of the cascade value table's role in multi-coherence verification | Report 20 Level 1 verification: programmatic check of computed CSS at each boundary | **MINOR** -- Table mentioned in PROCESS deliverables but not explained as a verification tool |
| GO-7 | No mention of Sonnet vs Opus model considerations | Report 17 Part 1B; MEMORY.md: "Sonnet-for-builders is unexamined"; Report 05 Chain D | **N/A** -- Outside brief scope (brief is model-agnostic) |
| GO-8 | CSS build sequence contradicts stack integration architecture | PROCESS Phase C says channel-by-channel; Report 23 says boundary-by-boundary | **CRITICAL** -- See SP-O4 above |

### Cross-Cutting Contradictions

| # | Brief Says | Source Says | Resolution |
|---|------------|-------------|------------|
| GC-1 | Section 2 lists component adoption and mechanism categories as "perception thresholds" | These are quality floors, not perception thresholds. Perception thresholds are about whether a CSS delta is visible to the human eye. | **Move to Section 9** |
| GC-2 | Section 9 requires "4 of 5 categories" | Under ALWAYS FLAGSHIP (Report 15), all Ceiling-tier requirements promote to universal: 5/5 categories with per-category minimums | **Change to "all 5 categories"** |
| GC-3 | Section 7 Q4 says "at your most important zone boundary" | Report 20 R-MC-02: "At every zone boundary (not every section boundary)" | **Change to "at every zone boundary"** |
| GC-4 | PROCESS Phase C says "CSS in this sequence: zone backgrounds -> structural borders -> typography zones" | Report 23 Section 2: "Not 'all backgrounds first' but 'Zone 1 complete, then Zone 2 complete'" | **Resolve by hybrid**: set up base CSS (soul + reset), then build zone-by-zone |
| GC-5 | Section 1 says "Five constraints" but lists exactly 5 | Source material documents 8 absolute prohibitions | **Change count or expand list** |

---

## SUMMARY SCORECARD

### Section-by-Section Quality

| Section | Claims Verified | Distortions | Omissions | Unsourced | Contradictions |
|---------|-----------------|-------------|-----------|-----------|----------------|
| Preamble | 6 [ACCURATE] | 0 | 2 (1 SIGNIFICANT) | 0 | 0 |
| S1: Identity | 10 [ACCURATE] | 1 (count "five") | 4 (1 SIGNIFICANT) | 0 | 0 |
| S2: Thresholds | 6 [ACCURATE] | 2 (conflation) | 3 (1 SIGNIFICANT) | 1 (component count) | 0 |
| S3: Transitions | 6 [ACCURATE] | 0 | 2 (0 SIGNIFICANT) | 0 | 0 |
| S4: Multi-Coherence | 5 [ACCURATE] | 0 | 6 (2 SIGNIFICANT) | 0 | 0 |
| S5: Fractal Echo | 9 [ACCURATE] | 0 | 6 (1 CRITICAL, 3 SIGNIFICANT) | 0 | 0 |
| S6: Memory Protocol | 6 [ACCURATE] | 0 | 1 | 1 (15 min estimate) | 0 |
| S7: Self-Check | 5 [ACCURATE] | 1 (Q4 weakened) | 2 | 0 | 0 |
| S8: Creative Authority | 7 [ACCURATE] | 0 | 4 (2 SIGNIFICANT) | 0 | 0 |
| S9: Quality Floor | 6 [ACCURATE] | 1 (4/5 not 5/5) | 4 (1 SIGNIFICANT) | 1 (component count) | 0 |
| S10: Conviction Card | 3 [ACCURATE] | 0 | 2 | 0 | 0 |
| Process | 7 [ACCURATE] | 0 | 4 (1 SIGNIFICANT) | 0 | 1 (build order) |
| **TOTALS** | **76 [ACCURATE]** | **5** | **40** | **2** | **1** |

### Severity Distribution

| Severity | Count | Items |
|----------|-------|-------|
| **CRITICAL** | 2 | S5-O1 (missing bottom-up scale order), GO-8/SP-O4 (CSS build sequence contradicts stack integration) |
| **SIGNIFICANT** | 14 | PO1 (stack preamble), S1-O2 (color palette), S2-O2 (spatial threshold), S4-O4 (layout diversity), S4-O6 (zone vs section boundary), S5-O3 (3 strong > 5 weak), S5-O6 (dependency chain), S8-O1 (anti-scale buried), S8-O2 (anti-scale gates), S9-O1 (mechanism count), S9-D1 (4/5 not 5/5), SP-O2 (missing revision pass), GO-1 (stack preamble), GO-2 (anti-scale section), GO-4 (layout diversity) |
| **MODERATE** | 18 | Various -- see individual sections |
| **MINOR** | 6 | Various -- see individual sections |

---

## TOP 5 RECOMMENDATIONS (Prioritized)

### 1. FIX CRITICAL: Resolve CSS build order contradiction
The PROCESS section instructs channel-by-channel build (zone backgrounds -> borders -> typography). Report 23 warns this was the Flagship's exact architecture and it FAILED because it precludes boundary-level multi-coherence. Change to: "Build zone-by-zone. For each zone, write ALL channels (background, borders, typography, spacing) before moving to the next zone."

### 2. FIX CRITICAL: Add scale dependency chain and bottom-up construction mandate
Section 5 must state: "Build scales in order: Navigation -> Page -> Section -> Component -> Character. After Page scale, STOP and squint-test. If zone backgrounds are not perceptible, fix them before proceeding. Character scale without perceptible Page scale is waste."

### 3. RESTRUCTURE: Give anti-scale model its own section (Section 3)
Move Transition Grammar into Section 4 (it is an operational mechanism of multi-coherence) or into the Process section. Dedicate Section 3 to the anti-scale formula with 3 operational proxies: DENSITY (>=2 component types/viewport, zero imperceptible CSS), RESTRAINT (>=3 mechanisms deliberately absent), CONFIDENCE (remove-and-check all CSS).

### 4. ADD: Layout diversity as a multi-coherence strategy
In Section 4, add: "The easiest path to multi-coherence is layout diversity. When you change axis pattern (e.g., from single-column to 2-column grid), you inherently shift Typographic, Spatial, and Structural channels -- guaranteeing 3+ channel shifts. Use at least 2 distinct layout topologies across the page."

### 5. CORRECT: Upgrade quality floor to Flagship requirements
Section 9: Change "4 of 5 categories" to "all 5 categories." Add minimum mechanism count (>=14 instances). Add minimum multi-coherence instances (>=3 zone boundaries with >=3 channels). Add fractal requirement (5/5 scales, 3 strong minimum).

---

## VERDICT

**The conventions brief draft is a STRONG foundation.** 76 of 81 traced claims are accurate. The dispositional framing (Report 17's recommendation) is well-executed. The brief reads as a "world description" not a checklist -- this is exactly right.

**But it has 2 CRITICAL issues and 14 SIGNIFICANT omissions** that could reproduce known failure modes:

1. The CSS build order (channel-by-channel) directly contradicts the lesson from the Flagship failure and Report 23's analysis
2. The scale dependency chain is absent, meaning the builder may repeat the Flagship's mistake of building all 5 scales in parallel without verifying the foundation
3. The anti-scale model is buried rather than governing
4. Layout diversity -- the single most actionable path to multi-coherence -- is entirely absent
5. Quality floor targets Middle tier (4/5 categories) rather than Flagship tier (5/5 categories, >=14 mechanisms)

**After these 5 fixes, the brief should be ready for assembly.**

---

*End of cross-reference verification. 23 source reports read. 81 claims traced. 40 omissions documented. 5 distortions flagged. 1 contradiction identified. 5 prioritized recommendations provided.*
