# PV2 Flagship Propagation Audit: Will Instructions Reach CSS Output?

**Agent:** propagation-auditor (Opus 4.6)
**Date:** 2026-02-18
**Task:** Trace 15 representative PV2 Flagship instructions from recipe through handoff through builder to predicted CSS output
**Sources:** File 23 (propagation-analysis.md, 404 lines), File 21 (verbiage-analysis.md, 498 lines), File 42 (42-OPERATIONAL-RECIPE.md, 1,747 lines), pv2-handoff-protocol.md (709 lines), pv2-comms-protocol.md (509 lines)
**Method:** Per-instruction causal chain tracing using File 21's 10-tier propagation ranking + File 23's conversion topology

---

## EXECUTIVE SUMMARY

File 23 found remediation compliance at 100% vs master prompt at 73%. The question: where does PV2 Flagship land on this spectrum?

**Verdict: PV2 Flagship is PREDICTED at 89-93% compliance, significantly above the master prompt (73%) but below the remediation (100%).** The gap comes from 3 instruction categories that have structural propagation risk: CONTENT DECISION judgment calls, multi-agent handoff compression, and post-action perception checks that depend on agent visual assessment.

The good news: PV2 Flagship eliminates every DEAD RULE and CROSS-PROMPT RULE that caused the master prompt's 27% failure. The remaining risk is concentrated in a tractable set of semi-concrete instructions that can be hardened.

---

## PART A: PROPAGATION TRACE — 15 REPRESENTATIVE INSTRUCTIONS

### Selection Methodology

15 instructions selected to cover:
- All 9 phases (0-8)
- All 4 instruction types from File 21 (CONCRETE, SEMI-CONCRETE, ABSTRACT, PROCESS)
- Different propagation risk levels (Tier 1-3 from File 21, Tier 7-10)
- Instructions that transit through the handoff boundary (TC → Builder)
- Instructions internal to the builder recipe

---

### Instruction 1: "Container max-width: 960px" (Phase 2, Step 2.3)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 2, Step 2.3: `.page-container { max-width: 960px; }` |
| **Phase** | 2 (Base CSS) |
| **Type** | CONCRETE — exact CSS value provided |
| **Propagation Path** | Recipe → Builder reads Phase 2 → Writes exact CSS → Page renders at 960px |
| **File 21 Tier** | Tier 2 (CONCRETE replace with values, ~95% reliability) |
| **Predicted Compliance** | 98% |
| **Risk** | VERY LOW |

**Rationale:** The instruction provides the exact CSS property AND value. The builder copies it. File 23 confirmed this same instruction achieved 100% compliance in both master prompt and remediation contexts. Additionally, the handoff protocol embeds this in Builder Directives Section 7 as a soul constraint, creating DUAL redundancy. Two independent instruction paths converge on the same value.

---

### Instruction 2: "Zone count determined by word count table" (Phase 0, Step 0.3)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 0, Step 0.3: word count → zone count lookup table |
| **Phase** | 0 (Content Analysis) |
| **Type** | SEMI-CONCRETE — table lookup, but content-specific judgment on word count boundaries |
| **Propagation Path** | Recipe → Builder counts words → Looks up table → Writes zone count |
| **Handoff Transit** | TC writes ZONE_COUNT in handoff → Builder reads |
| **File 21 Tier** | Tier 4 (BINARY threshold with verification, ~90%) |
| **Predicted Compliance** | 92% |
| **Risk** | LOW |

**Rationale:** The table provides clear thresholds (< 1,500 = 2 zones, 1,500-3,000 = 3 zones, etc.). Word counting is mechanical. The only risk: content at boundary values (e.g., 1,480 words — is that 2 or 3 zones?). The handoff protocol mitigates this by having TC pre-compute ZONE_COUNT, so the builder receives the decision already made. Propagation risk is only present when TC makes the count and when the builder trusts the count.

---

### Instruction 3: "At least 2 sections MUST use non-single-column layout" (Phase 0, Step 0.5)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 0, Step 0.5 |
| **Phase** | 0 (Content Analysis) |
| **Type** | SEMI-CONCRETE — binary minimum (2+) but judgment on WHICH sections |
| **Propagation Path** | Recipe → Builder identifies grid-worthy sections → Creates HTML wrappers in Phase 1 → Writes grid CSS in Phase 4 |
| **Handoff Transit** | TC writes Layout column in Section Inventory → Builder reads per-section layout assignments |
| **File 21 Tier** | Tier 5 (NUMBERED minimum with options, ~85%) |
| **Predicted Compliance** | 85% for COUNT, ~70% for QUALITY |
| **Risk** | MEDIUM |

**Rationale:** The COUNT (>= 2 grids) is binary and will likely be satisfied. But WHICH sections get grids is a [CONTENT DECISION] that requires judgment. File 23 showed that the flagship experiment had ZERO grid layouts across 2,034 lines — proving that even a clear grid mandate can fail if the builder doesn't create HTML wrapper divs. The PV2 recipe mitigates this with explicit HTML templates (Step 1.5: `.content-pair` and `.content-grid` markup). The handoff protocol's Section Inventory table pre-assigns layouts per section, further reducing builder judgment.

**Kill zone:** The instruction transits the handoff boundary (TC decides layout, builder implements). If TC assigns "Single-column" to 10/12 sections and "Two-column grid" to only 2, the builder has no discretion to add more. The quality of grid placement depends entirely on TC's content analysis in Phase 0 — which the builder does NOT override.

