# Primacy Rotation Audit — /falls-in-love SKILL.md

**Auditor:** Claude Opus 4.6
**Date:** 2026-03-03
**File:** `~/.claude/skills/falls-in-love/SKILL.md` (1058 lines)
**Scope:** Exhaustive audit of primacy rotation coverage across all 9 waves (0-8)

---

## 1. The Primacy Rotation Section (Lines 352-383)

### What It Gets Right

The section at lines 352-364 is strong on the **WHY**:

- U-curve mechanism is explicitly named and explained (line 353-354): "Transformer attention follows a U-shaped curve: tokens at the **beginning** (primacy) and **end** (recency) of the context window receive disproportionate weight."
- The consequence of NOT rotating is stated (line 354): "the agent will build a page that deeply reflects the first and last files read while the middle files — potentially the richest — get structurally underweighted."
- Primacy/supporting/recency positions are defined (lines 359-362):
  - Position 1 (Primacy): "File read first in the pass. Gets the most attention."
  - Position 2-3 (Supporting): "Files read as targeted cross-references. Gets partial attention."
  - Final position (Recency): "File read last. Gets moderate attention but recency boost."
  - Unread files: "Gets ZERO attention."
- The 4-pass neglect rule is stated (line 362): "The 4-pass neglect rule prevents any file from going unread too long."
- The distinction between reading order (category sequencing) and primacy rotation (within-category sequencing) is clarified (lines 364).

### What It Gets Wrong or Omits

**GAP 1: No definition of "attention trough."** The section defines primacy, supporting, and recency positions, and mentions "everything in the middle compresses" (line 353), but never gives this compression a name or defines its symptoms at the general level. Wave 3 (line 621) defines attention trough symptoms — but only for that wave. The general section should define the concept once, then waves should specialize it.

**GAP 2: No mention of per-file phase tracking at the general level.** The per-file phase tracking concept (1st visit = STRUCTURAL, 2nd = INTEGRATION, 3rd = DEPTH) is introduced at Wave 2 (lines 541-546) but not in the general Primacy Rotation section. An agent reading the general section gets no preview of this mechanism.

**GAP 3: No mention of dimension permeation at the general level.** The idea that a file's thinking permeates ALL passes (not just primacy) is introduced at Wave 2 (line 548) but not previewed in the general section. The general section only defines "Unread files: Gets ZERO attention" — which is misleading. A file's DIMENSION can be active even when the file is not at primacy.

---

## 2. Rotation Coverage Matrix

| Wave | Files | Explicit Rotation Schedule? | Diagnostic Override? | Re-entry After Override? | Per-File Phase Tracking? | 4-Pass Neglect Threshold? | Each File Gets 2+ Primacy Turns? |
|------|-------|-----------------------------|---------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| **0** | 1 (content only) | N/A (single file) | N/A | N/A | N/A | N/A | N/A |
| **1** | 4 (identity.md, vocabulary.md, tokens.css, components.css) | **YES** (line 465) | **NO** | **NO** | **NO** | **NO** | **YES** (2 turns each) |
| **2** | 6 (R1-R5, SYNTHESIS) | **YES** (line 499) | **YES** (lines 503-508) | **YES** (line 509) | **YES** (lines 541-546) | **YES** (lines 507, 548) | **YES** (2 explicit, 3-4 with overrides) |
| **3** | 12+ (9 case studies + mechanism-catalog + grammar + README + ANTI-PRESCRIPTION) | **PARTIAL** (line 617) | **YES** (line 619) | **NO** | **YES** (line 623) | **YES** (line 619, implicit) | **NO** — arithmetic fails |
| **4** | 3 (SYNTHESIS, semantic-rules, provenance) | **YES** (line 658) | **NO** | **NO** | **NO** | **NO** | **YES** (2 turns each) |
| **5** | 3 (CD-006, grammar.md, HTML) | **YES** (line 686) | **NO** | **NO** | **NO** | **NO** | **YES** (2-3 turns each) |
| **6** | 0 (no new research) | N/A (internal) | N/A | N/A | N/A | N/A | N/A |
| **7** | 0 (self-audit) | N/A (audit mode) | N/A | N/A | N/A | N/A | N/A |
| **8** | 0 (surgery) | N/A (surgery mode) | N/A | N/A | N/A | N/A | N/A |

---

## 3. Per-Wave Detailed Findings

### Wave 0 (Lines 435-456)

**No rotation needed.** Wave 0 reads only the content source file. There is one file; no rotation is possible or necessary. The wave correctly specifies reading the content through 4 lenses across 8-12 passes.

**Verdict: CLEAN. No action needed.**

---

### Wave 1 (Lines 459-482)

