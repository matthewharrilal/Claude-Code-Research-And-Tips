# Verification: Does Each Research Slice Get 10+ Passes with Evolving Evaluation?

**Verification agent report. Source: SKILL.md (918 lines), full read.**

---

## Executive Summary

The skill's prescribed pass counts are PER-WAVE, not per-file. The agent does 12-18 passes within Wave 2, but each pass rotates which of the 6 research files is at "primacy." The math produces **2-3 primacy turns per file**, not 10+. The skill compensates with a rotation schedule, diagnostic overrides, and the principle that non-primacy files still get partial attention -- but it does NOT achieve the stated goal of "each file gets at least two turns at primacy" being equivalent to deep engagement. Each file gets 2-3 focused passes, not 10+.

**The per-slice pass count is adequate for the skill's design (which treats each wave as a single deepening arc with rotating focus), but it is NOT "10+ passes per file" in any honest reading of the math.**

---

## Wave-by-Wave Table

| Wave | Research Slices | Min Passes | Max Passes | Files in Rotation | Primacy Turns Per File | Supporting/Partial Attention Passes | Total Meaningful Engagements Per File | Evolving Eval? | Verdict |
|------|----------------|-----------|-----------|-------------------|----------------------|-----------------------------------|-------------------------------------|---------------|---------|
| **Wave 0** | Content source only | 8 | 12 | 1 file | 8-12 | N/A | **8-12** | YES (3-phase: comprehension -> projection -> interrogation) | PASS -- single file gets all passes |
| **Wave 1** | identity.md, vocabulary.md, tokens.css, components.css | 10 | 14 | 4 files | 2-3 per file (rotation: 8 prescribed slots, some repeated) | 5-8 partial | **~5-7 total** | YES (3-phase: compliance -> vocabulary-as-argument -> internalization) | MARGINAL -- 5-7 engagements is reasonable for 4 small files (87-779 lines) but not 10+ |
| **Wave 2** | R1, R2, R3, R4, R5, RESEARCH-SYNTHESIS | 12 | 18 | 6 files | 2 per file (explicit rotation gives each file 2 primacy turns) | 4-8 partial (supporting reads, diagnostic overrides) | **~4-6 total** | YES (4-phase: structural -> integration -> depth -> mastery) | FAIL on 10+. Each file gets 2 primacy + 2-4 partial = 4-6 meaningful engagements |
| **Wave 3** | DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006 + mechanism-catalog + grammar | 12 | 18 | 11 files (9 case studies + 2 grammar) | 1-2 per file | 2-4 partial | **~3-5 total** | YES (4-phase: extraction -> translation -> content-deepening -> compound vision) | FAIL on 10+. 12-18 passes across 11 files = 1-2 primacy per file |
| **Wave 4** | RESEARCH-SYNTHESIS, semantic-rules, provenance docs | 8 | 12 | 3 files | 2-4 per file | 3-5 partial | **~5-7 total** | YES (3-phase: conflict detection -> meta-principle application -> framework revision) | MARGINAL -- reasonable for synthesis meta-docs |
| **Wave 5** | CD-006 (re-read), grammar.md, HTML file | 8 | 12 | 3 files (2 research + HTML) | 2-4 per file | 4-6 partial | **~6-8 total** | YES (3-phase: identification -> system thinking -> architecture-as-enabler) | MARGINAL -- CD-006 gets deep re-engagement at 6-8 |
| **Wave 6** | None (no new research) | 15 | 25 | 0 new files | N/A | N/A | N/A | YES (5-phase: taste audit -> surgical refinement -> responsive -> architecture -> re-evaluation) | N/A -- no research files, self-deepening only |
| **Wave 7** | None (self-audit) | 8 | 12 | 0 new files | N/A | N/A | N/A | YES (4-phase: experiential+adversarial -> criteria+comprehensive -> content-coupling -> surgery) | N/A -- self-audit cycle |
| **Wave 8** | None (final) | 5 | 10 | 0 new files | N/A | N/A | N/A | YES (3-phase: surgery -> responsive/accessibility -> retrospective) | N/A -- final enrichment |

