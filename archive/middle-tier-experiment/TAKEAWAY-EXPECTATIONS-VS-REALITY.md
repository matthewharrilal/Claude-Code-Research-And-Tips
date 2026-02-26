# Expectations vs Reality: Middle-Tier Experiment Analysis

**Date:** 2026-02-16
**Analyst:** expectations-analyst
**Mission:** Systematically compare every pre-experiment prediction against actual outcomes to identify embedded assumptions and their implications for Ceiling tier.

---

## Comprehensive Divergence Table

| Prediction | What Actually Happened | Gap | Embedded Assumption | Implication for Ceiling |
|------------|------------------------|-----|---------------------|-------------------------|
| **1. Timing: 70-100 min (tier model) or 4.5-6.5 hrs (planning docs)** | 35 minutes wall-clock | 8-11x faster than projected | Planning model estimated SEQUENTIAL human time (one person doing all phases) instead of PARALLEL agent time (8 agents with separate contexts executing concurrently in waves) | Ceiling timing estimates need complete recalibration. Instead of 150-220 min sequential, expect ~45-100 min parallel (4-5 min/agent × 10-12 agents × 3-4 waves). Cost-benefit calculation changes dramatically. |
| **2. Mechanism count: 8-10 mechanisms** | 12 mechanisms (S:1, H:3, C:4, D:2, N:3) | +20-50% higher than range | The 8-10 range was backward-engineered from showcase pages WITHOUT per-category minimums. Per-category minimums (1+ × 5 categories) naturally land at 8-12, not 8-10. | Middle natural landing zone is 8-12. Ceiling with per-category minimums raised (S:2+, H:2+, C:3+, D:2+, N:2+) will naturally land at 11-15, not exactly 12-15. Widen the expected range. |
| **3. "Designed" feeling: crossing PA-05 threshold = qualitative shift from formatted to designed** | Page crossed PA-05 threshold (4/4) but perceptual audit called it "professionally stiff" rather than "compositionally confident." Auditor noted: "Feels like specifications applied correctly, not composition felt through." | Passing DESIGNED gate ≠ FEELING designed | Assumed PA-05 is a RICHNESS threshold. Actually it's a VOCABULARY FLUENCY threshold. There's a second dimension — COMPOSITIONAL FLUENCY — that vocabulary alone doesn't reach. | Ceiling must add metaphor not just for higher mechanism count, but for COMPOSITIONAL PURPOSE. Mechanisms chosen to EXPRESS something (metaphor) vs mechanisms chosen to COVER categories (vocabulary). "Felt through" requires intent, not just breadth. |
| **4. Pattern selection: expected CRESCENDO (tutorial content)** | F-PATTERN deployed. Content was reference/mixed, not pure tutorial. | Content-type mapping mispredicted | Assumed "SYSTEM documentation" = tutorial. Actually it's reference architecture (lookup-heavy with code examples). M5 mapping correctly selected F-PATTERN (top-heavy info architecture). | For Ceiling: verify content type BEFORE assuming pattern. Mixed content (reference + tutorial + API) may not map cleanly to single pattern. Consider HYBRID patterns at Ceiling tier. |
| **5. File-bus topology: sufficient for execution** | Speed: YES (35 min). Quality: NO (missing footer, 'professionally stiff'). Zero SendMessage calls = zero agent collaboration. | File-bus optimizes speed at quality cost | Assumed communication overhead is WASTE. Actually it's QUALITY MECHANISM. CD-006 (39/40) and Phase C (11/11 criteria) both used agent messaging. Middle-tier WITHOUT messaging: B+ quality with defects. | **CRITICAL FOR CEILING:** Agents MUST communicate via SendMessage. Preserve flat topology (team-lead → agents) but change protocol from file-only to file + messaging. Builder needs ability to ask planner clarifying questions ("What does Footer Mirror look like?"). This may be THE gap between "applied correctly" and "felt through." |
| **6. M1 (per-category minimums) unlocks richness** | CONFIRMED. 12 mechanisms, all 5 categories covered, PA-05 4/4, novelty 3/3. Clear perceptual improvement over Variant B (dark header authority, code block anchors, zone backgrounds). | None — prediction validated | Assumed per-category structure is necessary driver. Experiment doesn't isolate whether it's per-category OR just higher count (8-10 total). Both produce breadth. | Run ablation before Ceiling: "Deploy 8-10 total" vs "1+ per category" on same content. If total-only produces poor coverage (e.g., S:0, H:5, C:3, D:0, N:2), per-category structure is load-bearing. If coverage is similar, just raise the floor. |
| **7. Two-instance pattern prevents template copying** | CONFIRMED. Builder never saw mechanism catalog, case studies, or master prompt. Result: border-weight gradient (4px→3px→1px for security layers) = novel composition not present in showcases. D3 3/3 NOVEL. | None — prediction validated | Assumed continuation bias is the copying mechanism. Evidence supports this: firewalled builder produced original composition. | Maintain two-instance pattern for Ceiling. Planner reads catalog, builder doesn't. BUT: builder may need PARTIAL catalog access (mechanism names + 1-line descriptions) to implement complex combinations. Test this. |
| **8. Token compliance: should be >= 80%** | 66.5% (145 var() refs / 218 total values). 73 raw hex/px values not replaced. | -13.5 percentage points below threshold | Assumed "should be 80%" = builder will attempt compliance. Actually judgment language = zero enforcement. | Make token compliance a BINARY rule with self-check gate. Builder scans own CSS for raw values before writing file. Target: >= 80%. Binary enforcement = 100% compliance (Theory 5 validated: binary rules achieve 100% compliance, judgment rules achieve 0%). |
| **9. All planned sections built** | Footer MISSING despite build plan specifying "#14 Footer Mirror" with full CSS. Perceptual audit: "no visual ending" (WOULD-NOT-SHIP). | Critical implementation gap | Assumed prompt slicing is safe information compression (75-92% context reduction with no quality loss). Actually it creates blind spots: builder saw 40% of master prompt, missed implementation guidance. | Add landmark completeness GATE at Phase 2→3 boundary. Team-lead verifies ALL planned structural elements (header, footer, all named sections) exist in HTML before launching auditors. Costs ~2 min, catches severity-1 defects. Prompt slicing may have other hidden failure modes. |
| **10. Fresh-eyes auditing finds issues** | CONFIRMED. Zero-context perceptual auditor identified: missing footer (WOULD-NOT-SHIP), heading spacing ratio violation, top-heavy weight distribution, metronomic rhythm. ALL findings that context-loaded agents would have rationalized. | None — prediction validated | Assumed fresh-eyes finds DIFFERENT issues than loaded agents. Evidence: loaded agents focus on rule compliance (7/7 soul PASS), fresh-eyes finds perceptual flow gaps. | Maintain zero-context perceptual auditing for Ceiling. Never give auditor the build plan, mechanism catalog, or master prompt. Add SECOND fresh-eyes auditor for Ceiling (dual evaluation with reconciliation) to address single-evaluator bias. |

