# Remediation Requirements Specification

**Agent:** requirements-analyst (Opus 4.6)
**Date:** 2026-02-17
**Sources:** 00-AUDIT-DATA.md, 14-richness-definition.md, 05-crown-jewel-comparison.md, 01-scale5-playbook.md, 02-channel-expansion-playbook.md, 08-mc-channel-crossref.md, mechanism-catalog.md, 10-REMEDIATION-PROMPT.md

---

## CATEGORY 1: CHANNEL ACTIVATION

### REQ-01 — Ch4 Structural: Section-Level Borders
- **Category:** Channel
- **Requirement:** At least 6 of 12 body sections must have visible border elements (border-left, border-top, or border-bottom) at the section level. Borders must use the 4px/3px/1px semantic weight system.
- **Current state:** ZERO borders anywhere in the page body. Audit data: "Zero borders anywhere in the entire page. Zero dividers. Zero containment elements." Border declarations exist in CSS but are not applied to section elements.
- **Target state:** >= 6 sections with visible borders. Border-weight gradient deployed: 4px (critical/dense sections), 3px (moderate), 1px (light/transitional). At least 2 distinct border weights visible.
- **Acceptance test:** `document.querySelectorAll('section [style*=border], section .page-container').length` filtered for computed border-width > 0. Count >= 6. At least 2 distinct border-width values among them.
- **Covered by remediation?** YES (Phase 1A specifies 6 sections with left borders in 4px/3px weights)

### REQ-02 — Ch4 Structural: Divider Visibility
- **Category:** Channel
- **Requirement:** Section dividers (.divider-smooth, .divider-bridge, .divider-breathing) must be visually distinguishable from each other and from the background. Each type must have distinct height and color.
- **Current state:** Dividers exist in HTML but are nearly invisible. Height is 1px, color is --color-border-subtle (close to background). All three types look identical.
- **Target state:** 3 visually distinct divider types: smooth (1px, --color-border), bridge (2px, --color-text), breathing (4px, --color-primary). Each clearly visible at normal viewing distance.
- **Acceptance test:** Screenshot 3 dividers. A human can distinguish all 3 types without zooming. Computed height and background-color differ between all 3 types.
- **Covered by remediation?** YES (Phase 1B specifies amplified divider heights and colors)

### REQ-03 — Ch4 Structural: Component Containment
- **Category:** Channel
- **Requirement:** Component blocks must have visible containment beyond just a left border. At least a top border and background tint must differentiate them from surrounding prose.
- **Current state:** Component blocks have 4px left border but no top border and no distinct background. They blend into the cream background.
- **Target state:** Component blocks have border-left + border-top (1px solid --color-border) + distinct background-color (--color-zone-breathing or tinted).
- **Acceptance test:** `getComputedStyle(componentBlock).borderTopWidth` returns "1px". `getComputedStyle(componentBlock).backgroundColor` differs from section background by >= 8 RGB points.
- **Covered by remediation?** YES (Phase 1C adds border-top and background-color)

### REQ-04 — Ch6 Rhythmic: Paragraph Margin Alternation
- **Category:** Channel
- **Requirement:** Ch6 (Rhythmic) must be perceptibly active. Paragraph margins must vary across zones, creating a density rhythm that differs from metronomic repetition.
- **Current state:** p margin-bottom is 16px across ALL 12 sections. Ch6 is ABSENT. The page reads as metronomic.
- **Target state:** At least 3 distinct p margin-bottom values across the page: sparse zones (20px), standard zones (16px), dense zones (12px). The 8px difference between extremes is perceptible.
- **Acceptance test:** Collect `getComputedStyle(p).marginBottom` from p elements in 6+ sections. Count distinct values >= 3.
- **Covered by remediation?** YES (Phase 4A specifies 20px/16px/12px/18px per zone)

### REQ-05 — Channel Count: >= 5 of 7 Channels Perceptibly Active
- **Category:** Channel
- **Requirement:** SC-02 compliance: at least 5 of 7 defined channels (Chromatic, Typographic, Spatial, Structural, Density, Rhythmic, Intentional) must be perceptibly active.
- **Current state:** 2-3 channels active (Spatial partially, Intentional partially, others absent or sub-perceptual). SC-02 FAILS.
- **Target state:** >= 5 channels with VISIBLE semantic encoding: Ch1 (background color deltas >= 10 RGB), Ch2 (font-size and weight variation across zones), Ch3 (margin variation), Ch4 (borders present), Ch7 (self-reference and bookending already present).
- **Acceptance test:** For each channel, verify at least 2 distinct computed values across sections. Count channels passing >= 5.
- **Covered by remediation?** PARTIALLY (Phases 1-5 address Ch1-Ch4 and Ch6 but Ch5 Density and Ch6 Rhythmic are addressed implicitly, not explicitly verified)

---

## CATEGORY 2: SCALE 5 (DETAIL/CHARACTER)

