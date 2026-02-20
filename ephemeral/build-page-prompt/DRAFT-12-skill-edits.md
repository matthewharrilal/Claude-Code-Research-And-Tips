# DRAFT-12: Skill Edit Sections of Master Execution Prompt

**Agent:** pa-auditor (Opus 4.6)
**Task:** #12
**Date:** 2026-02-19
**Sources:** 05-tc-skill-audit.md, 06-pa-skill-audit.md, TC SKILL.md (1,933 lines), PA SKILL.md (848 lines)

---

## PURPOSE

This document provides EXACT `old_string` / `new_string` Edit tool pairs for every tier removal and enrichment in both the tension-composition and perceptual-auditing skills. A fresh Claude instance executing the master prompt should be able to apply these edits mechanically using the Edit tool.

**Convention:** Each edit block shows:
- **ID:** Matching the audit report ID (R-01, E-01, etc.)
- **File:** The absolute path
- **old_string:** Exact text to find (copy-paste ready)
- **new_string:** Exact replacement text
- **Notes:** Any execution caveats

---

# SECTION A: TENSION-COMPOSITION SKILL EDITS

**File:** `~/.claude/skills/tension-composition/SKILL.md`

---

## TC REMOVAL R-01: Step 0D Tier Classification Header + Table (Lines 68-97)

**EDIT A1: Remove the entire Step 0D tier routing block and replace with ALWAYS FLAGSHIP preamble**

```
old_string:
### Step 0D: Tier Classification and Pipeline Routing

**BEFORE entering Phase 1, classify the target tier for this content.**

**Tier classification:**

| Content Signal | Tier | Route |
|---------------|------|-------|
| <200 words, API reference, config table, changelog | **Floor** | Skip Phases 1-5. Use Track 1 (component assembly). |
| Tutorial, guide, overview, comparison, narrative (prose-dominant) | **Middle** | Skip Phases 1-3. Go to Phase 4.0 with PATTERN selection. |
| Genuine structural tension (Addition Test = NO), prose-dominant | **Ceiling** | Full pipeline (Phases 1-7). |
| Anchor content, design system showcase, philosophical deep-dive | **Flagship** | Full pipeline + multi-pass audit. |

**CRITICAL CAVEAT — Mechanism Count as Proxy, Not Target:**

The mechanism counts above (5, 8-10, 12-15, 16-18) describe what each tier NATURALLY produces when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

**Provenance:** These counts were BACKWARD-ENGINEERED from existing pages, not invented as targets:
- Variant B (Phase D best, built under "sample 2-4"): deployed 5 mechanisms across 2 categories
- OD-004 (geological confidence, showcase): deployed ~12-15 across all 5 categories
- CD-006 (combination pilot, 39/40 score): deployed ~16-18 across all 5 categories
- DD-006 (fractal, crown jewel): deployed ~16+ mechanisms

The counts describe NATURAL LANDING ZONES for each level of effort:
- 30-45 min component assembly → ~5 mechanisms
- 70-100 min individual mechanism selection across all categories → ~8-10
- 150-220 min metaphor-driven combination → ~12-15
- 240-400 min multi-pass audit full pipeline → ~16-18

The per-category minimum (1+ per each of 5 families) ensures vocabulary BREADTH across all expressive dimensions.
```

```
new_string:
### Step 0D: Pipeline Constants (ALWAYS FLAGSHIP)

**Every page runs the full pipeline (Phases 1-7). No tier routing. No phase skipping.**

**Mechanism Count as Proxy, Not Target:**

Mechanism counts describe what NATURALLY emerges when content-mechanism fit is optimized. They are NOT targets to hit. Peak richness occurs at maximum content-mechanism fit, not maximum technique count. A page with 6 perfectly-deployed mechanisms that reinforce a coherent pattern is richer than a page with 10 mechanisms where 3 feel forced.

**Deployment level:** Multi-pattern COMPOSITION -- 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters with BREATHING/SMOOTH/BRIDGE transitions. This count is a natural landing zone for full-pipeline builds (150-400 min), not a target.

The per-category minimum (1+ per each of 5 families) ensures vocabulary BREADTH across all expressive dimensions.
```

---

## TC REMOVAL R-02: Middle-Tier Skip Instructions (Lines 99-126)

**EDIT A2: Remove the Middle-tier bypass block entirely (pattern table relocated by E-05)**

```
old_string:
**Middle-tier validation evidence:** The Middle experiment (SYSTEM content, F-PATTERN, single-pass) deployed 12 mechanisms with per-category distribution S:1, H:3, C:4, D:2, N:3. This achieved PA-05 DESIGNED (4/4 sub-criteria), demonstrating that per-category deployment at Middle tier crosses the "designed vs formatted" threshold without requiring metaphor derivation.

**For Middle-tier pages (SKIP Phases 1-3):**

You do NOT derive a metaphor. Instead, select a DENSITY PATTERN.

**Patterns vs Mechanisms (important distinction):** Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) are page-scale spatial organization strategies -- the "skeleton" that determines how information density flows across the page. Mechanisms (the 18 individual CSS techniques in the catalog) are the "flesh" deployed within that skeleton. Patterns determine overall flow; mechanisms implement that flow through concrete CSS.

| Content Type | Pattern | Why |
|--------------|---------|-----|
| Tutorial, step-by-step guide | **CRESCENDO** | Density builds progressively (sparse intro → dense peak → sparse resolution) |
| Reference, lookup, API docs | **F-PATTERN** | Dense left column (navigation), sparse right (content) |
| Overview, dashboard, card gallery | **BENTO** | Grid-based modular sections at varying densities |
| Narrative, story arc, case study | **PULSE** | Rhythmic dense-sparse-dense alternation |

**If content is HYBRID** (e.g., tutorial with embedded reference), select the DOMINANT pattern. Hybrid pattern composition is a Ceiling-tier capability, not Middle-tier.

**Middle-tier output:**
```
TIER: Middle
PATTERN: [selected pattern]
JUSTIFICATION: [why this pattern fits this content]
SKIP: Phases 1-3 (no metaphor derivation)
NEXT: Phase 4.0 (mechanism extraction with selected pattern)
```

**WHY Middle skips Phases 1-3:** Middle uses content-structure mapping (content feature -> mechanism capability, direct mapping) instead of Ceiling's metaphor-driven selection (metaphor -> shared semantic dimension -> multiple mechanisms). Both tiers use the same 18-mechanism catalog. The difference is selection logic, not available tools. Middle maps "this content has hierarchy" directly to "use border-weight (#1)"; Ceiling maps "geological strata have consolidation" to "border-weight + spacing + backgrounds all encode depth together."
```

```
new_string:
```

**NOTE:** This is a DELETE (empty new_string). The density pattern table is relocated to Phase 4.1 by Enrichment E-05. The Middle-tier validation evidence, skip instructions, output template, and explanation are all removed under ALWAYS FLAGSHIP.

---

## TC REMOVAL R-03: Ceiling/Flagship Routing + Degradation Protocol (Lines 127-145)

**EDIT A3: Remove conditional routing, degradation protocol, and tier model caveats**

