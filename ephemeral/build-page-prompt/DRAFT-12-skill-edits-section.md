# SECTION 5: SKILL FILE EDITS

Before building the page, you must edit two skill files to remove tier routing and add Flagship enrichments. Execute ALL edits below in order. Each edit specifies exact text to find and replace using the Edit tool.

**CRITICAL: Execute every edit. Do not skip any. Do not paraphrase. Copy the old_string and new_string verbatim.**

---

## 5A: TENSION-COMPOSITION SKILL EDITS

File: `~/.claude/skills/tension-composition/SKILL.md`

These edits remove tier-conditional routing (~180 lines) and add Flagship compositional intelligence enrichments (~120 lines). After editing, the skill runs the FULL pipeline for every invocation with zero tier branching.

---

### TC Edit 1: Remove Step 0D tier classification table and routing (lines 68-145)

Replace the entire Step 0D block (tier table, Middle-tier skip, Ceiling/Flagship routing, degradation protocol, deployment level distinctions, tier caveats) with a streamlined universal directive.

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
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

  The per-category minimum (1+ per each of 5 families) ensures vocabulary BREADTH, and the count emerges naturally from breadth. Natural landing zones emerge from breadth, not from number-targeting.

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
- new_string: |
  ### Step 0D: Pipeline Entry

  **Every page runs the FULL pipeline (Phases 1-5).** No tier routing, no phase skipping.

  The Addition Test (Phase 2) is the ONLY escape valve: if content has zero genuine tension, skip Phases 3-4 and apply design system defaults. This is content-form fit detection, not tier routing.

  **Mechanism count is a PROXY, not a target.** Peak richness occurs at maximum content-mechanism fit, not maximum technique count. The natural landing zone for full-pipeline pages is 16-18 mechanisms across all 5 categories, but count is a BYPRODUCT of multi-channel encoding, not a goal. A page with 12 perfectly-deployed mechanisms that reinforce a coherent metaphor is richer than 18 forced ones.

  **Deployment level:** Multi-pattern COMPOSITION -- 3+ density patterns with BREATHING/SMOOTH/BRIDGE transitions, mechanisms working TOGETHER through metaphor expressing shared meaning through different CSS properties.

---

### TC Edit 2: Remove Step 0D-CEILING conditional box, promote contents to universal (lines 148-165)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
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
- new_string: |
  ### Universal Compositional Requirements

  Every page that passes the Addition Test (genuine tension detected) MUST meet ALL of these:

  1. **Metaphor is mandatory:** You MUST derive a metaphor through Phases 1-3. No shortcuts.
  2. **Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+):** Deploy at least 1 mechanism from EACH of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation).
  3. **Reinforcing pairs required:** At least 2 mechanism pairs must encode the SAME semantic dimension through different CSS channels (e.g., border-weight + zone backgrounds both encode depth).
  4. **Multi-channel coherence:** >=3 CSS channels shift together at every zone boundary, all encoding the SAME semantic direction.
  5. **5-scale fractal coherence:** Pattern visible at ALL 5 scales (Navigation + Page + Section + Component + Character).
  6. **Container width 940-960px is NON-NEGOTIABLE:** Metaphor NEVER overrides this. Express narrowing through INTERNAL padding only.

  Mechanisms work TOGETHER through metaphor, not independently. The combination creates coherence, not just coverage. Metaphor shapes internal experience; guardrails preserve external readability.

---

### TC Edit 3: Remove Metaphor Scoring Rubric tier qualifier (line 705)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Step 3.5G -- Metaphor Scoring Rubric (MANDATORY for Ceiling+ Tier)
- new_string: |
  ### Step 3.5G -- Metaphor Scoring Rubric (MANDATORY)

---

### TC Edit 4: Add Compositional Intelligence Stack preamble to Phase 4

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ## Phase 4: Compositional Layout Generation

  **Tier-specific deployment levels:**
  - **Floor (assembly):** 0 custom mechanisms, Track 1 component templates only
  - **Middle (individual):** 8-10 mechanisms, each independent, serving different content aspects
  - **Ceiling (combination):** 12-15 mechanisms, 2+ combinations encoding shared semantics
  - **Flagship (multi-pattern):** 16-18 mechanisms, 3+ patterns with BREATHING/SMOOTH/BRIDGE transitions

  Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.
- new_string: |
  ## Phase 4: Compositional Layout Generation

  **Everything in Phase 4 connects through a compositional intelligence stack:**

  | Layer | What It Asks | Where in Phase 4 |
  |-------|-------------|-------------------|
  | L1: Perception Thresholds | Can the reader SEE your decisions? | Phase 4.0 guardrails |
  | L2: Fractal Scales | Does the pattern appear at all 5 zoom levels? | Phase 4.7 fractal gate |
  | L3/L4: Channels + Multi-Coherence | Do 3+ CSS properties shift together at boundaries? | Phase 4.3 coherence + multi-coherence rules |
  | L5: Anti-Scale Model | Is richness = density x restraint x confidence? | Phase 4.0A anti-scale model |

  **Build boundary-by-boundary, not channel-by-channel.** At each zone boundary, write ALL channels simultaneously (background + typography + spacing + borders). NOT "all backgrounds first, then all borders." The transition table forces this simultaneous thinking.

  **Deployment level:** 16-18 mechanisms, 3+ density patterns with BREATHING/SMOOTH/BRIDGE transitions. Mechanisms work TOGETHER through metaphor.

  Translate the metaphor into concrete CSS/HTML mechanisms using the design system's vocabulary.

