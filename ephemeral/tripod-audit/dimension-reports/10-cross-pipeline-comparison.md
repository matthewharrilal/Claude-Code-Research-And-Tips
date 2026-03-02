# Dimension 10: Cross-Pipeline Comparison

## /compose v5 vs /research-compose on the Same Content (yegge-gas-town)

**Auditor:** Cross-pipeline comparison agent
**Old pipeline output:** `ephemeral/builds/yegge-gas-town-extraction-2026-03-01-5/output.html`
**New pipeline output:** `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_build-final.html`
**Content:** Steve Yegge Gas Town extraction (~5000 words, 14 sections, 8 roles, ASCII diagrams, code blocks)

---

## A. CSS Richness Comparison

| Metric | OLD (/compose v5) | NEW (/research-compose) | Delta |
|--------|-------------------|-------------------------|-------|
| **Total HTML file lines** | 5,856 | 3,072 | -47.5% |
| **CSS lines (non-comment, non-blank)** | 2,147 | 1,097 | -48.9% |
| **Unique custom properties (--vars)** | 60 | 46 | -23.3% |
| **CSS selectors** | 378 | 200 | -47.1% |
| **Unique CSS class definitions** | 219 | 70 | -68.0% |
| **CSS classes used in HTML body** | 228 | 63 | -72.4% |
| **@media breakpoints** | 3 | 3 | 0% |
| **Grid definitions** | 24 | 3 | -87.5% |
| **display:grid instances** | 10 | 1 | -90.0% |
| **display:flex instances** | 17 | 0 | -100% |
| **Unique hex colors** | 24 | 26 | +8.3% |
| **Font-size values** | 15 | 17 | +13.3% |
| **Letter-spacing values** | 5 | 6 | +20.0% |
| **Line-height values** | 7 | 9 | +28.6% |
| **Border treatments** | 23 | 13 | -43.5% |
| **Padding values** | 29 | 28 | -3.4% |

**Summary:** The old pipeline produced nearly 2x the CSS volume. The old build has 3x the CSS class definitions and 3.6x the CSS classes used in HTML. The old build is significantly more grid/flex-heavy (10 grids vs 1, 17 flexboxes vs 0). However, the new build has slightly MORE typographic diversity -- more font-size values (17 vs 15), letter-spacing values (6 vs 5), and line-height values (9 vs 7).

---

## B. Mechanism Deployment

### Mechanisms in the RESEARCH PACKAGES vs actual CSS deployment

