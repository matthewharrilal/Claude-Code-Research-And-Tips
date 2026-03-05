# Adversarial Review: Master Middle-Tier Execution Prompt

**Date:** 2026-02-16
**Author:** adversarial-reviewer (master-prompt-build team, Task #7)
**Input:** 23-MASTER-MIDDLE-TIER-EXECUTION-PROMPT.md (1,662 lines)
**Cross-references:** 18-middle-tier-checklist.md (493 lines), 22-middle-tier-file-reference-map.md (375 lines), 20-checklist-gaming-audit.md (543 lines), 20-variant-b-recount.md (630 lines), 21-mechanism-hardening.md (593 lines), 21-quick-check.md (301 lines), design-system/compositional-core/CLAUDE.md (681 lines)

---

## REVIEW METHODOLOGY

For EVERY section, I ask:
1. Can this instruction be misinterpreted?
2. Is there a gap where the builder could do the wrong thing?
3. Is there a checklist item not addressed by any instruction?
4. Does any instruction contradict another?
5. Is a known Phase D failure mode not prevented?
6. Is a gaming vulnerability (from 20-checklist-gaming-audit) not closed?

I assume the receiving instance will:
- Interpret ambiguous instructions in the WRONG way
- Take shortcuts if not explicitly prevented
- Miss implicit requirements that are not stated
- Optimize for checklist compliance over actual quality
- Default to safe, bland output if not pushed toward richness

---

## EXECUTIVE SUMMARY

The master execution prompt is **structurally sound** -- it covers all 10 needed sections, includes copy-paste-ready CSS blocks, embeds the Critical-10 items, and addresses known Phase D failure modes. However, it contains **8 CRITICAL gaps**, **9 ambiguities**, **7 contradictions**, **5 missing checklist items**, and **4 gaming vulnerabilities**.

**Overall readiness: 7.5/10. Needs TIER 1 fixes before deployment.**

**The three most dangerous issues:**

1. **Variant B category count is WRONG in 3 locations.** The prompt says "2 categories" in Quick Check item 14 and Section 5.2, but the authoritative recount (20-variant-b-recount.md) and the prompt's OWN Section 6.5 show **5 categories (100% coverage)**. This makes the "better than Variant B" comparison framework unreliable.

2. **`--color-zone-dense: #FFFFFF` is pure white -- a soul violation.** The prompt's token set contains a value that the prompt's own prohibitions forbid. This is an unresolvable contradiction.

3. **No HTML skeleton or viewport meta tag.** The builder must assemble HTML structure from fragments scattered across 5+ sections. This is error-prone and likely to produce missing skip-links, viewport tags, or incorrect element ordering.

---

## 1. CRITICAL GAPS (8 items -- MUST fix before prompt is usable)

### CG-1: Variant B Category Count is WRONG (3 locations)

**Where:** Section 5.2 Quick Check item 14 (line 962), Section 6.5 title area, multiple comparison references

**The problem:** The prompt states Variant B deployed across "2 categories" in:
- Section 5.2, Quick Check item 14: "Better than Variant B: categories... Middle deploys across MORE than 2 categories"
- Referenced in checklist D1.2: "Variant B = 2 categories (confirmed from Phase D analysis)"

But the prompt's OWN Section 6.5 says: "7 mechanisms across 5 categories (100% category coverage)." The authoritative recount (20-variant-b-recount.md) conclusively confirms: 7 mechanisms, **ALL 5 categories** covered (Spatial: 1, Hierarchy: 3, Component: 2, Depth/Emphasis: 1, Structure/Nav: 1).

**Impact:** CATASTROPHIC for evaluation. If the builder believes Variant B = 2 categories, deploying across 3+ categories trivially satisfies "better than Variant B." The ACTUAL baseline is 5 categories, meaning the comparison must be about mechanism DENSITY per category and perceptual QUALITY, not category COUNT.

**Fix:** Replace ALL instances of "Variant B = 2 categories" with "Variant B = 5 categories (7 mechanisms: S:1, H:3, C:2, D:1, N:1)." Reframe D1.2 comparison from "more categories" to "more mechanisms per category AND perceptually richer output."

### CG-2: `--color-zone-dense: #FFFFFF` is Pure White (Soul Violation)

**Where:** Section 2.1 line 176, Section 4.3 :root block line 748

**The problem:** Token `--color-zone-dense` is defined as `#FFFFFF`. Prohibition #6 (line 100) says "NEVER use pure white (#FFFFFF)." Soul check Step 9 (line 713) says "Regex scan: no `#FFFFFF`." The prompt's own :root block contains a soul violation.

A builder will either:
(a) Use `--color-zone-dense` and fail B7.5 on computed style inspection, or
(b) Notice the contradiction, hesitate, and waste time resolving it, or
(c) Avoid `#FFFFFF` entirely and lose the zone differentiation system

**Fix:** Either:
- Change `--color-zone-dense` to a near-white like `#FEFEFE` or `#FDFCFB` in BOTH the token table AND the :root block
- OR add an explicit exception: "EXCEPTION: `--color-zone-dense: #FFFFFF` is the ONLY approved context for pure white, and ONLY via the token variable (never as raw hex). Regex scans should check for raw `#FFFFFF` outside of `:root` declarations."

### CG-3: No HTML Skeleton Provided

**Where:** Missing from Section 4

**The problem:** The prompt provides copy-paste CSS (:root block, base typography, accessibility, responsive) but no HTML skeleton. A builder must assemble the HTML from scattered hints:
- Variant B structure (Section 7.1)
- Skip-link (Section 4.5)
- Font loading link (Section 2.2)
- Header/footer mechanisms (#13/#14 in Section 3.3)

**Impact:** Builder might forget skip-link, viewport meta tag, font loading link, lang attribute, or produce incorrect element nesting. Every Phase D page had inconsistent HTML structure.

**Fix:** Add a complete HTML skeleton to Section 4 (after 4.3):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title]</title>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* :root block from Section 4.3 */
    /* Base typography from Section 4.4 */
    /* Accessibility from Section 4.5 */
    /* Your component and section CSS here */
    /* Responsive from Section 4.6 */
  </style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header><!-- Mechanism #13 if deployed --></header>
  <main id="main-content">
    <div class="page-container">
      <!-- Content sections here -->
    </div>
  </main>
  <footer><!-- Mechanism #14 if deployed --></footer>
</body>
</html>
```

### CG-4: No `<meta viewport>` Tag Mentioned Anywhere

**Where:** Not in prompt

**The problem:** The prompt requires responsive testing at 768px (Section 4.6) but never provides or mentions the viewport meta tag. Without it, the 768px responsive test will fail because mobile browsers render at desktop width.

**Fix:** Include in HTML skeleton (CG-3 fix) or add standalone instruction in Section 4.6.

### CG-5: Two-Instance Pattern Not Addressed

**Where:** Absent from prompt

**The problem:** Section 0 says the receiving instance should PLAN. But the prompt never addresses:
- What format should the plan be in for a BUILDER instance to consume?
- Should the plan be a separate document or embedded?
- What decisions must be MADE vs left for the builder?

The MEMORY.md notes: "Two-Instance pattern exploits fundamental LLM property: continuation bias prevents self-revision." This is relevant: if the same instance plans AND builds, confirmation bias will shape the content to fit the planned mechanisms.

**Fix:** Add to Section 0: "The plan MUST be a self-contained markdown document that a SEPARATE builder instance can read and execute without additional context. Every decision must be MADE (not 'we might consider'). The plan includes: committed content text, selected mechanisms with CSS, pattern choice with justification, and validation plan."

### CG-6: No Output File Path Specified

**Where:** Appendix B Block 2 (line 1553)

**The problem:** Block 2 says "You MUST write the HTML file using the Write tool" but never specifies WHERE. No file path, no directory, no naming convention.

**Fix:** Add to Appendix B Block 2: "OUTPUT FILE: Write to `ephemeral/middle-tier-experiment/middle-tier-page.html`. Create the directory if it doesn't exist."

### CG-7: Callout Background Hex Values Don't Match Token Definitions

**Where:** Section 7.4 (line 1216-1221) vs Section 2.1 (lines 178-185)

**The problem:** The copy-paste callout CSS uses raw hex values that don't match the tokens:
- Section 7.4: `.callout--info { background: #F5F9FE; }` but Section 2.1: `--bg-info: #F5F8FA`
- Section 7.4: `.callout--tip { background: #F2F9F4; }` but Section 2.1: `--bg-tip: #F5FAF5`

Different hex values for the same semantic purpose. A builder who copy-pastes from Section 7.4 will fail token compliance (B8.1) because the values don't match tokens.css.

**Fix:** Update Section 7.4 to use token variables: `background: var(--bg-info)` etc. Or update the hex values to match the token definitions exactly.

### CG-8: No Explicit "PLANNING ONLY" Scope Boundary

**Where:** Section 0 (Mission Statement)

**The problem:** Section 0 says "This document is SELF-CONTAINED." But Appendix A says 7 files are "MUST-LOAD (Builder reads directly)." Section 3.9 says mechanism catalog is "MUST-READ." A builder might skip reading source files because "the prompt is self-contained."

The always-load protocol (B8.2) requires reading the actual prohibitions.md and tokens.css files, not just the prompt's summary of them.

**Fix:** Add to Section 0: "IMPORTANT: This document enables PLANNING. During BUILDING, the builder MUST still read the Tier 1 source files listed in Appendix A (prohibitions.md, tokens.css, mechanism-catalog.md). The copy-paste CSS blocks are reference aids, NOT substitutes for reading the source files."

---

## 2. AMBIGUITIES (9 items -- instructions that could be misread)

### AM-1: "8-10 mechanisms" vs "7-12 acceptable range"

**Where:** Section 0 (lines 39, 47), Section 6.1, Section 10.7, Section 4.2 Step 6

**The problem:** The prompt says "8-10 mechanisms" in the mission statement and "7-12 inclusive" in validation. A builder seeing both might think 7 is a soft failure.

**Fix:** Add explicit clarification: "7-12 is the PASS/FAIL range (B4.1). 8-10 is the NATURAL LANDING for well-executed Middle-tier pages. 7 is acceptable (lower end). 11-12 is acceptable (upper end). Below 7 or above 12 is FAIL."

### AM-2: "At least 3 rejected mechanisms" -- rejected from what pool?

**Where:** Section 4.2 Step 7 (line 683)

**The problem:** Does "rejected" mean mechanisms the builder EVALUATED and DECIDED NOT TO DEPLOY, or any mechanisms not deployed? If deploying 10, rejecting 3 of the remaining 8 is trivial.

**Fix:** Add: "Rejection rationale must be for mechanisms you EVALUATED and DECIDED NOT TO DEPLOY -- mechanisms that were PLAUSIBLE but ultimately didn't fit, not mechanisms that are obviously irrelevant (e.g., rejecting #8 Scroll Witness for a page with no navigation)."

### AM-3: "ONLY combinations appropriate at Middle-tier" (Section 3.5)

**Where:** Section 3.5 lines 498-507

**The problem:** Section 3.5 says "These are the ONLY combinations appropriate at Middle-tier" and lists 3 proven pairs. But Section 3.6 gives a VALID example (#4 + #7) that is NOT in the Section 3.5 list. Can the builder create pairs beyond the 3 listed?

**Fix:** Change "ONLY" to "PROVEN EXAMPLE" pairs. Add: "Additional pairs beyond this list are valid if they encode a shared content dimension per the Section 3.6 format. Middle-tier uses PAIRS (2 mechanisms). Ceiling uses TRIPLES (3+). Do NOT attempt triple-level combination at Middle."

### AM-4: "Deploy" means what exactly?

**Where:** Section 3.2, Section 4.2 Step 5

**The problem:** Does "deploy at least one mechanism from each category" mean:
(a) CSS exists for the mechanism, or
(b) The mechanism is perceptible (B4.5), or
(c) The mechanism has content justification (B5.1)?

**Fix:** Add: "A mechanism is 'deployed' when: (a) CSS implementing it exists in the stylesheet, (b) it is perceptible without developer tools (B4.5), AND (c) it has content-based justification (B5.1). All three conditions must be met."

### AM-5: Pattern name overlap with mechanism names (BENTO/CRESCENDO)

**Where:** Section 4.2 Step 2

**The problem:** BENTO is both a density PATTERN and mechanism #15 (Bento Grid). CRESCENDO maps conceptually to mechanism #12 (Progressive Disclosure). A builder might think selecting BENTO pattern REQUIRES mechanism #15.

**Fix:** Add: "NOTE: BENTO pattern does NOT require mechanism #15 (Bento Grid). BENTO is a spatial organization strategy implementable with any grid approach. CRESCENDO pattern does NOT require mechanism #12. Pattern and mechanism names may overlap but are different concepts."

### AM-6: "Read the FULL catalog" vs "this document is SELF-CONTAINED"

**Where:** Section 3.9 vs Section 0

**The problem:** Section 3.9 says to read the full mechanism-catalog.md file (1,011 lines). Section 0 says the document is self-contained. Section 3.3 includes all 18 mechanism summaries. Does the builder need to read BOTH?

**Fix:** Add: "Section 3.3 provides summaries for planning. During BUILD, the builder MUST read the FULL mechanism-catalog.md for complete details including compositional rules, CSS examples, and edge cases not covered in summaries."

### AM-7: Scale coverage table doesn't define scale BOUNDARIES

**Where:** Section 4.2 Step 8

**The problem:** "Page scale" = "section sequence across full page." "Component scale" = "content inside a single component." But where does one end and the other begin? Is a callout a "component"? Is a section with a callout inside "page scale"?

**Fix:** Add: "PAGE SCALE = how the overall scroll experience flows (section-to-section padding progression, background sequence). COMPONENT SCALE = how individual elements organize internally (callout label-to-body spacing, code block header-to-code spacing). A section IS page scale. A callout within that section IS component scale."

### AM-8: Content selection sequencing unclear

**Where:** Section 9 vs Section 4.2

**The problem:** Section 9 specifies WHAT content to select but not WHEN relative to mechanism selection. If the planner reads the mechanism catalog first and then selects content, they will subconsciously choose content that fits their preferred mechanisms (confirmation bias). Content should be selected BEFORE mechanism selection.

**Fix:** Add to Section 9.1: "Content selection MUST occur BEFORE reading the mechanism catalog (Section 3). Select or create content based on the requirements in A2.1-A2.10 FIRST, then read the mechanism catalog and select mechanisms that fit the COMMITTED content."

### AM-9: Appendix A file #6 line count discrepancy

**Where:** Appendix A, Tier 1 file #6

**The problem:** Both the prompt and the file reference map say SKILL.md is "~1,582 lines." MEMORY.md says "839 lines." If the skill was enriched, the current count should be verified and stated exactly.

**Fix:** Verify actual SKILL.md line count and use the exact number.

---

## 3. CONTRADICTIONS (7 items -- instructions that conflict)

### CO-1: Variant B Category Count (see CG-1)

Section 6.5 says 5/5 categories. Quick Check item 14 says 2 categories. MUST resolve.

### CO-2: `--color-zone-dense: #FFFFFF` vs Prohibition #6 (see CG-2)

Token defines #FFFFFF. Soul constraint prohibits #FFFFFF. MUST resolve.

### CO-3: "Self-contained" vs "MUST-READ source files" (see CG-8)

Section 0 says self-contained. Appendix A says must-read 7 files. MUST clarify scope.

### CO-4: Mechanism #1 uses 4/3/1 in prompt but 4/3/2/1 in CLAUDE.md

**Where:** Section 3.3 mechanism #1 vs compositional-core/CLAUDE.md line 370

**The problem:** The prompt shows a 3-level gradient (4px/3px/1px). The CLAUDE.md concrete example shows a 4-level gradient (4px/3px/2px/1px). But Prohibition #9 says "NEVER use 2px borders" except for OD-004 confidence encoding.

**Fix:** Add: "Middle-tier uses 3-level gradient (4px/3px/1px). The 4-level gradient (4/3/2/1) using 2px requires documented justification per Prohibition #9 and is a Ceiling-tier technique."

### CO-5: "ONLY" proven pairs vs broader interaction requirement

**Where:** Section 3.5 vs Section 3.6

Section 3.5 says "ONLY" 3 pairs are appropriate at Middle-tier. Section 3.6 gives a valid example pair (#4 + #7) not in the list. See AM-3.

### CO-6: Section 7.6 "include ALL 5" universal mechanisms but only covers 4 categories

**Where:** Section 7.6

The 5 most universal mechanisms (#2, #1, #7, #4, #5) span only 4 categories -- Structure/Navigation is missing. A builder following "include ALL 5 plus 3-5 more" might not include any Structure/Nav mechanism unless they separately check the per-category minimum.

**Fix:** Add: "NOTE: These 5 mechanisms cover 4 of 5 categories. You MUST also deploy at least 1 Structure/Navigation mechanism (#8, #12, #13, #14, or #18) to satisfy B3.5."

### CO-7: Anti-gravity rules (CLAUDE.md auto-loaded) vs Middle-tier exemptions

**Where:** compositional-core/CLAUDE.md anti-gravity section vs prompt Section 4.1

**The problem:** compositional-core/CLAUDE.md is auto-loaded and contains extensive anti-gravity rules (R1-R6) about phase-gated library access. These are Track 2/Ceiling rules. Middle-tier SKIPS Phases 1-3 and doesn't derive metaphors. A builder seeing the auto-loaded CLAUDE.md rules might waste time following anti-gravity procedures irrelevant to Middle.

**Fix:** Add to Section 4.1: "Middle-tier pages are EXEMPT from anti-gravity rules R1, R3, R5, R6 (Track 2/Ceiling only). Middle does not derive metaphors, so library access restrictions do not apply. The builder MAY read case studies for reference but should extract MECHANISMS, not copy IMPLEMENTATIONS."

---

## 4. MISSING CHECKLIST COVERAGE (5 items not addressed in prompt)

### MISS-01: Checklist item A1.0 (M1 status verification) lacks explicit step

**Where:** Section 6.3, Appendix B Block 4

**The problem:** A1.0 is a Critical-10 item requiring the builder to check SKILL.md and quote its current text. The prompt says "IGNORE 'sample 2-4'" (Block 4) but doesn't tell the builder to VERIFY the skill's current state. The builder might not know whether M1 has been applied.

**Fix:** Add to Section 4.2 as Step 0: "STEP 0: Verify M1 Status. Read SKILL.md mechanism selection section. Quote the current text. If it says per-category minimum, M1 is applied (no override needed). If it still says 'sample 2-4,' use the override in Appendix B Block 4."

### MISS-02: Transition requirement (Section 4.7) has no checklist enforcement

**Where:** Section 4.7 header says "3+ Required for Middle-Tier"

**The problem:** The prompt states "3+ Required" but:
- No B-section checklist item verifies transition count
- No Critical-10 item includes transitions
- Section 10.7 says "Transitions >= 3" citing "C3 enrichment" but no such item exists in the checklist

**Fix:** Either (a) add a B10 item: "B10.15: Page uses >= 3 distinct transition types between sections" or (b) downgrade "3+ required" to "3+ recommended" to match the checklist's actual enforcement.

### MISS-03: B2.5 (container priority documentation) not explicitly required as builder output

**Where:** Section 4.2 Step 4

**The problem:** B2.5 requires the builder to explicitly WRITE: "Container width 940-960px is HIGHEST priority." The prompt explains the rule but doesn't tell the builder to produce this documentation.

**Fix:** Add to Step 4: "DOCUMENT in your plan: 'Container width 940-960px is HIGHEST priority. Narrowing expressed via internal padding, not external width reduction.' This documentation is required for B2.5."

### MISS-04: No instruction on WHO performs novelty assessment (D3.1-D3.3)

**Where:** Section 10.4

**The problem:** D3.1 requires a 20px Gaussian-blurred screenshot comparison -- this requires a RENDERED page. The PLAN cannot perform this. The prompt doesn't clarify that novelty assessment happens AFTER building.

**Fix:** Add: "Novelty assessment (D3.1-D3.3) is performed AFTER the page is built and rendered. The plan should specify HOW novelty will be assessed but cannot perform the assessment itself."

### MISS-05: Appendix A omits 4 Tier 1 files from the file reference map

**Where:** Appendix A vs 22-middle-tier-file-reference-map.md

**The problem:** The file reference map lists 11 Tier 1 MUST-LOAD files. Appendix A lists only 7. Missing:
- `merged-components.css` (31KB component CSS -- builder needs for component reference)
- `case-studies/_INDEX.md` (titles + tensions)
- `design-system/compositional-core/CLAUDE.md` (phase-gated protocol)
- `design-system/CLAUDE.md` (root navigation)

The CLAUDE.md files are auto-loaded, so their omission from Appendix A is less critical. But merged-components.css provides component CSS that the builder needs.

**Fix:** Add `merged-components.css` and `usage-criteria.md` to Appendix A Tier 1 (both are already listed in the file reference map as Tier 1).

---

## 5. GAMING VULNERABILITIES (4 items)

### GV-1: PA-05c (visual hierarchy test) is self-verifiable

**Where:** Section 5.3

**The problem:** PA-05c says "Fresh agent identifies PRIMARY and SECONDARY zones from 20px Gaussian-blurred screenshot within 3 seconds." But if the BUILDER is the AUDITOR (same instance), the test has zero validity -- the builder knows where the zones are.

**Fix:** Add: "PA-05c MUST be performed by an INDEPENDENT agent with no knowledge of the page structure. If the same instance builds and audits, PA-05c requires spawning a sub-agent with only the blurred screenshot."

### GV-2: "Better than Variant B" can use process-level evidence

**Where:** Section 5.2 item 15, Section 10.2 E2.2

**The problem:** A builder can argue "better" by citing structural advantages that exist BY CONSTRUCTION: "more mechanism categories" (per-category minimum guarantees this), "has fractal table" (B6 requires this). These are PROCESS differences, not QUALITY differences.

The gaming audit (20-checklist-gaming-audit.md, Scenario 5B) proposed MOD-2: require at least 1 PERCEPTUAL observation. The prompt does NOT incorporate this.

**Fix:** Add to E2.2: "At least 1 of 2 supporting observations must be PERCEPTUAL ('zone differentiation creates visual sections Variant B lacks') not PROCEDURAL ('more mechanism categories'). Procedural differences are expected by construction."

### GV-3: B5.1 justification can be generated formulaically

**Where:** Section 4.2 Step 7

**The problem:** The prompt's own CORRECT example (line 688) is trivially gameable: "This content has code blocks so mechanism #17 fits." ANY content with code blocks satisfies this. The justification doesn't explain WHY dark-background treatment benefits THIS content's specific code blocks.

The gaming audit (Scenario 2B) proposed requiring "why THIS mechanism over alternatives from the same category."

**Fix:** Strengthen the CORRECT example: "STRONG: 'This content has 4 code blocks showing progressive API complexity, so #17 differentiates code zones from prose, reinforcing the CRESCENDO pattern.' WEAK: 'This content has code blocks so #17 fits.' Include a comparison: 'I chose #17 over #9 (Color Encoding) because syntax structure matters more than priority signaling for this code.'"

### GV-4: No density range minimum (gaming audit's proposed NEW-4 not incorporated)

**Where:** Section 4.2 Step 3 (guardrails) and Step 6

**The problem:** The gaming audit identified that padding values of 48px, 44px, 40px technically create "3 distinct padding values" but are perceptually uniform. The proposed NEW-4 (padding range >= 32px) is NOT in the prompt.

**Fix:** Add to Step 3 guardrails: "Density range: largest section padding minus smallest section padding >= 32px. Range of 48px to 40px (8px difference) is INSUFFICIENT density variation. Example: 64px shallowest, 32px densest = 32px range = PASS."

---

## 6. FAILURE MODE COVERAGE (Phase D failures)

| Phase D Failure | Prompt Coverage | Assessment |
|----------------|-----------------|------------|
| Container width violation (4/5 pages) | Step 4, Appendix B Block 3, Critical-10, 7+ mentions | EXCELLENT -- impossible to miss |
| Always-load protocol skip | Step 1, Critical-10, B8.2 | EXCELLENT -- first step in workflow |
| Prose-only content | Section 9 with 10 structural criteria | WELL COVERED |
| "Sample 2-4 mechanisms" | M1 override, Appendix B Block 4, per-category table | WELL COVERED |
| Case study template convergence | Section 6.2, Section 8.5 | PARTIALLY COVERED (see below) |
| Container width on WRONG element | Not explicitly addressed | GAP (see FM-5 below) |

### FM-5: Container width set on wrong element -- NOT ADDRESSED

**The problem:** Phase D pages violated 940-960px in different ways. Some set max-width correctly on one element but had a nested narrower container. The prompt says "No secondary containers below 940px" (B2.3 in checklist) but doesn't provide a verification procedure.

**Fix:** Add to Step 4: "VERIFICATION: After setting max-width: 960px on .page-container, inspect ALL child elements. No child should have its own max-width that narrows content below 940px. Common mistake: setting max-width on `<main>` AND `.page-container` where one overrides the other."

### FM-6: 768px testing timing -- PARTIALLY ADDRESSED

**The problem:** The prompt provides responsive CSS (Section 4.6) and mentions 768px testing in the audit protocol (Section 5.5). But it doesn't specify WHEN during the build to test at 768px. A builder completing the full page at 1440px may discover 768px issues only during final audit.

**Fix:** Add to Step 10: "Test at 768px DURING build, not just during audit. Responsive issues found during construction are easier to fix."

---

## 7. CROSS-REFERENCE VALIDATION

### Critical-10 items vs prompt coverage

| # | Critical-10 Item | Prompt Location | Status |
|---|-----------------|-----------------|--------|
| 1 | B8.2 Always-load protocol | Section 4.2 Step 1 | COVERED |
| 2 | A1.0 M1 status verified | Section 6.3, Appendix B Block 4 | PARTIALLY COVERED (missing explicit verification step -- MISS-01) |
| 3 | B1.2 Phases 1-3 skipped | Section 4.1, Step 2 | COVERED |
| 4 | B2.1 Container width 940-960px | Section 4.2 Step 4 (extensively) | COVERED |
| 5 | B2.5 Container priority documented | Section 4.2 Step 4 | COVERED but builder not told to WRITE documentation (MISS-03) |
| 6 | B3.6 All 5 mechanism categories | Section 4.2 Step 5 | COVERED |
| 7 | B4.4 Mechanism interaction | Section 3.6, Step 6 | COVERED |
| 8 | B7.1 border-radius: 0 | Section 1.1, Step 9, Appendix B Block 1 | COVERED (extensively) |
| 9 | B7.2 box-shadow: none | Section 1.1, Step 9, Appendix B Block 1 | COVERED |
| 10 | E1.1 Verdict stated | Section 10.1, 10.2, 10.3 | COVERED |

**Result:** 8/10 fully covered. A1.0 needs explicit verification step. B2.5 needs explicit documentation mandate.

### File reference map Tier 1 vs prompt Appendix A

| Ref Map File | In Prompt Appendix A? |
|-------------|----------------------|
| prohibitions.md | YES |
| tokens.css | YES |
| mechanism-catalog.md | YES |
| merged-components.css | NO (missing) |
| case-studies/_INDEX.md | NO (missing) |
| semantic-rules.md | YES |
| usage-criteria.md | YES |
| SKILL.md | YES |
| PA SKILL.md | YES |
| compositional-core/CLAUDE.md | NO (auto-loaded) |
| design-system/CLAUDE.md | NO (auto-loaded) |

**Result:** 7/11 explicitly listed. 2 auto-loaded (acceptable). 2 missing (merged-components.css, _INDEX.md).

---

## 8. RECOMMENDED FIXES (Priority-ordered)

### TIER 1: Must fix before deployment (blocks experiment validity)

| # | Issue | Fix | Effort |
|---|-------|-----|--------|
| 1 | CG-1: Variant B "2 categories" (3 locations) | Change to "5 categories"; reframe D1.2 comparison | 10 min |
| 2 | CG-2: `--color-zone-dense: #FFFFFF` contradiction | Add exception or change to near-white | 5 min |
| 3 | CG-7: Callout hex values don't match tokens | Update to use token variables | 5 min |
| 4 | CG-8: "Self-contained" vs "must-read source files" | Add planning vs building scope boundary | 5 min |
| 5 | AM-1: "8-10" vs "7-12" confusion | Add explicit natural landing vs pass range note | 5 min |

### TIER 2: Should fix before deployment (prevents common builder errors)

| # | Issue | Fix | Effort |
|---|-------|-----|--------|
| 6 | CG-3/CG-4: No HTML skeleton or viewport meta | Add complete HTML skeleton | 15 min |
| 7 | CG-6: No output file path | Add path to Appendix B Block 2 | 2 min |
| 8 | MISS-01: A1.0 M1 verification step missing | Add Step 0 to build workflow | 5 min |
| 9 | CO-7: Anti-gravity exemption for Middle | Add explicit exemption statement | 5 min |
| 10 | GV-4: No density range minimum (32px) | Add to Step 3 guardrails | 5 min |
| 11 | AM-3: "ONLY" proven pairs too restrictive | Change to "PROVEN EXAMPLE" pairs | 2 min |
| 12 | AM-4: "Deploy" definition unclear | Add 3-condition definition | 5 min |

### TIER 3: Nice-to-have (hardens quality and closes gaming surfaces)

| # | Issue | Fix | Effort |
|---|-------|-----|--------|
| 13 | GV-2: Process-level "better than Variant B" gaming | Require 1+ perceptual observation | 5 min |
| 14 | GV-1: PA-05c self-verification | Require independent agent | 5 min |
| 15 | GV-3: Formulaic B5.1 justification | Strengthen example with comparison | 10 min |
| 16 | MISS-02: Transition requirement unenforced | Add B10.15 or downgrade to "recommended" | 5 min |
| 17 | MISS-03: B2.5 documentation mandate | Tell builder to WRITE the statement | 2 min |
| 18 | CO-4: Border-weight 3-level vs 4-level | Add note about 2px prohibition | 5 min |
| 19 | CO-6: Universal mechanisms miss Structure/Nav | Add note about B3.5 requirement | 2 min |
| 20 | AM-5: Pattern/mechanism name overlap | Add clarifying note | 5 min |

---

## 9. SECTION-BY-SECTION ASSESSMENT

| Section | Lines | Critical Gaps | Ambiguities | Contradictions | Gaming | Verdict |
|---------|-------|---------------|-------------|----------------|--------|---------|
| 0: Mission | 1-83 | CG-5, CG-6, CG-8 | AM-1 | CO-3 | -- | NEEDS WORK |
| 1: Identity | 87-140 | CG-2 | -- | CO-2 | -- | FIX CG-2 |
| 2: Vocabulary | 143-268 | CG-2, CG-7 | -- | -- | -- | FIX TOKENS |
| 3: Mechanisms | 272-546 | -- | AM-3, AM-4, AM-5 | CO-5 | -- | GOOD |
| 4: Pipeline | 549-914 | CG-3, CG-4 | AM-1, AM-2, AM-6, AM-8 | -- | GV-4 | GOOD (add skeleton) |
| 5: Validation | 917-1065 | CG-1 | -- | CO-1 | GV-1, GV-2 | FIX Var B COUNT |
| 6: Context | 1068-1158 | CG-1 | -- | CO-1 | -- | FIX Var B COUNT |
| 7: Reference | 1161-1257 | CG-7 | -- | -- | -- | FIX hex values |
| 8: Anti-Patterns | 1260-1325 | -- | -- | -- | GV-3 | GOOD |
| 9: Content | 1327-1376 | -- | AM-8 | -- | -- | ADD sequencing |
| 10: Success | 1379-1661 | -- | -- | -- | GV-2 | GOOD |
| Appendix A | 1494-1525 | MISS-05 | AM-9 | -- | -- | ADD missing files |
| Appendix B | 1528-1581 | CG-6 | -- | -- | -- | ADD file path |
| Appendix C | 1584-1638 | -- | -- | -- | -- | EXCELLENT |
| Appendix D | 1640-1661 | -- | -- | -- | -- | GOOD |

---

## 10. OVERALL ASSESSMENT

### Strengths
- Container width coverage is EXEMPLARY (7+ mentions, copy-paste CSS, WRONG/CORRECT examples, priority order)
- Soul constraints are bulletproof (binary checks, regex-verifiable, Appendix B Block 1)
- Per-category mechanism selection is clear and binary with fill-in table
- Build pipeline is correctly sequenced (Steps 1-10 in dependency order)
- Token vocabulary is comprehensive (65 tokens with mutability classification)
- Anti-patterns section covers process, build, and component-level failures
- Copy-paste ready CSS blocks significantly reduce builder error
- Gaming audit recommendations (B4.4 interaction, B4.5 perceptibility, B4.1 floor raise) are incorporated
- Decision matrix (Section 10.1) provides clear action routing for all outcomes

### Weaknesses
- CG-1 (Variant B category count) makes the comparison framework unreliable
- CG-2 (#FFFFFF token) creates an unresolvable constraint conflict
- CG-3 (no HTML skeleton) forces error-prone assembly from fragments
- Several gaming audit recommendations NOT incorporated (density range minimum, perceptual comparison requirement)
- Content-mechanism ordering not enforced (confirmation bias risk via AM-8)
- "Proven pairs" section is overly restrictive (CO-5/AM-3)
- Callout CSS hex values don't match tokens (CG-7)

### Estimated Builder Compliance With Current Prompt

| Area | Compliance | Notes |
|------|-----------|-------|
| Soul constraints | ~100% | Binary, 7+ reminders, regex-verifiable |
| Container width | ~95% | Heavily emphasized, WRONG/CORRECT examples |
| Per-category minimums | ~90% | Clear table, binary checks |
| Fractal coherence | ~70% | Table format provided but easy to fill trivially |
| Content-mechanism fit | ~60% | Justification template is gameable |
| Density rhythm | ~50% | No range minimum, easily satisfies with minimal variation |
| Token compliance | ~85% | Copy-paste blocks help, but CG-7 hex mismatch creates confusion |

### Final Readiness

**Current: 7.5/10 (CONDITIONAL -- needs TIER 1 fixes)**
**After TIER 1 fixes: 8.5/10**
**After TIER 1 + TIER 2 fixes: 9/10**
**Remaining 1/10:** Irreducible gap between binary specification and subjective quality (PA-05c self-verification, D2.2 process-level evidence). Same fundamental tension the entire project grapples with.

---

**END ADVERSARIAL REVIEW**

*This review was conducted under the assumption that the receiving builder instance will interpret every ambiguity in the WORST possible way, take every shortcut not explicitly prevented, and optimize for checklist compliance over actual spatial quality. The prompt is strong overall -- the gaps identified are fixable and none require fundamental restructuring. The 5 TIER 1 fixes are all under 10 minutes each and address accuracy issues, not design issues.*