---

### TC Edit 5: Add Anti-Scale Model as Phase 4.0A (before Phase 4.0 guardrails)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)
- new_string: |
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

  **The CD-006 success:** 41 mechanism instances (density), 40% of mechanisms deliberately withheld (restraint), 5 grid topologies + 3-tier borders + 6 type sizes (confidence).

  **Self-check after each section:** Comment out your CSS line by line. If removing a rule causes no visible change at 100% zoom, delete it permanently and use the freed budget on something perceptible.

  ### Phase 4.0: Perceptual Guardrails (Non-Negotiable Minimums)

---

### TC Edit 6: Remove Middle-tier CPL baseline reference (line 942)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Middle-tier baseline:** Middle experiment achieved 82 CPL (+2 over spec, ACCEPT AS SHIPPED). The builder did not have this formula available for self-verification before file write.
- new_string: |
  **Baseline reference:** Prior experiment achieved 82 CPL (+2 over spec). Use this formula for self-verification before file write.

---

### TC Edit 7: Remove per-category deployment tier qualifier (line 1078)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Per-category mechanism deployment (MANDATORY for Middle-tier+):**
- new_string: |
  **Per-category mechanism deployment (MANDATORY):**

---

### TC Edit 8: Remove Middle experiment validation paragraph tier framing (line 1092)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Middle experiment validation:** The Middle-tier experiment deployed 12 mechanisms across all 5 categories (S:1, H:3, C:4, D:2, N:3) achieving PA-05 DESIGNED (4/4 sub-criteria: intentional composition, vocabulary fluency, spatial balance, execution quality). This demonstrates that per-category deployment crosses the "designed vs formatted" perceptual threshold.
- new_string: |
  **Validation:** Per-category deployment (S:1+, H:1+, C:1+, D:1+, N:1+) crosses the "designed vs formatted" perceptual threshold. Natural landing is 16-18 mechanisms across all 5 categories with 3+ reinforcing clusters.

---

### TC Edit 9: Remove natural-landing-by-tier table (lines 1098-1102)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Natural landing by tier:**
  - Floor: 5 mechanisms (component assembly, no per-category requirement)
  - Middle: 8-12 mechanisms across all 5 categories
  - Ceiling: 12-15 mechanisms across all 5 categories + 2+ reinforcing pairs
  - Flagship: 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters
- new_string: |
  **Natural landing:** 16-18 mechanisms across all 5 categories + 3+ reinforcing clusters encoding shared semantics through different CSS channels.

---

### TC Edit 10: Add Multi-Coherence Binding Rules after Rule C-5 in Phase 4.3

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Coherence Check Procedure:** For each section, identify the metaphor direction, record each channel's value, check pairwise agreement. If any pair contradicts, fix it.
- new_string: |
  **Coherence Check Procedure:** For each section, identify the metaphor direction, record each channel's value, check pairwise agreement. If any pair contradicts, fix it.

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

---

### TC Edit 11: Remove Rhythm Variation tier qualifier (line 1303)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Step 4.2C: Rhythm Variation Requirement (MANDATORY for Middle-tier+)
- new_string: |
  ### Step 4.2C: Rhythm Variation Requirement (MANDATORY)

---

### TC Edit 12: Remove Middle-tier rhythm evidence framing (line 1325)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  Middle-tier experiment deployed 12 mechanisms and achieved PA-05 DESIGNED but failed PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony"). Perceptual auditors noted "spacing patterns repeat without variation," "metronomic rather than musical." The issue was NOT mechanism count but transition VARIETY. Even with high mechanism deployment, uniform spacing creates mechanical rhythm.
- new_string: |
  Prior experiments demonstrated that even high mechanism deployment fails PA-17 ("Is there visual rhythm or random?") and PA-41 ("Repetition monotony") when transitions are uniform. The issue is NOT mechanism count but transition VARIETY. Uniform spacing creates mechanical rhythm regardless of mechanism deployment.

---

