# Enrichment Extraction: All 13 Compliance Audits

**Extractor:** extractor-3
**Date:** 2026-02-23
**Source:** 13 compliance audit files in `analysis/compliance/`
**Method:** Every compliance gap = a potential enrichment. Each entry includes the source audit, compliance %, exact gap description, root cause, and proposed artifact change.

---

## AUDIT SUMMARY TABLE

| Audit File | Compliance % | TOP Gap Count | CRITICAL Gaps |
|------------|-------------|---------------|---------------|
| audit-builder-recipe.md | 82% (86.7% with partial credit) | 10 | RGB deltas, cold purple, zero dramatic bgs |
| audit-gate-runner.md | 68% (13/19 compliant) | 10 | Verdict logic error, gate renumbering, binary violation |
| audit-identity-perception.md | 78.8% (94.2% with partial) | 5 | BG deltas, density stacking, cold colors, missing p max-width |
| audit-information-flow.md | ~85% aggregate | 5 | Brief-to-HTML junction at 78%, BG color deviation, D-07 partial |
| audit-manifest.md | 70.6% (24/34) | 3 FAIL + 6 PARTIAL | Warm palette violation, missing weaver output B, gate coverage |
| audit-orchestrator.md | 87% (47/54 determinable) | 8 | Content map size, brief size, verdict logic, builder self-eval |
| audit-pa-protocol.md | 94/100 | 6 | Missing fix classification, missing emotional arc, PA-67 ambiguity |
| audit-pipeline-fidelity.md | 86% weighted | 12 | Conviction stmt file, weaver output B, verdict override, gate coverage |
| audit-routing.md | 71.4% (90.5% with partial) | 4 NO + 8 PARTIAL | Section heights absent, transition weights absent, 73-line cap exceeded |
| audit-skill.md | 7/10 sufficiency | 10 gaps | File-writing mandate, HTTP serving, TeamCreate, output naming |
| audit-tc-brief-template.md | 83.7% (41/49) | 3 CRITICAL | Tier 4 line budget (25 vs 40), content map appendix compressed, PT-06 |
| audit-value-tables.md | 86.9% effective | ~10 | Zone padding compression, heading size flattening, bg >=25 weak |
| audit-worked-examples.md | 12/12 patterns followed | 6 missing items | No brief example, no counter-examples, no Phase 2 example |

---

## ENRICHMENT CATALOG

### CATEGORY A: BACKGROUND COLOR / RGB DELTA (8 enrichments)

Flagged by: audit-builder-recipe, audit-identity-perception, audit-information-flow, audit-value-tables, audit-gate-runner

This is the DOMINANT failure mode. Every audit that touches visual quality flags it.

---

**A-01: Lock zone background hex values as NON-NEGOTIABLE in execution brief**

- **Source:** audit-information-flow.md (Junction 3 loss), audit-builder-recipe.md (items 6-9)
- **Gap:** Brief specified Z3 as `#F5EFE5` but builder implemented `#FFF2E0`. Brief specified Z4 as `#FAF5ED` but builder implemented `#F0EBE5`. The resulting deltas (11 and 8) violated the >=15 threshold.
- **Root cause:** Zone background colors were in Tier 3 (compositional, 80% creative authority). Builder exercised creative authority to choose different colors.
- **Proposed change:** In `artifact-tc-brief-template.md`, move zone background hex values from Tier 3 to Tier 2 (perception physics, non-negotiable). Add to template: "Zone background colors are LOCKED. These exact hex values produce the specified RGB deltas. Do not substitute."
- **Artifact:** `artifact-tc-brief-template.md` (Tier 2 section)
- **Impact:** Prevents the single highest-impact information flow loss (Junction 3, 78% propagation)

---

**A-02: Add pre-build verification gate for zone background colors**

