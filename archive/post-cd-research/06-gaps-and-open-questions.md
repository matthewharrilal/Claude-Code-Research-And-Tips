# Gap Analysis & Open Questions: Post-CD Pipeline

**Document:** Comprehensive analysis of incomplete, deferred, and unresolved issues in the Post-CD Pipeline
**Created:** 2026-02-13
**Status:** ACTIVE — Tracking gaps discovered across pipeline planning, skill implementation, and migration architecture
**Sources:** Pipeline documents (01-09), OPEN-QUESTIONS.md, tension-composition skill, perceptual-auditing skill, MEMORY.md

---

## EXECUTIVE SUMMARY

The Post-CD Pipeline is **architecturally complete but operationally untested**. The two-track model (assembly vs composition) is well-defined on paper, but critical operational questions remain open until empirical validation begins. This analysis identifies **8 major gap categories** spanning design decisions, technical unknowns, resource planning, and execution feasibility.

**Critical Finding:** The pipeline documents represent ~9,200 lines of strategic planning but contain **23 tracked open questions** requiring resolution before full-scale migration. The most severe gaps cluster around Track 2 execution (50-60% of pages, 105-225 hours, creative bottleneck), skill invocation mechanics (unknown if agents can call skills mid-pipeline), and timeline/cost variability (2-5x range depending on Track 2 percentage).

**Key Implication:** The pipeline test revealed the core architectural risk: **the pipeline predicts RICHNESS, not QUALITY**. High richness scores identify promising tension-metaphor pairings but do NOT guarantee perceptual success. This was addressed through perceptual guardrails and builder warnings, but the gap between "theoretically sound metaphor" and "visually excellent layout" remains a live risk.

---

## CATEGORY 1: WHAT'S INCOMPLETE — DESIGN PIPELINE GAPS

### Gap 1.1: Skill Enrichment Applied, But Root Cause Persists

**Status:** PARTIALLY RESOLVED

**What Was Done:**
- Tension-composition skill: 28→48 PA questions (+79%), perceptual guardrails added
- Perceptual-auditing skill: enriched with metaphor-awareness questions
- 6 HTML layouts rebuilt with guardrails, all met compliance
- Post-enrichment audit: 5 YES + 1 YES WITH RESERVATIONS

**What Remains:**
The root cause identified was "metaphor-driven visual compromise — metaphors encode spatial biases as CSS values." Guardrails PREVENT violations (940px min container, 16px label gap, 32px padding, 40% compression), but they don't RESOLVE the underlying tension.

**The Gap:**
Guardrails are **perceptual floors**, not **compositional guidance**. They tell builders "don't go below this," but they don't teach "how to compose ABOVE the floor." The skill enrichment added safety rails but not creative scaffolding.

**Evidence:**
- Geological Core: 900px container flagged as violation, but builder doesn't know HOW to widen it while preserving cylindrical metaphor
- Stats bars: "universally weak at 768px" per MEMORY.md, but no pattern library for responsive metadata strips exists
- Playbook dead zone epidemic: Guardrail W-DEADZONE warns against empty space, but doesn't provide POSITIVE guidance on what transitions SHOULD look like

**Implications for Migration:**
Track 2 builders will know when they're violating floors, but not how to compose confidently within the safe zone. This creates a **quality ceiling**: layouts will be perceptually acceptable (no guardrail violations) but may lack the compositional sophistication of top-tier explorations (Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core).

**Mitigation Path:**
- Phase C extraction should document **positive compositional patterns** alongside guardrails
- Tier 3 compositional strategies (08-COMPOSITIONAL-STRATEGY-LIBRARY.md) should include **worked examples of guardrail-compliant excellence**, not just violation avoidance
- Builder warnings should pair each "DON'T" with a "DO INSTEAD" recommendation

---

### Gap 1.2: Tier 2.5 Boundary Ambiguity

**Status:** UNRESOLVED

**The Problem:**
Component taxonomy research introduced the Tier 2.5 concept (patterns requiring judgment but with extractable CSS), but the boundary between Tier 2.5 and Tier 3 remains contested. OPEN-QUESTIONS.md identifies this as OQ-04: "Where does reusable pattern (Tier 2.5) end and compositional layout (Tier 3) begin?"

**Contested Cases:**
1. **Confidence encoding (4px/3px/2px/1px border gradient):**
   - Forensics classified as Tier 2.5 (extractable mechanism)
   - But semantic meaning (4px = "high confidence") is context-dependent
   - Is the CSS extractable but the MEANING Tier 3?

2. **Bento grid:**
   - Grid CSS is Tier 2.5 (extractable, ~25 lines CSS + 110 lines guidance)
   - Span decisions are Tier 3 (require content hierarchy judgment)
   - Where does the pattern end and composition begin?

