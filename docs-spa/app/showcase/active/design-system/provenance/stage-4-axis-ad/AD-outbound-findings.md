---
stage: 4 — Axis Design (AD)
predecessor: stage-3-organization-od/OD-outbound-findings.md
successor: stage-5-combination-cd/CD-outbound-findings.md (pending)
total_findings: 28
finding_range: AD-F-001 through AD-F-028
---

# AD Outbound Findings

Compiled from 6 builder findings files (Builder A through F) and 3 scribe reports (Wave 1A, 1B, 1C). All 28 findings were produced across 6 AD explorations (AD-001 Z-Pattern, AD-002 F-Pattern, AD-003 Bento Grid, AD-004 Spiral, AD-005 Choreography, AD-006 Compound), executed in 3 waves over 2026-02-09 to 2026-02-10.

---

## Finding Registry

### AD-F-001: Z-Pattern Hero Establishes Axis Geometry Before Content

| Field | Value |
|-------|-------|
| **ID** | AD-F-001 |
| **Title** | Z-Pattern Hero Establishes Axis Geometry Before Content |
| **Source** | AD-001 (Z-Pattern) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class A (binary) — No deviation |
| **Description** | The Z-pattern hero section (4-quadrant grid using golden ratio proportions) must appear BEFORE any Q&A content to establish the axis geometry. The hero is not decorative — it is the Z-pattern's self-declaration, mapping directly to the Gutenberg diagram: Primary Optical (top-left) = definition, Strong Fallow (top-right) = key properties, Weak Fallow (bottom-left) = metadata, Terminal (bottom-right) = value proposition. |
| **Evidence** | HTML: `<div class="z-hero">` with four named grid areas (hero-primary, hero-secondary, hero-diagonal, hero-terminal). CSS: `grid-template-columns: 1.618fr 1fr; grid-template-rows: 1.618fr 1fr;` — golden ratio proportions per EXT-AXIS-Z-001. Sources: R4-055 (establishing shots), R4-083 (hero Z-pattern). |

**Chain Impact:**
- **Consumed by:** CD compound pages using Z-Pattern sections must include the hero self-declaration before Q&A content. Migration agents applying Z-Pattern axis must implement the 4-quadrant golden-ratio hero.
- **Validates:** R4-055 (establishing shots create orientation before content) and R4-083 (hero Z-pattern) at axis-geometry level.
- **Extends:** OD-F-003 (Q&A as PULSE generator) by adding a spatial pre-condition: the PULSE rhythm requires axis geometry to be established FIRST via the hero, before Q&A alternation begins.
- **CD implication:** Any CD page using Z-Pattern axis MUST open with the hero grid. Omitting the hero removes the Gutenberg diagram mapping and weakens the Z-sweep cycle (AD-F-002).

---

### AD-F-002: Z-PULSE Equivalence — Z-Pattern Traversal Naturally Creates PULSE

| Field | Value |
|-------|-------|
| **ID** | AD-F-002 |
| **Title** | Z-PULSE Equivalence |
| **Source** | AD-001 (Z-Pattern) |
| **Severity** | N/A (Validation) |
| **Classification** | Class A (binary) — No deviation |
| **Description** | Z-pattern traversal and PULSE rhythm are not two separate phenomena — they are the SAME phenomenon viewed from different perspectives. Each Z-sweep cycle IS one PULSE beat: the question (sparse zone, narrow width, heavy serif type) is the inhale, and the answer (dense zone, full width, light sans type) is the exhale. Z-pattern axis geometry does not need to be "paired with" PULSE — it IS PULSE expressed spatially. |
| **Evidence** | Q&A alternation creates sparse-dense rhythm (PULSE per DD-F-001). Width variation (60% Q to 100% A) creates TIDAL (per DD-F-005). Typography weight shift (Instrument Serif 600 to Inter 400) creates velocity (EXT-AXIS-Z-002). Z-diagonal IS the PULSE transition point. Essence callout explicitly states this equivalence. |

**Chain Impact:**
- **Consumed by:** CD combination rules must treat Z-Pattern and PULSE as a single phenomenon, not as two layers to coordinate. Any CD page using Z-Pattern axis inherits PULSE automatically.
- **Validates:** DD-F-001 (PULSE), DD-F-005 (TIDAL), OD-F-003 (Q&A as PULSE generator) — all three confirmed as one phenomenon via the Z-sweep cycle mechanism.
- **Extends:** OD-F-005 (Organization IS Density) to 3-way identity by proving axis IS the spatial expression of the same phenomenon. This is the first evidence for AD-F-004 (3-way unification).
- **CD implication:** CD agents should NOT apply separate PULSE density manipulation to Z-Pattern sections. The Z-sweep cycle generates PULSE intrinsically. Additional density layering would be redundant or destructive.

---

### AD-F-003: Micro-Z Grid Validated at Component Scale (DD-F-006 Fractal)

| Field | Value |
|-------|-------|
| **ID** | AD-F-003 |
| **Title** | Micro-Z Grid Validated at Component Scale |
| **Source** | AD-001 (Z-Pattern) |
| **Severity** | N/A (Validation) |
| **Classification** | Class A (binary) — No deviation |
| **Description** | The micro-Z pattern (code+explanation side-by-side in a 2-column grid within answer sections) successfully implements DD-F-006 fractal self-similarity at the component scale. Code block occupies "primary optical" position (top-left = dense), explanation occupies "strong fallow" position (top-right = sparse). Responsive collapse at 768px stacks code above explanation, preserving source order (AD Convention Section 16.1). |
| **Evidence** | CSS: `.micro-z { display: grid; grid-template-areas: "code-primary explain-primary" "code-secondary explain-secondary"; grid-template-columns: 1fr 1fr; }`. Direct implementation of EXT-AXIS-Z-005. Open question: micro-Z works well for code+explanation pairs but may create cognitive overhead for non-code content. |

**Chain Impact:**
- **Consumed by:** CD combination rules for code-heavy sections. Migration agents handling code+explanation pairs should use the micro-Z grid.
- **Validates:** DD-F-006 (fractal self-similarity) at the component scale specifically within Z-Pattern context. Confirms fractal compliance is axis-agnostic at the component scale.
- **Extends:** EXT-AXIS-Z-005 from research hypothesis to validated implementation. Adds a content-type constraint: micro-Z is optimized for code+explanation, not general content pairs.
- **CD implication:** CD agents should use micro-Z for code+explanation pairs within Z-Pattern sections but avoid it for non-code content. The open question about cognitive overhead remains for CD to evaluate.

---

### AD-F-004: 3-Way Unification Validated — Axis, Organization, and Density Are Not Independent

| Field | Value |
|-------|-------|
| **ID** | AD-F-004 |
| **Title** | 3-Way Unification Validated |
| **Source** | AD-001 (Z-Pattern) |
| **Severity** | HIGH (Primary finding of AD-001; structural consequence for CD phase) |
| **Classification** | Class A (binary) — No deviation. PRIMARY finding of AD-001. |
| **Description** | The central hypothesis of AD-001 is confirmed: Z-Pattern axis geometry SERVES the Conversational org-pattern's PULSE+TIDAL density. These are not three independent dimensions — they are three names for one underlying structure. If axis geometry is not independent of organization and density, then the AD phase is not adding a NEW dimension — it is expressing the SAME dimension spatially. CD combinations may be fewer than expected. |
| **Evidence** | Four structural proofs: (1) Z-diagonal = conversational turn (EXT-AXIS-Z-004) — geometrically identical. (2) Width variation = TIDAL = Z-asymmetry (OD-F-001 + DD-F-005 + R2-1.1) — one CSS property (`max-width: 60%`) serves both functions simultaneously. (3) PULSE = Z-cycle (DD-F-001 + R4-038). (4) Typography velocity = Z-position = PULSE tempo (EXT-AXIS-Z-002 + R2-5.1). |

