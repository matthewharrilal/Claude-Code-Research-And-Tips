# TC Enrichment Candidates from Pipeline Surgery

**Auditor:** TC Enrichment Auditor
**Date:** 2026-02-20
**Scope:** 12 surgery files cross-referenced against TC SKILL.md (2,007 lines)
**File audited:** `~/.claude/skills/tension-composition/SKILL.md`

---

## Method

Read TC SKILL.md in full (5 chunks, all 2,007 lines). Read all 12 surgery files listed below. For each finding: identified source, what the finding says, where in TC it would apply, whether it's already present, and assigned priority (CRITICAL / IMPORTANT / NICE-TO-HAVE).

**"TC-relevant" filter:** The TC skill runs Phases 0-4. It does NOT write CSS/HTML -- that is the builder's job. Findings about builder behavior, gate-runner logic, or PA audit protocol are OUT OF SCOPE unless they change TC's output contract (what TC produces for the builder).

**Surgery files read:**
1. `04-anti-reproduction-xref.md`
2. `05-root-cause-coverage.md`
3. `07-pv2-alignment.md`
4. `08-remediation-lessons-xref.md`
5. `13-tc-skill-implications.md`
6. `15-tc-sufficiency-audit.md`
7. `17-skill-interaction-analysis.md`
8. `19-failure-mode-audit.md`
9. `20-absorption-analysis.md`
10. `21-fix-cycle-analysis.md`
11. `22-tc-enrichment-changelog.md`
12. `24-holistic-coherence-audit.md`

---

## Already Applied (from file 22)

These were added to TC SKILL.md during the current surgery session. They are NOT candidates -- they are done.

| Edit | Location | Lines Added |
|------|----------|-------------|
| Phase 0D sub-skill exception | Line 72 | +2 |
| Phase 3.5Z zone architecture | Lines 793-803 | +11 |
| Phase 4.5 sub-skill output mode | Lines 1627-1670 | +44 |

**Total already applied:** ~57 lines. Existing Phase 0-4 logic unchanged. All quality gates preserved.

---

## CRITICAL Priority (Must-Do Before Next Pipeline Run)

### C-1: Expand TC Brief with Mechanism Density + Distribution Rules

**Source:** `20-absorption-analysis.md` (lines 184-210, 267-285)
**What it says:** Mechanism density cap (<=4 per viewport) and distribution requirement (>=2 per third of page) are ONLY in the mechanism catalog -- a "consult as needed" file that builders effectively never consult. The TC brief is the builder's primary compositional input. If these rules aren't in the brief, they are invisible.
**Where in TC:** Phase 4.5, Section 4 (SELECTED MECHANISMS) -- currently lists mechanisms but gives no spatial deployment guidance.
**Already there?** NO. Phase 4.5 Section 4 says "List all selected mechanisms with their catalog categories" and per-category minimums. No density cap. No distribution requirement.
**What to add:** To Phase 4.5 Section 4, after the mechanism list:
- "Mechanism density: <=4 mechanisms per viewport. If the metaphor concentrates mechanisms, explicitly note which viewports are dense and which are sparse."
- "Mechanism distribution: >=2 mechanisms must be active in each vertical third of the page. Front-loading kills pacing; back-loading kills engagement."

**Cross-reference:** File 15 (TC sufficiency audit) also flags this as "mechanism catalog not routed to TC agent" (BLOCKING). File 19 (failure mode audit) notes the conventions brief is 546 lines and at the upper edge of builder absorption. Putting density/distribution in the TC brief (~2 lines) solves both problems.

---

### C-2: TC Brief Should Include CSS Recipe Hints (Not Just Mechanism Names)