---

### Instruction 4: "Zone backgrounds must differ by >= 10 RGB points between adjacent zones" (Phase 3, Step 3.1)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 3, Step 3.1 + Appendix A |
| **Phase** | 3 (Zone System) |
| **Type** | SEMI-CONCRETE with concrete template — threshold (>= 10 RGB) + example hex values |
| **Propagation Path** | Recipe → Builder reads template colors → Adapts per zone semantics → Applies CSS |
| **File 21 Tier** | Tier 4 (BINARY threshold with verification, ~90%) if builder uses template colors; Tier 7 (~50%) if builder derives custom colors |
| **Predicted Compliance** | 90% (template used) / 60% (custom derivation) |
| **Risk** | MEDIUM — depends on whether builder copies or derives |

**Rationale:** File 42 provides a complete 3-zone warm-cool-warm template with 12 specific hex values (Step 3.1). If the builder copies these values, compliance is near-guaranteed — they already satisfy the >= 10 RGB constraint. But for non-standard content arcs, the builder must derive custom zone colors. File 23 showed the remediation's zone backgrounds had only 3-6 RGB delta changes (below threshold) even when the spec said "MUST differ by >= 10 RGB." The PERCEPTION CHECK at Phase 3's end ("Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?") adds a safety net but operates at Tier 6 (~70% reliability).

**Kill zone:** The [CONTENT DECISION] at Step 3.1 ("Choose background colors based on your zone semantics"). If the builder's zone semantics don't map cleanly to the template, they derive new values — and derivation has lower propagation reliability than copying.

---

### Instruction 5: "Section-level left borders on alternating sections" (Phase 4, Step 4.1)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 4, Step 4.1: 5 specific CSS rules with selectors, colors, widths |
| **Phase** | 4 (Structural Borders) |
| **Type** | CONCRETE — exact CSS selectors and values provided |
| **Propagation Path** | Recipe → Builder reads 5 CSS rules → Adapts selectors to their section count → Writes CSS |
| **File 21 Tier** | Tier 2-3 (CONCRETE replace/restructure, ~92-95%) |
| **Predicted Compliance** | 90% |
| **Risk** | LOW-MEDIUM |

**Rationale:** The recipe provides 5 complete CSS rules with exact selectors (.zone-s2, .zone-s5, .zone-s7, .zone-s9, .zone-s12), exact border values (3px/4px), and exact colors. The builder must adapt selectors if their page has a different section count. This adaptation is mechanical (change section numbers) but introduces a minor translation risk. File 23 confirmed the remediation's section borders achieved 100% compliance — because the exact selectors were provided.

**Kill zone:** The instruction says "Adapt selectors to YOUR section count" — this is the adaptation point where compliance could drop. If the builder has 8 sections instead of 12, they must choose which 4-5 get borders. This is a Tier 5 decision (~85%).

---

### Instruction 6: "Zone 1 paragraphs at 17px/1.85/0.02em" (Phase 5, Step 5.1)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 5, Step 5.1: exact CSS code block |
| **Phase** | 5 (Typography Zones) |
| **Type** | CONCRETE — exact CSS values in code block |
| **Propagation Path** | Recipe → Builder reads CSS block → Writes identical CSS → Font renders at 17px |
| **File 21 Tier** | Tier 2 (CONCRETE replace with values, ~95%) |
| **Predicted Compliance** | 95% |
| **Risk** | LOW |

**Rationale:** The recipe provides a complete CSS code block with font-size, line-height, letter-spacing, max-width, and color for every zone. The builder copies the code block and adapts zone selectors. File 23 confirmed the remediation achieved 100% compliance on identical typography instructions. The PERCEPTION CHECK at Phase 5's end provides a binary test: "Zone 1 text should look LARGER and more OPEN than Zone 2."

**Specificity risk:** If the builder's CSS has earlier rules with higher specificity (e.g., inline styles, !important elsewhere), the zone typography rules may not apply. The remediation encountered this exact issue — "S9-S12 typography (15px not applying)" was a BLOCKING fix. The recipe's Phase 2.2 applies !important ONLY to soul enforcement, reducing but not eliminating specificity conflicts.

---

### Instruction 7: "Divider margins MUST be <= 24px" (Phase 4, Step 4.2)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 4, Step 4.2 + Phase 0, Step 0.6 stacking arithmetic |
| **Phase** | 4 (Structural Borders) |
| **Type** | CONCRETE with BINARY threshold — exact margin values in CSS block + 120px total cap |
| **Propagation Path** | Recipe → Builder reads CSS block → Copies exact margin values → Stacking verified in Phase 8 |
| **File 21 Tier** | Tier 2 (CONCRETE replace, ~95%) for the CSS values; Tier 4 (~90%) for the stacking verification |
| **Predicted Compliance** | 95% |
| **Risk** | LOW |

**Rationale:** The recipe provides three complete CSS rules (smooth: 16px, bridge: 24px, breathing: 24px) with exact values. It also provides the stacking arithmetic proof. File 23 confirmed the remediation achieved 100% compliance on divider margin reduction — because the values were exact and the arithmetic was pre-computed. The handoff protocol includes a STACKING_CHECK field that must read PASS before the builder starts.

**No kill zone.** This is a pure copy instruction with mathematical proof. The only failure mode is the builder adding ADDITIONAL spacing (extra padding, inline styles) that the recipe doesn't account for.

---

