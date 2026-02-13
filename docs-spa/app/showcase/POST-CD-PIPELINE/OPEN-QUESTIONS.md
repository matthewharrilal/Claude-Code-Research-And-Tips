<!--
INLINE THREADING HEADER
Document: OPEN-QUESTIONS.md
Phase: POST-CD-PIPELINE
Purpose: Central tracking for all open questions, uncertainties, and empirical validation requirements
Status: ACTIVE (tracks pipeline evolution)
Sources: pipeline-evolution-research (06-synthesis, 04-impact, 01-skill-integration), component-taxonomy-research (05-synthesis, 01-forensics)
-->

# Open Questions and Uncertainties: Post-CD Pipeline Evolution

**Created:** 2026-02-13
**Status:** ACTIVE — Tracking all unresolved questions across pipeline evolution
**Last Updated:** 2026-02-13
**Sources:** 5 pipeline evolution research files, 2 component taxonomy files, tension-composition and perceptual-auditing skills

---

## EXECUTIVE SUMMARY

This document tracks **23 open questions** across 7 categories requiring empirical validation, technical testing, or design decisions before full pipeline execution. Questions range from **CRITICAL** (directly affects timeline/cost) to **LOW** (refinement opportunities).

**Critical Decision Points:**
- **OQ-08**: Track 1/2 split percentage (50-60% vs 15-20% Track 2) — THE biggest timeline variable
- **OQ-14**: Skill invocation mechanics (can agents call skills mid-pipeline?)
- **OQ-17**: Model tier for Track 2 agents (Opus 4.6 cost implications)

**Expected Resolution Timeline:**
- **Phase A (CD)**: OQ-14, OQ-16 (skill invocation testing)
- **Phase B (Content Analysis)**: OQ-01, OQ-02, OQ-08, OQ-09, OQ-10 (classification + counts)
- **Phase C (Extraction)**: OQ-03, OQ-04, OQ-05, OQ-06, OQ-11, OQ-12, OQ-13 (tier boundaries + guardrails)
- **Phase D (Validation)**: OQ-11 outcome testing
- **Phase F (Pilot)**: OQ-17, OQ-18 (team topology + costs)
- **Phase H+I (Migration)**: OQ-19, OQ-21, OQ-22, OQ-23 (metaphor fatigue + reuse)
- **Post-Migration**: OQ-20 (dollar cost retrospective)

---

## CATEGORY 1: COMPONENT INVENTORY AND TIER BOUNDARIES

### OQ-01: Tier 2 Component Count — 9 or 12-18+?

**Severity:** HIGH
**Appears in:** 08-COMPOSITIONAL-STRATEGY-LIBRARY.md (pipeline evolution), 01-forensics.md (component taxonomy), 05-synthesis.md (component taxonomy)
**Status:** OPEN

**Question:**
Two independent research streams produced conflicting Tier 2 counts:
- **Forensics agent (component taxonomy):** ~9 universal Tier 2 components (callout family, code block, page header, inline code, skip link, selection, focus-visible, footer, table)
- **Impact assessor (pipeline evolution):** Suggests 12-18+ when including all structural primitives

Which count is accurate? Are we missing extractable components that were overlooked in the forensics scan?

**Current best answer:**
The discrepancy likely stems from **granularity differences**:
- Forensics counted **component families** (callout = 1, even though 5-6 variants exist)
- Impact assessor may have counted **individual variants** (callout-essence, callout-tip, callout-gotcha = 3)

Additional candidates not examined in forensics:
- Table component (mentioned in synthesis but not forensically analyzed)
- Footer component (dark bg + 3px red border-top)
- Metadata strip / stats bar pattern
- File tree component
- Decision matrix component

**Resolution method:**
**Phase C Extraction** — Exhaustive programmatic audit across all 30+ HTML files:
1. Parse every HTML file in design-extraction/ for structural patterns
2. Apply Rename Test to each candidate (can it be renamed generically without losing distinctiveness?)
3. Calculate CSS overlap percentage across files (≥90% = Tier 2)
4. Produce definitive Tier 2 inventory with line counts

**Impact if unresolved:**
If Tier 2 is actually 12-18 components (~250-300 lines CSS instead of ~175), this:
- Increases extraction scope (+2-3 hours in Phase C)
- Increases library coverage (70-75% of files instead of 60-70%)
- MAY reduce Track 2 percentage if borderline pages can now use Track 1 assembly

---

### OQ-02: Tier 2 vs Tier 3 Classification for Ambiguous Components

**Severity:** MEDIUM
**Appears in:** 08-COMPOSITIONAL-STRATEGY-LIBRARY.md, 01-forensics.md
**Status:** OPEN

**Question:**
Are the following components Tier 2 (extractable, reusable) or Tier 3 (compositional, metaphor-specific)?
1. **File tree component** — Has structural pattern (nested indentation + icons) but semantic meaning may be content-dependent
2. **Decision matrix** — Grid pattern is generic, but row/column semantics encode meaning
3. **Q&A pairs** — Forensics classified as Tier 3 (width variation encodes TIDAL), but structure is reusable
4. **Confidence badge** — Border-weight gradient (4px/3px/2px/1px) is Tier 2.5 per forensics, but badge wrapper itself may be Tier 2

**Current best answer:**
Apply **The Rename Test** (from forensics report):
> If you can rename the CSS class to something generic (`.bordered-section`, `.accent-container`) without losing what makes it distinctive → Tier 2. If renaming destroys meaning → Tier 3.

**Tentative classification:**
- **File tree:** Tier 2 (nested list with indent + icons = structural primitive, works in any file browser context)
- **Decision matrix:** Tier 2.5 (grid is Tier 2, but axis labels + cell semantics require judgment)
- **Q&A pairs:** Tier 3 (width variation only meaningful in conversational context, per forensics OD-001 analysis)
- **Confidence badge:** Tier 2 (badge wrapper) + Tier 2.5 (border-weight encoding requires semantic documentation)

**Resolution method:**
**Phase C Extraction** — Per-component Rename Test application:
1. Extract CSS for each ambiguous component
2. Rename all classes to generic equivalents (`.component-wrapper`, `.grid-item`, etc.)
3. Place in neutral context (standalone page with no metaphor)
4. Does it still communicate the same structure/function? → Tier 2
5. Does meaning evaporate without metaphor? → Tier 3

**Impact if unresolved:**
Misclassification creates two failure modes:
- **Tier 3 extracted as Tier 2:** Library bloats with non-reusable CSS, semantic drift risk
- **Tier 2 rejected as Tier 3:** Pages unnecessarily routed to Track 2, timeline expansion

---

### OQ-03: The Gas Town "Central Role Component" — Tier 2 or Tier 2.5?

**Severity:** LOW
**Appears in:** tension-test analysis (implied), 01-forensics.md (Gas Town metaphor analysis)
**Status:** OPEN

**Question:**
Forensics noted that all 5 Gas Town metaphors (Floor Plan, Refinery, Zoning, Circuit Board, Command Post) have 90%+ CSS overlap for a "central organizing component":
- Floor Plan: room blocks
- Refinery: process stages
- Zoning: district zones
- Circuit Board: circuit nodes
- Command Post: situation board

Is this a **Tier 2 primitive** (generic "featured container" with accent border + background) or **Tier 2.5 pattern** (requires metaphor-specific application judgment)?

**Current best answer:**
Likely **Tier 2.5** — The CSS is extractable (4px border, subtle background, optional icon/label slot), but WHEN to apply it requires understanding which content element is the "central organizing role" in a given metaphor. This is compositional judgment, not deterministic lookup.