```
old_string:
**Ceiling/Flagship tier:** Proceed to Phase 1 (full pipeline).

**Graceful degradation protocol:** If degrading from higher tier, MANDATORY DOCUMENTATION (3 items):
(a) What metaphor/pattern was attempted?
(b) Why was it abandoned?
(c) What would make the higher tier viable for this content?

**The tier model is a validated hypothesis.** The Middle-tier experiment tests whether pattern-based deployment (8-10 mechanisms, no metaphor) reaches the engagement threshold. Until validated, treat Middle tier specs as best hypothesis, not proven fact.

**Critical principle:** Middle-tier richness comes from PATTERN DEPLOYMENT (8-10 mechanisms across 5 categories), not metaphor. The tier model was validated through richness research showing ~60-85% of the richness gap is addressable through mechanism deployment alone.

**Tier distinction is NOT just count -- it's deployment level:**
- **Floor:** Component assembly only (0 custom mechanisms, Track 1 templates)
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (2-3 mechanisms encode SAME semantic)
- **Flagship:** Multi-pattern COMPOSITION (3+ density patterns with typed transitions)

**These deployment levels are validated hypotheses, not proven specifications.** The tier model is calibrated from showcase pages and Phase D validation, but it remains a bet. The Middle-tier experiment tests whether individual mechanism deployment reaches the engagement threshold. If it fails, the tier model requires revision.
```

```
new_string:
**Proceed to Phase 1 (full pipeline).**
```

---

## TC REMOVAL R-04: Step 0D-CEILING Context Box (Lines 148-165)

**EDIT A4: Remove the conditional wrapper, promote content to universal rules**

```
old_string:
### Step 0D-CEILING: Ceiling Tier Context Box

**If routed to Ceiling tier (Addition Test = NO), read this context before proceeding:**

You are building for content with GENUINE structural tension — components cannot fulfill reader needs without transformation. This means:

1. **Metaphor is mandatory:** You MUST derive a metaphor through Phases 1-3. No pattern shortcuts.
2. **Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+):** Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation).
3. **Reinforcing pairs required:** At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels (e.g., border-weight + zone backgrounds both encode depth).
4. **Multi-channel coherence:** Multiple mechanisms work TOGETHER through metaphor, expressing shared meaning through different CSS properties.
5. **4-scale fractal coherence:** Pattern visible at Navigation + Page + Section + Component scales (not just Page + Component like Middle).
6. **Build time: 150-220 minutes (single-pass) or 240-400 minutes (multi-pass):** Ceiling takes 2-3x Middle build time. This is expected and appropriate.
7. **Container width 940-960px is NON-NEGOTIABLE:** Metaphor NEVER overrides this. Express any metaphor-driven narrowing through INTERNAL padding, never by reducing container width below 940px.

**CRITICAL:** Ceiling is NOT "more mechanisms than Middle." Ceiling is "mechanisms work TOGETHER through metaphor, not independently." The combination creates coherence, not just coverage. Natural mechanism count lands at 12-15, but count is a BYPRODUCT of multi-channel encoding, not a target.

**Metaphor shapes internal experience; guardrails preserve external readability.** The 940-960px container, 45-80 CPL, 1.5 line-height, and breathing zone minimums are NEVER compromised for metaphor fidelity.
```

```
new_string:
### Universal Compositional Requirements

Every page built through this pipeline MUST meet these requirements:

1. **Metaphor is mandatory** (when Addition Test = NO): You MUST derive a metaphor through Phases 1-3. No shortcuts.
2. **Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+):** Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation).
3. **Reinforcing pairs required:** At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels (e.g., border-weight + zone backgrounds both encode depth).
4. **Multi-channel coherence:** >=3 CSS channels shifting together at zone boundaries, encoding the SAME semantic direction.
5. **5-scale fractal coherence:** Pattern visible at Navigation + Page + Section + Component + Character scales.
6. **Build time: 150-400 minutes:** Full pipeline. This is expected and appropriate.
7. **Container width 940-960px is NON-NEGOTIABLE:** Metaphor NEVER overrides this. Express any metaphor-driven narrowing through INTERNAL padding, never by reducing container width below 940px.

**CRITICAL:** Compositional quality is "mechanisms work TOGETHER through metaphor, not independently." The combination creates coherence, not just coverage. Natural mechanism count lands at 16-18, but count is a BYPRODUCT of multi-channel encoding, not a target.

**Metaphor shapes internal experience; guardrails preserve external readability.** The 940-960px container, 45-80 CPL, 1.5 line-height, and breathing zone minimums are NEVER compromised for metaphor fidelity.
```

---

## TC REMOVAL R-05: Metaphor Scoring Rubric Tier Qualifier (Line 705)

**EDIT A5: Remove "Ceiling+ Tier" qualifier from rubric header**

```
old_string:
### Step 3.5G -- Metaphor Scoring Rubric (MANDATORY for Ceiling+ Tier)
```

```
new_string:
### Step 3.5G -- Metaphor Scoring Rubric (MANDATORY)
```

---

## TC REMOVAL R-06: Phase 4 Tier-Specific Deployment Levels (Lines 868-872)

**EDIT A6: Remove non-Flagship deployment levels, keep Flagship as universal**

```
old_string:
**Tier-specific deployment levels:**
- **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
- **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
- **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
- **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions
```

```
new_string:
**Deployment level:** 16-18 mechanisms across all 5 categories, 3+ reinforcing clusters with BREATHING/SMOOTH/BRIDGE transitions between major zones.
```

---

## TC REMOVAL R-07a: Per-Category Deployment Tier Qualifier (Line 1078)

**EDIT A7a: Remove "for Middle-tier+" qualifier**

```
old_string:
**Per-category mechanism deployment (MANDATORY for Middle-tier+):**
```

```
new_string:
**Per-category mechanism deployment (MANDATORY):**
```

---

## TC REMOVAL R-07b: Per-Category Natural Landing Tiers (Lines 1098-1102)

**EDIT A7b: Remove Floor/Middle/Ceiling rows from natural landing table**

```
old_string:
**Natural landing by tier:**
- Floor: 5 mechanisms (component assembly, no per-category requirement)
- Middle: 8-12 mechanisms across all 5 categories
- Ceiling: 12-15 mechanisms across all 5 categories + 2+ reinforcing pairs
- Flagship: 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters
```

```
new_string:
**Natural landing:** 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters. Count emerges from breadth and multi-channel encoding, not from number-targeting.
```

---

## TC REMOVAL R-08: Fractal Gate Tier-Calibrated Requirements (Lines 1432-1441)

**EDIT A8: Remove Floor/Middle/Ceiling rows, keep Flagship as universal, remove Middle example**

