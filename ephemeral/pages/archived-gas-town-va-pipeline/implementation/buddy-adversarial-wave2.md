# Adversarial Review — Wave 2 Changes
**Reviewer:** Adversarial Agent (Opus)
**Date:** 2026-02-24
**Scope:** All 44 Wave 2 fixes across 4 work streams
**Artifacts Reviewed:** artifact-pa-protocol.md, artifact-gate-runner.md, artifact-builder-recipe.md, artifact-orchestrator.md, MANIFEST.md, 4 wave2-*.md change logs
**Adversarial Mandate:** Find weaknesses, gaming vectors, collateral damage, and systemic vulnerabilities

---

## VERDICT: CONDITIONAL PASS

**Rationale:** Wave 2 is a net positive. The PA surgery closes real measurement gaps. The new gates address known failure modes. The integration work is clean. BUT there are 3 CRITICAL findings, 5 SIGNIFICANT findings, and 8 MINOR findings that should be addressed before relying on these changes in a production pipeline run.

**Summary Scorecard:**

| Work Stream | Rating | Key Concern |
|-------------|--------|-------------|
| PA Question Surgery (18 fixes) | B+ | New questions PA-74/PA-76 overlap; PA-72 may be unanswerable from screenshots |
| PA Structural Changes (12 fixes) | A- | Cross-validation is well-designed; FIX-084 WARNING correctly placed |
| Gate Engineering (12 fixes) | B | Multiple gaming vectors in GR-51/GR-45/GR-53; GR-48 has a circular dependency |
| Integration (4 fixes) | A | Clean, minimal, correctly placed. No issues found. |

---

## 1. GATE GAMING ANALYSIS

### CRITICAL-01: GR-51 (Background Delta Distribution) — Gameable via Bimodal Distribution

**Gaming vector:** A builder could use exactly 2 background colors: one pair at 50+ RGB delta and one pair at 15 RGB delta. If the page has 4 zone boundaries and 2 are at 50+ RGB, that is >= 50% above 25 RGB. The standard deviation of {50, 50, 15, 15} is ~17.5, which passes stddev >= 8 easily.

**Result:** The page has dramatically different header/footer but completely flat middle sections. GR-51 PASSES. The page LOOKS flat in the scroll zone that matters most.

**The deeper problem:** GR-51 checks DISTRIBUTION but not POSITION. A builder can cluster all its delta at the top and bottom while the 70% middle of the page (where users spend most time) is perceptually flat. The metric is global (all boundaries) but the human perception problem is LOCAL (the middle zones).

**Recommendation:** Add a positional constraint: "At least 1 boundary in the MIDDLE 50% of boundaries must have delta >= 25 RGB." This prevents the bookend-gaming pattern.

**Severity: CRITICAL** — This is the exact failure mode that caused the Flagship disaster (imperceptible backgrounds), and GR-51 does not reliably prevent it.

### CRITICAL-02: GR-45 (Typography Variation) — 2px Threshold is Perceptually Meaningless

**Gaming vector:** A builder uses 27px and 29px H2 elements. This "passes" with 2 distinct bands (using 2px tolerance). But 27px vs 29px is a 7% difference — below typical perceptual threshold for font size (which is ~12-15% difference, or about 4px at these sizes).

**The spec says:** "differ by >= 2px" and "Group into 2px tolerance bands. Count distinct bands."

**The problem:** 2px tolerance bands and 2px minimum difference are the SAME number. A builder using 27px and 29px has fonts in band [26-28] and [28-30] — technically 2 bands. But the actual perceptual difference is negligible.

**Worse:** The gate checks H2 AND H3 together. A builder could have ALL H2s at 28px and ALL H3s at 24px. That is 2 "distinct bands" but zero WITHIN-LEVEL variation. The purpose of GR-45 ("counters DRIFT pattern where all H2s flatten to a single size") is not served by allowing inter-level variation to satisfy the gate.

**Recommendation:** (a) Increase minimum delta to 4px for distinct bands at heading sizes. (b) Require at least 2 distinct font-sizes WITHIN the H2 population (not across H2+H3 combined). The whole point is that H2s in different zones should differ.

