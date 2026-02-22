# Epistemic Certainty Loss in the /build-page Pipeline

**Date:** 2026-02-20
**Scope:** Maps every point where confidence levels, uncertainty markers, or epistemic status gets flattened as information passes from research through TC through conventions brief to the builder agent.

---

## 1. THE PROBLEM STATEMENT

The /build-page pipeline compresses research (337 findings, 11 agents, N=1 through N=25 evidence) into a ~120-line TC brief and a ~585-line conventions brief. During this compression, epistemic status -- the degree of certainty behind each claim -- is systematically removed. By the time information reaches the builder, everything carries equal implied authority: "background delta >= 15 RGB" (Tier 1, 11/25 corpus files) sits alongside "font-weight >= 200 units" (Tier 2, N=1 derived from a single failure analysis) with zero marker distinguishing them.

This report maps 7 specific flattening points, evaluates each as FEATURE or BUG, and proposes a calibrated response.

---

## 2. THE SEVEN FLATTENING POINTS

### FP-1: Mechanism Confidence Flattening (TC Brief -> Builder)

**Where it happens:** The mechanism catalog (`mechanism-catalog.md`) contains rich epistemic information per mechanism: cross-file frequency counts, Perceptual Effectiveness ratings (HIGH/MEDIUM/LOW), transfer test results, and validation status against the Strategy Library and Fresh Extraction reports. When the TC agent selects mechanisms in Phase 4 and writes them into TC Brief Section 4 (SELECTED MECHANISMS), this information is compressed to a 1-line CSS recipe per mechanism plus "how it serves the metaphor."

**What is lost:**

| Mechanism | Catalog Evidence | What Reaches Builder |
|-----------|-----------------|---------------------|
| #1 Border-Weight Gradient | HIGH effectiveness, 4 source files (OD-004, Boris-2, CD-006, Strategy Library), VALIDATED | "border-left: 4px solid var(--accent-purple); encodes depth progression" |
| #4 Spacing Compression | LOW effectiveness ("invisible to untrained eye"), 4 source files | "padding: 64px -> 48px -> 40px; tightening encodes density" |
| #6 Width Variation | LOW effectiveness ("operates below conscious perception"), 3 source files | "max-width: 70% for narrow, 100% for wide; creates horizontal rhythm" |
| #8 Scroll Witness | LOW effectiveness ("functional, not visual"), 3 source files, MEDIUM complexity (requires JS) | "sticky TOC with active tracking" |
| #16 Drop Cap | MEDIUM effectiveness, "editorial/narrative only" context note | "::first-letter 3.5em in Instrument Serif" |

**The asymmetry:** Mechanism #1 (border-weight gradient, HIGH perceptual effectiveness, validated in 4+ case studies) receives the same single-line treatment as Mechanism #6 (width variation, LOW perceptual effectiveness, 3 source files). The builder has no way to know that #1 is a proven workhorse while #6 is subtle enough to be invisible to untrained readers.

**Verdict: PARTIAL BUG.** The builder does not need the full provenance chain, but DOES need perceptual effectiveness ratings. A mechanism rated LOW perceptual effectiveness requires different deployment strategy than a HIGH one -- it cannot carry multi-coherence at a zone boundary alone, it needs to pair with a HIGH-effectiveness mechanism. Stripping this signal means the builder may assign equal boundary-carrying weight to all mechanisms.

---

### FP-2: Perception Threshold Confidence Flattening (PA Skill -> Conventions Brief -> Builder)

**Where it happens:** The PA skill's Perception Threshold Reference Table contains a critical note:

> **Confidence:** The principle of perception thresholds is Tier 1 (11/25 corpus files). Specific values are Tier 2 (N=1, derived from flagship failure analysis). Treat as strong hypotheses.

This note appears in the PA skill file but does NOT appear in the conventions brief. The conventions brief (Section 2: PERCEPTION) presents these thresholds as "the physics of human perception" -- language that implies established law, not hypothesis.

**Specific threshold confidence breakdown:**