```
old_string:
**Tier-calibrated requirements:**
- **Floor:** EXEMPT (component assembly, no custom pattern)
- **Middle:** 2 scales minimum (Page + Component)
- **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
- **Flagship:** 5 scales required (all scales)

**Concrete Middle-tier example (CRESCENDO, 2 scales):**
- **Page scale:** Overall section sequence follows density pattern. Sections progress from sparse to dense: `section-intro { padding: 64px 24px }` -> `section-build { padding: 32px 24px }` -> `section-peak { padding: 16px 24px }`.
- **Component scale:** Individual components mirror the same direction. Component headers are sparser than bodies: `.component-label { font-size: 0.75rem; letter-spacing: 0.1em }` (sparse/light) while `.component-body { font-size: 1rem; line-height: 1.5 }` (dense/substantial).
- Both scales say "sparse-to-dense" -- that is fractal coherence.
```

```
new_string:
**Requirement:** 5 scales required (all scales: Navigation, Page, Section, Component, Character). Pattern direction MUST be consistent across all 5 rows.
```

---

## TC REMOVAL R-09: Landmark Gate Tier-Calibrated Requirements (Lines 1480-1525)

**EDIT A9a: Remove Floor/Middle/Ceiling rows from landmark tier requirements**

```
old_string:
**Tier-calibrated requirements:**
- **Floor (Track 1 assembly):** Header + main content required. Footer optional.
- **Middle-tier+:** Header + main content + footer ALL required.
- **Ceiling/Flagship:** Header + main + footer + transition grammar between ALL landmarks.
```

```
new_string:
**Requirement:** Header + main content + footer + transition grammar between ALL landmarks. All three landmarks are MANDATORY.
```

---

**EDIT A9b: Relabel Middle-tier pass example as universal**

```
old_string:
**PASS (Middle tier):**
```

```
new_string:
**PASS example:**
```

---

**EDIT A9c: Remove Middle-tier framing from fail example**

```
old_string:
FOOTER: NO — page just stops after last content section
Result: FAIL — Middle+ tier requires footer for narrative closure
```

```
new_string:
FOOTER: NO — page just stops after last content section
Result: FAIL — footer is required for narrative closure
```

---

**EDIT A9d: Remove Middle-tier reference from verification protocol**

```
old_string:
4. For Middle+ tier: footer MUST mirror header OR provide equivalent visual weight
```

```
new_string:
4. Footer MUST mirror header OR provide equivalent visual weight
```

---

## TC REMOVAL R-10: Tokenization Self-Check Tier References

**EDIT A10a: Make tokenization mandatory (Line 1547)**

```
old_string:
### Phase 4.9: Tokenization Self-Check (Recommended for Middle-tier+)
```

```
new_string:
### Phase 4.9: Tokenization Self-Check (MANDATORY)
```

---

**EDIT A10b: Remove optional/ship-at-lower language (Line 1618)**

```
old_string:
**NOTE:** This phase is OPTIONAL but RECOMMENDED. Middle-tier can ship at 66.5%. Ceiling-tier should target 80%+.
```

```
new_string:
**Target: >= 80% token compliance.** If compliance is 60-80%, document rationale for each raw value.
```

---

## TC REMOVAL R-11: Scattered Middle/Floor/Ceiling References

**EDIT A11a: Remove "for Middle-tier+" from rhythm variation (approximate line 1303)**

```
old_string:
Step 4.2C: Rhythm Variation Requirement (MANDATORY for Middle-tier+)
```

```
new_string:
Step 4.2C: Rhythm Variation Requirement (MANDATORY)
```

**NOTE:** Agent executing this edit should search for this exact string. If line number has shifted due to prior edits, the string match will still work.

---

## TC ENRICHMENT E-01: Multi-Coherence Binding Rules

**EDIT A-E01: Add multi-coherence binding rules after Phase 4.3 coherence checking**

The agent should find the end of the existing Phase 4.3 coherence rules and INSERT this block after them. The insertion point is after Rule C-5 (the last coherence rule before Phase 4.4 or 4.5).

**Search for this anchor text to find the insertion point:**

```
old_string:
These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality — both must pass.
```

**NOTE:** This anchor is in the PA skill, not TC skill. For TC, the enrichment goes after the Phase 4.3 coherence section. The executing agent should find the last coherence rule in Phase 4.3 of the TC skill and append after it. Since exact anchor text varies, the agent should read Phase 4.3 and find the appropriate insertion point.

**Content to INSERT in TC SKILL.md, Phase 4.3, after the last coherence rule:**

```markdown
### Multi-Coherence Binding Rules (MANDATORY)

Multi-coherence = simultaneous shifting of >=3 CSS channels at a single zone boundary, where ALL channels encode the SAME semantic direction.

**R-MC-01: Transition Table is a Required Deliverable**
Before writing CSS, produce a transition table mapping every major zone boundary to channel shifts. Format:

| Boundary | Ch1 (Chromatic) | Ch2 (Typographic) | Ch3 (Spatial) | Ch4 (Structural) | Direction |
|----------|----------------|-------------------|---------------|-------------------|-----------|
| Z1->Z2   | bg delta (>=15 RGB) | font-size delta (>=1px) | padding delta (>=8px) | border delta (>=1px) | [DEEPENING/OPENING/RESOLVING] |

**R-MC-02: Minimum 3 Channels Per Zone Boundary**
At every zone boundary (not every section boundary), >=3 of 6 channels must shift. Section boundaries within a zone can shift 1-2 channels (gradual progression). Zone boundaries MUST shift >=3.

**R-MC-03: Perceptual Thresholds for Channel Counting**
A channel shift only "counts" if it meets these minimums:
- Chromatic: >=15 RGB points between adjacent zone backgrounds
- Typographic: >=1px font-size OR >=0.1 line-height OR >=0.01em letter-spacing
- Spatial: >=8px padding/margin delta
- Structural: >=1px border-width delta OR border appears/disappears
- Density: >=1 component count delta per viewport
- Rhythmic: Different transition type (smooth/bridge/breathing)

**R-MC-04: Direction Agreement**
At each zone boundary, all shifting channels must encode the SAME semantic direction. Declare the direction in the transition table. Post-build: verify CSS values match declared direction.

**R-MC-05: No Contradiction Across Channels**
If background darkens (heavier), spacing MUST NOT loosen (lighter) at the same boundary. Within-zone contradictions are acceptable; zone-level contradictions are failures.

**R-MC-06: Zone Count**
A page with 8-12 sections: 2-4 major zones, producing 2-4 zone boundaries. 3 zones with 2 boundaries is the sweet spot (Orient / Deepen / Synthesize).
```

---

## TC ENRICHMENT E-02: Fractal Echo Protocol with 5-Scale Table

**EDIT A-E02: Replace existing fractal gate content at Phase 4.7**

This replaces the fractal gate after the tier-calibrated requirements have been simplified by R-08. The executing agent should find Phase 4.7 and replace the gate content.

**The content from R-08's new_string ("Requirement: 5 scales required...") plus the existing scale coverage table and passing/failing criteria should be REPLACED with:**

```
old_string:
**Requirement:** 5 scales required (all scales: Navigation, Page, Section, Component, Character). Pattern direction MUST be consistent across all 5 rows.

**Passing criteria:**
- Table complete with ALL required scales for tier
- SAME pattern direction at each scale (e.g., if page-level uses sparse-to-dense, section-level MUST also use sparse-to-dense)
- CSS evidence provided for each scale
- Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

**Failing criteria (any of):**
- Pattern reverses direction between scales
- Pattern exists at fewer than tier minimum scales
```