3. **Scroll witness TOC:**
   - Progress tracking mechanism is Tier 2.5
   - But it only works if page structure exists with named sections
   - Is the structure dependency Tier 3?

**The Ambiguity:**
The documents state: "A pattern can have BOTH layers: Tier 2.5 (CSS mechanism), Tier 3 (application decisions)." But this means the SAME component spans two tiers, creating extraction ambiguity.

**Implications for Phase C Extraction:**
- How much of bento grid gets extracted? Just the grid CSS? Or the grid + span decision heuristics?
- If confidence encoding is extracted, does the semantic documentation (what each weight means) go in the CSS file or a separate prose guide?
- Can agents recognize when a Tier 2.5 pattern is being misapplied (decoration instead of semantic encoding)?

**Proposed Resolution (from OQ-04):**
Extract Tier 2.5 as **CSS + usage guidance + anti-patterns**:

```markdown
## Pattern: Confidence Encoding (Border-Weight Gradient)
**CSS:** Variables for 4 border weights (4px/3px/2px/1px)
**When to use:** Content has clear certainty/confidence gradients
**Judgment required:** Which content sections map to which confidence levels (Tier 3)
**Do NOT use:** As generic visual variety without semantic confidence meaning
```

But this hasn't been validated through actual extraction yet.

---

### Gap 1.3: Track 2 Percentage Unknown (THE Critical Variable)

**Status:** OPEN — resolves in Phase B Content Analysis

**The Discrepancy:**
Two research streams produced conflicting estimates:
- **Phase architect (synthesis):** 15-20% of pages are Track 2 (10-15 pages out of 75)
- **Impact assessor:** 50-60% of pages are Track 2 (35-45 pages out of 75)

**Timeline Impact:**
- 15-20% Track 2: Total migration = 55-95 hours
- 50-60% Track 2: Total migration = 105-225 hours
- **Difference: 50-130 hours (1.9x to 2.4x expansion)**

**Why the Discrepancy Exists:**
- Phase architect used **pattern-matching heuristic**: Tutorial = Track 1, evaluation = Track 2
- Impact assessor used **tension-first logic**: "Any personality, any pedagogical intent, any desire to shape FEELING = Track 2"

The impact assessor's definition is BROADER. Many pages that LOOK like straightforward tutorials may have genuine tension (e.g., "Git tutorial that needs to resolve reader anxiety about destructive commands → Track 2").

**The Gap:**
The pipeline ASSUMES a Track 1/2 split exists, but the actual split determines:
- Whether Track 2 is a minority concern (20%) or THE dominant migration path (60%)
- Whether Tier 2.5 pattern richness matters (if 60% Track 2, many borderline pages shift to Track 1 with richer patterns)
- Whether Track 2 parallelization is critical (at 60%, sequential = 45+ sessions)

**Cannot Be Resolved Until:**
Phase B Content Analysis runs the Addition Test + BECAUSE Test on all 75+ pages and produces empirical classification data.

**Current Mitigation:**
05-COMPLETE-ROADMAP.md plans for the pessimistic scenario (50-60% Track 2) to avoid timeline surprises.

---

### Gap 1.4: Metaphor Fatigue Prevention (Unvalidated Strategy)

**Status:** CONCEPTUAL — no empirical testing

**The Concern:**
If 35-45 pages are Track 2 (metaphor-driven composition), will readers experience **metaphor fatigue** — the same 3-4 metaphor families reused to the point of predictability?

**Proposed Mitigation:**
OPEN-QUESTIONS.md OQ-22 proposes Weaver-enforced diversity:
- No single metaphor family used more than 4-5 times
- No consecutive pages use the same metaphor
- Similar content types use DIFFERENT metaphors

**The Gap:**
This is a **design principle without empirical grounding**. No testing has occurred on:
- At what repetition threshold does fatigue actually occur? (4×? 8×? 12×?)
- Do readers consciously notice metaphor repetition across pages?
- Does metaphor reuse HELP (familiarity) or HURT (staleness)?

**Potential Counter-Evidence:**
The Economist magazine (the stated design inspiration per 06-KEY-INSIGHTS.md) uses a LIMITED set of visual metaphors across 100+ pages per issue: data visualizations, pull quotes, photo essays, columnar text. Readers don't complain about "fatigue" — they recognize it as the publication's STYLE.

**The Contradiction:**
If metaphor diversity is critical, why doesn't The Economist suffer from fatigue?

**Possible Answer:**
The Economist uses **variation WITHIN metaphor families** (different chart types all fall under "data visualization"), not infinite unique metaphors. The pipeline may need **metaphor VARIATION** (geological core at 5 depths vs 3 depths), not metaphor ROTATION (geological → architectural → mechanical).

**Resolution Path:**
Phase H+I (Migration) will track metaphor usage empirically. After 15 Track 2 pages, evaluate: Are we seeing repetition? Does it feel stale? Adjust diversity enforcement based on ACTUAL reader experience, not hypothetical concerns.

