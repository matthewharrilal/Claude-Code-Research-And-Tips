# Review: Builder Pass 1/2/3 Prompts

**Reviewer:** Fresh-eyes adversarial reviewer (zero context from writers)
**Files reviewed:**
- `prompts/builder-pass-1-prompt.md` (301 lines)
- `prompts/builder-pass-2-prompt.md` (305 lines)
- `prompts/builder-pass-3-prompt.md` (335 lines)

**Compared against:**
- `TRIPOD-PIPELINE-SPECIFICATION.md` (Sections 6.2-6.4 primarily)
- `~/.claude/skills/compose/SKILL.md` (Phase 2 — current builder protocol)

---

## CHECKLIST EVALUATION

### 1. Reading Order — PASS (all 3)

- **Pass 1:** Explicit 5-step order: Package → Brief → Content → Tokens → Components. Line 11-25. Includes rationale ("If you read tokens first, you will compose from available tools rather than from conviction"). Matches spec Section 6.2 ordering.
- **Pass 2:** Explicit 3-step order: Package → Decisions → HTML. Lines 11-28. Rationale provided.
- **Pass 3:** Explicit 4-step order: Package → Pass 1 Decisions → Pass 2 Decisions → HTML. Lines 11-22. Rationale: "Anti-patterns FIRST so you read the HTML with a defensive lens."

All three are clear and justified. No ambiguity.

### 2. CITE Requirement — PASS (all 3)

- **Pass 1:** Lines 172-186. Explicit requirement: "Before writing CSS for any zone, CITE which research package finding drives your decision." Includes CSS comment example (`/* PACKAGE S2-M03: ... */`). Also includes self-check: "If you cannot cite a package finding for a CSS decision, ask yourself: Am I inventing this?"
- **Pass 2:** Lines 110-123. Explicit: "Add a CITE comment — trace the CSS back to the finding." Example uses finding IDs (`/* FINDING DD-F-006: ... */`). Also line 157: cite adapted case study CSS.
- **Pass 3:** Lines 106-114 for anti-pattern fixes. Line 133-137 for validated CSS integration. Both require cite comments.

Consistent across all 3 passes. Good.

### 3. "DO NOT Rebuild" Prohibition — PASS

- **Pass 2:** Line 5: `**CRITICAL RULE: DO NOT rebuild from scratch. Refine what exists.**` Bold, first thing after the title. Also reinforced at line 78: "Start with an empty file and rebuild" under DO NOT list.
- **Pass 3:** Line 5: `**CRITICAL RULE: This is a HARDENING pass, not a creative pass. Do not add new features. Fix, polish, and verify.**` Line 70: "Start from scratch (this applies in EVERY pass)" under DO NOT list.
- **Pass 1:** Not applicable (it IS the initial build). Confirmed absent. Correct.

### 4. Continuity Bridge (_pass-N-decisions.md) — PASS with OBSERVATIONS

- **Pass 1 output:** Lines 247-270. `_pass-1-decisions.md` format fully specified with 6 sections: Metaphor Applied, Zone Architecture, Mechanisms Deployed, CSS Naming Vocabulary, Responsive Strategy, Open Questions for Pass 2. Line 272: "The decisions file is not optional. Pass 2 depends on it for continuity."
- **Pass 2 input:** Line 16-22: Reads `_pass-1-decisions.md` as step 2. Explicitly lists what it contains (metaphor, zones, mechanisms, naming, responsive, open questions). Lines 38-49: Full continuity protocol before writing any CSS.
- **Pass 2 output:** Lines 245-268. `_pass-2-decisions.md` format specified with 6 sections: Findings Deployed, Density Adjustments, Case Study Techniques, Density Self-Assessment, Changes to Zone Architecture, Concerns for Pass 3.
- **Pass 3 input:** Lines 16-18: Reads `_pass-1-decisions.md` (step 2) and `_pass-2-decisions.md` (step 3). Lines 30-34: "Read both decisions files completely."