**Severity: CRITICAL** — The gate was specifically designed to prevent the Flagship failure mode (all H2s at 28px). As specified, it does NOT prevent that failure when H3s exist at a different size.

### SIGNIFICANT-01: GR-52 (Section Height Variation) — Trivially Gameable via Empty Space

**Gaming vector:** A builder creates 6 sections with heights: 600px, 800px, 1200px, 600px, 800px, 1200px. Three distinct bands, gate PASSES. But the builder achieves the height variation by adding padding: sections 3 and 6 have 400px of top/bottom padding with very little content. The variation is SPATIAL WASTE, not content-driven structure.

**Why GR-13/GR-14 don't catch this:** GR-13 checks BOUNDARY gaps (section-to-section), not INTERNAL padding. A section with 200px top padding and 200px bottom padding has internal waste but the boundary gap to the next section could be only 100px.

**Mitigation:** GR-52 is RECOMMENDED, not REQUIRED, so this is bounded in impact. But the gate gives false confidence that height variation = quality when it can mean height variation = padding waste.

**Recommendation:** Add a content-density qualifier: "section height / element count must show variation, not just raw height." Or accept that this gate is a loose proxy.

**Severity: SIGNIFICANT** — Gaming is easy and the gate gives misleading signal.

### SIGNIFICANT-02: GR-53 (Density Arc) — Gameable and Theoretically Weak

**Gaming vector:** Put one dense element (a table with 50 rows) in the middle section. Density ratio = childElements.length / boundingRect.height spikes in the middle. Gate PASSES. But the page has no actual density arc — just one dense widget in an otherwise flat layout.

**More fundamentally:** The metric (childElements.length / height) is a poor proxy for visual density. A section with 3 deeply nested divs (3 children) might look dense. A section with 50 empty `<span>` elements (50 children) looks empty. Element count is not density.

**Saving grace:** GR-53 is ADVISORY. It cannot block or even flag a verdict. So the damage of false positives/negatives is limited.

**Recommendation:** Acknowledge in the gate description that this is a heuristic with known weaknesses. Consider: visible-text-area / section-area as an alternative density proxy.

**Severity: SIGNIFICANT** — The metric is wrong for the job, but ADVISORY classification limits real damage.

### MINOR-01: GR-48 (Gate Coverage Completeness) — Circular Dependency

**Issue:** GR-48 is a REQUIRED gate that checks "all 17 REQUIRED gate IDs have a result." But GR-48 itself IS one of the 18 REQUIRED gates (per the gate table: BV-01-04 + GR-01-10 + GR-11-15 + GR-44 + GR-43 + GR-48). So GR-48 needs to check its own result, which doesn't exist yet when it runs.

**The spec says:** "Runs LAST, after all other gates." This implies it checks the other 17, not itself. But the categorization table lists 18 REQUIRED gates including GR-48.

**Practical impact:** Low. The implementation naturally resolves this — GR-48 checks the OTHER required gates, then its own result is added. But the specification is self-contradictory.

**Recommendation:** Clarify in the spec that GR-48 checks the OTHER 17 required gates (excluding itself). Update the gate count documentation: "17 REQUIRED gates + GR-48 (meta-gate that verifies the other 17)."

**Severity: MINOR** — Implementable as intended, but spec text is confusing.

### MINOR-02: GR-48 Pass Threshold for RECOMMENDED Gates — Low Bar

**Issue:** GR-48 requires "at least 4 of 8 RECOMMENDED gates have a result." This is a 50% threshold. An orchestrator could silently skip half of the RECOMMENDED gates and still pass.

**Why this matters:** The Gate Runner Execution Protocol says gates run in order: REQUIRED first, then RECOMMENDED anti-pattern gates, then RECOMMENDED measurement gates. If the orchestrator times out after REQUIRED gates, it might only have 0-3 RECOMMENDED results. GR-48 would correctly flag this as INCOMPLETE. But the 4/8 threshold means skipping GR-19, GR-20, GR-51, GR-52 (the harder-to-implement gates) is fine if you run GR-17, GR-18, GR-25-28 (the easy ones).

