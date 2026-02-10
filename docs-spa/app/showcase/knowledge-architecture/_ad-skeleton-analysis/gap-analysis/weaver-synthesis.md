# WEAVER SYNTHESIS: Definitive Cross-Reference of All 14 Gap Analysis Files

**Author:** Weaver
**Date:** 2026-02-09
**Scope:** Cross-reference 7 analyst reports + 7 auditor reports to produce the unified gap picture
**Total input:** ~6,200 lines across 14 files (analysts: ~4,075 lines; auditors: ~1,787 lines)

---

## SECTION 1: CROSS-REFERENCES (Same Finding from Multiple Agents)

### XR-01: Builder Incremental Finding Writing Is Untested [CRITICAL]

**Finding:** The skeleton assumes builders can stop HTML construction mid-build, assign a finding ID, write a formal 7-field entry in AD-outbound-findings.md, and resume building. Zero historical evidence supports this.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Provenance Analyst | GAP-PC-07 | HIGH — "ZERO evidence in OD that builders can interrupt HTML construction" |
| Provenance Auditor | CONFIRMED | "This is arguably the most critical gap in the entire analysis" |
| Retrospective Miner | Blind Spot #4 | "Mode C has NEVER been tested during construction" |
| Retrospective Auditor | VERIFIED | "No historical data on builder context-switching for findings" |
| Enrichment Architect | GAP-E07 (related) | Scribes did the formal writing in OD, not builders |
| Verification Designer | (implicit) | Provenance Auditor PA-01/02 will catch failures but not prevent them |

**Auditor Status:** All auditors CONFIRMED. Provenance Auditor UPGRADED from HIGH to CRITICAL.
**Confidence Level:** VERY HIGH (6 sources)
**Resolution Needed:** Add fallback protocol — if builders fail to write findings, deploy per-wave scribe agents to extract findings from HTML CSS comment headers.

---

### XR-02: File Contention for Simultaneous Writes [CRITICAL]

**Finding:** Within a build wave, two builders running simultaneously could both attempt to write to AD-outbound-findings.md. The Write tool atomically replaces file contents, causing the second write to silently destroy the first's data.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Provenance Analyst | GAP-PC-09 | HIGH (analyst rated) |
| Provenance Auditor | UPGRADED to CRITICAL | "Silent data loss on findings is catastrophic" |
| Enrichment Architect | (implicit in GAP-E07) | Scribes wrote sequentially in OD, avoiding this problem |
| Retrospective Miner | (implicit) | Per-file ownership eliminated contention for fixers (Team 3) |

**Auditor Status:** CONFIRMED and UPGRADED from HIGH to CRITICAL by auditor.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Per-builder scratch files (`findings-builder-{A|B}.md`). Lead/scribe merges between waves.

---

### XR-03: Convention Freezing Before Validation [CRITICAL]

**Finding:** The skeleton freezes AD-CONVENTION-SPEC.md after Phase 0, but AD conventions are written BEFORE any exploration exists. If the spec contains an error, all 6 builders replicate it.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Enrichment Architect | GAP-E02 | CRITICAL — "Freezing untested axis-geometry conventions risks locking in wrong decisions" |
| Enrichment Auditor | CONFIRMED | "correct diagnosis, incomplete prescription" |
| Retrospective Miner | Blind Spot #3 | "A convention spec ERROR propagates to all 6 builders with no intermediate check" |
| Retrospective Auditor | VERIFIED | "Valid concern — single point of failure" |
| Identity Cycle Analyst | GAP-IC-02 (related) | Convention Agent receives full 577-line identity; misunderstanding propagates |
| Identity Cycle Auditor | Missed Gap C | "Convention Agent as Identity Bottleneck — single-point-of-failure risk" |

**Auditor Status:** All auditors CONFIRMED.
**Confidence Level:** VERY HIGH (6 sources)
**Resolution Needed:** Two-phase convention lifecycle: DRAFT in Phase 0, VALIDATE after Wave 1A, FROZEN after Wave 1B. Split template into LOCKED layer (soul CSS, immutable) + AXIS layer (builder-authored, convention-compliant).

---

### XR-04: No Identity-Research Challenge Protocol [CRITICAL]

