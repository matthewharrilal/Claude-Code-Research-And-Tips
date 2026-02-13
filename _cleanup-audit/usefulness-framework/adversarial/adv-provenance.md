# Adversarial Challenge: Provenance Dimension

**Agent:** adv-provenance-challenger
**Date:** 2026-02-13
**Target:** dim-provenance.md (623 lines, 4-dimensional scoring rubric)
**Mission:** Challenge EVERY claim, especially deletion safety thresholds

---

## Executive Challenge

**THE FUNDAMENTAL FLAW:** The researcher assumes **provenance threading = importance**, but Phase 2B only covered 490/910 source files. **What about the 420 files that SHOULD have threading but don't?**

The rubric creates a **FALSE NEGATIVE problem** — files with score 0-14 might be "isolated" because they were MISSED in Phase 2B/2D, not because they're actually unimportant.

**Example:** `PROGRESS-audit/` scores 4 ("weakly integrated"), but the researcher admits "referenced in README.md Phase 5 status" — that's an ACTIVE LINK hidden outside the threading system!

---

## Challenge 1: Provenance Isolation ≠ Deletion Safety

### Claim (Line 188-192):
> **Threshold Definition:**
> - **0 inbound refs from Tier A/B files** = isolated (not consumed by authoritative work)
> - **0 outbound refs to design-extraction or docs-spa** = island (self-contained, no external dependencies)
> - **BOTH** = isolated island (delete candidate IF the phase is complete)

### Challenge:

**1.1 Missing Threading Headers ≠ No Dependencies**

The researcher treats "0 inbound refs" as proof of isolation, but:

- Phase 2B threaded 490 files, leaving **420 source files unthreaded**
- Phase 2D added light sections to 244 files, leaving **666 files without SUPERSEDED markers**
- MEMORY.md documents 13 multi-agent teams — where are the team execution artifacts?

**Spot Check: `explorations/axis/` (233 files, score 8)**

Researcher says:
> **Verdict:** ARCHIVE .md files (lock sheet, audit reports) + DELETE 167 PNG screenshots.

**But MEMORY.md says:**
> ### Previous: AD Provenance Remediation — COMMITTED
> **Commits: 2d340ca through 53dac99 — 21-agent team, 8 waves, 6,313 insertions across 45 files**

**WHERE ARE THOSE 45 FILES?** If `explorations/axis/` contains the AD team's working artifacts, deletion loses the ONLY record of how AD phase was executed!

**1.2 README.md References Not Counted**

Researcher admits (line 564):
> - PROGRESS-audit/ — score 4, KEEP (referenced in README.md Phase 5 status)

**But the rubric gives 0 points for README.md references!** The "Inbound Reference Score" only counts Tier A/B files, ignoring:

- README.md (project index)
- MEMORY.md (phase tracking)
- CLAUDE.md files (process enforcement)

**These are the MOST important inbound references** — they guide human navigation and agent grounding!

**1.3 Implicit Consumption Ignored**

Researcher acknowledges (line 379-382):
> **Edge Case:** CLAUDE.md is consumed **implicitly** (auto-loaded by tool), not explicitly cited.
> **Provenance Status:** CRITICAL — deletion breaks agent workflow, even though no file explicitly lists "BUILT ON: CLAUDE.md"

**But the rubric gives 0 points for implicit consumption!** How many other files are auto-loaded by tools, workflows, or human processes?

- Next.js config files (next.config.js, tsconfig.json)
- Package.json (defines dependencies)
- .prettierrc, .gitignore (tooling configs)
- HTTP server scripts (needed for Playwright)

**ALL of these score 0 on the rubric, but deletion breaks the system.**

---

## Challenge 2: Threading Creates FALSE Sense of Importance

### Claim (Line 12-18):
> The KortAI project has a **formal 3-layer provenance system** covering 734 files:
> 1. **Inline Threading Headers (Phase 2B)** — 490 files with BUILT ON / CONSUMED BY sections
> 2. **Light Section Headers (Phase 2D)** — 244 files with SUPERSEDED BY markers
> 3. **Stage Provenance Directories** — Formal handoff documents connecting pipeline phases