### TC Edit 13: Add Transition Grammar semantic enrichment (after existing transition lookup table, line 1415)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Step 4.7 -- Fractal Consistency GATE (MANDATORY)
- new_string: |
  **Transition Types: Semantic Basis + CSS Values**

  | Type | Gap | Border | Semantic | When |
  |------|-----|--------|----------|------|
  | **SMOOTH** | 48px margin | 1px solid var(--color-border) | Same-axis continuation. Low cognitive shift. | Adjacent sections with same density pattern. |
  | **BRIDGE** | 64px margin | Background shift to var(--color-zone-breathing) + 32px padding + prose text | Cross-axis shift with context. Reader needs orientation. | Switching density patterns (F->Bento, Z->Spiral). |
  | **BREATHING** | 80px margin | 3px solid var(--color-border) | Major axis shift. Full cognitive reset. | Maximum-distance pattern changes (Spiral->Z, Act breaks). |

  **Multi-coherence at transitions:** The transition type IS itself a multi-coherence event. A BREATHING transition shifts spatial (80px gap), structural (3px border vs 1px), and rhythmic (pacing resets) channels simultaneously. Transitions ARE boundaries, so they MUST participate in the multi-coherence protocol.

  ### Step 4.7 -- Fractal Consistency GATE (MANDATORY)

---

### TC Edit 14: Replace fractal gate tier-calibrated requirements with Flagship-only (lines 1416-1461)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Step 4.7 -- Fractal Consistency GATE (MANDATORY)

  **BEFORE proceeding to Phase 5, you MUST complete this gate.**

  **Fractal self-similarity requirement:** The SAME design pattern must appear at multiple scales. This is NOT optional.

  **Scale coverage table (MANDATORY deliverable):**

  | Scale | Pattern Expression | CSS Evidence |
  |-------|-------------------|--------------|
  | Navigation | [How TOC/header reflects pattern] | [Specific CSS] |
  | Page | [How section sequence reflects pattern] | [Specific CSS] |
  | Section | [How components within section reflect pattern] | [Specific CSS] |
  | Component | [How content within component reflects pattern] | [Specific CSS] |
  | Character | [How inline/text-level reflects pattern] | [Specific CSS] |

  **Tier-calibrated requirements:**
  - **Floor:** EXEMPT (component assembly, no custom pattern)
  - **Middle:** 2 scales minimum (Page + Component)
  - **Ceiling:** 4 scales minimum (Navigation/Page/Section/Component)
  - **Flagship:** 5 scales required (all scales)

  **Concrete Middle-tier example (CRESCENDO, 2 scales):**
  - **Page scale:** Overall section sequence follows density pattern. Sections progress from sparse to dense: `section-intro { padding: 64px 24px }` -> `section-build { padding: 32px 24px }` -> `section-peak { padding: 16px 24px }`.
  - **Component scale:** Individual components mirror the same direction. Component headers are sparser than bodies: `.component-label { font-size: 0.75rem; letter-spacing: 0.1em }` (sparse/light) while `.component-body { font-size: 1rem; line-height: 1.5 }` (dense/substantial).
  - Both scales say "sparse-to-dense" -- that is fractal coherence.

  **Passing criteria:**
  - Table complete with ALL required scales for tier
  - SAME pattern direction at each scale (e.g., if page-level uses sparse-to-dense, section-level MUST also use sparse-to-dense)
  - CSS evidence provided for each scale
  - Pattern is STRUCTURAL (rhythm, hierarchy, density), not decorative

  **Failing criteria (any of):**
  - Pattern reverses direction between scales
  - Pattern exists at fewer than tier minimum scales
  - No CSS evidence provided
  - "Pattern" is decorative (color theme) not structural (density/hierarchy)

  **Phase 4.7 is complete when:**
  - Scale coverage table written
  - Tier minimum scales demonstrated
  - Self-similarity verified (same direction at all scales)

  **Sunset clause:** Re-evaluate this gate after 10 pipeline runs. If fractal consistency correlates with quality, keep it. If it adds build time without perceptual benefit, demote to CHECK.
- new_string: |
  ### Step 4.7 -- Fractal Consistency GATE (MANDATORY)

  **BEFORE proceeding to Phase 5, you MUST complete this gate.**

  **Fractal self-similarity = the SAME design pattern at ALL 5 zoom levels.**

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

  **Sunset clause:** Re-evaluate this gate after 10 pipeline runs.

---

### TC Edit 15: Replace landmark gate tier-calibrated requirements (lines 1480-1483)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Tier-calibrated requirements:**
  - **Floor (Track 1 assembly):** Header + main content required. Footer optional.
  - **Middle-tier+:** Header + main content + footer ALL required.
  - **Ceiling/Flagship:** Header + main + footer + transition grammar between ALL landmarks.
- new_string: |
  **Requirements:**
  Header + main content + footer ALL required + transition grammar between ALL landmarks.

---

### TC Edit 16: Remove Middle-tier PASS example framing (lines 1487-1507)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **PASS (Middle tier):**
  ```
  HEADER: YES
  CSS: header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); padding: 24px; }
  Visual: Dark background (#1A1A1A), 3px red bottom border, inverted text

  MAIN CONTENT SECTIONS: YES (5 sections)
  CSS: section { margin-bottom: 48px; }
  Visual: Zone backgrounds alternate (sparse/dense/breathing), transitions vary (SMOOTH/BRIDGE/BREATHING)

  FOOTER: YES
  CSS: footer { background: var(--color-text); border-top: 3px solid var(--color-primary); padding: 24px; }
  Visual: Mirrors header (dark background, 3px red top border, inverted text)
  ```
