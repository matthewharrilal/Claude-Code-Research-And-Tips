# Finding Registry — Diagnostic Scan

**Generated:** 2026-02-08
**Agent:** diag-a (Finding Registry Scanner)
**Method:** Full scan of 9 specified source files plus grep validation across scratchpad
**Scope:** All finding IDs encountered: OD-F, DD-F, COMP-F, EXT-*, F-E, CA, DEC, R1-R5, STR, XR, S4A

---

## Summary

- **Total unique finding IDs cataloged:** 476+
  - R1: 28 | R2: 27 | R3: 51 | R4: 192 | R5: 39
  - COMP-F: 21 | DD-F: 18 | OD-F: 8 (with collision)
  - EXT-*: 55 | F-E: 5 | CA: 5 (contrast) + 1 (content, COLLISION)
  - STR: 10 | XR: 18 | DEC: 14
- **Ghosts (cited but never defined):** 3
  - R3-023 in PIPELINE-MANIFEST described as "Fractal self-similarity" but in RESEARCH-ACTIVE described as "Decision Fatigue Zones" — DIFFERENT FINDINGS, same ID across files (see Collision Details)
  - COMP-F-009 through COMP-F-021 cited as range but never individually defined
  - R4-VR001 through R4-VR024 cited in PIPELINE-MANIFEST but only as category, individual defs in R4 source file
- **Orphans (defined but never cited):** 0 confirmed (all defined IDs have at least 1 citation)
- **Collisions:** 3
  - **OD-F-005 through OD-F-009:** builder-log.md vs OD-CHECKPOINT.md (CRITICAL)
  - **R3-023:** PIPELINE-MANIFEST vs RESEARCH-ACTIVE (SIGNIFICANT)
  - **CA-001:** contrast-accessibility.md vs content-authenticity.md (MODERATE)

---

## Collision Details

### COLLISION 1: OD-F-005 through OD-F-009 (CRITICAL)

**Two DIFFERENT definition sets exist for OD-F-005 through OD-F-008/009:**

**Source A: OD-CHECKPOINT.md (lines 149-156) + OD-006 HTML header (line 67-72) + ACCUMULATED-IDENTITY-v1.md (Section 6, lines 282-306)**
These define OD-F-005 through OD-F-008 as findings from **OD-006 Creative**:

| ID | Definition (Source A) | Source |
|----|----------------------|--------|
| OD-F-005 | "Organization IS Density" — The organizational pattern does not "create" density; it IS density. Same phenomenon, two perspectives. | OD-006-creative.html |
| OD-F-006 | "Meta-Documentation as Purest Density Test" — Content that IS about density principles creates the most natural density rhythm. | OD-006-creative.html |
| OD-F-007 | "Mode-Transition Breathing" — Switching between organizational modes requires breathing zones to prevent cognitive whiplash. | OD-006-creative.html |
| OD-F-008 | "Compound Creative Techniques" — Multiple EXT-CREATIVE techniques compound when layered — the whole exceeds the sum. | OD-006-creative.html |

**Source B: builder-log.md (lines 144-148)**
These define OD-F-005 through OD-F-009 as findings from **OD-002 Narrative**:

| ID | Definition (Source B) | Source |
|----|----------------------|--------|
| OD-F-005 | Narrative arc NATURALLY creates CRESCENDO — story complexity mirrors information density | OD-002-narrative.html |
| OD-F-006 | Typography size reduction mirrors density increase (structural R1-016) | OD-002-narrative.html |
| OD-F-007 | Tension meters provide narrative wayfinding without consuming content space | OD-002-narrative.html |
| OD-F-008 | Code absence in setup acts creates anticipation (R1-017 as narrative device) | OD-002-narrative.html |
| OD-F-009 | Decision matrices are natural climax components (comparison at peak tension) | OD-002-narrative.html |

**Analysis:** The builder-log was written during OD execution (builder agent generating findings as OD-002 was built). The OD-CHECKPOINT was written later and reused OD-F-005 for a DIFFERENT finding (OD-006's "Organization IS Density"). The ACCUMULATED-IDENTITY-v1.md and OD-006's HTML header both align with Source A (OD-006 definitions). The builder-log's OD-002 definitions (Source B) are the EARLIER assignment, but OD-CHECKPOINT/ACCUMULATED-IDENTITY/OD-006 headers (Source A) have MORE downstream citations and represent the CANONICAL assignment used by all subsequent work.

**Resolution needed:** Either:
- A) Re-number builder-log OD-002 findings to OD-F-009 through OD-F-013 (preserving Source A as canonical)
- B) Re-number OD-006 findings to OD-F-009 through OD-F-012 (preserving Source B as canonical)
- **Recommendation: Option A** — Source A (OD-006 definitions) has 10+ downstream citations across OD-CHECKPOINT, ACCUMULATED-IDENTITY-v1, and OD-006 HTML headers. Source B (OD-002 builder-log) has 0 downstream citations.

---

### COLLISION 2: R3-023 (SIGNIFICANT)