### REQ-06 — Body Font-Size Variation
- **Category:** Scale
- **Requirement:** Body paragraph font-size must vary across zones. At least 3 distinct font-size values on p elements (not headings, not meta labels).
- **Current state:** p fontSize is 16px across ALL 12 sections. UNIFORM. Zero variation.
- **Target state:** Sparse zones (S1, S2, S12): 17px. Standard zones: 16px. Dense zones (S5, S7, S8): 15px. The 2px difference between extremes creates perceptible density modulation.
- **Acceptance test:** `getComputedStyle(section.querySelector('p')).fontSize` returns at least 3 distinct values across 6+ sections. Range >= 2px.
- **Covered by remediation?** YES (Phase 2A specifies 17px/16px/15px per zone)

### REQ-07 — Heading Weight and Size Variation
- **Category:** Scale
- **Requirement:** h2 headings must vary in font-size and font-weight across zones to signal different content modes (editorial vs analytical vs refined).
- **Current state:** h2 fontSize is 28px across ALL sections. h2 fontWeight is 400 across ALL sections. UNIFORM.
- **Target state:** Zone 1 h2: 30px/400 (editorial authority). Zone 2 h2: 26px/600 (analytical intensity). Zone 3 h2: 28px/400 (refined standard). The weight jump from 400 to 600 is perceptible. The size shift of 4px between zones is perceptible.
- **Acceptance test:** `getComputedStyle(h2).fontSize` returns >= 2 distinct values. `getComputedStyle(h2).fontWeight` returns >= 2 distinct values.
- **Covered by remediation?** YES (Phase 2B specifies 30px/400, 26px/600, 28px/400)

### REQ-08 — Letter-Spacing at Perceptible Amplitudes
- **Category:** Scale
- **Requirement:** Letter-spacing must vary across zones with total range >= 0.025em (0.4px at 16px). Values below 0.01em are wasted CSS.
- **Current state:** Letter-spacing ranges from 0.096px to -0.048px (0.006em to -0.003em). Total range 0.009em = 0.144px. 5x BELOW perception threshold.
- **Target state:** Sparse zones: 0.02em (0.32px). Standard: 0.005em. Dense: -0.01em (-0.16px). Total range 0.03em = 0.48px. At or above perception threshold.
- **Acceptance test:** Compute `getComputedStyle(p).letterSpacing` across sections. Range >= 0.025em (compute by subtracting min from max converted to em).
- **Covered by remediation?** YES (Phase 2C specifies 0.02em to -0.01em range)

### REQ-09 — Line-Height Variation
- **Category:** Scale
- **Requirement:** p line-height must vary by at least 0.15 units across zones. At least 3 distinct values.
- **Current state:** Line-height ranges from 1.65 to 1.8, a 0.15 range. Marginally acceptable but 3 distinct values needed.
- **Target state:** Sparse: 1.85. Standard: 1.75. Dense: 1.6. Refined: 1.7. Range = 0.25 (1.6 to 1.85). 4 distinct values.
- **Acceptance test:** `getComputedStyle(p).lineHeight` across 6+ sections returns >= 3 distinct values. Range >= 0.15 units.
- **Covered by remediation?** YES (Phase 2A specifies 1.85/1.75/1.6 per zone)

### REQ-10 — Max-Width Variation
- **Category:** Scale
- **Requirement:** Paragraph max-width should vary by zone, creating horizontal density modulation. At least 2 distinct max-width values. All within CPL 45-80.
- **Current state:** All p elements use 68ch max-width. UNIFORM.
- **Target state:** Sparse zones: 62ch (~62 CPL). Standard: 68ch. Dense: 72ch (~72 CPL). All within S-07 bounds (45-80 CPL).
- **Acceptance test:** `getComputedStyle(p).maxWidth` returns >= 2 distinct values across sections. All values within 45-80 CPL equivalent.
- **Covered by remediation?** YES (Phase 4A specifies 62ch/68ch/72ch per zone)

---

## CATEGORY 3: MULTI-COHERENCE

### REQ-11 — CCS >= 0.30 (Compositional Coupling Score)
- **Category:** Multi-Coherence
- **Requirement:** MC-01: removing any single mechanism must change the perceived meaning of at least 30% of other deployed mechanisms. Mechanisms must be load-bearing, not independent.
- **Current state:** Estimated CCS 0.05-0.10. Zone backgrounds vary by 1-8 RGB (imperceptible). Typography varies by 0.004em (imperceptible). Border-weight varies only on tables. Removing any single mechanism's CSS would NOT change perceived meaning of others.
- **Target state:** CCS >= 0.30. At least 5 mechanisms with individual CCS >= 0.30. Dense zones must be SIMULTANEOUSLY tighter spacing + cooler backgrounds + heavier borders + tighter typography. Removing spacing compression should make zone backgrounds feel arbitrary.
- **Acceptance test:** For each mechanism, remove its CSS and evaluate: does the page atmosphere change? Does the meaning of other mechanisms shift? Score >= 0.30.
- **Covered by remediation?** PARTIALLY (Remediation addresses individual channels but does not explicitly specify coupled CSS where multiple properties co-vary at the same boundaries)

