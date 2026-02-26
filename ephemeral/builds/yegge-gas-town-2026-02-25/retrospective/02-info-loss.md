# Information Loss Chain — yegge-gas-town-2026-02-25

**Analyst:** Opus info-loss agent
**Method:** Trace every recipe step and artifact element through the pipeline stages: Source Artifact -> Brief -> Builder Input -> HTML Output. Classify loss type and identify the fix.

---

## 1. Loss Map: Recipe Steps

| Recipe Step | In Source? | In Brief? | Reached Builder? | In HTML? | Loss Point | Loss Type |
|-------------|-----------|-----------|-----------------|----------|------------|-----------|
| **Phase 1** | | | | | | |
| 1.1 Read tokens.css | YES | Reference in Tier 3 | YES (direct file) | YES — custom properties used | — | NONE |
| 1.1b Mechanism catalog | YES | Not referenced | YES (direct file) | YES — 14+ mechanisms deployed | — | NONE |
| 1.2 Read components.css | YES | "Target 8+ components" | YES (direct file) | PARTIAL — 5-6 types, not 8+ | Builder execution | COMPLIANCE GAP |
| 1.3 Read execution brief | YES | IS the brief | YES | YES | — | NONE |
| **Phase 2** | | | | | | |
| 2.1 Zone backgrounds | YES | YES — locked hex table, RGB deltas | YES | YES — all 5 zone backgrounds match brief exactly | — | NONE |
| 2.2 Type scale | YES | YES — per-zone typography in multi-coherence | YES | YES — font sizes shift across zones (18→16→15→16→16) | — | NONE |
| 2.3 Structural metaphor | YES | YES — factory/refinery CSS custom properties | YES | YES — `--loading-dock`, `--factory-floor` etc. | — | NONE |
| 2.4 Callout variant semantics | YES | PARTIAL — "Callouts should modulate per zone" | YES | YES — zone-specific callout overrides present | — | MINIMAL |
| 2.5 Component selection + layout | YES | "Target 8+ components" | YES | PARTIAL — 5-6 types used, below 8+ target | Builder execution | COMPLIANCE GAP |
| 2.6 Container width | YES | "940-960px" | YES | YES — 960px | — | NONE |
| **2.7 Hover behavior** | **YES** | **NO** | **NO** | **MINIMAL** — only `tr:hover` on tables | **Brief assembly** | **COMPLETE LOSS** |
| 2.8 Transition types | YES | YES — 3 types mapped to boundaries | YES | YES — threshold dividers, 3px borders, 1px subtle | — | NONE |
| **Phase 3** | | | | | | |
| 3.1 6-channel framework | YES | YES — boundary-by-boundary channel specs | YES | PARTIAL — Z1→Z2 and Z4→Z5 only 2 channels | Builder execution | PARTIAL COMPRESSION |
| 3.2 Zone heights | YES | YES — section height estimates in density arc | YES | YES — zone heights vary per arc | — | NONE |
| 3.3 Density arc | YES | YES — ARCH pattern specified | YES | YES — low→moderate→high→high→low-moderate | — | NONE |
| 3.4 Build order | YES | Implicit in zone architecture | YES | YES | — | NONE |
| 3.4b Fractal coherence | YES | "Callouts modulate per zone" | YES | YES — PA-63 STRONG YES | — | NONE |
| **3.4c Builder signal declarations** | **YES** | **NO** | **NO** | **NO** — no `<!-- SCROLL-REVEALS -->` comment | **Brief assembly** | **COMPLETE LOSS** |
| 3.5 Assess scaffolding | YES | N/A (builder self-check) | N/A | N/A | — | N/A |
| **Phase 4 (D-01 through D-09)** | | | | | | |
| D-01 Content-register reading | YES | YES — per-section register in brief + content map | YES | YES — zone typography adapts to register | — | NONE |
| D-02 Room perception | YES | YES — detailed boundary descriptions | YES | YES — threshold dividers, multi-channel shifts | — | NONE |
| D-03 Signing frame | YES | YES — authority framing, callout border spec | YES | YES — 4px callout borders, dense header | — | NONE |
| D-04 Second-half moment | YES | YES — Z3 dark inversion, pull-quote scale break | YES | YES — "ENTERING THE FACTORY FLOOR" = auditor-confirmed moment | — | NONE |
| D-05 Reader's scroll | YES | YES — section heights, density modulation | YES | YES — height estimates match, closure present | — | NONE |
| D-06 Negative space as shape | YES | YES — zone padding values, gap management | YES | YES — padding varies per zone, total gaps under 120px | — | NONE |
| D-07 Edge intentionality | YES | YES — tabular-nums, hover states, selection colors | YES | PARTIAL — tabular-nums, selection present; **hover states from D-07 also lost (same as 2.7)** | Brief→HTML | PARTIAL LOSS |
| D-08 Skeleton test | YES | YES — ABA' structure described | YES | YES — light-dark-light clearly visible | — | NONE |
| D-09 Quiet zone | YES | YES — Z2 as deliberate quiet zone | YES | YES — Z2 uses 2-3 mechanisms, plainer than Z3 | — | NONE |