### Instruction 8: "Callout variant selection: info/gotcha/tip/essence" (Phase 1, Step 1.4)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 1, Step 1.4: HTML templates for 4 callout variants |
| **Phase** | 1 (HTML Skeleton) |
| **Type** | CONCRETE HTML template + SEMI-CONCRETE variant selection |
| **Propagation Path** | Handoff Section Inventory specifies element types → Builder reads → Creates HTML with variant classes |
| **File 21 Tier** | Tier 3 (CONCRETE WAS/NOW restructure, ~92%) for HTML; Tier 6 (~70%) for variant selection |
| **Predicted Compliance** | 85% (HTML structure) / 70% (correct variant assignment) |
| **Risk** | MEDIUM for variant selection |

**Rationale:** The recipe provides exact HTML markup for each callout variant. Creating a `.callout .callout--info` div is mechanical. But choosing WHICH variant fits WHICH content is a [CONTENT DECISION]. The recipe provides guidance ("If it says 'avoid this' -> gotcha. If it says 'do this' -> tip. If it says 'this is the core idea' -> essence.") but this is a Tier 6 judgment instruction.

**Kill zone:** The handoff's Section Inventory includes an "Elements" column (e.g., "2 callouts (info + essence)") but doesn't always specify which variant goes where within a section. The builder must read the actual content and match semantic intent to variant. This is where File 21's "judgment tax" applies.

---

### Instruction 9: "PERCEPTION CHECK: Can you SEE at least 2 distinct background color shifts?" (Phase 3 end)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 3, PERCEPTION CHECK |
| **Phase** | 3 (Zone System) end |
| **Type** | SEMI-CONCRETE — binary question but requires visual assessment |
| **Propagation Path** | Builder scrolls page → Looks at screen → Makes judgment → Proceeds or fixes |
| **File 21 Tier** | Tier 6 (Post-action perception check, ~70%) |
| **Predicted Compliance** | 65% (builder performs the check); ~40% (builder accurately assesses) |
| **Risk** | HIGH |

**Rationale:** File 23 found that the remediation's perception checks achieved mixed results. The builder PERFORMED the checks (scrolled, looked) but the assessments were unreliable — specifically, the builder reported seeing zone color shifts that PA auditors later found imperceptible (3-6 RGB delta). File 21 ranks post-action perception checks at Tier 6 (~70%) because they are binary (yes/no) and positioned after the action. But the ACCURACY of self-assessment is lower than compliance with performing the check.

**Kill zone:** Self-assessment is the weakest link in the entire pipeline. The builder builds the CSS, then judges whether their own CSS works. Continuation bias (File 23, P-03 analysis) means the builder is predisposed to see what they just created as correct. The comms protocol (pv2-comms-protocol.md) addresses this for Ceiling+ tiers by requiring CHECKPOINT messages that the planner reviews — but for Middle tier builds, the builder is sole judge.

---

### Instruction 10: "Bridge prose text for zone boundary transitions" (Phase 1, Step 1.3 + Transition Plan)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 1, Step 1.3 (HTML template) + Handoff Section 6 (Transition Plan) |
| **Phase** | 1 (HTML Skeleton) |
| **Type** | CONCRETE HTML template + handoff-provided text |
| **Propagation Path** | TC writes bridge prose text in handoff Transition Plan → Builder reads → Creates .bridge-prose HTML → Applies CSS in Phase 4 |
| **File 21 Tier** | Tier 2-3 (CONCRETE replace, ~92-95%) for HTML creation; Tier 1 (~98%) for CSS |
| **Predicted Compliance** | 92% (bridge prose HTML created); 95% (CSS applied) |
| **Risk** | LOW |

**Rationale:** The handoff protocol provides the actual bridge prose text ("Having established the principles, we now examine the evidence.") in the Transition Plan table. The builder creates the HTML element and CSS styles it. This is a LOSSLESS handoff: the creative judgment (what to say in the transition) happens at TC, the mechanical implementation happens at builder. File 23 showed the missing footer in the flagship was a "smoking gun" for communication failure — the builder couldn't ask the planner what to put there. The handoff protocol eliminates this by providing the text.

**No kill zone.** Bridge prose is provided by TC, not derived by builder. The only risk is TC omitting bridge prose for BRIDGE/BREATHING transitions (the handoff validation checklist catches this).

---

### Instruction 11: "All backgrounds pass warm test (R >= G >= B)" (Phase 3 + Phase 8D)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 3, Step 3.1 (inline rule) + Phase 8D (verification checklist) + Builder Directives |
| **Phase** | 3 (Zone System) and 8 (Verification) |
| **Type** | BINARY — exact mathematical test (R >= G >= B) |
| **Propagation Path** | Recipe → Builder reads warm test rule → Tests each hex value → Corrects any cool grays |
| **File 21 Tier** | Tier 4 (BINARY threshold with verification, ~90%) |
| **Predicted Compliance** | 90% for recipe-provided values; 80% for builder-derived values |
| **Risk** | LOW-MEDIUM |

**Rationale:** The warm test is beautifully binary: decompose hex to RGB, check R >= G >= B. If the builder uses the template colors from Phase 3, all pass (they were pre-validated). Risk increases only for builder-derived colors. File 23 showed the remediation's builder correctly replaced 3 cool grays (#FAFAFA, #F8F8F8, #F0F0F0) with warm equivalents — proving the rule propagates. But the builder initially used cool gray callout backgrounds (#F5F8FA, #F5FAF5) before self-correcting. The recipe pre-validates all its example values, reducing this risk.