```
new_string:
**5 Binary Rules:**

1. **BOTTOM-UP CONSTRUCTION:** Build scales in order: Navigation (1) -> Page (2) -> Section (3) -> Component (4) -> Character (5). Never implement Scale N+1 before verifying Scale N is perceptible.

2. **FRACTAL ECHO TABLE (MANDATORY deliverable):**

| Scale | Pattern Expression | Primary CSS | Min Threshold | Verified? |
|-------|-------------------|-------------|---------------|-----------|
| Navigation | [How header/nav echoes principle] | [Exact CSS] | Padding >= 48px | [ ] |
| Page | [How section arc echoes] | [Exact CSS: zone bgs, padding arc] | BG delta >= 15 RGB | [ ] |
| Section | [How within-section rhythm echoes] | [Exact CSS: grids, margins] | >= 2 types/section | [ ] |
| Component | [How component DNA echoes] | [Exact CSS: .dense/.sparse] | Padding delta >= 4px | [ ] |
| Character | [How text styling echoes] | [Exact CSS: per-zone tracking] | Tracking delta >= 0.02em | [ ] |

Pattern direction MUST be consistent across all 5 rows.

3. **DEPENDENCY VERIFICATION:** After implementing Page scale, squint test (scroll top-to-bottom). If you cannot feel the arc, FIX Page scale before proceeding. Character scale without perceptible Page scale is WASTE.

4. **PARAMETRIC VARIATION:** Components MUST NOT be identical regardless of page zone. Define at minimum `.component.dense` and `.component.sparse` variants with >= 4px padding delta.

5. **3-SCALE MINIMUM for STRONG:** Navigation + Page + Component must ALL be STRONG (pass perceptual verification). Section and Character are bonus layers. 3 strong beats 5 weak.

**CONSISTENCY CHECK:** Does every row describe the SAME named principle? If NO, metaphor is not fractal.

**Failing criteria (any of):**
- Pattern reverses direction between scales
- Pattern exists at fewer than 5 scales
- Any row lacks CSS evidence
- Pattern is decorative, not structural
```

**NOTE:** The exact old_string above assumes R-08 has already been applied. If executing edits in sequence, this is correct. If the agent cannot find the exact old_string (because the surrounding context differs), search for "Passing criteria:" and "Failing criteria:" near the fractal gate to locate the replacement zone.

---

## TC ENRICHMENT E-03: Transition Grammar (3 Types with CSS)

**EDIT A-E03: Append transition types after the existing transition lookup table**

The executing agent should find the transition grammar section (Phase 4.6) and append this content after the existing transition lookup table. Search for "Phase 4.6" or the transition type table.

**Content to APPEND after the existing transition lookup table in Phase 4.6:**

```markdown
**Transition Types: Semantic Basis + CSS Values**

| Type | Gap | Border | Semantic | When |
|------|-----|--------|----------|------|
| **SMOOTH** | 48px margin | 1px solid var(--color-border) | Same-axis continuation. Low cognitive shift. | Adjacent sections with same density pattern. |
| **BRIDGE** | 64px margin | Background shift to var(--color-zone-breathing) + 32px padding + prose text | Cross-axis shift with context. Reader needs orientation. | Switching density patterns (F->Bento, Z->Spiral). |
| **BREATHING** | 80px margin | 3px solid var(--color-border) | Major axis shift. Full cognitive reset. | Maximum-distance pattern changes (Spiral->Z, Act breaks). |

**Multi-coherence at transitions:** The transition type IS itself a multi-coherence event. A BREATHING transition shifts spatial (80px gap), structural (3px border vs 1px), and rhythmic (pacing resets) channels simultaneously. This is intentional -- transitions ARE boundaries, so they MUST participate in the multi-coherence protocol.
```

**NOTE:** This is an APPEND, not a replacement. The agent should find the end of the existing Phase 4.6 transition content and add this block.

---

## TC ENRICHMENT E-04: Anti-Scale Model Operationalization

**EDIT A-E04: Add anti-scale model as Phase 4.0A before Phase 4.0 guardrails**

The executing agent should find "Phase 4.0: Perceptual Guardrails" and INSERT this new section BEFORE it.

**Search for this anchor:**

```
old_string:
### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)
```

```
new_string:
### Phase 4.0A: The Anti-Scale Model (Governing Evaluation Function)

**Every CSS decision you make is evaluated by this formula:**

```
RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE
```

**This is MULTIPLICATIVE. Zero in any factor = zero richness regardless of others.**

- **DENSITY:** Every CSS rule must be perceptible at 100% zoom. Zero waste. >= 2 component types per viewport region. If commenting out a CSS rule causes no visible change, DELETE IT.
- **RESTRAINT:** >= 3 catalog mechanisms deliberately NOT deployed (document in comments). No component type > 35% of instances. Events (drop caps, breathing transitions, grids) are powerful BECAUSE they are rare.
- **CONFIDENCE:** >= 3 distinct grid topologies. 3-tier border system in active use (1/3/4px). >= 5 distinct font-size values. Prose max-width < 80% of container.

**The Flagship failure:** 22% of CSS budget (227 lines) spent on imperceptible micro-typography (letter-spacing 0.001-0.01em). This is ZERO density (imperceptible), ZERO restraint (everywhere), ZERO confidence (timid values). All three factors at zero.

**Self-check after each section:** Comment out your CSS line by line. If removing a rule causes no visible change at 100% zoom, delete it permanently and use the freed budget on something perceptible.

### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)
```

---

## TC ENRICHMENT E-05: Compositional Intelligence Stack Integration + Density Pattern Relocation

**EDIT A-E05: Replace Phase 4 header with stack integration preamble**

```
old_string:
## Phase 4: Compositional Layout Generation
```

```
new_string:
## Phase 4: Compositional Layout Generation

**Everything in Phase 4 connects through a compositional intelligence stack:**

| Layer | What It Asks | Where in Phase 4 |
|-------|-------------|-------------------|
| L1: Perception Thresholds | Can the reader SEE your decisions? | Phase 4.0 guardrails |
| L2: Fractal Scales | Does the pattern appear at all 5 zoom levels? | Phase 4.7 fractal gate |
| L3/L4: Channels + Multi-Coherence | Do 3+ CSS properties shift together at boundaries? | Phase 4.3 coherence + multi-coherence rules |
| L5: Anti-Scale Model | Is richness = density x restraint x confidence? | Phase 4.0A anti-scale model |

**Build boundary-by-boundary, not channel-by-channel.** At each zone boundary, write ALL channels simultaneously (background + typography + spacing + borders). NOT "all backgrounds first, then all borders." The transition table forces this simultaneous thinking.

**Density Patterns (spatial organization vocabulary):**

These patterns describe page-scale density flow. The metaphor SELECTS the pattern; the pattern does not replace the metaphor.

| Pattern | Density Flow | Best When Metaphor Implies |
|---------|-------------|---------------------------|
| CRESCENDO | Sparse -> dense -> resolved | Progressive deepening (geological, archaeological) |
| F-PATTERN | Dense left spine, sparse right content | Hierarchical navigation (editorial, reference) |
| BENTO | Grid-based modular density variation | Parallel independent items (catalog, dashboard) |
| PULSE | Dense-sparse-dense alternation | Rhythmic investigation (Q&A, dialogue, dialectic) |

The metaphor determines WHICH pattern; the content determines WHERE density peaks and troughs occur.
```