### REQ-12 — >= 3 Reinforcing Pairs
- **Category:** Multi-Coherence
- **Requirement:** MC-02: at least 3 pairs of mechanisms encoding the SAME semantic through different CSS channels. Both mechanisms must produce VISIBLE changes at the same section boundary.
- **Current state:** ZERO perceptible reinforcing pairs. CSS comments claim reinforcement but all variations are sub-perceptual (1-8 RGB backgrounds, 0.004em letter-spacing).
- **Target state:** 3 pairs where both mechanisms produce visible change at same boundary. Example pairs: (spacing compression + background warmth), (border weight + typography weight), (density + line-height). "The page got heavier" at Zone 2 entry.
- **Acceptance test:** At each zone transition, count CSS channels that change visibly. At least 3 transitions with >= 2 co-varying visible channels.
- **Covered by remediation?** PARTIALLY (Phases 1-4 add visible variation per channel but do not explicitly specify which channels must co-vary at each boundary)

### REQ-13 — >= 2 Modulating Chains
- **Category:** Multi-Coherence
- **Requirement:** MC-03: at least 2 modulating chains where one mechanism controls another's intensity. Components inside dense zones must LOOK different from components inside sparse zones.
- **Current state:** 1 partial chain (zone density -> component internals via .dense/.sparse variants). Only 2 .dense and 1 .sparse instances in HTML. Tables do NOT modulate based on zone.
- **Target state:** 2 chains: (1) Zone density -> component-block padding (8px/12px dense, 12px/24px sparse). (2) Zone density -> table cell padding (8px/12px dense, 14px/18px sparse). Same component visually different in Zone 1 vs Zone 2.
- **Acceptance test:** Place identical component-block in S1 and S5. Computed padding differs. Place identical table in S1 and S5. Computed td padding differs.
- **Covered by remediation?** NO (Remediation does not specify zone-responsive component or table modulation)

