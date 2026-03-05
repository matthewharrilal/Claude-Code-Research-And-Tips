# SKILL.md Audit: Per-File Pass Depth and Rotation Adequacy

**Date:** 2026-03-03
**Auditor model:** Claude Opus 4.6
**Scope:** Does SKILL.md (817 lines) ensure 10+ meaningful passes per research file, with evolving evaluation at the per-file level?

**Core question:** When the skill says "12-18 passes" for Wave 2 with 6 research files, does each file get 10+ passes of meaningful engagement -- or does arithmetic dilution reduce per-file engagement to 2-3 passes?

---

## EXECUTIVE SUMMARY

The SKILL.md **does not ensure 10+ passes per research file.** It ensures 10+ passes per WAVE, but across those passes, each file gets 2-3 turns at primacy. The 4-phase deepening (STRUCTURAL through MASTERY) operates at the WAVE level, not the per-file level. A file that first arrives at primacy during the DEPTH phase never gets its own STRUCTURAL phase. The minimum engagement table says "3 per research file" but does not enforce this per primacy visit. The diagnostic override protocol lacks re-entry instructions. These gaps compound: files in the attention trough (positions 3-4 of the default schedule) may receive as few as 2 meaningful engagements across the entire build.

**Severity:** HIGH. This is the single largest gap between the skill's intent (deep engagement with every research dimension) and its operational specification (wave-level pass counts that dilute to shallow per-file engagement).

---

## 1. PER-FILE PASS COUNT ANALYSIS

### Wave 1: Design System Soul (Lines 356-377)

**Files:** identity.md, vocabulary.md, tokens.css, components.css (4 files)
**Wave pass count:** 10-14 passes
**Rotation schedule (line 362):**

```
identity.md -> tokens.css -> components.css -> vocabulary.md ->
identity.md (re-check) -> tokens.css (audit) -> components.css (integration) ->
agent's choice -> [3-7 additional passes]
```

**Per-file primacy count from the explicit rotation:**

| File | Primacy passes | Positions in rotation |
|------|---------------|----------------------|
| identity.md | 2 | Pass 1, Pass 5 |
| tokens.css | 2 | Pass 2, Pass 6 |
| components.css | 2 | Pass 3, Pass 7 |
| vocabulary.md | 1 | Pass 4 |

**Findings:**

- **vocabulary.md gets only 1 explicit primacy turn.** It is the smallest file (55 lines) but it carries the design rationale -- why decisions were made. An agent following this rotation gives vocabulary.md 1 primacy turn vs 2 for every other file. Passes 8-14 are "agent's choice" and unspecified, so vocabulary.md may or may not get a second turn.

- **The gap between primacy visits:** identity.md has primacy at passes 1 and 5 (4-pass gap). This is at the threshold of the "4+ passes without primacy" override trigger (line 393). Close but not technically triggering the override.

- **Total per-file engagement:** With 10-14 passes and 4 files, each file averages 2.5-3.5 primacy turns. This is adequate for Wave 1's compliance-focused purpose (applying soul constraints). The deepening from compliance to "vocabulary as creative partner" (line 376) is achievable in 2-3 primacy turns because these are small, concrete files.

**Verdict for Wave 1:** ADEQUATE. The files are small enough and the purpose concrete enough that 2-3 primacy turns suffice. The vocabulary.md underweighting is a minor gap.

---

### Wave 2: Research R1-R5 (Lines 380-416)

**Files:** R1 (584 lines, 28 findings), R2 (810 lines, 27 findings), R3 (553 lines, 51 findings), R4 (990 lines, 192 findings), R5 (784 lines, 39 findings), RESEARCH-SYNTHESIS (383 lines)
**Wave pass count:** 12-18 passes
**Rotation schedule (line 386):**

```
R1 -> R4 -> R3 -> R5 -> R2 -> R3(2nd) -> R1(2nd) -> R4(2nd) ->
R5(2nd) -> R2(2nd) -> SYNTHESIS -> agent's diagnostic -> depth passes
```

**Per-file primacy count from the explicit rotation (first 12 passes):**

| File | Primacy passes | Positions in rotation | Phase at each visit |
|------|---------------|----------------------|---------------------|
| R1 | 2 | Pass 1, Pass 7 | STRUCTURAL, DEPTH |
| R2 | 2 | Pass 5, Pass 10 | INTEGRATION, MASTERY |
| R3 | 2 | Pass 3, Pass 6 | STRUCTURAL, INTEGRATION |
| R4 | 2 | Pass 2, Pass 8 | STRUCTURAL, DEPTH |
| R5 | 2 | Pass 4, Pass 9 | INTEGRATION, DEPTH |
| SYNTHESIS | 1 | Pass 11 | MASTERY |

