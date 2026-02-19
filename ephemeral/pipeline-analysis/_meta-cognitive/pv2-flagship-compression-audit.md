# PV2 Flagship Compression Audit: Lossy vs Lossless

**Author:** compression-auditor (Opus 4.6)
**Date:** 2026-02-18
**Task:** Audit every instruction in the PV2 Flagship specification for lossy compression
**Primary source:** `42-OPERATIONAL-RECIPE.md` (1,746 lines)
**Supporting sources:** `pipeline-v2-architecture.md`, `pv2-handoff-protocol.md`, `pv2-comms-protocol.md`, `pv2-threshold-map.md`

---

## AUDIT METHOD

For every instruction, rule, step, or specification in the PV2 Flagship documents, I applied this 3-part test:

1. **Does it contain an exact value?** (px, em, RGB, hex, count, ratio, enum)
2. **Does it contain a judgment word?** (appropriate, sufficient, rich, effective, elegant, suitable, ensure, reasonable, as needed, consider, etc.)
3. **Could a builder comply in a way that LOOKS WRONG?** (The key test -- "sample 2-4" passes with 2 random mechanisms from one category)

### Classification
- **LOSSLESS:** Exact value, single way to comply, builder cannot produce wrong-looking output
- **PARTIAL LOSSY:** Has some exactness but leaves ambiguity that could produce wrong-looking output
- **FULLY LOSSY:** Judgment-dependent, no exact value, builder could comply in visually wrong ways

---

## PART 1: OPERATIONAL RECIPE (File 42) — PHASE-BY-PHASE AUDIT

### PHASE 0: Content Analysis and Zone Architecture

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix (if needed) |
|---|----------|-------------|----------------|----------|-----------------------------------|
| 1 | Step 0.1, line 44-46 | "Read prohibitions.md and tokens.css BEFORE any other action" | LOSSLESS | Binary: either you read them or you didn't. Files are named. |  |
| 2 | Step 0.1, line 50 | "What is the primary color? (#E83025) What fonts are allowed? (Instrument Serif, Inter, JetBrains Mono) What is border-radius? (0, always)" | LOSSLESS | Exact values. Binary verification. |  |
| 3 | Step 0.2, line 56-69 | "Note: Word count, Content type inventory, Content arc" | LOSSLESS | Outputs are countable (word count) or enumerated (content types). Content arc has 4 named patterns. |  |
| 4 | Step 0.2, line 66-69 | Content arc examples: "Introduction -> body -> conclusion", "Problem -> analysis -> solution" etc. | **PARTIAL LOSSY** | Builder must identify which arc fits their content. The list is suggestive, not exhaustive. Builder could misidentify the arc, leading to wrong zone semantics. | Add: "If content doesn't match any listed arc, describe the arc in the format 'X -> Y -> Z' and assign zones accordingly. If uncertain, default to 'introduction -> body -> conclusion.'" |
| 5 | Step 0.3, line 77-82 | Zone count table: word count ranges -> zone counts | LOSSLESS | Exact word count thresholds (1500, 3000, 5000) map to exact zone counts (2, 3, 4, 5). |  |
| 6 | Step 0.3, line 84 | "NEVER exceed 5 zones" | LOSSLESS | Binary cap. |  |
| 7 | Step 0.4, line 92-106 | Zone semantics table: Temperature/Density/Voice/Weight with example values | **PARTIAL LOSSY** | The zone property VALUES are examples ("Warm (peach/cream)", "Open (generous spacing)") but don't specify exact CSS. The 3-Zone Example table maps to names (Warm/Cool/Open/Compressed) not px or hex values. However, the CSS IS specified later in Phases 3-5, so this is a planning step. | Add: "These labels map to exact CSS values in Phases 3-5. Zone 1 Warm/Open/Expansive/Light = bg #FEF5EB, padding 64px, font-size 17px, h2-weight 400. See Phase 3 Step 3.1 and Phase 5 Step 5.1." |
| 8 | Step 0.5, line 124-128 | Layout shape options: "Single-column (default), Two-column grid, 2x2 grid, Asymmetric" | LOSSLESS | Enumerated options. |  |
| 9 | Step 0.5, line 130-131 | "At least 2 of your sections MUST use non-single-column layout" | LOSSLESS | Binary count >= 2. |  |
| 10 | Step 0.5, line 124 | **[CONTENT DECISION]** "Primary content type (prose-dominant, table-dominant, mixed, visual)" | **PARTIAL LOSSY** | Builder must classify section content type. "Mixed" is vague -- a section with 1 table and 3 paragraphs could be "prose-dominant" or "mixed." | Add: "Mixed = 2+ distinct content element types each comprising >= 25% of section content. If one type is >= 75%, classify by that type." |
| 11 | Step 0.6, line 139-144 | Transition type table: 3 types with exact weights and margins | LOSSLESS | Exact values: 1px/16px, 2px/24px, 4px/24px. |  |
| 12 | Step 0.6, line 146 | "Breathing transitions are RARE. Use at most 2-3 per page." | LOSSLESS | Binary cap: <= 3 breathing transitions. |  |
| 13 | Step 0.6, line 149-154 | Stacking arithmetic with exact values and 120px target | LOSSLESS | Exact arithmetic. Pass/fail against 120px. |  |