**Source:** `20-absorption-analysis.md` (lines 221-248), `05-root-cause-coverage.md` (RC-1 playbook gap)
**What it says:** The TC brief currently lists mechanism names and metaphor rationale. The builder must then look up each mechanism in the catalog to find CSS implementation. This lookup effectively doesn't happen (absorption analysis shows "consult as needed" = fiction). The brief should include 1-line CSS recipes per mechanism.
**Where in TC:** Phase 4.5, Section 4 (SELECTED MECHANISMS) and Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS).
**Already there?** PARTIAL. Section 5 says "Specific CSS patterns the metaphor suggests at each scale" with page/section/component/character breakdowns. But Section 4 says only "1-line description of HOW it serves the metaphor" -- no CSS. The gap is that Section 4 has the mechanism list without CSS and Section 5 has CSS without mechanism names.
**What to add:** Change Section 4 instruction from "For each mechanism: 1-line description of HOW it serves the metaphor" to "For each mechanism: 1-line CSS recipe (e.g., 'Border-Weight Gradient: border-left 1px->3px->4px across zones') AND how it serves the metaphor." This bridges mechanism names to CSS in one place.

**Cross-reference:** File 05 (root cause coverage) notes RC-1 (guardrail factory / playbook gap) is ADDRESSED at the pipeline level but the TC brief is the delivery vehicle. File 08 (remediation lessons xref) identifies "CSS budget allocation guidance MISSING" -- a closely related gap.

---

### C-3: Content-Form Coupling Verification Step

**Source:** `17-skill-interaction-analysis.md` (lines 302-338), `04-anti-reproduction-xref.md` (BLOCKING-3)
**What it says:** There is no step in the TC pipeline that verifies the metaphor actually maps to this specific content rather than being a generic metaphor that could apply to anything. The PA skill can detect VISUAL EFFECTS but not COMPOSITIONAL INTENT. If TC doesn't verify content-form coupling, nobody does. Additionally, file 04 identifies "no content-type awareness" as BLOCKING -- short content or reference content guaranteed to fail gates designed for long narrative content.
**Where in TC:** Between Phase 3.5 (metaphor commitment) and Phase 3.5Z (zone architecture). Or as a sub-check within Phase 3.5.
**Already there?** PARTIAL. Phase 3.5 has the BECAUSE test ("This metaphor works BECAUSE [specific content feature] maps to [specific visual property]") and 6 binary rejection checks. But the BECAUSE test is a single sentence -- it doesn't verify that the coupling is UNIQUE to this content. A geological metaphor with "BECAUSE the content has layers" would pass the BECAUSE test but describes ANY hierarchical content.
**What to add:** A content-form coupling specificity check after the BECAUSE test:
- "Substitution test: Replace your content with a DIFFERENT topic that also has [the feature you cited]. Does the same metaphor still feel structural? If YES, your coupling is generic -- find a more specific mapping."
- Example: "Geological works BECAUSE research has layers" -- but ANY research has layers. Coupling is generic. "Geological works BECAUSE this research literally studies sedimentary processes" -- coupling is specific.

**Cross-reference:** File 04 (anti-reproduction xref) identifies this as BLOCKING-3. File 17 (skill interaction analysis) flags "content-form coupling verification gap" as BLOCKING. File 15 (TC sufficiency audit) lists it as one of 6 dimensions needing enrichment.

---

### C-4: Fix Cycle Re-Invocation Protocol