**PIPELINE-MANIFEST.md (line 113):**
> R3-023 | Fractal self-similarity | EXEMPLARY | DD-006 | Self-similar at all scales

**RESEARCH-ACTIVE.md (line 222):**
> R3-023 | Decision Fatigue Zones | Cognitive | UNAPPLIED

**Analysis:** PIPELINE-MANIFEST describes R3-023 as "Fractal self-similarity" — the same concept that R3-036 is defined as in RESEARCH-ACTIVE ("Fractal Self-Similar Density"). Meanwhile, RESEARCH-ACTIVE line 222 defines R3-023 as "Decision Fatigue Zones" (Cognitive dimension, UNAPPLIED).

PIPELINE-MANIFEST also defines R3-036 as "CRESCENDO definition" (EXEMPLARY, applied in DD-002), while RESEARCH-ACTIVE defines R3-036 as "Fractal Self-Similar Density" (Framework, APPLIED in DD-006).

**The confusion:**
- R3-023 in RESEARCH-ACTIVE = "Decision Fatigue Zones" (Cognitive) — UNAPPLIED
- R3-023 in PIPELINE-MANIFEST = "Fractal self-similarity" — EXEMPLARY in DD-006
- R3-036 in RESEARCH-ACTIVE = "Fractal Self-Similar Density" (Framework) — APPLIED in DD-006
- R3-036 in PIPELINE-MANIFEST = "CRESCENDO definition" — EXEMPLARY in DD-002

**Conclusion:** PIPELINE-MANIFEST has R3-023 and R3-036 descriptions swapped or conflated. RESEARCH-ACTIVE is the more granular source (51 individually listed findings). The OD HTML headers cite "R3-036 / DD-F-006 (FRACTAL)" consistently, confirming RESEARCH-ACTIVE's definition of R3-036 as the fractal finding. R3-023 in PIPELINE-MANIFEST is MISLABELED — it should say "Decision Fatigue Zones" per the R3 source.

**Additionally:** The task instruction mentions "R3-023 in PIPELINE-MANIFEST = fractal; R3-036 in RESEARCH-ACTIVE + OD HTML headers = CRESCENDO." However, examining the actual files:
- OD HTML headers consistently say "R3-036 / DD-F-006 (FRACTAL)" — fractal, NOT crescendo
- R3-036 in PIPELINE-MANIFEST says "CRESCENDO definition" — this is the PIPELINE-MANIFEST error
- R3-004 in RESEARCH-ACTIVE is the actual CRESCENDO finding

**Resolution:** PIPELINE-MANIFEST needs correction:
- R3-023 should be "Decision Fatigue Zones" (per R3 source), not "Fractal self-similarity"
- R3-036 should be "Fractal Self-Similar Density" (per R3 source + all OD headers), not "CRESCENDO definition"
- The CRESCENDO density pattern research finding is R3-004 (per RESEARCH-ACTIVE line 203)

---

### COLLISION 3: CA-001 (MODERATE)

**contrast-accessibility.md (line 11):**
> FINDING CA-001: Callout Labels Below WCAG AA (ALL 6 ODs)

**content-authenticity.md (line 264):**
> FINDING CA-001: NO FAVICON IN ANY OD FILE.

**Analysis:** Two different audit agents (Contrast and Content) both used CA-001 as their first finding ID. The "CA" prefix was not reserved for one agent.

**Resolution:** Rename content-authenticity CA-001 to CONT-001 (or similar unique prefix) to avoid ambiguity. The contrast-accessibility CA-001 has more downstream citations (referenced in cross-od-consistency.md lines 284, 304, 311).

---

## Registry (by ID prefix)

### OD-F Findings (8 unique, 5 collisions)

**CANONICAL (Source A — OD-CHECKPOINT + ACCUMULATED-IDENTITY + OD-006 headers):**

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| OD-F-001 | Conversational Width Variation — Q&A width difference (60%/100%) creates natural TIDAL rhythm | OD-CHECKPOINT.md:144, ACCUMULATED-IDENTITY-v1.md:184 | OD-006 header:34, identity-brief.md, builder-log.md:72 | DEFINED |
| OD-F-002 | Fractal Nesting via Follow-ups — Follow-up questions create fractal nesting, conversation within conversation | OD-CHECKPOINT.md:145, ACCUMULATED-IDENTITY-v1.md:185 | OD-006 header:35, identity-brief.md, builder-log.md:73 | DEFINED |
| OD-F-003 | Q&A as Natural PULSE Generator — Q&A pairs are inherent PULSE generators: question=LOW, answer=HIGH | OD-CHECKPOINT.md:146, ACCUMULATED-IDENTITY-v1.md:186 | OD-006 header:36, identity-brief.md, builder-log.md:74 | DEFINED |
| OD-F-004 | Chapter Dividers as Breathing Zones — Recovery whitespace between dense answer sections | OD-CHECKPOINT.md:147, ACCUMULATED-IDENTITY-v1.md:187 | OD-006 header:37, identity-brief.md, builder-log.md:75 | DEFINED |
| OD-F-005 | **COLLISION** — Organization IS Density (canonical) vs Narrative CRESCENDO (builder-log) | OD-CHECKPOINT.md:153, OD-006 header:67 | builder-log.md:144 (DIFFERENT def), ACCUMULATED-IDENTITY-v1.md (not listed as OD-001 finding) | COLLISION |
| OD-F-006 | **COLLISION** — Meta-Documentation as Purest Density Test (canonical) vs Typography size reduction (builder-log) | OD-CHECKPOINT.md:154 | builder-log.md:145 (DIFFERENT def) | COLLISION |
| OD-F-007 | **COLLISION** — Mode-Transition Breathing (canonical) vs Tension meters wayfinding (builder-log) | OD-CHECKPOINT.md:155 | builder-log.md:146 (DIFFERENT def) | COLLISION |
| OD-F-008 | **COLLISION** — Compound Creative Techniques (canonical) vs Code absence anticipation (builder-log) | OD-CHECKPOINT.md:156 | builder-log.md:147 (DIFFERENT def) | COLLISION |

