# Ceiling Preparation Brief: Unified Synthesis

**Date:** 2026-02-16
**Author:** cross-synthesizer (ceiling-preparation team)
**Inputs:** 9 specialist reports + master retrospective + unified action plan (11 source documents, ~15,000 lines)
**Purpose:** Single decision-making document for launching the Ceiling experiment

---

## 1. EXECUTIVE SUMMARY

### What is Ceiling?

Ceiling is NOT "Middle with more mechanisms." Ceiling and Middle use the SAME 18-mechanism catalog. The difference is WHY mechanisms are selected. Middle uses content-feature lookup (this content has code blocks, so deploy mechanism #17). Ceiling uses metaphor-driven derivation (this metaphor encodes geological depth, so border-weight + zone backgrounds + spacing compression ALL express "depth" simultaneously through different CSS channels). The mechanism count increase (8-12 to 12-15) is a byproduct of multi-channel encoding, not a target.

### What separates Ceiling from Middle?

Four dimensions separate the tiers, none of which is mechanism count alone:

1. **Selection logic:** Middle = content feature to mechanism (1:1 lookup). Ceiling = metaphor to shared semantic dimension to multiple mechanisms (1:many derivation).
2. **Reinforcing pairs:** Middle mechanisms solve different problems independently. Ceiling requires 2+ mechanism pairs encoding the SAME semantic dimension through different CSS channels (multi-channel coherence).
3. **Scale depth:** Middle = 2 scales (Page + Component). Ceiling = 4 scales (Navigation + Page + Section + Component). The missing section-scale coherence accounts for 15-20% of perceived richness gap.
4. **Metaphor derivation:** Middle uses a pattern lookup table (tutorial to CRESCENDO). Ceiling derives a metaphor through the full Phase 1-3 pipeline (multi-axis questioning, tension derivation, metaphor collapse).

### Is it ready to run?

**NO.** Nine reports converge on a set of prerequisites that must be completed first. The critical path has 5 blocking items (estimated 5-8 hours of preparation), after which the experiment itself should take 60-100 minutes with parallel agents. Running Ceiling without these prerequisites would repeat known Middle-tier failure modes and waste the build.

---

## 2. CRITICAL PATH (Must-Do Before Ceiling)

### TIER 1: Experiment Will FAIL Without These

**CP-01: Apply M1 permanently to tension-composition skill**
- **What:** Replace all "sample 2-4 mechanisms" language with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+). Add exception clause for content that genuinely cannot support a category.
- **Why critical:** ALL 11 research agents + Middle experiment identified "sample 2-4" as THE single most limiting specification. Without M1, Ceiling builder deploys 4 mechanisms across 2 categories (Floor-tier richness) despite running the full metaphor pipeline. 100% probability of experimental failure.
- **Reports that flagged it:** mod-tracker (CRITICAL), skill-auditor (BLOCKING E1), meta-auditor (item 1.10), checklist-architect (A-01), pipeline-analyst (binary rule principle), richness-analyst (mechanism count is NOT the gap -- but breadth enables it)
- **Effort:** 15 minutes (3 locations in skill file)
- **Dependencies:** None (standalone, do first)