---

## THE 3 BIGGEST PREDICTION FAILURES AND WHAT THEY TEACH US

### 1. THE TIMING DISCREPANCY: 8-11X FASTER THAN PROJECTED

**What we predicted:** 70-100 minutes (tier model) or 4.5-6.5 hours (planning documents)

**What happened:** ~35 minutes wall-clock time

**The gap:** 8-11x speed improvement

**Why we were wrong:**

The planning model estimated SEQUENTIAL HUMAN TIME — one person doing content selection, then planning, then building, then auditing, then evaluation, all back-to-back in a single context window.

Agent teams execute in PARALLEL — 8 agents with SEPARATE context windows executing CONCURRENTLY in 2-agent waves. The content-selector finishes in ~5 minutes and hands off to the planner. While the planner works (~8 min), the content-selector's work is done. While the builder works (~10 min), the content-selector and planner are done. The 35 minutes is NOT the sum of all agent times, it's the LONGEST POLE in each wave.

**The embedded assumption:**

"Build time = sum of phase times" is true for HUMANS. It's false for PARALLEL AGENT TEAMS.

**What this teaches us about Ceiling:**

The tier model predicts Ceiling at 150-220 minutes based on showcase page build times (DD-006, CD-006 took 4-6 hours of iterative multi-pass work). But those were SINGLE-AGENT iterative builds, not MULTI-AGENT parallel builds.