**Recommendation:** Either raise to 6/8 or require all anti-pattern gates (GR-17-22) specifically, since those are the highest-value RECOMMENDED gates.

**Severity: MINOR** — The practical risk is low because the gate runner code is pre-written, not improvised per-run.

---

## 2. PA SURGERY COLLATERAL DAMAGE

### SIGNIFICANT-03: PA-07 Removal — Visual Clutter Detection Gap

**PA-07 was:** "Is there any visual clutter — anything that could be removed without losing information?"

**Supposed replacement:** The change log says PA-07 is covered by PA-09 (dead space), PA-37 (information competition), and PA-38 (reading order). But NONE of these directly ask about clutter/removability.

- PA-09 asks about dead space (absence of content, not excess of decoration)
- PA-37 asks about 5+ pieces competing (information overload, not visual noise)
- PA-38 asks about reading order (hierarchy, not clutter)

**What is lost:** The specific question "what could be REMOVED" triggers a subtractive design analysis. No replacement question triggers this. The removal test (Gas Town retrospective finding) showed that asking "what would you remove" is the most powerful single question for detecting APPLIED mode.

**Recommendation:** This may have been the wrong removal. PA-07 uniquely tests the "restraint" dimension that D-03 and D-08 attempt to create. If it was removed for load balancing, move it to a different auditor rather than removing it entirely.

**Severity: SIGNIFICANT** — A specific perceptual dimension (subtractive judgment) is now unasked.

### SIGNIFICANT-04: PA-10 Removal — Device-Appropriate Design Detection Gap

**PA-10 was:** "Does this feel like a desktop experience that was also designed for mobile, or vice versa?" (my assumption based on the numbering gap — the change log should specify what was removed)

**Risk:** If PA-10 asked about platform-appropriate design, PA-22/PA-23/PA-46 only partially cover it. PA-22-23 ask about specific viewport widths. PA-46 asks about element reorganization. None ask the HOLISTIC question of whether the design feels native to its medium.

**Severity: SIGNIFICANT** (contingent on what PA-10 actually was — if it was responsiveness-specific, the coverage may be adequate)

### MINOR-03: PA-21 Removal — Unknown Coverage

Same concern as PA-10. The removal log should document EXACTLY what was removed and the specific coverage argument for each.

**Severity: MINOR** — depends on actual content.

### MINOR-04: New Questions PA-72 and PA-76 Have Partial Overlap

**PA-72:** "If you replaced this page's content with completely different content (say, a cooking recipe instead of whatever this is), would the visual design need to change?"

**PA-76:** "Scroll from top to bottom at reading speed. Does the visual journey have a shape — building, peaking, resolving — or does it feel like the same room repeated?"

Both test content-form coupling — PA-72 from a substitution perspective and PA-76 from a temporal arc perspective. While the APPROACH differs, a page that fails PA-72 (design works for anything = template) will likely also show a flat arc on PA-76 (same room repeated). They are partially redundant.

**More importantly:** PA-72 may be UNANSWERABLE from screenshots alone. It requires the auditor to IMAGINE different content and assess whether the design would still work. This violates the Three Laws (Part 13): "The answer must require a screenshot (not answerable from source code alone)." PA-72 is answerable from imagination, not screenshots.

**Recommendation:** Test PA-72 with actual auditors. If they consistently answer "I don't know" or give generic answers, it should be replaced.

**Severity: MINOR** — Both questions have independent value, but PA-72's answerability should be validated.

### MINOR-05: PA-74 (Boundary Coherence) — Potential Anchoring to Multi-Coherence Theory

**PA-74:** "Pick a boundary where the page changes. Do ALL the changes point in the same direction?"

This question embeds multi-coherence theory ("if background gets darker, does text get heavier, spacing tighter, borders thicker — all saying 'denser'"). The example itself provides a FRAMEWORK for assessment that could anchor auditors toward looking for specific channel-direction alignments rather than their genuine perceptual impression.