**Rotation schedule (line 465):**
```
identity.md -> tokens.css -> components.css -> vocabulary.md -> identity.md (re-check) ->
tokens.css (audit) -> components.css (integration) -> vocabulary.md (2nd, creative partnership audit) -> agent's choice
```

**Arithmetic check:** 4 files across 8 explicit slots before "agent's choice."
- identity.md: positions 1 and 5 = **2 primacy turns**
- tokens.css: positions 2 and 6 = **2 primacy turns**
- components.css: positions 3 and 7 = **2 primacy turns**
- vocabulary.md: positions 4 and 8 = **2 primacy turns**

All 4 files get exactly 2 primacy turns. The arithmetic is honest.

**GAPS:**

**GAP W1-1: No diagnostic override.** The schedule is purely static. If the agent discovers at pass 5 that components.css is the file driving the most spatial invention, there is no mechanism to give it a third primacy turn without reaching "agent's choice" at position 9. Wave 2 has a 4-step diagnostic override protocol. Wave 1 does not.

**GAP W1-2: No re-entry instruction.** Since there is no override, there is no re-entry protocol.

**GAP W1-3: No per-file phase tracking.** Wave 1 does not state that the first visit to identity.md should be treated as STRUCTURAL and the second as INTEGRATION. The concept only appears in Wave 2.

**GAP W1-4: No neglect threshold.** With 4 files across 8 slots, no file can go more than 3 passes without primacy (the worst case: positions 1 and 5 = gap of 3). So the 4-pass neglect threshold is structurally impossible to violate. But the threshold is not stated, which means the agent does not know it exists as a principle at this wave.

**GAP W1-5: vocabulary.md primacy problem.** vocabulary.md is at position 4 (4th file read in the first cycle) and position 8 (4th file read in the second cycle). It is ALWAYS in the supporting/late-middle position within its cycle pair. Since the schedule reads 4 files per half-wave, vocabulary.md is never truly at the BEGINNING of a reading sequence — it is always read after 3 other files have already consumed primacy attention. The U-curve means position 4 of 4 is in the recency slot, not the primacy slot. vocabulary.md gets recency boost but never true primacy. This is a structural issue: the rotation lists vocabulary.md at positions 4 and 8, but if the agent reads all 4 files per pass in the listed order, vocabulary.md is always the 4th file encountered, which means it sits at the TROUGH or RECENCY of the within-pass reading sequence.

**Remediation:** The schedule should be restructured so that vocabulary.md starts a half-cycle at least once:
```
identity.md -> tokens.css -> components.css -> vocabulary.md ->
vocabulary.md (re-check, now at true primacy) -> identity.md (audit) ->
tokens.css (integration) -> components.css (2nd, creative partnership audit) ->
agent's choice
```

Or more simply, the instruction should clarify: "On each pass, read ONLY the primacy file deeply. Read 1-2 others as cross-references. The primacy file is the one you read FIRST and MOST DEEPLY." If the agent reads all 4 files every pass in the listed order, the rotation schedule is not actually rotating primacy — it is rotating which file appears at each position in a fixed sequence.

---

### Wave 2 (Lines 485-553)

**Rotation schedule (line 499):**
```
R1 -> R4 -> R3 -> R5 -> R2 -> R3(2nd) -> R1(2nd) -> R4(2nd) -> R5(2nd) -> R2(2nd) -> SYNTHESIS -> agent's diagnostic -> depth passes
```

**Arithmetic check:** 6 files across 12 explicit slots.
- R1: positions 1 and 7 = **2 primacy turns** (gap: 5 passes)
- R2: positions 5 and 10 = **2 primacy turns** (gap: 4 passes)
- R3: positions 3 and 6 = **2 primacy turns** (gap: 2 passes)
- R4: positions 2 and 8 = **2 primacy turns** (gap: 5 passes)
- R5: positions 4 and 9 = **2 primacy turns** (gap: 4 passes)
- SYNTHESIS: position 11 = **1 primacy turn**

Every R-file gets exactly 2 primacy turns. SYNTHESIS gets only 1. The arithmetic is honest and well-distributed.

**Diagnostic override (lines 503-508):** Present and well-specified. 4-step protocol:
1. What dimension is weakest?
2. Which research file addresses it?
3. Has that file been at primacy in the last 2 passes? (If NO: override. If YES: follow default.)
4. Has any file gone 4+ passes without primacy? (If YES: priority override.)

**Re-entry after override (line 509):** Present and explicit: "Resume the default schedule at the next sequential position. The overridden file's slot is consumed, not replayed." Includes a concrete example.

