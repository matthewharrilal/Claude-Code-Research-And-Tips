# T5-B1: Builder Trace Simulation — Section 11 Structural Proposition

**Proposition traced:** "Amazon's 6 Mandates as authority-encoded list where mandate items have visual weight proportional to their importance in the argument"

---

## Step 1: Does the builder read Section 11?

YES — unambiguously. Reading Order (line 17) lists Section 11 explicitly: "Section 11: Structural Propositions (OPTIONAL — content-derived spatial layouts to consider. Decide ADOPT/MODIFY/REJECT for each)." It appears in position 6 within the research package, which is read FIRST in the overall reading order. The builder encounters it before the conviction brief, before content.md — early enough to internalize it before building.

## Step 2: Does the builder understand ADOPT/MODIFY/REJECT?

YES — the framework is stated THREE times with increasing specificity:
1. Line 17: brief mention in reading order ("Decide ADOPT/MODIFY/REJECT for each")
2. Lines 68-81: full decision framework with definitions for each option
3. Lines 387-393: decisions template with explicit per-proposition documentation slots

The triple-reinforcement is effective. No ambiguity about what the three choices mean.

## Step 3: Does the Standard/Structural Build Path flow naturally?

YES — the procedure (lines 202-216) is well-sequenced. For an ADOPTED proposition, the builder would:
1. Build standard vertical skeleton FIRST (all zones, all content, all breakpoints working)
2. THEN build the mandate list as a SELF-CONTAINED MODULE within its zone
3. Verify integration with surrounding zones
4. Verify responsive degradation at 768px
5. Cite with `/* STRUCTURAL: authority-encoded mandates — weighted list */`
6. Document in _pass-1-decisions.md

The "standard skeleton first" rationale (line 215: "If the structural module fails at responsive, you have a working vertical fallback") is compelling and should prevent the builder from over-committing to structure before having a working page.

## Step 4: Would the builder document the decision?

YES — the _pass-1-decisions.md template (lines 387-393) has a dedicated "Structural Choices (Section 11)" section with slots for proposition name, decision, CSS written, zone, and responsive strategy. The template also accounts for REJECTED decisions ("why: content doesn't need it / doesn't work at 768px / feels forced"). The "CRITICAL" note at line 395 reinforces that the file is not optional.

## Step 5: Does Pass 2's 3-category framework handle structural sections correctly?

YES — the STRUCTURAL EVOLUTION category (lines 129-138 of pass-2-prompt) is distinct from ENRICHMENT and PRESERVATION. However, there is a subtle distinction: Pass 2's structural evolution is for layout changes the Pass 1 builder DIDN'T see, not for deepening structural sections already adopted. For an ADOPTED Section 11 proposition, the Pass 2 builder would PRESERVE the structural module (not restructure it) and ENRICH it (add density within its existing spatial form). The 3-category framework correctly classifies this — enrichment within an existing structural zone is ENRICHMENT, not STRUCTURAL EVOLUTION. No confusion expected.

## Step 6: Does Pass 3 catch responsive degradation?

YES — Pass 3 has an explicit structural integrity checklist (lines 264-277) that verifies:
- Works at 1440px, 1024px, 768px
- Graceful degradation (typically grid to single column)
- STRUCTURAL citation comment exists
- Documented in decisions files
- Maximum 2 structural sections total
- Integration with surrounding zones

This is thorough. A weighted mandate list that breaks at 768px would be caught.

---

## Key Assessment: Is the "mandatory optional" paradox resolved?

**MOSTLY YES.** The prompt achieves this through three design choices:

1. **"OPTIONAL" in the reading order, "PERMITTED" in the edge case section.** The word OPTIONAL (line 17) prevents the builder from feeling obligated. The word PERMITTED (line 403) prevents pipeline culture from suppressing adoption. Together they create genuine optionality — the builder can adopt without guilt and reject without failure.

2. **Four conditions gate structural invention (lines 403-407).** These are all verifiable: content-derived (not decorative), proposed in Section 11 (not invented), documented in decisions, works at all breakpoints. This makes adoption feel SAFE — the builder has a checklist to confirm they're within bounds.

3. **The "maximum 2 per build" cap (line 207, line 409).** This prevents over-adoption — the builder can't adopt all 3 propositions. This constraint paradoxically makes adoption MORE likely, because the builder knows the scope is bounded.

**One residual risk:** The word "OPTIONAL" appears once; the structural permission language appears in an "Edge Case" section (line 399). A builder who reads quickly might weight "OPTIONAL" more heavily than the permission language because it appears in the primary reading order while the permission is in a section labeled "Edge Case." The permission should arguably be in the main Section 11 instructions (lines 68-81), not buried in edge cases. However, the ADOPT/MODIFY/REJECT framework at lines 68-81 implies permission by its very structure — you don't offer ADOPT as a choice if adoption is discouraged.

## Does the procedure flow naturally?

**YES.** Standard skeleton first, then structural module — this is intuitive and safe. The builder has a working page before taking any structural risk.

## Is the decisions template clear enough for the weaver?

**YES.** The template explicitly asks for proposition name, decision, CSS written, zone, and responsive strategy. A weaver reading this can immediately assess whether the structural adoption served the content or was forced. The REJECTED documentation slot ("why: content doesn't need it / doesn't work at 768px / feels forced") is especially useful — it tells the weaver the builder considered the proposition seriously even when rejecting it.