- new_string: |
  **PASS:**
  ```
  HEADER: YES
  CSS: header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); padding: 24px; }
  Visual: Dark background (#1A1A1A), 3px red bottom border, inverted text

  MAIN CONTENT SECTIONS: YES (5 sections)
  CSS: section { margin-bottom: 48px; }
  Visual: Zone backgrounds alternate (sparse/dense/breathing), transitions vary (SMOOTH/BRIDGE/BREATHING)

  FOOTER: YES
  CSS: footer { background: var(--color-text); border-top: 3px solid var(--color-primary); padding: 24px; }
  Visual: Mirrors header (dark background, 3px red top border, inverted text)
  ```

---

### TC Edit 17: Remove FAIL Middle-tier framing and Middle-tier provenance (lines 1502-1524)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **FAIL (incomplete structure):**
  ```
  HEADER: YES
  MAIN CONTENT SECTIONS: YES (4 sections)
  FOOTER: NO — page just stops after last content section
  Result: FAIL — Middle+ tier requires footer for narrative closure
  ```

  **WHY THIS MATTERS (provenance from Middle-tier retrospective):**

  Middle-tier experiment specified Footer Mirror (#14) in the build plan but the builder omitted it in implementation. Perceptual auditors flagged "page just stops" (PA-13: "Is there a clear visual ending, or does the page just stop?") as a MAJOR flow issue. This was a WOULD-NOT-SHIP finding.
- new_string: |
  **FAIL (incomplete structure):**
  ```
  HEADER: YES
  MAIN CONTENT SECTIONS: YES (4 sections)
  FOOTER: NO — page just stops after last content section
  Result: FAIL — footer required for narrative closure
  ```

  **WHY THIS MATTERS:**

  A prior experiment specified Footer Mirror (#14) in the build plan but the builder omitted it. Auditors flagged "page just stops" (PA-13) as a WOULD-NOT-SHIP finding.

---

### TC Edit 18: Remove "Middle+ tier" from footer mirror requirement (line 1523)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  4. For Middle+ tier: footer MUST mirror header OR provide equivalent visual weight
- new_string: |
  4. Footer MUST mirror header OR provide equivalent visual weight

---

### TC Edit 19: Make Tokenization Self-Check mandatory (line 1547)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Phase 4.9: Tokenization Self-Check (Recommended for Middle-tier+)
- new_string: |
  ### Phase 4.9: Tokenization Self-Check (MANDATORY)

---

### TC Edit 20: Remove Middle-tier tokenization baseline framing (line 1599)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **Middle-tier baseline:** Middle experiment achieved 66.5% token compliance (73 raw values, ~146 var() references). This was 13.5 points below the 80% target. The root cause was NOT missing tokens (most raw values had token equivalents) but builder DISCIPLINE — not looking up tokens before writing CSS.
- new_string: |
  **Baseline reference:** A prior experiment achieved 66.5% token compliance -- 13.5 points below the 80% target. The root cause was NOT missing tokens but builder DISCIPLINE -- not looking up tokens before writing CSS.

---

### TC Edit 21: Remove optional/Middle-tier tokenization note (line 1618)

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **NOTE:** This phase is OPTIONAL but RECOMMENDED. Middle-tier can ship at 66.5%. Ceiling-tier should target 80%+.
- new_string: |
  **NOTE:** This phase is MANDATORY. Target >= 80% compliance.

---

### TC Edit 22: Add Density Patterns vocabulary to Phase 4.1

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  **If ANY category produces zero properties, YOUR metaphor may be insufficiently rich.**
- new_string: |
  **If ANY category produces zero properties, YOUR metaphor may be insufficiently rich.**

  **Density Patterns (spatial organization vocabulary):**

  These patterns describe page-scale density flow. Under metaphor-driven composition, the metaphor SELECTS the pattern; the pattern does not replace the metaphor.

  | Pattern | Density Flow | Best When Metaphor Implies |
  |---------|-------------|---------------------------|
  | CRESCENDO | Sparse -> dense -> resolved | Progressive deepening (geological, archaeological) |
  | F-PATTERN | Dense left spine, sparse right content | Hierarchical navigation (editorial, reference) |
  | BENTO | Grid-based modular density variation | Parallel independent items (catalog, dashboard) |
  | PULSE | Dense-sparse-dense alternation | Rhythmic investigation (Q&A, dialogue, dialectic) |

  The metaphor determines WHICH pattern; the content determines WHERE density peaks and troughs occur.

---

### TC Edit 23: Add Telescope Distillate output format to Phase 5

Use the Edit tool:
- file_path: `~/.claude/skills/tension-composition/SKILL.md`
- old_string: |
  ### Output A: The Thought Process Document

  Show every step explicitly:
- new_string: |
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

  **Volume ceiling: 80 lines.** If the brief exceeds 80 lines, compress.

  ### Output A-Full: The Thought Process Document (for reference/audit)

  Show every step explicitly:

---

### TC Post-Edit Verification Checklist

After applying all 23 TC edits, the fresh instance MUST verify:

1. **Search for "Floor" as tier name:** Should find ZERO references to "Floor" as a tier routing level. "Floor" as "perceptual floor" or "guardrail floor" is acceptable.
2. **Search for "Middle" as tier name:** Should find ZERO references to "Middle" as a tier routing level. "Middle" in non-tier contexts is acceptable.
3. **Search for "Ceiling" as tier name:** Should find ZERO conditional references to "Ceiling" tier. Factual provenance ("ceiling experiment") is acceptable.
4. **Search for "SKIP Phases":** Should find ZERO results.
5. **Search for "graceful degradation":** Should find ZERO results.
6. **Search for "Track 1":** Should find ZERO results.
7. **Search for "Middle-tier+":** Should find ZERO results.
8. **Search for "Ceiling+":** Should find ZERO results in non-rubric context. The rubric header was changed.
9. **Verify new sections exist:** Phase 4.0A (Anti-Scale Model), Compositional Intelligence Stack table in Phase 4 preamble, Multi-Coherence Binding Rules in Phase 4.3, Transition Types semantic table before Phase 4.7, enhanced Fractal Echo protocol in Phase 4.7, Density Patterns in Phase 4.1, Telescope Distillate in Phase 5.
10. **Verify no orphaned cross-references:** Check that no section references a removed section by name.

---

## 5B: PERCEPTUAL AUDITING SKILL EDITS

File: `~/.claude/skills/perceptual-auditing/SKILL.md`

These edits remove tier-conditional qualifiers (~15 words across 4 locations) and add Flagship enrichments (~220 lines): Tier 5 compositional depth questions, multi-coherence evaluation guidance, fractal verification protocol, updated Mode 4 auditor assignments with Tier 5 questions, restraint evaluation guidance, and Weaver dual-verdict protocol.

---

### PA Edit 1: Update question count in critical warning (line 7)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **This skill defines success criteria (48 PA questions + quantitative guardrails).**
- new_string: |
  **This skill defines success criteria (56 PA questions + quantitative guardrails).**

---

### PA Edit 2: Update fresh-eyes principle to include Tier 5 context blocking (line 48)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  Perceptual auditors MUST be context-starved. Do NOT provide: mechanism counts, pattern names, tier model, build plan details, or prior experiment results. If the auditor knows "this should have 12 mechanisms," they will see 12 mechanisms everywhere. Zero context = genuine first impressions. The auditor receives ONLY: the rendered page (screenshot or served HTML) and the PA questions. Nothing else.
- new_string: |
  Perceptual auditors MUST be context-starved. Do NOT provide: mechanism counts, pattern names, build plan details, prior experiment results, Tier 5 expected scores, or compositional stack theory. If the auditor knows "this should have 12 mechanisms," they will see 12 mechanisms everywhere. Zero context = genuine first impressions. The auditor receives ONLY: the rendered page (screenshot or served HTML) and the PA questions. Nothing else.

---

### PA Edit 3: Remove "Ceiling+ audits" qualifier from PA-05c (line 105)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
     **PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately for Ceiling+ audits):**
- new_string: |
     **PA-05c Expanded Sub-Dimensions (evaluate ALL THREE separately):**

---

### PA Edit 4: Remove "Ceiling+ only" from PA-05c scoring (line 122)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
     **PA-05c Scoring (Ceiling+ only):** All THREE sub-dimensions must PASS for PA-05c to PASS. If any single sub-dimension FAILS, PA-05c = FAIL, and the failing sub-dimension(s) must be named in the finding. This enables precise diagnosis of WHICH proportion dimension needs fixing.
- new_string: |
     **PA-05c Scoring:** All THREE sub-dimensions must PASS for PA-05c to PASS. If any single sub-dimension FAILS, PA-05c = FAIL, and the failing sub-dimension(s) must be named in the finding. This enables precise diagnosis of WHICH proportion dimension needs fixing.

---

### PA Edit 5: Add PA-05 scoring note pointing to Tier 5 (after line 133)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **Validation:** Middle-tier experiment passed 4/4 sub-criteria, achieving DESIGNED despite lacking metaphor. This validates that mechanism deployment at Middle tier (8-10 mechanisms, 2 scales) reaches the "designed" threshold.
- new_string: |
  **Validation:** Prior experiments passed 4/4 sub-criteria, achieving DESIGNED through mechanism deployment. PA-05 measures the FLOOR (designed threshold). For compositional depth beyond this floor, see Tier 5 (PA-60 through PA-67).

---

### PA Edit 6: Remove "Ceiling+ audits" from PA-09 severity calibration (line 153)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **PA-09 Severity Calibration (MANDATORY for Ceiling+ audits):**
- new_string: |
  **PA-09 Severity Calibration (MANDATORY):**

---

### PA Edit 7: Rewrite PA-17/PA-41 tier elevation block (lines 202-214)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **⚠ CEILING+ TIER ELEVATION (MANDATORY, NOT ADVISORY):**

  PA-17 and PA-41 are formally elevated to **Tier 1 equivalent** for all Ceiling-tier and above audits. This is a MANDATORY tier change, not a suggestion.

  **For Ceiling+ audits (Ceiling, Flagship):**
  - PA-17 (rhythm) and PA-41 (repetition monotony) are CRITICAL questions
  - FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question (PA-01 through PA-05)
  - All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
  - Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

  **Provenance:** Middle-tier experiment's highest-leverage perceptual finding was "metronomic rather than musical" rhythm — spacing was consistent but not varied. PA-17 correctly identified this as arrhythmic, and PA-41 caught the monotony. Ceiling experiment's whitespace void (9/9 auditors) was a SPATIAL failure, but the rhythm failure compounded it — identical transitions repeated without variation.

  **Binary enforcement:** If auditing a Ceiling+ page and PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.
- new_string: |
  **PA-17 AND PA-41: TIER 1 EQUIVALENT (MANDATORY)**

  PA-17 (rhythm) and PA-41 (repetition monotony) are **Tier 1 equivalent** -- equally critical as PA-01 through PA-05.

  - FAIL on PA-17 or PA-41 = equivalent to FAIL on a Tier 1 Mandatory question
  - All Mode 4 auditors MUST evaluate PA-17 and PA-41 regardless of their assigned question set
  - Auditor F (Consistency+Rhythm) is the PRIMARY evaluator, but ALL auditors should note rhythm/monotony observations

  **Binary enforcement:** If PA-17 = FAIL or PA-41 = FAIL, the page verdict CANNOT be higher than "YES WITH RESERVATIONS" regardless of other PA scores.

  **Provenance:** Prior experiments found "metronomic rather than musical" rhythm as the highest-leverage perceptual failure -- spacing consistent but not varied.

---

### PA Edit 8: Remove "Ceiling+ Only" from Tier 4 header (line 337)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  ### Tier 4: Void Prevention (Ceiling+ Only — MANDATORY)
- new_string: |
  ### Tier 4: Void Prevention (MANDATORY)

---

### PA Edit 9: Add Tier 5 Compositional Depth Questions (after Tier 4, before Quantitative Guardrails)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  ---

  ## QUANTITATIVE GUARDRAILS
- new_string: |
  ### Tier 5: Compositional Depth (MANDATORY)

  **Provenance:** PA-05's 4 binary sub-criteria detect whether a page crosses the "designed" threshold (vocabulary fluency). Tier 5 detects compositional depth ABOVE that threshold -- the difference between "mechanisms deployed correctly" and "mechanisms in conversation."

  **Epistemic status:** These questions and their thresholds are INITIAL HYPOTHESES -- derived from the compositional intelligence stack (scales, channels, multi-coherence, anti-scale model), not from observed Flagship artifacts. Thresholds may need adjustment.

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
  | **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template-quality) | VOCABULARY ONLY |
  | **Tier 5: 3-4** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
  | **Tier 5: 5-6** | (unlikely) | APPROACHING | APPROACHING |
  | **Tier 5: 7-8** | (impossible in practice) | (unlikely) | **COMPOSED** (target) |

  **No prerequisite gate:** Tier 5 is evaluated for every Mode 4 audit regardless of PA-05 score. Even when PA-05 < 4/4, Tier 5 scores provide diagnostic value.

  **Restraint Evaluation Guidance (for PA-64):**

  Restraint is the hardest quality to audit because absence and simplicity look identical to the untrained eye:

  | Quality | What It Looks Like | How to Tell |
  |---------|-------------------|-------------|
  | **Designed restraint** | A section with fewer visual treatments than its neighbors. Clean, simple, breathing. | The surrounding sections ARE richer -- the plain section is CONTRAST. It makes the rich sections more noticeable. The simplicity feels like a CHOICE. |
  | **Default absence** | A section with fewer visual treatments than its neighbors. Empty, flat, forgettable. | The surrounding sections are equally flat -- there is no contrast effect. The simplicity feels like the designer RAN OUT of ideas or time. |
  | **Accidental void** | A section with almost no content and large empty space. | The void has no compositional purpose. Nothing about it enhances the surrounding content. |

  **The test:** Cover the plain section with your hand. Does removing it make the page WORSE (designed restraint) or BETTER (absence)?

  ---

  ## QUANTITATIVE GUARDRAILS