---

## Detailed Analysis by Wave

### Wave 1: Design System Soul (10-14 passes, 4 files)

**The explicit rotation from the skill (line 417):**
```
identity.md -> tokens.css -> components.css -> vocabulary.md -> identity.md (re-check) -> tokens.css (audit) -> components.css (integration) -> agent's choice
```

That is 8 prescribed slots across 4 files:
- identity.md: 2 primacy turns (passes 1 and 5)
- tokens.css: 2 primacy turns (passes 2 and 6)
- components.css: 2 primacy turns (passes 3 and 7)
- vocabulary.md: 1 primacy turn (pass 4) + potential agent's choice (pass 8)
- Passes 9-14: agent's diagnostic choice

**Per-file engagement math:**
- Each file gets 2 primacy turns (vocabulary.md gets 1-2)
- Each file is likely read as supporting reference in 3-5 additional passes
- Total meaningful engagement per file: ~5-7

**Verdict: ADEQUATE for these files.** The 4 design system files are small (87-779 lines). 5-7 passes with a 4-file corpus is a reasonable depth ratio. The files are about establishing constraints, not absorbing 337 findings. The 3-phase evaluation deepening (compliance -> vocabulary-as-argument -> internalization) is well-specified.

**However:** The skill does NOT explicitly claim "10+ passes per file" for Wave 1. The claim is 10-14 passes for the wave, which is honest.

---

### Wave 2: R1-R5 Research (12-18 passes, 6 files) -- THE CRITICAL WAVE

**The explicit rotation from the skill (line 449):**
```
R1 -> R4 -> R3 -> R5 -> R2 -> R3(2nd) -> R1(2nd) -> R4(2nd) -> R5(2nd) -> R2(2nd) -> SYNTHESIS -> agent's diagnostic -> depth passes
```

That is 12 prescribed slots:
- R1: 2 primacy turns (passes 1 and 7)
- R2: 2 primacy turns (passes 5 and 10)
- R3: 2 primacy turns (passes 3 and 6)
- R4: 2 primacy turns (passes 2 and 8)
- R5: 2 primacy turns (passes 4 and 9)
- RESEARCH-SYNTHESIS: 1 primacy turn (pass 11)
- Passes 12-18: agent's diagnostic + depth

**Per-file engagement math:**
- Each R file gets exactly 2 primacy turns
- SYNTHESIS gets 1 primacy turn
- "At least two turns at primacy position" (line 310-311) -- EXACTLY met, not exceeded
- Diagnostic overrides (lines 453-457) may give a file a 3rd primacy turn if the agent detects weakness
- The "4-pass neglect rule" (line 316) prevents any file from going >4 passes without reading
- Findings triage (lines 461-466) creates supporting engagement on non-primacy passes
- At pass 8, mandatory re-evaluation of all deferred findings (line 466)

**Honest count per file:**
| File | Primacy Turns | Supporting Reads | Total Meaningful | "10+ passes"? |
|------|--------------|-----------------|-----------------|--------------|
| R1 (28 findings) | 2 | 2-3 | 4-5 | NO |
| R2 (27 findings) | 2 | 2-3 | 4-5 | NO |
| R3 (51 findings) | 2 | 3-4 | 5-6 | NO |
| R4 (192 findings) | 2 | 3-4 | 5-6 | NO |
| R5 (39 findings) | 2 | 2-3 | 4-5 | NO |
| SYNTHESIS (383 lines) | 1 | 2-3 | 3-4 | NO |

**What compensates:**
1. The 12-18 passes ARE the deep engagement -- each pass is a full build-look-refine cycle, not just a read
2. Non-primacy files are read as supporting references ("Position 2-3: Files read as targeted cross-references")
3. The diagnostic override can redirect primacy to the weakest dimension
4. The pass 8 mandatory re-evaluation creates a second engagement with all files
5. The 4-phase evaluation deepening (structural -> integration -> depth -> mastery) means even 2 primacy turns produce qualitatively different engagement