**Chain Impact:**
- **Consumed by:** ALL downstream stages. This is the PRIMARY finding of AD-001 and the first proof of the central AD hypothesis. CD combination rules must account for the 3-way identity: combining axis patterns means combining org-density configurations simultaneously.
- **Validates:** OD-F-005 (Organization IS Density) and DD-F-012 (density implies axis preferences). ELEVATES DD-F-012 from "serves" to "IS."
- **Extends:** The 2-way identity (OD-F-005: organization=density) to a 3-way identity (axis=organization=density). Establishes the foundational claim confirmed by all subsequent AD explorations.
- **CD implication:** CD combinations may be FEWER than expected. If axis, organization, and density are not independent, the combinatorial space is not (5 axes x 5 orgs x 6 densities) but rather ~5-10 natural pairings. CD must explore NATURAL combinations, not arbitrary permutations.

---

### AD-F-005: Tension Meter as CRESCENDO Position Indicator in F-Pattern Context

| Field | Value |
|-------|-------|
| **ID** | AD-F-005 |
| **Title** | Tension Meter as CRESCENDO Position Indicator |
| **Source** | AD-002 (F-Pattern) |
| **Severity** | MEDIUM (Design decision with downstream reuse implications) |
| **Classification** | Class B (requires judgment) — Intentional design choice within convention bounds |
| **Description** | The tension meter (inherited from OD-F-011) functions differently in the F-pattern axis context: it tracks CRESCENDO density position (which Freytag act the reader occupies on the sparse-to-dense spectrum), not just narrative position. Discovery: tension meter fills fully by Act IV (not Act V) because narrative tension resolves during falling action; CRESCENDO density peaks at Act III. Tension leads density. |
| **Evidence** | 5 segments (one per Freytag act): Act I = 1/5, Act II = 2/5, Act III = 4/5 (not 3/5 — climax is further along density curve), Act IV = 5/5 (resolved), Act V = 5/5 (complete). Tension and density curves are NOT identical — tension leads density. |

**Chain Impact:**
- **Consumed by:** CD pages using F-Pattern sections with narrative organization. Migration agents implementing tension meters in narrative content.
- **Validates:** OD-F-011 (tension meters as narrative wayfinding) in the axis context. Extends OD-F-011 by showing that in F-Pattern, the tension meter tracks CRESCENDO density position, not just narrative position.
- **Extends:** Adds the discovery that tension and density are related but NOT identical curves — tension leads density. This asymmetry has implications for pacing in CD compound pages.
- **CD implication:** CD agents implementing tension meters in narrative-F-Pattern sections should calibrate to density position (peaks at Act III), not narrative position (peaks at Act V). Tension-as-density-indicator is specific to F-Pattern; other patterns may have different tension-density relationships.

---

### AD-F-006: Typography Compression Across Acts Mirrors CRESCENDO Density

| Field | Value |
|-------|-------|
| **ID** | AD-F-006 |
| **Title** | Typography Compression Across Acts Mirrors CRESCENDO |
| **Source** | AD-002 (F-Pattern) |
| **Severity** | N/A (Observation) |
| **Classification** | Class A (binary) — No deviation |
| **Description** | When F-pattern headings combine with CRESCENDO density, the act-zone padding compresses across acts (64px in Act I to 32px in Act III). The compression happens at the act boundary level (inter-heading spacing) rather than within individual headings (intra-heading margin), preserving readability within each act while creating progressive density between acts. |
| **Evidence** | CSS: `.act-zone--exposition { padding: var(--space-16) var(--space-6); }` (64px), `.act-zone--rising { padding: var(--space-12) var(--space-6); }` (48px), `.act-zone--climax { padding: var(--space-8) var(--space-6); }` (32px). Individual heading margin-bottom remains constant at 24px. R4-039 + R4-048 + R2-5.4. |

**Chain Impact:**
- **Consumed by:** CD pages using F-Pattern + CRESCENDO pairing. Migration agents implementing narrative arc sections with progressive density.
- **Validates:** DD-F-002 (CRESCENDO: sparse-to-dense progression) and OD-F-010 (typography size reduction mirrors density) at the axis-geometry level.
- **Extends:** Adds the distinction between INTER-heading spacing (compresses across acts) and INTRA-heading spacing (remains constant). This two-level spacing model preserves readability while creating progressive density.
- **CD implication:** CD agents must maintain the two-level spacing model: act-zone padding compresses progressively (64px->48px->32px) but individual heading margin-bottom remains fixed at 24px. Compressing both levels simultaneously would destroy readability.

---

### AD-F-007: F-Pattern Vertical Descent Naturally Selects for Left-Spine Landmarks

| Field | Value |
|-------|-------|
| **ID** | AD-F-007 |
| **Title** | F-Pattern Vertical Descent Selects Left-Spine Landmarks |
| **Source** | AD-002 (F-Pattern) |
| **Severity** | N/A (Observation) |
| **Classification** | Class A (binary) — No deviation |
| **Description** | During the F-pattern's vertical descent phase (third scan), readers scan only the left edge. Only left-aligned headings with border-left accents are visible. The vertical descent IS the peak-density scanning behavior: readers respond to increasing density by narrowing attention. F-pattern degradation and CRESCENDO density increase are the same phenomenon from two perspectives (reader's behavior vs content's density profile). |
| **Evidence** | Left-spine heading hierarchy per EXT-AXIS-F-003: H2 = Instrument Serif + 4px red left border, H3 = Instrument Serif italic (no border), H4 = Inter uppercase with letter-spacing 0.05em. Each signal is redundant — multiple differentiation ensures scanning at speed catches the landmark. |

**Chain Impact:**
- **Consumed by:** CD pages with F-Pattern sections. Migration agents implementing scannable long-form content.
- **Validates:** The ANTI-PHYSICAL identity at the behavioral level — F-pattern degradation (a reader behavior, not a CSS feature) is the same phenomenon as CRESCENDO density increase.
- **Extends:** Adds the principle that left-spine landmarks must use REDUNDANT differentiation (font + border + spacing) to be catchable during vertical scanning at speed. Single-signal differentiation is insufficient.
- **CD implication:** CD agents must preserve left-spine redundant differentiation in F-Pattern sections. If combining F-Pattern with other axis patterns, the left-spine landmarks must remain undisturbed in the F-Pattern section.

---

### AD-F-008: Decision Matrix Density Validates CRESCENDO Peak Within F-Pattern