Passes 12-18 are "agent's diagnostic" and "depth passes" -- unspecified file targets.

**Critical finding: Each file gets exactly 2 primacy turns in 12 explicit passes.** The remaining 0-6 passes (if the wave extends to 18) are unstructured.

**This is NOT 10+ passes per file.** It is 2 passes per file, with each pass happening at a different phase of deepening.

**The arithmetic dilution problem in concrete terms:**

R4 (Axis Innovations) has 990 lines and 192 findings. It gets primacy at Pass 2 (STRUCTURAL) and Pass 8 (DEPTH). At Pass 2, the agent is making "big moves, 100-200 lines" and has time to absorb maybe 15-25 of those 192 findings. At Pass 8, the agent is doing "typography as argument, 10-40 lines" and engages with maybe 5-10 targeted findings. Total: ~20-35 findings engaged out of 192. The remaining ~160 findings never get primacy attention.

R3 (Density Dimensions) has 51 findings. It gets primacy at Pass 3 and Pass 6. The agent might engage 8-12 findings per pass. Total: ~16-24 of 51 findings. Better ratio than R4, but still less than half.

**The "3 per research file" minimum (line 325) does not help here.** If the agent applies 3 findings from R4 per wave, that is 3 out of 192 -- 1.6% coverage. The minimum is set too low to drive meaningful engagement with large files.

**Gap: Section lines 380-416. The rotation schedule provides exactly 2 primacy turns per file across 12 explicit passes. The "12-18 passes" range implies 0-6 additional unstructured passes that may or may not compensate. The minimum engagement requirement of "3 per research file" is too low for files with 50-192 findings.**

**Recommendation:** Either:
(a) Increase the Wave 2 rotation to ensure each file gets 3-4 primacy turns in the explicit schedule (requiring 18-24 passes minimum), or
(b) Add a per-file coverage metric: "By wave end, at least 30% of each file's findings must be annotated as applied, irrelevant, or addressed indirectly," or
(c) Split Wave 2 into two sub-waves (R1+R3+R4 in Wave 2a, R2+R5+SYNTHESIS in Wave 2b) with each sub-wave having its own 10+ pass schedule for 3 files instead of 6.

Example text for option (b):
```
**Per-file coverage minimum:** By the end of Wave 2, each research file
must have at least 30% of its findings annotated (applied, irrelevant to
this content, or addressed indirectly). If any file falls below 30%
at the exhaustion check, the wave is NOT exhausted regardless of other
signals. Give that file 2 additional primacy passes before declaring
exhaustion.
```

---

### Wave 3: Case Studies (Lines 419-440)

**Files:** DD-003, DD-004, DD-006, OD-001, OD-004, OD-006, CD-001, CD-005, CD-006, mechanism-catalog.md, grammar.md (11 files)
**Wave pass count:** 10-15 passes
**Rotation schedule (line 425):**

```
OD-006 -> DD-006 -> CD-006 -> OD-004 -> DD-003 -> OD-001 ->
mechanism-catalog -> grammar -> OD-006(2nd) -> DD-006(2nd) ->
CD-006(2nd) -> depth passes
```

**Per-file primacy count from the explicit rotation (first 11 passes):**

| File | Primacy passes | Positions | Notes |
|------|---------------|-----------|-------|
| OD-006 | 2 | Pass 1, Pass 9 | Prioritized (2 turns) |
| DD-006 | 2 | Pass 2, Pass 10 | Prioritized (2 turns) |
| CD-006 | 2 | Pass 3, Pass 11 | Prioritized (2 turns) |
| OD-004 | 1 | Pass 4 | Single turn only |
| DD-003 | 1 | Pass 5 | Single turn only |
| OD-001 | 1 | Pass 6 | Single turn only |
| mechanism-catalog | 1 | Pass 7 | Single turn only |
| grammar | 1 | Pass 8 | Single turn only |
| DD-004 | 0 | Never | Completely absent from rotation |
| CD-001 | 0 | Never | Completely absent from rotation |
| CD-005 | 0 | Never | Completely absent from rotation |

**Critical findings:**

1. **Three files listed in the Wave 3 input (line 421) never appear in the rotation schedule (line 425).** DD-004, CD-001, and CD-005 are listed as input files but have zero primacy turns. The agent would need to independently decide to read them during "depth passes" -- but there is no instruction to do so.

2. **Five files get exactly 1 primacy turn.** OD-004, DD-003, OD-001, mechanism-catalog, and grammar each get a single pass. This means these files are read once, findings applied once, and never revisited. The deepening question ("has my relationship with this case study evolved?") cannot be asked of a file read only once.