**What does NOT compensate:**
1. R4 has 192 findings. 2 primacy turns means ~96 findings per turn. The skill acknowledges this: "Do NOT absorb all 192 in one pass" (line 445). But 2 primacy turns for 192 findings is thin.
2. The "applied/irrelevant/addressed indirectly" exhaustion signal (line 487) requires engaging every finding. With 337 findings across 12-18 passes, the agent must triage ~19-28 findings per pass. This is aggressive.

**Verdict: The math does NOT produce 10+ passes per file.** Each file gets 4-6 meaningful engagements. The skill's design is sound (rotating focus across a wave is better than sequential deep-dives), but the per-file depth is 4-6, not 10+.

---

### Wave 3: Case Studies (12-18 passes, 9+ files) -- THE MOST DILUTED WAVE

**The explicit rotation from the skill (line 520):**
```
[Most relevant] -> DD-006 -> CD-006 -> OD-006 -> OD-004 -> DD-003 -> OD-001 -> mechanism-catalog -> grammar -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> depth passes
```

That is 12 prescribed slots across 11 files:
- 9 case studies (DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006)
- 2 grammar files (mechanism-catalog, grammar.md)
- 3 visual companions (dd-003-islands-visual.md, dd-004-layers-visual.md, dd-006-fractal-visual.md)
- Plus ANTI-PRESCRIPTION-TEMPLATE.md and case-studies/README.md

**Per-file engagement math:**
| File | Primacy Turns | Supporting Reads | Total Meaningful | "10+ passes"? |
|------|--------------|-----------------|-----------------|--------------|
| DD-006 | 2 (prescribed + crown jewel re-read) | 2-3 | 4-5 | NO |
| CD-006 | 2 (prescribed + crown jewel re-read) | 2-3 | 4-5 | NO |
| OD-006 | 2 (prescribed + crown jewel re-read) | 2-3 | 4-5 | NO |
| OD-004 | 1 | 1-2 | 2-3 | NO |
| DD-003 | 1 | 1-2 | 2-3 | NO |
| OD-001 | 1 | 1-2 | 2-3 | NO |
| DD-004 | 0-1 (only if "most relevant") | 0-1 | 0-2 | NO |
| CD-001 | 0-1 | 0-1 | 0-2 | NO |
| CD-005 | 0-1 | 0-1 | 0-2 | NO |
| mechanism-catalog | 1 | 1-2 | 2-3 | NO |
| grammar.md | 1 | 1-2 | 2-3 | NO |

**Critical observation:** DD-004, CD-001, and CD-005 are NOT in the default rotation at all. They appear in the file list (line 493) but not in the rotation schedule (line 520). These files may get ZERO primacy turns unless the agent's diagnostic override selects them.

**The "crown jewels" pattern (lines 520, passes 10-12):** Three passes are reserved for re-reading the 3 most valuable case studies. This means DD-006, CD-006, and OD-006 get 2 primacy turns each. All other case studies get 0-1.

**Per-group engagement (DD/OD/CD):**
- DD group (DD-003, DD-004, DD-006): DD-006 gets 4-5 engagements, DD-003 gets 2-3, DD-004 gets 0-2
- OD group (OD-001, OD-004, OD-006): OD-006 gets 4-5, OD-004 gets 2-3, OD-001 gets 2-3
- CD group (CD-001, CD-005, CD-006): CD-006 gets 4-5, CD-001 gets 0-2, CD-005 gets 0-2

**What compensates:**
1. The 4-phase pass deepening (extraction -> translation -> content-deepening -> compound vision) means each engagement with a case study deepens qualitatively
2. Case studies are read as PROCESSES, not finding sets -- one deep read is more valuable than 5 shallow reads
3. The diagnostic override can redirect to neglected case studies
4. The "4-pass neglect" attention trough remediation (line 524) catches systematically ignored case studies

**What does NOT compensate:**
1. 3 case studies (DD-004, CD-001, CD-005) have no guaranteed primacy turns
2. 12-18 passes / 11 files = 1.1-1.6 primacy turns per file on average
3. The exhaustion signal requires "specific spatial ideas absorbed AND TRANSLATED from each case study dimension" (line 526) -- but some case studies may never reach primacy