---

### PA Edit 10: Add multi-coherence evaluation guidance (after metaphor-awareness principles, line 592)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality — both must pass.

  ---

  ## VISUAL AUDITING PROTOCOL
- new_string: |
  These supplement, not replace, the core PA questions. Metaphor quality is orthogonal to perceptual quality -- both must pass.

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

  **Key diagnostic:** If you scroll through the page and cannot tell WHERE one major area ends and another begins, multi-coherence is absent. If you can feel zone changes but cannot name what changed, multi-coherence is high.

  **Reference failure case (Flagship 1.5/4):** Background shifts of 1-8 RGB points (imperceptible), uniform 16px/400 typography, identical spacing -- reader scrolled through 12 sections that felt like one undifferentiated zone.

  ---

  ## VISUAL AUDITING PROTOCOL

---

### PA Edit 11: Add Progressive Zoom Test for fractal verification (after Zone Sweep, line 668)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **PASS 5: THE SHIP TEST** — Senior designer scrolled through. Name on this? Fix in 10 minutes?

  ---

  ## RESEARCH SOVEREIGNTY
- new_string: |
  **PASS 5: THE SHIP TEST** — Senior designer scrolled through. Name on this? Fix in 10 minutes?

  ### Progressive Zoom Test (Fractal Coherence Verification)

  **When:** Any audit evaluating PA-63 (fractal zoom) or assessing compositional depth. MANDATORY for Mode 4.

  **What it tests:** Whether the page's organizing principle appears at every zoom level.

  **The 5 scales:**

  | Scale | What to examine | What "present" looks like |
  |-------|----------------|--------------------------|
  | **Navigation** | Header + TOC area only | Header communicates the organizing principle. TOC previews the journey. |
  | **Page** | Full scroll, squinted | Zone backgrounds shift visibly. Spacing compresses then releases. An ARC is visible. |
  | **Section** | One viewport in the middle | Multiple component types within the section. Internal rhythm. |
  | **Component** | One callout/card/table isolated | 2-zone DNA. Internals respond to which zone of the page it sits in. |
  | **Character** | One paragraph from sparse zone vs dense zone | Text itself FEELS different -- airier in sparse zones, denser in dense zones. |

  **Protocol (5 steps, on scroll-through screenshots):**

  1. **Bird's eye:** Look ONLY at header + navigation region. Does it communicate what kind of page this is? **Scale 1.**
  2. **Scroll-through squint:** Blur vision. Can you feel a density/color/spacing ARC across the full page? **Scale 2.**
  3. **One-screen focus:** Pick a single viewport-height screenshot from the middle. Is there component variety and internal rhythm? **Scale 3.**
  4. **Component isolation:** Find the same component type in two different zones. Can you tell which is sparse and which is dense WITHOUT reading content? **Scale 4.**
  5. **Character comparison:** Read one paragraph from a sparse zone and one from a dense zone. Does the TEXT itself feel different? **Scale 5.**

  **Scoring:**
  - 3+ scales clearly present = FRACTAL COHERENCE DETECTED
  - 1-2 scales present = PARTIAL (identify which scales are missing)
  - 0 scales = NO FRACTAL COHERENCE

  **Dependency rule:** Scale 3-5 DEPEND on Scale 2 (Page) being perceptible. If the page-level arc is invisible, finer-scale coherence is orphaned.

  ---

  ## RESEARCH SOVEREIGNTY