3. **The rotation creates a clear A-tier (OD-006, DD-006, CD-006) and B-tier (everything else).** The A-tier files get 2 passes each; the B-tier files get 0-1 passes each. This may be intentional (the -006 files are identified as the richest explorations elsewhere in the project), but the skill does not state this rationale. An agent does not know why OD-006 gets 2 turns while DD-003 gets 1.

4. **11 files across 10-15 passes = 0.9-1.4 primacy turns per file on average.** Even less per-file depth than Wave 2.

5. **The gap between OD-006's two primacy visits is 8 passes (pass 1 to pass 9).** This far exceeds the 4-pass neglect threshold from the diagnostic override (line 393). But the override only triggers for files going 4+ passes without primacy -- it does not apply to files that have already had their scheduled turns and are now between them. The override protocol says "Has any file gone 4+ passes without primacy? If YES: that file gets primacy next, regardless." Between Pass 1 and Pass 9, OD-006 would technically trigger this at Pass 5 (4 passes since last primacy). But at Pass 5, the default schedule says DD-003 gets primacy. The interaction between the override and the default schedule is ambiguous.

**Gap: Section lines 419-440. Three input files (DD-004, CD-001, CD-005) are completely absent from the rotation. Five files get only 1 primacy turn. The A-tier/B-tier split is not rationalized. The 8-pass gap between OD-006's visits exceeds the override threshold but the interaction is ambiguous.**

**Recommendation:**

Add a rationale for the tiering:
```
**Case study tiering:** OD-006, DD-006, and CD-006 are the deepest
explorations in their respective dimensions and get 2 primacy turns each.
All other case studies get 1 primacy turn. DD-004, CD-001, and CD-005
are read during supporting reads alongside higher-priority primacy files
but do not receive their own primacy turns.

If the agent's diagnostic override identifies a gap that a B-tier case
study addresses, that case study takes the next primacy slot.
```

Additionally, add explicit supporting-read assignments for the 3 omitted files:
```
Pass 4 (OD-004 primacy): supporting read CD-005 (transition patterns)
Pass 5 (DD-003 primacy): supporting read DD-004 (layer patterns)
Pass 6 (OD-001 primacy): supporting read CD-001 (reasoning patterns)
```

---

### Wave 4: Synthesis + Provenance (Lines 443-462)

**Files:** RESEARCH-SYNTHESIS.md, semantic-rules.md, selected provenance documents
**Wave pass count:** 8-12 passes
**Rotation schedule:** No explicit rotation provided. Line 445 lists the input files. Lines 458-461 provide phase-level descriptions but no per-pass file assignments.

**Finding:** This wave has NO rotation schedule at all. The agent knows which files are available but not which order to read them in. For a 3-file wave with 8-12 passes, the rotation would be straightforward (each file gets 2-4 primacy turns), but the absence of any explicit schedule means the agent must self-organize.

**Gap: Section lines 443-462. No rotation schedule for Wave 4. The "selected provenance documents" are not enumerated -- the agent does not know which provenance files to select or how many.**

**Recommendation:**
```
**Rotation:** RESEARCH-SYNTHESIS -> semantic-rules -> provenance (agent-selected) ->
SYNTHESIS(2nd) -> semantic-rules(2nd) -> conflict-resolution passes ->
integration passes -> agent's diagnostic.

**Provenance selection:** Choose 1-2 provenance documents that address
the specific conflicts identified between Wave 2 and Wave 3 applications.
```

---

### Wave 5: Combination Mastery (Lines 465-486)

**Files:** CD-006 (re-read), grammar.md, the HTML file
**Wave pass count:** 8-12 passes
**Rotation schedule:** No explicit rotation. Line 467 lists the input. Lines 482-485 provide phase descriptions.

**Finding:** Similar to Wave 4 -- no rotation schedule. CD-006 is specified as the primary reference, but the split between CD-006-focused passes and grammar.md-focused passes is not defined.

**Gap: Section lines 465-486. No rotation schedule. The agent does not know how to distribute 8-12 passes across CD-006 and grammar.md.**

**Recommendation:**
```
**Rotation:** CD-006 (full re-read) -> grammar (audit against page) ->
HTML (architecture audit) -> CD-006(2nd, compound focus) ->
grammar(2nd, responsive rules) -> HTML(2nd, inline elimination) ->
CD-006(3rd, combination mastery) -> agent's diagnostic -> depth passes.
```

---

## 2. PRIMACY ROTATION MECHANICS

### 2A. Explicitness of rotation schedules

**Assessment per wave:**