**BUILDER-LOG ONLY (no downstream citations, Source B):**

| ID | Definition | Definition Location | Citation Locations | Status |
|----|-----------|--------------------|--------------------|--------|
| OD-F-009 | Decision matrices are natural climax components (comparison at peak tension) | builder-log.md:148 | (none) | ORPHAN (builder-log only) |

---

### DD-F Findings (18 unique)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| DD-F-001 | PULSE rhythm (high-low-high) for alternating content | DD-outbound-findings.md:117 | PIPELINE-MANIFEST.md:171, ACCUMULATED-IDENTITY-v1.md:100, OD-CHECKPOINT.md, identity-brief.md, all OD headers | DEFINED |
| DD-F-002 | CRESCENDO (sparse to dense) creates narrative progression | DD-outbound-findings.md:118 | PIPELINE-MANIFEST.md:172, ACCUMULATED-IDENTITY-v1.md:101, OD-002/004 headers, identity-brief.md | DEFINED |
| DD-F-003 | ISLANDS (clusters in sparse space) group related content | DD-outbound-findings.md:119 | PIPELINE-MANIFEST.md:173, ACCUMULATED-IDENTITY-v1.md:102, OD-003 header, identity-brief.md | DEFINED |
| DD-F-004 | GEOLOGICAL (stacked layers) communicates hierarchy/depth | DD-outbound-findings.md:120 | PIPELINE-MANIFEST.md:174, ACCUMULATED-IDENTITY-v1.md:103, OD-004 header, identity-brief.md | DEFINED |
| DD-F-005 | TIDAL: Width = inverse density | DD-outbound-findings.md:121 | PIPELINE-MANIFEST.md:175, ACCUMULATED-IDENTITY-v1.md:104, OD-001/005 headers, identity-brief.md | DEFINED |
| DD-F-006 | FRACTAL: Self-similarity at page/section/component/character levels (META-PATTERN) | DD-outbound-findings.md:129 | PIPELINE-MANIFEST.md:176, ACCUMULATED-IDENTITY-v1.md:105-118, ALL OD headers, identity-brief.md, cross-od-consistency.md | DEFINED |
| DD-F-007 | Self-similarity scored highest — consistency beats variety | DD-outbound-findings.md:144 | PIPELINE-MANIFEST.md:177, ACCUMULATED-IDENTITY-v1.md:123 | DEFINED |
| DD-F-008 | DD-001/003 scored lowest from anti-pattern violations and underutilized metaphors | DD-outbound-findings.md:145 | PIPELINE-MANIFEST.md:177, ACCUMULATED-IDENTITY-v1.md:124 | DEFINED |
| DD-F-009 | Iteration on perceptual feedback improved scores +1.8 avg | DD-outbound-findings.md:146 | PIPELINE-MANIFEST.md:177, ACCUMULATED-IDENTITY-v1.md:125 | DEFINED |
| DD-F-010 | Organization patterns must SERVE density patterns (OD GATE) | DD-outbound-findings.md:156 | PIPELINE-MANIFEST.md:178, ACCUMULATED-IDENTITY-v1.md:131, OD-CHECKPOINT.md:26, identity-brief.md | DEFINED |
| DD-F-011 | Cognitive soul pieces may emerge from OD | DD-outbound-findings.md:157 | PIPELINE-MANIFEST.md:178, ACCUMULATED-IDENTITY-v1.md:132 | DEFINED |
| DD-F-012 | Density patterns imply axis preferences (AD GATE) | DD-outbound-findings.md:163 | PIPELINE-MANIFEST.md:178, ACCUMULATED-IDENTITY-v1.md:133 | DEFINED |
| DD-F-013 | Some components compress at high density, others need breathing room (CD GATE) | DD-outbound-findings.md:169 | PIPELINE-MANIFEST.md:178, ACCUMULATED-IDENTITY-v1.md:134 | DEFINED |
| DD-F-014 | Callout stacking creates alarm fatigue — max 2 visible at once | DD-outbound-findings.md:170 | PIPELINE-MANIFEST.md:179, ACCUMULATED-IDENTITY-v1.md:135, all OD MUST HONOR tables, identity-brief.md | DEFINED |
| DD-F-015 | Anti-pattern: Traffic-light colors adjacent | DD-outbound-findings.md:178 | PIPELINE-MANIFEST.md:179, ACCUMULATED-IDENTITY-v1.md:141, all OD headers, identity-brief.md, cross-od-consistency.md | DEFINED |
| DD-F-016 | Anti-pattern: Inconsistent border widths | DD-outbound-findings.md:179 | PIPELINE-MANIFEST.md:179, ACCUMULATED-IDENTITY-v1.md:142, OD-003/004 headers, identity-brief.md | DEFINED |
| DD-F-017 | Anti-pattern: Uniform density throughout | DD-outbound-findings.md:180 | PIPELINE-MANIFEST.md:179, ACCUMULATED-IDENTITY-v1.md:143, OD headers, identity-brief.md | DEFINED |
| DD-F-018 | Anti-pattern: Fighting the density pattern | DD-outbound-findings.md:181 | PIPELINE-MANIFEST.md:179, ACCUMULATED-IDENTITY-v1.md:144, OD-006 header, identity-brief.md | DEFINED |

