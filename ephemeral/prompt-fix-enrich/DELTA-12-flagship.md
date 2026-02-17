# Delta Check: 12-flagship-exhaustive-crossref.md vs FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md

**Auditor:** DELTA-CHECK (Sonnet 4.5)
**Date:** 2026-02-17
**Method:** Full read of both files. Every BLOCKING and HIGH item from FILE 1 checked against FILE 2.
**FILE 1:** `ephemeral/prompt-fix-enrich/12-flagship-exhaustive-crossref.md`
**FILE 2:** `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md`

---

## SUMMARY

| Category | Total in FILE 1 | Fixed in FILE 2 | Still Missing |
|----------|-----------------|-----------------|---------------|
| BLOCKING (pure) | 11 | 3 | 8 |
| HIGH (borderline BLOCKING) | 3 | 2 | 1 |
| HIGH (pure) | ~22 | 4 | ~18 |
| **TOTAL BLOCKING+HIGH** | **~36** | **~9** | **~27** |

---

## BLOCKING ITEMS

### STILL MISSING

**#8 (BLOCKING) -- Void budget estimation formulas for planners**
Source: File 03
Item: Concrete estimation formulas: `body_text_px = (word_count/12) * 30.6`, `code_px = lines * 22.3`, `table_px = rows * 40`, `list_px = items * 30`, `heading_px = count * 55`, `callout_px = count * 120`.
Status: P-01 instructs "word count per section, content type mix, density map" but NEVER tells the planner HOW to estimate pixel heights. Gate 0 requires "content-to-void >= 60:40" computation but provides no tools to perform it. NOT IN FILE 2.
Insertable: Add to P-01 or as a formula block near Gate 0:
> "ESTIMATION FORMULAS: body_text_px = words/12 * 30.6; code_px = lines * 22.3; table_px = rows * 40; list_px = items * 30; heading_px = count * 55; callout_px = count * 120. Structural: zone_pad = zones * avg_pad * 2; transition_px = transitions * avg_gap."

---

**#9 (BLOCKING) -- SC-01 through SC-07/SC-08 naming collision**
Source: File 03
Item: Gate 1 references "SC-01 through SC-08" as spatial confidence gate checks, but B5 defines SC-01 through SC-08 as Scale-Channel rules (e.g., SC-01 = "Maximum 5 scales," SC-02 = ">=5 of 7 channels"). These are completely different concepts sharing identical identifiers.
Status: NOT RESOLVED. FILE 2 still has the collision. Gate 1 in C3: "Gate 1 (Post-Pass-1): SC-01 through SC-08." B5 heading: "B5. SCALE-CHANNEL (8 rules)" with SC-01 through SC-08. Any agent reading Gate 1 will look up SC-01 and find "Maximum 5 scales" -- a spatial confidence gate check it is not.
Insertable: Either (a) rename Gate 1 to reference specific rule IDs from B1 (S-01, S-02, S-10, S-12, etc.) or (b) rename B5 rules to CH-01 through CH-08.

---

**#20 (BLOCKING) -- KB-05: Metaphor-soul conflict table**
Source: File 07
Item: 4-channel conflict check table: Does metaphor require (1) gradients? (2) box-shadows? (3) cool tones? (4) border-radius > 0? Any YES = REJECT.
Status: MG-03 lists "R1-R6: soul conflict" as one of 6 rejection checks but provides NO specific channels to check. The metaphor agent must invent their own soul-conflict procedure. NOT IN FILE 2.
Insertable: Add to MG-03: "Soul conflict check: Does metaphor require gradients? (NO) Box-shadows? (NO) Cool tones? (NO) border-radius > 0? (NO). Any YES = REJECT metaphor."

---