**Per-file phase tracking (lines 541-546):** Present. 1st primacy = STRUCTURAL, 2nd = INTEGRATION, 3rd+ = DEPTH/MASTERY. File's personal phase takes precedence over wave's global phase.

**Neglect threshold (lines 507-508, 548):** Present in two places — in the diagnostic override ("4+ passes without primacy gets priority") and in the dimension permeation paragraph ("If any file goes 4+ passes without its dimension being actively applied, that dimension is being neglected").

**Dimension permeation (line 548):** Present and well-explained. "When R3 is at primacy for passes 3 and 6, density thinking doesn't stop at pass 7 — density is always a dimension being evaluated and applied."

**GAPS:**

**GAP W2-1: SYNTHESIS gets only 1 primacy turn.** Every other file gets 2. SYNTHESIS is positioned at slot 11 with no second turn in the default schedule. The rationale (line 501: "Read AFTER absorbing R1-R5. Provides the meta-framework.") explains why it is late, but does not explain why it gets only 1 turn. The diagnostic override could give it a second turn, but this is not guaranteed.

**GAP W2-2: R1 and R4 have the longest neglect gaps (5 passes each).** R1 goes from position 1 to position 7 (5 passes without primacy). R4 goes from position 2 to position 8 (5 passes without primacy). Both exceed the 4-pass neglect threshold that the override protocol is supposed to catch. The default schedule itself violates its own stated neglect threshold for 2 of 6 files.

**Remediation for W2-2:** The diagnostic override at lines 503-508 should catch this during execution (the agent checks at every pass whether any file has gone 4+ passes). But relying on the override to fix a default schedule that systematically violates the threshold is fragile. The schedule could be tightened:
```
R1 -> R4 -> R3 -> R5 -> R1(2nd) -> R2 -> R3(2nd) -> R4(2nd) -> R5(2nd) -> R2(2nd) -> SYNTHESIS -> SYNTHESIS(2nd, application audit) -> depth passes
```
This limits R1's gap to 3 passes, R4's gap to 4 passes, and gives SYNTHESIS a second turn.

---

### Wave 3 (Lines 556-648)

**This is the most problematic wave for primacy rotation.**

**File count:** At least 12 distinct files:
1. DD-003-islands.md
2. DD-004-layers.md
3. DD-006-fractal.md
4. dd-003-islands-visual.md
5. dd-004-layers-visual.md
6. dd-006-fractal-visual.md
7. OD-001-conversational.md
8. OD-004-confidence.md
9. OD-006-creative.md
10. CD-001-reasoning-inside-code.md
11. CD-005-multi-axis-transition.md
12. CD-006-pilot-migration.md
13. mechanism-catalog.md
14. grammar.md
15. ANTI-PRESCRIPTION-TEMPLATE.md
16. case-studies/README.md

That is **16 files** listed in the Input section (lines 558-559).

**Rotation schedule (line 617):**
```
[Most relevant to content] -> DD-006 -> CD-006 -> OD-006 -> OD-004 -> DD-003 -> OD-001 ->
mechanism-catalog -> grammar -> [Crown jewels 2nd pass] -> [Crown jewels 2nd pass] ->
[Crown jewels 2nd pass] -> depth passes
```

**Arithmetic check — THIS FAILS:**

The default schedule has 12 slots. Of those:
- 9 slots are named first-pass positions for specific files
- 3 slots are "Crown jewels 2nd pass" (agent picks which files to revisit)
- 0 slots for: DD-004, dd-003-visual, dd-004-visual, dd-006-visual, CD-001, CD-005, ANTI-PRESCRIPTION-TEMPLATE, README

**Files that NEVER appear in the rotation schedule:**
- DD-004-layers.md — 0 primacy turns
- dd-003-islands-visual.md — 0 primacy turns
- dd-004-layers-visual.md — 0 primacy turns
- dd-006-fractal-visual.md — 0 primacy turns
- CD-001-reasoning-inside-code.md — 0 primacy turns
- CD-005-multi-axis-transition.md — 0 primacy turns
- ANTI-PRESCRIPTION-TEMPLATE.md — 0 primacy turns
- case-studies/README.md — 0 primacy turns

**8 of 16 files have ZERO guaranteed primacy turns.** The "Crown jewels 2nd pass" mechanism gives the agent discretion to revisit 3 files, but only 3 of the 9 named files get a second turn, and none of the 8 unlisted files are guaranteed any turn at all.

**For the 9 named files:** Only those selected as "Crown jewels" get 2 primacy turns. The remaining 6 named files get exactly 1 primacy turn.

**Honest assessment:** With 16 files and 12 slots (minimum passes), giving each file 2 primacy turns requires 32 slots. Even extending to 18 passes (the stated maximum), giving each file 2 turns requires 32 slots, which is still impossible unless the agent reads multiple files per pass. The wave states 12-18 passes; the arithmetic of 2 primacy turns per file is structurally impossible for this wave.