The chain is complete: Pass 1 writes → Pass 2 reads + writes → Pass 3 reads both. Formats are specified. Continuity protocol is explicit in Pass 2 and Pass 3.

**Observation:** Pass 2's decisions template doesn't include a "CSS Naming Vocabulary" section, but says to preserve naming (line 42: "use the SAME names — do not rename"). This is fine because Pass 1's decisions already established the vocabulary and Pass 3 is told to read both. However, if Pass 2 ADDS new custom property names (which it reasonably might for new enrichment CSS), there's no explicit instruction to document those new names. Minor gap — not blocking.

### 5. Soul Constraints — PASS (all 3)

- **Pass 1:** Lines 51-81. Full soul constraints section with CSS examples: border-radius: 0, box-shadow: none, no gradients, no semi-transparent backgrounds, no cool grays, container 940-960px. Also repeated in validation checklist lines 215-221.
- **Pass 2:** Lines 185-194. Explicit "Soul Constraints Reminder" section. Repeats the core constraints. Also in validation checklist lines 227-231.
- **Pass 3:** Lines 200-211. Full "Soul Constraints (FINAL CHECK)" section. Complete list including hover lift effects and Google Fonts check. Most comprehensive of the three (correct, since it's the final check).

All three passes carry soul constraints. Good redundancy.

### 6. HTML Integrity Check — PASS (Pass 2 and Pass 3)

- **Pass 2:** Lines 84-91. 4-point check: style block exists, Google Fonts links, content sections present, valid HTML parsing. Includes "If the HTML is broken or incomplete, document the issue in _pass-2-decisions.md and fix it before enriching."
- **Pass 3:** Lines 74-84. 5-point check: style block, Google Fonts, content sections, valid HTML, custom properties from Pass 1 still in :root. Adds the custom property preservation check (appropriate for final pass).
- **Pass 1:** Not applicable (there's no incoming HTML). Correctly absent.

### 7. Concept-Based CSS Naming — PASS

- **Pass 1:** Lines 109-128. Full section "CSS Naming Convention: Concept-Based." DO/DON'T examples. Explicit: "All VALUES must still come from tokens.css custom properties. Your NAMES encode the metaphor; the VALUES are from the design system."
- **Pass 2:** Line 42: "The CSS naming vocabulary (use the SAME names — do not rename)." Line 75: "Rename custom properties (this breaks the metaphor vocabulary)" under DO NOT.
- **Pass 3:** Line 47 (preserve custom property names), line 68 (DO NOT rename custom properties).

Pass 1 establishes the convention; Passes 2 and 3 preserve it. Correct.

### 8. Responsive Requirements — PASS (all 3)

- **Pass 1:** Lines 189-207. Full responsive section with @media breakpoints (1024px, 768px). Specific instructions for 768px: "minimum 16px body," "no horizontal overflow," "meaningful layout adaptation."
- **Pass 2:** Lines 198-205. "Responsive Enrichment" section: each new component must work at all 3 breakpoints. Bento grids need responsive collapse.
- **Pass 3:** Lines 239-246. "Responsive (FINAL CHECK)": 6-point checklist covering all three viewports.

All three breakpoints (1440, 1024, 768) covered in all 3 passes.

### 9. Google Fonts Link — PASS

- **Pass 1:** Lines 87-105. Full HTML document structure template with Google Fonts `<link>` tags (Instrument Serif, Inter, JetBrains Mono with preconnect). This is the canonical template that Passes 2 and 3 inherit.
- **Pass 2:** Line 76: "Replace the HTML document structure (same `<!DOCTYPE>`, same `<head>`, same Google Fonts links)" under DO NOT. Also line 88: integrity check includes "Does it contain Google Fonts `<link>` tags? If not, add them."
- **Pass 3:** Line 79: "Does it contain Google Fonts `<link>` tags? If missing, add them." Also line 209 in final check.

### 10. Builder Reflection — PASS

- **Reflection is ONLY in Pass 3:** Lines 257-286. `_builder-reflection.md` with 6 dimensions: Conviction Fidelity, Alternatives Considered, Surprises, Impulses Resisted, Experience Quality, Unresolved Tensions. Full template with guiding questions per dimension.
- **NOT in Pass 1 or Pass 2:** Confirmed. Pass 1 outputs `_pass-1-decisions.md` (continuity doc, not reflection). Pass 2 outputs `_pass-2-decisions.md` (continuity doc, not reflection). Correct per spec (Section 6.4: "Also outputs: `_builder-reflection.md`" only in Pass 3).

The 6 dimensions are fully specified with example prompts. Matches spec requirement.

### 11. Pass 3 Structural Propositions — PASS

- Lines 143-154. Full protocol for testing propositions:
  1. "Read the current HTML with this proposition in mind"
  2. "If YES: Document the CSS evidence (which rules produce this effect)"
  3. "If NO: Make a MINIMAL CSS adjustment"
  4. "If IMPOSSIBLE without restructuring: Document the gap"

Includes explicit guidance on HOW to test: read with proposition in mind, look for CSS evidence, make minimal adjustments. Correctly notes propositions are "ASPIRATIONAL, not mandatory."

### 12. Edge Cases — PASS (all 3)

- **Pass 1:** Lines 276-289. Two edge cases: (a) thin package (<3 mechanism selections), (b) brief conflicts with package (visual vs CSS decision tiebreaker). Both are practical and well-reasoned.
- **Pass 2:** Lines 274-293. Three edge cases: (a) broken Pass 1 HTML, (b) findings conflict with Pass 1 decisions, (c) thin package (<10 findings). All include specific resolution protocols.
- **Pass 3:** Lines 292-317. Three edge cases: (a) broken Pass 2 HTML, (b) anti-patterns requiring structural changes, (c) multiple check failures (priority ordering: soul → structural → perceptual → responsive).

Good coverage. Edge cases are realistic and the resolution protocols are specific.

### 13. Rotation Logic (CRITICAL) — PASS

- **Pass 1 receives:** `_package-pass-1.md` (containing Sections 0, 1, 2, 9). Line 11: "Research Package (_package-pass-1.md) — READ FIRST." No reference to package-pass-2 or package-pass-3 anywhere in the file.
- **Pass 2 receives:** `_package-pass-2.md` (containing Sections 3, 4, 5). Line 11: "Research Package (_package-pass-2.md) — READ FIRST." No reference to package-pass-1 or package-pass-3 anywhere.
- **Pass 3 receives:** `_package-pass-3.md` (containing Sections 6, 7, 8). Line 11: "Research Package (_package-pass-3.md) — READ FIRST." No reference to package-pass-1 or package-pass-2 anywhere.

**ZERO cross-contamination.** Each prompt names ONLY its assigned package file. The rotation mechanism is clean.

Verified against spec Section 6.2-6.4 file routing:
- Pass 1: `_package-pass-1.md` (PRIMACY) + content.md + _tc-brief.md + tokens.css + components.css -- **MATCH**
- Pass 2: `_package-pass-2.md` (PRIMACY) + _pass-1-decisions.md + _build-pass-1.html -- **MATCH**
- Pass 3: `_package-pass-3.md` (PRIMACY) + _pass-1-decisions.md + _pass-2-decisions.md + _build-pass-2.html -- **MATCH**

---

## COMPARISON WITH EXISTING /compose BUILDER

The current `/compose` skill (Phase 2) uses a SINGLE builder pass with a monolithic prompt. Key differences:

| Aspect | /compose Phase 2 | Tripod Builder Passes 1-3 |
|--------|------------------|---------------------------|
| Passes | 1 (single shot) | 3 (rotation) |
| Input files | 7 static files (~1,053 lines) | Per-pass curated package (~130-170 lines each) |
| Continuity | N/A (single pass) | _pass-N-decisions.md chain |
| CITE requirement | No | Yes (all 3 passes) |
| Concept CSS naming | Mentioned briefly | Full section with DO/DON'T |
| Edge cases | None specified | 2-3 per pass |
| HTML integrity check | Basic (post-build validation) | Pre-work validation in Pass 2/3 |
| Transition table | Mentioned in passing | Required as HTML comment before CSS |
| Builder reflection | Requested as afterthought | Structured 6-dimension template (Pass 3 only) |
| Richness standard | Implicit | Explicit: perceptual minimum deltas |

**Assessment:** The tripod prompts are significantly more structured and actionable than /compose Phase 2. The rotation mechanism properly addresses the attention trough problem. The continuity bridge through decisions files is well-designed. The CITE requirement creates traceability that /compose lacks entirely.

---

## ISSUES FOUND

### ISSUE 1: Pass 2 missing _tc-brief.md in reading order — MEDIUM

**Spec Section 6.2 file routing says Pass 1 receives _tc-brief.md.** Pass 1 prompt correctly includes it (step 2 in reading order). But the spec Section 6.3 file routing for Pass 2 does NOT list _tc-brief.md — only `_package-pass-2.md`, `_pass-1-decisions.md`, and `_build-pass-1.html`. The Pass 2 prompt matches the spec (no _tc-brief.md).

**However:** Pass 2's case study integration (Section 5) says "Use YOUR metaphor's naming vocabulary" — the metaphor comes from the brief. Pass 1's decisions file is supposed to carry the metaphor forward, but if the decisions file is thin (the 20-30 line summary), the Pass 2 builder may not have enough metaphor context to properly adapt case study CSS.

**Recommendation:** This is actually BY DESIGN per the spec — the decisions file IS the continuity bridge for the metaphor. No action needed, but flag for monitoring: if Pass 2 builders consistently fail to maintain metaphor coherence, consider adding _tc-brief.md to Pass 2's input.

### ISSUE 2: Pass 1 reading order doesn't match spec's file delivery order — LOW

**Spec Section 6.2** says Pass 1 receives files in this order: (1) _package-pass-1.md, (2) content.md, (3) _tc-brief.md, (4) tokens.css, (5) components.css, (6) builder instructions.

**Pass 1 prompt** specifies reading order as: (1) package, (2) brief, (3) content, (4) tokens, (5) components. Note: brief is step 2, content is step 3. In the spec, content is step 2 and brief is step 3.

**Impact:** The prompt's reading order (package → brief → content) is arguably BETTER than the spec's delivery order (package → content → brief), because internalizing the metaphor before reading the content helps the builder map content to zones with creative intent. The spec's delivery order is about what the orchestrator passes to the agent prompt, not the builder's internal reading order.

**Recommendation:** This is fine. The prompt has the better ordering. If the orchestrator passes files in spec order, the builder's explicit reading order instruction overrides. No action needed.

### ISSUE 3: Richness standard inconsistency — LOW

**Pass 1** (lines 293-300): "Richness = semantic density x restraint x spatial confidence." Includes: every CSS rule visible at 100% zoom, no sub-perceptual values (letter-spacing >= 0.025em, background deltas >= 15 RGB), zone boundaries shift 3+ channels. Also "80% creative authority."

**Pass 2** (lines 296-304): Lists minimum requirements: 3+ channels at zone boundaries, 15 RGB background deltas, 3+ typography zones, 3+ border configurations, visible density progression. Does NOT repeat the 80% creative authority or the sub-perceptual thresholds.

**Pass 3** (lines 224-235): "Perceptual Minimum (FINAL CHECK)": includes all of Pass 2's requirements PLUS display-body font size delta >= 10px, letter-spacing >= 0.025em, total stacked gap <= 120px, 8+ component library instances.

**Issue:** Pass 3's perceptual minimums are the most comprehensive. Pass 1 has the sub-perceptual thresholds. Pass 2 has a subset. The Pass 3 checks are new requirements that didn't appear in earlier passes — a builder following only Pass 1 and 2 instructions might produce output that fails Pass 3's checks (e.g., the 8+ component library instances requirement first appears in Pass 3).

**Recommendation:** This is actually appropriate for a hardening pass — Pass 3 should catch things the earlier passes didn't enforce. But the "8+ component library class instances" metric is new and could be surprising. Consider whether Pass 1 should at minimum mention the component integration expectation so the structural foundation includes enough components. Otherwise, Pass 3 will be forced to add components, which feels more like enrichment than hardening.

### ISSUE 4: Pass 3 universal anti-patterns include "2px border epidemic" — NOT in spec — LOW

Pass 3 lines 118-122 list universal anti-patterns including "2px border epidemic" (any 2px border is BANNED, use 1px or 3px only). This specific rule does not appear in the spec's Section 6.4 description. It appears to come from project memory (accumulated knowledge about anti-patterns).

**Recommendation:** This is fine — the spec says Section 6 contains anti-patterns "risk-profiled for THIS content," and these universal anti-patterns supplement the content-specific ones. The prompt is being more comprehensive than the spec requires, which is appropriate for a hardening pass. No action needed.

### ISSUE 5: No explicit token values or output size constraint for builder passes — OBSERVATION

The spec mentions in Obstacle 6: "Builder passes have max token limits in their prompts." None of the three builder prompts include an explicit max token/line limit. The spec's mitigation lists this as one way to control cost.

**Recommendation:** Not blocking. The spec acknowledges 60% fidelity on orchestrator enforcement. If cost overruns are observed, add line limits. For now, the prompts correctly prioritize quality over artificial capping.

---

## STRENGTHS

1. **Transition table requirement (Pass 1, line 148-166):** Requiring the builder to write a zone transition table as an HTML comment BEFORE writing CSS is excellent. This forces planning-before-execution, creating a blueprint the builder and subsequent passes can reference. Not present in /compose at all.

2. **Density self-assessment (Pass 2, lines 173-181):** Requiring the enrichment builder to assess density at three viewpoints (above-fold, mid-page, closing) and write it into the decisions file. This creates a self-diagnostic that Pass 3 can act on.

3. **The hardening mindset section (Pass 3, lines 322-335):** "Think of yourself as a final inspector, not a designer." "The best Pass 3 outcome is a page that looks identical to Pass 2 but has zero audit-catchable issues." This framing correctly prevents Pass 3 creative drift, which is a real risk with Opus builders.

4. **Conflict resolution hierarchy (Pass 1, lines 283-288):** Visual decisions → brief wins; CSS decisions → package wins. Clean, actionable. Eliminates ambiguity when inputs disagree.

5. **Anti-orphaning through CITE (all passes):** Every CSS decision must trace to a package finding. This creates the provenance chain the comparison report needs. Well-integrated across all three passes.

6. **Accessibility hardening (Pass 3, lines 157-194):** Skip link, ARIA landmarks, alt attributes, heading hierarchy, color contrast, focus styles. Appropriately placed in the hardening pass rather than earlier (where it would distract from compositional work).

---

## VERDICT

**APPROVE with no blocking issues.** All 13 checklist items pass. The 5 issues found are LOW to MEDIUM severity and none require changes before the prompts are used. The prompts are well-structured, comprehensive, maintain clean rotation isolation, and represent a significant quality improvement over the existing /compose builder protocol.

The continuity bridge mechanism (decisions files + HTML inheritance + explicit preservation rules) is well-designed and addresses the key challenge of multi-pass rotation with new agent spawns. The edge case coverage is thorough and practical.

**Risk to monitor:** Whether 20-30 line decisions files carry enough metaphor context for Pass 2/3 builders to maintain creative coherence. This is the weakest link in the continuity chain and will only be validated by live runs.