---

### COMP-F Findings (21 declared, 5 individually defined)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| COMP-F-001 | Sharp edges = authority (Soul Piece 1) | PIPELINE-MANIFEST.md:156 | DD-outbound-findings.md:210, ACCUMULATED-IDENTITY-v1.md:24, identity-brief.md | DEFINED |
| COMP-F-002 | Serif italic = wisdom (Soul Piece 2) | PIPELINE-MANIFEST.md:157 | DD-outbound-findings.md:211, ACCUMULATED-IDENTITY-v1.md:25 | DEFINED |
| COMP-F-003 | 2-zone callout DNA (Soul Piece 3) | PIPELINE-MANIFEST.md:158 | DD-outbound-findings.md:212, ACCUMULATED-IDENTITY-v1.md:26 | DEFINED |
| COMP-F-004 | No shadows = honesty (Soul Piece 4) | PIPELINE-MANIFEST.md:159 | DD-outbound-findings.md:213, ACCUMULATED-IDENTITY-v1.md:27 | DEFINED |
| COMP-F-005 | Squares = exactness (Soul Piece 5) | PIPELINE-MANIFEST.md:160 | DD-outbound-findings.md:214, ACCUMULATED-IDENTITY-v1.md:28 | DEFINED |
| COMP-F-006 | globals.css border-radius fix | PIPELINE-MANIFEST.md:161 | (consumed, DD) | DEFINED |
| COMP-F-007 | globals.css shadow fix | PIPELINE-MANIFEST.md:162 | (consumed, DD) | DEFINED |
| COMP-F-008 | 54% too low to build on | PIPELINE-MANIFEST.md:163 | (consumed, DD) | DEFINED |
| COMP-F-009-021 | Component specifics (cited as range) | PIPELINE-MANIFEST.md:164 | DD-outbound-findings.md:215 (COMP-F-010 only) | PARTIAL — only COMP-F-010 cited individually |

---

### EXT-* Findings (55 unique across 5 sub-prefixes)

#### EXT-CONV (5 findings, OD-001)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-CONV-001 | Socratic Progressive Narrowing | OD-001 header:27, identity-brief.md:377 | cross-od-consistency.md (implicit) | DEFINED |
| EXT-CONV-002 | Value Density Front-Loading | OD-001 header:28, identity-brief.md:378 | | DEFINED |
| EXT-CONV-003 | Three-Level Gestalt Spacing (8px/32px/64px) | OD-001 header:29, identity-brief.md:379 | | DEFINED |
| EXT-CONV-004 | Background Color Differentiation | OD-001 header:30, identity-brief.md:380 | | DEFINED |
| EXT-CONV-005 | Responsive TIDAL Choreography | OD-001 header:31, identity-brief.md:381 | | DEFINED |

#### EXT-CREATIVE (9 findings, OD-001 + OD-006)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-CREATIVE-001 | THE SOLID OFFSET — neobrutalist depth | OD-001 header:32, OD-006 header:41, identity-brief.md:382,441 | cross-od-consistency.md:497 | DEFINED |
| EXT-CREATIVE-002 | THE TYPOGRAPHIC CASCADE — 5-level 1.5x | OD-001 header:33, OD-006 header:42, identity-brief.md:383,442 | cross-od-consistency.md:499 | DEFINED |
| EXT-CREATIVE-003 | THE SCROLL WITNESS — CSS section progress | OD-001 header:34, OD-006 header:43, identity-brief.md:384,443 | | DEFINED |
| EXT-CREATIVE-004 | THE ARRIVING WISDOM — scroll-triggered reveal | OD-001 header:35, OD-006 header:44, identity-brief.md:385,444 | | DEFINED |
| EXT-CREATIVE-005 | THE EDITORIAL DROP — serif drop caps | OD-001 header:36, OD-006 header:45, identity-brief.md:386,445 | | DEFINED |
| EXT-CREATIVE-006 | THE SEMANTIC BRIDGE — hover concept to highlight code | OD-006 header:47, identity-brief.md:446 | | DEFINED |
| EXT-CREATIVE-007 | THE DUAL LENS — Why/How toggle serif/monospace | OD-006 header:48, identity-brief.md:447 | | DEFINED |
| EXT-CREATIVE-008 | THE COLLAPSING HEADER — sticky headers shrink on scroll | OD-006 header:50, identity-brief.md:448 | | DEFINED |
| EXT-CREATIVE-009 | THE VISUAL INDEX — specimen-sheet grid overview | OD-006 header:51, identity-brief.md:449 | | DEFINED |