---

## 2. Loss Map: Non-Recipe Artifacts

| Source Artifact | Key Content | In Brief? | In Builder Files? | In HTML? | Loss Type |
|-----------------|------------|-----------|-------------------|----------|-----------|
| **Value tables** — 20 background pairs | Hex pairs + RGB deltas | YES — 5 pairs locked in Tier 3 | UNCERTAIN as separate file | YES (backgrounds) | UNCERTAIN |
| **Value tables** — 10 spacing progressions | Padding-per-zone tables | NO — brief says "spacing scale (4-96px)" | UNCERTAIN | PARTIAL — spacing varies but doesn't follow pre-computed progressions | PROBABLE LOSS |
| **Value tables** — 10 typography combinations | Per-zone type specs | NO — brief has type specs per boundary | UNCERTAIN | PARTIAL — typography shifts present but not following table combos | PROBABLE LOSS |
| **Value tables** — 5 border configs | 4px/3px/1px use-count targets | NO | UNCERTAIN | YES — border hierarchy correct, counts approximate | MINIMAL |
| **Value tables** — component adoption set | 8 minimum viable classes | YES — "Target 8+ components" | YES | PARTIAL — 5-6 used, not 8 | COMPLIANCE GAP |
| **S(x) survival function** | S(x) = 1/(1+C(x)) | NO | N/A | N/A | COMPLETE LOSS |
| **Content-Form Fit Gate** | Verify content-form alignment | NO explicit check | N/A | N/A | COMPLETE LOSS |
| **Worked examples** | Previous Gas Town build reference | UNKNOWN | UNKNOWN | N/A | UNCERTAIN |
| **pa-guardrails-weaver.md** | Anti-patterns, S-09 stacking | UNKNOWN to weaver | N/A | N/A | UNCERTAIN |

---

## 3. Critical Loss Analysis

### Loss #1: Hover Behavior Vocabulary (Step 2.7) — COMPLETE LOSS

**Source:** Recipe Step 2.7 specifies the builder should "Select hover behavior patterns" — choosing how interactive elements respond to mouse interaction. The recipe's Phase 2 explicitly lists this as a creative decision the builder makes.

**Where lost:** The Brief Assembler did not include hover behavior guidance in Tier 3 or Tier 4. D-07 mentions "Hover states on role architecture cards: `tr:hover { background: rgba(232,48,37,0.05); }`" — but this is ONE example inside one disposition, not the systematic hover vocabulary Step 2.7 calls for.

**Impact:** REFINE weaver scores DELIGHT 4/10 — the weakest register. Specifically: "no hover states revealing content, no typographic micro-details beyond the headings." The page has `tr:hover` on tables (the D-07 mention survived) but nothing else: no link hover transitions, no callout hover effects, no code block hover reveals. Hover behavior is the single largest contributor to the DELIGHT deficit.

**Fix location:** Brief assembly (artifact-tc-brief-template.md) — add hover vocabulary to Tier 3/4.

### Loss #2: Builder Signal Declarations (Step 3.4c) — COMPLETE LOSS

**Source:** Recipe Step 3.4c requires the builder to add `<!-- SCROLL-REVEALS: true -->` if the page uses scroll-triggered animations. Absence of the comment means "all content should be visible without scrolling interaction."

**Where lost:** The Brief Assembler never included this instruction. The builder was never told about signal declarations.

**Impact:** The initial build's dark zone invisibility (PA-05 2.0/4, 9/9 auditors flagged it) was likely caused by scroll-triggered animations with no fallback. Without the signal declaration, the screenshot validation system could not distinguish "intentional hidden content" from "rendering bug." This contributed to the catastrophic initial PA round where 80-85% of the page appeared as a void.

**Fix location:** Brief template (artifact-tc-brief-template.md) — add Step 3.4c to builder instructions.

### Loss #3: S(x) Survival Function — NEVER APPLIED

**Source:** artifact-routing.md defines S(x) = 1/(1+C(x)) as the compression governance function. It determines how much information survives from source to brief based on content complexity.

**Where lost:** The Brief Assembler never computed or applied S(x). The brief was 272 lines — produced by judgment rather than systematic compression.

**Impact:** LOW this run (the brief was good at 272 lines). But the function exists to prevent future Brief Assemblers from over-compressing. Without it, brief quality depends entirely on the assembler agent's judgment, which is unreliable across runs.

**Fix location:** artifact-routing.md + MANIFEST.md — make S(x) a BV gate or remove it from the spec.