---

## TC ENRICHMENT E-06: Telescope Distillate (Phase 5 Output A)

**EDIT A-E06: Add telescope distillate specification to Phase 5**

The executing agent should find "## Phase 5: Output" and the description of Output A, then replace or augment it.

```
old_string:
## Phase 5: Output

Generate TWO outputs:
```

```
new_string:
## Phase 5: Output

Generate TWO outputs:

### Output A: Conventions Brief (Telescope Distillate, ~60-80 lines)

The planner distills the full pipeline output into a conventions brief for the builder:

**Section 1: Content Direction (~15 lines)**
- 3-5 highest-yield axis results (one sentence each: "Reader needs to [VERB] [WHAT] because [CONTENT PROPERTY]")
- Primary tension statement
- Resolution direction (metaphor name + 1-sentence rationale)

**Section 2: Zone Semantic Map (~10 lines)**
- Each zone named with semantic role + progression direction
- Direction principle in one sentence

**Section 3: Core Principle (~5 lines)**
- What makes this page rich (1 sentence)
- What was rejected and why (1 sentence about restraint)
- Squint test target (what the page looks like from 10 feet away)

**Section 4: CSS Domain Extrapolation (~30 lines)**
- For each of 6 CSS domains: progression principle + extrapolation for unstated decisions
- Format: `[Value]: [token] // [zone name] -- [1-line reason]`

**Volume ceiling: 80 lines.** If the brief exceeds 80 lines, compress. The builder holds telescope + microscope simultaneously ONLY at low volume (<200 lines total input).
```

---

# SECTION B: PERCEPTUAL-AUDITING SKILL EDITS

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md`

---

## PA REMOVAL 1: PA-05c "Ceiling+ only" qualifier (Line 105)

**EDIT B1a:**

```
old_string:
   **PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately for Ceiling+ audits):**
```

```
new_string:
   **PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately):**
```

---

## PA REMOVAL 1b: PA-05c Scoring qualifier (Line 122)

**EDIT B1b:**

```
old_string:
   **PA-05c Scoring (Ceiling+ only):** All THREE sub-dimensions must PASS for PA-05c to PASS. If any single sub-dimension FAILS, PA-05c = FAIL, and the failing sub-dimension(s) must be named in the finding. This enables precise diagnosis of WHICH proportion dimension needs fixing.
```

```
new_string:
   **PA-05c Scoring:** All THREE sub-dimensions must PASS for PA-05c to PASS. If any single sub-dimension FAILS, PA-05c = FAIL, and the failing sub-dimension(s) must be named in the finding. This enables precise diagnosis of WHICH proportion dimension needs fixing.
```

---

## PA REMOVAL 2: PA-09 Severity Calibration qualifier (Line 153)

**EDIT B2:**

```
old_string:
**PA-09 Severity Calibration (MANDATORY for Ceiling+ audits):**
```

```
new_string:
**PA-09 Severity Calibration (MANDATORY):**
```

---

## PA REMOVAL 3: PA-17/PA-41 Ceiling+ Tier Elevation Block (Lines 202-214)

**EDIT B3: Replace the entire tier elevation block with universal equivalence**

```
old_string:
**⚠ CEILING+ TIER ELEVATION (MANDATORY, NOT ADVISORY):**

PA-17 and PA-41 are formally elevated to **Tier 1 equivalent** for all Ceiling-tier and above audits. This is a MANDATORY tier change, not a suggestion.

**For Ceiling+ audits (Ceiling, Flagship):**
- PA-17 (rhythm) and PA-41 (repetition monotony) are CRITICAL questions
- FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question (PA-01 through PA-05)
- All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
- Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

**Provenance:** Middle-tier experiment's highest-leverage perceptual finding was "metronomic rather than musical" rhythm — spacing was consistent but not varied. PA-17 correctly identified this as arrhythmic, and PA-41 caught the monotony. Ceiling experiment's whitespace void (9/9 auditors) was a SPATIAL failure, but the rhythm failure compounded it — identical transitions repeated without variation.

**Binary enforcement:** If auditing a Ceiling+ page and PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.
```

```
new_string:
**PA-17 AND PA-41: TIER 1 EQUIVALENT (MANDATORY)**

PA-17 (rhythm) and PA-41 (repetition monotony) are **Tier 1 equivalent** -- equally critical as PA-01 through PA-05.

- FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question
- All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
- Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

**Binary enforcement:** If PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.

**Provenance:** Middle-tier experiment's highest-leverage perceptual finding was "metronomic rather than musical" rhythm. PA-17 correctly identified this as arrhythmic, and PA-41 caught the monotony.
```

---

## PA REMOVAL 4: Tier 4 "Ceiling+ Only" Label (Line 337)

**EDIT B4:**

```
old_string:
### Tier 4: Void Prevention (Ceiling+ Only — MANDATORY)
```

```
new_string:
### Tier 4: Void Prevention (MANDATORY)
```

---

## PA CROSS-REF UPDATE 1: Skill header question count (Line 7)

**EDIT B-XR1:**

```
old_string:
**This skill defines success criteria (48 PA questions + quantitative guardrails).**
```

```
new_string:
**This skill defines success criteria (56 PA questions + quantitative guardrails).**
```

---

## PA CROSS-REF UPDATE 2: Mode 4 question count (Line 482)

**EDIT B-XR2:**

```
old_string:
**What:** All 48 questions at 1440px, 768px, and 1024px. Scroll-through MANDATORY.
```

```
new_string:
**What:** All 56 questions (48 standard + 8 Tier 5) at 1440px, 768px, and 1024px. Scroll-through MANDATORY.
```

---

## PA ENRICHMENT 1: Tier 5 Compositional Depth Questions (PA-60 through PA-67)

**EDIT B-E01: Insert Tier 5 section after Tier 4 (after line 365, before Quantitative Guardrails)**

```
old_string:
---

## QUANTITATIVE GUARDRAILS
```