| Wave | Rotation explicit? | Agent knows exactly which file at each pass? |
|------|-------------------|----------------------------------------------|
| 0 | N/A (no research) | Yes -- content only |
| 1 | Yes (line 362) | Yes for passes 1-7. Passes 8-14 are "agent's choice." |
| 2 | Yes (line 386) | Yes for passes 1-11. Passes 12-18 are "agent's diagnostic" and "depth passes." |
| 3 | Yes (line 425) | Yes for passes 1-11. Passes 12-15 are "depth passes." |
| 4 | No | Agent must self-organize all 8-12 passes. |
| 5 | No | Agent must self-organize all 8-12 passes. |

**The pattern:** The skill provides explicit rotations for the high-file-count waves (1, 2, 3) and no rotation for the lower-file-count waves (4, 5). This is defensible -- fewer files need less rotation structure -- but it leaves 16-24 passes (Waves 4+5 combined) with no operational guidance for file sequencing.

### 2B. Dead spots in the rotation (primacy gaps exceeding 5 passes)

Analyzing the full rotation sequence across Waves 1-5 for each file that appears in multiple waves:

**Files that cross wave boundaries:**
- RESEARCH-SYNTHESIS.md: Primacy at Wave 2 Pass 11, then Wave 4 (unspecified pass). Gap = 10-30+ passes depending on Wave 3 length.
- CD-006: Primacy at Wave 3 Passes 3 and 11, then Wave 5 (unspecified). Gap = 8+ passes.
- grammar.md: Primacy at Wave 3 Pass 8, then Wave 5 (unspecified). Gap = 10+ passes.
- mechanism-catalog.md: Primacy at Wave 3 Pass 7 only. Never revisited.

**Within-wave dead spots:**
- Wave 2: R1 has a 6-pass gap (Pass 1 to Pass 7). R4 has a 6-pass gap (Pass 2 to Pass 8). R5 has a 5-pass gap (Pass 4 to Pass 9). All exceed the "4+ passes without primacy" override threshold.
- Wave 3: OD-006 has an 8-pass gap (Pass 1 to Pass 9). DD-006 has an 8-pass gap (Pass 2 to Pass 10). CD-006 has an 8-pass gap (Pass 3 to Pass 11). All massively exceed the override threshold.

**Gap: The rotation schedules create within-wave dead spots of 5-8 passes for most files. The diagnostic override (line 393) specifies a 4-pass neglect threshold, but the DEFAULT schedule itself creates 5-8 pass gaps. This means the override would trigger constantly if followed strictly, potentially overriding the default schedule at every pass in the second half of each wave. The interaction between the override and the default schedule is unresolved.**

**Recommendation:** Add an explicit interaction rule:

```
**Override vs. default interaction:** The diagnostic override checks
AFTER the default schedule assigns a pass. If the override would
reassign the same file the default already selected, no action needed.
If the override triggers for a file that the default does NOT have
scheduled next, the override takes precedence. After an override pass,
the agent RESUMES the default schedule at the next unplayed position
(skip the overridden position, do not replay it).

Example: Default schedule says Pass 6 = R3, Pass 7 = R1.
At Pass 5, the agent's diagnostic says R2 is weakest and hasn't
had primacy for 4 passes. Override: Pass 6 = R2 (instead of R3).
Pass 7 = R1 (resume default). R3's scheduled Pass 6 is SKIPPED,
not deferred. R3 still has its Pass 6(2nd) at default position 6.
```

Wait -- this creates a new problem: R3 loses a scheduled primacy turn due to the override. The resolution needs to address this:

```
**Override accounting:** When an override displaces a file from its
scheduled primacy, that file's next scheduled turn is preserved.
The override INSERTS an additional pass, it does not REPLACE a
scheduled one. This means the wave may extend by 1 pass per override.
```

---

## 3. WITHIN-PASS DEPTH EVOLUTION: PER-FILE VS. GLOBAL

### The core ambiguity

The 4-phase deepening (STRUCTURAL -> INTEGRATION -> DEPTH -> MASTERY) is described at the WAVE level (lines 397-413 for Wave 2). The phases are tied to pass NUMBERS within the wave:

- Passes 1-3: STRUCTURAL
- Passes 4-6: INTEGRATION
- Passes 7-9: DEPTH
- Passes 10+: MASTERY

A file's primacy pass determines which phase it encounters. In Wave 2:

| File | Pass | Phase encountered |
|------|------|-------------------|
| R1 | 1 | STRUCTURAL |
| R4 | 2 | STRUCTURAL |
| R3 | 3 | STRUCTURAL |
| R5 | 4 | INTEGRATION |
| R2 | 5 | INTEGRATION |
| R3 (2nd) | 6 | INTEGRATION |
| R1 (2nd) | 7 | DEPTH |
| R4 (2nd) | 8 | DEPTH |
| R5 (2nd) | 9 | DEPTH |
| R2 (2nd) | 10 | MASTERY |