---

### PA Edit 12: Update Mode 4 question count (line 482)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **What:** All 48 questions at 1440px, 768px, and 1024px. Scroll-through MANDATORY.
- new_string: |
  **What:** All 56 questions (48 standard + 8 Tier 5) at 1440px, 768px, and 1024px. Scroll-through MANDATORY.

---

### PA Edit 13: Update Mode 4 team structure with Tier 5 assignments (lines 486-497)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
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
- new_string: |
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

---

### PA Edit 14: Add Weaver dual-verdict protocol (after Mode 4 task graph, line 513)

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  #11 Weaver        blockedBy: [#2-#10]   blocks: []
  ```

  ---
- new_string: |
  #11 Weaver        blockedBy: [#2-#10]   blocks: []
  ```

  **Weaver Dual-Verdict Protocol:**

  The Weaver-Synthesizer produces TWO independent scores:

  1. **PA-05 Score (0-4/4):** Standard floor detection. 4 binary sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED). Same protocol as existing.

  2. **Tier 5 Score (0-8/8):** Compositional depth. Aggregate YES/NO from PA-60 through PA-67 across assigned auditors. Include 2-3 sentence justification per question.

  **Final Verdict uses BOTH scores:**

  | PA-05 | Tier 5 | Verdict |
  |-------|--------|---------|
  | >= 3.5 | >= 6/8 | **SHIP** (COMPOSED) |
  | >= 3.5 | 4-5/8 | **SHIP WITH RESERVATION** (APPROACHING) |
  | >= 3.5 | 0-3/8 | **NOT FLAGSHIP** (excellent quality, not compositionally deep) |
  | 3.0-3.4 | any | **FIX CYCLE** (top-3 PA issues) |
  | < 3.0 | N/A | **REBUILD** (structural failure) |

  ---