```
new_string:
### Tier 5: Compositional Depth (MANDATORY)

**Provenance:** PA-05's 4 binary sub-criteria detect whether a page crosses the "designed" threshold (vocabulary fluency). Tier 5 detects compositional depth ABOVE that threshold -- the difference between "mechanisms deployed correctly" and "mechanisms in conversation." Under ALWAYS FLAGSHIP, Tier 5 is evaluated for every Mode 4 audit.

**Epistemic status:** These questions and their thresholds are INITIAL HYPOTHESES -- derived from the compositional intelligence stack (scales, channels, multi-coherence, anti-scale model), not from observed Flagship artifacts. The first experiment that reaches PA-05 >= 3.5 is calibration data. Thresholds may need adjustment.

**Compositional Depth Questions:**

| ID | Stack Layer | Question | What It Detects |
|----|-------------|----------|-----------------|
| **PA-60** | Multi-Coherence | Can you identify at least 3 distinct "design moments" -- places where the visual treatment does something unique that it does not repeat elsewhere on the page? Point to each. | Design moment density: unique combinations at boundaries |
| **PA-61** | Channel Independence | Do different visual properties (weight, color, spacing, type) seem to have their own independent rhythms, or does everything shift at the same time? | Multi-voice composition vs uniform coherence |
| **PA-62** | Transition Variation | Find a section transition. Count how many visual properties change simultaneously. Is the result dramatic (3+ shifts) or quiet (1 shift)? Are there BOTH kinds? | Dynamic range of transitions |
| **PA-63** | Fractal Coherence | Zoom into one component (a card, callout, table). Does its internal design echo the page's overall design language at a smaller scale? Then zoom back out -- is that relationship deliberate? | Fractal self-similarity across scales |
| **PA-64** | Restraint | Is there any section that is DELIBERATELY plain -- simpler than surrounding sections in a way that makes the surrounding richness more noticeable? | Designed simplicity vs default absence |
| **PA-65** | Compositional Voice | If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts? | Multi-voice detection: ensemble = Flagship; choir = Middle |
| **PA-66** | Negative Space | Look at the empty spaces between sections. Are they all the same "flavor" of emptiness, or do different gaps feel different from each other? | Negative space as composition, not just gap |
| **PA-67** | Novelty | Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive? What specifically is novel? | Creative surprise: unexpected-yet-perfect |

**Tier 5 Scoring:**

- Each PA-60 through PA-67: **YES** (with 2-3 sentence evidence) or **NO**
- Each YES/NO MUST include specific visual evidence cited from screenshots

| YES Count | Verdict | Meaning |
|-----------|---------|---------|
| 7-8 / 8 | **COMPOSED** | Full compositional depth. All stack layers active and perceptible. |
| 5-6 / 8 | **APPROACHING** | Significant depth. Most stack layers active; 1-2 need strengthening. |
| 3-4 / 8 | **STRUCTURED** | Some compositional intelligence visible. Multiple stack layers absent. |
| 0-2 / 8 | **VOCABULARY ONLY** | Mechanisms deployed but not composed. Stack layers not engaged. |

**Combined verdict matrix (PA-05 x Tier 5):**

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template-quality) | VOCABULARY ONLY (Middle-equivalent) |
| **Tier 5: 3-4** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 5-6** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 7-8** | (impossible in practice) | (unlikely) | **COMPOSED** (Flagship target) |

**No prerequisite gate:** Tier 5 is evaluated for every Mode 4 audit regardless of PA-05 score. Even when PA-05 < 4/4, Tier 5 scores provide diagnostic value (they reveal WHICH stack layers are present even if the floor is not met).

**Restraint Evaluation Guidance (for PA-64):**

Restraint is the hardest quality to audit because absence and simplicity look identical to the untrained eye. The key distinction:

| Quality | What It Looks Like | How to Tell |
|---------|-------------------|-------------|
| **Designed restraint** | A section with fewer visual treatments than its neighbors. Clean, simple, breathing. | The surrounding sections ARE richer -- the plain section is CONTRAST. It makes the rich sections more noticeable. The simplicity feels like a CHOICE. |
| **Default absence** | A section with fewer visual treatments than its neighbors. Empty, flat, forgettable. | The surrounding sections are equally flat -- there is no contrast effect. The simplicity feels like the designer RAN OUT of ideas or time. |
| **Accidental void** | A section with almost no content and large empty space. | The void has no compositional purpose. It is not "breathing room" -- it is dead air. Nothing about it enhances the surrounding content. |

**The test:** Cover the plain section with your hand. Does removing it make the page WORSE (designed restraint -- it was serving a purpose) or BETTER (absence -- it was dead weight)?

**Tier 5 auditor assignments (Mode 4 integration):**

| Auditor | Standard Questions | Tier 5 Addition | Rationale |
|---------|-------------------|-----------------|-----------|
| **A** (Impression+Emotion) | PA-01,04,05,18,19,20,45 | **PA-65** (music analogy), **PA-67** (novelty) | Gestalt/emotional judgment |
| **B** (Readability+Typography) | PA-02,06,07,08,29 | (none) | Readability is pass/fail, not compositional |
| **C** (Spatial+Proportion) | PA-09,10,11,30,31,32,33,50,51,52,53 | **PA-64** (restraint), **PA-66** (negative space variety) | Spatial dimension |
| **D** (Flow+Pacing) | PA-12,13,34,35,36 | **PA-62** (transition variation) | Pacing dimension |
| **E** (Grid+Layout) | PA-14,15,37,38,39 | **PA-63** (fractal zoom) | Scale navigation |
| **F** (Consistency+Rhythm) | PA-16,17,40,41 | **PA-60** (design moments), **PA-61** (multi-voice) | Rhythm/coherence dimension |
| **G** (Metaphor+Ideology) | PA-42,43,44 | (none) | Already Flagship-relevant |
| **H** (Responsive) | PA-21,22,23,46,47 | (none) | Structural, not compositional |
| **I** (Adversarial) | PA-26,27,28,48 | (none) | Already probes beyond compliance |

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**

---

## QUANTITATIVE GUARDRAILS
```

---

## PA ENRICHMENT 2: Multi-Coherence Evaluation Guidance

**EDIT B-E02: Insert multi-coherence guidance after metaphor-awareness principles**

```
old_string:
These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality — both must pass.

---

## VISUAL AUDITING PROTOCOL
```

```
new_string:
These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality — both must pass.

### Multi-Coherence Evaluation (How Auditors Detect Channel Convergence)

**What multi-coherence IS:** The simultaneous shifting of >=3 visual properties at a section boundary, where ALL shifts communicate the SAME quality change (e.g., "deeper," "lighter," "more analytical"). The reader FEELS a zone change without being able to name any single cause.

**What to look for at section boundaries:**

1. **Count the shifts.** At each major boundary (where one area ends and another begins), how many things change simultaneously?
   - Background tone changes = 1 shift
   - Text size/density changes = 1 shift
   - Spacing (breathing room) changes = 1 shift
   - Borders appear/disappear/change = 1 shift
   - Content density (how much stuff per screen) changes = 1 shift
   - Visual rhythm (pacing of elements) changes = 1 shift

2. **Assess the direction.** Do the changes "agree"?
   - COHERENT: Background darkens AND text compresses AND spacing tightens AND borders thicken = all saying "denser/more intense" = GOOD
   - INCOHERENT: Background darkens AND spacing loosens = contradiction (one says "denser," other says "lighter") = PROBLEM

3. **Calibrate expectations:**

| Simultaneous Shifts | Experience | Quality Level |
|---------------------|------------|---------------|
| 0-1 | Flat, monotone -- sections feel the same | FLAT |
| 2 | Something changed, hard to say what | FUNCTIONAL |
| 3 | Definite zone change, somewhat mechanical | DESIGNED |
| 4-5 | Atmospheric shift, immersive | COMPOSED |
| 6 | Total transformation | FLAGSHIP |

**Key diagnostic:** If you scroll through the page and cannot tell WHERE one major area ends and another begins, multi-coherence is absent. If you can feel zone changes but cannot name what changed, multi-coherence is high. The best multi-coherence is invisible as technique but unmistakable as experience.

**Reference failure case (Flagship 1.5/4):** Background shifts of 1-8 RGB points (imperceptible), uniform 16px/400 typography, identical spacing -- reader scrolled through 12 sections that felt like one undifferentiated zone.

**Reference case (CD-006, Ceiling tier -- NOT Flagship target):** At S1->S2 boundary, 6 channels shifted simultaneously -- background, typography voice, spatial topology (1D stack to 2D grid), border semantics, component density, and rhythmic pattern ALL changed coherently. This demonstrates multi-coherence at Ceiling tier. Flagship multi-coherence goes BEYOND this.

---

## VISUAL AUDITING PROTOCOL
```