**Source:** `21-fix-cycle-analysis.md` (lines 89-156, 267-340), `13-tc-skill-implications.md` (E5)
**What it says:** When a page fails PA and enters fix cycles, the fix instructions currently reference only the conventions brief and gate results. The TC brief -- the compositional foundation -- is never mentioned. For structural fixes (not just CSS tweaks), the builder should re-read the TC brief. For deep compositional failures, TC should be re-invoked to produce an updated brief.
**Where in TC:** Phase 4.5, after the brief format specification. New sub-section: "Fix Cycle Protocol."
**Already there?** NO. Phase 4.5 ends with "Phase 4.5 complete when: TC brief written with all 5 sections, length 40-60 lines." No mention of what happens when the page built from this brief fails PA.
**What to add:** A "Fix Cycle Protocol" appendix to Phase 4.5:
- "TYPE A fixes (mechanical: spacing, color, border values): Builder handles. No TC involvement."
- "TYPE B fixes (structural: zone boundaries misplaced, mechanism missing, transition type wrong): Builder re-reads TC brief Section 2 (Zone Architecture) and Section 4 (Mechanisms) before fixing."
- "TYPE C fixes (compositional: metaphor not expressed, fundamental layout doesn't reflect intent): TC re-invocation. Re-run Phases 3.5Z through 4.5 with fix context. Output updated TC brief."
- "Re-invocation trigger: If PA scores metaphor expression < 2/4 (not structural), or if >=3 PA auditors flag 'metaphor not detectable.'"

**Cross-reference:** File 21 (fix cycle analysis) provides the full TYPE A/B/C classification. File 13 (TC skill implications) recommends fix cycle routing decision tree (E5). File 17 (skill interaction analysis) identifies TC re-invocation path as needed. File 24 (holistic coherence audit) lists this as one of the pending fixes before test run.

---

## IMPORTANT Priority (Should-Do for Pipeline Robustness)

### I-1: PA Expectation Map (Output C)

**Source:** `17-skill-interaction-analysis.md` (lines 351-398)
**What it says:** The TC brief tells the builder WHAT to build. But nobody tells the PA auditors WHAT TO LOOK FOR when auditing the built page. Auditors currently use generic PA questions. If TC produced a third output -- a PA expectation map -- the weaver could use it as a diagnostic: "TC said the metaphor should be visible as X; PA found/didn't find X." This would close the feedback loop.
**Where in TC:** Phase 4.5, as a new optional section (Section 6) or a separate output alongside the TC brief.
**Already there?** NO. Phase 4.5 specifies 5 sections in the TC brief. No PA-facing output exists.
**What to add:** Optional Section 6 to TC brief: "PA DETECTION EXPECTATIONS"
- "For each mechanism deployed: what visual evidence the PA auditor should look for at 100% zoom."
- "For the metaphor: what the page should look like from 10 feet away (squint test) and at 100% (detail test)."
- "For zone boundaries: which CSS channels shift and by how much (e.g., 'Zone 1->2: background shifts >=15 RGB, border-left appears, padding decreases by >=16px')."
- Mark as OPTIONAL -- only generated when running full /build-page pipeline with PA.

**Cross-reference:** File 17 (skill interaction analysis) provides the full detection alignment matrix (5 STRONG, 3 MODERATE/PARTIAL, 1 ABSENT mapping). File 05 (root cause coverage) notes that programmatic gates pass while perceptual audit fails -- this output would bridge that gap.

---

### I-2: Mechanism PA Detection Path Annotations

**Source:** `17-skill-interaction-analysis.md` (lines 145-190)
**What it says:** Some TC mechanisms have STRONG PA detection paths (zone backgrounds -> PA-05 question about visual rhythm). Others have WEAK or ABSENT paths (per-category minimums have NO PA question). TC should annotate which mechanisms are "PA-visible" vs "PA-invisible" so the TC agent can bias toward mechanisms that are detectable.
**Where in TC:** Phase 4.0 mechanism selection table (lines 1050-1057) or Step 4.1 (metaphor property extraction).
**Already there?** NO. The mechanism table lists categories and minimums. No PA detection metadata.
**What to add:** A column or annotation to the mechanism table:
- "PA-VISIBLE: Zone Backgrounds, Border-Weight, Typography Scale, Dense/Sparse, Width Variation, Dark Header, Footer Mirror"
- "PA-PARTIAL: 2-Zone DNA, Confidence Color, Drop Cap, Bento Grid"
- "PA-INVISIBLE: Scroll Witness, Progressive Disclosure, Spacing Compression, Code Block, Data Table"
- Guidance: "When choosing between two equally-valid mechanisms, prefer the PA-VISIBLE one. PA-invisible mechanisms contribute to richness but cannot be verified by audit."

