# Flagship Preparation Exhaustive Cross-Reference

**Author:** FLAGSHIP-EXHAUSTIVE (Opus 4.6, Task #21)
**Date:** 2026-02-17
**Method:** Read all 21 flagship preparation files (executive summaries + key sections) and the enriched master execution prompt (530 lines). For each file, cataloged concrete specifications and verified their presence in the prompt.
**Master Prompt Source:** `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

---

## SUMMARY STATISTICS

| Metric | Count |
|--------|-------|
| Total specs identified across 21 files | 247 |
| Specs present in prompt (full or partial) | 189 |
| Specs MISSING from prompt | 58 |
| BLOCKING missing specs | 14 |
| HIGH missing specs | 22 |
| LOW / THEORETICAL missing specs | 22 |

---

### File 01: PA Lessons for Build-Embedded Quality
SPECS FOUND: 14
IN PROMPT:
- PA question tier ranking (Tier A: PA-09, PA-33, PA-35, PA-12, PA-05, PA-32, PA-01, PA-13, PA-30, PA-42) -> C4 auditor assignments route these questions
- PA-09 as highest diagnostic value -> S-12 void detection rule
- PA-05 calibration scores (Middle=4/4, Ceiling=1.5/4) -> B9 PA-05 scoring calibration
- PA-17/PA-41 elevation to critical -> B9 Auditor F primary assignment
- PA-50 through PA-53 void detection pipeline -> B9 Auditor C routing
- 5-second test concept -> A1 thesis (first 5 seconds)
- Cold look protocol -> C4 "5 seconds screenshot, gut reaction, THEN questions"
- "NO FINDING" mandatory reporting -> C4 "Each non-finding: NO FINDING for PA-XX"
- Severity classification (BLOCKING/SIGNIFICANT/MINOR) -> C4 finding format
- 9-auditor Mode 4 methodology -> C4 full deployment

MISSING:
1. **[HIGH] PA question weighting by tier.** File 01 ranks all 48 PA questions into 4 diagnostic tiers (A/B/C/D). The prompt assigns questions to auditors by TOPIC (spatial, typography, etc.) but does not communicate that Tier A questions (PA-09, PA-33, PA-35, PA-12, PA-05) should be treated with elevated scrutiny. Auditors assigned Tier D questions (PA-02, PA-06, PA-07) have no signal that these are low-diagnostic.
   - **Insertable:** Add to B9: "TIER A QUESTIONS (highest diagnostic value): PA-01, PA-05, PA-09, PA-12, PA-13, PA-30, PA-32, PA-33, PA-35, PA-42. Findings on Tier A questions MUST be reported even at MINOR severity."
2. **[LOW] False positive rate data.** File 01 documents 0% false positive rate for Tier A questions. Not needed in execution prompt but useful for auditor confidence.
3. **[LOW] Tier B question list for secondary scrutiny.** PA-20, PA-44, PA-10, PA-47 identified as moderate-diagnostic. Not individually surfaced.
4. **[HIGH] PA-09 severity recalibration.** File 01 documents PA-09 (dead space) as the single highest-diagnostic question at 9/9 hit rate in BOTH audits. The prompt mentions PA-09 under BT-10 severity calibration but does not specify that PA-09 findings should be auto-classified as BLOCKING (not SIGNIFICANT).
   - **Insertable:** Add to B9 severity calibration: "PA-09 finding = auto-BLOCKING (9/9 diagnostic rate, 0% false positive). PA-33 finding = auto-BLOCKING."

---

### File 02: Enrichment Specifications for 7 BLOCKING Gaps
SPECS FOUND: 18
IN PROMPT:
- B1 (max whitespace prohibition) -> S-12 (viewport < 30% content coverage)
- B3 (front-loaded visual weight) -> S-13 (designed moment past 50%), C-09 (per-quartile moment)
- C3 (max spacing 96px) -> S-09, S-11 (96px caps)
- A1 (transition grammar) -> C-05, C-06, C-07 (3 transition types, no identical adjacent, bridge prose)
- A2 (restraint principle) -> C-12, C-13, C-14 (rejection log, silence zones, signal-to-silence ratio)
- A3 (content density minimum) -> S-05 (200px content per section), S-15 (zone count ceiling by word count)
- D3 (content-form fit) -> P-05 (zone boundary requires 3 conditions), P-06 (pattern overhead <= 20%)
- Enrichment traceability table -> Appendix section (all 11 enrichments traced)
- 2+ consecutive viewport positions below 30% = FAIL -> S-12 exact match
- Breathing zone exception (single position, text content required) -> S-12 implicitly allows 1 position

MISSING:
5. **[HIGH] B1 breathing zone exception specifics.** File 02 specifies 3 conditions for the breathing zone exception: (a) visible text content, (b) between two content-bearing sections, (c) no other breathing zone within 2 scroll positions. S-12 states the "2+ consecutive" threshold but does not spell out the 3-condition exception or the documentation requirement ("Breathing zone at [scroll position] contains [content description]").
   - **Insertable:** Add to S-12: "Single breathing zone exception requires: (a) visible text content in zone, (b) zone between content-bearing sections, (c) no other breathing zone within 2 scroll positions. Document: 'Breathing zone at [position] contains [description].'"
6. **[LOW] B1 measurement step-by-step protocol.** File 02 provides a 3-step viewport-increment scrolling protocol. S-12 states the threshold but not the measurement procedure. Builders and auditors could benefit from the explicit steps.
7. **[HIGH] Enrichment insertion points for design system files.** File 02 specifies exact line numbers and insertion points for each enrichment in prohibitions.md, mechanism-catalog.md, tokens.css, semantic-rules.md. The prompt references enrichments but does not verify they were applied. This is a pre-flight dependency, not a prompt rule.
   - **Insertable:** Add to pre-build checklist (if one exists in coordination spec): "E1: Verify 7 BLOCKING enrichments applied to design system files per Report 02."

---

### File 03: Spatial Confidence Gate
SPECS FOUND: 22
IN PROMPT:
- Void budget calculation formula -> Gate 0 (content-to-void >= 60:40)
- Content definition (paragraphs, code, tables, lists, callouts, diagrams, headings) -> Implicitly assumed
- Structural overhead definition (zone padding, transition spacing, indicators, dividers) -> Implicitly assumed
- Content-to-void ratio >= 60:40 -> S-02, S-14 (graduated: 60% pre-build)
- Graduated thresholds (60% pre-build, 50% skeleton, 70% post-mechanism) -> S-14 exact match
- Simplified estimation method (words/12 = lines, lines * 30.6px = body text height) -> Not in prompt
- Ceiling experiment worked example (33,550px content vs 2,180px spacing) -> Not in prompt (evidence, not rule)
- Per-zone content height estimation -> P-01 content inventory template (indirectly)
- 7 spatial confidence checks (SC-01 through SC-07) -> Gate 1 references "SC-01 through SC-07"
- 1620px void threshold (skeleton) -> S-10 (1620px for skeleton stage)
- 2160px void threshold (final) -> S-10 (2160px = 1.5 x 1440px)

MISSING:
8. **[BLOCKING] Void budget estimation formulas for planners.** File 03 provides concrete estimation formulas: body_text_px = (word_count/12) * 30.6, code_block_px = code_lines * 22.3, table_px = table_rows * 40, list_px = list_items * 30, heading_px = heading_count * 55, callout_px = callout_count * 120. These are the TOOLS the planner needs to compute P-01 content inventory and Gate 0. The prompt says "compute content-to-void" but never provides the HOW.
   - **Insertable:** Add to P-01 or as a reference formula block: "ESTIMATION FORMULAS: body_text_px = words/12 * 30.6; code_px = lines * 22.3; table_px = rows * 40; list_px = items * 30; heading_px = count * 55; callout_px = count * 120. Structural: zone_pad = zones * avg_pad * 2; transition_px = transitions * avg_gap."
9. **[BLOCKING] SC-01 through SC-07 individual check definitions.** The prompt references "SC-01 through SC-07" at Gate 1 but does NOT define what SC-01 through SC-07 ARE. File 03 defines them in detail. The prompt has S-01 through S-15 (spatial rules) but these are different from SC-01 through SC-07 (spatial confidence gate checks). This is a NAMING COLLISION that could confuse agents.
   - **Insertable:** Either (a) rename Gate 1 to reference "S-01, S-02, S-10, S-12 checks" instead of "SC-01 through SC-07," or (b) add a mapping: "SC-01=S-01 container, SC-02=S-02 content-to-void, SC-03=S-10 void threshold, SC-04=squint test, SC-05=S-05 sections present, SC-06=S-06 5+ sections, SC-07=S-04 footer."
10. **[HIGH] Failure response actions for each gate check.** File 03 specifies 5 concrete failure responses: reduce zone count, reduce padding, eliminate checkpoints, compress transitions, recalculate. The prompt says "max 2 fix cycles, fail after 2 = ABORT" but does not list the specific remediation actions available.
    - **Insertable:** Add to Gate 1: "Fix actions: (1) reduce zone count, (2) reduce padding values, (3) eliminate checkpoint transitions, (4) compress section spacing, (5) merge sparse sections."

---

### File 04: Restraint Protocol
SPECS FOUND: 15
IN PROMPT:
- Rejection log requirement (>= 21 entries, >= 1.5:1 ratio) -> C-12 exact match
- Rejection entry format (mechanism, location, reason) -> C-12 "mechanism name, intended location, reason for rejection"
- Signal-to-silence ratio 0.6-0.8:1 -> C-14 exact match
- Silence zones >= 2, 200px+ height -> C-13 exact match
- Silence zones count 2x in signal-to-silence calculation -> C-13 exact match
- Restraint ratio per channel >= 1.5:1 -> SC-06 exact match

MISSING:
11. **[HIGH] Rejection entry template with FULL 5 fields.** File 04 defines a 5-field template: (1) mechanism name, (2) proposed location, (3) proposed SCALE, (4) reason for rejection, (5) what is PRESERVED by absence. C-12 specifies only 3 fields (mechanism name, location, reason). The SCALE and WHAT IS PRESERVED fields are missing.
    - **Insertable:** Amend C-12: "Format: mechanism name, intended location, PROPOSED SCALE (Page/Section/Component/Detail), reason for rejection, WHAT ABSENCE PRESERVES."
12. **[HIGH] 3 worked rejection examples.** File 04 provides 3 detailed worked examples showing what quality rejection entries look like (#7 Zone Background in callouts, #5 Dense/Sparse at paragraph scale, #1 Border-Weight on all h3). The planner receiving C-12 has no exemplar of what a good rejection entry looks like.
    - **Insertable:** Add 1 exemplar to C-12 or reference: "See restraint-protocol.md for 3 worked rejection examples."
13. **[LOW] Two-phase rejection logging (during planning + during building).** File 04 specifies Phase A (planner) and Phase B (builder) rejection logging. The prompt places rejection logging on the planner (C-12) but does not specify builder-side rejections.

---

### File 05: Content-First Methodology
SPECS FOUND: 16
IN PROMPT:
- Content inventory BEFORE metaphor derivation -> P-01 exact match
- Content inventory template (word count, type mix, density map, groupings, peaks) -> P-01 template list
- Zone boundary requires 3 conditions (800px content mass, type change, intent change) -> P-05 exact match
- Three NOs = MERGE -> P-05 exact match
- Pattern overhead <= 20% of content height -> P-06 exact match
- Content-type classification (NARRATIVE/REFERENCE/PROCEDURAL/CONCEPTUAL/MIXED) -> Not explicitly in prompt
- Reader intent classification (LEARN/BUILD/VERIFY/ORIENT/DECIDE/REFLECT) -> Not in prompt
- Natural groupings documentation -> P-01 "natural groupings" listed
- Density map with peak/dip locations -> P-01 "peak/dip locations" listed

MISSING:
14. **[HIGH] Content type and reader intent classification vocabularies.** File 05 defines 5 content types (NARRATIVE/REFERENCE/PROCEDURAL/CONCEPTUAL/MIXED) and 6 reader intents (LEARN/BUILD/VERIFY/ORIENT/DECIDE/REFLECT). These vocabularies are essential for the planner to compute zone boundaries (P-05 requires "content type change" and "reader intent change"). Without the vocabularies, the planner must invent their own categories, reducing consistency.
    - **Insertable:** Add to P-01 or P-05: "Content types: NARRATIVE / REFERENCE / PROCEDURAL / CONCEPTUAL / MIXED. Reader intents: LEARN / BUILD / VERIFY / ORIENT / DECIDE / REFLECT."
15. **[LOW] Section catalog template fields.** File 05 specifies per-section fields: word count, code blocks, tables, lists, diagrams, callouts, information density (HIGH/MEDIUM/LOW), reader intent, dependencies. P-01 says "word count per section, content type mix" but not the full field list.
16. **[LOW] Content-first reversal principle.** File 05's core thesis -- the ceiling failed because it was pattern-first; the flagship must be content-first -- is captured in P-01 (content inventory BEFORE metaphor) and P-02 (library prohibition before metaphor lock-in). The philosophical framing is conviction-layer material already present in A1-A8.

---

### File 06: Communication Protocol
SPECS FOUND: 18
IN PROMPT:
- 5 mandatory checkpoints (CP-A through CP-E) -> C2 exact match (all 5 defined)
- CP-A: post-plan read, builder->planner, container + height + content-to-void + concern -> C2 exact match
- CP-B: post-build, builder->team-lead, page height + content ratio + sections + deviations -> C2 exact match
- CP-C: spatial gate, team-lead->all, 7 SC pass/fail -> C2 exact match
- CP-D: post-elaboration, pass-2 builder->team-lead -> C2 exact match
- CP-E: pre-handoff, each pass->next pass -> C2 exact match
- Minimum 8 substantive messages -> C2 "Minimum 8 substantive messages"
- Zero messages at Gate 1 = PAUSE BUILD -> C2 exact match
- Messages must contain specific NUMBERS -> C2 "Messages MUST contain specific NUMBERS"
- Max 300 words per message -> C2 exact match
- 3 escalation triggers (within 10% of threshold, < 3 content elements, 2 mechanisms competing) -> C2 exact match
- Binary rule principle ("MUST not MAY") -> C2 design philosophy
- CP-02 conversion from MAY to MUST -> All checkpoints use MUST

MISSING:
17. **[HIGH] Message content TEMPLATE for each checkpoint.** File 06 specifies exact message formats with fill-in-the-blank fields for each checkpoint (e.g., CP-A requires: "My biggest spatial concern is [X]", "The plan specifies [N] checkpoint transitions. My estimate is [Y]px of total checkpoint whitespace."). The prompt's C2 gives abbreviated content but not the full template with mandatory fill-in fields.
    - **Insertable:** Expand CP-A in C2 to include: "Required content fields: (1) 'My biggest spatial concern: [X]' (2) 'Estimated checkpoint whitespace: [Y]px' (3) 'Container target: [N]px'"
18. **[LOW] Goodhart's Law warning.** File 06 discusses Failure Mode 4 from adversarial premortem (procedural compliance without substance). The prompt addresses this implicitly by requiring "specific NUMBERS" but does not explicitly warn against performative messaging.

---

### File 07: Kill Criteria and Abort Decision Tree
SPECS FOUND: 19
IN PROMPT:
- KB-01: content sections >= 4 with >= 200 words each -> C3 Gate 0 reference + "KB-01" in quick reference
- KB-02: metaphor-zone ratio >= 1.5 (content sections / zones) -> Not directly in prompt (MISSING)
- KB-03: predicted void <= 30% -> C3 "KB-03: predicted void <= 30%"
- KB-04: execution prompt <= 200 lines -> C3 "KB-04: execution prompt <= 200 lines"
- KB-05: metaphor soul compatibility (zero channel conflicts) -> MG-03 (6 rejection checks include soul conflict)
- Stage 2 spatial confidence gate (post-Pass-1) -> Gate 1 in C3
- Stage 3 composition gate (post-Pass-2) -> Gate 3 in C3
- Kill after 2 fix cycles -> C3 "Max 2 fix cycles. Fail after 2 = ABORT"
- SP-01: container width 940-1100px -> C3 "SP-01: container width 940-1100px"
- FK-01: PA-05 >= 3/4 at final audit -> C3 "FK-01: PA-05 average >= 3/4"
- Staged downgrade at 240 min -> C4 "Staged downgrade at 240 min"
- Sunk cost trap warning -> Conviction layer A6 (plans do NOT prevent failure)

MISSING:
19. **[BLOCKING] KB-02: Content/Zone ratio >= 1.5.** File 07 defines this as a critical pre-build kill criterion. The ceiling experiment's ratio was 1.0 (4 zones, 4 content sections), which produced the void. The prompt references this in the unified action plan checklist B4 but it is NOT in the execution spec rules (B1-B10). It appears only in C3 Gate 0 as "Zone count check" without the specific 1.5 threshold.
    - **Insertable:** Add to Gate 0 in C3: "Content/Zone ratio >= 1.5 (content sections with >= 200 words MUST outnumber metaphor zones by >= 1.5:1). FAIL = restructure metaphor to fewer zones."
20. **[BLOCKING] KB-05: Metaphor-soul conflict table.** File 07 provides a 4-row conflict check table (gradients, box-shadows, cool tones, border-radius). MG-03 references "R1-R6: soul conflict" but does not provide the specific channels to check. The metaphor agent needs the table to perform the check.
    - **Insertable:** Add to MG-03: "Soul conflict check: Does metaphor require gradients? (NO) Box-shadows? (NO) Cool tones? (NO) border-radius > 0? (NO). Any YES = REJECT metaphor."
21. **[HIGH] Decision tree format for abort vs fix vs proceed.** File 07 structures criteria as a decision tree (Stage 1 -> Stage 2 -> Stage 3 -> Final) with explicit abort actions. The prompt's C3 provides a linear gate sequence but without the decision tree's "what to do when you fail" specifics beyond "ABORT" or "fix."
22. **[LOW] Time-based kill criterion.** File 07 does not specify one, but the prompt's C4 includes "Staged downgrade at 240 min" which addresses this gap from File 18's unified action plan.

---

### File 08: Metacognitive Checkpoints
SPECS FOUND: 15
IN PROMPT:
- Anti-performative principle (externalize, make failure concrete, attach consequences) -> P-07 "Every checkpoint MUST produce a deliverable ARTIFACT. 'Ask yourself X' is banned."
- Check 1.1 Spatial Budget table format -> Gate 0 (content-to-void >= 60:40)
- Check 1.2 Zone Necessity Test (3 questions) -> P-05 (3 conditions for zone boundary)
- Check failure consequences (cannot proceed until passes) -> Gate sequence with abort conditions
- Externalized checks (different agent evaluates) -> Two-instance pattern P-03
- Concrete artifact requirement -> P-07 exact match
- Spatial budget must be WRITTEN INTO build plan -> P-01 (content inventory) + Gate 0

MISSING:
23. **[BLOCKING] Check 1.2 Zone Necessity Test as a formal gate.** File 08 defines the 3-question zone necessity test (content mass >= 800px? different content type? reader intent shift?) with a scoring table per zone and a MERGE/KEEP verdict. P-05 captures the 3 conditions but frames them as zone BOUNDARY conditions, not as an explicit gate that produces a PER-ZONE table. The planner could apply P-05 at boundaries without producing the comprehensive zone-by-zone table that would catch performative zones.
    - **Insertable:** Add to Gate 0 or P-05: "Zone Necessity Table REQUIRED: For each planned zone, answer YES/NO to: (1) content mass >= 800px, (2) different content TYPE, (3) reader intent shift. Three NOs = MERGE. Table must appear in build plan."
24. **[HIGH] Mid-pipeline metacognitive checkpoint.** File 08 defines Check 2 (mid-build, after Pass 2) asking: "What has been lost from the original vision? What emergent problems do gates not check for?" The prompt includes P-08 (spatial re-check after Pass 2) which is the binary component, but not the metacognitive "what was lost" question.
    - **Insertable:** This is a judgment-class question and may violate the binary-only execution spec principle. Consider placing in team-lead coordination instructions rather than builder rules.
25. **[LOW] Pre-build spatial budget table FORMAT specification.** File 08 provides exact table format (zone-by-zone: content px, structural overhead px, ratio). The prompt requires the calculation but not the specific table format.

---

### File 09: Adversarial Pre-Mortem
SPECS FOUND: 16
IN PROMPT:
- FM-1: Spatial gate passing sparse content -> S-12 (30% content coverage check) + S-05 (200px per section)
- FM-2: Pass 2 breaks Pass 1 -> P-08 (spatial re-check after Pass 2, rollback if > 10pt degradation)
- FM-3: Metaphor spatial obligations -> P-06 (pattern overhead <= 20%) + MG-05 (spatial cost <= 15%)
- FM-4: Performative messaging -> C2 "specific NUMBERS" requirement
- FM-5: Intentionality as cosmetic layer -> C1 Pass 4 architecture (Opus intentionality builder)
- FM-6: Gate gaming (meeting letter, not spirit) -> Binary rule design throughout
- FM-7: Competitive build selecting wrong skeleton -> Not addressed
- FM-8: Time pressure degrading quality -> C4 staged downgrade at 240 min
- FM-10: Success criteria gaming -> Appendix parameter table as authoritative values

MISSING:
26. **[BLOCKING] FM-1 recommendation: SC-08 Content Weight Check.** File 09 recommends adding SC-08 (minimum 3 visual elements per section, minimum 2 content TYPES per section) to catch "technically populated but perceptually sparse" sections. S-05 requires 200px content height per section but does not require content TYPE diversity. A section with 200px of body text and nothing else passes S-05 but would be perceptually sparse.
    - **Insertable:** Add as S-16 or amend S-05: "Each content section: >= 3 distinct visual elements AND >= 2 content types (e.g., prose + code, or prose + table). Single-type sections are perceptually sparse."
27. **[BLOCKING] FM-2 recommendation: Automatic spatial re-run after Pass 2.** The prompt has P-08 (spatial re-check) but it says "S-01 + S-02 must still pass." File 09 recommends re-running SC-02 (Void Budget) and SC-03 (Content Distribution) -- the FULL spatial gate, not just two checks. P-08 as written may be insufficient.
    - **Insertable:** Amend P-08: "After Pass 2: re-run S-01, S-02, S-10, S-12 (full spatial checks). If ANY fails: ROLLBACK Pass 2."
28. **[HIGH] FM-3 recommendation: Phase 3.5 spatial obligation analysis.** File 09 recommends a spatial obligation check BETWEEN metaphor derivation and build planning. MG-05 (spatial cost <= 15%) addresses this, but MG-05 is placed in B6 (Metaphor Gates) rather than in the process sequence. The metaphor agent might not compute spatial cost before the planner starts.
    - **Insertable:** Add to process sequence: "After MG-01 through MG-05 pass, BEFORE planner begins: metaphor agent documents zone count, inter-zone spacing estimate, and cumulative spatial cost."
29. **[HIGH] FM-5 recommendation: Include intentionality in build plan, not just Pass 4.** File 09 argues intentionality should be DESIGNED IN from Pass 0, not bolted on in Pass 4. The prompt places intentionality in Pass 4 (C1 agent roster). This is an architectural disagreement between File 09 and the prompt.
    - **Insertable:** Add to Pass 0 (Content Architecture): "Content architect MUST identify 1-2 self-reference opportunities and 1 bookending opportunity in the content inventory."
30. **[HIGH] FM-7: Competitive build selection criteria.** File 09 identifies the risk that team-lead selects the wrong skeleton from 2 competitive builds. The prompt (C1) says "team-lead picks better" but provides no selection criteria.
    - **Insertable:** Add to C1 Pass 1: "Selection criteria: (1) content-to-void ratio, (2) section content diversity, (3) visual weight distribution. Pick skeleton with HIGHER content-to-void ratio unless the other scores materially better on criteria 2-3."

---

### File 10: Prompt Architecture
SPECS FOUND: 13
IN PROMPT:
- 4-layer architecture (Conviction / Execution / Coordination / Conviction closing) -> Sections A/B/C/D exact match
- Binary rules achieve 100% compliance -> Design principle throughout B1-B10
- Builder consumed only 10-15% of ceiling prompt -> Reference library routing (Section E)
- Execution spec with zero judgment language -> B section header "ZERO judgment language"
- <= 200 line target for execution spec -> Appendix parameter table (250 line soft cap)
- Per-agent reading list routing -> Section E (Reference Library)
- Conviction sandwich (opens + closes) -> A1 + Section D
- Numbered rule IDs -> All rules have unique IDs
- Code block format for soul rules -> B2 in code block

MISSING:
31. **[LOW] Sections that could be deleted with zero impact.** File 10 identifies specific ceiling prompt sections that were irrelevant. The enriched prompt already applies this learning (much shorter than 1,004 lines). Not actionable for the current prompt.
32. **[LOW] Builder prompt length <= 75 lines.** File 10 recommends the builder's effective prompt (rules + conviction + closer) be <= 75 lines. This is in the Appendix parameter table (Builder prompt length <= 75 lines). Present.
33. **[LOW] Anti-skimming compliance techniques.** File 10 identifies structural techniques (FAIL IF prefix, code block format, checkbox format). These are documented in the prompt's Anti-Skimming Compliance section.

---

### File 11: Crown Jewel Forensics
SPECS FOUND: 18
IN PROMPT:
- DD-006 CSS stats (600 lines, 42 classes, 26 tokens) -> Not in prompt (reference data)
- CD-006 CSS stats (1,035 lines, 95+ classes, 54 tokens) -> A7 references CD-006 techniques
- Golden ratio grid (1.618fr 1fr) -> Not in prompt
- var() usage as maturation signal -> Token compliance >= 80% (B10 self-check)
- DD-006 rgba() progressive opacity for depth -> U-04 exception (progressive depth tinting per DD-006)
- Border-weight system (4px/3px/2px/1px hierarchy) -> Mechanism catalog reference
- CD-006 transition types (Smooth/Bridge/Breathing) -> A7, C-05 (3 types defined)
- Token compliance measurement -> B10 self-check (var() count / total declarations)
- Typography trinity (Instrument Serif / Source Sans 3 / Source Code Pro) -> U-09

MISSING:
34. **[HIGH] 15 must-replicate techniques from crown jewels.** File 11 catalogs specific CSS techniques that define crown jewel quality (golden ratio grid, ::selection branding, progressive border-weight encoding, drop cap implementation, bento grid patterns). The intentionality builder's reference library (Section E) says "Crown jewel forensics (11-crown-jewel-forensics.md)" but no specific techniques are surfaced in the execution rules.
    - **Insertable:** Not needed as rules (would increase attention cost). The reference library routing to intentionality builder is sufficient IF the file is actually provided.
35. **[HIGH] CD-006 max-width 1100px as container upper bound.** File 11 documents CD-006's container at 1100px max-width. The Appendix parameter table uses this: "940-1100px (960px default, 1100px proven upper bound from CD-006)." Present. However, S-01 says "940-1100px" while the parameter table says "960px default." This is consistent but could be clearer.
36. **[LOW] DD-006 used only 6 mechanisms to achieve 36/40.** Already captured in A5 and A6 conviction sections.

---

### File 12: Defining Beautiful
SPECS FOUND: 11
IN PROMPT:
- Beauty = confident intention at every scale of attention -> A1 thesis exact match
- 4 resolved tensions (warm/not-soft, austere/not-cold, authoritative/not-aggressive, restrained/not-empty) -> A2 tensions table
- 5-second test (arrival, orientation, first delight, spatial confidence) -> A1 thesis (5-second test)
- Personality: warm, authoritative, unhurried -> A1 personality exact match
- Crown jewels walk all four tensions at height -> A4 dual richness sources
- Compliance prevents ugliness but doesn't produce beauty -> A6 experiential laws
- Mechanism count does not predict quality -> A5, A6

MISSING:
37. **[LOW] "Encountering confident intention" decomposition.** File 12 breaks "encountering confident intention at every scale of attention" into 4 components (encountering, confident, intention, at every scale). This is conviction-layer elaboration already adequately captured in A1.
38. **[LOW] The perceptual sequence (seconds 0-5).** File 12 and File 15 both describe the 5-second sequence. The prompt captures this in A1 and A8. Duplicative coverage.
39. **[LOW] "Absence coherence" principle.** File 12 states: "If you omit a higher-order element, omit ALL at that tier." This IS in the prompt at Section D: "ABSENCE COHERENCE" paragraph. Present.

---

### File 13: Compositional Fluency
SPECS FOUND: 14
IN PROMPT:
- 5 interaction types (REINFORCING, MODULATING, RESPONDING, CONTRASTING, CASCADING) -> A5 exact match
- Formal definition (mechanisms encode shared semantic through different CSS channels) -> A5
- Multi-channel encoding requirement -> MC-02 (reinforcing pairs)
- Cross-mechanism dependency concept -> MC-03, MC-04, MC-05, MC-06
- CCS (Compositional Coupling Score) -> MC-01 (>= 0.30)
- Vocabulary fluency vs compositional fluency distinction -> A4 (Source 1 vs Source 2)
- DD-006 border-weight + zone-background + spacing as reinforcing triple -> A5 example
- Mechanism count doesn't predict quality -> A5 "DD-006 scored 36/40 with 6 mechanisms"

MISSING:
40. **[HIGH] Concrete CSS examples of each interaction type.** File 13 provides detailed CSS code blocks for each of the 5 interaction types (REINFORCING: border-weight + zone-background + spacing; MODULATING: dense/sparse controls spacing compression intensity; etc.). A5 defines the types but without CSS examples. The builder/planner may not understand how to IMPLEMENT "modulating" without an example.
    - **Insertable:** Add to intentionality builder's reference reading list or as an appendix: "See 13-compositional-fluency.md for CSS examples of each interaction type."
41. **[LOW] 3 testable sub-properties of compositional fluency.** File 13 defines: (1) multi-channel encoding, (2) cross-mechanism dependency, (3) emergent properties. MC-01 through MC-08 operationalize these as binary rules. Adequately captured.

---

### File 14: Intentionality Layer Design
SPECS FOUND: 20
IN PROMPT:
- 6 intentionality dimensions -> C-15 (>= 3 of 6)
- Dimension list (self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation) -> C-15 exact match
- >= 1 self-referential element -> C-16 exact match
- >= 2 bridge transitions with cognitive-shift prose -> C-17 exact match
- Self-reference definition (content describes its own form) -> Not in prompt (conviction layer assumed)
- Builder instructions for self-reference -> Not in builder prompt
- CD-006 self-reference examples (line 1109, lines 1684-1688) -> Reference library routing
- DD-006 4-stage pedagogical progression -> Not in prompt
- Ceiling = 0/6 intentionality dimensions -> Not needed (evidence, not rule)

MISSING:
42. **[BLOCKING] Per-dimension HTML recipes and builder instructions.** File 14 provides <10-line builder instructions for EACH of the 6 dimensions, plus CSS cost estimates, HTML volume estimates, and minimum viable implementations. C-15 through C-18 state the REQUIREMENTS (>= 3 of 6, >= 1 self-reference, >= 2 bridge transitions) but do not tell the intentionality builder HOW to implement them. The builder receives C-15-C-18 as rules and the reference file as reading -- but the reference file is 14-intentionality-layer-design.md itself.
    - **Insertable:** Verify Section E routes intentionality builder to File 14: "Intentionality Builder reads: 14-intentionality-layer-design.md (6 dimensions with HTML recipes)." Currently Section E references "Crown jewel forensics (11-crown-jewel-forensics.md)" and "Compositional fluency (13-compositional-fluency.md)" but NOT File 14.
43. **[HIGH] Danger zones per dimension.** File 14 identifies specific pitfalls: meta-pretension for self-reference, forced loops, over-labeling. These could prevent performative intentionality. Not in prompt.
    - **Insertable:** Add to intentionality builder reading list: "14-intentionality-layer-design.md (6 dimensions + danger zones)"
44. **[HIGH] Deliberate absence as intentionality dimension.** File 14 defines deliberate absence as an intentionality dimension (choosing to NOT use a mechanism where expected). C-15 lists "deliberate absence" in the 6 dimensions but C-12 (rejection log) is the only operational rule related to it. The connection between C-12 and C-15 is not explicit.
    - **Insertable:** Add note to C-15: "Deliberate absence dimension is satisfied by C-12 rejection log with >= 5 entries documenting WHAT absence achieves."

---

### File 15: Perceptual Hierarchy
SPECS FOUND: 16
IN PROMPT:
- 5-second test (orientation, content anchor, variety, pattern detection) -> A1 thesis
- Dark header authority (Instrument Serif, 3rem, red accent) -> Not detailed in prompt
- Blue accent context box ("YOU ARE HERE") -> Not in execution rules
- Contrast cascade (dark/light -> chromatic -> reading) -> Not in prompt
- 3 visual textures within first 1.5 viewports -> Not in prompt
- Scroll narrative (5-act structure) -> A8 (5-act story)
- Every texture promised in Act 1 must recur -> A8 "Every visual texture promised in Act 1 MUST recur"
- Interest monotonically decreasing = failed page -> A8 exact match

MISSING:
45. **[BLOCKING] First 1.5 viewports must show >= 3 visual textures.** File 15 specifies a concrete threshold: within the first 1.5 viewports (~1080-1350px), the viewer must see 3 DIFFERENT visual textures. This is a binary, measurable spec that operationalizes the 5-second test. The prompt's A1 describes the 5-second test philosophically but never provides this specific measurable threshold.
    - **Insertable:** Add as S-17 or within A1: "FAIL IF: first 1.5 viewports (0-1350px at 1440px) contain fewer than 3 distinct visual textures (e.g., callout + content block + transition/divider)."
46. **[HIGH] Scroll pacing thresholds.** File 15 likely defines specific scroll pacing rates for each of the 5 acts. A8 defines the acts by scroll percentage but does not specify pacing requirements beyond "interest monotonically decreasing = failed."
47. **[HIGH] Header visual spec (dark slab, serif title, monospace meta-label, sans subtitle).** File 15 specifies the header composition in detail: dark background, Instrument Serif display, red accent as 3px bottom border OR monospace element, monospace meta-label above title, sans-serif subtitle. The prompt has no header compositional spec beyond S-03 (header <= 20% of viewport).
    - **Insertable:** Add to builder self-check or conviction layer: "Header composition: dark background (#1A1A1A) + Instrument Serif title + sans-serif subtitle + ONE red accent element. Total height <= 20% of viewport."

---

### File 16: Cross-Experiment Meta-Analysis
SPECS FOUND: 10
IN PROMPT:
- Quality-richness scatter (not monotonic trade-off) -> A5, A6 (mechanism count doesn't predict quality)
- Spatial confidence as #1 quality predictor -> A3 (if spatial_confidence = 0, product = 0)
- Iteration count as #2 predictor -> P-03 (two-instance pattern)
- Crown jewels on quality-richness frontier -> A7 (CD-006 as exemplar)
- Single-pass limitation -> C1 (5-pass architecture)
- Pipeline quality ceiling concept -> A6 experiential laws

MISSING:
48. **[LOW] Quality-richness scatter data table.** File 16 provides a 5-row data table (Phase D, Middle, Ceiling, DD-006, CD-006) with quality proxy, richness proxy, mechanisms, build process, iteration passes. This is evidence, not actionable for the prompt.
49. **[LOW] 6 hypotheses tested against 4 experiments.** File 16 tests H1-H6 and concludes spatial confidence + iteration count are the strongest predictors. Already absorbed into conviction layer.

---

### File 17: No-Compromise Pipeline Design
SPECS FOUND: 22
IN PROMPT:
- 5-pass architecture (Content Architecture, Skeleton, Mechanism, Metaphor, Intentionality) -> C1 maps to this (Pass 0-4)
- Separate mechanism and metaphor builders -> C1 (Pass 2: Mechanism Builder, Pass 3: Metaphor Builder)
- Competitive skeleton build (2 parallel) -> C1 "Skeleton Builders A+B, competitive"
- Per-pass gate -> C3 (6 gates)
- Maximum 2 fix cycles per pass -> C3 "Max 2 fix cycles"
- Total agent count -> C1 roster
- Opus for creative, Sonnet for execution -> C1 model assignments
- 3 metacognitive reviewers (pre-mortem, mid-pipeline, post-build) -> Not all 3 in prompt
- 30 agents for no-compromise version -> Prompt uses ~22 agents (reduced)
- 5.2-7.7 hours expected time -> Not in prompt

MISSING:
50. **[BLOCKING] Mid-pipeline metacognitive reviewer.** File 17 specifies 3 metacognitive reviewers: pre-mortem (before Pass 0), mid-pipeline (after Pass 2), and post-build (after Pass 4, before Mode 4). The prompt includes the post-build reviewer (Mode 4 PA) and implicitly the pre-mortem (Gate 0), but does NOT include a mid-pipeline reviewer after Pass 2 who asks "What has been lost from the original vision?"
    - **Insertable:** Add to C1 after Pass 2/Gate 3: "Mid-Pipeline Reviewer (Opus): After Gate 3, receives HTML file only. Answers: (1) How many mechanisms are VISIBLE? (2) Has spatial proportion degraded? (3) Does the page feel like it serves content or serves its own mechanisms?"
51. **[HIGH] Mechanism perception auditor at Gate 3.** File 17 specifies a "mechanism-perception" auditor at the Composition Verification Gate who asks "How many mechanisms are VISIBLE?" (distinct from how many are DEPLOYED). The prompt's Gate 3 checks "CP-01 through CP-04" but these are compositional rules, not perceptual visibility checks.
    - **Insertable:** Add to Gate 3: "Perception check: fresh-eyes auditor views page and counts VISIBLE mechanisms (different from deployed count). If visible < 50% of deployed, FLAG for review."
52. **[HIGH] Competitive build selection criteria.** Same as #30 above. File 17 does not specify criteria either, but the gap remains.
53. **[LOW] Time estimates per pass.** File 17 provides per-pass duration estimates. Not needed in execution prompt.

---

### File 18: Unified Action Plan
SPECS FOUND: 20
IN PROMPT:
- 3 simultaneous problems (prevent void, genuine composition, achieve beauty) -> Sections A + B structure
- 22 agents, 5 passes, 7 gates -> C1, C3 architecture
- Pre-build checklist (A1-A3 content, B1-B5 metaphor, C1-C3 spatial, D1-D4 prompt, E1-E2 enrichment) -> Distributed across B1-B10 and C1-C4
- KB-01 through KB-05 kill criteria -> C3 quick reference
- Calibration run recommendation -> Not in prompt

MISSING:
54. **[BLOCKING] Pre-build checklist as a consolidated section.** File 18 provides a 15-item binary checklist that must be completed BEFORE any agent begins building. The prompt distributes these requirements across B1-B10, C1-C4, and the parameter table, but does not consolidate them as a pre-flight checklist. A team-lead executing the prompt would need to mentally reconstruct the pre-build requirements from scattered rules.
    - **Insertable:** Add a Pre-Flight Checklist section (similar to B10 Builder Self-Check) before Section C or as a team-lead reference: "PRE-FLIGHT: [ ] Content inventory (P-01) [ ] KB-01 (4+ sections) [ ] KB-02 (content/zone >= 1.5) [ ] KB-03 (void <= 30%) [ ] KB-04 (prompt <= 200 lines) [ ] KB-05 (soul compatibility) [ ] Enrichments applied"
55. **[HIGH] Calibration run recommendation.** File 18 STRONGLY recommends a calibration run before the flagship experiment. The prompt does not mention this. This is a process recommendation, not a prompt rule, but its absence means the team-lead may proceed directly to flagship without a dry run.
    - **Insertable:** Add to coordination notes: "RECOMMENDED: Run ceiling-tier calibration with this prompt before flagship. Validates gate sequence and communication protocol."
56. **[LOW] 55-65% probability of Full Flagship success.** File 18 estimates probability. Not needed in execution prompt.

---

### File 19: Constraint Pressure Hypothesis
SPECS FOUND: 12
IN PROMPT:
- Soul closes 55-65% of CSS toolkit -> A4 "Soul prohibitions close ~55-65%"
- Surviving channels carry 4-5x semantic weight -> A4, Section D exact match
- Constraint pressure = ratio of closed-to-open channels -> A4 concept
- Shannon channel capacity analogy -> Not in prompt
- 6 of 8 major expressive channels closed -> Not quantified in prompt
- Border-weight as primary hierarchical encoding -> Mechanism catalog reference
- Constraint pressure creates richness -> A4 "Source 1 (Constraint Pressure)"

MISSING:
57. **[LOW] Constraint pressure quantification formula.** File 19 develops a formal CP = channels_closed / channels_total formula with specific numbers (6/8 = 75% closure, 4-5x weight per surviving channel). The prompt captures the CONCLUSION (55-65% toolkit closed, 4-5x weight) but not the derivation. This is conviction-layer content, not execution-spec material.
58. **[LOW] Shannon channel capacity analogy.** Theoretical framework. Not needed in execution prompt.
59. **[LOW] Lossy compression analogy (masking threshold).** Theoretical. Not needed.
60. **[LOW] Full prohibition inventory with CSS properties eliminated.** File 19 catalogs all 22 prohibitions with specific CSS properties and estimated values eliminated. This is reference material for the conviction layer, already adequately captured by the soul rules (U-01 through U-10).

---

### File 20: Attention Bandwidth Theory
SPECS FOUND: 14
IN PROMPT:
- Attention budget is finite per agent invocation -> A6 "Every rule in this prompt has an attention cost"
- Binary rules = LOW attention cost (~0.5 units) -> Design principle throughout
- Judgment rules = HIGH attention cost (~4 units) -> Removed from execution spec
- Mechanism attention tax (14 mechs = 42% of budget) -> C-02 mechanism hard cap at 16
- Emergent properties (Priority 5) first casualty -> A6 "spatial proportion... EMERGENT"
- Prompt length vs quality inverse relationship -> Parameter table (master prompt <= 250 lines)
- Attention priority hierarchy (identity > structural > quantitative > judgment > emergent) -> Design reflected in rule ordering

MISSING:
61. **[HIGH] Attention cost per rule type estimates.** File 20 provides specific estimates: binary identity = 0.5 units, binary specification = 1 unit, formula = 2 units, judgment = 4 units, metaphor-derived = 6 units, interaction = 6-8 units. The prompt captures the PRINCIPLE (binary cheap, judgment expensive) but not the specific costs. These could help the team-lead estimate whether the prompt's total attention demand exceeds budget.
    - **Insertable:** Not as execution rules (meta-level). Add to team-lead notes: "Attention budget ~100 units. Binary rules ~1 unit each. Formula rules ~2 units. Total demand should stay under 100."
62. **[HIGH] Mechanism attention: 42% of budget for 14 mechanisms.** File 20 calculates that 14 mechanisms consume ~53 attention units out of ~100. This directly justifies C-02's mechanism target of 12-14 and hard cap of 16. The JUSTIFICATION is not in the prompt, but the RULE is.
63. **[LOW] Residual theory (spatial proportion = residual attention).** File 20's central finding: spatial proportion is what's left after all explicit rules consume attention. This is the deepest justification for "prompt brevity = spatial quality." Already captured in A6's "LENGTH IS THE ENEMY OF QUALITY."

---

### File 21: Beyond Flagship
SPECS FOUND: 8
IN PROMPT:
- Flagship is ceiling of current pipeline architecture -> Conviction layer framing
- 5 scales maximum (Alexander/Salingaros) -> A3, SC-01
- Beyond 5, add channels not levels -> A3 exact match
- Atoms tier requires human craft -> Not in prompt (future exploration)
- Micro-typography, motion, material texture as future frontiers -> Not in prompt

MISSING:
64. **[LOW] 8 frontier descriptions.** File 21 is forward-looking research. None of its content belongs in the flagship execution prompt.
65. **[LOW] Letter-spacing token recommendations.** File 21 suggests tight/normal/expanded tracking semantics. This is a design system enrichment recommendation, not a prompt rule.
66. **[LOW] Responsive as composition vs adaptation.** File 21 concept. Not actionable for current prompt.

---

## PRIORITY SUMMARY: TOP 14 BLOCKING MISSING SPECS

| # | Source | Spec | Classification | Impact |
|---|--------|------|---------------|--------|
| 8 | File 03 | Void budget estimation FORMULAS for planners | BLOCKING | Planner cannot compute Gate 0 without these |
| 9 | File 03 | SC-01 through SC-07 individual definitions (naming collision) | BLOCKING | Gate 1 references undefined checks |
| 19 | File 07 | KB-02: Content/Zone ratio >= 1.5 as formal rule | BLOCKING | Critical pre-build kill criterion omitted |
| 20 | File 07 | KB-05: Metaphor-soul conflict table (4 channels) | BLOCKING | Metaphor agent lacks specific check procedure |
| 23 | File 08 | Zone Necessity Test as formal gate with per-zone table | BLOCKING | Performative zones undetectable without it |
| 26 | File 09 | SC-08: Content weight check (3 elements, 2 types per section) | BLOCKING | Sparse sections pass current S-05 |
| 27 | File 09 | Full spatial re-run after Pass 2 (not just S-01+S-02) | BLOCKING | P-08 too narrow; void can emerge from other spatial checks |
| 42 | File 14 | Intentionality builder reference to File 14 (missing from Section E) | BLOCKING | Builder has no HOW for 6 dimensions |
| 45 | File 15 | First 1.5 viewports >= 3 visual textures | BLOCKING | 5-second test has no measurable threshold |
| 50 | File 17 | Mid-pipeline metacognitive reviewer after Pass 2 | BLOCKING | No perception check between mechanism deployment and metaphor |
| 54 | File 18 | Pre-flight checklist as consolidated section | BLOCKING | Team-lead must mentally reconstruct 15 scattered requirements |
| 1 | File 01 | PA question tier weighting (Tier A = elevated scrutiny) | HIGH (borderline BLOCKING) | Auditors treat all 48 questions equally |
| 4 | File 01 | PA-09 auto-BLOCKING severity classification | HIGH (borderline BLOCKING) | Deadspace finding might be classified as merely SIGNIFICANT |
| 29 | File 09 | Intentionality designed in from Pass 0, not bolted on in Pass 4 | HIGH (architectural) | Structural disagreement with 5-pass model |

---

## PRIORITY SUMMARY: TOP 10 HIGH MISSING SPECS

| # | Source | Spec | Notes |
|---|--------|------|-------|
| 5 | File 02 | B1 breathing zone exception specifics (3 conditions) | S-12 lacks the detail |
| 10 | File 03 | Gate failure response actions (5 specific remediation steps) | Gate 1 says "fix" but not "how" |
| 11 | File 04 | Rejection template FULL 5 fields (adds SCALE + WHAT IS PRESERVED) | C-12 has only 3 fields |
| 12 | File 04 | Worked rejection examples (at least 1 exemplar) | Planner has no model |
| 14 | File 05 | Content type + reader intent vocabularies | P-05 requires "type change" but no vocabulary |
| 17 | File 06 | Message content templates with fill-in fields | CP-A through CP-E abbreviated |
| 21 | File 07 | Decision tree format (abort vs fix vs proceed) | C3 is linear, not branching |
| 34 | File 11 | Crown jewel technique catalog for intentionality builder | Reference library routing may not include |
| 40 | File 13 | CSS examples of 5 interaction types | A5 defines types without examples |
| 47 | File 15 | Header compositional spec (dark slab + serif + meta-label + accent) | Only S-03 size constraint exists |

---

## OVERALL ASSESSMENT

The enriched master execution prompt captures approximately **76%** of the concrete specifications from the 21 flagship preparation files. The conviction layer (Section A) is excellent -- it absorbs the philosophical and strategic content from Files 12, 13, 16, 19, 20, and 21 with high fidelity. The execution spec (Section B) is strong on spatial rules, soul rules, and compositional rules.

**The three largest gaps are:**

1. **Operational HOW-TO content.** The prompt specifies WHAT must be achieved (Gate 0 content-to-void >= 60:40) but not HOW to calculate it (File 03's estimation formulas). The prompt says "rejection log" but not the full template (File 04). The prompt says "content inventory" but not the field vocabulary (File 05). Agents need tools, not just targets.

2. **Reference library routing for intentionality builder.** Section E routes the intentionality builder to File 11 and File 13 but NOT File 14 (the actual builder instructions for the 6 dimensions). This is a critical routing gap.

3. **Pre-flight consolidation.** The 15+ pre-build requirements are scattered across B1-B10, C1-C4, and the parameter table. A consolidated pre-flight checklist for the team-lead would prevent omissions.

**END REPORT**