| Package Mechanism | Instructed? | Deployed in NEW? | Deployed in OLD? |
|-------------------|-------------|------------------|------------------|
| M1: Geological Stratification (zone backgrounds) | YES (Pass 1, S2-M01) | YES -- 6 zones: overseer, operations, bedrock, philosophical, factory, resolution | YES -- 7 strata: bedrock, seismic, floor, pipe, gauge, surface, dispatch |
| M2: Border-Weight Gradient (4px/3px/1px) | YES (Pass 1, S2-M02) | YES -- .role-card--town (4px), .role-card--rig (3px), .role-card--worker (1px) | PARTIAL -- .role-card--featured vs standard, but NOT 3-tier encoded |
| M3: CRESCENDO Typography Compression | YES (Pass 1, S2-M03) | YES -- per-zone h2/h3/p sizing descends (2rem->1.625->1.375->release) | PARTIAL -- type scale defined but NOT zone-scoped compression |
| M4: Velocity Interleaving | YES (Pass 1, S2-M04) | YES -- .voice-eruption class, .meta-indicator class | PARTIAL -- blockquotes exist but no systematic velocity interleaving |
| M5: Fractal Self-Similarity (5 scales) | YES (Pass 1, S2-M05) | YES -- .role-card__header (sparse) / .role-card__body (dense) | YES -- role-card-header/role-card-body structure mirrors this |
| M6: PULSE Alternation | YES (Pass 1, S2-M06) | YES -- .pulse-pair, .quote-item__voice/.quote-item__context with width differential (90%/60%) | NO -- no width-differential pulse system |
| M7: BRIDGE Transitions | YES (Pass 1, S2-M07) | YES -- .register-bridge class (40px padding) | NO -- no explicit bridge mechanism |
| M8: Density Wave Sequencing | YES (Pass 1, S2-M08) | YES -- density tokens (--density-sparse/moderate/dense/maximum) + per-zone content-block spacing | PARTIAL -- spacing varies but NOT as named density tokens |
| Bento Grid (tiered role layout) | YES (Pass 2, Finding 11) | YES -- .role-grid--town (grid-template-columns: 2fr 1fr 1fr) | YES -- .tier-boxes with 3-column grid, more elaborate |
| Progressive Disclosure (details/summary) | YES (Pass 2, Finding 13/20) | YES -- 17 details elements (roles + troubleshooting) | NO -- 0 details elements |
| Beads Memory Tiers (Hot/Warm/Cold borders) | YES (Pass 2, Finding 16) | YES -- .memory-tier--hot (4px), .memory-tier--warm (3px), .memory-tier--cold (1px) | YES -- .memory-layer--hot (4px), .memory-layer--warm (3px) |
| Factory Declaration (80px breathing) | YES (Pass 2, Finding 10) | YES -- .factory-declaration with 80px padding + 4px red border | NO -- no equivalent breathing-room declaration element |
| Wave 6 Highlight | YES (Pass 2, TC CW3) | YES -- .wave-highlight with 3px red border + bold | NO -- no wave highlighting |
| Dark Zone Code Differentiation | YES (Pass 3, Pattern 2) | YES -- .zone--bedrock pre with 3px #E0D5C5 border | YES -- code blocks inside dark stratum use structural border |
| Code Minor (secondary code block) | BUILDER-ORIGINATED in new | YES -- pre.code-minor with lighter treatment | NO |
| Temperature Buffer | YES (Pass 2, Finding 21) | YES -- .temperature-buffer (48px) before quotes zone | NO |

**Mechanisms that exist in /research-compose that WOULD NOT exist without the research phase:**

1. **CRESCENDO typography compression per zone** -- The research phase explicitly derived zone-scoped typography (h2/h3/p sizes, line-heights, letter-spacing all decrease as zones descend). The old pipeline has a flat type scale that does not compress by zone.
2. **PULSE width differential** -- 90% voice width vs 60% context width in the Quotes section. The old pipeline has no width-differential rhythm.
3. **BRIDGE register transitions** -- Explicit 40px breathing class between incompatible reading modes. The old pipeline has no register-transition concept.
4. **Density Wave tokens** -- Named CSS custom properties (--density-sparse: 64px through --density-maximum: 32px) that semantically encode density. The old pipeline uses ad-hoc spacing.
5. **Factory Declaration 80px event** -- A deliberate 2:1 padding ratio creating a breathing moment before the dense Roles section. The old pipeline has no equivalent.
6. **Temperature Buffer** -- Neutral zone before the Quotes section's dramatic register whiplash. The old pipeline has no equivalent.
7. **Wave 6 Highlight** -- 6 Waves table row with emphatic border treatment. The old pipeline has no equivalent.
8. **Progressive Disclosure** -- 17 collapsible sections (roles + troubleshooting patterns). The old pipeline has 0.

---

## C. Soul Compliance

| Constraint | OLD (/compose v5) | NEW (/research-compose) |
|-----------|-------------------|-------------------------|
| border-radius: 0 | CLEAN -- only `0` values | CLEAN -- regex false positive (comment + rule on same line) |
| box-shadow: none | CLEAN -- explicit `none` | CLEAN -- explicit `none` |
| No gradients | CLEAN -- 0 instances | CLEAN -- 0 instances |
| No rgba() | CLEAN -- 0 instances | CLEAN -- 0 instances |
| No 2px borders | 1 INSTANCE -- `outline-offset: 2px` (focus style, acceptable) | 1 INSTANCE -- `letter-spacing: 0.02em` (false positive, not a border) |
| 3-category borders (1/3/4px) | YES -- uses --border-accent (4px), --border-structural (3px), --border-separator (1px) | YES -- uses same 3-category system |
| Container max-width 960px | YES -- .page-spine { max-width: 960px } | YES -- .tower-container { max-width: 960px } |
| Font trinity locked | YES -- Instrument Serif, Inter, JetBrains Mono | YES -- Instrument Serif, Inter, JetBrains Mono |
| Dark header + 3px red border | YES | YES |
| Footer with 3px border-top | YES | YES |