**Resolution method:**
**Phase C Extraction** — Extract CSS as Tier 2.5 pattern with usage guidance:
```markdown
## Pattern: Central Role Container

**CSS:** 4px left border, subtle background tint, optional icon/label slot
**When to use:** Content has a clear "organizing element" around which other content clusters (e.g., room in floor plan, stage in refinery, district in zoning map)
**Do NOT use:** As generic callout or featured box without clear central organizing role
```

Test during **Phase D Validation** by applying to non-Gas-Town content and evaluating whether "central role" judgment is transferable.

**Impact if unresolved:**
Low — affects library completeness but not migration feasibility. If missed, builders will reinvent this pattern per-page instead of reusing.

---

### OQ-04: Where Does Reusable Pattern (Tier 2.5) End and Compositional Layout (Tier 3) Begin?

**Severity:** MEDIUM
**Appears in:** 08-COMPOSITIONAL-STRATEGY-LIBRARY.md, 01-forensics.md
**Status:** OPEN

**Question:**
The forensics report introduced the **Mechanism vs Workshop Test**:
- **Tier 2.5 (pattern):** Extractable mechanism requiring judgment (e.g., bento grid = extractable, but span decisions = judgment)
- **Tier 3 (composition):** Metaphor-specific workshop where meaning is inseparable from context

But boundary cases exist:
- **Confidence encoding (4px/3px/2px/1px border gradient):** Forensics classified as Tier 2.5 (extractable mechanism) BUT requires semantic documentation of what each weight MEANS. Is the semantic layer Tier 3?
- **Scroll witness TOC:** Forensics classified as Tier 2.5 (progress tracking) BUT only works if page structure already exists with named sections. Is the structure Tier 3?
- **Solid offset depth:** Forensics classified as Tier 2.5 (pseudo-element with offset vars) BUT decision of WHICH elements get featured is compositional. Is the decision logic Tier 3?

**Current best answer:**
The boundary is **TWO-LAYER**:
- **Tier 2.5 = CSS mechanism + usage guidance** (extractable)
- **Tier 3 = application decisions + semantic meaning** (compositional)

A pattern can have BOTH layers:
- Bento grid: Tier 2.5 (grid CSS), Tier 3 (span decisions per content hierarchy)
- Confidence encoding: Tier 2.5 (border-weight CSS), Tier 3 (which content gets which weight)
- Scroll witness: Tier 2.5 (progress bar CSS), Tier 3 (section structure + naming)

**The library extracts Tier 2.5 CSS + documents when Tier 3 application judgment is required.**

**Resolution method:**
**Phase C Extraction** — For each Tier 2.5 pattern, produce:
1. **Extractable CSS** (the mechanism)
2. **Usage guidance** (when to use, what judgment is required)
3. **Anti-patterns** (when NOT to use, common misapplications)

Example:
```markdown
## Pattern: Confidence Encoding (Border-Weight Gradient)

**CSS:** Variables for 4 border weights (4px/3px/2px/1px)
**When to use:** Content has clear certainty/confidence gradients (established → probable → speculative → open)
**Judgment required:** Which content sections map to which confidence levels (Tier 3)
**Do NOT use:** As generic visual variety without semantic confidence meaning
```

**Impact if unresolved:**
Tier 2.5 patterns get misapplied (aesthetic decoration instead of semantic encoding), or builders avoid them entirely (reinvent per-page).

---

### OQ-05: Is Confidence Encoding Tier 2.5 or Tier 3?

**Severity:** LOW
**Appears in:** 08-COMPOSITIONAL-STRATEGY-LIBRARY.md, 01-forensics.md (OQ-04 overlap)
**Status:** OPEN (subset of OQ-04)

**Question:**
The 4px/3px/2px/1px border-weight gradient used in OD-004 (geological strata) and reused in OD-006, CD-004, CD-006:
- **Is the CSS extractable?** YES (border-weight variables + classes)
- **Is the meaning extractable?** NO (4px = "high confidence" only makes sense in geological/certainty contexts)

Is this Tier 2.5 (reusable pattern) or Tier 3 (metaphor-specific)?

**Current best answer:**
**Tier 2.5 with heavy semantic documentation** — The mechanism (border-weight gradient) is extractable and reusable across ANY content with confidence gradients. The SEMANTIC MEANING (what each weight represents) must be documented as part of the pattern, but the pattern itself transcends geological metaphor.

Evidence: Reused across 4 files with different metaphors:
- OD-004: Geological strata (established/probable/speculative/open)
- OD-006: Section confidence levels
- CD-004: Pattern maturity levels
- CD-006: Combination grammar confidence

**Resolution method:**
**Phase C Extraction** — Extract as Tier 2.5 with explicit semantic requirements in usage guidance. Test during **Phase D Validation** by applying to non-geological content (e.g., API documentation with "stable/beta/experimental/deprecated" confidence levels).

**Impact if unresolved:**
Pattern gets classified as Tier 3 (non-extractable), builders reinvent border-weight gradients per-page instead of reusing the mechanism.

---

### OQ-06: If More Patterns Are Tier 2.5 (Richer Library), Does Track 2 Percentage Decrease?

**Severity:** MEDIUM
**Appears in:** 06-synthesis.md (pipeline evolution), 04-impact-assessment.md
**Status:** OPEN

**Question:**
The impact assessor noted:
> "More Tier 2.5 patterns (beyond the current 5) could push borderline pages from Track 2 to Track 1."

If the component library includes 8-10 Tier 2.5 patterns instead of 5, does this:
- Reduce Track 2 percentage from 50-60% to 40-50% or lower?
- Enable borderline pages (light tension, moderate richness) to use Track 1 assembly with richer pattern vocabulary?
- Significantly reduce total migration timeline (Track 2 is 3-5 hrs/page vs Track 1 at 45-90 min/page)?

**Current best answer:**
**Likely YES, but magnitude unknown.** More Tier 2.5 patterns = richer Track 1 assembly vocabulary. Pages currently classified as "needs metaphor" (Track 2) may actually need "needs richer pattern than basic callout+code" (Track 1 with Tier 2.5).

**Candidates for Tier 2.5 expansion:**
- Central role container (Gas Town pattern, per OQ-03)
- Stats bar / metadata strip (with responsive mitigation)
- File tree component (nested indentation + icons)
- Decision matrix (grid with axis labels)
- Dual lens / perspective toggle (OD-006 invention)
- Visual index grid (OD-006 invention)

Adding these could provide Track 1 builders with 10-12 Tier 2.5 patterns instead of 5, enabling richer assembly without metaphor derivation.

**Resolution method:**
**Empirical, two-phase:**
1. **Phase C Extraction:** Extract maximum feasible Tier 2.5 patterns (target 8-12, not just 5)
2. **Phase B Content Analysis:** Classify pages using EXPANDED Tier 2.5 library
   - Run Addition Test: "Can existing components + expanded patterns fulfill reader need?"
   - Compare Track 1/2 split with expanded library vs original estimate
   - Track 2 percentage dropping from 50-60% to 40-50% would save 30-45 hours of migration time

**Impact if unresolved:**
Pages unnecessarily routed to Track 2 (expensive, slow) when Track 1 with richer patterns would suffice. Timeline expansion of 30-45 hours if Track 2 percentage is artificially inflated.

---

## CATEGORY 2: TRACK 1 VS TRACK 2 CLASSIFICATION

### OQ-07: Should EVERYTHING Go Through Phases 0-2 of Tension-Composition Pipeline?

