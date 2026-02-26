# Gap Catalog — Phase D Execution Failures

**Date:** 2026-02-14
**Auditor:** integration-auditor
**Source:** Integration audit PD-01 through PD-12 analysis
**Total Gaps:** 11 (3 CRITICAL, 3 HIGH, 3 MEDIUM, 2 LOW)

---

## GAP-001: Anti-Gravity R6 Enforcement Failure

**Type:** Broken Interface
**Severity:** CRITICAL
**Page(s) affected:** Variant C (anti-gravity)

**Surface manifestation:**
Variant C converged to OD-004 geological metaphor (85% class name overlap, 1/5 dimensions different) WITHOUT divergence table or regeneration.

**Root cause:**
Phase 3.5 divergence gate either (a) NOT enforced in skill execution, (b) NOT documented in log, or (c) PASSED incorrectly despite >40% overlap + <3/5 dimensions.

**Library cause:**
Mechanism R6 (Divergence Mandate) requires 5-question gate when metaphor matches library. Gate implementation may be:
1. Missing from tension-composition skill Phase 3.5
2. Present but NOT blocking (advisory only)
3. Present and blocking but agent justified convergence (log missing justification)

**Extraction decision that caused this:**
Phase C extraction assumed R6 would be ENFORCED via skill Phase 3.5 gate. If gate is present but non-blocking, this is a SKILL GAP not extraction gap.

**Remediation:**
1. IMMEDIATE: Read full Variant C log (beyond line 200) to verify Phase 3.5 presence
2. If Phase 3.5 present WITH divergence table: Gap is FALSE POSITIVE (agent provided justification)
3. If Phase 3.5 present WITHOUT divergence table: Add BLOCKING requirement to skill
4. If Phase 3.5 ABSENT: This is AGENT ERROR (skill skipped phase)
5. Update MEMORY.md: "R6 requires BLOCKING gate, not advisory"

**Estimated fix time:** 2 hours (skill modification + validation)

---

## GAP-002: Prose-Only Content Limits Component Testing

**Type:** Agent Error (content selection)
**Severity:** CRITICAL
**Page(s) affected:** ALL Track 2 variants (A, B, C, D)

**Surface manifestation:**
All Track 2 variants scored 22-44% component coverage (2-4/9 families) vs 67% target (6/9). ALL failed PD-12.

**Root cause:**
Content selected for Phase D was 85% prose, 0% code blocks, 0% tables, 0% file trees, 0% decision matrices. This makes 5/9 component families IMPOSSIBLE to test.

**Library cause:**
Component inventory includes families that require SPECIFIC content types:
- Code blocks → requires code examples
- Tables → requires tabular data
- File trees → requires directory structures
- Decision matrices → requires comparison grids
- Stats bars → requires metrics

Prose-only content can ONLY use: callouts, headers, footers, section indicators (4/9 families).

**Extraction decision that caused this:**
Phase C extraction created 9-family inventory assuming MIXED content. Phase D content selection prioritized PROSE TENSION (for metaphor testing) over COMPONENT DIVERSITY (for coverage testing).

**Remediation:**
1. IMMEDIATE: Phase D-V2 must use MIXED content (50% prose, 50% code/tables/diagrams)
2. Create content templates: "orchestration-mixed.md" with 4 code blocks, 3 tables, 2 file trees, 1 decision matrix
3. Update Phase D protocol: "Content MUST exercise >=7/9 component families"
4. Alternative: Adjust Track 2 target to >=4/9 (44%) for prose-only, keep >=6/9 (67%) for mixed

**Estimated fix time:** 1 hour (content creation for Phase D-V2)

---

## GAP-003: Mechanism Count Ceiling for Prose Content

**Type:** Insufficient Pattern
**Severity:** CRITICAL
**Page(s) affected:** Variants A, B (both scored 6/8 mechanisms = FAIL)

**Surface manifestation:**
Variants A/B both used exactly 6 mechanisms, missing 8-mechanism Track 2 target. Both failed PD-05.

