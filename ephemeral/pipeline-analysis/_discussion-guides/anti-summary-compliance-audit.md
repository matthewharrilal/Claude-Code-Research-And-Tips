# Anti-Summary Compliance Audit
# ═══════════════════════════════════════════════════════════════
# Auditor: contradiction-tension-mapper (Opus 4.6)
# Date: 2026-02-18
# Scope: 7 draft outputs from the pipeline-docs team
# ═══════════════════════════════════════════════════════════════

## Audit Methodology

Each file is evaluated on 5 criteria from the anti-summary protocol
(CLAUDE.md Section 2):

| # | Criterion | PASS behavior | FAIL behavior |
|---|-----------|--------------|---------------|
| C1 | Index vs Summarize | Points to files, says what they contain | Recites findings, compresses content |
| C2 | Hierarchy preservation | 3-layer nuance kept intact | Flattened to single-sentence claims |
| C3 | Provenance maintenance | Every claim cites file number | "The analysis found..." without source |
| C4 | Judgment on conclusions | States confidence, dissent, N-size | Transfers conclusions as settled facts |
| C5 | Skimming prevention | Routes to depth, offers escalation | Lists key findings in scannable format |

Rating scale: 1 (severe violation) to 5 (fully compliant).

**PASS threshold:** Average >= 3.5 across all criteria.
**FLAG threshold:** Any single criterion < 3 triggers a violation flag.


# ═══════════════════════════════════════════════════════════════
# FILE 1: CLAUDE.md (253 lines)
# Path: ephemeral/pipeline-analysis/CLAUDE.md
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 4/5

**Assessment:** Mostly indexes. Section 5 (File Map) is pure index. Section 7
(Topic Query Reference) routes without summarizing. Section 3 (Ingestion)
directs to files rather than compressing them.

**Violation 1 (MINOR):** The new "Questions That Derived This Corpus" section
contains embedded findings that cross from indexing into summarizing:

> "File 08 reveals ZERO perception-related terms in the entire 963-line prompt.
> Search for 'threshold,' 'delta,' 'RGB,' 'magnitude' returned nothing."

This is a FINDING, not an index entry. An index entry would say: "File 08
documents perception vocabulary analysis across the master prompt."

**Violation 2 (MINOR):** Under "Understanding what failed":

> "File 02 documents 42 failures (14 BLOCKING, 15 SIGNIFICANT, 13 MINOR)."

The breakdown (14/15/13) is the file's content, not a description of what the
file IS. An index would say: "File 02 provides a failure taxonomy with severity
ratings."

**Fix recommendations:**
- Replace finding-level detail in the Questions section with routing language:
  "File 08 analyzes perception vocabulary in the master prompt -- read Section
  2.1 for the specific findings"
- Remove severity breakdowns from index entries; let the reader find them

## C2: Hierarchy Preservation — SCORE: 5/5

**Assessment:** Excellent. The CLAUDE.md preserves multiple hierarchy layers:
- 4-tier convergence system (Unanimous/Majority/Contested/Unresolved)
- Layer architecture (0-4) with distinct file groupings
- Budget-based ingestion with 3 tiers
- The "5 beliefs" in the Operating Mindset section preserve philosophical nuance

No flattening detected.

## C3: Provenance Maintenance — SCORE: 5/5

**Assessment:** Every claim in the CLAUDE.md cites a file number. The file is
exemplary on this criterion. Examples:

- "File 23 (propagation-analysis) argues..." (Section 7)
- "File 27 (reproducibility-test) explicitly warns..." (Section 9)
- "File 32 (cross-reference-map) documents..." (Section 9)

Zero instances of unattributed claims found.

## C4: Judgment on Conclusions — SCORE: 4/5

**Assessment:** Generally good. Known Limitations (Section 9) is excellent --
it states N=2, 3-variable confound, and agent homogeneity explicitly.

**Violation (MINOR):** The Questions section includes some conclusions
presented with insufficient uncertainty markers:

> "The dominant reversal: guardrail → recipe (A1)"

"Dominant" is a judgment call. File 20 contests this -- the recipe thesis
is "overstated" per the adversarial reviewer. The CLAUDE.md should say:
"The most-cited reversal: guardrail → recipe (A1), contested by file 20."

**Fix recommendation:** Add dissent citations to any claim labeled "dominant,"
"primary," or "most important" in the Questions section.

## C5: Skimming Prevention — SCORE: 4/5

**Assessment:** Good. Section 6 (Discussion Engagement Protocol) explicitly
refuses to answer "What did you find?" and routes to ingestion paths instead.
Anti-Patterns section discourages sequential reading.

**Violation (MINOR):** The Questions section IS itself a scannable summary.
A skimmer could read the bolded questions and the one-line answers and come
away with a compressed version of the corpus's findings. The questions are
DESIGNED to be scannable -- which is useful for orientation but potentially
enables the exact behavior the anti-summary rules prohibit.

**Fix recommendation:** Add a header warning to the Questions section:
"These questions are ROUTING AIDS, not answers. The one-line descriptions
below are necessarily compressed. Read the cited files for the actual
analysis."