### Challenge:

**2.1 Threading ≠ Provenance**

The 3-layer system documents **deliberate research chains**, but it EXCLUDES:

- **Infrastructure files** (package.json, tsconfig.json, next.config.js) — 0 threading, but system-critical
- **Tool configs** (.prettierrc, .gitignore, playwright.config.ts) — 0 threading, but break workflow if deleted
- **Generated files** (.next/, node_modules/) — 0 threading, already excluded as junk (correct)

**The rubric conflates "provenance" with "research provenance"** — it measures position in the R1→R5→DD→OD→AD→CD research chain, but ignores the build/deploy/tool chain.

**2.2 High Threading ≠ High Value**

Example from rubric (line 476-485):

| File | Score | Verdict |
|------|-------|---------|
| RESEARCH-SYNTHESIS.md | 36 | CRITICAL HUB |
| DESIGN-TOKEN-SUMMARY.md | 40 | CRITICAL HUB |

**But what's the ACTUAL impact of deletion?**

- **RESEARCH-SYNTHESIS.md (337 findings):** Deletion loses cross-research insights, but **does NOT break any HTML/CSS/React files**. The findings are already applied — this is bibliographic.
- **DESIGN-TOKEN-SUMMARY.md (token values):** Deletion breaks 20+ CSS files that import `var(--font-display)`. This is ACTIVE.

**Both score 35+, but only DESIGN-TOKEN-SUMMARY has cascading breakage risk.** The rubric doesn't distinguish between "intellectually important" and "functionally load-bearing."

**2.3 Threading Headers Can Lie**

From line 391-406 (duplicate files edge case):

> showcase/research/R1-DOCUMENTATION-PATTERNS.md (ORIGINAL)
> DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md (COPY)
> Threading header: "Copies in provenance/original-research/ must match"

**Challenge:** What if the threading header SAYS they match, but they don't?

- Spot check: Did Phase 2B verify all duplicate files are identical?
- If COPY and ORIGINAL diverge, which one is the source of truth?
- Rubric gives BOTH the same score — but if COPY is stale, it's a zombie link!

---

## Challenge 3: Stale Links Not Addressed

### Claim (Line 81-118):
> ### 2.1 Alive Links (Active Dependencies)
> **Characteristics:**
> - Downstream file **reads values** from upstream file (token values, finding IDs, character names)
> - Upstream change **forces downstream update** (cascading dependency)

### Challenge:

**3.1 How Often Are Threading Headers Updated?**

Phase 2B was committed in **commit f13a5c3** (MEMORY.md line 126). Since then:

- 7 more phases completed (CD build, skill enrichment, tension pipeline, etc.)
- 54 files committed in CD phase (MEMORY.md line 71)
- 78 files committed in comprehensive audit (MEMORY.md line 99)

**Did Phase 2B headers get updated when new files consumed them?**

Example: If `CD-006.html` was built AFTER Phase 2B, its threading header exists, but:

- Does `DESIGN-TOKEN-SUMMARY.md` list CD-006 in its CONSUMED BY section?
- If not, the link is INVISIBLE to the rubric — CD-006 scores low despite being a committed deliverable!

**3.2 Supersession Markers Can Become Stale**

Researcher says (line 129-136):

> card-system/SOUL-DEFINITION.md (10 principles, SUPERSEDED)
>     ↓
> component-system/SOUL-DEFINITION.md (6 universal rules)
>     ↓
> MASTER-SOUL-SYNTHESIS.md (T1, LOCKED)

**Challenge:** What if `component-system/SOUL-DEFINITION.md` was ALSO superseded by T1, but doesn't have a SUPERSEDED marker?

- Rubric gives it score 6 ("Active, but newer version exists")
- But if it's ACTUALLY superseded, it should score 4 ("Superseded, but kept for chain documentation")

**The rubric assumes threading headers are always correct and up-to-date. This is unverified.**

**3.3 CONSUMED BY Sections Can Be Incomplete**

From line 213-222 (safe deletion criteria):