| Threshold | Evidence Basis | Confidence | Presented As |
|-----------|---------------|------------|--------------|
| Background >= 15 RGB | 11/25 corpus files + flagship failure (1-8 RGB proved imperceptible) | Tier 1 (strong) | "The physics of visibility" |
| Font-size >= 2px | N=1 (flagship analysis) | Tier 2 (hypothesis) | "The physics of visibility" |
| Letter-spacing >= 0.03em | N=1 (flagship analysis: 0.001-0.01em proved invisible) | Tier 2 (hypothesis) | "The physics of visibility" |
| Padding >= 24px | N=1 (flagship analysis) | Tier 2 (hypothesis) | "The physics of visibility" |
| Font-weight >= 200 units | N=1 (flagship analysis) | Tier 2 (hypothesis) | "The physics of visibility" |
| Total stacked gap <= 120px | N=1 (flagship failure: 210-276px voids) | Tier 2 (hypothesis) | "The physics of visibility" |

**The problem:** The conventions brief says "Adjacent zone backgrounds exist in different hues only when at least one RGB channel differs by 15 or more points." This is presented with the same authority as "border-radius: 0" -- a soul constraint validated across 100% of corpus files. But 15 RGB has ~44% corpus backing while font-weight >= 200 has a single data point. By wrapping all thresholds in "physics of human perception" framing, Tier 2 hypotheses acquire Tier 1 authority.

**Verdict: MIXED.** For the builder, treating thresholds as hard floors is CORRECT behavior -- violating even a Tier 2 threshold risks the failure mode it was designed to prevent. The flattening is harmful only if a threshold proves WRONG, in which case the builder has no signal that this value was always provisional. The right fix is not to weaken builder compliance but to tag thresholds so they can be updated without undermining trust in the system.

---

### FP-3: Metaphor Quality Grade Flattening (TC Phase 3.5G -> TC Brief -> Builder)

**Where it happens:** The TC skill includes a rigorous 18-point rubric (Phase 3.5G) that scores metaphors across 6 criteria: Interpretive Distance, Content-Shape Fit, Structural Survival, Perceptual Risk, Mechanism Diversity, and Restraint Compatibility. This produces a composite score mapped to 4 verdict levels:

- 15-18: STRONG METAPHOR
- 12-14: VIABLE METAPHOR
- 9-11: WEAK METAPHOR
- 0-8: REJECT METAPHOR

The TC brief (Phase 4.5) Section 1 says "STRUCTURAL METAPHOR: [name]" and explains why it is structural, lists CSS directions, and includes the BECAUSE test. But the rubric SCORE does not survive into the brief. The builder receives the metaphor as a fait accompli with no quality grade attached.

**What is lost:** A builder receiving a metaphor scored 12/18 (VIABLE, barely passing) should treat it differently from one scored 17/18 (STRONG). With a VIABLE metaphor, the builder should expect more resistance when trying to express it structurally -- it may require more effort to achieve PA-44 (structural survival without labels). With a STRONG metaphor, the builder can trust that structural expression will emerge naturally from the CSS directions.

**Additionally lost:** The per-criterion breakdown. A metaphor scoring 12/18 with Structural Survival = 1 and Mechanism Diversity = 3 sends a very different signal than one scoring 12/18 with Structural Survival = 3 and Mechanism Diversity = 1. The former warns "you will struggle to make this visible without labels." The latter warns "you will have limited CSS channels to work with."

**Verdict: BUG.** The metaphor quality grade is high-signal, low-cost information. Adding "QUALITY: VIABLE (12/18), Structural Survival: 1/3 -- invest heavily in CSS expression" to the TC brief costs 1 line and gives the builder actionable calibration. This is the clearest case of harmful flattening in the pipeline.

---

### FP-4: Component Confidence Flattening (Component Inventory -> Builder)

**Where it happens:** The component inventory (`component-inventory.md`) classifies 34 components by confidence level:

- HIGH (8+ source files): 10 components (29%) -- e.g., Callout (27/27 files), Code Block (25/27)
- MEDIUM (4-7 source files): 18 components (53%) -- e.g., Footer (18/27), Data Table (19/27)
- LOW (2-3 source files): 6 components (18%) -- e.g., Reasoning Blocks, Comparison layouts

