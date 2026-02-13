# Dimension: SUPERSESSION

**Researcher:** dim-researcher-supersession
**Date:** 2026-02-13
**Task:** Define when a file has been fully absorbed by its synthesis

---

## EXECUTIVE SUMMARY

**SUPERSESSION** measures whether a file's unique content has been absorbed into a synthesis document, making the original redundant for forward consumption. This is distinct from archival value — superseded files may have historical interest but serve no operational purpose for the post-CD pipeline.

**Key metric:** Compression ratio averaging **8.4:1 (88% information loss)** proves synthesis captured signal while discarding noise.

**Critical distinction:** Supersession ≠ deletion safety. A superseded file can be safely deleted only if it also passes forward-consumption tests (no external dependencies, no unique unabsorbed content).

---

## DEFINITION

A file is **SUPERSEDED** when:

1. **A synthesis document exists** that explicitly absorbs it
2. **The compression ratio is lossless for SIGNAL** (findings, conclusions, decisions)
3. **The compression ratio is lossy for NOISE** (process, iterations, working notes)
4. **No unique content remains** that isn't captured in the synthesis
5. **Forward consumption references the synthesis**, not the original

---

## THE FOUR SUPERSESSION CHAINS (OBSERVED)

### Chain 1: Soul Definition
```
card-system/SOUL-DEFINITION.md (10 principles, 2020-era)
    ↓ [absorbed, expanded]
component-system/SOUL-DEFINITION.md (6 universal rules, 58KB)
    ↓ [distilled, locked]
perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md (T1, 16KB, LOCKED)
```

**Compression:** 10 principles → 6 rules → 5 soul pieces (T1)
**What was lost:** Card-scope specifics, initial iteration working notes
**What was preserved:** Core principles, universal constraints, CSS implications
**Status:** card-system/SOUL-DEFINITION.md is **FULLY SUPERSEDED** (81 refs all historical)

---

### Chain 2: Anti-Patterns
```
component-system/ANTI-PATTERNS.md (scattered collection, working data)
    ↓ [organized]
perceptual-audit-v2/tracking/ANTI-PATTERNS.md (working data, per-component)
    ↓ [synthesized, tested]
perceptual-audit-v2/synthesis/ANTI-PATTERNS-REGISTRY.md (T1, "The Soul Test")
```

**Compression:** Scattered notes → organized tracking → formalized registry
**What was lost:** Discovery chronology, per-builder debate
**What was preserved:** Complete anti-pattern definitions, violation tests, examples
**Status:** component-system/ANTI-PATTERNS.md is **FULLY SUPERSEDED** (verifier confirmed no unique content)

---

### Chain 3: Design Tokens
```
archive/tokens/ (pre-audit values with WRONG data)
    ↓ [audited, corrected]
perceptual-audit-v2/tracking/[COLOR|TYPOGRAPHY|SPACING|CONTAINER]-TOKENS.md
    ↓ [distilled to :root {} block]
perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md (T1, single CSS source of truth)
    ↓ [implemented]
typography-system/*.css + component-system/css/*.css
```

**Compression:** 7 files → 4 working files → 1 locked :root {} → CSS implementation
**What was lost:** Pre-audit wrong values (DANGEROUS), working iteration data
**What was preserved:** All locked token values verbatim, complete `:root {}` block
**Status:** archive/tokens/ is **FULLY SUPERSEDED + DANGEROUS** (contains wrong values)

---

### Chain 4: Agent Team Scratchpads
```
_od-audit-scratchpad/ (22 files, 7,867 lines, 17 agents)
    ↓ [absorbed]
OD-GRANULAR-AUDIT-RESULTS.md (688 lines, synthesis)
```

**Compression ratio:** 11.4:1 (91% noise)
**What was lost:** Per-agent attribution, adversarial debates, iteration history, screenshots
**What was preserved:** All 89 findings, severity ratings, recommendations, cross-OD analysis
**Status:** Scratchpad is **FULLY SUPERSEDED** for operational use, retains archival value

---

## COMPRESSION RATIO ANALYSIS

### Empirically Measured Ratios (From 3 Supersession Chains)