**The fresh-eyes principle says:** Auditors should receive ONLY questions, not theoretical frameworks. PA-74's example clause ("For example, if background gets darker, does text get heavier...") gives the auditor a multi-coherence lens they're supposed to discover independently.

**Recommendation:** Remove the example clause. Just ask: "Pick a boundary where the page changes. Do ALL the changes point in the same direction, or do some changes contradict others?"

**Severity: MINOR** — The example helps clarify the question but slightly violates fresh-eyes.

---

## 3. REDISTRIBUTION EFFECTS

### Auditor C Load Analysis (11 questions)

Auditor C now has: PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53 (9 spatial questions) + PA-64, PA-66 (2 Tier 5 questions) = 11 total.

**Coherence check:** All 11 questions are spatial/proportional. The group is highly coherent — C has a clear domain. No cherry-picking detected.

**Load concern:** 11 questions is 59% more than the lightest auditor (H at 5). But spatial questions tend to be answered from fewer screenshots (mostly 1440px full-page scroll), so the per-question effort may be lower than average.

**Missing:** PA-52 (every third has designed moment) was MOVED FROM C TO D. This was spatial judgment. It fits C's domain but also relates to D's pacing specialty. The move is defensible.

**Verdict:** Load is high but coherent. DEFERRED contingency (FIX-064, C1/C2 split) is the right approach.

### Auditor B Load Analysis (8 questions, up from 6)

Auditor B gained PA-55 and PA-70.

- **PA-55** (sub-perceptual detection): "Can you describe how sections DIFFER visually without inspecting code?" This requires LOOKING at screenshots and describing differences — squarely in B's readability/typography domain.
- **PA-70** (content-form coupling via density): "Compare densest analytical section to lightest overview. Does visual treatment RESPOND to the difference?" This is typography/density judgment — fits B.

**Verdict:** Both additions are well-placed. B's load increase is justified.

### Gap Check — Uncovered Perceptual Dimensions

| Dimension | Coverage | Status |
|-----------|----------|--------|
| Readability | B: PA-02, 06, 08, 29, 56, 70, 77 | COVERED |
| Spatial balance | C: PA-09, 11, 30-33, 50-53, 64, 66 | COVERED |
| Flow/pacing | D: PA-12, 13, 34-36, 52, 69, 71, 62, 74, 75 | COVERED |
| Grid/layout | E: PA-14, 15, 37-39, 63 | COVERED |
| Consistency | F: PA-16, 17, 40, 41, 60, 61 | COVERED |
| Color/metaphor | G: PA-18-20, 42-44, 68 | COVERED |
| Responsiveness | H: PA-22, 23, 46, 47, 73 | COVERED |
| Cross-page/adversarial | I: PA-24-28, 48 | COVERED |
| Overall impression | A: PA-01, 03, 04, 05, 45, 65, 67, 72, 76 | COVERED |
| **Subtractive judgment** | **NONE** (was PA-07, removed) | **GAP** |
| Emotional impact | Distributed across A, D, G | COVERED |
| Accessibility | H: PA-73 | COVERED (new) |

**One gap confirmed:** Subtractive judgment (see SIGNIFICANT-03 above).

---

## 4. INTEGRATION RISKS

### MINOR-06: Part 3.5 Quality Framework Anchoring Risk

Part 3.5 contains tier definitions, quality tier tables, and historical PA-05 scores. The spec correctly includes FIX-084: "WEAVER USE ONLY. Must NOT be included in PA Auditor A-I prompts."

**But:** The document organization puts Part 3.5 between the PA question inventory (Parts 3.1-3.4) and the auditor deployment architecture (Part 4). An orchestrator copying the PA protocol might accidentally include Part 3.5 in auditor prompts.

**Mitigation:** The WARNING tag is prominent. The MANIFEST and routing table both specify that auditors receive ONLY their questions. But the document structure invites the error.

**Recommendation:** Move Part 3.5 to AFTER Part 4 (deployment architecture) or into a clearly separated appendix. This way, someone extracting "the question sections" won't accidentally include tier definitions.