| Field | Value |
|-------|-------|
| **ID** | AD-F-008 |
| **Title** | Decision Matrix Validates CRESCENDO Peak |
| **Source** | AD-002 (F-Pattern) |
| **Severity** | N/A (Validation) |
| **Classification** | Class A (binary) — No deviation. Fulfills OD-F-013. |
| **Description** | The decision matrix at Act III (climax) is the densest single component (6 rows x 4 columns = 24 data cells with color-coded HIGH/MID/LOW scores). It IS the CRESCENDO peak expressed as a single component. It deliberately arrests the F-pattern's vertical descent with a visually distinctive table, forcing horizontal re-engagement. All three dimensions converge at one point: F-pattern descent interrupted (axis), narrative climax (organization), densest component (CRESCENDO peak). |
| **Evidence** | HTML: `<table class="decision-matrix">` with dark header (inverted palette: white text on #1A1A1A), 6 data rows with color-coded scores. 3px structural border (Cat 1, not 2px anti-pattern OD-F-AP-001). No vertical borders. R4-051, R4-098, R4-042. |

**Chain Impact:**
- **Consumed by:** CD pages using F-Pattern + CRESCENDO pairing with decision matrices at climax. Migration agents placing comparison tables.
- **Validates:** OD-F-013 (decision matrices as natural climax) at the axis-geometry level. Confirms that the decision matrix IS the CRESCENDO peak expressed as a single component, and that it deliberately arrests F-pattern descent.
- **Extends:** Adds the 3-way convergence proof: F-pattern descent interrupted (axis) + narrative climax (organization) + densest component (density) all converge at one point. This is a concrete instance of AD-F-004's 3-way unification.
- **CD implication:** CD agents placing decision matrices must position them at the CRESCENDO peak of narrative sections. The decision matrix is not a utility component — it is a structural climax element. Placing it mid-narrative would weaken both the CRESCENDO build and the F-pattern interruption effect.

---

### AD-F-009: Bento Grid CONTAINS Islands

| Field | Value |
|-------|-------|
| **ID** | AD-F-009 |
| **Title** | Bento Grid CONTAINS Islands |
| **Source** | AD-003 (Bento Grid) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class A (Confirming) |
| **Description** | The bento grid's rigid structure does not fight the ISLANDS density pattern — it provides the structural container that gives ISLANDS their definition. Grid cells ARE dense islands; grid gaps ARE sparse ocean. The rigidity prevents the "visual chaos" failure mode where islands drift into irregular arrangements. 3-way unification confirmed through SPATIAL equivalence (distinct from Wave 1A's TEMPORAL equivalence). |
| **Evidence** | CSS `gap: 24px` in bento grid is literally "empty space between dense content clusters" — the definition of ISLANDS. Grid cells and gaps are orthogonal concerns to island content density. The mechanism is spatial containment: grid defines topology; ISLANDS fills content within that topology. |

**Chain Impact:**
- **Consumed by:** CD pages using Bento Grid axis. Migration agents implementing task-based content layouts with grid structures.
- **Validates:** DD-F-003 (ISLANDS: dense clusters in sparse space) at the axis level. The bento grid provides the STRUCTURAL container that prevents the "visual chaos" failure mode where islands drift.
- **Extends:** Reframes the bento-ISLANDS relationship from "pairing" to "containment" — the grid does not fight ISLANDS, it DEFINES the topology within which ISLANDS operates.
- **CD implication:** CD agents should use bento grids when ISLANDS density is required and spatial containment is important. The grid's rigidity is a FEATURE for ISLANDS (prevents drift), not a limitation. Do not soften the grid to add variety — use internal layout variation (AD-F-011) instead.

---

### AD-F-010: Cell Size Hierarchy IS ISLANDS Hierarchy

| Field | Value |
|-------|-------|
| **ID** | AD-F-010 |
| **Title** | Cell Size Hierarchy IS ISLANDS Hierarchy |
| **Source** | AD-003 (Bento Grid) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class A (Confirming) |
| **Description** | A 2x2 grid cell occupying 4x the area of a 1x1 cell creates a proportionally larger island. Size = density = importance — three properties that are one phenomenon in three vocabularies. Confirms R4-026 (varied sizes create hierarchy) and extends OD-F-005 into axis dimension. Soul constraint (sharp edges) makes size difference MORE visible because sharp-edged cells have crisper boundaries. |
| **Evidence** | Bento grid span syntax (`grid-column: span 2; grid-row: span 2`) achieves hierarchy through SIZE alone — no shadows, no gradients, no decoration. Anti-pattern contrast: Apple's bento uses rounded corners + shadows; KortAI's bento uses sharp edges + size differentiation. IS-1 principle validated. |

**Chain Impact:**
- **Consumed by:** CD pages using bento grids with content hierarchy. Migration agents creating dashboard or overview layouts.
- **Validates:** OD-F-005 (Organization IS Density) at the spatial level — cell size IS density IS importance. Three properties, one phenomenon, three vocabularies.
- **Extends:** R4-026 (varied sizes create hierarchy) and OD-F-005 by showing that the SOUL CONSTRAINT (sharp edges) makes size hierarchy MORE visible, not less. Sharp-edged cells have crisper boundary definition than rounded cells.
- **CD implication:** CD agents must use cell SIZE as the primary hierarchy mechanism in bento grids. Do not add shadows, gradients, or other depth cues — the soul constraint (sharp edges + no shadows) makes size differentiation the sole and sufficient hierarchy signal.

---

### AD-F-011: Internal Layout Variation Creates Fractal ISLANDS

| Field | Value |
|-------|-------|
| **ID** | AD-F-011 |
| **Title** | Internal Layout Variation Creates Fractal ISLANDS |
| **Source** | AD-003 (Bento Grid) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class B (Extending) |
| **Description** | Each bento grid cell can use a DIFFERENT internal layout template (vertical steps, code-split, annotated, comparison) while maintaining consistent external grid structure. This creates fractal ISLANDS at 4 scales. Internal layout variation (Templates A/B/C/D from EXT-AXIS-B-004) is an anti-monotony mechanism that does NOT break the fractal — like different "species" on different islands. Directly addresses OD-003 structural monotony deficit (EXT-TASK-013). |
| **Evidence** | ISLANDS pattern at each CSS scale: `margin-bottom: 80px` (page), `gap: 24px` (section), `padding: 24px` (component), `line-height: 1.5` (character). Extends DD-F-006 fractal self-similarity by showing how ISLANDS specifically manifests at each scale. |

**Chain Impact:**
- **Consumed by:** CD pages using bento grids with diverse content types. Migration agents needing anti-monotony in grid layouts.
- **Validates:** DD-F-006 (fractal self-similarity) at 4 CSS scales within bento context. Confirms fractal compliance is maintained when internal layouts vary.
- **Extends:** DD-F-006 by showing how ISLANDS specifically manifests at each CSS scale (page/section/component/character). Also directly addresses OD-003's structural monotony deficit (EXT-TASK-013) — internal layout variation is the anti-monotony mechanism.
- **CD implication:** CD agents using bento grids should apply different internal layout templates (A/B/C/D) to different cells. The external grid structure remains rigid; the internal variation prevents monotony. This is like "different species on different islands" — variety within containment.

---

### AD-F-012: Compound Bento Density — Grid as Multi-Scale Container

| Field | Value |
|-------|-------|
| **ID** | AD-F-012 |
| **Title** | Compound Bento Density |
| **Source** | AD-003 (Bento Grid) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class B (Extending) |
| **Description** | Bento grid enables COMPOUND density by operating BOOKENDS and ISLANDS simultaneously at different scales: BOOKENDS at page scale (dense header/footer bracket sparse middle), ISLANDS at section scale (discrete task cells form islands in grid gap ocean). This is ONE structural phenomenon where the grid serves both patterns at once — not two separate patterns applied sequentially. Grid's source order guarantees BOOKENDS start/end; grid's cell+gap structure guarantees ISLANDS clusters/gaps. |
| **Evidence** | Extends OD-003 compound density finding (ISLANDS arrangement + CRESCENDO sequence) by showing compound density also works with ISLANDS + BOOKENDS, and that the axis grid is the enabling mechanism for multi-scale compound patterns. |

**Chain Impact:**
- **Consumed by:** CD compound pages that need multi-scale density patterns. This is a key finding for how CD should think about scale-layering.
- **Validates:** OD-003 compound density (ISLANDS + CRESCENDO) and extends it to ISLANDS + BOOKENDS.
- **Extends:** Shows that compound density can operate at DIFFERENT scales simultaneously (BOOKENDS at page scale, ISLANDS at section scale) without conflict, because the grid enables orthogonal scale operation.
- **CD implication:** CD agents can layer density patterns across scales: one pattern governs page-level structure (e.g., BOOKENDS), another governs section-level structure (e.g., ISLANDS). The bento grid makes this possible by operating at both scales simultaneously via source order (BOOKENDS) and cell structure (ISLANDS).