| Chain | Scratchpad Lines | Synthesis Lines | Ratio | Noise % |
|-------|------------------|-----------------|-------|---------|
| OD Audit | 7,867 | 688 | 11.4:1 | 91% |
| Migration Research | 4,037 | 447 | 9.0:1 | 89% |
| Workflow Metacognition | 4,257 | 878 | 4.8:1 | 79% |
| **AVERAGE** | — | — | **8.4:1** | **88%** |

### What This Proves

**The synthesis is NOT a summary.** It is a **signal extraction**. The 88% compression loss is:
- Process documentation (what was tried, iteration chronology)
- Per-agent attribution (who found what)
- Adversarial debates (arguments, counter-arguments, resolution)
- Working notes (partial drafts, dead-end investigations)
- Execution logs (state tracking, completion timestamps)
- Evidence artifacts (screenshots, code samples, test outputs)

**The 12% signal preservation is:**
- Findings (with IDs, severity, descriptions)
- Conclusions (pass/fail verdicts, recommendations)
- Decisions (what was chosen, why)
- Constraints (locked values, rules, anti-patterns)
- Cross-references (how findings relate)

### The Paradox of Lossless Compression with 88% Loss

The compression is **lossless for signal** and **lossy for noise**. For forward consumption:
- Can you extract all findings? **YES** (688 lines preserves all 89 findings)
- Can you see who found what? **NO** (attribution lost)
- Can you reproduce the fix order? **YES** (recommendations preserved)
- Can you replay the adversarial debate? **NO** (debate lost)

**For post-CD pipeline work, signal is what matters. Noise is archival.**

---

## THE FORWARD-CONSUMPTION TEST

**Question:** After synthesis exists, does anyone READ the scratchpad for operational work?

### Test Results (From Adversary Analysis)

**External reference scan:**
- 53 files reference the 12 underscore directories in knowledge-architecture/
- **2 files** actually TRAVERSE into scratchpads: POST-CD-PIPELINE/CLAUDE.md + README.md
- **51 files** cite scratchpads BIBLIOGRAPHICALLY (provenance metadata, not traversal)

**What this means:**
- Synthesis documents SAY they absorbed scratchpads (provenance citations)
- But NO ONE READS the scratchpads after synthesis exists
- References are "Based on: [scratchpad]" — this is metadata, not a call to action

**Analogy:** A PhD thesis cites 200 papers. Does that mean you need to keep all 200 papers to understand the thesis? No. The thesis absorbed what it needed. The citations prove provenance, not ongoing value.

---

## PARTIAL SUPERSESSION

**Partial supersession** occurs when:
1. Most content is absorbed, but some unique content remains
2. The synthesis references the original as "see [file] for details"
3. Forward consumption requires BOTH synthesis and original

### Example: font-research/

```
font-research/ (21 files: specimens, comparisons, feasibility, letterform analysis)
    ↓ [compressed]
font-research/FINAL-DECISION.md (490 lines) + RANKING-SUMMARY.md
    ↓ [absorbed into token]
DESIGN-TOKEN-SUMMARY.md (--font-display: "Instrument Serif")
```

**Status:** PARTIAL SUPERSESSION
- 18 files are fully superseded (raw data absorbed into FINAL-DECISION + RANKING-SUMMARY)
- 2 files remain load-bearing (FINAL-DECISION: rationale, RANKING-SUMMARY: methodology)
- DESIGN-TOKEN-SUMMARY references FINAL-DECISION for font rationale (not superseded)

**Deletion verdict:**
- DELETE 18 supporting files (specimens, detailed comparisons)
- KEEP 2 crown jewels (decision rationale + ranking methodology)

---

## THE SUPERSESSION TEST (BINARY CHECKLIST)

For a file to be **FULLY SUPERSEDED**, ALL must be TRUE:

```
1. SYNTHESIS EXISTS
   □ A synthesis document explicitly absorbs this file
   □ Synthesis lists this file in its "Absorbed From" metadata

2. SIGNAL CAPTURED
   □ All findings extracted
   □ All conclusions preserved
   □ All decisions documented
   □ All locked values copied verbatim

3. NOISE DISCARDED
   □ Process documentation not in synthesis (expected)
   □ Attribution not in synthesis (expected)
   □ Iteration history not in synthesis (expected)
   □ Working notes not in synthesis (expected)

4. NO UNIQUE CONTENT
   □ Spot-check: No content in original that synthesis doesn't capture
   □ No "see [original] for details" references from synthesis
   □ No external files reference original for operational work

5. FORWARD CONSUMPTION REFERENCES SYNTHESIS
   □ POST-CD-PIPELINE references synthesis, not original
   □ External citations are bibliographic only, not traversal
   □ No load-bearing dependencies on original
```