**Severity:** HIGH (design decision, not empirical)
**Appears in:** 02-POST-CD-PHASES.md, 03-MIGRATION-PIPELINE.md, 06-synthesis.md
**Status:** OPEN

**Question:**
The synthesis recommends running tension-composition Phases 0-2 (Content Assessment → Multi-Axis Questioning → Tension Derivation) for EVERY page during Phase B Content Analysis, letting the pipeline's own gate (Addition Test + BECAUSE test + richness scoring) decide Track 1 vs Track 2.

**Alternative approach:** Manual classification using heuristics:
- Tutorial/reference/Q&A with clean pattern mappings → Track 1 (skip tension analysis)
- Onboarding/conceptual/evaluation → Track 2 (run full tension analysis)

**Arguments FOR running Phases 0-2 universally:**
- The pipeline's Addition Test + BECAUSE Test are MORE rigorous than manual heuristics
- Eliminates classification errors (false negatives: Track 1 pages that should be Track 2)
- Produces tension tables for ALL pages (useful even for Track 1, documents reader needs)
- Consistent methodology (no human judgment variance)

**Arguments AGAINST:**
- Time cost: 75 pages × 10-15 min Phases 0-2 = 12-18 hours just for classification
- Many pages are OBVIOUSLY Track 1 (pure reference, FAQ, straightforward tutorials)
- Tension analysis of obvious Track 1 pages produces no actionable insight

**Current best answer:**
**Hybrid approach with fast-path:**
1. **Fast-path heuristic:** If content type = tutorial/reference/Q&A AND Addition Test obviously passes ("existing patterns clearly fulfill need") → Track 1, skip Phases 0-2
2. **Full analysis:** If content type = onboarding/conceptual/evaluation OR Addition Test uncertain → Run Phases 0-2

This reduces classification time from 12-18 hours to 6-9 hours (assumes ~50% can fast-path).

**Resolution method:**
**Design decision during Phase A (CD completion)** — Test both approaches on CD-006:
1. Classify CD-006 using fast-path heuristic
2. Classify CD-006 using full Phases 0-2
3. Compare: Does Phases 0-2 reveal tensions the heuristic missed?
4. Decide: Universal analysis or hybrid approach

**Impact if unresolved:**
If universal analysis is chosen, Phase B expands from 4-6 hours to 12-18 hours. If fast-path is chosen but produces false negatives (Track 1 pages that should be Track 2), quality suffers.

---

### OQ-08: Track 1 vs Track 2 Split — 15-20% or 50-60% Track 2?

**Severity:** CRITICAL
**Appears in:** 06-synthesis.md, 04-impact-assessment.md, 02-POST-CD-PHASES.md
**Status:** OPEN — THE BIGGEST VARIABLE

**Question:**
Two research agents produced conflicting Track 2 percentage estimates:
- **Phase architect (synthesis):** 15-20% of pages are Track 2 (10-15 pages out of 75)
- **Impact assessor:** 50-60% of pages are Track 2 (35-45 pages out of 75)

This is THE critical variable:
- **15-20% Track 2:** Total migration = 55-95 hours (30-75h Track 2 + 22-60h Track 1)
- **50-60% Track 2:** Total migration = 105-225 hours (105-225h Track 2 + 23-57h Track 1)

**Timeline difference: 50-130 hours** (1.9x to 2.4x expansion)

**Current best answer:**
Unknown until Phase B Content Analysis completes. The discrepancy likely stems from:
- **Phase architect used pattern-matching heuristic:** Tutorial = Track 1, evaluation = Track 2
- **Impact assessor used tension-first logic:** "Any personality, any pedagogical intent, any desire to shape how reader FEELS = Track 2"

The impact assessor's definition is BROADER and may be more accurate. Many pages that LOOK like straightforward tutorials may actually have genuine tension (e.g., "Git tutorial" that needs to resolve reader anxiety about destructive commands → Track 2).

**Resolution method:**
**Phase B Content Analysis** — Empirical classification of all 75+ pages:
1. Run Addition Test for each page: Can existing components fulfill the reader need?
2. Run BECAUSE Test: Can you complete "reader needs X BECAUSE [specific content property]"?
3. Calculate richness score (Opposition × Overlap × Width)
4. Apply gate: Genuine tension count ≥ 1 AND richness ≥ 8 → Track 2

Produce:
- Track 1 count (assembly)
- Track 2 count (composition)
- Percentage split
- Tentative metaphor candidates for Track 2 pages

**Impact if unresolved:**
Cannot finalize timeline or cost estimates. The difference between 55h and 225h total migration is the difference between a 2-week sprint and a 6-week campaign.

---

### OQ-09: What Qualifies as "Genuine Tension"?

**Severity:** MEDIUM
**Appears in:** 03-MIGRATION-PIPELINE.md, 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md, 01-skill-integration-map.md
**Status:** OPEN

**Question:**
The current threshold for Track 2 classification:
> "Any personality, any pedagogical intent, any desire to shape how the reader FEELS = Track 2"

Is this threshold too BROAD or too NARROW?

**Examples of boundary cases:**
1. **Git tutorial with anxiety mitigation:** Content teaches `git reset --hard` but also needs to make reader FEEL safe experimenting. Track 1 or Track 2?
2. **API reference with conceptual framing:** Pure reference content BUT opening section positions the API's philosophy. Track 1 or Track 2?
3. **Troubleshooting guide with emotional arc:** Diagnostic steps BUT pacing reflects reader frustration → calm → resolution. Track 1 or Track 2?

**Current best answer:**
The tension-composition skill's **Addition Test + BECAUSE Test** are designed to catch this:

**Addition Test:**
Can existing components (callouts, code blocks, tables) fulfill the reader need?
- Git tutorial anxiety mitigation: NO (callout can LABEL the warning, but not structurally EMBODY safety)
- API reference conceptual framing: MAYBE (depends on depth — light framing = callout suffices, deep framing = needs metaphor)
- Troubleshooting arc: NO (pacing arc requires compositional control, not just component assembly)

**BECAUSE Test:**
Can you complete: "Reader needs X BECAUSE [specific content property]"?
- Git tutorial: "Reader needs to FEEL safe BECAUSE destructive commands create anxiety" → YES (genuine)
- API reference: "Reader needs to understand philosophy BECAUSE API design is opinionated" → YES (genuine)
- Troubleshooting: "Reader needs calm → resolution arc BECAUSE frustration is part of debugging" → YES (genuine)

**All three examples would classify as Track 2 under current gates.**

**Is this too broad?**
Possibly. If 50-60% of pages end up Track 2, the threshold may be over-inclusive. But the impact assessor argues this is ACCURATE — most documentation DOES have pedagogical intent beyond pure information transfer.

**Resolution method:**
**Phase B Content Analysis + Phase F Pilot** — Empirical testing:
1. Classify 75+ pages using current gates
2. If Track 2 percentage is 50-60%, test 3-5 borderline pages in Pilot:
   - Build using Track 1 (assembly)
   - Build using Track 2 (composition)
   - Compare: Does Track 2 produce meaningfully better outcome?
3. If Track 1 is "correct but not optimal" → gates are appropriate
4. If Track 1 is "indistinguishable from Track 2" → gates are too broad

**Impact if unresolved:**
Gates too broad → pages unnecessarily routed to expensive Track 2. Gates too narrow → pages miss metaphor opportunity, quality suffers.

---

### OQ-10: Should There Be a "Track 1.5" for Borderline Pages?

**Severity:** LOW
**Appears in:** 06-synthesis.md, 04-impact-assessment.md
**Status:** OPEN