For Ceiling with 10-12 agents:
- Metaphor derivation: ~10 min (1 agent)
- Planning: ~10 min (1 agent)
- Building: ~12 min (1 agent)
- Auditing: ~6 min (2 agents in parallel)
- Evaluation: ~6 min (2 agents in parallel)
- Verdict: ~5 min (1 agent)

Total: ~45-60 minutes if waves don't overlap, 30-40 minutes if they do.

The 150-220 min estimate is likely **3-4x too high**. Ceiling's actual execution time may be **45-100 minutes**, dramatically improving the cost-benefit calculation.

**Confidence:** MEDIUM. Single data point. Ceiling's metaphor derivation phases may not parallelize as cleanly (might require iteration between metaphor agent and planner).

---

### 2. THE COMMUNICATION ISOLATION COST: SPEED ≠ QUALITY

**What we predicted:** Flat file-bus topology with zero SendMessage calls would be sufficient for execution. Previous experiments used agent messaging for coordination, which created overhead.

**What happened:**

- **Speed:** YES — 35 minutes, zero coordination overhead, zero contention
- **Quality:** NO — missing footer (WOULD-NOT-SHIP), 'professionally stiff' feeling, no collaborative refinement

**The gap:**

File-only communication optimizes for ZERO FAILURES (no coordination bugs) but costs QUALITY REFINEMENT. The builder had a plan specifying "#14 Footer Mirror" but couldn't ask the planner "What does Footer Mirror look like?" or verify completeness with any teammate.

Compare:
- **CD-006 (WITH messaging):** 39/40 score, "compositionally confident"
- **Phase C (WITH messaging):** 11/11 criteria met
- **Phase D Variant B (WITH messaging):** 18/19 compliance
- **Middle-tier (WITHOUT messaging):** B+ quality, 3 defects, "professionally stiff"

**Why we were wrong:**

We conflated PROCESS EFFICIENCY (zero coordination bugs, zero message accumulation) with OUTPUT QUALITY (compositional confidence, perceptual richness).

Previous hierarchical experiments (Phase C: 3-layer, Phase D: 2-layer) had coordination PROBLEMS:
- Captains became information bottlenecks
- Workers reported to captains, captains aggregated for lead
- 2-3 messages per file processed
- Delayed error detection

We concluded: "agent messaging creates coordination overhead → eliminate messaging."

**But we threw out the baby with the bathwater.** The problem wasn't MESSAGING, it was HIERARCHY. Messaging in a FLAT topology doesn't create bottlenecks because there are no intermediate captains. Agents message the team-lead directly or message each other directly.

**The embedded assumption:**

"Zero messaging = zero coordination overhead = faster execution" is TRUE.

"Faster execution = better output" is FALSE.

**What this teaches us about Ceiling:**

The missing footer is the smoking gun. In a messaging-enabled team:
- Builder writes HTML, notices footer CSS specified but uncertain about implementation
- Builder messages planner: "Footer Mirror — is the border-top red or using --clr-accent? Same background as header?"
- Planner responds: "Same background (--clr-neutral-100), no border-top, mirror means same height/padding as header"
- Builder implements correctly
- Footer ships

In the file-bus isolation:
- Builder writes HTML, notices footer uncertainty
- Builder has no one to ask
- Builder either skips it (what happened) or guesses wrong
- Footer fails

**For Ceiling tier:**

