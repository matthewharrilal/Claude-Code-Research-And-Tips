# SCAN-H: Consolidated Gaps -- All CRITICAL/BLOCKING/IMPORTANT Missing Items

**Author:** Scanner H (Sonnet 4.5, Task #8)
**Date:** 2026-02-17
**Sources read:**
  - `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (v2, 682 lines)
  - `ephemeral/prompt-fix-enrich/DELTA-09-scale.md`
  - `ephemeral/prompt-fix-enrich/DELTA-10-mc.md`
  - `ephemeral/prompt-fix-enrich/DELTA-11-channel.md`
  - `ephemeral/prompt-fix-enrich/DELTA-12-flagship.md`
  - `ephemeral/prompt-fix-enrich/INTEGRATOR-MISSING-ITEMS.md`
**Method:** Full read of all 5 source reports, cross-deduplication against FINAL prompt v2, unified priority list produced.

---

## DEDUPLICATION NOTES

Before the master list, items that appear in MULTIPLE reports are noted here so the inserter applies them once:

| Duplicated concept | Appears in | Resolution |
|--------------------|-----------|------------|
| SC-09 "3 channels per transition" | DELTA-09 (I-02) + DELTA-11 (CRITICAL-1) | Identical rule. One item: GAP-01 |
| SC-10 "Chromatic-density alignment" | DELTA-09 (I-03) only | Single source: GAP-02 |
| Channel-scale cell priority (80/20) | DELTA-09 (I-05) + DELTA-11 (IMPORTANT-2) | Nearly identical. One item: GAP-03 |
| Channel counts in CP-B and CP-D | DELTA-09 (I-06, builder channel self-check) + DELTA-11 (IMPORTANT-3) | Overlapping; DELTA-11 has fuller text. GAP-04 (CP-F) + GAP-05 (CP-B/CP-D) |
| S-16 Content Weight Check | DELTA-12 (#26) + INTEGRATOR (ITEM 1) | INTEGRATOR has exact text with S-17 companion. One item: GAP-12 |
| Spatial Budget formulas | DELTA-12 (#8) + INTEGRATOR (ITEM 3, P-01b) | INTEGRATOR has exact text. One item: GAP-13 |
| MG-06 / KB-05 soul conflict table | DELTA-12 (#20) + INTEGRATOR (ITEM 2, MG-06) | INTEGRATOR has exact text. One item: GAP-14 |
| File 14 intentionality routing | DELTA-12 (#42) only | Single source: GAP-22 |
| Intentionality pre-planning | DELTA-12 (#29) + INTEGRATOR (ITEM 4, P-01c) | INTEGRATOR has exact text. One item: GAP-15 |
| Anti-ambition audit | INTEGRATOR (ITEM 5, P-06b) only | Single source: GAP-16 |
| C-13 silence zone CSS definition | INTEGRATOR (ITEM 14) only | Single source: GAP-24 |
| SC naming collision | DELTA-12 (#9) only | Single source: GAP-11 |
| S-16/17 visual weight score | INTEGRATOR (ITEM 1) only (distinct from DELTA-12 framing) | Merged into GAP-12 |
| C-09b climax positioning | INTEGRATOR (ITEM 7) only | Single source: GAP-17 |
| A8 visual weight targets | INTEGRATOR (ITEM 12) only | Single source: GAP-23 |
| A6 attention priority hierarchy | INTEGRATOR (ITEM 13) only | Single source: GAP-25 |

---

## MASTER PRIORITY LIST

Items ordered by classification (CRITICAL first, then BLOCKING, then IMPORTANT).
Within each tier, ordered by operational impact.

Total unique gaps: **36** (13 CRITICAL/BLOCKING, 23 IMPORTANT)

---

## TIER 1: CRITICAL (prompt crashes agent behavior if missing)

### GAP-01 -- SC-09: 3 channels per transition rule
**Classification:** CRITICAL
**Source reports:** DELTA-09 (I-02) + DELTA-11 (CRITICAL-1)
**Verified missing:** No SC-09 exists in FINAL prompt. SC rules stop at SC-08.
**Why critical:** Builders can satisfy SC-02 (>= 5/7 channels somewhere) while using spacing-only transitions at every section boundary. This is the exact failure mode of the Ceiling experiment (Channel Monotony). Without SC-09, builders comply on paper and fail perceptually.
**Placement:** Section B5, after SC-08.
**Exact insertable text:**
```
SC-09. Minimum 3 channels shift at every section transition.
       Channels: chromatic (background/color), typographic (size/weight/family), spatial (spacing),
       structural (borders), density (content-per-viewport), rhythmic (element pattern).
       Count channels that change at each section boundary. Count >= 3 = PASS.
       Intentional channel (Ch7) excluded from count (Opus-agent domain, not CSS).
```

---

### GAP-02 -- SC-10: Chromatic-density alignment rule
**Classification:** CRITICAL
**Source reports:** DELTA-09 (I-03)
**Verified missing:** No match for SC-10 or "chromatic-density alignment" in FINAL prompt.
**Why critical:** Companion to SC-09. Prevents warm-zone content overloading -- a failure where dense content appears in low-visual-weight (warm/cream) background zones, destroying the zone's restful character and creating perceptual confusion.
**Placement:** Section B5, after SC-09 (GAP-01).
**Exact insertable text:**
```
SC-10. Chromatic-density alignment: zone-sparse sections (warm backgrounds) MUST have
       LESS content per viewport than zone-dense sections (neutral/cool backgrounds).
       Warm < Neutral = PASS.
```

---

### GAP-03 -- Channel-scale cell priority (80/20 fill order)
**Classification:** CRITICAL
**Source reports:** DELTA-09 (I-05) + DELTA-11 (IMPORTANT-2)
**Verified missing:** No cell priority ordering exists in FINAL prompt.
**Why critical:** Under time pressure (staged downgrade at 240 min, C4), builder has no triage guidance. Without priority ordering, builders fill lower-impact cells (Character-Chromatic via syntax highlighting) while leaving higher-impact cells empty (Section-Density via content pacing).
**Placement:** Section B5, after SC-10 (GAP-02). Note: may be SC-11 if SC-09 and SC-10 are both added.
**Exact insertable text:**
```
SC-11. Cell priority under time pressure (fill HIGH-IMPACT first):
       1. Page-Spatial  2. Component-Structural  3. Section-Density  4. Page-Chromatic
       5. Section-Spatial  6. Component-Typographic  7. Page-Rhythmic  8. Section-Chromatic
       Character-scale cells: LAST (emerge from vocabulary, don't target directly).
```

---

### GAP-04 -- CP-F: Metaphor-to-channel mapping message (blocking pre-plan)
**Classification:** CRITICAL
**Source reports:** DELTA-11 (CRITICAL-2)
**Verified missing:** C2 communication protocol has CP-A through CP-E only. No CP-F exists.
**Why critical:** The planner creates the build plan without knowing how the metaphor maps to channels. Mechanism deployment is driven by content analysis alone, severing the metaphor-channel connection. This was the root cause of the Ceiling's "announced not structural" metaphor verdict.
**Placement:** Section C2, before CP-A (as it occurs before the plan-read checkpoint).
**Exact insertable text:**
```
CP-F (post-metaphor): Metaphor Agent -> Planner. REQUIRED before plan creation.
      "CHANNEL MAP: Ch1=[metaphor color expression]. Ch2=[type expression].
      Ch3=[spacing expression]. Ch4=[border expression]. Ch5=[density expression].
      Ch6=[rhythm expression]. Ch7=[argument arc + cognitive journey]."
      Without CP-F, Planner MUST NOT begin build plan. BLOCKING.
```

---

### GAP-05 -- CP-B and CP-D: Channel counts missing from communication checkpoints
**Classification:** CRITICAL
**Source reports:** DELTA-11 (IMPORTANT-3)
**Verified missing:** CP-B says "Page height: ___px. Content ratio: __%. Sections: __. Deviations from plan: ___." -- no channel count fields. CP-D says "Mechanism count + spatial re-check result" -- no channel count.
**Why critical:** No lightweight channel verification occurs before the full Mode 4 PA audit. The most common failure mode (single-channel transitions) goes undetected until Gate 5.
**Placement:** Section C2, replacing existing CP-B and CP-D text.
**Exact insertable text:**
```
CP-B (post-build): Builder -> Team-Lead. "Page height: ___px. Content ratio: __%.
     Sections: __. Channel count at T1=__, T2=__, T3=__. Deviations from plan: ___."

CP-D (post-elaboration): Pass 2 Builder -> Team-Lead.
     "Mechanisms: __. Spatial re-check: S-01 PASS/FAIL, S-02 PASS/FAIL.
     Channel count at 3 transitions: T1=__, T2=__, T3=__.
     Chromatic-density aligned: Y/N. Border weight tracks importance: Y/N."
```

---

### GAP-06 -- S-16: Spatial Confidence Index (SCI) formula
**Classification:** CRITICAL
**Source reports:** DELTA-09 (I-08)
**Verified missing:** No S-16, no "SCI," no "Spatial Confidence Index," no "max_void_height" formula in FINAL prompt. B1 stops at S-15.
**Why critical:** Provides a single computable number for spatial confidence gate, directly addressing the Ceiling's catastrophic whitespace void. S-12 (viewport < 30% coverage) and S-10 (no contiguous void > 2160px) address void detection but do NOT provide a page-level single ratio with a VETO threshold.
**Placement:** Section B1, after S-15 (zone count ceiling).
**Exact insertable text:**
```
S-16. Spatial Confidence Index: SCI = 1 - (max_void_height / total_page_height).
      Target: SCI >= 0.85. Warning: SCI < 0.70. VETO: SCI < 0.60 = DO NOT SHIP.
      Verify: find tallest contiguous area with no content elements (pure background).
      Divide by total page height. Subtract from 1.
```

---

### GAP-07 -- CRIT-3: Atmosphere test missing from B10 builder self-check
**Classification:** CRITICAL
**Source reports:** DELTA-10 (CRIT-3)
**Verified missing:** B10 has 16 self-check items. None is the atmosphere test.
**Why critical:** The atmosphere/one-sentence test is the ultimate quality gate for compositional fluency. Without it, builder self-check confirms mechanism counts but never validates whether mechanisms produce unified atmospheric effect. A page with 14 mechanisms scoring low on atmosphere WILL score DO NOT SHIP on PA-05.
**Placement:** Section B10, before the SendMessage instructions (after existing 16 items).
**Exact insertable text:**
```
[ ] ATMOSPHERE TEST: Can you describe the page's feel in ONE WORD that is NOT
    a mechanism name? (e.g., "monumental" not "border-weighted"). YES = proceed.
    NO = the mechanisms are not composing. Restructure before writing file.
```

---

### GAP-08 -- CRIT-2: VALUE TABLE format for cascading verification
**Classification:** CRITICAL
**Source reports:** DELTA-10 (CRIT-2)
**Verified missing:** MC-06 says ">= 1 cascading chain of 3+ mechanisms (A enables B enables C)." No VALUE TABLE format. No SHARED TRAJECTORY documentation requirement.
**Why critical:** Agents can declare a cascade without verifying co-variation. The VALUE TABLE (mechanisms as rows, stages/zones as columns, CSS values as cells) is the only tool that catches false cascades where mechanisms change at different boundaries with no shared trajectory.
**Placement:** Section B4 (Multi-Coherence), as annotation to MC-06.
**Exact insertable text:**
```
MC-06 VERIFICATION (CASCADE VALUE TABLE required in build plan):
      Mechanism | Zone A value | Zone B value | Zone C value | Direction
      ---------------------------------------------------------------
      [Mech 1]  |              |              |              | same dir?
      [Mech 2]  |              |              |              | same dir?
      [Mech 3]  |              |              |              | same dir?
      PASS: all mechanisms change in SAME direction across zones.
      FAIL: any mechanism moves in opposite direction = NOT a cascade.
```

---

### GAP-09 -- CRIT-4+CRIT-5: MC Checkpoint gates missing at Gate 0 and Gate 0.5
**Classification:** CRITICAL
**Source reports:** DELTA-10 (CRIT-4, CRIT-5)
**Verified missing:** Gate 0 in C3: "Content-to-void >= 60:40. Zone count check. Content/Zone >= 1.5." No MC check. Gate 0.5 checks "Content Quality (CT-01 through CT-08)." No MC gate.
**Why critical:** Metaphor and planning proceed without multi-coherence validation. Metaphor could be selected that supports only 1-2 CSS channels (insufficient for MC requirements) and the planner could produce a build plan with inadequate MC content -- both problems discovered too late at Gate 3.
**Placement:** Section C3, amending Gate 0 and Gate 0.5.
**Exact insertable text:**
```
Gate 0 (Pre-Build): [add to existing] MC check: Primary semantic dimension identified?
       3+ CSS channels identified for primary semantic? MUST = YES before proceeding.

Gate 0.5: [add to existing] MC check: Build plan contains >= 3 reinforcing pairs
       (documented)? >= 1 cascade with value table? >= 2 modulating chains specified?
       ALL THREE = YES required. Plan missing any = revise before Gate 1.
```

---

### GAP-10 -- CRIT-8: Incomplete MC self-check (modulation, responding, contrasting missing)
**Classification:** CRITICAL
**Source reports:** DELTA-10 (CRIT-8)
**Verified missing:** B10 has MC-01 (CCS), MC-02 (reinforcing), MC-06 (cascade). Still missing: modulation, responding, contrasting self-checks.
**Why critical:** Builder self-check can confirm CCS and cascades while deploying components uniformly across zones (no modulation) and deploying mechanisms everywhere (no contrasting). The most common multi-coherence failure modes have no self-check trigger.
**Placement:** Section B10, after existing MC self-check items.
**Exact insertable text:**
```
[ ] MODULATION: One callout in dense section vs sparse section -- different padding/margin?
[ ] RESPONDING: Does the section immediately after the header acknowledge header's visual weight?
[ ] CONTRASTING: Name >= 1 mechanism that is deliberately ABSENT from >= 1 section. Why?
```

---

### GAP-11 -- SC naming collision: Gate 1 references wrong SC rules
**Classification:** CRITICAL (BLOCKING)
**Source reports:** DELTA-12 (#9)
**Verified missing:** Gate 1 in C3: "Gate 1 (Post-Pass-1): SC-01 through SC-08." But B5 defines SC-01 through SC-08 as Scale-Channel rules (Maximum 5 scales, >= 5/7 channels, etc.). These are completely different concepts sharing identical identifiers.
**Why critical:** Any agent reading Gate 1 will look up SC-01 and find "Maximum 5 scales" -- not the spatial confidence gate check it is supposed to trigger. Gate 1 will be systematically misapplied.
**Placement:** Section C3, Gate 1 definition. Either (a) rename Gate 1 to reference specific rule IDs from B1 (S-01, S-02, S-10, S-12, etc.) or (b) rename B5 rules to CH-01 through CH-08. Option A is less disruptive.
**Exact insertable text (Option A):**
```
Gate 1 (Post-Pass-1): S-01, S-02, S-07, S-09, S-10, S-11, S-12, S-14 (spatial confidence).
                      [remove "SC-01 through SC-08" -- those are Scale-Channel rules in B5]
                      Max 2 fix cycles. Fail after 2 = ABORT.
```

---

### GAP-12 -- S-16/S-17: Content weight check (3 elements + 2 types per section)
**Classification:** BLOCKING (in DELTA-12) / IMPORTANT (in INTEGRATOR)
**Source reports:** DELTA-12 (#26) + INTEGRATOR (ITEM 1)
**Verified missing:** Not in FINAL prompt. S-05 requires >= 200px rendered height but allows single-type sections (200px of body text only = perceptually sparse). This is the "technically populated but perceptually sparse" failure mode.
**Why critical:** Void appears in PA audit on pages where every section passes S-05. The gap between "has content height" and "has visual substance" is the exact failure mode identified by 9/9 mode-4 auditors in the Ceiling PA.
**Placement:** Section B1, after the SCI formula (GAP-06, or after S-15 if SCI not added separately). Also add to B10 self-check.
**Exact insertable text:**
```
CONTENT WEIGHT (FM-1 Prevention):
  S-17. Content Weight Check: each content section MUST have:
        >= 3 discrete visual elements (paragraphs, code blocks, tables,
        diagrams, callouts, lists each count as 1 element).
        >= 2 distinct content TYPES per section (e.g., prose + code,
        or prose + table, or prose + diagram).
        Verify: for each <section>, count child elements by type.
        FAIL = section is "technically populated but perceptually sparse."

  S-18. Visual Weight Score per section (automated, run at gates):
        Score = (paragraphs * 1) + (code_blocks * 2) + (tables * 3)
              + (diagrams * 4) + (callouts * 2) + (lists * 1)
        Minimum per section: 5.
        FAIL = section lacks visual substance.
```
Note: Rule numbering adjusted to S-17/S-18 to avoid collision with GAP-06's S-16 (SCI formula). If SCI is not added, these become S-16/S-17.

---

### GAP-13 -- Estimation formulas for void budget calculation (planner executable)
**Classification:** BLOCKING (in DELTA-12) / IMPORTANT (in INTEGRATOR)
**Source reports:** DELTA-12 (#8) + INTEGRATOR (ITEM 3, P-01b)
**Verified missing:** P-01 instructs "word count per section, content type mix, density map" but NEVER tells the planner HOW to estimate pixel heights. Gate 0 requires "content-to-void >= 60:40" computation but provides no tools to perform it.
**Why critical:** Gate 0 spatial budget check is inoperable without formulas. The planner produces a build plan that fails Gate 0 computation -- or skips it -- because pixel height estimation requires this formula set.
**Placement:** Section B7, as new P-01b after P-01.
**Exact insertable text:**
```
P-01b. Spatial budget calculation TEMPLATE (planner MUST produce this table):
       body_text_px = word_count / 12 * 30.6
       code_block_px = code_lines * 22.3
       table_px = table_rows * 40
       heading_px = heading_count * 55
       zone_padding_px = zone_count * avg_zone_padding * 2
       transition_px = transition_count * avg_transition_gap
       TOTAL = content_px + overhead_px
       Ratio = content_px / TOTAL >= 0.60. This table MUST appear in build plan.
```

---

## TIER 2: BLOCKING (from DELTA-12 flagship audit)

### GAP-14 -- MG-06: Metaphor soul compatibility 4-channel conflict table
**Classification:** BLOCKING (DELTA-12 #20) / IMPORTANT (INTEGRATOR ITEM 2)
**Source reports:** DELTA-12 (#20) + INTEGRATOR (ITEM 2, MG-06)
**Verified missing:** MG-03 mentions "R1-R6: soul conflict" but provides NO specific channels. Metaphor agent must invent their own soul-conflict procedure.
**Why blocking:** A metaphor requiring gradients or box-shadows passes MG-01 through MG-05 unless explicitly checked. Discovery mid-build causes Pass 3 failure or compromised implementation.
**Placement:** Section B6, after MG-05.
**Exact insertable text:**
```
MG-06. Metaphor soul compatibility: metaphor agent fills YES/NO table for 4 channels:
       (1) requires gradients? (2) requires box-shadows? (3) requires cool tones?
       (4) requires border-radius > 0? Conflict count MUST = 0.
       Any channel the metaphor requires but soul prohibits = REDESIGN metaphor.
```

---

### GAP-15 -- Intentionality pre-planned in Pass 0, not bolted on in Pass 4
**Classification:** BLOCKING (DELTA-12 #29) / IMPORTANT (INTEGRATOR ITEM 4, P-01c)
**Source reports:** DELTA-12 (#29) + INTEGRATOR (ITEM 4)
**Verified missing:** C1 Pass 0 Content Architect description does NOT include self-reference/bookending identification.
**Why blocking:** Pass 4 produces surface intentionality (appended bookend, inserted bridge text) without structural integration. Self-reference must be planned into the skeleton at Pass 1 or it cannot be structurally integrated.
**Placement:** Section B7 or C1 Pass 0 description.
**Exact insertable text:**
```
P-01c. Intentionality pre-planning: the content architect (Pass 0) MUST specify
       at least 2 intentionality hooks in the content architecture document:
       "Section X will include a self-referential element showing [specific
       content-form relationship]. The final section will echo the opening with
       [specific resolution]." These are STRUCTURAL decisions that Pass 1's
       skeleton must account for. Pass 4 ELABORATES these hooks, not invents them.
```

---

### GAP-16 -- P-06b: Anti-ambition audit (separate agent reviewing build plan)
**Classification:** CRITICAL (INTEGRATOR) / HIGH (DELTA-12 #50 related)
**Source reports:** INTEGRATOR (ITEM 5, P-06b)
**Verified missing:** No anti-ambition check exists in FINAL prompt. No rule checks cumulative spatial cost of all planned additions.
**Why critical:** The Ceiling's dominant failure mode was over-ambition (14 mechanisms, 4 scales, elaborate metaphor) where each element was technically achievable individually but collectively exceeded spatial capacity. No current rule prevents this accumulation.
**Placement:** Section B7, after P-06.
**Exact insertable text:**
```
P-06b. Anti-ambition audit: a SEPARATE agent (not planner, not builder) reads the
       build plan and answers: "What is the SIMPLEST version that meets flagship
       requirements? Describe in 3 sentences." Planner lists EVERY addition beyond
       this simplest version with its spatial cost in pixels. Any addition with
       spatial cost > perceptual benefit = REMOVE. Any addition without a
       1-sentence perceptual benefit statement = REMOVE.
```

---

### GAP-17 -- Pass 2 spatial re-check incomplete (missing S-10, S-12)
**Classification:** BLOCKING (DELTA-12 #27)
**Source reports:** DELTA-12 (#27)
**Verified missing:** P-08: "Spatial re-check after Pass 2: S-01 + S-02 must still pass." Gate 3: "Spatial re-check (regression detection)" -- vague. S-10 (contiguous void > 2160px) and S-12 (viewport < 30% content) NOT in Gate 3's checklist.
**Why blocking:** New mechanism CSS (large margins, zone padding) can create contiguous voids and viewport dead zones even if content-to-void ratio (S-02) passes. Partial re-check allows void emergence to go undetected.
**Placement:** Section B7 P-08 + Section C3 Gate 3.
**Exact insertable text:**
```
P-08 AMENDMENT: After Pass 2: re-run S-01, S-02, S-10, S-12. If ANY fails: ROLLBACK Pass 2.
     [Change "S-01 + S-02" to "S-01, S-02, S-10, S-12"]

Gate 3 AMENDMENT: [add to existing] S-10: no contiguous void > 2160px. S-12: no viewport
     position < 30% content. BOTH must pass alongside existing Gate 3 checks.
```

---

### GAP-18 -- First 1.5 viewports >= 3 distinct visual textures
**Classification:** BLOCKING (DELTA-12 #45)
**Source reports:** DELTA-12 (#45)
**Verified missing:** A1 mentions the 5-second test but no specific measurable texture threshold. Not present anywhere in FINAL prompt.
**Why blocking:** The 5-second test (A1) has conviction framing but no binary gate. Without a measurable threshold, the builder cannot self-verify the arrival experience. Pages can pass all spatial gates while having a monotonous first viewport (just header + text, no texture variation).
**Placement:** Section B1, as new rule or builder self-check.
**Exact insertable text:**
```
S-19. FAIL IF: first 1.5 viewports (0-2160px at 1440px viewport height) contain fewer
      than 3 distinct visual textures (e.g., dark header + cream context box + content
      block with border IS 3; dark header + cream text + more cream text is NOT 3).
      "Visual texture" = distinct background treatment OR distinct layout type OR
      distinct border/structural treatment.
```

---

### GAP-19 -- File 14 (intentionality-layer-design.md) missing from Section E routing
**Classification:** BLOCKING (DELTA-12 #42)
**Source reports:** DELTA-12 (#42)
**Verified missing:** Section E Intentionality Builder reads: "Crown jewel forensics, Compositional fluency, 05-content-first-methodology.md." File 14 is absent.
**Why blocking:** The builder has no HOW for implementing the 6 intentionality dimensions. C-15 through C-18 state requirements, not implementation. Without HTML recipes and CSS cost estimates, the builder produces performative intentionality (labels without structure).
**Placement:** Section E, Intentionality Builder reading list.
**Exact insertable text:**
```
INTENTIONALITY BUILDER reads (add):
  - ephemeral/flagship-preparation/14-intentionality-layer-design.md
    -- 6 dimensions with HTML recipes, CSS cost estimates, danger zones
    (meta-pretension, forced loops, over-labeling)
```

---

### GAP-20 -- Mid-pipeline metacognitive reviewer after Pass 2
**Classification:** BLOCKING (DELTA-12 #50)
**Source reports:** DELTA-12 (#50)
**Verified missing:** C1 agent roster: Pass 2 Mechanism Builder -> Gate 3 -> Pass 3 Metaphor Builder. No mid-pipeline reviewer exists.
**Why blocking:** Mechanism deployment (Pass 2) can drift from the metaphor's channel prescription without detection until Gate 4 (metaphor coherence). A fresh-eyes reviewer after Pass 2 catches channel drift before metaphor integration makes it harder to fix.
**Placement:** Section C1, after Gate 3 (as a gate 3.5 agent).
**Exact insertable text:**
```
PASS 2.5 (Gate 3.5): Mid-Pipeline Reviewer (Opus). ZERO build context.
  Receives HTML file + screenshots only.
  Answers: (1) How many mechanisms are VISIBLE? (2) Has spatial proportion degraded
  from initial skeleton? (3) Does the page serve content or serve its own mechanisms?
  Output: 06-mid-pipeline-review.md
  BLOCKING IF: visible mechanisms < 50% of deployed count (per mechanism builder report).
```

---

### GAP-21 -- Zone Necessity Test as formal artifact (per-zone table in build plan)
**Classification:** BLOCKING (DELTA-12 #23)
**Source reports:** DELTA-12 (#23)
**Verified missing:** Gate 0 has "P-05: Every zone boundary has ALL THREE: content >= 800px, type change, intent change." But this checks boundary conditions sequentially; it does NOT require a comprehensive table artifact that covers ALL zones simultaneously, which is necessary to catch performative zones.
**Why blocking:** A planner can apply P-05 at each boundary without producing a comprehensive verification table. Performative zones that barely pass individual checks aggregate into a void-heavy page structure.
**Placement:** Gate 0 in C3 or Section B7 near P-05.
**Exact insertable text:**
```
Zone Necessity Table REQUIRED in build plan: For each planned zone, answer YES/NO:
(1) content mass >= 800px, (2) different content TYPE from adjacent,
(3) reader intent shift. Three NOs = MERGE. Table must appear in 03-build-plan.md.
```

---

### GAP-22 -- Pre-flight checklist as consolidated section
**Classification:** BLOCKING (DELTA-12 #54)
**Source reports:** DELTA-12 (#54)
**Verified missing:** Requirements are distributed across B1-B10, C3, and Appendix. No consolidated pre-build checklist for team-lead. C3 has "KILL CRITERIA QUICK REFERENCE" but it is gate-time reference, not a pre-build checklist.
**Why blocking:** Team-lead must reconstruct 15 scattered requirements before spawning any agent. Missing items are caught only at the gate where they were first needed, not before work begins.
**Placement:** New section before C1 (as C0) or at start of C1.
**Exact insertable text:**
```
PRE-FLIGHT CHECKLIST (Team-Lead runs before spawning any agent):
[ ] Content inventory exists (P-01 complete)
[ ] KB-01: 4+ content sections >= 200 words each
[ ] KB-02: content/zone >= 1.5
[ ] KB-03: predicted void <= 30%
[ ] KB-04: execution prompt <= 200 lines (for builder agents)
[ ] KB-05: MG-06 soul conflict check passed for planned metaphor direction
[ ] GAP-13 (P-01b): spatial budget table prepared
[ ] GAP-21: Zone Necessity Table ready in build plan
[ ] 7 BLOCKING enrichments applied to design system files (confirmed)
```

---

## TIER 3: IMPORTANT (operational gaps that reduce quality without causing outright failure)

### GAP-23 -- C-01 category names don't match mechanism catalog (IMPORTANT-1)
**Classification:** IMPORTANT
**Source reports:** DELTA-11 (IMPORTANT-1)
**Verified missing:** C-01 uses "Chromatic" and "Density" which are CHANNEL names, not mechanism catalog categories. Catalog uses S/H/C/D/N. A builder searching catalog for "Chromatic" category finds nothing.
**Placement:** Section B3, replace existing C-01.
**Exact insertable text:**
```
C-01. Per-category minimums (mechanism catalog families):
      Spatial(S):1+  Hierarchy(H):1+  Component(C):1+  Depth/Emphasis(D):1+  Structure/Nav(N):1+
      Cross-reference: mechanism-catalog.md "Mechanism Categories" table for mechanism-to-category mapping.
```

---

### GAP-24 -- C-13 silence zone CSS definition (IMPORTANT)
**Classification:** IMPORTANT
**Source reports:** INTEGRATOR (ITEM 14)
**Verified missing:** C-13 says "base typography only, NO mechanism CSS" but doesn't define what CSS IS and IS NOT allowed.
**Placement:** Section B3, as annotation to C-13.
**Exact insertable text:**
```
C-13 DEFINITION: A silence zone allows ONLY base typography (body font, body size,
     body color, standard paragraph margins, page background). PROHIBITED in silence:
     border-left, zone backgrounds, dark zones, callouts, code blocks, any mechanism
     CSS. Silence zones contain CONTENT (text, simple lists) but NO mechanism styling.
     If it has a border-left or custom background, it is NOT a silence zone.
```

---

### GAP-25 -- C-09b: Climax positioning (40-60% scroll depth)
**Classification:** IMPORTANT
**Source reports:** INTEGRATOR (ITEM 7)
**Verified missing:** C-09 requires ">= 1 designed moment per scroll quartile" but does NOT specify where the STRONGEST moment should be.
**Placement:** Section B3, after C-09.
**Exact insertable text:**
```
C-09b. Climax positioning: the single HIGHEST-WEIGHT visual element (dark inset,
       complex grid, full-width diagram) MUST be at 40-60% scroll depth. NOT in
       the first 25%. The ceiling experiment front-loaded at 10-15% and everything
       after felt like decline. The climax is the REWARD for scrolling.
```

---

### GAP-26 -- A8 visual weight targets per act (operationalizes reader journey)
**Classification:** IMPORTANT
**Source reports:** INTEGRATOR (ITEM 12)
**Verified missing:** A8 defines 5 acts by scroll percentage but provides no pacing requirements beyond "interest monotonically decreasing = failed page." No per-act density floor.
**Placement:** Section A8, after the 5-act description.
**Exact insertable text:**
```
VISUAL WEIGHT TARGETS (10-point scale, directional guidance):
  Act 1 (0-15%): 7/10 -- confident but not overwhelming (header + orientation)
  Valley 1 (15-35%): 4/10 -- reading zone, let eye settle
  Act 3 (40-60%): 9/10 -- CLIMAX, highest contrast, stop-scrolling moment
  Act 4 (60-85%): 6/10 -- highest information density, substance zone
  Act 5 (85-100%): 5/10 -- resolution, spacing expands, footer bookend
  RULE: Act 4 MUST have MORE content per viewport than Act 2.
  RULE: NEVER more than 2 viewports of identical visual texture consecutively.
```

---

### GAP-27 -- A6 attention priority hierarchy (why spatial gates are binary)
**Classification:** IMPORTANT
**Source reports:** INTEGRATOR (ITEM 13)
**Verified missing:** A6 has "Binary rules are cheap (~1 unit). Spatial proportion... are EMERGENT." The full compliance hierarchy with percentages is absent.
**Placement:** Section A6, after existing content.
**Exact insertable text:**
```
ATTENTION PRIORITY (what builders preserve vs drop under pressure):
  Priority 1: Binary identity (soul) -- ~100% compliance
  Priority 2: Structural mandates (footer, sections) -- ~80-90%
  Priority 3: Quantitative thresholds (CPL, token%) -- ~60-70%
  Priority 4: Judgment qualities -- ~0-10%
  Priority 5: Emergent properties (spatial proportion, rhythm) -- ~0%
  Spatial proportion is Priority 5. Without BINARY GATES, it WILL be dropped.
  Every spatial rule in this prompt is a gate BECAUSE builders cannot self-enforce it.
```

---

### GAP-28 -- Scale gaps warning (continuous coverage beats sparse coverage)
**Classification:** IMPORTANT
**Source reports:** DELTA-09 (I-04)
**Verified missing:** No match for "scale gap," "gaps worse," "continuous coverage," or "Navigation > Page > Section" in FINAL prompt.
**Placement:** Section A3, after the EMPIRICAL WARNING block.
**Exact insertable text:**
```
Scale gaps are worse than missing scales. If targeting 4 scales, ensure continuous coverage
(Navigation > Page > Section > Component). 2 continuous scales > 4 scales with gaps.
```

---

### GAP-29 -- Builder channel self-check (per-transition channel counts in B10)
**Classification:** IMPORTANT
**Source reports:** DELTA-09 (I-06)
**Verified missing:** B10 has 16 self-check items but none cover per-transition channel counts.
**Placement:** Section B10, after existing 16 items (merge with GAP-07 and GAP-10 as part of expanded B10 additions, before SendMessage instructions).
**Exact insertable text:**
```
CHANNEL SELF-CHECK:
[ ] Transition 1 (early): >= 3 channels shift?
[ ] Transition 2 (middle): >= 3 channels shift?
[ ] Transition 3 (late): >= 3 channels shift?
[ ] Warmest background section has LEAST content per viewport?
[ ] Heaviest border on MOST important content?
[ ] CSS line count <= 800? (above 800, composition quality degrades)
```

---

### GAP-30 -- Agent-channel ownership in C1
**Classification:** IMPORTANT
**Source reports:** DELTA-09 (I-07)
**Verified missing:** C1 assigns agents to PASSES but not to CHANNELS. Without explicit ownership, no agent feels responsible for multi-channel coordination.
**Placement:** Section C1, after the agent roster (after Pass 4 block).
**Exact insertable text:**
```
CHANNEL OWNERSHIP:
  Metaphor Agent:       Ch7 Intentional
  Content Architect:    Ch5 Density + Ch6 Rhythmic
  Planner:              Ch3 Spatial + Ch4 Structural (integrates all)
  Mechanism Builder:    Ch1 Chromatic + Ch2 Typographic (implements only)
  Embedded Auditor:     ALL 7 (validates SC rules)
```

---

### GAP-31 -- CRIT-9: Metaphor agent MC gate (3+ CSS channels for primary semantic)
**Classification:** IMPORTANT
**Source reports:** DELTA-10 (CRIT-9)
**Verified missing:** Gate 0 does not include a CSS-channel check. MG-01 through MG-05 do not specify "3+ CSS channels for primary semantic."
**Placement:** Section B6 or Gate 0 in C3.
**Exact insertable text:**
```
MG-03 ADDITION: CSS channel check: Does metaphor support >= 3 CSS channels for
       its primary semantic? (From: chromatic, typographic, spatial, structural,
       density, rhythmic). Count = YES. Count < 3 = REJECT metaphor.
```

---

### GAP-32 -- IMP-14: 5 named scales enumerated in SC-01
**Classification:** IMPORTANT
**Source reports:** DELTA-10 (IMP-14)
**Verified missing:** SC-01: "Maximum 5 scales. Preferred 2-3 for flagship." No enumeration of the 5 scale names.
**Placement:** Section B5, amend SC-01.
**Exact insertable text:**
```
SC-01 ADDITION: The 5 scales are: Navigation / Page / Section / Component / Character.
       Target 2-3 with CONTINUOUS coverage (no gaps). Preferred = Page + Section + Component.
```

---

### GAP-33 -- IMP-8: Deployment ratio for contrasting (wallpaper anti-pattern)
**Classification:** IMPORTANT
**Source reports:** DELTA-10 (IMP-8)
**Verified missing:** MC-05: ">= 2 contrasting deployments (presence in zone X makes absence in zone Y meaningful)." No deployment ratio or wallpaper anti-pattern warning.
**Placement:** Section B4, amend MC-05.
**Exact insertable text:**
```
MC-05 ADDITION: Anti-wallpaper: any mechanism that appears in ALL sections is NOT
       contrasting -- it is uniform. Each contrasting mechanism MUST be absent
       from >= 1 section. Written justification: "Absent from [section] because [absence achieves X]."
```

---

### GAP-34 -- IMP-19: Rhythm contour requirement (random values prohibition)
**Classification:** IMPORTANT
**Source reports:** DELTA-10 (IMP-19)
**Verified missing:** MC-08: "Anti-metronome: >= 3 distinct padding/margin values across section boundaries." No contour requirement, no random-values prohibition.
**Placement:** Section B4, amend MC-08.
**Exact insertable text:**
```
MC-08 ADDITION: Values must form a CONTOUR matching the page's arc (not 3 random values).
       FORBIDDEN: randomly selected distinct values that happen to differ.
       REQUIRED: spacing contour document in build plan: "S1: [Npx] -- [why tight/wide];
       S2: [Npx] -- [why]; S3: [Npx] -- [why]..." The WHY must reference content pacing.
```

---

### GAP-35 -- IMP-12: CCS recovery action if Gate 3 fails
**Classification:** IMPORTANT
**Source reports:** DELTA-10 (IMP-12)
**Verified missing:** B12 has RP-01 through RP-04 (general recovery). None address CCS failure specifically.
**Placement:** Section B12, as RP-05.
**Exact insertable text:**
```
RP-05. CCS < 0.30 at Gate 3: do NOT reduce mechanism count. Instead, revise
       mechanism CLUSTERS to encode shared semantic dimensions. Pick the 3 weakest
       mechanisms, find ONE semantic they could all express, rewrite their CSS to
       reinforce that shared semantic. Re-compute CCS. Max 1 revision cycle.
```

---

### GAP-36 -- Rejection log missing SCALE and WHAT IS PRESERVED fields
**Classification:** IMPORTANT
**Source reports:** DELTA-12 (#11)
**Verified missing:** C-12: "Format: mechanism name, intended location, reason for rejection." Only 3 of 5 fields. Missing: (4) PROPOSED SCALE (Page/Section/Component/Detail), (5) WHAT ABSENCE PRESERVES.
**Placement:** Section B3, amend C-12 format.
**Exact insertable text:**
```
C-12 FORMAT (5 fields): mechanism name | intended location | PROPOSED SCALE
     (Page/Section/Component/Character) | reason for rejection | WHAT ABSENCE PRESERVES
```

---

## SUMMARY TABLE

| ID | Classification | Source | Placement | Lines |
|----|---------------|--------|-----------|-------|
| GAP-01 | CRITICAL | DELTA-09 + DELTA-11 | B5 after SC-08 | 5 |
| GAP-02 | CRITICAL | DELTA-09 | B5 after SC-09 | 4 |
| GAP-03 | CRITICAL | DELTA-09 + DELTA-11 | B5 after SC-10 | 5 |
| GAP-04 | CRITICAL | DELTA-11 | C2 before CP-A | 5 |
| GAP-05 | CRITICAL | DELTA-11 | C2 replace CP-B/CP-D | 8 |
| GAP-06 | CRITICAL | DELTA-09 | B1 after S-15 | 4 |
| GAP-07 | CRITICAL | DELTA-10 | B10 before SendMessage | 3 |
| GAP-08 | CRITICAL | DELTA-10 | B4 annotation to MC-06 | 8 |
| GAP-09 | CRITICAL | DELTA-10 | C3 Gate 0 + Gate 0.5 | 6 |
| GAP-10 | CRITICAL | DELTA-10 | B10 after existing MC items | 3 |
| GAP-11 | CRITICAL | DELTA-12 | C3 Gate 1 rename | 2 |
| GAP-12 | BLOCKING | DELTA-12 + INTEGRATOR | B1 after S-16 | 12 |
| GAP-13 | BLOCKING | DELTA-12 + INTEGRATOR | B7 after P-01 | 9 |
| GAP-14 | BLOCKING | DELTA-12 + INTEGRATOR | B6 after MG-05 | 5 |
| GAP-15 | BLOCKING | DELTA-12 + INTEGRATOR | B7 after P-01b | 7 |
| GAP-16 | BLOCKING | INTEGRATOR | B7 after P-06 | 6 |
| GAP-17 | BLOCKING | DELTA-12 | B7 P-08 + C3 Gate 3 | 4 |
| GAP-18 | BLOCKING | DELTA-12 | B1 new S-19 | 5 |
| GAP-19 | BLOCKING | DELTA-12 | Section E Intentionality list | 3 |
| GAP-20 | BLOCKING | DELTA-12 | C1 after Gate 3 | 6 |
| GAP-21 | BLOCKING | DELTA-12 | Gate 0 in C3 | 4 |
| GAP-22 | BLOCKING | DELTA-12 | New C0 section or C1 start | 9 |
| GAP-23 | IMPORTANT | DELTA-11 | B3 replace C-01 | 3 |
| GAP-24 | IMPORTANT | INTEGRATOR | B3 annotation to C-13 | 5 |
| GAP-25 | IMPORTANT | INTEGRATOR | B3 after C-09 | 4 |
| GAP-26 | IMPORTANT | INTEGRATOR | A8 after 5-act description | 8 |
| GAP-27 | IMPORTANT | INTEGRATOR | A6 after existing content | 8 |
| GAP-28 | IMPORTANT | DELTA-09 | A3 after EMPIRICAL WARNING | 3 |
| GAP-29 | IMPORTANT | DELTA-09 | B10 after existing items | 6 |
| GAP-30 | IMPORTANT | DELTA-09 | C1 after agent roster | 5 |
| GAP-31 | IMPORTANT | DELTA-10 | B6 or Gate 0 | 4 |
| GAP-32 | IMPORTANT | DELTA-10 | B5 amend SC-01 | 2 |
| GAP-33 | IMPORTANT | DELTA-10 | B4 amend MC-05 | 3 |
| GAP-34 | IMPORTANT | DELTA-10 | B4 amend MC-08 | 5 |
| GAP-35 | IMPORTANT | DELTA-10 | B12 new RP-05 | 5 |
| GAP-36 | IMPORTANT | DELTA-12 | B3 amend C-12 format | 2 |

**TOTAL unique gaps: 36**
**CRITICAL: 11 (GAP-01 through GAP-11)**
**BLOCKING: 11 (GAP-12 through GAP-22)**
**IMPORTANT: 14 (GAP-23 through GAP-36)**
**Estimated lines to add: ~192 lines across 36 insertions**

---

## INSERTION ORDER RECOMMENDATION

For a sequential integrator applying these in one pass, recommended order minimizes
cross-section conflicts:

1. Section A (conviction layer): GAP-28, GAP-27, GAP-26 (A3, A6, A8)
2. Section B1 (spatial): GAP-06, GAP-12, GAP-18 (new S-16, S-17/18, S-19)
3. Section B3 (compositional): GAP-23, GAP-24, GAP-25, GAP-33, GAP-34, GAP-36
4. Section B4 (multi-coherence): GAP-08, GAP-33, GAP-34, GAP-35
5. Section B5 (scale-channel): GAP-11 rename fix, GAP-01, GAP-02, GAP-03, GAP-32
6. Section B6 (metaphor): GAP-14, GAP-31
7. Section B7 (process): GAP-13, GAP-15, GAP-16, GAP-17
8. Section B10 (self-check): GAP-07, GAP-10, GAP-29 (all B10 additions together)
9. Section B12 (recovery): GAP-35
10. Section C1 (agent roster): GAP-20, GAP-30, GAP-22 (pre-flight checklist as C0)
11. Section C2 (communication): GAP-04, GAP-05
12. Section C3 (gates): GAP-09, GAP-11 (Gate 1 rename already covered in Step 5), GAP-17, GAP-21
13. Section E (references): GAP-19

---

## ITEMS EXCLUDED (NICE-TO-HAVE from INTEGRATOR)

The following INTEGRATOR items are classified NICE-TO-HAVE and excluded from this gap list:
- ITEM 6 (P-08b voice continuity) -- covered by PA-05b at audit time
- ITEM 8 (Reader Proxy agent) -- covered by Mode 4 PA
- ITEM 9 (metacognitive reviewers) -- partially covered by P-06b + Mode 4
- ITEM 10 (per-agent contracts C1b) -- repackaging of C1+C3+E
- ITEM 11 (Section F calibration run) -- pre-experiment protocol, not execution
- ITEM 15 (expanded B10 16->24) -- most items enforced at gates already
- ITEM 16 (enrichment risk map) -- motivational not operational

---

**END SCAN-H-consolidated-gaps.md**

**CRITICAL gaps: 11**
**BLOCKING gaps: 11**
**IMPORTANT gaps: 14**
**Total unique: 36**
**Total estimated lines: ~192**