**Verdict:** Both builds are CLEAN on soul constraints. Zero genuine violations in either. The old pipeline does not have an edge here; both are equally compliant.

---

## D. Content Coverage

| Metric | OLD | NEW |
|--------|-----|-----|
| Content sections present | 31/31 | 31/31 |
| Sections missing | 0 | 0 |
| H1 elements | 1 | 1 |
| H2 elements | 17 | 16 |
| H3 elements | 49 | 51 |
| H4 elements | 22 | 4 |
| Blockquotes | 25 | 0 |
| Code blocks (pre) | 0 (uses .code-block div) | 37 |
| Tables | 10 | 10 |
| Details/collapsible | 0 | 17 |

**Zone Architecture:**

| Build | Zone Count | Zone Names |
|-------|-----------|------------|
| OLD | 7 strata | bedrock, seismic, floor, pipe, gauge, surface, dispatch |
| NEW | 6 zones | overseer, operations, bedrock, philosophical, factory, resolution |

Both builds cover ALL content from the original article. No dropped sections in either. The OLD build uses 7 strata (more granular zone divisions), while the NEW build uses 6 zones that map directly to the TC brief's zone architecture.

The NEW build uses semantic HTML more correctly -- actual `<pre>` for code blocks (37) vs the old build's `<div class="code-block">` pattern. The new build uses 17 `<details>` elements for progressive disclosure; the old build has none.

**Heading structure:** The old build uses significantly more H4 elements (22 vs 4), suggesting deeper heading nesting. The new build is flatter in structure but achieves depth through progressive disclosure instead.

---

## E. Perceptual Richness Indicators

### Background Color Diversity

| Build | Distinct Background Variables | Resolved Hex Colors |
|-------|------------------------------|-------------------|
| OLD | 16 var() references | 10 unique: #E8E0D4, #FAF4EA, #F0E8DC, #F5EDE3, #FBF5ED, #F8F2E8, #EDE5D9, #FEF9F5, #FEF5F2, #1A1A1A (+ 3 callout variants) |
| NEW | 13 var() references | 8 unique: #FEF9F5, #FFFFFF, #FAF5ED, #1A1A1A, #F5F9FE, #F2F9F4, #FEF6F5, #FFFBF2, #F8F5FE (+ 2 inline variants) |

The OLD build has MORE background color diversity (7 distinct stratum backgrounds vs 4 zone backgrounds). Each stratum in the old build has a unique warm-shifted tone. The new build uses only 4 zone backgrounds but adds 5 distinct callout backgrounds.

### Typography Zones

| Build | font-size values | line-height values | letter-spacing values |
|-------|-----------------|--------------------|-----------------------|
| OLD | 15 | 7 | 5 (all positive: 0.03em-0.2em) |
| NEW | 17 | 9 | 6 (includes NEGATIVE: -0.02em, -0.015em, -0.01em + positive) |

The NEW build has a WIDER typographic range. Critically, it uses negative letter-spacing on headings (tight tracking for confidence) combined with positive letter-spacing on meta labels (loose tracking for utility) -- a greater typographic spread. The 9 distinct line-height values vs 7 shows the CRESCENDO compression is actually deployed (1.85, 1.8, 1.7, 1.65, 1.6, 1.5, 1.4, 1.3, 1.2 form a descent).

### Border Configurations

| Build | Border treatments | Notable |
|-------|-------------------|---------|
| OLD | 23 distinct | Heavy use of structural 3px borders, connector lines, tier separators |
| NEW | 13 distinct | Focused on the 4px/3px/1px authority gradient system |

The old build has nearly 2x the border diversity, but much of it is non-semantic (connector lines, decorative separators). The new build concentrates border weight into the 3-tier authority encoding system, which is more purposeful.

### Spacing Diversity

| Build | Padding values | Margin values |
|-------|---------------|---------------|
| OLD | 29 | 8 |
| NEW | 28 | 7 |

Nearly identical spacing diversity. Both use the full spacing scale.

---

## F. The Big Question

### Does the research phase produce MEASURABLY different output?

**YES, but not in the direction expected.**