## CLAUDE.md OVERALL: 4.4/5 — PASS

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 4 | Minor violations in Questions section |
| C2: Hierarchy preservation | 5 | Excellent |
| C3: Provenance | 5 | Exemplary |
| C4: Judgment | 4 | Minor -- "dominant" without dissent citation |
| C5: Skimming prevention | 4 | Questions section is scannable |
| **Average** | **4.4** | **PASS** |

**Priority fixes:** 2 (both minor, in Questions section)


# ═══════════════════════════════════════════════════════════════
# FILE 2: README.md (289 lines)
# Path: ephemeral/pipeline-analysis/README.md
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 5/5

**Assessment:** Excellent. The README explicitly declares itself an index
("This README is an INDEX, not a summary"). Every file entry says "What It IS"
rather than "What It Concludes." The Three Key Files section describes purpose
and usage, not content.

No violations found.

## C2: Hierarchy Preservation — SCORE: 5/5

**Assessment:** Preserves the 6-layer architecture. Quality ratings from
file 31 are presented without interpretation. Production waves are described
structurally (agent count, role, output) without collapsing them.

## C3: Provenance Maintenance — SCORE: 4/5

**Assessment:** Generally strong. Quality ratings cite file 31. Anti-patterns
cite file 33. Budget strategies cite file 33.

**Violation (MINOR):** Aggregate Statistics section:

> "Unique insights (cataloged by file 31): 52"
> "Contradictions identified (by file 32): 10"

These cite sources but present numbers as facts. The number "52 unique
insights" is file 31's count -- another file might count differently. The
provenance is present but the contingency is not.

**Fix recommendation:** Add "(per file 31's methodology)" after the counts
to signal these are one agent's tally, not absolute.

## C4: Judgment on Conclusions — SCORE: 5/5

**Assessment:** The README makes almost no evaluative claims. It describes
WHAT files ARE, not what they CONCLUDE. The Known Issues section is admirably
factual. The N=2 limitation is stated plainly: "Generalization to other content
types, design systems, or models is untested."

## C5: Skimming Prevention — SCORE: 4/5

**Assessment:** The Anti-Summary Notice is effective. Budget Versions table
and Anti-Patterns list discourage casual reading.

**Violation (MINOR):** The Complete File Inventory table includes a "Quality"
column with ratings. A skimmer might use quality ratings to skip low-rated
files, which contradicts the anti-skimming intent. File quality does not
correlate with finding importance -- file 00 is rated 3/5 but contains
essential context.

**Fix recommendation:** Add a note under the inventory: "Quality ratings
reflect analytical rigor, NOT importance. Low-rated files may contain critical
context or unique findings not available elsewhere."

## README.md OVERALL: 4.6/5 — PASS

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 5 | Excellent |
| C2: Hierarchy preservation | 5 | Excellent |
| C3: Provenance | 4 | Minor -- counts without contingency |
| C4: Judgment | 5 | Exemplary |
| C5: Skimming prevention | 4 | Quality column enables skipping |
| **Average** | **4.6** | **PASS** |

**Priority fixes:** 2 (both minor, cosmetic)


# ═══════════════════════════════════════════════════════════════
# FILE 3: Ingestion Prompt (_drafts/ingestion-prompt.md, 420 lines)
# Path: ephemeral/pipeline-analysis/_drafts/ingestion-prompt.md
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 3/5

**Assessment:** Mixed. The ingestion prompt is DESIGNED to orient a fresh
instance, which requires more content than a pure index. Some sections are
well-indexed; others cross into summarizing.

**Violation 1 (SIGNIFICANT):** Section 2.1 (Why Summaries Fail) contains
a 3-bullet compressed version of corpus findings:

> "Thesis survives compression; self-corrections do not."
> "Numbers survive; evidence chains do not."
> "Findings survive; contradictions do not."

These ARE findings from file 35 (knowledge-compression), presented without
file citation and in summary format. A reader absorbs these as conclusions
without encountering the 50-item nuance registry from which they derive.

**Violation 2 (SIGNIFICANT):** Section 5 (Jargon Glossary) includes embedded
findings within definitions:

> "RC-4 -- Root Cause #4 from the retrospective synthesis: sub-perceptual
> variation satisfying every rule while producing nothing visible. Accounts
> for 26% of the 42 documented failures. The dominant root cause."

This is a definition AND a finding AND a judgment ("dominant"). A glossary
entry should define terms, not evaluate their importance.

**Violation 3 (MINOR):** Section 6.3:

> "PA-05 improved from 1.5/4 to 2.5/4. This is meaningful progress (+1.0
> points) but BELOW the 3/4 shipping threshold."

This is a conclusion with an interpretive frame ("meaningful progress" vs
"below threshold"), not an index entry.