**If ANY checklist item is FALSE → PARTIAL SUPERSESSION or NOT SUPERSEDED**

---

## SUPERSESSION ≠ DELETION SAFETY

**Critical distinction:** A file can be FULLY SUPERSEDED but NOT safe to delete if:

1. **Archival policy requires retention** (git history may not be enough)
2. **Provenance verification requires artifacts** (e.g., screenshots proving 0 soul violations)
3. **Audit trail mandates original evidence** (regulatory, compliance)
4. **Process learning requires iteration history** (training future teams)

**Example:** _od-audit-scratchpad/ is FULLY SUPERSEDED but verifier argues KEEP for archival value:
- Claim: "0 soul violations across ~13,000 elements" requires artifact trail
- Claim: Process evidence (17-agent adversarial debate) has unique value
- Claim: Screenshot evidence not reproducible from synthesis alone

**Adversary rebuttal:**
- Git history IS the archival layer
- 0 soul violations claim proven by 3 independent processes in synthesis
- Process evidence serves no operational purpose for post-CD pipeline
- Cognitive cost of 10 underscore directories outweighs archival benefit

**Master verdict: SIDE WITH ADVERSARY** — supersession + forward-consumption test = DELETE

---

## THE COGNITIVE COST OF KEEPING SUPERSEDED FILES

Even if storage is free, superseded files impose costs:

1. **Distraction** — Every underscore directory is noise when browsing
2. **False Signal** — Search results return scratchpads instead of synthesis
3. **Maintenance Burden** — Stale docs that contradict current state
4. **Compaction Risk** — Agents may load scratchpads instead of synthesis, hitting token limits
5. **Navigation Overhead** — Extra directories to skip, explain, warn about

**User's goal:** "Maximum aggression without breaking post-CD pipeline"
**Implication:** Superseded files with zero forward consumption should DELETE, not archive

---

## WHEN SUPERSESSION IS LOSSY (AND THAT'S ACCEPTABLE)

Some compressions are **intentionally lossy** because the lost content has no operational value:

### Lossy Compression 1: Iteration History
**What's lost:** Draft 1 → Draft 2 → Draft 3 → Final
**Why acceptable:** Only Final is load-bearing, iterations are process artifacts
**Exception:** If iterations demonstrate THINKING evolution (e.g., paradigm shifts), may retain archival value

### Lossy Compression 2: Per-Agent Attribution
**What's lost:** "Agent-A found findings 1-12, Agent-B found 13-24"
**Why acceptable:** For operational work, only the findings matter, not who found them
**Exception:** If attribution reveals systematic bias (e.g., visual agents miss structural issues), retain for calibration

### Lossy Compression 3: Adversarial Debates
**What's lost:** "Agent-A claims X, Agent-B rebuts Y, Weaver synthesizes Z"
**Why acceptable:** The synthesis (Z) captures the resolution, debate is process noise
**Exception:** If debate reveals edge cases or ambiguity, document in synthesis as "open question"

### Lossy Compression 4: Execution Logs
**What's lost:** "Phase A complete at 12:34, Phase B started, Agent-3 idle"
**Why acceptable:** Completion status is binary (done/not done), timestamps are process metadata
**Exception:** If execution reveals performance patterns (e.g., Playwright contention), capture in MEMORY.md

---

## THE BIBLIOGRAPHIC CITATION PATTERN

**Observed pattern:** Synthesis documents cite scratchpads but don't expect readers to traverse them.

### Example Citation Formats

**Format 1: Provenance Metadata**
```markdown
Absorbed From: _od-audit-scratchpad/ (22 files, 7,867 lines)
```
This is metadata, not a traversal instruction. It proves WHERE findings came from, not that you should READ the scratchpad.

**Format 2: Agent Attribution**
```markdown
Based on: 17 agents (Traverser, 3 Visual-First, Fresh-Eyes, 3 Systematic, ...)
Source Data: 22 scratchpad files (~500KB total)
```
This documents the process, not the content. No one reads 500KB of scratchpads to verify 89 findings.