**Cross-reference:** File 17 provides the full detection alignment matrix. File 05 (root cause coverage) notes that "programmatic verification != perceptual verification" is a key lesson.

---

### I-3: Scope-Dependent Quality Floors

**Source:** `04-anti-reproduction-xref.md` (BLOCKING-3, lines 156-198), `15-tc-sufficiency-audit.md` (dimension 1)
**What it says:** The TC pipeline applies the same quality gates (16-18 mechanisms, 5-scale fractal, multi-coherence) regardless of content scope. SHORT content (100-500 words) cannot support 16 mechanisms. SHORT pages that try will produce over-decorated, busy results. The pipeline needs scope-dependent mechanism floors.
**Where in TC:** Phase 0B (Scope Assessment, lines 53-57) and Universal Compositional Requirements (lines 82-93).
**Already there?** PARTIAL. Phase 0B has scope categories (MICRO/SHORT/STANDARD/LONG/MASSIVE) with processing guidance. But Universal Compositional Requirements apply to ALL content that passes the Addition Test, regardless of scope. SHORT content gets "Reduced pipeline. Run with 2 needs max per axis. Single metaphor" but no reduced mechanism count.
**What to add:** Scope-dependent mechanism floors in Phase 0B:
- "SHORT (100-500 words): 8-10 mechanisms, per-category minimum S:1 H:1 C:1 (D and N optional). 3-scale fractal (Page + Section + Component). Multi-coherence at >=2 channels."
- "STANDARD (500-3000 words): Full requirements as specified (16-18 mechanisms, 5-scale, >=3 channels)."
- "LONG (3000-10000 words): Full requirements per section, plus unifying coherence pass."
- Update Universal Compositional Requirements line 87 from "Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+)" to "Per-category minimums (see scope-dependent floors in Phase 0B)."

**Cross-reference:** File 04 rates this as BLOCKING-3 (content-type awareness). File 15 identifies it as one of 6 dimensions needing enrichment. File 24 (holistic coherence audit) lists scope-gating as a pending fix.

---

### I-4: Builder Absorption Summary in TC Brief

**Source:** `19-failure-mode-audit.md` (NFM-1, lines 256-290), `20-absorption-analysis.md` (lines 310-365)
**What it says:** The builder receives the TC brief + conventions brief (546 lines) + content. The conventions brief is at the upper edge of productive LLM absorption (~550 lines). The TC brief is the builder's anchor -- it should include a "Builder Quick Reference" that summarizes the 3-5 most important constraints the builder MUST NOT violate. This acts as an absorption anchor that prevents the builder from drifting.
**Where in TC:** Phase 4.5, after Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS).
**Already there?** NO. Phase 4.5 ends at Section 5 with CSS directions. The "What the builder receives" line (1668) says "The builder reads this brief FIRST, before the conventions brief and content" but doesn't include a summary/anchor.
**What to add:** Section 6 (or footer) to TC brief: "BUILDER ANCHORS (3-5 lines)"
- "The 3 things the builder MUST NOT violate, regardless of other constraints:"
- Example: "1. Container 940-960px. 2. Zone boundaries must shift >=3 CSS channels simultaneously. 3. [Metaphor-specific constraint, e.g., 'density must increase downward -- no sparse sections below dense ones']."
- These are NOT new rules -- they are the highest-leverage subset of existing rules, specific to this page.

**Cross-reference:** File 19 identifies NFM-1 (TC-Builder coherence gap) as a new failure mode. File 20 provides the absorption model showing why builder anchors matter. File 08 (remediation lessons xref) notes that "embedded perceptual checkpoints" from the remediation were key to its success.

---

### I-5: Pacing Prediction Duplication into Phase 3.5

