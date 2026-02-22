# Execution Report Findings -- Key Issues for Pipeline Edits

**Source:** Other Claude instance that executed the MASTER-EXECUTION-PROMPT
**Date:** 2026-02-20

---

## BUG FIXES REQUIRED

### B1: Mechanism Count Threshold Gap (HIGH)
- **gate-runner.md:** >= 14 total AND >= 1 per category
- **SKILL.md:** >= 1 per category ONLY (the ">= 14 total" was DROPPED)
- **Impact:** SKILL.md allows 5 mechanisms (one per category) where gate-runner requires 14
- **Fix:** Add ">= 14 total" to SKILL.md DG-4 reference

### B2: Micro-Gates Converted to Honor System (HIGH)
- **gate-runner.md:** 4 orchestrator-run Playwright gates (MG-1 through MG-4) that BLOCK builder mid-build
- **SKILL.md:** 4 "checkpoints" that are BUILDER SELF-CHECKS (builder cannot run Playwright on own output)
- **Impact:** Entire micro-gate architecture = honor system with ~0% enforcement
- **Threshold differences:** MG-1 requires >= 5 ARIA, SKILL.md says >= 3. MG-3 requires >= 3 border configs, SKILL.md says >= 2 weights
- **Fix:** Either implement real orchestrator-driven micro-gates OR honestly label as self-checks and align thresholds

### B3: Behavioral Gates Missing from SKILL.md (MEDIUM)
- **gate-runner.md:** BG-1 (Metaphor Independence), BG-2 (Metaphor Structural) defined
- **SKILL.md:** Entirely absent -- zero reference to BG-1 or BG-2
- **Fix:** Add BG-1/BG-2 to SKILL.md gate summary

### B4: Gate-to-PA Context Not Routed (MEDIUM)
- **gate-runner.md:** Says gate results serve as "PA CONTEXT"
- **SKILL.md:** PA auditor prompts do NOT include _gate-results.json; auditors only receive screenshots
- **Fix:** Route _gate-results.json summary to weaver (not auditors -- preserve fresh-eyes)

### B5: DG-4 References _build-plan.yaml (MEDIUM)
- Builder never produces _build-plan.yaml
- DG-4 sub-checks reference fields from this non-existent file
- **Fix:** Either add _build-plan.yaml to builder deliverables OR restructure DG-4

### B6: TeamCreate vs Task Tool Ambiguity (LOW)
- SKILL.md says "Use TeamCreate" (lines 30, 204) but also "When spawning agents via the Task tool" (line 398)
- **Fix:** Resolve to one consistent mechanism

### B7: Zone Selector Fragility (HIGH)
- Every composition-critical gate depends on `document.querySelectorAll('[class*="zone"], section[data-zone], .section')`
- If builder uses different class names, ALL gates silently pass or return meaningless data
- **Fix:** Add zone selector validation gate or document required selectors in brief

### B8: Threshold Inconsistencies (LOW)
- 0.02em instead of 0.025em in 2 CLAUDE.md files
- **Fix:** Correct to 0.025em

### B9: Metaphor Pervasion Blind Spot (MEDIUM)
- No PA question directly asks "Does a single metaphor pervade the entire page?"
- PA-44 tests expression quality but not spatial coverage
- A page could have metaphor in sections 1-3 that disappears in sections 4-8
- **Fix:** Add coverage check or modify existing PA question

---

## ENRICHMENT FINDINGS

### E-FIX: Fix Cycle Recipe-to-Checklist Degradation (HIGH)
- Fix template has zero references to metaphor, conviction, fractal echo, or multi-coherence direction
- SKILL.md says "Compositional memory preservation is essential" but provides zero mechanism
- **Fix:** Add concept-level framing to fix cycle template

### E-CONTRA: Boundary-by-Boundary vs Channel-Grouped Contradiction (HIGH)
- Brief says "build BOUNDARY BY BOUNDARY"
- SKILL.md checkpoints grouped by CHANNEL ("After zone backgrounds... After borders...")
- **Fix:** Restructure checkpoints to boundary-grouped

### E-STACK: Stack Progression Absent (MODERATE)
- "Anti-scale" does not appear in any pipeline file
- Only implicit through section ordering
- **Fix:** Add 5-line bridge text between brief sections

### E-PHANTOM: Enhancement Channel Phantom Status (HIGH)
- Behavioral: 1 line definition, zero CSS examples, zero thresholds
- Material: 1 line, "surface treatment" undefined
- Phantom channels inflate multi-coherence denominator while practically unreachable
- Soul forbids gradients, so backgroundImage rarely differs
- **Fix:** Either provide CSS guidance or reduce multi-coherence denominator to 4 primary channels

### E-RETURN: Return Path Extinction (HIGH)
- Fix recipes reference gate IDs and tokens.css -- NEVER conventions-brief, metaphor, or multi-coherence
- Fix cycles operate at symptom level, not compositional level
- **Fix:** Add conventions-brief section references to fix routing

---

## HONEST ASSESSMENT (from executing instance)

- **Confidence PA-05 >= 3.0:** 5/10 (coin flip)
- **Expected range:** PA-05 2.5-3.5
- **Weakest part:** Zone selector fragility (single point of failure)
- **Strongest part:** Conventions brief world-description voice
- **Wish:** "Embed a completed conventions brief example (golden reference) as an appendix"
- **Key quote:** "The brief tells the builder everything about the INSTRUMENT but shows no MUSIC"