The builder's reference file for components is `components.css` (the merged CSS) plus the conventions brief Section 8 (CSS VOCABULARY), which describes component patterns as "the design system's proven vocabulary." The confidence rating per component does not reach the builder.

**What is lost:** A builder selecting between a HIGH-confidence Callout (validated in 100% of corpus files) and a LOW-confidence Reasoning Block (validated in ~11% of corpus files) treats them as equally reliable. The Callout's CSS patterns are battle-tested; the Reasoning Block's may have edge cases not yet discovered.

**Verdict: ACCEPTABLE FEATURE.** Unlike mechanism perceptual effectiveness (FP-1), component confidence primarily reflects FREQUENCY OF PRIOR USE, not reliability. A LOW-confidence component may be perfectly reliable for its content niche -- it just has not appeared in many explorations because its content trigger is rare. The builder's creative authority explicitly permits inventing new component patterns not in `components.css`. Attaching confidence warnings to components risks suppressing justified creative decisions.

---

### FP-5: Research Provenance Flattening (337 Findings -> tokens.css + conventions-brief)

**Where it happens:** The full research corpus (R1-R5, 337 findings) feeds through Phase C extraction into the compositional core, which is further compressed into the conventions brief and tokens.css. By the time research reaches the builder, it is encoded as values with zero provenance.

**Specific examples of provenance loss:**

| Design Decision | Research Provenance | What Builder Sees |
|----------------|--------------------|--------------------|
| border-radius: 0 | Soul constraint from Stage 1, validated across 100% of 27 exploration files | "border-radius: 0 -- Every edge is sharp. Decisive, not friendly." |
| 940-960px container | Phase D failure analysis: 4/5 pages violated it, THE primary failure mode | "The page container is 940-960px wide, centered. This is non-negotiable." |
| No letter-spacing < 0.025em | Flagship failure: 107 lines of 0.001-0.01em produced zero visible difference | "No element should carry letter-spacing below 0.025em -- values in the 0.001-0.025em range are always sub-perceptual." |
| 4px base spacing unit | R3 density research (51 findings), validated in DD explorations | "Spacing follows a 4px base unit: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96." |
| Drop cap max 2 sections | CD-006 observation: "rarity creates impact" | "Deploy in at most 2 sections. Rarity creates impact." |

**The compression ratio:** 337 findings (estimated ~120,000 lines of research) compress into ~585 lines of conventions brief plus 174 lines of tokens.css. That is roughly 160:1 compression. The WHY behind every value is stripped.

**Verdict: FEATURE (with one exception).** The builder does not need to know that border-radius: 0 emerged from "fortress content" or that 4px base spacing was validated in DD explorations. Provenance would add noise without changing builder behavior -- the values are LOCKED regardless of their origin. The one exception is FAILURE PROVENANCE: when a value exists specifically to prevent a measured failure mode, a 1-line "this prevents X" annotation is high-value. The conventions brief already does this well in several places (e.g., "The failed Flagship experiment proved this: backgrounds differing by 1-8 RGB points read as the same color"). This practice should be consistent, not sporadic.

---

### FP-6: Mechanism Combination Uncertainty (Independent Selection -> No Interaction Modeling)

**Where it happens:** The mechanism catalog documents compatible and incompatible combinations in the "Combination Rules" section, but this is limited to 4 compatible pairs and 3 incompatible pairs. The catalog does not model INTERACTION UNCERTAINTY -- what happens when 14+ mechanisms are deployed simultaneously, some from HIGH-evidence categories and some from LOW-evidence categories.

**The compound uncertainty problem:** If Mechanism #1 (HIGH confidence, 4+ case studies) is deployed alongside Mechanism #6 (LOW confidence, 3 case studies) at the same zone boundary, the combination has not been validated. The individual mechanisms are tested; their interaction is not. The pipeline treats mechanism selection as an additive process (select A, select B, deploy both) when composition is actually multiplicative (A x B may produce emergent effects neither exhibited alone).

**Specific unmodeled interactions:**