**Verdict: FAIL on 10+ per file. Most files get 2-5 engagements. Three files may get 0-2.**

---

## Specific Checks Requested

### 1. Wave 2 (R1-R5): 12-18 passes across 6 files

**Does each file get 10+ passes?** NO. Each gets 2 primacy + 2-4 supporting = 4-6 total.

**Does each get 2-3?** More accurately 4-6, counting both primacy and supporting engagement.

The rotation schedule is well-designed -- each file gets exactly 2 primacy turns with a rationale for the ordering. The diagnostic override allows for responsive re-allocation. But 10+ per file would require 60+ passes for this wave alone. The skill prescribes 12-18.

### 2. Wave 3 (Case Studies): 12-18 passes across 9+ files

**Does each DD/OD/CD group get 10+ passes?** As a group:
- DD group: ~8-10 total engagements across 3 files (DD-006 dominant)
- OD group: ~8-10 total engagements across 3 files (OD-006 dominant)
- CD group: ~5-9 total engagements across 3 files (CD-006 dominant)

Per GROUP, the engagement approaches 10. Per FILE within the group, it is 2-5 for crown jewels and 0-2 for secondary case studies.

### 3. Wave 1 (Design System): 10-14 passes across 4 files

**Adequate?** YES, this is the most reasonable wave. 4 small files across 10-14 passes gives ~5-7 per file. These files are constraint-definition files (87-779 lines), not 337-finding research corpuses. The depth ratio is appropriate.

### 4. Named Pass Archetypes: Present? Describe evolution?

**YES, present and excellent.** Lines 338-357 provide a 12-pass archetype table:

| Pass | Name | What Happens |
|------|------|-------------|
| 1 | First Contact | Bold rough additions, 100-200+ lines |
| 2 | Second Lens | Findings that seemed irrelevant now click, 80-150 lines |
| 3 | Gap Sweep | Triage remaining 60%, surgical additions, 50-100 lines |
| 4 | First Holistic Read | Making things talk, 30-80 lines |
| 5 | Transition Refinement | Zone boundaries, 20-50 lines |
| 6 | Rhythm Audit | Net REMOVAL, -20 to +20 lines |
| 7 | Typography as Argument | Letter-spacing as density encoding, 10-30 lines |
| 8 | Interaction as Experience | Hover timing, 15-40 lines |
| 9 | Self-Reference + Coupling | Swap test as creative tool, 20-60 lines |
| 10 | Architectural Soundness | Dead code removal, NET REMOVAL, -10 to -50 lines |
| 11 | Responsive as Content-Derived | Content-preserving responsive, 30-80 lines |
| 12+ | The Invisible Grain | <10 lines |

**Do they describe pass 1 vs pass 5 vs pass 10?** YES, comprehensively. The cognitive stance, expected delta (CSS line count), and evaluation mode all evolve. Pass 1 is "read and react boldly." Pass 5 is "refine transitions." Pass 10 is "remove dead code." Pass 12 is "invisible grain."

Additionally, each wave has its OWN pass-level deepening. For example, Wave 3 has:
- Passes 1-3 (EXTRACTION): 30-80 CSS lines per pass
- Passes 4-6 (TRANSLATION): 20-50 CSS lines per pass
- Passes 7-9 (CONTENT-DEEPENING): 10-30 CSS lines per pass
- Passes 10-12 (COMPOUND VISION): 5-20 CSS lines per pass
- Passes 13+ (DEPTH): research as internalized vocabulary

**Verdict: PASS. Named archetypes are thorough and evolution is well-specified.**

### 5. Delta Profile: Present as self-diagnostic?

**YES, present and well-designed.** Lines 320-336 provide:

```
Pass:  1    2    3    4    5    6    7    8    9   10   11   12
Delta: 200  150  100  80   50   +/-20 30   30   60  -30  80   <10
```