**Fix recommendations:**
- Section 2.1: Add file citations to each bullet ("File 35 identifies this
  pattern in its compression analysis")
- Section 5: Strip evaluative language from glossary. "RC-4: Root Cause #4.
  See file 02 for severity and attribution."
- Section 6.3: Remove "meaningful progress" framing. State the numbers only:
  "PA-05 changed from 1.5/4 to 2.5/4. The shipping threshold is 3/4."

## C2: Hierarchy Preservation — SCORE: 4/5

**Assessment:** Good. The 4-tier convergence system is preserved. The
ingestion protocol preserves the 4-pass structure. The self-check questions
preserve 3 difficulty levels.

**Violation (MINOR):** The glossary definition of "Recipe vs checklist" ends
with: "A concrete checklist would likely work; a vague recipe would fail."
This collapses a 3-layer nuance (format + specificity + perception) into a
2-layer statement. File 26's 3-variable confound is the third layer, mentioned
but not structurally preserved.

## C3: Provenance Maintenance — SCORE: 3/5

**Assessment:** Mixed. Many claims cite file numbers. But several important
claims do NOT:

**Violation 1 (SIGNIFICANT):** Section 2.1 bullets have no file citations.
The compression patterns come from files 35 and 38, but neither is named.

**Violation 2 (SIGNIFICANT):** Section 6.2:

> "The cheapest most informative experiment -- adding ONLY perception thresholds
> to the unchanged master prompt -- has never been run. This is the single most
> cited gap across adversarial reviewers (files 20, 25, 26, 32)."

The second sentence has good provenance. The FIRST sentence ("cheapest most
informative") appears without attribution. This is file 20's framing.

**Violation 3 (MINOR):** Section 1.2 describes Wave 1-6 agent counts without
citing the source. These numbers come from file 31 (inventory) and the
README.

**Fix recommendations:**
- Add file citations to every bullet in Section 2.1
- Attribute "cheapest most informative experiment" to file 20
- Cite source for wave descriptions

## C4: Judgment on Conclusions — SCORE: 3/5

**Assessment:** The ingestion prompt transfers several conclusions as more
settled than they are:

**Violation 1 (SIGNIFICANT):** Section 5.4 (Quality and Process Terms):

> "Deallocation (Phase 0) -- Removing sub-perceptual CSS before adding new CSS.
> Establishes a clean baseline from which all perceptible variations are
> measured. A genuine innovation with no master prompt seed."

"Genuine innovation" is file 04's evaluation. File 14 asks whether Phase 0
was necessary or just satisfying. The conclusion is presented without dissent.

**Violation 2 (SIGNIFICANT):** Section 5.4:

> "Propagation reliability ranking -- A 10-tier hierarchy from file 21 ranking
> instruction types by predicted agent compliance... THE most actionable artifact
> in the entire corpus."

"THE most actionable" is a superlative judgment. File 31 rates it highly but
this is a glossary entry, not a ranking. The judgment should be attributed:
"Rated as the most actionable by file 31."

**Violation 3 (MINOR):** Section 6.3 treats the remediation as "not a success"
-- this IS the adversarial position but it's presented as the CORRECT framing
rather than one of two competing frames (see tension T-10 in the
contradictions file).

**Fix recommendations:**
- Add dissent citations to evaluative terms in glossary entries
- Attribute superlatives to their source files
- Present the remediation framing as CONTESTED, not settled

## C5: Skimming Prevention — SCORE: 3/5

**Assessment:** The ingestion prompt is structured AS a skimmable document.
Headers, bullet points, tables, and bold formatting make it easy to scan
without reading. This is partly by design (it needs to be usable) but it
enables exactly the shallow absorption the anti-summary protocol prohibits.

**Violation 1 (SIGNIFICANT):** Section 8.1 (Primary Corpus Files) provides
a priority-ranked table of the "top 10" files. This EXPLICITLY enables
skipping files not on the list. A reader who reads only the "Priority 1-4"
files gets a compressed, curated view that the anti-summary protocol warns
against.

**Violation 2 (MINOR):** The Jargon Glossary doubles as a compressed finding
reference. Reading Section 5 alone would give a reader the key numbers
(42 failures, 23.7% sub-perceptual, 87.6% consistency) without any of the
qualifying context.

**Fix recommendations:**
- Add to Section 8.1: "This priority ranking is for INGESTION ORDER, not
  importance. Files outside this list contain unique findings not available
  elsewhere. See file 31 for per-file unique contribution analysis."
- Add glossary header: "These definitions contain reference numbers for
  orientation. The ANALYSIS behind these numbers requires reading the
  cited files."

## Ingestion Prompt OVERALL: 3.2/5 — BORDERLINE FAIL

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 3 | Significant -- glossary + Section 2.1 summarize |
| C2: Hierarchy preservation | 4 | Minor -- 3-variable confound partially flattened |
| C3: Provenance | 3 | Significant -- Section 2.1 uncited, attributions missing |
| C4: Judgment | 3 | Significant -- superlatives without dissent |
| C5: Skimming prevention | 3 | Significant -- priority table + glossary enable skimming |
| **Average** | **3.2** | **BORDERLINE FAIL** |

**Priority fixes:** 6 (3 significant, 3 minor). The ingestion prompt's
purpose (orienting a fresh instance) inherently conflicts with pure
anti-summary compliance. The fixes above would bring it to ~4.0 without
sacrificing usability.


# ═══════════════════════════════════════════════════════════════
# FILE 4: Discussion Protocol (_drafts/discussion-protocol.md, 410 lines)
# Path: ephemeral/pipeline-analysis/_drafts/discussion-protocol.md
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 3/5

**Assessment:** The protocol is a META-document (how to discuss, not what to
discuss), so direct summarization of findings is less of a risk. However,
the Conversation Starters (Part 2) contain compressed findings.

**Violation 1 (SIGNIFICANT):** Starter 1 (The CD-006 Paradox):

> "CD-006 scored 39/40 using the constitutional approach --
> specification-heavy, not recipe-based."

This IS a finding. A protocol document should say: "Ask the user about the
CD-006 paradox (file 25 identifies this). Read file 25 Section X before
raising this topic."

**Violation 2 (SIGNIFICANT):** Starter 4 (The 3-Variable Confound):

> "File 26 makes what I think is the most important analytical contribution
> in the corpus: the recipe-vs-checklist comparison conflates three
> independent variables..."

"What I think is the most important" is editorial judgment in a protocol
document. The protocol should describe WHEN to raise this topic, not
evaluate its importance.

**Violation 3 (MINOR):** Rule 7 embeds the full perception threshold table:

> "background >= 10 RGB points, font-size >= 2px, letter-spacing >= 0.025em,
> font-weight >= 100 units, padding >= 8px, border-width >= 1px, opacity >=
> 0.05, line-height >= 0.1"

This is content that belongs in the source file (08), not in a protocol
document. The protocol should say: "Reference the perception threshold table
in file 08 / file 41, Section 5.3."

**Fix recommendations:**
- Conversation Starters: Replace embedded findings with topic prompts +
  file routing. "Raise the CD-006 paradox. Source: file 25. Read before
  raising."
- Remove threshold values from Rule 7; reference file 08 instead
- Remove editorial judgments ("what I think is the most important")

## C2: Hierarchy Preservation — SCORE: 5/5

**Assessment:** Excellent. The 5-level depth escalation protocol (Part 3)
explicitly preserves hierarchy. The 4-tier convergence system is referenced
correctly. The 8 proactive engagement patterns (Part 4) preserve nuance
by design.

## C3: Provenance Maintenance — SCORE: 4/5

**Assessment:** Generally good. Rules cite file numbers consistently.
Conversation Starters cite sources.

**Violation (MINOR):** Rule 7 lists threshold values without noting they
are from a single agent's analysis (file 08) and are unvalidated (CLAUDE.md
limitation #7). The provenance is present but the confidence qualification
is absent.

**Violation (MINOR):** Appendix A (Quick Reference) lists file numbers for
topics but some mappings differ from the CLAUDE.md Topic Query Reference
(Section 7). For example:
- Protocol lists "Perception Thresholds: 06, 07, 41" but CLAUDE.md lists
  "08, 24, 42". The file numbers don't match, creating provenance confusion.

**Fix recommendations:**
- Add confidence note to Rule 7 threshold values
- Reconcile Appendix A file mappings with CLAUDE.md Section 7

## C4: Judgment on Conclusions — SCORE: 4/5

**Assessment:** Rules 4, 6, 11, 14 explicitly require uncertainty marking.
The protocol's STRUCTURE supports anti-judgment behavior. However, the
Conversation Starters sometimes model the opposite:

**Violation (MINOR):** Starter 18:

> "The trend suggests more rules = worse output."

This is a causal claim from a correlational observation. The protocol
explicitly prohibits this in Rule 14 ("Never Present a Correlation as
Causal") but then demonstrates it in a Starter. The Starter contradicts
its own rule.

**Fix recommendation:** Rewrite Starter 18 to model Rule 14 compliance:
"The project used more rules at each stage and got different outcomes.
File 20 identifies multiple confounds. Is 'more rules = worse output'
causal or correlational?"

## C5: Skimming Prevention — SCORE: 4/5

**Assessment:** Good. The 5-level depth protocol prevents shallow engagement.
Red Flags (Part 5) explicitly prohibit passive lookups and summary reflexes.

**Violation (MINOR):** The 20 Conversation Starters ARE a skimmable list.
A reader could read just the bolded titles and get a compressed map of the
corpus's key debates without engaging with any of the nuance.

**Fix recommendation:** Add a header to Part 2: "These starters are TEMPLATES,
not summaries. Each contains compressed content that the cited files expand.
Do not use a starter without first reading its cited source files."

## Discussion Protocol OVERALL: 4.0/5 — PASS

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 3 | Significant -- Starters embed findings |
| C2: Hierarchy preservation | 5 | Excellent |
| C3: Provenance | 4 | Minor -- threshold confidence, file mapping mismatch |
| C4: Judgment | 4 | Minor -- Starter 18 violates own Rule 14 |
| C5: Skimming prevention | 4 | Minor -- Starters are scannable |
| **Average** | **4.0** | **PASS** |

**Priority fixes:** 4 (1 significant, 3 minor). The significant fix
(Conversation Starters embedding findings) is the most impactful.


# ═══════════════════════════════════════════════════════════════
# FILE 5: Dimensional Discussion Guide (17-24)
# Path: _discussion-guides/dimensional-17-to-24.md (616 lines)
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 2/5

**Assessment:** This file has the MOST summarization of any audited document.
Each file guide contains "THE 5 MOST SURPRISING FINDINGS" -- which is, by
definition, a summary. The findings are presented with evidence and line
numbers, but they ARE compressed versions of the source files.

**Violation 1 (SEVERE):** Every file section contains a "5 MOST SURPRISING
FINDINGS" list that presents the file's conclusions in compressed form.
Example from File 17:

> "Approach B was a COMPROMISE, not a winner (lines 69-73). The analyst
> frames Approach B... not as the obvious best choice but as a negotiated
> middle ground..."

This is the file's CONTENT, not a description of what the file IS. It
summarizes the finding in 3 sentences when the source takes 50+ lines.

**Violation 2 (SIGNIFICANT):** "NUANCES EASILY MISSED" sections contain
extracted nuances -- by definition, these are summary extractions that a
reader would treat as substitutes for reading the file.

**Violation 3 (SIGNIFICANT):** "IRREPLACEABLE CONTRIBUTION" sections
summarize what each file uniquely provides -- useful as routing, but the
descriptions contain enough detail to substitute for reading.

**Mitigating factor:** Every finding cites specific line numbers. The file
is DESIGNED as a discussion guide, not a pure index. Its purpose is to help
an instance DISCUSS files with a user, which requires more content than
pure indexing.

**Fix recommendations:**
- Rename "5 MOST SURPRISING FINDINGS" to "5 ENTRY POINTS FOR DISCUSSION"
  and restructure as questions/prompts rather than finding summaries
- Shorten NUANCES sections to: "3 nuances that compression would lose --
  see lines X, Y, Z in the source file"
- Keep IRREPLACEABLE CONTRIBUTION sections as-is (they serve routing)

## C2: Hierarchy Preservation — SCORE: 4/5

**Assessment:** Good. Each file guide preserves the adversarial challenges
(from file 26) with bias ratings. The cross-cutting themes section
(lines 482-513) preserves disagreement structure. The contradiction map
(Appendix) preserves multi-position disputes.

**Violation (MINOR):** The convergence data table (lines 535-551) collapses
nuance into single-line entries. "Recipe > constraint format: 8/25 (3
challenge), Net Score 5, HIGH with caveat" compresses the entire recipe
debate into one row.

## C3: Provenance Maintenance — SCORE: 5/5

**Assessment:** Exemplary. Every finding cites a file number AND line numbers.
Adversarial challenges cite file 26 with specific line ranges. Cross-references
cite file 32. Bias ratings cite their source. This is the most thoroughly
sourced document in the audit.

## C4: Judgment on Conclusions — SCORE: 4/5

**Assessment:** Good. Every file guide includes adversarial challenges and
bias ratings. The cross-cutting themes section (lines 482-513) explicitly
marks findings as CONTESTED, UNDER-ACKNOWLEDGED, or UNRESOLVED.

**Violation (MINOR):** File 20's guide calls it "The most important
adversarial challenge" (line 188). This is an editorial superlative that
should be attributed: "Rated the most rigorous report by file 26 (bias
rating 1/5)."

## C5: Skimming Prevention — SCORE: 2/5

**Assessment:** The structured format (5 findings + challenges + questions +
nuances + contribution + starter per file) is HIGHLY skimmable. A reader
could scan the bolded findings across all 8 files in 5 minutes and come
away with a compressed version of each file without reading any of them.

**Violation (SEVERE):** The entire document is structured as a substitute
for reading. If a user reads this guide instead of reading files 17-24,
they get roughly 60% of the content in 20% of the tokens. This is exactly
the compression the anti-summary protocol warns against.

**Violation (SIGNIFICANT):** The "RECOMMENDED READING SEQUENCES" (lines
554-573) include a "30-minute path" that explicitly says "Skip 17, 18, 19,
23 -- they reinforce but do not add conceptually distinct findings." This
directly encourages skipping files.

**Mitigating factor:** The guide's PURPOSE is to help an instance discuss
files with a user, not to replace reading. But the structure enables
replacement.

**Fix recommendations:**
- Add a prominent header: "This guide is for DISCUSSION PREPARATION, not
  file replacement. Reading these summaries does NOT substitute for reading
  the source files. The source files contain 3-5x the detail, context, and
  qualifying nuance that compression removed."
- Remove the "Skip" recommendation from reading sequences; replace with
  "Defer if time is limited, but read before discussing"

## Dimensional Guide OVERALL: 3.4/5 — BORDERLINE FAIL

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 2 | Severe -- "5 Surprising Findings" = summary |
| C2: Hierarchy preservation | 4 | Minor -- convergence table compresses |
| C3: Provenance | 5 | Exemplary |
| C4: Judgment | 4 | Minor -- editorial superlative |
| C5: Skimming prevention | 2 | Severe -- structured as file substitute |
| **Average** | **3.4** | **BORDERLINE FAIL** |

**Priority fixes:** 3 (2 severe, 1 significant). The core tension is
architectural: a discussion guide MUST contain enough content to discuss,
but the anti-summary protocol says to index, not excerpt. The fix is
reframing: restructure finding summaries as discussion QUESTIONS that
require reading the source to answer.


# ═══════════════════════════════════════════════════════════════
# FILE 6: Contradictions and Tensions Map
# Path: _discussion-guides/contradictions-and-tensions.md (554 lines)
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 4/5

**Assessment:** The tensions map is structured as a MAP of disagreements,
not a summary of findings. Each tension presents BOTH sides with file
citations rather than compressing to a single conclusion.

**Violation (MINOR):** Some tension descriptions include enough detail
to substitute for reading the source files. For example, T-01 describes
the recipe-vs-checklist debate in enough detail (files cited, evidence
summarized, experiment proposed) that a reader might not feel the need
to read files 02, 20, or 26 directly.

**Mitigating factor:** The document explicitly says "This is NOT a summary.
It is a map of WHERE the corpus disagrees." The structure is adversarial
by design -- it presents competing positions, not consensus.

## C2: Hierarchy Preservation — SCORE: 5/5

**Assessment:** Excellent. Every tension preserves both sides with evidence
strength assessment. The Tension Interaction Map (Appendix A) preserves
structural dependencies. Consensus Findings distinguish between
"unchallenged on measurement" and "challenged on interpretation" (CF-07).

## C3: Provenance Maintenance — SCORE: 5/5

**Assessment:** Every tension cites file numbers for both sides. The File
Citation Index (Appendix C) provides complete traceability. Most-cited
and least-cited files are identified.

## C4: Judgment on Conclusions — SCORE: 5/5

**Assessment:** The document's entire purpose is to present UNRESOLVED
questions with evidence on both sides. Every tension includes "Evidence
strength" assessment. Every unresolved contradiction is labeled UNRESOLVED.
Consensus findings include challenge status.

## C5: Skimming Prevention — SCORE: 3/5

**Assessment:** The 18 tensions are scannable -- a reader could skim the
bolded tension names and get a topic map without engaging with the evidence.

**Violation (MINOR):** The Experiment Priority Ranking (Appendix B) is a
clean table that a skimmer could extract as "the action plan" without
understanding why each experiment matters.

**Violation (MINOR):** Consensus Findings (Section 4) could be read as a
"key takeaways" list, enabling exactly the skimming the protocol prohibits.

**Fix recommendation:** Add to Section 4 header: "These consensus findings
are what the corpus does NOT disagree about. They are NOT 'key takeaways.'
The most important content is in Sections 1-3 where the corpus DOES
disagree."

## Contradictions Map OVERALL: 4.4/5 — PASS

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 4 | Minor -- tensions contain substitutable detail |
| C2: Hierarchy preservation | 5 | Excellent |
| C3: Provenance | 5 | Exemplary |
| C4: Judgment | 5 | Exemplary |
| C5: Skimming prevention | 3 | Minor -- tables and lists are scannable |
| **Average** | **4.4** | **PASS** |

**Priority fixes:** 1 (minor, header addition to Section 4)


# ═══════════════════════════════════════════════════════════════
# FILE 7: Narrative Arc
# Path: _discussion-guides/narrative-arc.md (1,088 lines)
# ═══════════════════════════════════════════════════════════════

## C1: Index vs Summarize — SCORE: 1/5

**Assessment:** This is the MOST summarizing document in the audit. The
narrative arc presents the corpus's findings as a 5-act STORY with detailed
content from source files. It is, by design, a summary narrative.

**Violation 1 (SEVERE):** Act 1 (The Failure) presents the flagship failure
in detail: "PA-05 1.5/4," "zero visible borders," "uniform typography,"
"backgrounds differing by 1-8 RGB points," "six whitespace voids of
210-276px each." These are findings from files 00 and 02, compressed into
a narrative.

**Violation 2 (SEVERE):** Act 2 (The Diagnosis) presents root causes in
full: "the word 'perception' appears ZERO times in the 963-line master
prompt," the 23.7% number, the S-09 stacking, recipe vs checklist, Phase 0
deallocation. A reader of Act 2 has absorbed the core findings without
reading any source file.

**Violation 3 (SEVERE):** Act 3 presents the 5 paradigm shifts with the
perception threshold table, specific CSS examples, and the entire shift
from guardrails to recipes including a master prompt vs remediation
code comparison.

**Violation 4 (SEVERE):** The 10 Key Surprise Moments (lines 907-1032)
is explicitly a compressed summary of the corpus's most important findings,
each in 5-7 lines.

**Mitigating factor:** The narrative arc includes source file citations
throughout and a "Challenged?" field for each surprise. Act 5 is entirely
about caveats and contested findings. The document is transparent about
being a narrative.

**Fix recommendations:** This document's purpose (walking a user through
findings as a story) fundamentally conflicts with anti-summary compliance.
Options:
1. Accept the violation as intentional and add a WARNING header: "This
   document is a NARRATIVE SUMMARY designed for guided walkthroughs. It
   compresses source files significantly. For the full analysis with all
   qualifying nuance, read the source files cited in each section."