---

### AD-F-013: Angular Spiral Resolves the Geological-Radial Tension

| Field | Value |
|-------|-------|
| **ID** | AD-F-013 |
| **Title** | Angular Spiral Resolves Geological-Radial Tension |
| **Source** | AD-004 (Spiral) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class A (Confirming) |
| **Description** | A mathematical Fibonacci spiral conflicts with GEOLOGICAL density's horizontal stratification. However, the angular approximation (EXT-AXIS-SP-003) transforms the spiral into nested rectangles with right-angle boundaries — which ARE geological strata. The "spiral" is not a curve; it is a sequential reading path through stacked rectangular strata. The soul constraint (`border-radius: 0`) forces the angular approximation, which resolves the tension. |
| **Evidence** | Golden ratio (1.618) governs proportion between rings: inner rings (core) = less space (denser), outer rings = more space (sparser) — IS the GEOLOGICAL density gradient. R4-059 (golden ratio proportions), R4-062 (focal point), EXT-AXIS-SP-003 (angular approximation), DD-F-004 (GEOLOGICAL layers). |

**Chain Impact:**
- **Consumed by:** CD pages using Spiral axis with confidence-based organization. Migration agents implementing stratified confidence layouts.
- **Validates:** The soul constraint as GENERATIVE, not restrictive — `border-radius: 0` forces the angular approximation, which IS the mechanism that resolves the geological-radial tension.
- **Extends:** Shows that the spiral "label" is conceptual, not literal. The implementation is nested rectangles with right-angle boundaries that happen to follow a spiral reading path.
- **CD implication:** CD agents should implement spiral axis as nested rectangular strata with golden-ratio proportions, not as curved paths. The angular approximation is not a compromise — it is the correct implementation for a system with GEOLOGICAL density and ANTI-PHYSICAL identity.

