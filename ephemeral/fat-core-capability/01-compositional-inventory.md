# Exhaustive Compositional Intelligence Inventory

**Agent:** comp-inventory
**Date:** 2026-02-19
**Purpose:** Map EVERY piece of compositional intelligence in the design system, classify each as STRUCTURAL / INSTRUCTIONAL / TACIT.

---

## Classification Key

- **STRUCTURAL**: Enforced through code (CSS tokens, binary gates, file architecture). An agent CANNOT violate this without actively overriding it.
- **INSTRUCTIONAL**: Communicated through text (prose rules, guidelines, recommendations). An agent must READ and COMPLY -- compliance depends on reading + comprehension.
- **TACIT**: Requires creative judgment that cannot be fully codified. No rule or code enforces it -- it emerges from experience, taste, or compositional intuition.

---

## 1. SCALES (5 Named Zoom Levels)

Source: `mechanism-catalog.md` lines 804-866, SKILL.md Phase 4.7

| # | Scale | What It Observes | Tier Requirement | Classification |
|---|-------|-----------------|------------------|----------------|
| S1 | **Navigation** (bird's eye) | Header, TOC, page-level nav | Ceiling+ (4-scale min) | INSTRUCTIONAL -- text rule in SKILL.md Phase 4.7 specifies which tiers need which scales |
| S2 | **Page** (the scroll) | Section sequence across full page | Middle+ (2-scale min) | INSTRUCTIONAL -- builder must consciously design section flow |
| S3 | **Section** (one screen) | Component arrangement within viewport | Ceiling+ (4-scale min) | INSTRUCTIONAL -- no code enforces intra-section coherence |
| S4 | **Component** (one element) | Internal content organization of callout/card/code | Middle+ (2-scale min) | PARTIALLY STRUCTURAL -- 2-zone DNA (#2) provides structural component pattern; but applying it coherently is INSTRUCTIONAL |
| S5 | **Character** (inline) | Text-level: bold, code, link color, emphasis | Flagship only (5-scale) | TACIT -- inline styling decisions are micro-judgment calls |

**Fractal Coherence Principle**: Same design direction visible at multiple scales. If page-level uses CRESCENDO (sparse-to-dense), components should mirror it internally.

- Classification: **INSTRUCTIONAL** -- the fractal gate (Phase 4.7) is a textual GATE with a mandatory deliverable table, but no code enforces pattern consistency across scales. Builder must self-verify.

**Tier-to-Scale Mapping**:
| Tier | Required Scales | Source |
|------|----------------|--------|
| Floor | Exempt | SKILL.md Step 0D |
| Middle | 2 (Page + Component) | SKILL.md Phase 4.7 |
| Ceiling | 4 (Nav + Page + Section + Component) | SKILL.md Phase 4.7 |
| Flagship | 5 (all) | SKILL.md Phase 4.7 |

- Classification: **INSTRUCTIONAL** -- tier classification is a text decision in Phase 0D.

---

## 2. CHANNELS (6 Exhaustive CSS Channels)

Source: SKILL.md Phase 4.2 "The 6 Exhaustive CSS Channels" (line ~1249)

Every metaphor property must express through ONLY these channels:

| # | Channel | What It Controls | Token-Level Constraint | Classification |
|---|---------|-----------------|----------------------|----------------|
| CH1 | **Background color** | Zone palette (sparse, dense, breathing, dark) | 4 zone tokens + 8 semantic bg tokens in tokens.css | STRUCTURAL (tokens exist as CSS vars) but SELECTION is TACIT |
| CH2 | **Border** | 3 categories: 3-4px structural, 1px separator, 1px micro | `--border-structural: 4px`, `--border-accent: 3px`, `--border-micro: 1px` | STRUCTURAL (token values locked) but ASSIGNMENT is INSTRUCTIONAL |
| CH3 | **Typography** | 3 fonts, 6+ sizes | `--font-display`, `--font-body`, `--font-mono` + type scale | STRUCTURAL (font families IMMUTABLE) but ROLE MAPPING is INSTRUCTIONAL |
| CH4 | **Spacing** | Mathematical scale 4-80px, 3 semantic aliases | `--space-1` through `--space-24`, `--space-within/between/chapter` | STRUCTURAL (scale values locked) but SEMANTIC ASSIGNMENT is TACIT |
| CH5 | **Layout** | Flexbox (sequential), grid (parallel), none (inline/block) | `--grid-gap: 24px` | STRUCTURAL (grid gap locked) but LAYOUT CHOICE is TACIT |
| CH6 | **Color accent** | Primary red + 5 accent colors for callout borders ONLY | `--color-primary`, `--accent-blue/green/coral/amber/purple` | STRUCTURAL (palette locked) but SEMANTIC MAPPING is INSTRUCTIONAL |

**Key insight**: Channels are STRUCTURALLY constrained at the token level (you can only use these 6 channels, with these exact values). But WHICH channel to deploy WHERE, and HOW channels reinforce each other, is INSTRUCTIONAL (coherence rules) or TACIT (compositional judgment).

---

## 3. MECHANISMS (18 Cataloged CSS Techniques)

Source: `mechanism-catalog.md` (1,219 lines)

### 3.1 Per-Mechanism Inventory

| # | Mechanism | Category | Perceptual Effect | CSS Lines | Metaphor Independence | Classification |
|---|-----------|----------|------------------|-----------|-----------------------|----------------|
| 1 | Border-Weight Gradient | Hierarchy (H) | HIGH | ~20 | HIGH | STRUCTURAL (CSS pattern is code) + INSTRUCTIONAL (progressive vs discrete mode selection) |
| 2 | 2-Zone Component DNA | Component (C) | MEDIUM | ~50 | VERY HIGH | STRUCTURAL (component CSS exists in merged-components.css) |
| 3 | Solid Offset Depth | Depth/Emphasis (D) | HIGH | ~15 | VERY HIGH | STRUCTURAL (::after pseudo-element pattern is code) |
| 4 | Spacing Compression | Hierarchy (H) | LOW | ~20 | HIGH | INSTRUCTIONAL (compression direction must be consciously chosen) |
| 5 | Dense/Sparse Alternation | Spatial (S) | MEDIUM | ~15 | VERY HIGH | INSTRUCTIONAL (alternation pattern is a rhythm decision) |
| 6 | Width Variation | Spatial (S) | LOW | ~10 | HIGH | TACIT (which content gets narrow vs wide is judgment) |
| 7 | Zone Background Differentiation | Depth/Emphasis (D) | MEDIUM | ~25 | VERY HIGH | PARTIALLY STRUCTURAL (4 zone tokens exist) + TACIT (zone assignment) |
| 8 | Scroll Witness / Sticky TOC | Structure/Nav (N) | LOW | ~35 | HIGH | STRUCTURAL (CSS + JS pattern) |
| 9 | Confidence Encoding via Color | Component (C) | MEDIUM | ~10 | VERY HIGH | STRUCTURAL (6 accent colors locked) + INSTRUCTIONAL (color-to-semantic mapping) |
| 10 | Border-Left Semantic Signal | Component (C) | HIGH | ~5 | VERY HIGH | STRUCTURAL (4px left border is code) |
| 11 | Typographic Scale Jumping | Hierarchy (H) | LOW | ~10 | VERY HIGH | STRUCTURAL (type scale tokens exist) |
| 12 | Progressive Disclosure | Structure/Nav (N) | MEDIUM | ~30 | HIGH | INSTRUCTIONAL (4-phase pattern must be designed) |
| 13 | Dark Header + 3px Border | Structure/Nav (N) | HIGH | ~20 | VERY HIGH | STRUCTURAL (header CSS pattern) |
| 14 | Footer Mirror | Structure/Nav (N) | MEDIUM | ~20 | VERY HIGH | STRUCTURAL (mirrors header pattern) |
| 15 | Bento Grid | Spatial (S) | MEDIUM | ~25 | HIGH | PARTIALLY STRUCTURAL (grid CSS) + TACIT (span decisions) |
| 16 | Drop Cap | Depth/Emphasis (D) | MEDIUM | ~10 | MEDIUM | STRUCTURAL (::first-letter CSS) |
| 17 | Code Block | Component (C) | HIGH | ~40 | VERY HIGH | STRUCTURAL (dark bg + syntax highlighting tokens) |
| 18 | Data Table | Structure/Nav (N) | LOW | ~20 | VERY HIGH | STRUCTURAL (mono headers + border categories) |

### 3.2 Category Summary

| Category ID | Category Name | Mechanisms | Per-Category Minimum (Middle+) |
|-------------|--------------|------------|-------------------------------|
| S | Spatial | #5, #6, #15 | 1+ |
| H | Hierarchy | #1, #4, #11 | 1+ |
| C | Component | #2, #9, #10, #17 | 1+ |
| D | Depth/Emphasis | #3, #7, #16 | 1+ |
| N | Structure/Navigation | #8, #12, #13, #14, #18 | 1+ |

- Per-category minimum: **INSTRUCTIONAL** -- text rule in SKILL.md Phase 4.0, enforced by binary check ("deploy AT LEAST 1 from EACH category").

### 3.3 Mechanism Application Modes

Source: mechanism-catalog.md, mechanism #1 documentation

| Mode | Description | When to Use | Classification |
|------|-------------|-------------|----------------|
| **Progressive** | Continuous gradient (4px->3px->2px->1px) across stratified content | Content with natural levels (confidence, criticality, depth) | INSTRUCTIONAL |
| **Discrete** | Categorical differentiation (4px for callouts, 3px for sections, 1px for dividers) | Content with distinct types, not levels | INSTRUCTIONAL |

- Classification: **INSTRUCTIONAL** -- mode selection is described in text but requires content analysis judgment, making it borderline TACIT.

---

## 4. MULTI-COHERENCE RULES (5 Core + Extensions)

Source: SKILL.md Phase 4.3 "Coherence Checking"

| Rule ID | Rule Name | What It Enforces | Classification |
|---------|-----------|-----------------|----------------|
| C-1 | **Density Direction Consistency** | ALL channels must reinforce same metaphor direction (if descent = denser, bg darkens AND borders thicken AND spacing decreases AND type compresses AND layout tightens) | INSTRUCTIONAL -- text rule requiring cross-channel verification |
| C-2 | **Transition Strength = Axis Distance** | SMOOTH for same-axis, BRIDGE for adjacent-axis, BREATHING for distant-axis | INSTRUCTIONAL -- lookup table in SKILL.md Phase 4.6 |
| C-3 | **Typography Role = Content Authority** | Display serif = highest, body sans = standard, mono = precision | PARTIALLY STRUCTURAL (font tokens lock families) + INSTRUCTIONAL (role mapping) |
| C-4 | **Border Category = Containment Intent** | 3-4px structural, 1px separator, NEVER 2px | STRUCTURAL (token values) + INSTRUCTIONAL (prohibition #9) |
| C-5 | **Accent Color = Semantic Role** | Primary red for structural, blue for info, green for tips, coral for warnings, amber for challenges, purple for essence | INSTRUCTIONAL -- semantic mapping documented in semantic-rules.md Gap 5 |

### Extended Coherence Intelligence

| Source | Rule/Principle | Classification |
|--------|---------------|----------------|
| SKILL.md Phase 4.2C | **3 Transition Type Minimum**: Page must use at least 3 different transition types (SMOOTH/BRIDGE/BREATHING) | INSTRUCTIONAL |
| mechanism-catalog.md "Transition Grammar" | **3 Transition Types**: HARD CUT (domain change), SPACING SHIFT (intensity change), CHECKPOINT (phase change) | INSTRUCTIONAL |
| mechanism-catalog.md "Transition Selection Rule" | Binary decision: same domain? -> type selection | INSTRUCTIONAL |
| mechanism-catalog.md | **Maximum Transition Spacing**: No transition exceeds `--space-max-zone` (96px) | STRUCTURAL (token `--space-max-zone: 96px`) + INSTRUCTIONAL (stacking rule) |

---

## 5. ANTI-SCALE MODEL

Source: MEMORY.md (synthesized from 6 Opus agents in `_scale-exploration/`)

**Formula**: `Richness = semantic density x restraint x spatial confidence`

| Component | Definition | Classification |
|-----------|-----------|----------------|
| **Semantic density** | Information value per vertical pixel | TACIT -- requires judgment about what constitutes "density" |
| **Restraint** | Deliberate withholding of available mechanisms | TACIT -- knowing when NOT to deploy is pure judgment |
| **Spatial confidence** | Willingness to leave meaningful space (vs void) | TACIT -- distinguishing breathing from void is perceptual |

**Key Finding**: 5 scales is the mathematical ceiling (Alexander/Salingaros). Beyond 5, add CHANNELS not LEVELS.

- Classification: **TACIT** -- the anti-scale model is a conceptual framework that cannot be codified into binary rules. It describes what creates richness but cannot prescribe how to achieve it.

---

## 6. FRACTAL SELF-SIMILARITY

Source: mechanism-catalog.md lines 804-866, SKILL.md Phase 4.7

| Aspect | What It Means | Classification |
|--------|--------------|----------------|
| **Fractal Gate (M2)** | Mandatory deliverable: scale coverage table showing same pattern at tier-required scales | INSTRUCTIONAL -- binary gate requiring table completion |
| **Same Direction Rule** | If page-level = sparse-to-dense, component-level MUST also = sparse-to-dense | INSTRUCTIONAL -- text rule requiring self-verification |
| **Pattern Structural Requirement** | Pattern must be structural (density/hierarchy), not decorative (color theme) | INSTRUCTIONAL -- judgment about what counts as "structural" edges into TACIT |
| **Sunset Clause** | Re-evaluate after 10 pipeline runs | INSTRUCTIONAL |

**Concrete Example (Middle, CRESCENDO)**:
- Page scale: Section padding 64px -> 32px -> 16px (sparse to dense)
- Component scale: Labels 0.75rem sparse, bodies 1rem dense

---

## 7. ZONE TRANSITION RULES

Source: mechanism-catalog.md "Transition Grammar" section (lines 944-1027)

| Rule | Description | Enforcement | Classification |
|------|-------------|-------------|----------------|
| **Every boundary must have exactly 1 transition type** | "No transition" (empty space) is NOT valid | Binary compliance test | INSTRUCTIONAL |
| **Type 1: HARD CUT** | For domain changes. 3px primary border, no extra spacing beyond 32px | CSS pattern documented | INSTRUCTIONAL |
| **Type 2: SPACING SHIFT** | For intensity changes within same domain. NO border, NO background -- spacing alone carries signal | CSS pattern documented | INSTRUCTIONAL |
| **Type 3: CHECKPOINT** | For phase changes. 1px borders + breathing bg + mono label | CSS pattern documented | INSTRUCTIONAL |
| **96px maximum per-property spacing** | No single margin/padding exceeds `--space-max-zone` | STRUCTURAL (token) + INSTRUCTIONAL (stacking awareness) |

---

## 8. CHANNEL-SHIFT RULES (Multi-Channel Encoding)

Source: SKILL.md Phase 4.3, mechanism-catalog.md tier distinction

| Rule | Tier | What It Requires | Classification |
|------|------|-----------------|----------------|
| **Independent deployment** | Middle | Each mechanism serves a DIFFERENT content need independently | INSTRUCTIONAL |
| **Reinforcing pairs** | Ceiling | At least 2 mechanism pairs encode the SAME semantic dimension through different CSS channels | TACIT -- identifying "same semantic" requires creative interpretation |
| **Multi-channel coherence** | Ceiling+ | Multiple mechanisms work TOGETHER through metaphor, expressing shared meaning | TACIT -- "shared meaning" is a creative judgment |
| **6-channel verification** | All | Every metaphor property must express through exactly 1 of 6 legal channels | INSTRUCTIONAL (channel list is exhaustive) |

**The Critical Distinction**:
- Middle: border-weight = hierarchy, zone backgrounds = section breaks, spacing = rhythm (INDEPENDENT)
- Ceiling: border-weight + zone backgrounds + spacing ALL encode "depth" TOGETHER (REINFORCING)

Classification of the distinction itself: **TACIT** -- understanding when mechanisms are reinforcing vs independent requires compositional judgment that cannot be reduced to a binary rule.

---

## 9. PROHIBITIONS (24 Total)

Source: `prohibitions.md` (420 lines)

### 9.1 Absolute Prohibitions (8) -- STRUCTURAL

| # | Prohibition | What It Prevents | Enforcement |
|---|-------------|-----------------|-------------|
| 1 | border-radius > 0 | Rounded corners | CSS token `--border-radius: 0` |
| 2 | box-shadow: any | Shadow depth | CSS token `--box-shadow: none` |
| 3 | filter: drop-shadow() | Shadow effects | Prose rule + soul test |
| 4 | opacity < 1 on backgrounds | Transparency depth illusion | Prose rule |
| 5 | Gradient backgrounds | Light source implication | Prose rule |
| 6 | Pure #000 or #FFF | Warm palette violation | Prose rule (tokens use near-equivalents) |
| 7 | Serif for body text | Typography hierarchy destruction | Prose rule (font tokens lock families) |
| 8 | Rounded corners for decoration | Anti-friendly-design philosophy | Redundant with #1 |

Classification: #1 and #2 are **STRUCTURAL** (CSS custom properties enforce them). #3-8 are **INSTRUCTIONAL** (require agent compliance with text rules). However, ALL are framed as binary (NEVER) which achieves ~100% compliance.

### 9.2 Conditional Prohibitions (14) -- INSTRUCTIONAL

| # | Prohibition | Exception | Classification |
|---|-------------|-----------|----------------|
| 9 | 2px borders | OD-004 confidence encoding only | INSTRUCTIONAL |
| 10 | Accent borders < 4px | Progressive depth encoding only | INSTRUCTIONAL |
| 11 | Decorative elements without information | None | INSTRUCTIONAL |
| 12 | Decorative grid breaking | Content-only grid breaking OK | INSTRUCTIONAL |
| 13 | Vertical table borders | None | INSTRUCTIONAL |
| 14 | Hover lift effects | None | INSTRUCTIONAL |
| 15 | Traffic-light color adjacency | 48px+ separation | INSTRUCTIONAL |
| 16 | Cool-toned grays | None | INSTRUCTIONAL |
| 17 | Non-italic h3 | None | INSTRUCTIONAL |
| 18 | Same-density stacking | Intentional crescendo patterns | INSTRUCTIONAL |
| 19 | Unjustified design choices | None (meta) | INSTRUCTIONAL |
| 20 | New patterns without tension | None (meta) | INSTRUCTIONAL |
| 21 | Full viewport of void | Single breathing zone OK | INSTRUCTIONAL + STRUCTURAL (`--space-max-zone: 96px`) |
| 22 | Visual interest concentrated in first third | Short pages exempt | INSTRUCTIONAL |

---

## 10. DENSITY PATTERNS (4 Page-Scale Strategies)

Source: SKILL.md Phase 0D "Middle-tier pages"

| Pattern | Content Type | Rhythm | Classification |
|---------|-------------|--------|----------------|
| **CRESCENDO** | Tutorial, step-by-step guide | Sparse intro -> dense peak -> sparse resolution | INSTRUCTIONAL (text description) |
| **F-PATTERN** | Reference, lookup, API docs | Dense left column (nav), sparse right (content) | INSTRUCTIONAL |
| **BENTO** | Overview, dashboard, card gallery | Grid-based modular sections at varying densities | INSTRUCTIONAL |
| **PULSE** | Narrative, story arc, case study | Rhythmic dense-sparse-dense alternation | INSTRUCTIONAL |

- Pattern selection for Middle tier: **INSTRUCTIONAL** -- content-type-to-pattern lookup table.
- Pattern expression through mechanisms: **TACIT** -- translating "CRESCENDO" into specific CSS values requires judgment.

---

## 11. RESTRAINT PROTOCOL

Source: mechanism-catalog.md "Restraint Protocol" section (lines 1029-1067)

| Rule | What It Enforces | Value | Classification |
|------|-----------------|-------|----------------|
| **Mechanism density cap** | No viewport section > 4 simultaneous visible mechanisms | 4 max per viewport | INSTRUCTIONAL |
| **Distribution requirement** | Every third of page (0-33%, 33-66%, 66-100%) has >= 2 mechanisms | 2 min per third | INSTRUCTIONAL |
| **Restraint ratio** | Document mechanisms considered AND REJECTED | Middle: no requirement; Ceiling: 3+ rejections; Flagship: 5+ | INSTRUCTIONAL |

Classification: All **INSTRUCTIONAL** -- no code enforces mechanism distribution. Builder must self-verify.

---

## 12. PERCEPTUAL GUARDRAILS (Non-Negotiable Minimums)

Source: SKILL.md Phase 4.0

| Guardrail | Value | Override | Classification |
|-----------|-------|---------|----------------|
| Container width at 1440px | 940-960px | NEVER | INSTRUCTIONAL (binary rule, highest compliance) |
| Min horizontal padding | 32px per side | NEVER | INSTRUCTIONAL |
| Min text column width | 220px | NEVER | INSTRUCTIONAL |
| Optimal line length | 45-80 CPL | NEVER | INSTRUCTIONAL |
| Heading spacing ratio | space-above / space-below >= 1.5 | NEVER | INSTRUCTIONAL |
| Min label-to-heading gap | 16px | NEVER | INSTRUCTIONAL |
| Min body line-height | 1.5 | NEVER | INSTRUCTIONAL |
| Min section breathing zone | 48px | NEVER | INSTRUCTIONAL |
| Compression ratio ceiling | Deepest >= 40% of shallowest | NEVER | INSTRUCTIONAL |

**Critical Note**: ALL perceptual guardrails are INSTRUCTIONAL (text rules). None are enforced by code. The system relies on binary framing ("NEVER compromise") to achieve compliance. This is the single highest-risk classification gap -- guardrails that SHOULD be structural but ARE instructional.

---

## 13. SEMANTIC RULES (7 Gap-Filling Rules)

Source: `semantic-rules.md` (530 lines)

| Gap # | Decision | What It Governs | Classification |
|-------|----------|----------------|----------------|
| 1 | Info vs Note callout selection | Section-level (Info) vs inline (Note) positioning | INSTRUCTIONAL |
| 2 | Inline vs block code threshold | 1 line / 50 chars = inline; 2+ lines = block | INSTRUCTIONAL |
| 3 | Table styling (clean vs zebra) | Always clean (no zebra validated) | INSTRUCTIONAL |
| 4 | Breathing-room zone triggers | Section change + <3 sentences = breathing; certainty = sparse/dense | INSTRUCTIONAL |
| 5 | Callout semantic differentiation | 5 colors, 8 classes, Essence = serif italic | PARTIALLY STRUCTURAL (CSS classes exist) + INSTRUCTIONAL (selection) |
| 6 | Content density floors per zone | Min content per zone type (3+ paragraphs for dedicated zone) | INSTRUCTIONAL |
| 7 | Content-form fit minimums | Min content for bento (4+ items), progressive disclosure (3+ phases), etc. | INSTRUCTIONAL |

### Semantic Value Framework (3-Question Test)

| Question | What It Verifies | Classification |
|----------|-----------------|----------------|
| Q1: WHAT varies? | Property identification | STRUCTURAL (observable in CSS) |
| Q2: WHY does it vary? | Semantic justification | TACIT (requires understanding content-mechanism relationship) |
| Q3: WHY THESE specific values? | Value justification vs arbitrariness | TACIT (distinguishing semantic from arbitrary is judgment) |

---

## 14. TENSION-COMPOSITION PIPELINE (6-Phase Creative Process)

Source: SKILL.md (~1,878 lines)

| Phase | What Happens | Classification |
|-------|-------------|----------------|
| Phase 0 | Content assessment, tier routing, scope | INSTRUCTIONAL (lookup tables) |
| Phase 1 | Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + 5 extended + 5 conditional) | TACIT (asking productive questions requires intuition) |
| Phase 2 | Tension derivation (Addition Test, BECAUSE test, Richness Formula) | PARTIALLY INSTRUCTIONAL (tests are binary) + TACIT (tension identification) |
| Phase 3 | Metaphor collapse (search query, candidate scoring, 6-criterion rubric) | TACIT (the "irreducible creative step" -- finding the bridge) |
| Phase 3.5 | Metaphor lock-in gate + 6 binary rejection checks | INSTRUCTIONAL (binary checks) |
| Phase 4 | Mechanism extraction, translation grammar, coherence checking | INSTRUCTIONAL (lookup tables) + TACIT (adaptation to YOUR metaphor) |
| Phase 4.7 | Fractal consistency gate | INSTRUCTIONAL (binary gate) |
| Phase 4.7B | Landmark completeness gate | INSTRUCTIONAL (binary gate) |
| Phase 5 | Divergence verification against case studies | INSTRUCTIONAL (comparison table) |

**Key finding**: Phases 1-3 are predominantly TACIT (creative derivation). Phases 0, 3.5, 4.7, 4.7B are INSTRUCTIONAL (binary gates). Phase 4 is mixed.

---

## 15. METAPHOR QUALITY RUBRIC (6 Criteria, 18 Points)

Source: SKILL.md Step 3.5G

| Criterion | What It Measures | Score Range | Classification |
|-----------|-----------------|-------------|----------------|
| Interpretive Distance | How far metaphor is from content's own domain | 0-3 | TACIT (judging "distance" is subjective) |
| Content-Shape Fit | How well metaphor's physical shape mirrors content flow | 0-3 | TACIT |
| Structural Survival | Does metaphor survive label removal? | 0-3 | INSTRUCTIONAL (binary test: remove labels, check) |
| Perceptual Risk | Dead zones, overlabeling, monotony, responsive breakage | 0-3 | INSTRUCTIONAL (4 risk questions, scored) |
| Mechanism Diversity | How many CSS channels metaphor encourages | 0-3 | INSTRUCTIONAL (count channels) |
| Restraint Compatibility | Mechanisms per viewport | 0-3 | INSTRUCTIONAL (count per viewport) |

**Threshold**: >= 12/18 to proceed. Interpretive Distance MUST >= 2 (hard gate).

**6 Binary Rejection Checks**: R1-R6 (content vocabulary, label dependency, container width, empty transitions, uniform elements, soul violations).
- Classification: **INSTRUCTIONAL** -- binary, achieves ~100% compliance.

---

## 16. PERCEPTUAL RISK & COST ASSESSMENTS

Source: SKILL.md Steps 3.5E-3.5F

### Perceptual Risk (4 Questions)

| Question | LOW Risk | HIGH Risk | Classification |
|----------|----------|-----------|----------------|
| Transition model | Changing state | Empty space | INSTRUCTIONAL |
| Expression mode | Structural gradients | Textual labels | INSTRUCTIONAL |
| Element variety | Varied sizes | Uniform grids | INSTRUCTIONAL |
| Responsive story | Natural degradation | Forced | INSTRUCTIONAL |

### Perceptual Cost (5 Questions)

| Question | +1 Cost If YES | Classification |
|----------|---------------|----------------|
| Compression below floors? | YES | INSTRUCTIONAL |
| Container width below minimum? | YES | INSTRUCTIONAL |
| Uniform element grids? | YES | INSTRUCTIONAL |
| Transitions as empty space? | YES | INSTRUCTIONAL |
| Explicit labels over structure? | YES | INSTRUCTIONAL |

---

## 17. BUILDER WARNINGS (6 Categories)

Source: SKILL.md Appendix R6

| Warning ID | What It Prevents | Classification |
|-----------|-----------------|----------------|
| W-DEADZONE | Empty breathing zones > 48px | INSTRUCTIONAL |
| W-OVERLABEL | Metaphor vocabulary in visible labels | INSTRUCTIONAL (borders on TACIT -- recognizing overlabeling) |
| W-MONOTONY | 6+ same-shaped elements in sequence | INSTRUCTIONAL |
| W-RESPONSIVE | Responsive breakage at 768px | INSTRUCTIONAL |
| W-STATS | Metadata strip cramping at 768px | INSTRUCTIONAL |
| W-IMPLICIT | Explicit metaphor announcements | TACIT (recognizing implicit vs explicit is judgment) |

---

## 18. ANTI-GRAVITY MECHANISMS (6 Rules)

Source: `compositional-core/CLAUDE.md`

| Rule | What It Prevents | Enforcement | Classification |
|------|-----------------|-------------|----------------|
| R1 | Pre-creative library exposure | Directory separation (case-studies/ physically separate) | **STRUCTURAL** (file architecture) |
| R2 | Mechanism/metaphor conflation | Dual-file structure (grammar/ vs case-studies/) | **STRUCTURAL** (file architecture) |
| R3 | Template-following via case studies | Anti-prescription framing ("NOT A TEMPLATE" warning) | INSTRUCTIONAL |
| R5 | Phase skipping | Sequential phase rules (binary language) | INSTRUCTIONAL |
| R6 | Library pattern reproduction | Divergence mandate (convergence requires justification) | INSTRUCTIONAL |

**Structural vs Behavioral Split**:
- R1, R2: STRUCTURAL (work automatically via architecture)
- R3, R5, R6: BEHAVIORAL/INSTRUCTIONAL (require agent compliance)
- Residual protection: Structural = 70-80% if behavioral fails; Behavioral = 60-70% if structural fails.

---

## 19. TOKENS (65 CSS Custom Properties)

Source: `tokens.css` (184 lines)

### 19.1 By Mutability

| Category | Count | Mutability | Classification |
|----------|-------|-----------|----------------|
| Soul constraints | 2 | IMMUTABLE | **STRUCTURAL** (CSS enforces `--border-radius: 0`, `--box-shadow: none`) |
| Primary colors | 6 | IMMUTABLE (identity) | **STRUCTURAL** |
| Accent colors | 5 | MUTABLE (semantic flexibility) | STRUCTURAL but selection is INSTRUCTIONAL |
| Background colors | 8 | AVAILABLE (zone differentiation) | STRUCTURAL (exist) but deployment is TACIT |
| Zone colors | 3 | AVAILABLE | STRUCTURAL (exist) but assignment is TACIT |
| Text hierarchy colors | 5 | AVAILABLE | STRUCTURAL + INSTRUCTIONAL |
| Font families | 3 | IMMUTABLE (identity trinity) | **STRUCTURAL** |
| Type scale | 6+6 | MUTABLE (responsive) | STRUCTURAL |
| Spacing scale | 12+3+2 | IMMUTABLE (anchors) + AVAILABLE (aliases, maximums) | **STRUCTURAL** |
| Grid system | 1 | IMMUTABLE | **STRUCTURAL** |
| Border widths | 4 | IMMUTABLE | **STRUCTURAL** |
| Syntax highlighting | 7 | AVAILABLE | STRUCTURAL |
| Transitions | 1 | AVAILABLE | STRUCTURAL |
| Solid offset | 3 | AVAILABLE | STRUCTURAL |

**Total**: 65 tokens. Of these:
- ~21 IMMUTABLE (soul + identity + spacing anchors + grid + borders)
- ~14 MUTABLE (type scale + accent colors)
- ~30 AVAILABLE (backgrounds, zones, text hierarchy, syntax, transitions, offset)

---

## 20. CONTENT-FORM FIT RULES

Source: semantic-rules.md Gap 6 + Gap 7

| Rule | What It Enforces | Minimum | Classification |
|------|-----------------|---------|----------------|
| Zone content minimum | 3+ paragraphs OR 2+ components per dedicated zone | Binary gate | INSTRUCTIONAL |
| Zone count ceiling | Max zones by word count (<1500 = 2, 1500-3000 = 3, etc.) | Binary gate | INSTRUCTIONAL |
| Max empty viewport | No full viewport < 30% content coverage | Binary gate | INSTRUCTIONAL |
| Bento minimum | 4+ items | Binary gate | INSTRUCTIONAL |
| Progressive disclosure minimum | 3+ phases | Binary gate | INSTRUCTIONAL |
| Drop cap minimum | 3+ sentences following | Binary gate | INSTRUCTIONAL |
| Breathing zone maximum | 1-3 sentences ONLY | Binary gate | INSTRUCTIONAL |
| Form matches content test | "Is this the SIMPLEST form that serves this content?" | Judgment gate | TACIT |

---

## 21. TIER MODEL (4 Deployment Levels)

Source: SKILL.md Phase 0D, MEMORY.md

| Tier | Mechanisms | Deployment Level | Build Time | Scales | Classification |
|------|-----------|-----------------|------------|--------|----------------|
| Floor | ~5 | Component assembly | 30-45 min | Exempt | INSTRUCTIONAL (tier selection is judgment) |
| Middle | 8-10 | Individual (each independent) | 70-100 min | 2 | INSTRUCTIONAL |
| Ceiling | 12-15 | Combination (2+ reinforce same semantic) | 150-220 min | 4 | INSTRUCTIONAL + TACIT (reinforcing pairs) |
| Flagship | 16-18 | Multi-pattern (3+ patterns with transitions) | 240-400 min | 5 | TACIT (composition) |

**The Addition Test** (Track 1 vs Track 2 routing):
"Can existing components fulfill this WITHOUT transforming their meaning?"
- YES -> Track 1 (assembly)
- NO -> Track 2 (composition)

Classification: **INSTRUCTIONAL** (binary test) but the ANSWER requires TACIT judgment about "meaning transformation."

---

## CLASSIFICATION SUMMARY

### By Count

| Classification | Count of Distinct Items | Percentage |
|---------------|------------------------|-----------|
| **STRUCTURAL** | ~40 (tokens, file architecture, CSS patterns) | ~25% |
| **INSTRUCTIONAL** | ~85 (binary rules, gates, lookup tables, guidelines) | ~55% |
| **TACIT** | ~30 (creative judgment, compositional intuition, "the irreducible creative step") | ~20% |

### By Criticality

| Classification | What It Includes | Compliance Rate | Risk If Missing |
|---------------|-----------------|-----------------|-----------------|
| **STRUCTURAL** | 65 tokens, 2 anti-gravity file splits, 18 mechanism CSS patterns, soul constraints | ~100% (enforced by code) | LOW (cannot be violated without active override) |
| **INSTRUCTIONAL** | 24 prohibitions, 5 coherence rules, 12 guardrails, 6 anti-gravity behavioral rules, 4 density patterns, tier model, semantic rules, gates | ~100% for binary; ~0% for judgment | MODERATE (binary rules work; judgment rules fail) |
| **TACIT** | Anti-scale model, multi-channel coherence judgment, metaphor derivation, spatial confidence, restraint, reinforcing pair identification, content-mechanism fit | ~VARIABLE (depends on agent capability) | HIGH (this is where 4/4 vs 2.5/4 lives) |

### The Critical Gap

The system has excellent STRUCTURAL enforcement (tokens, file architecture) and excellent INSTRUCTIONAL compliance for binary rules. The gap is in TACIT intelligence:

1. **When to deploy which mechanism WHERE** (beyond per-category minimums)
2. **How to create reinforcing pairs** (beyond "at least 2 pairs")
3. **What makes a transition perceptually effective** (beyond "3 types minimum")
4. **How to distribute visual interest across scroll depth** (beyond "1 designed moment below 50%")
5. **The anti-scale model** (semantic density x restraint x spatial confidence) -- entirely tacit

These tacit capabilities are what separate CD-006 (39/40) from Flagship (1.5/4). The STRUCTURAL and INSTRUCTIONAL layers are necessary but insufficient. The TACIT layer is where compositional quality lives.

---

## APPENDIX: FULL ITEM COUNT

| Category | Items |
|----------|-------|
| Scales | 5 |
| Channels | 6 |
| Mechanisms | 18 |
| Mechanism categories | 5 |
| Application modes | 2 |
| Coherence rules | 5 core + 4 extended = 9 |
| Prohibitions | 8 absolute + 14 conditional + 2 meta = 24 |
| Density patterns | 4 |
| Tokens | 65 |
| Semantic rules | 7 gap-filling + 3-question framework |
| Perceptual guardrails | 9 |
| Zone transition types | 3 |
| Transition types (composition) | 3 (SMOOTH/BRIDGE/BREATHING) |
| Anti-gravity mechanisms | 5 (R1, R2, R3, R5, R6) |
| Builder warnings | 6 |
| Metaphor quality criteria | 6 |
| Binary rejection checks | 6 |
| Perceptual risk questions | 4 |
| Perceptual cost questions | 5 |
| Content-form fit rules | 8 |
| Tier definitions | 4 |
| Pipeline phases | 9 (0, 1, 2, 3, 3.5, 4, 4.7, 4.7B, 5) |
| **TOTAL DISTINCT ITEMS** | **~155** |

---

**END INVENTORY**