**Source:** `13-tc-skill-implications.md` (E2, lines 198-224)
**What it says:** Pacing prediction (Step 4.2B) currently lives in Phase 4, after mechanism selection. But pacing risk is a property of the METAPHOR, not the mechanisms. A metaphor that implies uniform repeating elements (e.g., "catalog") has inherent pacing risk that should be flagged BEFORE mechanism selection, not after. In sub-skill mode, the TC agent runs Phase 4 but the pacing output may be too late to influence zone architecture (Phase 3.5Z).
**Where in TC:** Phase 3.5 (metaphor commitment) or between 3.5 and 3.5Z.
**Already there?** NO. Pacing is only at Step 4.2B (lines 1239-1278). Phase 3.5 has metaphor commitment and 6 rejection checks but no pacing risk assessment.
**What to add:** A pacing pre-check in Phase 3.5 (after rejection checks, before 3.5Z):
- "Pacing risk pre-screen: Does this metaphor imply uniform repeating elements? If YES, flag MODERATE pacing risk and plan variation strategies BEFORE zone architecture."
- This is a lightweight duplicate of 4.2B's first question, not a replacement. Full pacing assessment stays in 4.2B.

**Cross-reference:** File 15 (TC sufficiency audit) identifies "phase separability" as needing enrichment -- this is an example of a Phase 4 concern that should partially live in Phase 3.

---

### I-6: Metaphor Lock Protocol for Builder

**Source:** `13-tc-skill-implications.md` (E3, lines 226-260), `19-failure-mode-audit.md` (NFM-1)
**What it says:** The TC brief says "The builder may adapt the metaphor's expression but may NOT replace the metaphor itself" (line 1668). But there is no enforcement mechanism. If the builder finds the metaphor unworkable during CSS implementation, what happens? Currently: nothing -- the builder silently ignores the metaphor. This is the "TC-Builder coherence gap" (NFM-1).
**Where in TC:** Phase 4.5, in the "What the builder receives" section (line 1668).
**Already there?** PARTIAL. Line 1668 states the rule. But there is no escalation path ("if the builder cannot express the metaphor, what does the builder do?").
**What to add:** After line 1668, add:
- "If the builder cannot express the metaphor through CSS: the builder MUST document the specific constraint that prevents expression (not 'it doesn't work' but 'the metaphor implies radial layout but the design system only supports linear grids'). This triggers TYPE C fix cycle (see Fix Cycle Protocol above)."
- "The builder must NOT silently substitute a different organizational principle. Silent substitution is the highest-risk failure mode for compositional quality."

**Cross-reference:** File 19 identifies NFM-1 explicitly. File 13 recommends metaphor lock protocol (E3). File 21 (fix cycle analysis) provides the TYPE C classification that makes this enforceable.

---

## NICE-TO-HAVE Priority (Desirable but Not Blocking)

### N-1: Stacked Gap Threshold in Phase 4.0 Guardrails

**Source:** `04-anti-reproduction-xref.md` (BLOCKING-4, lines 200-235)
**What it says:** Individual spacing values pass S-09 (<=96px) but STACKED values at section boundaries (margin-bottom + padding-top + border) create 210-276px voids. The TC brief's zone architecture implies transition sizes, but the brief currently doesn't specify maximum TOTAL gap at boundaries.
**Where in TC:** Phase 4.0 guardrails (lines 844-920) or Phase 3.5Z zone architecture.
**Already there?** NO. Phase 4.0 has individual spacing guardrails. No stacked-gap concept. Phase 3.5Z assigns density levels but not gap sizes.
**What to add:** In Phase 3.5Z, after density assignment:
- "Maximum combined gap at any zone boundary: 120px (sum of margin + padding + border from both sides). Exceeding this creates perceptual voids."