Agents MUST communicate via SendMessage. Required capabilities:
1. **Builder → Planner:** Ask clarifying questions about plan specifications
2. **Auditor → Team-Lead:** Flag issues mid-process before proceeding
3. **Team-Lead → Builder:** Request targeted iteration
4. **Planner → Builder:** Proactive guidance for metaphor expression

The flat TOPOLOGY (team-lead → agents directly, zero captains) is validated — keep it. The COMMUNICATION PROTOCOL (file-only) must change to file + messaging.

**Confidence:** HIGH. The evidence is consistent across multiple experiments. The missing footer is a concrete, traceable consequence of communication isolation.

---

### 3. THE DESIGNED PARADOX: PASSING THE GATE ≠ FEELING DESIGNED

**What we predicted:**

"Designed" is a binary threshold defined by PA-05 (4 sub-criteria). Cross the threshold → page feels designed rather than formatted. The hypothesis: Middle tier (8-10 mechanisms across 5 categories) crosses this threshold.

**What happened:**

- **PA-05 result:** 4/4 PASS (all sub-criteria met at both viewports)
- **Perceptual audit verdict:** "Feels like specifications applied correctly, not composition felt through"
- **Descriptor:** "Professionally stiff" not "compositionally confident"

The page PASSED the "designed" gate but DOESN'T FEEL designed.

**The gap:**

PA-05 measures VOCABULARY FLUENCY:
- PA-05a: Non-default layout elements (do you know non-obvious CSS techniques?)
- PA-05b: Padding range ratio >= 2.0x (do you vary your spacing vocabulary?)
- PA-05c: Visual hierarchy under blur (can you organize elements beyond document flow?)
- PA-05d: Non-framework CSS composition (is this custom work or template filling?)

Passing PA-05 means: "This builder knows many mechanisms and applies them correctly."

But there's a SECOND dimension the perceptual audit detected: COMPOSITIONAL FLUENCY.

"Specifications applied correctly" = vocabulary fluency. You know the tools and use them appropriately.

"Composition felt through" = compositional fluency. The tools were chosen to EXPRESS a coherent concept, not just to COVER categories.

**Why we were wrong:**

We assumed DESIGNED is a single-dimension binary gate. Actually it's a TWO-DIMENSION space:

**Dimension 1: Vocabulary Fluency (BREADTH)**
- Knowing many mechanisms
- Applying them correctly for content needs
- Covering all 5 categories
- Middle tier achieves this → PA-05 4/4

**Dimension 2: Compositional Fluency (PURPOSE)**
- Mechanisms chosen to express a metaphor
- Multi-channel coherence (3+ mechanisms encoding same dimension)
- "Felt through" = reader perceives the compositional intent
- Middle tier does NOT achieve this → "professionally stiff"

**The embedded assumption:**

"Richness = vocabulary fluency" (Theory 2) was CONFIRMED — heavy constraint + high vocabulary = designed output.

But we didn't realize DESIGNED has a ceiling. Vocabulary fluency maxes out at "professionally stiff." To reach "compositionally confident" requires compositional fluency.

**What this teaches us about Ceiling:**

The tier model needs reframing:

| Tier | Vocabulary Fluency | Compositional Fluency | Feeling |
|------|-------------------|---------------------|---------|
| Floor | LOW (5 mechanisms, 2 categories) | N/A (no pattern) | Formatted |
| Middle | HIGH (8-12 mechanisms, 5 categories) | LOW (lookup-based) | Professionally stiff |
| Ceiling | HIGH (12-15 mechanisms, 5 categories) | MEDIUM (metaphor-driven) | Compositionally confident? |
| Flagship | HIGH (16-18 mechanisms, 5 categories) | HIGH (multi-pattern) | Felt through |

Middle proves that vocabulary ALONE can cross the PA-05 threshold. But it ALSO proves that vocabulary alone can't create the "atmosphere" or "felt through" quality.