**Root cause:**
Prose-only content limits mechanism application:
- NO code blocks → NO Code Block mechanism (#17)
- NO tables → NO Data Table mechanism (#18)
- NO file trees → limits File Tree visualization
- NO decision matrices → limits structured comparison

18 total mechanisms, but ~4 require non-prose content. Effective ceiling for prose-only: ~14 mechanisms. Variants achieved 6/14 (43%), not 6/18 (33%).

**Library cause:**
Mechanism catalog extracted from DD/OD/CD (which have MIXED content). Catalog doesn't distinguish prose-compatible vs content-specific mechanisms.

**Extraction decision that caused this:**
Phase C mechanism extraction treated ALL mechanisms as universally applicable. Missing categorization:
- UNIVERSAL: 2-zone DNA, border-weight, spacing compression (14 mechanisms)
- CONTENT-SPECIFIC: Code blocks, tables, file trees, decision matrices (4 mechanisms)

**Remediation:**
1. Add to mechanism-catalog.md: "Content-Specific Mechanisms" section
2. Adjust Track 2 target:
   - Prose-only: >=6 mechanisms (from universal 14)
   - Mixed content: >=8 mechanisms (from all 18)
3. Update usage-criteria.md: "Mechanism count depends on content type"

**Estimated fix time:** 30 min (documentation update)

---

## GAP-004: Custom Property Bridging Documentation Gap

**Type:** Missing Component
**Severity:** HIGH
**Page(s) affected:** Variant C (failed PD-04 MISSING), Track 1 (N/A but pattern absent)

**Surface manifestation:**
Variant C used library `.callout` components within custom `.geological-section` zones WITHOUT custom property overrides. Callouts inherited default padding/margins instead of zone-appropriate values.

**Root cause:**
compositional-core/ lacks EXPLICIT custom property bridging pattern documentation. Builders don't know HOW to override component properties within Tier 3 contexts.

**Library cause:**
components.css defines components with `var(--callout-padding, 20px)` pattern, BUT:
- NO examples of `.zone .callout { --callout-padding: 16px; }` overrides
- NO documentation in guidelines/ explaining Tier 2→Tier 3 bridging
- case-studies/ may show patterns but aren't accessible until Phase 5

**Extraction decision that caused this:**
Phase C extracted components WITH custom property hooks, but did NOT extract USAGE PATTERNS for overriding those hooks in zone contexts. This is a TIER 3 DOCUMENTATION GAP.

**Remediation:**
1. Create compositional-core/guidelines/tier-3-bridging.md:
   - Example: "To use .callout in .zone-dense context: `.zone-dense .callout { --callout-padding: 16px; }`"
   - Pattern: "For each Tier 2 component used in Tier 3 zone, override 1-3 properties via custom properties"
   - Anti-pattern: "DO NOT use direct selectors: `.zone .callout { padding: 16px; }` (breaks component defaults)"

2. Add bridging examples to components.css comments:
```css
/* TIER 3 BRIDGING EXAMPLE:
.my-zone .callout {
  --callout-padding: var(--space-4);
  --callout-bg-color: rgba(0,0,0,0.02);
}
*/
```

**Estimated fix time:** 1 hour (documentation + examples)

---

## GAP-005: Weak Permission No Observable Effect

**Type:** Agent Error (experimental condition failed)
**Severity:** HIGH
**Page(s) affected:** Variant B (weak permission)

**Surface manifestation:**
Variant B ("library AVAILABLE but not PUSHED") produced 0% library utilization, identical to Variant A (skill-only prohibition). Weak permission had NO MEASURABLE EFFECT on builder behavior.

**Root cause:**
"Available but not pushed" framing is TOO SUBTLE. Agent interprets:
- Variant A: "Library is PROHIBITED" → 0% library
- Variant B: "Library is available" → "I have permission to NOT use it" → 0% library
- Variant D: "Library is FIRST RESOURCE" → 68% library

Missing intermediate: "Library is ENCOURAGED after Phase 3"

**Library cause:**
compositional-core/ doesn't include USAGE PRESSURE gradients. Phase gates are BINARY (prohibited / permitted), not GRADUATED (discouraged / neutral / encouraged / required).

**Extraction decision that caused this:**
Anti-gravity mechanisms assumed BINARY prohibition would be sufficient. Missing GRADUATED PERMISSION model:
1. PROHIBITED (Phases 0-3)
2. DISCOURAGED (Phase 4 — mechanisms only)
3. NEUTRAL (Phase 5 — case studies optional)
4. ENCOURAGED (Phase 5+ — "compare your work to 2-3 case studies")
5. REQUIRED (Track 1 — library is the ONLY resource)

**Remediation:**
1. Phase D-V2: Test STRONGER weak permission: "After Phase 3.5, library case studies are RECOMMENDED for quality validation"
2. Add to tension-composition skill Phase 5: "RECOMMENDED: Read 2-3 case studies MOST similar to your metaphor. Extract mechanisms, verify divergence."
3. Track behavioral difference: Variant B-V2 should show 20-40% library utilization (vs 0% Variant A, 68% Variant D)

**Estimated fix time:** 30 min (skill modification for Phase D-V2)

---

## GAP-006: Component Inventory Confidence Levels Untested

**Type:** Insufficient Pattern
**Severity:** HIGH
**Page(s) affected:** ALL builds (confidence levels NOT validated in practice)

**Surface manifestation:**
component-inventory.md lists 34 components with HIGH/MEDIUM/LOW confidence, but Phase D builds did NOT exercise confidence boundaries. We don't know if LOW confidence components (density-indicator, Q&A pair, breadcrumb) are ACTUALLY buildable.

**Root cause:**
Phase D content selected HIGH confidence components only:
- Track 1: Used 10 HIGH confidence components (callouts, code blocks, tables, headers, footers)
- Track 2: Used 4 HIGH/MEDIUM components (callouts, headers, section indicators)

LOW confidence components (7%, 11%, 14% frequency) were NOT tested.

**Library cause:**
Inventory categorization exists but lacks USAGE GUIDANCE:
- HIGH confidence: Use freely (8+ files)
- MEDIUM confidence: Use with caution (4-7 files)
- LOW confidence: ??? (2-3 files) — NO GUIDANCE

**Extraction decision that caused this:**
Phase C extracted confidence levels based on FREQUENCY, not BUILDABILITY. Frequency ≠ reliability. A component seen in 2/27 files might be PERFECTLY buildable, just SPECIALIZED (e.g., Q&A pair for conversational content).

**Remediation:**
1. Phase D-V2: Create content that REQUIRES low-confidence components:
   - Q&A pair → conversational tutorial content
   - Breadcrumb → multi-level navigation
   - Density indicator → visual density markers
2. Test outcome:
   - If builds succeed: Reclassify as MEDIUM confidence (buildable, just specialized)
   - If builds fail: Document as INCOMPLETE (needs additional extraction from source)
3. Update inventory: Add "TESTED" column (YES/NO)

**Estimated fix time:** 2 hours (content creation + build testing)

---

## GAP-007: Library Gravitational Pull Quantified But Not Mitigated

**Type:** Agent Error (baseline established, mitigation unvalidated)
**Severity:** MEDIUM
**Page(s) affected:** Variant D (intentional), Variant C (unintentional)

**Surface manifestation:**
Variant D (library-first) converged to OD-004 (95% overlap) — EXPECTED.
Variant C (anti-gravity) ALSO converged to OD-004-like geological (85% overlap) — UNEXPECTED.

**Root cause:**
Early library exposure (even at Phase 4-5) creates ANCHORING BIAS. Variant C read prohibitions.md (which cites OD-004 findings) + may have read mechanism-catalog.md (which references geological patterns). Even WITHOUT case-studies/, library vocabulary leaked through.

**Library cause:**
prohibitions.md and mechanism-catalog.md contain INDIRECT library references:
- prohibitions.md line 139: "OD-004 uses 2px borders as part of confidence-encoding system"
- mechanism-catalog.md lines 79-80: "OD-004 (confidence strata: 4px=established, 3px=probable, 2px=speculative, 1px=open)"

These create PRIMING even before case-studies/ access.

**Extraction decision that caused this:**
Phase C extraction included library REFERENCES in identity/grammar layers (for provenance), which creates INDIRECT pattern exposure. This is a FEATURE (traceability) creating SIDE-EFFECT (priming).

**Remediation:**
1. OPTION A: Strip library references from identity/grammar (LOSE PROVENANCE)
2. OPTION B: Accept baseline priming, measure DEGREE of convergence:
   - 0-20% overlap: Novel
   - 20-40% overlap: Inspired (acceptable)
   - 40-60% overlap: Adapted (requires justification)
   - 60-100% overlap: Copied (regenerate required)
3. OPTION C: Add Phase 0E memory wipe instruction: "Forget any geological/fractal/conversational patterns from prior sessions"

**Recommended:** OPTION B (quantify convergence degrees, accept 20-40% inspired range)

**Estimated fix time:** 1 hour (guidelines update)

---

## GAP-008: 11px Font Size Non-Compliance (Track 1)

**Type:** Agent Error (minor token violation)
**Severity:** LOW
**Page(s) affected:** Track 1

**Surface manifestation:**
Track 1 HTML line 214: `font-size: 11px;` instead of `var(--text-xs)` (12px)

**Root cause:**
Builder used 11px for `.page-header__id` instead of tokens.css value. This is a SINGLE violation in 1,373-line file (0.07% non-compliance).

**Library cause:**
tokens.css defines --text-xs: 0.75rem (12px), but builder invented 11px for tighter metadata display. This MAY be intentional design decision (11px = 91% of 12px for ultra-compact labels).

**Extraction decision that caused this:**
Phase C extracted 6 type scale anchors (xs/sm/base/lg/h3/h2/h1). Did NOT extract INTERMEDIATE sizes (11px, 13px, 15px) which appear in some explorations for fine-tuning.

**Remediation:**
1. OPTION A: Add --text-xxs: 0.6875rem (11px) to tokens.css for ultra-compact labels
2. OPTION B: Enforce strict 12px minimum (change Track 1 to use --text-xs)
3. OPTION C: Document 11px as ACCEPTABLE exception for metadata (update prohibitions.md)

**Recommended:** OPTION B (change Track 1 to 12px — simpler than adding token)

**Estimated fix time:** 2 min (single value change)

---

## GAP-009: Header/Footer Dark Theme Not in Components.css

**Type:** Missing Component
**Severity:** MEDIUM
**Page(s) affected:** Variant D (custom dark header), Track 1 (light header only)

**Surface manifestation:**
Variant D implemented dark header (`background: var(--bg-dark); color: var(--bg-warm); border-top: 3px solid var(--color-primary)`) as CUSTOM CSS, not library component.

Track 1 used light header from components.css. Dark header pattern EXISTS in validated-explorations (OD-004, CD-006) but NOT extracted to components.css.

**Root cause:**
component-merger during Phase C extraction merged `.page-header` but used DD/OD light variant, NOT CD dark variant. Dark header present in 6/27 files (22%) but below MEDIUM confidence threshold (4-7 files = 14-25%).

**Library cause:**
components.css line 204-232 defines ONLY light header:
```css
.page-header {
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-6);
  background: white;
}
```

Missing:
```css
.page-header--dark {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);
}
```

**Extraction decision that caused this:**
Merger used FREQUENCY tiebreaker (light header more common), but dark header is HIGHER QUALITY (CD-006 crown jewel uses dark). This is VISUAL IMPACT vs FREQUENCY tradeoff.

**Remediation:**
1. Add to components.css:
```css
.page-header--dark {
  background: var(--color-text);
  color: var(--color-background);
  border-top: 3px solid var(--color-primary);
}
```

2. Update component-inventory.md: page-header (2 variants: default light, --dark modifier)

**Estimated fix time:** 15 min (CSS addition + inventory update)

---

## GAP-010: Responsive Padding Floor Not Enforced

**Type:** Insufficient Pattern
**Severity:** MEDIUM
**Page(s) affected:** ALL builds (32px padding floor NOT programmatically verified)

**Surface manifestation:**
Perceptual-auditing skill defines 32px padding floor guardrail, but Phase D builds show VARIABLE mobile padding:
- Track 1: Reduces to var(--space-4) = 16px ❌
- Variant A: Maintains 32px ✅
- Variant C: Custom (needs measurement)
- Variant D: Custom (needs measurement)

**Root cause:**
Guardrail defined in skill (Phase 7 verification) but NOT enforced in components.css responsive rules. Builders can violate floor if they implement custom @media queries.

**Library cause:**
components.css lines 1124-1151 responsive utilities do NOT enforce padding floor:
```css
@media (max-width: 768px) {
  .answer {
    padding: var(--space-4, 16px); /* VIOLATES 32px floor */
  }
}
```

Should be:
```css
@media (max-width: 768px) {
  .answer {
    padding: var(--space-8, 32px); /* RESPECTS floor */
  }
}
```

**Extraction decision that caused this:**
Phase C extracted responsive patterns AS-IS from explorations without NORMALIZING to guardrails. Skill enrichment added guardrails to perceptual-auditing AFTER components were extracted.

**Remediation:**
1. Audit components.css ALL @media rules for padding < 32px violations
2. Update responsive rules to respect floor:
   - Horizontal padding: MAY reduce to 16px (screen width constraint)
   - Vertical padding: MUST maintain 32px minimum (guardrail)
3. Document in responsive-strategy.md: "Mobile padding floor: 32px vertical, 16px horizontal"

**Estimated fix time:** 1 hour (audit + fix ~10 responsive rules)

---

## GAP-011: Stats Bar Component Ambiguity

**Type:** Missing Component (borderline)
**Severity:** LOW
**Page(s) affected:** Track 1 (component counted but visually identical to table)

**Surface manifestation:**
Track 1 content annotation: `<!-- COMPONENT: stats-bar -->` but implementation uses STANDARD TABLE, not distinct `.stats-bar` component from components.css.

**Root cause:**
components.css defines TWO stats-bar patterns:
1. `.stats-bar` (DD/OD pattern: flex segments with borders)
2. `.stat-item` (CD pattern: vertical label/value pairs)

Track 1 content needed HORIZONTAL comparison matrix → used TABLE instead. Stats-bar component is for METRICS DISPLAY (5 numbers in a row), not COMPARISON (4 approaches × 12 factors).

**Library cause:**
Component naming ambiguity: "stats bar" sounds like it could handle comparison tables, but components.css stats-bar is ONLY for metric display (e.g., "Lines: 1234, Files: 56, Coverage: 89%").

**Extraction decision that caused this:**
Phase C extraction called it "stats-bar" (from DD/OD/CD frequency), but USAGE is different:
- DD/OD: Metadata display (file count, word count, etc.)
- Track 1 content: Comparison matrix (approach × factor grid)

These are DIFFERENT use cases. Table is CORRECT choice for Track 1.

**Remediation:**
1. OPTION A: Rename component to `.metadata-bar` (clearer purpose)
2. OPTION B: Update usage-criteria.md: "Stats-bar for metrics, tables for comparisons"
3. OPTION C: Accept table as correct, remove stats-bar annotation from content

**Recommended:** OPTION B + OPTION C (document usage, fix content annotation)

**Estimated fix time:** 10 min (documentation update)

---

## SUMMARY BY TYPE

**Missing Component:** 2 gaps (GAP-004, GAP-009)
**Broken Interface:** 1 gap (GAP-001)
**Insufficient Pattern:** 4 gaps (GAP-002, GAP-003, GAP-006, GAP-010)
**Agent Error:** 4 gaps (GAP-002, GAP-005, GAP-007, GAP-008, GAP-011)

---

## SUMMARY BY SEVERITY

**CRITICAL:** 3 gaps (GAP-001, GAP-002, GAP-003)
**HIGH:** 3 gaps (GAP-004, GAP-005, GAP-006)
**MEDIUM:** 3 gaps (GAP-007, GAP-009, GAP-010)
**LOW:** 2 gaps (GAP-008, GAP-011)

---

## SUMMARY BY AFFECTED BUILD

**Track 1:** 2 gaps (GAP-008, GAP-011)
**Variant A:** 1 gap (GAP-003)
**Variant B:** 2 gaps (GAP-003, GAP-005)
**Variant C:** 2 gaps (GAP-001, GAP-004)
**Variant D:** 1 gap (GAP-009)
**ALL builds:** 5 gaps (GAP-002, GAP-006, GAP-007, GAP-010)

---

## TOTAL FIX TIME ESTIMATE

- CRITICAL (3 gaps): 3.5 hours
- HIGH (3 gaps): 3.5 hours
- MEDIUM (3 gaps): 2.25 hours
- LOW (2 gaps): 0.2 hours

**TOTAL:** 9.45 hours (1.2 days of work)

**Priority 1 (CRITICAL):** GAP-001, GAP-002, GAP-003 (must fix before Phase D-V2)
**Priority 2 (HIGH):** GAP-004, GAP-005, GAP-006 (fix before Phase E migration playbook)
**Priority 3 (MEDIUM/LOW):** GAP-007 through GAP-011 (fix opportunistically)

---

**END GAP CATALOG**