> 1. **Superseded:** File has explicit `SUPERSEDED BY [file]` marker
> 2. **Content Absorbed:** Downstream synthesis file contains all its findings/data
> 3. **No Active Consumers:** CONSUMED BY section is empty OR lists only archival references
> 4. **Bibliographic Only:** All inbound citations are for historical context, not implementation

**Challenge: Criterion #3 is unreliable.**

- CONSUMED BY sections are SELF-REPORTED by the file being consumed (upstream file lists its own consumers)
- But what if a NEW file starts consuming it AFTER the threading header was written?
- Example: If `showcase/` work cited R1 findings, but R1's CONSUMED BY section was frozen at Phase 2B, the link is invisible!

**The rubric treats "CONSUMED BY is empty" as proof of safety, but it's only proof that the header hasn't been updated.**

---

## Challenge 4: Zombie Links Not Scored Correctly

### Claim (Line 154-171):
> ### 2.3 Zombie Links (Half-Alive)
> **A third category exists: provenance links that are alive in SOME contexts but dead in OTHERS.**
>
> **Example:** research/R1-DOCUMENTATION-PATTERNS.md (28 findings, 60% applied)

### Challenge:

**4.1 Rubric Doesn't Score Partial Consumption**

The "Active Consumption Score" (line 422-432) has 5 tiers:

| Score | Criteria |
|-------|----------|
| 10 | Token source / character names / CSS values |
| 8 | Synthesis absorbing 10+ raw files |
| 6 | Research findings tracked in RESEARCH-ACTIVE.md |
| 4 | Handoff document read during phase transition |
| 2 | Bibliographic citation only |
| 0 | No downstream consumption |

**Where does "60% applied" fit?**

- If 17/28 R1 findings were applied, is that score 6 (tracked) or score 2 (40% bibliographic)?
- Rubric gives R1 score 6, but **40% of its content is dead weight**
- Should R1 be scored as 6 × 0.6 = 3.6 (adjusted for partial consumption)?

**The rubric has no mechanism for scoring zombie links.**

**4.2 Researcher Admits Zombie Risk, Then Ignores It**

From line 253-267 (risky deletion section):

> **Example: R1-DOCUMENTATION-PATTERNS.md (28 findings, 60% applied)**
> **Why risky:** Even though 40% of R1 content is unapplied, **RESEARCH-ACTIVE.md references all 28 finding IDs**. Deletion breaks tracking integrity.

**But then the rubric gives R1 a safe score!**

From examples section (line 8.1, not shown in excerpt but implied by line 543):

> RESEARCH-SYNTHESIS.md, R1-R5 research files → NEVER DELETE (Score 35-40)

**If R1 has 40% dead content, why does it score 35+?** The researcher identified the zombie problem but didn't penalize it in the rubric.

**4.3 Partial Consumption = Bloat**

If 40% of R1 is unapplied findings:

- **Option A:** Keep all 28 findings (preserves tracking, but 40% is bloat)
- **Option B:** Delete unapplied findings (cleans bloat, but breaks RESEARCH-ACTIVE.md tracking)
- **Option C:** Split into R1-APPLIED.md (17 findings) + R1-ARCHIVED.md (11 findings)

**The rubric doesn't account for "useful but bloated" files.** It treats R1 as monolithic (score 35+), ignoring the optimization opportunity.

---

## Challenge 5: Spot-Check "Safe to Delete" Files

Researcher recommends (line 555-558):

> ### 9.3 DELETE CANDIDATES (Score 0-14)
> - Isolated root folders (explorations/axis/, _tension-test/) IF phase complete
> - PNG screenshots in underscore archives (keep .md reports)
> - node_modules/ (playwright agent files)
> - Duplicate CHECKPOINT-CURRENT.md (exists at 2 levels)

### Spot Check #1: `explorations/axis/` (233 files)

**Researcher's claim:** Score 8 (weakly integrated), DELETE 167 PNG screenshots.

**Challenge:**

From MEMORY.md (line 105-117):

> ### Previous: AD Provenance Remediation — COMMITTED
> **Commits: 2d340ca through 53dac99 — 21-agent team, 8 waves, 6,313 insertions across 45 files**