**Severity: MINOR** — FIX-084 WARNING exists, but document structure could be improved.

### Cross-Validation Anchoring Assessment

**PA-05 cross-validation protocol (FIX-065):** "Cross-validators do NOT see Auditor A's scores. They assess independently. This is a blind cross-validation."

**This is well-designed.** The sequencing (each auditor works independently, Weaver resolves) prevents anchoring. The "blind" requirement is explicit. No anchoring risk detected in the protocol as specified.

**Risk:** Implementation fidelity. If the orchestrator spawns cross-validators AFTER Auditor A completes and accidentally includes A's report in context, the blindness is broken. This is an implementation risk, not a design risk.

### Component Adaptation Recipe (Step 3.4b) — No Conflicts Found

Step 3.4b was added to the builder recipe between Steps 3.4 and 3.5. It provides zone-specific component override CSS patterns.

**Checked for conflicts with:**
- Step 2.4 (Select callout variant semantics): No conflict. Step 3.4b is the DEPLOY counterpart of Step 2.4's SELECT decisions. The "Forward reference" in Step 2.4 explicitly points to Step 3.4b.
- Step 6.5 (Deploy creative authority + components): Potential overlap. Step 6.5 says "80% creative authority / 20% constraint. Use the component library from components.css." Step 3.4b provides specific component adaptation patterns. A builder might see these as contradictory — "Step 3.4b tells me exactly how to adapt callouts, but Step 6.5 says I have 80% creative authority over components." However, Step 3.4b uses vocabulary like "REFERENCE values" and "ASSESS," not mandates. The contradiction is resolvable.

**Verdict:** No blocking conflicts.

### Logging Requirement — Minimal Risk

The logging specification (per-agent output files with timestamped naming) adds orchestrator overhead but no pipeline latency. The agent itself is not affected — the orchestrator saves its output after the agent completes.

**Risk:** If the orchestrator crashes between receiving agent output and saving the log file, the output is lost. This is a standard durability concern, not a Wave 2 regression.

**Severity:** Not rated (standard operational concern).

---

## 5. SYSTEMIC VULNERABILITIES

### CRITICAL-03: Specification Growth — The Paradox Continues

**Before Wave 2:** ~6,000 lines across artifacts
**After Wave 2:**
- artifact-pa-protocol.md: ~1,110 lines (was ~1,004 per MANIFEST — grew ~106 lines)
- artifact-gate-runner.md: ~838+ lines of spec + substantial executable code section (total estimated ~1,780 lines)
- artifact-builder-recipe.md: ~910 lines (was ~840 — grew ~70 lines for Step 3.4b)
- artifact-orchestrator.md: ~1,016 lines (was ~971 — grew ~45 lines)
- MANIFEST.md: ~1,137 lines (unchanged from Wave 1)

**Estimated total across 9 artifacts:** ~7,000+ lines (up from ~6,000 pre-Wave 2)

