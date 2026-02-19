# Case Studies Extract — Builder Reference
Source: `design-system/compositional-core/case-studies/` (8 case studies)
Extracted: 2026-02-17 | Scan time: ~2 min

**CRITICAL WARNING:** These are NOT templates. They are PROCESS PROOFS.
Extract the mechanisms. Ignore the metaphor-specific layouts.
Do NOT read case studies before Phase 3 (metaphor lock-in). Only consult at Phase 5 for divergence verification.

---

## QUICK INDEX

| ID | Score | Metaphor | Primary Tension | Key Mechanisms |
|----|-------|---------|----------------|----------------|
| DD-003 | 32/40 | Islands in ocean | Self-contained topics vs unified doc | Extreme whitespace, horizontal offset, archipelago grouping |
| DD-006 | 36/40 | Fractal self-similarity | Teaching fractal BY BEING fractal | Dense/sparse alternation, spacing compression, border-weight gradient |
| OD-001 | 37/40 | Conversational Q&A | Sparse questions vs dense authoritative answers | Width variation, zone backgrounds, dense/sparse alternation |
| OD-004 | 34/40 | Geological stratification | Certainty gradient (established → speculative) | Border-weight gradient, spacing compression, background progression |
| OD-006 | 37/40 | Meta-documentation feed | Proof-by-demonstration vs claim-by-assertion | Mode-transition breathing, fractal annotation, pattern echo |
| CD-001 | 38/40 | Velocity interleaving | Technical depth vs readability (heavy component overload) | Velocity interleaving, F→Bento transition, CRESCENDO density |
| CD-005 | 38/40 | Sequential axis deployment | Complexity vs clarity across 3 topics | Sequential axis rule, SMOOTH+BRIDGE transitions, WAVE density |
| CD-006 | 39/40 | Meta-tutorial (system teaching itself) | Demonstration vs prescription + system coherence | Sequential axes (5 patterns), fractal at 5 scales, compound combination |

---

## DD-003: Islands — Density Islands
**Score:** 32/40 (lowest DD, but validated include)
**Content:** Database design patterns — 4 independent topics (SQL/NoSQL/KV/Graph)
**Core tension:** Self-contained discrete topics that don't build sequentially — readers need ONE, not all

**What it showcases:** High-density information clusters floating in calm sparse whitespace. Readers navigate by choice, not prescribed path.