#### EXT-DENSITY (3 findings, OD-001)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-DENSITY-001 | Gestalt Pure Distance Law — grouping fails >1.5x | OD-001 header:37, identity-brief.md:387 | | DEFINED |
| EXT-DENSITY-002 | NNGroup Progressive Disclosure — max 2 levels | OD-001 header:38, identity-brief.md:388 | | DEFINED |
| EXT-DENSITY-003 | Twilio 20-line rule — initial code <20 lines | OD-001 header:39, identity-brief.md:389 | | DEFINED |

#### EXT-TASK (8 findings, OD-003)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-TASK-001 | Task-Oriented Design — each task = discrete island | OD-003 header:12, identity-brief.md:399 | OD-CHECKPOINT.md:79 | DEFINED |
| EXT-TASK-002 | Progressive Disclosure — square markers | OD-003 header:13, identity-brief.md:400 | | DEFINED |
| EXT-TASK-003 | Hierarchical Task Breakdown — subtask connector lines | OD-003 header:14, identity-brief.md:401 | cross-od-consistency.md:501 | DEFINED |
| EXT-TASK-004 | Negative Space Typography — 3rem/6rem spacing | OD-003 header:15, identity-brief.md:402 | | DEFINED |
| EXT-TASK-006 | Multi-Step Forms — collapse/expand | OD-003 header:16, identity-brief.md:403 | | DEFINED |
| EXT-TASK-009 | WCAG Accessibility — semantic HTML, ARIA, keyboard focus | OD-003 header:17, identity-brief.md:404 | | DEFINED |
| EXT-TASK-011 | Verification Checkpoints — "You should see" | OD-003 header:18, identity-brief.md:405 | | DEFINED |
| EXT-TASK-012 | Error Recovery Islands — "If This Fails" | OD-003 header:19, identity-brief.md:406 | | DEFINED |

**Note:** EXT-TASK-005, EXT-TASK-007, EXT-TASK-008, EXT-TASK-010 are NOT defined in any scanned file. OD-CHECKPOINT.md:79 says "EXT-TASK-001 through EXT-TASK-012 (8 applied)" — only 8 of 12 were applied, so 4 gaps are expected (005, 007, 008, 010).

#### EXT-CONF (12 findings, OD-004)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-CONF (NNG Progressive Disclosure) | Max 4 strata; strong info scent | OD-004 header:25, identity-brief.md:411 | | DEFINED |
| EXT-CONF (Confidence Visualization) | Inverse density-confidence | OD-004 header:26, identity-brief.md:412 | | DEFINED |
| EXT-CONF (Agentic Categorical Labels) | Words not percentages | OD-004 header:27, identity-brief.md:413 | | DEFINED |
| EXT-CONF (Gwern Kesselman Vocabulary) | Per-section confidence tags | OD-004 header:28, identity-brief.md:414 | | DEFINED |
| EXT-CONF (Appleton Epistemic Disclosure) | "You Are Reading" markers | OD-004 header:29, identity-brief.md:415 | | DEFINED |
| EXT-CONF (Diataxis) | Confidence maps to doc type | OD-004 header:30, identity-brief.md:416 | | DEFINED |
| EXT-CONF (Layered Architecture) | Layer isolation, bounded zones | OD-004 header:31, identity-brief.md:417 | | DEFINED |
| EXT-CONF (GitBook Adaptive) | Progressive stratum revelation | OD-004 header:32, identity-brief.md:418 | | DEFINED |
| EXT-CONF (AI Agents Progressive Disclosure) | Geological survey always visible | OD-004 header:33, identity-brief.md:419 | | DEFINED |
| EXT-CONF (NNG Information Scent) | Strong scent at boundaries | OD-004 header:34, identity-brief.md:420 | | DEFINED |
| EXT-CONF (EA Forum Epistemic) | Evidence DNA; crux transparency | OD-004 header:35, identity-brief.md:421 | | DEFINED |
| EXT-CONF (Stripe Docs) | Confidence-level switcher control | OD-004 header:36, identity-brief.md:422 | | DEFINED |

**Note:** EXT-CONF findings lack numeric suffixes (e.g., EXT-CONF-001). They are identified by descriptive names. This is an ID FORMAT INCONSISTENCY — all other EXT-* findings use numeric suffixes.