---

## CATEGORY 2: WHAT WAS DEFERRED — EXPLICIT POSTPONEMENTS

### Deferred 2.1: CD-006 as Real-Content Pilot

**Status:** DEFERRED to CD execution

**The Recommendation:**
01-CD-EVOLVED-VISION.md states: "CD-006 as pilot migration — CD's 6th exploration should be a pilot migration using real content, not synthetic content."

**The Rationale:**
The tension-composition pipeline test proved that real content creates genuine tension; synthetic content does not. CD-006 at 39/40 audit score was the ONLY exploration where the reader-facing question created design tension that elevated output.

**Current CD Plan:**
CD-006 is planned as "crown jewel exploration" but specification doesn't explicitly mandate real content. HANDOFF-AD-TO-CD.md does not mention this requirement.

**The Gap:**
If CD-006 uses synthetic content, it validates the system under IDEAL conditions (content designed to fit patterns) rather than REAL conditions (messy documentation with genuine tension). The insurance policy doesn't exist.

**Why This Matters:**
CD-006 is supposed to validate the completeness gate: "Track 1 AND Track 2 pathways work." If Track 2 pathway is validated only on synthetic content, the first REAL Track 2 page (during migration) becomes the de facto pilot.

**Resolution:**
CD execution spec must explicitly require: "CD-006 uses real documentation content (minimum 500 words prose) to validate both Track 1 assembly and Track 2 composition under production conditions."

---

### Deferred 2.2: Track 1.5 Classification

**Status:** DEFERRED to Phase F Pilot

**The Proposal:**
OPEN-QUESTIONS.md OQ-10 asks: "Should there be a 'Track 1.5' for borderline pages?"

**Track 1.5 Characteristics:**
- Uses Track 1 assembly (Tier 1+2 components + Tier 2.5 patterns)
- Adds LIGHT compositional judgment (pacing, transitions, micro-metaphors)
- Skips full metaphor collapse (no 45-min Phase 3, no isomorphism testing)
- Time: 90-120 min per page (between Track 1's 45-90 min and Track 2's 3-5 hrs)

**Arguments FOR:**
- Reduces Track 2 bottleneck if borderline pages shift to Track 1.5
- Better matches effort to actual need (light tension = light treatment)
- Tier 2.5 patterns were designed for THIS use case

**Arguments AGAINST:**
- Adds complexity (3 tracks instead of 2, more classification decisions)
- Risk of "Track 1.5 creep" (everything becomes Track 1.5)
- Track 1.5 execution is harder to specify than Track 1 (deterministic) or Track 2 (skill invocation)

**Current Decision:**
"No Track 1.5 initially. Revisit after Pilot." (02-POST-CD-PHASES.md)

**The Gap:**
If Track 1.5 IS needed (determined during Phase F Pilot), there's no specification for it. The playbook would need to be expanded POST-pilot to add a third execution path.

**Resolution Path:**
Phase F Pilot tests 2-3 borderline pages using Track 1 with rich Tier 2.5 usage. If this feels "flat," Track 1.5 spec is written during Phase G Refinement.

---

### Deferred 2.3: Existing Exploration Guardrail Retrofitting

**Status:** DEFERRED to post-migration or never

**The Question:**
OPEN-QUESTIONS.md OQ-13: "Do existing DD/OD/AD/CD explorations need guardrail retrofitting?"

**The Problem:**
30+ existing HTML explorations were built BEFORE guardrails existed. Many violate the 8 perceptual floors:
- Geological Core: 900px container (below 940px floor)
- Archival Vault: 920px container (below 940px floor)
- Multiple layouts: Label-to-heading gaps of 8-12px (below 16px floor)
- Stats bars: Universally weak at 768px (no responsive mitigation)

**Current Answer:**
"Selective retrofitting, not universal":
- Do NOT retrofit metaphor-driven compromises (narrow containers are metaphor-essential)
- DO retrofit accidental violations (label gaps, padding floors)
- DO retrofit stats bars (universal weakness, compliant solutions exist)

**The Gap:**
This creates **permanent documented exceptions** to the guardrails. Future builders see violations in validated explorations and may think "if DD-004 violates the 940px floor, I can too."

**Consequences:**
- Guardrails lose authority if fortress/ explorations violate them
- Perceptual-auditing skill must whitelist known violations (PA-42: metaphor-driven compromise exception)
- Documentation burden: every violation needs justification

**Alternative Approach:**
Retrofit ALL explorations to meet guardrails, adjusting metaphors where necessary. If Geological Core's cylindrical metaphor REQUIRES 900px, the guardrail is wrong or the metaphor needs modification.

**Why This Wasn't Done:**
Time cost (30+ pages × 30-60 min fixes = 15-30 hours) deemed not worth it for explorations that already passed comprehensive audit with zero soul violations.