---

## PA ENRICHMENT 3: Progressive Zoom Test (Fractal Coherence Verification)

**EDIT B-E03: Insert progressive zoom test after Zone Sweep, before Research Sovereignty**

```
old_string:
**PASS 5: THE SHIP TEST** — Senior designer scrolled through. Name on this? Fix in 10 minutes?

---

## RESEARCH SOVEREIGNTY
```

```
new_string:
**PASS 5: THE SHIP TEST** — Senior designer scrolled through. Name on this? Fix in 10 minutes?

### Progressive Zoom Test (Fractal Coherence Verification)

**When:** Any audit evaluating PA-63 (fractal zoom) or assessing compositional depth. MANDATORY for Mode 4.

**What it tests:** Whether the page's organizing principle appears at every zoom level -- the same DIRECTION of visual treatment visible whether you look at the full page, one section, one component, or one line of text.

**The 5 scales:**

| Scale | What to examine | What "present" looks like |
|-------|----------------|--------------------------|
| **Navigation** | Header + TOC area only | Header communicates the organizing principle (authority, warmth, structure). TOC previews the page's journey. |
| **Page** | Full scroll, squinted | Zone backgrounds shift visibly. Spacing compresses then releases. Transition types vary. An ARC is visible. |
| **Section** | One viewport in the middle | Multiple component types within the section. Internal rhythm (intro -> peak -> conclusion). |
| **Component** | One callout/card/table isolated | 2-zone DNA (sparse label, dense body). Internals respond to which zone of the page it sits in (denser in dense zones). |
| **Character** | One paragraph from sparse zone vs dense zone | Text itself FEELS different -- airier in sparse zones, denser in dense zones. |

**Protocol (5 steps, executed on scroll-through screenshots):**

1. **Bird's eye:** Cover all body content in screenshots. Look ONLY at the header + navigation region. Does it communicate what kind of page this is? **Scale 1: Navigation.**
2. **Scroll-through squint:** Blur vision. Scroll through all screenshots at speed. Can you feel a density/color/spacing ARC across the full page? **Scale 2: Page.**
3. **One-screen focus:** Pick a single viewport-height screenshot from the middle of the page. Is there component variety and internal rhythm within this one screen? **Scale 3: Section.**
4. **Component isolation:** Find the same component type (callout, card) appearing in two different zones. Side by side, can you tell which is from the sparse zone and which from the dense zone WITHOUT reading content? **Scale 4: Component.**
5. **Character comparison:** Read one paragraph from a sparse zone screenshot and one from a dense zone screenshot. Does the TEXT itself feel different (airier vs denser)? **Scale 5: Character.**

**Scoring:**
- 3+ scales clearly present = FRACTAL COHERENCE DETECTED
- 1-2 scales present = PARTIAL (identify which scales are missing)
- 0 scales = NO FRACTAL COHERENCE

**Dependency rule:** Scale 3 (Section), Scale 4 (Component), and Scale 5 (Character) DEPEND on Scale 2 (Page) being perceptible. If the page-level arc is invisible (no zone background shifts, no spacing variation), finer-scale coherence is orphaned -- it reinforces nothing. Flag this specific failure mode: "Character-level variation exists but page-level context is absent."

---

## RESEARCH SOVEREIGNTY
```

---

## PA ENRICHMENT 4: Mode 4 Team Structure Update

**EDIT B-E04: Replace Mode 4 team block with Tier 5 assignments**

```
old_string:
**Team:**
```
[Lead]
  ├── Research Contextualizer (Wave 1)
  ├── Auditor A: Impression+Emotion (PA-01,04,05,18,19,20,45)
  ├── Auditor B: Readability+Typography (PA-02,06,07,08,29)
  ├── Auditor C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53)
  ├── Auditor D: Flow+Pacing (PA-12,13,34,35,36)
  ├── Auditor E: Grid+Layout (PA-14,15,37,38,39)
  ├── Auditor F: Consistency+Rhythm (PA-16,17,40,41)
  ├── Auditor G: Metaphor+Ideology (PA-42,43,44)
  ├── Auditor H: Responsive (PA-21,22,23,46,47)
  ├── Adversarial (PA-26,27,28,48)
  └── Weaver-Synthesizer (Wave 3)
```
```

```
new_string:
**Team:**
```
[Lead]
  ├── Research Contextualizer (Wave 1 -- Lock Sheet)
  ├── Auditor A: Impression+Emotion (PA-01,04,05,18,19,20,45 + T5: PA-65,67) [9 Qs]
  ├── Auditor B: Readability+Typography (PA-02,06,07,08,29) [5 Qs]
  ├── Auditor C: Spatial+Proportion (PA-09,10,11,30,31,32,33,50,51,52,53 + T5: PA-64,66) [13 Qs]
  ├── Auditor D: Flow+Pacing (PA-12,13,34,35,36 + T5: PA-62) [6 Qs]
  ├── Auditor E: Grid+Layout (PA-14,15,37,38,39 + T5: PA-63) [6 Qs]
  ├── Auditor F: Consistency+Rhythm (PA-16,17,40,41 + T5: PA-60,61) [6 Qs]
  ├── Auditor G: Metaphor+Ideology (PA-42,43,44) [3 Qs]
  ├── Auditor H: Responsive (PA-21,22,23,46,47) [5 Qs]
  ├── Adversarial (PA-26,27,28,48) [4 Qs]
  └── Weaver-Synthesizer (Wave 3 -- PA-05 verdict + Tier 5 verdict)
```

**Total: 48 standard + 8 Tier 5 = 56 questions across 9 auditors.**
```

---

## PA ENRICHMENT 4b: Weaver Dual-Verdict Protocol

**EDIT B-E04b: Add Weaver dual-verdict instructions after Mode 4 task graph**

```
old_string:
#11 Weaver        blockedBy: [#2-#10]   blocks: []
```