Key diagnostic signals:
- Pass 6 is often NET NEGATIVE (rhythm audit removes more than it adds) -- healthy
- Pass 10 is NET NEGATIVE (architectural cleanup) -- healthy
- If 100+ line changes at pass 8 -> integration passes (4-6) failed
- If 5-line changes at pass 2 -> not ambitious enough
- If every pass is positive -> not removing enough

**Verdict: PASS. The delta profile is a concrete, usable self-diagnostic.**

### 6. Findings Triage: Methodology present?

**YES, present.** Lines 461-466 specify:

**Classification system:**
- HIGH: Directly addresses a gap in THIS page. Apply in this pass or next.
- MEDIUM: Relevant but not urgent. Will revisit after 3+ more passes.
- LOW/SKIP: Not relevant to this content. May revisit if page changes.

**Tracking mechanism:**
- Builder's notebook, 3-5 lines per file, updated each pass

**Mandatory re-evaluation:**
- At pass 8, re-evaluate ALL deferred and skipped findings (line 466: "This is not optional")
- If 0 findings applied from any research file, write a notebook entry explaining WHY

**Safeguards:**
- "Premature dismissal is the primary failure mode of research absorption" (line 466)
- "At least 3-5 findings you dismissed in passes 1-3 will now be relevant" (line 466)
- The explanation requirement is "the safeguard against unconscious neglect"

**What is missing from triage methodology:**
1. No prescribed triage FORMAT (just "3-5 lines per file" -- could be more structured)
2. No running count of applied/deferred/skipped findings per file
3. No explicit threshold (e.g., "if >80% of a file's findings are SKIP, re-examine your reading depth")
4. The triage applies to Wave 2 (R1-R5) but is NOT explicitly repeated for Wave 3 case studies

**Verdict: ADEQUATE but could be strengthened with structured tracking format.**

---

## The Core Question: Is 4-6 Engagements Per File a Problem?

The skill's design is NOT built around "10+ passes per file." It is built around "10+ passes per wave, with rotating focus across files." This is a fundamentally different architecture:

**Architecture A (per-file deep dive):** Read R1 for 10 passes. Then read R2 for 10 passes. Total: 60+ passes for Wave 2 alone.