**Mechanisms demonstrated:**
- **Extreme whitespace isolation** (80px+ between island groups) — visual "ocean" between land masses
- **Horizontal offset rhythm** (left/right/center alignment alternation) — avoids rigid column stacking
- **Archipelago grouping** (2-column grid for related mini-islands) — distinguishes close-related vs loose-related
- **Self-contained content units** — each island has ALL info readers need (no external dependencies)
- **Border-left semantic signal** (Mechanism #10) — 4px border marks island edge

**Key lesson:** Islands serve MODERATE tension (self-contained topics) best. High-richness content benefits from richer metaphors. Islands = reference docs, decision frameworks, comparison guides, API catalogs. NOT for tutorials or narratives.

**Reusable techniques:** Extreme whitespace, horizontal offsets, sub-grouping grids, self-contained units

---

## DD-006: Fractal — Crown Jewel (20+ inbound references)
**Score:** 36/40 (highest DD)
**Content:** Documentation about self-similarity concept — must DEMONSTRATE what it teaches
**Core tension:** Content teaching fractal density BY BEING fractal at all scales simultaneously

**What it showcases:** Same dense/sparse rhythm repeated at page → section → component → character (4 scales). The page IS the proof.

**Mechanisms demonstrated:**
- **Dense/sparse alternation** (Mechanism #5) — the master rhythm applied at all 4 scales
- **Spacing compression gradient** (Mechanism #4) — 80px (sparse) → 32px → 16px → 4px (code)
- **Border-weight gradient** (Mechanism #1) — 4px/3px/2px/1px encoding hierarchy + scale depth
- **Zone background differentiation** (Mechanism #7) — background progression encodes density level
- **Typographic scale jumping** (Mechanism #11) — ~1.4x ratio between heading levels
- **2-zone component DNA** (Mechanism #2) — dense label + sparse body within EVERY component

**Key lesson:** Fractal requires meta-content alignment (structure must mirror the concept). The 4 scales are not prescriptive — content may need 3, 5, or continuous. Spacing values are metaphor-specific; derive from YOUR perceptual testing.

**Reusable techniques:** Dense/sparse alternation, spacing compression, border-weight gradient, zone backgrounds, typographic scale ratios, 2-zone DNA

---

## OD-001: Conversational Q&A
**Score:** 37/40
**Content:** React Server Components tutorial — 6,200 words, reader arrives with specific questions
**Core tension:** Random-access sparse questions vs sequential dense authoritative answers

**What it showcases:** Explicit Q&A structure where format GENERATES density rhythm naturally. Questions are sparse; answers are dense. No artificial density manipulation needed.

**Mechanisms demonstrated:**
- **Width variation** (Mechanism #6) — 60% width questions (narrow entry points), 100% width answers (immersive)
- **Zone background differentiation** (Mechanism #7) — sparse bg for questions, dense bg for answers; chromatic PULSE
- **Dense/sparse alternation** (Mechanism #5) — Q→A alternation IS the PULSE mechanism
- **Socratic progressive narrowing** — questions progress broad→narrow, mirrors reader exploration

**Key lesson:** Conversational Q&A is for random-access technical docs where section headings ARE reader questions. The Q&A format automatically creates PULSE density — you don't impose it. Width is metaphor-specific; test YOUR content for perceptual sweet spot.

**Reusable techniques:** Width variation, zone backgrounds, binary alternation patterns, question-as-navigation

---

## OD-004: Confidence-Based / Geological
**Score:** 34/40
**Content:** API Best Practices guide — 4,500 words with variable epistemic status
**Core tension:** Established certainty (sparse, terse) vs speculative uncertainty (dense, caveated)

**What it showcases:** Content organized by confidence level uses geological stratification. Deeper = older = more consolidated = more certain. Border-weight inversely encodes confidence uncertainty.

**Mechanisms demonstrated:**
- **Border-weight gradient** (Mechanism #1) — 4px established / 3px probable / 2px speculative / 1px open
- **Spacing compression** (Mechanism #4) — 40px→32px→20px→16px as depth/certainty increases
- **Zone background differentiation** (Mechanism #7) — subtle shift between strata
- **Inverse density-confidence correlation** — certain claims need FEW words, uncertain claims need MANY

**Key lesson:** Certainty gradients justify vertical stratification. The geological metaphor carries dual encoding (depth + stability). 4 layers are specific to THIS content's natural confidence groupings — derive YOUR layer count from YOUR content. Geological vocabulary is NOT reusable.

**Reusable techniques:** Border-weight gradient for hierarchy, spacing compression for depth/priority, inverse density = inverse certainty

---

## OD-006: Meta-Documentation Feed — Crown Jewel
**Score:** 37/40 (726+ citations)
**Content:** KortAI design system documenting itself — 8,000 words
**Core tension:** Prove "Organization IS Density" thesis through demonstration, not argumentation

**What it showcases:** Page uses ALL 5 organizational patterns (one per section), proving that each automatically generates its paired density pattern. Structure is VISIBLE via annotation layer.

**Mechanisms demonstrated:**
- **Mode-transition breathing** (NEW, discovered here) — 48px separator + rule + mode label between sections
- **Fractal annotation layer** (NEW) — persistent sidebar showing Page/Section/Component/Character scale
- **Pattern echo visual index** (NEW) — CSS-only miniature visual signatures in grid
- **Culmination spread** — amplified synthesis section (large title, dark header, retrospective summary)
- **Territorial border-color hover** — flat interactivity (border-color changes, not transform/shadow)
- **Dense/sparse alternation** (Mechanism #5) — section-level fractal (intro→demo→reflection)

**Key lesson:** When content needs to PROVE something about structure, make the page BE the proof. 6 sections are specific to demonstrating 5 OD patterns + synthesis. Meta-documentation only works when content = system documentation. Mode-transition breathing and annotation layer ARE reusable for any multi-modal page.

**Reusable techniques:** Mode-transition breathing, fractal annotation layer, culmination spread, pattern echo, flat hover interactivity

---

## CD-001: Velocity Interleaving — Heavy Component Management
**Score:** 38/40
**Content:** Software architecture philosophy — 5,400 words with 3 heavy component types
**Core tension:** Technical depth (Code + Reasoning + Core Abstraction) vs readability (no velocity overload)

**What it showcases:** When content has multiple HEAVY components (slow reading, high cognitive load), velocity interleaving prevents same-velocity stacking. Critical discovery: type alternation alone is NOT enough; velocity matters more than type.

**Mechanisms demonstrated:**
- **Velocity interleaving** (CD-F-001, discovered here) — Heavy→FAST→Heavy→MEDIUM→Heavy (never Heavy→Heavy)
- **F-Pattern vertical descent** (AD-F-005 CRESCENDO) — narrative arc maps to vertical flow
- **Bento Grid at peak density** (AD-F-009) — climax section uses grid to contain multiple heavy components
- **BRIDGE transition** (AD-F-025) — prose paragraph bridges F-Pattern → Bento (incompatible topologies)
- **Flat sequencing** (N1+N4) — components stack vertically, NEVER nest
- **Composite component pre-composition** (N2) — Reasoning = label+content+citation built in CSS, not HTML
- **CRESCENDO density** — sparse intro→dense middle→breathing outro

**Key lesson:** Component VELOCITY (not type) determines stacking rules. HEAVY = Code blocks, Reasoning blocks, Core Abstractions. FAST = Callouts, badges. MEDIUM = Prose. The specific Heavy→FAST→Heavy pattern is THIS content's distribution — derive YOUR velocity rhythm from YOUR component mix.

**Reusable techniques:** Velocity interleaving rule, F→Bento transition via BRIDGE, flat sequencing, composite pre-composition, CRESCENDO density for narrative arcs

---

## CD-005: Multi-Axis Transition
**Score:** 38/40
**Content:** Design pattern exploration — 4,800 words testing 3 axis patterns sequentially
**Core tension:** Complexity (3 topics, each needing different reading pattern) vs clarity (single readable flow)

**What it showcases:** 3 axis patterns (Z→F→Bento) can coexist sequentially without cognitive whiplash when transition grammar is applied. Each section commits to ONE axis. WAVE density matches section purpose.

**Mechanisms demonstrated:**
- **Sequential axis deployment** (AD-F-024) — each section = ONE axis, no simultaneous axes
- **SMOOTH transition** (AD-F-025) — shared component bridges Z→F (both use callouts, so callout bridges them)
- **BRIDGE transition** (AD-F-025) — prose paragraph bridges F→Bento (incompatible topologies)
- **WAVE density oscillation** — MEDIUM→HIGH→MEDIUM-HIGH matches overview→deep→reference purposes
- **SPATIAL organization** (OD-005) — position-based grouping (top=overview, middle=content, bottom=reference)
- **Velocity interleaving** (CD-F-001) — FAST callouts interleaved with MEDIUM prose in long F-Pattern section

**Key lesson:** SMOOTH transition works when adjacent axis patterns share a component type. BRIDGE works for topologically incompatible axes. Z→F→Bento is specific to THIS content's topic flow — YOUR sections may need different sequences. WAVE density progression derives from section PURPOSE not formula.

**Reusable techniques:** Sequential axis deployment, SMOOTH transition (shared component), BRIDGE transition (prose paragraph), WAVE density for varied section purposes

---

## CD-006: Pilot Migration — Crown Jewel (39/40)
**Score:** 39/40 (highest scored exploration)
**Content:** KortAI documentation tutorial — 6,200 words, meta-tutorial format
**Core tension:** Demonstrate without prescribing + prove all 5 pipeline stages work together

**What it showcases:** Compound multi-axis combination — 5 axis patterns sequentially, fractal density at 5 scales, all 11 component types deployed, meta-tutorial where the page IS what it teaches.

**Mechanisms demonstrated:**
- **Sequential axis deployment** (AD-F-024) — Spiral→Z-Pattern→Bento→F-Pattern→Choreography
- **Transition grammar** (AD-F-025) — BREATHING (after Spiral), SMOOTH (shared component), BRIDGE (prose paragraph)
- **Fractal density at 5 scales** (AD-F-027) — navigation→page→section→component→character
- **2-zone component DNA** — all callouts, code blocks, Core Abstractions use label+body structure
- **Border-weight gradient** — 4px structural headers, 3px section separators, 1px component separators
- **Compound combination** — DD+OD+AD patterns applied simultaneously to each section

**Key lesson:** Meta-tutorial works when content IS about the system. 5 axes, 8 sections, specific section-to-axis mapping are all specific to THIS content's lifecycle structure. Compound combination (simultaneous DD+OD+AD deployment) IS reusable for any CD-tier page.

**Reusable techniques:** Sequential axis deployment (any multi-section page), all 3 transition types (BREATHING/SMOOTH/BRIDGE), fractal density at any scale count, compound dimension combination

---

## CROSS-CUTTING MECHANISM INVENTORY

Mechanisms appearing across multiple case studies (highest reuse value):

| Mechanism | Found In | What It Encodes |
|-----------|----------|----------------|
| Border-weight gradient (#1) | DD-006, OD-004, CD-006 | Hierarchy / confidence / structural importance |
| 2-zone component DNA (#2) | DD-003, DD-006, OD-001, OD-006, CD-006 | Universal label+body structure |
| Spacing compression (#4) | DD-006, OD-004 | Depth / intensity / priority |
| Dense/sparse alternation (#5) | DD-006, OD-001, OD-006 | Rhythmic content flow |
| Zone background differentiation (#7) | DD-006, OD-001, OD-004, OD-006 | Chromatic reinforcement of zones |
| Sequential axis deployment | CD-005, CD-006 | One axis per section, no simultaneous |
| SMOOTH + BRIDGE transitions | CD-005, CD-006 | Cognitive flow between axis changes |
| CRESCENDO density | CD-001, CD-006 | Narrative arc (sparse→dense→breathing) |
| Velocity interleaving | CD-001, CD-005 | Prevents same-velocity component stacking |

---

## KEY LESSONS FOR BUILDERS

1. **Extract mechanisms, not metaphors.** The geological vocabulary, island names, Q&A labels — these are metaphor-specific. The TECHNIQUES (border weights, spacing compression, zone backgrounds) transfer to any metaphor.

2. **Mechanisms resolve tensions.** Each mechanism was chosen because it resolved a specific content tension. Ask: what tension does MY content have? Then match mechanisms.

3. **Velocity matters more than type.** CD-001 proved: don't alternate component TYPES (Code→Reasoning). Alternate component VELOCITIES (HEAVY→FAST→HEAVY).

4. **Format can generate density automatically.** OD-001: Q&A format IS PULSE density. You don't impose it — you choose the right format and density emerges.

5. **Fractal requires all-scale commitment.** DD-006: showing rhythm at only page+section levels = not fractal. Must exist at component and character scales too.

6. **Transitions require intentional grammar.** SMOOTH = shared component bridge. BRIDGE = prose paragraph reset. BREATHING = open space after isolated patterns (Spiral). Choose based on topological compatibility.