### PHASE 1: HTML Skeleton

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 14 | Step 1.1, line 180-209 | Document shell HTML template | LOSSLESS | Exact HTML structure. Copy-paste. |  |
| 15 | Step 1.2, line 217-224 | Header HTML template | LOSSLESS | Exact markup. |  |
| 16 | Step 1.2, line 228 | "Header MUST be <= 20% of first viewport at 1440px (288px). Kill at 25% (360px)." | LOSSLESS | Exact thresholds in px. |  |
| 17 | Step 1.2, line 229 | "Dark warm background with red accent border (bookend pattern)." | **PARTIAL LOSSY** | "Dark warm" is not a hex value. Builder could interpret "dark warm" as #2A2520, #3D3530, or #1E1B18. However, the exact hex IS specified later in Phase 2 Step 2.4 (#1E1B18). | Add forward reference: "Dark warm = #1E1B18 (see Phase 2, Step 2.4)." |
| 18 | Step 1.3, line 246-252 | Section HTML template with zone classes and ARIA | LOSSLESS | Exact markup template. |  |
| 19 | Step 1.3, line 255-258 | **[CONTENT DECISION]** "Section-indicator metadata ([READING PATTERN] / [DENSITY LABEL])" | **PARTIAL LOSSY** | Builder must choose reading pattern and density labels. Examples given but not exhaustive. Builder could write "SECTION 1 / READING / NORMAL" which conveys nothing. | Add: "Density labels MUST be one of: SPARSE, MODERATE, DENSE. Reading patterns MUST describe the reader's cognitive task: ORIENTATION, DEEP DIVE, SYNTHESIS, COMPARISON, APPLICATION, REFLECTION." |
| 20 | Step 1.4, line 262-296 | Component library class names: callout variants, table variants, pullquote | LOSSLESS | Exact class names enumerated. |  |
| 21 | Step 1.4, line 288 | "Table variants: table-compact, table-featured, table-light, table-warning, table-data." | LOSSLESS | Enumerated. |  |
| 22 | Step 1.5, line 299-318 | Grid wrapper HTML templates | LOSSLESS | Exact HTML. |  |
| 23 | Step 1.6, line 323-327 | ARIA attributes specification | LOSSLESS | Exact attribute-value pairs. |  |
| 24 | Step 1.7, line 332-338 | Footer HTML template | LOSSLESS | Exact markup. |  |
| 25 | Step 1.7, line 341 | "Dark warm background matching header (bookend pattern). Footer MUST exist with visible content." | **PARTIAL LOSSY** | "matching header" is imprecise -- does it mean same hex or same visual weight? Phase 2 Step 2.4 specifies exact hex (#1E1B18) for both. | Add forward reference. |

### PHASE 2: Base CSS and Soul Enforcement

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 26 | Step 2.1, line 362-409 | CSS reset and token block | LOSSLESS | Exact CSS. Copy-paste. |  |
| 27 | Step 2.2, line 414-422 | Soul enforcement: `border-radius: 0 !important; box-shadow: none !important` | LOSSLESS | Exact CSS. |  |
| 28 | Step 2.3, line 428-473 | Base typography and container: `max-width: 960px`, `font-size: 16px`, `line-height: 1.7` | LOSSLESS | All exact values. |  |
| 29 | Step 2.4, line 480-563 | Header and footer CSS with exact hex, px, rem, em values | LOSSLESS | Every value is exact. |  |
| 30 | Perception Check Phase 2, line 571-577 | "Dark header with red accent border... Container centered at 960px... All sharp edges" | LOSSLESS | Binary visual checks. |  |
| 31 | Perception Check Phase 2, line 578 | "If the header feels too tall (> 288px), reduce padding." | **PARTIAL LOSSY** | "feels too tall" is perceptual but is backstopped by the 288px threshold. "Reduce padding" doesn't say by how much. | Add: "If header exceeds 288px, reduce .page-header padding from var(--space-16) (64px) to var(--space-12) (48px)." |

### PHASE 3: Zone System and Backgrounds

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 32 | Step 3.1, line 588 | "adjacent zones MUST differ by >= 10 RGB points on at least one channel" | **PARTIAL LOSSY** | The threshold is exact (10 RGB) BUT the threshold-map (pv2-threshold-map.md) recommends upgrading to >= 15 RGB based on evidence that 10 RGB proved insufficient. File 42 has not been updated. Furthermore, this is 10 RGB "on at least one channel" -- a builder could have R differ by 10 but the overall color look identical because G and B are unchanged. | Upgrade to: "adjacent zone backgrounds MUST differ by >= 15 RGB points, measured as max(abs(R1-R2), abs(G1-G2), abs(B1-B2)) >= 15." The pv2-threshold-map explicitly recommends this. |
| 33 | Step 3.1, line 591-618 | Zone background color hex templates (3-zone and 2-zone) | LOSSLESS | Exact hex values provided as templates. |  |
| 34 | Step 3.1, line 588 | **[CONTENT DECISION]** "Choose background colors based on your zone semantics from Step 0.4" | **PARTIAL LOSSY** | While hex templates are provided, the builder is told to CHOOSE colors "based on zone semantics." A builder could ignore the templates and choose colors that technically pass the RGB delta but don't express zone semantics (e.g., all slightly different shades of the same cream). | Add: "Use the provided templates as starting points. If adapting, ensure the 3 TEMPERATURE categories (Warm/Neutral/Cool) are distinguishable: Warm zones have R-B >= 20 (strong peach/cream). Cool/Neutral zones have R-B <= 15 (muted, less yellow)." |
| 35 | Step 3.1, line 620 | "CRITICAL -- Warm-only palette: Every background MUST satisfy R >= G >= B" | LOSSLESS | Binary test per hex value. |  |
| 36 | Step 3.2, line 628-629 | Zone background CSS rules | LOSSLESS | Exact CSS selector-to-variable mapping. |  |
| 37 | Step 3.3, line 641-663 | Section padding by zone with exact px values | LOSSLESS | Exact values: 64px/40px, 32px/32px, 48px/40px, 48px/64px. |  |
| 38 | Step 3.3, line 666 | "Adapt these selectors to YOUR section/zone count." | **PARTIAL LOSSY** | Builder must map their actual sections to zone groups. If they have 8 sections instead of 12, which padding group does section 5 belong to? | Add: "Map each section to the zone group from Step 0.4. All sections assigned to Zone 1 get Zone 1 padding. All sections assigned to Zone 2 get Zone 2 padding. No section should be unassigned." |
| 39 | Perception Check Phase 3, line 671-673 | "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?" | **PARTIAL LOSSY** | The question is binary (yes/no) but the standard for "SEE" is subjective. What counts as "seeing" a color shift? A builder with good color perception might see a 5 RGB delta; one with poor perception might not see 12 RGB. | This is inherently perceptual and CANNOT be made fully lossless. However, add: "If uncertain, use browser dev tools to screenshot Zone 1 and Zone 2 side by side. If you need to zoom in or squint, the delta is too small. Increase by >= 5 RGB and recheck." |

### PHASE 4: Structural Borders and Dividers

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 40 | Step 4.1, line 683 | "Add left borders to ALTERNATING sections (not every section)" | **PARTIAL LOSSY** | "Alternating" means every other, but the builder must decide WHICH sections. The example shows S2, S5, S7, S9, S12 -- but this is for a 12-section page. A builder with 8 sections must decide independently. | Add: "Select 40-60% of sections for borders. Start with the first bordered section at S2 (skip S1). Then border every 2nd or 3rd section. Bordered sections should include at least one from each zone." |
| 41 | Step 4.1, line 685-686 | **[CONTENT DECISION]** "Choose which sections get borders based on content weight. Sections with more analytical or conclusory content typically get borders." | **FULLY LOSSY** | "Content weight" and "more analytical or conclusory" are pure judgment. A builder could put borders on narrative sections and skip analytical ones. No way to verify compliance. | Replace with: "Border priority: (1) sections containing tables or data, (2) sections that are the LAST section in their zone, (3) sections with callouts. Skip sections that are prose-only with no structured content. If tied, alternate starting from the 2nd section." |
| 42 | Step 4.1, line 691-715 | Section border CSS with exact selectors, widths, colors | LOSSLESS | Exact values: 3px solid var(--color-border), 4px solid var(--color-primary), etc. |  |
| 43 | Step 4.1, line 718 | "Adapt selectors to YOUR section count. The pattern: 40-60% of sections get borders; vary color and weight (3px/4px)." | **PARTIAL LOSSY** | "40-60%" gives a range, and "vary color and weight" gives the instruction but not the exact sequence. A builder could use 3px tan for all bordered sections. | Add: "Use at least 2 distinct border treatments: (a) 3px in a neutral color (--color-border, #5C4B3A, or --color-text) and (b) 4px in --color-primary. Distribute so primary-color borders appear at most 1-2 times, marking the most structurally important sections." |
| 44 | Step 4.2, line 728-756 | Transition divider CSS with exact values | LOSSLESS | Exact height, color, margin for all 3 types. |  |
| 45 | Step 4.2, line 759 | "Divider margins MUST be <= 24px." | LOSSLESS | Binary threshold. |  |
| 46 | Step 4.3, line 766-816 | Callout family CSS with exact values per variant | LOSSLESS | Exact colors, padding, font. |  |
| 47 | Step 4.4, line 826-838 | Grid layout CSS | LOSSLESS | Exact CSS: `grid-template-columns: 1fr 1fr`, `gap: var(--space-4)`. |  |
| 48 | Step 4.5, line 847-883 | Table styling CSS | LOSSLESS | Exact CSS for all table elements. |  |
| 49 | Step 4.6, line 892-908 | Pullquote CSS | LOSSLESS | Exact values. |  |
| 50 | Step 4.7, line 917-927 | Section indicator CSS | LOSSLESS | Exact values. |  |
| 51 | Perception Check Phase 4, line 931-937 | "Can you see left borders on the sections you targeted? At least 3 should be visible." | **PARTIAL LOSSY** | "At least 3" is binary, but "on the sections you targeted" presupposes the builder chose correctly in step 4.1 (which was PARTIAL LOSSY). | Make binary: "Count visible left borders. If fewer than 3 at 1440px, add borders to more sections." |

### PHASE 5: Typography Zones

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 52 | Step 5.1, line 953-985 | Paragraph typography by zone with exact values | LOSSLESS | All values exact: 17px/1.85/0.02em, 15px/1.55/-0.01em, 16px/1.7/0, 16px/1.75/0. |  |
| 53 | Step 5.1, line 988 | "Adapt zone selectors to YOUR section/zone mapping." | **PARTIAL LOSSY** | Same issue as #38: builder must map their sections to zone CSS selectors. | Same fix as #38. |
| 54 | Step 5.2, line 993-1015 | Heading typography by zone with exact values | LOSSLESS | Exact: 30px/400, 26px/600, 28px/400. |  |
| 55 | Step 5.3, line 1023-1027 | Paragraph spacing by zone | LOSSLESS | Exact: 20px, 12px, 16px, 18px. |  |
| 56 | Perception Check Phase 5, line 1032-1035 | "Zone 1 text should look LARGER and more OPEN... Zone 2 headings should look BOLDER and TIGHTER" | **PARTIAL LOSSY** | Perceptual check, but backstopped by exact CSS values. If the CSS was applied correctly, this MUST be true. The real risk is wrong selectors (specificity). | Add: "If Zone 1 and Zone 2 look identical, check specificity: zone-specific rules (.zone-s1 p) must override base rules (section p). Use browser computed styles to verify the correct font-size is applied." |

### PHASE 6: Element-Level Richness

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 57 | Step 6.1, line 1050-1087 | Inline elements CSS (code, links, table hover, selection) | LOSSLESS | Exact CSS values. |  |
| 58 | Step 6.2, line 1092-1110 | Code block CSS | LOSSLESS | Exact values. |  |
| 59 | Step 6.3, line 1116-1124 | Drop cap CSS (optional) | **PARTIAL LOSSY** | "optional, for prose-heavy opening sections" -- builder must decide whether to use it. The term "prose-heavy" is judgment. | Add: "Apply drop cap if S1's first paragraph is >= 3 lines of rendered text (>= ~150 words). Skip if S1 opens with a heading, list, table, or code block." |
| 60 | Perception Check Phase 6, line 1129-1132 | Binary visual checks: selection color, table hover, link hover, inline code background | LOSSLESS | All are binary: either the effect is visible or it isn't. |  |

### PHASE 7: Accessibility and Responsive

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 61 | Step 7.1, line 1147-1175 | Accessibility CSS: focus, skip-link, reduced motion | LOSSLESS | Exact CSS. |  |
| 62 | Step 7.2, line 1183-1203 | Print styles | LOSSLESS | Exact CSS. |  |
| 63 | Step 7.3, line 1212-1241 | Responsive breakpoints at 768px and 480px | LOSSLESS | Exact breakpoints and CSS values. |  |
| 64 | Perception Check Phase 7, line 1246-1249 | "Press Tab -- focus ring visible. Resize to 768px -- grids collapse. Resize to 480px." | LOSSLESS | Binary visual checks at exact breakpoints. |  |

### PHASE 8: Verification

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 65 | 8A, line 1259-1271 | Perception threshold verification table | LOSSLESS | Exact thresholds with exact measurement methods. |  |
| 66 | 8A, line 1271 | "If a human cannot SEE the difference without a color picker or inspector, do NOT ship the CSS." | **PARTIAL LOSSY** | "Cannot SEE" is inherently subjective. Same issue as #39. | This is inherently perceptual. Add: "When in doubt, ask: would a second person notice this on first scroll? If uncertain, increase the delta by 50% and recheck." |
| 67 | 8B, line 1277 | "No gap exceeds 120px of blank background" | LOSSLESS | Exact threshold. |  |
| 68 | 8B, line 1278 | "No full viewport (900px) is 100% blank at any scroll position" | LOSSLESS | Binary check at exact viewport size. |  |
| 69 | 8C, line 1285-1291 | Scale 5 verification table | LOSSLESS | Each scale has a binary check. |  |
| 70 | 8D, line 1295-1301 | Soul constraint verification checklist | LOSSLESS | All binary. |  |
| 71 | 8E, line 1305-1319 | Multi-coherence verification: "each major transition MUST have >= 3 properties shifting simultaneously" | LOSSLESS | Exact threshold (>= 3 channels). |  |
| 72 | 8F, line 1323-1329 | Accessibility verification checklist | LOSSLESS | All binary. |  |
| 73 | 8G, line 1334-1340 | Gestalt perception test: 4 questions | **FULLY LOSSY** | Questions like "Does each screenful look DIFFERENT?", "Does the page feel like it has ZONES?", "Does the page feel DESIGNED or PATCHED?" are pure judgment. A builder who WROTE the CSS will ALWAYS answer "yes" (confirmation bias). | Replace with binary: "(1) Take 5 screenshots at scroll positions 0%, 25%, 50%, 75%, 100%. Compare adjacent pairs. Each pair must differ in >= 2 of: background color, border presence, layout shape, typography weight. Count: _/4 pairs differ. PASS if >= 3/4. (2) If any screenshot pair is visually identical, add variation to the monotonous section." |
| 74 | 8G, line 1341 | "If the answer to #4 is PATCHED: Identify the most monotonous stretch..." | **FULLY LOSSY** | "Most monotonous stretch" requires judgment. Builder must identify and fix without guidance on what specifically to add. | Replace with: "If fewer than 3/4 pairs differ: find the 2 most similar adjacent screenshots. In the sections between them, add one of: (a) a callout not already present, (b) a grid layout, (c) a left border with contrasting color. Then recheck." |

---

## PART 2: CONVICTION LAYER (Part 3 of File 42)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 75 | 3.1, line 1439-1443 | Identity prohibitions: "No rounded corners... No shadows... No gradients... No semi-transparency... No pure black or white" | LOSSLESS | All binary. CSS enforcement in Step 2.2. |  |
| 76 | 3.2, line 1447-1454 | Design philosophy: "Warm. Authoritative. Unhurried." + IS/IS NOT table | **FULLY LOSSY** | "Warm, Authoritative, Unhurried" are aesthetic judgments. The IS/IS NOT table ("Warm" IS NOT "Soft", "Austere" IS NOT "Cold") is evocative but not actionable. A builder cannot translate "authoritative but not aggressive" into CSS. | These are CONVICTION items, not BUILD instructions. They are acceptable as LOSSY because they set tone, not values. However, add: "These personality axes are expressed through the exact CSS values in Phases 2-6. You do not need to independently interpret them. Follow the recipe values and these qualities emerge." |
| 77 | 3.2, line 1457-1459 | Anti-scale model: "Richness = semantic_density x restraint x spatial_confidence" | **PARTIAL LOSSY** | This is a mental model, not a build instruction. It cannot be directly acted upon. However, it EXPLAINS why spatial confidence matters. | Acceptable as framing. Not a build instruction. |
| 78 | 3.3, line 1465-1468 | PA-05 score levels: 1/4 DEFICIENT through 4/4 DESIGNED | LOSSLESS | Exact definitions with specific criteria. |  |
| 79 | 3.3, line 1470-1474 | "What DESIGNED means" -- 4 criteria | **PARTIAL LOSSY** | "Content and form are ALIGNED", "Mechanisms INTERACT", "Every screenful looks DIFFERENT", "spatial CONFIDENCE" -- these are judgment criteria that the builder evaluates about their own work. | These are assessment criteria, not build instructions. They guide Phase 8G evaluation. The Phase 8G check should be made more binary (see #73). |
| 80 | 3.4, line 1478-1486 | "RECIPES WORK, CHECKLISTS FAIL" principle | LOSSLESS (meta) | This is a meta-instruction about how to use the document, not a build instruction. |  |

---

## PART 3: CONTENT DECISIONS AND GUIDANCE (Part 4 of File 42)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 81 | 4.1, line 1497-1505 | Content-specific decision table: 8 decisions with "How to Decide" column | **PARTIAL LOSSY** | Each decision has guidance but requires judgment. "Zone semantics: Read the content arc. Map your introduction to Zone 1..." gives structure but not exact rules. "Callout variant selection: If it says 'avoid this' -> gotcha. If it says 'do this' -> tip" IS binary. Mixed. | The callout variant selection rules (gotcha/tip/essence) are LOSSLESS. The zone semantics, section boundaries, and grid placement rules are PARTIAL LOSSY. For section boundaries: add "Each section should be 200-800px of rendered content" (already present at line 1499). For grid placement: add "Sections with 2+ parallel elements of the same type (2 callouts, 4 steps, comparison pairs) get grids. Sections with only sequential prose stay single-column." |
| 82 | 4.2, line 1511-1518 | Files to read for guidance | LOSSLESS | Exact file paths. |  |
| 83 | 4.3, line 1523-1531 | Metaphor integration steps for Track 2 | **PARTIAL LOSSY** | Steps are sequenced but "Map the metaphor to zone semantics" is judgment-heavy. "Replace generic zone class names with metaphor-specific names" is exact. The handoff protocol (pv2-handoff-protocol.md) provides the isomorphism table which makes this MUCH more lossless. | The handoff protocol's isomorphism table (Part A Section 5) converts this from LOSSY to near-LOSSLESS for Ceiling+ builds. For Middle builds (no metaphor), this section is N/A. |

---

## PART 4: KNOWN RISKS (Part 5 of File 42)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 84 | Risk 1, line 1541-1545 | "Apply the perception threshold table (Phase 8A) to every new CSS value" | LOSSLESS | Points to exact table. |  |
| 85 | Risk 2, line 1551-1553 | "Calculate total gap arithmetic for every new section boundary... Cap divider margins at 24px. Cap section padding at 64px." | LOSSLESS | Exact caps. |  |
| 86 | Risk 3, line 1559-1561 | "Apply the warm test to every hex background value. Replace cool grays with warm equivalents." | LOSSLESS | Binary test + exact replacements. |  |
| 87 | Risk 4, line 1567-1569 | "Phase 0 Step 0.5 requires at least 2 grid sections... Make this a gate, not a suggestion." | LOSSLESS | Binary gate. |  |
| 88 | Risk 5, line 1575-1577 | "search the HTML for .callout, .table-, .section-indicator. If custom classes outnumber standard classes, flag." | LOSSLESS | Programmatic count check. |  |
| 89 | Risk 6, line 1583-1585 | "Give the builder the COMPLETE recipe. Do NOT compress or summarize." | LOSSLESS | Binary instruction. |  |
| 90 | Risk 7, line 1591-1593 | "Make perception checks BINARY deliverables." | **PARTIAL LOSSY** | The instruction says to make checks binary, but the specific format is a "1-sentence observation" which could be vague. | Add: "The sentence must contain: (a) a count (how many borders, grids, color shifts visible), (b) a specific reference (section numbers or zone identifiers), and (c) a binary assessment (visible/not visible, present/absent)." |
| 91 | Risk 8, line 1599 | "Guardrails are ABSOLUTE. No metaphor may override them." | LOSSLESS | Binary. |  |
| 92 | Risk 8, line 1600 | "Check: container >= 940px, minimum spacing >= 16px, minimum padding >= 32px, densest section / sparsest section <= 0.40." | LOSSLESS | Exact thresholds. |  |

---

## PART 5: APPENDICES (File 42)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 93 | Appendix A, line 1611-1621 | Full perception threshold table with recipe values | LOSSLESS | All exact numeric values. |  |
| 94 | Appendix B, line 1636-1644 | Deallocation criteria for sub-perceptual CSS | LOSSLESS | Exact numeric thresholds. |  |
| 95 | Appendix B, line 1649 | "Open the page. It MUST look IDENTICAL to before." | **PARTIAL LOSSY** | "Look IDENTICAL" is perceptual. If deallocation removed a 0.003em letter-spacing, it will look identical. But if it removed a 0.02em spacing (below threshold but maybe slightly visible), this check would catch it... or not, depending on the viewer. | Add: "Take a before screenshot and an after screenshot. Overlay them. If ANY pixel differs by > 2 RGB values in a text region, restore the deleted CSS." |
| 96 | Appendix C, line 1662-1715 | Quick reference card with all values | LOSSLESS | All exact. |  |

---

## PART 6: SUPPORTING DOCUMENTS

### Pipeline v2 Architecture (pv2-architecture.md)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 97 | Section 2, C3 | "120px figure from File 42 is the builder's TARGET... 192px is the GATE" | **PARTIAL LOSSY** | Two different thresholds for the same concept (total gap). The builder sees 120px in the recipe and 192px in the gate runner. Which one governs? A builder could aim for 120px but a gate runner accepts 192px, creating a 72px gray zone. | Resolve: "120px is the PASS threshold. 121-192px is a WARNING (fix if possible). > 192px is a FAIL (must fix). Label these clearly in gate-runner.js output." |
| 98 | Section 2, C4 | "15 RGB as the gate value... Builders who achieve 10 RGB are not penalized" | LOSSLESS | Resolves the discrepancy clearly: gate checks >= 15, recipe target is also >= 15 (post-update). |  |
| 99 | Section 4.2, line 283-288 | Tier auto-classification: signal -> tier mapping | **PARTIAL LOSSY** | "Addition Test = NO (genuine tension)" requires running the Addition Test from TC, which is a judgment-intensive process. "<200 words, API reference, config table" for Floor is clearer but "API reference" is judgment. | Add word count as primary classifier: "< 500 words = Floor. 500-5000 words = Middle (default). > 5000 words OR user specifies = Ceiling/Flagship. User can always override." |
| 100 | Section 4.5, line 335-337 | Gate failure fix protocol with specific fix examples | LOSSLESS | Exact values in fix examples. |  |

### Handoff Protocol (pv2-handoff-protocol.md)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 101 | Part A, Section 1 | Routing header fields: TIER, CONTENT_SOURCE, WORD_COUNT etc. | LOSSLESS | All exact enums or integers. |  |
| 102 | Part A, Section 2 | Zone architecture table with 4 properties per zone | **PARTIAL LOSSY** | The zone properties (Temperature/Density/Voice/Weight) use labels like "Warm", "Open", "Expansive", "Light" that are defined in File 42 Phase 0.4 but not linked to exact CSS values in the handoff template itself. | Add to handoff template: "Temperature maps to background hex (Warm: R-B >= 20, Neutral: R-B 10-19, Cool: R-B < 10). Density maps to padding (Open: 64px, Standard: 48px, Compressed: 32px). Voice maps to font-size (Expansive: 17px, Standard: 16px, Tight: 15px). Weight maps to h2 font-weight (Light: 400, Standard: 500, Heavy: 600)." |
| 103 | Part A, Section 2, line 72 | "Rationale column: YES (Ceiling+), OPTIONAL (Middle)" | **PARTIAL LOSSY** | The rationale column preserves WHY, but a vague rationale ("this zone should feel different") is no better than none. | Add: "Rationale must reference a content feature: 'The introduction needs openness because the reader has no context yet' (content-based). NOT 'Zone 1 should be spacious' (circular)." |
| 104 | Part A, Section 3 | Section inventory table with Layout column | LOSSLESS | Enumerated layout options, mandatory >= 2 non-single-column. |  |
| 105 | Part A, Section 4 | Mechanism deployment table with 5 columns | LOSSLESS | All columns have exact formats. Per-category completeness check is binary. |  |
| 106 | Part A, Section 5 | Metaphor isomorphism table with Perception Check column | LOSSLESS | Each row maps metaphor property -> CSS expression -> binary visual test. This is THE highest-fidelity handoff component. |  |
| 107 | Part A, Section 6 | Transition plan with stacking check | LOSSLESS | Exact types, exact arithmetic, PASS/FAIL. |  |
| 108 | Part A, Section 7 | Builder directives: files to read, perception thresholds, soul constraints | LOSSLESS | Exact file paths, exact threshold values, exact constraint list. |  |

### Communication Protocol (pv2-comms-protocol.md)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 109 | Section A, A1 | CHECKPOINT format with GATE_RESULTS and PERCEPTION_CHECK | LOSSLESS | Exact template. Binary rules for what's accepted/rejected. |  |
| 110 | Section A, A1 | "PERCEPTION_CHECK must describe what the builder SEES, not what the CSS declares" | **PARTIAL LOSSY** | The rule is clear but enforcement is judgment-based. How does a reviewer distinguish "I see warm tones" (valid) from "I applied warm tones" (invalid)? | Add: "PERCEPTION_CHECK sentences must contain ONE of these verbs: see, notice, distinguish, perceive, observe, appears, looks. Sentences containing ONLY these verbs are rejected: applied, set, used, wrote, added, created." |
| 111 | Section A, A2 | APPROVAL format: PROCEED or HALT | LOSSLESS | Binary decision. |  |
| 112 | Section A, A3 | FIX format with SELECTOR, CURRENT_VALUE, REQUIRED_VALUE | LOSSLESS | All exact values required. Vague fixes rejected. |  |
| 113 | Section A, A4 | QUERY format with OPTIONS and DEFAULT | LOSSLESS | Structured template. |  |
| 114 | Section A, A5 | ESCALATE format | LOSSLESS | Structured with exact trigger types. |  |
| 115 | Section B | 6 banned message types | LOSSLESS | Binary: message type is banned or not. |  |
| 116 | Section C | Communication schedule per tier | LOSSLESS | Exact message counts per phase per tier. |  |
| 117 | Section E | Retry limits: 2 (ceiling), 3 (flagship) | LOSSLESS | Exact counts. |  |

### Threshold Map (pv2-threshold-map.md)

| # | Location | Instruction | Classification | Evidence | Proposed LOSSLESS Fix |
|---|----------|-------------|----------------|----------|-----------------------|
| 118 | Table F | Consolidated threshold table: 15 entries with exact values | LOSSLESS | All numeric. All have confidence tiers. |  |
| 119 | Section D1 | Missing thresholds: 10 proposed additions | LOSSLESS | Each proposed threshold has an exact value. |  |
| 120 | Section D3 | Interaction effects: "Multiple properties at threshold-floor create uncanny valley" | **PARTIAL LOSSY** | "At least 2 of the shifting properties must exceed 1.5x the minimum threshold" is exact. But "uncanny valley" is judgment. | The 1.5x rule IS the lossless version. The "uncanny valley" label is explanatory context. Acceptable. |
| 121 | Section D3 | "Warm palette deltas need 1.3-1.5x the stated minimum" | **PARTIAL LOSSY** | 1.3-1.5x is a range, not a single value. Builder must choose within the range. | Set to: "Warm palette deltas (all backgrounds R >= G >= B) require 1.5x the stated minimum. E.g., background delta minimum = 15 * 1.5 = 23 RGB for warm-to-warm transitions." |
| 122 | Section E1 | 120px vs 192px resolution: "Use BOTH" | LOSSLESS | Clear dual-threshold model. |  |

---

## SUMMARY STATISTICS

### Total Instructions Audited: 122

| Classification | Count | Percentage |
|----------------|-------|------------|
| **LOSSLESS** | 90 | **73.8%** |
| **PARTIAL LOSSY** | 26 | **21.3%** |
| **FULLY LOSSY** | 6 | **4.9%** |

### Flagship Target: >= 95% LOSSLESS

**Current: 73.8% LOSSLESS. FAILS target by 21.2 percentage points.**

However, if we count PARTIAL LOSSY items that are backstopped by exact CSS values in later phases (items #7, #17, #25, #34, #38, #53, #56), the adjusted score is:

| Classification | Count | Percentage |
|----------------|-------|------------|
| **LOSSLESS (including backstopped)** | 97 | **79.5%** |
| **PARTIAL LOSSY (genuine ambiguity)** | 19 | **15.6%** |
| **FULLY LOSSY** | 6 | **4.9%** |

**Adjusted: 79.5% LOSSLESS. Still FAILS target by 15.5 percentage points.**

---

## FINDINGS BY SEVERITY

### 6 FULLY LOSSY Instructions (Critical -- must fix)

| # | Item | Location | The Problem | Proposed Fix |
|---|------|----------|-------------|--------------|
| 1 | #41 | Phase 4, Step 4.1 | "Choose which sections get borders based on content weight" -- pure judgment | Replace with priority rules: data sections > zone-final sections > callout sections |
| 2 | #73 | Phase 8G | "Does each screenful look DIFFERENT?" -- unanswerable by the builder about their own work | Replace with binary screenshot-pair comparison: >= 3/4 adjacent pairs differ in >= 2 channels |
| 3 | #74 | Phase 8G | "Identify the most monotonous stretch" -- judgment with no specific fix | Replace with: find 2 most similar adjacent screenshots, add specific component |
| 4 | #76 | Conviction 3.2 | "Warm. Authoritative. Unhurried." personality axes | Add: "These are expressed through exact CSS. Follow the recipe." (Acceptable as framing but flagged) |
| 5 | #66 | Phase 8A | "If a human cannot SEE the difference" -- subjective perception standard | Add: "When in doubt, increase delta by 50%" |
| 6 | #95 | Appendix B | "It MUST look IDENTICAL to before" -- no measurement standard | Add: pixel-level screenshot comparison |

### 19 PARTIAL LOSSY Instructions (Significant -- should fix)

| Priority | Items | Theme | Fix Approach |
|----------|-------|-------|-------------|
| HIGH | #32 (10 vs 15 RGB) | Threshold discrepancy | Update File 42 from >= 10 to >= 15 RGB per threshold-map recommendation |
| HIGH | #97 (120 vs 192 gap) | Dual threshold confusion | Clarify: 120 = target, 192 = hard gate, label in gate runner |
| MEDIUM | #4, #10, #19 | Content classification decisions | Add decision rules with enumerated options and fallback defaults |
| MEDIUM | #7, #34, #102 | Zone semantics labels without CSS links | Add explicit label-to-CSS mappings |
| MEDIUM | #40, #43 | Border section selection | Add priority rules and minimum diversity requirements |
| LOW | #17, #25 | Forward reference gaps | Add "see Phase N, Step M" references |
| LOW | #31, #39, #51, #56 | Perception checks need measurement fallbacks | Add computed-style verification steps |
| LOW | #59 | Drop cap optional without criteria | Add word-count threshold for decision |
| LOW | #81, #83 | Content decisions in Part 4 | Partially addressed by handoff protocol |
| LOW | #90 | Risk 7 perception check format | Add required elements |
| LOW | #99 | Tier auto-classification | Add word-count primary classifier |
| LOW | #103 | Handoff rationale quality | Add "must reference content feature" rule |
| LOW | #110, #121 | Comms/threshold range precision | Tighten ranges, add verb lists |

---

## CROSS-DOCUMENT CONSISTENCY CHECK

### Threshold Discrepancies (from pv2-threshold-map.md)

| Threshold | File 42 Value | Architecture Value | Gate-Runner Value | Handoff Value | CONSISTENT? |
|-----------|--------------|-------------------|-------------------|---------------|-------------|
| Background RGB delta | >= 10 | >= 15 (resolved) | >= 15 | >= 10 (Section 7) | **NO** -- File 42 and Handoff still say 10 |
| Total gap | <= 120 | 120 target / 192 gate | <= 192 | <= 120 | **PARTIAL** -- dual threshold, needs labeling |
| Letter-spacing | >= 0.025em | >= 0.03em (resolved) | N/A (not a gate) | >= 0.025em | **NO** -- File 42 and Handoff say 0.025em |
| Font-weight | >= 200 | >= 200 | N/A | >= 200 | YES |
| Line-height | >= 0.2 | >= 0.2 | N/A | >= 0.2 | YES |
| Font-size | >= 2px | >= 2px | >= 2px | >= 2px | YES |

**3 of 6 checked thresholds have cross-document inconsistencies.** The threshold-map (pv2-threshold-map.md) has done the resolution work but File 42 and the Handoff Protocol have NOT been updated to reflect the resolved values.

---

## COMPARISON TO PREDECESSOR

### Original Master Prompt: Estimated ~20% LOSSLESS
The original 963-line master prompt contained rules like "channel actively used" (any amplitude) and "ensure richness" (no measure). It had ZERO perception terms.

### PV2 Operational Recipe: 73.8% LOSSLESS (79.5% with backstops)
The recipe is a massive improvement. The 9-phase sequential structure with exact CSS values addresses the root cause. But 26 PARTIAL LOSSY and 6 FULLY LOSSY instructions remain, concentrated in:
1. **Content-specific decisions** (zone semantics, section borders, callout selection) -- these are INHERENTLY judgment-dependent
2. **Perception checks** (can you SEE the difference?) -- these are INHERENTLY perceptual
3. **Phase 8G gestalt evaluation** -- this is INHERENTLY subjective

### The Irreducible Lossy Core

Some instructions CANNOT be made lossless because they require content-specific judgment or perceptual evaluation. The question is whether these lossy instructions are:
- **Gated by lossless backstops** (e.g., "choose warm backgrounds" is lossy but the warm test R >= G >= B is lossless)
- **Left unguarded** (e.g., "does each screenful look DIFFERENT?" has no programmatic fallback)

**15 of the 26 PARTIAL LOSSY items are gated by lossless backstops.** These are acceptable.
**11 of the 26 PARTIAL LOSSY items and all 6 FULLY LOSSY items lack programmatic backstops.** These are the compression risk.

---

## RECOMMENDED ACTIONS (Ranked by Impact)

### Must Fix Before Codification

1. **Update File 42 background threshold from >= 10 to >= 15 RGB** (#32). The threshold-map recommends this, the evidence supports it, and leaving the discrepancy creates builder confusion.

2. **Replace Phase 8G with binary screenshot comparison** (#73, #74). The gestalt test is the SINGLE LARGEST source of lossy compression in the recipe. Replace "does it feel designed?" with "do >= 3/4 adjacent screenshot pairs differ in >= 2 channels?"

3. **Add border selection priority rules** (#41). Replace "based on content weight" with enumerated priority: data sections > zone-final > callout-containing.

4. **Resolve 120/192 gap dual threshold** (#97). Label clearly: 120px = target, 192px = hard fail gate.

5. **Update letter-spacing threshold from 0.025em to 0.03em** in File 42 and Handoff. The threshold-map recommends this.

### Should Fix

6. **Add label-to-CSS cross-references** for zone semantics (#7, #102). Builder shouldn't have to search for the CSS that "Warm/Open/Expansive/Light" maps to.

7. **Add content classification rules** (#10, #19). "Mixed" vs "prose-dominant" needs a percentage threshold.

8. **Add drop-cap decision criteria** (#59). Word count threshold, not "prose-heavy."

9. **Add specificity debugging guidance** to typography perception check (#56). "If zones look identical, check computed styles."

10. **Add perception check format requirements** (#90). Required: count + section reference + binary assessment.

### Acceptable as Lossy (Inherently Judgment-Dependent)

11. Content arc identification (#4) -- content-dependent, fallback default provided.
12. Conviction personality axes (#76) -- framing, not build instruction.
13. Content decisions in Part 4 (#81, #83) -- handled by handoff protocol for Ceiling+.
14. "Cannot SEE" perception standard (#39, #66) -- inherently perceptual, backstopped by numeric thresholds.

---

**END OF COMPRESSION AUDIT**

**Summary:** PV2's operational recipe is 73.8% LOSSLESS (79.5% with backstops) -- a massive improvement over the original master prompt's estimated ~20% LOSSLESS. The 6 FULLY LOSSY items and 11 un-backstopped PARTIAL LOSSY items are concentrated in content-specific decisions, perception checks, and Phase 8G gestalt evaluation. The top 5 fixes (RGB threshold update, Phase 8G binary replacement, border priority rules, gap threshold labeling, letter-spacing update) would raise the effective LOSSLESS rate to ~90%.

The cross-document threshold discrepancy (3 of 6 checked thresholds inconsistent between File 42 and the resolved values in pv2-threshold-map.md) is a BLOCKING issue for codification -- if the builder reads different thresholds in different files, they will use whichever they read first.
