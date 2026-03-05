# Wave 2 Retrospective: Synthesizer Integration Layer

## 1. Section 11 Assembly Protocol

**Verdict: CLEAR and well-structured.** Lines 322-387 define a 6-step assembly protocol (read TC Section 7, check for Linear Narrative, draft proposition, cross-reference S3/S1/S2, include blueprint CSS, cap at 3). The priority hierarchy (TC Section 7 > S3 structural logic > S1 convergence > S2 chain evidence) directly addresses Wave 1 Retro Gap 2 (no spatial resolution hierarchy). The "when empty" path (single-line output for Linear Narrative) prevents false positives. Blueprint CSS includes responsive degradation and a standard vertical alternative per proposition. This section is the strongest Wave 2 addition.

## 2. Section 10 Structural Families

**Verdict: NATURAL fit alongside texture families.** The 5 structural question families (Parallel Revelation, Reading Path Choice, Structural Self-Awareness, Content-Form Mirroring, Temporal Architecture) sit in a clearly separated table after the 5 texture families (lines 261-270). The guard rail ("select 0-1 structural question ONLY when TC Section 7 identifies a non-linear archetype") prevents structural questions from appearing on linear content. The question count target updated correctly: "5-8 questions total: 4-6 texture + 0-1 structural + 1 cross-specialist" (line 243). The structural families complement rather than compete with texture families because they operate on different axes (spatial organization vs. visual channel coordination).

## 3. Section 9 Consumption Protocol

**Verdict: Section 11 correctly positioned.** Step 5 (lines 215-218) reads: "EVALUATE Section 11 (Structural Propositions, if present)." This sits after Section 10 (compositional questions) and before the BUILD step, which is the correct sequencing — the builder decides ADOPT/MODIFY/REJECT before starting skeleton construction. The Standard/Structural build path fork is mentioned clearly. The `/* STRUCTURAL: [content-logic] -- [spatial form] */` citation prefix is present in the anti-orphaning block (line 233), closing Wave 1 Gap 5.

## 4. Line Counts and File Structure

**Verdict: CONSISTENT with minor tightness.** Pass 1 target updated to 280-360 lines (line 81) to accommodate Section 11's 50-80 lines. The quality floor checklist (line 644) lists Section 0, 1, 2, 9, 10, 11 for Pass 1. The total target is 600-740 lines (line 648) vs. the pre-surgery 470-610. Section numbering is consistent throughout — no orphaned references to old numbering. Pass 2 line target increased to 180-230 (line 645, +50 for richer Section 3), Pass 3 to 140-180 (line 646, +30 for richer Section 7). Minimum per-file floor raised from 100 to 130 (line 647). All internally consistent.

## 5. Builder-Pass-1 Backward Compatibility

**Verdict: SAFE.** Builder-pass-1 is UNCHANGED at 385 lines. Its reading order (line 11-16) lists Sections 0, 1, 2, 9, 10 — Section 11 is not mentioned. However, Section 9's consumption protocol (written by the synthesizer INTO the package) will contain Step 5 referencing Section 11. The builder will encounter Section 11 as additional content in the package file, and Section 9 will tell them how to evaluate it. If Section 11 is empty ("No structural propositions"), the builder reads one line and moves on. If present, the ADOPT/MODIFY/REJECT instruction is self-contained in the proposition format. The builder prompt does not need to change for this to work — the package carries the instructions. Wave 3 builder changes can add explicit structural build instructions, but the current builder will not break.

**One format gap for Wave 3:** The builder prompt's "Outputs" section (line 326-355) defines `_pass-1-decisions.md` with sections for Metaphor, Zone Architecture, Mechanisms, Questions Explored, CSS Naming, Responsive Strategy, and Open Questions. It does NOT include a section for structural proposition decisions. Wave 3 should add a "Structural Decisions" section to the decisions template so Pass 2 knows whether the builder adopted any propositions.

## 6. Format Mismatches for Wave 3

**Mismatch 1 — Transition Table.** Builder-pass-1 line 166-184 requires a transition table as an HTML comment BEFORE writing CSS. If a structural proposition is adopted (e.g., a grid layout for a taxonomy section), the transition table format (zone-to-zone linear transitions) does not accommodate non-linear spatial forms. Wave 3 should add a structural variant to the transition table template.

**Mismatch 2 — Build Process: Boundary-by-Boundary.** Builder-pass-1 line 149-164 instructs "build zone-by-zone." If a structural proposition creates a non-zone spatial module (e.g., a grid within a zone), the boundary-by-boundary process needs a note: "For adopted structural propositions, build the structural module as a self-contained unit within its parent zone — standard zone progression applies to the surrounding layout."

**Mismatch 3 — Section 10 question count in builder.** Builder-pass-1 line 52 says "5-7" questions while synthesizer line 243 says "5-8 questions total." Minor — the builder instruction ("explore 2-3") is unaffected, but the count reference should be aligned in Wave 3.

## 7. TC Derivation Coherence

TC prompt (123 lines) includes Section 7 (Structural Observation) with content archetype table and spatial proposition requirement (lines 36-39, 93-107). The archetype table matches the structural question families in the synthesizer (same archetypes: Parallel Items, Hierarchical Taxonomy, etc.). The "Standard vertical for Linear Narrative" guard appears in both TC (line 107) and synthesizer Section 11 (line 329). S3's Structural Logic Extraction (lines 103-148) feeds directly into the synthesizer's assembly protocol Step 4. The upstream chain is complete.

## 8. Overall Readiness for Wave 3

**Ready with 3 specific Wave 3 tasks identified:**
1. Add "Structural Decisions" to builder-pass-1 decisions template
2. Add structural variant to transition table format
3. Add boundary-by-boundary note for structural modules within zones

No blocking issues. The synthesizer modifications are coherent, the Section 11 assembly protocol is clear, the consumption protocol correctly sequences structural evaluation, and the unchanged builder-pass-1 will consume packages containing Section 11 without breaking.
