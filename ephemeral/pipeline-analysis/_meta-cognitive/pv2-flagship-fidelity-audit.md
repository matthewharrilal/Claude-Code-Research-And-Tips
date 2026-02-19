# PV2 Flagship Fidelity Audit: File 42 vs Architecture Documents

**Author:** fidelity-auditor (Opus 4.6)
**Date:** 2026-02-18
**Task:** Line-by-line comparison of File 42 (42-OPERATIONAL-RECIPE.md) against PV2 architecture documents for FLAGSHIP tier fidelity
**Scope:** Flagship-only. What did the architecture preserve, soften, reinterpret, or ignore from File 42?

---

## Part A: Step-by-Step Fidelity Check

### PHASE 0: Content Analysis and Zone Architecture

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 0.1 | Read `prohibitions.md` (353 lines) + `tokens.css` (174 lines) BEFORE any other action. Verify: primary color (#E83025), fonts (Instrument Serif, Inter, JetBrains Mono), border-radius (0, always). | Tier-routing: "FULL -- same as Middle" for Flagship. Recipe-compilation: "Reads prohibitions + tokens. Verifies soul knowledge." Architecture: builder receives tokens.css + prohibitions.md. | **FAITHFUL** -- All documents preserve the mandatory read + verify pattern. |
| 0.2 | Read content source completely. Note word count, content type inventory (7 types listed: paragraphs, tables, lists, code blocks, quotes, figures, callouts), content arc (4 patterns listed). Write down totals. | Tier-routing: "FULL -- same as Middle" for Flagship at this step. Recipe-compilation: "Reads content source, inventories word count + element types + content arc." | **FAITHFUL** -- The 7 content types and 4 arc patterns are not explicitly enumerated in the architecture docs, but the compilation references them via line numbers. No content loss for Flagship. |
| 0.3 | Zone count table: <1500=2, 1500-3000=3, 3000-5000=4, 5000+=5. NEVER exceed 5 zones. Alexander/Salingaros formula cited. | Tier-routing: Flagship zone count "4-5". Architecture: "2-5 zones" in gate SC-12. Recipe-compilation: references lines 75-88, notes "Why" paragraph excluded. | **FAITHFUL** -- The 5-zone ceiling and table are preserved. Tier-routing correctly narrows Flagship to 4-5. |
| 0.4 | Zone semantics table (temperature, density, voice, weight). 3-zone and 2-zone templates provided with specific values (e.g., Zone 1 = Warm/Open/Expansive/Light). | Tier-routing: Flagship "zone semantics informed by metaphor from TC output. Reinforcing mechanism pairs required (>= 2 pairs encoding same semantic through different CSS channels)." | **REINTERPRETED** -- File 42 provides CONTENT-AGNOSTIC zone semantics. The tier-routing doc adds a Flagship-specific requirement (reinforcing mechanism pairs >= 2) that File 42 does NOT mention. This is an ADDITION (see Part C). The base zone semantics are preserved, but the metaphor overlay for Flagship is architecture invention. **Impact: Medium.** The addition is justified by TC pipeline output but changes the character of Phase 0 from pure content analysis to metaphor-informed analysis. |
| 0.5 | Section architecture: determine section count, zone assignment, primary content type, layout shape. At least 2 sections MUST use non-single-column layout. Grid layouts require HTML wrapper divs. | Tier-routing: Flagship "FULL -- same as Middle" at this step, but with HTML structure "verified against metaphor requirements." Expected grids: "4-6" for Flagship. | **SOFTENED** -- File 42 says "at least 2" grid sections. Tier-routing RAISES this to "4-6" for Flagship, which is an enhancement, not a softening. BUT the "verified against metaphor requirements" clause adds a gate File 42 doesn't have. Net effect: strengthened for Flagship, which is reasonable but not in the source. |
| 0.6 | Transition types: smooth (1px, 16px margins), bridge (2px, 24px margins), breathing (4px, 24px margins). Breathing = max 2-3 per page. Stacking arithmetic: worst-case 108px for breathing < 120px target. Every boundary must have an assigned type. | Tier-routing: Flagship "ENHANCED -- same as Ceiling. Border rhythm explicitly mapped to metaphor. Stacking arithmetic verified with tighter tolerance (max gap <= 108px)." | **REINTERPRETED** -- File 42's 120px is a TARGET. The tier-routing doc TIGHTENS this to 108px for Flagship as a hard cap, citing File 42's own worst-case arithmetic. This is a reasonable interpretation: File 42 showed breathing worst case = 108px, so setting 108px as Flagship cap means Flagship can't exceed worst-case breathing. **Impact: Low.** Tighter is better for Flagship. But 120px vs 108px is a real constraint change. |
| Phase 0 Checkpoint | 6 items: soul loaded, content analyzed, zones determined, zone semantics assigned, section architecture planned (>=2 grids), transitions assigned. "Do NOT proceed until all boxes are checked." | Recipe-compilation: "Checks: Soul loaded, content analyzed, zones determined, sections planned, transitions assigned." | **FAITHFUL** -- All 6 checkpoint items preserved. |

### PHASE 1: HTML Skeleton

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 1.1 | Complete HTML document shell template with DOCTYPE, meta tags, Google Fonts links (Instrument Serif, Inter, JetBrains Mono), skip-link, header/main/footer structure. | Tier-routing: Flagship "FULL -- same as Middle, but HTML structure verified against metaphor requirements before proceeding." Architecture: builder receives recipe. | **FAITHFUL** -- Template preserved. The "verified against metaphor" addition is Flagship-specific overlay. |
| 1.2 | Header HTML: header-inner div, header-label (category), h1 (title), header-subtitle (one sentence), header-meta (author, date, reading time, version). Constraints: <= 20% first viewport at 1440px (288px), kill at 25% (360px). Dark warm background with red accent border. | Architecture: "header (bookend pattern)" referenced. Recipe-compilation: references lines 214-231. | **FAITHFUL** -- The 20%/25% viewport constraint is specific and preserved through line reference. The exact pixel limits (288px/360px) are in File 42 but not explicitly restated in architecture. |
| 1.3 | Section markup: `<section class="zone-s[N]" aria-label="Section [N]: [Title]">` with page-container div, section-indicator metadata, dividers with role="separator" aria-hidden="true", optional bridge-prose. Content decisions for section-indicator text. | All docs reference this structure. Recipe-compilation: "Writes each section with zone class, aria-label, section-indicator, dividers." | **FAITHFUL** |
| 1.4 | Component markup using LIBRARY class names: `callout callout--info/gotcha/tip/essence` with `callout__label` and `callout__body`; `table-wrapper` + `table-compact/featured/light/warning/data`; `essence-pullquote`. Explicit warning: "The flagship experiment created 54 custom classes because the builder never saw the component library." | Architecture: "SC-08: Component library usage -- Standard class names." Recipe-compilation: "Uses standard component classes -- NOT custom classes." | **FAITHFUL** -- The component library mandate is strongly preserved across all docs. |
| 1.5 | Grid wrapper HTML: `content-pair` (1fr 1fr) and `content-grid` (2x2). "Why wrapper divs" explanation: CSS grid requires parent container. | Recipe-compilation: "Adds content-pair and content-grid wrapper divs." | **FAITHFUL** |
| 1.6 | ARIA attributes: dividers get role="separator" aria-hidden="true", callouts get role="note", header gets role="banner", footer gets role="contentinfo", sections get aria-label. | Architecture: "SC-06: ARIA landmarks >= 3." | **SOFTENED** -- File 42 lists SPECIFIC ARIA requirements per element type. Architecture reduces this to a count threshold (>= 3 landmarks). The count could pass with just banner + main + contentinfo, missing the per-element granularity. **Impact: Low-Medium.** The recipe-compilation preserves the specifics via line reference, but the gate-runner only checks count. |
| 1.7 | Footer HTML: footer-inner div, footer-label, footer-closing (statement), footer-meta (provenance). Dark warm background matching header (bookend pattern). Footer MUST exist with visible content. | Recipe-compilation: "Writes footer HTML matching header bookend pattern." | **FAITHFUL** |
| Perception Check | Open HTML at 1440px. See: raw unstyled content, all sections with headings, skip link visible, grid wrappers exist, all content present. "If any section is missing content, fix it NOW. It is 10x harder to add content after CSS is applied." | Recipe-compilation: "Opens HTML, verifies all sections present, skip link visible, grid wrappers exist." | **FAITHFUL** -- The "10x harder" urgency note is compression-lost but the check itself is preserved. |

### PHASE 2: Base CSS and Soul Enforcement

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 2.1 | Full CSS reset (*, *::before, *::after box-sizing), complete :root block with 27 CSS custom properties: soul constraint (--radius-sharp: 0), 8 colors, 3 warm palette extensions, 3 font stacks, 11 spacing values. Zone backgrounds declared as placeholders. | Recipe-compilation: "Writes reset + :root block with all CSS custom properties." Tier-routing: "FULL -- same as Middle." | **FAITHFUL** -- The 27 specific CSS properties are in File 42 and referenced by line numbers in compilation. |
| 2.2 | Soul enforcement: `* { border-radius: 0 !important; box-shadow: none !important; }`. Explicit justification for !important as the ONLY justified use. | All docs preserve this. Architecture: "SC-02: Soul enforcement -- border-radius: 0, box-shadow: none." | **FAITHFUL** |
| 2.3 | Base typography: body (Inter, 16px, 1.7, -webkit-font-smoothing), .page-container (960px max-width, 0 auto, padding 0 32px), h2 (Instrument Serif, 28px, 400, 1.3), h3 (Inter, 20px, 600, 1.4), p (Inter, 16px, 1.7, max-width 68ch). "Container width 960px is NON-NEGOTIABLE." | Architecture: "SC-01: Container width 940-960px." | **SOFTENED** -- File 42 says 960px exactly. Architecture says 940-960px range. The 940px lower bound is an architecture addition (from Phase D findings where 940px was also acceptable). **Impact: Low.** 940px is fine; the range is a pragmatic loosening. |
| 2.4 | Complete header CSS: .page-header (#1E1B18 background, 4px red border-top, 64px/32px padding), h1 (42px Instrument Serif, 400, 1.15), header-label (mono 0.75rem, 0.08em tracking, uppercase, red), header-subtitle (Instrument Serif italic 20px, #C4B5A5), header-meta (mono 0.75rem, #8A8580). Complete footer CSS matching header pattern with 4px red border-bottom. | Recipe-compilation: "Writes complete header + footer dark bookend CSS." Architecture: mentions "bookend pattern" in passing. | **FAITHFUL** -- The specific values are preserved through line references. The architecture doesn't restate every CSS value (it shouldn't -- that's the recipe's job). |
| "Why dark bookends" | "The header was unanimously praised by all 9 PA auditors as 'the single strongest designed moment' and 'a premium literary magazine opening.'" | Recipe-compilation: classified as ANALYSIS, marked for removal. | **IGNORED** (intentionally) -- This is evidence, not instruction. Correct to exclude from recipe. No loss. |
| Perception Check | Dark header with red accent, Inter 16px body, 960px centered container, dark footer, sharp edges, no pure black/white backgrounds. | Recipe-compilation: "Verifies dark header, Inter body text, 960px container, dark footer, sharp edges." | **FAITHFUL** |

### PHASE 3: Zone System and Backgrounds

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 3.1 | Zone background colors. 3-zone warm-cool-warm template with 12 specific hex values. 2-zone template with 5 hex values. Adjacent zones MUST differ by >= 10 RGB points. CRITICAL warm-only rule: R >= G >= B. Specific cool gray replacements (#FAFAFA -> #FAF8F5, #F8F8F8 -> #F8F6F3, #F0F0F0 -> #F2EFEA). | Architecture: "SC-09: Background delta >= 15 RGB between adjacent zones." Tier-routing: "BLOCKING (>= 15 RGB, + 6 CSS channels)" for Flagship. | **REINTERPRETED** -- File 42 says >= 10 RGB. Architecture RAISED this to >= 15 RGB (citing File 08). This is a significant delta change. File 42 explicitly provides 10 RGB as the minimum. The architecture chose the higher threshold from the research corpus rather than the recipe's own specification. **Impact: Medium.** 15 RGB is more perceptible and arguably better, but it contradicts File 42's stated minimum. The warm test is faithfully preserved. |
| 3.2 | Apply zone backgrounds: one CSS rule per section (.zone-s1, .zone-s2, etc.) | Tier-routing: "FULL -- same constraints" | **FAITHFUL** |
| 3.3 | Section padding by zone. Zone 1 (opening): 64px top / 40px bottom. Zone 2 (core): 32px / 32px. Zone 3 (resolution): 48px / 40px. Final section: 48px / 64px. Uses !important to override inline styles. "Adapt these selectors to YOUR section/zone count." | Tier-routing: "ENHANCED -- same as Ceiling, but multi-channel zone differentiation verified" for Flagship. | **FAITHFUL** -- The specific padding values are in File 42 and referenced by line numbers. The "ENHANCED" note for Flagship adds a verification overlay but doesn't change the recipe values. |
| Perception Check | Scroll at 1440px. See >= 2 distinct background color shifts WITHOUT color picker. Zone 2 feels TIGHTER than Zone 1. Still 960px container. | Recipe-compilation: "Scrolls page, verifies 2+ visible color shifts, tighter Zone 2, 960px container." | **FAITHFUL** |

### PHASE 4: Structural Borders and Dividers

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 4.1 | Section-level LEFT borders on ALTERNATING sections (not every section). 40-60% of sections get borders. Vary color (--color-border, --color-primary, --color-text, #5C4B3A) and weight (3px/4px). Specific CSS for .zone-s2, s5, s7, s9, s12 with page-container selector and padding-left adjustments. "Border presence/absence creates rhythm." | Tier-routing: "ENHANCED -- same as Ceiling. Border rhythm explicitly mapped to metaphor." Architecture: does not mention border alternation pattern. | **SOFTENED** -- File 42's alternation pattern with specific selector examples is the SINGLE HIGHEST-IMPACT recipe step (Ch4 Structural was completely absent from flagship). The architecture mentions borders in passing ("border-weight gradient encoding metaphor semantics") but does NOT restate the 40-60% alternation rule, the specific selectors, or the padding-left adjustment math (32px - 3px border = 29px). This critical operational detail is preserved only through line references in the compilation. **Impact: HIGH.** If the recipe-compilation compresses this, the border alternation pattern -- which is the recipe's most important anti-monotony tool -- could be lost. |
| 4.2 | Three transition divider types with EXACT CSS: smooth (1px height, var(--color-border), margin 16px 0), bridge (2px, var(--color-text), margin 24px 0), breathing (4px, var(--color-primary), margin 24px 0). Bridge-prose CSS (max-width 60ch, centered, Instrument Serif italic, secondary color). THE RULE: divider margins <= 24px. | Architecture: doesn't detail divider CSS. Recipe-compilation: references lines 723-757. | **FAITHFUL** via line reference. The architecture doesn't restate the CSS (correctly -- that's the recipe's job). |
| 4.3 | Complete callout family CSS. Base callout: 4px left border primary, 1px top border. Label: mono 0.75rem, uppercase, 0.08em tracking. Body: 16px padding. Four variants with specific border-left-color and background-color values: info (#E0D5C5/#FAF8F5), gotcha (#C97065/#FEF6F5), tip (#6B9B7A/#F8F7F2), essence (#C49052/#FEF5EB + display font). "All callout backgrounds MUST pass warm test." | Architecture: mentions "4 callout variants" and "SC-08: Component library usage." | **FAITHFUL** via line reference. Specific CSS values are in File 42. |
| 4.4 | Grid CSS: content-pair (display: grid, 1fr 1fr, gap 16px, margin 24px 0), content-grid (same). | Architecture: "grid layout minimum >= 2 non-single-column sections" gate. | **FAITHFUL** |
| 4.5 | Table CSS: base table (100% width, collapse, 14px), thead (warm background #F5F0E8, 2px bottom border), th (mono 0.75rem, 600, 0.04em, uppercase), td (12px/16px padding, 1px bottom border-subtle), table-featured variant (red-tinted header #FEF0EE), table-wrapper (overflow-x auto). | Recipe-compilation: references lines 841-883. | **FAITHFUL** via line reference. |
| 4.6 | Pullquote CSS: Instrument Serif 24px italic, 1.4 line-height, 4px red left border, 24px/32px padding, max-width 54ch. | Recipe-compilation: references lines 886-909. | **FAITHFUL** |
| 4.7 | Section indicator CSS: mono 0.75rem, secondary color, 0.08em tracking, uppercase, 16px bottom margin, 8px bottom padding, 1px subtle bottom border. | Recipe-compilation: references lines 911-927. | **FAITHFUL** |
| Perception Check | See left borders on targeted sections (at least 3 visible). Three divider types visually distinct. Callout variants have different border colors. Grid sections displaying side-by-side. No screenful is 100% blank cream. | Recipe-compilation: "Verifies borders visible, 3 divider types distinct, callout variants distinct, grids working." | **FAITHFUL** |

### PHASE 5: Typography Zones

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 5.1 | Zone 1 paragraphs: 17px, 1.85, 0.02em, 62ch, #2A2520. Zone 2 paragraphs: 15px, 1.55, -0.01em, 72ch, standard color. Transitional: 16px, 1.7, 0, 68ch. Zone 3: 16px, 1.75, 0, 64ch, #1E1B18. Explicit thresholds in comments: font-size >= 2px, line-height >= 0.2, letter-spacing >= 0.025em total range. | Architecture: "SC-11: Font-size zones >= 2px between zone groups." Tier-routing: "ENHANCED -- same as Ceiling, but typography verified for 4-scale fractal coherence." | **FAITHFUL** -- Specific values preserved in File 42 and referenced. Architecture correctly notes the 2px threshold. Tier-routing adds fractal coherence verification for Flagship (see Part C). |
| 5.2 | Zone 1 h2: 30px, 400, 0.03em, #3D3530. Zone 2 h2: 26px, 600, -0.02em, standard. Zone 3 h2: 28px, 400, 0, #2D2825. | Recipe-compilation: references lines 990-1016. | **FAITHFUL** |
| 5.3 | Paragraph spacing: Zone 1 = 20px, Zone 2 = 12px, Transitional = 16px, Zone 3 = 18px. | Recipe-compilation: references lines 1018-1028. | **FAITHFUL** |
| Perception Check | Compare Zone 1 and Zone 2. Zone 1 text LARGER and more OPEN. Zone 2 headings BOLDER and TIGHTER. If difference not visible, selectors wrong (specificity issue). | Recipe-compilation: "Compares Zone 1 and Zone 2 text." | **FAITHFUL** |

### PHASE 6: Element-Level Richness

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 6.1 | Inline code: subtle background + border, mono font, 0.9em. Links: red, underline, 0.15s hover transition to text color. Table row hover: 0.1s background transition. Smooth scroll: scroll-behavior: smooth. Selection: red background, cream text. | Architecture: "Scale 5: element-level richness." Tier-routing: "ENHANCED -- same as Ceiling, plus compositional transitions between components." | **SOFTENED** -- File 42 gives exact CSS for each inline element. Architecture mentions "compositional transitions between components" for Flagship, which is vague and not in File 42. **Impact: Low.** The recipe CSS is preserved; the architecture addition is aspirational. |
| 6.2 | Code blocks: dark background (#2A2520), cream text (#E8E0D8), 24px padding, mono 14px, 1.6 line-height, 3px red left border. pre code resets. | Recipe-compilation: references lines 1089-1111. | **FAITHFUL** |
| 6.3 | Drop cap (optional): Instrument Serif, 3.5em, float left, 0.8 line-height, 8px right padding, red color. Only for prose-heavy Zone 1 S1. | Recipe-compilation: "Optionally writes drop cap." Notes it could be removed to meet 650-line target. | **FAITHFUL** but AT RISK of deletion during compression. |
| Perception Check | Selection highlight in RED. Table row hover. Link color transition. Inline code background + border. | Recipe-compilation: "Tests selection highlight, table hover, link hover, inline code background." | **FAITHFUL** |

### PHASE 7: Accessibility and Responsive

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 7.1 | Focus-visible: 3px red outline, 2px offset. Skip-link: absolute positioned, visible on focus, red background. Reduced motion: animation/transition/scroll all 0.01ms. | Architecture: "WCAG 2.1 AA Accessibility -- BLOCKING (full check, 8/8 items)" for Flagship. | **FAITHFUL** |
| 7.2 | Print styles: white backgrounds, black text, hide skip-link and section-indicator, break-inside: avoid for callouts/tables. | Recipe-compilation: references lines 1178-1203. | **FAITHFUL** |
| 7.3 | Responsive 768px: header padding reduced, h1 to 28px, container 100%, section padding reduced, grids collapse to 1fr, table-wrapper overflow-x. Responsive 480px: h1 to 24px, h2 to 22px, h3 to 18px, callout body padding reduced, pullquote to 20px, section-indicator to 0.625rem, footer-closing to 18px. | Recipe-compilation: references lines 1206-1242. | **FAITHFUL** |
| Perception Check | Tab focus ring on interactive elements. 768px grid collapse + table scroll. 480px smaller headings + readability. Print preview: white/black. | Recipe-compilation: "Tests Tab focus ring, 768px layout, 480px readability, print preview." | **FAITHFUL** |

### PHASE 8: Verification

| Phase.Step | File 42 Says | PV2 Architecture Says | Fidelity |
|------------|-------------|----------------------|----------|
| 8A | Perception threshold verification table: background >= 10 RGB, font-size >= 2px, font-weight >= 200, line-height >= 0.2, letter-spacing >= 0.025em, border >= 1px, margin >= 8px. "If a human cannot SEE the difference without a color picker, do NOT ship the CSS." | Architecture: SC-09 gate uses >= 15 RGB. perception-thresholds.md proposed. CLAUDE.md threshold table uses >= 15 RGB and >= 0.5px letter-spacing. | **REINTERPRETED** -- File 42's threshold table is self-consistent but uses DIFFERENT VALUES from the architecture's corpus-derived thresholds. Specifically: File 42 says background >= 10 RGB, architecture says >= 15 RGB. File 42 says letter-spacing >= 0.025em (~0.4px), CLAUDE.md says >= 0.5px. File 42 says margin >= 8px, architecture doesn't specify. **Impact: MEDIUM-HIGH.** The architecture chose corpus research values (File 08) over File 42's own values. This creates a SPLIT: the recipe says one thing, the gate checks another. A builder following File 42 faithfully could write 10 RGB deltas that pass the recipe's check but fail the gate. |
| 8B | Void prevention: no gap > 120px at any inter-section boundary. No full viewport (900px) 100% blank. Bridge prose fills zone boundary gaps. | Architecture: SC-10 "Stacked gap <= 192px." Tier-routing: Flagship uses 108px tighter tolerance. | **REINTERPRETED** -- THREE DIFFERENT NUMBERS for the same concept. File 42: 120px target. Architecture gate: 192px maximum. Tier-routing Flagship: 108px cap. This creates ambiguity: which number does the Flagship builder use? File 42 says aim for 120. The gate passes at 192. The tier-routing says 108 for Flagship. **Impact: HIGH for Flagship.** The 192px gate is very loose (File 42's worst-case arithmetic shows 108px). The 108px Flagship cap from tier-routing contradicts the 192px gate. A Flagship builder needs clarity on which number governs. |
| 8C | Scale 5 verification: Page (bookends + 960px), Zone (2-5 distinct groups), Section (at least 2 distinct layouts), Component (callout variants distinct), Element (selection styled, inline code, link hover). | Architecture: "SC-12: Zone count 2-5." Tier-routing: "BLOCKING (5/5 required)" for Flagship scale coverage. | **FAITHFUL** -- The 5-scale verification is well-preserved. Tier-routing correctly makes all 5 BLOCKING for Flagship. |
| 8D | Soul constraints: border-radius 0, box-shadow none, trinity fonts only, container 960px, no pure #000000 or #FFFFFF, all backgrounds pass warm test (R >= G >= B), no gradients, no opacity < 1 on containers. | Architecture: SC-01 through SC-04 cover these. | **FAITHFUL** -- Every soul constraint has a corresponding programmatic gate. |
| 8E | Multi-coherence verification: count CSS channels shifting at each zone boundary. Each major transition MUST have >= 3 properties shifting simultaneously. Example table provided showing 6 channels changing. | Architecture: mentions "6 CSS channels" for Flagship zone boundaries. Tier-routing: "6+ CSS channels shifting at each major boundary." | **FAITHFUL** -- File 42's >= 3 minimum is RAISED to 6+ for Flagship in tier-routing, which is an enhancement. The architecture's choice is justified by CD-006 reference. |
| 8F | Accessibility verification: Tab through page (focus ring visible), first Tab reveals skip link, all sections have aria-label, all callouts have role="note", all dividers have role="separator" aria-hidden="true", header has role="banner", footer has role="contentinfo", resize to 768px (readable, grids collapse), resize to 480px (readable, smaller type). | Architecture: "WCAG 2.1 AA -- BLOCKING (full check, 8/8 items)" for Flagship. | **SOFTENED** -- File 42 lists 9 SPECIFIC checks. Architecture says "8/8 items" without listing them. The discrepancy (9 vs 8) suggests the architecture may have miscounted or consolidated. **Impact: Low.** The intent is preserved; specific items are in the recipe. |
| 8G | Gestalt perception test: 4 questions (each screenful different? has ZONES? grid layouts create variety? DESIGNED or PATCHED?). "If PATCHED: identify most monotonous stretch and add variation." | Tier-routing: Flagship PA-05 threshold >= 3/4 COMPOSED, BLOCKING. | **REINTERPRETED** -- File 42's 8G is a SELF-ASSESSMENT the builder performs. The architecture replaces this with external PA (9 fresh-eyes auditors for Flagship). This is a significant reinterpretation: File 42 trusts the builder to self-assess gestalt; the architecture delegates it to independent auditors. **Impact: POSITIVE.** Mode 4 PA is demonstrably more reliable than self-assessment (confirmed by the ceiling experiment where builder self-assessed higher than auditors did). This is a justified improvement. |
| Ship Decision | "SHIP IF: 8D soul = 0 violations, 8B void = 0 failures, 8C scale = 5/5, 8G gestalt = DESIGNED." "FIX IF: Any 8D violation, 8B failure, or 8G = PATCHED." "DO NOT SHIP IF: 8D has > 0 violations." | Tier-routing: "ALL gates are BLOCKING" for Flagship. Architecture: ship decision is part of the build-page UX. | **SOFTENED** -- File 42's ship decision has a nuanced 3-tier structure (SHIP / FIX / DO NOT SHIP) with specific criteria for each. The architecture flattens this to "ALL gates BLOCKING" for Flagship, which means any gate failure = FIX. The "DO NOT SHIP" category (soul violations) is preserved as auto-fix. But the nuance between "FIX" (recoverable) and "DO NOT SHIP" (soul violation = non-negotiable) is compressed. **Impact: Low.** For Flagship, all gates being BLOCKING is actually correct behavior. |

---

## Part B: File 42 Content the Architecture MISSED

### B1: Specific CSS values NOT carried through to architecture

File 42 provides ~800 lines of exact CSS. The architecture documents correctly do NOT duplicate these values (they reference the recipe instead). However, several SPECIFIC values are referenced in the architecture with DIFFERENT numbers:

| CSS Property | File 42 Value | Architecture Value | Source of Divergence |
|-------------|--------------|-------------------|---------------------|
| Background delta minimum | >= 10 RGB | >= 15 RGB (SC-09) | Architecture used File 08 research, not File 42 |
| Container width | 960px exactly | 940-960px range (SC-01) | Architecture added Phase D tolerance |
| Max stacked gap | 120px target | 192px gate / 108px Flagship | Architecture split into target + gate + tier override |
| Letter-spacing threshold | >= 0.025em | >= 0.5px (different unit) | Architecture converted to px; 0.025em at 16px = 0.4px, not 0.5px |
| Multi-coherence minimum | >= 3 channels | >= 6 channels (Flagship) | Architecture raised for Flagship |

**Assessment:** The divergence on background delta (10 vs 15 RGB) and letter-spacing threshold (0.4px vs 0.5px) are the most concerning because they create RECIPE-GATE CONTRADICTIONS. A builder following the recipe's 10 RGB minimum could produce backgrounds that fail the gate's 15 RGB check.

### B2: Builder warnings that were dropped

File 42 includes inline warnings that serve as builder guardrails:

1. **"Container width 960px is NON-NEGOTIABLE"** (line 476) -- classified as CONVICTION, compressed to 1-line comment in recipe-compilation. The urgency is softened.

2. **"If any section is missing content, fix it NOW. It is 10x harder to add content after CSS is applied."** (line 352) -- not mentioned in any architecture document. This is practical builder wisdom that prevents late-stage content insertion problems.

3. **"The flagship experiment created 54 custom classes because the builder never saw the component library."** (line 262) -- preserved as SC-08 gate, but the specific NUMBER (54 classes) and the causation (never saw the library) are lost. The gate checks for standard classes but doesn't explain WHY.

4. **"Adapt selectors to YOUR section/zone count"** (appears 4 times in File 42) -- recipe-compilation marks these for removal. This is a significant loss: it tells the builder that the CSS selectors are TEMPLATES, not exact rules. Without this note, a builder might copy .zone-s12 selectors verbatim for a 5-section page.

5. **"If you cannot see the difference, your selectors are wrong -- check that the zone-specific rules have higher specificity than the base rules."** (Phase 5 perception check) -- not in any architecture document. This is the EXACT debugging advice that would have prevented the flagship's 15px typography not applying (specificity conflict).

### B3: Perception checks that were simplified

File 42 has 8 PERCEPTION CHECKS (one per phase), each with specific visual verification steps. The architecture acknowledges these exist but does not reproduce their content. The recipe-compilation plan compresses each to "2-3 lines."

For Flagship, the Phase 8 gestalt test is REPLACED by Mode 4 PA, which is an improvement. But the intra-phase perception checks (Phases 1-7) are builder self-checks that catch problems EARLY. If compressed too aggressively, the builder loses the ability to course-correct mid-build.

Most at risk of loss:
- **Phase 4 check:** "Is there NO screenful that is 100% blank cream?" -- This catches the void problem BEFORE Phase 8.
- **Phase 5 check:** "If you cannot see the difference, your selectors are wrong" -- This catches specificity bugs BEFORE they propagate.

### B4: The stacking arithmetic proof

File 42 lines 149-154 provide a FULL ARITHMETIC PROOF showing that breathing worst-case = 108px, bridge = 106px, smooth = 89px. This proof is what JUSTIFIES the 120px target. The architecture references the 120px number but NOT the proof. Without the proof, the 120px number is a magic constant. A builder who wants to add padding has no way to verify their change stays under budget.

### B5: Dependency chain details

File 42 lines 1412-1425 specify which phases can run in parallel:
- Phase 3 can run with Phase 4 (backgrounds and borders are independent)
- Phase 6 can run with Phase 5 (element-level is independent)
- Everything else is sequential

The architecture (Section 2: Team Architecture) mentions this briefly but the tier-routing doc does not. For Flagship, where parallelization matters for build time, this is useful information that's partially lost.

---

## Part C: Architecture Additions NOT in File 42

### C1: Reinforcing mechanism pairs (>= 2 pairs for Flagship)

**Source:** Tier-routing doc, Phase 0.4.
**In File 42?** No. File 42 is content-agnostic and does not mention mechanism pairs or metaphor-driven semantics at all.
**Justified?** Yes, by TC SKILL.md output and corpus findings about Ceiling/Flagship mechanism combination deployment. This is how TC output feeds into the recipe.
**Assessment:** Justified addition for Flagship that correctly extends File 42's content-agnostic recipe with tier-specific metaphor requirements.

### C2: 4-scale fractal coherence requirement (Flagship)

**Source:** Tier-routing doc, Phase 5.
**In File 42?** No. File 42 mentions 5 SCALES in Phase 8C but not fractal coherence (pattern visible at Navigation + Page + Section + Component levels).
**Justified?** Partially. The 5-scale check in 8C is about "designed moments at each scale," which is related but different from "fractal coherence" (same pattern visible at multiple scales). Fractal coherence is a TC/mechanism-catalog concept.
**Assessment:** Partially justified. The concept extends File 42's scale check with mechanism-catalog vocabulary. However, it could create confusion: File 42's 8C checks for DISTINCT designed moments at each scale, while fractal coherence checks for COHERENT pattern across scales. These are different things.

### C3: Gate strictness escalation (all gates BLOCKING for Flagship)

**Source:** Tier-routing doc, Section C.
**In File 42?** No. File 42's Phase 8 makes all checks mandatory for any page. There is no tier-based gate strictness.
**Justified?** Yes, by the tier model established in research. Floor/Middle pages don't need the same verification rigor as Flagship. The escalation is a pragmatic addition.
**Assessment:** Justified architecture invention. File 42 is a single recipe for all tiers; the architecture sensibly varies verification strictness by tier.

### C4: Mode 4 PA replacing 8G self-assessment (Flagship)

**Source:** Tier-routing doc, Phase 8. Architecture Section 6.
**In File 42?** No. File 42's Phase 8G is a builder self-assessment ("scroll at reading speed, ask yourself 4 questions").
**Justified?** Strongly justified. The ceiling experiment proved self-assessment is unreliable (builder scored higher than external auditors). Mode 4 PA (9 auditors, 48 questions) is demonstrably superior.
**Assessment:** Justified improvement. This is one of the architecture's strongest additions.

### C5: `/build-page` orchestrator skill

**Source:** Architecture Section 1-4.
**In File 42?** No. File 42 is a recipe for a builder, not an orchestration spec.
**Justified?** Debated. The form-definer (pv2-form-proposal.md) argued AGAINST an orchestrator: "The USER is the orchestrator. Adding a skill that calls other skills is a complexity ratchet with zero value." The architecture resolved this in favor of a minimal orchestrator. Whether this is drift or improvement depends on perspective.
**Assessment:** Architecture invention. Not contradicted by File 42 (which doesn't address orchestration), but the form-definer's objection is on record.

### C6: Recipe living in `grammar/operational-recipe.md` (~650 lines) vs File 42's full 1,746 lines

**Source:** Architecture Section 5, Recipe-compilation.
**In File 42?** File 42 is the source. The architecture proposes EXTRACTING the recipe portions (~1,100 lines classified RECIPE, compressed to ~650).
**Justified?** Yes. File 42 explicitly separates RECIPE (Parts 1, 4.1-4.2, Appendixes A-C), ANALYSIS (Parts 2, 5, Appendix D), ARCHITECTURE (Part 2), and CONVICTION (Part 3). The extraction follows File 42's own classification.
**Assessment:** Justified extraction. The compilation plan is detailed and traceable. The risk is in the compression from ~1,100 to ~650: some CSS blocks may be shortened, losing exact values.

### C7: Stacked gap 192px gate (vs File 42's 120px)

**Source:** Architecture Section 2 (Contradictions C3).
**In File 42?** File 42 says 120px. Architecture adds 192px as a SEPARATE number.
**Justified?** The architecture's rationale: 120px is the builder's TARGET, 192px is the GATE (fail threshold), giving builders headroom. This is a novel interpretation that creates a target-gate split File 42 doesn't anticipate.
**Assessment:** Architecture invention that WEAKENS File 42's void prevention. File 42's arithmetic PROVES that worst-case is 108px; any gap exceeding 120px means the builder used non-recipe values. A 192px gate allows gaps 72px above worst-case -- this is excessive headroom that would allow visible voids. **This is the architecture's most concerning drift.**

---

## Part D: The Conviction Layer

### What File 42's Part 3 Contains

File 42 Part 3 (lines 1430-1487, ~58 lines) has 4 sub-sections:

1. **3.1: Identity Prohibitions** -- 5 soul refusals (no rounded corners, no shadows, no gradients, no semi-transparency, no pure black/white). Framed as personality statements ("KortAI is defined by what it REFUSES").

2. **3.2: Design Philosophy** -- IS/IS NOT axes (Warm not Soft, Austere not Cold, Authoritative not Aggressive, Restrained not Empty). Anti-Scale Model formula: `Richness = semantic_density x restraint x spatial_confidence`. With commentary: "If spatial_confidence = 0, the entire product = 0."

3. **3.3: Quality Bar** -- PA-05 score levels (1/4 DEFICIENT, 2/4 FUNCTIONAL, 3/4 COMPOSED, 4/4 DESIGNED) with descriptions. "What DESIGNED means" 4-point definition (content-form alignment, mechanism interaction, screenful variety, spatial confidence).

4. **3.4: Core Principle** -- "RECIPES WORK, CHECKLISTS FAIL" with middle-tier experiment and flagship experiment evidence.

### What the Architecture Did With It

**Recipe-compilation** classified ALL of Part 3 as "CONVICTION" destined for `build-page/SKILL.md`:
- 3.1 goes to build-page preamble (and/or recipe preamble -- ambiguity noted)
- 3.2 goes to build-page
- 3.3 goes to build-page
- 3.4 goes to build-page (or recipe preamble -- already in "How to Read")

**Architecture** (pipeline-v2-architecture.md) mentions the conviction layer in passing: the `/build-page` skill is described as having "~350 lines" including tier classification and agent routing, but no explicit conviction section is described.

**Tier-routing** includes PA-05 >= 3/4 threshold for Flagship (from 3.3) but not the IS/IS NOT philosophy (from 3.2) or the anti-scale model.

### Was Anything Lost?

**YES. Two critical items are at risk:**

1. **The Anti-Scale Model formula** (`Richness = semantic_density x restraint x spatial_confidence`) is arguably the single most important conceptual tool in File 42. It correctly PREDICTED the ceiling failure (high density + decent restraint + zero spatial confidence = zero richness). The architecture does not mention this formula anywhere. If the build-page skill's 350 lines are dominated by routing logic, the formula may be squeezed out.

2. **The IS/IS NOT axes** (Warm not Soft, Austere not Cold, etc.) give the builder a PERSONALITY to target. Without them, the builder has values but no character. These axes prevent the "technically correct but lifeless" output that plagued earlier experiments.

3. **The "What DESIGNED means" definition** (4 points: content-form alignment, mechanism interaction, screenful variety, spatial confidence) is the quality bar for Flagship. If this goes into the build-page skill but NOT into the recipe, the builder agent executing the recipe may never see it.

### Is the Loss Justified?

**Partially.** The recipe-compilation's rationale is that conviction content is "pre-build mental model" that the builder should absorb before starting, not interleave with building steps. This is sound architecture: the builder reads the conviction preamble, internalizes it, then executes the recipe.

**BUT** the anti-scale model formula is OPERATIONAL, not just philosophical. It should appear in the recipe's Phase 0 or Phase 8G as a verification lens: "Does your page have spatial confidence? If not, no amount of CSS richness will save it." Currently, neither the recipe nor the architecture includes this operational use of the formula.

**RECOMMENDATION:** Include the anti-scale model in the recipe's Phase 8G (gestalt test) as a verification tool, not just in the conviction preamble.

---

## Summary: Fidelity Scorecard

| Category | Count | % |
|----------|-------|---|
| FAITHFUL | 32 steps | 71% |
| SOFTENED | 5 steps | 11% |
| REINTERPRETED | 6 steps | 13% |
| IGNORED | 1 step (intentionally, evidence paragraph) | 2% |
| ADDED (not in File 42) | 7 additions | N/A |

### TOP 5 FIDELITY CONCERNS (Ranked by Impact)

1. **RECIPE-GATE CONTRADICTION on background deltas** (10 RGB vs 15 RGB). The recipe says one thing, the gate checks another. A builder following the recipe will produce pages that fail the gate. RESOLUTION NEEDED: Either change the recipe to 15 RGB or change the gate to 10 RGB. The architecture resolved this as 15 RGB (citing File 08) but did not update the recipe's Phase 3.1 text.

2. **THREE-WAY STACKED GAP CONFUSION** (120px target / 192px gate / 108px Flagship). File 42 says 120px. The gate says 192px. Tier-routing says 108px for Flagship. A Flagship builder sees three numbers for the same constraint. RESOLUTION NEEDED: File 42's arithmetic proof shows worst-case = 108px. For Flagship, 108px should be BOTH the target AND the gate. The 192px gate is too loose for Flagship.

3. **BORDER ALTERNATION PATTERN at risk** (Part B4). Step 4.1's specific selector examples and 40-60% alternation rule are the recipe's most important anti-monotony tool. The architecture doesn't discuss them. If the recipe-compilation compresses Phase 4, this specific operational guidance could be lost.

4. **ANTI-SCALE MODEL formula not in recipe** (Part D). The formula `Richness = semantic_density x restraint x spatial_confidence` correctly predicted the ceiling failure but appears in NO architecture document. It should be in the recipe's Phase 8G as a verification lens.

5. **"ADAPT SELECTORS TO YOUR SECTION COUNT" removal** (Part B2 item 4). Marked for removal in recipe-compilation to save lines. Without this note, builders may copy zone selectors verbatim for mismatched section counts, producing CSS that targets nonexistent sections.

---

**END OF FIDELITY AUDIT**

**Verdict:** The PV2 architecture is **75% FAITHFUL, 25% DRIFTED** to File 42 for Flagship tier. The drift is predominantly in the STRENGTHENING direction (raising thresholds, adding verification layers), which is generally positive. But the recipe-gate contradictions on background deltas and stacked gaps create operational ambiguity that MUST be resolved before codification. The conviction layer's anti-scale model is the most important piece at risk of being lost entirely.