The research phase produces **STRUCTURALLY different** output but **quantitatively LESS** CSS:

#### What /research-compose produces that /compose does NOT:

1. **Zone-scoped typography compression (CRESCENDO)** -- The most impactful mechanism. The old build has a flat type scale; the new build has per-zone typography that descends (h2 shrinks from 2rem to 1.375rem, line-height from 1.8 to 1.6, letter-spacing from -0.02em to -0.01em). This creates a PERCEPTIBLE reading-pace change as you scroll. This mechanism was explicitly derived from the research phase (S2-M03, elevated chain DD-F-002->OD-F-009->AD-F-006/008).

2. **Named density wave tokens** -- The old build uses ad-hoc spacing. The new build uses semantic density tokens (--density-sparse: 64px through --density-maximum: 32px) that encode the content's own rhythm into CSS variables. This makes the density wave a DESIGN DECISION rather than an accident.

3. **PULSE width differential** -- The Quotes section uses 90%/60% width contrast between voice and context. This creates a visual asymmetry that the old build's uniform blockquotes lack.

4. **Progressive disclosure (17 collapsible sections)** -- The single most user-facing difference. The old build presents all 8 roles and all 6 troubleshooting patterns flat. The new build collapses them into scannable summaries with depth-on-demand. This TRANSFORMS the reading experience of the densest sections.

5. **Explicit register-transition breathing** -- .register-bridge and .temperature-buffer classes create deliberate pauses between incompatible reading modes. The old build has no equivalent concept.

6. **3-tier border authority encoding** -- The old build has .role-card--featured vs plain. The new build has 3 distinct tiers (4px/3px/1px) with DIFFERENT padding (24px/20px/16px) AND line-height (1.8/1.7/1.6) -- a triple-channel hierarchy encoding that was explicitly designed in the research packages.

7. **Transition table documentation** -- The new build's CSS opens with a 55-line comment documenting every zone-to-zone transition (background shift, type change, spacing change, border change, channel count). This is pure research-phase output -- the builder was GIVEN the transition architecture.

#### What /compose produces that /research-compose does NOT:

1. **3.5x more CSS volume** -- 2,147 lines vs 1,097. The old build has dramatically more CSS.

2. **3x more CSS class definitions** -- 219 vs 70. The old build creates bespoke classes for every component variant. The new build reuses structural classes.

3. **10x more grid layouts** -- 10 display:grid instances vs 1. The old build has elaborate grid systems (role hierarchies, paradigm comparisons, communication flows, etc.). The new build relies on single-column flow with semantic borders.

4. **17 flexbox instances vs 0** -- The old build uses extensive flex layouts for role boxes, tier connectors, flow steps. The new build has zero flex.

5. **Elaborate component library** -- The old build has: .complexity-ladder, .state-comparison, .paradigm-comparison, .paradigm-col, .flow-step, .tier-boxes, .role-hierarchy (with header, tiers, connectors, boxes), .comm-flow (with flow-step, flow-role, flow-action, flow-branch), .memory-model (with layers), .compiler-io, etc. These are bespoke components with rich internal structure.