**R1's experience:** STRUCTURAL (Pass 1), then DEPTH (Pass 7). R1 never gets an INTEGRATION phase. It jumps from "big moves, 100-200 lines" to "typography as argument, 10-40 lines." The relational thinking that characterizes INTEGRATION is skipped for R1.

**R2's experience:** INTEGRATION (Pass 5), then MASTERY (Pass 10). R2 never gets a STRUCTURAL phase. Its first engagement is already "making things talk" rather than "bold additions." The foundational absorption of R2's creative layout patterns happens at the INTEGRATION depth rather than the STRUCTURAL depth where big spatial additions are made.

**R3's experience:** STRUCTURAL (Pass 3), then INTEGRATION (Pass 6). R3 never reaches DEPTH or MASTERY. Its density findings are absorbed at the structural and relational level but never at the "typography as argument" depth that passes 7-9 prescribe.

**This is the most significant gap in the rotation design.** The 4-phase deepening was conceived as a progression that each file would undergo. But because phases are wave-global (tied to pass numbers) rather than file-local (tied to number of primacy visits for that file), no single file gets the full 4-phase progression.

**Gap: Section lines 397-413. The 4-phase deepening (STRUCTURAL -> INTEGRATION -> DEPTH -> MASTERY) applies globally to the wave, not locally to each file. No file experiences all 4 phases. Files that arrive late in the rotation (R2, R5) miss the STRUCTURAL phase entirely. Files that complete their rotation early (R3) miss DEPTH and MASTERY.**

**Recommendation:** Add a per-file phase tracking instruction:

```
**Per-file phase tracking:** The 4-phase labels (STRUCTURAL through
MASTERY) describe the wave's global progression. But each file also
has its OWN depth progression based on how many times you have engaged
with it:

- 1st primacy visit: Treat as STRUCTURAL for that file regardless
  of wave phase. Read broadly, make bold additions.
- 2nd primacy visit: Treat as INTEGRATION for that file. Ask how
  its findings RELATE to what you built since last reading it.
- 3rd primacy visit (if wave extends): Treat as DEPTH. Fine-grain
  application.

If a file's personal phase conflicts with the wave's global phase
(e.g., R2's first primacy visit happens during the wave's INTEGRATION
phase), the file's personal phase takes precedence for HOW you engage
with it: make bold additions from R2 even though the wave is in
integration mode. The wave phase describes the page's maturity; the
file phase describes your depth of engagement with THAT file.
```

---

## 4. RESEARCH FILE ENGAGEMENT MINIMUM

### The "3 per research file" rule (line 325)

The minimum engagement table states:

| Requirement | Minimum |
|-------------|---------|
| Applied findings | 3 per research file in the wave |

**Questions:**

1. **Is "3 per research file" enforced per wave or per primacy visit?**

The table says "per research file in the wave." This means across the entire wave, the agent must apply at least 3 findings from each file. With 2 primacy visits per file, this is ~1.5 findings per visit. This is trivially achievable and far too low.

For R4 (192 findings), 3 applied = 1.6% coverage.
For R3 (51 findings), 3 applied = 5.9% coverage.
For R1 (28 findings), 3 applied = 10.7% coverage.

2. **Is the minimum cumulative across waves?**

The skill does not specify. If R1 gets 3 findings applied in Wave 2, and then additional R1 findings are applied during Wave 4's synthesis work, do those count? The minimum appears to be wave-scoped, not cumulative.

3. **What happens when a file has 192 findings and the minimum is 3?**

The minimum is functionally meaningless for large files. It protects against complete neglect (0 findings applied) but not against shallow engagement. A file could have 3 findings applied and 189 ignored, and the wave would pass its exhaustion check.

**Gap: Section line 325. The "3 per research file" minimum is too low for files with 50-192 findings. It is not specified per-visit vs per-wave. It does not scale with file size.**

**Recommendation:** Replace the flat minimum with a scaled minimum:

```
**Applied findings minimum per research file per wave:**
- Files with <30 findings: minimum 3 applied
- Files with 30-60 findings: minimum 8 applied
- Files with 60-100 findings: minimum 15 applied
- Files with 100+ findings: minimum 25 applied

These minimums apply PER WAVE. At each primacy visit, the agent
should be applying roughly half the wave minimum for that file.
If a file has had 2 primacy visits and is still below its minimum,
the wave is not exhausted.
```

---

