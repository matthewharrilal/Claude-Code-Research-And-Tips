# 33 -- Adversarial Trim Review

**Reviewer:** Adversarial Regression Hunter (Opus)
**Date:** 2026-02-20
**Input:** Reports 25, 26, 28, 29 (trim proposals); TC SKILL.md (2,006 lines); PA SKILL.md (1,208 lines); build-page SKILL.md (480 lines); conventions-brief.md; MEMORY.md
**Mandate:** Find reasons why the proposed trims SHOULD NOT happen. Assume the trim proposal is WRONG until proven right.

---

## EXECUTIVE ADVERSARIAL SUMMARY

The trim proposal contains **3 BLOCKING errors**, **4 SIGNIFICANT risks**, and **2 unverified assumptions**. While the overall direction (removing dead code, deduplicating) is sound, the specific execution plan has gaps that could reproduce known failure modes.

**OVERALL VERDICT: PROCEED WITH CAUTION**

The trims should happen, but the trim plan as written will silently lose capability in at least 5 areas. Specific modifications are required before execution.

---

## 1. THE "TOKEN BUDGET" ARGUMENT IS WEAK

### Evidence Against Token Budget Mattering

**The middle-tier experiment used the ~1,878-line TC skill and scored PA-05 4/4, novelty 3/3.** This is the only successful run of the pipeline. The TC agent successfully navigated all 1,878 lines, selected 12 mechanisms, derived the F-PATTERN density model, and produced a TC brief that led to a DESIGNED outcome. If 1,878 lines caused attention dilution, where is the evidence?

Report 28 (TC cruft analysis) claims "estimated effective absorption: 50-65% of TC skill content" (line 191). But this is an ESTIMATE, not a measurement. The middle-tier experiment's success contradicts this estimate -- the TC agent correctly executed Phases 0 through 4.5, including the metaphor quality rubric (added in enrichment), perceptual risk assessment (added in enrichment), and zone architecture (added in enrichment). If absorption were truly 50-65%, at least one of these enrichments would have been skipped.

**The 200K context window argument.** The TC agent reads ~49,000-59,000 tokens total (skill + content + mechanism catalog). This is 25-30% of the 200K context window. LLM attention degradation at 25% fill is minimal compared to, say, 80% fill. The "token budget" framing implies the agent is constrained; in reality, it has 140K+ tokens of remaining capacity.

**The "front-loading bias" argument is theoretical.** Report 28 (line 186) claims "Phase 4.5 (sub-skill output, at line 1627) is in the 'middle zone' where attention flags." But the Phase 4.5 output format has worked correctly in every pipeline run (n=1, but n=0 for the trimmed version). This is speculation, not evidence.

### Evidence FOR Token Budget Mattering

**Counterpoint accepted:** The builder visibility cap WAS 75 lines in the flagship experiment, and the builder DID under-attend to key sections. But the builder and TC agent are different roles with different prompt structures. The TC agent reads the skill ONCE, sequentially, then executes. The builder reads the skill AND the conventions brief AND the content AND the mechanism catalog AND the TC brief. The builder's context is more fragmented. The analogy is imprecise.

**One legitimate concern:** Phase 4.9 (Tokenization Self-Check, 74 lines) is genuinely builder content that the TC agent will never execute. These 74 lines have zero informational value for the TC agent. Similarly, Phase 4.7B (Landmark Completeness, 64 lines) with its HTML verification tables is pure builder territory.

### Verdict on Token Budget

**PARTIALLY VALID.** Removing builder-specific content (~294 lines) is defensible. Removing standalone content (318 lines) is defensible. But the broader claim that "2,006 lines is approximately 3-4x heavier than needed" (report 25, line 12) is unsubstantiated. The only successful run used the ~1,878-line version. The proposed ~960-line version has n=0 validation.

**Risk rating: LOW for removing builder content, UNKNOWN for the broader trim.**

---

## 2. STANDALONE MODE STILL HAS VALUE

### Evidence That Standalone Mode Is Not Orphaned

1. **/build-page CLAUDE.md explicitly preserves standalone as a fallback.** The MEMORY.md states: "/build-page's CLAUDE.md says: 'Direct invocation: Only if /build-page is unavailable' -- so standalone IS a fallback."

2. **The standalone TC mode is the experimentation path.** Every prior experiment (Boris, Gas Town, Playbook -- 15 test layouts) was run using standalone TC mode. If someone wants to test a metaphor derivation WITHOUT triggering the full 12-agent pipeline, standalone TC is the tool. Removing Phase 5 (Output), the divergence verification, and the invocation section means someone doing a quick metaphor experiment needs to reconstruct the output format from memory or read a separate appendix.