**Question:** Are those 45 files in `explorations/axis/`, or are they in DESIGN-SYSTEM/provenance/?

If AD team's artifacts are in `explorations/axis/`, deletion loses:

- Team execution logs (which agent did what)
- Per-file fix reports (how each issue was resolved)
- Audit screenshots (evidence for findings)

**The researcher didn't verify WHERE the 45 AD files are before recommending deletion.**

**Follow-up:** Check git history:

```bash
git log --all --oneline --name-only 2d340ca..53dac99 | grep "explorations/axis" | wc -l
```

**If count > 0, the "isolated" claim is false — these files ARE in the committed provenance chain.**

### Spot Check #2: `_tension-test/` (104 files)

**Researcher's claim:** Score 8 (weakly integrated), DELETE candidate.

**Challenge:**

From MEMORY.md (line 52-55):

> ### Previous: Tension-Composition Pipeline Test — COMPLETE
> - 11 agents, 4 waves, ~55 min, 15 HTML layouts, pipeline disagreed with auditors on ALL 3 top picks
> - Root cause: Pipeline predicts RICHNESS not QUALITY. Key insight: IMPLICIT > EXPLICIT metaphors

**This is a CRITICAL research finding** — "pipeline predicts richness not quality" is a major insight!

**Question:** Where is the synthesis document for this finding?

If `_tension-test/` contains the ONLY record of:

- The 15 HTML layouts tested
- The pipeline's scoring vs auditor disagreement
- The "implicit > explicit" insight derivation

Then deletion loses reproducibility of a KEY insight that likely influenced future work.

**The researcher scored reproducibility = 6 ("deletion loses AD perceptual audit context"), but this should be 10 ("deletion breaks understanding of why decisions were made").**

### Spot Check #3: PNG Screenshots in Underscore Archives

**Researcher's claim:** DELETE 167 PNG screenshots in `explorations/axis/`.

**Challenge:**

From MEMORY.md (line 117, Agent Team Lessons):

> - Playwright contention severe: only 2/13 visual workers got actual Playwright access; rest fell back to source-code analysis

**If only 2/13 visual workers got Playwright access, then 167 PNG screenshots = RARE EVIDENCE of actual visual audit work!**

**Question:** Can the .md reports be reproduced without the screenshots?

If a report says "OD-001 has 16px gap at line 342" but the screenshot shows 18px:

- With screenshot: Audit finding is verifiable
- Without screenshot: Audit finding is just a claim

**Screenshots are the PROOF of visual findings. Deleting them makes all visual audit claims unverifiable.**

### Spot Check #4: `node_modules/` (Playwright Agent Files)

**Researcher's claim:** Score 0 (junk), DELETE.

**Challenge:**

From MEMORY.md (line 134, Agent Team Lessons):

> - HTTP server MUST be started before spawning agents that need Playwright (started in Phase A)

**Question:** Are there custom Playwright scripts in node_modules/ that agents depend on?

If `node_modules/@playwright/test` contains config overrides or custom reporters, deletion breaks:

- Ability to re-run visual audits
- Ability to reproduce Playwright-based findings

**Standard practice:** node_modules/ is in .gitignore and regenerated via `npm install`, so deletion is safe.

**But the researcher didn't verify `.gitignore` status — if node_modules/ is committed, deletion might lose custom tooling.**

### Spot Check #5: Duplicate CHECKPOINT-CURRENT.md

**Researcher's claim:** Exists at 2 levels, DELETE duplicate.

**Challenge:**

**Which one is the duplicate?**

- If `checkpoints/CHECKPOINT-CURRENT.md` is the source and `root/CHECKPOINT-CURRENT.md` is a copy, delete root copy.
- If `root/CHECKPOINT-CURRENT.md` is the source and `checkpoints/` is archival, delete checkpoints copy.
- If BOTH are auto-generated by different processes, BOTH might be needed!

**The researcher identified the duplication but didn't specify which copy to delete.** This is a recipe for deleting the wrong one.

---

## Challenge 6: Thresholds Are Too Strict (Penalize Small Projects)