## 5. DIAGNOSTIC OVERRIDE PROTOCOL

### Current specification (lines 388-393):

```
1. What dimension of the page feels weakest right now?
2. Which research file addresses that dimension?
3. Has that file been at primacy in the last 2 passes?
   If NO: put it at primacy next.
   If YES: follow the default schedule.
4. Has any file gone 4+ passes without primacy?
   If YES: that file gets primacy next, regardless.
```

### What is missing:

**A. Re-entry to the default schedule after an override.**

The protocol tells the agent when to override but not how to resume. After overriding Pass 6 to use R2 instead of R3, does the agent:
- Resume at Pass 7 with the file that WAS scheduled for Pass 7? (Skip approach)
- Shift the entire schedule forward by 1? (Insert approach)
- Re-run the diagnostic and potentially override again? (Cascade approach)

**Gap: Lines 388-393. No re-entry instruction after an override.**

**Recommendation:**
```
**After an override:** Resume the default schedule at the next
sequential position. The overridden file's slot is NOT replayed.
Example: If you override Pass 6 (scheduled R3) with R2, then
Pass 7 uses the file that was scheduled for Pass 7 (R1), not R3.
R3's missed slot does not get rescheduled automatically -- but the
neglect counter continues, and if R3 goes 4+ passes without primacy,
it will trigger another override.
```

**B. What happens when two files both trigger the neglect override simultaneously?**

At Pass 9 of Wave 3, both DD-003 (last primacy: Pass 5, 4-pass gap) and OD-001 (last primacy: Pass 6, 3-pass gap) may be approaching or at the neglect threshold. The protocol says "that file gets primacy next, regardless" but does not handle ties.

**Recommendation:**
```
**Tie-breaking for neglect overrides:** If multiple files have gone
4+ passes without primacy simultaneously, prioritize the file that
(a) has had the fewest total primacy turns, then (b) addresses the
weakest dimension of the page per the diagnostic question.
```

**C. The diagnostic question "What dimension feels weakest?" is subject to the same attention bias the override is meant to correct.**

The agent's perception of "what feels weakest" is itself shaped by which files it has been reading. If R3 has been underweighted, the agent's density perception is dulled, so it may not NOTICE that density is the weakest dimension. The override relies on the agent diagnosing its own blindspot -- but blindspots are by definition invisible to the entity that has them.

**Gap: Lines 388-389. The diagnostic relies on the agent's perception, which is biased by the very attention allocation the override corrects.**

**Recommendation:**
```
**Diagnostic debiasing:** In addition to the perceptual diagnostic
("what feels weakest?"), perform a MECHANICAL check: count the number
of applied findings per file. If any file has fewer than [minimum]
applied findings AND has not been at primacy for 3+ passes, that file
gets primacy next. The mechanical check catches what the perceptual
diagnostic misses.
```

---

## 6. TOTAL PASS COUNT ACROSS ALL WAVES

### Cumulative per-file engagement across the full build

Tracing each major research file's primacy appearances across all waves:

**R1 (Documentation Patterns, 28 findings):**
- Wave 2: Pass 1 (STRUCTURAL), Pass 7 (DEPTH) = 2 primacy turns
- No other waves reference R1.
- **Total primacy turns: 2. Total findings engaged: ~10-15 of 28.**

**R2 (Creative Layouts, 27 findings):**
- Wave 2: Pass 5 (INTEGRATION), Pass 10 (MASTERY) = 2 primacy turns
- No other waves reference R2.
- **Total primacy turns: 2. Total findings engaged: ~8-12 of 27.**

**R3 (Density Dimensions, 51 findings):**
- Wave 2: Pass 3 (STRUCTURAL), Pass 6 (INTEGRATION) = 2 primacy turns
- No other waves reference R3.
- **Total primacy turns: 2. Total findings engaged: ~16-24 of 51.**

**R4 (Axis Innovations, 192 findings):**
- Wave 2: Pass 2 (STRUCTURAL), Pass 8 (DEPTH) = 2 primacy turns
- No other waves reference R4.
- **Total primacy turns: 2. Total findings engaged: ~20-35 of 192.**

**R5 (Combination Theory, 39 findings):**
- Wave 2: Pass 4 (INTEGRATION), Pass 9 (DEPTH) = 2 primacy turns
- No other waves reference R5.
- **Total primacy turns: 2. Total findings engaged: ~10-16 of 39.**

**RESEARCH-SYNTHESIS (383 lines):**
- Wave 2: Pass 11 (MASTERY) = 1 primacy turn
- Wave 4: Unspecified passes = 1-3 primacy turns
- **Total primacy turns: 2-4. Coverage depends on Wave 4 structure.**