- **Source:** audit-information-flow.md (enrichment recommendation #2)
- **Gap:** No mechanism exists to verify that the builder's `:root` custom property values match the brief's specified values BEFORE 1700 lines of CSS are written.
- **Root cause:** Gates only run post-build. A color mismatch discovered post-build wastes an entire build pass.
- **Proposed change:** In `artifact-gate-runner.md`, add GR-43 (or equivalent): "Pre-build `:root` verification gate. After builder writes `:root` block, before Zone 2 construction: orchestrator reads `:root` and verifies all `--refinery-*` values match execution brief hex values. FAIL = immediate correction before continuing."
- **Artifact:** `artifact-gate-runner.md` (new gate), `artifact-orchestrator.md` (Phase 2 sequence)
- **Impact:** Catches the Z3/Z4 deviation at ~50 CSS lines, not 1700

---

**A-03: Raise COMPOSED-mode background delta to >=20 RGB floor with >=25 at 3+ boundaries**

- **Source:** audit-builder-recipe.md (items 7-9), audit-value-tables.md (section 1c)
- **Gap:** Recipe specifies 20 RGB floor for adjacent zones but 3 of 5 boundaries failed it. Recipe asks for 25+ at 3+ boundaries but only 1 boundary achieved it. Recipe asks for 50+ dramatic at 1-2 boundaries but zero boundaries reached it.
- **Root cause:** The 15 RGB floor is too low for perceptual distinctness. The builder hit 15-18 at multiple boundaries, which is technically compliant with the identity-perception artifact's floor but fails the recipe's compositional targets.
- **Proposed change:** In `artifact-identity-perception.md`, add COMPOSED-mode calibration: "For COMPOSED mode pages: minimum 20 RGB at ALL adjacent zone boundaries. At least 3 boundaries at >=25 RGB. At least 1 boundary at >=40 RGB. These are PERCEPTION THRESHOLDS, not creative guidelines." In `artifact-builder-recipe.md`, update Step 2.1 to use these as the floor.
- **Artifact:** `artifact-identity-perception.md` (PT-01 section), `artifact-builder-recipe.md` (Step 2.1)
- **Impact:** Eliminates the "compressed delta band" pattern (all deltas between 15-27)

---

**A-04: Add pre-computed COMPOSED-mode color palette to value tables**

- **Source:** audit-value-tables.md (section 1b: only 5 of 20 pairs used)
- **Gap:** The value tables provide 20 pre-computed color pairs, but the builder only used 5 from the table and introduced 2 new colors not in any pair (`#FFF2E0`, `#F0EBE5`). The new colors produced sub-threshold deltas.
- **Root cause:** The value table pairs are reference material ("80% creative authority") and the builder chose to create new colors. The new colors were warm but too close to neighbors.
- **Proposed change:** In `artifact-value-tables.md`, add a "COMPOSED-Mode Locked Palette" section with 3-4 pre-validated 6-zone progressions that guarantee >=20 RGB at all boundaries and >=25 at 3+ boundaries. Mark these as "If you use a COMPOSED-mode progression from this table, all boundary delta thresholds are pre-satisfied."
- **Artifact:** `artifact-value-tables.md` (new section)
- **Impact:** Gives the builder a safe path that guarantees delta compliance

---

**A-05: Fix gate runner to exclude non-rendered elements from color scanning**

- **Source:** audit-gate-runner.md (Discrepancy #1, #3), audit-identity-perception.md (SC-04)
- **Gap:** GR-05 (warm palette) uses `document.querySelectorAll('*')` which includes HTML, HEAD, META, TITLE, SCRIPT, STYLE, LINK, BR. These inherit browser default colors (pure black, times font). This causes 18 false positive "pure black" violations and 9 false positive font violations.
- **Root cause:** The gate runner JS code does not filter non-rendered elements.
- **Proposed change:** In `artifact-gate-runner.md`, add element filter to ALL element-scanning gates (GR-01 through GR-10): `const SKIP_TAGS = new Set(['HTML','HEAD','META','TITLE','SCRIPT','STYLE','LINK','BR','NOSCRIPT']); elements = [...elements].filter(el => !SKIP_TAGS.has(el.tagName));`
- **Artifact:** `artifact-gate-runner.md` (GR-01 through GR-10 JS code blocks)
- **Impact:** Eliminates false positives that currently force PASS* (asterisk) verdicts, which violate the binary gate principle

---

**A-06: Investigate GR-05 cold color measurement anomaly**

- **Source:** audit-information-flow.md (Junction 4, finding #5), audit-skill.md (section 2.2)
- **Gap:** CSS defines `--accent-blue: #A07D50` (warm brown, R=160>G=125>B=80) but gate runner measured `rgb(74,144,217)` (cold blue) on `.role-card__level` elements. No `rgb(74,144,217)` appears anywhere in the HTML source.
- **Root cause:** Unknown. Either (a) browser default link colors leaking onto elements without explicit color, (b) a different version of HTML was tested, or (c) CSS specificity override not visible in the main style block.
- **Proposed change:** In `artifact-gate-runner.md`, add diagnostic output to GR-05 that logs the COMPUTED style chain for any cold-color violation: `{ element: el.tagName + '.' + el.className, computedColor: getComputedStyle(el).color, cssText: el.style.cssText, inheritedFrom: '...' }`. This will trace the source of the anomalous cold blue.
- **Artifact:** `artifact-gate-runner.md` (GR-05 JS code)
- **Impact:** Resolves a measurement trust issue that undermines gate runner credibility

---

**A-07: Prohibit cold purple #7C3AED by hex value in builder recipe**

- **Source:** audit-builder-recipe.md (item 11, Appendix C)
- **Gap:** `--accent-purple: #7C3AED` is used in `.callout--challenge` despite being EXACTLY the hex value named as prohibited in the recipe (line 96: "No cold purples (#7C3AED)").
- **Root cause:** The builder included the token from the design system token set despite the recipe's explicit prohibition.
- **Proposed change:** In `artifact-builder-recipe.md`, strengthen the prohibition with a replacement directive: "PROHIBITED: #7C3AED (cold purple). USE INSTEAD: #7D5B8A (warm plum). If you need a purple accent, the warm alternative is pre-validated." Also add to `artifact-gate-runner.md` GR-05: specific hex check for `#7C3AED` as a named-value violation.
- **Artifact:** `artifact-builder-recipe.md` (Step 2.1), `artifact-gate-runner.md` (GR-05)
- **Impact:** Eliminates the identity violation that technically triggers REBUILD

---

**A-08: Add background delta as gate runner diagnostic output**

- **Source:** audit-gate-runner.md (GR-11), audit-value-tables.md (section 1c)
- **Gap:** Gate results show computed Z3 as `rgb(245,239,229)` = `#F5EFE5` but HTML CSS declares `--refinery-tank: #FFF2E0` = `rgb(255,242,224)`. The COMPUTED value differs from the DECLARED value.
- **Root cause:** CSS specificity, inheritance, or child element measurement may produce different computed values than the `:root` declaration.
- **Proposed change:** In `artifact-gate-runner.md` GR-11, add diagnostic that reports BOTH the `:root` declared value AND the computed background-color of the zone's first child `<section>` element. If they differ, flag as WARNING: "Zone N: declared #XXXXXX, computed #YYYYYY -- CSS override detected."
- **Artifact:** `artifact-gate-runner.md` (GR-11 JS code)
- **Impact:** Catches CSS specificity overrides that silently change zone backgrounds

---

### CATEGORY B: GATE RUNNER STRUCTURAL ISSUES (7 enrichments)

Flagged by: audit-gate-runner, audit-manifest, audit-pipeline-fidelity

---

**B-01: Canonicalize gate IDs — runs MUST use artifact gate IDs**

- **Source:** audit-gate-runner.md (Discrepancy #4)
- **Gap:** The fresh run renumbered and decomposed gates. Artifact's GR-07 (No Pure B/W) was subsumed into GR-05. Artifact's GR-10 (Cross-Page DNA) was decomposed into 3 separate gates (Header DNA, Typography, Accessibility). Gate-results used different IDs than the artifact.
- **Root cause:** The gate runner code was apparently re-implemented rather than copied verbatim from the artifact.
- **Proposed change:** In `artifact-gate-runner.md`, add enforcement section: "GATE ID CANONICALIZATION: The gate-results output MUST use the gate IDs defined in this artifact (GR-01 through GR-42). Gate runner implementations that rename, merge, or decompose gates are NON-COMPLIANT. Copy the JS code blocks verbatim."
- **Artifact:** `artifact-gate-runner.md` (new Section 0)
- **Impact:** Restores traceability between gate definitions and results

---

**B-02: Fix verdict logic — identity FAIL = REBUILD unless explicitly overridden**

- **Source:** audit-gate-runner.md (CRITICAL Discrepancy #8), audit-manifest.md (Critical Observation #4), audit-pipeline-fidelity.md (Section 7), audit-orchestrator.md (Section 7)
- **Gap:** Gate-results say "REFINE" but artifact says identity FAIL = REBUILD. The actual verdict says "SHIP WITH FIXES." GR-05 (identity) FAILED, so per the artifact's verdict logic (L63-67), the verdict should be REBUILD, not REFINE or SHIP WITH FIXES.
- **Root cause:** The weaver exercised judgment that GR-05 is a mechanical fix (one color replacement), not a fundamental soul violation. The artifact provides no exception mechanism for this judgment.
- **Proposed change:** In `artifact-gate-runner.md`, add verdict override mechanism: "Identity gate FAIL default = REBUILD. Override to REFINE permitted ONLY IF: (1) the failure is a single-value mechanical fix, (2) the weaver documents the override justification, (3) the fix is included in the top-2 priority items. Override must be labeled 'VERDICT OVERRIDE: [gate ID] from REBUILD to REFINE because [justification]'." Also add "SHIP WITH FIXES" as a formal verdict category in `MANIFEST.md`.
- **Artifact:** `artifact-gate-runner.md` (verdict section), `MANIFEST.md` (verdict vocabulary)
- **Impact:** Preserves binary verdict discipline while allowing documented exceptions

---

**B-03: Strengthen GR-09 (Border Weight Hierarchy) JS implementation**

- **Source:** audit-gate-runner.md (Discrepancy #5)
- **Gap:** The artifact text (L145-149) says "Border weights must follow hierarchy: 4px = primary, 3px = secondary, 1px = tertiary." But the JS code (L1015-1023) only checks `hasHierarchy = weightValues.length >= 2`, meaning ANY 2+ distinct weights pass. A page with 7px and 2px borders would pass.
- **Root cause:** The JS implementation is weaker than the specification text.
- **Proposed change:** In `artifact-gate-runner.md` GR-09 JS code, replace the weak check with: `const expectedWeights = [4, 3, 1]; const actualWeights = [...new Set(borderWeights)].sort((a,b) => b-a); const hasHierarchy = expectedWeights.every((w, i) => actualWeights.some(aw => Math.abs(aw - w) < 0.5));` This checks that all three expected weights (within 0.5px tolerance for sub-pixel rendering) are present.
- **Artifact:** `artifact-gate-runner.md` (GR-09 JS code block)
- **Impact:** Gate actually verifies the 4/3/1 hierarchy instead of just "2+ distinct weights"

---

**B-04: Add structural transition element handling to GR-14 (Visual Gap)**

- **Source:** audit-gate-runner.md (Discrepancy #6), audit-identity-perception.md (PT-03)
- **Gap:** GR-14 reports FAIL at 318px visual gap between Z5 and Z6 due to a dark inversion block (D-04 second-half moment). The artifact has no exception mechanism for intentional structural elements.
- **Root cause:** The gate is binary (PASS/FAIL at 150px) and cannot distinguish between accidental whitespace voids and designed compositional transition elements.
- **Proposed change:** In `artifact-gate-runner.md` GR-14, add structural element detection: "Before measuring zone-to-zone gap, identify any element between zone sections with `background-color` that differs from BOTH adjacent zones by >=100 RGB delta. If found, classify as 'structural transition element' and measure the gap as zone_N_bottom to transition_element_top + transition_element_bottom to zone_N+1_top. Each sub-gap must be <=150px. Report the structural element as a finding, not a failure."
- **Artifact:** `artifact-gate-runner.md` (GR-14 JS code)
- **Impact:** Dark inversion blocks (D-04) no longer trigger false FAIL

---

**B-05: Add GR-08 (No Decorative Elements) to executable code**

- **Source:** audit-gate-runner.md (Section 2, gate GR-08 completely absent)
- **Gap:** GR-08 is defined in the specification text but has no corresponding JS code block. It was completely skipped in the fresh run.
- **Root cause:** The gate was specified but never implemented in the executable code section.
- **Proposed change:** In `artifact-gate-runner.md`, add JS code for GR-08: Check for elements with `background-image` containing decorative patterns, `content: ''` pseudo-elements with visual styling, `border-image` properties, and `clip-path` decorative shapes. PASS if zero decorative elements found.
- **Artifact:** `artifact-gate-runner.md` (new GR-08 JS code block)
- **Impact:** Closes a gate coverage gap (was 18/42, should be 19/42)

---

**B-06: Add 768px responsive gate re-run**

- **Source:** audit-gate-runner.md (Section 5, Discrepancy #10)
- **Gap:** The artifact specifies "Responsive gates re-run at 768px" (L44). Screenshots exist at 768px but no gate results at that viewport were reported.
- **Root cause:** The gate runner apparently only ran at 1440px. The 768px re-run was skipped or not reported.
- **Proposed change:** In `artifact-gate-runner.md`, add explicit instruction in the execution section: "After running all gates at 1440px, SET viewport to 768px and re-run: GR-03 (container), GR-11 (bg delta), GR-13 (stacked gap), GR-14 (visual gap), GR-15 (single margin). Report as 'GR-XX@768' in results." Also in `artifact-orchestrator.md`: "Gate runner runs at BOTH 1440px and 768px. Report both."
- **Artifact:** `artifact-gate-runner.md` (execution section), `artifact-orchestrator.md` (Phase 3A)
- **Impact:** Catches responsive layout issues programmatically

---

**B-07: Resolve conflicting gate result files**

- **Source:** audit-gate-runner.md (Section 6, CRITICAL)
- **Gap:** Two gate result files exist with different outcomes: `gate-results.md` (GR-05 FAIL, Z3=rgb(245,239,229)) and `_gate-results.md` (SC-04 PASS, Z3=rgb(255,255,255)). Different naming schemes (GR vs SC/PT), different gate outcomes, different measured colors.
- **Root cause:** Two different pipeline runs produced gate results in different formats, both in the output directory.
- **Proposed change:** In `MANIFEST.md`, add output file naming convention: "Gate results file MUST be named `gate-results.md` (no prefix). If multiple runs exist, archive previous as `gate-results-YYYYMMDD-HHMM.md`. Only one `gate-results.md` may exist at verdict time." In `artifact-orchestrator.md`: "Before writing gate-results.md, delete or rename any existing gate-results file."
- **Artifact:** `MANIFEST.md` (output naming), `artifact-orchestrator.md` (Phase 3A)
- **Impact:** Eliminates trust-undermining conflicting results

---

### CATEGORY C: VERDICT AND DECISION TREE (4 enrichments)

Flagged by: audit-pa-protocol, audit-manifest, audit-orchestrator, audit-pipeline-fidelity

---

**C-01: Add "SHIP WITH FIXES" as formal verdict category**

- **Source:** audit-pa-protocol.md (Gap G6), audit-pipeline-fidelity.md (D-07), audit-orchestrator.md (Section 7)
- **Gap:** Protocol defines only SHIP / REFINE / REBUILD. The actual verdict was "SHIP WITH FIXES" which is not a defined category. Multiple auditors flagged this as a deviation.
- **Root cause:** PA-05 3/4 falls in the REFINE range (2.5-3.5), but all fixes are mechanical (CSS value changes). A full REFINE cycle (different Opus builder, re-reads conviction) is overkill.
- **Proposed change:** In `artifact-pa-protocol.md` (Section 10.1) and `MANIFEST.md`, add: "SHIP WITH FIXES: PA-05 >= 2.5/4 AND all BLOCKING issues are MECHANICAL (CSS value wrong, not structural or compositional). Builder fixes directly with specific CSS instructions. Maximum 3 BLOCKING items. If any BLOCKING is STRUCTURAL or COMPOSITIONAL, verdict = REFINE."
- **Artifact:** `artifact-pa-protocol.md` (Section 10.1), `MANIFEST.md` (verdict vocabulary)
- **Impact:** Formalizes a pragmatic verdict category that was already being used

---

**C-02: Add MECHANICAL / STRUCTURAL / COMPOSITIONAL fix classification to weaver**

- **Source:** audit-pa-protocol.md (Deviation D2, Gap G4)
- **Gap:** Protocol requires fixes classified as MECHANICAL (CSS value wrong), STRUCTURAL (zone organization), COMPOSITIONAL (metaphor not expressed). Verdict uses severity instead (BLOCKING/SIGNIFICANT/MODERATE/MINOR). These are orthogonal dimensions.
- **Root cause:** Weaver prompt does not explicitly require both classification systems.
- **Proposed change:** In `artifact-pa-protocol.md` (Section 4.5, Weaver prompt), add: "Each fix MUST include BOTH severity (BLOCKING/SIGNIFICANT/MODERATE/MINOR) AND type (MECHANICAL/STRUCTURAL/COMPOSITIONAL). Example: 'B1 [BLOCKING] [MECHANICAL]: Trailing whitespace void — add `html { background: var(--color-text) }` after line 114.'"
- **Artifact:** `artifact-pa-protocol.md` (Weaver section)
- **Impact:** Tells the fix builder WHAT KIND of work each fix requires

---

**C-03: Add emotional arc 4-register synthesis to weaver output**

- **Source:** audit-pa-protocol.md (Deviation D3, Gap G5)
- **Gap:** Weaver did not produce the emotional arc assessment using the 4-register framework (SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE). This is specified in protocol Part 6.
- **Root cause:** Weaver prompt does not include an explicit emotional arc section template.
- **Proposed change:** In `artifact-pa-protocol.md` (Weaver prompt template), add section: "## EMOTIONAL ARC ASSESSMENT\nSynthesize from PA-35, PA-36, PA-13, PA-45, PA-05 DESIGNED, PA-47:\n- SURPRISE (1-2 moments in second half): [evidence]\n- DELIGHT (distributed refinements): [evidence]\n- AUTHORITY (throughout): [evidence]\n- EARNED CLOSURE (final viewports): [evidence]\nArc verdict: {COMPLETE / PARTIAL / ABSENT}"
- **Artifact:** `artifact-pa-protocol.md` (Weaver section)
- **Impact:** Ensures compositional quality is assessed, not just technical compliance

---

**C-04: Add weaver Output B (artistic impression) enforcement**

- **Source:** audit-manifest.md (FAIL item #2), audit-orchestrator.md (Section 7), audit-pipeline-fidelity.md (D-06)
- **Gap:** MANIFEST specifies TWO weaver outputs: (a) diagnostic verdict for orchestrator, (b) artistic impression for potential REFINE/REBUILD builder. Only the diagnostic was produced.
- **Root cause:** Weaver produced only one output. Since verdict was "SHIP WITH FIXES" (not REFINE/REBUILD), artistic impression seemed unnecessary.
- **Proposed change:** In `artifact-pa-protocol.md` (Weaver prompt) and `MANIFEST.md`, add: "The Weaver ALWAYS produces TWO labeled sections: '## DIAGNOSTIC VERDICT' and '## ARTISTIC IMPRESSION'. The artistic impression uses generative language (not diagnostic) describing the page's emotional arc, strongest design moments, and what a future builder should PRESERVE. Even for SHIP verdicts, this documents what makes the page work."
- **Artifact:** `artifact-pa-protocol.md` (Weaver section), `MANIFEST.md` (Step 10)
- **Impact:** Provides non-diagnostic guidance for fix/rebuild builders

---

### CATEGORY D: BUILDER RECIPE GAPS (6 enrichments)

Flagged by: audit-builder-recipe, audit-tc-brief-template, audit-information-flow

---

**D-01: Add print styling to D-07 (Edge Intentionality) as REQUIRED technique**

- **Source:** audit-builder-recipe.md (item 46, TOP 10 #4)
- **Gap:** D-07 explicitly lists print-specific styling as a technique. Zero `@media print` rules in the output.
- **Root cause:** Print styling is listed among 5 D-07 techniques but has no specific CSS guidance in the brief or recipe.
- **Proposed change:** In `artifact-builder-recipe.md` (D-07 section), add: "REQUIRED: @media print block (minimum 5 rules): hide navigation (.toc, skip-link), remove backgrounds, set text to black, ensure readable font size (12pt+), page-break-after on zone boundaries."
- **Artifact:** `artifact-builder-recipe.md` (D-07 section)
- **Impact:** Closes a D-07 technique gap (was 2.5/5 deployed)

---

**D-02: Add zone-specific ::selection colors to D-07**

- **Source:** audit-builder-recipe.md (item 46, TOP 10 #5)
- **Gap:** Brief specified "warm red in Z1-Z2, cooler teal in Z5-Z6" for ::selection. Output has red everywhere (global + Z6 both red). No zone variation.
- **Root cause:** ::selection is mentioned in D-07 but without specific CSS values per zone in the brief.
- **Proposed change:** In `artifact-tc-brief-template.md` (D-07 template section), add specific CSS: "Zone-specific ::selection: `.zone-intake ::selection, .zone-floor ::selection { background: #E83025; color: #FEF9F5; }` and `.zone-line ::selection, .zone-dispatch ::selection { background: #5B8A9B; color: #FEF9F5; }`"
- **Artifact:** `artifact-tc-brief-template.md` (D-07 section), `artifact-builder-recipe.md` (D-07)
- **Impact:** Adds a micro-refinement that demonstrates per-zone awareness

---

**D-03: Consolidate D-07 into fewer, larger instructions**

- **Source:** audit-information-flow.md (Junction 3, enrichment #3)
- **Gap:** D-07 has the lowest propagation rate (60%) because it contains 5 micro-refinements. Partial implementation is easy.
- **Root cause:** D-07 specifies hover states + tabular-nums + ::selection + print styling + first/last child — too many small items.
- **Proposed change:** In `artifact-builder-recipe.md` (D-07 section), restructure from 5 micro-items to 2 macro-items: "(1) RESPONSIVE REFINEMENTS: @media print (5 rules) + @media (hover: hover) states on interactive elements + first/last-child edge treatments. (2) PERCEPTION POLISH: tabular-nums on all numeric content + zone-specific ::selection colors." Each macro-item gets specific CSS examples.
- **Artifact:** `artifact-builder-recipe.md` (D-07)
- **Impact:** Increases D-07 propagation from 60% toward 85%+ by reducing item count

---

**D-04: Expand Tier 4 to 40-line budget — the template's own critical warning was ignored**

- **Source:** audit-tc-brief-template.md (CRITICAL Finding #1)
- **Gap:** Template explicitly warns (line 118): "Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics." The execution brief reproduced this EXACT failure at ~25 lines.
- **Root cause:** The brief assembler did not heed the template's meta-instruction to expand technique density. D-08 (Skeleton Test) has zero CSS values.
- **Proposed change:** In `artifact-tc-brief-template.md`, change the Tier 4 instruction from a warning to a HARD GATE: "Tier 4 MINIMUM: 35 lines. EACH disposition MUST include at least one CSS property: value pair. D-08 MUST include at least 3 specific CSS values (bg colors, spacing values, or border widths). If Tier 4 is under 35 lines, the Brief Assembler MUST expand technique vocabulary before passing to builder."
- **Artifact:** `artifact-tc-brief-template.md` (Tier 4 section, assembly rules)
- **Impact:** Prevents the documented technique deficit from recurring

---

**D-05: Add callout border-left-width modulation to recipe**

- **Source:** audit-builder-recipe.md (item 15, TOP 10 #7)
- **Gap:** Recipe says "Zone 3 border-left-width: 5px (heavier)" for dense zones. Z5 callout stays at 4px (line 1155 of HTML).
- **Root cause:** The modulation instruction is in the recipe but the CSS value is buried in a paragraph rather than being a specific CSS rule.
- **Proposed change:** In `artifact-builder-recipe.md` (Step 2.4), add explicit CSS: "`.zone-line .callout, .zone-tank .callout { border-left-width: 5px; }` — Dense zones get heavier callout borders to match the increased visual weight."
- **Artifact:** `artifact-builder-recipe.md` (Step 2.4)
- **Impact:** Ensures the callout modulation instruction is CSS-specific, not prose-only

---

**D-06: Add table row hover tint to D-07 for data-heavy zones**

- **Source:** audit-builder-recipe.md (item 47, TOP 10 #10)
- **Gap:** Brief specified "hover states on role cards in Z2 revealing communication patterns (table row tint: rgba(232,48,37,0.05))." Role cards have border hover but no row tint on tables.
- **Root cause:** The hover tint instruction is specific but not formatted as CSS.
- **Proposed change:** In `artifact-builder-recipe.md` (D-07), add CSS: "`.zone-floor tr:hover td { background-color: rgba(232,48,37,0.05); }` — Subtle row highlight reveals data relationships on hover."
- **Artifact:** `artifact-builder-recipe.md` (D-07 section)
- **Impact:** Adds the specific hover technique that was specified but not implemented

---

### CATEGORY E: PA PROTOCOL AND AUDITOR GAPS (5 enrichments)

Flagged by: audit-pa-protocol, audit-manifest, audit-orchestrator

---

**E-01: Add "pass with critical defect" guidance to PA-05 scoring rubric**

- **Source:** audit-pa-protocol.md (Gap G1)
- **Gap:** Auditor A passed all 4 sub-criteria individually but scored 3/4 overall, citing trailing void. The protocol's binary pass/fail per sub-criterion doesn't handle "passes in substance but has a critical shipping defect."
- **Root cause:** No guidance exists for conditional pass cases.
- **Proposed change:** In `artifact-pa-protocol.md` (Part 1, Section 1.3), add: "If a sub-criterion technically passes but contains a critical shipping defect (e.g., POLISHED but with a 5-viewport whitespace void), the auditor may score the sub-criterion as CONDITIONAL PASS. CONDITIONAL PASS counts as FAIL for the 4/4 scoring but PASS for the 3/4 scoring. The auditor MUST name the specific defect that makes it conditional."
- **Artifact:** `artifact-pa-protocol.md` (Part 1, Section 1.3)
- **Impact:** Formalizes the judgment Auditor A correctly exercised

---

**E-02: Clarify PA-67 (Novelty) binary criteria for "partially novel" pages**

- **Source:** audit-pa-protocol.md (Gap G2, Deviation D5)
- **Gap:** PA-67 answered "Partially" rather than binary YES/NO. Weaver resolved as NO for scoring. The YES criteria are arguably met (names specific novel elements) while the overall visual architecture is conventional.
- **Root cause:** PA-67 criteria are ambiguous when editorial novelty is high but visual novelty is low.
- **Proposed change:** In `artifact-pa-protocol.md` (Tier 5, PA-67), revise criteria: "YES requires: auditor names at least 1 novel VISUAL technique (not content arrangement) AND explains why it works visually (not editorially). The technique must be something the auditor has not seen in other pages. Editorial decisions (content ordering, topic selection) do not count. PARTIAL = NO for binary scoring."
- **Artifact:** `artifact-pa-protocol.md` (PA-67 section)
- **Impact:** Eliminates PARTIAL ambiguity

---

**E-03: Add guidance for PA-24/PA-25 when no sibling pages available**

- **Source:** audit-pa-protocol.md (Gap G3)
- **Gap:** PA-24 ("Does this page feel like it belongs with its siblings?") and PA-25 are unanswerable without sibling pages. Auditor I had to improvise.
- **Root cause:** Protocol doesn't address the single-page case.
- **Proposed change:** In `artifact-pa-protocol.md` (PA-24/PA-25 entries), add: "If no sibling pages are available: assess inferred system coherence from the single page. Identify >=3 system-level traits (e.g., consistent header DNA, border hierarchy, font trinity) and assess whether they suggest a FAMILY rather than a standalone page. Score YES if >=3 system traits detected, NO if page feels standalone."
- **Artifact:** `artifact-pa-protocol.md` (PA-24 and PA-25)
- **Impact:** Gives auditors clear instructions for the single-page case

---

**E-04: Require AP-01 (Density Stacking) to exclude table cells from 12px minimum**

- **Source:** audit-identity-perception.md (AP-01 section), audit-gate-runner.md (GR-17)
- **Gap:** GR-17 (AP-01 Density Stacking) FAILED with 262 violations — all from table cells at 8px padding. The `td, th` selector is included in the gate code. But 8px table cell padding is standard practice for data-dense tables.
- **Root cause:** The 12px minimum padding threshold was designed for content elements (paragraphs, callouts, sections) but the code applies it to table cells.
- **Proposed change:** In `artifact-gate-runner.md` GR-17, modify the selector: "Exclude `td` and `th` from the 12px minimum. Table cells have a separate threshold: minimum 4px padding. Content elements (p, div, section, article, aside, blockquote, .callout) maintain the 12px minimum."
- **Artifact:** `artifact-gate-runner.md` (GR-17 JS code)
- **Impact:** Eliminates 262 false positive violations from data tables

---

**E-05: Add `p { max-width: 70ch }` as explicit gate check**

- **Source:** audit-identity-perception.md (SC-10, Family DNA)
- **Gap:** SC-10 requires `p { max-width: 70ch }` but no global paragraph max-width rule exists. Individual paragraphs have various max-widths (38em, 50ch, 40ch) but most zone paragraphs have NO max-width. GR-10 (Cross-Page DNA) does not check this.
- **Root cause:** The `p { max-width: 70ch }` requirement is in the identity-perception artifact but not in the gate runner executable code.
- **Proposed change:** In `artifact-gate-runner.md`, add check to GR-10 (Cross-Page DNA): "Verify that all `<p>` elements within `.container` have a computed max-width. If any `<p>` has no max-width constraint and its natural width exceeds 75ch at 1440px, flag as violation."
- **Artifact:** `artifact-gate-runner.md` (GR-10 JS code)
- **Impact:** Enforces the 70ch readability constraint that's specified but not gated

---

### CATEGORY F: ROUTING AND CONTENT ANALYSIS (6 enrichments)

Flagged by: audit-routing, audit-orchestrator

---

**F-01: Add section height estimates to content map template**

- **Source:** audit-routing.md (Requirement 20, NO)
- **Gap:** The artifact requires per-zone height estimates in the content map as part of temporal composition mapping. Heights appear only in the execution brief. The content analyst did not produce this data — the brief assembler generated it.
- **Root cause:** The content analyst template doesn't explicitly include height estimation as an operation.
- **Proposed change:** In `artifact-routing.md` (Phase 0 Content Analysis Protocol), add Operation 8: "Estimate per-zone viewport heights based on content volume. Format: 'Z1: ~700px (SPARSE), Z2: ~1800px (DENSE), ...' Use these heuristics: 1 paragraph ≈ 80px, 1 table ≈ 200px, 1 code block ≈ 150px, 1 ASCII diagram ≈ 120px."
- **Artifact:** `artifact-routing.md` (Phase 0, content map template)
- **Impact:** Moves height estimation to Phase 0 where the content analyst has the content

---

**F-02: Add transition weight vocabulary to content map**

- **Source:** audit-routing.md (Requirement 21, NO)
- **Gap:** The artifact requires 3 dimensions of scroll rhythm in the content map (section height, visual density, transition weight). Transition types (light/medium/heavy) were generated by the brief assembler, not the content analyst.
- **Root cause:** Transition weight mapping is not in the content analyst's operation list.
- **Proposed change:** In `artifact-routing.md` (Phase 0), add to density arc section: "For each zone boundary, note transition WEIGHT based on content register change: HEAVY (narrative->reference or reverse), MEDIUM (within same register, density change), LIGHT (continuation, same density). Format: 'Z1->Z2: HEAVY (philosophy->architecture), Z2->Z3: MEDIUM (architecture->memory), ...'"
- **Artifact:** `artifact-routing.md` (Phase 0, density arc subsection)
- **Impact:** Gives the brief assembler transition weight input instead of requiring it to generate this

---

**F-03: Add per-section element inventory to content map**

- **Source:** audit-routing.md (Requirement 14, PARTIAL)
- **Gap:** Content map provides aggregate element counts ("14 ASCII diagrams, 12 tables...") but NOT per-section breakdowns as the artifact specifies: "For each section, classify the content element types present."
- **Root cause:** The content analyst template gives aggregate format, not per-section format.
- **Proposed change:** In `artifact-routing.md` (Phase 0, structural heterogeneity section), change from aggregate to table format: "| Section | Element Types | Count | Register |\n|---------|-------------|-------|---------|\n| S0 | prose, blockquotes | 4 | NARRATIVE |\n| S1 | prose, ASCII diagrams, tables | 8 | MIXED |..." This enables the brief assembler to do per-zone content-form coupling.
- **Artifact:** `artifact-routing.md` (Phase 0, structural heterogeneity section)
- **Impact:** Gives downstream stages per-section granularity instead of per-zone

---

**F-04: Clarify 73-line constraint layer measurement**

- **Source:** audit-routing.md (Requirement 40, NO)
- **Gap:** The execution brief's constraint layer is 88-152 lines depending on measurement. The 73-line target is substantially exceeded. But it's unclear what counts toward the 73-line cap.
- **Root cause:** The artifact says "73-line constraint cap" but doesn't define what's IN vs OUT of the constraint layer.
- **Proposed change:** In `artifact-routing.md` (Compression Physics section), add: "73-line cap measures Tier 1 + Tier 2 ONLY (identity + perception physics). Tier 3 (compositional frameworks) and Tier 4 (dispositions) are OUTSIDE the cap. Total brief has a separate cap: 200 lines maximum (mode collapse threshold). The 73-line cap is the UNIVERSAL channel; Tier 3+4 are the CONTENT channel."
- **Artifact:** `artifact-routing.md` (Compression Physics section)
- **Impact:** Makes the constraint layer cap enforceable by defining its scope

---

**F-05: Add zone count override mechanism**

- **Source:** audit-routing.md (Requirement 29, PARTIAL)
- **Gap:** Content is ~5,800 words. Per the map, this recommends 4-5 zones. Content map recommends 6 zones — 1 over the upper bound.
- **Root cause:** The zone count map has no override mechanism for high-heterogeneity content.
- **Proposed change:** In `artifact-routing.md` (Content-Volume-to-Zone-Count Map), add: "Override: Content analyst may exceed recommended zone count by +1 if AND ONLY IF structural heterogeneity = HIGH AND the content has >=6 distinct section types. Must document: 'Zone count override: 6 zones (recommended: 4-5). Justification: [reason].'"
- **Artifact:** `artifact-routing.md` (zone count map section)
- **Impact:** Formalizes the override that was already exercised

---

**F-06: Enforce content map line cap or formally update target**

- **Source:** audit-orchestrator.md (Section 2, Phase 0), audit-routing.md (Requirement 3)
- **Gap:** Content map is 79 lines vs ~30-50 target (or ~66 for COMPOSED mode). Consistently exceeds.
- **Root cause:** The target was set when content maps were simpler. The 7-operation protocol with tensions, metaphor seeds, density arc, and reader profile naturally produces 60-80 lines.
- **Proposed change:** In `artifact-routing.md`, update: "Content Map target: ~50-80 lines for COMPOSED mode, ~30-50 lines for APPLIED mode. Above 80 lines = verbose (trim commentary, keep structured data). Below 50 lines for COMPOSED = underspecified."
- **Artifact:** `artifact-routing.md` (output size specification)
- **Impact:** Aligns the target with observed useful length

---

### CATEGORY G: ORCHESTRATOR AND PROCESS (7 enrichments)

Flagged by: audit-orchestrator, audit-manifest, audit-pipeline-fidelity, audit-skill

---

**G-01: Require conviction statement as separate file**

- **Source:** audit-orchestrator.md (Section 5, builder step 1), audit-pipeline-fidelity.md (D-02)
- **Gap:** MANIFEST specifies conviction statement as a SEPARATE FILE before construction. Builder embedded it as an HTML comment in the output file.
- **Root cause:** The builder wrote the conviction directly into the HTML rather than writing it to a separate file first.
- **Proposed change:** In `artifact-orchestrator.md` (Phase 2, Builder Sequence Step 1), add: "Builder MUST write conviction statement to `conviction.md` BEFORE beginning HTML construction. The orchestrator verifies this file exists before allowing Phase 2 to continue. The conviction is ALSO included as an HTML comment in the output file."
- **Artifact:** `artifact-orchestrator.md` (Phase 2), `MANIFEST.md` (Step 5)
- **Impact:** Enables the REBUILD path to provide the conviction to a new builder

---

**G-02: Log model selection in output files**

- **Source:** audit-orchestrator.md (Model Mandate), audit-manifest.md (Appendix F), audit-pipeline-fidelity.md (Section 4), audit-skill.md (Gap G10)
- **Gap:** No output file records which model was used for any agent. Model mandate compliance is "LIKELY" but not verifiable.
- **Root cause:** The pipeline does not require agents to self-identify their model.
- **Proposed change:** In `artifact-orchestrator.md` (all agent prompts), add: "Begin your output with: `**Agent:** {role} | **Model:** {model_id}`". In `MANIFEST.md` Appendix E templates, add the same header requirement.
- **Artifact:** `artifact-orchestrator.md` (agent prompt headers), `MANIFEST.md` (Appendix E)
- **Impact:** Makes model mandate verifiable from output files

---

**G-03: Require builder self-evaluation evidence**

- **Source:** audit-orchestrator.md (Section 5, builder step 8), audit-pipeline-fidelity.md (key finding)
- **Gap:** The trailing whitespace void (flagged by 9/9 PA auditors) suggests the builder did NOT perform final self-evaluation screenshots. No self-evaluation evidence exists.
- **Root cause:** The builder recipe includes self-evaluation steps but there's no mechanism to verify they were executed.
- **Proposed change:** In `artifact-orchestrator.md` (Phase 2), add: "Builder MUST write self-evaluation observations to `self-eval.md` including: (1) 'I checked the page at 1440px and 768px', (2) 'Trailing content after footer: [yes/no]', (3) 'Zone backgrounds are visually distinct: [yes/no]'. If self-eval.md does not exist after Phase 2, the orchestrator flags BUILDER SELF-EVAL MISSING as a warning."
- **Artifact:** `artifact-orchestrator.md` (Phase 2)
- **Impact:** Catches the trailing whitespace void pattern before PA audit

---

**G-04: Reconcile brief line targets between orchestrator and MANIFEST**

- **Source:** audit-orchestrator.md (Section 3, Phase 1)
- **Gap:** `artifact-orchestrator.md` says "~93-113 lines" for the brief. `MANIFEST.md` says "~100-165 lines." The actual brief is 174 lines. These are contradictory targets.
- **Root cause:** The documents were written at different times and never reconciled.
- **Proposed change:** Set a single canonical target in BOTH documents: "Execution brief target: 120-170 lines (COMPOSED mode), 80-120 lines (APPLIED mode). Above 180 = mode collapse risk. Below 100 for COMPOSED = underspecified." Update both `artifact-orchestrator.md` and `MANIFEST.md` to this unified target.
- **Artifact:** `artifact-orchestrator.md` (Phase 1), `MANIFEST.md` (Step 4)
- **Impact:** Eliminates conflicting specifications

---

**G-05: Remove count-gate exposure from builder-visible Tier 3**

- **Source:** audit-orchestrator.md (Section 1, ITEM 57)
- **Gap:** Execution brief Tier 3 says "Each boundary shifts at least 3 channels, averaging 4+" — this IS a count-gate in builder-visible form.
- **Root cause:** The multi-coherence description exposes the channel count threshold.
- **Proposed change:** In `artifact-tc-brief-template.md` (Tier 3, multi-coherence), rephrase: "Each boundary should feel like entering a different room — the background shifts, the typography adapts, the spacing recalibrates, the borders respond." Remove the "at least 3 channels, averaging 4+" language. The count-gate remains in `artifact-gate-runner.md` but is invisible to the builder.
- **Artifact:** `artifact-tc-brief-template.md` (Tier 3 multi-coherence)
- **Impact:** Eliminates count-gate exposure to builder

---

**G-06: Add explicit file-writing mandate to SKILL.md**

- **Source:** audit-skill.md (Gap G2)
- **Gap:** Skill does not say "Write Content Map to file, write Execution Brief to file, write gate results to file." A fresh instance might keep intermediates in memory only.
- **Root cause:** The skill delegates to MANIFEST for execution detail, but this specific instruction is implicit.
- **Proposed change:** In `~/.claude/skills/build-page/SKILL.md`, add to key execution rules: "Write ALL intermediate artifacts to files in the output directory: content-map.md, execution-brief.md, conviction.md, gate-results.md. Each file must be written to disk before the next pipeline phase begins."
- **Artifact:** `~/.claude/skills/build-page/SKILL.md` (execution rules section)
- **Impact:** Ensures audit trail and reproducibility

---

**G-07: Add output filename convention to SKILL.md**

- **Source:** audit-skill.md (Gap G7)
- **Gap:** Two Gas Town runs used different HTML naming conventions: `yegge-gas-town.html` vs `output.html`. No standard specified.
- **Root cause:** SKILL.md specifies output directory but not filenames.
- **Proposed change:** In `~/.claude/skills/build-page/SKILL.md`, add: "Output HTML filename: `{content-slug}.html` (derived from content filename, same as directory slug). Pipeline artifacts use standard names: content-map.md, execution-brief.md, conviction.md, gate-results.md, verdict.md, pa-auditor-{a-i}.md, pa-integrative.md."
- **Artifact:** `~/.claude/skills/build-page/SKILL.md` (output conventions section)
- **Impact:** Standardizes output naming across pipeline runs

---

### CATEGORY H: CONTENT MAP APPENDIX AND INFORMATION FLOW (3 enrichments)

Flagged by: audit-tc-brief-template, audit-information-flow, audit-routing

---

**H-01: Enforce verbatim content map appendix in brief**

- **Source:** audit-tc-brief-template.md (Assembly Rule 7, NO), (Content Map Appendix Score 60%)
- **Gap:** Template says content map is "APPENDED verbatim from Phase 0 output." The execution brief provides ~12 lines of compressed summary instead of the full ~79-line content map.
- **Root cause:** The brief assembler compressed the appendix to save token budget.
- **Proposed change:** In `artifact-tc-brief-template.md` (Assembly Rule 7), change to: "Content Map Appendix is the FULL content map from Phase 0, appended without modification. Do NOT compress or summarize. If the brief exceeds 200 lines with the full appendix, move the density arc ASCII diagram and reader profile to the appendix and keep Tiers 1-4 under 160 lines."
- **Artifact:** `artifact-tc-brief-template.md` (Assembly Rule 7)
- **Impact:** Ensures the builder has access to full content analysis

---

**H-02: Preserve tension names in the execution brief**

- **Source:** audit-information-flow.md (Junction 2, Loss Point #1)
- **Gap:** The 4 named tensions from the content map are not listed in the brief body. Their effects are distributed across dispositions and the metaphor section, but the explicit naming (Chaos vs Control, Accessibility vs Gatekeeping, etc.) is lost.
- **Root cause:** The brief assembler synthesized tension effects into dispositions without preserving the tension names.
- **Proposed change:** In `artifact-tc-brief-template.md` (Tier 3, structural metaphor subsection), add: "Content tensions (from Content Map): {list all tensions with dominant poles}. The metaphor resolves tension #{N} through: {1-sentence explanation}." This preserves the tension vocabulary without adding significant length.
- **Artifact:** `artifact-tc-brief-template.md` (Tier 3)
- **Impact:** Maintains the analytical vocabulary from content analysis through to building

---

**H-03: Add component name aliasing rule**

- **Source:** audit-information-flow.md (Junction 3, Loss Point #3)
- **Gap:** Brief names `.table-wrapper`, `.section-header`, `.grid--2col`. HTML uses `.profile-table`, `.section-indicator`, `.role-grid`. Function is preserved but class names from the component library are not adopted verbatim.
- **Root cause:** The builder created zone-specific component names rather than using the library class names.
- **Proposed change:** In `artifact-builder-recipe.md` (Step 1.2, Read components.css), add: "Component class names from components.css are CANONICAL. Use them as your base class: `.table-wrapper.profile-table`, not just `.profile-table`. Zone-specific styling goes on a MODIFIER class, not a replacement class. This enables gate verification of component library adoption."
- **Artifact:** `artifact-builder-recipe.md` (Step 1.2)
- **Impact:** Enables programmatic verification of component library adoption

---

### CATEGORY I: WORKED EXAMPLES GAPS (4 enrichments)

Flagged by: audit-worked-examples

---

**I-01: Expand Example 2 (Execution Brief) with actual Tier 3 content**

- **Source:** audit-worked-examples.md (Missing Item #1)
- **Gap:** Example 2 is only 14 lines of description. A fresh instance cannot calibrate brief quality from this.
- **Root cause:** The worked examples artifact shows the content map in detail but only describes the brief.
- **Proposed change:** In `artifact-worked-examples.md` (Example 2), replace the 14-line description with at least the full Tier 3 multi-coherence section (30-40 lines) from the Gas Town execution brief. Include the boundary-by-boundary descriptions as the gold standard for COMPOSED-mode briefs.
- **Artifact:** `artifact-worked-examples.md` (Example 2)
- **Impact:** Gives fresh instances concrete calibration for the brief's richest section

---

**I-02: Add counter-example (bad content map or bad brief)**

- **Source:** audit-worked-examples.md (Missing Item #2)
- **Gap:** All examples are from one run rated PA-05 3/4. No counter-examples. A fresh instance cannot calibrate what "bad" looks like.
- **Root cause:** Only positive examples were included.
- **Proposed change:** In `artifact-worked-examples.md`, add Example 5: "Counter-Example: APPLIED-mode content map" showing a content map that MISSED tensions, had LOW metaphor viability, and correctly routed to APPLIED mode. Annotate what makes it different from the COMPOSED example.
- **Artifact:** `artifact-worked-examples.md` (new Example 5)
- **Impact:** Teaches fresh instances to distinguish good from bad

---

**I-03: Add Phase 2 (Build) worked example**

- **Source:** audit-worked-examples.md (Missing Item #5)
- **Gap:** Zero coverage of Phase 2. A fresh instance cannot calibrate build quality, mechanism density, or CSS structure.
- **Root cause:** The worked examples stop at Phase 1 and skip to Phase 3A.
- **Proposed change:** In `artifact-worked-examples.md`, add Example 6: "Phase 2 Build Excerpt" showing 30-50 lines of CSS with annotations: zone background setup, concept-named custom properties, one callout component with zone modulation, one boundary transition. Mark what makes it COMPOSED vs APPLIED.
- **Artifact:** `artifact-worked-examples.md` (new Example 6)
- **Impact:** Gives fresh instances build-quality calibration

---

**I-04: Document acceptable deviation ranges**

- **Source:** audit-worked-examples.md (Missing Item #3)
- **Gap:** Worked example documents what happened but not which deviations are acceptable. Content map 79 lines vs 30-50 target — is this good? Brief 174 lines vs 93-113 target — when is exceeding warranted?
- **Root cause:** The artifact presents outcomes without assessing acceptability.
- **Proposed change:** In `artifact-worked-examples.md`, add "Deviation Acceptability Guide" section: "Content map: 40-80 lines acceptable for COMPOSED (below 40 = underspecified, above 80 = verbose). Brief: 120-180 lines for COMPOSED (below 100 = underspecified, above 200 = mode collapse risk). CSS: 800-1500 lines for COMPOSED (below 600 = flat, above 1500 = over-specified). Zone count: recommended +/- 1 with HIGH heterogeneity justification."
- **Artifact:** `artifact-worked-examples.md` (new section)
- **Impact:** Calibrates acceptable ranges for fresh instances

---

### CATEGORY J: DENSITY STACKING AND SPACING (2 enrichments)

Flagged by: audit-builder-recipe, audit-identity-perception, audit-value-tables

---

**J-01: Inner spacing compression pattern needs recipe acknowledgment**

- **Source:** audit-value-tables.md (section 2b)
- **Gap:** All zone inner spacing is ~50% of prescribed values (16px actual vs 32px prescribed in moderate zones). Padding-bottom and inner spacing are systematically compressed. This is consistent and intentional but undocumented.
- **Root cause:** The builder used a compressed spacing approach throughout but the value tables prescribe larger values.
- **Proposed change:** In `artifact-value-tables.md` (Spacing Scale section), add: "Inner spacing (between elements within a zone) may be compressed to 50-75% of the zone padding values. This is an acceptable creative decision if: (1) the compression is SYSTEMATIC (same ratio across all zones), (2) no element-to-element gap falls below 12px, (3) the compression varies per zone (denser zones get more compression). Document the compression ratio in the conviction statement."
- **Artifact:** `artifact-value-tables.md` (spacing section)
- **Impact:** Legitimizes a pattern that's already happening and sets boundaries for it

---

**J-02: H2 and H3 size variation across zones**

- **Source:** audit-value-tables.md (section 3c), audit-builder-recipe.md (item 35, TOP 10 #9)
- **Gap:** Z2-Z6 all use 28px H2 and 20px H3 (uniform). Value tables prescribe 28-32px H2 variation and 20-24px H3 variation across zones. This flattening reduces zone-to-zone typographic distinctness.
- **Root cause:** The builder defaulted to uniform heading sizes rather than zone-specific values.
- **Proposed change:** In `artifact-builder-recipe.md` (Step 2.2 and D-01), add: "H2 MUST vary between at least 2 distinct sizes across zones. Minimum: Z1 and Z2 H2 sizes differ by >=4px. H3 MUST have at least 2 distinct sizes. This is a PERCEPTION REQUIREMENT, not a creative guideline." Add to `artifact-gate-runner.md`: advisory gate that checks H2/H3 size variance across zones.
- **Artifact:** `artifact-builder-recipe.md` (Step 2.2), `artifact-gate-runner.md` (advisory gate)
- **Impact:** Prevents the typographic flattening pattern

---

## CROSS-CUTTING PATTERNS

### Pattern 1: "Prose instructions produce partial compliance; CSS-specific instructions produce full compliance"
- Tier 1 (verbatim CSS world-descriptions): 100% compliance
- Tier 3 multi-coherence (specific CSS values per boundary): 80%+ compliance
- Tier 4 dispositions with CSS values (D-04, D-05, D-06): 90%+ compliance
- Tier 4 dispositions with prose only (D-07, D-08): 60% compliance
- **Enrichment principle:** Every instruction that expects CSS output MUST include at least one CSS property:value pair as an example.

### Pattern 2: "Targets without hard gates are treated as guidelines"
- Content map ~30-50 lines: actual 79 lines (158% over)
- Brief ~93-113 lines: actual 174 lines (54% over)
- CSS 800-1200 lines: actual ~1700 lines (42% over)
- Tier 4 ~40 lines: actual ~25 lines (37% under)
- **Enrichment principle:** Any target that MUST be enforced needs either a gate or a hard "FAIL if > X" statement. Targets marked with "~" will be treated as +-50%.

### Pattern 3: "The same class of defect recurs across pipeline runs"
- Background delta clustering (15-27 range): happened in original Gas Town, Flagship, AND this run
- Trailing whitespace void: happened in Flagship AND this run
- Cold color leakage: happened in Flagship AND this run
- **Enrichment principle:** Recurring defects need STRUCTURAL prevention (gates, locked values, pre-build verification), not INSTRUCTION prevention (prose warnings in the recipe).

### Pattern 4: "Information created at Phase N but needed at Phase N+2 gets lost"
- Content tensions (Phase 0) needed by builder (Phase 2): lost at Phase 1 brief assembly
- Section heights (should be Phase 0) but only at Phase 1: information created too late
- Per-section element types (Phase 0 should have): only aggregate provided
- **Enrichment principle:** Every piece of information used by the builder must be traceable from its origin through the brief to the HTML.

---

## PRIORITY RANKING

### TIER 1: Must Fix (prevents recurring critical defects)
1. **A-01** Lock zone background hex values as non-negotiable
2. **A-03** Raise COMPOSED-mode delta to >=20 with >=25 at 3+ boundaries
3. **B-02** Fix verdict logic — identity FAIL = REBUILD unless overridden
4. **A-05** Fix gate runner to exclude non-rendered elements
5. **D-04** Expand Tier 4 to 40-line budget (template's own warning was ignored)

### TIER 2: Should Fix (prevents moderate quality gaps)
6. **A-02** Add pre-build verification gate for zone colors
7. **B-01** Canonicalize gate IDs
8. **C-01** Add "SHIP WITH FIXES" as formal verdict
9. **C-02** Add fix-type classification to weaver
10. **E-04** Exclude table cells from AP-01 density stacking
11. **G-01** Require conviction statement as separate file
12. **G-04** Reconcile brief line targets

### TIER 3: Should Add (improves quality and calibration)
13. **A-04** Pre-computed COMPOSED-mode color palettes
14. **B-04** Structural transition element handling in GR-14
15. **D-01** Print styling in D-07
16. **D-03** Consolidate D-07 into fewer, larger instructions
17. **F-01** Section height estimates in content map
18. **F-02** Transition weight vocabulary in content map
19. **H-01** Enforce verbatim content map appendix
20. **I-01** Expand worked example brief section

### TIER 4: Nice to Have (incremental improvements)
21. **A-06** Investigate GR-05 measurement anomaly
22. **A-07** Cold purple prohibition with replacement
23. **A-08** Background delta diagnostic output
24. **B-03** Strengthen GR-09 border hierarchy JS
25. **B-05** Add GR-08 No Decorative Elements code
26. **B-06** 768px responsive gate re-run
27. **B-07** Resolve conflicting gate result files
28. **C-03** Emotional arc 4-register synthesis
29. **C-04** Weaver Output B enforcement
30. **D-02** Zone-specific ::selection colors
31. **D-05** Callout border-left-width modulation
32. **D-06** Table row hover tint
33. **E-01** PA-05 "pass with critical defect" guidance
34. **E-02** PA-67 binary criteria clarification
35. **E-03** PA-24/PA-25 single-page guidance
36. **E-05** p { max-width: 70ch } gate check
37. **F-03** Per-section element inventory
38. **F-04** 73-line constraint layer scope definition
39. **F-05** Zone count override mechanism
40. **F-06** Content map line cap update
41. **G-02** Log model selection in output files
42. **G-03** Builder self-evaluation evidence
43. **G-05** Remove count-gate from builder-visible Tier 3
44. **G-06** File-writing mandate in SKILL.md
45. **G-07** Output filename convention
46. **H-02** Preserve tension names in brief
47. **H-03** Component name aliasing rule
48. **I-02** Counter-example in worked examples
49. **I-03** Phase 2 build worked example
50. **I-04** Deviation acceptability guide
51. **J-01** Inner spacing compression acknowledgment
52. **J-02** H2/H3 size variation requirement

---

## STATISTICS

- **Total enrichments extracted:** 52
- **Artifacts requiring changes:** 10 of 10 pipeline artifacts + SKILL.md + MANIFEST.md
- **Categories:** 10 (A through J)
- **Tier 1 (must fix):** 5
- **Tier 2 (should fix):** 7
- **Tier 3 (should add):** 8
- **Tier 4 (nice to have):** 32
- **Enrichments per audit file:** average 4.0 (range: 3-8)
- **Most-cited artifacts for changes:** `artifact-gate-runner.md` (11 enrichments), `artifact-builder-recipe.md` (8), `artifact-tc-brief-template.md` (5), `artifact-pa-protocol.md` (5)
