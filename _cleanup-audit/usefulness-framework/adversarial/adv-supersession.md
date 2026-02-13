# ADVERSARIAL CHALLENGE: Supersession Dimension

**Challenger:** adv-supersession
**Date:** 2026-02-13
**Target:** `dim-supersession.md`
**Method:** Spot-check empirical claims, challenge compression assumptions, verify "lossless signal" hypothesis

---

## CHALLENGE 1: Is 8.4:1 Compression REALLY Proof of Lossless Signal Capture?

### The Claim (Lines 99-125)

> **Compression ratio averaging 8.4:1 (88% information loss) proves synthesis captured signal while discarding noise.**
>
> **The compression is lossless for SIGNAL and lossy for NOISE.**

### The Challenge

**This is circular reasoning.** The dimension researcher DEFINES what constitutes "signal" vs "noise," then uses compression ratio as PROOF that signal was preserved. But how do we know the 12% that survived is ALL the signal and not SOME of the signal?

**Empirical test:** I spot-checked one scratchpad file (`fresh-eyes.md`, 325 lines) against the synthesis (`OD-GRANULAR-AUDIT-RESULTS.md`, first 200 lines).

**What the scratchpad contains that the synthesis OMITS:**

1. **Per-OD Craftsmanship Tables** (Lines 109-123 in fresh-eyes.md)
   - 10 "tells" evaluated per OD (alignment precision, spacing consistency, border commitment, etc.)
   - Each with specific ASSESSMENT text ("LEFT EDGES ALIGNED", "Three-tier spacing visible", etc.)
   - **Synthesis version:** Generic summaries only ("Craftsmanship: STRONG", "Border commitment: Mixed")

2. **Perceptual Nuance Lost**
   - Fresh-eyes line 41: "Borders that whisper when they should speak. The page feels 'mixed conviction.'"
   - Fresh-eyes line 72: "Three different designers made the headers. OD-001/002 feel like one hand."
   - **Synthesis version:** "Header metadata layout inconsistency" (Finding listed but PERCEPTUAL characterization lost)

3. **Dialectical Thinking Lost**
   - Fresh-eyes line 43-44: "Bias defeated: Consistency bias ('all borders should be the same'). No -- the issue is..."
   - This is ADVERSARIAL METHODOLOGY showing what biases were tested and rejected
   - **Synthesis version:** Does not preserve that this finding was adversarially tested

4. **Specific Visual Experience Lost**
   - Fresh-eyes line 56-58: OD-004 dead zone described as "COMPLETELY BLANK viewport -- nothing but warm cream background... This is an entire screen of nothing in the middle of the page."
   - **Synthesis version:** "full-viewport dead zone" (finding ID preserved but VISCERAL description lost)

5. **Comparative Judgment Lost**
   - Fresh-eyes line 294-296: "OD-001/002 feel more crafted than OD-003/004/005" with explicit dialect categorization
   - **Synthesis version:** Mentions dialects but does not preserve the RELATIVE QUALITY ASSESSMENT between dialects

### What This Means

**The 8.4:1 compression is NOT lossless for signal.** It is lossless for FINDINGS (IDs, severity, yes/no verdicts) but LOSSY for:

- **Perceptual characterization** ("whisper when they should speak")
- **Adversarial methodology** (what biases were tested and defeated)
- **Relative judgments** (which ODs are "more crafted" than others)
- **Visceral experience** (what it FEELS like to scroll through a dead zone)
- **Detailed assessments** (10-row craftsmanship tables compressed to 2-word summaries)

**This is acceptable for operational use** (you CAN extract findings and apply fixes), but it is NOT "lossless signal preservation." It is **FINDINGS-preserving, CONTEXT-discarding compression.**

### Verdict on Claim

**OVERSTATED.** The dimension document should say:

> "8.4:1 compression preserves FINDINGS (IDs, severity, recommendations) but discards CONTEXT (perceptual characterization, adversarial methodology, relative judgments, detailed assessments). For operational fix execution, findings are sufficient. For understanding WHY findings matter or HOW they were discovered, context is lost."

---

## CHALLENGE 2: Does Compression ALWAYS Equal Noise Elimination?

### The Claim (Lines 260-283)

> **Lossy compression is INTENTIONALLY lossy because the lost content has no operational value:**
>
> - Iteration history → only Final is load-bearing
> - Per-agent attribution → only findings matter, not who found them
> - Adversarial debates → synthesis captures resolution, debate is process noise
> - Execution logs → completion is binary, timestamps are metadata