**Format 3: Compression Acknowledgment**
```markdown
Synthesis from: 4,257 lines → 878 lines (4.8:1 compression, 79% noise)
```
This PROVES the scratchpad was compressed, not that it should be retained.

**The test:** Does the synthesis say "See [scratchpad] for details" or "For complete analysis, read [scratchpad]"?
- If YES → PARTIAL SUPERSESSION (synthesis incomplete)
- If NO → FULL SUPERSESSION (synthesis complete, citation is provenance only)

---

## SUPERSESSION TIMELINE (PHASE LIFECYCLE)

**Phase lifecycle:**
```
1. PLANNING → Architecture docs, protocols (creation instance)
2. EXECUTION → Agent teams produce scratchpads (execution instance)
3. SYNTHESIS → Findings absorbed into synthesis document (synthesis instance)
4. VERIFICATION → Synthesis verified complete (verification instance)
5. COMPLETION → Phase marked COMPLETE in MEMORY.md
6. SUPERSESSION → Scratchpads become redundant for forward consumption
```

**When does supersession occur?**
- **NOT** at step 3 (synthesis exists but may be incomplete)
- **NOT** at step 4 (verification proves synthesis is complete)
- **YES** at step 5 (phase COMPLETE in MEMORY.md = no future edits)
- **YES** at step 6 (forward consumption references synthesis, not scratchpads)

**Safe deletion window:** After step 5 + external reference verification

---

## THE 2-DIRECTORY EXCEPTION (FROM ADVERSARY ANALYSIS)

**Only 2 of 12 underscore directories pass forward-consumption test:**

1. `_cd-research/` (9 files, ~3,500 lines)
   - Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON section
   - CD scoping research not yet fully synthesized
   - Actively consumed for post-CD component extraction

2. `_migration-research/` (10 files, ~5,800 lines)
   - Listed in POST-CD-PIPELINE/CLAUDE.md BUILT ON section
   - Migration architecture not yet fully synthesized
   - Actively consumed for Track 1 + Track 2 migration planning