**Question:**
Some pages may have LIGHT tension (richness 6-8) that doesn't justify full metaphor derivation (3-5 hours) but DOES justify more than mechanical assembly (45-90 min). Should there be a middle track?

**Track 1.5 characteristics:**
- Uses Track 1 assembly (Tier 1+2 components + Tier 2.5 patterns)
- Adds LIGHT compositional judgment (pacing, transitions, micro-metaphors)
- Uses Tier 2.5 patterns MORE creatively than deterministic Track 1
- Skips full metaphor collapse (no 45-min Phase 3, no isomorphism testing)
- Time: 90-120 min per page (between Track 1 and Track 2)

**Examples:**
- Git tutorial with anxiety mitigation → Track 1.5 (use warning callouts + cautious pacing, no full metaphor)
- API reference with light conceptual framing → Track 1.5 (use intro section + solid offset for key concepts, no metaphor)
- Troubleshooting with emotional arc → Track 2 (requires full compositional control)

**Arguments FOR Track 1.5:**
- Reduces Track 2 bottleneck (35-45 pages at 3-5h each → 20-25 pages Track 2 + 15-20 pages Track 1.5)
- Better matches effort to actual need (light tension = light treatment)
- Tier 2.5 patterns were designed for THIS use case (judgment without metaphor)

**Arguments AGAINST:**
- Adds complexity (3 tracks instead of 2, more classification decisions)
- Risk of "Track 1.5 creep" (everything becomes Track 1.5, nothing is pure Track 1)
- Track 1.5 execution is HARDER to specify than Track 1 (deterministic) or Track 2 (skill invocation)

**Current best answer:**
**No Track 1.5 initially. Revisit after Pilot.**

Reasons:
1. Track 1.5 is essentially "Track 1 with better Tier 2.5 usage" — already covered if Tier 2.5 library is rich (per OQ-06)
2. Adding a third track before validating the two-track model creates premature complexity
3. Pilot migration will reveal whether borderline pages NEED a middle ground or can be handled by enriched Track 1

**Resolution method:**
**Phase F Pilot** — Test 2-3 borderline pages:
1. Build using Track 1 with rich Tier 2.5 usage
2. Does this feel "correct" or "flat"?
3. If flat → Track 1.5 may be needed
4. If correct → enriched Track 1 suffices

If Track 1.5 is needed, define during **Phase G Refinement** based on Pilot learnings.

**Impact if unresolved:**
Low initially. If Track 1.5 is needed and not provided, borderline pages either:
- Get forced into expensive Track 2 (timeline expansion)
- Get stuck in mediocre Track 1 (quality compromise)

But this only becomes clear during Pilot, so deferring the decision is low-risk.

---

## CATEGORY 3: GUARDRAIL ENFORCEMENT AND BAKING

### OQ-11: Should Guardrails Be Baked Into Component Library CSS?

**Severity:** MEDIUM
**Appears in:** 09-EXTRACTION-VALIDATION-PROTOCOL.md, 04-CONTENT-INGESTION.md, 01-skill-integration-map.md
**Status:** OPEN

**Question:**
The 8 perceptual guardrails discovered through skill enrichment:
- 940px min content container (65% viewport at 1440px)
- 16px label-to-heading gap minimum
- 32px horizontal padding floor
- 40% compression ratio (deepest section ≥ 40% of shallowest padding)
- 45-80 characters per line
- 1.5 body line-height minimum
- 48px section breathing zone minimum
- 65-80% content-to-viewport ratio

**Should these be CSS-ENFORCED as structural defaults in the component library?**

**CSS-enforceable guardrails (can be baked):**
- Container width: `.page-container { max-width: 960px; }` (ensures 940px+ at 1440px)
- Horizontal padding: `.page-container { padding: 0 max(32px, 4vw); }` (floor + responsive)
- Line-height: `body { line-height: 1.5; }` (locked)
- Characters per line: Container width + font-size controls this indirectly

**Measurement-based guardrails (cannot be baked, require audit):**
- Compression ratio (requires measuring deepest vs shallowest section padding)
- Label-to-heading gap (requires inspecting specific label+heading pairs)
- Section breathing (requires measuring vertical spacing between sections)
- Content-to-viewport ratio at 1440px (requires computing actual content width)