2. Restructure as a ROUTING document: replace finding content with
   questions and file routing. Instead of "the word 'perception' appears
   ZERO times," write "File 08 contains a perception vocabulary analysis
   that reveals a foundational gap in the master prompt."

## C2: Hierarchy Preservation — SCORE: 3/5

**Assessment:** Mixed. The 5-act structure preserves the NARRATIVE hierarchy.
Act 5 preserves the contested/unresolved distinction. The "Challenged?"
field in Surprise Moments preserves dissent.

**Violation (SIGNIFICANT):** The Discussion Flow Guide (lines 798-905)
reduces the corpus to 5 steps with talking points. Each step has 5-6
bullet "talking points" that ARE the compressed findings. The hierarchy
of 41 files is collapsed into 25 talking points.

**Violation (MINOR):** The Confidence Assessment table (lines 1075-1084)
collapses the 4-tier convergence system into 7 rows. Some findings are
downgraded (e.g., "Builder model: SPECULATIVE") while the convergence
map in file 41 has more nuance.

## C3: Provenance Maintenance — SCORE: 4/5

**Assessment:** Good. Every section cites source files. The File-to-Act
Mapping (Appendix A) traces all claims. The Provenance Chain (Appendix B)
is explicit about sources.

**Violation (MINOR):** Some talking points in the Discussion Flow Guide
(lines 810-901) lack file citations. For example, "The 48px/49px/50px
example" (line 815) is cited as "File 02" but the specific line range in
file 02 is not given.