**Cross-reference:** File 04 rates this as BLOCKING-4. File 05 (root cause coverage) mentions S-09 stacking loophole. The 120px value comes from file 04's analysis; the PV2 architecture uses 192px but file 04 flags this inconsistency.

---

### N-2: CSS Budget Allocation Concept

**Source:** `08-remediation-lessons-xref.md` (lines 178-210), `20-absorption-analysis.md` (lines 290-310)
**What it says:** The flagship spent 22% of CSS budget on imperceptible micro-typography. The remediation succeeded partly because of explicit CSS budget allocation (Phase 0 deallocation removed 216 lines of sub-perceptual CSS). TC could influence this by including a "CSS budget guidance" note in the brief.
**Where in TC:** Phase 4.5, potentially as a note in Section 5 (METAPHOR-IMPLIED CSS DIRECTIONS).
**Already there?** PARTIAL. The anti-scale model (Phase 4.0A, lines 824-842) warns against imperceptible CSS and cites the flagship failure. But this wisdom doesn't flow into the TC brief. The builder never sees it unless they read the full TC skill.
**What to add:** A 1-line note in Phase 4.5 Section 5:
- "CSS budget priority: perceptible > structural > decorative. Zero CSS lines on values invisible at 100% zoom."

---

### N-3: Component Class Name Suggestions in TC Brief

**Source:** `20-absorption-analysis.md` (lines 248-265)
**What it says:** The conventions brief lists component classes (`.reasoning`, `.checkpoint`, etc.) but the TC brief doesn't reference them. If TC mechanisms map to specific component classes, naming them in the brief reduces builder lookup burden.
**Where in TC:** Phase 4.5, Section 4 (SELECTED MECHANISMS).
**Already there?** NO.
**What to add:** Optional annotation in Section 4:
- "Where a mechanism maps to a known component class (e.g., '2-Zone DNA' -> `.reasoning`), include the class name."
- This is optional because not all mechanisms map to components and the TC agent may not have component library access during Phases 0-3.

---

### N-4: _INDEX.md in TC Agent Read List

**Source:** `13-tc-skill-implications.md` (E4, lines 262-280)
**What it says:** The TC skill references case studies but the agent read list in the build-page orchestrator doesn't include `_INDEX.md`. This means the TC agent can't scan case study titles for the divergence check (Phase 5.1).
**Where in TC:** Phase 5.1 (line 1773): "Scan `/case-studies/_INDEX.md` (titles + tension summaries only)."
**Already there?** YES in the skill text. The issue is in the ORCHESTRATOR, not the TC skill. The orchestrator doesn't route this file to the TC agent.
**What to add:** Nothing to TC SKILL.md. This is an orchestrator fix. Noted here for completeness.

---

### N-5: Vocabulary Bridge Between TC and PA Terminology

**Source:** `17-skill-interaction-analysis.md` (lines 400-445)
**What it says:** TC and PA use different vocabulary for the same concepts. TC says "zone boundary with multi-coherence"; PA says "visual rhythm and pacing." TC says "mechanism deployment"; PA says "compositional richness." A vocabulary bridge would help the weaver synthesize TC brief against PA results.
**Where in TC:** Phase 4.5, as an appendix or annotation.
**Already there?** NO.
**What to add:** This is more of a weaver/orchestrator concern than a TC skill concern. If added, it would be a small glossary:
- "zone boundary = PA's 'section transition'; multi-coherence = PA's 'visual channel shifts'; mechanism = PA's 'compositional technique'"
- Low value in TC SKILL.md itself. Higher value in orchestrator prompt or weaver context.

---

### N-6: Sunset Protocol for TC Rules

**Source:** `04-anti-reproduction-xref.md` (lines 310-345)
**What it says:** Rules only accumulate, never retire. The TC skill is now 2,007 lines. Every enrichment adds lines. There is no mechanism to remove obsolete guidance.
**Where in TC:** Meta-level skill maintenance, not a pipeline phase.
**Already there?** NO.
**What to add:** This is a process concern, not a TC content concern. A sunset protocol would be: "After 3 pipeline runs where a rule is never triggered, flag it for review." Not appropriate for the skill file itself -- belongs in a maintenance protocol document.