---

### Instruction 12: "Phase 8G Gestalt Perception Test: Does the page feel DESIGNED or PATCHED?" (Phase 8)

| Property | Value |
|----------|-------|
| **Source** | File 42, Phase 8, Step 8G |
| **Phase** | 8 (Verification) |
| **Type** | ABSTRACT — subjective judgment with no measurable threshold |
| **Propagation Path** | Builder scrolls page → Makes aesthetic judgment → Declares DESIGNED or PATCHED |
| **File 21 Tier** | Tier 8 (ABSTRACT conviction, ~30%) |
| **Predicted Compliance** | 30% (builder accurately self-assesses) |
| **Risk** | VERY HIGH |

**Rationale:** This is the LOWEST propagation instruction in the entire PV2 Flagship recipe. "Does the page feel DESIGNED?" is a judgment question — exactly the type that File 21 identifies as having ~30% reliability. The flagship experiment's builder passed all programmatic gates and presumably would have answered "DESIGNED" — yet PA-05 scored 1.5/4 (DO NOT SHIP). The builder's self-assessment is structurally unreliable for aesthetic judgment.

**Kill zone:** Self-assessment of "designed-ness" is the instruction most likely to die in transit. The comms protocol partially mitigates this for Ceiling+ tiers (planner reviews checkpoint, Wave 2 verifiers provide independent assessment). But the instruction itself, as written, depends on the builder's judgment — which File 23 proved unreliable.

**Mitigation already in recipe:** Phase 8G provides 4 sub-questions that decompose the judgment: (1) Does each screenful look different? (2) Does the page feel like it has zones? (3) Do grid layouts create spatial variety? (4) DESIGNED or PATCHED? Questions 1-3 are more concrete than question 4 and have higher propagation reliability (~60-70%).

---

### Instruction 13: "Mechanism deployment per-category minimums" (Phase 0 + Handoff Section 4)

| Property | Value |
|----------|-------|
| **Source** | Handoff protocol Section 4: Mechanism Deployment table (5 categories, 1+ each) |
| **Phase** | 0 (Content Analysis, via handoff) |
| **Type** | SEMI-CONCRETE — binary minimum per category, but judgment on WHICH mechanisms and WHERE |
| **Propagation Path** | TC selects mechanisms → Writes deployment table in handoff → Builder reads → Implements per-mechanism CSS at specified locations |
| **File 21 Tier** | Tier 5 (NUMBERED minimum with options, ~85%) for count; Tier 6 (~70%) for placement quality |
| **Predicted Compliance** | 85% (per-category count met); 70% (deployment locations match handoff) |
| **Risk** | MEDIUM |

**Rationale:** The handoff's Mechanism Deployment table is the LOSSLESS replacement for "sample 2-4 mechanisms." It specifies: category, mechanism name, where deployed, CSS channel, and why. This is dramatically more concrete than the master prompt's instruction. But the builder still needs to translate "Deploy #5 Dense/Sparse at Zone 1 vs Zone 2 padding contrast" into actual CSS — the handoff provides the mapping, the recipe provides the CSS templates, but the builder must connect the two.

**Kill zone:** The "Where Deployed" column says things like "Zone 1 (64px pad) vs Zone 2 (32px pad)." The recipe's Phase 3 provides the exact padding values. But the builder must CONNECT the handoff's mechanism location to the recipe's CSS template. This cross-reference between two documents is where information loss can occur — File 21's "cross-reference tax" (67 in master prompt, reduced to ~4 in remediation). The PV2 handoff has ~20-30 cross-references to the recipe, which is better than 67 but not zero.

---

### Instruction 14: "Isomorphism table: metaphor property → CSS expression → perception check" (Ceiling+ only, Handoff Section 5)

| Property | Value |
|----------|-------|
| **Source** | Handoff protocol Section 5: Isomorphism Table (Ceiling+ tiers) |
| **Phase** | Transits all phases (metaphor drives CSS across Phases 3-6) |
| **Type** | SEMI-CONCRETE — per-row CSS expressions + binary perception checks |
| **Propagation Path** | TC derives metaphor → Writes isomorphism table → Builder reads → Implements row-by-row CSS → Verifies per-row perception check |
| **File 21 Tier** | Tier 3-4 (CONCRETE restructure + BINARY verification, ~88-92%) per row |
| **Predicted Compliance** | 88% per isomorphism row (structural); 65% per perception check (self-assessment) |
| **Risk** | MEDIUM-HIGH (overall metaphor coherence) |

**Rationale:** The isomorphism table is the handoff protocol's crown jewel — it replaces "express the geological metaphor through CSS" (Tier 10, ~5%) with "Strata depth → Zone backgrounds: #FEF5EB → #F5EDE2 → #F8F6F3 → Can you SEE >= 2 color shifts?" (Tier 3-4, ~88-92%). This is a massive propagation improvement. But metaphor coherence across 7+ isomorphisms is emergent — individual rows may propagate but their INTERACTION may not. File 23's MG-04 analysis showed the flagship's metaphor was "announced" (40% structural without labels) even with zone backgrounds and border weights encoding it.

**Kill zone:** The perception check column operates at Tier 6 (~70%). If a row's CSS expression passes but its perception check is unreliable, the builder ships imperceptible metaphor encoding — the exact flagship failure. The comms protocol's mandatory APPROVAL at Phase 3 (Flagship tier) provides planner oversight of zone backgrounds, partially mitigating this.

---