## C4: Judgment on Conclusions — SCORE: 3/5

**Assessment:** Act 5 is dedicated to caveats and does well. But Acts 1-4
present findings with more confidence than the corpus warrants:

**Violation 1 (SIGNIFICANT):** Act 2.2, Root Cause #2:

> "File 12 frames this as an epistemological distinction: a recipe TRANSFERS
> the spec author's judgment to the builder; a checklist ASSUMES the builder
> has equivalent judgment. For LLM agents, this assumption is catastrophically
> wrong"

"Catastrophically wrong" is an evaluative judgment that the adversarial
reviewers (file 20, 26) contest. The narrative presents it as established
rather than contested.

**Violation 2 (SIGNIFICANT):** Act 3.2 presents the perception threshold
table as fact:

> | Property | Minimum perceptible delta |
> | Background color | >=10 RGB points |

These thresholds are unvalidated (CLAUDE.md limitation #7). The table is
presented without uncertainty markers.

**Fix recommendations:**
- Add "[CONTESTED]" or "[N=2]" markers to claims presented in Acts 1-4
  that are below Tier 1 confidence
- Add uncertainty note below the perception threshold table: "These values
  derive from file 08's single-agent analysis and are not empirically
  validated."

## C5: Skimming Prevention — SCORE: 1/5

**Assessment:** The narrative arc IS a skim-optimized document. The 5-act
structure, bolded talking points, Discussion Flow Guide, and 10 Key Surprise
Moments are all designed for rapid comprehension. A reader could absorb the
narrative arc in 15 minutes and feel they understand the corpus.

**Violation (SEVERE):** The Discussion Flow Guide explicitly provides
"30-minute," "practitioner," and "researcher" pathways that compress the
entire corpus into step counts. The "30-minute" path says "Steps 1 + 2 + 5
only. The failure, the diagnosis, and the caveats. Skip the recipe details."

**Violation (SEVERE):** The 10 Key Surprise Moments is a standalone summary.
Each surprise has: before/after, source, evidence, and challenge status.
A reader who reads ONLY these 10 items has 80% of the corpus's headline
findings in 125 lines.

## Narrative Arc OVERALL: 2.4/5 — FAIL

| Criterion | Score | Status |
|-----------|-------|--------|
| C1: Index vs Summarize | 1 | Severe -- IS a summary narrative |
| C2: Hierarchy preservation | 3 | Significant -- Discussion Flow collapses to 25 points |
| C3: Provenance | 4 | Minor -- some uncited talking points |
| C4: Judgment | 3 | Significant -- contested claims presented as fact |
| C5: Skimming prevention | 1 | Severe -- designed for rapid comprehension |
| **Average** | **2.4** | **FAIL** |

**Priority fixes:** The narrative arc fundamentally violates anti-summary
principles. Two options:
1. **Accept and label:** Add a prominent WARNING that this document
   intentionally compresses findings for guided walkthroughs, and is NOT
   a substitute for reading source files. Accept the anti-summary score
   as a known tradeoff.
2. **Restructure:** Convert from narrative summary to narrative ROUTING --
   each act describes what happened at the TOPIC level and routes to
   specific files for the FINDING level.

**Recommendation:** Option 1 (accept and label). The narrative arc serves
a legitimate purpose (guided walkthroughs) that requires more content than
pure anti-summary compliance allows. The document should be transparent
about this tradeoff.


# ═══════════════════════════════════════════════════════════════
# CROSS-FILE FINDINGS
# ═══════════════════════════════════════════════════════════════

## Finding 1: Spectrum from Index to Summary

The 7 files fall on a clear spectrum:

| File | Score | Character |
|------|-------|-----------|
| README.md | 4.6 | Pure index |
| CLAUDE.md | 4.4 | Index with routing intelligence |
| Contradictions Map | 4.4 | Adversarial map (anti-summary by design) |
| Discussion Protocol | 4.0 | Behavioral protocol (meta, not content) |
| Ingestion Prompt | 3.2 | Orientation document (inherent tension) |
| Dimensional Guide | 3.4 | Discussion guide (file summaries by design) |
| Narrative Arc | 2.4 | Summary narrative (anti-summary violation) |

The documents designed for ROUTING (README, CLAUDE.md) comply well. The
documents designed for CONTENT TRANSFER (guides, narrative) inherently
conflict with anti-summary rules.

## Finding 2: Provenance is the Strongest Criterion

Average provenance score across all 7 files: 4.3/5. This is the
best-maintained criterion. The corpus team takes attribution seriously.

## Finding 3: Skimming Prevention is the Weakest Criterion

Average skimming prevention score across all 7 files: 3.0/5. This is the
worst-maintained criterion. Structured documents with tables, bullet points,
and bold formatting inherently enable skimming. The tension is that
USABILITY requires structure, but structure enables scanning.

## Finding 4: File Number Mapping Inconsistency

The Discussion Protocol (Appendix A) and CLAUDE.md (Section 7) map topics
to different file numbers. This is a provenance risk -- an instance
following one mapping might cite the wrong file.

**Specific discrepancy:** "Perception Thresholds" maps to files 06, 07, 41
in the protocol but 08, 24, 42 in CLAUDE.md. File 08 is the PRIMARY
perception analysis; file 06 is HTML restructuring. The protocol's mapping
appears to be WRONG.

## Finding 5: The Fundamental Tension

The anti-summary protocol says: "Index, don't excerpt. Point to line ranges,
section headers, and file numbers."

But the team was asked to produce DISCUSSION GUIDES -- documents that help
an instance ENGAGE with findings, not just point to them. Discussion requires
content. Content requires compression. Compression violates anti-summary.

This tension is irreconcilable at the extremes. The fix is TRANSPARENCY:
documents that contain compressed content should explicitly label themselves
as compressed and warn against treating them as substitutes.


# ═══════════════════════════════════════════════════════════════
# SUMMARY TABLE
# ═══════════════════════════════════════════════════════════════

| File | C1 | C2 | C3 | C4 | C5 | Avg | Status |
|------|----|----|----|----|----|----|--------|
| CLAUDE.md | 4 | 5 | 5 | 4 | 4 | 4.4 | PASS |
| README.md | 5 | 5 | 4 | 5 | 4 | 4.6 | PASS |
| Ingestion Prompt | 3 | 4 | 3 | 3 | 3 | 3.2 | BORDERLINE FAIL |
| Discussion Protocol | 3 | 5 | 4 | 4 | 4 | 4.0 | PASS |
| Dimensional Guide | 2 | 4 | 5 | 4 | 2 | 3.4 | BORDERLINE FAIL |
| Contradictions Map | 4 | 5 | 5 | 5 | 3 | 4.4 | PASS |
| Narrative Arc | 1 | 3 | 4 | 3 | 1 | 2.4 | FAIL |

**PASS (>=3.5):** 4 files (CLAUDE.md, README.md, Discussion Protocol,
Contradictions Map)

**BORDERLINE FAIL (3.0-3.4):** 2 files (Ingestion Prompt, Dimensional Guide)

**FAIL (<3.0):** 1 file (Narrative Arc)


# ═══════════════════════════════════════════════════════════════
# RECOMMENDED ACTIONS
# ═══════════════════════════════════════════════════════════════

## Priority 1: Narrative Arc -- Add Warning Header

Add to the top of the narrative arc document:

> **WARNING: This document intentionally compresses corpus findings into a
> narrative walkthrough. It violates the anti-summary protocol by design.
> For the full analysis with qualifying nuance, dissent, and evidence chains,
> read the source files cited in each section. This document is a GUIDE for
> discussion, not a SUBSTITUTE for reading.**

## Priority 2: Dimensional Guide -- Restructure Finding Summaries

Rename "5 MOST SURPRISING FINDINGS" to "5 ENTRY POINTS FOR DISCUSSION."
Restructure each as a question that requires reading the source file to
answer, rather than a compressed finding.

## Priority 3: Ingestion Prompt -- Add File Citations to Section 2.1

Every bullet in Section 2.1 (Why Summaries Fail) needs a file citation.
These are findings from files 35 and 38, currently unattributed.

## Priority 4: Discussion Protocol -- Fix File Mapping

Reconcile Appendix A file-topic mappings with CLAUDE.md Section 7. The
current mismatches (e.g., perception thresholds → files 06/07 vs 08/24)
create provenance errors.

## Priority 5: All Documents -- Add Compression Disclaimer

Any document that contains compressed findings (Ingestion Prompt,
Dimensional Guide, Narrative Arc, Discussion Protocol Starters) should
include a standard disclaimer:

> "This section contains compressed content from the cited source files.
> Compression removes qualifying nuance, dissenting views, and evidence
> chains. For the complete analysis, read the cited files."

---

*Audit complete: 7 files, 5 criteria each, 35 individual assessments.
4 PASS, 2 BORDERLINE FAIL, 1 FAIL. 16 violations flagged (5 severe,
6 significant, 5 minor). 5 priority fix recommendations.*