---

## Summary Table

| ID | Finding | Source(s) | Priority | Already There? | Lines to Add |
|----|---------|-----------|----------|----------------|-------------|
| C-1 | Mechanism density + distribution in TC brief | 20, 15, 19 | CRITICAL | NO | ~4 |
| C-2 | CSS recipe hints per mechanism in brief | 20, 05, 08 | CRITICAL | PARTIAL | ~3 (edit existing) |
| C-3 | Content-form coupling specificity check | 17, 04, 15 | CRITICAL | PARTIAL | ~6 |
| C-4 | Fix cycle re-invocation protocol | 21, 13, 17, 24 | CRITICAL | NO | ~15 |
| I-1 | PA expectation map (Output C) | 17, 05 | IMPORTANT | NO | ~10 |
| I-2 | Mechanism PA detection annotations | 17, 05 | IMPORTANT | NO | ~8 |
| I-3 | Scope-dependent quality floors | 04, 15, 24 | IMPORTANT | PARTIAL | ~8 |
| I-4 | Builder absorption anchors in brief | 19, 20, 08 | IMPORTANT | NO | ~5 |
| I-5 | Pacing pre-check in Phase 3.5 | 13, 15 | IMPORTANT | NO | ~4 |
| I-6 | Metaphor lock escalation path | 13, 19, 21 | IMPORTANT | PARTIAL | ~5 |
| N-1 | Stacked gap threshold | 04, 05 | NICE-TO-HAVE | NO | ~2 |
| N-2 | CSS budget allocation note in brief | 08, 20 | NICE-TO-HAVE | PARTIAL | ~2 |
| N-3 | Component class names in brief | 20 | NICE-TO-HAVE | NO | ~3 |
| N-4 | _INDEX.md routing | 13 | NICE-TO-HAVE | N/A (orchestrator) | 0 |
| N-5 | TC-PA vocabulary bridge | 17 | NICE-TO-HAVE | NO | ~4 |
| N-6 | Sunset protocol | 04 | NICE-TO-HAVE | NO | 0 (process) |

**Totals:**
- CRITICAL: 4 findings, ~28 lines to add/edit
- IMPORTANT: 6 findings, ~40 lines to add/edit
- NICE-TO-HAVE: 6 findings, ~11 lines to add (+ 2 process items)
- **Grand total: ~79 lines of TC SKILL.md changes**

---

## Implementation Notes

1. **The TC brief is the highest-leverage edit target.** 8 of 16 findings (C-1, C-2, C-4, I-1, I-2, I-4, N-2, N-3) are about what TC produces in Phase 4.5. The brief is currently ~44 lines of specification. These edits would expand it to ~70-80 lines but would dramatically increase builder success rate by reducing lookup burden.

2. **Content-form coupling (C-3) is the deepest conceptual addition.** It changes how Phase 3.5 works, not just what it outputs. The substitution test is a new cognitive step for the TC agent.

3. **Fix cycle protocol (C-4) is the most cross-referenced finding.** 4 surgery files independently identify this gap. This suggests it's a genuine blind spot, not an edge case.

4. **Scope-dependent floors (I-3) interact with Universal Compositional Requirements.** Implementing I-3 requires editing the UCR section (lines 82-93), not just adding new lines. This is the riskiest edit because UCR is a high-traffic section.

5. **N-4, N-5, N-6 are NOT TC SKILL.md changes.** They are orchestrator/process changes that surfaced during TC-focused analysis. They should be tracked separately.

6. **Total skill size impact:** 2,007 current lines + ~79 new lines = ~2,086 lines. This stays within reasonable skill file size. The 57 lines already added (file 22) are already counted in the 2,007.