---

### PA Edit 15: Add Mode 1/2 Tier 5 exclusion notes

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  **Steps:** Screenshot → LOOK 5 seconds → answer PA-01–PA-05 → if PA-05 = NO, fix before done.

  ### Mode 2: Quick (3 minutes, no team)
- new_string: |
  **Steps:** Screenshot → LOOK 5 seconds → answer PA-01–PA-05 → if PA-05 = NO, fix before done.
  **Note:** Tier 5 compositional depth questions (PA-60-67) are Mode 4 only.

  ### Mode 2: Quick (3 minutes, no team)

---

### PA Edit 16: Add red flags for Tier 5

Use the Edit tool:
- file_path: `~/.claude/skills/perceptual-auditing/SKILL.md`
- old_string: |
  - All auditors return zero concerns
- new_string: |
  - All auditors return zero concerns
  - All Tier 5 questions answered YES without specific visual evidence cited
  - Tier 5 score = 8/8 on a page with PA-05 < 3/4 (flag as unreliable auditor)

---

### PA Post-Edit Verification Checklist

After applying all 16 PA edits, the fresh instance MUST verify:

1. **Search for "Ceiling+" as conditional:** Should find ZERO conditional references (e.g., "for Ceiling+ audits," "Ceiling+ only"). Factual provenance ("Ceiling experiment") is acceptable.
2. **Search for "48 questions":** Should find ZERO results. All should now say "56 questions."
3. **Verify Tier 5 section exists:** Between Tier 4 (Void Prevention) and Quantitative Guardrails.
4. **Verify PA-60 through PA-67 are defined:** 8 questions with Stack Layer, Question, and What It Detects columns.
5. **Verify Mode 4 team includes Tier 5 assignments:** Auditors A, C, D, E, F should have T5 question assignments.
6. **Verify Weaver dual-verdict protocol exists:** After Mode 4 task graph, with PA-05 + Tier 5 combined verdict matrix.
7. **Verify multi-coherence evaluation guidance exists:** After metaphor-awareness principles, before Visual Auditing Protocol.
8. **Verify Progressive Zoom Test exists:** After Zone Sweep, before Research Sovereignty.
9. **Verify no duplicate auditor assignment tables:** Only ONE team structure should exist in Mode 4.
10. **Verify PA question ID numbering:** PA-60-67 (no collision with PA-50-53 in Tier 4).