**Diagnostic override (line 619):** Present but thin. "Diagnostic override (same as Wave 2): After each pass: What dimension feels weakest? Which case study addresses it? Has that case study had primacy in last 2 passes? Has any case study gone 4+ passes without a reading?" This references the Wave 2 protocol but does not adapt it for the dramatically larger file count. With 16 files and 12-18 passes, MOST files will go 4+ passes without primacy — the threshold is structurally impossible to satisfy for all files simultaneously.

**Re-entry after override:** **NOT STATED.** Line 619 says "same as Wave 2" but does not re-state the re-entry protocol. An agent that does not re-read Wave 2's re-entry instruction (line 509) would not know to resume at the next sequential position.

**Per-file phase tracking (line 623):** Present but adapted for case studies: "1st read = EXTRACTION (what does it offer?). 2nd read = TRANSLATION (how does it adapt to MY content?). 3rd read = CONTENT-DEEPENING (what does it teach me about my content that I didn't know?)."

**Attention trough symptoms (line 621):** Present and well-specified with 4 concrete symptoms:
1. Visual monotony in specific zones
2. Notebook never mentions a specific case study dimension
3. Zone-specific swap test failure
4. All borrowed components work without adaptation

Plus remediation: "Put the neglected dimension's case study at primacy for 2 consecutive passes and apply it specifically to the weak zone."

**GAPS:**

**GAP W3-1: 8 of 16 files have zero guaranteed primacy turns.** This is the most serious rotation gap in the entire skill. The visual companion files, DD-004, CD-001, CD-005, ANTI-PRESCRIPTION-TEMPLATE, and README are structurally invisible to the rotation.

**GAP W3-2: The rotation operates at DIMENSION level, not FILE level.** Lines 609-616 say "The first 3-4 case studies should be selected based on which dimensions are most relevant." Line 625 says "Each dimension (DD, OD, CD) gets 3-4 primacy turns." The rotation is designed around 3 dimensions, not 16 files. This means within a dimension (say DD), DD-006 gets primacy while DD-003 and DD-004 may never get primacy — they are addressed through their dimension's "permeation."

**GAP W3-3: No re-entry instruction after override.** "Same as Wave 2" is a cross-reference, not a restatement. If the agent's context window does not include Wave 2's text (which is highly likely given the skill is 1058 lines), the re-entry protocol is invisible.

**GAP W3-4: The 4-pass neglect threshold is structurally impossible.** With 16 files and 12 passes, at best 12 files can have 1 primacy turn each, leaving 4 with zero. Any file not named in the first 8 slots will go 4+ passes without primacy. The threshold cannot be satisfied for all files simultaneously.

**GAP W3-5: The "Crown jewels 2nd pass" is undefined.** Lines 617 names 3 slots as "[Crown jewels 2nd pass]" but never defines what "crown jewels" means. Is it the 3 most impactful files? The 3 files most relevant to THIS content? The 3 files from the primary dimension? The agent must guess.

**Remediation for Wave 3:**

The wave should acknowledge the arithmetic honestly and adopt a different rotation strategy:

```markdown
**Rotation strategy for 16 files across 12-18 passes:**

This wave has more files than passes. The 2-primacy-turn-per-file guarantee from smaller
waves is structurally impossible here. Instead:

**Tier 1 (crown jewels — 3 files, selected by content relevance):** 2-3 primacy turns each.
These are the case studies whose spatial approaches most directly serve THIS content.

**Tier 2 (dimension representatives — 3-4 files):** 1-2 primacy turns each. One per
dimension (DD, OD, CD) plus mechanism-catalog.

**Tier 3 (reference files — remaining):** 0-1 primacy turns. Read as cross-references
during Tier 1/2 primacy passes. Visual companions are read alongside their parent case
study (dd-006-visual read WITH DD-006, not independently).

**Minimum coverage:** Every DIMENSION gets 3+ primacy turns across its constituent files.
No DIMENSION goes 4+ passes without primacy. Individual files within a well-covered
dimension may go 4+ passes without individual primacy — this is acceptable because
dimension permeation carries the thinking forward.

**Visual companion protocol:** Visual companions (dd-003-visual, dd-004-visual,
dd-006-visual) are read as SUPPORTING material during their parent case study's primacy
pass, not as independent primacy files. They are position 2-3 material.

**ANTI-PRESCRIPTION-TEMPLATE and README:** Read once at Wave 3 entry as framing material
before the rotation begins. Not rotated — they set cognitive frame, not spatial content.
```