6. **7 stratum backgrounds** -- The old build has 7 distinct strata (#E8E0D4, #FAF4EA, #F0E8DC, #F5EDE3, #FBF5ED, #F8F2E8, #EDE5D9) vs 4 zones. More granular atmospheric variation.

7. **25 blockquotes** -- The old build presents Yegge quotes as 25 blockquote elements with various treatments (key-quote, paradigm-quote classes). The new build has 0 blockquote elements, using .voice-eruption divs instead.

8. **Syntax highlighting classes** -- The old build has .kw, .str, .cmt, .fn, .typ, .num, .pn for 7-color syntax highlighting. The new build does not include syntax highlighting.

---

## Verdict: Is the Research Phase Worth 2-3x the Cost?

### The Honest Assessment

**The research phase produces a DIFFERENT kind of build, not an objectively RICHER one.**

**What the research phase adds:**
- **Intentionality** -- Every mechanism in the new build traces to a named finding, a validated chain, a case study process. The CSS is annotated with its provenance (PACKAGE S2-M02, FINDING 16, ADAPTED from OD-004). The old build has mechanism comments too, but they reference fewer sources.
- **Compositional architecture** -- The CRESCENDO typography compression, density wave tokens, and BRIDGE transitions create a PAGE-LEVEL compositional arc that the old build lacks. The old build has rich components but no systemic page-scale rhythm.
- **Progressive disclosure** -- 17 collapsible sections transform the reading experience. This is the single most user-visible difference.
- **Provenance documentation** -- The 55-line transition table at the top of the new CSS is a research artifact. It makes the design REVIEWABLE and AUDITABLE.

**What the research phase costs:**
- **2x CSS reduction** -- The new build has LESS CSS, not more. The research phase doesn't produce more mechanism diversity; it produces more FOCUSED mechanism deployment.
- **Layout complexity reduction** -- 1 grid vs 10. 0 flex vs 17. The research phase's emphasis on compositional arc SUPPRESSES layout experimentation. The builder was so focused on deploying the 8 curated mechanisms that they didn't create bespoke component layouts.
- **Component library reduction** -- 70 classes vs 219. The old build has an enormous bespoke component vocabulary (paradigm comparisons, communication flows, role hierarchies with tier boxes and connectors). The new build reuses a smaller class set.

**The core paradox:** The research phase produces a MORE ARCHITECTED but LESS RICH build. The old pipeline's unconstrained builder created more CSS, more components, more grids, and more visual diversity -- but WITHOUT the compositional intentionality. The new pipeline's research-constrained builder created LESS CSS but deployed it with systematic purpose -- every mechanism traces to a chain, every zone transition is documented, every density level is named.

### The Scoring

| Dimension | OLD (/compose v5) | NEW (/research-compose) | Winner |
|-----------|-------------------|-------------------------|--------|
| CSS volume | 2,147 lines | 1,097 lines | OLD (2x) |
| Component diversity | 219 classes | 70 classes | OLD (3x) |
| Layout sophistication | 10 grids, 17 flex | 1 grid, 0 flex | OLD (10x) |
| Typographic range | 15 sizes, 7 LH, 5 LS | 17 sizes, 9 LH, 6 LS | NEW |
| Zone-scoped typography | None | CRESCENDO compression | NEW |
| Compositional arc | Ad-hoc | Documented transitions | NEW |
| Progressive disclosure | 0 elements | 17 elements | NEW |
| Mechanism provenance | Some comments | Full chain traceability | NEW |
| Soul compliance | Clean | Clean | TIE |
| Content coverage | 31/31 | 31/31 | TIE |
| Background diversity | 7 strata | 4 zones + 5 callouts | OLD |
| Semantic HTML | div-based code blocks | <pre>, <details> | NEW |
| Density encoding | Ad-hoc spacing | Named tokens | NEW |

**Final verdict: 6-5-2 (NEW edges OLD on architecture, OLD edges NEW on volume/richness).**

The research phase IS worth the cost **IF the goal is compositional intentionality and architectural documentation.** The curated packages successfully constrained the builder to deploy mechanisms with purpose, prevented soul violations, and created a page-level rhythm (CRESCENDO + density wave + BRIDGE) that the unconstrained builder did not produce.

The research phase is NOT worth the cost **IF the goal is maximum CSS richness.** The unconstrained v5 builder, given free rein, produced 2x the CSS, 3x the components, and 10x the layout sophistication. The old pipeline's "just build it" approach produces MORE visual diversity per dollar.

**The real question is:** Does architectural intentionality produce a BETTER PAGE for the reader? That requires perceptual auditing of both builds side-by-side, which this quantitative comparison cannot answer. The numbers show the research phase produces a fundamentally different KIND of build -- fewer CSS lines but more compositional purpose. Whether that tradeoff is worth 2-3x cost depends on whether you value documented intentionality (new) or raw creative abundance (old).

---

## Appendix: Key File Paths

- OLD build: `ephemeral/builds/yegge-gas-town-extraction-2026-03-01-5/output.html`
- NEW build: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_build-final.html`
- TC brief: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_tc-brief.md`
- Research Package Pass 1: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_package-pass-1.md`
- Research Package Pass 2: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_package-pass-2.md`
- Research Package Pass 3: `ephemeral/builds/yegge-gas-town-extraction-2026-03-02/_package-pass-3.md`