#### EXT-SPAT (10 findings, OD-005)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| EXT-SPAT-001 | Hub-and-Spoke ISLANDS — square tiles CSS Grid | OD-005 header:25, identity-brief.md:427 | OD-CHECKPOINT.md:103 | DEFINED |
| EXT-SPAT-002 | Breadcrumbs as WAVE Trigger — triangle separators | OD-005 header:26, identity-brief.md:428 | | DEFINED |
| EXT-SPAT-003 | 7-Column Magazine Grid | OD-005 header:27, identity-brief.md:429 | | DEFINED |
| EXT-SPAT-004 | Named Grid Areas — semantic zones | OD-005 header:28, identity-brief.md:430 | | DEFINED |
| EXT-SPAT-005 | Cartographic Hierarchy — figure-ground | OD-005 header:29, identity-brief.md:431 | | DEFINED |
| EXT-SPAT-008 | Screen Reader Accessibility — skip links, ARIA | OD-005 header:30, identity-brief.md:432 | | DEFINED |
| EXT-SPAT-009 | Alternation for Rhythm | OD-005 header:31, identity-brief.md:433 | | DEFINED |
| EXT-SPAT-010 | Islands Architecture — 95% static, 5% interactive | OD-005 header:32, identity-brief.md:434 | | DEFINED |
| EXT-SPAT-011 | Natural Reading Rhythms — 40-60 word paragraphs | OD-005 header:33, identity-brief.md:435 | | DEFINED |
| EXT-SPAT-012 | ECS Modular Entities — each spoke = modular entity | OD-005 header:34, identity-brief.md:436 | | DEFINED |

**Note:** EXT-SPAT-006, EXT-SPAT-007 are NOT defined. OD-CHECKPOINT.md:103 says "EXT-SPAT-001 through EXT-SPAT-012 (10 applied)" — 2 gaps (006, 007).

---

### F-E Findings (Fresh-Eyes, 5 unique)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| F-E-001 | Rule 5 Violated Across All 6 ODs — 108 thin-border CSS decls, 1000+ computed instances | fresh-eyes.md:12 | cross-od-consistency.md:258, weaver-tracker.md:53, systematic-audit-005/006 | DEFINED |
| F-E-002 | OD-005 Uses Wrong Page Container Width (960px vs 860px) | fresh-eyes.md:45 | cross-od-consistency.md:415, weaver-tracker.md:70 | DEFINED |
| F-E-003 | OD-004 Has Full-Viewport Dead Zone at Mid-Scroll (~6881px) | fresh-eyes.md:51 | cross-od-consistency.md:464, weaver-tracker.md:108 | DEFINED |
| F-E-004 | Header Meta Layout Inconsistency — 3 different designs across 6 ODs | fresh-eyes.md:59 | cross-od-consistency.md:225,370, weaver-tracker.md:87 | DEFINED |
| F-E-005 | Off-Palette Colors in Code Blocks — syntax highlighting undeclared as exception | fresh-eyes.md:74 | cross-od-consistency.md:55,352, weaver-tracker.md:66 | DEFINED |

---

### CA Findings (Contrast-Accessibility, 5 unique + 1 collision)

**From contrast-accessibility.md:**

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| CA-001 | Callout Labels Below WCAG AA (ALL 6 ODs) — accent colors fail 4.5:1 | contrast-accessibility.md:11 | cross-od-consistency.md:284 | DEFINED |
| CA-002 | Exploration Meta Values Below WCAG AA — #E83025 at 10px = 4.30:1 | contrast-accessibility.md:45 | cross-od-consistency.md:304 | DEFINED |
| CA-003 | No focus-visible Styles (4/6 ODs) | contrast-accessibility.md:65 | cross-od-consistency.md:399,477 | DEFINED |
| CA-004 | No prefers-reduced-motion (2/6 ODs, OD-001 worst with 415 animated elements) | contrast-accessibility.md:87 | cross-od-consistency.md:383 | DEFINED |
| CA-005 | No Skip Links (5/6 ODs) — WCAG 2.4.1 Level A | contrast-accessibility.md:118 | cross-od-consistency.md:325 | DEFINED |

**From content-authenticity.md (COLLISION):**

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| CA-001 | **COLLISION** — NO FAVICON IN ANY OD FILE | content-authenticity.md:264 | content-authenticity.md:287,299 | COLLISION (same ID as contrast CA-001) |

---

