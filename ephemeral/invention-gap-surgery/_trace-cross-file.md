# Cross-File Consistency Trace (T5-CROSS)

14 files checked. 9 consistency dimensions assessed.

## 1. Section 11 Naming
**CONSISTENT.** All files that reference it use "Section 11" as the number and "Structural Propositions" as the name. Verified in: tc-derivation.md (Section 7 "Structural Observation" — this is the TC brief's input, not Section 11 itself), specialist-1-prompt.md (line 122: "Section 11"), specialist-5-prompt.md (lines 69-72: "Section 11" + "Structural Propositions"), synthesizer-prompt.md (line 322: "Section 11: Structural Propositions"), builder-pass-1-prompt.md (lines 68, 70: "Section 11" + "Structural Propositions"), SKILL.md (lines 343, 376, 432: "Section 11" + "Structural Propositions"), weaver-prompt.md (lines 119-153: "Section 11" + "Structural Propositions"). Note: builder-pass-2, builder-pass-3, pa-auditor, and refine-builder do NOT reference Section 11 — correct, as Section 11 is Pass 1 only.

## 2. E-21/E-22/E-23 References
**CONSISTENT.** pa-auditor-prompt.md defines E-21, E-22, E-23 with full question text and perceptual language guidance (lines 51-61). SKILL.md references E-21/E-22/E-23 in auditor assignments (lines 576-585) with matching short descriptions. weaver-prompt.md does NOT explicitly reference E-21/E-22/E-23 by number — it references "structural variety metrics" generically. This is acceptable: the weaver synthesizes ALL auditor responses, not specific question numbers.

## 3. Content Archetype Names
**CONSISTENT.** tc-derivation.md defines the canonical archetype table (lines 97-106): Linear Narrative, Parallel Items, Hierarchical Taxonomy, Dialogue/Debate, Branching Paths, Cyclical/Recursive, Hybrid. synthesizer-prompt.md references these by name (line 271: "Parallel Items, Hierarchical Taxonomy, Branching Paths"; lines 329, 374: "Linear Narrative"). No specialist files reference archetypes by name (correct — archetypes are TC-level concepts that flow through Section 7, not through specialist outputs).

## 4. `/* STRUCTURAL */` Citation Format
**CONSISTENT.** The format `/* STRUCTURAL: [content-logic] — [spatial form] */` appears identically in: specialist-5-prompt.md (lines 126-128), synthesizer-prompt.md (lines 233, 355), builder-pass-1-prompt.md (line 212), builder-pass-2-prompt.md (line 136), builder-pass-3-prompt.md (line 271). All use em-dash separator between content-logic and spatial form.

## 5. Line Count Targets in SKILL.md
**CONSISTENT.** SKILL.md (lines 333, 347, 352) specifies: Pass 1 ~280-360 lines, Pass 2 ~180-230 lines, Pass 3 ~140-180 lines. synthesizer-prompt.md (lines 81, 391, 509) specifies the same ranges. No mismatch.

## 6. ADOPT/MODIFY/REJECT Terminology
**CONSISTENT.** Used in: specialist-5-prompt.md (line 69), synthesizer-prompt.md (lines 216-217, 345), builder-pass-1-prompt.md (lines 77-79, 202-214, 391-392, 406), SKILL.md (line 432), weaver-prompt.md (lines 125-127, 153). All use the same three-term framework with consistent semantics.

## 7. "Standard/Structural Build Path"
**CONSISTENT.** synthesizer-prompt.md (line 216-217): "Standard/Structural build path". builder-pass-1-prompt.md (line 202): "Standard/Structural Build Path" as section header. SKILL.md (line 432): "Standard/Structural Build Path". Minor capitalization variation (lowercase in synthesizer vs title case in builder) — not a functional inconsistency.

## 8. Dead Ends (Produced but Not Consumed)
**ONE POTENTIAL ISSUE.** S1 produces a "Spatial Implication" field per HIGH finding (specialist-1-prompt.md line 90) and a "Spatial Convergence Note" (line 113-123). The synthesizer-prompt.md DOES reference "S1 Spatial Convergence" (lines 336, 377) as a tertiary source for Section 11 assembly. The per-finding "Spatial Implication" field is consumed indirectly: the synthesizer reads all S1 output as one of its 5 inputs. **No dead end — the data flows.** S2 also produces "Spatial Implication" per finding (specialist-2-prompt.md line 135), and the synthesizer references "S2 Spatial Implication validation" (lines 337, 378). **No dead ends detected.**

## 9. Orphaned References
**ONE MINOR ISSUE.** specialist-1-prompt.md line 122 references "Section 11" as a note for the Synthesizer: "This convergence suggests Section 11 should include a structural proposition for [specific content section]." This is correct — S1 provides upstream signal to the synthesizer. No orphaned reference. However: synthesizer-prompt.md Section 8 (lines 584-613) in Pass 3 is titled "Structural Propositions" — same name as Section 11 in Pass 1 but with DIFFERENT content (testable hypotheses vs spatial layout propositions). This name collision between Section 8 and Section 11 could confuse agents. Section 8 is about metaphor-manifestation hypotheses; Section 11 is about content-derived spatial layouts. The content is distinct but the shared "Structural Propositions" name is a naming collision risk.

---

## Summary

| Check | Result |
|-------|--------|
| 1. Section 11 naming | CONSISTENT |
| 2. E-21/E-22/E-23 references | CONSISTENT |
| 3. Content archetype names | CONSISTENT |
| 4. `/* STRUCTURAL */` citation | CONSISTENT |
| 5. Line count targets | CONSISTENT |
| 6. ADOPT/MODIFY/REJECT | CONSISTENT |
| 7. Standard/Structural Build Path | CONSISTENT |
| 8. Dead ends | CONSISTENT (no dead ends) |
| 9. Orphaned references | MINOR ISSUE — Section 8 "Structural Propositions" (Pass 3) name-collides with Section 11 "Structural Propositions" (Pass 1). Different content, same label. Risk: builder or weaver conflates the two. Recommend renaming Section 8 to "Compositional Hypotheses" or "Metaphor Manifestation Tests" to disambiguate. |
