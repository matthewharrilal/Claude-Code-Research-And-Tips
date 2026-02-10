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