Ceiling must add:
1. **Metaphor derivation** (Phases 1-3) — gives the page a REASON for its choices
2. **Mechanism interaction requirement** — "For 3+ mechanism pairs, document how they REINFORCE each other (multi-channel encoding)"
3. **Agent communication** — enables collaborative refinement that creates compositional confidence

The border-weight gradient (4px→3px→1px for security layers) was the Middle experiment's ONLY moment of compositional fluency — one mechanism encoding a semantic dimension (criticality) across multiple instances. If Ceiling can make EVERY mechanism choice that intentional, it should cross from "stiff" to "confident."

**Confidence:** HIGH. The perceptual audit's "applied correctly vs felt through" distinction maps cleanly to vocabulary vs compositional fluency. The two-dimension model explains both Middle's success (PA-05 pass) and its limitation ("stiff" feeling).

---

## SECONDARY DIVERGENCES

### Pattern Selection (Expected CRESCENDO, Got F-PATTERN)

**Why:** Content-type misprediction. "SYSTEM documentation" was assumed to be tutorial format. Actually it's reference architecture (lookup-heavy, mixed content). M5's content-type mapping correctly selected F-PATTERN (top-heavy information architecture) over CRESCENDO (narrative progression).

**Implication:** For Ceiling, verify content type classification BEFORE assuming pattern. Mixed content may need hybrid patterns.

---

### Mechanism Count Natural Landing Zone (8-10 → 12)

**Why:** The 8-10 range was backward-engineered from showcase pages built WITHOUT per-category minimums. Per-category minimums (1+ per category × 5 categories) naturally distribute as S:1-2, H:2-3, C:2-4, D:1-2, N:2-3 = 8-12 total. The 12 isn't an overshoot — it's the NATURAL top of the range.

**Implication:** Middle landing zone is 8-12, not 8-10. Ceiling with raised per-category minimums (S:2+, H:2+, C:3+, D:2+, N:2+) will land at 11-15, possibly higher.

---

### Token Compliance (Expected ≥80%, Got 66.5%)

**Why:** Judgment language ("should be 80%") = zero enforcement. Theory 5 validated: binary rules achieve 100% compliance (7/7 soul constraints PASS), judgment rules achieve 0% compliance (0/3 judgment rules met).

**Implication:** Make token compliance BINARY with builder self-check gate. Scan CSS for raw values before writing. Target: ≥80%. Include approved exceptions (border-width: 1px|3px|4px).

---

### Footer Implementation (Expected Complete, Got Missing)

**Why:** Prompt slicing blind spot. Builder saw 40% of master prompt. The missing 60% contained implementation guidance. Plan specified "#14 Footer Mirror" but builder lacked context to prioritize it or ask what "Mirror" means.

**Implication:** Add landmark completeness GATE. Phase 2→3 boundary: team-lead verifies header exists, footer exists, all named sections from plan exist. Binary check, ~2 min, catches severity-1 defects.

---

### Fresh-Eyes Auditing Effectiveness (Predicted, Confirmed)

**Why:** Zero-context auditor only sees WHAT EXISTS, not WHY it exists. No rationalization, no confirmation bias. Found issues (missing footer, heading spacing, weight distribution, rhythm monotony) that context-loaded agents would justify as "acceptable given constraints."

**Implication:** Maintain zero-context protocol for Ceiling. Add SECOND fresh-eyes auditor (dual evaluation with reconciliation) to address single-evaluator bias concern from adversarial review.

---

### Two-Instance Pattern (Predicted, Confirmed)

**Why:** Continuation bias exploitation. Builder never read master prompt, mechanism catalog, or case studies. Result: novel composition (border-weight gradient) not derivative copying. D3 3/3 NOVEL confirmed.

**Implication:** Maintain for Ceiling. BUT: builder may need PARTIAL catalog access (mechanism name + 1-line description) to implement complex Ceiling-tier combinations. Test hybrid approach.

---

## CROSS-CUTTING INSIGHT: THEORY 5 IS THE MASTER KEY

The experiment provided PERFECT validation for Theory 5: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