### Instruction 15: "File-bus + SendMessage dual channel for checkpoints" (Comms Protocol, Section D3)

| Property | Value |
|----------|-------|
| **Source** | pv2-comms-protocol.md, Section D3: File artifact + SendMessage notification |
| **Phase** | Process (spans all phases) |
| **Type** | PROCESS — communication task with file deliverable |
| **Propagation Path** | Builder completes phase → Writes checkpoint file → Sends SendMessage → Planner reads file → Sends APPROVAL |
| **File 21 Tier** | Tier 5-6 (structured task with deliverable, ~75-85%) |
| **Predicted Compliance** | 80% (Ceiling+: checkpoint files written); 50% (Middle: self-checkpoints in HTML comments) |
| **Risk** | MEDIUM-HIGH |

**Rationale:** The comms protocol converts communication from an obligation (master prompt: "send 6 messages" — result: zero sent) to a TASK with a file deliverable. File 23 showed the flagship's zero-communication failure was because messages were afterthoughts, not tasks. The PV2 approach creates explicit checkpoint TASKS in the task system — the builder has a task "Write Phase 3 checkpoint" that is separate from "Execute Phase 3."

**Kill zone:** For Middle tier (0 messages mandated), the builder's self-checkpoints are HTML comments that are never reviewed by another agent. Self-assessment reliability applies. For Ceiling+ tiers, the checkpoint tasks are structural, but the 2-minute timeout (comms protocol Section C3) means the planner can miss a review window and the builder proceeds unreviewed. For Flagship, mandatory APPROVAL at 5 key phases provides the strongest gate — but adds 25+ minutes of overhead.

---

## PART B: FILE 23'S COMPLIANCE PREDICTORS APPLIED TO PV2 FLAGSHIP

File 23 identified 3 factors that predict instruction propagation:

### Predictor 1: Specificity (from File 21, Section 2)

**Distribution of PV2 Flagship instructions by specificity:**

| Specificity | Recipe (File 42) | Handoff | Combined PV2 | Master Prompt (comparison) |
|-------------|-----------------|---------|--------------|---------------------------|
| ABSTRACT | ~5% (conviction layer, Part 3) | ~3% (rationale columns) | ~4% | 24.3% |
| SEMI-CONCRETE | ~15% (perception checks, [CONTENT DECISION] markers) | ~25% (mechanism deployment, zone semantics) | ~18% | 57.4% |
| CONCRETE | ~80% (CSS code blocks, HTML templates, hex values) | ~72% (section inventory, transition plan, builder directives) | ~78% | 18.3% |

**Predicted propagation by specificity:**

| Tier (File 21) | PV2 Flagship % | Master Prompt % | Predicted Reliability | Weighted PV2 Compliance |
|----------------|---------------|-----------------|----------------------|------------------------|
| Tier 1-3 (CONCRETE) | 78% | 18.3% | 92-98% | ~74% of total instructions at 95% avg |
| Tier 4-6 (SEMI-CONCRETE) | 18% | 57.4% | 70-90% | ~14% of total at 80% avg |
| Tier 7-10 (ABSTRACT) | 4% | 24.3% | 5-50% | ~1% of total at 30% avg |

**Predicted overall compliance: ~89%** (weighted average: 0.78 * 0.95 + 0.18 * 0.80 + 0.04 * 0.30)

Compare: Master prompt predicted ~62% (0.18 * 0.95 + 0.57 * 0.65 + 0.24 * 0.30). Actual master: 73%. The predictor underestimated because it doesn't account for the master prompt's high-specificity soul rules (border-radius: 0) which were 100% compliant.

### Predictor 2: Verb Type (from File 21, Section 1)

**PV2 Flagship verb distribution (estimated from File 42 + handoff):**

| Category | Estimated Count | % | Master Prompt % |
|----------|----------------|---|-----------------|
| ACTION verbs (set, add, delete, replace, write, create) | ~85 | 62% | 26.2% |
| JUDGMENT verbs (verify, check, ensure, assess) | ~25 | 18% | 31.4% |
| CONSTRAINT verbs (must, must not, never, fail if) | ~15 | 11% | 38.2% |
| COGNITIVE verbs (derive, interpret, feel, understand) | ~8 | 6% | 4.3% |
| PROCESS verbs (route, assign, proceed) | ~5 | 4% | — |

**PV2 Flagship's Judgment:Action ratio = 0.29:1** (vs master prompt's 1.53:1, vs remediation's 0.23:1)

PV2 Flagship sits between remediation (0.23:1) and master prompt (1.53:1), closer to remediation. The remaining judgment verbs are concentrated in Phase 8 (verification) and [CONTENT DECISION] markers — NOT embedded in building phases.

### Predictor 3: Position in Document (from File 21, Section 3)

File 21 found that instructions in PRIMACY position (first few rules, rule S-01) achieve higher compliance. PV2 Flagship places:
- Soul constraints in Phase 2 Step 2.1-2.2 (EARLY — high compliance)
- Container width in Phase 2 Step 2.3 (EARLY — high compliance)
- Perception thresholds in Appendix A (LATE — lower visibility but redundantly embedded in each phase check)
- Metaphor isomorphisms in Handoff Section 5 (MIDDLE — read once at builder entry protocol Step 4)

**Position risk:** Appendix content has lower propagation reliability than inline content. But the recipe's phase-end PERCEPTION CHECKs reference the thresholds inline, providing a second exposure point.

### Predicted Overall Compliance