**Perceptual Caveat (DM-016):** Independent perceptual auditors (2/2 concordance) confirm the GEOLOGICAL metaphor is delivered effectively — viewers perceive "four stacked horizontal layers" with clear confidence stratification. However, the SPIRAL label is aspirational: viewers see "stepped left borders," not a "spiral path." The naming/framing tension should be noted for CD: the metaphor works better when applied conceptually (e.g., bento grid's center-of-gravity spiral) rather than as literal spatial layout. The literal spiral layout (AD-004) was the weakest exploration perceptually despite being structurally sound.

---

### AD-F-014: Border-Weight Gradient IS the Geological Encoding

| Field | Value |
|-------|-------|
| **ID** | AD-F-014 |
| **Title** | Border-Weight Gradient IS Geological Encoding |
| **Source** | AD-004 (Spiral) |
| **Severity** | N/A (Discovery) |
| **Classification** | Class A (Confirming) |
| **Description** | The border-weight gradient (4px/3px/1px) IS the geological depth signal encoded as a flat 2D property. 4px = bedrock (heaviest, most certain), 3px = subsoil (strong but subordinate), 1px = atmosphere (lightest, most speculative). Answers: "How do you represent geological depth without violating ANTI-PHYSICAL identity?" The gradient skips 2px entirely (4px/3px/1px) to avoid even the appearance of the 2px epidemic anti-pattern (OD-F-AP-001). |
| **Evidence** | `border-left` operates entirely on the 2D plane — no z-axis component, no shadow, no depth simulation. Each width carries specific semantic meaning (confidence level), not arbitrary variation. Validates EXT-AXIS-SP-002. R4-042, R4-045. Exception documentation: this is the ONE context where progressive border widths are semantic, not epidemic (per DD-F-016). |

**Chain Impact:**
- **Consumed by:** CD pages using confidence-based organization. Migration agents implementing stratified content with confidence levels.
- **Validates:** EXT-AXIS-SP-002 and provides a soul-compliant mechanism for encoding depth/confidence as a flat 2D property — no z-axis, no shadows, no depth simulation.
- **Extends:** DD-F-016 (inconsistent borders) by carving out a specific EXCEPTION: progressive border widths (4px/3px/1px) are SEMANTIC when encoding confidence levels, not arbitrary variation. The 2px skip explicitly avoids OD-F-AP-001 (2px epidemic).
- **CD implication:** CD agents may use the 4px/3px/1px border-weight gradient ONLY for confidence encoding. Any other use of progressive border widths must be justified. The 2px value remains prohibited for structural borders.

**Perceptual Validation (DM-015):** Both independent perceptual auditors called the border-weight gradient (4px/3px/1px, skipping 2px) the page's "crown jewel" and "genuine design innovation." The geological encoding is perceived as intended: auditors confirmed that border weight communicates confidence level clearly and intuitively. This adds empirical perceptual evidence to the structural argument already in the finding.

---

### AD-F-015: Confidence-Proportional Spacing Creates CRESCENDO Whitespace

| Field | Value |
|-------|-------|
| **ID** | AD-F-015 |
| **Title** | Confidence-Proportional Spacing Creates CRESCENDO Whitespace |
| **Source** | AD-004 (Spiral) |
| **Severity** | N/A (Observation) |
| **Classification** | Class B (Extending) |
| **Description** | Spacing within each spiral stratum correlates with confidence level, creating a CRESCENDO of whitespace from core (dense, minimal) to edge (sparse, generous). CRESCENDO and GEOLOGICAL are the same gradient viewed from two perspectives: structural (layers) vs rhythmic (progressive intensity). Extends OD-F-005 to axis level: spatial allocation IS density gradient IS confidence encoding. |
| **Evidence** | Established: padding/gap 24px (tight). Probable: 32px. Speculative: 40px. Open: padding 48px/gap 64px. Each follows spacing token scale (--space-6 through --space-16). Spacing IS confidence signal. R4-039, R2-1.5, R2-2.3, EXT-AXIS-SP-004, DD-F-002. |

**Chain Impact:**
- **Consumed by:** CD pages using spiral/confidence organization. Migration agents implementing confidence-stratified content.
- **Validates:** DD-F-002 (CRESCENDO) within GEOLOGICAL structure — CRESCENDO whitespace operates as an inner gradient within the geological layers.
- **Extends:** OD-F-005 to the axis level by showing that spacing allocation IS density gradient IS confidence encoding — three properties, one phenomenon.
- **CD implication:** CD agents implementing confidence strata must use the progressive spacing scale (24px/32px/40px/48px) to encode confidence. Uniform spacing across strata would destroy the confidence signal. The spacing tokens are not arbitrary — they are semantic.

---

### AD-F-016: Spiral Reading Order ENHANCES Geological Layering

| Field | Value |
|-------|-------|
| **ID** | AD-F-016 |
| **Title** | Spiral Reading Order ENHANCES Geological Layering |
| **Source** | AD-004 (Spiral) |
| **Severity** | HIGH (Stress-test answer — validates 3-way unification for AD-004) |
| **Classification** | Class A (Confirming) — STRESS-TEST ANSWER |
| **Description** | A spiral CAN be geological. The angular spiral preserves geological sequence (Bedrock to Atmosphere in source order), allocates proportional space via golden ratio, and adds a second dimension within each stratum (golden-ratio two-column grid). The soul constraint (no curves) is not merely compatible with geological layering — it is the mechanism that makes the equivalence work. Spiral geometry (axis) + GEOLOGICAL density (density) + confidence organization (org) are the same phenomenon. |
| **Evidence** | (1) Geological strata are inherently sequential; angular spiral preserves sequence. (2) Spiral adds golden-ratio sub-layout within each stratum (1fr + 0.618fr), creating DD-F-006 fractal self-similarity. (3) Dual traversability: inward = CRESCENDO of increasing density; outward = inverse CRESCENDO. (4) Soul constraint forces angular approximation which IS geological stratification. R4-073, R4-036, R2-6.3, DD-F-004, DD-F-006. |

**Chain Impact:**
- **Consumed by:** CD pages using spiral axis. This is the STRESS-TEST ANSWER for AD-004 — it proves the 3-way unification holds for the most challenging axis pattern.
- **Validates:** AD-F-004 (3-way unification) at the spiral level, which was the hardest case (a spiral seems incompatible with geological layers). The soul constraint is the resolving mechanism.
- **Extends:** DD-F-006 fractal by showing golden-ratio sub-layout (1fr + 0.618fr) creates fractal self-similarity WITHIN each geological stratum. Adds dual traversability: inward = CRESCENDO, outward = inverse CRESCENDO.
- **CD implication:** CD agents may use spiral axis for confidence-based content with confidence that the 3-way unification holds. The angular approximation is not a fallback — it is the mechanism that makes spiral + geological + confidence work as one phenomenon.

---

### AD-F-017: Kinetic Equivalence

| Field | Value |
|-------|-------|
| **ID** | AD-F-017 |
| **Title** | Kinetic Equivalence |
| **Source** | AD-005 (Choreography) |
| **Severity** | HIGH (Extends 3-way unification to 4-way) |
| **Classification** | Class B (Extending — adds 4th equivalence mechanism) |
| **Description** | Axis direction change IS density state change — they are the same event, not correlated events. The diagonal clip-path that signals "descending into detail" simultaneously marks the transition from sparse hub to dense spoke. This is not temporal (scanning speed), spatial (cell size), or proportional (ratio nesting). It is kinetic: the act of changing direction is the act of changing density state. Extends 3-way unification to 4-way: temporal + spatial + proportional + kinetic. |
| **Evidence** | Diagonal clip-path transition zone between hub and spoke is both compositional axis signal (direction change) and density function (breathing zone). Removing diagonal and replacing with border preserves density WAVE but loses axis direction encoding. Density is token-dependent; direction is geometry-dependent. Combined, they are perceptually indistinguishable. |

**Chain Impact:**
- **Consumed by:** CD pages using choreography axis. This finding extends the 3-way unification to 4-way by adding KINETIC equivalence.
- **Validates:** AD-F-004 (3-way unification) and extends it. The kinetic mechanism is distinct from temporal, spatial, and proportional — it operates through DIRECTION CHANGE, not content volume, timing, or space.
- **Extends:** The equivalence model from 3 mechanisms to 4. This was the most surprising finding of AD-005: density is not just about what the content IS, but about the reader's attentional trajectory through it.
- **CD implication:** CD agents should treat diagonal clip-path transitions as dual-encoded signals (axis direction + density state). Removing the diagonal and replacing with a border preserves WAVE density but loses kinetic direction encoding. Both signals should be preserved in CD compound layouts.

---

### AD-F-018: Diagonal as Dual Signal

| Field | Value |
|-------|-------|
| **ID** | AD-F-018 |
| **Title** | Diagonal as Dual Signal |
| **Source** | AD-005 (Choreography) |
| **Severity** | N/A (New discovery, no precedent) |
| **Classification** | Class A (New discovery) |
| **Description** | The `clip-path: polygon()` diagonal serves as a dual-encoded signal: simultaneously a compositional accent (breaking rectangular monotony per R4-127) AND a density transition marker (boundary between sparse and dense WAVE phases). No prior AD exploration has a single CSS property encoding both axis direction AND density phase. May be unique to choreography because choreography is the only axis pattern where the transition mechanism itself is a design element rather than whitespace. |
| **Evidence** | `polygon(0 0, 100% 0, 100% 85%, 0 100%)` creates slope that (1) breaks rectangular monotony (R4-126/R4-131), and (2) marks hub-to-spoke density transition (EXT-AXIS-CH-003). At mobile, `clip-path: none` removes compositional function but `border-top: 3px solid` replaces density function — proving the two signals are separable. |

**Chain Impact:**
- **Consumed by:** CD pages using choreography axis at both desktop and mobile viewports. Migration agents implementing hub-spoke layouts.
- **Validates:** R4-126/R4-131 (breaking rectangular monotony) and EXT-AXIS-CH-003 (hub-spoke density transition).
- **Extends:** No prior AD finding has a single CSS property encoding BOTH axis direction AND density phase. This is unique to choreography because the transition mechanism itself is a design element.
- **CD implication:** CD agents implementing responsive choreography must provide BOTH signals at mobile: the border replaces the diagonal's density function, but the axis direction signal is lost. CD should consider whether additional mobile-specific signals (e.g., color change, spacing shift) can compensate for the lost diagonal direction encoding.

---

### AD-F-019: WAVE Preservation is Density-Token-Dependent, Not Geometry-Dependent

| Field | Value |
|-------|-------|
| **ID** | AD-F-019 |
| **Title** | WAVE Preservation is Token-Dependent |
| **Source** | AD-005 (Choreography) |
| **Severity** | MEDIUM (Strengthens OD-F-005 at axis level) |
| **Classification** | Class B (Extending) |
| **Description** | Responsive collapse (4-to-2-to-1 columns) removes all axis geometry but WAVE density oscillation persists. Hub remains sparse and spoke remains dense because density is controlled by spacing tokens (`--space-6`, `--space-between`, `--space-chapter`), not by column count or clip-path geometry. Axis geometry is dispensable for density; spacing tokens are sufficient. Geometry gives the WAVE its perceptual character; tokens give it measurable reality. |
| **Evidence** | Desktop hub: 4 columns, 24px gap, horizontal scan = SPARSE. Mobile hub: 1 column, 24px gap, vertical scan = STILL SPARSE (same gap token). Desktop spoke: 860px constrained = DENSE. Mobile spoke: full-width = STILL DENSE (same content density tokens). |

**Chain Impact:**
- **Consumed by:** CD responsive design rules. Migration agents implementing multi-viewport layouts.
- **Validates:** OD-F-005 (Organization IS Density) at the responsive level — density survives axis geometry removal because it is token-dependent, not geometry-dependent.
- **Extends:** Separates the two aspects of density: geometry gives WAVE its perceptual CHARACTER (how it looks), while spacing tokens give it measurable REALITY (whether hub is actually sparse and spoke is actually dense). This has major CD implications for responsive design.
- **CD implication:** CD responsive breakpoints can collapse axis geometry without destroying density patterns, AS LONG AS spacing tokens are preserved. This means CD agents should focus responsive adaptation on geometry (column count, clip-path) not tokens (gap, padding, margin). Density tokens should remain constant across breakpoints.

---

### AD-F-020: Choreography's "Movement" is Reader Movement Through Static Structure

| Field | Value |
|-------|-------|
| **ID** | AD-F-020 |
| **Title** | Choreography is Reader Attention Movement |
| **Source** | AD-005 (Choreography) |
| **Severity** | HIGH (Identity clarification — resolves the choreography paradox) |
| **Classification** | Class A (Identity clarification) |
| **Description** | "Choreography" means choreography of the READER's attention through static content structure, not CSS-animated visual elements. Resolves the choreography paradox: how can "movement" be a design axis in a system with an ANTI-PHYSICAL identity? The reader moves; the content does not. All axis patterns should be understood as static structural choreography of reader attention, not animation frameworks. |
| **Evidence** | 20 CONDITIONAL PASS R-4 findings (highest of any AD) — every one required reinterpretation from "visual movement" to "structural movement." Cinematic "shot progression" = spacing changes. "Slow panning" = generous whitespace. "Quick cuts" = abrupt section transitions. 8 SOUL FAIL findings explicitly document the boundary: any transition implying physical object behavior fails the soul test. |

**Chain Impact:**
- **Consumed by:** ALL downstream stages. This is an IDENTITY CLARIFICATION that constrains how "movement" and "choreography" terminology should be interpreted system-wide.
- **Validates:** The ANTI-PHYSICAL identity at the deepest level — AD-005 had 20 CONDITIONAL PASS and 8 SOUL FAIL R-4 findings, the highest reinterpretation burden of any AD exploration.
- **Extends:** Resolves the choreography paradox: "movement" in a static system means reader ATTENTION movement through static structure. This reinterpretation applies to all axis patterns: Z-sweep, F-descent, spiral traversal are all attention movements, not visual animations.
- **CD implication:** CD agents must interpret ALL "movement" terminology as reader attention choreography through static structure. Any CSS animation, transform, or transition that implies physical object behavior FAILS the soul test. Static structural variation (spacing changes, border shifts, width transitions) is the correct implementation of "movement."

---

### AD-F-021: Triple Equivalence Holds at Compound Scale

| Field | Value |
|-------|-------|
| **ID** | AD-F-021 |
| **Title** | Triple Equivalence Holds at Compound Scale |
| **Source** | AD-006 (Compound) |
| **Severity** | HIGH (Compound-scale validation of central hypothesis) |
| **Classification** | Class B (Extending) |
| **Description** | Changing axis pattern per section automatically changes density AND organization with zero manual density manipulation. Section 1 (Z-Pattern) creates PULSE; Section 2 (F-Pattern) creates CRESCENDO; Section 3 (Bento) creates ISLANDS; Section 4 (Spiral) creates GEOLOGICAL; Section 5 (Choreography) creates WAVE. Organization = Density = Axis holds at compound scale exactly as at individual pattern scale. |
| **Evidence** | No manual density manipulation — each density emerges from its axis choice alone. OD-F-005, OD-F-MP-001, DD-F-010, DD-F-012, EXT-AXIS-X-001, R4-095, R4-080. |

**Chain Impact:**
- **Consumed by:** CD combination rules. This is the compound-scale validation of the central hypothesis — it proves 3-way unification holds when axis patterns are sequenced, not just when used individually.
- **Validates:** AD-F-004 (3-way unification) at compound scale with zero manual density manipulation. Each section's density emerged from its axis choice alone.
- **Extends:** Proves that compound pages do not need per-section density tuning. Choosing the axis pattern IS choosing the density. This dramatically simplifies CD's task.
- **CD implication:** CD agents building compound pages should choose axis patterns per section based on the DESIRED DENSITY, not as an independent layout decision. The axis choice IS the density decision. No additional density manipulation is needed or desired.

---

### AD-F-022: Fourth Equivalence Mechanism — Gravitational

| Field | Value |
|-------|-------|
| **ID** | AD-F-022 |
| **Title** | Fourth Equivalence Mechanism — Gravitational |
| **Source** | AD-006 (Compound) |
| **Severity** | MEDIUM (New mechanism extending equivalence model) |
| **Classification** | Class B (Extending) |
| **Description** | Choreography (hub-spoke) creates density through CONNECTION COUNT, not content volume, reading time, cell size, or proportional ratio. The hub is dense because everything points to it; spokes are sparse because they point to one thing. Gravitational density is relational: a hub with one sentence is denser than a spoke with three paragraphs because density is topological (how many things point to you), not volumetric. |
| **Evidence** | Four mechanisms: Temporal (Z, F) = reading time; Spatial (Bento) = cell size; Proportional (Spiral) = ratio nesting; Gravitational (Choreography) = connection count. R4-080, R4-095, EXT-AXIS-X-001. |

**Chain Impact:**
- **Consumed by:** CD combination rules for hub-spoke and choreography layouts. This extends the equivalence model to 5 mechanisms (temporal, spatial, proportional, kinetic, gravitational).
- **Validates:** AD-F-017 (kinetic equivalence) by adding a complementary mechanism — gravitational density from the same source exploration (choreography) but a different structural property (connection count vs direction change).
- **Extends:** The density concept itself: density is not just about content volume (temporal), area (spatial), proportion (proportional), or direction (kinetic) — it can also be TOPOLOGICAL. A hub with one sentence is denser than a spoke with three paragraphs because density is relational.
- **CD implication:** CD agents building hub-spoke layouts should understand that hub density comes from CONNECTION COUNT, not content volume. Filling a hub with more content does not make it denser — adding more spokes pointing to it does. This is the reverse of volumetric density assumptions.

---

### AD-F-023: Meta-Equivalence Identified — Attention Topology

| Field | Value |
|-------|-------|
| **ID** | AD-F-023 |
| **Title** | Meta-Equivalence: Attention Topology |
| **Source** | AD-006 (Compound) |
| **Severity** | CRITICAL (Crown jewel — unifies all 4 mechanisms under single meta-concept) |
| **Classification** | Class B (Extending) |
| **Description** | All four equivalence mechanisms (temporal, spatial, proportional, gravitational) are perspectives on one phenomenon: how content arrangement shapes attention flow. The meta-equivalence is ATTENTION TOPOLOGY. The axis IS the topology. The density IS the traversal. The organization IS the semantics. Three names for one map. Answers identity checkpoint forward question #3. |
| **Evidence** | Validated across all 6 AD explorations with 4 distinct mechanisms converging on a single phenomenon. EXT-AXIS-X-001, EXT-AXIS-X-004, OD-F-005, DD-F-006, DD-F-010, R4-095. |

**Chain Impact:**
- **Consumed by:** ALL downstream stages — this is the CROWN JEWEL of the entire AD phase. CD must build from this meta-concept. Migration must apply this understanding. Every future design decision should be evaluated through the ATTENTION TOPOLOGY lens.
- **Validates:** EVERY prior finding in the chain: DD-F-006 (fractal), DD-F-010 (org serves density → org IS density), DD-F-012 (axis serves density → axis IS density), OD-F-005 (org IS density), OD-F-MP-001 (meta-pattern). All are unified under ATTENTION TOPOLOGY.
- **Extends:** The entire 5-stage pipeline model. Stages 2-4 (DD, OD, AD) are not independent explorations of independent dimensions — they are three perspectives on ONE phenomenon: how content arrangement shapes attention flow. This is the deepest theoretical finding of the pipeline.
- **CD implication:** CD is not "combining" three independent dimensions. CD is exploring how different ATTENTION TOPOLOGIES compose when sequenced through scrolling time (AD-F-024). The combinatorial space is the topology space, not the permutation space. CD agents should think in topologies, not in axis+org+density triples.

**Perceptual Validation (DM-006):** Independent perceptual auditors confirmed the attention topology hypothesis through direct observation. Auditor D in AD-005 described "one of the strongest visual rhythms I have seen" — confirming that the WAVE density oscillation (an attention topology) is perceptually real, not just structurally theorized. Auditor A in AD-006 described a "scholarly, deliberate, warm" personality consistent at both 1440px and 1024px — confirming that the compound attention topology (multiple patterns sequenced through scrolling) creates a coherent perceptual experience. The consistent finding across independent auditors: attention flow matches both organizational pattern and density rhythm, exactly as the meta-equivalence predicts.

---

### AD-F-024: Compound Is Sequential, Not Simultaneous

| Field | Value |
|-------|-------|
| **ID** | AD-F-024 |
| **Title** | Compound Is Sequential, Not Simultaneous |
| **Source** | AD-006 (Compound) |
| **Severity** | HIGH (Direct constraint for CD stage) |
| **Classification** | Class B (Extending) |
| **Description** | Development Kitchen experiments (Section 7) proved that multiple axis patterns within a single viewport create visual cacophony. Z + Spiral in one quadrant disorients; Bento + Choreography conflicts; all five simultaneous is illegible. The correct compound solution: each section commits to ONE axis pattern; compound effect emerges from the SEQUENCE of sections through scrolling time. Compound axis is fundamentally a TEMPORAL experience — patterns layer through scrolling, following musical structure (verse-chorus-bridge-verse per R4-081). |
| **Evidence** | R4-081, R4-043, R4-052, R2-2.4, EXT-AXIS-X-002, OD-F-009. |

**Chain Impact:**
- **Consumed by:** CD compound page construction — this is a DIRECT CONSTRAINT. CD must implement compound axis as SEQUENTIAL sections through scrolling time, not simultaneous patterns within a single viewport.
- **Validates:** The musical structure metaphor (R4-081: verse-chorus-bridge-verse) for compound page composition. Each section commits to ONE axis pattern; the compound effect emerges from the SEQUENCE.
- **Extends:** Eliminates a large class of potential CD combinations: any combination that requires two axis patterns visible simultaneously in one viewport is INVALID. This dramatically constrains and simplifies CD's task.
- **CD implication:** CRITICAL CONSTRAINT: CD agents must NOT attempt simultaneous axis patterns within a single viewport. Each viewport section commits to one axis pattern. Compound = sequential through scrolling, following musical structure (verse-chorus-bridge). Test at a single-section level, then compose the sequence.

---

### AD-F-025: Transition Grammar Validated

| Field | Value |
|-------|-------|
| **ID** | AD-F-025 |
| **Title** | Transition Grammar Validated |
| **Source** | AD-006 (Compound) |
| **Severity** | HIGH (Structural constraint for compound and CD) |
| **Classification** | Class B (Extending) |
| **Description** | 5x5 transition matrix classifies all 20 directed pattern transitions into three types: Smooth (4 pairs: Z-F, Bento-Choreography), Bridge (10 pairs: require intermediary), Breathing (6 pairs: all Spiral transitions plus cross-mechanism-boundary transitions). Choreography is the universal bridge (gravitational density compatible with all mechanisms). Spiral is the most isolated pattern (proportional density is most cognitively distinct — every Spiral transition requires 48px+ breathing per OD-F-007). |
| **Evidence** | EXT-AXIS-X-002, OD-F-007, R4-042, R4-044, R4-038, R4-033. |

**Chain Impact:**
- **Consumed by:** CD compound page construction — the transition grammar is the PRIMARY structural constraint for how CD sequences axis patterns.
- **Validates:** OD-F-007 (mode-transition breathing requires 48px+ spacing) — the 5x5 matrix formalizes which transitions need breathing and which can be smooth.
- **Extends:** Creates a complete classification system for all 20 directed pattern transitions. Identifies Choreography as the UNIVERSAL BRIDGE (compatible with all mechanisms) and Spiral as the MOST ISOLATED (every transition requires breathing).
- **CD implication:** CD agents MUST consult the transition grammar before sequencing axis patterns. Smooth pairs (Z-F, Bento-Choreography) can transition with minimal breathing. Bridge pairs require an intermediary section. Breathing pairs require 48px+ spacing. Spiral transitions ALWAYS require breathing space. Choreography can be placed between any two patterns as a bridge.

---

### AD-F-026: Meta-Documentation IS the Purest Density Test

| Field | Value |
|-------|-------|
| **ID** | AD-F-026 |
| **Title** | Meta-Documentation IS Purest Density Test |
| **Source** | AD-006 (Compound) |
| **Severity** | N/A (Validation — confirms OD-F-006) |
| **Classification** | Class B (Extending) |
| **Description** | A page that demonstrates its own patterns CANNOT fake density compliance — the content IS the test, the structure IS the proof. AD-006 is self-validating: the reader's experience of reading the page IS the verification. Mirrors OD-006's role: OD-006 proved Organization IS Density; AD-006 proves Organization IS Density IS Axis by cycling through all 5 axis patterns. |
| **Evidence** | If the Z-Pattern section doesn't create PULSE, the reader experiences the failure directly. No external verification needed. OD-F-006, OD-F-005, DD-F-006, EXT-AXIS-X-008, R2-3.3, R4-095. |

**Chain Impact:**
- **Consumed by:** CD validation methodology. Migration quality assurance.
- **Validates:** OD-F-006 (meta-documentation as purest density test) at the compound axis level. AD-006 proves OD-F-006 holds when cycling through all 5 axis patterns, not just organizational patterns.
- **Extends:** Provides a SELF-VALIDATING test methodology: a page that demonstrates its own patterns cannot fake compliance. The reader's experience IS the verification.
- **CD implication:** CD agents should create at least one meta-documentation page (like OD-006 and AD-006) as the ultimate validation artifact. If the patterns work when demonstrating themselves, they work in general. This page becomes the calibration reference for all CD work.

---

### AD-F-027: DD-F-006 Fractal at 5 Scales — Compound Confirmed

| Field | Value |
|-------|-------|
| **ID** | AD-F-027 |
| **Title** | DD-F-006 Fractal at 5 Scales Confirmed |
| **Source** | AD-006 (Compound) |
| **Severity** | N/A (Validation) |
| **Classification** | Class B (Extending) |
| **Description** | DD-F-006 fractal compliance verified at all 5 scales in compound context: (1) Navigation — pattern echo grid with Hofstadterian strange loop in 6th cell; (2) Page — 7-section CRESCENDO; (3) Section — sparse-dense-sparse internal rhythm consistent across all 7 sections despite different axis patterns; (4) Component — callout/table/code structures; (5) Character — font trio density signals. Each scale operates independently; fractal compliance is axis-agnostic. |
| **Evidence** | Navigation: 6-cell echo grid, 6th self-references. Page: sparse overview builds to dense analysis to climactic decision matrix. Section: header (sparse) to body (dense) to callout (sparse). Component: sparse label + dense body. Character: Instrument Serif (sparse) vs Inter (dense) vs JetBrains Mono (code). DD-F-006, EXT-AXIS-X-005, EXT-AXIS-X-003, R4-036, R4-037, R4-039, R4-048. |

**Chain Impact:**
- **Consumed by:** CD fractal compliance verification. Migration agents verifying scale-level density.
- **Validates:** DD-F-006 at the most comprehensive level yet: all 5 scales verified in a compound context where axis patterns change per section but fractal compliance persists.
- **Extends:** Proves fractal compliance is AXIS-AGNOSTIC — each scale operates independently regardless of which axis pattern governs the section. The Hofstadterian strange loop (6th cell self-references the navigation) adds a meta-fractal layer.
- **CD implication:** CD agents must verify fractal compliance at all 5 scales for EACH section of a compound page. The good news: fractal compliance at each scale is independent of axis pattern choice. CD can verify each scale separately.

---

### AD-F-028: No Sixth Fractal Scale — 5-Scale Model Complete

| Field | Value |
|-------|-------|
| **ID** | AD-F-028 |
| **Title** | No 6th Fractal Scale — 5-Scale Model Complete |
| **Source** | AD-006 (Compound) |
| **Severity** | MEDIUM (Bounds the DD-F-006 model) |
| **Classification** | Class B (Extending — negative finding) |
| **Description** | The "strategy" scale candidate (pattern selection to demonstration to synthesis) collapsed into existing scales: pattern selection = navigation scale, demonstration = page scale, synthesis = section scale. The 5-scale model (navigation, page, section, component, character) is complete and universal. Compound adds no new scale — it proves 5-scale universality. Future stages (CD) should verify existing scales hold under combination, not seek a 6th. |
| **Evidence** | Identity checkpoint forward question #3 asked about a 6th scale. All candidate "6th" phenomena map to existing scales. DD-F-006, EXT-AXIS-X-005, OD-F-005. |

**Chain Impact:**
- **Consumed by:** CD stage planning — this is a BOUNDING finding that tells CD what NOT to seek.
- **Validates:** DD-F-006 by formally establishing the 5-scale model as COMPLETE and UNIVERSAL. The "strategy" scale collapsed into existing scales.
- **Extends:** Provides a NEGATIVE finding: compound adds no new fractal scale. This bounds the model and prevents CD from wasting effort seeking a 6th scale.
- **CD implication:** CD agents should verify that existing 5 scales (navigation, page, section, component, character) hold under combination. Do NOT seek a 6th scale — it has been tested and does not exist. Any apparent "6th scale" will map to one of the existing 5.

---

## DD-F-012 Consumption Report

DD-F-012 states: "Density patterns imply axis preferences. Axis geometry must SERVE the density pattern, not fight it."

This section tracks how each AD exploration consumed or extended DD-F-012:

| AD Exploration | Density Pairing | DD-F-012 Status | Evidence |
|----------------|-----------------|-----------------|----------|
| **AD-001 Z-Pattern** | PULSE + TIDAL | **VALIDATED** | Z-pattern axis geometry IS PULSE expressed spatially. Z-sweep cycle IS one PULSE beat. Width variation IS TIDAL. Axis does not merely "serve" density — axis IS density viewed through a spatial lens. (AD-F-002, AD-F-004) |
| **AD-002 F-Pattern** | CRESCENDO | **VALIDATED** | F-pattern vertical descent = CRESCENDO compression; typography compression across acts mirrors CRESCENDO density; decision matrix at Act III IS the CRESCENDO peak. Axis geometry actively amplifies the density pattern. (AD-F-006, AD-F-007, AD-F-008) |
| **AD-003 Bento Grid** | ISLANDS | **VALIDATED** | Grid cells ARE dense islands; grid gaps ARE sparse ocean. Bento grid CONTAINS the ISLANDS pattern — rigidity prevents visual chaos. Compound BOOKENDS + ISLANDS operates at multiple scales simultaneously. (AD-F-009, AD-F-010, AD-F-012) |
| **AD-004 Spiral** | GEOLOGICAL | **VALIDATED** (stress-test) | Angular spiral IS geological stratification (soul constraint forces angular approximation). Border-weight gradient IS geological encoding. Confidence-proportional spacing creates CRESCENDO whitespace within GEOLOGICAL structure. Spiral reading order ENHANCES geological layering. (AD-F-013, AD-F-014, AD-F-015, AD-F-016) |
| **AD-005 Choreography** | WAVE + ISLANDS | **VALIDATED** | Axis direction change IS density state change (kinetic equivalence). WAVE preservation is token-dependent, not geometry-dependent — geometry gives WAVE its perceptual character while tokens give it measurable reality. Choreography is static structural arrangement, not animation. (AD-F-017, AD-F-019, AD-F-020) |
| **AD-006 Compound** | ALL (FRACTAL primary) | **VALIDATED** (compound-scale) | Triple equivalence holds at compound scale: changing axis automatically changes density with zero manual manipulation. All 5 axis patterns serve their density patterns. Meta-equivalence ATTENTION TOPOLOGY unifies all mechanisms. (AD-F-021, AD-F-023, AD-F-026) |

**DD-F-012 Verdict:** VALIDATED across all 6 AD explorations. Furthermore, DD-F-012 is ELEVATED: axis geometry does not merely "serve" the density pattern — axis geometry IS the density pattern expressed spatially. The relationship is identity (equivalence), not servitude (subordination). This elevation was identified in AD-F-004 and confirmed across all subsequent explorations.

**CHALLENGED by none.** Zero Class C (overwriting) findings across all 28 AD findings.

---

## Cross-Wave Equivalence Mechanism Catalog

The 3-way unification hypothesis (axis = organization = density) was validated across all 6 explorations via 4 distinct mechanisms, unified by a meta-equivalence:

| Mechanism | First Identified | Source Explorations | Creates Density Via |
|-----------|-----------------|--------------------|--------------------|
| **Temporal** | Wave 1A | AD-001 (Z), AD-002 (F) | Scanning speed / reading time |
| **Spatial** | Wave 1B | AD-003 (Bento) | Cell size / area allocation |
| **Proportional** | Wave 1B | AD-004 (Spiral) | Golden ratio nesting / confidence encoding |
| **Kinetic** | Wave 1C | AD-005 (Choreography) | Axis direction change |
| **Gravitational** | Wave 1C | AD-006 (Compound, Choreography) | Connection count (topological, not volumetric) |
| **META: Attention Topology** | Wave 1C (AD-F-023) | AD-006 (unifies all) | Axis IS topology; density IS traversal; organization IS semantics |

---

## Classification Summary

| Class | Count | Meaning |
|-------|-------|---------|
| Class A (Confirming) | 14 | Binary, no deviation, implements/confirms research directly |
| Class B (Extending) | 14 | Identity extension, requires judgment, within convention bounds |
| Class C (Overwriting) | 0 | Zero contradictions across all 28 findings |
| Class D (Breaking) | 0 | Zero identity breaks |

---

## Soul Compliance Summary

All 6 explorations passed soul compliance verification:

| Check | AD-001 | AD-002 | AD-003 | AD-004 | AD-005 | AD-006 |
|-------|--------|--------|--------|--------|--------|--------|
| border-radius: 0 | PASS | PASS | PASS | PASS | PASS | PASS |
| box-shadow: none | PASS | PASS | PASS | PASS | PASS | PASS |
| No filter: drop-shadow() | PASS | PASS | PASS | PASS | PASS | PASS |
| No 2px borders | PASS | PASS | PASS | PASS | PASS | PASS |
| All backgrounds opaque | PASS | PASS | PASS | PASS | PASS | PASS |
| Font trio correct | PASS | PASS | PASS | PASS | PASS | PASS |
| Version badge "v1 enriched" | PASS | PASS | PASS | PASS | PASS | PASS |

**Total soul violations across all 6 explorations: 0**

---

## Citation Totals

| Exploration | R-4 | R-2 | EXT-AXIS-* | OD-F | DD-F | Total |
|-------------|-----|-----|------------|------|------|-------|
| AD-001 (Z) | 31 | 10 | 5 (Z) | 5 | 5 | 56 |
| AD-002 (F) | 24 | 10 | 5 (F) | — | — | 39 |
| AD-003 (Bento) | 18 | 8 | 5 (B) | — | — | 31 |
| AD-004 (Spiral) | 16 | 9 | 5 (SP) | — | — | 30 |
| AD-005 (Choreo) | 38 | 12 | 5 (CH) | 4 | 6 | 65 |
| AD-006 (Compound) | 42 | 12 | 8 (X) | 7 | 5 | 74 |
| **Total** | **169** | **61** | **33** | **16** | **16** | **295** |

All citation minimums met across all 6 explorations.

---

## Source File Index

| Source File | Builder | Findings |
|-------------|---------|----------|
| findings-builder-A.md | Builder-A | AD-F-001 through AD-F-004 |
| findings-builder-B.md | Builder-B | AD-F-005 through AD-F-008 |
| findings-builder-C.md | Builder-C | AD-F-009 through AD-F-012 |
| findings-builder-D.md | Builder-D | AD-F-013 through AD-F-016 |
| findings-builder-E.md | Builder-E | AD-F-017 through AD-F-020 |
| findings-builder-F.md | Builder-F | AD-F-021 through AD-F-028 |
| scribe-report-wave1A.md | Scribe-1A | Formalized AD-F-001 through AD-F-008 |
| scribe-report-wave1B.md | Scribe-1B | Formalized AD-F-009 through AD-F-016 |
| scribe-report-wave1C.md | Scribe-1C | Formalized AD-F-017 through AD-F-028 |

---

*Compiled 2026-02-10 from 6 builder reports and 3 scribe reports.*