---

### Wave 4 (Lines 652-675)

**Rotation schedule (line 658):**
```
RESEARCH-SYNTHESIS -> semantic-rules -> provenance (agent-selected) ->
SYNTHESIS (2nd, conflict-resolution focus) -> semantic-rules (2nd, rule-application audit) ->
provenance (2nd, if needed) -> integration passes -> agent's diagnostic
```

**Arithmetic check:** 3 files across 8 slots.
- RESEARCH-SYNTHESIS: positions 1 and 4 = **2 primacy turns** (gap: 2 passes)
- semantic-rules: positions 2 and 5 = **2 primacy turns** (gap: 2 passes)
- provenance: positions 3 and 6 = **2 primacy turns** (gap: 2 passes)

All 3 files get exactly 2 primacy turns. No file goes more than 2 passes without primacy. The arithmetic is clean.

**GAPS:**

**GAP W4-1: No diagnostic override.** The wave has no mechanism for the agent to deviate from the schedule when the page's needs diverge from the default order.

**GAP W4-2: No re-entry instruction.** No override means no re-entry needed, but the pattern is broken — Waves 2 and 3 have overrides, Wave 4 does not.

**GAP W4-3: No per-file phase tracking.** Wave 4 does not state that SYNTHESIS's first turn should be treated as STRUCTURAL and its second as INTEGRATION. The concept exists in Waves 2 and 3 but is not carried forward.

**GAP W4-4: No neglect threshold.** With 3 files across 8 passes, no file can go more than 2 passes without primacy, so the threshold is structurally impossible to violate. But the threshold is not stated, maintaining an inconsistency with Wave 2.

**Remediation:** Minimal. The schedule is tight enough that the gaps are low-impact. Adding a one-line override instruction and a per-file phase note would bring it to parity with Wave 2:

```markdown
**Diagnostic override:** If the page's conflict-resolution needs demand a different order,
the agent may override the next slot. Resume the default schedule at the next sequential
position after the override.

**Per-file phase tracking:** 1st primacy = conflict detection. 2nd primacy = resolution
verification.
```

---

### Wave 5 (Lines 678-703)

**Rotation schedule (line 686):**
```
CD-006 (full re-read) -> grammar.md (audit) -> HTML (full architecture read) ->
CD-006 (2nd, sequential deployment) -> grammar.md (2nd, responsive grammar) ->
HTML (2nd, inline elimination + dead code) -> CD-006 (3rd, combination mastery verification) ->
agent's diagnostic -> depth passes
```

**Arithmetic check:** 3 files across 7 explicit slots.
- CD-006: positions 1, 4, and 7 = **3 primacy turns** (max gap: 2 passes)
- grammar.md: positions 2 and 5 = **2 primacy turns** (gap: 2 passes)
- HTML: positions 3 and 6 = **2 primacy turns** (gap: 2 passes)

All files meet the 2+ primacy threshold. CD-006 gets 3 turns, reflecting its importance in combination mastery. The arithmetic is clean.

**GAPS:**

**GAP W5-1: No diagnostic override.** Same issue as Wave 4.

**GAP W5-2: No re-entry instruction.** Same issue as Wave 4.

**GAP W5-3: No per-file phase tracking.** Same issue as Wave 4.

**GAP W5-4: No neglect threshold.** Same issue as Wave 4. Structurally impossible to violate with 3 files, but not stated.

**Remediation:** Same as Wave 4 — minimal additions for consistency.

---

### Waves 6, 7, 8 (Lines 710-791)

**No primacy rotation needed.** These waves introduce no new research files. Wave 6 works with internalized understanding. Wave 7 is a self-audit. Wave 8 is surgery. The "primacy" concept shifts from file-rotation to evaluation-mode-rotation:

- **Wave 6** rotates evaluation MODES (taste audit -> surgical refinement -> responsive deepening -> architecture audit -> deep re-evaluation). This is a different kind of rotation but not primacy rotation over research files.
- **Wave 7** rotates evaluation STANCES (experiential -> adversarial -> criteria -> comprehensive -> content-coupling -> surgery). Again, mode rotation, not file rotation.
- **Wave 8** is purely responsive to Wave 7 findings.

**GAP W6-1: No self-organization guidance for re-reading earlier research.** Wave 6 says "No new research. The agent works ONLY with what it already knows" (line 712), but the Deepening Test (lines 119-129) says "Re-read a research file not recently visited" as a staleness breaker. If the agent re-reads research in Waves 6-8, there is no rotation guidance for which file to pick. This is likely fine — by Wave 6, the agent's taste should drive selection — but it is an undocumented interaction between two sections of the skill.

**Verdict: CLEAN with minor note.**