---

## 5C: EDIT EXECUTION ORDER

Execute all edits in this order to avoid line-number drift:

**TC Skill (23 edits):**
1. TC Edit 1 (largest removal -- Step 0D, ~77 lines removed)
2. TC Edit 2 (Step 0D-CEILING removal)
3. TC Edit 3 (rubric qualifier)
4. TC Edit 4 (Phase 4 preamble replacement)
5. TC Edit 5 (Anti-Scale Model insertion)
6. TC Edit 22 (Density Patterns in Phase 4.1)
7. TC Edit 6 (CPL baseline)
8. TC Edit 7 (per-category qualifier)
9. TC Edit 8 (Middle experiment validation)
10. TC Edit 9 (natural-landing table)
11. TC Edit 11 (rhythm qualifier)
12. TC Edit 12 (rhythm evidence)
13. TC Edit 10 (Multi-Coherence insertion after C-5)
14. TC Edit 13 (Transition Grammar semantic enrichment)
15. TC Edit 14 (Fractal gate replacement)
16. TC Edit 15 (Landmark tier requirements)
17. TC Edit 16 (PASS example framing)
18. TC Edit 17 (FAIL example framing)
19. TC Edit 18 (footer mirror qualifier)
20. TC Edit 19 (tokenization mandatory)
21. TC Edit 20 (tokenization baseline)
22. TC Edit 21 (tokenization optional note)
23. TC Edit 23 (Telescope Distillate in Phase 5)

**PA Skill (16 edits):**
1. PA Edit 1 (question count)
2. PA Edit 2 (fresh-eyes update)
3. PA Edit 3 (PA-05c qualifier)
4. PA Edit 4 (PA-05c scoring qualifier)
5. PA Edit 5 (PA-05 validation note)
6. PA Edit 6 (PA-09 qualifier)
7. PA Edit 7 (PA-17/41 rewrite)
8. PA Edit 8 (Tier 4 header)
9. PA Edit 9 (Tier 5 questions insertion)
10. PA Edit 10 (multi-coherence guidance)
11. PA Edit 11 (Progressive Zoom Test)
12. PA Edit 12 (Mode 4 question count)
13. PA Edit 13 (Mode 4 team structure)
14. PA Edit 14 (Weaver dual-verdict)
15. PA Edit 15 (Mode 1/2 exclusion)
16. PA Edit 16 (red flags)

**After all edits:** Run both verification checklists. Fix any failures before proceeding.