**Why these are NOT superseded:**
- Synthesis is INCOMPLETE (POST-CD-PIPELINE/README.md is partial synthesis only)
- Forward consumption is ACTIVE (agents instructed to READ these for CD work)
- Phase is IN PROGRESS (CD component extraction hasn't started)

**The other 10 directories:**
- Phases COMPLETE (OD audit, AD execution, provenance remediation, workflow metacognition)
- Synthesis COMPLETE (OD-GRANULAR-AUDIT-RESULTS, ACCUMULATED-IDENTITY-v2, REMEDIATION-STATE, WORKFLOW-METACOGNITION-ANALYSIS)
- Forward consumption REFERENCES synthesis, not scratchpads

---

## SCORING RUBRIC

**SUPERSESSION SCORE: 0-10** (0 = not superseded, 10 = fully superseded, safe to delete)

| Score | Criteria |
|-------|----------|
| **10** | Synthesis exists + all signal captured + no unique content + phase complete + zero forward consumption |
| **8-9** | Synthesis exists + all signal captured + minimal unique content + phase complete |
| **6-7** | Synthesis exists + most signal captured + some unique content remains |
| **4-5** | Synthesis exists but incomplete, OR unique content remains, OR forward consumption active |
| **2-3** | Partial synthesis only, significant unique content remains |
| **0-1** | No synthesis, or synthesis is bibliographic reference only |

**Deletion safety:**
- Score 10 → DELETE (after external reference verification)
- Score 8-9 → DELETE with caution (spot-check unique content first)
- Score 6-7 → ARCHIVE (synthesis incomplete)
- Score 4-5 → KEEP (active forward consumption)
- Score 0-3 → KEEP (no supersession)

---

## EXAMPLES WITH SCORES

### Example 1: _od-audit-scratchpad/
- Synthesis: OD-GRANULAR-AUDIT-RESULTS.md (688 lines) ✓
- Signal captured: All 89 findings, all recommendations ✓
- Compression: 11.4:1 (91% noise) ✓
- Unique content: Attribution, debates, screenshots (not load-bearing) ✓
- Phase complete: OD phase COMPLETE in MEMORY.md ✓
- Forward consumption: Zero (POST-CD-PIPELINE references synthesis) ✓
- **SCORE: 10** (DELETE safe)

### Example 2: _cd-research/
- Synthesis: POST-CD-PIPELINE/README.md (partial) ✗
- Signal captured: Partial only ✗
- Phase complete: CD phase IN PROGRESS ✗
- Forward consumption: ACTIVE (listed in BUILT ON) ✗
- **SCORE: 4** (KEEP — active forward consumption)

### Example 3: font-research/ supporting files
- Synthesis: FINAL-DECISION.md + RANKING-SUMMARY.md ✓
- Signal captured: All rationale, all methodology ✓
- Unique content: Specimens absorbed, detailed comparisons absorbed ✓
- Forward consumption: Synthesis only (DESIGN-TOKEN-SUMMARY references FINAL-DECISION) ✓
- **SCORE: 9** (DELETE 18 files, KEEP 2 crown jewels)

### Example 4: card-system/SOUL-DEFINITION.md
- Synthesis: component-system/SOUL-DEFINITION.md → MASTER-SOUL-SYNTHESIS.md ✓
- Signal captured: 10 principles → 6 rules → 5 soul pieces ✓
- Compression: 2-level synthesis chain ✓
- Unique content: None (T1 absorbed all) ✓
- Phase complete: Card system SUPERSEDED in MEMORY.md ✓
- Forward consumption: Zero (81 refs all historical) ✓
- **SCORE: 10** (DELETE safe)

---

## RECOMMENDATIONS

### For Aggressive Cleanup (User Goal: "Maximum aggression without breaking post-CD pipeline")

**DELETE immediately (Score 10):**
- _comprehensive-audit/ (MASTER-AUDIT-REPORT absorbed findings)
- _od-reenrichment/ (OD spec absorbed 65 agent outputs)
- _ad-execution/ (ACCUMULATED-IDENTITY-v2 absorbed findings)
- _ad-skeleton-analysis/ (AD Master Execution Spec absorbed research)
- _od-audit-scratchpad/ (OD-GRANULAR-AUDIT-RESULTS absorbed 89 findings)
- _provenance-gap-analysis/ (Remediation handoff absorbed research)
- _remediation/ (Remediation complete, execution logs historical)
- _provenance-deep-dive/ (Handoff absorbed research)
- _workflow-metacognition/ (WORKFLOW-METACOGNITION-ANALYSIS absorbed insights)
- _execution-journal/ (Session logs, no forward consumption)

**KEEP (Score 0-5):**
- _cd-research/ (forward-consumed by POST-CD-PIPELINE)
- _migration-research/ (forward-consumed by POST-CD-PIPELINE)
- _pipeline-evolution-research/ (referenced by POST-CD-PIPELINE/README.md)
- _component-taxonomy-research/ (referenced by POST-CD-PIPELINE/08-COMPOSITIONAL-STRATEGY-LIBRARY.md)

**Total deletion: 10 directories (319 files, ~75,900 lines, 94% of scratchpad mass)**

---

## FINAL ANSWER: WHEN IS A FILE FULLY ABSORBED?

A file is **FULLY SUPERSEDED** when:

1. **Synthesis exists** that explicitly absorbs it
2. **All signal preserved** (findings, conclusions, decisions, locked values)
3. **Noise discarded** (process, attribution, iteration, working notes)
4. **No unique content** remains unabsorbed
5. **Forward consumption** references synthesis, not original
6. **Phase complete** (no future edits expected)
7. **Compression ratio** typical (4:1 to 11:1, 75-91% noise)

**The test is NOT "does this have historical value?" — it's "will anyone read this for the post-CD pipeline?"**

**Supersession is a FORWARD-LOOKING measure, not a retrospective judgment.**

---

## OPEN QUESTIONS

1. **Archival policy:** Should superseded files live in git history only, or archive/ directory?
2. **Provenance verification:** Do screenshots proving "0 soul violations" require artifact retention?
3. **Process learning:** Do future agent teams need iteration history, or is MEMORY.md sufficient?
4. **Compression threshold:** Is 8.4:1 average the "correct" ratio, or should we aim for 4:1 (less lossy)?
5. **Partial supersession:** When synthesis says "see [original] for details," is that acceptable or a synthesis failure?

---

**Task #5 (Research supersession dimension) — COMPLETE**