### REQ-14 — >= 2 Responding Sequences
- **Category:** Multi-Coherence
- **Requirement:** MC-04: at least 2 responding sequences where mechanism A's output triggers mechanism B. Each sequence must show visible design response.
- **Current state:** 1 clear responding sequence: dark header (#13) -> drop cap (#16) via shared --color-primary. No second sequence.
- **Target state:** 2 sequences: (1) header -> drop cap (existing). (2) Featured table in S5 (4px red border = heavy weight) -> S6 lighter treatment (smaller heading, text-only = deliberate de-emphasis after peak).
- **Acceptance test:** Remove the preceding section. Does the responding mechanism still feel JUSTIFIED? If yes, it's not truly responding.
- **Covered by remediation?** NO (Remediation does not specify responding sequences between sections)

### REQ-15 — >= 1 Cascading Chain of 3+ Mechanisms
- **Category:** Multi-Coherence
- **Requirement:** MC-06: at least 1 cascading chain where ALL cascade members change PERCEPTIBLY at each zone transition. A value table showing padding + background + border + typography all moving in same direction.
- **Current state:** CSS comments claim cascade "Cluster A: Refinement Gradient" but computed values show: backgrounds differ 1-8 RGB (invisible), spacing varies 32-80px (visible), border-weight varies only on tables (not zone-wide). Net: partial cascade, not full.
- **Target state:** Value table where ALL cascade properties are perceptible at each zone boundary. Example: S1 (64px padding, #FEF5EB bg, 1px border, 1.85 lh) -> S5 (32px, #FFFFFF, 4px, 1.6) -> S12 (64px, #FEF5EB, 1px, 1.85). ALL FOUR properties changing perceptibly.
- **Acceptance test:** Build value table of 4+ CSS properties across 3+ zone transitions. All properties must change in same direction. All deltas must exceed perception thresholds.
- **Covered by remediation?** PARTIALLY (Individual property variations are specified but the cascade co-variation is not explicitly enforced as a unified table)

### REQ-16 — Cross-Dimension Coherence >= 10/15 Pairs
- **Category:** Multi-Coherence
- **Requirement:** MC-07: at least 10 of 15 possible dimension pairs (Spatial x Chromatic, Spatial x Typographic, etc.) must be actively coupled.
- **Current state:** 0-1 fully coupled pairs, 3-4 weakly coupled pairs. MC-07 FAILS catastrophically.
- **Target state:** >= 10 of 15 pairs showing deliberate coherence. Key additions needed: (1) Dense zone typography shifts family/weight (Typographic x Spatial). (2) Warm backgrounds pair with warm border colors (Chromatic x Structural). (3) Rhythmic variation tracks density (Rhythmic x Density).
- **Acceptance test:** For each of 15 dimension pairs, verify at least 1 shared CSS transition point. Count coupled pairs >= 10.
- **Covered by remediation?** PARTIALLY (Remediation adds per-channel variation but does not explicitly specify inter-dimensional coupling)

### REQ-17 — >= 3 Channel Shifts at Every Section Transition (SC-09)
- **Category:** Multi-Coherence
- **Requirement:** At every section boundary, at least 3 of 6 CSS channels must shift visibly.
- **Current state:** 5 of 11 transitions FAIL SC-09 (S3->S4: 0-1 channels, S7->S8: 0, S9->S10: 0-1, S10->S11: 1, S11->S12: 2).
- **Target state:** All 11 transitions have >= 3 visible channel shifts. Most problematic: S7->S8 (currently identical treatment -- needs background + typography + structural differentiation).
- **Acceptance test:** For each of 11 section transitions, count channels with computed-value changes above perception threshold. All must score >= 3.
- **Covered by remediation?** PARTIALLY (Background, typography, and spatial changes would fix some transitions but S7->S8, S9->S10, S10->S11 may still fail without explicit per-transition verification)

---

## CATEGORY 4: SPATIAL / WHITESPACE

### REQ-18 — Eliminate Catastrophic Whitespace Voids
- **Category:** Spatial
- **Requirement:** No gap between adjacent sections may exceed 200px. Scroll positions must NOT show completely blank viewports.
- **Current state:** 6 catastrophic gaps identified: S2->S3 (243px), S4->S5 (270px), S6->S7 (210px), S7->S8 (243px), S8->S9 (276px), S11->S12 (242px). "Scroll positions 4000px, 5000px, 6000px are COMPLETELY BLANK CREAM."
- **Target state:** Maximum gap between sections <= 150px. Zero completely blank viewports at any scroll position. Transition elements (dividers, bridge prose) fill inter-section space.
- **Acceptance test:** Measure vertical gap between last element of section N and first element of section N+1 for all 11 boundaries. All <= 150px.
- **Covered by remediation?** PARTIALLY (Phase 1B reduces divider margins from --space-20 to --space-16, but does not explicitly cap gap size or verify no blank viewports)

### REQ-19 — Section Padding Asymmetry
- **Category:** Spatial
- **Requirement:** Section padding-top and padding-bottom should differ to create directional vertical rhythm, not symmetric boxes.
- **Current state:** Section padding varies 32-80px but is generally symmetric (same top and bottom).
- **Target state:** Asymmetric padding: Zone 1 more top (entry breathing), Zone 2 symmetric tight, Zone 3 moderate with generous exit on S12.
- **Acceptance test:** `getComputedStyle(section).paddingTop` differs from `getComputedStyle(section).paddingBottom` in at least 6 sections.
- **Covered by remediation?** YES (Phase 4B specifies asymmetric padding per zone)

---

## CATEGORY 5: COMPONENT VARIETY

### REQ-20 — Component Type Differentiation
- **Category:** Component
- **Requirement:** The page must display at least 3 visually distinct component types. Each type must have a unique combination of border color, background tint, and/or structural pattern.
- **Current state:** Only 2 component types visible: component-block (all variants look nearly identical) + tables. CD-006 has 11 component types. Flagship structural score: 2/13.
- **Target state:** At least 3 visually distinct types: (1) insight callout (amber border + warm tint), (2) resolution callout (green border + cool tint), (3) neutral callout (border-color border + info tint), (4) default component (red border + pink tint). Each type recognizable without reading the label.
- **Acceptance test:** Screenshot 3 different component types side by side. A human can identify all 3 as distinct types by visual appearance alone.
- **Covered by remediation?** YES (Phase 5A specifies 4 callout variants with distinct border colors and background tints)

### REQ-21 — Callout Background Tints
- **Category:** Component
- **Requirement:** Callout/component-block variants must have distinct background tints that differ by >= 15 RGB points from each other and from the section background.
- **Current state:** All component-blocks share the same background (none specified -- inherits section cream). No perceptible differentiation.
- **Target state:** 4 distinct background tints: warm (#FEF9F0, amber-tinted), resolution (#F5FAF5, green-tinted), neutral (#F5F8FA, blue-tinted), default (#FEF6F5, pink-tinted). Each differs by >= 15 RGB from section background.
- **Acceptance test:** `getComputedStyle(componentBlock).backgroundColor` returns >= 3 distinct values across variant types. Each differs from section background by >= 15 RGB points.
- **Covered by remediation?** YES (Phase 5A specifies 4 distinct background tints)

### REQ-22 — Self-Referential Component Visual Identity
- **Category:** Component
- **Requirement:** The 3 self-referential moments (content describing its own form) should be visually distinct from other components, reinforcing the intentionality channel.
- **Current state:** Self-referential moments exist in content but have no distinct visual treatment.
- **Target state:** Self-referential components get double-border treatment (border-left + border-right) or data-attribute-driven styling to visually distinguish them.
- **Acceptance test:** Self-referential components have a CSS treatment not shared by any other component type.
- **Covered by remediation?** YES (Phase 5B specifies double-border treatment for data-self-ref components)

---

## CATEGORY 6: CHROMATIC (BACKGROUND COLOR)

### REQ-23 — Background Color Delta >= 10 RGB Points
- **Category:** Channel / Chromatic
- **Requirement:** Adjacent zone backgrounds must differ by >= 10 RGB points to be perceptible. The 1-8 point range is invisible.
- **Current state:** Zone backgrounds differ by 1-8 RGB points. "RGB differences are 1-8 points -- barely perceptible." 12 zone-specific CSS declarations produce 1 perceptible outcome (same cream).
- **Target state:** Adjacent sections differ by 10-20 RGB points. Zone 1 (#FEF5EB): warm peach. Zone 2 (#FFFFFF / #FAFAFA): cool analytical. Zone 3 (#FEF7F0): refined cream. The warm-to-cool trajectory is visible.
- **Acceptance test:** For each pair of adjacent sections, compute absolute RGB difference of background-color. All pairs >= 10 points on at least one channel.
- **Covered by remediation?** YES (Phase 3A specifies amplified zone backgrounds with 10-20 RGB point deltas)

### REQ-24 — Warm-Cool Temperature Arc
- **Category:** Channel / Chromatic
- **Requirement:** The chromatic arc must be perceptible: Zone 1 = warm variety (multiple warm tones), Zone 2 = cool convergence (near-white), Zone 3 = unified warmth (consistent cream). The temperature trajectory encodes the refinement gradient.
- **Current state:** All zones are within 1-8 RGB of each other. No perceptible temperature arc. The refinement gradient is invisible.
- **Target state:** Zone 1: clearly warm (#FEF5EB, #F5EDE2, #FBF3E8 -- varied warm tones). Zone 2: clearly cooler (#FFFFFF, #FAFAFA, #F5F5F5). Zone 3: uniform warm (#FEF7F0, #FEF5EB). A reader scrolling sees warm -> cool -> warm.
- **Acceptance test:** Average RGB warmth (R-B channel difference) of Zone 1 sections > Zone 2 sections. Zone 3 returns to within 5 points of Zone 1 warmth.
- **Covered by remediation?** YES (Phase 3A specifies this exact arc)

---

## CATEGORY 7: ACCESSIBILITY / RESPONSIVE

### REQ-25 — Skip Link
- **Category:** Soul / Accessibility
- **Requirement:** Page must include a skip-to-content link for keyboard navigation.
- **Current state:** ABSENT. CD-006 score: 8/8 accessibility. Flagship: 0/8.
- **Target state:** Skip link present, visually hidden until focused, links to main content.
- **Acceptance test:** Tab from page load. First focusable element is "Skip to content" link.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

### REQ-26 — Focus-Visible Outline
- **Category:** Soul / Accessibility
- **Requirement:** Interactive elements must have visible focus indicators for keyboard users.
- **Current state:** ABSENT. No :focus-visible styles defined.
- **Target state:** All focusable elements (links, interactive components) show outline: 2px solid on :focus-visible.
- **Acceptance test:** Tab through page. Every focusable element shows visible outline.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

### REQ-27 — ::selection Styling
- **Category:** Soul / Accessibility
- **Requirement:** Text selection should use the warm editorial palette, not browser defaults.
- **Current state:** ABSENT. CD-006 and DD-006 both implement ::selection.
- **Target state:** ::selection uses warm background tint (e.g., rgba(232,48,37,0.15)) + text color.
- **Acceptance test:** Select text on page. Selection color matches warm palette, not browser blue.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

### REQ-28 — prefers-reduced-motion
- **Category:** Soul / Accessibility
- **Requirement:** Respect user motion preferences. Any transitions or animations must be disabled under prefers-reduced-motion.
- **Current state:** ABSENT. No @media query for reduced motion.
- **Target state:** @media (prefers-reduced-motion: reduce) disables all transitions.
- **Acceptance test:** @media rule present in CSS. Computed transition-duration = 0s when prefers-reduced-motion is active.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

### REQ-29 — Responsive Breakpoints
- **Category:** Soul / Responsive
- **Requirement:** Page must have at least 1 media query breakpoint (768px minimum) to handle tablet/mobile viewports.
- **Current state:** ZERO media queries. CD-006 has 3 breakpoints (960px, 768px, 480px). Flagship: 0.
- **Target state:** At least 1 breakpoint at 768px with: heading size reduction, section padding reduction, max-width adjustments.
- **Acceptance test:** `document.styleSheets[0].cssRules` contains at least 1 CSSMediaRule. Page renders without horizontal scroll at 768px viewport.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

### REQ-30 — ARIA Labels on Sections
- **Category:** Soul / Accessibility
- **Requirement:** Sections should have aria-label attributes for screen reader navigation.
- **Current state:** ABSENT. CD-006 has aria-label on every section.
- **Target state:** Each section element has aria-label describing its content.
- **Acceptance test:** `document.querySelectorAll('section[aria-label]').length` >= 10.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

---

## CATEGORY 8: PERCEPTIBILITY / RICHNESS

### REQ-31 — Richness Score >= 15 (Target: 20)
- **Category:** Perceptibility
- **Requirement:** The richness formula (Variety x Intentionality x Perceptibility) must produce a score >= 15. Target of 20 to approach CD-006's 21.4.
- **Current state:** Richness Score = 8.4. Variety = 75, Intentionality = 0.59, Perceptibility = 0.19. The flagship is at 39% of CD-006's richness.
- **Target state:** Richness Score >= 15. Perceptibility must increase from 0.19 to >= 0.40 (doubling perceptible channels from 1.5 to 4+). Variety target >= 80. Intentionality can remain at 0.59.
- **Acceptance test:** Recount perceptible channels after remediation. Score = Variety x Intentionality x Perceptibility >= 15.
- **Covered by remediation?** PARTIALLY (Individual channel fixes should increase perceptibility but no integrated richness score verification)

### REQ-32 — Perceptible Channels >= 4 of 8
- **Category:** Perceptibility
- **Requirement:** At least 4 of 8 CSS channels (background color, border presence, font-size, spacing, letter-spacing, line-height, component variety, layout pattern) must produce VISIBLE variation across the page without developer tools.
- **Current state:** Perceptibility score 19% = 1.5 of 8 channels perceptible (spacing partially, border partially).
- **Target state:** >= 4 perceptible: (1) background color (10+ RGB delta), (2) border presence/weight, (3) font-size (2px delta), (4) spacing/margins (8px delta). Possible 5th: component variety.
- **Acceptance test:** For each of 8 channels, "Can a reader scrolling at normal speed perceive the difference?" YES/NO. Count YES >= 4.
- **Covered by remediation?** YES (Phases 1-5 collectively address 5 channels)

### REQ-33 — Binary Richness Checklist >= 7/10
- **Category:** Perceptibility
- **Requirement:** Score >= 7 on the 10-item binary richness checklist (R-01 through R-10 from richness definition report).
- **Current state:** Flagship score: 0/10. Every item FAILS.
- **Target state:** >= 7/10 PASS. Critical items: R-01 (font-sizes >= 8 perceptible), R-02 (borders >= 8 deployed), R-03 (bg delta >= 15 RGB), R-04 (component types >= 5), R-08 (media queries >= 1).
- **Acceptance test:** Run each of 10 binary checks. Count PASS >= 7.
- **Covered by remediation?** PARTIALLY (R-01 through R-03 and R-06 addressed. R-04: only 3-4 types specified. R-05 layout patterns: not addressed. R-07 letter-spacing: addressed. R-08 media queries: NOT addressed. R-09 dividers: addressed. R-10 perceptibility: addressed.)

---

## CATEGORY 9: SOUL COMPLIANCE (VERIFICATION)

### REQ-34 — Container Width 960px
- **Category:** Soul
- **Requirement:** Container width must remain at 940-960px. This is the primary Phase D failure mode.
- **Current state:** 960px container. COMPLIANT.
- **Target state:** Unchanged. 960px.
- **Acceptance test:** `getComputedStyle(document.querySelector('.page-container')).maxWidth` returns value between "940px" and "960px".
- **Covered by remediation?** YES (Constraints section: "Do NOT change container width (960px)")

### REQ-35 — border-radius: 0
- **Category:** Soul
- **Requirement:** All elements must have border-radius: 0. ABSOLUTE prohibition.
- **Current state:** COMPLIANT. border-radius: 0 universally.
- **Target state:** Unchanged.
- **Acceptance test:** `document.querySelectorAll('*')` -- no element has computed border-radius > 0.
- **Covered by remediation?** YES (Soul constraints preserved)

### REQ-36 — box-shadow: none
- **Category:** Soul
- **Requirement:** No box-shadow anywhere. ABSOLUTE prohibition.
- **Current state:** COMPLIANT.
- **Target state:** Unchanged.
- **Acceptance test:** No element has computed box-shadow != "none".
- **Covered by remediation?** YES (Soul constraints preserved)

### REQ-37 — Typography Trinity
- **Category:** Soul
- **Requirement:** Only 3 font families: Instrument Serif (display), Inter (body), JetBrains Mono (code).
- **Current state:** COMPLIANT.
- **Target state:** Unchanged. No additional fonts introduced.
- **Acceptance test:** All computed font-family values resolve to one of 3 families.
- **Covered by remediation?** YES (Constraints: "Do NOT add fonts beyond trinity")

### REQ-38 — Color Palette Compliance
- **Category:** Soul
- **Requirement:** All colors from tokens.css palette. No pure #000000 or #FFFFFF backgrounds (exception: S5 may use #FFFFFF as peak analytical moment).
- **Current state:** COMPLIANT.
- **Target state:** New zone backgrounds must be from warm editorial palette. No cool grays. Exception for #FFFFFF on S5 documented.
- **Acceptance test:** All computed color/background-color values are from tokens.css palette or documented zone extensions.
- **Covered by remediation?** YES (Phase 3A specifies palette-compliant zone colors with #FFFFFF exception documented)

---

## CATEGORY 10: LAYOUT / STRUCTURE

### REQ-39 — Layout Pattern Variety
- **Category:** Layout
- **Requirement:** At least 2 layout patterns beyond single-column. CD-006 uses 6 patterns (Z-grid, bento, choreography, F-pattern, 2-column reasoning, golden-ratio).
- **Current state:** 1 layout pattern: single-column + width variation. Zero CSS grid layouts. Score: 1/7.
- **Target state:** At least 2 patterns: single-column (existing) + at least 1 grid/multi-column section.
- **Acceptance test:** At least 1 element uses `display: grid` with `grid-template-columns` defining multi-column layout.
- **Covered by remediation?** NO (Remediation is CSS-only and does not add grid layouts. "Do NOT restructure the HTML sections.")

### REQ-40 — Transition Type Variety
- **Category:** Layout / Structure
- **Requirement:** Each section boundary must use exactly 1 of 3 transition types (hard cut, spacing shift, checkpoint). "No transition" (just empty space) is not valid.
- **Current state:** Transition elements exist between sections but produce near-identical visual output. Many gaps are just empty cream space.
- **Target state:** 3 distinct transition types visible: smooth (1px line), bridge (2px + background), breathing (4px + primary color). Each boundary has an assigned type.
- **Acceptance test:** For each of 11 boundaries, identify transition type. All 11 have assigned types. At least 2 of 3 types used.
- **Covered by remediation?** PARTIALLY (Phase 1B amplifies dividers but doesn't verify all 11 boundaries have transition elements)

---

## CATEGORY 11: TECHNIQUE GAP CLOSURE

### REQ-41 — Crown Jewel Technique Score >= 55/91
- **Category:** Technique
- **Requirement:** Aggregate technique score across 12 categories must reach >= 55/91, up from current 34/91. Primary gaps: structural (2/13), layout (1/7), accessibility (0/8), responsive (0/4).
- **Current state:** 34/91 total. Structural: 2/13, Layout: 1/7, Accessibility: 0/8, Responsive: 0/4.
- **Target state:** >= 55/91. Structural: 6/13 (+4), Background: 5/9 (+2), Borders: 5/8 (+2), Font-size: 8/11 (+2). Accessibility and responsive are gaps.
- **Acceptance test:** Recount all 12 categories per crown jewel comparison methodology. Total >= 55.
- **Covered by remediation?** PARTIALLY (Phases 1-5 close structural, border, font-size, background, and color gaps. Accessibility +0, Responsive +0, Layout +0.)

### REQ-42 — Syntax Highlighting in Code Blocks
- **Category:** Technique / Color
- **Requirement:** Code blocks should use multi-color syntax highlighting (keyword red, string green, function blue, comment gray, number amber) matching crown jewel standard.
- **Current state:** Dark code blocks exist in S8 but use only 2 colors (red primary + cream text). Crown jewels use 5-6 syntax colors.
- **Target state:** Code blocks use >= 4 distinct syntax-highlighting colors from the tokens palette.
- **Acceptance test:** Count distinct text colors inside code/pre elements. >= 4 colors.
- **Covered by remediation?** NO (Not mentioned in remediation prompt)

---

## CATEGORY 12: PROMPT / PROCESS GAPS

### REQ-43 — Channel Activation Worksheet in Future Prompts
- **Category:** Process
- **Requirement:** Future execution prompts must include a per-transition channel activation worksheet (not just threshold rules). Builder fills in before/after values for each channel at each boundary.
- **Current state:** Prompt has "SC-09: >= 3 channels per transition" as guardrail. No worksheet. Builder has no per-transition planning template.
- **Target state:** Prompt includes 11-row worksheet (one per section boundary) with columns for Ch1-Ch6 before/after values.
- **Acceptance test:** Prompt contains channel activation worksheet template. Builder artifact includes filled worksheet.
- **Covered by remediation?** NO (This is a prompt architecture requirement, not a CSS fix)

### REQ-44 — Cascade Value Table Template in Future Prompts
- **Category:** Process
- **Requirement:** Future prompts must include a cascade value table template where builder specifies padding + background + border + typography values at each zone transition point.
- **Current state:** MC-06 states "1 cascade of 3+" but no value table template. 775 lines of operational examples compressed to 25 lines of thresholds.
- **Target state:** Prompt includes blank value table template. Builder produces filled table as gate artifact.
- **Acceptance test:** Prompt contains value table template with columns for padding, background, border, line-height, and direction.
- **Covered by remediation?** NO (Process requirement)

### REQ-45 — Playbook Content (Not Just Guardrails) in Future Prompts
- **Category:** Process
- **Requirement:** Future prompts must include per-channel CSS examples showing HOW to achieve compliance, not just WHAT threshold to meet. The prompt must contain playbook content, not only guardrail content.
- **Current state:** 97 rules telling agents what NOT to do. ~0 rules telling agents what TO DO. 775+ lines of operational CSS examples from invocation reports compressed to 25 lines of counts.
- **Target state:** Each channel rule includes 1 CSS example showing compliant implementation. Each MC rule includes 1 worked example from a crown jewel.
- **Acceptance test:** Every SC and MC rule in the prompt has an accompanying CSS code example.
- **Covered by remediation?** NO (Process requirement)

---

## SUMMARY

### Coverage Statistics

| Metric | Count |
|--------|-------|
| **Total requirements** | **45** |
| **Covered by current remediation (YES)** | **18** |
| **Partially covered (PARTIALLY)** | **12** |
| **NOT covered (NO)** | **15** |

### Coverage by Category

| Category | Total | YES | PARTIAL | NO |
|----------|-------|-----|---------|-----|
| Channel Activation | 5 | 3 | 2 | 0 |
| Scale 5 | 5 | 5 | 0 | 0 |
| Multi-Coherence | 7 | 0 | 5 | 2 |
| Spatial / Whitespace | 2 | 1 | 1 | 0 |
| Component Variety | 3 | 3 | 0 | 0 |
| Chromatic | 2 | 2 | 0 | 0 |
| Accessibility / Responsive | 6 | 0 | 0 | 6 |
| Perceptibility / Richness | 3 | 1 | 2 | 0 |
| Soul Compliance | 5 | 5 | 0 | 0 |
| Layout / Structure | 2 | 0 | 1 | 1 |
| Technique Gap | 2 | 0 | 1 | 1 |
| Process / Prompt | 3 | 0 | 0 | 3 |

### Gap Analysis

**The current remediation (10-REMEDIATION-PROMPT.md) covers the following well:**
- Scale 5 typography enrichment (5/5 requirements fully covered)
- Component differentiation (3/3 fully covered)
- Chromatic background amplification (2/2 fully covered)
- Soul compliance preservation (5/5 fully covered)
- Ch4 structural activation (3/3 fully covered)

**The current remediation has significant gaps in:**

1. **Multi-Coherence (0/7 fully covered):** The remediation addresses individual channels but does not specify HOW channels must co-vary at boundaries. No cascade value table. No modulation chains. No responding sequences. This is the difference between "each channel works independently" and "channels reinforce each other." The prompt adds richness to individual channels but does not compose them into atmospheric coherence.

2. **Accessibility (0/6 covered):** Zero accessibility features addressed. Skip link, focus-visible, ::selection, prefers-reduced-motion, print styles, ARIA labels all absent. CD-006 scores 8/8; flagship targets 0/8.

3. **Responsive design (0/1 covered):** Zero media queries. The remediation explicitly says "CSS-only" but does not include any responsive breakpoints. At 768px, the page will have 960px content in a smaller viewport.

4. **Layout variety (0/1 covered):** No grid layouts can be added because remediation prohibits HTML restructuring. The flagship remains single-column.

5. **Process gaps (0/3 covered):** The remediation fixes THIS page but does not fix the prompt architecture that caused the failures. Future experiments will repeat the same pattern unless playbook content replaces guardrail-only content.

### Highest-Priority Uncovered Requirements

| Priority | REQ | Category | Impact | Effort |
|----------|-----|----------|--------|--------|
| 1 | REQ-13 (modulating chains) | Multi-Coherence | HIGH | LOW (CSS only) |
| 2 | REQ-17 (3 channels per transition) | Multi-Coherence | HIGH | MEDIUM |
| 3 | REQ-29 (responsive breakpoint) | Responsive | HIGH | LOW |
| 4 | REQ-25 (skip link) | Accessibility | MEDIUM | LOW |
| 5 | REQ-42 (syntax highlighting) | Technique | MEDIUM | LOW |
| 6 | REQ-11 (CCS >= 0.30) | Multi-Coherence | HIGH | HIGH (architectural) |
| 7 | REQ-14 (responding sequences) | Multi-Coherence | MEDIUM | MEDIUM |
| 8 | REQ-26 (focus-visible) | Accessibility | MEDIUM | LOW |

### The One-Sentence Diagnosis

**The remediation prompt fixes the INDIVIDUAL CHANNEL deficits (each channel becomes perceptible) but does not fix the INTER-CHANNEL COHERENCE deficit (channels operating as a unified atmospheric system), and completely omits accessibility, responsive design, and the process improvements needed to prevent recurrence.**

---

*End of remediation requirements specification.*