### Loss #4: Edge Zone Multi-Coherence — PARTIAL COMPRESSION

**Source:** Recipe Step 3.1 specifies "6 channels that shift across zone boundaries." The brief specifies per-boundary channel counts: Z1→Z2 (4 channels), Z2→Z3 (6), Z3→Z4 (5), Z4→Z5 (3).

**Where lost:** The builder executed the heavy boundaries well (Z2→Z3 has 7 channel shifts in REFINE — exceeding spec). But edge boundaries (Z1→Z2, Z4→Z5) only achieved 2 channels each. The brief specified 4 and 3 respectively.

**Impact:** GR-50 FAIL for edge transitions. The weaver calls this Fix #4 (STRUCTURAL). The channel count information was IN the brief but the builder under-executed at the edges while over-executing at the center. This is not information loss per se — it is execution priority mismatch. The builder invested compositional effort at the dramatic boundaries and phoned in the gentle ones.

**Fix location:** Brief template — add minimum channel count per boundary as a numbered requirement, not just a descriptive paragraph.

### Loss #5: Component Adoption Target — COMPLIANCE GAP

**Source:** Recipe Phase 3 header says "Aim for 8+ component library classes used." Brief says "Target 8+ components."

**Where lost:** The information reached the builder. The builder used 5-6 component types. This is not information loss — the builder read the target and undershot it. The builder created custom CSS for elements (principle cards, bento grids) that could have used component library classes.

**Impact:** MODERATE. Custom CSS instead of components means more CSS lines but less consistency. The REFINE weaver's Fix #3 (principle card monotony) is partly caused by custom components that lack the library's built-in variation patterns.

**Fix location:** Gate runner — add a programmatic gate for component class count (minimum 8 from components.css).

---

## 4. Compression Ratio Health

| Stage | Lines In | Lines Out | Ratio | Assessment |
|-------|----------|-----------|-------|------------|
| Source extraction → Content Map | ~1,324 | 70 | 18.9:1 | HEALTHY (under 50:1 danger zone) |
| Content Map → Brief | 70 | 272 | 0.26:1 (EXPANSION) | HEALTHY — brief adds layers |
| Recipe (828 lines) → Brief Tier 3+4 | 828 | ~145 | 5.7:1 | MODERATE — some losses expected |
| Value tables (262 lines) → Brief | 262 | ~20 | 13.1:1 | HIGH — most spacing/typography progressions lost |
| All builder input → HTML output | ~2,850 | 2,931 | ~1:1 | HEALTHY — builder consumed effectively |

**The pipeline's two-stage architecture (compress then expand) prevented catastrophic loss.** The 18.9:1 content compression followed by brief EXPANSION with compositional layers is the key design. The danger zone is the recipe→brief compression (5.7:1) where hover behavior and signal declarations were lost.

---

## 5. Loss Taxonomy

| Loss Type | Count | Examples | Systemic? |
|-----------|-------|---------|-----------|
| **COMPLETE LOSS** (never reached builder) | 3 | Step 2.7 hover, Step 3.4c signals, S(x) function | YES — brief template gap |
| **COMPLIANCE GAP** (reached builder, under-executed) | 2 | Component adoption (5-6 vs 8+), edge zone channels (2 vs 3-4) | YES — no programmatic gate |
| **PROBABLE LOSS** (uncertain if file was passed) | 2 | Value table spacing progressions, typography combinations | YES — routing uncertainty |
| **NONE** (fully propagated) | 20 | Zone backgrounds, type scale, metaphor, all D-01 through D-09 except hover | — |

**Key pattern:** Losses cluster at the Brief Assembly stage. The brief correctly propagated ALL identity, perception, metaphor, zone architecture, and 8/9 dispositions. It failed to propagate 2 specific recipe steps (2.7 and 3.4c) and compressed the value tables heavily. The builder then under-executed on 2 items that DID reach it (components and edge channels).

**Root cause:** The brief template (artifact-tc-brief-template.md) has no placeholder or section for hover behavior or signal declarations. These are recipe steps that exist in the builder recipe but have no corresponding slot in the brief template. The brief assembler cannot propagate what the template does not prompt for.

---

## 6. Verdict

**Information loss did NOT prevent success** (PA-05 3.5/4 is CEILING tier). But it prevented FLAGSHIP:

- Hover behavior loss → DELIGHT 4/10 (weakest register)
- Signal declaration loss → initial dark zone catastrophe (PA-05 2.0/4 before REFINE)
- Edge channel under-execution → GR-50 FAIL, Fix #4

The gap from 3.5/4 to 4.0/4 is precisely the accumulation of these losses. Fixing the brief template to include hover vocabulary and signal declarations, plus adding a component adoption gate, would close the 3 most impactful losses.