### The Challenge

**This assumes "operational value" is the ONLY value.** But the dimension document ITSELF acknowledges exceptions:

- Line 267: "Exception: If iterations demonstrate THINKING evolution (e.g., paradigm shifts), may retain archival value"
- Line 272: "Exception: If attribution reveals systematic bias (e.g., visual agents miss structural issues), retain for calibration"
- Line 278: "Exception: If debate reveals edge cases or ambiguity, document in synthesis as 'open question'"

**So the researcher KNOWS some "noise" has value.** But then claims:

> "For post-CD pipeline work, signal is what matters. Noise is archival." (Line 134)

**The problem:** How do you know WHICH iteration history demonstrates paradigm shifts? How do you know WHICH debates reveal edge cases? You can't know WITHOUT READING THE SCRATCHPADS.

**Empirical example from fresh-eyes.md:**

- Lines 188-196: Fresh-eyes identifies OD-003/OD-004 as **CONDITIONAL NO** and **NO** respectively (failed ship verdicts)
- Lines 83-85, 139-141: Visual-First auditors gave OD-003 and OD-004 **PASS** verdicts
- Line 192-193: Weaver documents CONTRADICTION between auditors and fresh-eyes, then RESOLVES it: "Fresh-eyes is correct that border inconsistency and monotony are shippability concerns. Visual auditor focused on soul compliance (which passes) while fresh-eyes focused on craft quality (which doesn't)."

**This adversarial debate outcome IS preserved in synthesis** (I can see the contradiction documented). So this is NOT an example of lost signal.

**But:** The synthesis says "Fresh-eyes is correct" — did it preserve the ARGUMENT that led to this conclusion? Let me check...

**Synthesis lines 144-151 (from my read):**
> Fresh-Eyes FINDINGS:
> - Ship verdict: CONDITIONAL NO -- two blockers: (1) worst border inconsistency, (2) monotonous island repetition
> - Craftsmanship: Weakest of all 6 ODs

**Fresh-eyes original argument (lines 180-184 in scratchpad):**
> The issue is repetitive sameness, not incompleteness. A task-based page should vary task complexity (some simple 2-step tasks, some complex 5-step tasks) to create natural rhythm variation. Currently all islands feel the same weight.

**Verdict:** The CONCLUSION ("monotonous") is preserved. The REASONING ("task-based pages should vary complexity to create rhythm variation") is **NOT** preserved in synthesis.

**This is design KNOWLEDGE lost.** If a future builder reads the synthesis, they know OD-003 failed for "monotony" but NOT what would fix it (vary task complexity, not just repeat identical 5-step islands).

### What This Means

**Compression discards REASONING, not just "noise."** The synthesis is CONCLUSION-preserving but ARGUMENT-discarding.

For operational use: You can see the verdict (CONDITIONAL NO).
For learning use: You CANNOT see the design principle that led to the verdict.

### Verdict on Claim

**PARTIALLY CORRECT.** Lossy compression is ACCEPTABLE for fix execution (you know WHAT to fix). But it is NOT acceptable for learning transfer (you don't know WHY it's wrong or WHAT PRINCIPLE to apply).

**The dimension document should distinguish:**
- **Operational signal** (findings, verdicts, recommendations) — 12% preserved
- **Reasoning signal** (design principles, arguments, WHY) — partially lost in compression
- **Process noise** (timestamps, agent names, iteration order) — fully lost, acceptable

---

## CHALLENGE 3: "Absorbed" Does Not Mean "100% Signal Captured"

### The Claim (Lines 19-28)

> A file is SUPERSEDED when:
>
> 1. A synthesis document exists that explicitly absorbs it
> 2. **The compression ratio is lossless for SIGNAL**
> 3. The compression ratio is lossy for NOISE
> 4. **No unique content remains** that isn't captured in synthesis
> 5. Forward consumption references the synthesis, not the original

### The Challenge

**Item #4 is UNCHECKABLE without reading the original.**

The dimension document provides a checklist (lines 189-215) but look at item 4:

> □ Spot-check: No content in original that synthesis doesn't capture

**Who does the spot-check?** If the answer is "the synthesizer agent," then this is self-certification (the agent that wrote the synthesis declares the synthesis complete).

**If no one spot-checks**, then "no unique content remains" is an ASSUMPTION, not a verification.