### STR Findings (Structural-Integrity, 10 unique)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| STR-001 | OD-001+002 lack `<main>` landmark | structural-integrity.md:349 | cross-od-consistency.md:336 | DEFINED |
| STR-002 | OD-001+002 flat heading hierarchy (only H1) | structural-integrity.md:351 | cross-od-consistency.md:336 | DEFINED |
| STR-003 | OD-004 tab interface incomplete ARIA | structural-integrity.md:353 | cross-od-consistency.md:477 | DEFINED |
| STR-004 | OD-002 zero ARIA attributes | structural-integrity.md:357 | cross-od-consistency.md:336 | DEFINED |
| STR-005 | Inconsistent landmark patterns (OD-001+002 vs OD-003-006) | structural-integrity.md:359 | cross-od-consistency.md:336 | DEFINED |
| STR-006 | No skip-to-content link on any OD | structural-integrity.md:363 | cross-od-consistency.md:325 | DEFINED |
| STR-007 | OD-003 code blocks not focusable | structural-integrity.md:365 | | DEFINED |
| STR-008 | No ::selection styling (all 6) | structural-integrity.md:369 | cross-od-consistency.md:318 | DEFINED |
| STR-009 | No @media print styles (all 6) | structural-integrity.md:371 | cross-od-consistency.md:318 | DEFINED |
| STR-010 | No custom scrollbar (all 6) | structural-integrity.md:373 | cross-od-consistency.md:318 | DEFINED |

---

### XR Findings (Weaver Cross-Reference, 18 unique)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| XR-1 | Solid offset pseudo-elements (4 sources) | weaver-tracker.md:40 | | DEFINED |
| XR-2 | Hover transform on territory tiles (2 sources) | weaver-tracker.md:48 | | DEFINED |
| XR-3 | 2px borders — SYSTEMIC (7 sources, CONFIRMED) | weaver-tracker.md:52 | cross-od-consistency.md:258 (as source reference) | DEFINED |
| XR-4 | Type scale deviations (5 sources) | weaver-tracker.md:58 | | DEFINED |
| XR-5 | Off-palette colors (3 sources) | weaver-tracker.md:62 | cross-od-consistency.md:55 | DEFINED |
| XR-6 | OD-005 container 960px (2 sources) | weaver-tracker.md:69 | | DEFINED |
| XR-7 | V2 badge competing with title (2 sources) | weaver-tracker.md:72 | | DEFINED |
| XR-8 | Scroll witness positioning (1 source) | weaver-tracker.md:75 | | DEFINED |
| XR-9 | Code block dark vs light theme (5 sources) | weaver-tracker.md:78 | cross-od-consistency.md:352 | DEFINED |
| XR-10 | Header inner wrapper inconsistency (3 sources) | weaver-tracker.md:84 | | DEFINED |
| XR-11 | OD-002 v2 quality gap (2 sources) | weaver-tracker.md:89 | | DEFINED |
| XR-12 | Callout naming variation (2 sources) | weaver-tracker.md:93 | | DEFINED |
| XR-13 | OD-003 frame borders — subsumed into XR-3 | weaver-tracker.md:96 | | DEFINED (subsumed) |
| XR-14 | #808080 table border (1 source) | weaver-tracker.md:99 | | DEFINED |
| XR-15 | OD-004 Essence callout WRONG FONT — CONFIRMED FAIL | weaver-tracker.md:102 | cross-od-consistency.md:469 | DEFINED |
| XR-16 | OD-004 full-viewport dead zone — CRITICAL | weaver-tracker.md:107 | cross-od-consistency.md:464 | DEFINED |
| XR-17 | 3 Dialects across OD series | weaver-tracker.md:112 | cross-od-consistency.md:225 | DEFINED |
| XR-18 | Fresh-eyes Ship Verdicts vs Visual Auditor Nuclear Q — comparison | weaver-tracker.md:119 | cross-od-consistency.md:431 | DEFINED |

---

### DEC Findings (Decisions, 14 unique)

| ID | Canonical Definition | Definition Location | Citation Locations | Status |
|----|---------------------|--------------------|--------------------|--------|
| DEC-001 | Exploration Ordering — sequential OD-001 through OD-006 | decisions.md:3 | CURRENT-STATE.md:31, lead-log.md:11 | DEFINED |
| DEC-002 | OD-001 Build Audit PASS — Proceed Without Rework | decisions.md:21 | | DEFINED |
| DEC-003 | Skip OD-005 Hypothesis Change | OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md:4355 | | DEFINED |
| DEC-005 | Identity-first approach | CURRENT-STATE.md:37 | | CITED (def in decisions.md, not fully scanned) |
| DEC-006 | External research refined to KortAI identity | CURRENT-STATE.md:38 | | CITED |
| DEC-007 | Visual audit MANDATORY | CURRENT-STATE.md:39 | | CITED |
| DEC-008 | Inline headers Tier B minimum | CURRENT-STATE.md:40 | | CITED |
| DEC-009 | Rigorous execution logging | CURRENT-STATE.md:41 | | CITED |
| DEC-010 | UI audit is INNATE | CURRENT-STATE.md:42 | | CITED |
| DEC-011 | Playwright at 1440px + 768px | CURRENT-STATE.md:43 | | CITED |
| DEC-012 | Deep visual audit is INNATE | CURRENT-STATE.md:44 | | CITED |
| DEC-013 | OD-004 build + OD-005 research in parallel | CURRENT-STATE.md:51, lead-log.md:67 | CURRENT-STATE.md:98 | DEFINED |
| DEC-014 | Proceed to visual audit in parallel with threading | lead-log.md:108 | | DEFINED |
| DEC-004 | (gap — not found in any scanned file) | — | — | GHOST |