---

## 4. Cross-Cutting Gaps

### GAP X-1: The Primacy Rotation section does not preview per-file phase tracking

Per-file phase tracking (1st visit = STRUCTURAL, 2nd = INTEGRATION, 3rd = DEPTH) is one of the most important rotation mechanisms. It is introduced at Wave 2 (line 541) and referenced at Wave 3 (line 623). But the general Primacy Rotation section (lines 352-383) does not mention it at all. An agent reading the general section forms an incomplete mental model of how rotation works.

**Remediation:** Add to the Primacy Rotation section (after line 364):

```markdown
**Per-file phase tracking:** Each file has its own depth progression independent of the
wave's global phase:
- **1st primacy visit:** STRUCTURAL — read broadly, make bold additions.
- **2nd primacy visit:** INTEGRATION — ask how findings RELATE to what you built since last reading.
- **3rd+ primacy visit:** DEPTH — fine-grain application, compound connections.

If a file's personal phase conflicts with the wave's global phase, the file's personal
phase takes precedence for how you engage with it.
```

### GAP X-2: The Primacy Rotation section does not preview dimension permeation

The idea that a file's thinking permeates all passes (not just primacy) is introduced at Wave 2 (line 548) but not in the general section. The general section's definition of "Unread files: Gets ZERO attention" (line 362) is actually misleading — it is true for the file AS TEXT, but the file's DIMENSION should be active even when the file is not at primacy.

**Remediation:** Add to the Primacy Rotation section (after the per-file phase tracking addition):

```markdown
**Dimension permeation:** A file's THINKING permeates all passes, not just primacy passes.
When R3 is at primacy in passes 3 and 6, density thinking does not stop at pass 7 —
density is always a dimension being evaluated and applied. "Unread files get ZERO
attention" refers to the FILE AS TEXT. The file's DIMENSION remains active through the
agent's internalized vocabulary. Track in your notebook: for each pass, note which files'
findings you applied even when they were not at primacy.
```

### GAP X-3: The general attention trough concept is undefined

The general Primacy Rotation section says "Everything in the middle compresses" (line 353) but never names this as the "attention trough" or defines its symptoms. Wave 3 (line 621) defines attention trough symptoms, but only for case studies. There is no general definition.

**Remediation:** Add to the Primacy Rotation section:

```markdown
**Attention trough:** The compression zone between primacy and recency positions. Files in
the trough receive the least attention. Symptoms that a file is stuck in the trough:
1. The page's spatial form reflects the primacy and recency files but not the trough files.
2. The builder's notebook mentions trough files less frequently.
3. Zone-specific swap test failures correlate with dimensions from trough files.
4. CSS changes per pass are concentrated in areas addressed by primacy files.

When trough symptoms appear, the affected file gets primacy at the next pass.
```

### GAP X-4: Diagnostic override and re-entry are not carried consistently across waves

Wave 2 has a full 4-step diagnostic override with explicit re-entry. Wave 3 references it ("same as Wave 2") but does not restate re-entry. Waves 1, 4, and 5 have no diagnostic override at all.

| Wave | Override | Re-entry |
|------|----------|----------|
| 0 | N/A | N/A |
| 1 | MISSING | MISSING |
| 2 | PRESENT | PRESENT |
| 3 | Reference only | MISSING |
| 4 | MISSING | MISSING |
| 5 | MISSING | MISSING |
| 6-8 | N/A | N/A |

**Remediation:** Move the diagnostic override protocol to the general Primacy Rotation section as a universal mechanism, then reference it from each wave:

```markdown
**Diagnostic override (applies to all waves with rotation schedules):**
After each pass, the agent may override the next pass's primacy:
1. What dimension of the page feels weakest right now?
2. Which file addresses that dimension?
3. Has that file been at primacy in the last 2 passes? If NO: put it at primacy next. If YES: follow the default schedule.
4. Has any file gone 4+ passes without primacy? If YES: that file gets primacy next, regardless.

**After overriding:** Resume the default schedule at the next sequential position. The
overridden file's slot is consumed, not replayed.
```

### GAP X-5: The 4-pass neglect threshold is stated inconsistently

The threshold appears at:
- Line 362 (general section): "The 4-pass neglect rule prevents any file from going unread too long."
- Line 507 (Wave 2 override step 4): "Has any file gone 4+ passes without primacy? If YES: that file gets primacy next, regardless."
- Line 548 (Wave 2 dimension permeation): "If any file goes 4+ passes without its dimension being actively applied, that dimension is being neglected."
- Line 619 (Wave 3): implicit via "same as Wave 2"