**CP-02: Enable inter-agent communication protocol**
- **What:** Agents must use SendMessage for clarifying questions, issue flagging, and iteration requests. File-bus remains primary output mechanism. Flat topology (team-lead to agents directly) preserved.
- **Why critical:** Missing footer directly traceable to file-only isolation. CD-006 scored 39/40 WITH messaging; Middle scored B+ WITHOUT. 5 of 9 reports independently identified communication isolation as quality-limiting. The gap between "specifications applied correctly" and "compositionally confident" is partially explained by collaborative refinement.
- **Reports that flagged it:** checklist-architect (A-02, B-01 -- #1 most likely to be missed), pipeline-analyst (communication protocol principle), meta-auditor (items 4.1-4.4), tier-comparator (Ceiling section), master-retro (Finding 9)
- **Effort:** 30 minutes (integrated into execution prompt creation)
- **Dependencies:** Depends on CP-05 (execution prompt must exist first)

**CP-03: Add landmark completeness gate**
- **What:** Binary check between build and audit: header exists, footer exists, all named sections from plan exist in HTML. Gate is BLOCKING -- team-lead cannot proceed until verified.
- **Why critical:** Missing footer was WOULD-NOT-SHIP finding. 6 of 9 reports identified this as critical process gap. Costs 2 minutes, prevents severity-1 defects.
- **Reports that flagged it:** mod-tracker (NEW-2 CRITICAL), skill-auditor (E3 BLOCKING), meta-auditor (items 1.7, 2.2), checklist-architect (A-03, B-02), pipeline-analyst (gate discipline principle), master-retro (Finding 2)
- **Effort:** 15 minutes (add Phase 4.7B to skill + gate in execution plan)
- **Dependencies:** None for skill change; execution plan integration depends on CP-05

**CP-04: Add builder self-check (CPL + tokens + landmarks)**
- **What:** Builder verifies CPL (45-80) using formula, token compliance (>=80%) using var() scan, and landmark presence BEFORE writing file. Cannot proceed if checks fail.
- **Why critical:** 3 of 5 Middle defects were catchable by builder before audit. Binary rules achieve 100% compliance; judgment rules achieve 0%. Middle's 0/3 judgment rule compliance traces to having no verification method.
- **Reports that flagged it:** meta-auditor (items 2.1, 2.5), checklist-architect (A-04, B-03), pipeline-analyst (binary rule principle), skill-auditor (E5), master-retro (IX.3-4)
- **Effort:** 20 minutes (add to builder prompt slice)
- **Dependencies:** Depends on CP-05

**CP-05: Create Ceiling master execution prompt**
- **What:** The single orchestration document incorporating ALL Middle-tier lessons: metaphor derivation phases, communication protocol, gate structures, agent assignments, per-category minimums, mechanism interaction requirement, dual PA protocol, blind novelty protocol, plan-derived programmatic audit, timing estimates, success criteria.
- **Why critical:** Delivery vehicle for everything else. Without it, improvements are documented but not operational.
- **Reports that flagged it:** All 9 reports contribute requirements to this document
- **Effort:** 2-3 hours (the largest single work item)
- **Dependencies:** Depends on CP-01 (skill must be updated first)

---

### TIER 2: Experiment Will UNDERPERFORM Without These

**CP-06: Add rhythm variation requirement (3-transition minimum)**
- **What:** Binary rule: page must include 3+ DIFFERENT transition types (SMOOTH/BRIDGE/BREATHING) between major sections.
- **Why:** THE highest-leverage perceptual fix from Middle. Without it, 14-15 mechanisms still feel "metronomic rather than musical."
- **Reports:** mod-tracker (NEW-1 HIGH), skill-auditor (E2 BLOCKING), meta-auditor (item 1.6), checklist-architect (A-12, B-11), richness-analyst (rhythm as moderate signal)
- **Effort:** 15 minutes (add Phase 4.2C to skill)

**CP-07: Make heading spacing ratio a binary rule (1.5:1)**
- **What:** Convert from judgment ("should be 1.5:1") to binary programmatic check for all h2/h3 elements.
- **Why:** Binary rules = 100% compliance; this judgment rule achieved 0% compliance in Middle.
- **Reports:** mod-tracker (NEW-3 MEDIUM), skill-auditor (E4 HIGH), meta-auditor (item 1.8), checklist-architect (A-13, B-12)
- **Effort:** 10 minutes (modify guardrails table + add to programmatic audit)

**CP-08: Design blind novelty evaluation protocol**
- **What:** Evaluator receives 3 unlabeled pages in randomized order with zero context on experiment goals. Only after blind assessment, labels revealed.
- **Why:** Middle novelty (3/3) assessed by evaluator who KNEW hypothesis. Confirmation bias risk.
- **Reports:** checklist-architect (A-07, B-18 -- #3 most likely to be missed), pipeline-analyst (evaluation methodology), master-retro (Finding 7)
- **Effort:** 15 minutes

**CP-09: Add dual perceptual auditor protocol**
- **What:** Two independent fresh-eyes auditors evaluate in parallel. Reconciliation: agreement = high confidence, disagreement = flag for team-lead.
- **Why:** Addresses single-evaluator bias from Middle. Marginal cost (+5-7 min) for significant rigor improvement.
- **Reports:** checklist-architect (A-08, B-19), pipeline-analyst (dual evaluation), master-retro (X Phase 3)
- **Effort:** 20 minutes

**CP-10: Add token compliance self-check (Phase 4.9)**
- **What:** Builder scans CSS for raw hex/px values before file write. Target: >=80% var() references.
- **Why:** Middle token compliance was 66.5% (13.5 points below target). Builder discipline, not token gaps.
- **Reports:** mod-tracker (NEW-4 HIGH), meta-auditor (items 1.9, 6.1), checklist-architect (B-15)
- **Effort:** 15 minutes

---

### TIER 3: Nice-to-Have (Defer to Post-Ceiling)

- **M7 (Combination diversity mandate):** Ceiling-specific. Needs to see natural combinations before specifying minimums. Defer until after Ceiling provides data.
- **M6 (Mechanism justification requirement):** Adds accountability but doesn't change WHAT is selected. Can apply alongside M1 or defer.
- **Domain family check strengthening:** Audit-only. Affects novelty scoring, not building quality.
- **M9, M10, M11 (Perceptual auditing additions):** Audit refinements. Don't affect building, only measurement precision.
- **NEW-5 (PA-05 operationalization refinements):** Sub-criteria calibration. Current PA-05 works; refinements are incremental.
- **Mechanism impact profiles, content affinity, synergy matrix:** Catalog enrichments that improve selection quality but aren't blocking.
- **Border-weight application modes (progressive vs discrete):** Documentation gap, not execution blocker.
- **Middle-tier case study creation:** Useful reference but page itself serves as proof.

---

## 3. VERBIAGE SPECIFICATION

### Middle Tier (Unchanged)

"Deploy at least 1 mechanism from each of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation). Allow content-mechanism fit to determine how many beyond the minimum."

Per-category table:

| Category | Mechanisms Available | Minimum |
|----------|---------------------|---------|
| Spatial (S) | #5, #6, #15 | 1+ |
| Hierarchy (H) | #1, #4, #11 | 1+ |
| Component (C) | #2, #9, #10 | 1+ |
| Depth/Emphasis (D) | #3, #7 | 1+ |
| Structure/Nav (N) | #12, #13, #17 | 1+ |

Natural landing zone: 8-12 mechanisms. Counts are DESCRIPTIVE (what emerges), not PRESCRIPTIVE (what to target).

### Ceiling Tier (New)

```
CEILING TIER: Metaphor-Driven Multi-Channel Coherence

Selection Logic: Mechanisms are selected THROUGH a derived metaphor, not by
direct content-feature mapping.

Mandatory Requirements (binary, verifiable):
1. Metaphor derived through full Phase 1-3 pipeline
2. At least 1 mechanism from each of the 5 categories (breadth floor, same as Middle)
3. At least 2 REINFORCING PAIRS: mechanism pairs that encode the SAME semantic
   dimension through different CSS channels
   - Example: border-weight (#1) + zone background (#7) both encode "geological
     depth" -- weight increases AND background darkens as content deepens
   - Example: spacing compression (#4) + typographic scale (#11) both encode
     "importance" -- padding shrinks AND heading size shrinks together
4. Pattern visible at 4 scales (Navigation + Page + Section + Component)

Recommended (descriptive, not required):
- Natural landing zone: 12-15 mechanisms
- 3+ transition types for rhythm variation (smooth, bridge, breathing)
- 2+ mechanisms per category where content supports it

WHAT THIS MEANS IN PRACTICE:
Middle deploys mechanisms to solve DIFFERENT problems independently.
Ceiling deploys mechanisms to express the SAME semantic through multiple channels.
The count increase (8-12 -> 12-15) is a BYPRODUCT of multi-channel deployment,
not a target.
```

### Why This Wording

The verbiage-analyst evaluated 4 options (A: minimalist floor, B: depth-encouraging, C: category depth mandate, D: compositional mandate). The recommended wording is **Option A floor + Option D reinforcing pairs + 4-scale requirement**, but WITHOUT the 3-transition requirement as mandatory (kept as recommended to avoid pushing toward Flagship).

Key design decisions:
- **"1+ per category" stays the same for both tiers.** The reinforcing pairs requirement naturally produces 2+ per some categories without forcing mechanisms where content doesn't support them.
- **"2+ per category" was rejected.** For SYSTEM content, it only forces 1 additional mechanism (Spatial), and that mechanism is marginally justified. The reinforcing pairs approach gets the same depth effect without forcing.
- **Counts remain descriptive.** The 12-15 range is in "Recommended," explicitly labeled as not required. Reinforcing pairs + 4 scales inherently produce higher counts.
- **No Flagship creep.** Option D's full compositional mandate (3-transition minimum + multi-channel + category depth) risks pushing into Flagship territory. Keeping transitions as recommended stays safely within Ceiling.

---

## 4. CONTAINER WIDTH RULE

### The Rule

**Container width must be 940-960px at 1440px viewport. This is NON-NEGOTIABLE. No metaphor may override this.**

### One-Sentence Version for Execution Prompt

"Set `max-width: 960px` on the page container; express any metaphor-driven narrowing through INTERNAL padding (e.g., `padding: 0 120px` for 720px effective content width), never by reducing container width below 940px."

### Classification

Container width is a **SPECIFICATION CONSTRAINT** (readability floor), NOT a soul constraint (identity-defining). It is the STRONGEST specification constraint -- elevated to NON-NEGOTIABLE after Phase D (4/5 pages violated it, THE primary failure mode).

### Key Facts (from width-investigator)

- **Provenance:** 940px = 65% of 1440px viewport (perceptual threshold: below this, content feels like "narrow strip lost in margins"). 960px = 67% (breathing room preserved).
- **Enforcement:** 17 locations across 4 systems (tension-composition skill: 15 lines, perceptual-auditing: 3 lines, compositional-core: 4 lines, pipeline docs: 12 lines).
- **Crown jewels violated it:** DD-006 used 1000px, CD-006 used 1100px -- both built BEFORE the 960px ceiling was formalized. The rule tightened post-Phase D.
- **Phase D results:** Only Variant B (960px) was compliant. 4/5 pages violated (too wide OR too narrow).
- **Not in prohibitions.md:** Not identity-defining. Can be violated with documented justification (internal padding workaround), but violations in Phase D caused automatic FAIL verdicts.
- **Ceiling risk:** Metaphor derivation creates STRONG pressure to express metaphor through container width ("geological compression" = 720px, "ocean expanse" = 1200px). The rule at 3+ locations in the execution prompt must explicitly say: "metaphor shapes INTERNAL experience, never EXTERNAL width."

---

## 5. PIPELINE ARCHITECTURE

### Single Tiered Pipeline (Recommended)

ONE pipeline with THREE quality gates, not four separate pipelines per tier:

```
Phase 0: Content Selection
  Gate 1 (Entry): 800-1,200 words, 4+ structural types, binary soul rules

Phase 0.5: Track Classification (Addition Test)
  PASSES -> Track 1 (Middle, skip Phases 1-3)
  FAILS  -> Track 2 (Ceiling, full pipeline)

Phase 1: Planning (DIFFERS by track)
  Track 1: Pattern lookup (CRESCENDO/F-PATTERN/BENTO/PULSE) + per-category minimums
  Track 2: Metaphor derivation (Phases 1-3) + per-category minimums + reinforcing pairs
  Gate 2 (Middle floor): All 5 categories present

Phase 2: Build (SAME for both)
  Self-check: CPL formula, token scan, landmarks
  Gate: All self-checks PASS

Phase 3: Landmark Completeness Gate
  Team-lead verifies: header, footer, all named sections exist
  BLOCKING -- cannot proceed until verified

Phase 4: Audit (parallel)
  4a: Programmatic audit (generated FROM build plan, not generic)
  4b: Perceptual audit (Track 1: single auditor, Track 2: dual auditors)
  Gate 3 (Quality): PA-05 4/4, soul 7/7, container 940-960px

Phase 5: Evaluation (parallel)
  5a: Comparative audit (vs Middle baseline)
  5b: Blind novelty evaluation (3 unlabeled pages)

Phase 6: Verdict synthesis
```

### Key Architectural Decisions

- **Floor tier is DEPRECATED.** The Floor-to-Middle gap is LARGER (5 to 12 mechanisms, "formatted" to "designed") than Middle-to-Ceiling (12 to 15, vocabulary to compositional fluency). Running Floor wastes time producing substandard output. Middle is the universal minimum.
- **Middle is the default for 60-80% of pages.** Crosses the "designed" threshold (PA-05 4/4), reproducible with fixes applied, 35-50 minutes with parallel agents.
- **Ceiling is selective for 20-30% of pages.** Content must fail the Addition Test (components can't fulfill reader needs without transformation). Metaphor derivation adds 10-65 minutes over Middle.
- **Flagship is artisanal craft for 5-10%.** NOT part of the production pipeline. Multi-pass iteration, 240-400 minutes, reserved for crown jewels only.
- **Tracks differ ONLY in Phase 1.** All other phases (build, audit, evaluation, verdict) are IDENTICAL. This minimizes maintenance and duplication.
- **Binary rules only.** The architectural principle confirmed by Middle (7/7 binary PASS, 0/3 judgment FAIL): if a constraint matters, make it binary. Judgment language achieves approximately 0% agent compliance.

---

## 6. RICHNESS GAP ANALYSIS

### What Richness Actually Is

Multi-channel semantic encoding. Showcase pages say the SAME thing in 4-5 CSS channels simultaneously (border-weight + spacing + zone background + typography all encode "depth"). Middle says things in 2-3 channels. Floor says things in 1 channel.

### Composite Gap: Middle vs DD-006

| Dimension | DD-006 | Middle | Gap | Addressable by Ceiling? |
|-----------|--------|--------|-----|------------------------|
| Mechanism count | 12 | 12 | ZERO | N/A (count is not the gap) |
| Scale depth | 4 scales | 2 scales | 2 scales missing | YES -- add section + navigation scales |
| Multi-channel encoding | 4 channels/scale | 2-3 channels/scale | 1-2 channels | YES -- reinforcing pairs requirement |
| Iterative discovery | 900 min total | 100 min total | 800 min | NO -- would change tier |
| Metaphor unity | 100% saturation | 30% saturation | 70% | YES -- derive metaphor, apply to all |

- **Total addressable gap:** 60-70% (scales + encoding + metaphor)
- **Unaddressable gap:** 10-15% (iteration -- Ceiling is single-pass)
- **Current Middle richness:** ~60-65% of DD-006
- **Projected Ceiling richness:** ~85-90% of DD-006

### The Single Most Important Richness Dimension

**FRACTAL SCALE DEPTH (section-scale coherence).**

Middle deployed 12 mechanisms but only achieved 2-scale coherence (page + component). DD-006 achieved 4-scale coherence. The missing section-scale coherence -- each section INTERNALLY echoing the page-level pattern (sparse intro to dense detail to sparse resolution) -- accounts for 15-20% of perceived richness.

This is more impactful than adding 3-4 more mechanisms. Fractal coherence creates the sense that the SAME design intent is visible at every zoom level: header to page scroll to section structure to callout detail. Middle's sections have uniform internal structure (components placed, not composed into rhythms). Ceiling's sections must have internal rhythm.

### Provenance Usage by Tier

| Tier | Lines Read | Provenance % | Richness vs DD-006 |
|------|-----------|--------------|---------------------|
| Floor | 400-500 | ~10% | ~30% |
| Middle | 900-1,100 | ~35% | ~60-65% |
| Ceiling | 2,000-3,000 | ~55% | ~85-90% |
| Flagship | 4,000-6,000 | ~75% | ~95-98% |

Richness correlates with BOTH provenance depth AND iteration budget. The final 10-15% gap between Flagship and showcase is ITERATION (5-18 prior explorations), not vocabulary access.

---

## 7. CONFLICTS AND RESOLUTIONS

### Conflict 1: M1 Permanent Application vs n=1 Evidence

**mod-tracker, skill-auditor, checklist-architect, pipeline-analyst:** M1 is validated. Apply NOW. 11 research agents + 1 experiment = high confidence.

**master-retro blind-spots analysis:** n=1 sample size. Per-category may only work for technical infrastructure docs. Confounding variables (Opus planner, ideal-fit content, 4 simultaneous changes).

**Resolution:** Apply M1 permanently WITH an exception clause: "Per-category minimum is the DEFAULT. If content genuinely cannot support a category (e.g., narrative with no hierarchical structure), document the exception with rationale." This preserves the validated improvement while acknowledging the n=1 concern. Schedule multi-content validation as post-Ceiling follow-up but do NOT block on it. The cost of NOT applying M1 (continuing with "sample 2-4") far exceeds the risk of over-specifying for some content types.

### Conflict 2: Ceiling Per-Category Minimums -- "1+ per category" vs "2+ per category"

**checklist-architect (A-05):** Ceiling should use S:2+, H:2+, C:3+, D:2+, N:2+ (expected natural landing 11-15).

**verbiage-analyst:** "2+ per category" forces mechanisms in Spatial and Depth categories where content may not support 2. For SYSTEM content, 4/5 categories already had 2+ under "1+ per category." The constraint only binds on Spatial, where the forced mechanism is marginally justified.

**Resolution:** Keep "1+ per category" as the mandatory floor for Ceiling (same as Middle). Add the reinforcing pairs requirement as the Ceiling differentiator instead. The reinforcing pairs naturally produce 2+ per relevant category without forcing mechanisms where content doesn't support them. The 2+ numbers can be listed as "recommended" (descriptive), not "required" (prescriptive). This follows the "counts are descriptive not prescriptive" philosophy.

### Conflict 3: Effort Estimates

**meta-auditor:** 7-10 hours total before Ceiling is safe to run (12 CRITICAL items + 15 HIGH items).

**unified action plan:** 5-8 hours for preparation (Steps 1-5), 60-100 min for execution.

**pipeline-analyst:** Implies shorter since many items are integrated into the execution prompt creation.

**Resolution:** The realistic estimate is 5-8 hours of preparation. The meta-auditor's higher estimate includes items that are NICE-TO-HAVE (impact profiles, synergy matrix, case studies) rather than BLOCKING. The unified action plan's sequencing is more practical: apply M1 (15 min) + critical skill updates (2 hr) + create execution prompt (2-3 hr) + create prompt slices (1-2 hr) = 5-7 hours. Execution itself is 60-100 min.

### Conflict 4: Same Content (Comparison Rigor) vs Content-Metaphor Fit Risk

**pipeline-analyst, tier-comparator:** Use SAME SYSTEM content for clean tier comparison. Isolates tier variables.

**master-retro blind-spots:** SYSTEM content is concrete and procedural. Metaphor works best with abstract/conceptual content. Forcing metaphor on functional content may produce strained result.

**Resolution:** Run Ceiling with SAME content first (comparison rigor wins for first test). If metaphor feels forced/strained and Ceiling doesn't clearly exceed Middle, THEN run Ceiling-B with abstract content before concluding "metaphor doesn't work." Single-variable isolation is more valuable than optimizing for content-metaphor fit on the first test.

### Conflict 5: Whether Rhythm Variation Should Be Mandatory or Recommended for Ceiling

**skill-auditor, meta-auditor:** Make 3-transition minimum MANDATORY in skill (binary rule).

**verbiage-analyst:** Keep transition types as RECOMMENDED for Ceiling to avoid pushing toward Flagship. Option D (full compositional mandate including transitions) risks Flagship creep.

**Resolution:** Add 3-transition minimum as MANDATORY to the skill (Phase 4.2C). This is a PROCESS rule (builder must create variation), not a COMPOSITION rule (doesn't dictate which metaphor or mechanisms). It prevents the documented metronomic failure without prescribing aesthetic choices. The Flagship boundary is multi-PATTERN interaction, not transition variation -- these are different constructs. Rhythm variation is safely within Ceiling scope.

---

## 8. CEILING EXPERIMENT SPECIFICATION

### Content

Same as Middle: SYSTEM -- Remote Mac Control documentation. Enables direct tier comparison.

### Team Topology

Flat file-bus with messaging enabled. 1 team-lead + 10-12 workers (no intermediate captains). Per-file ownership (1 agent = 1 output file, zero contention).

### Agent Count and Roles

| Agent | Model | Role | Output File |
|-------|-------|------|-------------|
| team-lead | Opus 4.6 | Orchestration, gates, messaging hub | (coordination only) |
| metaphor-agent | Opus 4.6 | Phases 1-3: tension extraction, metaphor derivation | 01-metaphor-derivation.md |
| planner | Opus 4.6 | Phase 4: mechanism selection through metaphor lens | 02-build-plan.md |
| builder | Sonnet 4.5 | Phase 5: HTML/CSS implementation | ceiling-page.html |
| programmatic-auditor | Sonnet 4.5 | Phase 6a: binary compliance checks FROM build plan | 03-programmatic-audit.md |
| perceptual-auditor-1 | Sonnet 4.5 | Phase 6b: fresh-eyes PA (zero design context) | 04a-perceptual-audit.md |
| perceptual-auditor-2 | Sonnet 4.5 | Phase 6b: independent fresh-eyes PA | 04b-perceptual-audit.md |
| comparative-auditor | Sonnet 4.5 | Phase 7a: Ceiling vs Middle direct comparison | 05-comparison-report.md |
| novelty-evaluator | Sonnet 4.5 | Phase 7b: blind 3-page evaluation | 06-novelty-assessment.md |
| verdict-synthesizer | Sonnet 4.5 | Phase 8: final synthesis | 07-VERDICT.md |

**Total:** 10 agents (1 team-lead + 9 workers). Optional 11th: content-selector (if content needs re-extraction).

**Model split:** 3 Opus (team-lead, metaphor-agent, planner -- creative roles) + 7 Sonnet (execution roles). Validated by Middle experiment.

### Phases

```
Phase 0: Content selection (REUSE Middle's content selection output)

Phase 1-3: Metaphor derivation (metaphor-agent, Opus)
  Round 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
  Round 2: Tension derivation (identify irreducible tensions, score richness)
  Round 3: Metaphor collapse (structural isomorphism, domain search)
  Gate: Metaphor resonance (authenticity YES, cross-domain YES, multi-dimensional YES)
  Deliverable: 01-metaphor-derivation.md

Phase 4: Planning (planner, Opus)
  Input: Metaphor + mechanism catalog + pattern table
  Mechanism selection THROUGH metaphor lens (1:many derivation)
  Per-category minimums: S:1+, H:1+, C:1+, D:1+, N:1+
  2+ reinforcing pairs documented
  4-scale fractal table (Navigation + Page + Section + Component)
  Gate: All 5 categories present, interaction table complete, 4 scales documented
  Deliverable: 02-build-plan.md

Phase 5: Build (builder, Sonnet)
  Input: Build plan + pre-baked CSS blocks + metaphor summary
  Self-check BEFORE file write: CPL 45-80 (formula), tokens >=80% (scan), landmarks present
  Communication: SendMessage to planner for clarifications
  Gate: All self-checks PASS
  Deliverable: ceiling-page.html

Phase 5.5: Landmark completeness gate (team-lead)
  Verify: header exists, footer exists, section count matches plan
  BLOCKING -- do not proceed until verified
  If fails: team-lead messages builder to add missing elements

Phase 6: Audit (parallel)
  6a: Programmatic audit (generated FROM build plan, PLANNED vs DEPLOYED vs MISSING)
  6b: Dual perceptual audit (both zero-context, both receive identical inputs)
  Gate: 7/7 soul, container 940-960px, PA-05 4/4
  Deliverables: 03-programmatic-audit.md, 04a-perceptual-audit.md, 04b-perceptual-audit.md

Phase 7: Evaluation (parallel)
  7a: Comparative audit (Ceiling vs Middle on same content, >= 3 perceptual improvements)
  7b: Blind novelty evaluation (3 unlabeled pages in randomized order)
  Deliverables: 05-comparison-report.md, 06-novelty-assessment.md

Phase 8: Verdict synthesis
  Input: All audit + evaluation outputs + PA reconciliation
  Report pass MARGINS for all criteria (not just pass/fail)
  Include adversarial self-check (3 strongest challenges to verdict)
  Deliverable: 07-VERDICT.md
```

### Success Criteria

| Criterion | Threshold | Source |
|-----------|-----------|--------|
| PA-05 (Designed) | 4/4 sub-criteria PASS | checklist-architect B-04 |
| D3 (Novelty) | >= 2/3 signals NOVEL | checklist-architect B-05 |
| Better than Middle | >= 3 specific perceptual improvements | checklist-architect B-06 |
| 5-category coverage | All 5 categories present, total 11-15 | checklist-architect B-07 |
| Container width | 940-960px | checklist-architect B-08 |
| Soul compliance | 7/7 | checklist-architect B-09 |
| No WOULD-NOT-SHIP | Zero severity-1 findings | checklist-architect B-24 |
| Metaphor expression | PA observes "felt through" not "professionally stiff" | checklist-architect B-25 |
| Reinforcing pairs | >= 2 documented and implemented | tier-comparator, verbiage-analyst |
| 4-scale coherence | Navigation + Page + Section + Component documented with CSS evidence | checklist-architect B-22 |
| Inter-agent messaging | >= 5 substantive messages | checklist-architect B-01 |

### Risk Mitigations

| Risk | Mitigation | Source |
|------|------------|--------|
| Metaphor feels forced on technical content | Same content first; if strained, run Ceiling-B with abstract content | pipeline-analyst, blind-spots |
| Builder misses structural elements | Landmark completeness gate (Phase 5.5) | meta-auditor, master-retro |
| Metronomic rhythm despite metaphor | 3-transition minimum in skill (Phase 4.2C) | skill-auditor, mechanism-effectiveness |
| Metaphor overrides container width | 940-960px NON-NEGOTIABLE at 3+ locations in prompt | width-investigator, meta-auditor |
| Single-evaluator bias | Dual PA + blind novelty protocol | checklist-architect, pipeline-analyst |
| Agents don't actually message | Team-lead checks message count at Phase 5 completion; if zero, prompts agents | checklist-architect |
| Builder doesn't understand mechanism names | Decision: name + 1-line description + SendMessage fallback | meta-auditor, master-retro |
| Token compliance failure repeats | Builder self-check with var() scan before file write | meta-auditor, skill-auditor |

---

## 9. OPEN QUESTIONS

### Must Answer Before Ceiling

1. **Does the builder see full catalog entries or just mechanism names?** The footer bug suggests the builder didn't understand "Footer Mirror." The recommendation (from master-retro XII.2 and meta-auditor item 2.5) is: builder sees mechanism name + 1-line description from the plan, with SendMessage fallback to ask planner for clarification. This needs a final decision before the builder prompt slice is written.

2. **Should the planner or metaphor-agent be the same instance?** Currently specified as separate agents. If metaphor derivation is done by the planner, it saves one agent but introduces continuation bias (planner anchors to its own metaphor). The two-instance pattern recommends separation. Awaiting human decision.

### Should Answer Eventually

3. **Is per-category the driver, or just higher count?** The Middle experiment can't isolate which factor drove improvement. An ablation study (count-only vs per-category on same content) would resolve this. Deferred to post-Ceiling (action item D-10).

4. **What's the natural Middle-tier landing zone?** One experiment produced 12. Need 5+ experiments to establish the actual distribution. Ceiling provides n=2 data point.

5. **Can "felt through" be operationalized?** The perceptual audit distinguishes "applied correctly" from "felt through" but there's no metric. Is this the Ceiling/Flagship differentiator? Ceiling experiment will provide data.

6. **Does the content-selector firewall matter for real content?** The adversarial review predicts 80%+ output similarity between firewalled and non-firewalled content-selectors. Deferred test (action item D-02).

### Flagged But Not Blocking

7. **All evaluation is internal.** PA-05 was designed, measured, and applied by this project. Even if Ceiling passes all criteria, external validity (professional designer review, user testing) remains unaddressed. Should be done before declaring tier model "production-ready," but doesn't block the experiment.

8. **Timing model accuracy.** Middle took 35 min vs 70-100 predicted. Ceiling estimated at 60-100 min (recalibrated from 150-220). If Ceiling takes 40 min, it changes the cost-benefit calculation significantly (Middle + metaphor for only +5 min overhead). If it takes 150 min, the overhead question matters more.

---

## 10. SEQUENCED ACTION PLAN

| Step | Action | Effort | Dependencies | Who/What |
|------|--------|--------|--------------|----------|
| **1** | Apply M1 permanently to skill (replace "sample 2-4" at 3 locations, add exception clause) | 15 min | None | Human + agent edit skill file |
| **2** | Answer builder context question (name + 1-line description + SendMessage fallback) | 10 min | None | Human decision |
| **3** | Update skill with critical gates: landmark completeness (Phase 4.7B), rhythm variation (Phase 4.2C), heading spacing ratio (guardrails table), token self-check (Phase 4.9) | 2 hr | Step 1 | Human + agent edit skill file |
| **4** | Create Ceiling master execution prompt (incorporating all Middle lessons, metaphor phases, communication protocol, all gates, agent assignments, timing estimates) | 2-3 hr | Steps 1-3 | Human + agent |
| **5** | Create agent prompt slices (metaphor-agent, planner, builder, programmatic-auditor, PA-1, PA-2, comparative-auditor, novelty-evaluator, verdict-synthesizer) | 1-2 hr | Step 4 | Human + agent |
| **6** | Execute Ceiling experiment (10 agents, flat + messaging, same SYSTEM content) | 60-100 min | Steps 1-5 | Agent team |
| **7** | Synthesize and compare (Middle vs Ceiling on all success criteria) | 30-60 min | Step 6 | Agent team |

**Total preparation (Steps 1-5):** 5-8 hours
**Execution (Step 6):** 60-100 minutes
**Analysis (Step 7):** 30-60 minutes

**Critical dependency chain:** Step 1 (M1) -> Step 3 (skill updates) -> Step 4 (execution prompt) -> Step 5 (prompt slices) -> Step 6 (experiment).

Steps 1 and 2 can run in parallel. Step 3 depends on Step 1. Steps 4-5 are the largest work items and depend on Step 3.

---

**END CEILING PREPARATION BRIEF**

*Synthesized from: TIER-COMPARISON-MATRIX.md (1,047 lines), MODIFICATION-INVENTORY.md (608 lines), VERBIAGE-ANALYSIS.md (387 lines), CEILING-MASTER-CHECKLIST.md (1,071 lines), AUXILIARY-PRE-CEILING-AUDIT.md (745 lines), SKILL-ENRICHMENT-AUDIT.md (880 lines), CONTAINER-WIDTH-INVESTIGATION.md (752 lines), PIPELINE-REPRODUCIBILITY.md (926 lines), RICHNESS-COMPARISON.md (1,281 lines), 09-MASTER-RETROSPECTIVE.md (507 lines), TAKEAWAY-UNIFIED-ACTION-PLAN.md (433 lines).*