**OD-006 (case study):**
- Wave 3: Pass 1, Pass 9 = 2 primacy turns
- **Total primacy turns: 2.**

**DD-006 (case study):**
- Wave 3: Pass 2, Pass 10 = 2 primacy turns
- **Total primacy turns: 2.**

**CD-006 (case study):**
- Wave 3: Pass 3, Pass 11 = 2 primacy turns
- Wave 5: Unspecified = 1-3 primacy turns
- **Total primacy turns: 3-5. Best coverage of any research file.**

**DD-004, CD-001, CD-005 (case studies):**
- Wave 3: 0 primacy turns (absent from rotation)
- **Total primacy turns: 0.**

**mechanism-catalog.md:**
- Wave 3: Pass 7 = 1 primacy turn
- **Total primacy turns: 1.**

### Summary: Does each file get 10+ meaningful engagements?

**No.** The maximum any R-file gets across the entire build is 2 primacy turns (in Wave 2 only). Even the best-served file (CD-006) gets 3-5 primacy turns. Three files get zero primacy turns.

The agent does read files outside their primacy turns -- as supporting reads and during unstructured passes. But the skill provides no guidance for what "supporting read" means operationally (how much of the file to read, what to focus on, whether to apply findings).

**If we define "meaningful engagement" as a pass where the file is at primacy and the agent applies findings from it to the page, then no file exceeds 5 meaningful engagements and most get exactly 2.**

**If we define "meaningful engagement" more loosely as any pass where the file is read in any position, the count is higher but unspecified -- the skill does not track or ensure non-primacy readings.**

---

## 7. EXHAUSTION CRITERIA VS. PER-FILE DEPTH

### The exhaustion check (lines 308-316):

```
1. Delta profile stabilized at invisible grain (5-15 line changes)
2. Research re-read produces no new ideas
3. "Infinite time" answer is invisible
```

**The risk:** Condition 2 ("Research re-read produces no new ideas") is checked at the WAVE level, not the per-file level. An agent could re-read R1 and R2 (finding nothing new) while having barely engaged R4 (192 findings, 35 engaged). If the agent's re-read survey is shallow -- skimming each file rather than deeply re-reading -- it could declare "no new ideas" while 80% of R4's findings remain unexamined.

**Gap: Lines 308-316. The exhaustion check does not verify per-file depth. An agent can declare wave exhaustion while some files have been barely engaged.**

**Recommendation:** Add a per-file exhaustion gate:

```
**Per-file exhaustion check:** Before declaring wave exhaustion,
verify that each research file in the wave meets its per-file minimum
(see scaled minimums above). If any file is below minimum, the wave
is not exhausted. Give that file 2 additional primacy passes.

Additionally, the "research re-read produces no new ideas" check
must be performed on EACH file individually, not as a survey.
Re-read the 3 files with the lowest applied-findings count.
If ANY of them produces a new idea, the wave is not exhausted.
```

---

## 8. FILES AT RISK OF BEING SHORTCHANGED

Ranked by severity:

| Rank | File | Risk | Reason |
|------|------|------|--------|
| 1 | R4 (Axis Innovations) | CRITICAL | 192 findings, 2 primacy turns, ~18% engagement. Largest file, least coverage ratio. |
| 2 | DD-004, CD-001, CD-005 | CRITICAL | 0 primacy turns. Listed as Wave 3 input but absent from rotation. |
| 3 | R3 (Density Dimensions) | HIGH | 51 findings, 2 primacy turns. Only reaches INTEGRATION phase; never gets DEPTH treatment despite being "the richest stream." |
| 4 | mechanism-catalog.md | HIGH | 1 primacy turn in Wave 3. Primary reference for spatial mechanisms, only engaged once. |
| 5 | vocabulary.md | MEDIUM | 1 explicit primacy turn in Wave 1. Small file, so 1 turn may suffice. |
| 6 | R2 (Creative Layouts) | MEDIUM | First primacy at INTEGRATION phase. Never gets STRUCTURAL treatment. Creative layout patterns absorbed relationally rather than as bold additions. |
| 7 | R5 (Combination Theory) | MEDIUM | First primacy at INTEGRATION. Similar issue to R2. |

---

## 9. SPECIFIC RECOMMENDATIONS (With Example Text)

### Recommendation 1: Add per-file pass tracking

**Section:** After line 331 (Minimum Engagement Per Wave table)
**What is missing:** A mechanism for the agent to track per-file engagement depth.