**Finding:** The skeleton has no protocol for what happens when research CONTRADICTS identity. The OD evidence shows the most valuable findings RESOLVED tensions (geological depth via border weight), yet the skeleton assumes all research either passes soul test or fails.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Research Loop Analyst | GAP 1 (ranked #1 of 10) | CRITICAL — "single most critical gap in the identity-research cycle" |
| Research Loop Auditor | CONFIRMED with nuance | "15% coverage (fresh-eyes exists as informal challenge) not 0%" |
| Identity Cycle Analyst | GAP-IC-03 (ranked #1 of 7) | HIGH — "Without a protocol, confirmation bias or novelty bias" |
| Identity Cycle Auditor | CONFIRMED | "Extends to intra-identity tensions" (Missed Gap A) |

**Auditor Status:** Both auditors CONFIRMED. Research Loop Auditor corrects 0% to ~15% coverage but validates the gap.
**Confidence Level:** VERY HIGH (4 sources)
**Resolution Needed:** CLASS A/B/C challenge protocol: Soul piece challenges = IMMUTABLE (reject or adapt); Derived constraint challenges = ESCALATE TO LEAD; Empirical claim challenges = DESIGN A DISCRIMINATING TEST.

---

### XR-05: R-2 Structural Orphaning (0% Applied Across 3+ Stages) [HIGH]

**Finding:** R-2 Creative Layouts has 27 findings at 0% consumption across DD, OD build, OD audit, and OD re-enrichment. The evaluation was produced as a standalone document structurally disconnected from builder research packages.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Research Loop Analyst | GAP 3 (ranked #3 of 10) | HIGH — "three-layer pathology: designation gap, evaluation without integration, no binary gate" |
| Research Loop Auditor | CONFIRMED | "The anti-orphaning rule is the analysis's best fix" |
| Provenance Analyst | GAP-PC-10 (related) | R-2 count inconsistency (78 vs 27) |
| Chain Layer Auditor | MISSED-1 | BACKBONE.md still says 78 in TWO places (stale) |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** R-2 findings EMBEDDED in each per-AD research package (not separate document). Binary gate: each research package contains >= 4 R-2 findings. Anti-orphaning rule: every evaluation must be CONSUMED by a downstream document.

---

### XR-06: No Explicit Layer Architecture Definition [HIGH]

**Finding:** The provenance chain operates at 8-9 functional layers across 25+ files, but the skeleton never names, defines, or documents these layers. Without explicit layers, agents treat all provenance files as equivalent.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Chain Layer Analyst | GAP-CL-01 (ranked #1) | CRITICAL — "the skeleton proposes 17+ files but NEVER defines the layer architecture" |
| Chain Layer Auditor | CONFIRMED | "the layer taxonomy is a genuine contribution" |
| Provenance Analyst | GAP-PC-01 (related) | "5 layers, not the 2-3 the skeleton implies" |
| Provenance Auditor | CONFIRMED PC-01 but DISPUTED 5-layer count | "analyst's 5-layer model vs OD's documented 3-layer model" |

**Auditor Status:** Confirmed by chain layer auditor. Provenance auditor confirmed the gap but disputed the exact count (5 vs 3 vs 8-9 layers).
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Add a LAYER ARCHITECTURE section (30-50 lines) to the skeleton defining all functional layers, their files, and traversal semantics. The chain layer analyst's proposed section (lines 509-549 of chain-layers-gaps.md) is ready for adoption.

---

### XR-07: Static Research Guidance That Never Evolves [HIGH]

**Finding:** The skeleton's research guidance table (Section 3.6) is written once and never updated between waves, despite OD evidence that the most valuable research emerged when search queries evolved based on prior wave discoveries.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Research Loop Analyst | GAP 2 (ranked #2 of 10) | HIGH — "mechanism by which identity deltas CHANGE researcher behavior is missing" |
| Research Loop Auditor | CONFIRMED | "Strong proposal but check prompt budget" |
| Identity Cycle Analyst | GAP-IC-01 (ranked #2) | "no identity-constraint map for research filtering" |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (3 sources)
**Resolution Needed:** Dynamic Research Guidance Protocol: each identity delta includes REVISED RESEARCH GUIDANCE section for next wave. Identity lens document (DO search for / DO NOT search for).

---

### XR-08: Enrichment Layers Not Enumerated [HIGH]

**Finding:** A fully-enriched exploration HTML file contains 8 distinct enrichment layers (Research Application Record, inline threading header, :root block, base styles, research citations, finding ID citations, version badge, fractal compliance). The skeleton mentions some but never provides a complete checklist.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Enrichment Architect | GAP-E06 (ranked as CRITICAL in "MUST FIX") | "defines what a complete document contains" |
| Enrichment Auditor | CONFIRMED | "The 8-layer enumeration is something the skeleton badly needed" |
| Chain Layer Analyst | Layer 8 (related) | Describes 3 sub-layers of distributed provenance |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (3 sources)
**Resolution Needed:** AD ENRICHMENT LAYER CHECKLIST embedded in every builder prompt (8 items, binary checks).

---

### XR-09: Inline Threading Header Format Unspecified [HIGH]

**Finding:** The skeleton's Gate W-02 checks "Each file has INLINE THREADING HEADER" but provides zero guidance on format: which sections, what content, how dependency tables work.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Provenance Analyst | GAP-PC-01 | HIGH — "Without specifying L1/L2 format, AD agents will write ad-hoc headers" |
| Provenance Auditor | CONFIRMED | Corrected section count from "10" to "7 populated sections numbered up to 10" |
| Chain Layer Analyst | Layer 8 | Describes the inline header as having structured WHY/STATUS/BUILT ON/CONSUMED BY |
| Enrichment Architect | GAP-E06 Layer 2 | Inline threading header = "9-section format" |

**Auditor Status:** CONFIRMED with factual correction on section count.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Specify the 7-section inline header template (WHY EXISTS, QUESTION ANSWERED, STATUS, BUILT ON, MUST HONOR, CONSUMED BY, DIAGNOSTIC QUESTIONS).

---

### XR-10: Identity Delta Quality Gate Too Low [HIGH]

**Finding:** The skeleton requires ">= 1 specific new question" per delta. OD's actual deltas had 10-11 substantive elements (4 surprises + 3 refinements + 1 SOUL FAIL summary + 3 questions). A delta with only 1 question is nearly worthless.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Enrichment Architect | GAP-E12 | HIGH — "absurdly low" |
| Enrichment Auditor | CONFIRMED | "11 substantive elements, not 10" (minor correction) |
| Research Loop Analyst | GAP 7 (related) | "question evolution pattern not formalized" |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (3 sources)
**Resolution Needed:** Raise gate: >= 2 surprises, >= 1 identity refinement, >= 1 SOUL FAIL pattern, >= 2 forward questions. Total 10-20 lines.

---

### XR-11: Synced Duplicate Pattern Unaddressed [MEDIUM]

**Finding:** SOUL-DISCOVERIES.md and RESEARCH-ACTIVE.md each exist in two locations (checkpoints/ and provenance/) with manual sync. The skeleton never addresses whether AD should continue this pattern.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Provenance Analyst | GAP-PC-12 | LOW-MEDIUM |
| Provenance Auditor | CONFIRMED | "EXACT MATCH" on sync language |
| Chain Layer Analyst | GAP-CL-05 | MEDIUM |
| Chain Layer Auditor | CONFIRMED | Verified sync language |

**Auditor Status:** CONFIRMED by all auditors.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Designate ONE authoritative location. Make the other an explicit pointer.

---

### XR-12: ACCUMULATED-IDENTITY Location Anomaly [MEDIUM]

**Finding:** v1.1 lives in knowledge-architecture/, not in DESIGN-SYSTEM/provenance/ where all other Layer 1 documents live. A fresh agent reading only provenance/ would miss the full identity document.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Chain Layer Analyst | GAP-CL-02 | HIGH |
| Chain Layer Auditor | CONFIRMED | "anomaly is real" |
| Provenance Auditor | MISSED-01 (related) | "provenance/CLAUDE.md references v1, not v1.1" |
| Identity Cycle Analyst | (implicit) | v1.1 = 577 lines, the crown jewel |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Move v2 to DESIGN-SYSTEM/provenance/ with reference from knowledge-architecture/.

---

### XR-13: Playwright Contention During Audit [MEDIUM]

**Finding:** Despite sequential per-page assignment, within-wave Playwright contention still occurred in both audit teams. Only 2/13 visual workers got actual Playwright access in the comprehensive audit.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Retrospective Miner | Blind Spot #2, Lesson 3 | HIGH — "Plan for scarcity, not abundance" |
| Retrospective Auditor | CONFIRMED | "2/13 verified from MEMORY.md" |
| Verification Designer | Design Decision | "ALL new auditors are FILE-ONLY" — correct response |
| Verification Auditor | CONFIRMED | "well-justified by OD lesson" |

**Auditor Status:** CONFIRMED.
**Confidence Level:** VERY HIGH (4 sources)
**Resolution Needed:** All new auditors file-only. Sequential per-page visual audit with explicit enforcement, not just planning. Fallback to source-code analysis documented.

---

### XR-14: Anti-Citation-Theater Is a Judgment Infinite Regress [MEDIUM]

**Finding:** The skeleton uses judgment-based rules to verify compliance with other judgment-based rules, creating an infinite regress: "Apply research genuinely" -> "Check citations point to elements" -> "Detect discrepancy between fresh-eyes and claims" -> all are judgment.

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Retrospective Miner | Lesson 10, Section 9.3 | HIGH — "the rule checking whether another rule was followed is itself a judgment rule" |
| Retrospective Auditor | CONFIRMED | "CORRECT AND THE MOST VALUABLE FINDING IN THE DOCUMENT" |
| Research Loop Analyst | GAP 5 (related) | "No binary enforcement of the feedback loop" |
| Enrichment Architect | GAP-E16 (related) | "Citation verification is one-directional" |

**Auditor Status:** CONFIRMED.
**Confidence Level:** HIGH (4 sources)
**Resolution Needed:** Accept imperfection. Focus on binary components (count, ID format, element reference). Use fresh-eyes as gestalt quality check. Consider signature elements: specific CSS/HTML patterns that would ONLY exist if research was genuinely applied.

---

### XR-15: BACKBONE.md R-2 Count Still Wrong [MEDIUM]

**Finding:** The comprehensive audit corrected PIPELINE-MANIFEST R-2 count from 78 to 27, but BACKBONE.md was NOT corrected and still says 78 in TWO places (lines 85 and 311).

| Agent | Gap ID | Confidence |
|-------|--------|------------|
| Chain Layer Auditor | MISSED-1 | CRITICAL — "LIVE cross-Layer-0 inconsistency" |
| Provenance Analyst | Section 10 (related) | Identified count discrepancy generally |
| Enrichment Architect | GAP-E11 (related) | Post-audit convention staleness |

**Auditor Status:** Discovered by auditor (analyst missed it).
**Confidence Level:** HIGH (3 sources, directly verified against files)
**Resolution Needed:** Fix BACKBONE.md R-2 count from 78 to 27 in both locations BEFORE AD starts.

---

## SECTION 2: CONTRADICTIONS

### CONTRADICTION 1: Layer Count Disagreement

**Provenance Analyst** says OD has "5 distinct layers."
**Provenance Auditor** says OD's own documentation says "3 layers" (provenance/CLAUDE.md Section 6).
**Chain Layer Analyst** says there are "8 distinct layers" (or 9 with Layer 2.5).
**Chain Layer Auditor** confirms 9 functional levels but says analyst's "8 layers" label is inaccurate.

**Assessment:** There are TWO different layering systems that coexist without acknowledgment:
1. **Physical layering** (provenance/CLAUDE.md): 3 layers — inline headers, light sections, formal chain documents. This describes WHERE provenance lives.
2. **Functional layering** (chain layer analyst): 8-9 layers — meta, identity, research, tracking, infrastructure, findings, synthesis, patterns, handoff, distributed. This describes WHAT provenance does.

**Resolution:** Both are correct at different levels of abstraction. The skeleton should document BOTH systems and their relationship. The functional layering (chain layer analyst's model) is more useful for AD execution because it tells agents WHAT they're working with, not just where it lives.

---

### CONTRADICTION 2: Fresh-Eyes Challenge Coverage

**Research Loop Analyst** says challenge coverage is "0% — NOWHERE."
**Research Loop Auditor** says challenge coverage is "~15%" — fresh-eyes IS a challenge mechanism, just not formalized.

**Assessment:** The auditor is correct. Fresh-eyes exists as an informal challenge mechanism (information isolation produces genuinely different perspectives). But the analyst is correct that there is no FORMAL challenge protocol (classification, escalation, resolution). The number should be stated as "~15% informal coverage, 0% formal protocol."

**Resolution:** Add formal challenge protocol while acknowledging fresh-eyes as the existing informal mechanism.

---

### CONTRADICTION 3: Prompt Length Budget

**Retrospective Miner** recommends 200-line max for agent prompts.
**Retrospective Auditor** notes the skeleton ALREADY specifies 50-100 lines (Section 11.1).
**Research Loop Auditor** notes the proposed additions total ~175 lines against a 50-100 line budget.

**Assessment:** The auditor is correct — the skeleton already addresses this. The miner's 200-line recommendation is both higher than needed and redundant. However, the research loop auditor raises a real concern: the proposed additions from all 7 analysts total 200+ lines of new protocol. These cannot all be embedded in agent prompts within the 50-100 line budget.

**Resolution:** Proposed additions should be REFERENCE DOCUMENTS (files agents read), not prompt-embedded rules. Only the top 3-5 binary rules from each domain should be embedded in prompts. The rest go in AD-BINARY-GATES.md and domain-specific reference files.

---

### CONTRADICTION 4: Section Reference for Chain Outcomes

**Identity Cycle Analyst** references "Section 10" for chain outcomes.
**Identity Cycle Auditor** corrects: chain outcomes are in Section 6.3, not Section 10.

**Assessment:** Auditor is correct. Section 10 is about recovery, Section 6.3 is about open question resolution and chain outcomes.

**Resolution:** Minor factual correction. No impact on the gap analysis conclusions.

---

### CONTRADICTION 5: UNIQUE FRESH Count (6 vs 7)

**Retrospective Miner** says 6 UNIQUE FRESH findings (citing captain report).
**Retrospective Auditor** notes MEMORY.md and scribe-chain.md say 7.

**Assessment:** Source disagreement between captain report (6) and scribes/MEMORY (7). The actual CAPTAIN-FRESHEYES-REPORT says 6; MEMORY.md says 7.

**Resolution:** Minor discrepancy. Does not affect the lesson (fresh-eyes produces high-value unique findings regardless of whether 6 or 7).

---

## SECTION 3: EMERGENT PATTERNS

### EMERGENT PATTERN 1: The Binary-Judgment Boundary

**Visible across:** ALL 7 analyst reports, ALL 7 auditor reports
**Contributing dimensions:** Retrospective (Lesson 10), Identity Cycle (paradigm fit test), Research Loop (feedback enforcement), Verification (gate analysis), Enrichment (convention validation)

**The pattern:** Every analyst proposes improvements that contain hidden judgment components. Every auditor catches these judgment components. The binary rule principle (100% compliance on binary, ~0% on judgment) is the most-cited principle across all 14 files, yet analysts consistently violate it in their own proposals.

**Why it wasn't visible from any single dimension:** Each analyst's proposals look reasonable in isolation. It's only when you see ALL proposals together that the TOTAL judgment burden becomes visible. The combined proposals would add 15+ judgment-based rules to the skeleton, each of which the metacognition analysis predicts will achieve ~0% compliance.

**Impact on AD skeleton:** The skeleton must explicitly distinguish between:
- **Binary rules** (embed in prompts, gate-enforce): count thresholds, file existence, ID format, computed values
- **Judgment rules** (assign to Lead or Fresh-Eyes ONLY): quality assessment, paradigm fit, challenge resolution
- **Reference documents** (agents read but aren't gate-checked on): identity lens, tension tables, question evolution patterns

**This is the deepest structural finding in the entire gap analysis.**

---

### EMERGENT PATTERN 2: The Convention Bottleneck

**Visible across:** Enrichment (GAP-E01, E02, E04), Identity Cycle (GAP-IC-02, Missed Gap C), Retrospective (Blind Spot #3), Verification (Convention Auditor), Chain Layers (GAP-CL-04)

**The pattern:** The Convention Agent is a single point of failure with the highest blast radius in the entire AD phase. It receives the full 577-line identity, makes unsupervised design decisions about axis geometry, freezes those decisions before any validation, and every builder downstream inherits its output. No other agent has this combination of (a) unsupervised judgment, (b) pre-validation freezing, and (c) 6x downstream amplification.

**Why it wasn't visible from any single dimension:** Enrichment focuses on the convention DOCUMENT. Identity Cycle focuses on identity DOSAGE to the agent. Retrospective focuses on HISTORICAL precedent. Verification focuses on WHO AUDITS the output. Only together do these form a complete picture of the bottleneck.

**Impact on AD skeleton:** The Convention Agent needs:
1. Explicit input specification (GAP-E01)
2. Two-phase lifecycle: DRAFT -> VALIDATE -> FROZEN (GAP-E02)
3. LOCKED/AXIS split in the template (GAP-E04)
4. Dedicated Convention Auditor (Verification Designer)
5. Identity dosage appropriate to its role (GAP-IC-02)
6. T2->T1 promotion protocol for validated values

---

### EMERGENT PATTERN 3: The Provenance Timing Paradox

**Visible across:** Provenance (GAP-PC-07, PC-05), Retrospective (Mode C untested), Enrichment (GAP-E07), Chain Layers (Section 6)

**The pattern:** Mode C incremental provenance (write it when you discover it) is the skeleton's single most important change from OD. It directly addresses the 18-agent remediation failure. BUT it has never been tested during construction. OD's actual successful provenance writing was always done by SCRIBES (sequential, dedicated), never by BUILDERS (concurrent, multi-tasking). The skeleton proposes builders do what scribes did, without evidence this works.

**Why it wasn't visible from any single dimension:** Provenance focuses on the chain structure. Retrospective focuses on historical evidence. Enrichment focuses on what scribes actually did. Chain Layers focuses on layer architecture. Only together does the pattern emerge: the skeleton's most important fix (incremental provenance) addresses the right problem (deferred provenance) with the wrong mechanism (builder-driven instead of scribe-driven).

**Impact on AD skeleton:** Plan for Mode C to fail. The fallback protocol should be: per-wave scribe agents extract findings from builder CSS comment headers and formalize them in AD-outbound-findings.md. This preserves Mode C's INTENT (findings registered per wave, not deferred to end) while using OD's PROVEN mechanism (scribes, not builders). Builders still write informal CSS comments about their findings; they just don't have to open a separate file to formalize them.

---

### EMERGENT PATTERN 4: Document Engineering, Not Pipeline Design

**Visible across:** Enrichment (Section 11 "THE META-GAP"), Chain Layers (Section 10 "LAYERED GRAPH"), Identity Cycle (Section 8 "BIDIRECTIONAL cycle"), Provenance (Section 1 "5 layers")

**The pattern:** Four of seven analysts independently concluded that the skeleton treats its domain as a SEQUENCE OF OPERATIONS when it should be treating it as a DOCUMENT SPECIFICATION. The enrichment architect says "enrichment is document engineering." The chain layer analyst says "the chain is a layered graph, not a linear chain." The identity cycle analyst says "identity should be bidirectional, not one-way." The provenance analyst says "the chain has 5 layers, not 2."

**Why it wasn't visible from any single dimension:** Each analyst describes their own domain as more complex than the skeleton represents. Only together does the meta-pattern emerge: the skeleton's fundamental model (sequential pipeline of operations) underrepresents every domain it touches.

**Impact on AD skeleton:** The skeleton should include STRUCTURAL definitions (what a complete document looks like, what layers exist, what traversal paths connect them) alongside PROCEDURAL definitions (what agents do, in what order). Currently it is ~90% procedural and ~10% structural. It should be ~60% procedural and ~40% structural.

---

## SECTION 4: AUDITOR EFFECTIVENESS

### Provenance Chain Auditor — HIGHLY EFFECTIVE (88% reliability rating)
- **Analyst gaps caught:** Corrected section count (10 -> 7 populated)
- **Analyst understatements found:** YAML keys 14 not 9 in outbound-findings
- **Severity changes:** UPGRADED GAP-PC-09 from HIGH to CRITICAL (correct call), DOWNGRADED GAP-PC-04 from MEDIUM to LOW-MEDIUM (correct — contradiction may be resolved in synthesis)
- **Missed gaps found by auditor:** 5 (MISSED-01 through MISSED-05)
- **Valid disputes:** 1 (5-layer model is analyst interpretation, not OD documentation)
- **Overall:** HIGH reliability. Thorough spot-checking with source verification.

### Research Loop Auditor — EFFECTIVE (A- grade)
- **Analyst gaps caught:** 0% challenge coverage overclaim (should be ~15%)
- **Missed gaps found:** 4 (research package quality, identity lens expiration, prompt budget, binary-judgment self-check)
- **Key contribution:** Identified that analyst's proposals total ~175 lines against 50-100 line budget — a practical blocker
- **Valid disputes:** 1 (challenge coverage not 0%)
- **Overall:** GOOD reliability. Best contribution was the prompt budget concern.

### Enrichment Auditor — EFFECTIVE (B+ grade)
- **Accuracy errors found:** 3 (scribe role conflation, dark matter indexer count, delta element count)
- **Missed gaps found:** 4 (M1-research package format, M2-before/after measurement, M3-Weaver drift detection, M4-convention spec staleness depth)
- **Key contribution:** Identified GAP-E04 (LOCKED/AXIS split) as "single most impactful recommendation" — correct prioritization
- **Structural weaknesses:** 2 (LOCKED/AXIS needs implementation detail, priority ordering ignores dependencies)
- **Overall:** GOOD reliability. Added 4 new gaps to the original 16.

### Identity Cycle Auditor — HIGHLY EFFECTIVE (8/10)
- **Constraint map verification:** 10/10 claims verified against source files
- **Missed gaps found:** 3 (delta-delta conflict resolution, Soul Piece #6 protocol, Convention Agent bottleneck)
- **Recurring weakness flagged:** Binarization failure in analyst's own proposals (4 instances)
- **Key contribution:** Caught that SOUL-DISCOVERIES says "LOCKED — 5 soul pieces are final" but skeleton plans for #6 — a source contradiction
- **Overall:** HIGH reliability. Most thorough verification of claims against source files.

### Verification Topology Auditor — EFFECTIVE (8.4/10)
- **Factual claims verified:** 5/5 confirmed (1 partially)
- **Gaps found:** 6 in topology + 4 missed scenarios = 10 total
- **Key contributions:** CA-16 (convention inheritance completeness), pre-Gate-0 housekeeping verification, end-to-end pipeline plant concept
- **Valid disputes:** 1 (Visual Auditor's "zero overlap" claim slightly overstated)
- **Overall:** GOOD reliability. Added practical improvements to an already strong design.

### Chain Layer Auditor — EFFECTIVE (8.5/10)
- **Layer map verification:** LARGELY CORRECT with 2 issues
- **Critical discovery:** BACKBONE.md R-2 count still wrong (78 vs 27 in 2 places) — analyst missed this
- **Other missed gaps:** stage-4-axis-ad/CLAUDE.md references v1 not v1.1; dual header block distinction; explorations/axis/ is empty
- **Key contribution:** The BACKBONE stale data finding is actionable pre-AD housekeeping
- **Overall:** HIGH reliability. Found the most immediately actionable housekeeping item.

### Retrospective Auditor — EFFECTIVE (8.5/10)
- **Coverage verification:** All 6 teams confirmed
- **Accuracy spot-checks:** Mostly verified, caught 6.53% vs 9.79% temporal confusion and 6 vs 7 UNIQUE FRESH discrepancy
- **Key contribution:** Identified the anti-citation-theater infinite regress as "THE MOST VALUABLE FINDING" — correct assessment
- **False gap caught:** Prompt length recommendation (200 lines) when skeleton already says 50-100
- **Overall:** GOOD reliability. Best contribution was validating the infinite regress insight.

---

## SECTION 5: DEFINITIVE GAP RANKING

### CRITICAL (Must be resolved before AD execution starts)

| Rank | Gap | Sources | Description |
|------|-----|---------|-------------|
| 1 | File write contention (XR-02) | PC-09, auditor upgrade | Per-builder scratch files, Lead merges between waves |
| 2 | Convention bottleneck (XR-03 + Emergent Pattern 2) | E02, IC-02, Retro #3 | Two-phase lifecycle, LOCKED/AXIS split, Convention Auditor |
| 3 | Builder finding writing untested (XR-01) | PC-07, Retro #4, E07 | Fallback: per-wave scribe agents extract from CSS comments |
| 4 | Challenge protocol missing (XR-04) | Research GAP-1, IC-03 | CLASS A/B/C protocol for identity-challenging research |
| 5 | Convention Agent inputs unspecified (E01) | Enrichment | Enumerate explicit input files, distinguish T1 vs T2 authority |

### HIGH (Must be resolved during Phase 0)

| Rank | Gap | Sources | Description |
|------|-----|---------|-------------|
| 6 | Enrichment layers not enumerated (XR-08) | E06 | 8-layer checklist in every builder prompt |
| 7 | Inline header format unspecified (XR-09) | PC-01 | 7-section template specification |
| 8 | Layer architecture undefined (XR-06) | CL-01 | 30-50 line LAYER ARCHITECTURE section |
| 9 | Static research guidance (XR-07) | Research GAP-2, IC-01 | Dynamic guidance update per wave |
| 10 | R-2 structural orphaning (XR-05) | Research GAP-3 | Embed in research packages, anti-orphaning rule |
| 11 | Identity delta quality gate (XR-10) | E12 | Raise from 1 question to 2 surprises + 2 questions minimum |
| 12 | Research package format unspecified | Enrichment Auditor M1 | Template: chain traversal + R-4 + R-2 + EXT + application instructions |
| 13 | Template enforcement weakness (E04) | Enrichment | LOCKED layer (immutable) + AXIS layer (builder-authored) |
| 14 | No post-build chain integrity diagnostic (PC-10) | Provenance | Finding-registry equivalent as Gate 6 step |
| 15 | BACKBONE.md R-2 count stale (XR-15) | Chain Layer Auditor | Fix 78->27 in 2 places BEFORE AD starts |

### MEDIUM (Should be addressed in the AD plan)

| Rank | Gap | Sources | Description |
|------|-----|---------|-------------|
| 16 | Anti-citation-theater infinite regress (XR-14) | Retro Lesson 10 | Accept imperfection, enforce binary components, use fresh-eyes for gestalt |
| 17 | YAML frontmatter keys unstandardized (PC-02) | Provenance | Define mandatory key set for AD documents |
| 18 | Synced duplicate pattern (XR-11) | PC-12, CL-05 | Designate authoritative location |
| 19 | ACCUMULATED-IDENTITY location (XR-12) | CL-02 | Move v2 to provenance/ |
| 20 | CLAUDE.md navigation mesh (CL-03) | Chain Layers | Update 5+ CLAUDE.md files for AD |
| 21 | Convention inheritance semantics (E10) | Enrichment | Standalone AD spec with inheritance labels |
| 22 | Scribe operations under-specified (E07) | Enrichment | Enumerate all 6+ scribe target files |
| 23 | Dark matter prevention insufficient (E08) | Enrichment | Weaver as dark matter indexer per wave |
| 24 | Builder deviation protocol (E05) | Enrichment | STOP -> DOCUMENT -> CLASSIFY -> APPROVE |
| 25 | Playwright contention (XR-13) | Retro, Verification | File-only for all new auditors, fallback documented |
| 26 | Identity dosage per role (IC-02) | Identity Cycle | Role-specific identity slices |
| 27 | v2 determination protocol (IC-05) | Identity Cycle | 3 decision frameworks for Identity Scribe |
| 28 | Open question evidence standards (IC-06) | Identity Cycle | Binary evidence standard per v1.1 question |
| 29 | Convention validation gate (E03) | Enrichment | Playwright verification of template computed styles |
| 30 | Verification report format (E14) | Enrichment | Standardized report template |
| 31 | SOUL FAIL accumulation tracking (E13) | Enrichment | Weaver maintains accumulator in state file |
| 32 | stage-4-axis-ad/CLAUDE.md references v1 not v1.1 (Chain Auditor M-2) | Chain Layers | Fix reference before AD starts |
| 33 | Pattern catalog integration (CL-06) | Chain Layers | axis-patterns.md location, PATTERN-INDEX update |

### LOW (Nice to have)

| Rank | Gap | Sources | Description |
|------|-----|---------|-------------|
| 34 | R-4 disambiguation check (PC-08) | Provenance | Verify no R-4 ID collisions in Phase 0 |
| 35 | EXT-RESEARCH-REGISTRY batch vs incremental (PC-11) | Provenance | Note historical precedent |
| 36 | Screenshot provenance (E09) | Enrichment | Add template for measurement baseline |
| 37 | Deferred issues tracking (E15) | Enrichment | DEFERRED ISSUES section in state file |
| 38 | Cross-stage file naming convention (CL-07) | Chain Layers | State convention explicitly |
| 39 | Feedback loop metrics (Research GAP-10) | Research Loop | Delta-to-query conversion rate |
| 40 | Delta-only recovery insufficient (IC-07) | Identity Cycle | Cumulative checkpoint option |

---

## SECTION 6: THE UNIFIED GAP PICTURE

### What Is the AD Skeleton FUNDAMENTALLY Missing?

The AD skeleton is the best-informed plan in the project's history. It directly addresses the top failures from 6 prior teams. Its remaining risks are mostly in NOVEL territory rather than REPEATED territory. That is the right risk profile.

But reading all 14 files together reveals a conceptual gap that no single analyst fully articulated:

**The skeleton describes WHAT TO DO but not WHAT THINGS ARE.**

It tells agents to create AD-CONVENTION-SPEC.md, AD-outbound-findings.md, identity deltas, research packages, and 15 other documents. It tells them in what order (wave-based), with what gates (binary checks), and with what ownership (per-file). This procedural specification is excellent.

What it does NOT tell them is:
- What a COMPLETE exploration file contains (8 enrichment layers — XR-08)
- What the provenance chain IS (8-9 functional layers — XR-06)
- What the RELATIONSHIP is between identity, research, and building (bidirectional cycle, not one-way input — XR-04, XR-07)
- What COMPLETE provenance metadata looks like (7-section inline headers, 14-key YAML frontmatter — XR-09)
- What a CORRECT convention spec looks like when it contains untested axis geometry decisions (two-phase lifecycle — XR-03)

The skeleton is a pipeline specification masquerading as a complete plan. It describes the PROCESS accurately but under-specifies the PRODUCT. Agents following the skeleton will execute the right steps in the right order and produce documents that pass the binary gates — but without structural definitions of what those documents should CONTAIN, the quality of the output depends on individual agent judgment. And the metacognition analysis proved that judgment achieves ~0% compliance.

### The Three Deepest Holes

**Hole 1: The Convention Bottleneck.** One agent makes unsupervised design decisions that propagate 6x with no intermediate validation. Fix: two-phase lifecycle + LOCKED/AXIS split + Convention Auditor.

**Hole 2: The Provenance Timing Paradox.** The most important change (incremental provenance) uses the wrong mechanism (builders instead of scribes). Fix: plan for Mode C failure with scribe fallback.

**Hole 3: The Binary-Judgment Boundary.** The skeleton correctly mandates binary rules but contains hidden judgment in 7+ gates. The gap analyses propose 15+ additional judgment rules. Without explicitly categorizing every rule as BINARY (gate-enforce) or JUDGMENT (Lead/Fresh-Eyes only), the system will have ~0% compliance on half its rules. Fix: explicit binary/judgment classification of every rule in the plan.

### What Would Cause AD to Repeat OD's Mistakes

OD's mistakes were:
1. Building without conventions (caused 3-dialect gap)
2. Deferring provenance (required 18-agent remediation)
3. Orphaning research evaluations (R-2 at 0% for 3 stages)
4. Not enforcing identity constraints proactively (caused 2px border epidemic)

The AD skeleton directly addresses #1 (convention-first) and #2 (Mode C). It partially addresses #3 (R-2 embedded in packages) and #4 (binary soul checklist).

What would cause AD to repeat these:
- **Convention-first WITH WRONG conventions** — freezing untested T2 values creates a new version of mistake #1
- **Mode C WITH BUILDER FAILURE** — builders not writing findings creates a new version of mistake #2
- **R-2 embedded BUT R-2/R-4 synergies ignored** — research applied mechanically, not intelligently, is a new version of mistake #3
- **Soul checklist WITHOUT paradigm fit test** — binary soul gates pass but chain coherence violations propagate, a subtler version of mistake #4

The AD skeleton has learned from the OBVIOUS failures. Its risk is in the SUBTLE versions — the same mistakes wearing different masks.

---

## APPENDIX: AUDITOR ACCURACY SUMMARY

| Auditor | Grade | Gaps Found | Disputes | Accuracy |
|---------|-------|------------|----------|----------|
| Provenance Chain Auditor | 88% | 5 missed gaps | 1 valid (5-layer model) | 7/7 spot-checks accurate |
| Research Loop Auditor | A- | 4 missed gaps | 1 valid (0% -> ~15%) | 6/6 spot-checks accurate |
| Enrichment Auditor | B+ | 4 missed gaps | 0 | 7/8 spot-checks accurate |
| Identity Cycle Auditor | 8/10 | 3 missed gaps | 0 | 10/12 verifications passed |
| Verification Auditor | 8.4/10 | 10 items total | 1 valid (zero overlap overstated) | 5/5 spot-checks confirmed |
| Chain Layer Auditor | 8.5/10 | 5 missed items | 0 | All traversal paths verified |
| Retrospective Auditor | 8.5/10 | 5 missed lessons | 1 valid (prompt length false gap) | 10/12 spot-checks verified |

**Average auditor effectiveness:** 8.4/10
**Total analyst gaps auditors CONFIRMED:** 67 of 71 (94.4%)
**Total analyst gaps auditors DISPUTED:** 4 of 71 (5.6%) — all disputes were severity adjustments or factual corrections, not wholesale rejections
**Total NEW gaps auditors discovered:** 29 across all 7 reports
**Total analyst accuracy errors found:** 12 (mostly minor: wrong counts, wrong section references, overclaims)

---

**END OF WEAVER SYNTHESIS**
**Total: ~740 lines**
**Cross-references: 15**
**Contradictions: 5**
**Emergent patterns: 4**
**Definitive gaps: 40 (5 CRITICAL, 10 HIGH, 18 MEDIUM, 7 LOW)**
**Core finding: The skeleton is a pipeline specification that under-specifies the product. It tells agents WHAT TO DO but not WHAT THINGS ARE.**