**The paradox:** One of the pipeline's core findings is that MORE specification lines HURTS quality (963-line Flagship prompt scored PA-05 1.5/4; 100-line Middle prompt scored PA-05 4/4). Wave 2 adds ~1,000 lines of specification. The BUILDER doesn't see these lines (they're in gate-runner and PA protocol), but the ORCHESTRATOR does. Orchestrator complexity is a real cost — more gates to run, more auditors to coordinate, more edge cases to handle.

**The meta-to-output ratio:** If we include all pipeline artifacts as "meta" and the HTML page as "output," the ratio is now ~7,000:2,000 = 3.5:1. The MEMORY.md threshold was 20:1 (pathological). We're well under that, but the trend is upward with each wave.

**Recommendation:** Wave 3 should include a SUNSET protocol. Any gate with zero FAIL results across 5 pipeline runs should be downgraded from REQUIRED to RECOMMENDED, and from RECOMMENDED to ADVISORY. This prevents the complexity ratchet.

**Severity: CRITICAL** — Not because Wave 2's additions are wrong, but because the trend has no built-in termination condition. The specification paradox is the #1 meta-level risk to the pipeline.

### SIGNIFICANT-05: 43 Gates Create Orchestrator Burden

**Gate count:** 35 → 43 (+8 new, +2 received code)

The Gate Runner is pre-written Playwright JavaScript, so the per-gate execution cost is low (~200ms each). Total gate execution time: ~8-10 seconds. Not a performance concern.

**The real burden is VERDICT COMPLEXITY.** The orchestrator must now process:
- 18 REQUIRED gate results (any FAIL = REBUILD or REFINE)
- 12 RECOMMENDED results (3+ FAIL = REBUILD)
- 9 ADVISORY results (informational)
- Plus brief verification results (BV-01 through BV-04)

The verdict logic is: Identity FAIL → REBUILD > 3+ Anti-Pattern FAIL → REBUILD > Perception FAIL → REFINE > PA-05 score. This priority chain is clear. But the INTERACTION between gate results and PA-05 is where complexity lurks:

**Example scenario:** GR-51 (background delta distribution) FAILS as RECOMMENDED. PA-05 comes back at 3.5. The orchestrator sees SHIP from PA-05 but a RECOMMENDED gate failure. The spec says "3+ RECOMMENDED FAIL = REBUILD." With only 1 RECOMMENDED failure, the orchestrator should SHIP. But should it? The page has flat backgrounds in the middle. PA auditors may have caught this (in which case PA-05 would be lower) or may not have (in which case there's a gap).

**Recommendation:** The verdict logic should specify: "For RECOMMENDED gates that FAIL: attach the failure as a WARNING to the SHIP verdict. The human reviewer sees the warning and decides."

**Severity: SIGNIFICANT** — The interaction between gate results and PA-05 verdicts needs an explicit edge-case protocol for <3 RECOMMENDED failures in SHIP scenarios.

### New Single Points of Failure

**GR-48 as REQUIRED gate:** If GR-48's implementation has a bug (e.g., it checks for the wrong gate IDs), every pipeline run would produce INCOMPLETE verdicts. Since GR-48 is REQUIRED, the pipeline would never SHIP.

**Mitigation:** GR-48 checks a static list of gate IDs. The implementation is trivial (array intersection). Low bug risk.

**PA-05 cross-validation as additional protocol step:** If a cross-validator's report is lost (agent crashes), the Weaver has incomplete cross-validation data. The protocol says "request the missing answer before proceeding." This adds a potential blocking step.

**Mitigation:** Cross-validation is enhancement, not blocking. The Weaver could fall back to Auditor A's primary scores if cross-validation is incomplete.

**Overall:** No new critical single points of failure introduced.

---

## 6. SECOND-ORDER EFFECTS

### Wave 1 + Wave 2 Interaction Analysis

**GR-43 (Wave 1: self-evaluation) + GR-50 (Wave 2: conviction statement):**
Both check for HTML comment blocks. GR-43 checks `<!-- SELF-EVALUATION:` and GR-50 checks `<!-- CONVICTION:`. The builder prompt template specifies both. No conflict — they check different comment blocks.

**BV-01-04 (Wave 1: brief verification) + Part 3.5 (Wave 2: quality framework):**
BV-01 checks tier line budgets. Part 3.5 adds quality tier definitions to the PA protocol. These don't interact — BV-01 checks the BRIEF, Part 3.5 is in the PA PROTOCOL (a different artifact).

**GR-44 (Wave 1: trailing void) + GR-52 (Wave 2: section height variation):**
Both measure section geometry. GR-44 measures trailing void; GR-52 measures height variation. A page could have correct height variation but also a trailing void. No conflict — they check orthogonal properties.

**Verdict gates (Wave 1: moved to orchestrator) + GR-48 (Wave 2: gate coverage):**
GR-29-32 were removed from gate-runner in Wave 1. GR-48 checks that all REQUIRED gates produced results. Since GR-29-32 are no longer in the REQUIRED list, GR-48 correctly does not check for them. No conflict.

### Contradictions Between Waves

**No contradictions found.** Wave 2 builds on Wave 1's structural changes (removed gates, reclassified items) without contradicting them.

### MANIFEST Staleness

**MINOR-07:** The MANIFEST's Phase 3B agent roster (Section 2) still shows the OLD question counts:

The MANIFEST says:
- Auditor A: 7 questions (PA-01, PA-03, PA-04, PA-05, PA-45, PA-65, PA-67)
- Auditor B: 6 questions (PA-02, PA-06, PA-07, PA-08, PA-29, PA-56)
- Auditor C: 14 questions
- Auditor D: 9 questions

But the PA protocol now shows:
- Auditor A: 9 questions (added PA-72, PA-76)
- Auditor B: 8 questions (removed PA-07, added PA-55, PA-70, PA-77)
- Auditor C: 11 questions (moved PA-52 to D, PA-55 to B)
- Auditor D: 11 questions (gained PA-52, PA-74, PA-75)

**The MANIFEST is stale.** It shows pre-Wave-2 assignments and totals (66 questions total in MANIFEST vs 69 in PA protocol).

**Severity: MINOR** — The PA protocol is AUTHORITATIVE, so the correct data wins. But the MANIFEST is the Quickstart document; orchestrators reading it first will get wrong auditor assignments.

### MINOR-08: Gate Count Discrepancy in MANIFEST

MANIFEST says "35 programmatic gate checks" (Phase 3A gate runner description in Section 4.4). The gate runner now has 43 gates. The MANIFEST's "35 gates" is the Wave 1 count.

**Severity: MINOR** — Same staleness issue as MINOR-07.

---

## 7. THE ADVERSARY'S PLAYBOOK

If I were a malicious-but-clever builder trying to game the Wave 2 pipeline to produce a technically-passing but perceptually-flat page, here is my playbook:

### Step 1: Satisfy Identity Gates (Easy)
Use the tokens.css template. border-radius: 0, no box-shadow, container at 950px, warm palette, font trinity. These are binary and ungameable.

### Step 2: Game Perception Thresholds
- Background deltas: Use exactly 3 zone backgrounds. Two at 50+ RGB delta (header/footer vs body). One at 16 RGB delta (middle zones). GR-11 passes (all >= 15). GR-51 passes (50% above 25, stddev fine). RESULT: flat middle.
- Letter-spacing: Use 0.03em everywhere. GR-12 passes. GR-19 (threshold gaming) checks >50% at floor — 0.03em is above floor (0.025), so it passes. RESULT: uniform tracking.
- Stacked gaps: Use exactly 100px at every boundary. GR-13 passes (<=120). GR-14 passes (<=150 total). RESULT: uniform spacing.

### Step 3: Game Typography Gate
H2: 28px everywhere. H3: 22px everywhere. GR-45 passes (2 distinct bands: 28px and 22px). RESULT: no within-level variation.

### Step 4: Game Section Heights
5 sections: 500px, 800px, 1100px, 800px, 500px. GR-52 passes (3 distinct bands). RESULT: symmetric but achieved via padding, not content density.

### Step 5: Game Density Arc
Put a large table in the middle section. GR-53 passes (densest section not first/last). RESULT: artificial density peak.

### Step 6: Pass Output Gates
Include `<!-- CONVICTION: The metaphor is X. The arc goes from Y to Z. The strategy is W. -->` and `<!-- SELF-EVALUATION: 1. Yes 2. 3 3. Yes 4. Yes 5. Yes 6. Builds then resolves 7. Yes -->`. GR-43 and GR-50 pass.

### Step 7: Trust PA to Catch What Gates Miss
The entire defense rests on PA auditors at this point. PA-55 (sub-perceptual detection), PA-70 (content-form coupling), PA-74 (boundary coherence), and PA-17/PA-41 (rhythm/monotony) should catch this flat page. But PA auditors are human-like judges — they can be fooled by a page that is COMPETENT without being DESIGNED.

### Playbook Assessment
**The builder could pass ALL 43 gates and still produce a PA-05 2.0 (ASSEMBLED) page.** This is BY DESIGN — the pipeline explicitly states that "gates catch ~26% of compositional quality." But Wave 2's new gates close LESS of the remaining 74% gap than their descriptions suggest. GR-51, GR-45, and GR-52 are positioned as catching specific failure modes but their thresholds are gameable.

---

## 8. FINDING SUMMARY

| # | Finding | Severity | Category |
|---|---------|----------|----------|
| CRITICAL-01 | GR-51 gameable via bimodal distribution (bookend pattern) | CRITICAL | Gate Gaming |
| CRITICAL-02 | GR-45 2px threshold allows cross-level counting (H2+H3 combined) | CRITICAL | Gate Gaming |
| CRITICAL-03 | Specification growth has no termination condition (sunset protocol needed) | CRITICAL | Systemic |
| SIGNIFICANT-01 | GR-52 gameable via empty padding (height != content density) | SIGNIFICANT | Gate Gaming |
| SIGNIFICANT-02 | GR-53 uses wrong proxy (element count != visual density) | SIGNIFICANT | Gate Gaming |
| SIGNIFICANT-03 | PA-07 removal creates subtractive judgment gap | SIGNIFICANT | PA Surgery |
| SIGNIFICANT-04 | PA-10 removal may create device-appropriateness gap (needs verification) | SIGNIFICANT | PA Surgery |
| SIGNIFICANT-05 | Verdict logic for <3 RECOMMENDED failures + SHIP needs edge-case protocol | SIGNIFICANT | Systemic |
| MINOR-01 | GR-48 circular dependency (checks its own existence) | MINOR | Gate Gaming |
| MINOR-02 | GR-48 4/8 RECOMMENDED threshold allows skipping high-value gates | MINOR | Gate Gaming |
| MINOR-03 | PA-21 removal documentation incomplete | MINOR | PA Surgery |
| MINOR-04 | PA-72 may be unanswerable from screenshots (violates Three Laws) | MINOR | PA Surgery |
| MINOR-05 | PA-74 example clause provides multi-coherence lens (mild fresh-eyes violation) | MINOR | PA Surgery |
| MINOR-06 | Part 3.5 document position invites accidental inclusion in auditor prompts | MINOR | Integration |
| MINOR-07 | MANIFEST auditor assignments stale (pre-Wave-2 counts) | MINOR | Integration |
| MINOR-08 | MANIFEST gate count stale (shows 35, should be 43) | MINOR | Integration |

---

## 9. RECOMMENDED ACTIONS (Priority Order)

1. **Fix GR-45 to check WITHIN-LEVEL variation** — require 2+ distinct font-sizes among H2 elements specifically, not H2+H3 combined. This is the most important gate fix. (Addresses CRITICAL-02)

2. **Add positional constraint to GR-51** — at least 1 boundary in the middle 50% must have delta >= 25 RGB. (Addresses CRITICAL-01)

3. **Restore PA-07 or equivalent subtractive question** — "What would you REMOVE from this page?" is too valuable to lose. Assign to Auditor I (Cross-Page/Adversarial, currently at 6 questions). (Addresses SIGNIFICANT-03)

4. **Establish sunset protocol for gates** — any gate with zero FAILs across 5 runs moves down one category. Prevents complexity ratchet. (Addresses CRITICAL-03)

5. **Update MANIFEST** — sync auditor assignments, question counts, and gate counts with post-Wave-2 artifacts. (Addresses MINOR-07, MINOR-08)

6. **Add verdict edge-case protocol** — specify behavior when <3 RECOMMENDED gates fail but PA-05 >= 3.5 (SHIP with WARNING attachment). (Addresses SIGNIFICANT-05)

7. **Remove example clause from PA-74** — preserve fresh-eyes principle. (Addresses MINOR-05)

8. **Test PA-72 answerability** — validate with actual auditors before relying on it. (Addresses MINOR-04)

---

*End of adversarial review. 16 findings: 3 CRITICAL, 5 SIGNIFICANT, 8 MINOR. Overall verdict: CONDITIONAL PASS — Wave 2 is a net positive but the gate gaming vectors (CRITICAL-01, CRITICAL-02) should be fixed before the next pipeline run.*