---

## CATEGORY 3: CONTRADICTIONS BETWEEN DOCUMENTS

### Contradiction 3.1: Component Extraction Scope

**Where:** 02-POST-CD-PHASES.md vs 08-COMPOSITIONAL-STRATEGY-LIBRARY.md

**02-POST-CD-PHASES.md (Phase C):**
> "Extract ~400 lines Tier 1+2 CSS (atoms + molecules). Document Tier 3 compositional strategies as PROSE."

**08-COMPOSITIONAL-STRATEGY-LIBRARY.md:**
> "Tier 2: ~175 lines CSS (9 components). Tier 2.5: ~145 lines CSS (5 patterns). Tier 1: ~80 lines. Total: ~400 lines."

**The Contradiction:**
Phase C says "Tier 1+2" only. Strategy library includes "Tier 2.5" in the 400-line count.

**Resolution:**
Likely editorial inconsistency. Phase C spec should read "Tier 1+2+2.5 CSS." The 400-line total is consistent, but tier labeling is not.

**Impact:** LOW (doesn't affect extraction scope, just labeling)

---

### Contradiction 3.2: Pipeline Predicts Richness vs Quality

**Where:** Tension-composition skill vs MEMORY.md lessons

**Tension-Composition Skill (Phase 2 richness formula):**
> "Richness = Opposition Depth × Structural Overlap × Metaphor Space Width. Use richness to select which TENSIONS to resolve."

**MEMORY.md (Tension-Composition Pipeline Test results):**
> "Root cause: Pipeline predicts RICHNESS not QUALITY. Playbook BECOME+RECONCILE scored richness 27 but produced monotonous grid. Playbook UNDERSTAND scored richness 12 but produced best visual outcome (Elevation Map)."

**The Contradiction:**
The skill says "use richness score to select tensions." The test results say "richness doesn't predict quality."

**Resolution (Partial):**
Skill was updated with R5 improvement:
> "Richness formula cap: Use richness to select tensions (Phase 2). Do NOT use richness to select metaphors (Phase 3). A metaphor resolving richness 27 tension with HIGH perceptual risk ranks below metaphor resolving richness 12 with LOW risk."

**The Remaining Gap:**
This fixes metaphor selection (Phase 3) but doesn't fix tension selection (Phase 2). If Phase 2 selects RECONCILE tension (richness 27) over UNDERSTAND tension (richness 12), Phase 3 may select a metaphor for the wrong tension.

**Implication:**
Track 2 builders may spend 2.5 hours on a high-richness tension that produces mediocre layouts when a lower-richness tension would have produced better results.

**Resolution Path:**
Phase 2 should rank tensions by **Richness × (1 / Perceptual Risk)**. High richness with high risk gets downweighted. This requires running perceptual risk assessment BEFORE tension selection, not after.

---

### Contradiction 3.3: Freeze Line Timing

**Where:** 02-POST-CD-PHASES.md vs 05-COMPLETE-ROADMAP.md

**02-POST-CD-PHASES.md:**
> "The freeze line activates after Phase G (Playbook Refinement). The design system is FROZEN below this line."

**05-COMPLETE-ROADMAP.md (Phase F section):**
> "The pilot serves as the final quality gate. If the pilot reveals a genuine gap, this is the last moment to make a minimal, targeted design system update (acceptable — the user said 'once we start migrating,' not 'once we start piloting')."

**The Contradiction:**
Phase F (Pilot) allows design system updates. Phase G (Refinement) is when freeze activates. But Phase F happens BEFORE Phase G, so updates during pilot don't violate the freeze.

**Clarification Needed:**
Does the freeze activate AFTER Phase F (before migration) or AFTER Phase G (after pilot refinement)?

**Proposed Resolution:**
The freeze activates after Phase G, but Phase F should NOT require design system updates. If Phase F discovers a gap requiring system changes, Phase G absorbs the update and the freeze activates AFTER the fix.

**Impact:** MEDIUM (affects pilot scope and risk tolerance)

---

## CATEGORY 4: CRITICAL UNKNOWNS — TECHNICAL VALIDATION REQUIRED

### Unknown 4.1: Can Agents Invoke Skills Mid-Pipeline? (OQ-14 — CRITICAL)

**Status:** OPEN — blocks Phase E Playbook specification

**The Question:**
Can migration agents invoke the tension-composition skill as a black-box tool during pipeline execution?

**Desired Workflow:**
```
Migration agent receives Tension Table from Phase 2
↓
Agent invokes: /tension-composition [tension-table]
↓
Skill executes Phases 3-4 (Metaphor Collapse → Compositional Layout)
↓
Skill returns: Metaphor selection + isomorphism table + mechanisms
↓
Agent proceeds to Phase 4 (Build)
```

**If YES (agents can invoke):**
- Phase 3 becomes orchestration (simple skill invocation gate)
- Skill maintains internal state
- Output is structured (JSON/markdown with extractable fields)

**If NO (skills must be inlined):**
- Phase 3 must INLINE the entire 839-line tension-composition protocol
- Agent context window bloats (2,000+ lines BEFORE content loads)
- Skill state must be managed explicitly by agent

**Resolution Method:**
Phase A (CD completion) tests this during CD-006 pilot:
1. Spawn builder agent
2. Agent attempts `/tension-composition [content]` mid-build
3. Does invocation succeed? Does output return to agent context?
4. If YES → proceed with skill invocation model
5. If NO → revise Phase 3 spec to inline protocol

**Impact if Unresolved:**
Cannot finalize Migration Execution Spec. If skills must be inlined, agent prompts balloon to 2,000+ lines, reducing available context for content analysis.

---

### Unknown 4.2: Track 2 Per-Page Timing (3-5 Hours Estimate Untested)

**Status:** OPEN — resolves in Phase F Pilot

**The Estimate:**
Track 2 pages are estimated at 3-5 hours each based on:
- Tension-composition pipeline Phases 0-5: ~150 minutes (2.5 hours)
- Build: ~35 minutes
- Perceptual audit: ~18 minutes
- Documentation: ~12 minutes
- Total: ~3.5 hours

**Why It's Untested:**
No Track 2 page has been built using the FULL dual-track migration playbook. The tension-composition pipeline test (15 layouts) used a different process (single-session builds without perceptual audit integration).

**The Variability:**
- Best case: Weaver reuses metaphor from similar page → Phase 3 collapses from 45 min to 15 min → 2.5 hours total
- Worst case: Metaphor collapse produces high-risk candidate → perceptual audit fails → rebuild required → 5-7 hours total

**At 35-45 Track 2 Pages:**
- 3 hrs/page × 35 pages = 105 hours
- 5 hrs/page × 45 pages = 225 hours
- 7 hrs/page × 45 pages = 315 hours (if worst case)

**Resolution:**
Phase F Pilot MUST include 1+ Track 2 page to get real timing data. This is explicitly required in 02-POST-CD-PHASES.md.

---

### Unknown 4.3: Metaphor Reuse Time Savings (OQ-19)

**Status:** OPEN — emerges during Phase H+I Migration

**The Hypothesis:**
If Weaver tracks metaphor usage and suggests reuse ("Page 12 has similar tension to Page 8 → reuse geological pattern"), does this reduce per-page time?

**Potential Savings:**
- Phase 3 Metaphor Collapse: 45 min → 15 min (skip candidate generation)
- Phase 4 Layout Generation: 35 min → 25 min (adapt existing translation grammar)
- Total savings: ~40 minutes per reused metaphor

**At 15/35 Track 2 Pages with Reuse:**
15 reuses × 40 min = 600 min = 10 hours saved

**The Unknowns:**
1. How often can metaphors be reused without adaptation? (If every reuse needs significant modification, time savings disappear)
2. Do builders ACCEPT Weaver suggestions or prefer fresh derivation? (If builders reject reuse for creative reasons, savings don't materialize)
3. Does metaphor quality degrade with reuse? (If reused metaphors feel "templated," perceptual audit may fail more often)

**Resolution Path:**
Track empirically during Phase H+I. After 10-15 Track 2 pages, measure actual time savings and quality impact of metaphor reuse.

---

## CATEGORY 5: ARCHITECTURAL DEAD ENDS

### Dead End 5.1: Printing Press Metaphor for Component Extraction

**Where:** Original migration vision (pre-component taxonomy research)

**Original Assumption:**
"Component extraction produces layout primitives for every pattern combination. The printing press makes migration mechanical."

**Why It Failed:**
Component taxonomy research proved only ~400 lines (60-70% of any file) is extractable. The remaining 30-40% (Tier 3 compositional layouts) cannot be extracted because they're metaphor-dependent.

**The Dead End:**
You cannot build a "printing press" that outputs finished layouts. The metaphor was wrong. What you CAN build is an **alphabet + vocabulary** (Tier 1+2 CSS) that agents compose into fresh prose (Tier 3 layouts).

**How It Was Resolved:**
02-POST-CD-PHASES.md and 08-COMPOSITIONAL-STRATEGY-LIBRARY.md reconceived extraction scope. Instead of extracting "CrescendoSection component," extract:
- Tier 2 section component (borders, padding, backgrounds)
- Tier 3 CRESCENDO STRATEGY documentation (prose guide: "Use progressive padding compression 80px → 64px → 48px → 32px")

**Remaining Artifact:**
Some planning documents still reference "component library produces reusable layouts." This language should be updated to "component library + compositional strategy library."

---

### Dead End 5.2: Universal Tension Analysis for All Pages

**Where:** 02-POST-CD-PHASES.md OQ-07

**The Proposal:**
"Should EVERYTHING go through Phases 0-2 of the tension-composition pipeline (Content Assessment → Multi-Axis Questioning → Tension Derivation), letting the pipeline's own gate decide Track 1 vs Track 2?"

**Why It Was Considered:**
- Single unified process eliminates classification errors
- Pipeline's Addition Test + BECAUSE Test are more rigorous than manual heuristics

**Why It's a Dead End:**
- Time cost: 75 pages × 10-15 min Phases 0-2 = 12-18 hours just for classification
- Many pages are OBVIOUSLY Track 1 (pure reference, FAQ)
- Tension analysis of Track 1 pages produces no actionable insight

**Current Resolution:**
"Hybrid approach with fast-path": Obviously Track 1 pages skip Phases 0-2. Borderline pages run full analysis.

**The Remaining Question:**
How do you know a page is "obviously Track 1" without running the analysis? Risk of false negatives (Track 1-classified page that should be Track 2).

---

## CATEGORY 6: WHAT NEEDS TO HAPPEN NEXT

### Next 6.1: Phase A (CD Completion) Must Validate Skill Invocation

**Who:** CD execution team
**When:** CD-006 exploration build
**What:** Test whether agents can invoke /tension-composition mid-pipeline

**Critical Test:**
```
1. Builder agent receives content for CD-006
2. Agent classifies as Track 2 (genuine tension detected)
3. Agent attempts: /tension-composition [content or tension-table]
4. Monitor: Does skill execute? Does output return? Is it structured?
5. Document: YES (proceed with skill model) or NO (inline protocol)
```

**Blocking:** Phase E Playbook specification depends on this result.

---

### Next 6.2: Phase B Must Settle Track 2 Percentage Empirically

**Who:** Content Analysis team (3-5 agents)
**When:** First post-CD session
**What:** Run Addition Test + BECAUSE Test on all 75+ pages

**Critical Output:**
```
Per-page classification table:
- Page name
- Content type
- Track assignment (1 or 2)
- If Track 2: Tension pre-screening results
- If Track 2: Tentative metaphor candidates

Summary stats:
- Track 1 count: X pages
- Track 2 count: Y pages
- Percentage: Z%

Timeline impact:
- If Z ≤ 30%: Optimistic scenario (150-180 total hours)
- If 30% < Z ≤ 50%: Realistic scenario (200-250 total hours)
- If Z > 50%: Pessimistic scenario (250-320 total hours)
```

**Blocking:** Timeline estimates, extraction priorities, resource planning all depend on this.

---

### Next 6.3: Phase C Must Resolve Tier 2.5 Boundary Questions

**Who:** Component extraction team (6-10 agents)
**When:** After Phase B complete
**What:** Apply Rename Test to all ambiguous components

**Critical Decisions:**
- **Confidence encoding:** Extract as Tier 2.5 with semantic documentation?
- **Bento grid:** Extract grid CSS only, or grid + span decision heuristics?
- **Scroll witness TOC:** Extract mechanism only, or mechanism + structure requirements?

**Process:**
For each ambiguous component:
1. Extract CSS
2. Rename all classes to generic equivalents (`.component-wrapper`, `.grid-item`)
3. Place in neutral context (standalone page, no metaphor)
4. Test: Does it still communicate structure/function?
   - YES → Tier 2 (fully extractable)
   - PARTIALLY → Tier 2.5 (extractable with usage guidance)
   - NO → Tier 3 (document as prose strategy, don't extract CSS)

---

### Next 6.4: Phase D Must Validate That Extracted Library Actually Works

**Who:** Validation team (2-3 agents)
**When:** After Phase C complete
**What:** Build 2-3 test pages using ONLY extracted library

**Critical Validation:**
1. **Build 1 Track 1 page** (tutorial) using Tier 1+2 CSS alone
   - Should work perfectly without additions
   - Documents what's missing (if anything)

2. **Build 1 Track 2 page** (conceptual) using library + tension-composition skill
   - Exposes Tier 3 gaps
   - Tests skill invocation in production-like conditions

3. **Write validation report:**
   - What works: [list]
   - What's missing: [list]
   - Confidence level: "Track 1 ready, Track 2 needs X, Y, Z"

**Blocking:** Phase E Playbook assumes library is sufficient. If validation reveals gaps, extraction must be refined before playbook writing.

---

### Next 6.5: Phase F Pilot Must Include Track 2 AND Measure Timing

**Who:** Pilot migration team (4-6 agents)
**When:** After Phase E Playbook complete
**What:** Migrate 2-3 pages including 1+ Track 2

**Critical Measurements:**
- Track 2 actual time: ____ hours (vs 3-5 hour estimate)
- Metaphor selection time: ____ min (vs 45 min estimate)
- Build time: ____ min (vs 35 min estimate)
- Perceptual audit pass rate: ____ (how many iterations to pass?)
- Skill invocation: Worked? (YES/NO)
- Guardrail violations discovered: [list]
- Builder warnings effectiveness: [assessment]

**This Data Drives:**
- Phase G Refinement (update time estimates)
- Phase H+I Resource Planning (session count, agent allocation)
- Phase E Playbook v2.1 (incorporate real-world learnings)

---

## CATEGORY 7: IMPLICATIONS OF THE PIPELINE TEST

### Implication 7.1: The Pipeline Predicts RICHNESS, Not QUALITY

**What the Test Showed:**
15 layouts across 3 content pieces. The tension-composition pipeline selected metaphors with high richness scores, but visual quality was uncorrelated:
- Playbook BECOME+RECONCILE: Richness 27, produced monotonous grid (bottom tier)
- Playbook UNDERSTAND: Richness 12, produced Elevation Map (top tier)

**Why This Matters:**
The pipeline's Phase 2 (Tension Derivation) ranks tensions by richness. If RECONCILE scores 27 and UNDERSTAND scores 12, Phase 2 selects RECONCILE. But Phase 3 (Metaphor Collapse) then struggles to find a metaphor that resolves RECONCILE without perceptual compromise.

**Current Mitigation:**
R5 improvement added Perceptual Risk Assessment (Phase 3.5E) and Perceptual Cost Assessment (Phase 3.5F). These prevent selection of high-risk metaphors, but they don't PREVENT selection of high-richness low-quality TENSIONS.

**The Remaining Gap:**
Phase 2 still uses pure richness scoring. A better approach: **Richness × (1 / Perceptual Risk)**. High richness with high risk gets downweighted.

**Resolution Path:**
Phase 3.5E (Perceptual Risk Assessment) should feed BACK into Phase 2. Before finalizing tension selection, score each tension's likely perceptual risk:
- RECONCILE tension → likely produces metaphors with HIGH perceptual risk (textual labels, empty space transitions)
- UNDERSTAND tension → likely produces metaphors with LOW perceptual risk (structural gradients, spatial hierarchy)

Rank tensions by **richness-adjusted-for-risk**, not raw richness.

---

### Implication 7.2: Implicit > Explicit Metaphors

**What the Test Showed:**
Best layouts used IMPLICIT metaphors (graduated backgrounds, spatial hierarchy, compression gradients). Worst layouts used EXPLICIT metaphors (labeled connectors like "MAIN STREET — CONNECTING DISTRICTS", announced transitions).

**The Principle (from Builder Warning W-IMPLICIT):**
> "The best layouts make the reader FEEL the metaphor without ever NAMING it. If metaphor vocabulary appears as visible text labels, the builder is doing it wrong."

**Current State:**
This principle exists as a builder warning in the tension-composition skill (Phase 4 Appendix R6), but it's not integrated into Phase 3 metaphor selection scoring.

**The Gap:**
A metaphor can score high on tension resolution and structural isomorphism but STILL be explicit. The scoring doesn't distinguish:
- **Geological Core:** Implicit (background darkening = depth, no labels)
- **City Zoning Map:** Explicit (district labels announce the metaphor)

**Resolution Path:**
Add **Expression Mode** to Perceptual Risk Assessment (Phase 3.5E):

| Question | LOW Risk (Implicit) | HIGH Risk (Explicit) |
|----------|---------------------|---------------------|
| Does this metaphor rely on STRUCTURAL GRADIENTS or TEXTUAL LABELS? | Structural (backgrounds, spacing, weight) | Textual (labeled connectors, announced transitions) |

Metaphors scoring EXPLICIT get +1 perceptual risk.

---

### Implication 7.3: Stats Bars Universally Weak

**What MEMORY.md Says:**
> "Stats bars universally weak: Every layout with a horizontal metadata strip had problems at 768px."

**Why This Matters:**
Stats bars (metadata strips showing page stats, time estimates, difficulty levels) appear in MANY documentation pages. If they're a known weak point, Phase C extraction should provide a VALIDATED responsive pattern.

**Current State:**
Builder warning W-STATS exists:
> "Metadata strips weak at 768px. At narrow viewports, 4-6 metadata values in horizontal band ALWAYS cramp. Limit to 3 items or hide the least essential, or stack vertically."

**The Gap:**
This is a "DON'T" (don't use 4-6 items) without a "DO" (here's the correct pattern).

**Resolution Path:**
Phase C extraction should document **Stats Bar Tier 2.5 Pattern** with THREE validated responsive approaches:
1. **Reduction:** 6 items at 1440px → 3 items at 768px (hide least essential via CSS)
2. **Stacking:** Horizontal strip at 1440px → vertical list at 768px
3. **Compression:** Reduce font size + padding at 768px (risky, may violate guardrails)

Test all three on 2-3 pages during Phase D validation. Document which approach works best for which content types.

---

## CATEGORY 8: OPEN ARCHITECTURAL QUESTIONS

### Question 8.1: Should Guardrails Be Baked Into CSS? (OQ-11)

**The Trade-Off:**
**FOR baking:**
- Prevents violations by default (`.page-container { max-width: 960px; }`)
- Reduces audit burden (don't need to check what's enforced)
- Makes Track 1 assembly safer

**AGAINST baking:**
- Reduces compositional flexibility (metaphor may justify narrow container)
- CSS defaults are easy to override (`.geological-core { max-width: 700px; }`)
- Creates false sense of security

**Proposed Resolution (from OQ-11):**
Bake CSS-enforceable guardrails as **defaults with escape hatch**:

```css
.page-container {
  max-width: 960px; /* 940px min + buffer */
  padding: 0 max(32px, 4vw);
}

.page-container[data-override-width] {
  /* Metaphor requires narrow container */
  /* MUST document in metaphor rationale */
  /* MUST pass PA-42 (metaphor-driven compromise) */
}
```

**Unresolved:**
How does perceptual-auditing skill detect intentional overrides vs accidental violations? Does every override require a `data-override-width` attribute + rationale comment?

---

### Question 8.2: What's the Dollar Cost at Current API Rates? (OQ-20)

**Current State:**
Unknown. Cannot calculate without:
1. Actual Track 2 percentage (Phase B)
2. Track 2 model tier decision (Opus 4.6 or Sonnet 4.5)
3. Per-page token usage (Phase F Pilot)

**Hypothetical Impact:**
If Track 2 is 50% of pages and requires Opus 4.6:
- Track 2 uses 3× tokens per page (150k vs 50k)
- Track 2 may cost 3-5× per token (Opus premium)
- **Track 2 per-page cost = 9-15× Track 1 per-page cost**
- At 50% pages: Track 2 may represent 75-85% of total dollar cost

**Resolution:**
After Phase B (Track 2 percentage known) and Phase F (per-page token usage measured), calculate total cost estimate and assess whether cost optimization is needed (e.g., testing Sonnet for Track 2 instead of Opus).

---

### Question 8.3: Does Track 2 Quality Improve or Degrade Over Time? (OQ-23)

**The Hypothesis:**
As Weaver accumulates metaphor documentation across 35-45 Track 2 pages, does quality improve (later pages benefit from earlier learnings) or degrade (creative fatigue sets in)?

**Improvement Mechanisms:**
- Weaver identifies "geological works well for confidence gradients"
- Weaver warns "apprenticeship had high perceptual risk (grids)"
- Compositional strategy library grows → builders have more patterns to reference

**Degradation Mechanisms:**
- Builders exhaust creative energy after 15-20 pages
- Metaphor reuse becomes mechanical ("geological = default for ANY gradient")
- Weaver's suggestions feel prescriptive → builders follow instead of deriving

**Resolution:**
Track perceptual audit verdicts over time (Pages 1-15 vs 16-30 vs 31-45). If later pages score lower, intervention needed (refresh builders, rotate agents, enforce fresh derivation).

---

## SUMMARY: THE MOST CRITICAL GAPS

**TIER 1 (Blocks Progress):**
1. **Can agents invoke skills mid-pipeline?** (OQ-14) — Resolves in Phase A
2. **Track 2 percentage unknown** (OQ-08) — Resolves in Phase B, determines timeline by 2-5×
3. **Track 2 per-page timing untested** (Phase F Pilot) — 3-5 hour estimate unvalidated

**TIER 2 (Affects Quality):**
4. **Pipeline predicts richness not quality** — Perceptual risk scoring partially mitigates
5. **Implicit > explicit metaphors** — Builder warning exists but not in Phase 3 scoring
6. **Stats bars universally weak** — Pattern solution needed in Phase C extraction
7. **Guardrail vs metaphor trade-off** — How to balance floors with creative freedom

**TIER 3 (Refinement Opportunities):**
8. **Metaphor fatigue prevention** — Untested strategy, may be over-concern
9. **Tier 2.5 boundary ambiguity** — Extraction will resolve pragmatically
10. **Track 1.5 classification** — Deferred to Pilot, may not be needed

**The Meta-Gap:**
The pipeline is **strategically complete but operationally unvalidated**. Every major architectural decision (two tracks, skill invocation, guardrails, metaphor selection) is well-reasoned on paper but untested in production. The gap between design intent and actual performance will only close through empirical execution of Phases A-F.

**Next Action:**
Proceed to Phase A (CD completion) with EXPLICIT requirements:
- CD-006 must use real content
- CD-006 must test skill invocation mechanics
- CD must validate both Track 1 (clean patterns) and Track 2 (genuine tension)

The pipeline exists. Now it needs to prove itself.

---

**END GAP ANALYSIS**