**#23 (BLOCKING) -- Zone Necessity Test as formal gate with per-zone table**
Source: File 08
Item: Per-zone table scoring ALL planned zones with YES/NO on 3 questions (content mass >= 800px? different content type? reader intent shift?). Three NOs on any zone = MERGE. Table must appear in build plan.
Status: Gate 0 has "P-05: Every zone boundary has ALL THREE: content >= 800px, type change, intent change." This checks boundary conditions but does NOT require a per-zone table covering ALL zones. A planner could apply P-05 at each boundary sequentially without producing the comprehensive verification artifact that catches performative zones. NOT IN FILE 2 as a formal artifact requirement.
Insertable: Add to Gate 0 or P-05: "Zone Necessity Table REQUIRED in build plan: For each planned zone, answer YES/NO: (1) content mass >= 800px, (2) different content TYPE from adjacent, (3) reader intent shift. Three NOs = MERGE. Table must appear in 03-build-plan.md."

---

**#26 (BLOCKING) -- Content weight check: 3 visual elements + 2 content types per section**
Source: File 09 (FM-1 recommendation)
Item: Each content section must have >= 3 distinct visual elements AND >= 2 content types (e.g., prose + code, or prose + table). S-05 requires 200px content height but allows a single-type section (200px of body text only = perceptually sparse, passes S-05).
Status: NOT IN FILE 2. Note: FILE 2 B5 has SC-08 = "Channel Saturation Prevention Score: no scale has ALL 7 channels active simultaneously." This is a different concept. Gate 1 references "SC-01 through SC-08" which, due to the naming collision (#9), may resolve to the channel saturation rule rather than any content weight check. The FM-1 recommendation is absent.
Insertable: Add as S-16 or amend S-05: "Each content section: >= 3 distinct visual elements AND >= 2 content types (e.g., prose + code, or prose + table). Single-type sections are perceptually sparse even if >= 200px."

---

**#27 (BLOCKING) -- Full spatial re-run after Pass 2 (S-01, S-02, S-10, S-12)**
Source: File 09 (FM-2 recommendation)
Item: After Pass 2, re-run S-01, S-02, S-10, S-12 (the FULL spatial gate), not just S-01+S-02. Void can emerge from new mechanism CSS creating large gaps (S-10, S-12) even if content-to-void ratio passes.
Status: PARTIALLY ADDRESSED. P-08: "Spatial re-check after Pass 2: S-01 + S-02 must still pass." Gate 3: "Spatial re-check (regression detection)" -- vague. S-09 is also checked at Gate 3. But S-10 (contiguous void > 2160px) and S-12 (viewport < 30% content) are NOT explicitly in Gate 3's checklist. INCOMPLETE.
Insertable: Amend P-08 and Gate 3 to read: "After Pass 2: re-run S-01, S-02, S-10, S-12. If ANY fails: ROLLBACK Pass 2."

---

**#42 (BLOCKING) -- Intentionality builder reference to File 14 missing from Section E**
Source: File 14
Item: Section E routes the Intentionality Builder to File 11 (crown jewel forensics) and File 13 (compositional fluency) but NOT File 14 (14-intentionality-layer-design.md), which contains HTML recipes, CSS cost estimates, and builder instructions for each of the 6 intentionality dimensions.
Status: STILL MISSING. Section E Intentionality Builder reads: "Crown jewel forensics (11-crown-jewel-forensics.md), Compositional fluency (13-compositional-fluency.md), ephemeral/flagship-preparation/05-content-first-methodology.md." File 14 is absent. The builder has no HOW for implementing the 6 dimensions (C-15 through C-18 state requirements, not implementation).
Insertable: Add to Section E Intentionality Builder reading list: "14-intentionality-layer-design.md -- 6 dimensions with HTML recipes, CSS cost estimates, danger zones (meta-pretension, forced loops, over-labeling)"

---

**#45 (BLOCKING) -- First 1.5 viewports >= 3 distinct visual textures**
Source: File 15
Item: Within the first 1.5 viewports (~0-1350px at 1440px), the viewer MUST see >= 3 distinct visual textures. Binary, measurable threshold for operationalizing the 5-second test.
Status: NOT IN FILE 2. A1 mentions the 5-second test with "dark header authority + warm cream welcome" but no specific measurable texture threshold. NOT PRESENT.
Insertable: Add as S-17 or to builder self-check: "FAIL IF: first 1.5 viewports (0-1350px at 1440px) contain fewer than 3 distinct visual textures (e.g., callout + content block + transition/divider)."

---

**#50 (BLOCKING) -- Mid-pipeline metacognitive reviewer after Pass 2**
Source: File 17
Item: A third metacognitive reviewer (Opus) between Pass 2 and Pass 3. Receives HTML file only (zero build context). Answers: (1) How many mechanisms are VISIBLE? (2) Has spatial proportion degraded? (3) Does the page serve content or serve its own mechanisms?
Status: NOT IN FILE 2. C1 agent roster goes: Pass 2 Mechanism Builder -> Gate 3 -> Pass 3 Metaphor Builder. No mid-pipeline reviewer. MISSING.
Insertable: Add to C1 after Gate 3: "Mid-Pipeline Reviewer (Opus): Receives HTML file only. Answers: (1) How many mechanisms are VISIBLE? (2) Spatial proportion degraded from Pass 1? (3) Does page feel like it serves content or mechanisms? Output: 06-mid-pipeline-review.md."

---

**#54 (BLOCKING) -- Pre-flight checklist as consolidated section**
Source: File 18
Item: A consolidated binary pre-flight checklist for the team-lead before any agent begins building. 15+ items covering: content inventory, KB-01 through KB-05, enrichments applied, prompt length.
Status: NOT IN FILE 2. Requirements are distributed across B1-B10 (S-rules), C3 (kill criteria quick reference), and the appendix. C3 has "KILL CRITERIA QUICK REFERENCE" but it is not a pre-build checklist -- it is a gate-time reference. The integration log shows FLAG/FLAG2/FLAG3 changes from file 12, but none add a consolidated pre-flight checklist. MISSING.
Insertable: Add a "PRE-FLIGHT CHECKLIST (Team-Lead, before spawning any agent)" section before C1 or as a C0 section:
> "[ ] Content inventory exists (P-01 complete)  [ ] KB-01: 4+ content sections, 200+ words each  [ ] KB-02: content/zone >= 1.5  [ ] KB-03: predicted void <= 30%  [ ] KB-04: execution prompt <= 200 lines  [ ] KB-05: metaphor-soul conflict check passed (MG-03)  [ ] 7 BLOCKING enrichments applied to design system files"

---

### ALREADY FIXED

**#19 (BLOCKING) -- KB-02: Content/Zone ratio >= 1.5**
Gate 0 in C3: "Content/Zone >= 1.5." FIXED. Integration log: FLAG entry.

**#1 (HIGH borderline BLOCKING) -- PA question tier weighting**
C4: "TIER A QUESTIONS (highest diagnostic, 9/9 hit rate, 0% false positive): PA-01, PA-05, PA-09, PA-12, PA-13, PA-30, PA-32, PA-33, PA-35, PA-42. Findings on Tier A = report even at MINOR severity." FIXED. Integration log: FLAG3 entry.

**#4 (HIGH borderline BLOCKING) -- PA-09 auto-BLOCKING severity**
C4: "PA-09 finding = auto-BLOCKING." C5 gate questions: "PA-09 at CATASTROPHIC severity." FIXED. Integration log: FLAG3 entry.

---

## HIGH ITEMS

### STILL MISSING

**#5 (HIGH) -- B1 breathing zone exception 3-condition specifics**
S-12 states "2+ consecutive viewport positions below 30% = FAIL" but does NOT define the 3-condition exception for single breathing zones: (a) visible text content, (b) between two content-bearing sections, (c) no other breathing zone within 2 scroll positions. Documentation requirement also absent.
Insertable: Add to S-12: "Single breathing zone exception: (a) visible text content present, (b) between two content-bearing sections, (c) no other breathing zone within 2 scroll positions. Document: 'Breathing zone at [position] contains [description].'"

---

**#10 (HIGH) -- Gate failure response actions (5 specific remediation steps)**
Gate 1 says "Max 2 fix cycles. Fail after 2 = ABORT" but does not list the specific remediation actions available: (1) reduce zone count, (2) reduce padding values, (3) eliminate checkpoint transitions, (4) compress section spacing, (5) merge sparse sections.
Insertable: Add to Gate 1: "Fix actions: (1) reduce zone count, (2) reduce padding values, (3) eliminate checkpoint transitions, (4) compress section spacing, (5) merge sparse sections."

---

**#11 (HIGH) -- Rejection template: SCALE and WHAT IS PRESERVED fields missing**
C-12: "Format: mechanism name, intended location, reason for rejection." Only 3 of 5 fields. Missing: (4) PROPOSED SCALE (Page/Section/Component/Detail), (5) WHAT ABSENCE PRESERVES.
Insertable: Amend C-12 format: "mechanism name, intended location, PROPOSED SCALE (Page/Section/Component/Detail), reason for rejection, WHAT ABSENCE PRESERVES."

---

**#12 (HIGH) -- Worked rejection examples**
No exemplar rejection entries in C-12 or anywhere in FILE 2. The planner has no model for what a quality rejection entry looks like.
Insertable: Add 1 brief exemplar to C-12 or reference: "See 04-restraint-protocol.md for 3 worked examples (#7 Zone Background, #5 Dense/Sparse, #1 Border-Weight)."

---

**#14 (HIGH) -- Content type + reader intent classification vocabularies**
P-05 requires "content type change" and "reader intent change" for zone boundary qualification, but provides no vocabulary. Planners must invent their own categories.
Insertable: Add to P-01 or P-05: "Content types: NARRATIVE / REFERENCE / PROCEDURAL / CONCEPTUAL / MIXED. Reader intents: LEARN / BUILD / VERIFY / ORIENT / DECIDE / REFLECT."

---

**#17 (HIGH) -- Full message content templates for all checkpoints**
C2 has CP-A and CP-B as fill-in templates. CP-C ("SC-01: PASS/FAIL. [all 7].") and CP-D ("Mechanism count + spatial re-check result") and CP-E ("Confirmation + measurements") are abbreviated -- no fill-in field structure. PARTIALLY ADDRESSED but not complete.
Status: CP-A and CP-B have adequate templates. CP-C, CP-D, CP-E need fill-in field format. Still partially missing.

---

**#21 (HIGH) -- Decision tree for abort vs fix vs proceed**
C3 presents a linear gate sequence with "Max 2 fix cycles. Fail after 2 = ABORT" and "KILL CRITERIA." But no branching decision tree with explicit "if fails X, try Y, then Z, then ABORT" logic per criterion.
Insertable: Not strictly needed as a tree; adding specific fix actions per gate (see item #10) plus the kill criteria already in C3 addresses most of the gap.

---

**#29 (HIGH architectural) -- Intentionality designed in from Pass 0, not bolted on in Pass 4**
File 09 recommends the Content Architect (Pass 0) identify 1-2 self-reference opportunities and 1 bookending opportunity during content inventory. Currently intentionality is entirely in Pass 4.
Status: C1 Pass 0 Content Architect description does NOT include self-reference/bookending identification. STILL MISSING.
Insertable: Add to C1 Pass 0 Content Architect: "ALSO: Identify 1-2 self-reference opportunities and 1 bookending opportunity in content inventory. Document in 01-adapted-content.md."

---

**#43 (HIGH) -- Danger zones per dimension for intentionality builder**
File 14 identifies dimension-specific pitfalls: meta-pretension (self-reference), forced loops (bookending), over-labeling (meta-annotation). Not in FILE 2.
Status: Addressable via routing fix -- if File 14 is added to Section E (see item #42), this is covered since the file contains the danger zones.

---

**#44 (HIGH) -- Deliberate absence dimension connected to C-12 rejection log**
C-15 lists "deliberate absence" as one of 6 intentionality dimensions. C-12 is the rejection log operational rule. No explicit note connecting C-12 entries to C-15 satisfaction.
Insertable: Add note to C-15: "Deliberate absence dimension satisfied by C-12 rejection log with >= 5 entries documenting WHAT absence achieves (the 5th field)."

---

**#46 (HIGH) -- Scroll pacing thresholds per act**
A8 defines 5 acts by scroll percentage but provides no pacing requirements beyond "interest monotonically decreasing = failed page." No minimum density requirements per act.
Status: STILL MISSING. The "Every visual texture promised in Act 1 MUST recur" rule is present but no per-act density floor.

---

**#47 (HIGH) -- Header compositional spec**
S-03 constrains header to <= 20% of viewport. A1 mentions "dark header authority" in 5-second test description. But no formal rule specifying: dark background (#1A1A1A) + Instrument Serif title + sans-serif subtitle + ONE red accent element.
Insertable: Add to builder self-check or B2: "Header composition: dark background (#1A1A1A) + Instrument Serif display heading + Inter subtitle + ONE red accent element (3px border OR monospace meta-label). Height <= 20% viewport."

---

**#51 (HIGH) -- Mechanism perception auditor at Gate 3**
Gate 3 runs CP-01 through CP-04, MC self-check, transition checks. No fresh-eyes auditor counting VISIBLE (as opposed to deployed) mechanisms.
Insertable: Add to Gate 3: "Perception check: fresh-eyes agent views page, counts VISIBLE mechanisms (distinct from deployed count). If visible < 50% of deployed, FLAG for review."

---

**#52 (HIGH) -- Competitive build selection criteria**
C1 Pass 1: "Skeleton Builders A+B (Sonnet, competitive): 2 parallel, team-lead picks better." No selection criteria provided.
Insertable: Add to C1 Pass 1: "Selection criteria: (1) content-to-void ratio (primary), (2) section content diversity, (3) visual weight distribution. Pick skeleton with HIGHER content-to-void ratio unless the other scores materially better on criteria 2-3."

---

**#55 (HIGH) -- Calibration run recommendation**
File 18 strongly recommends a calibration run before the flagship experiment. Not in FILE 2.
Insertable: Add to team-lead coordination notes: "RECOMMENDED: Run ceiling-tier calibration with this prompt before flagship. Validates gate sequence and communication protocol."

---

**#61 (HIGH) -- Attention cost per rule type estimates**
Not in FILE 2. A6 captures the principle ("binary rules are cheap ~1 unit") but not the full estimates (formula = 2 units, judgment = 4 units, metaphor-derived = 6 units, interaction = 6-8 units).
Insertable: Add to team-lead notes: "Attention budget ~100 units. Binary rules ~1 unit. Formula rules ~2 units. Total demand should stay under 100."

---

**#62 (HIGH) -- Mechanism attention: 42% of budget for 14 mechanisms**
Not in FILE 2. C-02 sets the 12-14 target and 16 hard cap but without the attention-budget justification.
Status: STILL MISSING as explicit justification. Acceptable as implicit (the rule is present; the justification is conviction-layer material).

---

### ALREADY FIXED

**#28 (HIGH) -- FM-3 Phase 3.5 spatial obligation analysis**
MG-05 (spatial cost <= 15%) exists and is checked at Gate 4. Partially addressed. The explicit "before planner begins" sequencing is not formalized, but MG-05 forces the metaphor agent to compute spatial cost before the planner can proceed (Gate 0 includes MG gate). SUFFICIENTLY ADDRESSED.

**#30 / #35 (HIGH) -- Crown jewel technique catalog routing**
Section E Intentionality Builder reads "Crown jewel forensics (11-crown-jewel-forensics.md) -- 15 must-replicate techniques." FIXED.

**#34 (HIGH) -- Crown jewel technique catalog for intentionality builder**
Section E routes Intentionality Builder to File 11. FIXED.

**#40 (HIGH) -- CSS examples of 5 interaction types**
A5 contains a CD-006 worked example showing REINFORCING and CASCADING with specific CSS values. Section E routes Intentionality Builder to File 13 (compositional-fluency.md) which contains CSS examples for all 5 types. ADDRESSED via routing.

---

## PRIORITY RANKING OF STILL-MISSING ITEMS

Ordered by criticality for flagship execution:

| Priority | Item # | Issue | Risk if Missing |
|----------|--------|-------|-----------------|
| P1 | #9 | SC-01..SC-08 naming collision (Scale-Channel vs Spatial Confidence) | Agents will look up Gate 1 checks and find scale rules instead |
| P2 | #26 | Content weight check (3 elements + 2 types per section) | Sparse single-type sections pass S-05; void appears in audit |
| P3 | #42 | File 14 missing from Intentionality Builder reading list | Builder has no HOW for 6 dimensions; intentionality = performative |
| P4 | #45 | First 1.5 viewports >= 3 visual textures | 5-second test fails with no measurable threshold |
| P5 | #27 | Pass 2 re-run incomplete (missing S-10, S-12) | New mechanism CSS can create void that passes partial re-check |
| P6 | #8 | No estimation formulas for planner | Gate 0 computation impossible without pixel-height tools |
| P7 | #23 | Zone Necessity Test requires per-zone artifact | Performative zones pass without table |
| P8 | #20 | KB-05 soul conflict table missing from MG-03 | Metaphor agent performs vague soul check |
| P9 | #50 | No mid-pipeline metacognitive reviewer | Perception gap between mechanism deployment and metaphor |
| P10 | #54 | No consolidated pre-flight checklist | Team-lead must reconstruct 15 scattered requirements |
| P11 | #14 | No content type / reader intent vocabulary | P-05 zone boundary check is inconsistently applied |
| P12 | #11 | Rejection log missing 2 of 5 fields | SCALE and WHAT IS PRESERVED fields absent |
| P13 | #29 | Intentionality not designed in from Pass 0 | Self-reference opportunities missed until Pass 4 |
| P14 | #47 | No formal header compositional spec | Header varies by builder interpretation |
| P15 | #52 | No competitive build selection criteria | Team-lead picks skeleton by instinct |
| P16 | #51 | No mechanism perception auditor at Gate 3 | 14 deployed but 2 visible passes Gate 3 undetected |
| P17 | #5 | Breathing zone exception lacks 3 conditions | Builders unsure when single void is acceptable |
| P18 | #44 | C-12 not linked to C-15 deliberate absence | Dimension not credited when rejection log qualifies |

---

## QUICK COUNT

**BLOCKING items in FILE 1:** 11 pure BLOCKING + 3 HIGH-borderline-BLOCKING = 14 total
**Still missing:** 8 pure BLOCKING + 1 HIGH-borderline-BLOCKING = 9
**Fixed:** 3 pure BLOCKING + 2 HIGH-borderline-BLOCKING = 5

**HIGH items in FILE 1:** ~22 pure HIGH
**Still missing:** ~18
**Fixed:** ~4

**Grand total BLOCKING+HIGH still missing from FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md: ~27 of ~36**

The prompt has made excellent progress on conviction-layer content, PA routing (Tier A questions, PA-09 auto-BLOCKING), Gate 0 KB-02 ratio, and the crown jewel / compositional fluency reference routing. The largest remaining gaps are operational HOW-TO content (estimation formulas, zone necessity table, rejection template fields), the SC naming collision, the missing File 14 routing, and several mid-pipeline quality gates.

---

**END DELTA CHECK**