```
### Per-File Engagement Tracking

Maintain a running count of primacy visits and applied findings per
research file. At each wave boundary, review:

| File | Primacy visits | Applied findings | % coverage | Phase reached |
|------|---------------|-----------------|-----------|---------------|

If any file has <2 primacy visits by wave end, it needs additional
passes. If any file's coverage is below the scaled minimum, the wave
is not exhausted.
```

### Recommendation 2: Scale the per-file finding minimum

**Section:** Line 325 (the "3 per research file" row in the minimum engagement table)
**What is missing:** The minimum does not scale with file size.

Replace "3 per research file in the wave" with:
```
Applied findings: scaled per file size --
  <30 findings: 3 minimum
  30-60 findings: 8 minimum
  60-100 findings: 15 minimum
  100+ findings: 25 minimum
```

### Recommendation 3: Add per-file phase tracking

**Section:** After line 413 (end of Wave 2 pass-level deepening)
**What is missing:** Clarification that files have their own phase progression independent of the wave's global phase.

Add:
```
**Per-file vs. wave-global phase:** The phase labels above describe
the wave's progression. Each file also has its own depth trajectory:
its first primacy visit is always a STRUCTURAL engagement (broad
absorption, bold moves) regardless of which wave phase it falls in.
Its second visit is INTEGRATION. The file's personal depth takes
precedence over the wave's global phase for determining HOW you
engage with the file.
```

### Recommendation 4: Fix the Wave 3 rotation gaps

**Section:** Lines 421-425 (Wave 3 input files and rotation)
**What is missing:** DD-004, CD-001, CD-005 absent from rotation.

Either:
(a) Remove them from the input file list (line 421) if they are not meant to be read, or
(b) Add them to the rotation:
```
**Rotation:** OD-006 -> DD-006 -> CD-006 -> OD-004 -> DD-003 ->
CD-005 -> OD-001 -> DD-004 -> CD-001 -> mechanism-catalog -> grammar ->
OD-006(2nd) -> DD-006(2nd) -> CD-006(2nd) -> depth passes.
```
This extends the explicit rotation from 11 to 14 passes, which fits within the "10-15 passes" range.

### Recommendation 5: Add override re-entry instructions

**Section:** After line 393 (diagnostic override protocol)
**What is missing:** How the agent resumes the default schedule after an override.

Add:
```
**After overriding:** Resume the default schedule at the next
sequential position. The overridden file's slot is consumed (not
replayed). If overrides cause a file to miss both its scheduled
slots, the per-file neglect counter will trigger a compensating
override within 4 passes.
```

### Recommendation 6: Add rotation schedules for Waves 4 and 5

**Section:** Lines 443-486 (Waves 4 and 5)
**What is missing:** Any rotation schedule at all.

See specific rotation text in Section 1 analysis above for each wave.

### Recommendation 7: Strengthen the exhaustion gate with per-file verification

**Section:** Lines 308-316 (Genuine Exhaustion)
**What is missing:** Per-file verification before wave exhaustion can be declared.

Add a fourth exhaustion condition:
```
4. **Per-file engagement met.** Every research file in the wave
   meets its scaled minimum for applied findings. The 3 files
   with the lowest engagement counts have been individually
   re-read (not surveyed) and produced no new applicable ideas.
```

---

## 10. OVERALL VERDICT

The SKILL.md is philosophically committed to deep per-file engagement. Its metacognitive framework (5 layers, staleness detectors, false convergence signals) is excellent. But the OPERATIONAL specification -- the rotation schedules and minimums that actually determine how many times each file gets engaged -- is calibrated for wave-level depth rather than file-level depth.

**The math is clear:** With 6 files in Wave 2 and 12 explicit passes, each file gets 2 primacy turns. With 11 files in Wave 3 and 11 explicit passes, 3 files get zero turns and 5 get one. The "3 per research file" minimum is too low to compensate. The 4-phase deepening applies globally, so no file experiences the full progression.

**The fix is structural, not cosmetic.** The skill needs either:
1. **More passes per wave** (20+ for Wave 2, 15+ explicit for Wave 3) to give each file 3-4 primacy turns, or
2. **Sub-wave splitting** (Wave 2a for R1+R3+R4, Wave 2b for R2+R5+SYNTHESIS) so each sub-wave's 10+ passes serve 3 files instead of 6, or
3. **Per-file tracking with enforcement** (scaled minimums, per-file exhaustion gates, per-file phase tracking) so the existing pass counts are spent more effectively.

Option 3 is the most compatible with the skill's existing structure and philosophy. Options 1 and 2 require more fundamental restructuring.

**Estimated additions to implement all recommendations: ~80-120 lines.** This would bring the skill from 817 to ~900-940 lines, well within the document's intent of being comprehensive enough to govern a $150-300, 6-10 hour build.