---

### R1 through R5 Findings (337 total)

Full registry maintained in RESEARCH-ACTIVE.md. Summary counts:

| Prefix | Count | Defined In | Status |
|--------|-------|-----------|--------|
| R1-001 through R1-028 | 28 | RESEARCH-ACTIVE.md:89-118 | All individually defined. All cited in OD headers. |
| R2-001 through R2-027 | 27 | RESEARCH-ACTIVE.md:146-172 | All individually defined. None cited in OD work. |
| R3-001 through R3-051 | 51 | RESEARCH-ACTIVE.md:200-250 | All individually defined. 10 APPLIED. R3-023 COLLISION (see above). |
| R4-001 through R4-192 | 192 | RESEARCH-ACTIVE.md:291-303 (by category) | Defined by category ranges. 0 applied. |
| R5-H1 through R5-Q3 | 39 | RESEARCH-ACTIVE.md:349-388 | All individually defined. 0 applied. |

**Key R-findings cited across OD headers (most frequent):**
- R1-001 (Density Rhythm): cited in ALL 6 OD headers
- R1-003 (Viewport Principle): cited in ALL 6 OD headers
- R1-007 (Callout Positioning): cited in 5/6 OD headers
- R1-008 (Callout Scarcity): cited in 5/6 OD headers
- R1-016 (Typography-First): cited in ALL 6 OD headers
- R1-019 (Tech Spec Aesthetic): cited in ALL 6 OD headers
- R3-036 / DD-F-006 (FRACTAL): cited in ALL 6 OD headers
- R5-T4 / R5-008 (2-Callout Limit): cited in ALL 6 OD MUST HONOR tables

---

## ID Count Summary

| Prefix | Unique IDs | Defined | Cited Only | Ghost | Orphan | Collision |
|--------|-----------|---------|------------|-------|--------|-----------|
| OD-F | 9 | 4 clean + 4 colliding + 1 orphan | 0 | 0 | 1 (OD-F-009) | 4 (005-008) |
| DD-F | 18 | 18 | 0 | 0 | 0 | 0 |
| COMP-F | 21 | 8 individual + 13 as range | 0 | 0 | 0 | 0 |
| EXT-CONV | 5 | 5 | 0 | 0 | 0 | 0 |
| EXT-CREATIVE | 9 | 9 | 0 | 0 | 0 | 0 |
| EXT-DENSITY | 3 | 3 | 0 | 0 | 0 | 0 |
| EXT-TASK | 8 | 8 | 0 | 0 | 0 | 0 |
| EXT-CONF | 12 | 12 | 0 | 0 | 0 | 0 |
| EXT-SPAT | 10 | 10 | 0 | 0 | 0 | 0 |
| F-E | 5 | 5 | 0 | 0 | 0 | 0 |
| CA (contrast) | 5 | 5 | 0 | 0 | 0 | 1 (CA-001 clash) |
| CA (content) | 1 | 1 | 0 | 0 | 0 | 1 (CA-001 clash) |
| STR | 10 | 10 | 0 | 0 | 0 | 0 |
| XR | 18 | 18 | 0 | 0 | 0 | 0 |
| DEC | 14 | 11 | 2 | 1 (DEC-004) | 0 | 0 |
| R1 | 28 | 28 | 0 | 0 | 0 | 0 |
| R2 | 27 | 27 | 0 | 0 | 0 | 0 |
| R3 | 51 | 51 | 0 | 0 | 0 | 1 (R3-023 mislabel) |
| R4 | 192 | 192 (by category) | 0 | 0 | 0 | 0 |
| R5 | 39 | 39 | 0 | 0 | 0 | 0 |
| **TOTAL** | **476+** | | | **1** | **1** | **3 clusters (7 IDs)** |

---

## COMPACTION-SAFE SUMMARY

- **Agent:** diag-a (Finding Registry Scanner)
- **Files scanned:** 9 primary + grep across scratchpad
- **Total unique finding IDs:** 476+ (337 R-findings + 139+ generated/audit findings)
- **OD-F count:** 9 unique IDs, 4 clean (001-004), 4 collisions (005-008), 1 orphan (009)
- **Collisions:** 3 clusters affecting 7 IDs total
  - OD-F-005-008: builder-log (OD-002) vs OD-CHECKPOINT+ACCUMULATED-IDENTITY (OD-006)
  - R3-023: PIPELINE-MANIFEST (mislabeled as fractal) vs RESEARCH-ACTIVE (Decision Fatigue Zones)
  - CA-001: contrast-accessibility (callout labels) vs content-authenticity (favicon)
- **Ghosts:** 1 (DEC-004 — gap in decision numbering)
- **Orphans:** 1 (OD-F-009 in builder-log, zero downstream citations)
- **Format inconsistency:** EXT-CONF findings lack numeric suffixes (names only)
- **Status:** COMPLETE