| Method | Predicted Compliance |
|--------|---------------------|
| Specificity-weighted | 89% |
| Verb-ratio extrapolation (remediation calibrated) | 91% |
| File 21 Tier distribution | 89% |
| **Average prediction** | **89-91%** |

**How many HIGH propagation (Tier 1-3)?** ~78% of PV2 Flagship instructions.
**How many LOW propagation (Tier 7-10)?** ~4% of PV2 Flagship instructions.

Compare: Master prompt had ~18% Tier 1-3 and ~24% Tier 7-10. The ratio of HIGH:LOW is 19.5:1 in PV2 Flagship vs 0.75:1 in the master prompt — a 26x improvement.

---

## PART C: KILL ZONES — Where Instructions Die in Transit

### Kill Zone 1: The Handoff Boundary (TC → Builder)

**Location:** Between TC's tension-composition pipeline and the builder's 9-phase recipe.
**Transit document:** `_build-plan.md` (handoff protocol)
**Instructions at risk:** All handoff-provided content — zone semantics, mechanism deployment, metaphor isomorphisms, bridge prose, layout assignments.

**How instructions die here:**
1. **Compression:** TC compresses its 6-phase analysis into a structured table. Information loss: estimated 5-10:1 (vs master prompt's 50:1). The handoff protocol's "Information Preservation Audit" (Part B) explicitly audits this, but the audit is a ONE-TIME design check, not a per-build verification.
2. **Field omission:** TC may leave optional fields blank. The handoff validation checklist (Part C, Step 1) catches REQUIRED fields but not OPTIONAL ones (e.g., rationale columns for Middle tier).
3. **Stale cross-references:** The handoff's mechanism deployment references catalog numbers (#1, #5, #7, etc.). If the mechanism catalog changes after the handoff protocol was designed, the numbers become stale.

**Predicted loss at handoff:** 5-10% of instructional content. Lower than master prompt's 50:1 compression but not zero.

**Mitigation already in place:** The handoff validation checklist, the per-field "Builder action" specifications, and the lossless isomorphism table (Ceiling+). The handoff protocol's anti-pattern detection (Part E) specifically targets the 5 most common compression failures.

### Kill Zone 2: Builder Context Window (1,747 lines of recipe)

**Location:** The builder's prompt during execution.
**Instructions at risk:** Late-document content, appendix material, conviction layer.

**How instructions die here:**
1. **Recency bias:** The builder reads 1,747 lines sequentially. By Phase 6, the soul constraints from Phase 2 are ~1,000 lines above the current working position. LLMs have better recall of recently-read content.
2. **Appendix neglect:** Appendix A (perception thresholds), Appendix B (deallocation protocol), and Appendix C (quick-reference card) are at lines 1,607-1,716 — the last 8% of the document. If the builder reads top-to-bottom and starts building before finishing, appendices are unread.
3. **Part 3 (conviction layer) drift:** The conviction layer (lines 1,429-1,488) provides aesthetic orientation but is positioned AFTER the recipe. Builders executing sequentially encounter conviction AFTER they've already internalized the recipe's mechanical steps. File 21 showed conviction propagates as "direction without magnitude" — but positioned after mechanical steps, it may not propagate at all.

**Predicted loss in context window:** 10-15% of appendix/conviction content. Minimal loss of recipe phases (sequential execution preserves phase ordering).

**Mitigation already in place:** The recipe's phase-end PERCEPTION CHECKs re-invoke thresholds inline. The Quick-Reference Card (Appendix C) is designed for builders who "know the system well" — i.e., second-time builders who skip the full recipe. The conviction layer is deliberately positioned as supplementary, not primary.

### Kill Zone 3: Self-Assessment (Perception Checks)

**Location:** End of each recipe phase (Phases 0-8).
**Instructions at risk:** All PERCEPTION CHECK instructions.

**How instructions die here:**
1. **Continuation bias:** The builder just wrote the CSS. They are predisposed to see their own work as correct. "Can you SEE at least 2 distinct background color shifts?" — the builder will answer "yes" even for 3 RGB-point deltas, because they KNOW the values are different (they wrote them).
2. **Capability mismatch:** LLMs process rendered HTML through Playwright screenshots or computed styles. They cannot perceive subtle color differences the way humans do. The perception check asks the builder to simulate human visual perception — but the builder IS an LLM, not a human.
3. **Binary collapse:** The perception check is binary (yes/no) but the underlying quality dimension is continuous. "Can you see 2 color shifts?" — yes, if you count a 3 RGB-point shift as "seeing." The check needs a magnitude qualifier ("visible WITHOUT a color picker") but magnitude assessment is itself a judgment call.

**Predicted loss at self-assessment:** 30-40% of perception check accuracy. The builder PERFORMS the check (~70%) but accurately assesses it (~60%). Combined: ~42% of perception checks catch actual problems.

**Mitigation already in place:** The comms protocol mandates planner review of checkpoints at Ceiling+ tiers. The APPROVAL format requires gate results with "measured value vs threshold" — forcing the builder to report numbers, not just "PASS." For Flagship, mandatory approval at Phases 0, 1, 3, 4, and 8 creates external review at the 5 most critical junctures. Mode 4 PA (Wave 2) provides 9 independent auditors as the final safety net.

### Kill Zone 4: Inter-Agent Message Quality

**Location:** Between builder and planner (Ceiling+ tiers).
**Instructions at risk:** CHECKPOINT messages, QUERY messages, FIX messages.

**How instructions die here:**
1. **Template compliance without substance:** The comms protocol provides exact message templates. The builder fills them out. But filling a template ≠ meaningful content. A PERCEPTION_CHECK field that says "I can see the zone transitions" complies with the format but provides zero diagnostic information. The protocol requires "visual observation verbs" but doesn't verify observation ACCURACY.
2. **Timeout default:** At Ceiling tier, the builder proceeds after 2 minutes without planner response. At Flagship, the timeout is 5 minutes. If the planner is busy or slow, checkpoints are unreviewed.
3. **File-bus vs message divergence:** The protocol requires BOTH file artifact AND SendMessage. If the builder writes the file but the SendMessage is vague ("see checkpoint file"), the planner must read the file — adding latency. If the builder sends a detailed message but skips the file, there's no reviewable artifact.

**Predicted loss at inter-agent communication:** 15-25% of intended review depth. Messages are sent but reviews are shallow.

**Mitigation already in place:** Binary rules on message content (gate results MUST have measured values, perception checks MUST have visual verbs). Banned message types (B1-B6) prevent noise. Task-based enforcement (checkpoint is a TASK, not an afterthought). But no mitigation for planner review quality — the planner's assessment of the builder's checkpoint is itself a judgment call.

---

## PART D: REMEDIATION COMPARISON — What Did 100% Compliance Look Different?

File 23 found remediation compliance at 100%. What structural properties enabled this?

### D1: Properties the Remediation Had (that PV2 Flagship preserves)

| Property | Remediation | PV2 Flagship | Preserved? |
|----------|------------|--------------|------------|
| Sequential phases | 9 phases, numbered, linear | 9 phases, numbered, linear | YES |
| Exact CSS values in code blocks | 80.9% CONCRETE directives | ~78% CONCRETE directives | YES (~2% lower) |
| Action verbs dominant | 63.4% action verbs | ~62% action verbs | YES |
| Judgment concentrated in verification | Phase 8 only | Phases 0 (content decisions) + 8 (verification) | PARTIALLY — Phase 0 adds judgment |
| Low negation density | 1 per 64 lines | Estimated ~1 per 50 lines | YES (slightly higher from soul constraints) |
| Single builder, complete spec | 1 Opus agent, 1,025 lines | 1 Opus agent, 1,747 lines (recipe) + ~300-600 lines (handoff) | PARTIALLY — longer spec |

### D2: Properties the Remediation Had (that PV2 Flagship CHANGES)

| Property | Remediation | PV2 Flagship | Risk of Change |
|----------|------------|--------------|----------------|
| Existing artifact to modify | Had 07-intentionality.html to improve | Builds from scratch | HIGHER — no anchor means more judgment in Phase 0 |
| Content already transformed | Prose was already reader-facing | Must transform source content | HIGHER — content transformation adds a judgment phase |
| Known defects to fix | Specific selectors and values to change | Unknown defects (building new) | HIGHER — remediation's FIX messages had exact targets |
| Single-document spec | Everything in one 1,025-line file | Recipe (1,747) + Handoff (~300-600) = 2 documents | MEDIUM — cross-document reference adds context window cost |
| Zero content decisions | "Do NOT change text content" | [CONTENT DECISION] markers throughout | HIGHER — builder must make judgment calls the remediation didn't |

### D3: What PV2 Flagship Should PRESERVE from Remediation Architecture

1. **Exact CSS values for every spatial property.** The recipe does this (Phase 2-6 code blocks). PRESERVE.
2. **WAS/NOW format for HTML restructuring.** The recipe provides HTML templates but not WAS/NOW diffs (because there's no prior version). For REMEDIATION contexts, the recipe's Appendix B (Deallocation Protocol) should adopt WAS/NOW. PARTIALLY PRESERVED.
3. **Phase-end perception checks with expected observations.** The recipe does this. PRESERVED.
4. **Constraints concentrated in an appendix, separated from action flow.** The recipe concentrates soul constraints in Part 3 (Conviction Layer) and Appendix C (Quick-Reference Card). PRESERVED.
5. **Zero abstract conviction in building phases.** The recipe has [CONTENT DECISION] markers that invoke judgment within building phases (Phase 0-1). The remediation had NO such markers. NOT PRESERVED — this is the primary compliance gap between PV2 Flagship (89%) and remediation (100%).

### D4: The 11% Gap Explained

**PV2 Flagship predicted: 89-91%. Remediation actual: 100%. Gap: 9-11%.**

The gap is entirely explained by:

| Source of Gap | Instructions Affected | Compliance Delta |
|--------------|----------------------|-----------------|
| [CONTENT DECISION] judgment calls (Phase 0, 1) | ~8 instructions | -15% per instruction → ~2-3% of total |
| Cross-document reference (recipe + handoff) | ~12 instructions | -5% per instruction → ~1% of total |
| Builder self-assessment accuracy (perception checks) | ~9 instructions | -30% per instruction → ~4% of total |
| Context window length (1,747 vs 1,025 lines) | All instructions | -2% uniform → ~2% of total |
| **Total predicted gap** | | **~9-11%** |

---

## PART E: RECOMMENDATIONS

### E1: Highest-Leverage Fixes (Predicted to Close the Gap)

1. **Pre-compute [CONTENT DECISION] answers in the handoff.** Currently, the handoff provides zone architecture and section inventory but leaves callout variant selection and some grid placement to the builder. If TC pre-computes ALL content decisions and embeds them in the handoff, the builder's judgment load drops from ~18% SEMI-CONCRETE to ~10%. Predicted compliance improvement: +3-4%.

2. **Reduce recipe length.** The 1,747-line recipe includes 540 lines of conviction, known risks, and appendices that the builder doesn't need during execution. Splitting into a ~1,200-line execution recipe and a separate ~550-line reference document would reduce context window cost. Predicted compliance improvement: +1-2%.

3. **Add programmatic perception gates.** Replace "Can you SEE X?" with "Run this JS: `getComputedStyle(el).backgroundColor` on S1 vs S5. Report the hex values and the RGB delta." This converts Tier 6 perception checks (~70%) to Tier 4 binary thresholds with verification (~90%). Predicted compliance improvement: +3-4%.

4. **Embed handoff cross-references inline.** Where the recipe says "Adapt selectors to YOUR section count," insert: "Your section count is in _build-plan.md, Section 3, '#' column. Read it now." This converts implicit cross-references to explicit read instructions. Predicted compliance improvement: +1%.

### E2: Predicted Compliance After Fixes

| Scenario | Predicted Compliance |
|----------|---------------------|
| PV2 Flagship as-is | 89-91% |
| After E1.1 (pre-compute content decisions) | 92-95% |
| After E1.1 + E1.3 (programmatic perception gates) | 95-97% |
| After all E1 fixes | 96-98% |
| Theoretical maximum (remediation-style single-artifact remediation) | 100% |

The 2-4% gap between "all fixes" (96-98%) and "theoretical maximum" (100%) is structural: PV2 Flagship builds from scratch, requiring SOME judgment. The remediation modified an existing artifact, requiring ZERO judgment. This gap is irreducible for new page construction.

---

## APPENDIX: PROPAGATION SUMMARY TABLE

| # | Instruction | Phase | Type | File 21 Tier | Predicted Compliance | Kill Zone | Risk |
|---|------------|-------|------|-------------|---------------------|-----------|------|
| 1 | Container 960px | 2 | CONCRETE | Tier 2 | 98% | None | VERY LOW |
| 2 | Zone count by word count | 0 | SEMI-CONCRETE | Tier 4 | 92% | Handoff boundary | LOW |
| 3 | >= 2 grid layouts | 0 | SEMI-CONCRETE | Tier 5 | 85% count / 70% quality | TC content analysis | MEDIUM |
| 4 | Zone bg >= 10 RGB delta | 3 | SEMI-CONCRETE + template | Tier 4 / Tier 7 | 90% template / 60% custom | Builder derivation | MEDIUM |
| 5 | Section left borders | 4 | CONCRETE | Tier 2-3 | 90% | Section count adaptation | LOW-MEDIUM |
| 6 | Zone 1 typography 17px | 5 | CONCRETE | Tier 2 | 95% | CSS specificity | LOW |
| 7 | Divider margins <= 24px | 4 | CONCRETE + BINARY | Tier 2 | 95% | None | LOW |
| 8 | Callout variants | 1 | CONCRETE + judgment | Tier 3 / Tier 6 | 85% HTML / 70% variant | Content interpretation | MEDIUM |
| 9 | Perception check Phase 3 | 3 | SEMI-CONCRETE | Tier 6 | 65% performed / 40% accurate | Self-assessment | HIGH |
| 10 | Bridge prose text | 1 | CONCRETE (handoff-provided) | Tier 2-3 | 92% | None | LOW |
| 11 | Warm test R >= G >= B | 3+8 | BINARY | Tier 4 | 90% recipe / 80% derived | Custom color derivation | LOW-MEDIUM |
| 12 | Gestalt "DESIGNED?" | 8 | ABSTRACT | Tier 8 | 30% | Self-assessment | VERY HIGH |
| 13 | Mechanism per-category | 0 | SEMI-CONCRETE | Tier 5-6 | 85% count / 70% placement | Handoff cross-reference | MEDIUM |
| 14 | Metaphor isomorphisms | All | SEMI-CONCRETE + perception | Tier 3-4 / Tier 6 | 88% CSS / 65% perception | Perception self-assessment | MEDIUM-HIGH |
| 15 | Checkpoint file-bus + message | Process | PROCESS task | Tier 5-6 | 80% Ceiling / 50% Middle | Timeout defaults | MEDIUM-HIGH |

**Weighted average predicted compliance: 89-91%**

---

**END OF PV2 FLAGSHIP PROPAGATION AUDIT**

**Key finding:** PV2 Flagship achieves 89-91% predicted compliance — a 16-18 point improvement over the master prompt (73%) but 9-11 points below the remediation (100%). The gap is entirely explained by 3 factors: [CONTENT DECISION] judgment calls, builder self-assessment accuracy, and cross-document reference cost. All 3 are tractable with the recommended fixes (E1.1-E1.4), which could close the gap to 96-98%.

**The single highest-leverage fix:** Replace perception checks with programmatic verification (E1.3). This converts 9 instructions from Tier 6 (~70%) to Tier 4 (~90%), directly addressing the weakest link in the propagation chain.

**Total instructions traced:** 15 (covering all 9 phases, 4 instruction types, 4 kill zones)
**Evidence sources:** File 23 (30 rules traced), File 21 (10-tier ranking + verb taxonomy), File 42 (1,747-line recipe), handoff protocol (709 lines), comms protocol (509 lines)
**Method:** Per-instruction causal chain tracing using File 21's propagation reliability ranking, calibrated against File 23's empirical compliance rates