### Claim (Line 460-470):
> **Scoring Bands:**
>
> | Score | Provenance Status | Deletion Recommendation |
> |-------|-------------------|-------------------------|
> | 35-40 | **CRITICAL HUB** | NEVER DELETE |
> | 25-34 | **HIGHLY INTEGRATED** | Delete only with formal deprecation |
> | 15-24 | **MODERATELY INTEGRATED** | Archive if phase complete |
> | 5-14 | **WEAKLY INTEGRATED** | Deletion candidate |
> | 0-4 | **ISOLATED / DEAD** | Safe to delete |

### Challenge:

**6.1 Thresholds Calibrated for Large Projects**

Score 35+ requires:

- 15+ inbound refs (score 10) OR
- Token source (score 10) + Synthesis (score 8) + Active (score 8) + T1 locked (score 10)

**This assumes a large, mature project with extensive cross-referencing.**

For a SMALL project (50 files, 1-2 agents, single-phase work):

- Hub document might have only 5 inbound refs → score 6 (not 10)
- Synthesis might absorb only 3 files → score 4 (not 8)
- **TOTAL SCORE: 20 (MODERATELY INTEGRATED) instead of 36 (CRITICAL HUB)**

**The thresholds penalize small projects.** A file that's THE MOST IMPORTANT in a 50-file project might score only 20-25, falling into "archive if phase complete."

**6.2 Score 0-4 = "Safe to Delete" Is Dangerously Lenient**

Example: A config file (tsconfig.json, next.config.js) scores:

- Inbound Refs: 0 (no threading headers)
- Active Consumption: 0 (not cited in CONSUMED BY sections)
- Supersession: 0 (not in research chain)
- Reproducibility: 0 (not research)
- **TOTAL: 0 (ISOLATED / DEAD)**

**But deletion breaks the entire Next.js build!**

**The rubric conflates "not in research provenance chain" with "safe to delete."** This is catastrophic for infrastructure files.

**6.3 No Penalty for Scoring Bias**

The rubric gives equal weight to all 4 dimensions (0-10 each), but:

- **Inbound Refs** measures popularity (how many files cite it)
- **Active Consumption** measures functional dependency (deletion breaks things)
- **Supersession Status** measures versioning (is it current?)
- **Reproducibility** measures historical value (can we understand "why"?)

**These are NOT equally important for deletion safety!**

- A file with 0 inbound refs but Active Consumption = 10 (token source) → CANNOT delete
- A file with 10 inbound refs but Active Consumption = 0 (all bibliographic) → CAN delete (just update citations)

**The rubric should WEIGHT dimensions differently:**

```
DELETION SAFETY = (Active Consumption × 2) + Inbound Refs + Supersession + Reproducibility
```

**This would prevent the "popular but useless" trap (high inbound refs, zero functional dependency).**

---

## Challenge 7: Edge Cases the Researcher Missed

### 7.1 Generated Files (Provenance by Proxy)

**Example:** Velite-generated files (.velite/ directory).

- These are auto-generated from markdown sources
- Deleting .velite/ is safe (regenerate via `npm run build`)
- BUT deleting the markdown sources BREAKS generation

**Rubric scores .velite/ as 0 (junk), but doesn't score the markdown sources.**

**Question:** Does the rubric account for "source files that generate other files"?

If `content/*.md` → `.velite/*.json` → `docs-spa/pages/*.tsx`:

- Deleting .velite/ is safe (score 0 correct)
- Deleting content/*.md breaks the chain (should score 25+)

**The rubric should track TRANSITIVE dependencies** — a file's score should include the max score of any file that depends on it.

### 7.2 Circular References (Mutual Dependencies)

**Example:** PIPELINE-BACKBONE.md ↔ PIPELINE-MANIFEST.md

- PIPELINE-BACKBONE "consumes" PIPELINE-MANIFEST (lists research → T1 flow)
- PIPELINE-MANIFEST "consumes" PIPELINE-BACKBONE (references 12-file minimal set)

**Both have high inbound refs (15+ each), so both score 35+.**

**But if they're circularly dependent, can EITHER be deleted?** Or do they form a "delete together or delete neither" unit?

**The rubric doesn't address mutual dependencies.**

### 7.3 Version-Controlled vs Gitignored Files

**Example:** .next/ directory (Next.js build output)

- Contains 5,788 files (junk per line 558)
- Should score 0 (regenerated on build)
- **But is it in .gitignore?**

**If .next/ is COMMITTED (not in .gitignore), it's part of the provenance chain!**

- Maybe it contains build artifacts referenced by visual audits?
- Maybe it's committed because deployment reads pre-built files?

**The researcher assumed .next/ is junk without verifying .gitignore status.**

**The rubric should have a binary check:**

```
IF file is in .gitignore AND can be regenerated:
    Score = 0 (safe to delete)
ELSE:
    Score normally (might be committed for a reason)
```

### 7.4 Files Referenced by External Systems

**Example:** package.json (defines npm scripts, dependencies)

- Scores 0 on rubric (no threading headers, not in research chain)
- **But CI/CD pipeline reads it!**
- **But npm install reads it!**
- **But VS Code extensions read it!**

**The rubric only checks internal provenance (files referencing files), not external system dependencies (tools reading files).**

**Critical files missed by rubric:**

- package.json (npm)
- tsconfig.json (TypeScript compiler)
- next.config.js (Next.js)
- playwright.config.ts (Playwright)
- .prettierrc (Prettier)
- .gitignore (git)

**All score 0, all are deletion-catastrophic.**

---

## Challenge 8: The Provenance Bootstrapping Problem

### Fundamental Question: Who Threads the Threaders?

**Phase 2B created threading headers for 490 files.**

**But who threads the Phase 2B execution files?**

From MEMORY.md (line 126-133):

> **Phase 2B was DONE.** All 250/253 files threaded (3 correctly skipped).
> - Commits: f13a5c3 (B7-8), 9daa70c (B9-10), 1886040+281755a (B11-12), 72db76d (B13)

**Question:** Where are the Phase 2B batch manifests, agent logs, and execution reports?

If they're in an underscore directory (_phase-2b-threading/):

- They score 0-4 (isolated, no threading headers on themselves)
- Rubric says DELETE
- **But deletion loses the ONLY record of how threading was done!**

**The provenance system can't self-document** — the files that CREATE provenance headers don't themselves have provenance headers.

**This is the bootstrapping problem:** Meta-work (creating the provenance system) is invisible to the provenance system.

**Recommendation:** ALL multi-agent team execution artifacts should score MINIMUM 15 (reproducibility = 10 + archival value = 5), regardless of threading status.

---

## Challenge 9: False Sense of Safety

### The Danger of Quantification

**The rubric creates a FALSE SENSE OF PRECISION:**

- "Score 37 → NEVER DELETE" feels scientific
- But it's based on 4 dimensions that might be outdated, incomplete, or biased

**Example:** RESEARCH-SYNTHESIS.md scores 36 (CRITICAL HUB).

**But what if:**

- It was last updated in Phase 2A (6 months ago)?
- Phase 3-13 work is NOT reflected in it?
- All 337 findings are now stale (superseded by newer research)?

**The rubric gives it score 36 based on HISTORICAL importance, not CURRENT utility.**

**A more honest scoring would be:**

```
PROVENANCE SCORE = (Historical Score × Recency Weight) + (Current Score)

Where:
- Historical Score = rubric score based on threading headers (may be stale)
- Recency Weight = 1.0 if updated in last 3 months, 0.5 if 3-12 months, 0.2 if 12+ months
- Current Score = manual verification of active links (expensive, but accurate)
```

**Without recency weighting, the rubric rewards OLD files (they've accumulated refs over time) and penalizes NEW files (not yet cited).**

---

## Challenge 10: What About the 420 Unthreaded Files?

### The Elephant in the Room

**From claim (line 14-17):**

> The KortAI project has a **formal 3-layer provenance system** covering 734 files:
> 1. **Inline Threading Headers (Phase 2B)** — 490 files
> 2. **Light Section Headers (Phase 2D)** — 244 files

**But researcher's own analysis (line 6-7):**

> **Total Files Examined:** 4 graph analyses + 3 threaded file samples

**The researcher examined 7 files, scored 5 examples (section 8), and made recommendations for 910 source files.**

**WHERE IS THE BULK ANALYSIS?**

**Critical questions unanswered:**

1. **What are the 420 files without threading headers?**
   - Are they junk (correctly excluded)?
   - Are they infrastructure (critical but not in research chain)?
   - Are they orphans (should have been threaded but weren't)?

2. **What are the 666 files without SUPERSEDED markers?**
   - Are they current (no supersession needed)?
   - Are they stale but unmarked?
   - Are they duplicates without provenance links?

3. **What are the 176 files in .next/, node_modules/, playwright-report/?**
   - All junk (correct to exclude)?
   - Some committed for deployment reasons?
   - Some containing custom tooling?

**The researcher built a rigorous 4-dimensional rubric, then ONLY applied it to 5 hand-picked examples.**

**This is not a bulk analysis — it's a theoretical framework with anecdotal validation.**

---

## Final Verdict: The Rubric Is Useful But Insufficient

### What the Researcher Got Right

1. **4-dimensional scoring is sound** (inbound refs + active consumption + supersession + reproducibility)
2. **Alive/Dead/Zombie link taxonomy is valuable** (distinguishes functional from bibliographic)
3. **T1 synthesis identification is correct** (6 locked files are indeed irreplaceable)
4. **Underscore directory pattern is validated** (synthesis files critical, raw outputs archival)

### What the Researcher Missed

1. **No bulk verification** — 5 examples out of 910 files is 0.5% coverage
2. **Threading headers can be stale** — no recency weighting
3. **Unthreaded ≠ isolated** — 420 files excluded from analysis without verification
4. **Infrastructure files invisible** — package.json, tsconfig.json, etc. score 0
5. **External dependencies ignored** — tools, CI/CD, human workflows not counted
6. **Thresholds uncalibrated** — score bands designed for large projects, penalize small ones
7. **No transitive dependency tracking** — markdown sources that generate .velite/ scored separately
8. **Bootstrapping problem unsolved** — meta-work (creating provenance) is invisible to provenance system

### Recommendations for Lead

**DO NOT USE THIS RUBRIC AS-IS FOR BULK DELETION.**

It's a useful HEURISTIC for identifying deletion candidates, but it has:

- **High false negative rate** (scores critical files as 0 due to no threading)
- **High false positive rate** (scores stale files as 35+ due to historical refs)
- **0.5% empirical coverage** (only 5 files scored, 905 files assumed)

**Next steps:**

1. **Run bulk scoring** — apply rubric to ALL 910 files, not just 5 examples
2. **Add recency weighting** — penalize files not updated in 6+ months
3. **Verify .gitignore status** — auto-score 0 for regenerable junk
4. **Check external dependencies** — identify package.json, tsconfig.json, etc. as critical
5. **Audit threading freshness** — verify CONSUMED BY sections reflect current state
6. **Spot-check "safe to delete" files** — manually verify 10-20 score 0-4 files before deletion

**Only AFTER those 6 steps can this rubric be trusted for cleanup decisions.**

---

## Specific Files to Re-Score

Based on challenges above, these files need manual re-evaluation:

1. **explorations/axis/ (233 files)** — verify if AD team artifacts are here (not isolated if committed)
2. **_tension-test/ (104 files)** — verify if "implicit > explicit" synthesis exists elsewhere
3. **PROGRESS-audit/ (7 files)** — researcher admits README.md reference, should score higher
4. **package.json, tsconfig.json, next.config.js** — infrastructure, should score 40 (deletion-catastrophic)
5. **All CLAUDE.md files** — implicit consumption, should score 35+ (process-critical)
6. **Phase 2B execution artifacts** — wherever they are, they document HOW threading was done
7. **All PNG screenshots in underscore archives** — verify if .md reports are reproducible without them

**Until these 7 items are re-scored, the deletion recommendations are NOT SAFE.**