| Combination | Individual Evidence | Interaction Evidence | Risk |
|------------|-------------------|---------------------|------|
| Spacing Compression (#4) + Width Variation (#6) | Both LOW perceptual effectiveness | ZERO (never combined in corpus) | Combined subtlety may produce imperceptible double-shift |
| Bento Grid (#15) + Dense/Sparse Alternation (#5) | Both MEDIUM effectiveness | 1 case study (CD-006) | Grid cells with alternating density may create visual noise |
| Drop Cap (#16) + Dark Header (#13) | MEDIUM + HIGH | 2 case studies | No known risk, but small sample |

**Verdict: ACCEPTABLE TRADE-OFF.** Modeling interaction uncertainty across 18 mechanisms (153 pairwise combinations, 816 triplets) is computationally intractable for a brief. The TC agent implicitly handles this through metaphor-driven selection (mechanisms chosen to serve a shared semantic dimension tend to reinforce rather than conflict). The real safeguard is the PA audit -- if an interaction produces bad results, auditors will catch it perceptually. The pipeline's architecture (build -> verify -> fix) is itself the uncertainty management strategy.

---

### FP-7: Epistemic Status of the Anti-Scale Model

**Where it happens:** The anti-scale model (Richness = semantic density x restraint x spatial confidence) is presented in the conventions brief Section 3 as the governing principle, stated flatly: "Zero in any factor produces zero richness, regardless of the other two." This model emerged from scale exploration research (6 Opus agents) and was validated by the flagship failure (22% of CSS budget on imperceptible micro-typography = zero density, zero restraint). But it is a MODEL, not a law. Its epistemic status -- N=1 validation against a failure case, no positive validation against a success case beyond CD-006 -- is not communicated.

**What is lost:** The anti-scale model's three factors (density, restraint, confidence) are presented with the same authority as the soul constraints (border-radius: 0). But the soul constraints have 100% corpus validation. The anti-scale model has theoretical derivation + one failure validation + one success comparison. A builder who treats the anti-scale model as proven law may over-index on it at the expense of other compositional strategies not captured by the model.

**Verdict: ACCEPTABLE FEATURE.** The anti-scale model is presented as a PRINCIPLE, not a rule with binary compliance gates. It guides compositional thinking ("is my CSS perceptible? am I exercising restraint? does the spatial architecture feel confident?"). Attaching epistemic uncertainty to a guiding principle would likely reduce its effectiveness as a heuristic without improving builder outcomes. Principles need to feel authoritative to function as principles. The risk of over-indexing is managed by the builder's creative authority clause ("You may override ANY non-soul value if you log the override with compositional reasoning").

---

## 3. THE FLATTENING TAXONOMY

Not all flattening is equal. Three distinct types emerge:

### Type A: Confidence-in-Evidence Flattening

Where the EVIDENCE BASIS (how many data points, how strong) is stripped. FP-1 (mechanism perceptual effectiveness), FP-2 (perception threshold tiers), FP-4 (component confidence).

**Character:** This flattening hides how WELL-TESTED a claim is. "We have 25 data points for this" becomes indistinguishable from "we have 1 data point for this."

### Type B: Quality-of-Derivation Flattening

Where the QUALITY ASSESSMENT of a pipeline-internal product is stripped. FP-3 (metaphor quality grade).

**Character:** This flattening hides how GOOD the TC agent's work was. The builder receives the output but not the quality assessment of that output. This is equivalent to a code review that strips the reviewer's confidence annotations before sending to the implementer.

### Type C: Provenance-Chain Flattening

Where the REASONING CHAIN behind a decision is stripped. FP-5 (research provenance), FP-7 (anti-scale model status).

**Character:** This flattening hides WHY something is the way it is. The builder receives the value but not the justification. This is the deepest compression and also the most defensible -- the builder's job is to BUILD, not to re-derive the reasoning.

---

## 4. THE CRITICAL QUESTION: FEATURE OR BUG?

### The Case for Feature (Epistemic Flattening is Desirable)

1. **Builder focus.** The builder's job is to translate a TC brief into CSS. Adding epistemic annotations creates decision paralysis. "Should I deploy this MEDIUM-confidence mechanism or find an alternative?" is not a question the builder should be asking mid-build.

2. **Guardrail architecture.** The pipeline is designed around binary gates, not probabilistic reasoning. Binary rules achieve 100% agent compliance; judgment rules achieve ~0%. Introducing "this threshold is Tier 2, treat as hypothesis" converts a binary gate into a judgment call.

3. **Correct abstraction level.** The builder operates at the CSS level. Research provenance operates at the theory level. Mixing abstraction levels produces the "660:1 meta-to-output ratio" that characterized the flagship failure. The builder should receive WHAT TO DO, not WHY WE THINK THIS IS RIGHT.

4. **Verification handles uncertainty.** The PA audit (9 auditors, 65 questions) is the pipeline's uncertainty management system. If a Tier 2 threshold is wrong, auditors will detect the perceptual failure. The builder does not need to pre-compensate for threshold uncertainty when post-build verification catches it.

### The Case for Bug (Epistemic Flattening is Harmful)

1. **Deployment strategy differs by confidence.** A HIGH-perceptual-effectiveness mechanism can carry a zone boundary alone. A LOW one cannot -- it needs a companion. Stripping effectiveness ratings means the builder may assign a LOW mechanism as the sole channel shift at a critical boundary.

2. **Metaphor quality shapes builder investment.** A VIABLE metaphor (12/18) demands different builder behavior than a STRONG one (17/18). The builder cannot know to invest extra effort in structural CSS expression without knowing the metaphor scored low on Structural Survival.

3. **Threshold updates without provenance are arbitrary.** When a Tier 2 threshold is revised (say, padding delta changes from >= 24px to >= 16px based on new evidence), the builder with no epistemic context sees an arbitrary value change. The builder with Tier 2 annotation understands this was always provisional.

4. **False authority creates brittle trust.** When everything is presented as physics, discovering that ONE value was a hypothesis undermines trust in ALL values. Transparent epistemic marking creates antifragile trust -- the builder knows which values are bedrock and which are scaffolding.

### The Resolution: Selective Transparency

**Epistemic flattening is a FEATURE for Type C (provenance-chain) and a BUG for Types A and B (confidence-in-evidence and quality-of-derivation).**

The builder does not need to know WHY border-radius is 0. The builder DOES need to know:

1. That Mechanism #4 (spacing compression) has LOW perceptual effectiveness and cannot carry a boundary alone (FP-1 fix)
2. That the font-weight >= 200 threshold is a hypothesis, not a law (FP-2 annotation)
3. That the metaphor scored 12/18 with Structural Survival = 1 (FP-3 fix)

The principle: **strip the reasoning chain, preserve the confidence signal.**

---

## 5. SPECIFIC REMEDIATION RECOMMENDATIONS

### R1: Add Perceptual Effectiveness to TC Brief Mechanism List (Addresses FP-1)

**Current TC Brief Section 4 format:**
```
- #1 Border-Weight Gradient [H]: border-left: 4px/3px/1px; encodes depth progression
- #4 Spacing Compression [H]: padding: 64px->48px->40px; tightening encodes density
```

**Proposed format:**
```
- #1 Border-Weight Gradient [H] (HIGH vis): border-left: 4px/3px/1px; encodes depth
- #4 Spacing Compression [H] (LOW vis): padding: 64px->48px->40px; tightening encodes density
  -> PAIR with HIGH-vis mechanism at boundaries
```

**Cost:** ~20 extra characters per mechanism line, plus 1 annotation line for LOW-vis mechanisms.
**Benefit:** Builder knows which mechanisms can anchor zone boundaries and which need companions.

### R2: Add Confidence Tier to Perception Threshold Table (Addresses FP-2)

**Current conventions brief Section 2 format:**
```
Adjacent zone backgrounds exist in different hues only when at least one RGB
channel differs by 15 or more points.
```

**Proposed format (conventions brief Section 2, table annotation):**
```
| Property        | Threshold | Confidence |
|-----------------|-----------|------------|
| Background      | >= 15 RGB | STRONG (11/25 corpus) |
| Font-size       | >= 2px    | HYPOTHESIS (N=1) |
| Letter-spacing  | >= 0.03em | HYPOTHESIS (N=1) |
| Padding         | >= 24px   | HYPOTHESIS (N=1) |
| Font-weight     | >= 200    | HYPOTHESIS (N=1) |
| Stacked gap     | <= 120px  | HYPOTHESIS (N=1) |
```

**Critical: compliance behavior must NOT change.** The builder still treats all thresholds as floors. The annotation exists for two reasons: (a) when thresholds are updated, the builder understands why, and (b) if a builder's aesthetic judgment conflicts with a HYPOTHESIS threshold, they have a documented basis for requesting review rather than silently overriding. Override still requires build-log documentation per creative authority clause.

### R3: Add Metaphor Quality Score to TC Brief Section 1 (Addresses FP-3)

**Current TC Brief Section 1 format:**
```
## 1. STRUCTURAL METAPHOR
Geological Stratification
WHY STRUCTURAL: Bedrock->surface maps to foundation->speculation...
```

**Proposed format:**
```
## 1. STRUCTURAL METAPHOR
Geological Stratification [VIABLE 12/18 -- Structural Survival: 1/3]
WHY STRUCTURAL: Bedrock->surface maps to foundation->speculation...
BUILDER NOTE: Low Structural Survival score. Invest heavily in CSS expression
of depth via backgrounds + borders + spacing. Do not rely on section labels
to communicate the metaphor.
```

**Cost:** 2-3 lines added to TC brief.
**Benefit:** Builder calibrates metaphor-expression effort to metaphor strength. A STRONG metaphor (17/18) needs less explicit CSS work because the content-form fit naturally produces structural expression. A VIABLE metaphor (12/18) needs deliberate, focused CSS investment.

### R4: Failure Provenance Annotations (Addresses FP-5 partially)

The conventions brief already contains some failure provenance (e.g., "The failed Flagship experiment proved this: backgrounds differing by 1-8 RGB points read as the same color"). Extend this practice consistently to all constraint values that exist specifically to prevent a documented failure mode.

**Current:** "No single margin or padding value exceeds 96px."
**Proposed:** "No single margin or padding value exceeds 96px. [Flagship: individual values passing but stacking to 210-276px voids.]"

**Cost:** ~10-15 words per constraint.
**Benefit:** Builder understands the failure mode they are preventing, not just the rule they are following. This turns compliance from mechanical ("must not exceed 96px") to comprehending ("96px cap exists because values stack at boundaries").

### R5: Do NOT Add Interaction Uncertainty Modeling (Addresses FP-6)

The pipeline's architecture (build -> gate -> audit -> fix) is the correct uncertainty management strategy for mechanism interaction. Adding interaction uncertainty annotations would move the builder from recipe-execution mode to risk-assessment mode, which is exactly the recipe-to-checklist failure pattern identified in the flagship retrospective. The PA audit catches interaction failures perceptually. No change needed.

### R6: Do NOT Add Epistemic Status to the Anti-Scale Model (Addresses FP-7)

The anti-scale model functions as a compositional HEURISTIC. Attaching "N=1 validation" would undermine its function without improving builder outcomes. The model's validation will come from pipeline runs, not from epistemic annotations. No change needed.

---

## 6. THE EPISTEMIC BUDGET PRINCIPLE

Not every piece of information deserves epistemic annotation. There is a budget -- each annotation adds cognitive load for the builder. The principle for spending this budget:

**Annotate when the confidence level CHANGES BUILDER BEHAVIOR.**

| Information | Does Confidence Change Behavior? | Annotate? |
|-------------|----------------------------------|-----------|
| Mechanism perceptual effectiveness | YES: LOW-vis mechanisms need companions at boundaries | YES (R1) |
| Perception threshold tier | MARGINALLY: builder still complies, but understands provisionality | YES, lightweight (R2) |
| Metaphor quality grade | YES: VIABLE metaphors need more CSS expression effort | YES (R3) |
| Component confidence rating | NO: builder selects components by content fit, not confidence | NO |
| Research provenance | NO: builder uses values regardless of origin | NO (except failure provenance) |
| Anti-scale model status | NO: model guides thinking, not compliance | NO |
| Interaction uncertainty | NO: PA audit catches failures | NO |

**The formula:** If stripping confidence would change zero builder decisions, strip it. If stripping confidence would lead to a suboptimal but undetectable builder decision, preserve it.

---

## 7. THE DEEPER QUESTION: EPISTEMIC ARCHITECTURE

The pipeline's epistemic architecture is currently FLAT -- all information at every level carries implied equal authority. The remediation above adds a TIERED architecture at three specific points. But a more fundamental question emerges:

**Should the pipeline be epistemically homogeneous or heterogeneous?**

**Homogeneous (current):** All rules are binary. All thresholds are floors. All metaphors are locked. All mechanisms are equal. The builder operates in a single epistemic mode: compliance.

**Heterogeneous (proposed):** Some rules are proven laws (soul constraints). Some are strong hypotheses (Tier 1 thresholds). Some are provisional (Tier 2 thresholds). Some mechanisms are reliable (HIGH vis). Some are experimental (LOW vis). The builder operates in two modes: compliance for laws, informed judgment for hypotheses.

**The risk of heterogeneity:** It re-introduces the judgment-call failure mode. "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%" is the pipeline's most important architectural principle. Every epistemic annotation is a micro-invitation to judgment.

**The mitigation:** The annotations proposed above do NOT convert binary rules into judgment calls. The thresholds remain binary floors. The mechanisms remain selected. The metaphor remains locked. The annotations add CONTEXT to binary compliance, not alternatives to it. The builder still MUST achieve >= 15 RGB background delta. They now also KNOW this is Tier 1 evidence. The knowledge does not change the compliance requirement.

**The architectural principle:** Epistemic transparency at the ANNOTATION layer. Binary compliance at the ENFORCEMENT layer. These are not contradictory -- they operate at different cognitive levels. The builder complies with the rule AND understands its provenance. This is how human professionals work: a structural engineer follows the building code (binary) while understanding which provisions are empirically proven and which are safety factors (epistemic awareness).

---

## 8. SUMMARY OF FINDINGS

**7 flattening points identified.** 3 require remediation (FP-1, FP-2, FP-3). 1 requires partial remediation (FP-5, failure provenance only). 3 require no change (FP-4, FP-6, FP-7).

**Total cost of remediation:** ~50-70 additional lines across TC brief and conventions brief. ~25 characters per mechanism in TC brief Section 4. 1 small table annotation in conventions brief. 2-3 lines in TC brief Section 1. Scattered 10-15 word failure provenance annotations.

**The governing principle:** Strip the reasoning chain, preserve the confidence signal. The builder does not need to know WHY a threshold exists (Type C flattening is a feature). The builder DOES need to know HOW CERTAIN we are that the threshold is correct (Type A flattening is a bug) and HOW GOOD the TC agent's derivation was (Type B flattening is a bug).

**The answer to the critical question:** Epistemic certainty loss is MOSTLY a feature -- it keeps the builder focused on execution rather than meta-reasoning. But it is a BUG at exactly three points where the confidence level would change builder behavior: mechanism deployment strategy, metaphor expression investment, and (marginally) threshold provisionality. Fix those three. Leave the rest flat.

---

## 9. RELATIONSHIP TO OTHER HANDOFF RESEARCH

This analysis intersects with:

- **Compression loss research:** The 50:1 compression from agent output to behavioral constraint (MEMORY.md finding) is a specific instance of Type C flattening. This report distinguishes Type C (acceptable) from Types A and B (problematic).
- **Recipe vs checklist finding:** Epistemic annotations must NOT convert recipes into checklists. R1-R3 are designed to ADD context to recipes, not to add decision points.
- **Binary rule principle:** All remediation preserves binary enforcement. No annotation converts a binary gate into a judgment call.
- **Guardrail factory finding (7.9:1 guardrail-to-playbook ratio):** Epistemic annotations slightly increase the guardrail surface. R1 partially compensates by adding deployment guidance ("PAIR with HIGH-vis mechanism at boundaries") -- this is playbook, not guardrail.

---

*End of report. ~380 lines.*