It does NOT appear in Waves 1, 4, or 5. More critically, Wave 2's own default schedule violates it (R1: gap of 5, R4: gap of 5), and Wave 3's file count makes universal compliance structurally impossible.

**Remediation:** The threshold should be reframed in the general section:

```markdown
**The 4-pass neglect threshold:** No file should go 4+ consecutive passes without primacy
UNLESS the wave explicitly documents why. In waves with more files than passes (Wave 3),
the threshold applies at the DIMENSION level, not the individual file level: no dimension
(DD, OD, CD) should go 4+ passes without at least one of its constituent files at primacy.
```

---

## 5. The vocabulary.md Primacy Problem (Wave 1)

This deserves special treatment. The Wave 1 rotation (line 465) places vocabulary.md at positions 4 and 8 in an 8-position schedule:

```
identity.md(1) -> tokens.css(2) -> components.css(3) -> vocabulary.md(4) ->
identity.md(5) -> tokens.css(6) -> components.css(7) -> vocabulary.md(8) -> agent's choice(9)
```

The question is: does position 4 constitute "primacy"? In the general section (line 359), primacy is defined as "Position 1 (Primacy): File read first in the pass." This implies primacy means being the first file read in a given pass — i.e., each numbered slot is a separate pass where that file is read first.

If each slot is a separate pass (the agent reads the primacy file first, then cross-references 1-2 others), then vocabulary.md IS at primacy in passes 4 and 8. This is fine.

But if the agent interprets the schedule as "read all 4 files in this order per cycle," then vocabulary.md is NEVER at primacy — it is always 4th. The schedule is ambiguous.

**Resolution:** The pass structure at line 469 ("Each pass is a full cycle: Read design system file -> build CSS changes -> screenshot and scroll -> evaluate -> refine -> decide what next") uses singular "file," suggesting each pass focuses on one file. This supports the interpretation that each slot is one pass with one primacy file.

**Verdict:** The vocabulary.md issue is likely a non-issue IF the agent correctly interprets each slot as a separate pass. But the schedule's notation is ambiguous. An explicit note would resolve it:

```markdown
**Each numbered position is one pass.** The primacy file for that pass is the one listed.
Read it FIRST and MOST DEEPLY. Cross-reference 1-2 other files as supporting material.
Do not read all 4 files equally in every pass — that defeats the purpose of rotation.
```

---

## 6. Summary of All Gaps

### Critical (structural arithmetic failures)

| ID | Wave | Gap | Impact |
|----|------|-----|--------|
| W3-1 | 3 | 8 of 16 files have zero guaranteed primacy turns | Half the input corpus is invisible to rotation |
| W3-4 | 3 | 4-pass neglect threshold is structurally impossible for all files | The threshold cannot be satisfied as written |
| W2-2 | 2 | Default schedule violates its own 4-pass neglect threshold for R1 and R4 | Agent must override the default to comply with the default's own rule |

### Significant (missing mechanisms that exist in peer waves)

| ID | Wave | Gap | Impact |
|----|------|-----|--------|
| X-4 | 1,4,5 | No diagnostic override | Agent cannot adapt rotation to page needs |
| X-1 | General | Per-file phase tracking not previewed | Agent discovers it mid-build, not at orientation |
| X-2 | General | Dimension permeation not previewed | "Unread files get ZERO attention" is misleading |
| X-3 | General | Attention trough concept undefined at general level | No name for the core problem rotation solves |
| W3-3 | 3 | No re-entry instruction after override | Agent does not know how to resume after overriding |
| W3-5 | 3 | "Crown jewels" undefined | Agent must guess which files are crown jewels |

### Minor (consistency gaps, low execution impact)

| ID | Wave | Gap | Impact |
|----|------|-----|--------|
| W1-3 | 1 | No per-file phase tracking | Low impact (only 2 turns per file, phases are obvious) |
| W1-4 | 1 | No neglect threshold stated | Structurally impossible to violate, so low impact |
| W4-3 | 4 | No per-file phase tracking | Low impact (3 files, 2 turns each) |
| W5-3 | 5 | No per-file phase tracking | Low impact (3 files, 2-3 turns each) |
| W2-1 | 2 | SYNTHESIS gets only 1 primacy turn | Partially mitigated by diagnostic override |
| W6-1 | 6-8 | No guidance for re-reading research as staleness breaker | Low impact (agent taste should drive selection) |

---

## 7. Consolidated Remediation

### Priority 1: Fix the general Primacy Rotation section (lines 352-383)

Add after line 364:

```markdown
**Per-file phase tracking:** Each file has its own depth progression independent of the
wave's global phase:
- **1st primacy visit:** STRUCTURAL — read broadly, make bold additions.
- **2nd primacy visit:** INTEGRATION — ask how findings RELATE to what you built since last reading.
- **3rd+ primacy visit:** DEPTH — fine-grain application, compound connections.
If a file's personal phase conflicts with the wave's global phase, the file's personal
phase takes precedence.

**Dimension permeation:** A file's THINKING permeates all passes, not just primacy passes.
"Unread files get ZERO attention" refers to the file as text. The file's DIMENSION remains
active through the agent's internalized vocabulary. Track in your notebook: for each pass,
note which files' dimensions you applied even when they were not at primacy.

**Attention trough symptoms:** The compression zone between primacy and recency positions.
Symptoms: (1) Page reflects primacy/recency files but not middle files. (2) Notebook
mentions trough files less frequently. (3) Zone-specific swap test failures correlate with
trough-file dimensions. (4) CSS changes concentrate in primacy-file areas. When symptoms
appear, the affected file gets primacy at the next pass.

**Diagnostic override (universal, applies to all waves with rotation schedules):**
After each pass, the agent may override the next pass's primacy:
1. What dimension of the page feels weakest right now?
2. Which file addresses that dimension?
3. Has that file been at primacy in the last 2 passes? If NO: override. If YES: follow default.
4. Has any file gone 4+ passes without primacy? If YES: that file gets primacy next.
After overriding: resume the default schedule at the next sequential position. The
overridden file's slot is consumed, not replayed.

**The 4-pass neglect threshold:** No file should go 4+ consecutive passes without primacy
UNLESS the wave explicitly documents why. In waves with more files than passes (Wave 3),
the threshold applies at the DIMENSION level: no dimension should go 4+ passes without at
least one of its constituent files at primacy.
```

### Priority 2: Rewrite Wave 3 rotation to acknowledge arithmetic honestly

Replace the rotation section (around lines 609-627) with the tiered strategy described in the Wave 3 remediation above. Key changes:
- Acknowledge that 2 primacy turns per file is impossible with 16 files and 12-18 passes
- Introduce Tier 1/2/3 file classification
- Define visual companion protocol (read alongside parent, not independently)
- Define ANTI-PRESCRIPTION-TEMPLATE and README as framing material (read once at entry)
- Define "crown jewels" explicitly
- Restate re-entry protocol (do not cross-reference Wave 2)

### Priority 3: Fix Wave 2 default schedule to comply with its own neglect threshold

Move R1's second turn from position 7 to position 5, and R4's from position 8 to position 6, or similar adjustment that keeps all gaps at 4 or fewer passes.

### Priority 4: Add diagnostic override to Waves 1, 4, and 5

One-line additions referencing the universal protocol now in the general section:
```markdown
**Diagnostic override:** See the universal protocol in the Primacy Rotation section.
```

### Priority 5: Clarify Wave 1 slot interpretation

Add the note about each numbered position being one pass with one primacy file.

---

## 8. Final Assessment

The Primacy Rotation section is conceptually sound. The U-curve rationale is well-explained, positions are defined, and the 4-pass neglect threshold is a good safeguard. Wave 2 is the gold standard — it has every mechanism (rotation schedule, diagnostic override, re-entry, per-file tracking, neglect threshold, dimension permeation).

The problems are:

1. **Wave 3 is structurally broken.** 16 files cannot each get 2 primacy turns in 12-18 passes. The skill does not acknowledge this. The rotation schedule names 9 of 16 files and leaves 8 invisible. This is the single highest-impact fix.

2. **The general section is incomplete.** Key concepts (per-file phase tracking, dimension permeation, attention trough, diagnostic override) are introduced in Wave 2 and assumed to carry forward, but Wave 2 may not be in the agent's context window when it reaches Wave 3, 4, or 5. The general section should define ALL rotation mechanisms once, then waves should specialize.

3. **Consistency drops after Wave 2.** Waves 1, 4, and 5 lack diagnostic overrides. Waves 1, 4, and 5 lack per-file phase tracking. Wave 3 lacks a re-entry instruction. The pattern is: Wave 2 was written with full rigor, and subsequent waves assumed the agent would remember Wave 2's mechanisms without restating them.

4. **Wave 2's own default schedule violates its own neglect threshold** for R1 (gap of 5) and R4 (gap of 5). The override protocol should catch this at runtime, but the default should not require the override to achieve compliance.

The skill's primacy rotation is approximately 60% complete. Wave 2 is at 95%. Waves 4 and 5 are at 70% (schedules are good, mechanisms are missing). Wave 1 is at 65% (schedule works, no override, vocabulary.md ambiguity). Wave 3 is at 40% (arithmetic fails, 8 files invisible, no re-entry). The general section is at 50% (U-curve and positions are good, everything else is missing).