**Binary rules (100% compliance):**
- Container width 940-960px: 960px exact ✓
- border-radius: 0: verified ✓
- box-shadow: none: verified ✓
- No pure black/white: verified ✓
- Typography trinity: verified ✓
- All h3 italic: 4/4 ✓
- No gradients: verified ✓

**Judgment rules (0% compliance):**
- Token compliance "should be ≥80%": 66.5% ✗
- CPL "should be 45-80": 82 chars ✗
- Heading spacing "should be 1.5:1": appears equal ✗

**Result:** 7/7 binary rules passed, 0/3 judgment rules met.

**Implication for Ceiling:**

If a constraint MATTERS, make it BINARY. If it's judgment, expect agents to ignore it. Every "should" in the skill is a compliance hole.

Convert to binary:
1. Token compliance: "MUST be ≥80% with self-check gate"
2. Heading spacing: "MUST be 1.5:1 above vs below (measured)"
3. Add rhythm variation: "MUST have ≥3 different transition treatments"

Binary enforcement = 100% compliance. Judgment language = 0% compliance. There is no middle ground.

---

## RECOMMENDATIONS FOR CEILING TIER

### NON-NEGOTIABLE CHANGES

1. **Enable inter-agent communication:** Agents MUST use SendMessage for clarifying questions, issue flagging, and iteration. Preserve flat topology, change protocol from file-only to file + messaging.

2. **Add landmark completeness gate:** Phase 2→3 boundary. Team-lead verifies header exists, footer exists, all planned sections exist. Binary check, prevents WOULD-NOT-SHIP defects.

3. **Convert judgment rules to binary with gates:** Token compliance self-check, heading spacing ratio measurement, rhythm variation minimum (3+ transition types).

4. **Apply M1 permanently:** Replace "sample 2-4 mechanisms" with per-category minimums in skill before Ceiling execution.

### RECOMMENDED ADDITIONS

5. **Add mechanism interaction requirement:** "For 3+ mechanism pairs, document how they REINFORCE each other." Closes the gap between "applied correctly" and "felt through."

6. **Add second fresh-eyes auditor:** Dual perceptual evaluation with reconciliation. Addresses single-evaluator bias concern.

7. **Recalibrate timing estimates:** Use parallel agent model (4-5 min/agent × waves), not sequential human model. Ceiling likely 45-100 min, not 150-220 min.

8. **Test hybrid catalog access:** Planner sees full catalog, builder sees mechanism names + 1-line descriptions. Prevents continuation bias while enabling complex implementation.

---

## WHAT THE DIVERGENCES TEACH US ABOUT AGENT SYSTEMS

1. **Planning models that work for humans fail for agent teams.** Sequential time estimates are 8-11x wrong for parallel execution.

2. **Process efficiency ≠ output quality.** Zero coordination bugs doesn't mean high-quality output. Communication isolation costs collaborative refinement.

3. **Vocabulary fluency ≠ compositional fluency.** Knowing many tools and using them correctly (Middle) crosses the "designed" threshold but doesn't create "felt through" quality. Metaphor-driven purpose (Ceiling) may be required.

4. **Binary rules achieve 100% compliance, judgment rules achieve 0%.** THE master principle for agent system design. Convert everything that matters to binary.

5. **Prompt slicing creates blind spots.** 75-92% context reduction improves token efficiency but costs implementation completeness. Gates catch the failures.

6. **Fresh-eyes find what loaded agents rationalize.** Zero-context auditing exploits confirmation bias asymmetry.

7. **Continuation bias prevention works.** Two-instance pattern produced genuinely novel composition, not derivative copying.

8. **Per-category minimums produce natural breadth.** M1 validated — raises floor while maintaining selectivity.

---

*All predictions and outcomes sourced from: 09-MASTER-RETROSPECTIVE.md (full file), 08-retro-theory-validation.md (theories 1-10), 08-retro-process.md (timing analysis), 17-conversation-clarifications.md (pre-experiment understanding), 07-VERDICT.md (actual results).*