**I performed a spot-check** (fresh-eyes.md vs synthesis) and found:

1. **10-row craftsmanship tables** → compressed to 2-word summaries ("STRONG", "Mixed")
2. **Perceptual descriptions** ("whisper when they should speak") → lost
3. **Design principles** ("task-based pages should vary complexity") → lost
4. **Adversarial methodology** (bias defeated: consistency bias) → lost

**These ARE unique content.** They are NOT preserved in synthesis.

**But:** Are they SIGNAL or NOISE?

- For fix execution: **NOISE** (you don't need the metaphor "whisper when they should speak" to know 2px borders violate Rule 5)
- For design learning: **SIGNAL** (the metaphor explains WHY 2px borders are bad: insufficient visual commitment)

### What This Means

**"No unique content" depends on what you consider CONTENT.**

If content = findings, verdicts, recommendations → **TRUE, no unique content lost**
If content = reasoning, principles, methodology → **FALSE, unique content lost**

### Verdict on Claim

**REFRAME NEEDED.** The checklist should say:

> □ Spot-check: No OPERATIONAL content in original that synthesis doesn't capture
> □ Acknowledge: REASONING and METHODOLOGY are compressed out (acceptable for fix execution, not for learning transfer)

---

## CHALLENGE 4: Forward-Consumption Test Is Circular

### The Claim (Lines 137-154)

> **Test Results (From Adversary Analysis):**
>
> - 53 files reference the 12 underscore directories
> - **2 files** actually TRAVERSE into scratchpads
> - **51 files** cite scratchpads BIBLIOGRAPHICALLY (provenance metadata, not traversal)
>
> **What this means:**
> - Synthesis documents SAY they absorbed scratchpads
> - But NO ONE READS the scratchpads after synthesis exists

### The Challenge

**This is a RESULT of synthesis existing, not PROOF that synthesis is complete.**

**Analogy:** If I burn all the research papers after writing my thesis, no one can read them. Does that PROVE my thesis absorbed everything? No. It just proves the papers are inaccessible.

**The dimension researcher's logic:**
1. Synthesis exists
2. No one reads scratchpads anymore
3. Therefore scratchpads are superseded

**The circular flaw:**
1. Synthesis exists
2. Work is organized to REFERENCE synthesis (not scratchpads)
3. Therefore no one reads scratchpads
4. Therefore scratchpads are redundant

**But:** Did anyone CHECK if the synthesis is complete BEFORE organizing work to reference it?

**The dimension document acknowledges this** (lines 339-362):

> **The 2-directory exception:**
> - `_cd-research/` (forward-consumed by POST-CD-PIPELINE)
> - `_migration-research/` (forward-consumed by POST-CD-PIPELINE)
>
> **Why these are NOT superseded:**
> - Synthesis is INCOMPLETE
> - Forward consumption is ACTIVE

**So the researcher KNOWS that "forward consumption references synthesis" can be FALSE if synthesis is incomplete.**

**But then:** How do we know _od-audit-scratchpad/ synthesis IS complete? Because no one reads it? That's circular.

### What This Means

**Forward-consumption test proves USAGE PATTERNS, not COMPLETENESS.**

It proves:
- The codebase is organized to use synthesis as primary reference
- Scratchpads are not in the operational path

It does NOT prove:
- Synthesis captured all signal
- Scratchpads have zero unique value

### Verdict on Claim

**VALID AS USAGE TEST, INVALID AS COMPLETENESS TEST.**

The dimension document should say:

> **Forward-consumption test measures OPERATIONAL DEPENDENCY, not synthesis completeness.**
>
> If no one reads scratchpads, it proves scratchpads are not ON THE CRITICAL PATH. It does not prove scratchpads contain zero unique content.
>
> For deletion safety, combine forward-consumption test (proves not operationally needed) with spot-check test (proves no unique operational signal).

---

## CHALLENGE 5: The "Bibliographic Citation" Argument Is Weak

### The Claim (Lines 286-314)

> **The bibliographic citation pattern:**
>
> Synthesis documents cite scratchpads but don't expect readers to traverse them.
>
> **The test:** Does the synthesis say "See [scratchpad] for details"?
> - If YES → PARTIAL SUPERSESSION
> - If NO → FULL SUPERSESSION (citation is provenance only)

### The Challenge

**This test assumes readers understand the convention.**

**Example:** OD-GRANULAR-AUDIT-RESULTS.md header says:

> **Source Data:** 22 scratchpad files (~500KB total)

**What does this communicate?**

To someone WHO KNOWS the convention: "This is provenance metadata. You don't need to read the 500KB."

To someone NEW to the codebase: "There are 22 source files with 500KB of data. Should I read them to understand this synthesis?"

**The dimension document argues** (lines 301-302):

> This documents the process, not the content. No one reads 500KB of scratchpads to verify 89 findings.

**But:** How does a NEW reader know this? They don't. They have to LEARN the convention.

**Implication:** If scratchpads are deleted, the citation becomes DEAD METADATA. It says "Based on: 22 files (deleted)" which provides zero value.

**Counterargument from dimension document** (line 309):

> This PROVES the scratchpad was compressed, not that it should be retained.

**Fair point.** But then why include the citation at all? If it's not meant to be traversed, it's just noise.

### What This Means

**Bibliographic citations have TWO functions:**

1. **Provenance** (where did this come from?) — useful for trust/credibility
2. **Traversal** (where can I learn more?) — useful for deep dives

**If scratchpads are deleted:**
- Function 1 is preserved (citation still says "based on 22 files")
- Function 2 is destroyed (files don't exist)

**Is this acceptable?** Depends on whether you value "where can I learn more" or just "this is credible."

### Verdict on Claim

**DEPENDS ON ARCHIVAL PHILOSOPHY.**

If citations are ONLY for provenance (proving work was done): **Deletion is fine, citation remains as historical record**

If citations are for LEARNING (allowing deep dives into reasoning): **Deletion breaks this, citations become dead links**

**The dimension document should acknowledge this tradeoff** instead of presenting "bibliographic citation = doesn't need traversal" as universal truth.

---

## CHALLENGE 6: The 4 Supersession Chains Are Not Equally Strong

### The Claim (Lines 32-94)

Four supersession chains are presented as examples:

1. **Soul Definition** (card-system → component-system → T1) — Score: 10
2. **Anti-Patterns** (component-system → tracking → T1 registry) — Score: 10
3. **Design Tokens** (archive/tokens → tracking → T1 → CSS implementation) — Score: 10
4. **Agent Team Scratchpads** (22 files → synthesis) — Score: 10

### The Challenge

**These are NOT equivalent supersessions.**

**Chain 3 (Design Tokens) is IMPLEMENTATION supersession:**
- archive/tokens/ contains WRONG values (border-radius > 0, 'Bebas Neue')
- These were CORRECTED in audit → locked in T1 → IMPLEMENTED in CSS
- **Deletion is SAFE because values are WRONG and corrected version is in CSS**

**Chain 4 (Agent Scratchpads) is DOCUMENTATION supersession:**
- Scratchpads contain findings + context + methodology + reasoning
- Synthesis contains findings only
- **Deletion is SAFE FOR FIX EXECUTION but NOT for understanding methodology**

**These are different!**

- Token supersession: Old version is WRONG, new version is RIGHT, deletion is strictly better
- Scratchpad supersession: Old version is DETAILED, new version is COMPRESSED, deletion trades detail for simplicity

**The dimension document treats them the same** (both score 10, both recommended for deletion).

### What This Means

**Not all "fully superseded" files are equally safe to delete.**

**Supersession types:**

1. **Correction supersession** — Old version is WRONG, new is RIGHT (e.g., tokens)
   → **Deletion is STRICTLY BETTER** (removes dangerous wrong data)

2. **Compression supersession** — Old version is DETAILED, new is SUMMARY (e.g., scratchpads)
   → **Deletion is ACCEPTABLE if detail is noise, RISKY if detail is reasoning**

3. **Evolution supersession** — Old version is PARTIAL, new is COMPLETE (e.g., soul definition)
   → **Deletion is SAFE if new version absorbed everything, RISKY if old version has unique context**

### Verdict on Claim

**OVERSIMPLIFIED.** The dimension document should distinguish supersession types:

| Type | Old Version | New Version | Deletion Risk | Example |
|------|-------------|-------------|---------------|---------|
| Correction | Wrong | Right | NONE (strictly better) | archive/tokens/ |
| Compression | Detailed | Summary | LOW (if detail is noise) | _od-audit-scratchpad/ |
| Evolution | Partial | Complete | MEDIUM (if old has unique context) | card-system/SOUL-DEFINITION.md |

**All may score 10 on the checklist, but deletion safety varies.**

---

## CHALLENGE 7: The Cognitive Cost Argument Cuts Both Ways

### The Claim (Lines 245-257)

> **The cognitive cost of keeping superseded files:**
>
> 1. Distraction — Every underscore directory is noise when browsing
> 2. False Signal — Search results return scratchpads instead of synthesis
> 3. Maintenance Burden — Stale docs that contradict current state
> 4. Compaction Risk — Agents may load scratchpads instead of synthesis
> 5. Navigation Overhead — Extra directories to skip, explain, warn about

### The Challenge

**There is ALSO cognitive cost to DELETING superseded files:**

1. **Lost Context** — Future builders can't see HOW findings were derived, only WHAT they are
2. **Lost Methodology** — Adversarial audit protocol is documented in scratchpads, not synthesis
3. **Lost Reasoning** — Design principles are in scratchpad arguments, not synthesis conclusions
4. **Git Archaeology Required** — If you DO need detail, you have to time-travel through git history instead of reading a file
5. **Trust Deficit** — "Based on 22 files (deleted)" is less credible than "Based on 22 files (in _scratchpad/)"

**The dimension document acknowledges #1** (line 254):

> Compaction Risk — Agents may load scratchpads instead of synthesis, hitting token limits

**But this is EVIDENCE that agents WANT the detail.** If agents are choosing to load scratchpads instead of synthesis, that suggests synthesis is INCOMPLETE for their needs.

**The dimension document's rebuttal** (line 255):

> **User's goal:** "Maximum aggression without breaking post-CD pipeline"

**But:** Is "maximum aggression" the RIGHT goal? Or should the goal be "optimal information architecture"?

### What This Means

**The tradeoff is:**

KEEP scratchpads:
- ✅ Context, reasoning, methodology preserved
- ✅ No git archaeology needed
- ❌ Cognitive cost of navigation, distraction, false signal

DELETE scratchpads:
- ✅ Cleaner directory structure
- ✅ Agents forced to use synthesis (prevents compaction from loading detail)
- ❌ Context lost, reasoning inaccessible without git time-travel

**The dimension document presents KEEP as having ONLY costs and DELETE as having ONLY benefits.**

**This is advocacy, not analysis.**

### Verdict on Claim

**BIASED TOWARD DELETION.** The dimension document should present BOTH sides:

**Cognitive cost of KEEPING:**
- Distraction, false signal, navigation overhead (directory clutter)

**Cognitive cost of DELETING:**
- Lost context, lost reasoning, git archaeology burden, reduced credibility

**Then let the decision-maker weigh the tradeoffs** instead of arguing one side is strictly better.

---

## CHALLENGE 8: "Git History IS the Archival Layer" Is Optimistic

### The Claim (Lines 235-242)

> **Adversary rebuttal:**
> - Git history IS the archival layer
> - 0 soul violations claim proven by 3 independent processes in synthesis
> - Process evidence serves no operational purpose for post-CD pipeline
> - Cognitive cost of 10 underscore directories outweighs archival benefit
>
> **Master verdict: SIDE WITH ADVERSARY**

### The Challenge

**Git history is a TERRIBLE archival layer for READING deleted content.**

**To read a deleted file from git history:**

```bash
# 1. Find the commit where it was deleted
git log --diff-filter=D --summary | grep _od-audit-scratchpad/fresh-eyes.md

# 2. Get the commit hash
COMMIT_HASH="abc123"

# 3. Check out the file at parent commit
git show $COMMIT_HASH^:path/to/file
```

**Compare to reading a file that EXISTS:**

```bash
cat _od-audit-scratchpad/fresh-eyes.md
```

**Git archaeology is EXPONENTIALLY harder than file reading.**

**The dimension document assumes** (line 236):

> Git history IS the archival layer

**But:** Is git history SUFFICIENT for the use cases that require scratchpad access?

**Use cases:**

1. **Fix execution** — Need findings only → **Synthesis sufficient, git NOT needed**
2. **Understanding methodology** — Need adversarial protocol → **Scratchpad needed, git history HARD**
3. **Learning design principles** — Need reasoning → **Scratchpad needed, git history HARD**
4. **Auditing completeness** — Need to verify synthesis absorbed everything → **Scratchpad needed, git history HARD**
5. **Training new agents** — Need examples of good agent output → **Scratchpad needed, git history HARD**

**4 out of 5 use cases are HARDER with git history than with files.**

**Only use case #1 (fix execution) doesn't need scratchpads at all.**

### What This Means

**"Git history is the archival layer" is TRUE if archival means "evidence exists somewhere."**

**It is FALSE if archival means "accessible for learning and reference."**

### Verdict on Claim

**TOO OPTIMISTIC.** The dimension document should say:

> **Git history preserves EXISTENCE but not ACCESSIBILITY.**
>
> For forensic proof (did we do the work?): Git history is sufficient.
> For learning and methodology transfer (how did we do it?): Git history is insufficient, files are needed.
>
> Deletion decision depends on which use case matters more.

---

## SUMMARY OF CHALLENGES

| Challenge | Claim | Verdict | Severity |
|-----------|-------|---------|----------|
| #1 | 8.4:1 compression is lossless for signal | **OVERSTATED** — lossless for FINDINGS, lossy for REASONING | HIGH |
| #2 | Compression always equals noise elimination | **PARTIALLY CORRECT** — loses reasoning, not just noise | HIGH |
| #3 | "Absorbed" means 100% signal captured | **UNCHECKABLE** — depends on definition of "signal" | MEDIUM |
| #4 | Forward-consumption test proves completeness | **CIRCULAR** — proves usage, not completeness | MEDIUM |
| #5 | Bibliographic citations don't need traversal | **CONVENTION-DEPENDENT** — valid if convention is known | LOW |
| #6 | All supersession chains are equally safe to delete | **OVERSIMPLIFIED** — correction vs compression vs evolution | HIGH |
| #7 | Cognitive cost favors deletion | **BIASED** — presents one side, ignores cost of deletion | HIGH |
| #8 | Git history is sufficient archival layer | **TOO OPTIMISTIC** — sufficient for existence, not accessibility | HIGH |

---

## REVISED DEFINITION OF SUPERSESSION

Based on challenges above, here's what "FULLY SUPERSEDED" should actually mean:

### OPERATIONAL Supersession (Safe for Fix Execution)

A file is **OPERATIONALLY SUPERSEDED** when:

1. ✅ Synthesis exists that explicitly absorbs it
2. ✅ All FINDINGS preserved (IDs, severity, verdicts, recommendations)
3. ✅ Forward consumption references synthesis, not original
4. ✅ No external code dependencies on original file

**Deletion impact:** Fix execution continues unaffected. Operational work has zero disruption.

**What is lost:** Reasoning, methodology, context, design principles, adversarial arguments.

### LEARNING Supersession (Safe for Knowledge Transfer)

A file is **LEARNING SUPERSEDED** when:

1. ✅ Synthesis exists that explicitly absorbs it
2. ✅ All REASONING preserved (design principles, arguments, why-not-just-X explanations)
3. ✅ All METHODOLOGY preserved (adversarial protocol, bias testing, evaluation criteria)
4. ✅ No unique design principles in original that synthesis omits

**Deletion impact:** Future builders can learn from synthesis alone. No knowledge loss.

**This is a HIGHER bar than operational supersession.**

### FULL Supersession (Safe to Delete)

A file is **FULLY SUPERSEDED** when:

1. ✅ Operationally superseded (findings preserved, forward consumption references synthesis)
2. ✅ Learning superseded (reasoning and methodology preserved)
3. ✅ Spot-checked by INDEPENDENT reviewer (not the synthesizer)
4. ✅ Git history is acceptable for archival (forensic proof only, not learning)

**Only files meeting ALL criteria are safe to delete.**

---

## RECOMMENDED CHANGES TO DIM-SUPERSESSION.MD

### Change 1: Replace "Lossless Signal" Language (Lines 14, 22, 110)

**Current:**
> "Compression ratio averaging 8.4:1 (88% information loss) proves synthesis captured signal while discarding noise."

**Revised:**
> "Compression ratio averaging 8.4:1 preserves FINDINGS (IDs, severity, recommendations) while discarding REASONING (design principles, arguments, methodology). For operational fix execution, findings are sufficient. For design learning, reasoning is lost."

### Change 2: Add Supersession Type Taxonomy (After Line 28)

**Insert:**

```markdown
## SUPERSESSION TYPES

| Type | Old Version | New Version | Deletion Risk | When Safe |
|------|-------------|-------------|---------------|-----------|
| **Correction** | Wrong values | Right values | NONE | Always (removes dangerous data) |
| **Compression** | Detailed findings + reasoning | Findings only | LOW | If reasoning is documented elsewhere |
| **Evolution** | Partial understanding | Complete understanding | MEDIUM | If old version has no unique insights |

Not all Score-10 supersessions are equally safe to delete.
```

### Change 3: Separate Operational vs Learning Supersession (Lines 19-28)

**Current:**
> A file is SUPERSEDED when...

**Revised:**

```markdown
## OPERATIONAL SUPERSESSION

A file is **OPERATIONALLY SUPERSEDED** when:
1. Synthesis exists that explicitly absorbs it
2. All FINDINGS preserved (IDs, severity, recommendations)
3. Forward consumption references synthesis
4. No code dependencies on original

**Deletion impact:** Fix execution unaffected. **What is lost:** Reasoning, methodology, context.

## LEARNING SUPERSESSION

A file is **LEARNING SUPERSEDED** when:
1. Synthesis exists that explicitly absorbs it
2. All REASONING preserved (design principles, arguments, why-not-just-X)
3. All METHODOLOGY preserved (adversarial protocol, evaluation criteria)
4. No unique design knowledge in original

**Deletion impact:** Knowledge transfer unaffected. **This is a higher bar.**

## FULL SUPERSESSION

Only delete files that are BOTH operationally AND learning superseded.
```

### Change 4: Acknowledge Git History Limitations (Lines 235-242)

**Current:**
> Git history IS the archival layer

**Revised:**
> Git history preserves EXISTENCE but not ACCESSIBILITY. For forensic proof (did we do the work?), git is sufficient. For learning and methodology transfer (how did we do it?), git is insufficient — files must remain accessible. Deletion decision depends on which use case matters more.

### Change 5: Present Cognitive Cost Tradeoff Fairly (Lines 245-257)

**Current:**
> The cognitive cost of KEEPING superseded files...

**Revised:**

```markdown
## COGNITIVE COST TRADEOFF

### Cost of KEEPING Superseded Files
- Distraction — underscore directories clutter file tree
- False signal — search returns scratchpads instead of synthesis
- Navigation overhead — extra directories to skip

### Cost of DELETING Superseded Files
- Lost context — can't see HOW findings were derived
- Lost reasoning — design principles in arguments, not synthesis
- Git archaeology — accessing detail requires commit time-travel
- Reduced credibility — "Based on 22 files (deleted)" less trustworthy

**Neither is strictly better. Tradeoff depends on priorities.**
```

---

## FINAL VERDICT

**The supersession dimension analysis is METHODOLOGICALLY SOUND but RHETORICALLY BIASED toward deletion.**

**What it gets RIGHT:**

1. ✅ Compression ratio measurement (8.4:1 average is accurate)
2. ✅ Forward-consumption test (proves scratchpads not on critical path)
3. ✅ Distinction between supersession and deletion safety
4. ✅ Spot-check requirement (though not always performed)
5. ✅ Recognition that some directories are NOT superseded (_cd-research/, _migration-research/)

**What it gets WRONG:**

1. ❌ "Lossless signal preservation" — it's findings-preserving, reasoning-discarding
2. ❌ "Compression = noise elimination" — it eliminates reasoning too, not just noise
3. ❌ All supersession chains treated equally — correction vs compression matters
4. ❌ Cognitive cost presented one-sided — deletion has costs too
5. ❌ Git history as archival — sufficient for existence, not accessibility
6. ❌ Forward-consumption test as completeness proof — circular reasoning

**RECOMMENDATION:**

**Accept the FRAMEWORK (supersession score, forward-consumption test, spot-check requirement).**

**Reject the CONCLUSION (10/10 directories should delete).**

**Revise to distinguish:**
- **Operational supersession** (safe for fix execution) ← Most scratchpads qualify
- **Learning supersession** (safe for knowledge transfer) ← HIGHER bar, fewer qualify
- **Full supersession** (safe to delete) ← Only if BOTH operational AND learning

**Apply revised framework:**
- `_od-audit-scratchpad/` → Operationally superseded (YES), Learning superseded (NO) → **ARCHIVE, don't delete**
- `archive/tokens/` → Correction supersession → **DELETE** (values are wrong)
- `card-system/SOUL-DEFINITION.md` → Evolution supersession, T1 absorbed → **DELETE** (81 refs are historical)

**The dimension is 70% correct. The deletion recommendations need 30% revision.**

---

**Task #21 — COMPLETE**
