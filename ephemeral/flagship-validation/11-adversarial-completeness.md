# 11: Adversarial Completeness Audit -- What's MISSING

**Auditor:** Fresh-eyes adversarial agent (Task #11)
**Date:** 2026-02-17
**Inputs:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md` (530 lines), `AUXILIARY-EXECUTION-WRAPPER.md` (398 lines), `09-adversarial-fresh-eyes.md` (330 lines, prior adversarial findings)
**Method:** Gap-hunting across 8 categories. Zero loyalty to either document. Every gap rated by severity and exploitability.

---

## 0. PRIOR ADVERSARIAL FINDINGS: DISPOSITION CHECK

The 09-adversarial-fresh-eyes.md raised 5 blind spots and 9 recommendations. Here is whether each was addressed in the enriched prompt + wrapper:

| # | Prior Finding | Status in Enriched Prompt | Verdict |
|---|---------------|---------------------------|---------|
| BS-1 | Reader absent from system | A8 adds "Reader Journey" 5-act arc; PA auditors serve as reader proxy at Gate 5 | PARTIALLY ADDRESSED -- the 5-act arc is a structural requirement, not a reader proxy. No agent answers "Would I keep scrolling?" from a reader stance. PA auditors evaluate TECHNIQUE, not EXPERIENCE. |
| BS-2 | No content quality gate | P-01 mandates content inventory; wrapper Phase 1D requires content extraction | NOT ADDRESSED -- inventory is QUANTITATIVE (word count, type mix). No quality gate on the PROSE ITSELF. Who writes the <p> text? Who checks it reads well? |
| BS-3 | Metaphor has no kill switch | MG-01 through MG-05 add metaphor gates; Gate 4 adds fresh-eyes structural test | ADDRESSED -- this was the strongest remediation. MG-04 (remove labels, does structure communicate?) is exactly the kill switch recommended. |
| BS-4 | Temporal architecture missing | A8 "Reader Journey" adds 5-act arc; C-18 density arc; C-09 designed moments per quartile | PARTIALLY ADDRESSED -- the 5-act arc exists as a CONVICTION statement. C-09 and C-18 add binary checks. But "pacing" and "escalation" remain undefined. The 5-act arc is in Section A (conviction) not Section B (execution), so builders may not operationalize it. |
| BS-5 | Pipeline assumes additive composition | No change -- pipeline remains 5 sequential passes | NOT ADDRESSED -- acknowledged as fundamental tension but no mitigation. |
| Rec: Reader proxy agent | Recommended post-Pass-2/3 reader proxy | No reader proxy agent in C1 roster | NOT ADDRESSED |
| Rec: Content quality self-check | Recommended ">= 3 sentences per text block" | Not present in B10 self-check | NOT ADDRESSED |
| Rec: Reframe preamble from fear to ambition | Recommended replacing "The ceiling FAILED" framing | A1 thesis opens with "The difference between Flagship and Ceiling is not complexity. It is restraint." -- neutral framing. BUT wrapper Phase 0 opens with "22 agents produced 758,000 lines" which is INTIMIDATION, not inspiration. Wrapper Critical Reminders #4 explicitly says "Middle=4/4, Ceiling=1.5/4" which is failure framing. | MIXED -- prompt itself improved, wrapper reintroduces fear gradient. |
| Rec: Remove audit awareness from builder | Recommended builder not know about 9 auditors | B10 self-check does NOT mention 9 auditors. But builder IS told "SendMessage to team-lead" at multiple points, implying oversight. Builder prompt routing (E section) is clean. | MOSTLY ADDRESSED -- builder prompt is cleaner, but CP-B message requirement implies surveillance. |
| Rec: Bridge conviction to execution | Recommended single-word annotations on rules | Not present -- rules remain unlinked to conviction principles | NOT ADDRESSED |

**SUMMARY: 1 fully addressed (BS-3), 2 partially addressed (BS-1, BS-4), 6 not addressed.** The metaphor kill switch was the strongest prior recommendation and was implemented well. Content quality and reader proxy remain the largest unaddressed gaps.

---

## 1. OPERATIONAL GAPS -- Can Agents Actually Execute This?

### OG-1: PLANNER AGENT IS PHANTOM (Severity: CRITICAL)

The enriched prompt references a "Planner" in multiple places:
- CP-A: "Builder -> Planner" (line 331)
- CP-E: "Each pass -> next pass" (line 337)
- Section E: "PLANNER reads: mechanism-catalog.md, semantic-rules.md" (line 419-422)
- B10 self-check: "SendMessage to planner with spatial concern" (line 292)

But the C1 Agent Roster (lines 300-324) has NO planner agent. The roster lists: Content Architect, Metaphor Agent, Skeleton Builders A+B, Embedded Auditor, Mechanism Builder, Metaphor Builder, Intentionality Builder. NO PLANNER.

Who is the planner? Is it the Content Architect? The Metaphor Agent? The Team Lead? This is a phantom reference -- a role named in the communication protocol but not instantiated in the roster. Every CP-A message goes to nobody.

### OG-2: BUILD PLAN HAS NO AUTHOR (Severity: HIGH)

Multiple agents are told to read "the build plan":
- Skeleton builders: "build plan from planner" (wrapper line 169)
- Mechanism builder: "build plan" (wrapper line 187)
- Section E: "BUILDER reads: [build plan file]" (line 413)
- Artifact chain: "03-build-plan.md" (wrapper line 340)

But no agent in the C1 roster is assigned to PRODUCE the build plan. The Content Architect produces "01-content-assessment.md". The Metaphor Agent produces "02-metaphor-derivation.md". Who writes "03-build-plan.md"? This is a critical artifact with no author.

### OG-3: GATE 0 LACKS A GATE-CHECKER (Severity: MODERATE)

Gate 0 says: "Team-lead verifies content-to-void >= 60:40 estimate, zone count check, content/zone >= 1.5."

But the team-lead has not yet seen the HTML. There IS no HTML at Gate 0 -- only a content inventory and a metaphor derivation. How does the team-lead estimate content-to-void from a word count document? The gate checks spatial properties on an artifact that is purely textual.

This means Gate 0 is either: (a) a paper exercise the team-lead waves through, or (b) requires the team-lead to do mental spatial math from word counts. Neither produces reliable spatial confidence.

### OG-4: "COMPETITIVE" SKELETON BUILD HAS NO SELECTION CRITERIA (Severity: MODERATE)

C1 says "2 parallel [skeleton builders], team-lead picks better." But what makes one "better"? The embedded auditor "reports to team-lead: which skeleton is better and why" -- but the auditor has no scoring rubric for skeleton comparison. Is it the one with better content-to-void? Better section spacing? Better header proportions? All of the above with equal weight?

Without explicit selection criteria, the team-lead makes a judgment call -- exactly the type of decision the system claims to have eliminated.

### OG-5: WRAPPER PHASE 0 IS UNREALISTIC FOR AN AGENT (Severity: MODERATE)

The wrapper says: "Read it LINE BY LINE. All 530 lines. Then write a file called 00-prompt-digest.md containing: [7 extraction sections]."

This requires the executing instance to produce a 530-line digest BEFORE spawning any agents, BEFORE doing any design work. For an Opus agent with context limits, this digest alone may consume 15-20% of the context window before any productive work begins. The wrapper also requires 11 additional extraction files in Phase 1. That is 12 extraction documents before a single line of HTML is written.

The extraction overhead is itself a judgment-free operation (listing rules, parameters, prohibitions). But it consumes significant time and context for marginal benefit. If the executing instance can produce a correct digest, it has already read and understood the prompt -- the digest is proof-of-reading, not comprehension-enhancing.

### OG-6: "MINIMUM 8 SUBSTANTIVE MESSAGES" IS UNVERIFIABLE AT RUNTIME (Severity: LOW)

C2 says "Minimum 8 substantive messages across experiment. Zero messages at Gate 1 = PAUSE BUILD." But who counts? The team-lead would need to maintain a running message counter. The enriched prompt does not include message counting in the gate execution log template. This rule is aspirational rather than structurally enforced.

---

## 2. CONTENT GAPS -- The Content Source Problem

### CG-1: CONTENT TRANSFORMATION IS COMPLETELY UNSPECIFIED (Severity: CRITICAL)

The content source is `RESEARCH-SYNTHESIS.md`. This is a RESEARCH DOCUMENT -- it contains synthesis frameworks, principle tables, implementation suggestions, and cross-research attribution. It is written for AGENTS, not for HUMAN READERS of a showcase page.

The enriched prompt says nothing about:
- How to transform research prose into showcase prose
- What to include vs exclude from RESEARCH-SYNTHESIS.md
- What reading level to target
- Whether to write new prose or adapt existing prose
- What tone the TEXT should have (the prompt specifies VISUAL tone -- warm, authoritative -- but not TEXTUAL tone)
- Whether technical jargon should be preserved, simplified, or expanded
- How much of the source to use (all of it? selected principles? executive summary only?)

The Content Architect is asked to produce a "content inventory" (word count per section, content type mix). This is STRUCTURAL, not EDITORIAL. No agent is tasked with content EDITING -- deciding what words actually appear on the page.

### CG-2: WORD COUNT TARGET IS ABSENT (Severity: HIGH)

S-15 gives zone count limits by word count ("<1500w=2 zones, 1500-3000w=3, 3000-5000w=4, 5000+=5"). But what TOTAL word count is the page targeting? The source document (RESEARCH-SYNTHESIS.md) has thousands of words. The flagship page is a single HTML page. How many words should appear on it? 2,000? 5,000? 10,000?

This determines:
- How many zones (S-15)
- How many sections (S-06 says >= 5)
- How much scroll depth (affects all void calculations)
- How many mechanisms can be meaningfully deployed

Without a word count target, the Content Architect has no constraint on scope. They could produce a 2-page summary or a 20-page exhaustive treatment. Both are valid readings of the prompt.

### CG-3: NO CONTENT-FORM ALIGNMENT SPECIFICATION (Severity: HIGH)

The prompt talks extensively about "content DEMANDED the structure" (Section D, line 398). But there is no specification for HOW content demands structure. The prompt says the build plan should specify mechanisms per section -- but which mechanisms fit which content?

D3 enrichment (content-form fit) is traced in the enrichment table (line 496) to P-05 and P-06. P-05 says zone boundaries require "content type change." But the TYPES aren't defined. What is a "content type"? Narrative vs reference vs code vs data? (The wrapper mentions these in Phase 1D extraction.) But there's no rule that says "narrative content gets X treatment, reference content gets Y treatment."

---

## 3. RECOVERY GAPS -- What Happens When Things Go Wrong?

### RG-1: GATE 4 METAPHOR FAILURE HAS NO REAL RECOVERY (Severity: HIGH)

Gate 4: "2 fresh-eyes agents. Metaphor structural >= 70% without labels." If this fails -- the metaphor is announced, not structural -- the prompt says... nothing specific.

The general recovery rule (Phase 5, wrapper) says "max 2 fix cycles per gate." But fixing a metaphor that is announced-not-structural may require re-doing ALL of Pass 3 (metaphor integration), not just tweaking CSS. The metaphor vocabulary is woven through zone names, channel encodings, and structural elements. "Fixing" it means re-deriving OR accepting the downgrade.

The wrapper's staged downgrade says "Pass 2+ complete = ship as CEILING-PLUS." But if Gate 4 fails, the page has Passes 1-3 complete with a broken metaphor. Shipping it as "CEILING-PLUS" ships a page with an announced metaphor. Is that acceptable? The prompt doesn't say.

### RG-2: CONCURRENT GATE FAILURES ARE UNADDRESSED (Severity: MODERATE)

What if Gate 3 (composition) passes but the spatial re-check (P-08) reveals regression that was missed at Gate 1? The prompt handles "Gate N fails" but not "Gate N passes while Gate M regresses." The re-check in P-08 specifically targets this: "If content-to-void degrades > 10 points from Pass 1, ROLLBACK." But rollback to WHAT? The winning skeleton? That means discarding all of Pass 2's mechanism work.

### RG-3: HTML CORRUPTION / BUILD ARTIFACT LOSS (Severity: LOW-MODERATE)

The 5-pass pipeline produces a single HTML file that is progressively modified across passes. If the file gets corrupted (malformed HTML, missing closing tags, CSS that breaks rendering), there is no recovery mechanism. The prompt doesn't mention: file backups between passes, file validation between passes, or artifact versioning (e.g., keeping 05-winning-skeleton.html as a rollback point).

The wrapper's artifact chain (lines 336-349) lists numbered files, but it's unclear whether each file is a COPY (safe rollback point) or a RENAME (only one version exists at a time).

### RG-4: AGENT DISAGREEMENT PROTOCOL IS MISSING (Severity: MODERATE)

What if the Embedded Auditor says Skeleton A is better, but the team-lead disagrees based on gate checks? What if two PA auditors give contradictory PA-05 scores (one says 4/4, another says 1/4)? The PA synthesis says "PA-05 composite score: average of all 9 auditors' PA-05 assessments." Averaging works for mild disagreement but not for bimodal distributions. If 5 auditors say 4/4 and 4 say 1/4, the average is 2.7/4 -- DO NOT SHIP. But the majority thinks it's excellent. Who is right?

---

## 4. HUMAN FACTORS -- Fear Gradient and Creativity Suppression

### HF-1: WRAPPER REINSTATES THE FEAR GRADIENT THE PROMPT REDUCED (Severity: HIGH)

The enriched prompt's Section A opens with a dignified thesis about restraint. Good.

But the wrapper's Phase 0 opens with: "You are about to execute the most important build in this design system's history. 22 agents across 5 research passes produced 758,000 lines of analysis." This is INTIMIDATION FRAMING. It tells the executing agent: "the weight of history is on your shoulders." This creates exactly the defensive posture the prior adversarial audit warned about.

The wrapper's Critical Reminders section (lines 379-393) includes: "Middle experiment at 2 scales: PA-05 4/4. Ceiling experiment at 4 scales: PA-05 1.5/4." This is FAILURE COMPARISON. It primes the agent to fear over-ambition rather than pursue excellence.

The wrapper and prompt have OPPOSITE emotional architectures. The prompt says "the mission is beauty, not compliance." The wrapper says "here are 12 extraction files you MUST produce before doing anything, here are 10 anti-skimming enforcement rules, here is a 15-file artifact chain you must maintain." The wrapper operationally converts "beauty" into "compliance."

### HF-2: 12 EXTRACTION FILES BEFORE ANY CREATIVE WORK (Severity: MODERATE)

The wrapper requires 11 extraction files + 1 prompt digest = 12 documents BEFORE any team creation. This is approximately 2-4 hours of extraction work (reading 11 source files, writing 12 extraction artifacts). All of this happens before the first creative decision.

This front-loading creates:
- Context exhaustion before creativity begins
- Compliance fatigue (12 checkbox exercises before the real work)
- Implicit message: "understanding is more important than doing"

The wrapper itself says "STOP ANALYZING. START BUILDING." But it also requires 12 analysis documents before building can start. These instructions contradict each other.

### HF-3: SURVEILLANCE DENSITY (Severity: MODERATE)

Across both documents, the builder is subject to:
- 12-item self-check (B10)
- 5 mandatory communication checkpoints (CP-A through CP-E)
- 6 gates (0 through 5)
- 9 PA auditors
- 1 embedded auditor
- Programmatic audit (computed style checks)
- Escalation triggers for "any measurement within 10% of threshold"
- "Zero messages at Gate 1 = PAUSE BUILD"

This is approximately 35 surveillance touchpoints across the build. Some are excellent (gates catch real failures). But the DENSITY of oversight creates an environment where the builder's primary cognitive task becomes "satisfying oversight" rather than "building something beautiful."

---

## 5. TEMPORAL GAPS -- Pacing, Timeboxing, and When to Stop

### TG-1: NO PER-PASS TIME BUDGET (Severity: HIGH)

The wrapper mentions "240 minutes" as a staged downgrade trigger and "320 minutes" as the total pipeline estimate. But no individual pass has a time budget. How long should Pass 0 take? If the metaphor agent spends 90 minutes on tension derivation (which is plausible given the TC skill's 1,932 lines), Pass 1 doesn't start until minute 90, leaving only 150 minutes for Passes 1-5.

Without per-pass budgets, there is no way to detect that the pipeline is behind schedule until it's too late to recover.

Suggested budgets (based on complexity):
- Pass 0 (Content + Metaphor): 60 min max
- Pass 1 (Skeleton): 45 min max
- Pass 2 (Mechanisms): 45 min max
- Pass 3 (Metaphor Integration): 30 min max
- Pass 4 (Intentionality): 30 min max
- Pass 5 (PA Audit): 60 min max
- Gates + overhead: 50 min
Total: 320 min

### TG-2: NO ITERATION BUDGET (Severity: MODERATE)

Gates allow "max 2 fix cycles." But there is no time budget per fix cycle. If Gate 1 fails and the builder takes 40 minutes per fix cycle, that's 80 minutes of unbudgeted repair time. The pipeline has no slack for this.

### TG-3: WHEN TO STOP ITERATING (Severity: MODERATE)

If PA-05 = 2.8/4 (just below the 3/4 threshold), and the builder has time for one more iteration, what should they fix? The prompt says "targeted fixes on BLOCKING findings only" but doesn't prioritize WHICH blocking findings to fix when time permits only one fix.

---

## 6. QUALITY DEFINITION GAPS -- How Does a Builder KNOW?

### QD-1: "BEAUTY" IS UNDEFINED IN OPERATIONAL TERMS (Severity: HIGH)

Section D says "The mission is beauty, not compliance." Section A1 says "Beauty = confident intention at every scale of attention." But "confident intention" is itself undefined. How does a builder distinguish confident intention from hesitant compliance?

The closest operational definition is A1's 5-second test: "arrival (dark header authority + warm cream welcome), orientation (context box within first viewport), first delight (visual moment within 15-20% scroll), spatial confidence (distributed visual weight across full scroll)." This is good but it defines STRUCTURAL beauty, not EXPERIENTIAL beauty. A page can have all four structural elements and still feel mechanical.

### QD-2: "WARM" HAS NO CSS DEFINITION (Severity: MODERATE)

A2 says Temperature axis: "Warm" IS, "Soft" IS NOT. But what CSS properties make something warm vs soft? The soul tokens specify warm cream (#fefcf3) and warm-shifted neutrals. But "warm" in overall page feel comes from spacing, content density, and rhythm -- not just color temperature. The builder has no actionable path from "be warm" to CSS decisions beyond color.

### QD-3: SUCCESS CRITERIA ARE SCORE-BASED, NOT EXPERIENCE-BASED (Severity: HIGH)

The final verdict comes down to PA-05 >= 3/4. PA-05 has four sub-criteria: Designed, Coherent, Proportionate, Polished. These are AUDITOR judgments, not READER experiences. A page that scores 4/4 on Designed (clear design intent) could still be boring, confusing, or emotionally flat to a reader.

The system has no way to measure: "Did this page make me want to keep scrolling?" or "Did I learn something?" or "Would I bookmark this?" These are the actual quality criteria for a showcase page.

---

## 7. READER REPRESENTATION -- Who Speaks for the Reader?

### RR-1: NO READER PROXY IN THE ENTIRE PIPELINE (Severity: CRITICAL)

The prior adversarial audit (BS-1) identified this as CATASTROPHIC. The enriched prompt added a 5-act reader journey (A8). But A8 is a CONVICTION STATEMENT, not an AGENT ASSIGNMENT. No agent in the C1 roster is tasked with reading the page AS A READER.

The PA auditors are the closest thing, but they evaluate TECHNIQUE (PA questions like "Is the container width correct?" "Are designed moments present?"), not EXPERIENCE ("Do I understand what this page is about?" "Am I engaged?"). The cold-look protocol (5 seconds, gut reaction) is the closest to reader experience, but it's one data point per auditor, followed by 45+ technique questions that drown it out.

A reader proxy agent would:
- Read the page with ZERO design context
- Answer: "What is this about? Would I keep scrolling? What did I learn?"
- Provide experiential feedback BEFORE the PA audit
- Cost: ~15-20 minutes, 1 agent

### RR-2: CONTENT READABILITY IS UNGATED (Severity: HIGH)

No gate checks whether the TEXT on the page is readable, engaging, or clear. Gates check: container width, void ratios, mechanism counts, metaphor structure, soul compliance. All VISUAL properties. The actual words -- which are what a reader READS -- are ungated.

A page could pass every gate with Lorem Ipsum. The gates don't check content.

---

## 8. CONTENT QUALITY -- Who Writes and Edits the Text?

### CQ-1: NO CONTENT WRITER AGENT (Severity: CRITICAL)

The Content Architect (Pass 0) produces a content INVENTORY -- structural analysis of the source material. But who transforms RESEARCH-SYNTHESIS.md (a research document written for agents) into SHOWCASE PROSE (a web page written for humans)?

Possible interpretations:
1. The skeleton builder copies text directly from RESEARCH-SYNTHESIS.md
2. The skeleton builder writes new prose based on the content inventory
3. Some unnamed agent adapts the source material into page-ready text
4. The content is pre-written and the pipeline only handles layout

None of these is specified. The most likely outcome: the builder copies research prose verbatim, producing a page that reads like a research paper, not a showcase.

### CQ-2: TONE MISMATCH BETWEEN SOURCE AND OUTPUT (Severity: HIGH)

RESEARCH-SYNTHESIS.md is written in analytical tone: "Premium docs use density rhythm (HIGH->LOW->HIGH cycles). R-3 extends this to 6 dimensions." The flagship page should be "warm, authoritative, unhurried." These are different registers. Analytical research prose is not warm. It is not unhurried. It is informational.

No agent is tasked with the TONAL TRANSFORMATION from analytical to warm-authoritative. The personality specification (A1: "Warm. Authoritative. Unhurried.") applies to the VISUAL design, but the text on the page also has personality. Visual warmth + analytical text = tonal dissonance.

### CQ-3: CONTENT EDITING QUALITY GATE (Severity: HIGH)

Proposed addition that is absent: After content is placed in the skeleton (Pass 1), before mechanisms are applied (Pass 2), a content quality check:
- Every <p> element has >= 2 substantive sentences
- No text is copied verbatim from source (adaptation required)
- Text tone matches visual tone (warm, not analytical)
- Section headings are reader-facing, not research-facing
- Content is self-contained (reader doesn't need to have read R1-R5)

---

## 9. CROSS-CUTTING CONCERNS

### CC-1: TYPOGRAPHY TRINITY INCONSISTENCY (Severity: LOW)

The enriched prompt (U-09, line 155) specifies: "Instrument Serif / Source Sans 3 / Source Code Pro." But the design-system/CLAUDE.md (auto-loaded) specifies: "Instrument Serif / Inter / JetBrains Mono." These are different font families for body and code. Which is authoritative?

The enriched prompt says its Appendix values are "authoritative" for contradictions. But the design-system CLAUDE.md is auto-loaded and may override agent mental models. This font discrepancy could produce soul violations.

### CC-2: BUILDER PROMPT LENGTH INCONSISTENCY (Severity: LOW)

The Appendix says "Builder prompt length: <= 75 lines." But the B10 self-check alone is 18 lines. The soul rules (B2) are 10 lines. The spatial rules (B1) are 15 lines. That's 43 lines of mandatory content, leaving 32 lines for conviction + composition + process rules. This is very tight. Has anyone verified that the actual builder prompt slice fits in 75 lines?

### CC-3: RICHNESS MATRIX (SC-03) MAY BE UNMEASURABLE (Severity: MODERATE)

SC-03 says ">= 30 of 35 cells (5 scales x 7 channels) populated for Flagship." But who fills this matrix? The mechanism builder? The metaphor builder? The auditor? And how is "populated" defined -- does having ANY CSS property at a given scale-channel intersection count? Or must it be a DESIGNED, INTENTIONAL property?

This rule is binary in format but judgment-heavy in execution. An agent could "populate" 30 cells by counting every CSS property at every scale, including accidental ones. Or they could strictly count only intentionally designed scale-channel assignments, and barely reach 20.

---

## 10. SEVERITY SUMMARY

| Severity | Count | Key Items |
|----------|-------|-----------|
| CRITICAL | 4 | OG-1 (phantom planner), CG-1 (content transformation), RR-1 (no reader proxy), CQ-1 (no content writer) |
| HIGH | 8 | OG-2 (build plan author), CG-2 (word count target), CG-3 (content-form alignment), RG-1 (Gate 4 recovery), TG-1 (per-pass time budget), QD-1 (beauty undefined), QD-3 (score vs experience), CQ-2 (tone mismatch) |
| MODERATE | 9 | OG-3 (Gate 0 checker), OG-4 (skeleton selection), OG-5 (wrapper Phase 0), HF-1 (fear gradient), HF-2 (extraction overhead), HF-3 (surveillance density), RG-2/3/4, TG-2/3, QD-2, CC-3 |
| LOW | 3 | OG-6 (message counting), RG-3 (file corruption), CC-1/CC-2 |

---

## 11. TOP 5 RECOMMENDATIONS (Highest Leverage)

### 1. ASSIGN THE PLANNER ROLE (fixes OG-1, OG-2)
Add a Planner agent to the C1 roster, OR explicitly assign the build plan to the Content Architect / team-lead. Route CP-A messages to the correct recipient. Produce 03-build-plan.md with an identified author.

### 2. ADD CONTENT WRITER/ADAPTER AGENT (fixes CG-1, CQ-1, CQ-2, RR-2)
Between Pass 0 (content architecture) and Pass 1 (skeleton), a Content Writer (Opus) transforms RESEARCH-SYNTHESIS.md source material into showcase-ready prose. Deliverable: adapted text with reader-facing tone, section headings, and word count within target range. Gate: text is self-contained, warm-toned, no verbatim source copying.

### 3. ADD READER PROXY AT GATE 4 (fixes RR-1, QD-1, QD-3)
Alongside the two fresh-eyes metaphor evaluators at Gate 4, add one reader proxy agent who reads the page cold and answers: "What is this about? Would I keep scrolling? What did I feel?" This costs ~15 minutes and catches experiential failures that technique audits miss.

### 4. ADD PER-PASS TIME BUDGETS (fixes TG-1, TG-2)
Specify maximum minutes per pass in the C3 gate sequence. Include 50-minute slack buffer. If any pass exceeds budget by >50%, trigger early staged downgrade evaluation.

### 5. RECONCILE WRAPPER EMOTIONAL ARCHITECTURE WITH PROMPT (fixes HF-1, HF-2)
The wrapper's Phase 0 intimidation framing and 12-extraction-file requirement contradict the prompt's "STOP ANALYZING. START BUILDING." philosophy. Either reduce extraction requirements to the 3-4 most critical files, or remove the intimidation language from the wrapper preamble. The wrapper should amplify the prompt's conviction, not undermine it.

---

## 12. THE ONE THING I WOULD CHANGE

If I could change only ONE thing: **add a Content Writer agent to Pass 0.5.**

The entire system assumes content is pre-solved. It is not. RESEARCH-SYNTHESIS.md is a research document. The flagship is a showcase page. Someone must bridge that gap. Every other gap (reader proxy, tone, readability, word count) flows downstream from this single omission. Fix the content pipeline and half the other gaps resolve naturally.

---

**END ADVERSARIAL COMPLETENESS AUDIT**
**Gaps found:** 24 (4 CRITICAL, 8 HIGH, 9 MODERATE, 3 LOW)
**Prior findings addressed:** 1/9 fully, 2/9 partially, 6/9 not addressed
**Highest-leverage fix:** Add Content Writer agent to bridge research prose -> showcase prose