**Arguments FOR baking CSS-enforceable guardrails:**
- Prevents violations by default (builders can't accidentally create narrow containers)
- Reduces audit burden (perceptual-auditing skill doesn't need to check what's structurally enforced)
- Makes Track 1 assembly safer (even novice builders can't break floors)

**Arguments AGAINST:**
- Reduces compositional flexibility (metaphor may justify narrow container, e.g., manuscript page)
- CSS defaults can be overridden (`.geological-core { max-width: 700px; }` violates floor)
- Creates false sense of security (builders assume "CSS prevents it" but overrides are easy)

**Current best answer:**
**Bake CSS-enforceable guardrails as DEFAULTS with escape hatch:**

```css
/* Component library base */
.page-container {
  max-width: 960px; /* 940px min + 20px buffer */
  padding: 0 max(32px, 4vw); /* Floor + responsive */
}

body {
  line-height: 1.5; /* Locked floor */
}

/* Escape hatch for intentional overrides */
.page-container[data-override-width] {
  /* Metaphor requires narrow container (e.g., manuscript, geological core) */
  /* MUST document in metaphor rationale */
  /* MUST pass perceptual-auditing PA-42 (metaphor-driven compromise) */
}
```

This makes violations **intentional** (requires explicit override) instead of accidental (easy to forget floor).

**Resolution method:**
**Design decision during Phase C Extraction:**
1. Implement CSS-enforceable guardrails as defaults
2. Test during Phase D Validation: Build 1 Track 1 page, 1 Track 2 page
3. Track 1: Do defaults prevent violations?
4. Track 2: Does metaphor require override? If yes, is override justified by perceptual audit?

**Impact if unresolved:**
Guardrails become purely audit-time checks (no structural prevention). Increases risk of perceptual audit failures, requires more fix iterations.

---

### OQ-12: Which Guardrails Require Perceptual-Auditing Skill vs CSS Enforcement?

**Severity:** LOW
**Appears in:** 09-EXTRACTION-VALIDATION-PROTOCOL.md, 01-skill-integration-map.md
**Status:** OPEN (subset of OQ-11)

**Question:**
For each of the 8 guardrails, can it be CSS-enforced OR does it require active perceptual-auditing skill measurement?

**Analysis:**

| Guardrail | CSS-Enforceable? | Measurement Required? | Resolution |
|-----------|------------------|----------------------|------------|
| **940px min container** | YES (max-width) | NO | Bake in `.page-container` |
| **32px padding floor** | YES (padding min) | NO | Bake in `.page-container` |
| **1.5 line-height** | YES (line-height) | NO | Bake in `body` |
| **45-80 CPL** | PARTIAL (width + font controls) | VERIFY (measure actual rendered CPL) | Bake width, audit CPL |
| **16px label gap** | PARTIAL (margin-bottom) | VERIFY (measure specific pairs) | Bake default, audit violations |
| **48px section breathing** | PARTIAL (margin-block) | VERIFY (measure actual gaps) | Bake default, audit violations |
| **40% compression ratio** | NO (requires comparing sections) | YES (measure deepest vs shallowest) | Audit only |
| **65-80% content-to-viewport** | PARTIAL (container width implies ratio) | VERIFY (measure actual viewport usage) | Audit only |

**Current best answer:**
3 guardrails are FULLY bakeable (container, padding, line-height).
3 guardrails are PARTIALLY bakeable (CPL, label gap, breathing) — bake defaults, audit violations.
2 guardrails are AUDIT-ONLY (compression ratio, viewport utilization) — require measurement.

**Resolution method:**
**Phase C Extraction** — Implement 3 fully bakeable + 3 partial defaults. **Phase D Validation** — Test whether defaults prevent most violations. **Phase F Pilot** — Audit confirms whether measurement-based guardrails catch what CSS cannot.

**Impact if unresolved:**
Low — affects division of labor between component library (structural prevention) and perceptual-auditing skill (verification), but both exist regardless.

---

### OQ-13: Do Existing DD/OD/AD/CD Explorations Need Guardrail Retrofitting?

**Severity:** LOW
**Appears in:** 04-CONTENT-INGESTION.md
**Status:** OPEN

**Question:**
The 30+ existing HTML explorations (DD-001 through CD-006) were built BEFORE guardrails existed. Many violate the 8 perceptual floors:
- Geological Core: 900px container (below 940px floor)
- Archival Vault: 920px container (below 940px floor)
- Multiple layouts: Label-to-heading gaps of 8-12px (below 16px floor)
- Stats bars: Universally weak at 768px (no responsive mitigation)

**Should these be retrofitted to meet guardrails?** Or only new/migrated pages?

**Arguments FOR retrofitting:**
- Consistency (all pages meet same floors)
- Validates guardrails empirically (if retrofitting breaks metaphors, guardrails may be too strict)
- Prevents "legacy debt" (old pages grandfathered with violations)

**Arguments AGAINST:**
- Time cost (30+ pages × 30-60 min fixes = 15-30 hours)
- Risk of breaking metaphors (Geological Core's narrow container may be metaphor-essential)
- Existing pages already passed comprehensive audit (zero soul violations, high quality verdicts)

**Current best answer:**
**Selective retrofitting, not universal:**
1. **Do NOT retrofit metaphor-driven compromises** where narrow containers are metaphor-essential (Geological Core, Manuscript Codex, Archival Vault)
2. **DO retrofit accidental violations** where floors can be met without breaking metaphor (label gaps, padding floors, section breathing)
3. **DO retrofit stats bars** (universal weakness, guardrail-compliant solutions exist)

**Resolution method:**
**Phase D Validation or later** — After guardrails are validated on new pages (Phase D + Pilot), run selective retrofit pass:
1. Identify violations across 30+ explorations
2. Classify: Metaphor-essential (PA-42 justified) vs accidental (fix)
3. Fix accidental violations
4. Document metaphor-essential violations as intentional overrides

**Impact if unresolved:**
Low — existing pages remain high-quality despite violations. But creates inconsistency (old pages have violations, new pages don't).

---

## CATEGORY 4: SKILL INVOCATION MECHANICS

### OQ-14: Can Agents Invoke Skills Mid-Pipeline?

**Severity:** CRITICAL
**Appears in:** 01-skill-integration-map.md, 03-MIGRATION-PIPELINE.md, 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
**Status:** OPEN — TECHNICAL UNKNOWN

**Question:**
Can migration agents invoke skills as black-box tools during pipeline execution?

**Desired workflow (Track 2 Phase 3):**
```
Migration agent receives Tension Table from Phase 2
↓
Agent invokes: /tension-composition [tension-table]
↓
Skill executes Phases 3-4 (Metaphor Collapse → Compositional Layout)
↓
Skill returns: Metaphor selection + isomorphism table + compositional mechanisms
↓
Agent extracts spatial blueprint from skill output
↓
Agent proceeds to Phase 4 (Build)
```

**If YES (agents can invoke):**
- Phase 3 becomes orchestration (simple skill invocation gate)
- Skill maintains internal state across phases
- Output is structured (JSON/markdown with extractable fields)

**If NO (only user can invoke OR skills must be inlined):**
- Phase 3 must INLINE the entire tension-composition protocol (~1,137 lines)
- Agent context window bloats significantly
- Skill state must be managed explicitly by agent

**Current best answer:**
UNKNOWN — requires technical testing. The Skill tool description suggests agents CAN invoke skills, but:
- Does skill invocation block until complete?
- Can agents provide structured input (Tension Table as parameter)?
- Does skill output return to agent's context or user's interface?

**Resolution method:**
**Phase A (CD completion as pilot)** — Technical test:
1. Spawn builder agent for CD-006 rebuild
2. Agent attempts to invoke `/tension-composition [content]` mid-build
3. Does invocation succeed? Does output return to agent?
4. If YES → proceed with skill invocation model
5. If NO → revise Phase 3 spec to inline protocol

**Impact if unresolved:**
Cannot finalize Phase E (Playbook) specification. If skills must be inlined, agent prompts balloon to 2,000+ lines, context window pressure increases significantly.

---

### OQ-15: If Skills Must Be Inlined, What's the Context Window Impact?

**Severity:** MEDIUM
**Appears in:** 01-skill-integration-map.md
**Status:** OPEN (depends on OQ-14 resolution)

**Question:**
If agents cannot invoke skills and must inline the full protocol:
- Tension-composition skill: 1,137 lines
- Perceptual-auditing skill: 627 lines
- Agent prompt base: ~200-300 lines (role, phase instructions, file paths)

**Total context per Track 2 agent: ~1,964-2,064 lines BEFORE any content is loaded.**

Does this create context window pressure that:
- Limits agent's ability to read full content files?
- Forces content summarization instead of full-text analysis?
- Reduces quality of tension analysis or metaphor selection?

**Current best answer:**
Likely manageable with Opus 4.6 (200k token context), but:
- 2,000 lines of instructions ≈ 6,000-8,000 tokens
- Leaves ~192k tokens for content + research + output
- Boris content (full file) ≈ 15k tokens
- Tension analysis output ≈ 5k tokens

**Remaining budget: ~172k tokens** — sufficient for Track 2 work.

**But:** If agent needs to reference multiple research files (DD/OD/AD/CD explorations for pattern examples), context pressure increases.

**Resolution method:**
**If OQ-14 = NO (must inline):**
1. Measure actual context usage during Phase F Pilot
2. Track 2 agent: instruction size + content size + research size + output size
3. If total approaches 150k+ tokens → implement content chunking or research summarization
4. If total stays below 100k tokens → no mitigation needed

**Impact if unresolved:**
Low if OQ-14 = YES (skill invocation works). High if OQ-14 = NO and context pressure forces content summarization (quality degradation risk).

---

### OQ-16: Can Perceptual-Auditing Skill Be Invoked as Post-Build Step?

**Severity:** LOW
**Appears in:** 01-skill-integration-map.md
**Status:** OPEN (subset of OQ-14)

**Question:**
Can Phase 5 (Perceptual Audit) invoke `/perceptual-auditing mode=standard page=[path]` as a separate agent step, or must the audit protocol be inlined into builder agent's context?

**Desired workflow:**
```
Phase 4 completes → migrated page written to file
↓
Phase 5 agent spawns
↓
Agent invokes: /perceptual-auditing mode=standard page=/path/to/page.html
↓
Skill executes: Cold Look + Scroll-Through + PA-01 through PA-45
↓
Skill returns: Audit report + verdict + findings
↓
Agent processes verdict (PASS → Phase 6, FAIL → Phase 4 fixes)
```

**If NO (must inline):**
- Phase 5 agent must carry full 627-line perceptual-auditing protocol
- Playwright access required in builder agent's context (not separate audit agent)
- Context window includes audit protocol + page source + research

**Current best answer:**
Same technical unknown as OQ-14. Likely YES (skills are designed for invocation), but requires testing.

**Resolution method:**
**Phase A (CD pilot)** — Test perceptual-auditing skill invocation:
1. Build CD-006 rebuild
2. Separate audit agent attempts `/perceptual-auditing mode=standard page=[path]`
3. Does invocation succeed? Does audit complete? Does verdict return?

**Impact if unresolved:**
Low if OQ-14 = YES. Medium if OQ-14 = NO (requires inlining audit protocol into all builder agents, context bloat).

---

## CATEGORY 5: TEAM TOPOLOGY AND COST

### OQ-17: What Model Tier for Track 2 Agents?

**Severity:** HIGH
**Appears in:** 04-impact-assessment.md, 05-COMPLETE-ROADMAP.md
**Status:** OPEN

**Question:**
Should Track 2 agents (creative composition, metaphor selection) use:
- **Opus 4.6** (most capable, expensive)
- **Sonnet 4.5** (cost-effective, proven for OD/AD/CD builds)

**Arguments FOR Opus 4.6:**
- Metaphor selection requires creative judgment (Phase 3 Metaphor Collapse)
- Perceptual risk assessment requires nuanced evaluation (4-question scoring)
- Track 2 quality ceiling depends on agent capability (mediocre metaphors = timeline waste)
- Impact assessor explicitly recommends Opus for Track 2

**Arguments FOR Sonnet 4.5:**
- Sonnet successfully built all 30 DD/OD/AD/CD explorations (proven capability)
- Cost difference significant at 35-45 Track 2 pages (see OQ-20)
- Skill invocation may reduce capability requirements (skill does the heavy lifting, agent orchestrates)
- Guardrails + perceptual audit catch quality issues regardless of model tier

**Current best answer:**
**Opus 4.6 for Track 2 creative work, Sonnet 4.5 for Track 1 assembly.**

Reasoning:
- Track 2 is the quality ceiling (top 3 layouts all Track 2)
- 3-5 hours per page justifies premium model (quality risk >> cost risk)
- Sonnet for Track 1 proven during CD Phase 2 audit (9-agent team, Sonnet builders + auditors)

**But:** Test Sonnet on 1 Track 2 page during Pilot to validate necessity of Opus upgrade.

**Resolution method:**
**Phase F Pilot** — A/B test:
1. Build 1 Track 2 page with Opus 4.6 agent
2. Build 1 Track 2 page with Sonnet 4.5 agent (same content, different metaphor)
3. Compare: metaphor quality, perceptual audit verdict, execution time
4. If Sonnet produces WOULD-NOT-SHIP or significantly worse metaphor → Opus required
5. If Sonnet produces comparable quality → Sonnet suffices, cost savings significant

**Impact if unresolved:**
Cannot finalize cost estimates (OQ-20). If Opus is required but not budgeted, Track 2 may be infeasible at scale. If Sonnet suffices but Opus is used, money wasted.

---

### OQ-18: Can Track 2 Be Parallelized with 2-3 Concurrent Creative Agents?

**Severity:** MEDIUM
**Appears in:** 04-impact-assessment.md, 06-synthesis.md
**Status:** OPEN

**Question:**
The impact assessor notes that Track 2 is a **sequential creative bottleneck**:
> "Each page requires unique tension analysis (Phase 1 multi-axis questioning). Metaphor selection requires creative judgment (Phase 3 metaphor collapse). Builder execution requires perceptual discipline (Phase 4 compositional layout generation with guardrails)."

**Can 2-3 Track 2 pages proceed concurrently**, each with its own 4-agent team (Tension Analyst + Metaphor Selector + Compositional Builder + Perceptual Auditor)?

**Arguments FOR parallelization:**
- Different content = no resource contention (different pages, different metaphors)
- Weaver can coordinate across concurrent teams (metaphor reuse detection)
- Faster throughput (2-3 pages/session instead of 1 page/session)

**Arguments AGAINST:**
- Creative work may degrade with divided attention (agent "multitasking")
- Weaver coordination overhead increases (3 teams × 4 agents = 12 agents + Weaver)
- Playwright contention if 3 audit agents run simultaneously (historical issue per MEMORY.md)

**Current best answer:**
**2 concurrent Track 2 teams is likely feasible. 3+ teams risks coordination overhead.**

Evidence from agent team lessons:
- Hierarchical audit (4th team): 13 visual workers + Playwright contention = only 2/13 got Playwright access
- Skill enrichment (13th team): 1 Playwright auditor (sequential) = zero contention, clean execution

**Implication:** If 2 Track 2 teams run concurrently but auditors run SEQUENTIALLY (Team A builds → Team A audits → Team B audits), Playwright contention is avoided.

**Resolution method:**
**Phase F Pilot** — Test concurrent Track 2:
1. Session 1: Build 1 Track 2 page (Team A solo)
2. Session 2: Build 2 Track 2 pages concurrently (Team A + Team B)
3. Compare: quality, execution time, coordination overhead, Playwright issues
4. If 2 concurrent teams produce comparable quality → scale to 2-3 teams for migration
5. If quality degrades or overhead is prohibitive → sequential only

**Impact if unresolved:**
Track 2 remains sequential bottleneck. At 35-45 pages × 3-5 hrs/page = 105-225 hours, this means 21-45 sessions of Track 2-only work. Parallelization (2 teams) reduces to 11-23 sessions.

---

### OQ-19: Does Weaver's Metaphor Reuse Strategy Reduce Track 2 Per-Page Time?

**Severity:** LOW
**Appears in:** 04-impact-assessment.md, 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
**Status:** OPEN

**Question:**
The Weaver role tracks cross-page patterns, including metaphor reuse opportunities. If:
- Page 10 uses geological strata metaphor (4px/3px/1px confidence encoding)
- Page 25 has similar confidence gradient structure
- Weaver suggests: "Reuse geological pattern from Page 10"

**Does this reduce Page 25's Track 2 time from 3-5 hours to 2-3 hours?**

**Potential time savings:**
- Phase 3 Metaphor Collapse: 45 min → 15 min (skip candidate generation, test existing metaphor)
- Phase 4 Compositional Layout: 2-3 hrs → 1.5-2 hrs (adapt existing translation grammar instead of deriving fresh)

**Total savings: ~1-1.5 hours per reused metaphor**

If 15/35 Track 2 pages reuse metaphors (43%), this saves 15-22 hours total migration time.

**Current best answer:**
Likely YES, but magnitude depends on:
1. How often content structure allows metaphor reuse (unknown until classification completes)
2. Whether reused metaphors require significant adaptation (e.g., geological strata for API confidence vs audit findings confidence)
3. Whether builders accept Weaver suggestions or prefer fresh metaphor derivation

**Resolution method:**
**Emerges during Phase H+I (Migration)**:
1. Weaver tracks metaphor usage from Page 1 onward
2. When similar content appears, Weaver suggests reuse
3. Track: How often is reuse accepted? How much time is saved?
4. After 10-15 Track 2 pages, calculate empirical time savings per reuse

**Impact if unresolved:**
Low initially — timeline estimates assume NO reuse (conservative). If reuse works, timeline compresses (15-22 hour savings). If reuse fails, timeline remains as estimated.

---

### OQ-20: What's the Dollar Cost Estimate at Current API Rates?

**Severity:** MEDIUM
**Appears in:** 04-impact-assessment.md
**Status:** OPEN (depends on OQ-08, OQ-17, OQ-18 resolution)

**Question:**
What is the total dollar cost for full migration at current Claude API rates?

**Variables:**
- **Track 1 count:** 30-40 pages (depends on OQ-08)
- **Track 2 count:** 35-45 pages (depends on OQ-08)
- **Track 1 model:** Sonnet 4.5 (proven)
- **Track 2 model:** Opus 4.6 OR Sonnet 4.5 (depends on OQ-17)
- **Track 1 time:** 45-90 min/page
- **Track 2 time:** 3-5 hrs/page (may reduce with metaphor reuse per OQ-19)

**Hypothetical calculation (placeholder, NOT actual rates):**

Assuming:
- Sonnet 4.5: $X per million tokens
- Opus 4.6: $Y per million tokens (Y > X, typically 3-5x)
- Track 1 agent uses ~50k tokens/page (content + instructions + output)
- Track 2 agent uses ~150k tokens/page (content + tension analysis + metaphor + output)

```
Track 1 cost: 35 pages × 50k tokens × $X = ?
Track 2 cost (Sonnet): 40 pages × 150k tokens × $X = ?
Track 2 cost (Opus): 40 pages × 150k tokens × $Y = ?
```

**Current best answer:**
Cannot calculate without actual API pricing. But RELATIVE cost is clear:
- Track 2 uses 3x tokens per page (150k vs 50k)
- Track 2 may use 3-5x cost per token if Opus required
- **Track 2 per-page cost = 9-15x Track 1 per-page cost**

If Track 2 is 50% of pages (OQ-08) and requires Opus (OQ-17), Track 2 may represent **75-85% of total dollar cost** despite being 50% of pages.

**Resolution method:**
**After OQ-08 + OQ-17 resolve:**
1. Obtain current Claude API pricing (Sonnet 4.5, Opus 4.6)
2. Calculate per-page token usage (measure during Pilot)
3. Multiply: pages × tokens × rate = dollar cost per track
4. Sum: Track 1 cost + Track 2 cost = total migration cost

**Impact if unresolved:**
Cannot make cost-informed decisions about:
- Whether to expand Tier 2.5 library to reduce Track 2 percentage (OQ-06)
- Whether to test Sonnet vs Opus for Track 2 (OQ-17)
- Whether to attempt Track 2 parallelization (OQ-18)

All of these affect dollar cost but cannot be evaluated without baseline estimate.

---

## CATEGORY 6: METAPHOR QUALITY AND DIVERSITY

### OQ-21: At What Page Count Does Metaphor Fatigue Become a Real Risk?

**Severity:** MEDIUM
**Appears in:** 04-impact-assessment.md, 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
**Status:** OPEN

**Question:**
If 35-45 pages are Track 2 (metaphor-driven composition), will readers experience **metaphor fatigue** — the same 3-4 metaphor families (geological, architectural, mechanical, narrative) reused to the point of predictability?

**Evidence:**
- Tension-test proved 10+ viable metaphor families (geological, architectural, mechanical, botanical, archival, editorial, military, civic, apprenticeship, etc.)
- 15 layouts used 12 distinct metaphors (some overlap: geological appeared 2×, architectural appeared 2×)

**Fatigue threshold unknown:**
- 10 pages using geological metaphors? (may feel repetitive)
- 5 pages using geological + 5 architectural + 5 mechanical? (more variety but still limited)
- 35 pages across 10 metaphor families? (3-4 pages per family = manageable)

**Current best answer:**
Fatigue risk is MODERATE if unmanaged. The Weaver must enforce **metaphor diversity** to prevent overuse.

**Proposed diversity minimum:**
- No single metaphor family used more than **4-5 times** (e.g., geological strata can appear 4-5×, not 12×)
- No consecutive pages use the same metaphor (reader needs variety)
- Similar content types use DIFFERENT metaphors (avoid "all API docs = geological," "all tutorials = apprenticeship")

**Resolution method:**
**Emerges during Phase H+I (Migration)**:
1. Weaver tracks metaphor usage from Page 1
2. After 15 Track 2 pages, evaluate: Are we seeing repetition? Does it feel stale?
3. If YES → enforce stricter diversity (max 3× per family)
4. If NO → continue with 4-5× limit

**Impact if unresolved:**
Quality concern, not functional breakage. Individual pages remain well-executed, but the COLLECTION feels like "3-4 metaphors applied mechanically" rather than "infinite compositional capacity." Undermines the system's demonstration of generative power.

---

### OQ-22: Should Weaver Enforce a Diversity Minimum?

**Severity:** LOW
**Appears in:** 04-impact-assessment.md
**Status:** OPEN (subset of OQ-21)

**Question:**
Should the Weaver role include **metaphor diversity enforcement** as a protocol gate?

**Proposed rule:**
- After Page 10, Weaver tracks metaphor family usage
- If any family appears 4+ times, Weaver flags "metaphor fatigue risk" before accepting new pages with that family
- Builder must either: (a) use different metaphor, or (b) justify reuse with explicit rationale

**Arguments FOR enforcement:**
- Prevents metaphor fatigue proactively (doesn't wait for human to notice staleness)
- Ensures 35-45 Track 2 pages demonstrate breadth, not just depth
- Aligns with design system's "infinite compositional capacity" positioning

**Arguments AGAINST:**
- Adds complexity to Weaver role (must track + enforce)
- May force suboptimal metaphors (geological is BEST for content, but quota exhausted)
- Metaphor quality > metaphor diversity (better to repeat a good metaphor than invent a mediocre one)

**Current best answer:**
**Weaver TRACKS diversity, ADVISES on fatigue, does NOT enforce hard limits.**

Workflow:
1. Weaver maintains metaphor registry (which families used, how many times, for which content types)
2. When builder selects metaphor, Weaver checks registry
3. If family appears 4+ times, Weaver advises: "Geological used 4× already. Consider alternative?"
4. Builder can accept advice (choose different family) OR override (justify reuse)
5. Human Lead reviews overrides if fatigue becomes pattern

**Resolution method:**
**Design decision during Phase E (Playbook)** — Define Weaver's diversity protocol:
- TRACK (always)
- ADVISE (when family appears 4+×)
- ENFORCE (only if human Lead sets hard limit)

Test during **Phase F Pilot** — Does Weaver's advice feel helpful or restrictive?

**Impact if unresolved:**
Low — Weaver tracks regardless, enforcement is optional refinement.

---

### OQ-23: Does Metaphor Quality Improve or Degrade Over Time as Weaver Builds Strategy Library?

**Severity:** LOW
**Appears in:** 04-impact-assessment.md, 07-TRACK-2-COMPOSITIONAL-SUPPLEMENT.md
**Status:** OPEN

**Question:**
As the Weaver accumulates metaphor documentation (tension resolved, isomorphism table, perceptual risk score) across 35-45 Track 2 pages, does:
- **Quality IMPROVE** (later pages benefit from earlier learnings, metaphor selection becomes more refined)
- **Quality DEGRADE** (fatigue sets in, builders default to safe metaphors, creativity drops)
- **Quality STABLE** (each page is independent, no learning transfer)

**Hypothetical improvement mechanisms:**
- Weaver identifies "geological works well for confidence gradients" → suggests geological for similar content
- Weaver identifies "apprenticeship had high perceptual risk (monotonous grids)" → warns against apprenticeship unless mitigation applied
- Compositional strategy library grows → builders have more prose patterns to reference

**Hypothetical degradation mechanisms:**
- Builders exhaust creative energy after 15-20 Track 2 pages → default to familiar metaphors
- Metaphor reuse becomes mechanical (geological = default for ANY gradient) → loses tension-driven derivation
- Weaver's suggestions feel prescriptive → builders follow recommendations instead of deriving fresh

**Current best answer:**
UNKNOWN — depends on whether metaphor derivation remains **content-driven** (quality stable or improving) or becomes **pattern-matching** (quality degrades).

**Resolution method:**
**Emerges during Phase H+I (Migration)**:
1. Track perceptual audit verdicts over time (Pages 1-15 vs Pages 16-30 vs Pages 31-45)
2. Track metaphor selection rationale (content-driven vs reuse-driven)
3. Track Weaver's strategy library growth (does documentation quality improve?)
4. After migration completes, evaluate: Did later pages feel fresher or staler than early pages?

**Impact if unresolved:**
Low initially — becomes visible only during full migration. If quality degrades, intervention is needed (refresh builders, rotate agents, enforce fresh derivation). If quality improves, Weaver's role is validated.

---

## CATEGORY 7: CROSS-DOCUMENT CONSISTENCY

### OQ-24: Which POST-CD-PIPELINE Documents Reference Which Open Questions?

**Severity:** LOW (meta-tracking)
**Appears in:** This document
**Status:** TRACKING

**Cross-Reference Matrix:**

| Question | 02-POST-CD-PHASES | 03-MIGRATION-PIPELINE | 04-CONTENT-INGESTION | 05-COMPLETE-ROADMAP | 07-TRACK-2-SUPPLEMENT | 08-COMPOSITIONAL-STRATEGY | 09-EXTRACTION-VALIDATION |
|----------|------------------|---------------------|-------------------|-------------------|---------------------|------------------------|------------------------|
| **OQ-01** | - | - | - | - | - | ✓ (Tier 2 count) | ✓ (extraction scope) |
| **OQ-02** | - | - | - | - | - | ✓ (tier boundaries) | ✓ (Rename Test) |
| **OQ-03** | - | - | - | - | - | ✓ (Gas Town pattern) | - |
| **OQ-04** | - | - | - | - | - | ✓ (Tier 2.5 definition) | ✓ (pattern extraction) |
| **OQ-05** | - | - | - | - | - | ✓ (confidence encoding) | - |
| **OQ-06** | ✓ (Phase C scope) | - | - | ✓ (timeline impact) | - | ✓ (library richness) | - |
| **OQ-07** | ✓ (Phase B process) | ✓ (classification) | ✓ (Track 1/2 gate) | - | ✓ (tension pre-screen) | - | - |
| **OQ-08** | ✓ (Phase B outcome) | ✓ (per-page routing) | ✓ (Track split) | ✓ (timeline) | ✓ (Track 2 scope) | - | - |
| **OQ-09** | - | ✓ (Phase 1 gates) | ✓ (genuine tension) | - | ✓ (Addition/BECAUSE) | - | - |
| **OQ-10** | - | ✓ (3-track model?) | ✓ (Track 1.5?) | - | - | - | - |
| **OQ-11** | ✓ (Phase C output) | - | - | - | - | - | ✓ (CSS baking) |
| **OQ-12** | - | - | - | - | - | - | ✓ (guardrail split) |
| **OQ-13** | - | - | ✓ (legacy retrofit) | - | - | - | - |
| **OQ-14** | - | ✓ (Phase 3 invocation) | - | - | ✓ (skill calling) | - | - |
| **OQ-15** | - | ✓ (agent context) | - | - | ✓ (inlining impact) | - | - |
| **OQ-16** | - | ✓ (Phase 5 invocation) | - | - | - | - | - |
| **OQ-17** | - | - | - | ✓ (cost model) | ✓ (Opus vs Sonnet) | - | - |
| **OQ-18** | - | - | - | ✓ (session count) | ✓ (concurrency) | - | - |
| **OQ-19** | - | - | - | ✓ (timeline compression) | ✓ (Weaver reuse) | - | - |
| **OQ-20** | - | - | - | ✓ (dollar cost) | - | - | - |
| **OQ-21** | - | - | - | - | ✓ (metaphor fatigue) | ✓ (diversity) | - |
| **OQ-22** | - | - | - | - | ✓ (Weaver enforcement) | - | - |
| **OQ-23** | - | - | - | - | ✓ (quality arc) | ✓ (strategy library) | - |

---

## META: QUESTION TRACKING SUMMARY

### By Severity

- **CRITICAL:** 3 questions (OQ-08, OQ-14, OQ-17)
- **HIGH:** 3 questions (OQ-01, OQ-06, OQ-07)
- **MEDIUM:** 9 questions (OQ-02, OQ-04, OQ-09, OQ-11, OQ-15, OQ-18, OQ-20, OQ-21)
- **LOW:** 8 questions (OQ-03, OQ-05, OQ-10, OQ-12, OQ-13, OQ-16, OQ-22, OQ-23)

### By Resolution Phase

- **Phase A (CD):** OQ-14, OQ-16, OQ-17 (skill invocation + model testing)
- **Phase B (Content Analysis):** OQ-01, OQ-02, OQ-07, OQ-08, OQ-09, OQ-10 (classification + counts)
- **Phase C (Extraction):** OQ-03, OQ-04, OQ-05, OQ-06, OQ-11, OQ-12 (tier boundaries + guardrails)
- **Phase D (Validation):** OQ-11 (outcome), OQ-13 (retrofit decision)
- **Phase E (Playbook):** OQ-22 (Weaver protocol)
- **Phase F (Pilot):** OQ-10, OQ-15, OQ-17, OQ-18 (team topology testing)
- **Phase H+I (Migration):** OQ-19, OQ-21, OQ-23 (emergent patterns)
- **Post-Migration:** OQ-20 (dollar cost retrospective)

### By Category

1. **Component Inventory:** 6 questions (OQ-01 through OQ-06)
2. **Track Classification:** 4 questions (OQ-07 through OQ-10)
3. **Guardrail Enforcement:** 3 questions (OQ-11 through OQ-13)
4. **Skill Invocation:** 3 questions (OQ-14 through OQ-16)
5. **Team Topology:** 4 questions (OQ-17 through OQ-20)
6. **Metaphor Quality:** 3 questions (OQ-21 through OQ-23)

### Status Distribution

- **OPEN:** 23 questions (100%)
- **INVESTIGATING:** 0 questions
- **RESOLVED:** 0 questions

---

## NEXT ACTIONS

### Immediate (Pre-Phase A)

1. **Review this document** with human Lead — confirm question prioritization
2. **Identify decision-forcing questions** — which questions BLOCK Phase A start?
   - OQ-14 (skill invocation) is the only true blocker

### Phase A (CD Completion)

1. **Test OQ-14, OQ-16** — Can agents invoke skills? Does skill output return?
2. **Test OQ-17** — Does CD-006 rebuild with Sonnet produce comparable quality to original Opus build?

### Phase B (Content Analysis)

1. **Resolve OQ-08** — Actual Track 1 vs Track 2 split percentage
2. **Resolve OQ-07** — Universal tension analysis or fast-path heuristic?
3. **Resolve OQ-09** — Validate Addition Test + BECAUSE Test thresholds
4. **Collect data for OQ-01** — Count all structural components programmatically

### Phase C (Extraction)

1. **Resolve OQ-01** — Definitive Tier 2 count via exhaustive audit
2. **Resolve OQ-02, OQ-04, OQ-05** — Apply Rename Test to ambiguous components
3. **Resolve OQ-06** — Extract maximum Tier 2.5 patterns, measure Track 2 impact
4. **Resolve OQ-11, OQ-12** — Implement CSS-bakeable guardrails, test enforcement

---

**END OPEN-QUESTIONS TRACKING DOCUMENT**