---
```

```
new_string:
#11 Weaver        blockedBy: [#2-#10]   blocks: []
```

**Weaver Dual-Verdict Protocol:**

The Weaver-Synthesizer produces TWO independent scores:

1. **PA-05 Score (0-4/4):** Standard floor detection. 4 binary sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED). Same protocol as existing.

2. **Tier 5 Score (0-8/8):** Compositional depth. Aggregate YES/NO from PA-60 through PA-67 across assigned auditors. Include 2-3 sentence justification per question.

**Final Verdict uses BOTH scores:**

| PA-05 | Tier 5 | Verdict |
|-------|--------|---------|
| >= 3.5 | >= 6/8 | **SHIP** (Flagship COMPOSED) |
| >= 3.5 | 4-5/8 | **SHIP WITH RESERVATION** (Flagship APPROACHING) |
| >= 3.5 | 0-3/8 | **NOT FLAGSHIP** (excellent Middle/Ceiling quality) |
| 3.0-3.4 | any | **FIX CYCLE** (top-3 PA issues) |
| < 3.0 | N/A | **REBUILD** (structural failure) |

---
```

---

## PA STRENGTHENING: PA-05 scoring reference to Tier 5

**EDIT B-S1: Add Tier 5 reference after PA-05 scoring (after line 133)**

```
old_string:
**Validation:** Middle-tier experiment passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor. This validates that mechanism deployment at Middle tier (8-10 mechanisms, 2 scales) reaches the "designed" threshold.
```

```
new_string:
**Validation:** Middle-tier experiment passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor. This validates that mechanism deployment reaches the "designed" threshold.

**For compositional depth beyond the designed threshold, see Tier 5 (PA-60 through PA-67).** PA-05 = 4/4 + Tier 5 = 0/8 is "VOCABULARY ONLY" -- not Flagship quality.
```

---

## PA STRENGTHENING: Fresh-Eyes principle reinforcement

**EDIT B-S2: Add Tier 5 to the "do not provide" list**

The executing agent should find the fresh-eyes principle section (near lines 46-48) that describes what NOT to provide to auditors, and add Tier 5 expected scores to the list. The exact old_string depends on the current phrasing -- the agent should read lines 40-55 and find the "DO NOT" list.

**NOTE:** This edit requires the agent to read the specific lines and craft the edit. The principle is: add "Tier 5 expected scores" and "compositional stack theory" to the list of things auditors should NOT receive.

---

# SECTION C: EDIT EXECUTION ORDER

Execute edits in this order to avoid line number drift issues:

**PHASE 1: PA Skill (smaller file, fewer edits)**
1. B-S1 (PA-05 scoring reference)
2. B1a + B1b (PA-05c qualifiers)
3. B2 (PA-09 qualifier)
4. B3 (PA-17/41 elevation block)
5. B4 (Tier 4 label)
6. B-E01 (Tier 5 questions -- large insertion before Quantitative Guardrails)
7. B-XR1 + B-XR2 (question count updates)
8. B-E02 (multi-coherence guidance)
9. B-E03 (progressive zoom test)
10. B-E04 + B-E04b (Mode 4 team + Weaver dual verdict)
11. B-S2 (fresh-eyes reinforcement)

**PHASE 2: TC Skill (larger file, more edits -- work bottom-up to preserve line numbers)**
1. A-E06 (Phase 5 telescope distillate -- near end of file)
2. A10b (tokenization optional language -- line 1618)
3. A10a (tokenization header -- line 1547)
4. A9d (landmark verification -- line 1523)
5. A9c (landmark fail -- line 1507)
6. A9b (landmark pass -- line 1487)
7. A9a (landmark tier requirements -- line 1480)
8. A-E02 (fractal echo protocol -- replaces fractal gate)
9. A8 (fractal tier requirements -- line 1432)
10. A11a (rhythm variation qualifier)
11. A-E03 (transition grammar append -- Phase 4.6)
12. A-E01 (multi-coherence binding -- Phase 4.3)
13. A7b (per-category natural landing -- line 1098)
14. A7a (per-category qualifier -- line 1078)
15. A6 (Phase 4 deployment levels -- line 868)
16. A-E05 (Phase 4 header + stack integration + density patterns)
17. A-E04 (anti-scale model -- before Phase 4.0)
18. A5 (metaphor rubric qualifier -- line 705)
19. A4 (0D-CEILING context box -- line 148)
20. A3 (routing + degradation -- line 127)
21. A2 (Middle skip -- line 99)
22. A1 (Step 0D tier table -- line 68)

**Working bottom-up ensures that line numbers for earlier edits remain valid.**

---

# SECTION D: POST-EDIT VERIFICATION CHECKLIST

After all edits are applied, the executing agent should verify:

**PA Skill:**
- [ ] "Ceiling+" appears ONLY in factual provenance (ceiling experiment references), never as a conditional
- [ ] "48 questions" does NOT appear -- all references say "56 questions"
- [ ] Tier 5 section exists between Tier 4 and Quantitative Guardrails
- [ ] All 8 Tier 5 questions present (PA-60 through PA-67)
- [ ] Mode 4 team table includes Tier 5 assignments
- [ ] Weaver dual-verdict protocol exists after task graph
- [ ] Multi-coherence evaluation section exists in Metaphor-Awareness Principles
- [ ] Progressive zoom test exists in Visual Auditing Protocol
- [ ] Restraint evaluation guidance exists within Tier 5 section
- [ ] PA-05 scoring references Tier 5 for compositional depth
- [ ] No duplicate auditor assignment tables

**TC Skill:**
- [ ] Step 0D contains NO tier classification table
- [ ] No "Floor", "Middle", "Ceiling" as tier names (check with search)
- [ ] "Middle-tier+" and "Ceiling+" qualifiers do NOT appear on any MANDATORY rule
- [ ] "SKIP Phases 1-3" does NOT appear
- [ ] "graceful degradation" does NOT appear
- [ ] Phase 4 preamble has stack integration table
- [ ] Density patterns (CRESCENDO/F-PATTERN/BENTO/PULSE) appear in Phase 4, not Phase 0D
- [ ] Phase 4.0A (anti-scale model) exists before Phase 4.0
- [ ] Multi-coherence binding rules (R-MC-01 through R-MC-06) exist in Phase 4.3
- [ ] Fractal echo protocol with 5-scale table exists in Phase 4.7
- [ ] Transition grammar has semantic basis + CSS values table
- [ ] Phase 5 has telescope distillate specification
- [ ] Tokenization is marked MANDATORY, not "optional" or "recommended"
- [ ] Single deployment level: "16-18 mechanisms..." (no Floor/Middle/Ceiling)

---

**END OF DRAFT-12**

**Statistics:**
- TC skill edits: 22 Edit tool operations (11 removals + 6 enrichments + 5 scattered fixes)
- PA skill edits: 13 Edit tool operations (4 removals + 4 enrichments + 2 cross-ref updates + 2 strengthening + 1 fresh-eyes)
- Total: 35 Edit tool operations
- Net TC change: ~180 lines removed, ~120 lines added = ~60 line reduction
- Net PA change: ~3 lines removed, ~220 lines added = ~217 line increase
- Combined skill growth: ~157 net lines added (from ~2,781 combined to ~2,938)