**Architecture B (rotating wave, the skill's approach):** Do 12-18 passes. Each pass, one file is at primacy, others provide supporting context. The WAVE deepens, not the per-file engagement.

Architecture B is defensible because:
1. The agent is building the SAME page across all passes -- each file contributes to the same artifact
2. The evolving evaluation means pass 12 of the wave engages ALL files at a deeper level than pass 1 engaged any single file
3. The "research as internalized taste" endpoint (passes 10+) means the agent is not reading files anymore -- it is thinking in their vocabulary

Architecture B is RISKY because:
1. R4 has 192 findings. 2 primacy turns is thin for that volume.
2. Secondary case studies (DD-004, CD-001, CD-005) may get 0 primacy turns.
3. The agent may privilege the first and last files in the rotation (primacy/recency effect -- the very thing the rotation is designed to combat).

---

## Gap Summary

| # | Gap | Severity | Wave |
|---|-----|----------|------|
| 1 | Per-file engagement is 4-6, not 10+ | MEDIUM -- design is sound but claim is overstated | Wave 2, 3 |
| 2 | DD-004, CD-001, CD-005 have NO guaranteed primacy turns in Wave 3 | HIGH -- these files may get 0 focused engagement | Wave 3 |
| 3 | R4 (192 findings) gets same 2 primacy turns as R1 (28 findings) | MEDIUM -- volume-proportional allocation would help | Wave 2 |
| 4 | Findings triage not extended to case studies | LOW -- case studies are processes not finding sets, but triage would still help | Wave 3 |
| 5 | No cumulative per-file engagement tracker | LOW -- would make the rotation's effectiveness visible | All waves |

---

## Recommendations

### Recommendation 1: Add All Case Studies to Wave 3 Rotation (HIGH priority)

**Problem:** DD-004, CD-001, CD-005 are listed as inputs but absent from the rotation schedule.

**Insert after line 520 of SKILL.md (after the default rotation):**

```markdown
**Complete rotation (ensuring all files get primacy):** [Most relevant to content] -> DD-006 -> CD-006 -> OD-006 -> OD-004 -> DD-003 -> CD-005 -> OD-001 -> DD-004 -> CD-001 -> mechanism-catalog -> grammar -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] -> depth passes.

**Minimum guarantee:** Every case study listed in the Input section gets at least 1 primacy turn. No file listed as input should get 0 focused engagement.
```

### Recommendation 2: Volume-Proportional Primacy for R4 (MEDIUM priority)

**Problem:** R4 has 7x more findings than R1 but gets the same 2 primacy turns.

**Insert after the Wave 2 rotation (line 449):**

```markdown
**Volume adjustment for R4:** R4 contains 192 findings (57% of the corpus). Its 2 primacy turns should be structured differently from other files:
- R4 first primacy (pass 2): Read executive summary + section headers. Identify 8-12 HIGH findings relevant to THIS content. Do NOT attempt full absorption.
- R4 second primacy (pass 8): Read the sections skipped in pass 2, focusing on findings that have become relevant as the page evolved.
- R4 third primacy (pass 13+ if available): Deep-scan for compound combination opportunities between R4 axis patterns and the density/organization work from other files.
If the wave reaches 15+ passes, R4 should get a 3rd primacy turn -- it is the only file with enough volume to justify this.
```

### Recommendation 3: Per-File Engagement Counter in Notebook (LOW priority)

**Problem:** No mechanism to verify whether the rotation is actually producing balanced engagement.

**Insert in the "Minimum Engagement Per Wave" table (after line 386):**

```markdown
| Per-file primacy tracking | Notebook tracks primacy count per file per wave |

**Notebook format for tracking:**
```
Wave 2 File Engagement:
  R1: [P1, P7, s3, s5] = 2 primacy, 2 supporting
  R2: [P5, P10, s8] = 2 primacy, 1 supporting
  R3: [P3, P6, s9, s11] = 2 primacy, 2 supporting
  R4: [P2, P8, s4, s6, s12] = 2 primacy, 3 supporting
  R5: [P4, P9, s7] = 2 primacy, 1 supporting
  SYNTH: [P11, s12] = 1 primacy, 1 supporting
```
If any file has 0 primacy turns at the wave's midpoint, it gets primacy next.
```

### Recommendation 4: Extend Findings Triage to Case Studies (LOW priority)

**Problem:** Triage methodology is specified for R1-R5 but not for case studies.

**Insert in Wave 3 section (after line 526):**

```markdown
**Case study triage (adapted from Wave 2):** On first read of each case study, classify spatial ideas into:
- **EXTRACT:** A specific spatial process or mechanism to study and potentially translate. Note the Section reference.
- **OBSERVE:** An approach worth understanding but not directly applicable. May revisit after translation attempts.
- **SKIP:** Not relevant to this content's spatial potential.

Track in notebook: 2-3 lines per case study. At pass 8, re-evaluate all OBSERVE and SKIP classifications.
```

---

## Final Verdict

**Is it absolutely clear that each research slice gets 10+ passes with evolving evaluation?**

**NO.** Each research slice gets 2-6 meaningful engagements, not 10+. However:

1. **The WAVE gets 10+ passes** -- this is clearly specified and well-architected.
2. **Evolving evaluation is present** in every wave, with specific phase descriptions (structural -> integration -> depth -> mastery).
3. **Named pass archetypes are present** and describe what happens at pass 1 vs 5 vs 10.
4. **The delta profile is present** as a self-diagnostic.
5. **Findings triage methodology is present** for Wave 2 (not Wave 3).

The skill's architecture is ROTATING WAVE, not PER-FILE DEEP DIVE. This is a defensible design choice. But the per-file engagement is 4-6, and the marketing claim of "10+ passes with evolving evaluation" applies to the wave, not to each research slice within the wave. The 4 gaps identified (missing case studies in rotation, R4 volume imbalance, no engagement counter, no case study triage) are addressable with the specific text recommendations above.