3. **The STANDALONE-APPENDIX.md solution creates a read-two-files burden.** The proposal says standalone TC reads SKILL.md + STANDALONE-APPENDIX.md. But the skill frontmatter needs to reference the appendix, the agent needs to know when to read the second file, and the two files can drift. The current single-file approach, while longer, has zero routing complexity.

4. **PA standalone mode for auditing existing pages.** If someone builds a page outside the pipeline (manual HTML, external designer's work) and wants to audit it, standalone PA (Mode 4 with full team structure) is the only way. The trim removes Modes 1-3, the task graph, team structure, Playwright configuration, and screenshot protocol from the PA skill. A standalone user would need to reconstruct all of this or read /build-page (which is designed for building pages, not auditing existing ones).

### Counterargument

The MEMORY.md also records that standalone TC has never been used in the actual pipeline -- it is always invoked by /build-page. The 15 test layouts were PRE-pipeline, before /build-page existed. So the fallback has never been exercised.

### Verdict on Standalone Mode

**PARTIALLY VALID CONCERN.** Moving standalone content to an appendix is acceptable IF:
- The appendix is referenced clearly in the skill's output format section
- The appendix is maintained alongside the main skill (not allowed to drift)
- PA standalone capability is preserved somewhere accessible (not buried in /build-page which is an orchestrator, not an auditor)

**Risk rating: MODERATE for PA standalone loss, LOW for TC standalone loss.**

---

## 3. DUPLICATION SERVES A PURPOSE

### Evidence That Duplication Is a Safety Net

1. **Auditors are told to "read the PA skill."** /build-page line 262 says: "read the evaluation framework at ~/.claude/skills/perceptual-auditing/SKILL.md (Sections on perceptual language, evaluation approach, scoring guidance, the Three Laws, and the Sovereignty Principle)." If the PA skill is trimmed to remove the weaver protocol, Mode 4 team structure, and expanded metaphor guidance, auditors still read a complete file -- but the weaver does NOT read the PA skill. The weaver gets its protocol from /build-page's spawn prompt. This means: if /build-page has a bug in the weaver spawn prompt, there is NO backup. The PA skill's weaver protocol was that backup.

2. **The weaver calibration tables are self-duplicated within PA.** The multi-coherence calibration table appears at BOTH line 745 (weaver section) and line 910 (evaluation guidance section). The proposal says to trim the second instance. But auditors DO read the evaluation guidance section (they are told to read "scoring guidance"). If the weaver-only section is removed, and the second instance in evaluation guidance is also removed, the calibration table vanishes from the auditor's view entirely. This is fine for auditors (they should not see it), but the weaver loses its ONLY in-skill reference if /build-page's spawn prompt omits it.

3. **The "if ONE file is loaded" argument has merit.** In the current architecture, /build-page spawns agents with specific file-read instructions. But if an agent fails to read a file (disk error, path change, context overflow), the in-skill duplication provides a fallback. This is a defense-in-depth argument. The trim proposal treats it as pure waste.

### Counterargument

Duplication creates a DUAL AUTHORITY problem. Report 26 (PA trim) found a REAL CONFLICT: Auditor A's assignment disagrees between the PA skill's Tier 5 summary table (9 questions) and /build-page (10 questions, includes PA-03). This conflict is precisely the pathology that deduplication prevents.

### Verdict on Duplication

**MIXED.** Duplication causes real conflicts (the PA-03 discrepancy is proof). But the safety-net argument is valid for content that changes rarely (calibration tables, severity scales, the Language HARD BLOCK). The solution is: deduplicate VOLATILE content (assignments, protocols that evolve), keep STABLE content duplicated (calibration tables, perceptual language rules, severity definitions).

**Risk rating: LOW for deduplicating assignments/protocols, MODERATE for deduplicating calibration tables.**

---

## 4. BUILDER CONTENT IN TC SKILL HELPS TC QUALITY

### Evidence That TC Quality Depends on Builder-Awareness

1. **Phase 4.9 (Tokenization) teaches token vocabulary.** The TC agent selects mechanisms and writes "metaphor-implied CSS directions" in the TC brief. If the TC agent does not know what tokens EXIST (var(--color-zone-sparse) vs #FEF9F5), it will write raw hex values in the CSS directions section, which the builder then needs to translate. A TC agent that knows the token vocabulary writes directions IN TOKEN LANGUAGE, which the builder can implement directly. Phase 4.9 teaches this vocabulary.

   **Counterpoint:** The TC agent reads tokens.css as a reference file. It has access to token vocabulary through the mechanism-catalog.md and tokens.css, not just through Phase 4.9's self-check protocol. Phase 4.9 is about COUNTING var() references in CSS, which the TC agent never writes. Valid trim.

2. **Phase 4.7B (Landmark Completeness) informs zone architecture.** The TC agent's Phase 3.5Z (Zone Architecture) derives zones from the metaphor. If the TC agent knows "header + main + footer are REQUIRED landmarks," it will ensure the zone architecture accounts for these structural requirements (e.g., Zone 1 = header/orientation, Zone N = footer/synthesis). Without this knowledge, the TC agent might derive a zone architecture that lacks a natural footer zone, forcing the builder to improvise.

   **Counterpoint:** The TC brief format (Phase 4.5) does not ask for a landmark table. The /build-page builder prompt explicitly lists "header + main + footer present?" as a self-check (line 98). So landmark awareness is in the builder's prompt. The risk is that TC derives zones without footer consideration, but this is a MINOR risk since most content naturally has a conclusion/synthesis section.

3. **The Anti-Scale Model (Phase 4.0A) shapes mechanism selection.** The formula `RICHNESS = SEMANTIC DENSITY x RESTRAINT x SPATIAL CONFIDENCE` directly affects which mechanisms the TC agent selects. If the TC agent does not internalize "restraint means deliberately NOT deploying some mechanisms," it may over-select (the opposite of the flagship failure, but still a problem). Phase 4.0A has the specific CD-006 vs Flagship comparison that makes the principle concrete.

   **This is the strongest argument.** The anti-scale model is NOT purely builder content. It shapes the TC agent's Phase 4 mechanism selection. The proposal (report 25) keeps Phase 4.0A but proposes removing the CSS self-checks ("Comment out your CSS line by line" at line 842). This specific removal is fine -- the TC agent does not write CSS. But the model itself, with the concrete success/failure comparison, MUST stay.

4. **Container width awareness.** The TC agent's metaphor scoring (Phase 3.5E-F) references container width directly. The full 37-line container width section (lines 912-948) includes CSS examples the TC agent does not need, but the PRINCIPLE ("No metaphor may override 940-960px, express narrowing through INTERNAL padding") is essential for perceptual risk assessment. Compressing to a reference is fine; losing the ESCAPE HATCH pattern ("internal padding creates narrow effect without violating width floor") would remove a critical TC-level decision aid.

### Verdict on Builder-Awareness

**PARTIALLY VALID.** Phase 4.9 (tokenization) is legitimately builder-only -- valid trim. Phase 4.7B (landmarks) is mostly builder-only but has a minor TC impact on zone architecture. Phase 4.0A (anti-scale) is ESSENTIAL for TC and must be fully preserved. Container width escape hatch principle must survive in compressed form.

**Risk rating: LOW for tokenization trim, LOW for landmark trim (DG-3 catches it), ZERO for anti-scale model (proposal keeps it), LOW for container width (IF escape hatch principle is preserved in compressed version).**

---

## 5. THE EXPANDED METAPHOR SECTION HAS UNIQUE CONTENT

### BLOCKING FINDING: Unique Content in "Duplicate" Zone

The trim proposal (report 29, line 93) treats PA lines 773-888 as a "self-duplicate" of lines 224-285. This is **INCORRECT**. The expanded section contains unique content that exists NOWHERE ELSE in the codebase:

**5A. "Common Metaphor Traps" (lines 847-878) -- UNIQUE**
Defines 6 specific trap categories with perceptual FLOORS:
- Compression Traps: 32px padding minimum, 40% compression ratio
- Width Traps: 640px minimum content width
- Density Traps: max 3 columns, 16px gap minimum
- Monotony Traps: weight differentiation in first 25-33%, group into arcs
- Label Traps: use color/border/spacing instead of text labels
- Dead Zone Traps: max 24px breathing margins, 48px section spacing

**Grep confirms:** "Common Metaphor Traps" appears ONLY at PA SKILL.md line 847. Not in /build-page, not in conventions-brief, not in TC skill, not in any design-system file. This content is UNIQUE.

**5B. "Content-Form Coupling Detection" (line 844-845) -- UNIQUE METHODOLOGY**
"Does the visual density of each section MATCH the analytical density of its content? Dense analysis = dense typography + tighter spacing. Overview content = generous spacing + lighter touch."

**Grep confirms:** The phrase "Content-Form Coupling Detection" appears ONLY at PA SKILL.md line 844. /build-page has the CONCEPT (line 109: "CONTENT-FORM COUPLING: Each section's visual density...") but NOT the detection methodology for auditors. The auditor needs to know HOW to detect content-form coupling (compare visual density to analytical density). This methodology is unique.

**5C. "Detecting Principled vs Ad-Hoc Composition" (lines 822-842) -- UNIQUE METHODOLOGY**
Defines 4 signatures of principled composition and 4 red flags of ad-hoc composition, plus how to use them when answering PA-03, PA-05a, and PA-65.

**Grep confirms:** "Detecting Principled vs Ad-Hoc Composition" appears ONLY at PA SKILL.md line 822. This evaluation methodology exists nowhere else.

### What IS Actually Duplicated (lines 773-820)

Lines 773-820 DO duplicate lines 224-285:
- "The Fundamental Tension" (line 777) = same concept as "Metaphor-Awareness Principles" (line 224)
- "The Core Principle" (line 786) = same as line 260
- "Metaphor Expression Spectrum" table (lines 796-804) = identical to weaver calibration table (lines 760-768)
- "Fresh-Eyes Detection" (lines 807-820) = new framing but similar content

### Verdict on Expanded Section

**BLOCKING.** The trim proposal must NOT treat lines 773-888 as a monolithic "self-duplicate." The correct action is:

1. **TRIM lines 773-820** (truly duplicated framing, core principle, expression spectrum table) -- ~48 lines
2. **KEEP lines 822-878** (unique evaluation methodologies: principled-vs-ad-hoc, content-form coupling detection, common metaphor traps) -- ~57 lines
3. **TRIM lines 879-888** (audit questions that restate PA-42/43/44) -- ~10 lines

**Net: Keep ~57 lines of unique content, trim ~58 lines of actual duplication. The proposal's blanket "remove 76 lines" would silently destroy 57 lines of unique evaluation methodology.**

**Risk rating: HIGH -- losing Common Metaphor Traps, Content-Form Coupling Detection, and Principled-vs-Ad-Hoc Composition detection means auditors lose evaluation tools they cannot reconstruct from other files.**

---

## 6. HISTORICAL PATTERN: WE REGRETTED UNDER-SPECIFYING BEFORE

### Enrichment Provenance: What Was Added Due to Known Failure Modes

Tracking which proposed-for-trim content was added BECAUSE of a specific failure:

| Content to Trim | Added Because Of | Failure It Prevents | In Trim? |
|-----------------|------------------|---------------------|----------|
| **Phase 3.5G: Metaphor Quality Rubric** (lines 634-687, 54 lines) | Ceiling experiment: metaphor scored 12/12 on existing rubric but produced 40% visual survival | Zero-interpretive-distance metaphors | **KEPT** (proposal preserves) |
| **Phase 3.5E-F: Perceptual Risk + Cost** (lines 555-631, 77 lines) | R1 IMPROVEMENT: pipeline predicts richness, not quality; 15-layout test data | High-richness-low-quality metaphors | **KEPT** (proposal preserves) |
| **Phase 4.0: Container Width Guardrails** (lines 912-948, 37 lines) | #1 Phase D failure mode: 4/5 pages violated 940-960px | Container width violations | **COMPRESSED** (values preserved, examples removed) |
| **Phase 4.0A: Anti-Scale Model** (lines 824-842, 19 lines) | Flagship failure: 22% CSS on imperceptible micro-typography | Sub-perceptual CSS waste | **KEPT** (proposal preserves model, removes CSS self-checks) |
| **Phase 4.7B: Landmark Gate** (lines 1471-1535, 65 lines) | Middle experiment: builder omitted footer, auditors flagged "page just stops" | Missing footer/header/main | **TRIMMED** -- covered by /build-page DG-3 |
| **Phase 4.9: Tokenization** (lines 1550-1624, 75 lines) | Middle experiment: 66.5% token compliance vs 80% target | Raw CSS values instead of tokens | **TRIMMED** -- NOT covered elsewhere (see below) |
| **Builder Warnings W-DEADZONE through W-IMPLICIT** (lines 1901-1991, 91 lines) | R6 IMPROVEMENT from 15-layout test: dead zones, over-labeling, grid monotony | Builder execution failures | **TRIMMED** -- claimed covered by conventions-brief but ACTUALLY NOT (see below) |
| **PA Tier 4: Void Prevention** (PA-50-53, ~45 lines) | Ceiling experiment: 9/9 auditors, 70-80% blank scroll | Catastrophic whitespace voids | **KEPT** (questions preserved) |
| **PA-17/PA-41 Tier 1 Equivalence** (~10 lines) | Prior experiments: "metronomic rather than musical" rhythm | Rhythm monotony | **KEPT** (enforcement preserved) |
| **PA-09 Severity Calibration** (~15 lines) | Ceiling experiment: auditors said "dead space" without distinguishing severity | Under-reporting catastrophic voids | **KEPT** (calibration preserved) |

### BLOCKING FINDING: Builder Warnings NOT in conventions-brief.md

The trim proposal (report 25, T-10, lines 74-81) claims builder warning content is "covered by: conventions-brief.md Section 2 (Perception physics), conventions-brief.md Section 12 (Restraint list)."

**Grep confirms: W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, and W-IMPLICIT do NOT appear ANYWHERE in conventions-brief.md.** The search returned zero matches.

This means: if the TC skill's builder warning text is removed (90 lines), and the TC brief's "6. BUILDER WARNINGS" section includes only W- codes (e.g., "W-DEADZONE, W-IMPLICIT"), the builder has NO SOURCE for what these codes MEAN. The warning selection logic would reference codes that resolve to nothing.

**The proposed mitigation ("Have Phase 4.5 include W- codes, full text moves to conventions-brief.md") requires conventions-brief.md to be UPDATED FIRST.** The trim proposal does not schedule this update. If TC is trimmed before conventions-brief is updated, the builder warnings vanish.

### BLOCKING FINDING: Tokenization Self-Check Has No Backup

Phase 4.9 (Tokenization Self-Check, 74 lines) is proposed for removal as "builder content." But:

- Tokenization is NOT in conventions-brief.md (grep confirms: zero matches for "tokenization" or "token compliance")
- Tokenization is NOT in /build-page SKILL.md (grep confirms: zero matches)
- The only reference to token usage is in tokens.css itself (the token definitions, not a usage protocol)

If Phase 4.9 is removed from TC, no file in the pipeline tells the builder about token compliance. The middle-tier experiment achieved 66.5% compliance (below the 80% target). Without the self-check protocol, there is no mechanism to improve on this.

**Mitigation required:** Token compliance guidance must be added to either conventions-brief.md or /build-page's builder spawn prompt BEFORE removing it from TC.

### Is This the Opposite of What Failure Analysis Recommended?

The flagship retrospective identified these root causes (from MEMORY.md):
- **7.9:1 guardrail:playbook ratio** -- builders told what NOT to do, never what TO DO
- **75-line builder visibility cap** -- only 13.4% of prompt absorbed
- **Inverted quality routing** -- best reference files go to wrong agents

The enrichment response was to ADD detail to TC and PA skills. Now we propose to trim 48-52% of TC and 29-35% of PA.

**The key distinction:** The enrichments that were ADDED fall into two categories:
1. **TC-level enrichments** (metaphor quality rubric, perceptual risk, rejection checks) -- the proposal KEEPS all of these
2. **Builder-level content that ended up in TC** (guardrail CSS examples, tokenization, landmarks) -- the proposal removes these

Category 2 was arguably MIS-PLACED enrichment. The builder needs tokenization guidance, but it belongs in the builder's skill/prompt, not in the TC agent's skill. The trim is not reversing the enrichment decision; it is RE-ROUTING enrichments to the correct agent.

**BUT:** The re-routing must actually happen. Currently, the trim plan removes content from TC without confirming it has arrived at the destination (conventions-brief or /build-page). This is the gap.

### Verdict on Historical Pattern

**VALID CONCERN, but the solution is routing, not retention.** The enrichments were necessary. Removing them from TC is acceptable IF AND ONLY IF they exist in the files the builder actually reads. Currently, 2 categories of enrichment (builder warnings and tokenization) do NOT exist in builder-facing files.

**Risk rating: HIGH for builder warnings (6 W- codes with no text definition in any builder file), MODERATE for tokenization (no compliance protocol in any builder file).**

---

## 7. THE n=0 PROBLEM

### Zero Test Runs With Trimmed Skills

The pipeline has been run exactly:
- **n=1** with the current skill sizes (middle-tier experiment, PA-05 4/4, novelty 3/3 STRONGLY NOVEL)
- **n=1** with enriched flagship prompt (flagship experiment, PA-05 1.5/4, FAILED)
- **n=0** with the proposed trimmed skills

The middle-tier success validates the CURRENT skill content. The flagship failure validates that DIFFERENT prompt content (the master execution prompt, not the skills) produces failure. Neither validates trimmed skills.

### What Could Go Wrong With Zero Testing?

1. **The TC agent might under-specify zone architecture.** With Phase 4.7B (landmarks) removed, the TC agent has no reminder that header/footer zones matter. The brief might produce a 3-zone architecture without explicit header/footer consideration. DG-3 catches missing landmarks in the HTML, but by then the builder has already built without footer awareness.

2. **The TC agent might produce CSS directions in the wrong vocabulary.** With the translation grammar compressed to a summary table (M-04, removing 70 lines of CSS-to-metaphor mappings), the TC brief's Section 5 (Metaphor-Implied CSS Directions) might become less specific. The builder then has less guidance on HOW to express the metaphor through CSS.

3. **The PA auditors might lose evaluation methodology.** With the expanded metaphor section trimmed (if done improperly per finding #5 above), auditors lose the principled-vs-ad-hoc detection framework, content-form coupling detection, and common metaphor traps. These are evaluation TOOLS, not just context.

4. **The weaver might lose calibration.** If the weaver protocol is removed from PA and /build-page's spawn prompt has a defect, the weaver operates without calibration tables. This is a single-point-of-failure risk.

### How Confident Should We Be?

**Low confidence for a 48-52% TC trim. Moderate confidence for a 29-35% PA trim.**

The PA trim is safer because:
- The core (63 questions with full text) is preserved
- The trim mostly targets infrastructure (Playwright code, team structure) that auditors never execute
- The quantitative guardrails, Cold Look, Zone Sweep, and Progressive Zoom are all preserved

The TC trim is riskier because:
- It removes 294 lines of "builder content" that MAY provide ambient context for TC quality
- It compresses Phase 4 from ~597 lines to ~200 lines, which is a 66% reduction of the mechanism selection phase
- The Phase 4 compression includes removing the full translation grammar, pacing prediction details, and rhythm variation examples -- all of which help the TC agent produce more specific CSS directions

### Verdict on n=0

**VALID CONCERN.** A 52% trim to TC with zero validation runs is high-risk. Recommendation: trim conservatively first (~30% instead of ~52%), run 1 validation page, then trim further if results hold.

**Risk rating: HIGH for full TC trim without validation, MODERATE for PA trim without validation.**

---

## CONTENT ADDED DUE TO KNOWN FAILURE MODES (Full Provenance Map)

### TC Skill -- Enrichments with Provenance

| Lines | Content | Provenance | Failure Mode It Prevents | Trim Disposition | Safe to Trim? |
|-------|---------|------------|--------------------------|------------------|---------------|
| 345-352 | R5: Richness Formula Cap | Playbook experiment: richness 27 predicted wrong metaphor | High-richness overriding perceptual quality | KEEP | N/A |
| 474-494 | Responsive Degradation Check | R4 IMPROVEMENT from test data | Desktop utilization risk, responsive breakage | KEEP | N/A |
| 535-549 | R2: Content Resonance Split | Test data: nominal resonance predicted wrong | Vocabulary-fit masking structural-fit | KEEP | N/A |
| 555-576 | R1: Perceptual Risk Assessment | Test data: richness =/= quality | Beautiful scores, ugly pages | KEEP | N/A |
| 579-626 | Perceptual Cost Assessment | Added post-R1 | Guardrail violations encouraged by metaphor concept | KEEP | N/A |
| 634-687 | 3.5G: Metaphor Quality Rubric + 6 Rejection Checks | Ceiling experiment: 12/12 rubric, 40% visual survival | Zero-distance metaphors, label-dependent metaphors | KEEP | N/A |
| 824-842 | Anti-Scale Model | Flagship failure: 22% CSS on imperceptible values | Sub-perceptual CSS waste | KEEP (model), TRIM (CSS self-checks) | YES for self-checks |
| 844-1017 | Perceptual Guardrails (full) | Multiple failures: container width, heading spacing, CPL | All perceptual floor violations | COMPRESS (~60 lines) | YES for CSS examples, NO for values |
| 1471-1535 | Landmark Gate | Middle experiment: missing footer | Incomplete page structure | TRIM | YES -- DG-3 covers |
| 1550-1624 | Tokenization Self-Check | Middle experiment: 66.5% compliance | Raw CSS values | TRIM | **NO** -- no backup exists |
| 1901-1991 | Builder Warnings (R6) | 15-layout test: dead zones, over-labeling, monotony | All major builder execution failures | TRIM | **NO** -- no backup exists |

### PA Skill -- Enrichments with Provenance

| Lines | Content | Provenance | Failure Mode It Prevents | Trim Disposition | Safe to Trim? |
|-------|---------|------------|--------------------------|------------------|---------------|
| 105-122 | PA-05c Expanded Sub-Dimensions | Ceiling experiment: proportion diagnosis imprecise | Vague "proportionate" feedback | KEEP | N/A |
| 153-165 | PA-09 Severity Calibration | Ceiling experiment: severity not calibrated | Under-reporting catastrophic voids | KEEP | N/A |
| 202-212 | PA-17/PA-41 Tier 1 Equivalence | Prior experiments: metronomic rhythm | Rhythm monotony passing audit | KEEP | N/A |
| 346-371 | Tier 4 Void Prevention (PA-50-53) | Ceiling experiment: 9/9 auditors, 70-80% void | Catastrophic whitespace | KEEP | N/A |
| 822-842 | Principled vs Ad-Hoc Detection | Enrichment team analysis | Auditors can't distinguish intentional from accidental | TRIM proposed | **NO** -- unique methodology |
| 844-845 | Content-Form Coupling Detection | Enrichment team analysis | Uniform treatment across varied content | TRIM proposed | **NO** -- unique methodology |
| 847-878 | Common Metaphor Traps | Enrichment team + ceiling failure analysis | Compression, width, density, monotony, label, dead zone traps | TRIM proposed | **NO** -- unique content |

---

## UNIQUE CONTENT IN "DUPLICATE" SECTIONS

### PA Expanded Metaphor Section (Lines 773-888) -- Detailed Analysis

| Lines | Content | First Instance? | In Any Other File? | Truly Unique? |
|-------|---------|-----------------|-------------------|---------------|
| 773-776 | Section header + "METAPHOR-AWARENESS PRINCIPLES" | Yes, but duplicate header | Line 224 has same header | NO -- trim |
| 777-795 | "The Fundamental Tension" + "The Core Principle" | Expanded version | Lines 227-258 cover same ground | NO -- trim |
| 796-804 | "Metaphor Expression Spectrum" table | Duplicate | Lines 760-768 have identical table | NO -- trim |
| 805-806 | Flag audit note | Short bridge text | N/A | NO -- trim |
| 807-820 | "Fresh-Eyes Detection" protocol | Unique framing | Lines 224-285 lack this specific 4-step test | **YES** -- unique 4-step test |
| 822-842 | "Detecting Principled vs Ad-Hoc Composition" | **UNIQUE** | Not in any other file | **YES** |
| 844-845 | "Content-Form Coupling Detection" methodology | **UNIQUE methodology** | /build-page has concept, not detection method | **YES** |
| 847-878 | "Common Metaphor Traps" (6 trap categories) | **UNIQUE** | Not in any other file | **YES** |
| 879-888 | "Audit Questions for Metaphor-Driven Layouts" | Duplicate | These are PA-42/43/44 rephrased | NO -- trim |

**RESULT: 57 lines are genuinely unique content. 59 lines are actual duplication. The trim proposal treats ALL 116 lines as duplication.**

---

## RISK ASSESSMENT: WORST CASE FOR EACH TRIM

### TC Trims

| Trim | Worst Case If Wrong | Probability | Severity | Risk |
|------|---------------------|-------------|----------|------|
| Phase 5 + standalone to appendix | Standalone user can't run TC without finding appendix | LOW | LOW | LOW |
| Phase 4.7B landmarks removed | TC produces zoneless header/footer, builder improvises | LOW | MEDIUM | LOW |
| Phase 4.8 section-aware removed | Builder treats all sections identically | LOW | LOW | LOW |
| Phase 4.9 tokenization removed | Builder uses raw values, 60-65% compliance, sub-optimal | MEDIUM | MEDIUM | **MODERATE** |
| Builder warnings removed (W-DEADZONE etc.) | Builder repeats dead zone, over-labeling, monotony failures from 15-layout test | **HIGH** | **HIGH** | **HIGH** |
| Translation grammar compressed | TC brief CSS directions become vague, builder guesses | MEDIUM | MEDIUM | MODERATE |
| Guardrails compressed (CSS examples removed) | TC still has values; builder gets values from conventions-brief | LOW | LOW | LOW |
| Pacing/rhythm compressed | TC produces less specific pacing guidance | LOW | LOW | LOW |
| Component tier/adapt removed | Builder decides without TC input; builder already owns this | LOW | LOW | LOW |

### PA Trims

| Trim | Worst Case If Wrong | Probability | Severity | Risk |
|------|---------------------|-------------|----------|------|
| Modes 1-3 removed | Standalone PA user has no quick-check option | LOW | LOW | LOW |
| Mode 4 team structure removed | Standalone PA user can't deploy; /build-page users unaffected | LOW | MODERATE | LOW |
| Weaver protocol removed | /build-page spawn prompt is only weaver source; bug = no calibration | LOW | HIGH | MODERATE |
| Playwright/scroll code removed | Auditors never used it anyway | ZERO | ZERO | ZERO |
| Expanded metaphor section removed (lines 773-888 wholesale) | Auditors lose principled-vs-ad-hoc detection, content-form coupling detection, 6 metaphor traps | **HIGH** | **HIGH** | **HIGH** |
| Lock sheet format removed | /build-page handles; standalone user reconstructs | LOW | LOW | LOW |
| Team roles removed (keeping language block) | Auditor language HARD BLOCK preserved; other roles in /build-page | LOW | LOW | LOW |
| Standalone infrastructure removed | PA standalone requires reconstruction | LOW | MODERATE | LOW |

---

## OVERALL VERDICT: PROCEED WITH CAUTION

The trim direction is sound. Removing dead builder content from TC, deduplicating team structure between PA and /build-page, and collapsing orphaned standalone infrastructure are all defensible. But the execution plan has 3 BLOCKING issues and 4 significant risks that must be addressed before trimming begins.

---

## REQUIRED MODIFICATIONS TO THE TRIM PLAN

### BLOCKING (Must Fix Before Any Trimming)

**B-01: Add builder warnings to conventions-brief.md BEFORE removing from TC.**
The 6 W- codes (W-DEADZONE, W-OVERLABEL, W-MONOTONY, W-RESPONSIVE, W-STATS, W-IMPLICIT) and their full text must be added to conventions-brief.md (or to a file the builder reads) BEFORE the TC skill's Appendix (lines 1901-1991) is removed. Without this, the builder warning selection logic in the TC brief references codes that resolve to nothing.

**B-02: Add token compliance guidance to a builder-facing file BEFORE removing Phase 4.9 from TC.**
A condensed version of Phase 4.9 (the formula, the 80% target, the "read tokens.css FIRST" instruction) must be added to conventions-brief.md or /build-page's builder spawn prompt. Currently, no file that the builder reads mentions token compliance. The Middle experiment's 66.5% compliance will not improve without this guidance.

**B-03: Do NOT treat PA lines 773-888 as a monolithic "self-duplicate."**
Trim lines 773-820 and 879-888 (actual duplication, ~58 lines). KEEP lines 822-878 (unique evaluation methodology, ~57 lines). The proposal must be updated to distinguish unique content from actual duplication within this range.

### SIGNIFICANT (Should Fix, Moderate Risk If Not)

**S-01: Preserve the translation grammar's core CSS-to-metaphor mappings in compressed form.**
The current proposal (M-04 in report 25) removes 70 lines and replaces with a 5-line summary. This is too aggressive. The TC agent produces "Metaphor-Implied CSS Directions" in the brief (Phase 4.5, Section 5). To produce SPECIFIC directions (not vague ones), it needs the translation grammar's structural categories. Recommendation: compress to ~25-30 lines (one line per mapping category, keeping the Combined Property Patterns).

**S-02: Keep the pacing prediction heuristic's 5 questions in compressed form.**
Report 25 (M-08) proposes compressing from 40 lines to 15 lines. This is acceptable, but the 5 questions themselves (section count, breathing zone model, element uniformity, dramatic moment placement, transition model check) must ALL survive. These are TC-relevant (they shape the brief's zone architecture).

**S-03: Preserve the escape hatch pattern for container width.**
The container width guidance (lines 912-948) includes the critical escape hatch: "Container at 960px + padding at 120px each side = 720px content width. Manuscript aesthetic achieved WITHOUT violating container." This specific pattern is what prevents metaphor-driven width violations. It must survive in compressed form, not just the abstract principle.

**S-04: Run 1 validation page with the trimmed skills before declaring success.**
The n=0 problem is real. The TC trim is a 48-52% reduction. Schedule 1 pipeline run with trimmed skills using content similar to the middle-tier experiment. Compare PA-05 and Tier 5 scores. If they regress, the trim was too aggressive.

### ADVISORY (Nice To Have)

**A-01: Consider a phased trim approach (30% first, then 50% after validation).**
Rather than cutting to 960 lines in one move, cut to ~1,400 lines first (removing only unambiguous dead code: Phase 5, stale paths, tokenization after adding it to conventions-brief, builder warnings after adding to conventions-brief). Validate. Then cut further.

**A-02: Keep the weaver calibration tables in PA skill even after trimming weaver protocol.**
The calibration tables (multi-coherence scale, severity scale, metaphor expression spectrum) are stable content unlikely to drift. Keeping them in PA provides defense-in-depth for the weaver.

**A-03: Document the trim in the PA/TC skill files themselves.**
After trimming, add a 3-line note at the end of each skill: "This skill was trimmed on [date]. Standalone mode content is in STANDALONE-APPENDIX.md. Builder-facing guidance was relocated to conventions-brief.md."

---

## SUMMARY TABLE

| Question | Verdict | Key Evidence |
|----------|---------|-------------|
| 1. Token budget argument | PARTIALLY VALID | Middle-tier succeeded at 1,878 lines; only builder content is pure waste |
| 2. Standalone mode value | SECONDARY BUT REAL | Fallback path + experimentation tool; appendix approach acceptable |
| 3. Duplication as safety net | MIXED | Real conflicts (PA-03) prove dedup needed; calibration tables worth keeping |
| 4. Builder content helps TC | MOSTLY INVALID | Anti-scale model KEPT; tokenization/landmarks genuinely builder-only |
| 5. Expanded section unique content | **BLOCKING** | 57 lines of unique methodology proposed for deletion |
| 6. Historical under-specifying | **BLOCKING** | Builder warnings + tokenization have no backup in any builder file |
| 7. n=0 problem | VALID | Zero test runs; recommend phased approach |

**Final Assessment:** The trim proposal is 80% correct in direction but has critical execution gaps. Fix the 3 blocking issues, address the 4 significant items, and run 1 validation page. Then proceed.
